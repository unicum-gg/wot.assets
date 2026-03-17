import { I as s, j as o, J as r } from '../../../../chunks/vendor.js';
import { i as t, n as i, cq as e, cW as n } from '../../../../chunks/lib.js';
import { T as c } from '../../../../chunks/tooltip_decorator.js';
import { g as a } from '../../../../chunks/get_rank_name.js';
import { R as m } from '../../../../chunks/enums.js';
import { t as d } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const [l, j] = t()(({ observableModel: s }) => ({ root: s.object() }), i),
    h = s(() => {
        const { model: s } = j(),
            { from: t } = s.root.get();
        return o.jsxs('div', {
            className: d.base,
            children: [
                o.jsx('div', { className: d.heading, children: a(m.Fifth) }),
                o.jsx('div', {
                    className: r(d.description, d.description__topIndent),
                    children: o.jsx(e, {
                        text: R.strings.comp7_ext.fifthRankTooltip.description(),
                        binding: { fromScore: t },
                    }),
                }),
            ],
        });
    });
n(o.jsx(l, { children: o.jsx(c, { children: o.jsx(h, {}) }) }));
