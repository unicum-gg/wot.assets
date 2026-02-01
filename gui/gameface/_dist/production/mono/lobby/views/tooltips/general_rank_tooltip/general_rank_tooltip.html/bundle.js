import { I as s, j as i, J as o } from '../../../../chunks/vendor.js';
import { i as e, n, cd as a, cf as r, cP as t } from '../../../../chunks/lib.js';
import { T as c } from '../../../../chunks/tooltip_decorator.js';
import { g as d, a as l } from '../../../../chunks/get_rank_name.js';
import { t as m } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ import '../../../../chunks/enums.js';
const [j, h] = e()(({ observableModel: s }) => ({ root: s.object() }), n),
    g = s(() => {
        const { model: s } = h(),
            { divisions: e, rank: n, from: t, to: c } = s.root.get();
        return i.jsxs('div', {
            className: m.base,
            children: [
                i.jsx('div', { className: m.heading, children: d(n) }),
                i.jsx('div', {
                    className: o(m.subHeading, m.subHeading__topIndent),
                    children: i.jsx(a, {
                        text: R.strings.comp7_ext.generalRankTooltip.subheading(),
                        binding: { divisions: i.jsx('div', { className: m.highlight, children: e }) },
                    }),
                }),
                i.jsx('div', { className: m.divider }),
                i.jsx('div', {
                    className: m.description,
                    children: i.jsx(r, {
                        text: l(R.strings.comp7_ext.generalRankTooltip.body, n),
                        binding: { fromScore: t, toScore: c },
                    }),
                }),
            ],
        });
    });
t(i.jsx(j, { children: i.jsx(c, { children: i.jsx(g, {}) }) }));
