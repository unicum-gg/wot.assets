import { k as e, j as t, l as s, m as a, r as i, n as o, p as r } from '../../../chunks/vendor.js';
import {
    i as l,
    c as n,
    f as c,
    u as d,
    b as m,
    E as u,
    A as y,
    a as p,
    T as g,
    F as _,
    m as f,
    I as b,
    D as h,
    g as w,
    p as x,
    d as v,
    R as N,
    e as j,
    k as B,
    C as I,
    B as T,
    J as A,
    U as S,
    r as C,
} from '../../../chunks/lib.js';
import { L as E, a as O, F as k, B as M } from '../../../chunks/uilogging_constants.js';
import { E as P, S as V, B as W, a as $, b as D, c as L } from '../../../chunks/sound_constants.js';
import { i as F, g as G } from '../../../chunks/utils.js';
import { S as H } from '../../../chunks/battle_result_stat_tooltip_model.js';
import { g as U, a as X } from '../../../chunks/formatters.js';
const [z, q] = l()(
        ({ observableModel: t }) => {
            const s = {
                    root: t.primitives([
                        'missionId',
                        'isVictory',
                        'title',
                        'subTitle',
                        'infoName',
                        'infoDescription',
                        'vehicleName',
                        'playerStatus',
                        'hasAutoCompleteTasks',
                        'isOnboarding',
                    ]),
                    progressLevels: t.array('progressLevels'),
                    missionProgress: t.object('missionProgress'),
                    mainRewards: t.array('mainRewards', []),
                    otherRewards: t.array('otherRewards', []),
                },
                a = e(() => s.mainRewards.get(), { equals: n }),
                i = e(() => s.otherRewards.get(), { equals: n }),
                o = e(() => a().length > 0 || i().length > 0),
                r = e(() => c(a(), (e) => 'freeXP' === e.name)),
                l = e(() => c(a(), (e) => 'credits' === e.name)),
                d = e(() => i().length > 0);
            return {
                ...s,
                computes: {
                    getMainRewards: a,
                    getHasRewards: o,
                    getXPReward: r,
                    getCreditsReward: l,
                    getOtherRewards: i,
                    getHasOtherRewards: d,
                },
            };
        },
        ({ externalModel: e }) => ({
            exit: e.createCallbackNoArgs('onQuit'),
            continue: e.createCallbackNoArgs('onContinue'),
        }),
    ),
    J = { from: { opacity: 0 }, to: { opacity: 0 }, delay: 0, duration: 0 };
var Q = ((e) => (
    (e.SHUTTER = 'shutter'),
    (e.FLASH = 'flash'),
    (e.TITLE_GLOW = 'titleGlow'),
    (e.TITLE = 'title'),
    (e.SUB_TITLE = 'subTitle'),
    (e.PROGRESS_ITEM = 'progressItem'),
    (e.REWARD_RIBBON = 'rewardRibbon'),
    (e.REWARD_MAIN = 'rewardMain'),
    (e.REWARD_TXT = 'rewardTxt'),
    (e.REWARD_ITEM = 'rewardItem'),
    (e.REWARD_COUNT_FINISH = 'rewardCountFinish'),
    (e.IMG = 'img'),
    (e.FOOTER = 'footer'),
    (e.BUTTON = 'button'),
    e
))(Q || {});
const K = 500,
    Y = 500,
    Z = 600,
    ee = 100,
    te = {
        shutter: { delay: K, duration: Y, from: { opacity: 1 }, to: { opacity: 0 }, easingType: P.EaseOut },
        flash: {
            from: { opacity: 0, transform: 'scale(35, 35)' },
            to: [
                { opacity: 1, transform: 'scale(2, 2)', config: { duration: Y } },
                { opacity: 0, transform: 'scale(4, 1)', config: { duration: 4e3 } },
            ],
            transformOrigin: '50% 75%',
            delay: 650,
            easingType: P.EaseInOut,
        },
        titleGlow: { from: { opacity: 0 }, to: { opacity: 1 }, delay: 1e3, duration: 1e3, easingType: P.EaseOut },
        title: {
            from: { y: 25, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1e3,
            config: { tension: 180, friction: 12 },
        },
        subTitle: {
            from: { y: -25, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1e3,
            config: { tension: 180, friction: 12 },
        },
        progressItem: {
            from: { y: -10, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1100,
            config: { tension: 180, friction: 12 },
        },
        rewardRibbon: { ...J },
        rewardMain: { ...J },
        rewardTxt: { ...J },
        rewardItem: { ...J },
        rewardCountFinish: { ...J },
        footer: {
            from: { y: -5, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1900,
            duration: Y,
            easingType: P.EaseOut,
        },
        img: {
            from: { x: 20, opacity: 0 },
            to: { x: 0, opacity: 1 },
            delay: 2050,
            duration: 1e3,
            easingType: P.EaseOutBack,
        },
        button: {
            from: { y: -5, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 2900,
            duration: Y,
            easingType: P.EaseInOut,
        },
    },
    se = {
        shutter: { from: { opacity: 1 }, to: { opacity: 0 }, delay: K, duration: Z, easingType: P.EaseOut },
        flash: { ...J },
        titleGlow: { from: { opacity: 0 }, to: { opacity: 1 }, delay: 1100, duration: 1800, easingType: P.Linear },
        title: {
            from: { opacity: 0, transform: 'scale(1.3, 1.3)' },
            to: { opacity: 1, transform: 'scale(1, 1)' },
            transformOrigin: '50% 90%',
            delay: 700,
            duration: 1800,
            easingType: P.EaseInOut,
        },
        subTitle: {
            from: { y: -10, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1100,
            duration: 1200,
            easingType: P.EaseInOut,
        },
        progressItem: {
            from: { y: -10, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1500,
            duration: Z,
            easingType: P.EaseOutBack,
        },
        rewardRibbon: { ...J },
        rewardMain: { ...J },
        rewardTxt: { ...J },
        rewardItem: { ...J },
        rewardCountFinish: { ...J },
        footer: {
            from: { y: -10, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1700,
            duration: 1200,
            easingType: P.EaseInOut,
        },
        img: {
            from: { x: 20, opacity: 0 },
            to: { x: 0, opacity: 1 },
            delay: 1900,
            duration: 1200,
            easingType: P.EaseInOut,
        },
        button: {
            from: { y: -5, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 2900,
            duration: 1200,
            easingType: P.EaseInOut,
        },
    },
    ae = {
        shutter: { delay: K, duration: Y, from: { opacity: 1 }, to: { opacity: 0 }, easingType: P.EaseOut },
        flash: {
            from: { opacity: 0, transform: 'scale(35, 35)' },
            to: [
                { opacity: 1, transform: 'scale(2, 2)', config: { duration: Y } },
                { opacity: 0, transform: 'scale(4, 1)', config: { duration: 4e3 } },
            ],
            transformOrigin: '50% 75%',
            delay: 650,
            easingType: P.EaseInOut,
        },
        titleGlow: { from: { opacity: 0 }, to: { opacity: 1 }, delay: 1e3, duration: 1e3, easingType: P.EaseOut },
        title: {
            from: { y: 25, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1e3,
            config: { tension: 180, friction: 12 },
        },
        subTitle: {
            from: { y: -25, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1e3,
            config: { tension: 180, friction: 12 },
        },
        progressItem: {
            from: { y: -10, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1100,
            config: { tension: 180, friction: 12 },
        },
        rewardRibbon: {
            from: { opacity: 0, transform: 'scale(0.9, 1)' },
            to: { opacity: 1, transform: 'scale(1, 1)' },
            delay: 1600,
            config: { tension: 180, friction: 12 },
        },
        rewardMain: {
            from: { y: -10, opacity: 0, transform: 'scale(1, 1)' },
            to: { y: 0, opacity: 1, transform: 'scale(1.1, 1.1)' },
            delay: 1600,
            config: { tension: 180, friction: 12 },
        },
        rewardTxt: {
            from: { y: -5, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 1850,
            config: { tension: 180, friction: 12 },
        },
        rewardItem: {
            from: { y: -5, filter: 'brightness(1.5)', opacity: 0 },
            to: { y: 0, filter: 'brightness(1)', opacity: 1 },
            delay: 2e3,
            config: { tension: 180, friction: 12 },
        },
        rewardCountFinish: {
            from: { transform: 'scale(1, 1)' },
            to: { transform: 'scale(0.9, 0.9)' },
            delay: 3650,
            config: { tension: 180, friction: 12 },
        },
        footer: {
            from: { y: -5, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 2500,
            duration: Y,
            easingType: P.EaseOut,
        },
        img: {
            from: { x: 20, opacity: 0 },
            to: { x: 0, opacity: 1 },
            delay: 2650,
            duration: 1e3,
            easingType: P.EaseOutBack,
        },
        button: {
            from: { y: -5, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 4e3,
            duration: Y,
            easingType: P.EaseInOut,
        },
    };
var ie = ((e) => ((e.PERSONAL_SCORE = 'personalScore'), (e.MAIN_SCORE = 'mainScore'), e))(ie || {});
const oe = { personalScore: { delay: 0, duration: 700 }, mainScore: { delay: 1600, duration: 1900 } },
    re = { victory: { ...te }, defeat: { ...se }, victoryRewards: { ...ae } },
    le = (e, t = !1, s = !1) => (t ? (s ? re.victoryRewards[e] : re.victory[e]) : re.defeat[e]),
    ne = 'BattleResultDifficultyInfo_a146fa7e',
    ce = 'BattleResultDifficultyInfo_icon_6393c396',
    de = 'BattleResultDifficultyInfo_text_ad454610',
    me = R.strings.sm_lobby.battleResult.difficultyInfo,
    ue = () => {
        const { breakpoint: e } = d(),
            s = e.weight < m.small.weight;
        return t.jsx('div', {
            className: ne,
            children: t.jsx(u, {
                classMix: de,
                justifyContent: y.Center,
                text: s ? me.extraSmall() : me.smallAndUp(),
                binding: { icon: t.jsx('div', { className: ce }) },
            }),
        });
    },
    ye = 'BattleResultMissionProgress_baecd22d',
    pe = 'BattleResultMissionProgress_base__withRewards_c4383b00',
    ge = 'BattleResultMissionProgress_icon_5b3e6120',
    _e = 'BattleResultMissionProgress_stat_3d84d803',
    Re = 'BattleResultMissionProgress_value_95229e27',
    fe = 'BattleResultMissionProgress_slash_2ca505a6',
    be = 'BattleResultMissionProgress_total_cc1b12a2',
    he = 'BattleResultMissionProgress_name_67da33ea',
    we = R.images.story_mode.gui.maps.icons.battleResult.icons,
    xe = s(() => {
        const { model: e } = q(),
            { breakpoint: s } = d(),
            i = e.missionProgress.get(),
            o = e.computes.getHasRewards(),
            r = e.root.missionId.get(),
            l = s.weight >= m.medium.weight ? we.large.$dyn(i.icon) : we.$dyn(i.icon),
            n = p(k.StoryMode, {
                action: O.Watched,
                item: E.TaskCompletedTooltip,
                itemState: r.toString(),
                parentScreen: E.PostBattleWindow,
            });
        return t.jsx(g, {
            contentId: R.views.story_mode.mono.lobby.tooltips.battle_result_stat_tooltip('resId'),
            args: { stat: H.MISSIONS },
            ...n,
            children: t.jsxs('div', {
                className: a(ye, o && pe),
                children: [
                    t.jsx('div', { className: ge, style: { backgroundImage: `url(${l})` } }),
                    t.jsxs('div', {
                        className: _e,
                        children: [
                            t.jsx('div', { className: Re, children: i.value }),
                            t.jsx('div', { className: fe, children: R.strings.sm_lobby.battleResult.slash() }),
                            t.jsx('div', { className: be, children: i.total }),
                        ],
                    }),
                    t.jsx(_, { className: he, text: i.name }),
                ],
            }),
        });
    }),
    ve = 'NumberAnimation_250a7925',
    Ne = 'NumberAnimation_base__finalBounce_87358a3',
    je = (e) => e,
    Be = (e) => window.systemLocale.getNumberFormat(Math.floor(e), 0),
    Ie = i.memo(function ({
        prefix: e = '',
        currentNumber: s,
        previousNumber: l = 0,
        delay: n,
        duration: c,
        classNames: d,
        isFinalBounceAnim: m = !1,
        isCanceled: u,
        onStart: y,
        onRest: p,
        playSoundOnStart: g,
        playSoundOnFinish: _,
    }) {
        const [R, f] = i.useState(!1),
            [b, h] = i.useState(!1),
            w = o({
                from: { val: l },
                to: { val: s },
                delay: n,
                config: { duration: c, easing: je },
                cancel: u,
                reverse: u,
                onStart: () => {
                    ((null == d ? void 0 : d.anim) && f(!0), g && g(), y && y());
                },
                onRest: () => {
                    ((null == d ? void 0 : d.anim) && f(!1), m && h(!0), _ && _(), p && p());
                },
            });
        return t.jsxs('div', {
            className: a(ve, null == d ? void 0 : d.base, R && (null == d ? void 0 : d.anim), b && Ne),
            children: [e, u ? Be(s) : t.jsx(r.div, { children: w.val.to((e) => Be(e)) })],
        });
    }),
    Te = 'BattleResultProgress_ec5e085e',
    Ae = 'BattleResultProgress_base__withRewards_81e18a4d',
    Se = 'BattleResultProgress_icon_52dffe27',
    Ce = 'BattleResultProgress_value_adf24ead',
    Ee = 'BattleResultProgress_name_4bc4abe3',
    Oe = R.images.story_mode.gui.maps.icons.battleResult.icons,
    ke = i.memo(
        ({
            icon: e,
            index: s,
            isAnimCanceled: i,
            value: o,
            name: r,
            stat: l,
            isWithRewards: n,
            isVictory: c,
            hasRewards: _,
        }) => {
            const { model: f } = q(),
                { breakpoint: b } = d(),
                h = b.weight >= m.medium.weight ? Oe.large.$dyn(e) : Oe.$dyn(e),
                w = le(Q.PROGRESS_ITEM, c, _).delay,
                x = f.root.missionId.get(),
                v = p(k.StoryMode, {
                    action: O.Watched,
                    item: E.BattleResultStatTooltip,
                    itemState: x.toString(),
                    parentScreen: E.PostBattleWindow,
                });
            return t.jsx(g, {
                contentId: R.views.story_mode.mono.lobby.tooltips.battle_result_stat_tooltip('resId'),
                args: { stat: l },
                ...v,
                children: t.jsx('div', {
                    className: a(Te, n && Ae),
                    children: t.jsxs(V, {
                        isCanceled: i,
                        className: a(Te, n && Ae),
                        ...{ ...le(Q.PROGRESS_ITEM, c, _), delay: w + ee * s },
                        children: [
                            t.jsx('div', { className: Se, style: { backgroundImage: `url(${h})` } }),
                            t.jsx(Ie, {
                                classNames: { base: Ce },
                                currentNumber: o,
                                ...{ ...oe[ie.PERSONAL_SCORE], delay: w + 150 + ee * s },
                                isCanceled: i,
                            }),
                            t.jsx(u, { classMix: Ee, text: r, justifyContent: y.Center }),
                        ],
                    }),
                }),
            });
        },
    ),
    Me = s(({ isAnimCanceled: e }) => {
        const { model: s } = q(),
            i = s.computes.getHasRewards(),
            o = s.root.isVictory.get();
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx(V, {
                    isCanceled: e,
                    className: a(Te, i && Ae),
                    ...le(Q.PROGRESS_ITEM, o, i),
                    children: t.jsx(xe, {}),
                }),
                f(s.progressLevels.get(), (s, a) =>
                    t.jsx(
                        ke,
                        { index: a + 1, isAnimCanceled: e, isWithRewards: i, isVictory: o, hasRewards: i, ...s },
                        `${s.icon}_${a}`,
                    ),
                ),
            ],
        });
    }),
    Pe = {
        root: 'MainReward_root_c882e9f4',
        base: 'MainReward_3672511f',
        value: 'MainReward_value_c5eed265',
        value__freeXP: 'MainReward_value__freeXP_87ee9b0b',
        value__credits: 'MainReward_value__credits_c9a9c7cb',
        icon: 'MainReward_icon_9c43dcbe',
    },
    Ve = { [b.Big]: 80, [b.Small]: 48 },
    We = F ? 22 : 18,
    $e = F ? 42 : 36,
    De = s(({ icon: e, name: s, index: i, isAnimCanceled: o, iconSize: r, value: l, tooltipArgs: n }) => {
        const { model: c } = q(),
            u = c.root.isVictory.get(),
            y = c.computes.getHasRewards(),
            p = le(Q.REWARD_MAIN, u, y).delay,
            { breakpoint: g } = d(),
            _ = g.weight >= m.medium.weight ? $e : We;
        return t.jsx(V, {
            isCanceled: o,
            className: Pe.base,
            ...le(Q.REWARD_COUNT_FINISH, u, y),
            children: t.jsx(h, {
                tooltipArgs: n,
                className: Pe.tooltipWrapper,
                children: t.jsxs('div', {
                    className: Pe.base,
                    children: [
                        t.jsx('div', {
                            className: Pe.value,
                            style: { width: `${String(l).length * _ + _}rem` },
                            children: t.jsx(Ie, {
                                classNames: { base: a(Pe.value, Pe[`value__${s}`]) },
                                currentNumber: l,
                                ...{ ...oe[ie.MAIN_SCORE], delay: p + 150 + ee * i },
                                isCanceled: o,
                            }),
                        }),
                        t.jsx('div', {
                            className: Pe.icon,
                            style: { backgroundImage: `url(${e})`, width: `${Ve[r]}rem`, height: `${Ve[r]}rem` },
                        }),
                    ],
                }),
            }),
        });
    }),
    Le = 'BattleResultRewards_3f70ae08',
    Fe = 'BattleResultRewards_rewards_d093c89b',
    Ge = 'BattleResultRewards_main_8b0daf4a',
    He = 'BattleResultRewards_other_b7adee94',
    Ue = 'BattleResultRewards_otherText_60f4210e',
    Xe = 'BattleResultRewards_otherRewards_36876b0d',
    ze = 'BattleResultRewards_ribbon_f399ddf6',
    qe = {
        [b.Small]: R.images.gui.maps.icons.library.currency.freeXP_48x48(),
        [b.Big]: R.images.gui.maps.icons.library.currency.freeXP_80x80(),
    },
    Je = {
        [b.Small]: R.images.gui.maps.icons.library.currency.credits_48x48(),
        [b.Big]: R.images.gui.maps.icons.library.currency.credits_80x80(),
    },
    Qe = s(({ isAnimCanceled: e }) => {
        const { model: s } = q(),
            a = s.root.isVictory.get(),
            o = s.computes.getHasRewards(),
            { breakpoint: r } = d(),
            l = r.weight >= m.medium.weight ? b.Big : b.Small,
            n = s.computes.getXPReward(),
            c = s.computes.getCreditsReward(),
            u = le(Q.REWARD_MAIN, a, o).delay,
            y = le(Q.REWARD_ITEM, a, o).delay,
            g = s.root.missionId.get(),
            _ = p(k.StoryMode, {
                action: O.Watched,
                item: E.RewardTooltip,
                itemState: g.toString(),
                parentScreen: E.PostBattleWindow,
            }),
            h = {
                ...w({ tooltipId: null == n ? void 0 : n.tooltipId }, Number(null == n ? void 0 : n.tooltipContentId)),
                ..._,
            },
            j = {
                ...w({ tooltipId: null == c ? void 0 : c.tooltipId }, Number(null == c ? void 0 : c.tooltipContentId)),
                ..._,
            },
            B = i.useCallback(() => {
                x.sound(W);
            }, []);
        return t.jsxs('div', {
            className: Le,
            children: [
                t.jsx(V, { isCanceled: e, ...le(Q.REWARD_RIBBON, a, o), children: t.jsx('div', { className: ze }) }),
                t.jsxs('div', {
                    className: Fe,
                    children: [
                        t.jsxs('div', {
                            className: Ge,
                            children: [
                                n &&
                                    t.jsx(V, {
                                        isCanceled: e,
                                        ...{ ...le(Q.REWARD_MAIN, a, o), delay: u },
                                        children: t.jsx(De, {
                                            icon: qe[l],
                                            name: 'freeXP',
                                            index: 0,
                                            iconSize: l,
                                            value: parseInt(U(n.value)),
                                            isAnimCanceled: e,
                                            tooltipArgs: h,
                                        }),
                                    }),
                                c &&
                                    t.jsx(V, {
                                        isCanceled: e,
                                        ...{ ...le(Q.REWARD_MAIN, a, o), delay: u + ee },
                                        children: t.jsx(De, {
                                            icon: Je[l],
                                            name: 'credits',
                                            index: 1,
                                            iconSize: l,
                                            value: parseInt(U(c.value)),
                                            isAnimCanceled: e,
                                            tooltipArgs: j,
                                        }),
                                    }),
                            ],
                        }),
                        s.computes.getHasOtherRewards() &&
                            t.jsxs(t.Fragment, {
                                children: [
                                    t.jsx(V, {
                                        isCanceled: e,
                                        ...le(Q.REWARD_TXT, a, o),
                                        children: t.jsx('div', {
                                            className: Ue,
                                            children: R.strings.sm_lobby.battleResult.rewards.other(),
                                        }),
                                    }),
                                    t.jsx('div', {
                                        className: He,
                                        children: f(s.computes.getOtherRewards(), (s, i) => {
                                            const r = v(s.name),
                                                n = {
                                                    ...w({ tooltipId: s.tooltipId }, Number(s.tooltipContentId)),
                                                    ..._,
                                                };
                                            return t.jsx(
                                                V,
                                                {
                                                    className: Xe,
                                                    ...{ ...le(Q.REWARD_ITEM, a, o), delay: y + ee * i },
                                                    isCanceled: e,
                                                    onStart: B,
                                                    children: t.jsx(N, {
                                                        ...s,
                                                        value: X(s.value, r),
                                                        image: s.icon[l],
                                                        valueType: r,
                                                        size: l,
                                                        tooltipArgs: n,
                                                    }),
                                                },
                                                `${s.name}${i}`,
                                            );
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }),
    Ke = 'BattleResultVehicle_b99ec26b',
    Ye = 'BattleResultVehicle_back_858b5f46',
    Ze = 'BattleResultVehicle_base__victory_dc524451',
    et = 'BattleResultVehicle_fore_b4cfcf9c',
    tt = 'BattleResultVehicle_vehicle_d121788b',
    st = R.images.story_mode.gui.maps.icons.battleResult.vehicle,
    at = R.images.story_mode.gui.maps.icons.battleResult.vehicle.large,
    it = 'vehicle',
    ot = (e, t) => {
        const s = e.$dyn(`${it}_${t}`);
        return s || e.$dyn(it);
    },
    rt = s(() => {
        const { breakpoint: e } = d(),
            { model: s } = q(),
            i = s.root.missionId.get();
        return t.jsxs('div', {
            className: a(Ke, s.root.isVictory.get() && Ze),
            children: [
                t.jsx('div', { className: Ye }),
                t.jsx('div', {
                    className: tt,
                    style: { backgroundImage: `url(${e.weight < m.large.weight ? ot(st, i) : ot(at, i)})` },
                }),
                t.jsx('div', { className: et }),
            ],
        });
    }),
    lt = {
        base: 'BattleResultViewApp_3d15c64a',
        sparks: 'BattleResultViewApp_sparks_2e6ba604',
        shatter: 'BattleResultViewApp_shatter_1f183d86',
        back: 'BattleResultViewApp_back_9ae7b818',
        base__victory: 'BattleResultViewApp_base__victory_bb1c3ebb',
        shadowCenter: 'BattleResultViewApp_shadowCenter_a342e1b2',
        titleGlow: 'BattleResultViewApp_titleGlow_c8f61e8e',
        flash: 'BattleResultViewApp_flash_d4054592',
        container: 'BattleResultViewApp_container_8c0feb4a',
        title: 'BattleResultViewApp_title_45de15d5',
        subTitle: 'BattleResultViewApp_subTitle_8ddbd136',
        close: 'BattleResultViewApp_close_fe13d451',
        buttonWrapper: 'BattleResultViewApp_buttonWrapper_fc9b9776',
        button: 'BattleResultViewApp_button_24c54273',
        footer: 'BattleResultViewApp_footer_539d79b4',
        infoName: 'BattleResultViewApp_infoName_68854667',
        infoDescription: 'BattleResultViewApp_infoDescription_962beb56',
        vehicleName: 'BattleResultViewApp_vehicleName_f632e39',
        playerStatus: 'BattleResultViewApp_playerStatus_811fc197',
        centerBlock: 'BattleResultViewApp_centerBlock_f7280682',
        progress: 'BattleResultViewApp_progress_1ca131d1',
    },
    nt = R.images.story_mode.gui.maps.icons.common,
    ct = s(() => {
        const { controls: e, model: s } = q(),
            { breakpoint: o } = d(),
            [r, l] = i.useState(!1),
            n = s.root.isVictory.get(),
            c = s.root.hasAutoCompleteTasks.get(),
            m = s.computes.getHasRewards(),
            u = s.root.isOnboarding.get(),
            y = s.missionProgress.get().value > 0;
        j(B.ESCAPE, e.exit);
        const p = i.useCallback(() => {
                n ? x.sound($) : x.sound(D);
            }, [n]),
            g = i.useCallback(() => {
                n || x.sound(L);
            }, [n]);
        return t.jsxs('div', {
            className: a(lt.base, n && lt.base__victory),
            onClick: () => l(!0),
            children: [
                t.jsx(M, {
                    backgroundPath: u
                        ? nt.backgrounds.$num(s.root.missionId.get())
                        : nt.backgrounds_result.$dyn(`${n ? 'win' : 'loss'}_${s.root.missionId.get()}`),
                    showBlur: u,
                    showVignette: u,
                }),
                u &&
                    t.jsxs(t.Fragment, {
                        children: [
                            t.jsx('div', { className: lt.back }),
                            t.jsx('div', { className: lt.sparks }),
                            t.jsx('div', { className: lt.shadowCenter }),
                        ],
                    }),
                (u || !n) && t.jsx(V, { isCanceled: r, className: lt.titleGlow, ...le(Q.TITLE_GLOW, n, m) }),
                t.jsx(V, {
                    isCanceled: r,
                    className: lt.container,
                    ...le(Q.TITLE, n, m),
                    onStart: p,
                    children: t.jsx('div', { className: lt.title, children: s.root.title.get() }),
                }),
                t.jsx(V, {
                    isCanceled: r,
                    className: lt.container,
                    ...le(Q.SUB_TITLE, n, m),
                    children: t.jsx('div', { className: lt.subTitle, children: s.root.subTitle.get() }),
                }),
                n && t.jsx(V, { isCanceled: r, className: lt.flash, ...le(Q.FLASH, n, m) }),
                t.jsxs('div', {
                    className: lt.centerBlock,
                    children: [
                        t.jsx('div', {
                            className: a(lt.progress, m && lt.progress__withRewards),
                            children: t.jsx(Me, { isAnimCanceled: r }),
                        }),
                        m && t.jsx(Qe, { isAnimCanceled: r }),
                    ],
                }),
                t.jsx(V, {
                    isCanceled: r,
                    className: lt.footer,
                    ...le(Q.FOOTER, n, m),
                    children: t.jsxs('div', {
                        className: lt.footer,
                        children: [
                            t.jsx('div', { className: lt.infoName, children: s.root.infoName.get() }),
                            t.jsx('div', { className: lt.infoDescription, children: s.root.infoDescription.get() }),
                            t.jsx(V, {
                                isCanceled: r,
                                className: lt.footer,
                                ...le(Q.IMG, n, m),
                                onStart: g,
                                children: t.jsx(rt, {}),
                            }),
                            t.jsx(_, { className: lt.vehicleName, text: s.root.vehicleName.get() }),
                            t.jsx(_, {
                                className: lt.playerStatus,
                                text: s.root.playerStatus.get(),
                                upgradeLegacy: !0,
                            }),
                            c && y && t.jsx(ue, {}),
                        ],
                    }),
                }),
                t.jsx('div', { className: lt.close, children: t.jsx(I, { onClose: e.exit }) }),
                t.jsx(V, {
                    isCanceled: r,
                    className: lt.buttonWrapper,
                    ...le(Q.BUTTON, n, m),
                    children: t.jsx(T, {
                        theme: T.themes.primary,
                        size: G(o),
                        className: lt.button,
                        onClick: e.continue,
                        children: R.strings.sm_lobby.battleResult.continueButton(),
                    }),
                }),
                t.jsx(V, { isCanceled: r, className: lt.shatter, ...le(Q.SHUTTER, n, m) }),
            ],
        });
    });
C(new A().add(S).add(z).render(t.jsx(ct, {})));
