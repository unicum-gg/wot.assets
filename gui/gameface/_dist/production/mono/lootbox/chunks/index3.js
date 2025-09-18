import { o as e, m as a, f as t, r as s, n as i, j as r, e as o, q as n, h as c, i as l } from './vendor.js';
import { b as d, H as m, M as u } from './use_cover_size.js';
import {
    h as p,
    c as g,
    a as h,
    b as x,
    d as w,
    u as b,
    I as _,
    R as f,
    e as y,
    s as v,
    O as j,
    C as N,
    f as S,
    r as C,
    F as I,
    g as A,
    i as T,
    P as k,
    B as z,
    j as B,
} from './reward.js';
import { a as H, g as V, C as P, B as O, d as E } from './resources.js';
import { g as L } from './getConfig.js';
import { a as G, f as W, i as $ } from './utils.js';
import {
    i as D,
    c as F,
    o as q,
    m as Z,
    u as M,
    X,
    a0 as U,
    _ as Y,
    I as J,
    a5 as K,
    k as Q,
    n as ee,
    j as ae,
    F as te,
    R as se,
    O as ie,
    Z as re,
    d as oe,
} from './lib.js';
import { a as ne, g as ce, r as le } from './getRewardImage.js';
import { S as de } from './sounds.js';
import { G as me } from './guaranteed.js';
import { T as ue } from './tank_name.js';
import { L as pe } from './loupe_button.js';
import './title.js';
import './quantity_title.js';
import './vehicle_info.js';
import './title2.js';
const ge = {
        rewardAppear: de.rewardAppear,
        compensationAppear: de.compensationAppear,
        rareAnimation: de.rareAnimation,
        epicAnimation: de.epicAnimation,
        open: de.open,
        openRare: de.openRare,
        purchaseHover: de.purchaseHover,
        purchaseClick: de.purchaseClick,
    },
    he = {
        images: {
            iconEmpty: 'entry_point.lootboxEmpty',
            previewIcon: 'awardViews.previewIcon',
            compensationIcon: 'awardViews.compensationIcon',
            glowIcon: 'awardViews.glow',
            infoIcon: 'common.info',
            guaranteedGlowIcon: 'awardViews.guaranteedGlow',
            loader: 'common.waiting',
        },
        videos: {
            compensationGlow: 'awardViews.compensationGlow',
            rareGlow: 'awardViews.rareGlow',
            rare: 'awardViews.raritySimpleAnimations.rare',
            epic: 'awardViews.raritySimpleAnimations.epic',
        },
        texts: {
            closeButton: 'common.closeButton',
            multiplier: 'common.rewards.multiplier',
            headerTitle: 'singleRewardView.header.title',
            headerSubtitle: 'singleRewardView.header.subTitle',
            guaranteedTitle: 'guaranteedTitle.text',
            guaranteedNextBox: 'guaranteedTitle.nextBox',
            quantityAvailableTitle: 'quantityTitle.boxesAvailable',
            quantityNoBoxesTitle: 'quantityTitle.noBoxes',
            extraRewardText: 'singleRewardView.extraReward.text',
            uniqueTankmanText: 'singleRewardView.uniqueTankman',
            footerOpenNextButton: 'singleRewardView.footer.openNextButton',
            footerBackButton: 'awardViews.footer.backButton',
            footerPurchaseButtonText: 'common.getButton.upperCase',
            checkbox: 'common.footer.checkbox',
            loader: 'common.loader',
            rareOverlayButtonContinue: 'rareRewardOverlay.rewardDescription.button.text',
            rareOverlayTitle: 'rareRewardOverlay.rewardDescription.title.text',
            rareOverlayStyleTitle: 'rareRewardOverlay.rewardDescription.style.text',
            rareOverlayStyleDescription: 'rareRewardOverlay.rewardDescription.style.description.text',
        },
        sounds: ge,
    },
    xe = {
        dynamicVideos: { boxesOpening: 'awardViews.openingBoxVideo' },
        dynamicTexts: { rewardsPremiumDay: 'common.rewards.premiumDay', boxCategory: 'common.boxCategory.lowerCase' },
        dynamicImages: { boxesOpening: 'awardViews.openingBox' },
    },
    [we, be] = D()(
        ({ observableModel: t }) => {
            const s = {
                    root: t.object(),
                    ...t.primitives(['eventName', 'isAnimationActive', 'isAwaitingResponse', 'isReopen']),
                    bonuses: t.arrayClone('bonuses.items'),
                    extraBonuses: t.arrayClone('extraBonuses.items'),
                    activeRareReward: e.box(null),
                },
                i = a(() => H(he, s.root.get().eventName), { equals: F }),
                r = a(() => V(xe, s.root.get().eventName), { equals: F }),
                o = a(() => L(s.root.get().eventName, P.Rewards), { equals: F }),
                n = a(() => q(s.bonuses.get(), (e) => G(e)), { equals: F }),
                c = a(() => {
                    const { boxCategory: e } = s.root.get(),
                        a = `${e}_${O.Common}`,
                        t = `${e}_${O.Rare}`,
                        o = r().dynamicVideos.boxesOpening.dynOpt(a, O.Common),
                        n = r().dynamicVideos.boxesOpening.dynOpt(t, O.Rare),
                        c = r().dynamicImages.boxesOpening.dynOpt(a, O.Common),
                        l = r().dynamicImages.boxesOpening.dynOpt(t, O.Rare),
                        m = i().sounds,
                        u = E(ne(R.sounds, `${ge.open}_${s.root.get().eventName}_${e}`), m.open, ge.open),
                        p = E(ne(R.sounds, `${ge.openRare}_${s.root.get().eventName}_${e}`), m.openRare, ge.openRare);
                    return { [d.common]: { video: o, image: c, sound: u }, [d.rare]: { video: n, image: l, sound: p } };
                });
            return {
                ...s,
                computes: { resources: i, dynamicResources: r, settings: o, hasRareReward: n, multimediaResource: c },
            };
        },
        ({ externalModel: e, model: a }) => ({
            goPreview: e.createCallback((e) => e, 'onPreview'),
            openNext: e.createCallbackNoArgs('onOpen'),
            goBack: e.createCallbackNoArgs('onGoBack'),
            close: e.createCallbackNoArgs('onClose'),
            buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
            toggleAnimationState: e.createCallback((e) => ({ isAnimationActive: !e }), 'onAnimationStateChanged'),
            setIsVideoPlaying: e.createCallback((e) => ({ isPlaying: e }), 'onVideoPlaying'),
            setActiveRareReward: t((e) => a.activeRareReward.set(e)),
            clearActiveRareReward: t(() => a.activeRareReward.set(null)),
        }),
    ),
    _e = s.createContext(null),
    fe = 'REWARD_IN',
    ye = 'REWARD_OUT',
    ve = 'OVERLAY_REWARD',
    je = 'RARE_REWARD',
    Ne = 'TWITCH',
    Re = 'COMPENSATION',
    Se = 'FINISH',
    Ce = {
        [ve]: { duration: 0, pauseNextSteps: !0 },
        [je]: { duration: 0, pauseNextSteps: !0 },
        [fe]: { duration: 200 },
        [ye]: { duration: 400 },
        [Ne]: { duration: 840 },
        [Re]: { duration: 1e3, delay: 50 },
        [Se]: { name: Se, duration: 0, delay: 500 },
    },
    Ie = (e, a) => ({ ...Ce[e], name: `animation_${a}_${e}` }),
    Ae = (e, a) => {
        const t = [];
        return (
            Z(e, (e, s) => {
                const i = G(e),
                    r = p(a, e.specialAwardName);
                if (i) {
                    if (r) return (t.push(Ie(ve, s)), void t.push(Ie(ye, s)));
                    t.push(Ie(je, s));
                }
                (t.push(Ie(fe, s)), t.push(Ie(ye, s)), e.isCompensation && (t.push(Ie(Ne, s)), t.push(Ie(Re, s))));
            }),
            t.push(Ce.FINISH),
            t
        );
    },
    Te = i(function ({ children: e }) {
        const { model: a } = be(),
            t = a.eventName.get(),
            s = g({ steps: Ae(a.bonuses.get(), t), autoStart: !1 })();
        return r.jsx(_e.Provider, { value: s, children: e });
    }),
    ke = 'ExtraReward_d82b07a8';
const ze = 'ExtraRewards_a358aca3',
    Be = 'ExtraRewards_extraRewardsWrapper_671c8474',
    He = 'ExtraRewards_text_d9072280';
function Ve({ children: e, text: a, className: t }) {
    return r.jsxs('div', {
        className: o(ze, t),
        children: [r.jsx('div', { className: He, children: a }), r.jsx('div', { className: Be, children: e })],
    });
}
((Ve.Reward = function ({ image: e, className: a }) {
    return r.jsx('div', { className: o(ke, a), style: { backgroundImage: `url(${e})` } });
}),
    (Ve.Tooltip = function ({ children: e, contentId: a, tooltipId: t, className: s }) {
        const i = M({ contentId: a, args: { tooltipId: t } });
        return r.jsx('div', { ...i, className: s, children: e });
    }));
const Pe = 'AdditionRewards_6fbe30c4',
    Oe = 'AdditionRewards_extraRewards_d23daaa9',
    Ee = { opacity: 0, filter: 'brightness(2)' },
    Le = { opacity: 1, filter: 'brightness(1)' },
    Ge = {
        to: [{ opacity: 1, filter: 'brightness(2)' }, Le],
        config: { duration: 600, easing: U.easeInOutCubic },
        onRest: () => {
            x.send({ type: w.toPage });
        },
    },
    We = i(function ({ className: e }) {
        const { model: a } = be(),
            {
                breakpoint: { weight: t },
            } = X(),
            i = n(x, (e) => e.value),
            { texts: d } = a.computes.resources(),
            m = a.extraBonuses.get(),
            [u, p] = c(() => ({ from: Ee }));
        return (
            s.useEffect(() => {
                switch (i) {
                    case h.skip:
                        p.set(Le);
                        break;
                    case h.preparation:
                        p.set(Ee);
                        break;
                    case h.extra:
                        p.start(Ge);
                }
            }, [i, p]),
            r.jsx(l.div, {
                style: u,
                className: o(Pe, e),
                children: r.jsx(Ve, {
                    text: d.extraRewardText,
                    className: Oe,
                    children: Z(m, (e, a) =>
                        r.jsx(
                            Ve.Tooltip,
                            {
                                contentId: Number(e.tooltipContentId),
                                tooltipId: e.tooltipId,
                                children: r.jsx(Ve.Reward, { image: ce(e, t >= Y.medium.weight ? J.Big : J.Small) }),
                            },
                            a + e.name,
                        ),
                    ),
                }),
            })
        );
    }),
    $e = 'Rewards_deed6d51';
function De({ children: e, className: a }) {
    return r.jsx('div', { className: o($e, a), children: e });
}
const Fe = {
    root: 'Title_root_2e63cf3',
    base: 'Title_60f02b6b',
    label: 'Title_label_16164e06',
    base__lootBox: 'Title_base__lootBox_2e63cf3',
    description: 'Title_description_4bde3c3',
    base__credits: 'Title_base__credits_2e63cf3',
    base__gold: 'Title_base__gold_2e63cf3',
    base__premium_plus: 'Title_base__premium_plus_2e63cf3',
    base__crystal: 'Title_base__crystal_2e63cf3',
    fadeIn: 'Title_fadeIn_2e63cf3',
};
const qe = 'Compensation_22c7fec0';
function Ze({ children: e, size: a, className: t }) {
    return r.jsx('div', { className: o(qe, t), style: { width: a.width, height: a.height }, children: e });
}
((Ze.Glow = function ({ src: e, size: a, className: t }) {
    return r.jsx(K, { className: t, style: { width: a.width, height: a.height }, src: e, autoplay: !0, loop: !0 });
}),
    (Ze.Title = function ({ reward: e, style: a, className: t = '' }) {
        const { name: s, label: i, value: n } = e;
        return r.jsxs('div', {
            className: o(Fe.base, Fe[`base__${s}`], t),
            children: [
                r.jsx('div', {
                    className: Fe.label,
                    style: { fontSize: null == a ? void 0 : a.labelFontSize },
                    children: i,
                }),
                r.jsx('div', {
                    className: Fe.description,
                    style: { fontSize: null == a ? void 0 : a.descriptionFontSize },
                    children: r.jsx(Q, { text: W(n) }),
                }),
            ],
        });
    }));
const Me = 'PreviewButton_fdc3bedf';
const Xe = 'RareGlow_c6e2840e',
    Ue = 'RareGlow_video_c4cd6073';
const Ye = 'Description_2b53c101';
const Je = {
    root: 'Label_root_e3f8b3ce',
    base: 'Label_4ac1bd4d',
    base__credits: 'Label_base__credits_de46e2c4',
    base__gold: 'Label_base__gold_e3f8b3ce',
    base__premium_plus: 'Label_base__premium_plus_177d9045',
    base__freeXP: 'Label_base__freeXP_e3f8b3ce',
    base__bptaler: 'Label_base__bptaler_e3f8b3ce',
    base__crystal: 'Label_base__crystal_7048c917',
    fadeIn: 'Label_fadeIn_e3f8b3ce',
};
const Ke = {
    root: 'Plural_root_e8c3c4d2',
    base: 'Plural_58fd981',
    base__premium_plus: 'Plural_base__premium_plus_c2532b49',
    fadeIn: 'Plural_fadeIn_e8c3c4d2',
};
const Qe = 'Title_60f02b6b';
function ea({ children: e, className: a }) {
    return r.jsx('div', { className: o(Qe, a), children: e });
}
((ea.Description = function ({ children: e, style: a, className: t }) {
    return r.jsx('div', { className: o(Ye, t), style: a, children: e });
}),
    (ea.Label = function ({ children: e, rewardType: a, style: t, className: s }) {
        return r.jsx('div', { className: o(Je.base, Je[`base__${a}`], s), style: t, children: e });
    }),
    (ea.Plural = function ({ text: e, rewardType: a, style: t, className: s }) {
        return r.jsx('span', { className: o(Ke.base, Ke[`base__${a}`], s), style: t, children: e });
    }));
const aa = 'RewardCard_ecfc0889';
function ta({ children: e, className: a, ...t }) {
    return r.jsx('div', { className: o(aa, a), ...t, children: e });
}
((ta.PreviewButton = function ({ image: e, onClick: a, className: t }) {
    return r.jsx('div', { className: o(Me, t), children: r.jsx(pe, { icon: { img: e }, onClick: a }) });
}),
    (ta.RareGlow = function ({ src: e, className: a }) {
        return r.jsx('div', {
            className: o(Xe, a),
            children: r.jsx(K, { className: Ue, src: e, autoplay: !0, loop: !0 }),
        });
    }),
    (ta.Title = ea),
    (ta.Compensation = Ze));
const sa = { opacity: 0, transform: 'scale(0.96)', filter: 'brightness(1.5)', immediate: !0 },
    ia = { opacity: 1, transform: 'scale(1.06) rotateZ(0deg)', filter: 'brightness(1.5)', visibility: 'hidden' },
    ra = { opacity: 1, transform: 'scale(1) rotateZ(0deg)', filter: 'brightness(1)', visibility: 'visible' },
    oa = { opacity: 0, display: 'flex' },
    na = { display: 'none' },
    ca = { display: 'flex' },
    la = () => ({
        to: { opacity: 1, transform: 'scale(1.02)', filter: 'brightness(1.5)' },
        config: { duration: 200, easing: U.easeOutCubic },
    }),
    da = (e = 400) => ({
        to: { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
        config: { duration: e, easing: U.easeInOutCubic },
    }),
    ma = (e = 500) => ({
        to: [
            { opacity: 1, transform: 'scale(1.06) rotateZ(0deg)', filter: 'brightness(1.5)', visibility: 'visible' },
            ra,
        ],
        config: { duration: e },
    }),
    ua = {
        extraLarge: {
            rewardWidth: '600rem',
            rewardHeight: '450rem',
            compensationIconWidth: '36rem',
            compensationIconHeight: '36rem',
            countHeight: '36rem',
            nameHeight: '22rem',
            descriptionHeight: '20rem',
            glowSize: '780rem',
            imageSize: J.S600x450,
            rareGlowSize: '780rem',
            rareVideoSize: '512rem',
        },
        large: {
            rewardWidth: '400rem',
            rewardHeight: '300rem',
            compensationIconWidth: '36rem',
            compensationIconHeight: '36rem',
            countHeight: '28rem',
            nameHeight: '18rem',
            descriptionHeight: '16rem',
            glowSize: '520rem',
            imageSize: J.S600x450,
            rareGlowSize: '520rem',
            rareVideoSize: '512rem',
        },
        medium: {
            rewardWidth: '296rem',
            rewardHeight: '222rem',
            compensationIconWidth: '36rem',
            compensationIconHeight: '36rem',
            countHeight: '24rem',
            nameHeight: '18rem',
            descriptionHeight: '16rem',
            glowSize: '386rem',
            imageSize: J.S600x450,
            rareGlowSize: '386rem',
            rareVideoSize: '440rem',
        },
        small: {
            rewardWidth: '232rem',
            rewardHeight: '174rem',
            compensationIconWidth: '24rem',
            compensationIconHeight: '24rem',
            countHeight: '22rem',
            nameHeight: '15rem',
            descriptionHeight: '14rem',
            glowSize: '302rem',
            imageSize: J.S600x450,
            rareGlowSize: '302rem',
            rareVideoSize: '384rem',
        },
        extraSmall: {
            rewardWidth: '180rem',
            rewardHeight: '135rem',
            compensationIconWidth: '24rem',
            compensationIconHeight: '24rem',
            countHeight: '18rem',
            nameHeight: '15rem',
            descriptionHeight: '14rem',
            glowSize: '238rem',
            imageSize: J.S600x450,
            rareGlowSize: '238rem',
            rareVideoSize: '256rem',
        },
    },
    pa = (e, a) => {
        switch (!0) {
            case e === Y.extraLarge.weight && a < 4:
                return ua.extraLarge;
            case (e === Y.extraLarge.weight && a > 3) ||
                (e === Y.medium.weight && a < 4) ||
                (e === Y.large.weight && a < 5):
                return ua.large;
            case (e === Y.large.weight && a > 4) ||
                (e === Y.medium.weight && a < 6 && a > 3) ||
                ((e === Y.small.weight || e === Y.extraSmall.weight) && a < 4):
                return ua.medium;
            case (e === Y.medium.weight && 6 === a) ||
                (e === Y.small.weight && a < 6 && a > 3) ||
                (e === Y.extraSmall.weight && 4 === a):
                return ua.small;
            default:
                return ua.extraSmall;
        }
    },
    ga = (e, a) => {
        switch (!0) {
            case (e >= 3 && 1 === a) || (e >= 4 && [1, e - 2].includes(a)):
                return -40;
            case (5 === e && 2 === a) || (6 === e && [2, e - 3].includes(a)):
                return -80;
            default:
                return 0;
        }
    },
    ha = 'Compensation_db29c4dc',
    xa = 'Compensation_glow_73aacf41',
    wa = 'Compensation_compensationIcon_c9f69818',
    ba = i(function ({ reward: e, index: a, className: t }) {
        const { model: i } = be(),
            n = i.bonuses.get(),
            { images: d, videos: m, sounds: u } = i.computes.resources(),
            {
                breakpoint: { weight: p },
            } = X(),
            [g, h] = c(() => oa),
            [x, w] = c(() => ia),
            [f, y] = c(() => na),
            v = pa(p, n.length),
            j = b(_e);
        return (
            s.useEffect(() => {
                const e = (e) => {
                    switch (e.name) {
                        case Ie(Ne, a).name:
                            (h.start({
                                to: [
                                    { opacity: 0.6, display: 'flex' },
                                    { opacity: 0, display: 'flex' },
                                    { opacity: 0, display: 'none' },
                                ],
                                config: { duration: 1e3 },
                            }),
                                ee.sound(u.compensationAppear));
                            break;
                        case Ie(Re, a).name:
                            (y.start(ca), w.start(ma()));
                    }
                };
                return (
                    j.events.on('change', e),
                    () => {
                        j.events.off('change', e);
                    }
                );
            }, [u, j.events, a]),
            s.useEffect(() => {
                const e = () => {
                    (y.start({ from: { display: 'flex' }, config: { duration: 0 } }), w.start(ma(0)));
                };
                return (
                    j.events.on('skipAll', e),
                    () => {
                        j.events.off('skipAll', e);
                    }
                );
            }, [j.events]),
            r.jsxs(ta.Compensation, {
                className: o(ha, t),
                size: { width: v.rewardWidth, height: v.rewardHeight },
                children: [
                    r.jsx(l.div, {
                        style: { ...g },
                        className: xa,
                        children: r.jsx(ta.Compensation.Glow, {
                            src: m.compensationGlow,
                            size: { width: v.glowSize, height: v.glowSize },
                        }),
                    }),
                    r.jsx(l.div, {
                        style: { ...x, visibility: x.visibility },
                        children: r.jsx(_, {
                            icon: ce(e, J.S600x450, e.isCompensation),
                            sizes: { height: v.rewardHeight, width: v.rewardWidth },
                        }),
                    }),
                    r.jsxs(l.div, {
                        style: { ...f },
                        children: [
                            r.jsx(ta.Compensation.Title, {
                                reward: e.compensation,
                                style: { descriptionFontSize: v.descriptionHeight, labelFontSize: v.nameHeight },
                            }),
                            r.jsx(_, {
                                className: wa,
                                icon: d.compensationIcon,
                                sizes: { height: v.compensationIconHeight, width: v.compensationIconWidth },
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    _a = 'Title_2e63cf3',
    fa = 'Title_text_f2795d1c',
    ya = i(function ({ reward: e, style: a }) {
        const { model: t } = be(),
            { texts: s } = t.computes.resources(),
            { dynamicTexts: i } = t.computes.dynamicResources(),
            { name: o, value: n, label: c, description: l } = e,
            d = ae.resolve('strings'),
            m = (() => {
                switch (!0) {
                    case Boolean(n):
                        return r.jsx(te, {
                            className: fa,
                            upgradeLegacy: !0,
                            split: !0,
                            text: o === le.tmanToken ? s.uniqueTankmanText : c,
                        });
                    case o === le.attachment:
                        return r.jsx(te, {
                            className: fa,
                            upgradeLegacy: !0,
                            split: !0,
                            text: d.readOrEmpty('item_types.customization.attachment.rarity'),
                            params: {
                                rarity: d.readOrEmpty(`vehicle_customization.customization.rarity.${e.overlayType}`),
                            },
                        });
                    default:
                        return r.jsx(te, { className: fa, upgradeLegacy: !0, split: !0, text: l });
                }
            })(),
            u = !0 === Boolean(n) ? (o === le.tmanToken ? c : W(n)) : c,
            p = o === le.premiumPlus;
        return r.jsxs(ta.Title, {
            className: _a,
            children: [
                m &&
                    r.jsx(ta.Title.Description, {
                        style: { fontSize: null == a ? void 0 : a.descriptionFontSize },
                        children: m,
                    }),
                r.jsxs(ta.Title.Label, {
                    rewardType: e.name,
                    style: { fontSize: null == a ? void 0 : a.labelFontSize },
                    children: [
                        r.jsx(te, { className: fa, text: u, upgradeLegacy: !0, split: !0 }),
                        p &&
                            r.jsx(ta.Title.Plural, {
                                rewardType: e.name,
                                text: i.rewardsPremiumDay.plural('premiumDay', Number(n.split(' ').at(-1))),
                                style: { fontSize: null == a ? void 0 : a.labelFontSize },
                            }),
                    ],
                }),
            ],
        });
    }),
    va = 'Card_previewWrapper_58bcc92f',
    ja = 'Card_f4c22d1c',
    Na = 'Card_previewButton_6ec3b3ed',
    Ra = 'Card_previewButton__ready_affac095',
    Sa = 'Card_rareVideo_f4c22d1c',
    Ca = 'Card_rareGlow_abfa6312',
    Ia = 'Card_compensation_60211107',
    Aa = i(function ({ reward: e, index: a }) {
        const { model: t, controls: i } = be(),
            d = t.bonuses.get().length,
            m = t.eventName.get(),
            { images: u, videos: p, texts: g, sounds: w } = t.computes.resources(),
            [_, v] = s.useState(!1),
            {
                breakpoint: { weight: j },
            } = X(),
            N = pa(j, d),
            R = n(x, (e) => e.value),
            [S, C] = c(() => sa),
            [I, A] = c(() => sa),
            T = e.name === se.Vehicles,
            k = j === Y.extraSmall.weight && d > 4,
            z = b(_e);
        (s.useEffect(() => {
            const t = (t) => {
                switch (t.name) {
                    case Ie(ve, a).name:
                        i.setActiveRareReward(e);
                        break;
                    case Ie(je, a).name:
                        v(!0);
                        break;
                    case Ie(fe, a).name:
                        (C.start(la()), A.start(la()), ee.sound(w.rewardAppear));
                        break;
                    case Ie(ye, a).name:
                        (C.start(da()), A.start(da()));
                        break;
                    case Ie(Ne, a).name:
                        C.start({
                            to: [
                                { opacity: 1, transform: 'scale(1) rotateZ(0.25deg)', filter: 'brightness(1.07)' },
                                { opacity: 1, transform: 'scale(1.01) rotateZ(-0.5deg)', filter: 'brightness(1.14)' },
                                { opacity: 1, transform: 'scale(1.02) rotateZ(0.75deg)', filter: 'brightness(1.21)' },
                                { opacity: 1, transform: 'scale(1.03) rotateZ(-0.75deg)', filter: 'brightness(1.28)' },
                                { opacity: 1, transform: 'scale(1.04) rotateZ(1deg)', filter: 'brightness(1.35)' },
                                { opacity: 1, transform: 'scale(1.05) rotateZ(-1deg)', filter: 'brightness(1.42)' },
                                { opacity: 1, transform: 'scale(1.06) rotateZ(0deg)', filter: 'brightness(1.5)' },
                            ],
                            config: { duration: 120 },
                        });
                        break;
                    case Ie(Re, a).name:
                        (C.start({
                            to: { opacity: 0, transform: 'scale(1) rotateZ(0deg)', filter: 'brightness(1)' },
                            config: { duration: 0 },
                        }),
                            A.start({ from: { opacity: 0 }, config: { duration: 0 } }));
                }
            };
            return (
                z.events.on('change', t),
                () => {
                    z.events.off('change', t);
                }
            );
        }, [w, z.events, i, a]),
            s.useEffect(() => {
                const e = () => {
                    (C.start(da(0)), A.start(da(0)));
                };
                return (
                    z.events.on('skipAll', e),
                    () => {
                        z.events.off('skipAll', e);
                    }
                );
            }, [z.events]));
        const { tooltipId: B, tooltipContentId: H } = e,
            V = M({
                contentId: Number(H),
                args: { tooltipId: B, boxCategory: e.icon, eventName: m },
                disabled: R !== h.initial,
            });
        return r.jsxs(ta, {
            ...V,
            style: { marginTop: k ? 0 : `${ga(d, a)}rem` },
            className: ja,
            children: [
                e.isCompensation && r.jsx(ba, { index: a, reward: e, className: Ia }),
                G(e) &&
                    r.jsx(l.div, {
                        style: { opacity: S.opacity, width: N.rareGlowSize, height: N.rareGlowSize },
                        className: Ca,
                        children: r.jsx(ta.RareGlow, { src: p.rareGlow }),
                    }),
                r.jsx(l.div, {
                    style: { ...S },
                    children: r.jsx(f, { reward: e, sizes: N, countText: g.multiplier, currentAnimationState: R }),
                }),
                r.jsx(l.div, {
                    style: { ...I },
                    children: T
                        ? r.jsx(ue, { reward: e, style: N })
                        : r.jsx(ya, {
                              reward: e,
                              style: { descriptionFontSize: N.descriptionHeight, labelFontSize: N.nameHeight },
                          }),
                }),
                $(e) &&
                    !e.isCompensation &&
                    r.jsx(l.div, {
                        className: va,
                        style: { ...I },
                        children: r.jsx(ta.PreviewButton, {
                            image: u.previewIcon,
                            onClick: () =>
                                i.goPreview({ bonusType: e.name, bonusId: e.id ? e.id : '', styleID: e.styleID }),
                            className: o(Na, R === h.initial && Ra),
                        }),
                    }),
                G(e) &&
                    r.jsx(y, {
                        className: Sa,
                        style: { width: N.rareVideoSize, height: N.rareVideoSize },
                        sound: e.rarity === O.Rare ? w.rareAnimation : w.epicAnimation,
                        src: p[e.rarity],
                        show: _,
                        timer: { remainder: 0.4, next: z.resume },
                        onEnded: () => v(!1),
                    }),
            ],
        });
    }),
    Ta = 'RewardList_7f0b73c7',
    ka = 'RewardList_base__small_a45a17be',
    za = (e) => e + 1,
    Ba = i(function ({ className: e, resume: a }) {
        const { model: t, controls: i } = be(),
            { sounds: c } = t.computes.resources(),
            {
                breakpoint: { weight: l },
            } = X(),
            d = t.bonuses.get(),
            m = d.length,
            u = t.extraBonuses.get().length,
            p = l === Y.extraSmall.weight && m > 4,
            [g, _] = s.useState(0),
            f = n(x, (e) => e.value),
            y = b(_e);
        return (
            s.useEffect(() => {
                const e = (e) => {
                    if (e.name === Se) x.send({ type: u > 0 ? w.toExtra : w.toPage });
                };
                return (
                    y.events.on('change', e),
                    () => {
                        y.events.off('change', e);
                    }
                );
            }, [y.events, i, u]),
            s.useEffect(() => {
                switch (v(f)) {
                    case h.skip:
                        y.skipAll();
                        break;
                    case h.preparation:
                        (y.reset(), _(za));
                        break;
                    case h.rewards:
                        y.start();
                }
            }, [f]),
            s.useEffect(() => {
                a.active && (ee.sound(c.rewardAppear), a.reset());
            }, [c, a]),
            r.jsx(
                De,
                {
                    className: o(Ta, p && ka, e),
                    children: Z(d, (e, a) => r.jsx(Aa, { reward: e, index: a }, `reward_${e.name}_${a}`)),
                },
                g,
            )
        );
    }),
    Ha = {
        base: 'Layout_1c0c8eb5',
        base__ready: 'Layout_base__ready_73e4204f',
        overlay: 'Layout_overlay_2156876',
        subtitle: 'Layout_subtitle_f8a07960',
        extraRewards: 'Layout_extraRewards_55183b28',
        rewardsPosition: 'Layout_rewardsPosition_1066384c',
        animations: 'Layout_animations_83d4bf75',
    },
    Va = { opacity: 0 },
    Pa = { opacity: 1 },
    Oa = {
        to: Pa,
        config: { duration: 500, easing: U.easeOutCubic },
        onRest: () => {
            x.send({ type: w.toInitial });
        },
    },
    Ea = i(function () {
        const { model: e, controls: a } = be(),
            {
                boxCategory: t,
                boxesCount: i,
                boxesCountToGuaranteed: d,
                isWindowAccessible: u,
                isShopVisible: g,
            } = e.root.get(),
            _ = e.isAnimationActive.get(),
            { accentCount: f } = e.computes.settings(),
            { texts: y, images: R, sounds: A } = e.computes.resources(),
            { dynamicTexts: T } = e.computes.dynamicResources(),
            k = e.extraBonuses.get().length,
            z = e.activeRareReward.get(),
            B = e.eventName.get(),
            [H, V] = s.useState(!1),
            {
                breakpoint: { weight: P },
            } = X(),
            O = n(x, (e) => e.value),
            [E, L] = c(() => ({ from: Va })),
            G = { boxesToGuaranteed: d, accent: f },
            W = { title: y.guaranteedTitle, nextBox: y.guaranteedNextBox },
            $ = { glow: R.glowIcon, info: R.infoIcon, strongGlow: R.guaranteedGlowIcon };
        s.useEffect(() => {
            switch (v(O)) {
                case j:
                    L.set(Va);
                    break;
                case h.skip:
                    L.set(Pa);
                    break;
                case h.page:
                    L.start(Oa);
            }
        }, [O]);
        const D = { active: H, reset: s.useCallback(() => V(!1), []) },
            F = b(_e),
            q = s.useCallback(() => {
                (a.clearActiveRareReward(), V(!0), F.resume());
            }, [F, a]);
        return r.jsxs(N, {
            className: o(Ha.base, O === h.initial && Ha.base__ready),
            children: [
                Boolean(z) &&
                    p(B, null == z ? void 0 : z.specialAwardName) &&
                    r.jsx(N.Overlay, {
                        className: Ha.overlay,
                        children: r.jsx(S, {
                            res: C(B, null == z ? void 0 : z.specialAwardName),
                            rareBonus: z,
                            texts: y,
                            controls: {
                                onClose: q,
                                onPlay: () => a.setIsVideoPlaying(!0),
                                onEnded: () => a.setIsVideoPlaying(!1),
                            },
                            minimized: !u,
                        }),
                    }),
                r.jsx(l.div, {
                    style: E,
                    className: Ha.animations,
                    children: r.jsxs(N.Header, {
                        children: [
                            r.jsx(m, {
                                title: y.headerTitle,
                                subTitle:
                                    t &&
                                    r.jsx(Q, {
                                        text: y.headerSubtitle,
                                        binding: { name: T.boxCategory.dynOpt(t) },
                                        classMix: Ha.subtitle,
                                    }),
                                className: Ha.header,
                            }),
                            r.jsx(N.CloseButton, { text: y.closeButton, onClick: a.close }),
                        ],
                    }),
                }),
                r.jsxs(N.Body, {
                    children: [
                        r.jsx(Ba, { resume: D, className: o(k > 0 && Ha.rewardsPosition) }),
                        k > 0 && r.jsx(We, { className: Ha.extraRewards }),
                    ],
                }),
                r.jsx(l.div, {
                    style: E,
                    className: Ha.animations,
                    children: r.jsxs(N.Footer, {
                        className: Ha.footer,
                        children: [
                            d > 0 && r.jsx(me, { counts: G, texts: W, icons: $, eventName: B, category: t }),
                            ie.isHigh() &&
                                r.jsx(N.Checkbox, {
                                    isActive: _,
                                    onClick: () => {
                                        a.toggleAnimationState(_);
                                    },
                                    text: y.checkbox,
                                    size: P >= Y.medium.weight ? re.extraLarge : re.large,
                                }),
                            r.jsx(I, {
                                texts: y,
                                images: R,
                                actions: {
                                    ...a,
                                    openNext: () => {
                                        x.send({ type: w.toPreparation });
                                    },
                                },
                                sounds: A,
                                boxesCount: i,
                                isShopVisible: g,
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    La = 'App_loaderWrapper_a177675d',
    Ga = 'App_0',
    Wa = 'App_background_bb0bfe54',
    $a = i(function () {
        const { model: e, controls: a } = be(),
            { images: t, texts: i } = e.computes.resources(),
            { isWindowAccessible: o } = e.root.get(),
            c = e.isAnimationActive.get(),
            m = e.isAwaitingResponse.get(),
            u = e.computes.hasRareReward(),
            p = e.computes.multimediaResource(),
            g = e.isReopen.get(),
            _ = n(x, (e) => e.value),
            f = b(_e);
        (oe(() => {
            _ === h.initial && a.close();
        }),
            s.useEffect(
                () => (
                    x.start(),
                    () => {
                        x.stop();
                    }
                ),
                [],
            ),
            s.useEffect(() => {
                x.send({ type: w.setAnimationActive, isAnimationActive: c });
            }, [c]),
            A(g, m, _));
        const { loadingStyle: y, contentStyle: j } = T(_, a.openNext);
        return r.jsxs(k, {
            className: Ga,
            ref: f.rootRef,
            children: [
                r.jsx(z, {
                    activeType: u ? d.rare : d.common,
                    minimized: !o,
                    res: p,
                    className: Wa,
                    onPlay: () => a.setIsVideoPlaying(!0),
                    onEnded: () => a.setIsVideoPlaying(!1),
                }),
                v(_) !== B && r.jsx(l.div, { style: j, children: r.jsx(k.Content, { children: r.jsx(Ea, {}) }) }),
                _ === h.waiting &&
                    r.jsx(l.div, {
                        style: y,
                        className: La,
                        children: r.jsx(k.Waiting, { image: t.loader, text: i.loader }),
                    }),
            ],
        });
    }),
    Da = () => r.jsx(we, { options: u.SINGLE_REWARD, children: r.jsx(Te, { children: r.jsx($a, {}) }) });
export { Da as default };
