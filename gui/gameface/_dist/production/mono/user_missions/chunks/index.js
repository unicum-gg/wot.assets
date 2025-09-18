import {
    j as e,
    e as s,
    q as i,
    r as o,
    m as t,
    s as n,
    t as r,
    v as a,
    R as l,
    w as c,
    x as d,
    y as m,
} from './vendor.js';
import {
    i as u,
    k as _,
    d as g,
    b as p,
    G as f,
    H as x,
    P as b,
    K as h,
    I as C,
    L as N,
    M as v,
    N as I,
    q as y,
    O as E,
    Q as j,
    S as M,
    V as O,
    m as k,
    W as S,
    X as P,
    u as w,
    v as T,
    e as B,
    w as L,
    x as A,
    Y as D,
    z as W,
    p as G,
    Z as H,
    _ as F,
    $ as q,
    a0 as V,
    a1 as $,
    a2 as z,
    n as U,
    a3 as Q,
    a4 as Y,
    a5 as K,
    a6 as X,
    a7 as J,
    a8 as Z,
    a9 as ee,
    o as se,
    aa as ie,
    ab as oe,
    ac as te,
    D as ne,
    E as re,
    ad as ae,
    ae as le,
    af as ce,
    ag as de,
    ah as me,
    ai as ue,
    aj as _e,
    ak as ge,
    al as pe,
    am as fe,
    an as xe,
} from './lib.js';
import { t as be, g as he } from './helpers.js';
import { s as Ce } from '../views/hub/hub.html/bundle.js';
import { R as Ne } from './reward_wrapper.js';
/* empty css         */ /* empty css      */ const [ve, Ie] = u()(
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
    return e.jsx(_, { ...o, className: s(Re, o.className), children: e.jsx(g, { className: Ee, path: i }) });
}
const Me = 'TextBlock_97d73ac3',
    Oe = 'TextBlock_base__centered_d13b3a4b',
    ke = 'TextBlock_title_770e50f6',
    Se = 'TextBlock_description_eacddfcf',
    Pe = p.resolve('strings'),
    we = p.resolve('aliases'),
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
                e.jsx(g, {
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
    He = 'Completed_textBlock_15b3296b',
    Fe = i(function () {
        const { controls: s } = Ie();
        return e.jsxs('div', {
            className: Ge,
            children: [
                e.jsx(Be, { className: He }),
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
        slash: 'ProgressCount_slash_926aef96',
        slash__fullWidth: 'ProgressCount_slash__fullWidth_c807c2b',
        current: 'ProgressCount_current_115c5e6d',
        current__slashCenter: 'ProgressCount_current__slashCenter_6ce420af',
        total: 'ProgressCount_total_781b8edb',
        total__slashCenter: 'ProgressCount_total__slashCenter_bb7952a3',
    },
    Je = 'fullWidth',
    Ze = p.resolve('intl'),
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
    }),
    os = p.resolve('strings');
function ts(s) {
    const i = h({
        header: s.id,
        body: os
            .readOrEmpty('user_missions.hub.basic_missions.personal.detail.tooltip.body')
            .replace('{{vehicleName}}', s.vehicleName),
    });
    return e.jsx(C, {
        ...i,
        path: `userMissions.personal_missions.vehicle_detail.c_400x150.${s.id}`,
        width: 150,
        height: 75,
        className: s.className,
    });
}
const ns = {
        base: 'InProgress_a9a08feb',
        base__inProgress: 'InProgress_base__inProgress_1f5a0708',
        textBlock: 'InProgress_textBlock_9bd89594',
        base__inProgressForHonors: 'InProgress_base__inProgressForHonors_68457abb',
        title: 'InProgress_title_f07812d0',
        description: 'InProgress_description_3ba66b0d',
        progress: 'InProgress_progress_523f308d',
        points: 'InProgress_points_c7836e1a',
        container: 'InProgress_container_fb690b6c',
        detail: 'InProgress_detail_da841dde',
        progressBar: 'InProgress_progressBar_fc1f13a5',
    },
    rs = i(function () {
        const { model: i, controls: o } = Ie(),
            {
                state: t,
                totalProgress: n,
                currentProgress: r,
                previousProgress: a,
                detailId: l,
                vehicleName: c,
            } = i.get(),
            d = h({ header: 'PM3 points tooltip' });
        return e.jsxs('div', {
            className: s(ns.base, ns[`base__${t}`]),
            children: [
                e.jsx(Be, { className: ns.textBlock, classNames: { title: ns.title, description: ns.description } }),
                t === ye.IN_PROGRESS
                    ? e.jsxs(e.Fragment, {
                          children: [
                              e.jsxs('div', {
                                  className: ns.progress,
                                  children: [
                                      e.jsx(es, { current: r, total: n }),
                                      e.jsx('div', { ...d, className: ns.points }),
                                  ],
                              }),
                              e.jsxs('div', {
                                  className: ns.container,
                                  children: [
                                      e.jsx(ts, { id: l, vehicleName: c, className: ns.detail }),
                                      e.jsx(is, {
                                          value: r,
                                          size: 'full',
                                          maxValue: n,
                                          className: ns.progressBar,
                                          children: e.jsx(N, { initValue: a, initMaxValue: n }),
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : e.jsx(g, {
                          path: 'user_missions.hub.basic_missions.personal.progress.inProgressForHonors',
                          params: { progress: e.jsx(es, { current: r, total: n }) },
                          className: ns.progress,
                      }),
                e.jsx(je, {
                    theme: 'secondary',
                    onClick: o.goToOperation,
                    textPath: 'user_missions.hub.basic_missions.personal.button.to_operation',
                }),
            ],
        });
    }),
    as = 'PersonalMissions_background_cee2473a',
    ls = 'PersonalMissions_d479b157',
    cs = (e, s, i, o) => {
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
    ds = i(function (i) {
        const { model: o } = Ie(),
            { state: t, allOperationsCompleted: n, currentOperationId: r, nextOperationId: a } = o.get();
        return e.jsxs(v, {
            className: s(ls, i.className),
            disableMouse: !0,
            children: [
                e.jsx(C, { path: cs(t, n, r, a), width: 'auto', height: 'auto', fit: 'cover', className: as }),
                (() => {
                    switch (t) {
                        case ye.CAMPAIGN_NOT_ACTIVATED:
                            return e.jsx(We, {});
                        case ye.IN_PROGRESS:
                        case ye.IN_PROGRESS_FOR_HONORS:
                            return e.jsx(rs, {});
                        case ye.COMPLETED:
                            return e.jsx(Fe, {});
                        case ye.COMPLETED_WITH_HONORS:
                            return e.jsx(Ke, {});
                        default:
                            console.error(`Unknown personal missions state ${t}`);
                    }
                })(),
            ],
        });
    }),
    [ms, us] = u()(
        ({ observableModel: e }) => {
            const s = {
                    ...e.primitives(['updateWeekDay']),
                    missions: e.transform(
                        (e) => I(e).map((e) => ({ ...e, specConditions: be(e.specialConditionIds) })),
                        'missionsList',
                    ),
                },
                i = y.model((e) => {
                    const i = E(s.missions.get(), e);
                    if (!i) throw new Error(`Weekly mission with index ${e} not found`);
                    return i;
                }),
                o = y.primitive((e) => i(e).id);
            return { ...s, computes: { mission: i, missionId: o } };
        },
        ({ externalModel: e }) => ({ reroll: e.createCallback((e) => ({ questId: e }), 'onReroll') }),
    ),
    _s = o.createContext(null),
    gs = () => {
        const e = o.useContext(_s);
        if (!e) throw new Error('useAnimation must be used within an AnimationProvider');
        return e;
    },
    ps = i(function ({ completed: s, rerollState: i, children: r }) {
        const [a, l] = o.useState(!1),
            c = j(),
            [d, m] = t(() => ({ from: { x: 0 } })),
            [u, _] = t(() => ({ from: { x: 0 } })),
            [g, p] = t(() => ({ from: { x: 0 } })),
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
            k = M(() => {
                E([
                    m.start({ to: { x: 1 }, config: { duration: 1500, easing: O.easeInOutCubic } }),
                    p.start({ to: { x: 1 }, config: { duration: 800 } }),
                    _.start({ to: { x: 1 }, config: { duration: 1500, easing: O.easeInOutCubic } }),
                    I.start({ to: { opacity: 0 }, config: { duration: 400, easing: O.easeInCubic } }),
                    x.start({ to: { opacity: 0.5 }, config: { duration: 200, easing: O.easeInCubic } }),
                ]);
            }),
            S = M(() => {
                E([
                    R.start({ to: { transform: 'rotate(360deg)' }, config: { duration: 400 }, loop: !0 }),
                    N.start((e) => ({
                        to: { transform: 'translateY(30rem)', opacity: 0 },
                        delay: 50 * (3 - e),
                        config: { duration: 250, easing: O.easeInQuint },
                    })),
                    h.start({ to: { opacity: 1 }, config: { duration: 300, easing: O.easeInQuint }, delay: 100 }),
                ]);
            }),
            P = M(() => {
                E([
                    N.start((e) => ({
                        to: { transform: 'translateY(0rem)', opacity: 1 },
                        config: { duration: 300, easing: O.easeOutQuint },
                        delay: 50 * e,
                    })),
                    h.start({ to: { opacity: 0 }, config: { duration: 300, easing: O.easeOutQuint }, delay: 100 }),
                    I.start({ to: { opacity: 1 }, config: { duration: 100 }, delay: 300 }),
                ]);
            });
        return (
            o.useEffect(() => {
                switch (i) {
                    case 'in':
                        return P();
                    case 'out':
                        return (c.play(Ce.umg_hub_quest_reroll), S());
                    case 'waiting':
                        return void R.start({
                            to: { transform: 'rotate(360deg)' },
                            config: { duration: 400 },
                            loop: !0,
                        });
                    default:
                        R.set({ transform: 'rotate(0deg)' });
                }
            }, [P, S, R, i, c]),
            e.jsx(_s.Provider, {
                value: {
                    completedGlowStyle: d,
                    completedBlickContainerStyle: u,
                    completedBlickStyle: g,
                    completedFadingStyle: f,
                    rerollingSprings: C,
                    rerollIconStyle: y,
                    rerollButtonStyle: v,
                    rerollGlowStyle: b,
                    playCompletion: k,
                    inProgress: a,
                },
                children: r,
            })
        );
    }),
    fs = 'CompletionEffects_c32f942',
    xs = 'CompletionEffects_glow_64a3b883',
    bs = 'CompletionEffects_glowIcon_1b3d9ffe',
    hs = 'CompletionEffects_blick_67d2cb19',
    Cs = 'CompletionEffects_blickLines_9288dfea',
    Ns = 'CompletionEffects_blickLine_12f1a3a3';
function vs() {
    const s = gs();
    return e.jsxs('div', {
        className: fs,
        children: [
            e.jsx(r.div, {
                style: { opacity: s.completedGlowStyle.x.to([0, 0.05, 1], [0, 1, 0]).to((e) => e) },
                className: xs,
                children: e.jsx('div', { className: bs }),
            }),
            e.jsx(r.div, {
                style: { opacity: s.completedBlickContainerStyle.x.to([0, 0.3, 1], [0, 1, 0]).to((e) => e) },
                className: hs,
                children: e.jsxs(r.div, {
                    style: {
                        transform: s.completedBlickStyle.x.to([0, 1], [-100, 100]).to((e) => `translateX(${e}%)`),
                        opacity: s.completedBlickStyle.x.to([0, 0.1, 0.6, 1], [1, 1, 0, 0]).to((e) => e),
                    },
                    className: Cs,
                    children: [
                        e.jsx('div', { className: Ns }),
                        e.jsx('div', { className: Ns }),
                        e.jsx('div', { className: Ns }),
                    ],
                }),
            }),
        ],
    });
}
const Is = { base: 'SpecConditionsIcons_ab3f13c7', icon: 'SpecConditionsIcons_icon_d767e7b4' };
function ys({ specConditions: i, className: o, ...t }) {
    return e.jsx('div', {
        ...t,
        className: s(Is.base, o),
        children: k(i, (s) => e.jsx(C, { width: 24, height: 24, path: s.iconPath, className: Is.icon }, s.id)),
    });
}
var Rs = ((e) => ((e.REROLL = 'reroll'), (e.SPEC_CONDITIONS = 'spec_conditions'), e))(Rs || {});
const Es = 'Conditions_specConditions_faac5c77',
    js = 'Conditions_commonCondition_72d62c0e',
    Ms = 'Conditions_commonCondition__updating_67d8e6dc',
    Os = p.resolve('aliases'),
    ks = p.resolve('views');
function Ss({ commonConditionId: i, specConditions: t }) {
    const n = gs(),
        a = S(),
        l = P(
            Rs.SPEC_CONDITIONS,
            o.useMemo(
                () => ({
                    specConditions: t,
                    resId: ks.read((e) => e.mono.user_missions.tooltips.param_tooltip('resId')),
                }),
                [t],
            ),
        ),
        [c, d] = o.useState(!1),
        m = M(() => d(!1));
    return (
        o.useLayoutEffect(() => {
            d(!0);
        }, [a.breakpoint]),
        e.jsxs(r.div, {
            style: n.rerollingSprings[0],
            children: [
                t.length > 0 && e.jsx(ys, { ...l, specConditions: t, className: Es }),
                e.jsx(f, {
                    text: he(i, t),
                    classMix: s(js, c && Ms),
                    isTooltipEnable: !0,
                    isTruncationAvailable: !0,
                    targetId: Os.read((e) => e.user_missions.hub.basicMissions.WeeklyMissions('resId')),
                    onSizeChanged: m,
                }),
            ],
        })
    );
}
const Ps = 'Icon_animatedIcon_96d2a89c',
    ws = 'Icon_f61225ad';
function Ts({ completed: i, commonConditionId: o, className: t }) {
    const n = gs(),
        l = w(
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
            enter: { opacity: i ? 1 : 0.2, scale: 1, config: { duration: 200, easing: O.easeOutCubic } },
            leave: { opacity: 0, scale: 0.2, config: { duration: 200, easing: O.easeInCubic } },
            exitBeforeEnter: !0,
        });
    return e.jsx('div', {
        className: s(ws, t),
        children: e.jsx(r.div, {
            style: n.rerollingSprings[0],
            children: c((s, i) =>
                e.jsx(r.div, {
                    style: s,
                    className: Ps,
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
const Bs = l.memo(function (s) {
        return e.jsx(b, {
            size: 'small',
            value: s.currentProgress,
            maxValue: s.totalProgress,
            children: e.jsx(N, {
                initValue: s.previousProgress,
                initMaxValue: s.totalProgress,
                animationProps: s.animationProps,
            }),
        });
    }),
    Ls = 'Reroll_9aa89152',
    As = 'Reroll_button_bf3e46bd',
    Ds = 'Reroll_text_f15ae95',
    Ws = 'Reroll_icon_9cea8d59',
    Gs = 'Reroll_timer_9c3c15fe',
    Hs = 'Reroll button',
    Fs = p.resolve('strings'),
    qs = p.resolve('views');
function Vs({ rerollCooldown: i, timeToNextReroll: t, onClick: n, className: a }) {
    const l = j(),
        c = T(o.useMemo(() => ({ until: L(A(), B(t)), tick: B(1) }), [t])),
        { rerollButtonStyle: d, rerollIconStyle: m } = gs(),
        u = P(
            Rs.REROLL,
            o.useMemo(
                () => ({
                    rerollCooldown: i,
                    timeToNextReroll: D(c.remaining),
                    resId: qs.read((e) => e.mono.user_missions.tooltips.param_tooltip('resId')),
                }),
                [i, c.remaining],
            ),
        );
    return e.jsx(r.div, {
        ...u,
        style: d,
        className: s(Ls, a),
        children: c.done
            ? e.jsxs('div', {
                  onClick: () => {
                      (l.play('click', { target: Hs }), n());
                  },
                  onMouseEnter: () => {
                      l.play('mouse-enter', { target: Hs });
                  },
                  className: As,
                  children: [
                      e.jsx('div', {
                          className: Ds,
                          children: Fs.readOrEmpty('user_missions.hub.basic_missions.daily.reroll_button'),
                      }),
                      e.jsx(r.div, { style: m, className: Ws }),
                  ],
              })
            : e.jsx(W, { start: t, format: W.format.superCompact, size: W.size.x24x24, className: Gs }),
    });
}
const $s = 'Rewards_rewardItem_5e36a95a',
    zs = 'Rewards_boxRewardClassName_f0825900',
    Us = p.resolve('aliases');
function Qs(s) {
    const i = w({ rewardSize: G.S24x24, rewardMaxCount: 4 }, { large: { rewardSize: G.Small, rewardMaxCount: 5 } });
    return e.jsx(Ne, {
        bonuses: s.bonuses,
        questId: s.id,
        size: i.rewardSize,
        resId: Us.read((e) => e.user_missions.hub.basicMissions.WeeklyMissions('resId')),
        count: s.bonuses.length <= i.rewardMaxCount ? i.rewardMaxCount : i.rewardMaxCount - 1,
        rewardItemClassMix: $s,
        boxRewardClassName: zs,
    });
}
const Ys = 'Mission_557cf0dd',
    Ks = 'Mission_base__animating_f1a3e9cd',
    Xs = 'Mission_rerollGlow_a0c30a93',
    Js = 'Mission_wrapper_9f0c513c',
    Zs = 'Mission_icon_3808d908',
    ei = 'Mission_content_238fdcb6',
    si = 'Mission_conditions_c4d5bc79',
    ii = 'Mission_rightContent_e710873a',
    oi = 'Mission_reroll_15a6d836',
    ti = 'Mission_reroll__noEvents_f1a3e9cd',
    ni = i(function ({
        bonuses: i,
        commonConditionId: t,
        currentProgress: n,
        id: a,
        previousProgress: l,
        specConditions: c,
        isRerollInProgress: d,
        timeToNextReroll: m,
        rerollCooldown: u,
        totalProgress: _,
        className: g,
    }) {
        const { controls: p } = us(),
            f = j(),
            x = gs(),
            [b, h] = o.useState(l === _),
            { playCompletion: C } = x,
            N = o.useMemo(
                () => ({
                    onStart: () => {
                        f.play(Ce.umg_hub_quest_progress);
                    },
                    onRest: () => {
                        n === _ && (f.play(Ce.umg_hub_quest_complete), C(), h(!0));
                    },
                }),
                [n, _, f, C],
            );
        return e.jsxs('div', {
            className: s(Ys, x.inProgress && Ks, g),
            children: [
                e.jsx(vs, {}),
                e.jsx(r.div, { style: x.rerollGlowStyle, className: Xs }),
                e.jsxs('div', {
                    className: Js,
                    children: [
                        e.jsxs('div', {
                            className: ei,
                            children: [
                                e.jsxs('div', {
                                    className: si,
                                    children: [
                                        e.jsx(Ts, { completed: b, commonConditionId: t, className: Zs }),
                                        e.jsxs(r.div, {
                                            style: x.completedFadingStyle,
                                            children: [
                                                e.jsx(Ss, { commonConditionId: t, specConditions: c }),
                                                e.jsx(r.div, {
                                                    style: x.rerollingSprings[1],
                                                    children: e.jsx(es, { current: n, total: _ }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsxs(r.div, {
                                    style: x.completedFadingStyle,
                                    className: ii,
                                    children: [
                                        e.jsx(Vs, {
                                            rerollCooldown: u,
                                            timeToNextReroll: m,
                                            onClick: () => p.reroll(a),
                                            className: s(oi, (n === _ || d) && ti),
                                        }),
                                        e.jsx(r.div, {
                                            style: x.rerollingSprings[2],
                                            children: e.jsx(Qs, { bonuses: i, id: a }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx(r.div, {
                            style: x.completedFadingStyle,
                            children: e.jsx(r.div, {
                                style: x.rerollingSprings[2],
                                children: e.jsx(Bs, {
                                    previousProgress: l,
                                    currentProgress: n,
                                    totalProgress: _,
                                    animationProps: N,
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    ri = 'WeeklyMissions_b5c4ab0c',
    ai = 'WeeklyMissions_base__fullHeight_1393a178',
    li = 'WeeklyMissions_list_ef7648a3',
    ci = 'WeeklyMissions_title_eeb41405',
    di = 'WeeklyMissions_title__right_82a872e3',
    mi = i(function (i) {
        const { model: t } = us(),
            n = t.missions.get(),
            r = o.useRef(n);
        o.useEffect(() => {
            r.current = n;
        }, [n]);
        const l = o.useMemo(() => {
                const e = new Set(),
                    s = new Set();
                return (
                    H(r.current, (i, o) => {
                        const t = E(n, o);
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
        return e.jsxs(v, {
            className: s(ri, i.fullHeight && ai, i.className),
            disableMouse: !0,
            children: [
                e.jsx(g, { className: ci, path: 'user_missions.hub.basic_missions.weekly.title' }),
                e.jsx(g, {
                    className: s(ci, di),
                    path: 'user_missions.hub.basic_missions.weekly.update_info',
                    params: {
                        weekDay: p
                            .resolve('strings')
                            .readOrEmpty(`menu.dateTime.weekDays.full.c_${t.updateWeekDay.get()}`),
                    },
                }),
                e.jsx('div', {
                    className: li,
                    children: c((s, i) =>
                        e.jsx(ps, {
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
                            children: e.jsx(ni, { ...i }),
                        }),
                    ),
                }),
            ],
        });
    }),
    ui = {
        base: 'DisabledState_4abbc2ea',
        background: 'DisabledState_background_2be33fab',
        content: 'DisabledState_content_29454c97',
        icon: 'DisabledState_icon_58468d38',
        message: 'DisabledState_message_90090227',
    };
function _i({ message: s }) {
    return e.jsxs('div', {
        className: ui.base,
        children: [
            e.jsx('div', { className: ui.background }),
            e.jsxs('div', {
                className: ui.content,
                children: [e.jsx('div', { className: ui.icon }), e.jsx('div', { className: ui.message, children: s })],
            }),
        ],
    });
}
const gi = 'Block_content_7290bea6';
function pi({ content: s, isEnabled: i, disabilityReason: o, className: t }) {
    return e.jsx(v, {
        className: t,
        disableMouse: !0,
        children: i ? e.jsx('div', { className: gi, children: s }) : e.jsx(_i, { message: o }),
    });
}
const fi = o.createContext(null);
function xi() {
    const e = o.useContext(fi);
    return (F(null !== e, 'AnimationsContext is null'), e);
}
function bi() {
    return o.useContext(fi);
}
function hi(e, s, i = e) {
    return e + '+' + s + '+' + i;
}
function Ci(e, s, ...i) {
    let o = e.current;
    if (0 == i.length) return !1;
    for (let t = 0; t < i.length - 1; t++) {
        const e = i[t];
        ((o[e] = o[e] ?? {}), (o = o[e]));
    }
    return ((o[i[i.length - 1]] = s), !0);
}
function Ni(e, ...s) {
    const i = (e, o) => {
        if (o === s.length) return q(e);
        const t = s[o];
        return t in e && ((o === s.length - 1 || i(e[t], o + 1)) && delete e[t], q(e));
    };
    return i(e.current, 0);
}
function vi(e, ...s) {
    let i = e.current;
    return s.reduce((e, s) => (null == e ? void 0 : e[s]), i);
}
function Ii(e, ...s) {
    let i = e.current;
    return void 0 !== s.reduce((e, s) => (null == e ? void 0 : e[s]), i);
}
function yi(e, s, i, o) {
    Object.entries(s).forEach(([s, t]) => {
        q(t)
            ? Ii(i, e, s, e) && o(s, e)
            : Object.entries(t).forEach(([t, n]) => {
                  const r = t || e;
                  Ii(i, e, s, r) && o(s, r, n);
              });
    });
}
function Ri({ storage: e, id: s, emitter: i, providerCfg: o }) {
    Ii(e, s) || Ei({ id: s, emitter: i, providerCfg: o });
}
function Ei({ id: e, emitter: s, providerCfg: i }) {
    var o;
    const t = (null == i ? void 0 : i.triggerId) || e;
    (s.trigger(t, { id: e, ...(null == i ? void 0 : i.triggerParams) }),
        null == (o = null == i ? void 0 : i.triggerCallback) ||
            o.call(i, { id: e, ...(null == i ? void 0 : i.triggerParams) }));
}
function ji({ sound: e, soundCfg: s }) {
    e && s && ('string' == typeof s ? e.play(s) : e.play(s.eventName, null == s ? void 0 : s.event));
}
function Mi({ children: s }) {
    const i = V(),
        t = o.useRef({}),
        n = o.useRef({}),
        r = o.useRef({}),
        a = $(),
        l = M(({ id: e, animName: s, elementId: i = e }) => Ii(t, e, s, i)),
        c = M((e, s, i = e) => {
            Ni(t, e, s, i);
        }),
        d = M(({ id: e, animName: s, config: i, elementId: o = e }) => (Ci(t, i, e, s, o), () => c(e, s, o))),
        m = M(({ id: e, animName: s, elementId: i = e, animCallParams: o, providerCfg: n, soundCfg: r }) => {
            const l = vi(t, e, s, i);
            (l &&
                ((null == n ? void 0 : n.skip)
                    ? l.skip({ ...o, ...(null == n ? void 0 : n.animCallParams) })
                    : l.start({ ...o, ...(null == n ? void 0 : n.animCallParams) })),
                ji({ sound: a, soundCfg: r }));
        }),
        u = M(({ id: e, animName: s, elementId: o = e, providerCfg: t = {} }) => {
            const r = i.on(hi(e, s, o), () => {
                (Ni(n, e, s, o), Ri({ storage: n, id: e, emitter: i, providerCfg: t }), r());
            });
            Ci(n, !0, e, s, o);
        }),
        _ = M(({ complexId: e, id: s, animName: o, elementId: t = s, providerCfg: n }) => {
            const a = i.on(hi(s, o, t), () => {
                    (!(function ({
                        storage: e,
                        complexId: s,
                        groupId: i,
                        animName: o,
                        elementId: t,
                        emitter: n,
                        providerCfg: r,
                    }) {
                        let a = vi(e, s, i, o);
                        a &&
                            (a.delete(t),
                            a.size || Ni(e, s, i, o),
                            Ri({ storage: e, id: s, emitter: n, providerCfg: r }));
                    })({ storage: r, complexId: e, groupId: s, animName: o, elementId: t, emitter: i, providerCfg: n }),
                        a());
                }),
                l = vi(r, e, s, o);
            l ? l.add(t) : Ci(r, new Set().add(t), e, s, o);
        }),
        g = M(({ groupId: e, groupCfg: s, providerCfg: o, soundCfg: r }) => {
            (Ni(n, e),
                (null == o ? void 0 : o.skip) ||
                    (null == o ? void 0 : o.skipTrigger) ||
                    yi(e, s, t, (s, i) => {
                        u({ id: e, animName: s, elementId: i, providerCfg: o });
                    }),
                yi(e, s, t, (s, i, t) => {
                    m({ id: e, animName: s, elementId: i, animCallParams: t, providerCfg: o });
                }),
                ji({ sound: a, soundCfg: r }),
                (null == o ? void 0 : o.skip) &&
                    !(null == o ? void 0 : o.skipTrigger) &&
                    Ei({ id: e, emitter: i, providerCfg: o }));
        }),
        p = M(({ complexId: e, complexCfg: s, providerCfg: o, soundCfg: n }) => {
            if ((Ni(r, e), !(null == o ? void 0 : o.skip) && !(null == o ? void 0 : o.skipTrigger)))
                for (let [i, r] of Object.entries(s))
                    yi(i, r, t, (s, t) => {
                        _({ complexId: e, id: i, animName: s, elementId: t, providerCfg: o });
                    });
            for (let [i, r] of Object.entries(s))
                yi(i, r, t, (e, s, t) => {
                    m({ id: i, animName: e, elementId: s, animCallParams: t, providerCfg: o });
                });
            (ji({ sound: a, soundCfg: n }),
                (null == o ? void 0 : o.skip) &&
                    !(null == o ? void 0 : o.skipTrigger) &&
                    Ei({ id: e, emitter: i, providerCfg: o }));
        }),
        f = o.useMemo(
            () => ({
                registerAnimation: d,
                unRegistrateAnimation: c,
                startAnimation: m,
                startGroupAnimation: g,
                startComplexAnimation: p,
                checkRegisteredInStorage: l,
                emitter: i,
            }),
            [l, i, d, m, p, g, c],
        );
    return e.jsx(fi.Provider, { value: f, children: s });
}
const [Oi, ki] = u()(
    ({ observableModel: e }) => {
        const s = {
                ...e.primitives(['timeToNextRerol', 'areAllMissionsCompleted', 'timeToMissionsUpdate']),
                missionsList: e.arrayClone('missionsList'),
                bonusMission: e.object('bonusMission'),
                bonusMissionBonuses: e.array('bonusMission.bonuses'),
            },
            i = y.model((e) => {
                const i = s.bonusMission.get();
                if (e == i.id) return i;
                const o = s.missionsList.get();
                return z(o, (s) => s.id == e);
            }),
            o = y.model(() => s.missionsList.get().some(({ animateCompletion: e }) => e));
        return { ...s, computes: { missionById: i, isAnyCompleteAnimation: o } };
    },
    ({ externalModel: e }) => ({ onReroll: e.createCallback((e) => ({ questId: e }), 'onReroll') }),
);
function Si({ registerAnimation: e, id: s, animName: i, elementId: t = s, config: n }) {
    o.useLayoutEffect(() => (null == e ? void 0 : e({ id: s, animName: i, elementId: t, config: n })), [s, i, n, t, e]);
}
const Pi = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 1, config: { duration: 175 } }), await e({ opacity: 0, config: { duration: 800 } }));
        },
    },
    wi = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 0.5 }), await e({ opacity: 0 }));
        },
        config: { duration: 400 },
    },
    Ti = (e) => {
        switch (e) {
            case Li.GREEN:
                return Pi;
            case Li.GREEN_LENSE:
            case Li.GREY_LENSE:
                return wi;
            default:
                return Pi;
        }
    };
const Bi = { base: 'Glow_f9308f1a', icon: 'Glow_icon_d88e8512', icon__greyLense: 'Glow_icon__greyLense_4150ede3' },
    Li = { GREEN: 'green', GREEN_LENSE: 'greenLense', GREY_LENSE: 'greyLense' },
    Ai = { path: '', width: 250, height: 250 },
    Di = {
        [Li.GREEN]: { path: 'userMissions.hub.animations.glow_green_1200x800', width: 1200, height: 800 },
        [Li.GREEN_LENSE]: { path: 'userMissions.hub.animations.glow_lens_green_250x250', width: 250, height: 250 },
        [Li.GREY_LENSE]: { path: 'userMissions.hub.animations.glow_lens_grey_250x250', width: 250, height: 250 },
    },
    Wi = (e) => (Di[e] ? Di[e] : Ai),
    Gi = 'glow';
const Hi = o.memo(function ({ id: i, elementId: n, className: r, glowType: a = Li.GREEN }) {
    const l = bi(),
        m = M(() => (null == l ? void 0 : l.emitter.trigger(hi(i, Gi, n), i, n))),
        { glowStyle: u, config: _ } = (function (e = Li.GREY_LENSE, s) {
            const i = c(),
                n = Ti(e),
                r = M(() => (null == s ? void 0 : s())),
                a = M(() => {
                    i.start({ onRest: r, ...n, reset: !0 });
                }),
                l = M(() => {
                    i.start({ to: { opacity: 0 }, reset: !0, immediate: !0 });
                }),
                d = t({ ref: i, onRest: r, ...n });
            return o.useMemo(() => ({ glowStyle: d, config: { start: a, skip: l } }), [d, l, a]);
        })(a, m);
    return (
        Si({
            id: i,
            elementId: n,
            registerAnimation: null == l ? void 0 : l.registerAnimation,
            animName: Gi,
            config: _,
        }),
        e.jsx(d.div, {
            style: u,
            className: s(Bi.base, r),
            children: e.jsx(C, { ...Wi(a), className: s(Bi.icon, Bi[`icon__${a}`]) }),
        })
    );
});
function Fi(e, s) {
    const i = M(() => (null == s ? void 0 : s())),
        t = m(e, { onRest: i }),
        n = M((e) => {
            (null == e ? void 0 : e.to) != t.get() ? t.start({ ...e }) : null == s || s();
        }),
        r = M((e) => {
            t.start({ ...e, delay: 0, immediate: !0, config: { duration: 0 } });
        });
    return o.useMemo(() => ({ opacity: t, config: { start: n, skip: r } }), [t, r, n]);
}
const qi = 'opacity';
const Vi = o.memo(function ({ id: s, from: i, className: o, elementId: t, children: n, ...r }) {
        const a = bi(),
            l = M(() => (null == a ? void 0 : a.emitter.trigger(hi(s, qi, t), s, t))),
            { opacity: c, config: m } = Fi(i, l);
        return (
            Si({
                id: s,
                elementId: t,
                registerAnimation: null == a ? void 0 : a.registerAnimation,
                animName: qi,
                config: m,
            }),
            n ? e.jsx(d.div, { style: { opacity: c }, className: o, ...r, children: n }) : null
        );
    }),
    $i = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 0.5, config: { duration: 180 } }), await e({ opacity: 0, config: { duration: 420 } }));
        },
    },
    zi = { from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' }, config: { duration: 600 } },
    Ui = 2;
const Qi = 'Reflection_7a45ed9c',
    Yi = 'Reflection_bg_5a5ee806',
    Ki = 'Reflection_lines_container_58665661',
    Xi = 'Reflection_line_1_fc841d05',
    Ji = 'Reflection_line_2_10b982d',
    Zi = 'Reflection_line_3_43ed32ee',
    eo = 'reflection';
const so = o.memo(function ({ id: i, elementId: n, className: r }) {
        const { registerAnimation: a, emitter: l } = xi(),
            m = M(() => l.trigger(hi(i, eo, n), i, n)),
            {
                bgStyle: u,
                linesStyle: _,
                config: g,
            } = (function (e) {
                const s = c(),
                    i = c(),
                    n = o.useRef(0),
                    r = M(() => {
                        ((n.current += 1), n.current == Ui && ((n.current = 0), null == e || e()));
                    }),
                    a = M(() => {
                        (s.start({ ...$i, onRest: r, reset: !0 }), i.start({ ...zi, onRest: r, reset: !0 }));
                    }),
                    l = M(() => {
                        (s.start({ to: { opacity: 0 }, immediate: !0 }), i.start({ ...zi, immediate: !0 }));
                    }),
                    d = t({ ref: s, onRest: r, ...$i }),
                    m = t({ ref: i, onRest: r, ...zi });
                return o.useMemo(() => ({ bgStyle: d, linesStyle: m, config: { start: a, skip: l } }), [d, m, l, a]);
            })(m);
        return (
            Si({ id: i, elementId: n, registerAnimation: a, animName: eo, config: g }),
            e.jsx('div', {
                className: s(Qi, r),
                children: e.jsx(d.div, {
                    style: u,
                    className: Yi,
                    children: e.jsxs(d.div, {
                        style: _,
                        className: Ki,
                        children: [
                            e.jsx('div', { className: Xi }),
                            e.jsx('div', { className: Ji }),
                            e.jsx('div', { className: Zi }),
                        ],
                    }),
                }),
            })
        );
    }),
    io = {
        from: { opacity: 0, transform: 'scale(0.2)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.2)' },
        initial: { opacity: 1, transform: 'scale(1)' },
    },
    oo = 2;
const to = 'swap';
const no = o.memo(function ({ init: s = !1, id: i, elementId: t, className: n, children: r }) {
        const l = bi(),
            c = M(() => (null == l ? void 0 : l.emitter.trigger(hi(i, to, t), i, t))),
            { transitions: m, config: u } = (function (e, s) {
                const [i, t] = o.useState(e),
                    n = o.useRef(!1),
                    r = o.useRef(0),
                    l = M((e) => {
                        ((n.current = !1),
                            i != Boolean(null == e ? void 0 : e.state)
                                ? t(Boolean(null == e ? void 0 : e.state))
                                : null == s || s());
                    }),
                    c = M((e) => {
                        ((n.current = !0),
                            i != Boolean(null == e ? void 0 : e.state)
                                ? t(Boolean(null == e ? void 0 : e.state))
                                : null == s || s());
                    }),
                    d = M(() => {
                        ((r.current += 1), r.current == oo && (null == s || s(), (r.current = 0)));
                    }),
                    m = a(i, { ...io, onRest: d, immediate: n.current });
                return o.useMemo(() => ({ transitions: m, config: { start: l, skip: c } }), [m, l, c]);
            })(s, c);
        return (
            Si({
                id: i,
                elementId: t,
                registerAnimation: null == l ? void 0 : l.registerAnimation,
                animName: to,
                config: u,
            }),
            r ? m((s, i) => e.jsx(d.div, { style: s, className: n, children: r[Number(i)] })) : null
        );
    }),
    ro = 'delta',
    ao = {
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
    [lo, co] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['targetQuestId']),
            dailyMissionsBlockStatus: e.object('dailyMissionsBlockStatus'),
            premiumDailyMissionsBlockStatus: e.object('premiumDailyMissionsBlockStatus'),
            rewardProgressBlockStatus: e.object('rewardProgressBlockStatus'),
        }),
        U,
    ),
    mo = { duration: 100, easing: (e) => -(Math.cos(Math.PI * e) - 1) / 2 },
    uo = { from: { opacity: 0, y: -Q(10) }, to: { opacity: 1, y: 0 }, config: mo },
    _o = { from: { opacity: 1, y: 0 }, to: { opacity: 0, y: Q(10) }, config: mo };
const go = 'slideInOut';
const po = o.memo(function ({ id: s, elementId: i, className: n, children: r }) {
        var a, l;
        const [m, u] = o.useReducer((e) => e + 1, 0),
            _ = o.useRef(r),
            g = hi(s, go, i),
            p = o.useRef(g),
            f = p.current == g,
            { registerAnimation: x, emitter: b } = xi(),
            h = M(() => {
                ((p.current = g), b.trigger(hi(s, go, i), s, i));
            }),
            { styles: C, config: N } = (function (e) {
                const s = c(),
                    i = o.useCallback(() => (null == e ? void 0 : e()), [e]),
                    n = t({ ref: s, opacity: 1, y: 0, config: mo, onRest: i }),
                    r = M((e) => {
                        (null == e ? void 0 : e.leave)
                            ? s.start({ ..._o, ...e, onRest: i, reset: !0 })
                            : s.start({ ...uo, ...e, onRest: i, reset: !0 });
                    }),
                    a = M((e) => {
                        (null == e ? void 0 : e.leave)
                            ? s.start({ ..._o, ...e, onRest: i, delay: 0, reset: !0, immediate: !0 })
                            : s.start({ ...uo, ...e, onRest: i, delay: 0, reset: !0, immediate: !0 });
                    });
                return o.useMemo(() => ({ styles: n, config: { start: r, skip: a } }), [n, r, a]);
            })(h);
        o.useEffect(() => {
            f && (_.current = r);
        }, [f, r]);
        const v = M((e) => {
                (u(), N.start(e));
            }),
            I = M((e) => {
                (u(), N.skip(e));
            });
        return (
            Si({ id: s, elementId: i, registerAnimation: x, animName: go, config: { start: v, skip: I } }),
            f
                ? e.jsx(d.div, { style: C, className: n, children: r })
                : o.isValidElement(_.current) &&
                    (null == (a = _.current.props) ? void 0 : a.id) &&
                    (null == (l = _.current.props) ? void 0 : l.id) != s
                  ? e.jsx(d.div, { style: C, className: n, children: o.cloneElement(_.current, { id: s }) })
                  : e.jsx(d.div, { style: C, className: n, children: _.current })
        );
    }),
    fo = 'LOCKED_BLOCK',
    xo = 'lockIcon',
    bo = 'lockText',
    ho = 'glowLock',
    Co = 'baseCard',
    No = 'lockBonusHook',
    vo = 'unlockBonusHook',
    Io = {
        slideOut: {
            [go]: {
                [ao.MISSION_ICON]: { leave: !0, delay: 100 },
                [ao.CONDITION]: { leave: !0, delay: 80 },
                [ao.PROGRESS]: { leave: !0, delay: 40 },
                [ao.REWARD]: { leave: !0, delay: 20 },
            },
        },
        slideIn: {
            [go]: {
                [ao.MISSION_ICON]: { delay: 40 },
                [ao.CONDITION]: { delay: 60 },
                [ao.PROGRESS]: { delay: 100 },
                [ao.REWARD]: { delay: 120 },
            },
        },
    };
function yo(e, s) {
    o.useEffect(() => {
        e || s();
    });
}
function Ro(e, s, i) {
    const { totalProgress: o, isCompleted: t, id: n } = s;
    t && !i.isCompleted && 0 == o && (e[n] = Jo.missionComplete);
}
function Eo(e, s, i) {
    const { totalProgress: o, animateCompletion: t, isCompleted: n, id: r } = i;
    t ? 0 == o && (e[r] = Jo.missionComplete) : n && (s[r] = Jo.missionComplete);
}
const jo = {
        [qi]: {
            [Co]: { to: 0, reset: !0, immediate: !0 },
            [fo]: { to: 1, reset: !0, config: { duration: 300 } },
            [xo]: { to: 1, reset: !0, config: { duration: 300 } },
            [bo]: { to: 1, reset: !0, config: { duration: 300 } },
        },
    },
    Mo = 'lockBonusAnim',
    Oo = 'bonusSlideOut',
    ko = 'showLockComplete';
const So = { from: 0, to: 360, loop: !1, pause: !1, reset: !0, immediate: !1, config: { duration: 400 } };
const Po = 'rotate';
const wo = o.memo(function ({ id: s, className: i, elementId: t, props: n, children: r }) {
        const a = bi(),
            l = M(() => (null == a ? void 0 : a.emitter.trigger(hi(s, Po, t), s, t))),
            { rotate: c, config: u } = (function (e) {
                const s = o.useRef(!1),
                    i = M((e, i) => {
                        s.current && i.stop().set(0);
                    }),
                    t = m(0, { ...So, pause: !0, ...e, onStart: i }),
                    n = M((e) => {
                        ((s.current = !1), t.start({ ...So, ...e, onStart: i }).then(U));
                    }),
                    r = M((e) => {
                        ((s.current = !0), t.stop().set(0));
                    });
                return o.useMemo(() => ({ rotate: t, config: { start: n, skip: r } }), [t, r, n]);
            })(n),
            _ = M((e) => {
                (u.start(e), (null == e ? void 0 : e.loop) && l());
            }),
            g = M((e) => {
                (u.skip(e), l());
            });
        return (
            Si({
                id: s,
                animName: Po,
                elementId: t,
                registerAnimation: null == a ? void 0 : a.registerAnimation,
                config: { start: _, skip: g },
            }),
            r ? e.jsx(d.div, { style: { rotate: c }, className: i, children: r }) : null
        );
    }),
    To = {
        reRollSlideOut: { [Po]: { [ao.REROLL_COMPONENT_ICON]: { loop: !0 } }, ...Io.slideOut },
        reRollSlideIn: { [qi]: { [ao.REROLL_COMPONENT]: { to: 0, config: { duration: 100 } } }, ...Io.slideIn },
        missionUnComplete: {
            [to]: { '': { state: !1 } },
            [qi]: {
                [ao.CONDITION]: { to: 1 },
                [ao.PROGRESS]: { to: 1 },
                [ao.REROLL_COMPONENT]: { to: 1 },
                [ao.REWARD]: { to: 1 },
            },
        },
    },
    Bo = 'useMissionChangedHook';
function Lo(e) {
    const { startGroupAnimation: s, registerAnimation: i, emitter: o } = xi(),
        t = ao.REROLL_HOOK,
        n = hi(`${e}_slideInComplete`, Bo, t),
        r = hi(`${e}_slideOutComplete`, Bo, t);
    (X(o, n, () => {
        o.trigger(hi(e, Bo, t), e, t);
    }),
        X(o, r, () => {
            (s({ groupId: e, groupCfg: To.missionUnComplete, providerCfg: { skip: !0, skipTrigger: !0 } }),
                setTimeout(() => {
                    s({ groupId: e, groupCfg: To.reRollSlideIn, providerCfg: { triggerId: n } });
                }, 400));
        }));
    const a = M(() => {
        s({
            groupId: e,
            groupCfg: To.reRollSlideOut,
            providerCfg: { triggerId: r },
            soundCfg: Ce.umg_hub_quest_reroll,
        });
    });
    Si({ id: e, elementId: t, registerAnimation: i, animName: Bo, config: { start: a, skip: U } });
}
const Ao = {
    missionChange: { [Bo]: { [ao.REROLL_HOOK]: {} } },
    hideReRollComponent: { [qi]: { [ao.REROLL_COMPONENT]: { to: 0, config: { duration: 150 } } } },
    lockBonus: { [Mo]: { [No]: {} } },
};
function Do(e, s, i) {
    const { id: o, currentProgress: t } = s;
    return !!(o != i.id || (0 == t && i.currentProgress)) && ((e[o] = Ao.missionChange), !0);
}
const Wo = {
    showReRollTimer: {
        [qi]: {
            [ao.REROLL_COMPONENT_TIMER]: { to: 1, immediate: !0 },
            [ao.REROLL_COMPONENT_BUTTON]: { to: 0, immediate: !0 },
            [ao.REROLL_COMPONENT]: { to: 1, delay: 400, config: { duration: 200 } },
        },
        [Po]: { [ao.REROLL_COMPONENT_ICON]: { immediate: !0, pause: !0, loop: !1 } },
    },
    stopRotation: { [Po]: { [ao.REROLL_COMPONENT_ICON]: {} } },
    showReRollButton: {
        [qi]: {
            [ao.REROLL_COMPONENT_TIMER]: { to: 0, immediate: !0 },
            [ao.REROLL_COMPONENT_BUTTON]: { to: 1, immediate: !0 },
            [ao.REROLL_COMPONENT]: { to: 1, delay: 400, config: { duration: 200 } },
        },
    },
};
function Go(e, s) {
    return e.reduce((e, { id: i, isCompleted: o }) => (o || (e[i] = s), e), {});
}
const Ho = 'UnlockVideo_2a17fce0',
    Fo = 'UnlockVideo_video_c11372d2',
    qo = p.resolve('videos'),
    Vo = 'unlockVideo';
const $o = o.memo(function ({ id: i, elementId: t, className: n }) {
        const r = o.useRef(null),
            a = bi(),
            { opacity: l, config: c } = Fi(0),
            m = M(() => {
                r.current && (r.current.play(), c.start({ to: 1 }));
            }),
            u = M(U),
            _ = o.useCallback(() => {
                null == a || a.emitter.trigger(hi(i, Vo, t), i, t);
            }, [null == a ? void 0 : a.emitter, t, i]);
        Si({
            id: i,
            elementId: t,
            registerAnimation: null == a ? void 0 : a.registerAnimation,
            animName: Vo,
            config: { start: m, skip: u },
        });
        const g = qo.readOrEmpty('user_missions.unlock_72x72');
        return e.jsx(d.div, {
            style: { opacity: l },
            className: s(Ho, n),
            children: e.jsx(J, { src: g, ref: r, onEnded: _, className: Fo }),
        });
    }),
    zo = {
        hideLockState: {
            [qi]: {
                [xo]: { to: 0, reset: !0, config: { duration: 300 } },
                [bo]: { to: 0, reset: !0, config: { duration: 300 } },
            },
            [eo]: {},
            [Gi]: { [ho]: {} },
            [Vo]: {},
        },
    },
    Uo = { [qi]: { [Co]: { to: 1, reset: !0, immediate: !0 } }, ...Io.slideIn },
    Qo = 'unlockBonusAnim',
    Yo = 'hideLockEvent',
    Ko = 'showBonusQuestComplete';
const Xo = {
        MISSION_COMPLETE: 'missionComplete',
        RE_ROLL: 'reRoll',
        HIDE_REROLL_COMPONENT: 'hideReRollComponent',
        SHOW_REROLL_COMPONENT: 'showReRollComponent',
    },
    Jo = {
        missionComplete: {
            [to]: { '': { state: !0 } },
            [Gi]: {},
            [eo]: {},
            [qi]: {
                [ao.CONDITION]: { to: 0.5 },
                [ao.PROGRESS]: { to: 0.5 },
                [ao.REROLL_COMPONENT]: { to: 0, config: { duration: 300 } },
                [ao.REWARD]: { to: 0.5, delay: 200 },
            },
        },
    };
function Zo() {
    const { startAnimation: e, startComplexAnimation: s, checkRegisteredInStorage: i, emitter: t } = xi(),
        { model: n } = co(),
        { model: r } = ki(),
        a = r.missionsList.get(),
        l = I(r.bonusMission.get()),
        c = r.timeToNextRerol.get(),
        d = Z();
    (!(function ({ missions: e, bonusMission: s }) {
        const { startComplexAnimation: i } = xi();
        K(() => {
            const o = {},
                t = {};
            (e.forEach((e) => {
                Eo(o, t, e);
            }),
                Eo(o, t, s),
                q(t) ||
                    i({ complexId: Xo.MISSION_COMPLETE, complexCfg: t, providerCfg: { skip: !0, skipTrigger: !0 } }),
                q(o) || i({ complexId: Xo.MISSION_COMPLETE, complexCfg: o, soundCfg: Ce.umg_hub_quest_complete }));
        });
    })({ missions: a, bonusMission: l }),
        (function ({ missions: e, bonusMission: s, isFirstRender: i }) {
            const { startComplexAnimation: o } = xi(),
                t = Y(e),
                n = Y(s);
            yo(i, () => {
                const i = {};
                (e.forEach((e, s) => {
                    const o = t[s];
                    Ro(i, e, o);
                }),
                    Ro(i, s, n),
                    q(i) || o({ complexId: Xo.MISSION_COMPLETE, complexCfg: i, soundCfg: Ce.umg_hub_quest_complete }));
            });
        })({ missions: a, bonusMission: l, isFirstRender: d }),
        (function ({ missions: e, bonusMission: s, timeToNextReRoll: i, isFirstRender: o }) {
            const { startComplexAnimation: t, startGroupAnimation: n } = xi(),
                r = Y(e),
                a = Y({ ...s });
            yo(o, () => {
                const o = {},
                    l = {};
                (e.forEach((e, s) => {
                    const i = r[s];
                    Do(o, e, i) || (l[e.id] = Ao.hideReRollComponent);
                }),
                    s.isAvailable && Do(o, s, a),
                    !s.isAvailable && a.isAvailable && n({ groupId: s.id, groupCfg: Ao.lockBonus }),
                    q(o) ||
                        (i > 0 && t({ complexId: Xo.HIDE_REROLL_COMPONENT, complexCfg: l }),
                        t({ complexId: Xo.RE_ROLL, complexCfg: o })));
            });
        })({ missions: a, bonusMission: l, timeToNextReRoll: c, isFirstRender: d }),
        (function ({ missions: e, timeToNextReRoll: s, isFirstRender: i }) {
            const { startComplexAnimation: o, emitter: t } = xi(),
                n = Y(s);
            (yo(i, () => {
                if (0 == s && n > 0) {
                    const s = Go(e, Wo.showReRollButton);
                    o({
                        complexId: Xo.SHOW_REROLL_COMPONENT,
                        complexCfg: s,
                        providerCfg: { skip: !0, skipTrigger: !0 },
                    });
                }
            }),
                X(t, Xo.RE_ROLL, () => {
                    if (0 == s) {
                        const s = Go(e, Wo.stopRotation),
                            i = Go(e, Wo.showReRollButton);
                        return (
                            o({
                                complexId: Xo.SHOW_REROLL_COMPONENT,
                                complexCfg: s,
                                providerCfg: { skip: !0, skipTrigger: !0 },
                            }),
                            void o({ complexId: Xo.SHOW_REROLL_COMPONENT, complexCfg: i })
                        );
                    }
                    const i = Go(e, Wo.showReRollTimer);
                    o({ complexId: Xo.SHOW_REROLL_COMPONENT, complexCfg: i });
                }));
        })({ missions: a, timeToNextReRoll: c, isFirstRender: d }));
    const m = o.useCallback(() => {
        if (l.isCompleted) return;
        a.every(({ isCompleted: e }) => e) && e({ id: l.id, animName: Qo, elementId: vo });
    }, [l.isCompleted, l.id, a, e]);
    (X(t, ro, (e) => {
        const i = r.computes.missionById(e);
        (null == i ? void 0 : i.isCompleted) &&
            (null == i ? void 0 : i.currentProgress) == (null == i ? void 0 : i.totalProgress) &&
            s({
                complexId: Xo.MISSION_COMPLETE,
                complexCfg: { [e]: Jo.missionComplete },
                soundCfg: Ce.umg_hub_quest_complete,
            });
    }),
        X(t, Xo.MISSION_COMPLETE, () => {
            m();
        }));
    const u = n.targetQuestId.get(),
        _ = Y(u);
    o.useEffect(() => {
        u && _ != u && i({ id: u, animName: eo }) && e({ id: u, animName: eo, soundCfg: Ce.umg_hub_highlight });
    }, [i, _, e, u]);
}
const et = o.memo(function ({ id: s, currentProgress: i, totalProgress: t, earned: n }) {
        const r = bi(),
            { play: a } = j(),
            l = M(() => (null == r ? void 0 : r.emitter.trigger(ro, s))),
            c = M(() => a(Ce.umg_hub_quest_progress)),
            d = o.useMemo(() => ({ onResolve: l, onStart: c }), [l, c]);
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(es, { current: i, total: t }),
                e.jsx(is, {
                    size: 'small',
                    value: i,
                    maxValue: t,
                    children: e.jsx(N, { id: s, initValue: i - n, initMaxValue: t, animationProps: d }),
                }),
            ],
        });
    }),
    st = 'premiumMissionUnlockComplete';
const it = o.memo(function ({ id: s, currentProgress: i, totalProgress: t, earned: n, isPaused: r }) {
        const a = xi(),
            [l, c] = o.useState(!r);
        return (
            X(a.emitter, st, (e) => {
                s === (null == e ? void 0 : e.id) && c(!0);
            }),
            e.jsx(et, { id: s, currentProgress: l ? i : i - n, totalProgress: t, earned: n })
        );
    }),
    ot = {
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
function tt({
    data: i,
    className: t,
    classNames: n,
    isPremium: r = !1,
    resId: a = 0,
    isProgressAnimationPaused: l = !1,
    iconSeverityLog: c = 'warn',
}) {
    const d = i.icon + (r ? '_gold' : '_silver'),
        m = w(
            { iconPath: `userMissions.missionIcons.c_32.${d}`, rewardSize: G.S24x24, rewardMaxCount: 4 },
            {
                medium: { iconPath: `userMissions.missionIcons.c_80.${d}` },
                large: { rewardSize: G.Small, rewardMaxCount: 5 },
            },
        ),
        { id: u, isCompleted: _, animateCompletion: g } = i,
        p = i.totalProgress > 0;
    return (
        o.useEffect(() => {
            i.icon || 'silent' == c || ee(`Icon for quest ID: ${u} is not set`, c);
        }, [i.icon, c, u]),
        e.jsxs('div', {
            className: s(ot.base, t),
            children: [
                e.jsx(Hi, { id: u }),
                e.jsxs('div', {
                    className: ot.topContent,
                    children: [
                        e.jsx(po, {
                            id: u,
                            elementId: ao.MISSION_ICON,
                            className: ot.iconPosition,
                            children: e.jsxs(no, {
                                id: u,
                                init: _ && !g,
                                children: [
                                    i.icon &&
                                        e.jsx(
                                            C,
                                            {
                                                path: m.iconPath,
                                                width: 32,
                                                height: 32,
                                                adaptive: { medium: { width: 80, height: 80 } },
                                                className: s(ot.icon, ot.icon__quest, null == n ? void 0 : n.icon),
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
                                        className: ot.icon,
                                    }),
                                ],
                            }),
                        }),
                        e.jsx('div', { className: ot.sizeBoxTemp }),
                        e.jsx(Vi, {
                            id: u,
                            elementId: ao.CONDITION,
                            from: 0.9,
                            children: e.jsx(po, {
                                id: u,
                                elementId: ao.CONDITION,
                                children: e.jsx(f, {
                                    text: se(i.description),
                                    justifyContent: x.Center,
                                    classMix: s(ot.condition, null == n ? void 0 : n.condition),
                                    isTooltipEnable: !0,
                                    isTruncationAvailable: !0,
                                    targetId: a,
                                }),
                            }),
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: ot.bottomContent,
                    children: [
                        e.jsx(Vi, {
                            id: u,
                            elementId: ao.PROGRESS,
                            from: 1,
                            children: e.jsx(po, {
                                id: u,
                                elementId: ao.PROGRESS,
                                className: ot.progress,
                                children:
                                    p &&
                                    (r
                                        ? e.jsx(it, {
                                              id: u,
                                              currentProgress: i.currentProgress,
                                              totalProgress: i.totalProgress,
                                              earned: i.earned,
                                              isPaused: l,
                                          })
                                        : e.jsx(et, {
                                              id: u,
                                              currentProgress: i.currentProgress,
                                              totalProgress: i.totalProgress,
                                              earned: i.earned,
                                          })),
                            }),
                        }),
                        e.jsx(Vi, {
                            id: u,
                            elementId: ao.REWARD,
                            from: 1,
                            className: s(ot.rewardsContainer, null == n ? void 0 : n.rewards),
                            children: e.jsx(po, {
                                id: u,
                                elementId: ao.REWARD,
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
                                        rewardItemClassMix: ot.rewardItem,
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
const nt = 'DailyBonusMissionCard_cardBlock_cc29aa9d',
    rt = 'DailyBonusMissionCard_7d966ce1',
    at = 'DailyBonusMissionCard_cardBlock__disabled_6a0da54e',
    lt = 'DailyBonusMissionCard_lockBlock_ac1dd103',
    ct = 'DailyBonusMissionCard_lockContent_19bd64b6',
    dt = 'DailyBonusMissionCard_lockIconBlock_cb535d36',
    mt = 'DailyBonusMissionCard_lockIcon_da4d31e0',
    ut = 'DailyBonusMissionCard_unlockVideo_86889f8c',
    _t = 'DailyBonusMissionCard_lockMessage_662cb362',
    gt = 'DailyBonusMissionCard_timer_f1d1a15a',
    pt = p.resolve('aliases'),
    ft = p.resolve('strings'),
    xt = new Map([
        [!0, 1],
        [!1, 0],
    ]);
function bt({ data: i, isAnyCompleteAnimation: o, timeToMissionsUpdate: t }) {
    const { id: n, isAvailable: r } = i,
        a = !r || o;
    (!(function (e, s) {
        const { startGroupAnimation: i, registerAnimation: o, emitter: t } = xi();
        (X(t, ko, () => {
            t.trigger(hi(e, Mo, s), e, s);
        }),
            X(t, Oo, () => {
                i({ groupId: e, groupCfg: jo, providerCfg: { triggerId: ko } });
            }));
        const n = M(() => {
                i({ groupId: e, groupCfg: Io.slideOut, providerCfg: { triggerId: Oo } });
            }),
            r = M(() => {
                i({ groupId: e, groupCfg: Io.slideOut, providerCfg: { skip: !0, triggerId: Oo } });
            });
        Si({ id: e, elementId: s, registerAnimation: o, animName: Mo, config: { start: n, skip: r } });
    })(n, No),
        (function (e, s) {
            const { startGroupAnimation: i, registerAnimation: o, emitter: t } = xi();
            (X(t, Ko, () => {
                t.trigger(hi(e, Qo, s), e, s);
            }),
                X(t, Yo, () => {
                    i({ groupId: e, groupCfg: Uo, providerCfg: { triggerId: Ko } });
                }));
            const n = M(() => {
                    (i({ groupId: e, groupCfg: Io.slideOut, providerCfg: { skip: !0, skipTrigger: !0 } }),
                        i({
                            groupId: e,
                            groupCfg: zo.hideLockState,
                            providerCfg: { triggerId: Yo },
                            soundCfg: Ce.umg_hub_unlock_bonus,
                        }));
                }),
                r = M(() => {
                    i({
                        groupId: e,
                        groupCfg: { ...Io.slideOut, ...zo.hideLockState },
                        providerCfg: { skip: !0, skipTrigger: !0 },
                    });
                });
            Si({ id: e, elementId: s, registerAnimation: o, animName: Qo, config: { start: n, skip: r } });
        })(n, vo),
        Lo(n));
    const l = h({ body: ft.readOrEmpty('user_missions.hub.basic_missions.daily.bonus_daily_missions_timer.tooltip') });
    return e.jsxs('div', {
        className: rt,
        children: [
            e.jsxs(Vi, {
                id: n,
                elementId: Co,
                className: s(nt, a && at),
                from: xt.get(!a),
                children: [
                    e.jsx(tt, {
                        data: { ...i, id: n },
                        resId: pt.read((e) =>
                            e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId'),
                        ),
                        iconSeverityLog: i.isAvailable ? 'warn' : 'silent',
                    }),
                    !i.isCompleted &&
                        t > 0 &&
                        e.jsx('div', { className: gt, ...l, children: e.jsx(W, { start: t, size: W.size.x24x24 }) }),
                ],
            }),
            e.jsxs(Vi, {
                id: n,
                elementId: fo,
                className: lt,
                from: xt.get(a),
                children: [
                    e.jsx(Hi, { id: n, elementId: ho, glowType: Li.GREY_LENSE }),
                    e.jsxs('div', {
                        className: ct,
                        children: [
                            e.jsxs('div', {
                                className: dt,
                                children: [
                                    e.jsx(Vi, {
                                        id: n,
                                        elementId: xo,
                                        from: 1,
                                        children: e.jsx('div', { className: mt }),
                                    }),
                                    e.jsx($o, { id: n, className: ut }),
                                ],
                            }),
                            e.jsx(Vi, {
                                id: n,
                                elementId: bo,
                                from: 1,
                                children: e.jsx(g, {
                                    path: 'user_missions.hub.basic_missions.daily.bonus_daily_missions_lock_info',
                                    className: _t,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(so, { id: n }),
        ],
    });
}
const ht = {
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
    Ct = p.resolve('aliases'),
    Nt = p.resolve('views'),
    vt = p.resolve('strings'),
    It = Ct.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId')),
    yt = Nt.read((e) => e.mono.user_missions.tooltips.daily_reroll_tooltip('resId'));
function Rt({ id: i, isCompleted: o, onClick: t, className: n, timeToNextReroll: r }) {
    const a = ie({ resId: It, contentId: yt, disabled: o }),
        l = !o && 0 === r,
        c = r > 0;
    return e.jsxs(Vi, {
        id: i,
        elementId: ao.REROLL_COMPONENT,
        from: o ? 0 : 1,
        ...a,
        className: s(ht.base, l && ht.base__active, n),
        onClick: l ? t : void 0,
        children: [
            e.jsx(Vi, {
                from: c ? 1 : 0,
                id: i,
                elementId: ao.REROLL_COMPONENT_TIMER,
                className: ht.timerAnim,
                children: e.jsx(W, {
                    start: r,
                    format: W.format.superCompact,
                    size: W.size.x24x24,
                    className: ht.timer,
                }),
            }),
            e.jsxs(Vi, {
                from: c ? 0 : 1,
                id: i,
                elementId: ao.REROLL_COMPONENT_BUTTON,
                className: s(ht.buttonAnim, c && ht.buttonAnim__hided),
                children: [
                    e.jsx('div', {
                        className: ht.title,
                        children: vt.readOrEmpty('user_missions.hub.basic_missions.daily.reroll_button'),
                    }),
                    e.jsx(wo, {
                        id: i,
                        elementId: ao.REROLL_COMPONENT_ICON,
                        className: ht.iconAnimation,
                        children: e.jsx('div', { className: ht.icon }),
                    }),
                ],
            }),
        ],
    });
}
const Et = 'DailyMissionCard_dbc24668',
    jt = 'DailyMissionCard_reroll_fd5c6ea8',
    Mt = p.resolve('aliases');
function Ot({ data: s, timeToNextReroll: i, onReroll: o }) {
    const { id: t, isCompleted: n } = s;
    return (
        Lo(t),
        e.jsxs('div', {
            className: Et,
            children: [
                e.jsx(tt, {
                    data: s,
                    resId: Mt.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId')),
                }),
                e.jsx(so, { id: s.id }),
                s.isRerollEnabled &&
                    e.jsx(Rt, { id: t, isCompleted: n, onClick: () => o(s.id), timeToNextReroll: i, className: jt }),
            ],
        })
    );
}
const kt = 'DailyMissionsBlock_d8a9293c',
    St = 'DailyMissionsBlock_allMissionsCompletedBlock_d019306a',
    Pt = 'DailyMissionsBlock_allMissionsCompletedMessage_20d9eaa9',
    wt = 'DailyMissionsBlock_timer_c9dd266c',
    Tt = 'DailyMissionsBlock_separator_3d64a18',
    Bt = p.resolve('strings'),
    Lt = i(function () {
        const { model: s, controls: i } = ki(),
            o = s.timeToMissionsUpdate.get();
        Zo();
        const t = h({
            body: Bt.readOrEmpty('user_missions.hub.basic_missions.daily.new_daily_missions_timer.tooltip'),
        });
        return e.jsxs('div', {
            className: kt,
            children: [
                s.areAllMissionsCompleted.get() &&
                    e.jsxs('div', {
                        className: St,
                        ...t,
                        children: [
                            e.jsx('div', {
                                className: Pt,
                                children: Bt.readOrEmpty(
                                    'user_missions.hub.basic_missions.daily.new_daily_missions_timer.message',
                                ),
                            }),
                            e.jsx(W, { start: o, size: W.size.x16x16, className: wt }),
                        ],
                    }),
                k(s.missionsList.get(), (o, t) =>
                    e.jsxs(
                        l.Fragment,
                        {
                            children: [
                                e.jsx(Ot, { data: o, onReroll: i.onReroll, timeToNextReroll: s.timeToNextRerol.get() }),
                                e.jsx('div', { className: Tt }),
                            ],
                        },
                        `dm_card_${t}`,
                    ),
                ),
                e.jsx(bt, {
                    data: { ...s.bonusMission.get(), bonuses: s.bonusMissionBonuses.get() },
                    isAnyCompleteAnimation: s.computes.isAnyCompleteAnimation(),
                    timeToMissionsUpdate: o,
                }),
            ],
        });
    }),
    At = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId')),
    };
function Dt() {
    return e.jsx(Oi, { options: At, children: e.jsx(Mi, { children: e.jsx(Lt, {}) }) });
}
const [Wt, Gt] = u()(
        ({ observableModel: e }) => {
            const s = { ...e.primitives(['isAvailable']), missionsList: e.array('missionsList', []) },
                i = y.model((e) => z(s.missionsList.get(), (s) => s.id == e));
            return { ...s, computes: { missionById: i } };
        },
        ({ externalModel: e }) => ({ onPurchasePremium: e.createCallback((e) => ({ id: e }), 'onPurchasePremium') }),
    ),
    Ht = {
        from: { opacity: 0, transform: 'translateX(-10%)' },
        to: async (e) => {
            (await e({ opacity: 0.2, transform: 'translateX(0%)', config: { duration: 300 } }),
                await e({ opacity: 0, transform: 'translateX(10%)', config: { duration: 300 } }));
        },
    },
    Ft = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 0.25, config: { duration: 200 } }), await e({ opacity: 0, config: { duration: 400 } }));
        },
    },
    qt = {
        from: { opacity: 0.25 },
        to: async (e) => {
            (await e({ opacity: 0.9, config: { duration: 200 } }),
                await e({ opacity: 0.25, config: { duration: 400 } }));
        },
    },
    Vt = 4;
const $t = 'Arrow_391ca11f',
    zt = 'Arrow_iconBig_9a073166',
    Ut = 'Arrow_icon_bbabc0ab',
    Qt = 'Arrow_icon__left_cc9a053b',
    Yt = 'Arrow_icon__right_2cb4415d',
    Kt = 'arrow';
function Xt({ id: i }) {
    const { registerAnimation: n, emitter: a } = xi(),
        l = M(() => a.trigger(hi(i, Kt), i)),
        {
            bigArrowStyle: d,
            leftArrowStyle: m,
            mainArrowStyle: u,
            rightArrowStyle: _,
            config: g,
        } = (function (e) {
            const s = c(),
                i = c(),
                n = c(),
                r = c(),
                a = o.useRef(0),
                l = M(() => {
                    ((a.current += 1), a.current == Vt && ((a.current = 0), null == e || e()));
                }),
                d = M((e) => {
                    const o = 0 | (null == e ? void 0 : e.delay);
                    (s.start({ ...Ht, onRest: l, reset: !0, delay: o }),
                        i.start({ ...Ft, onRest: l, reset: !0, delay: o + 150 }),
                        n.start({ ...qt, onRest: l, reset: !0, delay: o + 250 }),
                        r.start({ ...Ft, onRest: l, reset: !0, delay: o + 350 }));
                }),
                m = t({ ref: s, onRest: l, ...Ht }),
                u = t({ ref: i, onRest: l, ...Ft }),
                _ = t({ ref: n, onRest: l, ...qt }),
                g = t({ ref: r, onRest: l, ...Ft });
            return o.useMemo(
                () => ({
                    bigArrowStyle: m,
                    leftArrowStyle: u,
                    mainArrowStyle: _,
                    rightArrowStyle: g,
                    config: { start: d, skip: U },
                }),
                [m, u, _, g, d],
            );
        })(l);
    return (
        Si({ id: i, registerAnimation: n, animName: Kt, config: g }),
        e.jsxs('div', {
            className: $t,
            children: [
                e.jsx(r.div, { style: d, className: zt }),
                e.jsx(r.div, { style: m, className: s(Ut, Qt) }),
                e.jsx(r.div, { style: _, className: s(Ut, Yt) }),
                e.jsx(r.div, { style: u, className: Ut }),
            ],
        })
    );
}
const Jt = 'card',
    Zt = 'lockIcon',
    en = 'glowLock',
    sn = 'unlockGlowShow',
    on = 'unlockGlowHide',
    tn = 'PremiumDailyMissionsCard_606cad53',
    nn = 'PremiumDailyMissionsCard_lockContainer_df076624',
    rn = 'PremiumDailyMissionsCard_card_b95d2566',
    an = 'PremiumDailyMissionsCard_icon_77ecd434',
    ln = 'PremiumDailyMissionsCard_condition_5fa7ebd',
    cn = 'PremiumDailyMissionsCard_unlockVideo_416f470a',
    dn = 'PremiumDailyMissionsCard_lockIcon_9bac6cb',
    mn = 'PremiumDailyMissionsCard_unlockGlowContainer_c6213bf6',
    un = 'PremiumDailyMissionsCard_unlockGlow_6356a26d',
    _n = p.resolve('aliases'),
    gn = p.resolve('strings');
function pn({ data: s, isJustUnlocked: i }) {
    const o = h({ body: gn.readOrEmpty('user_missions.hub.basic_missions.daily.premium.locked_mission.tooltip') }),
        t = s.isLocked || i;
    return e.jsxs('div', {
        className: tn,
        children: [
            e.jsxs(Vi, {
                id: s.id,
                elementId: Jt,
                from: t ? 0.25 : 1,
                className: rn,
                children: [
                    e.jsx(tt, {
                        data: s,
                        isPremium: !0,
                        classNames: { icon: an, condition: ln },
                        resId: _n.read((e) =>
                            e.user_missions.hub.basicMissions.DailyMissionsSection.PremiumBlock('resId'),
                        ),
                        isProgressAnimationPaused: t,
                    }),
                    e.jsx(so, { id: s.id }),
                ],
            }),
            t &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsxs('div', {
                            className: nn,
                            ...(s.isLocked && o),
                            children: [
                                e.jsx(Hi, { id: s.id, elementId: en, glowType: Li.GREY_LENSE }),
                                e.jsx(Vi, {
                                    id: s.id,
                                    elementId: Zt,
                                    from: 1,
                                    children: e.jsx('div', { className: dn }),
                                }),
                                e.jsx($o, { id: s.id, className: cn }),
                            ],
                        }),
                        e.jsx(Vi, {
                            id: s.id,
                            elementId: on,
                            from: 1,
                            className: mn,
                            children: e.jsx(Vi, {
                                id: s.id,
                                elementId: sn,
                                from: 0,
                                className: mn,
                                children: e.jsx('div', { className: un }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function fn(e, s) {
    o.useEffect(() => {
        e && s();
    });
}
const xn = 1e3,
    bn = {
        missionComplete: {
            [to]: { '': { state: !0 } },
            [Gi]: {},
            [qi]: { [ao.CONDITION]: { to: 0.25 }, [ao.PROGRESS]: { to: 0.5 }, [ao.REWARD]: { to: 0.5, delay: 200 } },
            [Kt]: { '': { delay: 600 } },
        },
        missionUnlock: {
            [eo]: {},
            [Gi]: { [en]: {} },
            [Vo]: {},
            [qi]: { [Jt]: { to: 1, delay: 1250 }, [Zt]: { to: 0 }, [sn]: { to: 1 }, [on]: { to: 0, delay: 400 } },
        },
    };
function hn({ completeIdx: e, missions: s, startGroupAnimation: i }) {
    const o = s[e];
    if ((i({ groupId: o.id, groupCfg: bn.missionComplete, soundCfg: Ce.umg_hub_quest_complete }), e < s.length - 1)) {
        const o = e + 1,
            t = s[o];
        setTimeout(() => {
            i({
                groupId: t.id,
                groupCfg: bn.missionUnlock,
                providerCfg: { triggerId: st, triggerParams: { unlockedIdx: o } },
                soundCfg: Ce.umg_hub_unlock_premium,
            });
        }, xn);
    }
}
const Cn = {
        MISSION_COMPLETE: 'premiumMissionComplete',
        MISSION_LOCKED: 'premiumMissionLocked',
        MISSION_UN_COMPLETE: 'premiumMissionUnComplete',
    },
    Nn = {
        missionUnComplete: {
            [to]: { '': { state: !1 } },
            [qi]: {
                [ao.CONDITION]: { to: 0.9 },
                [ao.PROGRESS]: { to: 1 },
                [ao.REWARD]: { to: 1 },
                [Jt]: { to: 1 },
                [Zt]: { to: 0 },
            },
        },
        missionLock: {
            [to]: { '': { state: !1 } },
            [qi]: {
                [ao.CONDITION]: { to: 0.9 },
                [ao.PROGRESS]: { to: 1 },
                [ao.REWARD]: { to: 1 },
                [Jt]: { to: 0.25 },
                [Zt]: { to: 1 },
            },
        },
    };
function vn() {
    const { startAnimation: e, checkRegisteredInStorage: s } = xi(),
        { model: i } = co(),
        { model: t } = Gt(),
        n = I(t.missionsList.get()),
        r = Y(n),
        a = Z(),
        l = i.targetQuestId.get(),
        c = Y(l);
    (o.useEffect(() => {
        l && c != l && s({ id: l, animName: eo }) && e({ id: l, animName: eo, soundCfg: Ce.umg_hub_highlight });
    }, [s, c, e, l]),
        (function ({ missions: e }) {
            const { startGroupAnimation: s } = xi();
            K(() => {
                const i = e.findIndex((e) => e.isCompleted && e.animateCompletion);
                -1 !== i && hn({ completeIdx: i, missions: e, startGroupAnimation: s });
            });
        })({ missions: n }),
        (function ({ isFirstRender: e, missions: s, prevMissions: i }) {
            const { startComplexAnimation: o } = xi();
            (K(() => {
                const e = {};
                (s.forEach((s) => {
                    s.isCompleted && !s.animateCompletion && (e[s.id] = bn.missionComplete);
                }),
                    q(e) ||
                        o({
                            complexId: Cn.MISSION_COMPLETE,
                            complexCfg: e,
                            providerCfg: { skip: !0, skipTrigger: !0 },
                        }));
            }),
                fn(!e, () => {
                    const e = {},
                        t = {};
                    (s.forEach((s, o) => {
                        const n = i[o];
                        s.isLocked && !n.isLocked
                            ? (e[s.id] = Nn.missionLock)
                            : !s.isCompleted && n.isCompleted && (t[s.id] = Nn.missionUnComplete);
                    }),
                        q(e) ||
                            o({
                                complexId: Cn.MISSION_LOCKED,
                                complexCfg: e,
                                providerCfg: { skip: !0, skipTrigger: !0 },
                            }),
                        q(t) ||
                            o({
                                complexId: Cn.MISSION_UN_COMPLETE,
                                complexCfg: t,
                                providerCfg: { skip: !0, skipTrigger: !0 },
                            }));
                }));
        })({ isFirstRender: a, missions: n, prevMissions: r }),
        (function ({ isFirstRender: e, missions: s, prevMissions: i }) {
            const { startGroupAnimation: o, emitter: t } = xi();
            (X(t, st, ({ unlockedIdx: e }) => {
                s[e].isCompleted && hn({ completeIdx: e, missions: s, startGroupAnimation: o });
            }),
                fn(!e, () => {
                    const e = s.findIndex((e, s) => {
                        const o = i[s];
                        return e.isCompleted && !o.isCompleted;
                    });
                    -1 !== e && hn({ completeIdx: e, missions: s, startGroupAnimation: o });
                }));
        })({ isFirstRender: a, missions: n, prevMissions: r }));
}
const In = 'PremiumDailyMissionsList_a02f9e79',
    yn = i(function () {
        const { model: s } = Gt(),
            i = s.missionsList.get();
        return (
            vn(),
            e.jsx('div', {
                className: In,
                children: k(i, (s, o) => {
                    var t;
                    const n = (o > 0 && (null == (t = E(i, o - 1)) ? void 0 : t.animateCompletion)) || !1;
                    return e.jsxs(
                        l.Fragment,
                        {
                            children: [
                                e.jsx(pn, { data: s, isJustUnlocked: n }, `pdm_card_${s.id}`),
                                o < i.length - 1 && e.jsx(Xt, { id: s.id }),
                            ],
                        },
                        `pdm_card_${s.id}`,
                    );
                }),
            })
        );
    }),
    Rn = 'PurchasePremiumState_bg_9f5578d2',
    En = 'PurchasePremiumState_6e377b64',
    jn = 'PurchasePremiumState_icon_f474fb80',
    Mn = 'PurchasePremiumState_container_c4d5c44e',
    On = 'PurchasePremiumState_title_d576f228',
    kn = 'PurchasePremiumState_message_a8e12b7c',
    Sn = 'PurchasePremiumState_button_4e9a2fc9',
    Pn = 'PurchasePremiumState_buttonTitle_2b5af5a0',
    wn = p.resolve('strings');
function Tn() {
    const { controls: s } = Gt();
    return e.jsxs('div', {
        className: En,
        children: [
            e.jsx('div', { className: Rn }),
            e.jsx('div', { className: jn }),
            e.jsxs('div', {
                className: Mn,
                children: [
                    e.jsx('div', {
                        className: On,
                        children: wn.readOrEmpty('user_missions.hub.basic_missions.daily.purchase_premium.title'),
                    }),
                    e.jsx('div', {
                        className: kn,
                        children: wn.readOrEmpty('user_missions.hub.basic_missions.daily.purchase_premium.message'),
                    }),
                    e.jsx(_, {
                        theme: _.themes.primary,
                        size: _.sizes.small,
                        onClick: s.onPurchasePremium,
                        className: Sn,
                        children: e.jsx('div', {
                            className: Pn,
                            children: wn.readOrEmpty('user_missions.hub.basic_missions.daily.purchase_premium.button'),
                        }),
                    }),
                ],
            }),
        ],
    });
}
const Bn = i(function () {
        const { model: s } = Gt();
        return s.isAvailable.get() ? e.jsx(yn, {}) : e.jsx(Tn, {});
    }),
    Ln = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.PremiumBlock('resId')),
    };
function An() {
    return e.jsx(Wt, { options: Ln, children: e.jsx(Mi, { children: e.jsx(Bn, {}) }) });
}
const [Dn, Wn] = u()(({ observableModel: e }) => e.primitives(['progressType']), U);
var Gn = ((e) => ((e.EpicQuest = 'epicQuest'), (e.WinBack = 'winBack'), (e.Disabled = 'disabled'), e))(Gn || {});
const [Hn, Fn] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['id', 'current', 'total', 'earned', 'winBackTimeLeft']),
            bonuses: e.array('bonuses'),
        }),
        ({ externalModel: e }) => ({ takeWinBackReward: e.createCallbackNoArgs('onTakeWinBackReward') }),
    ),
    qn = 'ClaimWinBack_f65a728',
    Vn = 'ClaimWinBack_claimButton_f4d9ca67',
    $n = 'ClaimWinBack_claimText_329621c1',
    zn = 'ClaimWinBack_timer_89673125';
const Un = i(function ({ className: i }) {
        const { model: o, controls: t } = Fn(),
            n = p.resolve('strings'),
            r = o.winBackTimeLeft.get();
        return e.jsxs('div', {
            className: s(qn, i),
            children: [
                e.jsx(_, {
                    theme: 'primary',
                    size: 'small',
                    autoAlignContent: !1,
                    className: Vn,
                    onClick: t.takeWinBackReward,
                    children: e.jsx('div', {
                        className: $n,
                        children: n.readOrEmpty(
                            'user_missions.hub.reward_progress.epic_quest_progress.collect_win_back',
                        ),
                    }),
                }),
                e.jsxs('div', {
                    className: zn,
                    children: [
                        n.readOrEmpty('user_missions.hub.reward_progress.epic_quest_progress.time_left'),
                        e.jsx(W, { start: r }),
                    ],
                }),
            ],
        });
    }),
    Qn = 'EpicQuestProgress_bg_22314285',
    Yn = 'EpicQuestProgress_70dbe9c2',
    Kn = 'EpicQuestProgress_header_b693c8b4',
    Xn = 'EpicQuestProgress_info_e415f6af',
    Jn = 'EpicQuestProgress_title_4037f217',
    Zn = 'EpicQuestProgress_text_2f226d2',
    er = 'EpicQuestProgress_rewardsMix_8b04a35e',
    sr = 'EpicQuestProgress_progress_9b81fedd',
    ir = 'EpicQuestProgress_progressBar_115e7a24',
    or = 'EpicQuestProgress_claimWinBack_b707ef06',
    tr = p.resolve('aliases');
const nr = i(function () {
        const { model: s } = Fn(),
            i = s.total.get(),
            o = s.current.get(),
            t = s.earned.get(),
            n = s.id.get(),
            r = p.resolve('strings'),
            a = w({ rewardSize: G.S24x24 }, { large: { rewardSize: G.Small } });
        return e.jsxs('div', {
            className: Yn,
            children: [
                e.jsx('div', { className: Qn }),
                e.jsxs('div', {
                    className: Kn,
                    children: [
                        e.jsxs('div', {
                            className: Xn,
                            children: [
                                e.jsx(f, {
                                    classMix: Jn,
                                    isTruncationAvailable: !0,
                                    isTooltipEnable: !0,
                                    text: r.readOrEmpty('user_missions.hub.reward_progress.epic_quest_progress.title'),
                                    targetId: tr.read((e) =>
                                        e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock(
                                            'resId',
                                        ),
                                    ),
                                }),
                                e.jsx(f, {
                                    classMix: Zn,
                                    isTruncationAvailable: !0,
                                    isTooltipEnable: !0,
                                    text: r.readOrEmpty(
                                        'user_missions.hub.reward_progress.epic_quest_progress.sub_title',
                                    ),
                                    targetId: tr.read((e) =>
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
                            resId: tr.read((e) =>
                                e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'),
                            ),
                            count: 5,
                            classMix: er,
                            isFixedBoxSize: !1,
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: sr,
                    children: [
                        e.jsx(es, { current: o, total: i }),
                        e.jsxs(is, {
                            value: o,
                            size: 'full',
                            maxValue: i,
                            className: ir,
                            children: [
                                e.jsx(N, { initValue: o - t, initMaxValue: i }),
                                s.winBackTimeLeft.get() > 0 && e.jsx(Un, { className: or }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    rr = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
        context: 'model.epicQuestProgress',
    };
function ar() {
    return e.jsx(Hn, { options: rr, children: e.jsx(nr, {}) });
}
const [lr, cr] = u()(
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
                i = y.model((e) => E(s.quests.get(), e)),
                o = y.model((e) => {
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
    dr = p
        .resolve('aliases')
        .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'));
var mr = ((e) => ((e.AVAILABLE = 'available'), (e.DISABLED = 'disabled'), (e.NO_OFFERS = 'no_offers'), e))(mr || {});
const ur = 'MainReward_c68d434f',
    _r = 'MainReward_base__withBattlePass_92334d39',
    gr = 'MainReward_hitBox_6b11fff9',
    pr = 'MainReward_claimButton_20c977ab',
    fr = 'MainReward_claimText_107d14cf',
    xr = 'MainReward_timer_234aa797',
    br = p.resolve('aliases'),
    hr = p.resolve('views');
const Cr = i(function () {
    const { model: i, controls: o } = cr(),
        t = i.timeLeftToClaim.get(),
        n = i.offersState.get(),
        r = p.resolve('strings'),
        a = ie({
            resId: br.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
            contentId: hr.read((e) => e.lobby.winback.tooltips.MainRewardTooltip('resId')),
        });
    return e.jsxs('div', {
        className: s(ur, i.isBattlePassActive.get() && _r),
        children: [
            e.jsx('div', { ...a, className: gr }),
            n != mr.NO_OFFERS &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(_, {
                            theme: 'primary',
                            size: 'medium',
                            disabled: n == mr.DISABLED,
                            className: pr,
                            onClick: o.takeAllRewards,
                            children: e.jsx('div', {
                                className: fr,
                                children: r.readOrEmpty(
                                    'user_missions.hub.reward_progress.win_back_quest_progress.claim_main',
                                ),
                            }),
                        }),
                        t > 0 &&
                            e.jsxs('div', {
                                className: xr,
                                children: [
                                    r.readOrEmpty(
                                        'user_missions.hub.reward_progress.win_back_quest_progress.time_left',
                                    ),
                                    e.jsx(W, { start: t }),
                                ],
                            }),
                    ],
                }),
        ],
    });
});
var Nr = ((e) => (
    (e.VEHICLE_FOR_GIFT = 'vehicleForGift'),
    (e.VEHICLE_DISCOUNT = 'vehicleDiscount'),
    (e.VEHICLE_FOR_RENT = 'vehicleForRent'),
    (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
    (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount'),
    e
))(Nr || {});
const vr = {
        base: 'WinBackReward_debcb7d5',
        icon: 'WinBackReward_icon_592ffdd7',
        base__vehicleForGift: 'WinBackReward_base__vehicleForGift_5fa23c6c',
        base__vehicleDiscount: 'WinBackReward_base__vehicleDiscount_5fa23c6c',
        level: 'WinBackReward_level_d832cd76',
        base__vehicleForRent: 'WinBackReward_base__vehicleForRent_5fa23c6c',
        discount: 'WinBackReward_discount_86c0d506',
    },
    Ir = (e) => {
        switch (e.name) {
            case Nr.VEHICLE_FOR_GIFT:
            case Nr.VEHICLE_DISCOUNT:
                return `vehicle.c_420x307.${le(e.vehicleName).toLowerCase()}`;
            case Nr.SELECTABLE_VEHICLE_FOR_GIFT:
            case Nr.SELECTABLE_VEHICLE_DISCOUNT:
                return `quests.bonuses.small.${e.name}`;
            case Nr.VEHICLE_FOR_RENT:
                return 'quests.bonuses.small.vehicles_rent';
        }
        return '';
    },
    yr = p.resolve('aliases'),
    Rr = p.resolve('views');
function Er({ reward: i, className: o }) {
    const t = i.name,
        n = Ir(i),
        r = ie({
            resId: yr.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
            contentId:
                Number(i.tooltipContentId) ||
                Rr.read((e) => e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
            args: { tooltipId: i.tooltipId },
        });
    return e.jsxs('div', {
        ...r,
        className: s(vr.base, vr[`base__${t}`], o),
        children: [
            e.jsx(C, { path: n, className: vr.icon }),
            (null == i ? void 0 : i.vehicleLvl) && e.jsx(ae, { value: i.vehicleLvl, className: vr.level }),
            t == Nr.VEHICLE_DISCOUNT &&
                e.jsx(C, { path: 'userMissions.hub.reward_progress.discount_colorize', className: vr.discount }),
        ],
    });
}
const jr = 'Quest_bd89fbc',
    Mr = 'Quest_info_2092d559',
    Or = new Set([
        Nr.VEHICLE_FOR_GIFT,
        Nr.VEHICLE_DISCOUNT,
        Nr.VEHICLE_FOR_RENT,
        Nr.SELECTABLE_VEHICLE_FOR_GIFT,
        Nr.SELECTABLE_VEHICLE_DISCOUNT,
    ]);
const kr = i(function ({ style: i, className: o, index: t }) {
        const { model: n } = cr(),
            r = n.computes.rewardsByIndex(t),
            a = w({ rewardSize: G.S24x24 }, { large: { rewardSize: G.Small } });
        return e.jsx('div', {
            className: s(jr, o),
            style: i,
            children: r.map((s, i) => {
                return Or.has(s.name)
                    ? e.jsx(Er, { reward: s }, `${i}_${s.name}`)
                    : e.jsx(
                          ce,
                          {
                              size: a.rewardSize,
                              ...((o = s),
                              (t = G.Small),
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
                                      resId: dr,
                                  },
                              }),
                              classNames: { info: Mr },
                          },
                          `${i}_${s.name}`,
                      );
                var o, t;
            }),
        });
    }),
    Sr = 'QuestStatus_questNumber_a4eb07b6',
    Pr = 'QuestStatus_claim_f060156f',
    wr = 'QuestStatus_claimText_bb723ab5',
    Tr = [Nr.SELECTABLE_VEHICLE_FOR_GIFT, Nr.SELECTABLE_VEHICLE_DISCOUNT];
const Br = i(function ({ index: i, questNumber: o, className: t, style: n }) {
    const { model: r, controls: a } = cr(),
        l = r.current.get(),
        c = r.computes.rewardsByIndex(i),
        d = r.offersState.get(),
        m = p.resolve('strings');
    return l < o
        ? e.jsx('div', { className: s(Sr, t), style: n, children: o })
        : c.some(({ name: e }) => Tr.includes(e))
          ? e.jsx(_, {
                theme: 'primary',
                size: 'small',
                disabled: d === mr.DISABLED,
                className: s(Pr, t),
                autoAlignContent: !1,
                style: n,
                onClick: () => a.takeReward(o.toString()),
                children: e.jsx('div', {
                    className: wr,
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
const Lr = i(function ({ classNames: s }) {
        const { model: i } = cr(),
            t = i.total.get(),
            n = i.quests.get();
        return e.jsx(e.Fragment, {
            children: de(n, ({ questNumber: i }, n) => {
                const r = { left: (i / t) * 100 + '%' };
                return e.jsxs(
                    o.Fragment,
                    {
                        children: [
                            e.jsx(Br, {
                                index: n,
                                questNumber: i,
                                className: null == s ? void 0 : s.questStatus,
                                style: r,
                            }),
                            e.jsx(kr, { index: n, className: null == s ? void 0 : s.quest, style: r }),
                        ],
                    },
                    `${n}_${i}`,
                );
            }),
        });
    }),
    Ar = 'WinBackProgress_bg_8a178cd6',
    Dr = 'WinBackProgress_7746c27',
    Wr = 'WinBackProgress_header_fddc8c5',
    Gr = 'WinBackProgress_title_58086071',
    Hr = 'WinBackProgress_progressCount_c10154a0',
    Fr = 'WinBackProgress_progressNumbers_74675f1a',
    qr = 'WinBackProgress_text_9329bcf6',
    Vr = 'WinBackProgress_content_cf4c626a',
    $r = 'WinBackProgress_scroll_15d14186',
    zr = 'WinBackProgress_scrollWrapper_a6ecf20',
    Ur = 'WinBackProgress_scrollWrapper__maskLeft_74cfad85',
    Qr = 'WinBackProgress_progress_b2a3589c',
    Yr = 'WinBackProgress_progressBar_7d519953',
    Kr = 'WinBackProgress_questStatus_5f3d0943',
    Xr = 'WinBackProgress_quest_f3ea405e',
    Jr = 'WinBackProgress_scrollBar_efbfbc78',
    Zr = 'WinBackProgress_mainReward_1460436e',
    ea = p.resolve('aliases');
const sa = i(function () {
        const { model: i } = cr(),
            { api: t } = me(),
            n = ue(),
            [r, a] = o.useState(!1),
            l = i.total.get(),
            c = i.current.get(),
            d = i.earned.get(),
            m = 160 * i.quests.get().length,
            u = p.resolve('strings'),
            _ = o.useCallback(() => {
                a(t.animationScroll.scrollPosition.get() > 0);
            }, [t]),
            g = _e(() => n.run(() => t.applyScroll(m * (c / l) - 160)));
        return (
            o.useEffect(() => {
                const e = t.events.on('start', _),
                    s = t.events.on('rest', _);
                return (
                    g(),
                    () => {
                        (e(), s());
                    }
                );
            }, [t.events, g, _]),
            e.jsxs('div', {
                className: Dr,
                children: [
                    e.jsx('div', { className: Ar }),
                    e.jsxs('div', {
                        className: Wr,
                        children: [
                            e.jsx(f, {
                                classMix: Gr,
                                isTruncationAvailable: !0,
                                text: u.readOrEmpty('user_missions.hub.reward_progress.win_back_quest_progress.title'),
                                targetId: ea.read((e) =>
                                    e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'),
                                ),
                                binding: {
                                    progres: e.jsx(es, {
                                        current: c,
                                        total: l,
                                        className: Hr,
                                        classNames: { current: Fr, total: Fr, slash: Fr },
                                    }),
                                },
                            }),
                            e.jsx(f, {
                                classMix: qr,
                                isTruncationAvailable: !0,
                                isTooltipEnable: !0,
                                text: u.readOrEmpty(
                                    'user_missions.hub.reward_progress.win_back_quest_progress.sub_title',
                                ),
                                targetId: ea.read((e) =>
                                    e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'),
                                ),
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: Vr,
                        children: [
                            e.jsxs('div', {
                                className: $r,
                                onWheel: t.handleMouseWheel,
                                children: [
                                    e.jsx(ge, {
                                        classNames: { wrapper: s(zr, r && Ur) },
                                        children: e.jsxs('div', {
                                            className: Qr,
                                            style: { width: `${m}rem` },
                                            children: [
                                                e.jsx(is, {
                                                    value: c,
                                                    size: 'full',
                                                    maxValue: l,
                                                    className: Yr,
                                                    children: e.jsx(N, { initValue: c - d, initMaxValue: l }),
                                                }),
                                                e.jsx(Lr, { classNames: { questStatus: Kr, quest: Xr } }),
                                            ],
                                        }),
                                    }),
                                    e.jsx(pe, { classNames: { base: Jr } }),
                                ],
                            }),
                            e.jsx('div', { className: Zr, children: e.jsx(Cr, {}) }),
                        ],
                    }),
                ],
            })
        );
    }),
    ia = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
        context: 'model.winBackProgress',
    };
function oa() {
    return e.jsx(lr, { options: ia, children: e.jsx(sa, {}) });
}
const ta = 'RewardProgressBlock_bf1cc1f3';
const na = i(function () {
        const { model: s } = Wn(),
            i = s.progressType.get();
        return e.jsx('div', {
            className: ta,
            children: (() => {
                switch (i) {
                    case Gn.EpicQuest:
                        return e.jsx(ar, {});
                    case Gn.WinBack:
                        return e.jsx(oa, {});
                    default:
                        return (console.error(`Unreachable branch in progress type: ${i}`), null);
                }
            })(),
        });
    }),
    ra = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
    };
function aa() {
    return e.jsx(Dn, { options: ra, children: e.jsx(fe, { children: e.jsx(na, {}) }) });
}
const la = 'DailyMissions_c4fedd54',
    ca = 'DailyMissions_title_6ad6e593',
    da = 'DailyMissions_content_22c598b5',
    ma = 'DailyMissions_missionsBlock_8747b838',
    ua = 'DailyMissions_rewardProgress_affadae3',
    _a = p.resolve('strings'),
    ga = i(function () {
        const { model: s } = co(),
            i = s.dailyMissionsBlockStatus.get();
        return e.jsxs('div', {
            className: la,
            children: [
                i.isEnabled &&
                    e.jsx('div', {
                        className: ca,
                        children: _a.readOrEmpty('user_missions.hub.basic_missions.daily.title'),
                    }),
                e.jsxs(xe, {
                    className: da,
                    border: 'contour',
                    children: [
                        e.jsx(pi, { content: e.jsx(Dt, {}), className: ma, ...i }),
                        e.jsx(pi, {
                            content: e.jsx(An, {}),
                            ...s.premiumDailyMissionsBlockStatus.get(),
                            className: ma,
                        }),
                        e.jsx(pi, { content: e.jsx(aa, {}), ...s.rewardProgressBlockStatus.get(), className: ua }),
                    ],
                }),
            ],
        });
    }),
    pa = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.MainView('resId')),
    };
function fa() {
    return e.jsx(lo, { options: pa, children: e.jsx(ga, {}) });
}
const [xa, ba] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['isDailySectionAvailable', 'isWeeklySectionAvailable', 'isPMSectionAvailable']),
        }),
        U,
    ),
    ha = 'BasicMissions_1ecd0546',
    Ca = 'BasicMissions_section_37456c06',
    Na = 'BasicMissions_rightCards_9fb1ec2c',
    va = p.resolve('aliases'),
    Ia = { rootId: va.read((e) => e.user_missions.hub.basicMissions.WeeklyMissions('resId')) },
    ya = { rootId: va.read((e) => e.user_missions.hub.basicMissions.PersonalMissions('resId')) },
    Ra = i(function () {
        const { model: s } = ba();
        return e.jsxs('div', {
            className: ha,
            children: [
                s.isDailySectionAvailable.get() && e.jsx('div', { className: Ca, children: e.jsx(fa, {}) }),
                s.isWeeklySectionAvailable.get() &&
                    e.jsx('div', {
                        className: Ca,
                        children: e.jsxs(xe, {
                            className: Na,
                            border: 'contour',
                            children: [
                                e.jsx(ms, {
                                    options: Ia,
                                    children: e.jsx(mi, { fullHeight: !s.isPMSectionAvailable.get() }),
                                }),
                                s.isPMSectionAvailable.get() && e.jsx(ve, { options: ya, children: e.jsx(ds, {}) }),
                            ],
                        }),
                    }),
            ],
        });
    }),
    Ea = { rootId: R.aliases.user_missions.hub.basicMissions.MainView('resId') };
function ja() {
    return e.jsx(xa, { options: Ea, children: e.jsx(Ra, {}) });
}
export { ja as default };
