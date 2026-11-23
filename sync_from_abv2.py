#!/usr/bin/env python3
"""
模块：football-team-names-zh/sync_from_abv2.py
所属项目：球小策开源生态矩阵（open_source_matrix）
主要职责：只读查询 ABV2 数据库的主流联赛、活跃俱乐部与中文/英文别名，
          经严格去私有化脱敏后生成 Python（data.py）与 NPM（index.js）双端字典文件，
          支持 --dry-run 预检与 --auto-push 自动同步至 GitHub 仓库。
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from dotenv import dotenv_values
from sqlalchemy import create_engine, text

PKG_DIR = Path(__file__).resolve().parent
REPO_ROOT = PKG_DIR.parent.parent.parent
ABV2_ENV = REPO_ROOT / "analysis-bot-v2" / ".env"
ROOT_ENV = REPO_ROOT / ".env"

DATA_PY_PATH = PKG_DIR / "src" / "football_team_names_zh" / "data.py"
INDEX_JS_PATH = PKG_DIR / "src" / "index.js"

# 主流公开赛事白名单（覆盖五大联赛、欧战、洲际国家队及热门次级/亚洲/美洲主流联赛）
TARGET_LEAGUE_IDS = (
    39, 140, 135, 78, 61,       # 五大联赛
    2, 3, 848,                  # 欧冠 / 欧联 / 欧协联
    1, 4, 5, 9, 6, 7,           # 世界杯 / 欧洲杯 / 欧国联 / 美洲杯 / 非洲杯 / 亚洲杯
    40, 41, 141, 136, 79, 62,   # 英冠英甲 / 西乙 / 意乙 / 德乙 / 法乙
    88, 94, 144, 203, 179,      # 荷甲 / 葡超 / 比甲 / 土超 / 苏超
    103, 113, 218, 207, 197, 345,  # 挪超 / 瑞超 / 奥甲 / 瑞士超 / 希腊超 / 捷克甲
    98, 99, 292, 169, 307, 188, # J1 / J2 / K1 / 中超 / 沙特联 / 澳超
    71, 128, 253, 262, 13, 11,  # 巴甲 / 阿甲 / 美职联 / 墨超 / 南美解放者杯 / 南美杯
)

FORBIDDEN_TERMS = ("fotmob", "api_football", "opta", "odds", "bookmaker", "赔率", "盘口", "庄家", "稳胆")


def _load_db_url() -> str:
    """按绝对路径安全读取 ABV2 只读数据库连接串"""
    if os.getenv("AB_DB_URL"):
        return os.environ["AB_DB_URL"]
    for p in (ABV2_ENV, ROOT_ENV):
        if p.exists():
            vals = dotenv_values(p)
            if vals.get("AB_DB_URL"):
                return str(vals["AB_DB_URL"])
            if vals.get("ABV2_DB_PASSWORD"):
                pwd = vals["ABV2_DB_PASSWORD"]
                return f"mysql+pymysql://analysisbotv2:{pwd}@rm-bp1bt583m4fcf2imq1o.mysql.rds.aliyuncs.com:3306/analysisbotv2"
    raise RuntimeError("未找到 ABV2 数据库连接配置（AB_DB_URL 或 ABV2_DB_PASSWORD）")


def _load_github_token() -> str:
    """按绝对路径读取 GitHub Token"""
    if os.getenv("GITHUB_TOKEN"):
        return os.environ["GITHUB_TOKEN"].strip()
    for p in (
        Path("/root/secrets/projects/qiuxiaozhiwp/open_source_growth.env"),
        REPO_ROOT / "en_terminal_standalone" / ".env",
        Path("/root/.github_credentials.backup"),
    ):
        if p.exists():
            for line in p.read_text(encoding="utf-8", errors="ignore").splitlines():
                line = line.strip()
                if "GITHUB_TOKEN=" in line:
                    v = line.split("=", 1)[1].strip().strip('"').strip("'")
                    if v:
                        return v
                if line.startswith(("ghp_", "github_pat_")):
                    return line
    return ""


def _clean_alias(val: str) -> str:
    """清洗空白并过滤过短或含特殊控制字符的别名"""
    s = re.sub(r"\s+", " ", str(val or "")).strip()
    if len(s) < 2 and not re.search(r"[\u4e00-\u9fff]", s):
        return ""
    low = s.lower()
    if any(bad in low for bad in FORBIDDEN_TERMS):
        return ""
    return s


def _dedup_aliases(items: list[str], cap: int = 8) -> list[str]:
    """保持顺序去重并裁剪长度"""
    seen = set()
    out = []
    for item in items:
        s = _clean_alias(item)
        if not s:
            continue
        k = s.lower()
        if k in seen:
            continue
        seen.add(k)
        out.append(s)
        if len(out) >= cap:
            break
    return out


def fetch_normalized_data(team_limit: int = 550) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    """从 ABV2 生产库提取主流联赛与高频活跃俱乐部的中英文别名字典"""
    engine = create_engine(_load_db_url(), pool_pre_ping=True, connect_args={"connect_timeout": 10, "read_timeout": 30})
    lid_csv = ",".join(str(x) for x in TARGET_LEAGUE_IDS)

    with engine.connect() as conn:
        league_rows = conn.execute(text(f"""
            SELECT l.league_id, l.name, l.country
            FROM abv2_leagues l
            WHERE l.league_id IN ({lid_csv})
            ORDER BY FIELD(l.league_id, {lid_csv})
        """)).mappings().all()

        l_alias_rows = conn.execute(text(f"""
            SELECT league_id, alias, language_code, is_primary
            FROM abv2_alias_leagues
            WHERE league_id IN ({lid_csv})
              AND language_code IN ('zh', 'zh-CN', 'en')
            ORDER BY is_primary DESC, id ASC
        """)).mappings().all()

        l_alias_map: dict[int, list[tuple[str, str, int]]] = {}
        for r in l_alias_rows:
            l_alias_map.setdefault(int(r["league_id"]), []).append(
                (str(r["alias"]), str(r["language_code"]), int(r["is_primary"] or 0))
            )

        leagues: list[dict[str, Any]] = []
        for lr in league_rows:
            lid = int(lr["league_id"])
            en_name = str(lr["name"]).strip()
            al_list = l_alias_map.get(lid, [])
            zh_candidates = [a for a, lc, p in al_list if lc.startswith("zh") and p == 1]
            if not zh_candidates:
                zh_candidates = [a for a, lc, _ in al_list if lc.startswith("zh")]
            zh_name = zh_candidates[0] if zh_candidates else en_name
            aliases = _dedup_aliases([zh_name, en_name] + [a for a, _, _ in al_list], cap=8)
            leagues.append({
                "id": lid,
                "name": en_name,
                "zh_name": zh_name,
                "country": str(lr["country"] or "").strip(),
                "aliases": aliases,
            })

        # 筛选近期赛程最活跃且具备中文别名的俱乐部（Top team_limit）
        team_rows = conn.execute(text(f"""
            SELECT t.team_id, t.name, t.country, COUNT(f.fixture_id) AS match_cnt
            FROM abv2_teams t
            JOIN abv2_fixtures f
              ON (f.home_team_id = t.team_id OR f.away_team_id = t.team_id)
            WHERE f.league_id IN ({lid_csv})
              AND f.season_year >= 2024
            GROUP BY t.team_id, t.name, t.country
            ORDER BY match_cnt DESC, t.team_id ASC
            LIMIT :lim
        """), {"lim": team_limit}).mappings().all()

        team_ids = [int(r["team_id"]) for r in team_rows]
        t_alias_map: dict[int, list[tuple[str, str, int]]] = {}
        if team_ids:
            tid_csv = ",".join(str(x) for x in team_ids)
            t_alias_rows = conn.execute(text(f"""
                SELECT team_id, alias, language_code, is_primary
                FROM abv2_alias_teams
                WHERE team_id IN ({tid_csv})
                  AND language_code IN ('zh', 'zh-CN', 'en')
                ORDER BY is_primary DESC, id ASC
            """)).mappings().all()
            for r in t_alias_rows:
                t_alias_map.setdefault(int(r["team_id"]), []).append(
                    (str(r["alias"]), str(r["language_code"]), int(r["is_primary"] or 0))
                )

        teams: list[dict[str, Any]] = []
        for tr in team_rows:
            tid = int(tr["team_id"])
            en_name = str(tr["name"]).strip()
            al_list = t_alias_map.get(tid, [])
            zh_candidates = [a for a, lc, p in al_list if lc.startswith("zh") and p == 1]
            if not zh_candidates:
                zh_candidates = [a for a, lc, _ in al_list if lc.startswith("zh")]
            if not zh_candidates:
                continue
            zh_name = zh_candidates[0]
            aliases = _dedup_aliases([zh_name, en_name] + [a for a, _, _ in al_list], cap=8)
            teams.append({
                "id": tid,
                "name": en_name,
                "zh_name": zh_name,
                "country": str(tr["country"] or "").strip(),
                "aliases": aliases,
            })

    engine.dispose()
    return leagues, teams


def _assert_clean_payload(leagues: list[dict[str, Any]], teams: list[dict[str, Any]]) -> None:
    """脱敏与完整性机械检查"""
    assert len(leagues) >= 25, f"联赛数量过少: {len(leagues)}"
    assert len(teams) >= 350, f"球队数量过少: {len(teams)}"
    serialized = json.dumps({"leagues": leagues, "teams": teams}, ensure_ascii=False).lower()
    for term in FORBIDDEN_TERMS:
        assert term not in serialized, f"检测到禁用词或私有特征: {term}"


def render_data_py(leagues: list[dict[str, Any]], teams: list[dict[str, Any]]) -> str:
    """渲染 Python 版 data.py"""
    now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    header = (
        '"""\n'
        "全球主流足球俱乐部与赛事联赛中英文规范数据字典\n"
        "数据来源：球小策足球大数据中心 (https://www.qiuxiaoce.com)\n"
        f"同步时间：{now_str}（{len(leagues)} 项赛事 / {len(teams)} 支俱乐部）\n"
        '"""\n\n'
    )
    return (
        header
        + f"LEAGUES_DATA = {json.dumps(leagues, ensure_ascii=False, indent=4)}\n\n"
        + f"TEAMS_DATA = {json.dumps(teams, ensure_ascii=False, indent=4)}\n"
    )


def render_index_js(leagues: list[dict[str, Any]], teams: list[dict[str, Any]]) -> str:
    """渲染 NPM 版 src/index.js（保持向后兼容导出接口）"""
    now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    return f"""/**
 * football-team-names-zh (NPM Edition)
 * Fast, zero-dependency Chinese & English normalization and alias matching for global football clubs and leagues.
 *
 * Data Source: QiuXiaoCe (https://www.qiuxiaoce.com)
 * Synced At: {now_str} ({len(leagues)} leagues / {len(teams)} clubs)
 */

const LEAGUES_DATA = {json.dumps(leagues, ensure_ascii=False, indent=2)};

const TEAMS_DATA = {json.dumps(teams, ensure_ascii=False, indent=2)};

function clean(str) {{
  return String(str || "").replace(/[\\s\\-_'·.]+/g, "").toLowerCase();
}}

function normalizeTeam(query) {{
  if (!query) return null;
  const k = clean(query);
  for (const t of TEAMS_DATA) {{
    if (clean(t.name) === k || clean(t.zh_name) === k) return t;
    if (t.aliases.some(a => clean(a) === k)) return t;
  }}
  for (const t of TEAMS_DATA) {{
    if (clean(t.name).includes(k) || clean(t.zh_name).includes(k)) return t;
    if (t.aliases.some(a => clean(a).includes(k) || k.includes(clean(a)))) return t;
  }}
  return null;
}}

function searchTeams(query, limit = 5) {{
  if (!query) return [];
  const k = clean(query);
  const results = [];
  for (const t of TEAMS_DATA) {{
    if (
      clean(t.name).includes(k) ||
      clean(t.zh_name).includes(k) ||
      t.aliases.some(a => clean(a).includes(k) || k.includes(clean(a)))
    ) {{
      results.push(t);
      if (results.length >= limit) break;
    }}
  }}
  return results;
}}

function normalizeLeague(query) {{
  if (!query) return null;
  const k = clean(query);
  for (const l of LEAGUES_DATA) {{
    if (clean(l.name) === k || clean(l.zh_name) === k) return l;
    if (l.aliases.some(a => clean(a) === k)) return l;
  }}
  for (const l of LEAGUES_DATA) {{
    if (clean(l.name).includes(k) || clean(l.zh_name).includes(k)) return l;
    if (l.aliases.some(a => clean(a).includes(k) || k.includes(clean(a)))) return l;
  }}
  return null;
}}

module.exports = {{
  TEAMS_DATA,
  LEAGUES_DATA,
  normalizeTeam,
  searchTeams,
  normalizeLeague
}};
"""


def _github_put_file(owner: str, repo: str, path_in_repo: str, content_text: str, message: str, token: str) -> None:
    """通过 GitHub Contents API 上传单文件"""
    api_url = f"https://api.github.com/repos/{owner}/{repo}/contents/{path_in_repo}"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github+json",
        "User-Agent": "QiuXiaoCe-Alias-Sync",
        "Content-Type": "application/json",
    }
    sha = None
    req_get = urllib.request.Request(api_url, headers=headers, method="GET")
    try:
        with urllib.request.urlopen(req_get, timeout=20) as r:
            info = json.loads(r.read().decode("utf-8"))
            sha = info.get("sha")
    except urllib.error.HTTPError as e:
        if e.code != 404:
            raise

    payload: dict[str, Any] = {
        "message": message,
        "content": base64.b64encode(content_text.encode("utf-8")).decode("utf-8"),
        "branch": "main",
    }
    if sha:
        payload["sha"] = sha
    req_put = urllib.request.Request(
        api_url,
        headers=headers,
        method="PUT",
        data=json.dumps(payload).encode("utf-8"),
    )
    with urllib.request.urlopen(req_put, timeout=20) as r:
        assert r.status in (200, 201), f"GitHub PUT {path_in_repo} HTTP {r.status}"


def main() -> int:
    parser = argparse.ArgumentParser(description="从 ABV2 同步脱敏球队与联赛中英文别名字典")
    parser.add_argument("--dry-run", action="store_true", help="仅统计并校验脱敏规则，不写盘不推送")
    parser.add_argument("--team-limit", type=int, default=550, help="拉取活跃俱乐部上限（默认 550）")
    parser.add_argument("--auto-push", action="store_true", help="同步完成后自动推送到 GitHub ddzyx/football-team-names-zh")
    args = parser.parse_args()

    leagues, teams = fetch_normalized_data(team_limit=args.team_limit)
    _assert_clean_payload(leagues, teams)

    py_text = render_data_py(leagues, teams)
    js_text = render_index_js(leagues, teams)

    print(f"Fetched & sanitized: {len(leagues)} leagues, {len(teams)} teams.")
    if args.dry_run:
        print("DRY RUN OK: zero forbidden terms, files not modified.")
        return 0

    DATA_PY_PATH.write_text(py_text, encoding="utf-8")
    INDEX_JS_PATH.write_text(js_text, encoding="utf-8")
    print(f"Written: {DATA_PY_PATH} ({len(py_text)} bytes)")
    print(f"Written: {INDEX_JS_PATH} ({len(js_text)} bytes)")

    if args.auto_push:
        token = _load_github_token()
        if not token:
            print("ERROR: --auto-push requested but GITHUB_TOKEN is missing.", file=sys.stderr)
            return 2
        msg = f"chore(data): sync {len(leagues)} leagues and {len(teams)} clubs aliases ({datetime.now(timezone.utc):%Y-%m-%d})"
        _github_put_file("ddzyx", "football-team-names-zh", "src/football_team_names_zh/data.py", py_text, msg, token)
        _github_put_file("ddzyx", "football-team-names-zh", "src/index.js", js_text, msg, token)
        print("Auto-push to GitHub ddzyx/football-team-names-zh OK.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
