import { y as s, j as i, x as e } from '../../../../chunks/vendor.js';
import { i as o, n, F as a, b_ as r, r as t } from '../../../../chunks/lib.js';
import { t as d, T as c } from '../../../../chunks/tooltips.module.js';
import { g as l, a as m } from '../../../../chunks/get_rank_name.js';
/* empty css                        */ import '../../../../chunks/enums.js';
const [j, h] = o()(({ observableModel: s }) => ({ root: s.object() }), n),
    g = s(() => {
        const { model: s } = h(),
            { divisions: o, rank: n, from: t, to: c } = s.root.get();
        return i.jsxs('div', {
            className: d.base,
            children: [
                i.jsx('div', { className: d.heading, children: l(n) }),
                i.jsx('div', {
                    className: e(d.subHeading, d.subHeading__topIndent),
                    children: i.jsx(a, {
                        text: R.strings.comp7_ext.generalRankTooltip.subheading(),
                        binding: { divisions: i.jsx('div', { className: d.highlight, children: o }) },
                    }),
                }),
                i.jsx('div', { className: d.divider }),
                i.jsx('div', {
                    className: d.description,
                    children: i.jsx(r, {
                        text: m(R.strings.comp7_ext.generalRankTooltip.body, n),
                        binding: { fromScore: t, toScore: c },
                    }),
                }),
            ],
        });
    });
t(i.jsx(j, { children: i.jsx(c, { children: i.jsx(g, {}) }) }));
