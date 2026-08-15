import { w as s, j as o } from '../../../../chunks/vendor.js';
import { i as a, n as e, F as t, b as r, am as c } from '../../../../chunks/lib.js';
import { D as n } from '../../../../chunks/done_icon.js';
/* empty css                       */ const [l, i] = a('loreTooltipProvider')(
        ({ observableModel: s }) => ({ root: s.object() }),
        e,
    ),
    p = 'App_122f631a',
    j = 'App_icon_63923b38',
    d = 'App_content_790cf5a6',
    m = 'App_title_60c49ff0',
    _ = 'App_description_c141fd3',
    h = 'App_status_95af3290',
    u = 'App_statusIcon_7518e11e',
    x = 'App_statusText_20a4890e',
    f = s(function () {
        const { model: s } = i(),
            { isUnlocked: a } = s.root.get();
        return o.jsxs('div', {
            className: p,
            children: [
                o.jsx('div', { className: j }),
                o.jsxs('div', {
                    className: d,
                    children: [
                        o.jsx(t, { path: 'journey_marathon.loreTooltip.title', className: m }),
                        o.jsx(t, { path: 'journey_marathon.loreTooltip.description', className: _ }),
                        a &&
                            o.jsxs('div', {
                                className: h,
                                children: [
                                    o.jsx(n, { className: u }),
                                    o.jsx(t, { path: 'journey_marathon.loreTooltip.unlocked', className: x }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    });
r(o.jsx(l, { children: o.jsx(c, { children: o.jsx(c.Decorator, { children: o.jsx(f, {}) }) }) }));
