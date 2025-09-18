import { j as s } from './vendor.js';
import { b as i, m as t, d as e, I as o } from './lib.js';
const a = 'SpecConditions_title_af03f2f',
    n = 'SpecConditions_specCondition_b0565ee6',
    c = 'SpecConditions_specConditionText_5455dba',
    d = i.resolve('strings');
function r(i) {
    return s.jsxs('div', {
        className: i.className,
        children: [
            s.jsx(e, { path: 'user_missions.tooltip.vehicle_restrictions', className: a }),
            t(i.specConditions, (i) =>
                s.jsxs(
                    'div',
                    {
                        className: n,
                        children: [
                            s.jsx(o, { width: 24, height: 24, path: i.iconPath }),
                            s.jsx(e, {
                                path: 'weekly_quests.specialCondition.tooltip',
                                params: { condition: d.read(i.textPath) },
                                className: c,
                            }),
                        ],
                    },
                    i.id,
                ),
            ),
        ],
    });
}
export { r as S };
