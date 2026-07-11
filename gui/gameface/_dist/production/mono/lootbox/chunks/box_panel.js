import { j as e, e as a, r as t, R as s } from './vendor.js';
import { aj as n, ak as o, x as i, u as c, d as r, F as l } from './lib.js';
import { B as m, a as d } from './resources.js';
import { g as x, T as u, S as h, s as N } from './shield.js';
const g = {
        HOME: { context: 'model.home' },
        SINGLE_REWARD: { context: 'model.singleBoxRewards' },
        MULTIPLE_REWARD: { context: 'model.multipleBoxesRewards' },
    },
    v = 'AnimationCheckbox_f57b04ae',
    _ = 'AnimationCheckbox_check_8cef4f2f',
    j = 'AnimationCheckbox_checkIcon_78c7cede',
    f = 'AnimationCheckbox_label_6d54acd3';
function b({ className: t, isActive: s, text: o, disable: i = !1, onClick: c }) {
    return e.jsx('div', {
        className: a(v, t),
        children: e.jsx(n, {
            classNames: { check: _, checkIcon: j, label: f },
            disabled: i,
            checked: s,
            onCheckedChange: c,
            children: o,
        }),
    });
}
const C = 'Loader_a1c28e8a',
    y = 'Loader_icon_aa53996d',
    T = 'Loader_text_9d6119c3';
function k({ img: t, text: s, className: n }) {
    return e.jsxs('div', {
        className: a(C, n),
        children: [
            e.jsx('div', { className: y, style: { backgroundImage: `url(${t})` } }),
            e.jsx('div', { className: T, children: s }),
        ],
    });
}
const p = { image: 'img', video: 'video' },
    A = { [m.Common]: m.Common, [m.Rare]: m.Rare },
    L = (e) => {
        const { width: a, height: s } = o(),
            n = a / s;
        return t.useMemo(
            () => (e >= n ? { width: s * e + 'rem', height: `${s}rem` } : { width: `${a}rem`, height: a / e + 'rem' }),
            [s, n, a, e],
        );
    },
    B = t.createContext({ eventName: '' });
function I({ eventName: a, children: t }) {
    return e.jsx(B.Provider, { value: { eventName: a }, children: t });
}
const R = 'Controls_9d09936a';
function w({ children: t, className: s }) {
    return e.jsx('div', { className: a(R, s), children: t });
}
const q = {
        images: { infoIcon: 'common.info' },
        texts: { guaranteedTitle: 'guaranteedTitle.text', guaranteedTitleName: 'guaranteedTitle.textName' },
    },
    E = 'Line_922d96a0',
    P = 'Line_icon_b09df192';
function z({ counts: t, category: s, eventName: n, className: o }) {
    const m = i.resolve('views'),
        { images: g, texts: v } = d(q, n),
        _ = c({
            contentId: m.read((e) => e.mono.lootbox.tooltips.guaranteed_reward_info('resId')),
            args: { category: s, eventName: n },
        }),
        j = r({ size: N.small }, { large: { size: N.large } }),
        { guaranteed: f } = x(n);
    return e.jsxs(u, {
        ..._,
        className: a(E, o),
        children: [
            e.jsx(l, {
                text: v.guaranteedTitle,
                upgradeLegacy: !0,
                params: {
                    count: e.jsx(h, { size: j.size, counts: t, eventName: n }),
                    name: e.jsx(u.Highlight, { highlight: t <= f.accent, text: v.guaranteedTitleName }),
                },
            }),
            e.jsx(u.Info, { className: P, icon: g.infoIcon }),
        ],
    });
}
function M(a) {
    const { eventName: t } = s.useContext(B);
    return e.jsx(z, { ...a, eventName: t });
}
const Q = {
        texts: {
            quantityAvailableTitle: 'quantityTitle.boxesAvailable',
            quantityNoBoxesTitle: 'quantityTitle.noBoxes',
        },
    },
    $ = 'Quantity_4048d4e5',
    D = 'Quantity_count_3dd338ce';
const G = 'BoxPanel_45fc5818',
    H = 'BoxPanel_guaranteed_75d98e50',
    S = 'BoxPanel_controls_63eb28ed';
function W({ eventName: t, children: s, className: n }) {
    return e.jsx(I, { eventName: t, children: e.jsx('div', { className: a(G, n), children: s }) });
}
((W.Quantity = function ({ boxesCount: t = 0, className: n }) {
    const { eventName: o } = s.useContext(B),
        { texts: i } = d(Q, o);
    return e.jsx('div', {
        className: a($, n),
        children:
            t > 0
                ? e.jsx(l, {
                      text: i.quantityAvailableTitle,
                      params: { boxesCount: e.jsx('span', { className: D, children: t }) },
                      upgradeLegacy: !0,
                  })
                : i.quantityNoBoxesTitle,
    });
}),
    (W.Controls = ({ className: t, ...s }) => e.jsx(w, { ...s, className: a(S, t) })),
    (W.Guaranteed = ({ className: t, ...s }) => e.jsx(M, { ...s, className: a(H, t) })));
export { b as A, W as B, k as L, g as M, p as R, A as b, L as u };
