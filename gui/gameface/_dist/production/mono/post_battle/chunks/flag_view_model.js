import './vendor.js';
import { x as t } from './lib.js';
const s = {
        overview: 'overview',
        teamsStatistics: 'teamScore',
        progression: 'missionProgress',
        financialReport: 'financialReport',
    },
    e = Object.values(s),
    o = {
        [s.overview]: '/postBattleResults/overview',
        [s.teamsStatistics]: '/postBattleResults/teamScore',
        [s.progression]: '/postBattleResults/missionProgress',
        [s.financialReport]: '/postBattleResults/financialReport',
    };
function r(s) {
    const r = e.find((t) => o[t] === s);
    return (t(void 0 !== r, `The post battle screen is not found by path ${s}`), r);
}
const a = ['markOfMastery', 'right', 'marksOnGun'];
function i() {
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
}
const n = 'win';
export { n as W, s as a, r as f, i as g, o as r, a as s };
