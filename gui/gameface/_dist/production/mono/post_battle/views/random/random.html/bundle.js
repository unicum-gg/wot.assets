import {
    j as e,
    e as a,
    r as t,
    K as s,
    y as n,
    L as i,
    M as r,
    J as o,
    v as l,
    B as c,
    N as d,
    O as m,
    P as u,
    A as _,
    Q as p,
    S as f,
    T as b,
    C as h,
    w as v,
    U as g,
    E as y,
    o as x,
    f as N,
    x as j,
    V as w,
    W as I,
    X as C,
    Y as A,
    Z as S,
    _ as P,
} from '../../../chunks/vendor.js';
import {
    F as B,
    r as E,
    b as k,
    e as T,
    f as D,
    g as V,
    D as z,
    h as H,
    j as O,
    k as M,
    l as F,
    m as $,
    B as G,
    n as L,
    d as K,
    o as X,
    p as W,
    I as q,
    q as U,
    t as Y,
    v as Z,
    A as J,
    w as Q,
    x as ee,
    y as ae,
    z as te,
    i as se,
    c as ne,
    C as ie,
    E as re,
    G as oe,
    H as le,
    K as ce,
    L as de,
    N as me,
    O as ue,
    P as _e,
    Q as pe,
    R as fe,
    S as be,
    T as he,
    s as ve,
    U as ge,
    W as ye,
    X as xe,
    Y as Ne,
    Z as je,
    _ as we,
    $ as Ie,
    a0 as Ce,
    a1 as Ae,
    a2 as Se,
    a3 as Pe,
    a4 as Be,
    a5 as Re,
    a6 as Ee,
    a7 as ke,
    a8 as Te,
    a9 as De,
    aa as Ve,
    ab as ze,
    ac as He,
    ad as Oe,
    ae as Me,
    af as Fe,
    ag as $e,
    ah as Ge,
    ai as Le,
    aj as Ke,
    ak as Xe,
    al as We,
    am as qe,
    an as Ue,
    ao as Ye,
    ap as Ze,
    aq as Je,
    ar as Qe,
    as as ea,
    at as aa,
    au as ta,
    av as sa,
    aw as na,
    ax as ia,
    ay as ra,
    az as oa,
    aA as la,
    aB as ca,
    aC as da,
    aD as ma,
    aE as ua,
    aF as _a,
    aG as pa,
    u as fa,
    aH as ba,
    aI as ha,
    J as va,
    aJ as ga,
    M as ya,
    aK as xa,
    a as Na,
    aL as ja,
    aM as wa,
} from '../../../chunks/lib.js';
import { g as Ia, a as Ca, s as Aa, W as Sa, f as Pa, r as Ba } from '../../../chunks/flag_view_model.js';
/* empty css                    */ const Ra = 'BattleInfo_6333ab61',
    Ea = 'BattleInfo_group_161b6f97',
    ka = 'BattleInfo_textString_835b074b',
    Ta = 'BattleInfo_group__teamKiller_78068d1',
    Da = 'BattleInfo_killerAccount_3b86f16c',
    Va = 'BattleInfo_vehicleName_d69bd77c',
    za = 'BattleInfo_commendations_731c9f38',
    Ha = 'BattleInfo_commendations_counter_aef426',
    Oa = 'BattleInfo_commendations_icon_55a703a8',
    Ma = [1, 19],
    Fa = [1, 10],
    $a = ({ className: t, finishReasonKey: s, status: n, modeName: i, arenaType: r, ...o }) => {
        const l = `battle_results.finish.reason.c_${s}${Fa.includes(s) ? n : ''}`,
            c = Ma.includes(r) ? `arenas.type.${i}.name` : `menu.loading.battleTypes.c_${r}`;
        return e.jsx(B, {
            ...o,
            upgradeLegacy: !0,
            path: 'battle_results.common.arena.fullName',
            params: { 0: e.jsx(B, { path: c }), 1: e.jsx(B, { path: l }) },
            className: a(Ea, t),
        });
    };
const Ga = E.resolve('strings');
const La = t.forwardRef(function (t, s) {
    return e.jsx('div', { ...t, 'data-name': 'BattleInfo', ref: s, className: a(Ra, t.className) });
});
((La.Arena = function ({ arenaName: t, className: s, ...n }) {
    return e.jsx(B, {
        className: a(Ea, s),
        path: 'battle_results.common.arena.nameAndMode',
        params: { 0: t, 1: e.jsx($a, { ...n }) },
    });
}),
    (La.StartTime = ({ startTime: t, className: s, ...n }) =>
        e.jsx(B, {
            ...n,
            className: a(Ea, s),
            path: 'battle_results.common.startTime',
            params: { 0: V.formatDateTime(z.ShortDate, t), 1: V.formatDateTime(z.ShortTime, t) },
        })),
    (La.Player = function ({
        className: t,
        vehicleLevel: s,
        vehicleType: n,
        vehicleName: i,
        userName: r,
        clan: o,
        teamKiller: l,
        vehicleTypeSize: c = D.sizes.x24x24,
        classNames: d,
        ...m
    }) {
        return e.jsx(B, {
            ...m,
            upgradeLegacy: !0,
            className: a(Ea, l && Ta, t),
            path: 'battle_results.common.arena.fullName',
            params: {
                0: o
                    ? e.jsx(B, {
                          className: Da,
                          path: 'battle_results.common.player.nameWithClan',
                          params: { name: r, clan: o },
                      })
                    : e.jsx('span', { className: Da, children: r }),
                1: e.jsxs('div', {
                    className: a(Va, d?.vehicleName),
                    children: [
                        e.jsx(T, { value: s, className: a(ka, d?.vehicleLevel) }),
                        e.jsx(D, { className: d?.vehicleType, type: n, size: c }),
                        i,
                    ],
                }),
            },
        });
    }),
    (La.PlayerStatus = function ({ className: t, deathReasonKey: s, killer: n, abandonBattle: i, ...r }) {
        const o = (function ({ deathReasonKey: e, abandonBattle: a }) {
            return a ? 'prematureLeave' : -1 === e ? 'alive' : `dead${e}`;
        })({ deathReasonKey: s, abandonBattle: i });
        if (
            (n.username || n.fakeUsername) &&
            !i &&
            -1 !== s &&
            (function (e) {
                return Boolean(Ga.read(`battle_results.common.vehicleState.${e}_with_killername`));
            })(o)
        ) {
            const s = n.anonymizer ? n.fakeUsername : n.username;
            return e.jsx(B, {
                ...r,
                className: a(Ea, n.teamKiller && Ta, t),
                path: `battle_results.common.vehicleState.${o}_with_killername`,
                params: {
                    killername: n.clanAbbreviation
                        ? e.jsx(B, {
                              className: Da,
                              path: 'battle_results.common.player.nameWithClan',
                              params: { name: s, clan: n.clanAbbreviation },
                          })
                        : e.jsx('span', { className: Da, children: s }),
                },
            });
        }
        return e.jsx(B, { ...r, className: a(Ea, t), path: `battle_results.common.vehicleState.${o}` });
    }),
    (La.CommendationScore = function ({ commendationsReceived: t }) {
        const s = t > 0,
            n = E.resolve('strings'),
            i =
                1 === t
                    ? 'battle_results.comms.likes.pbs.tooltip.bodySingle'
                    : 'battle_results.comms.likes.pbs.tooltip.body',
            r = k({
                header: n.readOrEmpty('battle_results.comms.likes.pbs.tooltip.header'),
                body: n.readOrEmpty(i).replace('{{var}}', t.toString()),
            });
        return s
            ? e.jsxs('div', {
                  ...r,
                  className: a(Ea, za),
                  children: [e.jsx('div', { className: Ha, children: t }), e.jsx('div', { className: Oa })],
              })
            : null;
    }));
const Ka = 'AnimatedValue_d9f4b2f0',
    Xa = 'AnimatedValue_animatedValue_4c490d83',
    Wa = H.cubicBezier(0.33, 0, 0.25, 1);
function qa(e) {
    return {
        enterElements: document.querySelectorAll(`.js-animated-value-${e}-enter`),
        leftElements: document.querySelectorAll(`.js-animated-value-${e}-leave`),
    };
}
function Ua({ value: i, transition: r, children: o, className: l, classNames: c }) {
    const d = t.useMemo(Ia, []),
        m = s(i, {
            ...r,
            initial: { opacity: 1, y: '0rem', ...r?.initial },
            from: { opacity: 0, y: '-5rem', ...r?.from },
            enter: () => ({
                opacity: 1,
                y: '0rem',
                delay: 330,
                config: { easing: Wa, duration: 330 },
                onStart: () => {
                    const { enterElements: e, leftElements: a } = qa(d);
                    (e.forEach((e) => {
                        e instanceof HTMLElement && ((e.style.width = 'auto'), (e.style.position = 'relative'));
                    }),
                        a.forEach((e) => {
                            e instanceof HTMLElement && (e.style.position = 'absolute');
                        }));
                },
                ...r?.enter,
            }),
            leave: () => ({
                top: 0,
                left: 0,
                opacity: 0,
                y: '5rem',
                config: { easing: Wa, duration: 330 },
                onStart: () => {
                    let e = 0;
                    const { enterElements: a, leftElements: t } = qa(d);
                    (t.forEach((a) => {
                        a instanceof HTMLElement && ((e = Math.max(e, a.offsetWidth)), (a.style.position = 'relative'));
                    }),
                        a.forEach((a) => {
                            a instanceof HTMLElement && ((a.style.width = `${e}px`), (a.style.position = 'absolute'));
                        }));
                },
                ...r?.leave,
            }),
        });
    return e.jsx('div', {
        className: a(Ka, l),
        children: m((t, s) => {
            const r = 0 === t.opacity.get() && !1 === t.opacity.isAnimating;
            return e.jsx(n.div, {
                className: a(Xa, `js-animated-value-${d}-${i === s ? 'enter' : 'leave'}`, c?.animatedValue),
                style: { ...t, position: r ? 'absolute' : 'relative' },
                children: o(s),
            });
        }),
    });
}
const Ya = 'idle',
    Za = 'progress',
    Ja = 'waiting',
    Qa = t.createContext(null);
function et({ read: e, shownNotificationSize: a, bubbleCounter: t, notification: s }) {
    return void 0 === s ? t : e || 0 === a ? 1 : t + 1;
}
function at() {
    const e = t.useContext(Qa);
    if (null === e)
        throw new Error('You can use the notifications context hooks only with the NotificationsProvider component');
    return e;
}
const tt = {
        valueContainer: 'Bubble_valueContainer_8b7ced74',
        valueContainer__medium: 'Bubble_valueContainer__medium_a9175d93',
        value: 'Bubble_value_5eacd6f5',
        value__medium: 'Bubble_value__medium_3232d6e8',
    },
    st = H.cubicBezier(0.75, 0, 0.67, 1),
    nt = H.cubicBezier(0.33, 0, 0.25, 1);
function it(a, t) {
    return 'number' == typeof a
        ? (function (a, t) {
              return a > t
                  ? e.jsx(B, { path: 'common.valuePlus', params: { value: V.formatNumber('integral', t) } })
                  : V.formatNumber('integral', a);
          })(a, t)
        : a;
}
const rt = t.memo(function ({ size: s, className: n, classNames: i, target: r, ...o }) {
        const { state: l, items: c } = at(),
            d = F(),
            m = l.value === Za || (l.value === Ja && !1 === l.read),
            u = $({ value: L.small }, { medium: { value: L.medium } }),
            _ = t.useMemo(
                () => ({
                    ...o?.rootTransition,
                    initial: { opacity: 0, y: '-5rem', ...o?.rootTransition?.initial },
                    from: { opacity: 0, y: '-5rem', ...o?.rootTransition?.from },
                    enter: {
                        opacity: 1,
                        y: '0',
                        delay: 0,
                        config: { easing: st, duration: 330 },
                        onRest: () => {
                            m && d.play('notificationBubbleAppeared', { target: r || 'mission-progress:bubble' });
                        },
                        ...o.rootTransition?.enter,
                    },
                    leave: { opacity: 0, y: '0', delay: 0, config: { duration: 330, easings: nt } },
                }),
                [r, o.rootTransition, d, m],
            ),
            p = t.useMemo(
                () => ({
                    ...o?.countTransition,
                    initial: { opacity: 1, y: '0', ...o?.countTransition?.initial },
                    from: { opacity: 0, y: '-5rem' },
                    enter: {
                        opacity: 1,
                        y: '0',
                        config: { easing: nt, duration: 170 },
                        delay: 170,
                        onRest: () => {
                            d.play('notificationBubbleAppeared', { target: r || 'mission-progress:bubble' });
                        },
                        ...o?.countTransition?.enter,
                    },
                    leave: {
                        opacity: 0,
                        y: '5rem',
                        delay: 0,
                        config: { easing: nt, duration: 170 },
                        ...o?.countTransition?.leave,
                    },
                }),
                [o.countTransition, d, r],
            );
        return e.jsx(Ua, {
            value: m,
            transition: _,
            className: n,
            children: (t) =>
                t &&
                e.jsx(G.Root, {
                    children: e.jsx('div', {
                        className: a(tt.valueContainer, tt[`valueContainer__${s ?? u.value}`], i?.valueContainer),
                        children: e.jsx(Ua, {
                            value: l.bubbleCounter >= c.length ? c.length : l.bubbleCounter,
                            transition: p,
                            children: (t) =>
                                e.jsx('div', {
                                    className: a(tt.value, tt[`value__${s ?? u.value}`], i?.value),
                                    children: it(t, 99),
                                }),
                        }),
                    }),
                }),
        });
    }),
    ot = 'Items_9477a756',
    lt = 'Items_animatedValue_c7d2e119',
    ct = 'Items_plug_a7a8cadf',
    dt = H.cubicBezier(0.75, 0, 0.67, 1),
    mt = H.cubicBezier(0.1, 0, 0.9, 1),
    ut = H.cubicBezier(0.33, 0, 0.25, 1),
    _t = K('NotificationItem', ot),
    pt = {
        Bubble: rt,
        Items: t.memo(function ({ transition: a, ...t }) {
            const { items: i, state: r } = at(),
                o = s(r.currentNotification, {
                    ...a,
                    key: r.currentNotification,
                    initial: { opacity: 0, y: '-5rem', x: '-50%', ...a?.initial },
                    from: { opacity: 0, y: '-5rem', x: '-50%', ...a?.from },
                    enter: [
                        { opacity: 1, y: '0', x: '-50%', config: { easing: dt, duration: 330 }, ...a?.enter },
                        { y: '2rem', x: '-50%', opacity: 1, config: { duration: 800, easing: mt } },
                    ],
                    leave: {
                        y: r.value === Ya ? '0' : '5rem',
                        x: '-50%',
                        opacity: 0,
                        config: { duration: r.value === Ya ? 330 : 170, easing: r.value === Ya ? ut : dt },
                    },
                });
            return e.jsxs(_t, {
                ...t,
                children: [
                    e.jsx('div', { className: ct, children: r.currentNotification || i[i.length - 1]?.item }),
                    o((a, t) => e.jsx(n.div, { className: lt, style: a, children: t })),
                ],
            });
        }),
        Provider: function ({ items: a, children: s }) {
            const [n, i] = t.useState(() => ({
                    read: !1,
                    value: Ya,
                    bubbleCounter: 1,
                    currentNotification: void 0,
                    shownNotifications: new Set(),
                })),
                r = t.useMemo(
                    () => a.some(({ id: e }) => !1 === n.shownNotifications.has(e)),
                    [a, n.shownNotifications],
                );
            O(
                () => {
                    i((e) => {
                        const t = a.find(({ id: a }) => !1 === e.shownNotifications.has(a));
                        return {
                            ...e,
                            read: !1,
                            currentNotification: t?.item,
                            shownNotifications: void 0 !== t ? M(e.shownNotifications, t.id) : e.shownNotifications,
                            bubbleCounter: void 0 !== t ? e.bubbleCounter + 1 : e.bubbleCounter,
                        };
                    });
                },
                n.value === Za && void 0 !== n.currentNotification ? 1130 : void 0,
            );
            const o = t.useMemo(
                () => ({
                    start() {
                        i((e) => {
                            if (e.value === Za || 0 === a.length) return e;
                            const t = a.find(({ id: a }) => !1 === e.shownNotifications.has(a));
                            return {
                                ...e,
                                read: !1,
                                currentNotification: t?.item,
                                shownNotifications: void 0 !== t ? M(e.shownNotifications, t.id) : e.shownNotifications,
                                value: Za,
                                bubbleCounter: et({
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
                            value: Ya,
                            read: !0,
                            currentNotification: void 0,
                            shownNotifications: new Set(a.map((e) => e.id)),
                        }));
                    },
                    wait() {
                        i((e) => (e.value === Ja ? e : { ...e, value: Ja, currentNotification: void 0 }));
                    },
                }),
                [a],
            );
            (t.useEffect(() => {
                n.value === Ja && r && o.start();
            }, [o, n.value, r]),
                t.useEffect(() => {
                    void 0 === n.currentNotification && n.value === Za && !1 === r && o.wait();
                }, [n.currentNotification, n.value, o, r]));
            const l = t.useMemo(() => ({ state: n, items: a, controls: o, hasUnreadNotifications: r }), [a, n, o, r]);
            return e.jsx(Qa.Provider, { value: l, children: s });
        },
    },
    ft = {
        initial: 'initial',
        first: 'first',
        second: 'second',
        third: 'third',
        fourth: 'fourth',
        fifth: 'fifth',
        sixth: 'sixth',
        immediate: 'immediate',
    },
    bt = H.cubicBezier(0.33, 0, 0.25, 1),
    ht = 400,
    vt = t.createContext(null);
function gt() {
    const e = t.useContext(vt);
    if (null === e)
        throw new Error('You can use the animation context hooks only with the AnimationProvider component');
    return e;
}
function yt({ children: a }) {
    const [s, n] = t.useState(ft.initial),
        [r, o] = t.useState(new Set()),
        [l, c] = t.useState(!1),
        [d, m] = t.useState(!1),
        u = X(),
        _ = F(),
        { active: p } = W(),
        f = i(),
        b = i(),
        h = i(),
        v = i(),
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
        s === ft.immediate && o(new Set(Object.values(ft)));
    }, [s]),
        t.useEffect(() => {
            switch (s) {
                case ft.immediate:
                    return (
                        f.start({ y: '0', opacity: 1, immediate: !0 }),
                        b.start({ opacity: 1, y: '0', immediate: !0 }),
                        h.start({ maskSize: '100% 100%', immediate: !0 }),
                        v.start({ opacity: 1, y: '0', immediate: !0 }),
                        g.start({ opacity: 1, y: '0', immediate: !0 }),
                        y.start({ opacity: 1, immediate: !0 }),
                        N.start({ maskSize: '100% 100%', immediate: !0 }),
                        j.start({ opacity: 1, immediate: !0 }),
                        void x.start({ opacity: 1, immediate: !0 })
                    );
                case ft.initial:
                    return void n(p === Ca.overview ? ft.first : ft.immediate);
                case ft.first:
                    return (
                        _.play('showBattleResult', { target: 'animation-context' }),
                        f.start({ y: '0', opacity: 1, config: { duration: ht, easing: bt } }),
                        void b.start({
                            opacity: 1,
                            y: '0',
                            config: { duration: ht, easing: bt },
                            onRest: () => {
                                (n(ft.second), o((e) => M(e, ft.first)));
                            },
                        })
                    );
                case ft.second:
                    return (
                        h.start({
                            maskSize: '100% 100%',
                            config: { duration: ht, easing: bt },
                            onRest: () => {
                                o((e) => M(e, ft.second));
                            },
                        }),
                        void u.run(() => {
                            (n(ft.third), u.clear());
                        }, 280)
                    );
                case ft.third:
                    return (
                        v.start({ opacity: 1, y: '0', config: { duration: ht, easing: bt } }),
                        g.start({ opacity: 1, y: '0', config: { duration: ht, easing: bt } }),
                        y.start({
                            opacity: 1,
                            config: { duration: ht, easing: bt },
                            onRest: () => {
                                o((e) => M(e, ft.third));
                            },
                        }),
                        void u.run(() => {
                            (n(ft.fourth), u.clear());
                        }, 280)
                    );
                case ft.fourth:
                    return (
                        N.start({
                            maskSize: '100% 100%',
                            config: { duration: ht, easing: bt },
                            onRest: () => {
                                o((e) => M(e, ft.fourth));
                            },
                        }),
                        void u.run(() => {
                            (n(ft.fifth), u.clear());
                        }, 120)
                    );
                case ft.fifth:
                    (j.start({ opacity: 1, config: { duration: ht, easing: bt } }),
                        x.start({
                            opacity: 1,
                            config: { duration: ht, easing: bt },
                            onRest: () => {
                                o((e) => M(e, ft.fifth));
                            },
                        }));
                    break;
                default:
                    return;
            }
        }, [p, s, _, u, x, w, r]));
    const I = t.useMemo(
        () => ({
            step: s,
            handleStep: w,
            completedSteps: r,
            allMedalsAnimated: l,
            bonusRef: g,
            hintKeyRef: y,
            dividerRef: h,
            battleInfoRef: x,
            navigationRef: f,
            battleStatusRef: b,
            overlayDividerRef: N,
            earnedCurrenciesRef: v,
            personalEfficiencyRef: j,
            setAllMedalsAnimated: c,
            setAllCurrenciesAniamted: m,
            readyForNotifications: l && d && r.has(ft.fifth),
        }),
        [s, w, l, d, r],
    );
    return e.jsx(vt.Provider, { value: I, children: a });
}
const xt = 'Divider_80a19f4b';
function Nt({ classNames: t }) {
    return e.jsx('div', {
        className: a(xt, t?.base),
        children: e.jsx(q, {
            className: t?.image,
            width: '100%',
            height: '100%',
            path: 'post_battle.row_divider',
            fit: 'cover',
        }),
    });
}
const jt = 'Header_content_b9e0be90',
    wt = 'Header_title_91e5448a',
    It = 'Header_divider_eb019c6',
    Ct = 'Header_dividerImage_19f6e11',
    At = K('Header', 'Header_70aa1da5'),
    St = t.forwardRef(({ title: t, children: s, classNames: n, ...i }, r) => {
        const o = E.resolve('strings');
        return e.jsxs(At, {
            ...i,
            ref: r,
            children: [
                e.jsxs('div', {
                    className: a(jt, n?.content),
                    children: [
                        e.jsx('div', { className: a(wt, n?.title), children: V.toUpperCase(o.readOrEmpty(t)) }),
                        s,
                    ],
                }),
                e.jsx(Nt, { classNames: { base: a(It, n?.divider), image: Ct } }),
            ],
        });
    }),
    Pt = t.forwardRef((a, t) => e.jsx(St, { ...a, title: 'battle_results.details.xp', ref: t })),
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
    Rt = 'IncomeStatement_c4136bc5',
    Et = 'IncomeStatement_verticalBar_5fb90511',
    kt = 'IncomeStatement_scrollWrapper_ce2dde41',
    Tt = 'IncomeStatement_scrollContent_31153602',
    Dt = 'IncomeStatement_scrollContent__initialized_ce1144d0',
    Vt = K('CreditsIncomeStatement'),
    zt = ({ children: t }) => {
        const s = Z(),
            n = Bt(s.api);
        return e.jsx(J, { classNames: { wrapper: kt, content: a(Tt, n && Dt) }, children: t });
    },
    Ht = t.forwardRef(({ children: t, className: s, scrollable: n, ...i }, r) =>
        e.jsx(Vt, {
            className: a(Rt, s),
            ...i,
            ref: r,
            children: n
                ? e.jsxs(U, { children: [e.jsx(zt, { children: t }), e.jsx(Y, { classNames: { base: Et } })] })
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
    Mt = ((e) => (
        (e[(e.PremiumInfo = 0)] = 'PremiumInfo'),
        (e[(e.PremiumBonus = 1)] = 'PremiumBonus'),
        (e[(e.PremiumEarnings = 2)] = 'PremiumEarnings'),
        (e[(e.PremiumAdvertising = 3)] = 'PremiumAdvertising'),
        (e[(e.PlusInfo = 4)] = 'PlusInfo'),
        (e[(e.PlusEarnings = 5)] = 'PlusEarnings'),
        (e[(e.PlusYouRock = 6)] = 'PlusYouRock'),
        e
    ))(Mt || {}),
    Ft = ((e) => ((e.None = 'none'), (e.Core = 'core'), (e.Pro = 'pro'), e))(Ft || {});
const $t = 'xp',
    Gt = 'freeXP',
    Lt = 'credits',
    Kt = 'gold',
    Xt = 'originalCrystals',
    Wt = 'eventCrystals',
    qt = 'autoEquipCrystals',
    Ut = 'totalCrystals',
    Yt = 'originalXP',
    Zt = 'achievementXP',
    Jt = 'originalXPPenalty',
    Qt = 'igrBonusXP',
    es = 'firstWinXP',
    as = 'additionalBonusXP',
    ts = 'boostersXP',
    ss = 'tacticalTrainingXP',
    ns = 'eventXP',
    is = 'referralBonusXP',
    rs = 'premiumVehicleXP',
    os = 'squadBonusXP',
    ls = 'squadPenaltyXP',
    cs = 'wotPlusBonusXP',
    ds = 'wotPlusProBoostXP',
    ms = 'totalXP',
    us = 'originalFreeXP',
    _s = 'achievementFreeXP',
    ps = 'igrBonusFreeXP',
    fs = 'firstWinFreeXP',
    bs = 'additionalBonusFreeXP',
    hs = 'boostersFreeXP',
    vs = 'militaryManeuversFreeXP',
    gs = 'eventFreeXP',
    ys = 'premiumVehicleFreeXP',
    xs = 'wotPlusBonusFreeXP',
    Ns = 'wotPlusProBoostFreeXP',
    js = 'totalFreeXP',
    ws = 'baseEarnedCredits',
    Is = 'squadBonusCredits',
    Cs = 'achievementCredits',
    As = 'boostersCredits',
    Ss = 'petSystemBonusCredits',
    Ps = 'battlePaymentsCredits',
    Bs = 'eventPaymentsCredits',
    Rs = 'referralBonusCredits',
    Es = 'wotPlusBonusCredits',
    ks = 'wotPlusProBoostCredits',
    Ts = 'friendlyFirePenaltyCredits',
    Ds = 'friendlyFireCompensationCredits',
    Vs = 'piggyBankCredits',
    zs = 'autoRepairCredits',
    Hs = 'autoLoadCredits',
    Os = 'autoEquipCredits',
    Ms = 'intermediateTotalCredits',
    Fs = 'totalCredits',
    $s = 'goldEventPayments',
    Gs = 'goldPiggyBank',
    Ls = 'intermediateTotalGold',
    Ks = 'totalGold',
    Xs = 'aogasFactor',
    Ws = 'deserterViolation',
    qs = 'afkViolation',
    Us = 'suicideViolation',
    Ys = new Set([Jt, is, os, ls, ss]),
    Zs = new Set([vs]),
    Js = new Set([ws, Is, Cs, As, Ps, Rs, Ss, Es, ks, Ws, Us, qs, Ts, Ds, Xs, zs, Hs, Os]),
    Qs = {
        [Zt]: _s,
        [as]: bs,
        [qs]: qs,
        [Xs]: Xs,
        [ts]: hs,
        [Ws]: Ws,
        [ns]: gs,
        [es]: fs,
        [Qt]: ps,
        [Yt]: us,
        [rs]: ys,
        [Us]: Us,
        [ms]: js,
        [cs]: xs,
        [ds]: Ns,
    },
    en = { [Bs]: $s, [Ms]: Ls, [Vs]: Gs, [Fs]: Ks },
    an = [Xt, Wt, qt, Ut],
    tn = [
        Yt,
        us,
        Zt,
        _s,
        Jt,
        Qt,
        ps,
        es,
        fs,
        as,
        bs,
        ts,
        hs,
        ss,
        vs,
        ns,
        gs,
        is,
        rs,
        ys,
        os,
        ls,
        Xs,
        cs,
        xs,
        ds,
        Ns,
        Ws,
        Us,
        qs,
        ms,
        js,
    ],
    sn = [ws, Is, Cs, As, Ss, Ps, Bs, $s, Rs, Es, ks, Ws, Us, qs, Ts, Ds, Xs, Ms, Ls, zs, Hs, Os, Fs, Ks, Vs, Gs],
    nn = new Set([Ut, Yt, us, ms, js, ws, Ms, Ls, zs, Hs, Os, Fs, Ks, Vs, Gs]),
    rn = new Set([Fs, Ks, Ls, Ms]),
    on = 'multiplier',
    ln = 'firstWinMultiplier',
    cn = 'fractionalMultiplier',
    dn = 'percent',
    mn = 'plus',
    un = {
        [Qt]: on,
        [ps]: on,
        [es]: ln,
        [fs]: ln,
        [as]: on,
        [bs]: on,
        [Xs]: cn,
        [Ws]: dn,
        [Us]: dn,
        [qs]: dn,
        [Vs]: mn,
        [Gs]: mn,
    };
function _n(e) {
    const a = Number(e.trim());
    return Number.isNaN(a)
        ? (console.error(`Invalid referral factor: "${e}" is not a number.`), 0)
        : Math.round(100 * a);
}
function pn(e) {
    const a = Number(e.trim());
    return Number.isNaN(a) ? (console.error(`Invalid percent bonus: "${a}" is not a number.`), 0) : a;
}
function fn(e) {
    return nn.has(e.paramName);
}
function bn(e) {
    return 'True' === e?.recordsItemsDetails?.hasAogasFine;
}
function hn(e) {
    return 'True' === e?.recordsItemsDetails?.isEnabled;
}
const vn = { [Yt]: fn, [us]: fn, [ms]: fn, [js]: fn, [Xs]: bn, [cs]: hn, [xs]: hn },
    gn = {
        [ws]: fn,
        [Ms]: fn,
        [Ls]: fn,
        [zs]: fn,
        [Hs]: fn,
        [Os]: fn,
        [Fs]: fn,
        [Ks]: fn,
        [Xs]: bn,
        [Es]: hn,
        [Vs]: fn,
    };
function yn(e) {
    return !1 !== rn.has(e.paramName) && 0 === e.standard.gold && 0 === e.premium.gold;
}
const xn = { [Ms]: (e) => !1 === yn(e), [Fs]: (e) => !1 === yn(e), [Vs]: (e, a) => a },
    Nn = { [$t]: 'library.xp', [Gt]: 'library.freeXp', [Lt]: 'library.credits', [Kt]: 'library.gold' },
    jn = [Xs, Ws, qs, Us];
function wn(e) {
    return e === $t ? 'library.x2_combatExp' : 'library.x2_combatFreeExp';
}
const In = {
    [Qt]: (e) => 'library.x2_combatExp',
    [ps]: (e) => 'library.x2_combatExp',
    [es]: wn,
    [fs]: wn,
    [as]: wn,
    [bs]: wn,
};
function Cn(e, a) {
    if (void 0 === a || jn.includes(a)) return;
    const t = In[a];
    return t ? t(e) : Nn[e];
}
function An(e, a) {
    return an.indexOf(e.paramName) - an.indexOf(a.paramName);
}
function Sn(e, a) {
    return tn.indexOf(e.paramName) - tn.indexOf(a.paramName);
}
function Pn(e, a) {
    return sn.indexOf(e.paramName) - sn.indexOf(a.paramName);
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
function Rn(e, a) {
    const t = [],
        s = [];
    for (const n of e) a(n) ? t.push(n) : s.push(n);
    return [t, s];
}
function En(e, a) {
    const t = Q(e.earned, Bn),
        s = Q(e.expenses, Bn),
        n = Q(e.total, Bn),
        i = [Ms, Ls],
        r = [Vs, Gs],
        [o, l] = Rn(n, (e) => i.includes(e.paramName)),
        [c, d] = Rn([...t, ...o], (e) => r.includes(e.paramName));
    return {
        records: [...d, ...s].sort(a),
        total: ((m = [...l, ...c]),
        m.filter((e) => {
            const a = Boolean(e.premiumValue || e.baseValue),
                t = nn.has(e.paramName);
            return a || t;
        })).sort(a),
    };
    var m;
}
const kn = (e) => e in un;
function Tn({ xp: e, freeXp: a }) {
    const t = e?.paramName || a?.paramName;
    te('string' == typeof t, 'xp or freeXp paramName is not provided');
    const s = kn(t) ? un[t] : void 0,
        n =
            void 0 !== e?.recordsItemsDetails && Object.keys(e.recordsItemsDetails).length > 0
                ? e.recordsItemsDetails
                : a?.recordsItemsDetails;
    return {
        paramName: t,
        premium: { xp: e?.premiumValue, freeXp: a?.premiumValue },
        standard: { xp: e?.baseValue, freeXp: a?.baseValue },
        recordsItemsDetails: n,
        modifier: s,
    };
}
function Dn({ credits: e, gold: a }) {
    const t = e?.paramName || a?.paramName;
    te('string' == typeof t, 'credits or gold paramName is not provided');
    const s = kn(t) ? un[t] : void 0,
        n =
            void 0 !== e?.recordsItemsDetails && Object.keys(e.recordsItemsDetails).length > 0
                ? e?.recordsItemsDetails
                : a?.recordsItemsDetails;
    return {
        paramName: t,
        premium: { credits: e?.premiumValue, gold: a?.premiumValue },
        standard: { credits: e?.baseValue, gold: a?.baseValue },
        recordsItemsDetails: n,
        modifier: s,
    };
}
function Vn(e, a) {
    const t = e.paramName;
    return (
        te(((e) => e in Qs)(t), `No analogue for ${t} in free xp parameter names`),
        a.find((e) => Qs[t] === e.paramName)
    );
}
function zn(e, a) {
    const t = e.paramName;
    return (
        te(((e) => e in en)(t), `No analogue for ${t} in gold parameter names`),
        a.find((e) => en[t] === e.paramName)
    );
}
function Hn(e, a) {
    const t = (function (e, a) {
        return [
            ...ae(
                a,
                (e) => Zs.has(e.paramName),
                (e) => Tn({ freeXp: e }),
            ),
            ...Q(e, (e) => (Ys.has(e.paramName) ? Tn({ xp: e }) : Tn({ xp: e, freeXp: Vn(e, a) }))),
        ];
    })(e, a);
    return t
        .filter((e) => {
            const a = vn[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.freeXp || e.premium.xp || e.standard.freeXp || e.standard.xp);
        })
        .sort(Sn);
}
function On(e, a) {
    const t = (function (e, a) {
        return Q(e, (e) => (Js.has(e.paramName) ? Dn({ credits: e }) : Dn({ credits: e, gold: zn(e, a) })));
    })(e, a);
    return t
        .filter((e) => {
            const a = gn[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.credits || e.premium.gold || e.standard.credits || e.standard.gold);
        })
        .sort(Pn);
}
function Mn(e) {
    return ((a = e),
    a.filter((e) => {
        const a = Boolean(e.baseValue || e.premiumValue),
            t = nn.has(e.paramName);
        return a || t;
    })).sort(An);
    var a;
}
function Fn({ xp: e, freeXp: a }) {
    return (function (e, a) {
        return { records: Hn(e.records, a.records), total: Hn(e.total, a.total) };
    })(
        En({ earned: e.earned, expenses: e.expenses, total: e.total }),
        En({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
function $n({ credits: e, gold: a }) {
    return (function (e, a) {
        return { records: On(e.records, a.records), total: On(e.total, a.total) };
    })(
        En({ earned: e.earned, expenses: e.expenses, total: e.total }),
        En({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
const Gn = (e) => e.wotPlusType !== Ft.None,
    [Ln, Kn] = se()(({ observableModel: e }) => {
        const a = {
                ...e.primitives(['hasAnyPremium', 'wotPlusType', 'hasPenalties'], 'additionalBonus'),
                hasWotPlus: e.transform(Gn, 'additionalBonus'),
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
                Fn({
                    xp: { earned: a.xp.earned.get(), expenses: a.xp.expenses.get(), total: a.xp.total.get() },
                    freeXp: {
                        earned: a.xp.free.earned.get(),
                        expenses: a.xp.free.expenses.get(),
                        total: a.xp.free.total.get(),
                    },
                }),
            ),
            s = ne.model(() =>
                $n({
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
                    const s = En({ earned: e, expenses: a, total: t });
                    return { records: Mn(s.records), total: Mn(s.total) };
                })({
                    earned: a.crystals.earned.get(),
                    expenses: a.crystals.expenses.get(),
                    total: a.crystals.total.get(),
                }),
            );
        return { ...a, computes: { experience: t, credits: s, crystals: n } };
    }, ie),
    Xn = 'ListItem_received_ffdc3010',
    Wn = 'ListItem_separator_71797768',
    qn = 'ListItem_label_4ab3c391',
    Un = 'ListItem_label__withIcon_c2381aa',
    Yn = 'ListItem_labelIcon_acb0da4',
    Zn = K('ListItem', 'ListItem_bcdaabbd'),
    Jn = t.forwardRef(({ labelKey: t, children: s, classNames: n, params: i, labelIconPath: r, ...o }, l) => {
        const c = E.resolve('images');
        return e.jsxs(Zn, {
            ...o,
            ref: l,
            'data-test-id': `${t}`,
            children: [
                e.jsxs('div', {
                    className: a(qn, void 0 !== r && Un, n?.label),
                    children: [
                        void 0 !== r &&
                            e.jsx('div', {
                                style: { backgroundImage: `url(${c.readOrEmpty(r)})` },
                                className: a(Yn, n?.icon),
                            }),
                        e.jsx(B, { upgradeLegacy: !0, path: t, params: i }),
                    ],
                }),
                e.jsxs('div', { className: Xn, children: [e.jsx('div', { className: Wn }), s] }),
            ],
        });
    }),
    Qn = 'Record_420804f3',
    ei = 'Record_value_4d088deb',
    ai = 'Record_value__decreasing_8cff45fa',
    ti = ({ formatter: t, value: s, modifier: n, currency: i, classNames: o, iconPath: l }) => {
        if (void 0 === s) return null;
        const c = n === cn || s < 0;
        return e.jsxs('div', {
            className: a(Qn, o?.base),
            children: [
                e.jsxs('div', {
                    className: a(ei, c && ai, o?.value),
                    'data-test-id': `${i}`,
                    children: [
                        r(n)
                            .with(ln, () => e.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(on, () => e.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(cn, () => e.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(mn, () => e.jsx(B, { path: 'common.plus' }))
                            .otherwise(() => null),
                        t(s, i),
                        n === dn && e.jsx(B, { path: 'common.common.percent' }),
                    ],
                }),
                l && e.jsx(q, { width: 24, height: 24, path: l }),
            ],
        });
    },
    si = 'RecordGroup_65a30ced',
    ni = 'RecordGroup_base__inactive_5fd9f274',
    ii = 'RecordGroup_record_5fd9f274',
    ri = 'RecordGroup_record__extinguished_7fdfcea',
    oi = 'RecordGroup_record__first_9121e1b7',
    li = 'RecordGroup_separator_9f211d97',
    ci = 'RecordGroup_separatorBackground_8a447834',
    di = 'RecordGroup_value_1f34e2e2',
    mi = 'RecordGroup_value__total_126d88a1',
    ui = 'RecordGroup_value__freeXP_931265db';
function _i(e, a) {
    return e !== as || (void 0 !== a && a > 0);
}
function pi({ paramName: e, wotPlusActive: a, hasPenalties: t, value: s }) {
    const n = !s || 0 === s;
    switch (e) {
        case Xs:
            return !1;
        case cs:
        case xs:
            return !a || n;
        case ms:
            return !t && n;
        default:
            return n;
    }
}
const fi = ({
        paramName: t,
        xp: s,
        freeXp: n,
        modifier: i,
        inactive: r,
        hasPenalties: o = !1,
        total: l,
        wotPlusActive: c,
    }) => {
        function d(e) {
            switch (t) {
                case Qt:
                    return V.formatReal('woZeroDigits', e);
                case Xs:
                    return V.formatReal('fractional', e);
                default:
                    return V.formatNumber('integral', e);
            }
        }
        return e.jsxs('div', {
            className: a(si, r && ni),
            children: [
                e.jsx('div', {
                    className: a(ii, oi, pi({ wotPlusActive: c, paramName: t, value: s, hasPenalties: o }) && ri),
                    children: e.jsx(ti, {
                        value: s,
                        currency: $t,
                        modifier: _i(t, s) ? i : void 0,
                        formatter: d,
                        classNames: { value: a(di, l && mi) },
                        iconPath: Cn($t, t),
                    }),
                }),
                void 0 !== n && e.jsx('div', { className: li, children: e.jsx('div', { className: ci }) }),
                e.jsx('div', {
                    className: a(ii, pi({ wotPlusActive: c, paramName: t, value: n, hasPenalties: o }) && ri),
                    children: e.jsx(ti, {
                        value: n,
                        currency: Gt,
                        modifier: _i(t, n) ? i : void 0,
                        formatter: d,
                        classNames: { value: a(di, ui, l && mi) },
                        iconPath: Cn(Gt, t),
                    }),
                }),
            ],
        });
    },
    bi = 'Item_groups_a1f0c2a5',
    hi = 'Item_label_7521a1d4',
    vi = 'Item_label__highlighted_36e62867',
    gi = 'Item_label__gold_49ec59ab',
    yi = {
        [Yt]: 'title.base',
        [us]: 'title.base',
        [Zt]: 'noPenalty',
        [_s]: 'noPenalty',
        [Jt]: 'friendlyFirePenalty',
        [Qt]: 'igrBonus.simpleLabel',
        [ps]: 'igrBonus.simpleLabel',
        [es]: 'firstWin',
        [fs]: 'firstWin',
        [as]: 'manageableXpBonus',
        [bs]: 'manageableXpBonus',
        [ts]: 'boosters',
        [hs]: 'boosters',
        [ss]: 'tacticalTraining',
        [vs]: 'militaryManeuvers',
        [ns]: 'event',
        [gs]: 'event',
        [is]: 'referralBonus.fullLabel',
        [rs]: 'premiumVehicleXP',
        [ys]: 'premiumVehicleXP',
        [os]: 'squadBonus',
        [ls]: 'squadXPPenalty',
        [Xs]: 'aogasFactor',
        [cs]: 'wotPlusBonus',
        [xs]: 'wotPlusBonus',
        [ds]: 'wotPlusProBoost',
        [Ns]: 'wotPlusProBoost',
        [Ws]: 'fairPlayViolation.deserter',
        [Us]: 'fairPlayViolation.suicide',
        [qs]: 'fairPlayViolation.afk',
        [ms]: 'total',
        [js]: 'total',
        originalAlternative: 'xpRecordSimple',
    },
    xi = { [cs]: 'subscription.wot_plus_32x32', [xs]: 'subscription.wot_plus_32x32' },
    Ni = {
        [cs]: 'subscription.wot_plus_pro_32x32',
        [xs]: 'subscription.wot_plus_pro_32x32',
        [ds]: 'subscription.wot_plus_pro_32x32',
        [Ns]: 'subscription.wot_plus_pro_32x32',
    },
    ji = { [Ft.None]: void 0, [Ft.Core]: xi, [Ft.Pro]: Ni },
    wi = new Set([cs, xs, ds, Ns]),
    Ii = () =>
        e.jsx('span', { className: vi, children: e.jsx(B, { path: 'battle_results.details.calculations.maximum' }) }),
    Ci = o(
        ({
            record: { paramName: t, premium: s, standard: n, modifier: i, recordsItemsDetails: r },
            total: o,
            ...l
        }) => {
            const { model: c } = Kn(),
                d = c.hasAnyPremium.get(),
                m = c.hasWotPlus.get(),
                u = c.wotPlusType.get(),
                _ = c.hasPenalties.get();
            if (!(t in yi)) return null;
            const p = '1' === r?.isHighScope,
                f = p ? yi.originalAlternative : yi[t],
                b = r?.referralFactor,
                h = ji[u]?.[t];
            return e.jsx(Jn, {
                ...l,
                labelIconPath: h,
                labelKey: `battle_results.details.calculations.${f}`,
                params: { ...(b && { bonusFactor: _n(b) }), ...(p && { maximum: e.jsx(Ii, {}) }) },
                classNames: { label: a(hi, wi.has(t) && gi) },
                children: e.jsxs('div', {
                    className: bi,
                    children: [
                        e.jsx(fi, {
                            ...n,
                            paramName: t,
                            modifier: i,
                            inactive: d,
                            total: o,
                            hasPenalties: _,
                            wotPlusActive: m,
                        }),
                        e.jsx(fi, {
                            ...s,
                            paramName: t,
                            modifier: i,
                            inactive: !d,
                            total: o,
                            hasPenalties: _,
                            wotPlusActive: m,
                        }),
                    ],
                }),
            });
        },
    ),
    Ai = 'IncomeStatement_560dd244',
    Si = 'IncomeStatement_base__scroll_fb9f1475',
    Pi = 'IncomeStatement_item_48b34a63',
    Bi = o(
        t.forwardRef(({ className: t, scrollable: s, ...n }, i) => {
            const { model: r } = Kn(),
                o = r.computes.experience();
            return e.jsx(Ht, {
                ...n,
                ref: i,
                className: a(Ai, s && Si, t),
                scrollable: s,
                children: Q(o.records, (a) => e.jsx(Ci, { record: a, className: Pi }, a.paramName)),
            });
        }),
    ),
    Ri = 'Total_item_a8580361',
    Ei = 'Total_divider_1de1ca28',
    ki = 'Total_dividerImage_ab06168d',
    Ti = K('ExperienceTotal', 'Total_19236d49'),
    Di = o(
        t.forwardRef((a, t) => {
            const { model: s } = Kn(),
                n = s.computes.experience();
            return e.jsxs(Ti, {
                ...a,
                ref: t,
                children: [
                    e.jsx(Nt, { classNames: { base: Ei, image: ki } }),
                    n.total.map((a) => e.jsx(Ci, { record: a, className: Ri, total: !0 }, a.paramName)),
                ],
            });
        }),
    ),
    Vi = 'Experience_a014c8c',
    zi = 'Experience_base__scroll_f75d07c6',
    Hi = K('Experience'),
    Oi = t.forwardRef(({ scrollable: t, className: s, ...n }, i) =>
        e.jsx(Hi, { ...n, ref: i, className: a(Vi, t && zi, s) }),
    );
((Oi.Header = Pt), (Oi.Item = Ci), (Oi.Total = Di), (Oi.IncomeStatement = Bi));
const Mi = 'Header_cbd845ec',
    Fi = 'Header_content_a63fb46c',
    $i = 'Header_title_7b852a7',
    Gi = 'Header_title__active_e5dd0f77',
    Li = 'Header_title__premium_2c23921f',
    Ki = 'Header_icon_3b4dc587',
    Xi = o(
        t.forwardRef(({ className: t, ...s }, n) => {
            const { model: i } = Kn(),
                r = i.hasAnyPremium.get();
            return e.jsx(St, {
                ...s,
                ref: n,
                className: a(Mi, t),
                title: 'battle_results.details.credits',
                children: e.jsxs('div', {
                    className: Fi,
                    children: [
                        e.jsx('div', {
                            className: a($i, !r && Gi),
                            children: e.jsx(B, { path: 'battle_results.common.details.noPremTitle' }),
                        }),
                        e.jsxs('div', {
                            className: a($i, r && Gi, Li),
                            children: [
                                e.jsx('div', {
                                    className: Ki,
                                    children: e.jsx(q, {
                                        width: 32,
                                        height: 32,
                                        path: 'post_battle.wot_premium_32x32',
                                    }),
                                }),
                                e.jsx(B, { path: 'battle_results.getPremiumPopover.prem' }),
                            ],
                        }),
                    ],
                }),
            });
        }),
    ),
    Wi = 'RecordGroup_65a30ced',
    qi = 'RecordGroup_base__inactive_5fd9f274',
    Ui = 'RecordGroup_record_5fd9f274',
    Yi = 'RecordGroup_record__extinguished_7fdfcea',
    Zi = 'RecordGroup_record__first_36c2aa71',
    Ji = 'RecordGroup_separator_9f211d97',
    Qi = 'RecordGroup_separatorBackground_8a447834',
    er = 'RecordGroup_value_9253748c',
    ar = 'RecordGroup_value__total_126d88a1',
    tr = 'RecordGroup_value__gold_d7bd74ba';
function sr({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case Xs:
            return !1;
        case Es:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const nr = ({ credits: t, gold: s, modifier: n, inactive: i = !1, total: r, paramName: o, wotPlusActive: l }) => {
        function c(e, a) {
            return o === Xs ? V.formatReal('fractional', e) : V.formatNumber(a === Kt ? 'gold' : 'integral', e);
        }
        return e.jsxs('div', {
            className: a(Wi, i && qi),
            children: [
                e.jsx('div', {
                    className: a(Ui, Zi, sr({ paramName: o, wotPlusActive: l, value: t }) && Yi),
                    children: e.jsx(ti, {
                        formatter: c,
                        value: t,
                        currency: Lt,
                        modifier: n,
                        classNames: { value: a(er, r && ar) },
                        iconPath: Cn(Lt, o),
                    }),
                }),
                void 0 !== s && e.jsx('div', { className: Ji, children: e.jsx('div', { className: Qi }) }),
                e.jsx('div', {
                    className: a(Ui, 0 === s && Yi),
                    children: e.jsx(ti, {
                        value: s,
                        currency: Kt,
                        modifier: n,
                        classNames: { value: a(er, tr, r && ar) },
                        formatter: c,
                        iconPath: Cn(Kt, o),
                    }),
                }),
            ],
        });
    },
    ir = 'Item_groups_a1f0c2a5',
    rr = 'Item_label_7521a1d4',
    or = 'Item_label__gold_49ec59ab',
    lr = {
        [ws]: 'title.base',
        [Is]: 'squadBonus',
        [Cs]: 'noPenalty',
        [As]: 'boosters',
        [Ps]: 'battlePayments',
        [Bs]: 'event',
        [$s]: 'event',
        [Rs]: 'referralBonus.fullLabel',
        [Es]: 'wotPlusBonus',
        [ks]: 'wotPlusProBoost',
        [Ws]: 'fairPlayViolation.deserter',
        [Us]: 'fairPlayViolation.suicide',
        [qs]: 'fairPlayViolation.afk',
        [Ts]: 'friendlyFirePenalty',
        [Ds]: 'friendlyFireCompensation',
        [Xs]: 'aogasFactor',
        [Ms]: 'intermediateTotal',
        [Ls]: 'intermediateTotal',
        [zs]: 'autoRepair',
        [Hs]: 'autoLoad',
        [Os]: 'autoEquip',
        [Fs]: 'total',
        [Ks]: 'total',
        [Vs]: 'piggyBankInfo',
        [Gs]: 'piggyBankInfo',
        [Ss]: 'petCredits.fullLabel',
    },
    cr = { [Es]: 'subscription.wot_plus_pro_32x32', [ks]: 'subscription.wot_plus_pro_32x32' },
    dr = { [Es]: 'subscription.wot_plus_32x32' },
    mr = { [Ft.None]: void 0, [Ft.Core]: dr, [Ft.Pro]: cr },
    ur = [Es, ks],
    _r = o(({ record: t, total: s, ...n }) => {
        const { model: i } = Kn(),
            r = i.hasAnyPremium.get(),
            o = i.hasWotPlus.get(),
            { paramName: l, premium: c, standard: d, modifier: m, recordsItemsDetails: u } = t;
        if (!(l in lr)) return null;
        const _ = u?.referralFactor,
            p = u?.bonusFactor,
            f = lr[l],
            b = xn[Fs](t, o),
            h = i.wotPlusType.get(),
            v = mr[h]?.[l];
        return e.jsx(Jn, {
            ...n,
            labelIconPath: v,
            labelKey: `battle_results.details.calculations.${f}`,
            classNames: { label: a(rr, ur.includes(l) && or) },
            params: { ...(_ && { bonusFactor: _n(_) }), ...(p && { bonusFactor: pn(p) }) },
            children: e.jsxs('div', {
                className: ir,
                children: [
                    e.jsx(nr, {
                        paramName: l,
                        credits: d.credits,
                        gold: b ? d.gold : void 0,
                        modifier: m,
                        inactive: r,
                        total: s,
                        wotPlusActive: o,
                    }),
                    e.jsx(nr, {
                        paramName: l,
                        credits: c.credits,
                        gold: b ? c.gold : void 0,
                        modifier: m,
                        inactive: !r,
                        total: s,
                        wotPlusActive: o,
                    }),
                ],
            }),
        });
    }),
    pr = 'IncomeStatement_560dd244',
    fr = 'IncomeStatement_base__scroll_fb9f1475',
    br = 'IncomeStatement_item_48b34a63',
    hr = o(
        t.forwardRef(({ className: t, scrollable: s, ...n }, i) => {
            const { model: r } = Kn(),
                o = r.computes.credits();
            return e.jsx(Ht, {
                ...n,
                ref: i,
                className: a(pr, s && fr, t),
                scrollable: s,
                children: Q(o.records, (a) => e.jsx(_r, { record: a, className: br }, a.paramName)),
            });
        }),
    ),
    vr = 'Total_item_de53c8b0',
    gr = 'Total_divider_1de1ca28',
    yr = 'Total_dividerImage_ab06168d',
    xr = K('CreditsTotal', 'Total_19236d49'),
    Nr = o(
        t.forwardRef((a, t) => {
            const { model: s } = Kn(),
                n = s.computes.credits();
            return e.jsxs(xr, {
                ...a,
                ref: t,
                children: [
                    e.jsx(Nt, { classNames: { base: gr, image: yr } }),
                    n.total.map((a) => e.jsx(_r, { record: a, className: vr, total: !0 }, a.paramName)),
                ],
            });
        }),
    ),
    jr = 'Credits_68f91d81',
    wr = 'Credits_base__scroll_759f08f3',
    Ir = K('Credits'),
    Cr = t.forwardRef(({ scrollable: t, className: s, ...n }, i) =>
        e.jsx(Ir, { ...n, ref: i, className: a(jr, t && wr, s) }),
    );
((Cr.Header = Xi), (Cr.Item = _r), (Cr.Total = Nr), (Cr.IncomeStatement = hr));
const Ar = 'Item_currencyValue_81f5b9fb',
    Sr = 'Item_currencyValue__total_a7596c8e',
    Pr = 'Item_currencyValue__negative_5e98369f',
    Br = 'Item_label_5d6964d6',
    Rr = {
        [Xt]: 'battle_results.details.calculations.crystal.total',
        [Wt]: 'battle_results.details.calculations.crystal.events',
        [qt]: 'battle_results.details.calculations.autoBoosters',
        [Ut]: 'battle_results.details.calculations.total',
    },
    Er = ({ record: t, total: s, ...n }) => {
        const { paramName: i, baseValue: r } = t;
        return i in Rr
            ? e.jsx(Jn, {
                  ...n,
                  labelKey: Rr[i],
                  classNames: { label: Br, ...n.classNames },
                  children: e.jsx(re, {
                      reverse: !0,
                      type: 'crystal',
                      size: oe.small,
                      children: e.jsx('div', {
                          className: a(Ar, r < 0 && Pr, s && Sr),
                          children: V.formatNumber('integral', r),
                      }),
                  }),
              })
            : (console.error(`Parameter name "${i} is not valid for bonds`), null);
    },
    kr = 'IncomeStatement_item_48b34a63',
    Tr = K('BondsIncomeStatement'),
    Dr = o(
        t.forwardRef((a, t) => {
            const { model: s } = Kn(),
                n = s.computes.crystals();
            return e.jsx(Tr, {
                ...a,
                ref: t,
                children: n.records.map((a) => e.jsx(Er, { record: a, className: kr }, a.paramName)),
            });
        }),
    ),
    Vr = 'Total_item_a8580361',
    zr = 'Total_item__extinguished_4be8343f',
    Hr = 'Total_divider_1de1ca28',
    Or = 'Total_dividerImage_ab06168d',
    Mr = K('BondsTotal', 'Total_120fb0c4'),
    Fr = o(
        t.forwardRef((t, s) => {
            const { model: n } = Kn(),
                i = n.computes.crystals();
            return e.jsxs(Mr, {
                ...t,
                ref: s,
                children: [
                    e.jsx(Nt, { classNames: { base: Hr, image: Or } }),
                    i.total.map((t) =>
                        e.jsx(
                            Er,
                            { total: !0, record: t, className: a(Vr, (!t.baseValue || 0 === t.baseValue) && zr) },
                            t.paramName,
                        ),
                    ),
                ],
            });
        }),
    ),
    $r = t.forwardRef((a, t) => e.jsx(St, { ...a, title: 'battle_results.details.crystal', ref: t })),
    Gr = K('Bonds');
((Gr.Header = $r), (Gr.Item = Er), (Gr.Total = Fr), (Gr.IncomeStatement = Dr));
const Lr = 'FinancialReport_content_99bf970f',
    Kr = 'FinancialReport_leftContent_75c21204',
    Xr = 'FinancialReport_bonds_cc81cbc0',
    Wr = 'FinancialReport_headerContent_aad9188f',
    qr = 'FinancialReport_experience_7219d4d3',
    Ur = 'FinancialReport_credits_7712b0c',
    Yr = 'FinancialReport_header_d56ebc61',
    Zr = 'FinancialReport_total_bdf3e42b',
    Jr = K('FinancialReport', 'FinancialReport_c3cc562a'),
    Qr = ({ className: a }) => {
        const [s, n] = t.useState({ credits: !1, experience: !1 }),
            i = t.useRef(null),
            r = t.useRef(null),
            o = t.useRef(null),
            l = le({ margin: 18 }, { medium: { margin: 19 }, large: { margin: 16 }, extraLarge: { margin: 30 } }),
            c = t.useCallback(() => {
                if (!i.current || !r.current || !o.current) return;
                const { height: e } = i.current.getBoundingClientRect(),
                    { height: a } = r.current.getBoundingClientRect(),
                    { height: t } = o.current.getBoundingClientRect();
                e &&
                    a &&
                    t &&
                    (e - a - t - l.margin >= 0
                        ? n({ credits: !1, experience: !1 })
                        : n(
                              a <= e / 2 && a <= t
                                  ? { credits: !1, experience: !0 }
                                  : t <= e / 2
                                    ? { credits: !0, experience: !1 }
                                    : { credits: !0, experience: !0 },
                          ));
            }, [l.margin]);
        return (
            ce(i, c),
            e.jsx(Ln, {
                children: e.jsx(Jr, {
                    className: a,
                    children: e.jsxs('div', {
                        className: Lr,
                        children: [
                            e.jsxs('div', {
                                className: Kr,
                                ref: i,
                                children: [
                                    e.jsxs(Cr, {
                                        ref: r,
                                        scrollable: s.credits,
                                        className: Ur,
                                        children: [
                                            e.jsx(Cr.Header, { className: Yr }),
                                            e.jsx(Cr.IncomeStatement, { scrollable: s.credits }),
                                            e.jsx(Cr.Total, { className: Zr }),
                                        ],
                                    }),
                                    e.jsxs(Oi, {
                                        ref: o,
                                        scrollable: s.experience,
                                        className: qr,
                                        children: [
                                            e.jsx(Oi.Header, { className: Yr, classNames: { content: Wr } }),
                                            e.jsx(Oi.IncomeStatement, { scrollable: s.experience }),
                                            e.jsx(Oi.Total, { className: Zr }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs(Gr, {
                                className: Xr,
                                children: [
                                    e.jsx(Gr.Header, { className: Yr, classNames: { content: Wr } }),
                                    e.jsx(Gr.IncomeStatement, {}),
                                    e.jsx(Gr.Total, { className: Zr }),
                                ],
                            }),
                        ],
                    }),
                }),
            })
        );
    };
var eo = ((e) => ((e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Active = ''), e))(eo || {});
const ao = l({
        index: m(),
        name: c(),
        value: c(),
        isCompensation: b(),
        tooltipId: c(),
        tooltipContentId: c(),
        label: c(),
        probability: m(),
        item: f(c()),
        icon: f(c()),
        iconBig: f(c()),
        iconSmall: f(c()),
    }),
    to = l({ conditionType: c() }),
    so = l({
        ...to.entries,
        titleData: c(),
        descrData: c(),
        iconKey: c(),
        current: m(),
        total: m(),
        earned: m(),
        progressType: c(),
        sortKey: c(),
    }),
    no = l({ ...to.entries, items: u(_([so, p(() => no)])) }),
    io = l({ id: c(), groupId: c(), type: m(), title: c(), description: c(), decoration: m(), status: d(eo) });
l({ ...io.entries, bonuses: u(ao), preBattleCondition: no, bonusCondition: no, postBattleCondition: no });
const ro = l({
        animated: f(b()),
        completed: f(b()),
        component: v((e) => de(e)),
        categoryOrder: m(),
        notifications: f(u(l({ id: c(), item: v((e) => t.isValidElement(e)) }))),
    }),
    oo = _([l({ status: h('loaded'), result: ro }), l({ status: h('loading') })]),
    lo = E.resolve('strings'),
    co = ['huntsman', 'medalGore', 'medalStark'],
    mo = 'markOfMastery',
    uo = 'marksOnGun',
    _o = 'epic',
    po = 'specialAchievements',
    fo = 'right',
    bo = 'left',
    ho = 'other',
    vo = [mo, uo, _o, po, fo, bo, ho];
function go(e) {
    return e.groupID === mo
        ? mo
        : e.groupID === uo
          ? uo
          : e.epic
            ? _o
            : co.includes(e.name)
              ? po
              : e.groupID === fo
                ? fo
                : e.groupID === bo
                  ? bo
                  : (console.error(`Achievement ${e.name} with a group ${e.groupID} is not detected`), ho);
}
function yo(e) {
    return me(e, (e, a) => {
        const t = go(e),
            s = go(a),
            n = vo.indexOf(t),
            i = vo.indexOf(s);
        return t !== s
            ? n - i
            : (function (e, a) {
                  const t = lo.readOrEmpty(`achievements.${e.name}`),
                      s = lo.readOrEmpty(`achievements.${a.name}`);
                  return t.localeCompare(s);
              })(e, a);
    });
}
const xo = 'default',
    No = 'hover',
    jo = 'extinct';
function wo(e, a) {
    return void 0 === a ? xo : a === e ? No : jo;
}
const Io = { marksOnGun1: '1_mark', marksOnGun2: '2_marks', marksOnGun3: '3_marks' };
function Co({ iconName: e, groupID: a, vehicleNation: t }) {
    return 'marksOnGun' === a ? `marksOnGun.x240x240.${t}_${Io[e]}` : `achievement.x240x240.${e}`;
}
const Ao = 'marks',
    So = 'epicAndHeroic',
    Po = 'others',
    Bo = ['bombardier', 'medalAntiSpgFire', 'kamikaze', 'raider', 'medalMonolith', 'medalCoolBlood'];
var Ro = ((e) => (
        (e.Squad = 'squad'),
        (e.Player = 'player'),
        (e.Damage = 'damage'),
        (e.Frag = 'frag'),
        (e.Xp = 'xp'),
        (e.Vehicle = 'tank'),
        (e.Medal = 'medal'),
        e
    ))(Ro || {}),
    Eo = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(Eo || {});
const ko = {
        plusInfo: Mt.PlusInfo,
        premiumInfo: Mt.PremiumInfo,
        premiumAdvertising: Mt.PremiumAdvertising,
        premiumBonus: Mt.PremiumBonus,
        premiumEarnings: Mt.PremiumEarnings,
        plusEarnings: Mt.PlusEarnings,
        plusYouRock: Mt.PlusYouRock,
    },
    To = Object.values(ko);
const Do = 'premiumInfo',
    Vo = 'applyBonus',
    zo = 'appliedBonus',
    Ho = 'isNotVictory',
    Oo = 'requiredRecentBattleAndVehicle',
    Mo = 'invalidBattleType',
    Fo = 'noVehicle',
    $o = 'fasterEducationCrewNotActive',
    Go = 'fasterEducationCrewActive',
    Lo = 'noCrew',
    Ko = 'premiumEarnings',
    Xo = 'creditsAdvertising',
    Wo = 'premiumAdvertising',
    qo = 'squadAdvertising',
    Uo = 'bonusAdvertising',
    Yo = 'questsAdvertising',
    Zo = 'plusInfo',
    Jo = 'plusEarnings',
    Qo = 'plusYouRock',
    el = { credits: Xo, premium: Wo, squad: qo, bonus: Uo, quests: Yo },
    al = ue(u(_(Object.values(el).map((e) => h(e))))),
    tl = [el.credits, el.premium, el.squad, el.bonus, el.quests];
const sl = {
        [Ot.IsApplied]: zo,
        [Ot.DeprecatedResults]: Oo,
        [Ot.IsNotVictory]: Ho,
        [Ot.InvalidBattleType]: Mo,
        [Ot.NoVehicle]: Fo,
        [Ot.FasterEducationCrewActive]: Go,
        [Ot.FasterEducationCrewNotActive]: $o,
        [Ot.NoCrew]: Lo,
    },
    nl = {
        [ko.plusInfo]: { define: () => Zo },
        [ko.premiumInfo]: { define: () => Do },
        [ko.premiumAdvertising]: {
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
        [ko.premiumBonus]: {
            define: ({ restriction: e }) => (e !== Ot.NoRestriction && e !== Ot.NotApplyingError ? sl[e] : Vo),
        },
        [ko.premiumEarnings]: { define: () => Ko },
        [ko.plusEarnings]: { define: () => Jo },
        [ko.plusYouRock]: { define: () => Qo },
    };
function il(e) {
    return function (a) {
        return e(g(() => y(a)));
    };
}
const rl = '',
    ol = [el.premium, el.squad, el.credits],
    ll = ['ctf30x30', 'domination30x30'];
var cl = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
        cl || {},
    ),
    dl = ((e) => (
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
    ))(dl || {});
function ml(e) {
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
const ul = [ms, Ms];
function _l(e, a) {
    const { recordsItemsDetails: t, baseValue: s, premiumValue: n, currencyType: i, paramName: r } = Bn(e),
        o = a ? n : s,
        l = o >= 0 ? o : 0;
    return { paramName: r, type: i, visibleIfZero: ul.includes(r) || 'True' === t.isAvailable, value: l };
}
function pl(e) {
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
        usedAdvertisements: '' !== e.localStorage ? al(e.localStorage) : [],
    };
}
function fl(e) {
    return {
        groupID: e.groupID,
        iconName: e.iconName,
        name: e.name,
        epic: e.isEpic,
        tooltipArgs: e.tooltipArgs,
        tooltipId: e.tooltipId,
    };
}
function bl(e) {
    return { labelKey: e.labelKey, paramValueType: e.paramValueType, value: Q(e.value, (e) => e) };
}
function hl(e) {
    return {
        ...bl({ label: e.label, labelKey: e.labelKey, paramValueType: e.paramValueType, value: Q(e.value, (e) => e) }),
        details: Q(e.details, (e) => bl(e)),
    };
}
function vl(e) {
    const a = _e(e.detailedStatistics, (e) => e.labelKey === dl.TeamHitsDamage)?.value,
        t = void 0 !== a ? pe(a, 0) : 0,
        s = e.efficiencyValues.kills - (t ?? 0);
    return {
        personal: e.isPersonal,
        squadIndex: e.squadIndex,
        achievements: Q(e.achievements, fl),
        account: be(e.userNames),
        userStatus: ((o = e.userStatus), { abandonBattle: o.isLeftBattle, deathReason: o.deathReason }),
        killer: be(e.userStatus.killer),
        vehicle:
            ((i = e.vehicle.vehicleCD),
            (r = e.vehicle.techName),
            0 === i && '' === r ? void 0 : { ...fe(e.vehicle), longName: e.vehicle.longName }),
        efficiencyValues: {
            substractedAlliesKills: s,
            ...((n = e.efficiencyValues), { damageDealt: n.damageDealt, kills: n.kills, earnedXp: n.earnedXp }),
        },
        detailedStatistics: Q(e.detailedStatistics, hl),
        databaseId: e.databaseID,
    };
    var n, i, r, o;
}
const gl = {
    killed: 0,
    spotted: 0,
    criticalDamage: 0,
    damageDealt: { value: 0, count: 0 },
    damageAssisted: 0,
    damageAssistedStun: { value: 0, count: 0 },
    damageBlockedByArmor: { value: 0, count: 0 },
};
const yl = 'allies',
    xl = 'enemies',
    Nl = ['dead0', 'dead1', 'dead2', 'dead3', 'dead5', 'dead7'],
    jl = 'personal',
    wl = 'alien';
function Il(e, a, t) {
    return 0 === t ? null : a === t && e === yl ? jl : wl;
}
function Cl({ anonymizer: e, personal: a, platoonType: t }) {
    return !(a || !e) && (t === wl || null === t);
}
const [Al, Sl] = se()(
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
                    battleInfo: a.transform(ml, 'battleInfo'),
                    additionalBonus: a.transform(pl, 'additionalBonus'),
                    allPlayersDictionary: x.box({}),
                    personalEfficiency: {
                        opened: x.box(!1),
                        achievements: a.transform((e) => yo(Q(e, fl)), 'achievements'),
                        statistics: { details: x.box([]), capturePoints: x.box(0), droppedCapturePoints: x.box(0) },
                    },
                    teamsStatistic: {
                        allies: x.box([]),
                        enemies: x.box([]),
                        sorting: x.box({ column: Ro.Vehicle, sortDirection: Eo.Desc }),
                        selectedRow: x.box(),
                    },
                    user: { names: x.box(), status: x.box() },
                    playerSatisfaction: a.object('playerSatisfaction'),
                    pathToPlugins: a.dict('pathToPlugins'),
                    notificationList: x.box([]),
                };
            (il(t)(() => {
                const e = {};
                (n.teamsStatistic.allies.set(
                    Q(s.teamsStatistic.allies.get(), (a) => {
                        const t = vl(a);
                        return ((e[t.account.username] = t), t);
                    }),
                ),
                    n.teamsStatistic.enemies.set(
                        Q(s.teamsStatistic.enemies.get(), (a) => {
                            const t = vl(a);
                            return ((e[t.account.username] = t), t);
                        }),
                    ));
                const a = n.allPlayersDictionary.get();
                n.allPlayersDictionary.set({ ...a, ...e });
            }),
                il(t)(() => {
                    return n.teamsStatistic.sorting.set(
                        ((e = s.teamsStatistic.sortingColumn.get()),
                        (a = s.teamsStatistic.sortingOrder.get()),
                        { column: e, sortDirection: a }),
                    );
                    var e, a;
                }),
                il(t)(() => {
                    (n.personalEfficiency.statistics.capturePoints.set(s.personalEffiency.capturePoints.get()),
                        n.personalEfficiency.statistics.droppedCapturePoints.set(
                            s.personalEffiency.droppedCapturePoints.get(),
                        ));
                }));
            const i = ne.structural(() =>
                    (function ({ anyPremium: e, credits: a, crystals: t, gold: s, xp: n }) {
                        const i = _e(a, (e) => e.paramName === Ms),
                            r = _e(s, (e) => e.paramName === Ks),
                            o = _e(n, (e) => e.paramName === ms),
                            l = _e(t, (e) => e.paramName === Ut),
                            c = [];
                        return (
                            i && c.push(_l(i, e)),
                            r && c.push(_l(r, e)),
                            o && c.push(_l(o, e)),
                            l && c.push(_l(l, e)),
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
                o = ne.shallow(() => {
                    const e = _e(n.teamsStatistic.allies.get(), (e) => e.personal);
                    var a;
                    return (
                        te(void 0 !== e, 'Personal info is not found'),
                        te((a = e).personal && void 0 !== a.vehicle, 'There is no vehicle data in the personal info'),
                        e
                    );
                }),
                l = ne.shallow(() => {
                    const e = n.teamsStatistic.selectedRow.get();
                    if (void 0 === e) return;
                    const a = (e.team === yl ? n.teamsStatistic.allies : n.teamsStatistic.enemies).get();
                    return _e(a, (a) => a.account.username === e.username);
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
                                if (((n = s), he.structural(n, gl))) return a;
                                var n;
                                const i = e[t.userName],
                                    r = i?.account ?? {
                                        username: t.userName,
                                        fakeUsername: t.userName,
                                        clanAbbreviation: '',
                                        anonymizer: !1,
                                        igrType: 0,
                                        teamKiller: !1,
                                        killed: !1,
                                        badge: rl,
                                        suffixBadge: rl,
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
                    const e = _e(s.xp.total.get(), (e) => 'totalXP' === e.paramName);
                    te(void 0 !== e, 'totalXP record is not found in the financial report');
                    const a = _e(s.credits.total.get(), (e) => 'totalCredits' === e.paramName),
                        t = _e(s.credits.total.get(), (e) => 'intermediateTotalCredits' === e.paramName);
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
                m = ne.primitive(() => {
                    const e = n.personalEfficiency.achievements.get();
                    return ve(e, (e) => e.epic || Aa.includes(e.groupID));
                });
            return {
                ...n,
                computes: {
                    hasSpeialMedals: m,
                    earnedCurrencies: i,
                    personalInfo: o,
                    efficiencyDetails: l,
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
                        ? { localStorage: JSON.stringify([e]) }
                        : { localStorage: JSON.stringify([...t, e]) };
                }, 'additionalBonus.onLocalStorageUpdated'),
                teamEfficiency: {
                    sort: N((e) => {
                        (a.teamsStatistic.sorting.set(e), t(e));
                    }),
                    selectRow: N((e) => {
                        const t = a.teamsStatistic.selectedRow.get();
                        t?.team !== e?.team || t?.username !== e?.username
                            ? a.teamsStatistic.selectedRow.set(e)
                            : a.teamsStatistic.selectedRow.set(void 0);
                    }),
                },
                onSatisfactionRatingSelected: e.createCallback(
                    (e) => ({ state: e }),
                    'playerSatisfaction.onSatisfactionRatingSelected',
                ),
                setNotifications: N((e) => {
                    a.notificationList.set(e);
                }),
                pushNotifications: N((e) => {
                    0 !== e.length && a.notificationList.set([...a.notificationList.get(), ...e]);
                }),
            };
        },
    ),
    Pl = 'NoProgress_e30a0572',
    Bl = 'NoProgress_header_fd4fa20b',
    Rl = 'NoProgress_description_965e21c0',
    El = o(function () {
        const a = E.resolve('strings'),
            { controls: t } = Sl();
        return e.jsxs('div', {
            className: Pl,
            children: [
                e.jsx('div', {
                    className: Bl,
                    children: a.readOrEmpty('battle_results.common.missions.noProgress.header'),
                }),
                e.jsx('div', {
                    className: Rl,
                    children: a.readOrEmpty('battle_results.common.missions.noProgress.description'),
                }),
                e.jsx(ge, {
                    theme: ge.themes.secondary,
                    onClick: t.openMissions,
                    children: a.readOrEmpty('battle_results.common.missions.noProgress.button'),
                }),
            ],
        });
    });
const kl = 'MissionsProgress_ca7ca547',
    Tl = 'MissionsProgress_content_b1e9d53b',
    Dl = 'MissionsProgress_verticalBar_a9f04f7f',
    Vl = H.cubicBezier(0.23, 0, 0.57, 1),
    zl = K('MissionsProgress', kl);
function Hl(e) {
    return e.reduce((e, a) => (a.result.notifications && e.push(...a.result.notifications), e), []);
}
function Ol(e) {
    return ae(
        e,
        (e) => Boolean(e.result.animated),
        (e, a) => a,
    );
}
const Ml = o(function ({ className: a }) {
        const { model: s, controls: i } = Sl(),
            { active: r } = W(),
            [o, l] = t.useState(!1),
            [c, d] = t.useState(!1),
            [m, u] = t.useState(-1),
            _ = (function (e) {
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
                                const o = await Promise.allSettled(
                                    ae(
                                        e,
                                        (e) => !(e.url in a || e.url in i.current),
                                        async (e) => {
                                            ((i.current[e.url] = !0),
                                                s((a) => ({ ...a, [e.url]: { status: 'loading' } })));
                                            const a = await ye(e.url);
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
                                s(o);
                                for (const e in Object.keys(o)) delete i.current[e];
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
            p = t.useMemo(() => {
                return (
                    (e = _),
                    Object.entries(e)
                        .map(([e, a]) => {
                            const t = w(oo, a);
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
            }, [_]),
            { notifications: f, animatablePluginIndexes: b } = t.useMemo(
                () => ({ notifications: Hl(p), animatablePluginIndexes: Ol(p) }),
                [p],
            );
        O(() => u((e) => e + 1), m > -1 && m < b.length ? 600 : void 0);
        const [h, v] = j(() => ({ from: { opacity: 0 }, config: { duration: 660, easing: Vl }, onRest: () => u(0) }));
        return (
            t.useEffect(() => {
                r === Ca.progression && (v.start({ to: { opacity: 1 } }), b.length > 0 && !1 === c && d(!0));
            }, [c, r, v, p, b]),
            t.useEffect(() => {
                f.length > 0 && i.setNotifications(f);
            }, [i, f]),
            t.useEffect(() => {
                c && r !== Ca.progression && l(!0);
            }, [c, r]),
            e.jsx(zl, {
                className: a,
                children: e.jsx(n.div, {
                    style: h,
                    className: Tl,
                    children: xe(_)
                        ? e.jsx(El, {})
                        : e.jsxs(U, {
                              children: [
                                  e.jsx(Ne, {
                                      children: Q(Object.entries(p), ([a, t], s) => {
                                          const n = t.result.component;
                                          return e.jsx(
                                              je,
                                              {
                                                  children: e.jsx(n, {
                                                      animation: s <= (b[m] ?? -1),
                                                      immediateAnimation: o,
                                                      pushNotifications: i.pushNotifications,
                                                  }),
                                              },
                                              a,
                                          );
                                      }),
                                  }),
                                  e.jsx(Y, { classNames: { base: Dl } }),
                              ],
                          }),
                }),
            })
        );
    }),
    Fl = t.createContext(null);
function $l() {
    const e = t.useContext(Fl);
    if (null === e) throw new Error('You can use the achievements hooks only with the Achievements component');
    return e;
}
const Gl = { x: 50, y: -30, scale: 1.2, opacity: 0 };
function Ll({ children: a, achievements: s, springsProps: n, vehicleNation: i }) {
    const [r, o] = t.useState(new Set()),
        [l, c] = t.useState(void 0),
        [d, m] = I(s.length, () => ({ from: { ...Gl, ...n?.from }, ...n }), [s.length, n]),
        u = t.useMemo(
            () => ({
                api: m,
                springs: d,
                vehicleNation: i,
                achievements: s,
                hoverIndex: l,
                setHoverIndex: c,
                completedAnimationIndexes: r,
                setCompletedAnimationIndexes: o,
            }),
            [m, d, i, s, l, c, r, o],
        );
    return e.jsx(Fl.Provider, { value: u, children: a });
}
const Kl = {
        base: 'Achievements_ee9c0189',
        animatedAchievement: 'Achievements_animatedAchievement_4c71d33',
        achievement: 'Achievements_achievement_b41909e2',
        achievement__extinct: 'Achievements_achievement__extinct_19551569',
        achievementIcon: 'Achievements_achievementIcon_e83ea27d',
    },
    Xl = t.forwardRef(function ({ achievement: s, index: n, width: i, height: r, classNames: o }, l) {
        const c = we({
                args: t.useMemo(
                    () => ({ tooltipId: s.tooltipId, tooltipArgs: s.tooltipArgs }),
                    [s.tooltipId, s.tooltipArgs],
                ),
            }),
            d = F(),
            { hoverIndex: m, setHoverIndex: u, vehicleNation: _ } = $l();
        return e.jsx('div', {
            ...c,
            ref: l,
            className: a(Kl.achievement, Kl[`achievement__${wo(n, m)}`], o?.achievement),
            onMouseEnter: function (e) {
                (d.play('mouse-enter', { original: e, target: 'achievements:achievement' }), c.onMouseEnter(e), u(n));
            },
            onMouseLeave: () => {
                (c.onMouseLeave(), u(void 0));
            },
            children: e.jsx(
                q,
                {
                    width: i,
                    height: r,
                    path: Co({ groupID: s.groupID, iconName: s.iconName, vehicleNation: _ }),
                    className: a(Kl.achievementIcon, o?.icon),
                },
                s.iconName,
            ),
        });
    }),
    Wl = K('Rewards', Kl.base);
t.memo(function ({ width: a, height: t, classNames: s, className: n }) {
    const { achievements: i } = $l();
    return e.jsx(Wl, {
        className: n,
        children: Q(i, (n, i) => e.jsx(Xl, { width: a, height: t, index: i, achievement: n, classNames: s }, n.name)),
    });
});
const ql = {
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
    Ul = t.memo(function ({
        achievements: s,
        startIndex: i,
        indent: r = 0,
        group: o,
        medalWidth: l,
        medalHeight: c,
        maxContainerWidth: d,
        hasSiblingGroups: m,
        updateGroupIndent: u,
    }) {
        const _ = t.useRef(null),
            { springs: p, achievements: f, completedAnimationIndexes: b, hoverIndex: h } = $l();
        return (
            Ie(() => {
                if (null === _.current) return;
                const e = _.current.offsetWidth + Math.floor((r / s.length) * 2),
                    a = Ce(d);
                u(o, e < a ? Math.floor((a - e) / 2) : 0);
            }, [s.length, l, d, u]),
            e.jsx('div', {
                style: { paddingLeft: r, paddingRight: r },
                className: a(ql[`${o}Group`], m && ql[`${o}Group__indent`]),
                children: Q(s, (t, r) => {
                    const o = f.length - i - r - 1;
                    return e.jsx(
                        n.div,
                        {
                            ref: 0 === r ? _ : void 0,
                            className: ql.animatedAchievement,
                            style: { ...p[o], zIndex: i + r === h ? s.length + 1 : s.length - r },
                            children: e.jsx(Xl, {
                                classNames: {
                                    achievement: a(ql.achievement, !1 === b.has(o) && ql.achievement__notInteractive),
                                },
                                achievement: t,
                                width: l,
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
function Yl({ marksOnGun: e, hasSiblingGroups: a }) {
    return a && e ? ql.marksGroup__indentWithMarksOnGun : a ? ql.marksGroup__masteryIndent : void 0;
}
const Zl = t.memo(function ({ achievements: t, startIndex: s, medalWidth: i, medalHeight: r, hasSiblingGroups: o }) {
        const { springs: l, achievements: c, completedAnimationIndexes: d, hoverIndex: m } = $l();
        return e.jsx('div', {
            className: a(
                ql.marksGroup,
                Yl({ hasSiblingGroups: o, marksOnGun: t.some((e) => 'marksOnGun' === e.name) }),
            ),
            children: Q(t, (o, u) => {
                const _ = c.length - s - u - 1;
                return e.jsx(
                    n.div,
                    {
                        className: ql.animatedAchievement,
                        style: { ...l[_], zIndex: s + u === m ? t.length + 1 : t.length - u },
                        children: e.jsx(Xl, {
                            classNames: {
                                achievement: a(ql.achievement, !1 === d.has(_) && ql.achievement__notInteractive),
                            },
                            achievement: o,
                            width: i,
                            height: r,
                            index: s + u,
                        }),
                    },
                    u,
                );
            }),
        });
    }),
    Jl = t.memo(function ({ className: s }) {
        const n = le(
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
            { achievements: i } = $l(),
            r = t.useMemo(
                () =>
                    (function (e) {
                        return ee(
                            e,
                            (e, a) => {
                                switch (go(a)) {
                                    case mo:
                                    case uo:
                                        e.marks.push(a);
                                        break;
                                    case _o:
                                    case po:
                                    case fo:
                                        if (Bo.includes(a.name)) {
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
                            { [Ao]: [], [So]: [], [Po]: [] },
                        );
                    })(i),
                [i],
            ),
            [o, l] = t.useState(() => ({
                epicAndHeroic: r.marks.length > 0 && r.epicAndHeroic.length > 0 ? void 0 : 0,
                others: r.epicAndHeroic.length + r.marks.length > 0 && r.others.length > 0 ? void 0 : 0,
            })),
            c = t.useCallback(
                function (e, a) {
                    l((t) => ({ ...t, [e]: a }));
                },
                [l],
            );
        return 0 === i.length
            ? null
            : e.jsxs('div', {
                  className: a(ql.base, void 0 !== o.epicAndHeroic && void 0 !== o.others && ql.base__visible, s),
                  children: [
                      r.marks.length > 0 &&
                          e.jsx(Zl, {
                              medalWidth: n.epicAndHeroic.width,
                              medalHeight: n.epicAndHeroic.height,
                              achievements: r.marks,
                              startIndex: 0,
                              hasSiblingGroups: r.epicAndHeroic.length + r.others.length > 0,
                          }),
                      r.epicAndHeroic.length > 0 &&
                          e.jsx(Ul, {
                              group: So,
                              medalWidth: n.epicAndHeroic.width,
                              medalHeight: n.epicAndHeroic.height,
                              maxContainerWidth: n.epicAndHeroic.maxContainerWidth,
                              achievements: r.epicAndHeroic,
                              startIndex: r.marks.length,
                              updateGroupIndent: c,
                              indent: o.epicAndHeroic,
                              hasSiblingGroups: r.others.length > 0,
                          }),
                      r.others.length > 0 &&
                          e.jsx(Ul, {
                              group: Po,
                              medalWidth: n.others.width,
                              medalHeight: n.others.height,
                              maxContainerWidth: n.others.maxContainerWidth,
                              achievements: r.others,
                              startIndex: r.marks.length + r.epicAndHeroic.length,
                              updateGroupIndent: c,
                              indent: o.others,
                          }),
                  ],
              });
    });
var Ql = ((e) => ((e.None = 'none'), (e.Worse = 'worse'), (e.Usual = 'usual'), (e.Better = 'better'), e))(Ql || {});
const ec = 'RateButton_bb66ff02',
    ac = 'RateButton_base__inner_61655025',
    tc = 'RateButton_base__first_hover_c025af3c',
    sc = 'RateButton_base__usual_6d49d479',
    nc = 'RateButton_base__worse_4a6537c5',
    ic = 'RateButton_base__better_ab2a6315',
    rc = 'RateButton_base__selected_70adc5a4',
    oc = 'RateButton_base__disabled_73dd0147',
    lc = { [Ql.Worse]: nc, [Ql.Usual]: sc, [Ql.Better]: ic, [Ql.None]: null },
    cc = ({ variant: a, selected: t, className: s, isHovered: n, ...i }) => {
        const r = E.resolve('strings'),
            o = F(),
            l = k({
                header: r.readOrEmpty(`battle_results.battleRating.tooltip.${a}.header`),
                body: r.readOrEmpty(`battle_results.battleRating.tooltip.${a}.body`),
            }),
            c = !n && !i.disabled && a === Ql.Usual;
        return e.jsx('div', {
            onMouseEnter: (e) => {
                !t && !i.disabled && o.play('mouse-enter', { original: e, target: 'battle_rating:rate_button' });
            },
            children: e.jsx('button', {
                className: C(ec, s, lc[a], t ? rc : c ? tc : i.disabled ? oc : void 0),
                ...l,
                ...i,
                children: e.jsx('div', { className: ac }),
            }),
        });
    },
    dc = {
        base: 'BattleRating_fa13d03',
        base_title: 'BattleRating_base_title_757e19bf',
        base_wrapper: 'BattleRating_base_wrapper_ae4d42aa',
    },
    mc = function ({ state: a, onSatisfactionRatingSelected: s }) {
        const [n, i] = t.useState(!1),
            r = F(),
            o = R.strings.battle_results.battleResult.battleRating[a].header(),
            l = [Ql.Worse, Ql.Usual, Ql.Better],
            c = a === Ql.None;
        return e.jsxs('div', {
            className: dc.base,
            onMouseEnter: () => {
                i(!0);
            },
            children: [
                e.jsx('div', { className: dc.base_title, children: o }),
                e.jsx('div', {
                    className: dc.base_wrapper,
                    children: l.map(
                        (t) =>
                            t !== Ql.None &&
                            e.jsx(
                                cc,
                                {
                                    variant: t,
                                    className: dc.base_button,
                                    selected: a === t,
                                    onClick: c
                                        ? (e) => {
                                              (r.play('click', { original: e, target: 'battle_rating:rate_button' }),
                                                  s(t));
                                          }
                                        : null,
                                    isHovered: n,
                                    disabled: a !== t && a !== Ql.None,
                                },
                                t,
                            ),
                    ),
                }),
            ],
        });
    },
    uc = t.createContext(null);
function _c() {
    const e = t.useContext(uc);
    if (null === e) throw new Error('You can use the managable bonus hooks only with the ManagableBonus component');
    return e;
}
function pc({
    children: a,
    bonusState: s,
    restriction: n,
    usedAdvertisements: i,
    supportedStates: r,
    supportedAdvertisements: o = tl,
    ...l
}) {
    const c = t.useMemo(
        () => (
            te(
                (function (e) {
                    return To.includes(e);
                })(s),
                `Bonus state ${s} is not supported`,
            ),
            {
                ...l,
                bonusState: s,
                restriction: n,
                supportedAdvertisements: o,
                state: nl[s].define({ restriction: n, supportedAdvertisements: o, usedAdvertisements: i }),
            }
        ),
        [s, n, l, o, i],
    );
    return Array.isArray(r) && !1 === r.includes(s)
        ? (console.error(`State ${s} is not supported for the current game mode`), null)
        : e.jsx(uc.Provider, { value: c, children: a });
}
const fc = { value: 'Currency_value_a12c8cb4' };
function bc({ size: t, type: s, classNames: n, withoutPlus: i = !1, value: r }) {
    const o = 'gold' === s ? 'gold' : 'integral';
    return e.jsx(re, {
        reverse: !0,
        size: t,
        type: s,
        className: a(fc.currency, n?.currency),
        children: i
            ? e.jsx('div', { className: a(fc.value, n?.value), children: V.formatNumber(o, r) })
            : e.jsx(B, {
                  className: a(fc.value, n?.value),
                  path: 'common.plusValueWithSpace',
                  params: { value: V.formatNumber(o, r) },
              }),
    });
}
const hc = 'Advertising_50041e0d',
    vc = 'Advertising_base__twoRows_2e4d12dc',
    gc = 'Advertising_base__threeRows_5439f637',
    yc = 'Advertising_currency_f20fcad',
    xc = 'Advertising_currencyValue_18a0b419';
function Nc() {
    const {
        state: t,
        supportedAdvertisements: s,
        bonusMultiplier: n,
        durationInDays: i,
        creditsThreshold: r,
        handleAdvertisement: o,
    } = _c();
    Ae(() => {
        void 0 !== s &&
            (!1 !==
            (function (e, a) {
                return e.includes(a);
            })(s, t)
                ? void 0 !== o
                    ? o(t)
                    : console.error(
                          'The handler for advertisments is not provided. THe logic with cycled adverts will not work.',
                      )
                : console.error(`The state in the component should be on of the followings ${s.join(', ')}`));
    });
    const l = E.resolve('strings');
    switch (t) {
        case Xo:
            return e.jsx(B, {
                className: hc,
                path: 'battle_results.common.details.premiumAdvertising.credits',
                params: {
                    bonusCredits: e.jsx(bc, {
                        withoutPlus: !0,
                        type: 'credits',
                        size: oe.small,
                        value: r,
                        classNames: { currency: yc, value: xc },
                    }),
                    durationInDays: i,
                },
            });
        case Wo:
            return e.jsx(Se, {
                className: a(hc, gc),
                text: l.readOrEmpty('battle_results.common.details.premiumPlus.premium'),
            });
        case qo:
            return e.jsx(Se, {
                className: a(hc, vc),
                text: l.readOrEmpty('battle_results.common.details.premiumPlus.squad'),
            });
        case Uo:
            return e.jsx(Se, {
                className: a(hc, gc),
                text: l.readOrEmpty('battle_results.common.details.premiumAdvertising.bonus'),
                params: { multiplier: n },
            });
        case Yo:
            return e.jsx(Se, {
                className: a(hc, vc),
                text: l.readOrEmpty('battle_results.common.details.premiumPlus.quests'),
            });
        default:
            return (console.error(`Advertising state ${t} is not supported`), null);
    }
}
const jc = 'LeftBonusAttempts_a541b0b8',
    wc = 'LeftBonusAttempts_count_24f93d48';
function Ic({ count: a }) {
    return e.jsx(B, {
        upgradeLegacy: !0,
        params: { count: e.jsx('span', { className: wc, children: V.formatNumber('integral', a) }) },
        path: 'battle_results.common.premiumBonus.bonusLeft',
        className: jc,
    });
}
const Cc = {
    base: 'Description_48571438',
    text: 'Description_text_30186c18',
    text__double: 'Description_text__double_333f570f',
};
function Ac({ text: t, displayType: s = 'single', withAttemts: n = !0 }) {
    const { leftBonusAttempts: i } = _c();
    return e.jsxs('div', {
        className: Cc.base,
        children: [e.jsx(Se, { text: t, className: a(Cc.text, Cc[`text__${s}`]) }), n && e.jsx(Ic, { count: i })],
    });
}
const Sc = 'PremiumEarnings_d4b9118e',
    Pc = 'PremiumEarnings_wrapper_82e68328',
    Bc = 'PremiumEarnings_wrapper__semiTransparent_bb0620c7',
    Rc = 'PremiumEarnings_label_94b3586c',
    Ec = 'PremiumEarnings_label__highlight_7755be2e',
    kc = 'PremiumEarnings_currencies_d4b9118e',
    Tc = 'PremiumEarnings_currency_3f1396eb',
    Dc = 'PremiumEarnings_value_cbe7ec27';
function Vc() {
    const t = E.resolve('strings'),
        { premiumAndStandartEarnings: s } = _c();
    return e.jsxs('div', {
        className: Sc,
        children: [
            e.jsxs('div', {
                className: a(Pc, Bc),
                children: [
                    e.jsx('div', {
                        className: Rc,
                        children: t.readOrEmpty('battle_results.common.details.noPremTitle'),
                    }),
                    e.jsxs('div', {
                        className: kc,
                        children: [
                            e.jsx(bc, {
                                withoutPlus: !0,
                                size: oe.small,
                                type: 'credits',
                                classNames: { currency: Tc, value: Dc },
                                value: s.baseCredits,
                            }),
                            e.jsx(bc, {
                                withoutPlus: !0,
                                size: oe.small,
                                type: 'tankXP',
                                classNames: { currency: Tc, value: Dc },
                                value: s.baseVehicleXP,
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs('div', {
                className: Pc,
                children: [
                    e.jsx('div', {
                        className: a(Rc, Ec),
                        children: t.readOrEmpty('battle_results.common.details.premTitle'),
                    }),
                    e.jsxs('div', {
                        className: kc,
                        children: [
                            e.jsx(bc, {
                                withoutPlus: !0,
                                size: oe.small,
                                type: 'credits',
                                classNames: { currency: Tc, value: Dc },
                                value: s.premiumCredits,
                            }),
                            e.jsx(bc, {
                                withoutPlus: !0,
                                size: oe.small,
                                type: 'tankXP',
                                classNames: { currency: Tc, value: Dc },
                                value: s.premiumVehicleXP,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const zc = 'PremiumInfoCurrencies_value_5b83491e',
    Hc = 'PremiumInfoCurrencies_currency_6908b9d9',
    Oc = K('PremiumInfoCurrencies', 'PremiumInfoCurrencies_8b21f7ee');
function Mc() {
    const a = le({ size: oe.small }, { medium: { size: oe.large } }),
        { premiumAndStandartEarnings: t } = _c();
    return e.jsxs(Oc, {
        children: [
            e.jsx(bc, { size: a.size, type: 'credits', classNames: { currency: Hc, value: zc }, value: t.creditsDiff }),
            e.jsx(bc, {
                size: a.size,
                type: 'tankXP',
                classNames: { currency: Hc, value: zc },
                value: t.vehicleXPDiff,
            }),
        ],
    });
}
const Fc = K('Content'),
    $c = t.forwardRef(function (a, t) {
        const { state: s } = _c(),
            n = E.resolve('strings');
        return e.jsx(Fc, {
            ...a,
            ref: t,
            children: (() => {
                switch (s) {
                    case Do:
                        return e.jsx(Mc, {});
                    case Vo:
                    case zo:
                    case Fo:
                    case Go:
                    case $o:
                    case Lo:
                    case Jo:
                    case Qo:
                        return e.jsx(Ac, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.description'),
                            displayType: 'single',
                        });
                    case Ho:
                        return e.jsx(Ac, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.rule'),
                            displayType: 'double',
                        });
                    case Oo:
                        return e.jsx(Ac, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.expiredBattleResult'),
                            displayType: 'double',
                        });
                    case Mo:
                        return e.jsx(Ac, {
                            withAttemts: !1,
                            text: n.readOrEmpty('battle_results.common.premiumBonus.unavailable'),
                            displayType: 'double',
                        });
                    case Zo:
                        return e.jsx(Ac, {
                            withAttemts: !1,
                            text: n.readOrEmpty('battle_results.common.plusBonus.premiumPlusAdd'),
                            displayType: 'double',
                        });
                    case Ko:
                        return e.jsx(Vc, {});
                    case Wo:
                    case Xo:
                    case qo:
                    case Uo:
                    case Yo:
                        return e.jsx(Nc, {});
                    default:
                        return (console.error(`State ${s} is not supported`), null);
                }
            })(),
        });
    }),
    Gc = 'AppliedBonusInfo_910a06bc',
    Lc = 'AppliedBonusInfo_icon_208dd0cc';
function Kc() {
    return e.jsxs('div', {
        className: Gc,
        children: [
            e.jsx('div', { className: Lc }),
            e.jsx(B, { path: 'battle_results.common.premiumBonus.appliedBonus' }),
        ],
    });
}
const Xc = 'ApplyButton_fa337b96',
    Wc = 'ApplyButton_button_a471284',
    qc = 'ApplyButton_value_c22167ea';
function Uc() {
    const a = E.resolve('strings'),
        { bonusXpDiff: t, applyBonus: s } = _c(),
        n = le(
            { iconSize: oe.small, buttonSize: ge.sizes.small },
            { large: { iconSize: oe.large }, extraLarge: { buttonSize: ge.sizes.medium } },
        );
    return e.jsxs('div', {
        className: Xc,
        children: [
            e.jsx(bc, { type: 'tankXP', size: n.iconSize, value: t, classNames: { value: qc } }),
            e.jsx(ge, {
                size: n.buttonSize,
                theme: ge.themes.primary,
                className: Wc,
                onClick: s,
                soundTarget: 'managable-bonus:apply-button',
                children: a.readOrEmpty('battle_results.common.premiumBonus.applyBonusBtn'),
            }),
        ],
    });
}
const Yc = 'PlusEarnings_505f274c',
    Zc = 'PlusEarnings_label_79ad021c',
    Jc = 'PlusEarnings_link_649208b3',
    Qc = 'PlusEarnings_currency_fddc9198',
    ed = 'PlusEarnings_value_fe187db9',
    ad = 'withWotPlus',
    td = 'withWotPremium';
const sd = { [ad]: 'battle_results.common.plusBonus.wotPlus', [td]: 'battle_results.common.plusBonus.wotPremium' };
function nd({ onClick: a }) {
    const t = E.resolve('strings'),
        s = Pe().breakpoint,
        { wotPlusType: n, wotPremium: i, bonusXpDiff: r } = _c(),
        o = n === Ft.Core || n === Ft.Pro,
        l = (function (e, a) {
            return a && !1 === e ? ad : e && !1 === a ? td : void 0;
        })(o, i);
    if (void 0 !== l)
        return e.jsxs('div', {
            className: Yc,
            children: [
                e.jsxs('div', {
                    className: Zc,
                    children: [
                        t.readOrEmpty('battle_results.common.plusBonus.bonusLeftAdditionalText'),
                        e.jsx('span', { className: Jc, onClick: a, children: t.readOrEmpty(sd[l]) }),
                    ],
                }),
                e.jsx(bc, {
                    type: 'tankXP',
                    size: s.weight >= Be.medium.weight ? oe.large : oe.small,
                    value: r,
                    classNames: { currency: Qc, value: ed },
                }),
            ],
        });
    console.error(`plus earnings state can't have such flag combination: wotPlus: ${o}, wotPremium: ${i}`);
}
const id = 'PlusYouRock_a108dad8',
    rd = 'PlusYouRock_message_52bfa860',
    od = 'PlusYouRock_rock_6d6e55b1',
    ld = 'PlusYouRock_currency_73dcb93a',
    cd = 'PlusYouRock_value_daab6eb6';
function dd() {
    const a = E.resolve('strings'),
        t = Pe().breakpoint,
        { dailyAppliedAdditionalXP: s } = _c();
    return e.jsxs('div', {
        className: id,
        children: [
            e.jsxs('div', {
                className: rd,
                children: [
                    e.jsx('span', {
                        className: od,
                        children: a.readOrEmpty('battle_results.common.plusBonus.youRock'),
                    }),
                    ' ',
                    a.readOrEmpty('battle_results.common.plusBonus.earnedMessage'),
                ],
            }),
            e.jsx(bc, {
                type: 'tankXP',
                size: t.weight >= Be.medium.weight ? oe.large : oe.small,
                value: s,
                classNames: { currency: ld, value: cd },
            }),
        ],
    });
}
const md = {
    base: 'PremiumInfoButton_66b12c2',
    button: 'PremiumInfoButton_button_870d4076',
    buttonHint: 'PremiumInfoButton_buttonHint_1ee6743f',
};
function ud({ onClick: t, withLabel: s = !1 }) {
    const n = E.resolve('strings'),
        { breakpoint: i } = Pe(),
        r = i.weight > Be.large.weight ? ge.sizes.medium : ge.sizes.small;
    return e.jsxs('div', {
        className: a(md.base, s && md.base__withLabel),
        children: [
            s &&
                e.jsx('div', {
                    className: md.buttonHint,
                    children: n.readOrEmpty('battle_results.common.premiumBonus.earnMore'),
                }),
            e.jsx(ge, {
                className: md.button,
                size: s ? ge.sizes.small : r,
                theme: ge.themes.primary,
                onClick: t,
                soundTarget: 'managable-bonus:premium-info-button',
                children: n.readOrEmpty('battle_results.common.details.getPremBtn'),
            }),
        ],
    });
}
const _d = 'Restriction_8b730e49',
    pd = 'Restriction_iconWrapper_ac9b1b94',
    fd = 'Restriction_icon_ef5c0819',
    bd = 'Restriction_formattedText_b2d2b647';
function hd({ path: a, tooltipParams: t }) {
    const s = k(t);
    return e.jsx('div', {
        className: _d,
        children: e.jsx(B, {
            path: a,
            className: bd,
            params: {
                info: e.jsx('span', {
                    ...s,
                    className: pd,
                    children: e.jsx(Re, { path: 'post_battle.info', className: fd }),
                }),
            },
        }),
    });
}
const vd = K('Footer'),
    gd = t.forwardRef(function (a, t) {
        const { state: s, showBonusDetails: n } = _c(),
            i = E.resolve('strings');
        return e.jsx(vd, {
            ...a,
            ref: t,
            children: (() => {
                switch (s) {
                    case Do:
                        return e.jsx(ud, { withLabel: !0, onClick: n });
                    case Vo:
                        return e.jsx(Uc, {});
                    case zo:
                        return e.jsx(Kc, {});
                    case Fo:
                        return e.jsx(hd, {
                            path: 'battle_results.common.premiumBonus.tankStateChangedWithInfo',
                            tooltipParams: {
                                header: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankStateChanged.header'),
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankStateChanged.body'),
                            },
                        });
                    case Go:
                        return e.jsx(hd, {
                            path: 'battle_results.common.premiumBonus.isXPToTmenEnabledWithInfo',
                            tooltipParams: {
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.xpToTmenChanged.body'),
                            },
                        });
                    case $o:
                        return e.jsx(hd, {
                            path: 'battle_results.common.premiumBonus.isXPToTmenDisabledWithInfo',
                            tooltipParams: {
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.xpToTmenChanged.body'),
                            },
                        });
                    case Lo:
                        return e.jsx(hd, {
                            path: 'battle_results.common.premiumBonus.tankmenStateChangedWithInfo',
                            tooltipParams: {
                                header: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankmenStateChanged.header'),
                                body: i.readOrEmpty('tooltips.battleResults.premiumBonus.tankmenStateChanged.body'),
                            },
                        });
                    case Zo:
                        return e.jsx(ud, { onClick: n });
                    case Jo:
                        return e.jsx(nd, { onClick: n });
                    case Qo:
                        return e.jsx(dd, {});
                    case Xo:
                    case Wo:
                    case qo:
                    case Uo:
                    case Yo:
                        return e.jsx(ud, { onClick: n });
                    default:
                        return null;
                }
            })(),
        });
    }),
    yd = {
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
        text__textOverlay: 'Header_text__textOverlay_90669143',
    },
    xd = K('Header'),
    Nd = t.forwardRef(function ({ className: t, classNames: s, ...n }, i) {
        const { state: r, bonusMultiplier: o } = _c(),
            l = E.resolve('strings')
                .readOrEmpty('battle_results.common.premiumBonus.bonusMultiplier')
                .replace('{{value}}', o.toString());
        return e.jsx(xd, {
            ref: i,
            className: a(yd[`base__${r}`], t),
            ...n,
            children: e.jsx('div', {
                className: a(yd.icon, s?.icon),
                children: e.jsx(Ee, {
                    classNames: {
                        base: yd.bonusMultiplier,
                        text: yd.text,
                        textOverlay: a(yd.text, yd.text__textOverlay),
                    },
                    children: l,
                }),
            }),
        });
    }),
    jd = K('ManagableBonus', 'ManagableBonus_55c8d52d'),
    wd = t.memo(jd);
((wd.Header = Nd), (wd.Content = $c), (wd.Footer = gd));
const Id = {
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
function Cd({ className: t }) {
    const { state: s } = _c(),
        { completedSteps: n } = gt();
    return e.jsxs(wd, {
        className: a(Id.bonus, Id[`bonus__${s}`], !1 === n.has(ft.third) && Id.bonus__disabled, t),
        children: [
            e.jsx(wd.Header, {}),
            e.jsx(wd.Content, { className: Id.content }),
            e.jsx(wd.Footer, { className: Id.footer }),
        ],
    });
}
const Ad = 'AnimatedNumber_958fc84e',
    Sd = 'AnimatedNumber_slotMachineDigit_f3b031e6',
    Pd = 'AnimatedNumber_plugChar_c66678',
    Bd = 'AnimatedNumber_digitsList_2065427d',
    Rd = H.cubicBezier(0.33, 0, 0.25, 1);
function Ed({ immediate: a, symbol: s, step: i, delay: r, first: o, handleFirstRest: l }) {
    const [c, d] = t.useState(!1),
        [m, u] = j(() => ({ from: { y: 0, opacity: 0 } })),
        _ = /^\d$/.test(s);
    const p = _ ? parseInt(s) : 1;
    return (
        t.useEffect(() => {
            c && o && l();
        }, [c, o, l]),
        t.useEffect(() => {
            i > 0 &&
                (a && d(!0),
                u.start({
                    delay: c ? 0 : r,
                    from: { y: a ? -p * i : i, opacity: 1 },
                    to: { y: -p * i, opacity: 1 },
                    config: { duration: 600, easing: Rd },
                    immediate: a || c,
                    onRest() {
                        d(!0);
                    },
                }));
        }, [i, u, c, r, p, a]),
        e.jsxs('div', {
            className: Sd,
            children: [
                e.jsx('div', { className: Pd, children: s }),
                e.jsx(n.div, {
                    style: m,
                    className: Bd,
                    children: De(0, p + 1, (a) =>
                        _
                            ? e.jsx('div', { children: a }, a)
                            : e.jsx('div', { style: { height: i }, children: a > 0 ? s : null }, a),
                    ),
                }),
            ],
        })
    );
}
const kd = t.memo(function ({
        immediate: s,
        value: n,
        readyToAnimate: i,
        className: r,
        handleAnimationFinished: o,
        type: l,
    }) {
        const [c, d] = ke(),
            m = t.useMemo(() => n.split(''), [n]),
            u = t.useCallback(() => o(l), [o, l]);
        return e.jsx('div', {
            ref: c,
            className: a(Ad, r),
            children: m.map((a, t) =>
                e.jsx(
                    Ed,
                    {
                        first: 0 === t,
                        handleFirstRest: u,
                        immediate: s,
                        delay: 200 * (m.length - t),
                        symbol: a,
                        step: d.type === Te.measured && i ? d.size.height : 0,
                    },
                    `${n}-${t}`,
                ),
            ),
        });
    }),
    Td = 'Currency_10720e2d',
    Dd = 'Currency_icon_4d923f64',
    Vd = 'Currency_icon__visible_9c676b12',
    zd = 'Currency_value_b21680b3',
    Hd = { xp: 'tankXP', crystal: 'crystal', credits: 'credits', gold: 'gold' },
    Od = Object.keys(Hd);
function Md({
    immediate: t,
    type: s,
    value: n,
    size: i,
    visibleIfZero: r,
    readyToAnimate: o,
    handleAnimationFinished: l,
}) {
    return ((e) => Od.includes(e))(s)
        ? 0 !== n || r
            ? e.jsx(re, {
                  reverse: !0,
                  type: Hd[s],
                  size: i,
                  className: Td,
                  classNames: { icon: a(Dd, (o || t) && Vd) },
                  children: e.jsx(kd, {
                      className: zd,
                      immediate: t,
                      readyToAnimate: o,
                      type: s,
                      handleAnimationFinished: l,
                      value: V.formatNumber(s === Ve.gold ? 'gold' : 'integral', n),
                  }),
              })
            : null
        : (console.error(`There is no such currency in the template literal: ${s}`), null);
}
const Fd = K('Currencies', 'Currencies_5b11a533'),
    $d = o(function ({ className: a }) {
        const [s, n] = t.useState(!1),
            [i, r] = t.useState(new Set()),
            [o, l] = t.useState(!1),
            { model: c } = Sl(),
            d = c.computes.earnedCurrencies(),
            m = c.additionalBonus.get(),
            u = ze(d),
            _ = F(),
            { step: p, setAllCurrenciesAniamted: f } = gt(),
            b = le({ value: oe.medium }, { medium: { value: oe.large }, large: { value: oe.extraLarge } });
        (t.useEffect(() => {
            void 0 !== u && u !== d && _.play('startRolling', { target: 'overview:currencies' });
        }, [d, u, _, p]),
            t.useEffect(() => {
                (p !== ft.third && p !== ft.immediate) ||
                    (p === ft.third && _.play('startRolling', { target: 'overview:currencies' }), n(!0));
            }, [p, _]),
            t.useEffect(() => {
                i.size === d.filter(({ value: e, visibleIfZero: a }) => e > 0 || a).length &&
                    (p !== ft.immediate && _.play('stopRolling', { target: 'overview:currencies' }),
                    f(!0),
                    m.bonusState === Mt.PremiumBonus &&
                        m.restriction === Ot.NoRestriction &&
                        (r((e) => He(e, 'xp')), l(!0)));
            }, [p, i, d, _, m.bonusState, m.restriction, f]));
        const h = t.useCallback(function (e) {
            r((a) => M(a, e));
        }, []);
        return e.jsx(Fd, {
            className: a,
            children: Q(d, (a) =>
                e.jsx(
                    Md,
                    {
                        readyToAnimate: s,
                        size: b.value,
                        handleAnimationFinished: h,
                        immediate: p === ft.immediate && !1 === o,
                        ...a,
                    },
                    a.type,
                ),
            ),
        });
    }),
    Gd = 'Overview_flare_5277bd9e',
    Ld = 'Overview_vignette_ff9b1e99',
    Kd = 'Overview_2a415431',
    Xd = 'Overview_info_fa4e7011',
    Wd = 'Overview_info__withoutMedals_6be29b19',
    qd = 'Overview_statusWrapper_633ae157',
    Ud = 'Overview_infoWrapper_dfa0b233',
    Yd = 'Overview_status_cb85d9ea',
    Zd = 'Overview_statusText_396175a7',
    Jd = 'Overview_achievements_5b2b6582',
    Qd = 'Overview_dividerWrapper_b71bdfa8',
    em = 'Overview_divider_652a671e',
    am = 'Overview_dividerImage_2a8a0c0e',
    tm = 'Overview_currencies_d637d5d',
    sm = 'Overview_bonus_30af9d4',
    nm = E.resolve('images');
function im({ winStatus: e, epicFlare: a }) {
    return e === Sa
        ? a
            ? 'post_battle.epic_victory_flare'
            : 'post_battle.no_epic_victory_flare'
        : a
          ? 'post_battle.epic_draw_defeat_flare'
          : 'post_battle.no_epic_draw_defeat_flare';
}
const rm = o(function () {
        const { model: a } = Sl(),
            { active: s } = W(),
            [{ x: i }, r] = j(() => ({ x: 0 })),
            o = a.battleInfo.get()?.status,
            l = a.computes.hasSpeialMedals(),
            c = t.useRef(null);
        return (
            t.useEffect(() => {
                if (s === Ca.overview)
                    return Oe.move(function ([e]) {
                        const a = Me().width,
                            t = 2 * (e.clientX / a - 0.5);
                        r.start({ x: 3 * t });
                    });
            }),
            e.jsx(n.div, {
                ref: c,
                className: Gd,
                style: {
                    backgroundImage: `url(${nm.readOrEmpty(im({ winStatus: o, epicFlare: l }))})`,
                    backgroundPosition: i.to((e) => `${50 + e}% center`),
                },
            })
        );
    }),
    om = t.createContext(null);
function lm() {
    const e = t.useContext(om);
    if (null === e)
        throw new Error('You can use the expandable overlay hooks only with the ExpandableOverlay widget component');
    return e;
}
function cm({ children: a, visible: s, changeVisible: n, closedPosition: i, animationProps: r }) {
    const [o, l] = t.useState(s ?? !1),
        [c, d] = j(() => ({
            from: { ...r, y: o ? '0' : i, backgroundColor: o ? 'rgba(18, 19, 22, 0.8)' : 'transparent' },
        })),
        [m, u] = j(() => ({ from: { opacity: o ? 1 : 0 } })),
        [_, p] = j(() => ({ from: { x: '-50%', y: '0', rotate: 180, opacity: 1 } }));
    (t.useLayoutEffect(() => {
        void 0 !== s && l(s);
    }, [s]),
        t.useEffect(() => {
            n?.(o);
        }, [o, n]));
    const f = t.useMemo(
        () => ({
            opened: o,
            closedPosition: i,
            animationProps: r,
            handleOpen: l,
            overlayStyles: c,
            overlayApi: d,
            shadowStyles: m,
            shadowApi: u,
            arrowStyles: _,
            arrowStylesApi: p,
        }),
        [o, i, r, l, c, d, m, u, _, p],
    );
    return e.jsx(om.Provider, { value: f, children: a });
}
const dm = 'HintKey_keyButton_e4149405',
    mm = 'HintKey_background_e4149405',
    um = 'HintKey_border_71616e63',
    _m = 'HintKey_content_63ecef8',
    pm = 'HintKey_triangle_fb0bc682',
    fm = 'HintKey_triangleNoise_6e72dfca',
    bm = K('PersoanlEfficiencyHintKey', 'HintKey_2efc42a0');
const hm = {
        base: 'OverlayDivider_fcc0c30',
        divider: 'OverlayDivider_divider_1acaec30',
        divider__right: 'OverlayDivider_divider__right_546d0e74',
        base__closed: 'OverlayDivider_base__closed_ceb65522',
        dividerImageElement: 'OverlayDivider_dividerImageElement_9babecb0',
    },
    vm = t.forwardRef(function ({ className: t, classNames: s }, n) {
        const { opened: i } = lm();
        return e.jsxs('div', {
            ref: n,
            className: a(hm.base, !i && hm.base__closed, s?.base, t),
            children: [
                e.jsx(Nt, {
                    classNames: {
                        base: a(hm.divider, hm.divider__left, s?.divider?.base),
                        image: a(hm.dividerImageElement, s?.divider?.image),
                    },
                }),
                e.jsx(Nt, {
                    classNames: {
                        base: a(hm.divider, hm.divider__right, s?.divider?.base, s?.rightDivider?.base),
                        image: a(hm.dividerImageElement, s?.divider?.image, s?.rightDivider?.image),
                    },
                }),
            ],
        });
    }),
    gm = 'ExpandableOverlay_7ce5a85e',
    ym = 'ExpandableOverlay_base__opened_7d677539',
    xm = 'ExpandableOverlay_shadow_644e64b8',
    Nm = t.forwardRef(function ({ children: s }, i) {
        const { opened: r, handleOpen: o, overlayStyles: l, shadowStyles: c } = lm(),
            d = F();
        return (
            t.useEffect(() => {
                function e(e) {
                    (o(!1), r && d.play('closeOverlay', { original: e, target: 'expandable-overlay' }));
                }
                return (document.addEventListener('click', e), () => document.removeEventListener('click', e));
            }, [r, d, o]),
            e.jsxs(n.div, {
                ref: i,
                'data-name': 'ExpandableOverlay',
                className: a(gm, r && ym),
                style: l,
                onClick: function (e) {
                    (e.stopPropagation(),
                        !1 === r &&
                            (d.play('click', { original: e, target: 'expandable-overlay' }),
                            d.play('openOverlay', { original: e, target: 'expandable-overlay' }),
                            o(!0)));
                },
                children: [e.jsx(n.div, { className: xm, style: c }), s],
            })
        );
    });
((Nm.HintKey = function ({
    disabled: t,
    throttleDelay: s = 600,
    classNames: i,
    keyCode: r = Ge.SPACE,
    triangleNoisePath: o = 'post_battle.noise',
}) {
    const { handleOpen: l, arrowStyles: c } = lm(),
        d = F(),
        m = Fe(
            (e) => {
                t ||
                    (d.play('click', { original: e, target: 'expandable-overlay:hint-key' }),
                    l(
                        (a) => (
                            d.play(a ? 'closeOverlay' : 'openOverlay', {
                                original: e,
                                target: 'expandable-overlay:hint-key',
                            }),
                            !a
                        ),
                    ));
            },
            [t, l, d],
            s,
        );
    return e.jsx(e.Fragment, {
        children: e.jsxs(bm, {
            className: i?.base,
            onClick: (e) => {
                (e.stopPropagation(),
                    l(
                        (a) => (
                            d.play(a ? 'closeOverlay' : 'openOverlay', {
                                original: e,
                                target: 'expandable-overlay:hint-key',
                            }),
                            !a
                        ),
                    ));
            },
            children: [
                e.jsx($e, {
                    keyCode: r,
                    classNames: {
                        base: a(dm, i?.keyButton),
                        background: a(mm, i?.keyButton?.background),
                        content: a(_m, i?.keyButton?.content),
                        border: a(um, i?.keyButton?.border),
                    },
                    soundTarget: 'expandable-overlay:hint-key',
                    onActive: m,
                    children: e.jsx($e.Code, {}),
                }),
                e.jsx(n.div, {
                    className: a(pm, i?.triangle),
                    style: c,
                    children: e.jsx(q, { fit: 'cover', path: o, className: a(fm, i?.triangleNoise) }),
                }),
            ],
        }),
    });
}),
    (Nm.OverlayDivider = vm));
const jm = 'BodyRow_b47fe37f',
    wm = 'BodyRow_rowDivider_eb49c679',
    Im = 'BodyRow_rowDividerImage_d852c3da';
function Cm({ classNames: s, row: n, rowIndex: i }) {
    const r = Le({ args: { vehicleCD: n.original.vehicle?.vehicleCD, databaseID: n.original.databaseId } });
    return t.createElement(
        Ke.Row,
        { ...(void 0 !== n.original.databaseId && r), key: n.id, className: a(jm, s?.row) },
        Q(n.getVisibleCells(), (a, t) =>
            e.jsx(
                Ke.Cell,
                {
                    className: s?.cell,
                    cell: { ...a, rowIndex: i, index: t, tablePart: Xe.body },
                    children: A(a.column.columnDef.cell, a.getContext()),
                },
                a.id,
            ),
        ),
        e.jsx(Nt, { classNames: { base: a(wm, s?.divider?.base), image: a(Im, s?.divider?.image) } }),
    );
}
const Am = {
        base: 'TableBody_4f65af24',
        scrollBar: 'TableBody_scrollBar_14038cca',
        scrollAreaContent: 'TableBody_scrollAreaContent_4a80f86c',
        mask: 'TableBody_mask_ebaf8326',
        rowDivider: 'TableBody_rowDivider_c1a3ebdc',
        rowDividerImage: 'TableBody_rowDividerImage_b0363e26',
    },
    Sm = t.memo(function ({ classNames: s, children: i }) {
        const { table: r } = We(),
            o = qe(),
            { api: l } = Z();
        (Ue(Ge.ARROW_UP, () => {
            l.applyStepTo(Ye.Next);
        }),
            Ue(Ge.ARROW_DOWN, () => {
                l.applyStepTo(Ye.Prev);
            }));
        const [c, d] = j(() => ({ from: { maskSize: '100% 100%' } }));
        return (
            t.useEffect(() => {
                function e() {
                    o.run(() => {
                        !(function () {
                            const [, e] = l.getBounds(),
                                a = (l.animationScroll.scrollPosition.get() / e) * 7;
                            d.start({ to: { maskSize: `100% ${e > 0 ? 100 + a : 107}%` } });
                        })();
                    });
                }
                return (
                    l.events.on('recalculateContent', e),
                    l.events.on('rest', e),
                    l.events.on('change', e),
                    l.events.on('resizeHandled', e),
                    e(),
                    () => {
                        (l.events.off('recalculateContent', e),
                            l.events.off('rest', e),
                            l.events.off('change', e),
                            l.events.off('resizeHandled', e));
                    }
                );
            }, [l, o, d]),
            e.jsxs(Ke.Body, {
                className: a(Am.base, s?.base),
                children: [
                    e.jsxs(n.div, {
                        className: Am.mask,
                        style: c,
                        children: [
                            e.jsx(Nt, {
                                classNames: {
                                    base: a(Am.rowDivider, s?.divider?.base),
                                    image: a(Am.rowDividerImage, s?.divider?.image),
                                },
                            }),
                            e.jsxs(J, {
                                classNames: {
                                    ...s?.scroll?.area,
                                    wrapper: Am.scrollWrapper,
                                    content: a(Am.scrollAreaContent, s?.scroll?.area?.content),
                                },
                                children: [
                                    Q(r.getRowModel().rows, (a, t) =>
                                        e.jsx(
                                            Cm,
                                            {
                                                row: a,
                                                rowIndex: t,
                                                classNames: { row: s?.row, cell: s?.cell, divider: s?.divider },
                                            },
                                            a.id,
                                        ),
                                    ),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    e.jsx(Y, { classNames: { ...s?.scroll?.bar, base: a(Am.scrollBar, s?.scroll?.bar?.base) } }),
                ],
            })
        );
    }),
    Pm = 'TableFooter_40e98711',
    Bm = 'TableFooter_row_41aedfc2',
    Rm = t.memo(function ({ classNames: t }) {
        const { table: s } = We();
        return e.jsx(Ke.Footer, {
            className: a(Pm, t?.base),
            children: Q(s.getFooterGroups(), (s, n) =>
                e.jsx(
                    Ke.Row,
                    {
                        className: a(Bm, t?.row),
                        children: Q(s.headers, (a, s) =>
                            e.jsx(
                                Ke.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: t?.cell,
                                    cell: { ...a, rowIndex: n, index: s, tablePart: Xe.footer },
                                    children: !a.isPlaceholder && A(a.column.columnDef.footer, a.getContext()),
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
    Em = 'TableHeader_row_a81d3e65',
    km = t.memo(function ({ classNames: t }) {
        const { table: s } = We();
        return e.jsx(Ke.Header, {
            className: t?.base,
            children: Q(s.getHeaderGroups(), (s, n) =>
                e.jsx(
                    Ke.Row,
                    {
                        className: a(Em, t?.row),
                        children: Q(s.headers, (a, s) =>
                            e.jsx(
                                Ke.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: t?.cell,
                                    cell: { ...a, rowIndex: n, index: s, tablePart: Xe.header },
                                    children: !a.isPlaceholder && A(a.column.columnDef.header, a.getContext()),
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
    Tm = 'account',
    Dm = 'vehicle',
    Vm = 'targetKills',
    zm = 'damageDealt',
    Hm = 'damageBlockedByArmor',
    Om = 'damageAssisted',
    Mm = 'damageAssistedStun',
    Fm = 'spotted',
    $m = 'criticalDamage',
    Gm = {
        [Vm]: 'library.crossed_tank',
        [zm]: 'library.cross_with_gap',
        [Hm]: 'library.blocked',
        [Om]: 'library.double_target',
        [Mm]: 'library.arrow_with_fading',
        [Fm]: 'library.eyebrow',
        [$m]: 'library.gear_with_gap',
    };
const Lm = t.createContext(null);
function Km() {
    const e = t.useContext(Lm);
    if (null === e)
        throw new Error('You can use the personal efficiency hooks only with the PersonalEfficiency widget component');
    return e;
}
function Xm({ iconsConfig: a, children: s }) {
    const n = t.useMemo(() => ({ iconsConfig: { ...Gm, ...(a || {}) } }), [a]);
    return e.jsx(Lm.Provider, { value: n, children: s });
}
const Wm = function ({
    data: a,
    className: s,
    children: n,
    columnOrder: i,
    columnVisibility: r,
    config: o,
    iconsConfig: l,
}) {
    const c = Pe(),
        d = t.useMemo(() => ({ columnOrder: i, columnVisibility: r }), [i, r]);
    return e.jsx(Xm, {
        iconsConfig: l,
        children: e.jsx(Ze, {
            columns: o,
            data: a.rows,
            enableMultiRowSelection: !1,
            getRowId: (e) => e.account.username,
            initialState: d,
            children: e.jsx(Ke, { className: s, children: e.jsx(U, { children: n }) }, c.breakpoint.name),
        }),
    });
};
((Wm.Header = km), (Wm.Body = Sm), (Wm.Footer = Rm));
const qm = { behaviour: Je.contentResponsive, minSize: '0rem', maxSize: '1000rem' },
    Um = {
        [Tm]: {
            [Qe.extraSmall]: { behaviour: Je.static, size: '200rem' },
            [Qe.medium]: { behaviour: Je.static, size: '200rem' },
            [Qe.large]: { behaviour: Je.static, size: '200rem' },
            [Qe.extraLarge]: { behaviour: Je.static, size: '229rem' },
        },
        [Dm]: {
            [Qe.extraSmall]: { behaviour: Je.static, size: '182rem' },
            [Qe.medium]: { behaviour: Je.static, size: '186rem' },
            [Qe.large]: { behaviour: Je.static, size: '216rem' },
            [Qe.extraLarge]: { behaviour: Je.static, size: '239rem' },
        },
    },
    Ym = 'AccountInfoCell_accountInfo_4ab27ccb',
    Zm = 'AccountInfoCell_accountName_3a2352e5',
    Jm = 'AccountInfoCell_clanAbbreviation_99f1cc86',
    Qm = 'AccountInfoCell_gap_4a30913b',
    eu = 'AccountInfoCell_anonymizerIcon_f71ac22',
    au = 'AccountInfoCell_badge_711d01c5';
function tu({ account: t }) {
    return e.jsxs(ea, {
        className: Ym,
        children: [
            e.jsx('div', {
                className: a(au, Qm),
                children:
                    '' !== t.badge && e.jsx(ea.Badge, { size: ea.Badge.sizes.x24x24, badgeId: t.badge, className: Qm }),
            }),
            e.jsx(ea.Name, {
                className: a(Zm, Qm),
                children: e.jsx(aa, { text: t.anonymizer ? t.fakeUsername : t.username }),
            }),
            '' !== t.clanAbbreviation &&
                !t.anonymizer &&
                e.jsx(ea.ClanTag, {
                    className: a(Jm, Qm),
                    children: e.jsx(B, {
                        path: 'common.clanTag',
                        params: { abbrev: t.clanAbbreviation },
                        brackets: { start: '{', end: '}' },
                    }),
                }),
            0 !== t.igrType && e.jsx(ea.IgrIcon, { size: ea.IgrIcon.sizes.x34x16, className: Qm }),
            '' !== t.suffixBadge &&
                e.jsx(ea.Stripe, { size: ea.Stripe.sizes.default, badgeId: t.suffixBadge, className: Qm }),
            t.anonymizer && e.jsx(ea.AnonymizerIcon, { size: ea.AnonymizerIcon.sizes.x24x24, className: eu }),
        ],
    });
}
const su = {
    base: 'BaseCapture_4cb6b6d6',
    icon: 'BaseCapture_icon_d32c372c',
    label: 'BaseCapture_label_8bdb9b9c',
    wrapper: 'BaseCapture_wrapper_c1a0082e',
};
function nu({ assault: t, defend: s, classNames: n, className: i }) {
    const r = E.resolve('strings'),
        o = E.resolve('views'),
        l = ta({
            contentId: o.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { paramType: 'capturePoints' },
        }),
        c = ta({
            contentId: o.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { paramType: 'droppedCapturePoints' },
        });
    return e.jsxs('div', {
        className: a(su.base, i),
        children: [
            e.jsx('div', {
                className: a(su.label, n?.label),
                children: r.readOrEmpty('battle_results.common.battleEfficiency.baseCapture'),
            }),
            e.jsxs('div', {
                ...l,
                className: su.wrapper,
                children: [
                    e.jsx('div', { className: a(su.value, n?.value), children: t }),
                    e.jsx(q, {
                        path: 'post_battle.assault',
                        width: '32rem',
                        height: '32rem',
                        className: a(su.icon, n?.icon),
                    }),
                ],
            }),
            e.jsxs('div', {
                ...c,
                className: su.wrapper,
                children: [
                    e.jsx('div', { className: a(su.value, n?.value), children: s }),
                    e.jsx(q, {
                        path: 'post_battle.defend',
                        width: '32rem',
                        height: '32rem',
                        className: a(su.icon, n?.icon),
                    }),
                ],
            }),
        ],
    });
}
const iu = 'HeaderCell_cellWithValue_78949e6d',
    ru = 'HeaderCell_cellWithValue__totalInfo_789bf7be',
    ou = 'HeaderCell_cellWithValue__zeroIndent_334269c9',
    lu = 'HeaderCell_wrapper_7849c6a',
    cu = 'HeaderCell_imageWrapper_a570c717',
    du = 'HeaderCell_value_f7bb7c82',
    mu = 'HeaderCell_cellWithText_710c47ce',
    uu = 'HeaderCell_text_35220206';
function _u({ info: t, name: s, className: n }) {
    const { iconsConfig: i } = Km(),
        r = E.resolve('views'),
        o = ta({
            contentId: r.read((e) =>
                s === $m
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { paramType: s },
        }),
        l = ee(
            t.table.getRowModel().rows,
            (e, a) => {
                const t = a.getValue(s),
                    n = sa(t) ? t : t.value;
                return e + (s === Fm && n > 0 ? 1 : n);
            },
            0,
        ),
        c = i[s] ?? '';
    return e.jsx('div', {
        className: a(iu, n),
        children: e.jsxs('div', {
            ...o,
            className: lu,
            children: [
                e.jsx('div', { className: du, children: V.formatNumber('integral', l) }),
                e.jsx('div', { className: cu, children: e.jsx(q, { width: '100%', height: '100%', path: c }) }),
            ],
        }),
    });
}
function pu({ name: a, info: t, className: s }) {
    const n = E.resolve('strings');
    switch (a) {
        case Vm:
        case zm:
        case Hm:
        case Om:
        case Mm:
        case Fm:
        case $m:
            return void 0 !== t ? e.jsx(_u, { name: a, info: t, className: s }) : null;
        case Tm:
            return e.jsx('div', {
                className: mu,
                children: e.jsx('div', {
                    className: uu,
                    children: n.readOrEmpty('battle_results.common.battleEfficiency.uppercased_title'),
                }),
            });
        default:
            return (console.error(`Unknown column ${a}`), null);
    }
}
const fu = 'IconCell_99b0caec',
    bu = t.memo(function ({ value: s, name: n, userName: i, className: r }) {
        const { iconsConfig: o } = Km(),
            l = E.resolve('views'),
            c = ta({
                contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
                args: t.useMemo(() => ({ userName: i, paramType: n }), [n, i]),
            });
        if (0 === s) return null;
        const d = o[n] ?? '';
        return e.jsx('div', {
            ...c,
            className: a(fu, r),
            children: e.jsx(q, { width: '32rem', height: '32rem', path: d }),
        });
    }),
    hu = 'NumberCell_c62bf499',
    vu = t.memo(function ({ value: s, userName: n, name: i, className: r }) {
        const o = E.resolve('views'),
            l = ta({
                contentId: o.read((e) =>
                    i === $m
                        ? e.mono.post_battle.tooltips.critical_damage('resId')
                        : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
                ),
                args: t.useMemo(() => ({ userName: n, paramType: i }), [i, n]),
            });
        return 0 === s ? null : e.jsx('div', { ...l, className: a(hu, r), children: V.formatNumber('integral', s) });
    }),
    gu = {
        base: 'NumberWithCounterCell_f729c44',
        counter: 'NumberWithCounterCell_counter_8bb0eb59',
        counter__hidden: 'NumberWithCounterCell_counter__hidden_468e7d52',
        counterValue: 'NumberWithCounterCell_counterValue_566cc1fa',
        roundedCount: 'NumberWithCounterCell_roundedCount_c97dad37',
    };
function yu({ count: a }) {
    const t = k({ body: a.toString() }),
        s = (n = a) < 1e3 ? n : Math.floor(n / 1e3);
    var n;
    return e.jsx('div', {
        className: gu.counterValue,
        children:
            s === a
                ? a
                : e.jsx('div', {
                      ...t,
                      className: gu.roundedCount,
                      children: e.jsx(B, {
                          path: 'common.numberAbbrev',
                          params: { value: V.formatNumber('integral', Math.min(s, 99)) },
                      }),
                  }),
    });
}
const xu = t.memo(function ({ value: s, count: n, name: i, userName: r, className: o }) {
        const { iconsConfig: l } = Km(),
            c = E.resolve('views'),
            d = ta({
                contentId: c.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
                args: t.useMemo(() => ({ userName: r, paramType: i }), [i, r]),
            });
        if (0 === s && 0 === n) return null;
        const m = l[i] ?? '';
        return e.jsxs('div', {
            ...d,
            className: a(gu.base, o),
            children: [
                s > 0 && V.formatNumber('integral', s),
                e.jsxs('div', {
                    className: a(gu.counter, 0 === n && gu.counter__hidden),
                    children: [
                        e.jsx(q, { className: gu.icon, width: '32rem', height: '32rem', path: m }),
                        n >= 2 && e.jsx(yu, { count: n }),
                    ],
                }),
            ],
        });
    }),
    Nu = 'VehicleCell_2823d754',
    ju = 'VehicleCell_imageWrapper_f0d20784',
    wu = 'VehicleCell_typeWrapper_1232db26',
    Iu = 'VehicleCell_level_3970ad9d',
    Cu = 'VehicleCell_name_755dfe36',
    Au = 'VehicleCell_name__unknown_83c23c5e';
function Su({ vehicle: t }) {
    const s = void 0 === t;
    return e.jsxs('div', {
        className: Nu,
        children: [
            e.jsx('div', {
                className: ju,
                children: e.jsx(na, { size: na.size.x120x96, name: s ? 'tank_empty' : t.techName }),
            }),
            !1 === s &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(T, { value: t.tier, className: Iu }),
                        e.jsx('div', { className: wu, children: e.jsx(D, { size: 'x24x24', type: t.type }) }),
                    ],
                }),
            e.jsx('div', {
                className: a(Cu, s && Au),
                children: s
                    ? e.jsx(B, { path: 'ingame_gui.players_panel.unknown_vehicle' })
                    : e.jsx(aa, { text: t.name }),
            }),
        ],
    });
}
const Pu = 'Index_align_5032d1bf',
    Bu = 'Index_align__right_9d371d4f',
    Ru = 'Index_align__left_7938cc',
    Eu = 'Index_offsetCell_c4e68915',
    ku = 'Index_offsetCell__number_2c760167',
    Tu = S();
function Du() {
    return [
        Tu.accessor('killed', {
            id: Vm,
            header: (t) => e.jsx(pu, { info: t, name: Vm, className: a(ru, ou) }),
            enableSorting: !1,
            meta: { column: qm, className: a(Pu, Bu) },
        }),
        Tu.accessor('damageDealt', {
            id: zm,
            header: (a) => e.jsx(pu, { info: a, name: zm, className: ru }),
            enableSorting: !1,
            meta: { className: a(Pu, Bu), column: qm },
        }),
        Tu.accessor('damageBlockedByArmor', {
            id: Hm,
            header: (a) => e.jsx(pu, { info: a, name: Hm, className: ru }),
            enableSorting: !1,
            meta: { className: a(Pu, Bu), column: qm },
        }),
        Tu.accessor('damageAssisted', {
            id: Om,
            header: (a) => e.jsx(pu, { info: a, name: Om, className: ru }),
            enableSorting: !1,
            meta: { className: a(Pu, Bu), column: qm },
        }),
        Tu.accessor('damageAssistedStun', {
            id: Mm,
            header: (a) => e.jsx(pu, { info: a, name: Mm, className: ru }),
            enableSorting: !1,
            meta: { className: a(Pu, Bu), column: qm },
        }),
        Tu.accessor('spotted', {
            id: Fm,
            header: (a) => e.jsx(pu, { info: a, name: Fm, className: ru }),
            enableSorting: !1,
            meta: { className: a(Pu, Bu), column: qm },
        }),
        Tu.accessor('criticalDamage', {
            id: $m,
            header: (a) => e.jsx(pu, { info: a, name: $m, className: ru }),
            enableSorting: !1,
            meta: { className: a(Pu, Bu), column: qm },
        }),
    ];
}
const Vu = 'PersonalEfficiency_table_1104dbe8',
    zu = 'PersonalEfficiency_table__closed_589e70ab',
    Hu = 'PersonalEfficiency_hintKey_f91859a5',
    Ou = 'PersonalEfficiency_messagesPanel_d1b1fa0b',
    Mu = 'PersonalEfficiency_message_d772bbd7',
    Fu = 'PersonalEfficiency_expandableOverlayWrapper_a5a56a5d',
    $u = 'PersonalEfficiency_expandableOverlayWrapper__hidden_97a3493d',
    Gu = 'PersonalEfficiency_expandableOverlayWrapper__notInteractive_598241cc',
    Lu = 'PersonalEfficiency_scrollableArea_c747d607',
    Ku = 'PersonalEfficiency_scrollableArea__nonInteractive_589e70ab',
    Xu = 'PersonalEfficiency_totalEfficiency_eb2592a8',
    Wu = 'PersonalEfficiency_totalEfficiency__notInteractive_4b33f28d',
    qu = 'PersonalEfficiency_totalEfficiencyTable_9139933',
    Uu = 'PersonalEfficiency_tableWrapper_cd2e7488',
    Yu = 'PersonalEfficiency_overlayDivider_37eac6ff',
    Zu = 'PersonalEfficiency_overlayDivider__closed_6b67c790',
    Ju = 'PersonalEfficiency_clarificationWrapper_5f3072b1',
    Qu = { row: 'PersonalEfficiency_headerRow_6acaa215' };
function e_() {
    const { opened: s } = lm(),
        { api: n } = Z();
    return (
        t.useLayoutEffect(() => {
            s && n.applyScroll(0, { immediate: !0 });
        }, [s, n]),
        e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: a(Lu, !s && Ku), onWheel: n.handleMouseWheel }),
                e.jsx(Wm.Header, { classNames: Qu }),
                e.jsx(Wm.Body, { children: e.jsx(Wm.Footer, {}) }),
            ],
        })
    );
}
const a_ = H.cubicBezier(0.33, 0, 0.25, 1),
    t_ = 'first',
    s_ = 'second',
    n_ = 'closedArrowInLoop',
    i_ = 'openedArrowInLoop',
    r_ = o(function ({ visible: s, totalEfficiencyStylesApi: i }) {
        const { model: r } = Sl(),
            o = r.computes.personalEffiency(),
            { closedPosition: l, overlayApi: c, shadowApi: d, arrowStylesApi: m } = lm(),
            { breakpoint: u } = Pe(),
            [_, p] = t.useState(n_),
            [f, b] = j(() => ({ from: { opacity: 0 } })),
            h = t.useMemo(
                () =>
                    (function ({ breakpointName: t, assault: s, defend: n }) {
                        const i = 'small' === t ? Qe.extraSmall : t;
                        return [
                            Tu.accessor('account', {
                                id: Tm,
                                header: () => e.jsx(pu, { name: Tm }),
                                footer: () => e.jsx(nu, { assault: s, defend: n }),
                                enableSorting: !1,
                                cell: (a) => e.jsx(tu, { account: a.getValue() }),
                                meta: { className: a(Pu, Ru), column: Um[Tm][i] },
                            }),
                            Tu.accessor('vehicle', {
                                id: Dm,
                                header: void 0,
                                enableSorting: !1,
                                cell: (a) => e.jsx(Su, { vehicle: a.getValue() }),
                                meta: { column: Um[Dm][i] },
                            }),
                            Tu.accessor('killed', {
                                id: Vm,
                                header: (a) => e.jsx(pu, { name: Vm, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(bu, {
                                        name: Vm,
                                        value: a.getValue(),
                                        userName: a.row.original.account.username,
                                        className: Eu,
                                    }),
                                meta: { column: qm, className: a(Pu, Bu) },
                            }),
                            Tu.accessor('damageDealt', {
                                id: zm,
                                header: (a) => e.jsx(pu, { name: zm, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(xu, {
                                        ...a.getValue(),
                                        name: zm,
                                        userName: a.row.original.account.username,
                                        className: Eu,
                                    }),
                                meta: { className: a(Pu, Bu), column: qm },
                            }),
                            Tu.accessor('damageBlockedByArmor', {
                                id: Hm,
                                header: (a) => e.jsx(pu, { name: Hm, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(xu, {
                                        ...a.getValue(),
                                        name: Hm,
                                        userName: a.row.original.account.username,
                                        className: Eu,
                                    }),
                                meta: { className: a(Pu, Bu), column: qm },
                            }),
                            Tu.accessor('damageAssisted', {
                                id: Om,
                                header: (a) => e.jsx(pu, { name: Om, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(vu, {
                                        value: a.getValue(),
                                        name: Om,
                                        userName: a.row.original.account.username,
                                        className: ku,
                                    }),
                                meta: { className: a(Pu, Bu), column: qm },
                            }),
                            Tu.accessor('damageAssistedStun', {
                                id: Mm,
                                header: (a) => e.jsx(pu, { name: Mm, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(xu, {
                                        ...a.getValue(),
                                        name: Mm,
                                        userName: a.row.original.account.username,
                                        className: Eu,
                                    }),
                                meta: { className: a(Pu, Bu), column: qm },
                            }),
                            Tu.accessor('spotted', {
                                id: Fm,
                                header: (a) => e.jsx(pu, { name: Fm, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(bu, {
                                        name: Fm,
                                        value: a.getValue(),
                                        userName: a.row.original.account.username,
                                        className: Eu,
                                    }),
                                meta: { className: a(Pu, Bu), column: qm },
                            }),
                            Tu.accessor('criticalDamage', {
                                id: $m,
                                header: (a) => e.jsx(pu, { name: $m, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(vu, {
                                        value: a.getValue(),
                                        name: $m,
                                        userName: a.row.original.account.username,
                                        className: ku,
                                    }),
                                meta: { className: a(Pu, Bu), column: qm },
                            }),
                        ];
                    })({ breakpointName: u.name, assault: o.assault, defend: o.defend }),
                [u.name, o.assault, o.defend],
            );
        return (
            t.useEffect(() => {
                if (s && _ === n_) return (m.stop(), void p(t_));
                if (!s && _ === i_) return (m.stop(), void p(s_));
                switch (_) {
                    case n_:
                        m.start({
                            from: { x: '-50%', y: '0', rotate: 180, opacity: 1 },
                            to: [
                                { x: '-50%', y: '-5rem', rotate: 180, opacity: 0 },
                                { x: '-50%', y: '0', rotate: 180, opacity: 0 },
                                { x: '-50%', y: '0', rotate: 180, opacity: 1 },
                            ],
                            config: { easing: a_, duration: 800 },
                            loop: !0,
                        });
                        break;
                    case t_:
                        (m.start({
                            to: { opacity: 0, x: '-50%', y: s ? '40rem' : '0', rotate: s ? 0 : 180 },
                            immediate: !0,
                        }),
                            i.start({
                                to: { opacity: s ? 0 : 1 },
                                delay: s ? 0 : 150,
                                config: { easing: a_, duration: 200 },
                            }),
                            c.start({
                                to: { y: s ? '0' : l, backgroundColor: s ? 'rgba(22, 30, 40, 0.96)' : 'transparent' },
                                config: { easing: a_, duration: 200 },
                                delay: s ? 0 : 150,
                                onRest: () => p(s ? s_ : n_),
                            }),
                            d.start({
                                to: { opacity: s ? 1 : 0 },
                                delay: s ? 0 : 150,
                                config: { easing: a_, duration: 200 },
                            }),
                            b.start({
                                to: { opacity: s ? 1 : 0 },
                                delay: s ? 150 : 0,
                                config: { easing: a_, duration: 100 },
                            }));
                        break;
                    case s_:
                        (m.start({
                            to: { opacity: 0, x: '-50%', y: s ? '40rem' : '0', rotate: s ? 0 : 180 },
                            immediate: !0,
                        }),
                            p(s ? i_ : t_));
                        break;
                    case i_: {
                        const e = u.weight > Be.large.weight ? '53rem' : '40rem';
                        m.start({
                            from: { x: '-50%', y: e, rotate: 0, opacity: 1 },
                            to: [
                                {
                                    x: '-50%',
                                    y: u.weight > Be.large.weight ? '58rem' : '45rem',
                                    rotate: 0,
                                    opacity: 0,
                                    config: { duration: 1e3 },
                                },
                                { x: '-50%', y: e, rotate: 0, opacity: 0, config: { duration: 400 } },
                                { x: '-50%', y: e, rotate: 0, opacity: 1, config: { duration: 200 } },
                            ],
                            config: { easing: a_, duration: 800 },
                            loop: !0,
                        });
                        break;
                    }
                }
            }, [_, s, l, u.weight, m, c, d, b, i]),
            t.useLayoutEffect(() => {
                !1 === s && _ === n_ && c.start({ to: { y: l }, immediate: !0 });
            }, [l, s, _, c]),
            e.jsx(n.div, {
                className: Uu,
                style: f,
                children: e.jsx(Wm, { config: h, data: o, className: a(Vu, !s && zu), children: e.jsx(e_, {}) }),
            })
        );
    }),
    o_ = o(function () {
        const { model: s } = Sl(),
            i = s.computes.personalEffiency(),
            r = s.battleInfo.get().finishReasonClarification,
            o = E.resolve('strings'),
            l = F(),
            { hintKeyRef: c, overlayDividerRef: d, personalEfficiencyRef: m, completedSteps: u } = gt(),
            _ = !1 === u.has(ft.fifth),
            [p] = j(() => ({ from: { opacity: 0 }, ref: c })),
            [f] = j(() => ({ from: { maskSize: '0% 100%' }, ref: d })),
            [b] = j(() => ({ from: { opacity: 0 }, ref: m })),
            h = le({ value: 159 }, { medium: { value: 187 }, large: { value: 199 }, extraLarge: { value: 267 } }),
            { active: v } = W(),
            g = t.useRef(null),
            [y, x] = t.useState(0),
            [N, w] = t.useState(!1),
            [I, C] = j(() => ({ from: { opacity: N ? 0 : 1 } }));
        t.useEffect(() => {
            v !== Ca.overview && w(!1);
        }, [v]);
        const A = t.useCallback(() => {
            const e = g.current?.getBoundingClientRect().height || 0;
            e > 0 && x(Math.round(e));
        }, [x]);
        ce(g, A);
        const S = t.useMemo(() => (y > 0 ? ia(y) - h.value + 'rem' : '150%'), [y, h]),
            P = t.useMemo(Du, []);
        if (0 === i.assault && 0 === i.defend && 0 === i.rows.length)
            return e.jsxs(n.div, {
                style: b,
                className: Ou,
                children: [
                    '' !== r &&
                        e.jsx('div', {
                            className: Mu,
                            children: o.readOrEmpty(`battle_results.finish.clarification.${r}`),
                        }),
                    e.jsx('div', {
                        className: Mu,
                        children: o.readOrEmpty('battle_results.common.battleEfficiency.noEfficiency'),
                    }),
                ],
            });
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(cm, {
                    closedPosition: S,
                    visible: N,
                    changeVisible: w,
                    children: e.jsx('div', {
                        className: a(Fu, 0 === y && $u, _ && Gu),
                        children: e.jsxs(Nm, {
                            ref: g,
                            children: [
                                e.jsx(n.div, {
                                    className: a(Yu, !1 === N && Zu),
                                    style: f,
                                    children: e.jsx(Nm.OverlayDivider, {}),
                                }),
                                e.jsx(r_, { visible: N, totalEfficiencyStylesApi: C }),
                                e.jsx(n.div, {
                                    className: Hu,
                                    style: p,
                                    children: e.jsx(Nm.HintKey, { disabled: v !== Ca.overview }),
                                }),
                            ],
                        }),
                    }),
                }),
                e.jsx(n.div, {
                    style: I,
                    className: a(Xu, (N || _) && Wu),
                    onClick: function (e) {
                        (e.stopPropagation(),
                            w(!0),
                            l.play('click', { original: e, target: 'overview:total-personal-efficiency' }),
                            l.play('openOverlay', { original: e, target: 'overview:total-personal-efficiency' }));
                    },
                    children: e.jsxs(n.div, {
                        style: b,
                        children: [
                            '' !== r &&
                                e.jsx('div', {
                                    className: Ju,
                                    onClick: (e) => e.stopPropagation(),
                                    children: e.jsx('div', {
                                        className: Mu,
                                        children: o.readOrEmpty(`battle_results.finish.clarification.${r}`),
                                    }),
                                }),
                            e.jsx(Wm, { config: P, data: i, className: qu, children: e.jsx(Wm.Header, {}) }),
                        ],
                    }),
                }),
            ],
        });
    }),
    l_ = K('Overview', Kd),
    c_ = o(function ({ className: s }) {
        const i = E.resolve('strings'),
            r = F(),
            { model: o, controls: l } = Sl(),
            c = o.additionalBonus.get(),
            d = o.battleInfo.get(),
            m = o.personalEfficiency.achievements.get(),
            {
                step: u,
                battleStatusRef: _,
                dividerRef: p,
                earnedCurrenciesRef: f,
                bonusRef: b,
                setAllMedalsAnimated: h,
            } = gt(),
            [v] = j(() => ({ from: { opacity: 0, y: '-10rem' }, ref: _ })),
            [g] = j(() => ({ from: { maskSize: '0% 100%' }, ref: p })),
            [y] = j(() => ({ from: { opacity: 0, y: '-10rem' }, ref: f })),
            [x] = j(() => ({ from: { opacity: 0, y: '10rem' }, ref: b })),
            { api: N, setCompletedAnimationIndexes: w } = $l(),
            I = o.computes.premiumAndStandartEarnings(),
            C = o.battleInfo.get()?.status,
            A = t.useMemo(() => (void 0 !== d && ll.includes(d?.modeName) ? ol : tl), [d]);
        return (
            t.useEffect(() => {
                0 === m.length && h(!0);
            }, [m.length, h]),
            t.useEffect(() => {
                if (u === ft.immediate)
                    return (
                        N.start(() => ({ x: 0, y: 0, scale: 1, opacity: 1, immediate: !0 })),
                        h(!0),
                        void w(new Set(De(m.length, (e) => e)))
                    );
                if (u === ft.first) {
                    const e = 500 * Math.log(m.length),
                        a = 150 * Math.log(m.length);
                    (N.start((t) => {
                        const s = e - 500 * Math.log(m.length - t),
                            n = a - 150 * Math.log(m.length - t);
                        return {
                            x: 0,
                            y: 0,
                            scale: 1,
                            delay: 200 * t + s,
                            config: { duration: 400 + n, easing: H.cubicBezier(1, 0, 0.95, 1) },
                            onRest() {
                                (r.play('achievementAppeared', { target: 'overview' }),
                                    t === m.length - 1 && h(!0),
                                    w((e) => M(e, t)));
                            },
                        };
                    }),
                        N.start((t) => ({
                            opacity: 1,
                            delay: 150 + 200 * t + (e - 500 * Math.log(m.length - t)),
                            config: {
                                duration: 250 + (a - 150 * Math.log(m.length - t)),
                                easing: H.cubicBezier(0.33, 0, 0.25, 1),
                            },
                        })));
                }
            }, [u, N, w, r, m.length, h]),
            e.jsxs(l_, {
                className: s,
                children: [
                    e.jsx('div', { className: Ld }),
                    o.playerSatisfaction.get().isPlayerSatisfactionInterfaceEnabled &&
                        e.jsx(mc, {
                            state: o.playerSatisfaction.get().state,
                            onSatisfactionRatingSelected: l.onSatisfactionRatingSelected,
                        }),
                    e.jsx(rm, {}),
                    e.jsxs('div', {
                        className: a(Xd, 0 === m.length && Wd),
                        children: [
                            e.jsx('div', {
                                className: qd,
                                children: e.jsx(n.div, {
                                    style: v,
                                    className: Yd,
                                    children: e.jsx('div', {
                                        className: Zd,
                                        'data-test-id': 'winStatus',
                                        children: V.toUpperCase(i.readOrEmpty(`battle_results.status.${C}`)),
                                    }),
                                }),
                            }),
                            e.jsxs('div', {
                                className: Ud,
                                children: [
                                    e.jsx(Jl, { className: Jd }),
                                    e.jsx(n.div, { style: y, className: tm, children: e.jsx($d, {}) }),
                                    e.jsx(n.div, {
                                        style: g,
                                        className: Qd,
                                        children: e.jsx(Nt, { classNames: { base: em, image: am } }),
                                    }),
                                    e.jsx(pc, {
                                        ...c,
                                        premiumAndStandartEarnings: I,
                                        applyBonus: l.applyBonus,
                                        handleAdvertisement: (e) => l.useAdvertisement(e),
                                        supportedAdvertisements: A,
                                        showBonusDetails: l.showBonusDetails,
                                        children: e.jsx(n.div, { style: x, children: e.jsx(Cd, { className: sm }) }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx(o_, {}),
                ],
            })
        );
    }),
    d_ = o(function (a) {
        const { model: t } = Sl(),
            s = t.personalEfficiency.achievements.get(),
            n = t.computes.personalInfo().vehicle.nation;
        return e.jsx(Ll, { achievements: s, vehicleNation: n, children: e.jsx(c_, { ...a }) });
    }),
    m_ = { divider: 'Divider_80a19f4b' },
    u_ = t.forwardRef(function ({ classNames: t, className: s, ...n }, i) {
        return e.jsx('div', {
            ...n,
            ref: i,
            className: a(m_.divider, t?.base, s),
            children: e.jsx(q, {
                className: a(m_.dividerImage, t?.image),
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    });
const __ = {
    header: 'Header_ecb415bd',
    vehicle: 'Header_vehicle_e1c620c0',
    vehicleImageWrapper: 'Header_vehicleImageWrapper_f07116f5',
    vehicleLevel: 'Header_vehicleLevel_dd63e493',
    vehicle__teamKiller: 'Header_vehicle__teamKiller_65f475ba',
    vehicleType: 'Header_vehicleType_2a3aedee',
    vehicleName: 'Header_vehicleName_7dc7512f',
    vehicleGap: 'Header_vehicleGap_b2df83a7',
    info: 'Header_info_63ade36e',
    accountInfo: 'Header_accountInfo_e1497c3e',
    accountInfoGap: 'Header_accountInfoGap_50a55407',
    accountName: 'Header_accountName_6a8dc850',
    clanAbbreviation: 'Header_clanAbbreviation_4ac4e596',
    accountName__teamKiller: 'Header_accountName__teamKiller_65f475ba',
    clanAbbreviation__teamKiller: 'Header_clanAbbreviation__teamKiller_df866a4',
    killerClanAbbreviation: 'Header_killerClanAbbreviation_ecb415bd',
    anonymizerIcon: 'Header_anonymizerIcon_b6806a1a',
    vehicleState: 'Header_vehicleState_73fcbd07',
    killerAccount__teamKiller: 'Header_killerAccount__teamKiller_df866a4',
    achievements: 'Header_achievements_5efa2203',
    achievement: 'Header_achievement_49110775',
    achievement__extinct: 'Header_achievement__extinct_19f6e11',
    achievementIcon: 'Header_achievementIcon_e6989d30',
};
function p_(e, a) {
    return void 0 === a ? 'default' : a === e ? 'hover' : 'extinct';
}
const f_ = t.forwardRef(function (
    { achievement: s, achievementsLength: n, index: i, hoverIndex: r, setHoverIndex: o, ...l },
    c,
) {
    const d = F(),
        m = ra(
            s.tooltipId,
            t.useMemo(() => JSON.parse(s.tooltipArgs), [s.tooltipArgs]),
        ),
        u = le(
            { width: '48rem', height: '48rem', path: `achievement.c_48x48.${s.iconName}` },
            { medium: { width: '67rem', height: '71rem', path: `achievement.${s.iconName}` } },
        );
    return e.jsx('div', {
        ...l,
        ...m,
        className: a(__.achievement, __[`achievement__${p_(i, r)}`]),
        style: { zIndex: i === r ? n + 1 : n - i },
        onMouseEnter: function (e) {
            (m.onMouseEnter(e),
                o(i),
                d.play('mouse-enter', { original: e, target: 'team-efficiency:efficiency-details:achievement' }));
        },
        onMouseLeave: () => {
            (m.onMouseLeave(), o(void 0));
        },
        children: e.jsx(q, { ref: c, className: __.achievementIcon, ...u }, s.iconName),
    });
});
function b_({ vehicleStatusKey: e, anonymized: a, clanAbbrev: t, personal: s, abbondonBattle: n }) {
    if (s && n) return 'battle_results.common.vehicleState.prematureLeave';
    return !1 === Nl.includes(e)
        ? `battle_results.common.vehicleState.${e}`
        : a || '' === t
          ? `battle_results.common.vehicleState.${e}_with_killername`
          : `battle_results.common.vehicleState.${e}_with_killername_and_clan`;
}
const h_ = o(function ({
        team: s,
        account: n,
        vehicle: i,
        achievements: r,
        squadIndex: o,
        personal: l,
        userStatus: c,
        killer: d,
    }) {
        const m = E.resolve('strings'),
            [u, _] = t.useState(void 0),
            { model: p } = Sl(),
            f = p.computes.personalInfo(),
            b = le({ width: '230rem', height: '184rem' }, { medium: { width: '290rem', height: '232rem' } }),
            h = Cl({ personal: l, platoonType: Il(s, f.squadIndex, o), anonymizer: n.anonymizer }),
            v = k({
                header: m
                    .readOrEmpty('tooltips.anonymizer.teamStats.header')
                    .replace('%(name)s', h ? n.username : n.fakeUsername),
                body: m.readOrEmpty('tooltips.anonymizer.teamStats.body'),
            }),
            g = -1 === (y = c.deathReason) ? 'alive' : `dead${y}`;
        var y;
        const x = h ? d.fakeUsername : d.username,
            N = void 0 === i;
        return e.jsxs('div', {
            className: __.header,
            children: [
                e.jsx('div', {
                    className: __.vehicleImageWrapper,
                    children: e.jsx(na, { name: N ? 'tank_empty' : i.techName, width: b.width, height: b.height }),
                }),
                e.jsxs('div', {
                    className: __.info,
                    children: [
                        e.jsxs(ea, {
                            className: __.accountInfo,
                            children: [
                                n.badge !== rl &&
                                    e.jsx(ea.Badge, {
                                        className: __.accountInfoGap,
                                        size: ea.Badge.sizes.x48x48,
                                        badgeId: n.badge,
                                    }),
                                e.jsx(ea.Name, {
                                    className: a(
                                        __.accountName,
                                        __.accountInfoGap,
                                        n.teamKiller && __.accountName__teamKiller,
                                    ),
                                    children: e.jsx(aa, { text: h ? n.fakeUsername : n.username }),
                                }),
                                '' !== n.clanAbbreviation &&
                                    !h &&
                                    e.jsx(ea.ClanTag, {
                                        className: a(
                                            __.clanAbbreviation,
                                            n.teamKiller && __.clanAbbreviation__teamKiller,
                                        ),
                                        children: e.jsx(B, {
                                            path: 'common.clanTag',
                                            params: { abbrev: n.clanAbbreviation },
                                            brackets: { start: '{', end: '}' },
                                        }),
                                    }),
                                0 !== n.igrType &&
                                    e.jsx(ea.IgrIcon, { size: ea.IgrIcon.sizes.x64x28, className: __.accountInfoGap }),
                                n.suffixBadge !== rl &&
                                    e.jsx(ea.Stripe, {
                                        size: ea.Stripe.sizes.regular,
                                        badgeId: n.suffixBadge,
                                        className: __.accountInfoGap,
                                    }),
                                n.anonymizer &&
                                    e.jsx(ea.AnonymizerIcon, {
                                        ...v,
                                        size: ea.AnonymizerIcon.sizes.x32x32,
                                        className: __.anonymizerIcon,
                                    }),
                            ],
                        }),
                        e.jsx('div', {
                            className: a(__.vehicle, n.teamKiller && __.vehicle__teamKiller),
                            children: N
                                ? e.jsx(B, { path: 'ingame_gui.players_panel.unknown_vehicle' })
                                : e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx(T, { value: i.tier, className: a(__.vehicleLevel, __.vehicleGap) }),
                                          e.jsx(D, {
                                              type: i.type,
                                              size: 'x24x24',
                                              className: a(__.vehicleType, __.vehicleGap),
                                          }),
                                          e.jsx('div', { className: __.vehicleName, children: i.longName }),
                                      ],
                                  }),
                        }),
                        e.jsx('div', {
                            className: __.vehicleState,
                            children: e.jsx(B, {
                                path: b_({
                                    vehicleStatusKey: g,
                                    anonymized: h,
                                    personal: l,
                                    clanAbbrev: d.clanAbbreviation,
                                    abbondonBattle: c.abandonBattle,
                                }),
                                params: {
                                    killername: x,
                                    clanTag: d.clanAbbreviation,
                                    killerClass: a(__.killerAccount, d.teamKiller && __.killerAccount__teamKiller),
                                },
                            }),
                        }),
                        0 !== r.length &&
                            e.jsx('div', {
                                className: __.achievements,
                                children: Q(yo(r), (a, t) =>
                                    e.jsx(
                                        f_,
                                        {
                                            index: t,
                                            hoverIndex: u,
                                            setHoverIndex: _,
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
    v_ = K('StatisticsLabel'),
    g_ = E.resolve('strings'),
    y_ = t.forwardRef(function ({ labelKey: a, ...t }, s) {
        return e.jsx(v_, { ...t, ref: s, children: g_.readOrEmpty(a) });
    }),
    x_ = 'Value_798a6cdd',
    N_ = 'Value_separator_798a6cdd',
    j_ = E.resolve('strings');
function w_(e, a) {
    switch (e) {
        case cl.Integer:
            return V.formatNumber('integral', a);
        case cl.Float:
            return V.formatReal('fractional', a);
        default:
            return a;
    }
}
const I_ = K('StatisticsValue', x_),
    C_ = t.forwardRef(function (
        {
            labelKey: s,
            value: n,
            type: i,
            valueSeparatorKey: r = 'common.common.slash',
            className: o,
            classNames: l,
            ...c
        },
        d,
    ) {
        return e.jsx(I_, {
            ...c,
            ref: d,
            className: a(l?.base, o),
            children: Q(n, (o, c) =>
                e.jsxs(
                    t.Fragment,
                    {
                        children: [
                            e.jsx('div', {
                                className: a(0 === o && l?.zeroValue, o < 0 && l?.negativeValue),
                                children: w_(i, o),
                            }),
                            c < n.length - 1 &&
                                e.jsxs('div', {
                                    className: a(N_, l?.separator),
                                    children: [' ', j_.readOrEmpty(r), ' '],
                                }),
                        ],
                    },
                    `${s}_value_${c}`,
                ),
            ),
        });
    }),
    A_ = 'Index_scrollAreaContent_52a570a',
    S_ = 'Index_scrollAreaContent__initialized_b2629fde',
    P_ = 'Index_item_6b7cdfb0',
    B_ = 'Index_separator_add04e19',
    R_ = K('Statistics', 'Index_statistics_638478ff'),
    E_ = K('StatisticsItem', P_),
    k_ = K('StatisticsItemSeparator', B_);
function T_({ children: t, scrollbarProps: s, scrollAreaProps: n }) {
    const i = Z(),
        r = Bt(i.api);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(J, {
                ...n,
                classNames: { ...n?.classNames, content: a(A_, r && S_, n?.classNames?.content) },
                children: t,
            }),
            e.jsx(Y, { ...s }),
        ],
    });
}
const D_ = t.forwardRef(function ({ scrollbarProps: a, scrollAreaProps: t, ...s }, n) {
    return e.jsx(R_, {
        ...s,
        ref: n,
        children: e.jsx(U, { children: e.jsx(T_, { ...s, scrollbarProps: a, scrollAreaProps: t }) }),
    });
});
((D_.Item = E_), (D_.Value = C_), (D_.Label = y_), (D_.Separator = k_));
const V_ = 'PlayerStatistics_scrollbar_987bbca2',
    z_ = 'PlayerStatistics_scrollAreaContent_8636fa99',
    H_ = 'PlayerStatistics_listItemSeparator_32247273',
    O_ = 'PlayerStatistics_listItem_27e9eeba',
    M_ = 'PlayerStatistics_label_3fb1f69f',
    F_ = 'PlayerStatistics_value_6831d5c1',
    $_ = 'PlayerStatistics_zeroValue_d98b2431',
    G_ = 'PlayerStatistics_valueSeparator_dcf01904',
    L_ = 'PlayerStatistics_listSubItem_db8ef127',
    K_ = 'PlayerStatistics_separator_4e8ac571',
    X_ = 'PlayerStatistics_separatorSquare_5e440c20';
function W_({ squareSize: a = 1, spacing: s = 2, backgroundColor: n = '#d9d9d9' }) {
    const i = t.useRef(null),
        [r, o] = t.useState(0),
        l = a + s,
        c = t.useCallback(() => {
            const e = i.current;
            if (null !== e) {
                const a = e.getBoundingClientRect().width,
                    t = ia(a);
                o(Math.floor(t / l));
            }
        }, [l]);
    return (
        oa(c, [i.current, l, c]),
        t.useEffect(() => la(c), [c]),
        e.jsx('div', {
            ref: i,
            className: K_,
            children: Array.from({ length: r }).map((t, s) =>
                e.jsx(
                    'div',
                    {
                        className: X_,
                        style: { backgroundColor: n, width: `${a}rem`, height: `${a}rem`, left: s * l + 'rem' },
                    },
                    s,
                ),
            ),
        })
    );
}
function q_({ list: s }) {
    return e.jsx(D_, {
        scrollbarProps: { classNames: { base: V_ } },
        scrollAreaProps: { classNames: { content: z_ } },
        children: Q(s, (s) =>
            e.jsxs(
                t.Fragment,
                {
                    children: [
                        e.jsxs(D_.Item, {
                            className: O_,
                            children: [
                                e.jsx(D_.Label, {
                                    className: M_,
                                    labelKey: `battle_results.team.stats.labels_${s.labelKey}`,
                                }),
                                e.jsx(D_.Separator, { className: H_, children: e.jsx(W_, {}) }),
                                e.jsx(D_.Value, {
                                    classNames: { base: F_, zeroValue: $_, separator: G_ },
                                    labelKey: s.labelKey,
                                    value: s.value,
                                    type: s.paramValueType,
                                }),
                            ],
                        }),
                        void 0 !== s.details &&
                            Q(s.details, (t) =>
                                e.jsxs(
                                    D_.Item,
                                    {
                                        className: a(O_, L_),
                                        children: [
                                            e.jsx(D_.Label, {
                                                className: M_,
                                                labelKey: `battle_results.team.stats.labels_${t.labelKey}`,
                                            }),
                                            e.jsx(D_.Separator, { className: H_, children: e.jsx(W_, {}) }),
                                            e.jsx(D_.Value, {
                                                classNames: { base: F_, zeroValue: $_, separator: G_ },
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
const U_ = 'EfficiencyDetails_efficiencyDetails__allies_20b1febc',
    Y_ = 'EfficiencyDetails_efficiencyDetails__enemies_23a29af',
    Z_ = 'EfficiencyDetails_divider_85b11efd',
    J_ = 'EfficiencyDetails_dividerImage_5b9d06d2',
    Q_ = 'EfficiencyDetails_closeIcon_8d81da90',
    ep = 'EfficiencyDetails_statistics_30a81815',
    ap = K('EfficiencyDetails', 'EfficiencyDetails_efficiencyDetails_db8069eb', {
        variants: { team: { [yl]: U_, [xl]: Y_ } },
    }),
    tp = o(function ({ team: a, className: s }) {
        const { model: n, controls: i } = Sl(),
            r = n.computes.efficiencyDetails(),
            o = F(),
            l = t.useRef(null);
        return (
            t.useEffect(() => {
                const e = Oe.down(([, e]) => {
                        'outside' === e && i.teamEfficiency.selectRow(void 0);
                    }),
                    a = ca(window, 'click', (e) => {
                        l.current && !l.current.contains(e.target) && i.teamEfficiency.selectRow(void 0);
                    });
                return () => {
                    (a(), e());
                };
            }, [i.teamEfficiency]),
            void 0 === r
                ? null
                : e.jsxs(ap, {
                      team: a,
                      className: s,
                      ref: l,
                      onClick: (e) => {
                          e.stopPropagation();
                      },
                      children: [
                          e.jsx(h_, {
                              team: a,
                              account: r.account,
                              squadIndex: r.squadIndex,
                              achievements: r.achievements,
                              personal: r.personal,
                              userStatus: r.userStatus,
                              vehicle: r.vehicle,
                              killer: r.killer,
                          }),
                          e.jsx('div', { className: ep, children: e.jsx(q_, { list: r.detailedStatistics }) }),
                          e.jsx(u_, { classNames: { base: Z_, image: J_ } }),
                          e.jsx(q, {
                              className: Q_,
                              width: '24rem',
                              height: '24rem',
                              path: 'library.close',
                              onMouseEnter: () => {
                                  o.play('mouse-enter', { target: 'team-efficiency:efficiency-details:close' });
                              },
                              onClick: (e) => {
                                  (i.teamEfficiency.selectRow(void 0),
                                      o.play('close', {
                                          original: e,
                                          target: 'team-efficiency:efficiency-details:close',
                                      }));
                              },
                          }),
                      ],
                  })
        );
    }),
    sp = 'squadIndex',
    np = 'account',
    ip = 'vehicle',
    rp = 'achievements',
    op = 'damageDealt',
    lp = 'kills',
    cp = 'earnedXp',
    dp = 'AccountInfoCell_accountInfo_dec8771',
    mp = 'AccountInfoCell_accountName_9a181e4d',
    up = 'AccountInfoCell_clanAbbreviation_99f1cc86',
    _p = 'AccountInfoCell_badge_b101914f',
    pp = 'AccountInfoCell_anonymizerIcon_a1d51ca4',
    fp = 'AccountInfoCell_igrIcon_158694e7',
    bp = 'AccountInfoCell_stripe_fefba7b2',
    hp = o(function ({ account: t, team: s, platoon: n, className: i, classNames: r, ...o }) {
        const { model: l } = Sl(),
            c = l.computes.personalInfo(),
            d = Cl({
                personal: c.account.username === t.username,
                platoonType: Il(s, c.squadIndex, n),
                anonymizer: t.anonymizer,
            });
        return e.jsxs(ea, {
            ...o,
            className: a(dp, i),
            children: [
                t.badge !== rl &&
                    e.jsx(ea.Badge, { size: ea.Badge.sizes.x24x24, badgeId: t.badge, className: a(_p, r?.badge) }),
                e.jsx(ea.Name, {
                    className: a(mp, r?.username),
                    children: e.jsx(aa, { text: d ? t.fakeUsername : t.username }),
                }),
                '' !== t.clanAbbreviation &&
                    !d &&
                    e.jsx(ea.ClanTag, {
                        className: a(up, r?.clanAbbreviation),
                        children: e.jsx(B, {
                            path: 'common.clanTag',
                            params: { abbrev: t.clanAbbreviation },
                            brackets: { start: '{', end: '}' },
                        }),
                    }),
                0 !== t.igrType && e.jsx(ea.IgrIcon, { size: ea.IgrIcon.sizes.x34x16, className: a(fp, r?.igrIcon) }),
                t.suffixBadge !== rl &&
                    e.jsx(ea.Stripe, {
                        size: ea.Stripe.sizes.default,
                        badgeId: t.suffixBadge,
                        className: bp,
                        classNames: r?.suffixBadge,
                    }),
                t.anonymizer &&
                    e.jsx(ea.AnonymizerIcon, {
                        size: ea.AnonymizerIcon.sizes.x24x24,
                        className: a(pp, r?.anonymizerIcon),
                    }),
            ],
        });
    }),
    vp = 'AchievementsCell_achievementCell_e9bf973c',
    gp = 'AchievementsCell_achievementsAmount_349c209a';
function yp({ achievements: a }) {
    const t = E.resolve('strings'),
        s = k({ body: Q(yo(a), (e) => t.readOrEmpty(`achievements.${e.name}`)).join('\n') }),
        n = a.length;
    return 0 === n
        ? null
        : e.jsxs('div', {
              ...s,
              className: vp,
              children: [
                  e.jsx(q, { path: 'library.medal', width: '32rem', height: '32rem' }),
                  e.jsx('div', { className: gp, children: V.formatNumber('integral', n) }),
              ],
          });
}
const xp = { behaviour: Je.static, size: '32rem' },
    Np = { behaviour: Je.static, size: '194rem' },
    jp = { behaviour: Je.static, size: '272rem' },
    wp = { behaviour: Je.static, size: '320rem' },
    Ip = { behaviour: Je.static, size: '180rem' },
    Cp = { behaviour: Je.static, size: '236rem' },
    Ap = { behaviour: Je.static, size: '292rem' },
    Sp = { behaviour: Je.static, size: '56rem' },
    Pp = { behaviour: Je.static, size: '60rem' },
    Bp = { behaviour: Je.static, size: '80rem' },
    Rp = { behaviour: Je.static, size: '40rem' },
    Ep = { behaviour: Je.static, size: '60rem' },
    kp = { behaviour: Je.static, size: '60rem' },
    Tp = { behaviour: Je.static, size: '56rem' },
    Dp = { behaviour: Je.static, size: '60rem' },
    Vp = { behaviour: Je.static, size: '80rem' },
    zp = { behaviour: Je.static, size: '40rem' },
    Hp = {
        [sp]: { [Qe.extraSmall]: xp, [Qe.medium]: xp, [Qe.large]: xp, [Qe.extraLarge]: xp },
        [np]: { [Qe.extraSmall]: Np, [Qe.medium]: jp, [Qe.large]: jp, [Qe.extraLarge]: wp },
        [ip]: { [Qe.extraSmall]: Ip, [Qe.medium]: Cp, [Qe.large]: Cp, [Qe.extraLarge]: Ap },
        [op]: { [Qe.extraSmall]: Sp, [Qe.medium]: Pp, [Qe.large]: Pp, [Qe.extraLarge]: Bp },
        [lp]: { [Qe.extraSmall]: Rp, [Qe.medium]: Ep, [Qe.large]: Ep, [Qe.extraLarge]: kp },
        [cp]: { [Qe.extraSmall]: Tp, [Qe.medium]: Dp, [Qe.large]: Dp, [Qe.extraLarge]: Vp },
        [rp]: { [Qe.extraSmall]: zp, [Qe.medium]: zp, [Qe.large]: zp, [Qe.extraLarge]: zp },
    },
    Op = {
        headerCell__asc: 'HeaderCell_headerCell__asc_204e6a44',
        headerCell__desc: 'HeaderCell_headerCell__desc_dc5a7202',
        headerCell: 'HeaderCell_headerCell_5b34d1b1',
        headerCell__icon: 'HeaderCell_headerCell__icon_cfa14ddf',
        headerCell__text: 'HeaderCell_headerCell__text_b476890c',
    },
    Mp = {
        [sp]: 'library.shield',
        [ip]: 'library.panzer',
        [op]: 'library.cross_with_gap',
        [lp]: 'library.crossed_tank',
        [cp]: 'library.star',
        [rp]: 'library.medal',
    },
    Fp = {
        [sp]: 'squadHeader',
        [np]: 'playerHeader',
        [ip]: 'tankHeader',
        [op]: 'damageHeader',
        [lp]: 'fragHeader',
        [cp]: 'xpHeader',
        [rp]: 'medalHeader',
    },
    $p = t.forwardRef(function ({ name: t, team: s, column: n, className: i, ...r }, o) {
        const l = n.getIsSorted(),
            c = E.resolve('strings'),
            d = k({
                header: c.readOrEmpty(`battle_results.team.${Fp[t]}.header`),
                body: c.readOrEmpty(`battle_results.team.${Fp[t]}.body`),
            }),
            m = t === np;
        return e.jsx('div', {
            ...r,
            ...d,
            ref: o,
            className: a(Op.headerCell, m ? Op.headerCell__text : Op.headerCell__icon, l && Op[`headerCell__${l}`], i),
            children: m
                ? c.readOrEmpty(`battle_results.team.stats.${s}`)
                : e.jsx(q, { width: '32rem', height: '32rem', path: Mp[t] }),
        });
    }),
    Gp = 'NumberValueCell_numberValueCell_8840a07';
function Lp({ value: t, className: s, showZero: n = !0 }) {
    return !1 === n && 0 === t ? null : e.jsx('div', { className: a(Gp, s), children: V.formatNumber('integral', t) });
}
const Kp = {
        platoon: 'PlatoonCell_platoon_5fe0374b',
        platoonText: 'PlatoonCell_platoonText_b6a98287',
        platoonText__personal: 'PlatoonCell_platoonText__personal_d021db4c',
        platoonText__alien: 'PlatoonCell_platoonText__alien_9767e814',
    },
    Xp = { [wl]: 'library.platoon_indicator_gray', [jl]: 'library.platoon_indicator_orange' },
    Wp = o(function ({ platoon: t, team: s }) {
        const { model: n } = Sl(),
            i = Il(s, n.computes.personalInfo().squadIndex, t);
        if (null === i) return null;
        const r = Xp[i];
        return e.jsxs('div', {
            className: Kp.platoon,
            children: [
                e.jsx(q, { path: r, width: '32rem', height: '32rem' }),
                e.jsx('div', { className: a(Kp.platoonText, Kp[`platoonText__${i}`]), children: t }),
            ],
        });
    }),
    qp = 'VehicleCell_vehicle_386f696d',
    Up = 'VehicleCell_vehicleImageWrapper_aa1c27bd',
    Yp = 'VehicleCell_vehicleTypeWrapper_3f1f3f6d',
    Zp = 'VehicleCell_vehicleLevel_1a4134b1',
    Jp = 'VehicleCell_vehicleName_eaeb9715',
    Qp = 'VehicleCell_vehicleName__unknown_726ac1d0';
function ef({ vehicle: t, classNames: s, className: n }) {
    const i = void 0 === t;
    return e.jsxs('div', {
        className: a(qp, n),
        children: [
            e.jsx('div', {
                className: a(Up, s?.imageWrapper),
                children: e.jsx(na, {
                    size: na.size.x120x96,
                    name: i ? 'tank_empty' : t.techName,
                    className: s?.image,
                }),
            }),
            !1 === i &&
                e.jsxs(e.Fragment, {
                    children: [
                        e.jsx(T, { value: t.tier, className: a(Zp, s?.level) }),
                        e.jsx('div', {
                            className: a(Yp, s?.typeWrapper),
                            children: e.jsx(D, { size: 'x24x24', type: t.type, className: s?.type }),
                        }),
                    ],
                }),
            e.jsx('div', {
                className: a(Jp, i && Qp, s?.name),
                children: i
                    ? e.jsx(B, { path: 'ingame_gui.players_panel.unknown_vehicle' })
                    : e.jsx(aa, { text: t.name }),
            }),
        ],
    });
}
const af = {
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
    tf = {
        tableBodyRow: 'TableBodyRow_tableBodyRow_be19874',
        tableBodyRow__selected: 'TableBodyRow_tableBodyRow__selected_9cd5fe77',
        hoverOverlay: 'TableBodyRow_hoverOverlay_dab11111',
        selectedRowTail: 'TableBodyRow_selectedRowTail_595bad28',
        selectedRowTail__enemies: 'TableBodyRow_selectedRowTail__enemies_15d3ff4e',
        rowDivider: 'TableBodyRow_rowDivider_7f22c0ad',
        rowDividerImage: 'TableBodyRow_rowDividerImage_9c09afd1',
        accountInfo: 'TableBodyRow_accountInfo_5ecfc9f2',
        vehicleText: 'TableBodyRow_vehicleText_ddbf2e39',
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
    sf = S();
function nf(e, a, t) {
    const s = e.getValue('account'),
        n = e.getValue('squadIndex');
    return Cl({
        personal: a.account.username === s.username,
        platoonType: Il(t, a.squadIndex, n),
        anonymizer: s.anonymizer,
    })
        ? s.fakeUsername
        : s.username;
}
function rf(e, a) {
    return e.getValue('damageDealt').damageDealt - a.getValue('damageDealt').damageDealt;
}
const of = { [da.heavyTank]: 5, [da.mediumTank]: 4, [da['AT-SPG']]: 3, [da.lightTank]: 2, [da.SPG]: 1 };
function lf({ team: t, personalInfo: s, breakpointName: n }) {
    const i = (e, a) =>
            (function (e, a, t, s) {
                const n = nf(e, t, s),
                    i = nf(a, t, s);
                return n.localeCompare(i);
            })(e, a, s, t),
        r = 'small' === n ? Qe.extraSmall : n;
    return [
        sf.accessor('squadIndex', {
            id: sp,
            header: (a) => e.jsx($p, { name: sp, column: a.column }),
            sortingFn: (e, a) => {
                const t = a.getValue('squadIndex') - e.getValue('squadIndex');
                return 0 !== t ? t : i(e, a);
            },
            cell: (a) => e.jsx(Wp, { team: t, platoon: a.cell.getValue() }),
            meta: { column: Hp[sp][r] },
        }),
        sf.accessor('account', {
            id: np,
            header: (a) => e.jsx($p, { team: t, name: np, column: a.column }),
            sortDescFirst: !1,
            sortingFn: i,
            cell: (a) =>
                e.jsx(hp, {
                    account: a.cell.getValue(),
                    team: t,
                    platoon: a.row.original.squadIndex,
                    className: tf.accountInfo,
                    classNames: { username: tf.accountName, clanAbbreviation: tf.clanAbbreviation },
                }),
            meta: { column: Hp[np][r], className: af.alignLeft },
        }),
        sf.accessor('vehicle', {
            id: ip,
            header: (a) => e.jsx($p, { name: ip, column: a.column }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    const t = e.getValue('vehicle'),
                        s = a.getValue('vehicle'),
                        n = t?.tier ?? 0,
                        i = s?.tier ?? 0,
                        r = t?.type ? of[t.type] : 0,
                        o = s?.type ? of[s.type] : 0,
                        l = t?.name ?? '';
                    return n - i || r - o || (s?.name ?? '').localeCompare(l);
                })(e, a) || i(e, a),
            cell: (a) =>
                e.jsx(ef, {
                    vehicle: a.cell.getValue(),
                    classNames: {
                        name: tf.vehicleText,
                        level: tf.vehicleText,
                        type: tf.vehicleType,
                        image: tf.vehicleImage,
                    },
                }),
            meta: { column: Hp[ip][r] },
        }),
        sf.accessor('efficiencyValues', {
            id: op,
            header: (a) => e.jsx($p, { name: op, column: a.column }),
            sortingFn: (e, a) => rf(e, a) || i(e, a),
            cell: (t) =>
                e.jsx(Lp, {
                    value: t.getValue().damageDealt,
                    className: a(tf.numberValue, tf.numberValue__alignRight),
                }),
            meta: { column: Hp[op][r], className: af.alignRight },
        }),
        sf.accessor('efficiencyValues', {
            id: lp,
            header: (a) => e.jsx($p, { name: lp, column: a.column }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    return e.getValue('kills').substractedAlliesKills - a.getValue('kills').substractedAlliesKills;
                })(e, a) || i(e, a),
            cell: (a) =>
                e.jsx(Lp, { showZero: !1, value: a.getValue().substractedAlliesKills, className: tf.numberValue }),
            meta: { column: Hp[lp][r], className: af.alignRight },
        }),
        sf.accessor('efficiencyValues', {
            id: cp,
            header: (a) => e.jsx($p, { name: cp, column: a.column }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    return e.getValue('earnedXp').earnedXp - a.getValue('earnedXp').earnedXp;
                })(e, a) ||
                rf(e, a) ||
                (function (e, a) {
                    const t = e.getValue('vehicle'),
                        s = a.getValue('vehicle');
                    return (t?.vehicleCD ?? 0) - (s?.vehicleCD ?? 0);
                })(e, a) ||
                i(e, a),
            cell: (a) => e.jsx(Lp, { value: a.getValue().earnedXp, className: tf.numberValue }),
            meta: { column: Hp[cp][r], className: af.alignRight },
        }),
        sf.accessor('achievements', {
            id: rp,
            header: (a) => e.jsx($p, { name: rp, column: a.column, className: af.achievementCell }),
            sortingFn: (e, a) =>
                (function (e, a) {
                    return e.getValue('achievements').length - a.getValue('achievements').length;
                })(e, a) || i(e, a),
            cell: (a) => e.jsx(yp, { achievements: a.getValue() }),
            meta: { column: Hp[rp][r], className: af.alignLeft },
        }),
    ];
}
const cf = 'Header_row_e61ae0d9',
    df = 'Header_rowDivider_f54d9df6',
    mf = 'Header_rowDividerImage_19f6e11',
    uf = 'Header_cell_70aa1da5';
function _f({ className: a }) {
    const { table: t } = We(),
        s = F();
    return e.jsxs(Ke.Header, {
        className: a,
        children: [
            e.jsx(u_, { classNames: { base: df, image: mf } }),
            Q(t.getHeaderGroups(), (a, t) =>
                e.jsx(
                    Ke.Row,
                    {
                        className: cf,
                        children: Q(a.headers, (a, n) => {
                            return e.jsx(
                                Ke.Cell,
                                {
                                    onClick:
                                        ((i = a.column.getToggleSortingHandler()),
                                        function (e) {
                                            (i?.(e),
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
                                    cell: { ...a, rowIndex: t, index: n, tablePart: Xe.header },
                                    className: uf,
                                    children: !a.isPlaceholder && A(a.column.columnDef.header, a.getContext()),
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
const pf = 'SelectedRowTail_selectedRowTail_8abda9c8',
    ff = 'SelectedRowTail_selectedRowTail__hasWidth_6cb87e09',
    bf = 'SelectedRowTail_selectedRowVerticalLine_c502cc58',
    hf = 'SelectedRowTail_selectedRowTriangle_6f2b6bb3',
    vf = 'SelectedRowTail_rowDivider_8fbc881',
    gf = 'SelectedRowTail_rowDivider__bottom_4111cb99',
    yf = 'SelectedRowTail_rowDividerImage_d11f29d5';
function xf({ className: t, short: s }) {
    return e.jsxs('div', {
        className: a(pf, !s && ff, t),
        children: [
            e.jsx(u_, { classNames: { base: vf, image: yf } }),
            e.jsx(u_, { classNames: { base: a(vf, gf), image: yf } }),
            e.jsx('div', { className: bf }),
            e.jsx('div', { className: hf }),
        ],
    });
}
const Nf = 'personal',
    jf = 'personalSquad',
    wf = 'none',
    If = o(function ({ row: s, team: n, rowIndex: i, scrollbarVisible: r }) {
        const { model: o, controls: l } = Sl(),
            c = F(),
            d = Fe(
                (e) => {
                    (e.stopPropagation(),
                        c.play('click', { original: e, target: 'team-efficiency:efficiency-table:body:row' }),
                        l.teamEfficiency.selectRow({ team: n, username: s.original.account.username }));
                },
                [l.teamEfficiency, s.original.account.username, c, n],
                400,
            ),
            m = o.teamsStatistic.selectedRow.get(),
            u = o.computes.personalInfo(),
            _ = (() => {
                if (u.account.username === s.original.account.username) return Nf;
                return Il(n, u.squadIndex, s.original.squadIndex) === jl ? jf : wf;
            })(),
            p = s.original.account.teamKiller,
            f = s.original.account.killed,
            b = m?.team === n && m.username === s.original.account.username,
            h = Le({
                args: t.useMemo(
                    () => ({ vehicleCD: s.original.vehicle?.vehicleCD, databaseID: s.original.databaseId }),
                    [s.original],
                ),
            });
        return e.jsxs(Ke.Row, {
            ...(_ !== Nf && h),
            onMouseEnter: (e) =>
                c.play('mouse-enter', { target: 'team-efficiency:efficiency-table:body:row', original: e }),
            className: a(
                tf.tableBodyRow,
                b && tf.tableBodyRow__selected,
                _ !== wf && tf[`tableBodyRow__${_}`],
                p && tf.tableBodyRow__teamKiller,
                f && tf.tableBodyRow__killed,
            ),
            onClick: d,
            children: [
                e.jsxs('div', {
                    className: tf.selectedOverlay,
                    children: [
                        e.jsx(u_, { classNames: { base: tf.selectedOverlayDivider, image: tf.selectedOverlayImage } }),
                        e.jsx(u_, {
                            classNames: {
                                base: a(tf.selectedOverlayDivider, tf.selectedOverlayDivider__bottom),
                                image: tf.selectedOverlayImage,
                            },
                        }),
                        e.jsx(xf, {
                            short: r && n === yl,
                            className: a(tf.selectedRowTail, tf[`selectedRowTail__${n}`]),
                        }),
                    ],
                }),
                e.jsx(u_, {
                    classNames: { base: a(tf.rowDivider, b && tf.rowDivider__selected), image: tf.rowDividerImage },
                }),
                Q(s.getVisibleCells(), (a, t) =>
                    e.jsx(
                        Ke.Cell,
                        {
                            cell: { ...a, rowIndex: i, index: t, tablePart: Xe.body },
                            children: A(a.column.columnDef.cell, a.getContext()),
                        },
                        a.id,
                    ),
                ),
                e.jsx('div', { className: tf.hoverOverlay }),
            ],
        });
    });
function Cf({ team: a }) {
    const { table: s } = We(),
        { api: i } = Z(),
        r = qe(),
        o = t.useRef(null),
        [l, c] = t.useState(!1),
        [d, m] = j(() => ({ from: { maskSize: '100% 100%' } }));
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
                            m.start({ to: { maskSize: `100% ${e > 0 ? 100 + a : 107}%` } });
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
        }, [i, r, m]),
        e.jsxs(Ke.Body, {
            className: af.tableBody,
            children: [
                e.jsx(n.div, {
                    className: af.mask,
                    style: d,
                    children: e.jsx(J, {
                        classNames: { wrapper: af.scrollWrapper, content: af.scrollAreaContent },
                        children: e.jsx('div', {
                            ref: o,
                            className: af.rowsWrapper,
                            children: Q(s.getRowModel().rows, (t, s) =>
                                e.jsx(If, { row: t, rowIndex: s, team: a, scrollbarVisible: l }, t.id),
                            ),
                        }),
                    }),
                }),
                e.jsx(Y, { classNames: { base: af.scrollBar } }),
            ],
        })
    );
}
const Af = K('TeamEfficiencyTable', af.efficiencyTable, {
        variants: { team: { [yl]: af.efficiencyTable__allies, [xl]: af.efficiencyTable__enemies } },
    }),
    Sf = {
        [Ro.Squad]: sp,
        [Ro.Player]: np,
        [Ro.Damage]: op,
        [Ro.Frag]: lp,
        [Ro.Xp]: cp,
        [Ro.Vehicle]: ip,
        [Ro.Medal]: rp,
    },
    Pf = o(({ team: a, data: s, className: n }) => {
        const { model: i, controls: r } = Sl(),
            o = i.computes.personalInfo(),
            l = i.teamsStatistic.sorting.get(),
            c = t.useMemo(() => [{ id: Sf[l.column], desc: l.sortDirection === Eo.Desc }], [l.column, l.sortDirection]),
            d = Pe().breakpoint.name,
            m = t.useCallback(
                (e) => {
                    const a = (e instanceof Function ? e(c) : e)[0] ?? { id: ip, desc: !0 };
                    r.teamEfficiency.sort({
                        column: Object.keys(Sf).find((e) => Sf[e] === a.id) || Ro.Vehicle,
                        sortDirection: a.desc ? Eo.Desc : Eo.Asc,
                    });
                },
                [c, r.teamEfficiency],
            ),
            u = t.useMemo(() => lf({ team: a, personalInfo: o, breakpointName: d }), [a, d, o]);
        return (
            te(ma(d), `Such breakpoint ${d} is not supported`),
            e.jsx(Ze, {
                columns: u,
                data: s,
                enableMultiRowSelection: !1,
                enableSortingRemoval: !1,
                sorting: c,
                onSortingChange: m,
                getRowId: (e) => e.account.username,
                getFilteredRowModel: P(),
                globalFilterFn: (e) => 65281 !== e.original.vehicle?.vehicleCD,
                enableSorting: !0,
                initialState: { globalFilter: !0 },
                children: e.jsx(Af, {
                    team: a,
                    className: n,
                    children: e.jsxs(
                        Ke,
                        {
                            className: af.table,
                            children: [
                                e.jsx(_f, { className: af.header }),
                                e.jsx(U, { children: e.jsx(Cf, { team: a }) }),
                            ],
                        },
                        d,
                    ),
                }),
            })
        );
    }),
    Bf = {
        base: 'TeamEfficiency_51caa749',
        wrapper: 'TeamEfficiency_wrapper_a2a49ce',
        table: 'TeamEfficiency_table_5763cf17',
        table__hidden: 'TeamEfficiency_table__hidden_e8864815',
        details: 'TeamEfficiency_details_f087bb8e',
        details__visible: 'TeamEfficiency_details__visible_eaf91b76',
    },
    Rf = K('TeamEfficiency', Bf.base),
    Ef = o(function ({ className: t }) {
        const { model: s } = Sl(),
            n = s.teamsStatistic.allies.get(),
            i = s.teamsStatistic.enemies.get(),
            r = s.teamsStatistic.selectedRow.get();
        return e.jsx(Rf, {
            className: a(Bf[`base__${r?.team}`], t),
            children: e.jsxs('div', {
                className: Bf.wrapper,
                children: [
                    e.jsx(tp, { team: xl, className: a(Bf.details, r?.team === xl && Bf.details__visible) }),
                    e.jsx(Pf, { data: n, team: yl, className: a(Bf.table, r?.team === xl && Bf.table__hidden) }),
                    e.jsx(tp, { team: yl, className: a(Bf.details, r?.team === yl && Bf.details__visible) }),
                    e.jsx(Pf, { data: i, team: xl, className: a(Bf.table, r?.team === yl && Bf.table__hidden) }),
                ],
            }),
        });
    }),
    kf = {
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
    Tf = K('PostBattle', kf.base),
    Df = K('PostBattleNavigation', kf.navigation);
function Vf() {
    const { active: t } = W();
    return e.jsxs('div', {
        className: a(kf.content, kf[`content__${t}`]),
        children: [
            e.jsx(d_, { className: a(kf.tab, kf.tab__overview) }),
            e.jsx(Ef, { className: a(kf.tab, kf.tab__teamScore) }),
            e.jsx(Ml, { className: a(kf.tab, kf.tab__missionProgress) }),
            e.jsx(Qr, { className: a(kf.tab, kf.tab__financialReport) }),
        ],
    });
}
const zf = o(function () {
        const s = E.resolve('strings'),
            i = F(),
            r = ua(),
            { battleInfoRef: o, navigationRef: l, completedSteps: c, step: d, readyForNotifications: m } = gt(),
            u = at(),
            [_] = j(() => ({ from: { opacity: 0, y: '-10rem' }, ref: l })),
            [p] = j(() => ({ from: { opacity: 0 }, ref: o })),
            { model: f, controls: b } = Sl(),
            h = f.computes.personalInfo(),
            v = f.battleInfo.get(),
            { active: g } = W();
        return (
            Ue(Ge.ESCAPE, b.close),
            Ae(() => {
                function e(e) {
                    e.altKey || e.shiftKey || e.ctrlKey || _a.tooltip.hideAll();
                }
                return (
                    document.addEventListener('keydown', e),
                    () => {
                        document.removeEventListener('keydown', e);
                    }
                );
            }),
            t.useEffect(() => {
                g !== Ca.progression && m && !1 === u.state.read
                    ? u.controls.start()
                    : g !== Ca.progression
                      ? u.state.read && g !== Ca.progression && u.controls.wait()
                      : u.controls.read();
            }, [u.state.read, u.controls, g, m]),
            t.useEffect(() => {
                d === ft.fourth && i.play('exitResult', { target: 'post-battle' });
            }, [d, i]),
            e.jsxs(Tf, {
                className: a(kf.base, kf[`base__${g}`]),
                style: { width: `${r}rem` },
                children: [
                    g !== Ca.overview && e.jsx('div', { className: kf.vignette }),
                    e.jsx(Vf, {}),
                    e.jsx(n.div, {
                        style: _,
                        children: e.jsx(Df, {
                            className: !1 === c.has(ft.second) && kf.navigation__disabled,
                            children: e.jsxs(pa.Switcher, {
                                className: kf.switcher,
                                classNames: { mainBorder: kf.mainBorderSwitcher },
                                children: [
                                    e.jsx(pa.Tab, {
                                        tabId: Ca.overview,
                                        children: V.toUpperCase(
                                            s.readOrEmpty('battle_results.battleResult.navigation.battleResults'),
                                        ),
                                    }),
                                    e.jsx(pa.Tab, {
                                        tabId: Ca.teamsStatistics,
                                        children: V.toUpperCase(
                                            s.readOrEmpty('battle_results.battleResult.navigation.teamEfficiency'),
                                        ),
                                    }),
                                    e.jsxs(pa.Tab, {
                                        tabId: Ca.progression,
                                        children: [
                                            V.toUpperCase(
                                                s.readOrEmpty(
                                                    'battle_results.battleResult.navigation.missionsProgress',
                                                ),
                                            ),
                                            e.jsx(pt.Bubble, { className: kf.notificationBubble }),
                                            e.jsx(pt.Items, { className: kf.progressionNotificationItems }),
                                        ],
                                    }),
                                    e.jsx(pa.Tab, {
                                        tabId: Ca.financialReport,
                                        children: V.toUpperCase(
                                            s.readOrEmpty('battle_results.battleResult.navigation.financialReport'),
                                        ),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    v &&
                        e.jsx(n.div, {
                            className: kf.info,
                            style: p,
                            children: e.jsxs(La, {
                                children: [
                                    e.jsx(La.Arena, {
                                        arenaName: v.arenaName,
                                        arenaType: v.arenaType,
                                        finishReasonKey: v.finishReasonKey,
                                        status: v.status,
                                        modeName: v.modeName,
                                    }),
                                    e.jsx(La.StartTime, { startTime: v.startTime }),
                                    e.jsx(La.Player, {
                                        vehicleName: h.vehicle.name,
                                        vehicleLevel: h.vehicle.tier,
                                        vehicleType: h.vehicle.type,
                                        userName: h.account.username,
                                        clan: h.account.clanAbbreviation,
                                        teamKiller: h.account.teamKiller,
                                    }),
                                    e.jsx(La.PlayerStatus, {
                                        className: kf.group,
                                        killer: h.killer,
                                        deathReasonKey: h.userStatus.deathReason,
                                        abandonBattle: h.userStatus.abandonBattle,
                                    }),
                                    e.jsx(La.CommendationScore, { commendationsReceived: v.commendationsReceived }),
                                ],
                            }),
                        }),
                ],
            })
        );
    }),
    Hf = o(function () {
        const a = fa(),
            { model: t } = Sl(),
            { size: s } = le({ size: ba.small }, { large: { size: ba.medium }, extraLarge: { size: ba.large } });
        return e.jsx(pa, {
            theme: 'primary',
            size: s,
            active: Pa(a.location),
            onActiveChange: (e) => {
                e in Ba ? a.push(Ba[e]) : console.error(`Invalid tab ID: ${e}`);
            },
            children: e.jsx(yt, {
                children: e.jsx(pt.Provider, { items: t.notificationList.get(), children: e.jsx(zf, {}) }),
            }),
        });
    }),
    Of = ha({
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
    Mf = new va().add(Al).addWithProps(ga, { soundsOverrides: Of }).addWithProps(ya, { context: 'model.router' });
(xa(),
    Na(Mf.render(e.jsx(Hf, {})))
        .then(() => ja(document.getElementById('root')))
        .then(() => wa()));
