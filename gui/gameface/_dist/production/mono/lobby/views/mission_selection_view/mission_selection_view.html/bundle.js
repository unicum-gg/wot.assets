import {
    r as e,
    j as s,
    e as t,
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
    c as h,
    s as p,
    u as x,
    B as v,
    b as y,
    p as N,
    E as S,
    A as g,
    F as T,
    a as j,
    R as I,
    I as M,
    d as w,
    g as E,
    t as C,
    M as A,
    T as L,
    v as O,
    V as D,
    w as B,
    x as $,
    y as U,
    e as V,
    k as F,
    J as K,
    U as P,
    r as W,
} from '../../../chunks/lib.js';
import { L as H, a as G, F as z, T as J, B as Y } from '../../../chunks/uilogging_constants.js';
import { E as q, S as X, M as Q, e as Z, f as ee, g as se, h as te, i as ae } from '../../../chunks/sound_constants.js';
import { u as ie } from '../../../chunks/useFormattedCountdown.js';
import { a as oe } from '../../../chunks/formatters.js';
const ne = 'disabled',
    ce = 'tournament',
    le = 'clans',
    re = 'personalMissions',
    de = 'modeSelector',
    me = 'achievements',
    _e = {
        ['shop']: 'shop',
        ['storage']: 'storage',
        ['techtree']: 'techtree',
        ['barracks']: 'barracks',
        [ce]: 'tournament',
        [le]: 'clans',
        ['clan']: 'clan',
        ['missions']: 'missions',
        [re]: 'personalMissions',
        [de]: 'modeSelector',
        [me]: 'profile',
        ['replays']: 'replays',
    },
    ue = (s) =>
        e.createElement(
            'svg',
            { width: 7, height: 18, viewBox: '0 0 7 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...s },
            e.createElement('path', {
                d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
            }),
        ),
    be = {
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
    ke = 'forts',
    fe = m.resolve('intl'),
    he = m.resolve('strings'),
    pe = {
        [de]: 'tooltips.header.battleType',
        [ce]: 'tooltips.header.buttons.tournaments',
        [me]: 'tooltips.header.buttons.profile',
    },
    xe = {
        [le]: 'tooltips.header.buttons.clans.turnedOff',
        [re]: 'tooltips.header.buttons.personalMissionsDisabled',
        [ke]: 'tooltips.header.buttons.forts.turnedOff',
    };
function ve(e) {
    return fe.toUpperCase(
        he.readOrEmpty(`menu.headerButtons.${_e[e]}`) || he.readOrEmpty(`menu.headerButtons.${e}`) || `{${e}}`,
    );
}
function ye({
    name: a,
    state: i,
    modeName: o,
    modeId: n,
    techTreeEvents: c,
    clanEmblem: l,
    onClick: r,
    modeIconPath: d,
    battleTypesPath: m = 'R.images.gui.maps.icons',
}) {
    const k = _(),
        f = a === le && l,
        h = u(
            e.useMemo(
                () =>
                    (function (e, s) {
                        const t = ((s && xe[e]) || pe[e]) ?? `tooltips.header.buttons.${e}`;
                        return { header: he.readOrEmpty(`${t}.header`), body: he.readOrEmpty(`${t}.body`) };
                    })(f ? ke : a, i === ne),
                [a, i, f],
            ),
        ),
        p = b('techtreeDiscount'),
        x = c && 'techtree' === a ? p : h;
    const v = d ?? `${m}.battleTypes.c_64x64.${n}`;
    return s.jsx('div', {
        ...x,
        className: t(be.base, be[`base__${i}State`], be[`base__${a}Name`]),
        'data-test-id': a,
        onMouseEnter: function (e) {
            (x.onMouseEnter(e),
                i !== ne && k.play('mouse-enter', { target: 'main-menu-widget:menu-item', original: e }));
        },
        onClick: function (e) {
            (x.onClick(), i !== ne && (r(a), k.play('click', { target: 'main-menu-widget:menu-item', original: e })));
        },
        children: (() => {
            switch (a) {
                case de:
                    return s.jsxs(s.Fragment, {
                        children: [
                            s.jsxs('div', {
                                className: be.modeSelector,
                                children: [
                                    s.jsx('div', { className: be.label, children: ve(a) }),
                                    o && s.jsx('div', { className: be.modeName, children: fe.toUpperCase(o) }),
                                    s.jsx('div', { className: be.modeIcon, style: { backgroundImage: `url(${v})` } }),
                                ],
                            }),
                            s.jsx(ue, { className: be.arrow }),
                        ],
                    });
                case le:
                    return s.jsxs('div', {
                        className: be.titleWrapper,
                        children: [
                            l && s.jsx('div', { style: { backgroundImage: `url(${l})` }, className: be.clanEmblem }),
                            s.jsx('div', { className: be.title, children: ve(f ? 'clan' : a) }),
                        ],
                    });
                default:
                    return s.jsx('div', {
                        className: be.titleWrapper,
                        children: s.jsx('div', { className: be.title, children: ve(a) }),
                    });
            }
        })(),
    });
}
const [Ne, Se] = k()(
        ({ observableModel: e }) => ({
            menuItems: e.arrayClone('menuItems'),
            ...e.primitives(['modeName', 'modeId', 'hasTechTreeEvents', 'clanEmblem']),
        }),
        ({ externalModel: e }) => ({ navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate') }),
    ),
    ge = 'MainMenu_222da7b7',
    Te = a(function ({ className: a, battleTypesPath: i, modeIconPath: o }) {
        const { model: n, controls: c } = Se(),
            l = n.menuItems.get(),
            r = n.modeName.get(),
            d = n.modeId.get(),
            m = n.hasTechTreeEvents.get(),
            _ = n.clanEmblem.get();
        return s.jsx('div', {
            className: t(ge, a),
            children: f(l, (s) =>
                e.createElement(ye, {
                    ...s,
                    key: s.name,
                    battleTypesPath: i,
                    modeIconPath: o,
                    onClick: c.navigateTo,
                    modeName: r,
                    modeId: d,
                    techTreeEvents: m,
                    clanEmblem: _,
                }),
            ),
        });
    });
function je(e) {
    const { className: t, battleTypesPath: a, modeIconPath: i, ...o } = e;
    return s.jsx(Ne, { ...o, children: s.jsx(Te, { className: t, battleTypesPath: a, modeIconPath: i }) });
}
var Ie = ((e) => ((e[(e.NEWBIES = 0)] = 'NEWBIES'), (e[(e.EVENT = 1)] = 'EVENT'), e))(Ie || {});
const [Me, we] = k()(
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
                        s.root.isParallaxEnabled.get() ? f(JSON.parse(s.parallax.get().parallaxStructure), p) : void 0,
                    { equals: h },
                ),
                o = i(() => JSON.parse(s.parallax.get().atlas), { equals: h });
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
    Ee = 'AboutButton_f119c81f',
    Ce = 'AboutButton_icon_d14880da',
    Ae = e.memo(function ({ onClick: e }) {
        const { breakpoint: t } = x();
        return s.jsx(v, {
            className: Ee,
            size: t.weight >= y.extraLarge.weight ? v.sizes.small : v.sizes.extraSmall,
            theme: v.themes.secondary,
            onClick: () => {
                (N.click(), e());
            },
            children: s.jsx('div', { className: Ce }),
        });
    });
var Le = ((e) => (
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
))(Le || {});
const Oe = { y: -5, opacity: 0 },
    Re = { y: 0, opacity: 1 },
    De = 150,
    Be = 350,
    $e = 650,
    Ue = {
        countdown: { from: Oe, to: Re, delay: De, duration: Be },
        title: { from: Oe, to: Re, delay: 200, duration: Be },
        subTitle: { from: Oe, to: Re, delay: 350, duration: Be },
        taskShowing: {
            from: { x: 80, filter: 'blur(1px) brightness(5)', opacity: 0 },
            to: { x: 0, filter: 'blur(0px) brightness(1)', opacity: 1 },
            delay: $e,
            easingType: q.EaseOut,
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
            easingType: q.Linear,
            duration: 525,
        },
        missionState: { from: { opacity: 1 }, to: { opacity: 0 }, delay: 1350, duration: Be },
        taskLocked: { from: { y: 0, opacity: 1 }, to: { y: 10, opacity: 0 }, delay: 1350, duration: 1050 },
        taskUnlocked: { from: { y: -10, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 1700, duration: 1050 },
        taskUnlockGlow: {
            from: { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
            to: [
                { x: 80, opacity: 0.8, transform: 'translate(-50%, -50%) scale(5, 1)' },
                { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
            ],
            delay: 1350,
            easingType: q.Linear,
            duration: 525,
        },
        missionUnlocked: {
            from: { opacity: 1, transform: 'scale(1)' },
            to: { opacity: 0, transform: 'scale(1.2)' },
            delay: 0,
            duration: Be,
        },
        taskRewards: { from: { y: 10, opacity: 0 }, to: { opacity: 1, y: 0 }, delay: 0, duration: Be },
        taskDescription: { from: { opacity: 1, y: 0 }, to: { opacity: 0, y: -10 }, delay: 0, duration: Be },
    },
    Ve = 'LockOverlay_6e9eb613',
    Fe = 'LockOverlay_darkOverlay_5f576df6',
    Ke = 'LockOverlay_locker_c4f5162f',
    Pe = 'LockOverlay_locker__withTabs_fd87956e',
    We = 'LockOverlay_ribbon_88606474',
    He = 'LockOverlay_envelope_6f1862d4',
    Ge = 'LockOverlay_divider_b6c99f7a',
    ze = 'LockOverlay_line_1f9148f',
    Je = 'LockOverlay_lock_b6f325cb',
    Ye = 'LockOverlay_mission_2ea23d3e',
    qe = 'LockOverlay_condition_6785e3d0',
    Xe = e.memo(
        ({
            missionName: e,
            battlesToUnlock: t,
            withTabs: a,
            shouldPlayUnlockAnimation: i = !1,
            onAnimationFinished: n,
        }) =>
            s.jsxs(X, {
                className: Ve,
                ...Ue[Le.MISSION_UNLOCKED],
                isDisabled: !i,
                onRest: n,
                children: [
                    s.jsx('div', { className: Fe }),
                    s.jsxs('div', {
                        className: o(Ke, a && Pe),
                        children: [
                            s.jsx('div', { className: We }),
                            s.jsxs('div', {
                                className: He,
                                children: [
                                    s.jsx(S, { classMix: Ye, justifyContent: g.Center, text: e }),
                                    s.jsxs('div', {
                                        className: Ge,
                                        children: [s.jsx('div', { className: ze }), s.jsx('div', { className: Je })],
                                    }),
                                    s.jsx(S, {
                                        classMix: qe,
                                        text: R.strings.sm_lobby.missionSelection.unlockCondition(),
                                        binding: { numBattles: t },
                                        justifyContent: g.Center,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    ),
    Qe = { x: 0, y: -10, opacity: 0, transform: 'scale(1) rotate(0deg)' },
    Ze = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' },
    es = { x: 0, y: 10, opacity: 0, transform: 'scale(1) rotate(0deg)' },
    ss = {
        linear: (e) => e,
        easeIn: (e) => e * e * e,
        easeOut: (e) => --e * e * e + 1,
        easeInOut: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
    },
    ts = e.memo(function ({
        children: t,
        from: a = Qe,
        enter: i = Ze,
        leave: o = es,
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
        const g = ss[b],
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
    as = 'Countdown_2a3608a1',
    is = 'Countdown_timer_4646805f',
    os = 'Countdown_text_846e7f1b',
    ns = 'Countdown_icon_d6ccfe65',
    cs = 'Countdown_bg_47004406',
    ls = 'Countdown_bg__endingSoon_fd34215d',
    rs = r(() => {
        const { model: e } = we(),
            t = e.selectedMission.get(),
            { timeString: a, isEndingSoon: i } = ie(t.secondsCountdown, !0, !0);
        return s.jsxs('div', {
            className: as,
            children: [
                s.jsx('div', { className: o(cs, i && ls) }),
                s.jsxs('div', {
                    className: is,
                    children: [s.jsx('div', { className: ns }), s.jsx('div', { className: os, children: a })],
                }),
            ],
        });
    });
var ds = ((e) => (
    (e[(e.UNCOMPLETED = 0)] = 'UNCOMPLETED'),
    (e[(e.COMPLETED = 1)] = 'COMPLETED'),
    (e[(e.LOCKED = 2)] = 'LOCKED'),
    e
))(ds || {});
const ms = 'TaskDescription_ea7b717f',
    _s = 'TaskDescription_text_2294624d',
    us = 'TaskDescription_text__notLocked_8efc321f',
    bs = 'TaskDescription_timer_3daeb4e4',
    ks = 'TaskDescription_time_9ed754ce',
    fs = 'TaskDescription_clock_81bcabef',
    hs = R.strings.sm_lobby.missionSelection,
    ps = function ({ binding: e }) {
        return s.jsx(T, { className: _s, text: hs.taskDescription.locked(), params: e, upgradeLegacy: !0 });
    },
    xs = function ({ description: e }) {
        return s.jsx(S, { classMix: o(_s, us), text: e, isTruncationAvailable: !0 });
    },
    vs = e.memo(function ({
        description: e,
        taskState: t,
        isUnlockedFirstTime: a,
        timeString: i,
        isShouldPlayAnimation: o,
        onAnimationFinished: n,
        isLockRunOut: c,
    }) {
        const l = t === ds.LOCKED && !c,
            r = {
                timer: s.jsxs('div', {
                    className: bs,
                    children: [s.jsx('div', { className: fs }), s.jsx('div', { className: ks, children: i })],
                }),
            };
        return (a || c) && o
            ? s.jsxs(s.Fragment, {
                  children: [
                      s.jsx(X, { className: ms, ...Ue[Le.TASK_LOCKED], children: s.jsx(ps, { binding: r }) }),
                      s.jsx(X, {
                          className: ms,
                          ...Ue[Le.TASK_UNLOCKED],
                          onRest: n,
                          children: s.jsx(xs, { description: e }),
                      }),
                  ],
              })
            : s.jsx('div', { className: ms, children: l ? s.jsx(ps, { binding: r }) : s.jsx(xs, { description: e }) });
    }),
    ys = 'TaskIcon_5fdfe305',
    Ns = 'TaskIcon_glow_411f0293',
    Ss = 'TaskIcon_base__completed_a946400a',
    gs = 'TaskIcon_base__locked_a946400a',
    Ts = 'TaskIcon_base__hover_a946400a',
    js = 'TaskIcon_iconBody_e49fbd34',
    Is = 'TaskIcon_iconGlow_8f8031c7',
    Ms = 'TaskIcon_iconGlow__switch_ebfee4f8',
    ws = 'TaskIcon_iconGlow__unlock_da6602e',
    Es = e.memo(function ({
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
                      s.jsx(X, {
                          className: ys,
                          ...Ue[Le.TASK_OLD_STATE],
                          onStart: r,
                          children: s.jsxs('div', {
                              className: ys,
                              children: [
                                  s.jsx('div', { className: Ns }),
                                  s.jsx('div', { className: Is }),
                                  s.jsx('div', { className: js }),
                              ],
                          }),
                      }),
                      s.jsx(X, {
                          className: ys,
                          ...Ue[Le.TASK_NEW_STATE],
                          onRest: c,
                          children: s.jsxs('div', {
                              className: o(ys, Ss, i && Ts),
                              children: [
                                  s.jsx('div', { className: Ns }),
                                  s.jsx('div', { className: Is }),
                                  s.jsx('div', { className: js }),
                              ],
                          }),
                      }),
                      s.jsx(X, {
                          className: ys,
                          ...Ue[Le.TASK_SWITCH_GLOW],
                          children: s.jsx('div', { className: o(Is, Ms) }),
                      }),
                  ],
              })
            : (a || d) && n
              ? s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(X, {
                            className: ys,
                            ...Ue[Le.TASK_LOCKED],
                            onStart: l,
                            children: s.jsxs('div', {
                                className: o(ys, gs),
                                children: [
                                    s.jsx('div', { className: Ns }),
                                    s.jsx('div', { className: Is }),
                                    s.jsx('div', { className: js }),
                                ],
                            }),
                        }),
                        s.jsx(X, {
                            className: ys,
                            ...Ue[Le.TASK_UNLOCKED],
                            onRest: c,
                            children: s.jsxs('div', {
                                className: o(ys, i && Ts),
                                children: [
                                    s.jsx('div', { className: Ns }),
                                    s.jsx('div', { className: Is }),
                                    s.jsx('div', { className: js }),
                                ],
                            }),
                        }),
                        s.jsx(X, {
                            className: ys,
                            ...Ue[Le.TASK_UNLOCK_GLOW],
                            children: s.jsx('div', { className: o(Is, ws) }),
                        }),
                    ],
                })
              : s.jsxs('div', {
                    className: o(ys, e === ds.COMPLETED && Ss, e === ds.LOCKED && !d && gs, i && Ts),
                    children: [
                        s.jsx('div', { className: Ns }),
                        s.jsx('div', { className: o(Is) }),
                        s.jsx('div', { className: o(js) }),
                    ],
                });
    }),
    Cs = 'TrackedReward_10911cf8',
    As = 'TrackedReward_base__centered_99f5e2bf',
    Ls = 'TrackedReward_info_3fdceea1',
    Os = ({ missionId: e, taskId: t, rewardNum: a, ...i }) => {
        const n = j(z.StoryMode, {
                action: G.Watched,
                parentScreen: H.MissionSelection,
                timeLimit: 1,
                item: H.TaskRewardTooltip,
                itemState: e.toString(),
                info: JSON.stringify({ task_id: t, task_reward_item: i.name, task_reward_num: a }),
            }),
            c = { ...i.tooltipArgs, ...n },
            l = !i.value && !i.title;
        return s.jsx(I, { className: o(Cs, l && As), classNames: { info: Ls }, ...i, tooltipArgs: c });
    },
    Rs = 'TaskRewards_985186b',
    Ds = 'TaskRewards_title_bbd3263c',
    Bs = 'TaskRewards_rewards_2b6754c2',
    $s = e.memo(
        ({ rewards: t, missionId: a, taskId: i }) => {
            const { breakpoint: o } = x(),
                n = o.weight >= y.extraLarge.weight ? M.Big : M.Small;
            return s.jsxs('div', {
                className: Rs,
                children: [
                    s.jsx('div', { className: Ds, children: R.strings.sm_lobby.missionSelection.taskRewards() }),
                    s.jsx('div', {
                        className: Bs,
                        children: f(t, (s, t) => {
                            const o = w(s.name);
                            return e.createElement(Os, {
                                ...s,
                                key: t,
                                value: oe(s.value, o),
                                valueType: o,
                                image: s.icon[n],
                                size: n,
                                missionId: a,
                                taskId: i,
                                rewardNum: t + 1,
                                tooltipArgs: E({ tooltipId: s.tooltipId }, Number(s.tooltipContentId)),
                            });
                        }),
                    }),
                ],
            });
        },
        (e, s) => e.missionId === s.missionId && e.taskId === s.taskId,
    ),
    Us = 'TaskListItem_c1a02def',
    Vs = 'TaskListItem_frame_94b88bb',
    Fs = 'TaskListItem_frameImg_d444c880',
    Ks = 'TaskListItem_frameImg__hover_260842d6',
    Ps = 'TaskListItem_description_be63c553',
    Ws = ({
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
        onAppearanceAnimationStart: b = C,
        onAppearanceAnimationFinished: k = C,
        onUnlockAnimationStart: f = C,
        onCompletionAnimationStart: h = C,
        onAnimationFinished: p = C,
    }) => {
        const x = e.useRef(r),
            [v, y] = e.useState(l || d),
            [S, g] = e.useState(!1),
            [T, I] = e.useState(!1),
            [M, w] = e.useState(!1),
            [E, A] = e.useState(void 0),
            { timeString: L, secondsLeft: O } = ie(r),
            { onShow: R, onHide: D } = j(z.StoryMode, {
                action: G.Watched,
                parentScreen: H.MissionSelection,
                timeLimit: J,
                item: H.Task,
                itemState: a.toString(),
                info: JSON.stringify({ task_id: i }),
            });
        (e.useEffect(() => () => clearTimeout(E), [E]),
            e.useEffect(() => {
                0 !== x.current && 0 === O && (y(!0), g(!0), m(i));
            }, [O, m, i, r]),
            e.useEffect(() => {
                y(!0);
            }, [_]));
        const B = e.useCallback(() => {
                (y(!1), p());
            }, [p]),
            $ = c !== ds.LOCKED && u.length > 0;
        return s.jsx(
            X,
            {
                className: Us,
                ...{ ...Ue[Le.TASK_SHOWING], delay: $e + 150 * t },
                onStart: b,
                onRest: k,
                children: s.jsxs('div', {
                    className: Vs,
                    onMouseEnter: () => {
                        (A(
                            window.setTimeout(() => {
                                w(!0);
                            }, 150),
                        ),
                            N.highlight(),
                            I(!0),
                            R());
                    },
                    onMouseLeave: () => {
                        (clearTimeout(E), w(!1), I(!1), D());
                    },
                    children: [
                        s.jsx('div', { className: o(Fs, T && Ks) }),
                        s.jsx(Es, {
                            taskState: c,
                            isCompletedFirstTime: l,
                            isUnlockedFirstTime: d,
                            isLockRunOut: S,
                            isHover: T,
                            isShouldPlayAnimation: v,
                            onAnimationFinished: B,
                            onCompletionAnimationStart: h,
                            onUnlockAnimationStart: f,
                        }),
                        $ &&
                            s.jsx(X, {
                                ...Ue[Le.TASK_REWARDS],
                                isReverse: !M,
                                children: s.jsx($s, { rewards: u, missionId: a, taskId: i }),
                            }),
                        s.jsx(X, {
                            className: Ps,
                            ...Ue[Le.TASK_DESCRIPTION],
                            isReverse: !!$ && !M,
                            isDisabled: !$,
                            children: s.jsx(vs, {
                                description: n,
                                taskState: c,
                                isUnlockedFirstTime: d,
                                isLockRunOut: S,
                                timeString: L,
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
    Hs = 'TaskList_31802e',
    Gs = r(({ isChanging: t }) => {
        const { controls: a, model: i } = we(),
            o = e.useRef(!1),
            n = e.useRef(!1),
            c = i.selectedMission.get(),
            l = i.tasks.get(),
            r = e.useCallback(() => {
                n.current || (N.sound(Q), (n.current = !0));
            }, []),
            d = e.useCallback(() => {
                n.current || (N.sound(Z), (n.current = !0));
            }, []),
            m = e.useCallback(() => {
                o.current || (N.sound(ee), (o.current = !0));
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
                  className: Hs,
                  children: f(l, (e, t) =>
                      s.jsx(
                          Ws,
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
    zs = 'MissionInfo_511576db',
    Js = 'MissionInfo_base__center_d51dad60',
    Ys = 'MissionInfo_title_2a9e17cc',
    qs = 'MissionInfo_subTitle_31acb91',
    Xs = r(({ isChanged: e, durationTasks: t }) => {
        const { model: a } = we(),
            i = a.root.selectedTab.get() === Ie.EVENT,
            n = a.selectedMission.get(),
            c = n.missionId,
            l = a.tasks.get().length,
            { breakpoint: r } = x(),
            d = r.weight > y.extraLarge.weight;
        return s.jsxs('div', {
            className: o(zs, l > 1 && Js),
            children: [
                n.isCountdownVisible &&
                    s.jsx(
                        X,
                        { trigger: c, ...Ue[Le.COUNTDOWN], children: s.jsx(rs, {}) },
                        i ? 'countdown' : `countdown_${c}`,
                    ),
                s.jsx(
                    X,
                    {
                        ...Ue[Le.TITLE],
                        className: Ys,
                        children: R.strings.sm_lobby.missionSelection.missionName.$num(c),
                    },
                    i ? 'title' : `title_${c}`,
                ),
                s.jsx(
                    X,
                    {
                        ...Ue[Le.SUB_TITLE],
                        children: s.jsx(A, {
                            className: qs,
                            text: R.strings.sm_lobby.missionSelection.missionDescription.$num(c),
                        }),
                    },
                    i ? 'subTitle' : `subTitle_${c}`,
                ),
                s.jsx('div', {
                    style: { height: (d ? 86 : 84) * l + 'rem' },
                    children: s.jsx(
                        ts,
                        { isTransition: e, duration: t, children: s.jsx(Gs, { isChanging: !e }) },
                        `taskList_${c}`,
                    ),
                }),
            ],
        });
    });
var Qs = ((e) => ((e.UNDEFINED = ''), (e.NORMAL = 'normal'), (e.HARD = 'hard'), (e.VERY_HARD = 'very_hard'), e))(
    Qs || {},
);
const Zs = {
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
    et = e.memo(
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
                m = j(z.StoryMode, {
                    action: G.Watched,
                    parentScreen: H.MissionSelection,
                    timeLimit: J,
                    item: H.SelectButtonTooltip,
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
                s.jsx(L, {
                    contentId: R.views.story_mode.mono.lobby.tooltips.difficulty_tooltip('resId'),
                    args: { difficulty: c, isSelected: t, missionId: a },
                    ...m,
                    children: s.jsxs('div', {
                        className: o(Zs.base, t && Zs.base__selected, l && Zs.base__locked),
                        children: [
                            s.jsx('div', { className: o(Zs.back, Zs[`back__${c}`]) }),
                            !l &&
                                s.jsxs(s.Fragment, {
                                    children: [
                                        !t && s.jsx('div', { className: o(Zs.backHover, Zs[`backHover__${c}`]) }),
                                        s.jsx('div', { className: o(Zs.backSelected, Zs[`backSelected__${c}`]) }),
                                    ],
                                }),
                            l && s.jsx('div', { className: o(Zs.backLocked, Zs[`backLocked__${c}`]) }),
                            s.jsx('div', {
                                className: o(Zs.video, Zs.video__container),
                                children: O.isLow()
                                    ? s.jsx('div', { className: o(Zs.video, Zs.video__static, Zs[`video__${c}`]) })
                                    : s.jsx(D, {
                                          className: o(Zs.video, Zs[`video__${c}`]),
                                          src: R.videos.story_mode.v_icon_fire(),
                                          ref: d,
                                          loop: !0,
                                      }),
                            }),
                            s.jsx('div', {
                                className: o(!l && Zs.displayName, l && Zs.displayNameLocked),
                                children: n,
                            }),
                            s.jsx('div', {
                                className: Zs.area,
                                onClick: () => {
                                    t ||
                                        l ||
                                        (c === Qs.HARD ? N.sound(se) : c === Qs.VERY_HARD ? N.sound(te) : N.sound(ae),
                                        r(a));
                                },
                                onMouseEnter: () => {
                                    t || N.highlight();
                                },
                            }),
                        ],
                    }),
                })
            );
        },
    ),
    st = {
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
    tt = e.memo(
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
                    className: o(st.base, t && st.base__selected, n && st.base__complete, l && st.base__locked),
                    children: [
                        s.jsx('div', {
                            className: st.area,
                            onClick: () => {
                                t || (N.click(), r(a));
                            },
                            onMouseEnter: N.highlight,
                        }),
                        s.jsx('div', { className: st.backNormal }),
                        s.jsx('div', { className: st.backSelected }),
                        (!n || c || l) &&
                            s.jsxs(X, {
                                className: st.missionState,
                                ...Ue[Le.MISSION_STATE],
                                isDisabled: !c,
                                children: [
                                    s.jsx('div', { className: st.iconShadow }),
                                    s.jsx('div', { className: st.iconGlow }),
                                    s.jsx('div', { className: st.icon }),
                                ],
                            }),
                        s.jsx('div', {
                            className: st.video,
                            children: O.isLow()
                                ? s.jsx('div', { className: o(st.video, st.video__static) })
                                : s.jsx(D, {
                                      className: st.video,
                                      src: R.videos.story_mode.v_icon_fire(),
                                      ref: d,
                                      loop: !0,
                                  }),
                        }),
                        s.jsx('div', { className: st.hover }),
                        s.jsx('div', { className: st.missionId, children: i }),
                    ],
                })
            );
        },
    ),
    at = 'MissionSelector_76541093',
    it = 'MissionSelector_line_f1696e16',
    ot = 'MissionSelector_line__left_3bb808a9',
    nt = 'MissionSelector_line__right_173c4f2b',
    ct = 'MissionSelector_line__selected_e9253750',
    lt = r(({ onClick: t, className: a }) => {
        const { model: i } = we(),
            n = i.missions.get(),
            c = i.selectedMission.get().missionId,
            l = i.computes.getIsSelectedMissionCompletedFirstTime();
        return s.jsx('div', {
            className: o(at, a),
            children: f(n, (a, r) => {
                const d = c === a.missionId,
                    m = B(n, r + 1),
                    _ = c === (null == m ? void 0 : m.missionId);
                return s.jsxs(
                    e.Fragment,
                    {
                        children: [
                            i.root.selectedTab.get() === Ie.EVENT
                                ? s.jsx(et, {
                                      onClick: t,
                                      isSelected: d,
                                      missionId: a.missionId,
                                      displayName: a.displayName,
                                      difficulty: a.difficulty,
                                      selectedMissionId: c,
                                      locked: a.locked,
                                  })
                                : s.jsx(tt, {
                                      onClick: t,
                                      isSelected: d,
                                      missionId: a.missionId,
                                      displayName: a.displayName,
                                      isCompleted: a.isCompleted,
                                      isCompletedFirstTime: d && l,
                                      locked: a.locked,
                                  }),
                            i.root.selectedTab.get() !== Ie.EVENT &&
                                r !== n.length - 1 &&
                                s.jsx('div', { className: o(it, d && ot, _ && nt, (d || _) && ct) }),
                        ],
                    },
                    a.missionId,
                );
            }),
        });
    }),
    rt = 'MissionVehicle_d1a7ad80',
    dt = 'MissionVehicle_text_c92f6291',
    mt = 'MissionVehicle_icon_7d9e858',
    _t = ({ className: e }) => {
        const t = j(z.StoryMode, {
            action: G.Watched,
            item: H.MssVehicleTooltip,
            parentScreen: H.MissionSelection,
            timeLimit: J,
        });
        return s.jsxs('div', {
            className: o(rt, e),
            children: [
                s.jsx('div', { className: dt, children: R.strings.sm_lobby.missionSelection.specialVehicle() }),
                s.jsx(L, {
                    ignoreMouseClick: !0,
                    ignoreShowDelay: !0,
                    contentId: R.views.story_mode.mono.lobby.tooltips.mission_tooltip('resId'),
                    ...t,
                    children: s.jsx('div', { className: mt }),
                }),
            ],
        });
    },
    ut = 360,
    bt = { tension: 210, friction: 240 },
    kt = { tension: 70, friction: 480 },
    ft = 'AssetItem_7cff1111',
    ht = 'AssetItem_sprite_c476eaa9',
    pt = 'AssetItem_imgLoader_6b833910',
    xt = (e, s, t, a) => {
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
    vt = r(({ loadChecker: e, item: t }) => {
        const { model: a } = we(),
            { chunkFileExt: i, chunksAssetsPath: o } = a.parallax.get();
        return s.jsxs('div', {
            className: ft,
            children: [
                s.jsx('div', { className: ht, style: { ...xt(t, a.computes.atlasObj(), i, o).style } }),
                s.jsx('img', {
                    className: pt,
                    alt: t.keyName,
                    src: xt(t, a.computes.atlasObj(), i, o).source.backgroundSource,
                    onLoad: e,
                }),
            ],
        });
    }),
    yt = 'Assets_c481c379',
    Nt = r(({ dioramaLoaded: t }) => {
        const { model: a } = we(),
            i = a.computes.parallaxStructureObj(),
            o = i ? i.length : 0,
            n = e.useRef(0),
            c = e.useCallback(() => {
                (n.current++, n.current === o && (t && t(), (n.current = 0)));
            }, [t, o]);
        return s.jsx('div', {
            className: yt,
            children: i && i.map((e, t) => s.jsx(vt, { item: e, loadChecker: c }, `${i.missionId}_${e.keyName}_${t}`)),
        });
    }),
    St = 2560,
    gt = 1440,
    Tt = St / gt,
    jt = r(({ children: t }) => {
        const { model: a } = we(),
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
                const e = $('rem');
                let s = 1;
                (e.width >= e.height * Tt ? (s = e.width / St) : e.height >= e.width / Tt && (s = e.height / gt), m(s));
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
    It = 'Parallax_ac12e19d',
    Mt = 'Parallax_asset_5a17fdd4',
    wt = r(({ refParent: t, dioramaLoaded: a }) => {
        const { model: i } = we(),
            { xTilt: o, xTiltRange: n, yTilt: c, yTiltRange: r, xSlide: m, ySlide: _ } = i.parallax.get(),
            [u] = ((s, t) => {
                const a = e.useCallback(
                        (e, t, a) => {
                            const i = Math.min(Math.max((e - a.x) / a.width, 0), 1),
                                o = Math.min(Math.max((t - a.y) / a.height, 0), 1),
                                n = s.yTilt + s.yTiltRange + ut - (s.yTilt - s.yTiltRange + ut),
                                c = s.xTilt + s.xTiltRange + ut - (s.xTilt - s.xTiltRange + ut),
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
                                    return void c.start({ x: 0, y: 0, xR: s.xTilt, yR: s.yTilt, config: kt });
                                c.start({ ...a(e, o, n), config: bt });
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
        return s.jsx(jt, {
            children: s.jsx(l.div, {
                style: { x: u.x.to((e) => e * m), y: u.y.to((e) => e * _), rotateX: u.xR, rotateY: u.yR },
                className: It,
                children: s.jsx('div', { className: Mt, children: s.jsx(Nt, { dioramaLoaded: a }) }),
            }),
        });
    }),
    Et = 'TabItem_6e36712a',
    Ct = 'TabItem_base__selected_7fd0198b',
    At = 'TabItem_tab_8e3e07cd',
    Lt = 'TabItem_tab__hoverDecor_4092b1d7',
    Ot = e.memo(function ({ tabText: e, isSelected: t, onClick: a }) {
        return s.jsxs('div', {
            className: o(Et, t && Ct),
            children: [
                s.jsx('div', {
                    className: At,
                    onClick: () => {
                        t || (N.click(), a());
                    },
                    onMouseEnter: () => {
                        t || N.highlight();
                    },
                    children: e,
                }),
                s.jsx('div', { className: o(At, Lt), children: e }),
            ],
        });
    }),
    Rt = 'Tabs_16a37c54',
    Dt = 'Tabs_line_70775af',
    Bt = 'Tabs_line__second_eef62bb7',
    $t = e.memo(({ selectedTab: e, onChange: t }) =>
        s.jsxs('div', {
            className: Rt,
            children: [
                s.jsx('div', { className: Dt }),
                s.jsx('div', { className: o(Dt, Bt) }),
                s.jsx(Ot, {
                    tabText: R.strings.sm_lobby.missionSelection.tab.newbies(),
                    onClick: () => t(Ie.NEWBIES),
                    isSelected: e === Ie.NEWBIES,
                }),
                s.jsx(Ot, {
                    tabText: R.strings.sm_lobby.missionSelection.tab.event(),
                    onClick: () => t(Ie.EVENT),
                    isSelected: e === Ie.EVENT,
                }),
            ],
        }),
    ),
    Ut = 'MissionSelectionViewApp_e1e00eaf',
    Vt = 'MissionSelectionViewApp_blackScreen_b9764bd8',
    Ft = 'MissionSelectionViewApp_blackScreen__overlay_5540cd02',
    Kt = 'MissionSelectionViewApp_shadowTop_65560dd6',
    Pt = 'MissionSelectionViewApp_shadowMissions_1872614',
    Wt = 'MissionSelectionViewApp_shadowLeft_536e08dd',
    Ht = 'MissionSelectionViewApp_shadowBottom_3cc6c587',
    Gt = 'MissionSelectionViewApp_about_a212c4ec',
    zt = 'MissionSelectionViewApp_tabs_81d77c84',
    Jt = 'MissionSelectionViewApp_missionSelector_9673efb9',
    Yt = 'MissionSelectionViewApp_missionSelector__withoutTabs_6bace1be',
    qt = 'MissionSelectionViewApp_specialVehicle_8744b153',
    Xt = 'MissionSelectionViewApp_leftSparkles_89820688',
    Qt = 'MissionSelectionViewApp_rightSparkles_e9be7b23',
    Zt = 'MissionSelectionViewApp_logo_a9918fd',
    ea = 'MissionSelectionViewApp_vignette_e6471868',
    sa = 'MissionSelectionViewApp_menuItems_c66c1866',
    ta = 'MissionSelectionViewApp_triggerHint_58ad728',
    aa = { rootId: m.resolve('aliases').read((e) => e.hangar.shared.MainMenu('resId')) },
    ia = r(() => {
        const { controls: t, model: a } = we(),
            [i, n] = e.useState({ id: void 0, isTab: !1 }),
            c = a.selectedMission.get(),
            r = e.useRef(null),
            m = e.useRef({ missionId: void 0, locked: !1 }),
            [_, u] = e.useState(!1),
            b = a.root.isTabsVisible.get(),
            k = a.root.selectedTab.get(),
            f = k === Ie.EVENT,
            h = i.isTab ? k : c.missionId,
            [p, x] = e.useState(!1),
            [v, y] = d(() => ({}));
        (e.useEffect(() => {
            i.id !== c.missionId && n({ id: c.missionId, isTab: !1 });
        }, [c.missionId]),
            U(() => {
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
            V(F.ESCAPE, t.exit),
            s.jsxs('div', {
                className: Ut,
                ref: r,
                children: [
                    s.jsx('div', { className: Vt }),
                    !c.locked && a.root.isParallaxEnabled.get()
                        ? s.jsx(wt, { refParent: r, dioramaLoaded: g })
                        : s.jsx(Y, {
                              backgroundPath: R.images.story_mode.gui.maps.icons.common.backgrounds.$num(c.missionId),
                              onLoaded: g,
                              grayscaleApplied: c.locked,
                              showVignette: !c.locked,
                              showBlur: c.locked,
                          }),
                    c.locked
                        ? s.jsx('div', { className: ea })
                        : s.jsxs(e.Fragment, {
                              children: [
                                  s.jsx('div', { className: Xt }),
                                  s.jsx('div', { className: Qt }),
                                  s.jsx('div', { className: Wt }),
                              ],
                          }),
                    s.jsx('div', { className: Kt }),
                    s.jsx('div', { className: Ht }),
                    b && s.jsx('div', { className: Pt }),
                    f && s.jsx('div', { className: Zt }),
                    s.jsx(l.div, { className: o(Vt, Ft), style: v }),
                    !c.locked && s.jsx(Xs, { isChanged: h === i.id, durationTasks: 250 }),
                    (c.locked || _) &&
                        s.jsx(Xe, {
                            shouldPlayUnlockAnimation: _,
                            missionName: R.strings.sm_lobby.missionSelection.lockedMissionName.$num(c.missionId),
                            battlesToUnlock: c.battlesToUnlock,
                            onAnimationFinished: N,
                            withTabs: b,
                        }),
                    !f && s.jsx(l.div, { className: o(Vt, Ft), style: v }),
                    b &&
                        s.jsx('div', {
                            className: zt,
                            children: s.jsx($t, { selectedTab: k, onChange: (e) => S(e, !0) }),
                        }),
                    s.jsx('div', { className: sa, children: s.jsx(je, { options: aa }) }),
                    s.jsx('div', { className: Gt, children: s.jsx(Ae, { onClick: t.openAbout }) }),
                    s.jsx(lt, { onClick: (e) => S(e, !1), className: o(Jt, !b && Yt) }),
                    s.jsx(_t, { className: qt }),
                    i.isTab && s.jsx(l.div, { className: Vt, style: v }),
                    f && !i.isTab && s.jsx('div', { className: ta, id: 'mission-selection-trigger-hint-id' }),
                ],
            })
        );
    });
W(new K().add(P).add(Me).render(s.jsx(ia, {})), { fullScreen: !0 });
