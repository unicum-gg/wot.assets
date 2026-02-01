import { j as e, w as s, x as a, r as t, T as r, U as o, R as n, y as i, z as d } from '../../../chunks/vendor.js';
import {
    cT as l,
    aO as _,
    cU as c,
    cV as p,
    ct as f,
    F as m,
    I as g,
    b as u,
    M as h,
    m as b,
    cW as v,
    i as k,
    Z as T,
    aw as C,
    bB as x,
    cX as I,
    ck as B,
    cY as j,
    cZ as w,
    cl as P,
    c_ as L,
    c$ as A,
    p as N,
    j as S,
    R as y,
    d0 as V,
    d1 as U,
    cs as W,
    l as Q,
    d2 as E,
    d3 as H,
    n as O,
    bg as F,
    bf as z,
    d4 as $,
    h as M,
    d5 as G,
    d6 as D,
    k as q,
    o as K,
    bD as Z,
    r as X,
    U as Y,
} from '../../../chunks/lib.js';
import { S as J, a as ee } from '../../../chunks/schedule_subheading.js';
import { P as se, a as ae } from '../../../chunks/consts.js';
import { u as te } from '../../../chunks/useParseRewards.js';
/* empty css                     */ import '../../../chunks/use_server_time_polling.js';
const re = (e, s) =>
        Object.keys(e).length === Object.keys(s).length &&
        Object.keys(e).every((a) => Object.prototype.hasOwnProperty.call(s, a) && e[a] === s[a]),
    oe = { 0: 'firstCondition', 1: 'secondCondition' },
    ne = (e, s) => {
        const a = [];
        if ('or' === e.conditionType || 'and' === e.conditionType)
            e.items.forEach((e) => {
                const t = l(e);
                t && a.push(...ne(t, s));
            });
        else {
            const { descrData: t } = e;
            let { titleData: r, current: o, total: n, earned: i, iconKey: d } = e;
            const l = _(s, 0);
            (l && ((r = t || l.descrData), (d = d || l.iconKey), ({ current: o, total: n, earned: i } = l)),
                0 === n && (r = t),
                a.push({ condition: r, lastValue: i, currentValue: o, maxValue: n, icon: d }));
        }
        return a;
    },
    ie = (e, s, a) => {
        const t = {};
        let r = {};
        return (
            ne(e, s).forEach(({ condition: e, lastValue: s, currentValue: a, maxValue: o }, n) => {
                ((t[oe[n]] = ((e, s) =>
                    c(e, p.left)
                        .flat()
                        .map((e, a) => (0 === a && s > 0 && (e = e.toLowerCase()), e)))(e, n)),
                    (r = { lastValue: s, currentValue: a, maxValue: o }));
            }),
            { taskConditions: [{ conditions: t, progression: { status: a, ...r } }] }
        );
    },
    de = (e) => ('secondCondition' in e ? 'multiConditions' : 'oneCondition'),
    le = {
        base: 'Progression_e617c990',
        progression: 'Progression_df260aee',
        base__completed: 'Progression_base__completed_61efd8f5',
        progressionNumerical: 'Progression_progressionNumerical_43601a0c',
        currentValue: 'Progression_currentValue_824c0ea8',
        base__completedWasVisited: 'Progression_base__completedWasVisited_61efd8f5',
        separator: 'Progression_separator_d6fd8fdd',
        progressBar: 'Progression_progressBar_74cbfd25',
        fadeIn: 'Progression_fadeIn_61efd8f5',
        fadeInThreeQuarters: 'Progression_fadeInThreeQuarters_61efd8f5',
        fadeInHalf: 'Progression_fadeInHalf_61efd8f5',
        fadeOut: 'Progression_fadeOut_61efd8f5',
        fadeInWithScale: 'Progression_fadeInWithScale_61efd8f5',
        slideUp: 'Progression_slideUp_61efd8f5',
        scale: 'Progression_scale_61efd8f5',
        raysAppearance: 'Progression_raysAppearance_61efd8f5',
        rotate: 'Progression_rotate_61efd8f5',
        'reverse-rotate': 'Progression_reverse-rotate_61efd8f5',
        glowAppearance: 'Progression_glowAppearance_61efd8f5',
        highlightAppearance: 'Progression_highlightAppearance_61efd8f5',
        blink: 'Progression_blink_61efd8f5',
        slideUpIn: 'Progression_slideUpIn_61efd8f5',
        'add-blur': 'Progression_add-blur_61efd8f5',
        hide: 'Progression_hide_61efd8f5',
        show: 'Progression_show_61efd8f5',
    },
    _e = ({ currentValue: a, maxValue: t, lastValue: r, statusAnimation: o, updateStatusAnimation: n }) =>
        e.jsx('div', {
            className: s(le.base, le[`base__${o}`]),
            children: e.jsxs('div', {
                className: le.progression,
                children: [
                    e.jsxs('div', {
                        className: le.progressionNumerical,
                        children: [
                            e.jsx('span', {
                                className: s(le.currentValue, Boolean(a) && le.currentValue__inProgress),
                                children: a,
                            }),
                            e.jsx('span', { className: le.separator, children: R.strings.common.common.slash() }),
                            e.jsx('span', { children: t }),
                        ],
                    }),
                    e.jsx('div', {
                        className: le.progressBar,
                        children: e.jsx(se, { size: f.Small, value: a, deltaFrom: a - r, maxValue: t, onComplete: n }),
                    }),
                ],
            }),
        }),
    ce = {
        base: 'TaskCondition_3f718053',
        base__completed: 'TaskCondition_base__completed_f5d779ca',
        base__completedWasVisited: 'TaskCondition_base__completedWasVisited_ffe6fe0',
        text: 'TaskCondition_text_3121ac14',
        fadeIn: 'TaskCondition_fadeIn_f5d779ca',
        fadeInThreeQuarters: 'TaskCondition_fadeInThreeQuarters_f5d779ca',
        fadeInHalf: 'TaskCondition_fadeInHalf_f5d779ca',
        fadeOut: 'TaskCondition_fadeOut_f5d779ca',
        fadeInWithScale: 'TaskCondition_fadeInWithScale_f5d779ca',
        slideUp: 'TaskCondition_slideUp_f5d779ca',
        scale: 'TaskCondition_scale_f5d779ca',
        raysAppearance: 'TaskCondition_raysAppearance_f5d779ca',
        rotate: 'TaskCondition_rotate_f5d779ca',
        'reverse-rotate': 'TaskCondition_reverse-rotate_f5d779ca',
        glowAppearance: 'TaskCondition_glowAppearance_f5d779ca',
        highlightAppearance: 'TaskCondition_highlightAppearance_f5d779ca',
        blink: 'TaskCondition_blink_f5d779ca',
        slideUpIn: 'TaskCondition_slideUpIn_f5d779ca',
    },
    pe = R.strings.comp7_light.progressionView.battleQuests,
    fe = a(function ({ conditions: a, setStatusAnimation: r, statusAnimation: o, progression: n, conditionIndex: i }) {
        const { model: d } = Ce(),
            l = d.computes.missionCompletedVisitedStatus,
            _ = t.useCallback(() => {
                r(l(i));
            }, [i, l, r]),
            c = { ...n, statusAnimation: o, updateStatusAnimation: _ },
            { maxValue: p, status: f } = n,
            g = 0 === p;
        return (
            t.useEffect(() => {
                f === ke ? g && _() : r(he.inProgress);
            }, [g, r, f, _]),
            e.jsxs('div', {
                className: s(ce.base, ce[`base__${o}`]),
                children: [
                    e.jsx(m, { text: `${pe.$dyn(de(a))}`, classMix: s(ce.text, ce[`text__${o}`]), binding: { ...a } }),
                    Boolean(p) && e.jsx(_e, { ...c }),
                ],
            })
        );
    }),
    me = {
        base: 'TaskType_3456a7ae',
        typeIcon: 'TaskType_typeIcon_ff980a3d',
        base__completed: 'TaskType_base__completed_490b70af',
        hide: 'TaskType_hide_490b70af',
        base__completedWasVisited: 'TaskType_base__completedWasVisited_490b70af',
        glow: 'TaskType_glow_419d98e5',
        completedIcon: 'TaskType_completedIcon_af449a47',
        fadeIn: 'TaskType_fadeIn_490b70af',
        fadeInThreeQuarters: 'TaskType_fadeInThreeQuarters_490b70af',
        fadeInHalf: 'TaskType_fadeInHalf_490b70af',
        fadeOut: 'TaskType_fadeOut_490b70af',
        fadeInWithScale: 'TaskType_fadeInWithScale_490b70af',
        slideUp: 'TaskType_slideUp_490b70af',
        scale: 'TaskType_scale_490b70af',
        raysAppearance: 'TaskType_raysAppearance_490b70af',
        rotate: 'TaskType_rotate_490b70af',
        'reverse-rotate': 'TaskType_reverse-rotate_490b70af',
        glowAppearance: 'TaskType_glowAppearance_490b70af',
        highlightAppearance: 'TaskType_highlightAppearance_490b70af',
        blink: 'TaskType_blink_490b70af',
        slideUpIn: 'TaskType_slideUpIn_490b70af',
        'add-blur': 'TaskType_add-blur_490b70af',
        show: 'TaskType_show_490b70af',
    },
    ge = ({ taskBattleIcon: a, statusAnimation: t }) =>
        e.jsxs('div', {
            className: s(me.base, me[`base__${t}`]),
            children: [
                e.jsx('div', {
                    className: me.typeIcon,
                    style: { backgroundImage: `url('${R.images.gui.maps.icons.missions.daily.$dyn(a)}')` },
                    children: e.jsx('div', { className: me.glow }),
                }),
                e.jsx('div', { className: me.completedIcon }),
            ],
        }),
    ue = {
        base: 'TaskBattle_df790388',
        taskType: 'TaskBattle_taskType_41ef2b29',
        conditions: 'TaskBattle_conditions_ba04c76e',
        awards: 'TaskBattle_awards_f631c565',
        awardsList: 'TaskBattle_awardsList_2518e26b',
        base__completed: 'TaskBattle_base__completed_79672d7f',
        'add-blur': 'TaskBattle_add-blur_79672d7f',
        base__completedWasVisited: 'TaskBattle_base__completedWasVisited_79672d7f',
        topGlow: 'TaskBattle_topGlow_d555aeae',
        award: 'TaskBattle_award_8fe96421',
        topBorderGradient: 'TaskBattle_topBorderGradient_3695c66f',
        centerBorderCommon: 'TaskBattle_centerBorderCommon_46b065cf',
        outerBorderCommon: 'TaskBattle_outerBorderCommon_2cbdf79',
        innerBorderCommon: 'TaskBattle_innerBorderCommon_de37a82',
        centerBorderBottom: 'TaskBattle_centerBorderBottom_445802c8',
        outerBorderBottom: 'TaskBattle_outerBorderBottom_38b316f3',
        innerBorderBottom: 'TaskBattle_innerBorderBottom_10bddc9',
        separator__left: 'TaskBattle_separator__left_9925396e',
        separator__right: 'TaskBattle_separator__right_789b80ab',
        separator: 'TaskBattle_separator_a08d38ec',
        fadeIn: 'TaskBattle_fadeIn_79672d7f',
        fadeInThreeQuarters: 'TaskBattle_fadeInThreeQuarters_79672d7f',
        fadeInHalf: 'TaskBattle_fadeInHalf_79672d7f',
        fadeOut: 'TaskBattle_fadeOut_79672d7f',
        fadeInWithScale: 'TaskBattle_fadeInWithScale_79672d7f',
        slideUp: 'TaskBattle_slideUp_79672d7f',
        scale: 'TaskBattle_scale_79672d7f',
        raysAppearance: 'TaskBattle_raysAppearance_79672d7f',
        rotate: 'TaskBattle_rotate_79672d7f',
        'reverse-rotate': 'TaskBattle_reverse-rotate_79672d7f',
        glowAppearance: 'TaskBattle_glowAppearance_79672d7f',
        highlightAppearance: 'TaskBattle_highlightAppearance_79672d7f',
        blink: 'TaskBattle_blink_79672d7f',
        slideUpIn: 'TaskBattle_slideUpIn_79672d7f',
        hide: 'TaskBattle_hide_79672d7f',
        show: 'TaskBattle_show_79672d7f',
    },
    he = {
        inProgress: 'inProgress',
        completed: 'completed',
        completedWasVisited: 'completedWasVisited',
        allCompletedTasksVisited: 'allCompletedTasksVisited',
    },
    be = a(function ({ taskConditions: a, awardsBattle: r, taskBattleIcon: o, index: n }) {
        const [i, d] = t.useState(he.inProgress),
            { parsedRewards: l } = te(r, g.Small),
            { mediaSize: _ } = u(),
            c = _ >= h.Large ? 2 : 1;
        return e.jsxs('div', {
            className: s(ue.base, ue[`base__${i}`]),
            children: [
                e.jsx('div', { className: ue.centerBorderCommon }),
                e.jsx('div', { className: ue.outerBorderCommon }),
                e.jsx('div', { className: ue.innerBorderCommon }),
                e.jsx('div', { className: ue.topGlow }),
                e.jsx('div', { className: ue.topBorderGradient }),
                e.jsx('div', {
                    className: ue.taskType,
                    children: e.jsx(ge, { taskBattleIcon: o, statusAnimation: i }),
                }),
                e.jsx('div', {
                    className: ue.conditions,
                    children: b(a, ({ conditions: s, progression: a }) =>
                        e.jsx(
                            fe,
                            {
                                conditionIndex: n,
                                progression: a,
                                conditions: s,
                                setStatusAnimation: d,
                                statusAnimation: i,
                            },
                            a.currentValue,
                        ),
                    ),
                }),
                e.jsxs('div', {
                    className: ue.awards,
                    children: [
                        e.jsxs('div', {
                            className: s(ue.separator, ue.separator__left),
                            children: [
                                e.jsx('div', { className: ue.centerBorderBottom }),
                                e.jsx('div', { className: ue.outerBorderBottom }),
                                e.jsx('div', { className: ue.innerBorderBottom }),
                            ],
                        }),
                        e.jsx('div', {
                            className: ue.awardsList,
                            children: e.jsx(v, {
                                data: l,
                                rewardItemClassMix: ue.award,
                                count: c,
                                size: g.Small,
                                boxRewardTooltip: {
                                    contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                    args: { fromIndex: c, index: n },
                                },
                            }),
                        }),
                        e.jsxs('div', {
                            className: s(ue.separator, ue.separator__right),
                            children: [
                                e.jsx('div', { className: ue.centerBorderBottom }),
                                e.jsx('div', { className: ue.outerBorderBottom }),
                                e.jsx('div', { className: ue.innerBorderBottom }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    });
var ve = ((e) => (
    (e[(e.Scrolling = 0)] = 'Scrolling'),
    (e[(e.ProgressChange = 1)] = 'ProgressChange'),
    (e[(e.HighlightCard = 2)] = 'HighlightCard'),
    (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
    (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
    (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished'),
    e
))(ve || {});
const ke = 'done',
    [Te, Ce] = k()(
        ({ observableModel: e }) => {
            const s = {
                    battleQuests: e.array('battleQuests.tasksBattle'),
                    currentTimerDate: e.primitives(['currentTimerDate'], 'battleQuests'),
                    scheduleInfo: e.primitives(['serverTimestamp', 'endTimestamp'], 'scheduleInfo.season'),
                    missionsCompletedVisited: e.array('battleQuests.missionsCompletedVisited'),
                    progressLevels: e.array('progressLevels'),
                    ...e.primitives(['state', 'curProgressPoints', 'prevProgressPoints', 'pointsForLevel']),
                    progressAnimationState: r.box(0),
                },
                a = o(() => Math.floor(s.curProgressPoints.get() / s.pointsForLevel.get())),
                t = o(() => Math.floor(s.prevProgressPoints.get() / s.pointsForLevel.get())),
                n = o(
                    (e) => ({
                        wasProgressionVisited: t() === a(),
                        isRecentlyCompletedLevel: t() <= e && e <= a(),
                        isPrevLevel: e <= t(),
                    }),
                    { equals: re },
                ),
                i = o((e) => x(0, s.pointsForLevel.get(), s.curProgressPoints.get() - e * s.pointsForLevel.get())),
                d = o(
                    () =>
                        b(s.battleQuests.get(), (e) => ({
                            ...ie(e.postBattleCondition, e.bonusCondition.items, e.status),
                            awardsBattle: b(e.bonuses, (e) => e),
                            taskBattleIcon: e.icon,
                        })),
                    { equals: I },
                ),
                l = o(() => {
                    let e = 0;
                    return (
                        d().forEach((s) => {
                            var a;
                            (null == (a = s.taskConditions[0]) ? void 0 : a.progression.status) === ke && ++e;
                        }),
                        e
                    );
                }),
                c = o(
                    () => {
                        const e = a(),
                            t = s.progressLevels.get();
                        return b(s.progressLevels.get(), ({ rewards: s }, a) => ({
                            level: a + 1,
                            isCompleted: a < e,
                            isActive: a === e,
                            isLast: a === t.length - 1,
                            rewards: s,
                        }));
                    },
                    { equals: I },
                ),
                p = o(
                    () =>
                        s.scheduleInfo.endTimestamp.get() - s.scheduleInfo.serverTimestamp.get() <
                        s.currentTimerDate.currentTimerDate.get(),
                ),
                f = o(() => {
                    var e, a;
                    const t = d();
                    for (let s = 0; s < t.length; s++)
                        if (
                            (null == (a = null == (e = t[s]) ? void 0 : e.taskConditions[0])
                                ? void 0
                                : a.progression.status) !== ke ||
                            p()
                        )
                            return he.inProgress;
                    return C(s.missionsCompletedVisited.get(), (e) => e) ? he.allCompletedTasksVisited : he.completed;
                }),
                m = o((e) => {
                    var a, t;
                    const r =
                            null == (t = null == (a = _(d(), e)) ? void 0 : a.taskConditions[0])
                                ? void 0
                                : t.progression.status,
                        o = _(s.missionsCompletedVisited.get(), e);
                    return r !== ke ? he.inProgress : o ? he.completedWasVisited : he.completed;
                }),
                g = o(() => {
                    const e = s.pointsForLevel.get() * s.progressLevels.get().length;
                    return s.curProgressPoints.get() >= e;
                }),
                u = o(() => g() && s.curProgressPoints.get() === s.prevProgressPoints.get());
            return {
                ...s,
                ...s.currentTimerDate,
                computes: {
                    levels: c,
                    battleQuests: d,
                    currentLevel: a,
                    levelStatus: n,
                    currentPointsForLevel: i,
                    battleTasksStatus: f,
                    isProgressionCompleted: g,
                    wasProgressionCompletedBeforeStart: u,
                    missionCompletedVisitedStatus: m,
                    numberCompletedQuests: l,
                    isEventEndsBeforeNewQuests: p,
                },
            };
        },
        ({ externalModel: e, model: s }) => ({
            ...T({
                finishScrolling: () => s.progressAnimationState.set(1),
                finishProgressionChange: () => s.progressAnimationState.set(2),
                finishHighlightCard: () => s.progressAnimationState.set(3),
                completeProgression: (e) => s.progressAnimationState.set(e ? 5 : 4),
            }),
            onClose: e.createCallbackNoArgs('onClose'),
            onAboutClicked: e.createCallbackNoArgs('onAboutClicked'),
        }),
    ),
    xe = 'Separator_7a87dea6',
    Ie = 'Separator_73ff7070',
    Be = ({ children: s }) =>
        e.jsxs('div', {
            className: xe,
            children: [e.jsx('div', { className: Ie }), s, e.jsx('div', { className: Ie })],
        }),
    je = {
        base: 'Timer_dac0a0aa',
        icon: 'Timer_icon_5359fa',
        icon__x32x32: 'Timer_icon__x32x32_7723ce0f',
        icon__x48x48: 'Timer_icon__x48x48_764d8651',
        label: 'Timer_label_ec8126ca',
        label__x32x32: 'Timer_label__x32x32_13cccf38',
        label__x48x48: 'Timer_label__x48x48_e3a9b542',
        fadeIn: 'Timer_fadeIn_6ee5dd6c',
        fadeInThreeQuarters: 'Timer_fadeInThreeQuarters_6ee5dd6c',
        fadeInHalf: 'Timer_fadeInHalf_6ee5dd6c',
        fadeOut: 'Timer_fadeOut_6ee5dd6c',
        fadeInWithScale: 'Timer_fadeInWithScale_6ee5dd6c',
        slideUp: 'Timer_slideUp_6ee5dd6c',
        scale: 'Timer_scale_6ee5dd6c',
        raysAppearance: 'Timer_raysAppearance_6ee5dd6c',
        rotate: 'Timer_rotate_6ee5dd6c',
        'reverse-rotate': 'Timer_reverse-rotate_6ee5dd6c',
        glowAppearance: 'Timer_glowAppearance_6ee5dd6c',
        highlightAppearance: 'Timer_highlightAppearance_6ee5dd6c',
        blink: 'Timer_blink_6ee5dd6c',
        slideUpIn: 'Timer_slideUpIn_6ee5dd6c',
    },
    we = a(function ({ size: a = B.x24x24 }) {
        const { model: t } = Ce(),
            r = t.scheduleInfo.endTimestamp.get(),
            o = t.scheduleInfo.serverTimestamp.get(),
            n = t.computes.isEventEndsBeforeNewQuests(),
            i = t.currentTimerDate.get(),
            d = n ? r - o : i;
        return e.jsxs('div', {
            className: je.base,
            children: [
                e.jsx('div', { className: s(je.icon, je[`icon__${a}`]) }),
                e.jsx('div', {
                    className: s(je.label, je[`label__${a}`]),
                    children: e.jsx(j, { size: a, preFormatted: w(L(d), P.default) }),
                }),
            ],
        });
    }),
    Pe = {
        base: 'InformBlock_6c0baff2',
        base__completed: 'InformBlock_base__completed_65a9bdbe',
        show: 'InformBlock_show_88766607',
        base__allCompletedTasksVisited: 'InformBlock_base__allCompletedTasksVisited_21505a08',
        wrapper: 'InformBlock_wrapper_675f3f25',
        timerBlock: 'InformBlock_timerBlock_df806357',
        fadeIn: 'InformBlock_fadeIn_88766607',
        fadeInThreeQuarters: 'InformBlock_fadeInThreeQuarters_88766607',
        fadeInHalf: 'InformBlock_fadeInHalf_88766607',
        fadeOut: 'InformBlock_fadeOut_88766607',
        fadeInWithScale: 'InformBlock_fadeInWithScale_88766607',
        slideUp: 'InformBlock_slideUp_88766607',
        scale: 'InformBlock_scale_88766607',
        raysAppearance: 'InformBlock_raysAppearance_88766607',
        rotate: 'InformBlock_rotate_88766607',
        'reverse-rotate': 'InformBlock_reverse-rotate_88766607',
        glowAppearance: 'InformBlock_glowAppearance_88766607',
        highlightAppearance: 'InformBlock_highlightAppearance_88766607',
        blink: 'InformBlock_blink_88766607',
        slideUpIn: 'InformBlock_slideUpIn_88766607',
        'add-blur': 'InformBlock_add-blur_88766607',
        hide: 'InformBlock_hide_88766607',
    },
    Le = R.strings.comp7_light.progressionView.battleQuests.timer,
    Ae = function ({ battleTasksStatus: a }) {
        const { mediaSize: t } = u();
        return e.jsx('div', {
            className: s(Pe.base, Pe[`base__${a}`]),
            children: e.jsx(Be, {
                children: e.jsxs('div', {
                    className: Pe.wrapper,
                    children: [
                        Le.title(),
                        e.jsxs('div', {
                            className: Pe.timerBlock,
                            children: [Le.completed.text(), e.jsx(we, { size: t >= h.Large ? B.x48x48 : B.x32x32 })],
                        }),
                    ],
                }),
            }),
        });
    },
    Ne = {
        base: 'TaskBattleList_620a2e52',
        base__completed: 'TaskBattleList_base__completed_78276b8d',
        questsContainer: 'TaskBattleList_questsContainer_dff64b58',
        'hidden-tasks-list': 'TaskBattleList_hidden-tasks-list_78276b8d',
        base__allCompletedTasksVisited: 'TaskBattleList_base__allCompletedTasksVisited_78276b8d',
        timerBlock: 'TaskBattleList_timerBlock_db4bd8b',
        text: 'TaskBattleList_text_5ceb6cc3',
        taskList: 'TaskBattleList_taskList_7befa297',
        fadeIn: 'TaskBattleList_fadeIn_78276b8d',
        fadeInThreeQuarters: 'TaskBattleList_fadeInThreeQuarters_78276b8d',
        fadeInHalf: 'TaskBattleList_fadeInHalf_78276b8d',
        fadeOut: 'TaskBattleList_fadeOut_78276b8d',
        fadeInWithScale: 'TaskBattleList_fadeInWithScale_78276b8d',
        slideUp: 'TaskBattleList_slideUp_78276b8d',
        scale: 'TaskBattleList_scale_78276b8d',
        raysAppearance: 'TaskBattleList_raysAppearance_78276b8d',
        rotate: 'TaskBattleList_rotate_78276b8d',
        'reverse-rotate': 'TaskBattleList_reverse-rotate_78276b8d',
        glowAppearance: 'TaskBattleList_glowAppearance_78276b8d',
        highlightAppearance: 'TaskBattleList_highlightAppearance_78276b8d',
        blink: 'TaskBattleList_blink_78276b8d',
        slideUpIn: 'TaskBattleList_slideUpIn_78276b8d',
        'add-blur': 'TaskBattleList_add-blur_78276b8d',
        hide: 'TaskBattleList_hide_78276b8d',
        show: 'TaskBattleList_show_78276b8d',
    },
    Se = R.strings.comp7_light.progressionView.battleQuests.timer,
    ye = a(function () {
        const { model: a } = Ce(),
            t = a.computes.battleQuests(),
            r = a.computes.battleTasksStatus(),
            o = a.computes.isEventEndsBeforeNewQuests();
        return e.jsxs('div', {
            className: s(Ne.base, Ne[`base__${r}`]),
            children: [
                e.jsxs('div', {
                    className: s(Ne.questsContainer),
                    children: [
                        e.jsx(Be, {
                            children: e.jsxs('div', {
                                className: Ne.timerBlock,
                                children: [
                                    e.jsx('div', {
                                        className: Ne.text,
                                        children: o ? Se.eventEnds() : Se.inProgress.text(),
                                    }),
                                    e.jsx(we, {}),
                                ],
                            }),
                        }),
                        e.jsx('div', {
                            className: Ne.taskList,
                            children: b(t, (s, a) => e.jsx(be, { ...s, index: a }, a)),
                        }),
                    ],
                }),
                e.jsx(Ae, { battleTasksStatus: r }),
            ],
        });
    }),
    Ve = 'BattleQuests_42d8b049',
    Ue = 'BattleQuests_subTitle_c401841',
    Re = 'BattleQuests_info_1cd10120',
    We = 'BattleQuests_icon_4f5433ba',
    Qe = R.strings.comp7_light.progressionView,
    Ee = a(function () {
        const { model: s } = Ce(),
            a = s.computes.isProgressionCompleted();
        return e.jsxs('div', {
            className: Ve,
            children: [
                e.jsx(m, {
                    text: a ? Qe.subTitle.completed() : Qe.subTitle.inProgress(),
                    classMix: Ue,
                    binding: {
                        infotip: e.jsx(A, {
                            contentId: R.views.comp7_light.mono.lobby.leaderboard_reward_tooltip_view('resId'),
                            children: e.jsx('div', { className: Re, children: e.jsx('div', { className: We }) }),
                        }),
                    },
                }),
                e.jsx(ye, {}),
            ],
        });
    }),
    He = 'LevelLabel_2aeb988e',
    Oe = 'LevelLabel_activeGlow_7b0206b2',
    Fe = 'LevelLabel_activeGlow__completed_14902b18',
    ze = 'LevelLabel_level_8a756009',
    $e = 'LevelLabel_level__completed_14902b18',
    Me = 'LevelLabel_level__active_92cab71e',
    Ge = 'LevelLabel_levelCurrent_bfa6c487',
    De = 'LevelLabel_levelCurrent__completed_14902b18',
    qe = ({ level: a, isActive: t, isCompleted: r }) => {
        const o = s(ze, r && $e, t && Me);
        return e.jsxs('div', {
            className: He,
            children: [
                e.jsx('div', { className: s(Oe, t && Fe) }),
                e.jsx('div', { className: s(Ge, t && De), children: a }),
                e.jsx('div', { className: o, children: a }),
            ],
        });
    },
    Ke = {
        base: 'LevelCard_354cf12a',
        bgCompleted: 'LevelCard_bgCompleted_c355d1da',
        bgCompleted__completed: 'LevelCard_bgCompleted__completed_90cf5cef',
        bgCompleted__fast: 'LevelCard_bgCompleted__fast_91c33a40',
        completedIconContainer: 'LevelCard_completedIconContainer_c027e621',
        completedIconContainer__completed: 'LevelCard_completedIconContainer__completed_3d180533',
        completedIconContainer__prevLevel: 'LevelCard_completedIconContainer__prevLevel_44e57352',
        completedIcon: 'LevelCard_completedIcon_d382fd0a',
        completedIconGlow: 'LevelCard_completedIconGlow_25454fae',
        border: 'LevelCard_border_57784e07',
        border__right: 'LevelCard_border__right_fa864de6',
        fadeIn: 'LevelCard_fadeIn_3d180533',
        fadeInThreeQuarters: 'LevelCard_fadeInThreeQuarters_3d180533',
        fadeInHalf: 'LevelCard_fadeInHalf_3d180533',
        fadeOut: 'LevelCard_fadeOut_3d180533',
        fadeInWithScale: 'LevelCard_fadeInWithScale_3d180533',
        slideUp: 'LevelCard_slideUp_3d180533',
        scale: 'LevelCard_scale_3d180533',
        raysAppearance: 'LevelCard_raysAppearance_3d180533',
        rotate: 'LevelCard_rotate_3d180533',
        'reverse-rotate': 'LevelCard_reverse-rotate_3d180533',
        glowAppearance: 'LevelCard_glowAppearance_3d180533',
        highlightAppearance: 'LevelCard_highlightAppearance_3d180533',
        blink: 'LevelCard_blink_3d180533',
        slideUpIn: 'LevelCard_slideUpIn_3d180533',
    },
    Ze = 'prevLevel',
    Xe = 'completed',
    Ye = 'inProgress',
    Je = (e, s, a) => (e ? Xe : s ? Ye : a),
    es = a(function ({ level: a, isActive: r, isCompleted: o, isLast: n }) {
        const [i, d] = t.useState(),
            { model: l } = Ce(),
            _ = t.useRef(null),
            { wasProgressionVisited: c, isRecentlyCompletedLevel: p, isPrevLevel: f } = l.computes.levelStatus(a);
        t.useEffect(() => {
            o && !c && p && d(Ze);
        }, [o, c, p]);
        const m = t.useCallback(() => {
            N.sound('pr_progress_tick');
        }, []);
        return (
            t.useEffect(() => {
                const e = _.current;
                return S(() => {
                    if (e)
                        return (
                            e.addEventListener('transitionstart', m),
                            () => {
                                e.removeEventListener('transitionstart', m);
                            }
                        );
                });
            }, [_, m]),
            e.jsxs('div', {
                className: Ke.base,
                children: [
                    e.jsx('div', { className: s(Ke.bgCompleted, o && Ke.bgCompleted__completed), ref: _ }),
                    e.jsxs('div', {
                        className: s(Ke.completedIconContainer, Ke[`completedIconContainer__${Je(f, !o, i)}`]),
                        children: [
                            e.jsx('div', { className: Ke.completedIconGlow }),
                            e.jsx('div', { className: Ke.completedIcon }),
                        ],
                    }),
                    e.jsx(qe, { level: a, isCompleted: o, isActive: r }),
                    e.jsx('div', { className: Ke.border }),
                    n && e.jsx('div', { className: s(Ke.border, Ke.border__right) }),
                ],
            })
        );
    }),
    ss = 'LevelCards_4068501d',
    as = a(
        n.forwardRef(function (s, a) {
            const { model: t } = Ce();
            return e.jsx('div', {
                className: ss,
                ref: a,
                children: b(t.computes.levels(), (s) => e.jsx(es, { ...s }, s.level)),
            });
        }),
    ),
    ts = 'Rewards_6a06eda8',
    rs = 'Rewards_base__completed_62b5a47f',
    os = 'Rewards_base__wide_e3c609b4',
    ns = 'Rewards_reward_1f8103c2',
    is = a(function ({ isCompleted: a, isActive: t, rewards: r }) {
        const { parsedRewards: o, imageSize: n } = te(r),
            i = s(ts, n === g.Small && o.length > 2 && os, a && !t && rs);
        return e.jsx('div', { className: i, children: b(o, (s) => e.jsx(y, { className: ns, ...s }, s.name)) });
    }),
    ds = 'RewardCard_3d33baf7',
    ls = 'RewardCard_activeBlock_e979e1b7',
    _s = 'RewardCard_activeBlock__completed_671ab3dd',
    cs = 'RewardCard_pointsBorder_7ac65f55',
    ps = 'RewardCard_pointsBorder__right_ba44cb4f',
    fs = 'RewardCard_pointsContainer_9dd72d4d',
    ms = 'RewardCard_points_ae900ff0',
    gs = 'RewardCard_current_4812494a',
    us = 'RewardCard_token_e788b841',
    hs = 'RewardCard_border_e6ba8920',
    bs = 'RewardCard_border__right_4235241b',
    vs = a(function ({
        pointsMin: a,
        pointsForCard: t,
        pointsCurrent: r,
        isCompleted: o,
        isActive: n,
        isLast: i,
        rewards: d,
    }) {
        return e.jsxs('div', {
            className: ds,
            children: [
                e.jsx('div', {
                    className: s(ls, n && _s),
                    children: e.jsxs('div', {
                        className: fs,
                        children: [
                            e.jsx(m, {
                                classMix: ms,
                                text: R.strings.comp7_light.progressionView.card.points(),
                                binding: { current: e.jsx('div', { className: gs, children: r }), total: t },
                            }),
                            e.jsx('div', { className: us }),
                        ],
                    }),
                }),
                e.jsx(is, { rewards: d, isActive: n, isCompleted: o }),
                e.jsx('div', { className: hs }),
                e.jsx('div', { className: cs, children: a }),
                i && e.jsx('div', { className: s(hs, bs) }),
                i && e.jsx('div', { className: s(cs, ps), children: a + t }),
            ],
        });
    }),
    ks = 'RewardCards_168ad5c7',
    Ts = a(function () {
        const { model: s } = Ce();
        return e.jsx('div', {
            className: ks,
            children: b(s.computes.levels(), ({ level: a, isCompleted: t, isActive: r, isLast: o, rewards: n }, i) =>
                e.jsx(
                    vs,
                    {
                        pointsMin: i * s.pointsForLevel.get(),
                        pointsForCard: s.pointsForLevel.get(),
                        pointsCurrent: s.computes.currentPointsForLevel(a - 1),
                        isCompleted: t,
                        isActive: r,
                        isLast: o,
                        rewards: n,
                    },
                    i,
                ),
            ),
        });
    }),
    Cs = (e, a, t) =>
        s(
            e[t],
            a === ve.ProgressAlreadyFinished
                ? e[`${t}__fast`]
                : a >= ve.ProgressFinished
                  ? e[`${t}__completed`]
                  : void 0,
        ),
    xs = {
        base: 'Container_d56d09f8',
        progressWrapper: 'Container_progressWrapper_abae5230',
        progressWrapper__completed: 'Container_progressWrapper__completed_c4afdc69',
        progressWrapper__fast: 'Container_progressWrapper__fast_ba1096eb',
        bg: 'Container_bg_e3974462',
        progressBar: 'Container_progressBar_ebe2af86',
        fadeIn: 'Container_fadeIn_a197fc5',
        fadeInThreeQuarters: 'Container_fadeInThreeQuarters_a197fc5',
        fadeInHalf: 'Container_fadeInHalf_a197fc5',
        fadeOut: 'Container_fadeOut_a197fc5',
        fadeInWithScale: 'Container_fadeInWithScale_a197fc5',
        slideUp: 'Container_slideUp_a197fc5',
        scale: 'Container_scale_a197fc5',
        raysAppearance: 'Container_raysAppearance_a197fc5',
        rotate: 'Container_rotate_a197fc5',
        'reverse-rotate': 'Container_reverse-rotate_a197fc5',
        glowAppearance: 'Container_glowAppearance_a197fc5',
        highlightAppearance: 'Container_highlightAppearance_a197fc5',
        blink: 'Container_blink_a197fc5',
        slideUpIn: 'Container_slideUpIn_a197fc5',
    },
    Is = a(function ({ api: s, theme: a = H }) {
        const { model: r, controls: o } = Ce(),
            n = r.progressAnimationState.get(),
            { computes: i } = r,
            d = r.prevProgressPoints.get(),
            l = r.curProgressPoints.get(),
            _ = r.pointsForLevel.get(),
            c = t.useRef(V());
        s.current.moveProgressBars = t.useCallback((e) => {
            c.current.update(e);
        }, []);
        const [{ previousEarnedPoints: p, maxPoints: f, progressionSize: m }, g] = t.useState({
            maxPoints: i.levels().length * _,
            previousEarnedPoints: d,
            progressionSize: d,
        });
        t.useEffect(() => {
            (g((e) => {
                const s = 0 === e.progressionSize ? d : e.progressionSize;
                return { maxPoints: i.levels().length * _, previousEarnedPoints: s, progressionSize: l };
            }),
                d !== l && N.sound('pr_progress_bar'));
        }, [d, _, l, i]);
        const u = t.useMemo(
            () => ({
                ...W,
                withStack: !0,
                type: U.Growing,
                delta: { duration: 400, delay: 300 },
                line: { duration: 400, delay: 300 },
            }),
            [],
        );
        return (
            t.useEffect(() => {
                if (n === ve.ProgressChange)
                    return Q(() => {
                        o.finishProgressionChange();
                    }, 700);
            }, [o, n]),
            e.jsxs('div', {
                className: xs.base,
                children: [
                    e.jsx('div', { className: xs.bg }),
                    e.jsx('div', {
                        className: Cs(xs, n, 'progressWrapper'),
                        children: e.jsx(E, {
                            animationSettings: u,
                            deltaFrom: p,
                            value: m,
                            maxValue: f,
                            api: c,
                            theme: a,
                            className: xs.progressBar,
                        }),
                    }),
                ],
            })
        );
    }),
    Bs = 'Content_74d7180e',
    js = 'Content_base__centered_da09528a',
    ws = 'Content_progress_f562db1d',
    Ps = { wrapper: 'Content_wrapper_2c0cab76' },
    Ls = { base: 'Content_horizontalBar_e925daa8' },
    As = a(function () {
        const { model: a } = Ce(),
            { api: r } = F(),
            [o, n] = t.useState(!1),
            i = a.progressAnimationState.get(),
            d = a.curProgressPoints.get(),
            { computes: l } = a,
            _ = t.useRef({ moveProgressBars: O }),
            c = t.useRef(null),
            p = t.useRef(null),
            f = z(),
            m = $(r, r.settings.animationConfig),
            g = t.useCallback(() => {
                const e = r.contentRef.current,
                    s = l.levels().length;
                if (e && s > 0) {
                    const a = r.getContainerSize() || 0,
                        t = r.getWrapperSize() || 0,
                        o = a / s,
                        i = l.currentLevel() * o,
                        d = (t - e.offsetLeft - o) / 2;
                    (r.applyScroll(x(0, a - t, i - d)), n(t > a));
                }
            }, [l, r]);
        return (
            M(() => f.run(g)),
            t.useEffect(
                () =>
                    S(() => {
                        'idle' === m.type &&
                            r.animationScroll.scrollPosition.idle &&
                            r.applyScroll(r.animationScroll.scrollPosition.get());
                    }),
                [r, m],
            ),
            t.useEffect(() => {
                const e = r.getContainerSize();
                i === ve.ProgressAlreadyFinished && e && r.applyScroll(e, { immediate: !0 });
            }, [i, r]),
            t.useEffect(() => {
                g();
            }, [d, g]),
            t.useEffect(() => {
                const e = () => f.run(g);
                return (
                    r.events.on('recalculateContent', e),
                    r.events.on('resizeHandled', e),
                    () => {
                        (f.clear(), r.events.off('recalculateContent', e), r.events.off('resizeHandled', e));
                    }
                );
            }, [r, g, f]),
            e.jsxs('div', {
                className: s(Bs, o && js),
                ref: c,
                children: [
                    e.jsxs(G, {
                        classNames: Ps,
                        children: [
                            e.jsx(as, { ref: p }),
                            e.jsx('div', { className: ws, children: e.jsx(Is, { api: _ }) }),
                            e.jsx(Ts, {}),
                        ],
                    }),
                    e.jsx(D, { classNames: Ls }),
                ],
            })
        );
    }),
    Ns = {
        base: 'Progression_c2f0af52',
        base__completed: 'Progression_base__completed_b4777ae9',
        base__fast: 'Progression_base__fast_9f787710',
        shadow: 'Progression_shadow_abbafcc6',
        shadow__left: 'Progression_shadow__left_8f080022',
        shadow__right: 'Progression_shadow__right_808a17e',
        shadow__visible: 'Progression_shadow__visible_8b7d5d83',
        fadeIn: 'Progression_fadeIn_61efd8f5',
        fadeInThreeQuarters: 'Progression_fadeInThreeQuarters_61efd8f5',
        fadeInHalf: 'Progression_fadeInHalf_61efd8f5',
        fadeOut: 'Progression_fadeOut_61efd8f5',
        fadeInWithScale: 'Progression_fadeInWithScale_61efd8f5',
        slideUp: 'Progression_slideUp_61efd8f5',
        scale: 'Progression_scale_61efd8f5',
        raysAppearance: 'Progression_raysAppearance_61efd8f5',
        rotate: 'Progression_rotate_61efd8f5',
        'reverse-rotate': 'Progression_reverse-rotate_61efd8f5',
        glowAppearance: 'Progression_glowAppearance_61efd8f5',
        highlightAppearance: 'Progression_highlightAppearance_61efd8f5',
        blink: 'Progression_blink_61efd8f5',
        slideUpIn: 'Progression_slideUpIn_61efd8f5',
    },
    Ss = a(function ({ className: a }) {
        const { model: r, controls: o } = Ce(),
            n = r.progressAnimationState.get(),
            [i, d] = t.useState(!1),
            [l, _] = t.useState(!0),
            c = r.computes.isProgressionCompleted(),
            p = r.computes.wasProgressionCompletedBeforeStart(),
            { api: f } = F();
        return (
            t.useEffect(() => {
                const e = (e) => {
                    const s = e.value.scrollPosition;
                    if (void 0 !== s) {
                        const e = f.contentRef.current.offsetLeft,
                            a = f.getWrapperSize() || 0,
                            t = f.getContainerSize() || 0;
                        (d(s > e), _(s + a < t - e));
                    }
                };
                return (
                    f.events.on('change', e),
                    () => {
                        f.events.off('change', e);
                    }
                );
            }, [f]),
            t.useEffect(
                () =>
                    p
                        ? o.completeProgression(!0)
                        : n === ve.ChangeCompleted && c
                          ? Q(() => {
                                o.completeProgression(!1);
                            }, 1600)
                          : n !== ve.Scrolling || p
                            ? n === ve.HighlightCard
                                ? Q(() => {
                                      o.finishHighlightCard();
                                  }, 500)
                                : void 0
                            : Q(() => {
                                  o.finishScrolling();
                              }, 1200),
                [n, p, c, o],
            ),
            e.jsxs('div', {
                className: s(Cs(Ns, n, 'base'), a),
                children: [
                    e.jsx('div', { className: s(Ns.shadow, Ns.shadow__left, i && Ns.shadow__visible) }),
                    e.jsx('div', { className: s(Ns.shadow, Ns.shadow__right, l && Ns.shadow__visible) }),
                    e.jsx(As, {}),
                ],
            })
        );
    }),
    ys = 'App_1e8bf7cf',
    Vs = 'App_bgContainer_bb0bfe54',
    Us = 'App_bg_844df5e9',
    Rs = 'App_shade_9bfebdfa',
    Ws = 'App_bottomShadow_5ac9bad8',
    Qs = 'App_content_70e4a93b',
    Es = 'App_schedule_e2d8d9fb',
    Hs = 'App_calendarIcon_f2f7cb5f',
    Os = 'App_progression_23dc5ff6',
    Fs = a(function () {
        const { controls: s } = Ce(),
            a = i(ae);
        return (
            q(K.ESCAPE, s.onClose),
            e.jsxs('div', {
                className: ys,
                children: [
                    e.jsxs('div', {
                        className: Vs,
                        children: [
                            e.jsx('div', { className: Us }),
                            e.jsx('div', { className: Rs }),
                            e.jsx('div', { className: Ws }),
                        ],
                    }),
                    e.jsx(J, {
                        hasSeasonName: !1,
                        className: Es,
                        classNames: { scheduleClassNames: { calendarIcon: Hs } },
                    }),
                    e.jsxs(d.div, {
                        className: Qs,
                        style: a,
                        children: [e.jsx(Ee, {}), e.jsx(Z, { children: e.jsx(Ss, { className: Os }) })],
                    }),
                ],
            })
        );
    });
X(
    e.jsx(Y, {
        children: e.jsx(Te, {
            options: { context: 'model.progressionModel' },
            children: e.jsx(ee, {
                options: { context: 'model.progressionModel.scheduleInfo' },
                children: e.jsx(Fs, {}),
            }),
        }),
    }),
    { fullScreen: !0 },
);
