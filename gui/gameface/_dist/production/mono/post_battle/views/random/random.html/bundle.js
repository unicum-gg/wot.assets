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
    f as D,
    g as V,
    D as z,
    h as O,
    j as H,
    k as W,
    l as M,
    m as G,
    B as F,
    n as $,
    d as L,
    o as X,
    p as K,
    I as q,
    q as U,
    t as Y,
    v as J,
    A as Z,
    w as Q,
    x as ee,
    y as ae,
    z as te,
    i as se,
    c as ne,
    C as ie,
    E as re,
    G as le,
    H as oe,
    K as ce,
    L as de,
    N as ue,
    O as me,
    P as pe,
    Q as _e,
    R as fe,
    S as ve,
    s as be,
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
    a4 as Pe,
    a5 as Re,
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
/* empty css                    */ const Pa = 'BattleInfo_6333ab61',
    Ra = 'BattleInfo_group_161b6f97',
    ka = 'BattleInfo_textString_be34b14f',
    Ea = 'BattleInfo_vehicleName_333dba78',
    Ta = 'BattleInfo_commendations_731c9f38',
    Da = 'BattleInfo_commendations_counter_aef426',
    Va = 'BattleInfo_commendations_icon_55a703a8',
    za = [1, 19],
    Oa = [1, 10],
    Ha = ({ className: t, finishReasonKey: s, status: n, modeName: i, arenaType: r, ...l }) => {
        const o = `battle_results.finish.reason.c_${s}${Oa.includes(s) ? n : ''}`,
            c = za.includes(r) ? `arenas.type.${i}.name` : `menu.loading.battleTypes.c_${r}`;
        return e.jsx(P, {
            ...l,
            upgradeLegacy: !0,
            path: 'battle_results.common.arena.fullName',
            params: { 0: e.jsx(P, { path: c }), 1: e.jsx(P, { path: o }) },
            className: a(Ra, t),
        });
    };
const Wa = -1;
const Ma = k.resolve('strings');
const Ga = t.forwardRef(function (t, s) {
    return e.jsx('div', { ...t, 'data-name': 'BattleInfo', ref: s, className: a(Pa, t.className) });
});
((Ga.Arena = function ({ arenaName: t, className: s, ...n }) {
    return e.jsx(P, {
        className: a(Ra, s),
        path: 'battle_results.common.arena.nameAndMode',
        params: { 0: t, 1: e.jsx(Ha, { ...n }) },
    });
}),
    (Ga.StartTime = ({ startTime: t, className: s, ...n }) =>
        e.jsx(P, {
            ...n,
            className: a(Ra, s),
            path: 'battle_results.common.startTime',
            params: { 0: V.formatDateTime(z.ShortDate, t), 1: V.formatDateTime(z.ShortTime, t) },
        })),
    (Ga.Player = function ({
        className: t,
        vehicleLevel: s,
        vehicleType: n,
        vehicleName: i,
        userName: r,
        clan: l,
        vehicleTypeSize: o = D.sizes.x24x24,
        classNames: c,
        ...d
    }) {
        return e.jsx(P, {
            ...d,
            upgradeLegacy: !0,
            className: a(Ra, t),
            path: 'battle_results.common.arena.fullName',
            params: {
                0: l
                    ? e.jsx(P, { path: 'battle_results.common.player.nameWithClan', params: { name: r, clan: l } })
                    : r,
                1: e.jsxs('div', {
                    className: a(Ea, null == c ? void 0 : c.vehicleName),
                    children: [
                        e.jsx(T, { value: s, className: a(ka, null == c ? void 0 : c.vehicleLevel) }),
                        e.jsx(D, { className: null == c ? void 0 : c.vehicleType, type: n, size: o }),
                        i,
                    ],
                }),
            },
        });
    }),
    (Ga.PlayerStatus = function ({ className: t, deathReasonKey: s, killer: n, abandonBattle: i, ...r }) {
        const l = (function ({ deathReasonKey: e, abandonBattle: a }) {
            return a ? 'prematureLeave' : e === Wa ? 'alive' : `dead${e}`;
        })({ deathReasonKey: s, abandonBattle: i });
        if (
            (n.username || n.fakeUsername) &&
            !i &&
            s !== Wa &&
            (function (e) {
                return Boolean(Ma.read(`battle_results.common.vehicleState.${e}_with_killername`));
            })(l)
        ) {
            const s = n.anonymizer ? n.fakeUsername : n.username;
            return e.jsx(P, {
                ...r,
                className: a(Ra, t),
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
        return e.jsx(P, { ...r, className: a(Ra, t), path: `battle_results.common.vehicleState.${l}` });
    }),
    (Ga.CommendationScore = function ({ commendationsReceived: t }) {
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
                  className: a(Ra, Ta),
                  children: [e.jsx('div', { className: Da, children: t }), e.jsx('div', { className: Va })],
              })
            : null;
    }));
const Fa = 'AnimatedValue_d9f4b2f0',
    $a = 'AnimatedValue_animatedValue_4c490d83',
    La = O.cubicBezier(0.33, 0, 0.25, 1);
function Xa(e) {
    return {
        enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
        leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
    };
}
function Ka({ value: i, transition: r, children: l, className: o, classNames: c }) {
    const d = t.useMemo(wa, []),
        u = s(i, {
            ...r,
            initial: { opacity: 1, y: '0rem', ...(null == r ? void 0 : r.initial) },
            from: { opacity: 0, y: '-5rem', ...(null == r ? void 0 : r.from) },
            enter: () => ({
                opacity: 1,
                y: '0rem',
                delay: 330,
                config: { easing: La, duration: 330 },
                onStart: () => {
                    const { enterElements: e, leftElements: a } = Xa(d);
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
                config: { easing: La, duration: 330 },
                onStart: () => {
                    let e = 0;
                    const { enterElements: a, leftElements: t } = Xa(d);
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
        className: a(Fa, o),
        children: u((t, s) => {
            const r = 0 === t.opacity.get() && !1 === t.opacity.isAnimating;
            return e.jsx(n.div, {
                className: a(
                    $a,
                    `js-animated-value-${d}-${i === s ? 'enter' : 'leave'}`,
                    null == c ? void 0 : c.animatedValue,
                ),
                style: { ...t, position: r ? 'absolute' : 'relative' },
                children: l(s),
            });
        }),
    });
}
const qa = 'idle',
    Ua = 'progress',
    Ya = 'waiting',
    Ja = t.createContext(null),
    Za = 1;
function Qa({ read: e, shownNotificationSize: a, bubbleCounter: t, notification: s }) {
    return void 0 === s ? t : e || 0 === a ? Za : t + 1;
}
function et() {
    const e = t.useContext(Ja);
    if (null === e)
        throw new Error('You can use the notifications context hooks only with the NotificationsProvider component');
    return e;
}
const at = {
        valueContainer: 'Bubble_valueContainer_8b7ced74',
        valueContainer__medium: 'Bubble_valueContainer__medium_a9175d93',
        value: 'Bubble_value_5eacd6f5',
        value__medium: 'Bubble_value__medium_3232d6e8',
    },
    tt = O.cubicBezier(0.75, 0, 0.67, 1),
    st = O.cubicBezier(0.33, 0, 0.25, 1);
function nt(a, t) {
    return 'number' == typeof a
        ? (function (a, t) {
              return a > t
                  ? e.jsx(P, { path: 'common.valuePlus', params: { value: V.formatNumber('integral', t) } })
                  : V.formatNumber('integral', a);
          })(a, t)
        : a;
}
const it = t.memo(function ({ size: s, className: n, classNames: i, target: r, ...l }) {
        const { state: o, items: c } = et(),
            d = M(),
            u = o.value === Ua || (o.value === Ya && !1 === o.read),
            m = G({ value: $.small }, { medium: { value: $.medium } }),
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
                        config: { easing: tt, duration: 330 },
                        onRest: () => {
                            u && d.play('notificationBubbleAppeared', { target: r || 'mission-progress:bubble' });
                        },
                        ...(null == (t = l.rootTransition) ? void 0 : t.enter),
                    },
                    leave: { opacity: 0, y: '0', delay: 0, config: { duration: 330, easings: st } },
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
                        config: { easing: st, duration: 170 },
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
                        config: { easing: st, duration: 170 },
                        ...(null == (t = null == l ? void 0 : l.countTransition) ? void 0 : t.leave),
                    },
                };
            }, [l.countTransition, d, r]);
        return e.jsx(Ka, {
            value: u,
            transition: p,
            className: n,
            children: (t) =>
                t &&
                e.jsx(F.Root, {
                    children: e.jsx('div', {
                        className: a(
                            at.valueContainer,
                            at[`valueContainer__${s ?? m.value}`],
                            null == i ? void 0 : i.valueContainer,
                        ),
                        children: e.jsx(Ka, {
                            value: o.bubbleCounter >= c.length ? c.length : o.bubbleCounter,
                            transition: _,
                            children: (t) =>
                                e.jsx('div', {
                                    className: a(at.value, at[`value__${s ?? m.value}`], null == i ? void 0 : i.value),
                                    children: nt(t, 99),
                                }),
                        }),
                    }),
                }),
        });
    }),
    rt = 'Items_9477a756',
    lt = 'Items_animatedValue_c7d2e119',
    ot = 'Items_plug_a7a8cadf',
    ct = O.cubicBezier(0.75, 0, 0.67, 1),
    dt = O.cubicBezier(0.1, 0, 0.9, 1),
    ut = O.cubicBezier(0.33, 0, 0.25, 1),
    mt = L('NotificationItem', rt),
    pt = {
        Bubble: it,
        Items: t.memo(function ({ transition: a, ...t }) {
            var i;
            const { items: r, state: l } = et(),
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
                            config: { easing: ct, duration: 330 },
                            ...(null == a ? void 0 : a.enter),
                        },
                        { y: '2rem', x: '-50%', opacity: 1, config: { duration: 800, easing: dt } },
                    ],
                    leave: {
                        y: l.value === qa ? '0' : '5rem',
                        x: '-50%',
                        opacity: 0,
                        config: { duration: l.value === qa ? 330 : 170, easing: l.value === qa ? ut : ct },
                    },
                });
            return e.jsxs(mt, {
                ...t,
                children: [
                    e.jsx('div', {
                        className: ot,
                        children: l.currentNotification || (null == (i = r[r.length - 1]) ? void 0 : i.item),
                    }),
                    o((a, t) => e.jsx(n.div, { className: lt, style: a, children: t })),
                ],
            });
        }),
        Provider: function ({ items: a, children: s }) {
            const [n, i] = t.useState(() => ({
                    read: !1,
                    value: qa,
                    bubbleCounter: Za,
                    currentNotification: void 0,
                    shownNotifications: new Set(),
                })),
                r = t.useMemo(
                    () => a.some(({ id: e }) => !1 === n.shownNotifications.has(e)),
                    [a, n.shownNotifications],
                );
            H(
                () => {
                    i((e) => {
                        const t = a.find(({ id: a }) => !1 === e.shownNotifications.has(a));
                        return {
                            ...e,
                            read: !1,
                            currentNotification: null == t ? void 0 : t.item,
                            shownNotifications: void 0 !== t ? W(e.shownNotifications, t.id) : e.shownNotifications,
                            bubbleCounter: void 0 !== t ? e.bubbleCounter + 1 : e.bubbleCounter,
                        };
                    });
                },
                n.value === Ua && void 0 !== n.currentNotification ? 1130 : void 0,
            );
            const l = t.useMemo(
                () => ({
                    start() {
                        i((e) => {
                            if (e.value === Ua || 0 === a.length) return e;
                            const t = a.find(({ id: a }) => !1 === e.shownNotifications.has(a));
                            return {
                                ...e,
                                read: !1,
                                currentNotification: null == t ? void 0 : t.item,
                                shownNotifications: void 0 !== t ? W(e.shownNotifications, t.id) : e.shownNotifications,
                                value: Ua,
                                bubbleCounter: Qa({
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
                            value: qa,
                            read: !0,
                            currentNotification: void 0,
                            shownNotifications: new Set(a.map((e) => e.id)),
                        }));
                    },
                    wait() {
                        i((e) => (e.value === Ya ? e : { ...e, value: Ya, currentNotification: void 0 }));
                    },
                }),
                [a],
            );
            (t.useEffect(() => {
                n.value === Ya && r && l.start();
            }, [l, n.value, r]),
                t.useEffect(() => {
                    void 0 === n.currentNotification && n.value === Ua && !1 === r && l.wait();
                }, [n.currentNotification, n.value, l, r]));
            const o = t.useMemo(() => ({ state: n, items: a, controls: l, hasUnreadNotifications: r }), [a, n, l, r]);
            return e.jsx(Ja.Provider, { value: o, children: s });
        },
    },
    _t = {
        initial: 'initial',
        first: 'first',
        second: 'second',
        third: 'third',
        fourth: 'fourth',
        fifth: 'fifth',
        sixth: 'sixth',
        immediate: 'immediate',
    },
    ft = O.cubicBezier(0.33, 0, 0.25, 1),
    vt = 400,
    bt = t.createContext(null);
function ht() {
    const e = t.useContext(bt);
    if (null === e)
        throw new Error('You can use the animation context hooks only with the AnimationProvider component');
    return e;
}
function gt({ children: a }) {
    const [s, n] = t.useState(_t.initial),
        [r, l] = t.useState(new Set()),
        [o, c] = t.useState(!1),
        [d, u] = t.useState(!1),
        m = X(),
        p = M(),
        { active: _ } = K(),
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
        s === _t.immediate && l(new Set(Object.values(_t)));
    }, [s]),
        t.useEffect(() => {
            switch (s) {
                case _t.immediate:
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
                case _t.initial:
                    return void n(_ === Ia.overview ? _t.first : _t.immediate);
                case _t.first:
                    return (
                        p.play('showBattleResult', { target: 'animation-context' }),
                        f.start({ y: '0', opacity: 1, config: { duration: vt, easing: ft } }),
                        void v.start({
                            opacity: 1,
                            y: '0',
                            config: { duration: vt, easing: ft },
                            onRest: () => {
                                (n(_t.second), l((e) => W(e, _t.first)));
                            },
                        })
                    );
                case _t.second:
                    return (
                        b.start({
                            maskSize: '100% 100%',
                            config: { duration: vt, easing: ft },
                            onRest: () => {
                                l((e) => W(e, _t.second));
                            },
                        }),
                        void m.run(() => {
                            (n(_t.third), m.clear());
                        }, 280)
                    );
                case _t.third:
                    return (
                        h.start({ opacity: 1, y: '0', config: { duration: vt, easing: ft } }),
                        g.start({ opacity: 1, y: '0', config: { duration: vt, easing: ft } }),
                        y.start({
                            opacity: 1,
                            config: { duration: vt, easing: ft },
                            onRest: () => {
                                l((e) => W(e, _t.third));
                            },
                        }),
                        void m.run(() => {
                            (n(_t.fourth), m.clear());
                        }, 280)
                    );
                case _t.fourth:
                    return (
                        N.start({
                            maskSize: '100% 100%',
                            config: { duration: vt, easing: ft },
                            onRest: () => {
                                l((e) => W(e, _t.fourth));
                            },
                        }),
                        void m.run(() => {
                            (n(_t.fifth), m.clear());
                        }, 120)
                    );
                case _t.fifth:
                    (j.start({ opacity: 1, config: { duration: vt, easing: ft } }),
                        x.start({
                            opacity: 1,
                            config: { duration: vt, easing: ft },
                            onRest: () => {
                                l((e) => W(e, _t.fifth));
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
            readyForNotifications: o && d && r.has(_t.fifth),
        }),
        [s, w, o, d, r],
    );
    return e.jsx(bt.Provider, { value: I, children: a });
}
const yt = { base: 'Divider_80a19f4b' };
function xt({ classNames: t }) {
    return e.jsx('div', {
        className: a(yt.base, null == t ? void 0 : t.base),
        children: e.jsx(q, {
            className: null == t ? void 0 : t.image,
            width: '100%',
            height: '100%',
            path: 'post_battle.row_divider',
            fit: 'cover',
        }),
    });
}
const Nt = 'Header_content_b9e0be90',
    jt = 'Header_title_91e5448a',
    wt = 'Header_divider_eb019c6',
    It = 'Header_dividerImage_19f6e11',
    At = L('Header', 'Header_70aa1da5'),
    Ct = t.forwardRef(({ title: t, children: s, classNames: n, ...i }, r) => {
        const l = k.resolve('strings');
        return e.jsxs(At, {
            ...i,
            ref: r,
            children: [
                e.jsxs('div', {
                    className: a(Nt, null == n ? void 0 : n.content),
                    children: [
                        e.jsx('div', {
                            className: a(jt, null == n ? void 0 : n.title),
                            children: V.toUpperCase(l.readOrEmpty(t)),
                        }),
                        s,
                    ],
                }),
                e.jsx(xt, { classNames: { base: a(wt, null == n ? void 0 : n.divider), image: It } }),
            ],
        });
    }),
    St = t.forwardRef((a, t) => e.jsx(Ct, { ...a, title: 'battle_results.details.xp', ref: t })),
    Bt = (e) => {
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
    Pt = 'IncomeStatement_c4136bc5',
    Rt = 'IncomeStatement_verticalBar_5fb90511',
    kt = 'IncomeStatement_scrollWrapper_ce2dde41',
    Et = 'IncomeStatement_scrollContent_72ffb2ee',
    Tt = 'IncomeStatement_scrollContent__initialized_ce1144d0',
    Dt = L('CreditsIncomeStatement'),
    Vt = ({ children: t }) => {
        const s = J(),
            n = Bt(s.api);
        return e.jsx(Z, { classNames: { wrapper: kt, content: a(Et, n && Tt) }, children: t });
    },
    zt = t.forwardRef(({ children: t, className: s, scrollable: n, ...i }, r) =>
        e.jsx(Dt, {
            className: a(Pt, s),
            ...i,
            ref: r,
            children: n
                ? e.jsxs(U, { children: [e.jsx(Vt, { children: t }), e.jsx(Y, { classNames: { base: Rt } })] })
                : t,
        }),
    );
var Ot = ((e) => (
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
    ))(Ot || {}),
    Ht = ((e) => (
        (e[(e.PremiumInfo = 0)] = 'PremiumInfo'),
        (e[(e.PremiumBonus = 1)] = 'PremiumBonus'),
        (e[(e.PremiumEarnings = 2)] = 'PremiumEarnings'),
        (e[(e.PremiumAdvertising = 3)] = 'PremiumAdvertising'),
        (e[(e.PlusInfo = 4)] = 'PlusInfo'),
        (e[(e.PlusEarnings = 5)] = 'PlusEarnings'),
        (e[(e.PlusYouRock = 6)] = 'PlusYouRock'),
        e
    ))(Ht || {}),
    Wt = ((e) => ((e.None = 'none'), (e.Core = 'core'), (e.Pro = 'pro'), e))(Wt || {});
const Mt = 'xp',
    Gt = 'freeXP',
    Ft = 'credits',
    $t = 'gold',
    Lt = 'originalCrystals',
    Xt = 'eventCrystals',
    Kt = 'autoEquipCrystals',
    qt = 'totalCrystals',
    Ut = 'originalXP',
    Yt = 'achievementXP',
    Jt = 'originalXPPenalty',
    Zt = 'igrBonusXP',
    Qt = 'firstWinXP',
    es = 'additionalBonusXP',
    as = 'boostersXP',
    ts = 'tacticalTrainingXP',
    ss = 'eventXP',
    ns = 'referralBonusXP',
    is = 'premiumVehicleXP',
    rs = 'squadBonusXP',
    ls = 'squadPenaltyXP',
    os = 'wotPlusBonusXP',
    cs = 'wotPlusProBoostXP',
    ds = 'totalXP',
    us = 'originalFreeXP',
    ms = 'achievementFreeXP',
    ps = 'igrBonusFreeXP',
    _s = 'firstWinFreeXP',
    fs = 'additionalBonusFreeXP',
    vs = 'boostersFreeXP',
    bs = 'militaryManeuversFreeXP',
    hs = 'eventFreeXP',
    gs = 'premiumVehicleFreeXP',
    ys = 'wotPlusBonusFreeXP',
    xs = 'wotPlusProBoostFreeXP',
    Ns = 'totalFreeXP',
    js = 'baseEarnedCredits',
    ws = 'squadBonusCredits',
    Is = 'achievementCredits',
    As = 'boostersCredits',
    Cs = 'petSystemBonusCredits',
    Ss = 'battlePaymentsCredits',
    Bs = 'eventPaymentsCredits',
    Ps = 'referralBonusCredits',
    Rs = 'wotPlusBonusCredits',
    ks = 'wotPlusProBoostCredits',
    Es = 'friendlyFirePenaltyCredits',
    Ts = 'friendlyFireCompensationCredits',
    Ds = 'piggyBankCredits',
    Vs = 'autoRepairCredits',
    zs = 'autoLoadCredits',
    Os = 'autoEquipCredits',
    Hs = 'intermediateTotalCredits',
    Ws = 'totalCredits',
    Ms = 'goldEventPayments',
    Gs = 'goldPiggyBank',
    Fs = 'intermediateTotalGold',
    $s = 'totalGold',
    Ls = 'aogasFactor',
    Xs = 'deserterViolation',
    Ks = 'afkViolation',
    qs = 'suicideViolation',
    Us = new Set([Jt, ns, rs, ls, ts]),
    Ys = new Set([bs]),
    Js = new Set([js, ws, Is, As, Ss, Ps, Cs, Rs, ks, Xs, qs, Ks, Es, Ts, Ls, Vs, zs, Os]),
    Zs = {
        [Yt]: ms,
        [es]: fs,
        [Ks]: Ks,
        [Ls]: Ls,
        [as]: vs,
        [Xs]: Xs,
        [ss]: hs,
        [Qt]: _s,
        [Zt]: ps,
        [Ut]: us,
        [is]: gs,
        [qs]: qs,
        [ds]: Ns,
        [os]: ys,
        [cs]: xs,
    },
    Qs = { [Bs]: Ms, [Hs]: Fs, [Ds]: Gs, [Ws]: $s },
    en = [Lt, Xt, Kt, qt],
    an = [
        Ut,
        us,
        Yt,
        ms,
        Jt,
        Zt,
        ps,
        Qt,
        _s,
        es,
        fs,
        as,
        vs,
        ts,
        bs,
        ss,
        hs,
        ns,
        is,
        gs,
        rs,
        ls,
        Ls,
        os,
        ys,
        cs,
        xs,
        Xs,
        qs,
        Ks,
        ds,
        Ns,
    ],
    tn = [js, ws, Is, As, Cs, Ss, Bs, Ms, Ps, Rs, ks, Xs, qs, Ks, Es, Ts, Ls, Hs, Fs, Vs, zs, Os, Ws, $s, Ds, Gs],
    sn = new Set([qt, Ut, us, ds, Ns, js, Hs, Fs, Vs, zs, Os, Ws, $s, Ds, Gs]),
    nn = new Set([Ws, $s, Fs, Hs]),
    rn = 'multiplier',
    ln = 'firstWinMultiplier',
    on = 'fractionalMultiplier',
    cn = 'percent',
    dn = 'plus',
    un = {
        [Zt]: rn,
        [ps]: rn,
        [Qt]: ln,
        [_s]: ln,
        [es]: rn,
        [fs]: rn,
        [Ls]: on,
        [Xs]: cn,
        [qs]: cn,
        [Ks]: cn,
        [Ds]: dn,
        [Gs]: dn,
    };
function mn(e) {
    const a = Number(e.trim());
    return Number.isNaN(a)
        ? (console.error(`Invalid referral factor: "${e}" is not a number.`), 0)
        : Math.round(100 * a);
}
function pn(e) {
    const a = Number(e.trim());
    return Number.isNaN(a) ? (console.error(`Invalid percent bonus: "${a}" is not a number.`), 0) : a;
}
function _n(e) {
    return sn.has(e.paramName);
}
function fn(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.hasAogasFine);
}
function vn(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.isEnabled);
}
const bn = { [Ut]: _n, [us]: _n, [ds]: _n, [Ns]: _n, [Ls]: fn, [os]: vn, [ys]: vn },
    hn = {
        [js]: _n,
        [Hs]: _n,
        [Fs]: _n,
        [Vs]: _n,
        [zs]: _n,
        [Os]: _n,
        [Ws]: _n,
        [$s]: _n,
        [Ls]: fn,
        [Rs]: vn,
        [Ds]: _n,
    };
function gn(e) {
    return !1 !== nn.has(e.paramName) && 0 === e.standard.gold && 0 === e.premium.gold;
}
const yn = { [Hs]: (e) => !1 === gn(e), [Ws]: (e) => !1 === gn(e), [Ds]: (e, a) => a },
    xn = { [Mt]: 'library.xp', [Gt]: 'library.freeXp', [Ft]: 'library.credits', [$t]: 'library.gold' },
    Nn = [Ls, Xs, Ks, qs];
function jn(e) {
    return e === Mt ? 'library.x2_combatExp' : 'library.x2_combatFreeExp';
}
const wn = {
    [Zt]: (e) => 'library.x2_combatExp',
    [ps]: (e) => 'library.x2_combatExp',
    [Qt]: jn,
    [_s]: jn,
    [es]: jn,
    [fs]: jn,
};
function In(e, a) {
    if (void 0 === a || Nn.includes(a)) return;
    const t = wn[a];
    return t ? t(e) : xn[e];
}
function An(e, a) {
    return en.indexOf(e.paramName) - en.indexOf(a.paramName);
}
function Cn(e, a) {
    return an.indexOf(e.paramName) - an.indexOf(a.paramName);
}
function Sn(e, a) {
    return tn.indexOf(e.paramName) - tn.indexOf(a.paramName);
}
function Bn(e) {
    return {
        paramName: e.paramName,
        currencyType: e.currencyType,
        baseValue: e.baseValue,
        premiumValue: e.premiumValue,
        recordsItemsDetails: ee(e.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
}
function Pn(e, a) {
    const t = [],
        s = [];
    for (const n of e) a(n) ? t.push(n) : s.push(n);
    return [t, s];
}
function Rn(e, a) {
    const t = Q(e.earned, Bn),
        s = Q(e.expenses, Bn),
        n = Q(e.total, Bn),
        i = [Hs, Fs],
        r = [Ds, Gs],
        [l, o] = Pn(n, (e) => i.includes(e.paramName)),
        [c, d] = Pn([...t, ...l], (e) => r.includes(e.paramName));
    return {
        records: [...d, ...s].sort(a),
        total: ((u = [...o, ...c]),
        u.filter((e) => {
            const a = Boolean(e.premiumValue || e.baseValue),
                t = sn.has(e.paramName);
            return a || t;
        })).sort(a),
    };
    var u;
}
const kn = (e) => e in un;
function En({ xp: e, freeXp: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    te('string' == typeof t, 'xp or freeXp paramName is not provided');
    const s = kn(t) ? un[t] : void 0,
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
function Tn({ credits: e, gold: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    te('string' == typeof t, 'credits or gold paramName is not provided');
    const s = kn(t) ? un[t] : void 0,
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
const Dn = (e) => e in Zs;
function Vn(e, a) {
    const t = e.paramName;
    return (te(Dn(t), `No analogue for ${t} in free xp parameter names`), a.find((e) => Zs[t] === e.paramName));
}
const zn = (e) => e in Qs;
function On(e, a) {
    const t = e.paramName;
    return (te(zn(t), `No analogue for ${t} in gold parameter names`), a.find((e) => Qs[t] === e.paramName));
}
function Hn(e, a) {
    const t = (function (e, a) {
        return [
            ...ae(
                a,
                (e) => Ys.has(e.paramName),
                (e) => En({ freeXp: e }),
            ),
            ...Q(e, (e) => (Us.has(e.paramName) ? En({ xp: e }) : En({ xp: e, freeXp: Vn(e, a) }))),
        ];
    })(e, a);
    return t
        .filter((e) => {
            const a = bn[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.freeXp || e.premium.xp || e.standard.freeXp || e.standard.xp);
        })
        .sort(Cn);
}
function Wn(e, a) {
    const t = (function (e, a) {
        return Q(e, (e) => (Js.has(e.paramName) ? Tn({ credits: e }) : Tn({ credits: e, gold: On(e, a) })));
    })(e, a);
    return t
        .filter((e) => {
            const a = hn[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.credits || e.premium.gold || e.standard.credits || e.standard.gold);
        })
        .sort(Sn);
}
function Mn(e) {
    return ((a = e),
    a.filter((e) => {
        const a = Boolean(e.baseValue || e.premiumValue),
            t = sn.has(e.paramName);
        return a || t;
    })).sort(An);
    var a;
}
function Gn({ xp: e, freeXp: a }) {
    return (function (e, a) {
        return { records: Hn(e.records, a.records), total: Hn(e.total, a.total) };
    })(
        Rn({ earned: e.earned, expenses: e.expenses, total: e.total }),
        Rn({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
function Fn({ credits: e, gold: a }) {
    return (function (e, a) {
        return { records: Wn(e.records, a.records), total: Wn(e.total, a.total) };
    })(
        Rn({ earned: e.earned, expenses: e.expenses, total: e.total }),
        Rn({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
const $n = (e) => e.wotPlusType !== Wt.None,
    [Ln, Xn] = se()(({ observableModel: e }) => {
        const a = {
                ...e.primitives(['hasAnyPremium', 'wotPlusType', 'hasPenalties'], 'additionalBonus'),
                hasWotPlus: e.transform($n, 'additionalBonus'),
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
            t = ne.model(() =>
                Gn({
                    xp: { earned: a.xp.earned.get(), expenses: a.xp.expenses.get(), total: a.xp.total.get() },
                    freeXp: {
                        earned: a.xp.free.earned.get(),
                        expenses: a.xp.free.expenses.get(),
                        total: a.xp.free.total.get(),
                    },
                }),
            ),
            s = ne.model(() =>
                Fn({
                    credits: {
                        earned: a.credits.earned.get(),
                        expenses: a.credits.expenses.get(),
                        total: a.credits.total.get(),
                    },
                    gold: { earned: a.gold.earned.get(), expenses: a.gold.expenses.get(), total: a.gold.total.get() },
                }),
            ),
            n = ne.model(() =>
                (function ({ earned: e, expenses: a, total: t }) {
                    const s = Rn({ earned: e, expenses: a, total: t });
                    return { records: Mn(s.records), total: Mn(s.total) };
                })({
                    earned: a.crystals.earned.get(),
                    expenses: a.crystals.expenses.get(),
                    total: a.crystals.total.get(),
                }),
            );
        return { ...a, computes: { experience: t, credits: s, crystals: n } };
    }, ie),
    Kn = 'ListItem_received_ffdc3010',
    qn = 'ListItem_separator_71797768',
    Un = 'ListItem_label_4ab3c391',
    Yn = 'ListItem_label__withIcon_c2381aa',
    Jn = 'ListItem_labelIcon_acb0da4',
    Zn = L('ListItem', 'ListItem_bcdaabbd'),
    Qn = t.forwardRef(({ labelKey: t, children: s, classNames: n, params: i, labelIconPath: r, ...l }, o) => {
        const c = k.resolve('images');
        return e.jsxs(Zn, {
            ...l,
            ref: o,
            'data-test-id': `${t}`,
            children: [
                e.jsxs('div', {
                    className: a(Un, void 0 !== r && Yn, null == n ? void 0 : n.label),
                    children: [
                        void 0 !== r &&
                            e.jsx('div', {
                                style: { backgroundImage: `url(${c.readOrEmpty(r)})` },
                                className: a(Jn, null == n ? void 0 : n.icon),
                            }),
                        e.jsx(P, { upgradeLegacy: !0, path: t, params: i }),
                    ],
                }),
                e.jsxs('div', { className: Kn, children: [e.jsx('div', { className: qn }), s] }),
            ],
        });
    }),
    ei = 'Record_420804f3',
    ai = 'Record_value_4d088deb',
    ti = 'Record_value__decreasing_8cff45fa',
    si = ({ formatter: t, value: s, modifier: n, currency: i, classNames: l, iconPath: o }) => {
        if (void 0 === s) return null;
        const c = n === on || s < 0;
        return e.jsxs('div', {
            className: a(ei, null == l ? void 0 : l.base),
            children: [
                e.jsxs('div', {
                    className: a(ai, c && ti, null == l ? void 0 : l.value),
                    'data-test-id': `${i}`,
                    children: [
                        r(n)
                            .with(ln, () => e.jsx(P, { path: 'common.multiplierSmall' }))
                            .with(rn, () => e.jsx(P, { path: 'common.multiplierSmall' }))
                            .with(on, () => e.jsx(P, { path: 'common.multiplierSmall' }))
                            .with(dn, () => e.jsx(P, { path: 'common.plus' }))
                            .otherwise(() => null),
                        t(s, i),
                        n === cn && e.jsx(P, { path: 'common.common.percent' }),
                    ],
                }),
                o && e.jsx(q, { width: 24, height: 24, path: o }),
            ],
        });
    },
    ni = 'RecordGroup_65a30ced',
    ii = 'RecordGroup_base__inactive_5fd9f274',
    ri = 'RecordGroup_record_5fd9f274',
    li = 'RecordGroup_record__extinguished_7fdfcea',
    oi = 'RecordGroup_record__first_9121e1b7',
    ci = 'RecordGroup_separator_9f211d97',
    di = 'RecordGroup_separatorBackground_8a447834',
    ui = 'RecordGroup_value_1f34e2e2',
    mi = 'RecordGroup_value__total_126d88a1',
    pi = 'RecordGroup_value__freeXP_931265db';
function _i(e, a) {
    return e !== es || (void 0 !== a && a > 0);
}
function fi({ paramName: e, wotPlusActive: a, hasPenalties: t, value: s }) {
    const n = !s || 0 === s;
    switch (e) {
        case Ls:
            return !1;
        case os:
        case ys:
            return !a || n;
        case ds:
            return !t && n;
        default:
            return n;
    }
}
const vi = ({
        paramName: t,
        xp: s,
        freeXp: n,
        modifier: i,
        inactive: r,
        hasPenalties: l = !1,
        total: o,
        wotPlusActive: c,
    }) => {
        function d(e) {
            switch (t) {
                case Zt:
                    return V.formatReal('woZeroDigits', e);
                case Ls:
                    return V.formatReal('fractional', e);
                default:
                    return V.formatNumber('integral', e);
            }
        }
        return e.jsxs('div', {
            className: a(ni, r && ii),
            children: [
                e.jsx('div', {
                    className: a(ri, oi, fi({ wotPlusActive: c, paramName: t, value: s, hasPenalties: l }) && li),
                    children: e.jsx(si, {
                        value: s,
                        currency: Mt,
                        modifier: _i(t, s) ? i : void 0,
                        formatter: d,
                        classNames: { value: a(ui, o && mi) },
                        iconPath: In(Mt, t),
                    }),
                }),
                void 0 !== n && e.jsx('div', { className: ci, children: e.jsx('div', { className: di }) }),
                e.jsx('div', {
                    className: a(ri, fi({ wotPlusActive: c, paramName: t, value: n, hasPenalties: l }) && li),
                    children: e.jsx(si, {
                        value: n,
                        currency: Gt,
                        modifier: _i(t, n) ? i : void 0,
                        formatter: d,
                        classNames: { value: a(ui, pi, o && mi) },
                        iconPath: In(Gt, t),
                    }),
                }),
            ],
        });
    },
    bi = 'Item_groups_a1f0c2a5',
    hi = 'Item_label_7521a1d4',
    gi = 'Item_label__highlighted_36e62867',
    yi = 'Item_label__gold_49ec59ab',
    xi = {
        [Ut]: 'title.base',
        [us]: 'title.base',
        [Yt]: 'noPenalty',
        [ms]: 'noPenalty',
        [Jt]: 'friendlyFirePenalty',
        [Zt]: 'igrBonus.simpleLabel',
        [ps]: 'igrBonus.simpleLabel',
        [Qt]: 'firstWin',
        [_s]: 'firstWin',
        [es]: 'manageableXpBonus',
        [fs]: 'manageableXpBonus',
        [as]: 'boosters',
        [vs]: 'boosters',
        [ts]: 'tacticalTraining',
        [bs]: 'militaryManeuvers',
        [ss]: 'event',
        [hs]: 'event',
        [ns]: 'referralBonus.fullLabel',
        [is]: 'premiumVehicleXP',
        [gs]: 'premiumVehicleXP',
        [rs]: 'squadBonus',
        [ls]: 'squadXPPenalty',
        [Ls]: 'aogasFactor',
        [os]: 'wotPlusBonus',
        [ys]: 'wotPlusBonus',
        [cs]: 'wotPlusProBoost',
        [xs]: 'wotPlusProBoost',
        [Xs]: 'fairPlayViolation.deserter',
        [qs]: 'fairPlayViolation.suicide',
        [Ks]: 'fairPlayViolation.afk',
        [ds]: 'total',
        [Ns]: 'total',
        originalAlternative: 'xpRecordSimple',
    },
    Ni = { [os]: 'subscription.wot_plus_32x32', [ys]: 'subscription.wot_plus_32x32' },
    ji = {
        [os]: 'subscription.wot_plus_pro_32x32',
        [ys]: 'subscription.wot_plus_pro_32x32',
        [cs]: 'subscription.wot_plus_pro_32x32',
        [xs]: 'subscription.wot_plus_pro_32x32',
    },
    wi = { [Wt.None]: void 0, [Wt.Core]: Ni, [Wt.Pro]: ji },
    Ii = new Set([os, ys, cs, xs]),
    Ai = () =>
        e.jsx('span', { className: gi, children: e.jsx(P, { path: 'battle_results.details.calculations.maximum' }) }),
    Ci = l(
        ({
            record: { paramName: t, premium: s, standard: n, modifier: i, recordsItemsDetails: r },
            total: l,
            ...o
        }) => {
            var c;
            const { model: d } = Xn(),
                u = d.hasAnyPremium.get(),
                m = d.hasWotPlus.get(),
                p = d.wotPlusType.get(),
                _ = d.hasPenalties.get();
            if (!(t in xi)) return null;
            const f = '1' === (null == r ? void 0 : r.isHighScope),
                v = f ? xi.originalAlternative : xi[t],
                b = null == r ? void 0 : r.referralFactor,
                h = null == (c = wi[p]) ? void 0 : c[t];
            return e.jsx(Qn, {
                ...o,
                labelIconPath: h,
                labelKey: `battle_results.details.calculations.${v}`,
                params: { ...(b && { bonusFactor: mn(b) }), ...(f && { maximum: e.jsx(Ai, {}) }) },
                classNames: { label: a(hi, Ii.has(t) && yi) },
                children: e.jsxs('div', {
                    className: bi,
                    children: [
                        e.jsx(vi, {
                            ...n,
                            paramName: t,
                            modifier: i,
                            inactive: u,
                            total: l,
                            hasPenalties: _,
                            wotPlusActive: m,
                        }),
                        e.jsx(vi, {
                            ...s,
                            paramName: t,
                            modifier: i,
                            inactive: !u,
                            total: l,
                            hasPenalties: _,
                            wotPlusActive: m,
                        }),
                    ],
                }),
            });
        },
    ),
    Si = 'IncomeStatement_560dd244',
    Bi = 'IncomeStatement_base__scroll_fb9f1475',
    Pi = 'IncomeStatement_item_48b34a63',
    Ri = l(
        t.forwardRef(({ className: t, scrollable: s, ...n }, i) => {
            const { model: r } = Xn(),
                l = r.computes.experience();
            return e.jsx(zt, {
                ...n,
                ref: i,
                className: a(Si, s && Bi, t),
                scrollable: s,
                children: Q(l.records, (a) => e.jsx(Ci, { record: a, className: Pi }, a.paramName)),
            });
        }),
    ),
    ki = 'Total_item_a8580361',
    Ei = 'Total_divider_1de1ca28',
    Ti = 'Total_dividerImage_ab06168d',
    Di = L('ExperienceTotal', 'Total_19236d49'),
    Vi = l(
        t.forwardRef((a, t) => {
            const { model: s } = Xn(),
                n = s.computes.experience();
            return e.jsxs(Di, {
                ...a,
                ref: t,
                children: [
                    e.jsx(xt, { classNames: { base: Ei, image: Ti } }),
                    n.total.map((a) => e.jsx(Ci, { record: a, className: ki, total: !0 }, a.paramName)),
                ],
            });
        }),
    ),
    zi = 'Experience_a014c8c',
    Oi = 'Experience_base__scroll_f75d07c6',
    Hi = L('Experience'),
    Wi = t.forwardRef(({ scrollable: t, className: s, ...n }, i) =>
        e.jsx(Hi, { ...n, ref: i, className: a(zi, t && Oi, s) }),
    );
((Wi.Header = St), (Wi.Item = Ci), (Wi.Total = Vi), (Wi.IncomeStatement = Ri));
const Mi = 'Header_cbd845ec',
    Gi = 'Header_content_a63fb46c',
    Fi = 'Header_title_7b852a7',
    $i = 'Header_title__active_e5dd0f77',
    Li = 'Header_title__premium_2c23921f',
    Xi = 'Header_icon_3b4dc587',
    Ki = l(
        t.forwardRef(({ className: t, ...s }, n) => {
            const { model: i } = Xn(),
                r = i.hasAnyPremium.get();
            return e.jsx(Ct, {
                ...s,
                ref: n,
                className: a(Mi, t),
                title: 'battle_results.details.credits',
                children: e.jsxs('div', {
                    className: Gi,
                    children: [
                        e.jsx('div', {
                            className: a(Fi, !r && $i),
                            children: e.jsx(P, { path: 'battle_results.common.details.noPremTitle' }),
                        }),
                        e.jsxs('div', {
                            className: a(Fi, r && $i, Li),
                            children: [
                                e.jsx('div', {
                                    className: Xi,
                                    children: e.jsx(q, {
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
    qi = 'RecordGroup_65a30ced',
    Ui = 'RecordGroup_base__inactive_5fd9f274',
    Yi = 'RecordGroup_record_5fd9f274',
    Ji = 'RecordGroup_record__extinguished_7fdfcea',
    Zi = 'RecordGroup_record__first_36c2aa71',
    Qi = 'RecordGroup_separator_9f211d97',
    er = 'RecordGroup_separatorBackground_8a447834',
    ar = 'RecordGroup_value_9253748c',
    tr = 'RecordGroup_value__total_126d88a1',
    sr = 'RecordGroup_value__gold_d7bd74ba';
function nr({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case Ls:
            return !1;
        case Rs:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const ir = ({ credits: t, gold: s, modifier: n, inactive: i = !1, total: r, paramName: l, wotPlusActive: o }) => {
        function c(e, a) {
            return l === Ls ? V.formatReal('fractional', e) : V.formatNumber(a === $t ? 'gold' : 'integral', e);
        }
        return e.jsxs('div', {
            className: a(qi, i && Ui),
            children: [
                e.jsx('div', {
                    className: a(Yi, Zi, nr({ paramName: l, wotPlusActive: o, value: t }) && Ji),
                    children: e.jsx(si, {
                        formatter: c,
                        value: t,
                        currency: Ft,
                        modifier: n,
                        classNames: { value: a(ar, r && tr) },
                        iconPath: In(Ft, l),
                    }),
                }),
                void 0 !== s && e.jsx('div', { className: Qi, children: e.jsx('div', { className: er }) }),
                e.jsx('div', {
                    className: a(Yi, 0 === s && Ji),
                    children: e.jsx(si, {
                        value: s,
                        currency: $t,
                        modifier: n,
                        classNames: { value: a(ar, sr, r && tr) },
                        formatter: c,
                        iconPath: In($t, l),
                    }),
                }),
            ],
        });
    },
    rr = 'Item_groups_a1f0c2a5',
    lr = 'Item_label_7521a1d4',
    or = 'Item_label__gold_49ec59ab',
    cr = {
        [js]: 'title.base',
        [ws]: 'squadBonus',
        [Is]: 'noPenalty',
        [As]: 'boosters',
        [Ss]: 'battlePayments',
        [Bs]: 'event',
        [Ms]: 'event',
        [Ps]: 'referralBonus.fullLabel',
        [Rs]: 'wotPlusBonus',
        [ks]: 'wotPlusProBoost',
        [Xs]: 'fairPlayViolation.deserter',
        [qs]: 'fairPlayViolation.suicide',
        [Ks]: 'fairPlayViolation.afk',
        [Es]: 'friendlyFirePenalty',
        [Ts]: 'friendlyFireCompensation',
        [Ls]: 'aogasFactor',
        [Hs]: 'intermediateTotal',
        [Fs]: 'intermediateTotal',
        [Vs]: 'autoRepair',
        [zs]: 'autoLoad',
        [Os]: 'autoEquip',
        [Ws]: 'total',
        [$s]: 'total',
        [Ds]: 'piggyBankInfo',
        [Gs]: 'piggyBankInfo',
        [Cs]: 'petCredits.fullLabel',
    },
    dr = { [Rs]: 'subscription.wot_plus_pro_32x32', [ks]: 'subscription.wot_plus_pro_32x32' },
    ur = { [Rs]: 'subscription.wot_plus_32x32' },
    mr = { [Wt.None]: void 0, [Wt.Core]: ur, [Wt.Pro]: dr },
    pr = [Rs, ks],
    _r = l(({ record: t, total: s, ...n }) => {
        var i;
        const { model: r } = Xn(),
            l = r.hasAnyPremium.get(),
            o = r.hasWotPlus.get(),
            { paramName: c, premium: d, standard: u, modifier: m, recordsItemsDetails: p } = t;
        if (!(c in cr)) return null;
        const _ = null == p ? void 0 : p.referralFactor,
            f = null == p ? void 0 : p.bonusFactor,
            v = cr[c],
            b = yn[Ws](t, o),
            h = r.wotPlusType.get(),
            g = null == (i = mr[h]) ? void 0 : i[c];
        return e.jsx(Qn, {
            ...n,
            labelIconPath: g,
            labelKey: `battle_results.details.calculations.${v}`,
            classNames: { label: a(lr, pr.includes(c) && or) },
            params: { ...(_ && { bonusFactor: mn(_) }), ...(f && { bonusFactor: pn(f) }) },
            children: e.jsxs('div', {
                className: rr,
                children: [
                    e.jsx(ir, {
                        paramName: c,
                        credits: u.credits,
                        gold: b ? u.gold : void 0,
                        modifier: m,
                        inactive: l,
                        total: s,
                        wotPlusActive: o,
                    }),
                    e.jsx(ir, {
                        paramName: c,
                        credits: d.credits,
                        gold: b ? d.gold : void 0,
                        modifier: m,
                        inactive: !l,
                        total: s,
                        wotPlusActive: o,
                    }),
                ],
            }),
        });
    }),
    fr = 'IncomeStatement_560dd244',
    vr = 'IncomeStatement_base__scroll_fb9f1475',
    br = 'IncomeStatement_item_48b34a63',
    hr = l(
        t.forwardRef(({ className: t, scrollable: s, ...n }, i) => {
            const { model: r } = Xn(),
                l = r.computes.credits();
            return e.jsx(zt, {
                ...n,
                ref: i,
                className: a(fr, s && vr, t),
                scrollable: s,
                children: Q(l.records, (a) => e.jsx(_r, { record: a, className: br }, a.paramName)),
            });
        }),
    ),
    gr = 'Total_item_de53c8b0',
    yr = 'Total_divider_1de1ca28',
    xr = 'Total_dividerImage_ab06168d',
    Nr = L('CreditsTotal', 'Total_19236d49'),
    jr = l(
        t.forwardRef((a, t) => {
            const { model: s } = Xn(),
                n = s.computes.credits();
            return e.jsxs(Nr, {
                ...a,
                ref: t,
                children: [
                    e.jsx(xt, { classNames: { base: yr, image: xr } }),
                    n.total.map((a) => e.jsx(_r, { record: a, className: gr, total: !0 }, a.paramName)),
                ],
            });
        }),
    ),
    wr = 'Credits_68f91d81',
    Ir = 'Credits_base__scroll_759f08f3',
    Ar = L('Credits'),
    Cr = t.forwardRef(({ scrollable: t, className: s, ...n }, i) =>
        e.jsx(Ar, { ...n, ref: i, className: a(wr, t && Ir, s) }),
    );
((Cr.Header = Ki), (Cr.Item = _r), (Cr.Total = jr), (Cr.IncomeStatement = hr));
const Sr = 'Item_currencyValue_81f5b9fb',
    Br = 'Item_currencyValue__total_a7596c8e',
    Pr = 'Item_currencyValue__negative_5e98369f',
    Rr = 'Item_label_5d6964d6',
    kr = {
        [Lt]: 'battle_results.details.calculations.crystal.total',
        [Xt]: 'battle_results.details.calculations.crystal.events',
        [Kt]: 'battle_results.details.calculations.autoBoosters',
        [qt]: 'battle_results.details.calculations.total',
    },
    Er = ({ record: t, total: s, ...n }) => {
        const { paramName: i, baseValue: r } = t;
        return i in kr
            ? e.jsx(Qn, {
                  ...n,
                  labelKey: kr[i],
                  classNames: { label: Rr, ...n.classNames },
                  children: e.jsx(re, {
                      reverse: !0,
                      type: 'crystal',
                      size: le.small,
                      children: e.jsx('div', {
                          className: a(Sr, r < 0 && Pr, s && Br),
                          children: V.formatNumber('integral', r),
                      }),
                  }),
              })
            : (console.error(`Parameter name "${i} is not valid for bonds`), null);
    },
    Tr = 'IncomeStatement_item_48b34a63',
    Dr = L('BondsIncomeStatement'),
    Vr = l(
        t.forwardRef((a, t) => {
            const { model: s } = Xn(),
                n = s.computes.crystals();
            return e.jsx(Dr, {
                ...a,
                ref: t,
                children: n.records.map((a) => e.jsx(Er, { record: a, className: Tr }, a.paramName)),
            });
        }),
    ),
    zr = 'Total_item_a8580361',
    Or = 'Total_item__extinguished_4be8343f',
    Hr = 'Total_divider_1de1ca28',
    Wr = 'Total_dividerImage_ab06168d',
    Mr = L('BondsTotal', 'Total_120fb0c4'),
    Gr = l(
        t.forwardRef((t, s) => {
            const { model: n } = Xn(),
                i = n.computes.crystals();
            return e.jsxs(Mr, {
                ...t,
                ref: s,
                children: [
                    e.jsx(xt, { classNames: { base: Hr, image: Wr } }),
                    i.total.map((t) =>
                        e.jsx(
                            Er,
                            { total: !0, record: t, className: a(zr, (!t.baseValue || 0 === t.baseValue) && Or) },
                            t.paramName,
                        ),
                    ),
                ],
            });
        }),
    ),
    Fr = t.forwardRef((a, t) => e.jsx(Ct, { ...a, title: 'battle_results.details.crystal', ref: t })),
    $r = L('Bonds');
(($r.Header = Fr), ($r.Item = Er), ($r.Total = Gr), ($r.IncomeStatement = Vr));
const Lr = 'FinancialReport_content_99bf970f',
    Xr = 'FinancialReport_leftContent_75c21204',
    Kr = 'FinancialReport_bonds_cc81cbc0',
    qr = 'FinancialReport_headerContent_aad9188f',
    Ur = 'FinancialReport_experience_7219d4d3',
    Yr = 'FinancialReport_credits_7712b0c',
    Jr = 'FinancialReport_header_d56ebc61',
    Zr = 'FinancialReport_total_bdf3e42b',
    Qr = L('FinancialReport', 'FinancialReport_c3cc562a'),
    el = ({ className: a }) => {
        const [s, n] = t.useState({ credits: !1, experience: !1 }),
            i = t.useRef(null),
            r = t.useRef(null),
            l = t.useRef(null),
            o = oe({ margin: 18 }, { medium: { margin: 19 }, large: { margin: 16 }, extraLarge: { margin: 30 } }),
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
            ce(i, c),
            e.jsx(Ln, {
                children: e.jsx(Qr, {
                    className: a,
                    children: e.jsxs('div', {
                        className: Lr,
                        children: [
                            e.jsxs('div', {
                                className: Xr,
                                ref: i,
                                children: [
                                    e.jsxs(Cr, {
                                        ref: r,
                                        scrollable: s.credits,
                                        className: Yr,
                                        children: [
                                            e.jsx(Cr.Header, { className: Jr }),
                                            e.jsx(Cr.IncomeStatement, { scrollable: s.credits }),
                                            e.jsx(Cr.Total, { className: Zr }),
                                        ],
                                    }),
                                    e.jsxs(Wi, {
                                        ref: l,
                                        scrollable: s.experience,
                                        className: Ur,
                                        children: [
                                            e.jsx(Wi.Header, { className: Jr, classNames: { content: qr } }),
                                            e.jsx(Wi.IncomeStatement, { scrollable: s.experience }),
                                            e.jsx(Wi.Total, { className: Zr }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs($r, {
                                className: Kr,
                                children: [
                                    e.jsx($r.Header, { className: Jr, classNames: { content: qr } }),
                                    e.jsx($r.IncomeStatement, {}),
                                    e.jsx($r.Total, { className: Zr }),
                                ],
                            }),
                        ],
                    }),
                }),
            })
        );
    };
var al = ((e) => ((e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Active = ''), e))(al || {});
const tl = o({
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
    sl = o({ conditionType: c() }),
    nl = o({
        ...sl.entries,
        titleData: c(),
        descrData: c(),
        iconKey: c(),
        current: u(),
        total: u(),
        earned: u(),
        progressType: c(),
        sortKey: c(),
    }),
    il = o({ ...sl.entries, items: m(p([nl, _(() => il)])) }),
    rl = o({ id: c(), groupId: c(), type: u(), title: c(), description: c(), decoration: u(), status: d(al) });
o({ ...rl.entries, bonuses: m(tl), preBattleCondition: il, bonusCondition: il, postBattleCondition: il });
const ll = o({
        animated: f(v()),
        completed: f(v()),
        component: h((e) => de(e)),
        categoryOrder: u(),
        notifications: f(m(o({ id: c(), item: h((e) => t.isValidElement(e)) }))),
    }),
    ol = p([o({ status: b('loaded'), result: ll }), o({ status: b('loading') })]),
    cl = k.resolve('strings'),
    dl = ['huntsman', 'medalGore', 'medalStark'],
    ul = {
        markOfMastery: 'markOfMastery',
        marksOnGun: 'marksOnGun',
        epic: 'epic',
        specialAchievements: 'specialAchievements',
        right: 'right',
        left: 'left',
        other: 'other',
    },
    ml = [ul.markOfMastery, ul.marksOnGun, ul.epic, ul.specialAchievements, ul.right, ul.left, ul.other];
function pl(e) {
    return e.groupID === ul.markOfMastery
        ? ul.markOfMastery
        : e.groupID === ul.marksOnGun
          ? ul.marksOnGun
          : e.epic
            ? ul.epic
            : dl.includes(e.name)
              ? ul.specialAchievements
              : e.groupID === ul.right
                ? ul.right
                : e.groupID === ul.left
                  ? ul.left
                  : (console.error(`Achievement ${e.name} with a group ${e.groupID} is not detected`), ul.other);
}
function _l(e) {
    return ue(e, (e, a) => {
        const t = pl(e),
            s = pl(a),
            n = ml.indexOf(t),
            i = ml.indexOf(s);
        return t !== s
            ? n - i
            : (function (e, a) {
                  const t = cl.readOrEmpty(`achievements.${e.name}`),
                      s = cl.readOrEmpty(`achievements.${a.name}`);
                  return t.localeCompare(s);
              })(e, a);
    });
}
const fl = 'default',
    vl = 'hover',
    bl = 'extinct';
function hl(e, a) {
    return void 0 === a ? fl : a === e ? vl : bl;
}
const gl = { marksOnGun1: '1_mark', marksOnGun2: '2_marks', marksOnGun3: '3_marks' };
function yl({ iconName: e, groupID: a, vehicleNation: t }) {
    return 'marksOnGun' === a ? `marksOnGun.x240x240.${t}_${gl[e]}` : `achievement.x240x240.${e}`;
}
const xl = 'marks',
    Nl = 'epicAndHeroic',
    jl = 'others',
    wl = ['bombardier', 'medalAntiSpgFire', 'kamikaze', 'raider', 'medalMonolith', 'medalCoolBlood'];
const Il = 0;
var Al = ((e) => (
        (e.Squad = 'squad'),
        (e.Player = 'player'),
        (e.Damage = 'damage'),
        (e.Frag = 'frag'),
        (e.Xp = 'xp'),
        (e.Vehicle = 'tank'),
        (e.Medal = 'medal'),
        e
    ))(Al || {}),
    Cl = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(Cl || {});
const Sl = {
        plusInfo: Ht.PlusInfo,
        premiumInfo: Ht.PremiumInfo,
        premiumAdvertising: Ht.PremiumAdvertising,
        premiumBonus: Ht.PremiumBonus,
        premiumEarnings: Ht.PremiumEarnings,
        plusEarnings: Ht.PlusEarnings,
        plusYouRock: Ht.PlusYouRock,
    },
    Bl = Object.values(Sl);
const Pl = 'premiumInfo',
    Rl = 'applyBonus',
    kl = 'appliedBonus',
    El = 'isNotVictory',
    Tl = 'requiredRecentBattleAndVehicle',
    Dl = 'invalidBattleType',
    Vl = 'noVehicle',
    zl = 'fasterEducationCrewNotActive',
    Ol = 'fasterEducationCrewActive',
    Hl = 'noCrew',
    Wl = 'premiumEarnings',
    Ml = 'creditsAdvertising',
    Gl = 'premiumAdvertising',
    Fl = 'squadAdvertising',
    $l = 'bonusAdvertising',
    Ll = 'questsAdvertising',
    Xl = 'plusInfo',
    Kl = 'plusEarnings',
    ql = 'plusYouRock',
    Ul = { credits: Ml, premium: Gl, squad: Fl, bonus: $l, quests: Ll },
    Yl = [Ul.credits, Ul.premium, Ul.squad, Ul.bonus, Ul.quests];
const Jl = {
        [Ot.IsApplied]: kl,
        [Ot.DeprecatedResults]: Tl,
        [Ot.IsNotVictory]: El,
        [Ot.InvalidBattleType]: Dl,
        [Ot.NoVehicle]: Vl,
        [Ot.FasterEducationCrewActive]: Ol,
        [Ot.FasterEducationCrewNotActive]: zl,
        [Ot.NoCrew]: Hl,
    },
    Zl = {
        [Sl.plusInfo]: { define: () => Xl },
        [Sl.premiumInfo]: { define: () => Pl },
        [Sl.premiumAdvertising]: {
            define: ({ supportedAdvertisements: e, usedAdvertisements: a }) => {
                const t = e.filter((e) => !1 === a.includes(e))[0] ?? e[0];
                return (
                    te(
                        void 0 !== t,
                        'advertisingState is not recognized. Check please supportedAdvertisements state. It is not possible to have empty supportedAdvertisements array in case if the widget in the premiumAdvertising state',
                    ),
                    t
                );
            },
        },
        [Sl.premiumBonus]: {
            define: ({ restriction: e }) => (e !== Ot.NoRestriction && e !== Ot.NotApplyingError ? Jl[e] : Rl),
        },
        [Sl.premiumEarnings]: { define: () => Wl },
        [Sl.plusEarnings]: { define: () => Kl },
        [Sl.plusYouRock]: { define: () => ql },
    };
function Ql(e) {
    return function (a) {
        return e(g(() => y(a)));
    };
}
const eo = '',
    ao = [Ul.premium, Ul.squad, Ul.credits],
    to = ['ctf30x30', 'domination30x30'];
var so = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
        so || {},
    ),
    no = ((e) => (
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
    ))(no || {});
function io(e) {
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
const ro = [ds, Hs];
function lo(e, a) {
    const { recordsItemsDetails: t, baseValue: s, premiumValue: n, currencyType: i, paramName: r } = Bn(e),
        l = a ? n : s,
        o = l >= 0 ? l : 0;
    return { paramName: r, type: i, visibleIfZero: ro.includes(r) || 'True' === t.isAvailable, value: o };
}
function oo(e) {
    return {
        bonusMultiplier: e.bonusMultiplier,
        bonusXpDiff: e.xpDiff,
        leftBonusAttempts: e.leftBonusCount,
        creditsThreshold: e.creditsThreshold,
        dailyAppliedAdditionalXP: e.dailyAppliedAdditionalXP,
        restriction: e.restriction,
        bonusState: e.state,
        wotPlusType: e.wotPlusType,
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
function co(e) {
    return {
        groupID: e.groupID,
        iconName: e.iconName,
        name: e.name,
        epic: e.isEpic,
        tooltipArgs: e.tooltipArgs,
        tooltipId: e.tooltipId,
    };
}
function uo(e) {
    return { labelKey: e.labelKey, paramValueType: e.paramValueType, value: Q(e.value, (e) => e) };
}
function mo(e) {
    return {
        ...uo({ label: e.label, labelKey: e.labelKey, paramValueType: e.paramValueType, value: Q(e.value, (e) => e) }),
        details: Q(e.details, (e) => uo(e)),
    };
}
function po(e) {
    var a;
    const t = null == (a = me(e.detailedStatistics, (e) => e.labelKey === no.TeamHitsDamage)) ? void 0 : a.value,
        s = void 0 !== t ? pe(t, 0) : 0,
        n = e.efficiencyValues.kills - (s ?? 0);
    return {
        personal: e.isPersonal,
        squadIndex: e.squadIndex,
        achievements: Q(e.achievements, co),
        account: fe(e.userNames),
        userStatus: ((o = e.userStatus), { abandonBattle: o.isLeftBattle, deathReason: o.deathReason }),
        killer: fe(e.userStatus.killer),
        vehicle:
            ((r = e.vehicle.vehicleCD),
            (l = e.vehicle.techName),
            0 === r && '' === l ? void 0 : { ..._e(e.vehicle), longName: e.vehicle.longName }),
        efficiencyValues: {
            substractedAlliesKills: n,
            ...((i = e.efficiencyValues), { damageDealt: i.damageDealt, kills: i.kills, earnedXp: i.earnedXp }),
        },
        detailedStatistics: Q(e.detailedStatistics, mo),
        databaseId: e.databaseID,
    };
    var i, r, l, o;
}
const _o = {
    killed: 0,
    spotted: 0,
    criticalDamage: 0,
    damageDealt: { value: 0, count: 0 },
    damageAssisted: 0,
    damageAssistedStun: { value: 0, count: 0 },
    damageBlockedByArmor: { value: 0, count: 0 },
};
const fo = { allies: 'allies', enemies: 'enemies' },
    vo = ['dead0', 'dead1', 'dead2', 'dead3', 'dead5', 'dead7'],
    bo = { personal: 'personal', alien: 'alien' },
    ho = 0;
function go(e, a, t) {
    return t === ho ? null : a === t && e === fo.allies ? bo.personal : bo.alien;
}
function yo({ anonymizer: e, personal: a, platoonType: t }) {
    return !(a || !e) && (t === bo.alien || null === t);
}
const [xo, No] = se()(
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
                    battleInfo: a.transform(io, 'battleInfo'),
                    additionalBonus: a.transform(oo, 'additionalBonus'),
                    allPlayersDictionary: N.box({}),
                    personalEfficiency: {
                        opened: N.box(!1),
                        achievements: a.transform((e) => _l(Q(e, co)), 'achievements'),
                        statistics: { details: N.box([]), capturePoints: N.box(0), droppedCapturePoints: N.box(0) },
                    },
                    teamsStatistic: {
                        allies: N.box([]),
                        enemies: N.box([]),
                        sorting: N.box({ column: Al.Vehicle, sortDirection: Cl.Desc }),
                        selectedRow: N.box(),
                    },
                    user: { names: N.box(), status: N.box() },
                    playerSatisfaction: a.object('playerSatisfaction'),
                    pathToPlugins: a.dict('pathToPlugins'),
                    notificationList: N.box([]),
                };
            (Ql(t)(() => {
                const e = {};
                (n.teamsStatistic.allies.set(
                    Q(s.teamsStatistic.allies.get(), (a) => {
                        const t = po(a);
                        return ((e[t.account.username] = t), t);
                    }),
                ),
                    n.teamsStatistic.enemies.set(
                        Q(s.teamsStatistic.enemies.get(), (a) => {
                            const t = po(a);
                            return ((e[t.account.username] = t), t);
                        }),
                    ));
                const a = n.allPlayersDictionary.get();
                n.allPlayersDictionary.set({ ...a, ...e });
            }),
                Ql(t)(() => {
                    return n.teamsStatistic.sorting.set(
                        ((e = s.teamsStatistic.sortingColumn.get()),
                        (a = s.teamsStatistic.sortingOrder.get()),
                        { column: e, sortDirection: a }),
                    );
                    var e, a;
                }),
                Ql(t)(() => {
                    (n.personalEfficiency.statistics.capturePoints.set(s.personalEffiency.capturePoints.get()),
                        n.personalEfficiency.statistics.droppedCapturePoints.set(
                            s.personalEffiency.droppedCapturePoints.get(),
                        ));
                }));
            const i = ne.structural(() =>
                    (function ({ anyPremium: e, credits: a, crystals: t, gold: s, xp: n }) {
                        const i = me(a, (e) => e.paramName === Hs),
                            r = me(s, (e) => e.paramName === $s),
                            l = me(n, (e) => e.paramName === ds),
                            o = me(t, (e) => e.paramName === qt),
                            c = [];
                        return (
                            i && c.push(lo(i, e)),
                            r && c.push(lo(r, e)),
                            l && c.push(lo(l, e)),
                            o && c.push(lo(o, e)),
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
                r = ne.structural(() => n.pathToPlugins.values().map((e) => ({ url: e.get() }))),
                l = ne.shallow(() => {
                    const e = me(n.teamsStatistic.allies.get(), (e) => e.personal);
                    var a;
                    return (
                        te(void 0 !== e, 'Personal info is not found'),
                        te((a = e).personal && void 0 !== a.vehicle, 'There is no vehicle data in the personal info'),
                        e
                    );
                }),
                o = ne.shallow(() => {
                    const e = n.teamsStatistic.selectedRow.get();
                    if (void 0 === e) return;
                    const a = (e.team === fo.allies ? n.teamsStatistic.allies : n.teamsStatistic.enemies).get();
                    return me(a, (a) => a.account.username === e.username);
                }),
                c = ne.shallow(() => {
                    const e = n.allPlayersDictionary.get();
                    return {
                        assault: n.personalEfficiency.statistics.capturePoints.get(),
                        defend: n.personalEfficiency.statistics.droppedCapturePoints.get(),
                        rows: ee(
                            s.personalEffiency.details.get(),
                            (a, t) => {
                                const s = (function (e) {
                                    return ee(
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
                                if (((n = s), ve.structural(n, _o))) return a;
                                var n;
                                const i = e[t.userName],
                                    r = (null == i ? void 0 : i.account) ?? {
                                        username: t.userName,
                                        fakeUsername: t.userName,
                                        clanAbbreviation: '',
                                        anonymizer: !1,
                                        igrType: Il,
                                        teamKiller: !1,
                                        killed: !1,
                                        badge: eo,
                                        suffixBadge: eo,
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
                d = ne.shallow(() => {
                    const e = me(s.xp.total.get(), (e) => 'totalXP' === e.paramName);
                    te(void 0 !== e, 'totalXP record is not found in the financial report');
                    const a = me(s.credits.total.get(), (e) => 'totalCredits' === e.paramName),
                        t = me(s.credits.total.get(), (e) => 'intermediateTotalCredits' === e.paramName);
                    return (
                        te(void 0 !== a, 'totalCredits record is not found in the financial report'),
                        te(void 0 !== t, 'intermediateTotalCredits record is not found in the financial report'),
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
                u = ne.primitive(() => {
                    const e = n.personalEfficiency.achievements.get();
                    return be(e, (e) => e.epic || Aa.includes(e.groupID));
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
    jo = 'NoProgress_e30a0572',
    wo = 'NoProgress_header_fd4fa20b',
    Io = 'NoProgress_description_965e21c0',
    Ao = l(function () {
        const a = k.resolve('strings'),
            { controls: t } = No();
        return e.jsxs('div', {
            className: jo,
            children: [
                e.jsx('div', {
                    className: wo,
                    children: a.readOrEmpty('battle_results.common.missions.noProgress.header'),
                }),
                e.jsx('div', {
                    className: Io,
                    children: a.readOrEmpty('battle_results.common.missions.noProgress.description'),
                }),
                e.jsx(he, {
                    theme: he.themes.secondary,
                    onClick: t.openMissions,
                    children: a.readOrEmpty('battle_results.common.missions.noProgress.button'),
                }),
            ],
        });
    });
const Co = 'MissionsProgress_ca7ca547',
    So = 'MissionsProgress_content_b1e9d53b',
    Bo = 'MissionsProgress_verticalBar_a9f04f7f',
    Po = O.cubicBezier(0.23, 0, 0.57, 1),
    Ro = L('MissionsProgress', Co);
function ko(e) {
    return e.reduce((e, a) => (a.result.notifications && e.push(...a.result.notifications), e), []);
}
function Eo(e) {
    return ae(
        e,
        (e) => Boolean(e.result.animated),
        (e, a) => a,
    );
}
const To = l(function ({ className: a }) {
        const { model: s, controls: i } = No(),
            { active: r } = K(),
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
                                    ae(
                                        e,
                                        (e) => !(e.url in a || e.url in i.current),
                                        async (e) => {
                                            ((i.current[e.url] = !0),
                                                s((a) => ({ ...a, [e.url]: { status: 'loading' } })));
                                            const a = await ge(e.url);
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
                            const t = I(ol, a);
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
                () => ({ notifications: ko(_), animatablePluginIndexes: Eo(_) }),
                [_],
            );
        H(() => m((e) => e + 1), u > -1 && u < v.length ? 600 : void 0);
        const [b, h] = w(() => ({ from: { opacity: 0 }, config: { duration: 660, easing: Po }, onRest: () => m(0) }));
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
            e.jsx(Ro, {
                className: a,
                children: e.jsx(n.div, {
                    style: b,
                    className: So,
                    children: ye(p)
                        ? e.jsx(Ao, {})
                        : e.jsxs(U, {
                              children: [
                                  e.jsx(xe, {
                                      children: Q(Object.entries(_), ([a, t], s) => {
                                          const n = t.result.component;
                                          return e.jsx(
                                              Ne,
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
                                  e.jsx(Y, { classNames: { base: Bo } }),
                              ],
                          }),
                }),
            })
        );
    }),
    Do = t.createContext(null);
function Vo() {
    const e = t.useContext(Do);
    if (null === e) throw new Error('You can use the achievements hooks only with the Achievements component');
    return e;
}
const zo = { x: 50, y: -30, scale: 1.2, opacity: 0 };
function Oo({ children: a, achievements: s, springsProps: n, vehicleNation: i }) {
    const [r, l] = t.useState(new Set()),
        [o, c] = t.useState(void 0),
        [d, u] = A(s.length, () => ({ from: { ...zo, ...(null == n ? void 0 : n.from) }, ...n }), [s.length, n]),
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
    return e.jsx(Do.Provider, { value: m, children: a });
}
const Ho = {
        base: 'Achievements_ee9c0189',
        animatedAchievement: 'Achievements_animatedAchievement_4c71d33',
        achievement: 'Achievements_achievement_b41909e2',
        achievement__extinct: 'Achievements_achievement__extinct_19551569',
        achievementIcon: 'Achievements_achievementIcon_e83ea27d',
    },
    Wo = t.forwardRef(function ({ achievement: s, index: n, width: i, height: r, classNames: l }, o) {
        const c = je({
                args: t.useMemo(
                    () => ({ tooltipId: s.tooltipId, tooltipArgs: s.tooltipArgs }),
                    [s.tooltipId, s.tooltipArgs],
                ),
            }),
            d = M(),
            { hoverIndex: u, setHoverIndex: m, vehicleNation: p } = Vo();
        return e.jsx('div', {
            ...c,
            ref: o,
            className: a(Ho.achievement, Ho[`achievement__${hl(n, u)}`], null == l ? void 0 : l.achievement),
            onMouseEnter: function (e) {
                (d.play('mouse-enter', { original: e, target: 'achievements:achievement' }), c.onMouseEnter(e), m(n));
            },
            onMouseLeave: () => {
                (c.onMouseLeave(), m(void 0));
            },
            children: e.jsx(
                q,
                {
                    width: i,
                    height: r,
                    path: yl({ groupID: s.groupID, iconName: s.iconName, vehicleNation: p }),
                    className: a(Ho.achievementIcon, null == l ? void 0 : l.icon),
                },
                s.iconName,
            ),
        });
    }),
    Mo = L('Rewards', Ho.base);
t.memo(function ({ width: a, height: t, classNames: s, className: n }) {
    const { achievements: i } = Vo();
    return e.jsx(Mo, {
        className: n,
        children: Q(i, (n, i) => e.jsx(Wo, { width: a, height: t, index: i, achievement: n, classNames: s }, n.name)),
    });
});
const Go = {
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
    Fo = t.memo(function ({
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
            { springs: _, achievements: f, completedAnimationIndexes: v, hoverIndex: b } = Vo();
        return (
            we(() => {
                if (null === p.current) return;
                const e = p.current.offsetWidth + Math.floor((r / s.length) * 2),
                    a = Ie(d);
                m(l, e < a ? Math.floor((a - e) / 2) : 0);
            }, [s.length, o, d, m]),
            e.jsx('div', {
                style: { paddingLeft: r, paddingRight: r },
                className: a(Go[`${l}Group`], u && Go[`${l}Group__indent`]),
                children: Q(s, (t, r) => {
                    const l = f.length - i - r - 1;
                    return e.jsx(
                        n.div,
                        {
                            ref: 0 === r ? p : void 0,
                            className: Go.animatedAchievement,
                            style: { ..._[l], zIndex: i + r === b ? s.length + 1 : s.length - r },
                            children: e.jsx(Wo, {
                                classNames: {
                                    achievement: a(Go.achievement, !1 === v.has(l) && Go.achievement__notInteractive),
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
function $o({ marksOnGun: e, hasSiblingGroups: a }) {
    return a && e ? Go.marksGroup__indentWithMarksOnGun : a ? Go.marksGroup__masteryIndent : void 0;
}
const Lo = t.memo(function ({ achievements: t, startIndex: s, medalWidth: i, medalHeight: r, hasSiblingGroups: l }) {
        const { springs: o, achievements: c, completedAnimationIndexes: d, hoverIndex: u } = Vo();
        return e.jsx('div', {
            className: a(
                Go.marksGroup,
                $o({ hasSiblingGroups: l, marksOnGun: t.some((e) => 'marksOnGun' === e.name) }),
            ),
            children: Q(t, (l, m) => {
                const p = c.length - s - m - 1;
                return e.jsx(
                    n.div,
                    {
                        className: Go.animatedAchievement,
                        style: { ...o[p], zIndex: s + m === u ? t.length + 1 : t.length - m },
                        children: e.jsx(Wo, {
                            classNames: {
                                achievement: a(Go.achievement, !1 === d.has(p) && Go.achievement__notInteractive),
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
    Xo = t.memo(function ({ className: s }) {
        const n = oe(
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
            { achievements: i } = Vo(),
            r = t.useMemo(
                () =>
                    (function (e) {
                        return ee(
                            e,
                            (e, a) => {
                                switch (pl(a)) {
                                    case ul.markOfMastery:
                                    case ul.marksOnGun:
                                        e.marks.push(a);
                                        break;
                                    case ul.epic:
                                    case ul.specialAchievements:
                                    case ul.right:
                                        if (wl.includes(a.name)) {
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
                            { [xl]: [], [Nl]: [], [jl]: [] },
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
                  className: a(Go.base, void 0 !== l.epicAndHeroic && void 0 !== l.others && Go.base__visible, s),
                  children: [
                      r.marks.length > 0 &&
                          e.jsx(Lo, {
                              medalWidth: n.epicAndHeroic.width,
                              medalHeight: n.epicAndHeroic.height,
                              achievements: r.marks,
                              startIndex: 0,
                              hasSiblingGroups: r.epicAndHeroic.length + r.others.length > 0,
                          }),
                      r.epicAndHeroic.length > 0 &&
                          e.jsx(Fo, {
                              group: Nl,
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
                          e.jsx(Fo, {
                              group: jl,
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
var Ko = ((e) => ((e.None = 'none'), (e.Worse = 'worse'), (e.Usual = 'usual'), (e.Better = 'better'), e))(Ko || {});
const qo = 'RateButton_bb66ff02',
    Uo = 'RateButton_base__inner_61655025',
    Yo = 'RateButton_base__first_hover_c025af3c',
    Jo = 'RateButton_base__usual_6d49d479',
    Zo = 'RateButton_base__worse_4a6537c5',
    Qo = 'RateButton_base__better_ab2a6315',
    ec = 'RateButton_base__selected_70adc5a4',
    ac = 'RateButton_base__disabled_73dd0147',
    tc = { [Ko.Worse]: Zo, [Ko.Usual]: Jo, [Ko.Better]: Qo, [Ko.None]: null },
    sc = ({ variant: t, selected: s, className: n, isHovered: i, ...r }) => {
        const l = k.resolve('strings'),
            o = M(),
            c = E({
                header: l.readOrEmpty(`battle_results.battleRating.tooltip.${t}.header`),
                body: l.readOrEmpty(`battle_results.battleRating.tooltip.${t}.body`),
            }),
            d = !i && !r.disabled && t === Ko.Usual;
        return e.jsx('div', {
            onMouseEnter: (e) => {
                !s && !r.disabled && o.play('mouse-enter', { original: e, target: 'battle_rating:rate_button' });
            },
            children: e.jsx('button', {
                className: a(qo, n, tc[t], s ? ec : d ? Yo : r.disabled ? ac : void 0),
                ...c,
                ...r,
                children: e.jsx('div', { className: Uo }),
            }),
        });
    },
    nc = {
        base: 'BattleRating_fa13d03',
        base_title: 'BattleRating_base_title_757e19bf',
        base_wrapper: 'BattleRating_base_wrapper_ae4d42aa',
    },
    ic = function ({ state: a, onSatisfactionRatingSelected: s }) {
        const [n, i] = t.useState(!1),
            r = M(),
            l = R.strings.battle_results.battleResult.battleRating[a].header(),
            o = [Ko.Worse, Ko.Usual, Ko.Better],
            c = a === Ko.None;
        return e.jsxs('div', {
            className: nc.base,
            onMouseEnter: () => {
                i(!0);
            },
            children: [
                e.jsx('div', { className: nc.base_title, children: l }),
                e.jsx('div', {
                    className: nc.base_wrapper,
                    children: o.map(
                        (t) =>
                            t !== Ko.None &&
                            e.jsx(
                                sc,
                                {
                                    variant: t,
                                    className: nc.base_button,
                                    selected: a === t,
                                    onClick: c
                                        ? (e) => {
                                              (r.play('click', { original: e, target: 'battle_rating:rate_button' }),
                                                  s(t));
                                          }
                                        : null,
                                    isHovered: n,
                                    disabled: a !== t && a !== Ko.None,
                                },
                                t,
                            ),
                    ),
                }),
            ],
        });
    },
    rc = t.createContext(null);
function lc() {
    const e = t.useContext(rc);
    if (null === e) throw new Error('You can use the managable bonus hooks only with the ManagableBonus component');
    return e;
}
function oc({
    children: a,
    bonusState: s,
    restriction: n,
    usedAdvertisements: i,
    supportedStates: r,
    supportedAdvertisements: l = Yl,
    ...o
}) {
    const c = t.useMemo(
        () => (
            te(
                (function (e) {
                    return Bl.includes(e);
                })(s),
                `Bonus state ${s} is not supported`,
            ),
            {
                ...o,
                bonusState: s,
                restriction: n,
                supportedAdvertisements: l,
                state: Zl[s].define({ restriction: n, supportedAdvertisements: l, usedAdvertisements: i }),
            }
        ),
        [s, n, o, l, i],
    );
    return Array.isArray(r) && !1 === r.includes(s)
        ? (console.error(`State ${s} is not supported for the current game mode`), null)
        : e.jsx(rc.Provider, { value: c, children: a });
}
const cc = { value: 'Currency_value_a12c8cb4' };
function dc({ size: t, type: s, classNames: n, withoutPlus: i = !1, value: r }) {
    const l = 'gold' === s ? 'gold' : 'integral';
    return e.jsx(re, {
        reverse: !0,
        size: t,
        type: s,
        className: a(cc.currency, null == n ? void 0 : n.currency),
        children: i
            ? e.jsx('div', { className: a(cc.value, null == n ? void 0 : n.value), children: V.formatNumber(l, r) })
            : e.jsx(P, {
                  className: a(cc.value, null == n ? void 0 : n.value),
                  path: 'common.plusValueWithSpace',
                  params: { value: V.formatNumber(l, r) },
              }),
    });
}
const uc = 'Advertising_50041e0d',
    mc = 'Advertising_base__twoRows_2e4d12dc',
    pc = 'Advertising_base__threeRows_5439f637',
    _c = 'Advertising_currency_f20fcad',
    fc = 'Advertising_currencyValue_18a0b419';
function vc() {
    const {
        state: t,
        supportedAdvertisements: s,
        bonusMultiplier: n,
        durationInDays: i,
        creditsThreshold: r,
        handleAdvertisement: l,
    } = lc();
    Ae(() => {
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
        case Ml:
            return e.jsx(P, {
                className: uc,
                path: 'battle_results.common.details.premiumAdvertising.credits',
                params: {
                    bonusCredits: e.jsx(dc, {
                        withoutPlus: !0,
                        type: 'credits',
                        size: le.small,
                        value: r,
                        classNames: { currency: _c, value: fc },
                    }),
                    durationInDays: i,
                },
            });
        case Gl:
            return e.jsx(Ce, {
                className: a(uc, pc),
                text: o.readOrEmpty('battle_results.common.details.premiumPlus.premium'),
            });
        case Fl:
            return e.jsx(Ce, {
                className: a(uc, mc),
                text: o.readOrEmpty('battle_results.common.details.premiumPlus.squad'),
            });
        case $l:
            return e.jsx(Ce, {
                className: a(uc, pc),
                text: o.readOrEmpty('battle_results.common.details.premiumAdvertising.bonus'),
                params: { multiplier: n },
            });
        case Ll:
            return e.jsx(Ce, {
                className: a(uc, mc),
                text: o.readOrEmpty('battle_results.common.details.premiumPlus.quests'),
            });
        default:
            return (console.error(`Advertising state ${t} is not supported`), null);
    }
}
const bc = { base: 'LeftBonusAttempts_a541b0b8', count: 'LeftBonusAttempts_count_24f93d48' };
function hc({ count: a }) {
    return e.jsx(P, {
        upgradeLegacy: !0,
        params: { count: e.jsx('span', { className: bc.count, children: V.formatNumber('integral', a) }) },
        path: 'battle_results.common.premiumBonus.bonusLeft',
        className: bc.base,
    });
}
const gc = {
    base: 'Description_48571438',
    text: 'Description_text_30186c18',
    text__double: 'Description_text__double_333f570f',
};
function yc({ text: t, displayType: s = 'single', withAttemts: n = !0 }) {
    const { leftBonusAttempts: i } = lc();
    return e.jsxs('div', {
        className: gc.base,
        children: [e.jsx(Ce, { text: t, className: a(gc.text, gc[`text__${s}`]) }), n && e.jsx(hc, { count: i })],
    });
}
const xc = 'PremiumEarnings_d4b9118e',
    Nc = 'PremiumEarnings_wrapper_82e68328',
    jc = 'PremiumEarnings_wrapper__semiTransparent_bb0620c7',
    wc = 'PremiumEarnings_label_94b3586c',
    Ic = 'PremiumEarnings_label__highlight_7755be2e',
    Ac = 'PremiumEarnings_currencies_d4b9118e',
    Cc = 'PremiumEarnings_currency_3f1396eb',
    Sc = 'PremiumEarnings_value_cbe7ec27';
function Bc() {
    const t = k.resolve('strings'),
        { premiumAndStandartEarnings: s } = lc();
    return e.jsxs('div', {
        className: xc,
        children: [
            e.jsxs('div', {
                className: a(Nc, jc),
                children: [
                    e.jsx('div', {
                        className: wc,
                        children: t.readOrEmpty('battle_results.common.details.noPremTitle'),
                    }),
                    e.jsxs('div', {
                        className: Ac,
                        children: [
                            e.jsx(dc, {
                                withoutPlus: !0,
                                size: le.small,
                                type: 'credits',
                                classNames: { currency: Cc, value: Sc },
                                value: s.baseCredits,
                            }),
                            e.jsx(dc, {
                                withoutPlus: !0,
                                size: le.small,
                                type: 'tankXP',
                                classNames: { currency: Cc, value: Sc },
                                value: s.baseVehicleXP,
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs('div', {
                className: Nc,
                children: [
                    e.jsx('div', {
                        className: a(wc, Ic),
                        children: t.readOrEmpty('battle_results.common.details.premTitle'),
                    }),
                    e.jsxs('div', {
                        className: Ac,
                        children: [
                            e.jsx(dc, {
                                withoutPlus: !0,
                                size: le.small,
                                type: 'credits',
                                classNames: { currency: Cc, value: Sc },
                                value: s.premiumCredits,
                            }),
                            e.jsx(dc, {
                                withoutPlus: !0,
                                size: le.small,
                                type: 'tankXP',
                                classNames: { currency: Cc, value: Sc },
                                value: s.premiumVehicleXP,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const Pc = 'PremiumInfoCurrencies_value_5b83491e',
    Rc = 'PremiumInfoCurrencies_currency_6908b9d9',
    kc = L('PremiumInfoCurrencies', 'PremiumInfoCurrencies_8b21f7ee');
function Ec() {
    const a = oe({ size: le.small }, { medium: { size: le.large } }),
        { premiumAndStandartEarnings: t } = lc();
    return e.jsxs(kc, {
        children: [
            e.jsx(dc, { size: a.size, type: 'credits', classNames: { currency: Rc, value: Pc }, value: t.creditsDiff }),
            e.jsx(dc, {
                size: a.size,
                type: 'tankXP',
                classNames: { currency: Rc, value: Pc },
                value: t.vehicleXPDiff,
            }),
        ],
    });
}
const Tc = L('Content'),
    Dc = t.forwardRef(function (a, t) {
        const { state: s } = lc(),
            n = k.resolve('strings');
        return e.jsx(Tc, {
            ...a,
            ref: t,
            children: (() => {
                switch (s) {
                    case Pl:
                        return e.jsx(Ec, {});
                    case Rl:
                    case kl:
                    case Vl:
                    case Ol:
                    case zl:
                    case Hl:
                    case Kl:
                    case ql:
                        return e.jsx(yc, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.description'),
                            displayType: 'single',
                        });
                    case El:
                        return e.jsx(yc, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.rule'),
                            displayType: 'double',
                        });
                    case Tl:
                        return e.jsx(yc, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.expiredBattleResult'),
                            displayType: 'double',
                        });
                    case Dl:
                        return e.jsx(yc, {
                            withAttemts: !1,
                            text: n.readOrEmpty('battle_results.common.premiumBonus.unavailable'),
                            displayType: 'double',
                        });
                    case Xl:
                        return e.jsx(yc, {
                            withAttemts: !1,
                            text: n.readOrEmpty('battle_results.common.plusBonus.premiumPlusAdd'),
                            displayType: 'double',
                        });
                    case Wl:
                        return e.jsx(Bc, {});
                    case Gl:
                    case Ml:
                    case Fl:
                    case $l:
                    case Ll:
                        return e.jsx(vc, {});
                    default:
                        return (console.error(`State ${s} is not supported`), null);
                }
            })(),
        });
    }),
    Vc = 'AppliedBonusInfo_910a06bc',
    zc = 'AppliedBonusInfo_icon_208dd0cc';
function Oc() {
    return e.jsxs('div', {
        className: Vc,
        children: [
            e.jsx('div', { className: zc }),
            e.jsx(P, { path: 'battle_results.common.premiumBonus.appliedBonus' }),
        ],
    });
}
const Hc = 'ApplyButton_fa337b96',
    Wc = 'ApplyButton_button_a471284',
    Mc = 'ApplyButton_value_c22167ea';
function Gc() {
    const a = k.resolve('strings'),
        { bonusXpDiff: t, applyBonus: s } = lc(),
        n = oe(
            { iconSize: le.small, buttonSize: he.sizes.small },
            { large: { iconSize: le.large }, extraLarge: { buttonSize: he.sizes.medium } },
        );
    return e.jsxs('div', {
        className: Hc,
        children: [
            e.jsx(dc, { type: 'tankXP', size: n.iconSize, value: t, classNames: { value: Mc } }),
            e.jsx(he, {
                size: n.buttonSize,
                theme: he.themes.primary,
                className: Wc,
                onClick: s,
                soundTarget: 'managable-bonus:apply-button',
                children: a.readOrEmpty('battle_results.common.premiumBonus.applyBonusBtn'),
            }),
        ],
    });
}
const Fc = 'PlusEarnings_505f274c',
    $c = 'PlusEarnings_label_79ad021c',
    Lc = 'PlusEarnings_link_649208b3',
    Xc = 'PlusEarnings_currency_fddc9198',
    Kc = 'PlusEarnings_value_fe187db9',
    qc = { withWotPlus: 'withWotPlus', withWotPremium: 'withWotPremium' };
const Uc = {
    [qc.withWotPlus]: 'battle_results.common.plusBonus.wotPlus',
    [qc.withWotPremium]: 'battle_results.common.plusBonus.wotPremium',
};
function Yc({ onClick: a }) {
    const t = k.resolve('strings'),
        s = Se().breakpoint,
        { wotPlusType: n, wotPremium: i, bonusXpDiff: r } = lc(),
        l = n === Wt.Core || n === Wt.Pro,
        o = (function (e, a) {
            return a && !1 === e ? qc.withWotPlus : e && !1 === a ? qc.withWotPremium : void 0;
        })(l, i);
    if (void 0 !== o)
        return e.jsxs('div', {
            className: Fc,
            children: [
                e.jsxs('div', {
                    className: $c,
                    children: [
                        t.readOrEmpty('battle_results.common.plusBonus.bonusLeftAdditionalText'),
                        e.jsx('span', { className: Lc, onClick: a, children: t.readOrEmpty(Uc[o]) }),
                    ],
                }),
                e.jsx(dc, {
                    type: 'tankXP',
                    size: s.weight >= Be.medium.weight ? le.large : le.small,
                    value: r,
                    classNames: { currency: Xc, value: Kc },
                }),
            ],
        });
    console.error(`plus earnings state can't have such flag combination: wotPlus: ${l}, wotPremium: ${i}`);
}
const Jc = 'PlusYouRock_a108dad8',
    Zc = 'PlusYouRock_message_52bfa860',
    Qc = 'PlusYouRock_rock_6d6e55b1',
    ed = 'PlusYouRock_currency_73dcb93a',
    ad = 'PlusYouRock_value_daab6eb6';
function td() {
    const a = k.resolve('strings'),
        t = Se().breakpoint,
        { dailyAppliedAdditionalXP: s } = lc();
    return e.jsxs('div', {
        className: Jc,
        children: [
            e.jsxs('div', {
                className: Zc,
                children: [
                    e.jsx('span', {
                        className: Qc,
                        children: a.readOrEmpty('battle_results.common.plusBonus.youRock'),
                    }),
                    ' ',
                    a.readOrEmpty('battle_results.common.plusBonus.earnedMessage'),
                ],
            }),
            e.jsx(dc, {
                type: 'tankXP',
                size: t.weight >= Be.medium.weight ? le.large : le.small,
                value: s,
                classNames: { currency: ed, value: ad },
            }),
        ],
    });
}
const sd = {
    base: 'PremiumInfoButton_66b12c2',
    button: 'PremiumInfoButton_button_870d4076',
    buttonHint: 'PremiumInfoButton_buttonHint_1ee6743f',
};
function nd({ onClick: t, withLabel: s = !1 }) {
    const n = k.resolve('strings'),
        { breakpoint: i } = Se(),
        r = i.weight > Be.large.weight ? he.sizes.medium : he.sizes.small;
    return e.jsxs('div', {
        className: a(sd.base, s && sd.base__withLabel),
        children: [
            s &&
                e.jsx('div', {
                    className: sd.buttonHint,
                    children: n.readOrEmpty('battle_results.common.premiumBonus.earnMore'),
                }),
            e.jsx(he, {
                className: sd.button,
                size: s ? he.sizes.small : r,
                theme: he.themes.primary,
                onClick: t,
                soundTarget: 'managable-bonus:premium-info-button',
                children: n.readOrEmpty('battle_results.common.details.getPremBtn'),
            }),
        ],
    });
}
const id = 'Restriction_8b730e49',
    rd = 'Restriction_iconWrapper_ac9b1b94',
    ld = 'Restriction_icon_ef5c0819',
    od = 'Restriction_formattedText_b2d2b647';
function cd({ path: a, tooltipParams: t }) {
    const s = E(t);
    return e.jsx('div', {
        className: id,
        children: e.jsx(P, {
            path: a,
            className: od,
            params: {
                info: e.jsx('span', {
                    ...s,
                    className: rd,
                    children: e.jsx(Pe, { path: 'post_battle.info', className: ld }),
                }),
            },
        }),
    });
}
const dd = L('Footer'),
    ud = t.forwardRef(function (a, t) {
        const { state: s, showBonusDetails: n } = lc(),
            i = k.resolve('strings');
        return e.jsx(dd, {
            ...a,
            ref: t,
            children: (() => {
                switch (s) {
                    case Pl:
                        return e.jsx(nd, { withLabel: !0, onClick: n });
                    case Rl:
                        return e.jsx(Gc, {});
                    case kl:
                        return e.jsx(Oc, {});
                    case Vl:
                        return e.jsx(cd, {
                            path: 'battle_results.common.premiumBonus.tankStateChangedWithInfo',
                            tooltipParams: {
                                header: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankStateChanged.header'),
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankStateChanged.body'),
                            },
                        });
                    case Ol:
                        return e.jsx(cd, {
                            path: 'battle_results.common.premiumBonus.isXPToTmenEnabledWithInfo',
                            tooltipParams: {
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.xpToTmenChanged.body'),
                            },
                        });
                    case zl:
                        return e.jsx(cd, {
                            path: 'battle_results.common.premiumBonus.isXPToTmenDisabledWithInfo',
                            tooltipParams: {
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.xpToTmenChanged.body'),
                            },
                        });
                    case Hl:
                        return e.jsx(cd, {
                            path: 'battle_results.common.premiumBonus.tankmenStateChangedWithInfo',
                            tooltipParams: {
                                header: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankmenStateChanged.header'),
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankmenStateChanged.body'),
                            },
                        });
                    case Xl:
                        return e.jsx(nd, { onClick: n });
                    case Kl:
                        return e.jsx(Yc, { onClick: n });
                    case ql:
                        return e.jsx(td, {});
                    case Ml:
                    case Gl:
                    case Fl:
                    case $l:
                    case Ll:
                        return e.jsx(nd, { onClick: n });
                    default:
                        return null;
                }
            })(),
        });
    }),
    md = {
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
    pd = L('Header'),
    _d = t.forwardRef(function ({ className: t, classNames: s, ...n }, i) {
        const { state: r, bonusMultiplier: l } = lc(),
            o = k
                .resolve('strings')
                .readOrEmpty('battle_results.common.premiumBonus.bonusMultiplier')
                .replace('{{value}}', l.toString());
        return e.jsx(pd, {
            ref: i,
            className: a(md[`base__${r}`], t),
            ...n,
            children: e.jsx('div', {
                className: a(md.icon, null == s ? void 0 : s.icon),
                children: e.jsx(Re, {
                    classNames: {
                        base: md.bonusMultiplier,
                        text: md.text,
                        textOverlay: a(md.text, md.text__textOverlay),
                    },
                    children: o,
                }),
            }),
        });
    }),
    fd = L('ManagableBonus', 'ManagableBonus_55c8d52d'),
    vd = t.memo(fd);
((vd.Header = _d), (vd.Content = Dc), (vd.Footer = ud));
const bd = {
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
function hd({ className: t }) {
    const { state: s } = lc(),
        { completedSteps: n } = ht();
    return e.jsxs(vd, {
        className: a(bd.bonus, bd[`bonus__${s}`], !1 === n.has(_t.third) && bd.bonus__disabled, t),
        children: [
            e.jsx(vd.Header, {}),
            e.jsx(vd.Content, { className: bd.content }),
            e.jsx(vd.Footer, { className: bd.footer }),
        ],
    });
}
const gd = 'AnimatedNumber_958fc84e',
    yd = 'AnimatedNumber_slotMachineDigit_a9587a5a',
    xd = 'AnimatedNumber_plugChar_c66678',
    Nd = 'AnimatedNumber_digitsList_2065427d',
    jd = O.cubicBezier(0.33, 0, 0.25, 1);
function wd({ immediate: a, symbol: s, step: i, delay: r, first: l, handleFirstRest: o }) {
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
                    config: { duration: 600, easing: jd },
                    immediate: a || c,
                    onRest() {
                        d(!0);
                    },
                }));
        }, [i, m, c, r, _, a]),
        e.jsxs('div', {
            className: yd,
            children: [
                e.jsx('div', { className: xd, children: s }),
                e.jsx(n.div, {
                    style: u,
                    className: Nd,
                    children: Te(0, _ + 1, (a) =>
                        p
                            ? e.jsx('div', { children: a }, a)
                            : e.jsx('div', { style: { height: i }, children: a > 0 ? s : null }, a),
                    ),
                }),
            ],
        })
    );
}
const Id = t.memo(function ({
        immediate: s,
        value: n,
        readyToAnimate: i,
        className: r,
        handleAnimationFinished: l,
        type: o,
    }) {
        const [c, d] = ke(),
            u = t.useMemo(() => n.split(''), [n]),
            m = t.useCallback(() => l(o), [l, o]);
        return e.jsx('div', {
            ref: c,
            className: a(gd, r),
            children: u.map((a, t) =>
                e.jsx(
                    wd,
                    {
                        first: 0 === t,
                        handleFirstRest: m,
                        immediate: s,
                        delay: 200 * (u.length - t),
                        symbol: a,
                        step: d.type === Ee.measured && i ? d.size.height : 0,
                    },
                    `${n}-${t}`,
                ),
            ),
        });
    }),
    Ad = 'Currency_10720e2d',
    Cd = 'Currency_icon_4d923f64',
    Sd = 'Currency_icon__visible_9c676b12',
    Bd = 'Currency_value_b21680b3',
    Pd = { xp: 'tankXP', crystal: 'crystal', credits: 'credits', gold: 'gold' },
    Rd = Object.keys(Pd);
function kd({
    immediate: t,
    type: s,
    value: n,
    size: i,
    visibleIfZero: r,
    readyToAnimate: l,
    handleAnimationFinished: o,
}) {
    return ((e) => Rd.includes(e))(s)
        ? 0 !== n || r
            ? e.jsx(re, {
                  reverse: !0,
                  type: Pd[s],
                  size: i,
                  className: Ad,
                  classNames: { icon: a(Cd, (l || t) && Sd) },
                  children: e.jsx(Id, {
                      className: Bd,
                      immediate: t,
                      readyToAnimate: l,
                      type: s,
                      handleAnimationFinished: o,
                      value: V.formatNumber(s === De.gold ? 'gold' : 'integral', n),
                  }),
              })
            : null
        : (console.error(`There is no such currency in the template literal: ${s}`), null);
}
const Ed = L('Currencies', 'Currencies_5b11a533'),
    Td = l(function ({ className: a }) {
        const [s, n] = t.useState(!1),
            [i, r] = t.useState(new Set()),
            [l, o] = t.useState(!1),
            { model: c } = No(),
            d = c.computes.earnedCurrencies(),
            u = c.additionalBonus.get(),
            m = Ve(d),
            p = M(),
            { step: _, setAllCurrenciesAniamted: f } = ht(),
            v = oe({ value: le.medium }, { medium: { value: le.large }, large: { value: le.extraLarge } });
        (t.useEffect(() => {
            void 0 !== m && m !== d && p.play('startRolling', { target: 'overview:currencies' });
        }, [d, m, p, _]),
            t.useEffect(() => {
                (_ !== _t.third && _ !== _t.immediate) ||
                    (_ === _t.third && p.play('startRolling', { target: 'overview:currencies' }), n(!0));
            }, [_, p]),
            t.useEffect(() => {
                i.size === d.filter(({ value: e, visibleIfZero: a }) => e > 0 || a).length &&
                    (_ !== _t.immediate && p.play('stopRolling', { target: 'overview:currencies' }),
                    f(!0),
                    u.bonusState === Ht.PremiumBonus &&
                        u.restriction === Ot.NoRestriction &&
                        (r((e) => ze(e, 'xp')), o(!0)));
            }, [_, i, d, p, u.bonusState, u.restriction, f]));
        const b = t.useCallback(function (e) {
            r((a) => W(a, e));
        }, []);
        return e.jsx(Ed, {
            className: a,
            children: Q(d, (a) =>
                e.jsx(
                    kd,
                    {
                        readyToAnimate: s,
                        size: v.value,
                        handleAnimationFinished: b,
                        immediate: _ === _t.immediate && !1 === l,
                        ...a,
                    },
                    a.type,
                ),
            ),
        });
    }),
    Dd = 'Overview_flare_5277bd9e',
    Vd = 'Overview_vignette_ff9b1e99',
    zd = 'Overview_2a415431',
    Od = 'Overview_info_fa4e7011',
    Hd = 'Overview_info__withoutMedals_6be29b19',
    Wd = 'Overview_statusWrapper_633ae157',
    Md = 'Overview_infoWrapper_dfa0b233',
    Gd = 'Overview_status_1c902a82',
    Fd = 'Overview_statusText_22ef8198',
    $d = 'Overview_achievements_5b2b6582',
    Ld = 'Overview_dividerWrapper_25de8b48',
    Xd = 'Overview_divider_652a671e',
    Kd = 'Overview_dividerImage_2a8a0c0e',
    qd = 'Overview_currencies_d637d5d',
    Ud = 'Overview_bonus_30af9d4',
    Yd = k.resolve('images');
function Jd({ winStatus: e, epicFlare: a }) {
    return e === Ca
        ? a
            ? 'post_battle.epic_victory_flare'
            : 'post_battle.no_epic_victory_flare'
        : a
          ? 'post_battle.epic_draw_defeat_flare'
          : 'post_battle.no_epic_draw_defeat_flare';
}
const Zd = l(function () {
        var a;
        const { model: s } = No(),
            { active: i } = K(),
            [{ x: r }, l] = w(() => ({ x: 0 })),
            o = null == (a = s.battleInfo.get()) ? void 0 : a.status,
            c = s.computes.hasSpeialMedals(),
            d = t.useRef(null);
        return (
            t.useEffect(() => {
                if (i === Ia.overview)
                    return Oe.move(function ([e]) {
                        const a = He().width,
                            t = 2 * (e.clientX / a - 0.5);
                        l.start({ x: 3 * t });
                    });
            }),
            e.jsx(n.div, {
                ref: d,
                className: Dd,
                style: {
                    backgroundImage: `url(${Yd.readOrEmpty(Jd({ winStatus: o, epicFlare: c }))})`,
                    backgroundPosition: r.to((e) => `${50 + e}% center`),
                },
            })
        );
    }),
    Qd = t.createContext(null);
function eu() {
    const e = t.useContext(Qd);
    if (null === e)
        throw new Error('You can use the expandable overlay hooks only with the ExpandableOverlay widget component');
    return e;
}
function au({ children: a, visible: s, changeVisible: n, closedPosition: i, animationProps: r }) {
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
    return e.jsx(Qd.Provider, { value: f, children: a });
}
const tu = 'HintKey_keyButton_e4149405',
    su = 'HintKey_background_e4149405',
    nu = 'HintKey_border_71616e63',
    iu = 'HintKey_content_63ecef8',
    ru = 'HintKey_triangle_fb0bc682',
    lu = 'HintKey_triangleNoise_6e72dfca',
    ou = L('PersoanlEfficiencyHintKey', 'HintKey_2efc42a0');
const cu = {
        base: 'OverlayDivider_fcc0c30',
        divider: 'OverlayDivider_divider_1acaec30',
        divider__right: 'OverlayDivider_divider__right_546d0e74',
        base__closed: 'OverlayDivider_base__closed_ceb65522',
        dividerImageElement: 'OverlayDivider_dividerImageElement_9babecb0',
    },
    du = t.forwardRef(function ({ className: t, classNames: s }, n) {
        var i, r, l, o, c, d;
        const { opened: u } = eu();
        return e.jsxs('div', {
            ref: n,
            className: a(cu.base, !u && cu.base__closed, null == s ? void 0 : s.base, t),
            children: [
                e.jsx(xt, {
                    classNames: {
                        base: a(
                            cu.divider,
                            cu.divider__left,
                            null == (i = null == s ? void 0 : s.divider) ? void 0 : i.base,
                        ),
                        image: a(
                            cu.dividerImageElement,
                            null == (r = null == s ? void 0 : s.divider) ? void 0 : r.image,
                        ),
                    },
                }),
                e.jsx(xt, {
                    classNames: {
                        base: a(
                            cu.divider,
                            cu.divider__right,
                            null == (l = null == s ? void 0 : s.divider) ? void 0 : l.base,
                            null == (o = null == s ? void 0 : s.rightDivider) ? void 0 : o.base,
                        ),
                        image: a(
                            cu.dividerImageElement,
                            null == (c = null == s ? void 0 : s.divider) ? void 0 : c.image,
                            null == (d = null == s ? void 0 : s.rightDivider) ? void 0 : d.image,
                        ),
                    },
                }),
            ],
        });
    }),
    uu = 'ExpandableOverlay_7ce5a85e',
    mu = 'ExpandableOverlay_base__opened_7d677539',
    pu = 'ExpandableOverlay_shadow_a52d16ce',
    _u = t.forwardRef(function ({ children: s }, i) {
        const { opened: r, handleOpen: l, overlayStyles: o, shadowStyles: c } = eu(),
            d = M();
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
                className: a(uu, r && mu),
                style: o,
                onClick: function (e) {
                    (e.stopPropagation(),
                        !1 === r &&
                            (d.play('click', { original: e, target: 'expandable-overlay' }),
                            d.play('openOverlay', { original: e, target: 'expandable-overlay' }),
                            l(!0)));
                },
                children: [e.jsx(n.div, { className: pu, style: c }), s],
            })
        );
    });
((_u.HintKey = function ({
    disabled: t,
    throttleDelay: s = 600,
    classNames: i,
    keyCode: r = Ge.SPACE,
    triangleNoisePath: l = 'post_battle.noise',
}) {
    var o, c, d;
    const { handleOpen: u, arrowStyles: m } = eu(),
        p = M(),
        _ = We(
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
        children: e.jsxs(ou, {
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
                e.jsx(Me, {
                    keyCode: r,
                    classNames: {
                        base: a(tu, null == i ? void 0 : i.keyButton),
                        background: a(su, null == (o = null == i ? void 0 : i.keyButton) ? void 0 : o.background),
                        content: a(iu, null == (c = null == i ? void 0 : i.keyButton) ? void 0 : c.content),
                        border: a(nu, null == (d = null == i ? void 0 : i.keyButton) ? void 0 : d.border),
                    },
                    soundTarget: 'expandable-overlay:hint-key',
                    onActive: _,
                    children: e.jsx(Me.Code, {}),
                }),
                e.jsx(n.div, {
                    className: a(ru, null == i ? void 0 : i.triangle),
                    style: m,
                    children: e.jsx(q, {
                        fit: 'cover',
                        path: l,
                        className: a(lu, null == i ? void 0 : i.triangleNoise),
                    }),
                }),
            ],
        }),
    });
}),
    (_u.OverlayDivider = du));
const fu = 'BodyRow_b47fe37f',
    vu = 'BodyRow_rowDivider_eb49c679',
    bu = 'BodyRow_rowDividerImage_d852c3da';
function hu({ classNames: s, row: n, rowIndex: i }) {
    var r, l, o;
    const c = Fe({
        args: { vehicleCD: null == (r = n.original.vehicle) ? void 0 : r.vehicleCD, databaseID: n.original.databaseId },
    });
    return t.createElement(
        $e.Row,
        { ...(void 0 !== n.original.databaseId && c), key: n.id, className: a(fu, null == s ? void 0 : s.row) },
        Q(n.getVisibleCells(), (a, t) =>
            e.jsx(
                $e.Cell,
                {
                    className: null == s ? void 0 : s.cell,
                    cell: { ...a, rowIndex: i, index: t, tablePart: Le.body },
                    children: C(a.column.columnDef.cell, a.getContext()),
                },
                a.id,
            ),
        ),
        e.jsx(xt, {
            classNames: {
                base: a(vu, null == (l = null == s ? void 0 : s.divider) ? void 0 : l.base),
                image: a(bu, null == (o = null == s ? void 0 : s.divider) ? void 0 : o.image),
            },
        }),
    );
}
const gu = {
        base: 'TableBody_4f65af24',
        scrollBar: 'TableBody_scrollBar_14038cca',
        scrollAreaContent: 'TableBody_scrollAreaContent_4a80f86c',
        mask: 'TableBody_mask_c5bcd0ad',
        rowDivider: 'TableBody_rowDivider_c1a3ebdc',
        rowDividerImage: 'TableBody_rowDividerImage_b0363e26',
    },
    yu = t.memo(function ({ classNames: s, children: i }) {
        var r, l, o, c, d, u, m, p;
        const { table: _ } = Xe(),
            f = Ke(),
            { api: v } = J();
        (qe(Ge.ARROW_UP, () => {
            v.applyStepTo(Ue.Next);
        }),
            qe(Ge.ARROW_DOWN, () => {
                v.applyStepTo(Ue.Prev);
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
            e.jsxs($e.Body, {
                className: a(gu.base, null == s ? void 0 : s.base),
                children: [
                    e.jsxs(n.div, {
                        className: gu.mask,
                        style: b,
                        children: [
                            e.jsx(xt, {
                                classNames: {
                                    base: a(
                                        gu.rowDivider,
                                        null == (r = null == s ? void 0 : s.divider) ? void 0 : r.base,
                                    ),
                                    image: a(
                                        gu.rowDividerImage,
                                        null == (l = null == s ? void 0 : s.divider) ? void 0 : l.image,
                                    ),
                                },
                            }),
                            e.jsxs(Z, {
                                classNames: {
                                    ...(null == (o = null == s ? void 0 : s.scroll) ? void 0 : o.area),
                                    wrapper: gu.scrollWrapper,
                                    content: a(
                                        gu.scrollAreaContent,
                                        null == (d = null == (c = null == s ? void 0 : s.scroll) ? void 0 : c.area)
                                            ? void 0
                                            : d.content,
                                    ),
                                },
                                children: [
                                    Q(_.getRowModel().rows, (a, t) =>
                                        e.jsx(
                                            hu,
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
                    e.jsx(Y, {
                        classNames: {
                            ...(null == (u = null == s ? void 0 : s.scroll) ? void 0 : u.bar),
                            base: a(
                                gu.scrollBar,
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
    xu = 'TableFooter_40e98711',
    Nu = 'TableFooter_row_41aedfc2',
    ju = t.memo(function ({ classNames: t }) {
        const { table: s } = Xe();
        return e.jsx($e.Footer, {
            className: a(xu, null == t ? void 0 : t.base),
            children: Q(s.getFooterGroups(), (s, n) =>
                e.jsx(
                    $e.Row,
                    {
                        className: a(Nu, null == t ? void 0 : t.row),
                        children: Q(s.headers, (a, s) =>
                            e.jsx(
                                $e.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: null == t ? void 0 : t.cell,
                                    cell: { ...a, rowIndex: n, index: s, tablePart: Le.footer },
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
    wu = 'TableHeader_row_a81d3e65',
    Iu = t.memo(function ({ classNames: t }) {
        const { table: s } = Xe();
        return e.jsx($e.Header, {
            className: null == t ? void 0 : t.base,
            children: Q(s.getHeaderGroups(), (s, n) =>
                e.jsx(
                    $e.Row,
                    {
                        className: a(wu, null == t ? void 0 : t.row),
                        children: Q(s.headers, (a, s) =>
                            e.jsx(
                                $e.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: null == t ? void 0 : t.cell,
                                    cell: { ...a, rowIndex: n, index: s, tablePart: Le.header },
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
    Au = {
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
    Cu = '',
    Su = '',
    Bu = {
        [Au.targetKills]: 'library.crossed_tank',
        [Au.damageDealt]: 'library.cross_with_gap',
        [Au.damageBlockedByArmor]: 'library.blocked',
        [Au.damageAssisted]: 'library.double_target',
        [Au.damageAssistedStun]: 'library.arrow_with_fading',
        [Au.spotted]: 'library.eyebrow',
        [Au.criticalDamage]: 'library.gear_with_gap',
    };
const Pu = t.createContext(null);
function Ru() {
    const e = t.useContext(Pu);
    if (null === e)
        throw new Error('You can use the personal efficiency hooks only with the PersonalEfficiency widget component');
    return e;
}
function ku({ iconsConfig: a, children: s }) {
    const n = t.useMemo(() => ({ iconsConfig: { ...Bu, ...(a || {}) } }), [a]);
    return e.jsx(Pu.Provider, { value: n, children: s });
}
const Eu = function ({
    data: a,
    className: s,
    children: n,
    columnOrder: i,
    columnVisibility: r,
    config: l,
    iconsConfig: o,
}) {
    const c = Se(),
        d = t.useMemo(() => ({ columnOrder: i, columnVisibility: r }), [i, r]);
    return e.jsx(ku, {
        iconsConfig: o,
        children: e.jsx(Ye, {
            columns: l,
            data: a.rows,
            enableMultiRowSelection: !1,
            getRowId: (e) => e.account.username,
            initialState: d,
            children: e.jsx($e, { className: s, children: e.jsx(U, { children: n }) }, c.breakpoint.name),
        }),
    });
};
((Eu.Header = Iu), (Eu.Body = yu), (Eu.Footer = ju));
const Tu = { behaviour: Je.contentResponsive, minSize: '0rem', maxSize: '1000rem' },
    Du = {
        [Au.account]: {
            [Ze.extraSmall]: { behaviour: Je.static, size: '200rem' },
            [Ze.medium]: { behaviour: Je.static, size: '200rem' },
            [Ze.large]: { behaviour: Je.static, size: '200rem' },
            [Ze.extraLarge]: { behaviour: Je.static, size: '229rem' },
        },
        [Au.vehicle]: {
            [Ze.extraSmall]: { behaviour: Je.static, size: '182rem' },
            [Ze.medium]: { behaviour: Je.static, size: '186rem' },
            [Ze.large]: { behaviour: Je.static, size: '216rem' },
            [Ze.extraLarge]: { behaviour: Je.static, size: '239rem' },
        },
    },
    Vu = {
        accountInfo: 'AccountInfoCell_accountInfo_4ab27ccb',
        accountName: 'AccountInfoCell_accountName_3a2352e5',
        clanAbbreviation: 'AccountInfoCell_clanAbbreviation_99f1cc86',
        gap: 'AccountInfoCell_gap_4a30913b',
        anonymizerIcon: 'AccountInfoCell_anonymizerIcon_f71ac22',
        badge: 'AccountInfoCell_badge_711d01c5',
    };
function zu({ account: t }) {
    return e.jsxs(Qe, {
        className: Vu.accountInfo,
        children: [
            e.jsx('div', {
                className: a(Vu.badge, Vu.gap),
                children:
                    t.badge !== Cu &&
                    e.jsx(Qe.Badge, { size: Qe.Badge.sizes.x24x24, badgeId: t.badge, className: Vu.gap }),
            }),
            e.jsx(Qe.Name, {
                className: a(Vu.accountName, Vu.gap),
                children: e.jsx(ea, { text: t.anonymizer ? t.fakeUsername : t.username }),
            }),
            t.clanAbbreviation !== Su &&
                !t.anonymizer &&
                e.jsx(Qe.ClanTag, {
                    className: a(Vu.clanAbbreviation, Vu.gap),
                    children: e.jsx(P, {
                        path: 'common.clanTag',
                        params: { abbrev: t.clanAbbreviation },
                        brackets: { start: '{', end: '}' },
                    }),
                }),
            t.igrType !== Il && e.jsx(Qe.IgrIcon, { size: Qe.IgrIcon.sizes.x34x16, className: Vu.gap }),
            t.suffixBadge !== Cu &&
                e.jsx(Qe.Stripe, { size: Qe.Stripe.sizes.default, badgeId: t.suffixBadge, className: Vu.gap }),
            t.anonymizer &&
                e.jsx(Qe.AnonymizerIcon, { size: Qe.AnonymizerIcon.sizes.x24x24, className: Vu.anonymizerIcon }),
        ],
    });
}
const Ou = 'capturePoints',
    Hu = 'droppedCapturePoints',
    Wu = {
        base: 'BaseCapture_4cb6b6d6',
        icon: 'BaseCapture_icon_d32c372c',
        label: 'BaseCapture_label_8bdb9b9c',
        wrapper: 'BaseCapture_wrapper_c1a0082e',
    };
function Mu({ assault: t, defend: s, classNames: n, className: i }) {
    const r = k.resolve('strings'),
        l = k.resolve('views'),
        o = aa({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { paramType: Ou },
        }),
        c = aa({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { paramType: Hu },
        });
    return e.jsxs('div', {
        className: a(Wu.base, i),
        children: [
            e.jsx('div', {
                className: a(Wu.label, null == n ? void 0 : n.label),
                children: r.readOrEmpty('battle_results.common.battleEfficiency.baseCapture'),
            }),
            e.jsxs('div', {
                ...o,
                className: Wu.wrapper,
                children: [
                    e.jsx('div', { className: a(Wu.value, null == n ? void 0 : n.value), children: t }),
                    e.jsx(q, {
                        path: 'post_battle.assault',
                        width: '32rem',
                        height: '32rem',
                        className: a(Wu.icon, null == n ? void 0 : n.icon),
                    }),
                ],
            }),
            e.jsxs('div', {
                ...c,
                className: Wu.wrapper,
                children: [
                    e.jsx('div', { className: a(Wu.value, null == n ? void 0 : n.value), children: s }),
                    e.jsx(q, {
                        path: 'post_battle.defend',
                        width: '32rem',
                        height: '32rem',
                        className: a(Wu.icon, null == n ? void 0 : n.icon),
                    }),
                ],
            }),
        ],
    });
}
const Gu = {
    cellWithValue: 'HeaderCell_cellWithValue_78949e6d',
    cellWithValue__totalInfo: 'HeaderCell_cellWithValue__totalInfo_789bf7be',
    cellWithValue__zeroIndent: 'HeaderCell_cellWithValue__zeroIndent_334269c9',
    wrapper: 'HeaderCell_wrapper_7849c6a',
    imageWrapper: 'HeaderCell_imageWrapper_a570c717',
    value: 'HeaderCell_value_f7bb7c82',
    cellWithText: 'HeaderCell_cellWithText_710c47ce',
    text: 'HeaderCell_text_35220206',
};
function Fu({ info: t, name: s, className: n }) {
    const { iconsConfig: i } = Ru(),
        r = k.resolve('views'),
        l = aa({
            contentId: r.read((e) =>
                s === Au.criticalDamage
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { paramType: s },
        }),
        o = ee(
            t.table.getRowModel().rows,
            (e, a) => {
                const t = a.getValue(s),
                    n = ta(t) ? t : t.value;
                return e + (s === Au.spotted && n > 0 ? 1 : n);
            },
            0,
        ),
        c = i[s] ?? '';
    return e.jsx('div', {
        className: a(Gu.cellWithValue, n),
        children: e.jsxs('div', {
            ...l,
            className: Gu.wrapper,
            children: [
                e.jsx('div', { className: Gu.value, children: V.formatNumber('integral', o) }),
                e.jsx('div', {
                    className: Gu.imageWrapper,
                    children: e.jsx(q, { width: '100%', height: '100%', path: c }),
                }),
            ],
        }),
    });
}
function $u({ name: a, info: t, className: s }) {
    const n = k.resolve('strings');
    switch (a) {
        case Au.targetKills:
        case Au.damageDealt:
        case Au.damageBlockedByArmor:
        case Au.damageAssisted:
        case Au.damageAssistedStun:
        case Au.spotted:
        case Au.criticalDamage:
            return void 0 !== t ? e.jsx(Fu, { name: a, info: t, className: s }) : null;
        case Au.account:
            return e.jsx('div', {
                className: Gu.cellWithText,
                children: e.jsx('div', {
                    className: Gu.text,
                    children: n.readOrEmpty('battle_results.common.battleEfficiency.uppercased_title'),
                }),
            });
        default:
            return (console.error(`Unknown column ${a}`), null);
    }
}
const Lu = { base: 'IconCell_99b0caec' };
function Xu({ value: t, name: s, userName: n, className: i }) {
    const { iconsConfig: r } = Ru(),
        l = k.resolve('views'),
        o = aa({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { userName: n, paramType: s },
        });
    if (0 === t) return null;
    const c = r[s] ?? '';
    return e.jsx('div', {
        ...o,
        className: a(Lu.base, i),
        children: e.jsx(q, { width: '32rem', height: '32rem', path: c }),
    });
}
const Ku = { base: 'NumberCell_c62bf499' };
function qu({ value: t, userName: s, name: n, className: i }) {
    const r = k.resolve('views'),
        l = aa({
            contentId: r.read((e) =>
                n === Au.criticalDamage
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { userName: s, paramType: n },
        });
    return 0 === t ? null : e.jsx('div', { ...l, className: a(Ku.base, i), children: V.formatNumber('integral', t) });
}
const Uu = {
        base: 'NumberWithCounterCell_f729c44',
        counter: 'NumberWithCounterCell_counter_8bb0eb59',
        counter__hidden: 'NumberWithCounterCell_counter__hidden_468e7d52',
        counterValue: 'NumberWithCounterCell_counterValue_566cc1fa',
        roundedCount: 'NumberWithCounterCell_roundedCount_c97dad37',
    },
    Yu = 1e3,
    Ju = 99,
    Zu = 2;
function Qu({ count: a }) {
    const t = E({ body: a.toString() }),
        s = (n = a) < Yu ? n : Math.floor(n / 1e3);
    var n;
    return e.jsx('div', {
        className: Uu.counterValue,
        children:
            s === a
                ? a
                : e.jsx('div', {
                      ...t,
                      className: Uu.roundedCount,
                      children: e.jsx(P, {
                          path: 'common.numberAbbrev',
                          params: { value: V.formatNumber('integral', Math.min(s, Ju)) },
                      }),
                  }),
    });
}
function em({ value: t, count: s, name: n, userName: i, className: r }) {
    const { iconsConfig: l } = Ru(),
        o = k.resolve('views'),
        c = aa({
            contentId: o.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { userName: i, paramType: n },
        });
    if (0 === t && 0 === s) return null;
    const d = l[n] ?? '';
    return e.jsxs('div', {
        ...c,
        className: a(Uu.base, r),
        children: [
            t > 0 && V.formatNumber('integral', t),
            e.jsxs('div', {
                className: a(Uu.counter, 0 === s && Uu.counter__hidden),
                children: [
                    e.jsx(q, { className: Uu.icon, width: '32rem', height: '32rem', path: d }),
                    s >= Zu && e.jsx(Qu, { count: s }),
                ],
            }),
        ],
    });
}
const am = {
    base: 'VehicleCell_2823d754',
    imageWrapper: 'VehicleCell_imageWrapper_f0d20784',
    typeWrapper: 'VehicleCell_typeWrapper_1232db26',
    level: 'VehicleCell_level_3970ad9d',
    name: 'VehicleCell_name_755dfe36',
    name__unknown: 'VehicleCell_name__unknown_83c23c5e',
};
function tm({ vehicle: t }) {
    const s = void 0 === t;
    return e.jsxs('div', {
        className: am.base,
        children: [
            e.jsx('div', {
                className: am.imageWrapper,
                children: e.jsx(sa, { size: sa.size.x120x96, name: s ? 'tank_empty' : t.techName }),
            }),
            !1 === s &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(T, { value: t.tier, className: am.level }),
                        e.jsx('div', {
                            className: am.typeWrapper,
                            children: e.jsx(D, { size: 'x24x24', type: t.type }),
                        }),
                    ],
                }),
            e.jsx('div', {
                className: a(am.name, s && am.name__unknown),
                children: s
                    ? e.jsx(P, { path: 'ingame_gui.players_panel.unknown_vehicle' })
                    : e.jsx(ea, { text: t.name }),
            }),
        ],
    });
}
const sm = 'Index_align_5032d1bf',
    nm = 'Index_align__right_9d371d4f',
    im = 'Index_align__left_7938cc',
    rm = 'Index_offsetCell_c4e68915',
    lm = 'Index_offsetCell__number_2c760167',
    om = S();
function cm() {
    return [
        om.accessor('killed', {
            id: Au.targetKills,
            header: (t) =>
                e.jsx($u, {
                    info: t,
                    name: Au.targetKills,
                    className: a(Gu.cellWithValue__totalInfo, Gu.cellWithValue__zeroIndent),
                }),
            enableSorting: !1,
            meta: { column: Tu, className: a(sm, nm) },
        }),
        om.accessor('damageDealt', {
            id: Au.damageDealt,
            header: (a) => e.jsx($u, { info: a, name: Au.damageDealt, className: Gu.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(sm, nm), column: Tu },
        }),
        om.accessor('damageBlockedByArmor', {
            id: Au.damageBlockedByArmor,
            header: (a) =>
                e.jsx($u, { info: a, name: Au.damageBlockedByArmor, className: Gu.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(sm, nm), column: Tu },
        }),
        om.accessor('damageAssisted', {
            id: Au.damageAssisted,
            header: (a) => e.jsx($u, { info: a, name: Au.damageAssisted, className: Gu.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(sm, nm), column: Tu },
        }),
        om.accessor('damageAssistedStun', {
            id: Au.damageAssistedStun,
            header: (a) => e.jsx($u, { info: a, name: Au.damageAssistedStun, className: Gu.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(sm, nm), column: Tu },
        }),
        om.accessor('spotted', {
            id: Au.spotted,
            header: (a) => e.jsx($u, { info: a, name: Au.spotted, className: Gu.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(sm, nm), column: Tu },
        }),
        om.accessor('criticalDamage', {
            id: Au.criticalDamage,
            header: (a) => e.jsx($u, { info: a, name: Au.criticalDamage, className: Gu.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(sm, nm), column: Tu },
        }),
    ];
}
const dm = 'PersonalEfficiency_table_1104dbe8',
    um = 'PersonalEfficiency_table__closed_589e70ab',
    mm = 'PersonalEfficiency_hintKey_f91859a5',
    pm = 'PersonalEfficiency_messagesPanel_d1b1fa0b',
    _m = 'PersonalEfficiency_message_d772bbd7',
    fm = 'PersonalEfficiency_expandableOverlayWrapper_a5a56a5d',
    vm = 'PersonalEfficiency_expandableOverlayWrapper__hidden_97a3493d',
    bm = 'PersonalEfficiency_expandableOverlayWrapper__notInteractive_598241cc',
    hm = 'PersonalEfficiency_scrollableArea_c747d607',
    gm = 'PersonalEfficiency_scrollableArea__nonInteractive_589e70ab',
    ym = 'PersonalEfficiency_totalEfficiency_eb2592a8',
    xm = 'PersonalEfficiency_totalEfficiency__notInteractive_4b33f28d',
    Nm = 'PersonalEfficiency_totalEfficiencyTable_9139933',
    jm = 'PersonalEfficiency_tableWrapper_cd2e7488',
    wm = 'PersonalEfficiency_overlayDivider_52284c35',
    Im = 'PersonalEfficiency_overlayDivider__closed_6b67c790',
    Am = 'PersonalEfficiency_clarificationWrapper_5f3072b1',
    Cm = { row: 'PersonalEfficiency_headerRow_6acaa215' };
function Sm() {
    const { opened: s } = eu(),
        { api: n } = J();
    return (
        t.useLayoutEffect(() => {
            s && n.applyScroll(0, { immediate: !0 });
        }, [s, n]),
        e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: a(hm, !s && gm), onWheel: n.handleMouseWheel }),
                e.jsx(Eu.Header, { classNames: Cm }),
                e.jsx(Eu.Body, { children: e.jsx(Eu.Footer, {}) }),
            ],
        })
    );
}
const Bm = O.cubicBezier(0.33, 0, 0.25, 1),
    Pm = 'first',
    Rm = 'second',
    km = 'closedArrowInLoop',
    Em = 'openedArrowInLoop',
    Tm = l(function ({ visible: s, totalEfficiencyStylesApi: i }) {
        const { model: r } = No(),
            l = r.computes.personalEffiency(),
            { closedPosition: o, overlayApi: c, shadowApi: d, arrowStylesApi: u } = eu(),
            { breakpoint: m } = Se(),
            [p, _] = t.useState(km),
            [f, v] = w(() => ({ opacity: 0 })),
            b = t.useMemo(
                () =>
                    (function ({ breakpointName: t, assault: s, defend: n }) {
                        const i = 'small' === t ? Ze.extraSmall : t;
                        return [
                            om.accessor('account', {
                                id: Au.account,
                                header: () => e.jsx($u, { name: Au.account }),
                                footer: () => e.jsx(Mu, { assault: s, defend: n }),
                                enableSorting: !1,
                                cell: (a) => e.jsx(zu, { account: a.getValue() }),
                                meta: { className: a(sm, im), column: Du[Au.account][i] },
                            }),
                            om.accessor('vehicle', {
                                id: Au.vehicle,
                                header: void 0,
                                enableSorting: !1,
                                cell: (a) => e.jsx(tm, { vehicle: a.getValue() }),
                                meta: { column: Du[Au.vehicle][i] },
                            }),
                            om.accessor('killed', {
                                id: Au.targetKills,
                                header: (a) => e.jsx($u, { name: Au.targetKills, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(Xu, {
                                        name: Au.targetKills,
                                        value: a.getValue(),
                                        userName: a.row.original.account.username,
                                        className: rm,
                                    }),
                                meta: { column: Tu, className: a(sm, nm) },
                            }),
                            om.accessor('damageDealt', {
                                id: Au.damageDealt,
                                header: (a) => e.jsx($u, { name: Au.damageDealt, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(em, {
                                        ...a.getValue(),
                                        name: Au.damageDealt,
                                        userName: a.row.original.account.username,
                                        className: rm,
                                    }),
                                meta: { className: a(sm, nm), column: Tu },
                            }),
                            om.accessor('damageBlockedByArmor', {
                                id: Au.damageBlockedByArmor,
                                header: (a) => e.jsx($u, { name: Au.damageBlockedByArmor, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(em, {
                                        ...a.getValue(),
                                        name: Au.damageBlockedByArmor,
                                        userName: a.row.original.account.username,
                                        className: rm,
                                    }),
                                meta: { className: a(sm, nm), column: Tu },
                            }),
                            om.accessor('damageAssisted', {
                                id: Au.damageAssisted,
                                header: (a) => e.jsx($u, { name: Au.damageAssisted, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(qu, {
                                        value: a.getValue(),
                                        name: Au.damageAssisted,
                                        userName: a.row.original.account.username,
                                        className: lm,
                                    }),
                                meta: { className: a(sm, nm), column: Tu },
                            }),
                            om.accessor('damageAssistedStun', {
                                id: Au.damageAssistedStun,
                                header: (a) => e.jsx($u, { name: Au.damageAssistedStun, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(em, {
                                        ...a.getValue(),
                                        name: Au.damageAssistedStun,
                                        userName: a.row.original.account.username,
                                        className: rm,
                                    }),
                                meta: { className: a(sm, nm), column: Tu },
                            }),
                            om.accessor('spotted', {
                                id: Au.spotted,
                                header: (a) => e.jsx($u, { name: Au.spotted, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(Xu, {
                                        name: Au.spotted,
                                        value: a.getValue(),
                                        userName: a.row.original.account.username,
                                        className: rm,
                                    }),
                                meta: { className: a(sm, nm), column: Tu },
                            }),
                            om.accessor('criticalDamage', {
                                id: Au.criticalDamage,
                                header: (a) => e.jsx($u, { name: Au.criticalDamage, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(qu, {
                                        value: a.getValue(),
                                        name: Au.criticalDamage,
                                        userName: a.row.original.account.username,
                                        className: lm,
                                    }),
                                meta: { className: a(sm, nm), column: Tu },
                            }),
                        ];
                    })({ breakpointName: m.name, assault: l.assault, defend: l.defend }),
                [m.name, l.assault, l.defend],
            );
        return (
            t.useEffect(() => {
                if (s && p === km) return (u.stop(), void _(Pm));
                if (!s && p === Em) return (u.stop(), void _(Rm));
                switch (p) {
                    case km:
                        u.start({
                            from: { x: '-50%', y: '0', rotate: 180, opacity: 1 },
                            to: [
                                { x: '-50%', y: '-5rem', rotate: 180, opacity: 0 },
                                { x: '-50%', y: '0', rotate: 180, opacity: 0 },
                                { x: '-50%', y: '0', rotate: 180, opacity: 1 },
                            ],
                            config: { easing: Bm, duration: 800 },
                            loop: !0,
                        });
                        break;
                    case Pm:
                        (u.start({
                            to: { opacity: 0, x: '-50%', y: s ? '40rem' : '0', rotate: s ? 0 : 180 },
                            immediate: !0,
                        }),
                            i.start({
                                to: { opacity: s ? 0 : 1 },
                                delay: s ? 0 : 150,
                                config: { easing: Bm, duration: 200 },
                            }),
                            c.start({
                                to: { y: s ? '0' : o, backgroundColor: s ? 'rgba(22, 30, 40, 0.96)' : 'transparent' },
                                config: { easing: Bm, duration: 200 },
                                delay: s ? 0 : 150,
                                onRest: () => _(s ? Rm : km),
                            }),
                            d.start({
                                to: { opacity: s ? 1 : 0 },
                                delay: s ? 0 : 150,
                                config: { easing: Bm, duration: 200 },
                            }),
                            v.start({
                                to: { opacity: s ? 1 : 0 },
                                delay: s ? 150 : 0,
                                config: { easing: Bm, duration: 100 },
                            }));
                        break;
                    case Rm:
                        (u.start({
                            to: { opacity: 0, x: '-50%', y: s ? '40rem' : '0', rotate: s ? 0 : 180 },
                            immediate: !0,
                        }),
                            _(s ? Em : Pm));
                        break;
                    case Em: {
                        const e = m.weight > Be.large.weight ? '53rem' : '40rem';
                        u.start({
                            from: { x: '-50%', y: e, rotate: 0, opacity: 1 },
                            to: [
                                {
                                    x: '-50%',
                                    y: m.weight > Be.large.weight ? '58rem' : '45rem',
                                    rotate: 0,
                                    opacity: 0,
                                    config: { duration: 1e3 },
                                },
                                { x: '-50%', y: e, rotate: 0, opacity: 0, config: { duration: 400 } },
                                { x: '-50%', y: e, rotate: 0, opacity: 1, config: { duration: 200 } },
                            ],
                            config: { easing: Bm, duration: 800 },
                            loop: !0,
                        });
                        break;
                    }
                }
            }, [p, s, o, m.weight, u, c, d, v, i]),
            t.useLayoutEffect(() => {
                !1 === s && p === km && c.start({ to: { y: o }, immediate: !0 });
            }, [o, s, p, c]),
            e.jsx(n.div, {
                className: jm,
                style: f,
                children: e.jsx(Eu, { config: b, data: l, className: a(dm, !s && um), children: e.jsx(Sm, {}) }),
            })
        );
    }),
    Dm = l(function () {
        const { model: s } = No(),
            i = s.computes.personalEffiency(),
            r = s.battleInfo.get().finishReasonClarification,
            l = k.resolve('strings'),
            o = M(),
            { hintKeyRef: c, overlayDividerRef: d, personalEfficiencyRef: u, completedSteps: m } = ht(),
            p = !1 === m.has(_t.fifth),
            [_] = w(() => ({ from: { opacity: 0 }, ref: c })),
            [f] = w(() => ({ from: { maskSize: '0% 100%' }, ref: d })),
            [v] = w(() => ({ from: { opacity: 0 }, ref: u })),
            b = oe({ value: 159 }, { medium: { value: 187 }, large: { value: 199 }, extraLarge: { value: 267 } }),
            { active: h } = K(),
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
        ce(g, C);
        const S = t.useMemo(() => (y > 0 ? na(y) - b.value + 'rem' : '150%'), [y, b]),
            B = t.useMemo(cm, []);
        if (0 === i.assault && 0 === i.defend && 0 === i.rows.length)
            return e.jsxs(n.div, {
                style: v,
                className: pm,
                children: [
                    '' !== r &&
                        e.jsx('div', {
                            className: _m,
                            children: l.readOrEmpty(`battle_results.finish.clarification.${r}`),
                        }),
                    e.jsx('div', {
                        className: _m,
                        children: l.readOrEmpty('battle_results.common.battleEfficiency.noEfficiency'),
                    }),
                ],
            });
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(au, {
                    closedPosition: S,
                    visible: N,
                    changeVisible: j,
                    children: e.jsx('div', {
                        className: a(fm, 0 === y && vm, p && bm),
                        children: e.jsxs(_u, {
                            ref: g,
                            children: [
                                e.jsx(n.div, {
                                    className: a(wm, !1 === N && Im),
                                    style: f,
                                    children: e.jsx(_u.OverlayDivider, {}),
                                }),
                                e.jsx(Tm, { visible: N, totalEfficiencyStylesApi: A }),
                                e.jsx(n.div, {
                                    className: mm,
                                    style: _,
                                    children: e.jsx(_u.HintKey, { disabled: h !== Ia.overview }),
                                }),
                            ],
                        }),
                    }),
                }),
                e.jsx(n.div, {
                    style: I,
                    className: a(ym, (N || p) && xm),
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
                                    className: Am,
                                    onClick: (e) => e.stopPropagation(),
                                    children: e.jsx('div', {
                                        className: _m,
                                        children: l.readOrEmpty(`battle_results.finish.clarification.${r}`),
                                    }),
                                }),
                            e.jsx(Eu, { config: B, data: i, className: Nm, children: e.jsx(Eu.Header, {}) }),
                        ],
                    }),
                }),
            ],
        });
    }),
    Vm = L('Overview', zd),
    zm = l(function ({ className: s }) {
        var i;
        const r = k.resolve('strings'),
            l = M(),
            { model: o, controls: c } = No(),
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
            } = ht(),
            [g] = w(() => ({ from: { opacity: 0, y: '-10rem' }, ref: _ })),
            [y] = w(() => ({ from: { maskSize: '0% 100%' }, ref: f })),
            [x] = w(() => ({ from: { opacity: 0, y: '-10rem' }, ref: v })),
            [N] = w(() => ({ from: { opacity: 0, y: '10rem' }, ref: b })),
            { api: j, setCompletedAnimationIndexes: I } = Vo(),
            A = o.computes.premiumAndStandartEarnings(),
            C = null == (i = o.battleInfo.get()) ? void 0 : i.status,
            S = t.useMemo(() => (void 0 !== u && to.includes(null == u ? void 0 : u.modeName) ? ao : Yl), [u]);
        return (
            t.useEffect(() => {
                0 === m.length && h(!0);
            }, [m.length, h]),
            t.useEffect(() => {
                if (p === _t.immediate)
                    return (
                        j.start(() => ({ x: 0, y: 0, scale: 1, opacity: 1, immediate: !0 })),
                        h(!0),
                        void I(new Set(Te(m.length, (e) => e)))
                    );
                if (p === _t.first) {
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
                            config: { duration: 400 + n, easing: O.cubicBezier(1, 0, 0.95, 1) },
                            onRest() {
                                (l.play('achievementAppeared', { target: 'overview' }),
                                    t === m.length - 1 && h(!0),
                                    I((e) => W(e, t)));
                            },
                        };
                    }),
                        j.start((t) => ({
                            opacity: 1,
                            delay: 150 + 200 * t + (e - 500 * Math.log(m.length - t)),
                            config: {
                                duration: 250 + (a - 150 * Math.log(m.length - t)),
                                easing: O.cubicBezier(0.33, 0, 0.25, 1),
                            },
                        })));
                }
            }, [p, j, I, l, m.length, h]),
            e.jsxs(Vm, {
                className: s,
                children: [
                    e.jsx('div', { className: Vd }),
                    o.playerSatisfaction.get().isPlayerSatisfactionInterfaceEnabled &&
                        e.jsx(ic, {
                            state: o.playerSatisfaction.get().state,
                            onSatisfactionRatingSelected: c.onSatisfactionRatingSelected,
                        }),
                    e.jsx(Zd, {}),
                    e.jsxs('div', {
                        className: a(Od, 0 === m.length && Hd),
                        children: [
                            e.jsx('div', {
                                className: Wd,
                                children: e.jsx(n.div, {
                                    style: g,
                                    className: Gd,
                                    children: e.jsx('div', {
                                        className: Fd,
                                        'data-test-id': 'winStatus',
                                        children: V.toUpperCase(r.readOrEmpty(`battle_results.status.${C}`)),
                                    }),
                                }),
                            }),
                            e.jsxs('div', {
                                className: Md,
                                children: [
                                    e.jsx(Xo, { className: $d }),
                                    e.jsx(n.div, { style: x, className: qd, children: e.jsx(Td, {}) }),
                                    e.jsx(n.div, {
                                        style: y,
                                        className: Ld,
                                        children: e.jsx(xt, { classNames: { base: Xd, image: Kd } }),
                                    }),
                                    e.jsx(oc, {
                                        ...d,
                                        premiumAndStandartEarnings: A,
                                        applyBonus: c.applyBonus,
                                        handleAdvertisement: (e) => c.useAdvertisement(e),
                                        supportedAdvertisements: S,
                                        showBonusDetails: c.showBonusDetails,
                                        children: e.jsx(n.div, { style: N, children: e.jsx(hd, { className: Ud }) }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx(Dm, {}),
                ],
            })
        );
    }),
    Om = l(function (a) {
        const { model: t } = No(),
            s = t.personalEfficiency.achievements.get(),
            n = t.computes.personalInfo().vehicle.nation;
        return e.jsx(Oo, { achievements: s, vehicleNation: n, children: e.jsx(zm, { ...a }) });
    }),
    Hm = { divider: 'Divider_80a19f4b' },
    Wm = t.forwardRef(function ({ classNames: t, className: s, ...n }, i) {
        return e.jsx('div', {
            ...n,
            ref: i,
            className: a(Hm.divider, null == t ? void 0 : t.base, s),
            children: e.jsx(q, {
                className: a(Hm.dividerImage, null == t ? void 0 : t.image),
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    });
const Mm = {
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
function Gm(e, a) {
    return void 0 === a ? 'default' : a === e ? 'hover' : 'extinct';
}
const Fm = t.forwardRef(function (
    { achievement: s, achievementsLength: n, index: i, hoverIndex: r, setHoverIndex: l, ...o },
    c,
) {
    const d = M(),
        u = ia(
            s.tooltipId,
            t.useMemo(() => JSON.parse(s.tooltipArgs), [s.tooltipArgs]),
        ),
        m = oe(
            { width: '48rem', height: '48rem', path: `achievement.c_48x48.${s.iconName}` },
            { medium: { width: '67rem', height: '71rem', path: `achievement.${s.iconName}` } },
        );
    return e.jsx('div', {
        ...o,
        ...u,
        className: a(Mm.achievement, Mm[`achievement__${Gm(i, r)}`]),
        style: { zIndex: i === r ? n + 1 : n - i },
        onMouseEnter: function (e) {
            (u.onMouseEnter(e),
                l(i),
                d.play('mouse-enter', { original: e, target: 'team-efficiency:efficiency-details:achievement' }));
        },
        onMouseLeave: () => {
            (u.onMouseLeave(), l(void 0));
        },
        children: e.jsx(q, { ref: c, className: Mm.achievementIcon, ...m }, s.iconName),
    });
});
function $m({ vehicleStatusKey: e, anonymized: a, clanAbbrev: t, personal: s, abbondonBattle: n }) {
    if (s && n) return 'battle_results.common.vehicleState.prematureLeave';
    return !1 === vo.includes(e)
        ? `battle_results.common.vehicleState.${e}`
        : a || '' === t
          ? `battle_results.common.vehicleState.${e}_with_killername`
          : `battle_results.common.vehicleState.${e}_with_killername_and_clan`;
}
const Lm = l(function ({
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
            { model: _ } = No(),
            f = _.computes.personalInfo(),
            v = oe({ width: '230rem', height: '184rem' }, { medium: { width: '290rem', height: '232rem' } }),
            b = yo({ personal: o, platoonType: go(s, f.squadIndex, l), anonymizer: n.anonymizer }),
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
            className: Mm.header,
            children: [
                e.jsx('div', {
                    className: Mm.vehicleImageWrapper,
                    children: e.jsx(sa, { name: N ? 'tank_empty' : i.techName, width: v.width, height: v.height }),
                }),
                e.jsxs('div', {
                    className: Mm.info,
                    children: [
                        e.jsxs(Qe, {
                            className: Mm.accountInfo,
                            children: [
                                n.badge !== eo &&
                                    e.jsx(Qe.Badge, {
                                        className: Mm.accountInfoGap,
                                        size: Qe.Badge.sizes.x48x48,
                                        badgeId: n.badge,
                                    }),
                                e.jsx(Qe.Name, {
                                    className: a(Mm.accountName, Mm.accountInfoGap),
                                    children: e.jsx(ea, { text: b ? n.fakeUsername : n.username }),
                                }),
                                '' !== n.clanAbbreviation &&
                                    !b &&
                                    e.jsx(Qe.ClanTag, {
                                        className: Mm.clanAbbreviation,
                                        children: e.jsx(P, {
                                            path: 'common.clanTag',
                                            params: { abbrev: n.clanAbbreviation },
                                            brackets: { start: '{', end: '}' },
                                        }),
                                    }),
                                n.igrType !== Il &&
                                    e.jsx(Qe.IgrIcon, { size: Qe.IgrIcon.sizes.x64x28, className: Mm.accountInfoGap }),
                                n.suffixBadge !== eo &&
                                    e.jsx(Qe.Stripe, {
                                        size: Qe.Stripe.sizes.regular,
                                        badgeId: n.suffixBadge,
                                        className: Mm.accountInfoGap,
                                    }),
                                n.anonymizer &&
                                    e.jsx(Qe.AnonymizerIcon, {
                                        ...h,
                                        size: Qe.AnonymizerIcon.sizes.x32x32,
                                        className: Mm.anonymizerIcon,
                                    }),
                            ],
                        }),
                        e.jsx('div', {
                            className: Mm.vehicle,
                            children: N
                                ? e.jsx(P, { path: 'ingame_gui.players_panel.unknown_vehicle' })
                                : e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx(T, { value: i.tier, className: a(Mm.vehicleLevel, Mm.vehicleGap) }),
                                          e.jsx(D, {
                                              type: i.type,
                                              size: 'x24x24',
                                              className: a(Mm.vehicleType, Mm.vehicleGap),
                                          }),
                                          e.jsx('div', { className: Mm.vehicleName, children: i.longName }),
                                      ],
                                  }),
                        }),
                        e.jsx('div', {
                            className: Mm.vehicleState,
                            children: e.jsx(P, {
                                path: $m({
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
                                className: Mm.achievements,
                                children: Q(_l(r), (a, t) =>
                                    e.jsx(
                                        Fm,
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
    Xm = L('StatisticsLabel'),
    Km = k.resolve('strings'),
    qm = t.forwardRef(function ({ labelKey: a, ...t }, s) {
        return e.jsx(Xm, { ...t, ref: s, children: Km.readOrEmpty(a) });
    }),
    Um = 'Value_798a6cdd',
    Ym = 'Value_separator_798a6cdd',
    Jm = k.resolve('strings');
function Zm(e, a) {
    switch (e) {
        case so.Integer:
            return V.formatNumber('integral', a);
        case so.Float:
            return V.formatReal('fractional', a);
        default:
            return a;
    }
}
const Qm = L('StatisticsValue', Um),
    ep = t.forwardRef(function (
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
        return e.jsx(Qm, {
            ...c,
            ref: d,
            className: a(null == o ? void 0 : o.base, l),
            children: Q(n, (l, c) =>
                e.jsxs(
                    t.Fragment,
                    {
                        children: [
                            e.jsx('div', {
                                className: a(
                                    0 === l && (null == o ? void 0 : o.zeroValue),
                                    l < 0 && (null == o ? void 0 : o.negativeValue),
                                ),
                                children: Zm(i, l),
                            }),
                            c < n.length - 1 &&
                                e.jsxs('div', {
                                    className: a(Ym, null == o ? void 0 : o.separator),
                                    children: [' ', Jm.readOrEmpty(r), ' '],
                                }),
                        ],
                    },
                    `${s}_value_${c}`,
                ),
            ),
        });
    }),
    ap = 'Index_scrollAreaContent_52a570a',
    tp = 'Index_scrollAreaContent__initialized_b2629fde',
    sp = 'Index_item_6b7cdfb0',
    np = 'Index_separator_add04e19',
    ip = L('Statistics', 'Index_statistics_638478ff'),
    rp = L('StatisticsItem', sp),
    lp = L('StatisticsItemSeparator', np);
function op({ children: t, scrollbarProps: s, scrollAreaProps: n }) {
    var i;
    const r = J(),
        l = Bt(r.api);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(Z, {
                ...n,
                classNames: {
                    ...(null == n ? void 0 : n.classNames),
                    content: a(ap, l && tp, null == (i = null == n ? void 0 : n.classNames) ? void 0 : i.content),
                },
                children: t,
            }),
            e.jsx(Y, { ...s }),
        ],
    });
}
const cp = t.forwardRef(function ({ scrollbarProps: a, scrollAreaProps: t, ...s }, n) {
    return e.jsx(ip, {
        ...s,
        ref: n,
        children: e.jsx(U, { children: e.jsx(op, { ...s, scrollbarProps: a, scrollAreaProps: t }) }),
    });
});
((cp.Item = rp), (cp.Value = ep), (cp.Label = qm), (cp.Separator = lp));
const dp = {
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
function up({ squareSize: a = 1, spacing: s = 2, backgroundColor: n = '#d9d9d9' }) {
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
            className: dp.separator,
            children: Array.from({ length: r }).map((t, s) =>
                e.jsx(
                    'div',
                    {
                        className: dp.separatorSquare,
                        style: { backgroundColor: n, width: `${a}rem`, height: `${a}rem`, left: s * o + 'rem' },
                    },
                    s,
                ),
            ),
        })
    );
}
function mp({ list: s }) {
    return e.jsx(cp, {
        scrollbarProps: { classNames: { base: dp.scrollbar } },
        scrollAreaProps: { classNames: { content: dp.scrollAreaContent } },
        children: Q(s, (s) =>
            e.jsxs(
                t.Fragment,
                {
                    children: [
                        e.jsxs(cp.Item, {
                            className: dp.listItem,
                            children: [
                                e.jsx(cp.Label, {
                                    className: dp.label,
                                    labelKey: `battle_results.team.stats.labels_${s.labelKey}`,
                                }),
                                e.jsx(cp.Separator, { className: dp.listItemSeparator, children: e.jsx(up, {}) }),
                                e.jsx(cp.Value, {
                                    classNames: {
                                        base: dp.value,
                                        zeroValue: dp.zeroValue,
                                        separator: dp.valueSeparator,
                                    },
                                    labelKey: s.labelKey,
                                    value: s.value,
                                    type: s.paramValueType,
                                }),
                            ],
                        }),
                        void 0 !== s.details &&
                            Q(s.details, (t) =>
                                e.jsxs(
                                    cp.Item,
                                    {
                                        className: a(dp.listItem, dp.listSubItem),
                                        children: [
                                            e.jsx(cp.Label, {
                                                className: dp.label,
                                                labelKey: `battle_results.team.stats.labels_${t.labelKey}`,
                                            }),
                                            e.jsx(cp.Separator, {
                                                className: dp.listItemSeparator,
                                                children: e.jsx(up, {}),
                                            }),
                                            e.jsx(cp.Value, {
                                                classNames: {
                                                    base: dp.value,
                                                    zeroValue: dp.zeroValue,
                                                    separator: dp.valueSeparator,
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
const pp = 'EfficiencyDetails_efficiencyDetails__allies_20b1febc',
    _p = 'EfficiencyDetails_efficiencyDetails__enemies_23a29af',
    fp = 'EfficiencyDetails_divider_85b11efd',
    vp = 'EfficiencyDetails_dividerImage_5b9d06d2',
    bp = 'EfficiencyDetails_closeIcon_8d81da90',
    hp = 'EfficiencyDetails_statistics_30a81815',
    gp = L('EfficiencyDetails', 'EfficiencyDetails_efficiencyDetails_db8069eb', {
        variants: { team: { [fo.allies]: pp, [fo.enemies]: _p } },
    }),
    yp = l(function ({ team: a, className: s }) {
        const { model: n, controls: i } = No(),
            r = n.computes.efficiencyDetails(),
            l = M(),
            o = t.useRef(null);
        return (
            t.useEffect(() => {
                const e = Oe.down(([, e]) => {
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
                : e.jsxs(gp, {
                      team: a,
                      className: s,
                      ref: o,
                      onClick: (e) => {
                          e.stopPropagation();
                      },
                      children: [
                          e.jsx(Lm, {
                              team: a,
                              account: r.account,
                              squadIndex: r.squadIndex,
                              achievements: r.achievements,
                              personal: r.personal,
                              userStatus: r.userStatus,
                              vehicle: r.vehicle,
                              killer: r.killer,
                          }),
                          e.jsx('div', { className: hp, children: e.jsx(mp, { list: r.detailedStatistics }) }),
                          e.jsx(Wm, { classNames: { base: fp, image: vp } }),
                          e.jsx(q, {
                              className: bp,
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
    xp = 'squadIndex',
    Np = 'account',
    jp = 'vehicle',
    wp = 'achievements',
    Ip = 'damageDealt',
    Ap = 'kills',
    Cp = 'earnedXp',
    Sp = 0,
    Bp = 0,
    Pp = '',
    Rp = 'AccountInfoCell_accountInfo_dec8771',
    kp = 'AccountInfoCell_accountName_9a181e4d',
    Ep = 'AccountInfoCell_clanAbbreviation_99f1cc86',
    Tp = 'AccountInfoCell_badge_b101914f',
    Dp = 'AccountInfoCell_anonymizerIcon_a1d51ca4',
    Vp = 'AccountInfoCell_igrIcon_158694e7',
    zp = 'AccountInfoCell_stripe_fefba7b2',
    Op = l(function ({ account: t, team: s, platoon: n, className: i, classNames: r, ...l }) {
        const { model: o } = No(),
            c = o.computes.personalInfo(),
            d = yo({
                personal: c.account.username === t.username,
                platoonType: go(s, c.squadIndex, n),
                anonymizer: t.anonymizer,
            });
        return e.jsxs(Qe, {
            ...l,
            className: a(Rp, i),
            children: [
                t.badge !== eo &&
                    e.jsx(Qe.Badge, {
                        size: Qe.Badge.sizes.x24x24,
                        badgeId: t.badge,
                        className: a(Tp, null == r ? void 0 : r.badge),
                    }),
                e.jsx(Qe.Name, {
                    className: a(kp, null == r ? void 0 : r.username),
                    children: e.jsx(ea, { text: d ? t.fakeUsername : t.username }),
                }),
                '' !== t.clanAbbreviation &&
                    !d &&
                    e.jsx(Qe.ClanTag, {
                        className: a(Ep, null == r ? void 0 : r.clanAbbreviation),
                        children: e.jsx(P, {
                            path: 'common.clanTag',
                            params: { abbrev: t.clanAbbreviation },
                            brackets: { start: '{', end: '}' },
                        }),
                    }),
                t.igrType !== Il &&
                    e.jsx(Qe.IgrIcon, {
                        size: Qe.IgrIcon.sizes.x34x16,
                        className: a(Vp, null == r ? void 0 : r.igrIcon),
                    }),
                t.suffixBadge !== eo &&
                    e.jsx(Qe.Stripe, {
                        size: Qe.Stripe.sizes.default,
                        badgeId: t.suffixBadge,
                        className: zp,
                        classNames: null == r ? void 0 : r.suffixBadge,
                    }),
                t.anonymizer &&
                    e.jsx(Qe.AnonymizerIcon, {
                        size: Qe.AnonymizerIcon.sizes.x24x24,
                        className: a(Dp, null == r ? void 0 : r.anonymizerIcon),
                    }),
            ],
        });
    }),
    Hp = {
        achievementCell: 'AchievementsCell_achievementCell_e9bf973c',
        achievementsAmount: 'AchievementsCell_achievementsAmount_349c209a',
    };
function Wp({ achievements: a }) {
    const t = k.resolve('strings'),
        s = E({ body: Q(_l(a), (e) => t.readOrEmpty(`achievements.${e.name}`)).join('\n') }),
        n = a.length;
    return 0 === n
        ? null
        : e.jsxs('div', {
              ...s,
              className: Hp.achievementCell,
              children: [
                  e.jsx(q, { path: 'library.medal', width: '32rem', height: '32rem' }),
                  e.jsx('div', { className: Hp.achievementsAmount, children: V.formatNumber('integral', n) }),
              ],
          });
}
const Mp = { behaviour: Je.static, size: '32rem' },
    Gp = { behaviour: Je.static, size: '194rem' },
    Fp = { behaviour: Je.static, size: '272rem' },
    $p = { behaviour: Je.static, size: '320rem' },
    Lp = { behaviour: Je.static, size: '180rem' },
    Xp = { behaviour: Je.static, size: '236rem' },
    Kp = { behaviour: Je.static, size: '292rem' },
    qp = { behaviour: Je.static, size: '56rem' },
    Up = { behaviour: Je.static, size: '60rem' },
    Yp = { behaviour: Je.static, size: '80rem' },
    Jp = { behaviour: Je.static, size: '40rem' },
    Zp = { behaviour: Je.static, size: '60rem' },
    Qp = { behaviour: Je.static, size: '60rem' },
    e_ = { behaviour: Je.static, size: '56rem' },
    a_ = { behaviour: Je.static, size: '60rem' },
    t_ = { behaviour: Je.static, size: '80rem' },
    s_ = { behaviour: Je.static, size: '40rem' },
    n_ = {
        [xp]: { [Ze.extraSmall]: Mp, [Ze.medium]: Mp, [Ze.large]: Mp, [Ze.extraLarge]: Mp },
        [Np]: { [Ze.extraSmall]: Gp, [Ze.medium]: Fp, [Ze.large]: Fp, [Ze.extraLarge]: $p },
        [jp]: { [Ze.extraSmall]: Lp, [Ze.medium]: Xp, [Ze.large]: Xp, [Ze.extraLarge]: Kp },
        [Ip]: { [Ze.extraSmall]: qp, [Ze.medium]: Up, [Ze.large]: Up, [Ze.extraLarge]: Yp },
        [Ap]: { [Ze.extraSmall]: Jp, [Ze.medium]: Zp, [Ze.large]: Zp, [Ze.extraLarge]: Qp },
        [Cp]: { [Ze.extraSmall]: e_, [Ze.medium]: a_, [Ze.large]: a_, [Ze.extraLarge]: t_ },
        [wp]: { [Ze.extraSmall]: s_, [Ze.medium]: s_, [Ze.large]: s_, [Ze.extraLarge]: s_ },
    },
    i_ = {
        headerCell__asc: 'HeaderCell_headerCell__asc_204e6a44',
        headerCell__desc: 'HeaderCell_headerCell__desc_dc5a7202',
        headerCell: 'HeaderCell_headerCell_5b34d1b1',
        headerCell__icon: 'HeaderCell_headerCell__icon_cfa14ddf',
        headerCell__text: 'HeaderCell_headerCell__text_b476890c',
    },
    r_ = {
        [xp]: 'library.shield',
        [jp]: 'library.panzer',
        [Ip]: 'library.cross_with_gap',
        [Ap]: 'library.crossed_tank',
        [Cp]: 'library.star',
        [wp]: 'library.medal',
    },
    l_ = {
        [xp]: 'squadHeader',
        [Np]: 'playerHeader',
        [jp]: 'tankHeader',
        [Ip]: 'damageHeader',
        [Ap]: 'fragHeader',
        [Cp]: 'xpHeader',
        [wp]: 'medalHeader',
    },
    o_ = t.forwardRef(function ({ name: t, team: s, column: n, className: i, ...r }, l) {
        const o = n.getIsSorted(),
            c = k.resolve('strings'),
            d = E({
                header: c.readOrEmpty(`battle_results.team.${l_[t]}.header`),
                body: c.readOrEmpty(`battle_results.team.${l_[t]}.body`),
            }),
            u = t === Np;
        return e.jsx('div', {
            ...r,
            ...d,
            ref: l,
            className: a(i_.headerCell, u ? i_.headerCell__text : i_.headerCell__icon, o && i_[`headerCell__${o}`], i),
            children: u
                ? c.readOrEmpty(`battle_results.team.stats.${s}`)
                : e.jsx(q, { width: '32rem', height: '32rem', path: r_[t] }),
        });
    }),
    c_ = { numberValueCell: 'NumberValueCell_numberValueCell_8840a07' };
function d_({ value: t, className: s, showZero: n = !0 }) {
    return !1 === n && 0 === t
        ? null
        : e.jsx('div', { className: a(c_.numberValueCell, s), children: V.formatNumber('integral', t) });
}
const u_ = {
        platoon: 'PlatoonCell_platoon_5fe0374b',
        platoonText: 'PlatoonCell_platoonText_b6a98287',
        platoonText__personal: 'PlatoonCell_platoonText__personal_d021db4c',
        platoonText__alien: 'PlatoonCell_platoonText__alien_9767e814',
    },
    m_ = { [bo.alien]: 'library.platoon_indicator_gray', [bo.personal]: 'library.platoon_indicator_orange' },
    p_ = l(function ({ platoon: t, team: s }) {
        const { model: n } = No(),
            i = go(s, n.computes.personalInfo().squadIndex, t);
        if (null === i) return null;
        const r = m_[i];
        return e.jsxs('div', {
            className: u_.platoon,
            children: [
                e.jsx(q, { path: r, width: '32rem', height: '32rem' }),
                e.jsx('div', { className: a(u_.platoonText, u_[`platoonText__${i}`]), children: t }),
            ],
        });
    }),
    __ = {
        vehicle: 'VehicleCell_vehicle_386f696d',
        vehicleImageWrapper: 'VehicleCell_vehicleImageWrapper_aa1c27bd',
        vehicleTypeWrapper: 'VehicleCell_vehicleTypeWrapper_3f1f3f6d',
        vehicleLevel: 'VehicleCell_vehicleLevel_1a4134b1',
        vehicleName: 'VehicleCell_vehicleName_eaeb9715',
        vehicleName__unknown: 'VehicleCell_vehicleName__unknown_726ac1d0',
    };
function f_({ vehicle: t, classNames: s, className: n }) {
    const i = void 0 === t;
    return e.jsxs('div', {
        className: a(__.vehicle, n),
        children: [
            e.jsx('div', {
                className: a(__.vehicleImageWrapper, null == s ? void 0 : s.imageWrapper),
                children: e.jsx(sa, {
                    size: sa.size.x120x96,
                    name: i ? 'tank_empty' : t.techName,
                    className: null == s ? void 0 : s.image,
                }),
            }),
            !1 === i &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(T, { value: t.tier, className: a(__.vehicleLevel, null == s ? void 0 : s.level) }),
                        e.jsx('div', {
                            className: a(__.vehicleTypeWrapper, null == s ? void 0 : s.typeWrapper),
                            children: e.jsx(D, {
                                size: 'x24x24',
                                type: t.type,
                                className: null == s ? void 0 : s.type,
                            }),
                        }),
                    ],
                }),
            e.jsx('div', {
                className: a(__.vehicleName, i && __.vehicleName__unknown, null == s ? void 0 : s.name),
                children: i
                    ? e.jsx(P, { path: 'ingame_gui.players_panel.unknown_vehicle' })
                    : e.jsx(ea, { text: t.name }),
            }),
        ],
    });
}
const v_ = {
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
    b_ = {
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
    h_ = S();
function g_(e, a, t) {
    const s = e.getValue('account'),
        n = e.getValue('squadIndex');
    return yo({
        personal: a.account.username === s.username,
        platoonType: go(t, a.squadIndex, n),
        anonymizer: s.anonymizer,
    })
        ? s.fakeUsername
        : s.username;
}
function y_(e, a) {
    return e.getValue('damageDealt').damageDealt - a.getValue('damageDealt').damageDealt;
}
const x_ = { [ca.heavyTank]: 5, [ca.mediumTank]: 4, [ca['AT-SPG']]: 3, [ca.lightTank]: 2, [ca.SPG]: 1 };
function N_({ team: t, personalInfo: s, breakpointName: n }) {
    const i = (e, a) =>
            (function (e, a, t, s) {
                const n = g_(e, t, s),
                    i = g_(a, t, s);
                return n.localeCompare(i);
            })(e, a, s, t),
        r = 'small' === n ? Ze.extraSmall : n;
    return [
        h_.accessor('squadIndex', {
            id: xp,
            header: (a) => e.jsx(o_, { name: xp, column: a.column }),
            sortingFn: (e, a) => {
                const t = a.getValue('squadIndex') - e.getValue('squadIndex');
                return 0 !== t ? t : i(e, a);
            },
            cell: (a) => e.jsx(p_, { team: t, platoon: a.cell.getValue() }),
            meta: { column: n_[xp][r] },
        }),
        h_.accessor('account', {
            id: Np,
            header: (a) => e.jsx(o_, { team: t, name: Np, column: a.column }),
            sortDescFirst: !1,
            sortingFn: i,
            cell: (a) =>
                e.jsx(Op, {
                    account: a.cell.getValue(),
                    team: t,
                    platoon: a.row.original.squadIndex,
                    className: b_.accountInfo,
                    classNames: { username: b_.accountName, clanAbbreviation: b_.clanAbbreviation },
                }),
            meta: { column: n_[Np][r], className: v_.alignLeft },
        }),
        h_.accessor('vehicle', {
            id: jp,
            header: (a) => e.jsx(o_, { name: jp, column: a.column }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    const t = e.getValue('vehicle'),
                        s = a.getValue('vehicle'),
                        n = (null == t ? void 0 : t.tier) ?? Sp,
                        i = (null == s ? void 0 : s.tier) ?? Sp,
                        r = (null == t ? void 0 : t.type) ? x_[t.type] : Bp,
                        l = (null == s ? void 0 : s.type) ? x_[s.type] : Bp,
                        o = (null == t ? void 0 : t.name) ?? Pp,
                        c = (null == s ? void 0 : s.name) ?? Pp;
                    return n - i || r - l || c.localeCompare(o);
                })(e, a) || i(e, a),
            cell: (a) =>
                e.jsx(f_, {
                    vehicle: a.cell.getValue(),
                    classNames: {
                        name: b_.vehicleText,
                        level: b_.vehicleText,
                        type: b_.vehicleType,
                        image: b_.vehicleImage,
                    },
                }),
            meta: { column: n_[jp][r] },
        }),
        h_.accessor('efficiencyValues', {
            id: Ip,
            header: (a) => e.jsx(o_, { name: Ip, column: a.column }),
            sortingFn: (e, a) => y_(e, a) || i(e, a),
            cell: (t) =>
                e.jsx(d_, {
                    value: t.getValue().damageDealt,
                    className: a(b_.numberValue, b_.numberValue__alignRight),
                }),
            meta: { column: n_[Ip][r], className: v_.alignRight },
        }),
        h_.accessor('efficiencyValues', {
            id: Ap,
            header: (a) => e.jsx(o_, { name: Ap, column: a.column }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    return e.getValue('kills').substractedAlliesKills - a.getValue('kills').substractedAlliesKills;
                })(e, a) || i(e, a),
            cell: (a) =>
                e.jsx(d_, { showZero: !1, value: a.getValue().substractedAlliesKills, className: b_.numberValue }),
            meta: { column: n_[Ap][r] },
        }),
        h_.accessor('efficiencyValues', {
            id: Cp,
            header: (a) => e.jsx(o_, { name: Cp, column: a.column }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    return e.getValue('earnedXp').earnedXp - a.getValue('earnedXp').earnedXp;
                })(e, a) ||
                y_(e, a) ||
                (function (e, a) {
                    const t = e.getValue('vehicle'),
                        s = a.getValue('vehicle');
                    return ((null == t ? void 0 : t.vehicleCD) ?? 0) - ((null == s ? void 0 : s.vehicleCD) ?? 0);
                })(e, a) ||
                i(e, a),
            cell: (a) => e.jsx(d_, { value: a.getValue().earnedXp, className: b_.numberValue }),
            meta: { column: n_[Cp][r], className: v_.alignRight },
        }),
        h_.accessor('achievements', {
            id: wp,
            header: (a) => e.jsx(o_, { name: wp, column: a.column, className: v_.achievementCell }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    return e.getValue('achievements').length - a.getValue('achievements').length;
                })(e, a) || i(e, a),
            cell: (a) => e.jsx(Wp, { achievements: a.getValue() }),
            meta: { column: n_[wp][r], className: v_.alignLeft },
        }),
    ];
}
const j_ = 'Header_row_e61ae0d9',
    w_ = 'Header_rowDivider_f54d9df6',
    I_ = 'Header_rowDividerImage_19f6e11',
    A_ = 'Header_cell_70aa1da5';
function C_({ className: a }) {
    const { table: t } = Xe(),
        s = M();
    return e.jsxs($e.Header, {
        className: a,
        children: [
            e.jsx(Wm, { classNames: { base: w_, image: I_ } }),
            Q(t.getHeaderGroups(), (a, t) =>
                e.jsx(
                    $e.Row,
                    {
                        className: j_,
                        children: Q(a.headers, (a, n) => {
                            return e.jsx(
                                $e.Cell,
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
                                    cell: { ...a, rowIndex: t, index: n, tablePart: Le.header },
                                    className: A_,
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
const S_ = 'SelectedRowTail_selectedRowTail_8abda9c8',
    B_ = 'SelectedRowTail_selectedRowTail__hasWidth_6cb87e09',
    P_ = 'SelectedRowTail_selectedRowVerticalLine_c502cc58',
    R_ = 'SelectedRowTail_selectedRowTriangle_6f2b6bb3',
    k_ = 'SelectedRowTail_rowDivider_8fbc881',
    E_ = 'SelectedRowTail_rowDivider__bottom_4111cb99',
    T_ = 'SelectedRowTail_rowDividerImage_d11f29d5';
function D_({ className: t, short: s }) {
    return e.jsxs('div', {
        className: a(S_, !s && B_, t),
        children: [
            e.jsx(Wm, { classNames: { base: k_, image: T_ } }),
            e.jsx(Wm, { classNames: { base: a(k_, E_), image: T_ } }),
            e.jsx('div', { className: P_ }),
            e.jsx('div', { className: R_ }),
        ],
    });
}
const V_ = 'personal',
    z_ = 'personalSquad',
    O_ = 'none',
    H_ = l(function ({ row: s, team: n, rowIndex: i, scrollbarVisible: r }) {
        const { model: l, controls: o } = No(),
            c = M(),
            d = We(
                (e) => {
                    (e.stopPropagation(),
                        c.play('click', { original: e, target: 'team-efficiency:efficiency-table:body:row' }),
                        o.teamEfficiency.selectRow({ team: n, username: s.original.account.username }));
                },
                [o.teamEfficiency, s.original.account.username, c, n],
                400,
            ),
            u = l.teamsStatistic.selectedRow.get(),
            m = l.computes.personalInfo(),
            p = (() => {
                if (m.account.username === s.original.account.username) return V_;
                return go(n, m.squadIndex, s.original.squadIndex) === bo.personal ? z_ : O_;
            })(),
            _ = s.original.account.teamKiller,
            f = s.original.account.killed,
            v = (null == u ? void 0 : u.team) === n && u.username === s.original.account.username,
            b = Fe({
                args: t.useMemo(() => {
                    var e;
                    return {
                        vehicleCD: null == (e = s.original.vehicle) ? void 0 : e.vehicleCD,
                        databaseID: s.original.databaseId,
                    };
                }, [s.original]),
            });
        return e.jsxs($e.Row, {
            ...(p !== V_ && b),
            onMouseEnter: (e) =>
                c.play('mouse-enter', { target: 'team-efficiency:efficiency-table:body:row', original: e }),
            className: a(
                b_.tableBodyRow,
                v && b_.tableBodyRow__selected,
                p !== O_ && b_[`tableBodyRow__${p}`],
                _ && b_.tableBodyRow__teamKiller,
                f && b_.tableBodyRow__killed,
            ),
            onClick: d,
            children: [
                e.jsxs('div', {
                    className: b_.selectedOverlay,
                    children: [
                        e.jsx(Wm, { classNames: { base: b_.selectedOverlayDivider, image: b_.selectedOverlayImage } }),
                        e.jsx(Wm, {
                            classNames: {
                                base: a(b_.selectedOverlayDivider, b_.selectedOverlayDivider__bottom),
                                image: b_.selectedOverlayImage,
                            },
                        }),
                        e.jsx(D_, {
                            short: r && n === fo.allies,
                            className: a(b_.selectedRowTail, b_[`selectedRowTail__${n}`]),
                        }),
                    ],
                }),
                e.jsx(Wm, {
                    classNames: { base: a(b_.rowDivider, v && b_.rowDivider__selected), image: b_.rowDividerImage },
                }),
                Q(s.getVisibleCells(), (a, t) =>
                    e.jsx(
                        $e.Cell,
                        {
                            cell: { ...a, rowIndex: i, index: t, tablePart: Le.body },
                            children: C(a.column.columnDef.cell, a.getContext()),
                        },
                        a.id,
                    ),
                ),
                e.jsx('div', { className: b_.hoverOverlay }),
            ],
        });
    });
function W_({ team: a }) {
    const { table: s } = Xe(),
        { api: i } = J(),
        r = Ke(),
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
        e.jsxs($e.Body, {
            className: v_.tableBody,
            children: [
                e.jsx(n.div, {
                    className: v_.mask,
                    style: d,
                    children: e.jsx(Z, {
                        classNames: { wrapper: v_.scrollWrapper, content: v_.scrollAreaContent },
                        children: e.jsx('div', {
                            ref: l,
                            className: v_.rowsWrapper,
                            children: Q(s.getRowModel().rows, (t, s) =>
                                e.jsx(H_, { row: t, rowIndex: s, team: a, scrollbarVisible: o }, t.id),
                            ),
                        }),
                    }),
                }),
                e.jsx(Y, { classNames: { base: v_.scrollBar } }),
            ],
        })
    );
}
const M_ = L('TeamEfficiencyTable', v_.efficiencyTable, {
        variants: { team: { [fo.allies]: v_.efficiencyTable__allies, [fo.enemies]: v_.efficiencyTable__enemies } },
    }),
    G_ = {
        [Al.Squad]: xp,
        [Al.Player]: Np,
        [Al.Damage]: Ip,
        [Al.Frag]: Ap,
        [Al.Xp]: Cp,
        [Al.Vehicle]: jp,
        [Al.Medal]: wp,
    },
    F_ = l(({ team: a, data: s, className: n }) => {
        const { model: i, controls: r } = No(),
            l = i.computes.personalInfo(),
            o = i.teamsStatistic.sorting.get(),
            c = t.useMemo(() => [{ id: G_[o.column], desc: o.sortDirection === Cl.Desc }], [o.column, o.sortDirection]),
            d = Se().breakpoint.name,
            u = t.useCallback(
                (e) => {
                    const a = (e instanceof Function ? e(c) : e)[0] ?? { id: jp, desc: !0 };
                    r.teamEfficiency.sort({
                        column: Object.keys(G_).find((e) => G_[e] === a.id) || Al.Vehicle,
                        sortDirection: a.desc ? Cl.Desc : Cl.Asc,
                    });
                },
                [c, r.teamEfficiency],
            ),
            m = t.useMemo(() => N_({ team: a, personalInfo: l, breakpointName: d }), [a, d, l]);
        return (
            te(da(d), `Such breakpoint ${d} is not supported`),
            e.jsx(Ye, {
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
                children: e.jsx(M_, {
                    team: a,
                    className: n,
                    children: e.jsxs(
                        $e,
                        {
                            className: v_.table,
                            children: [
                                e.jsx(C_, { className: v_.header }),
                                e.jsx(U, { children: e.jsx(W_, { team: a }) }),
                            ],
                        },
                        d,
                    ),
                }),
            })
        );
    }),
    $_ = {
        base: 'TeamEfficiency_51caa749',
        wrapper: 'TeamEfficiency_wrapper_a2a49ce',
        table: 'TeamEfficiency_table_5763cf17',
        table__hidden: 'TeamEfficiency_table__hidden_e8864815',
        details: 'TeamEfficiency_details_f087bb8e',
        details__visible: 'TeamEfficiency_details__visible_eaf91b76',
    },
    L_ = L('TeamEfficiency', $_.base),
    X_ = l(function ({ className: t }) {
        const { model: s } = No(),
            n = s.teamsStatistic.allies.get(),
            i = s.teamsStatistic.enemies.get(),
            r = s.teamsStatistic.selectedRow.get();
        return e.jsx(L_, {
            className: a($_[`base__${null == r ? void 0 : r.team}`], t),
            children: e.jsxs('div', {
                className: $_.wrapper,
                children: [
                    e.jsx(yp, {
                        team: fo.enemies,
                        className: a($_.details, (null == r ? void 0 : r.team) === fo.enemies && $_.details__visible),
                    }),
                    e.jsx(F_, {
                        data: n,
                        team: fo.allies,
                        className: a($_.table, (null == r ? void 0 : r.team) === fo.enemies && $_.table__hidden),
                    }),
                    e.jsx(yp, {
                        team: fo.allies,
                        className: a($_.details, (null == r ? void 0 : r.team) === fo.allies && $_.details__visible),
                    }),
                    e.jsx(F_, {
                        data: i,
                        team: fo.enemies,
                        className: a($_.table, (null == r ? void 0 : r.team) === fo.allies && $_.table__hidden),
                    }),
                ],
            }),
        });
    }),
    K_ = {
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
        info: 'App_info_ad190031',
    },
    q_ = L('PostBattle', K_.base),
    U_ = L('PostBattleNavigation', K_.navigation);
function Y_() {
    const { active: t } = K();
    return e.jsxs('div', {
        className: a(K_.content, K_[`content__${t}`]),
        children: [
            e.jsx(Om, { className: a(K_.tab, K_.tab__overview) }),
            e.jsx(X_, { className: a(K_.tab, K_.tab__teamScore) }),
            e.jsx(To, { className: a(K_.tab, K_.tab__missionProgress) }),
            e.jsx(el, { className: a(K_.tab, K_.tab__financialReport) }),
        ],
    });
}
const J_ = l(function () {
        const s = k.resolve('strings'),
            i = M(),
            r = ua(),
            { battleInfoRef: l, navigationRef: o, completedSteps: c, step: d, readyForNotifications: u } = ht(),
            m = et(),
            [p] = w(() => ({ from: { opacity: 0, y: '-10rem' }, ref: o })),
            [_] = w(() => ({ from: { opacity: 0 }, ref: l })),
            { model: f, controls: v } = No(),
            b = f.computes.personalInfo(),
            h = f.battleInfo.get(),
            { active: g } = K();
        return (
            qe(Ge.ESCAPE, v.close),
            Ae(() => {
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
                d === _t.fourth && i.play('exitResult', { target: 'post-battle' });
            }, [d, i]),
            e.jsxs(q_, {
                className: a(K_.base, K_[`base__${g}`]),
                style: { width: `${r}rem` },
                children: [
                    g !== Ia.overview && e.jsx('div', { className: K_.vignette }),
                    e.jsx(Y_, {}),
                    e.jsx(n.div, {
                        style: p,
                        children: e.jsx(U_, {
                            className: !1 === c.has(_t.second) && K_.navigation__disabled,
                            children: e.jsxs(pa.Switcher, {
                                className: K_.switcher,
                                classNames: { mainBorder: K_.mainBorderSwitcher },
                                children: [
                                    e.jsx(pa.Tab, {
                                        tabId: Ia.overview,
                                        children: V.toUpperCase(
                                            s.readOrEmpty('battle_results.battleResult.navigation.battleResults'),
                                        ),
                                    }),
                                    e.jsx(pa.Tab, {
                                        tabId: Ia.teamsStatistics,
                                        children: V.toUpperCase(
                                            s.readOrEmpty('battle_results.battleResult.navigation.teamEfficiency'),
                                        ),
                                    }),
                                    e.jsxs(pa.Tab, {
                                        tabId: Ia.progression,
                                        children: [
                                            V.toUpperCase(
                                                s.readOrEmpty(
                                                    'battle_results.battleResult.navigation.missionsProgress',
                                                ),
                                            ),
                                            e.jsx(pt.Bubble, { className: K_.notificationBubble }),
                                            e.jsx(pt.Items, { className: K_.progressionNotificationItems }),
                                        ],
                                    }),
                                    e.jsx(pa.Tab, {
                                        tabId: Ia.financialReport,
                                        children: V.toUpperCase(
                                            s.readOrEmpty('battle_results.battleResult.navigation.financialReport'),
                                        ),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    h &&
                        e.jsx(n.div, {
                            className: K_.info,
                            style: _,
                            children: e.jsxs(Ga, {
                                children: [
                                    e.jsx(Ga.Arena, {
                                        arenaName: h.arenaName,
                                        arenaType: h.arenaType,
                                        finishReasonKey: h.finishReasonKey,
                                        status: h.status,
                                        modeName: h.modeName,
                                    }),
                                    e.jsx(Ga.StartTime, { startTime: h.startTime }),
                                    e.jsx(Ga.Player, {
                                        vehicleName: b.vehicle.name,
                                        vehicleLevel: b.vehicle.tier,
                                        vehicleType: b.vehicle.type,
                                        userName: b.account.username,
                                        clan: b.account.clanAbbreviation,
                                    }),
                                    e.jsx(Ga.PlayerStatus, {
                                        className: K_.group,
                                        killer: b.killer,
                                        deathReasonKey: b.userStatus.deathReason,
                                        abandonBattle: b.userStatus.abandonBattle,
                                    }),
                                    e.jsx(Ga.CommendationScore, { commendationsReceived: h.commendationsReceived }),
                                ],
                            }),
                        }),
                ],
            })
        );
    }),
    Z_ = l(function () {
        const a = _a(),
            { model: t } = No(),
            { size: s } = oe({ size: fa.small }, { large: { size: fa.medium }, extraLarge: { size: fa.large } });
        return e.jsx(pa, {
            theme: 'primary',
            size: s,
            active: Sa(a.location),
            onActiveChange: (e) => {
                e in Ba ? a.push(Ba[e]) : console.error(`Invalid tab ID: ${e}`);
            },
            children: e.jsx(gt, {
                children: e.jsx(pt.Provider, { items: t.notificationList.get(), children: e.jsx(J_, {}) }),
            }),
        });
    }),
    Q_ = va({
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
    ef = new ba().add(xo).addWithProps(ha, { soundsOverrides: Q_ }).addWithProps(ga, { context: 'model.router' });
(ya(),
    xa(ef.render(e.jsx(Z_, {})))
        .then(() => Na(document.getElementById('root')))
        .then(() => ja()));
