import {
    j as e,
    e as a,
    r as t,
    x as s,
    K as n,
    w as r,
    y as i,
    p as l,
    _ as o,
    o as c,
    f as d,
    z as m,
    m as u,
    l as p,
    A as _,
    B as f,
    C as b,
} from '../../../chunks/vendor.js';
import {
    F as v,
    r as h,
    b as g,
    e as y,
    D as x,
    f as N,
    g as j,
    h as w,
    j as I,
    I as A,
    d as S,
    B as C,
    k as B,
    l as P,
    A as k,
    m as E,
    n as T,
    o as D,
    p as V,
    i as z,
    c as H,
    q as O,
    C as W,
    t as G,
    v as M,
    w as F,
    x as $,
    y as X,
    z as L,
    E as K,
    G as q,
    H as Y,
    s as U,
    K as Z,
    L as J,
    N as Q,
    O as ee,
    P as ae,
    Q as te,
    R as se,
    S as ne,
    T as re,
    U as ie,
    W as le,
    X as oe,
    Y as ce,
    Z as de,
    _ as me,
    $ as ue,
    a0 as pe,
    a1 as _e,
    a2 as fe,
    a3 as be,
    a4 as ve,
    a5 as he,
    a6 as ge,
    a7 as ye,
    a8 as xe,
    a9 as Ne,
    aa as je,
    ab as we,
    ac as Ie,
    ad as Ae,
    ae as Se,
    af as Re,
    ag as Ce,
    ah as Be,
    ai as Pe,
    aj as ke,
    ak as Ee,
    al as Te,
    am as De,
    an as Ve,
    ao as ze,
    ap as He,
    aq as Oe,
    ar as We,
    as as Ge,
    at as Me,
    au as Fe,
    av as $e,
    u as Xe,
    aw as Le,
    ax as Ke,
    J as qe,
    ay as Ye,
    M as Ue,
    a as Ze,
    az as Je,
    aA as Qe,
} from '../../../chunks/lib.js';
import { s as ea, a as aa, W as ta, f as sa, r as na } from '../../../chunks/flag_view_model.js';
/* empty css                    */ const ra = 'BattleInfo_d5226211',
    ia = 'BattleInfo_group_962f81f6',
    la = 'BattleInfo_commendations_731c9f38',
    oa = 'BattleInfo_commendations_counter_aef426',
    ca = 'BattleInfo_commendations_icon_55a703a8',
    da = [1, 19],
    ma = [1, 10],
    ua = ({ className: t, finishReasonKey: s, status: n, modeName: r, arenaType: i, ...l }) => {
        const o = `battle_results.finish.reason.c_${s}${ma.includes(s) ? n : ''}`,
            c = da.includes(i) ? `arenas.type.${r}.name` : `menu.loading.battleTypes.c_${i}`;
        return e.jsx(v, {
            ...l,
            upgradeLegacy: !0,
            path: 'battle_results.common.arena.fullName',
            params: { 0: e.jsx(v, { path: c }), 1: e.jsx(v, { path: o }) },
            className: a(ia, t),
        });
    };
const pa = -1;
const _a = h.resolve('strings');
const fa = t.forwardRef(function (t, s) {
    return e.jsx('div', { ...t, 'data-name': 'BattleInfo', ref: s, className: a(ra, t.className) });
});
((fa.Arena = function ({ arenaName: t, className: s, ...n }) {
    return e.jsx(v, {
        className: a(ia, s),
        path: 'battle_results.common.arena.nameAndMode',
        params: { 0: t, 1: e.jsx(ua, { ...n }) },
    });
}),
    (fa.StartTime = ({ startTime: t, className: s, ...n }) =>
        e.jsx(v, {
            ...n,
            className: a(ia, s),
            path: 'battle_results.common.startTime',
            params: { 0: y.formatDateTime(x.ShortDate, t), 1: y.formatDateTime(x.ShortTime, t) },
        })),
    (fa.Player = function ({ className: t, vehicleName: s, userName: n, clan: r, ...i }) {
        return e.jsx(v, {
            ...i,
            upgradeLegacy: !0,
            className: a(ia, t),
            path: 'battle_results.common.arena.fullName',
            params: {
                0: r
                    ? e.jsx(v, { path: 'battle_results.common.player.nameWithClan', params: { name: n, clan: r } })
                    : n,
                1: s,
            },
        });
    }),
    (fa.PlayerStatus = function ({ className: t, deathReasonKey: s, killer: n, abandonBattle: r, ...i }) {
        const l = (function ({ deathReasonKey: e, abandonBattle: a }) {
            return a ? 'prematureLeave' : e === pa ? 'alive' : `dead${e}`;
        })({ deathReasonKey: s, abandonBattle: r });
        if (
            (n.username || n.fakeUsername) &&
            !r &&
            s !== pa &&
            (function (e) {
                return Boolean(_a.read(`battle_results.common.vehicleState.${e}_with_killername`));
            })(l)
        ) {
            const s = n.anonymizer ? n.fakeUsername : n.username;
            return e.jsx(v, {
                ...i,
                className: a(ia, t),
                path: `battle_results.common.vehicleState.${l}_with_killername`,
                params: {
                    killername: n.clanAbbreviation
                        ? e.jsx(v, {
                              path: 'battle_results.common.player.nameWithClan',
                              params: { name: s, clan: n.clanAbbreviation },
                          })
                        : s,
                },
            });
        }
        return e.jsx(v, { ...i, className: a(ia, t), path: `battle_results.common.vehicleState.${l}` });
    }),
    (fa.CommendationScore = function ({ commendationsReceived: t }) {
        const s = t > 0,
            n = h.resolve('strings'),
            r =
                1 === t
                    ? 'battle_results.comms.likes.pbs.tooltip.bodySingle'
                    : 'battle_results.comms.likes.pbs.tooltip.body',
            i = g({
                header: n.readOrEmpty('battle_results.comms.likes.pbs.tooltip.header'),
                body: n.readOrEmpty(r).replace('{{var}}', t.toString()),
            });
        return s
            ? e.jsxs('div', {
                  ...i,
                  className: a(ia, la),
                  children: [e.jsx('div', { className: oa, children: t }), e.jsx('div', { className: ca })],
              })
            : null;
    }));
const ba = { initial: 'initial', first: 'first', second: 'second', third: 'third', fourth: 'fourth', fifth: 'fifth' },
    va = w.cubicBezier(0.33, 0, 0.25, 1),
    ha = 400,
    ga = t.createContext(null);
function ya() {
    const e = t.useContext(ga);
    if (null === e)
        throw new Error('You can use the animation context hooks only with the AnimationProvider component');
    return e;
}
function xa({ children: a }) {
    const [n, r] = t.useState(ba.initial),
        [i, l] = t.useState(new Set()),
        o = N(),
        c = j(),
        d = s(),
        m = s(),
        u = s(),
        p = s(),
        _ = s(),
        f = s(),
        b = s(),
        v = s(),
        h = s(),
        g = t.useCallback(
            function (e) {
                r(e);
            },
            [r],
        );
    t.useEffect(() => {
        switch (n) {
            case ba.initial:
                return void r(ba.first);
            case ba.first:
                return (
                    c.play('showBattleResult', { target: 'animation-context' }),
                    d.start({ y: '0', opacity: 1, config: { duration: ha, easing: va } }),
                    void m.start({
                        opacity: 1,
                        y: '0',
                        config: { duration: ha, easing: va },
                        onRest: () => {
                            (r(ba.second), l((e) => I(e, ba.first)));
                        },
                    })
                );
            case ba.second:
                return (
                    u.start({
                        maskSize: '100% 100%',
                        config: { duration: ha, easing: va },
                        onRest: () => {
                            l((e) => I(e, ba.second));
                        },
                    }),
                    void o.run(() => {
                        (r(ba.third), o.clear());
                    }, 280)
                );
            case ba.third:
                return (
                    p.start({ opacity: 1, y: '0', config: { duration: ha, easing: va } }),
                    _.start({ opacity: 1, y: '0', config: { duration: ha, easing: va } }),
                    f.start({
                        opacity: 1,
                        config: { duration: ha, easing: va },
                        onRest: () => {
                            l((e) => I(e, ba.third));
                        },
                    }),
                    void o.run(() => {
                        (r(ba.fourth), o.clear());
                    }, 280)
                );
            case ba.fourth:
                return (
                    v.start({
                        maskSize: '100% 100%',
                        config: { duration: ha, easing: va },
                        onRest: () => {
                            l((e) => I(e, ba.fourth));
                        },
                    }),
                    void o.run(() => {
                        (r(ba.fifth), o.clear());
                    }, 120)
                );
            case ba.fifth:
                (h.start({ opacity: 1, config: { duration: ha, easing: va } }),
                    b.start({
                        opacity: 1,
                        config: { duration: ha, easing: va },
                        onRest: () => {
                            l((e) => I(e, ba.fifth));
                        },
                    }));
                break;
            default:
                return;
        }
    }, [n, c, o, _, f, u, b, g, i, d, m, v, p, h]);
    const y = t.useMemo(
        () => ({
            step: n,
            handleStep: g,
            bonusRef: _,
            hintKeyRef: f,
            dividerRef: u,
            battleInfoRef: b,
            navigationRef: d,
            battleStatusRef: m,
            overlayDividerRef: v,
            earnedCurrenciesRef: p,
            personalEfficiencyRef: h,
            completedSteps: i,
        }),
        [n, g, i],
    );
    return e.jsx(ga.Provider, { value: y, children: a });
}
const Na = { base: 'Divider_80a19f4b' };
function ja({ classNames: t }) {
    return e.jsx('div', {
        className: a(Na.base, null == t ? void 0 : t.base),
        children: e.jsx(A, {
            className: null == t ? void 0 : t.image,
            width: '100%',
            height: '100%',
            path: 'post_battle.row_divider',
            fit: 'cover',
        }),
    });
}
const wa = 'Header_content_b9e0be90',
    Ia = 'Header_title_91e5448a',
    Aa = 'Header_divider_eb019c6',
    Sa = 'Header_dividerImage_19f6e11',
    Ra = S('Header', 'Header_70aa1da5'),
    Ca = t.forwardRef(({ title: t, children: s, classNames: n, ...r }, i) => {
        const l = h.resolve('strings');
        return e.jsxs(Ra, {
            ...r,
            ref: i,
            children: [
                e.jsxs('div', {
                    className: a(wa, null == n ? void 0 : n.content),
                    children: [
                        e.jsx('div', {
                            className: a(Ia, null == n ? void 0 : n.title),
                            children: y.toUpperCase(l.readOrEmpty(t)),
                        }),
                        s,
                    ],
                }),
                e.jsx(ja, { classNames: { base: a(Aa, null == n ? void 0 : n.divider), image: Sa } }),
            ],
        });
    }),
    Ba = t.forwardRef((a, t) => e.jsx(Ca, { ...a, title: 'battle_results.details.xp', ref: t })),
    Pa = (e) => {
        const [a, s] = t.useState(!1);
        return (
            t.useEffect(() => {
                const a = () => {
                        const [a, t] = e.getBounds(),
                            n = e.animationScroll.scrollPosition.get(),
                            r = e.contentRef.current;
                        if (r) {
                            if (0 === t) return ((r.style.mask = 'none'), void s(!0));
                            const e = (n / t) * 10;
                            ((r.style.mask = `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) ${e}%, rgba(0, 0, 0, 1) ${90 + e}%, transparent 100%)`),
                                s(!0));
                        }
                    },
                    t = e.events.on('change', a),
                    n = e.events.on('resizeHandled', a),
                    r = e.events.on('recalculateContent', a);
                return (
                    a(),
                    () => {
                        (t(), n(), r());
                    }
                );
            }, [e]),
            a
        );
    },
    ka = 'IncomeStatement_c4136bc5',
    Ea = 'IncomeStatement_verticalBar_5fb90511',
    Ta = 'IncomeStatement_scrollWrapper_ce2dde41',
    Da = 'IncomeStatement_scrollContent_72ffb2ee',
    Va = 'IncomeStatement_scrollContent__initialized_ce1144d0',
    za = S('CreditsIncomeStatement'),
    Ha = ({ children: t }) => {
        const s = P(),
            n = Pa(s.api);
        return e.jsx(k, { classNames: { wrapper: Ta, content: a(Da, n && Va) }, children: t });
    },
    Oa = t.forwardRef(({ children: t, className: s, scrollable: n, ...r }, i) =>
        e.jsx(za, {
            className: a(ka, s),
            ...r,
            ref: i,
            children: n
                ? e.jsxs(C, { children: [e.jsx(Ha, { children: t }), e.jsx(B, { classNames: { base: Ea } })] })
                : t,
        }),
    ),
    Wa = 'xp',
    Ga = 'freeXP',
    Ma = 'credits',
    Fa = 'gold',
    $a = 'originalCrystals',
    Xa = 'eventCrystals',
    La = 'autoEquipCrystals',
    Ka = 'totalCrystals',
    qa = 'originalXP',
    Ya = 'achievementXP',
    Ua = 'originalXPPenalty',
    Za = 'igrBonusXP',
    Ja = 'firstWinXP',
    Qa = 'additionalBonusXP',
    et = 'boostersXP',
    at = 'tacticalTrainingXP',
    tt = 'eventXP',
    st = 'referralBonusXP',
    nt = 'premiumVehicleXP',
    rt = 'squadBonusXP',
    it = 'squadPenaltyXP',
    lt = 'wotPlusBonusXP',
    ot = 'totalXP',
    ct = 'originalFreeXP',
    dt = 'achievementFreeXP',
    mt = 'igrBonusFreeXP',
    ut = 'firstWinFreeXP',
    pt = 'additionalBonusFreeXP',
    _t = 'boostersFreeXP',
    ft = 'militaryManeuversFreeXP',
    bt = 'eventFreeXP',
    vt = 'premiumVehicleFreeXP',
    ht = 'wotPlusBonusFreeXP',
    gt = 'totalFreeXP',
    yt = 'baseEarnedCredits',
    xt = 'squadBonusCredits',
    Nt = 'achievementCredits',
    jt = 'boostersCredits',
    wt = 'petSystemBonusCredits',
    It = 'battlePaymentsCredits',
    At = 'eventPaymentsCredits',
    St = 'referralBonusCredits',
    Rt = 'wotPlusBonusCredits',
    Ct = 'friendlyFirePenaltyCredits',
    Bt = 'friendlyFireCompensationCredits',
    Pt = 'piggyBankCredits',
    kt = 'autoRepairCredits',
    Et = 'autoLoadCredits',
    Tt = 'autoEquipCredits',
    Dt = 'intermediateTotalCredits',
    Vt = 'totalCredits',
    zt = 'goldEventPayments',
    Ht = 'goldPiggyBank',
    Ot = 'intermediateTotalGold',
    Wt = 'totalGold',
    Gt = 'aogasFactor',
    Mt = 'deserterViolation',
    Ft = 'afkViolation',
    $t = 'suicideViolation',
    Xt = new Set([Ua, st, rt, it, at]),
    Lt = new Set([ft]),
    Kt = new Set([yt, xt, Nt, jt, It, St, wt, Rt, Mt, $t, Ft, Ct, Bt, Gt, kt, Et, Tt]),
    qt = {
        [Ya]: dt,
        [Qa]: pt,
        [Ft]: Ft,
        [Gt]: Gt,
        [et]: _t,
        [Mt]: Mt,
        [tt]: bt,
        [Ja]: ut,
        [Za]: mt,
        [qa]: ct,
        [nt]: vt,
        [$t]: $t,
        [ot]: gt,
        [lt]: ht,
    },
    Yt = { [At]: zt, [Dt]: Ot, [Pt]: Ht, [Vt]: Wt },
    Ut = [$a, Xa, La, Ka],
    Zt = [
        qa,
        ct,
        Ya,
        dt,
        Ua,
        Za,
        mt,
        Ja,
        ut,
        Qa,
        pt,
        et,
        _t,
        at,
        ft,
        tt,
        bt,
        st,
        nt,
        vt,
        rt,
        it,
        Gt,
        lt,
        ht,
        Mt,
        $t,
        Ft,
        ot,
        gt,
    ],
    Jt = [yt, xt, Nt, jt, wt, It, At, zt, St, Rt, Mt, $t, Ft, Ct, Bt, Gt, Dt, Ot, kt, Et, Tt, Vt, Wt, Pt, Ht],
    Qt = new Set([Ka, qa, ct, ot, gt, yt, Bt, Dt, Ot, kt, Et, Tt, Vt, Wt, Pt, Ht]),
    es = new Set([Vt, Wt, Ot, Dt]),
    as = 'multiplier',
    ts = 'firstWinMultiplier',
    ss = 'fractionalMultiplier',
    ns = 'percent',
    rs = 'plus',
    is = {
        [Za]: as,
        [mt]: as,
        [Ja]: ts,
        [ut]: ts,
        [Qa]: as,
        [pt]: as,
        [Gt]: ss,
        [Mt]: ns,
        [$t]: ns,
        [Ft]: ns,
        [Pt]: rs,
        [Ht]: rs,
    };
function ls(e) {
    const a = Number(e.trim());
    return Number.isNaN(a)
        ? (console.error(`Invalid referral factor: "${e}" is not a number.`), 0)
        : Math.round(100 * a);
}
function os(e) {
    const a = Number(e.trim());
    return Number.isNaN(a) ? (console.error(`Invalid percent bonus: "${a}" is not a number.`), 0) : a;
}
function cs(e) {
    return Qt.has(e.paramName);
}
function ds(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.hasAogasFine);
}
function ms(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.isEnabled);
}
const us = { [qa]: cs, [ct]: cs, [ot]: cs, [gt]: cs, [Gt]: ds, [lt]: ms, [ht]: ms },
    ps = {
        [yt]: cs,
        [Bt]: cs,
        [Dt]: cs,
        [Ot]: cs,
        [kt]: cs,
        [Et]: cs,
        [Tt]: cs,
        [Vt]: cs,
        [Wt]: cs,
        [Gt]: ds,
        [Rt]: ms,
        [Pt]: cs,
    };
function _s(e) {
    return !1 !== es.has(e.paramName) && 0 === e.standard.gold && 0 === e.premium.gold;
}
const fs = { [Dt]: (e) => !1 === _s(e), [Vt]: (e) => !1 === _s(e), [Pt]: (e, a) => a },
    bs = { [Wa]: 'library.xp', [Ga]: 'library.freeXp', [Ma]: 'library.credits', [Fa]: 'library.gold' },
    vs = [Gt, Mt, Ft, $t];
function hs(e) {
    return e === Wa ? 'library.x2_combatExp' : 'library.x2_combatFreeExp';
}
const gs = {
    [Za]: (e) => 'library.x2_combatExp',
    [mt]: (e) => 'library.x2_combatExp',
    [Ja]: hs,
    [ut]: hs,
    [Qa]: hs,
    [pt]: hs,
};
function ys(e, a) {
    if (void 0 === a || vs.includes(a)) return;
    const t = gs[a];
    return t ? t(e) : bs[e];
}
function xs(e, a) {
    return Ut.indexOf(e.paramName) - Ut.indexOf(a.paramName);
}
function Ns(e, a) {
    return Zt.indexOf(e.paramName) - Zt.indexOf(a.paramName);
}
function js(e, a) {
    return Jt.indexOf(e.paramName) - Jt.indexOf(a.paramName);
}
function ws(e) {
    return {
        paramName: e.paramName,
        currencyType: e.currencyType,
        baseValue: e.baseValue,
        premiumValue: e.premiumValue,
        recordsItemsDetails: T(e.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
}
function Is(e, a) {
    const t = [],
        s = [];
    for (const n of e) a(n) ? t.push(n) : s.push(n);
    return [t, s];
}
function As(e, a) {
    const t = E(e.earned, ws),
        s = E(e.expenses, ws),
        n = E(e.total, ws),
        r = [Dt, Ot],
        i = [Pt, Ht],
        [l, o] = Is(n, (e) => r.includes(e.paramName)),
        [c, d] = Is([...t, ...l], (e) => i.includes(e.paramName));
    return {
        records: [...d, ...s].sort(a),
        total: ((m = [...o, ...c]),
        m.filter((e) => {
            const a = Boolean(e.premiumValue || e.baseValue),
                t = Qt.has(e.paramName);
            return a || t;
        })).sort(a),
    };
    var m;
}
const Ss = (e) => e in is;
function Rs({ xp: e, freeXp: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    V('string' == typeof t, 'xp or freeXp paramName is not provided');
    const s = Ss(t) ? is[t] : void 0,
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
function Cs({ credits: e, gold: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    V('string' == typeof t, 'credits or gold paramName is not provided');
    const s = Ss(t) ? is[t] : void 0,
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
const Bs = (e) => e in qt;
function Ps(e, a) {
    const t = e.paramName;
    return (V(Bs(t), `No analogue for ${t} in free xp parameter names`), a.find((e) => qt[t] === e.paramName));
}
const ks = (e) => e in Yt;
function Es(e, a) {
    const t = e.paramName;
    return (V(ks(t), `No analogue for ${t} in gold parameter names`), a.find((e) => Yt[t] === e.paramName));
}
function Ts(e, a) {
    const t = (function (e, a) {
        return [
            ...D(
                a,
                (e) => Lt.has(e.paramName),
                (e) => Rs({ freeXp: e }),
            ),
            ...E(e, (e) => (Xt.has(e.paramName) ? Rs({ xp: e }) : Rs({ xp: e, freeXp: Ps(e, a) }))),
        ];
    })(e, a);
    return t
        .filter((e) => {
            const a = us[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.freeXp || e.premium.xp || e.standard.freeXp || e.standard.xp);
        })
        .sort(Ns);
}
function Ds(e, a) {
    const t = (function (e, a) {
        return E(e, (e) => (Kt.has(e.paramName) ? Cs({ credits: e }) : Cs({ credits: e, gold: Es(e, a) })));
    })(e, a);
    return t
        .filter((e) => {
            const a = ps[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.credits || e.premium.gold || e.standard.credits || e.standard.gold);
        })
        .sort(js);
}
function Vs(e) {
    return ((a = e),
    a.filter((e) => {
        const a = Boolean(e.baseValue || e.premiumValue),
            t = Qt.has(e.paramName);
        return a || t;
    })).sort(xs);
    var a;
}
function zs({ xp: e, freeXp: a }) {
    return (function (e, a) {
        return { records: Ts(e.records, a.records), total: Ts(e.total, a.total) };
    })(
        As({ earned: e.earned, expenses: e.expenses, total: e.total }),
        As({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
function Hs({ credits: e, gold: a }) {
    return (function (e, a) {
        return { records: Ds(e.records, a.records), total: Ds(e.total, a.total) };
    })(
        As({ earned: e.earned, expenses: e.expenses, total: e.total }),
        As({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
const [Os, Ws] = z()(({ observableModel: e }) => {
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
            t = H.model(() =>
                zs({
                    xp: { earned: a.xp.earned.get(), expenses: a.xp.expenses.get(), total: a.xp.total.get() },
                    freeXp: {
                        earned: a.xp.free.earned.get(),
                        expenses: a.xp.free.expenses.get(),
                        total: a.xp.free.total.get(),
                    },
                }),
            ),
            s = H.model(() =>
                Hs({
                    credits: {
                        earned: a.credits.earned.get(),
                        expenses: a.credits.expenses.get(),
                        total: a.credits.total.get(),
                    },
                    gold: { earned: a.gold.earned.get(), expenses: a.gold.expenses.get(), total: a.gold.total.get() },
                }),
            ),
            n = H.model(() =>
                (function ({ earned: e, expenses: a, total: t }) {
                    const s = As({ earned: e, expenses: a, total: t });
                    return { records: Vs(s.records), total: Vs(s.total) };
                })({
                    earned: a.crystals.earned.get(),
                    expenses: a.crystals.expenses.get(),
                    total: a.crystals.total.get(),
                }),
            );
        return { ...a, computes: { experience: t, credits: s, crystals: n } };
    }, O),
    Gs = 'ListItem_received_ffdc3010',
    Ms = 'ListItem_separator_71797768',
    Fs = 'ListItem_label_4ab3c391',
    $s = 'ListItem_label__withIcon_c2381aa',
    Xs = 'ListItem_labelIcon_acb0da4',
    Ls = S('ListItem', 'ListItem_bcdaabbd'),
    Ks = t.forwardRef(({ labelKey: t, children: s, classNames: n, params: r, labelIconPath: i, ...l }, o) => {
        const c = h.resolve('images');
        return e.jsxs(Ls, {
            ...l,
            ref: o,
            'data-test-id': `${t}`,
            children: [
                e.jsxs('div', {
                    className: a(Fs, void 0 !== i && $s, null == n ? void 0 : n.label),
                    children: [
                        void 0 !== i &&
                            e.jsx('div', {
                                style: { backgroundImage: `url(${c.readOrEmpty(i)})` },
                                className: a(Xs, null == n ? void 0 : n.icon),
                            }),
                        e.jsx(v, { upgradeLegacy: !0, path: t, params: r }),
                    ],
                }),
                e.jsxs('div', { className: Gs, children: [e.jsx('div', { className: Ms }), s] }),
            ],
        });
    }),
    qs = 'Record_420804f3',
    Ys = 'Record_value_4d088deb',
    Us = 'Record_value__decreasing_8cff45fa',
    Zs = ({ formatter: t, value: s, modifier: r, currency: i, classNames: l, iconPath: o }) => {
        if (void 0 === s) return null;
        const c = r === ss || s < 0;
        return e.jsxs('div', {
            className: a(qs, null == l ? void 0 : l.base),
            children: [
                e.jsxs('div', {
                    className: a(Ys, c && Us, null == l ? void 0 : l.value),
                    'data-test-id': `${i}`,
                    children: [
                        n(r)
                            .with(ts, () => e.jsx(v, { path: 'common.multiplierSmall' }))
                            .with(as, () => e.jsx(v, { path: 'common.multiplierSmall' }))
                            .with(ss, () => e.jsx(v, { path: 'common.multiplierSmall' }))
                            .with(rs, () => e.jsx(v, { path: 'common.plus' }))
                            .otherwise(() => null),
                        t(s, i),
                        r === ns && e.jsx(v, { path: 'common.common.percent' }),
                    ],
                }),
                o && e.jsx(A, { width: 24, height: 24, path: o }),
            ],
        });
    },
    Js = 'RecordGroup_65a30ced',
    Qs = 'RecordGroup_base__inactive_5fd9f274',
    en = 'RecordGroup_record_5fd9f274',
    an = 'RecordGroup_record__extinguished_7fdfcea',
    tn = 'RecordGroup_record__first_9121e1b7',
    sn = 'RecordGroup_separator_9f211d97',
    nn = 'RecordGroup_separatorBackground_8a447834',
    rn = 'RecordGroup_value_1f34e2e2',
    ln = 'RecordGroup_value__total_126d88a1',
    on = 'RecordGroup_value__freeXP_931265db';
function cn(e, a) {
    return e !== Qa || (void 0 !== a && a > 0);
}
function dn({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case Gt:
            return !1;
        case lt:
        case ht:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const mn = ({ paramName: t, xp: s, freeXp: n, modifier: r, inactive: i, total: l, wotPlusActive: o }) => {
        function c(e) {
            switch (t) {
                case Za:
                    return y.formatReal('woZeroDigits', e);
                case Gt:
                    return y.formatReal('fractional', e);
                default:
                    return y.formatNumber('integral', e);
            }
        }
        return e.jsxs('div', {
            className: a(Js, i && Qs),
            children: [
                e.jsx('div', {
                    className: a(en, tn, dn({ wotPlusActive: o, paramName: t, value: s }) && an),
                    children: e.jsx(Zs, {
                        value: s,
                        currency: Wa,
                        modifier: cn(t, s) ? r : void 0,
                        formatter: c,
                        classNames: { value: a(rn, l && ln) },
                        iconPath: ys(Wa, t),
                    }),
                }),
                void 0 !== n && e.jsx('div', { className: sn, children: e.jsx('div', { className: nn }) }),
                e.jsx('div', {
                    className: a(en, dn({ wotPlusActive: o, paramName: t, value: n }) && an),
                    children: e.jsx(Zs, {
                        value: n,
                        currency: Ga,
                        modifier: cn(t, n) ? r : void 0,
                        formatter: c,
                        classNames: { value: a(rn, on, l && ln) },
                        iconPath: ys(Ga, t),
                    }),
                }),
            ],
        });
    },
    un = 'Item_groups_a1f0c2a5',
    pn = 'Item_label_7521a1d4',
    _n = 'Item_label__highlighted_36e62867',
    fn = 'Item_label__gold_49ec59ab',
    bn = {
        [qa]: 'title.base',
        [ct]: 'title.base',
        [Ya]: 'noPenalty',
        [dt]: 'noPenalty',
        [Ua]: 'friendlyFirePenalty',
        [Za]: 'igrBonus.simpleLabel',
        [mt]: 'igrBonus.simpleLabel',
        [Ja]: 'firstWin',
        [ut]: 'firstWin',
        [Qa]: 'manageableXpBonus',
        [pt]: 'manageableXpBonus',
        [et]: 'boosters',
        [_t]: 'boosters',
        [at]: 'tacticalTraining',
        [ft]: 'militaryManeuvers',
        [tt]: 'event',
        [bt]: 'event',
        [st]: 'referralBonus.fullLabel',
        [nt]: 'premiumVehicleXP',
        [vt]: 'premiumVehicleXP',
        [rt]: 'squadBonus',
        [it]: 'squadXPPenalty',
        [Gt]: 'aogasFactor',
        [lt]: 'wotPlusBonus',
        [ht]: 'wotPlusBonus',
        [Mt]: 'fairPlayViolation.deserter',
        [$t]: 'fairPlayViolation.suicide',
        [Ft]: 'fairPlayViolation.afk',
        [ot]: 'total',
        [gt]: 'total',
        originalAlternative: 'xpRecordSimple',
    },
    vn = { [lt]: 'subscription.wot_plus_32x32', [ht]: 'subscription.wot_plus_32x32' },
    hn = new Set([lt, ht]),
    gn = () =>
        e.jsx('span', { className: _n, children: e.jsx(v, { path: 'battle_results.details.calculations.maximum' }) }),
    yn = r(
        ({
            record: { paramName: t, premium: s, standard: n, modifier: r, recordsItemsDetails: i },
            total: l,
            ...o
        }) => {
            const { model: c } = Ws(),
                d = c.hasAnyPremium.get(),
                m = c.hasWotPlus.get();
            if (!(t in bn)) return null;
            const u = '1' === (null == i ? void 0 : i.isHighScope),
                p = u ? bn.originalAlternative : bn[t],
                _ = null == i ? void 0 : i.referralFactor;
            return e.jsx(Ks, {
                ...o,
                labelIconPath: vn[t],
                labelKey: `battle_results.details.calculations.${p}`,
                params: { ...(_ && { bonusFactor: ls(_) }), ...(u && { maximum: e.jsx(gn, {}) }) },
                classNames: { label: a(pn, hn.has(t) && fn) },
                children: e.jsxs('div', {
                    className: un,
                    children: [
                        e.jsx(mn, { ...n, paramName: t, modifier: r, inactive: d, total: l, wotPlusActive: m }),
                        e.jsx(mn, { ...s, paramName: t, modifier: r, inactive: !d, total: l, wotPlusActive: m }),
                    ],
                }),
            });
        },
    ),
    xn = 'IncomeStatement_560dd244',
    Nn = 'IncomeStatement_base__scroll_fb9f1475',
    jn = 'IncomeStatement_item_48b34a63',
    wn = r(
        t.forwardRef(({ className: t, scrollable: s, ...n }, r) => {
            const { model: i } = Ws(),
                l = i.computes.experience();
            return e.jsx(Oa, {
                ...n,
                ref: r,
                className: a(xn, s && Nn, t),
                scrollable: s,
                children: E(l.records, (a) => e.jsx(yn, { record: a, className: jn }, a.paramName)),
            });
        }),
    ),
    In = 'Total_item_a8580361',
    An = 'Total_divider_1de1ca28',
    Sn = 'Total_dividerImage_ab06168d',
    Rn = S('ExperienceTotal', 'Total_19236d49'),
    Cn = r(
        t.forwardRef((a, t) => {
            const { model: s } = Ws(),
                n = s.computes.experience();
            return e.jsxs(Rn, {
                ...a,
                ref: t,
                children: [
                    e.jsx(ja, { classNames: { base: An, image: Sn } }),
                    n.total.map((a) => e.jsx(yn, { record: a, className: In, total: !0 }, a.paramName)),
                ],
            });
        }),
    ),
    Bn = 'Experience_a014c8c',
    Pn = 'Experience_base__scroll_f75d07c6',
    kn = S('Experience'),
    En = t.forwardRef(({ scrollable: t, className: s, ...n }, r) =>
        e.jsx(kn, { ...n, ref: r, className: a(Bn, t && Pn, s) }),
    );
((En.Header = Ba), (En.Item = yn), (En.Total = Cn), (En.IncomeStatement = wn));
const Tn = 'Header_cbd845ec',
    Dn = 'Header_content_a63fb46c',
    Vn = 'Header_title_7b852a7',
    zn = 'Header_title__active_e5dd0f77',
    Hn = 'Header_title__premium_2c23921f',
    On = 'Header_icon_3b4dc587',
    Wn = r(
        t.forwardRef(({ className: t, ...s }, n) => {
            const { model: r } = Ws(),
                i = r.hasAnyPremium.get();
            return e.jsx(Ca, {
                ...s,
                ref: n,
                className: a(Tn, t),
                title: 'battle_results.details.credits',
                children: e.jsxs('div', {
                    className: Dn,
                    children: [
                        e.jsx('div', {
                            className: a(Vn, !i && zn),
                            children: e.jsx(v, { path: 'battle_results.common.details.noPremTitle' }),
                        }),
                        e.jsxs('div', {
                            className: a(Vn, i && zn, Hn),
                            children: [
                                e.jsx('div', {
                                    className: On,
                                    children: e.jsx(A, {
                                        width: 32,
                                        height: 32,
                                        path: 'post_battle.wot_premium_32x32',
                                    }),
                                }),
                                e.jsx(v, { path: 'battle_results.getPremiumPopover.prem' }),
                            ],
                        }),
                    ],
                }),
            });
        }),
    ),
    Gn = 'RecordGroup_65a30ced',
    Mn = 'RecordGroup_base__inactive_5fd9f274',
    Fn = 'RecordGroup_record_5fd9f274',
    $n = 'RecordGroup_record__extinguished_7fdfcea',
    Xn = 'RecordGroup_record__first_36c2aa71',
    Ln = 'RecordGroup_separator_9f211d97',
    Kn = 'RecordGroup_separatorBackground_8a447834',
    qn = 'RecordGroup_value_9253748c',
    Yn = 'RecordGroup_value__total_126d88a1',
    Un = 'RecordGroup_value__gold_d7bd74ba';
function Zn({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case Gt:
            return !1;
        case Rt:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const Jn = ({ credits: t, gold: s, modifier: n, inactive: r = !1, total: i, paramName: l, wotPlusActive: o }) => {
        function c(e, a) {
            return l === Gt ? y.formatReal('fractional', e) : y.formatNumber(a === Fa ? 'gold' : 'integral', e);
        }
        return e.jsxs('div', {
            className: a(Gn, r && Mn),
            children: [
                e.jsx('div', {
                    className: a(Fn, Xn, Zn({ paramName: l, wotPlusActive: o, value: t }) && $n),
                    children: e.jsx(Zs, {
                        formatter: c,
                        value: t,
                        currency: Ma,
                        modifier: n,
                        classNames: { value: a(qn, i && Yn) },
                        iconPath: ys(Ma, l),
                    }),
                }),
                void 0 !== s && e.jsx('div', { className: Ln, children: e.jsx('div', { className: Kn }) }),
                e.jsx('div', {
                    className: a(Fn, 0 === s && $n),
                    children: e.jsx(Zs, {
                        value: s,
                        currency: Fa,
                        modifier: n,
                        classNames: { value: a(qn, Un, i && Yn) },
                        formatter: c,
                        iconPath: ys(Fa, l),
                    }),
                }),
            ],
        });
    },
    Qn = 'Item_groups_a1f0c2a5',
    er = 'Item_label_7521a1d4',
    ar = 'Item_label__gold_49ec59ab',
    tr = {
        [yt]: 'title.base',
        [xt]: 'squadBonus',
        [Nt]: 'noPenalty',
        [jt]: 'boosters',
        [It]: 'battlePayments',
        [At]: 'event',
        [zt]: 'event',
        [St]: 'referralBonus.fullLabel',
        [Rt]: 'wotPlusBonus',
        [Mt]: 'fairPlayViolation.deserter',
        [$t]: 'fairPlayViolation.suicide',
        [Ft]: 'fairPlayViolation.afk',
        [Ct]: 'friendlyFirePenalty',
        [Bt]: 'friendlyFireCompensation',
        [Gt]: 'aogasFactor',
        [Dt]: 'intermediateTotal',
        [Ot]: 'intermediateTotal',
        [kt]: 'autoRepair',
        [Et]: 'autoLoad',
        [Tt]: 'autoEquip',
        [Vt]: 'total',
        [Wt]: 'total',
        [Pt]: 'piggyBankInfo',
        [Ht]: 'piggyBankInfo',
        [wt]: 'petCredits.fullLabel',
    },
    sr = { [Rt]: 'subscription.wot_plus_32x32' },
    nr = r(({ record: t, total: s, ...n }) => {
        const { model: r } = Ws(),
            i = r.hasAnyPremium.get(),
            l = r.hasWotPlus.get(),
            { paramName: o, premium: c, standard: d, modifier: m, recordsItemsDetails: u } = t;
        if (!(o in tr)) return null;
        const p = null == u ? void 0 : u.referralFactor,
            _ = null == u ? void 0 : u.bonusFactor,
            f = tr[o],
            b = fs[Vt](t, l);
        return e.jsx(Ks, {
            ...n,
            labelIconPath: sr[o],
            labelKey: `battle_results.details.calculations.${f}`,
            classNames: { label: a(er, o === Rt && ar) },
            params: { ...(p && { bonusFactor: ls(p) }), ...(_ && { bonusFactor: os(_) }) },
            children: e.jsxs('div', {
                className: Qn,
                children: [
                    e.jsx(Jn, {
                        paramName: o,
                        credits: d.credits,
                        gold: b ? d.gold : void 0,
                        modifier: m,
                        inactive: i,
                        total: s,
                        wotPlusActive: l,
                    }),
                    e.jsx(Jn, {
                        paramName: o,
                        credits: c.credits,
                        gold: b ? c.gold : void 0,
                        modifier: m,
                        inactive: !i,
                        total: s,
                        wotPlusActive: l,
                    }),
                ],
            }),
        });
    }),
    rr = 'IncomeStatement_560dd244',
    ir = 'IncomeStatement_base__scroll_fb9f1475',
    lr = 'IncomeStatement_item_48b34a63',
    or = r(
        t.forwardRef(({ className: t, scrollable: s, ...n }, r) => {
            const { model: i } = Ws(),
                l = i.computes.credits();
            return e.jsx(Oa, {
                ...n,
                ref: r,
                className: a(rr, s && ir, t),
                scrollable: s,
                children: E(l.records, (a) => e.jsx(nr, { record: a, className: lr }, a.paramName)),
            });
        }),
    ),
    cr = 'Total_item_de53c8b0',
    dr = 'Total_divider_1de1ca28',
    mr = 'Total_dividerImage_ab06168d',
    ur = S('CreditsTotal', 'Total_19236d49'),
    pr = r(
        t.forwardRef((a, t) => {
            const { model: s } = Ws(),
                n = s.computes.credits();
            return e.jsxs(ur, {
                ...a,
                ref: t,
                children: [
                    e.jsx(ja, { classNames: { base: dr, image: mr } }),
                    n.total.map((a) => e.jsx(nr, { record: a, className: cr, total: !0 }, a.paramName)),
                ],
            });
        }),
    ),
    _r = 'Credits_68f91d81',
    fr = 'Credits_base__scroll_759f08f3',
    br = S('Credits'),
    vr = t.forwardRef(({ scrollable: t, className: s, ...n }, r) =>
        e.jsx(br, { ...n, ref: r, className: a(_r, t && fr, s) }),
    );
((vr.Header = Wn), (vr.Item = nr), (vr.Total = pr), (vr.IncomeStatement = or));
const hr = 'Item_currencyValue_81f5b9fb',
    gr = 'Item_currencyValue__total_a7596c8e',
    yr = 'Item_currencyValue__negative_5e98369f',
    xr = 'Item_label_5d6964d6',
    Nr = {
        [$a]: 'battle_results.details.calculations.crystal.total',
        [Xa]: 'battle_results.details.calculations.crystal.events',
        [La]: 'battle_results.details.calculations.autoBoosters',
        [Ka]: 'battle_results.details.calculations.total',
    },
    jr = ({ record: t, total: s, ...n }) => {
        const { paramName: r, baseValue: i } = t;
        return r in Nr
            ? e.jsx(Ks, {
                  ...n,
                  labelKey: Nr[r],
                  classNames: { label: xr, ...n.classNames },
                  children: e.jsx(W, {
                      reverse: !0,
                      type: 'crystal',
                      size: G.small,
                      children: e.jsx('div', {
                          className: a(hr, i < 0 && yr, s && gr),
                          children: y.formatNumber('integral', i),
                      }),
                  }),
              })
            : (console.error(`Parameter name "${r} is not valid for bonds`), null);
    },
    wr = 'IncomeStatement_item_48b34a63',
    Ir = S('BondsIncomeStatement'),
    Ar = r(
        t.forwardRef((a, t) => {
            const { model: s } = Ws(),
                n = s.computes.crystals();
            return e.jsx(Ir, {
                ...a,
                ref: t,
                children: n.records.map((a) => e.jsx(jr, { record: a, className: wr }, a.paramName)),
            });
        }),
    ),
    Sr = 'Total_item_a8580361',
    Rr = 'Total_divider_1de1ca28',
    Cr = 'Total_dividerImage_ab06168d',
    Br = S('BondsTotal', 'Total_120fb0c4'),
    Pr = r(
        t.forwardRef((a, t) => {
            const { model: s } = Ws(),
                n = s.computes.crystals();
            return e.jsxs(Br, {
                ...a,
                ref: t,
                children: [
                    e.jsx(ja, { classNames: { base: Rr, image: Cr } }),
                    n.total.map((a) => e.jsx(jr, { total: !0, record: a, className: Sr }, a.paramName)),
                ],
            });
        }),
    ),
    kr = t.forwardRef((a, t) => e.jsx(Ca, { ...a, title: 'battle_results.details.crystal', ref: t })),
    Er = S('Bonds');
((Er.Header = kr), (Er.Item = jr), (Er.Total = Pr), (Er.IncomeStatement = Ar));
const Tr = 'FinancialReport_content_99bf970f',
    Dr = 'FinancialReport_leftContent_75c21204',
    Vr = 'FinancialReport_bonds_cc81cbc0',
    zr = 'FinancialReport_headerContent_aad9188f',
    Hr = 'FinancialReport_experience_7219d4d3',
    Or = 'FinancialReport_credits_7712b0c',
    Wr = 'FinancialReport_header_d56ebc61',
    Gr = 'FinancialReport_total_bdf3e42b',
    Mr = S('FinancialReport', 'FinancialReport_c3cc562a'),
    Fr = ({ className: a }) => {
        const [s, n] = t.useState({ credits: !1, experience: !1 }),
            r = t.useRef(null),
            i = t.useRef(null),
            l = t.useRef(null),
            o = M({ margin: 18 }, { medium: { margin: 19 }, large: { margin: 16 }, extraLarge: { margin: 30 } }),
            c = t.useCallback(() => {
                if (!r.current || !i.current || !l.current) return;
                const { height: e } = r.current.getBoundingClientRect(),
                    { height: a } = i.current.getBoundingClientRect(),
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
            F(r, c),
            e.jsx(Os, {
                children: e.jsx(Mr, {
                    className: a,
                    children: e.jsxs('div', {
                        className: Tr,
                        children: [
                            e.jsxs('div', {
                                className: Dr,
                                ref: r,
                                children: [
                                    e.jsxs(vr, {
                                        ref: i,
                                        scrollable: s.credits,
                                        className: Or,
                                        children: [
                                            e.jsx(vr.Header, { className: Wr }),
                                            e.jsx(vr.IncomeStatement, { scrollable: s.credits }),
                                            e.jsx(vr.Total, { className: Gr }),
                                        ],
                                    }),
                                    e.jsxs(En, {
                                        ref: l,
                                        scrollable: s.experience,
                                        className: Hr,
                                        children: [
                                            e.jsx(En.Header, { className: Wr, classNames: { content: zr } }),
                                            e.jsx(En.IncomeStatement, { scrollable: s.experience }),
                                            e.jsx(En.Total, { className: Gr }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs(Er, {
                                className: Vr,
                                children: [
                                    e.jsx(Er.Header, { className: Wr, classNames: { content: zr } }),
                                    e.jsx(Er.IncomeStatement, {}),
                                    e.jsx(Er.Total, { className: Gr }),
                                ],
                            }),
                        ],
                    }),
                }),
            })
        );
    },
    $r = S('MissionsProgress', 'MissionsProgress_ff6d39db'),
    Xr = t.memo(function ({ className: a }) {
        return e.jsx($r, { className: a, children: 'Missions Progress' });
    }),
    Lr = h.resolve('strings'),
    Kr = ['huntsman', 'medalGore', 'medalStark'],
    qr = {
        markOfMastery: 'markOfMastery',
        marksOnGun: 'marksOnGun',
        epic: 'epic',
        specialAchievements: 'specialAchievements',
        right: 'right',
        left: 'left',
        other: 'other',
    },
    Yr = [qr.markOfMastery, qr.marksOnGun, qr.epic, qr.specialAchievements, qr.right, qr.left, qr.other];
function Ur(e) {
    return e.groupID === qr.markOfMastery
        ? qr.markOfMastery
        : e.groupID === qr.marksOnGun
          ? qr.marksOnGun
          : e.epic
            ? qr.epic
            : Kr.includes(e.name)
              ? qr.specialAchievements
              : e.groupID === qr.right
                ? qr.right
                : e.groupID === qr.left
                  ? qr.left
                  : (console.error(`Achievement ${e.name} with a group ${e.groupID} is not detected`), qr.other);
}
function Zr(e) {
    return $(e, (e, a) => {
        const t = Ur(e),
            s = Ur(a),
            n = Yr.indexOf(t),
            r = Yr.indexOf(s);
        return t !== s
            ? n - r
            : (function (e, a) {
                  const t = Lr.readOrEmpty(`achievements.${e.name}`),
                      s = Lr.readOrEmpty(`achievements.${a.name}`);
                  return t.localeCompare(s);
              })(e, a);
    });
}
const Jr = 'default',
    Qr = 'hover',
    ei = 'extinct';
function ai(e, a) {
    return void 0 === a ? Jr : a === e ? Qr : ei;
}
const ti = { marksOnGun1: '1_mark', marksOnGun2: '2_marks', marksOnGun3: '3_marks' };
function si({ iconName: e, groupID: a, vehicleNation: t }) {
    return 'marksOnGun' === a ? `marksOnGun.x240x240.${t}_${ti[e]}` : `achievement.x240x240.${e}`;
}
const ni = 'marks',
    ri = 'epicAndHeroic',
    ii = 'others',
    li = ['bombardier', 'medalAntiSpgFire', 'kamikaze', 'raider', 'medalMonolith', 'medalCoolBlood'];
var oi = ((e) => (
        (e.Squad = 'squad'),
        (e.Player = 'player'),
        (e.Damage = 'damage'),
        (e.Frag = 'frag'),
        (e.Xp = 'xp'),
        (e.Vehicle = 'tank'),
        (e.Medal = 'medal'),
        e
    ))(oi || {}),
    ci = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(ci || {}),
    di = ((e) => (
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
    ))(di || {}),
    mi = ((e) => (
        (e[(e.PremiumInfo = 0)] = 'PremiumInfo'),
        (e[(e.PremiumBonus = 1)] = 'PremiumBonus'),
        (e[(e.PremiumEarnings = 2)] = 'PremiumEarnings'),
        (e[(e.PremiumAdvertising = 3)] = 'PremiumAdvertising'),
        (e[(e.PlusInfo = 4)] = 'PlusInfo'),
        (e[(e.PlusEarnings = 5)] = 'PlusEarnings'),
        (e[(e.PlusYouRock = 6)] = 'PlusYouRock'),
        e
    ))(mi || {});
const ui = {
        plusInfo: mi.PlusInfo,
        premiumInfo: mi.PremiumInfo,
        premiumAdvertising: mi.PremiumAdvertising,
        premiumBonus: mi.PremiumBonus,
        premiumEarnings: mi.PremiumEarnings,
        plusEarnings: mi.PlusEarnings,
        plusYouRock: mi.PlusYouRock,
    },
    pi = Object.values(ui);
const _i = 'premiumInfo',
    fi = 'applyBonus',
    bi = 'appliedBonus',
    vi = 'isNotVictory',
    hi = 'requiredRecentBattleAndVehicle',
    gi = 'invalidBattleType',
    yi = 'noVehicle',
    xi = 'fasterEducationCrewNotActive',
    Ni = 'fasterEducationCrewActive',
    ji = 'noCrew',
    wi = 'premiumEarnings',
    Ii = 'creditsAdvertising',
    Ai = 'premiumAdvertising',
    Si = 'squadAdvertising',
    Ri = 'bonusAdvertising',
    Ci = 'questsAdvertising',
    Bi = 'plusInfo',
    Pi = 'plusEarnings',
    ki = 'plusYouRock',
    Ei = { credits: Ii, premium: Ai, squad: Si, bonus: Ri, quests: Ci },
    Ti = [Ei.credits, Ei.premium, Ei.squad, Ei.bonus, Ei.quests];
const Di = {
        [di.IsApplied]: bi,
        [di.DeprecatedResults]: hi,
        [di.IsNotVictory]: vi,
        [di.InvalidBattleType]: gi,
        [di.NoVehicle]: yi,
        [di.FasterEducationCrewActive]: Ni,
        [di.FasterEducationCrewNotActive]: xi,
        [di.NoCrew]: ji,
    },
    Vi = {
        [ui.plusInfo]: { define: () => Bi },
        [ui.premiumInfo]: { define: () => _i },
        [ui.premiumAdvertising]: {
            define: ({ supportedAdvertisements: e, usedAdvertisements: a }) => {
                const t = e.filter((e) => !1 === a.includes(e))[0] ?? e[0];
                return (
                    V(
                        void 0 !== t,
                        'advertisingState is not recognized. Check please supportedAdvertisements state. It is not possible to have empty supportedAdvertisements array in case if the widget in the premiumAdvertising state',
                    ),
                    t
                );
            },
        },
        [ui.premiumBonus]: {
            define: ({ restriction: e }) => (e !== di.NoRestriction && e !== di.NotApplyingError ? Di[e] : fi),
        },
        [ui.premiumEarnings]: { define: () => wi },
        [ui.plusEarnings]: { define: () => Pi },
        [ui.plusYouRock]: { define: () => ki },
    };
function zi(e) {
    return function (a) {
        return e(i(() => l(a)));
    };
}
const Hi = [Ei.premium, Ei.squad, Ei.credits],
    Oi = ['ctf30x30', 'domination30x30'];
var Wi = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
        Wi || {},
    ),
    Gi = ((e) => (
        (e.Shots = 'shots'),
        (e.Hits = 'hits'),
        (e.ExplosionHits = 'explosionHits'),
        (e.DamageDealt = 'damageDealt'),
        (e.SniperDamageDealt = 'sniperDamageDealt'),
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
    ))(Gi || {});
function Mi(e) {
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
const Fi = [ot, Dt];
function $i(e, a) {
    const { recordsItemsDetails: t, baseValue: s, premiumValue: n, currencyType: r, paramName: i } = ws(e),
        l = a ? n : s,
        o = l >= 0 ? l : 0;
    return { paramName: i, type: r, visibleIfZero: Fi.includes(i) || 'True' === t.isAvailable, value: o };
}
function Xi(e) {
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
                                      o(
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
function Li(e) {
    return {
        groupID: e.groupID,
        iconName: e.iconName,
        name: e.name,
        epic: e.isEpic,
        tooltipArgs: e.tooltipArgs,
        tooltipId: e.tooltipId,
    };
}
function Ki(e) {
    return { labelKey: e.labelKey, paramValueType: e.paramValueType, value: E(e.value, (e) => e) };
}
function qi(e) {
    return {
        ...Ki({ label: e.label, labelKey: e.labelKey, paramValueType: e.paramValueType, value: E(e.value, (e) => e) }),
        details: E(e.details, (e) => Ki(e)),
    };
}
function Yi(e) {
    var a;
    const t = null == (a = X(e.detailedStatistics, (e) => e.labelKey === Gi.TeamHitsDamage)) ? void 0 : a.value,
        s = void 0 !== t ? L(t, 0) : 0,
        n = e.efficiencyValues.kills - (s ?? 0);
    return {
        personal: e.isPersonal,
        squadIndex: e.squadIndex,
        achievements: E(e.achievements, Li),
        account: q(e.userNames),
        userStatus: ((i = e.userStatus), { abandonBattle: i.isLeftBattle, deathReason: i.deathReason }),
        killer: q(e.userStatus.killer),
        vehicle: { ...K(e.vehicle), longName: e.vehicle.longName },
        efficiencyValues: {
            substractedAlliesKills: n,
            ...((r = e.efficiencyValues), { damageDealt: r.damageDealt, kills: r.kills, earnedXp: r.earnedXp }),
        },
        detailedStatistics: E(e.detailedStatistics, qi),
        databaseId: e.databaseID,
    };
    var r, i;
}
const Ui = {
    killed: 0,
    spotted: 0,
    criticalDamage: 0,
    damageDealt: { value: 0, count: 0 },
    damageAssisted: 0,
    damageAssistedStun: { value: 0, count: 0 },
    damageBlockedByArmor: { value: 0, count: 0 },
};
const Zi = 'allies',
    Ji = 'enemies',
    Qi = ['dead0', 'dead1', 'dead2', 'dead3', 'dead5', 'dead7'],
    el = 'personal',
    al = 'alien';
function tl(e, a, t) {
    return 0 === t ? null : a === t && e === Zi ? el : al;
}
function sl({ anonymizer: e, personal: a, platoonType: t }) {
    return !(a || !e) && (t === al || null === t);
}
const [nl, rl] = z()(
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
                    battleInfo: a.transform(Mi, 'battleInfo'),
                    additionalBonus: a.transform(Xi, 'additionalBonus'),
                    allPlayersDictionary: c.box({}),
                    personalEfficiency: {
                        opened: c.box(!1),
                        achievements: a.transform((e) => Zr(E(e, Li)), 'achievements'),
                        statistics: { details: c.box([]), capturePoints: c.box(0), droppedCapturePoints: c.box(0) },
                    },
                    teamsStatistic: {
                        allies: c.box([]),
                        enemies: c.box([]),
                        sorting: c.box({ column: oi.Vehicle, sortDirection: ci.Desc }),
                        selectedRow: c.box(),
                    },
                    user: { names: c.box(), status: c.box() },
                    playerSatisfaction: a.object('playerSatisfaction'),
                };
            (zi(t)(() => {
                const e = {};
                (n.teamsStatistic.allies.set(
                    E(s.teamsStatistic.allies.get(), (a) => {
                        const t = Yi(a);
                        return ((e[t.account.username] = t), t);
                    }),
                ),
                    n.teamsStatistic.enemies.set(
                        E(s.teamsStatistic.enemies.get(), (a) => {
                            const t = Yi(a);
                            return ((e[t.account.username] = t), t);
                        }),
                    ));
                const a = n.allPlayersDictionary.get();
                n.allPlayersDictionary.set({ ...a, ...e });
            }),
                zi(t)(() => {
                    return n.teamsStatistic.sorting.set(
                        ((e = s.teamsStatistic.sortingColumn.get()),
                        (a = s.teamsStatistic.sortingOrder.get()),
                        { column: e, sortDirection: a }),
                    );
                    var e, a;
                }),
                zi(t)(() => {
                    (n.personalEfficiency.statistics.capturePoints.set(s.personalEffiency.capturePoints.get()),
                        n.personalEfficiency.statistics.droppedCapturePoints.set(
                            s.personalEffiency.droppedCapturePoints.get(),
                        ));
                }));
            const r = H.structural(() =>
                    (function ({ anyPremium: e, credits: a, crystals: t, gold: s, xp: n }) {
                        const r = X(a, (e) => e.paramName === Dt),
                            i = X(s, (e) => e.paramName === Wt),
                            l = X(n, (e) => e.paramName === ot),
                            o = X(t, (e) => e.paramName === Ka),
                            c = [];
                        return (
                            r && c.push($i(r, e)),
                            i && c.push($i(i, e)),
                            l && c.push($i(l, e)),
                            o && c.push($i(o, e)),
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
                i = H.shallow(() => {
                    const e = X(n.teamsStatistic.allies.get(), (e) => e.personal);
                    return (V(void 0 !== e, 'Personal info is not found'), e);
                }),
                l = H.shallow(() => {
                    const e = n.teamsStatistic.selectedRow.get();
                    if (void 0 === e) return;
                    const a = (e.team === Zi ? n.teamsStatistic.allies : n.teamsStatistic.enemies).get();
                    return X(a, (a) => a.account.username === e.username);
                }),
                o = H.shallow(() => {
                    const e = n.allPlayersDictionary.get();
                    return {
                        assault: n.personalEfficiency.statistics.capturePoints.get(),
                        defend: n.personalEfficiency.statistics.droppedCapturePoints.get(),
                        rows: T(
                            s.personalEffiency.details.get(),
                            (a, t) => {
                                const s = (function (e) {
                                    return T(
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
                                if (((n = s), Y.structural(n, Ui))) return a;
                                var n;
                                const r = e[t.userName];
                                return (
                                    V(void 0 !== r, `Such enemy ${t.userName} is not found`),
                                    a.push({ ...s, account: r.account, vehicle: r.vehicle, databaseId: r.databaseId }),
                                    a
                                );
                            },
                            [],
                        ),
                    };
                }),
                d = H.shallow(() => {
                    const e = X(s.xp.total.get(), (e) => 'totalXP' === e.paramName);
                    V(void 0 !== e, 'totalXP record is not found in the financial report');
                    const a = X(s.credits.total.get(), (e) => 'totalCredits' === e.paramName),
                        t = X(s.credits.total.get(), (e) => 'intermediateTotalCredits' === e.paramName);
                    return (
                        V(void 0 !== a, 'totalCredits record is not found in the financial report'),
                        V(void 0 !== t, 'intermediateTotalCredits record is not found in the financial report'),
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
                m = H.primitive(() => {
                    const e = n.personalEfficiency.achievements.get();
                    return U(e, (e) => e.epic || ea.includes(e.groupID));
                });
            return {
                ...n,
                computes: {
                    hasSpeialMedals: m,
                    earnedCurrencies: r,
                    personalInfo: i,
                    efficiencyDetails: l,
                    personalEffiency: o,
                    premiumAndStandartEarnings: d,
                },
            };
        },
        ({ externalModel: e, model: a }) => {
            const t = e.createCallback((e) => e, 'teamStats.onStatsSorted');
            return {
                close: e.createCallbackNoArgs('onClose'),
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
                    sort: d((e) => {
                        (a.teamsStatistic.sorting.set(e), t(e));
                    }),
                    selectRow: d((e) => {
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
            };
        },
    ),
    il = t.createContext(null);
function ll() {
    const e = t.useContext(il);
    if (null === e) throw new Error('You can use the achievements hooks only with the Achievements component');
    return e;
}
const ol = { x: 50, y: -30, scale: 1.2, opacity: 0 };
function cl({ children: a, achievements: s, springsProps: n, vehicleNation: r }) {
    const [i, l] = t.useState(new Set()),
        [o, c] = t.useState(void 0),
        [d, u] = m(s.length, () => ({ from: { ...ol, ...(null == n ? void 0 : n.from) }, ...n }), [s.length, n]),
        p = t.useMemo(
            () => ({
                api: u,
                springs: d,
                vehicleNation: r,
                achievements: s,
                hoverIndex: o,
                setHoverIndex: c,
                completedAnimationIndexes: i,
                setCompletedAnimationIndexes: l,
            }),
            [u, d, r, s, o, c, i, l],
        );
    return e.jsx(il.Provider, { value: p, children: a });
}
const dl = {
        base: 'Achievements_ee9c0189',
        animatedAchievement: 'Achievements_animatedAchievement_4c71d33',
        achievement: 'Achievements_achievement_b41909e2',
        achievement__extinct: 'Achievements_achievement__extinct_19551569',
        achievementIcon: 'Achievements_achievementIcon_e83ea27d',
    },
    ml = t.forwardRef(function ({ achievement: s, index: n, width: r, height: i, classNames: l }, o) {
        const c = Z({
                args: t.useMemo(
                    () => ({ tooltipId: s.tooltipId, tooltipArgs: s.tooltipArgs }),
                    [s.tooltipId, s.tooltipArgs],
                ),
            }),
            d = j(),
            { hoverIndex: m, setHoverIndex: u, vehicleNation: p } = ll();
        return e.jsx('div', {
            ...c,
            ref: o,
            className: a(dl.achievement, dl[`achievement__${ai(n, m)}`], null == l ? void 0 : l.achievement),
            onMouseEnter: function (e) {
                (d.play('mouse-enter', { original: e, target: 'achievements:achievement' }), c.onMouseEnter(e), u(n));
            },
            onMouseLeave: () => {
                (c.onMouseLeave(), u(void 0));
            },
            children: e.jsx(
                A,
                {
                    width: r,
                    height: i,
                    path: si({ groupID: s.groupID, iconName: s.iconName, vehicleNation: p }),
                    className: a(dl.achievementIcon, null == l ? void 0 : l.icon),
                },
                s.iconName,
            ),
        });
    }),
    ul = S('Rewards', dl.base);
t.memo(function ({ width: a, height: t, classNames: s, className: n }) {
    const { achievements: r } = ll();
    return e.jsx(ul, {
        className: n,
        children: E(r, (n, r) => e.jsx(ml, { width: a, height: t, index: r, achievement: n, classNames: s }, n.name)),
    });
});
const pl = {
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
    _l = t.memo(function ({
        achievements: s,
        startIndex: n,
        indent: r = 0,
        group: i,
        medalWidth: l,
        medalHeight: o,
        maxContainerWidth: c,
        hasSiblingGroups: d,
        updateGroupIndent: m,
    }) {
        const p = t.useRef(null),
            { springs: _, achievements: f, completedAnimationIndexes: b, hoverIndex: v } = ll();
        return (
            J(() => {
                if (null === p.current) return;
                const e = p.current.offsetWidth + Math.floor((r / s.length) * 2),
                    a = Q(c);
                m(i, e < a ? Math.floor((a - e) / 2) : 0);
            }, [s.length, l, c, m]),
            e.jsx('div', {
                style: { paddingLeft: r, paddingRight: r },
                className: a(pl[`${i}Group`], d && pl[`${i}Group__indent`]),
                children: E(s, (t, r) => {
                    const i = f.length - n - r - 1;
                    return e.jsx(
                        u.div,
                        {
                            ref: 0 === r ? p : void 0,
                            className: pl.animatedAchievement,
                            style: { ..._[i], zIndex: n + r === v ? s.length + 1 : s.length - r },
                            children: e.jsx(ml, {
                                classNames: {
                                    achievement: a(pl.achievement, !1 === b.has(i) && pl.achievement__notInteractive),
                                },
                                achievement: t,
                                width: l,
                                height: o,
                                index: n + r,
                            }),
                        },
                        r,
                    );
                }),
            })
        );
    });
function fl({ marksOnGun: e, hasSiblingGroups: a }) {
    return a && e ? pl.marksGroup__indentWithMarksOnGun : a ? pl.marksGroup__masteryIndent : void 0;
}
const bl = t.memo(function ({ achievements: t, startIndex: s, medalWidth: n, medalHeight: r, hasSiblingGroups: i }) {
        const { springs: l, achievements: o, completedAnimationIndexes: c, hoverIndex: d } = ll();
        return e.jsx('div', {
            className: a(
                pl.marksGroup,
                fl({ hasSiblingGroups: i, marksOnGun: t.some((e) => 'marksOnGun' === e.name) }),
            ),
            children: E(t, (i, m) => {
                const p = o.length - s - m - 1;
                return e.jsx(
                    u.div,
                    {
                        className: pl.animatedAchievement,
                        style: { ...l[p], zIndex: s + m === d ? t.length + 1 : t.length - m },
                        children: e.jsx(ml, {
                            classNames: {
                                achievement: a(pl.achievement, !1 === c.has(p) && pl.achievement__notInteractive),
                            },
                            achievement: i,
                            width: n,
                            height: r,
                            index: s + m,
                        }),
                    },
                    m,
                );
            }),
        });
    }),
    vl = t.memo(function ({ className: s }) {
        const n = M(
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
            { achievements: r } = ll(),
            i = t.useMemo(
                () =>
                    (function (e) {
                        return T(
                            e,
                            (e, a) => {
                                switch (Ur(a)) {
                                    case qr.markOfMastery:
                                    case qr.marksOnGun:
                                        e.marks.push(a);
                                        break;
                                    case qr.epic:
                                    case qr.specialAchievements:
                                    case qr.right:
                                        if (li.includes(a.name)) {
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
                            { [ni]: [], [ri]: [], [ii]: [] },
                        );
                    })(r),
                [r],
            ),
            [l, o] = t.useState(() => ({
                epicAndHeroic: i.marks.length > 0 && i.epicAndHeroic.length > 0 ? void 0 : 0,
                others: i.epicAndHeroic.length + i.marks.length > 0 && i.others.length > 0 ? void 0 : 0,
            })),
            c = t.useCallback(
                function (e, a) {
                    o((t) => ({ ...t, [e]: a }));
                },
                [o],
            );
        return 0 === r.length
            ? null
            : e.jsxs('div', {
                  className: a(pl.base, void 0 !== l.epicAndHeroic && void 0 !== l.others && pl.base__visible, s),
                  children: [
                      i.marks.length > 0 &&
                          e.jsx(bl, {
                              medalWidth: n.epicAndHeroic.width,
                              medalHeight: n.epicAndHeroic.height,
                              achievements: i.marks,
                              startIndex: 0,
                              hasSiblingGroups: i.epicAndHeroic.length + i.others.length > 0,
                          }),
                      i.epicAndHeroic.length > 0 &&
                          e.jsx(_l, {
                              group: ri,
                              medalWidth: n.epicAndHeroic.width,
                              medalHeight: n.epicAndHeroic.height,
                              maxContainerWidth: n.epicAndHeroic.maxContainerWidth,
                              achievements: i.epicAndHeroic,
                              startIndex: i.marks.length,
                              updateGroupIndent: c,
                              indent: l.epicAndHeroic,
                              hasSiblingGroups: i.others.length > 0,
                          }),
                      i.others.length > 0 &&
                          e.jsx(_l, {
                              group: ii,
                              medalWidth: n.others.width,
                              medalHeight: n.others.height,
                              maxContainerWidth: n.others.maxContainerWidth,
                              achievements: i.others,
                              startIndex: i.marks.length + i.epicAndHeroic.length,
                              updateGroupIndent: c,
                              indent: l.others,
                          }),
                  ],
              });
    });
var hl = ((e) => ((e.None = 'none'), (e.Worse = 'worse'), (e.Usual = 'usual'), (e.Better = 'better'), e))(hl || {});
const gl = 'RateButton_bb66ff02',
    yl = 'RateButton_base__inner_61655025',
    xl = 'RateButton_base__first_hover_c025af3c',
    Nl = 'RateButton_base__usual_6d49d479',
    jl = 'RateButton_base__worse_4a6537c5',
    wl = 'RateButton_base__better_ab2a6315',
    Il = 'RateButton_base__selected_70adc5a4',
    Al = 'RateButton_base__disabled_73dd0147',
    Sl = { [hl.Worse]: jl, [hl.Usual]: Nl, [hl.Better]: wl, [hl.None]: null },
    Rl = ({ variant: t, selected: s, className: n, isHovered: r, ...i }) => {
        const l = h.resolve('strings'),
            o = j(),
            c = g({
                header: l.readOrEmpty(`battle_results.battleRating.tooltip.${t}.header`),
                body: l.readOrEmpty(`battle_results.battleRating.tooltip.${t}.body`),
            }),
            d = !r && !i.disabled && t === hl.Usual;
        return e.jsx('div', {
            onMouseEnter: (e) => {
                !s && !i.disabled && o.play('mouse-enter', { original: e, target: 'battle_rating:rate_button' });
            },
            children: e.jsx('button', {
                className: a(gl, n, Sl[t], s ? Il : d ? xl : i.disabled ? Al : void 0),
                ...c,
                ...i,
                children: e.jsx('div', { className: yl }),
            }),
        });
    },
    Cl = {
        base: 'BattleRating_fa13d03',
        base_title: 'BattleRating_base_title_757e19bf',
        base_wrapper: 'BattleRating_base_wrapper_ae4d42aa',
    },
    Bl = function ({ state: a, onSatisfactionRatingSelected: s }) {
        const [n, r] = t.useState(!1),
            i = j(),
            l = R.strings.battle_results.battleResult.battleRating[a].header(),
            o = [hl.Worse, hl.Usual, hl.Better],
            c = a === hl.None;
        return e.jsxs('div', {
            className: Cl.base,
            onMouseEnter: () => {
                r(!0);
            },
            children: [
                e.jsx('div', { className: Cl.base_title, children: l }),
                e.jsx('div', {
                    className: Cl.base_wrapper,
                    children: o.map(
                        (t) =>
                            t !== hl.None &&
                            e.jsx(
                                Rl,
                                {
                                    variant: t,
                                    className: Cl.base_button,
                                    selected: a === t,
                                    onClick: c
                                        ? (e) => {
                                              (i.play('click', { original: e, target: 'battle_rating:rate_button' }),
                                                  s(t));
                                          }
                                        : null,
                                    isHovered: n,
                                    disabled: a !== t && a !== hl.None,
                                },
                                t,
                            ),
                    ),
                }),
            ],
        });
    },
    Pl = t.createContext(null);
function kl() {
    const e = t.useContext(Pl);
    if (null === e) throw new Error('You can use the managable bonus hooks only with the ManagableBonus component');
    return e;
}
function El({
    children: a,
    bonusState: s,
    restriction: n,
    usedAdvertisements: r,
    supportedStates: i,
    supportedAdvertisements: l = Ti,
    ...o
}) {
    const c = t.useMemo(
        () => (
            V(
                (function (e) {
                    return pi.includes(e);
                })(s),
                `Bonus state ${s} is not supported`,
            ),
            {
                ...o,
                bonusState: s,
                restriction: n,
                supportedAdvertisements: l,
                state: Vi[s].define({ restriction: n, supportedAdvertisements: l, usedAdvertisements: r }),
            }
        ),
        [s, n, o, l, r],
    );
    return Array.isArray(i) && !1 === i.includes(s)
        ? (console.error(`State ${s} is not supported for the current game mode`), null)
        : e.jsx(Pl.Provider, { value: c, children: a });
}
const Tl = { value: 'Currency_value_a12c8cb4' };
function Dl({ size: t, type: s, classNames: n, withoutPlus: r = !1, value: i }) {
    const l = 'gold' === s ? 'gold' : 'integral';
    return e.jsx(W, {
        reverse: !0,
        size: t,
        type: s,
        className: a(Tl.currency, null == n ? void 0 : n.currency),
        children: r
            ? e.jsx('div', { className: a(Tl.value, null == n ? void 0 : n.value), children: y.formatNumber(l, i) })
            : e.jsx(v, {
                  className: a(Tl.value, null == n ? void 0 : n.value),
                  path: 'common.plusValueWithSpace',
                  params: { value: y.formatNumber(l, i) },
              }),
    });
}
const Vl = 'Advertising_50041e0d',
    zl = 'Advertising_base__twoRows_2e4d12dc',
    Hl = 'Advertising_base__threeRows_5439f637',
    Ol = 'Advertising_currency_f20fcad',
    Wl = 'Advertising_currencyValue_18a0b419';
function Gl() {
    const {
        state: t,
        supportedAdvertisements: s,
        bonusMultiplier: n,
        durationInDays: r,
        creditsThreshold: i,
        handleAdvertisement: l,
    } = kl();
    ee(() => {
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
    const o = h.resolve('strings');
    switch (t) {
        case Ii:
            return e.jsx(v, {
                className: Vl,
                path: 'battle_results.common.details.premiumAdvertising.credits',
                params: {
                    bonusCredits: e.jsx(Dl, {
                        withoutPlus: !0,
                        type: 'credits',
                        size: G.small,
                        value: i,
                        classNames: { currency: Ol, value: Wl },
                    }),
                    durationInDays: r,
                },
            });
        case Ai:
            return e.jsx(ae, {
                className: a(Vl, Hl),
                text: o.readOrEmpty('battle_results.common.details.premiumPlus.premium'),
            });
        case Si:
            return e.jsx(ae, {
                className: a(Vl, zl),
                text: o.readOrEmpty('battle_results.common.details.premiumPlus.squad'),
            });
        case Ri:
            return e.jsx(ae, {
                className: a(Vl, Hl),
                text: o.readOrEmpty('battle_results.common.details.premiumAdvertising.bonus'),
                params: { multiplier: n },
            });
        case Ci:
            return e.jsx(ae, {
                className: a(Vl, zl),
                text: o.readOrEmpty('battle_results.common.details.premiumPlus.quests'),
            });
        default:
            return (console.error(`Advertising state ${t} is not supported`), null);
    }
}
const Ml = { base: 'LeftBonusAttempts_a541b0b8', count: 'LeftBonusAttempts_count_24f93d48' };
function Fl({ count: a }) {
    return e.jsx(v, {
        upgradeLegacy: !0,
        params: { count: e.jsx('span', { className: Ml.count, children: y.formatNumber('integral', a) }) },
        path: 'battle_results.common.premiumBonus.bonusLeft',
        className: Ml.base,
    });
}
const $l = {
    base: 'Description_48571438',
    text: 'Description_text_30186c18',
    text__double: 'Description_text__double_333f570f',
};
function Xl({ text: t, displayType: s = 'single', withAttemts: n = !0 }) {
    const { leftBonusAttempts: r } = kl();
    return e.jsxs('div', {
        className: $l.base,
        children: [e.jsx(ae, { text: t, className: a($l.text, $l[`text__${s}`]) }), n && e.jsx(Fl, { count: r })],
    });
}
const Ll = 'PremiumEarnings_d4b9118e',
    Kl = 'PremiumEarnings_wrapper_82e68328',
    ql = 'PremiumEarnings_wrapper__semiTransparent_bb0620c7',
    Yl = 'PremiumEarnings_label_94b3586c',
    Ul = 'PremiumEarnings_label__highlight_7755be2e',
    Zl = 'PremiumEarnings_currencies_d4b9118e',
    Jl = 'PremiumEarnings_currency_3f1396eb',
    Ql = 'PremiumEarnings_value_cbe7ec27';
function eo() {
    const t = h.resolve('strings'),
        { premiumAndStandartEarnings: s } = kl();
    return e.jsxs('div', {
        className: Ll,
        children: [
            e.jsxs('div', {
                className: a(Kl, ql),
                children: [
                    e.jsx('div', {
                        className: Yl,
                        children: t.readOrEmpty('battle_results.common.details.noPremTitle'),
                    }),
                    e.jsxs('div', {
                        className: Zl,
                        children: [
                            e.jsx(Dl, {
                                withoutPlus: !0,
                                size: G.small,
                                type: 'credits',
                                classNames: { currency: Jl, value: Ql },
                                value: s.baseCredits,
                            }),
                            e.jsx(Dl, {
                                withoutPlus: !0,
                                size: G.small,
                                type: 'tankXP',
                                classNames: { currency: Jl, value: Ql },
                                value: s.baseVehicleXP,
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs('div', {
                className: Kl,
                children: [
                    e.jsx('div', {
                        className: a(Yl, Ul),
                        children: t.readOrEmpty('battle_results.common.details.premTitle'),
                    }),
                    e.jsxs('div', {
                        className: Zl,
                        children: [
                            e.jsx(Dl, {
                                withoutPlus: !0,
                                size: G.small,
                                type: 'credits',
                                classNames: { currency: Jl, value: Ql },
                                value: s.premiumCredits,
                            }),
                            e.jsx(Dl, {
                                withoutPlus: !0,
                                size: G.small,
                                type: 'tankXP',
                                classNames: { currency: Jl, value: Ql },
                                value: s.premiumVehicleXP,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const ao = 'PremiumInfoCurrencies_value_5b83491e',
    to = 'PremiumInfoCurrencies_currency_6908b9d9',
    so = S('PremiumInfoCurrencies', 'PremiumInfoCurrencies_8b21f7ee');
function no() {
    const a = M({ size: G.small }, { medium: { size: G.large } }),
        { premiumAndStandartEarnings: t } = kl();
    return e.jsxs(so, {
        children: [
            e.jsx(Dl, { size: a.size, type: 'credits', classNames: { currency: to, value: ao }, value: t.creditsDiff }),
            e.jsx(Dl, {
                size: a.size,
                type: 'tankXP',
                classNames: { currency: to, value: ao },
                value: t.vehicleXPDiff,
            }),
        ],
    });
}
const ro = S('Content'),
    io = t.forwardRef(function (a, t) {
        const { state: s } = kl(),
            n = h.resolve('strings');
        return e.jsx(ro, {
            ...a,
            ref: t,
            children: (() => {
                switch (s) {
                    case _i:
                        return e.jsx(no, {});
                    case fi:
                    case bi:
                    case yi:
                    case Ni:
                    case xi:
                    case ji:
                    case Pi:
                    case ki:
                        return e.jsx(Xl, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.description'),
                            displayType: 'single',
                        });
                    case vi:
                        return e.jsx(Xl, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.rule'),
                            displayType: 'double',
                        });
                    case hi:
                        return e.jsx(Xl, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.expiredBattleResult'),
                            displayType: 'double',
                        });
                    case gi:
                        return e.jsx(Xl, {
                            withAttemts: !1,
                            text: n.readOrEmpty('battle_results.common.premiumBonus.unavailable'),
                            displayType: 'double',
                        });
                    case Bi:
                        return e.jsx(Xl, {
                            withAttemts: !1,
                            text: n.readOrEmpty('battle_results.common.plusBonus.premiumPlusAdd'),
                            displayType: 'double',
                        });
                    case wi:
                        return e.jsx(eo, {});
                    case Ai:
                    case Ii:
                    case Si:
                    case Ri:
                    case Ci:
                        return e.jsx(Gl, {});
                    default:
                        return (console.error(`State ${s} is not supported`), null);
                }
            })(),
        });
    }),
    lo = 'AppliedBonusInfo_910a06bc',
    oo = 'AppliedBonusInfo_icon_208dd0cc';
function co() {
    return e.jsxs('div', {
        className: lo,
        children: [
            e.jsx('div', { className: oo }),
            e.jsx(v, { path: 'battle_results.common.premiumBonus.appliedBonus' }),
        ],
    });
}
const mo = 'ApplyButton_fa337b96',
    uo = 'ApplyButton_button_a471284',
    po = 'ApplyButton_value_c22167ea';
function _o() {
    const a = h.resolve('strings'),
        { bonusXpDiff: t, applyBonus: s } = kl(),
        n = M(
            { iconSize: G.small, buttonSize: te.sizes.small },
            { large: { iconSize: G.large }, extraLarge: { buttonSize: te.sizes.medium } },
        );
    return e.jsxs('div', {
        className: mo,
        children: [
            e.jsx(Dl, { type: 'tankXP', size: n.iconSize, value: t, classNames: { value: po } }),
            e.jsx(te, {
                size: n.buttonSize,
                theme: te.themes.primary,
                className: uo,
                onClick: s,
                soundTarget: 'managable-bonus:apply-button',
                children: a.readOrEmpty('battle_results.common.premiumBonus.applyBonusBtn'),
            }),
        ],
    });
}
const fo = 'PlusEarnings_505f274c',
    bo = 'PlusEarnings_label_79ad021c',
    vo = 'PlusEarnings_link_649208b3',
    ho = 'PlusEarnings_currency_fddc9198',
    go = 'PlusEarnings_value_fe187db9',
    yo = { withWotPlus: 'withWotPlus', withWotPremium: 'withWotPremium' };
const xo = {
    [yo.withWotPlus]: 'battle_results.common.plusBonus.wotPlus',
    [yo.withWotPremium]: 'battle_results.common.plusBonus.wotPremium',
};
function No({ onClick: a }) {
    const t = h.resolve('strings'),
        s = se().breakpoint,
        { wotPlus: n, wotPremium: r, bonusXpDiff: i } = kl(),
        l = (function (e, a) {
            return a && !1 === e ? yo.withWotPlus : e && !1 === a ? yo.withWotPremium : void 0;
        })(n, r);
    if (void 0 !== l)
        return e.jsxs('div', {
            className: fo,
            children: [
                e.jsxs('div', {
                    className: bo,
                    children: [
                        t.readOrEmpty('battle_results.common.plusBonus.bonusLeftAdditionalText'),
                        e.jsx('span', { className: vo, onClick: a, children: t.readOrEmpty(xo[l]) }),
                    ],
                }),
                e.jsx(Dl, {
                    type: 'tankXP',
                    size: s.weight >= ne.medium.weight ? G.large : G.small,
                    value: i,
                    classNames: { currency: ho, value: go },
                }),
            ],
        });
    console.error(`plus earnings state can't have such flag combination: wotPlus: ${n}, wotPremium: ${r}`);
}
const jo = 'PlusYouRock_a108dad8',
    wo = 'PlusYouRock_message_52bfa860',
    Io = 'PlusYouRock_rock_6d6e55b1',
    Ao = 'PlusYouRock_currency_73dcb93a',
    So = 'PlusYouRock_value_daab6eb6';
function Ro() {
    const a = h.resolve('strings'),
        t = se().breakpoint,
        { dailyAppliedAdditionalXP: s } = kl();
    return e.jsxs('div', {
        className: jo,
        children: [
            e.jsxs('div', {
                className: wo,
                children: [
                    e.jsx('span', {
                        className: Io,
                        children: a.readOrEmpty('battle_results.common.plusBonus.youRock'),
                    }),
                    ' ',
                    a.readOrEmpty('battle_results.common.plusBonus.earnedMessage'),
                ],
            }),
            e.jsx(Dl, {
                type: 'tankXP',
                size: t.weight >= ne.medium.weight ? G.large : G.small,
                value: s,
                classNames: { currency: Ao, value: So },
            }),
        ],
    });
}
const Co = {
    base: 'PremiumInfoButton_66b12c2',
    button: 'PremiumInfoButton_button_870d4076',
    buttonHint: 'PremiumInfoButton_buttonHint_1ee6743f',
};
function Bo({ onClick: t, withLabel: s = !1 }) {
    const n = h.resolve('strings'),
        { breakpoint: r } = se(),
        i = r.weight > ne.large.weight ? te.sizes.medium : te.sizes.small;
    return e.jsxs('div', {
        className: a(Co.base, s && Co.base__withLabel),
        children: [
            s &&
                e.jsx('div', {
                    className: Co.buttonHint,
                    children: n.readOrEmpty('battle_results.common.premiumBonus.earnMore'),
                }),
            e.jsx(te, {
                className: Co.button,
                size: s ? te.sizes.small : i,
                theme: te.themes.primary,
                onClick: t,
                soundTarget: 'managable-bonus:premium-info-button',
                children: n.readOrEmpty('battle_results.common.details.getPremBtn'),
            }),
        ],
    });
}
const Po = 'Restriction_8b730e49',
    ko = 'Restriction_iconWrapper_ac9b1b94',
    Eo = 'Restriction_icon_ef5c0819',
    To = 'Restriction_formattedText_b2d2b647';
function Do({ path: a, tooltipParams: t }) {
    const s = g(t);
    return e.jsx('div', {
        className: Po,
        children: e.jsx(v, {
            path: a,
            className: To,
            params: {
                info: e.jsx('span', {
                    ...s,
                    className: ko,
                    children: e.jsx(re, { path: 'post_battle.info', className: Eo }),
                }),
            },
        }),
    });
}
const Vo = S('Footer'),
    zo = t.forwardRef(function (a, t) {
        const { state: s, showBonusDetails: n } = kl(),
            r = h.resolve('strings');
        return e.jsx(Vo, {
            ...a,
            ref: t,
            children: (() => {
                switch (s) {
                    case _i:
                        return e.jsx(Bo, { withLabel: !0, onClick: n });
                    case fi:
                        return e.jsx(_o, {});
                    case bi:
                        return e.jsx(co, {});
                    case yi:
                        return e.jsx(Do, {
                            path: 'battle_results.common.premiumBonus.tankStateChangedWithInfo',
                            tooltipParams: {
                                header: r.readOrEmpty('tooltips.battleResults.premiumBonus.tankStateChanged.header'),
                                body: r.readOrEmpty('tooltips.battleResults.premiumBonus.tankStateChanged.body'),
                            },
                        });
                    case Ni:
                        return e.jsx(Do, {
                            path: 'battle_results.common.premiumBonus.isXPToTmenEnabledWithInfo',
                            tooltipParams: {
                                body: r.readOrEmpty('tooltips.battleResults.premiumBonus.xpToTmenChanged.body'),
                            },
                        });
                    case xi:
                        return e.jsx(Do, {
                            path: 'battle_results.common.premiumBonus.isXPToTmenDisabledWithInfo',
                            tooltipParams: {
                                body: r.readOrEmpty('tooltips.battleResults.premiumBonus.xpToTmenChanged.body'),
                            },
                        });
                    case ji:
                        return e.jsx(Do, {
                            path: 'battle_results.common.premiumBonus.tankmenStateChangedWithInfo',
                            tooltipParams: {
                                header: r.readOrEmpty('tooltips.battleResults.premiumBonus.tankmenStateChanged.header'),
                                body: r.readOrEmpty('tooltips.battleResults.premiumBonus.tankmenStateChanged.body'),
                            },
                        });
                    case Bi:
                        return e.jsx(Bo, { onClick: n });
                    case Pi:
                        return e.jsx(No, { onClick: n });
                    case ki:
                        return e.jsx(Ro, {});
                    case Ii:
                    case Ai:
                    case Si:
                    case Ri:
                    case Ci:
                        return e.jsx(Bo, { onClick: n });
                    default:
                        return null;
                }
            })(),
        });
    }),
    Ho = {
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
    Oo = S('Header'),
    Wo = t.forwardRef(function ({ className: t, classNames: s, ...n }, r) {
        const { state: i, bonusMultiplier: l } = kl(),
            o = h
                .resolve('strings')
                .readOrEmpty('battle_results.common.premiumBonus.bonusMultiplier')
                .replace('{{value}}', l.toString());
        return e.jsx(Oo, {
            ref: r,
            className: a(Ho[`base__${i}`], t),
            ...n,
            children: e.jsx('div', {
                className: a(Ho.icon, null == s ? void 0 : s.icon),
                children: e.jsx(ie, {
                    classNames: {
                        base: Ho.bonusMultiplier,
                        text: Ho.text,
                        textOverlay: a(Ho.text, Ho.text__textOverlay),
                    },
                    children: o,
                }),
            }),
        });
    }),
    Go = S('ManagableBonus', 'ManagableBonus_55c8d52d'),
    Mo = t.memo(Go);
((Mo.Header = Wo), (Mo.Content = io), (Mo.Footer = zo));
const Fo = {
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
function $o({ className: t }) {
    const { state: s } = kl(),
        { completedSteps: n } = ya();
    return e.jsxs(Mo, {
        className: a(Fo.bonus, Fo[`bonus__${s}`], !1 === n.has(ba.third) && Fo.bonus__disabled, t),
        children: [
            e.jsx(Mo.Header, {}),
            e.jsx(Mo.Content, { className: Fo.content }),
            e.jsx(Mo.Footer, { className: Fo.footer }),
        ],
    });
}
const Xo = 'AnimatedNumber_958fc84e',
    Lo = 'AnimatedNumber_slotMachineDigit_a9587a5a',
    Ko = 'AnimatedNumber_plugChar_c66678',
    qo = 'AnimatedNumber_digitsList_2065427d',
    Yo = w.cubicBezier(0.33, 0, 0.25, 1);
function Uo({ symbol: a, step: s, delay: n, first: r, handleFirstRest: i }) {
    const [l, o] = t.useState(!1),
        [c, d] = p(() => ({ from: { y: 0, opacity: 0 } })),
        m = /^\d$/.test(a);
    const _ = m ? parseInt(a) : 1;
    return (
        t.useEffect(() => {
            l && r && i();
        }, [l, r, i]),
        t.useEffect(() => {
            s > 0 &&
                d.start({
                    delay: l ? 0 : n,
                    from: { y: s, opacity: 1 },
                    to: { y: -_ * s, opacity: 1 },
                    config: { duration: 600, easing: Yo },
                    immediate: l,
                    onRest() {
                        o(!0);
                    },
                });
        }, [s, d, l, n, _]),
        e.jsxs('div', {
            className: Lo,
            children: [
                e.jsx('div', { className: Ko, children: a }),
                e.jsx(u.div, {
                    style: c,
                    className: qo,
                    children: ce(0, _ + 1, (t) =>
                        m
                            ? e.jsx('div', { children: t }, t)
                            : e.jsx('div', { style: { height: s }, children: t > 0 ? a : null }, t),
                    ),
                }),
            ],
        })
    );
}
const Zo = t.memo(function ({ value: s, readyToAnimate: n, className: r, handleAnimationFinished: i, type: l }) {
        const [o, c] = le(),
            d = t.useMemo(() => s.split(''), [s]),
            m = t.useCallback(() => i(l), [i, l]);
        return e.jsx('div', {
            ref: o,
            className: a(Xo, r),
            children: d.map((a, t) =>
                e.jsx(
                    Uo,
                    {
                        first: 0 === t,
                        handleFirstRest: m,
                        delay: 200 * (d.length - t),
                        symbol: a,
                        step: c.type === oe.measured && n ? c.size.height : 0,
                    },
                    `${s}-${t}`,
                ),
            ),
        });
    }),
    Jo = 'Currency_10720e2d',
    Qo = 'Currency_icon_4d923f64',
    ec = 'Currency_icon__visible_9c676b12',
    ac = 'Currency_value_b21680b3',
    tc = { xp: 'tankXP', crystal: 'crystal', credits: 'credits', gold: 'gold' },
    sc = Object.keys(tc);
function nc({ type: t, value: s, size: n, visibleIfZero: r, readyToAnimate: i, handleAnimationFinished: l }) {
    return ((e) => sc.includes(e))(t)
        ? 0 !== s || r
            ? e.jsx(W, {
                  reverse: !0,
                  type: tc[t],
                  size: n,
                  className: Jo,
                  classNames: { icon: a(Qo, i && ec) },
                  children: e.jsx(Zo, {
                      className: ac,
                      readyToAnimate: i,
                      type: t,
                      handleAnimationFinished: l,
                      value: y.formatNumber(t === de.gold ? 'gold' : 'integral', s),
                  }),
              })
            : null
        : (console.error(`There is no such currency in the template literal: ${t}`), null);
}
const rc = S('Currencies', 'Currencies_5b11a533'),
    ic = r(function ({ className: a }) {
        const [s, n] = t.useState(!1),
            [r, i] = t.useState(new Set()),
            { model: l } = rl(),
            o = l.computes.earnedCurrencies(),
            c = l.additionalBonus.get(),
            d = me(o),
            m = j(),
            { step: u } = ya(),
            p = M({ value: G.medium }, { medium: { value: G.large }, large: { value: G.extraLarge } });
        (t.useEffect(() => {
            void 0 !== d && d !== o && m.play('startRolling', { target: 'overview:currencies' });
        }, [o, d, m]),
            t.useEffect(() => {
                u === ba.third && (n(!0), m.play('startRolling', { target: 'overview:currencies' }));
            }, [u, m]),
            t.useEffect(() => {
                r.size === o.filter(({ value: e, visibleIfZero: a }) => e > 0 || a).length &&
                    (m.play('stopRolling', { target: 'overview:currencies' }),
                    c.bonusState === mi.PremiumBonus && c.restriction === di.NoRestriction && i((e) => ue(e, 'xp')));
            }, [r, o, m, c.bonusState, c.restriction]));
        const _ = t.useCallback(function (e) {
            i((a) => I(a, e));
        }, []);
        return e.jsx(rc, {
            className: a,
            children: E(o, (a) =>
                e.jsx(nc, { readyToAnimate: s, size: p.value, handleAnimationFinished: _, ...a }, a.type),
            ),
        });
    }),
    lc = 'Overview_flare_5277bd9e',
    oc = 'Overview_vignette_ff9b1e99',
    cc = 'Overview_b4108a3c',
    dc = 'Overview_info_fa4e7011',
    mc = 'Overview_info__withoutMedals_6be29b19',
    uc = 'Overview_statusWrapper_cda9b438',
    pc = 'Overview_status_1c902a82',
    _c = 'Overview_statusText_26db019c',
    fc = 'Overview_achievements_5b2b6582',
    bc = 'Overview_dividerWrapper_25de8b48',
    vc = 'Overview_divider_652a671e',
    hc = 'Overview_dividerImage_2a8a0c0e',
    gc = 'Overview_currencies_d637d5d',
    yc = 'Overview_bonus_30af9d4',
    xc = h.resolve('images');
function Nc({ winStatus: e, epicFlare: a }) {
    return e === ta
        ? a
            ? 'post_battle.epic_victory_flare'
            : 'post_battle.no_epic_victory_flare'
        : a
          ? 'post_battle.epic_draw_defeat_flare'
          : 'post_battle.no_epic_draw_defeat_flare';
}
const jc = r(function () {
        var a;
        const { model: s } = rl(),
            { active: n } = pe(),
            [{ x: r }, i] = p(() => ({ x: 0 })),
            l = null == (a = s.battleInfo.get()) ? void 0 : a.status,
            o = s.computes.hasSpeialMedals(),
            c = t.useRef(null);
        return (
            t.useEffect(() => {
                if (n === aa.personal)
                    return _e.move(function ([e]) {
                        const a = fe().width,
                            t = 2 * (e.clientX / a - 0.5);
                        i.start({ x: 3 * t });
                    });
            }),
            e.jsx(u.div, {
                ref: c,
                className: lc,
                style: {
                    backgroundImage: `url(${xc.readOrEmpty(Nc({ winStatus: l, epicFlare: o }))})`,
                    backgroundPosition: r.to((e) => `${50 + e}% center`),
                },
            })
        );
    }),
    wc = t.createContext(null);
function Ic() {
    const e = t.useContext(wc);
    if (null === e)
        throw new Error('You can use the expandable overlay hooks only with the ExpandableOverlay widget component');
    return e;
}
function Ac({ children: a, visible: s, changeVisible: n, closedPosition: r, animationProps: i }) {
    const [l, o] = t.useState(s ?? !1),
        [c, d] = p(() => ({ ...i, y: l ? '0' : r, backgroundColor: l ? 'rgba(18, 19, 22, 0.8)' : 'transparent' })),
        [m, u] = p(() => ({ opacity: l ? 1 : 0 })),
        [_, f] = p(() => ({ x: '-50%', y: '0', rotate: 180, opacity: 1 }));
    (t.useLayoutEffect(() => {
        void 0 !== s && o(s);
    }, [s]),
        t.useEffect(() => {
            null == n || n(l);
        }, [l, n]));
    const b = t.useMemo(
        () => ({
            opened: l,
            closedPosition: r,
            animationProps: i,
            handleOpen: o,
            overlayStyles: c,
            overlayApi: d,
            shadowStyles: m,
            shadowApi: u,
            arrowStyles: _,
            arrowStylesApi: f,
        }),
        [l, r, i, o, c, d, m, u, _, f],
    );
    return e.jsx(wc.Provider, { value: b, children: a });
}
const Sc = 'HintKey_keyButton_e4149405',
    Rc = 'HintKey_background_e4149405',
    Cc = 'HintKey_border_71616e63',
    Bc = 'HintKey_content_63ecef8',
    Pc = 'HintKey_triangle_fb0bc682',
    kc = 'HintKey_triangleNoise_6e72dfca',
    Ec = S('PersoanlEfficiencyHintKey', 'HintKey_2efc42a0');
const Tc = {
        base: 'OverlayDivider_fcc0c30',
        divider: 'OverlayDivider_divider_1acaec30',
        divider__right: 'OverlayDivider_divider__right_546d0e74',
        base__closed: 'OverlayDivider_base__closed_ceb65522',
        dividerImageElement: 'OverlayDivider_dividerImageElement_9babecb0',
    },
    Dc = t.forwardRef(function ({ className: t, classNames: s }, n) {
        var r, i, l, o, c, d;
        const { opened: m } = Ic();
        return e.jsxs('div', {
            ref: n,
            className: a(Tc.base, !m && Tc.base__closed, null == s ? void 0 : s.base, t),
            children: [
                e.jsx(ja, {
                    classNames: {
                        base: a(
                            Tc.divider,
                            Tc.divider__left,
                            null == (r = null == s ? void 0 : s.divider) ? void 0 : r.base,
                        ),
                        image: a(
                            Tc.dividerImageElement,
                            null == (i = null == s ? void 0 : s.divider) ? void 0 : i.image,
                        ),
                    },
                }),
                e.jsx(ja, {
                    classNames: {
                        base: a(
                            Tc.divider,
                            Tc.divider__right,
                            null == (l = null == s ? void 0 : s.divider) ? void 0 : l.base,
                            null == (o = null == s ? void 0 : s.rightDivider) ? void 0 : o.base,
                        ),
                        image: a(
                            Tc.dividerImageElement,
                            null == (c = null == s ? void 0 : s.divider) ? void 0 : c.image,
                            null == (d = null == s ? void 0 : s.rightDivider) ? void 0 : d.image,
                        ),
                    },
                }),
            ],
        });
    }),
    Vc = 'ExpandableOverlay_7ce5a85e',
    zc = 'ExpandableOverlay_base__opened_7d677539',
    Hc = 'ExpandableOverlay_shadow_a52d16ce',
    Oc = t.forwardRef(function ({ children: s }, n) {
        const { opened: r, handleOpen: i, overlayStyles: l, shadowStyles: o } = Ic(),
            c = j();
        return (
            t.useEffect(() => {
                function e(e) {
                    (i(!1), r && c.play('closeOverlay', { original: e, target: 'expandable-overlay' }));
                }
                return (document.addEventListener('click', e), () => document.removeEventListener('click', e));
            }, [r, c, i]),
            e.jsxs(u.div, {
                ref: n,
                'data-name': 'ExpandableOverlay',
                className: a(Vc, r && zc),
                style: l,
                onClick: function (e) {
                    (e.stopPropagation(),
                        !1 === r &&
                            (c.play('click', { original: e, target: 'expandable-overlay' }),
                            c.play('openOverlay', { original: e, target: 'expandable-overlay' }),
                            i(!0)));
                },
                children: [e.jsx(u.div, { className: Hc, style: o }), s],
            })
        );
    });
((Oc.HintKey = function ({
    disabled: t,
    throttleDelay: s = 600,
    classNames: n,
    keyCode: r = he.SPACE,
    triangleNoisePath: i = 'post_battle.noise',
}) {
    var l, o, c;
    const { handleOpen: d, arrowStyles: m } = Ic(),
        p = j(),
        _ = be(
            (e) => {
                t ||
                    (p.play('click', { original: e, target: 'expandable-overlay:hint-key' }),
                    d(
                        (a) => (
                            p.play(a ? 'closeOverlay' : 'openOverlay', {
                                original: e,
                                target: 'expandable-overlay:hint-key',
                            }),
                            !a
                        ),
                    ));
            },
            [t, d, p],
            s,
        );
    return e.jsx(e.Fragment, {
        children: e.jsxs(Ec, {
            className: null == n ? void 0 : n.base,
            onClick: (e) => {
                (e.stopPropagation(),
                    d(
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
                e.jsx(ve, {
                    keyCode: r,
                    classNames: {
                        base: a(Sc, null == n ? void 0 : n.keyButton),
                        background: a(Rc, null == (l = null == n ? void 0 : n.keyButton) ? void 0 : l.background),
                        content: a(Bc, null == (o = null == n ? void 0 : n.keyButton) ? void 0 : o.content),
                        border: a(Cc, null == (c = null == n ? void 0 : n.keyButton) ? void 0 : c.border),
                    },
                    soundTarget: 'expandable-overlay:hint-key',
                    onActive: _,
                    children: e.jsx(ve.Code, {}),
                }),
                e.jsx(u.div, {
                    className: a(Pc, null == n ? void 0 : n.triangle),
                    style: m,
                    children: e.jsx(A, {
                        fit: 'cover',
                        path: i,
                        className: a(kc, null == n ? void 0 : n.triangleNoise),
                    }),
                }),
            ],
        }),
    });
}),
    (Oc.OverlayDivider = Dc));
const Wc = 'BodyRow_b47fe37f',
    Gc = 'BodyRow_rowDivider_eb49c679',
    Mc = 'BodyRow_rowDividerImage_d852c3da';
function Fc({ classNames: s, row: n, rowIndex: r }) {
    var i, l;
    const o = ge({ args: { vehicleCD: n.original.vehicle.vehicleCD, databaseID: n.original.databaseId } });
    return t.createElement(
        ye.Row,
        { ...o, key: n.id, className: a(Wc, null == s ? void 0 : s.row) },
        E(n.getVisibleCells(), (a, t) =>
            e.jsx(
                ye.Cell,
                {
                    className: null == s ? void 0 : s.cell,
                    cell: { ...a, rowIndex: r, index: t, tablePart: xe.body },
                    children: _(a.column.columnDef.cell, a.getContext()),
                },
                a.id,
            ),
        ),
        e.jsx(ja, {
            classNames: {
                base: a(Gc, null == (i = null == s ? void 0 : s.divider) ? void 0 : i.base),
                image: a(Mc, null == (l = null == s ? void 0 : s.divider) ? void 0 : l.image),
            },
        }),
    );
}
const $c = {
        base: 'TableBody_4f65af24',
        scrollBar: 'TableBody_scrollBar_14038cca',
        scrollAreaContent: 'TableBody_scrollAreaContent_4a80f86c',
        mask: 'TableBody_mask_c5bcd0ad',
        rowDivider: 'TableBody_rowDivider_c1a3ebdc',
        rowDividerImage: 'TableBody_rowDividerImage_b0363e26',
    },
    Xc = t.memo(function ({ classNames: s, children: n }) {
        var r, i, l, o, c, d, m, _;
        const { table: f } = Ne(),
            b = je(),
            { api: v } = P();
        (we(he.ARROW_UP, () => {
            v.applyStepTo(Ie.Next);
        }),
            we(he.ARROW_DOWN, () => {
                v.applyStepTo(Ie.Prev);
            }));
        const [h, g] = p(() => ({ from: { maskSize: '100% 100%' } }));
        return (
            t.useEffect(() => {
                function e() {
                    b.run(() => {
                        !(function () {
                            const [, e] = v.getBounds(),
                                a = (v.animationScroll.scrollPosition.get() / e) * 7;
                            g.start({ to: { maskSize: `100% ${e > 0 ? 100 + a : 107}%` } });
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
            }, [v, b, g]),
            e.jsxs(ye.Body, {
                className: a($c.base, null == s ? void 0 : s.base),
                children: [
                    e.jsxs(u.div, {
                        className: $c.mask,
                        style: h,
                        children: [
                            e.jsx(ja, {
                                classNames: {
                                    base: a(
                                        $c.rowDivider,
                                        null == (r = null == s ? void 0 : s.divider) ? void 0 : r.base,
                                    ),
                                    image: a(
                                        $c.rowDividerImage,
                                        null == (i = null == s ? void 0 : s.divider) ? void 0 : i.image,
                                    ),
                                },
                            }),
                            e.jsxs(k, {
                                classNames: {
                                    ...(null == (l = null == s ? void 0 : s.scroll) ? void 0 : l.area),
                                    wrapper: $c.scrollWrapper,
                                    content: a(
                                        $c.scrollAreaContent,
                                        null == (c = null == (o = null == s ? void 0 : s.scroll) ? void 0 : o.area)
                                            ? void 0
                                            : c.content,
                                    ),
                                },
                                children: [
                                    E(f.getRowModel().rows, (a, t) =>
                                        e.jsx(
                                            Fc,
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
                                    n,
                                ],
                            }),
                        ],
                    }),
                    e.jsx(B, {
                        classNames: {
                            ...(null == (d = null == s ? void 0 : s.scroll) ? void 0 : d.bar),
                            base: a(
                                $c.scrollBar,
                                null == (_ = null == (m = null == s ? void 0 : s.scroll) ? void 0 : m.bar)
                                    ? void 0
                                    : _.base,
                            ),
                        },
                    }),
                ],
            })
        );
    }),
    Lc = 'TableFooter_40e98711',
    Kc = 'TableFooter_row_41aedfc2',
    qc = t.memo(function ({ classNames: t }) {
        const { table: s } = Ne();
        return e.jsx(ye.Footer, {
            className: a(Lc, null == t ? void 0 : t.base),
            children: E(s.getFooterGroups(), (s, n) =>
                e.jsx(
                    ye.Row,
                    {
                        className: a(Kc, null == t ? void 0 : t.row),
                        children: E(s.headers, (a, s) =>
                            e.jsx(
                                ye.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: null == t ? void 0 : t.cell,
                                    cell: { ...a, rowIndex: n, index: s, tablePart: xe.footer },
                                    children: !a.isPlaceholder && _(a.column.columnDef.footer, a.getContext()),
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
    Yc = 'TableHeader_row_a81d3e65',
    Uc = t.memo(function ({ classNames: t }) {
        const { table: s } = Ne();
        return e.jsx(ye.Header, {
            className: null == t ? void 0 : t.base,
            children: E(s.getHeaderGroups(), (s, n) =>
                e.jsx(
                    ye.Row,
                    {
                        className: a(Yc, null == t ? void 0 : t.row),
                        children: E(s.headers, (a, s) =>
                            e.jsx(
                                ye.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: null == t ? void 0 : t.cell,
                                    cell: { ...a, rowIndex: n, index: s, tablePart: xe.header },
                                    children: !a.isPlaceholder && _(a.column.columnDef.header, a.getContext()),
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
    Zc = {
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
    Jc = '',
    Qc = '',
    ed = {
        [Zc.targetKills]: 'library.crossed_tank',
        [Zc.damageDealt]: 'library.cross_with_gap',
        [Zc.damageBlockedByArmor]: 'library.blocked',
        [Zc.damageAssisted]: 'library.double_target',
        [Zc.damageAssistedStun]: 'library.arrow_with_fading',
        [Zc.spotted]: 'library.eyebrow',
        [Zc.criticalDamage]: 'library.gear_with_gap',
    };
const ad = t.createContext(null);
function td() {
    const e = t.useContext(ad);
    if (null === e)
        throw new Error('You can use the personal efficiency hooks only with the PersonalEfficiency widget component');
    return e;
}
function sd({ iconsConfig: a, children: s }) {
    const n = t.useMemo(() => ({ iconsConfig: { ...ed, ...(a || {}) } }), [a]);
    return e.jsx(ad.Provider, { value: n, children: s });
}
const nd = function ({
    data: a,
    className: s,
    children: n,
    columnOrder: r,
    columnVisibility: i,
    config: l,
    iconsConfig: o,
}) {
    const c = se(),
        d = t.useMemo(() => ({ columnOrder: r, columnVisibility: i }), [r, i]);
    return e.jsx(sd, {
        iconsConfig: o,
        children: e.jsx(Ae, {
            columns: l,
            data: a.rows,
            enableMultiRowSelection: !1,
            getRowId: (e) => e.account.username,
            initialState: d,
            children: e.jsx(ye, { className: s, children: e.jsx(C, { children: n }) }, c.breakpoint.name),
        }),
    });
};
((nd.Header = Uc), (nd.Body = Xc), (nd.Footer = qc));
const rd = { behaviour: Se.contentResponsive, minSize: '0rem', maxSize: '1000rem' },
    id = {
        [Zc.account]: {
            [Re.extraSmall]: { behaviour: Se.static, size: '200rem' },
            [Re.medium]: { behaviour: Se.static, size: '200rem' },
            [Re.large]: { behaviour: Se.static, size: '200rem' },
            [Re.extraLarge]: { behaviour: Se.static, size: '229rem' },
        },
        [Zc.vehicle]: {
            [Re.extraSmall]: { behaviour: Se.static, size: '182rem' },
            [Re.medium]: { behaviour: Se.static, size: '186rem' },
            [Re.large]: { behaviour: Se.static, size: '216rem' },
            [Re.extraLarge]: { behaviour: Se.static, size: '239rem' },
        },
    },
    ld = 0,
    od = {
        accountInfo: 'AccountInfoCell_accountInfo_4ab27ccb',
        accountName: 'AccountInfoCell_accountName_3a2352e5',
        clanAbbreviation: 'AccountInfoCell_clanAbbreviation_99f1cc86',
        gap: 'AccountInfoCell_gap_4a30913b',
        anonymizerIcon: 'AccountInfoCell_anonymizerIcon_f71ac22',
        badge: 'AccountInfoCell_badge_711d01c5',
    };
function cd({ account: t }) {
    return e.jsxs(Ce, {
        className: od.accountInfo,
        children: [
            e.jsx('div', {
                className: a(od.badge, od.gap),
                children:
                    t.badge !== Jc &&
                    e.jsx(Ce.Badge, { size: Ce.Badge.sizes.x24x24, badgeId: t.badge, className: od.gap }),
            }),
            e.jsx(Ce.Name, {
                className: a(od.accountName, od.gap),
                children: e.jsx(Be, { text: t.anonymizer ? t.fakeUsername : t.username }),
            }),
            t.clanAbbreviation !== Qc &&
                !t.anonymizer &&
                e.jsx(Ce.ClanTag, {
                    className: a(od.clanAbbreviation, od.gap),
                    children: e.jsx(v, {
                        path: 'common.clanTag',
                        params: { abbrev: t.clanAbbreviation },
                        brackets: { start: '{', end: '}' },
                    }),
                }),
            t.igrType !== ld && e.jsx(Ce.IgrIcon, { size: Ce.IgrIcon.sizes.x34x16, className: od.gap }),
            t.suffixBadge !== Jc &&
                e.jsx(Ce.Stripe, { size: Ce.Stripe.sizes.default, badgeId: t.suffixBadge, className: od.gap }),
            t.anonymizer &&
                e.jsx(Ce.AnonymizerIcon, { size: Ce.AnonymizerIcon.sizes.x24x24, className: od.anonymizerIcon }),
        ],
    });
}
const dd = 'capturePoints',
    md = 'droppedCapturePoints',
    ud = {
        base: 'BaseCapture_4cb6b6d6',
        icon: 'BaseCapture_icon_d32c372c',
        label: 'BaseCapture_label_8bdb9b9c',
        wrapper: 'BaseCapture_wrapper_c1a0082e',
    };
function pd({ assault: t, defend: s, classNames: n, className: r }) {
    const i = h.resolve('strings'),
        l = h.resolve('views'),
        o = Pe({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { paramType: dd },
        }),
        c = Pe({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { paramType: md },
        });
    return e.jsxs('div', {
        className: a(ud.base, r),
        children: [
            e.jsx('div', {
                className: a(ud.label, null == n ? void 0 : n.label),
                children: i.readOrEmpty('battle_results.common.battleEfficiency.baseCapture'),
            }),
            e.jsxs('div', {
                ...o,
                className: ud.wrapper,
                children: [
                    e.jsx('div', { className: a(ud.value, null == n ? void 0 : n.value), children: t }),
                    e.jsx(A, {
                        path: 'post_battle.assault',
                        width: '32rem',
                        height: '32rem',
                        className: a(ud.icon, null == n ? void 0 : n.icon),
                    }),
                ],
            }),
            e.jsxs('div', {
                ...c,
                className: ud.wrapper,
                children: [
                    e.jsx('div', { className: a(ud.value, null == n ? void 0 : n.value), children: s }),
                    e.jsx(A, {
                        path: 'post_battle.defend',
                        width: '32rem',
                        height: '32rem',
                        className: a(ud.icon, null == n ? void 0 : n.icon),
                    }),
                ],
            }),
        ],
    });
}
const _d = {
    cellWithValue: 'HeaderCell_cellWithValue_78949e6d',
    cellWithValue__totalInfo: 'HeaderCell_cellWithValue__totalInfo_789bf7be',
    cellWithValue__zeroIndent: 'HeaderCell_cellWithValue__zeroIndent_334269c9',
    wrapper: 'HeaderCell_wrapper_7849c6a',
    imageWrapper: 'HeaderCell_imageWrapper_a570c717',
    value: 'HeaderCell_value_f7bb7c82',
    cellWithText: 'HeaderCell_cellWithText_710c47ce',
    text: 'HeaderCell_text_35220206',
};
function fd({ info: t, name: s, className: n }) {
    const { iconsConfig: r } = td(),
        i = h.resolve('views'),
        l = Pe({
            contentId: i.read((e) =>
                s === Zc.criticalDamage
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { paramType: s },
        }),
        o = T(
            t.table.getRowModel().rows,
            (e, a) => {
                const t = a.getValue(s),
                    n = ke(t) ? t : t.value;
                return e + (s === Zc.spotted && n > 0 ? 1 : n);
            },
            0,
        ),
        c = r[s] ?? '';
    return e.jsx('div', {
        className: a(_d.cellWithValue, n),
        children: e.jsxs('div', {
            ...l,
            className: _d.wrapper,
            children: [
                e.jsx('div', { className: _d.value, children: y.formatNumber('integral', o) }),
                e.jsx('div', {
                    className: _d.imageWrapper,
                    children: e.jsx(A, { width: '100%', height: '100%', path: c }),
                }),
            ],
        }),
    });
}
function bd({ name: a, info: t, className: s }) {
    const n = h.resolve('strings');
    switch (a) {
        case Zc.targetKills:
        case Zc.damageDealt:
        case Zc.damageBlockedByArmor:
        case Zc.damageAssisted:
        case Zc.damageAssistedStun:
        case Zc.spotted:
        case Zc.criticalDamage:
            return void 0 !== t ? e.jsx(fd, { name: a, info: t, className: s }) : null;
        case Zc.account:
            return e.jsx('div', {
                className: _d.cellWithText,
                children: e.jsx('div', {
                    className: _d.text,
                    children: n.readOrEmpty('battle_results.common.battleEfficiency.uppercased_title'),
                }),
            });
        default:
            return (console.error(`Unknown column ${a}`), null);
    }
}
const vd = { base: 'IconCell_99b0caec' };
function hd({ value: t, name: s, userName: n, className: r }) {
    const { iconsConfig: i } = td(),
        l = h.resolve('views'),
        o = Pe({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { userName: n, paramType: s },
        });
    if (0 === t) return null;
    const c = i[s] ?? '';
    return e.jsx('div', {
        ...o,
        className: a(vd.base, r),
        children: e.jsx(A, { width: '32rem', height: '32rem', path: c }),
    });
}
const gd = { base: 'NumberCell_c62bf499' };
function yd({ value: t, userName: s, name: n, className: r }) {
    const i = h.resolve('views'),
        l = Pe({
            contentId: i.read((e) =>
                n === Zc.criticalDamage
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { userName: s, paramType: n },
        });
    return 0 === t ? null : e.jsx('div', { ...l, className: a(gd.base, r), children: y.formatNumber('integral', t) });
}
const xd = {
        base: 'NumberWithCounterCell_f729c44',
        counter: 'NumberWithCounterCell_counter_8bb0eb59',
        counter__hidden: 'NumberWithCounterCell_counter__hidden_468e7d52',
        counterValue: 'NumberWithCounterCell_counterValue_566cc1fa',
        roundedCount: 'NumberWithCounterCell_roundedCount_c97dad37',
    },
    Nd = 1e3,
    jd = 99,
    wd = 2;
function Id({ count: a }) {
    const t = g({ body: a.toString() }),
        s = (n = a) < Nd ? n : Math.floor(n / 1e3);
    var n;
    return e.jsx('div', {
        className: xd.counterValue,
        children:
            s === a
                ? a
                : e.jsx('div', {
                      ...t,
                      className: xd.roundedCount,
                      children: e.jsx(v, {
                          path: 'common.numberAbbrev',
                          params: { value: y.formatNumber('integral', Math.min(s, jd)) },
                      }),
                  }),
    });
}
function Ad({ value: t, count: s, name: n, userName: r, className: i }) {
    const { iconsConfig: l } = td(),
        o = h.resolve('views'),
        c = Pe({
            contentId: o.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { userName: r, paramType: n },
        });
    if (0 === t && 0 === s) return null;
    const d = l[n] ?? '';
    return e.jsxs('div', {
        ...c,
        className: a(xd.base, i),
        children: [
            t > 0 && y.formatNumber('integral', t),
            e.jsxs('div', {
                className: a(xd.counter, 0 === s && xd.counter__hidden),
                children: [
                    e.jsx(A, { className: xd.icon, width: '32rem', height: '32rem', path: d }),
                    s >= wd && e.jsx(Id, { count: s }),
                ],
            }),
        ],
    });
}
const Sd = {
    base: 'VehicleCell_2823d754',
    imageWrapper: 'VehicleCell_imageWrapper_f0d20784',
    typeWrapper: 'VehicleCell_typeWrapper_1232db26',
    level: 'VehicleCell_level_3970ad9d',
    name: 'VehicleCell_name_755dfe36',
};
function Rd({ vehicle: a }) {
    return e.jsxs('div', {
        className: Sd.base,
        children: [
            e.jsx('div', {
                className: Sd.imageWrapper,
                children: e.jsx(Ee, { size: Ee.size.x120x96, name: a.techName }),
            }),
            e.jsx(Te, { value: a.tier, className: Sd.level }),
            e.jsx('div', { className: Sd.typeWrapper, children: e.jsx(De, { size: 'x24x24', type: a.type }) }),
            e.jsx('div', { className: Sd.name, children: e.jsx(Be, { text: a.name }) }),
        ],
    });
}
const Cd = 'Index_align_5032d1bf',
    Bd = 'Index_align__right_9d371d4f',
    Pd = 'Index_align__left_7938cc',
    kd = 'Index_offsetCell_c4e68915',
    Ed = 'Index_offsetCell__number_2c760167',
    Td = f();
function Dd() {
    return [
        Td.accessor('killed', {
            id: Zc.targetKills,
            header: (t) =>
                e.jsx(bd, {
                    info: t,
                    name: Zc.targetKills,
                    className: a(_d.cellWithValue__totalInfo, _d.cellWithValue__zeroIndent),
                }),
            enableSorting: !1,
            meta: { column: rd, className: a(Cd, Bd) },
        }),
        Td.accessor('damageDealt', {
            id: Zc.damageDealt,
            header: (a) => e.jsx(bd, { info: a, name: Zc.damageDealt, className: _d.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Cd, Bd), column: rd },
        }),
        Td.accessor('damageBlockedByArmor', {
            id: Zc.damageBlockedByArmor,
            header: (a) =>
                e.jsx(bd, { info: a, name: Zc.damageBlockedByArmor, className: _d.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Cd, Bd), column: rd },
        }),
        Td.accessor('damageAssisted', {
            id: Zc.damageAssisted,
            header: (a) => e.jsx(bd, { info: a, name: Zc.damageAssisted, className: _d.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Cd, Bd), column: rd },
        }),
        Td.accessor('damageAssistedStun', {
            id: Zc.damageAssistedStun,
            header: (a) => e.jsx(bd, { info: a, name: Zc.damageAssistedStun, className: _d.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Cd, Bd), column: rd },
        }),
        Td.accessor('spotted', {
            id: Zc.spotted,
            header: (a) => e.jsx(bd, { info: a, name: Zc.spotted, className: _d.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Cd, Bd), column: rd },
        }),
        Td.accessor('criticalDamage', {
            id: Zc.criticalDamage,
            header: (a) => e.jsx(bd, { info: a, name: Zc.criticalDamage, className: _d.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(Cd, Bd), column: rd },
        }),
    ];
}
const Vd = 'PersonalEfficiency_table_1104dbe8',
    zd = 'PersonalEfficiency_table__closed_589e70ab',
    Hd = 'PersonalEfficiency_hintKey_f91859a5',
    Od = 'PersonalEfficiency_messagesPanel_d1b1fa0b',
    Wd = 'PersonalEfficiency_message_d772bbd7',
    Gd = 'PersonalEfficiency_expandableOverlayWrapper_a5a56a5d',
    Md = 'PersonalEfficiency_expandableOverlayWrapper__hidden_97a3493d',
    Fd = 'PersonalEfficiency_expandableOverlayWrapper__notInteractive_598241cc',
    $d = 'PersonalEfficiency_scrollableArea_c747d607',
    Xd = 'PersonalEfficiency_scrollableArea__nonInteractive_589e70ab',
    Ld = 'PersonalEfficiency_totalEfficiency_eb2592a8',
    Kd = 'PersonalEfficiency_totalEfficiency__notInteractive_4b33f28d',
    qd = 'PersonalEfficiency_totalEfficiencyTable_9139933',
    Yd = 'PersonalEfficiency_tableWrapper_cd2e7488',
    Ud = 'PersonalEfficiency_overlayDivider_52284c35',
    Zd = 'PersonalEfficiency_overlayDivider__closed_6b67c790',
    Jd = 'PersonalEfficiency_clarificationWrapper_5f3072b1',
    Qd = { row: 'PersonalEfficiency_headerRow_6acaa215' };
function em() {
    const { opened: s } = Ic(),
        { api: n } = P();
    return (
        t.useLayoutEffect(() => {
            s && n.applyScroll(0, { immediate: !0 });
        }, [s, n]),
        e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: a($d, !s && Xd), onWheel: n.handleMouseWheel }),
                e.jsx(nd.Header, { classNames: Qd }),
                e.jsx(nd.Body, { children: e.jsx(nd.Footer, {}) }),
            ],
        })
    );
}
const am = w.cubicBezier(0.33, 0, 0.25, 1),
    tm = 'first',
    sm = 'second',
    nm = 'closedArrowInLoop',
    rm = 'openedArrowInLoop',
    im = r(function ({ visible: s, totalEfficiencyStylesApi: n }) {
        const { model: r } = rl(),
            i = r.computes.personalEffiency(),
            { closedPosition: l, overlayApi: o, shadowApi: c, arrowStylesApi: d } = Ic(),
            { breakpoint: m } = se(),
            [_, f] = t.useState(nm),
            [b, v] = p(() => ({ opacity: 0 })),
            h = t.useMemo(
                () =>
                    (function ({ breakpointName: t, assault: s, defend: n }) {
                        const r = 'small' === t ? Re.extraSmall : t;
                        return [
                            Td.accessor('account', {
                                id: Zc.account,
                                header: () => e.jsx(bd, { name: Zc.account }),
                                footer: () => e.jsx(pd, { assault: s, defend: n }),
                                enableSorting: !1,
                                cell: (a) => e.jsx(cd, { account: a.getValue() }),
                                meta: { className: a(Cd, Pd), column: id[Zc.account][r] },
                            }),
                            Td.accessor('vehicle', {
                                id: Zc.vehicle,
                                header: void 0,
                                enableSorting: !1,
                                cell: (a) => e.jsx(Rd, { vehicle: a.getValue() }),
                                meta: { column: id[Zc.vehicle][r] },
                            }),
                            Td.accessor('killed', {
                                id: Zc.targetKills,
                                header: (a) => e.jsx(bd, { name: Zc.targetKills, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(hd, {
                                        name: Zc.targetKills,
                                        value: a.getValue(),
                                        userName: a.row.original.account.username,
                                        className: kd,
                                    }),
                                meta: { column: rd, className: a(Cd, Bd) },
                            }),
                            Td.accessor('damageDealt', {
                                id: Zc.damageDealt,
                                header: (a) => e.jsx(bd, { name: Zc.damageDealt, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(Ad, {
                                        ...a.getValue(),
                                        name: Zc.damageDealt,
                                        userName: a.row.original.account.username,
                                        className: kd,
                                    }),
                                meta: { className: a(Cd, Bd), column: rd },
                            }),
                            Td.accessor('damageBlockedByArmor', {
                                id: Zc.damageBlockedByArmor,
                                header: (a) => e.jsx(bd, { name: Zc.damageBlockedByArmor, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(Ad, {
                                        ...a.getValue(),
                                        name: Zc.damageBlockedByArmor,
                                        userName: a.row.original.account.username,
                                        className: kd,
                                    }),
                                meta: { className: a(Cd, Bd), column: rd },
                            }),
                            Td.accessor('damageAssisted', {
                                id: Zc.damageAssisted,
                                header: (a) => e.jsx(bd, { name: Zc.damageAssisted, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(yd, {
                                        value: a.getValue(),
                                        name: Zc.damageAssisted,
                                        userName: a.row.original.account.username,
                                        className: Ed,
                                    }),
                                meta: { className: a(Cd, Bd), column: rd },
                            }),
                            Td.accessor('damageAssistedStun', {
                                id: Zc.damageAssistedStun,
                                header: (a) => e.jsx(bd, { name: Zc.damageAssistedStun, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(Ad, {
                                        ...a.getValue(),
                                        name: Zc.damageAssistedStun,
                                        userName: a.row.original.account.username,
                                        className: kd,
                                    }),
                                meta: { className: a(Cd, Bd), column: rd },
                            }),
                            Td.accessor('spotted', {
                                id: Zc.spotted,
                                header: (a) => e.jsx(bd, { name: Zc.spotted, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(hd, {
                                        name: Zc.spotted,
                                        value: a.getValue(),
                                        userName: a.row.original.account.username,
                                        className: kd,
                                    }),
                                meta: { className: a(Cd, Bd), column: rd },
                            }),
                            Td.accessor('criticalDamage', {
                                id: Zc.criticalDamage,
                                header: (a) => e.jsx(bd, { name: Zc.criticalDamage, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(yd, {
                                        value: a.getValue(),
                                        name: Zc.criticalDamage,
                                        userName: a.row.original.account.username,
                                        className: Ed,
                                    }),
                                meta: { className: a(Cd, Bd), column: rd },
                            }),
                        ];
                    })({ breakpointName: m.name, assault: i.assault, defend: i.defend }),
                [m.name, i.assault, i.defend],
            );
        return (
            t.useEffect(() => {
                if (s && _ === nm) return (d.stop(), void f(tm));
                if (!s && _ === rm) return (d.stop(), void f(sm));
                switch (_) {
                    case nm:
                        d.start({
                            from: { x: '-50%', y: '0', rotate: 180, opacity: 1 },
                            to: [
                                { x: '-50%', y: '-5rem', rotate: 180, opacity: 0 },
                                { x: '-50%', y: '0', rotate: 180, opacity: 0 },
                                { x: '-50%', y: '0', rotate: 180, opacity: 1 },
                            ],
                            config: { easing: am, duration: 800 },
                            loop: !0,
                        });
                        break;
                    case tm:
                        (d.start({
                            to: { opacity: 0, x: '-50%', y: s ? '40rem' : '0', rotate: s ? 0 : 180 },
                            immediate: !0,
                        }),
                            n.start({
                                to: { opacity: s ? 0 : 1 },
                                delay: s ? 0 : 150,
                                config: { easing: am, duration: 200 },
                            }),
                            o.start({
                                to: { y: s ? '0' : l, backgroundColor: s ? 'rgba(22, 30, 40, 0.96)' : 'transparent' },
                                config: { easing: am, duration: 200 },
                                delay: s ? 0 : 150,
                                onRest: () => f(s ? sm : nm),
                            }),
                            c.start({
                                to: { opacity: s ? 1 : 0 },
                                delay: s ? 0 : 150,
                                config: { easing: am, duration: 200 },
                            }),
                            v.start({
                                to: { opacity: s ? 1 : 0 },
                                delay: s ? 150 : 0,
                                config: { easing: am, duration: 100 },
                            }));
                        break;
                    case sm:
                        (d.start({
                            to: { opacity: 0, x: '-50%', y: s ? '40rem' : '0', rotate: s ? 0 : 180 },
                            immediate: !0,
                        }),
                            f(s ? rm : tm));
                        break;
                    case rm: {
                        const e = m.weight > ne.large.weight ? '53rem' : '40rem';
                        d.start({
                            from: { x: '-50%', y: e, rotate: 0, opacity: 1 },
                            to: [
                                {
                                    x: '-50%',
                                    y: m.weight > ne.large.weight ? '58rem' : '45rem',
                                    rotate: 0,
                                    opacity: 0,
                                    config: { duration: 1e3 },
                                },
                                { x: '-50%', y: e, rotate: 0, opacity: 0, config: { duration: 400 } },
                                { x: '-50%', y: e, rotate: 0, opacity: 1, config: { duration: 200 } },
                            ],
                            config: { easing: am, duration: 800 },
                            loop: !0,
                        });
                        break;
                    }
                }
            }, [_, s, l, m.weight, d, o, c, v, n]),
            t.useLayoutEffect(() => {
                !1 === s && _ === nm && o.start({ to: { y: l }, immediate: !0 });
            }, [l, s, _, o]),
            e.jsx(u.div, {
                className: Yd,
                style: b,
                children: e.jsx(nd, { config: h, data: i, className: a(Vd, !s && zd), children: e.jsx(em, {}) }),
            })
        );
    }),
    lm = r(function () {
        const { model: s } = rl(),
            n = s.computes.personalEffiency(),
            r = s.battleInfo.get().finishReasonClarification,
            i = h.resolve('strings'),
            l = j(),
            { hintKeyRef: o, overlayDividerRef: c, personalEfficiencyRef: d, completedSteps: m } = ya(),
            _ = !1 === m.has(ba.fifth),
            [f] = p(() => ({ from: { opacity: 0 }, ref: o })),
            [b] = p(() => ({ from: { maskSize: '0% 100%' }, ref: c })),
            [v] = p(() => ({ from: { opacity: 0 }, ref: d })),
            g = M({ value: 159 }, { medium: { value: 187 }, large: { value: 199 }, extraLarge: { value: 267 } }),
            { active: y } = pe(),
            x = t.useRef(null),
            [N, w] = t.useState(0),
            [I, A] = t.useState(!1),
            [S, R] = p(() => ({ opacity: I ? 0 : 1 }));
        t.useEffect(() => {
            y !== aa.personal && A(!1);
        }, [y]);
        const C = t.useCallback(() => {
            var e;
            const a = (null == (e = x.current) ? void 0 : e.getBoundingClientRect().height) || 0;
            a > 0 && w(Math.round(a));
        }, [w]);
        F(x, C);
        const B = t.useMemo(() => (N > 0 ? Ve(N) - g.value + 'rem' : '150%'), [N, g]),
            P = t.useMemo(Dd, []);
        if (0 === n.assault && 0 === n.defend && 0 === n.rows.length)
            return e.jsxs(u.div, {
                style: v,
                className: Od,
                children: [
                    '' !== r &&
                        e.jsx('div', {
                            className: Wd,
                            children: i.readOrEmpty(`battle_results.finish.clarification.${r}`),
                        }),
                    e.jsx('div', {
                        className: Wd,
                        children: i.readOrEmpty('battle_results.common.battleEfficiency.noEfficiency'),
                    }),
                ],
            });
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(Ac, {
                    closedPosition: B,
                    visible: I,
                    changeVisible: A,
                    children: e.jsx('div', {
                        className: a(Gd, 0 === N && Md, _ && Fd),
                        children: e.jsxs(Oc, {
                            ref: x,
                            children: [
                                e.jsx(u.div, {
                                    className: a(Ud, !1 === I && Zd),
                                    style: b,
                                    children: e.jsx(Oc.OverlayDivider, {}),
                                }),
                                e.jsx(im, { visible: I, totalEfficiencyStylesApi: R }),
                                e.jsx(u.div, {
                                    className: Hd,
                                    style: f,
                                    children: e.jsx(Oc.HintKey, { disabled: y !== aa.personal }),
                                }),
                            ],
                        }),
                    }),
                }),
                e.jsx(u.div, {
                    style: S,
                    className: a(Ld, (I || _) && Kd),
                    onClick: function (e) {
                        (e.stopPropagation(),
                            A(!0),
                            l.play('click', { original: e, target: 'overview:total-personal-efficiency' }),
                            l.play('openOverlay', { original: e, target: 'overview:total-personal-efficiency' }));
                    },
                    children: e.jsxs(u.div, {
                        style: v,
                        children: [
                            '' !== r &&
                                e.jsx('div', {
                                    className: Jd,
                                    onClick: (e) => e.stopPropagation(),
                                    children: e.jsx('div', {
                                        className: Wd,
                                        children: i.readOrEmpty(`battle_results.finish.clarification.${r}`),
                                    }),
                                }),
                            e.jsx(nd, { config: P, data: n, className: qd, children: e.jsx(nd.Header, {}) }),
                        ],
                    }),
                }),
            ],
        });
    }),
    om = S('Overview', cc),
    cm = r(function ({ className: s }) {
        var n;
        const r = h.resolve('strings'),
            i = j(),
            { model: l, controls: o } = rl(),
            c = l.additionalBonus.get(),
            d = l.battleInfo.get(),
            m = l.personalEfficiency.achievements.get(),
            { step: _, battleStatusRef: f, dividerRef: b, earnedCurrenciesRef: v, bonusRef: g } = ya(),
            [x] = p(() => ({ from: { opacity: 0, y: '-10rem' }, ref: f })),
            [N] = p(() => ({ from: { maskSize: '0% 100%' }, ref: b })),
            [A] = p(() => ({ from: { opacity: 0, y: '-10rem' }, ref: v })),
            [S] = p(() => ({ from: { opacity: 0, y: '10rem' }, ref: g })),
            { api: R, setCompletedAnimationIndexes: C } = ll(),
            B = l.computes.premiumAndStandartEarnings(),
            P = null == (n = l.battleInfo.get()) ? void 0 : n.status,
            k = t.useMemo(() => (void 0 !== d && Oi.includes(null == d ? void 0 : d.modeName) ? Hi : Ti), [d]);
        return (
            t.useEffect(() => {
                if (_ === ba.first) {
                    const e = 500 * Math.log(m.length),
                        a = 150 * Math.log(m.length);
                    (R.start((t) => {
                        const s = e - 500 * Math.log(m.length - t),
                            n = a - 150 * Math.log(m.length - t);
                        return {
                            x: 0,
                            y: 0,
                            scale: 1,
                            delay: 200 * t + s,
                            config: { duration: 400 + n, easing: w.cubicBezier(1, 0, 0.95, 1) },
                            onRest() {
                                (i.play('achievementAppeared', { target: 'overview' }), C((e) => I(e, t)));
                            },
                        };
                    }),
                        R.start((t) => ({
                            opacity: 1,
                            delay: 150 + 200 * t + (e - 500 * Math.log(m.length - t)),
                            config: {
                                duration: 250 + (a - 150 * Math.log(m.length - t)),
                                easing: w.cubicBezier(0.33, 0, 0.25, 1),
                            },
                        })));
                }
            }, [_, R, C, i, m.length]),
            e.jsxs(om, {
                className: s,
                children: [
                    e.jsx('div', { className: oc }),
                    l.playerSatisfaction.get().isPlayerSatisfactionInterfaceEnabled &&
                        e.jsx(Bl, {
                            state: l.playerSatisfaction.get().state,
                            onSatisfactionRatingSelected: o.onSatisfactionRatingSelected,
                        }),
                    e.jsx(jc, {}),
                    e.jsxs('div', {
                        className: a(dc, 0 === m.length && mc),
                        children: [
                            e.jsx('div', {
                                className: uc,
                                children: e.jsx(u.div, {
                                    style: x,
                                    className: pc,
                                    children: e.jsx('div', {
                                        className: _c,
                                        'data-test-id': 'winStatus',
                                        children: y.toUpperCase(r.readOrEmpty(`battle_results.status.${P}`)),
                                    }),
                                }),
                            }),
                            e.jsx(vl, { className: fc }),
                            e.jsx(u.div, { style: A, className: gc, children: e.jsx(ic, {}) }),
                            e.jsx(u.div, {
                                style: N,
                                className: bc,
                                children: e.jsx(ja, { classNames: { base: vc, image: hc } }),
                            }),
                            e.jsx(El, {
                                ...c,
                                premiumAndStandartEarnings: B,
                                applyBonus: o.applyBonus,
                                handleAdvertisement: (e) => o.useAdvertisement(e),
                                supportedAdvertisements: k,
                                showBonusDetails: o.showBonusDetails,
                                children: e.jsx(u.div, { style: S, children: e.jsx($o, { className: yc }) }),
                            }),
                        ],
                    }),
                    e.jsx(lm, {}),
                ],
            })
        );
    }),
    dm = r(function (a) {
        const { model: t } = rl(),
            s = t.personalEfficiency.achievements.get(),
            n = t.computes.personalInfo().vehicle.nation;
        return e.jsx(cl, { achievements: s, vehicleNation: n, children: e.jsx(cm, { ...a }) });
    }),
    mm = { divider: 'Divider_80a19f4b' },
    um = t.forwardRef(function ({ classNames: t, className: s, ...n }, r) {
        return e.jsx('div', {
            ...n,
            ref: r,
            className: a(mm.divider, null == t ? void 0 : t.base, s),
            children: e.jsx(A, {
                className: a(mm.dividerImage, null == t ? void 0 : t.image),
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    });
const pm = {
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
function _m(e, a) {
    return void 0 === a ? 'default' : a === e ? 'hover' : 'extinct';
}
const fm = t.forwardRef(function (
    { achievement: s, achievementsLength: n, index: r, hoverIndex: i, setHoverIndex: l, ...o },
    c,
) {
    const d = j(),
        m = ze(
            s.tooltipId,
            t.useMemo(() => JSON.parse(s.tooltipArgs), [s.tooltipArgs]),
        ),
        u = M(
            { width: '48rem', height: '48rem', path: `achievement.c_48x48.${s.iconName}` },
            { medium: { width: '67rem', height: '71rem', path: `achievement.${s.iconName}` } },
        );
    return e.jsx('div', {
        ...o,
        ...m,
        className: a(pm.achievement, pm[`achievement__${_m(r, i)}`]),
        style: { zIndex: r === i ? n + 1 : n - r },
        onMouseEnter: function (e) {
            (m.onMouseEnter(e),
                l(r),
                d.play('mouse-enter', { original: e, target: 'team-efficiency:efficiency-details:achievement' }));
        },
        onMouseLeave: () => {
            (m.onMouseLeave(), l(void 0));
        },
        children: e.jsx(A, { ref: c, className: pm.achievementIcon, ...u }, s.iconName),
    });
});
function bm({ vehicleStatusKey: e, anonymized: a, clanAbbrev: t, personal: s, abbondonBattle: n }) {
    if (s && n) return 'battle_results.common.vehicleState.prematureLeave';
    return !1 === Qi.includes(e)
        ? `battle_results.common.vehicleState.${e}`
        : a || '' === t
          ? `battle_results.common.vehicleState.${e}_with_killername`
          : `battle_results.common.vehicleState.${e}_with_killername_and_clan`;
}
const vm = r(function ({
        team: s,
        account: n,
        vehicle: r,
        achievements: i,
        squadIndex: l,
        personal: o,
        userStatus: c,
        killer: d,
    }) {
        const m = h.resolve('strings'),
            [u, p] = t.useState(void 0),
            { model: _ } = rl(),
            f = _.computes.personalInfo(),
            b = M({ width: '230rem', height: '184rem' }, { medium: { width: '290rem', height: '232rem' } }),
            y = g({
                header: m.readOrEmpty('tooltips.anonymizer.teamStats.header').replace('%(name)s', n.username),
                body: m.readOrEmpty('tooltips.anonymizer.teamStats.body'),
            }),
            x = sl({ personal: o, platoonType: tl(s, f.squadIndex, l), anonymizer: n.anonymizer }),
            N = -1 === (j = c.deathReason) ? 'alive' : `dead${j}`;
        var j;
        const w = x ? d.fakeUsername : d.username;
        return e.jsxs('div', {
            className: pm.header,
            children: [
                e.jsx('div', {
                    className: pm.vehicleImageWrapper,
                    children: e.jsx(Ee, { name: r.techName, width: b.width, height: b.height }),
                }),
                e.jsxs('div', {
                    className: pm.info,
                    children: [
                        e.jsxs(Ce, {
                            className: pm.accountInfo,
                            children: [
                                '' !== n.badge &&
                                    e.jsx(Ce.Badge, {
                                        className: pm.accountInfoGap,
                                        size: Ce.Badge.sizes.x48x48,
                                        badgeId: n.badge,
                                    }),
                                e.jsx(Ce.Name, {
                                    className: a(pm.accountName, pm.accountInfoGap),
                                    children: e.jsx(Be, { text: x ? n.fakeUsername : n.username }),
                                }),
                                '' !== n.clanAbbreviation &&
                                    !x &&
                                    e.jsx(Ce.ClanTag, {
                                        className: pm.clanAbbreviation,
                                        children: e.jsx(v, {
                                            path: 'common.clanTag',
                                            params: { abbrev: n.clanAbbreviation },
                                            brackets: { start: '{', end: '}' },
                                        }),
                                    }),
                                n.igrType !== ld &&
                                    e.jsx(Ce.IgrIcon, { size: Ce.IgrIcon.sizes.x64x28, className: pm.accountInfoGap }),
                                '' !== n.suffixBadge &&
                                    e.jsx(Ce.Stripe, {
                                        size: Ce.Stripe.sizes.regular,
                                        badgeId: n.suffixBadge,
                                        className: pm.accountInfoGap,
                                    }),
                                n.anonymizer &&
                                    e.jsx(Ce.AnonymizerIcon, {
                                        ...y,
                                        size: Ce.AnonymizerIcon.sizes.x32x32,
                                        className: pm.anonymizerIcon,
                                    }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: pm.vehicle,
                            children: [
                                e.jsx(Te, { value: r.tier, className: a(pm.vehicleLevel, pm.vehicleGap) }),
                                e.jsx(De, {
                                    type: r.type,
                                    size: 'x24x24',
                                    className: a(pm.vehicleType, pm.vehicleGap),
                                }),
                                e.jsx('div', { className: pm.vehicleName, children: r.longName }),
                            ],
                        }),
                        e.jsx('div', {
                            className: pm.vehicleState,
                            children: e.jsx(v, {
                                path: bm({
                                    vehicleStatusKey: N,
                                    anonymized: x,
                                    personal: o,
                                    clanAbbrev: d.clanAbbreviation,
                                    abbondonBattle: c.abandonBattle,
                                }),
                                params: { killername: w, clanTag: d.clanAbbreviation },
                            }),
                        }),
                        0 !== i.length &&
                            e.jsx('div', {
                                className: pm.achievements,
                                children: E(Zr(i), (a, t) =>
                                    e.jsx(
                                        fm,
                                        {
                                            index: t,
                                            hoverIndex: u,
                                            setHoverIndex: p,
                                            achievement: a,
                                            achievementsLength: i.length,
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
    hm = S('StatisticsLabel'),
    gm = h.resolve('strings'),
    ym = t.forwardRef(function ({ labelKey: a, ...t }, s) {
        return e.jsx(hm, { ...t, ref: s, children: gm.readOrEmpty(a) });
    }),
    xm = 'Value_798a6cdd',
    Nm = 'Value_separator_798a6cdd',
    jm = h.resolve('strings');
function wm(e, a) {
    switch (e) {
        case Wi.Integer:
            return y.formatNumber('integral', a);
        case Wi.Float:
            return y.formatReal('fractional', a);
        default:
            return a;
    }
}
const Im = S('StatisticsValue', xm),
    Am = t.forwardRef(function (
        {
            labelKey: s,
            value: n,
            type: r,
            valueSeparatorKey: i = 'common.common.slash',
            className: l,
            classNames: o,
            ...c
        },
        d,
    ) {
        return e.jsx(Im, {
            ...c,
            ref: d,
            className: a(null == o ? void 0 : o.base, l),
            children: E(n, (l, c) =>
                e.jsxs(
                    t.Fragment,
                    {
                        children: [
                            e.jsx('div', {
                                className: a(
                                    0 === l && (null == o ? void 0 : o.zeroValue),
                                    l < 0 && (null == o ? void 0 : o.negativeValue),
                                ),
                                children: wm(r, l),
                            }),
                            c < n.length - 1 &&
                                e.jsxs('div', {
                                    className: a(Nm, null == o ? void 0 : o.separator),
                                    children: [' ', jm.readOrEmpty(i), ' '],
                                }),
                        ],
                    },
                    `${s}_value_${c}`,
                ),
            ),
        });
    }),
    Sm = 'Index_scrollAreaContent_52a570a',
    Rm = 'Index_scrollAreaContent__initialized_b2629fde',
    Cm = 'Index_item_6b7cdfb0',
    Bm = 'Index_separator_add04e19',
    Pm = S('Statistics', 'Index_statistics_638478ff'),
    km = S('StatisticsItem', Cm),
    Em = S('StatisticsItemSeparator', Bm);
function Tm({ children: t, scrollbarProps: s, scrollAreaProps: n }) {
    var r;
    const i = P(),
        l = Pa(i.api);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(k, {
                ...n,
                classNames: {
                    ...(null == n ? void 0 : n.classNames),
                    content: a(Sm, l && Rm, null == (r = null == n ? void 0 : n.classNames) ? void 0 : r.content),
                },
                children: t,
            }),
            e.jsx(B, { ...s }),
        ],
    });
}
const Dm = t.forwardRef(function ({ scrollbarProps: a, scrollAreaProps: t, ...s }, n) {
    return e.jsx(Pm, {
        ...s,
        ref: n,
        children: e.jsx(C, { children: e.jsx(Tm, { ...s, scrollbarProps: a, scrollAreaProps: t }) }),
    });
});
((Dm.Item = km), (Dm.Value = Am), (Dm.Label = ym), (Dm.Separator = Em));
const Vm = {
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
function zm({ squareSize: a = 1, spacing: s = 2, backgroundColor: n = '#d9d9d9' }) {
    const r = t.useRef(null),
        [i, l] = t.useState(0),
        o = a + s,
        c = t.useCallback(() => {
            const e = r.current;
            if (null !== e) {
                const a = e.getBoundingClientRect().width,
                    t = Ve(a);
                l(Math.floor(t / o));
            }
        }, [o]);
    return (
        He(c, [r.current, o, c]),
        t.useEffect(() => Oe(c), [c]),
        e.jsx('div', {
            ref: r,
            className: Vm.separator,
            children: Array.from({ length: i }).map((t, s) =>
                e.jsx(
                    'div',
                    {
                        className: Vm.separatorSquare,
                        style: { backgroundColor: n, width: `${a}rem`, height: `${a}rem`, left: s * o + 'rem' },
                    },
                    s,
                ),
            ),
        })
    );
}
function Hm({ list: s }) {
    return e.jsx(Dm, {
        scrollbarProps: { classNames: { base: Vm.scrollbar } },
        scrollAreaProps: { classNames: { content: Vm.scrollAreaContent } },
        children: E(s, (s) =>
            e.jsxs(
                t.Fragment,
                {
                    children: [
                        e.jsxs(Dm.Item, {
                            className: Vm.listItem,
                            children: [
                                e.jsx(Dm.Label, {
                                    className: Vm.label,
                                    labelKey: `battle_results.team.stats.labels_${s.labelKey}`,
                                }),
                                e.jsx(Dm.Separator, { className: Vm.listItemSeparator, children: e.jsx(zm, {}) }),
                                e.jsx(Dm.Value, {
                                    classNames: {
                                        base: Vm.value,
                                        zeroValue: Vm.zeroValue,
                                        separator: Vm.valueSeparator,
                                    },
                                    labelKey: s.labelKey,
                                    value: s.value,
                                    type: s.paramValueType,
                                }),
                            ],
                        }),
                        void 0 !== s.details &&
                            E(s.details, (t) =>
                                e.jsxs(
                                    Dm.Item,
                                    {
                                        className: a(Vm.listItem, Vm.listSubItem),
                                        children: [
                                            e.jsx(Dm.Label, {
                                                className: Vm.label,
                                                labelKey: `battle_results.team.stats.labels_${t.labelKey}`,
                                            }),
                                            e.jsx(Dm.Separator, {
                                                className: Vm.listItemSeparator,
                                                children: e.jsx(zm, {}),
                                            }),
                                            e.jsx(Dm.Value, {
                                                classNames: {
                                                    base: Vm.value,
                                                    zeroValue: Vm.zeroValue,
                                                    separator: Vm.valueSeparator,
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
const Om = 'EfficiencyDetails_divider_85b11efd',
    Wm = 'EfficiencyDetails_dividerImage_5b9d06d2',
    Gm = 'EfficiencyDetails_closeIcon_8d81da90',
    Mm = 'EfficiencyDetails_statistics_30a81815',
    Fm = S('EfficiencyDetails', 'EfficiencyDetails_efficiencyDetails_db8069eb', {
        variants: {
            team: {
                [Zi]: 'EfficiencyDetails_efficiencyDetails__allies_20b1febc',
                [Ji]: 'EfficiencyDetails_efficiencyDetails__enemies_23a29af',
            },
        },
    }),
    $m = r(function ({ team: a, className: s }) {
        const { model: n, controls: r } = rl(),
            i = n.computes.efficiencyDetails(),
            l = j(),
            o = t.useRef(null);
        return (
            t.useEffect(() => {
                const e = _e.down(([, e]) => {
                        'outside' === e && r.teamEfficiency.selectRow(void 0);
                    }),
                    a = We(window, 'click', (e) => {
                        o.current && !o.current.contains(e.target) && r.teamEfficiency.selectRow(void 0);
                    });
                return () => {
                    (a(), e());
                };
            }, [r.teamEfficiency]),
            void 0 === i
                ? null
                : e.jsxs(Fm, {
                      team: a,
                      className: s,
                      ref: o,
                      onClick: (e) => {
                          e.stopPropagation();
                      },
                      children: [
                          e.jsx(vm, {
                              team: a,
                              account: i.account,
                              squadIndex: i.squadIndex,
                              achievements: i.achievements,
                              personal: i.personal,
                              userStatus: i.userStatus,
                              vehicle: i.vehicle,
                              killer: i.killer,
                          }),
                          e.jsx('div', { className: Mm, children: e.jsx(Hm, { list: i.detailedStatistics }) }),
                          e.jsx(um, { classNames: { base: Om, image: Wm } }),
                          e.jsx(A, {
                              className: Gm,
                              width: '24rem',
                              height: '24rem',
                              path: 'library.close',
                              onMouseEnter: () => {
                                  l.play('mouse-enter', { target: 'team-efficiency:efficiency-details:close' });
                              },
                              onClick: (e) => {
                                  (r.teamEfficiency.selectRow(void 0),
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
    Xm = 'squadIndex',
    Lm = 'account',
    Km = 'vehicle',
    qm = 'achievements',
    Ym = 'damageDealt',
    Um = 'kills',
    Zm = 'earnedXp',
    Jm = 'AccountInfoCell_accountInfo_dec8771',
    Qm = 'AccountInfoCell_accountName_9a181e4d',
    eu = 'AccountInfoCell_clanAbbreviation_99f1cc86',
    au = 'AccountInfoCell_badge_b101914f',
    tu = 'AccountInfoCell_anonymizerIcon_a1d51ca4',
    su = 'AccountInfoCell_igrIcon_158694e7',
    nu = 'AccountInfoCell_stripe_fefba7b2',
    ru = r(function ({ account: t, team: s, platoon: n, className: r, classNames: i, ...l }) {
        const { model: o } = rl(),
            c = o.computes.personalInfo(),
            d = sl({
                personal: c.account.username === t.username,
                platoonType: tl(s, c.squadIndex, n),
                anonymizer: t.anonymizer,
            });
        return e.jsxs(Ce, {
            ...l,
            className: a(Jm, r),
            children: [
                '' !== t.badge &&
                    e.jsx(Ce.Badge, {
                        size: Ce.Badge.sizes.x24x24,
                        badgeId: t.badge,
                        className: a(au, null == i ? void 0 : i.badge),
                    }),
                e.jsx(Ce.Name, {
                    className: a(Qm, null == i ? void 0 : i.username),
                    children: e.jsx(Be, { text: d ? t.fakeUsername : t.username }),
                }),
                '' !== t.clanAbbreviation &&
                    !d &&
                    e.jsx(Ce.ClanTag, {
                        className: a(eu, null == i ? void 0 : i.clanAbbreviation),
                        children: e.jsx(v, {
                            path: 'common.clanTag',
                            params: { abbrev: t.clanAbbreviation },
                            brackets: { start: '{', end: '}' },
                        }),
                    }),
                t.igrType !== ld &&
                    e.jsx(Ce.IgrIcon, {
                        size: Ce.IgrIcon.sizes.x34x16,
                        className: a(su, null == i ? void 0 : i.igrIcon),
                    }),
                '' !== t.suffixBadge &&
                    e.jsx(Ce.Stripe, {
                        size: Ce.Stripe.sizes.default,
                        badgeId: t.suffixBadge,
                        className: nu,
                        classNames: null == i ? void 0 : i.suffixBadge,
                    }),
                t.anonymizer &&
                    e.jsx(Ce.AnonymizerIcon, {
                        size: Ce.AnonymizerIcon.sizes.x24x24,
                        className: a(tu, null == i ? void 0 : i.anonymizerIcon),
                    }),
            ],
        });
    }),
    iu = 'AchievementsCell_achievementCell_e9bf973c',
    lu = 'AchievementsCell_achievementsAmount_349c209a';
function ou({ achievements: a }) {
    const t = h.resolve('strings'),
        s = g({ body: E(Zr(a), (e) => t.readOrEmpty(`achievements.${e.name}`)).join('\n') }),
        n = a.length;
    return 0 === n
        ? null
        : e.jsxs('div', {
              ...s,
              className: iu,
              children: [
                  e.jsx(A, { path: 'library.medal', width: '32rem', height: '32rem' }),
                  e.jsx('div', { className: lu, children: y.formatNumber('integral', n) }),
              ],
          });
}
const cu = { behaviour: Se.static, size: '32rem' },
    du = { behaviour: Se.static, size: '194rem' },
    mu = { behaviour: Se.static, size: '272rem' },
    uu = { behaviour: Se.static, size: '320rem' },
    pu = { behaviour: Se.static, size: '180rem' },
    _u = { behaviour: Se.static, size: '236rem' },
    fu = { behaviour: Se.static, size: '292rem' },
    bu = { behaviour: Se.static, size: '56rem' },
    vu = { behaviour: Se.static, size: '60rem' },
    hu = { behaviour: Se.static, size: '80rem' },
    gu = { behaviour: Se.static, size: '40rem' },
    yu = { behaviour: Se.static, size: '60rem' },
    xu = { behaviour: Se.static, size: '60rem' },
    Nu = { behaviour: Se.static, size: '56rem' },
    ju = { behaviour: Se.static, size: '60rem' },
    wu = { behaviour: Se.static, size: '80rem' },
    Iu = { behaviour: Se.static, size: '40rem' },
    Au = {
        [Xm]: { [Re.extraSmall]: cu, [Re.medium]: cu, [Re.large]: cu, [Re.extraLarge]: cu },
        [Lm]: { [Re.extraSmall]: du, [Re.medium]: mu, [Re.large]: mu, [Re.extraLarge]: uu },
        [Km]: { [Re.extraSmall]: pu, [Re.medium]: _u, [Re.large]: _u, [Re.extraLarge]: fu },
        [Ym]: { [Re.extraSmall]: bu, [Re.medium]: vu, [Re.large]: vu, [Re.extraLarge]: hu },
        [Um]: { [Re.extraSmall]: gu, [Re.medium]: yu, [Re.large]: yu, [Re.extraLarge]: xu },
        [Zm]: { [Re.extraSmall]: Nu, [Re.medium]: ju, [Re.large]: ju, [Re.extraLarge]: wu },
        [qm]: { [Re.extraSmall]: Iu, [Re.medium]: Iu, [Re.large]: Iu, [Re.extraLarge]: Iu },
    },
    Su = {
        headerCell__asc: 'HeaderCell_headerCell__asc_204e6a44',
        headerCell__desc: 'HeaderCell_headerCell__desc_dc5a7202',
        headerCell: 'HeaderCell_headerCell_5b34d1b1',
        headerCell__icon: 'HeaderCell_headerCell__icon_cfa14ddf',
        headerCell__text: 'HeaderCell_headerCell__text_b476890c',
    },
    Ru = {
        [Xm]: 'library.shield',
        [Km]: 'library.panzer',
        [Ym]: 'library.cross_with_gap',
        [Um]: 'library.crossed_tank',
        [Zm]: 'library.star',
        [qm]: 'library.medal',
    },
    Cu = {
        [Xm]: 'squadHeader',
        [Lm]: 'playerHeader',
        [Km]: 'tankHeader',
        [Ym]: 'damageHeader',
        [Um]: 'fragHeader',
        [Zm]: 'xpHeader',
        [qm]: 'medalHeader',
    },
    Bu = t.forwardRef(function ({ name: t, team: s, column: n, className: r, ...i }, l) {
        const o = n.getIsSorted(),
            c = h.resolve('strings'),
            d = g({
                header: c.readOrEmpty(`battle_results.team.${Cu[t]}.header`),
                body: c.readOrEmpty(`battle_results.team.${Cu[t]}.body`),
            }),
            m = t === Lm;
        return e.jsx('div', {
            ...i,
            ...d,
            ref: l,
            className: a(Su.headerCell, m ? Su.headerCell__text : Su.headerCell__icon, o && Su[`headerCell__${o}`], r),
            children: m
                ? c.readOrEmpty(`battle_results.team.stats.${s}`)
                : e.jsx(A, { width: '32rem', height: '32rem', path: Ru[t] }),
        });
    }),
    Pu = 'NumberValueCell_numberValueCell_8840a07';
function ku({ value: t, className: s, showZero: n = !0 }) {
    return !1 === n && 0 === t ? null : e.jsx('div', { className: a(Pu, s), children: y.formatNumber('integral', t) });
}
const Eu = {
        platoon: 'PlatoonCell_platoon_5fe0374b',
        platoonText: 'PlatoonCell_platoonText_b6a98287',
        platoonText__personal: 'PlatoonCell_platoonText__personal_d021db4c',
        platoonText__alien: 'PlatoonCell_platoonText__alien_9767e814',
    },
    Tu = { [al]: 'library.platoon_indicator_gray', [el]: 'library.platoon_indicator_orange' },
    Du = r(function ({ platoon: t, team: s }) {
        const { model: n } = rl(),
            r = tl(s, n.computes.personalInfo().squadIndex, t);
        if (null === r) return null;
        const i = Tu[r];
        return e.jsxs('div', {
            className: Eu.platoon,
            children: [
                e.jsx(A, { path: i, width: '32rem', height: '32rem' }),
                e.jsx('div', { className: a(Eu.platoonText, Eu[`platoonText__${r}`]), children: t }),
            ],
        });
    }),
    Vu = 'VehicleCell_vehicle_386f696d',
    zu = 'VehicleCell_vehicleImageWrapper_aa1c27bd',
    Hu = 'VehicleCell_vehicleTypeWrapper_3f1f3f6d',
    Ou = 'VehicleCell_vehicleLevel_1a4134b1',
    Wu = 'VehicleCell_vehicleName_eaeb9715';
function Gu({ vehicle: t, classNames: s, className: n }) {
    return e.jsxs('div', {
        className: a(Vu, n),
        children: [
            e.jsx('div', {
                className: a(zu, null == s ? void 0 : s.imageWrapper),
                children: e.jsx(Ee, {
                    size: Ee.size.x120x96,
                    name: t.techName,
                    className: null == s ? void 0 : s.image,
                }),
            }),
            e.jsx(Te, { value: t.tier, className: a(Ou, null == s ? void 0 : s.level) }),
            e.jsx('div', {
                className: a(Hu, null == s ? void 0 : s.typeWrapper),
                children: e.jsx(De, { size: 'x24x24', type: t.type, className: null == s ? void 0 : s.type }),
            }),
            e.jsx('div', { className: a(Wu, null == s ? void 0 : s.name), children: e.jsx(Be, { text: t.name }) }),
        ],
    });
}
const Mu = {
        efficiencyTable__allies: 'EfficiencyTable_efficiencyTable__allies_b2f99733',
        efficiencyTable__enemies: 'EfficiencyTable_efficiencyTable__enemies_1ba35ae7',
        header: 'EfficiencyTable_header_412b5b7b',
        rowsWrapper: 'EfficiencyTable_rowsWrapper_da034938',
        efficiencyTable: 'EfficiencyTable_efficiencyTable_e622a43e',
        alignLeft: 'EfficiencyTable_alignLeft_a52cfd11',
        alignRight: 'EfficiencyTable_alignRight_46cf6a64',
        table: 'EfficiencyTable_table_f467cc44',
        tableBody: 'EfficiencyTable_tableBody_5b14613b',
        scrollBar: 'EfficiencyTable_scrollBar_f4e5aa11',
        scrollAreaContent: 'EfficiencyTable_scrollAreaContent_4fa5a5ab',
        mask: 'EfficiencyTable_mask_8fbe6740',
    },
    Fu = {
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
    $u = f(),
    Xu = (e, a, t) => {
        const s = e.getValue('account'),
            n = e.getValue('squadIndex');
        return sl({
            personal: a.account.username === s.username,
            platoonType: tl(t, a.squadIndex, n),
            anonymizer: s.anonymizer,
        })
            ? s.fakeUsername
            : s.username;
    },
    Lu = { [Ge.heavyTank]: 5, [Ge.mediumTank]: 4, [Ge['AT-SPG']]: 3, [Ge.lightTank]: 2, [Ge.SPG]: 1 },
    Ku = ({ team: t, personalInfo: s, breakpointName: n }) => {
        const r = (e, a) =>
                ((e, a, t, s) => {
                    const n = Xu(e, t, s),
                        r = Xu(a, t, s);
                    return n.localeCompare(r);
                })(e, a, s, t),
            i = 'small' === n ? Re.extraSmall : n;
        return [
            $u.accessor('squadIndex', {
                id: Xm,
                header: (a) => e.jsx(Bu, { name: Xm, column: a.column }),
                sortingFn: (e, a) => {
                    const t = a.getValue('squadIndex') - e.getValue('squadIndex');
                    return 0 !== t ? t : r(e, a);
                },
                cell: (a) => e.jsx(Du, { team: t, platoon: a.cell.getValue() }),
                meta: { column: Au[Xm][i] },
            }),
            $u.accessor('account', {
                id: Lm,
                header: (a) => e.jsx(Bu, { team: t, name: Lm, column: a.column }),
                sortDescFirst: !1,
                sortingFn: r,
                cell: (a) =>
                    e.jsx(ru, {
                        account: a.cell.getValue(),
                        team: t,
                        platoon: a.row.original.squadIndex,
                        className: Fu.accountInfo,
                        classNames: { username: Fu.accountName, clanAbbreviation: Fu.clanAbbreviation },
                    }),
                meta: { column: Au[Lm][i], className: Mu.alignLeft },
            }),
            $u.accessor('vehicle', {
                id: Km,
                header: (a) => e.jsx(Bu, { name: Km, column: a.column }),
                sortingFn: (e, a) => {
                    const t = e.getValue('vehicle'),
                        s = a.getValue('vehicle');
                    return t.tier - s.tier || Lu[t.type] - Lu[s.type] || s.name.localeCompare(t.name) || r(e, a);
                },
                cell: (a) =>
                    e.jsx(Gu, {
                        vehicle: a.cell.getValue(),
                        classNames: {
                            name: Fu.vehicleText,
                            level: Fu.vehicleText,
                            type: Fu.vehicleType,
                            image: Fu.vehicleImage,
                        },
                    }),
                meta: { column: Au[Km][i] },
            }),
            $u.accessor('efficiencyValues', {
                id: Ym,
                header: (a) => e.jsx(Bu, { name: Ym, column: a.column }),
                sortingFn: (e, a) =>
                    e.getValue('damageDealt').damageDealt - a.getValue('damageDealt').damageDealt || r(e, a),
                cell: (t) =>
                    e.jsx(ku, {
                        value: t.getValue().damageDealt,
                        className: a(Fu.numberValue, Fu.numberValue__alignRight),
                    }),
                meta: { column: Au[Ym][i], className: Mu.alignRight },
            }),
            $u.accessor('efficiencyValues', {
                id: Um,
                header: (a) => e.jsx(Bu, { name: Um, column: a.column }),
                sortingFn: (e, a) =>
                    e.getValue('kills').substractedAlliesKills - a.getValue('kills').substractedAlliesKills || r(e, a),
                cell: (a) =>
                    e.jsx(ku, { showZero: !1, value: a.getValue().substractedAlliesKills, className: Fu.numberValue }),
                meta: { column: Au[Um][i] },
            }),
            $u.accessor('efficiencyValues', {
                id: Zm,
                header: (a) => e.jsx(Bu, { name: Zm, column: a.column }),
                sortingFn: (e, a) => e.getValue('earnedXp').earnedXp - a.getValue('earnedXp').earnedXp || r(e, a),
                cell: (a) => e.jsx(ku, { value: a.getValue().earnedXp, className: Fu.numberValue }),
                meta: { column: Au[Zm][i], className: Mu.alignRight },
            }),
            $u.accessor('achievements', {
                id: qm,
                header: (a) => e.jsx(Bu, { name: qm, column: a.column, className: Mu.achievementCell }),
                sortingFn: (e, a) => e.getValue('achievements').length - a.getValue('achievements').length || r(e, a),
                cell: (a) => e.jsx(ou, { achievements: a.getValue() }),
                meta: { column: Au[qm][i], className: Mu.alignLeft },
            }),
        ];
    },
    qu = 'Header_row_e61ae0d9',
    Yu = 'Header_rowDivider_f54d9df6',
    Uu = 'Header_rowDividerImage_19f6e11',
    Zu = 'Header_cell_70aa1da5';
function Ju({ className: a }) {
    const { table: t } = Ne(),
        s = j();
    return e.jsxs(ye.Header, {
        className: a,
        children: [
            e.jsx(um, { classNames: { base: Yu, image: Uu } }),
            E(t.getHeaderGroups(), (a, t) =>
                e.jsx(
                    ye.Row,
                    {
                        className: qu,
                        children: E(a.headers, (a, n) => {
                            return e.jsx(
                                ye.Cell,
                                {
                                    onClick:
                                        ((r = a.column.getToggleSortingHandler()),
                                        function (e) {
                                            (null == r || r(e),
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
                                    cell: { ...a, rowIndex: t, index: n, tablePart: xe.header },
                                    className: Zu,
                                    children: !a.isPlaceholder && _(a.column.columnDef.header, a.getContext()),
                                },
                                a.id,
                            );
                            var r;
                        }),
                    },
                    a.id,
                ),
            ),
        ],
    });
}
const Qu = 'SelectedRowTail_selectedRowTail_8abda9c8',
    ep = 'SelectedRowTail_selectedRowTail__hasWidth_6cb87e09',
    ap = 'SelectedRowTail_selectedRowVerticalLine_c502cc58',
    tp = 'SelectedRowTail_selectedRowTriangle_6f2b6bb3',
    sp = 'SelectedRowTail_rowDivider_8fbc881',
    np = 'SelectedRowTail_rowDivider__bottom_4111cb99',
    rp = 'SelectedRowTail_rowDividerImage_d11f29d5';
function ip({ className: t, short: s }) {
    return e.jsxs('div', {
        className: a(Qu, !s && ep, t),
        children: [
            e.jsx(um, { classNames: { base: sp, image: rp } }),
            e.jsx(um, { classNames: { base: a(sp, np), image: rp } }),
            e.jsx('div', { className: ap }),
            e.jsx('div', { className: tp }),
        ],
    });
}
const lp = 'personal',
    op = 'personalSquad',
    cp = 'none',
    dp = r(function ({ row: t, team: s, rowIndex: n, scrollbarVisible: r }) {
        const { model: i, controls: l } = rl(),
            o = j(),
            c = be(
                (e) => {
                    (e.stopPropagation(),
                        o.play('click', { original: e, target: 'team-efficiency:efficiency-table:body:row' }),
                        l.teamEfficiency.selectRow({ team: s, username: t.original.account.username }));
                },
                [l.teamEfficiency, t.original.account.username, o, s],
                400,
            ),
            d = i.teamsStatistic.selectedRow.get(),
            m = i.computes.personalInfo(),
            u = (() => {
                if (m.account.username === t.original.account.username) return lp;
                return tl(s, m.squadIndex, t.original.squadIndex) === el ? op : cp;
            })(),
            p = t.original.account.teamKiller,
            f = t.original.account.killed,
            b = (null == d ? void 0 : d.team) === s && d.username === t.original.account.username,
            v = ge({ args: { vehicleCD: t.original.vehicle.vehicleCD, databaseID: t.original.databaseId } });
        return e.jsxs(ye.Row, {
            ...(u !== lp && v),
            onMouseEnter: (e) =>
                o.play('mouse-enter', { target: 'team-efficiency:efficiency-table:body:row', original: e }),
            className: a(
                Fu.tableBodyRow,
                b && Fu.tableBodyRow__selected,
                u !== cp && Fu[`tableBodyRow__${u}`],
                p && Fu.tableBodyRow__teamKiller,
                f && Fu.tableBodyRow__killed,
            ),
            onClick: c,
            children: [
                e.jsxs('div', {
                    className: Fu.selectedOverlay,
                    children: [
                        e.jsx(um, { classNames: { base: Fu.selectedOverlayDivider, image: Fu.selectedOverlayImage } }),
                        e.jsx(um, {
                            classNames: {
                                base: a(Fu.selectedOverlayDivider, Fu.selectedOverlayDivider__bottom),
                                image: Fu.selectedOverlayImage,
                            },
                        }),
                        e.jsx(ip, {
                            short: r && s === Zi,
                            className: a(Fu.selectedRowTail, Fu[`selectedRowTail__${s}`]),
                        }),
                    ],
                }),
                e.jsx(um, {
                    classNames: { base: a(Fu.rowDivider, b && Fu.rowDivider__selected), image: Fu.rowDividerImage },
                }),
                E(t.getVisibleCells(), (a, t) =>
                    e.jsx(
                        ye.Cell,
                        {
                            cell: { ...a, rowIndex: n, index: t, tablePart: xe.body },
                            children: _(a.column.columnDef.cell, a.getContext()),
                        },
                        a.id,
                    ),
                ),
                e.jsx('div', { className: Fu.hoverOverlay }),
            ],
        });
    });
function mp({ team: a }) {
    const { table: s } = Ne(),
        { api: n } = P(),
        r = je(),
        i = t.useRef(null),
        [l, o] = t.useState(!1),
        [c, d] = p(() => ({ from: { maskSize: '100% 100%' } }));
    return (
        t.useEffect(() => {
            function e() {
                r.run(() => {
                    (!(function () {
                        const [, e] = n.getBounds();
                        o(e > 0);
                    })(),
                        (function () {
                            const [, e] = n.getBounds(),
                                a = (n.animationScroll.scrollPosition.get() / e) * 7;
                            d.start({ to: { maskSize: `100% ${e > 0 ? 100 + a : 107}%` } });
                        })());
                });
            }
            return (
                n.events.on('recalculateContent', e),
                n.events.on('rest', e),
                n.events.on('change', e),
                n.events.on('resizeHandled', e),
                e(),
                () => {
                    (n.events.off('recalculateContent', e),
                        n.events.off('rest', e),
                        n.events.off('change', e),
                        n.events.off('resizeHandled', e));
                }
            );
        }, [n, r, d]),
        e.jsxs(ye.Body, {
            className: Mu.tableBody,
            children: [
                e.jsx(u.div, {
                    className: Mu.mask,
                    style: c,
                    children: e.jsx(k, {
                        classNames: { wrapper: Mu.scrollWrapper, content: Mu.scrollAreaContent },
                        children: e.jsx('div', {
                            ref: i,
                            className: Mu.rowsWrapper,
                            children: E(s.getRowModel().rows, (t, s) =>
                                e.jsx(dp, { row: t, rowIndex: s, team: a, scrollbarVisible: l }, t.id),
                            ),
                        }),
                    }),
                }),
                e.jsx(B, { classNames: { base: Mu.scrollBar } }),
            ],
        })
    );
}
const up = S('TeamEfficiencyTable', Mu.efficiencyTable, {
        variants: { team: { [Zi]: Mu.efficiencyTable__allies, [Ji]: Mu.efficiencyTable__enemies } },
    }),
    pp = {
        [oi.Squad]: Xm,
        [oi.Player]: Lm,
        [oi.Damage]: Ym,
        [oi.Frag]: Um,
        [oi.Xp]: Zm,
        [oi.Vehicle]: Km,
        [oi.Medal]: qm,
    },
    _p = r(({ team: a, data: s, className: n }) => {
        const { model: r, controls: i } = rl(),
            l = r.computes.personalInfo(),
            o = r.teamsStatistic.sorting.get(),
            c = t.useMemo(() => [{ id: pp[o.column], desc: o.sortDirection === ci.Desc }], [o.column, o.sortDirection]),
            d = se().breakpoint.name,
            m = t.useCallback(
                (e) => {
                    const a = (e instanceof Function ? e(c) : e)[0] ?? { id: Km, desc: !0 };
                    i.teamEfficiency.sort({
                        column: Object.keys(pp).find((e) => pp[e] === a.id) || oi.Vehicle,
                        sortDirection: a.desc ? ci.Desc : ci.Asc,
                    });
                },
                [c, i.teamEfficiency],
            ),
            u = t.useMemo(() => Ku({ team: a, personalInfo: l, breakpointName: d }), [a, d, l]);
        return (
            V(Me(d), `Such breakpoint ${d} is not supported`),
            e.jsx(Ae, {
                columns: u,
                data: s,
                enableMultiRowSelection: !1,
                enableSortingRemoval: !1,
                sorting: c,
                onSortingChange: m,
                getRowId: (e) => e.account.username,
                getFilteredRowModel: b(),
                globalFilterFn: (e) => 65281 !== e.original.vehicle.vehicleCD,
                enableSorting: !0,
                initialState: { globalFilter: !0 },
                children: e.jsx(up, {
                    team: a,
                    className: n,
                    children: e.jsxs(
                        ye,
                        {
                            className: Mu.table,
                            children: [
                                e.jsx(Ju, { className: Mu.header }),
                                e.jsx(C, { children: e.jsx(mp, { team: a }) }),
                            ],
                        },
                        d,
                    ),
                }),
            })
        );
    }),
    fp = {
        base: 'TeamEfficiency_92585566',
        wrapper: 'TeamEfficiency_wrapper_a2a49ce',
        table: 'TeamEfficiency_table_5763cf17',
        table__hidden: 'TeamEfficiency_table__hidden_e8864815',
        details: 'TeamEfficiency_details_f087bb8e',
        details__visible: 'TeamEfficiency_details__visible_eaf91b76',
    },
    bp = S('TeamEfficiency', fp.base),
    vp = r(function ({ className: t }) {
        const { model: s } = rl(),
            n = s.teamsStatistic.allies.get(),
            r = s.teamsStatistic.enemies.get(),
            i = s.teamsStatistic.selectedRow.get();
        return e.jsx(bp, {
            className: a(fp[`base__${null == i ? void 0 : i.team}`], t),
            children: e.jsxs('div', {
                className: fp.wrapper,
                children: [
                    e.jsx($m, {
                        team: Ji,
                        className: a(fp.details, (null == i ? void 0 : i.team) === Ji && fp.details__visible),
                    }),
                    e.jsx(_p, {
                        data: n,
                        team: Zi,
                        className: a(fp.table, (null == i ? void 0 : i.team) === Ji && fp.table__hidden),
                    }),
                    e.jsx($m, {
                        team: Zi,
                        className: a(fp.details, (null == i ? void 0 : i.team) === Zi && fp.details__visible),
                    }),
                    e.jsx(_p, {
                        data: r,
                        team: Ji,
                        className: a(fp.table, (null == i ? void 0 : i.team) === Zi && fp.table__hidden),
                    }),
                ],
            }),
        });
    }),
    hp = {
        tab: 'App_tab_5d913562',
        vignette: 'App_vignette_6896e5b7',
        base: 'App_352edcd8',
        navigation: 'App_navigation_24ac5b4',
        navigation__disabled: 'App_navigation__disabled_f8c46244',
        switcher: 'App_switcher_b0c0c74b',
        content__personal: 'App_content__personal_0',
        tab__personal: 'App_tab__personal_83066945',
        content__teamsStatistics: 'App_content__teamsStatistics_0',
        tab__teamsStatistics: 'App_tab__teamsStatistics_83066945',
        content__financialReport: 'App_content__financialReport_0',
        tab__financialReport: 'App_tab__financialReport_83066945',
        info: 'App_info_e544accb',
    },
    gp = S('PostBattle', hp.base),
    yp = S('PostBattleNavigation', hp.navigation);
function xp() {
    const { active: t } = pe();
    return e.jsxs('div', {
        className: a(hp.content, hp[`content__${t}`]),
        children: [
            e.jsx(dm, { className: a(hp.tab, hp.tab__personal) }),
            e.jsx(vp, { className: a(hp.tab, hp.tab__teamsStatistics) }),
            e.jsx(Fr, { className: a(hp.tab, hp.tab__financialReport) }),
            e.jsx(Xr, { className: a(hp.tab, hp.tab__progression) }),
        ],
    });
}
const Np = r(function () {
    const s = h.resolve('strings'),
        n = j(),
        { battleInfoRef: r, navigationRef: i, completedSteps: l, step: o } = ya(),
        [c] = p(() => ({ from: { opacity: 0, y: '-10rem' }, ref: i })),
        [d] = p(() => ({ from: { opacity: 0 }, ref: r })),
        { model: m, controls: _ } = rl(),
        f = m.computes.personalInfo(),
        b = m.battleInfo.get(),
        { active: v } = pe();
    return (
        we(he.ESCAPE, _.close),
        ee(() => {
            function e(e) {
                e.altKey || e.shiftKey || e.ctrlKey || Fe.tooltip.hideAll();
            }
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }),
        t.useEffect(() => {
            o === ba.fourth && n.play('exitResult', { target: 'post-battle' });
        }, [o, n]),
        e.jsxs(gp, {
            className: a(hp.base, hp[`base__${v}`]),
            children: [
                v !== aa.personal && e.jsx('div', { className: hp.vignette }),
                e.jsx(xp, {}),
                e.jsx(u.div, {
                    style: c,
                    children: e.jsx(yp, {
                        className: !1 === l.has(ba.second) && hp.navigation__disabled,
                        children: e.jsxs($e.Switcher, {
                            className: hp.switcher,
                            children: [
                                e.jsx($e.Tab, {
                                    tabId: aa.personal,
                                    children: y.toUpperCase(
                                        s.readOrEmpty('battle_results.battleResult.navigation.battleResults'),
                                    ),
                                }),
                                e.jsx($e.Tab, {
                                    tabId: aa.teamsStatistics,
                                    children: y.toUpperCase(
                                        s.readOrEmpty('battle_results.battleResult.navigation.teamEfficiency'),
                                    ),
                                }),
                                e.jsx($e.Tab, {
                                    tabId: aa.financialReport,
                                    children: y.toUpperCase(
                                        s.readOrEmpty('battle_results.battleResult.navigation.financialReport'),
                                    ),
                                }),
                            ],
                        }),
                    }),
                }),
                b &&
                    e.jsx(u.div, {
                        className: hp.info,
                        style: d,
                        children: e.jsxs(fa, {
                            children: [
                                e.jsx(fa.Arena, {
                                    arenaName: b.arenaName,
                                    arenaType: b.arenaType,
                                    finishReasonKey: b.finishReasonKey,
                                    status: b.status,
                                    modeName: b.modeName,
                                }),
                                e.jsx(fa.StartTime, { startTime: b.startTime }),
                                e.jsx(fa.Player, {
                                    vehicleName: f.vehicle.name,
                                    userName: f.account.username,
                                    clan: f.account.clanAbbreviation,
                                }),
                                e.jsx(fa.PlayerStatus, {
                                    className: hp.group,
                                    killer: f.killer,
                                    deathReasonKey: f.userStatus.deathReason,
                                    abandonBattle: f.userStatus.abandonBattle,
                                }),
                                e.jsx(fa.CommendationScore, { commendationsReceived: b.commendationsReceived }),
                            ],
                        }),
                    }),
            ],
        })
    );
});
function jp() {
    const a = Xe(),
        { size: t } = M({ size: Le.small }, { large: { size: Le.medium }, extraLarge: { size: Le.large } });
    return e.jsx($e, {
        theme: 'primary',
        size: t,
        active: sa(a.location),
        onActiveChange: (e) => {
            e in aa ? a.push(na[e]) : console.error(`Invalid tab ID: ${e}`);
        },
        children: e.jsx(xa, { children: e.jsx(Np, {}) }),
    });
}
const wp = Ke({
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
});
Ze(
    new qe()
        .add(nl)
        .addWithProps(Ye, { soundsOverrides: wp })
        .addWithProps(Ue, { context: 'model.router' })
        .render(e.jsx(jp, {})),
)
    .then(() => Je(document.getElementById('root')))
    .then(() => Qe());
