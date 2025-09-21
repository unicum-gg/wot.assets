import {
    n as computedFn,
    s as observer,
    j as jsxRuntimeExports,
    m as cx,
    r as reactExports,
    t as observable,
    v as action,
} from '../../../chunks/vendor.js';
import {
    i as initializeModelWithContext,
    E as ExtendedText,
    A as Alignment,
    T as Tooltip,
    n as normalizeResource,
    aa as RewardType,
    ab as currencyValueTypes,
    p as play,
    a5 as Reward,
    a6 as ImageSize,
    m as map,
    c as constFalse,
    ac as identity,
    S as SimpleTooltip,
    C as CButton,
    B as ButtonType,
    ad as PlayerNickname,
    D as getNumberFormat,
    ae as MediaWrapper,
    u as useKeydownListener,
    k as keyCodes,
    af as getSize,
    ag as onRescale,
    ah as onResize,
    Y as TextButton,
    P as runView,
} from '../../../chunks/lib.js';
import { E as EasingType, S as SpringWrapper } from '../../../chunks/spring_wrapper.js';
import { T as Text } from '../../../chunks/text.js';
import { T as TextType } from '../../../chunks/text.module.js';
import {
    V as VehicleType,
    a as VehicleTypeSize,
    b as VehicleTypeColor,
    c as checkForTag,
    P as PREMIUM_IGR_TAG,
    H as HEAVY_TANK,
    M as MEDIUM_TANK,
    L as LIGHT_TANK,
    S as SPG,
    A as AT_SPG,
} from '../../../chunks/utils.js';
import { P as PBS_START_COUNTING, a as PBS_END_COUNTING, b as PBS_REWARD_ICON } from '../../../chunks/sound.js';
import { N as NumberAnimation } from '../../../chunks/number_anim.js';
import { T as TextSimple } from '../../../chunks/text_simple.js';
import {
    L as LS_KEYS,
    g as getLSValue,
    a as getLSRewardIcon,
    d as getLSRewardValueType,
    b as getLSRewardTooltipConfig,
} from '../../../chunks/utils2.js';
import '../../../chunks/string-utils.js';
const [ModelProvider$1, useModel$1] = initializeModelWithContext()(
    ({ observableModel: e }) => {
        const t = {
                root: e.object(),
                battleInfo: e.object('battleInfo'),
                playerInfo: e.object('playerInfo'),
                playerUser: e.object('playerInfo.user'),
                playerVehicle: e.object('playerInfo.vehicle'),
                rewards: e.array('rewards'),
            },
            s = computedFn(() => t.rewards.get().length),
            a = computedFn(() => t.root.get().currentPhase - 1);
        return { ...t, computes: { getRewardsLength: s, completedPhase: a } };
    },
    ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
);
var AnimEnum = ((e) => (
    (e.BG = 'bg'),
    (e.HEADER_ICON = 'headerIcon'),
    (e.HEADER_TITLE = 'headerTitle'),
    (e.HEADER_GLOW = 'headerGlow'),
    (e.HEADER_SUBTITLE = 'headerSubtitle'),
    (e.RIBBON = 'ribbon'),
    (e.REWARD = 'reward'),
    (e.TEAM_RESULTS = 'teamResults'),
    (e.BATTLE_INFO = 'battleInfo'),
    (e.PLAYER_INFO = 'playerInfo'),
    (e.BUTTON = 'button'),
    e
))(AnimEnum || {});
const FROM = { y: 10, opacity: 0 },
    FROM_LOSE = { y: 5, opacity: 0 },
    TO = { y: 0, opacity: 1 },
    DEFAULT_PARAMS = { from: { opacity: 0 }, to: { opacity: 0 }, delay: 0, duration: 0 },
    DURATION_WIN = 600,
    DURATION_LOSE = 1e3,
    STEP_WIN = 300,
    STEP_LOSE = 500,
    STEP_ITEM = 150,
    START_DELAY_WIN = 300,
    START_DELAY_LOSE = 800,
    ANIM_WIN = {
        bg: {
            from: { transform: 'scale(1.1)', opacity: 0 },
            to: { transform: 'scale(1)', opacity: 1 },
            delay: 0,
            duration: 2 * DURATION_WIN,
        },
        headerIcon: {
            from: { transform: 'scale(0.8, 1)', opacity: 0 },
            to: { transform: 'scale(1, 1)', opacity: 1 },
            delay: START_DELAY_WIN + 2 * STEP_WIN,
            config: { tension: 75, friction: 8 },
            easingType: EasingType.EaseOutBack,
        },
        headerTitle: {
            from: { y: 15, opacity: 0 },
            to: TO,
            delay: START_DELAY_WIN + STEP_WIN,
            config: { tension: 75, friction: 8 },
        },
        headerGlow: {
            from: { transform: 'scale(0.4, 3)', mixBlendMode: 'screen', opacity: 0 },
            to: { transform: 'scale(1, 1)', mixBlendMode: 'screen', opacity: 1 },
            delay: START_DELAY_WIN + STEP_WIN,
            config: { tension: 75, friction: 8 },
        },
        headerSubtitle: {
            from: { y: -15, opacity: 0 },
            to: TO,
            delay: START_DELAY_WIN + STEP_WIN,
            config: { tension: 75, friction: 8 },
        },
        ribbon: {
            from: { transform: 'scale(0.9, 1.0)', opacity: 0 },
            to: { transform: 'scale(1, 1)', opacity: 1 },
            delay: START_DELAY_WIN + 3 * STEP_WIN,
            config: { tension: 60, friction: 6 },
        },
        reward: {
            from: { y: -10, filter: 'brightness(3)', opacity: 0 },
            to: { y: 0, filter: 'brightness(1)', opacity: 1 },
            delay: START_DELAY_WIN + 4 * STEP_WIN + STEP_ITEM,
            duration: DURATION_WIN,
            easingType: EasingType.EaseOutBack,
        },
        teamResults: { from: FROM, to: TO, delay: START_DELAY_WIN + 5 * STEP_WIN, duration: DURATION_WIN },
        battleInfo: { from: FROM, to: TO, delay: START_DELAY_WIN + 6 * STEP_WIN, duration: DURATION_WIN },
        playerInfo: { from: FROM, to: TO, delay: START_DELAY_WIN + 6 * STEP_WIN, duration: DURATION_WIN },
        button: { from: FROM, to: TO, delay: START_DELAY_WIN + 7 * STEP_WIN, duration: 2 * DURATION_WIN },
    },
    ANIM_LOSE = {
        bg: {
            from: { transform: 'scale(1.1)', opacity: 0 },
            to: { transform: 'scale(1)', opacity: 1 },
            delay: 0,
            duration: 3 * DURATION_LOSE,
        },
        headerIcon: {
            from: { transform: 'scale(1.3, 1.1)', opacity: 0 },
            to: { transform: 'scale(1, 1)', opacity: 1 },
            delay: START_DELAY_LOSE + STEP_LOSE,
            config: { tension: 45, friction: 6 },
            easingType: EasingType.EaseOutBack,
        },
        headerTitle: { from: FROM_LOSE, to: TO, delay: START_DELAY_LOSE + STEP_LOSE, duration: DURATION_LOSE },
        headerGlow: { ...DEFAULT_PARAMS },
        headerSubtitle: { from: FROM_LOSE, to: TO, delay: START_DELAY_LOSE + 2 * STEP_LOSE, duration: DURATION_LOSE },
        ribbon: {
            from: { y: 0, opacity: 0 },
            to: TO,
            delay: START_DELAY_LOSE + 3 * STEP_LOSE,
            duration: DURATION_LOSE,
        },
        reward: {
            from: { y: -10, filter: 'brightness(3)', opacity: 0 },
            to: { y: 0, filter: 'brightness(1)', opacity: 1 },
            delay: START_DELAY_LOSE + 3 * STEP_LOSE,
            duration: DURATION_LOSE,
        },
        teamResults: { from: FROM_LOSE, to: TO, delay: START_DELAY_LOSE + 4 * STEP_LOSE, duration: DURATION_LOSE },
        battleInfo: { from: FROM_LOSE, to: TO, delay: START_DELAY_LOSE + 5 * STEP_LOSE, duration: DURATION_LOSE },
        playerInfo: { from: FROM_LOSE, to: TO, delay: START_DELAY_LOSE + 5 * STEP_LOSE, duration: DURATION_LOSE },
        button: { from: FROM_LOSE, to: TO, delay: START_DELAY_LOSE + 6 * STEP_LOSE, duration: 2 * DURATION_LOSE },
    },
    ALL_ANIMATIONS = { win: { ...ANIM_WIN }, lose: { ...ANIM_LOSE } },
    getAnimation = (e, t = !1) => (t ? ALL_ANIMATIONS.win[e] : ALL_ANIMATIONS.lose[e]);
var AnimNumberEnum = ((e) => ((e.MAIN_REWARD_WIN = 'mainRewardWin'), (e.MAIN_REWARD_LOSE = 'mainRewardLose'), e))(
    AnimNumberEnum || {},
);
const NUMBER_ANIM = { mainRewardWin: { delay: 0, duration: 800 }, mainRewardLose: { delay: 0, duration: 1200 } },
    root$h = 'BattleInfo_root_78068d1',
    base$g = 'BattleInfo_dd01f365',
    containerText$1 = 'BattleInfo_containerText_99e1a870',
    firstLine$1 = 'BattleInfo_firstLine_9d7d2a46',
    secondLine$1 = 'BattleInfo_secondLine_bd0de168',
    styles$h = {
        root: root$h,
        base: base$g,
        containerText: containerText$1,
        firstLine: firstLine$1,
        secondLine: secondLine$1,
    },
    LOCALE_PATH$2 = R.strings.last_stand_battle_results.info,
    BattleInfo = observer(({ className: e }) => {
        const { model: t } = useModel$1(),
            { difficultyLevel: s } = t.root.get(),
            { startDate: a, duration: n } = t.battleInfo.get();
        return jsxRuntimeExports.jsx('div', {
            className: cx(styles$h.base, e),
            children: jsxRuntimeExports.jsxs('div', {
                className: styles$h.containerText,
                children: [
                    jsxRuntimeExports.jsx(ExtendedText, {
                        classMix: styles$h.firstLine,
                        text: LOCALE_PATH$2.mapName(),
                        binding: { difficulty: LOCALE_PATH$2.difficult.$num(s) },
                        isTruncationAvailable: !0,
                        isTooltipEnable: !0,
                    }),
                    jsxRuntimeExports.jsx(ExtendedText, {
                        classMix: styles$h.secondLine,
                        text: LOCALE_PATH$2.dateAndDuration(),
                        isTruncationAvailable: !0,
                        isTooltipEnable: !0,
                        truncateIdentify: `... ${n}`,
                        binding: { date: a, duration: n },
                    }),
                ],
            }),
        });
    });
var TeamMemberBanType = ((e) => ((e.NotBanned = 'notBanned'), (e.Warned = 'warned'), (e.Banned = 'banned'), e))(
    TeamMemberBanType || {},
);
const root$g = 'DifficultyItem_root_84d51887',
    difficultyItem = 'DifficultyItem_difficultyItem_17a5fed3',
    progress = 'DifficultyItem_progress_cf46d2a0',
    progressIcon = 'DifficultyItem_progressIcon_aec004a5',
    progressIcon__completed = 'DifficultyItem_progressIcon__completed_602c7ded',
    difficultyItem__disabled = 'DifficultyItem_difficultyItem__disabled_84d51887',
    styles$g = {
        root: root$g,
        difficultyItem: difficultyItem,
        progress: progress,
        progressIcon: progressIcon,
        progressIcon__completed: progressIcon__completed,
        difficultyItem__disabled: difficultyItem__disabled,
    };
function DifficultyItem({ isDisabled: e, className: t, missionCount: s, completedMissions: a }) {
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$g.difficultyItem, e && styles$g.difficultyItem__disabled, t),
        children: jsxRuntimeExports.jsx('div', {
            className: styles$g.progress,
            children: Array.from({ length: s }, (e, t) =>
                jsxRuntimeExports.jsx(
                    'div',
                    {
                        className: cx(
                            styles$g.progressIcon,
                            a.indexOf(t.toString()) > -1 && styles$g.progressIcon__completed,
                        ),
                    },
                    `icon_${t}`,
                ),
            ),
        }),
    });
}
const root$f = 'Header_root_65f475ba',
    base$f = 'Header_4b11f81a',
    base__big = 'Header_base__big_59aefe32',
    iconContainer = 'Header_iconContainer_31bff0ba',
    label$1 = 'Header_label_8aed4170',
    icon$2 = 'Header_icon_6f4deee5',
    title = 'Header_title_77c879c7',
    base__lose$1 = 'Header_base__lose_65f475ba',
    base__win$1 = 'Header_base__win_65f475ba',
    subTitle = 'Header_subTitle_7eaae930',
    iconWarning = 'Header_iconWarning_a58a2924',
    record = 'Header_record_e948360',
    glow = 'Header_glow_3d5bbe43',
    containerGlow = 'Header_containerGlow_eda44e1d',
    topContainer = 'Header_topContainer_b30c86eb',
    difficultyContainer = 'Header_difficultyContainer_673a1354',
    difficulty = 'Header_difficulty_70aa1da5',
    styles$f = {
        root: root$f,
        base: base$f,
        base__big: base__big,
        iconContainer: iconContainer,
        label: label$1,
        icon: icon$2,
        title: title,
        base__lose: base__lose$1,
        base__win: base__win$1,
        subTitle: subTitle,
        iconWarning: iconWarning,
        record: record,
        glow: glow,
        containerGlow: containerGlow,
        topContainer: topContainer,
        difficultyContainer: difficultyContainer,
        difficulty: difficulty,
    },
    LOCALE_PATH$1 = R.strings.last_stand_battle_results,
    ICON_PATH = 'R.images.last_stand.gui.maps.icons.difficulties.c_186x186.level_',
    getTitle = (e) =>
        e <= 0
            ? { text: LOCALE_PATH$1.title.lose.noWaves(), binding: void 0 }
            : { text: LOCALE_PATH$1.title.lose.waves(e), binding: { phaseNumber: e } },
    getTooltipProps = (e) =>
        e
            ? {
                  decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                  contentId: R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
                  args: { body: LOCALE_PATH$1.tooltip.ban() },
              }
            : { contentId: R.views.last_stand.mono.lobby.tooltips.difficulty_tooltip('resId') },
    Header = observer(({ isAnimCanceled: e }) => {
        const { model: t } = useModel$1(),
            { isWin: s, newRecord: a, difficultyLevel: n, phasesCount: o, completedMissions: r } = t.root.get(),
            i = t.computes.completedPhase(),
            { banType: l } = t.playerInfo.get(),
            c = a && l === TeamMemberBanType.NotBanned;
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$f.base, s ? styles$f.base__win : styles$f.base__lose, !s && c && styles$f.base__big),
            children: [
                jsxRuntimeExports.jsx(SpringWrapper, {
                    ...getAnimation(AnimEnum.HEADER_ICON, s),
                    isCanceled: e,
                    className: styles$f.topContainer,
                    children: jsxRuntimeExports.jsxs('div', {
                        className: styles$f.iconContainer,
                        children: [
                            jsxRuntimeExports.jsx('div', {
                                className: styles$f.icon,
                                style: { backgroundImage: `url('${ICON_PATH}${n}')` },
                            }),
                            jsxRuntimeExports.jsx('div', {
                                className: styles$f.label,
                                children: R.strings.last_stand_lobby.difficult.uppercase.$dyn(`level_${n}`),
                            }),
                        ],
                    }),
                }),
                s
                    ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                          children: [
                              jsxRuntimeExports.jsx(SpringWrapper, {
                                  ...getAnimation(AnimEnum.HEADER_TITLE, s),
                                  isCanceled: e,
                                  className: styles$f.topContainer,
                                  children: jsxRuntimeExports.jsx(Text, {
                                      text: LOCALE_PATH$1.title.win(),
                                      type: TextType.Heading,
                                      className: styles$f.title,
                                      alignContent: Alignment.Center,
                                      justifyContent: Alignment.Center,
                                  }),
                              }),
                              jsxRuntimeExports.jsx(SpringWrapper, {
                                  ...getAnimation(AnimEnum.HEADER_GLOW, s),
                                  isCanceled: e,
                                  className: styles$f.containerGlow,
                                  children: jsxRuntimeExports.jsx('div', { className: styles$f.glow }),
                              }),
                          ],
                      })
                    : jsxRuntimeExports.jsx(SpringWrapper, {
                          ...getAnimation(AnimEnum.HEADER_TITLE, s),
                          isCanceled: e,
                          className: styles$f.topContainer,
                          children: jsxRuntimeExports.jsx(ExtendedText, {
                              classMix: styles$f.title,
                              alignContent: Alignment.Center,
                              justifyContent: Alignment.Center,
                              ...getTitle(i),
                          }),
                      }),
                jsxRuntimeExports.jsxs(SpringWrapper, {
                    ...getAnimation(AnimEnum.HEADER_SUBTITLE, s),
                    isCanceled: e,
                    className: styles$f.topContainer,
                    children: [
                        !s &&
                            jsxRuntimeExports.jsx('div', {
                                className: styles$f.subTitle,
                                children: LOCALE_PATH$1.subtitle.lose(),
                            }),
                        s &&
                            !a &&
                            jsxRuntimeExports.jsx('div', {
                                className: styles$f.subTitle,
                                children: LOCALE_PATH$1.subtitle.win(),
                            }),
                        a &&
                            jsxRuntimeExports.jsx('div', {
                                className: styles$f.topContainer,
                                children: jsxRuntimeExports.jsx(Tooltip, {
                                    ...getTooltipProps(!c),
                                    children: jsxRuntimeExports.jsxs('div', {
                                        className: styles$f.difficultyContainer,
                                        children: [
                                            jsxRuntimeExports.jsx('div', {
                                                className: styles$f.difficulty,
                                                children: jsxRuntimeExports.jsx(DifficultyItem, {
                                                    isDisabled: !s,
                                                    completedMissions: r,
                                                    missionCount: o,
                                                }),
                                            }),
                                            l !== TeamMemberBanType.NotBanned &&
                                                jsxRuntimeExports.jsx('div', { className: styles$f.iconWarning }),
                                            c &&
                                                jsxRuntimeExports.jsx('div', {
                                                    className: styles$f.record,
                                                    children: LOCALE_PATH$1.time.record(),
                                                }),
                                        ],
                                    }),
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    root$e = 'PlayerInfo_root_56d02918',
    base$e = 'PlayerInfo_8e1fa6d4',
    containerIconVehicle = 'PlayerInfo_containerIconVehicle_306b386c',
    iconVehicle = 'PlayerInfo_iconVehicle_bf36ad61',
    containerText = 'PlayerInfo_containerText_65b61f27',
    firstLine = 'PlayerInfo_firstLine_80567fa4',
    vehType = 'PlayerInfo_vehType_449549dd',
    userName$1 = 'PlayerInfo_userName_138b9710',
    clanTag$1 = 'PlayerInfo_clanTag_47b27251',
    clanTagBr = 'PlayerInfo_clanTagBr_e0c489de',
    secondLine = 'PlayerInfo_secondLine_34d4b628',
    bullet = 'PlayerInfo_bullet_95c55dc3',
    premiumIGR$1 = 'PlayerInfo_premiumIGR_d64fde08',
    styles$e = {
        root: root$e,
        base: base$e,
        containerIconVehicle: containerIconVehicle,
        iconVehicle: iconVehicle,
        containerText: containerText,
        firstLine: firstLine,
        vehType: vehType,
        userName: userName$1,
        clanTag: clanTag$1,
        clanTagBr: clanTagBr,
        secondLine: secondLine,
        bullet: bullet,
        premiumIGR: premiumIGR$1,
    },
    PlayerInfo$1 = observer(({ className: e }) => {
        const { model: t } = useModel$1(),
            { respCount: s } = t.playerInfo.get(),
            { userName: a, clanAbbrev: n } = t.playerUser.get(),
            { vehicleShortName: o, vehicleType: r, vehicleIconName: i, tags: l } = t.playerVehicle.get();
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$e.base, e),
            children: [
                jsxRuntimeExports.jsxs('div', {
                    className: styles$e.containerText,
                    children: [
                        jsxRuntimeExports.jsxs('div', {
                            className: styles$e.firstLine,
                            children: [
                                jsxRuntimeExports.jsx(ExtendedText, {
                                    classMix: styles$e.userName,
                                    text: a,
                                    isTruncationAvailable: !0,
                                    isTooltipEnable: !0,
                                    alignContent: Alignment.FlexEnd,
                                    justifyContent: Alignment.FlexEnd,
                                }),
                                n &&
                                    jsxRuntimeExports.jsxs('span', {
                                        className: styles$e.clanTag,
                                        children: [
                                            jsxRuntimeExports.jsx('span', {
                                                className: styles$e.clanTagBr,
                                                children: '[',
                                            }),
                                            n,
                                            jsxRuntimeExports.jsx('span', {
                                                className: styles$e.clanTagBr,
                                                children: ']',
                                            }),
                                        ],
                                    }),
                                jsxRuntimeExports.jsx('div', { className: styles$e.bullet }),
                                jsxRuntimeExports.jsx(VehicleType, {
                                    size: VehicleTypeSize.C38x38,
                                    color: VehicleTypeColor.WhiteSpanish,
                                    type: r,
                                    className: styles$e.vehType,
                                }),
                                checkForTag(l, PREMIUM_IGR_TAG) &&
                                    jsxRuntimeExports.jsx('div', { className: styles$e.premiumIGR }),
                                o,
                            ],
                        }),
                        jsxRuntimeExports.jsx('div', {
                            className: styles$e.secondLine,
                            children: jsxRuntimeExports.jsx(ExtendedText, {
                                classMix: styles$e.userInfo,
                                text: R.strings.last_stand_battle_results.info.respawnCount(),
                                binding: { count: s },
                                alignContent: Alignment.FlexEnd,
                                justifyContent: Alignment.FlexEnd,
                            }),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    className: styles$e.containerIconVehicle,
                    children: jsxRuntimeExports.jsx('div', {
                        className: styles$e.iconVehicle,
                        style: {
                            backgroundImage: `url('${R.images.gui.maps.icons.vehicle.$dyn(`${normalizeResource(i)}`)}')`,
                        },
                    }),
                }),
            ],
        });
    }),
    root$d = 'RewardItem_root_4a85f1a2',
    base$d = 'RewardItem_84192c54',
    value = 'RewardItem_value_abace8dc',
    value__currency = 'RewardItem_value__currency_7aab1f9c',
    value__number = 'RewardItem_value__number_d7f1ced6',
    value__gold = 'RewardItem_value__gold_33614753',
    value__credit = 'RewardItem_value__credit_3c674a29',
    value__key = 'RewardItem_value__key_1639ee5',
    value__coins = 'RewardItem_value__coins_9de84a7b',
    reward$1 = 'RewardItem_reward_5fe84f86',
    reward__single = 'RewardItem_reward__single_ceef77e8',
    styles$d = {
        root: root$d,
        base: base$d,
        value: value,
        value__currency: value__currency,
        value__number: value__number,
        value__gold: value__gold,
        value__credit: value__credit,
        value__key: value__key,
        value__coins: value__coins,
        reward: reward$1,
        reward__single: reward__single,
    },
    WIDTH_ONE_CHAR = 16,
    numberValueTypes = [RewardType.BattlePassPoints, RewardType.EquipCoin],
    RewardItem = observer(function ({ index: e, reward: t, isAnimCanceled: s }) {
        const { model: a } = useModel$1(),
            { isWin: n } = a.root.get(),
            o = currencyValueTypes.includes(t.name),
            r = numberValueTypes.includes(t.name),
            i = t.name == RewardType.Credits,
            l = t.name == LS_KEYS,
            c = t.name == RewardType.BattlePassPoints,
            _ = o || r || t.name == LS_KEYS,
            d = getAnimation(AnimEnum.REWARD, n).delay + 2 * STEP_ITEM * e,
            u = n
                ? { ...NUMBER_ANIM[AnimNumberEnum.MAIN_REWARD_WIN] }.duration
                : { ...NUMBER_ANIM[AnimNumberEnum.MAIN_REWARD_LOSE] }.duration;
        return jsxRuntimeExports.jsxs('div', {
            className: styles$d.base,
            children: [
                _ &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(
                            styles$d.value,
                            i && styles$d.value__credit,
                            l && styles$d.value__key,
                            o && styles$d.value__currency,
                            r && styles$d.value__number,
                            c && styles$d.value__coins,
                            t.name == RewardType.Gold && styles$d.value__gold,
                        ),
                        style: { width: String(t.value).length * WIDTH_ONE_CHAR + 'rem' },
                        children: jsxRuntimeExports.jsx(NumberAnimation, {
                            renderText: l
                                ? (e) =>
                                      jsxRuntimeExports.jsx(TextSimple, {
                                          text: e,
                                          type: TextType.Currency,
                                          shadow: !0,
                                      })
                                : void 0,
                            delay: d,
                            duration: u,
                            isCanceled: s,
                            isFormatted: !0,
                            currentNumber: parseInt(t.value),
                            onStart: () => play.sound(PBS_START_COUNTING),
                            onRest: () => play.sound(PBS_END_COUNTING),
                        }),
                    }),
                jsxRuntimeExports.jsx(
                    Reward,
                    {
                        name: t.name,
                        value: _ ? void 0 : getLSValue(t),
                        special: t.overlayType,
                        image: getLSRewardIcon(t, ImageSize.Big),
                        valueType: getLSRewardValueType(t.name),
                        tooltipArgs: getLSRewardTooltipConfig(t),
                        size: ImageSize.Big,
                        className: cx(styles$d.reward, !_ && styles$d.reward__single),
                    },
                    `Reward_${e}`,
                ),
            ],
        });
    }),
    root$c = 'Rewards_root_405577a5',
    base$c = 'Rewards_432a9f1b',
    ribbon = 'Rewards_ribbon_c95e5853',
    base__reward = 'Rewards_base__reward_405577a5',
    base__defeat = 'Rewards_base__defeat_405577a5',
    base__ban = 'Rewards_base__ban_405577a5',
    reward = 'Rewards_reward_4d74f2c0',
    text$1 = 'Rewards_text_a6483c5',
    text__banned = 'Rewards_text__banned_269e6c90',
    container = 'Rewards_container_a43e87a1',
    styles$c = {
        root: root$c,
        base: base$c,
        ribbon: ribbon,
        base__reward: base__reward,
        base__defeat: base__defeat,
        base__ban: base__ban,
        reward: reward,
        text: text$1,
        text__banned: text__banned,
        container: container,
    },
    LOCALE_PATH = R.strings.last_stand_battle_results.ribbon,
    getText = (e, t) => (e ? (t ? LOCALE_PATH.banRecord() : LOCALE_PATH.ban()) : LOCALE_PATH.noReward()),
    Rewards = observer(function ({ isAnimCanceled: e }) {
        const { model: t } = useModel$1(),
            { isWin: s, newRecord: a } = t.root.get(),
            { banType: n } = t.playerInfo.get(),
            o = t.computes.getRewardsLength(),
            r = n !== TeamMemberBanType.NotBanned,
            i = o > 0,
            l = getAnimation(AnimEnum.REWARD, s).delay;
        return jsxRuntimeExports.jsx('div', {
            className: cx(
                styles$c.base,
                !s && styles$c.base__defeat,
                i && styles$c.base__reward,
                (r || !i) && styles$c.base__ban,
            ),
            children: jsxRuntimeExports.jsx('div', {
                className: styles$c.ribbon,
                children: i
                    ? map(t.rewards.get(), (t, a) =>
                          reactExports.createElement(
                              SpringWrapper,
                              {
                                  ...{ ...getAnimation(AnimEnum.REWARD, s), delay: l + STEP_ITEM * a },
                                  isCanceled: e,
                                  key: `RewardItem_${a}`,
                                  className: styles$c.container,
                                  onStart: () => play.sound(PBS_REWARD_ICON),
                              },
                              jsxRuntimeExports.jsx(RewardItem, { index: a, isAnimCanceled: e, reward: t }),
                          ),
                      )
                    : jsxRuntimeExports.jsx('div', {
                          className: cx(styles$c.text, r && styles$c.text__banned),
                          children: getText(r, a),
                      }),
            }),
        });
    });
var ColumnEnum = ((e) => (
    (e.Kills = 'kills'),
    (e.Damage = 'damage'),
    (e.Assist = 'assist'),
    (e.Blocked = 'blocked'),
    (e.Place = 'place'),
    (e.Keys = 'keys'),
    e
))(ColumnEnum || {});
const root$b = 'SortHelper_root_af12aed1',
    base$b = 'SortHelper_a678300d',
    base__active = 'SortHelper_base__active_dbd69244',
    base__selected = 'SortHelper_base__selected_91fdc22c',
    arrow = 'SortHelper_arrow_50b86f5d',
    base__desc = 'SortHelper_base__desc_af12aed1',
    styles$b = {
        root: root$b,
        base: base$b,
        base__active: base__active,
        base__selected: base__selected,
        arrow: arrow,
        base__desc: base__desc,
    },
    VEHICLE_COLUMN = 'vehicle',
    DAMAGE_COLUMN = 'damage',
    SortHelper = ({
        onClick: e,
        className: t,
        isSelected: s,
        isEnabled: a,
        sortDirection: n,
        column: o,
        children: r,
    }) =>
        jsxRuntimeExports.jsxs('div', {
            className: cx(
                styles$b.base,
                a && styles$b.base__active,
                t,
                s && styles$b.base__selected,
                styles$b[`base__${SORT_DIRECTIONS[n]}`],
            ),
            onClick: () => {
                a && (e(o), play.click());
            },
            onMouseEnter: () => {
                a && play.highlight();
            },
            children: [r, s && a && jsxRuntimeExports.jsx('div', { className: styles$b.arrow })],
        }),
    VEHICLE_ORDER = [HEAVY_TANK, MEDIUM_TANK, LIGHT_TANK, SPG, AT_SPG];
var SORT_DIRECTIONS = ((e) => ((e[(e.desc = 1)] = 'desc'), (e[(e.asc = -1)] = 'asc'), e))(SORT_DIRECTIONS || {});
const [ModelProvider, useModel] = initializeModelWithContext()(
    ({ observableModel: e }) => {
        const t = observable.box(ColumnEnum.Place),
            s = observable.box(1),
            a = {
                root: e.object(),
                team: e.array('team', []),
                visibleColumns: e.array('columnSettings.visibleColumns'),
            },
            n = computedFn(
                () =>
                    map(a.team.get(), identity)
                        .slice()
                        .sort((e, a) => {
                            const n = String(t) === ColumnEnum.Place ? -1 * Number(s) : Number(s);
                            return String(t) === VEHICLE_COLUMN
                                ? e.vehicle.vehicleType === a.vehicle.vehicleType
                                    ? n *
                                      String(e.vehicle.vehicleShortName)
                                          .toLocaleLowerCase()
                                          .localeCompare(String(a.vehicle.vehicleShortName).toLocaleLowerCase())
                                    : n *
                                      (VEHICLE_ORDER.indexOf(e.vehicle.vehicleType) -
                                          VEHICLE_ORDER.indexOf(a.vehicle.vehicleType))
                                : n * (a.stats[t] - e.stats[t]);
                        }),
                { equals: constFalse },
            );
        return { ...a, sortBy: t, sortDirection: s, computes: { getSortedTeam: n } };
    },
    ({ externalModel: e, model: t }) => ({
        setSortBy: action((e) => {
            (e === t.sortBy.get() ? t.sortDirection.set(-1 * t.sortDirection.get()) : t.sortDirection.set(1),
                t.sortBy.set(e));
        }),
        sendFriendRequest: e.createCallback(
            (e, t, s) => ({ playerId: e, userName: t, clanAbbrev: s }),
            'onSendFriendRequest',
        ),
        sendPlatoonInvitation: e.createCallback((e, t) => ({ playerId: e, userName: t }), 'onSendPlatoonInvitation'),
        removeFromBlacklist: e.createCallback((e, t) => ({ playerId: e, userName: t }), 'onRemoveFromBlacklist'),
    }),
);
var TableType = ((e) => ((e.TabWindow = 'tabWindow'), (e.LeaderBoard = 'leaderBoard'), e))(TableType || {});
const TeamListTypeContext = reactExports.createContext(TableType.TabWindow),
    root$a = 'CellDecorator_root_b5c0999b',
    base$a = 'CellDecorator_8e41db2a',
    base__keys = 'CellDecorator_base__keys_63702f2a',
    base__actions = 'CellDecorator_base__actions_41861a9f',
    base__tabWindow$1 = 'CellDecorator_base__tabWindow_3990bbbe',
    base__currentPlayer$3 = 'CellDecorator_base__currentPlayer_eebdddd2',
    base__player = 'CellDecorator_base__player_36ffb241',
    base__stats = 'CellDecorator_base__stats_dab61779',
    base__buffs$1 = 'CellDecorator_base__buffs_3e76b04',
    base__damage = 'CellDecorator_base__damage_c1078d6a',
    base__vehicle = 'CellDecorator_base__vehicle_b5c0999b',
    base__vehicleIcon = 'CellDecorator_base__vehicleIcon_5adb1a68',
    base__bordered = 'CellDecorator_base__bordered_b3855552',
    border$1 = 'CellDecorator_border_a694fc4',
    children = 'CellDecorator_children_5e23ddc4',
    base__statsLarge = 'CellDecorator_base__statsLarge_b5c0999b',
    base__kills = 'CellDecorator_base__kills_b5c0999b',
    styles$a = {
        root: root$a,
        base: base$a,
        base__keys: base__keys,
        base__actions: base__actions,
        base__tabWindow: base__tabWindow$1,
        base__currentPlayer: base__currentPlayer$3,
        base__player: base__player,
        base__stats: base__stats,
        base__buffs: base__buffs$1,
        base__damage: base__damage,
        base__vehicle: base__vehicle,
        base__vehicleIcon: base__vehicleIcon,
        base__bordered: base__bordered,
        border: border$1,
        children: children,
        base__statsLarge: base__statsLarge,
        base__kills: base__kills,
    };
var CellStyleEnum = ((e) => (
    (e.Player = 'player'),
    (e.Stats = 'stats'),
    (e.Vehicle = 'vehicle'),
    (e.VehicleIcon = 'vehicleIcon'),
    (e.Keys = 'keys'),
    (e.Actions = 'actions'),
    (e.Damage = 'damage'),
    (e.Kills = 'kills'),
    e
))(CellStyleEnum || {});
const CellDecorator = ({ cellStyle: e, bordered: t = !1, isCurrentPlayer: s, children: a }) => {
        const n = reactExports.useContext(TeamListTypeContext);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(
                styles$a.base,
                styles$a[`base__${e}`],
                styles$a[`base__${n}`],
                s && styles$a.base__currentPlayer,
            ),
            lang: R.strings.settings.LANGUAGE_CODE(),
            children: [
                t && jsxRuntimeExports.jsx('div', { className: styles$a.border }),
                jsxRuntimeExports.jsx('div', { className: styles$a.children, children: a }),
            ],
        });
    },
    root$9 = 'RowDecorator_root_aac40ec7',
    base$9 = 'RowDecorator_7f8a82c4',
    base__currentPlayer$2 = 'RowDecorator_base__currentPlayer_5b1523a3',
    childrenWrapper = 'RowDecorator_childrenWrapper_f5dbe2f5',
    base__defaultText = 'RowDecorator_base__defaultText_aac40ec7',
    base__goldText = 'RowDecorator_base__goldText_aac40ec7',
    base__disable = 'RowDecorator_base__disable_aac40ec7',
    backgroundHelper = 'RowDecorator_backgroundHelper_54786082',
    base__goldBg = 'RowDecorator_base__goldBg_aac40ec7',
    backgroundHelper__header = 'RowDecorator_backgroundHelper__header_781eab89',
    styles$9 = {
        root: root$9,
        base: base$9,
        base__currentPlayer: base__currentPlayer$2,
        childrenWrapper: childrenWrapper,
        base__defaultText: base__defaultText,
        base__goldText: base__goldText,
        base__disable: base__disable,
        backgroundHelper: backgroundHelper,
        base__goldBg: base__goldBg,
        backgroundHelper__header: backgroundHelper__header,
    },
    HeaderRowDecorator = ({ children: e }) =>
        jsxRuntimeExports.jsxs('div', {
            className: styles$9.base,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$9.backgroundHelper, styles$9.backgroundHelper__header),
                }),
                jsxRuntimeExports.jsx('div', { className: styles$9.childrenWrapper, children: e }),
            ],
        }),
    root$8 = 'HeaderIcon_root_1ee11e98',
    base$8 = 'HeaderIcon_d7f54b6b',
    base__hoverEnabled = 'HeaderIcon_base__hoverEnabled_1ee11e98',
    base__highlighted = 'HeaderIcon_base__highlighted_a21a50f4',
    base__squad_small = 'HeaderIcon_base__squad_small_1f596beb',
    base__buffs = 'HeaderIcon_base__buffs_f96ed88e',
    icon$1 = 'HeaderIcon_icon_35ac5787',
    styles$8 = {
        root: root$8,
        base: base$8,
        base__hoverEnabled: base__hoverEnabled,
        base__highlighted: base__highlighted,
        base__squad_small: base__squad_small,
        base__buffs: base__buffs,
        icon: icon$1,
    };
var HeaderIconEnum = ((e) => (
    (e.Assist = 'assist'),
    (e.Blocked = 'blocked'),
    (e.Damage = 'damage'),
    (e.Kills = 'kills'),
    (e.SquadSmall = 'squad_small'),
    (e.Vehicle = 'vehicle'),
    (e.Souls = 'souls'),
    (e.Place = 'place'),
    (e.Keys = 'keys'),
    e
))(HeaderIconEnum || {});
const HeaderIcon = reactExports.memo(function ({
        icon: e,
        className: t,
        isHighlighted: s = !1,
        isHoverEnabled: a = !1,
    }) {
        return jsxRuntimeExports.jsx('div', {
            className: cx(
                styles$8.base,
                s && styles$8.base__highlighted,
                a && styles$8.base__hoverEnabled,
                styles$8[`base__${e}`],
                t,
            ),
            children: jsxRuntimeExports.jsx('div', {
                className: styles$8.icon,
                style: { backgroundImage: `url('${R.images.last_stand.gui.maps.icons.common.stats.c_32x32.$dyn(e)}')` },
            }),
        });
    }),
    root$7 = 'HeaderRow_root_29fa123c',
    base$7 = 'HeaderRow_9af02515',
    text = 'HeaderRow_text_9d3eddc1',
    text__tabWindow = 'HeaderRow_text__tabWindow_f2f594eb',
    cell = 'HeaderRow_cell_8a6dfec5',
    squad$1 = 'HeaderRow_squad_935f56a9',
    vehicle = 'HeaderRow_vehicle_50a27f90',
    border = 'HeaderRow_border_871a1365',
    upperLine = 'HeaderRow_upperLine_5d01e90e',
    iconBorder = 'HeaderRow_iconBorder_37a55ff9',
    actions = 'HeaderRow_actions_fd40145d',
    styles$7 = {
        root: root$7,
        base: base$7,
        text: text,
        text__tabWindow: text__tabWindow,
        cell: cell,
        squad: squad$1,
        vehicle: vehicle,
        border: border,
        upperLine: upperLine,
        iconBorder: iconBorder,
        actions: actions,
    },
    cellStyle = (e) => {
        switch (e) {
            case VEHICLE_COLUMN:
                return CellStyleEnum.VehicleIcon;
            case DAMAGE_COLUMN:
                return CellStyleEnum.Damage;
        }
        return CellStyleEnum.Stats;
    },
    tooltipContent = (e, t) => {
        const s = R.strings.last_stand_tooltips.teamList.$dyn(e),
            a = { header: '', body: '' };
        return (
            t === TableType.LeaderBoard
                ? ((a.header = s.$dyn('header')), (a.body = s.$dyn('body')))
                : (a.body = s.$dyn('header')),
            a
        );
    },
    HeaderRow = reactExports.memo(function ({
        visibleColumns: e,
        sortBy: t = ColumnEnum.Place,
        sortDirection: s,
        onSortChanged: a,
        tableType: n,
        sortEnabled: o,
    }) {
        const r = reactExports.useContext(TeamListTypeContext),
            i = reactExports.useCallback(
                (e) => {
                    a && a(e);
                },
                [a],
            ),
            l = e.map((e) => e);
        l.unshift(VEHICLE_COLUMN);
        const c = n === TableType.LeaderBoard;
        return jsxRuntimeExports.jsxs(HeaderRowDecorator, {
            children: [
                jsxRuntimeExports.jsx(CellDecorator, {
                    cellStyle: CellStyleEnum.Player,
                    children: jsxRuntimeExports.jsxs('div', {
                        className: styles$7.base,
                        children: [
                            jsxRuntimeExports.jsx(SimpleTooltip, {
                                body: R.strings.last_stand_tooltips.teamList.squad.header(),
                                children: jsxRuntimeExports.jsx('div', {
                                    children: jsxRuntimeExports.jsx(HeaderIcon, {
                                        icon: HeaderIconEnum.SquadSmall,
                                        className: styles$7.squad,
                                    }),
                                }),
                            }),
                            jsxRuntimeExports.jsx('div', {
                                className: styles$7.border,
                                children: jsxRuntimeExports.jsx('div', { className: styles$7.iconBorder }),
                            }),
                            jsxRuntimeExports.jsx(SimpleTooltip, {
                                body: R.strings.last_stand_tooltips.teamList.name.header(),
                                children: jsxRuntimeExports.jsx('span', {
                                    className: cx(styles$7.text, styles$7[`text__${r}`]),
                                    children: R.strings.last_stand_battle_results.teamList.teammates(),
                                }),
                            }),
                        ],
                    }),
                }),
                jsxRuntimeExports.jsxs(CellDecorator, {
                    cellStyle: CellStyleEnum.Actions,
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            className: styles$7.border,
                            children: jsxRuntimeExports.jsx('div', { className: styles$7.iconBorder }),
                        }),
                        jsxRuntimeExports.jsx(SimpleTooltip, {
                            header: R.strings.last_stand_tooltips.teamList.actions.header(),
                            body: R.strings.last_stand_tooltips.teamList.actions.body(),
                            children: jsxRuntimeExports.jsx('div', {
                                className: styles$7.actions,
                                children: R.strings.last_stand_battle_results.teamList.actions(),
                            }),
                        }),
                    ],
                }),
                l.map((e) =>
                    jsxRuntimeExports.jsx(
                        CellDecorator,
                        {
                            cellStyle: cellStyle(e),
                            bordered: !0,
                            children: jsxRuntimeExports.jsx(SimpleTooltip, {
                                ...tooltipContent(e, n),
                                children: jsxRuntimeExports.jsx('div', {
                                    className: cx(styles$7.cell, styles$7[`cell__${n}`]),
                                    children: jsxRuntimeExports.jsx(SortHelper, {
                                        isSelected: c && t === e,
                                        sortDirection: s,
                                        column: e,
                                        onClick: i,
                                        isEnabled: o,
                                        children: jsxRuntimeExports.jsx(HeaderIcon, {
                                            icon: e,
                                            isHighlighted: c && t === e,
                                            isHoverEnabled: c && t !== e,
                                            className: styles$7[`${e}`],
                                        }),
                                    }),
                                }),
                            }),
                        },
                        e,
                    ),
                ),
                jsxRuntimeExports.jsx('div', { className: styles$7.upperLine }),
            ],
        });
    });
var __webpack_modules__ = {
        859: (e, t, s) => {
            s.d(t, { O: () => J });
            var a = {};
            (s.r(a), s.d(a, { mouse: () => b, off: () => u, on: () => d, onResize: () => c, onScaleUpdated: () => _ }));
            var n = {};
            (s.r(n),
                s.d(n, {
                    events: () => a,
                    getMouseGlobalPosition: () => E,
                    getSize: () => y,
                    graphicsQuality: () => R,
                    playSound: () => p,
                    setRTPC: () => x,
                }));
            var o = {};
            (s.r(o), s.d(o, { getBgUrl: () => g, getTextureUrl: () => v }));
            var r = {};
            function i(e) {
                return (t) => (
                    engine.on(e, t),
                    () => {
                        engine.off(e, t);
                    }
                );
            }
            function l(e) {
                viewEnv.setTrackMouseOnStage(e);
            }
            (s.r(r),
                s.d(r, {
                    addModelObserver: () => P,
                    addPreloadTexture: () => A,
                    children: () => o,
                    displayStatus: () => w,
                    displayStatusIs: () => Z,
                    events: () => I,
                    extraSize: () => X,
                    forceTriggerMouseMove: () => Y,
                    freezeTextureBeforeResize: () => M,
                    getBrowserTexturePath: () => L,
                    getDisplayStatus: () => z,
                    getFontNames: () => K,
                    getScale: () => W,
                    getSize: () => D,
                    getViewGlobalPosition: () => B,
                    isEventHandled: () => q,
                    isFocused: () => U,
                    pxToRem: () => H,
                    remToPx: () => F,
                    resize: () => k,
                    sendEvent: () => j,
                    setAnimateWindow: () => V,
                    setEventHandled: () => G,
                    setInputPaddingsRem: () => $,
                    setSidePaddingsRem: () => O,
                    whenTutorialReady: () => Q,
                }));
            const c = i('clientResized'),
                _ = i('self.onScaleUpdated'),
                d = (e, t) => engine.on(e, t),
                u = (e, t) => engine.off(e, t),
                m = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') },
                b = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function s() {
                        e.enabled && l(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', s))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', s))
                            : l(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, s) => (
                            (t[s] = (function (t) {
                                return (s) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const o = `mouse${t}`,
                                        r = m[t]((e) => s([e, 'outside']));
                                    function i(e) {
                                        s([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, i),
                                        a(),
                                        () => {
                                            n &&
                                                (r(),
                                                window.removeEventListener(o, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(s)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
            function p(e) {
                engine.call('PlaySound', e).catch((t) => {
                    console.error(`playSound('${e}'): `, t);
                });
            }
            function x(e, t) {
                engine.call('SetRTPCGlobal', e, t).catch((s) => {
                    console.error(`setRTPC('${e}', '${t}'): `, s);
                });
            }
            function y(e = 'px') {
                return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
            }
            function E(e = 'px') {
                return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
            }
            const R = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                },
                f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                T = Object.keys(f).reduce((e, t) => ((e[t] = () => p(f[t])), e), {}),
                h = { play: Object.assign({}, T, { sound: p }), setRTPC: x };
            function v(e, t, s = 1) {
                return viewEnv.getChildTexturePath(e, t.width, t.height, s);
            }
            function g(e, t, s) {
                return `url(${v(e, t, s)})`;
            }
            const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                I = {
                    onTextureFrozen: i('self.onTextureFrozen'),
                    onTextureReady: i('self.onTextureReady'),
                    onDomBuilt: i('self.onDomBuilt'),
                    onLoaded: i('self.onLoaded'),
                    onDisplayChanged: i('self.onShowingStatusChanged'),
                    onFocusUpdated: i('self.onFocusChanged'),
                    children: {
                        onAdded: i('children.onAdded'),
                        onLoaded: i('children.onLoaded'),
                        onRemoved: i('children.onRemoved'),
                        onAttached: i('children.onAttached'),
                        onTextureReady: i('children.onTextureReady'),
                        onRequestPosition: i('children.requestPosition'),
                    },
                },
                S = ['args'],
                C = (e, t) => {
                    const s = 'GFViewEventProxy';
                    if (void 0 !== t) {
                        const n = t.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var s = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        s[a] = e[a];
                                    }
                                return s;
                            })(t, S);
                        return void 0 !== n
                            ? viewEnv.handleViewEvent(
                                  Object.assign({ __Type: s, type: e }, o, {
                                      arguments:
                                          ((a = n),
                                          Object.entries(a).map(([e, t]) => {
                                              const s = 'GFValueProxy';
                                              switch (typeof t) {
                                                  case 'number':
                                                      return { __Type: s, name: e, number: t };
                                                  case 'boolean':
                                                      return { __Type: s, name: e, bool: t };
                                                  default:
                                                      return { __Type: s, name: e, string: t.toString() };
                                              }
                                          })),
                                  }),
                              )
                            : viewEnv.handleViewEvent(Object.assign({ __Type: s, type: e }, o));
                    }
                    return viewEnv.handleViewEvent({ __Type: s, type: e });
                    var a;
                },
                j = {
                    close(e) {
                        C('popover' === e ? 2 : 32);
                    },
                    minimize() {
                        C(64);
                    },
                    move(e) {
                        C(16, { isMouseEvent: !0, on: e });
                    },
                },
                N = 15;
            function A(e) {
                viewEnv.addPreloadTexture(e);
            }
            function $(e) {
                viewEnv.setHitAreaPaddingsRem(e, e, e, e, N);
            }
            function L(e, t, s, a = 1) {
                return viewEnv.getWebBrowserTexturePath(e, t, s, a);
            }
            function P(e, t, s) {
                return viewEnv.addDataChangedCallback(e, t, s);
            }
            function O(e) {
                viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, N);
            }
            function D(e = 'px') {
                return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
            }
            function k(e, t, s = 'px') {
                return 'rem' === s ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
            }
            function B(e = 'rem') {
                const t = viewEnv.getViewGlobalPositionRem();
                return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
            }
            function M() {
                viewEnv.freezeTextureBeforeResize();
            }
            function W() {
                return viewEnv.getScale();
            }
            function H(e) {
                return viewEnv.pxToRem(e);
            }
            function F(e) {
                return viewEnv.remToPx(e);
            }
            function V(e, t) {
                viewEnv.setAnimateWindow(e, t);
            }
            function U() {
                return viewEnv.isFocused();
            }
            function G() {
                return viewEnv.setEventHandled();
            }
            function q() {
                return viewEnv.isEventHandled();
            }
            function Y() {
                viewEnv.forceTriggerMouseMove();
            }
            function z() {
                return viewEnv.getShowingStatus();
            }
            const K = (() => {
                    let e = [];
                    return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                })(),
                Z = Object.keys(w).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === w[t]), e), {}),
                X = {
                    set: (e, t) => {
                        viewEnv.setExtraSizeRem(e, t);
                    },
                    get: (e, t) => {
                        viewEnv.getExtraSizeRem(e, t);
                    },
                },
                Q = Promise.all([
                    new Promise((e) => {
                        window.isDomBuilt ? e() : I.onDomBuilt(e);
                    }),
                    engine.whenReady,
                ]),
                J = { view: r, client: n, sound: h };
        },
        310: (e, t, s) => {
            s.d(t, { Z: () => o });
            var a = s(859);
            class n {
                constructor() {
                    ((this._callbacks = void 0),
                        (this._updateHandler = void 0),
                        (this._views = void 0),
                        (this.clearViewCallbacks = (e) => {
                            this._views[e] &&
                                (this._views[e].forEach((e) => {
                                    delete this._callbacks[e];
                                }),
                                delete this._views[e]);
                        }),
                        (this._callbacks = {}),
                        (this._views = {}),
                        (this._updateHandler = void 0));
                }
                static get instance() {
                    return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                }
                clear() {
                    (void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                        (this._callbacks = {}));
                }
                addCallback(e, t, s = 0, n = !0) {
                    void 0 === this._updateHandler &&
                        (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                    const o = a.O.view.addModelObserver(e, s, n);
                    return (
                        o > 0
                            ? ((this._callbacks[o] = t),
                              s > 0 && (this._views[s] ? this._views[s].push(o) : (this._views[s] = [o])))
                            : console.error("Can't add callback for model:", e),
                        o
                    );
                }
                removeCallback(e, t = 0) {
                    let s = !1;
                    return (
                        void 0 !== e &&
                            void 0 !== this._callbacks[e] &&
                            ((s = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                        s || console.error("Can't remove callback by id:", e),
                        s
                    );
                }
                _emmitDataChanged(e, t, s) {
                    s.forEach((s) => {
                        const a = this._callbacks[s];
                        void 0 !== a && a(e, t);
                    });
                }
            }
            n.__instance = void 0;
            const o = n;
        },
        421: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
            var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310),
                _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461);
            class ViewModel {
                constructor(path, watchingFields = []) {
                    ((this.dataTracker = void 0),
                        (this.modelPath = void 0),
                        (this.callbacks = void 0),
                        (this.data = void 0),
                        (this._notifyObservers = () => {
                            ((this.data = eval(this.modelPath)),
                                this.callbacks.forEach((e) => {
                                    e(this.data);
                                }));
                        }),
                        (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                        (this.modelPath = path),
                        (this.callbacks = new Set()),
                        (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                            (this._addCallback(path),
                                watchingFields.forEach((e) => {
                                    this._addCallback(path + '.' + e);
                                }),
                                this._notifyObservers());
                        }));
                }
                subscribe(e) {
                    (this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data));
                }
                unsubscribe(e) {
                    this.callbacks.delete(e);
                }
                destroy() {
                    (this.dataTracker.clear(), this.callbacks.clear());
                }
                _addCallback(e) {
                    this.dataTracker.addCallback(e, this._notifyObservers);
                }
            }
            const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
        },
        461: (e, t, s) => {
            s.d(t, { B0: () => l, c9: () => v, ry: () => h });
            class a {
                constructor() {
                    ((this.entries = []),
                        (this._listenMouse = !1),
                        (this.onMouseDown = (e) => {
                            this.entries.forEach(({ container: t, callback: s }) => {
                                let a = e.target;
                                do {
                                    if (a === t) return;
                                    a = a.parentNode;
                                } while (a);
                                s();
                            });
                        }));
                }
                static get instance() {
                    return (a.__instance || (a.__instance = new a()), a.__instance);
                }
                register(e, t) {
                    (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                }
                unregister(e, t) {
                    const s = e,
                        a = t;
                    ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== s || t !== a)),
                        this.removeMouseListener());
                }
                addMouseListener() {
                    this._listenMouse ||
                        (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                }
                removeMouseListener() {
                    this._listenMouse &&
                        0 === this.entries.length &&
                        (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                }
            }
            a.__instance = void 0;
            const n = a;
            var o = s(310);
            const r = {
                    getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                    getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                    getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                    getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                    toUpperCase: (e) => systemLocale.toUpperCase(e),
                    toLowerCase: (e) => systemLocale.toUpperCase(e),
                },
                i = {
                    getNumberFormat: (e) => userLocale.getNumberFormat(e),
                    getTimeFormat: (e, t, s) => userLocale.getTimeFormat(e, t, void 0 === s || s),
                    getTimeString: (e, t, s) => userLocale.getTimeString(e, t, void 0 === s || s),
                };
            let l;
            var c;
            (((c = l || (l = {}))[(c.UNDEFINED = 0)] = 'UNDEFINED'),
                (c[(c.TOOLTIP = 1)] = 'TOOLTIP'),
                (c[(c.POP_OVER = 2)] = 'POP_OVER'),
                (c[(c.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                (c[(c.DROP_DOWN = 8)] = 'DROP_DOWN'),
                (c[(c.MOVE = 16)] = 'MOVE'),
                (c[(c.CLOSE = 32)] = 'CLOSE'),
                (c[(c.MINIMIZE = 64)] = 'MINIMIZE'));
            const _ = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            let b, p;
            var x;
            (((x = b || (b = {}))[(x.NONE = -1)] = 'NONE'),
                (x[(x.ALT = 165)] = 'ALT'),
                (x[(x.ENTER = 13)] = 'ENTER'),
                (x[(x.ESCAPE = 27)] = 'ESCAPE'),
                (x[(x.SPACE = 32)] = 'SPACE'),
                (x[(x.END = 35)] = 'END'),
                (x[(x.HOME = 36)] = 'HOME'),
                (x[(x.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                (x[(x.ARROW_UP = 38)] = 'ARROW_UP'),
                (x[(x.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                (x[(x.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                (x[(x.NUM_PLUS = 107)] = 'NUM_PLUS'),
                (x[(x.NUM_MINUS = 109)] = 'NUM_MINUS'),
                (x[(x.PLUS = 187)] = 'PLUS'),
                (x[(x.MINUS = 189)] = 'MINUS'),
                (x[(x.PAGE_UP = 33)] = 'PAGE_UP'),
                (x[(x.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                (x[(x.BACKSPACE = 8)] = 'BACKSPACE'),
                (x[(x.DELETE = 46)] = 'DELETE'),
                (x[(x.TAB = 9)] = 'TAB'),
                (x[(x.KEY_N = 78)] = 'KEY_N'),
                (x[(x.KEY_1 = 49)] = 'KEY_1'),
                (x[(x.KEY_2 = 50)] = 'KEY_2'),
                (x[(x.KEY_3 = 51)] = 'KEY_3'),
                (x[(x.KEY_4 = 52)] = 'KEY_4'),
                (x[(x.KEY_5 = 53)] = 'KEY_5'),
                (x[(x.KEY_6 = 54)] = 'KEY_6'),
                (x[(x.KEY_7 = 55)] = 'KEY_7'),
                (x[(x.KEY_8 = 56)] = 'KEY_8'),
                (x[(x.KEY_9 = 57)] = 'KEY_9'),
                (function (e) {
                    ((e.ALT = 'Alt'),
                        (e.ALT_GRAPH = 'AltGraph'),
                        (e.CAPS_LOCK = 'CapsLock'),
                        (e.CONTROL = 'Control'),
                        (e.FN = 'Fn'),
                        (e.FN_LOCK = 'FnLock'),
                        (e.META = 'Meta'),
                        (e.NUM_LOCK = 'NumLock'),
                        (e.SCROLL_LOCK = 'ScrollLock'),
                        (e.SHIFT = 'Shift'),
                        (e.SYMBOL = 'Symbol'),
                        (e.SYMBOL_LOCK = 'SymbolLock'));
                })(p || (p = {})));
            var y = s(859);
            const E = ['args'];
            function f(e, t, s, a, n, o, r) {
                try {
                    var i = e[o](r),
                        l = i.value;
                } catch (c) {
                    return void s(c);
                }
                i.done ? t(l) : Promise.resolve(l).then(a, n);
            }
            const T = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                h = (function () {
                    var e,
                        t =
                            ((e = function* () {
                                return (
                                    !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                    new Promise((e) => {
                                        engine.on('Ready', e);
                                    })
                                );
                            }),
                            function () {
                                var t = this,
                                    s = arguments;
                                return new Promise(function (a, n) {
                                    var o = e.apply(t, s);
                                    function r(e) {
                                        f(o, a, n, r, i, 'next', e);
                                    }
                                    function i(e) {
                                        f(o, a, n, r, i, 'throw', e);
                                    }
                                    r(void 0);
                                });
                            });
                    return function () {
                        return t.apply(this, arguments);
                    };
                })(),
                v = (e, t) => {
                    const s = 'GFViewEventProxy';
                    if (void 0 !== t) {
                        const n = t.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var s = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        s[a] = e[a];
                                    }
                                return s;
                            })(t, E);
                        void 0 !== n
                            ? viewEnv.handleViewEvent(
                                  Object.assign({ __Type: s, type: e }, o, {
                                      arguments:
                                          ((a = n),
                                          Object.entries(a).map(([e, t]) => {
                                              const s = { __Type: 'GFValueProxy', name: e };
                                              switch (typeof t) {
                                                  case 'number':
                                                      s.number = t;
                                                      break;
                                                  case 'boolean':
                                                      s.bool = t;
                                                      break;
                                                  default:
                                                      s.string = t.toString();
                                              }
                                              return s;
                                          })),
                                  }),
                              )
                            : viewEnv.handleViewEvent(Object.assign({ __Type: s, type: e }, o));
                    } else viewEnv.handleViewEvent({ __Type: s, type: e });
                    var a;
                },
                g = () => v(l.CLOSE),
                w = (e, t) => {
                    e.keyCode === b.ESCAPE && t();
                };
            var I = s(421);
            const S = n.instance,
                C = {
                    DataTracker: o.Z,
                    ViewModel: I.Z,
                    ViewEventType: l,
                    NumberFormatType: _,
                    RealFormatType: d,
                    TimeFormatType: u,
                    DateFormatType: m,
                    makeGlobalBoundingBox: T,
                    sendMoveEvent: (e) => v(l.MOVE, { isMouseEvent: !0, on: e }),
                    sendCloseEvent: g,
                    sendClosePopOverEvent: () => v(l.POP_OVER, { on: !1 }),
                    sendShowContextMenuEvent: (e, t, s = 0) => {
                        v(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: s, args: t });
                    },
                    sendShowPopOverEvent: (e, t, s, a, n = R.invalid('resId'), o) => {
                        const r = y.O.view.getViewGlobalPosition(),
                            i = s.getBoundingClientRect(),
                            c = i.x,
                            _ = i.y,
                            d = i.width,
                            u = i.height,
                            m = {
                                x: y.O.view.pxToRem(c) + r.x,
                                y: y.O.view.pxToRem(_) + r.y,
                                width: y.O.view.pxToRem(d),
                                height: y.O.view.pxToRem(u),
                            };
                        v(l.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: n,
                            direction: t,
                            bbox: T(m),
                            on: !0,
                            args: o,
                        });
                    },
                    addEscapeListener: (e) => {
                        const t = (t) => w(t, e);
                        return (window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t));
                    },
                    closeOnEsc: (e) => {
                        w(e, g);
                    },
                    handleViewEvent: v,
                    onBindingsReady: h,
                    onLayoutReady: () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                    isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                    isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                    dumpViewModel: function e(t) {
                        const s = {};
                        if ('object' != typeof t) return t;
                        for (const a in t)
                            if (Object.prototype.hasOwnProperty.call(t, a)) {
                                const n = Object.prototype.toString.call(t[a]);
                                if (n.startsWith('[object CoherentArrayProxy]')) {
                                    const n = t[a];
                                    s[a] = [];
                                    for (let t = 0; t < n.length; t++) s[a].push({ value: e(n[t].value) });
                                } else
                                    n.startsWith('[object class BW::WULF::ViewModel')
                                        ? (s[a] = e(t[a]))
                                        : (s[a] = t[a]);
                            }
                        return s;
                    },
                    ClickOutsideManager: S,
                    SystemLocale: r,
                    UserLocale: i,
                };
            window.ViewEnvHelper = C;
        },
    },
    __webpack_module_cache__ = {};
function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var s = (__webpack_module_cache__[e] = { exports: {} });
    return (__webpack_modules__[e](s, s.exports, __webpack_require__), s.exports);
}
((__webpack_require__.d = (e, t) => {
    for (var s in t)
        __webpack_require__.o(t, s) &&
            !__webpack_require__.o(e, s) &&
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
}),
    (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (__webpack_require__.r = (e) => {
        ('undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 }));
    }));
var __webpack_exports__ = {};
(() => {
    __webpack_require__.d(__webpack_exports__, { x: () => a });
    var e = __webpack_require__(859),
        t = __webpack_require__(461);
    const s =
            ((n = {
                cloneElement: () => reactExports.cloneElement,
                memo: () => reactExports.memo,
                useCallback: () => reactExports.useCallback,
                useMemo: () => reactExports.useMemo,
                useRef: () => reactExports.useRef,
            }),
            (o = {}),
            __webpack_require__.d(o, n),
            o),
        a = (0, s.memo)(({ args: a, children: n, decoratorID: o = 0, isLeftClick: r, isDisabled: i = !1 }) => {
            const l = (0, s.useRef)(null),
                c = (0, s.useCallback)(() => {
                    ((0, t.c9)(t.B0.CONTEXT_MENU, {
                        contentID: R.views.common.BackportContextMenu('resId'),
                        decoratorID: o,
                        isMouseEvent: !1,
                        on: !0,
                        args: a,
                    }),
                        e.O.sound.play.yes1());
                }, [a, o]),
                _ = (0, s.useCallback)(
                    (e) => {
                        ((r && 0 === e.button) || (!r && 2 === e.button)) && !i && c();
                    },
                    [r, i, c],
                );
            return (0, s.useMemo)(() => (0, s.cloneElement)(n, { onMouseDown: _, ref: l }), [n, _]);
        });
    var n, o;
})();
var __webpack_exports__ContextMenu = __webpack_exports__.x;
const root$6 = 'InteractionControls_root_c9a30f9e',
    base$6 = 'InteractionControls_146f6573',
    control = 'InteractionControls_control_e0e0953c',
    button$1 = 'InteractionControls_button_69089c04',
    icon = 'InteractionControls_icon_54c40dd8',
    icon__addFriend = 'InteractionControls_icon__addFriend_382e2b7b',
    icon__friendSent = 'InteractionControls_icon__friendSent_41931811',
    icon__friendBlacklist = 'InteractionControls_icon__friendBlacklist_7a788b92',
    icon__friend = 'InteractionControls_icon__friend_a14815f9',
    icon__platoonCanMade = 'InteractionControls_icon__platoonCanMade_a89f038a',
    icon__platoonSent = 'InteractionControls_icon__platoonSent_af35adbd',
    icon__platoonDone = 'InteractionControls_icon__platoonDone_684bbfd2',
    icon__platoonUnavailable = 'InteractionControls_icon__platoonUnavailable_f10b79f3',
    icon__menu = 'InteractionControls_icon__menu_4472d150',
    styles$6 = {
        root: root$6,
        base: base$6,
        control: control,
        button: button$1,
        icon: icon,
        icon__addFriend: icon__addFriend,
        icon__friendSent: icon__friendSent,
        icon__friendBlacklist: icon__friendBlacklist,
        icon__friend: icon__friend,
        icon__platoonCanMade: icon__platoonCanMade,
        icon__platoonSent: icon__platoonSent,
        icon__platoonDone: icon__platoonDone,
        icon__platoonUnavailable: icon__platoonUnavailable,
        icon__menu: icon__menu,
    },
    stopPropagation = (e) => {
        (e.stopPropagation(), e.preventDefault());
    },
    pickFriendshipButtonState = (e, t, s) => (e ? 'blacklisted' : t ? 'requestSent' : s ? 'friend' : 'default'),
    FriendshipResources = {
        blacklisted: {
            icon: styles$6.icon__friendBlacklist,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.removeFromBlacklist(),
            isButton: !0,
            isDisabled: !1,
        },
        friend: {
            icon: styles$6.icon__friend,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.friend(),
            isButton: !0,
            isDisabled: !0,
        },
        requestSent: {
            icon: styles$6.icon__friendSent,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.inviteSent(),
            isButton: !1,
            isDisabled: !1,
        },
        default: {
            icon: styles$6.icon__addFriend,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.sendInvite(),
            isButton: !0,
            isDisabled: !1,
        },
    },
    pickPlatoonButtonState = (e, t, s) =>
        s ? 'platoonSent' : e && !t ? 'platoonCanMade' : t ? 'platoonDone' : 'platoonUnavailable',
    PlatoonResources = {
        platoonSent: {
            icon: styles$6.icon__platoonSent,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonSent(),
            isButton: !1,
            isDisabled: !1,
        },
        platoonDone: {
            icon: styles$6.icon__platoonDone,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonDone(),
            isButton: !0,
            isDisabled: !0,
        },
        platoonUnavailable: {
            icon: styles$6.icon__platoonUnavailable,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonUnavailable(),
            isButton: !1,
            isDisabled: !1,
        },
        platoonCanMade: {
            icon: styles$6.icon__platoonCanMade,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonCanMade(),
            isButton: !0,
            isDisabled: !1,
        },
    },
    InteractionControls = observer(
        ({
            className: e,
            isInFriendList: t,
            playerId: s,
            userName: a,
            clanAbbrev: n,
            vehicleCD: o,
            clientArenaIdx: r,
            isBlacklisted: i,
            isFriendRequestSent: l,
            isPlatoonRequestCanMade: c,
            isPlatoonRequestInSquad: _,
            isPlatoonRequestSent: d,
        }) => {
            const {
                    controls: { sendFriendRequest: u, removeFromBlacklist: m, sendPlatoonInvitation: b },
                } = useModel(),
                p = pickFriendshipButtonState(i, l, t),
                x = pickPlatoonButtonState(c, _, d),
                y = reactExports.useCallback(
                    (e) => {
                        (stopPropagation(e), 'blacklisted' === p && m(s, a), 'default' === p && u(s, a, n));
                    },
                    [u, m, p, s, a, n],
                ),
                E = reactExports.useCallback(
                    (e) => {
                        (stopPropagation(e), 'platoonCanMade' === x && b(s, a));
                    },
                    [b, x, s, a],
                ),
                f = reactExports.useMemo(() => ({ body: PlatoonResources[x].tooltipBody }), [x]),
                T = reactExports.useMemo(
                    () => ({ playerId: s, userName: a, clanAbbrev: n, clientArenaIdx: r, vehicleCD: o }),
                    [s, a, n, r, o],
                ),
                h = reactExports.useCallback((e) => {
                    stopPropagation(e);
                }, []);
            return jsxRuntimeExports.jsxs('div', {
                className: cx(styles$6.base, e),
                children: [
                    jsxRuntimeExports.jsx(SimpleTooltip, {
                        body: FriendshipResources[p].tooltipBody,
                        children: jsxRuntimeExports.jsx('div', {
                            className: styles$6.control,
                            children: FriendshipResources[p].isButton
                                ? jsxRuntimeExports.jsx(CButton, {
                                      mixClass: styles$6.button,
                                      disabled: FriendshipResources[p].isDisabled,
                                      onClick: y,
                                      children: jsxRuntimeExports.jsx('div', {
                                          className: cx(styles$6.icon, FriendshipResources[p].icon),
                                      }),
                                  })
                                : jsxRuntimeExports.jsx('div', {
                                      className: cx(styles$6.icon, FriendshipResources[p].icon),
                                  }),
                        }),
                    }),
                    jsxRuntimeExports.jsx(SimpleTooltip, {
                        ...f,
                        children: jsxRuntimeExports.jsx('div', {
                            className: styles$6.control,
                            children: PlatoonResources[x].isButton
                                ? jsxRuntimeExports.jsx(CButton, {
                                      mixClass: styles$6.button,
                                      disabled: PlatoonResources[x].isDisabled,
                                      onClick: E,
                                      children: jsxRuntimeExports.jsx('div', {
                                          className: cx(styles$6.icon, PlatoonResources[x].icon),
                                      }),
                                  })
                                : jsxRuntimeExports.jsx('div', {
                                      className: cx(styles$6.icon, PlatoonResources[x].icon),
                                  }),
                        }),
                    }),
                    jsxRuntimeExports.jsx(SimpleTooltip, {
                        body: R.strings.last_stand_tooltips.battleResult.interaction.menu(),
                        children: jsxRuntimeExports.jsx('div', {
                            children: jsxRuntimeExports.jsx(__webpack_exports__ContextMenu, {
                                args: T,
                                isLeftClick: !0,
                                children: jsxRuntimeExports.jsx('div', {
                                    className: styles$6.control,
                                    children: jsxRuntimeExports.jsx(CButton, {
                                        mixClass: styles$6.button,
                                        type: ButtonType.secondary,
                                        onClick: h,
                                        children: jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$6.icon, styles$6.icon__menu),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                ],
            });
        },
    ),
    BOT_PLAYER_ID = 0,
    RowDecorator = reactExports.memo(function ({
        bgColor: e,
        textColor: t,
        children: s,
        playerId: a,
        userName: n,
        vehicleCD: o,
        isCurrentPlayer: r,
        clanAbbrev: i,
        clientArenaIdx: l,
        isAlive: c,
        isReady: _,
    }) {
        return jsxRuntimeExports.jsx(__webpack_exports__ContextMenu, {
            args: { playerId: a, userName: n, clanAbbrev: i, clientArenaIdx: l, vehicleCD: o },
            isDisabled: r,
            children: jsxRuntimeExports.jsxs('div', {
                className: cx(
                    styles$9.base,
                    e && styles$9[`base__${e}Bg`],
                    t && styles$9[`base__${t}Text`],
                    r && styles$9.base__currentPlayer,
                    (!_ || !c) && styles$9.base__disable,
                ),
                children: [
                    jsxRuntimeExports.jsx('div', { className: styles$9.backgroundHelper }),
                    jsxRuntimeExports.jsx('div', { className: styles$9.childrenWrapper, children: s }),
                ],
            }),
        });
    }),
    root$5 = 'PlayerInfo_root_56d02918',
    base$5 = 'PlayerInfo_c13516d9',
    nickName = 'PlayerInfo_nickName_7b81bced',
    nickName__withSquad = 'PlayerInfo_nickName__withSquad_7cb67087',
    userName = 'PlayerInfo_userName_948f5015',
    userName__withBadge = 'PlayerInfo_userName__withBadge_a8d4a0ad',
    name = 'PlayerInfo_name_20d67aee',
    base__currentPlayer$1 = 'PlayerInfo_base__currentPlayer_56d02918',
    base__tabWindow = 'PlayerInfo_base__tabWindow_56d02918',
    clanTag = 'PlayerInfo_clanTag_c2c71134',
    squad = 'PlayerInfo_squad_e7a2ab25',
    squad__highContrast = 'PlayerInfo_squad__highContrast_e04ef72b',
    squad__defaultAlly = 'PlayerInfo_squad__defaultAlly_507bf2dc',
    banIcon = 'PlayerInfo_banIcon_fa60558c',
    banIcon__warned = 'PlayerInfo_banIcon__warned_1c18ebaa',
    banIcon__banned = 'PlayerInfo_banIcon__banned_732735b5',
    styles$5 = {
        root: root$5,
        base: base$5,
        nickName: nickName,
        nickName__withSquad: nickName__withSquad,
        userName: userName,
        userName__withBadge: userName__withBadge,
        name: name,
        base__currentPlayer: base__currentPlayer$1,
        base__tabWindow: base__tabWindow,
        clanTag: clanTag,
        squad: squad,
        squad__highContrast: squad__highContrast,
        squad__defaultAlly: squad__defaultAlly,
        banIcon: banIcon,
        banIcon__warned: banIcon__warned,
        banIcon__banned: banIcon__banned,
    },
    TABLE_TYPE_BADGE = { [TableType.TabWindow]: 'default', [TableType.LeaderBoard]: 'default' },
    PlayerInfo = ({ user: e, squadNum: t, isOwnSquad: s = !1, banType: a, isCurrentPlayer: n }) => {
        const o = reactExports.useContext(TeamListTypeContext),
            r = TABLE_TYPE_BADGE[o],
            i = R.images.last_stand.gui.maps.icons.common.teamList.squad.$dyn(r),
            l = t > 0;
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$5.base, styles$5[`base__${o}`], n && styles$5.base__currentPlayer),
            children: [
                l &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(
                            styles$5.squad,
                            styles$5[`squad__${r}`],
                            s && 'default' === r && styles$5.squad__defaultAlly,
                        ),
                        style: { backgroundImage: `url('${i.$dyn(s ? 'ally' : 'other')}')` },
                        children: t,
                    }),
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$5.nickName, l && styles$5.nickName__withSquad),
                    children: [
                        a !== TeamMemberBanType.NotBanned &&
                            jsxRuntimeExports.jsx(SimpleTooltip, {
                                ...() => {
                                    if (a === TeamMemberBanType.NotBanned) return { body: void 0, header: void 0 };
                                    const e = R.strings.last_stand_tooltips.teamList.$dyn(a);
                                    if (n) {
                                        return { body: e.$dyn('self').$dyn('body'), header: e.$dyn('header') };
                                    }
                                    return { body: e.$dyn('body'), header: e.$dyn('header') };
                                },
                                children: jsxRuntimeExports.jsx('div', {
                                    className: cx(styles$5.banIcon, styles$5[`banIcon__${a}`]),
                                }),
                            }),
                        jsxRuntimeExports.jsx('div', {
                            className: styles$5.name,
                            children: jsxRuntimeExports.jsx(PlayerNickname, {
                                ...e,
                                igrType: e.igrType,
                                badge: e.badge,
                                userNameClassName: cx(
                                    styles$5.userName,
                                    e.badge.badgeID && styles$5.userName__withBadge,
                                ),
                                suffixBadge: e.suffixBadge,
                                clanTagClassName: styles$5.clanTag,
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    root$4 = 'StatValueDecorator_root_5170dfab',
    base$4 = 'StatValueDecorator_49276f9',
    base__max = 'StatValueDecorator_base__max_9ad2cb6a',
    crown = 'StatValueDecorator_crown_94f6c06b',
    crown__gold = 'StatValueDecorator_crown__gold_702e5240',
    base__currentPlayer = 'StatValueDecorator_base__currentPlayer_5170dfab',
    crown__silver = 'StatValueDecorator_crown__silver_14f41da8',
    crown__bronze = 'StatValueDecorator_crown__bronze_60a3d8e7',
    amount = 'StatValueDecorator_amount_e1ea0d5c',
    styles$4 = {
        root: root$4,
        base: base$4,
        base__max: base__max,
        crown: crown,
        crown__gold: crown__gold,
        base__currentPlayer: base__currentPlayer,
        crown__silver: crown__silver,
        crown__bronze: crown__bronze,
        amount: amount,
    },
    CROWN_BY_PLACE = ['gold', 'silver', 'bronze'],
    StatValueDecorator = reactExports.memo(function ({
        current: e,
        isMax: t,
        column: s,
        tableType: a,
        isCrowned: n,
        isCurrentPlayer: o,
    }) {
        const r = getNumberFormat(e, 1);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$4.base, o && styles$4.base__currentPlayer, t && styles$4.base__max),
            children: [
                n &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(
                            styles$4.crown,
                            a === TableType.LeaderBoard &&
                                s === ColumnEnum.Place &&
                                styles$4[`crown__${CROWN_BY_PLACE[e - 1]}`],
                        ),
                    }),
                jsxRuntimeExports.jsx('span', { className: styles$4.amount, children: r }),
            ],
        });
    }),
    root$3 = 'VehicleInfo_root_9c9aeed',
    base$3 = 'VehicleInfo_30590fa0',
    label = 'VehicleInfo_label_5af110b',
    premiumIGR = 'VehicleInfo_premiumIGR_aca7dde6',
    styles$3 = { root: root$3, base: base$3, label: label, premiumIGR: premiumIGR },
    VehicleInfo = observer(({ vehicleShortName: e, vehicleType: t, color: s, tags: a }) =>
        jsxRuntimeExports.jsxs('div', {
            className: styles$3.base,
            children: [
                jsxRuntimeExports.jsx(VehicleType, { size: VehicleTypeSize.C38x38, color: s, type: t }),
                checkForTag(a, PREMIUM_IGR_TAG) && jsxRuntimeExports.jsx('div', { className: styles$3.premiumIGR }),
                jsxRuntimeExports.jsx(ExtendedText, {
                    text: e,
                    classMix: styles$3.label,
                    isTruncationAvailable: !0,
                    isTooltipEnable: !0,
                }),
            ],
        }),
    ),
    PlayerRow = observer(
        ({
            playerId: e,
            rowStyle: t,
            isCurrentPlayer: s,
            isOwnSquad: a,
            squadNum: n,
            user: o,
            vehicle: r,
            banType: i,
            stats: l,
            columnsMaxValue: c,
            visibleColumns: _,
            isReady: d,
            isPlatoonRequestSent: u,
            isInFriendList: m,
            isPlatoonRequestCanMade: b,
            isPlatoonRequestInSquad: p,
            isFriendRequestSent: x,
            isBlacklisted: y,
            tableType: E,
            isAlive: R,
        }) => {
            const { model: f } = useModel(),
                { clientArenaIdx: T, contextMenuPlayerId: h } = f.root.get(),
                v = (e) => {
                    switch (e) {
                        case VEHICLE_COLUMN:
                            return CellStyleEnum.VehicleIcon;
                        case DAMAGE_COLUMN:
                            return CellStyleEnum.Damage;
                    }
                    return CellStyleEnum.Stats;
                },
                g = e === BOT_PLAYER_ID || !s,
                w = s || a ? VehicleTypeColor.WhiteSpanishBright : VehicleTypeColor.Gray;
            return jsxRuntimeExports.jsxs(RowDecorator, {
                ...t,
                playerId: e,
                userName: o.userName,
                vehicleCD: r.vehicleCD,
                clanAbbrev: o.clanAbbrev,
                isCurrentPlayer: s,
                isReady: d,
                clientArenaIdx: T,
                contextMenuPlayerId: h,
                isAlive: E !== TableType.TabWindow || R,
                children: [
                    jsxRuntimeExports.jsx(CellDecorator, {
                        cellStyle: CellStyleEnum.Player,
                        isCurrentPlayer: s,
                        children: jsxRuntimeExports.jsx(PlayerInfo, {
                            user: o,
                            squadNum: n,
                            isOwnSquad: a,
                            banType: i,
                            isCurrentPlayer: s,
                        }),
                    }),
                    jsxRuntimeExports.jsx(CellDecorator, {
                        cellStyle: CellStyleEnum.Actions,
                        isCurrentPlayer: s,
                        children:
                            g &&
                            jsxRuntimeExports.jsx(InteractionControls, {
                                clientArenaIdx: T,
                                clanAbbrev: o.clanAbbrev,
                                vehicleCD: r.vehicleCD,
                                playerId: e,
                                userName: o.userName,
                                isBlacklisted: y,
                                isFriendRequestSent: x,
                                isInFriendList: m,
                                isPlatoonRequestCanMade: b,
                                isPlatoonRequestInSquad: p,
                                isPlatoonRequestSent: u,
                            }),
                    }),
                    jsxRuntimeExports.jsx(CellDecorator, {
                        cellStyle: CellStyleEnum.Vehicle,
                        children: jsxRuntimeExports.jsx(VehicleInfo, { ...r, color: w }),
                    }),
                    _.map((e) => {
                        const t = e === ColumnEnum.Place ? 1 === l[e] : c[e] === l[e] && l[e] > 0,
                            a = !l[ColumnEnum.Damage];
                        return jsxRuntimeExports.jsx(
                            CellDecorator,
                            {
                                cellStyle: v(e),
                                children: jsxRuntimeExports.jsx(StatValueDecorator, {
                                    tableType: E,
                                    column: e,
                                    current: l[e],
                                    isMax: t,
                                    isCrowned: !a && (e === ColumnEnum.Place ? l[e] < 4 : t),
                                    isCurrentPlayer: s,
                                }),
                            },
                            e,
                        );
                    }),
                ],
            });
        },
    );
var RowDecoratorBgColorEnum = ((e) => ((e.Default = 'default'), (e.Red = 'red'), (e.Gold = 'gold'), e))(
        RowDecoratorBgColorEnum || {},
    ),
    RowDecoratorTextColorEnum = ((e) => ((e.Default = 'default'), (e.Gold = 'gold'), e))(
        RowDecoratorTextColorEnum || {},
    );
const root$2 = 'TeamList_root_68eb33e8',
    base$2 = 'TeamList_1e6e4250',
    styles$2 = { root: root$2, base: base$2 },
    getRowStyle = (e) => ({
        bgColor: e.isCurrentPlayer ? RowDecoratorBgColorEnum.Gold : RowDecoratorBgColorEnum.Default,
        textColor:
            e.isCurrentPlayer || e.isOwnSquad ? RowDecoratorTextColorEnum.Gold : RowDecoratorTextColorEnum.Default,
    }),
    TeamList = observer(({ className: e, isSortable: t = !1, tableType: s = TableType.TabWindow }) => {
        const { model: a, controls: n } = useModel(),
            o = a.sortDirection.get(),
            r = a.sortBy.get(),
            i = a.computes.getSortedTeam(),
            l = map(a.visibleColumns.get(), identity),
            c = reactExports.useCallback(
                (e) => {
                    n.setSortBy(e);
                },
                [n],
            ),
            _ = {};
        return (
            l.forEach((e) => {
                const t = map(a.team.get(), (t) => t.stats[e]);
                _[e] = Math.max(...t);
            }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$2.base, e),
                children: jsxRuntimeExports.jsxs(TeamListTypeContext.Provider, {
                    value: s,
                    children: [
                        jsxRuntimeExports.jsx(HeaderRow, {
                            visibleColumns: l,
                            sortEnabled: t,
                            onSortChanged: c,
                            sortBy: r,
                            sortDirection: o,
                            tableType: s,
                        }),
                        i.map((e) =>
                            reactExports.createElement(PlayerRow, {
                                ...e,
                                rowStyle: getRowStyle(e),
                                columnsMaxValue: _,
                                key: e.id,
                                visibleColumns: l,
                                isHoverEnabled: s === TableType.LeaderBoard,
                                tableType: s,
                            }),
                        ),
                    ],
                }),
            })
        );
    }),
    TeamStatsApp = (e) => jsxRuntimeExports.jsx(TeamList, { ...e }),
    TeamStats = reactExports.memo(function (e) {
        const { resId: t, ...s } = e,
            a = reactExports.useMemo(() => ({ rootId: t }), [t]);
        return jsxRuntimeExports.jsx(MediaWrapper, {
            children: jsxRuntimeExports.jsx(ModelProvider, {
                options: a,
                children: jsxRuntimeExports.jsx(TeamStatsApp, { ...s }),
            }),
        });
    }),
    root$1 = 'TeamResults_root_d769cec3',
    base$1 = 'TeamResults_9da6cb72',
    table = 'TeamResults_table_28d26fb8',
    styles$1 = { root: root$1, base: base$1, table: table },
    TeamResults = () =>
        jsxRuntimeExports.jsx('div', {
            className: styles$1.base,
            children: jsxRuntimeExports.jsx('div', {
                className: styles$1.table,
                children: jsxRuntimeExports.jsx(TeamStats, {
                    resId: R.aliases.last_stand.shared.TeamStats('resId'),
                    tableType: TableType.LeaderBoard,
                    isSortable: !0,
                }),
            }),
        }),
    root = 'BattleResultApp_root_c41f5b7d',
    base = 'BattleResultApp_e15a7f4d',
    closeBtn = 'BattleResultApp_closeBtn_73ecb423',
    bg = 'BattleResultApp_bg_f4fbe486',
    vignette = 'BattleResultApp_vignette_5d491938',
    containerLeftSide = 'BattleResultApp_containerLeftSide_49b3d91e',
    block = 'BattleResultApp_block_852b511f',
    block__isRight = 'BattleResultApp_block__isRight_b9410de0',
    playerInfo = 'BattleResultApp_playerInfo_f793b670',
    battleInfo = 'BattleResultApp_battleInfo_1c364e06',
    buttonWrapper = 'BattleResultApp_buttonWrapper_6b00fa09',
    button = 'BattleResultApp_button_8e93ab09',
    backBlock = 'BattleResultApp_backBlock_a51ec672',
    gradient = 'BattleResultApp_gradient_ea0586e1',
    base__lose = 'BattleResultApp_base__lose_c41f5b7d',
    fadeInLose = 'BattleResultApp_fadeInLose_c41f5b7d',
    base__win = 'BattleResultApp_base__win_c41f5b7d',
    fadeInWin = 'BattleResultApp_fadeInWin_c41f5b7d',
    styles = {
        root: root,
        base: base,
        closeBtn: closeBtn,
        bg: bg,
        vignette: vignette,
        containerLeftSide: containerLeftSide,
        block: block,
        block__isRight: block__isRight,
        playerInfo: playerInfo,
        battleInfo: battleInfo,
        buttonWrapper: buttonWrapper,
        button: button,
        backBlock: backBlock,
        gradient: gradient,
        base__lose: base__lose,
        fadeInLose: fadeInLose,
        base__win: base__win,
        fadeInWin: fadeInWin,
    },
    CONTENT_WIDTH = 930,
    CONTENT_LEFT_INDENT = 85,
    BG_PATH = R.images.last_stand.gui.maps.icons.backgrounds.battle_result,
    BattleResultApp = observer(() => {
        const { model: e, controls: t } = useModel$1(),
            { isWin: s, difficultyLevel: a } = e.root.get();
        (useKeydownListener(keyCodes.ESCAPE, t.close), useKeydownListener(keyCodes.ENTER, t.close));
        const [n, o] = reactExports.useState(!1),
            [r, i] = reactExports.useState(getSize('rem')),
            [l, c] = reactExports.useState(!1);
        return (
            reactExports.useEffect(() => {
                const e = () => {
                    (2 * (CONTENT_WIDTH + CONTENT_LEFT_INDENT) < r.width ? c(!0) : c(!1), i(getSize('rem')));
                };
                (e(), onRescale(e), onResize(e));
            }, [r.width]),
            reactExports.useEffect(() => {
                const e = () => {
                    o(!0);
                };
                return (
                    window.addEventListener('keydown', e),
                    () => {
                        window.removeEventListener('keydown', e);
                    }
                );
            }, []),
            jsxRuntimeExports.jsxs('div', {
                className: cx(styles.base, s ? styles.base__win : styles.base__lose),
                onClick: () => o(!0),
                children: [
                    jsxRuntimeExports.jsxs(SpringWrapper, {
                        ...getAnimation(AnimEnum.BG, s),
                        isCanceled: n,
                        children: [
                            jsxRuntimeExports.jsx('div', {
                                className: styles.closeBtn,
                                children: jsxRuntimeExports.jsx(TextButton, {
                                    caption: R.strings.last_stand_lobby.common.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: t.close,
                                }),
                            }),
                            jsxRuntimeExports.jsx('div', {
                                className: styles.bg,
                                style: {
                                    backgroundImage: `url(${s ? BG_PATH.$dyn(`victory_${a}`) : BG_PATH.$dyn(`defeat_${a}`)})`,
                                },
                            }),
                            jsxRuntimeExports.jsx('div', { className: styles.vignette }),
                        ],
                    }),
                    jsxRuntimeExports.jsx('div', {
                        className: styles.containerLeftSide,
                        children: jsxRuntimeExports.jsxs('div', {
                            className: cx(styles.block, l && styles.block__isRight),
                            children: [
                                jsxRuntimeExports.jsx('div', { className: styles.gradient }),
                                jsxRuntimeExports.jsx(Header, { isAnimCanceled: n }),
                                jsxRuntimeExports.jsxs(SpringWrapper, {
                                    ...getAnimation(AnimEnum.RIBBON, s),
                                    isCanceled: n,
                                    children: [
                                        jsxRuntimeExports.jsx('div', { className: styles.backBlock }),
                                        jsxRuntimeExports.jsx(Rewards, { isAnimCanceled: n }),
                                    ],
                                }),
                                jsxRuntimeExports.jsx(SpringWrapper, {
                                    ...getAnimation(AnimEnum.TEAM_RESULTS, s),
                                    isCanceled: n,
                                    children: jsxRuntimeExports.jsx(TeamResults, {}),
                                }),
                            ],
                        }),
                    }),
                    jsxRuntimeExports.jsx(SpringWrapper, {
                        ...getAnimation(AnimEnum.BATTLE_INFO, s),
                        isCanceled: n,
                        className: styles.battleInfo,
                        children: jsxRuntimeExports.jsx(BattleInfo, {}),
                    }),
                    jsxRuntimeExports.jsx(SpringWrapper, {
                        ...getAnimation(AnimEnum.PLAYER_INFO, s),
                        isCanceled: n,
                        className: styles.playerInfo,
                        children: jsxRuntimeExports.jsx(PlayerInfo$1, {}),
                    }),
                    jsxRuntimeExports.jsx(SpringWrapper, {
                        ...getAnimation(AnimEnum.BUTTON, s),
                        isCanceled: n,
                        className: styles.buttonWrapper,
                        children: jsxRuntimeExports.jsx(CButton, {
                            mixClass: styles.button,
                            onClick: t.close,
                            children: R.strings.last_stand_lobby.common.yes(),
                        }),
                    }),
                ],
            })
        );
    });
runView(jsxRuntimeExports.jsx(ModelProvider$1, { children: jsxRuntimeExports.jsx(BattleResultApp, {}) }));
