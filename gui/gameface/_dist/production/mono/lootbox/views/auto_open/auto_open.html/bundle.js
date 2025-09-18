import { j as e, e as s, m as a, n as t } from '../../../chunks/vendor.js';
import {
    F as n,
    i as r,
    g as o,
    c as l,
    I as c,
    R as i,
    a as m,
    b as u,
    u as d,
    m as _,
    d as b,
    T as p,
    C as x,
    B as h,
    e as w,
    r as j,
    S as f,
} from '../../../chunks/lib.js';
import { T as g } from '../../../chunks/title.js';
import { g as v, a as N, b as C } from '../../../chunks/resources.js';
import { S as I } from '../../../chunks/scroll_with_lips.js';
import { g as y, o as T } from '../../../chunks/getRewardImage.js';
import { i as L } from '../../../chunks/utils.js';
import { L as k } from '../../../chunks/loupe_button.js';
const P = { base: 'Footer_877c593c' };
function B({ children: a, className: t = '' }) {
    return e.jsx('div', { className: s(P.base, t), children: a });
}
const D = 'SubTitle_a83825c5';
const A = { base: 'Header_ee5a2d07' };
function V({ children: a, className: t = '' }) {
    return e.jsx('div', { className: s(A.base, t), children: a });
}
V.SubTitle = function ({ text: s, boxesCount: a, boxesCountText: t }) {
    return e.jsx('div', {
        className: D,
        children: e.jsx(n, {
            upgradeLegacy: !0,
            text: s,
            params: { boxCount: e.jsx(n, { upgradeLegacy: !0, text: t, params: { count: a } }) },
        }),
    });
};
const $ = {
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
    z = { dynamicTexts: { rewardsPremiumDay: 'common.rewards.premiumDay', boxCount: 'autoOpenView.boxCount' } },
    [H, O] = r()(
        ({ observableModel: e }) => {
            const s = e.object().get().eventName,
                t = { ...e.primitives(['boxesQuantity']), rewardRows: e.arrayClone('rewardRows') },
                n = a((e) => o(t.rewardRows.get(), e)),
                r = a((e) => {
                    const s = n(e);
                    return null == s ? void 0 : s.rewards.items;
                }),
                c = a(() => N($, s), { equals: l }),
                i = a(() => v(z, s), { equals: l }),
                m = Boolean(R.strings.$dyn(`lootbox_${s}`)),
                u = a(() => {
                    const { texts: e } = c(),
                        { dynamicTexts: s } = i(),
                        a = t.boxesQuantity.get();
                    return { boxesCount: a, text: e.subTitle, boxesCountText: s.boxCount.plural('boxCount', a) };
                });
            return {
                ...t,
                eventName: s,
                hasResources: m,
                computes: { resources: c, dynamicResources: i, getRewards: n, getRewardsList: r, subTitleData: u },
            };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            showPreview: e.createCallback((e) => e, 'onPreview'),
        }),
    ),
    S = 'Content_2f5bdb28';
const M = 'Header_7ffd36d',
    F = 'Header_label_d1d657ae',
    G = 'Header_count_98f5c325';
const q = 'Item_35ab220c';
const Q = { base: 'RewardRow_ca050985' };
function X({ children: s }) {
    return e.jsx('div', { className: Q.base, children: s });
}
((X.Header = function ({ label: a, rewardsCount: t, className: n = '' }) {
    return e.jsxs('div', {
        className: s(M, n),
        children: [e.jsx('div', { className: F, children: a }), e.jsx('div', { className: G, children: t })],
    });
}),
    (X.Content = function ({ children: a, classNames: t }) {
        return e.jsx('div', { className: s(S, t), children: a });
    }),
    (X.Item = function ({ children: a, classNames: t }) {
        return e.jsx('div', { className: s(q, t), children: a });
    }));
const E = 'Count_24eae878';
function J({ path: s, children: a, className: t = '' }) {
    return e.jsx('div', { className: t, style: { backgroundImage: `url(${s})` }, children: a });
}
const K = 'Image_e025628e',
    U = 'Image_overlay_ed672d5e',
    W = 'Image_overlay__normalize_2bfd2959',
    Y = 'Image_iconCompensation_9f702d91',
    Z = c.Big;
const ee = {
    root: 'Label_root_e3f8b3ce',
    label: 'Label_47b0ff92',
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
const se = { base: 'Reward_76393f28', wrapper: 'Reward_wrapper_b54b4dc5' };
function ae({ reward: s, children: a }) {
    const { tooltipId: t, tooltipContentId: n } = s,
        r = d({ contentId: Number(n), args: { tooltipId: t }, showDelay: 100 });
    return e.jsx('div', { ...r, className: se.base, children: e.jsx('div', { className: se.wrapper, children: a }) });
}
((ae.Image = function ({ reward: a, images: t, showPreview: n }) {
    const { name: r, id: o, isCompensation: l, styleID: c, overlayType: m } = a,
        u = (() => {
            switch (r) {
                case i.Vehicles:
                    return y({ ...a, id: 0, icon: '' }, Z, l);
                case i.PremiumPlus:
                    return y({ ...a, id: 0, icon: 'premium_plus_universal' }, Z);
                default:
                    return y({ ...a, id: 0 }, Z);
            }
        })();
    return e.jsxs(J, {
        path: u,
        className: K,
        children: [
            l && e.jsx(J, { path: t.compensationIcon, className: Y }),
            m && e.jsx(J, { path: T(Z, r, m), className: s(U, C.includes(r) && W) }),
            L(a) &&
                e.jsx(k, {
                    icon: { img: t.previewIcon },
                    onClick: () => n({ bonusType: r, bonusId: o || '', styleID: c }),
                }),
        ],
    });
}),
    (ae.Label = function ({ reward: a, premiumText: t }) {
        const { name: n, compensation: r, isCompensation: o, value: l } = a,
            c = m(n),
            d = o ? r.label : a.label,
            _ = a.name === i.Customizations,
            b = a.name === i.PremiumPlus,
            p = a.name === i.TmanToken,
            x = _ || b || p ? null : u(l || d, c);
        return e.jsxs(e.Fragment, {
            children: [
                x && e.jsx('div', { className: s(ee.label, ee[`label__${a.name}`]), children: x }),
                _ && e.jsx('div', { className: s(ee.label, ee.label__customizations), children: a.label }),
                b &&
                    e.jsxs('div', {
                        className: s(ee.label, ee.label__premium),
                        children: [e.jsx('span', { className: ee.accentGold, children: a.value }), ' ', t],
                    }),
            ],
        });
    }),
    (ae.Count = function ({ text: a, count: t, classNames: r }) {
        return e.jsx('div', {
            className: s(E, r),
            children: e.jsx(n, { text: a, params: { count: t }, upgradeLegacy: !0 }),
        });
    }));
const te = t(function ({ reward: s }) {
        const { model: a, controls: t } = O(),
            { texts: n, images: r } = a.computes.resources(),
            { dynamicTexts: o } = a.computes.dynamicResources(),
            { count: l, value: c } = s;
        return e.jsxs(ae, {
            reward: s,
            children: [
                e.jsx(ae.Image, {
                    reward: s,
                    images: { compensationIcon: r.compensationIcon, previewIcon: r.previewIcon },
                    showPreview: t.showPreview,
                }),
                l > 1
                    ? e.jsx(ae.Count, { text: n.rewardsMultiplier, count: l })
                    : e.jsx(ae.Label, { reward: s, premiumText: o.rewardsPremiumDay.plural('premiumDay', Number(c)) }),
            ],
        });
    }),
    ne = { header: 'RewardRow_header_101fdc8c' };
function re({ row: s }) {
    const { label: a, rewardsCount: t, rewards: n } = s;
    return e.jsxs(X, {
        children: [
            e.jsx(X.Header, { label: a, rewardsCount: t, className: ne.header }),
            e.jsx(X.Content, {
                children: n && _(n.items, (s, a) => e.jsx(X.Item, { children: e.jsx(te, { reward: s }) }, a)),
            }),
        ],
    });
}
const oe = 'Content_a7c73ed5',
    le = 'Content_63e92260';
const ce = t(function ({ className: a }) {
        const { model: t } = O(),
            { images: n } = t.computes.resources(),
            r = t.rewardRows.get();
        return e.jsx('div', {
            className: s(oe, a),
            children: e.jsx(I, {
                lipImage: n.scrollLipTop,
                children: e.jsx('div', {
                    className: le,
                    children: _(r, (s, a) => e.jsx(re, { row: s }, `${s.label}_${a}`)),
                }),
            }),
        });
    }),
    ie = 'App_6a538000',
    me = 'App_closeButton_96e37994',
    ue = 'App_header_d674f46d',
    de = 'App_base__top_0',
    _e = 'App_scrollArea_a072a44f',
    be = 'App_footer_77faf485';
const pe = t(function () {
    const { model: a, controls: t } = O(),
        { images: n, texts: r } = a.computes.resources(),
        o = a.computes.subTitleData();
    return (
        b(t.close),
        e.jsxs('div', {
            className: s(ie, a.hasResources && de),
            style: { backgroundImage: `url(${n.background})` },
            children: [
                e.jsx('div', {
                    className: me,
                    children: e.jsx(p, { caption: r.closeButton, type: 'close', side: 'right', onClick: t.close }),
                }),
                e.jsxs(V, { className: ue, children: [o && e.jsx(V.SubTitle, { ...o }), e.jsx(g, { text: r.title })] }),
                e.jsx(ce, { className: _e }),
                e.jsx(B, {
                    className: be,
                    children: e.jsx(x, {
                        type: w.primary,
                        size: h.medium,
                        onClick: t.close,
                        children: r.submitButtonText,
                    }),
                }),
            ],
        })
    );
});
j(e.jsx(H, { children: e.jsx(f, { children: e.jsx(pe, {}) }) }));
