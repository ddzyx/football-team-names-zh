/**
 * football-team-names-zh (NPM Edition)
 * Fast, zero-dependency Chinese & English normalization and alias matching for global football clubs and leagues.
 * 
 * Data Source: QiuXiaoCe (https://www.qiuxiaoce.com)
 */

const TEAMS_DATA = [
  { id: 33, name: "Manchester United", zh_name: "曼彻斯特联", country: "England", aliases: ["曼联", "曼彻斯特联", "Manchester United", "Man Utd"] },
  { id: 34, name: "Newcastle", zh_name: "纽卡斯尔联", country: "England", aliases: ["纽卡斯尔", "纽卡斯尔联", "Newcastle", "喜鹊"] },
  { id: 40, name: "Liverpool", zh_name: "利物浦", country: "England", aliases: ["利物浦", "Liverpool", "红军"] },
  { id: 42, name: "Arsenal", zh_name: "阿森纳", country: "England", aliases: ["阿森纳", "Arsenal", "枪手"] },
  { id: 47, name: "Tottenham", zh_name: "托特纳姆热刺", country: "England", aliases: ["热刺", "托特纳姆热刺", "Tottenham Hotspur", "Tottenham"] },
  { id: 49, name: "Chelsea", zh_name: "切尔西", country: "England", aliases: ["切尔西", "Chelsea", "蓝军"] },
  { id: 50, name: "Manchester City", zh_name: "曼彻斯特城", country: "England", aliases: ["曼城", "曼彻斯特城", "Manchester City", "Man City", "蓝月亮"] },
  { id: 48, name: "West Ham", zh_name: "西汉姆联", country: "England", aliases: ["西汉姆", "西汉姆联", "West Ham United", "West Ham", "铁锤帮"] },
  { id: 51, name: "Brighton", zh_name: "布莱顿", country: "England", aliases: ["布莱顿", "Brighton", "海鸥"] },
  { id: 55, name: "Brentford", zh_name: "布伦特福德", country: "England", aliases: ["布伦特福德", "Brentford", "小蜜蜂"] },
  { id: 66, name: "Aston Villa", zh_name: "阿斯顿维拉", country: "England", aliases: ["维拉", "阿斯顿维拉", "Aston Villa"] },
  { id: 45, name: "Everton", zh_name: "埃弗顿", country: "England", aliases: ["埃弗顿", "Everton", "太妃糖"] },
  { id: 39, name: "Wolves", zh_name: "狼队", country: "England", aliases: ["狼队", "Wolves"] },

  { id: 529, name: "Barcelona", zh_name: "巴塞罗那", country: "Spain", aliases: ["巴萨", "巴塞罗那", "Barcelona", "FC Barcelona"] },
  { id: 541, name: "Real Madrid", zh_name: "皇家马德里", country: "Spain", aliases: ["皇马", "皇家马德里", "Real Madrid", "银河战舰"] },
  { id: 530, name: "Atletico Madrid", zh_name: "马德里竞技", country: "Spain", aliases: ["马竞", "马德里竞技", "Atletico Madrid", "床单军团"] },
  { id: 532, name: "Valencia", zh_name: "瓦伦西亚", country: "Spain", aliases: ["瓦伦西亚", "Valencia"] },
  { id: 536, name: "Sevilla", zh_name: "塞维利亚", country: "Spain", aliases: ["塞维利亚", "Sevilla"] },
  { id: 543, name: "Real Betis", zh_name: "皇家贝蒂斯", country: "Spain", aliases: ["贝蒂斯", "皇家贝蒂斯", "Real Betis"] },
  { id: 533, name: "Villarreal", zh_name: "比利亚雷亚尔", country: "Spain", aliases: ["比利亚雷亚尔", "Villarreal", "黄潜"] },
  { id: 547, name: "Girona", zh_name: "赫罗纳", country: "Spain", aliases: ["赫罗纳", "Girona"] },

  { id: 489, name: "AC Milan", zh_name: "AC米兰", country: "Italy", aliases: ["米兰", "AC米兰", "AC Milan", "红黑军团"] },
  { id: 492, name: "Napoli", zh_name: "那不勒斯", country: "Italy", aliases: ["那不勒斯", "Napoli"] },
  { id: 496, name: "Juventus", zh_name: "尤文图斯", country: "Italy", aliases: ["尤文", "尤文图斯", "Juventus", "老妇人"] },
  { id: 497, name: "AS Roma", zh_name: "罗马", country: "Italy", aliases: ["罗马", "AS Roma", "红狼"] },
  { id: 505, name: "Inter", zh_name: "国际米兰", country: "Italy", aliases: ["国米", "国际米兰", "Inter Milan", "Inter", "蓝黑军团"] },
  { id: 487, name: "Lazio", zh_name: "拉齐奥", country: "Italy", aliases: ["拉齐奥", "Lazio"] },
  { id: 499, name: "Atalanta", zh_name: "亚特兰大", country: "Italy", aliases: ["亚特兰大", "Atalanta", "真蓝黑"] },
  { id: 502, name: "Fiorentina", zh_name: "佛罗伦萨", country: "Italy", aliases: ["佛罗伦萨", "Fiorentina", "紫百合"] },

  { id: 157, name: "Bayern München", zh_name: "拜仁慕尼黑", country: "Germany", aliases: ["拜仁", "拜仁慕尼黑", "Bayern Munich", "南部之星"] },
  { id: 165, name: "Borussia Dortmund", zh_name: "多特蒙德", country: "Germany", aliases: ["多特", "多特蒙德", "Borussia Dortmund", "大黄蜂"] },
  { id: 168, name: "Bayer Leverkusen", zh_name: "勒沃库森", country: "Germany", aliases: ["勒沃库森", "Bayer Leverkusen", "药厂"] },
  { id: 169, name: "Eintracht Frankfurt", zh_name: "法兰克福", country: "Germany", aliases: ["法兰克福", "Eintracht Frankfurt"] },
  { id: 173, name: "RB Leipzig", zh_name: "莱比锡红牛", country: "Germany", aliases: ["莱比锡", "莱比锡红牛", "RB Leipzig"] },

  { id: 85, name: "Paris Saint Germain", zh_name: "巴黎圣日耳曼", country: "France", aliases: ["巴黎", "大巴黎", "巴黎圣日耳曼", "PSG"] },
  { id: 81, name: "Marseille", zh_name: "马赛", country: "France", aliases: ["马赛", "Marseille"] },
  { id: 91, name: "Monaco", zh_name: "摩纳哥", country: "France", aliases: ["摩纳哥", "Monaco"] },
  { id: 79, name: "Lille", zh_name: "里尔", country: "France", aliases: ["里尔", "Lille"] }
];

const LEAGUES_DATA = [
  { id: 39, name: "Premier League", zh_name: "英格兰足球超级联赛", aliases: ["英超", "Premier League", "EPL"] },
  { id: 140, name: "La Liga", zh_name: "西班牙足球甲级联赛", aliases: ["西甲", "La Liga"] },
  { id: 135, name: "Serie A", zh_name: "意大利足球甲级联赛", aliases: ["意甲", "Serie A"] },
  { id: 78, name: "Bundesliga", zh_name: "德国足球甲级联赛", aliases: ["德甲", "Bundesliga"] },
  { id: 61, name: "Ligue 1", zh_name: "法国足球甲级联赛", aliases: ["法甲", "Ligue 1"] },
  { id: 2, name: "UEFA Champions League", zh_name: "欧洲冠军联赛", aliases: ["欧冠", "Champions League", "UCL"] },
  { id: 3, name: "UEFA Europa League", zh_name: "欧足联欧洲联赛", aliases: ["欧联", "Europa League", "UEL"] }
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

function normalizeLeague(query) {
  if (!query) return null;
  const k = clean(query);
  for (const l of LEAGUES_DATA) {
    if (clean(l.name) === k || clean(l.zh_name) === k) return l;
    if (l.aliases.some(a => clean(a) === k)) return l;
  }
  return null;
}

module.exports = {
  TEAMS_DATA,
  LEAGUES_DATA,
  normalizeTeam,
  normalizeLeague
};
