import { a1 as s, j as t, a3 as i } from '../../../../chunks/vendor.js';
import { i as o, n, cx as a, d2 as e } from '../../../../chunks/lib.js';
import { T as r } from '../../../../chunks/tooltip_decorator.js';
import { R as c } from '../../../../chunks/consts.js';
import { t as p } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const [d, l] = o('RankInactivityTooltipModel')(
        ({ observableModel: s }) => ({ root: s.object() }),
        n,
    ),
    m = 'App_f0b59ee5',
    _ = 'App_daysLeft_bc8ac04b',
    j = 'App_timer_c376641d',
    x = 'App_timer__active_d318a2be',
    b = s(() => {
        const { model: s } = l(),
            { rankInactivityCount: o, rankInactivityPointsCount: n } = s.root.get();
        return t.jsxs('div', {
            className: i(p.base, m),
            children: [
                t.jsx('div', { className: i(j, o <= c && x) }),
                t.jsx('div', {
                    className: p.heading,
                    children: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.header.active(),
                }),
                t.jsx(a, {
                    text: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.description.active(n),
                    binding: { count: n },
                    classMix: i(p.description, p.description__topIndent),
                }),
                t.jsx(a, {
                    text: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.daysLeft(),
                    binding: { rankInactivityCount: o },
                    classMix: i(p.description, p.description__topIndent, _),
                }),
            ],
        });
    });
e(t.jsx(d, { children: t.jsx(r, { children: t.jsx(b, {}) }) }));
