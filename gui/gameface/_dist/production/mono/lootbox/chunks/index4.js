import { o as e, m as a, f as s, r as t, n as i, j as n, e as r, i as o, k as c, q as l } from './vendor.js';
import { b as d, H as m, M as u } from './use_cover_size.js';
import {
    h as p,
    c as _,
    k as f,
    u as g,
    I as w,
    a as b,
    R as x,
    e as h,
    b as y,
    s as v,
    C as N,
    f as C,
    r as j,
    F as A,
    d as I,
    g as k,
    i as O,
    P as T,
    B,
    j as P,
} from './reward.js';
import { a as V, g as S } from './getRewardImage.js';
import { a as E, g as D, B as $, d as W } from './resources.js';
import { a as L, f as H, h as G, b as q, i as z } from './utils.js';
import {
    i as X,
    c as M,
    s as F,
    w as U,
    m as Y,
    a3 as J,
    F as K,
    a1 as Q,
    R as Z,
    ac as ee,
    I as ae,
    t as se,
    u as te,
    Y as ie,
    P as ne,
    _ as re,
    $ as oe,
    e as ce,
} from './lib.js';
import { S as le } from './sounds.js';
import { L as de } from './loupe_button.js';
import './title.js';
import './quantity_title.js';
import './vehicle_info.js';
const me = {
        multiRewardAppear: le.multiRewardAppear,
        compensationAppear: le.compensationAppear,
        rareAnimation: le.rareAnimation,
        epicAnimation: le.epicAnimation,
        open: le.open,
        openRare: le.openRare,
        purchaseHover: le.purchaseHover,
        purchaseClick: le.purchaseClick,
    },
    ue = {
        images: {
            iconEmpty: 'entry_point.lootboxEmpty',
            previewIcon: 'awardViews.previewIcon',
            compensationIcon: 'awardViews.compensationIcon',
            loader: 'common.waiting',
        },
        videos: {
            compensationGlow: 'awardViews.compensationGlow',
            rareGlow: 'awardViews.rareGlow',
            commonGlow: 'awardViews.commonGlow',
            compensationParticles: 'awardViews.compensationParticles',
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
        sounds: me,
    },
    pe = {
        dynamicVideos: { boxesOpening: 'awardViews.openingBoxVideo' },
        dynamicTexts: { rewardsPremiumDay: 'common.rewards.premiumDay', boxCategory: 'common.boxCategory.lowerCase' },
        dynamicImages: { boxesOpening: 'awardViews.openingBox' },
    },
    [_e, fe] = X()(
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
                i = a(() => E(ue, t.info.eventName.get()), { equals: M }),
                n = a(() => D(pe, t.info.eventName.get()), { equals: M }),
                r = a(() => t.bonuses.get(), { equals: M }),
                o = a(() => F(r(), (e) => F(e, (e) => L(e))), { equals: M }),
                c = a(() => U(t.bonuses.get(), (e, a) => (e > a.length ? e : a.length), 0)),
                l = a(() => {
                    const { boxCategory: e } = t.root.get(),
                        a = `${e}_${$.Common}`,
                        s = `${e}_${$.Rare}`,
                        r = n().dynamicImages.boxesOpening.dynOpt(a, $.Common),
                        o = n().dynamicVideos.boxesOpening.dynOpt(a, $.Common),
                        c = n().dynamicImages.boxesOpening.dynOpt(s, $.Rare),
                        l = n().dynamicVideos.boxesOpening.dynOpt(s, $.Rare),
                        m = i().sounds,
                        u = W(V(R.sounds, `${me.open}_${t.info.eventName.get()}_${e}`), m.open, me.open),
                        p = W(V(R.sounds, `${me.openRare}_${t.info.eventName.get()}_${e}`), m.openRare, me.openRare);
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
    ge = t.createContext(null),
    we = 'INIT_ROW',
    be = 'CONCURRENT_APPEAR',
    xe = 'REWARD',
    he = 'OVERLAY_REWARD',
    ye = 'RARE_VIDEO',
    ve = 'COMPENSATION',
    Re = 'TWITCH',
    Ne = 'FINISH',
    Ce = {
        [we]: { duration: 300 },
        [be]: { duration: 200 },
        [xe]: { duration: 150 },
        [he]: { duration: 0, pauseNextSteps: !0 },
        [ye]: { duration: 0, pauseNextSteps: !0 },
        [Re]: { duration: 2e3 },
        [ve]: { duration: 1e3, delay: 50 },
        [Ne]: { name: Ne, duration: 0, delay: 100 },
    },
    je = (e, a, s) => {
        switch (e) {
            case we:
                return `animation_${a}`;
            case be:
                return `animation_${a}_${be}`;
            default:
                return `animation_${a}_${s}_${e}`;
        }
    },
    Ae = (e, a, s) => ({ ...Ce[e], name: je(e, a, s) }),
    Ie = (e, a) => {
        const s = [];
        return (
            U(
                e,
                (e, s, t) => (
                    0 !== t && e.push(Ae(we, t)),
                    e.push(Ae(be, t)),
                    Y(s, (s, i) => {
                        const n = L(s),
                            r = p(a, s.specialAwardName);
                        (n
                            ? (r ? e.push(Ae(he, t, i)) : e.push(Ae(ye, t, i)), e.push(Ae(xe, t, i)))
                            : 0 !== i && e.push(Ae(xe, t, i)),
                            s.isCompensation && (e.push(Ae(Re, t, i)), e.push(Ae(ve, t, i))));
                    }),
                    e
                ),
                s,
            ),
            s.push(Ce.FINISH),
            s
        );
    },
    ke = i(function ({ children: e }) {
        const { model: a } = fe(),
            s = a.info.eventName.get(),
            t = _({ steps: Ie(a.computes.rewardsListByBoxes(), s), autoStart: !1 })();
        return n.jsx(ge.Provider, { value: t, children: e });
    }),
    Oe = 'Divider_112e983f';
const Te = 'Ordinal_20396ebf';
const Be = 'Rewards_6e57cc05';
function Pe({ children: e, className: a, ...s }) {
    return n.jsx('div', { ...s, className: r(Be, a), children: e });
}
((Pe.Ordinal = function ({ children: e, className: a }) {
    return n.jsx('div', { className: r(Te, a), children: e });
}),
    (Pe.Divider = function ({ className: e }) {
        return n.jsx('div', { className: r(Oe, e) });
    }));
const Ve = 'Compensation_22c7fec0';
const Se = 'Content_8f2fef40';
const Ee = 'Glow_86ec1932';
const De = 'PreviewButton_fdc3bedf',
    $e = 'PreviewButton_loupeButton_3b872270';
const We = {
    base: 'Title_4a8f0758',
    base__premium_plus: 'Title_base__premium_plus_8be25f37',
    value: 'Title_value_579d86dd',
    base__credits: 'Title_base__credits_2e63cf3',
    base__gold: 'Title_base__gold_2e63cf3',
    base__freeXP: 'Title_base__freeXP_2e63cf3',
    base__bptaler: 'Title_base__bptaler_2e63cf3',
    base__crystal: 'Title_base__crystal_2e63cf3',
    plural: 'Title_plural_347b5b63',
    fadeIn: 'Title_fadeIn_2e63cf3',
};
const Le = 'VehicleTitle_dd0605a9';
const He = 'RewardCard_447f9fb1';
function Ge({ children: e, className: a, ...s }) {
    return n.jsx('div', { className: r(He, a), ...s, children: e });
}
((Ge.Content = function ({ children: e, className: a }) {
    return n.jsx('div', { className: r(Se, a), children: e });
}),
    (Ge.Glow = function ({ className: e, src: a }) {
        const s = t.useRef(null);
        return (f(s), n.jsx(J, { className: r(Ee, e), src: a, autoplay: !0, loop: !0, ref: s }));
    }),
    (Ge.VehicleTitle = function ({ vehicleName: e, className: a = '' }) {
        return n.jsx('div', { className: r(Le, a), children: e });
    }),
    (Ge.Title = function ({ type: e, plural: a, text: s, className: t = '' }) {
        return n.jsxs('div', {
            className: r(We.base, We[`base__${e}`], t),
            children: [
                n.jsx('div', { className: We.value, children: n.jsx(K, { text: H(s) }) }),
                a && n.jsx('span', { className: We.plural, children: a }),
            ],
        });
    }),
    (Ge.Preview = function ({ image: e, onClick: a, className: s }) {
        return n.jsx('div', {
            className: r(De, s),
            children: n.jsx(de, { className: $e, icon: { img: e }, onClick: a }),
        });
    }),
    (Ge.Compensation = function ({ children: e, className: a }) {
        return n.jsx('div', { className: r(Ve, a), children: e });
    }));
const qe = { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
    ze = { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
    Xe = { opacity: 0, transform: 'scale(1)', filter: 'brightness(1)' },
    Me = () => ({ from: { opacity: 0, transform: 'translateX(-10rem)', filter: 'brightness(1)' } }),
    Fe = () => ({
        to: [
            { opacity: 1, transform: 'translateX(-8rem)', filter: 'brightness(1.5)' },
            { opacity: 1, transform: 'translateX(-6rem)', filter: 'brightness(1.5)' },
            { opacity: 1, transform: 'translateX(-4rem)', filter: 'brightness(1.3)' },
            { opacity: 1, transform: 'translateX(-2rem)', filter: 'brightness(1.1)' },
            qe,
        ],
        config: { duration: 30, easing: Q.easeOutCubic },
    }),
    Ue = () => ({ from: { opacity: 0, transform: 'scale(1.4)', filter: 'brightness(3)' } }),
    Ye = (e = 400) => ({
        to: [{ opacity: 1, transform: 'scale(1.4)', filter: 'brightness(3)' }, ze],
        config: { duration: e, easing: Q.easeOutCubic },
    }),
    Je = () => ({ from: { opacity: 1, filter: 'brightness(1)', transform: 'scale(1)' } }),
    Ke = () => ({ to: Xe, config: { duration: 0, easing: Q.linear } }),
    Qe = () => ({ from: { opacity: 0 } }),
    Ze = () => ({
        to: { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
        config: { duration: 200, easing: Q.easeOutCubic },
    }),
    ea = {
        iconWrapper: 'Compensation_iconWrapper_fc198a86',
        icon: 'Compensation_icon_54e1c9',
        icon__withCounter: 'Compensation_icon__withCounter_4d92acbd',
        particles: 'Compensation_particles_9b14546e',
    },
    aa = i(function ({ reward: e, rowIndex: a, rewardIndex: s, size: i, icon: l, className: d = '' }) {
        const { model: m } = fe(),
            { sounds: u, videos: p } = m.computes.resources(),
            { dynamicTexts: _ } = m.computes.dynamicResources(),
            { name: f, value: b } = e.compensation,
            x = t.useRef(null),
            h = f === Z.PremiumPlus ? _.rewardsPremiumDay.plural('premiumDay', Number(b.split(' ').at(-1))) : '',
            [y, v] = o(Ue),
            R = g(ge);
        return (
            t.useEffect(() => {
                const e = (e) => {
                    switch (e.name) {
                        case Ae(Re, a, s).name:
                            x.current?.play();
                            break;
                        case Ae(ve, a, s).name:
                            (se.sound(u.compensationAppear), v.start(Ye()));
                    }
                };
                return (
                    R.events.on('change', e),
                    () => {
                        R.events.off('change', e);
                    }
                );
            }, [u, R.events, a, s]),
            t.useEffect(() => {
                const e = () => {
                    v.start(Ye(0));
                };
                return (
                    R.events.on('skipAll', e),
                    () => {
                        R.events.off('skipAll', e);
                    }
                );
            }),
            n.jsxs(Ge.Compensation, {
                className: r(ea.base, d),
                children: [
                    n.jsx(ee, { ref: x, className: ea.particles, src: p.compensationParticles }),
                    n.jsx(c.div, {
                        style: { ...y },
                        children: n.jsx(
                            w,
                            {
                                icon: S(e, ae.Big, e.isCompensation),
                                sizes: { height: i.rewardHeight, width: i.rewardWidth },
                            },
                            'compensation_image',
                        ),
                    }),
                    n.jsx(c.div, {
                        style: { opacity: y.opacity },
                        className: ea.iconWrapper,
                        children: n.jsx(
                            w,
                            {
                                icon: l,
                                sizes: { height: i.compensationIconHeight, width: i.compensationIconWidth },
                                className: r(ea.icon, b.length > 0 && ea.icon__withCounter),
                            },
                            'compensation_icon',
                        ),
                    }),
                    b.length > 0 &&
                        n.jsx(c.div, {
                            style: { opacity: y.opacity },
                            children: n.jsx(Ge.Title, { type: f, text: b, plural: h }),
                        }),
                ],
            })
        );
    }),
    sa = 'Card_8b62cf15',
    ta = 'Card_reward_ff2c5c28',
    ia = 'Card_compensation_46864467',
    na = 'Card_title_43ce242d',
    ra = 'Card_vehicleTitle_a2262475',
    oa = 'Card_loupeWrapper_e3dd749b',
    ca = 'Card_video_30ee6c3b',
    la = [Z.Vehicles, Z.TmanToken],
    da = {
        rewardHeight: '80rem',
        rewardWidth: '80rem',
        countHeight: '18rem',
        compensationIconWidth: '24rem',
        compensationIconHeight: '24rem',
        nameHeight: '20rem',
        descriptionHeight: '20rem',
        imageSize: ae.Big,
        premDaysHeight: '65rem',
        premDaysWidth: '65rem',
    },
    ma = { opacity: 0, display: 'none' },
    ua = { opacity: 1, display: 'flex' },
    pa = { to: ua, config: { duration: 500, easing: Q.easeOutCubic } },
    _a = i(function ({ reward: e, rewardIndex: a, rowIndex: s }) {
        const { model: i, controls: r } = fe(),
            { images: d, texts: m, videos: u, sounds: _ } = i.computes.resources(),
            { dynamicTexts: f } = i.computes.dynamicResources(),
            w = i.info.eventName.get(),
            [v, R] = t.useState(!1),
            { tooltipContentId: N, tooltipId: C } = e,
            j = l(y, (e) => e.value),
            [A, I] = o(L(e) ? Qe : Me),
            [k, O] = o(Je),
            [T, B] = o(() => ({ from: ma })),
            P = te({
                contentId: Number(N),
                args: { tooltipId: C, boxCategory: e.icon, eventName: w },
                disabled: j !== b.initial,
            }),
            V =
                e.name === Z.PremiumPlus
                    ? f.rewardsPremiumDay.plural('premiumDay', Number(e.value.split(' ').at(-1)))
                    : '',
            S = g(ge);
        (t.useEffect(() => {
            const t = (t) => {
                switch (t.name) {
                    case Ae(be, s).name:
                        L(e) || 0 !== a || (I.start(Fe()), se.sound(_.multiRewardAppear));
                        break;
                    case Ae(xe, s, a).name:
                        (I.start(L(e) ? Fe() : Ze()), se.sound(_.multiRewardAppear));
                        break;
                    case Ae(ye, s, a).name:
                        R(!0);
                        break;
                    case Ae(he, s, a).name:
                        r.setActiveRareReward(e);
                        break;
                    case Ae(Re, s, a).name:
                        O.start({
                            to: { opacity: 1, transform: 'scale(1.15)', filter: 'brightness(3)' },
                            config: { duration: 2500, easing: Q.linear },
                        });
                        break;
                    case Ae(ve, s, a).name:
                        O.start(Ke());
                }
            };
            return (
                S.events.on('change', t),
                () => {
                    S.events.off('change', t);
                }
            );
        }, [S.events, s, a, e, I, r, O, _]),
            t.useEffect(() => {
                const a = () => {
                    (I.start(L(e) ? Ze() : { to: qe, config: { duration: 0, easing: Q.easeOutCubic } }),
                        e.isCompensation && O.start(Ke()));
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
                    case b.skip:
                        B.set(ua);
                        break;
                    case b.preparation:
                        B.set(ma);
                        break;
                    case b.page:
                        B.start(pa);
                }
            }, [j]));
        const E = G(e.rarity) ? u.rareGlow : q(e.rarity) ? u.commonGlow : '';
        return n.jsxs(Ge, {
            ...P,
            className: sa,
            children: [
                n.jsx(c.div, {
                    style: { ...A },
                    children: n.jsxs(Ge.Content, {
                        children: [
                            Boolean(E) && n.jsx(Ge.Glow, { src: E }),
                            n.jsx(c.div, {
                                style: { ...k },
                                children: n.jsx(x, {
                                    reward: e,
                                    countText: m.multiplier,
                                    sizes: da,
                                    className: ta,
                                    currentAnimationState: j,
                                }),
                            }),
                            n.jsxs(c.div, {
                                style: { opacity: k.opacity },
                                className: na,
                                children: [
                                    e.name === Z.Vehicles &&
                                        n.jsx(Ge.VehicleTitle, { vehicleName: e.vehicleShortName, className: ra }),
                                    !la.includes(e.name) && n.jsx(Ge.Title, { type: e.name, text: e.value, plural: V }),
                                ],
                            }),
                            z(e) &&
                                !e.isCompensation &&
                                n.jsx(c.div, {
                                    style: T,
                                    className: oa,
                                    children: n.jsx(Ge.Preview, {
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
                                n.jsx(aa, {
                                    reward: e,
                                    size: da,
                                    icon: d.compensationIcon,
                                    rowIndex: s,
                                    rewardIndex: a,
                                    className: ia,
                                }),
                        ],
                    }),
                }),
                L(e) &&
                    !p(w, e.specialAwardName) &&
                    n.jsx(h, {
                        className: ca,
                        sound: e.rarity === $.Rare ? _.rareAnimation : _.epicAnimation,
                        src: u[e.rarity],
                        show: v,
                        timer: { remainder: 0.5, next: S.resume },
                    }),
            ],
        });
    }),
    fa = {
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
    ga = i(function ({ order: e, rewards: a, isLast: s }) {
        const { model: t } = fe(),
            i = t.computes.maxRewardsInLine();
        return n.jsxs(Pe, {
            className: fa.base,
            style: { width: ((o = i), 28 + 108 * o) + 'rem' },
            children: [
                n.jsx(Pe.Ordinal, { className: r(fa.ordinal, fa['ordinal__' + (e - 1)]), children: e }),
                Y(a, (a, s) =>
                    n.jsx(
                        _a,
                        { reward: a, rewardIndex: s, rowIndex: e - 1 },
                        `reward_${e - 1}_${s}_${t.sessionalNumberOpenings.get()}`,
                    ),
                ),
                !s && n.jsx(Pe.Divider, { className: r(fa.divider, fa['divider__' + (e - 1)]) }),
            ],
        });
        var o;
    }),
    wa = 'Layout_1c0c8eb5',
    ba = 'Layout_base__ready_73e4204f',
    xa = 'Layout_overlay_2156876',
    ha = 'Layout_subtitle_f8a07960',
    ya = 'Layout_animation_83d4bf75',
    va = { opacity: 0 },
    Ra = { opacity: 1 },
    Na = {
        to: Ra,
        config: { duration: 500, easing: Q.easeOutCubic },
        onRest: () => {
            y.send({ type: I.toInitial });
        },
    },
    Ca = i(function () {
        const { model: e, controls: a } = fe(),
            { boxesCount: s, boxCategory: i, isWindowAccessible: d, isShopVisible: u } = e.root.get(),
            _ = e.info.isAnimationActive.get(),
            f = e.info.eventName.get(),
            w = e.info.openingCount.get(),
            x = e.activeRareReward.get(),
            { resources: h, dynamicResources: R, rewardsListByBoxes: k } = e.computes,
            { texts: O, images: T, sounds: B } = h(),
            { dynamicTexts: P } = R(),
            V = k(),
            {
                breakpoint: { weight: S },
            } = ie(),
            E = l(y, (e) => e.value),
            [D, $] = o(() => ({ from: va })),
            W = g(ge);
        t.useEffect(() => {
            switch (v(E)) {
                case b.skip:
                    ($.set(Ra), W.skipAll());
                    break;
                case b.preparation:
                    ($.set(va), W.reset());
                    break;
                case b.rewards:
                    W.start();
                    break;
                case b.page:
                    $.start(Na);
            }
        }, [E]);
        return n.jsxs(N, {
            className: r(wa, E === b.initial && ba),
            children: [
                Boolean(x && p(f, x?.specialAwardName)) &&
                    n.jsx(N.Overlay, {
                        className: xa,
                        children: n.jsx(C, {
                            res: j(f, x?.specialAwardName),
                            rareBonus: x,
                            texts: O,
                            controls: {
                                onClose: () => {
                                    (a.setActiveRareReward(null), W.resume());
                                },
                                onPlay: () => a.setIsVideoPlaying(!0),
                                onEnded: () => a.setIsVideoPlaying(!1),
                            },
                            minimized: !d,
                        }),
                    }),
                n.jsx(c.div, {
                    style: D,
                    className: ya,
                    children: n.jsxs(N.Header, {
                        children: [
                            n.jsx(m, {
                                title: O.headerTitle,
                                subTitle: i
                                    ? n.jsx(K, {
                                          text: O.headerSubtitle,
                                          binding: { name: P.boxCategory.dynOpt(i), boxesCount: V.length },
                                          classMix: ha,
                                      })
                                    : '',
                            }),
                            n.jsx(N.CloseButton, { text: O.closeButton, onClick: a.close }),
                        ],
                    }),
                }),
                n.jsx(N.Body, {
                    children: Y(V, (e, a) =>
                        n.jsx(ga, { order: a + 1, isLast: a === V.length - 1, rewards: e }, `rewards_row_${a}`),
                    ),
                }),
                n.jsx(c.div, {
                    style: D,
                    className: ya,
                    children: n.jsxs(N.Footer, {
                        children: [
                            ne.isHigh() &&
                                n.jsx(N.Checkbox, {
                                    isActive: _,
                                    onClick: () => {
                                        a.toggleAnimationState(_);
                                    },
                                    text: O.checkbox,
                                    size: S >= oe.medium.weight ? re.extraLarge : re.large,
                                }),
                            n.jsx(A, {
                                texts: O,
                                images: T,
                                sounds: B,
                                actions: {
                                    ...a,
                                    openNext: () => {
                                        (a.incSessionalNumberOpenings(), y.send({ type: I.toPreparation }));
                                    },
                                },
                                boxesCount: s,
                                openingCount: w,
                                isShopVisible: u,
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    ja = 'App_0',
    Aa = 'App_background_bb0bfe54',
    Ia = 'App_loaderWrapper_60701c61',
    ka = i(function () {
        const { model: e, controls: a } = fe(),
            { images: s, texts: i } = e.computes.resources(),
            { isWindowAccessible: r } = e.root.get(),
            o = e.info.isAnimationActive.get(),
            m = e.info.isAwaitingResponse.get(),
            u = e.computes.hasRareReward(),
            p = e.info.isReopen.get(),
            _ = e.computes.multimediaResource(),
            f = l(y, (e) => e.value),
            w = g(ge);
        (t.useEffect(() => {
            const e = (e) => {
                e.name === Ne && y.send({ type: I.toPage });
            };
            return (
                w.events.on('change', e),
                () => {
                    w.events.off('change', e);
                }
            );
        }, [w.events]),
            ce(() => {
                f === b.initial && a.close();
            }),
            t.useEffect(
                () => (
                    y.start(),
                    () => {
                        y.stop();
                    }
                ),
                [],
            ),
            t.useEffect(() => {
                y.send({ type: I.setAnimationActive, isAnimationActive: o });
            }, [o]),
            k(p, m, f));
        const { loadingStyle: x, contentStyle: h } = O(f, a.openNext);
        return n.jsxs(T, {
            className: ja,
            ref: w.rootRef,
            children: [
                n.jsx(B, {
                    activeType: u ? d.rare : d.common,
                    minimized: !r,
                    res: _,
                    className: Aa,
                    onPlay: () => a.setIsVideoPlaying(!0),
                    onEnded: () => a.setIsVideoPlaying(!1),
                }),
                v(f) !== P && n.jsx(c.div, { style: h, children: n.jsx(T.Content, { children: n.jsx(Ca, {}) }) }),
                f === b.waiting &&
                    n.jsx(c.div, {
                        style: x,
                        className: Ia,
                        children: n.jsx(T.Waiting, { text: i.loader, image: s.loader }),
                    }),
            ],
        });
    }),
    Oa = () => n.jsx(_e, { options: u.MULTIPLE_REWARD, children: n.jsx(ke, { children: n.jsx(ka, {}) }) });
export { Oa as default };
