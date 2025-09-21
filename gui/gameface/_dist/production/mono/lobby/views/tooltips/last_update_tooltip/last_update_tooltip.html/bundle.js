import { y as s, j as e, x as t } from '../../../../chunks/vendor.js';
import { i as a, n as i, F as o, cb as r, cc as d, r as c } from '../../../../chunks/lib.js';
import { t as l, T as n } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const [m, j] = a()(({ observableModel: s }) => ({ root: s.object() }), i),
    x = 'App_formattedText_5a12c957',
    p = s(() => {
        const { model: s } = j(),
            { leaderboardUpdateTimestamp: a, description: i } = s.root.get();
        return e.jsxs('div', {
            className: l.base,
            children: [
                e.jsx(o, {
                    text: R.strings.comp7_ext.lastUpdateNote.tooltip.info(),
                    binding: {
                        date: e.jsx('span', {
                            className: l.highlight,
                            children: e.jsx(r, { datetime: a, format: d.ShortTime }),
                        }),
                    },
                    classMix: t(l.subHeading, x),
                }),
                e.jsx('div', { className: l.divider }),
                e.jsx('div', { className: l.description, children: e.jsx(o, { text: i }) }),
            ],
        });
    });
c(e.jsx(m, { children: e.jsx(n, { children: e.jsx(p, {}) }) }));
