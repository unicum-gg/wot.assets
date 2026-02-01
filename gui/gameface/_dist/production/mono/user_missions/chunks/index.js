import {
    j as e,
    e as s,
    p as i,
    r as o,
    l as t,
    q as n,
    s as r,
    t as a,
    R as l,
    v as c,
    w as d,
    x as m,
} from './vendor.js';
import {
    i as u,
    k as _,
    d as p,
    b as g,
    E as f,
    M as x,
    P as b,
    N as h,
    I as C,
    O as N,
    Q as v,
    V as I,
    W as y,
    X as E,
    L as j,
    e as M,
    Y as O,
    Z as k,
    _ as S,
    m as P,
    $ as w,
    u as T,
    z as B,
    a0 as L,
    x as A,
    p as D,
    a1 as W,
    a2 as G,
    a3 as F,
    a4 as H,
    a5 as q,
    a6 as V,
    y as $,
    a7 as z,
    n as U,
    a8 as Q,
    a9 as Y,
    aa as K,
    ab as X,
    ac as J,
    ad as Z,
    ae as ee,
    o as se,
    af as ie,
    ag as oe,
    ah as te,
    v as ne,
    w as re,
    ai as ae,
    aj as le,
    ak as ce,
    al as de,
    am as me,
    an as ue,
    ao as _e,
    ap as pe,
    aq as ge,
    ar as fe,
    as as xe,
} from './lib.js';
import { t as be, g as he } from './helpers.js';
import { s as Ce } from '../views/hub/hub.html/bundle.js';
import { R as Ne } from './reward_wrapper.js';
/* empty css      */ const [ve, Ie] = u()(
    ({ observableModel: e }) => e.object(),
    ({ externalModel: e }) => ({
        goToCampaigns: e.createCallbackNoArgs('goToCampaigns'),
        goToOperation: e.createCallbackNoArgs('goToOperation'),
    }),
);
var ye = ((e) => (
    (e.CAMPAIGN_NOT_ACTIVATED = 'campaignNotActivated'),
    (e.IN_PROGRESS = 'inProgress'),
    (e.IN_PROGRESS_FOR_HONORS = 'inProgressForHonors'),
    (e.COMPLETED = 'completed'),
    (e.COMPLETED_WITH_HONORS = 'completedWithHonors'),
    e
))(ye || {});
const Re = 'ActionButton_20d194fb',
    Ee = 'ActionButton_text_eb11c2b7';
function je({ textPath: i, ...o }) {
    return e.jsx(_, { ...o, className: s(Re, o.className), children: e.jsx(p, { className: Ee, path: i }) });
}
const Me = 'TextBlock_97d73ac3',
    Oe = 'TextBlock_base__centered_d13b3a4b',
    ke = 'TextBlock_title_770e50f6',
    Se = 'TextBlock_description_eacddfcf',
    Pe = g.resolve('strings'),
    we = g.resolve('aliases'),
    Te = (e, s, i) => {
        const o = `${e}.${s}`;
        return s === ye.COMPLETED_WITH_HONORS ? `${o}.${i ? 'allCompleted' : 'default'}` : o;
    },
    Be = i(function ({ centered: i = !1, className: o, classNames: t }) {
        const { model: n } = Ie(),
            {
                state: r,
                allOperationsCompleted: a,
                currentOperationName: l,
                nextOperationName: c,
                stageNumber: d,
                totalProgress: m,
            } = n.get();
        return e.jsxs('div', {
            className: s(Me, i && Oe, o),
            children: [
                e.jsx(p, {
                    path: Te('user_missions.hub.basic_missions.personal.title', r, a),
                    params: { currentOperationName: l, nextOperationName: c, stageNumber: d },
                    className: s(ke, null == t ? void 0 : t.title),
                }),
                e.jsx(f, {
                    classMix: s(Se, null == t ? void 0 : t.description),
                    justifyContent: i ? x.Center : x.FlexStart,
                    text: Pe.readOrEmpty(Te('user_missions.hub.basic_missions.personal.description', r, a))
                        .replace('{{currentOperationName}}', l)
                        .replace('{{nextOperationName}}', c)
                        .replace('{{totalProgress}}', m.toString()),
                    targetId: we.read((e) => e.user_missions.hub.basicMissions.PersonalMissions('resId')),
                    isTruncationAvailable: !0,
                    isTooltipEnable: !0,
                }),
            ],
        });
    }),
    Le = 'CampaignNotActivated_9407dfc7',
    Ae = 'CampaignNotActivated_textBlock_c662540',
    De = 'CampaignNotActivated_title_d30bb4f2',
    We = i(function () {
        const { controls: s } = Ie();
        return e.jsxs('div', {
            className: Le,
            children: [
                e.jsx(Be, { className: Ae, classNames: { title: De } }),
                e.jsx(je, {
                    theme: 'primary',
                    onClick: s.goToCampaigns,
                    textPath: 'user_missions.hub.basic_missions.personal.button.to_campaign',
                }),
            ],
        });
    }),
    Ge = 'Completed_47cefd15',
    Fe = 'Completed_textBlock_15b3296b',
    He = i(function () {
        const { controls: s } = Ie();
        return e.jsxs('div', {
            className: Ge,
            children: [
                e.jsx(Be, { className: Fe }),
                e.jsx(je, {
                    theme: 'primary',
                    onClick: s.goToOperation,
                    textPath: 'user_missions.hub.basic_missions.personal.button.to_operation',
                }),
            ],
        });
    }),
    qe = 'CompletedWithHonors_bc0ee63d',
    Ve = 'CompletedWithHonors_base__allCompleted_632ea0e2',
    $e = 'CompletedWithHonors_completedIcon_de0cf0c3',
    ze = 'CompletedWithHonors_textBlock_9e298c15',
    Ue = 'CompletedWithHonors_base__hasUncompleted_906ea6c6',
    Qe = 'CompletedWithHonors_title_a75dacc1',
    Ye = 'CompletedWithHonors_description_aead74a',
    Ke = i(function () {
        const { model: i, controls: o } = Ie(),
            { allOperationsCompleted: t } = i.get();
        return e.jsxs('div', {
            className: s(qe, t ? Ve : Ue),
            children: [
                t && e.jsx('div', { className: $e }),
                e.jsx(Be, { centered: t, className: ze, classNames: { title: Qe, description: Ye } }),
                e.jsx(je, {
                    theme: t ? 'primary' : 'secondary',
                    onClick: o.goToOperation,
                    textPath:
                        'user_missions.hub.basic_missions.personal.button.' +
                        (t ? 'to_completed_operation' : 'to_operation'),
                }),
            ],
        });
    }),
    Xe = {
        base: 'ProgressCount_1bbbcb2',
        slash: 'ProgressCount_slash_ac34047e',
        slash__fullWidth: 'ProgressCount_slash__fullWidth_c807c2b',
        current: 'ProgressCount_current_115c5e6d',
        current__slashCenter: 'ProgressCount_current__slashCenter_6ce420af',
        total: 'ProgressCount_total_a0f9c7f2',
        total__slashCenter: 'ProgressCount_total__slashCenter_bb7952a3',
    },
    Je = 'fullWidth',
    Ze = g.resolve('intl'),
    es = o.memo(function ({ current: i, total: o, children: t, displayType: n = Je, className: r, classNames: a }) {
        return e.jsxs('div', {
            className: s(Xe.base, r),
            children: [
                e.jsx('div', {
                    className: s(Xe.current, Xe[`current__${n}`], null == a ? void 0 : a.current),
                    children: t ?? Ze.formatNumber('integral', i),
                }),
                e.jsx('div', {
                    className: s(Xe.slash, Xe[`slash__${n}`], null == a ? void 0 : a.slash),
                    children: '/',
                }),
                e.jsx('div', {
                    className: s(Xe.total, Xe[`total__${n}`], null == a ? void 0 : a.total),
                    children: Ze.formatNumber('integral', o),
                }),
            ],
        });
    }),
    ss = 'Index_f505a04a',
    is = o.memo(function (s) {
        return e.jsx(b, { ...s, classNames: { background: ss } });
    });
var os = ((e) => (
    (e.PROGRESSION = 'progression'),
    (e.PM3_POINTS = 'pm3_points'),
    (e.CUSTOM_SIMPLE = 'custom_simple'),
    e
))(os || {});
const ts = g.resolve('strings');
function ns(s) {
    const i = h({
        header: ts.readOrEmpty(`personal_missions_30.detail.name.${s.id}`),
        body: ts
            .readOrEmpty('user_missions.hub.basic_missions.personal.detail.tooltip.body')
            .replace('{{vehicleName}}', s.vehicleName),
    });
    return e.jsx(C, {
        ...i,
        path: `personal_missions_30.vehicle_detail.c_400x150.${s.id}`,
        width: 150,
        height: 75,
        className: s.className,
    });
}
const rs = {
        base: 'InProgress_a9a08feb',
        base__inProgress: 'InProgress_base__inProgress_1f5a0708',
        textBlock: 'InProgress_textBlock_9bd89594',
        base__inProgressForHonors: 'InProgress_base__inProgressForHonors_68457abb',
        title: 'InProgress_title_f07812d0',
        description: 'InProgress_description_3ba66b0d',
        progress: 'InProgress_progress_523f308d',
        points: 'InProgress_points_9ee62ee',
        container: 'InProgress_container_fb690b6c',
        detail: 'InProgress_detail_da841dde',
        progressBar: 'InProgress_progressBar_fc1f13a5',
    },
    as = g.resolve('views'),
    ls = i(function () {
        const { model: i, controls: t } = Ie(),
            {
                state: n,
                totalProgress: r,
                currentProgress: a,
                previousProgress: l,
                detailId: c,
                vehicleName: d,
            } = i.get(),
            m = N(
                os.PM3_POINTS,
                o.useMemo(
                    () => ({ resId: as.read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')) }),
                    [],
                ),
            );
        return e.jsxs('div', {
            className: s(rs.base, rs[`base__${n}`]),
            children: [
                e.jsx(Be, { className: rs.textBlock, classNames: { title: rs.title, description: rs.description } }),
                n === ye.IN_PROGRESS
                    ? e.jsxs(e.Fragment, {
                          children: [
                              e.jsxs('div', {
                                  className: rs.progress,
                                  children: [
                                      e.jsx(es, { current: a, total: r }),
                                      e.jsx('div', { ...m, className: rs.points }),
                                  ],
                              }),
                              e.jsxs('div', {
                                  className: rs.container,
                                  children: [
                                      e.jsx(ns, { id: c, vehicleName: d, className: rs.detail }),
                                      e.jsx(is, {
                                          value: a,
                                          size: 'full',
                                          maxValue: r,
                                          className: rs.progressBar,
                                          children: e.jsx(v, { initValue: l, initMaxValue: r }),
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : e.jsx(p, {
                          path: 'user_missions.hub.basic_missions.personal.progress.inProgressForHonors',
                          params: { progress: e.jsx(es, { current: a, total: r }) },
                          className: rs.progress,
                      }),
                e.jsx(je, {
                    theme: 'secondary',
                    onClick: t.goToOperation,
                    textPath: 'user_missions.hub.basic_missions.personal.button.to_operation',
                }),
            ],
        });
    }),
    cs = 'PersonalMissions_background_cee2473a',
    ds = 'PersonalMissions_d479b157',
    ms = (e, s, i, o) => {
        const t = 'userMissions.personal_missions.backgrounds';
        switch (e) {
            case ye.IN_PROGRESS:
            case ye.IN_PROGRESS_FOR_HONORS:
                return `${t}.op_${i}`;
            case ye.COMPLETED_WITH_HONORS:
                return `${t}.${s ? 'completed' : `op_${o}`}`;
            case ye.COMPLETED:
                return `${t}.op_${o}`;
            default:
                return `${t}.campaign`;
        }
    },
    us = i(function (i) {
        const { model: o } = Ie(),
            { state: t, allOperationsCompleted: n, currentOperationId: r, nextOperationId: a } = o.get();
        return e.jsxs(I, {
            className: s(ds, i.className),
            disableMouse: !0,
            children: [
                e.jsx(C, { path: ms(t, n, r, a), width: 'auto', height: 'auto', fit: 'cover', className: cs }),
                (() => {
                    switch (t) {
                        case ye.CAMPAIGN_NOT_ACTIVATED:
                            return e.jsx(We, {});
                        case ye.IN_PROGRESS:
                        case ye.IN_PROGRESS_FOR_HONORS:
                            return e.jsx(ls, {});
                        case ye.COMPLETED:
                            return e.jsx(He, {});
                        case ye.COMPLETED_WITH_HONORS:
                            return e.jsx(Ke, {});
                        default:
                            console.error(`Unknown personal missions state ${t}`);
                    }
                })(),
            ],
        });
    }),
    [_s, ps] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['updateWeekDay']),
            missions: e.transform(
                (e) =>
                    y(e).map((e) => ({
                        ...e,
                        specConditions: be(e.specialConditionIds),
                        rerollAvailableTimestamp: E(j(), M(e.timeToNextReroll)),
                    })),
                'missionsList',
            ),
        }),
        ({ externalModel: e }) => ({ reroll: e.createCallback((e) => ({ questId: e }), 'onReroll') }),
    ),
    gs = o.createContext(null),
    fs = () => {
        const e = o.useContext(gs);
        if (!e) throw new Error('useAnimation must be used within an AnimationProvider');
        return e;
    },
    xs = i(function ({ completed: s, rerollState: i, children: r }) {
        const [a, l] = o.useState(!1),
            c = O(),
            [d, m] = t(() => ({ from: { x: 0 } })),
            [u, _] = t(() => ({ from: { x: 0 } })),
            [p, g] = t(() => ({ from: { x: 0 } })),
            [f, x] = t(() => ({ from: { opacity: s ? 0.5 : 1 } })),
            [b, h] = t(() => ({ from: { opacity: 'in' === i ? 1 : 0 } })),
            [C, N] = n(3, (e) => ({
                from:
                    'in' === i
                        ? { transform: 'translateY(-30rem)', opacity: 0 }
                        : { transform: 'translateY(0rem)', opacity: 1 },
            })),
            [v, I] = t(() => ({ from: { opacity: s || 'in' === i ? 0 : 1 } })),
            [y, R] = t(() => ({ from: { transform: 'rotate(0deg)' } })),
            E = (e) => {
                (l(!0), Promise.all(e.flat()).then(() => l(!1)));
            },
            j = k(() => {
                E([
                    m.start({ to: { x: 1 }, config: { duration: 1500, easing: S.easeInOutCubic } }),
                    g.start({ to: { x: 1 }, config: { duration: 800 } }),
                    _.start({ to: { x: 1 }, config: { duration: 1500, easing: S.easeInOutCubic } }),
                    I.start({ to: { opacity: 0 }, config: { duration: 400, easing: S.easeInCubic } }),
                    x.start({ to: { opacity: 0.5 }, config: { duration: 200, easing: S.easeInCubic } }),
                ]);
            }),
            M = k(() => {
                E([
                    R.start({ to: { transform: 'rotate(360deg)' }, config: { duration: 400 }, loop: !0 }),
                    N.start((e) => ({
                        to: { transform: 'translateY(30rem)', opacity: 0 },
                        delay: 50 * (3 - e),
                        config: { duration: 250, easing: S.easeInQuint },
                    })),
                    h.start({ to: { opacity: 1 }, config: { duration: 300, easing: S.easeInQuint }, delay: 100 }),
                ]);
            }),
            P = k(() => {
                E([
                    N.start((e) => ({
                        to: { transform: 'translateY(0rem)', opacity: 1 },
                        config: { duration: 300, easing: S.easeOutQuint },
                        delay: 50 * e,
                    })),
                    h.start({ to: { opacity: 0 }, config: { duration: 300, easing: S.easeOutQuint }, delay: 100 }),
                    I.start({ to: { opacity: 1 }, config: { duration: 100 }, delay: 300 }),
                ]);
            });
        return (
            o.useEffect(() => {
                switch (i) {
                    case 'in':
                        return P();
                    case 'out':
                        return (c.play(Ce.umg_hub_quest_reroll), M());
                    case 'waiting':
                        return void R.start({
                            to: { transform: 'rotate(360deg)' },
                            config: { duration: 400 },
                            loop: !0,
                        });
                    default:
                        R.set({ transform: 'rotate(0deg)' });
                }
            }, [P, M, R, i, c]),
            e.jsx(gs.Provider, {
                value: {
                    completedGlowStyle: d,
                    completedBlickContainerStyle: u,
                    completedBlickStyle: p,
                    completedFadingStyle: f,
                    rerollingSprings: C,
                    rerollIconStyle: y,
                    rerollButtonStyle: v,
                    rerollGlowStyle: b,
                    playCompletion: j,
                    inProgress: a,
                },
                children: r,
            })
        );
    }),
    bs = 'CompletionEffects_c32f942',
    hs = 'CompletionEffects_glow_64a3b883',
    Cs = 'CompletionEffects_glowIcon_1b3d9ffe',
    Ns = 'CompletionEffects_blick_67d2cb19',
    vs = 'CompletionEffects_blickLines_9288dfea',
    Is = 'CompletionEffects_blickLine_12f1a3a3';
function ys() {
    const s = fs();
    return e.jsxs('div', {
        className: bs,
        children: [
            e.jsx(r.div, {
                style: { opacity: s.completedGlowStyle.x.to([0, 0.05, 1], [0, 1, 0]).to((e) => e) },
                className: hs,
                children: e.jsx('div', { className: Cs }),
            }),
            e.jsx(r.div, {
                style: { opacity: s.completedBlickContainerStyle.x.to([0, 0.3, 1], [0, 1, 0]).to((e) => e) },
                className: Ns,
                children: e.jsxs(r.div, {
                    style: {
                        transform: s.completedBlickStyle.x.to([0, 1], [-100, 100]).to((e) => `translateX(${e}%)`),
                        opacity: s.completedBlickStyle.x.to([0, 0.1, 0.6, 1], [1, 1, 0, 0]).to((e) => e),
                    },
                    className: vs,
                    children: [
                        e.jsx('div', { className: Is }),
                        e.jsx('div', { className: Is }),
                        e.jsx('div', { className: Is }),
                    ],
                }),
            }),
        ],
    });
}
const Rs = { base: 'SpecConditionsIcons_ab3f13c7', icon: 'SpecConditionsIcons_icon_d767e7b4' };
function Es({ specConditions: i, className: o, ...t }) {
    return e.jsx('div', {
        ...t,
        className: s(Rs.base, o),
        children: P(i, (s) => e.jsx(C, { width: 24, height: 24, path: s.iconPath, className: Rs.icon }, s.id)),
    });
}
var js = ((e) => ((e.REROLL = 'reroll'), (e.SPEC_CONDITIONS = 'spec_conditions'), e))(js || {});
const Ms = 'Conditions_specConditions_faac5c77',
    Os = 'Conditions_commonCondition_72d62c0e',
    ks = 'Conditions_commonCondition__updating_67d8e6dc',
    Ss = g.resolve('aliases'),
    Ps = g.resolve('views');
function ws({ commonConditionId: i, specConditions: t }) {
    const n = fs(),
        a = w(),
        l = N(
            js.SPEC_CONDITIONS,
            o.useMemo(
                () => ({
                    specConditions: t,
                    resId: Ps.read((e) => e.mono.user_missions.tooltips.param_tooltip('resId')),
                }),
                [t],
            ),
        ),
        [c, d] = o.useState(!1),
        m = k(() => d(!1));
    return (
        o.useLayoutEffect(() => {
            d(!0);
        }, [a.breakpoint]),
        e.jsxs(r.div, {
            style: n.rerollingSprings[0],
            children: [
                t.length > 0 && e.jsx(Es, { ...l, specConditions: t, className: Ms }),
                e.jsx(f, {
                    text: he(i, t),
                    classMix: s(Os, c && ks),
                    isTooltipEnable: !0,
                    isTruncationAvailable: !0,
                    targetId: Ss.read((e) => e.user_missions.hub.basicMissions.WeeklyMissions('resId')),
                    onSizeChanged: m,
                }),
            ],
        })
    );
}
const Ts = 'Icon_animatedIcon_96d2a89c',
    Bs = 'Icon_f61225ad';
function Ls({ completed: i, commonConditionId: o, className: t }) {
    const n = fs(),
        l = T(
            {
                completedIcon: 'userMissions.hub.basic.done_icon_s',
                missionIcon: `userMissions.weekly.commonCond.x32x32.c_${o}`,
            },
            {
                medium: {
                    completedIcon: 'userMissions.hub.basic.done_icon_m',
                    missionIcon: `userMissions.weekly.commonCond.x80x80.c_${o}`,
                },
            },
        ),
        c = a(i, {
            initial: { opacity: i ? 1 : 0.2, scale: 1 },
            from: { opacity: 0, scale: 0.2 },
            enter: { opacity: i ? 1 : 0.2, scale: 1, config: { duration: 200, easing: S.easeOutCubic } },
            leave: { opacity: 0, scale: 0.2, config: { duration: 200, easing: S.easeInCubic } },
            exitBeforeEnter: !0,
        });
    return e.jsx('div', {
        className: s(Bs, t),
        children: e.jsx(r.div, {
            style: n.rerollingSprings[0],
            children: c((s, i) =>
                e.jsx(r.div, {
                    style: s,
                    className: Ts,
                    children: e.jsx(C, {
                        path: i ? l.completedIcon : l.missionIcon,
                        width: 32,
                        height: 32,
                        adaptive: { medium: { width: 80, height: 80 } },
                    }),
                }),
            ),
        }),
    });
}
const As = l.memo(function (s) {
        return e.jsx(is, {
            size: 'small',
            value: s.currentProgress,
            maxValue: s.totalProgress,
            children: e.jsx(v, {
                initValue: s.previousProgress,
                initMaxValue: s.totalProgress,
                animationProps: s.animationProps,
            }),
        });
    }),
    Ds = 'Reroll_9aa89152',
    Ws = 'Reroll_button_bf3e46bd',
    Gs = 'Reroll_text_f15ae95',
    Fs = 'Reroll_icon_9cea8d59',
    Hs = 'Reroll_timer_9c3c15fe',
    qs = 'Reroll button',
    Vs = g.resolve('strings'),
    $s = g.resolve('views');
function zs({ rerollCooldown: i, rerollAvailableTimestamp: t, timeToNextReroll: n, onClick: a, className: l }) {
    const c = O(),
        d = B(o.useMemo(() => ({ until: t, tick: M(1) }), [t])),
        { rerollButtonStyle: m, rerollIconStyle: u } = fs(),
        _ = N(
            js.REROLL,
            o.useMemo(
                () => ({
                    rerollCooldown: i,
                    rerollAvailableTimestamp: L(t),
                    resId: $s.read((e) => e.mono.user_missions.tooltips.param_tooltip('resId')),
                }),
                [i, t],
            ),
        );
    return e.jsx(r.div, {
        ..._,
        style: m,
        className: s(Ds, l),
        children: d.done
            ? e.jsxs('div', {
                  onClick: () => {
                      (c.play('click', { target: qs }), a());
                  },
                  onMouseEnter: () => {
                      c.play('mouse-enter', { target: qs });
                  },
                  className: Ws,
                  children: [
                      e.jsx('div', {
                          className: Gs,
                          children: Vs.readOrEmpty('user_missions.hub.basic_missions.daily.reroll_button'),
                      }),
                      e.jsx(r.div, { style: u, className: Fs }),
                  ],
              })
            : e.jsx(A, { start: n, format: A.format.superCompact, size: A.size.x24x24, className: Hs }),
    });
}
const Us = 'Rewards_rewardItem_5e36a95a',
    Qs = 'Rewards_boxRewardClassName_f0825900',
    Ys = g.resolve('aliases');
function Ks(s) {
    const i = T({ rewardSize: D.S24x24, rewardMaxCount: 4 }, { large: { rewardSize: D.Small, rewardMaxCount: 5 } });
    return e.jsx(Ne, {
        bonuses: s.bonuses,
        questId: s.id,
        size: i.rewardSize,
        resId: Ys.read((e) => e.user_missions.hub.basicMissions.WeeklyMissions('resId')),
        count: s.bonuses.length <= i.rewardMaxCount ? i.rewardMaxCount : i.rewardMaxCount - 1,
        rewardItemClassMix: Us,
        boxRewardClassName: Qs,
    });
}
const Xs = 'Mission_557cf0dd',
    Js = 'Mission_base__animating_f1a3e9cd',
    Zs = 'Mission_rerollGlow_a0c30a93',
    ei = 'Mission_wrapper_9f0c513c',
    si = 'Mission_icon_3808d908',
    ii = 'Mission_content_238fdcb6',
    oi = 'Mission_conditions_c4d5bc79',
    ti = 'Mission_rightContent_e710873a',
    ni = 'Mission_reroll_15a6d836',
    ri = 'Mission_reroll__noEvents_f1a3e9cd',
    ai = 'Mission_progressBarWrapper_5877296e',
    li = i(function ({
        bonuses: i,
        commonConditionId: t,
        currentProgress: n,
        id: a,
        previousProgress: l,
        specConditions: c,
        isRerollInProgress: d,
        timeToNextReroll: m,
        rerollAvailableTimestamp: u,
        rerollCooldown: _,
        totalProgress: p,
        className: g,
    }) {
        const { controls: f } = ps(),
            x = O(),
            b = fs(),
            [h, C] = o.useState(l === p),
            { playCompletion: N } = b,
            v = o.useMemo(
                () => ({
                    onStart: () => {
                        x.play(Ce.umg_hub_quest_progress);
                    },
                    onRest: () => {
                        n === p && (x.play(Ce.umg_hub_quest_complete), N(), C(!0));
                    },
                }),
                [n, p, x, N],
            );
        return e.jsxs('div', {
            className: s(Xs, b.inProgress && Js, g),
            children: [
                e.jsx(ys, {}),
                e.jsx(r.div, { style: b.rerollGlowStyle, className: Zs }),
                e.jsxs('div', {
                    className: ei,
                    children: [
                        e.jsxs('div', {
                            className: ii,
                            children: [
                                e.jsxs('div', {
                                    className: oi,
                                    children: [
                                        e.jsx(Ls, { completed: h, commonConditionId: t, className: si }),
                                        e.jsxs(r.div, {
                                            style: b.completedFadingStyle,
                                            children: [
                                                e.jsx(ws, { commonConditionId: t, specConditions: c }),
                                                e.jsx(r.div, {
                                                    style: b.rerollingSprings[1],
                                                    children: e.jsx(es, { current: n, total: p }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsxs(r.div, {
                                    style: b.completedFadingStyle,
                                    className: ti,
                                    children: [
                                        e.jsx(zs, {
                                            rerollCooldown: _,
                                            rerollAvailableTimestamp: u,
                                            timeToNextReroll: m,
                                            onClick: () => f.reroll(a),
                                            className: s(ni, (n === p || d) && ri),
                                        }),
                                        e.jsx(r.div, {
                                            style: b.rerollingSprings[2],
                                            children: e.jsx(Ks, { bonuses: i, id: a }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx(r.div, {
                            style: b.completedFadingStyle,
                            children: e.jsx(r.div, {
                                style: b.rerollingSprings[2],
                                children: e.jsx('div', {
                                    className: ai,
                                    children: e.jsx(As, {
                                        previousProgress: l,
                                        currentProgress: n,
                                        totalProgress: p,
                                        animationProps: v,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    ci = 'WeeklyMissions_b5c4ab0c',
    di = 'WeeklyMissions_base__fullHeight_1393a178',
    mi = 'WeeklyMissions_list_ef7648a3',
    ui = 'WeeklyMissions_title_eeb41405',
    _i = 'WeeklyMissions_title__right_82a872e3',
    pi = i(function (i) {
        const { model: t } = ps(),
            n = t.missions.get(),
            r = o.useRef(n);
        o.useEffect(() => {
            r.current = n;
        }, [n]);
        const l = o.useMemo(() => {
                const e = new Set(),
                    s = new Set();
                return (
                    W(r.current, (i, o) => {
                        const t = G(n, o);
                        t && t.id !== i.id && (e.add(i.id), s.add(t.id));
                    }),
                    { rerolledIds: e, newIds: s }
                );
            }, [n]),
            c = a(n, {
                key: (e) => e.id,
                initial: { x: 1 },
                from: { x: 0 },
                enter: { x: 1 },
                leave: { x: 0, config: { duration: 600 } },
                exitBeforeEnter: !0,
            });
        return e.jsxs(I, {
            className: s(ci, i.fullHeight && di, i.className),
            disableMouse: !0,
            children: [
                e.jsx(p, { className: ui, path: 'user_missions.hub.basic_missions.weekly.title' }),
                e.jsx(p, {
                    className: s(ui, _i),
                    path: 'user_missions.hub.basic_missions.weekly.update_info',
                    params: {
                        weekDay: g
                            .resolve('strings')
                            .readOrEmpty(`menu.dateTime.weekDays.full.c_${t.updateWeekDay.get()}`),
                    },
                }),
                e.jsx('div', {
                    className: mi,
                    children: c((s, i) =>
                        e.jsx(xs, {
                            completed: i.previousProgress === i.totalProgress,
                            rerollState: (() => {
                                switch (!0) {
                                    case l.rerolledIds.has(i.id):
                                        return 'out';
                                    case l.newIds.has(i.id):
                                        return 'in';
                                    case i.isRerollInProgress:
                                        return 'waiting';
                                    default:
                                        return 'idle';
                                }
                            })(),
                            children: e.jsx(li, { ...i }),
                        }),
                    ),
                }),
            ],
        });
    }),
    gi = {
        base: 'DisabledState_4abbc2ea',
        background: 'DisabledState_background_2be33fab',
        content: 'DisabledState_content_29454c97',
        icon: 'DisabledState_icon_58468d38',
        message: 'DisabledState_message_90090227',
    };
function fi({ message: s }) {
    return e.jsxs('div', {
        className: gi.base,
        children: [
            e.jsx('div', { className: gi.background }),
            e.jsxs('div', {
                className: gi.content,
                children: [e.jsx('div', { className: gi.icon }), e.jsx('div', { className: gi.message, children: s })],
            }),
        ],
    });
}
const xi = 'Block_content_7290bea6';
function bi({ content: s, isEnabled: i, disabilityReason: o, className: t }) {
    return e.jsx(I, {
        className: t,
        disableMouse: !0,
        children: i ? e.jsx('div', { className: xi, children: s }) : e.jsx(fi, { message: o }),
    });
}
const hi = o.createContext(null);
function Ci() {
    const e = o.useContext(hi);
    return (F(null !== e, 'AnimationsContext is null'), e);
}
function Ni() {
    return o.useContext(hi);
}
function vi(e, s, i = e) {
    return e + '+' + s + '+' + i;
}
function Ii(e, s, ...i) {
    let o = e.current;
    if (0 == i.length) return !1;
    for (let t = 0; t < i.length - 1; t++) {
        const e = i[t];
        ((o[e] = o[e] ?? {}), (o = o[e]));
    }
    return ((o[i[i.length - 1]] = s), !0);
}
function yi(e, ...s) {
    const i = (e, o) => {
        if (o === s.length) return H(e);
        const t = s[o];
        return t in e && ((o === s.length - 1 || i(e[t], o + 1)) && delete e[t], H(e));
    };
    return i(e.current, 0);
}
function Ri(e, ...s) {
    let i = e.current;
    return s.reduce((e, s) => (null == e ? void 0 : e[s]), i);
}
function Ei(e, ...s) {
    let i = e.current;
    return void 0 !== s.reduce((e, s) => (null == e ? void 0 : e[s]), i);
}
function ji(e, s, i, o) {
    Object.entries(s).forEach(([s, t]) => {
        H(t)
            ? Ei(i, e, s, e) && o(s, e)
            : Object.entries(t).forEach(([t, n]) => {
                  const r = t || e;
                  Ei(i, e, s, r) && o(s, r, n);
              });
    });
}
function Mi({ storage: e, id: s, emitter: i, providerCfg: o }) {
    Ei(e, s) || Oi({ id: s, emitter: i, providerCfg: o });
}
function Oi({ id: e, emitter: s, providerCfg: i }) {
    var o;
    const t = (null == i ? void 0 : i.triggerId) || e;
    (s.trigger(t, { id: e, ...(null == i ? void 0 : i.triggerParams) }),
        null == (o = null == i ? void 0 : i.triggerCallback) ||
            o.call(i, { id: e, ...(null == i ? void 0 : i.triggerParams) }));
}
function ki({ sound: e, soundCfg: s }) {
    e && s && ('string' == typeof s ? e.play(s) : e.play(s.eventName, null == s ? void 0 : s.event));
}
function Si({ children: s }) {
    const i = q(),
        t = o.useRef({}),
        n = o.useRef({}),
        r = o.useRef({}),
        a = V(),
        l = k(({ id: e, animName: s, elementId: i = e }) => Ei(t, e, s, i)),
        c = k((e, s, i = e) => {
            yi(t, e, s, i);
        }),
        d = k(({ id: e, animName: s, config: i, elementId: o = e }) => (Ii(t, i, e, s, o), () => c(e, s, o))),
        m = k(({ id: e, animName: s, elementId: i = e, animCallParams: o, providerCfg: n, soundCfg: r }) => {
            const l = Ri(t, e, s, i);
            (l &&
                ((null == n ? void 0 : n.skip)
                    ? l.skip({ ...o, ...(null == n ? void 0 : n.animCallParams) })
                    : l.start({ ...o, ...(null == n ? void 0 : n.animCallParams) })),
                ki({ sound: a, soundCfg: r }));
        }),
        u = k(({ id: e, animName: s, elementId: o = e, providerCfg: t = {} }) => {
            const r = i.on(vi(e, s, o), () => {
                (yi(n, e, s, o), Mi({ storage: n, id: e, emitter: i, providerCfg: t }), r());
            });
            Ii(n, !0, e, s, o);
        }),
        _ = k(({ complexId: e, id: s, animName: o, elementId: t = s, providerCfg: n }) => {
            const a = i.on(vi(s, o, t), () => {
                    (!(function ({
                        storage: e,
                        complexId: s,
                        groupId: i,
                        animName: o,
                        elementId: t,
                        emitter: n,
                        providerCfg: r,
                    }) {
                        let a = Ri(e, s, i, o);
                        a &&
                            (a.delete(t),
                            a.size || yi(e, s, i, o),
                            Mi({ storage: e, id: s, emitter: n, providerCfg: r }));
                    })({ storage: r, complexId: e, groupId: s, animName: o, elementId: t, emitter: i, providerCfg: n }),
                        a());
                }),
                l = Ri(r, e, s, o);
            l ? l.add(t) : Ii(r, new Set().add(t), e, s, o);
        }),
        p = k(({ groupId: e, groupCfg: s, providerCfg: o, soundCfg: r }) => {
            (yi(n, e),
                (null == o ? void 0 : o.skip) ||
                    (null == o ? void 0 : o.skipTrigger) ||
                    ji(e, s, t, (s, i) => {
                        u({ id: e, animName: s, elementId: i, providerCfg: o });
                    }),
                ji(e, s, t, (s, i, t) => {
                    m({ id: e, animName: s, elementId: i, animCallParams: t, providerCfg: o });
                }),
                ki({ sound: a, soundCfg: r }),
                (null == o ? void 0 : o.skip) &&
                    !(null == o ? void 0 : o.skipTrigger) &&
                    Oi({ id: e, emitter: i, providerCfg: o }));
        }),
        g = k(({ complexId: e, complexCfg: s, providerCfg: o, soundCfg: n }) => {
            if ((yi(r, e), !(null == o ? void 0 : o.skip) && !(null == o ? void 0 : o.skipTrigger)))
                for (let [i, r] of Object.entries(s))
                    ji(i, r, t, (s, t) => {
                        _({ complexId: e, id: i, animName: s, elementId: t, providerCfg: o });
                    });
            for (let [i, r] of Object.entries(s))
                ji(i, r, t, (e, s, t) => {
                    m({ id: i, animName: e, elementId: s, animCallParams: t, providerCfg: o });
                });
            (ki({ sound: a, soundCfg: n }),
                (null == o ? void 0 : o.skip) &&
                    !(null == o ? void 0 : o.skipTrigger) &&
                    Oi({ id: e, emitter: i, providerCfg: o }));
        }),
        f = o.useMemo(
            () => ({
                registerAnimation: d,
                unRegistrateAnimation: c,
                startAnimation: m,
                startGroupAnimation: p,
                startComplexAnimation: g,
                checkRegisteredInStorage: l,
                emitter: i,
            }),
            [l, i, d, m, g, p, c],
        );
    return e.jsx(hi.Provider, { value: f, children: s });
}
const [Pi, wi] = u()(
    ({ observableModel: e }) => {
        const s = {
                ...e.primitives(['timeToNextRerol', 'areAllMissionsCompleted', 'timeToMissionsUpdate']),
                missionsList: e.arrayClone('missionsList'),
                bonusMission: e.object('bonusMission'),
                bonusMissionBonuses: e.arrayClone('bonusMission.bonuses'),
            },
            i = $.model((e) => {
                const i = s.bonusMission.get();
                if (e == i.id) return i;
                const o = s.missionsList.get();
                return z(o, (s) => s.id == e);
            }),
            o = $.model(() => s.missionsList.get().some(({ animateCompletion: e }) => e));
        return { ...s, computes: { missionById: i, isAnyCompleteAnimation: o } };
    },
    ({ externalModel: e }) => ({ onReroll: e.createCallback((e) => ({ questId: e }), 'onReroll') }),
);
function Ti({ registerAnimation: e, id: s, animName: i, elementId: t = s, config: n }) {
    o.useLayoutEffect(() => (null == e ? void 0 : e({ id: s, animName: i, elementId: t, config: n })), [s, i, n, t, e]);
}
const Bi = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 1, config: { duration: 175 } }), await e({ opacity: 0, config: { duration: 800 } }));
        },
    },
    Li = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 0.5 }), await e({ opacity: 0 }));
        },
        config: { duration: 400 },
    },
    Ai = (e) => {
        switch (e) {
            case Wi.GREEN:
                return Bi;
            case Wi.GREEN_LENSE:
            case Wi.GREY_LENSE:
                return Li;
            default:
                return Bi;
        }
    };
const Di = { base: 'Glow_f9308f1a', icon: 'Glow_icon_d88e8512', icon__greyLense: 'Glow_icon__greyLense_4150ede3' },
    Wi = { GREEN: 'green', GREEN_LENSE: 'greenLense', GREY_LENSE: 'greyLense' },
    Gi = { path: '', width: 250, height: 250 },
    Fi = {
        [Wi.GREEN]: { path: 'userMissions.hub.animations.glow_green_1200x800', width: 1200, height: 800 },
        [Wi.GREEN_LENSE]: { path: 'userMissions.hub.animations.glow_lens_green_250x250', width: 250, height: 250 },
        [Wi.GREY_LENSE]: { path: 'userMissions.hub.animations.glow_lens_grey_250x250', width: 250, height: 250 },
    },
    Hi = (e) => (Fi[e] ? Fi[e] : Gi),
    qi = 'glow';
const Vi = o.memo(function ({ id: i, elementId: n, className: r, glowType: a = Wi.GREEN }) {
    const l = Ni(),
        m = k(() => (null == l ? void 0 : l.emitter.trigger(vi(i, qi, n), i, n))),
        { glowStyle: u, config: _ } = (function (e = Wi.GREY_LENSE, s) {
            const i = c(),
                n = Ai(e),
                r = k(() => (null == s ? void 0 : s())),
                a = k(() => {
                    i.start({ onRest: r, ...n, reset: !0 });
                }),
                l = k(() => {
                    i.start({ to: { opacity: 0 }, reset: !0, immediate: !0 });
                }),
                d = t({ ref: i, onRest: r, ...n });
            return o.useMemo(() => ({ glowStyle: d, config: { start: a, skip: l } }), [d, l, a]);
        })(a, m);
    return (
        Ti({
            id: i,
            elementId: n,
            registerAnimation: null == l ? void 0 : l.registerAnimation,
            animName: qi,
            config: _,
        }),
        e.jsx(d.div, {
            style: u,
            className: s(Di.base, r),
            children: e.jsx(C, { ...Hi(a), className: s(Di.icon, Di[`icon__${a}`]) }),
        })
    );
});
function $i(e, s) {
    const i = k(() => (null == s ? void 0 : s())),
        t = m(e, { onRest: i }),
        n = k((e) => {
            (null == e ? void 0 : e.to) != t.get() ? t.start({ ...e }) : null == s || s();
        }),
        r = k((e) => {
            t.start({ ...e, delay: 0, immediate: !0, config: { duration: 0 } });
        });
    return o.useMemo(() => ({ opacity: t, config: { start: n, skip: r } }), [t, r, n]);
}
const zi = 'opacity';
const Ui = o.memo(function ({ id: s, from: i, className: o, elementId: t, children: n, ...r }) {
        const a = Ni(),
            l = k(() => (null == a ? void 0 : a.emitter.trigger(vi(s, zi, t), s, t))),
            { opacity: c, config: m } = $i(i, l);
        return (
            Ti({
                id: s,
                elementId: t,
                registerAnimation: null == a ? void 0 : a.registerAnimation,
                animName: zi,
                config: m,
            }),
            n ? e.jsx(d.div, { style: { opacity: c }, className: o, ...r, children: n }) : null
        );
    }),
    Qi = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 0.5, config: { duration: 180 } }), await e({ opacity: 0, config: { duration: 420 } }));
        },
    },
    Yi = { from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' }, config: { duration: 600 } },
    Ki = 2;
const Xi = 'Reflection_7a45ed9c',
    Ji = 'Reflection_bg_5a5ee806',
    Zi = 'Reflection_lines_container_58665661',
    eo = 'Reflection_line_1_fc841d05',
    so = 'Reflection_line_2_10b982d',
    io = 'Reflection_line_3_43ed32ee',
    oo = 'reflection';
const to = o.memo(function ({ id: i, elementId: n, className: r }) {
        const { registerAnimation: a, emitter: l } = Ci(),
            m = k(() => l.trigger(vi(i, oo, n), i, n)),
            {
                bgStyle: u,
                linesStyle: _,
                config: p,
            } = (function (e) {
                const s = c(),
                    i = c(),
                    n = o.useRef(0),
                    r = k(() => {
                        ((n.current += 1), n.current == Ki && ((n.current = 0), null == e || e()));
                    }),
                    a = k(() => {
                        (s.start({ ...Qi, onRest: r, reset: !0 }), i.start({ ...Yi, onRest: r, reset: !0 }));
                    }),
                    l = k(() => {
                        (s.start({ to: { opacity: 0 }, immediate: !0 }), i.start({ ...Yi, immediate: !0 }));
                    }),
                    d = t({ ref: s, onRest: r, ...Qi }),
                    m = t({ ref: i, onRest: r, ...Yi });
                return o.useMemo(() => ({ bgStyle: d, linesStyle: m, config: { start: a, skip: l } }), [d, m, l, a]);
            })(m);
        return (
            Ti({ id: i, elementId: n, registerAnimation: a, animName: oo, config: p }),
            e.jsx('div', {
                className: s(Xi, r),
                children: e.jsx(d.div, {
                    style: u,
                    className: Ji,
                    children: e.jsxs(d.div, {
                        style: _,
                        className: Zi,
                        children: [
                            e.jsx('div', { className: eo }),
                            e.jsx('div', { className: so }),
                            e.jsx('div', { className: io }),
                        ],
                    }),
                }),
            })
        );
    }),
    no = {
        from: { opacity: 0, transform: 'scale(0.2)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.2)' },
        initial: { opacity: 1, transform: 'scale(1)' },
    },
    ro = 2;
const ao = 'swap';
const lo = o.memo(function ({ init: s = !1, id: i, elementId: t, className: n, children: r }) {
        const l = Ni(),
            c = k(() => (null == l ? void 0 : l.emitter.trigger(vi(i, ao, t), i, t))),
            { transitions: m, config: u } = (function (e, s) {
                const [i, t] = o.useState(e),
                    n = o.useRef(!1),
                    r = o.useRef(0),
                    l = k((e) => {
                        ((n.current = !1),
                            i != Boolean(null == e ? void 0 : e.state)
                                ? t(Boolean(null == e ? void 0 : e.state))
                                : null == s || s());
                    }),
                    c = k((e) => {
                        ((n.current = !0),
                            i != Boolean(null == e ? void 0 : e.state)
                                ? t(Boolean(null == e ? void 0 : e.state))
                                : null == s || s());
                    }),
                    d = k(() => {
                        ((r.current += 1), r.current == ro && (null == s || s(), (r.current = 0)));
                    }),
                    m = a(i, { ...no, onRest: d, immediate: n.current });
                return o.useMemo(() => ({ transitions: m, config: { start: l, skip: c } }), [m, l, c]);
            })(s, c);
        return (
            Ti({
                id: i,
                elementId: t,
                registerAnimation: null == l ? void 0 : l.registerAnimation,
                animName: ao,
                config: u,
            }),
            r ? m((s, i) => e.jsx(d.div, { style: s, className: n, children: r[Number(i)] })) : null
        );
    }),
    co = 'delta',
    mo = {
        CONDITION: 'condition',
        PROGRESS: 'progress',
        MISSION_ICON: 'missionIcon',
        REWARD: 'reward',
        REROLL_HOOK: 'reRollHook',
        REROLL_COMPONENT: 'reRollComponent',
        REROLL_COMPONENT_ICON: 'reRollComponentIcon',
        REROLL_COMPONENT_TIMER: 'reRollComponentTimer',
        REROLL_COMPONENT_BUTTON: 'reRollComponentButton',
    },
    [uo, _o] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['targetQuestId']),
            dailyMissionsBlockStatus: e.object('dailyMissionsBlockStatus'),
            premiumDailyMissionsBlockStatus: e.object('premiumDailyMissionsBlockStatus'),
            rewardProgressBlockStatus: e.object('rewardProgressBlockStatus'),
        }),
        U,
    ),
    po = { duration: 100, easing: (e) => -(Math.cos(Math.PI * e) - 1) / 2 },
    go = { from: { opacity: 0, y: -Q(10) }, to: { opacity: 1, y: 0 }, config: po },
    fo = { from: { opacity: 1, y: 0 }, to: { opacity: 0, y: Q(10) }, config: po };
const xo = 'slideInOut';
const bo = o.memo(function ({ id: s, elementId: i, className: n, children: r }) {
        var a, l;
        const [m, u] = o.useReducer((e) => e + 1, 0),
            _ = o.useRef(r),
            p = vi(s, xo, i),
            g = o.useRef(p),
            f = g.current == p,
            { registerAnimation: x, emitter: b } = Ci(),
            h = k(() => {
                ((g.current = p), b.trigger(vi(s, xo, i), s, i));
            }),
            { styles: C, config: N } = (function (e) {
                const s = c(),
                    i = o.useCallback(() => (null == e ? void 0 : e()), [e]),
                    n = t({ ref: s, opacity: 1, y: 0, config: po, onRest: i }),
                    r = k((e) => {
                        (null == e ? void 0 : e.leave)
                            ? s.start({ ...fo, ...e, onRest: i, reset: !0 })
                            : s.start({ ...go, ...e, onRest: i, reset: !0 });
                    }),
                    a = k((e) => {
                        (null == e ? void 0 : e.leave)
                            ? s.start({ ...fo, ...e, onRest: i, delay: 0, reset: !0, immediate: !0 })
                            : s.start({ ...go, ...e, onRest: i, delay: 0, reset: !0, immediate: !0 });
                    });
                return o.useMemo(() => ({ styles: n, config: { start: r, skip: a } }), [n, r, a]);
            })(h);
        o.useEffect(() => {
            f && (_.current = r);
        }, [f, r]);
        const v = k((e) => {
                (u(), N.start(e));
            }),
            I = k((e) => {
                (u(), N.skip(e));
            });
        return (
            Ti({ id: s, elementId: i, registerAnimation: x, animName: xo, config: { start: v, skip: I } }),
            f
                ? e.jsx(d.div, { style: C, className: n, children: r })
                : o.isValidElement(_.current) &&
                    (null == (a = _.current.props) ? void 0 : a.id) &&
                    (null == (l = _.current.props) ? void 0 : l.id) != s
                  ? e.jsx(d.div, { style: C, className: n, children: o.cloneElement(_.current, { id: s }) })
                  : e.jsx(d.div, { style: C, className: n, children: _.current })
        );
    }),
    ho = 'LOCKED_BLOCK',
    Co = 'lockIcon',
    No = 'lockText',
    vo = 'glowLock',
    Io = 'baseCard',
    yo = 'lockBonusHook',
    Ro = 'unlockBonusHook',
    Eo = {
        slideOut: {
            [xo]: {
                [mo.MISSION_ICON]: { leave: !0, delay: 100 },
                [mo.CONDITION]: { leave: !0, delay: 80 },
                [mo.PROGRESS]: { leave: !0, delay: 40 },
                [mo.REWARD]: { leave: !0, delay: 20 },
            },
        },
        slideIn: {
            [xo]: {
                [mo.MISSION_ICON]: { delay: 40 },
                [mo.CONDITION]: { delay: 60 },
                [mo.PROGRESS]: { delay: 100 },
                [mo.REWARD]: { delay: 120 },
            },
        },
    };
function jo(e, s) {
    o.useEffect(() => {
        e || s();
    });
}
function Mo(e, s, i) {
    const { totalProgress: o, isCompleted: t, id: n } = s;
    t && !i.isCompleted && 0 == o && (e[n] = st.missionComplete);
}
function Oo(e, s, i) {
    const { totalProgress: o, animateCompletion: t, isCompleted: n, id: r } = i;
    t ? 0 == o && (e[r] = st.missionComplete) : n && (s[r] = st.missionComplete);
}
const ko = {
        [zi]: {
            [Io]: { to: 0, reset: !0, immediate: !0 },
            [ho]: { to: 1, reset: !0, config: { duration: 300 } },
            [Co]: { to: 1, reset: !0, config: { duration: 300 } },
            [No]: { to: 1, reset: !0, config: { duration: 300 } },
        },
    },
    So = 'lockBonusAnim',
    Po = 'bonusSlideOut',
    wo = 'showLockComplete';
const To = { from: 0, to: 360, loop: !1, pause: !1, reset: !0, immediate: !1, config: { duration: 400 } };
const Bo = 'rotate';
const Lo = o.memo(function ({ id: s, className: i, elementId: t, props: n, children: r }) {
        const a = Ni(),
            l = k(() => (null == a ? void 0 : a.emitter.trigger(vi(s, Bo, t), s, t))),
            { rotate: c, config: u } = (function (e) {
                const s = o.useRef(!1),
                    i = k((e, i) => {
                        s.current && i.stop().set(0);
                    }),
                    t = m(0, { ...To, pause: !0, ...e, onStart: i }),
                    n = k((e) => {
                        ((s.current = !1), t.start({ ...To, ...e, onStart: i }).then(U));
                    }),
                    r = k((e) => {
                        ((s.current = !0), t.stop().set(0));
                    });
                return o.useMemo(() => ({ rotate: t, config: { start: n, skip: r } }), [t, r, n]);
            })(n),
            _ = k((e) => {
                (u.start(e), (null == e ? void 0 : e.loop) && l());
            }),
            p = k((e) => {
                (u.skip(e), l());
            });
        return (
            Ti({
                id: s,
                animName: Bo,
                elementId: t,
                registerAnimation: null == a ? void 0 : a.registerAnimation,
                config: { start: _, skip: p },
            }),
            r ? e.jsx(d.div, { style: { rotate: c }, className: i, children: r }) : null
        );
    }),
    Ao = {
        reRollSlideOut: { [Bo]: { [mo.REROLL_COMPONENT_ICON]: { loop: !0 } }, ...Eo.slideOut },
        reRollSlideIn: { [zi]: { [mo.REROLL_COMPONENT]: { to: 0, config: { duration: 100 } } }, ...Eo.slideIn },
        missionUnComplete: {
            [ao]: { '': { state: !1 } },
            [zi]: {
                [mo.CONDITION]: { to: 1 },
                [mo.PROGRESS]: { to: 1 },
                [mo.REROLL_COMPONENT]: { to: 1 },
                [mo.REWARD]: { to: 1 },
            },
        },
    },
    Do = 'useMissionChangedHook';
function Wo(e) {
    const { startGroupAnimation: s, registerAnimation: i, emitter: o } = Ci(),
        t = mo.REROLL_HOOK,
        n = vi(`${e}_slideInComplete`, Do, t),
        r = vi(`${e}_slideOutComplete`, Do, t);
    (X(o, n, () => {
        o.trigger(vi(e, Do, t), e, t);
    }),
        X(o, r, () => {
            (s({ groupId: e, groupCfg: Ao.missionUnComplete, providerCfg: { skip: !0, skipTrigger: !0 } }),
                setTimeout(() => {
                    s({ groupId: e, groupCfg: Ao.reRollSlideIn, providerCfg: { triggerId: n } });
                }, 400));
        }));
    const a = k(() => {
        s({
            groupId: e,
            groupCfg: Ao.reRollSlideOut,
            providerCfg: { triggerId: r },
            soundCfg: Ce.umg_hub_quest_reroll,
        });
    });
    Ti({ id: e, elementId: t, registerAnimation: i, animName: Do, config: { start: a, skip: U } });
}
const Go = {
    missionChange: { [Do]: { [mo.REROLL_HOOK]: {} } },
    hideReRollComponent: { [zi]: { [mo.REROLL_COMPONENT]: { to: 0, config: { duration: 150 } } } },
    lockBonus: { [So]: { [yo]: {} } },
};
function Fo(e, s, i) {
    const { id: o, currentProgress: t } = s;
    return !!(o != i.id || (0 == t && i.currentProgress)) && ((e[o] = Go.missionChange), !0);
}
const Ho = {
    showReRollTimer: {
        [zi]: {
            [mo.REROLL_COMPONENT_TIMER]: { to: 1, immediate: !0 },
            [mo.REROLL_COMPONENT_BUTTON]: { to: 0, immediate: !0 },
            [mo.REROLL_COMPONENT]: { to: 1, delay: 400, config: { duration: 200 } },
        },
        [Bo]: { [mo.REROLL_COMPONENT_ICON]: { immediate: !0, pause: !0, loop: !1 } },
    },
    stopRotation: { [Bo]: { [mo.REROLL_COMPONENT_ICON]: {} } },
    showReRollButton: {
        [zi]: {
            [mo.REROLL_COMPONENT_TIMER]: { to: 0, immediate: !0 },
            [mo.REROLL_COMPONENT_BUTTON]: { to: 1, immediate: !0 },
            [mo.REROLL_COMPONENT]: { to: 1, delay: 400, config: { duration: 200 } },
        },
    },
};
function qo(e, s) {
    return e.reduce((e, { id: i, isCompleted: o }) => (o || (e[i] = s), e), {});
}
const Vo = 'UnlockVideo_2a17fce0',
    $o = 'UnlockVideo_video_c11372d2',
    zo = g.resolve('videos'),
    Uo = 'unlockVideo';
const Qo = o.memo(function ({ id: i, elementId: t, className: n }) {
        const r = o.useRef(null),
            a = Ni(),
            { opacity: l, config: c } = $i(0),
            m = k(() => {
                r.current && (r.current.play(), c.start({ to: 1 }));
            }),
            u = k(U),
            _ = o.useCallback(() => {
                null == a || a.emitter.trigger(vi(i, Uo, t), i, t);
            }, [null == a ? void 0 : a.emitter, t, i]);
        Ti({
            id: i,
            elementId: t,
            registerAnimation: null == a ? void 0 : a.registerAnimation,
            animName: Uo,
            config: { start: m, skip: u },
        });
        const p = zo.readOrEmpty('user_missions.unlock_72x72');
        return e.jsx(d.div, {
            style: { opacity: l },
            className: s(Vo, n),
            children: e.jsx(J, { src: p, ref: r, onEnded: _, className: $o }),
        });
    }),
    Yo = {
        hideLockState: {
            [zi]: {
                [Co]: { to: 0, reset: !0, config: { duration: 300 } },
                [No]: { to: 0, reset: !0, config: { duration: 300 } },
            },
            [oo]: {},
            [qi]: { [vo]: {} },
            [Uo]: {},
        },
    },
    Ko = { [zi]: { [Io]: { to: 1, reset: !0, immediate: !0 } }, ...Eo.slideIn },
    Xo = 'unlockBonusAnim',
    Jo = 'hideLockEvent',
    Zo = 'showBonusQuestComplete';
const et = {
        MISSION_COMPLETE: 'missionComplete',
        RE_ROLL: 'reRoll',
        HIDE_REROLL_COMPONENT: 'hideReRollComponent',
        SHOW_REROLL_COMPONENT: 'showReRollComponent',
    },
    st = {
        missionComplete: {
            [ao]: { '': { state: !0 } },
            [qi]: {},
            [oo]: {},
            [zi]: {
                [mo.CONDITION]: { to: 0.5 },
                [mo.PROGRESS]: { to: 0.5 },
                [mo.REROLL_COMPONENT]: { to: 0, config: { duration: 300 } },
                [mo.REWARD]: { to: 0.5, delay: 200 },
            },
        },
    };
function it() {
    const { startAnimation: e, startComplexAnimation: s, checkRegisteredInStorage: i, emitter: t } = Ci(),
        { model: n } = _o(),
        { model: r } = wi(),
        a = r.missionsList.get(),
        l = y(r.bonusMission.get()),
        c = r.timeToNextRerol.get(),
        d = Z();
    (!(function ({ missions: e, bonusMission: s }) {
        const { startComplexAnimation: i } = Ci();
        K(() => {
            const o = {},
                t = {};
            (e.forEach((e) => {
                Oo(o, t, e);
            }),
                Oo(o, t, s),
                H(t) ||
                    i({ complexId: et.MISSION_COMPLETE, complexCfg: t, providerCfg: { skip: !0, skipTrigger: !0 } }),
                H(o) || i({ complexId: et.MISSION_COMPLETE, complexCfg: o, soundCfg: Ce.umg_hub_quest_complete }));
        });
    })({ missions: a, bonusMission: l }),
        (function ({ missions: e, bonusMission: s, isFirstRender: i }) {
            const { startComplexAnimation: o } = Ci(),
                t = Y(e),
                n = Y(s);
            jo(i, () => {
                const i = {};
                (e.forEach((e, s) => {
                    const o = t[s];
                    Mo(i, e, o);
                }),
                    Mo(i, s, n),
                    H(i) || o({ complexId: et.MISSION_COMPLETE, complexCfg: i, soundCfg: Ce.umg_hub_quest_complete }));
            });
        })({ missions: a, bonusMission: l, isFirstRender: d }),
        (function ({ missions: e, bonusMission: s, timeToNextReRoll: i, isFirstRender: o }) {
            const { startComplexAnimation: t, startGroupAnimation: n } = Ci(),
                r = Y(e),
                a = Y({ ...s });
            jo(o, () => {
                const o = {},
                    l = {};
                (e.forEach((e, s) => {
                    const i = r[s];
                    Fo(o, e, i) || (l[e.id] = Go.hideReRollComponent);
                }),
                    s.isAvailable && Fo(o, s, a),
                    !s.isAvailable && a.isAvailable && n({ groupId: s.id, groupCfg: Go.lockBonus }),
                    H(o) ||
                        (i > 0 && t({ complexId: et.HIDE_REROLL_COMPONENT, complexCfg: l }),
                        t({ complexId: et.RE_ROLL, complexCfg: o })));
            });
        })({ missions: a, bonusMission: l, timeToNextReRoll: c, isFirstRender: d }),
        (function ({ missions: e, timeToNextReRoll: s, isFirstRender: i }) {
            const { startComplexAnimation: o, emitter: t } = Ci(),
                n = Y(s);
            (jo(i, () => {
                if (0 == s && n > 0) {
                    const s = qo(e, Ho.showReRollButton);
                    o({
                        complexId: et.SHOW_REROLL_COMPONENT,
                        complexCfg: s,
                        providerCfg: { skip: !0, skipTrigger: !0 },
                    });
                }
            }),
                X(t, et.RE_ROLL, () => {
                    if (0 == s) {
                        const s = qo(e, Ho.stopRotation),
                            i = qo(e, Ho.showReRollButton);
                        return (
                            o({
                                complexId: et.SHOW_REROLL_COMPONENT,
                                complexCfg: s,
                                providerCfg: { skip: !0, skipTrigger: !0 },
                            }),
                            void o({ complexId: et.SHOW_REROLL_COMPONENT, complexCfg: i })
                        );
                    }
                    const i = qo(e, Ho.showReRollTimer);
                    o({ complexId: et.SHOW_REROLL_COMPONENT, complexCfg: i });
                }));
        })({ missions: a, timeToNextReRoll: c, isFirstRender: d }));
    const m = o.useCallback(() => {
        if (l.isCompleted) return;
        a.every(({ isCompleted: e }) => e) && e({ id: l.id, animName: Xo, elementId: Ro });
    }, [l.isCompleted, l.id, a, e]);
    (X(t, co, (e) => {
        const i = r.computes.missionById(e);
        (null == i ? void 0 : i.isCompleted) &&
            (null == i ? void 0 : i.currentProgress) == (null == i ? void 0 : i.totalProgress) &&
            s({
                complexId: et.MISSION_COMPLETE,
                complexCfg: { [e]: st.missionComplete },
                soundCfg: Ce.umg_hub_quest_complete,
            });
    }),
        X(t, et.MISSION_COMPLETE, () => {
            m();
        }));
    const u = n.targetQuestId.get(),
        _ = Y(u);
    o.useEffect(() => {
        u && _ != u && i({ id: u, animName: oo }) && e({ id: u, animName: oo, soundCfg: Ce.umg_hub_highlight });
    }, [i, _, e, u]);
}
const ot = o.memo(function ({ id: s, currentProgress: i, totalProgress: t, earned: n }) {
        const r = Ni(),
            { play: a } = O(),
            l = k(() => (null == r ? void 0 : r.emitter.trigger(co, s))),
            c = k(() => a(Ce.umg_hub_quest_progress)),
            d = o.useMemo(() => ({ onResolve: l, onStart: c }), [l, c]);
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(es, { current: i, total: t }),
                e.jsx(is, {
                    size: 'small',
                    value: i,
                    maxValue: t,
                    children: e.jsx(v, { id: s, initValue: i - n, initMaxValue: t, animationProps: d }),
                }),
            ],
        });
    }),
    tt = 'premiumMissionUnlockComplete';
const nt = o.memo(function ({ id: s, currentProgress: i, totalProgress: t, earned: n, isPaused: r }) {
        const a = Ci(),
            [l, c] = o.useState(!r);
        return (
            X(a.emitter, tt, (e) => {
                s === (null == e ? void 0 : e.id) && c(!0);
            }),
            e.jsx(ot, { id: s, currentProgress: l ? i : i - n, totalProgress: t, earned: n })
        );
    }),
    rt = {
        base: 'BaseMissionCard_34808815',
        topContent: 'BaseMissionCard_topContent_8e038c7d',
        bottomContent: 'BaseMissionCard_bottomContent_5f2b047c',
        iconPosition: 'BaseMissionCard_iconPosition_86b10539',
        icon: 'BaseMissionCard_icon_aafa664',
        icon__quest: 'BaseMissionCard_icon__quest_cdb5ef24',
        sizeBoxTemp: 'BaseMissionCard_sizeBoxTemp_b314ba10',
        condition: 'BaseMissionCard_condition_acf099dc',
        progress: 'BaseMissionCard_progress_22036f7a',
        rewardsContainer: 'BaseMissionCard_rewardsContainer_4bc401ed',
        rewardItem: 'BaseMissionCard_rewardItem_8174e9b5',
    };
function at({
    data: i,
    className: t,
    classNames: n,
    isPremium: r = !1,
    resId: a = 0,
    isProgressAnimationPaused: l = !1,
    iconSeverityLog: c = 'warn',
}) {
    const d = i.icon + (r ? '_gold' : '_silver'),
        m = T(
            { iconPath: `userMissions.missionIcons.c_32.${d}`, rewardSize: D.S24x24, rewardMaxCount: 4 },
            {
                medium: { iconPath: `userMissions.missionIcons.c_80.${d}` },
                large: { rewardSize: D.Small, rewardMaxCount: 5 },
            },
        ),
        { id: u, isCompleted: _, animateCompletion: p } = i,
        g = i.totalProgress > 0;
    return (
        o.useEffect(() => {
            i.icon || 'silent' == c || ee(`Icon for quest ID: ${u} is not set`, c);
        }, [i.icon, c, u]),
        e.jsxs('div', {
            className: s(rt.base, t),
            children: [
                e.jsx(Vi, { id: u }),
                e.jsxs('div', {
                    className: rt.topContent,
                    children: [
                        e.jsx(bo, {
                            id: u,
                            elementId: mo.MISSION_ICON,
                            className: rt.iconPosition,
                            children: e.jsxs(lo, {
                                id: u,
                                init: _ && !p,
                                children: [
                                    i.icon &&
                                        e.jsx(
                                            C,
                                            {
                                                path: m.iconPath,
                                                width: 32,
                                                height: 32,
                                                adaptive: { medium: { width: 80, height: 80 } },
                                                className: s(rt.icon, rt.icon__quest, null == n ? void 0 : n.icon),
                                            },
                                            m.iconPath,
                                        ),
                                    e.jsx(C, {
                                        path: 'userMissions.hub.basic.done_icon_s',
                                        width: 32,
                                        height: 32,
                                        adaptive: {
                                            medium: {
                                                width: 80,
                                                height: 80,
                                                path: 'userMissions.hub.basic.done_icon_m',
                                            },
                                        },
                                        className: rt.icon,
                                    }),
                                ],
                            }),
                        }),
                        e.jsx('div', { className: rt.sizeBoxTemp }),
                        e.jsx(Ui, {
                            id: u,
                            elementId: mo.CONDITION,
                            from: 0.9,
                            children: e.jsx(bo, {
                                id: u,
                                elementId: mo.CONDITION,
                                children: e.jsx(f, {
                                    text: se(i.description),
                                    justifyContent: x.Center,
                                    classMix: s(rt.condition, null == n ? void 0 : n.condition),
                                    isTooltipEnable: !0,
                                    isTruncationAvailable: !0,
                                    targetId: a,
                                }),
                            }),
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: rt.bottomContent,
                    children: [
                        e.jsx(Ui, {
                            id: u,
                            elementId: mo.PROGRESS,
                            from: 1,
                            children: e.jsx(bo, {
                                id: u,
                                elementId: mo.PROGRESS,
                                className: rt.progress,
                                children:
                                    g &&
                                    (r
                                        ? e.jsx(nt, {
                                              id: u,
                                              currentProgress: i.currentProgress,
                                              totalProgress: i.totalProgress,
                                              earned: i.earned,
                                              isPaused: l,
                                          })
                                        : e.jsx(ot, {
                                              id: u,
                                              currentProgress: i.currentProgress,
                                              totalProgress: i.totalProgress,
                                              earned: i.earned,
                                          })),
                            }),
                        }),
                        e.jsx(Ui, {
                            id: u,
                            elementId: mo.REWARD,
                            from: 1,
                            className: s(rt.rewardsContainer, null == n ? void 0 : n.rewards),
                            children: e.jsx(bo, {
                                id: u,
                                elementId: mo.REWARD,
                                children: e.jsx(
                                    Ne,
                                    {
                                        bonuses: i.bonuses,
                                        questId: i.id,
                                        size: m.rewardSize,
                                        resId: a,
                                        count:
                                            i.bonuses.length <= m.rewardMaxCount
                                                ? m.rewardMaxCount
                                                : m.rewardMaxCount - 1,
                                        rewardItemClassMix: rt.rewardItem,
                                    },
                                    u,
                                ),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
const lt = 'DailyBonusMissionCard_cardBlock_cc29aa9d',
    ct = 'DailyBonusMissionCard_7d966ce1',
    dt = 'DailyBonusMissionCard_cardBlock__disabled_6a0da54e',
    mt = 'DailyBonusMissionCard_lockBlock_ac1dd103',
    ut = 'DailyBonusMissionCard_lockContent_19bd64b6',
    _t = 'DailyBonusMissionCard_lockIconBlock_cb535d36',
    pt = 'DailyBonusMissionCard_lockIcon_da4d31e0',
    gt = 'DailyBonusMissionCard_unlockVideo_86889f8c',
    ft = 'DailyBonusMissionCard_lockMessage_662cb362',
    xt = 'DailyBonusMissionCard_timer_f1d1a15a',
    bt = g.resolve('aliases'),
    ht = g.resolve('strings'),
    Ct = new Map([
        [!0, 1],
        [!1, 0],
    ]);
function Nt({ data: i, isAnyCompleteAnimation: o, timeToMissionsUpdate: t }) {
    const { id: n, isAvailable: r } = i,
        a = !r || o;
    (!(function (e, s) {
        const { startGroupAnimation: i, registerAnimation: o, emitter: t } = Ci();
        (X(t, wo, () => {
            t.trigger(vi(e, So, s), e, s);
        }),
            X(t, Po, () => {
                i({ groupId: e, groupCfg: ko, providerCfg: { triggerId: wo } });
            }));
        const n = k(() => {
                i({ groupId: e, groupCfg: Eo.slideOut, providerCfg: { triggerId: Po } });
            }),
            r = k(() => {
                i({ groupId: e, groupCfg: Eo.slideOut, providerCfg: { skip: !0, triggerId: Po } });
            });
        Ti({ id: e, elementId: s, registerAnimation: o, animName: So, config: { start: n, skip: r } });
    })(n, yo),
        (function (e, s) {
            const { startGroupAnimation: i, registerAnimation: o, emitter: t } = Ci();
            (X(t, Zo, () => {
                t.trigger(vi(e, Xo, s), e, s);
            }),
                X(t, Jo, () => {
                    i({ groupId: e, groupCfg: Ko, providerCfg: { triggerId: Zo } });
                }));
            const n = k(() => {
                    (i({ groupId: e, groupCfg: Eo.slideOut, providerCfg: { skip: !0, skipTrigger: !0 } }),
                        i({
                            groupId: e,
                            groupCfg: Yo.hideLockState,
                            providerCfg: { triggerId: Jo },
                            soundCfg: Ce.umg_hub_unlock_bonus,
                        }));
                }),
                r = k(() => {
                    i({
                        groupId: e,
                        groupCfg: { ...Eo.slideOut, ...Yo.hideLockState },
                        providerCfg: { skip: !0, skipTrigger: !0 },
                    });
                });
            Ti({ id: e, elementId: s, registerAnimation: o, animName: Xo, config: { start: n, skip: r } });
        })(n, Ro),
        Wo(n));
    const l = h({ body: ht.readOrEmpty('user_missions.hub.basic_missions.daily.bonus_daily_missions_timer.tooltip') });
    return e.jsxs('div', {
        className: ct,
        children: [
            e.jsxs(Ui, {
                id: n,
                elementId: Io,
                className: s(lt, a && dt),
                from: Ct.get(!a),
                children: [
                    e.jsx(at, {
                        data: { ...i, id: n },
                        resId: bt.read((e) =>
                            e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId'),
                        ),
                        iconSeverityLog: i.isAvailable ? 'warn' : 'silent',
                    }),
                    !i.isCompleted &&
                        t > 0 &&
                        e.jsx('div', { className: xt, ...l, children: e.jsx(A, { start: t, size: A.size.x24x24 }) }),
                ],
            }),
            e.jsxs(Ui, {
                id: n,
                elementId: ho,
                className: mt,
                from: Ct.get(a),
                children: [
                    e.jsx(Vi, { id: n, elementId: vo, glowType: Wi.GREY_LENSE }),
                    e.jsxs('div', {
                        className: ut,
                        children: [
                            e.jsxs('div', {
                                className: _t,
                                children: [
                                    e.jsx(Ui, {
                                        id: n,
                                        elementId: Co,
                                        from: 1,
                                        children: e.jsx('div', { className: pt }),
                                    }),
                                    e.jsx(Qo, { id: n, className: gt }),
                                ],
                            }),
                            e.jsx(Ui, {
                                id: n,
                                elementId: No,
                                from: 1,
                                children: e.jsx(p, {
                                    path: 'user_missions.hub.basic_missions.daily.bonus_daily_missions_lock_info',
                                    className: ft,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(to, { id: n }),
        ],
    });
}
const vt = {
        base: 'RerollButton_5f432227',
        base__active: 'RerollButton_base__active_c1f50ac9',
        buttonAnim: 'RerollButton_buttonAnim_cb83531a',
        buttonAnim__hided: 'RerollButton_buttonAnim__hided_bb070845',
        title: 'RerollButton_title_2b7fc3a',
        iconAnimation: 'RerollButton_iconAnimation_8a6d0ff3',
        icon: 'RerollButton_icon_5eb0ba49',
        timerAnim: 'RerollButton_timerAnim_36fcf1f3',
        timer: 'RerollButton_timer_611c1639',
    },
    It = 'Reroll button',
    yt = g.resolve('aliases'),
    Rt = g.resolve('views'),
    Et = g.resolve('strings'),
    jt = yt.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId')),
    Mt = Rt.read((e) => e.mono.user_missions.tooltips.daily_reroll_tooltip('resId'));
function Ot({ id: i, isCompleted: o, onClick: t, className: n, timeToNextReroll: r }) {
    const a = O(),
        l = ie({ resId: jt, contentId: Mt, disabled: o }),
        c = !o && 0 === r,
        d = r > 0;
    return e.jsxs(Ui, {
        id: i,
        elementId: mo.REROLL_COMPONENT,
        from: o ? 0 : 1,
        ...l,
        className: s(vt.base, c && vt.base__active, n),
        onClick: c ? t : void 0,
        children: [
            e.jsx(Ui, {
                from: d ? 1 : 0,
                id: i,
                elementId: mo.REROLL_COMPONENT_TIMER,
                className: vt.timerAnim,
                children: e.jsx(A, {
                    start: r,
                    format: A.format.superCompact,
                    size: A.size.x24x24,
                    className: vt.timer,
                }),
            }),
            e.jsxs(Ui, {
                from: d ? 0 : 1,
                id: i,
                onMouseEnter: () => {
                    a.play('mouse-enter', { target: It });
                },
                elementId: mo.REROLL_COMPONENT_BUTTON,
                className: s(vt.buttonAnim, d && vt.buttonAnim__hided),
                children: [
                    e.jsx('div', {
                        className: vt.title,
                        children: Et.readOrEmpty('user_missions.hub.basic_missions.daily.reroll_button'),
                    }),
                    e.jsx(Lo, {
                        id: i,
                        elementId: mo.REROLL_COMPONENT_ICON,
                        className: vt.iconAnimation,
                        children: e.jsx('div', { className: vt.icon }),
                    }),
                ],
            }),
        ],
    });
}
const kt = 'DailyMissionCard_dbc24668',
    St = 'DailyMissionCard_reroll_fd5c6ea8',
    Pt = g.resolve('aliases');
function wt({ data: s, timeToNextReroll: i, onReroll: o }) {
    const { id: t, isCompleted: n } = s;
    return (
        Wo(t),
        e.jsxs('div', {
            className: kt,
            children: [
                e.jsx(at, {
                    data: s,
                    resId: Pt.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId')),
                }),
                e.jsx(to, { id: s.id }),
                s.isRerollEnabled &&
                    e.jsx(Ot, { id: t, isCompleted: n, onClick: () => o(s.id), timeToNextReroll: i, className: St }),
            ],
        })
    );
}
const Tt = 'DailyMissionsBlock_d8a9293c',
    Bt = 'DailyMissionsBlock_allMissionsCompletedBlock_d019306a',
    Lt = 'DailyMissionsBlock_allMissionsCompletedMessage_20d9eaa9',
    At = 'DailyMissionsBlock_timer_c9dd266c',
    Dt = 'DailyMissionsBlock_separator_3d64a18',
    Wt = g.resolve('strings'),
    Gt = i(function () {
        const { model: s, controls: i } = wi(),
            o = s.timeToMissionsUpdate.get();
        it();
        const t = h({
            body: Wt.readOrEmpty('user_missions.hub.basic_missions.daily.new_daily_missions_timer.tooltip'),
        });
        return e.jsxs('div', {
            className: Tt,
            children: [
                s.areAllMissionsCompleted.get() &&
                    e.jsxs('div', {
                        className: Bt,
                        ...t,
                        children: [
                            e.jsx('div', {
                                className: Lt,
                                children: Wt.readOrEmpty(
                                    'user_missions.hub.basic_missions.daily.new_daily_missions_timer.message',
                                ),
                            }),
                            e.jsx(A, { start: o, size: A.size.x16x16, className: At }),
                        ],
                    }),
                P(s.missionsList.get(), (o, t) =>
                    e.jsxs(
                        l.Fragment,
                        {
                            children: [
                                e.jsx(wt, { data: o, onReroll: i.onReroll, timeToNextReroll: s.timeToNextRerol.get() }),
                                e.jsx('div', { className: Dt }),
                            ],
                        },
                        `dm_card_${t}`,
                    ),
                ),
                e.jsx(Nt, {
                    data: { ...s.bonusMission.get(), bonuses: s.bonusMissionBonuses.get() },
                    isAnyCompleteAnimation: s.computes.isAnyCompleteAnimation(),
                    timeToMissionsUpdate: o,
                }),
            ],
        });
    }),
    Ft = {
        rootId: g
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId')),
    };
function Ht() {
    return e.jsx(Pi, { options: Ft, children: e.jsx(Si, { children: e.jsx(Gt, {}) }) });
}
const [qt, Vt] = u()(
        ({ observableModel: e }) => {
            const s = { ...e.primitives(['isAvailable']), missionsList: e.arrayClone('missionsList') },
                i = $.model((e) => z(s.missionsList.get(), (s) => s.id == e));
            return { ...s, computes: { missionById: i } };
        },
        ({ externalModel: e }) => ({ onPurchasePremium: e.createCallbackNoArgs('onPurchasePremium') }),
    ),
    $t = {
        from: { opacity: 0, transform: 'translateX(-10%)' },
        to: async (e) => {
            (await e({ opacity: 0.2, transform: 'translateX(0%)', config: { duration: 300 } }),
                await e({ opacity: 0, transform: 'translateX(10%)', config: { duration: 300 } }));
        },
    },
    zt = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 0.25, config: { duration: 200 } }), await e({ opacity: 0, config: { duration: 400 } }));
        },
    },
    Ut = {
        from: { opacity: 0.25 },
        to: async (e) => {
            (await e({ opacity: 0.9, config: { duration: 200 } }),
                await e({ opacity: 0.25, config: { duration: 400 } }));
        },
    },
    Qt = 4;
const Yt = 'Arrow_391ca11f',
    Kt = 'Arrow_iconBig_9a073166',
    Xt = 'Arrow_icon_bbabc0ab',
    Jt = 'Arrow_icon__left_cc9a053b',
    Zt = 'Arrow_icon__right_2cb4415d',
    en = 'arrow';
function sn({ id: i }) {
    const { registerAnimation: n, emitter: a } = Ci(),
        l = k(() => a.trigger(vi(i, en), i)),
        {
            bigArrowStyle: d,
            leftArrowStyle: m,
            mainArrowStyle: u,
            rightArrowStyle: _,
            config: p,
        } = (function (e) {
            const s = c(),
                i = c(),
                n = c(),
                r = c(),
                a = o.useRef(0),
                l = k(() => {
                    ((a.current += 1), a.current == Qt && ((a.current = 0), null == e || e()));
                }),
                d = k((e) => {
                    const o = 0 | (null == e ? void 0 : e.delay);
                    (s.start({ ...$t, onRest: l, reset: !0, delay: o }),
                        i.start({ ...zt, onRest: l, reset: !0, delay: o + 150 }),
                        n.start({ ...Ut, onRest: l, reset: !0, delay: o + 250 }),
                        r.start({ ...zt, onRest: l, reset: !0, delay: o + 350 }));
                }),
                m = t({ ref: s, onRest: l, ...$t }),
                u = t({ ref: i, onRest: l, ...zt }),
                _ = t({ ref: n, onRest: l, ...Ut }),
                p = t({ ref: r, onRest: l, ...zt });
            return o.useMemo(
                () => ({
                    bigArrowStyle: m,
                    leftArrowStyle: u,
                    mainArrowStyle: _,
                    rightArrowStyle: p,
                    config: { start: d, skip: U },
                }),
                [m, u, _, p, d],
            );
        })(l);
    return (
        Ti({ id: i, registerAnimation: n, animName: en, config: p }),
        e.jsxs('div', {
            className: Yt,
            children: [
                e.jsx(r.div, { style: d, className: Kt }),
                e.jsx(r.div, { style: m, className: s(Xt, Jt) }),
                e.jsx(r.div, { style: _, className: s(Xt, Zt) }),
                e.jsx(r.div, { style: u, className: Xt }),
            ],
        })
    );
}
const on = 'card',
    tn = 'lockIcon',
    nn = 'glowLock',
    rn = 'unlockGlowShow',
    an = 'unlockGlowHide',
    ln = 'PremiumDailyMissionsCard_606cad53',
    cn = 'PremiumDailyMissionsCard_lockContainer_df076624',
    dn = 'PremiumDailyMissionsCard_card_b95d2566',
    mn = 'PremiumDailyMissionsCard_icon_77ecd434',
    un = 'PremiumDailyMissionsCard_condition_5fa7ebd',
    _n = 'PremiumDailyMissionsCard_unlockVideo_416f470a',
    pn = 'PremiumDailyMissionsCard_lockIcon_9bac6cb',
    gn = 'PremiumDailyMissionsCard_unlockGlowContainer_c6213bf6',
    fn = 'PremiumDailyMissionsCard_unlockGlow_6356a26d',
    xn = g.resolve('aliases'),
    bn = g.resolve('strings');
function hn({ data: s, isJustUnlocked: i }) {
    const o = h({ body: bn.readOrEmpty('user_missions.hub.basic_missions.daily.premium.locked_mission.tooltip') }),
        t = s.isLocked || i;
    return e.jsxs('div', {
        className: ln,
        children: [
            e.jsxs(Ui, {
                id: s.id,
                elementId: on,
                from: t ? 0.25 : 1,
                className: dn,
                children: [
                    e.jsx(at, {
                        data: s,
                        isPremium: !0,
                        classNames: { icon: mn, condition: un },
                        resId: xn.read((e) =>
                            e.user_missions.hub.basicMissions.DailyMissionsSection.PremiumBlock('resId'),
                        ),
                        isProgressAnimationPaused: t,
                    }),
                    e.jsx(to, { id: s.id }),
                ],
            }),
            t &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsxs('div', {
                            className: cn,
                            ...(s.isLocked && o),
                            children: [
                                e.jsx(Vi, { id: s.id, elementId: nn, glowType: Wi.GREY_LENSE }),
                                e.jsx(Ui, {
                                    id: s.id,
                                    elementId: tn,
                                    from: 1,
                                    children: e.jsx('div', { className: pn }),
                                }),
                                e.jsx(Qo, { id: s.id, className: _n }),
                            ],
                        }),
                        e.jsx(Ui, {
                            id: s.id,
                            elementId: an,
                            from: 1,
                            className: gn,
                            children: e.jsx(Ui, {
                                id: s.id,
                                elementId: rn,
                                from: 0,
                                className: gn,
                                children: e.jsx('div', { className: fn }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function Cn(e, s) {
    o.useEffect(() => {
        e && s();
    });
}
const Nn = 1e3,
    vn = {
        missionComplete: {
            [ao]: { '': { state: !0 } },
            [qi]: {},
            [zi]: { [mo.CONDITION]: { to: 0.25 }, [mo.PROGRESS]: { to: 0.5 }, [mo.REWARD]: { to: 0.5, delay: 200 } },
            [en]: { '': { delay: 600 } },
        },
        missionUnlock: {
            [oo]: {},
            [qi]: { [nn]: {} },
            [Uo]: {},
            [zi]: { [on]: { to: 1, delay: 1250 }, [tn]: { to: 0 }, [rn]: { to: 1 }, [an]: { to: 0, delay: 400 } },
        },
    };
function In({ completeIdx: e, missions: s, startGroupAnimation: i }) {
    const o = s[e];
    if ((i({ groupId: o.id, groupCfg: vn.missionComplete, soundCfg: Ce.umg_hub_quest_complete }), e < s.length - 1)) {
        const o = e + 1,
            t = s[o];
        setTimeout(() => {
            i({
                groupId: t.id,
                groupCfg: vn.missionUnlock,
                providerCfg: { triggerId: tt, triggerParams: { unlockedIdx: o } },
                soundCfg: Ce.umg_hub_unlock_premium,
            });
        }, Nn);
    }
}
const yn = {
        MISSION_COMPLETE: 'premiumMissionComplete',
        MISSION_LOCKED: 'premiumMissionLocked',
        MISSION_UN_COMPLETE: 'premiumMissionUnComplete',
    },
    Rn = {
        missionUnComplete: {
            [ao]: { '': { state: !1 } },
            [zi]: {
                [mo.CONDITION]: { to: 0.9 },
                [mo.PROGRESS]: { to: 1 },
                [mo.REWARD]: { to: 1 },
                [on]: { to: 1 },
                [tn]: { to: 0 },
            },
        },
        missionLock: {
            [ao]: { '': { state: !1 } },
            [zi]: {
                [mo.CONDITION]: { to: 0.9 },
                [mo.PROGRESS]: { to: 1 },
                [mo.REWARD]: { to: 1 },
                [on]: { to: 0.25 },
                [tn]: { to: 1 },
            },
        },
    };
function En() {
    const { startAnimation: e, checkRegisteredInStorage: s } = Ci(),
        { model: i } = _o(),
        { model: t } = Vt(),
        n = y(t.missionsList.get()),
        r = Y(n),
        a = Z(),
        l = i.targetQuestId.get(),
        c = Y(l);
    (o.useEffect(() => {
        l && c != l && s({ id: l, animName: oo }) && e({ id: l, animName: oo, soundCfg: Ce.umg_hub_highlight });
    }, [s, c, e, l]),
        (function ({ missions: e }) {
            const { startGroupAnimation: s } = Ci();
            K(() => {
                const i = e.findIndex((e) => e.isCompleted && e.animateCompletion);
                -1 !== i && In({ completeIdx: i, missions: e, startGroupAnimation: s });
            });
        })({ missions: n }),
        (function ({ isFirstRender: e, missions: s, prevMissions: i }) {
            const { startComplexAnimation: o } = Ci();
            (K(() => {
                const e = {};
                (s.forEach((s) => {
                    s.isCompleted && !s.animateCompletion && (e[s.id] = vn.missionComplete);
                }),
                    H(e) ||
                        o({
                            complexId: yn.MISSION_COMPLETE,
                            complexCfg: e,
                            providerCfg: { skip: !0, skipTrigger: !0 },
                        }));
            }),
                Cn(!e, () => {
                    const e = {},
                        t = {};
                    (s.forEach((s, o) => {
                        const n = i[o];
                        s.isLocked && !n.isLocked
                            ? (e[s.id] = Rn.missionLock)
                            : !s.isCompleted && n.isCompleted && (t[s.id] = Rn.missionUnComplete);
                    }),
                        H(e) ||
                            o({
                                complexId: yn.MISSION_LOCKED,
                                complexCfg: e,
                                providerCfg: { skip: !0, skipTrigger: !0 },
                            }),
                        H(t) ||
                            o({
                                complexId: yn.MISSION_UN_COMPLETE,
                                complexCfg: t,
                                providerCfg: { skip: !0, skipTrigger: !0 },
                            }));
                }));
        })({ isFirstRender: a, missions: n, prevMissions: r }),
        (function ({ isFirstRender: e, missions: s, prevMissions: i }) {
            const { startGroupAnimation: o, emitter: t } = Ci();
            (X(t, tt, ({ unlockedIdx: e }) => {
                s[e].isCompleted && In({ completeIdx: e, missions: s, startGroupAnimation: o });
            }),
                Cn(!e, () => {
                    const e = s.findIndex((e, s) => {
                        const o = i[s];
                        return e.isCompleted && !o.isCompleted;
                    });
                    -1 !== e && In({ completeIdx: e, missions: s, startGroupAnimation: o });
                }));
        })({ isFirstRender: a, missions: n, prevMissions: r }));
}
const jn = 'PremiumDailyMissionsList_a02f9e79',
    Mn = i(function () {
        const { model: s } = Vt(),
            i = s.missionsList.get();
        return (
            En(),
            e.jsx('div', {
                className: jn,
                children: P(i, (s, o) => {
                    var t;
                    const n = (o > 0 && (null == (t = G(i, o - 1)) ? void 0 : t.animateCompletion)) || !1;
                    return e.jsxs(
                        l.Fragment,
                        {
                            children: [
                                e.jsx(hn, { data: s, isJustUnlocked: n }, `pdm_card_${s.id}`),
                                o < i.length - 1 && e.jsx(sn, { id: s.id }),
                            ],
                        },
                        `pdm_card_${s.id}`,
                    );
                }),
            })
        );
    }),
    On = 'PurchasePremiumState_bg_9f5578d2',
    kn = 'PurchasePremiumState_6e377b64',
    Sn = 'PurchasePremiumState_icon_f474fb80',
    Pn = 'PurchasePremiumState_container_c4d5c44e',
    wn = 'PurchasePremiumState_title_d576f228',
    Tn = 'PurchasePremiumState_message_a8e12b7c',
    Bn = 'PurchasePremiumState_button_4e9a2fc9',
    Ln = 'PurchasePremiumState_buttonTitle_2b5af5a0',
    An = g.resolve('strings');
function Dn() {
    const { controls: s } = Vt();
    return e.jsxs('div', {
        className: kn,
        children: [
            e.jsx('div', { className: On }),
            e.jsx('div', { className: Sn }),
            e.jsxs('div', {
                className: Pn,
                children: [
                    e.jsx('div', {
                        className: wn,
                        children: An.readOrEmpty('user_missions.hub.basic_missions.daily.purchase_premium.title'),
                    }),
                    e.jsx('div', {
                        className: Tn,
                        children: An.readOrEmpty('user_missions.hub.basic_missions.daily.purchase_premium.message'),
                    }),
                    e.jsx(_, {
                        theme: _.themes.primary,
                        size: _.sizes.small,
                        onClick: s.onPurchasePremium,
                        className: Bn,
                        children: e.jsx('div', {
                            className: Ln,
                            children: An.readOrEmpty('user_missions.hub.basic_missions.daily.purchase_premium.button'),
                        }),
                    }),
                ],
            }),
        ],
    });
}
const Wn = i(function () {
        const { model: s } = Vt();
        return s.isAvailable.get() ? e.jsx(Mn, {}) : e.jsx(Dn, {});
    }),
    Gn = {
        rootId: g
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.PremiumBlock('resId')),
    };
function Fn() {
    return e.jsx(qt, { options: Gn, children: e.jsx(Si, { children: e.jsx(Wn, {}) }) });
}
const [Hn, qn] = u()(({ observableModel: e }) => e.primitives(['progressType']), U);
var Vn = ((e) => ((e.EpicQuest = 'epicQuest'), (e.WinBack = 'winBack'), (e.Disabled = 'disabled'), e))(Vn || {});
const [$n, zn] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['id', 'current', 'total', 'earned', 'winBackTimeLeft']),
            bonuses: e.arrayClone('bonuses'),
        }),
        ({ externalModel: e }) => ({ takeWinBackReward: e.createCallbackNoArgs('onTakeWinBackReward') }),
    ),
    Un = 'ClaimWinBack_f65a728',
    Qn = 'ClaimWinBack_claimButton_f4d9ca67',
    Yn = 'ClaimWinBack_claimText_329621c1',
    Kn = 'ClaimWinBack_timer_89673125';
const Xn = i(function ({ className: i }) {
        const { model: o, controls: t } = zn(),
            n = g.resolve('strings'),
            r = o.winBackTimeLeft.get();
        return e.jsxs('div', {
            className: s(Un, i),
            children: [
                e.jsx(_, {
                    theme: 'primary',
                    size: 'small',
                    autoAlignContent: !1,
                    className: Qn,
                    onClick: t.takeWinBackReward,
                    children: e.jsx('div', {
                        className: Yn,
                        children: n.readOrEmpty(
                            'user_missions.hub.reward_progress.epic_quest_progress.collect_win_back',
                        ),
                    }),
                }),
                e.jsxs('div', {
                    className: Kn,
                    children: [
                        n.readOrEmpty('user_missions.hub.reward_progress.epic_quest_progress.time_left'),
                        e.jsx(A, { start: r }),
                    ],
                }),
            ],
        });
    }),
    Jn = 'EpicQuestProgress_bg_22314285',
    Zn = 'EpicQuestProgress_70dbe9c2',
    er = 'EpicQuestProgress_header_b693c8b4',
    sr = 'EpicQuestProgress_info_e415f6af',
    ir = 'EpicQuestProgress_title_4037f217',
    or = 'EpicQuestProgress_text_2f226d2',
    tr = 'EpicQuestProgress_rewardsMix_8b04a35e',
    nr = 'EpicQuestProgress_progress_9b81fedd',
    rr = 'EpicQuestProgress_progressBar_115e7a24',
    ar = 'EpicQuestProgress_claimWinBack_b707ef06',
    lr = g.resolve('aliases');
const cr = i(function () {
        const { model: s } = zn(),
            i = s.total.get(),
            o = s.current.get(),
            t = s.earned.get(),
            n = s.id.get(),
            r = g.resolve('strings'),
            a = T({ rewardSize: D.S24x24 }, { large: { rewardSize: D.Small } });
        return e.jsxs('div', {
            className: Zn,
            children: [
                e.jsx('div', { className: Jn }),
                e.jsxs('div', {
                    className: er,
                    children: [
                        e.jsxs('div', {
                            className: sr,
                            children: [
                                e.jsx(f, {
                                    classMix: ir,
                                    isTruncationAvailable: !0,
                                    isTooltipEnable: !0,
                                    text: r.readOrEmpty('user_missions.hub.reward_progress.epic_quest_progress.title'),
                                    targetId: lr.read((e) =>
                                        e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock(
                                            'resId',
                                        ),
                                    ),
                                }),
                                e.jsx(f, {
                                    classMix: or,
                                    isTruncationAvailable: !0,
                                    isTooltipEnable: !0,
                                    text: r.readOrEmpty(
                                        'user_missions.hub.reward_progress.epic_quest_progress.sub_title',
                                    ),
                                    targetId: lr.read((e) =>
                                        e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock(
                                            'resId',
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        e.jsx(Ne, {
                            bonuses: s.bonuses.get(),
                            questId: n,
                            size: a.rewardSize,
                            resId: lr.read((e) =>
                                e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'),
                            ),
                            count: 5,
                            classMix: tr,
                            isFixedBoxSize: !1,
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: nr,
                    children: [
                        e.jsx(es, { current: o, total: i }),
                        e.jsxs(is, {
                            value: o,
                            size: 'full',
                            maxValue: i,
                            className: rr,
                            children: [
                                e.jsx(v, { initValue: o - t, initMaxValue: i }),
                                s.winBackTimeLeft.get() > 0 && e.jsx(Xn, { className: ar }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    dr = {
        rootId: g
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
        context: 'model.epicQuestProgress',
    };
function mr() {
    return e.jsx($n, { options: dr, children: e.jsx(cr, {}) });
}
const [ur, _r] = u()(
        ({ observableModel: e }) => {
            const s = {
                    ...e.primitives([
                        'id',
                        'current',
                        'total',
                        'earned',
                        'isBattlePassActive',
                        'offersState',
                        'timeLeftToClaim',
                    ]),
                    quests: e.arrayClone('quests'),
                },
                i = $.model((e) => G(s.quests.get(), e)),
                o = $.model((e) => {
                    const s = i(e);
                    return s ? oe(s.rewards) : [];
                });
            return { ...s, computes: { rewardsByIndex: o } };
        },
        ({ externalModel: e }) => ({
            takeReward: e.createCallback((e) => ({ questNumber: e }), 'onTakeReward'),
            takeAllRewards: e.createCallbackNoArgs('onTakeAllRewards'),
        }),
    ),
    pr = g
        .resolve('aliases')
        .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'));
var gr = ((e) => ((e.AVAILABLE = 'available'), (e.DISABLED = 'disabled'), (e.NO_OFFERS = 'no_offers'), e))(gr || {});
const fr = 'MainReward_c68d434f',
    xr = 'MainReward_base__withBattlePass_92334d39',
    br = 'MainReward_hitBox_6b11fff9',
    hr = 'MainReward_claimButton_20c977ab',
    Cr = 'MainReward_claimText_107d14cf',
    Nr = 'MainReward_timer_234aa797',
    vr = g.resolve('aliases'),
    Ir = g.resolve('views');
const yr = i(function () {
    const { model: i, controls: o } = _r(),
        t = i.timeLeftToClaim.get(),
        n = i.offersState.get(),
        r = g.resolve('strings'),
        a = ie({
            resId: vr.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
            contentId: Ir.read((e) => e.lobby.winback.tooltips.MainRewardTooltip('resId')),
        });
    return e.jsxs('div', {
        className: s(fr, i.isBattlePassActive.get() && xr),
        children: [
            e.jsx('div', { ...a, className: br }),
            n != gr.NO_OFFERS &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(_, {
                            theme: 'primary',
                            size: 'medium',
                            disabled: n == gr.DISABLED,
                            className: hr,
                            onClick: o.takeAllRewards,
                            children: e.jsx('div', {
                                className: Cr,
                                children: r.readOrEmpty(
                                    'user_missions.hub.reward_progress.win_back_quest_progress.claim_main',
                                ),
                            }),
                        }),
                        t > 0 &&
                            e.jsxs('div', {
                                className: Nr,
                                children: [
                                    r.readOrEmpty(
                                        'user_missions.hub.reward_progress.win_back_quest_progress.time_left',
                                    ),
                                    e.jsx(A, { start: t }),
                                ],
                            }),
                    ],
                }),
        ],
    });
});
var Rr = ((e) => (
    (e.VEHICLE_FOR_GIFT = 'vehicleForGift'),
    (e.VEHICLE_DISCOUNT = 'vehicleDiscount'),
    (e.VEHICLE_FOR_RENT = 'vehicleForRent'),
    (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
    (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount'),
    e
))(Rr || {});
const Er = {
        base: 'WinBackReward_debcb7d5',
        icon: 'WinBackReward_icon_592ffdd7',
        base__vehicleForGift: 'WinBackReward_base__vehicleForGift_5fa23c6c',
        base__vehicleDiscount: 'WinBackReward_base__vehicleDiscount_5fa23c6c',
        level: 'WinBackReward_level_d832cd76',
        base__vehicleForRent: 'WinBackReward_base__vehicleForRent_5fa23c6c',
        discount: 'WinBackReward_discount_86c0d506',
    },
    jr = (e) => {
        switch (e.name) {
            case Rr.VEHICLE_FOR_GIFT:
            case Rr.VEHICLE_DISCOUNT:
                return `vehicle.c_420x307.${le(e.vehicleName).toLowerCase()}`;
            case Rr.SELECTABLE_VEHICLE_FOR_GIFT:
            case Rr.SELECTABLE_VEHICLE_DISCOUNT:
                return `quests.bonuses.small.${e.name}`;
            case Rr.VEHICLE_FOR_RENT:
                return 'quests.bonuses.small.vehicles_rent';
        }
        return '';
    },
    Mr = g.resolve('aliases'),
    Or = g.resolve('views');
function kr({ reward: i, className: o }) {
    const t = i.name,
        n = jr(i),
        r = ie({
            resId: Mr.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
            contentId:
                Number(i.tooltipContentId) ||
                Or.read((e) => e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
            args: { tooltipId: i.tooltipId },
        });
    return e.jsxs('div', {
        ...r,
        className: s(Er.base, Er[`base__${t}`], o),
        children: [
            e.jsx(C, { path: n, className: Er.icon }),
            (null == i ? void 0 : i.vehicleLvl) && e.jsx(ae, { value: i.vehicleLvl, className: Er.level }),
            t == Rr.VEHICLE_DISCOUNT &&
                e.jsx(C, { path: 'userMissions.hub.reward_progress.discount_colorize', className: Er.discount }),
        ],
    });
}
const Sr = 'Quest_bd89fbc',
    Pr = 'Quest_info_2092d559',
    wr = new Set([
        Rr.VEHICLE_FOR_GIFT,
        Rr.VEHICLE_DISCOUNT,
        Rr.VEHICLE_FOR_RENT,
        Rr.SELECTABLE_VEHICLE_FOR_GIFT,
        Rr.SELECTABLE_VEHICLE_DISCOUNT,
    ]);
const Tr = i(function ({ style: i, className: o, index: t }) {
        const { model: n } = _r(),
            r = n.computes.rewardsByIndex(t),
            a = T({ rewardSize: D.S24x24 }, { large: { rewardSize: D.Small } });
        return e.jsx('div', {
            className: s(Sr, o),
            style: i,
            children: r.map((s, i) => {
                return wr.has(s.name)
                    ? e.jsx(kr, { reward: s }, `${i}_${s.name}`)
                    : e.jsx(
                          ce,
                          {
                              size: a.rewardSize,
                              ...((o = s),
                              (t = D.Small),
                              {
                                  name: o.name,
                                  image: re(o, t),
                                  special: o.overlayType,
                                  value: o.value,
                                  valueType: ne(o.name),
                                  tooltipArgs: {
                                      ...te(
                                          { tooltipId: o.tooltipId },
                                          Number(o.tooltipContentId) ||
                                              R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                  'resId',
                                              ),
                                      ),
                                      resId: pr,
                                  },
                              }),
                              classNames: { info: Pr },
                          },
                          `${i}_${s.name}`,
                      );
                var o, t;
            }),
        });
    }),
    Br = 'QuestStatus_questNumber_a4eb07b6',
    Lr = 'QuestStatus_claim_f060156f',
    Ar = 'QuestStatus_claimText_bb723ab5',
    Dr = [Rr.SELECTABLE_VEHICLE_FOR_GIFT, Rr.SELECTABLE_VEHICLE_DISCOUNT];
const Wr = i(function ({ index: i, questNumber: o, className: t, style: n }) {
    const { model: r, controls: a } = _r(),
        l = r.current.get(),
        c = r.computes.rewardsByIndex(i),
        d = r.offersState.get(),
        m = g.resolve('strings');
    return l < o
        ? e.jsx('div', { className: s(Br, t), style: n, children: o })
        : c.some(({ name: e }) => Dr.includes(e))
          ? e.jsx(_, {
                theme: 'primary',
                size: 'small',
                disabled: d === gr.DISABLED,
                className: s(Lr, t),
                autoAlignContent: !1,
                style: n,
                onClick: () => a.takeReward(o.toString()),
                children: e.jsx('div', {
                    className: Ar,
                    children: m.readOrEmpty('user_missions.hub.reward_progress.win_back_quest_progress.claim'),
                }),
            })
          : e.jsx(C, {
                path: 'userMissions.hub.reward_progress.completed',
                width: 11,
                height: 11,
                className: t,
                style: n,
            });
});
const Gr = i(function ({ classNames: s }) {
        const { model: i } = _r(),
            t = i.total.get(),
            n = i.quests.get();
        return e.jsx(e.Fragment, {
            children: de(n, ({ questNumber: i }, n) => {
                const r = { left: (i / t) * 100 + '%' };
                return e.jsxs(
                    o.Fragment,
                    {
                        children: [
                            e.jsx(Wr, {
                                index: n,
                                questNumber: i,
                                className: null == s ? void 0 : s.questStatus,
                                style: r,
                            }),
                            e.jsx(Tr, { index: n, className: null == s ? void 0 : s.quest, style: r }),
                        ],
                    },
                    `${n}_${i}`,
                );
            }),
        });
    }),
    Fr = 'WinBackProgress_bg_8a178cd6',
    Hr = 'WinBackProgress_7746c27',
    qr = 'WinBackProgress_header_fddc8c5',
    Vr = 'WinBackProgress_title_58086071',
    $r = 'WinBackProgress_progressCount_c10154a0',
    zr = 'WinBackProgress_progressNumbers_74675f1a',
    Ur = 'WinBackProgress_text_9329bcf6',
    Qr = 'WinBackProgress_content_cf4c626a',
    Yr = 'WinBackProgress_scroll_15d14186',
    Kr = 'WinBackProgress_scrollWrapper_a6ecf20',
    Xr = 'WinBackProgress_scrollWrapper__maskLeft_74cfad85',
    Jr = 'WinBackProgress_progress_b2a3589c',
    Zr = 'WinBackProgress_progressBar_7d519953',
    ea = 'WinBackProgress_questStatus_5f3d0943',
    sa = 'WinBackProgress_quest_f3ea405e',
    ia = 'WinBackProgress_scrollBar_efbfbc78',
    oa = 'WinBackProgress_mainReward_1460436e',
    ta = g.resolve('aliases');
const na = i(function () {
        const { model: i } = _r(),
            { api: t } = me(),
            n = ue(),
            [r, a] = o.useState(!1),
            l = i.total.get(),
            c = i.current.get(),
            d = i.earned.get(),
            m = 160 * i.quests.get().length,
            u = g.resolve('strings'),
            _ = o.useCallback(() => {
                a(t.animationScroll.scrollPosition.get() > 0);
            }, [t]),
            p = _e(() => n.run(() => t.applyScroll(m * (c / l) - 160)));
        return (
            o.useEffect(() => {
                const e = t.events.on('start', _),
                    s = t.events.on('rest', _);
                return (
                    p(),
                    () => {
                        (e(), s());
                    }
                );
            }, [t.events, p, _]),
            e.jsxs('div', {
                className: Hr,
                children: [
                    e.jsx('div', { className: Fr }),
                    e.jsxs('div', {
                        className: qr,
                        children: [
                            e.jsx(f, {
                                classMix: Vr,
                                isTruncationAvailable: !0,
                                text: u.readOrEmpty('user_missions.hub.reward_progress.win_back_quest_progress.title'),
                                targetId: ta.read((e) =>
                                    e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'),
                                ),
                                binding: {
                                    progres: e.jsx(es, {
                                        current: c,
                                        total: l,
                                        className: $r,
                                        classNames: { current: zr, total: zr, slash: zr },
                                    }),
                                },
                            }),
                            e.jsx(f, {
                                classMix: Ur,
                                isTruncationAvailable: !0,
                                isTooltipEnable: !0,
                                text: u.readOrEmpty(
                                    'user_missions.hub.reward_progress.win_back_quest_progress.sub_title',
                                ),
                                targetId: ta.read((e) =>
                                    e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'),
                                ),
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: Qr,
                        children: [
                            e.jsxs('div', {
                                className: Yr,
                                onWheel: t.handleMouseWheel,
                                children: [
                                    e.jsx(pe, {
                                        classNames: { wrapper: s(Kr, r && Xr) },
                                        children: e.jsxs('div', {
                                            className: Jr,
                                            style: { width: `${m}rem` },
                                            children: [
                                                e.jsx(is, {
                                                    value: c,
                                                    size: 'full',
                                                    maxValue: l,
                                                    className: Zr,
                                                    children: e.jsx(v, { initValue: c - d, initMaxValue: l }),
                                                }),
                                                e.jsx(Gr, { classNames: { questStatus: ea, quest: sa } }),
                                            ],
                                        }),
                                    }),
                                    e.jsx(ge, { classNames: { base: ia } }),
                                ],
                            }),
                            e.jsx('div', { className: oa, children: e.jsx(yr, {}) }),
                        ],
                    }),
                ],
            })
        );
    }),
    ra = {
        rootId: g
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
        context: 'model.winBackProgress',
    };
function aa() {
    return e.jsx(ur, { options: ra, children: e.jsx(na, {}) });
}
const la = 'RewardProgressBlock_bf1cc1f3';
const ca = i(function () {
        const { model: s } = qn(),
            i = s.progressType.get();
        return e.jsx('div', {
            className: la,
            children: (() => {
                switch (i) {
                    case Vn.EpicQuest:
                        return e.jsx(mr, {});
                    case Vn.WinBack:
                        return e.jsx(aa, {});
                    default:
                        return (console.error(`Unreachable branch in progress type: ${i}`), null);
                }
            })(),
        });
    }),
    da = {
        rootId: g
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
    };
function ma() {
    return e.jsx(Hn, { options: da, children: e.jsx(fe, { children: e.jsx(ca, {}) }) });
}
const ua = 'DailyMissions_c4fedd54',
    _a = 'DailyMissions_title_6ad6e593',
    pa = 'DailyMissions_content_22c598b5',
    ga = 'DailyMissions_missionsBlock_8747b838',
    fa = 'DailyMissions_rewardProgress_affadae3',
    xa = g.resolve('strings'),
    ba = i(function () {
        const { model: s } = _o(),
            i = s.dailyMissionsBlockStatus.get();
        return e.jsxs('div', {
            className: ua,
            children: [
                i.isEnabled &&
                    e.jsx('div', {
                        className: _a,
                        children: xa.readOrEmpty('user_missions.hub.basic_missions.daily.title'),
                    }),
                e.jsxs(xe, {
                    className: pa,
                    border: 'contour',
                    children: [
                        e.jsx(bi, { content: e.jsx(Ht, {}), className: ga, ...i }),
                        e.jsx(bi, {
                            content: e.jsx(Fn, {}),
                            ...s.premiumDailyMissionsBlockStatus.get(),
                            className: ga,
                        }),
                        e.jsx(bi, { content: e.jsx(ma, {}), ...s.rewardProgressBlockStatus.get(), className: fa }),
                    ],
                }),
            ],
        });
    }),
    ha = {
        rootId: g
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.MainView('resId')),
    };
function Ca() {
    return e.jsx(uo, { options: ha, children: e.jsx(ba, {}) });
}
const [Na, va] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['isDailySectionAvailable', 'isWeeklySectionAvailable', 'isPMSectionAvailable']),
        }),
        U,
    ),
    Ia = 'BasicMissions_1ecd0546',
    ya = 'BasicMissions_section_37456c06',
    Ra = 'BasicMissions_rightCards_9fb1ec2c',
    Ea = g.resolve('aliases'),
    ja = { rootId: Ea.read((e) => e.user_missions.hub.basicMissions.WeeklyMissions('resId')) },
    Ma = { rootId: Ea.read((e) => e.user_missions.hub.basicMissions.PersonalMissions('resId')) },
    Oa = i(function () {
        const { model: s } = va();
        return e.jsxs('div', {
            className: Ia,
            children: [
                s.isDailySectionAvailable.get() && e.jsx('div', { className: ya, children: e.jsx(Ca, {}) }),
                s.isWeeklySectionAvailable.get() &&
                    e.jsx('div', {
                        className: ya,
                        children: e.jsxs(xe, {
                            className: Ra,
                            border: 'contour',
                            children: [
                                e.jsx(_s, {
                                    options: ja,
                                    children: e.jsx(pi, { fullHeight: !s.isPMSectionAvailable.get() }),
                                }),
                                s.isPMSectionAvailable.get() && e.jsx(ve, { options: Ma, children: e.jsx(us, {}) }),
                            ],
                        }),
                    }),
            ],
        });
    }),
    ka = { rootId: R.aliases.user_missions.hub.basicMissions.MainView('resId') };
function Sa() {
    return e.jsx(Na, { options: ka, children: e.jsx(Oa, {}) });
}
export { Sa as default };
