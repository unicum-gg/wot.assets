import { o as e, k as a, f as s, r as t, m as i, j as n, e as r, h as o, i as c, p as l } from './vendor.js';
import { b as d, H as m, M as u } from './use_cover_size.js';
import {
    h as p,
    c as _,
    k as f,
    u as g,
    I as w,
    a as b,
    R as x,
    e as y,
    b as h,
    s as v,
    C as N,
    f as j,
    r as C,
    F as A,
    d as I,
    g as k,
    i as T,
    P as O,
    B,
    j as P,
} from './reward.js';
import { a as V, g as S } from './getRewardImage.js';
import { a as E, g as D, B as $, d as L } from './resources.js';
import { a as H, f as W, h as G, b as q, i as z } from './utils.js';
import {
    i as X,
    c as M,
    q as F,
    t as U,
    m as Y,
    a3 as J,
    k as K,
    a1 as Q,
    R as Z,
    ac as ee,
    I as ae,
    n as se,
    u as te,
    Y as ie,
    P as ne,
    _ as re,
    $ as oe,
    d as ce,
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
                o = a(() => F(r(), (e) => F(e, (e) => H(e))), { equals: M }),
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
                        u = L(V(R.sounds, `${me.open}_${t.info.eventName.get()}_${e}`), m.open, me.open),
                        p = L(V(R.sounds, `${me.openRare}_${t.info.eventName.get()}_${e}`), m.openRare, me.openRare);
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
    ye = 'OVERLAY_REWARD',
    he = 'RARE_VIDEO',
    ve = 'COMPENSATION',
    Re = 'TWITCH',
    Ne = 'FINISH',
    je = {
        [we]: { duration: 300 },
        [be]: { duration: 200 },
        [xe]: { duration: 150 },
        [ye]: { duration: 0, pauseNextSteps: !0 },
        [he]: { duration: 0, pauseNextSteps: !0 },
        [Re]: { duration: 2e3 },
        [ve]: { duration: 1e3, delay: 50 },
        [Ne]: { name: Ne, duration: 0, delay: 100 },
    },
    Ce = (e, a, s) => {
        switch (e) {
            case we:
                return `animation_${a}`;
            case be:
                return `animation_${a}_${be}`;
            default:
                return `animation_${a}_${s}_${e}`;
        }
    },
    Ae = (e, a, s) => ({ ...je[e], name: Ce(e, a, s) }),
    Ie = (e, a) => {
        const s = [];
        return (
            U(
                e,
                (e, s, t) => (
                    0 !== t && e.push(Ae(we, t)),
                    e.push(Ae(be, t)),
                    Y(s, (s, i) => {
                        const n = H(s),
                            r = p(a, s.specialAwardName);
                        (n
                            ? (r ? e.push(Ae(ye, t, i)) : e.push(Ae(he, t, i)), e.push(Ae(xe, t, i)))
                            : 0 !== i && e.push(Ae(xe, t, i)),
                            s.isCompensation && (e.push(Ae(Re, t, i)), e.push(Ae(ve, t, i))));
                    }),
                    e
                ),
                s,
            ),
            s.push(je.FINISH),
            s
        );
    },
    ke = i(function ({ children: e }) {
        const { model: a } = fe(),
            s = a.info.eventName.get(),
            t = _({ steps: Ie(a.computes.rewardsListByBoxes(), s), autoStart: !1 })();
        return n.jsx(ge.Provider, { value: t, children: e });
    }),
    Te = 'Divider_112e983f';
const Oe = 'Ordinal_20396ebf';
const Be = 'Rewards_6e57cc05';
function Pe({ children: e, className: a, ...s }) {
    return n.jsx('div', { ...s, className: r(Be, a), children: e });
}
((Pe.Ordinal = function ({ children: e, className: a }) {
    return n.jsx('div', { className: r(Oe, a), children: e });
}),
    (Pe.Divider = function ({ className: e }) {
        return n.jsx('div', { className: r(Te, e) });
    }));
const Ve = 'Compensation_22c7fec0';
const Se = 'Content_8f2fef40';
const Ee = 'Glow_86ec1932';
const De = 'PreviewButton_fdc3bedf',
    $e = 'PreviewButton_loupeButton_3b872270';
const Le = {
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
const He = 'VehicleTitle_dd0605a9';
const We = 'RewardCard_447f9fb1';
function Ge({ children: e, className: a, ...s }) {
    return n.jsx('div', { className: r(We, a), ...s, children: e });
}
((Ge.Content = function ({ children: e, className: a }) {
    return n.jsx('div', { className: r(Se, a), children: e });
}),
    (Ge.Glow = function ({ className: e, src: a }) {
        const s = t.useRef(null);
        return (f(s), n.jsx(J, { className: r(Ee, e), src: a, autoplay: !0, loop: !0, ref: s }));
    }),
    (Ge.VehicleTitle = function ({ vehicleName: e, className: a = '' }) {
        return n.jsx('div', { className: r(He, a), children: e });
    }),
    (Ge.Title = function ({ type: e, plural: a, text: s, className: t = '' }) {
        return n.jsxs('div', {
            className: r(Le.base, Le[`base__${e}`], t),
            children: [
                n.jsx('div', { className: Le.value, children: n.jsx(K, { text: W(s) }) }),
                a && n.jsx('span', { className: Le.plural, children: a }),
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
    ea = 'Compensation_iconWrapper_fc198a86',
    aa = 'Compensation_db29c4dc',
    sa = 'Compensation_icon_6c2a22b2',
    ta = 'Compensation_particles_9b14546e',
    ia = i(function ({ reward: e, rowIndex: a, rewardIndex: s, size: i, icon: l, className: d = '' }) {
        const { model: m } = fe(),
            { sounds: u, videos: p } = m.computes.resources(),
            { dynamicTexts: _ } = m.computes.dynamicResources(),
            { name: f, value: b } = e.compensation,
            x = t.useRef(null),
            y = f === Z.PremiumPlus ? _.rewardsPremiumDay.plural('premiumDay', Number(b.split(' ').at(-1))) : '',
            [h, v] = o(Ue),
            R = g(ge);
        return (
            t.useEffect(() => {
                const e = (e) => {
                    var t;
                    switch (e.name) {
                        case Ae(Re, a, s).name:
                            null == (t = x.current) || t.play();
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
                className: r(aa, d),
                children: [
                    n.jsx(ee, { ref: x, className: ta, src: p.compensationParticles }),
                    n.jsx(c.div, {
                        style: { ...h },
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
                        style: { opacity: h.opacity },
                        className: ea,
                        children: n.jsx(
                            w,
                            {
                                icon: l,
                                sizes: { height: i.compensationIconHeight, width: i.compensationIconWidth },
                                className: sa,
                            },
                            'compensation_icon',
                        ),
                    }),
                    b.length > 0 &&
                        n.jsx(c.div, {
                            style: { opacity: h.opacity },
                            children: n.jsx(Ge.Title, { type: f, text: b, plural: y }),
                        }),
                ],
            })
        );
    }),
    na = 'Card_8b62cf15',
    ra = 'Card_reward_ff2c5c28',
    oa = 'Card_compensation_60c06806',
    ca = 'Card_title_43ce242d',
    la = 'Card_vehicleTitle_c978735f',
    da = 'Card_loupeWrapper_e3dd749b',
    ma = 'Card_video_30ee6c3b',
    ua = [Z.Vehicles, Z.TmanToken],
    pa = {
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
    _a = { opacity: 0, display: 'none' },
    fa = { opacity: 1, display: 'flex' },
    ga = { to: fa, config: { duration: 500, easing: Q.easeOutCubic } },
    wa = i(function ({ reward: e, rewardIndex: a, rowIndex: s }) {
        const { model: i, controls: r } = fe(),
            { images: d, texts: m, videos: u, sounds: _ } = i.computes.resources(),
            { dynamicTexts: f } = i.computes.dynamicResources(),
            w = i.info.eventName.get(),
            [v, R] = t.useState(!1),
            { tooltipContentId: N, tooltipId: j } = e,
            C = l(h, (e) => e.value),
            [A, I] = o(H(e) ? Qe : Me),
            [k, T] = o(Je),
            [O, B] = o(() => ({ from: _a })),
            P = te({
                contentId: Number(N),
                args: { tooltipId: j, boxCategory: e.icon, eventName: w },
                disabled: C !== b.initial,
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
                        H(e) || 0 !== a || (I.start(Fe()), se.sound(_.multiRewardAppear));
                        break;
                    case Ae(xe, s, a).name:
                        (I.start(H(e) ? Fe() : Ze()), se.sound(_.multiRewardAppear));
                        break;
                    case Ae(he, s, a).name:
                        R(!0);
                        break;
                    case Ae(ye, s, a).name:
                        r.setActiveRareReward(e);
                        break;
                    case Ae(Re, s, a).name:
                        T.start({
                            to: { opacity: 1, transform: 'scale(1.15)', filter: 'brightness(3)' },
                            config: { duration: 2500, easing: Q.linear },
                        });
                        break;
                    case Ae(ve, s, a).name:
                        T.start(Ke());
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
                    (I.start(H(e) ? Ze() : { to: qe, config: { duration: 0, easing: Q.easeOutCubic } }),
                        e.isCompensation && T.start(Ke()));
                };
                return (
                    S.events.on('skipAll', a),
                    () => {
                        S.events.off('skipAll', a);
                    }
                );
            }),
            t.useEffect(() => {
                switch (C) {
                    case b.skip:
                        B.set(fa);
                        break;
                    case b.preparation:
                        B.set(_a);
                        break;
                    case b.page:
                        B.start(ga);
                }
            }, [C]));
        const E = G(e.rarity) ? u.rareGlow : q(e.rarity) ? u.commonGlow : '';
        return n.jsxs(Ge, {
            ...P,
            className: na,
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
                                    sizes: pa,
                                    className: ra,
                                    currentAnimationState: C,
                                }),
                            }),
                            n.jsxs(c.div, {
                                style: { opacity: k.opacity },
                                className: ca,
                                children: [
                                    e.name === Z.Vehicles &&
                                        n.jsx(Ge.VehicleTitle, { vehicleName: e.vehicleShortName, className: la }),
                                    !ua.includes(e.name) && n.jsx(Ge.Title, { type: e.name, text: e.value, plural: V }),
                                ],
                            }),
                            z(e) &&
                                !e.isCompensation &&
                                n.jsx(c.div, {
                                    style: O,
                                    className: da,
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
                                n.jsx(ia, {
                                    reward: e,
                                    size: pa,
                                    icon: d.compensationIcon,
                                    rowIndex: s,
                                    rewardIndex: a,
                                    className: oa,
                                }),
                        ],
                    }),
                }),
                H(e) &&
                    !p(w, e.specialAwardName) &&
                    n.jsx(y, {
                        className: ma,
                        sound: e.rarity === $.Rare ? _.rareAnimation : _.epicAnimation,
                        src: u[e.rarity],
                        show: v,
                        timer: { remainder: 0.5, next: S.resume },
                    }),
            ],
        });
    }),
    ba = {
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
    xa = i(function ({ order: e, rewards: a, isLast: s }) {
        const { model: t } = fe(),
            i = t.computes.maxRewardsInLine();
        return n.jsxs(Pe, {
            className: ba.base,
            style: { width: ((o = i), 28 + 108 * o) + 'rem' },
            children: [
                n.jsx(Pe.Ordinal, { className: r(ba.ordinal, ba['ordinal__' + (e - 1)]), children: e }),
                Y(a, (a, s) =>
                    n.jsx(
                        wa,
                        { reward: a, rewardIndex: s, rowIndex: e - 1 },
                        `reward_${e - 1}_${s}_${t.sessionalNumberOpenings.get()}`,
                    ),
                ),
                !s && n.jsx(Pe.Divider, { className: r(ba.divider, ba['divider__' + (e - 1)]) }),
            ],
        });
        var o;
    }),
    ya = 'Layout_1c0c8eb5',
    ha = 'Layout_base__ready_73e4204f',
    va = 'Layout_overlay_2156876',
    Ra = 'Layout_subtitle_f8a07960',
    Na = 'Layout_animation_83d4bf75',
    ja = { opacity: 0 },
    Ca = { opacity: 1 },
    Aa = {
        to: Ca,
        config: { duration: 500, easing: Q.easeOutCubic },
        onRest: () => {
            h.send({ type: I.toInitial });
        },
    },
    Ia = i(function () {
        const { model: e, controls: a } = fe(),
            { boxesCount: s, boxCategory: i, isWindowAccessible: d, isShopVisible: u } = e.root.get(),
            _ = e.info.isAnimationActive.get(),
            f = e.info.eventName.get(),
            w = e.info.openingCount.get(),
            x = e.activeRareReward.get(),
            { resources: y, dynamicResources: R, rewardsListByBoxes: k } = e.computes,
            { texts: T, images: O, sounds: B } = y(),
            { dynamicTexts: P } = R(),
            V = k(),
            {
                breakpoint: { weight: S },
            } = ie(),
            E = l(h, (e) => e.value),
            [D, $] = o(() => ({ from: ja })),
            L = g(ge);
        t.useEffect(() => {
            switch (v(E)) {
                case b.skip:
                    ($.set(Ca), L.skipAll());
                    break;
                case b.preparation:
                    ($.set(ja), L.reset());
                    break;
                case b.rewards:
                    L.start();
                    break;
                case b.page:
                    $.start(Aa);
            }
        }, [E]);
        return n.jsxs(N, {
            className: r(ya, E === b.initial && ha),
            children: [
                Boolean(x && p(f, null == x ? void 0 : x.specialAwardName)) &&
                    n.jsx(N.Overlay, {
                        className: va,
                        children: n.jsx(j, {
                            res: C(f, null == x ? void 0 : x.specialAwardName),
                            rareBonus: x,
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
                    className: Na,
                    children: n.jsxs(N.Header, {
                        children: [
                            n.jsx(m, {
                                title: T.headerTitle,
                                subTitle: i
                                    ? n.jsx(K, {
                                          text: T.headerSubtitle,
                                          binding: { name: P.boxCategory.dynOpt(i), boxesCount: V.length },
                                          classMix: Ra,
                                      })
                                    : '',
                            }),
                            n.jsx(N.CloseButton, { text: T.closeButton, onClick: a.close }),
                        ],
                    }),
                }),
                n.jsx(N.Body, {
                    children: Y(V, (e, a) =>
                        n.jsx(xa, { order: a + 1, isLast: a === V.length - 1, rewards: e }, `rewards_row_${a}`),
                    ),
                }),
                n.jsx(c.div, {
                    style: D,
                    className: Na,
                    children: n.jsxs(N.Footer, {
                        children: [
                            ne.isHigh() &&
                                n.jsx(N.Checkbox, {
                                    isActive: _,
                                    onClick: () => {
                                        a.toggleAnimationState(_);
                                    },
                                    text: T.checkbox,
                                    size: S >= oe.medium.weight ? re.extraLarge : re.large,
                                }),
                            n.jsx(A, {
                                texts: T,
                                images: O,
                                sounds: B,
                                actions: {
                                    ...a,
                                    openNext: () => {
                                        (a.incSessionalNumberOpenings(), h.send({ type: I.toPreparation }));
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
    ka = 'App_0',
    Ta = 'App_background_bb0bfe54',
    Oa = 'App_loaderWrapper_60701c61',
    Ba = i(function () {
        const { model: e, controls: a } = fe(),
            { images: s, texts: i } = e.computes.resources(),
            { isWindowAccessible: r } = e.root.get(),
            o = e.info.isAnimationActive.get(),
            m = e.info.isAwaitingResponse.get(),
            u = e.computes.hasRareReward(),
            p = e.info.isReopen.get(),
            _ = e.computes.multimediaResource(),
            f = l(h, (e) => e.value),
            w = g(ge);
        (t.useEffect(() => {
            const e = (e) => {
                e.name === Ne && h.send({ type: I.toPage });
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
                    h.start(),
                    () => {
                        h.stop();
                    }
                ),
                [],
            ),
            t.useEffect(() => {
                h.send({ type: I.setAnimationActive, isAnimationActive: o });
            }, [o]),
            k(p, m, f));
        const { loadingStyle: x, contentStyle: y } = T(f, a.openNext);
        return n.jsxs(O, {
            className: ka,
            ref: w.rootRef,
            children: [
                n.jsx(B, {
                    activeType: u ? d.rare : d.common,
                    minimized: !r,
                    res: _,
                    className: Ta,
                    onPlay: () => a.setIsVideoPlaying(!0),
                    onEnded: () => a.setIsVideoPlaying(!1),
                }),
                v(f) !== P && n.jsx(c.div, { style: y, children: n.jsx(O.Content, { children: n.jsx(Ia, {}) }) }),
                f === b.waiting &&
                    n.jsx(c.div, {
                        style: x,
                        className: Oa,
                        children: n.jsx(O.Waiting, { text: i.loader, image: s.loader }),
                    }),
            ],
        });
    }),
    Pa = () => n.jsx(_e, { options: u.MULTIPLE_REWARD, children: n.jsx(ke, { children: n.jsx(Ba, {}) }) });
export { Pa as default };
