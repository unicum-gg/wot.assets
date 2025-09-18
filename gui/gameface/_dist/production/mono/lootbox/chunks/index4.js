import { o as e, m as a, f as s, r as t, n as i, j as n, e as r, h as o, i as c, q as l } from './vendor.js';
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
    i as T,
    P as k,
    B,
    j as P,
} from './reward.js';
import { a as V, g as S, B as E, d as D } from './resources.js';
import { a as $, f as L, i as H } from './utils.js';
import {
    i as W,
    c as q,
    o as z,
    q as X,
    m as G,
    a5 as Z,
    k as M,
    a0 as F,
    R as U,
    I as Y,
    n as J,
    u as K,
    X as Q,
    O as ee,
    Z as ae,
    _ as se,
    d as te,
} from './lib.js';
import { a as ie, g as ne } from './getRewardImage.js';
import { S as re } from './sounds.js';
import { L as oe } from './loupe_button.js';
import './title.js';
import './quantity_title.js';
import './vehicle_info.js';
const ce = {
        multiRewardAppear: re.multiRewardAppear,
        compensationAppear: re.compensationAppear,
        rareAnimation: re.rareAnimation,
        epicAnimation: re.epicAnimation,
        open: re.open,
        openRare: re.openRare,
        purchaseHover: re.purchaseHover,
        purchaseClick: re.purchaseClick,
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
    [me, ue] = W()(
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
                i = a(() => V(le, t.info.eventName.get()), { equals: q }),
                n = a(() => S(de, t.info.eventName.get()), { equals: q }),
                r = a(() => t.bonuses.get(), { equals: q }),
                o = a(() => z(r(), (e) => z(e, (e) => $(e))), { equals: q }),
                c = a(() => X(t.bonuses.get(), (e, a) => (e > a.length ? e : a.length), 0)),
                l = a(() => {
                    const { boxCategory: e } = t.root.get(),
                        a = `${e}_${E.Common}`,
                        s = `${e}_${E.Rare}`,
                        r = n().dynamicImages.boxesOpening.dynOpt(a, E.Common),
                        o = n().dynamicVideos.boxesOpening.dynOpt(a, E.Common),
                        c = n().dynamicImages.boxesOpening.dynOpt(s, E.Rare),
                        l = n().dynamicVideos.boxesOpening.dynOpt(s, E.Rare),
                        m = i().sounds,
                        u = D(ie(R.sounds, `${ce.open}_${t.info.eventName.get()}_${e}`), m.open, ce.open),
                        p = D(ie(R.sounds, `${ce.openRare}_${t.info.eventName.get()}_${e}`), m.openRare, ce.openRare);
                    return { [d.common]: { video: o, image: r, sound: u }, [d.rare]: { video: l, image: c, sound: p } };
                });
            return {
                ...t,
                computes: {
                    rewardsListByBoxes: r,
                    resources: i,
                    dynamicResources: n,
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
            X(
                e,
                (e, s, t) => (
                    0 !== t && e.push(Ne(_e, t)),
                    e.push(Ne(ge, t)),
                    G(s, (s, i) => {
                        const n = $(s),
                            r = p(a, s.specialAwardName);
                        (n
                            ? (r ? e.push(Ne(be, t, i)) : e.push(Ne(he, t, i)), e.push(Ne(fe, t, i)))
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
        return n.jsx(pe.Provider, { value: t, children: e });
    }),
    Ae = 'Divider_112e983f';
const Ie = 'Ordinal_20396ebf';
const Oe = 'Rewards_6e57cc05';
function Te({ children: e, className: a, ...s }) {
    return n.jsx('div', { ...s, className: r(Oe, a), children: e });
}
((Te.Ordinal = function ({ children: e, className: a }) {
    return n.jsx('div', { className: r(Ie, a), children: e });
}),
    (Te.Divider = function ({ className: e }) {
        return n.jsx('div', { className: r(Ae, e) });
    }));
const ke = 'Compensation_22c7fec0';
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
    return n.jsx('div', { className: r($e, a), ...s, children: e });
}
((Le.Content = function ({ children: e, className: a }) {
    return n.jsx('div', { className: r(Be, a), children: e });
}),
    (Le.Glow = function ({ className: e, src: a }) {
        const s = t.useRef(null);
        return (g(s), n.jsx(Z, { className: r(Pe, e), src: a, autoplay: !0, loop: !0, ref: s }));
    }),
    (Le.VehicleTitle = function ({ vehicleName: e, className: a = '' }) {
        return n.jsx('div', { className: r(De, a), children: e });
    }),
    (Le.Title = function ({ type: e, plural: a, text: s, className: t = '' }) {
        return n.jsxs('div', {
            className: r(Ee.base, Ee[`base__${e}`], t),
            children: [
                n.jsx('div', { className: Ee.value, children: n.jsx(M, { text: L(s) }) }),
                a && n.jsx('span', { className: Ee.plural, children: a }),
            ],
        });
    }),
    (Le.Preview = function ({ image: e, onClick: a, className: s }) {
        return n.jsx('div', {
            className: r(Ve, s),
            children: n.jsx(oe, { className: Se, icon: { img: e }, onClick: a }),
        });
    }),
    (Le.Compensation = function ({ children: e, className: a }) {
        return n.jsx('div', { className: r(ke, a), children: e });
    }));
const He = { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
    We = { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
    qe = { opacity: 0, transform: 'scale(1) rotateZ(0deg)', filter: 'brightness(1)' },
    ze = () => ({ from: { opacity: 0, transform: 'translateX(-10rem)', filter: 'brightness(1)' } }),
    Xe = () => ({
        to: [
            { opacity: 1, transform: 'translateX(-8rem)', filter: 'brightness(1.5)' },
            { opacity: 1, transform: 'translateX(-6rem)', filter: 'brightness(1.5)' },
            { opacity: 1, transform: 'translateX(-4rem)', filter: 'brightness(1.3)' },
            { opacity: 1, transform: 'translateX(-2rem)', filter: 'brightness(1.1)' },
            He,
        ],
        config: { duration: 30, easing: F.easeOutCubic },
    }),
    Ge = () => ({ from: { opacity: 0, transform: 'scale(1)', filter: 'brightness(1.5)' } }),
    Ze = (e = 400) => ({
        to: [{ opacity: 1, transform: 'scale(1.06)', filter: 'brightness(1.5)' }, We],
        config: { duration: e, easing: F.easeOutCubic },
    }),
    Me = () => ({ from: { opacity: 1, filter: 'brightness(1)', transform: 'scale(1)' } }),
    Fe = () => ({ from: { opacity: 0 } }),
    Ue = () => ({
        to: { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
        config: { duration: 200, easing: F.easeOutCubic },
    }),
    Ye = 'Compensation_iconWrapper_fc198a86',
    Je = 'Compensation_db29c4dc',
    Ke = 'Compensation_icon_6c2a22b2',
    Qe = i(function ({ reward: e, size: a, icon: s, animationName: i, className: l = '' }) {
        const { model: d } = ue(),
            { sounds: m } = d.computes.resources(),
            { dynamicTexts: u } = d.computes.dynamicResources(),
            { name: p, value: _ } = e.compensation,
            g = p === U.PremiumPlus ? u.rewardsPremiumDay.plural('premiumDay', Number(_.split(' ').at(-1))) : '',
            [h, w] = o(Ge),
            y = f(pe);
        return (
            t.useEffect(() => {
                const e = (e) => {
                    e.name === i && (J.sound(m.compensationAppear), w.start(Ze()));
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
            n.jsxs(Le.Compensation, {
                className: r(Je, l),
                children: [
                    n.jsx(c.div, {
                        style: { ...h },
                        children: n.jsx(
                            b,
                            {
                                icon: ne(e, Y.Big, e.isCompensation),
                                sizes: { height: a.rewardHeight, width: a.rewardWidth },
                            },
                            'compensation_image',
                        ),
                    }),
                    n.jsx(c.div, {
                        style: { opacity: h.opacity },
                        className: Ye,
                        children: n.jsx(
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
                        n.jsx(c.div, {
                            style: { opacity: h.opacity },
                            children: n.jsx(Le.Title, { type: p, text: _, plural: g }),
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
    na = 'Card_loupeWrapper_e3dd749b',
    ra = 'Card_video_30ee6c3b',
    oa = [U.Vehicles, U.TmanToken],
    ca = {
        rewardHeight: '80rem',
        rewardWidth: '80rem',
        countHeight: '18rem',
        compensationIconWidth: '24rem',
        compensationIconHeight: '24rem',
        nameHeight: '20rem',
        descriptionHeight: '20rem',
        imageSize: Y.Big,
        premDaysHeight: '65rem',
        premDaysWidth: '65rem',
    },
    la = { opacity: 0, display: 'none' },
    da = { opacity: 1, display: 'flex' },
    ma = { to: da, config: { duration: 500, easing: F.easeOutCubic } },
    ua = i(function ({ reward: e, rewardIndex: a, rowIndex: s }) {
        const { model: i, controls: r } = ue(),
            { images: d, texts: m, videos: u, sounds: _ } = i.computes.resources(),
            { dynamicTexts: g } = i.computes.dynamicResources(),
            b = i.info.eventName.get(),
            [v, R] = t.useState(!1),
            { tooltipContentId: N, tooltipId: C } = e,
            j = l(x, (e) => e.value),
            [A, I] = o($(e) ? Fe : ze),
            [O, T] = o(Me),
            [k, B] = o(() => ({ from: la })),
            P = K({
                contentId: Number(N),
                args: { tooltipId: C, boxCategory: e.icon, eventName: b },
                disabled: j !== h.initial,
            }),
            V =
                e.name === U.PremiumPlus
                    ? g.rewardsPremiumDay.plural('premiumDay', Number(e.value.split(' ').at(-1)))
                    : '',
            S = f(pe);
        return (
            t.useEffect(() => {
                const t = (t) => {
                    switch (t.name) {
                        case Ne(ge, s).name:
                            $(e) || 0 !== a || (I.start(Xe()), J.sound(_.multiRewardAppear));
                            break;
                        case Ne(fe, s, a).name:
                            (I.start($(e) ? Xe() : Ue()), J.sound(_.multiRewardAppear));
                            break;
                        case Ne(he, s, a).name:
                            R(!0);
                            break;
                        case Ne(be, s, a).name:
                            r.setActiveRareReward(e);
                            break;
                        case Ne(ye, s, a).name:
                            T.start({
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
                                config: { duration: 125, easing: F.easeInOutCubic },
                            });
                    }
                };
                return (
                    S.events.on('change', t),
                    () => {
                        S.events.off('change', t);
                    }
                );
            }, [S.events, s, a, e, I, r, T, _]),
            t.useEffect(() => {
                const a = () => {
                    (I.start($(e) ? Ue() : { to: He, config: { duration: 0, easing: F.easeOutCubic } }),
                        e.isCompensation && T.start({ to: qe, config: { duration: 0, easing: F.easeInOutCubic } }));
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
            n.jsxs(Le, {
                ...P,
                className: ea,
                children: [
                    n.jsx(c.div, {
                        style: { ...A },
                        children: n.jsxs(Le.Content, {
                            children: [
                                $(e) && n.jsx(Le.Glow, { src: u.rareGlow }),
                                n.jsx(c.div, {
                                    style: { ...O },
                                    children: n.jsx(w, {
                                        reward: e,
                                        countText: m.multiplier,
                                        sizes: ca,
                                        className: aa,
                                        currentAnimationState: j,
                                    }),
                                }),
                                n.jsxs(c.div, {
                                    style: { opacity: O.opacity },
                                    className: ta,
                                    children: [
                                        e.name === U.Vehicles &&
                                            n.jsx(Le.VehicleTitle, { vehicleName: e.vehicleShortName, className: ia }),
                                        !oa.includes(e.name) &&
                                            n.jsx(Le.Title, { type: e.name, text: e.value, plural: V }),
                                    ],
                                }),
                                H(e) &&
                                    !e.isCompensation &&
                                    n.jsx(c.div, {
                                        style: k,
                                        className: na,
                                        children: n.jsx(Le.Preview, {
                                            image: d.previewIcon,
                                            onClick: () =>
                                                r.goPreview({
                                                    bonusType: e.name,
                                                    bonusId: e.id ? e.id : '',
                                                    styleID: e.styleID,
                                                }),
                                        }),
                                    }),
                                e.isCompensation &&
                                    n.jsx(Qe, {
                                        reward: e,
                                        size: ca,
                                        icon: d.compensationIcon,
                                        animationName: Ne(we, s, a).name,
                                        className: sa,
                                    }),
                            ],
                        }),
                    }),
                    $(e) &&
                        !p(b, e.specialAwardName) &&
                        n.jsx(y, {
                            className: ra,
                            sound: e.rarity === E.Rare ? _.rareAnimation : _.epicAnimation,
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
        return n.jsxs(Te, {
            className: pa.base,
            style: { width: ((o = i), 28 + 108 * o) + 'rem' },
            children: [
                n.jsx(Te.Ordinal, { className: r(pa.ordinal, pa['ordinal__' + (e - 1)]), children: e }),
                G(a, (a, s) =>
                    n.jsx(
                        ua,
                        { reward: a, rewardIndex: s, rowIndex: e - 1 },
                        `reward_${e - 1}_${s}_${t.sessionalNumberOpenings.get()}`,
                    ),
                ),
                !s && n.jsx(Te.Divider, { className: r(pa.divider, pa['divider__' + (e - 1)]) }),
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
        config: { duration: 500, easing: F.easeOutCubic },
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
            { texts: T, images: k, sounds: B } = y(),
            { dynamicTexts: P } = R(),
            V = O(),
            {
                breakpoint: { weight: S },
            } = Q(),
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
        return n.jsxs(N, {
            className: r(ga, E === h.initial && fa),
            children: [
                Boolean(w && p(g, null == w ? void 0 : w.specialAwardName)) &&
                    n.jsx(N.Overlay, {
                        className: ba,
                        children: n.jsx(C, {
                            res: j(g, null == w ? void 0 : w.specialAwardName),
                            rareBonus: w,
                            texts: T,
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
                n.jsx(c.div, {
                    style: D,
                    className: wa,
                    children: n.jsxs(N.Header, {
                        children: [
                            n.jsx(m, {
                                title: T.headerTitle,
                                subTitle: i
                                    ? n.jsx(M, {
                                          text: T.headerSubtitle,
                                          binding: { name: P.boxCategory.dynOpt(i), boxesCount: V.length },
                                          classMix: ha,
                                      })
                                    : '',
                            }),
                            n.jsx(N.CloseButton, { text: T.closeButton, onClick: a.close }),
                        ],
                    }),
                }),
                n.jsx(N.Body, {
                    children: G(V, (e, a) =>
                        n.jsx(_a, { order: a + 1, isLast: a === V.length - 1, rewards: e }, `rewards_row_${a}`),
                    ),
                }),
                n.jsx(c.div, {
                    style: D,
                    className: wa,
                    children: n.jsxs(N.Footer, {
                        children: [
                            ee.isHigh() &&
                                n.jsx(N.Checkbox, {
                                    isActive: _,
                                    onClick: () => {
                                        a.toggleAnimationState(_);
                                    },
                                    text: T.checkbox,
                                    size: S >= se.medium.weight ? ae.extraLarge : ae.large,
                                }),
                            n.jsx(A, {
                                texts: T,
                                images: k,
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
            { isWindowAccessible: r } = e.root.get(),
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
            te(() => {
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
        const { loadingStyle: w, contentStyle: y } = T(g, a.openNext);
        return n.jsxs(k, {
            className: Na,
            ref: b.rootRef,
            children: [
                n.jsx(B, {
                    activeType: u ? d.rare : d.common,
                    minimized: !r,
                    res: _,
                    className: Ca,
                    onPlay: () => a.setIsVideoPlaying(!0),
                    onEnded: () => a.setIsVideoPlaying(!1),
                }),
                v(g) !== P && n.jsx(c.div, { style: y, children: n.jsx(k.Content, { children: n.jsx(Ra, {}) }) }),
                g === h.waiting &&
                    n.jsx(c.div, {
                        style: w,
                        className: ja,
                        children: n.jsx(k.Waiting, { text: i.loader, image: s.loader }),
                    }),
            ],
        });
    }),
    Ia = () => n.jsx(me, { options: u.MULTIPLE_REWARD, children: n.jsx(je, { children: n.jsx(Aa, {}) }) });
export { Ia as default };
