import {
    w as e,
    Y as t,
    Z as s,
    x as n,
    y as a,
    j as i,
    z as o,
    r,
    $ as d,
    a0 as c,
    A as l,
    a1 as _,
    a2 as g,
    a3 as u,
    a4 as m,
    a5 as p,
} from '../../../chunks/vendor.js';
import {
    m as f,
    d as h,
    e as b,
    c_ as C,
    h as v,
    G as w,
    a9 as x,
    cB as I,
    c$ as N,
    a as P,
    c as E,
    g as T,
    N as j,
    u as A,
    d0 as S,
    F,
    cE as Q,
    o as L,
    Q as y,
    U as k,
    aW as D,
    aC as q,
    J as M,
    cw as $,
    bA as O,
    cb as z,
    d1 as B,
    d2 as G,
    d3 as V,
    aJ as W,
    B as H,
    a8 as Y,
    p as U,
    a6 as X,
    cF as J,
    a5 as Z,
    a7 as K,
} from '../../../chunks/lib.js';
import { c as ee, a as te, g as se } from '../../../chunks/readResource.js';
import { F as ne } from '../../../chunks/fun_random_progression_state.js';
var ae = ((e) => (
        (e.Inactive = 'inactive'),
        (e.Active = 'active'),
        (e.Detached = 'detached'),
        (e.Detaching = 'detaching'),
        (e.DetachingActive = 'detaching_active'),
        (e.Deactivating = 'deactivating'),
        (e.Activating = 'activating'),
        e
    ))(ae || {}),
    ie = ((e) => ((e.None = 'none'), (e.HidingGlow = 'hiding_glow'), (e.ShowingGlow = 'showing_glow'), e))(ie || {}),
    oe = ((e) => (
        (e.EvFepCounterChange = 'ev_fep_counter_change'),
        (e.EvFepTearOffCard = 'ev_fep_tear_off_card'),
        (e.EvFepCongratulate = 'ev_fep_congratulate'),
        (e.EvFepCardStartMove = 'ev_fep_card_start_move'),
        (e.EvFepCardStopMove = 'ev_fep_card_stop_move'),
        (e.EvFepCardChange = 'ev_fep_card_change'),
        (e.EvFepInfStepTransition = 'ev_fep_inf_step_transition'),
        (e.RtpcExtFepWheelRotation = 'RTPC_ext_fep_wheel_rotation'),
        e
    ))(oe || {}),
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
    de = ((e) => (
        (e[(e.Init = 0)] = 'Init'),
        (e[(e.Detaching = 1)] = 'Detaching'),
        (e[(e.Scroll = 2)] = 'Scroll'),
        (e[(e.Finish = 3)] = 'Finish'),
        e
    ))(de || {}),
    ce = ((e) => (
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
    ))(ce || {});
const le = (e, t) =>
        f(e, (e) => ({
            name: e.name,
            image: v(e, t),
            value: e.value,
            special: C[e.overlayType],
            valueType: b(e.name),
            tooltipArgs: h({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
        })),
    _e = {
        [ne.DISABLED]: ne.DISABLED,
        [ne.ACTIVE_FINAL]: ne.ACTIVE_FINAL,
        [ne.ACTIVE_RESETTABLE]: ne.ACTIVE_RESETTABLE,
        [ne.ACTIVE_INFINITE_FINAL]: ne.ACTIVE_FINAL,
        [ne.ACTIVE_INFINITE_RESETTABLE]: ne.ACTIVE_RESETTABLE,
        [ne.COMPLETED_FINAL]: ne.ACTIVE_FINAL,
        [ne.COMPLETED_RESETTABLE]: ne.ACTIVE_RESETTABLE,
    },
    ge = (e) => ({
        isActive: [ne.ACTIVE_FINAL, ne.ACTIVE_RESETTABLE].includes(e),
        isInfinite: [ne.ACTIVE_INFINITE_FINAL, ne.ACTIVE_INFINITE_RESETTABLE].includes(e),
        isCompleted: [ne.COMPLETED_FINAL, ne.COMPLETED_RESETTABLE].includes(e),
        isResettable: [ne.ACTIVE_RESETTABLE, ne.COMPLETED_RESETTABLE, ne.ACTIVE_INFINITE_RESETTABLE].includes(e),
    }),
    ue = (e, t, s) => Math.min(s, Math.max(t, e)),
    me = (e, t, s) => Math.min(t, Math.max(s, e)),
    pe = () => {
        const s = { rotation: e.box(0), changeTime: e.box(new Date()), filled: e.box(!1) },
            n = t((e, t) => {
                (s.rotation.set(e), s.changeTime.set(t), s.filled.set(!0));
            }),
            a = t(() => {
                s.filled.set(!1);
            });
        return { ...s, setRotation: n, clear: a };
    },
    fe = (s, n) => {
        const a = (e) =>
                t((...t) => {
                    if (n.userActionsAllowed.get()) return e(...t);
                }),
            i = t((e) => {
                s.state.set(e);
            }),
            o = t(() => {
                (s.rotationStats.prev.clear(), s.rotationStats.last.setRotation(s.currentRotation.get(), new Date()));
            }),
            r = t((e) => {
                (s.rotationStats.prev.setRotation(
                    s.rotationStats.last.rotation.get(),
                    s.rotationStats.last.changeTime.get(),
                ),
                    s.rotationStats.last.setRotation(e, new Date()),
                    s.currentRotation.set(e));
            }),
            d = t((e) => {
                s.targetRotation.set(me(e, n.minRotation.get(), n.maxRotation.get()));
            }),
            c = t(() => {
                if (s.progress.finalCard.get() !== s.progress.currentCard.get()) {
                    i(re.ShowProgress);
                    const e = -s.cardRotation.get() * s.progress.currentCard.get();
                    r(me(e, n.minRotation.get(), n.maxRotation.get()));
                } else (v[ce.RunCounter](), i(re.Idle));
            }),
            l = t((e) => {
                const t = (-s.cardRotation.get() * (e - 1)) / 2,
                    a = me(t, n.minRotation.get(), n.maxRotation.get());
                s.currentRotation.get() === a
                    ? (g(!0), i(re.Blocked), w.sound(oe.EvFepCongratulate))
                    : (i(re.FinalAnimation), d(t));
            }),
            _ = t((t, a, o, l, _, u) => {
                if (
                    (s.cardsCount.set(t),
                    s.progress.currentCard.set(a),
                    s.progress.finalCard.set(o),
                    s.progress.state.cards.push(
                        ...x(t, (t) => {
                            return (
                                (s = ((e, t, s) =>
                                    s ? ae.Detached : e === t ? ae.Active : e > t ? ae.Detached : ae.Inactive)(
                                    a,
                                    t,
                                    u,
                                )),
                                (n = ie.None),
                                { state: e.box(s), animation: e.box(n) }
                            );
                            var s, n;
                        }),
                    ),
                    l)
                )
                    (r(-s.cardRotation.get() * n.maxRightCard.get()),
                        i(re.FirstAnimation),
                        d(-s.cardRotation.get() * a));
                else if (u) {
                    const e = (-s.cardRotation.get() * (t - 1)) / 2;
                    (r(e), d(e), g(!0), i(re.Blocked));
                } else {
                    const e = ue(a, n.minLeftCard.get(), n.maxRightCard.get());
                    (_ || r(-s.cardRotation.get() * e), d(s.currentRotation.get()), a !== o ? c() : v[ce.RunCounter]());
                }
            }),
            g = t((e) => {
                s.assembled.set(e);
            }),
            u = a((e) => {
                const t = me(
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
                    o = a && Math.max(1, a);
                (m(o ? i / o : i),
                    s.dragging.lastMousePosition.set(t),
                    s.targetRotation.set(s.targetRotation.get() + s.dragging.speed.get()));
            }),
            b = t((e, t) => {
                var n;
                e >= 0 &&
                    e < s.progress.state.cards.length &&
                    (null == (n = s.progress.state.cards[e]) || n.state.set(t));
            }),
            C = t((e, t) => {
                var n;
                e >= 0 &&
                    e <= s.progress.state.cards.length &&
                    (null == (n = s.progress.state.cards[e]) || n.animation.set(t));
            }),
            v = {
                [ce.RunCounter]: t(() => {
                    s.progress.state.runCounter.set(!0);
                }),
                [ce.Detach]: t(() => {
                    (b(s.progress.currentCard.get(), ae.DetachingActive), s.progress.animation.set(de.Detaching));
                }),
                [ce.HideGlow]: t(() => {
                    C(s.progress.currentCard.get(), ie.HidingGlow);
                }),
                [ce.DeactivateCurrent]: t(() => {
                    b(s.progress.currentCard.get(), ae.Deactivating);
                }),
                [ce.ActivateNext]: t(() => {
                    const e = s.progress.currentCard.get() + 1;
                    (b(e, ae.Activating), s.progress.currentCard.set(e));
                }),
                [ce.ShowGlow]: t(() => {
                    C(s.progress.currentCard.get(), ie.ShowingGlow);
                }),
                [ce.FinishActivating]: t(() => {
                    const e = s.progress.currentCard.get() - 1;
                    b(e, ae.Detached);
                }),
                [ce.Scroll]: t(() => {
                    s.progress.animation.set(de.Scroll);
                    const e = me(
                        -s.cardRotation.get() * s.progress.currentCard.get(),
                        n.minRotation.get(),
                        n.maxRotation.get(),
                    );
                    d(e);
                }),
                [ce.Finish]: t(() => {
                    (s.progress.finalCard.get() < s.cardsCount.get() && b(s.progress.finalCard.get(), ae.Active),
                        s.progress.animation.set(de.Finish),
                        i(re.Idle));
                }),
            };
        return {
            initCardsFan: _,
            startRotation: o,
            scroll: u,
            runProgressionAnimation: c,
            runFinalAnimation: l,
            setAssembled: g,
            setState: i,
            setCurrentRotation: r,
            setTargetRotation: d,
            setDraggingSpeed: m,
            startDragging: p,
            stopDragging: f,
            drag: h,
            progress: v,
        };
    },
    he = [re.FirstAnimation, re.ShowProgress, re.FinalAnimation, re.Blocked],
    be = [{ duration: 500, action: ce.Scroll }],
    Ce = [{ action: ce.FinishActivating }],
    ve = [{ delay: 200, action: ce.Finish }],
    we = [{ duration: 300, action: ce.ShowGlow }],
    xe = [...be, { delay: 100, duration: 400, action: ce.RunCounter }, { duration: 300, action: ce.HideGlow }],
    Ie = [
        { delay: 100, duration: 700, action: ce.Detach },
        { delay: 300, action: ce.DeactivateCurrent },
        { duration: 300, action: ce.ActivateNext },
    ],
    Ne = {
        [re.Idle]: {},
        [re.Scrolling]: { duration: 400, easing: I.linear },
        [re.Dragging]: { duration: 400, easing: I.easeOutQuint },
        [re.InertialMovement]: { duration: 800, easing: I.linear },
        [re.FirstAnimation]: { duration: 1e4, easing: I.easeInOutQuint },
        [re.Normalization]: { duration: 1e3, easing: I.easeOutQuint },
        [re.OverflowNormalization]: { duration: 300, easing: I.easeOutQuint },
        [re.ShowProgress]: { duration: 500, easing: I.easeOutQuint },
        [re.FinalAnimation]: { duration: 2e3, easing: I.easeInOutQuint },
        [re.Blocked]: { duration: 0 },
    },
    Pe = (e) => {
        if ('object' != typeof e) return !1;
        const t = e;
        return (
            'string' == typeof (null == t ? void 0 : t.ordinary) &&
            'string' == typeof (null == t ? void 0 : t.epic) &&
            'string' == typeof (null == t ? void 0 : t.rare) &&
            'string' == typeof (null == t ? void 0 : t.unusual) &&
            'string' == typeof (null == t ? void 0 : t.legendary)
        );
    },
    Ee = {
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
    [Re, Te] = P()(
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
                        const t = T(a.quests.get(), e);
                        if (!t) throw new Error(`Unexpected quest index: ${e}`);
                        return { ...t };
                    },
                    { equals: E },
                ),
                o = n(
                    () => {
                        const e = T(a.infiniteQuests.get(), 0);
                        return e ? { ...e } : null;
                    },
                    { equals: E },
                ),
                r = n(
                    (e, t, s = !1) => {
                        const n = s ? a.infiniteStage.get() : T(a.stages.get(), e);
                        if (!n) throw new Error(`Unexpected card index: ${e}`);
                        const i = e + 1,
                            o = _.cardState(e);
                        return { ...n, rewards: le(n.rewards, t), cardNumber: i, progressionState: o };
                    },
                    { equals: E },
                ),
                d = n(() => {
                    const e =
                        a.condition.currentPoints.get() === a.condition.maximumPoints.get() ? a.stages.get().length : 0;
                    return j(a.stages.get(), (e) => !e.isCompleted) || e;
                }),
                c = n(() => {
                    const e = T(a.stages.get(), 0);
                    if (e && e.requiredPoints > a.condition.prevPoints.get()) return 0;
                    const t = a.stages.get().length - 1;
                    return j(a.stages.get(), (e) => e.requiredPoints > a.condition.prevPoints.get()) || t;
                }),
                l = (({ cardRotation: t, displayCardsCount: s }) => ({
                    cardRotation: e.box(t),
                    displayCardsCount: e.box(s),
                    cardsCount: e.box(0),
                    state: e.box(re.Idle),
                    currentRotation: e.box(0),
                    targetRotation: e.box(0),
                    assembled: e.box(!1),
                    rotationStats: { prev: pe(), last: pe() },
                    progress: {
                        currentCard: e.box(0),
                        animation: e.box(de.Init),
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
                        i = s(() => x(e.cardsCount.get(), (t) => ({ key: t, order: e.cardsCount.get() - t - 1 }))),
                        o = s(() =>
                            ue(
                                Math.round(
                                    (Math.abs(e.currentRotation.get()) / (e.cardRotation.get() * e.cardsCount.get())) *
                                        e.cardsCount.get(),
                                ),
                                t.get(),
                                a.get(),
                            ),
                        ),
                        r = s(
                            () => Math.max(0, ue(o.get(), t.get(), a.get())) - Math.ceil(e.displayCardsCount.get() / 2),
                        ),
                        d = s(() => Math.min(e.cardsCount.get(), o.get()) + Math.ceil(e.displayCardsCount.get() / 2)),
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
                                ? { ...Ne[re.FirstAnimation], duration: 150 * e.cardsCount.get() }
                                : Ne[e.state.get()],
                        ),
                        u = s(() => !he.includes(e.state.get())),
                        m = s(() => {
                            const s = [];
                            s.push(...xe);
                            for (let n = e.progress.currentCard.get(); n < e.progress.finalCard.get(); n++) {
                                const e = n >= t.get();
                                (s.push(...Ie), e && s.push(...be), s.push(...Ce));
                            }
                            return (e.progress.finalCard.get() < e.cardsCount.get() && s.push(...we), s.push(...ve), s);
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
                            return 0 !== s ? N(-0.4, 0.4, t / s) / -0.4 : void 0;
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
                        currentCard: o,
                        minVisibleCard: r,
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
                    l.progress.animation.get() === de.Finish
                        ? a.state.get().status
                        : _e[a.state.get().status],
                ),
                m = n(() => {
                    const e = g(),
                        t = u(),
                        { isCompleted: s } = ge(t);
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
                                'string' == typeof (null == t ? void 0 : t.pointsValueFontColor) &&
                                'string' == typeof (null == t ? void 0 : t.rewardCounterFontColor) &&
                                Pe(null == t ? void 0 : t.stagesFontColors) &&
                                Pe(null == t ? void 0 : t.pointsTitleFontColors)
                            );
                        })(t)
                            ? t
                            : Ee
                    );
                });
            return {
                ...a,
                cardsFan: { model: l, computes: _ },
                computes: {
                    quest: i,
                    card: r,
                    cardActiveIndex: d,
                    progressAnimationStartFrom: c,
                    infiniteQuest: o,
                    pageStatus: u,
                    needChangePage: g,
                    finalAnimationStatus: m,
                    modeViewSettings: p,
                },
            };
        },
        ({ externalModel: e, model: t }) => ({
            cardsFun: fe(t.cardsFan.model, t.cardsFan.computes),
            close: e.createCallbackNoArgs('onClose'),
            showInfo: e.createCallbackNoArgs('onShowInfo'),
            onOpenTierList: e.createCallbackNoArgs('onOpenTierList'),
        }),
    ),
    je = 'Timer_d6719c38',
    Ae = 'Timer_base__hide_9f6d0c7b',
    Se = 'Timer_titleSeparatorLeft_6ee5dd6c',
    Fe = 'Timer_titleSeparatorRight_e3f1bac1',
    Qe = 'Timer_line_3fed6cdc',
    Le = 'Timer_point_601094e8',
    ye = 'Timer_questsRenewTimerTitle_1ba29c0d',
    ke = 'Timer_completedResettable_9d2f849c',
    De = 'Timer_secondLine_461c25ce',
    qe = 'Timer_countdown_11b34534',
    Me = R.strings.fun_random.progression.questsList,
    $e = a(({ oneline: e, classNames: t }) => {
        const { model: s } = Te(),
            n = s.computes.pageStatus(),
            { isInfinite: a, isCompleted: r, isResettable: d } = ge(n),
            { completedWithAnimation: c } = s.computes.finalAnimationStatus(),
            l = s.infiniteCondition.get(),
            _ = { statusTimer: s.condition.statusTimer.get() },
            { statusTimer: g } = a ? l : _,
            u = A(
                { onelineSize: S.x16x16, completedResettableSize: S.x24x24 },
                {
                    medium: { onelineSize: S.x24x24, completedResettableSize: S.x32x32 },
                    large: { onelineSize: S.x24x24, completedResettableSize: S.x48x48 },
                    extraLarge: { onelineSize: S.x32x32, completedResettableSize: S.x48x48 },
                },
            );
        return i.jsxs('div', {
            className: o(je, c && Ae, t),
            children: [
                i.jsxs('div', {
                    className: Se,
                    children: [i.jsx('div', { className: Qe }), i.jsx('div', { className: Le })],
                }),
                e
                    ? i.jsx(F, {
                          className: ye,
                          text: Me.questsFinishTimerOnelineTitle(),
                          params: { time: i.jsx(Q, { start: g, className: qe, size: u.onelineSize }) },
                      })
                    : i.jsxs('div', {
                          className: ke,
                          children: [
                              i.jsx('div', {
                                  className: ye,
                                  children: r && d ? Me.questsRenewTimerTitle() : Me.questsFinishTimerTitle(),
                              }),
                              i.jsx('div', {
                                  className: De,
                                  children: i.jsx(Q, { start: g, className: qe, size: u.completedResettableSize }),
                              }),
                          ],
                      }),
                i.jsxs('div', {
                    className: Fe,
                    children: [i.jsx('div', { className: Le }), i.jsx('div', { className: Qe })],
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
    ze = a(({ className: e }) => {
        const { model: t } = Te(),
            s = t.computes.pageStatus(),
            { completedWithAnimation: n, completedNoAnimation: a } = t.computes.finalAnimationStatus(),
            { isActive: r } = ge(s),
            { assetsPointer: d } = t.root.get(),
            { dynamicTexts: c } = ee('progression', { assetsPointer: d });
        return a
            ? null
            : i.jsxs('div', {
                  className: o(Oe.base, n && Oe.base__hide, r && Oe.base__active, e),
                  children: [
                      i.jsx('div', { className: Oe.title, children: c.title() }),
                      i.jsx('div', { className: Oe.timer, children: i.jsx($e, { oneline: !0 }) }),
                  ],
              });
    }),
    Be = 'edge',
    Ge = 'base',
    Ve = ({ imagesRoot: e, partName: t, rarity: s, size: n }) => `url(${e.$dyn(t).$dyn(`${s}_${n}_1`)})`;
function We(e, t) {
    const s = L.resolve('images'),
        n = te(e);
    return s.readOrEmpty(`${n}.progression.cards.common.${t}`, 'silent');
}
const He = {
        root: 'CardEdge_root_f2682522',
        base: 'CardEdge_bfb9e3',
        base__active: 'CardEdge_base__active_87816021',
        base__big: 'CardEdge_base__big_a0bd992',
        base__detached: 'CardEdge_base__detached_f2682522',
        base__deactivating: 'CardEdge_base__deactivating_cc80ab9b',
        base__detaching: 'CardEdge_base__detaching_f2682522',
        base__detaching_active: 'CardEdge_base__detaching_active_47dc97b9',
        edge: 'CardEdge_edge_f2682522',
        shadow: 'CardEdge_shadow_38024ae6',
        base__inactive: 'CardEdge_base__inactive_f2682522',
        pattern: 'CardEdge_pattern_5d54af04',
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
    Ye = a(({ index: e = 0, state: t, rewardsSize: s, infinite: n, classMix: a }) => {
        const { model: r } = Te(),
            { assetsPointer: d } = r.root.get(),
            { progressionState: c, rarity: l, requiredPoints: _ } = r.computes.card(e, s, n),
            { pointsValueFontColor: g, pointsTitleFontColors: u } = r.computes.modeViewSettings(),
            m = t || (null == c ? void 0 : c.state),
            p = null == c ? void 0 : c.animation,
            f = se(d).progression.cards,
            h = Ve({ imagesRoot: f, partName: Be, rarity: l, size: s }),
            b = We(d, 'pattern');
        return i.jsxs('div', {
            className: o(
                He.edge,
                He.base,
                He[`base__${l}`],
                He[`base__animation_${p}`],
                s === y.Big && He.base__big,
                He[`base__${m}`],
                null == a ? void 0 : a.edge,
            ),
            style: { backgroundImage: h },
            children: [
                i.jsx('div', { className: He.blinkEdge }),
                i.jsx('div', {
                    className: He.pointsTitle,
                    style: { color: u[l] },
                    children: i.jsx('div', { children: R.strings.fun_random.progression.cards.points() }),
                }),
                i.jsx('div', {
                    className: He.pointsValue,
                    style: { color: g },
                    children: i.jsx('div', { children: _ }),
                }),
                b &&
                    i.jsx('div', {
                        className: o(He.pattern, null == a ? void 0 : a.pattern),
                        style: { maskImage: h, backgroundImage: `url(${b})` },
                    }),
                i.jsx('div', { className: o(He.shadow, null == a ? void 0 : a.shadow), style: { maskImage: h } }),
            ],
        });
    }),
    Ue = {
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
        shadow: 'CardContent_shadow_879bdc41',
        base__inactive: 'CardContent_base__inactive_d7ebe82e',
        pattern: 'CardContent_pattern_cdcaa9ef',
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
    Xe = a(({ index: e = 0, state: t, rewardsSize: s, infinite: n, classMix: a }) => {
        const { model: r } = Te(),
            { assetsPointer: d } = r.root.get(),
            { progressionState: c, rarity: l, cardNumber: _, rewards: g } = r.computes.card(e, s, n),
            { stagesFontColors: u } = r.computes.modeViewSettings(),
            { rewardCounterFontColor: m } = r.computes.modeViewSettings(),
            p = t || (null == c ? void 0 : c.state),
            f = se(d).progression.cards,
            h = Ve({ imagesRoot: f, partName: Ge, rarity: l, size: s }),
            b = String(f.infinity_sign.$dyn(l)),
            C = We(d, 'reward_background'),
            v = We(d, 'pattern');
        return i.jsxs('div', {
            className: o(
                Ue.base,
                Ue[`base__${l}`],
                Ue[`base__${s}`],
                Ue[`base__${p}`],
                n && Ue.base__infinite,
                null == a ? void 0 : a.content,
            ),
            children: [
                i.jsx('div', {
                    className: Ue.rewards,
                    children: x(4, (e) => {
                        const t = g.length > e,
                            n = t && g[e];
                        return i.jsx(
                            'div',
                            {
                                className: Ue.rewardSlot,
                                style: { '--reward-info-color': m, backgroundImage: C ? `url(${C})` : 'none' },
                                children:
                                    t &&
                                    n &&
                                    i.jsx(k, {
                                        ...g[e],
                                        size: s,
                                        className: Ue.reward,
                                        classNames: {
                                            info: Ue.rewardInfo,
                                            image: o(
                                                Ue.rewardImage,
                                                ['lootBox', 'battleToken'].includes(n.name) &&
                                                    Ue.rewardImage__battleToken,
                                            ),
                                        },
                                    }),
                            },
                            e,
                        );
                    }),
                }),
                i.jsx('div', {
                    className: Ue.cardNumber,
                    style: { color: u[l] },
                    children: n ? i.jsx('div', { className: Ue.infinity, style: { backgroundImage: `url(${b})` } }) : _,
                }),
                v &&
                    i.jsx('div', {
                        className: o(Ue.pattern, null == a ? void 0 : a.pattern),
                        style: { maskImage: h, backgroundImage: `url(${v})` },
                    }),
                i.jsx('div', { className: o(Ue.shadow, null == a ? void 0 : a.shadow), style: { maskImage: h } }),
            ],
        });
    }),
    Je = {
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
        particles: 'Card_particles_98421636',
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
    Ze = a(({ index: e = 0, state: t, rewardsSize: s, classMix: n, infinite: a }) => {
        const { model: d } = Te(),
            { assetsPointer: c } = d.root.get(),
            { progressionState: l, rarity: _ } = d.computes.card(e, s, a),
            g = t || (null == l ? void 0 : l.state),
            u = null == l ? void 0 : l.animation,
            m = se(c).progression.cards,
            p = Ve({ imagesRoot: m, partName: Ge, rarity: _, size: s });
        return (
            r.useEffect(() => {
                (g !== ae.DetachingActive && g !== ae.Detaching) || w.sound(oe.EvFepTearOffCard);
            }, [g]),
            i.jsxs('div', {
                className: o(
                    Je.base,
                    Je[`base__${_}`],
                    Je[`base__animation_${u}`],
                    s === y.Big && Je.base__big,
                    Je[`base__${g}`],
                    null == n ? void 0 : n.base,
                ),
                children: [
                    i.jsx('div', {
                        className: Je.glow,
                        style: { backgroundImage: `url('${m.common.glow_active()}')` },
                    }),
                    i.jsx(Ye, { index: e, state: t, rewardsSize: s, classMix: n, infinite: a }),
                    i.jsx('div', { className: Je.blink }),
                    i.jsx('div', { className: Je.particles }),
                    i.jsx('div', { className: Je.image, style: { backgroundImage: p } }),
                    i.jsx(Xe, { index: e, state: t, rewardsSize: s, classMix: n, infinite: a }),
                ],
            })
        );
    }),
    Ke = [re.Dragging, re.ShowProgress, re.Blocked],
    et = (e, t) => Math.abs(e - t) < 0.2,
    tt = ({
        cardsCount: e,
        prevCard: t,
        activeCard: s,
        isFirstOpen: n,
        isBlocked: a,
        model: i,
        computes: o,
        actions: _,
    }) => {
        const { run: g, clear: u } = D(),
            { runSchedule: m, clearAll: p } = (() => {
                const e = r.useRef([]);
                return r.useMemo(
                    () => ({
                        runSchedule: (t) => {
                            (e.current.forEach(clearTimeout), (e.current = []));
                            let s = 0;
                            t.forEach(({ delay: t, action: n, duration: a }) => {
                                var i;
                                s += t || 0;
                                const o = setTimeout(n, s);
                                (null == (i = e.current) || i.push(o), (s += a || 0));
                            });
                        },
                        clearAll: () => {
                            (e.current.forEach(clearTimeout), (e.current = []));
                        },
                    }),
                    [],
                );
            })(),
            f = r.useRef(!0),
            h = d(() => ({
                rotate: i.currentRotation.get(),
                onStart: () => {
                    (_.startRotation(), o.soundEnabled.get() && w.sound(oe.EvFepCardStartMove));
                },
                onRest: () => {
                    o.soundEnabled.get() && w.sound(oe.EvFepCardStopMove);
                },
                onChange: (e) => {
                    _.setCurrentRotation(e.value.rotate);
                },
            }));
        q(() => w.sound(oe.EvFepCardStopMove));
        const b = h[1];
        return (
            r.useEffect(() => {
                const r = c(
                        () => o.velocity.get(),
                        (e) => {
                            var t, s;
                            void 0 !== e &&
                                o.soundEnabled.get() &&
                                ((t = oe.RtpcExtFepWheelRotation),
                                (s = Math.abs(e)),
                                engine.call('SetRTPCGlobal', t, s).catch((e) => {
                                    console.error(`Error in function setRTPC('${t}', '${s}'): `, e);
                                }));
                        },
                    ),
                    d = c(
                        () => i.currentRotation.get(),
                        () => {
                            if (et(i.targetRotation.get(), i.currentRotation.get()) && !Ke.includes(i.state.get()))
                                i.state.get() === re.FirstAnimation
                                    ? _.runProgressionAnimation()
                                    : i.state.get() === re.FinalAnimation
                                      ? (_.setAssembled(!0),
                                        _.setState(re.Blocked),
                                        w.sound(oe.RtpcExtFepWheelRotation),
                                        w.sound(oe.EvFepCardStopMove),
                                        w.sound(oe.EvFepCongratulate))
                                      : _.setState(re.Idle);
                            else if (i.state.get() === re.InertialMovement) {
                                const e = 0.75 * i.dragging.speed.get();
                                (_.setDraggingSpeed(e), _.setTargetRotation(i.targetRotation.get() + e));
                            }
                            const e = i.state.get() === re.Idle,
                                t = i.state.get() === re.ShowProgress && i.progress.animation.get() === de.Init;
                            (e || t) && f.current && b.set({ rotate: i.currentRotation.get() });
                        },
                    ),
                    h = c(
                        () => i.targetRotation.get(),
                        () => {
                            i.state.get() !== re.Idle &&
                                b.start({ rotate: i.targetRotation.get(), config: o.animationConfig.get() });
                        },
                    ),
                    C = c(
                        () => i.state.get(),
                        () => {
                            if (
                                ([re.InertialMovement, re.OverflowNormalization].includes(i.state.get()) &&
                                    et(i.currentRotation.get(), i.targetRotation.get()) &&
                                    _.setState(re.Idle),
                                i.state.get() !== re.Idle ||
                                    et(i.currentRotation.get(), -i.cardRotation.get() * o.currentCard.get()))
                            )
                                u();
                            else {
                                const { overflow: e } = o.overflow.get();
                                e
                                    ? (_.setState(re.OverflowNormalization),
                                      _.setTargetRotation(-i.cardRotation.get() * o.currentCard.get()))
                                    : g(() => {
                                          (_.setState(re.Normalization),
                                              _.setTargetRotation(-i.cardRotation.get() * o.currentCard.get()));
                                      }, 1e3);
                            }
                            (i.state.get() === re.FirstAnimation && b.set({ rotate: i.currentRotation.get() }),
                                i.state.get() === re.ShowProgress &&
                                    m(
                                        o.progressSchedule
                                            .get()
                                            .map(({ delay: e, action: t, duration: s }) => ({
                                                delay: e,
                                                duration: s,
                                                action: _.progress[t],
                                            })),
                                    ));
                        },
                    ),
                    v = l(() => {
                        _.initCardsFan(e, t, s, n, !f.current, a);
                    });
                return (
                    (f.current = !1),
                    () => {
                        (v(), d(), h(), C(), u(), p(), r());
                    }
                );
            }, [s, b, e, u, p, g, n, a, t, m]),
            h
        );
    },
    st = 'CardsFan_457fda09',
    nt = 'CardsFan_cardHolder_7672ecfc',
    at = 'CardsFan_base__big_7628f226',
    it = 'CardsFan_card_aa0cd6ad',
    ot = 'CardsFan_base__final_7628f226',
    rt = 'CardsFan_card__active_62fd3ae5',
    dt = ({ mediaHeight: e, mediaWidth: t }) => e >= B.Large && t >= G.Small,
    ct = a(
        ({
            children: e,
            transformRadius: t,
            cardHeight: s,
            defaultSelectedElement: n = 0,
            containerRef: a,
            className: d,
        }) => {
            const { mediaHeight: c, mediaWidth: l, screenWidthRem: g, screenHeightRem: u } = M(),
                m = Te(),
                { model: p, computes: f } = m.model.cardsFan,
                h = m.controls.cardsFun,
                b = dt({ mediaHeight: c, mediaWidth: l }),
                C = (({ isAssembled: e, mediaHeight: t, mediaWidth: s }) => {
                    const n = dt({ mediaHeight: t, mediaWidth: s });
                    return e ? (!n && t >= B.Medium ? 90 : n ? 60 : 50) : 0;
                })({ mediaHeight: c, mediaWidth: l, isAssembled: p.assembled.get() }),
                { completedWithAnimation: v, completedNoAnimation: w } = m.model.computes.finalAnimationStatus(),
                [{ rotate: x }, I] = tt({
                    cardsCount: m.model.stages.get().length,
                    prevCard: m.model.computes.progressAnimationStartFrom(),
                    activeCard: m.model.computes.cardActiveIndex(),
                    isFirstOpen: m.model.root.get().isFirstOpen,
                    isBlocked: w,
                    model: p,
                    computes: f,
                    actions: h,
                }),
                N = r.useCallback(
                    (e, t) => {
                        if (!(null == a ? void 0 : a.current)) return;
                        const { width: s, height: n, x: i, y: o } = a.current.getBoundingClientRect();
                        return (e >= i && t >= o && e <= i + s && t <= o + n) || void 0;
                    },
                    [a],
                ),
                P = r.useCallback(
                    (e) => {
                        if (!N(e.screenX, e.screenY)) return;
                        const t = e.deltaY > 1 ? 1 : -1;
                        h.scroll(t);
                    },
                    [h, N],
                ),
                E = r.useCallback(
                    (e) => {
                        if (p.state.get() === re.Dragging) {
                            if (!(null == a ? void 0 : a.current)) return;
                            if (N(e.screenX, e.screenY)) {
                                const n = t + s - $(e.screenY);
                                h.drag(n, $(e.screenX));
                            } else h.stopDragging();
                        }
                    },
                    [p.state, a, N, h, t, s],
                );
            return (
                r.useEffect(
                    () => (
                        document.addEventListener('wheel', P),
                        function () {
                            document.removeEventListener('wheel', P);
                        }
                    ),
                    [I, h, P],
                ),
                r.useEffect(
                    () =>
                        O(() => {
                            const e = () => {
                                    h.stopDragging();
                                },
                                t = () => {
                                    h.stopDragging();
                                },
                                s = (e) => {
                                    h.startDragging($(e.screenX));
                                };
                            return (
                                document.addEventListener('mousedown', s),
                                document.addEventListener('mousemove', E),
                                document.addEventListener('mouseup', e),
                                document.addEventListener('mouseleave', t),
                                function () {
                                    (document.removeEventListener('mousedown', s),
                                        document.removeEventListener('mousemove', E),
                                        document.removeEventListener('mouseup', e),
                                        document.removeEventListener('mouseleave', t));
                                }
                            );
                        }),
                    [h, t, s, p.state, u, g, E],
                ),
                i.jsx('div', {
                    className: o(st, d, b && at, v && ot),
                    children: i.jsx(_.div, {
                        className: nt,
                        style: { transformOrigin: `center ${t}rem`, rotate: x },
                        children: z(
                            f.cardsMap.get(),
                            ({ order: e }) => e >= f.minVisibleCard.get() && e <= f.maxVisibleCard.get(),
                            (s) =>
                                i.jsx(
                                    'div',
                                    {
                                        className: o(it, s.order === n && rt),
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
    lt = 'CardsProgression_351ad395',
    _t = 'CardsProgression_cardsFan_83cbdc49',
    gt = a(({ className: e, containerRef: t }) => {
        const { model: s, controls: n } = Te(),
            a = s.stages.get().length,
            d = s.cardsFan.model.progress.currentCard.get(),
            c = s.computes.pageStatus(),
            l = A(
                { cardHeight: 261, transformRadius: 990, rewardsSize: y.Small },
                { large: { cardHeight: 400, transformRadius: 1500, rewardsSize: y.Big } },
            );
        return (
            r.useEffect(() => {
                c === ne.COMPLETED_FINAL && n.cardsFun.runFinalAnimation(a);
            }, [c, a, n.cardsFun]),
            i.jsx('div', {
                className: o(lt, e),
                children: i.jsx(ct, {
                    ...l,
                    defaultSelectedElement: d,
                    containerRef: t,
                    className: _t,
                    children: x(a, (e) => i.jsx(Ze, { index: e, rewardsSize: l.rewardsSize }, e)),
                }),
            })
        );
    }),
    ut = 'InfiniteTitle_db4ba977',
    mt = 'InfiniteTitle_base__shown_ddd09f8b',
    pt = 'InfiniteTitle_glow_7afa9ca6',
    ft = 'InfiniteTitle_glow__show_76624e20',
    ht = 'InfiniteTitle_title_64af8d95',
    bt = 'InfiniteTitle_mainHeader_8a5dad6b',
    Ct = 'InfiniteTitle_congrats_53b68d3',
    vt = 'InfiniteTitle_congrats__hidden_9600cf7d',
    wt = 'InfiniteTitle_subtitle_a77973ac',
    xt = 'InfiniteTitle_timer_4d11422f',
    It = 'InfiniteTitle_congratsSubtitle_5fe682a2',
    Nt = 'InfiniteTitle_congratsSubtitle__hidden_29c7c9af',
    Pt = a(() => {
        const { model: e } = Te(),
            { assetsPointer: t } = e.root.get(),
            s = e.computes.needChangePage(),
            { title: n } = e.infiniteCondition.get(),
            { dynamicTexts: a } = ee('progression', { assetsPointer: t }),
            [d, c] = r.useState(!1),
            [l, _] = r.useState(!s),
            [g, u] = r.useState(!s);
        return i.jsxs('div', {
            className: o(ut, mt),
            onAnimationEnd: () => {
                s && c(!0);
            },
            children: [
                i.jsx('div', { className: o(pt, d && ft), onAnimationEnd: () => _(!0) }),
                i.jsx('div', { className: ht, children: n }),
                g
                    ? i.jsxs('div', {
                          className: bt,
                          children: [
                              i.jsx('div', { className: wt, children: a.infinite.infinityStep() }),
                              i.jsx('div', { className: o(xt), children: i.jsx($e, { oneline: !0, classNames: xt }) }),
                          ],
                      })
                    : i.jsxs('div', {
                          className: o(Ct, l && vt),
                          onTransitionEnd: () => u(!0),
                          children: [
                              i.jsx('div', { className: wt, children: a.infinite.congratulations() }),
                              i.jsx('div', {
                                  className: o(It, l && Nt),
                                  children: a.infinite.mainProgressionFinished(),
                              }),
                          ],
                      }),
            ],
        });
    }),
    Et = 'CompletedProgression_279268c8',
    Rt = 'CompletedProgression_container_d7c47390',
    Tt = 'CompletedProgression_base__final_413e479e',
    jt = 'CompletedProgression_base__static_413e479e',
    At = 'CompletedProgression_base__infinite_413e479e',
    St = 'CompletedProgression_glow_cca092f1',
    Ft = 'CompletedProgression_base__resettable_413e479e',
    Qt = 'CompletedProgression_title_3e7b1301',
    Lt = 'CompletedProgression_congrats_e8822bc1',
    yt = 'CompletedProgression_congratsSubtitle_e8dbd002',
    kt = 'CompletedProgression_icon_1c9145a9',
    Dt = 'CompletedProgression_timer_4f044f1e',
    qt = 'CompletedProgression_button_de4a031d',
    Mt = a(() => {
        const { model: e, controls: t } = Te(),
            s = e.computes.pageStatus(),
            { isCompleted: n, isResettable: a, isInfinite: r } = ge(s),
            { assetsPointer: d } = e.root.get(),
            { dynamicTexts: c } = ee('progression', { assetsPointer: d }),
            l = !e.computes.needChangePage(),
            _ = A({ size: V.medium }, { large: { size: V.large } });
        return n || r
            ? i.jsxs('div', {
                  className: o(Et, Tt, l && jt, a && Ft, r && At),
                  children: [
                      i.jsxs('div', {
                          className: Rt,
                          children: [
                              r
                                  ? i.jsx(Pt, {})
                                  : i.jsxs(i.Fragment, {
                                        children: [
                                            i.jsx('div', { className: Qt, children: c.title() }),
                                            i.jsx('div', { className: St }),
                                            i.jsx('div', { className: Lt, children: c.complete.congratulations() }),
                                            i.jsxs('div', {
                                                className: yt,
                                                children: [
                                                    i.jsx(W, {
                                                        path: 'ui_kit.card.status_done',
                                                        width: 24,
                                                        height: 24,
                                                        className: kt,
                                                    }),
                                                    c.complete.title(),
                                                ],
                                            }),
                                        ],
                                    }),
                              n && i.jsx($e, { classNames: Dt }),
                          ],
                      }),
                      !r &&
                          i.jsx(H, {
                              className: qt,
                              onClick: t.close,
                              size: _.size,
                              children: R.strings.fun_random.progression.complete.affirmative(),
                          }),
                  ],
              })
            : null;
    });
var $t = ((e) => ((e.Active = 'active'), (e.Completed = 'completed'), e))($t || {});
const Ot = {
        base: 'Point_38360539',
        base__twoPoints: 'Point_base__twoPoints_1893b78b',
        base__single_quest: 'Point_base__single_quest_e3f47efb',
        reason: 'Point_reason_34a1e661',
        score: 'Point_score_ae8e52b',
        base__completed: 'Point_base__completed_d8b7e333',
    },
    zt = ({ reason: e, valueTemplate: t, value: s, twoPoints: n, singleQuest: a = !1, completed: r = !1 }) => {
        const { upscale: d } = M();
        return i.jsx(F, {
            text: R.strings.fun_random.progression.questsList.quest.progressChangeLabel.template(),
            className: o(
                Ot.base,
                a && Ot.base__single_quest,
                n && Ot.base__twoPoints,
                r && Ot.base__completed,
                d && Ot.base__upscaled,
            ),
            params: {
                reason: i.jsx('span', { className: Ot.reason, children: e }),
                value: t
                    ? i.jsx(F, { text: t, className: Ot.score, params: { value: s }, upgradeLegacy: !0 })
                    : i.jsx('span', { className: Ot.score, children: s }),
            },
        });
    },
    Bt = R.strings.fun_random.progression.questsList.quest;
const Gt = R.images.gui.maps.icons.quests.battleCondition.c_128_decor,
    Vt = R.images.gui.maps.icons.quests.battleCondition.c_128;
const Wt = {
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
    Ht = a(({ progress: e }) => {
        const { model: t } = Te(),
            { assetsPointer: s } = t.root.get(),
            { dynamicTexts: n } = ee('progression', { assetsPointer: s });
        return i.jsx(F, {
            text: R.strings.fun_random.progression.questsList.quest.progressTitle(),
            className: Wt.progress,
            params: {
                completed: i.jsx('div', {
                    className: Wt.progressCompleted,
                    children: n.questsList.quest.infinityStageProgress(),
                }),
                currentPoints: i.jsx(g, {
                    className: Wt.progressCurrent,
                    children: i.jsx(
                        u,
                        {
                            timeout: 3400,
                            classNames: { enter: Wt.progressCurrentItem__enter, exit: Wt.progressCurrentItem__exit },
                            children: i.jsx('div', { className: Wt.progressCurrentItem, children: e }),
                        },
                        `progress-${e}`,
                    ),
                }),
                delimeter: i.jsx('div', { className: Wt.progressDelimeter, children: R.strings.common.common.slash() }),
                totalPoints: i.jsx('div', { className: Wt.infinity }),
            },
        });
    }),
    Yt = a(({ className: e, index: t = 0, infinite: s, progress: n }) => {
        const { model: a } = Te(),
            r = a.computes.quest(t),
            d = a.computes.infiniteQuest(),
            c = s && d ? d : r,
            { cursor: l } = a.cardsFan.computes,
            { sides: _, upscale: g } = M(),
            u = 1 === a.quests.get().length || s,
            m = (function (e, t, s) {
                if (t === $t.Completed) {
                    const e = 'icon_mission_completed_' + (s >= G.Large ? '128' : '90');
                    return { backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.quest.$dyn(e)})` };
                }
                if (s >= G.Large) {
                    const t = `icon_battle_condition_${e}_128x128`;
                    return { backgroundImage: `url(${Gt.$dyn(t) ?? Vt.$dyn(t)})` };
                }
                return {
                    backgroundImage: `url(${R.images.gui.maps.icons.quests.battleCondition.c_90.$dyn(`icon_battle_condition_${e}_90x90`)})`,
                };
            })(c.questCondition, c.state, _.width),
            [p, f] = (function ({ mainBonusCount: e, state: t, totalPoints: s, altBonusCount: n }) {
                return t === $t.Completed
                    ? [{ labelTemplate: Bt.progressChangeLabel.pointsEarned(), value: s }]
                    : n
                      ? [
                            {
                                labelTemplate: Bt.progressChangeLabel.forWin(),
                                valueTemplate: R.strings.common.plusValue(),
                                value: e,
                            },
                            {
                                labelTemplate: Bt.progressChangeLabel.forLoss(),
                                valueTemplate: R.strings.common.plusValue(),
                                value: n,
                            },
                        ]
                      : [
                            {
                                labelTemplate: Bt.progressChangeLabel.forCompletion(),
                                valueTemplate: R.strings.common.plusValue(),
                                value: e,
                            },
                        ];
            })(c);
        return i.jsxs('div', {
            className: o(
                Wt.base,
                Wt[`base__${c.state}`],
                Wt[`base__cursor_${l}`],
                u && Wt.base__single_quest,
                s && Wt.base__infinite,
                g && Wt.base__upscaled,
                e,
            ),
            children: [
                i.jsx('div', { className: Wt.conditionIcon, children: i.jsx('div', { className: Wt.icon, style: m }) }),
                i.jsxs('div', {
                    className: Wt.content,
                    children: [
                        s
                            ? i.jsx(Ht, { progress: n })
                            : 9999 === c.totalProgress
                              ? i.jsx('div', {
                                    className: o(Wt.progress, Wt.progressCompleted),
                                    children: R.strings.fun_random.progression.questsList.quest.infinityProgress(),
                                })
                              : i.jsx(F, {
                                    text: R.strings.fun_random.progression.questsList.quest.progressTitle(),
                                    className: Wt.progress,
                                    params: {
                                        completed: i.jsx('div', {
                                            className: Wt.progressCompleted,
                                            children: R.strings.fun_random.progression.questsList.quest.completed(),
                                        }),
                                        currentPoints: i.jsx('div', {
                                            className: Wt.progressCurrent,
                                            children: c.currentProgress,
                                        }),
                                        delimeter: i.jsx('div', {
                                            className: Wt.progressDelimeter,
                                            children: R.strings.common.common.slash(),
                                        }),
                                        totalPoints: i.jsx('div', {
                                            className: Wt.progressTotal,
                                            children: c.totalProgress,
                                        }),
                                    },
                                }),
                        i.jsx('div', { className: Wt.title, children: c.description }),
                        i.jsxs('div', {
                            className: Wt.points,
                            children: [
                                i.jsx(zt, {
                                    value: p.value,
                                    valueTemplate: p.valueTemplate,
                                    reason: p.labelTemplate,
                                    singleQuest: u,
                                    twoPoints: Boolean(f) && !s,
                                    completed: c.state === $t.Completed,
                                }),
                                f &&
                                    i.jsxs(i.Fragment, {
                                        children: [
                                            i.jsx('div', { className: Wt.pointBreak }),
                                            i.jsx(zt, {
                                                value: f.value,
                                                valueTemplate: f.valueTemplate,
                                                reason: f.labelTemplate,
                                                singleQuest: u,
                                                twoPoints: !s,
                                                completed: c.state === $t.Completed,
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
    Ut = {
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
    Xt = 'first',
    Jt = 'second',
    Zt = 'third',
    Kt = 'fourth',
    es = {
        [Kt]: { timeout: 1e3, nextOnEntering: !1 },
        [Zt]: { timeout: 1400, nextOnEntering: !1 },
        [Jt]: { timeout: 1400, nextOnEntering: !0 },
        [Xt]: { timeout: 2500, nextOnEntering: !1 },
    },
    ts = a(({ postfix: e, isDetached: t, nextTrigger: s, isTransitionActive: n }) => {
        const { model: a } = Te(),
            d = r.useRef(!0),
            c = a.computes.needChangePage(),
            { timeout: l, nextOnEntering: _ } = es[e],
            g = e === Xt,
            m = e === Kt,
            p = t ? ae.Detaching : ae.Inactive;
        return i.jsx(
            'div',
            {
                className: o(Ut.base, Ut[`base__${e}`], !g && Ut.base__completed, c && Ut.base__presentment),
                onAnimationStart: () => {
                    d.current && !m && (w.sound(oe.EvFepCardChange), (d.current = !1));
                },
                children: i.jsx(
                    u,
                    {
                        onEntered: _ ? Y : s,
                        onEntering: _ ? s : Y,
                        in: n,
                        timeout: l,
                        className: Ut.cardWrapper,
                        classNames: { enter: Ut.cardWrapper__enter, enterDone: Ut.cardWrapper__enterDone },
                        children: i.jsx('div', {
                            className: Ut.cardWrapper,
                            children: i.jsx(Ze, {
                                infinite: !0,
                                classMix: { content: Ut.content, shadow: Ut.shadow, pattern: Ut.pattern },
                                state: p,
                                rewardsSize: y.Big,
                            }),
                        }),
                    },
                    e,
                ),
            },
            e,
        );
    }),
    ss = 'InfiniteCards_a57ec698',
    ns = 'InfiniteCards_base__big_c727fc86',
    as = [Kt, Zt, Jt, Xt],
    is = ({ startAllowed: e, progressLevelUps: t }) => {
        const s = D(),
            { mediaHeight: n, mediaWidth: a } = M(),
            d = n >= B.Medium && a >= G.Medium,
            [c, l] = r.useState(0),
            [_, g] = r.useState(!1),
            [u, m] = r.useState(t);
        r.useEffect(
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
            className: o(ss, d && ns),
            children: as.map((e, t) =>
                i.jsx(
                    ts,
                    {
                        nextTrigger: () =>
                            ((e) => {
                                (w.sound(oe.EvFepCardChange),
                                    0 === e ? (m((e) => e - 1), g(!1), l(0)) : l(as.length + 1 - e));
                            })(t),
                        isTransitionActive: c > as.length - 1 - t,
                        postfix: e,
                        isDetached: _ && c > 0 && 'first' === e,
                    },
                    e,
                ),
            ),
        });
    },
    os = {
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
        const { model: n } = Te(),
            { maximumPoints: a } = n.infiniteCondition.get();
        return i.jsx('div', {
            className: o(os.base, t),
            children: i.jsxs('div', {
                className: os.conditionsPoints,
                children: [
                    i.jsx('div', {
                        className: os.conditionsDescription,
                        children: R.strings.fun_random.progression.infinite.pointsEarned(),
                    }),
                    i.jsx(F, {
                        text: R.strings.fun_random.progression.steps(),
                        className: o(os.conditionsPointsItem, os.conditionsPointsItem__divider),
                        params: {
                            done: i.jsx(g, {
                                className: os.currentPoint,
                                children: i.jsx(
                                    u,
                                    {
                                        timeout: s,
                                        onExited: () => {
                                            w.sound(oe.EvFepCounterChange);
                                        },
                                        classNames: {
                                            enter: os.currentPointItem__enter,
                                            exit: os.currentPointItem__exit,
                                        },
                                        children: i.jsx('div', { className: os.currentPointItem, children: e }),
                                    },
                                    `points-${e}`,
                                ),
                            }),
                            delimeter: i.jsx('div', {
                                className: os.conditionsPointsDelimeter,
                                children: R.strings.common.common.slash(),
                            }),
                            total: i.jsx('div', { className: os.conditionsPointsTotal, children: a }),
                        },
                    }),
                ],
            }),
        });
    }),
    ds = 'InfiniteProgression_e5621169',
    cs = 'InfiniteProgression_content_68048581',
    ls = 'InfiniteProgression_questContainer_dd770113',
    _s = 'InfiniteProgression_questCondition_ec8c8f62',
    gs = a(() => {
        const e = D(),
            { model: t } = Te(),
            s = t.computes.needChangePage(),
            { prevCompleteCount: n, completeCount: a, prevPoints: o, currentPoints: d } = t.infiniteCondition.get(),
            [c, l] = r.useState({ previous: o, current: d }),
            [_, g] = r.useState(n),
            u = s ? 3100 : 2500,
            m = c.previous === c.current && _ === a;
        return (
            r.useEffect(
                () => (
                    l({ previous: o, current: d }),
                    g(n),
                    e.run(() => {
                        (l((e) => ({ previous: e.current, current: e.current })), g(a));
                    }, u),
                    () => {
                        e.clear();
                    }
                ),
                [a, e, u, o, d, n],
            ),
            i.jsxs('div', {
                className: ds,
                children: [
                    i.jsx(Mt, {}),
                    i.jsxs('div', {
                        className: cs,
                        children: [
                            i.jsx(is, { startAllowed: m, progressLevelUps: a - n }),
                            i.jsxs('div', {
                                className: ls,
                                children: [
                                    i.jsx(Yt, { progress: _, infinite: !0 }),
                                    i.jsx(rs, { className: _s, delay: a - n > 0 ? 3400 : 1e3, points: c.previous }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    us = 'CurrentPoints_bd285292',
    ms = 'CurrentPoints_prev_5b103642',
    ps = 'CurrentPoints_base__oneQuest_3970c66e',
    fs = 'CurrentPoints_current_4d4f9a08',
    hs = 'CurrentPoints_text_3c1f1e29',
    bs = ({ prevPoints: e, currentPoints: t, animate: s, className: n, oneQuest: a }) => (
        r.useEffect(() => {
            s && e !== t && w.sound(oe.EvFepCounterChange);
        }, [s, t, e]),
        s && e !== t
            ? i.jsxs('div', {
                  className: o(us, a && ps, n),
                  children: [
                      i.jsx('div', { className: hs, children: t }),
                      i.jsx('div', { className: ms, children: e }),
                      i.jsx('div', { className: fs, children: t }),
                  ],
              })
            : i.jsx('div', { className: o(us, a && ps, n), children: e })
    ),
    Cs = {
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
    vs = 'severalQuests',
    ws = { 1: 'oneQuest', 2: 'twoQuests' },
    xs = a(({ className: e }) => {
        const { model: t } = Te(),
            { assetsPointer: s } = t.root.get(),
            n = t.condition.prevPoints.get(),
            a = t.condition.currentPoints.get(),
            r = t.condition.maximumPoints.get(),
            { completedWithAnimation: d, completedNoAnimation: c } = t.computes.finalAnimationStatus(),
            l = t.cardsFan.model.progress.state.runCounter.get(),
            _ = t.quests.get().length,
            g = _ in ws ? ws[_] : vs;
        const u = _ > 0 ? t.computes.quest(0).state : $t.Active,
            { upscale: m } = M(),
            { dynamicTexts: p } = ee('progression', { assetsPointer: s });
        return c
            ? null
            : i.jsx('div', {
                  className: o(Cs.base, d && Cs.base__hide, m && Cs.base__upscaled, e),
                  children: i.jsxs('div', {
                      className: o(Cs[g], Cs[`${g}__${u}`]),
                      children: [
                          i.jsx('div', {
                              className: Cs.questsList,
                              children: x(_, (e) => i.jsx(Yt, { className: Cs.quest, index: e }, e)),
                          }),
                          i.jsx('div', {
                              className: Cs.currentProgress,
                              children:
                                  _ > 1
                                      ? i.jsx(F, {
                                            text: p.questsList.totalPointsEarned(),
                                            className: Cs.currentProgressTitle,
                                            params: {
                                                progressionSteps: i.jsx(F, {
                                                    text: R.strings.fun_random.progression.steps(),
                                                    className: Cs.currentProgressPoints,
                                                    params: {
                                                        done: i.jsx(bs, {
                                                            className: Cs.currentProgressPointsEarned,
                                                            prevPoints: n,
                                                            currentPoints: a,
                                                            animate: l,
                                                        }),
                                                        delimeter: i.jsx('span', {
                                                            className: Cs.currentProgressPointsDelimeter,
                                                            children: R.strings.common.common.slash(),
                                                        }),
                                                        total: i.jsx('span', {
                                                            className: Cs.currentProgressPointsTotal,
                                                            children: r,
                                                        }),
                                                    },
                                                }),
                                            },
                                        })
                                      : i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx('div', {
                                                    className: Cs.currentProgressTitle,
                                                    children: p.questsList.totalPointsEarnedStandAloneTitle(),
                                                }),
                                                i.jsx(F, {
                                                    text: R.strings.fun_random.progression.steps(),
                                                    className: Cs.currentProgressPoints,
                                                    params: {
                                                        done: i.jsx(bs, {
                                                            className: Cs.currentProgressPointsEarned,
                                                            prevPoints: n,
                                                            currentPoints: a,
                                                            animate: l,
                                                            oneQuest: !0,
                                                        }),
                                                        delimeter: i.jsx('span', {
                                                            className: Cs.currentProgressPointsDelimeter,
                                                            children: R.strings.common.common.slash(),
                                                        }),
                                                        total: i.jsx('span', {
                                                            className: Cs.currentProgressPointsTotal,
                                                            children: r,
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
    Is = 'RandomRewardsButton_bd7652e0',
    Ns = 'RandomRewardsButton_image_eaeef14d',
    Ps = 'RandomRewardsButton_text_52bc847e',
    Es = 'small',
    Rs = 'medium',
    Ts = 'big',
    js = (e, t) => se(e).progression.random_rewards.$dyn(`random_rewards_icon_${t}`),
    As = ({ assetsPointer: e, onClick: t, className: s }) => {
        const { dynamicTexts: n } = ee('progression', { assetsPointer: e }),
            a = A({ size: Es }, { medium: { size: Rs }, large: { size: Ts } });
        return i.jsxs('div', {
            className: o(Is, s),
            onMouseEnter: () => w.highlight(),
            onClick: () => {
                (w.click(), t());
            },
            children: [
                i.jsx('div', { className: Ns, style: { backgroundImage: `url(${js(e, a.size)})` } }),
                i.jsx('div', { className: Ps, children: n.cardsFan.listOfRandomRewards() }),
            ],
        });
    },
    Ss = {
        root: 'App_root_0',
        base: 'App_1a4bd1cf',
        show: 'App_show_0',
        content: 'App_content_e29c7c37',
        close: 'App_close_d55d7839',
        info: 'App_info_c1728d0c',
        debugButton: 'App_debugButton_f2fdf10c',
        bg: 'App_bg_a782f950',
        progressionContainer: 'App_progressionContainer_de9678a8',
        base__completed: 'App_base__completed_0',
        ordinaryProgression: 'App_ordinaryProgression_f0098f8d',
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
    Fs = a(() => {
        const { model: e, controls: t } = Te(),
            { completedWithAnimation: s, completedNoAnimation: n } = e.computes.finalAnimationStatus(),
            a = e.computes.pageStatus(),
            d = e.computes.needChangePage(),
            { cursor: c } = e.cardsFan.computes,
            { assetsPointer: l } = e.root.get(),
            _ = r.useRef(null),
            { isActive: g, isInfinite: u, isCompleted: f } = ge(a),
            [h, b] = r.useState(u && !d),
            [C, v] = r.useState(!1);
        (U(t.close),
            r.useEffect(() => {
                b(u && !d);
            }, [u, d]));
        const [x, I] = m(() => ({
            from: { opacity: 1, transform: 'translateY(0rem)' },
            config: { duration: 500 },
            onRest: () => b(!0),
            onStart: () => {
                (w.sound(oe.EvFepInfStepTransition), v(!0));
            },
        }));
        return (
            r.useEffect(() => {
                u && d && I.start({ to: { opacity: 0, transform: 'translateY(20rem)' }, delay: 800 });
            }, [u, d, I, g]),
            r.useEffect(() => {
                C && (t.cardsFun.setState(re.Blocked), t.cardsFun.setAssembled(!0));
            }, [t.cardsFun, C]),
            i.jsxs('div', {
                className: o(
                    Ss.base,
                    Ss[`base__${a}`],
                    Ss[`base__cursor_${c.get()}`],
                    f && Ss.base__completed,
                    s && Ss.base__completedAnimated,
                ),
                children: [
                    i.jsx('div', {
                        className: Ss.bg,
                        style: { backgroundImage: `url('${se(l).library.progression_bg()}')` },
                    }),
                    i.jsxs('div', {
                        className: Ss.content,
                        children: [
                            h
                                ? i.jsx(gs, {})
                                : i.jsx('div', {
                                      className: Ss.progressionContainer,
                                      children: i.jsxs(p.div, {
                                          style: x,
                                          className: Ss.ordinaryProgression,
                                          children: [
                                              i.jsx(ze, { className: Ss.header }),
                                              i.jsx(xs, { className: Ss.questsList }),
                                              i.jsx('div', {
                                                  className: Ss.cardProgressionContainer,
                                                  ref: _,
                                                  children: i.jsx(gt, {
                                                      className: Ss.cardProgression,
                                                      containerRef: _,
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                            f && i.jsx('div', { className: Ss.completedProgression, children: i.jsx(Mt, {}) }),
                        ],
                    }),
                    !n && i.jsx(As, { className: Ss.toRandomRewards, onClick: t.onOpenTierList, assetsPointer: l }),
                ],
            })
        );
    });
X(i.jsx(Re, { children: i.jsx(J, { children: i.jsx(Z, { children: i.jsx(Fs, {}) }) }) }), { fullScreen: !0 }).then(() =>
    K(document.getElementById('root')),
);
