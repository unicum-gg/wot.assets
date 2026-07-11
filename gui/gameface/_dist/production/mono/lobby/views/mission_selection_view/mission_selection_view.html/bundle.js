import {
    r as e,
    j as s,
    e as t,
    l as a,
    k as i,
    m as o,
    q as n,
    s as c,
    p as l,
    n as r,
} from '../../../chunks/vendor.js';
import {
    l as d,
    n as m,
    o as _,
    q as u,
    i as b,
    m as k,
    c as f,
    s as h,
    u as p,
    B as x,
    b as v,
    p as y,
    E as N,
    A as S,
    F as g,
    a as T,
    R as j,
    I,
    d as M,
    g as w,
    t as E,
    M as C,
    T as A,
    v as L,
    V as O,
    w as D,
    x as B,
    y as $,
    e as U,
    k as V,
    J as F,
    U as K,
    r as P,
} from '../../../chunks/lib.js';
import { L as W, a as H, F as G, T as z, B as J } from '../../../chunks/uilogging_constants.js';
import { E as Y, S as q, M as X, e as Q, f as Z, g as ee, h as se, i as te } from '../../../chunks/sound_constants.js';
import { u as ae } from '../../../chunks/useFormattedCountdown.js';
import { a as ie } from '../../../chunks/formatters.js';
const oe = 'disabled',
    ne = 'shop',
    ce = 'storage',
    le = 'techtree',
    re = 'barracks',
    de = 'tournament',
    me = 'clans',
    _e = 'clan',
    ue = 'missions',
    be = 'personalMissions',
    ke = 'modeSelector',
    fe = 'achievements',
    he = 'replays',
    pe = {
        [ne]: 'shop',
        [ce]: 'storage',
        [le]: 'techtree',
        [re]: 'barracks',
        [de]: 'tournament',
        [me]: 'clans',
        [_e]: 'clan',
        [ue]: 'missions',
        [be]: 'personalMissions',
        [ke]: 'modeSelector',
        [fe]: 'profile',
        [he]: 'replays',
    },
    xe = (s) =>
        e.createElement(
            'svg',
            { width: 7, height: 18, viewBox: '0 0 7 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...s },
            e.createElement('path', {
                d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
            }),
        ),
    ve = {
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
    ye = 'forts',
    Ne = d.resolve('intl'),
    Se = d.resolve('strings'),
    ge = {
        [ke]: 'tooltips.header.battleType',
        [de]: 'tooltips.header.buttons.tournaments',
        [fe]: 'tooltips.header.buttons.profile',
    },
    Te = {
        [me]: 'tooltips.header.buttons.clans.turnedOff',
        [be]: 'tooltips.header.buttons.personalMissionsDisabled',
        [ye]: 'tooltips.header.buttons.forts.turnedOff',
    };
function je(e) {
    return Ne.toUpperCase(
        Se.readOrEmpty(`menu.headerButtons.${pe[e]}`) || Se.readOrEmpty(`menu.headerButtons.${e}`) || `{${e}}`,
    );
}
function Ie({
    name: a,
    state: i,
    modeName: o,
    modeId: n,
    techTreeEvents: c,
    clanEmblem: l,
    onClick: r,
    modeIconPath: d,
    battleTypesPath: b = 'R.images.gui.maps.icons',
}) {
    const k = m(),
        f = a === me && l,
        h = _(
            e.useMemo(
                () =>
                    (function (e, s) {
                        const t = ((s && Te[e]) || ge[e]) ?? `tooltips.header.buttons.${e}`;
                        return { header: Se.readOrEmpty(`${t}.header`), body: Se.readOrEmpty(`${t}.body`) };
                    })(f ? ye : a, i === oe),
                [a, i, f],
            ),
        ),
        p = u('techtreeDiscount'),
        x = c && 'techtree' === a ? p : h;
    const v = d ?? `${b}.battleTypes.c_64x64.${n}`;
    return s.jsx('div', {
        ...x,
        className: t(ve.base, ve[`base__${i}State`], ve[`base__${a}Name`]),
        'data-test-id': a,
        onMouseEnter: function (e) {
            (x.onMouseEnter(e),
                i !== oe && k.play('mouse-enter', { target: 'main-menu-widget:menu-item', original: e }));
        },
        onClick: function (e) {
            (x.onClick(), i !== oe && (r(a), k.play('click', { target: 'main-menu-widget:menu-item', original: e })));
        },
        children: (() => {
            switch (a) {
                case ke:
                    return s.jsxs(s.Fragment, {
                        children: [
                            s.jsxs('div', {
                                className: ve.modeSelector,
                                children: [
                                    s.jsx('div', { className: ve.label, children: je(a) }),
                                    o && s.jsx('div', { className: ve.modeName, children: Ne.toUpperCase(o) }),
                                    s.jsx('div', { className: ve.modeIcon, style: { backgroundImage: `url(${v})` } }),
                                ],
                            }),
                            s.jsx(xe, { className: ve.arrow }),
                        ],
                    });
                case me:
                    return s.jsxs('div', {
                        className: ve.titleWrapper,
                        children: [
                            l && s.jsx('div', { style: { backgroundImage: `url(${l})` }, className: ve.clanEmblem }),
                            s.jsx('div', { className: ve.title, children: je(f ? 'clan' : a) }),
                        ],
                    });
                default:
                    return s.jsx('div', {
                        className: ve.titleWrapper,
                        children: s.jsx('div', { className: ve.title, children: je(a) }),
                    });
            }
        })(),
    });
}
const [Me, we] = b()(
        ({ observableModel: e }) => ({
            menuItems: e.arrayClone('menuItems'),
            ...e.primitives(['modeName', 'modeId', 'hasTechTreeEvents', 'clanEmblem']),
        }),
        ({ externalModel: e }) => ({ navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate') }),
    ),
    Ee = 'MainMenu_222da7b7',
    Ce = a(function ({ className: a, battleTypesPath: i, modeIconPath: o }) {
        const { model: n, controls: c } = we(),
            l = n.menuItems.get(),
            r = n.modeName.get(),
            d = n.modeId.get(),
            m = n.hasTechTreeEvents.get(),
            _ = n.clanEmblem.get();
        return s.jsx('div', {
            className: t(Ee, a),
            children: k(l, (s) =>
                e.createElement(Ie, {
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
function Ae(e) {
    const { className: t, battleTypesPath: a, modeIconPath: i, ...o } = e;
    return s.jsx(Me, { ...o, children: s.jsx(Ce, { className: t, battleTypesPath: a, modeIconPath: i }) });
}
var Le = ((e) => ((e[(e.NEWBIES = 0)] = 'NEWBIES'), (e[(e.EVENT = 1)] = 'EVENT'), e))(Le || {});
const [Oe, Re] = b()(
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
                        s.root.isParallaxEnabled.get() ? k(JSON.parse(s.parallax.get().parallaxStructure), h) : void 0,
                    { equals: f },
                ),
                o = i(() => JSON.parse(s.parallax.get().atlas), { equals: f });
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
    De = 'AboutButton_f119c81f',
    Be = 'AboutButton_icon_d14880da',
    $e = e.memo(function ({ onClick: e }) {
        const { breakpoint: t } = p();
        return s.jsx(x, {
            className: De,
            size: t.weight >= v.extraLarge.weight ? x.sizes.small : x.sizes.extraSmall,
            theme: x.themes.secondary,
            onClick: () => {
                (y.click(), e());
            },
            children: s.jsx('div', { className: Be }),
        });
    });
var Ue = ((e) => (
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
))(Ue || {});
const Ve = { y: -5, opacity: 0 },
    Fe = { y: 0, opacity: 1 },
    Ke = 150,
    Pe = 350,
    We = 650,
    He = {
        countdown: { from: Ve, to: Fe, delay: Ke, duration: Pe },
        title: { from: Ve, to: Fe, delay: 200, duration: Pe },
        subTitle: { from: Ve, to: Fe, delay: 350, duration: Pe },
        taskShowing: {
            from: { x: 80, filter: 'blur(1px) brightness(5)', opacity: 0 },
            to: { x: 0, filter: 'blur(0px) brightness(1)', opacity: 1 },
            delay: We,
            easingType: Y.EaseOut,
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
            easingType: Y.Linear,
            duration: 525,
        },
        missionState: { from: { opacity: 1 }, to: { opacity: 0 }, delay: 1350, duration: Pe },
        taskLocked: { from: { y: 0, opacity: 1 }, to: { y: 10, opacity: 0 }, delay: 1350, duration: 1050 },
        taskUnlocked: { from: { y: -10, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 1700, duration: 1050 },
        taskUnlockGlow: {
            from: { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
            to: [
                { x: 80, opacity: 0.8, transform: 'translate(-50%, -50%) scale(5, 1)' },
                { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
            ],
            delay: 1350,
            easingType: Y.Linear,
            duration: 525,
        },
        missionUnlocked: {
            from: { opacity: 1, transform: 'scale(1)' },
            to: { opacity: 0, transform: 'scale(1.2)' },
            delay: 0,
            duration: Pe,
        },
        taskRewards: { from: { y: 10, opacity: 0 }, to: { opacity: 1, y: 0 }, delay: 0, duration: Pe },
        taskDescription: { from: { opacity: 1, y: 0 }, to: { opacity: 0, y: -10 }, delay: 0, duration: Pe },
    },
    Ge = 'LockOverlay_6e9eb613',
    ze = 'LockOverlay_darkOverlay_5f576df6',
    Je = 'LockOverlay_locker_c4f5162f',
    Ye = 'LockOverlay_locker__withTabs_fd87956e',
    qe = 'LockOverlay_ribbon_88606474',
    Xe = 'LockOverlay_envelope_6f1862d4',
    Qe = 'LockOverlay_divider_b6c99f7a',
    Ze = 'LockOverlay_line_1f9148f',
    es = 'LockOverlay_lock_b6f325cb',
    ss = 'LockOverlay_mission_2ea23d3e',
    ts = 'LockOverlay_condition_6785e3d0',
    as = e.memo(
        ({
            missionName: e,
            battlesToUnlock: t,
            withTabs: a,
            shouldPlayUnlockAnimation: i = !1,
            onAnimationFinished: n,
        }) =>
            s.jsxs(q, {
                className: Ge,
                ...He[Ue.MISSION_UNLOCKED],
                isDisabled: !i,
                onRest: n,
                children: [
                    s.jsx('div', { className: ze }),
                    s.jsxs('div', {
                        className: o(Je, a && Ye),
                        children: [
                            s.jsx('div', { className: qe }),
                            s.jsxs('div', {
                                className: Xe,
                                children: [
                                    s.jsx(N, { classMix: ss, justifyContent: S.Center, text: e }),
                                    s.jsxs('div', {
                                        className: Qe,
                                        children: [s.jsx('div', { className: Ze }), s.jsx('div', { className: es })],
                                    }),
                                    s.jsx(N, {
                                        classMix: ts,
                                        text: R.strings.sm_lobby.missionSelection.unlockCondition(),
                                        binding: { numBattles: t },
                                        justifyContent: S.Center,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    ),
    is = { x: 0, y: -10, opacity: 0, transform: 'scale(1) rotate(0deg)' },
    os = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' },
    ns = { x: 0, y: 10, opacity: 0, transform: 'scale(1) rotate(0deg)' },
    cs = {
        linear: (e) => e,
        easeIn: (e) => e * e * e,
        easeOut: (e) => --e * e * e + 1,
        easeInOut: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
    },
    ls = e.memo(function ({
        children: t,
        from: a = is,
        enter: i = os,
        leave: o = ns,
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
        const g = cs[b],
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
    rs = 'Countdown_2a3608a1',
    ds = 'Countdown_timer_4646805f',
    ms = 'Countdown_text_846e7f1b',
    _s = 'Countdown_icon_d6ccfe65',
    us = 'Countdown_bg_47004406',
    bs = 'Countdown_bg__endingSoon_fd34215d',
    ks = a(() => {
        const { model: e } = Re(),
            t = e.selectedMission.get(),
            { timeString: a, isEndingSoon: i } = ae(t.secondsCountdown, !0, !0);
        return s.jsxs('div', {
            className: rs,
            children: [
                s.jsx('div', { className: o(us, i && bs) }),
                s.jsxs('div', {
                    className: ds,
                    children: [s.jsx('div', { className: _s }), s.jsx('div', { className: ms, children: a })],
                }),
            ],
        });
    });
var fs = ((e) => (
    (e[(e.UNCOMPLETED = 0)] = 'UNCOMPLETED'),
    (e[(e.COMPLETED = 1)] = 'COMPLETED'),
    (e[(e.LOCKED = 2)] = 'LOCKED'),
    e
))(fs || {});
const hs = 'TaskDescription_ea7b717f',
    ps = 'TaskDescription_text_2294624d',
    xs = 'TaskDescription_text__notLocked_8efc321f',
    vs = 'TaskDescription_timer_3daeb4e4',
    ys = 'TaskDescription_time_9ed754ce',
    Ns = 'TaskDescription_clock_81bcabef',
    Ss = R.strings.sm_lobby.missionSelection,
    gs = function ({ binding: e }) {
        return s.jsx(g, { className: ps, text: Ss.taskDescription.locked(), params: e, upgradeLegacy: !0 });
    },
    Ts = function ({ description: e }) {
        return s.jsx(N, { classMix: o(ps, xs), text: e, isTruncationAvailable: !0 });
    },
    js = e.memo(function ({
        description: e,
        taskState: t,
        isUnlockedFirstTime: a,
        timeString: i,
        isShouldPlayAnimation: o,
        onAnimationFinished: n,
        isLockRunOut: c,
    }) {
        const l = t === fs.LOCKED && !c,
            r = {
                timer: s.jsxs('div', {
                    className: vs,
                    children: [s.jsx('div', { className: Ns }), s.jsx('div', { className: ys, children: i })],
                }),
            };
        return (a || c) && o
            ? s.jsxs(s.Fragment, {
                  children: [
                      s.jsx(q, { className: hs, ...He[Ue.TASK_LOCKED], children: s.jsx(gs, { binding: r }) }),
                      s.jsx(q, {
                          className: hs,
                          ...He[Ue.TASK_UNLOCKED],
                          onRest: n,
                          children: s.jsx(Ts, { description: e }),
                      }),
                  ],
              })
            : s.jsx('div', { className: hs, children: l ? s.jsx(gs, { binding: r }) : s.jsx(Ts, { description: e }) });
    }),
    Is = 'TaskIcon_5fdfe305',
    Ms = 'TaskIcon_glow_411f0293',
    ws = 'TaskIcon_base__completed_a946400a',
    Es = 'TaskIcon_base__locked_a946400a',
    Cs = 'TaskIcon_base__hover_a946400a',
    As = 'TaskIcon_iconBody_e49fbd34',
    Ls = 'TaskIcon_iconGlow_8f8031c7',
    Os = 'TaskIcon_iconGlow__switch_ebfee4f8',
    Rs = 'TaskIcon_iconGlow__unlock_da6602e',
    Ds = e.memo(function ({
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
                      s.jsx(q, {
                          className: Is,
                          ...He[Ue.TASK_OLD_STATE],
                          onStart: r,
                          children: s.jsxs('div', {
                              className: Is,
                              children: [
                                  s.jsx('div', { className: Ms }),
                                  s.jsx('div', { className: Ls }),
                                  s.jsx('div', { className: As }),
                              ],
                          }),
                      }),
                      s.jsx(q, {
                          className: Is,
                          ...He[Ue.TASK_NEW_STATE],
                          onRest: c,
                          children: s.jsxs('div', {
                              className: o(Is, ws, i && Cs),
                              children: [
                                  s.jsx('div', { className: Ms }),
                                  s.jsx('div', { className: Ls }),
                                  s.jsx('div', { className: As }),
                              ],
                          }),
                      }),
                      s.jsx(q, {
                          className: Is,
                          ...He[Ue.TASK_SWITCH_GLOW],
                          children: s.jsx('div', { className: o(Ls, Os) }),
                      }),
                  ],
              })
            : (a || d) && n
              ? s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(q, {
                            className: Is,
                            ...He[Ue.TASK_LOCKED],
                            onStart: l,
                            children: s.jsxs('div', {
                                className: o(Is, Es),
                                children: [
                                    s.jsx('div', { className: Ms }),
                                    s.jsx('div', { className: Ls }),
                                    s.jsx('div', { className: As }),
                                ],
                            }),
                        }),
                        s.jsx(q, {
                            className: Is,
                            ...He[Ue.TASK_UNLOCKED],
                            onRest: c,
                            children: s.jsxs('div', {
                                className: o(Is, i && Cs),
                                children: [
                                    s.jsx('div', { className: Ms }),
                                    s.jsx('div', { className: Ls }),
                                    s.jsx('div', { className: As }),
                                ],
                            }),
                        }),
                        s.jsx(q, {
                            className: Is,
                            ...He[Ue.TASK_UNLOCK_GLOW],
                            children: s.jsx('div', { className: o(Ls, Rs) }),
                        }),
                    ],
                })
              : s.jsxs('div', {
                    className: o(Is, e === fs.COMPLETED && ws, e === fs.LOCKED && !d && Es, i && Cs),
                    children: [
                        s.jsx('div', { className: Ms }),
                        s.jsx('div', { className: o(Ls) }),
                        s.jsx('div', { className: o(As) }),
                    ],
                });
    }),
    Bs = 'TrackedReward_10911cf8',
    $s = 'TrackedReward_base__centered_99f5e2bf',
    Us = 'TrackedReward_info_3fdceea1',
    Vs = ({ missionId: e, taskId: t, rewardNum: a, ...i }) => {
        const n = T(G.StoryMode, {
                action: H.Watched,
                parentScreen: W.MissionSelection,
                timeLimit: 1,
                item: W.TaskRewardTooltip,
                itemState: e.toString(),
                info: JSON.stringify({ task_id: t, task_reward_item: i.name, task_reward_num: a }),
            }),
            c = { ...i.tooltipArgs, ...n },
            l = !i.value && !i.title;
        return s.jsx(j, { className: o(Bs, l && $s), classNames: { info: Us }, ...i, tooltipArgs: c });
    },
    Fs = 'TaskRewards_985186b',
    Ks = 'TaskRewards_title_bbd3263c',
    Ps = 'TaskRewards_rewards_2b6754c2',
    Ws = e.memo(
        ({ rewards: t, missionId: a, taskId: i }) => {
            const { breakpoint: o } = p(),
                n = o.weight >= v.extraLarge.weight ? I.Big : I.Small;
            return s.jsxs('div', {
                className: Fs,
                children: [
                    s.jsx('div', { className: Ks, children: R.strings.sm_lobby.missionSelection.taskRewards() }),
                    s.jsx('div', {
                        className: Ps,
                        children: k(t, (s, t) => {
                            const o = M(s.name);
                            return e.createElement(Vs, {
                                ...s,
                                key: t,
                                value: ie(s.value, o),
                                valueType: o,
                                image: s.icon[n],
                                size: n,
                                missionId: a,
                                taskId: i,
                                rewardNum: t + 1,
                                tooltipArgs: w({ tooltipId: s.tooltipId }, Number(s.tooltipContentId)),
                            });
                        }),
                    }),
                ],
            });
        },
        (e, s) => e.missionId === s.missionId && e.taskId === s.taskId,
    ),
    Hs = 'TaskListItem_c1a02def',
    Gs = 'TaskListItem_frame_94b88bb',
    zs = 'TaskListItem_frameImg_d444c880',
    Js = 'TaskListItem_frameImg__hover_260842d6',
    Ys = 'TaskListItem_description_be63c553',
    qs = ({
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
        onAppearanceAnimationStart: b = E,
        onAppearanceAnimationFinished: k = E,
        onUnlockAnimationStart: f = E,
        onCompletionAnimationStart: h = E,
        onAnimationFinished: p = E,
    }) => {
        const x = e.useRef(r),
            [v, N] = e.useState(l || d),
            [S, g] = e.useState(!1),
            [j, I] = e.useState(!1),
            [M, w] = e.useState(!1),
            [C, A] = e.useState(void 0),
            { timeString: L, secondsLeft: O } = ae(r),
            { onShow: R, onHide: D } = T(G.StoryMode, {
                action: H.Watched,
                parentScreen: W.MissionSelection,
                timeLimit: z,
                item: W.Task,
                itemState: a.toString(),
                info: JSON.stringify({ task_id: i }),
            });
        (e.useEffect(() => () => clearTimeout(C), [C]),
            e.useEffect(() => {
                0 !== x.current && 0 === O && (N(!0), g(!0), m(i));
            }, [O, m, i, r]),
            e.useEffect(() => {
                N(!0);
            }, [_]));
        const B = e.useCallback(() => {
                (N(!1), p());
            }, [p]),
            $ = c !== fs.LOCKED && u.length > 0;
        return s.jsx(
            q,
            {
                className: Hs,
                ...{ ...He[Ue.TASK_SHOWING], delay: We + 150 * t },
                onStart: b,
                onRest: k,
                children: s.jsxs('div', {
                    className: Gs,
                    onMouseEnter: () => {
                        (A(
                            window.setTimeout(() => {
                                w(!0);
                            }, 150),
                        ),
                            y.highlight(),
                            I(!0),
                            R());
                    },
                    onMouseLeave: () => {
                        (clearTimeout(C), w(!1), I(!1), D());
                    },
                    children: [
                        s.jsx('div', { className: o(zs, j && Js) }),
                        s.jsx(Ds, {
                            taskState: c,
                            isCompletedFirstTime: l,
                            isUnlockedFirstTime: d,
                            isLockRunOut: S,
                            isHover: j,
                            isShouldPlayAnimation: v,
                            onAnimationFinished: B,
                            onCompletionAnimationStart: h,
                            onUnlockAnimationStart: f,
                        }),
                        $ &&
                            s.jsx(q, {
                                ...He[Ue.TASK_REWARDS],
                                isReverse: !M,
                                children: s.jsx(Ws, { rewards: u, missionId: a, taskId: i }),
                            }),
                        s.jsx(q, {
                            className: Ys,
                            ...He[Ue.TASK_DESCRIPTION],
                            isReverse: !!$ && !M,
                            isDisabled: !$,
                            children: s.jsx(js, {
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
    Xs = 'TaskList_31802e',
    Qs = a(({ isChanging: t }) => {
        const { controls: a, model: i } = Re(),
            o = e.useRef(!1),
            n = e.useRef(!1),
            c = i.selectedMission.get(),
            l = i.tasks.get(),
            r = e.useCallback(() => {
                n.current || (y.sound(X), (n.current = !0));
            }, []),
            d = e.useCallback(() => {
                n.current || (y.sound(Q), (n.current = !0));
            }, []),
            m = e.useCallback(() => {
                o.current || (y.sound(Z), (o.current = !0));
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
                  className: Xs,
                  children: k(l, (e, t) =>
                      s.jsx(
                          qs,
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
    Zs = 'MissionInfo_511576db',
    et = 'MissionInfo_base__center_d51dad60',
    st = 'MissionInfo_title_2a9e17cc',
    tt = 'MissionInfo_subTitle_31acb91',
    at = a(({ isChanged: e, durationTasks: t }) => {
        const { model: a } = Re(),
            i = a.root.selectedTab.get() === Le.EVENT,
            n = a.selectedMission.get(),
            c = n.missionId,
            l = a.tasks.get().length,
            { breakpoint: r } = p(),
            d = r.weight > v.extraLarge.weight;
        return s.jsxs('div', {
            className: o(Zs, l > 1 && et),
            children: [
                n.isCountdownVisible &&
                    s.jsx(
                        q,
                        { trigger: c, ...He[Ue.COUNTDOWN], children: s.jsx(ks, {}) },
                        i ? 'countdown' : `countdown_${c}`,
                    ),
                s.jsx(
                    q,
                    {
                        ...He[Ue.TITLE],
                        className: st,
                        children: R.strings.sm_lobby.missionSelection.missionName.$num(c),
                    },
                    i ? 'title' : `title_${c}`,
                ),
                s.jsx(
                    q,
                    {
                        ...He[Ue.SUB_TITLE],
                        children: s.jsx(C, {
                            className: tt,
                            text: R.strings.sm_lobby.missionSelection.missionDescription.$num(c),
                        }),
                    },
                    i ? 'subTitle' : `subTitle_${c}`,
                ),
                s.jsx('div', {
                    style: { height: (d ? 86 : 84) * l + 'rem' },
                    children: s.jsx(
                        ls,
                        { isTransition: e, duration: t, children: s.jsx(Qs, { isChanging: !e }) },
                        `taskList_${c}`,
                    ),
                }),
            ],
        });
    });
var it = ((e) => ((e.UNDEFINED = ''), (e.NORMAL = 'normal'), (e.HARD = 'hard'), (e.VERY_HARD = 'very_hard'), e))(
    it || {},
);
const ot = {
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
    nt = e.memo(
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
                m = T(G.StoryMode, {
                    action: H.Watched,
                    parentScreen: W.MissionSelection,
                    timeLimit: z,
                    item: W.SelectButtonTooltip,
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
                s.jsx(A, {
                    contentId: R.views.story_mode.mono.lobby.tooltips.difficulty_tooltip('resId'),
                    args: { difficulty: c, isSelected: t, missionId: a },
                    ...m,
                    children: s.jsxs('div', {
                        className: o(ot.base, t && ot.base__selected, l && ot.base__locked),
                        children: [
                            s.jsx('div', { className: o(ot.back, ot[`back__${c}`]) }),
                            !l &&
                                s.jsxs(s.Fragment, {
                                    children: [
                                        !t && s.jsx('div', { className: o(ot.backHover, ot[`backHover__${c}`]) }),
                                        s.jsx('div', { className: o(ot.backSelected, ot[`backSelected__${c}`]) }),
                                    ],
                                }),
                            l && s.jsx('div', { className: o(ot.backLocked, ot[`backLocked__${c}`]) }),
                            s.jsx('div', {
                                className: o(ot.video, ot.video__container),
                                children: L.isLow()
                                    ? s.jsx('div', { className: o(ot.video, ot.video__static, ot[`video__${c}`]) })
                                    : s.jsx(O, {
                                          className: o(ot.video, ot[`video__${c}`]),
                                          src: R.videos.story_mode.v_icon_fire(),
                                          ref: d,
                                          loop: !0,
                                      }),
                            }),
                            s.jsx('div', {
                                className: o(!l && ot.displayName, l && ot.displayNameLocked),
                                children: n,
                            }),
                            s.jsx('div', {
                                className: ot.area,
                                onClick: () => {
                                    t ||
                                        l ||
                                        (c === it.HARD ? y.sound(ee) : c === it.VERY_HARD ? y.sound(se) : y.sound(te),
                                        r(a));
                                },
                                onMouseEnter: () => {
                                    t || y.highlight();
                                },
                            }),
                        ],
                    }),
                })
            );
        },
    ),
    ct = {
        base: 'MissionButton_47bcf6fd',
        base__locked: 'MissionButton_base__locked_4bda7104',
        area: 'MissionButton_area_732c92ca',
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
    lt = e.memo(
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
                    className: o(ct.base, t && ct.base__selected, n && ct.base__complete, l && ct.base__locked),
                    children: [
                        s.jsx('div', {
                            className: ct.area,
                            onClick: () => {
                                t || (y.click(), r(a));
                            },
                            onMouseEnter: y.highlight,
                        }),
                        s.jsx('div', { className: ct.backNormal }),
                        s.jsx('div', { className: ct.backSelected }),
                        (!n || c || l) &&
                            s.jsxs(q, {
                                className: ct.missionState,
                                ...He[Ue.MISSION_STATE],
                                isDisabled: !c,
                                children: [
                                    s.jsx('div', { className: ct.iconShadow }),
                                    s.jsx('div', { className: ct.iconGlow }),
                                    s.jsx('div', { className: ct.icon }),
                                ],
                            }),
                        s.jsx('div', {
                            className: ct.video,
                            children: L.isLow()
                                ? s.jsx('div', { className: o(ct.video, ct.video__static) })
                                : s.jsx(O, {
                                      className: ct.video,
                                      src: R.videos.story_mode.v_icon_fire(),
                                      ref: d,
                                      loop: !0,
                                  }),
                        }),
                        s.jsx('div', { className: ct.hover }),
                        s.jsx('div', { className: ct.missionId, children: i }),
                    ],
                })
            );
        },
    ),
    rt = 'MissionSelector_76541093',
    dt = 'MissionSelector_line_f1696e16',
    mt = 'MissionSelector_line__left_3bb808a9',
    _t = 'MissionSelector_line__right_173c4f2b',
    ut = 'MissionSelector_line__selected_e9253750',
    bt = a(({ onClick: t, className: a }) => {
        const { model: i } = Re(),
            n = i.missions.get(),
            c = i.selectedMission.get().missionId,
            l = i.computes.getIsSelectedMissionCompletedFirstTime();
        return s.jsx('div', {
            className: o(rt, a),
            children: k(n, (a, r) => {
                const d = c === a.missionId,
                    m = D(n, r + 1),
                    _ = c === m?.missionId;
                return s.jsxs(
                    e.Fragment,
                    {
                        children: [
                            i.root.selectedTab.get() === Le.EVENT
                                ? s.jsx(nt, {
                                      onClick: t,
                                      isSelected: d,
                                      missionId: a.missionId,
                                      displayName: a.displayName,
                                      difficulty: a.difficulty,
                                      selectedMissionId: c,
                                      locked: a.locked,
                                  })
                                : s.jsx(lt, {
                                      onClick: t,
                                      isSelected: d,
                                      missionId: a.missionId,
                                      displayName: a.displayName,
                                      isCompleted: a.isCompleted,
                                      isCompletedFirstTime: d && l,
                                      locked: a.locked,
                                  }),
                            i.root.selectedTab.get() !== Le.EVENT &&
                                r !== n.length - 1 &&
                                s.jsx('div', { className: o(dt, d && mt, _ && _t, (d || _) && ut) }),
                        ],
                    },
                    a.missionId,
                );
            }),
        });
    }),
    kt = 'MissionVehicle_d1a7ad80',
    ft = 'MissionVehicle_text_c92f6291',
    ht = 'MissionVehicle_icon_7d9e858',
    pt = ({ className: e }) => {
        const t = T(G.StoryMode, {
            action: H.Watched,
            item: W.MssVehicleTooltip,
            parentScreen: W.MissionSelection,
            timeLimit: z,
        });
        return s.jsxs('div', {
            className: o(kt, e),
            children: [
                s.jsx('div', { className: ft, children: R.strings.sm_lobby.missionSelection.specialVehicle() }),
                s.jsx(A, {
                    ignoreMouseClick: !0,
                    ignoreShowDelay: !0,
                    contentId: R.views.story_mode.mono.lobby.tooltips.mission_tooltip('resId'),
                    ...t,
                    children: s.jsx('div', { className: ht }),
                }),
            ],
        });
    },
    xt = 360,
    vt = { tension: 210, friction: 240 },
    yt = { tension: 70, friction: 480 },
    Nt = 'AssetItem_7cff1111',
    St = 'AssetItem_sprite_c476eaa9',
    gt = 'AssetItem_imgLoader_6b833910',
    Tt = (e, s, t, a) => {
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
    jt = a(({ loadChecker: e, item: t }) => {
        const { model: a } = Re(),
            { chunkFileExt: i, chunksAssetsPath: o } = a.parallax.get();
        return s.jsxs('div', {
            className: Nt,
            children: [
                s.jsx('div', { className: St, style: { ...Tt(t, a.computes.atlasObj(), i, o).style } }),
                s.jsx('img', {
                    className: gt,
                    alt: t.keyName,
                    src: Tt(t, a.computes.atlasObj(), i, o).source.backgroundSource,
                    onLoad: e,
                }),
            ],
        });
    }),
    It = 'Assets_c481c379',
    Mt = a(({ dioramaLoaded: t }) => {
        const { model: a } = Re(),
            i = a.computes.parallaxStructureObj(),
            o = i ? i.length : 0,
            n = e.useRef(0),
            c = e.useCallback(() => {
                (n.current++, n.current === o && (t && t(), (n.current = 0)));
            }, [t, o]);
        return s.jsx('div', {
            className: It,
            children: i && i.map((e, t) => s.jsx(jt, { item: e, loadChecker: c }, `${i.missionId}_${e.keyName}_${t}`)),
        });
    }),
    wt = 2560,
    Et = 1440,
    Ct = wt / Et,
    At = a(({ children: t }) => {
        const { model: a } = Re(),
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
                const e = B('rem');
                let s = 1;
                (e.width >= e.height * Ct ? (s = e.width / wt) : e.height >= e.width / Ct && (s = e.height / Et), m(s));
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
    Lt = 'Parallax_ac12e19d',
    Ot = 'Parallax_asset_5a17fdd4',
    Rt = a(({ refParent: t, dioramaLoaded: a }) => {
        const { model: i } = Re(),
            { xTilt: o, xTiltRange: n, yTilt: c, yTiltRange: d, xSlide: m, ySlide: _ } = i.parallax.get(),
            [u] = ((s, t) => {
                const a = e.useCallback(
                        (e, t, a) => {
                            const i = Math.min(Math.max((e - a.x) / a.width, 0), 1),
                                o = Math.min(Math.max((t - a.y) / a.height, 0), 1),
                                n = s.yTilt + s.yTiltRange + xt - (s.yTilt - s.yTiltRange + xt),
                                c = s.xTilt + s.xTiltRange + xt - (s.xTilt - s.xTiltRange + xt),
                                l = -i * n + n / 2 + s.yTilt,
                                r = o * c - c / 2 + s.xTilt;
                            return { x: i * a.width - a.width / 2, y: o * a.height - a.height / 2, xR: r, yR: l };
                        },
                        [s.xTilt, s.xTiltRange, s.yTilt, s.yTiltRange],
                    ),
                    i = r(() => ({ x: 0, y: 0, xR: s.xTilt, yR: s.yTilt }), []);
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
                                    return void c.start({ x: 0, y: 0, xR: s.xTilt, yR: s.yTilt, config: yt });
                                c.start({ ...a(e, o, n), config: vt });
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
            })({ xTilt: o, xTiltRange: n, yTilt: c, yTiltRange: d }, t);
        return s.jsx(At, {
            children: s.jsx(l.div, {
                style: { x: u.x.to((e) => e * m), y: u.y.to((e) => e * _), rotateX: u.xR, rotateY: u.yR },
                className: Lt,
                children: s.jsx('div', { className: Ot, children: s.jsx(Mt, { dioramaLoaded: a }) }),
            }),
        });
    }),
    Dt = 'TabItem_6e36712a',
    Bt = 'TabItem_base__selected_7fd0198b',
    $t = 'TabItem_tab_8e3e07cd',
    Ut = 'TabItem_tab__hoverDecor_422f109e',
    Vt = e.memo(function ({ tabText: e, isSelected: t, onClick: a }) {
        return s.jsxs('div', {
            className: o(Dt, t && Bt),
            children: [
                s.jsx('div', {
                    className: $t,
                    onClick: () => {
                        t || (y.click(), a());
                    },
                    onMouseEnter: () => {
                        t || y.highlight();
                    },
                    children: e,
                }),
                s.jsx('div', { className: o($t, Ut), children: e }),
            ],
        });
    }),
    Ft = 'Tabs_16a37c54',
    Kt = 'Tabs_line_70775af',
    Pt = 'Tabs_line__second_eef62bb7',
    Wt = e.memo(({ selectedTab: e, onChange: t }) =>
        s.jsxs('div', {
            className: Ft,
            children: [
                s.jsx('div', { className: Kt }),
                s.jsx('div', { className: o(Kt, Pt) }),
                s.jsx(Vt, {
                    tabText: R.strings.sm_lobby.missionSelection.tab.newbies(),
                    onClick: () => t(Le.NEWBIES),
                    isSelected: e === Le.NEWBIES,
                }),
                s.jsx(Vt, {
                    tabText: R.strings.sm_lobby.missionSelection.tab.event(),
                    onClick: () => t(Le.EVENT),
                    isSelected: e === Le.EVENT,
                }),
            ],
        }),
    ),
    Ht = 'MissionSelectionViewApp_e1e00eaf',
    Gt = 'MissionSelectionViewApp_blackScreen_b9764bd8',
    zt = 'MissionSelectionViewApp_blackScreen__overlay_5540cd02',
    Jt = 'MissionSelectionViewApp_shadowTop_65560dd6',
    Yt = 'MissionSelectionViewApp_shadowMissions_1872614',
    qt = 'MissionSelectionViewApp_shadowLeft_536e08dd',
    Xt = 'MissionSelectionViewApp_shadowBottom_3cc6c587',
    Qt = 'MissionSelectionViewApp_about_a212c4ec',
    Zt = 'MissionSelectionViewApp_tabs_81d77c84',
    ea = 'MissionSelectionViewApp_missionSelector_9673efb9',
    sa = 'MissionSelectionViewApp_missionSelector__withoutTabs_6bace1be',
    ta = 'MissionSelectionViewApp_specialVehicle_8744b153',
    aa = 'MissionSelectionViewApp_leftSparkles_89820688',
    ia = 'MissionSelectionViewApp_rightSparkles_e9be7b23',
    oa = 'MissionSelectionViewApp_logo_a9918fd',
    na = 'MissionSelectionViewApp_vignette_e6471868',
    ca = 'MissionSelectionViewApp_menuItems_c66c1866',
    la = 'MissionSelectionViewApp_triggerHint_58ad728',
    ra = { rootId: d.resolve('aliases').read((e) => e.hangar.shared.MainMenu('resId')) },
    da = a(() => {
        const { controls: t, model: a } = Re(),
            [i, n] = e.useState({ id: void 0, isTab: !1 }),
            c = a.selectedMission.get(),
            d = e.useRef(null),
            m = e.useRef({ missionId: void 0, locked: !1 }),
            [_, u] = e.useState(!1),
            b = a.root.isTabsVisible.get(),
            k = a.root.selectedTab.get(),
            f = k === Le.EVENT,
            h = i.isTab ? k : c.missionId,
            [p, x] = e.useState(!1),
            [v, y] = r(() => ({}));
        (e.useEffect(() => {
            i.id !== c.missionId && n({ id: c.missionId, isTab: !1 });
        }, [c.missionId]),
            $(() => {
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
            U(V.ESCAPE, t.exit),
            s.jsxs('div', {
                className: Ht,
                ref: d,
                children: [
                    s.jsx('div', { className: Gt }),
                    !c.locked && a.root.isParallaxEnabled.get()
                        ? s.jsx(Rt, { refParent: d, dioramaLoaded: g })
                        : s.jsx(J, {
                              backgroundPath: R.images.story_mode.gui.maps.icons.common.backgrounds.$num(c.missionId),
                              onLoaded: g,
                              grayscaleApplied: c.locked,
                              showVignette: !c.locked,
                              showBlur: c.locked,
                          }),
                    c.locked
                        ? s.jsx('div', { className: na })
                        : s.jsxs(e.Fragment, {
                              children: [
                                  s.jsx('div', { className: aa }),
                                  s.jsx('div', { className: ia }),
                                  s.jsx('div', { className: qt }),
                              ],
                          }),
                    s.jsx('div', { className: Jt }),
                    s.jsx('div', { className: Xt }),
                    b && s.jsx('div', { className: Yt }),
                    f && s.jsx('div', { className: oa }),
                    s.jsx(l.div, { className: o(Gt, zt), style: v }),
                    !c.locked && s.jsx(at, { isChanged: h === i.id, durationTasks: 250 }),
                    (c.locked || _) &&
                        s.jsx(as, {
                            shouldPlayUnlockAnimation: _,
                            missionName: R.strings.sm_lobby.missionSelection.lockedMissionName.$num(c.missionId),
                            battlesToUnlock: c.battlesToUnlock,
                            onAnimationFinished: N,
                            withTabs: b,
                        }),
                    !f && s.jsx(l.div, { className: o(Gt, zt), style: v }),
                    b &&
                        s.jsx('div', {
                            className: Zt,
                            children: s.jsx(Wt, { selectedTab: k, onChange: (e) => S(e, !0) }),
                        }),
                    s.jsx('div', { className: ca, children: s.jsx(Ae, { options: ra }) }),
                    s.jsx('div', { className: Qt, children: s.jsx($e, { onClick: t.openAbout }) }),
                    s.jsx(bt, { onClick: (e) => S(e, !1), className: o(ea, !b && sa) }),
                    s.jsx(pt, { className: ta }),
                    i.isTab && s.jsx(l.div, { className: Gt, style: v }),
                    f && !i.isTab && s.jsx('div', { className: la, id: 'mission-selection-trigger-hint-id' }),
                ],
            })
        );
    });
P(new F().add(K).add(Oe).render(s.jsx(da, {})), { fullScreen: !0 });
