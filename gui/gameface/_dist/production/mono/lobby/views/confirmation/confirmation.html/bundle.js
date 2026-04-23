import { m as e, j as a, e as s, r as l } from '../../../chunks/vendor.js';
import {
    i as r,
    e as c,
    f as n,
    h as i,
    Y as t,
    r as o,
    Z as m,
    _ as d,
    $ as u,
    a0 as b,
    J as v,
    a1 as p,
    m as j,
    H as x,
    d as f,
    K as _,
    C as h,
    F as g,
    j as y,
    U as N,
    n as k,
} from '../../../chunks/lib.js';
import { g as A } from '../../../chunks/resources.js';
import { u as C } from '../../../chunks/usePreloadImages.js';
const [z, S] = r()(
        ({ observableModel: e }) => ({
            root: e.object(),
            price: e.object('price'),
            balance: e.arrayClone('balance'),
            ...e.primitives(['isWalletAvailable', 'bundleType']),
        }),
        ({ externalModel: e }) => ({
            confirm: e.createCallbackNoArgs('confirm'),
            cancel: e.createCallbackNoArgs('cancel'),
        }),
    ),
    V = 'ControlsBlock_27dfa27d',
    W = e(function ({ className: e = '' }) {
        const { model: l, controls: r } = S(),
            { getText: o } = A(l.bundleType.get()),
            m = c({ buttonSize: n.medium }, { medium: { buttonSize: n.large } });
        return a.jsxs('div', {
            className: s(V, e),
            children: [
                a.jsx(i, { size: m.buttonSize, onClick: r.confirm, children: o('confirmation.buttons.purchase') }),
                a.jsx(i, {
                    size: m.buttonSize,
                    theme: t.secondary,
                    onClick: r.cancel,
                    children: o('confirmation.buttons.cancel'),
                }),
            ],
        });
    }),
    E = 'Divider_7c8e14f6';
function T() {
    return a.jsx('div', { className: E });
}
const I = 'Currency_value_b1cf6531',
    M = 'Currency_value__unavailable_3a328d4',
    w = 'Currency_dash_2806b61e',
    F = 'Currency_formattedValue_b7cad7e0',
    O = 1e6,
    P = 1e5;
function $({ wgMoneyAvailable: e, value: r, type: c, classNames: n }) {
    const i = l.useRef(null),
        t = o.resolve('intl'),
        v = o.resolve('strings'),
        p = m(
            { displayValue: () => (r >= O ? { abbreviated: !0, value: d(r, P) / O } : { abbreviated: !1, value: r }) },
            {
                medium: {
                    displayValue: () =>
                        r >= 1e7 ? { abbreviated: !0, value: d(r, P) / O } : { abbreviated: !1, value: r },
                },
                large: {
                    displayValue: () =>
                        r >= 1e8 ? { abbreviated: !0, value: d(r, P) / O } : { value: r, abbreviated: !1 },
                },
            },
        );
    if (!1 === e)
        return a.jsxs('div', {
            className: s(I, M, n?.value),
            children: [
                a.jsx('div', { className: w, children: v.readOrEmpty('common.common.semi_dash') }),
                a.jsx('div', { className: w, children: v.readOrEmpty('common.common.semi_dash') }),
            ],
        });
    const j = p.displayValue();
    return a.jsx('div', {
        ref: i,
        className: s(I, n?.base),
        children: j.abbreviated
            ? a.jsx(u, {
                  path: 'menu.hangar_header.million',
                  params: { value: j.value },
                  brackets: { start: '%(', end: ')s' },
                  className: s(F, n?.formattedValue),
              })
            : t.formatNumber(c === b.gold ? 'gold' : 'integral', j.value),
    });
}
const B = 'Wallet_a31ff660',
    D = 'Wallet_currencyWrapper_d5b0eb25',
    H = 'Wallet_currencyIcon_f69fe579',
    J = e(function ({ className: e = '' }) {
        const { model: l } = S(),
            r = m({ size: v.extraSmall }, { large: { size: v.small }, extraLarge: { size: v.medium } }),
            c = p(r.size, v.small),
            n = l.isWalletAvailable.get();
        return a.jsx('div', {
            className: s(B, e),
            children: j(l.balance.get(), ({ value: e, name: s }) =>
                a.jsx(
                    'div',
                    {
                        className: D,
                        children: a.jsx(x, {
                            reverse: !0,
                            classNames: { icon: H },
                            type: s,
                            size: c,
                            children: a.jsx($, { wgMoneyAvailable: n, value: e, type: s }),
                        }),
                    },
                    s,
                ),
            ),
        });
    }),
    K = 'App_bc617760',
    L = 'App_wallet_9639a029',
    R = 'App_close_a9e1cd03',
    U = 'App_buttons_d1d5e33c',
    Y = 'App_purchase_eb811881',
    Z = 'App_description_20c4a89e',
    q = e(function () {
        const { model: e, controls: s } = S(),
            { getExtImage: l, getText: r } = A(e.bundleType.get()),
            c = e.price.get();
        f(_.ESCAPE, s.cancel);
        const n = C([l('confirmation.background')]);
        return a.jsx('div', {
            className: K,
            style: { backgroundImage: `url(${l('confirmation.background')})` },
            children:
                n &&
                a.jsxs(a.Fragment, {
                    children: [
                        a.jsx(J, { className: L }),
                        a.jsx(h, { onClose: s.cancel, className: R }),
                        a.jsx(g, {
                            text: r('confirmation.purchase'),
                            className: Y,
                            params: {
                                price: a.jsx(x, { size: v.large, reverse: !0, type: c.name, children: c.value }),
                            },
                        }),
                        a.jsx(g, { text: r('confirmation.description'), className: Z }),
                        a.jsx(T, {}),
                        a.jsx(W, { className: U }),
                    ],
                }),
        });
    });
y(a.jsx(N, { children: a.jsx(z, { children: a.jsx(q, {}) }) })).then(k);
