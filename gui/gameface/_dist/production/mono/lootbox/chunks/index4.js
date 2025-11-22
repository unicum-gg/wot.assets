import { o as e, k as a, f as s, r as t, m as i, j as r, e as n, h as o, i as c, p as l } from './vendor.js';
import { b as d, H as m, M as u } from './use_cover_size.js';
import {
    h as p,
    c as _,
    k as g,
    u as f,
    I as b,
    a as h,
    R as w,
    e as y,
    b as x,
    s as v,
    C as N,
    f as C,
    r as j,
    F as A,
    d as I,
    g as O,
    i as k,
    P as T,
    B,
    j as P,
} from './reward.js';
import { a as V, g as S } from './getRewardImage.js';
import { a as E, g as D, B as $, d as L } from './resources.js';
import { a as H, f as W, i as q } from './utils.js';
import {
    i as z,
    c as G,
    q as X,
    t as Z,
    m as M,
    a3 as F,
    k as U,
    a1 as Y,
    R as J,
    I as K,
    n as Q,
    u as ee,
    Y as ae,
    P as se,
    _ as te,
    $ as ie,
    d as re,
} from './lib.js';
import { S as ne } from './sounds.js';
import { L as oe } from './loupe_button.js';
import './title.js';
import './quantity_title.js';
import './vehicle_info.js';
const ce = {
        multiRewardAppear: ne.multiRewardAppear,
        compensationAppear: ne.compensationAppear,
        rareAnimation: ne.rareAnimation,
        epicAnimation: ne.epicAnimation,
        open: ne.open,
        openRare: ne.openRare,
        purchaseHover: ne.purchaseHover,
        purchaseClick: ne.purchaseClick,
    },
    le = {
        images: {
            iconEmpty: 'entry_point.lootboxEmpty',
            previewIcon: 'awardViews.previewIcon',
            compensationIcon: 'awardViews.compensationIcon',
            loader: 'common.waiting',
        },
        videos: {
            compensationGlow: 'awardViews.compensationGlow',
            rareGlow: 'awardViews.rareGlow',
            rare: 'awardViews.raritySimpleAnimations.rare_small',
            epic: 'awardViews.raritySimpleAnimations.epic_small',
        },
        texts: {
            closeButton: 'common.closeButton',
            multiplier: 'common.rewards.multiplier',
            headerTitle: 'multipleRewardView.header.title',
            headerSubtitle: 'multipleRewardView.header.subTitle',
            quantityAvailableTitle: 'quantityTitle.boxesAvailable',
            quantityNoBoxesTitle: 'quantityTitle.noBoxes',
            checkbox: 'common.footer.checkbox',
            footerBackButton: 'awardViews.footer.backButton',
            footerPurchaseButtonText: 'common.getButton.upperCase',
            footerOpenNextButton: 'multipleRewardView.footer.openNextButton',
            loader: 'common.loader',
            rareOverlayButtonContinue: 'rareRewardOverlay.rewardDescription.button.text',
            rareOverlayTitle: 'rareRewardOverlay.rewardDescription.title.text',
            rareOverlayStyleTitle: 'rareRewardOverlay.rewardDescription.style.text',
            rareOverlayStyleDescription: 'rareRewardOverlay.rewardDescription.style.description.text',
        },
        sounds: ce,
    },
    de = {
        dynamicVideos: { boxesOpening: 'awardViews.openingBoxVideo' },
        dynamicTexts: { rewardsPremiumDay: 'common.rewards.premiumDay', boxCategory: 'common.boxCategory.lowerCase' },
        dynamicImages: { boxesOpening: 'awardViews.openingBox' },
    },
    [me, ue] = z()(
        ({ observableModel: s }) => {
            const t = {
                    root: s.object(),
                    bonuses: s.arrayClone('bonuses'),
                    info: s.primitives([
                        'eventName',
                        'isAnimationActive',
                        'openingCount',
                        'boxesCount',
                        'isAwaitingResponse',
                        'isReopen',
                    ]),
                    activeRareReward: e.box(null),
                    sessionalNumberOpenings: e.box(0),
                },
                i = a(() => E(le, t.info.eventName.get()), { equals: G }),
                r = a(() => D(de, t.info.eventName.get()), { equals: G }),
                n = a(() => t.bonuses.get(), { equals: G }),
                o = a(() => X(n(), (e) => X(e, (e) => H(e))), { equals: G }),
                c = a(() => Z(t.bonuses.get(), (e, a) => (e > a.length ? e : a.length), 0)),
                l = a(() => {
                    const { boxCategory: e } = t.root.get(),
                        a = `${e}_${$.Common}`,
                        s = `${e}_${$.Rare}`,
                        n = r().dynamicImages.boxesOpening.dynOpt(a, $.Common),
                        o = r().dynamicVideos.boxesOpening.dynOpt(a, $.Common),
                        c = r().dynamicImages.boxesOpening.dynOpt(s, $.Rare),
                        l = r().dynamicVideos.boxesOpening.dynOpt(s, $.Rare),
                        m = i().sounds,
                        u = L(V(R.sounds, `${ce.open}_${t.info.eventName.get()}_${e}`), m.open, ce.open),
                        p = L(V(R.sounds, `${ce.openRare}_${t.info.eventName.get()}_${e}`), m.openRare, ce.openRare);
                    return { [d.common]: { video: o, image: n, sound: u }, [d.rare]: { video: l, image: c, sound: p } };
                });
            return {
                ...t,
                computes: {
                    rewardsListByBoxes: n,
                    resources: i,
                    dynamicResources: r,
                    maxRewardsInLine: c,
                    hasRareReward: o,
                    multimediaResource: l,
                },
            };
        },
        ({ externalModel: e, model: a }) => ({
            goPreview: e.createCallback((e) => e, 'onPreview'),
            openNext: e.createCallback(() => {
                const { boxesCount: e, openingCount: s } = a.info;
                return { openCount: Math.min(e.get(), s.get()) };
            }, 'onOpen'),
            goBack: e.createCallbackNoArgs('onGoBack'),
            close: e.createCallbackNoArgs('onClose'),
            buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
            toggleAnimationState: e.createCallback((e) => ({ isAnimationActive: !e }), 'onAnimationStateChanged'),
            setIsVideoPlaying: e.createCallback((e) => ({ isPlaying: e }), 'onVideoPlaying'),
            setActiveRareReward: s((e) => a.activeRareReward.set(e)),
            clearActiveRareReward: s(() => a.activeRareReward.set(null)),
            incSessionalNumberOpenings: s(() => a.sessionalNumberOpenings.set(a.sessionalNumberOpenings.get() + 1)),
        }),
    ),
    pe = t.createContext(null),
    _e = 'INIT_ROW',
    ge = 'CONCURRENT_APPEAR',
    fe = 'REWARD',
    be = 'OVERLAY_REWARD',
    he = 'RARE_VIDEO',
    we = 'COMPENSATION',
    ye = 'TWITCH',
    xe = 'FINISH',
    ve = {
        [_e]: { duration: 300 },
        [ge]: { duration: 200 },
        [fe]: { duration: 150 },
        [be]: { duration: 0, pauseNextSteps: !0 },
        [he]: { duration: 0, pauseNextSteps: !0 },
        [ye]: { duration: 1e3 },
        [we]: { duration: 800 },
        [xe]: { name: xe, duration: 0, delay: 100 },
    },
    Re = (e, a, s) => {
        switch (e) {
            case _e:
                return `animation_${a}`;
            case ge:
                return `animation_${a}_${ge}`;
            default:
                return `animation_${a}_${s}_${e}`;
        }
    },
    Ne = (e, a, s) => ({ ...ve[e], name: Re(e, a, s) }),
    Ce = (e, a) => {
        const s = [];
        return (
            Z(
                e,
                (e, s, t) => (
                    0 !== t && e.push(Ne(_e, t)),
                    e.push(Ne(ge, t)),
                    M(s, (s, i) => {
                        const r = H(s),
                            n = p(a, s.specialAwardName);
                        (r
                            ? (n ? e.push(Ne(be, t, i)) : e.push(Ne(he, t, i)), e.push(Ne(fe, t, i)))
                            : 0 !== i && e.push(Ne(fe, t, i)),
                            s.isCompensation && (e.push(Ne(ye, t, i)), e.push(Ne(we, t, i))));
                    }),
                    e
                ),
                s,
            ),
            s.push(ve.FINISH),
            s
        );
    },
    je = i(function ({ children: e }) {
        const { model: a } = ue(),
            s = a.info.eventName.get(),
            t = _({ steps: Ce(a.computes.rewardsListByBoxes(), s), autoStart: !1 })();
        return r.jsx(pe.Provider, { value: t, children: e });
    }),
    Ae = 'Divider_112e983f';
const Ie = 'Ordinal_20396ebf';
const Oe = 'Rewards_6e57cc05';
function ke({ children: e, className: a, ...s }) {
    return r.jsx('div', { ...s, className: n(Oe, a), children: e });
}
((ke.Ordinal = function ({ children: e, className: a }) {
    return r.jsx('div', { className: n(Ie, a), children: e });
}),
    (ke.Divider = function ({ className: e }) {
        return r.jsx('div', { className: n(Ae, e) });
    }));
const Te = 'Compensation_22c7fec0';
const Be = 'Content_8f2fef40';
const Pe = 'Glow_86ec1932';
const Ve = 'PreviewButton_fdc3bedf',
    Se = 'PreviewButton_loupeButton_3b872270';
const Ee = {
    root: 'Title_root_2e63cf3',
    base: 'Title_4a8f0758',
    base__premium_plus: 'Title_base__premium_plus_80d3c231',
    value: 'Title_value_c0c2d5cc',
    base__credits: 'Title_base__credits_2e63cf3',
    base__gold: 'Title_base__gold_2e63cf3',
    base__freeXP: 'Title_base__freeXP_2e63cf3',
    base__bptaler: 'Title_base__bptaler_2e63cf3',
    base__crystal: 'Title_base__crystal_2e63cf3',
    plural: 'Title_plural_d7d07637',
    fadeIn: 'Title_fadeIn_2e63cf3',
};
const De = 'VehicleTitle_dd0605a9';
const $e = 'RewardCard_447f9fb1';
function Le({ children: e, className: a, ...s }) {
    return r.jsx('div', { className: n($e, a), ...s, children: e });
}
((Le.Content = function ({ children: e, className: a }) {
    return r.jsx('div', { className: n(Be, a), children: e });
}),
    (Le.Glow = function ({ className: e, src: a }) {
        const s = t.useRef(null);
        return (g(s), r.jsx(F, { className: n(Pe, e), src: a, autoplay: !0, loop: !0, ref: s }));
    }),
    (Le.VehicleTitle = function ({ vehicleName: e, className: a = '' }) {
        return r.jsx('div', { className: n(De, a), children: e });
    }),
    (Le.Title = function ({ type: e, plural: a, text: s, className: t = '' }) {
        return r.jsxs('div', {
            className: n(Ee.base, Ee[`base__${e}`], t),
            children: [
                r.jsx('div', { className: Ee.value, children: r.jsx(U, { text: W(s) }) }),
                a && r.jsx('span', { className: Ee.plural, children: a }),
            ],
        });
    }),
    (Le.Preview = function ({ image: e, onClick: a, className: s }) {
        return r.jsx('div', {
            className: n(Ve, s),
            children: r.jsx(oe, { className: Se, icon: { img: e }, onClick: a }),
        });
    }),
    (Le.Compensation = function ({ children: e, className: a }) {
        return r.jsx('div', { className: n(Te, a), children: e });
    }));
const He = { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
    We = { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
    qe = { opacity: 0, transform: 'scale(1) rotateZ(0deg)', filter: 'brightness(1)' },
    ze = () => ({ from: { opacity: 0, transform: 'translateX(-10rem)', filter: 'brightness(1)' } }),
    Ge = () => ({
        to: [
            { opacity: 1, transform: 'translateX(-8rem)', filter: 'brightness(1.5)' },
            { opacity: 1, transform: 'translateX(-6rem)', filter: 'brightness(1.5)' },
            { opacity: 1, transform: 'translateX(-4rem)', filter: 'brightness(1.3)' },
            { opacity: 1, transform: 'translateX(-2rem)', filter: 'brightness(1.1)' },
            He,
        ],
        config: { duration: 30, easing: Y.easeOutCubic },
    }),
    Xe = () => ({ from: { opacity: 0, transform: 'scale(1)', filter: 'brightness(1.5)' } }),
    Ze = (e = 400) => ({
        to: [{ opacity: 1, transform: 'scale(1.06)', filter: 'brightness(1.5)' }, We],
        config: { duration: e, easing: Y.easeOutCubic },
    }),
    Me = () => ({ from: { opacity: 1, filter: 'brightness(1)', transform: 'scale(1)' } }),
    Fe = () => ({ from: { opacity: 0 } }),
    Ue = () => ({
        to: { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
        config: { duration: 200, easing: Y.easeOutCubic },
    }),
    Ye = 'Compensation_iconWrapper_fc198a86',
    Je = 'Compensation_db29c4dc',
    Ke = 'Compensation_icon_6c2a22b2',
    Qe = i(function ({ reward: e, size: a, icon: s, animationName: i, className: l = '' }) {
        const { model: d } = ue(),
            { sounds: m } = d.computes.resources(),
            { dynamicTexts: u } = d.computes.dynamicResources(),
            { name: p, value: _ } = e.compensation,
            g = p === J.PremiumPlus ? u.rewardsPremiumDay.plural('premiumDay', Number(_.split(' ').at(-1))) : '',
            [h, w] = o(Xe),
            y = f(pe);
        return (
            t.useEffect(() => {
                const e = (e) => {
                    e.name === i && (Q.sound(m.compensationAppear), w.start(Ze()));
                };
                return (
                    y.events.on('change', e),
                    () => {
                        y.events.off('change', e);
                    }
                );
            }),
            t.useEffect(() => {
                const e = () => {
                    w.start(Ze(0));
                };
                return (
                    y.events.on('skipAll', e),
                    () => {
                        y.events.off('skipAll', e);
                    }
                );
            }),
            r.jsxs(Le.Compensation, {
                className: n(Je, l),
                children: [
                    r.jsx(c.div, {
                        style: { ...h },
                        children: r.jsx(
                            b,
                            {
                                icon: S(e, K.Big, e.isCompensation),
                                sizes: { height: a.rewardHeight, width: a.rewardWidth },
                            },
                            'compensation_image',
                        ),
                    }),
                    r.jsx(c.div, {
                        style: { opacity: h.opacity },
                        className: Ye,
                        children: r.jsx(
                            b,
                            {
                                icon: s,
                                sizes: { height: a.compensationIconHeight, width: a.compensationIconWidth },
                                className: Ke,
                            },
                            'compensation_icon',
                        ),
                    }),
                    _.length > 0 &&
                        r.jsx(c.div, {
                            style: { opacity: h.opacity },
                            children: r.jsx(Le.Title, { type: p, text: _, plural: g }),
                        }),
                ],
            })
        );
    }),
    ea = 'Card_8b62cf15',
    aa = 'Card_reward_ff2c5c28',
    sa = 'Card_compensation_60c06806',
    ta = 'Card_title_43ce242d',
    ia = 'Card_vehicleTitle_c978735f',
    ra = 'Card_loupeWrapper_e3dd749b',
    na = 'Card_video_30ee6c3b',
    oa = [J.Vehicles, J.TmanToken],
    ca = {
        rewardHeight: '80rem',
        rewardWidth: '80rem',
        countHeight: '18rem',
        compensationIconWidth: '24rem',
        compensationIconHeight: '24rem',
        nameHeight: '20rem',
        descriptionHeight: '20rem',
        imageSize: K.Big,
        premDaysHeight: '65rem',
        premDaysWidth: '65rem',
    },
    la = { opacity: 0, display: 'none' },
    da = { opacity: 1, display: 'flex' },
    ma = { to: da, config: { duration: 500, easing: Y.easeOutCubic } },
    ua = i(function ({ reward: e, rewardIndex: a, rowIndex: s }) {
        const { model: i, controls: n } = ue(),
            { images: d, texts: m, videos: u, sounds: _ } = i.computes.resources(),
            { dynamicTexts: g } = i.computes.dynamicResources(),
            b = i.info.eventName.get(),
            [v, R] = t.useState(!1),
            { tooltipContentId: N, tooltipId: C } = e,
            j = l(x, (e) => e.value),
            [A, I] = o(H(e) ? Fe : ze),
            [O, k] = o(Me),
            [T, B] = o(() => ({ from: la })),
            P = ee({
                contentId: Number(N),
                args: { tooltipId: C, boxCategory: e.icon, eventName: b },
                disabled: j !== h.initial,
            }),
            V =
                e.name === J.PremiumPlus
                    ? g.rewardsPremiumDay.plural('premiumDay', Number(e.value.split(' ').at(-1)))
                    : '',
            S = f(pe);
        return (
            t.useEffect(() => {
                const t = (t) => {
                    switch (t.name) {
                        case Ne(ge, s).name:
                            H(e) || 0 !== a || (I.start(Ge()), Q.sound(_.multiRewardAppear));
                            break;
                        case Ne(fe, s, a).name:
                            (I.start(H(e) ? Ge() : Ue()), Q.sound(_.multiRewardAppear));
                            break;
                        case Ne(he, s, a).name:
                            R(!0);
                            break;
                        case Ne(be, s, a).name:
                            n.setActiveRareReward(e);
                            break;
                        case Ne(ye, s, a).name:
                            k.start({
                                to: [
                                    { opacity: 1, transform: 'scale(1) rotateZ(0.25deg)', filter: 'brightness(1.07)' },
                                    {
                                        opacity: 1,
                                        transform: 'scale(1.01) rotateZ(-0.5deg)',
                                        filter: 'brightness(1.14)',
                                    },
                                    {
                                        opacity: 1,
                                        transform: 'scale(1.02) rotateZ(0.75deg)',
                                        filter: 'brightness(1.21)',
                                    },
                                    {
                                        opacity: 1,
                                        transform: 'scale(1.03) rotateZ(-0.75deg)',
                                        filter: 'brightness(1.28)',
                                    },
                                    { opacity: 1, transform: 'scale(1.04) rotateZ(1deg)', filter: 'brightness(1.35)' },
                                    { opacity: 1, transform: 'scale(1.05) rotateZ(-1deg)', filter: 'brightness(1.42)' },
                                    { opacity: 1, transform: 'scale(1.06) rotateZ(0deg)', filter: 'brightness(1.5)' },
                                    qe,
                                ],
                                config: { duration: 125, easing: Y.easeInOutCubic },
                            });
                    }
                };
                return (
                    S.events.on('change', t),
                    () => {
                        S.events.off('change', t);
                    }
                );
            }, [S.events, s, a, e, I, n, k, _]),
            t.useEffect(() => {
                const a = () => {
                    (I.start(H(e) ? Ue() : { to: He, config: { duration: 0, easing: Y.easeOutCubic } }),
                        e.isCompensation && k.start({ to: qe, config: { duration: 0, easing: Y.easeInOutCubic } }));
                };
                return (
                    S.events.on('skipAll', a),
                    () => {
                        S.events.off('skipAll', a);
                    }
                );
            }),
            t.useEffect(() => {
                switch (j) {
                    case h.skip:
                        B.set(da);
                        break;
                    case h.preparation:
                        B.set(la);
                        break;
                    case h.page:
                        B.start(ma);
                }
            }, [j]),
            r.jsxs(Le, {
                ...P,
                className: ea,
                children: [
                    r.jsx(c.div, {
                        style: { ...A },
                        children: r.jsxs(Le.Content, {
                            children: [
                                H(e) && r.jsx(Le.Glow, { src: u.rareGlow }),
                                r.jsx(c.div, {
                                    style: { ...O },
                                    children: r.jsx(w, {
                                        reward: e,
                                        countText: m.multiplier,
                                        sizes: ca,
                                        className: aa,
                                        currentAnimationState: j,
                                    }),
                                }),
                                r.jsxs(c.div, {
                                    style: { opacity: O.opacity },
                                    className: ta,
                                    children: [
                                        e.name === J.Vehicles &&
                                            r.jsx(Le.VehicleTitle, { vehicleName: e.vehicleShortName, className: ia }),
                                        !oa.includes(e.name) &&
                                            r.jsx(Le.Title, { type: e.name, text: e.value, plural: V }),
                                    ],
                                }),
                                q(e) &&
                                    !e.isCompensation &&
                                    r.jsx(c.div, {
                                        style: T,
                                        className: ra,
                                        children: r.jsx(Le.Preview, {
                                            image: d.previewIcon,
                                            onClick: () =>
                                                n.goPreview({
                                                    bonusType: e.name,
                                                    bonusId: e.id ? e.id : '',
                                                    styleID: e.styleID,
                                                }),
                                        }),
                                    }),
                                e.isCompensation &&
                                    r.jsx(Qe, {
                                        reward: e,
                                        size: ca,
                                        icon: d.compensationIcon,
                                        animationName: Ne(we, s, a).name,
                                        className: sa,
                                    }),
                            ],
                        }),
                    }),
                    H(e) &&
                        !p(b, e.specialAwardName) &&
                        r.jsx(y, {
                            className: na,
                            sound: e.rarity === $.Rare ? _.rareAnimation : _.epicAnimation,
                            src: u[e.rarity],
                            show: v,
                            timer: { remainder: 0.5, next: S.resume },
                        }),
                ],
            })
        );
    }),
    pa = {
        root: 'RewardsRow_root_8819d1ca',
        base: 'RewardsRow_8819d1ca',
        ordinal__0: 'RewardsRow_ordinal__0_e5b77023',
        ordinal__1: 'RewardsRow_ordinal__1_e5b77023',
        ordinal__2: 'RewardsRow_ordinal__2_e5b77023',
        ordinal__3: 'RewardsRow_ordinal__3_e5b77023',
        ordinal__4: 'RewardsRow_ordinal__4_e5b77023',
        divider__0: 'RewardsRow_divider__0_e5b77023',
        divider__1: 'RewardsRow_divider__1_e5b77023',
        divider__2: 'RewardsRow_divider__2_e5b77023',
        divider__3: 'RewardsRow_divider__3_e5b77023',
        fadeIn: 'RewardsRow_fadeIn_8819d1ca',
    },
    _a = i(function ({ order: e, rewards: a, isLast: s }) {
        const { model: t } = ue(),
            i = t.computes.maxRewardsInLine();
        return r.jsxs(ke, {
            className: pa.base,
            style: { width: ((o = i), 28 + 108 * o) + 'rem' },
            children: [
                r.jsx(ke.Ordinal, { className: n(pa.ordinal, pa['ordinal__' + (e - 1)]), children: e }),
                M(a, (a, s) =>
                    r.jsx(
                        ua,
                        { reward: a, rewardIndex: s, rowIndex: e - 1 },
                        `reward_${e - 1}_${s}_${t.sessionalNumberOpenings.get()}`,
                    ),
                ),
                !s && r.jsx(ke.Divider, { className: n(pa.divider, pa['divider__' + (e - 1)]) }),
            ],
        });
        var o;
    }),
    ga = 'Layout_1c0c8eb5',
    fa = 'Layout_base__ready_73e4204f',
    ba = 'Layout_overlay_2156876',
    ha = 'Layout_subtitle_f8a07960',
    wa = 'Layout_animation_83d4bf75',
    ya = { opacity: 0 },
    xa = { opacity: 1 },
    va = {
        to: xa,
        config: { duration: 500, easing: Y.easeOutCubic },
        onRest: () => {
            x.send({ type: I.toInitial });
        },
    },
    Ra = i(function () {
        const { model: e, controls: a } = ue(),
            { boxesCount: s, boxCategory: i, isWindowAccessible: d, isShopVisible: u } = e.root.get(),
            _ = e.info.isAnimationActive.get(),
            g = e.info.eventName.get(),
            b = e.info.openingCount.get(),
            w = e.activeRareReward.get(),
            { resources: y, dynamicResources: R, rewardsListByBoxes: O } = e.computes,
            { texts: k, images: T, sounds: B } = y(),
            { dynamicTexts: P } = R(),
            V = O(),
            {
                breakpoint: { weight: S },
            } = ae(),
            E = l(x, (e) => e.value),
            [D, $] = o(() => ({ from: ya })),
            L = f(pe);
        t.useEffect(() => {
            switch (v(E)) {
                case h.skip:
                    ($.set(xa), L.skipAll());
                    break;
                case h.preparation:
                    ($.set(ya), L.reset());
                    break;
                case h.rewards:
                    L.start();
                    break;
                case h.page:
                    $.start(va);
            }
        }, [E]);
        return r.jsxs(N, {
            className: n(ga, E === h.initial && fa),
            children: [
                Boolean(w && p(g, null == w ? void 0 : w.specialAwardName)) &&
                    r.jsx(N.Overlay, {
                        className: ba,
                        children: r.jsx(C, {
                            res: j(g, null == w ? void 0 : w.specialAwardName),
                            rareBonus: w,
                            texts: k,
                            controls: {
                                onClose: () => {
                                    (a.setActiveRareReward(null), L.resume());
                                },
                                onPlay: () => a.setIsVideoPlaying(!0),
                                onEnded: () => a.setIsVideoPlaying(!1),
                            },
                            minimized: !d,
                        }),
                    }),
                r.jsx(c.div, {
                    style: D,
                    className: wa,
                    children: r.jsxs(N.Header, {
                        children: [
                            r.jsx(m, {
                                title: k.headerTitle,
                                subTitle: i
                                    ? r.jsx(U, {
                                          text: k.headerSubtitle,
                                          binding: { name: P.boxCategory.dynOpt(i), boxesCount: V.length },
                                          classMix: ha,
                                      })
                                    : '',
                            }),
                            r.jsx(N.CloseButton, { text: k.closeButton, onClick: a.close }),
                        ],
                    }),
                }),
                r.jsx(N.Body, {
                    children: M(V, (e, a) =>
                        r.jsx(_a, { order: a + 1, isLast: a === V.length - 1, rewards: e }, `rewards_row_${a}`),
                    ),
                }),
                r.jsx(c.div, {
                    style: D,
                    className: wa,
                    children: r.jsxs(N.Footer, {
                        children: [
                            se.isHigh() &&
                                r.jsx(N.Checkbox, {
                                    isActive: _,
                                    onClick: () => {
                                        a.toggleAnimationState(_);
                                    },
                                    text: k.checkbox,
                                    size: S >= ie.medium.weight ? te.extraLarge : te.large,
                                }),
                            r.jsx(A, {
                                texts: k,
                                images: T,
                                sounds: B,
                                actions: {
                                    ...a,
                                    openNext: () => {
                                        (a.incSessionalNumberOpenings(), x.send({ type: I.toPreparation }));
                                    },
                                },
                                boxesCount: s,
                                openingCount: b,
                                isShopVisible: u,
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    Na = 'App_0',
    Ca = 'App_background_bb0bfe54',
    ja = 'App_loaderWrapper_60701c61',
    Aa = i(function () {
        const { model: e, controls: a } = ue(),
            { images: s, texts: i } = e.computes.resources(),
            { isWindowAccessible: n } = e.root.get(),
            o = e.info.isAnimationActive.get(),
            m = e.info.isAwaitingResponse.get(),
            u = e.computes.hasRareReward(),
            p = e.info.isReopen.get(),
            _ = e.computes.multimediaResource(),
            g = l(x, (e) => e.value),
            b = f(pe);
        (t.useEffect(() => {
            const e = (e) => {
                e.name === xe && x.send({ type: I.toPage });
            };
            return (
                b.events.on('change', e),
                () => {
                    b.events.off('change', e);
                }
            );
        }, [b.events]),
            re(() => {
                g === h.initial && a.close();
            }),
            t.useEffect(
                () => (
                    x.start(),
                    () => {
                        x.stop();
                    }
                ),
                [],
            ),
            t.useEffect(() => {
                x.send({ type: I.setAnimationActive, isAnimationActive: o });
            }, [o]),
            O(p, m, g));
        const { loadingStyle: w, contentStyle: y } = k(g, a.openNext);
        return r.jsxs(T, {
            className: Na,
            ref: b.rootRef,
            children: [
                r.jsx(B, {
                    activeType: u ? d.rare : d.common,
                    minimized: !n,
                    res: _,
                    className: Ca,
                    onPlay: () => a.setIsVideoPlaying(!0),
                    onEnded: () => a.setIsVideoPlaying(!1),
                }),
                v(g) !== P && r.jsx(c.div, { style: y, children: r.jsx(T.Content, { children: r.jsx(Ra, {}) }) }),
                g === h.waiting &&
                    r.jsx(c.div, {
                        style: w,
                        className: ja,
                        children: r.jsx(T.Waiting, { text: i.loader, image: s.loader }),
                    }),
            ],
        });
    }),
    Ia = () => r.jsx(me, { options: u.MULTIPLE_REWARD, children: r.jsx(je, { children: r.jsx(Aa, {}) }) });
export { Ia as default };
