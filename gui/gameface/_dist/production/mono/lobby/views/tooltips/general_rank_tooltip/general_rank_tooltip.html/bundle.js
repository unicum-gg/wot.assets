import { I as s, j as o, J as i } from '../../../../chunks/vendor.js';
import { i as e, n, co as a, cq as r, cW as t } from '../../../../chunks/lib.js';
import { T as c } from '../../../../chunks/tooltip_decorator.js';
import { g as d, a as l } from '../../../../chunks/get_rank_name.js';
import { t as m } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ import '../../../../chunks/enums.js';
const [j, h] = e()(({ observableModel: s }) => ({ root: s.object() }), n),
    g = s(() => {
        const { model: s } = h(),
            { divisions: e, rank: n, from: t, to: c } = s.root.get();
        return o.jsxs('div', {
            className: m.base,
            children: [
                o.jsx('div', { className: m.heading, children: d(n) }),
                o.jsx('div', {
                    className: i(m.subHeading, m.subHeading__topIndent),
                    children: o.jsx(a, {
                        text: R.strings.comp7_ext.generalRankTooltip.subheading(),
                        binding: { divisions: o.jsx('div', { className: m.highlight, children: e }) },
                    }),
                }),
                o.jsx('div', { className: m.divider }),
                o.jsx('div', {
                    className: m.description,
                    children: o.jsx(r, {
                        text: l(R.strings.comp7_ext.generalRankTooltip.body, n),
                        binding: { fromScore: t, toScore: c },
                    }),
                }),
            ],
        });
    });
t(o.jsx(j, { children: o.jsx(c, { children: o.jsx(g, {}) }) }));
