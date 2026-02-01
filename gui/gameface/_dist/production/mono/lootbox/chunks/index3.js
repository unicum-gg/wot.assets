import { o as e, k as a, f as t, r as s, m as i, j as r, e as o, p as n, h as c, i as l } from './vendor.js';
import { b as d, H as m, M as u } from './use_cover_size.js';
import {
    h as p,
    c as g,
    a as h,
    b as w,
    d as x,
    u as b,
    I as _,
    R as y,
    e as f,
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
import { a as H, g as P, C as V, B as O, d as G } from './resources.js';
import { g as E } from './getConfig.js';
import { a as L, g as W, r as $ } from './getRewardImage.js';
import { a as D, f as F, h as q, b as M, i as X } from './utils.js';
import {
    i as Y,
    c as U,
    q as J,
    m as K,
    u as Q,
    Y as Z,
    a1 as ee,
    $ as ae,
    I as te,
    a3 as se,
    k as ie,
    ac as re,
    n as oe,
    j as ne,
    F as ce,
    R as le,
    P as de,
    _ as me,
    d as ue,
} from './lib.js';
import { S as pe } from './sounds.js';
import { G as ge } from './guaranteed.js';
import { T as he } from './tank_name.js';
import { L as we } from './loupe_button.js';
import './title.js';
import './quantity_title.js';
import './vehicle_info.js';
import './title2.js';
const xe = {
        rewardAppear: pe.rewardAppear,
        compensationAppear: pe.compensationAppear,
        rareAnimation: pe.rareAnimation,
        epicAnimation: pe.epicAnimation,
        open: pe.open,
        openRare: pe.openRare,
        purchaseHover: pe.purchaseHover,
        purchaseClick: pe.purchaseClick,
    },
    be = {
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
            commonGlow: 'awardViews.commonGlow',
            compensationParticles: 'awardViews.compensationParticles',
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
        sounds: xe,
    },
    _e = {
        dynamicVideos: { boxesOpening: 'awardViews.openingBoxVideo' },
        dynamicTexts: { rewardsPremiumDay: 'common.rewards.premiumDay', boxCategory: 'common.boxCategory.lowerCase' },
        dynamicImages: { boxesOpening: 'awardViews.openingBox' },
    },
    [ye, fe] = Y()(
        ({ observableModel: t }) => {
            const s = {
                    root: t.object(),
                    ...t.primitives(['eventName', 'isAnimationActive', 'isAwaitingResponse', 'isReopen']),
                    bonuses: t.arrayClone('bonuses.items'),
                    extraBonuses: t.arrayClone('extraBonuses.items'),
                    activeRareReward: e.box(null),
                },
                i = a(() => H(be, s.root.get().eventName), { equals: U }),
                r = a(() => P(_e, s.root.get().eventName), { equals: U }),
                o = a(() => E(s.root.get().eventName, V.Rewards), { equals: U }),
                n = a(() => J(s.bonuses.get(), (e) => D(e)), { equals: U }),
                c = a(() => {
                    const { boxCategory: e } = s.root.get(),
                        a = `${e}_${O.Common}`,
                        t = `${e}_${O.Rare}`,
                        o = r().dynamicVideos.boxesOpening.dynOpt(a, O.Common),
                        n = r().dynamicVideos.boxesOpening.dynOpt(t, O.Rare),
                        c = r().dynamicImages.boxesOpening.dynOpt(a, O.Common),
                        l = r().dynamicImages.boxesOpening.dynOpt(t, O.Rare),
                        m = i().sounds,
                        u = G(L(R.sounds, `${xe.open}_${s.root.get().eventName}_${e}`), m.open, xe.open),
                        p = G(L(R.sounds, `${xe.openRare}_${s.root.get().eventName}_${e}`), m.openRare, xe.openRare);
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
    ve = s.createContext(null),
    je = 'REWARD_IN',
    Ne = 'REWARD_OUT',
    Re = 'OVERLAY_REWARD',
    Se = 'RARE_REWARD',
    Ce = 'TWITCH',
    Ie = 'COMPENSATION',
    Ae = 'FINISH',
    Te = {
        [Re]: { duration: 0, pauseNextSteps: !0 },
        [Se]: { duration: 0, pauseNextSteps: !0 },
        [je]: { duration: 200 },
        [Ne]: { duration: 400 },
        [Ce]: { duration: 2e3 },
        [Ie]: { duration: 1e3, delay: 50 },
        [Ae]: { name: Ae, duration: 0, delay: 500 },
    },
    ke = (e, a) => ({ ...Te[e], name: `animation_${a}_${e}` }),
    ze = (e, a) => {
        const t = [];
        return (
            K(e, (e, s) => {
                const i = D(e),
                    r = p(a, e.specialAwardName);
                if (i) {
                    if (r) return (t.push(ke(Re, s)), void t.push(ke(Ne, s)));
                    t.push(ke(Se, s));
                }
                (t.push(ke(je, s)), t.push(ke(Ne, s)), e.isCompensation && (t.push(ke(Ce, s)), t.push(ke(Ie, s))));
            }),
            t.push(Te.FINISH),
            t
        );
    },
    Be = i(function ({ children: e }) {
        const { model: a } = fe(),
            t = a.eventName.get(),
            s = g({ steps: ze(a.bonuses.get(), t), autoStart: !1 })();
        return r.jsx(ve.Provider, { value: s, children: e });
    }),
    He = 'ExtraReward_d82b07a8';
const Pe = 'ExtraRewards_a358aca3',
    Ve = 'ExtraRewards_extraRewardsWrapper_671c8474',
    Oe = 'ExtraRewards_text_d9072280';
function Ge({ children: e, text: a, className: t }) {
    return r.jsxs('div', {
        className: o(Pe, t),
        children: [r.jsx('div', { className: Oe, children: a }), r.jsx('div', { className: Ve, children: e })],
    });
}
((Ge.Reward = function ({ image: e, className: a }) {
    return r.jsx('div', { className: o(He, a), style: { backgroundImage: `url(${e})` } });
}),
    (Ge.Tooltip = function ({ children: e, contentId: a, tooltipId: t, className: s }) {
        const i = Q({ contentId: a, args: { tooltipId: t } });
        return r.jsx('div', { ...i, className: s, children: e });
    }));
const Ee = 'AdditionRewards_6fbe30c4',
    Le = 'AdditionRewards_extraRewards_d23daaa9',
    We = { opacity: 0, filter: 'brightness(2)' },
    $e = { opacity: 1, filter: 'brightness(1)' },
    De = {
        to: [{ opacity: 1, filter: 'brightness(2)' }, $e],
        config: { duration: 600, easing: ee.easeInOutCubic },
        onRest: () => {
            w.send({ type: x.toPage });
        },
    },
    Fe = i(function ({ className: e }) {
        const { model: a } = fe(),
            {
                breakpoint: { weight: t },
            } = Z(),
            i = n(w, (e) => e.value),
            { texts: d } = a.computes.resources(),
            m = a.extraBonuses.get(),
            [u, p] = c(() => ({ from: We }));
        return (
            s.useEffect(() => {
                switch (i) {
                    case h.skip:
                        p.set($e);
                        break;
                    case h.preparation:
                        p.set(We);
                        break;
                    case h.extra:
                        p.start(De);
                }
            }, [i, p]),
            r.jsx(l.div, {
                style: u,
                className: o(Ee, e),
                children: r.jsx(Ge, {
                    text: d.extraRewardText,
                    className: Le,
                    children: K(m, (e, a) =>
                        r.jsx(
                            Ge.Tooltip,
                            {
                                contentId: Number(e.tooltipContentId),
                                tooltipId: e.tooltipId,
                                children: r.jsx(Ge.Reward, { image: W(e, t >= ae.medium.weight ? te.Big : te.Small) }),
                            },
                            a + e.name,
                        ),
                    ),
                }),
            })
        );
    }),
    qe = 'Rewards_deed6d51';
function Me({ children: e, className: a }) {
    return r.jsx('div', { className: o(qe, a), children: e });
}
const Xe = {
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
const Ye = 'Compensation_22c7fec0';
function Ue({ children: e, size: a, className: t }) {
    return r.jsx('div', { className: o(Ye, t), style: { width: a.width, height: a.height }, children: e });
}
((Ue.Glow = function ({ src: e, size: a, className: t }) {
    return r.jsx(se, { className: t, style: { width: a.width, height: a.height }, src: e, autoplay: !0, loop: !0 });
}),
    (Ue.Title = function ({ reward: e, style: a, className: t = '' }) {
        const { name: s, label: i, value: n } = e;
        return r.jsxs('div', {
            className: o(Xe.base, Xe[`base__${s}`], t),
            children: [
                r.jsx('div', {
                    className: Xe.label,
                    style: { fontSize: null == a ? void 0 : a.labelFontSize },
                    children: i,
                }),
                r.jsx('div', {
                    className: Xe.description,
                    style: { fontSize: null == a ? void 0 : a.descriptionFontSize },
                    children: r.jsx(ie, { text: F(n) }),
                }),
            ],
        });
    }));
const Je = 'PreviewButton_fdc3bedf';
const Ke = 'RareGlow_c6e2840e',
    Qe = 'RareGlow_video_c4cd6073';
const Ze = 'Description_2b53c101';
const ea = {
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
const aa = {
    root: 'Plural_root_e8c3c4d2',
    base: 'Plural_58fd981',
    base__premium_plus: 'Plural_base__premium_plus_c2532b49',
    fadeIn: 'Plural_fadeIn_e8c3c4d2',
};
const ta = 'Title_60f02b6b';
function sa({ children: e, className: a }) {
    return r.jsx('div', { className: o(ta, a), children: e });
}
((sa.Description = function ({ children: e, style: a, className: t }) {
    return r.jsx('div', { className: o(Ze, t), style: a, children: e });
}),
    (sa.Label = function ({ children: e, rewardType: a, style: t, className: s }) {
        return r.jsx('div', { className: o(ea.base, ea[`base__${a}`], s), style: t, children: e });
    }),
    (sa.Plural = function ({ text: e, rewardType: a, style: t, className: s }) {
        return r.jsx('span', { className: o(aa.base, aa[`base__${a}`], s), style: t, children: e });
    }));
const ia = 'RewardCard_ecfc0889';
function ra({ children: e, className: a, ...t }) {
    return r.jsx('div', { className: o(ia, a), ...t, children: e });
}
((ra.PreviewButton = function ({ image: e, onClick: a, className: t }) {
    return r.jsx('div', { className: o(Je, t), children: r.jsx(we, { icon: { img: e }, onClick: a }) });
}),
    (ra.RareGlow = function ({ src: e, className: a }) {
        return r.jsx('div', {
            className: o(Ke, a),
            children: r.jsx(se, { className: Qe, src: e, autoplay: !0, loop: !0 }),
        });
    }),
    (ra.Title = sa),
    (ra.Compensation = Ue));
const oa = { opacity: 0, transform: 'scale(0.96)', filter: 'brightness(1.5)', immediate: !0 },
    na = { opacity: 1, transform: 'scale(1.4)', filter: 'brightness(3)', visibility: 'hidden' },
    ca = { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)', visibility: 'visible' },
    la = { opacity: 0, display: 'flex' },
    da = { display: 'none' },
    ma = { opacity: 0 },
    ua = { display: 'flex' },
    pa = () => ({
        to: { opacity: 1, transform: 'scale(1.02)', filter: 'brightness(1.5)' },
        config: { duration: 200, easing: ee.easeOutCubic },
    }),
    ga = (e = 200) => ({ to: { opacity: 1 }, config: { duration: e, easing: ee.easeOutCubic } }),
    ha = (e = 400) => ({
        to: { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
        config: { duration: e, easing: ee.easeInOutCubic },
    }),
    wa = (e = 500) => ({
        to: [{ opacity: 1, transform: 'scale(1.4)', filter: 'brightness(3)', visibility: 'visible' }, ca],
        config: { duration: e, easing: ee.easeOutCirc },
    }),
    xa = {
        extraLarge: {
            rewardWidth: '600rem',
            rewardHeight: '450rem',
            compensationIconWidth: '36rem',
            compensationIconHeight: '36rem',
            countHeight: '36rem',
            nameHeight: '22rem',
            descriptionHeight: '20rem',
            compensationGlowSize: '780rem',
            imageSize: te.S600x450,
            glowSize: '780rem',
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
            compensationGlowSize: '520rem',
            imageSize: te.S600x450,
            glowSize: '520rem',
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
            compensationGlowSize: '386rem',
            imageSize: te.S600x450,
            glowSize: '386rem',
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
            compensationGlowSize: '302rem',
            imageSize: te.S600x450,
            glowSize: '302rem',
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
            compensationGlowSize: '238rem',
            imageSize: te.S600x450,
            glowSize: '238rem',
            rareVideoSize: '256rem',
        },
    },
    ba = (e, a) => {
        switch (!0) {
            case e === ae.extraLarge.weight && a < 4:
                return xa.extraLarge;
            case (e === ae.extraLarge.weight && a > 3) ||
                (e === ae.medium.weight && a < 4) ||
                (e === ae.large.weight && a < 5):
                return xa.large;
            case (e === ae.large.weight && a > 4) ||
                (e === ae.medium.weight && a < 6 && a > 3) ||
                ((e === ae.small.weight || e === ae.extraSmall.weight) && a < 4):
                return xa.medium;
            case (e === ae.medium.weight && 6 === a) ||
                (e === ae.small.weight && a < 6 && a > 3) ||
                (e === ae.extraSmall.weight && 4 === a):
                return xa.small;
            default:
                return xa.extraSmall;
        }
    },
    _a = (e, a) => {
        switch (!0) {
            case (e >= 3 && 1 === a) || (e >= 4 && [1, e - 2].includes(a)):
                return -40;
            case (5 === e && 2 === a) || (6 === e && [2, e - 3].includes(a)):
                return -80;
            default:
                return 0;
        }
    },
    ya = 'Compensation_db29c4dc',
    fa = 'Compensation_glow_db29c4dc',
    va = 'Compensation_particles_6a26f8c1',
    ja = 'Compensation_compensationIcon_c9f69818',
    Na = i(function ({ reward: e, index: a, className: t }) {
        const { model: i } = fe(),
            n = i.bonuses.get(),
            { images: d, videos: m, sounds: u } = i.computes.resources(),
            {
                breakpoint: { weight: p },
            } = Z(),
            g = s.useRef(null),
            [h, w] = c(() => la),
            [x, y] = c(() => na),
            [f, v] = c(() => da),
            j = ba(p, n.length),
            N = b(ve);
        return (
            s.useEffect(() => {
                const e = (e) => {
                    var t;
                    switch (e.name) {
                        case ke(Ce, a).name:
                            (w.start({
                                to: [
                                    { opacity: 1, display: 'flex' },
                                    { opacity: 0, display: 'none', config: { duration: 0 } },
                                ],
                                config: { duration: 2e3 },
                            }),
                                oe.sound(u.compensationAppear),
                                null == (t = g.current) || t.play());
                            break;
                        case ke(Ie, a).name:
                            (v.start(ua), y.start(wa()));
                    }
                };
                return (
                    N.events.on('change', e),
                    () => {
                        N.events.off('change', e);
                    }
                );
            }, [u, N.events, a]),
            s.useEffect(() => {
                const e = () => {
                    (v.start({ from: { display: 'flex' }, config: { duration: 0 } }), y.start(wa(0)));
                };
                return (
                    N.events.on('skipAll', e),
                    () => {
                        N.events.off('skipAll', e);
                    }
                );
            }, [N.events]),
            r.jsxs(ra.Compensation, {
                className: o(ya, t),
                size: { width: j.rewardWidth, height: j.rewardHeight },
                children: [
                    r.jsx(l.div, {
                        style: { ...h },
                        className: fa,
                        children: r.jsx(ra.Compensation.Glow, {
                            src: m.compensationGlow,
                            size: { width: j.compensationGlowSize, height: j.compensationGlowSize },
                        }),
                    }),
                    r.jsx(re, {
                        ref: g,
                        className: va,
                        style: { width: j.compensationGlowSize, height: j.compensationGlowSize },
                        src: m.compensationParticles,
                    }),
                    r.jsx(l.div, {
                        style: { ...x, visibility: x.visibility },
                        children: r.jsx(_, {
                            icon: W(e, te.S600x450, e.isCompensation),
                            sizes: { height: j.rewardHeight, width: j.rewardWidth },
                        }),
                    }),
                    r.jsxs(l.div, {
                        style: { ...f },
                        children: [
                            r.jsx(ra.Compensation.Title, {
                                reward: e.compensation,
                                style: { descriptionFontSize: j.descriptionHeight, labelFontSize: j.nameHeight },
                            }),
                            r.jsx(_, {
                                className: ja,
                                icon: d.compensationIcon,
                                sizes: { height: j.compensationIconHeight, width: j.compensationIconWidth },
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    Ra = 'Title_2e63cf3',
    Sa = 'Title_text_f2795d1c',
    Ca = i(function ({ reward: e, style: a }) {
        const { model: t } = fe(),
            { texts: s } = t.computes.resources(),
            { dynamicTexts: i } = t.computes.dynamicResources(),
            { name: o, value: n, label: c, description: l } = e,
            d = ne.resolve('strings'),
            m = (() => {
                switch (!0) {
                    case Boolean(n):
                        return r.jsx(ce, {
                            className: Sa,
                            upgradeLegacy: !0,
                            split: !0,
                            text: o === $.tmanToken ? s.uniqueTankmanText : c,
                        });
                    case o === $.attachment:
                        return r.jsx(ce, {
                            className: Sa,
                            upgradeLegacy: !0,
                            split: !0,
                            text: d.readOrEmpty('item_types.customization.attachment.rarity'),
                            params: {
                                rarity: d.readOrEmpty(`vehicle_customization.customization.rarity.${e.overlayType}`),
                            },
                        });
                    default:
                        return r.jsx(ce, { className: Sa, upgradeLegacy: !0, split: !0, text: l });
                }
            })(),
            u = !0 === Boolean(n) ? (o === $.tmanToken ? c : F(n)) : c,
            p = o === $.premiumPlus;
        return r.jsxs(ra.Title, {
            className: Ra,
            children: [
                m &&
                    r.jsx(ra.Title.Description, {
                        style: { fontSize: null == a ? void 0 : a.descriptionFontSize },
                        children: m,
                    }),
                r.jsxs(ra.Title.Label, {
                    rewardType: e.name,
                    style: { fontSize: null == a ? void 0 : a.labelFontSize },
                    children: [
                        r.jsx(ce, { className: Sa, text: u, upgradeLegacy: !0, split: !0 }),
                        p &&
                            r.jsx(ra.Title.Plural, {
                                rewardType: e.name,
                                text: i.rewardsPremiumDay.plural('premiumDay', Number(n.split(' ').at(-1))),
                                style: { fontSize: null == a ? void 0 : a.labelFontSize },
                            }),
                    ],
                }),
            ],
        });
    }),
    Ia = 'Card_previewWrapper_58bcc92f',
    Aa = 'Card_f4c22d1c',
    Ta = 'Card_previewButton_6ec3b3ed',
    ka = 'Card_previewButton__ready_affac095',
    za = 'Card_rareVideo_f4c22d1c',
    Ba = 'Card_glow_951fb0ef',
    Ha = 'Card_compensation_60211107',
    Pa = i(function ({ reward: e, index: a }) {
        const { model: t, controls: i } = fe(),
            d = t.bonuses.get().length,
            m = t.eventName.get(),
            { images: u, videos: p, texts: g, sounds: x } = t.computes.resources(),
            [_, v] = s.useState(!1),
            {
                breakpoint: { weight: j },
            } = Z(),
            N = ba(j, d),
            R = n(w, (e) => e.value),
            [S, C] = c(() => oa),
            [I, A] = c(() => oa),
            [T, k] = c(() => ma),
            z = e.name === le.Vehicles,
            B = j === ae.extraSmall.weight && d > 4,
            H = b(ve);
        (s.useEffect(() => {
            const t = (t) => {
                switch (t.name) {
                    case ke(Re, a).name:
                        i.setActiveRareReward(e);
                        break;
                    case ke(Se, a).name:
                        v(!0);
                        break;
                    case ke(je, a).name:
                        (C.start(pa()), A.start(pa()), k.start(ga()), oe.sound(x.rewardAppear));
                        break;
                    case ke(Ne, a).name:
                        (C.start(ha()), k.start(ga()), A.start(ha()));
                        break;
                    case ke(Ce, a).name:
                        C.start({
                            to: { opacity: 1, transform: 'scale(1.15)', filter: 'brightness(3)' },
                            config: { duration: 2500, easing: ee.linear },
                        });
                        break;
                    case ke(Ie, a).name:
                        (C.start({
                            to: { opacity: 0, transform: 'scale(1)', filter: 'brightness(1)' },
                            config: { duration: 0 },
                        }),
                            A.start({ from: { opacity: 0 }, config: { duration: 0 } }));
                }
            };
            return (
                H.events.on('change', t),
                () => {
                    H.events.off('change', t);
                }
            );
        }, [x, H.events, i, a]),
            s.useEffect(() => {
                const e = () => {
                    (C.start(ha(0)), A.start(ha(0)), k.start(ga(0)));
                };
                return (
                    H.events.on('skipAll', e),
                    () => {
                        H.events.off('skipAll', e);
                    }
                );
            }, [H.events]));
        const { tooltipId: P, tooltipContentId: V, rarity: G } = e,
            E = Q({
                contentId: Number(V),
                args: { tooltipId: P, boxCategory: e.icon, eventName: m },
                disabled: R !== h.initial,
            }),
            L = q(G) ? p.rareGlow : M(G) ? p.commonGlow : '';
        return r.jsxs(ra, {
            ...E,
            style: { marginTop: B ? 0 : `${_a(d, a)}rem` },
            className: Aa,
            children: [
                e.isCompensation && r.jsx(Na, { index: a, reward: e, className: Ha }),
                Boolean(L) &&
                    r.jsx(l.div, {
                        style: { opacity: T.opacity, width: N.glowSize, height: N.glowSize },
                        className: Ba,
                        children: r.jsx(ra.RareGlow, { src: L }),
                    }),
                r.jsx(l.div, {
                    style: { ...S },
                    children: r.jsx(y, { reward: e, sizes: N, countText: g.multiplier, currentAnimationState: R }),
                }),
                r.jsx(l.div, {
                    style: { ...I },
                    children: z
                        ? r.jsx(he, { reward: e, style: N })
                        : r.jsx(Ca, {
                              reward: e,
                              style: { descriptionFontSize: N.descriptionHeight, labelFontSize: N.nameHeight },
                          }),
                }),
                X(e) &&
                    !e.isCompensation &&
                    r.jsx(l.div, {
                        className: Ia,
                        style: { ...I },
                        children: r.jsx(ra.PreviewButton, {
                            image: u.previewIcon,
                            onClick: () =>
                                i.goPreview({ bonusType: e.name, bonusId: e.id ? e.id : '', styleID: e.styleID }),
                            className: o(Ta, R === h.initial && ka),
                        }),
                    }),
                D(e) &&
                    r.jsx(f, {
                        className: za,
                        style: { width: N.rareVideoSize, height: N.rareVideoSize },
                        sound: e.rarity === O.Rare ? x.rareAnimation : x.epicAnimation,
                        src: p[e.rarity],
                        show: _,
                        timer: { remainder: 0.4, next: H.resume },
                        onEnded: () => v(!1),
                    }),
            ],
        });
    }),
    Va = 'RewardList_7f0b73c7',
    Oa = 'RewardList_base__small_a45a17be',
    Ga = (e) => e + 1,
    Ea = i(function ({ className: e, resume: a }) {
        const { model: t, controls: i } = fe(),
            { sounds: c } = t.computes.resources(),
            {
                breakpoint: { weight: l },
            } = Z(),
            d = t.bonuses.get(),
            m = d.length,
            u = t.extraBonuses.get().length,
            p = l === ae.extraSmall.weight && m > 4,
            [g, _] = s.useState(0),
            y = n(w, (e) => e.value),
            f = b(ve);
        return (
            s.useEffect(() => {
                const e = (e) => {
                    if (e.name === Ae) w.send({ type: u > 0 ? x.toExtra : x.toPage });
                };
                return (
                    f.events.on('change', e),
                    () => {
                        f.events.off('change', e);
                    }
                );
            }, [f.events, i, u]),
            s.useEffect(() => {
                switch (v(y)) {
                    case h.skip:
                        f.skipAll();
                        break;
                    case h.preparation:
                        (f.reset(), _(Ga));
                        break;
                    case h.rewards:
                        f.start();
                }
            }, [y]),
            s.useEffect(() => {
                a.active && (oe.sound(c.rewardAppear), a.reset());
            }, [c, a]),
            r.jsx(
                Me,
                {
                    className: o(Va, p && Oa, e),
                    children: K(d, (e, a) => r.jsx(Pa, { reward: e, index: a }, `reward_${e.name}_${a}`)),
                },
                g,
            )
        );
    }),
    La = {
        base: 'Layout_1c0c8eb5',
        base__ready: 'Layout_base__ready_73e4204f',
        overlay: 'Layout_overlay_2156876',
        subtitle: 'Layout_subtitle_f8a07960',
        extraRewards: 'Layout_extraRewards_55183b28',
        rewardsPosition: 'Layout_rewardsPosition_1066384c',
        animations: 'Layout_animations_83d4bf75',
    },
    Wa = { opacity: 0 },
    $a = { opacity: 1 },
    Da = {
        to: $a,
        config: { duration: 500, easing: ee.easeOutCubic },
        onRest: () => {
            w.send({ type: x.toInitial });
        },
    },
    Fa = i(function () {
        const { model: e, controls: a } = fe(),
            {
                boxCategory: t,
                boxesCount: i,
                boxesCountToGuaranteed: d,
                isWindowAccessible: u,
                isShopVisible: p,
            } = e.root.get(),
            g = e.isAnimationActive.get(),
            { accentCount: _ } = e.computes.settings(),
            { texts: y, images: f, sounds: R } = e.computes.resources(),
            { dynamicTexts: A } = e.computes.dynamicResources(),
            T = e.extraBonuses.get().length,
            k = e.activeRareReward.get(),
            z = e.eventName.get(),
            [B, H] = s.useState(!1),
            {
                breakpoint: { weight: P },
            } = Z(),
            V = n(w, (e) => e.value),
            [O, G] = c(() => ({ from: Wa })),
            E = { boxesToGuaranteed: d, accent: _ },
            L = { title: y.guaranteedTitle, nextBox: y.guaranteedNextBox },
            W = { glow: f.glowIcon, info: f.infoIcon, strongGlow: f.guaranteedGlowIcon };
        s.useEffect(() => {
            switch (v(V)) {
                case j:
                    G.set(Wa);
                    break;
                case h.skip:
                    G.set($a);
                    break;
                case h.page:
                    G.start(Da);
            }
        }, [V]);
        const $ = { active: B, reset: s.useCallback(() => H(!1), []) },
            D = b(ve),
            F = s.useCallback(() => {
                (a.clearActiveRareReward(), H(!0), D.resume());
            }, [D, a]);
        return r.jsxs(N, {
            className: o(La.base, V === h.initial && La.base__ready),
            children: [
                Boolean(k) &&
                    r.jsx(N.Overlay, {
                        className: La.overlay,
                        children: r.jsx(S, {
                            res: C(z, null == k ? void 0 : k.specialAwardName),
                            rareBonus: k,
                            texts: y,
                            controls: {
                                onClose: F,
                                onPlay: () => a.setIsVideoPlaying(!0),
                                onEnded: () => a.setIsVideoPlaying(!1),
                            },
                            minimized: !u,
                        }),
                    }),
                r.jsx(l.div, {
                    style: O,
                    className: La.animations,
                    children: r.jsxs(N.Header, {
                        children: [
                            r.jsx(m, {
                                title: y.headerTitle,
                                subTitle:
                                    t &&
                                    r.jsx(ie, {
                                        text: y.headerSubtitle,
                                        binding: { name: A.boxCategory.dynOpt(t) },
                                        classMix: La.subtitle,
                                    }),
                                className: La.header,
                            }),
                            r.jsx(N.CloseButton, { text: y.closeButton, onClick: a.close }),
                        ],
                    }),
                }),
                r.jsxs(N.Body, {
                    children: [
                        r.jsx(Ea, { resume: $, className: o(T > 0 && La.rewardsPosition) }),
                        T > 0 && r.jsx(Fe, { className: La.extraRewards }),
                    ],
                }),
                r.jsx(l.div, {
                    style: O,
                    className: La.animations,
                    children: r.jsxs(N.Footer, {
                        className: La.footer,
                        children: [
                            d > 0 && r.jsx(ge, { counts: E, texts: L, icons: W, eventName: z, category: t }),
                            de.isHigh() &&
                                r.jsx(N.Checkbox, {
                                    isActive: g,
                                    onClick: () => {
                                        a.toggleAnimationState(g);
                                    },
                                    text: y.checkbox,
                                    size: P >= ae.medium.weight ? me.extraLarge : me.large,
                                }),
                            r.jsx(I, {
                                texts: y,
                                images: f,
                                actions: {
                                    ...a,
                                    openNext: () => {
                                        w.send({ type: x.toPreparation });
                                    },
                                },
                                sounds: R,
                                boxesCount: i,
                                isShopVisible: p,
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    qa = 'App_loaderWrapper_a177675d',
    Ma = 'App_0',
    Xa = 'App_background_bb0bfe54',
    Ya = i(function () {
        const { model: e, controls: a } = fe(),
            { images: t, texts: i } = e.computes.resources(),
            { isWindowAccessible: o } = e.root.get(),
            c = e.isAnimationActive.get(),
            m = e.isAwaitingResponse.get(),
            u = e.computes.hasRareReward(),
            p = e.computes.multimediaResource(),
            g = e.isReopen.get(),
            _ = n(w, (e) => e.value),
            y = b(ve);
        (ue(() => {
            _ === h.initial && a.close();
        }),
            s.useEffect(
                () => (
                    w.start(),
                    () => {
                        w.stop();
                    }
                ),
                [],
            ),
            s.useEffect(() => {
                w.send({ type: x.setAnimationActive, isAnimationActive: c });
            }, [c]),
            A(g, m, _));
        const { loadingStyle: f, contentStyle: j } = T(_, a.openNext);
        return r.jsxs(k, {
            className: Ma,
            ref: y.rootRef,
            children: [
                r.jsx(z, {
                    activeType: u ? d.rare : d.common,
                    minimized: !o,
                    res: p,
                    className: Xa,
                    onPlay: () => a.setIsVideoPlaying(!0),
                    onEnded: () => a.setIsVideoPlaying(!1),
                }),
                v(_) !== B && r.jsx(l.div, { style: j, children: r.jsx(k.Content, { children: r.jsx(Fa, {}) }) }),
                _ === h.waiting &&
                    r.jsx(l.div, {
                        style: f,
                        className: qa,
                        children: r.jsx(k.Waiting, { image: t.loader, text: i.loader }),
                    }),
            ],
        });
    }),
    Ua = () => r.jsx(ye, { options: u.SINGLE_REWARD, children: r.jsx(Be, { children: r.jsx(Ya, {}) }) });
export { Ua as default };
