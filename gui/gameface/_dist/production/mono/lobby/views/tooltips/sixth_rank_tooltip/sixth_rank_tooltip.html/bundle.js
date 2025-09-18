import { x as s, j as o, A as e } from '../../../../chunks/vendor.js';
import { i as t, n, b_ as i, r } from '../../../../chunks/lib.js';
import { t as a, T as c } from '../../../../chunks/tooltips.module.js';
import { g as m } from '../../../../chunks/get_rank_name.js';
import { R as d } from '../../../../chunks/enums.js';
/* empty css                        */ const [l, j] = t()(({ observableModel: s }) => ({ root: s.object() }), n),
    p = s(() => {
        const { model: s } = j(),
            { topPercentage: t } = s.root.get();
        return o.jsxs('div', {
            className: a.base,
            children: [
                o.jsx('div', { className: a.heading, children: m(d.Sixth) }),
                o.jsx('div', {
                    className: e(a.description, a.description__topIndent),
                    children: o.jsx(i, {
                        text: R.strings.comp7_ext.sixthRankTooltip.description(),
                        binding: { topPercentage: t },
                    }),
                }),
            ],
        });
    });
r(o.jsx(l, { children: o.jsx(c, { children: o.jsx(p, {}) }) }));
