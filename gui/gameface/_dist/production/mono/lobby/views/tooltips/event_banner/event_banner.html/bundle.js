import { m as e, j as s } from '../../../../chunks/vendor.js';
import { i as t, n as r, a2 as a, F as o, T as n, j as c } from '../../../../chunks/lib.js';
import { B as i } from '../../../../chunks/background.js';
import { g as m } from '../../../../chunks/resources.js';
const [p, d] = t()(({ observableModel: e }) => ({ root: e.object() }), r),
    l = 'App_1fbf2405',
    j = 'App_background_c63be452',
    x = 'App_header_58edbea5',
    b = 'App_description_b4fd8560',
    u = 'App_timerInfo_7dfe4aee',
    f = e(function () {
        const { model: e } = d(),
            { timeLeft: t, bundleType: r } = e.root.get(),
            { getExtImage: c, getText: p } = m(r);
        return s.jsx(a, {
            children: s.jsx(a.Decorator, {
                children: s.jsxs('div', {
                    className: l,
                    children: [
                        s.jsx(i, { image: c('tooltips.entry.background'), className: j }),
                        s.jsx(o, { className: x, text: p('bundle.name') }),
                        s.jsx(o, { className: b, text: p('tooltips.entry.description') }),
                        s.jsx(o, {
                            className: u,
                            text: p('tooltips.entry.timer'),
                            params: { timer: s.jsx(n, { start: t }) },
                        }),
                    ],
                }),
            }),
        });
    });
c(s.jsx(p, { children: s.jsx(f, {}) })).then(r);
