import {
    j as e,
    e as a,
    r as t,
    G as s,
    y as n,
    H as i,
    K as r,
    F as l,
    v as o,
    I as c,
    J as d,
    L as u,
    M as m,
    N as p,
    O as _,
    P as f,
    Q as v,
    S as b,
    w as h,
    T as g,
    A as y,
    _ as x,
    o as N,
    f as j,
    x as w,
    U as I,
    V as A,
    W as C,
    X as S,
    Y as B,
} from '../../../chunks/vendor.js';
import {
    F as P,
    r as k,
    b as E,
    e as T,
    D,
    f as V,
    g as z,
    h as O,
    j as H,
    k as W,
    B as M,
    l as G,
    d as F,
    m as $,
    n as L,
    I as X,
    o as K,
    p as q,
    q as U,
    A as Y,
    t as J,
    v as Z,
    w as Q,
    x as ee,
    i as ae,
    c as te,
    y as se,
    C as ne,
    z as ie,
    E as re,
    G as le,
    H as oe,
    K as ce,
    L as de,
    N as ue,
    O as me,
    P as pe,
    Q as _e,
    s as fe,
    R as ve,
    S as be,
    T as he,
    U as ge,
    W as ye,
    X as xe,
    Y as Ne,
    Z as je,
    _ as we,
    $ as Ie,
    a0 as Ae,
    a1 as Ce,
    a2 as Se,
    a3 as Be,
    a4 as Re,
    a5 as Pe,
    a6 as ke,
    a7 as Ee,
    a8 as Te,
    a9 as De,
    aa as Ve,
    ab as ze,
    ac as Oe,
    ad as He,
    ae as We,
    af as Me,
    ag as Ge,
    ah as Fe,
    ai as $e,
    aj as Le,
    ak as Xe,
    al as Ke,
    am as qe,
    an as Ue,
    ao as Ye,
    ap as Je,
    aq as Ze,
    ar as Qe,
    as as ea,
    at as aa,
    au as ta,
    av as sa,
    aw as na,
    ax as ia,
    ay as ra,
    az as la,
    aA as oa,
    aB as ca,
    aC as da,
    aD as ua,
    aE as ma,
    aF as pa,
    u as _a,
    aG as fa,
    aH as va,
    J as ba,
    aI as ha,
    M as ga,
    aJ as ya,
    a as xa,
    aK as Na,
    aL as ja,
} from '../../../chunks/lib.js';
import { g as wa, a as Ia, s as Aa, W as Ca, f as Sa, r as Ba } from '../../../chunks/flag_view_model.js';
/* empty css                    */ const Ra = 'BattleInfo_d5226211',
    Pa = 'BattleInfo_group_962f81f6',
    ka = 'BattleInfo_commendations_731c9f38',
    Ea = 'BattleInfo_commendations_counter_aef426',
    Ta = 'BattleInfo_commendations_icon_55a703a8',
    Da = [1, 19],
    Va = [1, 10],
    za = ({ className: t, finishReasonKey: s, status: n, modeName: i, arenaType: r, ...l }) => {
        const o = `battle_results.finish.reason.c_${s}${Va.includes(s) ? n : ''}`,
            c = Da.includes(r) ? `arenas.type.${i}.name` : `menu.loading.battleTypes.c_${r}`;
        return e.jsx(P, {
            ...l,
            upgradeLegacy: !0,
            path: 'battle_results.common.arena.fullName',
            params: { 0: e.jsx(P, { path: c }), 1: e.jsx(P, { path: o }) },
            className: a(Pa, t),
        });
    };
const Oa = -1;
const Ha = k.resolve('strings');
const Wa = t.forwardRef(function (t, s) {
    return e.jsx('div', { ...t, 'data-name': 'BattleInfo', ref: s, className: a(Ra, t.className) });
});
((Wa.Arena = function ({ arenaName: t, className: s, ...n }) {
    return e.jsx(P, {
        className: a(Pa, s),
        path: 'battle_results.common.arena.nameAndMode',
        params: { 0: t, 1: e.jsx(za, { ...n }) },
    });
}),
    (Wa.StartTime = ({ startTime: t, className: s, ...n }) =>
        e.jsx(P, {
            ...n,
            className: a(Pa, s),
            path: 'battle_results.common.startTime',
            params: { 0: T.formatDateTime(D.ShortDate, t), 1: T.formatDateTime(D.ShortTime, t) },
        })),
    (Wa.Player = function ({ className: t, vehicleName: s, userName: n, clan: i, ...r }) {
        return e.jsx(P, {
            ...r,
            upgradeLegacy: !0,
            className: a(Pa, t),
            path: 'battle_results.common.arena.fullName',
            params: {
                0: i
                    ? e.jsx(P, { path: 'battle_results.common.player.nameWithClan', params: { name: n, clan: i } })
                    : n,
                1: s,
            },
        });
    }),
    (Wa.PlayerStatus = function ({ className: t, deathReasonKey: s, killer: n, abandonBattle: i, ...r }) {
        const l = (function ({ deathReasonKey: e, abandonBattle: a }) {
            return a ? 'prematureLeave' : e === Oa ? 'alive' : `dead${e}`;
        })({ deathReasonKey: s, abandonBattle: i });
        if (
            (n.username || n.fakeUsername) &&
            !i &&
            s !== Oa &&
            (function (e) {
                return Boolean(Ha.read(`battle_results.common.vehicleState.${e}_with_killername`));
            })(l)
        ) {
            const s = n.anonymizer ? n.fakeUsername : n.username;
            return e.jsx(P, {
                ...r,
                className: a(Pa, t),
                path: `battle_results.common.vehicleState.${l}_with_killername`,
                params: {
                    killername: n.clanAbbreviation
                        ? e.jsx(P, {
                              path: 'battle_results.common.player.nameWithClan',
                              params: { name: s, clan: n.clanAbbreviation },
                          })
                        : s,
                },
            });
        }
        return e.jsx(P, { ...r, className: a(Pa, t), path: `battle_results.common.vehicleState.${l}` });
    }),
    (Wa.CommendationScore = function ({ commendationsReceived: t }) {
        const s = t > 0,
            n = k.resolve('strings'),
            i =
                1 === t
                    ? 'battle_results.comms.likes.pbs.tooltip.bodySingle'
                    : 'battle_results.comms.likes.pbs.tooltip.body',
            r = E({
                header: n.readOrEmpty('battle_results.comms.likes.pbs.tooltip.header'),
                body: n.readOrEmpty(i).replace('{{var}}', t.toString()),
            });
        return s
            ? e.jsxs('div', {
                  ...r,
                  className: a(Pa, ka),
                  children: [e.jsx('div', { className: Ea, children: t }), e.jsx('div', { className: Ta })],
              })
            : null;
    }));
const Ma = 'AnimatedValue_d9f4b2f0',
    Ga = 'AnimatedValue_animatedValue_4c490d83',
    Fa = V.cubicBezier(0.33, 0, 0.25, 1);
function $a(e) {
    return {
        enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
        leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
    };
}
function La({ value: i, transition: r, children: l, className: o, classNames: c }) {
    const d = t.useMemo(wa, []),
        u = s(i, {
            ...r,
            initial: { opacity: 1, y: '0rem', ...(null == r ? void 0 : r.initial) },
            from: { opacity: 0, y: '-5rem', ...(null == r ? void 0 : r.from) },
            enter: () => ({
                opacity: 1,
                y: '0rem',
                delay: 330,
                config: { easing: Fa, duration: 330 },
                onStart: () => {
                    const { enterElements: e, leftElements: a } = $a(d);
                    (e.forEach((e) => {
                        e instanceof HTMLElement && ((e.style.width = 'auto'), (e.style.position = 'relative'));
                    }),
                        a.forEach((e) => {
                            e instanceof HTMLElement && (e.style.position = 'absolute');
                        }));
                },
                ...(null == r ? void 0 : r.enter),
            }),
            leave: () => ({
                top: 0,
                left: 0,
                opacity: 0,
                y: '5rem',
                config: { easing: Fa, duration: 330 },
                onStart: () => {
                    let e = 0;
                    const { enterElements: a, leftElements: t } = $a(d);
                    (t.forEach((a) => {
                        a instanceof HTMLElement && ((e = Math.max(e, a.offsetWidth)), (a.style.position = 'relative'));
                    }),
                        a.forEach((a) => {
                            a instanceof HTMLElement && ((a.style.width = `${e}px`), (a.style.position = 'absolute'));
                        }));
                },
                ...(null == r ? void 0 : r.leave),
            }),
        });
    return e.jsx('div', {
        className: a(Ma, o),
        children: u((t, s) => {
            const r = 0 === t.opacity.get() && !1 === t.opacity.isAnimating;
            return e.jsx(n.div, {
                className: a(
                    Ga,
                    `js-animated-value-${d}-${i === s ? 'enter' : 'leave'}`,
                    null == c ? void 0 : c.animatedValue,
                ),
                style: { ...t, position: r ? 'absolute' : 'relative' },
                children: l(s),
            });
        }),
    });
}
const Xa = 'idle',
    Ka = 'progress',
    qa = 'waiting',
    Ua = t.createContext(null),
    Ya = 1;
function Ja({ read: e, shownNotificationSize: a, bubbleCounter: t, notification: s }) {
    return void 0 === s ? t : e || 0 === a ? Ya : t + 1;
}
function Za() {
    const e = t.useContext(Ua);
    if (null === e)
        throw new Error('You can use the notifications context hooks only with the NotificationsProvider component');
    return e;
}
const Qa = {
        valueContainer: 'Bubble_valueContainer_8b7ced74',
        valueContainer__medium: 'Bubble_valueContainer__medium_a9175d93',
        value: 'Bubble_value_5eacd6f5',
        value__medium: 'Bubble_value__medium_3232d6e8',
    },
    et = V.cubicBezier(0.75, 0, 0.67, 1),
    at = V.cubicBezier(0.33, 0, 0.25, 1);
function tt(a, t) {
    return 'number' == typeof a
        ? (function (a, t) {
              return a > t
                  ? e.jsx(P, { path: 'common.valuePlus', params: { value: T.formatNumber('integral', t) } })
                  : T.formatNumber('integral', a);
          })(a, t)
        : a;
}
const st = t.memo(function ({ size: s, className: n, classNames: i, target: r, ...l }) {
        const { state: o, items: c } = Za(),
            d = H(),
            u = o.value === Ka || (o.value === qa && !1 === o.read),
            m = W({ value: G.small }, { medium: { value: G.medium } }),
            p = t.useMemo(() => {
                var e, a, t;
                return {
                    ...(null == l ? void 0 : l.rootTransition),
                    initial: {
                        opacity: 0,
                        y: '-5rem',
                        ...(null == (e = null == l ? void 0 : l.rootTransition) ? void 0 : e.initial),
                    },
                    from: {
                        opacity: 0,
                        y: '-5rem',
                        ...(null == (a = null == l ? void 0 : l.rootTransition) ? void 0 : a.from),
                    },
                    enter: {
                        opacity: 1,
                        y: '0',
                        delay: 0,
                        config: { easing: et, duration: 330 },
                        onRest: () => {
                            u && d.play('notificationBubbleAppeared', { target: r || 'mission-progress:bubble' });
                        },
                        ...(null == (t = l.rootTransition) ? void 0 : t.enter),
                    },
                    leave: { opacity: 0, y: '0', delay: 0, config: { duration: 330, easings: at } },
                };
            }, [r, l.rootTransition, d, u]),
            _ = t.useMemo(() => {
                var e, a, t;
                return {
                    ...(null == l ? void 0 : l.countTransition),
                    initial: {
                        opacity: 1,
                        y: '0',
                        ...(null == (e = null == l ? void 0 : l.countTransition) ? void 0 : e.initial),
                    },
                    from: { opacity: 0, y: '-5rem' },
                    enter: {
                        opacity: 1,
                        y: '0',
                        config: { easing: at, duration: 170 },
                        delay: 170,
                        onRest: () => {
                            d.play('notificationBubbleAppeared', { target: r || 'mission-progress:bubble' });
                        },
                        ...(null == (a = null == l ? void 0 : l.countTransition) ? void 0 : a.enter),
                    },
                    leave: {
                        opacity: 0,
                        y: '5rem',
                        delay: 0,
                        config: { easing: at, duration: 170 },
                        ...(null == (t = null == l ? void 0 : l.countTransition) ? void 0 : t.leave),
                    },
                };
            }, [l.countTransition, d, r]);
        return e.jsx(La, {
            value: u,
            transition: p,
            className: n,
            children: (t) =>
                t &&
                e.jsx(M.Root, {
                    children: e.jsx('div', {
                        className: a(
                            Qa.valueContainer,
                            Qa[`valueContainer__${s ?? m.value}`],
                            null == i ? void 0 : i.valueContainer,
                        ),
                        children: e.jsx(La, {
                            value: o.bubbleCounter >= c.length ? c.length : o.bubbleCounter,
                            transition: _,
                            children: (t) =>
                                e.jsx('div', {
                                    className: a(Qa.value, Qa[`value__${s ?? m.value}`], null == i ? void 0 : i.value),
                                    children: tt(t, 99),
                                }),
                        }),
                    }),
                }),
        });
    }),
    nt = 'Items_9477a756',
    it = 'Items_animatedValue_6a64bc54',
    rt = 'Items_plug_a7a8cadf',
    lt = V.cubicBezier(0.75, 0, 0.67, 1),
    ot = V.cubicBezier(0.1, 0, 0.9, 1),
    ct = V.cubicBezier(0.33, 0, 0.25, 1),
    dt = F('NotificationItem', nt),
    ut = {
        Bubble: st,
        Items: t.memo(function ({ transition: a, ...t }) {
            var i;
            const { items: r, state: l } = Za(),
                o = s(l.currentNotification, {
                    ...a,
                    key: l.currentNotification,
                    initial: { opacity: 0, y: '-5rem', x: '-50%', ...(null == a ? void 0 : a.initial) },
                    from: { opacity: 0, y: '-5rem', x: '-50%', ...(null == a ? void 0 : a.from) },
                    enter: [
                        {
                            opacity: 1,
                            y: '0',
                            x: '-50%',
                            config: { easing: lt, duration: 330 },
                            ...(null == a ? void 0 : a.enter),
                        },
                        { y: '2rem', x: '-50%', opacity: 1, config: { duration: 800, easing: ot } },
                    ],
                    leave: {
                        y: l.value === Xa ? '0' : '5rem',
                        x: '-50%',
                        opacity: 0,
                        config: { duration: l.value === Xa ? 330 : 170, easing: l.value === Xa ? ct : lt },
                    },
                });
            return e.jsxs(dt, {
                ...t,
                children: [
                    e.jsx('div', {
                        className: rt,
                        children: l.currentNotification || (null == (i = r[r.length - 1]) ? void 0 : i.item),
                    }),
                    o((a, t) => e.jsx(n.div, { className: it, style: a, children: t })),
                ],
            });
        }),
        Provider: function ({ items: a, children: s }) {
            const [n, i] = t.useState(() => ({
                    read: !1,
                    value: Xa,
                    bubbleCounter: Ya,
                    currentNotification: void 0,
                    shownNotifications: new Set(),
                })),
                r = t.useMemo(
                    () => a.some(({ id: e }) => !1 === n.shownNotifications.has(e)),
                    [a, n.shownNotifications],
                );
            z(
                () => {
                    i((e) => {
                        const t = a.find(({ id: a }) => !1 === e.shownNotifications.has(a));
                        return {
                            ...e,
                            read: !1,
                            currentNotification: null == t ? void 0 : t.item,
                            shownNotifications: void 0 !== t ? O(e.shownNotifications, t.id) : e.shownNotifications,
                            bubbleCounter: void 0 !== t ? e.bubbleCounter + 1 : e.bubbleCounter,
                        };
                    });
                },
                n.value === Ka && void 0 !== n.currentNotification ? 1130 : void 0,
            );
            const l = t.useMemo(
                () => ({
                    start() {
                        i((e) => {
                            if (e.value === Ka || 0 === a.length) return e;
                            const t = a.find(({ id: a }) => !1 === e.shownNotifications.has(a));
                            return {
                                ...e,
                                read: !1,
                                currentNotification: null == t ? void 0 : t.item,
                                shownNotifications: void 0 !== t ? O(e.shownNotifications, t.id) : e.shownNotifications,
                                value: Ka,
                                bubbleCounter: Ja({
                                    notification: t,
                                    read: e.read,
                                    shownNotificationSize: e.shownNotifications.size,
                                    bubbleCounter: e.bubbleCounter,
                                }),
                            };
                        });
                    },
                    read() {
                        i((e) => ({
                            ...e,
                            value: Xa,
                            read: !0,
                            currentNotification: void 0,
                            shownNotifications: new Set(a.map((e) => e.id)),
                        }));
                    },
                    wait() {
                        i((e) => (e.value === qa ? e : { ...e, value: qa, currentNotification: void 0 }));
                    },
                }),
                [a],
            );
            (t.useEffect(() => {
                n.value === qa && r && l.start();
            }, [l, n.value, r]),
                t.useEffect(() => {
                    void 0 === n.currentNotification && n.value === Ka && !1 === r && l.wait();
                }, [n.currentNotification, n.value, l, r]));
            const o = t.useMemo(() => ({ state: n, items: a, controls: l, hasUnreadNotifications: r }), [a, n, l, r]);
            return e.jsx(Ua.Provider, { value: o, children: s });
        },
    },
    mt = {
        initial: 'initial',
        first: 'first',
        second: 'second',
        third: 'third',
        fourth: 'fourth',
        fifth: 'fifth',
        sixth: 'sixth',
        immediate: 'immediate',
    },
    pt = V.cubicBezier(0.33, 0, 0.25, 1),
    _t = 400,
    ft = t.createContext(null);
function vt() {
    const e = t.useContext(ft);
    if (null === e)
        throw new Error('You can use the animation context hooks only with the AnimationProvider component');
    return e;
}
function bt({ children: a }) {
    const [s, n] = t.useState(mt.initial),
        [r, l] = t.useState(new Set()),
        [o, c] = t.useState(!1),
        [d, u] = t.useState(!1),
        m = $(),
        p = H(),
        { active: _ } = L(),
        f = i(),
        v = i(),
        b = i(),
        h = i(),
        g = i(),
        y = i(),
        x = i(),
        N = i(),
        j = i(),
        w = t.useCallback(
            function (e) {
                n(e);
            },
            [n],
        );
    (t.useEffect(() => {
        s === mt.immediate && l(new Set(Object.values(mt)));
    }, [s]),
        t.useEffect(() => {
            switch (s) {
                case mt.immediate:
                    return (
                        f.start({ y: '0', opacity: 1, immediate: !0 }),
                        v.start({ opacity: 1, y: '0', immediate: !0 }),
                        b.start({ maskSize: '100% 100%', immediate: !0 }),
                        h.start({ opacity: 1, y: '0', immediate: !0 }),
                        g.start({ opacity: 1, y: '0', immediate: !0 }),
                        y.start({ opacity: 1, immediate: !0 }),
                        N.start({ maskSize: '100% 100%', immediate: !0 }),
                        j.start({ opacity: 1, immediate: !0 }),
                        void x.start({ opacity: 1, immediate: !0 })
                    );
                case mt.initial:
                    return void n(_ === Ia.overview ? mt.first : mt.immediate);
                case mt.first:
                    return (
                        p.play('showBattleResult', { target: 'animation-context' }),
                        f.start({ y: '0', opacity: 1, config: { duration: _t, easing: pt } }),
                        void v.start({
                            opacity: 1,
                            y: '0',
                            config: { duration: _t, easing: pt },
                            onRest: () => {
                                (n(mt.second), l((e) => O(e, mt.first)));
                            },
                        })
                    );
                case mt.second:
                    return (
                        b.start({
                            maskSize: '100% 100%',
                            config: { duration: _t, easing: pt },
                            onRest: () => {
                                l((e) => O(e, mt.second));
                            },
                        }),
                        void m.run(() => {
                            (n(mt.third), m.clear());
                        }, 280)
                    );
                case mt.third:
                    return (
                        h.start({ opacity: 1, y: '0', config: { duration: _t, easing: pt } }),
                        g.start({ opacity: 1, y: '0', config: { duration: _t, easing: pt } }),
                        y.start({
                            opacity: 1,
                            config: { duration: _t, easing: pt },
                            onRest: () => {
                                l((e) => O(e, mt.third));
                            },
                        }),
                        void m.run(() => {
                            (n(mt.fourth), m.clear());
                        }, 280)
                    );
                case mt.fourth:
                    return (
                        N.start({
                            maskSize: '100% 100%',
                            config: { duration: _t, easing: pt },
                            onRest: () => {
                                l((e) => O(e, mt.fourth));
                            },
                        }),
                        void m.run(() => {
                            (n(mt.fifth), m.clear());
                        }, 120)
                    );
                case mt.fifth:
                    (j.start({ opacity: 1, config: { duration: _t, easing: pt } }),
                        x.start({
                            opacity: 1,
                            config: { duration: _t, easing: pt },
                            onRest: () => {
                                l((e) => O(e, mt.fifth));
                            },
                        }));
                    break;
                default:
                    return;
            }
        }, [_, s, p, m, x, w, r]));
    const I = t.useMemo(
        () => ({
            step: s,
            handleStep: w,
            completedSteps: r,
            allMedalsAnimated: o,
            bonusRef: g,
            hintKeyRef: y,
            dividerRef: b,
            battleInfoRef: x,
            navigationRef: f,
            battleStatusRef: v,
            overlayDividerRef: N,
            earnedCurrenciesRef: h,
            personalEfficiencyRef: j,
            setAllMedalsAnimated: c,
            setAllCurrenciesAniamted: u,
            readyForNotifications: o && d && r.has(mt.fifth),
        }),
        [s, w, o, d, r],
    );
    return e.jsx(ft.Provider, { value: I, children: a });
}
const ht = { base: 'Divider_80a19f4b' };
function gt({ classNames: t }) {
    return e.jsx('div', {
        className: a(ht.base, null == t ? void 0 : t.base),
        children: e.jsx(X, {
            className: null == t ? void 0 : t.image,
            width: '100%',
            height: '100%',
            path: 'post_battle.row_divider',
            fit: 'cover',
        }),
    });
}
const yt = 'Header_content_b9e0be90',
    xt = 'Header_title_91e5448a',
    Nt = 'Header_divider_eb019c6',
    jt = 'Header_dividerImage_19f6e11',
    wt = F('Header', 'Header_70aa1da5'),
    It = t.forwardRef(({ title: t, children: s, classNames: n, ...i }, r) => {
        const l = k.resolve('strings');
        return e.jsxs(wt, {
            ...i,
            ref: r,
            children: [
                e.jsxs('div', {
                    className: a(yt, null == n ? void 0 : n.content),
                    children: [
                        e.jsx('div', {
                            className: a(xt, null == n ? void 0 : n.title),
                            children: T.toUpperCase(l.readOrEmpty(t)),
                        }),
                        s,
                    ],
                }),
                e.jsx(gt, { classNames: { base: a(Nt, null == n ? void 0 : n.divider), image: jt } }),
            ],
        });
    }),
    At = t.forwardRef((a, t) => e.jsx(It, { ...a, title: 'battle_results.details.xp', ref: t })),
    Ct = (e) => {
        const [a, s] = t.useState(!1);
        return (
            t.useEffect(() => {
                const a = () => {
                        const [a, t] = e.getBounds(),
                            n = e.animationScroll.scrollPosition.get(),
                            i = e.contentRef.current;
                        if (i) {
                            if (0 === t) return ((i.style.mask = 'none'), void s(!0));
                            const e = (n / t) * 10;
                            ((i.style.mask = `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) ${e}%, rgba(0, 0, 0, 1) ${90 + e}%, transparent 100%)`),
                                s(!0));
                        }
                    },
                    t = e.events.on('change', a),
                    n = e.events.on('resizeHandled', a),
                    i = e.events.on('recalculateContent', a);
                return (
                    a(),
                    () => {
                        (t(), n(), i());
                    }
                );
            }, [e]),
            a
        );
    },
    St = 'IncomeStatement_c4136bc5',
    Bt = 'IncomeStatement_verticalBar_5fb90511',
    Rt = 'IncomeStatement_scrollWrapper_ce2dde41',
    Pt = 'IncomeStatement_scrollContent_72ffb2ee',
    kt = 'IncomeStatement_scrollContent__initialized_ce1144d0',
    Et = F('CreditsIncomeStatement'),
    Tt = ({ children: t }) => {
        const s = U(),
            n = Ct(s.api);
        return e.jsx(Y, { classNames: { wrapper: Rt, content: a(Pt, n && kt) }, children: t });
    },
    Dt = t.forwardRef(({ children: t, className: s, scrollable: n, ...i }, r) =>
        e.jsx(Et, {
            className: a(St, s),
            ...i,
            ref: r,
            children: n
                ? e.jsxs(K, { children: [e.jsx(Tt, { children: t }), e.jsx(q, { classNames: { base: Bt } })] })
                : t,
        }),
    ),
    Vt = 'xp',
    zt = 'freeXP',
    Ot = 'credits',
    Ht = 'gold',
    Wt = 'originalCrystals',
    Mt = 'eventCrystals',
    Gt = 'autoEquipCrystals',
    Ft = 'totalCrystals',
    $t = 'originalXP',
    Lt = 'achievementXP',
    Xt = 'originalXPPenalty',
    Kt = 'igrBonusXP',
    qt = 'firstWinXP',
    Ut = 'additionalBonusXP',
    Yt = 'boostersXP',
    Jt = 'tacticalTrainingXP',
    Zt = 'eventXP',
    Qt = 'referralBonusXP',
    es = 'premiumVehicleXP',
    as = 'squadBonusXP',
    ts = 'squadPenaltyXP',
    ss = 'wotPlusBonusXP',
    ns = 'totalXP',
    is = 'originalFreeXP',
    rs = 'achievementFreeXP',
    ls = 'igrBonusFreeXP',
    os = 'firstWinFreeXP',
    cs = 'additionalBonusFreeXP',
    ds = 'boostersFreeXP',
    us = 'militaryManeuversFreeXP',
    ms = 'eventFreeXP',
    ps = 'premiumVehicleFreeXP',
    _s = 'wotPlusBonusFreeXP',
    fs = 'totalFreeXP',
    vs = 'baseEarnedCredits',
    bs = 'squadBonusCredits',
    hs = 'achievementCredits',
    gs = 'boostersCredits',
    ys = 'petSystemBonusCredits',
    xs = 'battlePaymentsCredits',
    Ns = 'eventPaymentsCredits',
    js = 'referralBonusCredits',
    ws = 'wotPlusBonusCredits',
    Is = 'friendlyFirePenaltyCredits',
    As = 'friendlyFireCompensationCredits',
    Cs = 'piggyBankCredits',
    Ss = 'autoRepairCredits',
    Bs = 'autoLoadCredits',
    Rs = 'autoEquipCredits',
    Ps = 'intermediateTotalCredits',
    ks = 'totalCredits',
    Es = 'goldEventPayments',
    Ts = 'goldPiggyBank',
    Ds = 'intermediateTotalGold',
    Vs = 'totalGold',
    zs = 'aogasFactor',
    Os = 'deserterViolation',
    Hs = 'afkViolation',
    Ws = 'suicideViolation',
    Ms = new Set([Xt, Qt, as, ts, Jt]),
    Gs = new Set([us]),
    Fs = new Set([vs, bs, hs, gs, xs, js, ys, ws, Os, Ws, Hs, Is, As, zs, Ss, Bs, Rs]),
    $s = {
        [Lt]: rs,
        [Ut]: cs,
        [Hs]: Hs,
        [zs]: zs,
        [Yt]: ds,
        [Os]: Os,
        [Zt]: ms,
        [qt]: os,
        [Kt]: ls,
        [$t]: is,
        [es]: ps,
        [Ws]: Ws,
        [ns]: fs,
        [ss]: _s,
    },
    Ls = { [Ns]: Es, [Ps]: Ds, [Cs]: Ts, [ks]: Vs },
    Xs = [Wt, Mt, Gt, Ft],
    Ks = [
        $t,
        is,
        Lt,
        rs,
        Xt,
        Kt,
        ls,
        qt,
        os,
        Ut,
        cs,
        Yt,
        ds,
        Jt,
        us,
        Zt,
        ms,
        Qt,
        es,
        ps,
        as,
        ts,
        zs,
        ss,
        _s,
        Os,
        Ws,
        Hs,
        ns,
        fs,
    ],
    qs = [vs, bs, hs, gs, ys, xs, Ns, Es, js, ws, Os, Ws, Hs, Is, As, zs, Ps, Ds, Ss, Bs, Rs, ks, Vs, Cs, Ts],
    Us = new Set([Ft, $t, is, ns, fs, vs, As, Ps, Ds, Ss, Bs, Rs, ks, Vs, Cs, Ts]),
    Ys = new Set([ks, Vs, Ds, Ps]),
    Js = 'multiplier',
    Zs = 'firstWinMultiplier',
    Qs = 'fractionalMultiplier',
    en = 'percent',
    an = 'plus',
    tn = {
        [Kt]: Js,
        [ls]: Js,
        [qt]: Zs,
        [os]: Zs,
        [Ut]: Js,
        [cs]: Js,
        [zs]: Qs,
        [Os]: en,
        [Ws]: en,
        [Hs]: en,
        [Cs]: an,
        [Ts]: an,
    };
function sn(e) {
    const a = Number(e.trim());
    return Number.isNaN(a)
        ? (console.error(`Invalid referral factor: "${e}" is not a number.`), 0)
        : Math.round(100 * a);
}
function nn(e) {
    const a = Number(e.trim());
    return Number.isNaN(a) ? (console.error(`Invalid percent bonus: "${a}" is not a number.`), 0) : a;
}
function rn(e) {
    return Us.has(e.paramName);
}
function ln(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.hasAogasFine);
}
function on(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.isEnabled);
}
const cn = { [$t]: rn, [is]: rn, [ns]: rn, [fs]: rn, [zs]: ln, [ss]: on, [_s]: on },
    dn = {
        [vs]: rn,
        [As]: rn,
        [Ps]: rn,
        [Ds]: rn,
        [Ss]: rn,
        [Bs]: rn,
        [Rs]: rn,
        [ks]: rn,
        [Vs]: rn,
        [zs]: ln,
        [ws]: on,
        [Cs]: rn,
    };
function un(e) {
    return !1 !== Ys.has(e.paramName) && 0 === e.standard.gold && 0 === e.premium.gold;
}
const mn = { [Ps]: (e) => !1 === un(e), [ks]: (e) => !1 === un(e), [Cs]: (e, a) => a },
    pn = { [Vt]: 'library.xp', [zt]: 'library.freeXp', [Ot]: 'library.credits', [Ht]: 'library.gold' },
    _n = [zs, Os, Hs, Ws];
function fn(e) {
    return e === Vt ? 'library.x2_combatExp' : 'library.x2_combatFreeExp';
}
const vn = {
    [Kt]: (e) => 'library.x2_combatExp',
    [ls]: (e) => 'library.x2_combatExp',
    [qt]: fn,
    [os]: fn,
    [Ut]: fn,
    [cs]: fn,
};
function bn(e, a) {
    if (void 0 === a || _n.includes(a)) return;
    const t = vn[a];
    return t ? t(e) : pn[e];
}
function hn(e, a) {
    return Xs.indexOf(e.paramName) - Xs.indexOf(a.paramName);
}
function gn(e, a) {
    return Ks.indexOf(e.paramName) - Ks.indexOf(a.paramName);
}
function yn(e, a) {
    return qs.indexOf(e.paramName) - qs.indexOf(a.paramName);
}
function xn(e) {
    return {
        paramName: e.paramName,
        currencyType: e.currencyType,
        baseValue: e.baseValue,
        premiumValue: e.premiumValue,
        recordsItemsDetails: Z(e.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
}
function Nn(e, a) {
    const t = [],
        s = [];
    for (const n of e) a(n) ? t.push(n) : s.push(n);
    return [t, s];
}
function jn(e, a) {
    const t = J(e.earned, xn),
        s = J(e.expenses, xn),
        n = J(e.total, xn),
        i = [Ps, Ds],
        r = [Cs, Ts],
        [l, o] = Nn(n, (e) => i.includes(e.paramName)),
        [c, d] = Nn([...t, ...l], (e) => r.includes(e.paramName));
    return {
        records: [...d, ...s].sort(a),
        total: ((u = [...o, ...c]),
        u.filter((e) => {
            const a = Boolean(e.premiumValue || e.baseValue),
                t = Us.has(e.paramName);
            return a || t;
        })).sort(a),
    };
    var u;
}
const wn = (e) => e in tn;
function In({ xp: e, freeXp: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    ee('string' == typeof t, 'xp or freeXp paramName is not provided');
    const s = wn(t) ? tn[t] : void 0,
        n =
            void 0 !== (null == e ? void 0 : e.recordsItemsDetails) && Object.keys(e.recordsItemsDetails).length > 0
                ? e.recordsItemsDetails
                : null == a
                  ? void 0
                  : a.recordsItemsDetails;
    return {
        paramName: t,
        premium: { xp: null == e ? void 0 : e.premiumValue, freeXp: null == a ? void 0 : a.premiumValue },
        standard: { xp: null == e ? void 0 : e.baseValue, freeXp: null == a ? void 0 : a.baseValue },
        recordsItemsDetails: n,
        modifier: s,
    };
}
function An({ credits: e, gold: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    ee('string' == typeof t, 'credits or gold paramName is not provided');
    const s = wn(t) ? tn[t] : void 0,
        n =
            void 0 !== (null == e ? void 0 : e.recordsItemsDetails) && Object.keys(e.recordsItemsDetails).length > 0
                ? null == e
                    ? void 0
                    : e.recordsItemsDetails
                : null == a
                  ? void 0
                  : a.recordsItemsDetails;
    return {
        paramName: t,
        premium: { credits: null == e ? void 0 : e.premiumValue, gold: null == a ? void 0 : a.premiumValue },
        standard: { credits: null == e ? void 0 : e.baseValue, gold: null == a ? void 0 : a.baseValue },
        recordsItemsDetails: n,
        modifier: s,
    };
}
const Cn = (e) => e in $s;
function Sn(e, a) {
    const t = e.paramName;
    return (ee(Cn(t), `No analogue for ${t} in free xp parameter names`), a.find((e) => $s[t] === e.paramName));
}
const Bn = (e) => e in Ls;
function Rn(e, a) {
    const t = e.paramName;
    return (ee(Bn(t), `No analogue for ${t} in gold parameter names`), a.find((e) => Ls[t] === e.paramName));
}
function Pn(e, a) {
    const t = (function (e, a) {
        return [
            ...Q(
                a,
                (e) => Gs.has(e.paramName),
                (e) => In({ freeXp: e }),
            ),
            ...J(e, (e) => (Ms.has(e.paramName) ? In({ xp: e }) : In({ xp: e, freeXp: Sn(e, a) }))),
        ];
    })(e, a);
    return t
        .filter((e) => {
            const a = cn[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.freeXp || e.premium.xp || e.standard.freeXp || e.standard.xp);
        })
        .sort(gn);
}
function kn(e, a) {
    const t = (function (e, a) {
        return J(e, (e) => (Fs.has(e.paramName) ? An({ credits: e }) : An({ credits: e, gold: Rn(e, a) })));
    })(e, a);
    return t
        .filter((e) => {
            const a = dn[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.credits || e.premium.gold || e.standard.credits || e.standard.gold);
        })
        .sort(yn);
}
function En(e) {
    return ((a = e),
    a.filter((e) => {
        const a = Boolean(e.baseValue || e.premiumValue),
            t = Us.has(e.paramName);
        return a || t;
    })).sort(hn);
    var a;
}
function Tn({ xp: e, freeXp: a }) {
    return (function (e, a) {
        return { records: Pn(e.records, a.records), total: Pn(e.total, a.total) };
    })(
        jn({ earned: e.earned, expenses: e.expenses, total: e.total }),
        jn({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
function Dn({ credits: e, gold: a }) {
    return (function (e, a) {
        return { records: kn(e.records, a.records), total: kn(e.total, a.total) };
    })(
        jn({ earned: e.earned, expenses: e.expenses, total: e.total }),
        jn({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
const [Vn, zn] = ae()(({ observableModel: e }) => {
        const a = {
                ...e.primitives(['hasAnyPremium', 'hasWotPlus'], 'additionalBonus'),
                xp: {
                    earned: e.arrayClone('financialReport.xp.earned'),
                    expenses: e.arrayClone('financialReport.xp.expenses'),
                    total: e.arrayClone('financialReport.xp.total'),
                    free: {
                        earned: e.arrayClone('financialReport.freeXp.earned'),
                        expenses: e.arrayClone('financialReport.freeXp.expenses'),
                        total: e.arrayClone('financialReport.freeXp.total'),
                    },
                },
                credits: {
                    earned: e.arrayClone('financialReport.credits.earned'),
                    expenses: e.arrayClone('financialReport.credits.expenses'),
                    total: e.arrayClone('financialReport.credits.total'),
                },
                gold: {
                    earned: e.arrayClone('financialReport.gold.earned'),
                    expenses: e.arrayClone('financialReport.gold.expenses'),
                    total: e.arrayClone('financialReport.gold.total'),
                },
                crystals: {
                    earned: e.arrayClone('financialReport.crystals.earned'),
                    expenses: e.arrayClone('financialReport.crystals.expenses'),
                    total: e.arrayClone('financialReport.crystals.total'),
                },
            },
            t = te.model(() =>
                Tn({
                    xp: { earned: a.xp.earned.get(), expenses: a.xp.expenses.get(), total: a.xp.total.get() },
                    freeXp: {
                        earned: a.xp.free.earned.get(),
                        expenses: a.xp.free.expenses.get(),
                        total: a.xp.free.total.get(),
                    },
                }),
            ),
            s = te.model(() =>
                Dn({
                    credits: {
                        earned: a.credits.earned.get(),
                        expenses: a.credits.expenses.get(),
                        total: a.credits.total.get(),
                    },
                    gold: { earned: a.gold.earned.get(), expenses: a.gold.expenses.get(), total: a.gold.total.get() },
                }),
            ),
            n = te.model(() =>
                (function ({ earned: e, expenses: a, total: t }) {
                    const s = jn({ earned: e, expenses: a, total: t });
                    return { records: En(s.records), total: En(s.total) };
                })({
                    earned: a.crystals.earned.get(),
                    expenses: a.crystals.expenses.get(),
                    total: a.crystals.total.get(),
                }),
            );
        return { ...a, computes: { experience: t, credits: s, crystals: n } };
    }, se),
    On = 'ListItem_received_ffdc3010',
    Hn = 'ListItem_separator_71797768',
    Wn = 'ListItem_label_4ab3c391',
    Mn = 'ListItem_label__withIcon_c2381aa',
    Gn = 'ListItem_labelIcon_acb0da4',
    Fn = F('ListItem', 'ListItem_bcdaabbd'),
    $n = t.forwardRef(({ labelKey: t, children: s, classNames: n, params: i, labelIconPath: r, ...l }, o) => {
        const c = k.resolve('images');
        return e.jsxs(Fn, {
            ...l,
            ref: o,
            'data-test-id': `${t}`,
            children: [
                e.jsxs('div', {
                    className: a(Wn, void 0 !== r && Mn, null == n ? void 0 : n.label),
                    children: [
                        void 0 !== r &&
                            e.jsx('div', {
                                style: { backgroundImage: `url(${c.readOrEmpty(r)})` },
                                className: a(Gn, null == n ? void 0 : n.icon),
                            }),
                        e.jsx(P, { upgradeLegacy: !0, path: t, params: i }),
                    ],
                }),
                e.jsxs('div', { className: On, children: [e.jsx('div', { className: Hn }), s] }),
            ],
        });
    }),
    Ln = 'Record_420804f3',
    Xn = 'Record_value_4d088deb',
    Kn = 'Record_value__decreasing_8cff45fa',
    qn = ({ formatter: t, value: s, modifier: n, currency: i, classNames: l, iconPath: o }) => {
        if (void 0 === s) return null;
        const c = n === Qs || s < 0;
        return e.jsxs('div', {
            className: a(Ln, null == l ? void 0 : l.base),
            children: [
                e.jsxs('div', {
                    className: a(Xn, c && Kn, null == l ? void 0 : l.value),
                    'data-test-id': `${i}`,
                    children: [
                        r(n)
                            .with(Zs, () => e.jsx(P, { path: 'common.multiplierSmall' }))
                            .with(Js, () => e.jsx(P, { path: 'common.multiplierSmall' }))
                            .with(Qs, () => e.jsx(P, { path: 'common.multiplierSmall' }))
                            .with(an, () => e.jsx(P, { path: 'common.plus' }))
                            .otherwise(() => null),
                        t(s, i),
                        n === en && e.jsx(P, { path: 'common.common.percent' }),
                    ],
                }),
                o && e.jsx(X, { width: 24, height: 24, path: o }),
            ],
        });
    },
    Un = 'RecordGroup_65a30ced',
    Yn = 'RecordGroup_base__inactive_5fd9f274',
    Jn = 'RecordGroup_record_5fd9f274',
    Zn = 'RecordGroup_record__extinguished_7fdfcea',
    Qn = 'RecordGroup_record__first_9121e1b7',
    ei = 'RecordGroup_separator_9f211d97',
    ai = 'RecordGroup_separatorBackground_8a447834',
    ti = 'RecordGroup_value_1f34e2e2',
    si = 'RecordGroup_value__total_126d88a1',
    ni = 'RecordGroup_value__freeXP_931265db';
function ii(e, a) {
    return e !== Ut || (void 0 !== a && a > 0);
}
function ri({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case zs:
            return !1;
        case ss:
        case _s:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const li = ({ paramName: t, xp: s, freeXp: n, modifier: i, inactive: r, total: l, wotPlusActive: o }) => {
        function c(e) {
            switch (t) {
                case Kt:
                    return T.formatReal('woZeroDigits', e);
                case zs:
                    return T.formatReal('fractional', e);
                default:
                    return T.formatNumber('integral', e);
            }
        }
        return e.jsxs('div', {
            className: a(Un, r && Yn),
            children: [
                e.jsx('div', {
                    className: a(Jn, Qn, ri({ wotPlusActive: o, paramName: t, value: s }) && Zn),
                    children: e.jsx(qn, {
                        value: s,
                        currency: Vt,
                        modifier: ii(t, s) ? i : void 0,
                        formatter: c,
                        classNames: { value: a(ti, l && si) },
                        iconPath: bn(Vt, t),
                    }),
                }),
                void 0 !== n && e.jsx('div', { className: ei, children: e.jsx('div', { className: ai }) }),
                e.jsx('div', {
                    className: a(Jn, ri({ wotPlusActive: o, paramName: t, value: n }) && Zn),
                    children: e.jsx(qn, {
                        value: n,
                        currency: zt,
                        modifier: ii(t, n) ? i : void 0,
                        formatter: c,
                        classNames: { value: a(ti, ni, l && si) },
                        iconPath: bn(zt, t),
                    }),
                }),
            ],
        });
    },
    oi = 'Item_groups_a1f0c2a5',
    ci = 'Item_label_7521a1d4',
    di = 'Item_label__highlighted_36e62867',
    ui = 'Item_label__gold_49ec59ab',
    mi = {
        [$t]: 'title.base',
        [is]: 'title.base',
        [Lt]: 'noPenalty',
        [rs]: 'noPenalty',
        [Xt]: 'friendlyFirePenalty',
        [Kt]: 'igrBonus.simpleLabel',
        [ls]: 'igrBonus.simpleLabel',
        [qt]: 'firstWin',
        [os]: 'firstWin',
        [Ut]: 'manageableXpBonus',
        [cs]: 'manageableXpBonus',
        [Yt]: 'boosters',
        [ds]: 'boosters',
        [Jt]: 'tacticalTraining',
        [us]: 'militaryManeuvers',
        [Zt]: 'event',
        [ms]: 'event',
        [Qt]: 'referralBonus.fullLabel',
        [es]: 'premiumVehicleXP',
        [ps]: 'premiumVehicleXP',
        [as]: 'squadBonus',
        [ts]: 'squadXPPenalty',
        [zs]: 'aogasFactor',
        [ss]: 'wotPlusBonus',
        [_s]: 'wotPlusBonus',
        [Os]: 'fairPlayViolation.deserter',
        [Ws]: 'fairPlayViolation.suicide',
        [Hs]: 'fairPlayViolation.afk',
        [ns]: 'total',
        [fs]: 'total',
        originalAlternative: 'xpRecordSimple',
    },
    pi = { [ss]: 'subscription.wot_plus_32x32', [_s]: 'subscription.wot_plus_32x32' },
    _i = new Set([ss, _s]),
    fi = () =>
        e.jsx('span', { className: di, children: e.jsx(P, { path: 'battle_results.details.calculations.maximum' }) }),
    vi = l(
        ({
            record: { paramName: t, premium: s, standard: n, modifier: i, recordsItemsDetails: r },
            total: l,
            ...o
        }) => {
            const { model: c } = zn(),
                d = c.hasAnyPremium.get(),
                u = c.hasWotPlus.get();
            if (!(t in mi)) return null;
            const m = '1' === (null == r ? void 0 : r.isHighScope),
                p = m ? mi.originalAlternative : mi[t],
                _ = null == r ? void 0 : r.referralFactor;
            return e.jsx($n, {
                ...o,
                labelIconPath: pi[t],
                labelKey: `battle_results.details.calculations.${p}`,
                params: { ...(_ && { bonusFactor: sn(_) }), ...(m && { maximum: e.jsx(fi, {}) }) },
                classNames: { label: a(ci, _i.has(t) && ui) },
                children: e.jsxs('div', {
                    className: oi,
                    children: [
                        e.jsx(li, { ...n, paramName: t, modifier: i, inactive: d, total: l, wotPlusActive: u }),
                        e.jsx(li, { ...s, paramName: t, modifier: i, inactive: !d, total: l, wotPlusActive: u }),
                    ],
                }),
            });
        },
    ),
    bi = 'IncomeStatement_560dd244',
    hi = 'IncomeStatement_base__scroll_fb9f1475',
    gi = 'IncomeStatement_item_48b34a63',
    yi = l(
        t.forwardRef(({ className: t, scrollable: s, ...n }, i) => {
            const { model: r } = zn(),
                l = r.computes.experience();
            return e.jsx(Dt, {
                ...n,
                ref: i,
                className: a(bi, s && hi, t),
                scrollable: s,
                children: J(l.records, (a) => e.jsx(vi, { record: a, className: gi }, a.paramName)),
            });
        }),
    ),
    xi = 'Total_item_a8580361',
    Ni = 'Total_divider_1de1ca28',
    ji = 'Total_dividerImage_ab06168d',
    wi = F('ExperienceTotal', 'Total_19236d49'),
    Ii = l(
        t.forwardRef((a, t) => {
            const { model: s } = zn(),
                n = s.computes.experience();
            return e.jsxs(wi, {
                ...a,
                ref: t,
                children: [
                    e.jsx(gt, { classNames: { base: Ni, image: ji } }),
                    n.total.map((a) => e.jsx(vi, { record: a, className: xi, total: !0 }, a.paramName)),
                ],
            });
        }),
    ),
    Ai = 'Experience_a014c8c',
    Ci = 'Experience_base__scroll_f75d07c6',
    Si = F('Experience'),
    Bi = t.forwardRef(({ scrollable: t, className: s, ...n }, i) =>
        e.jsx(Si, { ...n, ref: i, className: a(Ai, t && Ci, s) }),
    );
((Bi.Header = At), (Bi.Item = vi), (Bi.Total = Ii), (Bi.IncomeStatement = yi));
const Ri = 'Header_cbd845ec',
    Pi = 'Header_content_a63fb46c',
    ki = 'Header_title_7b852a7',
    Ei = 'Header_title__active_e5dd0f77',
    Ti = 'Header_title__premium_2c23921f',
    Di = 'Header_icon_3b4dc587',
    Vi = l(
        t.forwardRef(({ className: t, ...s }, n) => {
            const { model: i } = zn(),
                r = i.hasAnyPremium.get();
            return e.jsx(It, {
                ...s,
                ref: n,
                className: a(Ri, t),
                title: 'battle_results.details.credits',
                children: e.jsxs('div', {
                    className: Pi,
                    children: [
                        e.jsx('div', {
                            className: a(ki, !r && Ei),
                            children: e.jsx(P, { path: 'battle_results.common.details.noPremTitle' }),
                        }),
                        e.jsxs('div', {
                            className: a(ki, r && Ei, Ti),
                            children: [
                                e.jsx('div', {
                                    className: Di,
                                    children: e.jsx(X, {
                                        width: 32,
                                        height: 32,
                                        path: 'post_battle.wot_premium_32x32',
                                    }),
                                }),
                                e.jsx(P, { path: 'battle_results.getPremiumPopover.prem' }),
                            ],
                        }),
                    ],
                }),
            });
        }),
    ),
    zi = 'RecordGroup_65a30ced',
    Oi = 'RecordGroup_base__inactive_5fd9f274',
    Hi = 'RecordGroup_record_5fd9f274',
    Wi = 'RecordGroup_record__extinguished_7fdfcea',
    Mi = 'RecordGroup_record__first_36c2aa71',
    Gi = 'RecordGroup_separator_9f211d97',
    Fi = 'RecordGroup_separatorBackground_8a447834',
    $i = 'RecordGroup_value_9253748c',
    Li = 'RecordGroup_value__total_126d88a1',
    Xi = 'RecordGroup_value__gold_d7bd74ba';
function Ki({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case zs:
            return !1;
        case ws:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const qi = ({ credits: t, gold: s, modifier: n, inactive: i = !1, total: r, paramName: l, wotPlusActive: o }) => {
        function c(e, a) {
            return l === zs ? T.formatReal('fractional', e) : T.formatNumber(a === Ht ? 'gold' : 'integral', e);
        }
        return e.jsxs('div', {
            className: a(zi, i && Oi),
            children: [
                e.jsx('div', {
                    className: a(Hi, Mi, Ki({ paramName: l, wotPlusActive: o, value: t }) && Wi),
                    children: e.jsx(qn, {
                        formatter: c,
                        value: t,
                        currency: Ot,
                        modifier: n,
                        classNames: { value: a($i, r && Li) },
                        iconPath: bn(Ot, l),
                    }),
                }),
                void 0 !== s && e.jsx('div', { className: Gi, children: e.jsx('div', { className: Fi }) }),
                e.jsx('div', {
                    className: a(Hi, 0 === s && Wi),
                    children: e.jsx(qn, {
                        value: s,
                        currency: Ht,
                        modifier: n,
                        classNames: { value: a($i, Xi, r && Li) },
                        formatter: c,
                        iconPath: bn(Ht, l),
                    }),
                }),
            ],
        });
    },
    Ui = 'Item_groups_a1f0c2a5',
    Yi = 'Item_label_7521a1d4',
    Ji = 'Item_label__gold_49ec59ab',
    Zi = {
        [vs]: 'title.base',
        [bs]: 'squadBonus',
        [hs]: 'noPenalty',
        [gs]: 'boosters',
        [xs]: 'battlePayments',
        [Ns]: 'event',
        [Es]: 'event',
        [js]: 'referralBonus.fullLabel',
        [ws]: 'wotPlusBonus',
        [Os]: 'fairPlayViolation.deserter',
        [Ws]: 'fairPlayViolation.suicide',
        [Hs]: 'fairPlayViolation.afk',
        [Is]: 'friendlyFirePenalty',
        [As]: 'friendlyFireCompensation',
        [zs]: 'aogasFactor',
        [Ps]: 'intermediateTotal',
        [Ds]: 'intermediateTotal',
        [Ss]: 'autoRepair',
        [Bs]: 'autoLoad',
        [Rs]: 'autoEquip',
        [ks]: 'total',
        [Vs]: 'total',
        [Cs]: 'piggyBankInfo',
        [Ts]: 'piggyBankInfo',
        [ys]: 'petCredits.fullLabel',
    },
    Qi = { [ws]: 'subscription.wot_plus_32x32' },
    er = l(({ record: t, total: s, ...n }) => {
        const { model: i } = zn(),
            r = i.hasAnyPremium.get(),
            l = i.hasWotPlus.get(),
            { paramName: o, premium: c, standard: d, modifier: u, recordsItemsDetails: m } = t;
        if (!(o in Zi)) return null;
        const p = null == m ? void 0 : m.referralFactor,
            _ = null == m ? void 0 : m.bonusFactor,
            f = Zi[o],
            v = mn[ks](t, l);
        return e.jsx($n, {
            ...n,
            labelIconPath: Qi[o],
            labelKey: `battle_results.details.calculations.${f}`,
            classNames: { label: a(Yi, o === ws && Ji) },
            params: { ...(p && { bonusFactor: sn(p) }), ...(_ && { bonusFactor: nn(_) }) },
            children: e.jsxs('div', {
                className: Ui,
                children: [
                    e.jsx(qi, {
                        paramName: o,
                        credits: d.credits,
                        gold: v ? d.gold : void 0,
                        modifier: u,
                        inactive: r,
                        total: s,
                        wotPlusActive: l,
                    }),
                    e.jsx(qi, {
                        paramName: o,
                        credits: c.credits,
                        gold: v ? c.gold : void 0,
                        modifier: u,
                        inactive: !r,
                        total: s,
                        wotPlusActive: l,
                    }),
                ],
            }),
        });
    }),
    ar = 'IncomeStatement_560dd244',
    tr = 'IncomeStatement_base__scroll_fb9f1475',
    sr = 'IncomeStatement_item_48b34a63',
    nr = l(
        t.forwardRef(({ className: t, scrollable: s, ...n }, i) => {
            const { model: r } = zn(),
                l = r.computes.credits();
            return e.jsx(Dt, {
                ...n,
                ref: i,
                className: a(ar, s && tr, t),
                scrollable: s,
                children: J(l.records, (a) => e.jsx(er, { record: a, className: sr }, a.paramName)),
            });
        }),
    ),
    ir = 'Total_item_de53c8b0',
    rr = 'Total_divider_1de1ca28',
    lr = 'Total_dividerImage_ab06168d',
    or = F('CreditsTotal', 'Total_19236d49'),
    cr = l(
        t.forwardRef((a, t) => {
            const { model: s } = zn(),
                n = s.computes.credits();
            return e.jsxs(or, {
                ...a,
                ref: t,
                children: [
                    e.jsx(gt, { classNames: { base: rr, image: lr } }),
                    n.total.map((a) => e.jsx(er, { record: a, className: ir, total: !0 }, a.paramName)),
                ],
            });
        }),
    ),
    dr = 'Credits_68f91d81',
    ur = 'Credits_base__scroll_759f08f3',
    mr = F('Credits'),
    pr = t.forwardRef(({ scrollable: t, className: s, ...n }, i) =>
        e.jsx(mr, { ...n, ref: i, className: a(dr, t && ur, s) }),
    );
((pr.Header = Vi), (pr.Item = er), (pr.Total = cr), (pr.IncomeStatement = nr));
const _r = 'Item_currencyValue_81f5b9fb',
    fr = 'Item_currencyValue__total_a7596c8e',
    vr = 'Item_currencyValue__negative_5e98369f',
    br = 'Item_label_5d6964d6',
    hr = {
        [Wt]: 'battle_results.details.calculations.crystal.total',
        [Mt]: 'battle_results.details.calculations.crystal.events',
        [Gt]: 'battle_results.details.calculations.autoBoosters',
        [Ft]: 'battle_results.details.calculations.total',
    },
    gr = ({ record: t, total: s, ...n }) => {
        const { paramName: i, baseValue: r } = t;
        return i in hr
            ? e.jsx($n, {
                  ...n,
                  labelKey: hr[i],
                  classNames: { label: br, ...n.classNames },
                  children: e.jsx(ne, {
                      reverse: !0,
                      type: 'crystal',
                      size: ie.small,
                      children: e.jsx('div', {
                          className: a(_r, r < 0 && vr, s && fr),
                          children: T.formatNumber('integral', r),
                      }),
                  }),
              })
            : (console.error(`Parameter name "${i} is not valid for bonds`), null);
    },
    yr = 'IncomeStatement_item_48b34a63',
    xr = F('BondsIncomeStatement'),
    Nr = l(
        t.forwardRef((a, t) => {
            const { model: s } = zn(),
                n = s.computes.crystals();
            return e.jsx(xr, {
                ...a,
                ref: t,
                children: n.records.map((a) => e.jsx(gr, { record: a, className: yr }, a.paramName)),
            });
        }),
    ),
    jr = 'Total_item_a8580361',
    wr = 'Total_divider_1de1ca28',
    Ir = 'Total_dividerImage_ab06168d',
    Ar = F('BondsTotal', 'Total_120fb0c4'),
    Cr = l(
        t.forwardRef((a, t) => {
            const { model: s } = zn(),
                n = s.computes.crystals();
            return e.jsxs(Ar, {
                ...a,
                ref: t,
                children: [
                    e.jsx(gt, { classNames: { base: wr, image: Ir } }),
                    n.total.map((a) => e.jsx(gr, { total: !0, record: a, className: jr }, a.paramName)),
                ],
            });
        }),
    ),
    Sr = t.forwardRef((a, t) => e.jsx(It, { ...a, title: 'battle_results.details.crystal', ref: t })),
    Br = F('Bonds');
((Br.Header = Sr), (Br.Item = gr), (Br.Total = Cr), (Br.IncomeStatement = Nr));
const Rr = 'FinancialReport_content_99bf970f',
    Pr = 'FinancialReport_leftContent_75c21204',
    kr = 'FinancialReport_bonds_cc81cbc0',
    Er = 'FinancialReport_headerContent_aad9188f',
    Tr = 'FinancialReport_experience_7219d4d3',
    Dr = 'FinancialReport_credits_7712b0c',
    Vr = 'FinancialReport_header_d56ebc61',
    zr = 'FinancialReport_total_bdf3e42b',
    Or = F('FinancialReport', 'FinancialReport_c3cc562a'),
    Hr = ({ className: a }) => {
        const [s, n] = t.useState({ credits: !1, experience: !1 }),
            i = t.useRef(null),
            r = t.useRef(null),
            l = t.useRef(null),
            o = re({ margin: 18 }, { medium: { margin: 19 }, large: { margin: 16 }, extraLarge: { margin: 30 } }),
            c = t.useCallback(() => {
                if (!i.current || !r.current || !l.current) return;
                const { height: e } = i.current.getBoundingClientRect(),
                    { height: a } = r.current.getBoundingClientRect(),
                    { height: t } = l.current.getBoundingClientRect();
                e &&
                    a &&
                    t &&
                    (e - a - t - o.margin >= 0
                        ? n({ credits: !1, experience: !1 })
                        : n(
                              a <= e / 2 && a <= t
                                  ? { credits: !1, experience: !0 }
                                  : t <= e / 2
                                    ? { credits: !0, experience: !1 }
                                    : { credits: !0, experience: !0 },
                          ));
            }, [o.margin]);
        return (
            le(i, c),
            e.jsx(Vn, {
                children: e.jsx(Or, {
                    className: a,
                    children: e.jsxs('div', {
                        className: Rr,
                        children: [
                            e.jsxs('div', {
                                className: Pr,
                                ref: i,
                                children: [
                                    e.jsxs(pr, {
                                        ref: r,
                                        scrollable: s.credits,
                                        className: Dr,
                                        children: [
                                            e.jsx(pr.Header, { className: Vr }),
                                            e.jsx(pr.IncomeStatement, { scrollable: s.credits }),
                                            e.jsx(pr.Total, { className: zr }),
                                        ],
                                    }),
                                    e.jsxs(Bi, {
                                        ref: l,
                                        scrollable: s.experience,
                                        className: Tr,
                                        children: [
                                            e.jsx(Bi.Header, { className: Vr, classNames: { content: Er } }),
                                            e.jsx(Bi.IncomeStatement, { scrollable: s.experience }),
                                            e.jsx(Bi.Total, { className: zr }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs(Br, {
                                className: kr,
                                children: [
                                    e.jsx(Br.Header, { className: Vr, classNames: { content: Er } }),
                                    e.jsx(Br.IncomeStatement, {}),
                                    e.jsx(Br.Total, { className: zr }),
                                ],
                            }),
                        ],
                    }),
                }),
            })
        );
    };
var Wr = ((e) => ((e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Active = ''), e))(Wr || {});
const Mr = o({
        index: u(),
        name: c(),
        value: c(),
        isCompensation: v(),
        tooltipId: c(),
        tooltipContentId: c(),
        label: c(),
        probability: u(),
        item: f(c()),
        icon: f(c()),
        iconBig: f(c()),
        iconSmall: f(c()),
    }),
    Gr = o({ conditionType: c() }),
    Fr = o({
        ...Gr.entries,
        titleData: c(),
        descrData: c(),
        iconKey: c(),
        current: u(),
        total: u(),
        earned: u(),
        progressType: c(),
        sortKey: c(),
    }),
    $r = o({ ...Gr.entries, items: m(p([Fr, _(() => $r)])) }),
    Lr = o({ id: c(), groupId: c(), type: u(), title: c(), description: c(), decoration: u(), status: d(Wr) });
o({ ...Lr.entries, bonuses: m(Mr), preBattleCondition: $r, bonusCondition: $r, postBattleCondition: $r });
const Xr = o({
        animated: f(v()),
        completed: f(v()),
        component: h((e) => oe(e)),
        categoryOrder: u(),
        notifications: f(m(o({ id: c(), item: h((e) => t.isValidElement(e)) }))),
    }),
    Kr = p([o({ status: b('loaded'), result: Xr }), o({ status: b('loading') })]),
    qr = k.resolve('strings'),
    Ur = ['huntsman', 'medalGore', 'medalStark'],
    Yr = {
        markOfMastery: 'markOfMastery',
        marksOnGun: 'marksOnGun',
        epic: 'epic',
        specialAchievements: 'specialAchievements',
        right: 'right',
        left: 'left',
        other: 'other',
    },
    Jr = [Yr.markOfMastery, Yr.marksOnGun, Yr.epic, Yr.specialAchievements, Yr.right, Yr.left, Yr.other];
function Zr(e) {
    return e.groupID === Yr.markOfMastery
        ? Yr.markOfMastery
        : e.groupID === Yr.marksOnGun
          ? Yr.marksOnGun
          : e.epic
            ? Yr.epic
            : Ur.includes(e.name)
              ? Yr.specialAchievements
              : e.groupID === Yr.right
                ? Yr.right
                : e.groupID === Yr.left
                  ? Yr.left
                  : (console.error(`Achievement ${e.name} with a group ${e.groupID} is not detected`), Yr.other);
}
function Qr(e) {
    return ce(e, (e, a) => {
        const t = Zr(e),
            s = Zr(a),
            n = Jr.indexOf(t),
            i = Jr.indexOf(s);
        return t !== s
            ? n - i
            : (function (e, a) {
                  const t = qr.readOrEmpty(`achievements.${e.name}`),
                      s = qr.readOrEmpty(`achievements.${a.name}`);
                  return t.localeCompare(s);
              })(e, a);
    });
}
const el = 'default',
    al = 'hover',
    tl = 'extinct';
function sl(e, a) {
    return void 0 === a ? el : a === e ? al : tl;
}
const nl = { marksOnGun1: '1_mark', marksOnGun2: '2_marks', marksOnGun3: '3_marks' };
function il({ iconName: e, groupID: a, vehicleNation: t }) {
    return 'marksOnGun' === a ? `marksOnGun.x240x240.${t}_${nl[e]}` : `achievement.x240x240.${e}`;
}
const rl = 'marks',
    ll = 'epicAndHeroic',
    ol = 'others',
    cl = ['bombardier', 'medalAntiSpgFire', 'kamikaze', 'raider', 'medalMonolith', 'medalCoolBlood'];
const dl = 0;
var ul = ((e) => (
        (e.Squad = 'squad'),
        (e.Player = 'player'),
        (e.Damage = 'damage'),
        (e.Frag = 'frag'),
        (e.Xp = 'xp'),
        (e.Vehicle = 'tank'),
        (e.Medal = 'medal'),
        e
    ))(ul || {}),
    ml = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(ml || {}),
    pl = ((e) => (
        (e[(e.NoRestriction = 0)] = 'NoRestriction'),
        (e[(e.IsApplied = 1)] = 'IsApplied'),
        (e[(e.InvalidBattleType = 2)] = 'InvalidBattleType'),
        (e[(e.IsNotVictory = 3)] = 'IsNotVictory'),
        (e[(e.DeprecatedResults = 4)] = 'DeprecatedResults'),
        (e[(e.NoVehicle = 5)] = 'NoVehicle'),
        (e[(e.NoCrew = 6)] = 'NoCrew'),
        (e[(e.FasterEducationCrewNotActive = 7)] = 'FasterEducationCrewNotActive'),
        (e[(e.FasterEducationCrewActive = 8)] = 'FasterEducationCrewActive'),
        (e[(e.NotApplyingError = 9)] = 'NotApplyingError'),
        e
    ))(pl || {}),
    _l = ((e) => (
        (e[(e.PremiumInfo = 0)] = 'PremiumInfo'),
        (e[(e.PremiumBonus = 1)] = 'PremiumBonus'),
        (e[(e.PremiumEarnings = 2)] = 'PremiumEarnings'),
        (e[(e.PremiumAdvertising = 3)] = 'PremiumAdvertising'),
        (e[(e.PlusInfo = 4)] = 'PlusInfo'),
        (e[(e.PlusEarnings = 5)] = 'PlusEarnings'),
        (e[(e.PlusYouRock = 6)] = 'PlusYouRock'),
        e
    ))(_l || {});
const fl = {
        plusInfo: _l.PlusInfo,
        premiumInfo: _l.PremiumInfo,
        premiumAdvertising: _l.PremiumAdvertising,
        premiumBonus: _l.PremiumBonus,
        premiumEarnings: _l.PremiumEarnings,
        plusEarnings: _l.PlusEarnings,
        plusYouRock: _l.PlusYouRock,
    },
    vl = Object.values(fl);
const bl = 'premiumInfo',
    hl = 'applyBonus',
    gl = 'appliedBonus',
    yl = 'isNotVictory',
    xl = 'requiredRecentBattleAndVehicle',
    Nl = 'invalidBattleType',
    jl = 'noVehicle',
    wl = 'fasterEducationCrewNotActive',
    Il = 'fasterEducationCrewActive',
    Al = 'noCrew',
    Cl = 'premiumEarnings',
    Sl = 'creditsAdvertising',
    Bl = 'premiumAdvertising',
    Rl = 'squadAdvertising',
    Pl = 'bonusAdvertising',
    kl = 'questsAdvertising',
    El = 'plusInfo',
    Tl = 'plusEarnings',
    Dl = 'plusYouRock',
    Vl = { credits: Sl, premium: Bl, squad: Rl, bonus: Pl, quests: kl },
    zl = [Vl.credits, Vl.premium, Vl.squad, Vl.bonus, Vl.quests];
const Ol = {
        [pl.IsApplied]: gl,
        [pl.DeprecatedResults]: xl,
        [pl.IsNotVictory]: yl,
        [pl.InvalidBattleType]: Nl,
        [pl.NoVehicle]: jl,
        [pl.FasterEducationCrewActive]: Il,
        [pl.FasterEducationCrewNotActive]: wl,
        [pl.NoCrew]: Al,
    },
    Hl = {
        [fl.plusInfo]: { define: () => El },
        [fl.premiumInfo]: { define: () => bl },
        [fl.premiumAdvertising]: {
            define: ({ supportedAdvertisements: e, usedAdvertisements: a }) => {
                const t = e.filter((e) => !1 === a.includes(e))[0] ?? e[0];
                return (
                    ee(
                        void 0 !== t,
                        'advertisingState is not recognized. Check please supportedAdvertisements state. It is not possible to have empty supportedAdvertisements array in case if the widget in the premiumAdvertising state',
                    ),
                    t
                );
            },
        },
        [fl.premiumBonus]: {
            define: ({ restriction: e }) => (e !== pl.NoRestriction && e !== pl.NotApplyingError ? Ol[e] : hl),
        },
        [fl.premiumEarnings]: { define: () => Cl },
        [fl.plusEarnings]: { define: () => Tl },
        [fl.plusYouRock]: { define: () => Dl },
    };
function Wl(e) {
    return function (a) {
        return e(g(() => y(a)));
    };
}
const Ml = '',
    Gl = [Vl.premium, Vl.squad, Vl.credits],
    Fl = ['ctf30x30', 'domination30x30'];
var $l = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
        $l || {},
    ),
    Ll = ((e) => (
        (e.Shots = 'shots'),
        (e.Hits = 'hits'),
        (e.ExplosionHits = 'explosionHits'),
        (e.DamageDealt = 'damageDealt'),
        (e.SniperDamageDealt = 'sniperDamageDealt'),
        (e.ArtilleryStrike = 'artilleryStrike'),
        (e.DirectHitsReceived = 'directHitsReceived'),
        (e.PiercingsReceived = 'piercingsReceived'),
        (e.NoDamageDirectHitsReceived = 'noDamageDirectHitsReceived'),
        (e.ExplosionHitsReceived = 'explosionHitsReceived'),
        (e.DamageBlockedByArmor = 'damageBlockedByArmor'),
        (e.TeamHitsDamage = 'teamHitsDamage'),
        (e.Spotted = 'spotted'),
        (e.DamagedKilled = 'damagedKilled'),
        (e.DamageAssisted = 'damageAssisted'),
        (e.DamageAssistedSelf = 'damageAssistedSelf'),
        (e.StunDuration = 'stunDuration'),
        (e.DamageAssistedStun = 'damageAssistedStun'),
        (e.DamageAssistedStunSelf = 'damageAssistedStunSelf'),
        (e.StunNum = 'stunNum'),
        (e.CapturePointsVal = 'capturePointsVal'),
        (e.Mileage = 'mileage'),
        e
    ))(Ll || {});
function Xl(e) {
    return {
        status: e.winStatus,
        modeName: e.modeName,
        arenaName: e.arenaName,
        arenaType: e.arenaGuiType,
        startTime: e.battleStartTime,
        duration: e.battleDuration,
        finishReasonKey: e.finishReasonKey,
        finishReasonClarification: e.finishReasonClarification,
        commendationsReceived: e.commendationsReceived,
    };
}
const Kl = [ns, Ps];
function ql(e, a) {
    const { recordsItemsDetails: t, baseValue: s, premiumValue: n, currencyType: i, paramName: r } = xn(e),
        l = a ? n : s,
        o = l >= 0 ? l : 0;
    return { paramName: r, type: i, visibleIfZero: Kl.includes(r) || 'True' === t.isAvailable, value: o };
}
function Ul(e) {
    return {
        bonusMultiplier: e.bonusMultiplier,
        bonusXpDiff: e.xpDiff,
        leftBonusAttempts: e.leftBonusCount,
        creditsThreshold: e.creditsThreshold,
        dailyAppliedAdditionalXP: e.dailyAppliedAdditionalXP,
        restriction: e.restriction,
        bonusState: e.state,
        wotPlus: e.hasWotPlus,
        wotPremium: e.hasPremium,
        durationInDays: e.durationInDays,
        usedAdvertisements:
            '' !== e.localStorage
                ? (() => {
                      let e;
                      const a = (a, t) => {
                          var s, n;
                          return (
                              !1 === ((e) => Array.isArray(e))(a) &&
                                  ((e = t),
                                  (s = a),
                                  (n = '$input'),
                                  Array.isArray(s) ||
                                      x(
                                          !0,
                                          {
                                              method: 'typia.json.assertParse',
                                              path: n + '',
                                              expected: 'Array<__type<__object>>',
                                              value: s,
                                          },
                                          e,
                                      )),
                              a
                          );
                      };
                      return (e, t) => a(JSON.parse(e), t);
                  })()(e.localStorage)
                : [],
    };
}
function Yl(e) {
    return {
        groupID: e.groupID,
        iconName: e.iconName,
        name: e.name,
        epic: e.isEpic,
        tooltipArgs: e.tooltipArgs,
        tooltipId: e.tooltipId,
    };
}
function Jl(e) {
    return { labelKey: e.labelKey, paramValueType: e.paramValueType, value: J(e.value, (e) => e) };
}
function Zl(e) {
    return {
        ...Jl({ label: e.label, labelKey: e.labelKey, paramValueType: e.paramValueType, value: J(e.value, (e) => e) }),
        details: J(e.details, (e) => Jl(e)),
    };
}
function Ql(e) {
    var a;
    const t = null == (a = de(e.detailedStatistics, (e) => e.labelKey === Ll.TeamHitsDamage)) ? void 0 : a.value,
        s = void 0 !== t ? ue(t, 0) : 0,
        n = e.efficiencyValues.kills - (s ?? 0);
    return {
        personal: e.isPersonal,
        squadIndex: e.squadIndex,
        achievements: J(e.achievements, Yl),
        account: pe(e.userNames),
        userStatus: ((o = e.userStatus), { abandonBattle: o.isLeftBattle, deathReason: o.deathReason }),
        killer: pe(e.userStatus.killer),
        vehicle:
            ((r = e.vehicle.vehicleCD),
            (l = e.vehicle.techName),
            0 === r && '' === l ? void 0 : { ...me(e.vehicle), longName: e.vehicle.longName }),
        efficiencyValues: {
            substractedAlliesKills: n,
            ...((i = e.efficiencyValues), { damageDealt: i.damageDealt, kills: i.kills, earnedXp: i.earnedXp }),
        },
        detailedStatistics: J(e.detailedStatistics, Zl),
        databaseId: e.databaseID,
    };
    var i, r, l, o;
}
const eo = {
    killed: 0,
    spotted: 0,
    criticalDamage: 0,
    damageDealt: { value: 0, count: 0 },
    damageAssisted: 0,
    damageAssistedStun: { value: 0, count: 0 },
    damageBlockedByArmor: { value: 0, count: 0 },
};
const ao = { allies: 'allies', enemies: 'enemies' },
    to = ['dead0', 'dead1', 'dead2', 'dead3', 'dead5', 'dead7'],
    so = { personal: 'personal', alien: 'alien' },
    no = 0;
function io(e, a, t) {
    return t === no ? null : a === t && e === ao.allies ? so.personal : so.alien;
}
function ro({ anonymizer: e, personal: a, platoonType: t }) {
    return !(a || !e) && (t === so.alien || null === t);
}
const [lo, oo] = ae()(
        (e) => {
            const { observableModel: a, cleanup: t } = e,
                s = {
                    teamsStatistic: {
                        ...a.primitives(['sortingColumn', 'sortingOrder'], 'teamStats'),
                        allies: a.arrayClone('teamStats.allies'),
                        enemies: a.arrayClone('teamStats.enemies'),
                    },
                    personalEffiency: {
                        ...a.primitives(['capturePoints', 'droppedCapturePoints'], 'baseCaptureInfo'),
                        details: a.arrayClone('detailedPersonalEfficiency'),
                    },
                    additionalBonus: a.object('additionalBonus'),
                    xp: { total: a.arrayClone('financialReport.xp.total') },
                    credits: { total: a.arrayClone('financialReport.credits.total') },
                    crystals: { total: a.arrayClone('financialReport.crystals.total') },
                    gold: { total: a.arrayClone('financialReport.gold.total') },
                },
                n = {
                    battleInfo: a.transform(Xl, 'battleInfo'),
                    additionalBonus: a.transform(Ul, 'additionalBonus'),
                    allPlayersDictionary: N.box({}),
                    personalEfficiency: {
                        opened: N.box(!1),
                        achievements: a.transform((e) => Qr(J(e, Yl)), 'achievements'),
                        statistics: { details: N.box([]), capturePoints: N.box(0), droppedCapturePoints: N.box(0) },
                    },
                    teamsStatistic: {
                        allies: N.box([]),
                        enemies: N.box([]),
                        sorting: N.box({ column: ul.Vehicle, sortDirection: ml.Desc }),
                        selectedRow: N.box(),
                    },
                    user: { names: N.box(), status: N.box() },
                    playerSatisfaction: a.object('playerSatisfaction'),
                    pathToPlugins: a.dict('pathToPlugins'),
                    notificationList: N.box([]),
                };
            (Wl(t)(() => {
                const e = {};
                (n.teamsStatistic.allies.set(
                    J(s.teamsStatistic.allies.get(), (a) => {
                        const t = Ql(a);
                        return ((e[t.account.username] = t), t);
                    }),
                ),
                    n.teamsStatistic.enemies.set(
                        J(s.teamsStatistic.enemies.get(), (a) => {
                            const t = Ql(a);
                            return ((e[t.account.username] = t), t);
                        }),
                    ));
                const a = n.allPlayersDictionary.get();
                n.allPlayersDictionary.set({ ...a, ...e });
            }),
                Wl(t)(() => {
                    return n.teamsStatistic.sorting.set(
                        ((e = s.teamsStatistic.sortingColumn.get()),
                        (a = s.teamsStatistic.sortingOrder.get()),
                        { column: e, sortDirection: a }),
                    );
                    var e, a;
                }),
                Wl(t)(() => {
                    (n.personalEfficiency.statistics.capturePoints.set(s.personalEffiency.capturePoints.get()),
                        n.personalEfficiency.statistics.droppedCapturePoints.set(
                            s.personalEffiency.droppedCapturePoints.get(),
                        ));
                }));
            const i = te.structural(() =>
                    (function ({ anyPremium: e, credits: a, crystals: t, gold: s, xp: n }) {
                        const i = de(a, (e) => e.paramName === Ps),
                            r = de(s, (e) => e.paramName === Vs),
                            l = de(n, (e) => e.paramName === ns),
                            o = de(t, (e) => e.paramName === Ft),
                            c = [];
                        return (
                            i && c.push(ql(i, e)),
                            r && c.push(ql(r, e)),
                            l && c.push(ql(l, e)),
                            o && c.push(ql(o, e)),
                            c
                        );
                    })({
                        anyPremium: s.additionalBonus.get().hasAnyPremium,
                        credits: s.credits.total.get(),
                        crystals: s.crystals.total.get(),
                        gold: s.gold.total.get(),
                        xp: s.xp.total.get(),
                    }),
                ),
                r = te.structural(() => n.pathToPlugins.values().map((e) => ({ url: e.get() }))),
                l = te.shallow(() => {
                    const e = de(n.teamsStatistic.allies.get(), (e) => e.personal);
                    var a;
                    return (
                        ee(void 0 !== e, 'Personal info is not found'),
                        ee((a = e).personal && void 0 !== a.vehicle, 'There is no vehicle data in the personal info'),
                        e
                    );
                }),
                o = te.shallow(() => {
                    const e = n.teamsStatistic.selectedRow.get();
                    if (void 0 === e) return;
                    const a = (e.team === ao.allies ? n.teamsStatistic.allies : n.teamsStatistic.enemies).get();
                    return de(a, (a) => a.account.username === e.username);
                }),
                c = te.shallow(() => {
                    const e = n.allPlayersDictionary.get();
                    return {
                        assault: n.personalEfficiency.statistics.capturePoints.get(),
                        defend: n.personalEfficiency.statistics.droppedCapturePoints.get(),
                        rows: Z(
                            s.personalEffiency.details.get(),
                            (a, t) => {
                                const s = (function (e) {
                                    return Z(
                                        e.personalEfficiencyItems,
                                        (e, a) => {
                                            switch (a.paramType) {
                                                case 'spotted':
                                                    return ((e.spotted = a.value), e);
                                                case 'targetKills':
                                                    return ((e.killed = a.value), e);
                                                case 'piercings':
                                                    return ((e.damageDealt.count = a.value), e);
                                                case 'damageDealt':
                                                    return ((e.damageDealt.value = a.value), e);
                                                case 'rickochetsReceived':
                                                case 'noDamageDirectHitsReceived':
                                                    return ((e.damageBlockedByArmor.count += a.value), e);
                                                case 'damageBlockedByArmor':
                                                    return ((e.damageBlockedByArmor.value = a.value), e);
                                                case 'damageAssisted':
                                                    return ((e.damageAssisted = a.value), e);
                                                case 'damageAssistedStun':
                                                    return ((e.damageAssistedStun.value = a.value), e);
                                                case 'stunCount':
                                                    return ((e.damageAssistedStun.count = a.value), e);
                                                case 'criticalDamage':
                                                    return ((e.criticalDamage = a.value), e);
                                                default:
                                                    return e;
                                            }
                                        },
                                        {
                                            killed: 0,
                                            spotted: 0,
                                            criticalDamage: 0,
                                            damageDealt: { value: 0, count: 0 },
                                            damageAssisted: 0,
                                            damageAssistedStun: { value: 0, count: 0 },
                                            damageBlockedByArmor: { value: 0, count: 0 },
                                        },
                                    );
                                })(t);
                                if (((n = s), _e.structural(n, eo))) return a;
                                var n;
                                const i = e[t.userName],
                                    r = (null == i ? void 0 : i.account) ?? {
                                        username: t.userName,
                                        fakeUsername: t.userName,
                                        clanAbbreviation: '',
                                        anonymizer: !1,
                                        igrType: dl,
                                        teamKiller: !1,
                                        killed: !1,
                                        badge: Ml,
                                        suffixBadge: Ml,
                                    };
                                return (
                                    a.push({
                                        ...s,
                                        account: r,
                                        vehicle: void 0 !== i ? i.vehicle : void 0,
                                        databaseId: void 0 !== i ? i.databaseId : void 0,
                                    }),
                                    a
                                );
                            },
                            [],
                        ),
                    };
                }),
                d = te.shallow(() => {
                    const e = de(s.xp.total.get(), (e) => 'totalXP' === e.paramName);
                    ee(void 0 !== e, 'totalXP record is not found in the financial report');
                    const a = de(s.credits.total.get(), (e) => 'totalCredits' === e.paramName),
                        t = de(s.credits.total.get(), (e) => 'intermediateTotalCredits' === e.paramName);
                    return (
                        ee(void 0 !== a, 'totalCredits record is not found in the financial report'),
                        ee(void 0 !== t, 'intermediateTotalCredits record is not found in the financial report'),
                        {
                            baseCredits: t.baseValue,
                            baseVehicleXP: e.baseValue,
                            premiumCredits: t.premiumValue,
                            premiumVehicleXP: e.premiumValue,
                            creditsDiff: a.premiumValue - a.baseValue,
                            vehicleXPDiff: e.premiumValue - e.baseValue,
                        }
                    );
                }),
                u = te.primitive(() => {
                    const e = n.personalEfficiency.achievements.get();
                    return fe(e, (e) => e.epic || Aa.includes(e.groupID));
                });
            return {
                ...n,
                computes: {
                    hasSpeialMedals: u,
                    earnedCurrencies: i,
                    personalInfo: l,
                    efficiencyDetails: o,
                    personalEffiency: c,
                    premiumAndStandartEarnings: d,
                    pathToPlugins: r,
                },
            };
        },
        ({ externalModel: e, model: a }) => {
            const t = e.createCallback((e) => e, 'teamStats.onStatsSorted');
            return {
                close: e.createCallbackNoArgs('onClose'),
                openMissions: e.createCallbackNoArgs('onOpenMissions'),
                applyBonus: e.createCallbackNoArgs('additionalBonus.onPremiumXpBonusApplied'),
                showBonusDetails: e.createCallbackNoArgs('additionalBonus.onShowDetails'),
                useAdvertisement: e.createCallback((e) => {
                    const t = new Set(a.additionalBonus.get().usedAdvertisements);
                    return t.has(e)
                        ? {
                              localStorage: (
                                  () => (e) =>
                                      `[${e.map((e) => (void 0 !== e ? JSON.stringify(e) : 'null')).join(',')}]`
                              )()([e]),
                          }
                        : {
                              localStorage: (
                                  () => (e) =>
                                      `[${e.map((e) => (void 0 !== e ? JSON.stringify(e) : 'null')).join(',')}]`
                              )()([...t, e]),
                          };
                }, 'additionalBonus.onLocalStorageUpdated'),
                teamEfficiency: {
                    sort: j((e) => {
                        (a.teamsStatistic.sorting.set(e), t(e));
                    }),
                    selectRow: j((e) => {
                        const t = a.teamsStatistic.selectedRow.get();
                        (null == t ? void 0 : t.team) !== (null == e ? void 0 : e.team) ||
                        (null == t ? void 0 : t.username) !== (null == e ? void 0 : e.username)
                            ? a.teamsStatistic.selectedRow.set(e)
                            : a.teamsStatistic.selectedRow.set(void 0);
                    }),
                },
                onSatisfactionRatingSelected: e.createCallback(
                    (e) => ({ state: e }),
                    'playerSatisfaction.onSatisfactionRatingSelected',
                ),
                setNotifications: j((e) => {
                    a.notificationList.set(e);
                }),
                pushNotifications: j((e) => {
                    0 !== e.length && a.notificationList.set([...a.notificationList.get(), ...e]);
                }),
            };
        },
    ),
    co = 'NoProgress_e30a0572',
    uo = 'NoProgress_header_fd4fa20b',
    mo = 'NoProgress_description_965e21c0',
    po = l(function () {
        const a = k.resolve('strings'),
            { controls: t } = oo();
        return e.jsxs('div', {
            className: co,
            children: [
                e.jsx('div', {
                    className: uo,
                    children: a.readOrEmpty('battle_results.common.missions.noProgress.header'),
                }),
                e.jsx('div', {
                    className: mo,
                    children: a.readOrEmpty('battle_results.common.missions.noProgress.description'),
                }),
                e.jsx(ve, {
                    theme: ve.themes.secondary,
                    onClick: t.openMissions,
                    children: a.readOrEmpty('battle_results.common.missions.noProgress.button'),
                }),
            ],
        });
    });
const _o = 'MissionsProgress_ca7ca547',
    fo = 'MissionsProgress_content_b1e9d53b',
    vo = 'MissionsProgress_verticalBar_a9f04f7f',
    bo = V.cubicBezier(0.23, 0, 0.57, 1),
    ho = F('MissionsProgress', _o);
function go(e) {
    return e.reduce((e, a) => (a.result.notifications && e.push(...a.result.notifications), e), []);
}
function yo(e) {
    return Q(
        e,
        (e) => Boolean(e.result.animated),
        (e, a) => a,
    );
}
const xo = l(function ({ className: a }) {
        const { model: s, controls: i } = oo(),
            { active: r } = L(),
            [l, o] = t.useState(!1),
            [c, d] = t.useState(!1),
            [u, m] = t.useState(-1),
            p = (function (e) {
                const [a, s] = t.useState({}),
                    n = t.useRef({}),
                    i = t.useRef({});
                return (
                    t.useEffect(() => {
                        const t = [];
                        function r(e, a) {
                            (e.destroy(), delete n.current[a], delete i.current[a]);
                        }
                        return (
                            (async function () {
                                const l = await Promise.allSettled(
                                    Q(
                                        e,
                                        (e) => !(e.url in a || e.url in i.current),
                                        async (e) => {
                                            ((i.current[e.url] = !0),
                                                s((a) => ({ ...a, [e.url]: { status: 'loading' } })));
                                            const a = await be(e.url);
                                            return t.includes(e.url)
                                                ? (r(a, e.url), { type: 'rejected' })
                                                : ((n.current[e.url] = a),
                                                  a
                                                      .init(...(e.args ?? []))
                                                      .then((a) => ({ plugin: a, url: e.url, type: 'success' })));
                                        },
                                    ),
                                ).then((e) =>
                                    e.reduce(
                                        (e, a) =>
                                            'fulfilled' !== a.status
                                                ? (console.error('Can not load plugin :', a.reason), e)
                                                : ('rejected' === a.value.type ||
                                                      (e[a.value.url] = { status: 'loaded', result: a.value.plugin }),
                                                  e),
                                        { ...a },
                                    ),
                                );
                                s(l);
                                for (const e in Object.keys(l)) delete i.current[e];
                            })(),
                            () => {
                                Object.keys(n.current)
                                    .filter((a) => !e.some((e) => a === e.url))
                                    .forEach((e) => {
                                        if (e in i) return void t.push(e);
                                        const a = n.current[e];
                                        if (!a) return console.error(`Can't destroy plugin with url ${e}`);
                                        r(a, e);
                                    });
                            }
                        );
                    }, [e]),
                    a
                );
            })(s.computes.pathToPlugins()),
            _ = t.useMemo(() => {
                return (
                    (e = p),
                    Object.entries(e)
                        .map(([e, a]) => {
                            const t = I(Kr, a);
                            return t.success
                                ? t.output
                                : (console.error(`Failure to load plugin: ${e}`, t.issues), { status: 'failure' });
                        })
                        .filter((e) => 'loaded' === e.status)
                        .sort((e, a) => {
                            const t = e.result.completed ? 1e3 * e.result.categoryOrder : e.result.categoryOrder;
                            return (a.result.completed ? 1e3 * a.result.categoryOrder : a.result.categoryOrder) - t;
                        })
                );
                var e;
            }, [p]),
            { notifications: f, animatablePluginIndexes: v } = t.useMemo(
                () => ({ notifications: go(_), animatablePluginIndexes: yo(_) }),
                [_],
            );
        z(() => m((e) => e + 1), u > -1 && u < v.length ? 600 : void 0);
        const [b, h] = w(() => ({ from: { opacity: 0 }, config: { duration: 660, easing: bo }, onRest: () => m(0) }));
        return (
            t.useEffect(() => {
                r === Ia.progression && (h.start({ to: { opacity: 1 } }), v.length > 0 && !1 === c && d(!0));
            }, [c, r, h, _, v]),
            t.useEffect(() => {
                f.length > 0 && i.setNotifications(f);
            }, [i, f]),
            t.useEffect(() => {
                c && r !== Ia.progression && o(!0);
            }, [c, r]),
            e.jsx(ho, {
                className: a,
                children: e.jsx(n.div, {
                    style: b,
                    className: fo,
                    children: he(p)
                        ? e.jsx(po, {})
                        : e.jsxs(K, {
                              children: [
                                  e.jsx(ge, {
                                      children: J(Object.entries(_), ([a, t], s) => {
                                          const n = t.result.component;
                                          return e.jsx(
                                              ye,
                                              {
                                                  children: e.jsx(n, {
                                                      animation: s <= (v[u] ?? -1),
                                                      immediateAnimation: l,
                                                      pushNotifications: i.pushNotifications,
                                                  }),
                                              },
                                              a,
                                          );
                                      }),
                                  }),
                                  e.jsx(q, { classNames: { base: vo } }),
                              ],
                          }),
                }),
            })
        );
    }),
    No = t.createContext(null);
function jo() {
    const e = t.useContext(No);
    if (null === e) throw new Error('You can use the achievements hooks only with the Achievements component');
    return e;
}
const wo = { x: 50, y: -30, scale: 1.2, opacity: 0 };
function Io({ children: a, achievements: s, springsProps: n, vehicleNation: i }) {
    const [r, l] = t.useState(new Set()),
        [o, c] = t.useState(void 0),
        [d, u] = A(s.length, () => ({ from: { ...wo, ...(null == n ? void 0 : n.from) }, ...n }), [s.length, n]),
        m = t.useMemo(
            () => ({
                api: u,
                springs: d,
                vehicleNation: i,
                achievements: s,
                hoverIndex: o,
                setHoverIndex: c,
                completedAnimationIndexes: r,
                setCompletedAnimationIndexes: l,
            }),
            [u, d, i, s, o, c, r, l],
        );
    return e.jsx(No.Provider, { value: m, children: a });
}
const Ao = {
        base: 'Achievements_ee9c0189',
        animatedAchievement: 'Achievements_animatedAchievement_4c71d33',
        achievement: 'Achievements_achievement_b41909e2',
        achievement__extinct: 'Achievements_achievement__extinct_19551569',
        achievementIcon: 'Achievements_achievementIcon_e83ea27d',
    },
    Co = t.forwardRef(function ({ achievement: s, index: n, width: i, height: r, classNames: l }, o) {
        const c = xe({
                args: t.useMemo(
                    () => ({ tooltipId: s.tooltipId, tooltipArgs: s.tooltipArgs }),
                    [s.tooltipId, s.tooltipArgs],
                ),
            }),
            d = H(),
            { hoverIndex: u, setHoverIndex: m, vehicleNation: p } = jo();
        return e.jsx('div', {
            ...c,
            ref: o,
            className: a(Ao.achievement, Ao[`achievement__${sl(n, u)}`], null == l ? void 0 : l.achievement),
            onMouseEnter: function (e) {
                (d.play('mouse-enter', { original: e, target: 'achievements:achievement' }), c.onMouseEnter(e), m(n));
            },
            onMouseLeave: () => {
                (c.onMouseLeave(), m(void 0));
            },
            children: e.jsx(
                X,
                {
                    width: i,
                    height: r,
                    path: il({ groupID: s.groupID, iconName: s.iconName, vehicleNation: p }),
                    className: a(Ao.achievementIcon, null == l ? void 0 : l.icon),
                },
                s.iconName,
            ),
        });
    }),
    So = F('Rewards', Ao.base);
t.memo(function ({ width: a, height: t, classNames: s, className: n }) {
    const { achievements: i } = jo();
    return e.jsx(So, {
        className: n,
        children: J(i, (n, i) => e.jsx(Co, { width: a, height: t, index: i, achievement: n, classNames: s }, n.name)),
    });
});
const Bo = {
        base: 'GroupedAchievements_636b322e',
        base__visible: 'GroupedAchievements_base__visible_590e18a3',
        marksGroup: 'GroupedAchievements_marksGroup_a52f04b2',
        epicAndHeroicGroup: 'GroupedAchievements_epicAndHeroicGroup_74be9c12',
        othersGroup: 'GroupedAchievements_othersGroup_681186bf',
        marksGroup__indentWithMarksOnGun: 'GroupedAchievements_marksGroup__indentWithMarksOnGun_185ceb79',
        marksGroup__masteryIndent: 'GroupedAchievements_marksGroup__masteryIndent_c64fb25b',
        epicAndHeroicGroup__indent: 'GroupedAchievements_epicAndHeroicGroup__indent_6a27769d',
        animatedAchievement: 'GroupedAchievements_animatedAchievement_9210ebd5',
        achievement: 'GroupedAchievements_achievement_977416af',
        achievement__notInteractive: 'GroupedAchievements_achievement__notInteractive_76fcea70',
    },
    Ro = t.memo(function ({
        achievements: s,
        startIndex: i,
        indent: r = 0,
        group: l,
        medalWidth: o,
        medalHeight: c,
        maxContainerWidth: d,
        hasSiblingGroups: u,
        updateGroupIndent: m,
    }) {
        const p = t.useRef(null),
            { springs: _, achievements: f, completedAnimationIndexes: v, hoverIndex: b } = jo();
        return (
            Ne(() => {
                if (null === p.current) return;
                const e = p.current.offsetWidth + Math.floor((r / s.length) * 2),
                    a = je(d);
                m(l, e < a ? Math.floor((a - e) / 2) : 0);
            }, [s.length, o, d, m]),
            e.jsx('div', {
                style: { paddingLeft: r, paddingRight: r },
                className: a(Bo[`${l}Group`], u && Bo[`${l}Group__indent`]),
                children: J(s, (t, r) => {
                    const l = f.length - i - r - 1;
                    return e.jsx(
                        n.div,
                        {
                            ref: 0 === r ? p : void 0,
                            className: Bo.animatedAchievement,
                            style: { ..._[l], zIndex: i + r === b ? s.length + 1 : s.length - r },
                            children: e.jsx(Co, {
                                classNames: {
                                    achievement: a(Bo.achievement, !1 === v.has(l) && Bo.achievement__notInteractive),
                                },
                                achievement: t,
                                width: o,
                                height: c,
                                index: i + r,
                            }),
                        },
                        r,
                    );
                }),
            })
        );
    });
function Po({ marksOnGun: e, hasSiblingGroups: a }) {
    return a && e ? Bo.marksGroup__indentWithMarksOnGun : a ? Bo.marksGroup__masteryIndent : void 0;
}
const ko = t.memo(function ({ achievements: t, startIndex: s, medalWidth: i, medalHeight: r, hasSiblingGroups: l }) {
        const { springs: o, achievements: c, completedAnimationIndexes: d, hoverIndex: u } = jo();
        return e.jsx('div', {
            className: a(
                Bo.marksGroup,
                Po({ hasSiblingGroups: l, marksOnGun: t.some((e) => 'marksOnGun' === e.name) }),
            ),
            children: J(t, (l, m) => {
                const p = c.length - s - m - 1;
                return e.jsx(
                    n.div,
                    {
                        className: Bo.animatedAchievement,
                        style: { ...o[p], zIndex: s + m === u ? t.length + 1 : t.length - m },
                        children: e.jsx(Co, {
                            classNames: {
                                achievement: a(Bo.achievement, !1 === d.has(p) && Bo.achievement__notInteractive),
                            },
                            achievement: l,
                            width: i,
                            height: r,
                            index: s + m,
                        }),
                    },
                    m,
                );
            }),
        });
    }),
    Eo = t.memo(function ({ className: s }) {
        const n = re(
                {
                    epicAndHeroic: { width: '120rem', height: '120rem', maxContainerWidth: 120 },
                    others: { width: '100rem', height: '100rem', maxContainerWidth: 80 },
                },
                {
                    large: {
                        epicAndHeroic: { width: '160rem', height: '160rem', maxContainerWidth: 160 },
                        others: { width: '140rem', height: '140rem', maxContainerWidth: 100 },
                    },
                    extraLarge: {
                        epicAndHeroic: { width: '220rem', height: '220rem', maxContainerWidth: 220 },
                        others: { width: '180rem', height: '180rem', maxContainerWidth: 130 },
                    },
                },
            ),
            { achievements: i } = jo(),
            r = t.useMemo(
                () =>
                    (function (e) {
                        return Z(
                            e,
                            (e, a) => {
                                switch (Zr(a)) {
                                    case Yr.markOfMastery:
                                    case Yr.marksOnGun:
                                        e.marks.push(a);
                                        break;
                                    case Yr.epic:
                                    case Yr.specialAchievements:
                                    case Yr.right:
                                        if (cl.includes(a.name)) {
                                            e.others.push(a);
                                            break;
                                        }
                                        e.epicAndHeroic.push(a);
                                        break;
                                    default:
                                        e.others.push(a);
                                }
                                return e;
                            },
                            { [rl]: [], [ll]: [], [ol]: [] },
                        );
                    })(i),
                [i],
            ),
            [l, o] = t.useState(() => ({
                epicAndHeroic: r.marks.length > 0 && r.epicAndHeroic.length > 0 ? void 0 : 0,
                others: r.epicAndHeroic.length + r.marks.length > 0 && r.others.length > 0 ? void 0 : 0,
            })),
            c = t.useCallback(
                function (e, a) {
                    o((t) => ({ ...t, [e]: a }));
                },
                [o],
            );
        return 0 === i.length
            ? null
            : e.jsxs('div', {
                  className: a(Bo.base, void 0 !== l.epicAndHeroic && void 0 !== l.others && Bo.base__visible, s),
                  children: [
                      r.marks.length > 0 &&
                          e.jsx(ko, {
                              medalWidth: n.epicAndHeroic.width,
                              medalHeight: n.epicAndHeroic.height,
                              achievements: r.marks,
                              startIndex: 0,
                              hasSiblingGroups: r.epicAndHeroic.length + r.others.length > 0,
                          }),
                      r.epicAndHeroic.length > 0 &&
                          e.jsx(Ro, {
                              group: ll,
                              medalWidth: n.epicAndHeroic.width,
                              medalHeight: n.epicAndHeroic.height,
                              maxContainerWidth: n.epicAndHeroic.maxContainerWidth,
                              achievements: r.epicAndHeroic,
                              startIndex: r.marks.length,
                              updateGroupIndent: c,
                              indent: l.epicAndHeroic,
                              hasSiblingGroups: r.others.length > 0,
                          }),
                      r.others.length > 0 &&
                          e.jsx(Ro, {
                              group: ol,
                              medalWidth: n.others.width,
                              medalHeight: n.others.height,
                              maxContainerWidth: n.others.maxContainerWidth,
                              achievements: r.others,
                              startIndex: r.marks.length + r.epicAndHeroic.length,
                              updateGroupIndent: c,
                              indent: l.others,
                          }),
                  ],
              });
    });
var To = ((e) => ((e.None = 'none'), (e.Worse = 'worse'), (e.Usual = 'usual'), (e.Better = 'better'), e))(To || {});
const Do = 'RateButton_bb66ff02',
    Vo = 'RateButton_base__inner_61655025',
    zo = 'RateButton_base__first_hover_c025af3c',
    Oo = 'RateButton_base__usual_6d49d479',
    Ho = 'RateButton_base__worse_4a6537c5',
    Wo = 'RateButton_base__better_ab2a6315',
    Mo = 'RateButton_base__selected_70adc5a4',
    Go = 'RateButton_base__disabled_73dd0147',
    Fo = { [To.Worse]: Ho, [To.Usual]: Oo, [To.Better]: Wo, [To.None]: null },
    $o = ({ variant: t, selected: s, className: n, isHovered: i, ...r }) => {
        const l = k.resolve('strings'),
            o = H(),
            c = E({
                header: l.readOrEmpty(`battle_results.battleRating.tooltip.${t}.header`),
                body: l.readOrEmpty(`battle_results.battleRating.tooltip.${t}.body`),
            }),
            d = !i && !r.disabled && t === To.Usual;
        return e.jsx('div', {
            onMouseEnter: (e) => {
                !s && !r.disabled && o.play('mouse-enter', { original: e, target: 'battle_rating:rate_button' });
            },
            children: e.jsx('button', {
                className: a(Do, n, Fo[t], s ? Mo : d ? zo : r.disabled ? Go : void 0),
                ...c,
                ...r,
                children: e.jsx('div', { className: Vo }),
            }),
        });
    },
    Lo = {
        base: 'BattleRating_fa13d03',
        base_title: 'BattleRating_base_title_757e19bf',
        base_wrapper: 'BattleRating_base_wrapper_ae4d42aa',
    },
    Xo = function ({ state: a, onSatisfactionRatingSelected: s }) {
        const [n, i] = t.useState(!1),
            r = H(),
            l = R.strings.battle_results.battleResult.battleRating[a].header(),
            o = [To.Worse, To.Usual, To.Better],
            c = a === To.None;
        return e.jsxs('div', {
            className: Lo.base,
            onMouseEnter: () => {
                i(!0);
            },
            children: [
                e.jsx('div', { className: Lo.base_title, children: l }),
                e.jsx('div', {
                    className: Lo.base_wrapper,
                    children: o.map(
                        (t) =>
                            t !== To.None &&
                            e.jsx(
                                $o,
                                {
                                    variant: t,
                                    className: Lo.base_button,
                                    selected: a === t,
                                    onClick: c
                                        ? (e) => {
                                              (r.play('click', { original: e, target: 'battle_rating:rate_button' }),
                                                  s(t));
                                          }
                                        : null,
                                    isHovered: n,
                                    disabled: a !== t && a !== To.None,
                                },
                                t,
                            ),
                    ),
                }),
            ],
        });
    },
    Ko = t.createContext(null);
function qo() {
    const e = t.useContext(Ko);
    if (null === e) throw new Error('You can use the managable bonus hooks only with the ManagableBonus component');
    return e;
}
function Uo({
    children: a,
    bonusState: s,
    restriction: n,
    usedAdvertisements: i,
    supportedStates: r,
    supportedAdvertisements: l = zl,
    ...o
}) {
    const c = t.useMemo(
        () => (
            ee(
                (function (e) {
                    return vl.includes(e);
                })(s),
                `Bonus state ${s} is not supported`,
            ),
            {
                ...o,
                bonusState: s,
                restriction: n,
                supportedAdvertisements: l,
                state: Hl[s].define({ restriction: n, supportedAdvertisements: l, usedAdvertisements: i }),
            }
        ),
        [s, n, o, l, i],
    );
    return Array.isArray(r) && !1 === r.includes(s)
        ? (console.error(`State ${s} is not supported for the current game mode`), null)
        : e.jsx(Ko.Provider, { value: c, children: a });
}
const Yo = { value: 'Currency_value_a12c8cb4' };
function Jo({ size: t, type: s, classNames: n, withoutPlus: i = !1, value: r }) {
    const l = 'gold' === s ? 'gold' : 'integral';
    return e.jsx(ne, {
        reverse: !0,
        size: t,
        type: s,
        className: a(Yo.currency, null == n ? void 0 : n.currency),
        children: i
            ? e.jsx('div', { className: a(Yo.value, null == n ? void 0 : n.value), children: T.formatNumber(l, r) })
            : e.jsx(P, {
                  className: a(Yo.value, null == n ? void 0 : n.value),
                  path: 'common.plusValueWithSpace',
                  params: { value: T.formatNumber(l, r) },
              }),
    });
}
const Zo = 'Advertising_50041e0d',
    Qo = 'Advertising_base__twoRows_2e4d12dc',
    ec = 'Advertising_base__threeRows_5439f637',
    ac = 'Advertising_currency_f20fcad',
    tc = 'Advertising_currencyValue_18a0b419';
function sc() {
    const {
        state: t,
        supportedAdvertisements: s,
        bonusMultiplier: n,
        durationInDays: i,
        creditsThreshold: r,
        handleAdvertisement: l,
    } = qo();
    we(() => {
        void 0 !== s &&
            (!1 !==
            (function (e, a) {
                return e.includes(a);
            })(s, t)
                ? void 0 !== l
                    ? l(t)
                    : console.error(
                          'The handler for advertisments is not provided. THe logic with cycled adverts will not work.',
                      )
                : console.error(`The state in the component should be on of the followings ${s.join(', ')}`));
    });
    const o = k.resolve('strings');
    switch (t) {
        case Sl:
            return e.jsx(P, {
                className: Zo,
                path: 'battle_results.common.details.premiumAdvertising.credits',
                params: {
                    bonusCredits: e.jsx(Jo, {
                        withoutPlus: !0,
                        type: 'credits',
                        size: ie.small,
                        value: r,
                        classNames: { currency: ac, value: tc },
                    }),
                    durationInDays: i,
                },
            });
        case Bl:
            return e.jsx(Ie, {
                className: a(Zo, ec),
                text: o.readOrEmpty('battle_results.common.details.premiumPlus.premium'),
            });
        case Rl:
            return e.jsx(Ie, {
                className: a(Zo, Qo),
                text: o.readOrEmpty('battle_results.common.details.premiumPlus.squad'),
            });
        case Pl:
            return e.jsx(Ie, {
                className: a(Zo, ec),
                text: o.readOrEmpty('battle_results.common.details.premiumAdvertising.bonus'),
                params: { multiplier: n },
            });
        case kl:
            return e.jsx(Ie, {
                className: a(Zo, Qo),
                text: o.readOrEmpty('battle_results.common.details.premiumPlus.quests'),
            });
        default:
            return (console.error(`Advertising state ${t} is not supported`), null);
    }
}
const nc = { base: 'LeftBonusAttempts_a541b0b8', count: 'LeftBonusAttempts_count_24f93d48' };
function ic({ count: a }) {
    return e.jsx(P, {
        upgradeLegacy: !0,
        params: { count: e.jsx('span', { className: nc.count, children: T.formatNumber('integral', a) }) },
        path: 'battle_results.common.premiumBonus.bonusLeft',
        className: nc.base,
    });
}
const rc = {
    base: 'Description_48571438',
    text: 'Description_text_30186c18',
    text__double: 'Description_text__double_333f570f',
};
function lc({ text: t, displayType: s = 'single', withAttemts: n = !0 }) {
    const { leftBonusAttempts: i } = qo();
    return e.jsxs('div', {
        className: rc.base,
        children: [e.jsx(Ie, { text: t, className: a(rc.text, rc[`text__${s}`]) }), n && e.jsx(ic, { count: i })],
    });
}
const oc = 'PremiumEarnings_d4b9118e',
    cc = 'PremiumEarnings_wrapper_82e68328',
    dc = 'PremiumEarnings_wrapper__semiTransparent_bb0620c7',
    uc = 'PremiumEarnings_label_94b3586c',
    mc = 'PremiumEarnings_label__highlight_7755be2e',
    pc = 'PremiumEarnings_currencies_d4b9118e',
    _c = 'PremiumEarnings_currency_3f1396eb',
    fc = 'PremiumEarnings_value_cbe7ec27';
function vc() {
    const t = k.resolve('strings'),
        { premiumAndStandartEarnings: s } = qo();
    return e.jsxs('div', {
        className: oc,
        children: [
            e.jsxs('div', {
                className: a(cc, dc),
                children: [
                    e.jsx('div', {
                        className: uc,
                        children: t.readOrEmpty('battle_results.common.details.noPremTitle'),
                    }),
                    e.jsxs('div', {
                        className: pc,
                        children: [
                            e.jsx(Jo, {
                                withoutPlus: !0,
                                size: ie.small,
                                type: 'credits',
                                classNames: { currency: _c, value: fc },
                                value: s.baseCredits,
                            }),
                            e.jsx(Jo, {
                                withoutPlus: !0,
                                size: ie.small,
                                type: 'tankXP',
                                classNames: { currency: _c, value: fc },
                                value: s.baseVehicleXP,
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs('div', {
                className: cc,
                children: [
                    e.jsx('div', {
                        className: a(uc, mc),
                        children: t.readOrEmpty('battle_results.common.details.premTitle'),
                    }),
                    e.jsxs('div', {
                        className: pc,
                        children: [
                            e.jsx(Jo, {
                                withoutPlus: !0,
                                size: ie.small,
                                type: 'credits',
                                classNames: { currency: _c, value: fc },
                                value: s.premiumCredits,
                            }),
                            e.jsx(Jo, {
                                withoutPlus: !0,
                                size: ie.small,
                                type: 'tankXP',
                                classNames: { currency: _c, value: fc },
                                value: s.premiumVehicleXP,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const bc = 'PremiumInfoCurrencies_value_5b83491e',
    hc = 'PremiumInfoCurrencies_currency_6908b9d9',
    gc = F('PremiumInfoCurrencies', 'PremiumInfoCurrencies_8b21f7ee');
function yc() {
    const a = re({ size: ie.small }, { medium: { size: ie.large } }),
        { premiumAndStandartEarnings: t } = qo();
    return e.jsxs(gc, {
        children: [
            e.jsx(Jo, { size: a.size, type: 'credits', classNames: { currency: hc, value: bc }, value: t.creditsDiff }),
            e.jsx(Jo, {
                size: a.size,
                type: 'tankXP',
                classNames: { currency: hc, value: bc },
                value: t.vehicleXPDiff,
            }),
        ],
    });
}
const xc = F('Content'),
    Nc = t.forwardRef(function (a, t) {
        const { state: s } = qo(),
            n = k.resolve('strings');
        return e.jsx(xc, {
            ...a,
            ref: t,
            children: (() => {
                switch (s) {
                    case bl:
                        return e.jsx(yc, {});
                    case hl:
                    case gl:
                    case jl:
                    case Il:
                    case wl:
                    case Al:
                    case Tl:
                    case Dl:
                        return e.jsx(lc, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.description'),
                            displayType: 'single',
                        });
                    case yl:
                        return e.jsx(lc, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.rule'),
                            displayType: 'double',
                        });
                    case xl:
                        return e.jsx(lc, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.expiredBattleResult'),
                            displayType: 'double',
                        });
                    case Nl:
                        return e.jsx(lc, {
                            withAttemts: !1,
                            text: n.readOrEmpty('battle_results.common.premiumBonus.unavailable'),
                            displayType: 'double',
                        });
                    case El:
                        return e.jsx(lc, {
                            withAttemts: !1,
                            text: n.readOrEmpty('battle_results.common.plusBonus.premiumPlusAdd'),
                            displayType: 'double',
                        });
                    case Cl:
                        return e.jsx(vc, {});
                    case Bl:
                    case Sl:
                    case Rl:
                    case Pl:
                    case kl:
                        return e.jsx(sc, {});
                    default:
                        return (console.error(`State ${s} is not supported`), null);
                }
            })(),
        });
    }),
    jc = 'AppliedBonusInfo_910a06bc',
    wc = 'AppliedBonusInfo_icon_208dd0cc';
function Ic() {
    return e.jsxs('div', {
        className: jc,
        children: [
            e.jsx('div', { className: wc }),
            e.jsx(P, { path: 'battle_results.common.premiumBonus.appliedBonus' }),
        ],
    });
}
const Ac = 'ApplyButton_fa337b96',
    Cc = 'ApplyButton_button_a471284',
    Sc = 'ApplyButton_value_c22167ea';
function Bc() {
    const a = k.resolve('strings'),
        { bonusXpDiff: t, applyBonus: s } = qo(),
        n = re(
            { iconSize: ie.small, buttonSize: ve.sizes.small },
            { large: { iconSize: ie.large }, extraLarge: { buttonSize: ve.sizes.medium } },
        );
    return e.jsxs('div', {
        className: Ac,
        children: [
            e.jsx(Jo, { type: 'tankXP', size: n.iconSize, value: t, classNames: { value: Sc } }),
            e.jsx(ve, {
                size: n.buttonSize,
                theme: ve.themes.primary,
                className: Cc,
                onClick: s,
                soundTarget: 'managable-bonus:apply-button',
                children: a.readOrEmpty('battle_results.common.premiumBonus.applyBonusBtn'),
            }),
        ],
    });
}
const Rc = 'PlusEarnings_505f274c',
    Pc = 'PlusEarnings_label_79ad021c',
    kc = 'PlusEarnings_link_649208b3',
    Ec = 'PlusEarnings_currency_fddc9198',
    Tc = 'PlusEarnings_value_fe187db9',
    Dc = { withWotPlus: 'withWotPlus', withWotPremium: 'withWotPremium' };
const Vc = {
    [Dc.withWotPlus]: 'battle_results.common.plusBonus.wotPlus',
    [Dc.withWotPremium]: 'battle_results.common.plusBonus.wotPremium',
};
function zc({ onClick: a }) {
    const t = k.resolve('strings'),
        s = Ae().breakpoint,
        { wotPlus: n, wotPremium: i, bonusXpDiff: r } = qo(),
        l = (function (e, a) {
            return a && !1 === e ? Dc.withWotPlus : e && !1 === a ? Dc.withWotPremium : void 0;
        })(n, i);
    if (void 0 !== l)
        return e.jsxs('div', {
            className: Rc,
            children: [
                e.jsxs('div', {
                    className: Pc,
                    children: [
                        t.readOrEmpty('battle_results.common.plusBonus.bonusLeftAdditionalText'),
                        e.jsx('span', { className: kc, onClick: a, children: t.readOrEmpty(Vc[l]) }),
                    ],
                }),
                e.jsx(Jo, {
                    type: 'tankXP',
                    size: s.weight >= Ce.medium.weight ? ie.large : ie.small,
                    value: r,
                    classNames: { currency: Ec, value: Tc },
                }),
            ],
        });
    console.error(`plus earnings state can't have such flag combination: wotPlus: ${n}, wotPremium: ${i}`);
}
const Oc = 'PlusYouRock_a108dad8',
    Hc = 'PlusYouRock_message_52bfa860',
    Wc = 'PlusYouRock_rock_6d6e55b1',
    Mc = 'PlusYouRock_currency_73dcb93a',
    Gc = 'PlusYouRock_value_daab6eb6';
function Fc() {
    const a = k.resolve('strings'),
        t = Ae().breakpoint,
        { dailyAppliedAdditionalXP: s } = qo();
    return e.jsxs('div', {
        className: Oc,
        children: [
            e.jsxs('div', {
                className: Hc,
                children: [
                    e.jsx('span', {
                        className: Wc,
                        children: a.readOrEmpty('battle_results.common.plusBonus.youRock'),
                    }),
                    ' ',
                    a.readOrEmpty('battle_results.common.plusBonus.earnedMessage'),
                ],
            }),
            e.jsx(Jo, {
                type: 'tankXP',
                size: t.weight >= Ce.medium.weight ? ie.large : ie.small,
                value: s,
                classNames: { currency: Mc, value: Gc },
            }),
        ],
    });
}
const $c = {
    base: 'PremiumInfoButton_66b12c2',
    button: 'PremiumInfoButton_button_870d4076',
    buttonHint: 'PremiumInfoButton_buttonHint_1ee6743f',
};
function Lc({ onClick: t, withLabel: s = !1 }) {
    const n = k.resolve('strings'),
        { breakpoint: i } = Ae(),
        r = i.weight > Ce.large.weight ? ve.sizes.medium : ve.sizes.small;
    return e.jsxs('div', {
        className: a($c.base, s && $c.base__withLabel),
        children: [
            s &&
                e.jsx('div', {
                    className: $c.buttonHint,
                    children: n.readOrEmpty('battle_results.common.premiumBonus.earnMore'),
                }),
            e.jsx(ve, {
                className: $c.button,
                size: s ? ve.sizes.small : r,
                theme: ve.themes.primary,
                onClick: t,
                soundTarget: 'managable-bonus:premium-info-button',
                children: n.readOrEmpty('battle_results.common.details.getPremBtn'),
            }),
        ],
    });
}
const Xc = 'Restriction_8b730e49',
    Kc = 'Restriction_iconWrapper_ac9b1b94',
    qc = 'Restriction_icon_ef5c0819',
    Uc = 'Restriction_formattedText_b2d2b647';
function Yc({ path: a, tooltipParams: t }) {
    const s = E(t);
    return e.jsx('div', {
        className: Xc,
        children: e.jsx(P, {
            path: a,
            className: Uc,
            params: {
                info: e.jsx('span', {
                    ...s,
                    className: Kc,
                    children: e.jsx(Se, { path: 'post_battle.info', className: qc }),
                }),
            },
        }),
    });
}
const Jc = F('Footer'),
    Zc = t.forwardRef(function (a, t) {
        const { state: s, showBonusDetails: n } = qo(),
            i = k.resolve('strings');
        return e.jsx(Jc, {
            ...a,
            ref: t,
            children: (() => {
                switch (s) {
                    case bl:
                        return e.jsx(Lc, { withLabel: !0, onClick: n });
                    case hl:
                        return e.jsx(Bc, {});
                    case gl:
                        return e.jsx(Ic, {});
                    case jl:
                        return e.jsx(Yc, {
                            path: 'battle_results.common.premiumBonus.tankStateChangedWithInfo',
                            tooltipParams: {
                                header: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankStateChanged.header'),
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankStateChanged.body'),
                            },
                        });
                    case Il:
                        return e.jsx(Yc, {
                            path: 'battle_results.common.premiumBonus.isXPToTmenEnabledWithInfo',
                            tooltipParams: {
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.xpToTmenChanged.body'),
                            },
                        });
                    case wl:
                        return e.jsx(Yc, {
                            path: 'battle_results.common.premiumBonus.isXPToTmenDisabledWithInfo',
                            tooltipParams: {
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.xpToTmenChanged.body'),
                            },
                        });
                    case Al:
                        return e.jsx(Yc, {
                            path: 'battle_results.common.premiumBonus.tankmenStateChangedWithInfo',
                            tooltipParams: {
                                header: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankmenStateChanged.header'),
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankmenStateChanged.body'),
                            },
                        });
                    case El:
                        return e.jsx(Lc, { onClick: n });
                    case Tl:
                        return e.jsx(zc, { onClick: n });
                    case Dl:
                        return e.jsx(Fc, {});
                    case Sl:
                    case Bl:
                    case Rl:
                    case Pl:
                    case kl:
                        return e.jsx(Lc, { onClick: n });
                    default:
                        return null;
                }
            })(),
        });
    }),
    Qc = {
        icon: 'Header_icon_6d03683a',
        base__premiumInfo: 'Header_base__premiumInfo_65f475ba',
        base__premiumEarnings: 'Header_base__premiumEarnings_65f475ba',
        base__premiumAdvertising: 'Header_base__premiumAdvertising_65f475ba',
        base__applyBonus: 'Header_base__applyBonus_65f475ba',
        base__appliedBonus: 'Header_base__appliedBonus_65f475ba',
        base__noVehicle: 'Header_base__noVehicle_65f475ba',
        base__fasterEducationCrewActive: 'Header_base__fasterEducationCrewActive_65f475ba',
        base__fasterEducationCrewNotActive: 'Header_base__fasterEducationCrewNotActive_65f475ba',
        base__noCrew: 'Header_base__noCrew_65f475ba',
        base__plusInfo: 'Header_base__plusInfo_65f475ba',
        base__plusEarnings: 'Header_base__plusEarnings_65f475ba',
        base__plusYouRock: 'Header_base__plusYouRock_65f475ba',
        base__bonusAdvertising: 'Header_base__bonusAdvertising_65f475ba',
        base__isNotVictory: 'Header_base__isNotVictory_65f475ba',
        base__requiredRecentBattleAndVehicle: 'Header_base__requiredRecentBattleAndVehicle_65f475ba',
        base__invalidBattleType: 'Header_base__invalidBattleType_65f475ba',
        base__creditsAdvertising: 'Header_base__creditsAdvertising_65f475ba',
        base__squadAdvertising: 'Header_base__squadAdvertising_65f475ba',
        base__questsAdvertising: 'Header_base__questsAdvertising_65f475ba',
        bonusMultiplier: 'Header_bonusMultiplier_f62ee8c5',
        text: 'Header_text_52d638',
        text__textOverlay: 'Header_text__textOverlay_c3789e66',
    },
    ed = F('Header'),
    ad = t.forwardRef(function ({ className: t, classNames: s, ...n }, i) {
        const { state: r, bonusMultiplier: l } = qo(),
            o = k
                .resolve('strings')
                .readOrEmpty('battle_results.common.premiumBonus.bonusMultiplier')
                .replace('{{value}}', l.toString());
        return e.jsx(ed, {
            ref: i,
            className: a(Qc[`base__${r}`], t),
            ...n,
            children: e.jsx('div', {
                className: a(Qc.icon, null == s ? void 0 : s.icon),
                children: e.jsx(Be, {
                    classNames: {
                        base: Qc.bonusMultiplier,
                        text: Qc.text,
                        textOverlay: a(Qc.text, Qc.text__textOverlay),
                    },
                    children: o,
                }),
            }),
        });
    }),
    td = F('ManagableBonus', 'ManagableBonus_55c8d52d'),
    sd = t.memo(td);
((sd.Header = ad), (sd.Content = Nc), (sd.Footer = Zc));
const nd = {
    bonus__disabled: 'Bonus_bonus__disabled_d9abacdd',
    content: 'Bonus_content_58a93521',
    bonus__premiumInfo: 'Bonus_bonus__premiumInfo_d9abacdd',
    bonus__applyBonus: 'Bonus_bonus__applyBonus_d9abacdd',
    bonus__appliedBonus: 'Bonus_bonus__appliedBonus_d9abacdd',
    bonus__isNotVictory: 'Bonus_bonus__isNotVictory_d9abacdd',
    bonus__invalidBattleType: 'Bonus_bonus__invalidBattleType_d9abacdd',
    bonus__requiredRecentBattleAndVehicle: 'Bonus_bonus__requiredRecentBattleAndVehicle_d9abacdd',
    bonus__noVehicle: 'Bonus_bonus__noVehicle_d9abacdd',
    bonus__fasterEducationCrewActive: 'Bonus_bonus__fasterEducationCrewActive_d9abacdd',
    bonus__fasterEducationCrewNotActive: 'Bonus_bonus__fasterEducationCrewNotActive_d9abacdd',
    bonus__noCrew: 'Bonus_bonus__noCrew_d9abacdd',
    bonus__premiumEarnings: 'Bonus_bonus__premiumEarnings_d9abacdd',
    bonus__plusInfo: 'Bonus_bonus__plusInfo_d9abacdd',
    bonus__plusEarnings: 'Bonus_bonus__plusEarnings_d9abacdd',
    bonus__plusYouRock: 'Bonus_bonus__plusYouRock_d9abacdd',
    bonus__creditsAdvertising: 'Bonus_bonus__creditsAdvertising_d9abacdd',
    bonus__premiumAdvertising: 'Bonus_bonus__premiumAdvertising_d9abacdd',
    bonus__squadAdvertising: 'Bonus_bonus__squadAdvertising_d9abacdd',
    bonus__questsAdvertising: 'Bonus_bonus__questsAdvertising_d9abacdd',
    bonus__bonusAdvertising: 'Bonus_bonus__bonusAdvertising_d9abacdd',
    footer: 'Bonus_footer_9b2e3fe3',
};
function id({ className: t }) {
    const { state: s } = qo(),
        { completedSteps: n } = vt();
    return e.jsxs(sd, {
        className: a(nd.bonus, nd[`bonus__${s}`], !1 === n.has(mt.third) && nd.bonus__disabled, t),
        children: [
            e.jsx(sd.Header, {}),
            e.jsx(sd.Content, { className: nd.content }),
            e.jsx(sd.Footer, { className: nd.footer }),
        ],
    });
}
const rd = 'AnimatedNumber_958fc84e',
    ld = 'AnimatedNumber_slotMachineDigit_a9587a5a',
    od = 'AnimatedNumber_plugChar_c66678',
    cd = 'AnimatedNumber_digitsList_2065427d',
    dd = V.cubicBezier(0.33, 0, 0.25, 1);
function ud({ immediate: a, symbol: s, step: i, delay: r, first: l, handleFirstRest: o }) {
    const [c, d] = t.useState(!1),
        [u, m] = w(() => ({ from: { y: 0, opacity: 0 } })),
        p = /^\d$/.test(s);
    const _ = p ? parseInt(s) : 1;
    return (
        t.useEffect(() => {
            c && l && o();
        }, [c, l, o]),
        t.useEffect(() => {
            i > 0 &&
                (a && d(!0),
                m.start({
                    delay: c ? 0 : r,
                    from: { y: a ? -_ * i : i, opacity: 1 },
                    to: { y: -_ * i, opacity: 1 },
                    config: { duration: 600, easing: dd },
                    immediate: a || c,
                    onRest() {
                        d(!0);
                    },
                }));
        }, [i, m, c, r, _, a]),
        e.jsxs('div', {
            className: ld,
            children: [
                e.jsx('div', { className: od, children: s }),
                e.jsx(n.div, {
                    style: u,
                    className: cd,
                    children: ke(0, _ + 1, (a) =>
                        p
                            ? e.jsx('div', { children: a }, a)
                            : e.jsx('div', { style: { height: i }, children: a > 0 ? s : null }, a),
                    ),
                }),
            ],
        })
    );
}
const md = t.memo(function ({
        immediate: s,
        value: n,
        readyToAnimate: i,
        className: r,
        handleAnimationFinished: l,
        type: o,
    }) {
        const [c, d] = Re(),
            u = t.useMemo(() => n.split(''), [n]),
            m = t.useCallback(() => l(o), [l, o]);
        return e.jsx('div', {
            ref: c,
            className: a(rd, r),
            children: u.map((a, t) =>
                e.jsx(
                    ud,
                    {
                        first: 0 === t,
                        handleFirstRest: m,
                        immediate: s,
                        delay: 200 * (u.length - t),
                        symbol: a,
                        step: d.type === Pe.measured && i ? d.size.height : 0,
                    },
                    `${n}-${t}`,
                ),
            ),
        });
    }),
    pd = 'Currency_10720e2d',
    _d = 'Currency_icon_4d923f64',
    fd = 'Currency_icon__visible_9c676b12',
    vd = 'Currency_value_b21680b3',
    bd = { xp: 'tankXP', crystal: 'crystal', credits: 'credits', gold: 'gold' },
    hd = Object.keys(bd);
function gd({
    immediate: t,
    type: s,
    value: n,
    size: i,
    visibleIfZero: r,
    readyToAnimate: l,
    handleAnimationFinished: o,
}) {
    return ((e) => hd.includes(e))(s)
        ? 0 !== n || r
            ? e.jsx(ne, {
                  reverse: !0,
                  type: bd[s],
                  size: i,
                  className: pd,
                  classNames: { icon: a(_d, (l || t) && fd) },
                  children: e.jsx(md, {
                      className: vd,
                      immediate: t,
                      readyToAnimate: l,
                      type: s,
                      handleAnimationFinished: o,
                      value: T.formatNumber(s === Ee.gold ? 'gold' : 'integral', n),
                  }),
              })
            : null
        : (console.error(`There is no such currency in the template literal: ${s}`), null);
}
const yd = F('Currencies', 'Currencies_5b11a533'),
    xd = l(function ({ className: a }) {
        const [s, n] = t.useState(!1),
            [i, r] = t.useState(new Set()),
            [l, o] = t.useState(!1),
            { model: c } = oo(),
            d = c.computes.earnedCurrencies(),
            u = c.additionalBonus.get(),
            m = Te(d),
            p = H(),
            { step: _, setAllCurrenciesAniamted: f } = vt(),
            v = re({ value: ie.medium }, { medium: { value: ie.large }, large: { value: ie.extraLarge } });
        (t.useEffect(() => {
            void 0 !== m && m !== d && p.play('startRolling', { target: 'overview:currencies' });
        }, [d, m, p, _]),
            t.useEffect(() => {
                (_ !== mt.third && _ !== mt.immediate) ||
                    (_ === mt.third && p.play('startRolling', { target: 'overview:currencies' }), n(!0));
            }, [_, p]),
            t.useEffect(() => {
                i.size === d.filter(({ value: e, visibleIfZero: a }) => e > 0 || a).length &&
                    (_ !== mt.immediate && p.play('stopRolling', { target: 'overview:currencies' }),
                    f(!0),
                    u.bonusState === _l.PremiumBonus &&
                        u.restriction === pl.NoRestriction &&
                        (r((e) => De(e, 'xp')), o(!0)));
            }, [_, i, d, p, u.bonusState, u.restriction, f]));
        const b = t.useCallback(function (e) {
            r((a) => O(a, e));
        }, []);
        return e.jsx(yd, {
            className: a,
            children: J(d, (a) =>
                e.jsx(
                    gd,
                    {
                        readyToAnimate: s,
                        size: v.value,
                        handleAnimationFinished: b,
                        immediate: _ === mt.immediate && !1 === l,
                        ...a,
                    },
                    a.type,
                ),
            ),
        });
    }),
    Nd = 'Overview_flare_5277bd9e',
    jd = 'Overview_vignette_ff9b1e99',
    wd = 'Overview_b4108a3c',
    Id = 'Overview_info_fa4e7011',
    Ad = 'Overview_info__withoutMedals_6be29b19',
    Cd = 'Overview_statusWrapper_cda9b438',
    Sd = 'Overview_status_1c902a82',
    Bd = 'Overview_statusText_26db019c',
    Rd = 'Overview_achievements_5b2b6582',
    Pd = 'Overview_dividerWrapper_25de8b48',
    kd = 'Overview_divider_652a671e',
    Ed = 'Overview_dividerImage_2a8a0c0e',
    Td = 'Overview_currencies_d637d5d',
    Dd = 'Overview_bonus_30af9d4',
    Vd = k.resolve('images');
function zd({ winStatus: e, epicFlare: a }) {
    return e === Ca
        ? a
            ? 'post_battle.epic_victory_flare'
            : 'post_battle.no_epic_victory_flare'
        : a
          ? 'post_battle.epic_draw_defeat_flare'
          : 'post_battle.no_epic_draw_defeat_flare';
}
const Od = l(function () {
        var a;
        const { model: s } = oo(),
            { active: i } = L(),
            [{ x: r }, l] = w(() => ({ x: 0 })),
            o = null == (a = s.battleInfo.get()) ? void 0 : a.status,
            c = s.computes.hasSpeialMedals(),
            d = t.useRef(null);
        return (
            t.useEffect(() => {
                if (i === Ia.overview)
                    return Ve.move(function ([e]) {
                        const a = ze().width,
                            t = 2 * (e.clientX / a - 0.5);
                        l.start({ x: 3 * t });
                    });
            }),
            e.jsx(n.div, {
                ref: d,
                className: Nd,
                style: {
                    backgroundImage: `url(${Vd.readOrEmpty(zd({ winStatus: o, epicFlare: c }))})`,
                    backgroundPosition: r.to((e) => `${50 + e}% center`),
                },
            })
        );
    }),
    Hd = t.createContext(null);
function Wd() {
    const e = t.useContext(Hd);
    if (null === e)
        throw new Error('You can use the expandable overlay hooks only with the ExpandableOverlay widget component');
    return e;
}
function Md({ children: a, visible: s, changeVisible: n, closedPosition: i, animationProps: r }) {
    const [l, o] = t.useState(s ?? !1),
        [c, d] = w(() => ({ ...r, y: l ? '0' : i, backgroundColor: l ? 'rgba(18, 19, 22, 0.8)' : 'transparent' })),
        [u, m] = w(() => ({ opacity: l ? 1 : 0 })),
        [p, _] = w(() => ({ x: '-50%', y: '0', rotate: 180, opacity: 1 }));
    (t.useLayoutEffect(() => {
        void 0 !== s && o(s);
    }, [s]),
        t.useEffect(() => {
            null == n || n(l);
        }, [l, n]));
    const f = t.useMemo(
        () => ({
            opened: l,
            closedPosition: i,
            animationProps: r,
            handleOpen: o,
            overlayStyles: c,
            overlayApi: d,
            shadowStyles: u,
            shadowApi: m,
            arrowStyles: p,
            arrowStylesApi: _,
        }),
        [l, i, r, o, c, d, u, m, p, _],
    );
    return e.jsx(Hd.Provider, { value: f, children: a });
}
const Gd = 'HintKey_keyButton_e4149405',
    Fd = 'HintKey_background_e4149405',
    $d = 'HintKey_border_71616e63',
    Ld = 'HintKey_content_63ecef8',
    Xd = 'HintKey_triangle_fb0bc682',
    Kd = 'HintKey_triangleNoise_6e72dfca',
    qd = F('PersoanlEfficiencyHintKey', 'HintKey_2efc42a0');
const Ud = {
        base: 'OverlayDivider_fcc0c30',
        divider: 'OverlayDivider_divider_1acaec30',
        divider__right: 'OverlayDivider_divider__right_546d0e74',
        base__closed: 'OverlayDivider_base__closed_ceb65522',
        dividerImageElement: 'OverlayDivider_dividerImageElement_9babecb0',
    },
    Yd = t.forwardRef(function ({ className: t, classNames: s }, n) {
        var i, r, l, o, c, d;
        const { opened: u } = Wd();
        return e.jsxs('div', {
            ref: n,
            className: a(Ud.base, !u && Ud.base__closed, null == s ? void 0 : s.base, t),
            children: [
                e.jsx(gt, {
                    classNames: {
                        base: a(
                            Ud.divider,
                            Ud.divider__left,
                            null == (i = null == s ? void 0 : s.divider) ? void 0 : i.base,
                        ),
                        image: a(
                            Ud.dividerImageElement,
                            null == (r = null == s ? void 0 : s.divider) ? void 0 : r.image,
                        ),
                    },
                }),
                e.jsx(gt, {
                    classNames: {
                        base: a(
                            Ud.divider,
                            Ud.divider__right,
                            null == (l = null == s ? void 0 : s.divider) ? void 0 : l.base,
                            null == (o = null == s ? void 0 : s.rightDivider) ? void 0 : o.base,
                        ),
                        image: a(
                            Ud.dividerImageElement,
                            null == (c = null == s ? void 0 : s.divider) ? void 0 : c.image,
                            null == (d = null == s ? void 0 : s.rightDivider) ? void 0 : d.image,
                        ),
                    },
                }),
            ],
        });
    }),
    Jd = 'ExpandableOverlay_7ce5a85e',
    Zd = 'ExpandableOverlay_base__opened_7d677539',
    Qd = 'ExpandableOverlay_shadow_a52d16ce',
    eu = t.forwardRef(function ({ children: s }, i) {
        const { opened: r, handleOpen: l, overlayStyles: o, shadowStyles: c } = Wd(),
            d = H();
        return (
            t.useEffect(() => {
                function e(e) {
                    (l(!1), r && d.play('closeOverlay', { original: e, target: 'expandable-overlay' }));
                }
                return (document.addEventListener('click', e), () => document.removeEventListener('click', e));
            }, [r, d, l]),
            e.jsxs(n.div, {
                ref: i,
                'data-name': 'ExpandableOverlay',
                className: a(Jd, r && Zd),
                style: o,
                onClick: function (e) {
                    (e.stopPropagation(),
                        !1 === r &&
                            (d.play('click', { original: e, target: 'expandable-overlay' }),
                            d.play('openOverlay', { original: e, target: 'expandable-overlay' }),
                            l(!0)));
                },
                children: [e.jsx(n.div, { className: Qd, style: c }), s],
            })
        );
    });
((eu.HintKey = function ({
    disabled: t,
    throttleDelay: s = 600,
    classNames: i,
    keyCode: r = We.SPACE,
    triangleNoisePath: l = 'post_battle.noise',
}) {
    var o, c, d;
    const { handleOpen: u, arrowStyles: m } = Wd(),
        p = H(),
        _ = Oe(
            (e) => {
                t ||
                    (p.play('click', { original: e, target: 'expandable-overlay:hint-key' }),
                    u(
                        (a) => (
                            p.play(a ? 'closeOverlay' : 'openOverlay', {
                                original: e,
                                target: 'expandable-overlay:hint-key',
                            }),
                            !a
                        ),
                    ));
            },
            [t, u, p],
            s,
        );
    return e.jsx(e.Fragment, {
        children: e.jsxs(qd, {
            className: null == i ? void 0 : i.base,
            onClick: (e) => {
                (e.stopPropagation(),
                    u(
                        (a) => (
                            p.play(a ? 'closeOverlay' : 'openOverlay', {
                                original: e,
                                target: 'expandable-overlay:hint-key',
                            }),
                            !a
                        ),
                    ));
            },
            children: [
                e.jsx(He, {
                    keyCode: r,
                    classNames: {
                        base: a(Gd, null == i ? void 0 : i.keyButton),
                        background: a(Fd, null == (o = null == i ? void 0 : i.keyButton) ? void 0 : o.background),
                        content: a(Ld, null == (c = null == i ? void 0 : i.keyButton) ? void 0 : c.content),
                        border: a($d, null == (d = null == i ? void 0 : i.keyButton) ? void 0 : d.border),
                    },
                    soundTarget: 'expandable-overlay:hint-key',
                    onActive: _,
                    children: e.jsx(He.Code, {}),
                }),
                e.jsx(n.div, {
                    className: a(Xd, null == i ? void 0 : i.triangle),
                    style: m,
                    children: e.jsx(X, {
                        fit: 'cover',
                        path: l,
                        className: a(Kd, null == i ? void 0 : i.triangleNoise),
                    }),
                }),
            ],
        }),
    });
}),
    (eu.OverlayDivider = Yd));
const au = 'BodyRow_b47fe37f',
    tu = 'BodyRow_rowDivider_eb49c679',
    su = 'BodyRow_rowDividerImage_d852c3da';
function nu({ classNames: s, row: n, rowIndex: i }) {
    var r, l, o;
    const c = Me({
        args: { vehicleCD: null == (r = n.original.vehicle) ? void 0 : r.vehicleCD, databaseID: n.original.databaseId },
    });
    return t.createElement(
        Ge.Row,
        { ...(void 0 !== n.original.databaseId && c), key: n.id, className: a(au, null == s ? void 0 : s.row) },
        J(n.getVisibleCells(), (a, t) =>
            e.jsx(
                Ge.Cell,
                {
                    className: null == s ? void 0 : s.cell,
                    cell: { ...a, rowIndex: i, index: t, tablePart: Fe.body },
                    children: C(a.column.columnDef.cell, a.getContext()),
                },
                a.id,
            ),
        ),
        e.jsx(gt, {
            classNames: {
                base: a(tu, null == (l = null == s ? void 0 : s.divider) ? void 0 : l.base),
                image: a(su, null == (o = null == s ? void 0 : s.divider) ? void 0 : o.image),
            },
        }),
    );
}
const iu = {
        base: 'TableBody_4f65af24',
        scrollBar: 'TableBody_scrollBar_14038cca',
        scrollAreaContent: 'TableBody_scrollAreaContent_4a80f86c',
        mask: 'TableBody_mask_c5bcd0ad',
        rowDivider: 'TableBody_rowDivider_c1a3ebdc',
        rowDividerImage: 'TableBody_rowDividerImage_b0363e26',
    },
    ru = t.memo(function ({ classNames: s, children: i }) {
        var r, l, o, c, d, u, m, p;
        const { table: _ } = $e(),
            f = Le(),
            { api: v } = U();
        (Xe(We.ARROW_UP, () => {
            v.applyStepTo(Ke.Next);
        }),
            Xe(We.ARROW_DOWN, () => {
                v.applyStepTo(Ke.Prev);
            }));
        const [b, h] = w(() => ({ from: { maskSize: '100% 100%' } }));
        return (
            t.useEffect(() => {
                function e() {
                    f.run(() => {
                        !(function () {
                            const [, e] = v.getBounds(),
                                a = (v.animationScroll.scrollPosition.get() / e) * 7;
                            h.start({ to: { maskSize: `100% ${e > 0 ? 100 + a : 107}%` } });
                        })();
                    });
                }
                return (
                    v.events.on('recalculateContent', e),
                    v.events.on('rest', e),
                    v.events.on('change', e),
                    v.events.on('resizeHandled', e),
                    e(),
                    () => {
                        (v.events.off('recalculateContent', e),
                            v.events.off('rest', e),
                            v.events.off('change', e),
                            v.events.off('resizeHandled', e));
                    }
                );
            }, [v, f, h]),
            e.jsxs(Ge.Body, {
                className: a(iu.base, null == s ? void 0 : s.base),
                children: [
                    e.jsxs(n.div, {
                        className: iu.mask,
                        style: b,
                        children: [
                            e.jsx(gt, {
                                classNames: {
                                    base: a(
                                        iu.rowDivider,
                                        null == (r = null == s ? void 0 : s.divider) ? void 0 : r.base,
                                    ),
                                    image: a(
                                        iu.rowDividerImage,
                                        null == (l = null == s ? void 0 : s.divider) ? void 0 : l.image,
                                    ),
                                },
                            }),
                            e.jsxs(Y, {
                                classNames: {
                                    ...(null == (o = null == s ? void 0 : s.scroll) ? void 0 : o.area),
                                    wrapper: iu.scrollWrapper,
                                    content: a(
                                        iu.scrollAreaContent,
                                        null == (d = null == (c = null == s ? void 0 : s.scroll) ? void 0 : c.area)
                                            ? void 0
                                            : d.content,
                                    ),
                                },
                                children: [
                                    J(_.getRowModel().rows, (a, t) =>
                                        e.jsx(
                                            nu,
                                            {
                                                row: a,
                                                rowIndex: t,
                                                classNames: {
                                                    row: null == s ? void 0 : s.row,
                                                    cell: null == s ? void 0 : s.cell,
                                                    divider: null == s ? void 0 : s.divider,
                                                },
                                            },
                                            a.id,
                                        ),
                                    ),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    e.jsx(q, {
                        classNames: {
                            ...(null == (u = null == s ? void 0 : s.scroll) ? void 0 : u.bar),
                            base: a(
                                iu.scrollBar,
                                null == (p = null == (m = null == s ? void 0 : s.scroll) ? void 0 : m.bar)
                                    ? void 0
                                    : p.base,
                            ),
                        },
                    }),
                ],
            })
        );
    }),
    lu = 'TableFooter_40e98711',
    ou = 'TableFooter_row_41aedfc2',
    cu = t.memo(function ({ classNames: t }) {
        const { table: s } = $e();
        return e.jsx(Ge.Footer, {
            className: a(lu, null == t ? void 0 : t.base),
            children: J(s.getFooterGroups(), (s, n) =>
                e.jsx(
                    Ge.Row,
                    {
                        className: a(ou, null == t ? void 0 : t.row),
                        children: J(s.headers, (a, s) =>
                            e.jsx(
                                Ge.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: null == t ? void 0 : t.cell,
                                    cell: { ...a, rowIndex: n, index: s, tablePart: Fe.footer },
                                    children: !a.isPlaceholder && C(a.column.columnDef.footer, a.getContext()),
                                },
                                a.id,
                            ),
                        ),
                    },
                    s.id,
                ),
            ),
        });
    }),
    du = 'TableHeader_row_a81d3e65',
    uu = t.memo(function ({ classNames: t }) {
        const { table: s } = $e();
        return e.jsx(Ge.Header, {
            className: null == t ? void 0 : t.base,
            children: J(s.getHeaderGroups(), (s, n) =>
                e.jsx(
                    Ge.Row,
                    {
                        className: a(du, null == t ? void 0 : t.row),
                        children: J(s.headers, (a, s) =>
                            e.jsx(
                                Ge.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: null == t ? void 0 : t.cell,
                                    cell: { ...a, rowIndex: n, index: s, tablePart: Fe.header },
                                    children: !a.isPlaceholder && C(a.column.columnDef.header, a.getContext()),
                                },
                                a.id,
                            ),
                        ),
                    },
                    s.id,
                ),
            ),
        });
    }),
    mu = {
        account: 'account',
        vehicle: 'vehicle',
        targetKills: 'targetKills',
        damageDealt: 'damageDealt',
        damageBlockedByArmor: 'damageBlockedByArmor',
        damageAssisted: 'damageAssisted',
        damageAssistedStun: 'damageAssistedStun',
        spotted: 'spotted',
        criticalDamage: 'criticalDamage',
    },
    pu = '',
    _u = '',
    fu = {
        [mu.targetKills]: 'library.crossed_tank',
        [mu.damageDealt]: 'library.cross_with_gap',
        [mu.damageBlockedByArmor]: 'library.blocked',
        [mu.damageAssisted]: 'library.double_target',
        [mu.damageAssistedStun]: 'library.arrow_with_fading',
        [mu.spotted]: 'library.eyebrow',
        [mu.criticalDamage]: 'library.gear_with_gap',
    };
const vu = t.createContext(null);
function bu() {
    const e = t.useContext(vu);
    if (null === e)
        throw new Error('You can use the personal efficiency hooks only with the PersonalEfficiency widget component');
    return e;
}
function hu({ iconsConfig: a, children: s }) {
    const n = t.useMemo(() => ({ iconsConfig: { ...fu, ...(a || {}) } }), [a]);
    return e.jsx(vu.Provider, { value: n, children: s });
}
const gu = function ({
    data: a,
    className: s,
    children: n,
    columnOrder: i,
    columnVisibility: r,
    config: l,
    iconsConfig: o,
}) {
    const c = Ae(),
        d = t.useMemo(() => ({ columnOrder: i, columnVisibility: r }), [i, r]);
    return e.jsx(hu, {
        iconsConfig: o,
        children: e.jsx(qe, {
            columns: l,
            data: a.rows,
            enableMultiRowSelection: !1,
            getRowId: (e) => e.account.username,
            initialState: d,
            children: e.jsx(Ge, { className: s, children: e.jsx(K, { children: n }) }, c.breakpoint.name),
        }),
    });
};
((gu.Header = uu), (gu.Body = ru), (gu.Footer = cu));
const yu = { behaviour: Ue.contentResponsive, minSize: '0rem', maxSize: '1000rem' },
    xu = {
        [mu.account]: {
            [Ye.extraSmall]: { behaviour: Ue.static, size: '200rem' },
            [Ye.medium]: { behaviour: Ue.static, size: '200rem' },
            [Ye.large]: { behaviour: Ue.static, size: '200rem' },
            [Ye.extraLarge]: { behaviour: Ue.static, size: '229rem' },
        },
        [mu.vehicle]: {
            [Ye.extraSmall]: { behaviour: Ue.static, size: '182rem' },
            [Ye.medium]: { behaviour: Ue.static, size: '186rem' },
            [Ye.large]: { behaviour: Ue.static, size: '216rem' },
            [Ye.extraLarge]: { behaviour: Ue.static, size: '239rem' },
        },
    },
    Nu = {
        accountInfo: 'AccountInfoCell_accountInfo_4ab27ccb',
        accountName: 'AccountInfoCell_accountName_3a2352e5',
        clanAbbreviation: 'AccountInfoCell_clanAbbreviation_99f1cc86',
        gap: 'AccountInfoCell_gap_4a30913b',
        anonymizerIcon: 'AccountInfoCell_anonymizerIcon_f71ac22',
        badge: 'AccountInfoCell_badge_711d01c5',
    };
function ju({ account: t }) {
    return e.jsxs(Je, {
        className: Nu.accountInfo,
        children: [
            e.jsx('div', {
                className: a(Nu.badge, Nu.gap),
                children:
                    t.badge !== pu &&
                    e.jsx(Je.Badge, { size: Je.Badge.sizes.x24x24, badgeId: t.badge, className: Nu.gap }),
            }),
            e.jsx(Je.Name, {
                className: a(Nu.accountName, Nu.gap),
                children: e.jsx(Ze, { text: t.anonymizer ? t.fakeUsername : t.username }),
            }),
            t.clanAbbreviation !== _u &&
                !t.anonymizer &&
                e.jsx(Je.ClanTag, {
                    className: a(Nu.clanAbbreviation, Nu.gap),
                    children: e.jsx(P, {
                        path: 'common.clanTag',
                        params: { abbrev: t.clanAbbreviation },
                        brackets: { start: '{', end: '}' },
                    }),
                }),
            t.igrType !== dl && e.jsx(Je.IgrIcon, { size: Je.IgrIcon.sizes.x34x16, className: Nu.gap }),
            t.suffixBadge !== pu &&
                e.jsx(Je.Stripe, { size: Je.Stripe.sizes.default, badgeId: t.suffixBadge, className: Nu.gap }),
            t.anonymizer &&
                e.jsx(Je.AnonymizerIcon, { size: Je.AnonymizerIcon.sizes.x24x24, className: Nu.anonymizerIcon }),
        ],
    });
}
const wu = 'capturePoints',
    Iu = 'droppedCapturePoints',
    Au = {
        base: 'BaseCapture_4cb6b6d6',
        icon: 'BaseCapture_icon_d32c372c',
        label: 'BaseCapture_label_8bdb9b9c',
        wrapper: 'BaseCapture_wrapper_c1a0082e',
    };
function Cu({ assault: t, defend: s, classNames: n, className: i }) {
    const r = k.resolve('strings'),
        l = k.resolve('views'),
        o = Qe({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { paramType: wu },
        }),
        c = Qe({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { paramType: Iu },
        });
    return e.jsxs('div', {
        className: a(Au.base, i),
        children: [
            e.jsx('div', {
                className: a(Au.label, null == n ? void 0 : n.label),
                children: r.readOrEmpty('battle_results.common.battleEfficiency.baseCapture'),
            }),
            e.jsxs('div', {
                ...o,
                className: Au.wrapper,
                children: [
                    e.jsx('div', { className: a(Au.value, null == n ? void 0 : n.value), children: t }),
                    e.jsx(X, {
                        path: 'post_battle.assault',
                        width: '32rem',
                        height: '32rem',
                        className: a(Au.icon, null == n ? void 0 : n.icon),
                    }),
                ],
            }),
            e.jsxs('div', {
                ...c,
                className: Au.wrapper,
                children: [
                    e.jsx('div', { className: a(Au.value, null == n ? void 0 : n.value), children: s }),
                    e.jsx(X, {
                        path: 'post_battle.defend',
                        width: '32rem',
                        height: '32rem',
                        className: a(Au.icon, null == n ? void 0 : n.icon),
                    }),
                ],
            }),
        ],
    });
}
const Su = {
    cellWithValue: 'HeaderCell_cellWithValue_78949e6d',
    cellWithValue__totalInfo: 'HeaderCell_cellWithValue__totalInfo_789bf7be',
    cellWithValue__zeroIndent: 'HeaderCell_cellWithValue__zeroIndent_334269c9',
    wrapper: 'HeaderCell_wrapper_7849c6a',
    imageWrapper: 'HeaderCell_imageWrapper_a570c717',
    value: 'HeaderCell_value_f7bb7c82',
    cellWithText: 'HeaderCell_cellWithText_710c47ce',
    text: 'HeaderCell_text_35220206',
};
function Bu({ info: t, name: s, className: n }) {
    const { iconsConfig: i } = bu(),
        r = k.resolve('views'),
        l = Qe({
            contentId: r.read((e) =>
                s === mu.criticalDamage
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { paramType: s },
        }),
        o = Z(
            t.table.getRowModel().rows,
            (e, a) => {
                const t = a.getValue(s),
                    n = ea(t) ? t : t.value;
                return e + (s === mu.spotted && n > 0 ? 1 : n);
            },
            0,
        ),
        c = i[s] ?? '';
    return e.jsx('div', {
        className: a(Su.cellWithValue, n),
        children: e.jsxs('div', {
            ...l,
            className: Su.wrapper,
            children: [
                e.jsx('div', { className: Su.value, children: T.formatNumber('integral', o) }),
                e.jsx('div', {
                    className: Su.imageWrapper,
                    children: e.jsx(X, { width: '100%', height: '100%', path: c }),
                }),
            ],
        }),
    });
}
function Ru({ name: a, info: t, className: s }) {
    const n = k.resolve('strings');
    switch (a) {
        case mu.targetKills:
        case mu.damageDealt:
        case mu.damageBlockedByArmor:
        case mu.damageAssisted:
        case mu.damageAssistedStun:
        case mu.spotted:
        case mu.criticalDamage:
            return void 0 !== t ? e.jsx(Bu, { name: a, info: t, className: s }) : null;
        case mu.account:
            return e.jsx('div', {
                className: Su.cellWithText,
                children: e.jsx('div', {
                    className: Su.text,
                    children: n.readOrEmpty('battle_results.common.battleEfficiency.uppercased_title'),
                }),
            });
        default:
            return (console.error(`Unknown column ${a}`), null);
    }
}
const Pu = { base: 'IconCell_99b0caec' };
function ku({ value: t, name: s, userName: n, className: i }) {
    const { iconsConfig: r } = bu(),
        l = k.resolve('views'),
        o = Qe({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { userName: n, paramType: s },
        });
    if (0 === t) return null;
    const c = r[s] ?? '';
    return e.jsx('div', {
        ...o,
        className: a(Pu.base, i),
        children: e.jsx(X, { width: '32rem', height: '32rem', path: c }),
    });
}
const Eu = { base: 'NumberCell_c62bf499' };
function Tu({ value: t, userName: s, name: n, className: i }) {
    const r = k.resolve('views'),
        l = Qe({
            contentId: r.read((e) =>
                n === mu.criticalDamage
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { userName: s, paramType: n },
        });
    return 0 === t ? null : e.jsx('div', { ...l, className: a(Eu.base, i), children: T.formatNumber('integral', t) });
}
const Du = {
        base: 'NumberWithCounterCell_f729c44',
        counter: 'NumberWithCounterCell_counter_8bb0eb59',
        counter__hidden: 'NumberWithCounterCell_counter__hidden_468e7d52',
        counterValue: 'NumberWithCounterCell_counterValue_566cc1fa',
        roundedCount: 'NumberWithCounterCell_roundedCount_c97dad37',
    },
    Vu = 1e3,
    zu = 99,
    Ou = 2;
function Hu({ count: a }) {
    const t = E({ body: a.toString() }),
        s = (n = a) < Vu ? n : Math.floor(n / 1e3);
    var n;
    return e.jsx('div', {
        className: Du.counterValue,
        children:
            s === a
                ? a
                : e.jsx('div', {
                      ...t,
                      className: Du.roundedCount,
                      children: e.jsx(P, {
                          path: 'common.numberAbbrev',
                          params: { value: T.formatNumber('integral', Math.min(s, zu)) },
                      }),
                  }),
    });
}
function Wu({ value: t, count: s, name: n, userName: i, className: r }) {
    const { iconsConfig: l } = bu(),
        o = k.resolve('views'),
        c = Qe({
            contentId: o.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { userName: i, paramType: n },
        });
    if (0 === t && 0 === s) return null;
    const d = l[n] ?? '';
    return e.jsxs('div', {
        ...c,
        className: a(Du.base, r),
        children: [
            t > 0 && T.formatNumber('integral', t),
            e.jsxs('div', {
                className: a(Du.counter, 0 === s && Du.counter__hidden),
                children: [
                    e.jsx(X, { className: Du.icon, width: '32rem', height: '32rem', path: d }),
                    s >= Ou && e.jsx(Hu, { count: s }),
                ],
            }),
        ],
    });
}
const Mu = {
    base: 'VehicleCell_2823d754',
    imageWrapper: 'VehicleCell_imageWrapper_f0d20784',
    typeWrapper: 'VehicleCell_typeWrapper_1232db26',
    level: 'VehicleCell_level_3970ad9d',
    name: 'VehicleCell_name_755dfe36',
    name__unknown: 'VehicleCell_name__unknown_83c23c5e',
};
function Gu({ vehicle: t }) {
    const s = void 0 === t;
    return e.jsxs('div', {
        className: Mu.base,
        children: [
            e.jsx('div', {
                className: Mu.imageWrapper,
                children: e.jsx(aa, { size: aa.size.x120x96, name: s ? 'tank_empty' : t.techName }),
            }),
            !1 === s &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(ta, { value: t.tier, className: Mu.level }),
                        e.jsx('div', {
                            className: Mu.typeWrapper,
                            children: e.jsx(sa, { size: 'x24x24', type: t.type }),
                        }),
                    ],
                }),
            e.jsx('div', {
                className: a(Mu.name, s && Mu.name__unknown),
                children: s
                    ? e.jsx(P, { path: 'ingame_gui.players_panel.unknown_vehicle' })
                    : e.jsx(Ze, { text: t.name }),
            }),
        ],
    });
}
const Fu = 'Index_align_5032d1bf',
    $u = 'Index_align__right_9d371d4f',
    Lu = 'Index_align__left_7938cc',
    Xu = 'Index_offsetCell_c4e68915',
    Ku = 'Index_offsetCell__number_2c760167',
    qu = S();
function Uu() {
    return [
        qu.accessor('killed', {
            id: mu.targetKills,
            header: (t) =>
                e.jsx(Ru, {
                    info: t,
                    name: mu.targetKills,
                    className: a(Su.cellWithValue__totalInfo, Su.cellWithValue__zeroIndent),
                }),
            enableSorting: !1,
            meta: { column: yu, className: a(Fu, $u) },
        }),
        qu.accessor('damageDealt', {
            id: mu.damageDealt,
            header: (a) => e.jsx(Ru, { info: a, name: mu.damageDealt, className: Su.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Fu, $u), column: yu },
        }),
        qu.accessor('damageBlockedByArmor', {
            id: mu.damageBlockedByArmor,
            header: (a) =>
                e.jsx(Ru, { info: a, name: mu.damageBlockedByArmor, className: Su.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Fu, $u), column: yu },
        }),
        qu.accessor('damageAssisted', {
            id: mu.damageAssisted,
            header: (a) => e.jsx(Ru, { info: a, name: mu.damageAssisted, className: Su.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Fu, $u), column: yu },
        }),
        qu.accessor('damageAssistedStun', {
            id: mu.damageAssistedStun,
            header: (a) => e.jsx(Ru, { info: a, name: mu.damageAssistedStun, className: Su.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Fu, $u), column: yu },
        }),
        qu.accessor('spotted', {
            id: mu.spotted,
            header: (a) => e.jsx(Ru, { info: a, name: mu.spotted, className: Su.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Fu, $u), column: yu },
        }),
        qu.accessor('criticalDamage', {
            id: mu.criticalDamage,
            header: (a) => e.jsx(Ru, { info: a, name: mu.criticalDamage, className: Su.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Fu, $u), column: yu },
        }),
    ];
}
const Yu = 'PersonalEfficiency_table_1104dbe8',
    Ju = 'PersonalEfficiency_table__closed_589e70ab',
    Zu = 'PersonalEfficiency_hintKey_f91859a5',
    Qu = 'PersonalEfficiency_messagesPanel_d1b1fa0b',
    em = 'PersonalEfficiency_message_d772bbd7',
    am = 'PersonalEfficiency_expandableOverlayWrapper_a5a56a5d',
    tm = 'PersonalEfficiency_expandableOverlayWrapper__hidden_97a3493d',
    sm = 'PersonalEfficiency_expandableOverlayWrapper__notInteractive_598241cc',
    nm = 'PersonalEfficiency_scrollableArea_c747d607',
    im = 'PersonalEfficiency_scrollableArea__nonInteractive_589e70ab',
    rm = 'PersonalEfficiency_totalEfficiency_eb2592a8',
    lm = 'PersonalEfficiency_totalEfficiency__notInteractive_4b33f28d',
    om = 'PersonalEfficiency_totalEfficiencyTable_9139933',
    cm = 'PersonalEfficiency_tableWrapper_cd2e7488',
    dm = 'PersonalEfficiency_overlayDivider_52284c35',
    um = 'PersonalEfficiency_overlayDivider__closed_6b67c790',
    mm = 'PersonalEfficiency_clarificationWrapper_5f3072b1',
    pm = { row: 'PersonalEfficiency_headerRow_6acaa215' };
function _m() {
    const { opened: s } = Wd(),
        { api: n } = U();
    return (
        t.useLayoutEffect(() => {
            s && n.applyScroll(0, { immediate: !0 });
        }, [s, n]),
        e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: a(nm, !s && im), onWheel: n.handleMouseWheel }),
                e.jsx(gu.Header, { classNames: pm }),
                e.jsx(gu.Body, { children: e.jsx(gu.Footer, {}) }),
            ],
        })
    );
}
const fm = V.cubicBezier(0.33, 0, 0.25, 1),
    vm = 'first',
    bm = 'second',
    hm = 'closedArrowInLoop',
    gm = 'openedArrowInLoop',
    ym = l(function ({ visible: s, totalEfficiencyStylesApi: i }) {
        const { model: r } = oo(),
            l = r.computes.personalEffiency(),
            { closedPosition: o, overlayApi: c, shadowApi: d, arrowStylesApi: u } = Wd(),
            { breakpoint: m } = Ae(),
            [p, _] = t.useState(hm),
            [f, v] = w(() => ({ opacity: 0 })),
            b = t.useMemo(
                () =>
                    (function ({ breakpointName: t, assault: s, defend: n }) {
                        const i = 'small' === t ? Ye.extraSmall : t;
                        return [
                            qu.accessor('account', {
                                id: mu.account,
                                header: () => e.jsx(Ru, { name: mu.account }),
                                footer: () => e.jsx(Cu, { assault: s, defend: n }),
                                enableSorting: !1,
                                cell: (a) => e.jsx(ju, { account: a.getValue() }),
                                meta: { className: a(Fu, Lu), column: xu[mu.account][i] },
                            }),
                            qu.accessor('vehicle', {
                                id: mu.vehicle,
                                header: void 0,
                                enableSorting: !1,
                                cell: (a) => e.jsx(Gu, { vehicle: a.getValue() }),
                                meta: { column: xu[mu.vehicle][i] },
                            }),
                            qu.accessor('killed', {
                                id: mu.targetKills,
                                header: (a) => e.jsx(Ru, { name: mu.targetKills, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(ku, {
                                        name: mu.targetKills,
                                        value: a.getValue(),
                                        userName: a.row.original.account.username,
                                        className: Xu,
                                    }),
                                meta: { column: yu, className: a(Fu, $u) },
                            }),
                            qu.accessor('damageDealt', {
                                id: mu.damageDealt,
                                header: (a) => e.jsx(Ru, { name: mu.damageDealt, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(Wu, {
                                        ...a.getValue(),
                                        name: mu.damageDealt,
                                        userName: a.row.original.account.username,
                                        className: Xu,
                                    }),
                                meta: { className: a(Fu, $u), column: yu },
                            }),
                            qu.accessor('damageBlockedByArmor', {
                                id: mu.damageBlockedByArmor,
                                header: (a) => e.jsx(Ru, { name: mu.damageBlockedByArmor, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(Wu, {
                                        ...a.getValue(),
                                        name: mu.damageBlockedByArmor,
                                        userName: a.row.original.account.username,
                                        className: Xu,
                                    }),
                                meta: { className: a(Fu, $u), column: yu },
                            }),
                            qu.accessor('damageAssisted', {
                                id: mu.damageAssisted,
                                header: (a) => e.jsx(Ru, { name: mu.damageAssisted, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(Tu, {
                                        value: a.getValue(),
                                        name: mu.damageAssisted,
                                        userName: a.row.original.account.username,
                                        className: Ku,
                                    }),
                                meta: { className: a(Fu, $u), column: yu },
                            }),
                            qu.accessor('damageAssistedStun', {
                                id: mu.damageAssistedStun,
                                header: (a) => e.jsx(Ru, { name: mu.damageAssistedStun, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(Wu, {
                                        ...a.getValue(),
                                        name: mu.damageAssistedStun,
                                        userName: a.row.original.account.username,
                                        className: Xu,
                                    }),
                                meta: { className: a(Fu, $u), column: yu },
                            }),
                            qu.accessor('spotted', {
                                id: mu.spotted,
                                header: (a) => e.jsx(Ru, { name: mu.spotted, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(ku, {
                                        name: mu.spotted,
                                        value: a.getValue(),
                                        userName: a.row.original.account.username,
                                        className: Xu,
                                    }),
                                meta: { className: a(Fu, $u), column: yu },
                            }),
                            qu.accessor('criticalDamage', {
                                id: mu.criticalDamage,
                                header: (a) => e.jsx(Ru, { name: mu.criticalDamage, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(Tu, {
                                        value: a.getValue(),
                                        name: mu.criticalDamage,
                                        userName: a.row.original.account.username,
                                        className: Ku,
                                    }),
                                meta: { className: a(Fu, $u), column: yu },
                            }),
                        ];
                    })({ breakpointName: m.name, assault: l.assault, defend: l.defend }),
                [m.name, l.assault, l.defend],
            );
        return (
            t.useEffect(() => {
                if (s && p === hm) return (u.stop(), void _(vm));
                if (!s && p === gm) return (u.stop(), void _(bm));
                switch (p) {
                    case hm:
                        u.start({
                            from: { x: '-50%', y: '0', rotate: 180, opacity: 1 },
                            to: [
                                { x: '-50%', y: '-5rem', rotate: 180, opacity: 0 },
                                { x: '-50%', y: '0', rotate: 180, opacity: 0 },
                                { x: '-50%', y: '0', rotate: 180, opacity: 1 },
                            ],
                            config: { easing: fm, duration: 800 },
                            loop: !0,
                        });
                        break;
                    case vm:
                        (u.start({
                            to: { opacity: 0, x: '-50%', y: s ? '40rem' : '0', rotate: s ? 0 : 180 },
                            immediate: !0,
                        }),
                            i.start({
                                to: { opacity: s ? 0 : 1 },
                                delay: s ? 0 : 150,
                                config: { easing: fm, duration: 200 },
                            }),
                            c.start({
                                to: { y: s ? '0' : o, backgroundColor: s ? 'rgba(22, 30, 40, 0.96)' : 'transparent' },
                                config: { easing: fm, duration: 200 },
                                delay: s ? 0 : 150,
                                onRest: () => _(s ? bm : hm),
                            }),
                            d.start({
                                to: { opacity: s ? 1 : 0 },
                                delay: s ? 0 : 150,
                                config: { easing: fm, duration: 200 },
                            }),
                            v.start({
                                to: { opacity: s ? 1 : 0 },
                                delay: s ? 150 : 0,
                                config: { easing: fm, duration: 100 },
                            }));
                        break;
                    case bm:
                        (u.start({
                            to: { opacity: 0, x: '-50%', y: s ? '40rem' : '0', rotate: s ? 0 : 180 },
                            immediate: !0,
                        }),
                            _(s ? gm : vm));
                        break;
                    case gm: {
                        const e = m.weight > Ce.large.weight ? '53rem' : '40rem';
                        u.start({
                            from: { x: '-50%', y: e, rotate: 0, opacity: 1 },
                            to: [
                                {
                                    x: '-50%',
                                    y: m.weight > Ce.large.weight ? '58rem' : '45rem',
                                    rotate: 0,
                                    opacity: 0,
                                    config: { duration: 1e3 },
                                },
                                { x: '-50%', y: e, rotate: 0, opacity: 0, config: { duration: 400 } },
                                { x: '-50%', y: e, rotate: 0, opacity: 1, config: { duration: 200 } },
                            ],
                            config: { easing: fm, duration: 800 },
                            loop: !0,
                        });
                        break;
                    }
                }
            }, [p, s, o, m.weight, u, c, d, v, i]),
            t.useLayoutEffect(() => {
                !1 === s && p === hm && c.start({ to: { y: o }, immediate: !0 });
            }, [o, s, p, c]),
            e.jsx(n.div, {
                className: cm,
                style: f,
                children: e.jsx(gu, { config: b, data: l, className: a(Yu, !s && Ju), children: e.jsx(_m, {}) }),
            })
        );
    }),
    xm = l(function () {
        const { model: s } = oo(),
            i = s.computes.personalEffiency(),
            r = s.battleInfo.get().finishReasonClarification,
            l = k.resolve('strings'),
            o = H(),
            { hintKeyRef: c, overlayDividerRef: d, personalEfficiencyRef: u, completedSteps: m } = vt(),
            p = !1 === m.has(mt.fifth),
            [_] = w(() => ({ from: { opacity: 0 }, ref: c })),
            [f] = w(() => ({ from: { maskSize: '0% 100%' }, ref: d })),
            [v] = w(() => ({ from: { opacity: 0 }, ref: u })),
            b = re({ value: 159 }, { medium: { value: 187 }, large: { value: 199 }, extraLarge: { value: 267 } }),
            { active: h } = L(),
            g = t.useRef(null),
            [y, x] = t.useState(0),
            [N, j] = t.useState(!1),
            [I, A] = w(() => ({ opacity: N ? 0 : 1 }));
        t.useEffect(() => {
            h !== Ia.overview && j(!1);
        }, [h]);
        const C = t.useCallback(() => {
            var e;
            const a = (null == (e = g.current) ? void 0 : e.getBoundingClientRect().height) || 0;
            a > 0 && x(Math.round(a));
        }, [x]);
        le(g, C);
        const S = t.useMemo(() => (y > 0 ? na(y) - b.value + 'rem' : '150%'), [y, b]),
            B = t.useMemo(Uu, []);
        if (0 === i.assault && 0 === i.defend && 0 === i.rows.length)
            return e.jsxs(n.div, {
                style: v,
                className: Qu,
                children: [
                    '' !== r &&
                        e.jsx('div', {
                            className: em,
                            children: l.readOrEmpty(`battle_results.finish.clarification.${r}`),
                        }),
                    e.jsx('div', {
                        className: em,
                        children: l.readOrEmpty('battle_results.common.battleEfficiency.noEfficiency'),
                    }),
                ],
            });
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(Md, {
                    closedPosition: S,
                    visible: N,
                    changeVisible: j,
                    children: e.jsx('div', {
                        className: a(am, 0 === y && tm, p && sm),
                        children: e.jsxs(eu, {
                            ref: g,
                            children: [
                                e.jsx(n.div, {
                                    className: a(dm, !1 === N && um),
                                    style: f,
                                    children: e.jsx(eu.OverlayDivider, {}),
                                }),
                                e.jsx(ym, { visible: N, totalEfficiencyStylesApi: A }),
                                e.jsx(n.div, {
                                    className: Zu,
                                    style: _,
                                    children: e.jsx(eu.HintKey, { disabled: h !== Ia.overview }),
                                }),
                            ],
                        }),
                    }),
                }),
                e.jsx(n.div, {
                    style: I,
                    className: a(rm, (N || p) && lm),
                    onClick: function (e) {
                        (e.stopPropagation(),
                            j(!0),
                            o.play('click', { original: e, target: 'overview:total-personal-efficiency' }),
                            o.play('openOverlay', { original: e, target: 'overview:total-personal-efficiency' }));
                    },
                    children: e.jsxs(n.div, {
                        style: v,
                        children: [
                            '' !== r &&
                                e.jsx('div', {
                                    className: mm,
                                    onClick: (e) => e.stopPropagation(),
                                    children: e.jsx('div', {
                                        className: em,
                                        children: l.readOrEmpty(`battle_results.finish.clarification.${r}`),
                                    }),
                                }),
                            e.jsx(gu, { config: B, data: i, className: om, children: e.jsx(gu.Header, {}) }),
                        ],
                    }),
                }),
            ],
        });
    }),
    Nm = F('Overview', wd),
    jm = l(function ({ className: s }) {
        var i;
        const r = k.resolve('strings'),
            l = H(),
            { model: o, controls: c } = oo(),
            d = o.additionalBonus.get(),
            u = o.battleInfo.get(),
            m = o.personalEfficiency.achievements.get(),
            {
                step: p,
                battleStatusRef: _,
                dividerRef: f,
                earnedCurrenciesRef: v,
                bonusRef: b,
                setAllMedalsAnimated: h,
            } = vt(),
            [g] = w(() => ({ from: { opacity: 0, y: '-10rem' }, ref: _ })),
            [y] = w(() => ({ from: { maskSize: '0% 100%' }, ref: f })),
            [x] = w(() => ({ from: { opacity: 0, y: '-10rem' }, ref: v })),
            [N] = w(() => ({ from: { opacity: 0, y: '10rem' }, ref: b })),
            { api: j, setCompletedAnimationIndexes: I } = jo(),
            A = o.computes.premiumAndStandartEarnings(),
            C = null == (i = o.battleInfo.get()) ? void 0 : i.status,
            S = t.useMemo(() => (void 0 !== u && Fl.includes(null == u ? void 0 : u.modeName) ? Gl : zl), [u]);
        return (
            t.useEffect(() => {
                0 === m.length && h(!0);
            }, [m.length, h]),
            t.useEffect(() => {
                if (p === mt.immediate)
                    return (
                        j.start(() => ({ x: 0, y: 0, scale: 1, opacity: 1, immediate: !0 })),
                        h(!0),
                        void I(new Set(ke(m.length, (e) => e)))
                    );
                if (p === mt.first) {
                    const e = 500 * Math.log(m.length),
                        a = 150 * Math.log(m.length);
                    (j.start((t) => {
                        const s = e - 500 * Math.log(m.length - t),
                            n = a - 150 * Math.log(m.length - t);
                        return {
                            x: 0,
                            y: 0,
                            scale: 1,
                            delay: 200 * t + s,
                            config: { duration: 400 + n, easing: V.cubicBezier(1, 0, 0.95, 1) },
                            onRest() {
                                (l.play('achievementAppeared', { target: 'overview' }),
                                    t === m.length - 1 && h(!0),
                                    I((e) => O(e, t)));
                            },
                        };
                    }),
                        j.start((t) => ({
                            opacity: 1,
                            delay: 150 + 200 * t + (e - 500 * Math.log(m.length - t)),
                            config: {
                                duration: 250 + (a - 150 * Math.log(m.length - t)),
                                easing: V.cubicBezier(0.33, 0, 0.25, 1),
                            },
                        })));
                }
            }, [p, j, I, l, m.length, h]),
            e.jsxs(Nm, {
                className: s,
                children: [
                    e.jsx('div', { className: jd }),
                    o.playerSatisfaction.get().isPlayerSatisfactionInterfaceEnabled &&
                        e.jsx(Xo, {
                            state: o.playerSatisfaction.get().state,
                            onSatisfactionRatingSelected: c.onSatisfactionRatingSelected,
                        }),
                    e.jsx(Od, {}),
                    e.jsxs('div', {
                        className: a(Id, 0 === m.length && Ad),
                        children: [
                            e.jsx('div', {
                                className: Cd,
                                children: e.jsx(n.div, {
                                    style: g,
                                    className: Sd,
                                    children: e.jsx('div', {
                                        className: Bd,
                                        'data-test-id': 'winStatus',
                                        children: T.toUpperCase(r.readOrEmpty(`battle_results.status.${C}`)),
                                    }),
                                }),
                            }),
                            e.jsx(Eo, { className: Rd }),
                            e.jsx(n.div, { style: x, className: Td, children: e.jsx(xd, {}) }),
                            e.jsx(n.div, {
                                style: y,
                                className: Pd,
                                children: e.jsx(gt, { classNames: { base: kd, image: Ed } }),
                            }),
                            e.jsx(Uo, {
                                ...d,
                                premiumAndStandartEarnings: A,
                                applyBonus: c.applyBonus,
                                handleAdvertisement: (e) => c.useAdvertisement(e),
                                supportedAdvertisements: S,
                                showBonusDetails: c.showBonusDetails,
                                children: e.jsx(n.div, { style: N, children: e.jsx(id, { className: Dd }) }),
                            }),
                        ],
                    }),
                    e.jsx(xm, {}),
                ],
            })
        );
    }),
    wm = l(function (a) {
        const { model: t } = oo(),
            s = t.personalEfficiency.achievements.get(),
            n = t.computes.personalInfo().vehicle.nation;
        return e.jsx(Io, { achievements: s, vehicleNation: n, children: e.jsx(jm, { ...a }) });
    }),
    Im = { divider: 'Divider_80a19f4b' },
    Am = t.forwardRef(function ({ classNames: t, className: s, ...n }, i) {
        return e.jsx('div', {
            ...n,
            ref: i,
            className: a(Im.divider, null == t ? void 0 : t.base, s),
            children: e.jsx(X, {
                className: a(Im.dividerImage, null == t ? void 0 : t.image),
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    });
const Cm = {
    header: 'Header_ecb415bd',
    vehicle: 'Header_vehicle_ec875116',
    vehicleImageWrapper: 'Header_vehicleImageWrapper_f07116f5',
    vehicleLevel: 'Header_vehicleLevel_3407ac2d',
    vehicleType: 'Header_vehicleType_2a3aedee',
    vehicleName: 'Header_vehicleName_89925049',
    vehicleGap: 'Header_vehicleGap_b2df83a7',
    info: 'Header_info_63ade36e',
    accountInfo: 'Header_accountInfo_e1497c3e',
    accountInfoGap: 'Header_accountInfoGap_50a55407',
    accountName: 'Header_accountName_6a8dc850',
    clanAbbreviation: 'Header_clanAbbreviation_4ac4e596',
    killerClanAbbreviation: 'Header_killerClanAbbreviation_ecb415bd',
    anonymizerIcon: 'Header_anonymizerIcon_b6806a1a',
    vehicleState: 'Header_vehicleState_73fcbd07',
    achievements: 'Header_achievements_5efa2203',
    achievement: 'Header_achievement_49110775',
    achievement__extinct: 'Header_achievement__extinct_19f6e11',
    achievementIcon: 'Header_achievementIcon_e6989d30',
};
function Sm(e, a) {
    return void 0 === a ? 'default' : a === e ? 'hover' : 'extinct';
}
const Bm = t.forwardRef(function (
    { achievement: s, achievementsLength: n, index: i, hoverIndex: r, setHoverIndex: l, ...o },
    c,
) {
    const d = H(),
        u = ia(
            s.tooltipId,
            t.useMemo(() => JSON.parse(s.tooltipArgs), [s.tooltipArgs]),
        ),
        m = re(
            { width: '48rem', height: '48rem', path: `achievement.c_48x48.${s.iconName}` },
            { medium: { width: '67rem', height: '71rem', path: `achievement.${s.iconName}` } },
        );
    return e.jsx('div', {
        ...o,
        ...u,
        className: a(Cm.achievement, Cm[`achievement__${Sm(i, r)}`]),
        style: { zIndex: i === r ? n + 1 : n - i },
        onMouseEnter: function (e) {
            (u.onMouseEnter(e),
                l(i),
                d.play('mouse-enter', { original: e, target: 'team-efficiency:efficiency-details:achievement' }));
        },
        onMouseLeave: () => {
            (u.onMouseLeave(), l(void 0));
        },
        children: e.jsx(X, { ref: c, className: Cm.achievementIcon, ...m }, s.iconName),
    });
});
function Rm({ vehicleStatusKey: e, anonymized: a, clanAbbrev: t, personal: s, abbondonBattle: n }) {
    if (s && n) return 'battle_results.common.vehicleState.prematureLeave';
    return !1 === to.includes(e)
        ? `battle_results.common.vehicleState.${e}`
        : a || '' === t
          ? `battle_results.common.vehicleState.${e}_with_killername`
          : `battle_results.common.vehicleState.${e}_with_killername_and_clan`;
}
const Pm = l(function ({
        team: s,
        account: n,
        vehicle: i,
        achievements: r,
        squadIndex: l,
        personal: o,
        userStatus: c,
        killer: d,
    }) {
        const u = k.resolve('strings'),
            [m, p] = t.useState(void 0),
            { model: _ } = oo(),
            f = _.computes.personalInfo(),
            v = re({ width: '230rem', height: '184rem' }, { medium: { width: '290rem', height: '232rem' } }),
            b = ro({ personal: o, platoonType: io(s, f.squadIndex, l), anonymizer: n.anonymizer }),
            h = E({
                header: u
                    .readOrEmpty('tooltips.anonymizer.teamStats.header')
                    .replace('%(name)s', b ? n.username : n.fakeUsername),
                body: u.readOrEmpty('tooltips.anonymizer.teamStats.body'),
            }),
            g = -1 === (y = c.deathReason) ? 'alive' : `dead${y}`;
        var y;
        const x = b ? d.fakeUsername : d.username,
            N = void 0 === i;
        return e.jsxs('div', {
            className: Cm.header,
            children: [
                e.jsx('div', {
                    className: Cm.vehicleImageWrapper,
                    children: e.jsx(aa, { name: N ? 'tank_empty' : i.techName, width: v.width, height: v.height }),
                }),
                e.jsxs('div', {
                    className: Cm.info,
                    children: [
                        e.jsxs(Je, {
                            className: Cm.accountInfo,
                            children: [
                                n.badge !== Ml &&
                                    e.jsx(Je.Badge, {
                                        className: Cm.accountInfoGap,
                                        size: Je.Badge.sizes.x48x48,
                                        badgeId: n.badge,
                                    }),
                                e.jsx(Je.Name, {
                                    className: a(Cm.accountName, Cm.accountInfoGap),
                                    children: e.jsx(Ze, { text: b ? n.fakeUsername : n.username }),
                                }),
                                '' !== n.clanAbbreviation &&
                                    !b &&
                                    e.jsx(Je.ClanTag, {
                                        className: Cm.clanAbbreviation,
                                        children: e.jsx(P, {
                                            path: 'common.clanTag',
                                            params: { abbrev: n.clanAbbreviation },
                                            brackets: { start: '{', end: '}' },
                                        }),
                                    }),
                                n.igrType !== dl &&
                                    e.jsx(Je.IgrIcon, { size: Je.IgrIcon.sizes.x64x28, className: Cm.accountInfoGap }),
                                n.suffixBadge !== Ml &&
                                    e.jsx(Je.Stripe, {
                                        size: Je.Stripe.sizes.regular,
                                        badgeId: n.suffixBadge,
                                        className: Cm.accountInfoGap,
                                    }),
                                n.anonymizer &&
                                    e.jsx(Je.AnonymizerIcon, {
                                        ...h,
                                        size: Je.AnonymizerIcon.sizes.x32x32,
                                        className: Cm.anonymizerIcon,
                                    }),
                            ],
                        }),
                        e.jsx('div', {
                            className: Cm.vehicle,
                            children: N
                                ? e.jsx(P, { path: 'ingame_gui.players_panel.unknown_vehicle' })
                                : e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx(ta, { value: i.tier, className: a(Cm.vehicleLevel, Cm.vehicleGap) }),
                                          e.jsx(sa, {
                                              type: i.type,
                                              size: 'x24x24',
                                              className: a(Cm.vehicleType, Cm.vehicleGap),
                                          }),
                                          e.jsx('div', { className: Cm.vehicleName, children: i.longName }),
                                      ],
                                  }),
                        }),
                        e.jsx('div', {
                            className: Cm.vehicleState,
                            children: e.jsx(P, {
                                path: Rm({
                                    vehicleStatusKey: g,
                                    anonymized: b,
                                    personal: o,
                                    clanAbbrev: d.clanAbbreviation,
                                    abbondonBattle: c.abandonBattle,
                                }),
                                params: { killername: x, clanTag: d.clanAbbreviation },
                            }),
                        }),
                        0 !== r.length &&
                            e.jsx('div', {
                                className: Cm.achievements,
                                children: J(Qr(r), (a, t) =>
                                    e.jsx(
                                        Bm,
                                        {
                                            index: t,
                                            hoverIndex: m,
                                            setHoverIndex: p,
                                            achievement: a,
                                            achievementsLength: r.length,
                                        },
                                        a.name,
                                    ),
                                ),
                            }),
                    ],
                }),
            ],
        });
    }),
    km = F('StatisticsLabel'),
    Em = k.resolve('strings'),
    Tm = t.forwardRef(function ({ labelKey: a, ...t }, s) {
        return e.jsx(km, { ...t, ref: s, children: Em.readOrEmpty(a) });
    }),
    Dm = 'Value_798a6cdd',
    Vm = 'Value_separator_798a6cdd',
    zm = k.resolve('strings');
function Om(e, a) {
    switch (e) {
        case $l.Integer:
            return T.formatNumber('integral', a);
        case $l.Float:
            return T.formatReal('fractional', a);
        default:
            return a;
    }
}
const Hm = F('StatisticsValue', Dm),
    Wm = t.forwardRef(function (
        {
            labelKey: s,
            value: n,
            type: i,
            valueSeparatorKey: r = 'common.common.slash',
            className: l,
            classNames: o,
            ...c
        },
        d,
    ) {
        return e.jsx(Hm, {
            ...c,
            ref: d,
            className: a(null == o ? void 0 : o.base, l),
            children: J(n, (l, c) =>
                e.jsxs(
                    t.Fragment,
                    {
                        children: [
                            e.jsx('div', {
                                className: a(
                                    0 === l && (null == o ? void 0 : o.zeroValue),
                                    l < 0 && (null == o ? void 0 : o.negativeValue),
                                ),
                                children: Om(i, l),
                            }),
                            c < n.length - 1 &&
                                e.jsxs('div', {
                                    className: a(Vm, null == o ? void 0 : o.separator),
                                    children: [' ', zm.readOrEmpty(r), ' '],
                                }),
                        ],
                    },
                    `${s}_value_${c}`,
                ),
            ),
        });
    }),
    Mm = 'Index_scrollAreaContent_52a570a',
    Gm = 'Index_scrollAreaContent__initialized_b2629fde',
    Fm = 'Index_item_6b7cdfb0',
    $m = 'Index_separator_add04e19',
    Lm = F('Statistics', 'Index_statistics_638478ff'),
    Xm = F('StatisticsItem', Fm),
    Km = F('StatisticsItemSeparator', $m);
function qm({ children: t, scrollbarProps: s, scrollAreaProps: n }) {
    var i;
    const r = U(),
        l = Ct(r.api);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Y, {
                ...n,
                classNames: {
                    ...(null == n ? void 0 : n.classNames),
                    content: a(Mm, l && Gm, null == (i = null == n ? void 0 : n.classNames) ? void 0 : i.content),
                },
                children: t,
            }),
            e.jsx(q, { ...s }),
        ],
    });
}
const Um = t.forwardRef(function ({ scrollbarProps: a, scrollAreaProps: t, ...s }, n) {
    return e.jsx(Lm, {
        ...s,
        ref: n,
        children: e.jsx(K, { children: e.jsx(qm, { ...s, scrollbarProps: a, scrollAreaProps: t }) }),
    });
});
((Um.Item = Xm), (Um.Value = Wm), (Um.Label = Tm), (Um.Separator = Km));
const Ym = {
    scrollbar: 'PlayerStatistics_scrollbar_987bbca2',
    scrollAreaContent: 'PlayerStatistics_scrollAreaContent_8636fa99',
    listItemSeparator: 'PlayerStatistics_listItemSeparator_32247273',
    listItem: 'PlayerStatistics_listItem_27e9eeba',
    label: 'PlayerStatistics_label_3fb1f69f',
    value: 'PlayerStatistics_value_6831d5c1',
    zeroValue: 'PlayerStatistics_zeroValue_d98b2431',
    valueSeparator: 'PlayerStatistics_valueSeparator_dcf01904',
    listSubItem: 'PlayerStatistics_listSubItem_db8ef127',
    separator: 'PlayerStatistics_separator_4e8ac571',
    separatorSquare: 'PlayerStatistics_separatorSquare_5e440c20',
};
function Jm({ squareSize: a = 1, spacing: s = 2, backgroundColor: n = '#d9d9d9' }) {
    const i = t.useRef(null),
        [r, l] = t.useState(0),
        o = a + s,
        c = t.useCallback(() => {
            const e = i.current;
            if (null !== e) {
                const a = e.getBoundingClientRect().width,
                    t = na(a);
                l(Math.floor(t / o));
            }
        }, [o]);
    return (
        ra(c, [i.current, o, c]),
        t.useEffect(() => la(c), [c]),
        e.jsx('div', {
            ref: i,
            className: Ym.separator,
            children: Array.from({ length: r }).map((t, s) =>
                e.jsx(
                    'div',
                    {
                        className: Ym.separatorSquare,
                        style: { backgroundColor: n, width: `${a}rem`, height: `${a}rem`, left: s * o + 'rem' },
                    },
                    s,
                ),
            ),
        })
    );
}
function Zm({ list: s }) {
    return e.jsx(Um, {
        scrollbarProps: { classNames: { base: Ym.scrollbar } },
        scrollAreaProps: { classNames: { content: Ym.scrollAreaContent } },
        children: J(s, (s) =>
            e.jsxs(
                t.Fragment,
                {
                    children: [
                        e.jsxs(Um.Item, {
                            className: Ym.listItem,
                            children: [
                                e.jsx(Um.Label, {
                                    className: Ym.label,
                                    labelKey: `battle_results.team.stats.labels_${s.labelKey}`,
                                }),
                                e.jsx(Um.Separator, { className: Ym.listItemSeparator, children: e.jsx(Jm, {}) }),
                                e.jsx(Um.Value, {
                                    classNames: {
                                        base: Ym.value,
                                        zeroValue: Ym.zeroValue,
                                        separator: Ym.valueSeparator,
                                    },
                                    labelKey: s.labelKey,
                                    value: s.value,
                                    type: s.paramValueType,
                                }),
                            ],
                        }),
                        void 0 !== s.details &&
                            J(s.details, (t) =>
                                e.jsxs(
                                    Um.Item,
                                    {
                                        className: a(Ym.listItem, Ym.listSubItem),
                                        children: [
                                            e.jsx(Um.Label, {
                                                className: Ym.label,
                                                labelKey: `battle_results.team.stats.labels_${t.labelKey}`,
                                            }),
                                            e.jsx(Um.Separator, {
                                                className: Ym.listItemSeparator,
                                                children: e.jsx(Jm, {}),
                                            }),
                                            e.jsx(Um.Value, {
                                                classNames: {
                                                    base: Ym.value,
                                                    zeroValue: Ym.zeroValue,
                                                    separator: Ym.valueSeparator,
                                                },
                                                labelKey: t.labelKey,
                                                value: t.value,
                                                type: t.paramValueType,
                                            }),
                                        ],
                                    },
                                    t.labelKey,
                                ),
                            ),
                    ],
                },
                s.labelKey,
            ),
        ),
    });
}
const Qm = 'EfficiencyDetails_efficiencyDetails__allies_20b1febc',
    ep = 'EfficiencyDetails_efficiencyDetails__enemies_23a29af',
    ap = 'EfficiencyDetails_divider_85b11efd',
    tp = 'EfficiencyDetails_dividerImage_5b9d06d2',
    sp = 'EfficiencyDetails_closeIcon_8d81da90',
    np = 'EfficiencyDetails_statistics_30a81815',
    ip = F('EfficiencyDetails', 'EfficiencyDetails_efficiencyDetails_db8069eb', {
        variants: { team: { [ao.allies]: Qm, [ao.enemies]: ep } },
    }),
    rp = l(function ({ team: a, className: s }) {
        const { model: n, controls: i } = oo(),
            r = n.computes.efficiencyDetails(),
            l = H(),
            o = t.useRef(null);
        return (
            t.useEffect(() => {
                const e = Ve.down(([, e]) => {
                        'outside' === e && i.teamEfficiency.selectRow(void 0);
                    }),
                    a = oa(window, 'click', (e) => {
                        o.current && !o.current.contains(e.target) && i.teamEfficiency.selectRow(void 0);
                    });
                return () => {
                    (a(), e());
                };
            }, [i.teamEfficiency]),
            void 0 === r
                ? null
                : e.jsxs(ip, {
                      team: a,
                      className: s,
                      ref: o,
                      onClick: (e) => {
                          e.stopPropagation();
                      },
                      children: [
                          e.jsx(Pm, {
                              team: a,
                              account: r.account,
                              squadIndex: r.squadIndex,
                              achievements: r.achievements,
                              personal: r.personal,
                              userStatus: r.userStatus,
                              vehicle: r.vehicle,
                              killer: r.killer,
                          }),
                          e.jsx('div', { className: np, children: e.jsx(Zm, { list: r.detailedStatistics }) }),
                          e.jsx(Am, { classNames: { base: ap, image: tp } }),
                          e.jsx(X, {
                              className: sp,
                              width: '24rem',
                              height: '24rem',
                              path: 'library.close',
                              onMouseEnter: () => {
                                  l.play('mouse-enter', { target: 'team-efficiency:efficiency-details:close' });
                              },
                              onClick: (e) => {
                                  (i.teamEfficiency.selectRow(void 0),
                                      l.play('close', {
                                          original: e,
                                          target: 'team-efficiency:efficiency-details:close',
                                      }));
                              },
                          }),
                      ],
                  })
        );
    }),
    lp = 'squadIndex',
    op = 'account',
    cp = 'vehicle',
    dp = 'achievements',
    up = 'damageDealt',
    mp = 'kills',
    pp = 'earnedXp',
    _p = 0,
    fp = 0,
    vp = '',
    bp = 'AccountInfoCell_accountInfo_dec8771',
    hp = 'AccountInfoCell_accountName_9a181e4d',
    gp = 'AccountInfoCell_clanAbbreviation_99f1cc86',
    yp = 'AccountInfoCell_badge_b101914f',
    xp = 'AccountInfoCell_anonymizerIcon_a1d51ca4',
    Np = 'AccountInfoCell_igrIcon_158694e7',
    jp = 'AccountInfoCell_stripe_fefba7b2',
    wp = l(function ({ account: t, team: s, platoon: n, className: i, classNames: r, ...l }) {
        const { model: o } = oo(),
            c = o.computes.personalInfo(),
            d = ro({
                personal: c.account.username === t.username,
                platoonType: io(s, c.squadIndex, n),
                anonymizer: t.anonymizer,
            });
        return e.jsxs(Je, {
            ...l,
            className: a(bp, i),
            children: [
                t.badge !== Ml &&
                    e.jsx(Je.Badge, {
                        size: Je.Badge.sizes.x24x24,
                        badgeId: t.badge,
                        className: a(yp, null == r ? void 0 : r.badge),
                    }),
                e.jsx(Je.Name, {
                    className: a(hp, null == r ? void 0 : r.username),
                    children: e.jsx(Ze, { text: d ? t.fakeUsername : t.username }),
                }),
                '' !== t.clanAbbreviation &&
                    !d &&
                    e.jsx(Je.ClanTag, {
                        className: a(gp, null == r ? void 0 : r.clanAbbreviation),
                        children: e.jsx(P, {
                            path: 'common.clanTag',
                            params: { abbrev: t.clanAbbreviation },
                            brackets: { start: '{', end: '}' },
                        }),
                    }),
                t.igrType !== dl &&
                    e.jsx(Je.IgrIcon, {
                        size: Je.IgrIcon.sizes.x34x16,
                        className: a(Np, null == r ? void 0 : r.igrIcon),
                    }),
                t.suffixBadge !== Ml &&
                    e.jsx(Je.Stripe, {
                        size: Je.Stripe.sizes.default,
                        badgeId: t.suffixBadge,
                        className: jp,
                        classNames: null == r ? void 0 : r.suffixBadge,
                    }),
                t.anonymizer &&
                    e.jsx(Je.AnonymizerIcon, {
                        size: Je.AnonymizerIcon.sizes.x24x24,
                        className: a(xp, null == r ? void 0 : r.anonymizerIcon),
                    }),
            ],
        });
    }),
    Ip = {
        achievementCell: 'AchievementsCell_achievementCell_e9bf973c',
        achievementsAmount: 'AchievementsCell_achievementsAmount_349c209a',
    };
function Ap({ achievements: a }) {
    const t = k.resolve('strings'),
        s = E({ body: J(Qr(a), (e) => t.readOrEmpty(`achievements.${e.name}`)).join('\n') }),
        n = a.length;
    return 0 === n
        ? null
        : e.jsxs('div', {
              ...s,
              className: Ip.achievementCell,
              children: [
                  e.jsx(X, { path: 'library.medal', width: '32rem', height: '32rem' }),
                  e.jsx('div', { className: Ip.achievementsAmount, children: T.formatNumber('integral', n) }),
              ],
          });
}
const Cp = { behaviour: Ue.static, size: '32rem' },
    Sp = { behaviour: Ue.static, size: '194rem' },
    Bp = { behaviour: Ue.static, size: '272rem' },
    Rp = { behaviour: Ue.static, size: '320rem' },
    Pp = { behaviour: Ue.static, size: '180rem' },
    kp = { behaviour: Ue.static, size: '236rem' },
    Ep = { behaviour: Ue.static, size: '292rem' },
    Tp = { behaviour: Ue.static, size: '56rem' },
    Dp = { behaviour: Ue.static, size: '60rem' },
    Vp = { behaviour: Ue.static, size: '80rem' },
    zp = { behaviour: Ue.static, size: '40rem' },
    Op = { behaviour: Ue.static, size: '60rem' },
    Hp = { behaviour: Ue.static, size: '60rem' },
    Wp = { behaviour: Ue.static, size: '56rem' },
    Mp = { behaviour: Ue.static, size: '60rem' },
    Gp = { behaviour: Ue.static, size: '80rem' },
    Fp = { behaviour: Ue.static, size: '40rem' },
    $p = {
        [lp]: { [Ye.extraSmall]: Cp, [Ye.medium]: Cp, [Ye.large]: Cp, [Ye.extraLarge]: Cp },
        [op]: { [Ye.extraSmall]: Sp, [Ye.medium]: Bp, [Ye.large]: Bp, [Ye.extraLarge]: Rp },
        [cp]: { [Ye.extraSmall]: Pp, [Ye.medium]: kp, [Ye.large]: kp, [Ye.extraLarge]: Ep },
        [up]: { [Ye.extraSmall]: Tp, [Ye.medium]: Dp, [Ye.large]: Dp, [Ye.extraLarge]: Vp },
        [mp]: { [Ye.extraSmall]: zp, [Ye.medium]: Op, [Ye.large]: Op, [Ye.extraLarge]: Hp },
        [pp]: { [Ye.extraSmall]: Wp, [Ye.medium]: Mp, [Ye.large]: Mp, [Ye.extraLarge]: Gp },
        [dp]: { [Ye.extraSmall]: Fp, [Ye.medium]: Fp, [Ye.large]: Fp, [Ye.extraLarge]: Fp },
    },
    Lp = {
        headerCell__asc: 'HeaderCell_headerCell__asc_204e6a44',
        headerCell__desc: 'HeaderCell_headerCell__desc_dc5a7202',
        headerCell: 'HeaderCell_headerCell_5b34d1b1',
        headerCell__icon: 'HeaderCell_headerCell__icon_cfa14ddf',
        headerCell__text: 'HeaderCell_headerCell__text_b476890c',
    },
    Xp = {
        [lp]: 'library.shield',
        [cp]: 'library.panzer',
        [up]: 'library.cross_with_gap',
        [mp]: 'library.crossed_tank',
        [pp]: 'library.star',
        [dp]: 'library.medal',
    },
    Kp = {
        [lp]: 'squadHeader',
        [op]: 'playerHeader',
        [cp]: 'tankHeader',
        [up]: 'damageHeader',
        [mp]: 'fragHeader',
        [pp]: 'xpHeader',
        [dp]: 'medalHeader',
    },
    qp = t.forwardRef(function ({ name: t, team: s, column: n, className: i, ...r }, l) {
        const o = n.getIsSorted(),
            c = k.resolve('strings'),
            d = E({
                header: c.readOrEmpty(`battle_results.team.${Kp[t]}.header`),
                body: c.readOrEmpty(`battle_results.team.${Kp[t]}.body`),
            }),
            u = t === op;
        return e.jsx('div', {
            ...r,
            ...d,
            ref: l,
            className: a(Lp.headerCell, u ? Lp.headerCell__text : Lp.headerCell__icon, o && Lp[`headerCell__${o}`], i),
            children: u
                ? c.readOrEmpty(`battle_results.team.stats.${s}`)
                : e.jsx(X, { width: '32rem', height: '32rem', path: Xp[t] }),
        });
    }),
    Up = { numberValueCell: 'NumberValueCell_numberValueCell_8840a07' };
function Yp({ value: t, className: s, showZero: n = !0 }) {
    return !1 === n && 0 === t
        ? null
        : e.jsx('div', { className: a(Up.numberValueCell, s), children: T.formatNumber('integral', t) });
}
const Jp = {
        platoon: 'PlatoonCell_platoon_5fe0374b',
        platoonText: 'PlatoonCell_platoonText_b6a98287',
        platoonText__personal: 'PlatoonCell_platoonText__personal_d021db4c',
        platoonText__alien: 'PlatoonCell_platoonText__alien_9767e814',
    },
    Zp = { [so.alien]: 'library.platoon_indicator_gray', [so.personal]: 'library.platoon_indicator_orange' },
    Qp = l(function ({ platoon: t, team: s }) {
        const { model: n } = oo(),
            i = io(s, n.computes.personalInfo().squadIndex, t);
        if (null === i) return null;
        const r = Zp[i];
        return e.jsxs('div', {
            className: Jp.platoon,
            children: [
                e.jsx(X, { path: r, width: '32rem', height: '32rem' }),
                e.jsx('div', { className: a(Jp.platoonText, Jp[`platoonText__${i}`]), children: t }),
            ],
        });
    }),
    e_ = {
        vehicle: 'VehicleCell_vehicle_386f696d',
        vehicleImageWrapper: 'VehicleCell_vehicleImageWrapper_aa1c27bd',
        vehicleTypeWrapper: 'VehicleCell_vehicleTypeWrapper_3f1f3f6d',
        vehicleLevel: 'VehicleCell_vehicleLevel_1a4134b1',
        vehicleName: 'VehicleCell_vehicleName_eaeb9715',
        vehicleName__unknown: 'VehicleCell_vehicleName__unknown_726ac1d0',
    };
function a_({ vehicle: t, classNames: s, className: n }) {
    const i = void 0 === t;
    return e.jsxs('div', {
        className: a(e_.vehicle, n),
        children: [
            e.jsx('div', {
                className: a(e_.vehicleImageWrapper, null == s ? void 0 : s.imageWrapper),
                children: e.jsx(aa, {
                    size: aa.size.x120x96,
                    name: i ? 'tank_empty' : t.techName,
                    className: null == s ? void 0 : s.image,
                }),
            }),
            !1 === i &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(ta, { value: t.tier, className: a(e_.vehicleLevel, null == s ? void 0 : s.level) }),
                        e.jsx('div', {
                            className: a(e_.vehicleTypeWrapper, null == s ? void 0 : s.typeWrapper),
                            children: e.jsx(sa, {
                                size: 'x24x24',
                                type: t.type,
                                className: null == s ? void 0 : s.type,
                            }),
                        }),
                    ],
                }),
            e.jsx('div', {
                className: a(e_.vehicleName, i && e_.vehicleName__unknown, null == s ? void 0 : s.name),
                children: i
                    ? e.jsx(P, { path: 'ingame_gui.players_panel.unknown_vehicle' })
                    : e.jsx(Ze, { text: t.name }),
            }),
        ],
    });
}
const t_ = {
        efficiencyTable__allies: 'EfficiencyTable_efficiencyTable__allies_b2f99733',
        efficiencyTable__enemies: 'EfficiencyTable_efficiencyTable__enemies_1ba35ae7',
        header: 'EfficiencyTable_header_da354842',
        rowsWrapper: 'EfficiencyTable_rowsWrapper_cae55fb5',
        efficiencyTable: 'EfficiencyTable_efficiencyTable_e622a43e',
        alignLeft: 'EfficiencyTable_alignLeft_a52cfd11',
        alignRight: 'EfficiencyTable_alignRight_46cf6a64',
        table: 'EfficiencyTable_table_f467cc44',
        tableBody: 'EfficiencyTable_tableBody_5b14613b',
        scrollBar: 'EfficiencyTable_scrollBar_f4e5aa11',
        scrollAreaContent: 'EfficiencyTable_scrollAreaContent_4fa5a5ab',
        mask: 'EfficiencyTable_mask_8fbe6740',
    },
    s_ = {
        tableBodyRow: 'TableBodyRow_tableBodyRow_be19874',
        tableBodyRow__selected: 'TableBodyRow_tableBodyRow__selected_9cd5fe77',
        hoverOverlay: 'TableBodyRow_hoverOverlay_dab11111',
        selectedRowTail: 'TableBodyRow_selectedRowTail_595bad28',
        selectedRowTail__enemies: 'TableBodyRow_selectedRowTail__enemies_15d3ff4e',
        rowDivider: 'TableBodyRow_rowDivider_7f22c0ad',
        rowDividerImage: 'TableBodyRow_rowDividerImage_9c09afd1',
        accountInfo: 'TableBodyRow_accountInfo_5ecfc9f2',
        vehicleText: 'TableBodyRow_vehicleText_4ede8694',
        numberValue: 'TableBodyRow_numberValue_c854dd1b',
        vehicleType: 'TableBodyRow_vehicleType_e090b6ac',
        tableBodyRow__personalSquad: 'TableBodyRow_tableBodyRow__personalSquad_5ecfc9f2',
        tableBodyRow__killed: 'TableBodyRow_tableBodyRow__killed_5ecfc9f2',
        tableBodyRow__personal: 'TableBodyRow_tableBodyRow__personal_5ecfc9f2',
        vehicleImage: 'TableBodyRow_vehicleImage_e48d0479',
        accountName: 'TableBodyRow_accountName_5ecfc9f2',
        tableBodyRow__teamKiller: 'TableBodyRow_tableBodyRow__teamKiller_5ecfc9f2',
        clanAbbreviation: 'TableBodyRow_clanAbbreviation_5ecfc9f2',
        selectedOverlay: 'TableBodyRow_selectedOverlay_7f267587',
        selectedOverlayDivider: 'TableBodyRow_selectedOverlayDivider_35a0f807',
        selectedOverlayDivider__bottom: 'TableBodyRow_selectedOverlayDivider__bottom_20b949b4',
        selectedOverlayImage: 'TableBodyRow_selectedOverlayImage_9c09afd1',
    },
    n_ = S();
function i_(e, a, t) {
    const s = e.getValue('account'),
        n = e.getValue('squadIndex');
    return ro({
        personal: a.account.username === s.username,
        platoonType: io(t, a.squadIndex, n),
        anonymizer: s.anonymizer,
    })
        ? s.fakeUsername
        : s.username;
}
function r_(e, a) {
    return e.getValue('damageDealt').damageDealt - a.getValue('damageDealt').damageDealt;
}
const l_ = { [ca.heavyTank]: 5, [ca.mediumTank]: 4, [ca['AT-SPG']]: 3, [ca.lightTank]: 2, [ca.SPG]: 1 };
function o_({ team: t, personalInfo: s, breakpointName: n }) {
    const i = (e, a) =>
            (function (e, a, t, s) {
                const n = i_(e, t, s),
                    i = i_(a, t, s);
                return n.localeCompare(i);
            })(e, a, s, t),
        r = 'small' === n ? Ye.extraSmall : n;
    return [
        n_.accessor('squadIndex', {
            id: lp,
            header: (a) => e.jsx(qp, { name: lp, column: a.column }),
            sortingFn: (e, a) => {
                const t = a.getValue('squadIndex') - e.getValue('squadIndex');
                return 0 !== t ? t : i(e, a);
            },
            cell: (a) => e.jsx(Qp, { team: t, platoon: a.cell.getValue() }),
            meta: { column: $p[lp][r] },
        }),
        n_.accessor('account', {
            id: op,
            header: (a) => e.jsx(qp, { team: t, name: op, column: a.column }),
            sortDescFirst: !1,
            sortingFn: i,
            cell: (a) =>
                e.jsx(wp, {
                    account: a.cell.getValue(),
                    team: t,
                    platoon: a.row.original.squadIndex,
                    className: s_.accountInfo,
                    classNames: { username: s_.accountName, clanAbbreviation: s_.clanAbbreviation },
                }),
            meta: { column: $p[op][r], className: t_.alignLeft },
        }),
        n_.accessor('vehicle', {
            id: cp,
            header: (a) => e.jsx(qp, { name: cp, column: a.column }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    const t = e.getValue('vehicle'),
                        s = a.getValue('vehicle'),
                        n = (null == t ? void 0 : t.tier) ?? _p,
                        i = (null == s ? void 0 : s.tier) ?? _p,
                        r = (null == t ? void 0 : t.type) ? l_[t.type] : fp,
                        l = (null == s ? void 0 : s.type) ? l_[s.type] : fp,
                        o = (null == t ? void 0 : t.name) ?? vp,
                        c = (null == s ? void 0 : s.name) ?? vp;
                    return n - i || r - l || c.localeCompare(o);
                })(e, a) || i(e, a),
            cell: (a) =>
                e.jsx(a_, {
                    vehicle: a.cell.getValue(),
                    classNames: {
                        name: s_.vehicleText,
                        level: s_.vehicleText,
                        type: s_.vehicleType,
                        image: s_.vehicleImage,
                    },
                }),
            meta: { column: $p[cp][r] },
        }),
        n_.accessor('efficiencyValues', {
            id: up,
            header: (a) => e.jsx(qp, { name: up, column: a.column }),
            sortingFn: (e, a) => r_(e, a) || i(e, a),
            cell: (t) =>
                e.jsx(Yp, {
                    value: t.getValue().damageDealt,
                    className: a(s_.numberValue, s_.numberValue__alignRight),
                }),
            meta: { column: $p[up][r], className: t_.alignRight },
        }),
        n_.accessor('efficiencyValues', {
            id: mp,
            header: (a) => e.jsx(qp, { name: mp, column: a.column }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    return e.getValue('kills').substractedAlliesKills - a.getValue('kills').substractedAlliesKills;
                })(e, a) || i(e, a),
            cell: (a) =>
                e.jsx(Yp, { showZero: !1, value: a.getValue().substractedAlliesKills, className: s_.numberValue }),
            meta: { column: $p[mp][r] },
        }),
        n_.accessor('efficiencyValues', {
            id: pp,
            header: (a) => e.jsx(qp, { name: pp, column: a.column }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    return e.getValue('earnedXp').earnedXp - a.getValue('earnedXp').earnedXp;
                })(e, a) ||
                r_(e, a) ||
                (function (e, a) {
                    const t = e.getValue('vehicle'),
                        s = a.getValue('vehicle');
                    return ((null == t ? void 0 : t.vehicleCD) ?? 0) - ((null == s ? void 0 : s.vehicleCD) ?? 0);
                })(e, a) ||
                i(e, a),
            cell: (a) => e.jsx(Yp, { value: a.getValue().earnedXp, className: s_.numberValue }),
            meta: { column: $p[pp][r], className: t_.alignRight },
        }),
        n_.accessor('achievements', {
            id: dp,
            header: (a) => e.jsx(qp, { name: dp, column: a.column, className: t_.achievementCell }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    return e.getValue('achievements').length - a.getValue('achievements').length;
                })(e, a) || i(e, a),
            cell: (a) => e.jsx(Ap, { achievements: a.getValue() }),
            meta: { column: $p[dp][r], className: t_.alignLeft },
        }),
    ];
}
const c_ = 'Header_row_e61ae0d9',
    d_ = 'Header_rowDivider_f54d9df6',
    u_ = 'Header_rowDividerImage_19f6e11',
    m_ = 'Header_cell_70aa1da5';
function p_({ className: a }) {
    const { table: t } = $e(),
        s = H();
    return e.jsxs(Ge.Header, {
        className: a,
        children: [
            e.jsx(Am, { classNames: { base: d_, image: u_ } }),
            J(t.getHeaderGroups(), (a, t) =>
                e.jsx(
                    Ge.Row,
                    {
                        className: c_,
                        children: J(a.headers, (a, n) => {
                            return e.jsx(
                                Ge.Cell,
                                {
                                    onClick:
                                        ((i = a.column.getToggleSortingHandler()),
                                        function (e) {
                                            (null == i || i(e),
                                                s.play('click', {
                                                    original: e,
                                                    target: 'team-efficiency:efficiency-table:header:cell',
                                                }));
                                        }),
                                    onMouseEnter: (e) =>
                                        s.play('mouse-enter', {
                                            target: 'team-efficiency:efficiency-table:header:cell',
                                            original: e,
                                        }),
                                    cell: { ...a, rowIndex: t, index: n, tablePart: Fe.header },
                                    className: m_,
                                    children: !a.isPlaceholder && C(a.column.columnDef.header, a.getContext()),
                                },
                                a.id,
                            );
                            var i;
                        }),
                    },
                    a.id,
                ),
            ),
        ],
    });
}
const __ = 'SelectedRowTail_selectedRowTail_8abda9c8',
    f_ = 'SelectedRowTail_selectedRowTail__hasWidth_6cb87e09',
    v_ = 'SelectedRowTail_selectedRowVerticalLine_c502cc58',
    b_ = 'SelectedRowTail_selectedRowTriangle_6f2b6bb3',
    h_ = 'SelectedRowTail_rowDivider_8fbc881',
    g_ = 'SelectedRowTail_rowDivider__bottom_4111cb99',
    y_ = 'SelectedRowTail_rowDividerImage_d11f29d5';
function x_({ className: t, short: s }) {
    return e.jsxs('div', {
        className: a(__, !s && f_, t),
        children: [
            e.jsx(Am, { classNames: { base: h_, image: y_ } }),
            e.jsx(Am, { classNames: { base: a(h_, g_), image: y_ } }),
            e.jsx('div', { className: v_ }),
            e.jsx('div', { className: b_ }),
        ],
    });
}
const N_ = 'personal',
    j_ = 'personalSquad',
    w_ = 'none',
    I_ = l(function ({ row: t, team: s, rowIndex: n, scrollbarVisible: i }) {
        var r;
        const { model: l, controls: o } = oo(),
            c = H(),
            d = Oe(
                (e) => {
                    (e.stopPropagation(),
                        c.play('click', { original: e, target: 'team-efficiency:efficiency-table:body:row' }),
                        o.teamEfficiency.selectRow({ team: s, username: t.original.account.username }));
                },
                [o.teamEfficiency, t.original.account.username, c, s],
                400,
            ),
            u = l.teamsStatistic.selectedRow.get(),
            m = l.computes.personalInfo(),
            p = (() => {
                if (m.account.username === t.original.account.username) return N_;
                return io(s, m.squadIndex, t.original.squadIndex) === so.personal ? j_ : w_;
            })(),
            _ = t.original.account.teamKiller,
            f = t.original.account.killed,
            v = (null == u ? void 0 : u.team) === s && u.username === t.original.account.username,
            b = Me({
                args: {
                    vehicleCD: null == (r = t.original.vehicle) ? void 0 : r.vehicleCD,
                    databaseID: t.original.databaseId,
                },
            });
        return e.jsxs(Ge.Row, {
            ...(p !== N_ && b),
            onMouseEnter: (e) =>
                c.play('mouse-enter', { target: 'team-efficiency:efficiency-table:body:row', original: e }),
            className: a(
                s_.tableBodyRow,
                v && s_.tableBodyRow__selected,
                p !== w_ && s_[`tableBodyRow__${p}`],
                _ && s_.tableBodyRow__teamKiller,
                f && s_.tableBodyRow__killed,
            ),
            onClick: d,
            children: [
                e.jsxs('div', {
                    className: s_.selectedOverlay,
                    children: [
                        e.jsx(Am, { classNames: { base: s_.selectedOverlayDivider, image: s_.selectedOverlayImage } }),
                        e.jsx(Am, {
                            classNames: {
                                base: a(s_.selectedOverlayDivider, s_.selectedOverlayDivider__bottom),
                                image: s_.selectedOverlayImage,
                            },
                        }),
                        e.jsx(x_, {
                            short: i && s === ao.allies,
                            className: a(s_.selectedRowTail, s_[`selectedRowTail__${s}`]),
                        }),
                    ],
                }),
                e.jsx(Am, {
                    classNames: { base: a(s_.rowDivider, v && s_.rowDivider__selected), image: s_.rowDividerImage },
                }),
                J(t.getVisibleCells(), (a, t) =>
                    e.jsx(
                        Ge.Cell,
                        {
                            cell: { ...a, rowIndex: n, index: t, tablePart: Fe.body },
                            children: C(a.column.columnDef.cell, a.getContext()),
                        },
                        a.id,
                    ),
                ),
                e.jsx('div', { className: s_.hoverOverlay }),
            ],
        });
    });
function A_({ team: a }) {
    const { table: s } = $e(),
        { api: i } = U(),
        r = Le(),
        l = t.useRef(null),
        [o, c] = t.useState(!1),
        [d, u] = w(() => ({ from: { maskSize: '100% 100%' } }));
    return (
        t.useEffect(() => {
            function e() {
                r.run(() => {
                    (!(function () {
                        const [, e] = i.getBounds();
                        c(e > 0);
                    })(),
                        (function () {
                            const [, e] = i.getBounds(),
                                a = (i.animationScroll.scrollPosition.get() / e) * 7;
                            u.start({ to: { maskSize: `100% ${e > 0 ? 100 + a : 107}%` } });
                        })());
                });
            }
            return (
                i.events.on('recalculateContent', e),
                i.events.on('rest', e),
                i.events.on('change', e),
                i.events.on('resizeHandled', e),
                e(),
                () => {
                    (i.events.off('recalculateContent', e),
                        i.events.off('rest', e),
                        i.events.off('change', e),
                        i.events.off('resizeHandled', e));
                }
            );
        }, [i, r, u]),
        e.jsxs(Ge.Body, {
            className: t_.tableBody,
            children: [
                e.jsx(n.div, {
                    className: t_.mask,
                    style: d,
                    children: e.jsx(Y, {
                        classNames: { wrapper: t_.scrollWrapper, content: t_.scrollAreaContent },
                        children: e.jsx('div', {
                            ref: l,
                            className: t_.rowsWrapper,
                            children: J(s.getRowModel().rows, (t, s) =>
                                e.jsx(I_, { row: t, rowIndex: s, team: a, scrollbarVisible: o }, t.id),
                            ),
                        }),
                    }),
                }),
                e.jsx(q, { classNames: { base: t_.scrollBar } }),
            ],
        })
    );
}
const C_ = F('TeamEfficiencyTable', t_.efficiencyTable, {
        variants: { team: { [ao.allies]: t_.efficiencyTable__allies, [ao.enemies]: t_.efficiencyTable__enemies } },
    }),
    S_ = {
        [ul.Squad]: lp,
        [ul.Player]: op,
        [ul.Damage]: up,
        [ul.Frag]: mp,
        [ul.Xp]: pp,
        [ul.Vehicle]: cp,
        [ul.Medal]: dp,
    },
    B_ = l(({ team: a, data: s, className: n }) => {
        const { model: i, controls: r } = oo(),
            l = i.computes.personalInfo(),
            o = i.teamsStatistic.sorting.get(),
            c = t.useMemo(() => [{ id: S_[o.column], desc: o.sortDirection === ml.Desc }], [o.column, o.sortDirection]),
            d = Ae().breakpoint.name,
            u = t.useCallback(
                (e) => {
                    const a = (e instanceof Function ? e(c) : e)[0] ?? { id: cp, desc: !0 };
                    r.teamEfficiency.sort({
                        column: Object.keys(S_).find((e) => S_[e] === a.id) || ul.Vehicle,
                        sortDirection: a.desc ? ml.Desc : ml.Asc,
                    });
                },
                [c, r.teamEfficiency],
            ),
            m = t.useMemo(() => o_({ team: a, personalInfo: l, breakpointName: d }), [a, d, l]);
        return (
            ee(da(d), `Such breakpoint ${d} is not supported`),
            e.jsx(qe, {
                columns: m,
                data: s,
                enableMultiRowSelection: !1,
                enableSortingRemoval: !1,
                sorting: c,
                onSortingChange: u,
                getRowId: (e) => e.account.username,
                getFilteredRowModel: B(),
                globalFilterFn: (e) => {
                    var a;
                    return 65281 !== (null == (a = e.original.vehicle) ? void 0 : a.vehicleCD);
                },
                enableSorting: !0,
                initialState: { globalFilter: !0 },
                children: e.jsx(C_, {
                    team: a,
                    className: n,
                    children: e.jsxs(
                        Ge,
                        {
                            className: t_.table,
                            children: [
                                e.jsx(p_, { className: t_.header }),
                                e.jsx(K, { children: e.jsx(A_, { team: a }) }),
                            ],
                        },
                        d,
                    ),
                }),
            })
        );
    }),
    R_ = {
        base: 'TeamEfficiency_51caa749',
        wrapper: 'TeamEfficiency_wrapper_a2a49ce',
        table: 'TeamEfficiency_table_5763cf17',
        table__hidden: 'TeamEfficiency_table__hidden_e8864815',
        details: 'TeamEfficiency_details_f087bb8e',
        details__visible: 'TeamEfficiency_details__visible_eaf91b76',
    },
    P_ = F('TeamEfficiency', R_.base),
    k_ = l(function ({ className: t }) {
        const { model: s } = oo(),
            n = s.teamsStatistic.allies.get(),
            i = s.teamsStatistic.enemies.get(),
            r = s.teamsStatistic.selectedRow.get();
        return e.jsx(P_, {
            className: a(R_[`base__${null == r ? void 0 : r.team}`], t),
            children: e.jsxs('div', {
                className: R_.wrapper,
                children: [
                    e.jsx(rp, {
                        team: ao.enemies,
                        className: a(R_.details, (null == r ? void 0 : r.team) === ao.enemies && R_.details__visible),
                    }),
                    e.jsx(B_, {
                        data: n,
                        team: ao.allies,
                        className: a(R_.table, (null == r ? void 0 : r.team) === ao.enemies && R_.table__hidden),
                    }),
                    e.jsx(rp, {
                        team: ao.allies,
                        className: a(R_.details, (null == r ? void 0 : r.team) === ao.allies && R_.details__visible),
                    }),
                    e.jsx(B_, {
                        data: i,
                        team: ao.enemies,
                        className: a(R_.table, (null == r ? void 0 : r.team) === ao.allies && R_.table__hidden),
                    }),
                ],
            }),
        });
    }),
    E_ = {
        tab: 'App_tab_5d913562',
        vignette: 'App_vignette_6896e5b7',
        base: 'App_e782cff0',
        navigation: 'App_navigation_24ac5b4',
        navigation__disabled: 'App_navigation__disabled_f8c46244',
        switcher: 'App_switcher_b0c0c74b',
        mainBorderSwitcher: 'App_mainBorderSwitcher_edb9d39b',
        content__overview: 'App_content__overview_0',
        tab__overview: 'App_tab__overview_83066945',
        content__teamScore: 'App_content__teamScore_0',
        tab__teamScore: 'App_tab__teamScore_83066945',
        content__financialReport: 'App_content__financialReport_0',
        tab__financialReport: 'App_tab__financialReport_83066945',
        content__missionProgress: 'App_content__missionProgress_0',
        tab__missionProgress: 'App_tab__missionProgress_83066945',
        progressionNotificationItems: 'App_progressionNotificationItems_50f548a8',
        notificationBubble: 'App_notificationBubble_e3b77ec5',
        notificationValueContainer: 'App_notificationValueContainer_17678555',
        notificationValue: 'App_notificationValue_e7f1f67c',
        info: 'App_info_e544accb',
    },
    T_ = F('PostBattle', E_.base),
    D_ = F('PostBattleNavigation', E_.navigation);
function V_() {
    const { active: t } = L();
    return e.jsxs('div', {
        className: a(E_.content, E_[`content__${t}`]),
        children: [
            e.jsx(wm, { className: a(E_.tab, E_.tab__overview) }),
            e.jsx(k_, { className: a(E_.tab, E_.tab__teamScore) }),
            e.jsx(xo, { className: a(E_.tab, E_.tab__missionProgress) }),
            e.jsx(Hr, { className: a(E_.tab, E_.tab__financialReport) }),
        ],
    });
}
const z_ = l(function () {
        const s = k.resolve('strings'),
            i = H(),
            r = ua(),
            { battleInfoRef: l, navigationRef: o, completedSteps: c, step: d, readyForNotifications: u } = vt(),
            m = Za(),
            [p] = w(() => ({ from: { opacity: 0, y: '-10rem' }, ref: o })),
            [_] = w(() => ({ from: { opacity: 0 }, ref: l })),
            { model: f, controls: v } = oo(),
            b = f.computes.personalInfo(),
            h = f.battleInfo.get(),
            { active: g } = L();
        return (
            Xe(We.ESCAPE, v.close),
            we(() => {
                function e(e) {
                    e.altKey || e.shiftKey || e.ctrlKey || ma.tooltip.hideAll();
                }
                return (
                    document.addEventListener('keydown', e),
                    () => {
                        document.removeEventListener('keydown', e);
                    }
                );
            }),
            t.useEffect(() => {
                g !== Ia.progression && u && !1 === m.state.read
                    ? m.controls.start()
                    : g !== Ia.progression
                      ? m.state.read && g !== Ia.progression && m.controls.wait()
                      : m.controls.read();
            }, [m.state.read, m.controls, g, u]),
            t.useEffect(() => {
                d === mt.fourth && i.play('exitResult', { target: 'post-battle' });
            }, [d, i]),
            e.jsxs(T_, {
                className: a(E_.base, E_[`base__${g}`]),
                style: { width: `${r}rem` },
                children: [
                    g !== Ia.overview && e.jsx('div', { className: E_.vignette }),
                    e.jsx(V_, {}),
                    e.jsx(n.div, {
                        style: p,
                        children: e.jsx(D_, {
                            className: !1 === c.has(mt.second) && E_.navigation__disabled,
                            children: e.jsxs(pa.Switcher, {
                                className: E_.switcher,
                                classNames: { mainBorder: E_.mainBorderSwitcher },
                                children: [
                                    e.jsx(pa.Tab, {
                                        tabId: Ia.overview,
                                        children: T.toUpperCase(
                                            s.readOrEmpty('battle_results.battleResult.navigation.battleResults'),
                                        ),
                                    }),
                                    e.jsx(pa.Tab, {
                                        tabId: Ia.teamsStatistics,
                                        children: T.toUpperCase(
                                            s.readOrEmpty('battle_results.battleResult.navigation.teamEfficiency'),
                                        ),
                                    }),
                                    e.jsxs(pa.Tab, {
                                        tabId: Ia.progression,
                                        children: [
                                            T.toUpperCase(
                                                s.readOrEmpty(
                                                    'battle_results.battleResult.navigation.missionsProgress',
                                                ),
                                            ),
                                            e.jsx(ut.Bubble, { className: E_.notificationBubble }),
                                            e.jsx(ut.Items, { className: E_.progressionNotificationItems }),
                                        ],
                                    }),
                                    e.jsx(pa.Tab, {
                                        tabId: Ia.financialReport,
                                        children: T.toUpperCase(
                                            s.readOrEmpty('battle_results.battleResult.navigation.financialReport'),
                                        ),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    h &&
                        e.jsx(n.div, {
                            className: E_.info,
                            style: _,
                            children: e.jsxs(Wa, {
                                children: [
                                    e.jsx(Wa.Arena, {
                                        arenaName: h.arenaName,
                                        arenaType: h.arenaType,
                                        finishReasonKey: h.finishReasonKey,
                                        status: h.status,
                                        modeName: h.modeName,
                                    }),
                                    e.jsx(Wa.StartTime, { startTime: h.startTime }),
                                    e.jsx(Wa.Player, {
                                        vehicleName: b.vehicle.name,
                                        userName: b.account.username,
                                        clan: b.account.clanAbbreviation,
                                    }),
                                    e.jsx(Wa.PlayerStatus, {
                                        className: E_.group,
                                        killer: b.killer,
                                        deathReasonKey: b.userStatus.deathReason,
                                        abandonBattle: b.userStatus.abandonBattle,
                                    }),
                                    e.jsx(Wa.CommendationScore, { commendationsReceived: h.commendationsReceived }),
                                ],
                            }),
                        }),
                ],
            })
        );
    }),
    O_ = l(function () {
        const a = _a(),
            { model: t } = oo(),
            { size: s } = re({ size: fa.small }, { large: { size: fa.medium }, extraLarge: { size: fa.large } });
        return e.jsx(pa, {
            theme: 'primary',
            size: s,
            active: Sa(a.location),
            onActiveChange: (e) => {
                e in Ba ? a.push(Ba[e]) : console.error(`Invalid tab ID: ${e}`);
            },
            children: e.jsx(bt, {
                children: e.jsx(ut.Provider, { items: t.notificationList.get(), children: e.jsx(z_, {}) }),
            }),
        });
    }),
    H_ = va({
        click: {
            'expandable-overlay': 'yes',
            'expandable-overlay:hint-key': 'yes',
            'managable-bonus:apply-button': 'yes',
            'managable-bonus:premium-info-button': 'yes',
            'overview:total-personal-efficiency': 'yes',
            'team-efficiency:efficiency-table:header:cell': 'tabs',
        },
        openOverlay: {
            'expandable-overlay': 'gui_pbs_overlay_open',
            'expandable-overlay:hint-key': 'gui_pbs_overlay_open',
            'overview:total-personal-efficiency': 'gui_pbs_overlay_open',
        },
        closeOverlay: {
            'expandable-overlay': 'gui_pbs_overlay_close',
            'expandable-overlay:hint-key': 'gui_pbs_overlay_close',
        },
        'mouse-enter': {
            'achievements:achievement': 'highlightx',
            'team-efficiency:efficiency-details:achievement': 'highlightx',
        },
        achievementAppeared: { overview: 'gui_pbs_reward_item' },
        showBattleResult: { 'animation-context': 'gui_pbs_result_ribbon' },
        startRolling: { 'overview:currencies': 'gui_pbs_stats_start' },
        stopRolling: { 'overview:currencies': 'gui_pbs_stats_stop' },
        exitResult: { 'post-battle': 'ue_06_result_exit' },
        notificationBubbleAppeared: { 'mission-progress:bubble': 'gui_pbs_notification_bubble' },
    }),
    W_ = new ba().add(lo).addWithProps(ha, { soundsOverrides: H_ }).addWithProps(ga, { context: 'model.router' });
(ya(),
    xa(W_.render(e.jsx(O_, {})))
        .then(() => Na(document.getElementById('root')))
        .then(() => ja()));
