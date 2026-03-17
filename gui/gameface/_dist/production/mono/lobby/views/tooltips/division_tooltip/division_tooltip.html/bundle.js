import { y as s, j as i, w as o } from '../../../../chunks/vendor.js';
import { i as e, aC as n, o as r, q as t, n as a, aA as d } from '../../../../chunks/lib.js';
import { T as c } from '../../../../chunks/tooltip_decorator.js';
import { g as m } from '../../../../chunks/get_division_name.js';
import { g as l } from '../../../../chunks/get_rank_name.js';
import { t as j } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ import '../../../../chunks/enums.js';
const [p, h] = e()(({ observableModel: s }) => ({ root: s.object() }), n),
    x = s(() => {
        const { model: s } = h(),
            { division: e, rank: n, from: d, to: c } = s.root.get();
        return i.jsxs('div', {
            className: j.base,
            children: [
                i.jsx('div', {
                    className: j.heading,
                    children: r(R.strings.comp7_ext.divisionTooltip.heading(), { divisionName: m(e) }),
                }),
                i.jsx('div', {
                    className: o(j.subHeading, j.subHeading__topIndent),
                    children: i.jsx(t, { text: l(n) }),
                }),
                i.jsx('div', { className: j.divider }),
                i.jsx('div', {
                    className: j.description,
                    children: i.jsx(a, {
                        text: R.strings.comp7_ext.divisionTooltip.description(),
                        binding: { fromScore: d, toScore: c },
                    }),
                }),
            ],
        });
    });
d(i.jsx(p, { children: i.jsx(c, { children: i.jsx(x, {}) }) }));
