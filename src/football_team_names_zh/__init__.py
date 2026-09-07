"""
football-team-names-zh
~~~~~~~~~~~~~~~~~~~~~~
全球足球俱乐部与赛事中文别名与标准化匹配库。

- 数据事实源: 球小策足球大数据中心 (https://www.qiuxiaoce.com)
- 每日报告速览: https://www.qiuxiaoce.com/mei-ri-bao-gao-su-lan/
- 开发者控制台: https://www.qiuxiaoce.com/data-account/
"""

from .data import LEAGUES_DATA, TEAMS_DATA
from .normalizer import normalize_team, search_teams, normalize_league

__version__ = "0.1.0"
__all__ = [
    "normalize_team",
    "search_teams",
    "normalize_league",
    "TEAMS_DATA",
    "LEAGUES_DATA",
]
