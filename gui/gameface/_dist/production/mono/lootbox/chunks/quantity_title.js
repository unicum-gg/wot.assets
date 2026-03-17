import { j as s, e as a } from './vendor.js';
import { al as e, am as c, _ as n, n as t, a as i } from './lib.js';
const o = 'AnimationCheckbox_9598d652',
    r = 'AnimationCheckbox_base__disabled_d45bad7',
    d = 'AnimationCheckbox_text_af0df6f3';
function l({ className: t, isActive: i, text: l, size: u = n.large, disable: m = !1, onClick: x }) {
    return s.jsx('div', {
        className: a(o, m && r, t),
        children: s.jsx(e, {
            isDisabled: m,
            size: u,
            isChecked: i,
            onClick: x,
            type: c.main,
            contentStyles: { paddingTop: u === n.extraLarge ? '4rem' : '0' },
            children: s.jsx('span', { className: d, children: l }),
        }),
    });
}
const u = 'Loader_a1c28e8a',
    m = 'Loader_icon_aa53996d',
    x = 'Loader_text_b342656c';
function _({ img: e, text: c, className: n }) {
    return s.jsxs('div', {
        className: a(u, n),
        children: [
            s.jsx('div', { className: m, style: { backgroundImage: `url(${e})` } }),
            s.jsx('div', { className: x, children: c }),
        ],
    });
}
const h = 'PurchaseButton_48021a00',
    b = 'PurchaseButton_wrapper_58d7fe80',
    j = 'PurchaseButton_image_5a2e0048',
    N = 'PurchaseButton_textBlock_4db46f09',
    f = 'PurchaseButton_text_6d4bbfc',
    g = 'PurchaseButton_icon_4fb4c378';
function k({ text: e, image: c, sounds: n, icon: i, onClick: o, className: r }) {
    return s.jsx('div', {
        className: a(h, r),
        onClick: () => {
            (t.click(), t.sound(n.purchaseClick), o());
        },
        children: s.jsxs('div', {
            className: b,
            onMouseEnter: () => {
                t.sound(n.purchaseHover);
            },
            children: [
                s.jsx('div', { className: j, style: { backgroundImage: `url(${c})` } }),
                s.jsxs('div', {
                    className: N,
                    children: [
                        s.jsx('div', { className: f, children: e }),
                        i && s.jsx('div', { className: g, style: { backgroundImage: `url(${i})` } }),
                    ],
                }),
            ],
        }),
    });
}
const p = 'QuantityTitle_daea9f96',
    v = 'QuantityTitle_count_271d2628';
function C({ text: e, boxesCount: c = 0, className: n }) {
    return s.jsx('div', {
        className: a(p, n),
        children:
            c > 0
                ? s.jsx(i, {
                      text: e,
                      params: { boxesCount: s.jsx('span', { className: v, children: c }) },
                      upgradeLegacy: !0,
                  })
                : e,
    });
}
export { l as A, _ as L, k as P, C as Q };
