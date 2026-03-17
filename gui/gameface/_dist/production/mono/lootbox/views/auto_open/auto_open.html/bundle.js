import { j as e, e as s, k as a, m as t } from '../../../chunks/vendor.js';
import {
    F as n,
    i as o,
    g as r,
    c as l,
    a as c,
    I as i,
    R as d,
    b as m,
    d as u,
    u as b,
    m as _,
    e as p,
    T as x,
    C as h,
    B as w,
    f as j,
    r as f,
    S as v,
} from '../../../chunks/lib.js';
import { T as g } from '../../../chunks/title.js';
import { g as N, a as C, b as I } from '../../../chunks/resources.js';
import { S as y } from '../../../chunks/scroll_with_lips.js';
import { g as T, o as k } from '../../../chunks/getRewardImage.js';
import { i as L } from '../../../chunks/utils.js';
import { L as P } from '../../../chunks/loupe_button.js';
const B = { base: 'Footer_877c593c' };
function D({ children: a, className: t = '' }) {
    return e.jsx('div', { className: s(B.base, t), children: a });
}
const A = 'SubTitle_a83825c5';
const V = { base: 'Header_ee5a2d07' };
function $({ children: a, className: t = '' }) {
    return e.jsx('div', { className: s(V.base, t), children: a });
}
$.SubTitle = function ({ text: s, boxesCount: a, boxesCountText: t }) {
    return e.jsx('div', {
        className: A,
        children: e.jsx(n, { text: s, binding: { boxCount: e.jsx(n, { text: t, binding: { count: a } }) } }),
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
    [O, S] = o()(
        ({ observableModel: e }) => {
            const s = e.object().get().eventName,
                t = { ...e.primitives(['boxesQuantity']), rewardRows: e.arrayClone('rewardRows') },
                n = a((e) => r(t.rewardRows.get(), e)),
                o = a((e) => {
                    const s = n(e);
                    return null == s ? void 0 : s.rewards.items;
                }),
                c = a(() => C(z, s), { equals: l }),
                i = a(() => N(H, s), { equals: l }),
                d = Boolean(R.strings.$dyn(`lootbox_${s}`)),
                m = a(() => {
                    const { texts: e } = c(),
                        { dynamicTexts: s } = i(),
                        a = t.boxesQuantity.get();
                    return { boxesCount: a, text: e.subTitle, boxesCountText: s.boxCount.plural('boxCount', a) };
                });
            return {
                ...t,
                eventName: s,
                hasResources: d,
                computes: { resources: c, dynamicResources: i, getRewards: n, getRewardsList: o, subTitleData: m },
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
const X = { base: 'RewardRow_ca050985' };
function E({ children: s }) {
    return e.jsx('div', { className: X.base, children: s });
}
((E.Header = function ({ label: a, rewardsCount: t, className: n = '' }) {
    return e.jsxs('div', {
        className: s(F, n),
        children: [e.jsx('div', { className: G, children: a }), e.jsx('div', { className: q, children: t })],
    });
}),
    (E.Content = function ({ children: a, classNames: t }) {
        return e.jsx('div', { className: s(M, t), children: a });
    }),
    (E.Item = function ({ children: a, classNames: t }) {
        return e.jsx('div', { className: s(Q, t), children: a });
    }));
const J = 'Count_b8c644a4';
function K({ path: s, children: a, className: t = '' }) {
    return e.jsx('div', { className: t, style: { backgroundImage: `url(${s})` }, children: a });
}
const U = 'Image_e025628e',
    W = 'Image_overlay_ed672d5e',
    Y = 'Image_overlay__normalize_2bfd2959',
    Z = 'Image_iconCompensation_9f702d91',
    ee = i.Big;
const se = {
    root: 'Label_root_e3f8b3ce',
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
const ae = { base: 'Reward_76393f28', wrapper: 'Reward_wrapper_b54b4dc5' };
function te({ reward: s, children: a }) {
    const { tooltipId: t, tooltipContentId: n } = s,
        o = b({ contentId: Number(n), args: { tooltipId: t }, showDelay: 100 });
    return e.jsx('div', { ...o, className: ae.base, children: e.jsx('div', { className: ae.wrapper, children: a }) });
}
((te.Image = function ({ reward: a, images: t, showPreview: n }) {
    const { name: o, id: r, isCompensation: l, styleID: c, overlayType: i } = a,
        m = (() => {
            switch (o) {
                case d.Vehicles:
                    return T({ ...a, id: 0, icon: '' }, ee, l);
                case d.PremiumPlus:
                    return T({ ...a, id: 0, icon: 'premium_plus_universal' }, ee);
                default:
                    return T({ ...a, id: 0 }, ee);
            }
        })();
    return e.jsxs(K, {
        path: m,
        className: U,
        children: [
            l && e.jsx(K, { path: t.compensationIcon, className: Z }),
            i && e.jsx(K, { path: k(ee, o, i), className: s(W, I.includes(o) && Y) }),
            L(a) &&
                e.jsx(P, {
                    icon: { img: t.previewIcon },
                    onClick: () => n({ bonusType: o, bonusId: r || '', styleID: c }),
                }),
        ],
    });
}),
    (te.Label = function ({ reward: a, premiumText: t }) {
        const { name: n, compensation: o, isCompensation: r, value: l } = a,
            c = m(n),
            i = r ? o.label : a.label,
            b = a.name === d.Customizations,
            _ = a.name === d.PremiumPlus,
            p = a.name === d.TmanToken,
            x = b || _ || p ? null : u(l || i, c);
        return e.jsxs(e.Fragment, {
            children: [
                x && e.jsx('div', { className: s(se.label, se[`label__${a.name}`]), children: x }),
                b && e.jsx('div', { className: s(se.label, se.label__customizations), children: a.label }),
                _ &&
                    e.jsxs('div', {
                        className: s(se.label, se.label__premium),
                        children: [e.jsx('span', { className: se.accentGold, children: a.value }), ' ', t],
                    }),
            ],
        });
    }),
    (te.Count = function ({ text: a, count: t, classNames: n }) {
        return e.jsx('div', {
            className: s(J, n),
            children: e.jsx(c, { text: a, params: { count: t }, upgradeLegacy: !0 }),
        });
    }));
const ne = t(function ({ reward: s }) {
        const { model: a, controls: t } = S(),
            { texts: n, images: o } = a.computes.resources(),
            { dynamicTexts: r } = a.computes.dynamicResources(),
            { count: l, value: c } = s;
        return e.jsxs(te, {
            reward: s,
            children: [
                e.jsx(te.Image, {
                    reward: s,
                    images: { compensationIcon: o.compensationIcon, previewIcon: o.previewIcon },
                    showPreview: t.showPreview,
                }),
                l > 1
                    ? e.jsx(te.Count, { text: n.rewardsMultiplier, count: l })
                    : e.jsx(te.Label, { reward: s, premiumText: r.rewardsPremiumDay.plural('premiumDay', Number(c)) }),
            ],
        });
    }),
    oe = { header: 'RewardRow_header_101fdc8c' };
function re({ row: s }) {
    const { label: a, rewardsCount: t, rewards: n } = s;
    return e.jsxs(E, {
        children: [
            e.jsx(E.Header, { label: a, rewardsCount: t, className: oe.header }),
            e.jsx(E.Content, {
                children: n && _(n.items, (s, a) => e.jsx(E.Item, { children: e.jsx(ne, { reward: s }) }, a)),
            }),
        ],
    });
}
const le = 'Content_a7c73ed5',
    ce = 'Content_63e92260';
const ie = t(function ({ className: a }) {
        const { model: t } = S(),
            { images: n } = t.computes.resources(),
            o = t.rewardRows.get();
        return e.jsx('div', {
            className: s(le, a),
            children: e.jsx(y, {
                lipImage: n.scrollLipTop,
                children: e.jsx('div', {
                    className: ce,
                    children: _(o, (s, a) => e.jsx(re, { row: s }, `${s.label}_${a}`)),
                }),
            }),
        });
    }),
    de = 'App_6a538000',
    me = 'App_closeButton_96e37994',
    ue = 'App_header_d674f46d',
    be = 'App_base__top_0',
    _e = 'App_scrollArea_1edf1cbf',
    pe = 'App_footer_77faf485';
const xe = t(function () {
    const { model: a, controls: t } = S(),
        { images: n, texts: o } = a.computes.resources(),
        r = a.computes.subTitleData();
    return (
        p(t.close),
        e.jsxs('div', {
            className: s(de, a.hasResources && be),
            style: { backgroundImage: `url(${n.background})` },
            children: [
                e.jsx('div', {
                    className: me,
                    children: e.jsx(x, { caption: o.closeButton, type: 'close', side: 'right', onClick: t.close }),
                }),
                e.jsxs($, { className: ue, children: [r && e.jsx($.SubTitle, { ...r }), e.jsx(g, { text: o.title })] }),
                e.jsx(ie, { className: _e }),
                e.jsx(D, {
                    className: pe,
                    children: e.jsx(h, {
                        type: j.primary,
                        size: w.medium,
                        onClick: t.close,
                        children: o.submitButtonText,
                    }),
                }),
            ],
        })
    );
});
f(e.jsx(O, { children: e.jsx(v, { children: e.jsx(xe, {}) }) }));
