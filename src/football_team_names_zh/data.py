"""
欧洲主流足球俱乐部与赛事联赛中英文规范数据字典
数据来源：球小策足球大数据中心 (https://www.qiuxiaoce.com)
"""

# 常见联赛字典
LEAGUES_DATA = [
    {"id": 39, "name": "Premier League", "zh_name": "英格兰足球超级联赛", "aliases": ["英超", "Premier League", "英超联赛", "EPL"]},
    {"id": 140, "name": "La Liga", "zh_name": "西班牙足球甲级联赛", "aliases": ["西甲", "La Liga", "西甲联赛", "西班牙甲级联赛"]},
    {"id": 135, "name": "Serie A", "zh_name": "意大利足球甲级联赛", "aliases": ["意甲", "Serie A", "意甲联赛", "意大利甲级联赛"]},
    {"id": 78, "name": "Bundesliga", "zh_name": "德国足球甲级联赛", "aliases": ["德甲", "Bundesliga", "德甲联赛", "德国甲级联赛"]},
    {"id": 61, "name": "Ligue 1", "zh_name": "法国足球甲级联赛", "aliases": ["法甲", "Ligue 1", "法甲联赛", "法国甲级联赛"]},
    {"id": 2, "name": "UEFA Champions League", "zh_name": "欧洲冠军联赛", "aliases": ["欧冠", "Champions League", "欧冠杯", "UCL"]},
    {"id": 3, "name": "UEFA Europa League", "zh_name": "欧足联欧洲联赛", "aliases": ["欧联", "Europa League", "欧联杯", "UEL"]},
    {"id": 848, "name": "UEFA Conference League", "zh_name": "欧足联欧洲协会联赛", "aliases": ["欧协联", "Conference League", "欧协杯"]},
]

# 常见主流俱乐部字典 (俱乐部ID对齐国际通用 API-Football / 球小策数据标准)
TEAMS_DATA = [
    # 英超 Premier League
    {"id": 33, "name": "Manchester United", "zh_name": "曼彻斯特联", "country": "England", "aliases": ["曼联", "曼彻斯特联", "Manchester United", "Man Utd"]},
    {"id": 34, "name": "Newcastle", "zh_name": "纽卡斯尔联", "country": "England", "aliases": ["纽卡斯尔", "纽卡斯尔联", "Newcastle", "Newcastle United", "喜鹊"]},
    {"id": 40, "name": "Liverpool", "zh_name": "利物浦", "country": "England", "aliases": ["利物浦", "Liverpool", "红军"]},
    {"id": 42, "name": "Arsenal", "zh_name": "阿森纳", "country": "England", "aliases": ["阿森纳", "Arsenal", "枪手"]},
    {"id": 47, "name": "Tottenham", "zh_name": "托特纳姆热刺", "country": "England", "aliases": ["热刺", "托特纳姆热刺", "Tottenham Hotspur", "Tottenham"]},
    {"id": 49, "name": "Chelsea", "zh_name": "切尔西", "country": "England", "aliases": ["切尔西", "Chelsea", "蓝军"]},
    {"id": 50, "name": "Manchester City", "zh_name": "曼彻斯特城", "country": "England", "aliases": ["曼城", "曼彻斯特城", "Manchester City", "Man City", "蓝月亮"]},
    {"id": 48, "name": "West Ham", "zh_name": "西汉姆联", "country": "England", "aliases": ["西汉姆", "西汉姆联", "West Ham United", "West Ham", "铁锤帮"]},
    {"id": 51, "name": "Brighton", "zh_name": "布莱顿", "country": "England", "aliases": ["布莱顿", "Brighton", "Brighton & Hove Albion", "海鸥"]},
    {"id": 52, "name": "Crystal Palace", "zh_name": "水晶宫", "country": "England", "aliases": ["水晶宫", "Crystal Palace"]},
    {"id": 55, "name": "Brentford", "zh_name": "布伦特福德", "country": "England", "aliases": ["布伦特福德", "Brentford", "小蜜蜂"]},
    {"id": 66, "name": "Aston Villa", "zh_name": "阿斯顿维拉", "country": "England", "aliases": ["维拉", "阿斯顿维拉", "Aston Villa"]},
    {"id": 45, "name": "Everton", "zh_name": "埃弗顿", "country": "England", "aliases": ["埃弗顿", "Everton", "太妃糖"]},
    {"id": 35, "name": "Bournemouth", "zh_name": "伯恩茅斯", "country": "England", "aliases": ["伯恩茅斯", "Bournemouth"]},
    {"id": 36, "name": "Fulham", "zh_name": "富勒姆", "country": "England", "aliases": ["富勒姆", "Fulham", "农场主"]},
    {"id": 39, "name": "Wolves", "zh_name": "狼队", "country": "England", "aliases": ["狼队", "Wolverhampton Wanderers", "Wolves"]},

    # 西甲 La Liga
    {"id": 529, "name": "Barcelona", "zh_name": "巴塞罗那", "country": "Spain", "aliases": ["巴萨", "巴塞罗那", "Barcelona", "FC Barcelona"]},
    {"id": 541, "name": "Real Madrid", "zh_name": "皇家马德里", "country": "Spain", "aliases": ["皇马", "皇家马德里", "Real Madrid", "银河战舰"]},
    {"id": 530, "name": "Atletico Madrid", "zh_name": "马德里竞技", "country": "Spain", "aliases": ["马竞", "马德里竞技", "Atletico Madrid", "床单军团"]},
    {"id": 532, "name": "Valencia", "zh_name": "瓦伦西亚", "country": "Spain", "aliases": ["瓦伦西亚", "Valencia", "蝙蝠军团"]},
    {"id": 536, "name": "Sevilla", "zh_name": "塞维利亚", "country": "Spain", "aliases": ["塞维利亚", "Sevilla"]},
    {"id": 543, "name": "Real Betis", "zh_name": "皇家贝蒂斯", "country": "Spain", "aliases": ["贝蒂斯", "皇家贝蒂斯", "Real Betis"]},
    {"id": 546, "name": "Getafe", "zh_name": "赫塔菲", "country": "Spain", "aliases": ["赫塔菲", "Getafe", "赫塔费"]},
    {"id": 548, "name": "Real Sociedad", "zh_name": "皇家社会", "country": "Spain", "aliases": ["皇家社会", "Real Sociedad"]},
    {"id": 531, "name": "Athletic Club", "zh_name": "毕尔巴鄂竞技", "country": "Spain", "aliases": ["毕尔巴鄂", "毕尔巴鄂竞技", "Athletic Club", "毕尔巴"]},
    {"id": 533, "name": "Villarreal", "zh_name": "比利亚雷亚尔", "country": "Spain", "aliases": ["比利亚雷亚尔", "Villarreal", "黄色潜水艇", "黄潜"]},
    {"id": 547, "name": "Girona", "zh_name": "赫罗纳", "country": "Spain", "aliases": ["赫罗纳", "Girona", "吉罗纳"]},

    # 意甲 Serie A
    {"id": 489, "name": "AC Milan", "zh_name": "AC米兰", "country": "Italy", "aliases": ["米兰", "AC米兰", "AC Milan", "红黑军团"]},
    {"id": 492, "name": "Napoli", "zh_name": "那不勒斯", "country": "Italy", "aliases": ["那不勒斯", "Napoli"]},
    {"id": 496, "name": "Juventus", "zh_name": "尤文图斯", "country": "Italy", "aliases": ["尤文", "尤文图斯", "Juventus", "老妇人"]},
    {"id": 497, "name": "AS Roma", "zh_name": "罗马", "country": "Italy", "aliases": ["罗马", "AS Roma", "红狼"]},
    {"id": 505, "name": "Inter", "zh_name": "国际米兰", "country": "Italy", "aliases": ["国米", "国际米兰", "Inter Milan", "Inter", "蓝黑军团"]},
    {"id": 487, "name": "Lazio", "zh_name": "拉齐奥", "country": "Italy", "aliases": ["拉齐奥", "Lazio", "蓝鹰"]},
    {"id": 499, "name": "Atalanta", "zh_name": "亚特兰大", "country": "Italy", "aliases": ["亚特兰大", "Atalanta", "真蓝黑"]},
    {"id": 502, "name": "Fiorentina", "zh_name": "佛罗伦萨", "country": "Italy", "aliases": ["佛罗伦萨", "Fiorentina", "紫百合"]},
    {"id": 500, "name": "Bologna", "zh_name": "博洛尼亚", "country": "Italy", "aliases": ["博洛尼亚", "Bologna"]},

    # 德甲 Bundesliga
    {"id": 157, "name": "Bayern München", "zh_name": "拜仁慕尼黑", "country": "Germany", "aliases": ["拜仁", "拜仁慕尼黑", "Bayern Munich", "Bayern München", "南部之星"]},
    {"id": 165, "name": "Borussia Dortmund", "zh_name": "多特蒙德", "country": "Germany", "aliases": ["多特", "多特蒙德", "Borussia Dortmund", "BVB", "大黄蜂"]},
    {"id": 168, "name": "Bayer Leverkusen", "zh_name": "勒沃库森", "country": "Germany", "aliases": ["勒沃库森", "Bayer Leverkusen", "药厂"]},
    {"id": 169, "name": "Eintracht Frankfurt", "zh_name": "法兰克福", "country": "Germany", "aliases": ["法兰克福", "Eintracht Frankfurt"]},
    {"id": 173, "name": "RB Leipzig", "zh_name": "莱比锡红牛", "country": "Germany", "aliases": ["莱比锡", "莱比锡红牛", "RB Leipzig", "红牛"]},
    {"id": 160, "name": "SC Freiburg", "zh_name": "弗赖堡", "country": "Germany", "aliases": ["弗赖堡", "SC Freiburg"]},
    {"id": 161, "name": "VfL Wolfsburg", "zh_name": "沃尔夫斯堡", "country": "Germany", "aliases": ["沃尔夫斯堡", "Wolfsburg", "狼堡"]},
    {"id": 162, "name": "Werder Bremen", "zh_name": "云达不莱梅", "country": "Germany", "aliases": ["不莱梅", "云达不莱梅", "Werder Bremen"]},
    {"id": 172, "name": "VfB Stuttgart", "zh_name": "斯图加特", "country": "Germany", "aliases": ["斯图加特", "VfB Stuttgart"]},

    # 法甲 Ligue 1
    {"id": 85, "name": "Paris Saint Germain", "zh_name": "巴黎圣日耳曼", "country": "France", "aliases": ["巴黎", "大巴黎", "巴黎圣日耳曼", "PSG", "Paris Saint Germain"]},
    {"id": 81, "name": "Marseille", "zh_name": "马赛", "country": "France", "aliases": ["马赛", "Marseille", "Olympique de Marseille"]},
    {"id": 91, "name": "Monaco", "zh_name": "摩纳哥", "country": "France", "aliases": ["摩纳哥", "Monaco", "AS Monaco"]},
    {"id": 79, "name": "Lille", "zh_name": "里尔", "country": "France", "aliases": ["里尔", "Lille", "LOSC Lille"]},
    {"id": 93, "name": "Reims", "zh_name": "兰斯", "country": "France", "aliases": ["兰斯", "Reims", "Stade de Reims"]},
    {"id": 94, "name": "Rennes", "zh_name": "雷恩", "country": "France", "aliases": ["雷恩", "Rennes", "Stade Rennais"]},
    {"id": 96, "name": "Toulouse", "zh_name": "图卢兹", "country": "France", "aliases": ["图卢兹", "Toulouse"]},
    {"id": 80, "name": "Lyon", "zh_name": "里昂", "country": "France", "aliases": ["里昂", "Lyon", "Olympique Lyonnais"]},

    # 葡超/荷甲/其他知名俱乐部
    {"id": 197, "name": "PSV Eindhoven", "zh_name": "埃因霍温", "country": "Netherlands", "aliases": ["埃因霍温", "PSV Eindhoven", "PSV"]},
    {"id": 194, "name": "Ajax", "zh_name": "阿贾克斯", "country": "Netherlands", "aliases": ["阿贾克斯", "Ajax", "AFC Ajax"]},
    {"id": 211, "name": "Benfica", "zh_name": "本菲卡", "country": "Portugal", "aliases": ["本菲卡", "Benfica", "SL Benfica"]},
    {"id": 212, "name": "Porto", "zh_name": "波尔图", "country": "Portugal", "aliases": ["波尔图", "Porto", "FC Porto"]},
    {"id": 228, "name": "Sporting CP", "zh_name": "葡萄牙体育", "country": "Portugal", "aliases": ["里斯本竞技", "葡萄牙体育", "Sporting CP", "Sporting Lisbon"]},
]
