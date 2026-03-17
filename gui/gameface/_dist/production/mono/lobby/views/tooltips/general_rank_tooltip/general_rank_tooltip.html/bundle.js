import { y as s, j as i, w as o } from '../../../../chunks/vendor.js';
import { i as e, aC as a, q as n, n as r, aA as t } from '../../../../chunks/lib.js';
import { T as d } from '../../../../chunks/tooltip_decorator.js';
import { g as c, a as l } from '../../../../chunks/get_rank_name.js';
import { t as m } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ import '../../../../chunks/enums.js';
const [j, h] = e()(({ observableModel: s }) => ({ root: s.object() }), a),
    g = s(() => {
        const { model: s } = h(),
            { divisions: e, rank: a, from: t, to: d } = s.root.get();
        return i.jsxs('div', {
            className: m.base,
            children: [
                i.jsx('div', { className: m.heading, children: c(a) }),
                i.jsx('div', {
                    className: o(m.subHeading, m.subHeading__topIndent),
                    children: i.jsx(n, {
                        text: R.strings.comp7_ext.generalRankTooltip.subheading(),
                        binding: { divisions: i.jsx('div', { className: m.highlight, children: e }) },
                    }),
                }),
                i.jsx('div', { className: m.divider }),
                i.jsx('div', {
                    className: m.description,
                    children: i.jsx(r, {
                        text: l(R.strings.comp7_ext.generalRankTooltip.body, a),
                        binding: { fromScore: t, toScore: d },
                    }),
                }),
            ],
        });
    });
t(i.jsx(j, { children: i.jsx(d, { children: i.jsx(g, {}) }) }));
