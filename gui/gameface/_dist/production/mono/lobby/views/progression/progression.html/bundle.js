import {
    w as e,
    Y as t,
    Z as s,
    x as a,
    y as n,
    j as i,
    z as r,
    r as o,
    $ as d,
    a0 as c,
    A as _,
    a1 as l,
    a2 as g,
    a3 as u,
    a4 as m,
    a5 as p,
} from '../../../chunks/vendor.js';
import {
    m as f,
    d as b,
    e as h,
    cT as C,
    h as v,
    p as x,
    a6 as w,
    cq as I,
    cU as P,
    a as N,
    c as E,
    g as T,
    O as j,
    _ as A,
    cV as S,
    F,
    ct as Q,
    I as L,
    R as y,
    bh as k,
    az as D,
    y as q,
    cl as M,
    bn as O,
    c1 as z,
    cW as $,
    cX as B,
    k as G,
    aG as W,
    B as V,
    a5 as H,
    u as Y,
    a3 as U,
    cu as X,
    a2 as Z,
    a4 as J,
} from '../../../chunks/lib.js';
import { g as K, a as ee } from '../../../chunks/readResource.js';
import { F as te } from '../../../chunks/fun_random_progression_state.js';
var se = ((e) => (
        (e.Inactive = 'inactive'),
        (e.Active = 'active'),
        (e.Detached = 'detached'),
        (e.Detaching = 'detaching'),
        (e.DetachingActive = 'detaching_active'),
        (e.Deactivating = 'deactivating'),
        (e.Activating = 'activating'),
        e
    ))(se || {}),
    ae = ((e) => ((e.None = 'none'), (e.HidingGlow = 'hiding_glow'), (e.ShowingGlow = 'showing_glow'), e))(ae || {}),
    ne = ((e) => (
        (e.EvFepCounterChange = 'ev_fep_counter_change'),
        (e.EvFepTearOffCard = 'ev_fep_tear_off_card'),
        (e.EvFepCongratulate = 'ev_fep_congratulate'),
        (e.EvFepCardStartMove = 'ev_fep_card_start_move'),
        (e.EvFepCardStopMove = 'ev_fep_card_stop_move'),
        (e.EvFepCardChange = 'ev_fep_card_change'),
        (e.EvFepInfStepTransition = 'ev_fep_inf_step_transition'),
        (e.RtpcExtFepWheelRotation = 'RTPC_ext_fep_wheel_rotation'),
        e
    ))(ne || {}),
    ie = ((e) => (
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
    ))(ie || {}),
    re = ((e) => (
        (e[(e.Init = 0)] = 'Init'),
        (e[(e.Detaching = 1)] = 'Detaching'),
        (e[(e.Scroll = 2)] = 'Scroll'),
        (e[(e.Finish = 3)] = 'Finish'),
        e
    ))(re || {}),
    oe = ((e) => (
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
    ))(oe || {});
const de = (e, t) =>
        f(e, (e) => ({
            name: e.name,
            image: v(e, t),
            value: e.value,
            special: C[e.overlayType],
            valueType: h(e.name),
            tooltipArgs: b({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
        })),
    ce = {
        [te.DISABLED]: te.DISABLED,
        [te.ACTIVE_FINAL]: te.ACTIVE_FINAL,
        [te.ACTIVE_RESETTABLE]: te.ACTIVE_RESETTABLE,
        [te.ACTIVE_INFINITE_FINAL]: te.ACTIVE_FINAL,
        [te.ACTIVE_INFINITE_RESETTABLE]: te.ACTIVE_RESETTABLE,
        [te.COMPLETED_FINAL]: te.ACTIVE_FINAL,
        [te.COMPLETED_RESETTABLE]: te.ACTIVE_RESETTABLE,
    },
    _e = (e) => ({
        isActive: [te.ACTIVE_FINAL, te.ACTIVE_RESETTABLE].includes(e),
        isInfinite: [te.ACTIVE_INFINITE_FINAL, te.ACTIVE_INFINITE_RESETTABLE].includes(e),
        isCompleted: [te.COMPLETED_FINAL, te.COMPLETED_RESETTABLE].includes(e),
        isResettable: [te.ACTIVE_RESETTABLE, te.COMPLETED_RESETTABLE, te.ACTIVE_INFINITE_RESETTABLE].includes(e),
    }),
    le = (e, t, s) => Math.min(s, Math.max(t, e)),
    ge = (e, t, s) => Math.min(t, Math.max(s, e)),
    ue = () => {
        const s = { rotation: e.box(0), changeTime: e.box(new Date()), filled: e.box(!1) },
            a = t((e, t) => {
                (s.rotation.set(e), s.changeTime.set(t), s.filled.set(!0));
            }),
            n = t(() => {
                s.filled.set(!1);
            });
        return { ...s, setRotation: a, clear: n };
    },
    me = (s, a) => {
        const n = (e) =>
                t((...t) => {
                    if (a.userActionsAllowed.get()) return e(...t);
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
                s.targetRotation.set(ge(e, a.minRotation.get(), a.maxRotation.get()));
            }),
            c = t(() => {
                if (s.progress.finalCard.get() !== s.progress.currentCard.get()) {
                    i(ie.ShowProgress);
                    const e = -s.cardRotation.get() * s.progress.currentCard.get();
                    o(ge(e, a.minRotation.get(), a.maxRotation.get()));
                } else (v[oe.RunCounter](), i(ie.Idle));
            }),
            _ = t((e) => {
                const t = (-s.cardRotation.get() * (e - 1)) / 2,
                    n = ge(t, a.minRotation.get(), a.maxRotation.get());
                s.currentRotation.get() === n
                    ? (g(!0), i(ie.Blocked), x.sound(ne.EvFepCongratulate))
                    : (i(ie.FinalAnimation), d(t));
            }),
            l = t((t, n, r, _, l, u) => {
                if (
                    (s.cardsCount.set(t),
                    s.progress.currentCard.set(n),
                    s.progress.finalCard.set(r),
                    s.progress.state.cards.push(
                        ...w(t, (t) => {
                            return (
                                (s = ((e, t, s) =>
                                    s ? se.Detached : e === t ? se.Active : e > t ? se.Detached : se.Inactive)(
                                    n,
                                    t,
                                    u,
                                )),
                                (a = ae.None),
                                { state: e.box(s), animation: e.box(a) }
                            );
                            var s, a;
                        }),
                    ),
                    _)
                )
                    (o(-s.cardRotation.get() * a.maxRightCard.get()),
                        i(ie.FirstAnimation),
                        d(-s.cardRotation.get() * n));
                else if (u) {
                    const e = (-s.cardRotation.get() * (t - 1)) / 2;
                    (o(e), d(e), g(!0), i(ie.Blocked));
                } else {
                    const e = le(n, a.minLeftCard.get(), a.maxRightCard.get());
                    (l || o(-s.cardRotation.get() * e), d(s.currentRotation.get()), n !== r ? c() : v[oe.RunCounter]());
                }
            }),
            g = t((e) => {
                s.assembled.set(e);
            }),
            u = n((e) => {
                const t = ge(
                    s.targetRotation.get() - (s.cardRotation.get() * e) / -2,
                    a.minRotation.get(),
                    a.maxRotation.get(),
                );
                return (i(ie.Scrolling), d(t), s.targetRotation.get());
            }),
            m = n((e) => {
                s.dragging.speed.set(e);
            }),
            p = n((e) => {
                (i(ie.Dragging), s.dragging.lastMousePosition.set(e), m(0), d(s.currentRotation.get()));
            }),
            f = n(() => {
                const { overflow: e } = a.overflow.get();
                (i(e ? ie.OverflowNormalization : ie.InertialMovement), s.dragging.lastMousePosition.set(0));
            }),
            b = n((e, t) => {
                if (s.state.get() !== ie.Dragging) return;
                const { overflow: n } = a.overflow.get(),
                    i = (180 * Math.atan((t - s.dragging.lastMousePosition.get()) / e)) / Math.PI,
                    r = n && Math.max(1, n);
                (m(r ? i / r : i),
                    s.dragging.lastMousePosition.set(t),
                    s.targetRotation.set(s.targetRotation.get() + s.dragging.speed.get()));
            }),
            h = t((e, t) => {
                var a;
                e >= 0 &&
                    e < s.progress.state.cards.length &&
                    (null == (a = s.progress.state.cards[e]) || a.state.set(t));
            }),
            C = t((e, t) => {
                var a;
                e >= 0 &&
                    e <= s.progress.state.cards.length &&
                    (null == (a = s.progress.state.cards[e]) || a.animation.set(t));
            }),
            v = {
                [oe.RunCounter]: t(() => {
                    s.progress.state.runCounter.set(!0);
                }),
                [oe.Detach]: t(() => {
                    (h(s.progress.currentCard.get(), se.DetachingActive), s.progress.animation.set(re.Detaching));
                }),
                [oe.HideGlow]: t(() => {
                    C(s.progress.currentCard.get(), ae.HidingGlow);
                }),
                [oe.DeactivateCurrent]: t(() => {
                    h(s.progress.currentCard.get(), se.Deactivating);
                }),
                [oe.ActivateNext]: t(() => {
                    const e = s.progress.currentCard.get() + 1;
                    (h(e, se.Activating), s.progress.currentCard.set(e));
                }),
                [oe.ShowGlow]: t(() => {
                    C(s.progress.currentCard.get(), ae.ShowingGlow);
                }),
                [oe.FinishActivating]: t(() => {
                    const e = s.progress.currentCard.get() - 1;
                    h(e, se.Detached);
                }),
                [oe.Scroll]: t(() => {
                    s.progress.animation.set(re.Scroll);
                    const e = ge(
                        -s.cardRotation.get() * s.progress.currentCard.get(),
                        a.minRotation.get(),
                        a.maxRotation.get(),
                    );
                    d(e);
                }),
                [oe.Finish]: t(() => {
                    (s.progress.finalCard.get() < s.cardsCount.get() && h(s.progress.finalCard.get(), se.Active),
                        s.progress.animation.set(re.Finish),
                        i(ie.Idle));
                }),
            };
        return {
            initCardsFan: l,
            startRotation: r,
            scroll: u,
            runProgressionAnimation: c,
            runFinalAnimation: _,
            setAssembled: g,
            setState: i,
            setCurrentRotation: o,
            setTargetRotation: d,
            setDraggingSpeed: m,
            startDragging: p,
            stopDragging: f,
            drag: b,
            progress: v,
        };
    },
    pe = [ie.FirstAnimation, ie.ShowProgress, ie.FinalAnimation, ie.Blocked],
    fe = [{ duration: 500, action: oe.Scroll }],
    be = [{ action: oe.FinishActivating }],
    he = [{ delay: 200, action: oe.Finish }],
    Ce = [{ duration: 300, action: oe.ShowGlow }],
    ve = [...fe, { delay: 100, duration: 400, action: oe.RunCounter }, { duration: 300, action: oe.HideGlow }],
    xe = [
        { delay: 100, duration: 700, action: oe.Detach },
        { delay: 300, action: oe.DeactivateCurrent },
        { duration: 300, action: oe.ActivateNext },
    ],
    we = {
        [ie.Idle]: {},
        [ie.Scrolling]: { duration: 400, easing: I.linear },
        [ie.Dragging]: { duration: 400, easing: I.easeOutQuint },
        [ie.InertialMovement]: { duration: 800, easing: I.linear },
        [ie.FirstAnimation]: { duration: 1e4, easing: I.easeInOutQuint },
        [ie.Normalization]: { duration: 1e3, easing: I.easeOutQuint },
        [ie.OverflowNormalization]: { duration: 300, easing: I.easeOutQuint },
        [ie.ShowProgress]: { duration: 500, easing: I.easeOutQuint },
        [ie.FinalAnimation]: { duration: 2e3, easing: I.easeInOutQuint },
        [ie.Blocked]: { duration: 0 },
    },
    [Ie, Pe] = N()(
        ({ observableModel: t }) => {
            const n = {
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
                },
                i = a(
                    (e) => {
                        const t = T(n.quests.get(), e);
                        if (!t) throw new Error(`Unexpected quest index: ${e}`);
                        return { ...t };
                    },
                    { equals: E },
                ),
                r = a(
                    () => {
                        const e = T(n.infiniteQuests.get(), 0);
                        return e ? { ...e } : null;
                    },
                    { equals: E },
                ),
                o = a(
                    (e, t, s = !1) => {
                        const a = s ? n.infiniteStage.get() : T(n.stages.get(), e);
                        if (!a) throw new Error(`Unexpected card index: ${e}`);
                        const i = e + 1,
                            r = l.cardState(e);
                        return { ...a, rewards: de(a.rewards, t), cardNumber: i, progressionState: r };
                    },
                    { equals: E },
                ),
                d = a(() => {
                    const e =
                        n.condition.currentPoints.get() === n.condition.maximumPoints.get() ? n.stages.get().length : 0;
                    return j(n.stages.get(), (e) => !e.isCompleted) || e;
                }),
                c = a(() => {
                    const e = T(n.stages.get(), 0);
                    if (e && e.requiredPoints > n.condition.prevPoints.get()) return 0;
                    const t = n.stages.get().length - 1;
                    return j(n.stages.get(), (e) => e.requiredPoints > n.condition.prevPoints.get()) || t;
                }),
                _ = (({ cardRotation: t, displayCardsCount: s }) => ({
                    cardRotation: e.box(t),
                    displayCardsCount: e.box(s),
                    cardsCount: e.box(0),
                    state: e.box(ie.Idle),
                    currentRotation: e.box(0),
                    targetRotation: e.box(0),
                    assembled: e.box(!1),
                    rotationStats: { prev: ue(), last: ue() },
                    progress: {
                        currentCard: e.box(0),
                        animation: e.box(re.Init),
                        finalCard: e.box(0),
                        state: { runCounter: e.box(!1), cards: [] },
                    },
                    dragging: { lastMousePosition: e.box(0), speed: e.box(0) },
                }))({ cardRotation: 10, displayCardsCount: 14 }),
                l = ((e) => {
                    const t = s(() => (e.cardsCount.get() >= 5 ? 2 : 1)),
                        n = s(() =>
                            e.cardsCount.get() <= 3
                                ? e.cardsCount.get() - 2
                                : e.cardsCount.get() <= 5
                                  ? e.cardsCount.get() - 3
                                  : e.cardsCount.get() - 1,
                        ),
                        i = s(() => w(e.cardsCount.get(), (t) => ({ key: t, order: e.cardsCount.get() - t - 1 }))),
                        r = s(() =>
                            le(
                                Math.round(
                                    (Math.abs(e.currentRotation.get()) / (e.cardRotation.get() * e.cardsCount.get())) *
                                        e.cardsCount.get(),
                                ),
                                t.get(),
                                n.get(),
                            ),
                        ),
                        o = s(
                            () => Math.max(0, le(r.get(), t.get(), n.get())) - Math.ceil(e.displayCardsCount.get() / 2),
                        ),
                        d = s(() => Math.min(e.cardsCount.get(), r.get()) + Math.ceil(e.displayCardsCount.get() / 2)),
                        c = s(() => -e.cardRotation.get() * t.get()),
                        _ = s(() => -e.cardRotation.get() * n.get()),
                        l = s(() => {
                            const t = e.targetRotation.get() + e.dragging.speed.get(),
                                s = c.get(),
                                a = _.get(),
                                n = t > s ? t - s : 0,
                                i = t < a ? a - t : 0;
                            return { left: n, right: i, overflow: n || i || 0 };
                        }),
                        g = s(() =>
                            e.state.get() === ie.FirstAnimation
                                ? { ...we[ie.FirstAnimation], duration: 150 * e.cardsCount.get() }
                                : we[e.state.get()],
                        ),
                        u = s(() => !pe.includes(e.state.get())),
                        m = s(() => {
                            const s = [];
                            s.push(...ve);
                            for (let a = e.progress.currentCard.get(); a < e.progress.finalCard.get(); a++) {
                                const e = a >= t.get();
                                (s.push(...xe), e && s.push(...fe), s.push(...be));
                            }
                            return (e.progress.finalCard.get() < e.cardsCount.get() && s.push(...Ce), s.push(...he), s);
                        }),
                        p = a((t) =>
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
                            return 0 !== s ? P(-0.4, 0.4, t / s) / -0.4 : void 0;
                        }),
                        b = s(() => e.state.get() !== ie.Blocked),
                        h = s(() => e.cardsCount.get() >= 6),
                        C = s(() =>
                            u.get() && h.get() ? (e.state.get() === ie.Dragging ? 'grabbing' : 'grab') : 'default',
                        );
                    return {
                        velocity: f,
                        minLeftCard: t,
                        maxRightCard: n,
                        cardsMap: i,
                        currentCard: r,
                        minVisibleCard: o,
                        maxVisibleCard: d,
                        minRotation: c,
                        maxRotation: _,
                        overflow: l,
                        animationConfig: g,
                        userActionsAllowed: u,
                        progressSchedule: m,
                        cardState: p,
                        soundEnabled: b,
                        cursor: C,
                    };
                })(_),
                g = a(
                    () =>
                        n.condition.prevPoints.get() < n.condition.currentPoints.get() &&
                        n.condition.currentPoints.get() === n.condition.maximumPoints.get(),
                ),
                u = a(() =>
                    (!g() && n.condition.currentPoints.get() === n.condition.maximumPoints.get()) ||
                    _.progress.animation.get() === re.Finish
                        ? n.state.get().status
                        : ce[n.state.get().status],
                ),
                m = a(() => {
                    const e = g(),
                        t = u(),
                        { isCompleted: s } = _e(t);
                    return { completedWithAnimation: e && s, completedNoAnimation: !e && s };
                });
            return {
                ...n,
                cardsFan: { model: _, computes: l },
                computes: {
                    quest: i,
                    card: o,
                    cardActiveIndex: d,
                    progressAnimationStartFrom: c,
                    infiniteQuest: r,
                    pageStatus: u,
                    needChangePage: g,
                    finalAnimationStatus: m,
                },
            };
        },
        ({ externalModel: e, model: t }) => ({
            cardsFun: me(t.cardsFan.model, t.cardsFan.computes),
            close: e.createCallbackNoArgs('onClose'),
            showInfo: e.createCallbackNoArgs('onShowInfo'),
            onOpenTierList: e.createCallbackNoArgs('onOpenTierList'),
        }),
    ),
    Ne = 'Timer_d6719c38',
    Ee = 'Timer_base__hide_9f6d0c7b',
    Re = 'Timer_titleSeparatorLeft_6ee5dd6c',
    Te = 'Timer_titleSeparatorRight_e3f1bac1',
    je = 'Timer_line_3fed6cdc',
    Ae = 'Timer_point_601094e8',
    Se = 'Timer_questsRenewTimerTitle_1ba29c0d',
    Fe = 'Timer_completedResettable_9d2f849c',
    Qe = 'Timer_secondLine_461c25ce',
    Le = 'Timer_countdown_11b34534',
    ye = R.strings.fun_random.progression.questsList,
    ke = n(({ oneline: e, classNames: t }) => {
        const { model: s } = Pe(),
            a = s.computes.pageStatus(),
            { isInfinite: n, isCompleted: o, isResettable: d } = _e(a),
            { completedWithAnimation: c } = s.computes.finalAnimationStatus(),
            _ = s.infiniteCondition.get(),
            l = { statusTimer: s.condition.statusTimer.get() },
            { statusTimer: g } = n ? _ : l,
            u = A(
                { onelineSize: S.x16x16, completedResettableSize: S.x24x24 },
                {
                    medium: { onelineSize: S.x24x24, completedResettableSize: S.x32x32 },
                    large: { onelineSize: S.x24x24, completedResettableSize: S.x48x48 },
                    extraLarge: { onelineSize: S.x32x32, completedResettableSize: S.x48x48 },
                },
            );
        return i.jsxs('div', {
            className: r(Ne, c && Ee, t),
            children: [
                i.jsxs('div', {
                    className: Re,
                    children: [i.jsx('div', { className: je }), i.jsx('div', { className: Ae })],
                }),
                e
                    ? i.jsx(F, {
                          className: Se,
                          text: ye.questsFinishTimerOnelineTitle(),
                          params: { time: i.jsx(Q, { start: g, className: Le, size: u.onelineSize }) },
                      })
                    : i.jsxs('div', {
                          className: Fe,
                          children: [
                              i.jsx('div', {
                                  className: Se,
                                  children: o && d ? ye.questsRenewTimerTitle() : ye.questsFinishTimerTitle(),
                              }),
                              i.jsx('div', {
                                  className: Qe,
                                  children: i.jsx(Q, { start: g, className: Le, size: u.completedResettableSize }),
                              }),
                          ],
                      }),
                i.jsxs('div', {
                    className: Te,
                    children: [i.jsx('div', { className: Ae }), i.jsx('div', { className: je })],
                }),
            ],
        });
    }),
    De = {
        base: 'Header_423dfe66',
        base__hide: 'Header_base__hide_a308bf0e',
        title: 'Header_title_be0ad147',
        timer: 'Header_timer_43e2aba3',
    },
    qe = n(({ className: e }) => {
        const { model: t } = Pe(),
            s = t.computes.pageStatus(),
            { completedWithAnimation: a, completedNoAnimation: n } = t.computes.finalAnimationStatus(),
            { isActive: o } = _e(s),
            { assetsPointer: d } = t.root.get(),
            { dynamicTexts: c } = K('progression', { assetsPointer: d });
        return n
            ? null
            : i.jsxs('div', {
                  className: r(De.base, a && De.base__hide, o && De.base__active, e),
                  children: [
                      i.jsx('div', { className: De.title, children: c.title() }),
                      i.jsx('div', { className: De.timer, children: i.jsx(ke, { oneline: !0 }) }),
                  ],
              });
    }),
    Me = 'edge',
    Oe = 'base',
    ze = ({ imagesRoot: e, partName: t, rarity: s, size: a }) => `url(${e.$dyn(t).$dyn(`${s}_${a}_1`)})`,
    $e = {
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
        pattern: 'CardEdge_pattern_f7396a45',
        pointsTitle: 'CardEdge_pointsTitle_b207fc46',
        base__ordinary: 'CardEdge_base__ordinary_f2682522',
        base__unusual: 'CardEdge_base__unusual_f2682522',
        base__rare: 'CardEdge_base__rare_f2682522',
        base__legendary: 'CardEdge_base__legendary_f2682522',
        base__epic: 'CardEdge_base__epic_f2682522',
        pointsValue: 'CardEdge_pointsValue_287aede6',
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
    Be = n(({ index: e = 0, state: t, rewardsSize: s, infinite: a, classMix: n }) => {
        const { model: o } = Pe(),
            { assetsPointer: d } = o.root.get(),
            { progressionState: c, rarity: _, requiredPoints: l } = o.computes.card(e, s, a),
            g = t || (null == c ? void 0 : c.state),
            u = null == c ? void 0 : c.animation,
            m = ee(d).progression.cards,
            p = ze({ imagesRoot: m, partName: Me, rarity: _, size: s });
        return i.jsxs('div', {
            className: r(
                $e.edge,
                $e.base,
                $e[`base__${_}`],
                $e[`base__animation_${u}`],
                s === L.Big && $e.base__big,
                $e[`base__${g}`],
                null == n ? void 0 : n.edge,
            ),
            style: { backgroundImage: p },
            children: [
                i.jsx('div', { className: $e.blinkEdge }),
                i.jsx('div', {
                    className: $e.pointsTitle,
                    children: i.jsx('div', { children: R.strings.fun_random.progression.cards.points() }),
                }),
                i.jsx('div', { className: $e.pointsValue, children: i.jsx('div', { children: l }) }),
                i.jsx('div', { className: r($e.pattern, null == n ? void 0 : n.pattern), style: { maskImage: p } }),
                i.jsx('div', { className: r($e.shadow, null == n ? void 0 : n.shadow), style: { maskImage: p } }),
            ],
        });
    }),
    Ge = {
        root: 'CardContent_root_d7ebe82e',
        base: 'CardContent_e296b032',
        rewards: 'CardContent_rewards_c5fd0929',
        base__big: 'CardContent_base__big_d7ebe82e',
        rewardSlot: 'CardContent_rewardSlot_a0806209',
        reward: 'CardContent_reward_9582bb4b',
        base__detached: 'CardContent_base__detached_d7ebe82e',
        base__detaching: 'CardContent_base__detaching_d7ebe82e',
        base__detaching_active: 'CardContent_base__detaching_active_d7ebe82e',
        base__deactivating: 'CardContent_base__deactivating_d7ebe82e',
        base__small: 'CardContent_base__small_d7ebe82e',
        rewardInfo: 'CardContent_rewardInfo_d3ff5d97',
        rewardImage: 'CardContent_rewardImage_738dd0e8',
        rewardImage__battleToken: 'CardContent_rewardImage__battleToken_e5c2fb0e',
        cardNumber: 'CardContent_cardNumber_9874f4f8',
        base__ordinary: 'CardContent_base__ordinary_d7ebe82e',
        base__unusual: 'CardContent_base__unusual_d7ebe82e',
        base__rare: 'CardContent_base__rare_d7ebe82e',
        base__legendary: 'CardContent_base__legendary_d7ebe82e',
        base__epic: 'CardContent_base__epic_d7ebe82e',
        base__infinite: 'CardContent_base__infinite_d7ebe82e',
        infinity: 'CardContent_infinity_20eac8ba',
        shadow: 'CardContent_shadow_879bdc41',
        base__inactive: 'CardContent_base__inactive_d7ebe82e',
        pattern: 'CardContent_pattern_1ecf6e5c',
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
    We = n(({ index: e = 0, state: t, rewardsSize: s, infinite: a, classMix: n }) => {
        const { model: o } = Pe(),
            { assetsPointer: d } = o.root.get(),
            { progressionState: c, rarity: _, cardNumber: l, rewards: g } = o.computes.card(e, s, a),
            u = t || (null == c ? void 0 : c.state),
            m = ee(d).progression.cards,
            p = ze({ imagesRoot: m, partName: Oe, rarity: _, size: s }),
            f = String(m.infinity_sign.$dyn(_));
        return i.jsxs('div', {
            className: r(
                Ge.base,
                Ge[`base__${_}`],
                Ge[`base__${s}`],
                Ge[`base__${u}`],
                a && Ge.base__infinite,
                null == n ? void 0 : n.content,
            ),
            children: [
                i.jsx('div', {
                    className: Ge.rewards,
                    children: w(4, (e) =>
                        i.jsx(
                            'div',
                            {
                                className: Ge.rewardSlot,
                                children:
                                    g.length > e &&
                                    i.jsx(y, {
                                        ...g[e],
                                        size: s,
                                        className: Ge.reward,
                                        classNames: {
                                            info: Ge.rewardInfo,
                                            image: r(
                                                Ge.rewardImage,
                                                ['lootBox', 'battleToken'].includes(g[e].name) &&
                                                    Ge.rewardImage__battleToken,
                                            ),
                                        },
                                    }),
                            },
                            e,
                        ),
                    ),
                }),
                i.jsx('div', {
                    className: Ge.cardNumber,
                    children: a ? i.jsx('div', { className: Ge.infinity, style: { backgroundImage: `url(${f})` } }) : l,
                }),
                i.jsx('div', { className: r(Ge.pattern, null == n ? void 0 : n.pattern), style: { maskImage: p } }),
                i.jsx('div', { className: r(Ge.shadow, null == n ? void 0 : n.shadow), style: { maskImage: p } }),
            ],
        });
    }),
    Ve = {
        root: 'Card_root_f4c22d1c',
        base: 'Card_85adaed',
        base__big: 'Card_base__big_247c97ce',
        base__inactive: 'Card_base__inactive_f4c22d1c',
        base__detached: 'Card_base__detached_f4c22d1c',
        base__detaching: 'Card_base__detaching_f4c22d1c',
        base__deactivating: 'Card_base__deactivating_f4c22d1c',
        base__activating: 'Card_base__activating_c8c39979',
        glow: 'Card_glow_636eca6f',
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
    He = n(({ index: e = 0, state: t, rewardsSize: s, classMix: a, infinite: n }) => {
        const { model: d } = Pe(),
            { assetsPointer: c } = d.root.get(),
            { progressionState: _, rarity: l } = d.computes.card(e, s, n),
            g = t || (null == _ ? void 0 : _.state),
            u = null == _ ? void 0 : _.animation,
            m = ee(c).progression.cards,
            p = ze({ imagesRoot: m, partName: Oe, rarity: l, size: s });
        return (
            o.useEffect(() => {
                (g !== se.DetachingActive && g !== se.Detaching) || x.sound(ne.EvFepTearOffCard);
            }, [g]),
            i.jsxs('div', {
                className: r(
                    Ve.base,
                    Ve[`base__${l}`],
                    Ve[`base__animation_${u}`],
                    s === L.Big && Ve.base__big,
                    Ve[`base__${g}`],
                    null == a ? void 0 : a.base,
                ),
                children: [
                    i.jsx('div', { className: Ve.glow }),
                    i.jsx(Be, { index: e, state: t, rewardsSize: s, classMix: a, infinite: n }),
                    i.jsx('div', { className: Ve.blink }),
                    i.jsx('div', { className: Ve.particles }),
                    i.jsx('div', { className: Ve.image, style: { backgroundImage: p } }),
                    i.jsx(We, { index: e, state: t, rewardsSize: s, classMix: a, infinite: n }),
                ],
            })
        );
    }),
    Ye = [ie.Dragging, ie.ShowProgress, ie.Blocked],
    Ue = (e, t) => Math.abs(e - t) < 0.2,
    Xe = ({
        cardsCount: e,
        prevCard: t,
        activeCard: s,
        isFirstOpen: a,
        isBlocked: n,
        model: i,
        computes: r,
        actions: l,
    }) => {
        const { run: g, clear: u } = k(),
            { runSchedule: m, clearAll: p } = (() => {
                const e = o.useRef([]);
                return o.useMemo(
                    () => ({
                        runSchedule: (t) => {
                            (e.current.forEach(clearTimeout), (e.current = []));
                            let s = 0;
                            t.forEach(({ delay: t, action: a, duration: n }) => {
                                var i;
                                s += t || 0;
                                const r = setTimeout(a, s);
                                (null == (i = e.current) || i.push(r), (s += n || 0));
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
            b = d(() => ({
                rotate: i.currentRotation.get(),
                onStart: () => {
                    (l.startRotation(), r.soundEnabled.get() && x.sound(ne.EvFepCardStartMove));
                },
                onRest: () => {
                    r.soundEnabled.get() && x.sound(ne.EvFepCardStopMove);
                },
                onChange: (e) => {
                    l.setCurrentRotation(e.value.rotate);
                },
            }));
        D(() => x.sound(ne.EvFepCardStopMove));
        const h = b[1];
        return (
            o.useEffect(() => {
                const o = c(
                        () => r.velocity.get(),
                        (e) => {
                            var t, s;
                            void 0 !== e &&
                                r.soundEnabled.get() &&
                                ((t = ne.RtpcExtFepWheelRotation),
                                (s = Math.abs(e)),
                                engine.call('SetRTPCGlobal', t, s).catch((e) => {
                                    console.error(`Error in function setRTPC('${t}', '${s}'): `, e);
                                }));
                        },
                    ),
                    d = c(
                        () => i.currentRotation.get(),
                        () => {
                            if (Ue(i.targetRotation.get(), i.currentRotation.get()) && !Ye.includes(i.state.get()))
                                i.state.get() === ie.FirstAnimation
                                    ? l.runProgressionAnimation()
                                    : i.state.get() === ie.FinalAnimation
                                      ? (l.setAssembled(!0),
                                        l.setState(ie.Blocked),
                                        x.sound(ne.RtpcExtFepWheelRotation),
                                        x.sound(ne.EvFepCardStopMove),
                                        x.sound(ne.EvFepCongratulate))
                                      : l.setState(ie.Idle);
                            else if (i.state.get() === ie.InertialMovement) {
                                const e = 0.75 * i.dragging.speed.get();
                                (l.setDraggingSpeed(e), l.setTargetRotation(i.targetRotation.get() + e));
                            }
                            const e = i.state.get() === ie.Idle,
                                t = i.state.get() === ie.ShowProgress && i.progress.animation.get() === re.Init;
                            (e || t) && f.current && h.set({ rotate: i.currentRotation.get() });
                        },
                    ),
                    b = c(
                        () => i.targetRotation.get(),
                        () => {
                            i.state.get() !== ie.Idle &&
                                h.start({ rotate: i.targetRotation.get(), config: r.animationConfig.get() });
                        },
                    ),
                    C = c(
                        () => i.state.get(),
                        () => {
                            if (
                                ([ie.InertialMovement, ie.OverflowNormalization].includes(i.state.get()) &&
                                    Ue(i.currentRotation.get(), i.targetRotation.get()) &&
                                    l.setState(ie.Idle),
                                i.state.get() !== ie.Idle ||
                                    Ue(i.currentRotation.get(), -i.cardRotation.get() * r.currentCard.get()))
                            )
                                u();
                            else {
                                const { overflow: e } = r.overflow.get();
                                e
                                    ? (l.setState(ie.OverflowNormalization),
                                      l.setTargetRotation(-i.cardRotation.get() * r.currentCard.get()))
                                    : g(() => {
                                          (l.setState(ie.Normalization),
                                              l.setTargetRotation(-i.cardRotation.get() * r.currentCard.get()));
                                      }, 1e3);
                            }
                            (i.state.get() === ie.FirstAnimation && h.set({ rotate: i.currentRotation.get() }),
                                i.state.get() === ie.ShowProgress &&
                                    m(
                                        r.progressSchedule
                                            .get()
                                            .map(({ delay: e, action: t, duration: s }) => ({
                                                delay: e,
                                                duration: s,
                                                action: l.progress[t],
                                            })),
                                    ));
                        },
                    ),
                    v = _(() => {
                        l.initCardsFan(e, t, s, a, !f.current, n);
                    });
                return (
                    (f.current = !1),
                    () => {
                        (v(), d(), b(), C(), u(), p(), o());
                    }
                );
            }, [s, h, e, u, p, g, a, n, t, m]),
            b
        );
    },
    Ze = 'CardsFan_457fda09',
    Je = 'CardsFan_cardHolder_7672ecfc',
    Ke = 'CardsFan_base__big_7628f226',
    et = 'CardsFan_card_aa0cd6ad',
    tt = 'CardsFan_base__final_7628f226',
    st = 'CardsFan_card__active_62fd3ae5',
    at = ({ mediaHeight: e, mediaWidth: t }) => e >= $.Large && t >= B.Small,
    nt = n(
        ({
            children: e,
            transformRadius: t,
            cardHeight: s,
            defaultSelectedElement: a = 0,
            containerRef: n,
            className: d,
        }) => {
            const { mediaHeight: c, mediaWidth: _, screenWidthRem: g, screenHeightRem: u } = q(),
                m = Pe(),
                { model: p, computes: f } = m.model.cardsFan,
                b = m.controls.cardsFun,
                h = at({ mediaHeight: c, mediaWidth: _ }),
                C = (({ isAssembled: e, mediaHeight: t, mediaWidth: s }) => {
                    const a = at({ mediaHeight: t, mediaWidth: s });
                    return e ? (!a && t >= $.Medium ? 90 : a ? 60 : 50) : 0;
                })({ mediaHeight: c, mediaWidth: _, isAssembled: p.assembled.get() }),
                { completedWithAnimation: v, completedNoAnimation: x } = m.model.computes.finalAnimationStatus(),
                [{ rotate: w }, I] = Xe({
                    cardsCount: m.model.stages.get().length,
                    prevCard: m.model.computes.progressAnimationStartFrom(),
                    activeCard: m.model.computes.cardActiveIndex(),
                    isFirstOpen: m.model.root.get().isFirstOpen,
                    isBlocked: x,
                    model: p,
                    computes: f,
                    actions: b,
                }),
                P = o.useCallback(
                    (e, t) => {
                        if (!(null == n ? void 0 : n.current)) return;
                        const { width: s, height: a, x: i, y: r } = n.current.getBoundingClientRect();
                        return (e >= i && t >= r && e <= i + s && t <= r + a) || void 0;
                    },
                    [n],
                ),
                N = o.useCallback(
                    (e) => {
                        if (!P(e.screenX, e.screenY)) return;
                        const t = e.deltaY > 1 ? 1 : -1;
                        b.scroll(t);
                    },
                    [b, P],
                ),
                E = o.useCallback(
                    (e) => {
                        if (p.state.get() === ie.Dragging) {
                            if (!(null == n ? void 0 : n.current)) return;
                            if (P(e.screenX, e.screenY)) {
                                const a = t + s - M(e.screenY);
                                b.drag(a, M(e.screenX));
                            } else b.stopDragging();
                        }
                    },
                    [p.state, n, P, b, t, s],
                );
            return (
                o.useEffect(
                    () => (
                        document.addEventListener('wheel', N),
                        function () {
                            document.removeEventListener('wheel', N);
                        }
                    ),
                    [I, b, N],
                ),
                o.useEffect(
                    () =>
                        O(() => {
                            const e = () => {
                                    b.stopDragging();
                                },
                                t = () => {
                                    b.stopDragging();
                                },
                                s = (e) => {
                                    b.startDragging(M(e.screenX));
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
                    [b, t, s, p.state, u, g, E],
                ),
                i.jsx('div', {
                    className: r(Ze, d, h && Ke, v && tt),
                    children: i.jsx(l.div, {
                        className: Je,
                        style: { transformOrigin: `center ${t}rem`, rotate: w },
                        children: z(
                            f.cardsMap.get(),
                            ({ order: e }) => e >= f.minVisibleCard.get() && e <= f.maxVisibleCard.get(),
                            (s) =>
                                i.jsx(
                                    'div',
                                    {
                                        className: r(et, s.order === a && st),
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
    it = 'CardsProgression_351ad395',
    rt = 'CardsProgression_cardsFan_83cbdc49',
    ot = n(({ className: e, containerRef: t }) => {
        const { model: s, controls: a } = Pe(),
            n = s.stages.get().length,
            d = s.cardsFan.model.progress.currentCard.get(),
            c = s.computes.pageStatus(),
            _ = A(
                { cardHeight: 261, transformRadius: 990, rewardsSize: L.Small },
                { large: { cardHeight: 400, transformRadius: 1500, rewardsSize: L.Big } },
            );
        return (
            o.useEffect(() => {
                c === te.COMPLETED_FINAL && a.cardsFun.runFinalAnimation(n);
            }, [c, n, a.cardsFun]),
            i.jsx('div', {
                className: r(it, e),
                children: i.jsx(nt, {
                    ..._,
                    defaultSelectedElement: d,
                    containerRef: t,
                    className: rt,
                    children: w(n, (e) => i.jsx(He, { index: e, rewardsSize: _.rewardsSize }, e)),
                }),
            })
        );
    }),
    dt = 'InfiniteTitle_db4ba977',
    ct = 'InfiniteTitle_base__shown_ddd09f8b',
    _t = 'InfiniteTitle_glow_7afa9ca6',
    lt = 'InfiniteTitle_glow__show_76624e20',
    gt = 'InfiniteTitle_title_64af8d95',
    ut = 'InfiniteTitle_mainHeader_8a5dad6b',
    mt = 'InfiniteTitle_congrats_53b68d3',
    pt = 'InfiniteTitle_congrats__hidden_9600cf7d',
    ft = 'InfiniteTitle_subtitle_a77973ac',
    bt = 'InfiniteTitle_timer_4d11422f',
    ht = 'InfiniteTitle_congratsSubtitle_5fe682a2',
    Ct = 'InfiniteTitle_congratsSubtitle__hidden_29c7c9af',
    vt = n(() => {
        const { model: e } = Pe(),
            { assetsPointer: t } = e.root.get(),
            s = e.computes.needChangePage(),
            { title: a } = e.infiniteCondition.get(),
            { dynamicTexts: n } = K('progression', { assetsPointer: t }),
            [d, c] = o.useState(!1),
            [_, l] = o.useState(!s),
            [g, u] = o.useState(!s);
        return i.jsxs('div', {
            className: r(dt, ct),
            onAnimationEnd: () => {
                s && c(!0);
            },
            children: [
                i.jsx('div', { className: r(_t, d && lt), onAnimationEnd: () => l(!0) }),
                i.jsx('div', { className: gt, children: a }),
                g
                    ? i.jsxs('div', {
                          className: ut,
                          children: [
                              i.jsx('div', { className: ft, children: n.infinite.infinityStep() }),
                              i.jsx('div', { className: r(bt), children: i.jsx(ke, { oneline: !0, classNames: bt }) }),
                          ],
                      })
                    : i.jsxs('div', {
                          className: r(mt, _ && pt),
                          onTransitionEnd: () => u(!0),
                          children: [
                              i.jsx('div', { className: ft, children: n.infinite.congratulations() }),
                              i.jsx('div', {
                                  className: r(ht, _ && Ct),
                                  children: n.infinite.mainProgressionFinished(),
                              }),
                          ],
                      }),
            ],
        });
    }),
    xt = 'CompletedProgression_279268c8',
    wt = 'CompletedProgression_container_d7c47390',
    It = 'CompletedProgression_base__final_413e479e',
    Pt = 'CompletedProgression_base__static_413e479e',
    Nt = 'CompletedProgression_base__infinite_413e479e',
    Et = 'CompletedProgression_glow_cca092f1',
    Rt = 'CompletedProgression_base__resettable_413e479e',
    Tt = 'CompletedProgression_title_3e7b1301',
    jt = 'CompletedProgression_congrats_e8822bc1',
    At = 'CompletedProgression_congratsSubtitle_e8dbd002',
    St = 'CompletedProgression_icon_1c9145a9',
    Ft = 'CompletedProgression_timer_4f044f1e',
    Qt = 'CompletedProgression_button_de4a031d',
    Lt = n(() => {
        const { model: e, controls: t } = Pe(),
            s = e.computes.pageStatus(),
            { isCompleted: a, isResettable: n, isInfinite: o } = _e(s),
            { assetsPointer: d } = e.root.get(),
            { dynamicTexts: c } = K('progression', { assetsPointer: d }),
            _ = !e.computes.needChangePage(),
            l = A({ size: G.medium }, { large: { size: G.large } });
        return a || o
            ? i.jsxs('div', {
                  className: r(xt, It, _ && Pt, n && Rt, o && Nt),
                  children: [
                      i.jsxs('div', {
                          className: wt,
                          children: [
                              o
                                  ? i.jsx(vt, {})
                                  : i.jsxs(i.Fragment, {
                                        children: [
                                            i.jsx('div', { className: Tt, children: c.title() }),
                                            i.jsx('div', { className: Et }),
                                            i.jsx('div', { className: jt, children: c.complete.congratulations() }),
                                            i.jsxs('div', {
                                                className: At,
                                                children: [
                                                    i.jsx(W, {
                                                        path: 'ui_kit.card.status_done',
                                                        width: 24,
                                                        height: 24,
                                                        className: St,
                                                    }),
                                                    c.complete.title(),
                                                ],
                                            }),
                                        ],
                                    }),
                              a && i.jsx(ke, { classNames: Ft }),
                          ],
                      }),
                      !o &&
                          i.jsx(V, {
                              className: Qt,
                              onClick: t.close,
                              size: l.size,
                              children: R.strings.fun_random.progression.complete.affirmative(),
                          }),
                  ],
              })
            : null;
    });
var yt = ((e) => ((e.Active = 'active'), (e.Completed = 'completed'), e))(yt || {});
const kt = {
        base: 'Point_38360539',
        base__twoPoints: 'Point_base__twoPoints_1893b78b',
        base__single_quest: 'Point_base__single_quest_e3f47efb',
        reason: 'Point_reason_34a1e661',
        score: 'Point_score_ae8e52b',
        base__completed: 'Point_base__completed_d8b7e333',
    },
    Dt = ({ reason: e, valueTemplate: t, value: s, twoPoints: a, singleQuest: n = !1, completed: o = !1 }) => {
        const { upscale: d } = q();
        return i.jsx(F, {
            text: R.strings.fun_random.progression.questsList.quest.progressChangeLabel.template(),
            className: r(
                kt.base,
                n && kt.base__single_quest,
                a && kt.base__twoPoints,
                o && kt.base__completed,
                d && kt.base__upscaled,
            ),
            params: {
                reason: i.jsx('span', { className: kt.reason, children: e }),
                value: t
                    ? i.jsx(F, { text: t, className: kt.score, params: { value: s }, upgradeLegacy: !0 })
                    : i.jsx('span', { className: kt.score, children: s }),
            },
        });
    },
    qt = R.strings.fun_random.progression.questsList.quest;
const Mt = R.images.gui.maps.icons.quests.battleCondition.c_128_decor,
    Ot = R.images.gui.maps.icons.quests.battleCondition.c_128;
const zt = {
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
    $t = n(({ progress: e }) => {
        const { model: t } = Pe(),
            { assetsPointer: s } = t.root.get(),
            { dynamicTexts: a } = K('progression', { assetsPointer: s });
        return i.jsx(F, {
            text: R.strings.fun_random.progression.questsList.quest.progressTitle(),
            className: zt.progress,
            params: {
                completed: i.jsx('div', {
                    className: zt.progressCompleted,
                    children: a.questsList.quest.infinityStageProgress(),
                }),
                currentPoints: i.jsx(g, {
                    className: zt.progressCurrent,
                    children: i.jsx(
                        u,
                        {
                            timeout: 3400,
                            classNames: { enter: zt.progressCurrentItem__enter, exit: zt.progressCurrentItem__exit },
                            children: i.jsx('div', { className: zt.progressCurrentItem, children: e }),
                        },
                        `progress-${e}`,
                    ),
                }),
                delimeter: i.jsx('div', { className: zt.progressDelimeter, children: R.strings.common.common.slash() }),
                totalPoints: i.jsx('div', { className: zt.infinity }),
            },
        });
    }),
    Bt = n(({ className: e, index: t = 0, infinite: s, progress: a }) => {
        const { model: n } = Pe(),
            o = n.computes.quest(t),
            d = n.computes.infiniteQuest(),
            c = s && d ? d : o,
            { cursor: _ } = n.cardsFan.computes,
            { sides: l, upscale: g } = q(),
            u = 1 === n.quests.get().length || s,
            m = (function (e, t, s) {
                if (t === yt.Completed) {
                    const e = 'icon_mission_completed_' + (s >= B.Large ? '128' : '90');
                    return { backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.quest.$dyn(e)})` };
                }
                if (s >= B.Large) {
                    const t = `icon_battle_condition_${e}_128x128`;
                    return { backgroundImage: `url(${Mt.$dyn(t) ?? Ot.$dyn(t)})` };
                }
                return {
                    backgroundImage: `url(${R.images.gui.maps.icons.quests.battleCondition.c_90.$dyn(`icon_battle_condition_${e}_90x90`)})`,
                };
            })(c.questCondition, c.state, l.width),
            [p, f] = (function ({ mainBonusCount: e, state: t, totalPoints: s, altBonusCount: a }) {
                return t === yt.Completed
                    ? [{ labelTemplate: qt.progressChangeLabel.pointsEarned(), value: s }]
                    : a
                      ? [
                            {
                                labelTemplate: qt.progressChangeLabel.forWin(),
                                valueTemplate: R.strings.common.plusValue(),
                                value: e,
                            },
                            {
                                labelTemplate: qt.progressChangeLabel.forLoss(),
                                valueTemplate: R.strings.common.plusValue(),
                                value: a,
                            },
                        ]
                      : [
                            {
                                labelTemplate: qt.progressChangeLabel.forCompletion(),
                                valueTemplate: R.strings.common.plusValue(),
                                value: e,
                            },
                        ];
            })(c);
        return i.jsxs('div', {
            className: r(
                zt.base,
                zt[`base__${c.state}`],
                zt[`base__cursor_${_}`],
                u && zt.base__single_quest,
                s && zt.base__infinite,
                g && zt.base__upscaled,
                e,
            ),
            children: [
                i.jsx('div', { className: zt.conditionIcon, children: i.jsx('div', { className: zt.icon, style: m }) }),
                i.jsxs('div', {
                    className: zt.content,
                    children: [
                        s
                            ? i.jsx($t, { progress: a })
                            : 9999 === c.totalProgress
                              ? i.jsx('div', {
                                    className: r(zt.progress, zt.progressCompleted),
                                    children: R.strings.fun_random.progression.questsList.quest.infinityProgress(),
                                })
                              : i.jsx(F, {
                                    text: R.strings.fun_random.progression.questsList.quest.progressTitle(),
                                    className: zt.progress,
                                    params: {
                                        completed: i.jsx('div', {
                                            className: zt.progressCompleted,
                                            children: R.strings.fun_random.progression.questsList.quest.completed(),
                                        }),
                                        currentPoints: i.jsx('div', {
                                            className: zt.progressCurrent,
                                            children: c.currentProgress,
                                        }),
                                        delimeter: i.jsx('div', {
                                            className: zt.progressDelimeter,
                                            children: R.strings.common.common.slash(),
                                        }),
                                        totalPoints: i.jsx('div', {
                                            className: zt.progressTotal,
                                            children: c.totalProgress,
                                        }),
                                    },
                                }),
                        i.jsx('div', { className: zt.title, children: c.description }),
                        i.jsxs('div', {
                            className: zt.points,
                            children: [
                                i.jsx(Dt, {
                                    value: p.value,
                                    valueTemplate: p.valueTemplate,
                                    reason: p.labelTemplate,
                                    singleQuest: u,
                                    twoPoints: Boolean(f) && !s,
                                    completed: c.state === yt.Completed,
                                }),
                                f &&
                                    i.jsxs(i.Fragment, {
                                        children: [
                                            i.jsx('div', { className: zt.pointBreak }),
                                            i.jsx(Dt, {
                                                value: f.value,
                                                valueTemplate: f.valueTemplate,
                                                reason: f.labelTemplate,
                                                singleQuest: u,
                                                twoPoints: !s,
                                                completed: c.state === yt.Completed,
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
    Gt = {
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
    Wt = 'first',
    Vt = 'second',
    Ht = 'third',
    Yt = 'fourth',
    Ut = {
        [Yt]: { timeout: 1e3, nextOnEntering: !1 },
        [Ht]: { timeout: 1400, nextOnEntering: !1 },
        [Vt]: { timeout: 1400, nextOnEntering: !0 },
        [Wt]: { timeout: 2500, nextOnEntering: !1 },
    },
    Xt = n(({ postfix: e, isDetached: t, nextTrigger: s, isTransitionActive: a }) => {
        const { model: n } = Pe(),
            d = o.useRef(!0),
            c = n.computes.needChangePage(),
            { timeout: _, nextOnEntering: l } = Ut[e],
            g = e === Wt,
            m = e === Yt,
            p = t ? se.Detaching : se.Inactive;
        return i.jsx(
            'div',
            {
                className: r(Gt.base, Gt[`base__${e}`], !g && Gt.base__completed, c && Gt.base__presentment),
                onAnimationStart: () => {
                    d.current && !m && (x.sound(ne.EvFepCardChange), (d.current = !1));
                },
                children: i.jsx(
                    u,
                    {
                        onEntered: l ? H : s,
                        onEntering: l ? s : H,
                        in: a,
                        timeout: _,
                        className: Gt.cardWrapper,
                        classNames: { enter: Gt.cardWrapper__enter, enterDone: Gt.cardWrapper__enterDone },
                        children: i.jsx('div', {
                            className: Gt.cardWrapper,
                            children: i.jsx(He, {
                                infinite: !0,
                                classMix: { content: Gt.content, shadow: Gt.shadow, pattern: Gt.pattern },
                                state: p,
                                rewardsSize: L.Big,
                            }),
                        }),
                    },
                    e,
                ),
            },
            e,
        );
    }),
    Zt = 'InfiniteCards_a57ec698',
    Jt = 'InfiniteCards_base__big_c727fc86',
    Kt = [Yt, Ht, Vt, Wt],
    es = ({ startAllowed: e, progressLevelUps: t }) => {
        const s = k(),
            { mediaHeight: a, mediaWidth: n } = q(),
            d = a >= $.Medium && n >= B.Medium,
            [c, _] = o.useState(0),
            [l, g] = o.useState(!1),
            [u, m] = o.useState(t);
        o.useEffect(
            () => (
                e &&
                    u > 0 &&
                    s.run(() => {
                        (_(1), g(!0));
                    }, 300),
                () => {
                    s.clear();
                }
            ),
            [e, u, l, s],
        );
        return i.jsx('div', {
            className: r(Zt, d && Jt),
            children: Kt.map((e, t) =>
                i.jsx(
                    Xt,
                    {
                        nextTrigger: () =>
                            ((e) => {
                                (x.sound(ne.EvFepCardChange),
                                    0 === e ? (m((e) => e - 1), g(!1), _(0)) : _(Kt.length + 1 - e));
                            })(t),
                        isTransitionActive: c > Kt.length - 1 - t,
                        postfix: e,
                        isDetached: l && c > 0 && 'first' === e,
                    },
                    e,
                ),
            ),
        });
    },
    ts = {
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
    ss = n(({ points: e, className: t, delay: s }) => {
        const { model: a } = Pe(),
            { maximumPoints: n } = a.infiniteCondition.get();
        return i.jsx('div', {
            className: r(ts.base, t),
            children: i.jsxs('div', {
                className: ts.conditionsPoints,
                children: [
                    i.jsx('div', {
                        className: ts.conditionsDescription,
                        children: R.strings.fun_random.progression.infinite.pointsEarned(),
                    }),
                    i.jsx(F, {
                        text: R.strings.fun_random.progression.steps(),
                        className: r(ts.conditionsPointsItem, ts.conditionsPointsItem__divider),
                        params: {
                            done: i.jsx(g, {
                                className: ts.currentPoint,
                                children: i.jsx(
                                    u,
                                    {
                                        timeout: s,
                                        onExited: () => {
                                            x.sound(ne.EvFepCounterChange);
                                        },
                                        classNames: {
                                            enter: ts.currentPointItem__enter,
                                            exit: ts.currentPointItem__exit,
                                        },
                                        children: i.jsx('div', { className: ts.currentPointItem, children: e }),
                                    },
                                    `points-${e}`,
                                ),
                            }),
                            delimeter: i.jsx('div', {
                                className: ts.conditionsPointsDelimeter,
                                children: R.strings.common.common.slash(),
                            }),
                            total: i.jsx('div', { className: ts.conditionsPointsTotal, children: n }),
                        },
                    }),
                ],
            }),
        });
    }),
    as = 'InfiniteProgression_e5621169',
    ns = 'InfiniteProgression_content_68048581',
    is = 'InfiniteProgression_questContainer_dd770113',
    rs = 'InfiniteProgression_questCondition_ec8c8f62',
    os = n(() => {
        const e = k(),
            { model: t } = Pe(),
            s = t.computes.needChangePage(),
            { prevCompleteCount: a, completeCount: n, prevPoints: r, currentPoints: d } = t.infiniteCondition.get(),
            [c, _] = o.useState({ previous: r, current: d }),
            [l, g] = o.useState(a),
            u = s ? 3100 : 2500,
            m = c.previous === c.current && l === n;
        return (
            o.useEffect(
                () => (
                    _({ previous: r, current: d }),
                    g(a),
                    e.run(() => {
                        (_((e) => ({ previous: e.current, current: e.current })), g(n));
                    }, u),
                    () => {
                        e.clear();
                    }
                ),
                [n, e, u, r, d, a],
            ),
            i.jsxs('div', {
                className: as,
                children: [
                    i.jsx(Lt, {}),
                    i.jsxs('div', {
                        className: ns,
                        children: [
                            i.jsx(es, { startAllowed: m, progressLevelUps: n - a }),
                            i.jsxs('div', {
                                className: is,
                                children: [
                                    i.jsx(Bt, { progress: l, infinite: !0 }),
                                    i.jsx(ss, { className: rs, delay: n - a > 0 ? 3400 : 1e3, points: c.previous }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    ds = 'CurrentPoints_bd285292',
    cs = 'CurrentPoints_prev_5b103642',
    _s = 'CurrentPoints_base__oneQuest_3970c66e',
    ls = 'CurrentPoints_current_4d4f9a08',
    gs = 'CurrentPoints_text_3c1f1e29',
    us = ({ prevPoints: e, currentPoints: t, animate: s, className: a, oneQuest: n }) => (
        o.useEffect(() => {
            s && e !== t && x.sound(ne.EvFepCounterChange);
        }, [s, t, e]),
        s && e !== t
            ? i.jsxs('div', {
                  className: r(ds, n && _s, a),
                  children: [
                      i.jsx('div', { className: gs, children: t }),
                      i.jsx('div', { className: cs, children: e }),
                      i.jsx('div', { className: ls, children: t }),
                  ],
              })
            : i.jsx('div', { className: r(ds, n && _s, a), children: e })
    ),
    ms = {
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
    ps = 'severalQuests',
    fs = { 1: 'oneQuest', 2: 'twoQuests' },
    bs = n(({ className: e }) => {
        const { model: t } = Pe(),
            { assetsPointer: s } = t.root.get(),
            a = t.condition.prevPoints.get(),
            n = t.condition.currentPoints.get(),
            o = t.condition.maximumPoints.get(),
            { completedWithAnimation: d, completedNoAnimation: c } = t.computes.finalAnimationStatus(),
            _ = t.cardsFan.model.progress.state.runCounter.get(),
            l = t.quests.get().length,
            g = l in fs ? fs[l] : ps;
        const u = l > 0 ? t.computes.quest(0).state : yt.Active,
            { upscale: m } = q(),
            { dynamicTexts: p } = K('progression', { assetsPointer: s });
        return c
            ? null
            : i.jsx('div', {
                  className: r(ms.base, d && ms.base__hide, m && ms.base__upscaled, e),
                  children: i.jsxs('div', {
                      className: r(ms[g], ms[`${g}__${u}`]),
                      children: [
                          i.jsx('div', {
                              className: ms.questsList,
                              children: w(l, (e) => i.jsx(Bt, { className: ms.quest, index: e }, e)),
                          }),
                          i.jsx('div', {
                              className: ms.currentProgress,
                              children:
                                  l > 1
                                      ? i.jsx(F, {
                                            text: p.questsList.totalPointsEarned(),
                                            className: ms.currentProgressTitle,
                                            params: {
                                                progressionSteps: i.jsx(F, {
                                                    text: R.strings.fun_random.progression.steps(),
                                                    className: ms.currentProgressPoints,
                                                    params: {
                                                        done: i.jsx(us, {
                                                            className: ms.currentProgressPointsEarned,
                                                            prevPoints: a,
                                                            currentPoints: n,
                                                            animate: _,
                                                        }),
                                                        delimeter: i.jsx('span', {
                                                            className: ms.currentProgressPointsDelimeter,
                                                            children: R.strings.common.common.slash(),
                                                        }),
                                                        total: i.jsx('span', {
                                                            className: ms.currentProgressPointsTotal,
                                                            children: o,
                                                        }),
                                                    },
                                                }),
                                            },
                                        })
                                      : i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx('div', {
                                                    className: ms.currentProgressTitle,
                                                    children: p.questsList.totalPointsEarnedStandAloneTitle(),
                                                }),
                                                i.jsx(F, {
                                                    text: R.strings.fun_random.progression.steps(),
                                                    className: ms.currentProgressPoints,
                                                    params: {
                                                        done: i.jsx(us, {
                                                            className: ms.currentProgressPointsEarned,
                                                            prevPoints: a,
                                                            currentPoints: n,
                                                            animate: _,
                                                            oneQuest: !0,
                                                        }),
                                                        delimeter: i.jsx('span', {
                                                            className: ms.currentProgressPointsDelimeter,
                                                            children: R.strings.common.common.slash(),
                                                        }),
                                                        total: i.jsx('span', {
                                                            className: ms.currentProgressPointsTotal,
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
    hs = 'RandomRewardsButton_bd7652e0',
    Cs = 'RandomRewardsButton_image_72ea278c',
    vs = 'RandomRewardsButton_text_52bc847e',
    xs = 'small',
    ws = 'medium',
    Is = 'big',
    Ps = (e, t) => ee(e).progression.random_rewards.$dyn(`random_rewards_icon_${t}`),
    Ns = ({ assetsPointer: e, onClick: t, className: s }) => {
        const { dynamicTexts: a } = K('progression', { assetsPointer: e }),
            n = A({ size: xs }, { medium: { size: ws }, large: { size: Is } });
        return i.jsxs('div', {
            className: r(hs, s),
            onMouseEnter: () => x.highlight(),
            onClick: () => {
                (x.click(), t());
            },
            children: [
                i.jsx('div', { className: Cs, style: { backgroundImage: `url(${Ps(e, n.size)})` } }),
                i.jsx('div', { className: vs, children: a.cardsFan.listOfRandomRewards() }),
            ],
        });
    },
    Es = {
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
    Rs = n(() => {
        const { model: e, controls: t } = Pe(),
            { completedWithAnimation: s, completedNoAnimation: a } = e.computes.finalAnimationStatus(),
            n = e.computes.pageStatus(),
            d = e.computes.needChangePage(),
            { cursor: c } = e.cardsFan.computes,
            { assetsPointer: _ } = e.root.get(),
            l = o.useRef(null),
            { isActive: g, isInfinite: u, isCompleted: f } = _e(n),
            [b, h] = o.useState(u && !d),
            [C, v] = o.useState(!1);
        (Y(t.close),
            o.useEffect(() => {
                h(u && !d);
            }, [u, d]));
        const [w, I] = m(() => ({
            from: { opacity: 1, transform: 'translateY(0rem)' },
            config: { duration: 500 },
            onRest: () => h(!0),
            onStart: () => {
                (x.sound(ne.EvFepInfStepTransition), v(!0));
            },
        }));
        return (
            o.useEffect(() => {
                u && d && I.start({ to: { opacity: 0, transform: 'translateY(20rem)' }, delay: 800 });
            }, [u, d, I, g]),
            o.useEffect(() => {
                C && (t.cardsFun.setState(ie.Blocked), t.cardsFun.setAssembled(!0));
            }, [t.cardsFun, C]),
            i.jsxs('div', {
                className: r(
                    Es.base,
                    Es[`base__${n}`],
                    Es[`base__cursor_${c.get()}`],
                    f && Es.base__completed,
                    s && Es.base__completedAnimated,
                ),
                children: [
                    i.jsx('div', {
                        className: Es.bg,
                        style: { backgroundImage: `url('${ee(_).library.progression_bg()}')` },
                    }),
                    i.jsxs('div', {
                        className: Es.content,
                        children: [
                            b
                                ? i.jsx(os, {})
                                : i.jsx('div', {
                                      className: Es.progressionContainer,
                                      children: i.jsxs(p.div, {
                                          style: w,
                                          className: Es.ordinaryProgression,
                                          children: [
                                              i.jsx(qe, { className: Es.header }),
                                              i.jsx(bs, { className: Es.questsList }),
                                              i.jsx('div', {
                                                  className: Es.cardProgressionContainer,
                                                  ref: l,
                                                  children: i.jsx(ot, {
                                                      className: Es.cardProgression,
                                                      containerRef: l,
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                            f && i.jsx('div', { className: Es.completedProgression, children: i.jsx(Lt, {}) }),
                        ],
                    }),
                    !a && i.jsx(Ns, { className: Es.toRandomRewards, onClick: t.onOpenTierList, assetsPointer: _ }),
                ],
            })
        );
    });
U(i.jsx(Ie, { children: i.jsx(X, { children: i.jsx(Z, { children: i.jsx(Rs, {}) }) }) }), { fullScreen: !0 }).then(() =>
    J(document.getElementById('root')),
);
