import { o as e, k as t, f as a, r as s, m as i, j as r, e as o, p as n, h as c, i as l } from './vendor.js';
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
import { a as G, g as W, r as $ } from './getRewardImage.js';
import { a as D, f as F, i as q } from './utils.js';
import {
    i as Z,
    c as M,
    q as X,
    m as Y,
    u as U,
    Y as J,
    a1 as K,
    $ as Q,
    I as ee,
    a3 as te,
    k as ae,
    n as se,
    j as ie,
    F as re,
    R as oe,
    P as ne,
    _ as ce,
    d as le,
} from './lib.js';
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
    [we, be] = Z()(
        ({ observableModel: a }) => {
            const s = {
                    root: a.object(),
                    ...a.primitives(['eventName', 'isAnimationActive', 'isAwaitingResponse', 'isReopen']),
                    bonuses: a.arrayClone('bonuses.items'),
                    extraBonuses: a.arrayClone('extraBonuses.items'),
                    activeRareReward: e.box(null),
                },
                i = t(() => H(he, s.root.get().eventName), { equals: M }),
                r = t(() => V(xe, s.root.get().eventName), { equals: M }),
                o = t(() => L(s.root.get().eventName, P.Rewards), { equals: M }),
                n = t(() => X(s.bonuses.get(), (e) => D(e)), { equals: M }),
                c = t(() => {
                    const { boxCategory: e } = s.root.get(),
                        t = `${e}_${O.Common}`,
                        a = `${e}_${O.Rare}`,
                        o = r().dynamicVideos.boxesOpening.dynOpt(t, O.Common),
                        n = r().dynamicVideos.boxesOpening.dynOpt(a, O.Rare),
                        c = r().dynamicImages.boxesOpening.dynOpt(t, O.Common),
                        l = r().dynamicImages.boxesOpening.dynOpt(a, O.Rare),
                        m = i().sounds,
                        u = E(G(R.sounds, `${ge.open}_${s.root.get().eventName}_${e}`), m.open, ge.open),
                        p = E(G(R.sounds, `${ge.openRare}_${s.root.get().eventName}_${e}`), m.openRare, ge.openRare);
                    return { [d.common]: { video: o, image: c, sound: u }, [d.rare]: { video: n, image: l, sound: p } };
                });
            return {
                ...s,
                computes: { resources: i, dynamicResources: r, settings: o, hasRareReward: n, multimediaResource: c },
            };
        },
        ({ externalModel: e, model: t }) => ({
            goPreview: e.createCallback((e) => e, 'onPreview'),
            openNext: e.createCallbackNoArgs('onOpen'),
            goBack: e.createCallbackNoArgs('onGoBack'),
            close: e.createCallbackNoArgs('onClose'),
            buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
            toggleAnimationState: e.createCallback((e) => ({ isAnimationActive: !e }), 'onAnimationStateChanged'),
            setIsVideoPlaying: e.createCallback((e) => ({ isPlaying: e }), 'onVideoPlaying'),
            setActiveRareReward: a((e) => t.activeRareReward.set(e)),
            clearActiveRareReward: a(() => t.activeRareReward.set(null)),
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
    Ie = (e, t) => ({ ...Ce[e], name: `animation_${t}_${e}` }),
    Ae = (e, t) => {
        const a = [];
        return (
            Y(e, (e, s) => {
                const i = D(e),
                    r = p(t, e.specialAwardName);
                if (i) {
                    if (r) return (a.push(Ie(ve, s)), void a.push(Ie(ye, s)));
                    a.push(Ie(je, s));
                }
                (a.push(Ie(fe, s)), a.push(Ie(ye, s)), e.isCompensation && (a.push(Ie(Ne, s)), a.push(Ie(Re, s))));
            }),
            a.push(Ce.FINISH),
            a
        );
    },
    Te = i(function ({ children: e }) {
        const { model: t } = be(),
            a = t.eventName.get(),
            s = g({ steps: Ae(t.bonuses.get(), a), autoStart: !1 })();
        return r.jsx(_e.Provider, { value: s, children: e });
    }),
    ke = 'ExtraReward_d82b07a8';
const ze = 'ExtraRewards_a358aca3',
    Be = 'ExtraRewards_extraRewardsWrapper_671c8474',
    He = 'ExtraRewards_text_d9072280';
function Ve({ children: e, text: t, className: a }) {
    return r.jsxs('div', {
        className: o(ze, a),
        children: [r.jsx('div', { className: He, children: t }), r.jsx('div', { className: Be, children: e })],
    });
}
((Ve.Reward = function ({ image: e, className: t }) {
    return r.jsx('div', { className: o(ke, t), style: { backgroundImage: `url(${e})` } });
}),
    (Ve.Tooltip = function ({ children: e, contentId: t, tooltipId: a, className: s }) {
        const i = U({ contentId: t, args: { tooltipId: a } });
        return r.jsx('div', { ...i, className: s, children: e });
    }));
const Pe = 'AdditionRewards_6fbe30c4',
    Oe = 'AdditionRewards_extraRewards_d23daaa9',
    Ee = { opacity: 0, filter: 'brightness(2)' },
    Le = { opacity: 1, filter: 'brightness(1)' },
    Ge = {
        to: [{ opacity: 1, filter: 'brightness(2)' }, Le],
        config: { duration: 600, easing: K.easeInOutCubic },
        onRest: () => {
            x.send({ type: w.toPage });
        },
    },
    We = i(function ({ className: e }) {
        const { model: t } = be(),
            {
                breakpoint: { weight: a },
            } = J(),
            i = n(x, (e) => e.value),
            { texts: d } = t.computes.resources(),
            m = t.extraBonuses.get(),
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
                    children: Y(m, (e, t) =>
                        r.jsx(
                            Ve.Tooltip,
                            {
                                contentId: Number(e.tooltipContentId),
                                tooltipId: e.tooltipId,
                                children: r.jsx(Ve.Reward, { image: W(e, a >= Q.medium.weight ? ee.Big : ee.Small) }),
                            },
                            t + e.name,
                        ),
                    ),
                }),
            })
        );
    }),
    $e = 'Rewards_deed6d51';
function De({ children: e, className: t }) {
    return r.jsx('div', { className: o($e, t), children: e });
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
function Ze({ children: e, size: t, className: a }) {
    return r.jsx('div', { className: o(qe, a), style: { width: t.width, height: t.height }, children: e });
}
((Ze.Glow = function ({ src: e, size: t, className: a }) {
    return r.jsx(te, { className: a, style: { width: t.width, height: t.height }, src: e, autoplay: !0, loop: !0 });
}),
    (Ze.Title = function ({ reward: e, style: t, className: a = '' }) {
        const { name: s, label: i, value: n } = e;
        return r.jsxs('div', {
            className: o(Fe.base, Fe[`base__${s}`], a),
            children: [
                r.jsx('div', {
                    className: Fe.label,
                    style: { fontSize: null == t ? void 0 : t.labelFontSize },
                    children: i,
                }),
                r.jsx('div', {
                    className: Fe.description,
                    style: { fontSize: null == t ? void 0 : t.descriptionFontSize },
                    children: r.jsx(ae, { text: F(n) }),
                }),
            ],
        });
    }));
const Me = 'PreviewButton_fdc3bedf';
const Xe = 'RareGlow_c6e2840e',
    Ye = 'RareGlow_video_c4cd6073';
const Ue = 'Description_2b53c101';
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
function et({ children: e, className: t }) {
    return r.jsx('div', { className: o(Qe, t), children: e });
}
((et.Description = function ({ children: e, style: t, className: a }) {
    return r.jsx('div', { className: o(Ue, a), style: t, children: e });
}),
    (et.Label = function ({ children: e, rewardType: t, style: a, className: s }) {
        return r.jsx('div', { className: o(Je.base, Je[`base__${t}`], s), style: a, children: e });
    }),
    (et.Plural = function ({ text: e, rewardType: t, style: a, className: s }) {
        return r.jsx('span', { className: o(Ke.base, Ke[`base__${t}`], s), style: a, children: e });
    }));
const tt = 'RewardCard_ecfc0889';
function at({ children: e, className: t, ...a }) {
    return r.jsx('div', { className: o(tt, t), ...a, children: e });
}
((at.PreviewButton = function ({ image: e, onClick: t, className: a }) {
    return r.jsx('div', { className: o(Me, a), children: r.jsx(pe, { icon: { img: e }, onClick: t }) });
}),
    (at.RareGlow = function ({ src: e, className: t }) {
        return r.jsx('div', {
            className: o(Xe, t),
            children: r.jsx(te, { className: Ye, src: e, autoplay: !0, loop: !0 }),
        });
    }),
    (at.Title = et),
    (at.Compensation = Ze));
const st = { opacity: 0, transform: 'scale(0.96)', filter: 'brightness(1.5)', immediate: !0 },
    it = { opacity: 1, transform: 'scale(1.06) rotateZ(0deg)', filter: 'brightness(1.5)', visibility: 'hidden' },
    rt = { opacity: 1, transform: 'scale(1) rotateZ(0deg)', filter: 'brightness(1)', visibility: 'visible' },
    ot = { opacity: 0, display: 'flex' },
    nt = { display: 'none' },
    ct = { display: 'flex' },
    lt = () => ({
        to: { opacity: 1, transform: 'scale(1.02)', filter: 'brightness(1.5)' },
        config: { duration: 200, easing: K.easeOutCubic },
    }),
    dt = (e = 400) => ({
        to: { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
        config: { duration: e, easing: K.easeInOutCubic },
    }),
    mt = (e = 500) => ({
        to: [
            { opacity: 1, transform: 'scale(1.06) rotateZ(0deg)', filter: 'brightness(1.5)', visibility: 'visible' },
            rt,
        ],
        config: { duration: e },
    }),
    ut = {
        extraLarge: {
            rewardWidth: '600rem',
            rewardHeight: '450rem',
            compensationIconWidth: '36rem',
            compensationIconHeight: '36rem',
            countHeight: '36rem',
            nameHeight: '22rem',
            descriptionHeight: '20rem',
            glowSize: '780rem',
            imageSize: ee.S600x450,
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
            imageSize: ee.S600x450,
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
            imageSize: ee.S600x450,
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
            imageSize: ee.S600x450,
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
            imageSize: ee.S600x450,
            rareGlowSize: '238rem',
            rareVideoSize: '256rem',
        },
    },
    pt = (e, t) => {
        switch (!0) {
            case e === Q.extraLarge.weight && t < 4:
                return ut.extraLarge;
            case (e === Q.extraLarge.weight && t > 3) ||
                (e === Q.medium.weight && t < 4) ||
                (e === Q.large.weight && t < 5):
                return ut.large;
            case (e === Q.large.weight && t > 4) ||
                (e === Q.medium.weight && t < 6 && t > 3) ||
                ((e === Q.small.weight || e === Q.extraSmall.weight) && t < 4):
                return ut.medium;
            case (e === Q.medium.weight && 6 === t) ||
                (e === Q.small.weight && t < 6 && t > 3) ||
                (e === Q.extraSmall.weight && 4 === t):
                return ut.small;
            default:
                return ut.extraSmall;
        }
    },
    gt = (e, t) => {
        switch (!0) {
            case (e >= 3 && 1 === t) || (e >= 4 && [1, e - 2].includes(t)):
                return -40;
            case (5 === e && 2 === t) || (6 === e && [2, e - 3].includes(t)):
                return -80;
            default:
                return 0;
        }
    },
    ht = 'Compensation_db29c4dc',
    xt = 'Compensation_glow_73aacf41',
    wt = 'Compensation_compensationIcon_c9f69818',
    bt = i(function ({ reward: e, index: t, className: a }) {
        const { model: i } = be(),
            n = i.bonuses.get(),
            { images: d, videos: m, sounds: u } = i.computes.resources(),
            {
                breakpoint: { weight: p },
            } = J(),
            [g, h] = c(() => ot),
            [x, w] = c(() => it),
            [f, y] = c(() => nt),
            v = pt(p, n.length),
            j = b(_e);
        return (
            s.useEffect(() => {
                const e = (e) => {
                    switch (e.name) {
                        case Ie(Ne, t).name:
                            (h.start({
                                to: [
                                    { opacity: 0.6, display: 'flex' },
                                    { opacity: 0, display: 'flex' },
                                    { opacity: 0, display: 'none' },
                                ],
                                config: { duration: 1e3 },
                            }),
                                se.sound(u.compensationAppear));
                            break;
                        case Ie(Re, t).name:
                            (y.start(ct), w.start(mt()));
                    }
                };
                return (
                    j.events.on('change', e),
                    () => {
                        j.events.off('change', e);
                    }
                );
            }, [u, j.events, t]),
            s.useEffect(() => {
                const e = () => {
                    (y.start({ from: { display: 'flex' }, config: { duration: 0 } }), w.start(mt(0)));
                };
                return (
                    j.events.on('skipAll', e),
                    () => {
                        j.events.off('skipAll', e);
                    }
                );
            }, [j.events]),
            r.jsxs(at.Compensation, {
                className: o(ht, a),
                size: { width: v.rewardWidth, height: v.rewardHeight },
                children: [
                    r.jsx(l.div, {
                        style: { ...g },
                        className: xt,
                        children: r.jsx(at.Compensation.Glow, {
                            src: m.compensationGlow,
                            size: { width: v.glowSize, height: v.glowSize },
                        }),
                    }),
                    r.jsx(l.div, {
                        style: { ...x, visibility: x.visibility },
                        children: r.jsx(_, {
                            icon: W(e, ee.S600x450, e.isCompensation),
                            sizes: { height: v.rewardHeight, width: v.rewardWidth },
                        }),
                    }),
                    r.jsxs(l.div, {
                        style: { ...f },
                        children: [
                            r.jsx(at.Compensation.Title, {
                                reward: e.compensation,
                                style: { descriptionFontSize: v.descriptionHeight, labelFontSize: v.nameHeight },
                            }),
                            r.jsx(_, {
                                className: wt,
                                icon: d.compensationIcon,
                                sizes: { height: v.compensationIconHeight, width: v.compensationIconWidth },
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    _t = 'Title_2e63cf3',
    ft = 'Title_text_f2795d1c',
    yt = i(function ({ reward: e, style: t }) {
        const { model: a } = be(),
            { texts: s } = a.computes.resources(),
            { dynamicTexts: i } = a.computes.dynamicResources(),
            { name: o, value: n, label: c, description: l } = e,
            d = ie.resolve('strings'),
            m = (() => {
                switch (!0) {
                    case Boolean(n):
                        return r.jsx(re, {
                            className: ft,
                            upgradeLegacy: !0,
                            split: !0,
                            text: o === $.tmanToken ? s.uniqueTankmanText : c,
                        });
                    case o === $.attachment:
                        return r.jsx(re, {
                            className: ft,
                            upgradeLegacy: !0,
                            split: !0,
                            text: d.readOrEmpty('item_types.customization.attachment.rarity'),
                            params: {
                                rarity: d.readOrEmpty(`vehicle_customization.customization.rarity.${e.overlayType}`),
                            },
                        });
                    default:
                        return r.jsx(re, { className: ft, upgradeLegacy: !0, split: !0, text: l });
                }
            })(),
            u = !0 === Boolean(n) ? (o === $.tmanToken ? c : F(n)) : c,
            p = o === $.premiumPlus;
        return r.jsxs(at.Title, {
            className: _t,
            children: [
                m &&
                    r.jsx(at.Title.Description, {
                        style: { fontSize: null == t ? void 0 : t.descriptionFontSize },
                        children: m,
                    }),
                r.jsxs(at.Title.Label, {
                    rewardType: e.name,
                    style: { fontSize: null == t ? void 0 : t.labelFontSize },
                    children: [
                        r.jsx(re, { className: ft, text: u, upgradeLegacy: !0, split: !0 }),
                        p &&
                            r.jsx(at.Title.Plural, {
                                rewardType: e.name,
                                text: i.rewardsPremiumDay.plural('premiumDay', Number(n.split(' ').at(-1))),
                                style: { fontSize: null == t ? void 0 : t.labelFontSize },
                            }),
                    ],
                }),
            ],
        });
    }),
    vt = 'Card_previewWrapper_58bcc92f',
    jt = 'Card_f4c22d1c',
    Nt = 'Card_previewButton_6ec3b3ed',
    Rt = 'Card_previewButton__ready_affac095',
    St = 'Card_rareVideo_f4c22d1c',
    Ct = 'Card_rareGlow_abfa6312',
    It = 'Card_compensation_60211107',
    At = i(function ({ reward: e, index: t }) {
        const { model: a, controls: i } = be(),
            d = a.bonuses.get().length,
            m = a.eventName.get(),
            { images: u, videos: p, texts: g, sounds: w } = a.computes.resources(),
            [_, v] = s.useState(!1),
            {
                breakpoint: { weight: j },
            } = J(),
            N = pt(j, d),
            R = n(x, (e) => e.value),
            [S, C] = c(() => st),
            [I, A] = c(() => st),
            T = e.name === oe.Vehicles,
            k = j === Q.extraSmall.weight && d > 4,
            z = b(_e);
        (s.useEffect(() => {
            const a = (a) => {
                switch (a.name) {
                    case Ie(ve, t).name:
                        i.setActiveRareReward(e);
                        break;
                    case Ie(je, t).name:
                        v(!0);
                        break;
                    case Ie(fe, t).name:
                        (C.start(lt()), A.start(lt()), se.sound(w.rewardAppear));
                        break;
                    case Ie(ye, t).name:
                        (C.start(dt()), A.start(dt()));
                        break;
                    case Ie(Ne, t).name:
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
                    case Ie(Re, t).name:
                        (C.start({
                            to: { opacity: 0, transform: 'scale(1) rotateZ(0deg)', filter: 'brightness(1)' },
                            config: { duration: 0 },
                        }),
                            A.start({ from: { opacity: 0 }, config: { duration: 0 } }));
                }
            };
            return (
                z.events.on('change', a),
                () => {
                    z.events.off('change', a);
                }
            );
        }, [w, z.events, i, t]),
            s.useEffect(() => {
                const e = () => {
                    (C.start(dt(0)), A.start(dt(0)));
                };
                return (
                    z.events.on('skipAll', e),
                    () => {
                        z.events.off('skipAll', e);
                    }
                );
            }, [z.events]));
        const { tooltipId: B, tooltipContentId: H } = e,
            V = U({
                contentId: Number(H),
                args: { tooltipId: B, boxCategory: e.icon, eventName: m },
                disabled: R !== h.initial,
            });
        return r.jsxs(at, {
            ...V,
            style: { marginTop: k ? 0 : `${gt(d, t)}rem` },
            className: jt,
            children: [
                e.isCompensation && r.jsx(bt, { index: t, reward: e, className: It }),
                D(e) &&
                    r.jsx(l.div, {
                        style: { opacity: S.opacity, width: N.rareGlowSize, height: N.rareGlowSize },
                        className: Ct,
                        children: r.jsx(at.RareGlow, { src: p.rareGlow }),
                    }),
                r.jsx(l.div, {
                    style: { ...S },
                    children: r.jsx(f, { reward: e, sizes: N, countText: g.multiplier, currentAnimationState: R }),
                }),
                r.jsx(l.div, {
                    style: { ...I },
                    children: T
                        ? r.jsx(ue, { reward: e, style: N })
                        : r.jsx(yt, {
                              reward: e,
                              style: { descriptionFontSize: N.descriptionHeight, labelFontSize: N.nameHeight },
                          }),
                }),
                q(e) &&
                    !e.isCompensation &&
                    r.jsx(l.div, {
                        className: vt,
                        style: { ...I },
                        children: r.jsx(at.PreviewButton, {
                            image: u.previewIcon,
                            onClick: () =>
                                i.goPreview({ bonusType: e.name, bonusId: e.id ? e.id : '', styleID: e.styleID }),
                            className: o(Nt, R === h.initial && Rt),
                        }),
                    }),
                D(e) &&
                    r.jsx(y, {
                        className: St,
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
    Tt = 'RewardList_7f0b73c7',
    kt = 'RewardList_base__small_a45a17be',
    zt = (e) => e + 1,
    Bt = i(function ({ className: e, resume: t }) {
        const { model: a, controls: i } = be(),
            { sounds: c } = a.computes.resources(),
            {
                breakpoint: { weight: l },
            } = J(),
            d = a.bonuses.get(),
            m = d.length,
            u = a.extraBonuses.get().length,
            p = l === Q.extraSmall.weight && m > 4,
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
                        (y.reset(), _(zt));
                        break;
                    case h.rewards:
                        y.start();
                }
            }, [f]),
            s.useEffect(() => {
                t.active && (se.sound(c.rewardAppear), t.reset());
            }, [c, t]),
            r.jsx(
                De,
                {
                    className: o(Tt, p && kt, e),
                    children: Y(d, (e, t) => r.jsx(At, { reward: e, index: t }, `reward_${e.name}_${t}`)),
                },
                g,
            )
        );
    }),
    Ht = {
        base: 'Layout_1c0c8eb5',
        base__ready: 'Layout_base__ready_73e4204f',
        overlay: 'Layout_overlay_2156876',
        subtitle: 'Layout_subtitle_f8a07960',
        extraRewards: 'Layout_extraRewards_55183b28',
        rewardsPosition: 'Layout_rewardsPosition_1066384c',
        animations: 'Layout_animations_83d4bf75',
    },
    Vt = { opacity: 0 },
    Pt = { opacity: 1 },
    Ot = {
        to: Pt,
        config: { duration: 500, easing: K.easeOutCubic },
        onRest: () => {
            x.send({ type: w.toInitial });
        },
    },
    Et = i(function () {
        const { model: e, controls: t } = be(),
            {
                boxCategory: a,
                boxesCount: i,
                boxesCountToGuaranteed: d,
                isWindowAccessible: u,
                isShopVisible: p,
            } = e.root.get(),
            g = e.isAnimationActive.get(),
            { accentCount: _ } = e.computes.settings(),
            { texts: f, images: y, sounds: R } = e.computes.resources(),
            { dynamicTexts: A } = e.computes.dynamicResources(),
            T = e.extraBonuses.get().length,
            k = e.activeRareReward.get(),
            z = e.eventName.get(),
            [B, H] = s.useState(!1),
            {
                breakpoint: { weight: V },
            } = J(),
            P = n(x, (e) => e.value),
            [O, E] = c(() => ({ from: Vt })),
            L = { boxesToGuaranteed: d, accent: _ },
            G = { title: f.guaranteedTitle, nextBox: f.guaranteedNextBox },
            W = { glow: y.glowIcon, info: y.infoIcon, strongGlow: y.guaranteedGlowIcon };
        s.useEffect(() => {
            switch (v(P)) {
                case j:
                    E.set(Vt);
                    break;
                case h.skip:
                    E.set(Pt);
                    break;
                case h.page:
                    E.start(Ot);
            }
        }, [P]);
        const $ = { active: B, reset: s.useCallback(() => H(!1), []) },
            D = b(_e),
            F = s.useCallback(() => {
                (t.clearActiveRareReward(), H(!0), D.resume());
            }, [D, t]);
        return r.jsxs(N, {
            className: o(Ht.base, P === h.initial && Ht.base__ready),
            children: [
                Boolean(k) &&
                    r.jsx(N.Overlay, {
                        className: Ht.overlay,
                        children: r.jsx(S, {
                            res: C(z, null == k ? void 0 : k.specialAwardName),
                            rareBonus: k,
                            texts: f,
                            controls: {
                                onClose: F,
                                onPlay: () => t.setIsVideoPlaying(!0),
                                onEnded: () => t.setIsVideoPlaying(!1),
                            },
                            minimized: !u,
                        }),
                    }),
                r.jsx(l.div, {
                    style: O,
                    className: Ht.animations,
                    children: r.jsxs(N.Header, {
                        children: [
                            r.jsx(m, {
                                title: f.headerTitle,
                                subTitle:
                                    a &&
                                    r.jsx(ae, {
                                        text: f.headerSubtitle,
                                        binding: { name: A.boxCategory.dynOpt(a) },
                                        classMix: Ht.subtitle,
                                    }),
                                className: Ht.header,
                            }),
                            r.jsx(N.CloseButton, { text: f.closeButton, onClick: t.close }),
                        ],
                    }),
                }),
                r.jsxs(N.Body, {
                    children: [
                        r.jsx(Bt, { resume: $, className: o(T > 0 && Ht.rewardsPosition) }),
                        T > 0 && r.jsx(We, { className: Ht.extraRewards }),
                    ],
                }),
                r.jsx(l.div, {
                    style: O,
                    className: Ht.animations,
                    children: r.jsxs(N.Footer, {
                        className: Ht.footer,
                        children: [
                            d > 0 && r.jsx(me, { counts: L, texts: G, icons: W, eventName: z, category: a }),
                            ne.isHigh() &&
                                r.jsx(N.Checkbox, {
                                    isActive: g,
                                    onClick: () => {
                                        t.toggleAnimationState(g);
                                    },
                                    text: f.checkbox,
                                    size: V >= Q.medium.weight ? ce.extraLarge : ce.large,
                                }),
                            r.jsx(I, {
                                texts: f,
                                images: y,
                                actions: {
                                    ...t,
                                    openNext: () => {
                                        x.send({ type: w.toPreparation });
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
    Lt = 'App_loaderWrapper_a177675d',
    Gt = 'App_0',
    Wt = 'App_background_bb0bfe54',
    $t = i(function () {
        const { model: e, controls: t } = be(),
            { images: a, texts: i } = e.computes.resources(),
            { isWindowAccessible: o } = e.root.get(),
            c = e.isAnimationActive.get(),
            m = e.isAwaitingResponse.get(),
            u = e.computes.hasRareReward(),
            p = e.computes.multimediaResource(),
            g = e.isReopen.get(),
            _ = n(x, (e) => e.value),
            f = b(_e);
        (le(() => {
            _ === h.initial && t.close();
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
        const { loadingStyle: y, contentStyle: j } = T(_, t.openNext);
        return r.jsxs(k, {
            className: Gt,
            ref: f.rootRef,
            children: [
                r.jsx(z, {
                    activeType: u ? d.rare : d.common,
                    minimized: !o,
                    res: p,
                    className: Wt,
                    onPlay: () => t.setIsVideoPlaying(!0),
                    onEnded: () => t.setIsVideoPlaying(!1),
                }),
                v(_) !== B && r.jsx(l.div, { style: j, children: r.jsx(k.Content, { children: r.jsx(Et, {}) }) }),
                _ === h.waiting &&
                    r.jsx(l.div, {
                        style: y,
                        className: Lt,
                        children: r.jsx(k.Waiting, { image: a.loader, text: i.loader }),
                    }),
            ],
        });
    }),
    Dt = () => r.jsx(we, { options: u.SINGLE_REWARD, children: r.jsx(Te, { children: r.jsx($t, {}) }) });
export { Dt as default };
