import {
    r as e,
    j as s,
    f as t,
    q as a,
    k as i,
    m as o,
    s as n,
    t as c,
    p as l,
    l as r,
    n as d,
} from '../../../chunks/vendor.js';
import {
    l as m,
    n as _,
    o as u,
    q as b,
    i as k,
    m as f,
    s as h,
    t as p,
    v as x,
    c as v,
    w as y,
    u as N,
    B as S,
    b as g,
    p as T,
    E as j,
    A as I,
    F as M,
    a as w,
    R as E,
    I as C,
    d as A,
    g as L,
    x as O,
    M as D,
    T as B,
    y as $,
    V as U,
    z as V,
    G as F,
    H as K,
    e as P,
    k as W,
    J as H,
    U as G,
    r as z,
} from '../../../chunks/lib.js';
import { L as J, a as Y, F as q, T as X, B as Q } from '../../../chunks/uilogging_constants.js';
import {
    E as Z,
    S as ee,
    M as se,
    e as te,
    f as ae,
    g as ie,
    h as oe,
    i as ne,
} from '../../../chunks/sound_constants.js';
import { u as ce } from '../../../chunks/useFormattedCountdown.js';
import { a as le } from '../../../chunks/formatters.js';
const re = 'disabled',
    de = 'enabled',
    me = 'modeSelector',
    _e = 'shop',
    ue = 'storage',
    be = 'missions',
    ke = 'personalMissions',
    fe = 'achievements',
    he = 'techtree',
    pe = 'tournament',
    xe = 'barracks',
    ve = 'clans',
    ye = pe,
    Ne = ve,
    Se = ke,
    ge = me,
    Te = fe,
    je = {
        [_e]: 'shop',
        [ue]: 'storage',
        [he]: 'techtree',
        [xe]: 'barracks',
        [ye]: 'tournament',
        [Ne]: 'clans',
        ['clan']: 'clan',
        [be]: 'missions',
        [Se]: 'personalMissions',
        [ge]: 'modeSelector',
        [Te]: 'profile',
        ['replays']: 'replays',
    },
    Ie = (s) =>
        e.createElement(
            'svg',
            { width: 7, height: 18, viewBox: '0 0 7 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...s },
            e.createElement('path', {
                d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
            }),
        ),
    Me = {
        root: 'MenuItem_root_28be5e00',
        base: 'MenuItem_92bbc5da',
        base__modeSelectorName: 'MenuItem_base__modeSelectorName_28be5e00',
        base__enabledState: 'MenuItem_base__enabledState_6f88d3d1',
        modeSelector: 'MenuItem_modeSelector_1c338d85',
        modeIcon: 'MenuItem_modeIcon_cfd63447',
        label: 'MenuItem_label_8c0d77ba',
        base__disabledState: 'MenuItem_base__disabledState_28be5e00',
        titleWrapper: 'MenuItem_titleWrapper_cf46ff6b',
        title: 'MenuItem_title_8d412cc5',
        arrow: 'MenuItem_arrow_da9a9320',
        modeName: 'MenuItem_modeName_36c0339e',
        clanEmblem: 'MenuItem_clanEmblem_fe5255ab',
    },
    we = 'forts',
    Ee = m.resolve('intl'),
    Ce = m.resolve('strings'),
    Ae = {
        [ge]: 'tooltips.header.battleType',
        [ye]: 'tooltips.header.buttons.tournaments',
        [Te]: 'tooltips.header.buttons.profile',
    },
    Le = {
        [Ne]: 'tooltips.header.buttons.clans.turnedOff',
        [Se]: 'tooltips.header.buttons.personalMissionsDisabled',
        [we]: 'tooltips.header.buttons.forts.turnedOff',
    };
function Oe(e) {
    return Ee.toUpperCase(
        Ce.readOrEmpty(`menu.headerButtons.${je[e]}`) || Ce.readOrEmpty(`menu.headerButtons.${e}`) || `{${e}}`,
    );
}
function Re({
    name: a,
    state: i,
    modeName: o,
    modeId: n,
    techTreeEvents: c,
    clanEmblem: l,
    onClick: r,
    battleTypesPath: d = 'R.images.gui.maps.icons',
}) {
    const m = _(),
        k = a === Ne && l,
        f = u(
            e.useMemo(
                () =>
                    (function (e, s) {
                        const t = ((s && Le[e]) || Ae[e]) ?? `tooltips.header.buttons.${e}`;
                        return { header: Ce.readOrEmpty(`${t}.header`), body: Ce.readOrEmpty(`${t}.body`) };
                    })(k ? we : a, i === re),
                [a, i, k],
            ),
        ),
        h = b('techtreeDiscount'),
        p = c && 'techtree' === a ? h : f;
    return s.jsx('div', {
        ...p,
        className: t(Me.base, Me[`base__${i}State`], Me[`base__${a}Name`]),
        'data-test-id': a,
        onMouseEnter: function (e) {
            (p.onMouseEnter(e),
                i !== re && m.play('mouse-enter', { target: 'main-menu-widget:menu-item', original: e }));
        },
        onClick: function (e) {
            (p.onClick(), i !== re && (r(a), m.play('click', { target: 'main-menu-widget:menu-item', original: e })));
        },
        children: (() => {
            switch (a) {
                case ge:
                    return s.jsxs(s.Fragment, {
                        children: [
                            s.jsxs('div', {
                                className: Me.modeSelector,
                                children: [
                                    s.jsx('div', { className: Me.label, children: Oe(a) }),
                                    o && s.jsx('div', { className: Me.modeName, children: Ee.toUpperCase(o) }),
                                    s.jsx('div', {
                                        className: Me.modeIcon,
                                        style: { backgroundImage: `url(${d}.battleTypes.c_64x64.${n})` },
                                    }),
                                ],
                            }),
                            s.jsx(Ie, { className: Me.arrow }),
                        ],
                    });
                case Ne:
                    return s.jsxs('div', {
                        className: Me.titleWrapper,
                        children: [
                            l && s.jsx('div', { style: { backgroundImage: `url(${l})` }, className: Me.clanEmblem }),
                            s.jsx('div', { className: Me.title, children: Oe(k ? 'clan' : a) }),
                        ],
                    });
                default:
                    return s.jsx('div', {
                        className: Me.titleWrapper,
                        children: s.jsx('div', { className: Me.title, children: Oe(a) }),
                    });
            }
        })(),
    });
}
const [De, Be] = k()(
        ({ observableModel: e }) => ({
            menuItems: e.arrayClone('menuItems'),
            ...e.primitives(['modeName', 'modeId', 'hasTechTreeEvents', 'clanEmblem']),
        }),
        ({ externalModel: e }) => ({ navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate') }),
    ),
    $e = 'MainMenu_222da7b7',
    Ue = a(function ({ className: a, battleTypesPath: i }) {
        const { model: o, controls: n } = Be(),
            c = o.menuItems.get(),
            l = o.modeName.get(),
            r = o.modeId.get(),
            d = o.hasTechTreeEvents.get(),
            m = o.clanEmblem.get();
        return s.jsx('div', {
            className: t($e, a),
            children: f(c, (s) =>
                e.createElement(Re, {
                    ...s,
                    key: s.name,
                    battleTypesPath: i,
                    onClick: n.navigateTo,
                    modeName: l,
                    modeId: r,
                    techTreeEvents: d,
                    clanEmblem: m,
                }),
            ),
        });
    }),
    Ve = {
        getter: p({
            menuItems: [
                { name: me, state: de },
                { name: _e, state: de },
                { name: ue, state: de },
                { name: be, state: de },
                { name: ke, state: de },
                { name: fe, state: de },
                { name: he, state: de },
                { name: xe, state: re },
                { name: pe, state: de },
                { name: ve, state: de },
            ],
            modeName: 'Random Battle',
        }),
        controls: () => h(x('navigateTo')),
    };
function Fe({ className: e, battleTypesPath: t, ...a }) {
    return s.jsx(De, { mode: 'real', mocks: Ve, ...a, children: s.jsx(Ue, { className: e, battleTypesPath: t }) });
}
var Ke = ((e) => ((e[(e.NEWBIES = 0)] = 'NEWBIES'), (e[(e.EVENT = 1)] = 'EVENT'), e))(Ke || {});
const [Pe, We] = k()(
        ({ observableModel: e }) => {
            const s = {
                    root: e.primitives(['selectedTab', 'isTabsVisible', 'isParallaxEnabled']),
                    missions: e.array('missions'),
                    selectedMission: e.object('selectedMission'),
                    tasks: e.array('tasks'),
                    parallax: e.array('parallax'),
                },
                t = i(() => {
                    const e = s.selectedMission.get(),
                        t = s.tasks.get(),
                        a = Boolean(t.find(({ isCompletedFirstTime: e }) => e));
                    return e.isCompleted && a;
                }),
                a = i(
                    () =>
                        s.root.isParallaxEnabled.get() ? f(JSON.parse(s.parallax.get().parallaxStructure), y) : void 0,
                    { equals: v },
                ),
                o = i(() => JSON.parse(s.parallax.get().atlas), { equals: v });
            return {
                ...s,
                computes: { getIsSelectedMissionCompletedFirstTime: t, parallaxStructureObj: a, atlasObj: o },
            };
        },
        ({ externalModel: e }) => ({
            exit: e.createCallbackNoArgs('onQuit'),
            loaded: e.createCallbackNoArgs('onLoaded'),
            missionSelect: e.createCallback((e) => ({ id: e }), 'onMissionSelect'),
            changeTab: e.createCallback((e) => ({ id: e }), 'onChangeTab'),
            selectedMissionTaskUnlocked: e.createCallback((e) => ({ taskId: e }), 'onSelectedMissionTaskUnlocked'),
            openAbout: e.createCallbackNoArgs('onAboutClick'),
            navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate'),
        }),
    ),
    He = 'AboutButton_f119c81f',
    Ge = 'AboutButton_icon_d14880da',
    ze = e.memo(function ({ onClick: e }) {
        const { breakpoint: t } = N();
        return s.jsx(S, {
            className: He,
            size: t.weight >= g.extraLarge.weight ? S.sizes.small : S.sizes.extraSmall,
            theme: S.themes.secondary,
            onClick: () => {
                (T.click(), e());
            },
            children: s.jsx('div', { className: Ge }),
        });
    });
var Je = ((e) => (
    (e.COUNTDOWN = 'countdown'),
    (e.TITLE = 'title'),
    (e.SUB_TITLE = 'subTitle'),
    (e.TASK_SHOWING = 'taskShowing'),
    (e.TASK_OLD_STATE = 'taskOldState'),
    (e.TASK_SWITCH_GLOW = 'taskSwitchGlow'),
    (e.TASK_NEW_STATE = 'taskNewState'),
    (e.MISSION_STATE = 'missionState'),
    (e.TASK_UNLOCK_GLOW = 'taskUnlockGlow'),
    (e.TASK_LOCKED = 'taskLocked'),
    (e.TASK_UNLOCKED = 'taskUnlocked'),
    (e.MISSION_UNLOCKED = 'missionUnlocked'),
    (e.TASK_REWARDS = 'taskRewards'),
    (e.TASK_DESCRIPTION = 'taskDescription'),
    e
))(Je || {});
const Ye = { y: -5, opacity: 0 },
    qe = { y: 0, opacity: 1 },
    Xe = 150,
    Qe = 350,
    Ze = 650,
    es = {
        countdown: { from: Ye, to: qe, delay: Xe, duration: Qe },
        title: { from: Ye, to: qe, delay: 200, duration: Qe },
        subTitle: { from: Ye, to: qe, delay: 350, duration: Qe },
        taskShowing: {
            from: { x: 80, filter: 'blur(1px) brightness(5)', opacity: 0 },
            to: { x: 0, filter: 'blur(0px) brightness(1)', opacity: 1 },
            delay: Ze,
            easingType: Z.EaseOut,
            duration: 700,
        },
        taskOldState: {
            from: { opacity: 1, transform: 'translate(-50%, -50%) scale(1, 1)' },
            to: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5, 0.5)' },
            delay: 1350,
            duration: 700,
        },
        taskNewState: {
            from: { opacity: 0, transform: 'translate(-50%, -50%) scale(2, 2)' },
            to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1, 1)' },
            delay: 1500,
            duration: 700,
        },
        taskSwitchGlow: {
            from: { opacity: 0, transform: 'translate(-50%, -50%) scale(10, 1.5)' },
            to: [
                { opacity: 0.6, transform: 'translate(-50%, -50%) scale(5, 1.2)' },
                { opacity: 0, transform: 'translate(-50%, -50%) scale(1, 1)' },
            ],
            delay: 1350,
            easingType: Z.Linear,
            duration: 525,
        },
        missionState: { from: { opacity: 1 }, to: { opacity: 0 }, delay: 1350, duration: Qe },
        taskLocked: { from: { y: 0, opacity: 1 }, to: { y: 10, opacity: 0 }, delay: 1350, duration: 1050 },
        taskUnlocked: { from: { y: -10, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 1700, duration: 1050 },
        taskUnlockGlow: {
            from: { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
            to: [
                { x: 80, opacity: 0.8, transform: 'translate(-50%, -50%) scale(5, 1)' },
                { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
            ],
            delay: 1350,
            easingType: Z.Linear,
            duration: 525,
        },
        missionUnlocked: {
            from: { opacity: 1, transform: 'scale(1)' },
            to: { opacity: 0, transform: 'scale(1.2)' },
            delay: 0,
            duration: Qe,
        },
        taskRewards: { from: { y: 10, opacity: 0 }, to: { opacity: 1, y: 0 }, delay: 0, duration: Qe },
        taskDescription: { from: { opacity: 1, y: 0 }, to: { opacity: 0, y: -10 }, delay: 0, duration: Qe },
    },
    ss = 'LockOverlay_6e9eb613',
    ts = 'LockOverlay_darkOverlay_5f576df6',
    as = 'LockOverlay_locker_c4f5162f',
    is = 'LockOverlay_locker__withTabs_fd87956e',
    os = 'LockOverlay_ribbon_88606474',
    ns = 'LockOverlay_envelope_6f1862d4',
    cs = 'LockOverlay_divider_b6c99f7a',
    ls = 'LockOverlay_line_1f9148f',
    rs = 'LockOverlay_lock_b6f325cb',
    ds = 'LockOverlay_mission_2ea23d3e',
    ms = 'LockOverlay_condition_6785e3d0',
    _s = e.memo(
        ({
            missionName: e,
            battlesToUnlock: t,
            withTabs: a,
            shouldPlayUnlockAnimation: i = !1,
            onAnimationFinished: n,
        }) =>
            s.jsxs(ee, {
                className: ss,
                ...es[Je.MISSION_UNLOCKED],
                isDisabled: !i,
                onRest: n,
                children: [
                    s.jsx('div', { className: ts }),
                    s.jsxs('div', {
                        className: o(as, a && is),
                        children: [
                            s.jsx('div', { className: os }),
                            s.jsxs('div', {
                                className: ns,
                                children: [
                                    s.jsx(j, { classMix: ds, justifyContent: I.Center, text: e }),
                                    s.jsxs('div', {
                                        className: cs,
                                        children: [s.jsx('div', { className: ls }), s.jsx('div', { className: rs })],
                                    }),
                                    s.jsx(j, {
                                        classMix: ms,
                                        text: R.strings.sm_lobby.missionSelection.unlockCondition(),
                                        binding: { numBattles: t },
                                        justifyContent: I.Center,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    ),
    us = { x: 0, y: -10, opacity: 0, transform: 'scale(1) rotate(0deg)' },
    bs = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' },
    ks = { x: 0, y: 10, opacity: 0, transform: 'scale(1) rotate(0deg)' },
    fs = {
        linear: (e) => e,
        easeIn: (e) => e * e * e,
        easeOut: (e) => --e * e * e + 1,
        easeInOut: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
    },
    hs = e.memo(function ({
        children: t,
        from: a = us,
        enter: i = bs,
        leave: o = ks,
        isCanceled: r = !1,
        isTransition: d = !0,
        duration: m = 500,
        delay: _ = 0,
        transformOrigin: u = '50% 50%',
        easingType: b = 'easeInOut',
        enterOnStart: k,
        enterOnRest: f,
        leaveOnStart: h,
        leaveOnRest: p,
        enterOnStartSound: x,
        enterOnRestSound: v,
        leaveOnStartSound: y,
        leaveOnRestSound: N,
        className: S,
    }) {
        const g = fs[b],
            T = n(),
            j = c(d, {
                ref: T,
                from: r ? i : a,
                enter: {
                    ...i,
                    onStart: () => {
                        d && (x && x(), k && k());
                    },
                    onRest: () => {
                        d && (v && v(), f && f());
                    },
                },
                leave: {
                    ...o,
                    onStart: () => {
                        d || (y && y(), h && h());
                    },
                    onRest: () => {
                        d || (N && N(), p && p());
                    },
                },
                delay: _,
                config: { duration: m, easing: g },
                immediate: r,
                exitBeforeEnter: !0,
                cancel: r,
            });
        return (
            e.useEffect(() => {
                T.start();
            }, [T, d]),
            j((e, a) => a && s.jsx(l.div, { className: S, style: { ...e, transformOrigin: u }, children: t }))
        );
    }),
    ps = 'Countdown_2a3608a1',
    xs = 'Countdown_timer_4646805f',
    vs = 'Countdown_text_846e7f1b',
    ys = 'Countdown_icon_d6ccfe65',
    Ns = 'Countdown_bg_47004406',
    Ss = 'Countdown_bg__endingSoon_fd34215d',
    gs = r(() => {
        const { model: e } = We(),
            t = e.selectedMission.get(),
            { timeString: a, isEndingSoon: i } = ce(t.secondsCountdown, !0, !0);
        return s.jsxs('div', {
            className: ps,
            children: [
                s.jsx('div', { className: o(Ns, i && Ss) }),
                s.jsxs('div', {
                    className: xs,
                    children: [s.jsx('div', { className: ys }), s.jsx('div', { className: vs, children: a })],
                }),
            ],
        });
    });
var Ts = ((e) => (
    (e[(e.UNCOMPLETED = 0)] = 'UNCOMPLETED'),
    (e[(e.COMPLETED = 1)] = 'COMPLETED'),
    (e[(e.LOCKED = 2)] = 'LOCKED'),
    e
))(Ts || {});
const js = 'TaskDescription_ea7b717f',
    Is = 'TaskDescription_text_2294624d',
    Ms = 'TaskDescription_text__notLocked_8efc321f',
    ws = 'TaskDescription_timer_3daeb4e4',
    Es = 'TaskDescription_time_9ed754ce',
    Cs = 'TaskDescription_clock_81bcabef',
    As = R.strings.sm_lobby.missionSelection,
    Ls = function ({ binding: e }) {
        return s.jsx(M, { className: Is, text: As.taskDescription.locked(), params: e, upgradeLegacy: !0 });
    },
    Os = function ({ description: e }) {
        return s.jsx(j, { classMix: o(Is, Ms), text: e, isTruncationAvailable: !0 });
    },
    Rs = e.memo(function ({
        description: e,
        taskState: t,
        isUnlockedFirstTime: a,
        timeString: i,
        isShouldPlayAnimation: o,
        onAnimationFinished: n,
        isLockRunOut: c,
    }) {
        const l = t === Ts.LOCKED && !c,
            r = {
                timer: s.jsxs('div', {
                    className: ws,
                    children: [s.jsx('div', { className: Cs }), s.jsx('div', { className: Es, children: i })],
                }),
            };
        return (a || c) && o
            ? s.jsxs(s.Fragment, {
                  children: [
                      s.jsx(ee, { className: js, ...es[Je.TASK_LOCKED], children: s.jsx(Ls, { binding: r }) }),
                      s.jsx(ee, {
                          className: js,
                          ...es[Je.TASK_UNLOCKED],
                          onRest: n,
                          children: s.jsx(Os, { description: e }),
                      }),
                  ],
              })
            : s.jsx('div', { className: js, children: l ? s.jsx(Ls, { binding: r }) : s.jsx(Os, { description: e }) });
    }),
    Ds = 'TaskIcon_5fdfe305',
    Bs = 'TaskIcon_glow_411f0293',
    $s = 'TaskIcon_base__completed_a946400a',
    Us = 'TaskIcon_base__locked_a946400a',
    Vs = 'TaskIcon_base__hover_a946400a',
    Fs = 'TaskIcon_iconBody_e49fbd34',
    Ks = 'TaskIcon_iconGlow_8f8031c7',
    Ps = 'TaskIcon_iconGlow__switch_ebfee4f8',
    Ws = 'TaskIcon_iconGlow__unlock_da6602e',
    Hs = e.memo(function ({
        taskState: e,
        isCompletedFirstTime: t,
        isUnlockedFirstTime: a,
        isHover: i,
        isShouldPlayAnimation: n,
        onAnimationFinished: c,
        onUnlockAnimationStart: l,
        onCompletionAnimationStart: r,
        isLockRunOut: d,
    }) {
        return t && n
            ? s.jsxs(s.Fragment, {
                  children: [
                      s.jsx(ee, {
                          className: Ds,
                          ...es[Je.TASK_OLD_STATE],
                          onStart: r,
                          children: s.jsxs('div', {
                              className: Ds,
                              children: [
                                  s.jsx('div', { className: Bs }),
                                  s.jsx('div', { className: Ks }),
                                  s.jsx('div', { className: Fs }),
                              ],
                          }),
                      }),
                      s.jsx(ee, {
                          className: Ds,
                          ...es[Je.TASK_NEW_STATE],
                          onRest: c,
                          children: s.jsxs('div', {
                              className: o(Ds, $s, i && Vs),
                              children: [
                                  s.jsx('div', { className: Bs }),
                                  s.jsx('div', { className: Ks }),
                                  s.jsx('div', { className: Fs }),
                              ],
                          }),
                      }),
                      s.jsx(ee, {
                          className: Ds,
                          ...es[Je.TASK_SWITCH_GLOW],
                          children: s.jsx('div', { className: o(Ks, Ps) }),
                      }),
                  ],
              })
            : (a || d) && n
              ? s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(ee, {
                            className: Ds,
                            ...es[Je.TASK_LOCKED],
                            onStart: l,
                            children: s.jsxs('div', {
                                className: o(Ds, Us),
                                children: [
                                    s.jsx('div', { className: Bs }),
                                    s.jsx('div', { className: Ks }),
                                    s.jsx('div', { className: Fs }),
                                ],
                            }),
                        }),
                        s.jsx(ee, {
                            className: Ds,
                            ...es[Je.TASK_UNLOCKED],
                            onRest: c,
                            children: s.jsxs('div', {
                                className: o(Ds, i && Vs),
                                children: [
                                    s.jsx('div', { className: Bs }),
                                    s.jsx('div', { className: Ks }),
                                    s.jsx('div', { className: Fs }),
                                ],
                            }),
                        }),
                        s.jsx(ee, {
                            className: Ds,
                            ...es[Je.TASK_UNLOCK_GLOW],
                            children: s.jsx('div', { className: o(Ks, Ws) }),
                        }),
                    ],
                })
              : s.jsxs('div', {
                    className: o(Ds, e === Ts.COMPLETED && $s, e === Ts.LOCKED && !d && Us, i && Vs),
                    children: [
                        s.jsx('div', { className: Bs }),
                        s.jsx('div', { className: o(Ks) }),
                        s.jsx('div', { className: o(Fs) }),
                    ],
                });
    }),
    Gs = 'TrackedReward_10911cf8',
    zs = 'TrackedReward_base__centered_99f5e2bf',
    Js = 'TrackedReward_info_3fdceea1',
    Ys = ({ missionId: e, taskId: t, rewardNum: a, ...i }) => {
        const n = w(q.StoryMode, {
                action: Y.Watched,
                parentScreen: J.MissionSelection,
                timeLimit: 1,
                item: J.TaskRewardTooltip,
                itemState: e.toString(),
                info: JSON.stringify({ task_id: t, task_reward_item: i.name, task_reward_num: a }),
            }),
            c = { ...i.tooltipArgs, ...n },
            l = !i.value && !i.title;
        return s.jsx(E, { className: o(Gs, l && zs), classNames: { info: Js }, ...i, tooltipArgs: c });
    },
    qs = 'TaskRewards_985186b',
    Xs = 'TaskRewards_title_bbd3263c',
    Qs = 'TaskRewards_rewards_2b6754c2',
    Zs = e.memo(
        ({ rewards: t, missionId: a, taskId: i }) => {
            const { breakpoint: o } = N(),
                n = o.weight >= g.extraLarge.weight ? C.Big : C.Small;
            return s.jsxs('div', {
                className: qs,
                children: [
                    s.jsx('div', { className: Xs, children: R.strings.sm_lobby.missionSelection.taskRewards() }),
                    s.jsx('div', {
                        className: Qs,
                        children: f(t, (s, t) => {
                            const o = A(s.name);
                            return e.createElement(Ys, {
                                ...s,
                                key: t,
                                value: le(s.value, o),
                                valueType: o,
                                image: s.icon[n],
                                size: n,
                                missionId: a,
                                taskId: i,
                                rewardNum: t + 1,
                                tooltipArgs: L({ tooltipId: s.tooltipId }, Number(s.tooltipContentId)),
                            });
                        }),
                    }),
                ],
            });
        },
        (e, s) => e.missionId === s.missionId && e.taskId === s.taskId,
    ),
    et = 'TaskListItem_c1a02def',
    st = 'TaskListItem_frame_94b88bb',
    tt = 'TaskListItem_frameImg_d444c880',
    at = 'TaskListItem_frameImg__hover_260842d6',
    it = 'TaskListItem_description_be63c553',
    ot = ({
        index: t,
        missionId: a,
        taskId: i,
        description: n,
        taskState: c,
        isCompletedFirstTime: l,
        secondsBeforeUnlock: r,
        isUnlockedFirstTime: d,
        onTaskUnlocked: m,
        animationCounter: _,
        rewards: u,
        onAppearanceAnimationStart: b = O,
        onAppearanceAnimationFinished: k = O,
        onUnlockAnimationStart: f = O,
        onCompletionAnimationStart: h = O,
        onAnimationFinished: p = O,
    }) => {
        const x = e.useRef(r),
            [v, y] = e.useState(l || d),
            [N, S] = e.useState(!1),
            [g, j] = e.useState(!1),
            [I, M] = e.useState(!1),
            [E, C] = e.useState(void 0),
            { timeString: A, secondsLeft: L } = ce(r),
            { onShow: R, onHide: D } = w(q.StoryMode, {
                action: Y.Watched,
                parentScreen: J.MissionSelection,
                timeLimit: X,
                item: J.Task,
                itemState: a.toString(),
                info: JSON.stringify({ task_id: i }),
            });
        (e.useEffect(() => () => clearTimeout(E), [E]),
            e.useEffect(() => {
                0 !== x.current && 0 === L && (y(!0), S(!0), m(i));
            }, [L, m, i, r]),
            e.useEffect(() => {
                y(!0);
            }, [_]));
        const B = e.useCallback(() => {
                (y(!1), p());
            }, [p]),
            $ = c !== Ts.LOCKED && u.length > 0;
        return s.jsx(
            ee,
            {
                className: et,
                ...{ ...es[Je.TASK_SHOWING], delay: Ze + 150 * t },
                onStart: b,
                onRest: k,
                children: s.jsxs('div', {
                    className: st,
                    onMouseEnter: () => {
                        (C(
                            window.setTimeout(() => {
                                M(!0);
                            }, 150),
                        ),
                            T.highlight(),
                            j(!0),
                            R());
                    },
                    onMouseLeave: () => {
                        (clearTimeout(E), M(!1), j(!1), D());
                    },
                    children: [
                        s.jsx('div', { className: o(tt, g && at) }),
                        s.jsx(Hs, {
                            taskState: c,
                            isCompletedFirstTime: l,
                            isUnlockedFirstTime: d,
                            isLockRunOut: N,
                            isHover: g,
                            isShouldPlayAnimation: v,
                            onAnimationFinished: B,
                            onCompletionAnimationStart: h,
                            onUnlockAnimationStart: f,
                        }),
                        $ &&
                            s.jsx(ee, {
                                ...es[Je.TASK_REWARDS],
                                isReverse: !I,
                                children: s.jsx(Zs, { rewards: u, missionId: a, taskId: i }),
                            }),
                        s.jsx(ee, {
                            className: it,
                            ...es[Je.TASK_DESCRIPTION],
                            isReverse: !!$ && !I,
                            isDisabled: !$,
                            children: s.jsx(Rs, {
                                description: n,
                                taskState: c,
                                isUnlockedFirstTime: d,
                                isLockRunOut: N,
                                timeString: A,
                                isShouldPlayAnimation: v,
                                onAnimationFinished: B,
                            }),
                        }),
                    ],
                }),
            },
            `${a}_${t}`,
        );
    },
    nt = 'TaskList_31802e',
    ct = r(({ isChanging: t }) => {
        const { controls: a, model: i } = We(),
            o = e.useRef(!1),
            n = e.useRef(!1),
            c = i.selectedMission.get(),
            l = i.tasks.get(),
            r = e.useCallback(() => {
                n.current || (T.sound(se), (n.current = !0));
            }, []),
            d = e.useCallback(() => {
                n.current || (T.sound(te), (n.current = !0));
            }, []),
            m = e.useCallback(() => {
                o.current || (T.sound(ae), (o.current = !0));
            }, []),
            _ = e.useCallback(() => {
                o.current = !1;
            }, []),
            u = e.useCallback(() => {
                n.current = !1;
            }, []);
        return t && o.current
            ? null
            : s.jsx('div', {
                  className: nt,
                  children: f(l, (e, t) =>
                      s.jsx(
                          ot,
                          {
                              missionId: c.missionId,
                              index: t,
                              onTaskUnlocked: a.selectedMissionTaskUnlocked,
                              ...e,
                              onUnlockAnimationStart: r,
                              onCompletionAnimationStart: d,
                              onAnimationFinished: u,
                              onAppearanceAnimationStart: m,
                              onAppearanceAnimationFinished: _,
                          },
                          `taskListItem_${e.taskId}_${t}`,
                      ),
                  ),
              });
    }),
    lt = 'MissionInfo_511576db',
    rt = 'MissionInfo_base__center_d51dad60',
    dt = 'MissionInfo_title_2a9e17cc',
    mt = 'MissionInfo_subTitle_31acb91',
    _t = r(({ isChanged: e, durationTasks: t }) => {
        const { model: a } = We(),
            i = a.root.selectedTab.get() === Ke.EVENT,
            n = a.selectedMission.get(),
            c = n.missionId,
            l = a.tasks.get().length,
            { breakpoint: r } = N(),
            d = r.weight > g.extraLarge.weight;
        return s.jsxs('div', {
            className: o(lt, l > 1 && rt),
            children: [
                n.isCountdownVisible &&
                    s.jsx(
                        ee,
                        { trigger: c, ...es[Je.COUNTDOWN], children: s.jsx(gs, {}) },
                        i ? 'countdown' : `countdown_${c}`,
                    ),
                s.jsx(
                    ee,
                    {
                        ...es[Je.TITLE],
                        className: dt,
                        children: R.strings.sm_lobby.missionSelection.missionName.$num(c),
                    },
                    i ? 'title' : `title_${c}`,
                ),
                s.jsx(
                    ee,
                    {
                        ...es[Je.SUB_TITLE],
                        children: s.jsx(D, {
                            className: mt,
                            text: R.strings.sm_lobby.missionSelection.missionDescription.$num(c),
                        }),
                    },
                    i ? 'subTitle' : `subTitle_${c}`,
                ),
                s.jsx('div', {
                    style: { height: (d ? 86 : 84) * l + 'rem' },
                    children: s.jsx(
                        hs,
                        { isTransition: e, duration: t, children: s.jsx(ct, { isChanging: !e }) },
                        `taskList_${c}`,
                    ),
                }),
            ],
        });
    });
var ut = ((e) => ((e.UNDEFINED = ''), (e.NORMAL = 'normal'), (e.HARD = 'hard'), (e.VERY_HARD = 'very_hard'), e))(
    ut || {},
);
const bt = {
        root: 'DifficultyButton_root_5b8779fb',
        base: 'DifficultyButton_686d798d',
        backSelected: 'DifficultyButton_backSelected_b3a9c627',
        backLocked: 'DifficultyButton_backLocked_b3a9c627',
        backHover: 'DifficultyButton_backHover_b3a9c627',
        back: 'DifficultyButton_back_111684ca',
        backSelected__normal: 'DifficultyButton_backSelected__normal_27d5c9f8',
        backLocked__normal: 'DifficultyButton_backLocked__normal_5b8779fb',
        backHover__normal: 'DifficultyButton_backHover__normal_feca4e47',
        back__normal: 'DifficultyButton_back__normal_3195de17',
        backSelected__hard: 'DifficultyButton_backSelected__hard_d039f57d',
        backLocked__hard: 'DifficultyButton_backLocked__hard_533cf51',
        backHover__hard: 'DifficultyButton_backHover__hard_4be0662d',
        back__hard: 'DifficultyButton_back__hard_a25ce470',
        backSelected__very_hard: 'DifficultyButton_backSelected__very_hard_fd8bb040',
        backLocked__very_hard: 'DifficultyButton_backLocked__very_hard_f19456b6',
        backHover__very_hard: 'DifficultyButton_backHover__very_hard_3bb19155',
        back__very_hard: 'DifficultyButton_back__very_hard_e23b79d4',
        base__selected: 'DifficultyButton_base__selected_5b8779fb',
        base__locked: 'DifficultyButton_base__locked_5b8779fb',
        area: 'DifficultyButton_area_c0b22e82',
        displayName: 'DifficultyButton_displayName_3efdefd',
        displayNameLocked: 'DifficultyButton_displayNameLocked_2bb5bc46',
        video: 'DifficultyButton_video_ddbd362f',
        video__container: 'DifficultyButton_video__container_26dc6df8',
        video__static: 'DifficultyButton_video__static_cc7fca85',
        video__normal: 'DifficultyButton_video__normal_468938c1',
        video__hard: 'DifficultyButton_video__hard_5b8779fb',
        video__very_hard: 'DifficultyButton_video__very_hard_38885378',
    },
    kt = e.memo(
        ({
            isSelected: t,
            missionId: a,
            selectedMissionId: i,
            displayName: n,
            difficulty: c,
            locked: l,
            onClick: r,
        }) => {
            const d = e.useRef(null),
                m = w(q.StoryMode, {
                    action: Y.Watched,
                    parentScreen: J.MissionSelection,
                    timeLimit: X,
                    item: J.SelectButtonTooltip,
                    itemState: i.toString(),
                    info: JSON.stringify({
                        select_button_mission: a.toString(),
                        select_button_state: l ? 'locked' : 'unlocked',
                    }),
                });
            return (
                e.useEffect(() => {
                    const e = d.current;
                    if (e) return t ? e.play() : e.pause();
                }, [t, d]),
                s.jsx(B, {
                    contentId: R.views.story_mode.mono.lobby.tooltips.difficulty_tooltip('resId'),
                    args: { difficulty: c, isSelected: t, missionId: a },
                    ...m,
                    children: s.jsxs('div', {
                        className: o(bt.base, t && bt.base__selected, l && bt.base__locked),
                        children: [
                            s.jsx('div', { className: o(bt.back, bt[`back__${c}`]) }),
                            !l &&
                                s.jsxs(s.Fragment, {
                                    children: [
                                        !t && s.jsx('div', { className: o(bt.backHover, bt[`backHover__${c}`]) }),
                                        s.jsx('div', { className: o(bt.backSelected, bt[`backSelected__${c}`]) }),
                                    ],
                                }),
                            l && s.jsx('div', { className: o(bt.backLocked, bt[`backLocked__${c}`]) }),
                            s.jsx('div', {
                                className: o(bt.video, bt.video__container),
                                children: $.isLow()
                                    ? s.jsx('div', { className: o(bt.video, bt.video__static, bt[`video__${c}`]) })
                                    : s.jsx(U, {
                                          className: o(bt.video, bt[`video__${c}`]),
                                          src: R.videos.story_mode.v_icon_fire(),
                                          ref: d,
                                          loop: !0,
                                      }),
                            }),
                            s.jsx('div', {
                                className: o(!l && bt.displayName, l && bt.displayNameLocked),
                                children: n,
                            }),
                            s.jsx('div', {
                                className: bt.area,
                                onClick: () => {
                                    t ||
                                        l ||
                                        (c === ut.HARD ? T.sound(ie) : c === ut.VERY_HARD ? T.sound(oe) : T.sound(ne),
                                        r(a));
                                },
                                onMouseEnter: () => {
                                    t || T.highlight();
                                },
                            }),
                        ],
                    }),
                })
            );
        },
    ),
    ft = {
        base: 'MissionButton_dfa10c4a',
        base__locked: 'MissionButton_base__locked_4bda7104',
        area: 'MissionButton_area_65a52312',
        base__selected: 'MissionButton_base__selected_f3ab184a',
        backNormal: 'MissionButton_backNormal_1d92d512',
        backSelected: 'MissionButton_backSelected_e874f7ce',
        iconShadow: 'MissionButton_iconShadow_80b6b9b9',
        iconGlow: 'MissionButton_iconGlow_54d5007f',
        icon: 'MissionButton_icon_32f13f90',
        hover: 'MissionButton_hover_da9d4776',
        missionId: 'MissionButton_missionId_4b0294df',
        missionState: 'MissionButton_missionState_41e0297',
        video: 'MissionButton_video_b6a3c861',
        video__static: 'MissionButton_video__static_73511407',
    },
    ht = e.memo(
        ({
            isSelected: t,
            missionId: a,
            displayName: i,
            isCompleted: n,
            isCompletedFirstTime: c,
            locked: l,
            onClick: r,
        }) => {
            const d = e.useRef(null);
            return (
                e.useEffect(() => {
                    const e = d.current;
                    if (e) return t ? e.play() : e.pause();
                }, [t, d]),
                s.jsxs('div', {
                    className: o(ft.base, t && ft.base__selected, n && ft.base__complete, l && ft.base__locked),
                    children: [
                        s.jsx('div', {
                            className: ft.area,
                            onClick: () => {
                                t || (T.click(), r(a));
                            },
                            onMouseEnter: T.highlight,
                        }),
                        s.jsx('div', { className: ft.backNormal }),
                        s.jsx('div', { className: ft.backSelected }),
                        (!n || c || l) &&
                            s.jsxs(ee, {
                                className: ft.missionState,
                                ...es[Je.MISSION_STATE],
                                isDisabled: !c,
                                children: [
                                    s.jsx('div', { className: ft.iconShadow }),
                                    s.jsx('div', { className: ft.iconGlow }),
                                    s.jsx('div', { className: ft.icon }),
                                ],
                            }),
                        s.jsx('div', {
                            className: ft.video,
                            children: $.isLow()
                                ? s.jsx('div', { className: o(ft.video, ft.video__static) })
                                : s.jsx(U, {
                                      className: ft.video,
                                      src: R.videos.story_mode.v_icon_fire(),
                                      ref: d,
                                      loop: !0,
                                  }),
                        }),
                        s.jsx('div', { className: ft.hover }),
                        s.jsx('div', { className: ft.missionId, children: i }),
                    ],
                })
            );
        },
    ),
    pt = 'MissionSelector_76541093',
    xt = 'MissionSelector_line_f1696e16',
    vt = 'MissionSelector_line__left_3bb808a9',
    yt = 'MissionSelector_line__right_173c4f2b',
    Nt = 'MissionSelector_line__selected_e9253750',
    St = r(({ onClick: t, className: a }) => {
        const { model: i } = We(),
            n = i.missions.get(),
            c = i.selectedMission.get().missionId,
            l = i.computes.getIsSelectedMissionCompletedFirstTime();
        return s.jsx('div', {
            className: o(pt, a),
            children: f(n, (a, r) => {
                const d = c === a.missionId,
                    m = V(n, r + 1),
                    _ = c === (null == m ? void 0 : m.missionId);
                return s.jsxs(
                    e.Fragment,
                    {
                        children: [
                            i.root.selectedTab.get() === Ke.EVENT
                                ? s.jsx(kt, {
                                      onClick: t,
                                      isSelected: d,
                                      missionId: a.missionId,
                                      displayName: a.displayName,
                                      difficulty: a.difficulty,
                                      selectedMissionId: c,
                                      locked: a.locked,
                                  })
                                : s.jsx(ht, {
                                      onClick: t,
                                      isSelected: d,
                                      missionId: a.missionId,
                                      displayName: a.displayName,
                                      isCompleted: a.isCompleted,
                                      isCompletedFirstTime: d && l,
                                      locked: a.locked,
                                  }),
                            i.root.selectedTab.get() !== Ke.EVENT &&
                                r !== n.length - 1 &&
                                s.jsx('div', { className: o(xt, d && vt, _ && yt, (d || _) && Nt) }),
                        ],
                    },
                    a.missionId,
                );
            }),
        });
    }),
    gt = 'MissionVehicle_d1a7ad80',
    Tt = 'MissionVehicle_text_c92f6291',
    jt = 'MissionVehicle_icon_7d9e858',
    It = ({ className: e }) => {
        const t = w(q.StoryMode, {
            action: Y.Watched,
            item: J.MssVehicleTooltip,
            parentScreen: J.MissionSelection,
            timeLimit: X,
        });
        return s.jsxs('div', {
            className: o(gt, e),
            children: [
                s.jsx('div', { className: Tt, children: R.strings.sm_lobby.missionSelection.specialVehicle() }),
                s.jsx(B, {
                    ignoreMouseClick: !0,
                    ignoreShowDelay: !0,
                    contentId: R.views.story_mode.mono.lobby.tooltips.mission_tooltip('resId'),
                    ...t,
                    children: s.jsx('div', { className: jt }),
                }),
            ],
        });
    },
    Mt = 360,
    wt = { tension: 210, friction: 240 },
    Et = { tension: 70, friction: 480 },
    Ct = 'AssetItem_7cff1111',
    At = 'AssetItem_sprite_c476eaa9',
    Lt = 'AssetItem_imgLoader_6b833910',
    Ot = (e, s, t, a) => {
        const i = s[e.spriteName].frameX,
            o = s[e.spriteName].frameY,
            n = s[e.spriteName].sourceName,
            c = s[e.spriteName].sourceWidth,
            l = s[e.spriteName].sourceHeight;
        return {
            style: {
                width: e.width,
                height: e.height,
                opacity: e.opacity,
                transform: e.transform,
                transformOrigin: e.transformOrigin,
                background: 'no-repeat 50% / 100% 100%',
                backgroundImage: `url('${a}${n}${t}')`,
                backgroundAttachment: 'fixed',
                backgroundPosition: `-${i}rem -${o}rem`,
                backgroundSize: `${c}rem ${l}rem`,
                mixBlendMode: e.mixBlendMode,
            },
            source: { backgroundSource: `${a}${n}${t}` },
        };
    },
    Rt = r(({ loadChecker: e, item: t }) => {
        const { model: a } = We(),
            { chunkFileExt: i, chunksAssetsPath: o } = a.parallax.get();
        return s.jsxs('div', {
            className: Ct,
            children: [
                s.jsx('div', { className: At, style: { ...Ot(t, a.computes.atlasObj(), i, o).style } }),
                s.jsx('img', {
                    className: Lt,
                    alt: t.keyName,
                    src: Ot(t, a.computes.atlasObj(), i, o).source.backgroundSource,
                    onLoad: e,
                }),
            ],
        });
    }),
    Dt = 'Assets_c481c379',
    Bt = r(({ dioramaLoaded: t }) => {
        const { model: a } = We(),
            i = a.computes.parallaxStructureObj(),
            o = i ? i.length : 0,
            n = e.useRef(0),
            c = e.useCallback(() => {
                (n.current++, n.current === o && (t && t(), (n.current = 0)));
            }, [t, o]);
        return s.jsx('div', {
            className: Dt,
            children: i && i.map((e, t) => s.jsx(Rt, { item: e, loadChecker: c }, `${i.missionId}_${e.keyName}_${t}`)),
        });
    }),
    $t = 2560,
    Ut = 1440,
    Vt = $t / Ut,
    Ft = r(({ children: t }) => {
        const { model: a } = We(),
            {
                perspective: i,
                overallScale: o,
                perspectiveOriginX: n,
                perspectiveOriginY: c,
                wrapperHeight: l,
                wrapperWidth: r,
            } = a.parallax.get(),
            [d, m] = e.useState(1),
            _ = e.useCallback(() => {
                const e = F('rem');
                let s = 1;
                (e.width >= e.height * Vt ? (s = e.width / $t) : e.height >= e.width / Vt && (s = e.height / Ut), m(s));
            }, []);
        return (
            e.useEffect(
                () => (
                    engine.on('screenResized', _),
                    engine.on('self.onScaleUpdated', _),
                    _(),
                    () => {
                        (engine.off('screenResized', _), engine.off('self.onScaleUpdated', _));
                    }
                ),
                [_],
            ),
            s.jsx('div', {
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) scale(${o * d})`,
                    perspective: `${i}rem`,
                    perspectiveOrigin: `${n}% ${c}%`,
                    width: `${r}rem`,
                    height: `${l}rem`,
                },
                children: t,
            })
        );
    }),
    Kt = 'Parallax_ac12e19d',
    Pt = 'Parallax_asset_5a17fdd4',
    Wt = r(({ refParent: t, dioramaLoaded: a }) => {
        const { model: i } = We(),
            { xTilt: o, xTiltRange: n, yTilt: c, yTiltRange: r, xSlide: m, ySlide: _ } = i.parallax.get(),
            [u] = ((s, t) => {
                const a = e.useCallback(
                        (e, t, a) => {
                            const i = Math.min(Math.max((e - a.x) / a.width, 0), 1),
                                o = Math.min(Math.max((t - a.y) / a.height, 0), 1),
                                n = s.yTilt + s.yTiltRange + Mt - (s.yTilt - s.yTiltRange + Mt),
                                c = s.xTilt + s.xTiltRange + Mt - (s.xTilt - s.xTiltRange + Mt),
                                l = -i * n + n / 2 + s.yTilt,
                                r = o * c - c / 2 + s.xTilt;
                            return { x: i * a.width - a.width / 2, y: o * a.height - a.height / 2, xR: r, yR: l };
                        },
                        [s.xTilt, s.xTiltRange, s.yTilt, s.yTiltRange],
                    ),
                    i = d(() => ({ x: 0, y: 0, xR: s.xTilt, yR: s.yTilt }), []);
                return (
                    e.useEffect(() => {
                        const e = ({ clientX: e, clientY: o }) => {
                            if (t.current) {
                                const n = t.current.getBoundingClientRect(),
                                    [, c] = i;
                                if (
                                    !((e, s, t) => {
                                        const a = t.width + t.x,
                                            i = t.height + t.y;
                                        return e >= 2 + t.x && s >= 2 + t.y && e <= a - 2 && s <= i - 2;
                                    })(e, o, n)
                                )
                                    return void c.start({ x: 0, y: 0, xR: s.xTilt, yR: s.yTilt, config: Et });
                                c.start({ ...a(e, o, n), config: wt });
                            }
                        };
                        return (
                            document.addEventListener('mousemove', e),
                            () => {
                                document.removeEventListener('mousemove', e);
                            }
                        );
                    }, [i, a, s.xTilt, s.yTilt, t]),
                    i
                );
            })({ xTilt: o, xTiltRange: n, yTilt: c, yTiltRange: r }, t);
        return s.jsx(Ft, {
            children: s.jsx(l.div, {
                style: { x: u.x.to((e) => e * m), y: u.y.to((e) => e * _), rotateX: u.xR, rotateY: u.yR },
                className: Kt,
                children: s.jsx('div', { className: Pt, children: s.jsx(Bt, { dioramaLoaded: a }) }),
            }),
        });
    }),
    Ht = 'TabItem_6e36712a',
    Gt = 'TabItem_base__selected_7fd0198b',
    zt = 'TabItem_tab_8e3e07cd',
    Jt = 'TabItem_tab__hoverDecor_4092b1d7',
    Yt = e.memo(function ({ tabText: e, isSelected: t, onClick: a }) {
        return s.jsxs('div', {
            className: o(Ht, t && Gt),
            children: [
                s.jsx('div', {
                    className: zt,
                    onClick: () => {
                        t || (T.click(), a());
                    },
                    onMouseEnter: () => {
                        t || T.highlight();
                    },
                    children: e,
                }),
                s.jsx('div', { className: o(zt, Jt), children: e }),
            ],
        });
    }),
    qt = 'Tabs_16a37c54',
    Xt = 'Tabs_line_70775af',
    Qt = 'Tabs_line__second_eef62bb7',
    Zt = e.memo(({ selectedTab: e, onChange: t }) =>
        s.jsxs('div', {
            className: qt,
            children: [
                s.jsx('div', { className: Xt }),
                s.jsx('div', { className: o(Xt, Qt) }),
                s.jsx(Yt, {
                    tabText: R.strings.sm_lobby.missionSelection.tab.newbies(),
                    onClick: () => t(Ke.NEWBIES),
                    isSelected: e === Ke.NEWBIES,
                }),
                s.jsx(Yt, {
                    tabText: R.strings.sm_lobby.missionSelection.tab.event(),
                    onClick: () => t(Ke.EVENT),
                    isSelected: e === Ke.EVENT,
                }),
            ],
        }),
    ),
    ea = 'MissionSelectionViewApp_e1e00eaf',
    sa = 'MissionSelectionViewApp_blackScreen_b9764bd8',
    ta = 'MissionSelectionViewApp_blackScreen__overlay_5540cd02',
    aa = 'MissionSelectionViewApp_shadowTop_65560dd6',
    ia = 'MissionSelectionViewApp_shadowMissions_1872614',
    oa = 'MissionSelectionViewApp_shadowLeft_536e08dd',
    na = 'MissionSelectionViewApp_shadowBottom_3cc6c587',
    ca = 'MissionSelectionViewApp_about_a212c4ec',
    la = 'MissionSelectionViewApp_tabs_81d77c84',
    ra = 'MissionSelectionViewApp_missionSelector_9673efb9',
    da = 'MissionSelectionViewApp_missionSelector__withoutTabs_6bace1be',
    ma = 'MissionSelectionViewApp_specialVehicle_8744b153',
    _a = 'MissionSelectionViewApp_leftSparkles_89820688',
    ua = 'MissionSelectionViewApp_rightSparkles_e9be7b23',
    ba = 'MissionSelectionViewApp_logo_a9918fd',
    ka = 'MissionSelectionViewApp_vignette_e6471868',
    fa = 'MissionSelectionViewApp_menuItems_c66c1866',
    ha = 'MissionSelectionViewApp_triggerHint_58ad728',
    pa = { rootId: m.resolve('aliases').read((e) => e.hangar.shared.MainMenu('resId')) },
    xa = r(() => {
        const { controls: t, model: a } = We(),
            [i, n] = e.useState({ id: void 0, isTab: !1 }),
            c = a.selectedMission.get(),
            r = e.useRef(null),
            m = e.useRef({ missionId: void 0, locked: !1 }),
            [_, u] = e.useState(!1),
            b = a.root.isTabsVisible.get(),
            k = a.root.selectedTab.get(),
            f = k === Ke.EVENT,
            h = i.isTab ? k : c.missionId,
            [p, x] = e.useState(!1),
            [v, y] = d(() => ({}));
        (e.useEffect(() => {
            i.id !== c.missionId && n({ id: c.missionId, isTab: !1 });
        }, [c.missionId]),
            K(() => {
                m.current = { missionId: c.missionId, locked: c.locked };
            }),
            e.useEffect(() => {
                (m.current.missionId === c.missionId && m.current.locked && !c.locked && u(!0),
                    (m.current = { missionId: c.missionId, locked: c.locked }));
            }, [c, c.missionId, c.locked]));
        const N = e.useCallback(() => {
                u(!1);
            }, []),
            S = e.useCallback(
                (e, s) => {
                    p ||
                        (x(!0),
                        y.start({
                            to: { opacity: 1 },
                            onRest: () => (s ? t.changeTab(e) : t.missionSelect(e)),
                            delay: 50,
                            config: { duration: 200 },
                        }),
                        n({ id: e, isTab: s }),
                        u(!1));
                },
                [y, t, p],
            ),
            g = e.useCallback(() => {
                (y.start({ to: { opacity: 0 }, config: { duration: 200 } }), t.loaded(), x(!1));
            }, [y, t]);
        return (
            P(W.ESCAPE, t.exit),
            s.jsxs('div', {
                className: ea,
                ref: r,
                children: [
                    s.jsx('div', { className: sa }),
                    !c.locked && a.root.isParallaxEnabled.get()
                        ? s.jsx(Wt, { refParent: r, dioramaLoaded: g })
                        : s.jsx(Q, {
                              backgroundPath: R.images.story_mode.gui.maps.icons.common.backgrounds.$num(c.missionId),
                              onLoaded: g,
                              grayscaleApplied: c.locked,
                              showVignette: !c.locked,
                              showBlur: c.locked,
                          }),
                    c.locked
                        ? s.jsx('div', { className: ka })
                        : s.jsxs(e.Fragment, {
                              children: [
                                  s.jsx('div', { className: _a }),
                                  s.jsx('div', { className: ua }),
                                  s.jsx('div', { className: oa }),
                              ],
                          }),
                    s.jsx('div', { className: aa }),
                    s.jsx('div', { className: na }),
                    b && s.jsx('div', { className: ia }),
                    f && s.jsx('div', { className: ba }),
                    s.jsx(l.div, { className: o(sa, ta), style: v }),
                    !c.locked && s.jsx(_t, { isChanged: h === i.id, durationTasks: 250 }),
                    (c.locked || _) &&
                        s.jsx(_s, {
                            shouldPlayUnlockAnimation: _,
                            missionName: R.strings.sm_lobby.missionSelection.lockedMissionName.$num(c.missionId),
                            battlesToUnlock: c.battlesToUnlock,
                            onAnimationFinished: N,
                            withTabs: b,
                        }),
                    !f && s.jsx(l.div, { className: o(sa, ta), style: v }),
                    b &&
                        s.jsx('div', {
                            className: la,
                            children: s.jsx(Zt, { selectedTab: k, onChange: (e) => S(e, !0) }),
                        }),
                    s.jsx('div', { className: fa, children: s.jsx(Fe, { options: pa }) }),
                    s.jsx('div', { className: ca, children: s.jsx(ze, { onClick: t.openAbout }) }),
                    s.jsx(St, { onClick: (e) => S(e, !1), className: o(ra, !b && da) }),
                    s.jsx(It, { className: ma }),
                    i.isTab && s.jsx(l.div, { className: sa, style: v }),
                    f && !i.isTab && s.jsx('div', { className: ha, id: 'mission-selection-trigger-hint-id' }),
                ],
            })
        );
    });
z(new H().add(G).add(Pe).render(s.jsx(xa, {})), { fullScreen: !0 });
