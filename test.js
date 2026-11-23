const assert = require('assert');
const { TEAMS_DATA, LEAGUES_DATA, normalizeTeam, searchTeams, normalizeLeague } = require('./src/index.js');

assert(LEAGUES_DATA.length >= 25, 'LEAGUES_DATA count too small');
assert(TEAMS_DATA.length >= 350, 'TEAMS_DATA count too small');

const mu = normalizeTeam('曼联');
assert(mu && mu.id === 33, `Expected Manchester United (33), got ${JSON.stringify(mu)}`);

const rm = normalizeTeam('Real Madrid');
assert(rm && rm.id === 541, `Expected Real Madrid (541), got ${JSON.stringify(rm)}`);

const epl = normalizeLeague('英超');
assert(epl && epl.id === 39, `Expected Premier League (39), got ${JSON.stringify(epl)}`);

const searchRes = searchTeams('马德里', 5);
assert(Array.isArray(searchRes) && searchRes.length >= 1, 'searchTeams failed');

console.log(`Node test OK: ${LEAGUES_DATA.length} leagues, ${TEAMS_DATA.length} teams verified.`);
