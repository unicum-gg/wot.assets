import { s, j as e } from '../../../../chunks/vendor.js';
import { i as r, n as a, r as i, af as o, ag as c, k as l } from '../../../../chunks/lib.js';
/* empty css                       */ const [t, n] = r()(({ observableModel: s }) => ({ root: s.object() }), a),
    d = 'App_28e29989',
    p = 'App_header_5ad7c3ec',
    m = 'App_icon_45384927',
    j = 'App_progress_790cf5a6',
    h = 'App_title_2eabf3c8',
    _ = 'App_content_d43d99eb',
    x = i.resolve('strings'),
    v = s(function () {
        const { model: s } = n(),
            { progress: r } = s.root.get(),
            a = 100 === r;
        return e.jsx(o, {
            children: e.jsx(o.Decorator, {
                children: e.jsxs('div', {
                    className: d,
                    children: [
                        e.jsxs('div', {
                            className: p,
                            children: [
                                e.jsx('div', { className: m }),
                                e.jsxs('div', {
                                    className: j,
                                    children: [
                                        e.jsx('div', {
                                            className: h,
                                            children: x.readOrEmpty('pet_system.synergyTooltip.title'),
                                        }),
                                        e.jsx(c, { value: r, size: 'small', maxValue: 100 }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx('div', {
                            className: _,
                            children: x.readOrEmpty(
                                'pet_system.synergyTooltip.description.' + (a ? 'done' : 'inProgress'),
                            ),
                        }),
                    ],
                }),
            }),
        });
    });
l(e.jsx(t, { children: e.jsx(v, {}) }), { withMedia: !1 });
