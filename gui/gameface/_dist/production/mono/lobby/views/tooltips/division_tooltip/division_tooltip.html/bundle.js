import { x as s, j as i, w as o } from '../../../../chunks/vendor.js';
import { i as e, n, cf as r, F as a, c8 as t, r as d } from '../../../../chunks/lib.js';
import { t as c, T as m } from '../../../../chunks/tooltips.module.js';
import { g as l } from '../../../../chunks/get_division_name.js';
import { b as j } from '../../../../chunks/get_rank_name.js';
/* empty css                        */ import '../../../../chunks/enums.js';
const [h, p] = e()(({ observableModel: s }) => ({ root: s.object() }), n),
    x = s(() => {
        const { model: s } = p(),
            { division: e, rank: n, from: d, to: m } = s.root.get();
        return i.jsxs('div', {
            className: c.base,
            children: [
                i.jsx('div', {
                    className: c.heading,
                    children: r(R.strings.comp7_ext.divisionTooltip.heading(), { divisionName: l(e) }),
                }),
                i.jsx('div', {
                    className: o(c.subHeading, c.subHeading__topIndent),
                    children: i.jsx(a, { text: j(n) }),
                }),
                i.jsx('div', { className: c.divider }),
                i.jsx('div', {
                    className: c.description,
                    children: i.jsx(t, {
                        text: R.strings.comp7_ext.divisionTooltip.description(),
                        binding: { fromScore: d, toScore: m },
                    }),
                }),
            ],
        });
    });
d(i.jsx(h, { children: i.jsx(m, { children: i.jsx(x, {}) }) }));
