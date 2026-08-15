import { w as s, j as e } from '../../../../chunks/vendor.js';
import { i as a, n as i, F as o, b as c, am as r } from '../../../../chunks/lib.js';
/* empty css                       */ const [d, t] = a('keyTooltipProvider')(
        ({ observableModel: s }) => ({ root: s.object() }),
        i,
    ),
    l = 'App_cc1cb8fe',
    n = 'App_header_a89846e6',
    p = 'App_title_ff1c1a16',
    m = 'App_content_7d916847',
    j = 'App_image_cbc978a1',
    h = 'App_icon_a4374901',
    _ = 'App_description_ed6db7fb',
    x = s(function () {
        const { model: s } = t(),
            { keyName: a } = s.root.get();
        return e.jsxs('div', {
            className: l,
            children: [
                e.jsx('div', { className: n, children: e.jsx('div', { className: p, children: a }) }),
                e.jsxs('div', {
                    className: m,
                    children: [
                        e.jsx('div', { className: j }),
                        e.jsx(o, {
                            path: 'journey_marathon.keyTooltip.description',
                            params: { icon: e.jsx('div', { className: h }), color: '#ede6d9' },
                            className: _,
                            split: !0,
                        }),
                    ],
                }),
            ],
        });
    });
c(e.jsx(d, { children: e.jsx(r, { children: e.jsx(r.Decorator, { children: e.jsx(x, {}) }) }) }), {
    withMedia: !1,
    immediateLayout: !1,
});
