import './vendor.js';
import { p as t } from './lib.js';
const s = { personal: 'personal', teamsStatistics: 'teamsStatistics', financialReport: 'financialReport' },
    a = Object.values(s),
    e = {
        [s.personal]: '/postBattleResults/overview',
        [s.teamsStatistics]: '/postBattleResults/teamScore',
        [s.financialReport]: '/postBattleResults/financialReport',
    };
function n(s) {
    const n = a.find((t) => e[t] === s);
    return (t(void 0 !== n, `The post battle screen is not found by path ${s}`), n);
}
const o = ['markOfMastery', 'right', 'marksOnGun'],
    i = 'win';
export { i as W, s as a, n as f, e as r, o as s };
