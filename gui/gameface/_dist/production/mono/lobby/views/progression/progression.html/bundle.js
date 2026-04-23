import {
    o as e,
    g as t,
    $ as s,
    h as n,
    E as a,
    j as i,
    F as r,
    r as o,
    s as d,
    a0 as c,
    x as l,
    v as _,
    a1 as g,
    a2 as u,
} from '../../../chunks/vendor.js';
import {
    m,
    d as p,
    e as f,
    d2 as h,
    h as b,
    G as C,
    a9 as v,
    cE as w,
    d3 as x,
    a as I,
    c as N,
    g as P,
    N as E,
    u as T,
    d4 as j,
    F as A,
    cH as S,
    o as F,
    Q,
    U as L,
    aG as y,
    aK as k,
    J as D,
    cz as q,
    b7 as M,
    cf as O,
    d5 as $,
    d6 as z,
    d7 as B,
    aX as G,
    B as V,
    d8 as W,
    a8 as H,
    p as Y,
    a6 as U,
    cI as X,
    a5 as J,
    a7 as K,
} from '../../../chunks/lib.js';
import { c as Z, a as ee, g as te } from '../../../chunks/readResource.js';
import { F as se } from '../../../chunks/fun_random_progression_state.js';
var ne = ((e) => (
        (e.Inactive = 'inactive'),
        (e.Active = 'active'),
        (e.Detached = 'detached'),
        (e.Detaching = 'detaching'),
        (e.DetachingActive = 'detaching_active'),
        (e.Deactivating = 'deactivating'),
        (e.Activating = 'activating'),
        e
    ))(ne || {}),
    ae = ((e) => ((e.None = 'none'), (e.HidingGlow = 'hiding_glow'), (e.ShowingGlow = 'showing_glow'), e))(ae || {}),
    ie = ((e) => (
        (e.EvFepCounterChange = 'ev_fep_counter_change'),
        (e.EvFepTearOffCard = 'ev_fep_tear_off_card'),
        (e.EvFepCongratulate = 'ev_fep_congratulate'),
        (e.EvFepCardStartMove = 'ev_fep_card_start_move'),
        (e.EvFepCardStopMove = 'ev_fep_card_stop_move'),
        (e.EvFepCardChange = 'ev_fep_card_change'),
        (e.EvFepInfStepTransition = 'ev_fep_inf_step_transition'),
        (e.RtpcExtFepWheelRotation = 'RTPC_ext_fep_wheel_rotation'),
        e
    ))(ie || {}),
    re = ((e) => (
        (e[(e.Idle = 0)] = 'Idle'),
        (e[(e.Scrolling = 1)] = 'Scrolling'),
        (e[(e.Dragging = 2)] = 'Dragging'),
        (e[(e.InertialMovement = 3)] = 'InertialMovement'),
        (e[(e.FirstAnimation = 4)] = 'FirstAnimation'),
        (e[(e.Normalization = 5)] = 'Normalization'),
        (e[(e.OverflowNormalization = 6)] = 'OverflowNormalization'),
        (e[(e.ShowProgress = 7)] = 'ShowProgress'),
        (e[(e.FinalAnimation = 8)] = 'FinalAnimation'),
        (e[(e.Blocked = 9)] = 'Blocked'),
        e
    ))(re || {}),
    oe = ((e) => (
        (e[(e.Init = 0)] = 'Init'),
        (e[(e.Detaching = 1)] = 'Detaching'),
        (e[(e.Scroll = 2)] = 'Scroll'),
        (e[(e.Finish = 3)] = 'Finish'),
        e
    ))(oe || {}),
    de = ((e) => (
        (e[(e.RunCounter = 0)] = 'RunCounter'),
        (e[(e.Detach = 1)] = 'Detach'),
        (e[(e.HideGlow = 2)] = 'HideGlow'),
        (e[(e.DeactivateCurrent = 3)] = 'DeactivateCurrent'),
        (e[(e.ActivateNext = 4)] = 'ActivateNext'),
        (e[(e.ShowGlow = 5)] = 'ShowGlow'),
        (e[(e.Scroll = 6)] = 'Scroll'),
        (e[(e.FinishActivating = 7)] = 'FinishActivating'),
        (e[(e.Finish = 8)] = 'Finish'),
        e
    ))(de || {});
const ce = (e, t) =>
        m(e, (e) => ({
            name: e.name,
            image: b(e, t),
            value: e.value,
            special: h[e.overlayType],
            valueType: f(e.name),
            tooltipArgs: p({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
        })),
    le = {
        [se.DISABLED]: se.DISABLED,
        [se.ACTIVE_FINAL]: se.ACTIVE_FINAL,
        [se.ACTIVE_RESETTABLE]: se.ACTIVE_RESETTABLE,
        [se.ACTIVE_INFINITE_FINAL]: se.ACTIVE_FINAL,
        [se.ACTIVE_INFINITE_RESETTABLE]: se.ACTIVE_RESETTABLE,
        [se.COMPLETED_FINAL]: se.ACTIVE_FINAL,
        [se.COMPLETED_RESETTABLE]: se.ACTIVE_RESETTABLE,
    },
    _e = (e) => ({
        isActive: [se.ACTIVE_FINAL, se.ACTIVE_RESETTABLE].includes(e),
        isInfinite: [se.ACTIVE_INFINITE_FINAL, se.ACTIVE_INFINITE_RESETTABLE].includes(e),
        isCompleted: [se.COMPLETED_FINAL, se.COMPLETED_RESETTABLE].includes(e),
        isResettable: [se.ACTIVE_RESETTABLE, se.COMPLETED_RESETTABLE, se.ACTIVE_INFINITE_RESETTABLE].includes(e),
    }),
    ge = (e, t, s) => Math.min(s, Math.max(t, e)),
    ue = (e, t, s) => Math.min(t, Math.max(s, e)),
    me = () => {
        const s = { rotation: e.box(0), changeTime: e.box(new Date()), filled: e.box(!1) },
            n = t((e, t) => {
                (s.rotation.set(e), s.changeTime.set(t), s.filled.set(!0));
            }),
            a = t(() => {
                s.filled.set(!1);
            });
        return { ...s, setRotation: n, clear: a };
    },
    pe = (s, n) => {
        const a = (e) =>
                t((...t) => {
                    if (n.userActionsAllowed.get()) return e(...t);
                }),
            i = t((e) => {
                s.state.set(e);
            }),
            r = t(() => {
                (s.rotationStats.prev.clear(), s.rotationStats.last.setRotation(s.currentRotation.get(), new Date()));
            }),
            o = t((e) => {
                (s.rotationStats.prev.setRotation(
                    s.rotationStats.last.rotation.get(),
                    s.rotationStats.last.changeTime.get(),
                ),
                    s.rotationStats.last.setRotation(e, new Date()),
                    s.currentRotation.set(e));
            }),
            d = t((e) => {
                s.targetRotation.set(ue(e, n.minRotation.get(), n.maxRotation.get()));
            }),
            c = t(() => {
                if (s.progress.finalCard.get() !== s.progress.currentCard.get()) {
                    i(re.ShowProgress);
                    const e = -s.cardRotation.get() * s.progress.currentCard.get();
                    o(ue(e, n.minRotation.get(), n.maxRotation.get()));
                } else (x[de.RunCounter](), i(re.Idle));
            }),
            l = t((e) => {
                const t = (-s.cardRotation.get() * (e - 1)) / 2,
                    a = ue(t, n.minRotation.get(), n.maxRotation.get());
                s.currentRotation.get() === a
                    ? (g(!0), i(re.Blocked), C.sound(ie.EvFepCongratulate))
                    : (i(re.FinalAnimation), d(t));
            }),
            _ = t((t, a, r, l, _, u) => {
                if (
                    (s.cardsCount.set(t),
                    s.progress.currentCard.set(a),
                    s.progress.finalCard.set(r),
                    s.progress.state.cards.push(
                        ...v(t, (t) => {
                            return (
                                (s = ((e, t, s) =>
                                    s ? ne.Detached : e === t ? ne.Active : e > t ? ne.Detached : ne.Inactive)(
                                    a,
                                    t,
                                    u,
                                )),
                                (n = ae.None),
                                { state: e.box(s), animation: e.box(n) }
                            );
                            var s, n;
                        }),
                    ),
                    l)
                )
                    (o(-s.cardRotation.get() * n.maxRightCard.get()),
                        i(re.FirstAnimation),
                        d(-s.cardRotation.get() * a));
                else if (u) {
                    const e = (-s.cardRotation.get() * (t - 1)) / 2;
                    (o(e), d(e), g(!0), i(re.Blocked));
                } else {
                    const e = ge(a, n.minLeftCard.get(), n.maxRightCard.get());
                    (_ || o(-s.cardRotation.get() * e), d(s.currentRotation.get()), a !== r ? c() : x[de.RunCounter]());
                }
            }),
            g = t((e) => {
                s.assembled.set(e);
            }),
            u = a((e) => {
                const t = ue(
                    s.targetRotation.get() - (s.cardRotation.get() * e) / -2,
                    n.minRotation.get(),
                    n.maxRotation.get(),
                );
                return (i(re.Scrolling), d(t), s.targetRotation.get());
            }),
            m = a((e) => {
                s.dragging.speed.set(e);
            }),
            p = a((e) => {
                (i(re.Dragging), s.dragging.lastMousePosition.set(e), m(0), d(s.currentRotation.get()));
            }),
            f = a(() => {
                const { overflow: e } = n.overflow.get();
                (i(e ? re.OverflowNormalization : re.InertialMovement), s.dragging.lastMousePosition.set(0));
            }),
            h = a((e, t) => {
                if (s.state.get() !== re.Dragging) return;
                const { overflow: a } = n.overflow.get(),
                    i = (180 * Math.atan((t - s.dragging.lastMousePosition.get()) / e)) / Math.PI,
                    r = a && Math.max(1, a);
                (m(r ? i / r : i),
                    s.dragging.lastMousePosition.set(t),
                    s.targetRotation.set(s.targetRotation.get() + s.dragging.speed.get()));
            }),
            b = t((e, t) => {
                e >= 0 && e < s.progress.state.cards.length && s.progress.state.cards[e]?.state.set(t);
            }),
            w = t((e, t) => {
                e >= 0 && e <= s.progress.state.cards.length && s.progress.state.cards[e]?.animation.set(t);
            }),
            x = {
                [de.RunCounter]: t(() => {
                    s.progress.state.runCounter.set(!0);
                }),
                [de.Detach]: t(() => {
                    (b(s.progress.currentCard.get(), ne.DetachingActive), s.progress.animation.set(oe.Detaching));
                }),
                [de.HideGlow]: t(() => {
                    w(s.progress.currentCard.get(), ae.HidingGlow);
                }),
                [de.DeactivateCurrent]: t(() => {
                    b(s.progress.currentCard.get(), ne.Deactivating);
                }),
                [de.ActivateNext]: t(() => {
                    const e = s.progress.currentCard.get() + 1;
                    (b(e, ne.Activating), s.progress.currentCard.set(e));
                }),
                [de.ShowGlow]: t(() => {
                    w(s.progress.currentCard.get(), ae.ShowingGlow);
                }),
                [de.FinishActivating]: t(() => {
                    const e = s.progress.currentCard.get() - 1;
                    b(e, ne.Detached);
                }),
                [de.Scroll]: t(() => {
                    s.progress.animation.set(oe.Scroll);
                    const e = ue(
                        -s.cardRotation.get() * s.progress.currentCard.get(),
                        n.minRotation.get(),
                        n.maxRotation.get(),
                    );
                    d(e);
                }),
                [de.Finish]: t(() => {
                    (s.progress.finalCard.get() < s.cardsCount.get() && b(s.progress.finalCard.get(), ne.Active),
                        s.progress.animation.set(oe.Finish),
                        i(re.Idle));
                }),
            };
        return {
            initCardsFan: _,
            startRotation: r,
            scroll: u,
            runProgressionAnimation: c,
            runFinalAnimation: l,
            setAssembled: g,
            setState: i,
            setCurrentRotation: o,
            setTargetRotation: d,
            setDraggingSpeed: m,
            startDragging: p,
            stopDragging: f,
            drag: h,
            progress: x,
        };
    },
    fe = [re.FirstAnimation, re.ShowProgress, re.FinalAnimation, re.Blocked],
    he = [{ duration: 500, action: de.Scroll }],
    be = [{ action: de.FinishActivating }],
    Ce = [{ delay: 200, action: de.Finish }],
    ve = [{ duration: 300, action: de.ShowGlow }],
    we = [...he, { delay: 100, duration: 400, action: de.RunCounter }, { duration: 300, action: de.HideGlow }],
    xe = [
        { delay: 100, duration: 700, action: de.Detach },
        { delay: 300, action: de.DeactivateCurrent },
        { duration: 300, action: de.ActivateNext },
    ],
    Ie = {
        [re.Idle]: {},
        [re.Scrolling]: { duration: 400, easing: w.linear },
        [re.Dragging]: { duration: 400, easing: w.easeOutQuint },
        [re.InertialMovement]: { duration: 800, easing: w.linear },
        [re.FirstAnimation]: { duration: 1e4, easing: w.easeInOutQuint },
        [re.Normalization]: { duration: 1e3, easing: w.easeOutQuint },
        [re.OverflowNormalization]: { duration: 300, easing: w.easeOutQuint },
        [re.ShowProgress]: { duration: 500, easing: w.easeOutQuint },
        [re.FinalAnimation]: { duration: 2e3, easing: w.easeInOutQuint },
        [re.Blocked]: { duration: 0 },
    },
    Ne = (e) => {
        if ('object' != typeof e) return !1;
        const t = e;
        return (
            'string' == typeof t?.ordinary &&
            'string' == typeof t?.epic &&
            'string' == typeof t?.rare &&
            'string' == typeof t?.unusual &&
            'string' == typeof t?.legendary
        );
    },
    Pe = {
        pointsValueFontColor: '#e9e2bf',
        stagesFontColors: {
            ordinary: '#656565',
            unusual: '#606636',
            rare: '#556486',
            epic: '#826796',
            legendary: '#9a6f10',
        },
        rewardCounterFontColor: '#37362e',
        pointsTitleFontColors: {
            ordinary: '#656565',
            unusual: '#606636',
            rare: '#556486',
            epic: '#826796',
            legendary: '#9a6f10',
        },
    },
    [Re, Ee] = I()(
        ({ observableModel: t }) => {
            const a = {
                    root: t.object(),
                    stages: t.array('stages'),
                    state: t.object('state'),
                    quests: t.array('condition.conditions', []),
                    status: t.object('state.status'),
                    condition: t.primitives(
                        [
                            'currentPoints',
                            'prevPoints',
                            'maximumPoints',
                            'title',
                            'text',
                            'conditionIcon',
                            'statusTimer',
                        ],
                        'condition',
                    ),
                    infiniteCondition: t.object('infiniteCondition'),
                    infiniteQuests: t.array('infiniteCondition.conditions'),
                    infiniteStage: t.object('infiniteStage'),
                    stringifiedModeViewSettings: t.primitives(['modeViewSettings']),
                },
                i = n(
                    (e) => {
                        const t = P(a.quests.get(), e);
                        if (!t) throw new Error(`Unexpected quest index: ${e}`);
                        return { ...t };
                    },
                    { equals: N },
                ),
                r = n(
                    () => {
                        const e = P(a.infiniteQuests.get(), 0);
                        return e ? { ...e } : null;
                    },
                    { equals: N },
                ),
                o = n(
                    (e, t, s = !1) => {
                        const n = s ? a.infiniteStage.get() : P(a.stages.get(), e);
                        if (!n) throw new Error(`Unexpected card index: ${e}`);
                        const i = e + 1,
                            r = _.cardState(e);
                        return { ...n, rewards: ce(n.rewards, t), cardNumber: i, progressionState: r };
                    },
                    { equals: N },
                ),
                d = n(() => {
                    const e =
                        a.condition.currentPoints.get() === a.condition.maximumPoints.get() ? a.stages.get().length : 0;
                    return E(a.stages.get(), (e) => !e.isCompleted) || e;
                }),
                c = n(() => {
                    const e = P(a.stages.get(), 0);
                    if (e && e.requiredPoints > a.condition.prevPoints.get()) return 0;
                    const t = a.stages.get().length - 1;
                    return E(a.stages.get(), (e) => e.requiredPoints > a.condition.prevPoints.get()) || t;
                }),
                l = (({ cardRotation: t, displayCardsCount: s }) => ({
                    cardRotation: e.box(t),
                    displayCardsCount: e.box(s),
                    cardsCount: e.box(0),
                    state: e.box(re.Idle),
                    currentRotation: e.box(0),
                    targetRotation: e.box(0),
                    assembled: e.box(!1),
                    rotationStats: { prev: me(), last: me() },
                    progress: {
                        currentCard: e.box(0),
                        animation: e.box(oe.Init),
                        finalCard: e.box(0),
                        state: { runCounter: e.box(!1), cards: [] },
                    },
                    dragging: { lastMousePosition: e.box(0), speed: e.box(0) },
                }))({ cardRotation: 10, displayCardsCount: 14 }),
                _ = ((e) => {
                    const t = s(() => (e.cardsCount.get() >= 5 ? 2 : 1)),
                        a = s(() =>
                            e.cardsCount.get() <= 3
                                ? e.cardsCount.get() - 2
                                : e.cardsCount.get() <= 5
                                  ? e.cardsCount.get() - 3
                                  : e.cardsCount.get() - 1,
                        ),
                        i = s(() => v(e.cardsCount.get(), (t) => ({ key: t, order: e.cardsCount.get() - t - 1 }))),
                        r = s(() =>
                            ge(
                                Math.round(
                                    (Math.abs(e.currentRotation.get()) / (e.cardRotation.get() * e.cardsCount.get())) *
                                        e.cardsCount.get(),
                                ),
                                t.get(),
                                a.get(),
                            ),
                        ),
                        o = s(
                            () => Math.max(0, ge(r.get(), t.get(), a.get())) - Math.ceil(e.displayCardsCount.get() / 2),
                        ),
                        d = s(() => Math.min(e.cardsCount.get(), r.get()) + Math.ceil(e.displayCardsCount.get() / 2)),
                        c = s(() => -e.cardRotation.get() * t.get()),
                        l = s(() => -e.cardRotation.get() * a.get()),
                        _ = s(() => {
                            const t = e.targetRotation.get() + e.dragging.speed.get(),
                                s = c.get(),
                                n = l.get(),
                                a = t > s ? t - s : 0,
                                i = t < n ? n - t : 0;
                            return { left: a, right: i, overflow: a || i || 0 };
                        }),
                        g = s(() =>
                            e.state.get() === re.FirstAnimation
                                ? { ...Ie[re.FirstAnimation], duration: 150 * e.cardsCount.get() }
                                : Ie[e.state.get()],
                        ),
                        u = s(() => !fe.includes(e.state.get())),
                        m = s(() => {
                            const s = [];
                            s.push(...we);
                            for (let n = e.progress.currentCard.get(); n < e.progress.finalCard.get(); n++) {
                                const e = n >= t.get();
                                (s.push(...xe), e && s.push(...he), s.push(...be));
                            }
                            return (e.progress.finalCard.get() < e.cardsCount.get() && s.push(...ve), s.push(...Ce), s);
                        }),
                        p = n((t) =>
                            e.progress.state.cards[t]
                                ? {
                                      state: e.progress.state.cards[t].state.get(),
                                      animation: e.progress.state.cards[t].animation.get(),
                                  }
                                : null,
                        ),
                        f = s(() => {
                            if (!e.rotationStats.last.filled.get() || !e.rotationStats.prev.filled.get()) return;
                            const t = e.rotationStats.last.rotation.get() - e.rotationStats.prev.rotation.get(),
                                s =
                                    e.rotationStats.last.changeTime.get().getTime() -
                                    e.rotationStats.prev.changeTime.get().getTime();
                            return 0 !== s ? x(-0.4, 0.4, t / s) / -0.4 : void 0;
                        }),
                        h = s(() => e.state.get() !== re.Blocked),
                        b = s(() => e.cardsCount.get() >= 6),
                        C = s(() =>
                            u.get() && b.get() ? (e.state.get() === re.Dragging ? 'grabbing' : 'grab') : 'default',
                        );
                    return {
                        velocity: f,
                        minLeftCard: t,
                        maxRightCard: a,
                        cardsMap: i,
                        currentCard: r,
                        minVisibleCard: o,
                        maxVisibleCard: d,
                        minRotation: c,
                        maxRotation: l,
                        overflow: _,
                        animationConfig: g,
                        userActionsAllowed: u,
                        progressSchedule: m,
                        cardState: p,
                        soundEnabled: h,
                        cursor: C,
                    };
                })(l),
                g = n(
                    () =>
                        a.condition.prevPoints.get() < a.condition.currentPoints.get() &&
                        a.condition.currentPoints.get() === a.condition.maximumPoints.get(),
                ),
                u = n(() =>
                    (!g() && a.condition.currentPoints.get() === a.condition.maximumPoints.get()) ||
                    l.progress.animation.get() === oe.Finish
                        ? a.state.get().status
                        : le[a.state.get().status],
                ),
                m = n(() => {
                    const e = g(),
                        t = u(),
                        { isCompleted: s } = _e(t);
                    return { completedWithAnimation: e && s, completedNoAnimation: !e && s };
                }),
                p = n(() => {
                    const e = a.stringifiedModeViewSettings.modeViewSettings.get(),
                        t = JSON.parse(e);
                    return (
                        console.log(t),
                        ((e) => {
                            if ('object' != typeof e) return !1;
                            const t = e;
                            return (
                                'string' == typeof t?.pointsValueFontColor &&
                                'string' == typeof t?.rewardCounterFontColor &&
                                Ne(t?.stagesFontColors) &&
                                Ne(t?.pointsTitleFontColors)
                            );
                        })(t)
                            ? t
                            : Pe
                    );
                });
            return {
                ...a,
                cardsFan: { model: l, computes: _ },
                computes: {
                    quest: i,
                    card: o,
                    cardActiveIndex: d,
                    progressAnimationStartFrom: c,
                    infiniteQuest: r,
                    pageStatus: u,
                    needChangePage: g,
                    finalAnimationStatus: m,
                    modeViewSettings: p,
                },
            };
        },
        ({ externalModel: e, model: t }) => ({
            cardsFun: pe(t.cardsFan.model, t.cardsFan.computes),
            close: e.createCallbackNoArgs('onClose'),
            showInfo: e.createCallbackNoArgs('onShowInfo'),
            onOpenTierList: e.createCallbackNoArgs('onOpenTierList'),
        }),
    ),
    Te = 'Timer_d6719c38',
    je = 'Timer_base__hide_9f6d0c7b',
    Ae = 'Timer_titleSeparatorLeft_6ee5dd6c',
    Se = 'Timer_titleSeparatorRight_e3f1bac1',
    Fe = 'Timer_line_3fed6cdc',
    Qe = 'Timer_point_601094e8',
    Le = 'Timer_questsRenewTimerTitle_1ba29c0d',
    ye = 'Timer_completedResettable_9d2f849c',
    ke = 'Timer_secondLine_461c25ce',
    De = 'Timer_countdown_11b34534',
    qe = R.strings.fun_random.progression.questsList,
    Me = a(({ oneline: e, classNames: t }) => {
        const { model: s } = Ee(),
            n = s.computes.pageStatus(),
            { isInfinite: a, isCompleted: o, isResettable: d } = _e(n),
            { completedWithAnimation: c } = s.computes.finalAnimationStatus(),
            l = s.infiniteCondition.get(),
            _ = { statusTimer: s.condition.statusTimer.get() },
            { statusTimer: g } = a ? l : _,
            u = T(
                { onelineSize: j.x16x16, completedResettableSize: j.x24x24 },
                {
                    medium: { onelineSize: j.x24x24, completedResettableSize: j.x32x32 },
                    large: { onelineSize: j.x24x24, completedResettableSize: j.x48x48 },
                    extraLarge: { onelineSize: j.x32x32, completedResettableSize: j.x48x48 },
                },
            );
        return i.jsxs('div', {
            className: r(Te, c && je, t),
            children: [
                i.jsxs('div', {
                    className: Ae,
                    children: [i.jsx('div', { className: Fe }), i.jsx('div', { className: Qe })],
                }),
                e
                    ? i.jsx(A, {
                          className: Le,
                          text: qe.questsFinishTimerOnelineTitle(),
                          params: { time: i.jsx(S, { start: g, className: De, size: u.onelineSize }) },
                      })
                    : i.jsxs('div', {
                          className: ye,
                          children: [
                              i.jsx('div', {
                                  className: Le,
                                  children: o && d ? qe.questsRenewTimerTitle() : qe.questsFinishTimerTitle(),
                              }),
                              i.jsx('div', {
                                  className: ke,
                                  children: i.jsx(S, { start: g, className: De, size: u.completedResettableSize }),
                              }),
                          ],
                      }),
                i.jsxs('div', {
                    className: Se,
                    children: [i.jsx('div', { className: Qe }), i.jsx('div', { className: Fe })],
                }),
            ],
        });
    }),
    Oe = {
        base: 'Header_423dfe66',
        base__hide: 'Header_base__hide_a308bf0e',
        title: 'Header_title_be0ad147',
        timer: 'Header_timer_43e2aba3',
    },
    $e = a(({ className: e }) => {
        const { model: t } = Ee(),
            s = t.computes.pageStatus(),
            { completedWithAnimation: n, completedNoAnimation: a } = t.computes.finalAnimationStatus(),
            { isActive: o } = _e(s),
            { assetsPointer: d } = t.root.get(),
            { dynamicTexts: c } = Z('progression', { assetsPointer: d });
        return a
            ? null
            : i.jsxs('div', {
                  className: r(Oe.base, n && Oe.base__hide, o && Oe.base__active, e),
                  children: [
                      i.jsx('div', { className: Oe.title, children: c.title() }),
                      i.jsx('div', { className: Oe.timer, children: i.jsx(Me, { oneline: !0 }) }),
                  ],
              });
    }),
    ze = 'edge',
    Be = 'base',
    Ge = ({ imagesRoot: e, partName: t, rarity: s, size: n }) => `url(${e.$dyn(t).$dyn(`${s}_${n}_1`)})`;
function Ve(e, t) {
    const s = F.resolve('images'),
        n = ee(e);
    return s.readOrEmpty(`${n}.progression.cards.common.${t}`, 'silent');
}
const We = {
        root: 'CardEdge_root_f2682522',
        base: 'CardEdge_bfb9e3',
        base__active: 'CardEdge_base__active_87816021',
        base__big: 'CardEdge_base__big_a0bd992',
        base__detached: 'CardEdge_base__detached_f2682522',
        base__deactivating: 'CardEdge_base__deactivating_cc80ab9b',
        base__detaching: 'CardEdge_base__detaching_f2682522',
        base__detaching_active: 'CardEdge_base__detaching_active_47dc97b9',
        edge: 'CardEdge_edge_f2682522',
        shadow: 'CardEdge_shadow_bbbbc58e',
        base__inactive: 'CardEdge_base__inactive_f2682522',
        pattern: 'CardEdge_pattern_76068a3a',
        pointsTitle: 'CardEdge_pointsTitle_48d4cec4',
        pointsValue: 'CardEdge_pointsValue_e815c680',
        blinkEdge: 'CardEdge_blinkEdge_c9e993dd',
        'blink-edge': 'CardEdge_blink-edge_f2682522',
        'completed-congrats': 'CardEdge_completed-congrats_f2682522',
        'completed-glow': 'CardEdge_completed-glow_f2682522',
        'card-show': 'CardEdge_card-show_f2682522',
        'card-show-presentment': 'CardEdge_card-show-presentment_f2682522',
        dissolve: 'CardEdge_dissolve_f2682522',
        blink: 'CardEdge_blink_f2682522',
        'show-down': 'CardEdge_show-down_f2682522',
        'show-up': 'CardEdge_show-up_f2682522',
        show: 'CardEdge_show_f2682522',
        hide: 'CardEdge_hide_f2682522',
        showGlow: 'CardEdge_showGlow_f2682522',
        hideGlow: 'CardEdge_hideGlow_f2682522',
        pointFadeOut: 'CardEdge_pointFadeOut_f2682522',
        pointFadeIn: 'CardEdge_pointFadeIn_f2682522',
        first2void: 'CardEdge_first2void_f2682522',
        second2firstTranslate: 'CardEdge_second2firstTranslate_f2682522',
        second2firstRotate: 'CardEdge_second2firstRotate_f2682522',
        third2second: 'CardEdge_third2second_f2682522',
    },
    He = a(({ index: e = 0, state: t, rewardsSize: s, infinite: n, classMix: a }) => {
        const { model: o } = Ee(),
            { assetsPointer: d } = o.root.get(),
            { progressionState: c, rarity: l, requiredPoints: _ } = o.computes.card(e, s, n),
            { pointsValueFontColor: g, pointsTitleFontColors: u } = o.computes.modeViewSettings(),
            m = t || c?.state,
            p = c?.animation,
            f = te(d).progression.cards,
            h = Ge({ imagesRoot: f, partName: ze, rarity: l, size: s }),
            b = Ve(d, 'pattern');
        return i.jsxs('div', {
            className: r(
                We.edge,
                We.base,
                We[`base__${l}`],
                We[`base__animation_${p}`],
                s === Q.Big && We.base__big,
                We[`base__${m}`],
                a?.edge,
            ),
            style: { backgroundImage: h },
            children: [
                i.jsx('div', { className: We.blinkEdge }),
                i.jsx('div', {
                    className: We.pointsTitle,
                    style: { color: u[l] },
                    children: i.jsx('div', { children: R.strings.fun_random.progression.cards.points() }),
                }),
                i.jsx('div', {
                    className: We.pointsValue,
                    style: { color: g },
                    children: i.jsx('div', { children: _ }),
                }),
                b &&
                    i.jsx('div', {
                        className: r(We.pattern, a?.pattern),
                        style: { maskImage: h, backgroundImage: `url(${b})` },
                    }),
                i.jsx('div', { className: r(We.shadow, a?.shadow), style: { maskImage: h } }),
            ],
        });
    }),
    Ye = {
        root: 'CardContent_root_d7ebe82e',
        base: 'CardContent_e296b032',
        rewards: 'CardContent_rewards_c5fd0929',
        base__big: 'CardContent_base__big_d7ebe82e',
        rewardSlot: 'CardContent_rewardSlot_a2ecb4b9',
        reward: 'CardContent_reward_9582bb4b',
        base__detached: 'CardContent_base__detached_d7ebe82e',
        base__detaching: 'CardContent_base__detaching_d7ebe82e',
        base__detaching_active: 'CardContent_base__detaching_active_d7ebe82e',
        base__deactivating: 'CardContent_base__deactivating_d7ebe82e',
        rewardInfo: 'CardContent_rewardInfo_9d8103dd',
        base__small: 'CardContent_base__small_d7ebe82e',
        rewardImage: 'CardContent_rewardImage_738dd0e8',
        rewardImage__battleToken: 'CardContent_rewardImage__battleToken_e5c2fb0e',
        cardNumber: 'CardContent_cardNumber_2e0af128',
        base__infinite: 'CardContent_base__infinite_d7ebe82e',
        infinity: 'CardContent_infinity_20eac8ba',
        shadow: 'CardContent_shadow_45f4b2db',
        base__inactive: 'CardContent_base__inactive_d7ebe82e',
        pattern: 'CardContent_pattern_ffcb76c8',
        'completed-congrats': 'CardContent_completed-congrats_d7ebe82e',
        'completed-glow': 'CardContent_completed-glow_d7ebe82e',
        'card-show': 'CardContent_card-show_d7ebe82e',
        'card-show-presentment': 'CardContent_card-show-presentment_d7ebe82e',
        edge: 'CardContent_edge_d7ebe82e',
        dissolve: 'CardContent_dissolve_d7ebe82e',
        'blink-edge': 'CardContent_blink-edge_d7ebe82e',
        blink: 'CardContent_blink_d7ebe82e',
        'show-down': 'CardContent_show-down_d7ebe82e',
        'show-up': 'CardContent_show-up_d7ebe82e',
        show: 'CardContent_show_d7ebe82e',
        hide: 'CardContent_hide_d7ebe82e',
        showGlow: 'CardContent_showGlow_d7ebe82e',
        hideGlow: 'CardContent_hideGlow_d7ebe82e',
        pointFadeOut: 'CardContent_pointFadeOut_d7ebe82e',
        pointFadeIn: 'CardContent_pointFadeIn_d7ebe82e',
        first2void: 'CardContent_first2void_d7ebe82e',
        second2firstTranslate: 'CardContent_second2firstTranslate_d7ebe82e',
        second2firstRotate: 'CardContent_second2firstRotate_d7ebe82e',
        third2second: 'CardContent_third2second_d7ebe82e',
    },
    Ue = a(({ index: e = 0, state: t, rewardsSize: s, infinite: n, classMix: a }) => {
        const { model: o } = Ee(),
            { assetsPointer: d } = o.root.get(),
            { progressionState: c, rarity: l, cardNumber: _, rewards: g } = o.computes.card(e, s, n),
            { stagesFontColors: u } = o.computes.modeViewSettings(),
            { rewardCounterFontColor: m } = o.computes.modeViewSettings(),
            p = t || c?.state,
            f = te(d).progression.cards,
            h = Ge({ imagesRoot: f, partName: Be, rarity: l, size: s }),
            b = String(f.infinity_sign.$dyn(l)),
            C = Ve(d, 'reward_background'),
            w = Ve(d, 'pattern');
        return i.jsxs('div', {
            className: r(
                Ye.base,
                Ye[`base__${l}`],
                Ye[`base__${s}`],
                Ye[`base__${p}`],
                n && Ye.base__infinite,
                a?.content,
            ),
            children: [
                i.jsx('div', {
                    className: Ye.rewards,
                    children: v(4, (e) => {
                        const t = g.length > e,
                            n = t && g[e];
                        return i.jsx(
                            'div',
                            {
                                className: Ye.rewardSlot,
                                style: { '--reward-info-color': m, backgroundImage: C ? `url(${C})` : 'none' },
                                children:
                                    t &&
                                    n &&
                                    i.jsx(L, {
                                        ...g[e],
                                        size: s,
                                        className: Ye.reward,
                                        classNames: {
                                            info: Ye.rewardInfo,
                                            image: r(
                                                Ye.rewardImage,
                                                ['lootBox', 'battleToken'].includes(n.name) &&
                                                    Ye.rewardImage__battleToken,
                                            ),
                                        },
                                    }),
                            },
                            e,
                        );
                    }),
                }),
                i.jsx('div', {
                    className: Ye.cardNumber,
                    style: { color: u[l] },
                    children: n ? i.jsx('div', { className: Ye.infinity, style: { backgroundImage: `url(${b})` } }) : _,
                }),
                w &&
                    i.jsx('div', {
                        className: r(Ye.pattern, a?.pattern),
                        style: { maskImage: h, backgroundImage: `url(${w})` },
                    }),
                i.jsx('div', { className: r(Ye.shadow, a?.shadow), style: { maskImage: h } }),
            ],
        });
    }),
    Xe = {
        root: 'Card_root_f4c22d1c',
        base: 'Card_85adaed',
        base__big: 'Card_base__big_247c97ce',
        base__inactive: 'Card_base__inactive_f4c22d1c',
        base__detached: 'Card_base__detached_f4c22d1c',
        base__detaching: 'Card_base__detaching_f4c22d1c',
        base__deactivating: 'Card_base__deactivating_f4c22d1c',
        base__activating: 'Card_base__activating_c8c39979',
        glow: 'Card_glow_154b3a6',
        base__active: 'Card_base__active_f4c22d1c',
        base__animation_hiding_glow: 'Card_base__animation_hiding_glow_f4c22d1c',
        base__animation_showing_glow: 'Card_base__animation_showing_glow_f4c22d1c',
        showGlow: 'Card_showGlow_f4c22d1c',
        hideGlow: 'Card_hideGlow_f4c22d1c',
        particles: 'Card_particles_6bfd2d4b',
        base__detaching_active: 'Card_base__detaching_active_f4c22d1c',
        dissolve: 'Card_dissolve_f4c22d1c',
        blink: 'Card_blink_85f7e35b',
        image: 'Card_image_3408eba8',
        'completed-congrats': 'Card_completed-congrats_f4c22d1c',
        'completed-glow': 'Card_completed-glow_f4c22d1c',
        'card-show': 'Card_card-show_f4c22d1c',
        'card-show-presentment': 'Card_card-show-presentment_f4c22d1c',
        edge: 'Card_edge_f4c22d1c',
        'blink-edge': 'Card_blink-edge_f4c22d1c',
        'show-down': 'Card_show-down_f4c22d1c',
        'show-up': 'Card_show-up_f4c22d1c',
        show: 'Card_show_f4c22d1c',
        hide: 'Card_hide_f4c22d1c',
        pointFadeOut: 'Card_pointFadeOut_f4c22d1c',
        pointFadeIn: 'Card_pointFadeIn_f4c22d1c',
        first2void: 'Card_first2void_f4c22d1c',
        second2firstTranslate: 'Card_second2firstTranslate_f4c22d1c',
        second2firstRotate: 'Card_second2firstRotate_f4c22d1c',
        third2second: 'Card_third2second_f4c22d1c',
    },
    Je = a(({ index: e = 0, state: t, rewardsSize: s, classMix: n, infinite: a }) => {
        const { model: d } = Ee(),
            { assetsPointer: c } = d.root.get(),
            { progressionState: l, rarity: _ } = d.computes.card(e, s, a),
            g = t || l?.state,
            u = l?.animation,
            m = te(c).progression.cards,
            p = Ge({ imagesRoot: m, partName: Be, rarity: _, size: s });
        return (
            o.useEffect(() => {
                (g !== ne.DetachingActive && g !== ne.Detaching) || C.sound(ie.EvFepTearOffCard);
            }, [g]),
            i.jsxs('div', {
                className: r(
                    Xe.base,
                    Xe[`base__${_}`],
                    Xe[`base__animation_${u}`],
                    s === Q.Big && Xe.base__big,
                    Xe[`base__${g}`],
                    n?.base,
                ),
                children: [
                    i.jsx('div', {
                        className: Xe.glow,
                        style: { backgroundImage: `url('${m.common.glow_active()}')` },
                    }),
                    i.jsx(He, { index: e, state: t, rewardsSize: s, classMix: n, infinite: a }),
                    i.jsx('div', { className: Xe.blink }),
                    i.jsx('div', { className: Xe.particles }),
                    i.jsx('div', { className: Xe.image, style: { backgroundImage: p } }),
                    i.jsx(Ue, { index: e, state: t, rewardsSize: s, classMix: n, infinite: a }),
                ],
            })
        );
    }),
    Ke = [re.Dragging, re.ShowProgress, re.Blocked],
    Ze = (e, t) => Math.abs(e - t) < 0.2,
    et = ({
        cardsCount: e,
        prevCard: t,
        activeCard: s,
        isFirstOpen: n,
        isBlocked: a,
        model: i,
        computes: r,
        actions: _,
    }) => {
        const { run: g, clear: u } = y(),
            { runSchedule: m, clearAll: p } = (() => {
                const e = o.useRef([]);
                return o.useMemo(
                    () => ({
                        runSchedule: (t) => {
                            (e.current.forEach(clearTimeout), (e.current = []));
                            let s = 0;
                            t.forEach(({ delay: t, action: n, duration: a }) => {
                                s += t || 0;
                                const i = setTimeout(n, s);
                                (e.current?.push(i), (s += a || 0));
                            });
                        },
                        clearAll: () => {
                            (e.current.forEach(clearTimeout), (e.current = []));
                        },
                    }),
                    [],
                );
            })(),
            f = o.useRef(!0),
            h = d(() => ({
                rotate: i.currentRotation.get(),
                onStart: () => {
                    (_.startRotation(), r.soundEnabled.get() && C.sound(ie.EvFepCardStartMove));
                },
                onRest: () => {
                    r.soundEnabled.get() && C.sound(ie.EvFepCardStopMove);
                },
                onChange: (e) => {
                    _.setCurrentRotation(e.value.rotate);
                },
            }));
        k(() => C.sound(ie.EvFepCardStopMove));
        const b = h[1];
        return (
            o.useEffect(() => {
                const o = c(
                        () => r.velocity.get(),
                        (e) => {
                            var t, s;
                            void 0 !== e &&
                                r.soundEnabled.get() &&
                                ((t = ie.RtpcExtFepWheelRotation),
                                (s = Math.abs(e)),
                                engine.call('SetRTPCGlobal', t, s).catch((e) => {
                                    console.error(`Error in function setRTPC('${t}', '${s}'): `, e);
                                }));
                        },
                    ),
                    d = c(
                        () => i.currentRotation.get(),
                        () => {
                            if (Ze(i.targetRotation.get(), i.currentRotation.get()) && !Ke.includes(i.state.get()))
                                i.state.get() === re.FirstAnimation
                                    ? _.runProgressionAnimation()
                                    : i.state.get() === re.FinalAnimation
                                      ? (_.setAssembled(!0),
                                        _.setState(re.Blocked),
                                        C.sound(ie.RtpcExtFepWheelRotation),
                                        C.sound(ie.EvFepCardStopMove),
                                        C.sound(ie.EvFepCongratulate))
                                      : _.setState(re.Idle);
                            else if (i.state.get() === re.InertialMovement) {
                                const e = 0.75 * i.dragging.speed.get();
                                (_.setDraggingSpeed(e), _.setTargetRotation(i.targetRotation.get() + e));
                            }
                            const e = i.state.get() === re.Idle,
                                t = i.state.get() === re.ShowProgress && i.progress.animation.get() === oe.Init;
                            (e || t) && f.current && b.set({ rotate: i.currentRotation.get() });
                        },
                    ),
                    h = c(
                        () => i.targetRotation.get(),
                        () => {
                            i.state.get() !== re.Idle &&
                                b.start({ rotate: i.targetRotation.get(), config: r.animationConfig.get() });
                        },
                    ),
                    v = c(
                        () => i.state.get(),
                        () => {
                            if (
                                ([re.InertialMovement, re.OverflowNormalization].includes(i.state.get()) &&
                                    Ze(i.currentRotation.get(), i.targetRotation.get()) &&
                                    _.setState(re.Idle),
                                i.state.get() !== re.Idle ||
                                    Ze(i.currentRotation.get(), -i.cardRotation.get() * r.currentCard.get()))
                            )
                                u();
                            else {
                                const { overflow: e } = r.overflow.get();
                                e
                                    ? (_.setState(re.OverflowNormalization),
                                      _.setTargetRotation(-i.cardRotation.get() * r.currentCard.get()))
                                    : g(() => {
                                          (_.setState(re.Normalization),
                                              _.setTargetRotation(-i.cardRotation.get() * r.currentCard.get()));
                                      }, 1e3);
                            }
                            (i.state.get() === re.FirstAnimation && b.set({ rotate: i.currentRotation.get() }),
                                i.state.get() === re.ShowProgress &&
                                    m(
                                        r.progressSchedule
                                            .get()
                                            .map(({ delay: e, action: t, duration: s }) => ({
                                                delay: e,
                                                duration: s,
                                                action: _.progress[t],
                                            })),
                                    ));
                        },
                    ),
                    w = l(() => {
                        _.initCardsFan(e, t, s, n, !f.current, a);
                    });
                return (
                    (f.current = !1),
                    () => {
                        (w(), d(), h(), v(), u(), p(), o());
                    }
                );
            }, [s, b, e, u, p, g, n, a, t, m]),
            h
        );
    },
    tt = 'CardsFan_457fda09',
    st = 'CardsFan_cardHolder_7672ecfc',
    nt = 'CardsFan_base__big_7628f226',
    at = 'CardsFan_card_aa0cd6ad',
    it = 'CardsFan_base__final_7628f226',
    rt = 'CardsFan_card__active_62fd3ae5',
    ot = ({ mediaHeight: e, mediaWidth: t }) => e >= $.Large && t >= z.Small,
    dt = a(
        ({
            children: e,
            transformRadius: t,
            cardHeight: s,
            defaultSelectedElement: n = 0,
            containerRef: a,
            className: d,
        }) => {
            const { mediaHeight: c, mediaWidth: l, screenWidthRem: g, screenHeightRem: u } = D(),
                m = Ee(),
                { model: p, computes: f } = m.model.cardsFan,
                h = m.controls.cardsFun,
                b = ot({ mediaHeight: c, mediaWidth: l }),
                C = (({ isAssembled: e, mediaHeight: t, mediaWidth: s }) => {
                    const n = ot({ mediaHeight: t, mediaWidth: s });
                    return e ? (!n && t >= $.Medium ? 90 : n ? 60 : 50) : 0;
                })({ mediaHeight: c, mediaWidth: l, isAssembled: p.assembled.get() }),
                { completedWithAnimation: v, completedNoAnimation: w } = m.model.computes.finalAnimationStatus(),
                [{ rotate: x }, I] = et({
                    cardsCount: m.model.stages.get().length,
                    prevCard: m.model.computes.progressAnimationStartFrom(),
                    activeCard: m.model.computes.cardActiveIndex(),
                    isFirstOpen: m.model.root.get().isFirstOpen,
                    isBlocked: w,
                    model: p,
                    computes: f,
                    actions: h,
                }),
                N = o.useCallback(
                    (e, t) => {
                        if (!a?.current) return;
                        const { width: s, height: n, x: i, y: r } = a.current.getBoundingClientRect();
                        return (e >= i && t >= r && e <= i + s && t <= r + n) || void 0;
                    },
                    [a],
                ),
                P = o.useCallback(
                    (e) => {
                        if (!N(e.screenX, e.screenY)) return;
                        const t = e.deltaY > 1 ? 1 : -1;
                        h.scroll(t);
                    },
                    [h, N],
                ),
                R = o.useCallback(
                    (e) => {
                        if (p.state.get() === re.Dragging) {
                            if (!a?.current) return;
                            if (N(e.screenX, e.screenY)) {
                                const n = t + s - q(e.screenY);
                                h.drag(n, q(e.screenX));
                            } else h.stopDragging();
                        }
                    },
                    [p.state, a, N, h, t, s],
                );
            return (
                o.useEffect(
                    () => (
                        document.addEventListener('wheel', P),
                        function () {
                            document.removeEventListener('wheel', P);
                        }
                    ),
                    [I, h, P],
                ),
                o.useEffect(
                    () =>
                        M(() => {
                            const e = () => {
                                    h.stopDragging();
                                },
                                t = () => {
                                    h.stopDragging();
                                },
                                s = (e) => {
                                    h.startDragging(q(e.screenX));
                                };
                            return (
                                document.addEventListener('mousedown', s),
                                document.addEventListener('mousemove', R),
                                document.addEventListener('mouseup', e),
                                document.addEventListener('mouseleave', t),
                                function () {
                                    (document.removeEventListener('mousedown', s),
                                        document.removeEventListener('mousemove', R),
                                        document.removeEventListener('mouseup', e),
                                        document.removeEventListener('mouseleave', t));
                                }
                            );
                        }),
                    [h, t, s, p.state, u, g, R],
                ),
                i.jsx('div', {
                    className: r(tt, d, b && nt, v && it),
                    children: i.jsx(_.div, {
                        className: st,
                        style: { transformOrigin: `center ${t}rem`, rotate: x },
                        children: O(
                            f.cardsMap.get(),
                            ({ order: e }) => e >= f.minVisibleCard.get() && e <= f.maxVisibleCard.get(),
                            (s) =>
                                i.jsx(
                                    'div',
                                    {
                                        className: r(at, s.order === n && rt),
                                        style: {
                                            transformOrigin: `center ${t}rem`,
                                            transform: `rotate(${p.cardRotation.get() * s.order}deg) translateY(${C}%)`,
                                        },
                                        children: e[s.order],
                                    },
                                    s.key,
                                ),
                        ),
                    }),
                })
            );
        },
    ),
    ct = 'CardsProgression_351ad395',
    lt = 'CardsProgression_cardsFan_83cbdc49',
    _t = a(({ className: e, containerRef: t }) => {
        const { model: s, controls: n } = Ee(),
            a = s.stages.get().length,
            d = s.cardsFan.model.progress.currentCard.get(),
            c = s.computes.pageStatus(),
            l = T(
                { cardHeight: 261, transformRadius: 990, rewardsSize: Q.Small },
                { large: { cardHeight: 400, transformRadius: 1500, rewardsSize: Q.Big } },
            );
        return (
            o.useEffect(() => {
                c === se.COMPLETED_FINAL && n.cardsFun.runFinalAnimation(a);
            }, [c, a, n.cardsFun]),
            i.jsx('div', {
                className: r(ct, e),
                children: i.jsx(dt, {
                    ...l,
                    defaultSelectedElement: d,
                    containerRef: t,
                    className: lt,
                    children: v(a, (e) => i.jsx(Je, { index: e, rewardsSize: l.rewardsSize }, e)),
                }),
            })
        );
    }),
    gt = 'InfiniteTitle_db4ba977',
    ut = 'InfiniteTitle_base__shown_ddd09f8b',
    mt = 'InfiniteTitle_glow_d67d6df9',
    pt = 'InfiniteTitle_glow__show_76624e20',
    ft = 'InfiniteTitle_title_64af8d95',
    ht = 'InfiniteTitle_mainHeader_8a5dad6b',
    bt = 'InfiniteTitle_congrats_53b68d3',
    Ct = 'InfiniteTitle_congrats__hidden_9600cf7d',
    vt = 'InfiniteTitle_subtitle_a77973ac',
    wt = 'InfiniteTitle_timer_4d11422f',
    xt = 'InfiniteTitle_congratsSubtitle_5fe682a2',
    It = 'InfiniteTitle_congratsSubtitle__hidden_29c7c9af',
    Nt = a(() => {
        const { model: e } = Ee(),
            { assetsPointer: t } = e.root.get(),
            s = e.computes.needChangePage(),
            { title: n } = e.infiniteCondition.get(),
            { dynamicTexts: a } = Z('progression', { assetsPointer: t }),
            [d, c] = o.useState(!1),
            [l, _] = o.useState(!s),
            [g, u] = o.useState(!s);
        return i.jsxs('div', {
            className: r(gt, ut),
            onAnimationEnd: () => {
                s && c(!0);
            },
            children: [
                i.jsx('div', { className: r(mt, d && pt), onAnimationEnd: () => _(!0) }),
                i.jsx('div', { className: ft, children: n }),
                g
                    ? i.jsxs('div', {
                          className: ht,
                          children: [
                              i.jsx('div', { className: vt, children: a.infinite.infinityStep() }),
                              i.jsx('div', { className: r(wt), children: i.jsx(Me, { oneline: !0, classNames: wt }) }),
                          ],
                      })
                    : i.jsxs('div', {
                          className: r(bt, l && Ct),
                          onTransitionEnd: () => u(!0),
                          children: [
                              i.jsx('div', { className: vt, children: a.infinite.congratulations() }),
                              i.jsx('div', {
                                  className: r(xt, l && It),
                                  children: a.infinite.mainProgressionFinished(),
                              }),
                          ],
                      }),
            ],
        });
    }),
    Pt = 'CompletedProgression_279268c8',
    Rt = 'CompletedProgression_container_d7c47390',
    Et = 'CompletedProgression_base__final_413e479e',
    Tt = 'CompletedProgression_base__static_413e479e',
    jt = 'CompletedProgression_base__infinite_413e479e',
    At = 'CompletedProgression_glow_dc3db05a',
    St = 'CompletedProgression_base__resettable_413e479e',
    Ft = 'CompletedProgression_title_3e7b1301',
    Qt = 'CompletedProgression_congrats_e8822bc1',
    Lt = 'CompletedProgression_congratsSubtitle_e8dbd002',
    yt = 'CompletedProgression_icon_1c9145a9',
    kt = 'CompletedProgression_timer_4f044f1e',
    Dt = 'CompletedProgression_button_de4a031d',
    qt = a(() => {
        const { model: e, controls: t } = Ee(),
            s = e.computes.pageStatus(),
            { isCompleted: n, isResettable: a, isInfinite: o } = _e(s),
            { assetsPointer: d } = e.root.get(),
            { dynamicTexts: c } = Z('progression', { assetsPointer: d }),
            l = !e.computes.needChangePage(),
            _ = T({ size: B.medium }, { large: { size: B.large } });
        return n || o
            ? i.jsxs('div', {
                  className: r(Pt, Et, l && Tt, a && St, o && jt),
                  children: [
                      i.jsxs('div', {
                          className: Rt,
                          children: [
                              o
                                  ? i.jsx(Nt, {})
                                  : i.jsxs(i.Fragment, {
                                        children: [
                                            i.jsx('div', { className: Ft, children: c.title() }),
                                            i.jsx('div', { className: At }),
                                            i.jsx('div', { className: Qt, children: c.complete.congratulations() }),
                                            i.jsxs('div', {
                                                className: Lt,
                                                children: [
                                                    i.jsx(G, {
                                                        path: 'ui_kit.card.status_done',
                                                        width: 24,
                                                        height: 24,
                                                        className: yt,
                                                    }),
                                                    c.complete.title(),
                                                ],
                                            }),
                                        ],
                                    }),
                              n && i.jsx(Me, { classNames: kt }),
                          ],
                      }),
                      !o &&
                          i.jsx(V, {
                              className: Dt,
                              onClick: t.close,
                              size: _.size,
                              children: R.strings.fun_random.progression.complete.affirmative(),
                          }),
                  ],
              })
            : null;
    });
var Mt = ((e) => ((e.Active = 'active'), (e.Completed = 'completed'), e))(Mt || {});
const Ot = {
        base: 'Point_38360539',
        base__twoPoints: 'Point_base__twoPoints_1893b78b',
        base__single_quest: 'Point_base__single_quest_e3f47efb',
        reason: 'Point_reason_34a1e661',
        score: 'Point_score_ae8e52b',
        base__completed: 'Point_base__completed_d8b7e333',
    },
    $t = ({ reason: e, valueTemplate: t, value: s, twoPoints: n, singleQuest: a = !1, completed: o = !1 }) => {
        const { upscale: d } = D();
        return i.jsx(A, {
            text: R.strings.fun_random.progression.questsList.quest.progressChangeLabel.template(),
            className: r(
                Ot.base,
                a && Ot.base__single_quest,
                n && Ot.base__twoPoints,
                o && Ot.base__completed,
                d && Ot.base__upscaled,
            ),
            params: {
                reason: i.jsx('span', { className: Ot.reason, children: e }),
                value: t
                    ? i.jsx(A, { text: t, className: Ot.score, params: { value: s }, upgradeLegacy: !0 })
                    : i.jsx('span', { className: Ot.score, children: s }),
            },
        });
    },
    zt = R.strings.fun_random.progression.questsList.quest;
const Bt = R.images.gui.maps.icons.quests.battleCondition.c_128_decor,
    Gt = R.images.gui.maps.icons.quests.battleCondition.c_128;
const Vt = {
        root: 'Quest_root_3236e985',
        base: 'Quest_bc79f0ef',
        base__completed: 'Quest_base__completed_fb9052a3',
        base__single_quest: 'Quest_base__single_quest_a7e12a09',
        base__infinite: 'Quest_base__infinite_5d4ffd35',
        base__cursor_grab: 'Quest_base__cursor_grab_766e9087',
        conditionIcon: 'Quest_conditionIcon_d42668c',
        icon: 'Quest_icon_ce84b623',
        content: 'Quest_content_b0f2596d',
        progress: 'Quest_progress_8ee91cf8',
        progressCompleted: 'Quest_progressCompleted_3236e985',
        progressDelimeter: 'Quest_progressDelimeter_3236e985',
        progressTotal: 'Quest_progressTotal_c17887e9',
        progressCurrent: 'Quest_progressCurrent_7d94566',
        progressCurrentItem: 'Quest_progressCurrentItem_b66fd01c',
        progressCurrentItem__enter: 'Quest_progressCurrentItem__enter_39d20679',
        show: 'Quest_show_3236e985',
        progressCurrentItem__exit: 'Quest_progressCurrentItem__exit_8a444538',
        hide: 'Quest_hide_3236e985',
        title: 'Quest_title_9f0de4ab',
        points: 'Quest_points_2d93d449',
        base__upscaled: 'Quest_base__upscaled_3236e985',
        pointBreak: 'Quest_pointBreak_9f9919b',
        infinity: 'Quest_infinity_e671f4e9',
        'completed-congrats': 'Quest_completed-congrats_3236e985',
        'completed-glow': 'Quest_completed-glow_3236e985',
        'card-show': 'Quest_card-show_3236e985',
        'card-show-presentment': 'Quest_card-show-presentment_3236e985',
        edge: 'Quest_edge_3236e985',
        dissolve: 'Quest_dissolve_3236e985',
        'blink-edge': 'Quest_blink-edge_3236e985',
        blink: 'Quest_blink_3236e985',
        'show-down': 'Quest_show-down_3236e985',
        'show-up': 'Quest_show-up_3236e985',
        showGlow: 'Quest_showGlow_3236e985',
        hideGlow: 'Quest_hideGlow_3236e985',
        pointFadeOut: 'Quest_pointFadeOut_3236e985',
        pointFadeIn: 'Quest_pointFadeIn_3236e985',
        first2void: 'Quest_first2void_3236e985',
        second2firstTranslate: 'Quest_second2firstTranslate_3236e985',
        second2firstRotate: 'Quest_second2firstRotate_3236e985',
        third2second: 'Quest_third2second_3236e985',
    },
    Wt = a(({ progress: e }) => {
        const { model: t } = Ee(),
            { assetsPointer: s } = t.root.get(),
            { dynamicTexts: n } = Z('progression', { assetsPointer: s }),
            a = W();
        return i.jsx(A, {
            text: R.strings.fun_random.progression.questsList.quest.progressTitle(),
            className: Vt.progress,
            params: {
                completed: i.jsx('div', {
                    className: Vt.progressCompleted,
                    children: n.questsList.quest.infinityStageProgress(),
                }),
                currentPoints: i.jsx(g, {
                    className: Vt.progressCurrent,
                    children: i.jsx(
                        u,
                        {
                            nodeRef: a.getOrCreate(e),
                            timeout: 3400,
                            classNames: { enter: Vt.progressCurrentItem__enter, exit: Vt.progressCurrentItem__exit },
                            children: i.jsx('div', {
                                ref: a.getOrCreate(e),
                                className: Vt.progressCurrentItem,
                                children: e,
                            }),
                        },
                        `progress-${e}`,
                    ),
                }),
                delimeter: i.jsx('div', { className: Vt.progressDelimeter, children: R.strings.common.common.slash() }),
                totalPoints: i.jsx('div', { className: Vt.infinity }),
            },
        });
    }),
    Ht = a(({ className: e, index: t = 0, infinite: s, progress: n }) => {
        const { model: a } = Ee(),
            o = a.computes.quest(t),
            d = a.computes.infiniteQuest(),
            c = s && d ? d : o,
            { cursor: l } = a.cardsFan.computes,
            { sides: _, upscale: g } = D(),
            u = 1 === a.quests.get().length || s,
            m = (function (e, t, s) {
                if (t === Mt.Completed) {
                    const e = 'icon_mission_completed_' + (s >= z.Large ? '128' : '90');
                    return { backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.quest.$dyn(e)})` };
                }
                if (s >= z.Large) {
                    const t = `icon_battle_condition_${e}_128x128`;
                    return { backgroundImage: `url(${Bt.$dyn(t) ?? Gt.$dyn(t)})` };
                }
                return {
                    backgroundImage: `url(${R.images.gui.maps.icons.quests.battleCondition.c_90.$dyn(`icon_battle_condition_${e}_90x90`)})`,
                };
            })(c.questCondition, c.state, _.width),
            [p, f] = (function ({ mainBonusCount: e, state: t, totalPoints: s, altBonusCount: n }) {
                return t === Mt.Completed
                    ? [{ labelTemplate: zt.progressChangeLabel.pointsEarned(), value: s }]
                    : n
                      ? [
                            {
                                labelTemplate: zt.progressChangeLabel.forWin(),
                                valueTemplate: R.strings.common.plusValue(),
                                value: e,
                            },
                            {
                                labelTemplate: zt.progressChangeLabel.forLoss(),
                                valueTemplate: R.strings.common.plusValue(),
                                value: n,
                            },
                        ]
                      : [
                            {
                                labelTemplate: zt.progressChangeLabel.forCompletion(),
                                valueTemplate: R.strings.common.plusValue(),
                                value: e,
                            },
                        ];
            })(c);
        return i.jsxs('div', {
            className: r(
                Vt.base,
                Vt[`base__${c.state}`],
                Vt[`base__cursor_${l}`],
                u && Vt.base__single_quest,
                s && Vt.base__infinite,
                g && Vt.base__upscaled,
                e,
            ),
            children: [
                i.jsx('div', { className: Vt.conditionIcon, children: i.jsx('div', { className: Vt.icon, style: m }) }),
                i.jsxs('div', {
                    className: Vt.content,
                    children: [
                        s
                            ? i.jsx(Wt, { progress: n })
                            : 9999 === c.totalProgress
                              ? i.jsx('div', {
                                    className: r(Vt.progress, Vt.progressCompleted),
                                    children: R.strings.fun_random.progression.questsList.quest.infinityProgress(),
                                })
                              : i.jsx(A, {
                                    text: R.strings.fun_random.progression.questsList.quest.progressTitle(),
                                    className: Vt.progress,
                                    params: {
                                        completed: i.jsx('div', {
                                            className: Vt.progressCompleted,
                                            children: R.strings.fun_random.progression.questsList.quest.completed(),
                                        }),
                                        currentPoints: i.jsx('div', {
                                            className: Vt.progressCurrent,
                                            children: c.currentProgress,
                                        }),
                                        delimeter: i.jsx('div', {
                                            className: Vt.progressDelimeter,
                                            children: R.strings.common.common.slash(),
                                        }),
                                        totalPoints: i.jsx('div', {
                                            className: Vt.progressTotal,
                                            children: c.totalProgress,
                                        }),
                                    },
                                }),
                        i.jsx('div', { className: Vt.title, children: c.description }),
                        i.jsxs('div', {
                            className: Vt.points,
                            children: [
                                i.jsx($t, {
                                    value: p.value,
                                    valueTemplate: p.valueTemplate,
                                    reason: p.labelTemplate,
                                    singleQuest: u,
                                    twoPoints: Boolean(f) && !s,
                                    completed: c.state === Mt.Completed,
                                }),
                                f &&
                                    i.jsxs(i.Fragment, {
                                        children: [
                                            i.jsx('div', { className: Vt.pointBreak }),
                                            i.jsx($t, {
                                                value: f.value,
                                                valueTemplate: f.valueTemplate,
                                                reason: f.labelTemplate,
                                                singleQuest: u,
                                                twoPoints: !s,
                                                completed: c.state === Mt.Completed,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Yt = {
        root: 'InfiniteCard_root_55fb4fdf',
        base: 'InfiniteCard_585fc4a4',
        'card-show': 'InfiniteCard_card-show_55fb4fdf',
        base__first: 'InfiniteCard_base__first_962bdcd9',
        base__second: 'InfiniteCard_base__second_655c9b4',
        base__third: 'InfiniteCard_base__third_ae2eb9b1',
        base__fourth: 'InfiniteCard_base__fourth_b5fd1580',
        show: 'InfiniteCard_show_55fb4fdf',
        base__presentment: 'InfiniteCard_base__presentment_2720fe1a',
        'card-show-presentment': 'InfiniteCard_card-show-presentment_55fb4fdf',
        shadow: 'InfiniteCard_shadow_a39e06c2',
        cardWrapper: 'InfiniteCard_cardWrapper_cef8ce23',
        cardWrapper__enter: 'InfiniteCard_cardWrapper__enter_78f9326b',
        first2void: 'InfiniteCard_first2void_55fb4fdf',
        cardWrapper__enterDone: 'InfiniteCard_cardWrapper__enterDone_a0d8bbd2',
        second2firstTranslate: 'InfiniteCard_second2firstTranslate_55fb4fdf',
        second2firstRotate: 'InfiniteCard_second2firstRotate_55fb4fdf',
        third2second: 'InfiniteCard_third2second_55fb4fdf',
        'completed-congrats': 'InfiniteCard_completed-congrats_55fb4fdf',
        'completed-glow': 'InfiniteCard_completed-glow_55fb4fdf',
        edge: 'InfiniteCard_edge_55fb4fdf',
        dissolve: 'InfiniteCard_dissolve_55fb4fdf',
        'blink-edge': 'InfiniteCard_blink-edge_55fb4fdf',
        blink: 'InfiniteCard_blink_55fb4fdf',
        'show-down': 'InfiniteCard_show-down_55fb4fdf',
        'show-up': 'InfiniteCard_show-up_55fb4fdf',
        hide: 'InfiniteCard_hide_55fb4fdf',
        showGlow: 'InfiniteCard_showGlow_55fb4fdf',
        hideGlow: 'InfiniteCard_hideGlow_55fb4fdf',
        pointFadeOut: 'InfiniteCard_pointFadeOut_55fb4fdf',
        pointFadeIn: 'InfiniteCard_pointFadeIn_55fb4fdf',
    },
    Ut = 'first',
    Xt = 'second',
    Jt = 'third',
    Kt = 'fourth',
    Zt = {
        [Kt]: { timeout: 1e3, nextOnEntering: !1 },
        [Jt]: { timeout: 1400, nextOnEntering: !1 },
        [Xt]: { timeout: 1400, nextOnEntering: !0 },
        [Ut]: { timeout: 2500, nextOnEntering: !1 },
    },
    es = a(({ postfix: e, isDetached: t, nextTrigger: s, isTransitionActive: n }) => {
        const { model: a } = Ee(),
            d = o.useRef(!0),
            c = o.useRef(null),
            l = a.computes.needChangePage(),
            { timeout: _, nextOnEntering: g } = Zt[e],
            m = e === Ut,
            p = e === Kt,
            f = t ? ne.Detaching : ne.Inactive;
        return i.jsx(
            'div',
            {
                className: r(Yt.base, Yt[`base__${e}`], !m && Yt.base__completed, l && Yt.base__presentment),
                onAnimationStart: () => {
                    d.current && !p && (C.sound(ie.EvFepCardChange), (d.current = !1));
                },
                children: i.jsx(
                    u,
                    {
                        nodeRef: c,
                        onEntered: g ? H : s,
                        onEntering: g ? s : H,
                        in: n,
                        timeout: _,
                        className: Yt.cardWrapper,
                        classNames: { enter: Yt.cardWrapper__enter, enterDone: Yt.cardWrapper__enterDone },
                        children: i.jsx('div', {
                            ref: c,
                            className: Yt.cardWrapper,
                            children: i.jsx(Je, {
                                infinite: !0,
                                classMix: { content: Yt.content, shadow: Yt.shadow, pattern: Yt.pattern },
                                state: f,
                                rewardsSize: Q.Big,
                            }),
                        }),
                    },
                    e,
                ),
            },
            e,
        );
    }),
    ts = 'InfiniteCards_a57ec698',
    ss = 'InfiniteCards_base__big_c727fc86',
    ns = [Kt, Jt, Xt, Ut],
    as = ({ startAllowed: e, progressLevelUps: t }) => {
        const s = y(),
            { mediaHeight: n, mediaWidth: a } = D(),
            d = n >= $.Medium && a >= z.Medium,
            [c, l] = o.useState(0),
            [_, g] = o.useState(!1),
            [u, m] = o.useState(t);
        o.useEffect(
            () => (
                e &&
                    u > 0 &&
                    s.run(() => {
                        (l(1), g(!0));
                    }, 300),
                () => {
                    s.clear();
                }
            ),
            [e, u, _, s],
        );
        return i.jsx('div', {
            className: r(ts, d && ss),
            children: ns.map((e, t) =>
                i.jsx(
                    es,
                    {
                        nextTrigger: () =>
                            ((e) => {
                                (C.sound(ie.EvFepCardChange),
                                    0 === e ? (m((e) => e - 1), g(!1), l(0)) : l(ns.length + 1 - e));
                            })(t),
                        isTransitionActive: c > ns.length - 1 - t,
                        postfix: e,
                        isDetached: _ && c > 0 && 'first' === e,
                    },
                    e,
                ),
            ),
        });
    },
    is = {
        base: 'InfiniteQuestCondition_89da2a57',
        conditionsPoints: 'InfiniteQuestCondition_conditionsPoints_fdb634b0',
        conditionsDescription: 'InfiniteQuestCondition_conditionsDescription_344304d7',
        conditionsPointsItem: 'InfiniteQuestCondition_conditionsPointsItem_f0afed2e',
        conditionsPointsDelimeter: 'InfiniteQuestCondition_conditionsPointsDelimeter_b4fe04b9',
        conditionsPointsTotal: 'InfiniteQuestCondition_conditionsPointsTotal_e51213fa',
        currentPoint: 'InfiniteQuestCondition_currentPoint_a408de84',
        currentPointItem: 'InfiniteQuestCondition_currentPointItem_f1a3f78a',
        currentPointItem__enter: 'InfiniteQuestCondition_currentPointItem__enter_e12cb88d',
        currentPointItem__exit: 'InfiniteQuestCondition_currentPointItem__exit_75d8133e',
    },
    rs = a(({ points: e, className: t, delay: s }) => {
        const { model: n } = Ee(),
            { maximumPoints: a } = n.infiniteCondition.get(),
            o = W();
        return i.jsx('div', {
            className: r(is.base, t),
            children: i.jsxs('div', {
                className: is.conditionsPoints,
                children: [
                    i.jsx('div', {
                        className: is.conditionsDescription,
                        children: R.strings.fun_random.progression.infinite.pointsEarned(),
                    }),
                    i.jsx(A, {
                        text: R.strings.fun_random.progression.steps(),
                        className: r(is.conditionsPointsItem, is.conditionsPointsItem__divider),
                        params: {
                            done: i.jsx(g, {
                                className: is.currentPoint,
                                children: i.jsx(
                                    u,
                                    {
                                        nodeRef: o.getOrCreate(e),
                                        timeout: s,
                                        onExited: () => {
                                            C.sound(ie.EvFepCounterChange);
                                        },
                                        classNames: {
                                            enter: is.currentPointItem__enter,
                                            exit: is.currentPointItem__exit,
                                        },
                                        children: i.jsx('div', {
                                            ref: o.getOrCreate(e),
                                            className: is.currentPointItem,
                                            children: e,
                                        }),
                                    },
                                    `points-${e}`,
                                ),
                            }),
                            delimeter: i.jsx('div', {
                                className: is.conditionsPointsDelimeter,
                                children: R.strings.common.common.slash(),
                            }),
                            total: i.jsx('div', { className: is.conditionsPointsTotal, children: a }),
                        },
                    }),
                ],
            }),
        });
    }),
    os = 'InfiniteProgression_e5621169',
    ds = 'InfiniteProgression_content_68048581',
    cs = 'InfiniteProgression_questContainer_dd770113',
    ls = 'InfiniteProgression_questCondition_ec8c8f62',
    _s = a(() => {
        const e = y(),
            { model: t } = Ee(),
            s = t.computes.needChangePage(),
            { prevCompleteCount: n, completeCount: a, prevPoints: r, currentPoints: d } = t.infiniteCondition.get(),
            [c, l] = o.useState({ previous: r, current: d }),
            [_, g] = o.useState(n),
            u = s ? 3100 : 2500,
            m = c.previous === c.current && _ === a;
        return (
            o.useEffect(
                () => (
                    l({ previous: r, current: d }),
                    g(n),
                    e.run(() => {
                        (l((e) => ({ previous: e.current, current: e.current })), g(a));
                    }, u),
                    () => {
                        e.clear();
                    }
                ),
                [a, e, u, r, d, n],
            ),
            i.jsxs('div', {
                className: os,
                children: [
                    i.jsx(qt, {}),
                    i.jsxs('div', {
                        className: ds,
                        children: [
                            i.jsx(as, { startAllowed: m, progressLevelUps: a - n }),
                            i.jsxs('div', {
                                className: cs,
                                children: [
                                    i.jsx(Ht, { progress: _, infinite: !0 }),
                                    i.jsx(rs, { className: ls, delay: a - n > 0 ? 3400 : 1e3, points: c.previous }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    gs = 'CurrentPoints_bd285292',
    us = 'CurrentPoints_prev_5b103642',
    ms = 'CurrentPoints_base__oneQuest_3970c66e',
    ps = 'CurrentPoints_current_4d4f9a08',
    fs = 'CurrentPoints_text_3c1f1e29',
    hs = ({ prevPoints: e, currentPoints: t, animate: s, className: n, oneQuest: a }) => (
        o.useEffect(() => {
            s && e !== t && C.sound(ie.EvFepCounterChange);
        }, [s, t, e]),
        s && e !== t
            ? i.jsxs('div', {
                  className: r(gs, a && ms, n),
                  children: [
                      i.jsx('div', { className: fs, children: t }),
                      i.jsx('div', { className: us, children: e }),
                      i.jsx('div', { className: ps, children: t }),
                  ],
              })
            : i.jsx('div', { className: r(gs, a && ms, n), children: e })
    ),
    bs = {
        root: 'QuestsList_root_cd14c93',
        base: 'QuestsList_5b287364',
        base__hide: 'QuestsList_base__hide_de43f8d1',
        oneQuest: 'QuestsList_oneQuest_dffa979c',
        oneQuest__completed: 'QuestsList_oneQuest__completed_55c075d3',
        twoQuests: 'QuestsList_twoQuests_cd14c93',
        severalQuests: 'QuestsList_severalQuests_e2a33221',
        questsList: 'QuestsList_questsList_38ec8ac8',
        quest: 'QuestsList_quest_bd9ab1be',
        base__upscaled: 'QuestsList_base__upscaled_cd14c93',
        currentProgress: 'QuestsList_currentProgress_3e4085e8',
        currentProgressTitle: 'QuestsList_currentProgressTitle_430de4c2',
        currentProgressPoints: 'QuestsList_currentProgressPoints_ac8286e2',
        currentProgressPointsDelimeter: 'QuestsList_currentProgressPointsDelimeter_cd14c93',
        currentProgressPointsTotal: 'QuestsList_currentProgressPointsTotal_90c5eea5',
        currentProgressPointsEarned: 'QuestsList_currentProgressPointsEarned_158dc815',
        'completed-congrats': 'QuestsList_completed-congrats_cd14c93',
        'completed-glow': 'QuestsList_completed-glow_cd14c93',
        'card-show': 'QuestsList_card-show_cd14c93',
        'card-show-presentment': 'QuestsList_card-show-presentment_cd14c93',
        edge: 'QuestsList_edge_cd14c93',
        dissolve: 'QuestsList_dissolve_cd14c93',
        'blink-edge': 'QuestsList_blink-edge_cd14c93',
        blink: 'QuestsList_blink_cd14c93',
        'show-down': 'QuestsList_show-down_cd14c93',
        'show-up': 'QuestsList_show-up_cd14c93',
        show: 'QuestsList_show_cd14c93',
        hide: 'QuestsList_hide_cd14c93',
        showGlow: 'QuestsList_showGlow_cd14c93',
        hideGlow: 'QuestsList_hideGlow_cd14c93',
        pointFadeOut: 'QuestsList_pointFadeOut_cd14c93',
        pointFadeIn: 'QuestsList_pointFadeIn_cd14c93',
        first2void: 'QuestsList_first2void_cd14c93',
        second2firstTranslate: 'QuestsList_second2firstTranslate_cd14c93',
        second2firstRotate: 'QuestsList_second2firstRotate_cd14c93',
        third2second: 'QuestsList_third2second_cd14c93',
    },
    Cs = 'severalQuests',
    vs = { 1: 'oneQuest', 2: 'twoQuests' },
    ws = a(({ className: e }) => {
        const { model: t } = Ee(),
            { assetsPointer: s } = t.root.get(),
            n = t.condition.prevPoints.get(),
            a = t.condition.currentPoints.get(),
            o = t.condition.maximumPoints.get(),
            { completedWithAnimation: d, completedNoAnimation: c } = t.computes.finalAnimationStatus(),
            l = t.cardsFan.model.progress.state.runCounter.get(),
            _ = t.quests.get().length,
            g = _ in vs ? vs[_] : Cs;
        const u = _ > 0 ? t.computes.quest(0).state : Mt.Active,
            { upscale: m } = D(),
            { dynamicTexts: p } = Z('progression', { assetsPointer: s });
        return c
            ? null
            : i.jsx('div', {
                  className: r(bs.base, d && bs.base__hide, m && bs.base__upscaled, e),
                  children: i.jsxs('div', {
                      className: r(bs[g], bs[`${g}__${u}`]),
                      children: [
                          i.jsx('div', {
                              className: bs.questsList,
                              children: v(_, (e) => i.jsx(Ht, { className: bs.quest, index: e }, e)),
                          }),
                          i.jsx('div', {
                              className: bs.currentProgress,
                              children:
                                  _ > 1
                                      ? i.jsx(A, {
                                            text: p.questsList.totalPointsEarned(),
                                            className: bs.currentProgressTitle,
                                            params: {
                                                progressionSteps: i.jsx(A, {
                                                    text: R.strings.fun_random.progression.steps(),
                                                    className: bs.currentProgressPoints,
                                                    params: {
                                                        done: i.jsx(hs, {
                                                            className: bs.currentProgressPointsEarned,
                                                            prevPoints: n,
                                                            currentPoints: a,
                                                            animate: l,
                                                        }),
                                                        delimeter: i.jsx('span', {
                                                            className: bs.currentProgressPointsDelimeter,
                                                            children: R.strings.common.common.slash(),
                                                        }),
                                                        total: i.jsx('span', {
                                                            className: bs.currentProgressPointsTotal,
                                                            children: o,
                                                        }),
                                                    },
                                                }),
                                            },
                                        })
                                      : i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx('div', {
                                                    className: bs.currentProgressTitle,
                                                    children: p.questsList.totalPointsEarnedStandAloneTitle(),
                                                }),
                                                i.jsx(A, {
                                                    text: R.strings.fun_random.progression.steps(),
                                                    className: bs.currentProgressPoints,
                                                    params: {
                                                        done: i.jsx(hs, {
                                                            className: bs.currentProgressPointsEarned,
                                                            prevPoints: n,
                                                            currentPoints: a,
                                                            animate: l,
                                                            oneQuest: !0,
                                                        }),
                                                        delimeter: i.jsx('span', {
                                                            className: bs.currentProgressPointsDelimeter,
                                                            children: R.strings.common.common.slash(),
                                                        }),
                                                        total: i.jsx('span', {
                                                            className: bs.currentProgressPointsTotal,
                                                            children: o,
                                                        }),
                                                    },
                                                }),
                                            ],
                                        }),
                          }),
                      ],
                  }),
              });
    }),
    xs = 'RandomRewardsButton_bd7652e0',
    Is = 'RandomRewardsButton_image_eaeef14d',
    Ns = 'RandomRewardsButton_text_52bc847e',
    Ps = 'small',
    Rs = 'medium',
    Es = 'big',
    Ts = (e, t) => te(e).progression.random_rewards.$dyn(`random_rewards_icon_${t}`),
    js = ({ assetsPointer: e, onClick: t, className: s }) => {
        const { dynamicTexts: n } = Z('progression', { assetsPointer: e }),
            a = T({ size: Ps }, { medium: { size: Rs }, large: { size: Es } });
        return i.jsxs('div', {
            className: r(xs, s),
            onMouseEnter: () => C.highlight(),
            onClick: () => {
                (C.click(), t());
            },
            children: [
                i.jsx('div', { className: Is, style: { backgroundImage: `url(${Ts(e, a.size)})` } }),
                i.jsx('div', { className: Ns, children: n.cardsFan.listOfRandomRewards() }),
            ],
        });
    },
    As = {
        root: 'App_root_0',
        base: 'App_1a4bd1cf',
        show: 'App_show_0',
        content: 'App_content_e29c7c37',
        close: 'App_close_d55d7839',
        info: 'App_info_c1728d0c',
        debugButton: 'App_debugButton_f2fdf10c',
        bg: 'App_bg_a782f950',
        progressionContainer: 'App_progressionContainer_faa1103d',
        base__completed: 'App_base__completed_0',
        ordinaryProgression: 'App_ordinaryProgression_e16aabae',
        questsList: 'App_questsList_c9f28c71',
        cardProgressionContainer: 'App_cardProgressionContainer_88df5eaa',
        base__cursor_default: 'App_base__cursor_default_0',
        base__cursor_grab: 'App_base__cursor_grab_0',
        base__cursor_grabbing: 'App_base__cursor_grabbing_0',
        cardProgression: 'App_cardProgression_3fc64077',
        base__completedAnimated: 'App_base__completedAnimated_0',
        toRandomRewards: 'App_toRandomRewards_1b8efbf0',
        completedProgression: 'App_completedProgression_b368c482',
        'completed-congrats': 'App_completed-congrats_0',
        'completed-glow': 'App_completed-glow_0',
        'card-show': 'App_card-show_0',
        'card-show-presentment': 'App_card-show-presentment_0',
        edge: 'App_edge_0',
        dissolve: 'App_dissolve_0',
        'blink-edge': 'App_blink-edge_0',
        blink: 'App_blink_0',
        'show-down': 'App_show-down_0',
        'show-up': 'App_show-up_0',
        hide: 'App_hide_0',
        showGlow: 'App_showGlow_0',
        hideGlow: 'App_hideGlow_0',
        pointFadeOut: 'App_pointFadeOut_0',
        pointFadeIn: 'App_pointFadeIn_0',
        first2void: 'App_first2void_0',
        second2firstTranslate: 'App_second2firstTranslate_0',
        second2firstRotate: 'App_second2firstRotate_0',
        third2second: 'App_third2second_0',
    },
    Ss = a(() => {
        const { model: e, controls: t } = Ee(),
            { completedWithAnimation: s, completedNoAnimation: n } = e.computes.finalAnimationStatus(),
            a = e.computes.pageStatus(),
            c = e.computes.needChangePage(),
            { cursor: l } = e.cardsFan.computes,
            { assetsPointer: g } = e.root.get(),
            u = o.useRef(null),
            { isActive: m, isInfinite: p, isCompleted: f } = _e(a),
            [h, b] = o.useState(p && !c),
            [v, w] = o.useState(!1);
        (Y(t.close),
            o.useEffect(() => {
                b(p && !c);
            }, [p, c]));
        const [x, I] = d(() => ({
            from: { opacity: 1, transform: 'translateY(0rem)' },
            config: { duration: 500 },
            onRest: () => b(!0),
            onStart: () => {
                (C.sound(ie.EvFepInfStepTransition), w(!0));
            },
        }));
        return (
            o.useEffect(() => {
                p && c && I.start({ to: { opacity: 0, transform: 'translateY(20rem)' }, delay: 800 });
            }, [p, c, I, m]),
            o.useEffect(() => {
                v && (t.cardsFun.setState(re.Blocked), t.cardsFun.setAssembled(!0));
            }, [t.cardsFun, v]),
            i.jsxs('div', {
                className: r(
                    As.base,
                    As[`base__${a}`],
                    As[`base__cursor_${l.get()}`],
                    f && As.base__completed,
                    s && As.base__completedAnimated,
                ),
                children: [
                    i.jsx('div', {
                        className: As.bg,
                        style: { backgroundImage: `url('${te(g).library.progression_bg()}')` },
                    }),
                    i.jsxs('div', {
                        className: As.content,
                        children: [
                            h
                                ? i.jsx(_s, {})
                                : i.jsx('div', {
                                      className: As.progressionContainer,
                                      children: i.jsxs(_.div, {
                                          style: x,
                                          className: As.ordinaryProgression,
                                          children: [
                                              i.jsx($e, { className: As.header }),
                                              i.jsx(ws, { className: As.questsList }),
                                              i.jsx('div', {
                                                  className: As.cardProgressionContainer,
                                                  ref: u,
                                                  children: i.jsx(_t, {
                                                      className: As.cardProgression,
                                                      containerRef: u,
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                            f && i.jsx('div', { className: As.completedProgression, children: i.jsx(qt, {}) }),
                        ],
                    }),
                    !n && i.jsx(js, { className: As.toRandomRewards, onClick: t.onOpenTierList, assetsPointer: g }),
                ],
            })
        );
    });
U(i.jsx(Re, { children: i.jsx(X, { children: i.jsx(J, { children: i.jsx(Ss, {}) }) }) }), { fullScreen: !0 }).then(() =>
    K(document.getElementById('root')),
);
