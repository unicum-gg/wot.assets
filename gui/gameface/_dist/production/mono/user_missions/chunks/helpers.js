import { b as e, at as t } from './lib.js';
import './vendor.js';
const s = e.resolve('strings'),
    o = e.resolve('images'),
    i = (e) =>
        t(
            e,
            (e) => ({
                id: e,
                textPath: `weekly_quests.condition.special.c_${e}`,
                iconPath: `userMissions.weekly.specialCond.c_${e}`,
            }),
            (e) => void 0 !== s.read(e.textPath) && o.has(e.iconPath),
        ),
    a = (e, t) => {
        const o = s.readOrEmpty(`weekly_quests.condition.common.c_${e}`),
            i = s.readOrEmpty('weekly_quests.specialCondition.container'),
            a = s.readOrEmpty('weekly_quests.specialCondition.separator'),
            r = t.map((e) => s.readOrEmpty(e.textPath)).join(a);
        return `${o}${r ? i.replace('{{specialConditions}}', r) : ''}`;
    };
export { a as g, i as t };
