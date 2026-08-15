import { j as s, f as a, w as e } from '../../../../chunks/vendor.js';
import { ak as o, C as r, n as i, al as t, i as c, r as n, F as l, b as p, U as _ } from '../../../../chunks/lib.js';
/* empty css                       */ const d = 'Decorator_9599ed83',
    m = 'Decorator_base__popup_f4d4252a',
    j = 'Decorator_close_b5f02827',
    h = 'Decorator_lip_6d0ff487',
    b = 'Decorator_lip__top_87d1ef9',
    u = 'Decorator_lip__bottom_52680372';
function x({ isPopUp: e, className: c, children: n }) {
    return s.jsxs(o, {
        className: a(d, e && m, c),
        children: [
            n,
            e
                ? s.jsx(r, { size: t.small, onClose: i, className: j })
                : s.jsxs(s.Fragment, {
                      children: [s.jsx('div', { className: a(h, b) }), s.jsx('div', { className: a(h, u) })],
                  }),
        ],
    });
}
const [f, N] = c()(({ observableModel: s }) => ({ root: s.object() }), i),
    v = 'App_9215abe8',
    A = 'App_base__popup_b27e4cc5',
    y = 'App_header_4071501f',
    D = 'App_reward_921e6b38',
    g = 'App_rewardAmount_474cbb7',
    w = 'App_description_7a0a1fa0',
    k = n.resolve('intl'),
    U = e(function () {
        const { model: e } = N(),
            { amount: o, isPopUp: r } = e.root.get();
        return s.jsx(x, {
            isPopUp: r,
            children: s.jsxs('div', {
                className: a(v, r && A),
                children: [
                    s.jsxs('div', {
                        className: y,
                        children: [
                            s.jsx(l, { path: 'journey_marathon.longName' }),
                            s.jsx(l, { path: 'journey_marathon.notifications.daily_reward.subtitle' }),
                        ],
                    }),
                    s.jsx('div', {
                        className: D,
                        children: s.jsx('div', { className: g, children: k.formatNumber('integral', o) }),
                    }),
                    s.jsx(l, { path: 'journey_marathon.notifications.daily_reward.description', className: w }),
                ],
            }),
        });
    });
p(s.jsx(f, { children: s.jsx(_, { children: s.jsx(U, {}) }) }), { immediateLayout: !1 });
