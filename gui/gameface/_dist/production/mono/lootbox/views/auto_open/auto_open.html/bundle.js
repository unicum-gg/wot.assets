import { j as e, e as s, m as a, n } from '../../../chunks/vendor.js';
import {
    F as t,
    i as l,
    g as o,
    c as r,
    a as c,
    I as i,
    R as m,
    b as d,
    d as u,
    u as _,
    m as b,
    e as p,
    T as x,
    C as h,
    B as w,
    f as j,
    r as f,
    S as g,
} from '../../../chunks/lib.js';
import { T as v } from '../../../chunks/title.js';
import { g as N, a as C, b as I } from '../../../chunks/resources.js';
import { S as y } from '../../../chunks/scroll_with_lips.js';
import { g as T, o as k } from '../../../chunks/getRewardImage.js';
import { i as L } from '../../../chunks/utils.js';
import { L as P } from '../../../chunks/loupe_button.js';
const B = 'Footer_877c593c';
function D({ children: a, className: n = '' }) {
    return e.jsx('div', { className: s(B, n), children: a });
}
const A = 'SubTitle_a83825c5';
const V = 'Header_ee5a2d07';
function $({ children: a, className: n = '' }) {
    return e.jsx('div', { className: s(V, n), children: a });
}
$.SubTitle = function ({ text: s, boxesCount: a, boxesCountText: n }) {
    return e.jsx('div', {
        className: A,
        children: e.jsx(t, { text: s, binding: { boxCount: e.jsx(t, { text: n, binding: { count: a } }) } }),
    });
};
const z = {
        images: {
            background: 'autoOpenView.background',
            scrollLipTop: 'autoOpenView.scrollLipTop',
            previewIcon: 'common.previewIcon',
            compensationIcon: 'common.compensationIcon',
        },
        texts: {
            closeButton: 'common.closeButton',
            title: 'autoOpenView.title',
            rewardsMultiplier: 'common.rewards.multiplier',
            submitButtonText: 'autoOpenView.submitButtonText',
            subTitle: 'autoOpenView.subTitle',
        },
    },
    H = { dynamicTexts: { rewardsPremiumDay: 'common.rewards.premiumDay', boxCount: 'autoOpenView.boxCount' } },
    [O, S] = l()(
        ({ observableModel: e }) => {
            const s = e.object().get().eventName,
                n = { ...e.primitives(['boxesQuantity']), rewardRows: e.arrayClone('rewardRows') },
                t = a((e) => o(n.rewardRows.get(), e)),
                l = a((e) => {
                    const s = t(e);
                    return s?.rewards.items;
                }),
                c = a(() => C(z, s), { equals: r }),
                i = a(() => N(H, s), { equals: r }),
                m = Boolean(R.strings.$dyn(`lootbox_${s}`)),
                d = a(() => {
                    const { texts: e } = c(),
                        { dynamicTexts: s } = i(),
                        a = n.boxesQuantity.get();
                    return { boxesCount: a, text: e.subTitle, boxesCountText: s.boxCount.plural('boxCount', a) };
                });
            return {
                ...n,
                eventName: s,
                hasResources: m,
                computes: { resources: c, dynamicResources: i, getRewards: t, getRewardsList: l, subTitleData: d },
            };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            showPreview: e.createCallback((e) => e, 'onPreview'),
        }),
    ),
    M = 'Content_2f5bdb28';
const F = 'Header_7ffd36d',
    G = 'Header_label_d1d657ae',
    q = 'Header_count_98f5c325';
const Q = 'Item_35ab220c';
const X = 'RewardRow_ca050985';
function E({ children: s }) {
    return e.jsx('div', { className: X, children: s });
}
((E.Header = function ({ label: a, rewardsCount: n, className: t = '' }) {
    return e.jsxs('div', {
        className: s(F, t),
        children: [e.jsx('div', { className: G, children: a }), e.jsx('div', { className: q, children: n })],
    });
}),
    (E.Content = function ({ children: a, classNames: n }) {
        return e.jsx('div', { className: s(M, n), children: a });
    }),
    (E.Item = function ({ children: a, classNames: n }) {
        return e.jsx('div', { className: s(Q, n), children: a });
    }));
const J = 'Count_b8c644a4';
function K({ path: s, children: a, className: n = '' }) {
    return e.jsx('div', { className: n, style: { backgroundImage: `url(${s})` }, children: a });
}
const U = 'Image_e025628e',
    W = 'Image_overlay_ed672d5e',
    Y = 'Image_overlay__normalize_2bfd2959',
    Z = 'Image_iconCompensation_9f702d91',
    ee = i.Big;
const se = {
    label: 'Label_4119cdba',
    label__credits: 'Label_label__credits_de46e2c4',
    label__vehicles: 'Label_label__vehicles_e3f8b3ce',
    label__gold: 'Label_label__gold_e3f8b3ce',
    label__premium: 'Label_label__premium_177d9045',
    label__crystal: 'Label_label__crystal_e3f8b3ce',
    label__bptaler: 'Label_label__bptaler_e3f8b3ce',
    label__freeXP: 'Label_label__freeXP_7048c917',
    label__premiumTank: 'Label_label__premiumTank_6ce89a8b',
    label__customizations: 'Label_label__customizations_46f7314f',
    accentGold: 'Label_accentGold_177d9045',
    fadeIn: 'Label_fadeIn_e3f8b3ce',
};
const ae = 'Reward_76393f28',
    ne = 'Reward_wrapper_b54b4dc5';
function te({ reward: s, children: a }) {
    const { tooltipId: n, tooltipContentId: t } = s,
        l = _({ contentId: Number(t), args: { tooltipId: n }, showDelay: 100 });
    return e.jsx('div', { ...l, className: ae, children: e.jsx('div', { className: ne, children: a }) });
}
((te.Image = function ({ reward: a, images: n, showPreview: t }) {
    const { name: l, id: o, isCompensation: r, styleID: c, overlayType: i } = a,
        d = (() => {
            switch (l) {
                case m.Vehicles:
                    return T({ ...a, id: 0, icon: '' }, ee, r);
                case m.PremiumPlus:
                    return T({ ...a, id: 0, icon: 'premium_plus_universal' }, ee);
                default:
                    return T({ ...a, id: 0 }, ee);
            }
        })();
    return e.jsxs(K, {
        path: d,
        className: U,
        children: [
            r && e.jsx(K, { path: n.compensationIcon, className: Z }),
            i && e.jsx(K, { path: k(ee, l, i), className: s(W, I.includes(l) && Y) }),
            L(a) &&
                e.jsx(P, {
                    icon: { img: n.previewIcon },
                    onClick: () => t({ bonusType: l, bonusId: o || '', styleID: c }),
                }),
        ],
    });
}),
    (te.Label = function ({ reward: a, premiumText: n }) {
        const { name: t, compensation: l, isCompensation: o, value: r } = a,
            c = d(t),
            i = o ? l.label : a.label,
            _ = a.name === m.Customizations,
            b = a.name === m.PremiumPlus,
            p = a.name === m.TmanToken,
            x = _ || b || p ? null : u(r || i, c);
        return e.jsxs(e.Fragment, {
            children: [
                x && e.jsx('div', { className: s(se.label, se[`label__${a.name}`]), children: x }),
                _ && e.jsx('div', { className: s(se.label, se.label__customizations), children: a.label }),
                b &&
                    e.jsxs('div', {
                        className: s(se.label, se.label__premium),
                        children: [e.jsx('span', { className: se.accentGold, children: a.value }), ' ', n],
                    }),
            ],
        });
    }),
    (te.Count = function ({ text: a, count: n, classNames: t }) {
        return e.jsx('div', {
            className: s(J, t),
            children: e.jsx(c, { text: a, params: { count: n }, upgradeLegacy: !0 }),
        });
    }));
const le = n(function ({ reward: s }) {
        const { model: a, controls: n } = S(),
            { texts: t, images: l } = a.computes.resources(),
            { dynamicTexts: o } = a.computes.dynamicResources(),
            { count: r, value: c } = s;
        return e.jsxs(te, {
            reward: s,
            children: [
                e.jsx(te.Image, {
                    reward: s,
                    images: { compensationIcon: l.compensationIcon, previewIcon: l.previewIcon },
                    showPreview: n.showPreview,
                }),
                r > 1
                    ? e.jsx(te.Count, { text: t.rewardsMultiplier, count: r })
                    : e.jsx(te.Label, { reward: s, premiumText: o.rewardsPremiumDay.plural('premiumDay', Number(c)) }),
            ],
        });
    }),
    oe = 'RewardRow_header_101fdc8c';
function re({ row: s }) {
    const { label: a, rewardsCount: n, rewards: t } = s;
    return e.jsxs(E, {
        children: [
            e.jsx(E.Header, { label: a, rewardsCount: n, className: oe }),
            e.jsx(E.Content, {
                children: t && b(t.items, (s, a) => e.jsx(E.Item, { children: e.jsx(le, { reward: s }) }, a)),
            }),
        ],
    });
}
const ce = 'Content_a7c73ed5',
    ie = 'Content_63e92260';
const me = n(function ({ className: a }) {
        const { model: n } = S(),
            { images: t } = n.computes.resources(),
            l = n.rewardRows.get();
        return e.jsx('div', {
            className: s(ce, a),
            children: e.jsx(y, {
                lipImage: t.scrollLipTop,
                children: e.jsx('div', {
                    className: ie,
                    children: b(l, (s, a) => e.jsx(re, { row: s }, `${s.label}_${a}`)),
                }),
            }),
        });
    }),
    de = 'App_6a538000',
    ue = 'App_closeButton_d9ee7ae6',
    _e = 'App_header_d674f46d',
    be = 'App_base__top_0',
    pe = 'App_scrollArea_1edf1cbf',
    xe = 'App_footer_77faf485';
const he = n(function () {
    const { model: a, controls: n } = S(),
        { images: t, texts: l } = a.computes.resources(),
        o = a.computes.subTitleData();
    return (
        p(n.close),
        e.jsxs('div', {
            className: s(de, a.hasResources && be),
            style: { backgroundImage: `url(${t.background})` },
            children: [
                e.jsx('div', {
                    className: ue,
                    children: e.jsx(x, { caption: l.closeButton, type: 'close', side: 'right', onClick: n.close }),
                }),
                e.jsxs($, { className: _e, children: [o && e.jsx($.SubTitle, { ...o }), e.jsx(v, { text: l.title })] }),
                e.jsx(me, { className: pe }),
                e.jsx(D, {
                    className: xe,
                    children: e.jsx(h, {
                        type: j.primary,
                        size: w.medium,
                        onClick: n.close,
                        children: l.submitButtonText,
                    }),
                }),
            ],
        })
    );
});
f(e.jsx(O, { children: e.jsx(g, { children: e.jsx(he, {}) }) }));
