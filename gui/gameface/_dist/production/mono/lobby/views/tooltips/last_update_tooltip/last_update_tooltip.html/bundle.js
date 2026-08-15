import { a1 as s, j as t, a3 as a } from '../../../../chunks/vendor.js';
import { i as e, n as o, cu as i, dh as r, di as d, d2 as c } from '../../../../chunks/lib.js';
import { T as l } from '../../../../chunks/tooltip_decorator.js';
import { t as n } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const [m, j] = e()(({ observableModel: s }) => ({ root: s.object() }), o),
    p = 'App_formattedText_5a12c957',
    h = s(() => {
        const { model: s } = j(),
            { leaderboardUpdateTimestamp: e, description: o } = s.root.get();
        return t.jsxs('div', {
            className: n.base,
            children: [
                t.jsx(i, {
                    text: R.strings.comp7_ext.lastUpdateNote.tooltip.info(),
                    binding: {
                        date: t.jsx('span', {
                            className: n.highlight,
                            children: t.jsx(r, { datetime: e, format: d.ShortTime }),
                        }),
                    },
                    classMix: a(n.subHeading, p),
                }),
                t.jsx('div', { className: n.divider }),
                t.jsx('div', { className: n.description, children: t.jsx(i, { text: o }) }),
            ],
        });
    });
c(t.jsx(m, { children: t.jsx(l, { children: t.jsx(h, {}) }) }));
