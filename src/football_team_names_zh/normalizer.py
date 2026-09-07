"""
球队与联赛名称模糊归一化算法
"""

import re
from typing import Any, Dict, List, Optional
from .data import LEAGUES_DATA, TEAMS_DATA


def _clean_string(s: str) -> str:
    """去除特殊字符与空白并转小写"""
    return re.sub(r"[\s\-_'·.]+", "", str(s)).lower()


# 构建预哈希查找表
_TEAM_LOOKUP: Dict[str, Dict[str, Any]] = {}
for team in TEAMS_DATA:
    for alias in team["aliases"]:
        _TEAM_LOOKUP[_clean_string(alias)] = team
    _TEAM_LOOKUP[_clean_string(team["name"])] = team
    _TEAM_LOOKUP[_clean_string(team["zh_name"])] = team

_LEAGUE_LOOKUP: Dict[str, Dict[str, Any]] = {}
for league in LEAGUES_DATA:
    for alias in league["aliases"]:
        _LEAGUE_LOOKUP[_clean_string(alias)] = league
    _LEAGUE_LOOKUP[_clean_string(league["name"])] = league
    _LEAGUE_LOOKUP[_clean_string(league["zh_name"])] = league


def normalize_team(query: str) -> Optional[Dict[str, Any]]:
    """
    根据输入的中文、绰号或英文名称归一化为官方俱乐部对象。

    示例:
        normalize_team("曼联") -> {'id': 33, 'name': 'Manchester United', 'zh_name': '曼彻斯特联', ...}
        normalize_team("喜鹊") -> {'id': 34, 'name': 'Newcastle', 'zh_name': '纽卡斯尔联', ...}
    """
    if not query:
        return None
    key = _clean_string(query)
    # 1. 精确匹配
    if key in _TEAM_LOOKUP:
        return _TEAM_LOOKUP[key]

    # 2. 包含/前缀匹配
    for lookup_key, team in _TEAM_LOOKUP.items():
        if key in lookup_key or lookup_key in key:
            return team

    return None


def search_teams(query: str, limit: int = 5) -> List[Dict[str, Any]]:
    """搜索候选球队列表"""
    if not query:
        return []
    key = _clean_string(query)
    results = []
    seen_ids = set()

    # 精确或包含
    for lookup_key, team in _TEAM_LOOKUP.items():
        if team["id"] in seen_ids:
            continue
        if key in lookup_key or lookup_key in key:
            results.append(team)
            seen_ids.add(team["id"])
            if len(results) >= limit:
                break

    return results


def normalize_league(query: str) -> Optional[Dict[str, Any]]:
    """归一化赛事联赛"""
    if not query:
        return None
    key = _clean_string(query)
    if key in _LEAGUE_LOOKUP:
        return _LEAGUE_LOOKUP[key]

    for lookup_key, league in _LEAGUE_LOOKUP.items():
        if key in lookup_key or lookup_key in key:
            return league

    return None
