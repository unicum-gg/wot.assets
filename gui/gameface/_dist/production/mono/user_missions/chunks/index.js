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
    V as M,
    W as O,
    m as k,
    X as S,
    Y as P,
    u as w,
    v as T,
    e as B,
    w as L,
    x as A,
    Z as D,
    z as W,
    p as G,
    _ as H,
    $ as F,
    a0 as q,
    a1 as V,
    a2 as $,
    a3 as z,
    n as U,
    a4 as Q,
    a5 as Y,
    a6 as K,
    a7 as X,
    a8 as J,
    a9 as Z,
    aa as ee,
    o as se,
    ab as ie,
    ac as oe,
    ad as te,
    D as ne,
    E as re,
    ae,
    af as le,
    ag as ce,
    ah as de,
    ai as me,
    aj as ue,
    ak as _e,
    al as ge,
    am as pe,
    an as fe,
    ao as xe,
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
        slash: 'ProgressCount_slash_ac34047e',
        slash__fullWidth: 'ProgressCount_slash__fullWidth_c807c2b',
        current: 'ProgressCount_current_115c5e6d',
        current__slashCenter: 'ProgressCount_current__slashCenter_6ce420af',
        total: 'ProgressCount_total_a0f9c7f2',
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
        return e.jsx(is, {
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
    ni = 'Mission_progressBarWrapper_5877296e',
    ri = i(function ({
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
                                children: e.jsx('div', {
                                    className: ni,
                                    children: e.jsx(Bs, {
                                        previousProgress: l,
                                        currentProgress: n,
                                        totalProgress: _,
                                        animationProps: N,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    ai = 'WeeklyMissions_b5c4ab0c',
    li = 'WeeklyMissions_base__fullHeight_1393a178',
    ci = 'WeeklyMissions_list_ef7648a3',
    di = 'WeeklyMissions_title_eeb41405',
    mi = 'WeeklyMissions_title__right_82a872e3',
    ui = i(function (i) {
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
            className: s(ai, i.fullHeight && li, i.className),
            disableMouse: !0,
            children: [
                e.jsx(g, { className: di, path: 'user_missions.hub.basic_missions.weekly.title' }),
                e.jsx(g, {
                    className: s(di, mi),
                    path: 'user_missions.hub.basic_missions.weekly.update_info',
                    params: {
                        weekDay: p
                            .resolve('strings')
                            .readOrEmpty(`menu.dateTime.weekDays.full.c_${t.updateWeekDay.get()}`),
                    },
                }),
                e.jsx('div', {
                    className: ci,
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
                            children: e.jsx(ri, { ...i }),
                        }),
                    ),
                }),
            ],
        });
    }),
    _i = {
        base: 'DisabledState_4abbc2ea',
        background: 'DisabledState_background_2be33fab',
        content: 'DisabledState_content_29454c97',
        icon: 'DisabledState_icon_58468d38',
        message: 'DisabledState_message_90090227',
    };
function gi({ message: s }) {
    return e.jsxs('div', {
        className: _i.base,
        children: [
            e.jsx('div', { className: _i.background }),
            e.jsxs('div', {
                className: _i.content,
                children: [e.jsx('div', { className: _i.icon }), e.jsx('div', { className: _i.message, children: s })],
            }),
        ],
    });
}
const pi = 'Block_content_7290bea6';
function fi({ content: s, isEnabled: i, disabilityReason: o, className: t }) {
    return e.jsx(v, {
        className: t,
        disableMouse: !0,
        children: i ? e.jsx('div', { className: pi, children: s }) : e.jsx(gi, { message: o }),
    });
}
const xi = o.createContext(null);
function bi() {
    const e = o.useContext(xi);
    return (F(null !== e, 'AnimationsContext is null'), e);
}
function hi() {
    return o.useContext(xi);
}
function Ci(e, s, i = e) {
    return e + '+' + s + '+' + i;
}
function Ni(e, s, ...i) {
    let o = e.current;
    if (0 == i.length) return !1;
    for (let t = 0; t < i.length - 1; t++) {
        const e = i[t];
        ((o[e] = o[e] ?? {}), (o = o[e]));
    }
    return ((o[i[i.length - 1]] = s), !0);
}
function vi(e, ...s) {
    const i = (e, o) => {
        if (o === s.length) return q(e);
        const t = s[o];
        return t in e && ((o === s.length - 1 || i(e[t], o + 1)) && delete e[t], q(e));
    };
    return i(e.current, 0);
}
function Ii(e, ...s) {
    let i = e.current;
    return s.reduce((e, s) => (null == e ? void 0 : e[s]), i);
}
function yi(e, ...s) {
    let i = e.current;
    return void 0 !== s.reduce((e, s) => (null == e ? void 0 : e[s]), i);
}
function Ri(e, s, i, o) {
    Object.entries(s).forEach(([s, t]) => {
        q(t)
            ? yi(i, e, s, e) && o(s, e)
            : Object.entries(t).forEach(([t, n]) => {
                  const r = t || e;
                  yi(i, e, s, r) && o(s, r, n);
              });
    });
}
function Ei({ storage: e, id: s, emitter: i, providerCfg: o }) {
    yi(e, s) || ji({ id: s, emitter: i, providerCfg: o });
}
function ji({ id: e, emitter: s, providerCfg: i }) {
    var o;
    const t = (null == i ? void 0 : i.triggerId) || e;
    (s.trigger(t, { id: e, ...(null == i ? void 0 : i.triggerParams) }),
        null == (o = null == i ? void 0 : i.triggerCallback) ||
            o.call(i, { id: e, ...(null == i ? void 0 : i.triggerParams) }));
}
function Mi({ sound: e, soundCfg: s }) {
    e && s && ('string' == typeof s ? e.play(s) : e.play(s.eventName, null == s ? void 0 : s.event));
}
function Oi({ children: s }) {
    const i = V(),
        t = o.useRef({}),
        n = o.useRef({}),
        r = o.useRef({}),
        a = $(),
        l = M(({ id: e, animName: s, elementId: i = e }) => yi(t, e, s, i)),
        c = M((e, s, i = e) => {
            vi(t, e, s, i);
        }),
        d = M(({ id: e, animName: s, config: i, elementId: o = e }) => (Ni(t, i, e, s, o), () => c(e, s, o))),
        m = M(({ id: e, animName: s, elementId: i = e, animCallParams: o, providerCfg: n, soundCfg: r }) => {
            const l = Ii(t, e, s, i);
            (l &&
                ((null == n ? void 0 : n.skip)
                    ? l.skip({ ...o, ...(null == n ? void 0 : n.animCallParams) })
                    : l.start({ ...o, ...(null == n ? void 0 : n.animCallParams) })),
                Mi({ sound: a, soundCfg: r }));
        }),
        u = M(({ id: e, animName: s, elementId: o = e, providerCfg: t = {} }) => {
            const r = i.on(Ci(e, s, o), () => {
                (vi(n, e, s, o), Ei({ storage: n, id: e, emitter: i, providerCfg: t }), r());
            });
            Ni(n, !0, e, s, o);
        }),
        _ = M(({ complexId: e, id: s, animName: o, elementId: t = s, providerCfg: n }) => {
            const a = i.on(Ci(s, o, t), () => {
                    (!(function ({
                        storage: e,
                        complexId: s,
                        groupId: i,
                        animName: o,
                        elementId: t,
                        emitter: n,
                        providerCfg: r,
                    }) {
                        let a = Ii(e, s, i, o);
                        a &&
                            (a.delete(t),
                            a.size || vi(e, s, i, o),
                            Ei({ storage: e, id: s, emitter: n, providerCfg: r }));
                    })({ storage: r, complexId: e, groupId: s, animName: o, elementId: t, emitter: i, providerCfg: n }),
                        a());
                }),
                l = Ii(r, e, s, o);
            l ? l.add(t) : Ni(r, new Set().add(t), e, s, o);
        }),
        g = M(({ groupId: e, groupCfg: s, providerCfg: o, soundCfg: r }) => {
            (vi(n, e),
                (null == o ? void 0 : o.skip) ||
                    (null == o ? void 0 : o.skipTrigger) ||
                    Ri(e, s, t, (s, i) => {
                        u({ id: e, animName: s, elementId: i, providerCfg: o });
                    }),
                Ri(e, s, t, (s, i, t) => {
                    m({ id: e, animName: s, elementId: i, animCallParams: t, providerCfg: o });
                }),
                Mi({ sound: a, soundCfg: r }),
                (null == o ? void 0 : o.skip) &&
                    !(null == o ? void 0 : o.skipTrigger) &&
                    ji({ id: e, emitter: i, providerCfg: o }));
        }),
        p = M(({ complexId: e, complexCfg: s, providerCfg: o, soundCfg: n }) => {
            if ((vi(r, e), !(null == o ? void 0 : o.skip) && !(null == o ? void 0 : o.skipTrigger)))
                for (let [i, r] of Object.entries(s))
                    Ri(i, r, t, (s, t) => {
                        _({ complexId: e, id: i, animName: s, elementId: t, providerCfg: o });
                    });
            for (let [i, r] of Object.entries(s))
                Ri(i, r, t, (e, s, t) => {
                    m({ id: i, animName: e, elementId: s, animCallParams: t, providerCfg: o });
                });
            (Mi({ sound: a, soundCfg: n }),
                (null == o ? void 0 : o.skip) &&
                    !(null == o ? void 0 : o.skipTrigger) &&
                    ji({ id: e, emitter: i, providerCfg: o }));
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
    return e.jsx(xi.Provider, { value: f, children: s });
}
const [ki, Si] = u()(
    ({ observableModel: e }) => {
        const s = {
                ...e.primitives(['timeToNextRerol', 'areAllMissionsCompleted', 'timeToMissionsUpdate']),
                missionsList: e.arrayClone('missionsList'),
                bonusMission: e.object('bonusMission'),
                bonusMissionBonuses: e.arrayClone('bonusMission.bonuses'),
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
function Pi({ registerAnimation: e, id: s, animName: i, elementId: t = s, config: n }) {
    o.useLayoutEffect(() => (null == e ? void 0 : e({ id: s, animName: i, elementId: t, config: n })), [s, i, n, t, e]);
}
const wi = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 1, config: { duration: 175 } }), await e({ opacity: 0, config: { duration: 800 } }));
        },
    },
    Ti = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 0.5 }), await e({ opacity: 0 }));
        },
        config: { duration: 400 },
    },
    Bi = (e) => {
        switch (e) {
            case Ai.GREEN:
                return wi;
            case Ai.GREEN_LENSE:
            case Ai.GREY_LENSE:
                return Ti;
            default:
                return wi;
        }
    };
const Li = { base: 'Glow_f9308f1a', icon: 'Glow_icon_d88e8512', icon__greyLense: 'Glow_icon__greyLense_4150ede3' },
    Ai = { GREEN: 'green', GREEN_LENSE: 'greenLense', GREY_LENSE: 'greyLense' },
    Di = { path: '', width: 250, height: 250 },
    Wi = {
        [Ai.GREEN]: { path: 'userMissions.hub.animations.glow_green_1200x800', width: 1200, height: 800 },
        [Ai.GREEN_LENSE]: { path: 'userMissions.hub.animations.glow_lens_green_250x250', width: 250, height: 250 },
        [Ai.GREY_LENSE]: { path: 'userMissions.hub.animations.glow_lens_grey_250x250', width: 250, height: 250 },
    },
    Gi = (e) => (Wi[e] ? Wi[e] : Di),
    Hi = 'glow';
const Fi = o.memo(function ({ id: i, elementId: n, className: r, glowType: a = Ai.GREEN }) {
    const l = hi(),
        m = M(() => (null == l ? void 0 : l.emitter.trigger(Ci(i, Hi, n), i, n))),
        { glowStyle: u, config: _ } = (function (e = Ai.GREY_LENSE, s) {
            const i = c(),
                n = Bi(e),
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
        Pi({
            id: i,
            elementId: n,
            registerAnimation: null == l ? void 0 : l.registerAnimation,
            animName: Hi,
            config: _,
        }),
        e.jsx(d.div, {
            style: u,
            className: s(Li.base, r),
            children: e.jsx(C, { ...Gi(a), className: s(Li.icon, Li[`icon__${a}`]) }),
        })
    );
});
function qi(e, s) {
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
const Vi = 'opacity';
const $i = o.memo(function ({ id: s, from: i, className: o, elementId: t, children: n, ...r }) {
        const a = hi(),
            l = M(() => (null == a ? void 0 : a.emitter.trigger(Ci(s, Vi, t), s, t))),
            { opacity: c, config: m } = qi(i, l);
        return (
            Pi({
                id: s,
                elementId: t,
                registerAnimation: null == a ? void 0 : a.registerAnimation,
                animName: Vi,
                config: m,
            }),
            n ? e.jsx(d.div, { style: { opacity: c }, className: o, ...r, children: n }) : null
        );
    }),
    zi = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 0.5, config: { duration: 180 } }), await e({ opacity: 0, config: { duration: 420 } }));
        },
    },
    Ui = { from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' }, config: { duration: 600 } },
    Qi = 2;
const Yi = 'Reflection_7a45ed9c',
    Ki = 'Reflection_bg_5a5ee806',
    Xi = 'Reflection_lines_container_58665661',
    Ji = 'Reflection_line_1_fc841d05',
    Zi = 'Reflection_line_2_10b982d',
    eo = 'Reflection_line_3_43ed32ee',
    so = 'reflection';
const io = o.memo(function ({ id: i, elementId: n, className: r }) {
        const { registerAnimation: a, emitter: l } = bi(),
            m = M(() => l.trigger(Ci(i, so, n), i, n)),
            {
                bgStyle: u,
                linesStyle: _,
                config: g,
            } = (function (e) {
                const s = c(),
                    i = c(),
                    n = o.useRef(0),
                    r = M(() => {
                        ((n.current += 1), n.current == Qi && ((n.current = 0), null == e || e()));
                    }),
                    a = M(() => {
                        (s.start({ ...zi, onRest: r, reset: !0 }), i.start({ ...Ui, onRest: r, reset: !0 }));
                    }),
                    l = M(() => {
                        (s.start({ to: { opacity: 0 }, immediate: !0 }), i.start({ ...Ui, immediate: !0 }));
                    }),
                    d = t({ ref: s, onRest: r, ...zi }),
                    m = t({ ref: i, onRest: r, ...Ui });
                return o.useMemo(() => ({ bgStyle: d, linesStyle: m, config: { start: a, skip: l } }), [d, m, l, a]);
            })(m);
        return (
            Pi({ id: i, elementId: n, registerAnimation: a, animName: so, config: g }),
            e.jsx('div', {
                className: s(Yi, r),
                children: e.jsx(d.div, {
                    style: u,
                    className: Ki,
                    children: e.jsxs(d.div, {
                        style: _,
                        className: Xi,
                        children: [
                            e.jsx('div', { className: Ji }),
                            e.jsx('div', { className: Zi }),
                            e.jsx('div', { className: eo }),
                        ],
                    }),
                }),
            })
        );
    }),
    oo = {
        from: { opacity: 0, transform: 'scale(0.2)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.2)' },
        initial: { opacity: 1, transform: 'scale(1)' },
    },
    to = 2;
const no = 'swap';
const ro = o.memo(function ({ init: s = !1, id: i, elementId: t, className: n, children: r }) {
        const l = hi(),
            c = M(() => (null == l ? void 0 : l.emitter.trigger(Ci(i, no, t), i, t))),
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
                        ((r.current += 1), r.current == to && (null == s || s(), (r.current = 0)));
                    }),
                    m = a(i, { ...oo, onRest: d, immediate: n.current });
                return o.useMemo(() => ({ transitions: m, config: { start: l, skip: c } }), [m, l, c]);
            })(s, c);
        return (
            Pi({
                id: i,
                elementId: t,
                registerAnimation: null == l ? void 0 : l.registerAnimation,
                animName: no,
                config: u,
            }),
            r ? m((s, i) => e.jsx(d.div, { style: s, className: n, children: r[Number(i)] })) : null
        );
    }),
    ao = 'delta',
    lo = {
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
    [co, mo] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['targetQuestId']),
            dailyMissionsBlockStatus: e.object('dailyMissionsBlockStatus'),
            premiumDailyMissionsBlockStatus: e.object('premiumDailyMissionsBlockStatus'),
            rewardProgressBlockStatus: e.object('rewardProgressBlockStatus'),
        }),
        U,
    ),
    uo = { duration: 100, easing: (e) => -(Math.cos(Math.PI * e) - 1) / 2 },
    _o = { from: { opacity: 0, y: -Q(10) }, to: { opacity: 1, y: 0 }, config: uo },
    go = { from: { opacity: 1, y: 0 }, to: { opacity: 0, y: Q(10) }, config: uo };
const po = 'slideInOut';
const fo = o.memo(function ({ id: s, elementId: i, className: n, children: r }) {
        var a, l;
        const [m, u] = o.useReducer((e) => e + 1, 0),
            _ = o.useRef(r),
            g = Ci(s, po, i),
            p = o.useRef(g),
            f = p.current == g,
            { registerAnimation: x, emitter: b } = bi(),
            h = M(() => {
                ((p.current = g), b.trigger(Ci(s, po, i), s, i));
            }),
            { styles: C, config: N } = (function (e) {
                const s = c(),
                    i = o.useCallback(() => (null == e ? void 0 : e()), [e]),
                    n = t({ ref: s, opacity: 1, y: 0, config: uo, onRest: i }),
                    r = M((e) => {
                        (null == e ? void 0 : e.leave)
                            ? s.start({ ...go, ...e, onRest: i, reset: !0 })
                            : s.start({ ..._o, ...e, onRest: i, reset: !0 });
                    }),
                    a = M((e) => {
                        (null == e ? void 0 : e.leave)
                            ? s.start({ ...go, ...e, onRest: i, delay: 0, reset: !0, immediate: !0 })
                            : s.start({ ..._o, ...e, onRest: i, delay: 0, reset: !0, immediate: !0 });
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
            Pi({ id: s, elementId: i, registerAnimation: x, animName: po, config: { start: v, skip: I } }),
            f
                ? e.jsx(d.div, { style: C, className: n, children: r })
                : o.isValidElement(_.current) &&
                    (null == (a = _.current.props) ? void 0 : a.id) &&
                    (null == (l = _.current.props) ? void 0 : l.id) != s
                  ? e.jsx(d.div, { style: C, className: n, children: o.cloneElement(_.current, { id: s }) })
                  : e.jsx(d.div, { style: C, className: n, children: _.current })
        );
    }),
    xo = 'LOCKED_BLOCK',
    bo = 'lockIcon',
    ho = 'lockText',
    Co = 'glowLock',
    No = 'baseCard',
    vo = 'lockBonusHook',
    Io = 'unlockBonusHook',
    yo = {
        slideOut: {
            [po]: {
                [lo.MISSION_ICON]: { leave: !0, delay: 100 },
                [lo.CONDITION]: { leave: !0, delay: 80 },
                [lo.PROGRESS]: { leave: !0, delay: 40 },
                [lo.REWARD]: { leave: !0, delay: 20 },
            },
        },
        slideIn: {
            [po]: {
                [lo.MISSION_ICON]: { delay: 40 },
                [lo.CONDITION]: { delay: 60 },
                [lo.PROGRESS]: { delay: 100 },
                [lo.REWARD]: { delay: 120 },
            },
        },
    };
function Ro(e, s) {
    o.useEffect(() => {
        e || s();
    });
}
function Eo(e, s, i) {
    const { totalProgress: o, isCompleted: t, id: n } = s;
    t && !i.isCompleted && 0 == o && (e[n] = Zo.missionComplete);
}
function jo(e, s, i) {
    const { totalProgress: o, animateCompletion: t, isCompleted: n, id: r } = i;
    t ? 0 == o && (e[r] = Zo.missionComplete) : n && (s[r] = Zo.missionComplete);
}
const Mo = {
        [Vi]: {
            [No]: { to: 0, reset: !0, immediate: !0 },
            [xo]: { to: 1, reset: !0, config: { duration: 300 } },
            [bo]: { to: 1, reset: !0, config: { duration: 300 } },
            [ho]: { to: 1, reset: !0, config: { duration: 300 } },
        },
    },
    Oo = 'lockBonusAnim',
    ko = 'bonusSlideOut',
    So = 'showLockComplete';
const Po = { from: 0, to: 360, loop: !1, pause: !1, reset: !0, immediate: !1, config: { duration: 400 } };
const wo = 'rotate';
const To = o.memo(function ({ id: s, className: i, elementId: t, props: n, children: r }) {
        const a = hi(),
            l = M(() => (null == a ? void 0 : a.emitter.trigger(Ci(s, wo, t), s, t))),
            { rotate: c, config: u } = (function (e) {
                const s = o.useRef(!1),
                    i = M((e, i) => {
                        s.current && i.stop().set(0);
                    }),
                    t = m(0, { ...Po, pause: !0, ...e, onStart: i }),
                    n = M((e) => {
                        ((s.current = !1), t.start({ ...Po, ...e, onStart: i }).then(U));
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
            Pi({
                id: s,
                animName: wo,
                elementId: t,
                registerAnimation: null == a ? void 0 : a.registerAnimation,
                config: { start: _, skip: g },
            }),
            r ? e.jsx(d.div, { style: { rotate: c }, className: i, children: r }) : null
        );
    }),
    Bo = {
        reRollSlideOut: { [wo]: { [lo.REROLL_COMPONENT_ICON]: { loop: !0 } }, ...yo.slideOut },
        reRollSlideIn: { [Vi]: { [lo.REROLL_COMPONENT]: { to: 0, config: { duration: 100 } } }, ...yo.slideIn },
        missionUnComplete: {
            [no]: { '': { state: !1 } },
            [Vi]: {
                [lo.CONDITION]: { to: 1 },
                [lo.PROGRESS]: { to: 1 },
                [lo.REROLL_COMPONENT]: { to: 1 },
                [lo.REWARD]: { to: 1 },
            },
        },
    },
    Lo = 'useMissionChangedHook';
function Ao(e) {
    const { startGroupAnimation: s, registerAnimation: i, emitter: o } = bi(),
        t = lo.REROLL_HOOK,
        n = Ci(`${e}_slideInComplete`, Lo, t),
        r = Ci(`${e}_slideOutComplete`, Lo, t);
    (X(o, n, () => {
        o.trigger(Ci(e, Lo, t), e, t);
    }),
        X(o, r, () => {
            (s({ groupId: e, groupCfg: Bo.missionUnComplete, providerCfg: { skip: !0, skipTrigger: !0 } }),
                setTimeout(() => {
                    s({ groupId: e, groupCfg: Bo.reRollSlideIn, providerCfg: { triggerId: n } });
                }, 400));
        }));
    const a = M(() => {
        s({
            groupId: e,
            groupCfg: Bo.reRollSlideOut,
            providerCfg: { triggerId: r },
            soundCfg: Ce.umg_hub_quest_reroll,
        });
    });
    Pi({ id: e, elementId: t, registerAnimation: i, animName: Lo, config: { start: a, skip: U } });
}
const Do = {
    missionChange: { [Lo]: { [lo.REROLL_HOOK]: {} } },
    hideReRollComponent: { [Vi]: { [lo.REROLL_COMPONENT]: { to: 0, config: { duration: 150 } } } },
    lockBonus: { [Oo]: { [vo]: {} } },
};
function Wo(e, s, i) {
    const { id: o, currentProgress: t } = s;
    return !!(o != i.id || (0 == t && i.currentProgress)) && ((e[o] = Do.missionChange), !0);
}
const Go = {
    showReRollTimer: {
        [Vi]: {
            [lo.REROLL_COMPONENT_TIMER]: { to: 1, immediate: !0 },
            [lo.REROLL_COMPONENT_BUTTON]: { to: 0, immediate: !0 },
            [lo.REROLL_COMPONENT]: { to: 1, delay: 400, config: { duration: 200 } },
        },
        [wo]: { [lo.REROLL_COMPONENT_ICON]: { immediate: !0, pause: !0, loop: !1 } },
    },
    stopRotation: { [wo]: { [lo.REROLL_COMPONENT_ICON]: {} } },
    showReRollButton: {
        [Vi]: {
            [lo.REROLL_COMPONENT_TIMER]: { to: 0, immediate: !0 },
            [lo.REROLL_COMPONENT_BUTTON]: { to: 1, immediate: !0 },
            [lo.REROLL_COMPONENT]: { to: 1, delay: 400, config: { duration: 200 } },
        },
    },
};
function Ho(e, s) {
    return e.reduce((e, { id: i, isCompleted: o }) => (o || (e[i] = s), e), {});
}
const Fo = 'UnlockVideo_2a17fce0',
    qo = 'UnlockVideo_video_c11372d2',
    Vo = p.resolve('videos'),
    $o = 'unlockVideo';
const zo = o.memo(function ({ id: i, elementId: t, className: n }) {
        const r = o.useRef(null),
            a = hi(),
            { opacity: l, config: c } = qi(0),
            m = M(() => {
                r.current && (r.current.play(), c.start({ to: 1 }));
            }),
            u = M(U),
            _ = o.useCallback(() => {
                null == a || a.emitter.trigger(Ci(i, $o, t), i, t);
            }, [null == a ? void 0 : a.emitter, t, i]);
        Pi({
            id: i,
            elementId: t,
            registerAnimation: null == a ? void 0 : a.registerAnimation,
            animName: $o,
            config: { start: m, skip: u },
        });
        const g = Vo.readOrEmpty('user_missions.unlock_72x72');
        return e.jsx(d.div, {
            style: { opacity: l },
            className: s(Fo, n),
            children: e.jsx(J, { src: g, ref: r, onEnded: _, className: qo }),
        });
    }),
    Uo = {
        hideLockState: {
            [Vi]: {
                [bo]: { to: 0, reset: !0, config: { duration: 300 } },
                [ho]: { to: 0, reset: !0, config: { duration: 300 } },
            },
            [so]: {},
            [Hi]: { [Co]: {} },
            [$o]: {},
        },
    },
    Qo = { [Vi]: { [No]: { to: 1, reset: !0, immediate: !0 } }, ...yo.slideIn },
    Yo = 'unlockBonusAnim',
    Ko = 'hideLockEvent',
    Xo = 'showBonusQuestComplete';
const Jo = {
        MISSION_COMPLETE: 'missionComplete',
        RE_ROLL: 'reRoll',
        HIDE_REROLL_COMPONENT: 'hideReRollComponent',
        SHOW_REROLL_COMPONENT: 'showReRollComponent',
    },
    Zo = {
        missionComplete: {
            [no]: { '': { state: !0 } },
            [Hi]: {},
            [so]: {},
            [Vi]: {
                [lo.CONDITION]: { to: 0.5 },
                [lo.PROGRESS]: { to: 0.5 },
                [lo.REROLL_COMPONENT]: { to: 0, config: { duration: 300 } },
                [lo.REWARD]: { to: 0.5, delay: 200 },
            },
        },
    };
function et() {
    const { startAnimation: e, startComplexAnimation: s, checkRegisteredInStorage: i, emitter: t } = bi(),
        { model: n } = mo(),
        { model: r } = Si(),
        a = r.missionsList.get(),
        l = I(r.bonusMission.get()),
        c = r.timeToNextRerol.get(),
        d = Z();
    (!(function ({ missions: e, bonusMission: s }) {
        const { startComplexAnimation: i } = bi();
        K(() => {
            const o = {},
                t = {};
            (e.forEach((e) => {
                jo(o, t, e);
            }),
                jo(o, t, s),
                q(t) ||
                    i({ complexId: Jo.MISSION_COMPLETE, complexCfg: t, providerCfg: { skip: !0, skipTrigger: !0 } }),
                q(o) || i({ complexId: Jo.MISSION_COMPLETE, complexCfg: o, soundCfg: Ce.umg_hub_quest_complete }));
        });
    })({ missions: a, bonusMission: l }),
        (function ({ missions: e, bonusMission: s, isFirstRender: i }) {
            const { startComplexAnimation: o } = bi(),
                t = Y(e),
                n = Y(s);
            Ro(i, () => {
                const i = {};
                (e.forEach((e, s) => {
                    const o = t[s];
                    Eo(i, e, o);
                }),
                    Eo(i, s, n),
                    q(i) || o({ complexId: Jo.MISSION_COMPLETE, complexCfg: i, soundCfg: Ce.umg_hub_quest_complete }));
            });
        })({ missions: a, bonusMission: l, isFirstRender: d }),
        (function ({ missions: e, bonusMission: s, timeToNextReRoll: i, isFirstRender: o }) {
            const { startComplexAnimation: t, startGroupAnimation: n } = bi(),
                r = Y(e),
                a = Y({ ...s });
            Ro(o, () => {
                const o = {},
                    l = {};
                (e.forEach((e, s) => {
                    const i = r[s];
                    Wo(o, e, i) || (l[e.id] = Do.hideReRollComponent);
                }),
                    s.isAvailable && Wo(o, s, a),
                    !s.isAvailable && a.isAvailable && n({ groupId: s.id, groupCfg: Do.lockBonus }),
                    q(o) ||
                        (i > 0 && t({ complexId: Jo.HIDE_REROLL_COMPONENT, complexCfg: l }),
                        t({ complexId: Jo.RE_ROLL, complexCfg: o })));
            });
        })({ missions: a, bonusMission: l, timeToNextReRoll: c, isFirstRender: d }),
        (function ({ missions: e, timeToNextReRoll: s, isFirstRender: i }) {
            const { startComplexAnimation: o, emitter: t } = bi(),
                n = Y(s);
            (Ro(i, () => {
                if (0 == s && n > 0) {
                    const s = Ho(e, Go.showReRollButton);
                    o({
                        complexId: Jo.SHOW_REROLL_COMPONENT,
                        complexCfg: s,
                        providerCfg: { skip: !0, skipTrigger: !0 },
                    });
                }
            }),
                X(t, Jo.RE_ROLL, () => {
                    if (0 == s) {
                        const s = Ho(e, Go.stopRotation),
                            i = Ho(e, Go.showReRollButton);
                        return (
                            o({
                                complexId: Jo.SHOW_REROLL_COMPONENT,
                                complexCfg: s,
                                providerCfg: { skip: !0, skipTrigger: !0 },
                            }),
                            void o({ complexId: Jo.SHOW_REROLL_COMPONENT, complexCfg: i })
                        );
                    }
                    const i = Ho(e, Go.showReRollTimer);
                    o({ complexId: Jo.SHOW_REROLL_COMPONENT, complexCfg: i });
                }));
        })({ missions: a, timeToNextReRoll: c, isFirstRender: d }));
    const m = o.useCallback(() => {
        if (l.isCompleted) return;
        a.every(({ isCompleted: e }) => e) && e({ id: l.id, animName: Yo, elementId: Io });
    }, [l.isCompleted, l.id, a, e]);
    (X(t, ao, (e) => {
        const i = r.computes.missionById(e);
        (null == i ? void 0 : i.isCompleted) &&
            (null == i ? void 0 : i.currentProgress) == (null == i ? void 0 : i.totalProgress) &&
            s({
                complexId: Jo.MISSION_COMPLETE,
                complexCfg: { [e]: Zo.missionComplete },
                soundCfg: Ce.umg_hub_quest_complete,
            });
    }),
        X(t, Jo.MISSION_COMPLETE, () => {
            m();
        }));
    const u = n.targetQuestId.get(),
        _ = Y(u);
    o.useEffect(() => {
        u && _ != u && i({ id: u, animName: so }) && e({ id: u, animName: so, soundCfg: Ce.umg_hub_highlight });
    }, [i, _, e, u]);
}
const st = o.memo(function ({ id: s, currentProgress: i, totalProgress: t, earned: n }) {
        const r = hi(),
            { play: a } = j(),
            l = M(() => (null == r ? void 0 : r.emitter.trigger(ao, s))),
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
    it = 'premiumMissionUnlockComplete';
const ot = o.memo(function ({ id: s, currentProgress: i, totalProgress: t, earned: n, isPaused: r }) {
        const a = bi(),
            [l, c] = o.useState(!r);
        return (
            X(a.emitter, it, (e) => {
                s === (null == e ? void 0 : e.id) && c(!0);
            }),
            e.jsx(st, { id: s, currentProgress: l ? i : i - n, totalProgress: t, earned: n })
        );
    }),
    tt = {
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
function nt({
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
            className: s(tt.base, t),
            children: [
                e.jsx(Fi, { id: u }),
                e.jsxs('div', {
                    className: tt.topContent,
                    children: [
                        e.jsx(fo, {
                            id: u,
                            elementId: lo.MISSION_ICON,
                            className: tt.iconPosition,
                            children: e.jsxs(ro, {
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
                                                className: s(tt.icon, tt.icon__quest, null == n ? void 0 : n.icon),
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
                                        className: tt.icon,
                                    }),
                                ],
                            }),
                        }),
                        e.jsx('div', { className: tt.sizeBoxTemp }),
                        e.jsx($i, {
                            id: u,
                            elementId: lo.CONDITION,
                            from: 0.9,
                            children: e.jsx(fo, {
                                id: u,
                                elementId: lo.CONDITION,
                                children: e.jsx(f, {
                                    text: se(i.description),
                                    justifyContent: x.Center,
                                    classMix: s(tt.condition, null == n ? void 0 : n.condition),
                                    isTooltipEnable: !0,
                                    isTruncationAvailable: !0,
                                    targetId: a,
                                }),
                            }),
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: tt.bottomContent,
                    children: [
                        e.jsx($i, {
                            id: u,
                            elementId: lo.PROGRESS,
                            from: 1,
                            children: e.jsx(fo, {
                                id: u,
                                elementId: lo.PROGRESS,
                                className: tt.progress,
                                children:
                                    p &&
                                    (r
                                        ? e.jsx(ot, {
                                              id: u,
                                              currentProgress: i.currentProgress,
                                              totalProgress: i.totalProgress,
                                              earned: i.earned,
                                              isPaused: l,
                                          })
                                        : e.jsx(st, {
                                              id: u,
                                              currentProgress: i.currentProgress,
                                              totalProgress: i.totalProgress,
                                              earned: i.earned,
                                          })),
                            }),
                        }),
                        e.jsx($i, {
                            id: u,
                            elementId: lo.REWARD,
                            from: 1,
                            className: s(tt.rewardsContainer, null == n ? void 0 : n.rewards),
                            children: e.jsx(fo, {
                                id: u,
                                elementId: lo.REWARD,
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
                                        rewardItemClassMix: tt.rewardItem,
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
const rt = 'DailyBonusMissionCard_cardBlock_cc29aa9d',
    at = 'DailyBonusMissionCard_7d966ce1',
    lt = 'DailyBonusMissionCard_cardBlock__disabled_6a0da54e',
    ct = 'DailyBonusMissionCard_lockBlock_ac1dd103',
    dt = 'DailyBonusMissionCard_lockContent_19bd64b6',
    mt = 'DailyBonusMissionCard_lockIconBlock_cb535d36',
    ut = 'DailyBonusMissionCard_lockIcon_da4d31e0',
    _t = 'DailyBonusMissionCard_unlockVideo_86889f8c',
    gt = 'DailyBonusMissionCard_lockMessage_662cb362',
    pt = 'DailyBonusMissionCard_timer_f1d1a15a',
    ft = p.resolve('aliases'),
    xt = p.resolve('strings'),
    bt = new Map([
        [!0, 1],
        [!1, 0],
    ]);
function ht({ data: i, isAnyCompleteAnimation: o, timeToMissionsUpdate: t }) {
    const { id: n, isAvailable: r } = i,
        a = !r || o;
    (!(function (e, s) {
        const { startGroupAnimation: i, registerAnimation: o, emitter: t } = bi();
        (X(t, So, () => {
            t.trigger(Ci(e, Oo, s), e, s);
        }),
            X(t, ko, () => {
                i({ groupId: e, groupCfg: Mo, providerCfg: { triggerId: So } });
            }));
        const n = M(() => {
                i({ groupId: e, groupCfg: yo.slideOut, providerCfg: { triggerId: ko } });
            }),
            r = M(() => {
                i({ groupId: e, groupCfg: yo.slideOut, providerCfg: { skip: !0, triggerId: ko } });
            });
        Pi({ id: e, elementId: s, registerAnimation: o, animName: Oo, config: { start: n, skip: r } });
    })(n, vo),
        (function (e, s) {
            const { startGroupAnimation: i, registerAnimation: o, emitter: t } = bi();
            (X(t, Xo, () => {
                t.trigger(Ci(e, Yo, s), e, s);
            }),
                X(t, Ko, () => {
                    i({ groupId: e, groupCfg: Qo, providerCfg: { triggerId: Xo } });
                }));
            const n = M(() => {
                    (i({ groupId: e, groupCfg: yo.slideOut, providerCfg: { skip: !0, skipTrigger: !0 } }),
                        i({
                            groupId: e,
                            groupCfg: Uo.hideLockState,
                            providerCfg: { triggerId: Ko },
                            soundCfg: Ce.umg_hub_unlock_bonus,
                        }));
                }),
                r = M(() => {
                    i({
                        groupId: e,
                        groupCfg: { ...yo.slideOut, ...Uo.hideLockState },
                        providerCfg: { skip: !0, skipTrigger: !0 },
                    });
                });
            Pi({ id: e, elementId: s, registerAnimation: o, animName: Yo, config: { start: n, skip: r } });
        })(n, Io),
        Ao(n));
    const l = h({ body: xt.readOrEmpty('user_missions.hub.basic_missions.daily.bonus_daily_missions_timer.tooltip') });
    return e.jsxs('div', {
        className: at,
        children: [
            e.jsxs($i, {
                id: n,
                elementId: No,
                className: s(rt, a && lt),
                from: bt.get(!a),
                children: [
                    e.jsx(nt, {
                        data: { ...i, id: n },
                        resId: ft.read((e) =>
                            e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId'),
                        ),
                        iconSeverityLog: i.isAvailable ? 'warn' : 'silent',
                    }),
                    !i.isCompleted &&
                        t > 0 &&
                        e.jsx('div', { className: pt, ...l, children: e.jsx(W, { start: t, size: W.size.x24x24 }) }),
                ],
            }),
            e.jsxs($i, {
                id: n,
                elementId: xo,
                className: ct,
                from: bt.get(a),
                children: [
                    e.jsx(Fi, { id: n, elementId: Co, glowType: Ai.GREY_LENSE }),
                    e.jsxs('div', {
                        className: dt,
                        children: [
                            e.jsxs('div', {
                                className: mt,
                                children: [
                                    e.jsx($i, {
                                        id: n,
                                        elementId: bo,
                                        from: 1,
                                        children: e.jsx('div', { className: ut }),
                                    }),
                                    e.jsx(zo, { id: n, className: _t }),
                                ],
                            }),
                            e.jsx($i, {
                                id: n,
                                elementId: ho,
                                from: 1,
                                children: e.jsx(g, {
                                    path: 'user_missions.hub.basic_missions.daily.bonus_daily_missions_lock_info',
                                    className: gt,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(io, { id: n }),
        ],
    });
}
const Ct = {
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
    Nt = 'Reroll button',
    vt = p.resolve('aliases'),
    It = p.resolve('views'),
    yt = p.resolve('strings'),
    Rt = vt.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId')),
    Et = It.read((e) => e.mono.user_missions.tooltips.daily_reroll_tooltip('resId'));
function jt({ id: i, isCompleted: o, onClick: t, className: n, timeToNextReroll: r }) {
    const a = j(),
        l = ie({ resId: Rt, contentId: Et, disabled: o }),
        c = !o && 0 === r,
        d = r > 0;
    return e.jsxs($i, {
        id: i,
        elementId: lo.REROLL_COMPONENT,
        from: o ? 0 : 1,
        ...l,
        className: s(Ct.base, c && Ct.base__active, n),
        onClick: c ? t : void 0,
        children: [
            e.jsx($i, {
                from: d ? 1 : 0,
                id: i,
                elementId: lo.REROLL_COMPONENT_TIMER,
                className: Ct.timerAnim,
                children: e.jsx(W, {
                    start: r,
                    format: W.format.superCompact,
                    size: W.size.x24x24,
                    className: Ct.timer,
                }),
            }),
            e.jsxs($i, {
                from: d ? 0 : 1,
                id: i,
                onMouseEnter: () => {
                    a.play('mouse-enter', { target: Nt });
                },
                elementId: lo.REROLL_COMPONENT_BUTTON,
                className: s(Ct.buttonAnim, d && Ct.buttonAnim__hided),
                children: [
                    e.jsx('div', {
                        className: Ct.title,
                        children: yt.readOrEmpty('user_missions.hub.basic_missions.daily.reroll_button'),
                    }),
                    e.jsx(To, {
                        id: i,
                        elementId: lo.REROLL_COMPONENT_ICON,
                        className: Ct.iconAnimation,
                        children: e.jsx('div', { className: Ct.icon }),
                    }),
                ],
            }),
        ],
    });
}
const Mt = 'DailyMissionCard_dbc24668',
    Ot = 'DailyMissionCard_reroll_fd5c6ea8',
    kt = p.resolve('aliases');
function St({ data: s, timeToNextReroll: i, onReroll: o }) {
    const { id: t, isCompleted: n } = s;
    return (
        Ao(t),
        e.jsxs('div', {
            className: Mt,
            children: [
                e.jsx(nt, {
                    data: s,
                    resId: kt.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId')),
                }),
                e.jsx(io, { id: s.id }),
                s.isRerollEnabled &&
                    e.jsx(jt, { id: t, isCompleted: n, onClick: () => o(s.id), timeToNextReroll: i, className: Ot }),
            ],
        })
    );
}
const Pt = 'DailyMissionsBlock_d8a9293c',
    wt = 'DailyMissionsBlock_allMissionsCompletedBlock_d019306a',
    Tt = 'DailyMissionsBlock_allMissionsCompletedMessage_20d9eaa9',
    Bt = 'DailyMissionsBlock_timer_c9dd266c',
    Lt = 'DailyMissionsBlock_separator_3d64a18',
    At = p.resolve('strings'),
    Dt = i(function () {
        const { model: s, controls: i } = Si(),
            o = s.timeToMissionsUpdate.get();
        et();
        const t = h({
            body: At.readOrEmpty('user_missions.hub.basic_missions.daily.new_daily_missions_timer.tooltip'),
        });
        return e.jsxs('div', {
            className: Pt,
            children: [
                s.areAllMissionsCompleted.get() &&
                    e.jsxs('div', {
                        className: wt,
                        ...t,
                        children: [
                            e.jsx('div', {
                                className: Tt,
                                children: At.readOrEmpty(
                                    'user_missions.hub.basic_missions.daily.new_daily_missions_timer.message',
                                ),
                            }),
                            e.jsx(W, { start: o, size: W.size.x16x16, className: Bt }),
                        ],
                    }),
                k(s.missionsList.get(), (o, t) =>
                    e.jsxs(
                        l.Fragment,
                        {
                            children: [
                                e.jsx(St, { data: o, onReroll: i.onReroll, timeToNextReroll: s.timeToNextRerol.get() }),
                                e.jsx('div', { className: Lt }),
                            ],
                        },
                        `dm_card_${t}`,
                    ),
                ),
                e.jsx(ht, {
                    data: { ...s.bonusMission.get(), bonuses: s.bonusMissionBonuses.get() },
                    isAnyCompleteAnimation: s.computes.isAnyCompleteAnimation(),
                    timeToMissionsUpdate: o,
                }),
            ],
        });
    }),
    Wt = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.DailyBlock('resId')),
    };
function Gt() {
    return e.jsx(ki, { options: Wt, children: e.jsx(Oi, { children: e.jsx(Dt, {}) }) });
}
const [Ht, Ft] = u()(
        ({ observableModel: e }) => {
            const s = { ...e.primitives(['isAvailable']), missionsList: e.arrayClone('missionsList') },
                i = y.model((e) => z(s.missionsList.get(), (s) => s.id == e));
            return { ...s, computes: { missionById: i } };
        },
        ({ externalModel: e }) => ({ onPurchasePremium: e.createCallbackNoArgs('onPurchasePremium') }),
    ),
    qt = {
        from: { opacity: 0, transform: 'translateX(-10%)' },
        to: async (e) => {
            (await e({ opacity: 0.2, transform: 'translateX(0%)', config: { duration: 300 } }),
                await e({ opacity: 0, transform: 'translateX(10%)', config: { duration: 300 } }));
        },
    },
    Vt = {
        from: { opacity: 0 },
        to: async (e) => {
            (await e({ opacity: 0.25, config: { duration: 200 } }), await e({ opacity: 0, config: { duration: 400 } }));
        },
    },
    $t = {
        from: { opacity: 0.25 },
        to: async (e) => {
            (await e({ opacity: 0.9, config: { duration: 200 } }),
                await e({ opacity: 0.25, config: { duration: 400 } }));
        },
    },
    zt = 4;
const Ut = 'Arrow_391ca11f',
    Qt = 'Arrow_iconBig_9a073166',
    Yt = 'Arrow_icon_bbabc0ab',
    Kt = 'Arrow_icon__left_cc9a053b',
    Xt = 'Arrow_icon__right_2cb4415d',
    Jt = 'arrow';
function Zt({ id: i }) {
    const { registerAnimation: n, emitter: a } = bi(),
        l = M(() => a.trigger(Ci(i, Jt), i)),
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
                    ((a.current += 1), a.current == zt && ((a.current = 0), null == e || e()));
                }),
                d = M((e) => {
                    const o = 0 | (null == e ? void 0 : e.delay);
                    (s.start({ ...qt, onRest: l, reset: !0, delay: o }),
                        i.start({ ...Vt, onRest: l, reset: !0, delay: o + 150 }),
                        n.start({ ...$t, onRest: l, reset: !0, delay: o + 250 }),
                        r.start({ ...Vt, onRest: l, reset: !0, delay: o + 350 }));
                }),
                m = t({ ref: s, onRest: l, ...qt }),
                u = t({ ref: i, onRest: l, ...Vt }),
                _ = t({ ref: n, onRest: l, ...$t }),
                g = t({ ref: r, onRest: l, ...Vt });
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
        Pi({ id: i, registerAnimation: n, animName: Jt, config: g }),
        e.jsxs('div', {
            className: Ut,
            children: [
                e.jsx(r.div, { style: d, className: Qt }),
                e.jsx(r.div, { style: m, className: s(Yt, Kt) }),
                e.jsx(r.div, { style: _, className: s(Yt, Xt) }),
                e.jsx(r.div, { style: u, className: Yt }),
            ],
        })
    );
}
const en = 'card',
    sn = 'lockIcon',
    on = 'glowLock',
    tn = 'unlockGlowShow',
    nn = 'unlockGlowHide',
    rn = 'PremiumDailyMissionsCard_606cad53',
    an = 'PremiumDailyMissionsCard_lockContainer_df076624',
    ln = 'PremiumDailyMissionsCard_card_b95d2566',
    cn = 'PremiumDailyMissionsCard_icon_77ecd434',
    dn = 'PremiumDailyMissionsCard_condition_5fa7ebd',
    mn = 'PremiumDailyMissionsCard_unlockVideo_416f470a',
    un = 'PremiumDailyMissionsCard_lockIcon_9bac6cb',
    _n = 'PremiumDailyMissionsCard_unlockGlowContainer_c6213bf6',
    gn = 'PremiumDailyMissionsCard_unlockGlow_6356a26d',
    pn = p.resolve('aliases'),
    fn = p.resolve('strings');
function xn({ data: s, isJustUnlocked: i }) {
    const o = h({ body: fn.readOrEmpty('user_missions.hub.basic_missions.daily.premium.locked_mission.tooltip') }),
        t = s.isLocked || i;
    return e.jsxs('div', {
        className: rn,
        children: [
            e.jsxs($i, {
                id: s.id,
                elementId: en,
                from: t ? 0.25 : 1,
                className: ln,
                children: [
                    e.jsx(nt, {
                        data: s,
                        isPremium: !0,
                        classNames: { icon: cn, condition: dn },
                        resId: pn.read((e) =>
                            e.user_missions.hub.basicMissions.DailyMissionsSection.PremiumBlock('resId'),
                        ),
                        isProgressAnimationPaused: t,
                    }),
                    e.jsx(io, { id: s.id }),
                ],
            }),
            t &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsxs('div', {
                            className: an,
                            ...(s.isLocked && o),
                            children: [
                                e.jsx(Fi, { id: s.id, elementId: on, glowType: Ai.GREY_LENSE }),
                                e.jsx($i, {
                                    id: s.id,
                                    elementId: sn,
                                    from: 1,
                                    children: e.jsx('div', { className: un }),
                                }),
                                e.jsx(zo, { id: s.id, className: mn }),
                            ],
                        }),
                        e.jsx($i, {
                            id: s.id,
                            elementId: nn,
                            from: 1,
                            className: _n,
                            children: e.jsx($i, {
                                id: s.id,
                                elementId: tn,
                                from: 0,
                                className: _n,
                                children: e.jsx('div', { className: gn }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function bn(e, s) {
    o.useEffect(() => {
        e && s();
    });
}
const hn = 1e3,
    Cn = {
        missionComplete: {
            [no]: { '': { state: !0 } },
            [Hi]: {},
            [Vi]: { [lo.CONDITION]: { to: 0.25 }, [lo.PROGRESS]: { to: 0.5 }, [lo.REWARD]: { to: 0.5, delay: 200 } },
            [Jt]: { '': { delay: 600 } },
        },
        missionUnlock: {
            [so]: {},
            [Hi]: { [on]: {} },
            [$o]: {},
            [Vi]: { [en]: { to: 1, delay: 1250 }, [sn]: { to: 0 }, [tn]: { to: 1 }, [nn]: { to: 0, delay: 400 } },
        },
    };
function Nn({ completeIdx: e, missions: s, startGroupAnimation: i }) {
    const o = s[e];
    if ((i({ groupId: o.id, groupCfg: Cn.missionComplete, soundCfg: Ce.umg_hub_quest_complete }), e < s.length - 1)) {
        const o = e + 1,
            t = s[o];
        setTimeout(() => {
            i({
                groupId: t.id,
                groupCfg: Cn.missionUnlock,
                providerCfg: { triggerId: it, triggerParams: { unlockedIdx: o } },
                soundCfg: Ce.umg_hub_unlock_premium,
            });
        }, hn);
    }
}
const vn = {
        MISSION_COMPLETE: 'premiumMissionComplete',
        MISSION_LOCKED: 'premiumMissionLocked',
        MISSION_UN_COMPLETE: 'premiumMissionUnComplete',
    },
    In = {
        missionUnComplete: {
            [no]: { '': { state: !1 } },
            [Vi]: {
                [lo.CONDITION]: { to: 0.9 },
                [lo.PROGRESS]: { to: 1 },
                [lo.REWARD]: { to: 1 },
                [en]: { to: 1 },
                [sn]: { to: 0 },
            },
        },
        missionLock: {
            [no]: { '': { state: !1 } },
            [Vi]: {
                [lo.CONDITION]: { to: 0.9 },
                [lo.PROGRESS]: { to: 1 },
                [lo.REWARD]: { to: 1 },
                [en]: { to: 0.25 },
                [sn]: { to: 1 },
            },
        },
    };
function yn() {
    const { startAnimation: e, checkRegisteredInStorage: s } = bi(),
        { model: i } = mo(),
        { model: t } = Ft(),
        n = I(t.missionsList.get()),
        r = Y(n),
        a = Z(),
        l = i.targetQuestId.get(),
        c = Y(l);
    (o.useEffect(() => {
        l && c != l && s({ id: l, animName: so }) && e({ id: l, animName: so, soundCfg: Ce.umg_hub_highlight });
    }, [s, c, e, l]),
        (function ({ missions: e }) {
            const { startGroupAnimation: s } = bi();
            K(() => {
                const i = e.findIndex((e) => e.isCompleted && e.animateCompletion);
                -1 !== i && Nn({ completeIdx: i, missions: e, startGroupAnimation: s });
            });
        })({ missions: n }),
        (function ({ isFirstRender: e, missions: s, prevMissions: i }) {
            const { startComplexAnimation: o } = bi();
            (K(() => {
                const e = {};
                (s.forEach((s) => {
                    s.isCompleted && !s.animateCompletion && (e[s.id] = Cn.missionComplete);
                }),
                    q(e) ||
                        o({
                            complexId: vn.MISSION_COMPLETE,
                            complexCfg: e,
                            providerCfg: { skip: !0, skipTrigger: !0 },
                        }));
            }),
                bn(!e, () => {
                    const e = {},
                        t = {};
                    (s.forEach((s, o) => {
                        const n = i[o];
                        s.isLocked && !n.isLocked
                            ? (e[s.id] = In.missionLock)
                            : !s.isCompleted && n.isCompleted && (t[s.id] = In.missionUnComplete);
                    }),
                        q(e) ||
                            o({
                                complexId: vn.MISSION_LOCKED,
                                complexCfg: e,
                                providerCfg: { skip: !0, skipTrigger: !0 },
                            }),
                        q(t) ||
                            o({
                                complexId: vn.MISSION_UN_COMPLETE,
                                complexCfg: t,
                                providerCfg: { skip: !0, skipTrigger: !0 },
                            }));
                }));
        })({ isFirstRender: a, missions: n, prevMissions: r }),
        (function ({ isFirstRender: e, missions: s, prevMissions: i }) {
            const { startGroupAnimation: o, emitter: t } = bi();
            (X(t, it, ({ unlockedIdx: e }) => {
                s[e].isCompleted && Nn({ completeIdx: e, missions: s, startGroupAnimation: o });
            }),
                bn(!e, () => {
                    const e = s.findIndex((e, s) => {
                        const o = i[s];
                        return e.isCompleted && !o.isCompleted;
                    });
                    -1 !== e && Nn({ completeIdx: e, missions: s, startGroupAnimation: o });
                }));
        })({ isFirstRender: a, missions: n, prevMissions: r }));
}
const Rn = 'PremiumDailyMissionsList_a02f9e79',
    En = i(function () {
        const { model: s } = Ft(),
            i = s.missionsList.get();
        return (
            yn(),
            e.jsx('div', {
                className: Rn,
                children: k(i, (s, o) => {
                    var t;
                    const n = (o > 0 && (null == (t = E(i, o - 1)) ? void 0 : t.animateCompletion)) || !1;
                    return e.jsxs(
                        l.Fragment,
                        {
                            children: [
                                e.jsx(xn, { data: s, isJustUnlocked: n }, `pdm_card_${s.id}`),
                                o < i.length - 1 && e.jsx(Zt, { id: s.id }),
                            ],
                        },
                        `pdm_card_${s.id}`,
                    );
                }),
            })
        );
    }),
    jn = 'PurchasePremiumState_bg_9f5578d2',
    Mn = 'PurchasePremiumState_6e377b64',
    On = 'PurchasePremiumState_icon_f474fb80',
    kn = 'PurchasePremiumState_container_c4d5c44e',
    Sn = 'PurchasePremiumState_title_d576f228',
    Pn = 'PurchasePremiumState_message_a8e12b7c',
    wn = 'PurchasePremiumState_button_4e9a2fc9',
    Tn = 'PurchasePremiumState_buttonTitle_2b5af5a0',
    Bn = p.resolve('strings');
function Ln() {
    const { controls: s } = Ft();
    return e.jsxs('div', {
        className: Mn,
        children: [
            e.jsx('div', { className: jn }),
            e.jsx('div', { className: On }),
            e.jsxs('div', {
                className: kn,
                children: [
                    e.jsx('div', {
                        className: Sn,
                        children: Bn.readOrEmpty('user_missions.hub.basic_missions.daily.purchase_premium.title'),
                    }),
                    e.jsx('div', {
                        className: Pn,
                        children: Bn.readOrEmpty('user_missions.hub.basic_missions.daily.purchase_premium.message'),
                    }),
                    e.jsx(_, {
                        theme: _.themes.primary,
                        size: _.sizes.small,
                        onClick: s.onPurchasePremium,
                        className: wn,
                        children: e.jsx('div', {
                            className: Tn,
                            children: Bn.readOrEmpty('user_missions.hub.basic_missions.daily.purchase_premium.button'),
                        }),
                    }),
                ],
            }),
        ],
    });
}
const An = i(function () {
        const { model: s } = Ft();
        return s.isAvailable.get() ? e.jsx(En, {}) : e.jsx(Ln, {});
    }),
    Dn = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.PremiumBlock('resId')),
    };
function Wn() {
    return e.jsx(Ht, { options: Dn, children: e.jsx(Oi, { children: e.jsx(An, {}) }) });
}
const [Gn, Hn] = u()(({ observableModel: e }) => e.primitives(['progressType']), U);
var Fn = ((e) => ((e.EpicQuest = 'epicQuest'), (e.WinBack = 'winBack'), (e.Disabled = 'disabled'), e))(Fn || {});
const [qn, Vn] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['id', 'current', 'total', 'earned', 'winBackTimeLeft']),
            bonuses: e.arrayClone('bonuses'),
        }),
        ({ externalModel: e }) => ({ takeWinBackReward: e.createCallbackNoArgs('onTakeWinBackReward') }),
    ),
    $n = 'ClaimWinBack_f65a728',
    zn = 'ClaimWinBack_claimButton_f4d9ca67',
    Un = 'ClaimWinBack_claimText_329621c1',
    Qn = 'ClaimWinBack_timer_89673125';
const Yn = i(function ({ className: i }) {
        const { model: o, controls: t } = Vn(),
            n = p.resolve('strings'),
            r = o.winBackTimeLeft.get();
        return e.jsxs('div', {
            className: s($n, i),
            children: [
                e.jsx(_, {
                    theme: 'primary',
                    size: 'small',
                    autoAlignContent: !1,
                    className: zn,
                    onClick: t.takeWinBackReward,
                    children: e.jsx('div', {
                        className: Un,
                        children: n.readOrEmpty(
                            'user_missions.hub.reward_progress.epic_quest_progress.collect_win_back',
                        ),
                    }),
                }),
                e.jsxs('div', {
                    className: Qn,
                    children: [
                        n.readOrEmpty('user_missions.hub.reward_progress.epic_quest_progress.time_left'),
                        e.jsx(W, { start: r }),
                    ],
                }),
            ],
        });
    }),
    Kn = 'EpicQuestProgress_bg_22314285',
    Xn = 'EpicQuestProgress_70dbe9c2',
    Jn = 'EpicQuestProgress_header_b693c8b4',
    Zn = 'EpicQuestProgress_info_e415f6af',
    er = 'EpicQuestProgress_title_4037f217',
    sr = 'EpicQuestProgress_text_2f226d2',
    ir = 'EpicQuestProgress_rewardsMix_8b04a35e',
    or = 'EpicQuestProgress_progress_9b81fedd',
    tr = 'EpicQuestProgress_progressBar_115e7a24',
    nr = 'EpicQuestProgress_claimWinBack_b707ef06',
    rr = p.resolve('aliases');
const ar = i(function () {
        const { model: s } = Vn(),
            i = s.total.get(),
            o = s.current.get(),
            t = s.earned.get(),
            n = s.id.get(),
            r = p.resolve('strings'),
            a = w({ rewardSize: G.S24x24 }, { large: { rewardSize: G.Small } });
        return e.jsxs('div', {
            className: Xn,
            children: [
                e.jsx('div', { className: Kn }),
                e.jsxs('div', {
                    className: Jn,
                    children: [
                        e.jsxs('div', {
                            className: Zn,
                            children: [
                                e.jsx(f, {
                                    classMix: er,
                                    isTruncationAvailable: !0,
                                    isTooltipEnable: !0,
                                    text: r.readOrEmpty('user_missions.hub.reward_progress.epic_quest_progress.title'),
                                    targetId: rr.read((e) =>
                                        e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock(
                                            'resId',
                                        ),
                                    ),
                                }),
                                e.jsx(f, {
                                    classMix: sr,
                                    isTruncationAvailable: !0,
                                    isTooltipEnable: !0,
                                    text: r.readOrEmpty(
                                        'user_missions.hub.reward_progress.epic_quest_progress.sub_title',
                                    ),
                                    targetId: rr.read((e) =>
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
                            resId: rr.read((e) =>
                                e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'),
                            ),
                            count: 5,
                            classMix: ir,
                            isFixedBoxSize: !1,
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: or,
                    children: [
                        e.jsx(es, { current: o, total: i }),
                        e.jsxs(is, {
                            value: o,
                            size: 'full',
                            maxValue: i,
                            className: tr,
                            children: [
                                e.jsx(N, { initValue: o - t, initMaxValue: i }),
                                s.winBackTimeLeft.get() > 0 && e.jsx(Yn, { className: nr }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    lr = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
        context: 'model.epicQuestProgress',
    };
function cr() {
    return e.jsx(qn, { options: lr, children: e.jsx(ar, {}) });
}
const [dr, mr] = u()(
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
    ur = p
        .resolve('aliases')
        .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'));
var _r = ((e) => ((e.AVAILABLE = 'available'), (e.DISABLED = 'disabled'), (e.NO_OFFERS = 'no_offers'), e))(_r || {});
const gr = 'MainReward_c68d434f',
    pr = 'MainReward_base__withBattlePass_92334d39',
    fr = 'MainReward_hitBox_6b11fff9',
    xr = 'MainReward_claimButton_20c977ab',
    br = 'MainReward_claimText_107d14cf',
    hr = 'MainReward_timer_234aa797',
    Cr = p.resolve('aliases'),
    Nr = p.resolve('views');
const vr = i(function () {
    const { model: i, controls: o } = mr(),
        t = i.timeLeftToClaim.get(),
        n = i.offersState.get(),
        r = p.resolve('strings'),
        a = ie({
            resId: Cr.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
            contentId: Nr.read((e) => e.lobby.winback.tooltips.MainRewardTooltip('resId')),
        });
    return e.jsxs('div', {
        className: s(gr, i.isBattlePassActive.get() && pr),
        children: [
            e.jsx('div', { ...a, className: fr }),
            n != _r.NO_OFFERS &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(_, {
                            theme: 'primary',
                            size: 'medium',
                            disabled: n == _r.DISABLED,
                            className: xr,
                            onClick: o.takeAllRewards,
                            children: e.jsx('div', {
                                className: br,
                                children: r.readOrEmpty(
                                    'user_missions.hub.reward_progress.win_back_quest_progress.claim_main',
                                ),
                            }),
                        }),
                        t > 0 &&
                            e.jsxs('div', {
                                className: hr,
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
var Ir = ((e) => (
    (e.VEHICLE_FOR_GIFT = 'vehicleForGift'),
    (e.VEHICLE_DISCOUNT = 'vehicleDiscount'),
    (e.VEHICLE_FOR_RENT = 'vehicleForRent'),
    (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
    (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount'),
    e
))(Ir || {});
const yr = {
        base: 'WinBackReward_debcb7d5',
        icon: 'WinBackReward_icon_592ffdd7',
        base__vehicleForGift: 'WinBackReward_base__vehicleForGift_5fa23c6c',
        base__vehicleDiscount: 'WinBackReward_base__vehicleDiscount_5fa23c6c',
        level: 'WinBackReward_level_d832cd76',
        base__vehicleForRent: 'WinBackReward_base__vehicleForRent_5fa23c6c',
        discount: 'WinBackReward_discount_86c0d506',
    },
    Rr = (e) => {
        switch (e.name) {
            case Ir.VEHICLE_FOR_GIFT:
            case Ir.VEHICLE_DISCOUNT:
                return `vehicle.c_420x307.${le(e.vehicleName).toLowerCase()}`;
            case Ir.SELECTABLE_VEHICLE_FOR_GIFT:
            case Ir.SELECTABLE_VEHICLE_DISCOUNT:
                return `quests.bonuses.small.${e.name}`;
            case Ir.VEHICLE_FOR_RENT:
                return 'quests.bonuses.small.vehicles_rent';
        }
        return '';
    },
    Er = p.resolve('aliases'),
    jr = p.resolve('views');
function Mr({ reward: i, className: o }) {
    const t = i.name,
        n = Rr(i),
        r = ie({
            resId: Er.read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
            contentId:
                Number(i.tooltipContentId) ||
                jr.read((e) => e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
            args: { tooltipId: i.tooltipId },
        });
    return e.jsxs('div', {
        ...r,
        className: s(yr.base, yr[`base__${t}`], o),
        children: [
            e.jsx(C, { path: n, className: yr.icon }),
            (null == i ? void 0 : i.vehicleLvl) && e.jsx(ae, { value: i.vehicleLvl, className: yr.level }),
            t == Ir.VEHICLE_DISCOUNT &&
                e.jsx(C, { path: 'userMissions.hub.reward_progress.discount_colorize', className: yr.discount }),
        ],
    });
}
const Or = 'Quest_bd89fbc',
    kr = 'Quest_info_2092d559',
    Sr = new Set([
        Ir.VEHICLE_FOR_GIFT,
        Ir.VEHICLE_DISCOUNT,
        Ir.VEHICLE_FOR_RENT,
        Ir.SELECTABLE_VEHICLE_FOR_GIFT,
        Ir.SELECTABLE_VEHICLE_DISCOUNT,
    ]);
const Pr = i(function ({ style: i, className: o, index: t }) {
        const { model: n } = mr(),
            r = n.computes.rewardsByIndex(t),
            a = w({ rewardSize: G.S24x24 }, { large: { rewardSize: G.Small } });
        return e.jsx('div', {
            className: s(Or, o),
            style: i,
            children: r.map((s, i) => {
                return Sr.has(s.name)
                    ? e.jsx(Mr, { reward: s }, `${i}_${s.name}`)
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
                                      resId: ur,
                                  },
                              }),
                              classNames: { info: kr },
                          },
                          `${i}_${s.name}`,
                      );
                var o, t;
            }),
        });
    }),
    wr = 'QuestStatus_questNumber_a4eb07b6',
    Tr = 'QuestStatus_claim_f060156f',
    Br = 'QuestStatus_claimText_bb723ab5',
    Lr = [Ir.SELECTABLE_VEHICLE_FOR_GIFT, Ir.SELECTABLE_VEHICLE_DISCOUNT];
const Ar = i(function ({ index: i, questNumber: o, className: t, style: n }) {
    const { model: r, controls: a } = mr(),
        l = r.current.get(),
        c = r.computes.rewardsByIndex(i),
        d = r.offersState.get(),
        m = p.resolve('strings');
    return l < o
        ? e.jsx('div', { className: s(wr, t), style: n, children: o })
        : c.some(({ name: e }) => Lr.includes(e))
          ? e.jsx(_, {
                theme: 'primary',
                size: 'small',
                disabled: d === _r.DISABLED,
                className: s(Tr, t),
                autoAlignContent: !1,
                style: n,
                onClick: () => a.takeReward(o.toString()),
                children: e.jsx('div', {
                    className: Br,
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
const Dr = i(function ({ classNames: s }) {
        const { model: i } = mr(),
            t = i.total.get(),
            n = i.quests.get();
        return e.jsx(e.Fragment, {
            children: de(n, ({ questNumber: i }, n) => {
                const r = { left: (i / t) * 100 + '%' };
                return e.jsxs(
                    o.Fragment,
                    {
                        children: [
                            e.jsx(Ar, {
                                index: n,
                                questNumber: i,
                                className: null == s ? void 0 : s.questStatus,
                                style: r,
                            }),
                            e.jsx(Pr, { index: n, className: null == s ? void 0 : s.quest, style: r }),
                        ],
                    },
                    `${n}_${i}`,
                );
            }),
        });
    }),
    Wr = 'WinBackProgress_bg_8a178cd6',
    Gr = 'WinBackProgress_7746c27',
    Hr = 'WinBackProgress_header_fddc8c5',
    Fr = 'WinBackProgress_title_58086071',
    qr = 'WinBackProgress_progressCount_c10154a0',
    Vr = 'WinBackProgress_progressNumbers_74675f1a',
    $r = 'WinBackProgress_text_9329bcf6',
    zr = 'WinBackProgress_content_cf4c626a',
    Ur = 'WinBackProgress_scroll_15d14186',
    Qr = 'WinBackProgress_scrollWrapper_a6ecf20',
    Yr = 'WinBackProgress_scrollWrapper__maskLeft_74cfad85',
    Kr = 'WinBackProgress_progress_b2a3589c',
    Xr = 'WinBackProgress_progressBar_7d519953',
    Jr = 'WinBackProgress_questStatus_5f3d0943',
    Zr = 'WinBackProgress_quest_f3ea405e',
    ea = 'WinBackProgress_scrollBar_efbfbc78',
    sa = 'WinBackProgress_mainReward_1460436e',
    ia = p.resolve('aliases');
const oa = i(function () {
        const { model: i } = mr(),
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
                className: Gr,
                children: [
                    e.jsx('div', { className: Wr }),
                    e.jsxs('div', {
                        className: Hr,
                        children: [
                            e.jsx(f, {
                                classMix: Fr,
                                isTruncationAvailable: !0,
                                text: u.readOrEmpty('user_missions.hub.reward_progress.win_back_quest_progress.title'),
                                targetId: ia.read((e) =>
                                    e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'),
                                ),
                                binding: {
                                    progres: e.jsx(es, {
                                        current: c,
                                        total: l,
                                        className: qr,
                                        classNames: { current: Vr, total: Vr, slash: Vr },
                                    }),
                                },
                            }),
                            e.jsx(f, {
                                classMix: $r,
                                isTruncationAvailable: !0,
                                isTooltipEnable: !0,
                                text: u.readOrEmpty(
                                    'user_missions.hub.reward_progress.win_back_quest_progress.sub_title',
                                ),
                                targetId: ia.read((e) =>
                                    e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId'),
                                ),
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: zr,
                        children: [
                            e.jsxs('div', {
                                className: Ur,
                                onWheel: t.handleMouseWheel,
                                children: [
                                    e.jsx(ge, {
                                        classNames: { wrapper: s(Qr, r && Yr) },
                                        children: e.jsxs('div', {
                                            className: Kr,
                                            style: { width: `${m}rem` },
                                            children: [
                                                e.jsx(is, {
                                                    value: c,
                                                    size: 'full',
                                                    maxValue: l,
                                                    className: Xr,
                                                    children: e.jsx(N, { initValue: c - d, initMaxValue: l }),
                                                }),
                                                e.jsx(Dr, { classNames: { questStatus: Jr, quest: Zr } }),
                                            ],
                                        }),
                                    }),
                                    e.jsx(pe, { classNames: { base: ea } }),
                                ],
                            }),
                            e.jsx('div', { className: sa, children: e.jsx(vr, {}) }),
                        ],
                    }),
                ],
            })
        );
    }),
    ta = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
        context: 'model.winBackProgress',
    };
function na() {
    return e.jsx(dr, { options: ta, children: e.jsx(oa, {}) });
}
const ra = 'RewardProgressBlock_bf1cc1f3';
const aa = i(function () {
        const { model: s } = Hn(),
            i = s.progressType.get();
        return e.jsx('div', {
            className: ra,
            children: (() => {
                switch (i) {
                    case Fn.EpicQuest:
                        return e.jsx(cr, {});
                    case Fn.WinBack:
                        return e.jsx(na, {});
                    default:
                        return (console.error(`Unreachable branch in progress type: ${i}`), null);
                }
            })(),
        });
    }),
    la = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.RewardProgressBlock('resId')),
    };
function ca() {
    return e.jsx(Gn, { options: la, children: e.jsx(fe, { children: e.jsx(aa, {}) }) });
}
const da = 'DailyMissions_c4fedd54',
    ma = 'DailyMissions_title_6ad6e593',
    ua = 'DailyMissions_content_22c598b5',
    _a = 'DailyMissions_missionsBlock_8747b838',
    ga = 'DailyMissions_rewardProgress_affadae3',
    pa = p.resolve('strings'),
    fa = i(function () {
        const { model: s } = mo(),
            i = s.dailyMissionsBlockStatus.get();
        return e.jsxs('div', {
            className: da,
            children: [
                i.isEnabled &&
                    e.jsx('div', {
                        className: ma,
                        children: pa.readOrEmpty('user_missions.hub.basic_missions.daily.title'),
                    }),
                e.jsxs(xe, {
                    className: ua,
                    border: 'contour',
                    children: [
                        e.jsx(fi, { content: e.jsx(Gt, {}), className: _a, ...i }),
                        e.jsx(fi, {
                            content: e.jsx(Wn, {}),
                            ...s.premiumDailyMissionsBlockStatus.get(),
                            className: _a,
                        }),
                        e.jsx(fi, { content: e.jsx(ca, {}), ...s.rewardProgressBlockStatus.get(), className: ga }),
                    ],
                }),
            ],
        });
    }),
    xa = {
        rootId: p
            .resolve('aliases')
            .read((e) => e.user_missions.hub.basicMissions.DailyMissionsSection.MainView('resId')),
    };
function ba() {
    return e.jsx(co, { options: xa, children: e.jsx(fa, {}) });
}
const [ha, Ca] = u()(
        ({ observableModel: e }) => ({
            ...e.primitives(['isDailySectionAvailable', 'isWeeklySectionAvailable', 'isPMSectionAvailable']),
        }),
        U,
    ),
    Na = 'BasicMissions_1ecd0546',
    va = 'BasicMissions_section_37456c06',
    Ia = 'BasicMissions_rightCards_9fb1ec2c',
    ya = p.resolve('aliases'),
    Ra = { rootId: ya.read((e) => e.user_missions.hub.basicMissions.WeeklyMissions('resId')) },
    Ea = { rootId: ya.read((e) => e.user_missions.hub.basicMissions.PersonalMissions('resId')) },
    ja = i(function () {
        const { model: s } = Ca();
        return e.jsxs('div', {
            className: Na,
            children: [
                s.isDailySectionAvailable.get() && e.jsx('div', { className: va, children: e.jsx(ba, {}) }),
                s.isWeeklySectionAvailable.get() &&
                    e.jsx('div', {
                        className: va,
                        children: e.jsxs(xe, {
                            className: Ia,
                            border: 'contour',
                            children: [
                                e.jsx(ms, {
                                    options: Ra,
                                    children: e.jsx(ui, { fullHeight: !s.isPMSectionAvailable.get() }),
                                }),
                                s.isPMSectionAvailable.get() && e.jsx(ve, { options: Ea, children: e.jsx(ds, {}) }),
                            ],
                        }),
                    }),
            ],
        });
    }),
    Ma = { rootId: R.aliases.user_missions.hub.basicMissions.MainView('resId') };
function Oa() {
    return e.jsx(ha, { options: Ma, children: e.jsx(ja, {}) });
}
export { Oa as default };
