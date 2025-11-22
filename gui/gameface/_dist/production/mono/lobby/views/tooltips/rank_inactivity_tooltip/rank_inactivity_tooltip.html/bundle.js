import { x as s, j as i, w as t } from '../../../../chunks/vendor.js';
import { i as n, n as o, F as e, r as a } from '../../../../chunks/lib.js';
import { t as r, T as c } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const [d, l] = n()(({ observableModel: s }) => ({ root: s.object() }), o),
    p = s(() => {
        const { model: s } = l(),
            { rankInactivityCount: n } = s.root.get();
        return i.jsxs('div', {
            className: r.base,
            children: [
                i.jsx('div', { className: r.heading, children: R.strings.comp7_ext.rankInactivityTooltip.heading() }),
                i.jsx('div', {
                    className: t(r.description, r.description__topIndent),
                    children: R.strings.comp7_ext.rankInactivityTooltip.description(),
                }),
                i.jsx('div', {
                    className: t(r.description, r.description__topIndent),
                    children: i.jsx(e, {
                        text: R.strings.comp7_ext.rankInactivityTooltip.timeLeft(),
                        binding: { count: i.jsx('span', { className: r.highlight, children: n }) },
                    }),
                }),
            ],
        });
    });
a(i.jsx(d, { children: i.jsx(c, { children: i.jsx(p, {}) }) }));
