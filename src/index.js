/**
 * football-team-names-zh (NPM Edition)
 * Fast, zero-dependency Chinese & English normalization and alias matching for global football clubs and leagues.
 *
 * Data Source: QiuXiaoCe (https://www.qiuxiaoce.com)
 * Synced At: 2026-11-23 11:37:24 UTC (42 leagues / 550 clubs)
 */

const LEAGUES_DATA = [
  {
    "id": 39,
    "name": "Premier League",
    "zh_name": "英超",
    "country": "England",
    "aliases": [
      "英超",
      "Premier League"
    ]
  },
  {
    "id": 140,
    "name": "La Liga",
    "zh_name": "西甲",
    "country": "Spain",
    "aliases": [
      "西甲",
      "La Liga"
    ]
  },
  {
    "id": 135,
    "name": "Serie A",
    "zh_name": "意甲",
    "country": "Italy",
    "aliases": [
      "意甲",
      "Serie A"
    ]
  },
  {
    "id": 78,
    "name": "Bundesliga",
    "zh_name": "德甲",
    "country": "Germany",
    "aliases": [
      "德甲",
      "Bundesliga"
    ]
  },
  {
    "id": 61,
    "name": "Ligue 1",
    "zh_name": "法甲",
    "country": "France",
    "aliases": [
      "法甲",
      "Ligue 1"
    ]
  },
  {
    "id": 2,
    "name": "UEFA Champions League",
    "zh_name": "欧冠",
    "country": "World",
    "aliases": [
      "欧冠",
      "UEFA Champions League"
    ]
  },
  {
    "id": 3,
    "name": "UEFA Europa League",
    "zh_name": "欧联",
    "country": "World",
    "aliases": [
      "欧联",
      "UEFA Europa League"
    ]
  },
  {
    "id": 848,
    "name": "UEFA Europa Conference League",
    "zh_name": "欧协",
    "country": "World",
    "aliases": [
      "欧协",
      "UEFA Europa Conference League"
    ]
  },
  {
    "id": 1,
    "name": "World Cup",
    "zh_name": "世界杯",
    "country": "World",
    "aliases": [
      "世界杯",
      "World Cup"
    ]
  },
  {
    "id": 4,
    "name": "Euro Championship",
    "zh_name": "欧洲杯",
    "country": "World",
    "aliases": [
      "欧洲杯",
      "Euro Championship"
    ]
  },
  {
    "id": 5,
    "name": "UEFA Nations League",
    "zh_name": "欧国联",
    "country": "World",
    "aliases": [
      "欧国联",
      "UEFA Nations League"
    ]
  },
  {
    "id": 9,
    "name": "Copa America",
    "zh_name": "美洲杯",
    "country": "World",
    "aliases": [
      "美洲杯",
      "Copa America"
    ]
  },
  {
    "id": 6,
    "name": "Africa Cup of Nations",
    "zh_name": "非洲杯",
    "country": "World",
    "aliases": [
      "非洲杯",
      "Africa Cup of Nations"
    ]
  },
  {
    "id": 40,
    "name": "Championship",
    "zh_name": "英冠",
    "country": "England",
    "aliases": [
      "英冠",
      "Championship"
    ]
  },
  {
    "id": 41,
    "name": "League One",
    "zh_name": "英甲",
    "country": "England",
    "aliases": [
      "英甲",
      "League One"
    ]
  },
  {
    "id": 141,
    "name": "Segunda División",
    "zh_name": "西乙",
    "country": "Spain",
    "aliases": [
      "西乙",
      "Segunda División"
    ]
  },
  {
    "id": 136,
    "name": "Serie B",
    "zh_name": "意乙",
    "country": "Italy",
    "aliases": [
      "意乙",
      "Serie B"
    ]
  },
  {
    "id": 79,
    "name": "2. Bundesliga",
    "zh_name": "德乙",
    "country": "Germany",
    "aliases": [
      "德乙",
      "2. Bundesliga"
    ]
  },
  {
    "id": 62,
    "name": "Ligue 2",
    "zh_name": "法乙",
    "country": "France",
    "aliases": [
      "法乙",
      "Ligue 2"
    ]
  },
  {
    "id": 88,
    "name": "Eredivisie",
    "zh_name": "荷甲",
    "country": "Netherlands",
    "aliases": [
      "荷甲",
      "Eredivisie"
    ]
  },
  {
    "id": 94,
    "name": "Primeira Liga",
    "zh_name": "葡超",
    "country": "Portugal",
    "aliases": [
      "葡超",
      "Primeira Liga"
    ]
  },
  {
    "id": 144,
    "name": "Jupiler Pro League",
    "zh_name": "比甲",
    "country": "Belgium",
    "aliases": [
      "比甲",
      "Jupiler Pro League"
    ]
  },
  {
    "id": 203,
    "name": "Süper Lig",
    "zh_name": "土超",
    "country": "Turkey",
    "aliases": [
      "土超",
      "Süper Lig",
      "土耳其超",
      "土耳其超级联赛"
    ]
  },
  {
    "id": 179,
    "name": "Premiership",
    "zh_name": "苏超",
    "country": "Scotland",
    "aliases": [
      "苏超",
      "Premiership",
      "苏格兰超"
    ]
  },
  {
    "id": 103,
    "name": "Eliteserien",
    "zh_name": "挪超",
    "country": "Norway",
    "aliases": [
      "挪超",
      "Eliteserien"
    ]
  },
  {
    "id": 113,
    "name": "Allsvenskan",
    "zh_name": "瑞典超",
    "country": "Sweden",
    "aliases": [
      "瑞典超",
      "Allsvenskan"
    ]
  },
  {
    "id": 218,
    "name": "Bundesliga",
    "zh_name": "奥超",
    "country": "Austria",
    "aliases": [
      "奥超",
      "Bundesliga",
      "奥甲",
      "奥地利甲",
      "奥地利超级联赛"
    ]
  },
  {
    "id": 207,
    "name": "Super League",
    "zh_name": "瑞士超",
    "country": "Switzerland",
    "aliases": [
      "瑞士超",
      "Super League"
    ]
  },
  {
    "id": 197,
    "name": "Super League 1",
    "zh_name": "希腊超",
    "country": "Greece",
    "aliases": [
      "希腊超",
      "Super League 1"
    ]
  },
  {
    "id": 345,
    "name": "Czech Liga",
    "zh_name": "捷甲",
    "country": "Czech-Republic",
    "aliases": [
      "捷甲",
      "Czech Liga"
    ]
  },
  {
    "id": 98,
    "name": "J1 League",
    "zh_name": "日职联",
    "country": "Japan",
    "aliases": [
      "日职联",
      "J1 League"
    ]
  },
  {
    "id": 99,
    "name": "J2 League",
    "zh_name": "日职乙",
    "country": "Japan",
    "aliases": [
      "日职乙",
      "J2 League"
    ]
  },
  {
    "id": 292,
    "name": "K League 1",
    "zh_name": "韩K联",
    "country": "South-Korea",
    "aliases": [
      "韩K联",
      "K League 1"
    ]
  },
  {
    "id": 169,
    "name": "Super League",
    "zh_name": "中超",
    "country": "China",
    "aliases": [
      "中超",
      "Super League"
    ]
  },
  {
    "id": 307,
    "name": "Pro League",
    "zh_name": "沙特联",
    "country": "Saudi-Arabia",
    "aliases": [
      "沙特联",
      "Pro League"
    ]
  },
  {
    "id": 188,
    "name": "A-League",
    "zh_name": "澳超",
    "country": "Australia",
    "aliases": [
      "澳超",
      "A-League"
    ]
  },
  {
    "id": 71,
    "name": "Serie A",
    "zh_name": "巴甲",
    "country": "Brazil",
    "aliases": [
      "巴甲",
      "Serie A"
    ]
  },
  {
    "id": 128,
    "name": "Liga Profesional Argentina",
    "zh_name": "阿甲",
    "country": "Argentina",
    "aliases": [
      "阿甲",
      "Liga Profesional Argentina",
      "阿职联"
    ]
  },
  {
    "id": 253,
    "name": "Major League Soccer",
    "zh_name": "美职联",
    "country": "USA",
    "aliases": [
      "美职联",
      "Major League Soccer"
    ]
  },
  {
    "id": 262,
    "name": "Liga MX",
    "zh_name": "墨超",
    "country": "Mexico",
    "aliases": [
      "墨超",
      "Liga MX"
    ]
  },
  {
    "id": 13,
    "name": "CONMEBOL Libertadores",
    "zh_name": "解放者杯",
    "country": "World",
    "aliases": [
      "解放者杯",
      "CONMEBOL Libertadores"
    ]
  },
  {
    "id": 11,
    "name": "CONMEBOL Sudamericana",
    "zh_name": "南俱杯",
    "country": "World",
    "aliases": [
      "南俱杯",
      "CONMEBOL Sudamericana"
    ]
  }
];

const TEAMS_DATA = [
  {
    "id": 42,
    "name": "Arsenal",
    "zh_name": "阿森纳",
    "country": "England",
    "aliases": [
      "阿森纳",
      "Arsenal"
    ]
  },
  {
    "id": 217,
    "name": "SC Braga",
    "zh_name": "布拉加",
    "country": "Portugal",
    "aliases": [
      "布拉加",
      "SC Braga"
    ]
  },
  {
    "id": 257,
    "name": "Rangers",
    "zh_name": "格拉斯哥流浪者",
    "country": "Scotland",
    "aliases": [
      "格拉斯哥流浪者",
      "Rangers",
      "流浪者"
    ]
  },
  {
    "id": 541,
    "name": "Real Madrid",
    "zh_name": "皇家马德里",
    "country": "Spain",
    "aliases": [
      "皇家马德里",
      "Real Madrid",
      "皇马"
    ]
  },
  {
    "id": 543,
    "name": "Real Betis",
    "zh_name": "皇家贝蒂斯",
    "country": "Spain",
    "aliases": [
      "皇家贝蒂斯",
      "Real Betis",
      "贝蒂斯"
    ]
  },
  {
    "id": 569,
    "name": "Club Brugge KV",
    "zh_name": "布鲁日",
    "country": "Belgium",
    "aliases": [
      "布鲁日",
      "Club Brugge KV"
    ]
  },
  {
    "id": 66,
    "name": "Aston Villa",
    "zh_name": "维拉",
    "country": "England",
    "aliases": [
      "维拉",
      "Aston Villa",
      "阿斯顿维拉"
    ]
  },
  {
    "id": 120,
    "name": "Botafogo",
    "zh_name": "博塔弗戈",
    "country": "Brazil",
    "aliases": [
      "博塔弗戈",
      "Botafogo"
    ]
  },
  {
    "id": 247,
    "name": "Celtic",
    "zh_name": "凯尔特人",
    "country": "Scotland",
    "aliases": [
      "凯尔特人",
      "Celtic"
    ]
  },
  {
    "id": 1062,
    "name": "Atletico-MG",
    "zh_name": "米内罗竞技",
    "country": "Brazil",
    "aliases": [
      "米内罗竞技",
      "Atletico-MG",
      "米竞技"
    ]
  },
  {
    "id": 327,
    "name": "Bodo/Glimt",
    "zh_name": "博德闪耀",
    "country": "Norway",
    "aliases": [
      "博德闪耀",
      "Bodo/Glimt"
    ]
  },
  {
    "id": 529,
    "name": "Barcelona",
    "zh_name": "巴塞罗那",
    "country": "Spain",
    "aliases": [
      "巴塞罗那",
      "Barcelona",
      "巴萨"
    ]
  },
  {
    "id": 530,
    "name": "Atletico Madrid",
    "zh_name": "马德里竞技",
    "country": "Spain",
    "aliases": [
      "马德里竞技",
      "Atletico Madrid",
      "马竞"
    ]
  },
  {
    "id": 554,
    "name": "Anderlecht",
    "zh_name": "安德莱赫特",
    "country": "Belgium",
    "aliases": [
      "安德莱赫特",
      "Anderlecht",
      "安德莱"
    ]
  },
  {
    "id": 1393,
    "name": "Union St. Gilloise",
    "zh_name": "圣吉罗斯",
    "country": "Belgium",
    "aliases": [
      "圣吉罗斯",
      "Union St. Gilloise",
      "圣吉罗斯联合",
      "圣吉联合"
    ]
  },
  {
    "id": 194,
    "name": "Ajax",
    "zh_name": "阿贾克斯",
    "country": "Netherlands",
    "aliases": [
      "阿贾克斯",
      "Ajax"
    ]
  },
  {
    "id": 201,
    "name": "AZ Alkmaar",
    "zh_name": "阿尔克马尔",
    "country": "Netherlands",
    "aliases": [
      "阿尔克马尔",
      "AZ Alkmaar",
      "阿尔克马"
    ]
  },
  {
    "id": 505,
    "name": "Inter",
    "zh_name": "国际米兰",
    "country": "Italy",
    "aliases": [
      "国际米兰",
      "Inter",
      "国际"
    ]
  },
  {
    "id": 40,
    "name": "Liverpool",
    "zh_name": "利物浦",
    "country": "England",
    "aliases": [
      "利物浦",
      "Liverpool"
    ]
  },
  {
    "id": 85,
    "name": "Paris Saint Germain",
    "zh_name": "巴黎圣日耳曼",
    "country": "France",
    "aliases": [
      "巴黎圣日耳曼",
      "Paris Saint Germain",
      "巴黎圣曼"
    ]
  },
  {
    "id": 121,
    "name": "Palmeiras",
    "zh_name": "帕尔梅拉斯",
    "country": "Brazil",
    "aliases": [
      "帕尔梅拉斯",
      "Palmeiras",
      "帕梅拉斯"
    ]
  },
  {
    "id": 211,
    "name": "Benfica",
    "zh_name": "本菲卡",
    "country": "Portugal",
    "aliases": [
      "本菲卡",
      "Benfica"
    ]
  },
  {
    "id": 631,
    "name": "Gent",
    "zh_name": "根特",
    "country": "Belgium",
    "aliases": [
      "根特",
      "Gent"
    ]
  },
  {
    "id": 50,
    "name": "Manchester City",
    "zh_name": "曼城",
    "country": "England",
    "aliases": [
      "曼城",
      "Manchester City",
      "曼彻斯特城"
    ]
  },
  {
    "id": 497,
    "name": "AS Roma",
    "zh_name": "罗马",
    "country": "Italy",
    "aliases": [
      "罗马",
      "AS Roma"
    ]
  },
  {
    "id": 499,
    "name": "Atalanta",
    "zh_name": "亚特兰大",
    "country": "Italy",
    "aliases": [
      "亚特兰大",
      "Atalanta"
    ]
  },
  {
    "id": 124,
    "name": "Fluminense",
    "zh_name": "弗鲁米嫩塞",
    "country": "Brazil",
    "aliases": [
      "弗鲁米嫩塞",
      "Fluminense",
      "弗鲁米嫩"
    ]
  },
  {
    "id": 496,
    "name": "Juventus",
    "zh_name": "尤文图斯",
    "country": "Italy",
    "aliases": [
      "尤文图斯",
      "Juventus",
      "尤文"
    ]
  },
  {
    "id": 502,
    "name": "Fiorentina",
    "zh_name": "佛罗伦萨",
    "country": "Italy",
    "aliases": [
      "佛罗伦萨",
      "Fiorentina"
    ]
  },
  {
    "id": 47,
    "name": "Tottenham",
    "zh_name": "托特纳姆热刺",
    "country": "England",
    "aliases": [
      "托特纳姆热刺",
      "Tottenham",
      "热刺"
    ]
  },
  {
    "id": 49,
    "name": "Chelsea",
    "zh_name": "切尔西",
    "country": "England",
    "aliases": [
      "切尔西",
      "Chelsea"
    ]
  },
  {
    "id": 52,
    "name": "Crystal Palace",
    "zh_name": "水晶宫",
    "country": "England",
    "aliases": [
      "水晶宫",
      "Crystal Palace"
    ]
  },
  {
    "id": 127,
    "name": "Flamengo",
    "zh_name": "弗拉门戈",
    "country": "Brazil",
    "aliases": [
      "弗拉门戈",
      "Flamengo"
    ]
  },
  {
    "id": 157,
    "name": "Bayern München",
    "zh_name": "拜仁",
    "country": "Germany",
    "aliases": [
      "拜仁",
      "Bayern München",
      "拜仁慕尼黑"
    ]
  },
  {
    "id": 33,
    "name": "Manchester United",
    "zh_name": "曼联",
    "country": "England",
    "aliases": [
      "曼联",
      "Manchester United",
      "曼彻斯特联"
    ]
  },
  {
    "id": 254,
    "name": "Heart Of Midlothian",
    "zh_name": "哈茨",
    "country": "Scotland",
    "aliases": [
      "哈茨",
      "Heart Of Midlothian"
    ]
  },
  {
    "id": 79,
    "name": "Lille",
    "zh_name": "里尔",
    "country": "France",
    "aliases": [
      "里尔",
      "Lille"
    ]
  },
  {
    "id": 80,
    "name": "Lyon",
    "zh_name": "里昂",
    "country": "France",
    "aliases": [
      "里昂",
      "Lyon"
    ]
  },
  {
    "id": 126,
    "name": "Sao Paulo",
    "zh_name": "圣保罗",
    "country": "Brazil",
    "aliases": [
      "圣保罗",
      "Sao Paulo"
    ]
  },
  {
    "id": 131,
    "name": "Corinthians",
    "zh_name": "科林蒂安",
    "country": "Brazil",
    "aliases": [
      "科林蒂安",
      "Corinthians"
    ]
  },
  {
    "id": 2761,
    "name": "Jeju United FC",
    "zh_name": "济州SK",
    "country": "South-Korea",
    "aliases": [
      "济州SK",
      "Jeju United FC",
      "济州联"
    ]
  },
  {
    "id": 2762,
    "name": "Jeonbuk Motors",
    "zh_name": "全北现代",
    "country": "South-Korea",
    "aliases": [
      "全北现代",
      "Jeonbuk Motors"
    ]
  },
  {
    "id": 209,
    "name": "Feyenoord",
    "zh_name": "费耶诺德",
    "country": "Netherlands",
    "aliases": [
      "费耶诺德",
      "Feyenoord"
    ]
  },
  {
    "id": 531,
    "name": "Athletic Club",
    "zh_name": "毕尔巴鄂",
    "country": "Spain",
    "aliases": [
      "毕尔巴鄂",
      "Athletic Club",
      "毕尔巴鄂竞技"
    ]
  },
  {
    "id": 538,
    "name": "Celta Vigo",
    "zh_name": "塞尔塔",
    "country": "Spain",
    "aliases": [
      "塞尔塔",
      "Celta Vigo",
      "维戈塞尔塔"
    ]
  },
  {
    "id": 130,
    "name": "Gremio",
    "zh_name": "格雷米奥",
    "country": "Brazil",
    "aliases": [
      "格雷米奥",
      "Gremio"
    ]
  },
  {
    "id": 165,
    "name": "Borussia Dortmund",
    "zh_name": "多特蒙德",
    "country": "Germany",
    "aliases": [
      "多特蒙德",
      "Borussia Dortmund",
      "多特"
    ]
  },
  {
    "id": 212,
    "name": "FC Porto",
    "zh_name": "波尔图",
    "country": "Portugal",
    "aliases": [
      "波尔图",
      "FC Porto"
    ]
  },
  {
    "id": 228,
    "name": "Sporting CP",
    "zh_name": "葡萄牙体育",
    "country": "Portugal",
    "aliases": [
      "葡萄牙体育",
      "Sporting CP",
      "里斯本竞技",
      "里斯本"
    ]
  },
  {
    "id": 284,
    "name": "Shonan Bellmare",
    "zh_name": "湘南比马",
    "country": "Japan",
    "aliases": [
      "湘南比马",
      "Shonan Bellmare",
      "湘南海洋"
    ]
  },
  {
    "id": 311,
    "name": "Albirex Niigata",
    "zh_name": "新泻天鹅",
    "country": "Japan",
    "aliases": [
      "新泻天鹅",
      "Albirex Niigata",
      "新潟天鹅"
    ]
  },
  {
    "id": 500,
    "name": "Bologna",
    "zh_name": "博洛尼亚",
    "country": "Italy",
    "aliases": [
      "博洛尼亚",
      "Bologna"
    ]
  },
  {
    "id": 548,
    "name": "Real Sociedad",
    "zh_name": "皇家社会",
    "country": "Spain",
    "aliases": [
      "皇家社会",
      "Real Sociedad"
    ]
  },
  {
    "id": 794,
    "name": "RB Bragantino",
    "zh_name": "布拉干蒂诺红牛",
    "country": "Brazil",
    "aliases": [
      "布拉干蒂诺红牛",
      "RB Bragantino",
      "布拉干蒂诺RB",
      "布拉甘蒂诺红牛",
      "瑞模贝雷"
    ]
  },
  {
    "id": 2746,
    "name": "Gangwon FC",
    "zh_name": "江原FC",
    "country": "South-Korea",
    "aliases": [
      "江原FC",
      "Gangwon FC"
    ]
  },
  {
    "id": 2750,
    "name": "Daejeon Citizen",
    "zh_name": "大田韩亚市民",
    "country": "South-Korea",
    "aliases": [
      "大田韩亚市民",
      "Daejeon Citizen",
      "大田市民"
    ]
  },
  {
    "id": 2759,
    "name": "Gwangju FC",
    "zh_name": "光州FC",
    "country": "South-Korea",
    "aliases": [
      "光州FC",
      "Gwangju FC"
    ]
  },
  {
    "id": 2764,
    "name": "Pohang Steelers",
    "zh_name": "浦项制铁",
    "country": "South-Korea",
    "aliases": [
      "浦项制铁",
      "Pohang Steelers",
      "浦项铁人"
    ]
  },
  {
    "id": 2766,
    "name": "FC Seoul",
    "zh_name": "FC首尔",
    "country": "South-Korea",
    "aliases": [
      "FC首尔",
      "FC Seoul",
      "首尔FC"
    ]
  },
  {
    "id": 2767,
    "name": "Ulsan Hyundai FC",
    "zh_name": "蔚山现代",
    "country": "South-Korea",
    "aliases": [
      "蔚山现代",
      "Ulsan Hyundai FC",
      "蔚山HD"
    ]
  },
  {
    "id": 2768,
    "name": "Gimcheon Sangmu FC",
    "zh_name": "金泉尚武",
    "country": "South-Korea",
    "aliases": [
      "金泉尚武",
      "Gimcheon Sangmu FC"
    ]
  },
  {
    "id": 197,
    "name": "PSV Eindhoven",
    "zh_name": "埃因霍温",
    "country": "Netherlands",
    "aliases": [
      "埃因霍温",
      "PSV Eindhoven",
      "PSV埃因霍温"
    ]
  },
  {
    "id": 1603,
    "name": "Vancouver Whitecaps",
    "zh_name": "温哥华白浪",
    "country": "Canada",
    "aliases": [
      "温哥华白浪",
      "Vancouver Whitecaps",
      "温哥华"
    ]
  },
  {
    "id": 9568,
    "name": "Inter Miami",
    "zh_name": "迈阿密国际",
    "country": "USA",
    "aliases": [
      "迈阿密国际",
      "Inter Miami",
      "国际迈阿密"
    ]
  },
  {
    "id": 168,
    "name": "Bayer Leverkusen",
    "zh_name": "勒沃库森",
    "country": "Germany",
    "aliases": [
      "勒沃库森",
      "Bayer Leverkusen"
    ]
  },
  {
    "id": 2242,
    "name": "FC Cincinnati",
    "zh_name": "FC辛辛那提",
    "country": "USA",
    "aliases": [
      "FC辛辛那提",
      "FC Cincinnati",
      "辛辛那提",
      "辛辛那提FC"
    ]
  },
  {
    "id": 41,
    "name": "Southampton",
    "zh_name": "南安普敦",
    "country": "England",
    "aliases": [
      "南安普敦",
      "Southampton",
      "南安普顿"
    ]
  },
  {
    "id": 415,
    "name": "Twente",
    "zh_name": "特温特",
    "country": "Netherlands",
    "aliases": [
      "特温特",
      "Twente"
    ]
  },
  {
    "id": 742,
    "name": "Genk",
    "zh_name": "亨克",
    "country": "Belgium",
    "aliases": [
      "亨克",
      "Genk"
    ]
  },
  {
    "id": 1595,
    "name": "Seattle Sounders",
    "zh_name": "西雅图海湾人",
    "country": "USA",
    "aliases": [
      "西雅图海湾人",
      "Seattle Sounders",
      "西雅图"
    ]
  },
  {
    "id": 1604,
    "name": "New York City FC",
    "zh_name": "纽约城",
    "country": "USA",
    "aliases": [
      "纽约城",
      "New York City FC"
    ]
  },
  {
    "id": 1616,
    "name": "Los Angeles FC",
    "zh_name": "洛杉矶FC",
    "country": "USA",
    "aliases": [
      "洛杉矶FC",
      "Los Angeles FC"
    ]
  },
  {
    "id": 65,
    "name": "Nottingham Forest",
    "zh_name": "诺丁汉",
    "country": "England",
    "aliases": [
      "诺丁汉",
      "Nottingham Forest",
      "诺丁汉森林"
    ]
  },
  {
    "id": 91,
    "name": "Monaco",
    "zh_name": "摩纳哥",
    "country": "France",
    "aliases": [
      "摩纳哥",
      "Monaco"
    ]
  },
  {
    "id": 172,
    "name": "VfB Stuttgart",
    "zh_name": "斯图加特",
    "country": "Germany",
    "aliases": [
      "斯图加特",
      "VfB Stuttgart"
    ]
  },
  {
    "id": 435,
    "name": "River Plate",
    "zh_name": "河床",
    "country": "Argentina",
    "aliases": [
      "河床",
      "River Plate"
    ]
  },
  {
    "id": 436,
    "name": "Racing Club",
    "zh_name": "竞技",
    "country": "Argentina",
    "aliases": [
      "竞技",
      "Racing Club",
      "竞技俱乐部"
    ]
  },
  {
    "id": 450,
    "name": "Estudiantes L.P.",
    "zh_name": "拉普拉塔大学生",
    "country": "Argentina",
    "aliases": [
      "拉普拉塔大学生",
      "Estudiantes L.P.",
      "拉普大学"
    ]
  },
  {
    "id": 489,
    "name": "AC Milan",
    "zh_name": "AC米兰",
    "country": "Italy",
    "aliases": [
      "AC米兰",
      "AC Milan",
      "米兰"
    ]
  },
  {
    "id": 1612,
    "name": "Minnesota United FC",
    "zh_name": "明尼苏达联",
    "country": "USA",
    "aliases": [
      "明尼苏达联",
      "Minnesota United FC",
      "明尼苏达"
    ]
  },
  {
    "id": 1613,
    "name": "Columbus Crew",
    "zh_name": "哥伦布机员",
    "country": "USA",
    "aliases": [
      "哥伦布机员",
      "Columbus Crew",
      "哥伦布"
    ]
  },
  {
    "id": 18310,
    "name": "Charlotte",
    "zh_name": "夏洛特FC",
    "country": "USA",
    "aliases": [
      "夏洛特FC",
      "Charlotte"
    ]
  },
  {
    "id": 249,
    "name": "Hibernian",
    "zh_name": "希伯尼安",
    "country": "Scotland",
    "aliases": [
      "希伯尼安",
      "Hibernian"
    ]
  },
  {
    "id": 446,
    "name": "Lanus",
    "zh_name": "拉努斯",
    "country": "Argentina",
    "aliases": [
      "拉努斯",
      "Lanus"
    ]
  },
  {
    "id": 533,
    "name": "Villarreal",
    "zh_name": "比利亚雷",
    "country": "Spain",
    "aliases": [
      "比利亚雷",
      "Villarreal",
      "比利亚雷亚尔"
    ]
  },
  {
    "id": 1598,
    "name": "Orlando City SC",
    "zh_name": "奥兰多城",
    "country": "USA",
    "aliases": [
      "奥兰多城",
      "Orlando City SC",
      "奥兰多"
    ]
  },
  {
    "id": 1606,
    "name": "Real Salt Lake",
    "zh_name": "皇家盐湖城",
    "country": "USA",
    "aliases": [
      "皇家盐湖城",
      "Real Salt Lake",
      "盐湖城"
    ]
  },
  {
    "id": 1617,
    "name": "Portland Timbers",
    "zh_name": "波特兰伐木者",
    "country": "USA",
    "aliases": [
      "波特兰伐木者",
      "Portland Timbers",
      "波特兰",
      "波特兰伐木工"
    ]
  },
  {
    "id": 133,
    "name": "Vasco DA Gama",
    "zh_name": "瓦斯科达伽马",
    "country": "Brazil",
    "aliases": [
      "瓦斯科达伽马",
      "Vasco DA Gama",
      "达伽马"
    ]
  },
  {
    "id": 319,
    "name": "Brann",
    "zh_name": "布兰",
    "country": "Norway",
    "aliases": [
      "布兰",
      "Brann"
    ]
  },
  {
    "id": 492,
    "name": "Napoli",
    "zh_name": "那不勒斯",
    "country": "Italy",
    "aliases": [
      "那不勒斯",
      "Napoli"
    ]
  },
  {
    "id": 728,
    "name": "Rayo Vallecano",
    "zh_name": "巴列卡诺",
    "country": "Spain",
    "aliases": [
      "巴列卡诺",
      "Rayo Vallecano"
    ]
  },
  {
    "id": 1602,
    "name": "New York Red Bulls",
    "zh_name": "纽约红牛",
    "country": "USA",
    "aliases": [
      "纽约红牛",
      "New York Red Bulls"
    ]
  },
  {
    "id": 1605,
    "name": "Los Angeles Galaxy",
    "zh_name": "洛杉矶银河",
    "country": "USA",
    "aliases": [
      "洛杉矶银河",
      "Los Angeles Galaxy",
      "洛城银河"
    ]
  },
  {
    "id": 135,
    "name": "Cruzeiro",
    "zh_name": "克鲁塞罗",
    "country": "Brazil",
    "aliases": [
      "克鲁塞罗",
      "Cruzeiro"
    ]
  },
  {
    "id": 1599,
    "name": "Philadelphia Union",
    "zh_name": "费城联合",
    "country": "USA",
    "aliases": [
      "费城联合",
      "Philadelphia Union",
      "费城"
    ]
  },
  {
    "id": 1600,
    "name": "Houston Dynamo",
    "zh_name": "休斯敦迪纳摩",
    "country": "USA",
    "aliases": [
      "休斯敦迪纳摩",
      "Houston Dynamo",
      "休斯顿迪纳摩",
      "休斯敦"
    ]
  },
  {
    "id": 1607,
    "name": "Chicago Fire",
    "zh_name": "芝加哥火焰",
    "country": "USA",
    "aliases": [
      "芝加哥火焰",
      "Chicago Fire",
      "芝加哥"
    ]
  },
  {
    "id": 1608,
    "name": "Atlanta United FC",
    "zh_name": "亚特兰大联",
    "country": "USA",
    "aliases": [
      "亚特兰大联",
      "Atlanta United FC",
      "亚特联"
    ]
  },
  {
    "id": 9569,
    "name": "Nashville SC",
    "zh_name": "纳什维尔SC",
    "country": "USA",
    "aliases": [
      "纳什维尔SC",
      "Nashville SC",
      "纳什维尔"
    ]
  },
  {
    "id": 34,
    "name": "Newcastle",
    "zh_name": "纽卡斯尔",
    "country": "England",
    "aliases": [
      "纽卡斯尔",
      "Newcastle",
      "纽卡斯尔联"
    ]
  },
  {
    "id": 46,
    "name": "Leicester",
    "zh_name": "莱切斯特",
    "country": "England",
    "aliases": [
      "莱切斯特",
      "Leicester",
      "莱斯特城"
    ]
  },
  {
    "id": 119,
    "name": "Internacional",
    "zh_name": "巴西国际",
    "country": "Brazil",
    "aliases": [
      "巴西国际",
      "Internacional"
    ]
  },
  {
    "id": 252,
    "name": "Aberdeen",
    "zh_name": "阿伯丁",
    "country": "Scotland",
    "aliases": [
      "阿伯丁",
      "Aberdeen"
    ]
  },
  {
    "id": 375,
    "name": "Malmo FF",
    "zh_name": "马尔默",
    "country": "Sweden",
    "aliases": [
      "马尔默",
      "Malmo FF"
    ]
  },
  {
    "id": 1597,
    "name": "FC Dallas",
    "zh_name": "FC达拉斯",
    "country": "USA",
    "aliases": [
      "FC达拉斯",
      "FC Dallas",
      "达拉斯",
      "达拉斯FC"
    ]
  },
  {
    "id": 160,
    "name": "SC Freiburg",
    "zh_name": "弗赖堡",
    "country": "Germany",
    "aliases": [
      "弗赖堡",
      "SC Freiburg"
    ]
  },
  {
    "id": 451,
    "name": "Boca Juniors",
    "zh_name": "博卡青年",
    "country": "Argentina",
    "aliases": [
      "博卡青年",
      "Boca Juniors"
    ]
  },
  {
    "id": 1610,
    "name": "Colorado Rapids",
    "zh_name": "科罗拉多急流",
    "country": "USA",
    "aliases": [
      "科罗拉多急流",
      "Colorado Rapids",
      "科罗拉多"
    ]
  },
  {
    "id": 118,
    "name": "Bahia",
    "zh_name": "巴伊亚",
    "country": "Brazil",
    "aliases": [
      "巴伊亚",
      "Bahia"
    ]
  },
  {
    "id": 487,
    "name": "Lazio",
    "zh_name": "拉齐奥",
    "country": "Italy",
    "aliases": [
      "拉齐奥",
      "Lazio"
    ]
  },
  {
    "id": 741,
    "name": "Cercle Brugge",
    "zh_name": "色格拉布鲁日",
    "country": "Belgium",
    "aliases": [
      "色格拉布鲁日",
      "Cercle Brugge"
    ]
  },
  {
    "id": 1596,
    "name": "San Jose Earthquakes",
    "zh_name": "圣何塞地震",
    "country": "USA",
    "aliases": [
      "圣何塞地震",
      "San Jose Earthquakes",
      "圣何塞"
    ]
  },
  {
    "id": 1609,
    "name": "New England Revolution",
    "zh_name": "新英格兰革命",
    "country": "USA",
    "aliases": [
      "新英格兰革命",
      "New England Revolution",
      "新英格兰"
    ]
  },
  {
    "id": 16489,
    "name": "Austin",
    "zh_name": "奥斯汀FC",
    "country": "USA",
    "aliases": [
      "奥斯汀FC",
      "Austin"
    ]
  },
  {
    "id": 20787,
    "name": "St. Louis City",
    "zh_name": "圣路易斯城",
    "country": "USA",
    "aliases": [
      "圣路易斯城",
      "St. Louis City",
      "圣路易斯"
    ]
  },
  {
    "id": 250,
    "name": "Kilmarnock",
    "zh_name": "基尔马诺克",
    "country": "Scotland",
    "aliases": [
      "基尔马诺克",
      "Kilmarnock"
    ]
  },
  {
    "id": 251,
    "name": "ST Mirren",
    "zh_name": "圣米伦",
    "country": "Scotland",
    "aliases": [
      "圣米伦",
      "ST Mirren"
    ]
  },
  {
    "id": 256,
    "name": "Motherwell",
    "zh_name": "马瑟韦尔",
    "country": "Scotland",
    "aliases": [
      "马瑟韦尔",
      "Motherwell"
    ]
  },
  {
    "id": 547,
    "name": "Girona",
    "zh_name": "赫罗纳",
    "country": "Spain",
    "aliases": [
      "赫罗纳",
      "Girona"
    ]
  },
  {
    "id": 1614,
    "name": "CF Montreal",
    "zh_name": "CF蒙特利尔",
    "country": "Canada",
    "aliases": [
      "CF蒙特利尔",
      "CF Montreal",
      "蒙特利尔CF"
    ]
  },
  {
    "id": 35,
    "name": "Bournemouth",
    "zh_name": "伯恩茅斯",
    "country": "England",
    "aliases": [
      "伯恩茅斯",
      "Bournemouth",
      "AFC伯恩茅斯"
    ]
  },
  {
    "id": 51,
    "name": "Brighton",
    "zh_name": "布莱顿",
    "country": "England",
    "aliases": [
      "布莱顿",
      "Brighton"
    ]
  },
  {
    "id": 57,
    "name": "Ipswich",
    "zh_name": "伊普斯",
    "country": "England",
    "aliases": [
      "伊普斯",
      "Ipswich",
      "伊普斯维奇"
    ]
  },
  {
    "id": 84,
    "name": "Nice",
    "zh_name": "尼斯",
    "country": "France",
    "aliases": [
      "尼斯",
      "Nice"
    ]
  },
  {
    "id": 169,
    "name": "Eintracht Frankfurt",
    "zh_name": "法兰克福",
    "country": "Germany",
    "aliases": [
      "法兰克福",
      "Eintracht Frankfurt"
    ]
  },
  {
    "id": 1601,
    "name": "Toronto FC",
    "zh_name": "多伦多FC",
    "country": "Canada",
    "aliases": [
      "多伦多FC",
      "Toronto FC",
      "多伦多"
    ]
  },
  {
    "id": 1611,
    "name": "Sporting Kansas City",
    "zh_name": "堪萨斯城体育",
    "country": "USA",
    "aliases": [
      "堪萨斯城体育",
      "Sporting Kansas City",
      "堪萨斯城",
      "堪萨斯城竞技"
    ]
  },
  {
    "id": 1615,
    "name": "DC United",
    "zh_name": "华盛顿联",
    "country": "USA",
    "aliases": [
      "华盛顿联",
      "DC United",
      "华盛顿",
      "华盛顿特区联"
    ]
  },
  {
    "id": 70,
    "name": "Middlesbrough",
    "zh_name": "米堡",
    "country": "England",
    "aliases": [
      "米堡",
      "Middlesbrough",
      "米德尔斯堡"
    ]
  },
  {
    "id": 207,
    "name": "Utrecht",
    "zh_name": "乌得勒支",
    "country": "Netherlands",
    "aliases": [
      "乌得勒支",
      "Utrecht",
      "乌德勒支"
    ]
  },
  {
    "id": 534,
    "name": "Las Palmas",
    "zh_name": "拉斯帕尔马斯",
    "country": "Spain",
    "aliases": [
      "拉斯帕尔马斯",
      "Las Palmas"
    ]
  },
  {
    "id": 546,
    "name": "Getafe",
    "zh_name": "赫塔费",
    "country": "Spain",
    "aliases": [
      "赫塔费",
      "Getafe"
    ]
  },
  {
    "id": 1386,
    "name": "Dundee Utd",
    "zh_name": "邓迪联",
    "country": "Scotland",
    "aliases": [
      "邓迪联",
      "Dundee Utd"
    ]
  },
  {
    "id": 39,
    "name": "Wolves",
    "zh_name": "狼队",
    "country": "England",
    "aliases": [
      "狼队",
      "Wolves",
      "伍尔弗汉普顿"
    ]
  },
  {
    "id": 48,
    "name": "West Ham",
    "zh_name": "西汉姆联",
    "country": "England",
    "aliases": [
      "西汉姆联",
      "West Ham"
    ]
  },
  {
    "id": 76,
    "name": "Swansea",
    "zh_name": "斯旺西",
    "country": "Wales",
    "aliases": [
      "斯旺西",
      "Swansea"
    ]
  },
  {
    "id": 735,
    "name": "St. Truiden",
    "zh_name": "圣图尔登",
    "country": "Belgium",
    "aliases": [
      "圣图尔登",
      "St. Truiden",
      "圣特赖登",
      "圣雷登"
    ]
  },
  {
    "id": 895,
    "name": "Como",
    "zh_name": "科莫",
    "country": "Italy",
    "aliases": [
      "科莫",
      "Como"
    ]
  },
  {
    "id": 537,
    "name": "Leganes",
    "zh_name": "莱加内斯",
    "country": "Spain",
    "aliases": [
      "莱加内斯",
      "Leganes"
    ]
  },
  {
    "id": 720,
    "name": "Valladolid",
    "zh_name": "巴利亚多利德",
    "country": "Spain",
    "aliases": [
      "巴利亚多利德",
      "Valladolid",
      "巴拉多利德"
    ]
  },
  {
    "id": 736,
    "name": "Charleroi",
    "zh_name": "沙勒罗瓦",
    "country": "Belgium",
    "aliases": [
      "沙勒罗瓦",
      "Charleroi",
      "夏勒罗瓦"
    ]
  },
  {
    "id": 58,
    "name": "Millwall",
    "zh_name": "米尔沃尔",
    "country": "England",
    "aliases": [
      "米尔沃尔",
      "Millwall"
    ]
  },
  {
    "id": 81,
    "name": "Marseille",
    "zh_name": "马赛",
    "country": "France",
    "aliases": [
      "马赛",
      "Marseille"
    ]
  },
  {
    "id": 167,
    "name": "1899 Hoffenheim",
    "zh_name": "霍芬海姆",
    "country": "Germany",
    "aliases": [
      "霍芬海姆",
      "1899 Hoffenheim"
    ]
  },
  {
    "id": 173,
    "name": "RB Leipzig",
    "zh_name": "莱红牛",
    "country": "Germany",
    "aliases": [
      "莱红牛",
      "RB Leipzig",
      "RB莱比锡",
      "莱比锡RB",
      "莱比锡红牛"
    ]
  },
  {
    "id": 224,
    "name": "Guimaraes",
    "zh_name": "吉马良斯",
    "country": "Portugal",
    "aliases": [
      "吉马良斯",
      "Guimaraes"
    ]
  },
  {
    "id": 413,
    "name": "NEC Nijmegen",
    "zh_name": "奈梅亨",
    "country": "Netherlands",
    "aliases": [
      "奈梅亨",
      "NEC Nijmegen"
    ]
  },
  {
    "id": 567,
    "name": "Plzen",
    "zh_name": "比尔森胜利",
    "country": "Czech-Republic",
    "aliases": [
      "比尔森胜利",
      "Plzen",
      "比尔森"
    ]
  },
  {
    "id": 253,
    "name": "Dundee",
    "zh_name": "邓迪",
    "country": "Scotland",
    "aliases": [
      "邓迪",
      "Dundee",
      "邓迪FC"
    ]
  },
  {
    "id": 740,
    "name": "Antwerp",
    "zh_name": "安特卫普",
    "country": "Belgium",
    "aliases": [
      "安特卫普",
      "Antwerp"
    ]
  },
  {
    "id": 71,
    "name": "Norwich",
    "zh_name": "诺维奇",
    "country": "England",
    "aliases": [
      "诺维奇",
      "Norwich"
    ]
  },
  {
    "id": 95,
    "name": "Strasbourg",
    "zh_name": "斯特拉斯",
    "country": "France",
    "aliases": [
      "斯特拉斯",
      "Strasbourg",
      "斯特拉斯堡"
    ]
  },
  {
    "id": 180,
    "name": "1. FC Heidenheim",
    "zh_name": "海登海姆",
    "country": "Germany",
    "aliases": [
      "海登海姆",
      "1. FC Heidenheim"
    ]
  },
  {
    "id": 260,
    "name": "OH Leuven",
    "zh_name": "奥哈瓦里",
    "country": "Belgium",
    "aliases": [
      "奥哈瓦里",
      "OH Leuven",
      "奥德赫维里鲁汶",
      "鲁文"
    ]
  },
  {
    "id": 261,
    "name": "KVC Westerlo",
    "zh_name": "韦斯特洛",
    "country": "Belgium",
    "aliases": [
      "韦斯特洛",
      "KVC Westerlo"
    ]
  },
  {
    "id": 266,
    "name": "KV Mechelen",
    "zh_name": "梅赫伦",
    "country": "Belgium",
    "aliases": [
      "梅赫伦",
      "KV Mechelen"
    ]
  },
  {
    "id": 281,
    "name": "Kashiwa Reysol",
    "zh_name": "柏太阳神",
    "country": "Japan",
    "aliases": [
      "柏太阳神",
      "Kashiwa Reysol"
    ]
  },
  {
    "id": 282,
    "name": "Sanfrecce Hiroshima",
    "zh_name": "广岛三箭",
    "country": "Japan",
    "aliases": [
      "广岛三箭",
      "Sanfrecce Hiroshima"
    ]
  },
  {
    "id": 287,
    "name": "Urawa",
    "zh_name": "浦和红钻",
    "country": "Japan",
    "aliases": [
      "浦和红钻",
      "Urawa"
    ]
  },
  {
    "id": 288,
    "name": "Nagoya Grampus",
    "zh_name": "名古屋鲸",
    "country": "Japan",
    "aliases": [
      "名古屋鲸",
      "Nagoya Grampus",
      "名古屋鲸八"
    ]
  },
  {
    "id": 289,
    "name": "Vissel Kobe",
    "zh_name": "神户胜利船",
    "country": "Japan",
    "aliases": [
      "神户胜利船",
      "Vissel Kobe",
      "神户胜利"
    ]
  },
  {
    "id": 290,
    "name": "Kashima",
    "zh_name": "鹿岛鹿角",
    "country": "Japan",
    "aliases": [
      "鹿岛鹿角",
      "Kashima"
    ]
  },
  {
    "id": 291,
    "name": "Cerezo Osaka",
    "zh_name": "大阪樱花",
    "country": "Japan",
    "aliases": [
      "大阪樱花",
      "Cerezo Osaka"
    ]
  },
  {
    "id": 292,
    "name": "FC Tokyo",
    "zh_name": "FC东京",
    "country": "Japan",
    "aliases": [
      "FC东京",
      "FC Tokyo",
      "东京FC"
    ]
  },
  {
    "id": 293,
    "name": "Gamba Osaka",
    "zh_name": "大阪钢巴",
    "country": "Japan",
    "aliases": [
      "大阪钢巴",
      "Gamba Osaka"
    ]
  },
  {
    "id": 294,
    "name": "Kawasaki Frontale",
    "zh_name": "川崎前锋",
    "country": "Japan",
    "aliases": [
      "川崎前锋",
      "Kawasaki Frontale"
    ]
  },
  {
    "id": 296,
    "name": "Yokohama F. Marinos",
    "zh_name": "横滨水手",
    "country": "Japan",
    "aliases": [
      "横滨水手",
      "Yokohama F. Marinos"
    ]
  },
  {
    "id": 302,
    "name": "Kyoto Sanga",
    "zh_name": "京都",
    "country": "Japan",
    "aliases": [
      "京都",
      "Kyoto Sanga",
      "京都不死鸟",
      "京都Sanga"
    ]
  },
  {
    "id": 303,
    "name": "Machida Zelvia",
    "zh_name": "町田泽维亚",
    "country": "Japan",
    "aliases": [
      "町田泽维亚",
      "Machida Zelvia",
      "町田泽维"
    ]
  },
  {
    "id": 306,
    "name": "Tokyo Verdy",
    "zh_name": "东京绿茵",
    "country": "Japan",
    "aliases": [
      "东京绿茵",
      "Tokyo Verdy"
    ]
  },
  {
    "id": 316,
    "name": "Avispa Fukuoka",
    "zh_name": "福冈黄蜂",
    "country": "Japan",
    "aliases": [
      "福冈黄蜂",
      "Avispa Fukuoka"
    ]
  },
  {
    "id": 606,
    "name": "FC Lugano",
    "zh_name": "卢加诺",
    "country": "Switzerland",
    "aliases": [
      "卢加诺",
      "FC Lugano"
    ]
  },
  {
    "id": 733,
    "name": "Standard Liege",
    "zh_name": "标准列日",
    "country": "Belgium",
    "aliases": [
      "标准列日",
      "Standard Liege"
    ]
  },
  {
    "id": 1579,
    "name": "Monza",
    "zh_name": "蒙扎",
    "country": "Italy",
    "aliases": [
      "蒙扎",
      "Monza"
    ]
  },
  {
    "id": 410,
    "name": "GO Ahead Eagles",
    "zh_name": "前进之鹰",
    "country": "Netherlands",
    "aliases": [
      "前进之鹰",
      "GO Ahead Eagles"
    ]
  },
  {
    "id": 504,
    "name": "Hellas Verona",
    "zh_name": "维罗纳",
    "country": "Italy",
    "aliases": [
      "维罗纳",
      "Hellas Verona"
    ]
  },
  {
    "id": 511,
    "name": "Empoli",
    "zh_name": "恩波利",
    "country": "Italy",
    "aliases": [
      "恩波利",
      "Empoli"
    ]
  },
  {
    "id": 798,
    "name": "Mallorca",
    "zh_name": "马洛卡",
    "country": "Spain",
    "aliases": [
      "马洛卡",
      "Mallorca",
      "马略卡"
    ]
  },
  {
    "id": 36,
    "name": "Fulham",
    "zh_name": "富勒姆",
    "country": "England",
    "aliases": [
      "富勒姆",
      "Fulham"
    ]
  },
  {
    "id": 38,
    "name": "Watford",
    "zh_name": "沃特福德",
    "country": "England",
    "aliases": [
      "沃特福德",
      "Watford"
    ]
  },
  {
    "id": 45,
    "name": "Everton",
    "zh_name": "埃弗顿",
    "country": "England",
    "aliases": [
      "埃弗顿",
      "Everton"
    ]
  },
  {
    "id": 55,
    "name": "Brentford",
    "zh_name": "布伦特",
    "country": "England",
    "aliases": [
      "布伦特",
      "Brentford",
      "布伦特福德"
    ]
  },
  {
    "id": 60,
    "name": "West Brom",
    "zh_name": "西布朗",
    "country": "England",
    "aliases": [
      "西布朗",
      "West Brom",
      "西布罗姆",
      "西布朗维奇"
    ]
  },
  {
    "id": 69,
    "name": "Derby",
    "zh_name": "德比郡",
    "country": "England",
    "aliases": [
      "德比郡",
      "Derby"
    ]
  },
  {
    "id": 136,
    "name": "Vitoria",
    "zh_name": "维多利亚",
    "country": "Brazil",
    "aliases": [
      "维多利亚",
      "Vitoria"
    ]
  },
  {
    "id": 164,
    "name": "FSV Mainz 05",
    "zh_name": "美因茨",
    "country": "Germany",
    "aliases": [
      "美因茨",
      "FSV Mainz 05"
    ]
  },
  {
    "id": 437,
    "name": "Rosario Central",
    "zh_name": "罗萨里奥中央",
    "country": "Argentina",
    "aliases": [
      "罗萨里奥中央",
      "Rosario Central",
      "罗萨里奥"
    ]
  },
  {
    "id": 1355,
    "name": "Portsmouth",
    "zh_name": "朴次茅斯",
    "country": "England",
    "aliases": [
      "朴次茅斯",
      "Portsmouth",
      "朴茨茅斯"
    ]
  },
  {
    "id": 329,
    "name": "Molde",
    "zh_name": "莫尔德",
    "country": "Norway",
    "aliases": [
      "莫尔德",
      "Molde"
    ]
  },
  {
    "id": 532,
    "name": "Valencia",
    "zh_name": "巴伦西亚",
    "country": "Spain",
    "aliases": [
      "巴伦西亚",
      "Valencia",
      "瓦伦西亚"
    ]
  },
  {
    "id": 536,
    "name": "Sevilla",
    "zh_name": "塞维利亚",
    "country": "Spain",
    "aliases": [
      "塞维利亚",
      "Sevilla"
    ]
  },
  {
    "id": 540,
    "name": "Espanyol",
    "zh_name": "西班牙人",
    "country": "Spain",
    "aliases": [
      "西班牙人",
      "Espanyol"
    ]
  },
  {
    "id": 542,
    "name": "Alaves",
    "zh_name": "阿拉维斯",
    "country": "Spain",
    "aliases": [
      "阿拉维斯",
      "Alaves"
    ]
  },
  {
    "id": 628,
    "name": "Sparta Praha",
    "zh_name": "布拉格斯巴达",
    "country": "Czech-Republic",
    "aliases": [
      "布拉格斯巴达",
      "Sparta Praha",
      "布斯巴达"
    ]
  },
  {
    "id": 727,
    "name": "Osasuna",
    "zh_name": "奥萨苏纳",
    "country": "Spain",
    "aliases": [
      "奥萨苏纳",
      "Osasuna"
    ]
  },
  {
    "id": 106,
    "name": "Stade Brestois 29",
    "zh_name": "布雷斯特",
    "country": "France",
    "aliases": [
      "布雷斯特",
      "Stade Brestois 29"
    ]
  },
  {
    "id": 116,
    "name": "Lens",
    "zh_name": "朗斯",
    "country": "France",
    "aliases": [
      "朗斯",
      "Lens"
    ]
  },
  {
    "id": 490,
    "name": "Cagliari",
    "zh_name": "卡利亚里",
    "country": "Italy",
    "aliases": [
      "卡利亚里",
      "Cagliari"
    ]
  },
  {
    "id": 494,
    "name": "Udinese",
    "zh_name": "乌迪内斯",
    "country": "Italy",
    "aliases": [
      "乌迪内斯",
      "Udinese"
    ]
  },
  {
    "id": 495,
    "name": "Genoa",
    "zh_name": "热那亚",
    "country": "Italy",
    "aliases": [
      "热那亚",
      "Genoa"
    ]
  },
  {
    "id": 503,
    "name": "Torino",
    "zh_name": "都灵",
    "country": "Italy",
    "aliases": [
      "都灵",
      "Torino"
    ]
  },
  {
    "id": 517,
    "name": "Venezia",
    "zh_name": "威尼斯",
    "country": "Italy",
    "aliases": [
      "威尼斯",
      "Venezia"
    ]
  },
  {
    "id": 523,
    "name": "Parma",
    "zh_name": "帕尔马",
    "country": "Italy",
    "aliases": [
      "帕尔马",
      "Parma"
    ]
  },
  {
    "id": 867,
    "name": "Lecce",
    "zh_name": "莱切",
    "country": "Italy",
    "aliases": [
      "莱切",
      "Lecce"
    ]
  },
  {
    "id": 56,
    "name": "Bristol City",
    "zh_name": "布城",
    "country": "England",
    "aliases": [
      "布城",
      "Bristol City",
      "布里斯托尔城"
    ]
  },
  {
    "id": 59,
    "name": "Preston",
    "zh_name": "普雷斯顿",
    "country": "England",
    "aliases": [
      "普雷斯顿",
      "Preston"
    ]
  },
  {
    "id": 72,
    "name": "QPR",
    "zh_name": "女王公园巡游者",
    "country": "England",
    "aliases": [
      "女王公园巡游者",
      "QPR",
      "女王巡游"
    ]
  },
  {
    "id": 75,
    "name": "Stoke City",
    "zh_name": "斯托克城",
    "country": "England",
    "aliases": [
      "斯托克城",
      "Stoke City"
    ]
  },
  {
    "id": 94,
    "name": "Rennes",
    "zh_name": "雷恩",
    "country": "France",
    "aliases": [
      "雷恩",
      "Rennes"
    ]
  },
  {
    "id": 227,
    "name": "Santa Clara",
    "zh_name": "圣克拉拉",
    "country": "Portugal",
    "aliases": [
      "圣克拉拉",
      "Santa Clara",
      "圣塔克拉拉"
    ]
  },
  {
    "id": 565,
    "name": "BSC Young Boys",
    "zh_name": "伯尔尼年轻人",
    "country": "Switzerland",
    "aliases": [
      "伯尔尼年轻人",
      "BSC Young Boys",
      "年轻人"
    ]
  },
  {
    "id": 1338,
    "name": "Oxford United",
    "zh_name": "牛津联",
    "country": "England",
    "aliases": [
      "牛津联",
      "Oxford United"
    ]
  },
  {
    "id": 456,
    "name": "Talleres Cordoba",
    "zh_name": "塔勒瑞斯",
    "country": "Argentina",
    "aliases": [
      "塔勒瑞斯",
      "Talleres Cordoba"
    ]
  },
  {
    "id": 460,
    "name": "San Lorenzo",
    "zh_name": "圣洛伦索",
    "country": "Argentina",
    "aliases": [
      "圣洛伦索",
      "San Lorenzo"
    ]
  },
  {
    "id": 62,
    "name": "Sheffield Utd",
    "zh_name": "谢菲尔德联",
    "country": "England",
    "aliases": [
      "谢菲尔德联",
      "Sheffield Utd",
      "谢菲联"
    ]
  },
  {
    "id": 64,
    "name": "Hull City",
    "zh_name": "赫尔城",
    "country": "England",
    "aliases": [
      "赫尔城",
      "Hull City"
    ]
  },
  {
    "id": 67,
    "name": "Blackburn",
    "zh_name": "布莱克本",
    "country": "England",
    "aliases": [
      "布莱克本",
      "Blackburn"
    ]
  },
  {
    "id": 128,
    "name": "Santos",
    "zh_name": "桑托斯",
    "country": "Brazil",
    "aliases": [
      "桑托斯",
      "Santos"
    ]
  },
  {
    "id": 372,
    "name": "IF Elfsborg",
    "zh_name": "埃尔夫斯堡",
    "country": "Sweden",
    "aliases": [
      "埃尔夫斯堡",
      "IF Elfsborg",
      "埃夫斯堡",
      "埃尔维斯"
    ]
  },
  {
    "id": 759,
    "name": "Viking",
    "zh_name": "维京",
    "country": "Norway",
    "aliases": [
      "维京",
      "Viking"
    ]
  },
  {
    "id": 1346,
    "name": "Coventry",
    "zh_name": "考文垂",
    "country": "England",
    "aliases": [
      "考文垂",
      "Coventry"
    ]
  },
  {
    "id": 210,
    "name": "Heerenveen",
    "zh_name": "海伦芬",
    "country": "Netherlands",
    "aliases": [
      "海伦芬",
      "Heerenveen"
    ]
  },
  {
    "id": 1064,
    "name": "Platense",
    "zh_name": "普拉滕斯",
    "country": "Argentina",
    "aliases": [
      "普拉滕斯",
      "Platense",
      "普拉腾斯"
    ]
  },
  {
    "id": 4686,
    "name": "Stockport County",
    "zh_name": "斯托克港",
    "country": "England",
    "aliases": [
      "斯托克港",
      "Stockport County",
      "斯托克波特郡"
    ]
  },
  {
    "id": 112,
    "name": "Metz",
    "zh_name": "梅斯",
    "country": "France",
    "aliases": [
      "梅斯",
      "Metz"
    ]
  },
  {
    "id": 161,
    "name": "VfL Wolfsburg",
    "zh_name": "沃夫斯堡",
    "country": "Germany",
    "aliases": [
      "沃夫斯堡",
      "VfL Wolfsburg",
      "沃尔夫斯堡"
    ]
  },
  {
    "id": 178,
    "name": "SpVgg Greuther Fürth",
    "zh_name": "菲尔特",
    "country": "Germany",
    "aliases": [
      "菲尔特",
      "SpVgg Greuther Fürth"
    ]
  },
  {
    "id": 202,
    "name": "Groningen",
    "zh_name": "格罗宁根",
    "country": "Netherlands",
    "aliases": [
      "格罗宁根",
      "Groningen"
    ]
  },
  {
    "id": 364,
    "name": "Djurgardens IF",
    "zh_name": "佐加顿斯",
    "country": "Sweden",
    "aliases": [
      "佐加顿斯",
      "Djurgardens IF",
      "迪格弗斯"
    ]
  },
  {
    "id": 367,
    "name": "BK Hacken",
    "zh_name": "赫根",
    "country": "Sweden",
    "aliases": [
      "赫根",
      "BK Hacken"
    ]
  },
  {
    "id": 560,
    "name": "Slavia Praha",
    "zh_name": "布拉格斯拉维亚",
    "country": "Czech-Republic",
    "aliases": [
      "布拉格斯拉维亚",
      "Slavia Praha",
      "斯拉维亚"
    ]
  },
  {
    "id": 744,
    "name": "Eintracht Braunschweig",
    "zh_name": "不伦瑞克",
    "country": "Germany",
    "aliases": [
      "不伦瑞克",
      "Eintracht Braunschweig"
    ]
  },
  {
    "id": 748,
    "name": "Burton Albion",
    "zh_name": "伯顿",
    "country": "England",
    "aliases": [
      "伯顿",
      "Burton Albion"
    ]
  },
  {
    "id": 1063,
    "name": "Saint Etienne",
    "zh_name": "圣埃蒂安",
    "country": "France",
    "aliases": [
      "圣埃蒂安",
      "Saint Etienne"
    ]
  },
  {
    "id": 1065,
    "name": "Central Cordoba de Santiago",
    "zh_name": "中央科尔多瓦",
    "country": "Argentina",
    "aliases": [
      "中央科尔多瓦",
      "Central Cordoba de Santiago",
      "圣地亚哥-科尔多瓦中央",
      "科尔多瓦中央"
    ]
  },
  {
    "id": 4716,
    "name": "Casa Pia",
    "zh_name": "卡萨皮亚",
    "country": "Portugal",
    "aliases": [
      "卡萨皮亚",
      "Casa Pia"
    ]
  },
  {
    "id": 68,
    "name": "Bolton",
    "zh_name": "博尔顿",
    "country": "England",
    "aliases": [
      "博尔顿",
      "Bolton"
    ]
  },
  {
    "id": 93,
    "name": "Reims",
    "zh_name": "兰斯",
    "country": "France",
    "aliases": [
      "兰斯",
      "Reims"
    ]
  },
  {
    "id": 99,
    "name": "Clermont Foot",
    "zh_name": "克莱蒙",
    "country": "France",
    "aliases": [
      "克莱蒙",
      "Clermont Foot"
    ]
  },
  {
    "id": 193,
    "name": "PEC Zwolle",
    "zh_name": "兹沃勒",
    "country": "Netherlands",
    "aliases": [
      "兹沃勒",
      "PEC Zwolle"
    ]
  },
  {
    "id": 205,
    "name": "Fortuna Sittard",
    "zh_name": "福图纳",
    "country": "Netherlands",
    "aliases": [
      "福图纳",
      "Fortuna Sittard",
      "锡塔德幸运",
      "锡塔德福图纳"
    ]
  },
  {
    "id": 426,
    "name": "Sparta Rotterdam",
    "zh_name": "鹿斯巴达",
    "country": "Netherlands",
    "aliases": [
      "鹿斯巴达",
      "Sparta Rotterdam",
      "鹿特丹斯巴达"
    ]
  },
  {
    "id": 433,
    "name": "Laval",
    "zh_name": "拉瓦勒",
    "country": "France",
    "aliases": [
      "拉瓦勒",
      "Laval"
    ]
  },
  {
    "id": 445,
    "name": "Huracan",
    "zh_name": "飓风",
    "country": "Argentina",
    "aliases": [
      "飓风",
      "Huracan",
      "飓风队"
    ]
  },
  {
    "id": 452,
    "name": "Tigre",
    "zh_name": "蒂格雷",
    "country": "Argentina",
    "aliases": [
      "蒂格雷",
      "Tigre"
    ]
  },
  {
    "id": 473,
    "name": "Independ. Rivadavia",
    "zh_name": "独立里瓦达维亚",
    "country": "Argentina",
    "aliases": [
      "独立里瓦达维亚",
      "Independ. Rivadavia",
      "里瓦达维亚独立"
    ]
  },
  {
    "id": 617,
    "name": "Panathinaikos",
    "zh_name": "帕纳辛纳科斯",
    "country": "Greece",
    "aliases": [
      "帕纳辛纳科斯",
      "Panathinaikos",
      "帕纳辛纳"
    ]
  },
  {
    "id": 1301,
    "name": "Rodez",
    "zh_name": "罗德兹",
    "country": "France",
    "aliases": [
      "罗德兹",
      "Rodez"
    ]
  },
  {
    "id": 1304,
    "name": "Dunkerque",
    "zh_name": "敦刻尔克",
    "country": "France",
    "aliases": [
      "敦刻尔克",
      "Dunkerque"
    ]
  },
  {
    "id": 90,
    "name": "Guingamp",
    "zh_name": "甘冈",
    "country": "France",
    "aliases": [
      "甘冈",
      "Guingamp"
    ]
  },
  {
    "id": 104,
    "name": "RED Star FC 93",
    "zh_name": "圣旺红星",
    "country": "France",
    "aliases": [
      "圣旺红星",
      "RED Star FC 93",
      "红星"
    ]
  },
  {
    "id": 159,
    "name": "Hertha BSC",
    "zh_name": "柏林赫塔",
    "country": "Germany",
    "aliases": [
      "柏林赫塔",
      "Hertha BSC"
    ]
  },
  {
    "id": 166,
    "name": "Hannover 96",
    "zh_name": "汉诺威96",
    "country": "Germany",
    "aliases": [
      "汉诺威96",
      "Hannover 96",
      "汉诺威"
    ]
  },
  {
    "id": 171,
    "name": "1. FC Nürnberg",
    "zh_name": "纽伦堡",
    "country": "Germany",
    "aliases": [
      "纽伦堡",
      "1. FC Nürnberg"
    ]
  },
  {
    "id": 176,
    "name": "VfL Bochum",
    "zh_name": "波鸿",
    "country": "Germany",
    "aliases": [
      "波鸿",
      "VfL Bochum"
    ]
  },
  {
    "id": 179,
    "name": "1. FC Magdeburg",
    "zh_name": "马格德堡",
    "country": "Germany",
    "aliases": [
      "马格德堡",
      "1. FC Magdeburg"
    ]
  },
  {
    "id": 181,
    "name": "SV Darmstadt 98",
    "zh_name": "达姆施塔",
    "country": "Germany",
    "aliases": [
      "达姆施塔",
      "SV Darmstadt 98",
      "达姆施塔特"
    ]
  },
  {
    "id": 185,
    "name": "SC Paderborn 07",
    "zh_name": "帕德博恩",
    "country": "Germany",
    "aliases": [
      "帕德博恩",
      "SC Paderborn 07"
    ]
  },
  {
    "id": 186,
    "name": "FC St. Pauli",
    "zh_name": "圣保利",
    "country": "Germany",
    "aliases": [
      "圣保利",
      "FC St. Pauli"
    ]
  },
  {
    "id": 191,
    "name": "Holstein Kiel",
    "zh_name": "基尔",
    "country": "Germany",
    "aliases": [
      "基尔",
      "Holstein Kiel",
      "荷尔斯泰因基尔"
    ]
  },
  {
    "id": 215,
    "name": "Moreirense",
    "zh_name": "摩雷伦斯",
    "country": "Portugal",
    "aliases": [
      "摩雷伦斯",
      "Moreirense",
      "莫雷伦斯"
    ]
  },
  {
    "id": 225,
    "name": "Nacional",
    "zh_name": "国民队",
    "country": "Portugal",
    "aliases": [
      "国民队",
      "Nacional",
      "葡国民",
      "葡萄牙国民"
    ]
  },
  {
    "id": 226,
    "name": "Rio Ave",
    "zh_name": "里奥阿维",
    "country": "Portugal",
    "aliases": [
      "里奥阿维",
      "Rio Ave"
    ]
  },
  {
    "id": 230,
    "name": "Estoril",
    "zh_name": "埃斯托里",
    "country": "Portugal",
    "aliases": [
      "埃斯托里",
      "Estoril",
      "埃斯托里尔"
    ]
  },
  {
    "id": 240,
    "name": "Arouca",
    "zh_name": "阿罗卡",
    "country": "Portugal",
    "aliases": [
      "阿罗卡",
      "Arouca"
    ]
  },
  {
    "id": 242,
    "name": "Famalicao",
    "zh_name": "法马利康",
    "country": "Portugal",
    "aliases": [
      "法马利康",
      "Famalicao"
    ]
  },
  {
    "id": 438,
    "name": "Velez Sarsfield",
    "zh_name": "萨斯菲尔德",
    "country": "Argentina",
    "aliases": [
      "萨斯菲尔德",
      "Velez Sarsfield"
    ]
  },
  {
    "id": 745,
    "name": "1. FC Kaiserslautern",
    "zh_name": "凯泽",
    "country": "Germany",
    "aliases": [
      "凯泽",
      "1. FC Kaiserslautern",
      "凯泽斯劳滕"
    ]
  },
  {
    "id": 762,
    "name": "GIL Vicente",
    "zh_name": "吉尔维森特",
    "country": "Portugal",
    "aliases": [
      "吉尔维森特",
      "GIL Vicente",
      "吉维森特"
    ]
  },
  {
    "id": 785,
    "name": "Karlsruher SC",
    "zh_name": "卡尔斯鲁厄",
    "country": "Germany",
    "aliases": [
      "卡尔斯鲁厄",
      "Karlsruher SC",
      "卡斯鲁厄"
    ]
  },
  {
    "id": 1011,
    "name": "FC ST. Gallen",
    "zh_name": "圣加仑",
    "country": "Switzerland",
    "aliases": [
      "圣加仑",
      "FC ST. Gallen",
      "圣加伦"
    ]
  },
  {
    "id": 1660,
    "name": "SV Elversberg",
    "zh_name": "埃沃斯堡",
    "country": "Germany",
    "aliases": [
      "埃沃斯堡",
      "SV Elversberg",
      "埃尔沃斯贝格",
      "埃弗斯堡"
    ]
  },
  {
    "id": 7848,
    "name": "Mirassol",
    "zh_name": "米拉索尔",
    "country": "Brazil",
    "aliases": [
      "米拉索尔",
      "Mirassol"
    ]
  },
  {
    "id": 15130,
    "name": "Estrela",
    "zh_name": "阿马多拉",
    "country": "Portugal",
    "aliases": [
      "阿马多拉",
      "Estrela",
      "阿马多拉之星"
    ]
  },
  {
    "id": 82,
    "name": "Montpellier",
    "zh_name": "蒙彼利埃",
    "country": "France",
    "aliases": [
      "蒙彼利埃",
      "Montpellier"
    ]
  },
  {
    "id": 83,
    "name": "Nantes",
    "zh_name": "南特",
    "country": "France",
    "aliases": [
      "南特",
      "Nantes"
    ]
  },
  {
    "id": 101,
    "name": "Grenoble",
    "zh_name": "格勒诺布",
    "country": "France",
    "aliases": [
      "格勒诺布",
      "Grenoble",
      "格勒诺布尔"
    ]
  },
  {
    "id": 331,
    "name": "Rosenborg",
    "zh_name": "罗森博格",
    "country": "Norway",
    "aliases": [
      "罗森博格",
      "Rosenborg"
    ]
  },
  {
    "id": 453,
    "name": "Independiente",
    "zh_name": "独立",
    "country": "Argentina",
    "aliases": [
      "独立",
      "Independiente",
      "独立队",
      "阿根廷独立"
    ]
  },
  {
    "id": 458,
    "name": "Argentinos JRS",
    "zh_name": "阿根廷青年人",
    "country": "Argentina",
    "aliases": [
      "阿根廷青年人",
      "Argentinos JRS",
      "青年人"
    ]
  },
  {
    "id": 1297,
    "name": "PAU",
    "zh_name": "波城",
    "country": "France",
    "aliases": [
      "波城",
      "PAU",
      "波城FC"
    ]
  },
  {
    "id": 2432,
    "name": "Barracas Central",
    "zh_name": "巴拉卡斯中央",
    "country": "Argentina",
    "aliases": [
      "巴拉卡斯中央",
      "Barracas Central"
    ]
  },
  {
    "id": 3012,
    "name": "Annecy",
    "zh_name": "阿讷西",
    "country": "France",
    "aliases": [
      "阿讷西",
      "Annecy",
      "阿纳西"
    ]
  },
  {
    "id": 77,
    "name": "Angers",
    "zh_name": "昂热",
    "country": "France",
    "aliases": [
      "昂热",
      "Angers"
    ]
  },
  {
    "id": 96,
    "name": "Toulouse",
    "zh_name": "图卢兹",
    "country": "France",
    "aliases": [
      "图卢兹",
      "Toulouse"
    ]
  },
  {
    "id": 97,
    "name": "Lorient",
    "zh_name": "洛里昂",
    "country": "France",
    "aliases": [
      "洛里昂",
      "Lorient"
    ]
  },
  {
    "id": 108,
    "name": "Auxerre",
    "zh_name": "欧塞尔",
    "country": "France",
    "aliases": [
      "欧塞尔",
      "Auxerre"
    ]
  },
  {
    "id": 110,
    "name": "Estac Troyes",
    "zh_name": "特鲁瓦",
    "country": "France",
    "aliases": [
      "特鲁瓦",
      "Estac Troyes"
    ]
  },
  {
    "id": 111,
    "name": "Le Havre",
    "zh_name": "勒阿弗尔",
    "country": "France",
    "aliases": [
      "勒阿弗尔",
      "Le Havre"
    ]
  },
  {
    "id": 114,
    "name": "Paris FC",
    "zh_name": "巴黎FC",
    "country": "France",
    "aliases": [
      "巴黎FC",
      "Paris FC"
    ]
  },
  {
    "id": 162,
    "name": "Werder Bremen",
    "zh_name": "不来梅",
    "country": "Germany",
    "aliases": [
      "不来梅",
      "Werder Bremen",
      "云达不莱梅",
      "云达不来梅"
    ]
  },
  {
    "id": 163,
    "name": "Borussia Mönchengladbach",
    "zh_name": "门兴格拉德巴赫",
    "country": "Germany",
    "aliases": [
      "门兴格拉德巴赫",
      "Borussia Mönchengladbach",
      "门兴"
    ]
  },
  {
    "id": 170,
    "name": "FC Augsburg",
    "zh_name": "奥格斯堡",
    "country": "Germany",
    "aliases": [
      "奥格斯堡",
      "FC Augsburg"
    ]
  },
  {
    "id": 174,
    "name": "FC Schalke 04",
    "zh_name": "沙尔克04",
    "country": "Germany",
    "aliases": [
      "沙尔克04",
      "FC Schalke 04",
      "沙尔克"
    ]
  },
  {
    "id": 175,
    "name": "Hamburger SV",
    "zh_name": "汉堡",
    "country": "Germany",
    "aliases": [
      "汉堡",
      "Hamburger SV"
    ]
  },
  {
    "id": 182,
    "name": "Union Berlin",
    "zh_name": "柏林联合",
    "country": "Germany",
    "aliases": [
      "柏林联合",
      "Union Berlin"
    ]
  },
  {
    "id": 192,
    "name": "1. FC Köln",
    "zh_name": "科隆",
    "country": "Germany",
    "aliases": [
      "科隆",
      "1. FC Köln"
    ]
  },
  {
    "id": 325,
    "name": "Tromso",
    "zh_name": "特罗姆瑟",
    "country": "Norway",
    "aliases": [
      "特罗姆瑟",
      "Tromso"
    ]
  },
  {
    "id": 440,
    "name": "Belgrano Cordoba",
    "zh_name": "贝尔格拉诺",
    "country": "Argentina",
    "aliases": [
      "贝尔格拉诺",
      "Belgrano Cordoba"
    ]
  },
  {
    "id": 442,
    "name": "Defensa Y Justicia",
    "zh_name": "国防与司法",
    "country": "Argentina",
    "aliases": [
      "国防与司法",
      "Defensa Y Justicia",
      "防卫与正义",
      "防御与正义"
    ]
  },
  {
    "id": 476,
    "name": "Deportivo Riestra",
    "zh_name": "列斯特拉体育",
    "country": "Argentina",
    "aliases": [
      "列斯特拉体育",
      "Deportivo Riestra",
      "利斯特雷",
      "里斯特拉"
    ]
  },
  {
    "id": 747,
    "name": "Barnsley",
    "zh_name": "巴恩斯利",
    "country": "England",
    "aliases": [
      "巴恩斯利",
      "Barnsley"
    ]
  },
  {
    "id": 53,
    "name": "Reading",
    "zh_name": "雷丁",
    "country": "England",
    "aliases": [
      "雷丁",
      "Reading"
    ]
  },
  {
    "id": 61,
    "name": "Wigan",
    "zh_name": "维冈竞技",
    "country": "England",
    "aliases": [
      "维冈竞技",
      "Wigan",
      "维冈"
    ]
  },
  {
    "id": 370,
    "name": "Sirius",
    "zh_name": "天狼星",
    "country": "Sweden",
    "aliases": [
      "天狼星",
      "Sirius",
      "锡里尤斯"
    ]
  },
  {
    "id": 551,
    "name": "FC Basel 1893",
    "zh_name": "巴塞尔",
    "country": "Switzerland",
    "aliases": [
      "巴塞尔",
      "FC Basel 1893"
    ]
  },
  {
    "id": 1014,
    "name": "Lausanne",
    "zh_name": "洛桑",
    "country": "Switzerland",
    "aliases": [
      "洛桑",
      "Lausanne",
      "洛桑体育"
    ]
  },
  {
    "id": 1350,
    "name": "Peterborough",
    "zh_name": "彼得伯勒",
    "country": "England",
    "aliases": [
      "彼得伯勒",
      "Peterborough",
      "彼得堡联"
    ]
  },
  {
    "id": 1356,
    "name": "Blackpool",
    "zh_name": "布莱克浦",
    "country": "England",
    "aliases": [
      "布莱克浦",
      "Blackpool"
    ]
  },
  {
    "id": 1368,
    "name": "Stevenage",
    "zh_name": "斯蒂夫尼奇",
    "country": "England",
    "aliases": [
      "斯蒂夫尼奇",
      "Stevenage",
      "斯蒂文尼奇",
      "斯蒂文"
    ]
  },
  {
    "id": 1379,
    "name": "Lincoln",
    "zh_name": "林肯城",
    "country": "England",
    "aliases": [
      "林肯城",
      "Lincoln"
    ]
  },
  {
    "id": 441,
    "name": "Union Santa Fe",
    "zh_name": "圣菲联合",
    "country": "Argentina",
    "aliases": [
      "圣菲联合",
      "Union Santa Fe",
      "圣塔菲联"
    ]
  },
  {
    "id": 37,
    "name": "Huddersfield",
    "zh_name": "哈德斯",
    "country": "England",
    "aliases": [
      "哈德斯",
      "Huddersfield",
      "哈德斯菲尔德"
    ]
  },
  {
    "id": 363,
    "name": "Hammarby FF",
    "zh_name": "哈马比",
    "country": "Sweden",
    "aliases": [
      "哈马比",
      "Hammarby FF"
    ]
  },
  {
    "id": 366,
    "name": "IFK Goteborg",
    "zh_name": "IFK哥德堡",
    "country": "Sweden",
    "aliases": [
      "IFK哥德堡",
      "IFK Goteborg",
      "哥德堡"
    ]
  },
  {
    "id": 1374,
    "name": "Mansfield Town",
    "zh_name": "曼斯菲尔德",
    "country": "England",
    "aliases": [
      "曼斯菲尔德",
      "Mansfield Town",
      "曼斯菲德"
    ]
  },
  {
    "id": 2747,
    "name": "Daegu FC",
    "zh_name": "大邱FC",
    "country": "South-Korea",
    "aliases": [
      "大邱FC",
      "Daegu FC"
    ]
  },
  {
    "id": 2756,
    "name": "Suwon City FC",
    "zh_name": "水原FC",
    "country": "South-Korea",
    "aliases": [
      "水原FC",
      "Suwon City FC"
    ]
  },
  {
    "id": 6215,
    "name": "Dender",
    "zh_name": "登德尔",
    "country": "Belgium",
    "aliases": [
      "登德尔",
      "Dender"
    ]
  },
  {
    "id": 1687,
    "name": "Catanzaro",
    "zh_name": "卡坦扎罗",
    "country": "Italy",
    "aliases": [
      "卡坦扎罗",
      "Catanzaro"
    ]
  },
  {
    "id": 2279,
    "name": "Tigres UANL",
    "zh_name": "老虎大学",
    "country": "Mexico",
    "aliases": [
      "老虎大学",
      "Tigres UANL"
    ]
  },
  {
    "id": 2292,
    "name": "CF Pachuca",
    "zh_name": "帕丘卡",
    "country": "Mexico",
    "aliases": [
      "帕丘卡",
      "CF Pachuca"
    ]
  },
  {
    "id": 279,
    "name": "Consadole Sapporo",
    "zh_name": "北海道札幌冈萨多",
    "country": "Japan",
    "aliases": [
      "北海道札幌冈萨多",
      "Consadole Sapporo",
      "札幌冈萨多",
      "札幌冈萨"
    ]
  },
  {
    "id": 280,
    "name": "Jubilo Iwata",
    "zh_name": "磐田喜悦",
    "country": "Japan",
    "aliases": [
      "磐田喜悦",
      "Jubilo Iwata"
    ]
  },
  {
    "id": 295,
    "name": "Sagan Tosu",
    "zh_name": "鸟栖沙岩",
    "country": "Japan",
    "aliases": [
      "鸟栖沙岩",
      "Sagan Tosu",
      "鸟栖砂岩"
    ]
  },
  {
    "id": 307,
    "name": "Yokohama FC",
    "zh_name": "横滨FC",
    "country": "Japan",
    "aliases": [
      "横滨FC",
      "Yokohama FC"
    ]
  },
  {
    "id": 333,
    "name": "Sarpsborg 08 FF",
    "zh_name": "萨普斯堡",
    "country": "Norway",
    "aliases": [
      "萨普斯堡",
      "Sarpsborg 08 FF"
    ]
  },
  {
    "id": 434,
    "name": "Gimnasia L.P.",
    "zh_name": "吉姆纳西亚",
    "country": "Argentina",
    "aliases": [
      "吉姆纳西亚",
      "Gimnasia L.P.",
      "拉普拉塔体操"
    ]
  },
  {
    "id": 619,
    "name": "PAOK",
    "zh_name": "PAOK塞萨洛尼基",
    "country": "Greece",
    "aliases": [
      "PAOK塞萨洛尼基",
      "PAOK",
      "帕奥克",
      "塞萨洛"
    ]
  },
  {
    "id": 1358,
    "name": "Wycombe",
    "zh_name": "威科姆",
    "country": "England",
    "aliases": [
      "威科姆",
      "Wycombe",
      "威科姆流浪者",
      "韦康比"
    ]
  },
  {
    "id": 1373,
    "name": "Leyton Orient",
    "zh_name": "莱顿东方",
    "country": "England",
    "aliases": [
      "莱顿东方",
      "Leyton Orient"
    ]
  },
  {
    "id": 2143,
    "name": "KFUM Oslo",
    "zh_name": "KFUM奥斯陆",
    "country": "Norway",
    "aliases": [
      "KFUM奥斯陆",
      "KFUM Oslo",
      "奥斯陆KFUM",
      "奥斯KFUM"
    ]
  },
  {
    "id": 2149,
    "name": "Fredrikstad",
    "zh_name": "弗雷德里克斯塔",
    "country": "Norway",
    "aliases": [
      "弗雷德里克斯塔",
      "Fredrikstad",
      "腓特烈",
      "腓特烈斯塔"
    ]
  },
  {
    "id": 2748,
    "name": "FC Anyang",
    "zh_name": "FC安养",
    "country": "South-Korea",
    "aliases": [
      "FC安养",
      "FC Anyang",
      "安养FC"
    ]
  },
  {
    "id": 2763,
    "name": "Incheon United",
    "zh_name": "仁川联",
    "country": "South-Korea",
    "aliases": [
      "仁川联",
      "Incheon United"
    ]
  },
  {
    "id": 2929,
    "name": "Al-Ahli Jeddah",
    "zh_name": "吉达国民",
    "country": "Saudi-Arabia",
    "aliases": [
      "吉达国民",
      "Al-Ahli Jeddah",
      "阿尔艾利"
    ]
  },
  {
    "id": 2939,
    "name": "Al-Nassr",
    "zh_name": "利雅得胜利",
    "country": "Saudi-Arabia",
    "aliases": [
      "利雅得胜利",
      "Al-Nassr",
      "阿尔纳斯尔"
    ]
  },
  {
    "id": 535,
    "name": "Malaga",
    "zh_name": "马拉加",
    "country": "Spain",
    "aliases": [
      "马拉加",
      "Malaga"
    ]
  },
  {
    "id": 723,
    "name": "Almeria",
    "zh_name": "阿尔梅里亚",
    "country": "Spain",
    "aliases": [
      "阿尔梅里亚",
      "Almeria"
    ]
  },
  {
    "id": 2295,
    "name": "Cruz Azul",
    "zh_name": "蓝十字",
    "country": "Mexico",
    "aliases": [
      "蓝十字",
      "Cruz Azul"
    ]
  },
  {
    "id": 320,
    "name": "Kristiansund BK",
    "zh_name": "克里斯蒂安松",
    "country": "Norway",
    "aliases": [
      "克里斯蒂安松",
      "Kristiansund BK",
      "克里斯蒂"
    ]
  },
  {
    "id": 2159,
    "name": "Ham-Kam",
    "zh_name": "汉坎",
    "country": "Norway",
    "aliases": [
      "汉坎",
      "Ham-Kam"
    ]
  },
  {
    "id": 2170,
    "name": "Gais",
    "zh_name": "盖斯",
    "country": "Sweden",
    "aliases": [
      "盖斯",
      "Gais",
      "加尔斯",
      "哥德堡盖斯"
    ]
  },
  {
    "id": 2298,
    "name": "FC Juarez",
    "zh_name": "华雷斯",
    "country": "Mexico",
    "aliases": [
      "华雷斯",
      "FC Juarez"
    ]
  },
  {
    "id": 2932,
    "name": "Al-Hilal Saudi FC",
    "zh_name": "利雅得新月",
    "country": "Saudi-Arabia",
    "aliases": [
      "利雅得新月",
      "Al-Hilal Saudi FC",
      "阿尔希拉尔"
    ]
  },
  {
    "id": 2933,
    "name": "Al-Qadisiyah FC",
    "zh_name": "胡巴尔卡德西亚",
    "country": "Saudi-Arabia",
    "aliases": [
      "胡巴尔卡德西亚",
      "Al-Qadisiyah FC",
      "胡拜尔库尔",
      "卡迪西亚"
    ]
  },
  {
    "id": 2934,
    "name": "Al-Ettifaq",
    "zh_name": "达曼协作",
    "country": "Saudi-Arabia",
    "aliases": [
      "达曼协作",
      "Al-Ettifaq",
      "伊蒂法克",
      "达曼协定"
    ]
  },
  {
    "id": 455,
    "name": "Atletico Tucuman",
    "zh_name": "图库曼竞技",
    "country": "Argentina",
    "aliases": [
      "图库曼竞技",
      "Atletico Tucuman"
    ]
  },
  {
    "id": 457,
    "name": "Newells Old Boys",
    "zh_name": "纽维尔老男孩",
    "country": "Argentina",
    "aliases": [
      "纽维尔老男孩",
      "Newells Old Boys"
    ]
  },
  {
    "id": 478,
    "name": "Instituto Cordoba",
    "zh_name": "科尔多瓦学院",
    "country": "Argentina",
    "aliases": [
      "科尔多瓦学院",
      "Instituto Cordoba",
      "科尔多巴学院"
    ]
  },
  {
    "id": 2184,
    "name": "Servette FC",
    "zh_name": "塞尔维特",
    "country": "Switzerland",
    "aliases": [
      "塞尔维特",
      "Servette FC"
    ]
  },
  {
    "id": 2281,
    "name": "Toluca",
    "zh_name": "托卢卡",
    "country": "Mexico",
    "aliases": [
      "托卢卡",
      "Toluca"
    ]
  },
  {
    "id": 2282,
    "name": "Monterrey",
    "zh_name": "蒙特雷",
    "country": "Mexico",
    "aliases": [
      "蒙特雷",
      "Monterrey"
    ]
  },
  {
    "id": 25484,
    "name": "San Diego",
    "zh_name": "圣地亚哥",
    "country": "USA",
    "aliases": [
      "圣地亚哥",
      "San Diego",
      "圣迭戈FC",
      "圣地亚哥FC"
    ]
  },
  {
    "id": 54,
    "name": "Birmingham",
    "zh_name": "伯明翰",
    "country": "England",
    "aliases": [
      "伯明翰",
      "Birmingham"
    ]
  },
  {
    "id": 74,
    "name": "Sheffield Wednesday",
    "zh_name": "谢周三",
    "country": "England",
    "aliases": [
      "谢周三",
      "Sheffield Wednesday",
      "谢菲尔德星期三"
    ]
  },
  {
    "id": 332,
    "name": "Sandefjord",
    "zh_name": "桑纳菲",
    "country": "Norway",
    "aliases": [
      "桑纳菲",
      "Sandefjord",
      "桑讷菲尤尔",
      "桑纳菲尤尔"
    ]
  },
  {
    "id": 377,
    "name": "AIK Stockholm",
    "zh_name": "AIK索尔纳",
    "country": "Sweden",
    "aliases": [
      "AIK索尔纳",
      "AIK Stockholm",
      "索尔纳"
    ]
  },
  {
    "id": 449,
    "name": "Banfield",
    "zh_name": "班菲尔德",
    "country": "Argentina",
    "aliases": [
      "班菲尔德",
      "Banfield"
    ]
  },
  {
    "id": 1837,
    "name": "Wrexham",
    "zh_name": "雷克斯",
    "country": "Wales",
    "aliases": [
      "雷克斯",
      "Wrexham",
      "雷克瑟姆"
    ]
  },
  {
    "id": 2240,
    "name": "Mjallby AIF",
    "zh_name": "米亚尔比",
    "country": "Sweden",
    "aliases": [
      "米亚尔比",
      "Mjallby AIF"
    ]
  },
  {
    "id": 2936,
    "name": "Al Taawon",
    "zh_name": "布赖代合作",
    "country": "Saudi-Arabia",
    "aliases": [
      "布赖代合作",
      "Al Taawon",
      "泰渥"
    ]
  },
  {
    "id": 2938,
    "name": "Al-Ittihad FC",
    "zh_name": "吉达联合",
    "country": "Saudi-Arabia",
    "aliases": [
      "吉达联合",
      "Al-Ittihad FC"
    ]
  },
  {
    "id": 2940,
    "name": "Al Shabab",
    "zh_name": "利雅得青年",
    "country": "Saudi-Arabia",
    "aliases": [
      "利雅得青年",
      "Al Shabab",
      "利雅得青年人",
      "阿尔沙巴布"
    ]
  },
  {
    "id": 10509,
    "name": "Al Kholood",
    "zh_name": "卡路特",
    "country": "Saudi-Arabia",
    "aliases": [
      "卡路特",
      "Al Kholood",
      "阿尔科鲁德",
      "永恒FC",
      "拉斯永恒"
    ]
  },
  {
    "id": 863,
    "name": "Juve Stabia",
    "zh_name": "尤维斯塔比亚",
    "country": "Italy",
    "aliases": [
      "尤维斯塔比亚",
      "Juve Stabia",
      "斯塔比亚"
    ]
  },
  {
    "id": 2280,
    "name": "Club Tijuana",
    "zh_name": "蒂华纳",
    "country": "Mexico",
    "aliases": [
      "蒂华纳",
      "Club Tijuana"
    ]
  },
  {
    "id": 2286,
    "name": "U.N.A.M. - Pumas",
    "zh_name": "普马斯",
    "country": "Mexico",
    "aliases": [
      "普马斯",
      "U.N.A.M. - Pumas"
    ]
  },
  {
    "id": 2288,
    "name": "Necaxa",
    "zh_name": "内卡萨",
    "country": "Mexico",
    "aliases": [
      "内卡萨",
      "Necaxa"
    ]
  },
  {
    "id": 2314,
    "name": "Atletico San Luis",
    "zh_name": "圣路易斯竞技",
    "country": "Mexico",
    "aliases": [
      "圣路易斯竞技",
      "Atletico San Luis"
    ]
  },
  {
    "id": 43,
    "name": "Cardiff",
    "zh_name": "卡迪夫城",
    "country": "Wales",
    "aliases": [
      "卡迪夫城",
      "Cardiff",
      "加的夫城"
    ]
  },
  {
    "id": 474,
    "name": "Sarmiento Junin",
    "zh_name": "萨米恩托",
    "country": "Argentina",
    "aliases": [
      "萨米恩托",
      "Sarmiento Junin"
    ]
  },
  {
    "id": 522,
    "name": "Palermo",
    "zh_name": "巴勒莫",
    "country": "Italy",
    "aliases": [
      "巴勒莫",
      "Palermo"
    ]
  },
  {
    "id": 746,
    "name": "Sunderland",
    "zh_name": "桑德兰",
    "country": "England",
    "aliases": [
      "桑德兰",
      "Sunderland"
    ]
  },
  {
    "id": 1335,
    "name": "Charlton",
    "zh_name": "查尔顿",
    "country": "England",
    "aliases": [
      "查尔顿",
      "Charlton"
    ]
  },
  {
    "id": 1343,
    "name": "Bradford",
    "zh_name": "布拉德福",
    "country": "England",
    "aliases": [
      "布拉德福",
      "Bradford",
      "布拉德福德城",
      "布拉德福德"
    ]
  },
  {
    "id": 1357,
    "name": "Plymouth",
    "zh_name": "普利茅斯",
    "country": "England",
    "aliases": [
      "普利茅斯",
      "Plymouth"
    ]
  },
  {
    "id": 1359,
    "name": "Luton",
    "zh_name": "卢顿",
    "country": "England",
    "aliases": [
      "卢顿",
      "Luton"
    ]
  },
  {
    "id": 3713,
    "name": "Baník Ostrava",
    "zh_name": "俄斯特拉发",
    "country": "Czech-Republic",
    "aliases": [
      "俄斯特拉发",
      "Baník Ostrava"
    ]
  },
  {
    "id": 10511,
    "name": "Al Riyadh",
    "zh_name": "利雅得",
    "country": "Saudi-Arabia",
    "aliases": [
      "利雅得",
      "Al Riyadh",
      "利雅得体育"
    ]
  },
  {
    "id": 21595,
    "name": "AVS",
    "zh_name": "阿维斯",
    "country": "Portugal",
    "aliases": [
      "阿维斯",
      "AVS",
      "阿维斯SAD",
      "A F S",
      "AFS"
    ]
  },
  {
    "id": 498,
    "name": "Sampdoria",
    "zh_name": "桑普多利亚",
    "country": "Italy",
    "aliases": [
      "桑普多利亚",
      "Sampdoria"
    ]
  },
  {
    "id": 544,
    "name": "Deportivo La Coruna",
    "zh_name": "拉科鲁尼亚",
    "country": "Spain",
    "aliases": [
      "拉科鲁尼亚",
      "Deportivo La Coruna",
      "拉科"
    ]
  },
  {
    "id": 713,
    "name": "Cordoba",
    "zh_name": "科尔多瓦",
    "country": "Spain",
    "aliases": [
      "科尔多瓦",
      "Cordoba"
    ]
  },
  {
    "id": 722,
    "name": "Albacete",
    "zh_name": "阿尔巴塞特",
    "country": "Spain",
    "aliases": [
      "阿尔巴塞特",
      "Albacete",
      "阿尔瓦塞特"
    ]
  },
  {
    "id": 2250,
    "name": "Sigma Olomouc",
    "zh_name": "奥洛穆茨",
    "country": "Czech-Republic",
    "aliases": [
      "奥洛穆茨",
      "Sigma Olomouc"
    ]
  },
  {
    "id": 2278,
    "name": "Guadalajara Chivas",
    "zh_name": "瓜达拉哈拉",
    "country": "Mexico",
    "aliases": [
      "瓜达拉哈拉",
      "Guadalajara Chivas"
    ]
  },
  {
    "id": 2287,
    "name": "Club America",
    "zh_name": "墨西哥美洲",
    "country": "Mexico",
    "aliases": [
      "墨西哥美洲",
      "Club America",
      "美洲队"
    ]
  },
  {
    "id": 2290,
    "name": "Club Queretaro",
    "zh_name": "克雷塔罗",
    "country": "Mexico",
    "aliases": [
      "克雷塔罗",
      "Club Queretaro"
    ]
  },
  {
    "id": 4665,
    "name": "Racing Santander",
    "zh_name": "桑坦德",
    "country": "Spain",
    "aliases": [
      "桑坦德",
      "Racing Santander",
      "桑坦德竞技"
    ]
  },
  {
    "id": 5254,
    "name": "Castellón",
    "zh_name": "卡斯特利翁",
    "country": "Spain",
    "aliases": [
      "卡斯特利翁",
      "Castellón"
    ]
  },
  {
    "id": 9580,
    "name": "Burgos",
    "zh_name": "布尔戈斯",
    "country": "Spain",
    "aliases": [
      "布尔戈斯",
      "Burgos"
    ]
  },
  {
    "id": 44,
    "name": "Burnley",
    "zh_name": "伯恩利",
    "country": "England",
    "aliases": [
      "伯恩利",
      "Burnley"
    ]
  },
  {
    "id": 87,
    "name": "Amiens",
    "zh_name": "亚眠",
    "country": "France",
    "aliases": [
      "亚眠",
      "Amiens"
    ]
  },
  {
    "id": 158,
    "name": "Fortuna Düsseldorf",
    "zh_name": "杜塞多夫",
    "country": "Germany",
    "aliases": [
      "杜塞多夫",
      "Fortuna Düsseldorf",
      "杜塞尔多夫"
    ]
  },
  {
    "id": 203,
    "name": "NAC Breda",
    "zh_name": "布雷达",
    "country": "Netherlands",
    "aliases": [
      "布雷达",
      "NAC Breda"
    ]
  },
  {
    "id": 206,
    "name": "Heracles",
    "zh_name": "赫拉克勒",
    "country": "Netherlands",
    "aliases": [
      "赫拉克勒",
      "Heracles",
      "赫拉克勒斯"
    ]
  },
  {
    "id": 371,
    "name": "IF Brommapojkarna",
    "zh_name": "布罗姆马",
    "country": "Sweden",
    "aliases": [
      "布罗姆马",
      "IF Brommapojkarna",
      "布鲁马波卡纳",
      "布鲁马波"
    ]
  },
  {
    "id": 509,
    "name": "Cesena",
    "zh_name": "切塞纳",
    "country": "Italy",
    "aliases": [
      "切塞纳",
      "Cesena"
    ]
  },
  {
    "id": 575,
    "name": "AEK Athens FC",
    "zh_name": "AEK雅典",
    "country": "Greece",
    "aliases": [
      "AEK雅典",
      "AEK Athens FC",
      "雅典AEK"
    ]
  },
  {
    "id": 766,
    "name": "Halmstad",
    "zh_name": "哈尔姆斯塔德",
    "country": "Sweden",
    "aliases": [
      "哈尔姆斯塔德",
      "Halmstad",
      "哈尔姆斯"
    ]
  },
  {
    "id": 1012,
    "name": "FC Thun",
    "zh_name": "图恩",
    "country": "Switzerland",
    "aliases": [
      "图恩",
      "FC Thun"
    ]
  },
  {
    "id": 1305,
    "name": "Bastia",
    "zh_name": "巴斯蒂亚",
    "country": "France",
    "aliases": [
      "巴斯蒂亚",
      "Bastia"
    ]
  },
  {
    "id": 1313,
    "name": "Preußen Münster",
    "zh_name": "明斯特",
    "country": "Germany",
    "aliases": [
      "明斯特",
      "Preußen Münster",
      "普鲁士明斯特"
    ]
  },
  {
    "id": 1333,
    "name": "AFC Wimbledon",
    "zh_name": "AFC温布尔登",
    "country": "England",
    "aliases": [
      "AFC温布尔登",
      "AFC Wimbledon",
      "温布尔登"
    ]
  },
  {
    "id": 1354,
    "name": "Doncaster",
    "zh_name": "唐卡斯特",
    "country": "England",
    "aliases": [
      "唐卡斯特",
      "Doncaster"
    ]
  },
  {
    "id": 2928,
    "name": "Al Khaleej Saihat",
    "zh_name": "赛哈特海湾",
    "country": "Saudi-Arabia",
    "aliases": [
      "赛哈特海湾",
      "Al Khaleej Saihat",
      "卡利杰",
      "海湾FC"
    ]
  },
  {
    "id": 2931,
    "name": "Al-Fateh",
    "zh_name": "哈萨征服",
    "country": "Saudi-Arabia",
    "aliases": [
      "哈萨征服",
      "Al-Fateh",
      "法泰赫",
      "穆拜赖兹征服"
    ]
  },
  {
    "id": 2944,
    "name": "Al-Fayha",
    "zh_name": "费哈",
    "country": "Saudi-Arabia",
    "aliases": [
      "费哈",
      "Al-Fayha",
      "阿尔费哈",
      "迈季迈阿宽广"
    ]
  },
  {
    "id": 545,
    "name": "Eibar",
    "zh_name": "埃瓦尔",
    "country": "Spain",
    "aliases": [
      "埃瓦尔",
      "Eibar"
    ]
  },
  {
    "id": 553,
    "name": "Olympiakos Piraeus",
    "zh_name": "奥林匹亚",
    "country": "Greece",
    "aliases": [
      "奥林匹亚",
      "Olympiakos Piraeus",
      "奥林匹亚科斯"
    ]
  },
  {
    "id": 640,
    "name": "Mlada Boleslav",
    "zh_name": "姆拉达博莱斯拉夫",
    "country": "Czech-Republic",
    "aliases": [
      "姆拉达博莱斯拉夫",
      "Mlada Boleslav",
      "博莱斯拉夫"
    ]
  },
  {
    "id": 715,
    "name": "Granada CF",
    "zh_name": "格拉纳达",
    "country": "Spain",
    "aliases": [
      "格拉纳达",
      "Granada CF"
    ]
  },
  {
    "id": 1013,
    "name": "Grasshoppers",
    "zh_name": "草蜢",
    "country": "Switzerland",
    "aliases": [
      "草蜢",
      "Grasshoppers"
    ]
  },
  {
    "id": 1122,
    "name": "FK Jablonec",
    "zh_name": "亚布洛内茨",
    "country": "Czech-Republic",
    "aliases": [
      "亚布洛内茨",
      "FK Jablonec"
    ]
  },
  {
    "id": 1578,
    "name": "Sudtirol",
    "zh_name": "南蒂罗尔",
    "country": "Italy",
    "aliases": [
      "南蒂罗尔",
      "Sudtirol"
    ]
  },
  {
    "id": 2289,
    "name": "Leon",
    "zh_name": "莱昂",
    "country": "Mexico",
    "aliases": [
      "莱昂",
      "Leon"
    ]
  },
  {
    "id": 24608,
    "name": "Auckland",
    "zh_name": "奥克兰FC",
    "country": "New-Zealand",
    "aliases": [
      "奥克兰FC",
      "Auckland"
    ]
  },
  {
    "id": 783,
    "name": "FC Zurich",
    "zh_name": "苏黎世",
    "country": "Switzerland",
    "aliases": [
      "苏黎世",
      "FC Zurich"
    ]
  },
  {
    "id": 944,
    "name": "Melbourne Victory",
    "zh_name": "墨尔本胜利",
    "country": "Australia",
    "aliases": [
      "墨尔本胜利",
      "Melbourne Victory",
      "墨胜利"
    ]
  },
  {
    "id": 2283,
    "name": "Atlas",
    "zh_name": "阿特拉斯",
    "country": "Mexico",
    "aliases": [
      "阿特拉斯",
      "Atlas"
    ]
  },
  {
    "id": 630,
    "name": "FC Sion",
    "zh_name": "锡永",
    "country": "Switzerland",
    "aliases": [
      "锡永",
      "FC Sion"
    ]
  },
  {
    "id": 724,
    "name": "Cadiz",
    "zh_name": "加的斯",
    "country": "Spain",
    "aliases": [
      "加的斯",
      "Cadiz"
    ]
  },
  {
    "id": 943,
    "name": "Sydney",
    "zh_name": "悉尼FC",
    "country": "Australia",
    "aliases": [
      "悉尼FC",
      "Sydney"
    ]
  },
  {
    "id": 945,
    "name": "Melbourne City",
    "zh_name": "墨尔本城",
    "country": "Australia",
    "aliases": [
      "墨尔本城",
      "Melbourne City"
    ]
  },
  {
    "id": 1581,
    "name": "Carrarese",
    "zh_name": "卡拉拉",
    "country": "Italy",
    "aliases": [
      "卡拉拉",
      "Carrarese",
      "卡拉雷塞"
    ]
  },
  {
    "id": 1693,
    "name": "Mantova",
    "zh_name": "曼托瓦",
    "country": "Italy",
    "aliases": [
      "曼托瓦",
      "Mantova"
    ]
  },
  {
    "id": 63,
    "name": "Leeds",
    "zh_name": "利兹联",
    "country": "England",
    "aliases": [
      "利兹联",
      "Leeds"
    ]
  },
  {
    "id": 134,
    "name": "Atletico Paranaense",
    "zh_name": "巴拉纳竞技",
    "country": "Brazil",
    "aliases": [
      "巴拉纳竞技",
      "Atletico Paranaense",
      "巴竞技",
      "AtleticoParanaense"
    ]
  },
  {
    "id": 463,
    "name": "Aldosivi",
    "zh_name": "阿尔多希维",
    "country": "Argentina",
    "aliases": [
      "阿尔多希维",
      "Aldosivi",
      "阿尔多西维",
      "阿尔多斯维"
    ]
  },
  {
    "id": 899,
    "name": "Modena",
    "zh_name": "摩德纳",
    "country": "Italy",
    "aliases": [
      "摩德纳",
      "Modena"
    ]
  },
  {
    "id": 948,
    "name": "Adelaide United",
    "zh_name": "阿德莱德",
    "country": "Australia",
    "aliases": [
      "阿德莱德",
      "Adelaide United",
      "阿德莱德联",
      "阿德莱赫"
    ]
  },
  {
    "id": 644,
    "name": "FC Luzern",
    "zh_name": "卢塞恩",
    "country": "Switzerland",
    "aliases": [
      "卢塞恩",
      "FC Luzern",
      "琉森"
    ]
  },
  {
    "id": 731,
    "name": "Sporting Gijon",
    "zh_name": "希洪体育",
    "country": "Spain",
    "aliases": [
      "希洪体育",
      "Sporting Gijon",
      "希洪竞技"
    ]
  },
  {
    "id": 2285,
    "name": "Santos Laguna",
    "zh_name": "桑托斯拉古纳",
    "country": "Mexico",
    "aliases": [
      "桑托斯拉古纳",
      "Santos Laguna"
    ]
  },
  {
    "id": 2291,
    "name": "Puebla",
    "zh_name": "普埃布拉",
    "country": "Mexico",
    "aliases": [
      "普埃布拉",
      "Puebla"
    ]
  },
  {
    "id": 3723,
    "name": "Hradec Králové",
    "zh_name": "赫拉德茨克拉洛韦",
    "country": "Czech-Republic",
    "aliases": [
      "赫拉德茨克拉洛韦",
      "Hradec Králové",
      "赫拉德茨"
    ]
  },
  {
    "id": 512,
    "name": "Frosinone",
    "zh_name": "弗洛西诺",
    "country": "Italy",
    "aliases": [
      "弗洛西诺",
      "Frosinone",
      "弗罗西诺内"
    ]
  },
  {
    "id": 939,
    "name": "Western Sydney Wanderers",
    "zh_name": "西悉尼",
    "country": "Australia",
    "aliases": [
      "西悉尼",
      "Western Sydney Wanderers",
      "西悉尼流浪者"
    ]
  },
  {
    "id": 941,
    "name": "Central Coast Mariners",
    "zh_name": "中央海岸",
    "country": "Australia",
    "aliases": [
      "中央海岸",
      "Central Coast Mariners",
      "中央海岸水手"
    ]
  },
  {
    "id": 520,
    "name": "Cremonese",
    "zh_name": "克雷莫内塞",
    "country": "Italy",
    "aliases": [
      "克雷莫内塞",
      "Cremonese",
      "克雷莫纳"
    ]
  },
  {
    "id": 718,
    "name": "Oviedo",
    "zh_name": "奥维耶多",
    "country": "Spain",
    "aliases": [
      "奥维耶多",
      "Oviedo",
      "皇家奥维耶多"
    ]
  },
  {
    "id": 801,
    "name": "Pisa",
    "zh_name": "比萨",
    "country": "Italy",
    "aliases": [
      "比萨",
      "Pisa"
    ]
  },
  {
    "id": 940,
    "name": "Perth Glory",
    "zh_name": "珀斯",
    "country": "Australia",
    "aliases": [
      "珀斯",
      "Perth Glory",
      "珀斯光荣"
    ]
  },
  {
    "id": 942,
    "name": "Wellington Phoenix",
    "zh_name": "惠灵顿凤凰",
    "country": "New-Zealand",
    "aliases": [
      "惠灵顿凤凰",
      "Wellington Phoenix",
      "惠灵顿"
    ]
  },
  {
    "id": 946,
    "name": "Newcastle Jets",
    "zh_name": "纽卡斯尔喷气机",
    "country": "Australia",
    "aliases": [
      "纽卡斯尔喷气机",
      "Newcastle Jets",
      "纽喷气机"
    ]
  },
  {
    "id": 8157,
    "name": "FC Andorra",
    "zh_name": "FC安道尔",
    "country": "Spain",
    "aliases": [
      "FC安道尔",
      "FC Andorra",
      "安道尔FC"
    ]
  },
  {
    "id": 9585,
    "name": "Real Sociedad II",
    "zh_name": "皇家社会B队",
    "country": "Spain",
    "aliases": [
      "皇家社会B队",
      "Real Sociedad II"
    ]
  },
  {
    "id": 10139,
    "name": "AD Ceuta FC",
    "zh_name": "休达",
    "country": "Spain",
    "aliases": [
      "休达",
      "AD Ceuta FC"
    ]
  },
  {
    "id": 15550,
    "name": "Macarthur",
    "zh_name": "麦克阿瑟",
    "country": "Australia",
    "aliases": [
      "麦克阿瑟",
      "Macarthur",
      "麦克阿瑟FC"
    ]
  },
  {
    "id": 73,
    "name": "Rotherham",
    "zh_name": "罗瑟汉姆",
    "country": "England",
    "aliases": [
      "罗瑟汉姆",
      "Rotherham",
      "罗瑟汉姆联"
    ]
  },
  {
    "id": 326,
    "name": "Valerenga",
    "zh_name": "瓦勒伦加",
    "country": "Norway",
    "aliases": [
      "瓦勒伦加",
      "Valerenga"
    ]
  },
  {
    "id": 611,
    "name": "Fenerbahçe",
    "zh_name": "费内巴切",
    "country": "Turkey",
    "aliases": [
      "费内巴切",
      "Fenerbahçe"
    ]
  },
  {
    "id": 947,
    "name": "Brisbane Roar",
    "zh_name": "布里斯班",
    "country": "Australia",
    "aliases": [
      "布里斯班",
      "Brisbane Roar",
      "布里斯班狮吼"
    ]
  },
  {
    "id": 3719,
    "name": "Slovácko",
    "zh_name": "斯洛瓦茨科",
    "country": "Czech-Republic",
    "aliases": [
      "斯洛瓦茨科",
      "Slovácko",
      "斯洛瓦科"
    ]
  },
  {
    "id": 258,
    "name": "ST Johnstone",
    "zh_name": "圣约翰斯通",
    "country": "Scotland",
    "aliases": [
      "圣约翰斯通",
      "ST Johnstone"
    ]
  },
  {
    "id": 539,
    "name": "Levante",
    "zh_name": "莱万特",
    "country": "Spain",
    "aliases": [
      "莱万特",
      "Levante"
    ]
  },
  {
    "id": 797,
    "name": "Elche",
    "zh_name": "埃尔切",
    "country": "Spain",
    "aliases": [
      "埃尔切",
      "Elche"
    ]
  },
  {
    "id": 1389,
    "name": "Falkirk",
    "zh_name": "福尔柯克",
    "country": "Scotland",
    "aliases": [
      "福尔柯克",
      "Falkirk"
    ]
  },
  {
    "id": 283,
    "name": "Shimizu S-pulse",
    "zh_name": "清水心跳",
    "country": "Japan",
    "aliases": [
      "清水心跳",
      "Shimizu S-pulse",
      "清水鼓动"
    ]
  },
  {
    "id": 310,
    "name": "Fagiano Okayama",
    "zh_name": "冈山绿雉",
    "country": "Japan",
    "aliases": [
      "冈山绿雉",
      "Fagiano Okayama"
    ]
  },
  {
    "id": 488,
    "name": "Sassuolo",
    "zh_name": "萨索洛",
    "country": "Italy",
    "aliases": [
      "萨索洛",
      "Sassuolo"
    ]
  },
  {
    "id": 528,
    "name": "Avellino",
    "zh_name": "阿韦利诺",
    "country": "Italy",
    "aliases": [
      "阿韦利诺",
      "Avellino"
    ]
  },
  {
    "id": 195,
    "name": "Willem II",
    "zh_name": "威廉二世",
    "country": "Netherlands",
    "aliases": [
      "威廉二世",
      "Willem II"
    ]
  },
  {
    "id": 427,
    "name": "Telstar",
    "zh_name": "特尔斯达",
    "country": "Netherlands",
    "aliases": [
      "特尔斯达",
      "Telstar"
    ]
  },
  {
    "id": 527,
    "name": "Virtus Entella",
    "zh_name": "恩特拉",
    "country": "Italy",
    "aliases": [
      "恩特拉",
      "Virtus Entella"
    ]
  },
  {
    "id": 782,
    "name": "Slovan Liberec",
    "zh_name": "利贝雷茨",
    "country": "Czech-Republic",
    "aliases": [
      "利贝雷茨",
      "Slovan Liberec"
    ]
  },
  {
    "id": 870,
    "name": "Padova",
    "zh_name": "帕多瓦",
    "country": "Italy",
    "aliases": [
      "帕多瓦",
      "Padova"
    ]
  },
  {
    "id": 3720,
    "name": "Teplice",
    "zh_name": "特普利采",
    "country": "Czech-Republic",
    "aliases": [
      "特普利采",
      "Teplice"
    ]
  },
  {
    "id": 154,
    "name": "Fortaleza EC",
    "zh_name": "福塔莱萨",
    "country": "Brazil",
    "aliases": [
      "福塔莱萨",
      "Fortaleza EC",
      "福塔雷萨"
    ]
  },
  {
    "id": 321,
    "name": "Lillestrom",
    "zh_name": "利勒斯特",
    "country": "Norway",
    "aliases": [
      "利勒斯特",
      "Lillestrom",
      "利勒斯特伦",
      "利勒斯特罗姆"
    ]
  },
  {
    "id": 799,
    "name": "Mirandes",
    "zh_name": "米兰德斯",
    "country": "Spain",
    "aliases": [
      "米兰德斯",
      "Mirandes"
    ]
  },
  {
    "id": 1364,
    "name": "Exeter City",
    "zh_name": "埃克塞特",
    "country": "England",
    "aliases": [
      "埃克塞特",
      "Exeter City",
      "埃克塞特城"
    ]
  },
  {
    "id": 2956,
    "name": "Damac",
    "zh_name": "达马克",
    "country": "Saudi-Arabia",
    "aliases": [
      "达马克",
      "Damac"
    ]
  },
  {
    "id": 1337,
    "name": "Northampton",
    "zh_name": "北安普敦",
    "country": "England",
    "aliases": [
      "北安普敦",
      "Northampton",
      "北安普顿"
    ]
  },
  {
    "id": 603,
    "name": "Zlin",
    "zh_name": "兹林",
    "country": "Czech-Republic",
    "aliases": [
      "兹林",
      "Zlin"
    ]
  },
  {
    "id": 3724,
    "name": "Pardubice",
    "zh_name": "帕尔杜比采",
    "country": "Czech-Republic",
    "aliases": [
      "帕尔杜比采",
      "Pardubice"
    ]
  },
  {
    "id": 515,
    "name": "Spezia",
    "zh_name": "斯佩齐亚",
    "country": "Italy",
    "aliases": [
      "斯佩齐亚",
      "Spezia"
    ]
  },
  {
    "id": 571,
    "name": "Red Bull Salzburg",
    "zh_name": "萨尔茨堡红牛",
    "country": "Austria",
    "aliases": [
      "萨尔茨堡红牛",
      "Red Bull Salzburg",
      "FC萨尔茨堡",
      "萨尔茨堡"
    ]
  },
  {
    "id": 600,
    "name": "Zulte Waregem",
    "zh_name": "威尔郡",
    "country": "Belgium",
    "aliases": [
      "威尔郡",
      "Zulte Waregem",
      "聚尔特瓦雷赫姆"
    ]
  },
  {
    "id": 734,
    "name": "Kortrijk",
    "zh_name": "科特赖克",
    "country": "Belgium",
    "aliases": [
      "科特赖克",
      "Kortrijk"
    ]
  },
  {
    "id": 2945,
    "name": "Al-Hazm",
    "zh_name": "哈森姆",
    "country": "Saudi-Arabia",
    "aliases": [
      "哈森姆",
      "Al-Hazm",
      "拉斯决心"
    ]
  },
  {
    "id": 2977,
    "name": "Al Okhdood",
    "zh_name": "奈季兰沟渠",
    "country": "Saudi-Arabia",
    "aliases": [
      "奈季兰沟渠",
      "Al Okhdood",
      "阿科多"
    ]
  },
  {
    "id": 3714,
    "name": "Bohemians 1905",
    "zh_name": "波希米亚人1905",
    "country": "Czech-Republic",
    "aliases": [
      "波希米亚人1905",
      "Bohemians 1905",
      "波希米亚1905"
    ]
  },
  {
    "id": 4360,
    "name": "Celje",
    "zh_name": "采列",
    "country": "Slovenia",
    "aliases": [
      "采列",
      "Celje"
    ]
  },
  {
    "id": 5902,
    "name": "RAAL La Louvière",
    "zh_name": "拉卢维耶尔",
    "country": "Belgium",
    "aliases": [
      "拉卢维耶尔",
      "RAAL La Louvière",
      "拉路维尔",
      "拉罗维拉"
    ]
  },
  {
    "id": 10513,
    "name": "NEOM",
    "zh_name": "尼奥姆",
    "country": "Saudi-Arabia",
    "aliases": [
      "尼奥姆",
      "NEOM",
      "新未来SC"
    ]
  },
  {
    "id": 196,
    "name": "Excelsior",
    "zh_name": "SBV精英",
    "country": "Netherlands",
    "aliases": [
      "SBV精英",
      "Excelsior",
      "精英",
      "鹿特丹精英"
    ]
  },
  {
    "id": 1299,
    "name": "Boulogne",
    "zh_name": "布洛涅",
    "country": "France",
    "aliases": [
      "布洛涅",
      "Boulogne"
    ]
  },
  {
    "id": 183,
    "name": "Dynamo Dresden",
    "zh_name": "德累斯顿",
    "country": "Germany",
    "aliases": [
      "德累斯顿",
      "Dynamo Dresden",
      "德累斯顿迪纳摩"
    ]
  },
  {
    "id": 188,
    "name": "Arminia Bielefeld",
    "zh_name": "比勒菲尔德",
    "country": "Germany",
    "aliases": [
      "比勒菲尔德",
      "Arminia Bielefeld",
      "比勒费",
      "比勒费尔德"
    ]
  },
  {
    "id": 651,
    "name": "Ferencvarosi TC",
    "zh_name": "费伦茨瓦罗斯",
    "country": "Hungary",
    "aliases": [
      "费伦茨瓦罗斯",
      "Ferencvarosi TC",
      "费伦茨"
    ]
  },
  {
    "id": 4724,
    "name": "Alverca",
    "zh_name": "阿尔维卡",
    "country": "Portugal",
    "aliases": [
      "阿尔维卡",
      "Alverca",
      "阿尔韦卡",
      "阿维卡"
    ]
  },
  {
    "id": 102,
    "name": "Nancy",
    "zh_name": "南锡",
    "country": "France",
    "aliases": [
      "南锡",
      "Nancy"
    ]
  },
  {
    "id": 374,
    "name": "Kalmar FF",
    "zh_name": "卡尔马",
    "country": "Sweden",
    "aliases": [
      "卡尔马",
      "Kalmar FF"
    ]
  },
  {
    "id": 508,
    "name": "Bari",
    "zh_name": "巴里",
    "country": "Italy",
    "aliases": [
      "巴里",
      "Bari"
    ]
  },
  {
    "id": 645,
    "name": "Galatasaray",
    "zh_name": "加拉塔萨",
    "country": "Turkey",
    "aliases": [
      "加拉塔萨",
      "Galatasaray",
      "加拉塔萨雷"
    ]
  },
  {
    "id": 726,
    "name": "Huesca",
    "zh_name": "韦斯卡",
    "country": "Spain",
    "aliases": [
      "韦斯卡",
      "Huesca"
    ]
  },
  {
    "id": 732,
    "name": "Zaragoza",
    "zh_name": "萨拉戈萨",
    "country": "Spain",
    "aliases": [
      "萨拉戈萨",
      "Zaragoza"
    ]
  },
  {
    "id": 949,
    "name": "Panetolikos",
    "zh_name": "帕纳多里科斯",
    "country": "Greece",
    "aliases": [
      "帕纳多里科斯",
      "Panetolikos"
    ]
  },
  {
    "id": 1298,
    "name": "Le Mans",
    "zh_name": "勒芒",
    "country": "France",
    "aliases": [
      "勒芒",
      "Le Mans"
    ]
  },
  {
    "id": 2172,
    "name": "Degerfors IF",
    "zh_name": "代格福什",
    "country": "Sweden",
    "aliases": [
      "代格福什",
      "Degerfors IF"
    ]
  },
  {
    "id": 2180,
    "name": "FC Winterthur",
    "zh_name": "温特图尔",
    "country": "Switzerland",
    "aliases": [
      "温特图尔",
      "FC Winterthur"
    ]
  },
  {
    "id": 12260,
    "name": "Atromitos",
    "zh_name": "阿特罗米托斯",
    "country": "Greece",
    "aliases": [
      "阿特罗米托斯",
      "Atromitos"
    ]
  },
  {
    "id": 14002,
    "name": "Mazatlán",
    "zh_name": "马萨特兰",
    "country": "Mexico",
    "aliases": [
      "马萨特兰",
      "Mazatlán"
    ]
  },
  {
    "id": 637,
    "name": "Sturm Graz",
    "zh_name": "格拉茨风暴",
    "country": "Austria",
    "aliases": [
      "格拉茨风暴",
      "Sturm Graz",
      "格风暴"
    ]
  },
  {
    "id": 880,
    "name": "Reggiana",
    "zh_name": "雷吉亚纳",
    "country": "Italy",
    "aliases": [
      "雷吉亚纳",
      "Reggiana"
    ]
  },
  {
    "id": 1124,
    "name": "OFI",
    "zh_name": "OFI克里特",
    "country": "Greece",
    "aliases": [
      "OFI克里特",
      "OFI",
      "克里特"
    ]
  },
  {
    "id": 1351,
    "name": "Port Vale",
    "zh_name": "维尔港",
    "country": "England",
    "aliases": [
      "维尔港",
      "Port Vale"
    ]
  },
  {
    "id": 549,
    "name": "Beşiktaş",
    "zh_name": "贝西克塔斯",
    "country": "Turkey",
    "aliases": [
      "贝西克塔斯",
      "Beşiktaş",
      "贝西克塔"
    ]
  },
  {
    "id": 781,
    "name": "Rapid Vienna",
    "zh_name": "维也纳快速",
    "country": "Austria",
    "aliases": [
      "维也纳快速",
      "Rapid Vienna",
      "维快速"
    ]
  },
  {
    "id": 336,
    "name": "Jagiellonia",
    "zh_name": "乔治罗尼亚",
    "country": "Poland",
    "aliases": [
      "乔治罗尼亚",
      "Jagiellonia",
      "雅盖隆尼亚",
      "比亚韦"
    ]
  },
  {
    "id": 397,
    "name": "FC Midtjylland",
    "zh_name": "中日德兰",
    "country": "Denmark",
    "aliases": [
      "中日德兰",
      "FC Midtjylland"
    ]
  },
  {
    "id": 2241,
    "name": "Vasteras SK FK",
    "zh_name": "瓦斯特拉斯",
    "country": "Sweden",
    "aliases": [
      "瓦斯特拉斯",
      "Vasteras SK FK",
      "韦斯特罗斯"
    ]
  },
  {
    "id": 3403,
    "name": "Pafos",
    "zh_name": "帕福斯",
    "country": "Cyprus",
    "aliases": [
      "帕福斯",
      "Pafos"
    ]
  },
  {
    "id": 3715,
    "name": "Dukla Praha",
    "zh_name": "杜克拉",
    "country": "Czech-Republic",
    "aliases": [
      "杜克拉",
      "Dukla Praha",
      "布拉格杜克拉"
    ]
  },
  {
    "id": 255,
    "name": "Livingston",
    "zh_name": "利文斯顿",
    "country": "Scotland",
    "aliases": [
      "利文斯顿",
      "Livingston"
    ]
  },
  {
    "id": 400,
    "name": "FC Copenhagen",
    "zh_name": "哥本哈根",
    "country": "Denmark",
    "aliases": [
      "哥本哈根",
      "FC Copenhagen",
      "哥本哈根FC"
    ]
  },
  {
    "id": 439,
    "name": "Godoy Cruz",
    "zh_name": "戈多伊克鲁斯",
    "country": "Argentina",
    "aliases": [
      "戈多伊克鲁斯",
      "Godoy Cruz"
    ]
  },
  {
    "id": 656,
    "name": "Slovan Bratislava",
    "zh_name": "布拉迪斯",
    "country": "Slovakia",
    "aliases": [
      "布拉迪斯",
      "Slovan Bratislava",
      "布拉迪斯拉发"
    ]
  },
  {
    "id": 725,
    "name": "Cultural Leonesa",
    "zh_name": "莱昂内萨",
    "country": "Spain",
    "aliases": [
      "莱昂内萨",
      "Cultural Leonesa",
      "莱昂文化体育"
    ]
  },
  {
    "id": 955,
    "name": "Asteras Tripolis",
    "zh_name": "特里波利斯之星",
    "country": "Greece",
    "aliases": [
      "特里波利斯之星",
      "Asteras Tripolis"
    ]
  },
  {
    "id": 3402,
    "name": "Omonia Nicosia",
    "zh_name": "奥莫尼亚",
    "country": "Cyprus",
    "aliases": [
      "奥莫尼亚",
      "Omonia Nicosia"
    ]
  },
  {
    "id": 263,
    "name": "Beerschot VA",
    "zh_name": "比尔肖特",
    "country": "Belgium",
    "aliases": [
      "比尔肖特",
      "Beerschot VA",
      "比斯查"
    ]
  },
  {
    "id": 902,
    "name": "Ross County",
    "zh_name": "罗斯郡",
    "country": "Scotland",
    "aliases": [
      "罗斯郡",
      "Ross County"
    ]
  },
  {
    "id": 957,
    "name": "Levadiakos",
    "zh_name": "莱瓦贾科斯",
    "country": "Greece",
    "aliases": [
      "莱瓦贾科斯",
      "Levadiakos"
    ]
  },
  {
    "id": 2745,
    "name": "Bucheon FC 1995",
    "zh_name": "富川FC",
    "country": "South-Korea",
    "aliases": [
      "富川FC",
      "Bucheon FC 1995",
      "富川1995",
      "富川FC 1995"
    ]
  },
  {
    "id": 5050,
    "name": "Kifisia",
    "zh_name": "基菲西亚",
    "country": "Greece",
    "aliases": [
      "基菲西亚",
      "Kifisia",
      "基菲萨"
    ]
  },
  {
    "id": 123,
    "name": "Sport Recife",
    "zh_name": "累西腓体育",
    "country": "Brazil",
    "aliases": [
      "累西腓体育",
      "Sport Recife"
    ]
  },
  {
    "id": 129,
    "name": "Ceara",
    "zh_name": "塞阿拉",
    "country": "Brazil",
    "aliases": [
      "塞阿拉",
      "Ceara"
    ]
  },
  {
    "id": 132,
    "name": "Chapecoense-sc",
    "zh_name": "沙佩科恩斯",
    "country": "Brazil",
    "aliases": [
      "沙佩科恩斯",
      "Chapecoense-sc",
      "沙佩科"
    ]
  },
  {
    "id": 147,
    "name": "Coritiba",
    "zh_name": "科里蒂巴",
    "country": "Brazil",
    "aliases": [
      "科里蒂巴",
      "Coritiba"
    ]
  },
  {
    "id": 152,
    "name": "Juventude",
    "zh_name": "尤文图德",
    "country": "Brazil",
    "aliases": [
      "尤文图德",
      "Juventude"
    ]
  },
  {
    "id": 286,
    "name": "Vegalta Sendai",
    "zh_name": "仙台七夕",
    "country": "Japan",
    "aliases": [
      "仙台七夕",
      "Vegalta Sendai",
      "仙台维加泰"
    ]
  },
  {
    "id": 298,
    "name": "Oita Trinita",
    "zh_name": "大分三神",
    "country": "Japan",
    "aliases": [
      "大分三神",
      "Oita Trinita"
    ]
  },
  {
    "id": 299,
    "name": "Tokushima Vortis",
    "zh_name": "德岛漩涡",
    "country": "Japan",
    "aliases": [
      "德岛漩涡",
      "Tokushima Vortis"
    ]
  },
  {
    "id": 308,
    "name": "Ventforet Kofu",
    "zh_name": "甲府风林",
    "country": "Japan",
    "aliases": [
      "甲府风林",
      "Ventforet Kofu"
    ]
  },
  {
    "id": 312,
    "name": "Montedio Yamagata",
    "zh_name": "山形山神",
    "country": "Japan",
    "aliases": [
      "山形山神",
      "Montedio Yamagata"
    ]
  },
  {
    "id": 313,
    "name": "Omiya Ardija",
    "zh_name": "大宫松鼠RB",
    "country": "Japan",
    "aliases": [
      "大宫松鼠RB",
      "Omiya Ardija",
      "RB大宫松鼠",
      "大宫松鼠"
    ]
  },
  {
    "id": 417,
    "name": "Waalwijk",
    "zh_name": "瓦尔韦克",
    "country": "Netherlands",
    "aliases": [
      "瓦尔韦克",
      "Waalwijk"
    ]
  },
  {
    "id": 419,
    "name": "Almere City FC",
    "zh_name": "阿尔梅勒",
    "country": "Netherlands",
    "aliases": [
      "阿尔梅勒",
      "Almere City FC",
      "阿尔梅勒城"
    ]
  },
  {
    "id": 525,
    "name": "Pescara",
    "zh_name": "佩斯卡拉",
    "country": "Italy",
    "aliases": [
      "佩斯卡拉",
      "Pescara"
    ]
  },
  {
    "id": 556,
    "name": "Qarabag",
    "zh_name": "卡拉巴赫",
    "country": "Azerbaijan",
    "aliases": [
      "卡拉巴赫",
      "Qarabag"
    ]
  },
  {
    "id": 559,
    "name": "FCSB",
    "zh_name": "布加勒斯特星",
    "country": "Romania",
    "aliases": [
      "布加勒斯特星",
      "FCSB",
      "布星"
    ]
  },
  {
    "id": 598,
    "name": "FK Crvena Zvezda",
    "zh_name": "贝尔格莱德红星",
    "country": "Serbia",
    "aliases": [
      "贝尔格莱德红星",
      "FK Crvena Zvezda",
      "贝红星"
    ]
  },
  {
    "id": 1198,
    "name": "Remo",
    "zh_name": "雷莫",
    "country": "Brazil",
    "aliases": [
      "雷莫",
      "Remo",
      "里莫"
    ]
  },
  {
    "id": 2110,
    "name": "Volos NFC",
    "zh_name": "沃洛斯",
    "country": "Greece",
    "aliases": [
      "沃洛斯",
      "Volos NFC"
    ]
  },
  {
    "id": 4315,
    "name": "Blaublitz Akita",
    "zh_name": "秋田蓝色闪电",
    "country": "Japan",
    "aliases": [
      "秋田蓝色闪电",
      "Blaublitz Akita",
      "秋田蓝闪电",
      "秋田闪电"
    ]
  },
  {
    "id": 4317,
    "name": "Fujieda MYFC",
    "zh_name": "藤枝MYFC",
    "country": "Japan",
    "aliases": [
      "藤枝MYFC",
      "Fujieda MYFC"
    ]
  }
];

function clean(str) {
  return String(str || "").replace(/[\s\-_'·.]+/g, "").toLowerCase();
}

function normalizeTeam(query) {
  if (!query) return null;
  const k = clean(query);
  for (const t of TEAMS_DATA) {
    if (clean(t.name) === k || clean(t.zh_name) === k) return t;
    if (t.aliases.some(a => clean(a) === k)) return t;
  }
  for (const t of TEAMS_DATA) {
    if (clean(t.name).includes(k) || clean(t.zh_name).includes(k)) return t;
    if (t.aliases.some(a => clean(a).includes(k) || k.includes(clean(a)))) return t;
  }
  return null;
}

function searchTeams(query, limit = 5) {
  if (!query) return [];
  const k = clean(query);
  const results = [];
  for (const t of TEAMS_DATA) {
    if (
      clean(t.name).includes(k) ||
      clean(t.zh_name).includes(k) ||
      t.aliases.some(a => clean(a).includes(k) || k.includes(clean(a)))
    ) {
      results.push(t);
      if (results.length >= limit) break;
    }
  }
  return results;
}

function normalizeLeague(query) {
  if (!query) return null;
  const k = clean(query);
  for (const l of LEAGUES_DATA) {
    if (clean(l.name) === k || clean(l.zh_name) === k) return l;
    if (l.aliases.some(a => clean(a) === k)) return l;
  }
  for (const l of LEAGUES_DATA) {
    if (clean(l.name).includes(k) || clean(l.zh_name).includes(k)) return l;
    if (l.aliases.some(a => clean(a).includes(k) || k.includes(clean(a)))) return l;
  }
  return null;
}

module.exports = {
  TEAMS_DATA,
  LEAGUES_DATA,
  normalizeTeam,
  searchTeams,
  normalizeLeague
};
