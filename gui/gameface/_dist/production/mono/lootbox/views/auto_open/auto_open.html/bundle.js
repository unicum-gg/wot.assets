import { j as e, e as s, k as a, m as t } from '../../../chunks/vendor.js';
import {
    F as r,
    i as n,
    g as o,
    c as l,
    I as c,
    R as i,
    a as m,
    b as d,
    u,
    m as b,
    d as _,
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
        children: e.jsx(r, {
            upgradeLegacy: !0,
            text: s,
            params: { boxCount: e.jsx(r, { upgradeLegacy: !0, text: t, params: { count: a } }) },
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
    [H, O] = n()(
        ({ observableModel: e }) => {
            const s = e.object().get().eventName,
                t = { ...e.primitives(['boxesQuantity']), rewardRows: e.arrayClone('rewardRows') },
                r = a((e) => o(t.rewardRows.get(), e)),
                n = a((e) => {
                    const s = r(e);
                    return null == s ? void 0 : s.rewards.items;
                }),
                c = a(() => N($, s), { equals: l }),
                i = a(() => v(z, s), { equals: l }),
                m = Boolean(R.strings.$dyn(`lootbox_${s}`)),
                d = a(() => {
                    const { texts: e } = c(),
                        { dynamicTexts: s } = i(),
                        a = t.boxesQuantity.get();
                    return { boxesCount: a, text: e.subTitle, boxesCountText: s.boxCount.plural('boxCount', a) };
                });
            return {
                ...t,
                eventName: s,
                hasResources: m,
                computes: { resources: c, dynamicResources: i, getRewards: r, getRewardsList: n, subTitleData: d },
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
((X.Header = function ({ label: a, rewardsCount: t, className: r = '' }) {
    return e.jsxs('div', {
        className: s(M, r),
        children: [e.jsx('div', { className: F, children: a }), e.jsx('div', { className: G, children: t })],
    });
}),
    (X.Content = function ({ children: a, classNames: t }) {
        return e.jsx('div', { className: s(S, t), children: a });
    }),
    (X.Item = function ({ children: a, classNames: t }) {
        return e.jsx('div', { className: s(q, t), children: a });
    }));
const E = 'Count_b8c644a4';
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
const se = { base: 'Reward_76393f28', wrapper: 'Reward_wrapper_b54b4dc5' };
function ae({ reward: s, children: a }) {
    const { tooltipId: t, tooltipContentId: r } = s,
        n = u({ contentId: Number(r), args: { tooltipId: t }, showDelay: 100 });
    return e.jsx('div', { ...n, className: se.base, children: e.jsx('div', { className: se.wrapper, children: a }) });
}
((ae.Image = function ({ reward: a, images: t, showPreview: r }) {
    const { name: n, id: o, isCompensation: l, styleID: c, overlayType: m } = a,
        d = (() => {
            switch (n) {
                case i.Vehicles:
                    return y({ ...a, id: 0, icon: '' }, Z, l);
                case i.PremiumPlus:
                    return y({ ...a, id: 0, icon: 'premium_plus_universal' }, Z);
                default:
                    return y({ ...a, id: 0 }, Z);
            }
        })();
    return e.jsxs(J, {
        path: d,
        className: K,
        children: [
            l && e.jsx(J, { path: t.compensationIcon, className: Y }),
            m && e.jsx(J, { path: T(Z, n, m), className: s(U, C.includes(n) && W) }),
            L(a) &&
                e.jsx(k, {
                    icon: { img: t.previewIcon },
                    onClick: () => r({ bonusType: n, bonusId: o || '', styleID: c }),
                }),
        ],
    });
}),
    (ae.Label = function ({ reward: a, premiumText: t }) {
        const { name: r, compensation: n, isCompensation: o, value: l } = a,
            c = m(r),
            u = o ? n.label : a.label,
            b = a.name === i.Customizations,
            _ = a.name === i.PremiumPlus,
            p = a.name === i.TmanToken,
            x = b || _ || p ? null : d(l || u, c);
        return e.jsxs(e.Fragment, {
            children: [
                x && e.jsx('div', { className: s(ee.label, ee[`label__${a.name}`]), children: x }),
                b && e.jsx('div', { className: s(ee.label, ee.label__customizations), children: a.label }),
                _ &&
                    e.jsxs('div', {
                        className: s(ee.label, ee.label__premium),
                        children: [e.jsx('span', { className: ee.accentGold, children: a.value }), ' ', t],
                    }),
            ],
        });
    }),
    (ae.Count = function ({ text: a, count: t, classNames: n }) {
        return e.jsx('div', {
            className: s(E, n),
            children: e.jsx(r, { text: a, params: { count: t }, upgradeLegacy: !0 }),
        });
    }));
const te = t(function ({ reward: s }) {
        const { model: a, controls: t } = O(),
            { texts: r, images: n } = a.computes.resources(),
            { dynamicTexts: o } = a.computes.dynamicResources(),
            { count: l, value: c } = s;
        return e.jsxs(ae, {
            reward: s,
            children: [
                e.jsx(ae.Image, {
                    reward: s,
                    images: { compensationIcon: n.compensationIcon, previewIcon: n.previewIcon },
                    showPreview: t.showPreview,
                }),
                l > 1
                    ? e.jsx(ae.Count, { text: r.rewardsMultiplier, count: l })
                    : e.jsx(ae.Label, { reward: s, premiumText: o.rewardsPremiumDay.plural('premiumDay', Number(c)) }),
            ],
        });
    }),
    re = { header: 'RewardRow_header_101fdc8c' };
function ne({ row: s }) {
    const { label: a, rewardsCount: t, rewards: r } = s;
    return e.jsxs(X, {
        children: [
            e.jsx(X.Header, { label: a, rewardsCount: t, className: re.header }),
            e.jsx(X.Content, {
                children: r && b(r.items, (s, a) => e.jsx(X.Item, { children: e.jsx(te, { reward: s }) }, a)),
            }),
        ],
    });
}
const oe = 'Content_a7c73ed5',
    le = 'Content_63e92260';
const ce = t(function ({ className: a }) {
        const { model: t } = O(),
            { images: r } = t.computes.resources(),
            n = t.rewardRows.get();
        return e.jsx('div', {
            className: s(oe, a),
            children: e.jsx(I, {
                lipImage: r.scrollLipTop,
                children: e.jsx('div', {
                    className: le,
                    children: b(n, (s, a) => e.jsx(ne, { row: s }, `${s.label}_${a}`)),
                }),
            }),
        });
    }),
    ie = 'App_6a538000',
    me = 'App_closeButton_96e37994',
    de = 'App_header_d674f46d',
    ue = 'App_base__top_0',
    be = 'App_scrollArea_a072a44f',
    _e = 'App_footer_77faf485';
const pe = t(function () {
    const { model: a, controls: t } = O(),
        { images: r, texts: n } = a.computes.resources(),
        o = a.computes.subTitleData();
    return (
        _(t.close),
        e.jsxs('div', {
            className: s(ie, a.hasResources && ue),
            style: { backgroundImage: `url(${r.background})` },
            children: [
                e.jsx('div', {
                    className: me,
                    children: e.jsx(p, { caption: n.closeButton, type: 'close', side: 'right', onClick: t.close }),
                }),
                e.jsxs(V, { className: de, children: [o && e.jsx(V.SubTitle, { ...o }), e.jsx(g, { text: n.title })] }),
                e.jsx(ce, { className: be }),
                e.jsx(B, {
                    className: _e,
                    children: e.jsx(x, {
                        type: w.primary,
                        size: h.medium,
                        onClick: t.close,
                        children: n.submitButtonText,
                    }),
                }),
            ],
        })
    );
});
j(e.jsx(H, { children: e.jsx(f, { children: e.jsx(pe, {}) }) }));
