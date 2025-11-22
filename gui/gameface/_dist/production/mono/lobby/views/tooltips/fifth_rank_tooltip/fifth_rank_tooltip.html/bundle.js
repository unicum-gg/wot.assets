import { x as s, j as o, w as r } from '../../../../chunks/vendor.js';
import { i, n as e, c8 as n, r as t } from '../../../../chunks/lib.js';
import { t as a, T as c } from '../../../../chunks/tooltips.module.js';
import { b as m } from '../../../../chunks/get_rank_name.js';
import { R as d } from '../../../../chunks/enums.js';
/* empty css                        */ const [l, j] = i()(({ observableModel: s }) => ({ root: s.object() }), e),
    h = s(() => {
        const { model: s } = j(),
            { from: i } = s.root.get();
        return o.jsxs('div', {
            className: a.base,
            children: [
                o.jsx('div', { className: a.heading, children: m(d.Fifth) }),
                o.jsx('div', {
                    className: r(a.description, a.description__topIndent),
                    children: o.jsx(n, {
                        text: R.strings.comp7_ext.fifthRankTooltip.description(),
                        binding: { fromScore: i },
                    }),
                }),
            ],
        });
    });
t(o.jsx(l, { children: o.jsx(c, { children: o.jsx(h, {}) }) }));
