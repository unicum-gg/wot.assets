import { x as s, j as e, w as t } from '../../../../chunks/vendor.js';
import { i as a, n as i, F as o, cm as r, cn as d, r as c } from '../../../../chunks/lib.js';
import { t as n, T as l } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const [m, j] = a()(({ observableModel: s }) => ({ root: s.object() }), i),
    x = 'App_formattedText_5a12c957',
    p = s(() => {
        const { model: s } = j(),
            { leaderboardUpdateTimestamp: a, description: i } = s.root.get();
        return e.jsxs('div', {
            className: n.base,
            children: [
                e.jsx(o, {
                    text: R.strings.comp7_ext.lastUpdateNote.tooltip.info(),
                    binding: {
                        date: e.jsx('span', {
                            className: n.highlight,
                            children: e.jsx(r, { datetime: a, format: d.ShortTime }),
                        }),
                    },
                    classMix: t(n.subHeading, x),
                }),
                e.jsx('div', { className: n.divider }),
                e.jsx('div', { className: n.description, children: e.jsx(o, { text: i }) }),
            ],
        });
    });
c(e.jsx(m, { children: e.jsx(l, { children: e.jsx(p, {}) }) }));
