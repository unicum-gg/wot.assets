import { y as s, j as t, w as a } from '../../../../chunks/vendor.js';
import { i as e, aC as o, q as i, D as r, s as d, aA as c } from '../../../../chunks/lib.js';
import { T as l } from '../../../../chunks/tooltip_decorator.js';
import { t as m } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const [n, j] = e()(({ observableModel: s }) => ({ root: s.object() }), o),
    p = 'App_formattedText_5a12c957',
    x = s(() => {
        const { model: s } = j(),
            { leaderboardUpdateTimestamp: e, description: o } = s.root.get();
        return t.jsxs('div', {
            className: m.base,
            children: [
                t.jsx(i, {
                    text: R.strings.comp7_ext.lastUpdateNote.tooltip.info(),
                    binding: {
                        date: t.jsx('span', {
                            className: m.highlight,
                            children: t.jsx(r, { datetime: e, format: d.ShortTime }),
                        }),
                    },
                    classMix: a(m.subHeading, p),
                }),
                t.jsx('div', { className: m.divider }),
                t.jsx('div', { className: m.description, children: t.jsx(i, { text: o }) }),
            ],
        });
    });
c(t.jsx(n, { children: t.jsx(l, { children: t.jsx(x, {}) }) }));
