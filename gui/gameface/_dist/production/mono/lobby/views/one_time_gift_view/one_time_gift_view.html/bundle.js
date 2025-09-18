import {
    s as e,
    t as a,
    r as s,
    v as t,
    w as n,
    j as i,
    x as o,
    q as l,
    p as r,
    R as c,
    e as d,
    y as _,
} from '../../../chunks/vendor.js';
import {
    i as u,
    e as m,
    f as h,
    u as v,
    g as p,
    I as b,
    h as N,
    m as x,
    R as f,
    j as g,
    l as y,
    n as j,
    o as C,
    r as w,
    p as A,
    q as T,
    v as E,
    w as S,
    V as B,
    c as I,
    d as O,
    x as k,
    B as L,
    t as H,
    k as W,
    J as D,
    U as V,
    y as M,
    z as P,
    A as z,
    C as $,
    D as F,
    E as U,
    G as Q,
    H as G,
    K as Z,
    L as q,
    M as Y,
    N as J,
    O as K,
    P as X,
    F as ee,
    Q as ae,
    S as se,
    W as te,
    X as ne,
    Y as ie,
    Z as oe,
    _ as le,
    $ as re,
    a0 as ce,
    a1 as de,
    a2 as _e,
    a3 as ue,
    b as me,
    a4 as he,
    s as ve,
    a5 as pe,
    a6 as be,
    a as Ne,
} from '../../../chunks/lib.js';
import { C as xe } from '../../../chunks/close_button.js';
const fe = 'pending',
    [ge, ye] = u()(
        ({ observableModel: a }) => ({ root: a.object(), loadState: e.box(fe) }),
        ({ model: e }) => ({ updateLoadState: a((a) => e.loadState.set(a)) }),
    );
var je = ((e) => (
    (e[(e.INTRO = 0)] = 'INTRO'),
    (e[(e.BRANCH_SELECTION = 1)] = 'BRANCH_SELECTION'),
    (e[(e.BRANCH_REWARD = 2)] = 'BRANCH_REWARD'),
    (e[(e.PREMIUM_VEHICLES_REWARD = 3)] = 'PREMIUM_VEHICLES_REWARD'),
    (e[(e.ADDITIONAL_REWARD = 4)] = 'ADDITIONAL_REWARD'),
    (e[(e.COLLECTORS_COMPENSATION_REWARD = 5)] = 'COLLECTORS_COMPENSATION_REWARD'),
    e
))(je || {});
var Ce = ((e) => (
    (e.BRANCH_REWARD = 'BranchReward'),
    (e.COLLECTORS_COMPENSATION_REWARD = 'CollectorsCompensationReward'),
    (e.BONUS_VEHICLES_REWARD = 'BonusVehiclesReward'),
    (e.ADDITIONAL_REWARD = 'AdditionalReward'),
    e
))(Ce || {});
const [Re, we] = u()(
        ({ observableModel: e }) => {
            const a = {
                    ...e.primitives([
                        'background',
                        'title',
                        'subTitle',
                        'underTitle',
                        'bottomNote',
                        'defaultButtonTitle',
                        'rewardType',
                        'boxRewardsCount',
                    ]),
                    mainRewards: e.array('mainRewards'),
                    vehicleRewards: e.array('vehicleRewards'),
                    additionalRewards: e.array('additionalRewards'),
                },
                s = t(() => a.mainRewards.get().items.length > 0),
                n = t(() => a.additionalRewards.get().items.length > 0);
            return { ...a, computes: { hasMainRewards: s, hasAdditionalRewards: n } };
        },
        ({ externalModel: e }) => ({
            onAnimationEnded: e.createCallbackNoArgs('onAnimationEnded'),
            close: e.createCallback((e) => ({ reason: e }), 'onClose'),
        }),
    ),
    Ae = 'AnimatedReward_1789d927',
    Te = ({ children: e, animationConfig: a, className: t, rewardType: r }) => {
        const [c, d] = n(() => ({ from: a.from, config: a.config }));
        return (
            s.useLayoutEffect(() => {
                (d.start({ to: a.to, delay: a.delay, config: a.config, onStart: a.onStart }), d.set(a.from));
            }, [r]),
            i.jsx(o.div, { style: c, className: l(Ae, t), children: e })
        );
    },
    Ee = 'AdditionalRewards_53a89fa7',
    Se = 'AdditionalRewards_content_34d2f43d',
    Be = 'AdditionalRewards_rewards_58c1c53e',
    Ie = 'AdditionalRewards_title_28018042',
    Oe = 'AdditionalRewards_reward_e72a464e',
    ke = 'AdditionalRewards_rewardsList_532db93b',
    Le = 'AdditionalRewards_rewardInfo_20eadc07',
    He = 'AdditionalRewards_rewardInfo__vehicle_e93fc590',
    We = 'AdditionalRewards_rewardInfoBox_9867803e',
    De = ({
        rewards: e,
        title: a,
        className: t,
        boxRewardsCount: r,
        titleDelay: c = 0,
        oneCountDelay: d,
        duration: _,
        rewardType: u,
    }) => {
        const m = v({ size: p.small }, { medium: { size: p.medium } }).size.weight === p.small.weight ? b.Small : b.Big,
            h = s.useMemo(() => ({ contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId') }), []),
            T = (e) => ({
                from: { opacity: 0, y: '20rem', pointerEvents: 'none' },
                to: { opacity: 1, y: '0rem', pointerEvents: 'auto' },
                trail: 80,
                delay: d + 80 * e,
                config: { duration: _, easings: N.easeOutQuad },
                onStart: () => {
                    A.sound('gui_random_reward_icon');
                },
            }),
            E = n(
                ((e, a) => ({
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                    delay: a,
                    config: { duration: e, easings: N.easeOutQuad },
                }))(_, c || 0),
            );
        return i.jsx('div', {
            className: l(Ee, t),
            children: i.jsx('div', {
                className: Se,
                children: i.jsxs('div', {
                    className: Be,
                    children: [
                        a && i.jsx(o.div, { style: E, children: i.jsx('div', { className: Ie, children: a }) }),
                        i.jsxs('div', {
                            className: ke,
                            children: [
                                x(e, (e, a) =>
                                    i.jsx(
                                        Te,
                                        {
                                            animationConfig: T(a),
                                            className: Oe,
                                            rewardType: u,
                                            children: i.jsx(f, {
                                                name: e.name,
                                                image: j(
                                                    {
                                                        item: e.item,
                                                        type: e.overlayType,
                                                        icon: e.icon,
                                                        name: e.name,
                                                        value: e.value,
                                                    },
                                                    m,
                                                ),
                                                special: e.overlayType,
                                                value: 'vehicles_rent' === e.name ? e.label : e.value,
                                                valueType: y(e.name),
                                                size: m,
                                                tooltipArgs: g({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                                classNames: { info: l(Le, 'vehicles_rent' === e.name && He) },
                                            }),
                                        },
                                        `reward${a}`,
                                    ),
                                ),
                                !!r &&
                                    i.jsx(
                                        Te,
                                        {
                                            animationConfig: T(e.length),
                                            className: Oe,
                                            rewardType: u,
                                            children: i.jsx(f, {
                                                name: 'more',
                                                image: `R.images.gui.maps.icons.quests.bonuses.${m}.default`,
                                                value: C(
                                                    w
                                                        .resolve('strings')
                                                        .readOrEmpty('tooltips.quests.awards.additional.bottom'),
                                                    { count: r },
                                                ),
                                                size: m,
                                                tooltipArgs: h,
                                                classNames: { info: We },
                                            }),
                                        },
                                        `reward${e.length}`,
                                    ),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    Ve = 'TextMask_9987747a',
    Me = 'TextMask_gradient_4dbfb7a9',
    Pe = 'TextMask_gradient__top_f63df556',
    ze = 'TextMask_gradient__bottom_9724ea06',
    $e = ({ text: e, className: a }) =>
        i.jsxs('span', {
            className: l(Ve, a),
            children: [
                e,
                i.jsx('span', { className: l(Me, Pe), children: e }),
                i.jsx('span', { className: l(Me, ze), children: e }),
            ],
        }),
    Fe = ({ text: e, openTag: a, closeTag: s, classNames: t }) => {
        const [n, o] = e.split(a);
        if (!o) return e;
        const [l, r] = o.split(s);
        return i.jsxs('span', {
            className: null == t ? void 0 : t.title,
            children: [n && T(n), l && i.jsx($e, { className: null == t ? void 0 : t.highlight, text: l }), r && T(r)],
        });
    },
    Ue = 'BonusHeader_b16f04f5',
    Qe = 'BonusHeader_subTitleWrapper_8b8eb941',
    Ge = 'BonusHeader_subTitle_9614be4d',
    Ze = 'BonusHeader_arrow_68333095',
    qe = 'BonusHeader_arrowHead_bf969fc8',
    Ye = 'BonusHeader_arrowBody_800f754f',
    Je = 'BonusHeader_arrow__left_befa73a4',
    Ke = 'BonusHeader_arrow__right_befa73a4',
    Xe = 'BonusHeader_crown_a54138d1',
    ea = 'BonusHeader_title_7c34ae96',
    aa = r(() => {
        const { model: e } = we(),
            a = e.title.get(),
            s = e.subTitle.get(),
            t = n({
                from: { opacity: 0, y: '-20rem' },
                to: { opacity: 1, y: '0rem' },
                delay: 100,
                config: { duration: 400, easings: N.easeOutQuad },
                onStart: () => {
                    A.sound('gui_random_reward_red_ribbon_appear');
                },
            }),
            r = n({
                from: { opacity: 0, y: '-20rem' },
                to: { opacity: 1, y: '0rem' },
                delay: 1e3,
                config: { duration: 500, easings: N.easeOutQuad },
                onStart: () => {
                    A.sound('ach_cup_hover');
                },
            });
        return i.jsxs('div', {
            className: Ue,
            children: [
                i.jsxs(o.div, {
                    style: t,
                    className: Qe,
                    children: [
                        i.jsxs('div', {
                            className: l(Ze, Je),
                            children: [i.jsx('div', { className: Ye }), i.jsx('div', { className: qe })],
                        }),
                        s && i.jsx($e, { className: Ge, text: s }),
                        i.jsxs('div', {
                            className: l(Ze, Ke),
                            children: [i.jsx('div', { className: qe }), i.jsx('div', { className: Ye })],
                        }),
                        i.jsx('div', { className: Xe }),
                    ],
                }),
                a &&
                    i.jsx(o.div, {
                        style: r,
                        className: ea,
                        children: i.jsx(Fe, { text: a, openTag: '{gold_Open}', closeTag: '{gold_Close}' }),
                    }),
            ],
        });
    }),
    sa = 'CollectedHeader_93ac1b39',
    ta = 'CollectedHeader_subTitleWrapper_9eb52e84',
    na = 'CollectedHeader_subTitle_f443b078',
    ia = 'CollectedHeader_arrow_599b619a',
    oa = 'CollectedHeader_arrowHead_1a55925',
    la = 'CollectedHeader_arrowBody_a26a8fe9',
    ra = 'CollectedHeader_arrow__left_2c7ec7c5',
    ca = 'CollectedHeader_arrow__right_2c7ec7c5',
    da = 'CollectedHeader_title_f48bf418',
    _a = 'CollectedHeader_underTitleWrapper_c3940abf',
    ua = 'CollectedHeader_wing_79296988',
    ma = 'CollectedHeader_wing__left_a750988c',
    ha = 'CollectedHeader_wing__right_82b21675',
    va = 'CollectedHeader_underTitle_fcf30f13',
    pa = r(() => {
        const { model: e } = we(),
            a = e.title.get(),
            s = e.subTitle.get(),
            t = e.underTitle.get(),
            r = n({
                from: { opacity: 0, y: '-20rem' },
                to: { opacity: 1, y: '0rem' },
                delay: 100,
                config: { duration: 400, easings: N.easeOutQuad },
                onStart: () => {
                    A.sound('gui_random_reward_red_ribbon_appear');
                },
            }),
            c = n({
                from: { opacity: 0, y: '-20rem' },
                to: { opacity: 1, y: '0rem' },
                delay: 1e3,
                config: { duration: 500, easings: N.easeOutQuad },
                onStart: () => {
                    A.sound('ach_cup_hover');
                },
            });
        return i.jsxs('div', {
            className: sa,
            children: [
                i.jsxs(o.div, {
                    style: r,
                    className: ta,
                    children: [
                        i.jsxs('div', {
                            className: l(ia, ra),
                            children: [i.jsx('div', { className: la }), i.jsx('div', { className: oa })],
                        }),
                        s && i.jsx($e, { className: na, text: s }),
                        i.jsxs('div', {
                            className: l(ia, ca),
                            children: [i.jsx('div', { className: oa }), i.jsx('div', { className: la })],
                        }),
                    ],
                }),
                a &&
                    i.jsx(o.div, {
                        style: c,
                        className: da,
                        children: i.jsx(Fe, { text: a, openTag: '{gold_Open}', closeTag: '{gold_Close}' }),
                    }),
                i.jsxs('div', {
                    className: _a,
                    children: [
                        t && i.jsx('div', { className: va, children: t }),
                        i.jsx('div', { className: l(ua, ma) }),
                        i.jsx('div', { className: l(ua, ha) }),
                    ],
                }),
            ],
        });
    }),
    ba = 'Header_7d83acf6',
    Na = 'Header_title_565d35b6',
    xa = () => ({
        from: { opacity: 0, y: '-20rem' },
        to: { opacity: 1, y: '0' },
        delay: 100,
        config: { duration: 300, easings: N.easeOutQuad },
    }),
    fa = r(({ rewardType: e }) => {
        const { model: a } = we(),
            [t, l] = n(() => xa()),
            r = a.title.get();
        return (
            s.useLayoutEffect(() => {
                (l.start({
                    ...xa(),
                    onStart: () => {
                        A.sound('gui_random_reward_red_ribbon_appear');
                    },
                }),
                    l.set({ opacity: 0, y: '-20rem' }));
            }, [e]),
            i.jsx(o.div, { style: t, className: ba, children: i.jsx('div', { className: Na, children: r }) })
        );
    }),
    ga = {
        root: 'MainRewards_root_56da68ed',
        info: 'MainRewards_info_ac9a95de',
        title: 'MainRewards_title_b9294abf',
        base: 'MainRewards_f647a436',
        reward: 'MainRewards_reward_7b876cb8',
        captions: 'MainRewards_captions_ae24e231',
        base__CollectorsCompensationReward: 'MainRewards_base__CollectorsCompensationReward_56da68ed',
        base__AdditionalReward: 'MainRewards_base__AdditionalReward_56da68ed',
        fadeIn: 'MainRewards_fadeIn_56da68ed',
    },
    ya = (e, a, s, t) => {
        const n = s === Ce.ADDITIONAL_REWARD;
        return {
            from: n
                ? { opacity: 0, scale: 0.75, pointerEvents: 'none' }
                : { opacity: 0, y: '20rem', pointerEvents: 'none' },
            to: n ? { opacity: 1, scale: 1, pointerEvents: 'auto' } : { opacity: 1, y: '0rem', pointerEvents: 'auto' },
            trail: 300,
            delay: a + 300 * t,
            config: { duration: e },
            onStart: () => {
                A.sound('gui_random_reward_appear');
            },
        };
    };
const ja = ({ rewards: e, classNames: a, oneCountDelay: s, duration: t, rewardType: n }) => {
        const o = v({ size: b.S296x222 }, { medium: { size: b.S400x300 } });
        return i.jsx('div', {
            className: l(ga.base, ga[`base__${n}`], null == a ? void 0 : a.base),
            children: x(e, (e, r) => {
                const {
                    value: c,
                    valueType: d,
                    infoStyles: _,
                } = (function (e, a, s) {
                    const t = y(a);
                    return t === S.MULTI && s === Ce.ADDITIONAL_REWARD
                        ? { value: e, valueType: t, infoStyles: ga.info }
                        : { value: '', valueType: '', infoStyles: '' };
                })(e.value, e.name, n);
                return i.jsxs(
                    Te,
                    {
                        animationConfig: ya(t, s, n, r),
                        className: ga.reward,
                        rewardType: n,
                        children: [
                            i.jsx(f, {
                                classNames: { info: _ },
                                name: e.name,
                                image: j(
                                    { item: e.item, type: e.overlayType, icon: e.icon, name: e.name, value: e.value },
                                    o.size,
                                ),
                                special: e.overlayType,
                                size: o.size,
                                tooltipArgs: g({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                value: c,
                                valueType: d,
                            }),
                            i.jsx('div', {
                                className: l(ga.captions, null == a ? void 0 : a.caption),
                                children: i.jsx('div', {
                                    className: ga.title,
                                    children: y(e.name) === S.CURRENCY ? E(e.value, S.CURRENCY) : T(e.label),
                                }),
                            }),
                        ],
                    },
                    r,
                );
            }),
        });
    },
    Ca = 'VehicleRewards_d7eb6286',
    Ra = 'VehicleRewards_reward_2dc790a',
    wa = 'VehicleRewards_imageReward_71a83973',
    Aa = 'VehicleRewards_info_1ef459ad',
    Ta = 'VehicleRewards_text_8282390e',
    Ea = (e, a) => ({
        from: { opacity: 0, scale: 0.75, pointerEvents: 'none' },
        to: { opacity: 1, scale: 1, pointerEvents: 'auto' },
        trail: 300,
        delay: e + 300 * a,
        config: { duration: 300 },
        onStart: () => {
            A.sound('gui_random_reward_appear');
        },
    }),
    Sa = ({ rewards: e, className: a, oneCountDelay: s, rewardType: t }) =>
        i.jsx('div', {
            className: l(Ca, a),
            children: x(e, (e, a) =>
                i.jsxs(
                    Te,
                    {
                        animationConfig: Ea(s, a),
                        rewardType: t,
                        className: Ra,
                        children: [
                            i.jsx(f, {
                                className: wa,
                                name: e.name,
                                image: `R.images.gui.maps.shop.vehicles.c_360x270.${e.techName}`,
                                special: e.overlayType,
                                tooltipArgs: g({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                            }),
                            i.jsxs(B, {
                                className: Aa,
                                children: [
                                    i.jsx(B.Level, { className: Ta, value: e.vehicleLvl }),
                                    I(e.vehicleType) && i.jsx(B.Type, { type: e.vehicleType, premium: e.isElite }),
                                    i.jsx(B.Name, { className: Ta, children: e.vehicleName }),
                                ],
                            }),
                        ],
                    },
                    a,
                ),
            ),
        }),
    Ba = {
        root: 'App_root_0',
        base: 'App_7d36179a',
        base__CollectorsCompensationReward: 'App_base__CollectorsCompensationReward_950653fc',
        base__BranchReward: 'App_base__BranchReward_52c97afb',
        base__BonusVehiclesReward: 'App_base__BonusVehiclesReward_69053c81',
        base__AdditionalReward: 'App_base__AdditionalReward_16267c02',
        video: 'App_video_c626f7a4',
        closeButton: 'App_closeButton_f5179698',
        content: 'App_content_6d450fd7',
        wrapperRewards: 'App_wrapperRewards_af08fa77',
        reward: 'App_reward_25712f64',
        mainRewardCaption: 'App_mainRewardCaption_15b2b939',
        mainRewardWrapper: 'App_mainRewardWrapper_c22b0af',
        decorWrapper: 'App_decorWrapper_bb0bfe54',
        ribbonWrapper: 'App_ribbonWrapper_43833f36',
        godraysWrapper: 'App_godraysWrapper_163cb256',
        ribbon: 'App_ribbon_f6a1d903',
        raysWrapper: 'App_raysWrapper_e48e223c',
        godrays: 'App_godrays_3df409cd',
        rays: 'App_rays_20aa2b69',
        rotate: 'App_rotate_0',
        wrapperButton: 'App_wrapperButton_6d5ac65d',
        button: 'App_button_7b36300d',
        buttonContent: 'App_buttonContent_cd42fca3',
        fadeIn: 'App_fadeIn_0',
    },
    Ia = 300,
    Oa = 2400,
    ka = 1900,
    La = (e) => ({
        from: { opacity: 0, y: '0rem' },
        to: { opacity: 1, y: '-20rem' },
        delay: e,
        config: { duration: 400, easings: N.easeOutQuad },
    }),
    Ha = (e) => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: e,
        config: { duration: 600, easings: N.easeOutQuad },
    }),
    Wa = (e) => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: e,
        config: { duration: Ia, easings: N.easeOutQuad },
    }),
    Da = (e) => ({
        from: { opacity: 0, y: '0rem' },
        to: { opacity: 1, y: '-10rem' },
        delay: e,
        config: { duration: Ia, easings: N.easeOutQuad },
    }),
    Va = r(() => {
        const [e, a] = s.useState(!1),
            t = w.resolve('strings'),
            r = ((e) => {
                const a = m(),
                    t = h(),
                    n = viewEnv.pxToRem(a.width) * t,
                    i = viewEnv.pxToRem(a.height) * t,
                    o = n / i;
                return s.useMemo(
                    () =>
                        e >= o
                            ? { width: i * e + 'rem', height: `${i}rem` }
                            : { width: `${n}rem`, height: n / e + 'rem' },
                    [i, o, n, e],
                );
            })(2560 / 1440),
            { model: c, controls: d } = we(),
            _ = c.rewardType.get(),
            u = () => {
                e && d.close('cancel');
            };
        (O(W.ESCAPE, u), O(W.ENTER, u), O(W.SPACE, u));
        const v = c.defaultButtonTitle.get(),
            p = () =>
                _ === Ce.COLLECTORS_COMPENSATION_REWARD
                    ? Oa
                    : _ === Ce.BRANCH_REWARD || _ === Ce.ADDITIONAL_REWARD
                      ? 800
                      : _ === Ce.BONUS_VEHICLES_REWARD
                        ? ka
                        : 0,
            b = () => {
                if (_ === Ce.COLLECTORS_COMPENSATION_REWARD) {
                    const e = c.mainRewards.get().items.length;
                    return Oa + e * Ia;
                }
                if (_ === Ce.BRANCH_REWARD) {
                    return 800 + c.vehicleRewards.get().items.length * Ia;
                }
                if (_ === Ce.ADDITIONAL_REWARD) {
                    return 800 + c.mainRewards.get().items.length * Ia;
                }
                if (_ === Ce.BONUS_VEHICLES_REWARD) {
                    const e = c.vehicleRewards.get().items.length;
                    return ka + e * Ia;
                }
                return 0;
            },
            N = () =>
                _ === Ce.COLLECTORS_COMPENSATION_REWARD
                    ? 2e3
                    : _ === Ce.BRANCH_REWARD || _ === Ce.ADDITIONAL_REWARD
                      ? 400
                      : _ === Ce.BONUS_VEHICLES_REWARD
                        ? 1500
                        : 0,
            x = () =>
                _ === Ce.COLLECTORS_COMPENSATION_REWARD
                    ? Oa
                    : _ === Ce.BRANCH_REWARD || _ === Ce.ADDITIONAL_REWARD
                      ? 800
                      : _ === Ce.BONUS_VEHICLES_REWARD
                        ? ka
                        : 0,
            f = () => b() + 100,
            g = () => f() + 100,
            y = () =>
                _ === Ce.ADDITIONAL_REWARD
                    ? (() => {
                          const e = c.additionalRewards.get().items.length;
                          return g() + 80 * e;
                      })() + 80
                    : b(),
            [j, C] = n(() => La(N())),
            [T, E] = n(() => Ha(x())),
            [S, B] = n(() => Wa(y())),
            [I, D] = n(() => Da(y()));
        return (
            s.useLayoutEffect(() => {
                a(!1);
                const e = y(),
                    s = N(),
                    t = x();
                (C.start({ ...La(s) }),
                    E.start({
                        ...Ha(t),
                        onStart: () => {
                            A.sound('ach_sub_glare');
                        },
                    }),
                    B.start({ ...Wa(e) }),
                    D.start({
                        ...Da(e),
                        onStart: () => {
                            A.sound('gui_random_reward_end');
                        },
                        onRest: () => a(!0),
                    }),
                    C.set({ opacity: 0, y: '0rem' }),
                    E.set({ opacity: 0 }),
                    B.set({ opacity: 0 }),
                    D.set({ opacity: 0, y: '0rem' }));
            }, [_]),
            i.jsxs('div', {
                className: l(Ba.base, Ba[`base__${_}`]),
                children: [
                    i.jsx(k, {
                        src: R.videos.one_time_gift.background(),
                        autoplay: !0,
                        loop: !0,
                        className: Ba.video,
                        style: r,
                    }),
                    i.jsxs('div', {
                        className: Ba.decorWrapper,
                        children: [
                            i.jsx(o.div, {
                                style: j,
                                className: Ba.ribbonWrapper,
                                children: i.jsx('div', { className: Ba.ribbon }),
                            }),
                            i.jsx(o.div, {
                                style: T,
                                className: Ba.godraysWrapper,
                                children: i.jsxs('div', {
                                    className: Ba.raysWrapper,
                                    children: [
                                        i.jsx('div', { className: Ba.godrays }),
                                        i.jsx('div', { className: Ba.rays }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    i.jsx(o.div, {
                        onMouseEnter: () => A.sound('highlight'),
                        style: S,
                        className: Ba.closeButton,
                        children: i.jsx(xe, { onClick: u }),
                    }),
                    _ === Ce.COLLECTORS_COMPENSATION_REWARD && i.jsx(pa, {}),
                    _ === Ce.BONUS_VEHICLES_REWARD && i.jsx(aa, {}),
                    (_ === Ce.BRANCH_REWARD || _ === Ce.ADDITIONAL_REWARD) && i.jsx(fa, { rewardType: _ }),
                    i.jsxs('div', {
                        className: Ba.content,
                        children: [
                            i.jsx('div', {
                                className: Ba.wrapperRewards,
                                children: i.jsxs('div', {
                                    className: Ba.reward,
                                    children: [
                                        _ === Ce.COLLECTORS_COMPENSATION_REWARD &&
                                            i.jsx(ja, {
                                                oneCountDelay: p(),
                                                rewards: c.mainRewards.get().items,
                                                duration: Ia,
                                                classNames: { caption: Ba.mainRewardCaption },
                                                rewardType: _,
                                            }),
                                        (_ === Ce.BRANCH_REWARD || _ === Ce.BONUS_VEHICLES_REWARD) &&
                                            i.jsx(Sa, {
                                                oneCountDelay: p(),
                                                rewards: c.vehicleRewards.get().items,
                                                rewardType: _,
                                            }),
                                        _ === Ce.ADDITIONAL_REWARD &&
                                            i.jsxs('div', {
                                                children: [
                                                    i.jsx('div', {
                                                        className: Ba.mainRewardWrapper,
                                                        children: i.jsx(ja, {
                                                            oneCountDelay: p(),
                                                            rewards: c.mainRewards.get().items,
                                                            duration: Ia,
                                                            classNames: { caption: Ba.mainRewardCaption },
                                                            rewardType: _,
                                                        }),
                                                    }),
                                                    i.jsx(De, {
                                                        oneCountDelay: g(),
                                                        rewards: c.additionalRewards.get().items,
                                                        boxRewardsCount: c.boxRewardsCount.get(),
                                                        title: t.readOrEmpty('one_time_gift.additionReward.title'),
                                                        titleDelay: f(),
                                                        duration: 80,
                                                        rewardType: _,
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            }),
                            i.jsx(o.div, {
                                style: I,
                                className: Ba.wrapperButton,
                                children: i.jsx(L, {
                                    theme: H.primary,
                                    classNames: { base: Ba.button, content: Ba.buttonContent },
                                    onClick: () => {
                                        e && d.close('confirm');
                                    },
                                    onMouseEnter: () => A.sound('highlight'),
                                    children: v,
                                }),
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    Ma = new D().add(V).addWithProps(Re, { options: { context: 'model.rewardModel' } }),
    Pa = () => Ma.render(i.jsx(Va, {})),
    [za, $a] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['pageTitle', 'backNavigationDescription', 'backNavigationAllowed']),
            infoButtons: e.array('infoButtons'),
        }),
        ({ externalModel: e }) => ({
            navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate'),
            doInfoAction: e.createCallback((e) => ({ index: e }), 'onInfoAction'),
        }),
    ),
    [Fa, Ua] = u('WalletModel')(
        ({ observableModel: e }) => {
            const a = { currencies: e.dict('currencies') };
            return {
                ...a,
                list: M.shallow((e) =>
                    Array.from(a.currencies.keys.values()).sort((a, s) => {
                        const t = e.indexOf(a),
                            n = e.indexOf(s),
                            i = e.length;
                        return (-1 === t ? i : t) - (-1 === n ? i : n);
                    }),
                ),
            };
        },
        ({ externalModel: e }) => ({ currencyAction: e.createCallback((e) => ({ type: e }), 'onCurrencyAction') }),
    ),
    Qa = { base: 'Divider_1632862f' };
function Ga(e) {
    return i.jsx(P, { path: 'ui.noise', className: d(Qa.base, e.className), fit: 'cover' });
}
function Za({ children: e, className: a }) {
    const s = c.Children.toArray(e);
    return s.length <= 1
        ? e
        : i.jsx(i.Fragment, {
              children: s.map((e, s) => i.jsxs(c.Fragment, { children: [s > 0 && i.jsx(Ga, { className: a }), e] }, s)),
          });
}
const qa = {
        root: 'InfoButton_root_c58f1a93',
        border: 'InfoButton_border_f3a2eae1',
        base: 'InfoButton_74c97479',
        base__smallSize: 'InfoButton_base__smallSize_c40e1b5c',
        base__mediumSize: 'InfoButton_base__mediumSize_f347ecd3',
        content: 'InfoButton_content_1cc251f9',
        label: 'InfoButton_label_7fc8e38b',
        icon: 'InfoButton_icon_c58f1a93',
    },
    Ya = { small: 'small', medium: 'medium' },
    Ja = { [Ya.small]: 16, [Ya.medium]: 24 },
    Ka = s.forwardRef(function (
        { size: e, infoType: a, label: s, tooltipHeader: t, tooltipBody: n, classNames: o = {}, ...l },
        r,
    ) {
        const c = t || n,
            _ = z({ header: t, body: n }),
            u = $(e, F);
        return i.jsxs(L, {
            ...l,
            onClick: function (e) {
                var a;
                (c && _.onClick(), null == (a = l.onClick) || a.call(l, e));
            },
            onMouseEnter: function (e) {
                var a;
                (c && _.onMouseEnter(), null == (a = l.onMouseEnter) || a.call(l, e));
            },
            onMouseLeave: function (e) {
                var a;
                (_.onMouseLeave(), null == (a = l.onMouseLeave) || a.call(l, e));
            },
            ref: r,
            size: L.sizes.small,
            theme: L.themes.secondary,
            autoAlignContent: !1,
            className: d(qa.base, qa[`base__${e}Size`], l.className),
            classNames: { ...o, content: d(qa.content, null == o ? void 0 : o.content) },
            children: [
                i.jsx('div', { className: qa.border }),
                i.jsx(P, {
                    className: qa.icon,
                    path: `header_footer.info_icon_${a}_${u}`,
                    height: Ja[e],
                    width: Ja[e],
                }),
                s && i.jsx('div', { className: qa.label, children: s }),
            ],
        });
    });
Ka.sizes = Ya;
const Xa = 'NavigationBar_bcf1c1f',
    es = 'NavigationBar_button_205ef0a',
    as = 'NavigationBar_button__backNavigation_a37bc71e',
    ss = 'NavigationBar_label_4840a20f',
    ts = 'NavigationBar_icon_b6a301d6',
    ns = 'NavigationBar_iconImage_e695cd8e',
    is = 'NavigationBar_iconImage__default_dfd5b7a7',
    os = 'NavigationBar_iconImage__hover_c132ba6f',
    ls = 'NavigationBar_iconImage__active_fbf5db52',
    rs = 'NavigationBar_button__garageNavigation_69a10af0',
    cs = 'NavigationBar_divider_535279af',
    ds = 'NavigationBar_pageTitle_c8b7dbb6',
    _s = 'NavigationBar_hiddenLabel_1fa48c6e',
    us = 'NavigationBar_base__ready_69a10af0',
    ms = 'NavigationBar_base__animating_69a10af0',
    hs = 'NavigationBar_hiddenLabelInner_8490d7c',
    vs = 'NavigationBar_infoButton_69ab999';
function ps({ classNames: e = {} }) {
    return i.jsxs('div', {
        className: d(ts, e.icon),
        children: [
            i.jsx('div', { className: d(ns, is, e.iconImage, e.iconImage__default) }),
            i.jsx('div', { className: d(ns, os, e.iconImage, e.iconImage__hover) }),
            i.jsx('div', { className: d(ns, ls, e.iconImage, e.iconImage__active) }),
        ],
    });
}
const bs = _(function ({ classNames: e = {}, className: a, garageNavigationAllowed: t, battleButtonVisible: n }) {
        const { model: o, controls: l } = $a(),
            r = U(),
            c = w.resolve('strings'),
            _ = o.pageTitle.get(),
            u = o.backNavigationAllowed.get(),
            m = o.backNavigationDescription.get(),
            h = o.infoButtons.get();
        function v(e) {
            r.play('mouse-enter', { target: 'NavigationButton', original: e });
        }
        function p(e) {
            return function () {
                l.doInfoAction(e);
            };
        }
        const b = Q(),
            N = w.resolve('intl'),
            f = s.useRef(null),
            [g, y] = s.useState(0),
            [j, C] = s.useState(!1),
            [R, A] = s.useState(!1);
        G(() => {
            var e, a;
            (C(!0),
                y(
                    (null == (e = f.current) ? void 0 : e.offsetWidth)
                        ? (null == (a = f.current) ? void 0 : a.offsetWidth) + 1
                        : 0,
                ));
            const s = Z(() => A(!0));
            return () => {
                (C(!1), y(0), A(!1), s());
            };
        }, [b.screenWidthRem, b.breakpoint.name, t, n, u, m, _]);
        const T = q({ value: Ka.sizes.small }, { extraLarge: { value: Ka.sizes.medium } });
        return i.jsxs('div', {
            className: d(Xa, j && us, R && ms, a, e.base),
            children: [
                i.jsxs(Za, {
                    className: d(cs, e.divider),
                    children: [
                        t &&
                            i.jsxs('div', {
                                className: d(es, rs, e.button, e.button__garageNavigation),
                                'data-test-id': 'garageButton',
                                onClick: function (e) {
                                    (r.play('click', { target: 'NavigationButton', original: e }),
                                        l.navigateTo('garage'));
                                },
                                onMouseEnter: v,
                                children: [
                                    i.jsx(ps, { classNames: e }),
                                    i.jsx('div', {
                                        className: d(ss, e.label),
                                        children: N.toUpperCase(c.readOrEmpty('menu.headerButtons.hangar')),
                                    }),
                                ],
                            }),
                        u &&
                            i.jsx(i.Fragment, {
                                children: i.jsxs('div', {
                                    className: d(es, as, e.button, e.button__backNavigation),
                                    onClick: function (e) {
                                        (r.play('click', { target: 'NavigationButton', original: e }),
                                            l.navigateTo('back'));
                                    },
                                    onMouseEnter: v,
                                    children: [
                                        i.jsx(ps, { classNames: e }),
                                        i.jsx('div', {
                                            className: d(ss, e.label),
                                            children: N.toUpperCase(
                                                c.readOrEmpty('menu.headerButtons.navigation.back'),
                                            ),
                                        }),
                                        m &&
                                            i.jsx('div', {
                                                ref: f,
                                                className: d(_s, e.hiddenLabel),
                                                style: { '--width': `${g}px` },
                                                children: i.jsx(Y, { className: hs, text: N.toUpperCase(m) }),
                                            }),
                                    ],
                                }),
                            }),
                        _ &&
                            i.jsx(i.Fragment, {
                                children: i.jsx('div', {
                                    className: d(ds, e.title),
                                    children: i.jsx(Y, { text: N.toUpperCase(_) }),
                                }),
                            }),
                    ],
                }),
                h.length > 0 &&
                    x(h, (e, a) =>
                        i.jsx(
                            'div',
                            {
                                className: vs,
                                children: i.jsx(Ka, {
                                    size: T.value,
                                    onClick: p(a),
                                    infoType: e.type,
                                    label: e.label,
                                    tooltipHeader: e.tooltipHeader,
                                    tooltipBody: e.tooltipBody,
                                }),
                            },
                            a,
                        ),
                    ),
            ],
        });
    }),
    Ns = {
        base: 'Hint_e53dd99e',
        discountBackground: 'Hint_discountBackground_1de34646',
        discount: 'Hint_discount_94b7b9ff',
        onlyDiscount: 'Hint_onlyDiscount_8b648a0a',
        discountWithHintText: 'Hint_discountWithHintText_381cf018',
        onlyHintText: 'Hint_onlyHintText_790ec746',
        discountValue: 'Hint_discountValue_b1f389fc',
        discountHintTitle: 'Hint_discountHintTitle_95a8470',
        hintText: 'Hint_hintText_6f3fa83f',
        hintTitle: 'Hint_hintTitle_135a3ed',
        discountValue__withHint: 'Hint_discountValue__withHint_e2bc8dbb',
    };
function xs({ classNames: e }) {
    const a = w.resolve('strings');
    return i.jsxs('div', {
        className: d(Ns.onlyDiscount, null == e ? void 0 : e.onlyDiscount),
        children: [
            i.jsx('div', { className: d(Ns.discountBackground, null == e ? void 0 : e.discountBackground) }),
            i.jsx(J.Root, {
                children: i.jsx(J.Value, {
                    value: a.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: d(Ns.discount, null == e ? void 0 : e.discount),
                        value: d(Ns.discountValue, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function fs({ type: e, classNames: a }) {
    const s = w.resolve('intl'),
        t = w.resolve('strings');
    return i.jsx('div', {
        className: d(
            Ns.hintText,
            Ns.onlyHintText,
            null == a ? void 0 : a.hintText,
            null == a ? void 0 : a.onlyHintText,
        ),
        children: i.jsx(K, {
            classNames: null == a ? void 0 : a.textGradient,
            children: i.jsx('div', {
                className: d(Ns.hintTitle, null == a ? void 0 : a.hintTitle),
                children: s.toUpperCase(t.readOrEmpty(`menu.headerButtons.btnLabel.${e}`)),
            }),
        }),
    });
}
function gs({ classNames: e, type: a }) {
    const s = w.resolve('intl'),
        t = w.resolve('strings');
    return i.jsxs('div', {
        className: d(Ns.discountWithHintText, null == e ? void 0 : e.discountWithHintText),
        children: [
            i.jsx('div', { className: d(Ns.discountBackground, null == e ? void 0 : e.discountBackground) }),
            i.jsx('div', {
                className: d(Ns.discountHintTitle, null == e ? void 0 : e.discountHintTitle),
                children: s.toUpperCase(t.readOrEmpty(`menu.headerButtons.btnLabel.${a}`)),
            }),
            i.jsx(J.Root, {
                children: i.jsx(J.Value, {
                    value: t.readOrEmpty('common.common.percent'),
                    classNames: {
                        valueContainer: d(Ns.discount, null == e ? void 0 : e.discount),
                        value: d(Ns.discountValue, Ns.discountValue__withHint, null == e ? void 0 : e.discountValue),
                    },
                }),
            }),
        ],
    });
}
function ys({ classNames: e, type: a }) {
    return i.jsxs('div', {
        className: d(Ns.base, null == e ? void 0 : e.base),
        children: [
            i.jsx(xs, {
                classNames: {
                    onlyDiscount: null == e ? void 0 : e.onlyDiscount,
                    discountBackground: null == e ? void 0 : e.discountBackground,
                    discount: null == e ? void 0 : e.discount,
                    discountValue: null == e ? void 0 : e.discountValue,
                },
            }),
            i.jsx(fs, {
                type: a,
                classNames: {
                    hintText: null == e ? void 0 : e.hintText,
                    textGradient: null == e ? void 0 : e.textGradient,
                    onlyHintText: null == e ? void 0 : e.onlyHintText,
                },
            }),
            i.jsx(gs, { classNames: e, type: a }),
        ],
    });
}
const js = {
        base: 'Currency_92022680',
        hintWrapper: 'Currency_hintWrapper_530465b9',
        base__interactive: 'Currency_base__interactive_52396ddd',
        currencyWrapper: 'Currency_currencyWrapper_b13579ba',
        currencyIcon: 'Currency_currencyIcon_346f8c78',
        value: 'Currency_value_ab21a888',
        value__unavailable: 'Currency_value__unavailable_3a328d4',
        dash: 'Currency_dash_2806b61e',
        formattedValue: 'Currency_formattedValue_b7cad7e0',
        hint: 'Currency_hint_f9d16bb2',
        text: 'Currency_text_2c4f0a4',
        text__overlay: 'Currency_text__overlay_64b93131',
        discountWithHintText: 'Currency_discountWithHintText_95e3324b',
        base__discount: 'Currency_base__discount_271064ec',
        onlyHintText: 'Currency_onlyHintText_61ecd7b0',
        onlyDiscount: 'Currency_onlyDiscount_61ecd7b0',
    },
    Cs = 1e6,
    Rs = 1e5;
function ws({ wgMoneyAvailable: e, value: a, type: t, classNames: n }) {
    const o = s.useRef(null),
        l = w.resolve('intl'),
        r = w.resolve('strings'),
        c = q(
            {
                displayValue: () =>
                    a >= Cs ? { abbreviated: !0, value: X(a, Rs) / Cs } : { abbreviated: !1, value: a },
            },
            {
                medium: {
                    displayValue: () =>
                        a >= 1e7 ? { abbreviated: !0, value: X(a, Rs) / Cs } : { abbreviated: !1, value: a },
                },
                large: {
                    displayValue: () =>
                        a >= 1e8 ? { abbreviated: !0, value: X(a, Rs) / Cs } : { value: a, abbreviated: !1 },
                },
            },
        );
    if (!1 === e)
        return i.jsxs('div', {
            className: d(js.value, js.value__unavailable, null == n ? void 0 : n.value),
            children: [
                i.jsx('div', { className: js.dash, children: r.readOrEmpty('common.common.semi_dash') }),
                i.jsx('div', { className: js.dash, children: r.readOrEmpty('common.common.semi_dash') }),
            ],
        });
    const _ = c.displayValue();
    return i.jsx('div', {
        ref: o,
        className: d(js.value, null == n ? void 0 : n.base),
        children: _.abbreviated
            ? i.jsx(ee, {
                  path: 'menu.hangar_header.million',
                  params: { value: _.value },
                  brackets: { start: '%(', end: ')s' },
                  className: d(js.formattedValue, null == n ? void 0 : n.formattedValue),
              })
            : l.formatNumber(t === ae.gold ? 'gold' : 'integral', _.value),
    });
}
const As = _(function ({ currency: e, type: a, className: t, classNames: n }) {
        var o, l, r, c, _;
        const { controls: u } = Ua(),
            m = U(),
            h = 'AVAILABLE' === e.status,
            v = (function (e, a, t, n) {
                const i = w.resolve('strings'),
                    o = z({
                        header: i.readOrEmpty(`tooltips.header.buttons.${e}.header`),
                        body: i.readOrEmpty(`tooltips.header.buttons.${e}.body`),
                    }),
                    l = s.useMemo(() => ({ disabled: 'string' != typeof t || '' === t }), [t]),
                    r = ne(
                        t,
                        s.useMemo(() => [n], [n]),
                        l,
                    );
                return !1 === a ? o : r;
            })(a, h, e.tooltipType, e.value),
            p = q({ size: se.extraSmall }, { large: { size: se.small }, extraLarge: { size: se.medium } }),
            b = $(p.size, se.small);
        return i.jsxs('div', {
            ...v,
            className: d(
                js.base,
                h ? js.base__interactive : js.base__nonInteractive,
                e.discount > 0 && js.base__discount,
                t,
            ),
            onMouseEnter: function (e) {
                (m.play('mouse-enter', { target: 'WalletCurrency', original: e }), v.onMouseEnter());
            },
            onClick: function (e) {
                (null == v || v.onClick(),
                    h && (m.play('click', { target: 'WalletCurrency', original: e }), u.currencyAction(a)));
            },
            children: [
                i.jsx('div', {
                    className: d(js.currencyWrapper, null == n ? void 0 : n.currencyWrapper),
                    children: i.jsx(te, {
                        reverse: !0,
                        classNames: {
                            ...(null == n ? void 0 : n.currency),
                            icon: d(js.currencyIcon, null == (o = null == n ? void 0 : n.currency) ? void 0 : o.icon),
                        },
                        type: a,
                        size: b,
                        'data-test-id': a,
                        children: i.jsx(ws, {
                            wgMoneyAvailable: h,
                            value: e.value,
                            type: a,
                            classNames: null == n ? void 0 : n.currencyValue,
                        }),
                    }),
                }),
                h &&
                    i.jsx('div', {
                        className: d(js.hintWrapper, null == n ? void 0 : n.hintWrapper),
                        children: i.jsx(ys, {
                            type: a,
                            classNames: {
                                ...(null == n ? void 0 : n.hint),
                                discountWithHintText: d(
                                    js.discountWithHintText,
                                    null == (l = null == n ? void 0 : n.hint) ? void 0 : l.discountWithHintText,
                                ),
                                onlyDiscount: d(
                                    js.onlyDiscount,
                                    null == (r = null == n ? void 0 : n.hint) ? void 0 : r.onlyDiscount,
                                ),
                                onlyHintText: d(
                                    js.onlyHintText,
                                    null == (c = null == n ? void 0 : n.hint) ? void 0 : c.onlyHintText,
                                ),
                                base: d(js.hint, null == (_ = null == n ? void 0 : n.hint) ? void 0 : _.base),
                                textGradient: { text: js.text, textOverlay: d(js.text, js.text__overlay) },
                            },
                        }),
                    }),
            ],
        });
    }),
    Ts = _(function (e) {
        const a = Ua().model.currencies.get(e.type);
        return a
            ? i.jsx(As, { ...e, currency: a })
            : (console.error(`Currency with type ${e.type} is not defined`), null);
    }),
    Es = 'Wallet_fc600169',
    Ss = [ae.crystal, ae.gold, ae.credits],
    Bs = _(function ({ className: e, classNames: a, currenciesOrder: s = Ss }) {
        const { model: t } = Ua(),
            n = t.list(s);
        return i.jsx('div', {
            'data-name': 'Wallet',
            className: d(Es, e),
            children: n.map((e) => i.jsx(Ts, { type: e, classNames: a }, e)),
        });
    });
function Is(e) {
    return {
        isElite: e.isElite,
        vehicleName: e.vehicleName,
        vehicleShortName: e.vehicleShortName,
        vehicleNation: e.vehicleNation,
        vehicleType: e.vehicleType,
        vehicleLvl: e.vehicleLvl,
        tags: e.tags,
    };
}
function Os(e) {
    return { ...Is(e), icon: e.icon, iconSmall: e.iconSmall, unlocked: e.unlocked, obtained: e.obtained, id: e.id };
}
function ks(e) {
    return { id: e.id, numVehiclesToCredit: e.numVehiclesToCredit, vehiclesList: x(e.vehiclesList, Os) };
}
function Ls(e) {
    return { nation: e.nation, branches: x(e.branches, ks) };
}
s.memo(({ className: e, classNames: a, currenciesOrder: s, ...t }) =>
    i.jsx(Fa, { ...t, children: i.jsx(Bs, { className: e, classNames: a, currenciesOrder: s }) }),
);
const [Hs, Ws] = u()(
        ({ observableModel: a }) => {
            const s = {
                    ...a.primitives(['selectionStep', 'maxSelectionSteps']),
                    branches: a.transform((e) => x(e, Ls), 'branches'),
                    selectedBranchParams: e.box({ numVehiclesToCredit: 0, branchId: -1 }),
                    selectedNation: e.box(''),
                },
                n = t(
                    () => s.maxSelectionSteps.get() > 1 && 1 === s.selectionStep.get() && 0 === s.branches.get().length,
                );
            return { ...s, computes: { vehiclesObtained: n } };
        },
        ({ externalModel: e, model: s }) => ({
            confirm: e.createCallback((e) => ({ branchId: e }), 'onConfirm'),
            close: e.createCallbackNoArgs('onClose'),
            showInfo: e.createCallbackNoArgs('onShowInfo'),
            setSelectedBranchId: a((e, a) => {
                s.selectedBranchParams.set({ numVehiclesToCredit: e, branchId: a });
            }),
            selectNation: a((e) => s.selectedNation.set(e)),
            backToSelection: e.createCallback(() => ({ branchId: -1 }), 'onConfirm'),
        }),
    ),
    Ds = {
        base: 'NationFlagButton_6f259b25',
        base__disabled: 'NationFlagButton_base__disabled_18740c29',
        glow: 'NationFlagButton_glow_6ff6445f',
        icon: 'NationFlagButton_icon_d8ed4d13',
        cover: 'NationFlagButton_cover_ee0271d7',
        disabled: 'NationFlagButton_disabled_7b53cddb',
    },
    Vs = w.resolve('strings'),
    Ms = ({ nation: e, count: a, selected: s, onClick: t }) => {
        const n = 0 === a,
            o = z({ body: Vs.readOrEmpty('one_time_gift.branchSelection.disabledNationFlagTooltip.text') });
        return i.jsxs('div', {
            ...(n && o),
            className: l(Ds.base, s && Ds.base__selected, n && Ds.base__disabled),
            onClick: function () {
                n ? o.onClick() : (A.sound('play'), t(e));
            },
            onMouseEnter: () => {
                n ? o.onMouseEnter() : A.sound('highlight');
            },
            children: [
                s && i.jsx('div', { className: Ds.glow }),
                i.jsx('div', {
                    className: Ds.icon,
                    style: { backgroundImage: `url('${R.images.gui.maps.icons.flags.c_60x40.$dyn(e)}')` },
                }),
                i.jsx('div', { className: Ds.cover }),
                n && i.jsx('div', { className: Ds.disabled }),
            ],
        });
    },
    Ps = 'NationSelection_bb15a02f',
    zs = 'NationSelection_item_12d1d0ff',
    $s = r(({ onClick: e }) => {
        const { model: a } = Ws(),
            s = a.branches.get();
        return i.jsx('div', {
            className: Ps,
            children: s.map((s) =>
                i.jsx(
                    'div',
                    {
                        className: zs,
                        children: i.jsx(Ms, {
                            nation: s.nation,
                            count: s.branches.length,
                            selected: a.selectedNation.get() === s.nation,
                            onClick: e,
                        }),
                    },
                    s.nation,
                ),
            ),
        });
    }),
    Fs = 'unlocked',
    Us = 'obtained',
    Qs = 'locked',
    Gs = (e) => (e.obtained ? Us : e.unlocked ? Fs : Qs),
    Zs = {
        root: 'ArrowLine_root_1bc106a9',
        base: 'ArrowLine_e99d9017',
        line: 'ArrowLine_line_a96631f9',
        base__locked: 'ArrowLine_base__locked_1bc106a9',
        base__selected: 'ArrowLine_base__selected_1bc106a9',
        base__hover: 'ArrowLine_base__hover_1bc106a9',
        base__unlocked: 'ArrowLine_base__unlocked_1bc106a9',
        base__obtained: 'ArrowLine_base__obtained_1bc106a9',
        head: 'ArrowLine_head_2eeaf14',
        headPath: 'ArrowLine_headPath_b129337c',
    },
    qs = ({ vehicle: e, selected: a, hovered: s }) => {
        const t = Gs(e);
        return i.jsxs('div', {
            className: l(Zs.base, Zs[`base__${t}`], a && Zs.base__selected, !a && s && Zs.base__hover),
            children: [
                i.jsx('div', { className: Zs.line }),
                i.jsx('svg', {
                    viewBox: '0 0 5 6',
                    className: Zs.head,
                    children: i.jsx('path', { d: 'M5 3L0 6V0L5 3Z', className: Zs.headPath }),
                }),
            ],
        });
    },
    Ys = {
        root: 'VehicleSlot_root_f6e49088',
        base: 'VehicleSlot_3b265d46',
        border: 'VehicleSlot_border_4ad9193a',
        base__unlocked: 'VehicleSlot_base__unlocked_f6e49088',
        base__default: 'VehicleSlot_base__default_f6e49088',
        base__hover: 'VehicleSlot_base__hover_f6e49088',
        base__selected: 'VehicleSlot_base__selected_f6e49088',
        base__disabled: 'VehicleSlot_base__disabled_f6e49088',
        base__locked: 'VehicleSlot_base__locked_f6e49088',
        base__obtained: 'VehicleSlot_base__obtained_f6e49088',
        contentWrapper: 'VehicleSlot_contentWrapper_4428fa45',
        content: 'VehicleSlot_content_4a8a0d5d',
        vehicleInfoBlock: 'VehicleSlot_vehicleInfoBlock_57659876',
        vehicleLevelBlock: 'VehicleSlot_vehicleLevelBlock_20117ef6',
        vehicleName: 'VehicleSlot_vehicleName_2220e279',
        vehicleLevel: 'VehicleSlot_vehicleLevel_8e5a0282',
        icon: 'VehicleSlot_icon_38a36a42',
    },
    Js = r(({ vehicle: e, selected: a, hovered: t, disabled: n }) => {
        const o = w.resolve('images'),
            r = w.resolve('views'),
            c = Gs(e),
            d = ie({ args: s.useMemo(() => ({ id: e.id, tooltipId: 'oneTimeGiftVehicleTooltip' }), [e.id]) }),
            _ = oe(
                'not_available_vehicle',
                s.useMemo(
                    () => ({ vehicle: e, resId: r.read((e) => e.one_time_gift.mono.lobby.tooltips('resId')) }),
                    [r, e],
                ),
            );
        return i.jsxs('div', {
            ...(n ? _ : d),
            className: l(
                Ys.base,
                Ys[`base__${c}`],
                a && Ys.base__selected,
                !n && !a && t && Ys.base__hover,
                n && Ys.base__disabled,
            ),
            children: [
                i.jsx('div', { className: Ys.border }),
                i.jsx('div', {
                    className: Ys.contentWrapper,
                    children: i.jsxs('div', {
                        className: Ys.content,
                        children: [
                            i.jsxs('div', {
                                className: Ys.vehicleInfoBlock,
                                children: [
                                    i.jsx(B.Name, {
                                        className: Ys.vehicleName,
                                        children: i.jsx(Y, { text: e.vehicleName }),
                                    }),
                                    i.jsxs('div', {
                                        className: Ys.vehicleLevelBlock,
                                        children: [
                                            i.jsx(B.Level, { className: Ys.vehicleLevel, value: e ? e.vehicleLvl : 0 }),
                                            I(e.vehicleType) &&
                                                i.jsx(B.Type, { type: e.vehicleType, size: B.Type.sizes.x24x24 }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsx('div', {
                                style: { backgroundImage: `url(${o.readOrEmpty(`vehicle.${le(e.iconSmall)}`)})` },
                                className: Ys.icon,
                            }),
                        ],
                    }),
                }),
            ],
        });
    }),
    Ks = 'Branch_4cc3c2fe',
    Xs = 'Branch_d395ea9f',
    et = 'Branch_branch__selected_461548ed',
    at = 'Branch_slot_7949deed',
    st = r(({ numVehiclesToCredit: e, id: a, branchSlots: t }) => {
        const [n, o] = s.useState(!1),
            { model: r, controls: c } = Ws(),
            { branchId: d } = r.selectedBranchParams.get(),
            _ = d === a,
            u = t.find((e) => e.vehicleLvl > 10);
        return i.jsxs('div', {
            className: Ks,
            children: [
                i.jsx('div', {
                    className: l(Xs, _ && et),
                    onClick: () => {
                        (_ ? c.setSelectedBranchId(0, -1) : c.setSelectedBranchId(e, a), A.sound('ach_sign'));
                    },
                    onMouseEnter: () => {
                        (A.sound('ach_hover'), o(!0));
                    },
                    onMouseLeave: () => {
                        o(!1);
                    },
                    children: t
                        .filter((e) => e.vehicleLvl <= 10)
                        .map((e, a) =>
                            i.jsxs(
                                'div',
                                {
                                    className: at,
                                    children: [
                                        a > 0 && i.jsx(qs, { vehicle: e, selected: _, hovered: n }),
                                        i.jsx(Js, { vehicle: e, selected: _, hovered: n, disabled: !1 }),
                                    ],
                                },
                                e.id,
                            ),
                        ),
                }),
                i.jsx('div', {
                    className: at,
                    children:
                        u &&
                        i.jsxs(i.Fragment, {
                            children: [
                                i.jsx(qs, { vehicle: u, selected: !1, hovered: !1 }),
                                i.jsx(Js, { vehicle: u, selected: !1, hovered: !1, disabled: !0 }),
                            ],
                        }),
                }),
            ],
        });
    }),
    tt = 'Nation_7543506b',
    nt = 'Nation_heading_2f23d90b',
    it = 'Nation_name_b71fe7e2',
    ot = 'Nation_flag_cb6eaf1',
    lt = 'Nation_branch_1863eefc',
    rt = w.resolve('strings'),
    ct = ({ branchesList: e }) => {
        const { branches: a, nation: s } = e;
        return i.jsxs('div', {
            className: tt,
            children: [
                i.jsxs('div', {
                    className: nt,
                    children: [
                        i.jsx('div', {
                            className: ot,
                            style: { backgroundImage: `url('${R.images.gui.maps.icons.flags.c_26x16.$dyn(s)}')` },
                        }),
                        i.jsx('div', { className: it, children: rt.readOrEmpty(`one_time_gift.nations.${s}`) }),
                    ],
                }),
                a.map((e) =>
                    i.jsx(
                        'div',
                        {
                            className: lt,
                            children: i.jsx(st, {
                                id: e.id,
                                branchSlots: e.vehiclesList,
                                numVehiclesToCredit: e.numVehiclesToCredit,
                            }),
                        },
                        e.id.toString(),
                    ),
                ),
            ],
        });
    },
    dt = 'NationsList_nationBlock_d0771e30',
    _t = r(function ({ setNationRef: e }) {
        const { model: a } = Ws();
        return a.branches
            .get()
            .map(
                (a) =>
                    a.branches.length > 0 &&
                    i.jsx(
                        'div',
                        { ref: (s) => e(s, a.nation), className: dt, children: i.jsx(ct, { branchesList: a }) },
                        a.nation,
                    ),
            );
    }),
    ut = 'BranchSelection_3e87c689',
    mt = 'BranchSelection_wrapper_6eb68598',
    ht = 'BranchSelection_content_beb7b334',
    vt = 'BranchSelection_nav_24b786c6',
    pt = 'BranchSelection_emptyArea_12f93768',
    bt = 'BranchSelection_verticalBar_df97f4cb';
const Nt = r(function () {
    const { api: e } = re(),
        { model: a, controls: t } = Ws(),
        [n, o] = s.useState(0),
        l = a.branches.get(),
        r = s.useRef([]);
    const d = s.useCallback(
            (a) => {
                var s;
                const n =
                    null == ((i = r.current), (o = 'nation'), (l = a), (s = i.find((e) => e[o] === l)))
                        ? void 0
                        : s.nationBlock.offsetTop;
                var i, o, l;
                (void 0 !== n && e.applyScroll(n), t.selectNation(a));
            },
            [t, e],
        ),
        _ = l.map((e, a) => (e.branches.length > 0 ? a : -1)).filter((e) => -1 !== e).length - 1,
        u = s.useCallback(
            (e) => {
                const a = r.current[_ ?? l.length - 1];
                if (e && a) {
                    const s = e - a.nationBlock.offsetHeight;
                    o(s > 0 ? s : 0);
                }
            },
            [_, l.length],
        ),
        m = ce((e) => {
            const a = r.current;
            let s = null;
            (a.forEach((t, n) => {
                const i = a[n];
                i && i.nationBlock.offsetHeight > 0 && e >= i.nationBlock.offsetTop - 51 && (s = t.nation);
            }),
                s && t.selectNation(s));
        });
    return (
        c.useLayoutEffect(() => {
            const a = () => {
                    m(e.animationScroll.scrollPosition.get());
                },
                s = () => {
                    const a = e.getWrapperSize() ?? 0;
                    (u(a), m(e.animationScroll.scrollPosition.get()));
                };
            return (
                e.events.on('change', a),
                e.events.on('recalculateContent', s),
                e.events.on('resizeHandled', s),
                () => {
                    (e.events.off('resizeHandled', s),
                        e.events.off('change', a),
                        e.events.off('recalculateContent', s));
                }
            );
        }, [e, m, u]),
        i.jsxs('div', {
            className: ut,
            children: [
                i.jsx('div', { className: vt, children: i.jsx($s, { onClick: d }) }),
                i.jsxs(de, {
                    classNames: { wrapper: mt, content: ht },
                    children: [
                        i.jsx(_t, {
                            setNationRef: function (e, a) {
                                e && r.current.push({ nation: a, nationBlock: e });
                            },
                        }),
                        n > 0 && i.jsx('div', { className: pt, style: { height: `${n}rem` } }),
                    ],
                }),
                i.jsx(_e, { classNames: { base: bt } }),
            ],
        })
    );
});
function xt() {
    return i.jsx(ue, { children: i.jsx(Nt, {}) });
}
const ft = 'Footer_ce4a18d2',
    gt = 'Footer_button_7f7e9710',
    yt = 'Footer_buttonContent_4daecd26',
    jt = 'Footer_confirmButton_659bd71',
    Ct = 'Footer_selectionIndicator_69605cfa',
    Rt = 'Footer_selectionIndicatorLabel_16ff197',
    wt = 'Footer_vehiclesCount_70cda577',
    At = w.resolve('strings'),
    Tt = r(function () {
        const { model: e, controls: a } = Ws(),
            { numVehiclesToCredit: s, branchId: t } = e.selectedBranchParams.get(),
            n = z({ body: At.readOrEmpty('one_time_gift.branchSelection.claimButton.disabledTooltip.text') }),
            o = t >= 0;
        return i.jsxs('div', {
            className: ft,
            children: [
                o
                    ? i.jsxs('div', {
                          className: Ct,
                          children: [
                              i.jsx('span', {
                                  className: Rt,
                                  children: i.jsx(ee, {
                                      path: 'one_time_gift.branchSelection.selectionIndicator.text',
                                  }),
                              }),
                              i.jsx('span', {
                                  className: wt,
                                  children: i.jsx(me, {
                                      path: 'one_time_gift.branchSelection.selectionIndicator.vehiclesCounter',
                                      count: s,
                                      params: { value: s },
                                      brackets: { start: '%(', end: ')' },
                                  }),
                              }),
                          ],
                      })
                    : i.jsx(L, {
                          onClick: a.close,
                          theme: H.secondary,
                          classNames: { base: gt, content: yt },
                          children: i.jsx(ee, { path: 'one_time_gift.branchSelection.selectLaterButton.text' }),
                      }),
                i.jsx('div', {
                    className: jt,
                    ...(!o && n),
                    children: i.jsx(L, {
                        onClick: () => {
                            return ((e = t), void a.confirm(e));
                            var e;
                        },
                        theme: H.primary,
                        disabled: !o,
                        classNames: { base: gt, content: yt },
                        children: i.jsx(ee, { path: 'one_time_gift.branchSelection.claimButton.text' }),
                    }),
                }),
            ],
        });
    }),
    Et = 'LevelsPanel_441e9ea3',
    St = 'LevelsPanel_levelBlock_a5b015e8',
    Bt = 'LevelsPanel_divider_b2cc95f7',
    It = 'LevelsPanel_level_5fa9ec5d',
    Ot = ({ levels: e }) =>
        i.jsx('div', {
            className: Et,
            children: e.map((e, a) =>
                i.jsxs(
                    'div',
                    {
                        className: St,
                        children: [
                            a > 0 && i.jsx('div', { className: Bt }),
                            i.jsx('div', { className: It, children: he(e) }),
                        ],
                    },
                    e,
                ),
            ),
        }),
    kt = 'Content_a00865ce',
    Lt = 'Content_wrapper_d017b159',
    Ht = 'Content_levelsContainer_b9a811fd',
    Wt = 'Content_branchSelection_37720632',
    Dt = 'Content_footer_16c7d770',
    Vt = [6, 7, 8, 9, 10],
    Mt = () =>
        i.jsxs('div', {
            className: kt,
            children: [
                i.jsxs('div', {
                    className: Lt,
                    children: [
                        i.jsx('div', { className: Ht, children: i.jsx(Ot, { levels: Vt }) }),
                        i.jsx('div', { className: Wt, children: i.jsx(xt, {}) }),
                    ],
                }),
                i.jsx('div', { className: Dt, children: i.jsx(Tt, {}) }),
            ],
        }),
    Pt = 'BranchCounter_ccf1d6b2',
    zt = 'BranchCounter_label_9b854dc7',
    $t = 'BranchCounter_counter_9eed424b',
    Ft = 'BranchCounter_current_3f9fd4ae',
    Ut = 'BranchCounter_total_faee8f6b',
    Qt = 'BranchCounter_glow_418efc8f',
    Gt = w.resolve('strings');
function Zt({ selectionStep: e, maxSelectionSteps: a }) {
    return i.jsxs('div', {
        className: Pt,
        children: [
            i.jsx('div', {
                className: zt,
                children: Gt.readOrEmpty('one_time_gift.branchSelection.branchCounter.text'),
            }),
            i.jsx('div', {
                className: $t,
                children: i.jsx(ee, {
                    path: 'one_time_gift.branchSelection.branchCounter.progress',
                    params: {
                        value: i.jsxs('span', { className: Ft, children: [i.jsx('span', { className: Qt }), e] }),
                        maxValue: i.jsx('span', { className: Ut, children: a }),
                    },
                    brackets: { start: '%(', end: ')' },
                }),
            }),
        ],
    });
}
const qt = 'Header_ee5a2d07',
    Yt = 'Header_title_511e488d',
    Jt = w.resolve('strings'),
    Kt = r(function () {
        const { model: e } = Ws(),
            a = e.computes.vehiclesObtained(),
            s = e.maxSelectionSteps.get();
        return i.jsxs('div', {
            className: qt,
            children: [
                i.jsx('div', {
                    className: Yt,
                    children: Jt.readOrEmpty(
                        a
                            ? 'one_time_gift.branchSelection.vehiclesObtained.header.text'
                            : 'one_time_gift.branchSelection.title',
                    ),
                }),
                s > 1 && i.jsx(Zt, { maxSelectionSteps: s, selectionStep: e.selectionStep.get() }),
            ],
        });
    }),
    Xt = 'VehiclesObtained_ad9ab2bb',
    en = 'VehiclesObtained_wrapper_3e9fd973',
    an = 'VehiclesObtained_content_5fb29577',
    sn = 'VehiclesObtained_title_33ff8092',
    tn = 'VehiclesObtained_button_b2d0c5d5',
    nn = 'VehiclesObtained_buttonContent_2274930d',
    on = 'VehiclesObtained_icon_faccb932',
    ln = ({ onClick: e, title: a, buttonTitle: s }) =>
        i.jsx('div', {
            className: Xt,
            children: i.jsxs('div', {
                className: en,
                children: [
                    i.jsxs('div', {
                        className: an,
                        children: [
                            i.jsx('div', { className: on }),
                            i.jsx('div', { className: sn, children: i.jsx(ee, { path: a }) }),
                        ],
                    }),
                    i.jsx(L, {
                        onClick: e,
                        theme: H.primary,
                        classNames: { base: tn, content: nn },
                        children: i.jsx(ee, { path: s }),
                    }),
                ],
            }),
        }),
    rn = 'App_ce023773',
    cn = 'App_wallet_d8cecc1',
    dn = 'App_navigationBar_4825386',
    _n = 'App_header_81a4bb44',
    un = 'App_vehiclesObtained_319eb551',
    mn = 'App_content_4c6585a6',
    hn = r(function () {
        const { model: e, controls: a } = Ws(),
            s = e.computes.vehiclesObtained(),
            { branchId: t } = e.selectedBranchParams.get();
        return (
            O(W.ENTER, function () {
                switch (!0) {
                    case s:
                        a.backToSelection();
                        break;
                    case -1 !== t:
                        a.confirm(t);
                }
            }),
            O(W.ESCAPE, a.close),
            i.jsxs('div', {
                className: rn,
                children: [
                    i.jsx('div', {
                        className: dn,
                        children: i.jsx(bs, { battleButtonVisible: !1, garageNavigationAllowed: !0 }),
                    }),
                    i.jsx('div', { className: cn, children: i.jsx(Bs, {}) }),
                    i.jsx('div', { className: _n, children: i.jsx(Kt, {}) }),
                    s
                        ? i.jsx('div', {
                              className: un,
                              children: i.jsx(ln, {
                                  onClick: () => a.backToSelection(),
                                  title: 'one_time_gift.branchSelection.vehiclesObtained.text',
                                  buttonTitle: 'one_time_gift.branchSelection.vehiclesObtained.button.text',
                              }),
                          })
                        : i.jsx('div', { className: mn, children: i.jsx(Mt, {}) }),
                ],
            })
        );
    }),
    vn = w.resolve('aliases'),
    pn = new D()
        .add(V)
        .addWithProps(Hs, { options: { context: 'model.branchSelectionModel' } })
        .addWithProps(za, { options: { rootId: vn.read((e) => e.one_time_gift.default.NavigationBar('resId')) } })
        .addWithProps(Fa, { options: { rootId: vn.read((e) => e.lobby_header.default.Wallet('resId')) } }),
    [bn, Nn] = u()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({
            continue: e.createCallbackNoArgs('onContinue'),
            showVideo: e.createCallbackNoArgs('onShowVideo'),
            close: e.createCallbackNoArgs('onClose'),
        }),
    );
function xn({ text: e, onClick: a, className: s }) {
    const t = v({ size: ve.small }, { medium: { size: ve.large } });
    return i.jsx(L, { className: s, onClick: a, theme: H.primary, size: t.size, children: e });
}
const fn = 'IntroItem_4660cfec',
    gn = 'IntroItem_icon_fe668efc',
    yn = 'IntroItem_title_ea0c1790',
    jn = 'IntroItem_description_8e25a1fa',
    Cn = ({ icon: e, title: a, description: s, className: t }) =>
        i.jsxs('div', {
            className: l(fn, t),
            children: [
                i.jsx('div', { className: gn, style: { backgroundImage: `url(${e})` } }),
                i.jsx('div', { className: yn, children: a }),
                i.jsx('div', { className: jn, children: s }),
            ],
        }),
    Rn = { base: 'TimerIcon_10bfc604' };
function wn({ className: e }) {
    return i.jsx('svg', {
        viewBox: '0 0 32 32',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        className: l(Rn.base, e),
        children: i.jsx('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M16 22.5C19.5899 22.5 22.5 19.5899 22.5 16C22.5 12.4101 19.5899 9.5 16 9.5C12.4101 9.5 9.5 12.4101 9.5 16C9.5 19.5899 12.4101 22.5 16 22.5ZM16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24ZM15 11.5C15 11.2239 15.2239 11 15.5 11H16C16.2761 11 16.5 11.2239 16.5 11.5V15.5H19.5C19.7761 15.5 20 15.7239 20 16V16.5C20 16.7761 19.7761 17 19.5 17H16.5H15V15.5V11.5Z',
        }),
    });
}
const An = 'Content_2a85aeb5',
    Tn = 'Content_title_5db41a57',
    En = 'Content_base__showAnimation_da09528a',
    Sn = 'Content_deadline_7d767d46',
    Bn = 'Content_deadlineIcon_1abe0d06',
    In = 'Content_timerIcon_1e610ff9',
    On = 'Content_wrapper_b1996359',
    kn = 'Content_sections_9d26a7f4',
    Ln = 'Content_introItemIndent_be37c6f0',
    Hn = R.images.one_time_gift.gui.maps.icons.intro,
    Wn = w.resolve('strings'),
    Dn = 'one_time_gift.introPage.content',
    Vn = [
        {
            icon: Hn.icon_section_1(),
            title: Wn.readOrEmpty(`${Dn}.section1.title`),
            description: Wn.readOrEmpty(`${Dn}.section1.description`),
        },
        {
            icon: Hn.icon_section_2(),
            title: Wn.readOrEmpty(`${Dn}.section2.title`),
            description: Wn.readOrEmpty(`${Dn}.section2.description`),
        },
        {
            icon: Hn.icon_section_3(),
            title: Wn.readOrEmpty(`${Dn}.section3.title`),
            description: Wn.readOrEmpty(`${Dn}.section3.description`),
        },
    ];
function Mn({ endTime: e, showAnimation: a }) {
    return i.jsxs('div', {
        className: d(An, a && En),
        children: [
            i.jsx('div', { className: Tn, children: Wn.readOrEmpty('one_time_gift.introPage.title') }),
            i.jsxs('div', {
                className: Sn,
                children: [
                    i.jsx('div', { className: Bn, children: i.jsx(wn, { className: In }) }),
                    i.jsx(ee, {
                        path: 'one_time_gift.introPage.deadline',
                        params: { datetime: pe(e, be.FullDateTime) },
                        brackets: { start: '%(', end: ')' },
                    }),
                ],
            }),
            i.jsx('div', {
                className: On,
                children: i.jsx('div', {
                    className: kn,
                    children: Vn.map(({ icon: e, title: a, description: s }, t) =>
                        i.jsx(Cn, { icon: e, title: a, description: s, className: t > 0 ? Ln : void 0 }, t),
                    ),
                }),
            }),
        ],
    });
}
const Pn = 'ShowVideoButton_bf543d88',
    zn = 'ShowVideoButton_glow_e2cfac06',
    $n = 'ShowVideoButton_icon_4a31f196',
    Fn = 'ShowVideoButton_label_c7b0f823',
    Un = w.resolve('strings'),
    Qn = ({ onClick: e, className: a }) => {
        const s = U();
        return i.jsxs('div', {
            className: l(Pn, a),
            onClick: function () {
                (s.play('click'), e());
            },
            onMouseEnter: function () {
                s.play('mouse-enter');
            },
            children: [
                i.jsx('div', { className: zn }),
                i.jsx('div', { className: $n }),
                i.jsx('div', { className: Fn, children: Un.readOrEmpty('one_time_gift.introPage.button.youtube') }),
            ],
        });
    },
    Gn = 'App_f0a18b21',
    Zn = 'App_vignette_d15a763e',
    qn = 'App_content_dc565988',
    Yn = 'App_showVideoButton_21002940',
    Jn = 'App_base__showAnimation_0',
    Kn = 'App_button_79020d48',
    Xn = 'App_close_f5179698',
    ei = w.resolve('strings'),
    ai = r(function () {
        const { model: e, controls: a } = Nn(),
            { endTime: s, showAnimation: t } = e.root.get();
        return (
            O(W.ESCAPE, a.close),
            O(W.ENTER, a.continue),
            t && A.sound(R.sounds.bp_glide_01()),
            i.jsxs('div', {
                className: d(Gn, t && Jn),
                children: [
                    i.jsx('div', { className: Zn }),
                    i.jsx('div', { className: qn, children: i.jsx(Mn, { endTime: s, showAnimation: t }) }),
                    i.jsx(Qn, { className: Yn, onClick: a.showVideo }),
                    i.jsx(xe, { className: Xn, onClick: a.close }),
                    i.jsx(xn, {
                        className: Kn,
                        onClick: a.continue,
                        text: ei.readOrEmpty('one_time_gift.introPage.button.confirm'),
                    }),
                ],
            })
        );
    }),
    si = new D().add(V).addWithProps(bn, { options: { context: 'model.introModel' } }),
    ti = s.createContext(new Set()),
    ni = {
        [je.INTRO]: () => si.render(i.jsx(ai, {})),
        [je.BRANCH_SELECTION]: () => pn.render(i.jsx(hn, {})),
        [je.COLLECTORS_COMPENSATION_REWARD]: Pa,
        [je.BRANCH_REWARD]: Pa,
        [je.PREMIUM_VEHICLES_REWARD]: Pa,
        [je.ADDITIONAL_REWARD]: Pa,
    },
    ii = c.memo(({ viewType: e }) => {
        const a = ni[e],
            [t] = c.useState(new Set());
        return (
            c.useEffect(() => {
                t.add(e);
            }, [t, e]),
            a
                ? i.jsx(s.Suspense, {
                      fallback: i.jsx('div', {}),
                      children: i.jsx(ti.Provider, { value: t, children: i.jsx(a, {}) }),
                  })
                : (console.error('Unknown view type for render', e), null)
        );
    }),
    oi = 'App_b6041c13',
    li = 'App_content_e0718835',
    ri = r(() => {
        const { model: e } = ye(),
            { viewType: a } = e.root.get();
        return i.jsx('div', {
            className: oi,
            children: i.jsx('div', { className: li, children: i.jsx(ii, { viewType: a }) }),
        });
    });
Ne(i.jsx(ge, { children: i.jsx(V, { children: i.jsx(ri, {}) }) }));
