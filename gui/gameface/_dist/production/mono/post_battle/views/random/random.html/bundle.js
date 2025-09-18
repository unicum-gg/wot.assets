import {
    j as e,
    e as a,
    r as t,
    y as s,
    K as n,
    x as r,
    z as i,
    q as l,
    _ as o,
    o as c,
    f as d,
    A as m,
    n as u,
    m as p,
    B as _,
    C as f,
} from '../../../chunks/vendor.js';
import {
    F as b,
    r as v,
    b as h,
    e as g,
    f as y,
    g as x,
    h as N,
    j,
    I as w,
    d as I,
    B as A,
    k as S,
    l as C,
    A as B,
    m as P,
    n as k,
    o as E,
    p as T,
    i as D,
    c as V,
    q as z,
    C as H,
    t as O,
    v as W,
    w as G,
    x as M,
    y as X,
    z as $,
    D as F,
    E as L,
    s as K,
    G as q,
    H as U,
    K as Y,
    L as Z,
    N as J,
    O as Q,
    P as ee,
    Q as ae,
    R as te,
    S as se,
    T as ne,
    U as re,
    W as ie,
    X as le,
    Y as oe,
    Z as ce,
    _ as de,
    $ as me,
    a0 as ue,
    a1 as pe,
    a2 as _e,
    a3 as fe,
    a4 as be,
    a5 as ve,
    a6 as he,
    a7 as ge,
    a8 as ye,
    a9 as xe,
    aa as Ne,
    ab as je,
    ac as we,
    ad as Ie,
    ae as Ae,
    af as Se,
    ag as Re,
    ah as Ce,
    ai as Be,
    aj as Pe,
    ak as ke,
    al as Ee,
    am as Te,
    an as De,
    ao as Ve,
    ap as ze,
    aq as He,
    ar as Oe,
    u as We,
    as as Ge,
    at as Me,
    J as Xe,
    au as $e,
    M as Fe,
    a as Le,
    av as Ke,
    aw as qe,
} from '../../../chunks/lib.js';
import { s as Ue, a as Ye, W as Ze, f as Je, r as Qe } from '../../../chunks/flag_view_model.js';
/* empty css                    */ const ea = 'BattleInfo_d5226211',
    aa = 'BattleInfo_group_42ea6ab8',
    ta = 'BattleInfo_commendations_731c9f38',
    sa = 'BattleInfo_commendations_counter_aef426',
    na = 'BattleInfo_commendations_icon_55a703a8',
    ra = [1, 19],
    ia = [1, 10],
    la = ({ className: t, finishReasonKey: s, status: n, modeName: r, arenaType: i, ...l }) => {
        const o = `battle_results.finish.reason.c_${s}${ia.includes(s) ? n : ''}`,
            c = ra.includes(i) ? `arenas.type.${r}.name` : `menu.loading.battleTypes.c_${i}`;
        return e.jsx(b, {
            ...l,
            upgradeLegacy: !0,
            path: 'battle_results.common.arena.fullName',
            params: { 0: e.jsx(b, { path: c }), 1: e.jsx(b, { path: o }) },
            className: a(aa, t),
        });
    };
const oa = -1;
const ca = v.resolve('strings');
const da = t.forwardRef(function (t, s) {
    return e.jsx('div', { ...t, 'data-name': 'BattleInfo', ref: s, className: a(ea, t.className) });
});
((da.Arena = function ({ arenaName: t, className: s, ...n }) {
    return e.jsx(b, {
        className: a(aa, s),
        path: 'battle_results.common.arena.nameAndMode',
        params: { 0: t, 1: e.jsx(la, { ...n }) },
    });
}),
    (da.StartTime = function ({ startTime: t, className: s, ...n }) {
        return e.jsx(b, {
            ...n,
            className: a(aa, s),
            path: 'battle_results.common.startTime',
            params: { 0: g.system.date(t, 'short'), 1: g.system.time(t, 'short') },
        });
    }),
    (da.Player = function ({ className: t, vehicleName: s, userName: n, clan: r, ...i }) {
        return e.jsx(b, {
            ...i,
            upgradeLegacy: !0,
            className: a(aa, t),
            path: 'battle_results.common.arena.fullName',
            params: {
                0: r
                    ? e.jsx(b, { path: 'battle_results.common.player.nameWithClan', params: { name: n, clan: r } })
                    : n,
                1: s,
            },
        });
    }),
    (da.PlayerStatus = function ({ className: t, deathReasonKey: s, killer: n, abandonBattle: r, ...i }) {
        const l = (function ({ deathReasonKey: e, abandonBattle: a }) {
            return a ? 'prematureLeave' : e === oa ? 'alive' : `dead${e}`;
        })({ deathReasonKey: s, abandonBattle: r });
        if (
            (n.username || n.fakeUsername) &&
            !r &&
            s !== oa &&
            (function (e) {
                return Boolean(ca.read(`battle_results.common.vehicleState.${e}_with_killername`));
            })(l)
        ) {
            const s = n.anonymizer ? n.fakeUsername : n.username;
            return e.jsx(b, {
                ...i,
                className: a(aa, t),
                path: `battle_results.common.vehicleState.${l}_with_killername`,
                params: {
                    killername: n.clanAbbreviation
                        ? e.jsx(b, {
                              path: 'battle_results.common.player.nameWithClan',
                              params: { name: s, clan: n.clanAbbreviation },
                          })
                        : s,
                },
            });
        }
        return e.jsx(b, { ...i, className: a(aa, t), path: `battle_results.common.vehicleState.${l}` });
    }),
    (da.CommendationScore = function ({ commendationsReceived: t }) {
        const s = t > 0,
            n = v.resolve('strings'),
            r =
                1 === t
                    ? 'battle_results.comms.likes.pbs.tooltip.bodySingle'
                    : 'battle_results.comms.likes.pbs.tooltip.body',
            i = h({
                header: n.readOrEmpty('battle_results.comms.likes.pbs.tooltip.header'),
                body: n.readOrEmpty(r).replace('{{var}}', t.toString()),
            });
        return s
            ? e.jsxs('div', {
                  ...i,
                  className: a(aa, ta),
                  children: [e.jsx('div', { className: sa, children: t }), e.jsx('div', { className: na })],
              })
            : null;
    }));
const ma = { first: 'first', second: 'second', third: 'third', fourth: 'fourth', fifth: 'fifth' },
    ua = N.cubicBezier(0.33, 0, 0.25, 1),
    pa = 400,
    _a = t.createContext(null);
function fa() {
    const e = t.useContext(_a);
    if (null === e)
        throw new Error('You can use the animation context hooks only with the AnimationProvider component');
    return e;
}
function ba({ children: a }) {
    const [n, r] = t.useState(ma.first),
        [i, l] = t.useState(new Set()),
        o = y(),
        c = x(),
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
            case ma.first:
                return (
                    c.play('showBattleResult', { target: 'animation-context' }),
                    d.start({ y: '0', opacity: 1, config: { duration: pa, easing: ua } }),
                    void m.start({
                        opacity: 1,
                        y: '0',
                        config: { duration: pa, easing: ua },
                        onRest: () => {
                            (r(ma.second), l((e) => j(e, ma.first)));
                        },
                    })
                );
            case ma.second:
                return (
                    u.start({
                        maskSize: '100% 100%',
                        config: { duration: pa, easing: ua },
                        onRest: () => {
                            l((e) => j(e, ma.second));
                        },
                    }),
                    void o.run(() => {
                        (r(ma.third), o.clear());
                    }, 280)
                );
            case ma.third:
                return (
                    p.start({ opacity: 1, y: '0', config: { duration: pa, easing: ua } }),
                    _.start({ opacity: 1, y: '0', config: { duration: pa, easing: ua } }),
                    f.start({
                        opacity: 1,
                        config: { duration: pa, easing: ua },
                        onRest: () => {
                            l((e) => j(e, ma.third));
                        },
                    }),
                    void o.run(() => {
                        (r(ma.fourth), o.clear());
                    }, 280)
                );
            case ma.fourth:
                return (
                    v.start({
                        maskSize: '100% 100%',
                        config: { duration: pa, easing: ua },
                        onRest: () => {
                            l((e) => j(e, ma.fourth));
                        },
                    }),
                    void o.run(() => {
                        (r(ma.fifth), o.clear());
                    }, 120)
                );
            case ma.fifth:
                (h.start({ opacity: 1, config: { duration: pa, easing: ua } }),
                    b.start({
                        opacity: 1,
                        config: { duration: pa, easing: ua },
                        onRest: () => {
                            l((e) => j(e, ma.fifth));
                        },
                    }));
                break;
            default:
                return;
        }
    }, [n, c, o, _, f, u, b, g, i, d, m, v, p, h]);
    const N = t.useMemo(
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
    return e.jsx(_a.Provider, { value: N, children: a });
}
const va = { base: 'Divider_80a19f4b' };
function ha({ classNames: t }) {
    return e.jsx('div', {
        className: a(va.base, null == t ? void 0 : t.base),
        children: e.jsx(w, {
            className: null == t ? void 0 : t.image,
            width: '100%',
            height: '100%',
            path: 'post_battle.row_divider',
            fit: 'cover',
        }),
    });
}
const ga = 'Header_content_b9e0be90',
    ya = 'Header_title_91e5448a',
    xa = 'Header_divider_eb019c6',
    Na = 'Header_dividerImage_19f6e11',
    ja = I('Header', 'Header_70aa1da5'),
    wa = t.forwardRef(({ title: t, children: s, classNames: n, ...r }, i) => {
        const l = v.resolve('strings');
        return e.jsxs(ja, {
            ...r,
            ref: i,
            children: [
                e.jsxs('div', {
                    className: a(ga, null == n ? void 0 : n.content),
                    children: [
                        e.jsx('div', {
                            className: a(ya, null == n ? void 0 : n.title),
                            children: g.toUpperCase(l.readOrEmpty(t)),
                        }),
                        s,
                    ],
                }),
                e.jsx(ha, { classNames: { base: a(xa, null == n ? void 0 : n.divider), image: Na } }),
            ],
        });
    }),
    Ia = t.forwardRef((a, t) => e.jsx(wa, { ...a, title: 'battle_results.details.xp', ref: t })),
    Aa = (e) => {
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
    Sa = 'IncomeStatement_c4136bc5',
    Ra = 'IncomeStatement_verticalBar_5fb90511',
    Ca = 'IncomeStatement_scrollWrapper_ce2dde41',
    Ba = 'IncomeStatement_scrollContent_72ffb2ee',
    Pa = 'IncomeStatement_scrollContent__initialized_ce1144d0',
    ka = I('CreditsIncomeStatement'),
    Ea = ({ children: t }) => {
        const s = C(),
            n = Aa(s.api);
        return e.jsx(B, { classNames: { wrapper: Ca, content: a(Ba, n && Pa) }, children: t });
    },
    Ta = t.forwardRef(({ children: t, className: s, scrollable: n, ...r }, i) =>
        e.jsx(ka, {
            className: a(Sa, s),
            ...r,
            ref: i,
            children: n
                ? e.jsxs(A, { children: [e.jsx(Ea, { children: t }), e.jsx(S, { classNames: { base: Ra } })] })
                : t,
        }),
    ),
    Da = 'xp',
    Va = 'freeXP',
    za = 'credits',
    Ha = 'gold',
    Oa = 'originalCrystals',
    Wa = 'eventCrystals',
    Ga = 'autoEquipCrystals',
    Ma = 'totalCrystals',
    Xa = 'originalXP',
    $a = 'achievementXP',
    Fa = 'originalXPPenalty',
    La = 'igrBonusXP',
    Ka = 'firstWinXP',
    qa = 'additionalBonusXP',
    Ua = 'boostersXP',
    Ya = 'tacticalTrainingXP',
    Za = 'eventXP',
    Ja = 'referralBonusXP',
    Qa = 'premiumVehicleXP',
    et = 'squadBonusXP',
    at = 'squadPenaltyXP',
    tt = 'wotPlusBonusXP',
    st = 'totalXP',
    nt = 'originalFreeXP',
    rt = 'achievementFreeXP',
    it = 'igrBonusFreeXP',
    lt = 'firstWinFreeXP',
    ot = 'additionalBonusFreeXP',
    ct = 'boostersFreeXP',
    dt = 'militaryManeuversFreeXP',
    mt = 'eventFreeXP',
    ut = 'premiumVehicleFreeXP',
    pt = 'wotPlusBonusFreeXP',
    _t = 'totalFreeXP',
    ft = 'baseEarnedCredits',
    bt = 'squadBonusCredits',
    vt = 'achievementCredits',
    ht = 'boostersCredits',
    gt = 'battlePaymentsCredits',
    yt = 'eventPaymentsCredits',
    xt = 'referralBonusCredits',
    Nt = 'wotPlusBonusCredits',
    jt = 'friendlyFirePenaltyCredits',
    wt = 'friendlyFireCompensationCredits',
    It = 'piggyBankCredits',
    At = 'autoRepairCredits',
    St = 'autoLoadCredits',
    Rt = 'autoEquipCredits',
    Ct = 'intermediateTotalCredits',
    Bt = 'totalCredits',
    Pt = 'goldEventPayments',
    kt = 'goldPiggyBank',
    Et = 'intermediateTotalGold',
    Tt = 'totalGold',
    Dt = 'aogasFactor',
    Vt = 'deserterViolation',
    zt = 'afkViolation',
    Ht = 'suicideViolation',
    Ot = new Set([Fa, Ja, et, at, Ya]),
    Wt = new Set([dt]),
    Gt = new Set([ft, bt, vt, ht, gt, xt, Nt, Vt, Ht, zt, jt, wt, Dt, At, St, Rt]),
    Mt = {
        [$a]: rt,
        [qa]: ot,
        [zt]: zt,
        [Dt]: Dt,
        [Ua]: ct,
        [Vt]: Vt,
        [Za]: mt,
        [Ka]: lt,
        [La]: it,
        [Xa]: nt,
        [Qa]: ut,
        [Ht]: Ht,
        [st]: _t,
        [tt]: pt,
    },
    Xt = { [yt]: Pt, [Ct]: Et, [It]: kt, [Bt]: Tt },
    $t = [Oa, Wa, Ga, Ma],
    Ft = [
        Xa,
        nt,
        $a,
        rt,
        Fa,
        La,
        it,
        Ka,
        lt,
        qa,
        ot,
        Ua,
        ct,
        Ya,
        dt,
        Za,
        mt,
        Ja,
        Qa,
        ut,
        et,
        at,
        Dt,
        tt,
        pt,
        Vt,
        Ht,
        zt,
        st,
        _t,
    ],
    Lt = [ft, bt, vt, ht, gt, yt, Pt, xt, Nt, Vt, Ht, zt, jt, wt, Dt, Ct, Et, At, St, Rt, Bt, Tt, It, kt],
    Kt = new Set([Ma, Xa, nt, st, _t, ft, wt, Ct, Et, At, St, Rt, Bt, Tt, It, kt]),
    qt = new Set([Bt, Tt, Et, Ct]),
    Ut = 'multiplier',
    Yt = 'firstWinMultiplier',
    Zt = 'fractionalMultiplier',
    Jt = 'percent',
    Qt = 'plus',
    es = {
        [La]: Ut,
        [it]: Ut,
        [Ka]: Yt,
        [lt]: Yt,
        [qa]: Ut,
        [ot]: Ut,
        [Dt]: Zt,
        [Vt]: Jt,
        [Ht]: Jt,
        [zt]: Jt,
        [It]: Qt,
        [kt]: Qt,
    };
function as(e) {
    const a = Number(e.trim());
    return Number.isNaN(a)
        ? (console.error(`Invalid referral factor: "${e}" is not a number.`), 0)
        : Math.round(100 * a);
}
function ts(e) {
    return Kt.has(e.paramName);
}
function ss(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.hasAogasFine);
}
function ns(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.isEnabled);
}
const rs = { [Xa]: ts, [nt]: ts, [st]: ts, [_t]: ts, [Dt]: ss, [tt]: ns, [pt]: ns },
    is = {
        [ft]: ts,
        [wt]: ts,
        [Ct]: ts,
        [Et]: ts,
        [At]: ts,
        [St]: ts,
        [Rt]: ts,
        [Bt]: ts,
        [Tt]: ts,
        [Dt]: ss,
        [Nt]: ns,
        [It]: ts,
    };
function ls(e) {
    return !1 !== qt.has(e.paramName) && 0 === e.standard.gold && 0 === e.premium.gold;
}
const os = { [Ct]: (e) => !1 === ls(e), [Bt]: (e) => !1 === ls(e), [It]: (e, a) => a },
    cs = { [Da]: 'library.xp', [Va]: 'library.freeXp', [za]: 'library.credits', [Ha]: 'library.gold' },
    ds = [Dt, Vt, zt, Ht];
function ms(e) {
    return e === Da ? 'library.x2_combatExp' : 'library.x2_combatFreeExp';
}
const us = {
    [La]: (e) => 'library.x2_combatExp',
    [it]: (e) => 'library.x2_combatExp',
    [Ka]: ms,
    [lt]: ms,
    [qa]: ms,
    [ot]: ms,
};
function ps(e, a) {
    if (void 0 === a || ds.includes(a)) return;
    const t = us[a];
    return t ? t(e) : cs[e];
}
function _s(e, a) {
    return $t.indexOf(e.paramName) - $t.indexOf(a.paramName);
}
function fs(e, a) {
    return Ft.indexOf(e.paramName) - Ft.indexOf(a.paramName);
}
function bs(e, a) {
    return Lt.indexOf(e.paramName) - Lt.indexOf(a.paramName);
}
function vs(e) {
    return {
        paramName: e.paramName,
        currencyType: e.currencyType,
        baseValue: e.baseValue,
        premiumValue: e.premiumValue,
        recordsItemsDetails: k(e.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
}
function hs(e, a) {
    const t = [],
        s = [];
    for (const n of e) a(n) ? t.push(n) : s.push(n);
    return [t, s];
}
function gs(e, a) {
    const t = P(e.earned, vs),
        s = P(e.expenses, vs),
        n = P(e.total, vs),
        r = [Ct, Et],
        i = [It, kt],
        [l, o] = hs(n, (e) => r.includes(e.paramName)),
        [c, d] = hs([...t, ...l], (e) => i.includes(e.paramName));
    return {
        records: [...d, ...s].sort(a),
        total: ((m = [...o, ...c]),
        m.filter((e) => {
            const a = Boolean(e.premiumValue || e.baseValue),
                t = Kt.has(e.paramName);
            return a || t;
        })).sort(a),
    };
    var m;
}
const ys = (e) => e in es;
function xs({ xp: e, freeXp: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    T('string' == typeof t, 'xp or freeXp paramName is not provided');
    const s = ys(t) ? es[t] : void 0,
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
function Ns({ credits: e, gold: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    T('string' == typeof t, 'credits or gold paramName is not provided');
    const s = ys(t) ? es[t] : void 0,
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
const js = (e) => e in Mt;
function ws(e, a) {
    const t = e.paramName;
    return (T(js(t), `No analogue for ${t} in free xp parameter names`), a.find((e) => Mt[t] === e.paramName));
}
const Is = (e) => e in Xt;
function As(e, a) {
    const t = e.paramName;
    return (T(Is(t), `No analogue for ${t} in gold parameter names`), a.find((e) => Xt[t] === e.paramName));
}
function Ss(e, a) {
    const t = (function (e, a) {
        return [
            ...E(
                a,
                (e) => Wt.has(e.paramName),
                (e) => xs({ freeXp: e }),
            ),
            ...P(e, (e) => (Ot.has(e.paramName) ? xs({ xp: e }) : xs({ xp: e, freeXp: ws(e, a) }))),
        ];
    })(e, a);
    return t
        .filter((e) => {
            const a = rs[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.freeXp || e.premium.xp || e.standard.freeXp || e.standard.xp);
        })
        .sort(fs);
}
function Rs(e, a) {
    const t = (function (e, a) {
        return P(e, (e) => (Gt.has(e.paramName) ? Ns({ credits: e }) : Ns({ credits: e, gold: As(e, a) })));
    })(e, a);
    return t
        .filter((e) => {
            const a = is[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.credits || e.premium.gold || e.standard.credits || e.standard.gold);
        })
        .sort(bs);
}
function Cs(e) {
    return ((a = e),
    a.filter((e) => {
        const a = Boolean(e.baseValue || e.premiumValue),
            t = Kt.has(e.paramName);
        return a || t;
    })).sort(_s);
    var a;
}
function Bs({ xp: e, freeXp: a }) {
    return (function (e, a) {
        return { records: Ss(e.records, a.records), total: Ss(e.total, a.total) };
    })(
        gs({ earned: e.earned, expenses: e.expenses, total: e.total }),
        gs({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
function Ps({ credits: e, gold: a }) {
    return (function (e, a) {
        return { records: Rs(e.records, a.records), total: Rs(e.total, a.total) };
    })(
        gs({ earned: e.earned, expenses: e.expenses, total: e.total }),
        gs({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
const [ks, Es] = D()(({ observableModel: e }) => {
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
            t = V.model(() =>
                Bs({
                    xp: { earned: a.xp.earned.get(), expenses: a.xp.expenses.get(), total: a.xp.total.get() },
                    freeXp: {
                        earned: a.xp.free.earned.get(),
                        expenses: a.xp.free.expenses.get(),
                        total: a.xp.free.total.get(),
                    },
                }),
            ),
            s = V.model(() =>
                Ps({
                    credits: {
                        earned: a.credits.earned.get(),
                        expenses: a.credits.expenses.get(),
                        total: a.credits.total.get(),
                    },
                    gold: { earned: a.gold.earned.get(), expenses: a.gold.expenses.get(), total: a.gold.total.get() },
                }),
            ),
            n = V.model(() =>
                (function ({ earned: e, expenses: a, total: t }) {
                    const s = gs({ earned: e, expenses: a, total: t });
                    return { records: Cs(s.records), total: Cs(s.total) };
                })({
                    earned: a.crystals.earned.get(),
                    expenses: a.crystals.expenses.get(),
                    total: a.crystals.total.get(),
                }),
            );
        return { ...a, computes: { experience: t, credits: s, crystals: n } };
    }, z),
    Ts = 'ListItem_received_ffdc3010',
    Ds = 'ListItem_separator_71797768',
    Vs = 'ListItem_label_4ab3c391',
    zs = 'ListItem_label__withIcon_c2381aa',
    Hs = 'ListItem_labelIcon_acb0da4',
    Os = I('ListItem', 'ListItem_bcdaabbd'),
    Ws = t.forwardRef(({ labelKey: t, children: s, classNames: n, params: r, labelIconPath: i, ...l }, o) => {
        const c = v.resolve('images');
        return e.jsxs(Os, {
            ...l,
            ref: o,
            'data-test-id': `${t}`,
            children: [
                e.jsxs('div', {
                    className: a(Vs, void 0 !== i && zs, null == n ? void 0 : n.label),
                    children: [
                        void 0 !== i &&
                            e.jsx('div', {
                                style: { backgroundImage: `url(${c.readOrEmpty(i)})` },
                                className: a(Hs, null == n ? void 0 : n.icon),
                            }),
                        e.jsx(b, { upgradeLegacy: !0, path: t, params: r }),
                    ],
                }),
                e.jsxs('div', { className: Ts, children: [e.jsx('div', { className: Ds }), s] }),
            ],
        });
    }),
    Gs = 'Record_420804f3',
    Ms = 'Record_value_4d088deb',
    Xs = 'Record_value__decreasing_8cff45fa',
    $s = ({ formatter: t, value: s, modifier: r, currency: i, classNames: l, iconPath: o }) => {
        if (void 0 === s) return null;
        const c = r === Zt || s < 0;
        return e.jsxs('div', {
            className: a(Gs, null == l ? void 0 : l.base),
            children: [
                e.jsxs('div', {
                    className: a(Ms, c && Xs, null == l ? void 0 : l.value),
                    'data-test-id': `${i}`,
                    children: [
                        n(r)
                            .with(Yt, () => e.jsx(b, { path: 'common.multiplierSmall' }))
                            .with(Ut, () => e.jsx(b, { path: 'common.multiplierSmall' }))
                            .with(Zt, () => e.jsx(b, { path: 'common.multiplierSmall' }))
                            .with(Qt, () => e.jsx(b, { path: 'common.plus' }))
                            .otherwise(() => null),
                        t(s, i),
                        r === Jt && e.jsx(b, { path: 'common.common.percent' }),
                    ],
                }),
                o && e.jsx(w, { width: 24, height: 24, path: o }),
            ],
        });
    },
    Fs = 'RecordGroup_65a30ced',
    Ls = 'RecordGroup_base__inactive_5fd9f274',
    Ks = 'RecordGroup_record_5fd9f274',
    qs = 'RecordGroup_record__extinguished_7fdfcea',
    Us = 'RecordGroup_record__first_9121e1b7',
    Ys = 'RecordGroup_separator_9f211d97',
    Zs = 'RecordGroup_separatorBackground_8a447834',
    Js = 'RecordGroup_value_1f34e2e2',
    Qs = 'RecordGroup_value__total_126d88a1',
    en = 'RecordGroup_value__freeXP_931265db';
function an(e, a) {
    return e !== qa || (void 0 !== a && a > 0);
}
function tn({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case Dt:
            return !1;
        case tt:
        case pt:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const sn = ({ paramName: t, xp: s, freeXp: n, modifier: r, inactive: i, total: l, wotPlusActive: o }) => {
        function c(e) {
            switch (t) {
                case La:
                    return g.formatReal('woZeroDigits', e);
                case Dt:
                    return g.formatReal('fractional', e);
                default:
                    return g.formatNumber('integral', e);
            }
        }
        return e.jsxs('div', {
            className: a(Fs, i && Ls),
            children: [
                e.jsx('div', {
                    className: a(Ks, Us, tn({ wotPlusActive: o, paramName: t, value: s }) && qs),
                    children: e.jsx($s, {
                        value: s,
                        currency: Da,
                        modifier: an(t, s) ? r : void 0,
                        formatter: c,
                        classNames: { value: a(Js, l && Qs) },
                        iconPath: ps(Da, t),
                    }),
                }),
                void 0 !== n && e.jsx('div', { className: Ys, children: e.jsx('div', { className: Zs }) }),
                e.jsx('div', {
                    className: a(Ks, tn({ wotPlusActive: o, paramName: t, value: n }) && qs),
                    children: e.jsx($s, {
                        value: n,
                        currency: Va,
                        modifier: an(t, n) ? r : void 0,
                        formatter: c,
                        classNames: { value: a(Js, en, l && Qs) },
                        iconPath: ps(Va, t),
                    }),
                }),
            ],
        });
    },
    nn = 'Item_groups_a1f0c2a5',
    rn = 'Item_label_7521a1d4',
    ln = 'Item_label__highlighted_36e62867',
    on = 'Item_label__gold_49ec59ab',
    cn = {
        [Xa]: 'title.base',
        [nt]: 'title.base',
        [$a]: 'noPenalty',
        [rt]: 'noPenalty',
        [Fa]: 'friendlyFirePenalty',
        [La]: 'igrBonus.simpleLabel',
        [it]: 'igrBonus.simpleLabel',
        [Ka]: 'firstWin',
        [lt]: 'firstWin',
        [qa]: 'manageableXpBonus',
        [ot]: 'manageableXpBonus',
        [Ua]: 'boosters',
        [ct]: 'boosters',
        [Ya]: 'tacticalTraining',
        [dt]: 'militaryManeuvers',
        [Za]: 'event',
        [mt]: 'event',
        [Ja]: 'referralBonus.fullLabel',
        [Qa]: 'premiumVehicleXP',
        [ut]: 'premiumVehicleXP',
        [et]: 'squadBonus',
        [at]: 'squadXPPenalty',
        [Dt]: 'aogasFactor',
        [tt]: 'wotPlusBonus',
        [pt]: 'wotPlusBonus',
        [Vt]: 'fairPlayViolation.deserter',
        [Ht]: 'fairPlayViolation.suicide',
        [zt]: 'fairPlayViolation.afk',
        [st]: 'total',
        [_t]: 'total',
        originalAlternative: 'xpRecordSimple',
    },
    dn = { [tt]: 'subscription.wot_plus_32x32', [pt]: 'subscription.wot_plus_32x32' },
    mn = new Set([tt, pt]),
    un = () =>
        e.jsx('span', { className: ln, children: e.jsx(b, { path: 'battle_results.details.calculations.maximum' }) }),
    pn = r(
        ({
            record: { paramName: t, premium: s, standard: n, modifier: r, recordsItemsDetails: i },
            total: l,
            ...o
        }) => {
            const { model: c } = Es(),
                d = c.hasAnyPremium.get(),
                m = c.hasWotPlus.get();
            if (!(t in cn)) return null;
            const u = '1' === (null == i ? void 0 : i.isHighScope),
                p = u ? cn.originalAlternative : cn[t],
                _ = null == i ? void 0 : i.referralFactor;
            return e.jsx(Ws, {
                ...o,
                labelIconPath: dn[t],
                labelKey: `battle_results.details.calculations.${p}`,
                params: { ...(_ && { bonusFactor: as(_) }), ...(u && { maximum: e.jsx(un, {}) }) },
                classNames: { label: a(rn, mn.has(t) && on) },
                children: e.jsxs('div', {
                    className: nn,
                    children: [
                        e.jsx(sn, { ...n, paramName: t, modifier: r, inactive: d, total: l, wotPlusActive: m }),
                        e.jsx(sn, { ...s, paramName: t, modifier: r, inactive: !d, total: l, wotPlusActive: m }),
                    ],
                }),
            });
        },
    ),
    _n = 'IncomeStatement_560dd244',
    fn = 'IncomeStatement_base__scroll_fb9f1475',
    bn = 'IncomeStatement_item_48b34a63',
    vn = r(
        t.forwardRef(({ className: t, scrollable: s, ...n }, r) => {
            const { model: i } = Es(),
                l = i.computes.experience();
            return e.jsx(Ta, {
                ...n,
                ref: r,
                className: a(_n, s && fn, t),
                scrollable: s,
                children: P(l.records, (a) => e.jsx(pn, { record: a, className: bn }, a.paramName)),
            });
        }),
    ),
    hn = 'Total_item_a8580361',
    gn = 'Total_divider_1de1ca28',
    yn = 'Total_dividerImage_ab06168d',
    xn = I('ExperienceTotal', 'Total_19236d49'),
    Nn = r(
        t.forwardRef((a, t) => {
            const { model: s } = Es(),
                n = s.computes.experience();
            return e.jsxs(xn, {
                ...a,
                ref: t,
                children: [
                    e.jsx(ha, { classNames: { base: gn, image: yn } }),
                    n.total.map((a) => e.jsx(pn, { record: a, className: hn, total: !0 }, a.paramName)),
                ],
            });
        }),
    ),
    jn = 'Experience_a014c8c',
    wn = 'Experience_base__scroll_f75d07c6',
    In = I('Experience'),
    An = t.forwardRef(({ scrollable: t, className: s, ...n }, r) =>
        e.jsx(In, { ...n, ref: r, className: a(jn, t && wn, s) }),
    );
((An.Header = Ia), (An.Item = pn), (An.Total = Nn), (An.IncomeStatement = vn));
const Sn = 'Header_cbd845ec',
    Rn = 'Header_content_a63fb46c',
    Cn = 'Header_title_7b852a7',
    Bn = 'Header_title__active_e5dd0f77',
    Pn = 'Header_title__premium_2c23921f',
    kn = 'Header_icon_3b4dc587',
    En = r(
        t.forwardRef(({ className: t, ...s }, n) => {
            const { model: r } = Es(),
                i = r.hasAnyPremium.get();
            return e.jsx(wa, {
                ...s,
                ref: n,
                className: a(Sn, t),
                title: 'battle_results.details.credits',
                children: e.jsxs('div', {
                    className: Rn,
                    children: [
                        e.jsx('div', {
                            className: a(Cn, !i && Bn),
                            children: e.jsx(b, { path: 'battle_results.common.details.noPremTitle' }),
                        }),
                        e.jsxs('div', {
                            className: a(Cn, i && Bn, Pn),
                            children: [
                                e.jsx('div', {
                                    className: kn,
                                    children: e.jsx(w, {
                                        width: 32,
                                        height: 32,
                                        path: 'post_battle.wot_premium_32x32',
                                    }),
                                }),
                                e.jsx(b, { path: 'battle_results.getPremiumPopover.prem' }),
                            ],
                        }),
                    ],
                }),
            });
        }),
    ),
    Tn = 'RecordGroup_65a30ced',
    Dn = 'RecordGroup_base__inactive_5fd9f274',
    Vn = 'RecordGroup_record_5fd9f274',
    zn = 'RecordGroup_record__extinguished_7fdfcea',
    Hn = 'RecordGroup_record__first_36c2aa71',
    On = 'RecordGroup_separator_9f211d97',
    Wn = 'RecordGroup_separatorBackground_8a447834',
    Gn = 'RecordGroup_value_9253748c',
    Mn = 'RecordGroup_value__total_126d88a1',
    Xn = 'RecordGroup_value__gold_d7bd74ba';
function $n({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case Dt:
            return !1;
        case Nt:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const Fn = ({ credits: t, gold: s, modifier: n, inactive: r = !1, total: i, paramName: l, wotPlusActive: o }) => {
        function c(e, a) {
            return l === Dt ? g.formatReal('fractional', e) : g.formatNumber(a === Ha ? 'gold' : 'integral', e);
        }
        return e.jsxs('div', {
            className: a(Tn, r && Dn),
            children: [
                e.jsx('div', {
                    className: a(Vn, Hn, $n({ paramName: l, wotPlusActive: o, value: t }) && zn),
                    children: e.jsx($s, {
                        formatter: c,
                        value: t,
                        currency: za,
                        modifier: n,
                        classNames: { value: a(Gn, i && Mn) },
                        iconPath: ps(za, l),
                    }),
                }),
                void 0 !== s && e.jsx('div', { className: On, children: e.jsx('div', { className: Wn }) }),
                e.jsx('div', {
                    className: a(Vn, 0 === s && zn),
                    children: e.jsx($s, {
                        value: s,
                        currency: Ha,
                        modifier: n,
                        classNames: { value: a(Gn, Xn, i && Mn) },
                        formatter: c,
                        iconPath: ps(Ha, l),
                    }),
                }),
            ],
        });
    },
    Ln = 'Item_groups_a1f0c2a5',
    Kn = 'Item_label_7521a1d4',
    qn = 'Item_label__gold_49ec59ab',
    Un = {
        [ft]: 'title.base',
        [bt]: 'squadBonus',
        [vt]: 'noPenalty',
        [ht]: 'boosters',
        [gt]: 'battlePayments',
        [yt]: 'event',
        [Pt]: 'event',
        [xt]: 'referralBonus.fullLabel',
        [Nt]: 'wotPlusBonus',
        [Vt]: 'fairPlayViolation.deserter',
        [Ht]: 'fairPlayViolation.suicide',
        [zt]: 'fairPlayViolation.afk',
        [jt]: 'friendlyFirePenalty',
        [wt]: 'friendlyFireCompensation',
        [Dt]: 'aogasFactor',
        [Ct]: 'intermediateTotal',
        [Et]: 'intermediateTotal',
        [At]: 'autoRepair',
        [St]: 'autoLoad',
        [Rt]: 'autoEquip',
        [Bt]: 'total',
        [Tt]: 'total',
        [It]: 'piggyBankInfo',
        [kt]: 'piggyBankInfo',
    },
    Yn = { [Nt]: 'subscription.wot_plus_32x32' },
    Zn = r(({ record: t, total: s, ...n }) => {
        var r;
        const { model: i } = Es(),
            l = i.hasAnyPremium.get(),
            o = i.hasWotPlus.get(),
            { paramName: c, premium: d, standard: m, modifier: u, recordsItemsDetails: p } = t;
        if (!(c in Un)) return null;
        const _ = null == p ? void 0 : p.referralFactor,
            f = Un[c],
            b = (null == (r = os[c]) ? void 0 : r.call(os, t, o)) ?? !0;
        return e.jsx(Ws, {
            ...n,
            labelIconPath: Yn[c],
            labelKey: `battle_results.details.calculations.${f}`,
            classNames: { label: a(Kn, c === Nt && qn) },
            params: { ...(_ && { bonusFactor: as(_) }) },
            children: e.jsxs('div', {
                className: Ln,
                children: [
                    e.jsx(Fn, {
                        paramName: c,
                        credits: m.credits,
                        gold: !1 === b ? void 0 : m.gold,
                        modifier: u,
                        inactive: l,
                        total: s,
                        wotPlusActive: o,
                    }),
                    e.jsx(Fn, {
                        paramName: c,
                        credits: d.credits,
                        gold: !1 === b ? void 0 : d.gold,
                        modifier: u,
                        inactive: !l,
                        total: s,
                        wotPlusActive: o,
                    }),
                ],
            }),
        });
    }),
    Jn = 'IncomeStatement_560dd244',
    Qn = 'IncomeStatement_base__scroll_fb9f1475',
    er = 'IncomeStatement_item_48b34a63',
    ar = r(
        t.forwardRef(({ className: t, scrollable: s, ...n }, r) => {
            const { model: i } = Es(),
                l = i.computes.credits();
            return e.jsx(Ta, {
                ...n,
                ref: r,
                className: a(Jn, s && Qn, t),
                scrollable: s,
                children: P(l.records, (a) => e.jsx(Zn, { record: a, className: er }, a.paramName)),
            });
        }),
    ),
    tr = 'Total_item_de53c8b0',
    sr = 'Total_divider_1de1ca28',
    nr = 'Total_dividerImage_ab06168d',
    rr = I('CreditsTotal', 'Total_19236d49'),
    ir = r(
        t.forwardRef((a, t) => {
            const { model: s } = Es(),
                n = s.computes.credits();
            return e.jsxs(rr, {
                ...a,
                ref: t,
                children: [
                    e.jsx(ha, { classNames: { base: sr, image: nr } }),
                    n.total.map((a) => e.jsx(Zn, { record: a, className: tr, total: !0 }, a.paramName)),
                ],
            });
        }),
    ),
    lr = 'Credits_68f91d81',
    or = 'Credits_base__scroll_759f08f3',
    cr = I('Credits'),
    dr = t.forwardRef(({ scrollable: t, className: s, ...n }, r) =>
        e.jsx(cr, { ...n, ref: r, className: a(lr, t && or, s) }),
    );
((dr.Header = En), (dr.Item = Zn), (dr.Total = ir), (dr.IncomeStatement = ar));
const mr = 'Item_currencyValue_81f5b9fb',
    ur = 'Item_currencyValue__total_a7596c8e',
    pr = 'Item_currencyValue__negative_5e98369f',
    _r = 'Item_label_5d6964d6',
    fr = {
        [Oa]: 'battle_results.details.calculations.crystal.total',
        [Wa]: 'battle_results.details.calculations.crystal.events',
        [Ga]: 'battle_results.details.calculations.autoBoosters',
        [Ma]: 'battle_results.details.calculations.total',
    },
    br = ({ record: t, total: s, ...n }) => {
        const { paramName: r, baseValue: i } = t;
        return r in fr
            ? e.jsx(Ws, {
                  ...n,
                  labelKey: fr[r],
                  classNames: { label: _r, ...n.classNames },
                  children: e.jsx(H, {
                      reverse: !0,
                      type: 'crystal',
                      size: O.small,
                      children: e.jsx('div', {
                          className: a(mr, i < 0 && pr, s && ur),
                          children: g.formatNumber('integral', i),
                      }),
                  }),
              })
            : (console.error(`Parameter name "${r} is not valid for bonds`), null);
    },
    vr = 'IncomeStatement_item_48b34a63',
    hr = I('BondsIncomeStatement'),
    gr = r(
        t.forwardRef((a, t) => {
            const { model: s } = Es(),
                n = s.computes.crystals();
            return e.jsx(hr, {
                ...a,
                ref: t,
                children: n.records.map((a) => e.jsx(br, { record: a, className: vr }, a.paramName)),
            });
        }),
    ),
    yr = 'Total_item_a8580361',
    xr = 'Total_divider_1de1ca28',
    Nr = 'Total_dividerImage_ab06168d',
    jr = I('BondsTotal', 'Total_120fb0c4'),
    wr = r(
        t.forwardRef((a, t) => {
            const { model: s } = Es(),
                n = s.computes.crystals();
            return e.jsxs(jr, {
                ...a,
                ref: t,
                children: [
                    e.jsx(ha, { classNames: { base: xr, image: Nr } }),
                    n.total.map((a) => e.jsx(br, { total: !0, record: a, className: yr }, a.paramName)),
                ],
            });
        }),
    ),
    Ir = t.forwardRef((a, t) => e.jsx(wa, { ...a, title: 'battle_results.details.crystal', ref: t })),
    Ar = I('Bonds');
((Ar.Header = Ir), (Ar.Item = br), (Ar.Total = wr), (Ar.IncomeStatement = gr));
const Sr = 'FinancialReport_content_99bf970f',
    Rr = 'FinancialReport_leftContent_75c21204',
    Cr = 'FinancialReport_bonds_cc81cbc0',
    Br = 'FinancialReport_headerContent_aad9188f',
    Pr = 'FinancialReport_experience_7219d4d3',
    kr = 'FinancialReport_credits_7712b0c',
    Er = 'FinancialReport_header_d56ebc61',
    Tr = 'FinancialReport_total_bdf3e42b',
    Dr = I('FinancialReport', 'FinancialReport_fa8aa536'),
    Vr = ({ className: a }) => {
        const [s, n] = t.useState({ credits: !1, experience: !1 }),
            r = t.useRef(null),
            i = t.useRef(null),
            l = t.useRef(null),
            o = W({ margin: 18 }, { medium: { margin: 19 }, large: { margin: 16 }, extraLarge: { margin: 30 } }),
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
            G(r, c),
            e.jsx(ks, {
                children: e.jsx(Dr, {
                    className: a,
                    children: e.jsxs('div', {
                        className: Sr,
                        children: [
                            e.jsxs('div', {
                                className: Rr,
                                ref: r,
                                children: [
                                    e.jsxs(dr, {
                                        ref: i,
                                        scrollable: s.credits,
                                        className: kr,
                                        children: [
                                            e.jsx(dr.Header, { className: Er }),
                                            e.jsx(dr.IncomeStatement, { scrollable: s.credits }),
                                            e.jsx(dr.Total, { className: Tr }),
                                        ],
                                    }),
                                    e.jsxs(An, {
                                        ref: l,
                                        scrollable: s.experience,
                                        className: Pr,
                                        children: [
                                            e.jsx(An.Header, { className: Er, classNames: { content: Br } }),
                                            e.jsx(An.IncomeStatement, { scrollable: s.experience }),
                                            e.jsx(An.Total, { className: Tr }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs(Ar, {
                                className: Cr,
                                children: [
                                    e.jsx(Ar.Header, { className: Er, classNames: { content: Br } }),
                                    e.jsx(Ar.IncomeStatement, {}),
                                    e.jsx(Ar.Total, { className: Tr }),
                                ],
                            }),
                        ],
                    }),
                }),
            })
        );
    },
    zr = I('MissionsProgress', 'MissionsProgress_ff6d39db'),
    Hr = t.memo(function ({ className: a }) {
        return e.jsx(zr, { className: a, children: 'Missions Progress' });
    }),
    Or = v.resolve('strings'),
    Wr = ['huntsman', 'medalGore', 'medalStark'],
    Gr = {
        markOfMastery: 'markOfMastery',
        marksOnGun: 'marksOnGun',
        epic: 'epic',
        specialAchievements: 'specialAchievements',
        right: 'right',
        left: 'left',
        other: 'other',
    },
    Mr = [Gr.markOfMastery, Gr.marksOnGun, Gr.epic, Gr.specialAchievements, Gr.right, Gr.left, Gr.other];
function Xr(e) {
    return e.groupID === Gr.markOfMastery
        ? Gr.markOfMastery
        : e.groupID === Gr.marksOnGun
          ? Gr.marksOnGun
          : e.epic
            ? Gr.epic
            : Wr.includes(e.name)
              ? Gr.specialAchievements
              : e.groupID === Gr.right
                ? Gr.right
                : e.groupID === Gr.left
                  ? Gr.left
                  : (console.error(`Achievement ${e.name} with a group ${e.groupID} is not detected`), Gr.other);
}
function $r(e) {
    return M(e, (e, a) => {
        const t = Xr(e),
            s = Xr(a),
            n = Mr.indexOf(t),
            r = Mr.indexOf(s);
        return t !== s
            ? n - r
            : (function (e, a) {
                  const t = Or.readOrEmpty(`achievements.${e.name}`),
                      s = Or.readOrEmpty(`achievements.${a.name}`);
                  return t.localeCompare(s);
              })(e, a);
    });
}
const Fr = 'default',
    Lr = 'hover',
    Kr = 'extinct';
function qr(e, a) {
    return void 0 === a ? Fr : a === e ? Lr : Kr;
}
const Ur = { marksOnGun1: '1_mark', marksOnGun2: '2_marks', marksOnGun3: '3_marks' };
function Yr({ iconName: e, groupID: a, vehicleNation: t }) {
    return 'marksOnGun' === a ? `marksOnGun.x240x240.${t}_${Ur[e]}` : `achievement.x240x240.${e}`;
}
const Zr = 'marks',
    Jr = 'epicAndHeroic',
    Qr = 'others',
    ei = ['bombardier', 'medalAntiSpgFire', 'kamikaze', 'raider', 'medalMonolith', 'medalCoolBlood'];
var ai = ((e) => (
        (e.Squad = 'squad'),
        (e.Player = 'player'),
        (e.Damage = 'damage'),
        (e.Frag = 'frag'),
        (e.Xp = 'xp'),
        (e.Vehicle = 'tank'),
        (e.Medal = 'medal'),
        e
    ))(ai || {}),
    ti = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(ti || {}),
    si = ((e) => (
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
    ))(si || {}),
    ni = ((e) => (
        (e[(e.PremiumInfo = 0)] = 'PremiumInfo'),
        (e[(e.PremiumBonus = 1)] = 'PremiumBonus'),
        (e[(e.PremiumEarnings = 2)] = 'PremiumEarnings'),
        (e[(e.PremiumAdvertising = 3)] = 'PremiumAdvertising'),
        (e[(e.PlusInfo = 4)] = 'PlusInfo'),
        (e[(e.PlusEarnings = 5)] = 'PlusEarnings'),
        (e[(e.PlusYouRock = 6)] = 'PlusYouRock'),
        e
    ))(ni || {});
const ri = {
        plusInfo: ni.PlusInfo,
        premiumInfo: ni.PremiumInfo,
        premiumAdvertising: ni.PremiumAdvertising,
        premiumBonus: ni.PremiumBonus,
        premiumEarnings: ni.PremiumEarnings,
        plusEarnings: ni.PlusEarnings,
        plusYouRock: ni.PlusYouRock,
    },
    ii = Object.values(ri);
const li = 'premiumInfo',
    oi = 'applyBonus',
    ci = 'appliedBonus',
    di = 'isNotVictory',
    mi = 'requiredRecentBattleAndVehicle',
    ui = 'invalidBattleType',
    pi = 'noVehicle',
    _i = 'fasterEducationCrewNotActive',
    fi = 'fasterEducationCrewActive',
    bi = 'noCrew',
    vi = 'premiumEarnings',
    hi = 'creditsAdvertising',
    gi = 'premiumAdvertising',
    yi = 'squadAdvertising',
    xi = 'bonusAdvertising',
    Ni = 'questsAdvertising',
    ji = 'plusInfo',
    wi = 'plusEarnings',
    Ii = 'plusYouRock',
    Ai = { credits: hi, premium: gi, squad: yi, bonus: xi, quests: Ni },
    Si = [Ai.credits, Ai.premium, Ai.squad, Ai.bonus, Ai.quests];
const Ri = {
        [si.IsApplied]: ci,
        [si.DeprecatedResults]: mi,
        [si.IsNotVictory]: di,
        [si.InvalidBattleType]: ui,
        [si.NoVehicle]: pi,
        [si.FasterEducationCrewActive]: fi,
        [si.FasterEducationCrewNotActive]: _i,
        [si.NoCrew]: bi,
    },
    Ci = {
        [ri.plusInfo]: { define: () => ji },
        [ri.premiumInfo]: { define: () => li },
        [ri.premiumAdvertising]: {
            define: ({ supportedAdvertisements: e, usedAdvertisements: a }) => {
                const t = e.filter((e) => !1 === a.includes(e))[0] ?? e[0];
                return (
                    T(
                        void 0 !== t,
                        'advertisingState is not recognized. Check please supportedAdvertisements state. It is not possible to have empty supportedAdvertisements array in case if the widget in the premiumAdvertising state',
                    ),
                    t
                );
            },
        },
        [ri.premiumBonus]: {
            define: ({ restriction: e }) => (e !== si.NoRestriction && e !== si.NotApplyingError ? Ri[e] : oi),
        },
        [ri.premiumEarnings]: { define: () => vi },
        [ri.plusEarnings]: { define: () => wi },
        [ri.plusYouRock]: { define: () => Ii },
    };
function Bi(e) {
    return function (a) {
        return e(i(() => l(a)));
    };
}
const Pi = [Ai.premium, Ai.squad, Ai.credits],
    ki = ['ctf30x30', 'domination30x30'];
var Ei = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
        Ei || {},
    ),
    Ti = ((e) => (
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
    ))(Ti || {});
function Di(e) {
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
const Vi = [st, Bt];
function zi(e, a) {
    const { recordsItemsDetails: t, baseValue: s, premiumValue: n, currencyType: r, paramName: i } = vs(e),
        l = a ? n : s,
        o = l >= 0 ? l : 0;
    return { paramName: i, type: r, visibleIfZero: Vi.includes(i) || 'True' === t.isAvailable, value: o };
}
function Hi(e) {
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
function Oi(e) {
    return {
        groupID: e.groupID,
        iconName: e.iconName,
        name: e.name,
        epic: e.isEpic,
        tooltipArgs: e.tooltipArgs,
        tooltipId: e.tooltipId,
    };
}
function Wi(e) {
    return { labelKey: e.labelKey, paramValueType: e.paramValueType, value: P(e.value, (e) => e) };
}
function Gi(e) {
    return {
        ...Wi({ label: e.label, labelKey: e.labelKey, paramValueType: e.paramValueType, value: P(e.value, (e) => e) }),
        details: P(e.details, (e) => Wi(e)),
    };
}
function Mi(e) {
    var a;
    const t = null == (a = X(e.detailedStatistics, (e) => e.labelKey === Ti.TeamHitsDamage)) ? void 0 : a.value,
        s = void 0 !== t ? $(t, 0) : 0,
        n = e.efficiencyValues.kills - (s ?? 0);
    return {
        personal: e.isPersonal,
        squadIndex: e.squadIndex,
        achievements: P(e.achievements, Oi),
        account: L(e.userNames),
        userStatus: ((i = e.userStatus), { abandonBattle: i.isLeftBattle, deathReason: i.deathReason }),
        killer: L(e.userStatus.killer),
        vehicle: { ...F(e.vehicle), longName: e.vehicle.longName },
        efficiencyValues: {
            substractedAlliesKills: n,
            ...((r = e.efficiencyValues), { damageDealt: r.damageDealt, kills: r.kills, earnedXp: r.earnedXp }),
        },
        detailedStatistics: P(e.detailedStatistics, Gi),
        databaseId: e.databaseID,
    };
    var r, i;
}
const Xi = 'allies',
    $i = 'enemies',
    Fi = ['dead0', 'dead1', 'dead2', 'dead3', 'dead5', 'dead7'],
    Li = 'personal',
    Ki = 'alien';
function qi(e, a, t) {
    return 0 === t ? null : a === t && e === Xi ? Li : Ki;
}
function Ui({ anonymizer: e, personal: a, platoonType: t }) {
    return !(a || !e) && (t === Ki || null === t);
}
const [Yi, Zi] = D()(
        (e) => {
            const { observableModel: a, cleanup: t } = e,
                s = {
                    teamsStatistic: {
                        ...a.primitives(['sortingColumn', 'sortingOrder'], 'teamStats'),
                        allies: a.array('teamStats.allies'),
                        enemies: a.array('teamStats.enemies'),
                    },
                    personalEffiency: {
                        ...a.primitives(['capturePoints', 'droppedCapturePoints'], 'baseCaptureInfo'),
                        details: a.array('detailedPersonalEfficiency'),
                    },
                    additionalBonus: a.object('additionalBonus'),
                    xp: { total: a.arrayClone('financialReport.xp.total') },
                    credits: { total: a.arrayClone('financialReport.credits.total') },
                    crystals: {
                        total: a.arrayClone('financialReport.crystals.total'),
                        earned: a.arrayClone('financialReport.crystals.earned'),
                    },
                    gold: { total: a.arrayClone('financialReport.gold.total') },
                },
                n = {
                    battleInfo: a.transform(Di, 'battleInfo'),
                    additionalBonus: a.transform(Hi, 'additionalBonus'),
                    allPlayersDictionary: c.box({}),
                    personalEfficiency: {
                        opened: c.box(!1),
                        achievements: a.transform((e) => $r(P(e, Oi)), 'achievements'),
                        statistics: { details: c.box([]), capturePoints: c.box(0), droppedCapturePoints: c.box(0) },
                    },
                    teamsStatistic: {
                        allies: c.box([]),
                        enemies: c.box([]),
                        sorting: c.box({ column: ai.Vehicle, sortDirection: ti.Desc }),
                        selectedRow: c.box(),
                    },
                    user: { names: c.box(), status: c.box() },
                    playerSatisfaction: a.object('playerSatisfaction'),
                };
            (Bi(t)(() => {
                const e = {};
                (n.teamsStatistic.allies.set(
                    P(s.teamsStatistic.allies.get(), (a) => {
                        const t = Mi(a);
                        return ((e[t.account.username] = t), t);
                    }),
                ),
                    n.teamsStatistic.enemies.set(
                        P(s.teamsStatistic.enemies.get(), (a) => {
                            const t = Mi(a);
                            return ((e[t.account.username] = t), t);
                        }),
                    ));
                const a = n.allPlayersDictionary.get();
                n.allPlayersDictionary.set({ ...a, ...e });
            }),
                Bi(t)(() => {
                    return n.teamsStatistic.sorting.set(
                        ((e = s.teamsStatistic.sortingColumn.get()),
                        (a = s.teamsStatistic.sortingOrder.get()),
                        { column: e, sortDirection: a }),
                    );
                    var e, a;
                }),
                Bi(t)(() => {
                    (n.personalEfficiency.statistics.capturePoints.set(s.personalEffiency.capturePoints.get()),
                        n.personalEfficiency.statistics.droppedCapturePoints.set(
                            s.personalEffiency.droppedCapturePoints.get(),
                        ));
                }));
            const r = V.structural(() =>
                    (function ({ anyPremium: e, credits: a, crystals: t, gold: s, xp: n }) {
                        const r = X(a, (e) => e.paramName === Ct),
                            i = X(s, (e) => e.paramName === Tt),
                            l = X(n, (e) => e.paramName === st),
                            o = X(t, (e) => e.paramName === Oa),
                            c = [];
                        return (
                            r && c.push(zi(r, e)),
                            i && c.push(zi(i, e)),
                            l && c.push(zi(l, e)),
                            o && c.push(zi(o, e)),
                            c
                        );
                    })({
                        anyPremium: s.additionalBonus.get().hasAnyPremium,
                        credits: s.credits.total.get(),
                        crystals: s.crystals.earned.get(),
                        gold: s.gold.total.get(),
                        xp: s.xp.total.get(),
                    }),
                ),
                i = V.shallow(() => {
                    const e = X(n.teamsStatistic.allies.get(), (e) => e.personal);
                    return (T(void 0 !== e, 'Personal info is not found'), e);
                }),
                l = V.shallow(() => {
                    const e = n.teamsStatistic.selectedRow.get();
                    if (void 0 === e) return;
                    const a = (e.team === Xi ? n.teamsStatistic.allies : n.teamsStatistic.enemies).get();
                    return X(a, (a) => a.account.username === e.username);
                }),
                o = V.shallow(() => {
                    const e = n.allPlayersDictionary.get();
                    return {
                        assault: n.personalEfficiency.statistics.capturePoints.get(),
                        defend: n.personalEfficiency.statistics.droppedCapturePoints.get(),
                        rows: k(
                            s.personalEffiency.details.get(),
                            (a, t) => {
                                const s = (function (e) {
                                        return k(
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
                                    })(t),
                                    n = e[t.userName];
                                return (
                                    T(void 0 !== n, `Such enemy ${t.userName} is not found`),
                                    a.push({ ...s, account: n.account, vehicle: n.vehicle }),
                                    a
                                );
                            },
                            [],
                        ),
                    };
                }),
                d = V.shallow(() => {
                    const e = X(s.xp.total.get(), (e) => 'totalXP' === e.paramName);
                    T(void 0 !== e, 'totalXP record is not found in the financial report');
                    const a = X(s.credits.total.get(), (e) => 'totalCredits' === e.paramName),
                        t = X(s.credits.total.get(), (e) => 'intermediateTotalCredits' === e.paramName);
                    return (
                        T(void 0 !== a, 'totalCredits record is not found in the financial report'),
                        T(void 0 !== t, 'intermediateTotalCredits record is not found in the financial report'),
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
                m = V.primitive(() => {
                    const e = n.personalEfficiency.achievements.get();
                    return K(e, (e) => e.epic || Ue.includes(e.groupID));
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
    Ji = t.createContext(null);
function Qi() {
    const e = t.useContext(Ji);
    if (null === e) throw new Error('You can use the achievements hooks only with the Achievements component');
    return e;
}
const el = { x: 50, y: -30, scale: 1.2, opacity: 0 };
function al({ children: a, achievements: s, springsProps: n, vehicleNation: r }) {
    const [i, l] = t.useState(new Set()),
        [o, c] = t.useState(void 0),
        [d, u] = m(s.length, () => ({ from: { ...el, ...(null == n ? void 0 : n.from) }, ...n }), [s.length, n]),
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
    return e.jsx(Ji.Provider, { value: p, children: a });
}
const tl = {
        base: 'Achievements_ee9c0189',
        animatedAchievement: 'Achievements_animatedAchievement_4c71d33',
        achievement: 'Achievements_achievement_b41909e2',
        achievement__extinct: 'Achievements_achievement__extinct_19551569',
        achievementIcon: 'Achievements_achievementIcon_e83ea27d',
    },
    sl = t.forwardRef(function ({ achievement: t, index: s, width: n, height: r, classNames: i }, l) {
        const o = q({ args: { tooltipId: t.tooltipId, tooltipArgs: t.tooltipArgs } }),
            c = x(),
            { hoverIndex: d, setHoverIndex: m, vehicleNation: u } = Qi();
        return e.jsx('div', {
            ...o,
            ref: l,
            className: a(tl.achievement, tl[`achievement__${qr(s, d)}`], null == i ? void 0 : i.achievement),
            onMouseEnter: function (e) {
                (c.play('mouse-enter', { original: e, target: 'achievements:achievement' }), o.onMouseEnter(), m(s));
            },
            onMouseLeave: () => {
                (o.onMouseLeave(), m(void 0));
            },
            children: e.jsx(
                w,
                {
                    width: n,
                    height: r,
                    path: Yr({ groupID: t.groupID, iconName: t.iconName, vehicleNation: u }),
                    className: a(tl.achievementIcon, null == i ? void 0 : i.icon),
                },
                t.iconName,
            ),
        });
    }),
    nl = I('Rewards', tl.base);
t.memo(function ({ width: a, height: t, classNames: s, className: n }) {
    const { achievements: r } = Qi();
    return e.jsx(nl, {
        className: n,
        children: P(r, (n, r) => e.jsx(sl, { width: a, height: t, index: r, achievement: n, classNames: s }, n.name)),
    });
});
const rl = {
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
    il = t.memo(function ({
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
            { springs: _, achievements: f, completedAnimationIndexes: b, hoverIndex: v } = Qi();
        return (
            U(() => {
                if (null === p.current) return;
                const e = p.current.offsetWidth + Math.floor((r / s.length) * 2),
                    a = Y(c);
                m(i, e < a ? Math.floor((a - e) / 2) : 0);
            }, [s.length, l, c, m]),
            e.jsx('div', {
                style: { paddingLeft: r, paddingRight: r },
                className: a(rl[`${i}Group`], d && rl[`${i}Group__indent`]),
                children: P(s, (t, r) => {
                    const i = f.length - n - r - 1;
                    return e.jsx(
                        u.div,
                        {
                            ref: 0 === r ? p : void 0,
                            className: rl.animatedAchievement,
                            style: { ..._[i], zIndex: n + r === v ? s.length + 1 : s.length - r },
                            children: e.jsx(sl, {
                                classNames: {
                                    achievement: a(rl.achievement, !1 === b.has(i) && rl.achievement__notInteractive),
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
function ll({ marksOnGun: e, hasSiblingGroups: a }) {
    return a && e ? rl.marksGroup__indentWithMarksOnGun : a ? rl.marksGroup__masteryIndent : void 0;
}
const ol = t.memo(function ({ achievements: t, startIndex: s, medalWidth: n, medalHeight: r, hasSiblingGroups: i }) {
        const { springs: l, achievements: o, completedAnimationIndexes: c, hoverIndex: d } = Qi();
        return e.jsx('div', {
            className: a(
                rl.marksGroup,
                ll({ hasSiblingGroups: i, marksOnGun: t.some((e) => 'marksOnGun' === e.name) }),
            ),
            children: P(t, (i, m) => {
                const p = o.length - s - m - 1;
                return e.jsx(
                    u.div,
                    {
                        className: rl.animatedAchievement,
                        style: { ...l[p], zIndex: s + m === d ? t.length + 1 : t.length - m },
                        children: e.jsx(sl, {
                            classNames: {
                                achievement: a(rl.achievement, !1 === c.has(p) && rl.achievement__notInteractive),
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
    cl = t.memo(function ({ className: s }) {
        const n = W(
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
            { achievements: r } = Qi(),
            i = t.useMemo(
                () =>
                    (function (e) {
                        return k(
                            e,
                            (e, a) => {
                                switch (Xr(a)) {
                                    case Gr.markOfMastery:
                                    case Gr.marksOnGun:
                                        e.marks.push(a);
                                        break;
                                    case Gr.epic:
                                    case Gr.specialAchievements:
                                    case Gr.right:
                                        if (ei.includes(a.name)) {
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
                            { [Zr]: [], [Jr]: [], [Qr]: [] },
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
                  className: a(rl.base, void 0 !== l.epicAndHeroic && void 0 !== l.others && rl.base__visible, s),
                  children: [
                      i.marks.length > 0 &&
                          e.jsx(ol, {
                              medalWidth: n.epicAndHeroic.width,
                              medalHeight: n.epicAndHeroic.height,
                              achievements: i.marks,
                              startIndex: 0,
                              hasSiblingGroups: i.epicAndHeroic.length + i.others.length > 0,
                          }),
                      i.epicAndHeroic.length > 0 &&
                          e.jsx(il, {
                              group: Jr,
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
                          e.jsx(il, {
                              group: Qr,
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
var dl = ((e) => ((e.None = 'none'), (e.Worse = 'worse'), (e.Usual = 'usual'), (e.Better = 'better'), e))(dl || {});
const ml = 'RateButton_bb66ff02',
    ul = 'RateButton_base__inner_61655025',
    pl = 'RateButton_base__first_hover_c025af3c',
    _l = 'RateButton_base__usual_6d49d479',
    fl = 'RateButton_base__worse_4a6537c5',
    bl = 'RateButton_base__better_ab2a6315',
    vl = 'RateButton_base__selected_70adc5a4',
    hl = 'RateButton_base__disabled_73dd0147',
    gl = { [dl.Worse]: fl, [dl.Usual]: _l, [dl.Better]: bl, [dl.None]: null },
    yl = ({ variant: t, selected: s, className: n, isHovered: r, ...i }) => {
        const l = v.resolve('strings'),
            o = x(),
            c = h({
                header: l.readOrEmpty(`battle_results.battleRating.tooltip.${t}.header`),
                body: l.readOrEmpty(`battle_results.battleRating.tooltip.${t}.body`),
            }),
            d = !r && !i.disabled && t === dl.Usual;
        return e.jsx('div', {
            onMouseEnter: (e) => {
                !s && !i.disabled && o.play('mouse-enter', { original: e, target: 'battle_rating:rate_button' });
            },
            children: e.jsx('button', {
                className: a(ml, n, gl[t], s ? vl : d ? pl : i.disabled ? hl : void 0),
                ...c,
                ...i,
                children: e.jsx('div', { className: ul }),
            }),
        });
    },
    xl = {
        base: 'BattleRating_fa13d03',
        base_title: 'BattleRating_base_title_757e19bf',
        base_wrapper: 'BattleRating_base_wrapper_ae4d42aa',
    },
    Nl = function ({ state: a, onSatisfactionRatingSelected: s }) {
        const [n, r] = t.useState(!1),
            i = x(),
            l = R.strings.battle_results.battleResult.battleRating[a].header(),
            o = [dl.Worse, dl.Usual, dl.Better],
            c = a === dl.None;
        return e.jsxs('div', {
            className: xl.base,
            onMouseEnter: () => {
                r(!0);
            },
            children: [
                e.jsx('div', { className: xl.base_title, children: l }),
                e.jsx('div', {
                    className: xl.base_wrapper,
                    children: o.map(
                        (t) =>
                            t !== dl.None &&
                            e.jsx(
                                yl,
                                {
                                    variant: t,
                                    className: xl.base_button,
                                    selected: a === t,
                                    onClick: c
                                        ? (e) => {
                                              (i.play('click', { original: e, target: 'battle_rating:rate_button' }),
                                                  s(t));
                                          }
                                        : null,
                                    isHovered: n,
                                    disabled: a !== t && a !== dl.None,
                                },
                                t,
                            ),
                    ),
                }),
            ],
        });
    },
    jl = t.createContext(null);
function wl() {
    const e = t.useContext(jl);
    if (null === e) throw new Error('You can use the managable bonus hooks only with the ManagableBonus component');
    return e;
}
function Il({
    children: a,
    bonusState: s,
    restriction: n,
    usedAdvertisements: r,
    supportedStates: i,
    supportedAdvertisements: l = Si,
    ...o
}) {
    const c = t.useMemo(
        () => (
            T(
                (function (e) {
                    return ii.includes(e);
                })(s),
                `Bonus state ${s} is not supported`,
            ),
            {
                ...o,
                bonusState: s,
                restriction: n,
                supportedAdvertisements: l,
                state: Ci[s].define({ restriction: n, supportedAdvertisements: l, usedAdvertisements: r }),
            }
        ),
        [s, n, o, l, r],
    );
    return Array.isArray(i) && !1 === i.includes(s)
        ? (console.error(`State ${s} is not supported for the current game mode`), null)
        : e.jsx(jl.Provider, { value: c, children: a });
}
const Al = { value: 'Currency_value_a12c8cb4' };
function Sl({ size: t, type: s, classNames: n, withoutPlus: r = !1, value: i }) {
    const l = 'gold' === s ? 'gold' : 'integral';
    return e.jsx(H, {
        reverse: !0,
        size: t,
        type: s,
        className: a(Al.currency, null == n ? void 0 : n.currency),
        children: r
            ? e.jsx('div', { className: a(Al.value, null == n ? void 0 : n.value), children: g.formatNumber(l, i) })
            : e.jsx(b, {
                  className: a(Al.value, null == n ? void 0 : n.value),
                  path: 'common.plusValueWithSpace',
                  params: { value: g.formatNumber(l, i) },
              }),
    });
}
const Rl = 'Advertising_50041e0d',
    Cl = 'Advertising_currency_f20fcad',
    Bl = 'Advertising_currencyValue_18a0b419';
function Pl() {
    const {
        state: a,
        supportedAdvertisements: t,
        bonusMultiplier: s,
        durationInDays: n,
        creditsThreshold: r,
        handleAdvertisement: i,
    } = wl();
    switch (
        (Z(() => {
            void 0 !== t &&
                (!1 !==
                (function (e, a) {
                    return e.includes(a);
                })(t, a)
                    ? void 0 !== i
                        ? i(a)
                        : console.error(
                              'The handler for advertisments is not provided. THe logic with cycled adverts will not work.',
                          )
                    : console.error(`The state in the component should be on of the followings ${t.join(', ')}`));
        }),
        a)
    ) {
        case hi:
            return e.jsx(b, {
                className: Rl,
                path: 'battle_results.common.details.premiumAdvertising.credits',
                params: {
                    bonusCredits: e.jsx(Sl, {
                        withoutPlus: !0,
                        type: 'credits',
                        size: O.small,
                        value: r,
                        classNames: { currency: Cl, value: Bl },
                    }),
                    durationInDays: n,
                },
            });
        case gi:
            return e.jsx(b, { className: Rl, path: 'battle_results.common.details.premiumPlus.premium' });
        case yi:
            return e.jsx(b, { fullSize: !0, className: Rl, path: 'battle_results.common.details.premiumPlus.squad' });
        case xi:
            return e.jsx(b, {
                className: Rl,
                path: 'battle_results.common.details.premiumAdvertising.bonus',
                params: { multiplier: s },
            });
        case Ni:
            return e.jsx(b, { className: Rl, path: 'battle_results.common.details.premiumPlus.quests' });
        default:
            return (console.error(`Advertising state ${a} is not supported`), null);
    }
}
const kl = { base: 'LeftBonusAttempts_a541b0b8', count: 'LeftBonusAttempts_count_24f93d48' };
function El({ count: a }) {
    return e.jsx(b, {
        upgradeLegacy: !0,
        params: { count: e.jsx('span', { className: kl.count, children: g.formatNumber('integral', a) }) },
        path: 'battle_results.common.premiumBonus.bonusLeft',
        className: kl.base,
    });
}
const Tl = 'Description_text_e7dc8110';
function Dl({ text: a, withAttemts: t = !0 }) {
    const { leftBonusAttempts: s } = wl();
    return e.jsxs('div', { children: [e.jsx('div', { className: Tl, children: a }), t && e.jsx(El, { count: s })] });
}
const Vl = 'PremiumEarnings_d4b9118e',
    zl = 'PremiumEarnings_wrapper_82e68328',
    Hl = 'PremiumEarnings_wrapper__semiTransparent_bb0620c7',
    Ol = 'PremiumEarnings_label_94b3586c',
    Wl = 'PremiumEarnings_label__highlight_7755be2e',
    Gl = 'PremiumEarnings_currencies_d4b9118e',
    Ml = 'PremiumEarnings_currency_3f1396eb',
    Xl = 'PremiumEarnings_value_cbe7ec27';
function $l() {
    const t = v.resolve('strings'),
        { premiumAndStandartEarnings: s } = wl();
    return e.jsxs('div', {
        className: Vl,
        children: [
            e.jsxs('div', {
                className: a(zl, Hl),
                children: [
                    e.jsx('div', {
                        className: Ol,
                        children: t.readOrEmpty('battle_results.common.details.noPremTitle'),
                    }),
                    e.jsxs('div', {
                        className: Gl,
                        children: [
                            e.jsx(Sl, {
                                withoutPlus: !0,
                                size: O.small,
                                type: 'credits',
                                classNames: { currency: Ml, value: Xl },
                                value: s.baseCredits,
                            }),
                            e.jsx(Sl, {
                                withoutPlus: !0,
                                size: O.small,
                                type: 'tankXP',
                                classNames: { currency: Ml, value: Xl },
                                value: s.baseVehicleXP,
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs('div', {
                className: zl,
                children: [
                    e.jsx('div', {
                        className: a(Ol, Wl),
                        children: t.readOrEmpty('battle_results.common.details.premTitle'),
                    }),
                    e.jsxs('div', {
                        className: Gl,
                        children: [
                            e.jsx(Sl, {
                                withoutPlus: !0,
                                size: O.small,
                                type: 'credits',
                                classNames: { currency: Ml, value: Xl },
                                value: s.premiumCredits,
                            }),
                            e.jsx(Sl, {
                                withoutPlus: !0,
                                size: O.small,
                                type: 'tankXP',
                                classNames: { currency: Ml, value: Xl },
                                value: s.premiumVehicleXP,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const Fl = 'PremiumInfoCurrencies_value_5b83491e',
    Ll = 'PremiumInfoCurrencies_currency_6908b9d9',
    Kl = I('PremiumInfoCurrencies', 'PremiumInfoCurrencies_8b21f7ee');
function ql() {
    const a = W({ size: O.small }, { medium: { size: O.large } }),
        { premiumAndStandartEarnings: t } = wl();
    return e.jsxs(Kl, {
        children: [
            e.jsx(Sl, { size: a.size, type: 'credits', classNames: { currency: Ll, value: Fl }, value: t.creditsDiff }),
            e.jsx(Sl, {
                size: a.size,
                type: 'tankXP',
                classNames: { currency: Ll, value: Fl },
                value: t.vehicleXPDiff,
            }),
        ],
    });
}
const Ul = I('Content'),
    Yl = t.forwardRef(function (a, t) {
        const { state: s } = wl(),
            n = v.resolve('strings');
        return e.jsx(Ul, {
            ...a,
            ref: t,
            children: (() => {
                switch (s) {
                    case li:
                        return e.jsx(ql, {});
                    case oi:
                    case ci:
                    case pi:
                    case fi:
                    case _i:
                    case bi:
                    case wi:
                    case Ii:
                        return e.jsx(Dl, { text: n.readOrEmpty('battle_results.common.premiumBonus.description') });
                    case di:
                        return e.jsx(Dl, { text: n.readOrEmpty('battle_results.common.premiumBonus.rule') });
                    case mi:
                        return e.jsx(Dl, {
                            text: n.readOrEmpty('battle_results.common.premiumBonus.expiredBattleResult'),
                        });
                    case ui:
                        return e.jsx(Dl, {
                            withAttemts: !1,
                            text: n.readOrEmpty('battle_results.common.premiumBonus.unavailable'),
                        });
                    case ji:
                        return e.jsx(Dl, {
                            withAttemts: !1,
                            text: n.readOrEmpty('battle_results.common.plusBonus.premiumPlusAdd'),
                        });
                    case vi:
                        return e.jsx($l, {});
                    case gi:
                    case hi:
                    case yi:
                    case xi:
                    case Ni:
                        return e.jsx(Pl, {});
                    default:
                        return (console.error(`State ${s} is not supported`), null);
                }
            })(),
        });
    }),
    Zl = 'AppliedBonusInfo_910a06bc',
    Jl = 'AppliedBonusInfo_icon_208dd0cc';
function Ql() {
    return e.jsxs('div', {
        className: Zl,
        children: [
            e.jsx('div', { className: Jl }),
            e.jsx(b, { path: 'battle_results.common.premiumBonus.appliedBonus' }),
        ],
    });
}
const eo = 'ApplyButton_fa337b96',
    ao = 'ApplyButton_button_a471284',
    to = 'ApplyButton_value_c22167ea';
function so() {
    const a = v.resolve('strings'),
        { bonusXpDiff: t, applyBonus: s } = wl(),
        n = W(
            { iconSize: O.small, buttonSize: J.sizes.small },
            { large: { iconSize: O.large }, extraLarge: { buttonSize: J.sizes.medium } },
        );
    return e.jsxs('div', {
        className: eo,
        children: [
            e.jsx(Sl, { type: 'tankXP', size: n.iconSize, value: t, classNames: { value: to } }),
            e.jsx(J, {
                size: n.buttonSize,
                theme: J.themes.primary,
                className: ao,
                onClick: s,
                soundTarget: 'managable-bonus:apply-button',
                children: a.readOrEmpty('battle_results.common.premiumBonus.applyBonusBtn'),
            }),
        ],
    });
}
const no = 'PlusEarnings_505f274c',
    ro = 'PlusEarnings_label_79ad021c',
    io = 'PlusEarnings_link_649208b3',
    lo = 'PlusEarnings_currency_fddc9198',
    oo = 'PlusEarnings_value_fe187db9',
    co = { withWotPlus: 'withWotPlus', withWotPremium: 'withWotPremium' };
const mo = {
    [co.withWotPlus]: 'battle_results.common.plusBonus.wotPlus',
    [co.withWotPremium]: 'battle_results.common.plusBonus.wotPremium',
};
function uo({ onClick: a }) {
    const t = v.resolve('strings'),
        s = Q().breakpoint,
        { wotPlus: n, wotPremium: r, bonusXpDiff: i } = wl(),
        l = (function (e, a) {
            return a && !1 === e ? co.withWotPlus : e && !1 === a ? co.withWotPremium : void 0;
        })(n, r);
    if (void 0 !== l)
        return e.jsxs('div', {
            className: no,
            children: [
                e.jsxs('div', {
                    className: ro,
                    children: [
                        t.readOrEmpty('battle_results.common.plusBonus.bonusLeftAdditionalText'),
                        e.jsx('span', { className: io, onClick: a, children: t.readOrEmpty(mo[l]) }),
                    ],
                }),
                e.jsx(Sl, {
                    type: 'tankXP',
                    size: s.weight >= ee.medium.weight ? O.large : O.small,
                    value: i,
                    classNames: { currency: lo, value: oo },
                }),
            ],
        });
    console.error(`plus earnings state can't have such flag combination: wotPlus: ${n}, wotPremium: ${r}`);
}
const po = 'PlusYouRock_a108dad8',
    _o = 'PlusYouRock_message_52bfa860',
    fo = 'PlusYouRock_rock_6d6e55b1',
    bo = 'PlusYouRock_currency_73dcb93a',
    vo = 'PlusYouRock_value_daab6eb6';
function ho() {
    const a = v.resolve('strings'),
        t = Q().breakpoint,
        { dailyAppliedAdditionalXP: s } = wl();
    return e.jsxs('div', {
        className: po,
        children: [
            e.jsxs('div', {
                className: _o,
                children: [
                    e.jsx('span', {
                        className: fo,
                        children: a.readOrEmpty('battle_results.common.plusBonus.youRock'),
                    }),
                    ' ',
                    a.readOrEmpty('battle_results.common.plusBonus.earnedMessage'),
                ],
            }),
            e.jsx(Sl, {
                type: 'tankXP',
                size: t.weight >= ee.medium.weight ? O.large : O.small,
                value: s,
                classNames: { currency: bo, value: vo },
            }),
        ],
    });
}
const go = {
    base: 'PremiumInfoButton_66b12c2',
    button: 'PremiumInfoButton_button_870d4076',
    buttonHint: 'PremiumInfoButton_buttonHint_1ee6743f',
};
function yo({ onClick: t, withLabel: s = !1 }) {
    const n = v.resolve('strings'),
        { breakpoint: r } = Q(),
        i = r.weight > ee.large.weight ? J.sizes.medium : J.sizes.small;
    return e.jsxs('div', {
        className: a(go.base, s && go.base__withLabel),
        children: [
            s &&
                e.jsx('div', {
                    className: go.buttonHint,
                    children: n.readOrEmpty('battle_results.common.premiumBonus.earnMore'),
                }),
            e.jsx(J, {
                className: go.button,
                size: s ? J.sizes.small : i,
                theme: J.themes.primary,
                onClick: t,
                soundTarget: 'managable-bonus:premium-info-button',
                children: n.readOrEmpty('battle_results.common.details.getPremBtn'),
            }),
        ],
    });
}
const xo = 'Restriction_8b730e49',
    No = 'Restriction_iconWrapper_ac9b1b94',
    jo = 'Restriction_icon_ef5c0819',
    wo = 'Restriction_formattedText_b2d2b647';
function Io({ path: a, tooltipParams: t }) {
    const s = h(t);
    return e.jsx('div', {
        className: xo,
        children: e.jsx(b, {
            path: a,
            className: wo,
            params: {
                info: e.jsx('span', {
                    ...s,
                    className: No,
                    children: e.jsx(ae, { path: 'post_battle.info', className: jo }),
                }),
            },
        }),
    });
}
const Ao = I('Footer'),
    So = t.forwardRef(function (a, t) {
        const { state: s, showBonusDetails: n } = wl(),
            r = v.resolve('strings');
        return e.jsx(Ao, {
            ...a,
            ref: t,
            children: (() => {
                switch (s) {
                    case li:
                        return e.jsx(yo, { withLabel: !0, onClick: n });
                    case oi:
                        return e.jsx(so, {});
                    case ci:
                        return e.jsx(Ql, {});
                    case pi:
                        return e.jsx(Io, {
                            path: 'battle_results.common.premiumBonus.tankStateChangedWithInfo',
                            tooltipParams: {
                                header: r.readOrEmpty('tooltips.battleResults.premiumBonus.tankStateChanged.header'),
                                body: r.readOrEmpty('tooltips.battleResults.premiumBonus.tankStateChanged.body'),
                            },
                        });
                    case fi:
                        return e.jsx(Io, {
                            path: 'battle_results.common.premiumBonus.isXPToTmenEnabledWithInfo',
                            tooltipParams: {
                                body: r.readOrEmpty('tooltips.battleResults.premiumBonus.xpToTmenChanged.body'),
                            },
                        });
                    case _i:
                        return e.jsx(Io, {
                            path: 'battle_results.common.premiumBonus.isXPToTmenDisabledWithInfo',
                            tooltipParams: {
                                body: r.readOrEmpty('tooltips.battleResults.premiumBonus.xpToTmenChanged.body'),
                            },
                        });
                    case bi:
                        return e.jsx(Io, {
                            path: 'battle_results.common.premiumBonus.tankmenStateChangedWithInfo',
                            tooltipParams: {
                                header: r.readOrEmpty('tooltips.battleResults.premiumBonus.tankmenStateChanged.header'),
                                body: r.readOrEmpty('tooltips.battleResults.premiumBonus.tankmenStateChanged.body'),
                            },
                        });
                    case ji:
                        return e.jsx(yo, { onClick: n });
                    case wi:
                        return e.jsx(uo, { onClick: n });
                    case Ii:
                        return e.jsx(ho, {});
                    case hi:
                    case gi:
                    case yi:
                    case xi:
                    case Ni:
                        return e.jsx(yo, { onClick: n });
                    default:
                        return null;
                }
            })(),
        });
    }),
    Ro = {
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
    Co = I('Header'),
    Bo = t.forwardRef(function ({ className: t, classNames: s, ...n }, r) {
        const { state: i, bonusMultiplier: l } = wl(),
            o = v
                .resolve('strings')
                .readOrEmpty('battle_results.common.premiumBonus.bonusMultiplier')
                .replace('{{value}}', l.toString());
        return e.jsx(Co, {
            ref: r,
            className: a(Ro[`base__${i}`], t),
            ...n,
            children: e.jsx('div', {
                className: a(Ro.icon, null == s ? void 0 : s.icon),
                children: e.jsx(te, {
                    classNames: {
                        base: Ro.bonusMultiplier,
                        text: Ro.text,
                        textOverlay: a(Ro.text, Ro.text__textOverlay),
                    },
                    children: o,
                }),
            }),
        });
    }),
    Po = I('ManagableBonus', 'ManagableBonus_55c8d52d'),
    ko = t.memo(Po);
((ko.Header = Bo), (ko.Content = Yl), (ko.Footer = So));
const Eo = {
    bonus__disabled: 'Bonus_bonus__disabled_d9abacdd',
    bonus__premiumInfo: 'Bonus_bonus__premiumInfo_d9abacdd',
    content: 'Bonus_content_2b6ba165',
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
function To() {
    const { state: t } = wl(),
        { completedSteps: s } = fa();
    return e.jsxs(ko, {
        className: a(Eo.bonus, Eo[`bonus__${t}`], !1 === s.has(ma.third) && Eo.bonus__disabled),
        children: [
            e.jsx(ko.Header, {}),
            e.jsx(ko.Content, { className: Eo.content }),
            e.jsx(ko.Footer, { className: Eo.footer }),
        ],
    });
}
const Do = 'AnimatedNumber_958fc84e',
    Vo = 'AnimatedNumber_slotMachineDigit_a9587a5a',
    zo = 'AnimatedNumber_plugChar_c66678',
    Ho = 'AnimatedNumber_digitsList_2065427d',
    Oo = N.cubicBezier(0.33, 0, 0.25, 1);
function Wo({ symbol: a, step: s, delay: n, first: r, handleFirstRest: i }) {
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
                    config: { duration: 600, easing: Oo },
                    immediate: l,
                    onRest() {
                        o(!0);
                    },
                });
        }, [s, d, l, n, _]),
        e.jsxs('div', {
            className: Vo,
            children: [
                e.jsx('div', { className: zo, children: a }),
                e.jsx(u.div, {
                    style: c,
                    className: Ho,
                    children: re(0, _ + 1, (t) =>
                        m
                            ? e.jsx('div', { children: t }, t)
                            : e.jsx('div', { style: { height: s }, children: t > 0 ? a : null }, t),
                    ),
                }),
            ],
        })
    );
}
const Go = t.memo(function ({ value: s, readyToAnimate: n, className: r, handleAnimationFinished: i, type: l }) {
        const [o, c] = se(),
            d = t.useMemo(() => s.split(''), [s]),
            m = t.useCallback(() => i(l), [i, l]);
        return e.jsx('div', {
            ref: o,
            className: a(Do, r),
            children: d.map((a, t) =>
                e.jsx(
                    Wo,
                    {
                        first: 0 === t,
                        handleFirstRest: m,
                        delay: 200 * (d.length - t),
                        symbol: a,
                        step: c.type === ne.measured && n ? c.size.height : 0,
                    },
                    `${s}-${t}`,
                ),
            ),
        });
    }),
    Mo = 'Currency_10720e2d',
    Xo = 'Currency_icon_4d923f64',
    $o = 'Currency_icon__visible_9c676b12',
    Fo = 'Currency_value_b21680b3',
    Lo = { xp: 'tankXP', crystal: 'crystal', credits: 'credits', gold: 'gold' },
    Ko = Object.keys(Lo);
function qo({ type: t, value: s, size: n, visibleIfZero: r, readyToAnimate: i, handleAnimationFinished: l }) {
    return ((e) => Ko.includes(e))(t)
        ? 0 !== s || r
            ? e.jsx(H, {
                  reverse: !0,
                  type: Lo[t],
                  size: n,
                  className: Mo,
                  classNames: { icon: a(Xo, i && $o) },
                  children: e.jsx(Go, {
                      className: Fo,
                      readyToAnimate: i,
                      type: t,
                      handleAnimationFinished: l,
                      value: g.formatNumber(t === ie.gold ? 'gold' : 'integral', s),
                  }),
              })
            : null
        : (console.error(`There is no such currency in the template literal: ${t}`), null);
}
const Uo = I('Currencies', 'Currencies_5b11a533'),
    Yo = r(function ({ className: a }) {
        const [s, n] = t.useState(!1),
            [r, i] = t.useState(new Set()),
            { model: l } = Zi(),
            o = l.computes.earnedCurrencies(),
            c = l.additionalBonus.get(),
            d = le(o),
            m = x(),
            { step: u } = fa(),
            p = W({ value: O.medium }, { medium: { value: O.large }, large: { value: O.extraLarge } });
        (t.useEffect(() => {
            void 0 !== d && d !== o && m.play('startRolling', { target: 'overview:currencies' });
        }, [o, d, m]),
            t.useEffect(() => {
                u === ma.third && (n(!0), m.play('startRolling', { target: 'overview:currencies' }));
            }, [u, m]),
            t.useEffect(() => {
                r.size === o.filter(({ value: e, visibleIfZero: a }) => e > 0 || a).length &&
                    (m.play('stopRolling', { target: 'overview:currencies' }),
                    c.bonusState === ni.PremiumBonus && c.restriction === si.NoRestriction && i((e) => oe(e, 'xp')));
            }, [r, o, m, c.bonusState, c.restriction]));
        const _ = t.useCallback(function (e) {
            i((a) => j(a, e));
        }, []);
        return e.jsx(Uo, {
            className: a,
            children: P(o, (a) =>
                e.jsx(qo, { readyToAnimate: s, size: p.value, handleAnimationFinished: _, ...a }, a.type),
            ),
        });
    }),
    Zo = 'Overview_flare_5277bd9e',
    Jo = 'Overview_vignette_ff9b1e99',
    Qo = 'Overview_b4108a3c',
    ec = 'Overview_info_fa4e7011',
    ac = 'Overview_info__withoutMedals_6be29b19',
    tc = 'Overview_statusWrapper_cda9b438',
    sc = 'Overview_status_1c902a82',
    nc = 'Overview_statusText_26db019c',
    rc = 'Overview_achievements_5b2b6582',
    ic = 'Overview_dividerWrapper_25de8b48',
    lc = 'Overview_divider_652a671e',
    oc = 'Overview_dividerImage_2a8a0c0e',
    cc = 'Overview_currencies_d637d5d',
    dc = v.resolve('images');
function mc({ winStatus: e, epicFlare: a }) {
    return e === Ze
        ? a
            ? 'post_battle.epic_victory_flare'
            : 'post_battle.no_epic_victory_flare'
        : a
          ? 'post_battle.epic_draw_defeat_flare'
          : 'post_battle.no_epic_draw_defeat_flare';
}
const uc = r(function () {
        var a;
        const { model: s } = Zi(),
            { active: n } = ce(),
            [{ x: r }, i] = p(() => ({ x: 0 })),
            l = null == (a = s.battleInfo.get()) ? void 0 : a.status,
            o = s.computes.hasSpeialMedals(),
            c = t.useRef(null);
        return (
            t.useEffect(() => {
                if (n === Ye.personal)
                    return de.move(function ([e]) {
                        const a = me().width,
                            t = 2 * (e.clientX / a - 0.5);
                        i.start({ x: 3 * t });
                    });
            }),
            e.jsx(u.div, {
                ref: c,
                className: Zo,
                style: {
                    backgroundImage: `url(${dc.readOrEmpty(mc({ winStatus: l, epicFlare: o }))})`,
                    backgroundPosition: r.to((e) => `${50 + e}% center`),
                },
            })
        );
    }),
    pc = t.createContext(null);
function _c() {
    const e = t.useContext(pc);
    if (null === e)
        throw new Error('You can use the expandable overlay hooks only with the ExpandableOverlay widget component');
    return e;
}
function fc({ children: a, visible: s, changeVisible: n, closedPosition: r, animationProps: i }) {
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
    return e.jsx(pc.Provider, { value: b, children: a });
}
const bc = 'HintKey_keyButton_e4149405',
    vc = 'HintKey_background_e4149405',
    hc = 'HintKey_border_71616e63',
    gc = 'HintKey_content_63ecef8',
    yc = 'HintKey_triangle_fb0bc682',
    xc = 'HintKey_triangleNoise_6e72dfca',
    Nc = I('PersoanlEfficiencyHintKey', 'HintKey_2efc42a0');
const jc = {
        base: 'OverlayDivider_fcc0c30',
        divider: 'OverlayDivider_divider_1acaec30',
        divider__right: 'OverlayDivider_divider__right_546d0e74',
        base__closed: 'OverlayDivider_base__closed_ceb65522',
        dividerImageElement: 'OverlayDivider_dividerImageElement_9babecb0',
    },
    wc = t.forwardRef(function ({ className: t, classNames: s }, n) {
        var r, i, l, o, c, d;
        const { opened: m } = _c();
        return e.jsxs('div', {
            ref: n,
            className: a(jc.base, !m && jc.base__closed, null == s ? void 0 : s.base, t),
            children: [
                e.jsx(ha, {
                    classNames: {
                        base: a(
                            jc.divider,
                            jc.divider__left,
                            null == (r = null == s ? void 0 : s.divider) ? void 0 : r.base,
                        ),
                        image: a(
                            jc.dividerImageElement,
                            null == (i = null == s ? void 0 : s.divider) ? void 0 : i.image,
                        ),
                    },
                }),
                e.jsx(ha, {
                    classNames: {
                        base: a(
                            jc.divider,
                            jc.divider__right,
                            null == (l = null == s ? void 0 : s.divider) ? void 0 : l.base,
                            null == (o = null == s ? void 0 : s.rightDivider) ? void 0 : o.base,
                        ),
                        image: a(
                            jc.dividerImageElement,
                            null == (c = null == s ? void 0 : s.divider) ? void 0 : c.image,
                            null == (d = null == s ? void 0 : s.rightDivider) ? void 0 : d.image,
                        ),
                    },
                }),
            ],
        });
    }),
    Ic = 'ExpandableOverlay_7ce5a85e',
    Ac = 'ExpandableOverlay_base__opened_7d677539',
    Sc = 'ExpandableOverlay_shadow_a52d16ce',
    Rc = t.forwardRef(function ({ children: s }, n) {
        const { opened: r, handleOpen: i, overlayStyles: l, shadowStyles: o } = _c(),
            c = x();
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
                className: a(Ic, r && Ac),
                style: l,
                onClick: function (e) {
                    (e.stopPropagation(),
                        !1 === r &&
                            (c.play('click', { original: e, target: 'expandable-overlay' }),
                            c.play('openOverlay', { original: e, target: 'expandable-overlay' }),
                            i(!0)));
                },
                children: [e.jsx(u.div, { className: Sc, style: o }), s],
            })
        );
    });
((Rc.HintKey = function ({
    disabled: t,
    throttleDelay: s = 600,
    classNames: n,
    keyCode: r = _e.SPACE,
    triangleNoisePath: i = 'post_battle.noise',
}) {
    var l, o, c;
    const { handleOpen: d, arrowStyles: m } = _c(),
        p = x(),
        _ = ue(
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
        children: e.jsxs(Nc, {
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
                e.jsx(pe, {
                    keyCode: r,
                    classNames: {
                        base: a(bc, null == n ? void 0 : n.keyButton),
                        background: a(vc, null == (l = null == n ? void 0 : n.keyButton) ? void 0 : l.background),
                        content: a(gc, null == (o = null == n ? void 0 : n.keyButton) ? void 0 : o.content),
                        border: a(hc, null == (c = null == n ? void 0 : n.keyButton) ? void 0 : c.border),
                    },
                    soundTarget: 'expandable-overlay:hint-key',
                    onActive: _,
                    children: e.jsx(pe.Code, {}),
                }),
                e.jsx(u.div, {
                    className: a(yc, null == n ? void 0 : n.triangle),
                    style: m,
                    children: e.jsx(w, {
                        fit: 'cover',
                        path: i,
                        className: a(xc, null == n ? void 0 : n.triangleNoise),
                    }),
                }),
            ],
        }),
    });
}),
    (Rc.OverlayDivider = wc));
const Cc = 'BodyRow_b47fe37f',
    Bc = 'BodyRow_rowDivider_eb49c679',
    Pc = 'BodyRow_rowDividerImage_d852c3da',
    kc = v.resolve('aliases');
function Ec({ classNames: s, row: n, rowIndex: r }) {
    var i, l;
    const o = fe({
        args: { id: n.original.vehicle.vehicleCD },
        contentId: kc.read((e) => e.battle_result.contextMenu.Vehicle('resId')),
    });
    return t.createElement(
        be.Row,
        { ...o, key: n.id, className: a(Cc, null == s ? void 0 : s.row) },
        P(n.getVisibleCells(), (a, t) =>
            e.jsx(
                be.Cell,
                {
                    className: null == s ? void 0 : s.cell,
                    cell: { ...a, rowIndex: r, index: t, tablePart: ve.body },
                    children: _(a.column.columnDef.cell, a.getContext()),
                },
                a.id,
            ),
        ),
        e.jsx(ha, {
            classNames: {
                base: a(Bc, null == (i = null == s ? void 0 : s.divider) ? void 0 : i.base),
                image: a(Pc, null == (l = null == s ? void 0 : s.divider) ? void 0 : l.image),
            },
        }),
    );
}
const Tc = {
        base: 'TableBody_4f65af24',
        scrollBar: 'TableBody_scrollBar_14038cca',
        scrollAreaContent: 'TableBody_scrollAreaContent_4a80f86c',
        mask: 'TableBody_mask_c5bcd0ad',
        rowDivider: 'TableBody_rowDivider_c1a3ebdc',
        rowDividerImage: 'TableBody_rowDividerImage_b0363e26',
    },
    Dc = t.memo(function ({ classNames: s, children: n }) {
        var r, i, l, o, c, d, m, _;
        const { table: f } = he(),
            b = ge(),
            { api: v } = C();
        (ye(_e.ARROW_UP, () => {
            v.applyStepTo(xe.Next);
        }),
            ye(_e.ARROW_DOWN, () => {
                v.applyStepTo(xe.Prev);
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
            e.jsxs(be.Body, {
                className: a(Tc.base, null == s ? void 0 : s.base),
                children: [
                    e.jsxs(u.div, {
                        className: Tc.mask,
                        style: h,
                        children: [
                            e.jsx(ha, {
                                classNames: {
                                    base: a(
                                        Tc.rowDivider,
                                        null == (r = null == s ? void 0 : s.divider) ? void 0 : r.base,
                                    ),
                                    image: a(
                                        Tc.rowDividerImage,
                                        null == (i = null == s ? void 0 : s.divider) ? void 0 : i.image,
                                    ),
                                },
                            }),
                            e.jsxs(B, {
                                classNames: {
                                    ...(null == (l = null == s ? void 0 : s.scroll) ? void 0 : l.area),
                                    wrapper: Tc.scrollWrapper,
                                    content: a(
                                        Tc.scrollAreaContent,
                                        null == (c = null == (o = null == s ? void 0 : s.scroll) ? void 0 : o.area)
                                            ? void 0
                                            : c.content,
                                    ),
                                },
                                children: [
                                    P(f.getRowModel().rows, (a, t) =>
                                        e.jsx(
                                            Ec,
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
                    e.jsx(S, {
                        classNames: {
                            ...(null == (d = null == s ? void 0 : s.scroll) ? void 0 : d.bar),
                            base: a(
                                Tc.scrollBar,
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
    Vc = 'TableFooter_40e98711',
    zc = 'TableFooter_row_41aedfc2',
    Hc = t.memo(function ({ classNames: t }) {
        const { table: s } = he();
        return e.jsx(be.Footer, {
            className: a(Vc, null == t ? void 0 : t.base),
            children: P(s.getFooterGroups(), (s, n) =>
                e.jsx(
                    be.Row,
                    {
                        className: a(zc, null == t ? void 0 : t.row),
                        children: P(s.headers, (a, s) =>
                            e.jsx(
                                be.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: null == t ? void 0 : t.cell,
                                    cell: { ...a, rowIndex: n, index: s, tablePart: ve.footer },
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
    Oc = 'TableHeader_row_a81d3e65',
    Wc = t.memo(function ({ classNames: t }) {
        const { table: s } = he();
        return e.jsx(be.Header, {
            className: null == t ? void 0 : t.base,
            children: P(s.getHeaderGroups(), (s, n) =>
                e.jsx(
                    be.Row,
                    {
                        className: a(Oc, null == t ? void 0 : t.row),
                        children: P(s.headers, (a, s) =>
                            e.jsx(
                                be.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: null == t ? void 0 : t.cell,
                                    cell: { ...a, rowIndex: n, index: s, tablePart: ve.header },
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
    Gc = {
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
    Mc = '',
    Xc = '',
    $c = {
        [Gc.targetKills]: 'library.crossed_tank',
        [Gc.damageDealt]: 'library.cross_with_gap',
        [Gc.damageBlockedByArmor]: 'library.blocked',
        [Gc.damageAssisted]: 'library.double_target',
        [Gc.damageAssistedStun]: 'library.arrow_with_fading',
        [Gc.spotted]: 'library.eyebrow',
        [Gc.criticalDamage]: 'library.gear_with_gap',
    };
const Fc = t.createContext(null);
function Lc() {
    const e = t.useContext(Fc);
    if (null === e)
        throw new Error('You can use the personal efficiency hooks only with the PersonalEfficiency widget component');
    return e;
}
function Kc({ iconsConfig: a, children: s }) {
    const n = t.useMemo(() => ({ iconsConfig: { ...$c, ...(a || {}) } }), [a]);
    return e.jsx(Fc.Provider, { value: n, children: s });
}
const qc = function ({
    data: a,
    className: s,
    children: n,
    columnOrder: r,
    columnVisibility: i,
    config: l,
    iconsConfig: o,
}) {
    const c = Q(),
        d = t.useMemo(() => ({ columnOrder: r, columnVisibility: i }), [r, i]);
    return e.jsx(Kc, {
        iconsConfig: o,
        children: e.jsx(Ne, {
            columns: l,
            data: a.rows,
            enableMultiRowSelection: !1,
            getRowId: (e) => e.account.username,
            initialState: d,
            children: e.jsx(be, { className: s, children: e.jsx(A, { children: n }) }, c.breakpoint.name),
        }),
    });
};
((qc.Header = Wc), (qc.Body = Dc), (qc.Footer = Hc));
const Uc = { behaviour: je.contentResponsive, minSize: '0rem', maxSize: '1000rem' },
    Yc = {
        [Gc.account]: {
            [we.extraSmall]: { behaviour: je.static, size: '200rem' },
            [we.medium]: { behaviour: je.static, size: '200rem' },
            [we.large]: { behaviour: je.static, size: '200rem' },
            [we.extraLarge]: { behaviour: je.static, size: '229rem' },
        },
        [Gc.vehicle]: {
            [we.extraSmall]: { behaviour: je.static, size: '182rem' },
            [we.medium]: { behaviour: je.static, size: '186rem' },
            [we.large]: { behaviour: je.static, size: '216rem' },
            [we.extraLarge]: { behaviour: je.static, size: '239rem' },
        },
    },
    Zc = 0,
    Jc = {
        accountInfo: 'AccountInfoCell_accountInfo_4ab27ccb',
        accountName: 'AccountInfoCell_accountName_3a2352e5',
        clanAbbreviation: 'AccountInfoCell_clanAbbreviation_99f1cc86',
        gap: 'AccountInfoCell_gap_4a30913b',
        anonymizerIcon: 'AccountInfoCell_anonymizerIcon_f71ac22',
        badge: 'AccountInfoCell_badge_711d01c5',
    };
function Qc({ account: t }) {
    return e.jsxs(Ie, {
        className: Jc.accountInfo,
        children: [
            e.jsx('div', {
                className: a(Jc.badge, Jc.gap),
                children:
                    t.badge !== Mc &&
                    e.jsx(Ie.Badge, { size: Ie.Badge.sizes.x24x24, badgeId: t.badge, className: Jc.gap }),
            }),
            e.jsx(Ie.Name, {
                className: a(Jc.accountName, Jc.gap),
                children: e.jsx(Ae, { text: t.anonymizer ? t.fakeUsername : t.username }),
            }),
            t.clanAbbreviation !== Xc &&
                !t.anonymizer &&
                e.jsx(Ie.ClanTag, {
                    className: a(Jc.clanAbbreviation, Jc.gap),
                    children: e.jsx(b, {
                        path: 'common.clanTag',
                        params: { abbrev: t.clanAbbreviation },
                        brackets: { start: '{', end: '}' },
                    }),
                }),
            t.igrType !== Zc && e.jsx(Ie.IgrIcon, { size: Ie.IgrIcon.sizes.x34x16, className: Jc.gap }),
            t.suffixBadge !== Mc &&
                e.jsx(Ie.Stripe, { size: Ie.Stripe.sizes.default, badgeId: t.suffixBadge, className: Jc.gap }),
            t.anonymizer &&
                e.jsx(Ie.AnonymizerIcon, { size: Ie.AnonymizerIcon.sizes.x24x24, className: Jc.anonymizerIcon }),
        ],
    });
}
const ed = 'capturePoints',
    ad = 'droppedCapturePoints',
    td = {
        base: 'BaseCapture_4cb6b6d6',
        icon: 'BaseCapture_icon_d32c372c',
        label: 'BaseCapture_label_8bdb9b9c',
        wrapper: 'BaseCapture_wrapper_c1a0082e',
    };
function sd({ assault: t, defend: s, classNames: n, className: r }) {
    const i = v.resolve('strings'),
        l = v.resolve('views'),
        o = Se({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { paramType: ed },
        }),
        c = Se({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { paramType: ad },
        });
    return e.jsxs('div', {
        className: a(td.base, r),
        children: [
            e.jsx('div', {
                className: a(td.label, null == n ? void 0 : n.label),
                children: i.readOrEmpty('battle_results.common.battleEfficiency.baseCapture'),
            }),
            e.jsxs('div', {
                ...o,
                className: td.wrapper,
                children: [
                    e.jsx('div', { className: a(td.value, null == n ? void 0 : n.value), children: t }),
                    e.jsx(w, {
                        path: 'post_battle.assault',
                        width: '32rem',
                        height: '32rem',
                        className: a(td.icon, null == n ? void 0 : n.icon),
                    }),
                ],
            }),
            e.jsxs('div', {
                ...c,
                className: td.wrapper,
                children: [
                    e.jsx('div', { className: a(td.value, null == n ? void 0 : n.value), children: s }),
                    e.jsx(w, {
                        path: 'post_battle.defend',
                        width: '32rem',
                        height: '32rem',
                        className: a(td.icon, null == n ? void 0 : n.icon),
                    }),
                ],
            }),
        ],
    });
}
const nd = {
    cellWithValue: 'HeaderCell_cellWithValue_78949e6d',
    cellWithValue__totalInfo: 'HeaderCell_cellWithValue__totalInfo_789bf7be',
    cellWithValue__zeroIndent: 'HeaderCell_cellWithValue__zeroIndent_334269c9',
    wrapper: 'HeaderCell_wrapper_7849c6a',
    imageWrapper: 'HeaderCell_imageWrapper_a570c717',
    value: 'HeaderCell_value_f7bb7c82',
    cellWithText: 'HeaderCell_cellWithText_710c47ce',
    text: 'HeaderCell_text_35220206',
};
function rd({ info: t, name: s, className: n }) {
    const { iconsConfig: r } = Lc(),
        i = v.resolve('views'),
        l = Se({
            contentId: i.read((e) =>
                s === Gc.criticalDamage
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { paramType: s },
        }),
        o = k(
            t.table.getRowModel().rows,
            (e, a) => {
                const t = a.getValue(s),
                    n = Re(t) ? t : t.value;
                return e + (s === Gc.spotted && n > 0 ? 1 : n);
            },
            0,
        ),
        c = r[s] ?? '';
    return e.jsx('div', {
        className: a(nd.cellWithValue, n),
        children: e.jsxs('div', {
            ...l,
            className: nd.wrapper,
            children: [
                e.jsx('div', { className: nd.value, children: g.formatNumber('integral', o) }),
                e.jsx('div', {
                    className: nd.imageWrapper,
                    children: e.jsx(w, { width: '100%', height: '100%', path: c }),
                }),
            ],
        }),
    });
}
function id({ name: a, info: t, className: s }) {
    const n = v.resolve('strings');
    switch (a) {
        case Gc.targetKills:
        case Gc.damageDealt:
        case Gc.damageBlockedByArmor:
        case Gc.damageAssisted:
        case Gc.damageAssistedStun:
        case Gc.spotted:
        case Gc.criticalDamage:
            return void 0 !== t ? e.jsx(rd, { name: a, info: t, className: s }) : null;
        case Gc.account:
            return e.jsx('div', {
                className: nd.cellWithText,
                children: e.jsx('div', {
                    className: nd.text,
                    children: n.readOrEmpty('battle_results.common.battleEfficiency.uppercased_title'),
                }),
            });
        default:
            return (console.error(`Unknown column ${a}`), null);
    }
}
const ld = { icon: 'IconCell_icon_99b0caec' };
function od({ value: a, name: t, userName: s }) {
    const { iconsConfig: n } = Lc(),
        r = v.resolve('views'),
        i = Se({
            contentId: r.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { userName: s, paramType: t },
        });
    if (0 === a) return null;
    const l = n[t] ?? '';
    return e.jsx(w, { ...i, className: ld.icon, width: '32rem', height: '32rem', path: l });
}
const cd = { base: 'NumberCell_bce1b4d4' };
function dd({ value: a, userName: t, name: s }) {
    const n = v.resolve('views'),
        r = Se({
            contentId: n.read((e) =>
                s === Gc.criticalDamage
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { userName: t, paramType: s },
        });
    return 0 === a ? null : e.jsx('div', { ...r, className: cd.base, children: g.formatNumber('integral', a) });
}
const md = {
        base: 'NumberWithCounterCell_f729c44',
        counter: 'NumberWithCounterCell_counter_8bb0eb59',
        counter__hidden: 'NumberWithCounterCell_counter__hidden_468e7d52',
        counterValue: 'NumberWithCounterCell_counterValue_566cc1fa',
        roundedCount: 'NumberWithCounterCell_roundedCount_c97dad37',
    },
    ud = 1e3,
    pd = 99,
    _d = 2;
function fd({ count: a }) {
    const t = h({ body: a.toString() }),
        s = (n = a) < ud ? n : Math.floor(n / 1e3);
    var n;
    return e.jsx('div', {
        className: md.counterValue,
        children:
            s === a
                ? a
                : e.jsx('div', {
                      ...t,
                      className: md.roundedCount,
                      children: e.jsx(b, {
                          path: 'common.numberAbbrev',
                          params: { value: g.formatNumber('integral', Math.min(s, pd)) },
                      }),
                  }),
    });
}
function bd({ value: t, count: s, name: n, userName: r }) {
    const { iconsConfig: i } = Lc(),
        l = v.resolve('views'),
        o = Se({
            contentId: l.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: { userName: r, paramType: n },
        });
    if (0 === t && 0 === s) return null;
    const c = i[n] ?? '';
    return e.jsxs('div', {
        ...o,
        className: md.base,
        children: [
            t > 0 && g.formatNumber('integral', t),
            e.jsxs('div', {
                className: a(md.counter, 0 === s && md.counter__hidden),
                children: [
                    e.jsx(w, { className: md.icon, width: '32rem', height: '32rem', path: c }),
                    s >= _d && e.jsx(fd, { count: s }),
                ],
            }),
        ],
    });
}
const vd = {
    base: 'VehicleCell_2823d754',
    imageWrapper: 'VehicleCell_imageWrapper_f0d20784',
    typeWrapper: 'VehicleCell_typeWrapper_1232db26',
    level: 'VehicleCell_level_3970ad9d',
    name: 'VehicleCell_name_755dfe36',
};
function hd({ vehicle: a }) {
    return e.jsxs('div', {
        className: vd.base,
        children: [
            e.jsx('div', {
                className: vd.imageWrapper,
                children: e.jsx(Ce, { size: Ce.size.x120x96, name: a.techName }),
            }),
            e.jsx(Be, { value: a.tier, className: vd.level }),
            e.jsx('div', { className: vd.typeWrapper, children: e.jsx(Pe, { size: 'x24x24', type: a.type }) }),
            e.jsx('div', { className: vd.name, children: e.jsx(Ae, { text: a.name }) }),
        ],
    });
}
const gd = 'Index_align_5032d1bf',
    yd = 'Index_align__right_9d371d4f',
    xd = 'Index_align__left_7938cc',
    Nd = f();
function jd() {
    return [
        Nd.accessor('killed', {
            id: Gc.targetKills,
            header: (t) =>
                e.jsx(id, {
                    info: t,
                    name: Gc.targetKills,
                    className: a(nd.cellWithValue__totalInfo, nd.cellWithValue__zeroIndent),
                }),
            enableSorting: !1,
            meta: { column: Uc, className: a(gd, yd) },
        }),
        Nd.accessor('damageDealt', {
            id: Gc.damageDealt,
            header: (a) => e.jsx(id, { info: a, name: Gc.damageDealt, className: nd.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(gd, yd), column: Uc },
        }),
        Nd.accessor('damageBlockedByArmor', {
            id: Gc.damageBlockedByArmor,
            header: (a) =>
                e.jsx(id, { info: a, name: Gc.damageBlockedByArmor, className: nd.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(gd, yd), column: Uc },
        }),
        Nd.accessor('damageAssisted', {
            id: Gc.damageAssisted,
            header: (a) => e.jsx(id, { info: a, name: Gc.damageAssisted, className: nd.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(gd, yd), column: Uc },
        }),
        Nd.accessor('damageAssistedStun', {
            id: Gc.damageAssistedStun,
            header: (a) => e.jsx(id, { info: a, name: Gc.damageAssistedStun, className: nd.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(gd, yd), column: Uc },
        }),
        Nd.accessor('spotted', {
            id: Gc.spotted,
            header: (a) => e.jsx(id, { info: a, name: Gc.spotted, className: nd.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(gd, yd), column: Uc },
        }),
        Nd.accessor('criticalDamage', {
            id: Gc.criticalDamage,
            header: (a) => e.jsx(id, { info: a, name: Gc.criticalDamage, className: nd.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: a(gd, yd), column: Uc },
        }),
    ];
}
const wd = 'PersonalEfficiency_table_1104dbe8',
    Id = 'PersonalEfficiency_table__closed_589e70ab',
    Ad = 'PersonalEfficiency_hintKey_f91859a5',
    Sd = 'PersonalEfficiency_messagesPanel_d1b1fa0b',
    Rd = 'PersonalEfficiency_message_d772bbd7',
    Cd = 'PersonalEfficiency_expandableOverlayWrapper_a5a56a5d',
    Bd = 'PersonalEfficiency_expandableOverlayWrapper__hidden_97a3493d',
    Pd = 'PersonalEfficiency_expandableOverlayWrapper__notInteractive_598241cc',
    kd = 'PersonalEfficiency_scrollableArea_c747d607',
    Ed = 'PersonalEfficiency_scrollableArea__nonInteractive_589e70ab',
    Td = 'PersonalEfficiency_totalEfficiency_eb2592a8',
    Dd = 'PersonalEfficiency_totalEfficiency__notInteractive_4b33f28d',
    Vd = 'PersonalEfficiency_totalEfficiencyTable_9139933',
    zd = 'PersonalEfficiency_tableWrapper_cd2e7488',
    Hd = 'PersonalEfficiency_overlayDivider_52284c35',
    Od = 'PersonalEfficiency_overlayDivider__closed_6b67c790',
    Wd = 'PersonalEfficiency_clarificationWrapper_5f3072b1',
    Gd = { row: 'PersonalEfficiency_headerRow_6acaa215' };
function Md() {
    const { opened: s } = _c(),
        { api: n } = C();
    return (
        t.useLayoutEffect(() => {
            s && n.applyScroll(0, { immediate: !0 });
        }, [s, n]),
        e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: a(kd, !s && Ed), onWheel: n.handleMouseWheel }),
                e.jsx(qc.Header, { classNames: Gd }),
                e.jsx(qc.Body, { children: e.jsx(qc.Footer, {}) }),
            ],
        })
    );
}
const Xd = N.cubicBezier(0.33, 0, 0.25, 1),
    $d = 'first',
    Fd = 'second',
    Ld = 'closedArrowInLoop',
    Kd = 'openedArrowInLoop',
    qd = r(function ({ visible: s, totalEfficiencyStylesApi: n }) {
        const { model: r } = Zi(),
            i = r.computes.personalEffiency(),
            { closedPosition: l, overlayApi: o, shadowApi: c, arrowStylesApi: d } = _c(),
            { breakpoint: m } = Q(),
            [_, f] = t.useState(Ld),
            [b, v] = p(() => ({ opacity: 0 })),
            h = t.useMemo(
                () =>
                    (function ({ breakpointName: t, assault: s, defend: n }) {
                        const r = 'small' === t ? we.extraSmall : t;
                        return [
                            Nd.accessor('account', {
                                id: Gc.account,
                                header: () => e.jsx(id, { name: Gc.account }),
                                footer: () => e.jsx(sd, { assault: s, defend: n }),
                                enableSorting: !1,
                                cell: (a) => e.jsx(Qc, { account: a.getValue() }),
                                meta: { className: a(gd, xd), column: Yc[Gc.account][r] },
                            }),
                            Nd.accessor('vehicle', {
                                id: Gc.vehicle,
                                header: void 0,
                                enableSorting: !1,
                                cell: (a) => e.jsx(hd, { vehicle: a.getValue() }),
                                meta: { column: Yc[Gc.vehicle][r] },
                            }),
                            Nd.accessor('killed', {
                                id: Gc.targetKills,
                                header: (a) => e.jsx(id, { name: Gc.targetKills, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(od, {
                                        name: Gc.targetKills,
                                        value: a.getValue(),
                                        userName: a.row.original.account.username,
                                    }),
                                meta: { column: Uc, className: a(gd, yd) },
                            }),
                            Nd.accessor('damageDealt', {
                                id: Gc.damageDealt,
                                header: (a) => e.jsx(id, { name: Gc.damageDealt, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(bd, {
                                        ...a.getValue(),
                                        name: Gc.damageDealt,
                                        userName: a.row.original.account.username,
                                    }),
                                meta: { className: a(gd, yd), column: Uc },
                            }),
                            Nd.accessor('damageBlockedByArmor', {
                                id: Gc.damageBlockedByArmor,
                                header: (a) => e.jsx(id, { name: Gc.damageBlockedByArmor, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(bd, {
                                        ...a.getValue(),
                                        name: Gc.damageBlockedByArmor,
                                        userName: a.row.original.account.username,
                                    }),
                                meta: { className: a(gd, yd), column: Uc },
                            }),
                            Nd.accessor('damageAssisted', {
                                id: Gc.damageAssisted,
                                header: (a) => e.jsx(id, { name: Gc.damageAssisted, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(dd, {
                                        value: a.getValue(),
                                        name: Gc.damageAssisted,
                                        userName: a.row.original.account.username,
                                    }),
                                meta: { className: a(gd, yd), column: Uc },
                            }),
                            Nd.accessor('damageAssistedStun', {
                                id: Gc.damageAssistedStun,
                                header: (a) => e.jsx(id, { name: Gc.damageAssistedStun, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(bd, {
                                        ...a.getValue(),
                                        name: Gc.damageAssistedStun,
                                        userName: a.row.original.account.username,
                                    }),
                                meta: { className: a(gd, yd), column: Uc },
                            }),
                            Nd.accessor('spotted', {
                                id: Gc.spotted,
                                header: (a) => e.jsx(id, { name: Gc.spotted, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(od, {
                                        name: Gc.spotted,
                                        value: a.getValue(),
                                        userName: a.row.original.account.username,
                                    }),
                                meta: { className: a(gd, yd), column: Uc },
                            }),
                            Nd.accessor('criticalDamage', {
                                id: Gc.criticalDamage,
                                header: (a) => e.jsx(id, { name: Gc.criticalDamage, info: a }),
                                enableSorting: !1,
                                cell: (a) =>
                                    e.jsx(dd, {
                                        value: a.getValue(),
                                        name: Gc.criticalDamage,
                                        userName: a.row.original.account.username,
                                    }),
                                meta: { className: a(gd, yd), column: Uc },
                            }),
                        ];
                    })({ breakpointName: m.name, assault: i.assault, defend: i.defend }),
                [m.name, i.assault, i.defend],
            );
        return (
            t.useEffect(() => {
                if (s && _ === Ld) return (d.stop(), void f($d));
                if (!s && _ === Kd) return (d.stop(), void f(Fd));
                switch (_) {
                    case Ld:
                        d.start({
                            from: { x: '-50%', y: '0', rotate: 180, opacity: 1 },
                            to: [
                                { x: '-50%', y: '-5rem', rotate: 180, opacity: 0 },
                                { x: '-50%', y: '0', rotate: 180, opacity: 0 },
                                { x: '-50%', y: '0', rotate: 180, opacity: 1 },
                            ],
                            config: { easing: Xd, duration: 800 },
                            loop: !0,
                        });
                        break;
                    case $d:
                        (d.start({
                            to: { opacity: 0, x: '-50%', y: s ? '40rem' : '0', rotate: s ? 0 : 180 },
                            immediate: !0,
                        }),
                            n.start({
                                to: { opacity: s ? 0 : 1 },
                                delay: s ? 0 : 150,
                                config: { easing: Xd, duration: 200 },
                            }),
                            o.start({
                                to: { y: s ? '0' : l, backgroundColor: s ? 'rgba(22, 30, 40, 0.96)' : 'transparent' },
                                config: { easing: Xd, duration: 200 },
                                delay: s ? 0 : 150,
                                onRest: () => f(s ? Fd : Ld),
                            }),
                            c.start({
                                to: { opacity: s ? 1 : 0 },
                                delay: s ? 0 : 150,
                                config: { easing: Xd, duration: 200 },
                            }),
                            v.start({
                                to: { opacity: s ? 1 : 0 },
                                delay: s ? 150 : 0,
                                config: { easing: Xd, duration: 100 },
                            }));
                        break;
                    case Fd:
                        (d.start({
                            to: { opacity: 0, x: '-50%', y: s ? '40rem' : '0', rotate: s ? 0 : 180 },
                            immediate: !0,
                        }),
                            f(s ? Kd : $d));
                        break;
                    case Kd: {
                        const e = m.weight > ee.large.weight ? '53rem' : '40rem';
                        d.start({
                            from: { x: '-50%', y: e, rotate: 0, opacity: 1 },
                            to: [
                                {
                                    x: '-50%',
                                    y: m.weight > ee.large.weight ? '58rem' : '45rem',
                                    rotate: 0,
                                    opacity: 0,
                                    config: { duration: 1e3 },
                                },
                                { x: '-50%', y: e, rotate: 0, opacity: 0, config: { duration: 400 } },
                                { x: '-50%', y: e, rotate: 0, opacity: 1, config: { duration: 200 } },
                            ],
                            config: { easing: Xd, duration: 800 },
                            loop: !0,
                        });
                        break;
                    }
                }
            }, [_, s, l, m.weight, d, o, c, v, n]),
            t.useLayoutEffect(() => {
                !1 === s && _ === Ld && o.start({ to: { y: l }, immediate: !0 });
            }, [l, s, _, o]),
            e.jsx(u.div, {
                className: zd,
                style: b,
                children: e.jsx(qc, { config: h, data: i, className: a(wd, !s && Id), children: e.jsx(Md, {}) }),
            })
        );
    }),
    Ud = r(function () {
        const { model: s } = Zi(),
            n = s.computes.personalEffiency(),
            r = s.battleInfo.get().finishReasonClarification,
            i = v.resolve('strings'),
            l = x(),
            { hintKeyRef: o, overlayDividerRef: c, personalEfficiencyRef: d, completedSteps: m } = fa(),
            _ = !1 === m.has(ma.fifth),
            [f] = p(() => ({ from: { opacity: 0 }, ref: o })),
            [b] = p(() => ({ from: { maskSize: '0% 100%' }, ref: c })),
            [h] = p(() => ({ from: { opacity: 0 }, ref: d })),
            g = W({ value: 159 }, { medium: { value: 187 }, large: { value: 199 }, extraLarge: { value: 267 } }),
            { active: y } = ce(),
            N = t.useRef(null),
            [j, w] = t.useState(0),
            [I, A] = t.useState(!1),
            [S, R] = p(() => ({ opacity: I ? 0 : 1 }));
        t.useEffect(() => {
            y !== Ye.personal && A(!1);
        }, [y]);
        const C = t.useCallback(() => {
            var e;
            const a = (null == (e = N.current) ? void 0 : e.getBoundingClientRect().height) || 0;
            a > 0 && w(Math.round(a));
        }, [w]);
        G(N, C);
        const B = t.useMemo(() => (j > 0 ? ke(j) - g.value + 'rem' : '150%'), [j, g]),
            P = t.useMemo(jd, []);
        if (0 === n.assault && 0 === n.defend && 0 === n.rows.length)
            return e.jsxs(u.div, {
                style: h,
                className: Sd,
                children: [
                    '' !== r &&
                        e.jsx('div', {
                            className: Rd,
                            children: i.readOrEmpty(`battle_results.finish.clarification.${r}`),
                        }),
                    e.jsx('div', {
                        className: Rd,
                        children: i.readOrEmpty('battle_results.common.battleEfficiency.noEfficiency'),
                    }),
                ],
            });
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(fc, {
                    closedPosition: B,
                    visible: I,
                    changeVisible: A,
                    children: e.jsx('div', {
                        className: a(Cd, 0 === j && Bd, _ && Pd),
                        children: e.jsxs(Rc, {
                            ref: N,
                            children: [
                                e.jsx(u.div, {
                                    className: a(Hd, !1 === I && Od),
                                    style: b,
                                    children: e.jsx(Rc.OverlayDivider, {}),
                                }),
                                e.jsx(qd, { visible: I, totalEfficiencyStylesApi: R }),
                                e.jsx(u.div, {
                                    className: Ad,
                                    style: f,
                                    children: e.jsx(Rc.HintKey, { disabled: y !== Ye.personal }),
                                }),
                            ],
                        }),
                    }),
                }),
                e.jsx(u.div, {
                    style: S,
                    className: a(Td, (I || _) && Dd),
                    onClick: function (e) {
                        (e.stopPropagation(),
                            A(!0),
                            l.play('click', { original: e, target: 'overview:total-personal-efficiency' }),
                            l.play('openOverlay', { original: e, target: 'overview:total-personal-efficiency' }));
                    },
                    children: e.jsxs(u.div, {
                        style: h,
                        children: [
                            '' !== r &&
                                e.jsx('div', {
                                    className: Wd,
                                    onClick: (e) => e.stopPropagation(),
                                    children: e.jsx('div', {
                                        className: Rd,
                                        children: i.readOrEmpty(`battle_results.finish.clarification.${r}`),
                                    }),
                                }),
                            e.jsx(qc, { config: P, data: n, className: Vd, children: e.jsx(qc.Header, {}) }),
                        ],
                    }),
                }),
            ],
        });
    }),
    Yd = I('Overview', Qo),
    Zd = r(function ({ className: s }) {
        var n;
        const r = v.resolve('strings'),
            i = x(),
            { model: l, controls: o } = Zi(),
            c = l.additionalBonus.get(),
            d = l.battleInfo.get(),
            m = l.personalEfficiency.achievements.get(),
            { step: _, battleStatusRef: f, dividerRef: b, earnedCurrenciesRef: h, bonusRef: y } = fa(),
            [w] = p(() => ({ from: { opacity: 0, y: '-10rem' }, ref: f })),
            [I] = p(() => ({ from: { maskSize: '0% 100%' }, ref: b })),
            [A] = p(() => ({ from: { opacity: 0, y: '-10rem' }, ref: h })),
            [S] = p(() => ({ from: { opacity: 0, y: '10rem' }, ref: y })),
            { api: R, setCompletedAnimationIndexes: C } = Qi(),
            B = l.computes.premiumAndStandartEarnings(),
            P = null == (n = l.battleInfo.get()) ? void 0 : n.status,
            k = t.useMemo(() => (void 0 !== d && ki.includes(null == d ? void 0 : d.modeName) ? Pi : Si), [d]);
        return (
            t.useEffect(() => {
                if (_ === ma.first) {
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
                            config: { duration: 400 + n, easing: N.cubicBezier(1, 0, 0.95, 1) },
                            onRest() {
                                (i.play('achievementAppeared', { target: 'overview' }), C((e) => j(e, t)));
                            },
                        };
                    }),
                        R.start((t) => ({
                            opacity: 1,
                            delay: 150 + 200 * t + (e - 500 * Math.log(m.length - t)),
                            config: {
                                duration: 250 + (a - 150 * Math.log(m.length - t)),
                                easing: N.cubicBezier(0.33, 0, 0.25, 1),
                            },
                        })));
                }
            }, [_, R, C, i, m.length]),
            e.jsxs(Yd, {
                className: s,
                children: [
                    e.jsx('div', { className: Jo }),
                    l.playerSatisfaction.get().isPlayerSatisfactionInterfaceEnabled &&
                        e.jsx(Nl, {
                            state: l.playerSatisfaction.get().state,
                            onSatisfactionRatingSelected: o.onSatisfactionRatingSelected,
                        }),
                    e.jsx(uc, {}),
                    e.jsxs('div', {
                        className: a(ec, 0 === m.length && ac),
                        children: [
                            e.jsx('div', {
                                className: tc,
                                children: e.jsx(u.div, {
                                    style: w,
                                    className: sc,
                                    children: e.jsx('div', {
                                        className: nc,
                                        'data-test-id': 'winStatus',
                                        children: g.toUpperCase(r.readOrEmpty(`battle_results.status.${P}`)),
                                    }),
                                }),
                            }),
                            e.jsx(cl, { className: rc }),
                            e.jsx(u.div, { style: A, className: cc, children: e.jsx(Yo, {}) }),
                            e.jsx(u.div, {
                                style: I,
                                className: ic,
                                children: e.jsx(ha, { classNames: { base: lc, image: oc } }),
                            }),
                            e.jsx(Il, {
                                ...c,
                                premiumAndStandartEarnings: B,
                                applyBonus: o.applyBonus,
                                handleAdvertisement: (e) => o.useAdvertisement(e),
                                supportedAdvertisements: k,
                                showBonusDetails: o.showBonusDetails,
                                children: e.jsx(u.div, { style: S, children: e.jsx(To, {}) }),
                            }),
                        ],
                    }),
                    e.jsx(Ud, {}),
                ],
            })
        );
    }),
    Jd = r(function (a) {
        const { model: t } = Zi(),
            s = t.personalEfficiency.achievements.get(),
            n = t.computes.personalInfo().vehicle.nation;
        return e.jsx(al, { achievements: s, vehicleNation: n, children: e.jsx(Zd, { ...a }) });
    }),
    Qd = { divider: 'Divider_80a19f4b' },
    em = t.forwardRef(function ({ classNames: t, className: s, ...n }, r) {
        return e.jsx('div', {
            ...n,
            ref: r,
            className: a(Qd.divider, null == t ? void 0 : t.base, s),
            children: e.jsx(w, {
                className: a(Qd.dividerImage, null == t ? void 0 : t.image),
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    });
const am = {
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
function tm(e, a) {
    return void 0 === a ? 'default' : a === e ? 'hover' : 'extinct';
}
const sm = t.forwardRef(function (
    { achievement: t, achievementsLength: s, index: n, hoverIndex: r, setHoverIndex: i, ...l },
    o,
) {
    const c = x(),
        d = q({ args: { tooltipId: t.tooltipId, tooltipArgs: t.tooltipArgs } }),
        m = W(
            { width: '48rem', height: '48rem', path: `achievement.c_48x48.${t.iconName}` },
            { medium: { width: '67rem', height: '71rem', path: `achievement.${t.iconName}` } },
        );
    return e.jsx('div', {
        ...l,
        ...d,
        className: a(am.achievement, am[`achievement__${tm(n, r)}`]),
        style: { zIndex: n === r ? s + 1 : s - n },
        onMouseEnter: function (e) {
            (d.onMouseEnter(),
                i(n),
                c.play('mouse-enter', { original: e, target: 'team-efficiency:efficiency-details:achievement' }));
        },
        onMouseLeave: () => {
            (d.onMouseLeave(), i(void 0));
        },
        children: e.jsx(w, { ref: o, className: am.achievementIcon, ...m }, t.iconName),
    });
});
function nm({ vehicleStatusKey: e, anonymized: a, clanAbbrev: t, personal: s, abbondonBattle: n }) {
    if (s && n) return 'battle_results.common.vehicleState.prematureLeave';
    return !1 === Fi.includes(e)
        ? `battle_results.common.vehicleState.${e}`
        : a || '' === t
          ? `battle_results.common.vehicleState.${e}_with_killername`
          : `battle_results.common.vehicleState.${e}_with_killername_and_clan`;
}
const rm = r(function ({
        team: s,
        account: n,
        vehicle: r,
        achievements: i,
        squadIndex: l,
        personal: o,
        userStatus: c,
        killer: d,
    }) {
        const m = v.resolve('strings'),
            [u, p] = t.useState(void 0),
            { model: _ } = Zi(),
            f = _.computes.personalInfo(),
            g = W({ width: '230rem', height: '184rem' }, { medium: { width: '290rem', height: '232rem' } }),
            y = h({
                header: m.readOrEmpty('tooltips.anonymizer.teamStats.header').replace('%(name)s', n.username),
                body: m.readOrEmpty('tooltips.anonymizer.teamStats.body'),
            }),
            x = Ui({ personal: o, platoonType: qi(s, f.squadIndex, l), anonymizer: n.anonymizer }),
            N = -1 === (j = c.deathReason) ? 'alive' : `dead${j}`;
        var j;
        const w = x ? d.fakeUsername : d.username;
        return e.jsxs('div', {
            className: am.header,
            children: [
                e.jsx('div', {
                    className: am.vehicleImageWrapper,
                    children: e.jsx(Ce, { name: r.techName, width: g.width, height: g.height }),
                }),
                e.jsxs('div', {
                    className: am.info,
                    children: [
                        e.jsxs(Ie, {
                            className: am.accountInfo,
                            children: [
                                '' !== n.badge &&
                                    e.jsx(Ie.Badge, {
                                        className: am.accountInfoGap,
                                        size: Ie.Badge.sizes.x48x48,
                                        badgeId: n.badge,
                                    }),
                                e.jsx(Ie.Name, {
                                    className: a(am.accountName, am.accountInfoGap),
                                    children: e.jsx(Ae, { text: x ? n.fakeUsername : n.username }),
                                }),
                                '' !== n.clanAbbreviation &&
                                    !x &&
                                    e.jsx(Ie.ClanTag, {
                                        className: am.clanAbbreviation,
                                        children: e.jsx(b, {
                                            path: 'common.clanTag',
                                            params: { abbrev: n.clanAbbreviation },
                                            brackets: { start: '{', end: '}' },
                                        }),
                                    }),
                                n.igrType !== Zc &&
                                    e.jsx(Ie.IgrIcon, { size: Ie.IgrIcon.sizes.x64x28, className: am.accountInfoGap }),
                                '' !== n.suffixBadge &&
                                    e.jsx(Ie.Stripe, {
                                        size: Ie.Stripe.sizes.regular,
                                        badgeId: n.suffixBadge,
                                        className: am.accountInfoGap,
                                    }),
                                n.anonymizer &&
                                    e.jsx(Ie.AnonymizerIcon, {
                                        ...y,
                                        size: Ie.AnonymizerIcon.sizes.x32x32,
                                        className: am.anonymizerIcon,
                                    }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: am.vehicle,
                            children: [
                                e.jsx(Be, { value: r.tier, className: a(am.vehicleLevel, am.vehicleGap) }),
                                e.jsx(Pe, {
                                    type: r.type,
                                    size: 'x24x24',
                                    className: a(am.vehicleType, am.vehicleGap),
                                }),
                                e.jsx('div', { className: am.vehicleName, children: r.longName }),
                            ],
                        }),
                        e.jsx('div', {
                            className: am.vehicleState,
                            children: e.jsx(b, {
                                path: nm({
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
                                className: am.achievements,
                                children: P($r(i), (a, t) =>
                                    e.jsx(
                                        sm,
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
    im = I('StatisticsLabel'),
    lm = v.resolve('strings'),
    om = t.forwardRef(function ({ labelKey: a, ...t }, s) {
        return e.jsx(im, { ...t, ref: s, children: lm.readOrEmpty(a) });
    }),
    cm = 'Value_798a6cdd',
    dm = 'Value_separator_798a6cdd',
    mm = v.resolve('strings');
function um(e, a) {
    switch (e) {
        case Ei.Integer:
            return g.formatNumber('integral', a);
        case Ei.Float:
            return g.formatReal('fractional', a);
        default:
            return a;
    }
}
const pm = I('StatisticsValue', cm),
    _m = t.forwardRef(function (
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
        return e.jsx(pm, {
            ...c,
            ref: d,
            className: a(null == o ? void 0 : o.base, l),
            children: P(n, (l, c) =>
                e.jsxs(
                    t.Fragment,
                    {
                        children: [
                            e.jsx('div', {
                                className: a(
                                    0 === l && (null == o ? void 0 : o.zeroValue),
                                    l < 0 && (null == o ? void 0 : o.negativeValue),
                                ),
                                children: um(r, l),
                            }),
                            c < n.length - 1 &&
                                e.jsxs('div', {
                                    className: a(dm, null == o ? void 0 : o.separator),
                                    children: [' ', mm.readOrEmpty(i), ' '],
                                }),
                        ],
                    },
                    `${s}_value_${c}`,
                ),
            ),
        });
    }),
    fm = 'Index_scrollAreaContent_52a570a',
    bm = 'Index_scrollAreaContent__initialized_b2629fde',
    vm = 'Index_item_6b7cdfb0',
    hm = 'Index_separator_add04e19',
    gm = I('Statistics', 'Index_statistics_638478ff'),
    ym = I('StatisticsItem', vm),
    xm = I('StatisticsItemSeparator', hm);
function Nm({ children: t, scrollbarProps: s, scrollAreaProps: n }) {
    var r;
    const i = C(),
        l = Aa(i.api);
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(B, {
                ...n,
                classNames: {
                    ...(null == n ? void 0 : n.classNames),
                    content: a(fm, l && bm, null == (r = null == n ? void 0 : n.classNames) ? void 0 : r.content),
                },
                children: t,
            }),
            e.jsx(S, { ...s }),
        ],
    });
}
const jm = t.forwardRef(function ({ scrollbarProps: a, scrollAreaProps: t, ...s }, n) {
    return e.jsx(gm, {
        ...s,
        ref: n,
        children: e.jsx(A, { children: e.jsx(Nm, { ...s, scrollbarProps: a, scrollAreaProps: t }) }),
    });
});
((jm.Item = ym), (jm.Value = _m), (jm.Label = om), (jm.Separator = xm));
const wm = {
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
function Im({ squareSize: a = 1, spacing: s = 2, backgroundColor: n = '#d9d9d9' }) {
    const r = t.useRef(null),
        [i, l] = t.useState(0),
        o = a + s,
        c = t.useCallback(() => {
            const e = r.current;
            if (null !== e) {
                const a = e.getBoundingClientRect().width,
                    t = ke(a);
                l(Math.floor(t / o));
            }
        }, [o]);
    return (
        Ee(c, [r.current, o, c]),
        t.useEffect(() => Te(c), [c]),
        e.jsx('div', {
            ref: r,
            className: wm.separator,
            children: Array.from({ length: i }).map((t, s) =>
                e.jsx(
                    'div',
                    {
                        className: wm.separatorSquare,
                        style: { backgroundColor: n, width: `${a}rem`, height: `${a}rem`, left: s * o + 'rem' },
                    },
                    s,
                ),
            ),
        })
    );
}
function Am({ list: s }) {
    return e.jsx(jm, {
        scrollbarProps: { classNames: { base: wm.scrollbar } },
        scrollAreaProps: { classNames: { content: wm.scrollAreaContent } },
        children: P(s, (s) =>
            e.jsxs(
                t.Fragment,
                {
                    children: [
                        e.jsxs(jm.Item, {
                            className: wm.listItem,
                            children: [
                                e.jsx(jm.Label, {
                                    className: wm.label,
                                    labelKey: `battle_results.team.stats.labels_${s.labelKey}`,
                                }),
                                e.jsx(jm.Separator, { className: wm.listItemSeparator, children: e.jsx(Im, {}) }),
                                e.jsx(jm.Value, {
                                    classNames: {
                                        base: wm.value,
                                        zeroValue: wm.zeroValue,
                                        separator: wm.valueSeparator,
                                    },
                                    labelKey: s.labelKey,
                                    value: s.value,
                                    type: s.paramValueType,
                                }),
                            ],
                        }),
                        void 0 !== s.details &&
                            P(s.details, (t) =>
                                e.jsxs(
                                    jm.Item,
                                    {
                                        className: a(wm.listItem, wm.listSubItem),
                                        children: [
                                            e.jsx(jm.Label, {
                                                className: wm.label,
                                                labelKey: `battle_results.team.stats.labels_${t.labelKey}`,
                                            }),
                                            e.jsx(jm.Separator, {
                                                className: wm.listItemSeparator,
                                                children: e.jsx(Im, {}),
                                            }),
                                            e.jsx(jm.Value, {
                                                classNames: {
                                                    base: wm.value,
                                                    zeroValue: wm.zeroValue,
                                                    separator: wm.valueSeparator,
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
const Sm = 'EfficiencyDetails_divider_85b11efd',
    Rm = 'EfficiencyDetails_dividerImage_5b9d06d2',
    Cm = 'EfficiencyDetails_closeIcon_8d81da90',
    Bm = 'EfficiencyDetails_statistics_30a81815',
    Pm = I('EfficiencyDetails', 'EfficiencyDetails_efficiencyDetails_db8069eb', {
        variants: {
            team: {
                [Xi]: 'EfficiencyDetails_efficiencyDetails__allies_20b1febc',
                [$i]: 'EfficiencyDetails_efficiencyDetails__enemies_23a29af',
            },
        },
    }),
    km = r(function ({ team: a, className: s }) {
        const { model: n, controls: r } = Zi(),
            i = n.computes.efficiencyDetails(),
            l = x(),
            o = t.useRef(null);
        return (
            t.useEffect(() => {
                const e = de.down(([, e]) => {
                        'outside' === e && r.teamEfficiency.selectRow(void 0);
                    }),
                    a = De(window, 'click', (e) => {
                        o.current && !o.current.contains(e.target) && r.teamEfficiency.selectRow(void 0);
                    });
                return () => {
                    (a(), e());
                };
            }, [r.teamEfficiency]),
            void 0 === i
                ? null
                : e.jsxs(Pm, {
                      team: a,
                      className: s,
                      ref: o,
                      onClick: (e) => {
                          e.stopPropagation();
                      },
                      children: [
                          e.jsx(rm, {
                              team: a,
                              account: i.account,
                              squadIndex: i.squadIndex,
                              achievements: i.achievements,
                              personal: i.personal,
                              userStatus: i.userStatus,
                              vehicle: i.vehicle,
                              killer: i.killer,
                          }),
                          e.jsx('div', { className: Bm, children: e.jsx(Am, { list: i.detailedStatistics }) }),
                          e.jsx(em, { classNames: { base: Sm, image: Rm } }),
                          e.jsx(w, {
                              className: Cm,
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
    Em = 'squadIndex',
    Tm = 'account',
    Dm = 'vehicle',
    Vm = 'achievements',
    zm = 'damageDealt',
    Hm = 'kills',
    Om = 'earnedXp',
    Wm = 'AccountInfoCell_accountInfo_dec8771',
    Gm = 'AccountInfoCell_accountName_9a181e4d',
    Mm = 'AccountInfoCell_clanAbbreviation_99f1cc86',
    Xm = 'AccountInfoCell_badge_b101914f',
    $m = 'AccountInfoCell_anonymizerIcon_a1d51ca4',
    Fm = 'AccountInfoCell_igrIcon_158694e7',
    Lm = 'AccountInfoCell_stripe_fefba7b2',
    Km = r(function ({ account: t, team: s, platoon: n, className: r, classNames: i, ...l }) {
        const { model: o } = Zi(),
            c = o.computes.personalInfo(),
            d = Ui({
                personal: c.account.username === t.username,
                platoonType: qi(s, c.squadIndex, n),
                anonymizer: t.anonymizer,
            });
        return e.jsxs(Ie, {
            ...l,
            className: a(Wm, r),
            children: [
                '' !== t.badge &&
                    e.jsx(Ie.Badge, {
                        size: Ie.Badge.sizes.x24x24,
                        badgeId: t.badge,
                        className: a(Xm, null == i ? void 0 : i.badge),
                    }),
                e.jsx(Ie.Name, {
                    className: a(Gm, null == i ? void 0 : i.username),
                    children: e.jsx(Ae, { text: d ? t.fakeUsername : t.username }),
                }),
                '' !== t.clanAbbreviation &&
                    !d &&
                    e.jsx(Ie.ClanTag, {
                        className: a(Mm, null == i ? void 0 : i.clanAbbreviation),
                        children: e.jsx(b, {
                            path: 'common.clanTag',
                            params: { abbrev: t.clanAbbreviation },
                            brackets: { start: '{', end: '}' },
                        }),
                    }),
                t.igrType !== Zc &&
                    e.jsx(Ie.IgrIcon, {
                        size: Ie.IgrIcon.sizes.x34x16,
                        className: a(Fm, null == i ? void 0 : i.igrIcon),
                    }),
                '' !== t.suffixBadge &&
                    e.jsx(Ie.Stripe, {
                        size: Ie.Stripe.sizes.default,
                        badgeId: t.suffixBadge,
                        className: Lm,
                        classNames: null == i ? void 0 : i.suffixBadge,
                    }),
                t.anonymizer &&
                    e.jsx(Ie.AnonymizerIcon, {
                        size: Ie.AnonymizerIcon.sizes.x24x24,
                        className: a($m, null == i ? void 0 : i.anonymizerIcon),
                    }),
            ],
        });
    }),
    qm = 'AchievementsCell_achievementCell_e9bf973c',
    Um = 'AchievementsCell_achievementsAmount_349c209a';
function Ym({ achievements: a }) {
    const t = v.resolve('strings'),
        s = h({ body: P($r(a), (e) => t.readOrEmpty(`achievements.${e.name}`)).join('\n') }),
        n = a.length;
    return 0 === n
        ? null
        : e.jsxs('div', {
              ...s,
              className: qm,
              children: [
                  e.jsx(w, { path: 'library.medal', width: '32rem', height: '32rem' }),
                  e.jsx('div', { className: Um, children: g.formatNumber('integral', n) }),
              ],
          });
}
const Zm = { behaviour: je.static, size: '32rem' },
    Jm = { behaviour: je.static, size: '194rem' },
    Qm = { behaviour: je.static, size: '272rem' },
    eu = { behaviour: je.static, size: '320rem' },
    au = { behaviour: je.static, size: '180rem' },
    tu = { behaviour: je.static, size: '236rem' },
    su = { behaviour: je.static, size: '292rem' },
    nu = { behaviour: je.static, size: '56rem' },
    ru = { behaviour: je.static, size: '60rem' },
    iu = { behaviour: je.static, size: '80rem' },
    lu = { behaviour: je.static, size: '40rem' },
    ou = { behaviour: je.static, size: '60rem' },
    cu = { behaviour: je.static, size: '60rem' },
    du = { behaviour: je.static, size: '56rem' },
    mu = { behaviour: je.static, size: '60rem' },
    uu = { behaviour: je.static, size: '80rem' },
    pu = { behaviour: je.static, size: '40rem' },
    _u = {
        [Em]: { [we.extraSmall]: Zm, [we.medium]: Zm, [we.large]: Zm, [we.extraLarge]: Zm },
        [Tm]: { [we.extraSmall]: Jm, [we.medium]: Qm, [we.large]: Qm, [we.extraLarge]: eu },
        [Dm]: { [we.extraSmall]: au, [we.medium]: tu, [we.large]: tu, [we.extraLarge]: su },
        [zm]: { [we.extraSmall]: nu, [we.medium]: ru, [we.large]: ru, [we.extraLarge]: iu },
        [Hm]: { [we.extraSmall]: lu, [we.medium]: ou, [we.large]: ou, [we.extraLarge]: cu },
        [Om]: { [we.extraSmall]: du, [we.medium]: mu, [we.large]: mu, [we.extraLarge]: uu },
        [Vm]: { [we.extraSmall]: pu, [we.medium]: pu, [we.large]: pu, [we.extraLarge]: pu },
    },
    fu = {
        headerCell__asc: 'HeaderCell_headerCell__asc_204e6a44',
        headerCell__desc: 'HeaderCell_headerCell__desc_dc5a7202',
        headerCell: 'HeaderCell_headerCell_5b34d1b1',
        headerCell__icon: 'HeaderCell_headerCell__icon_cfa14ddf',
        headerCell__text: 'HeaderCell_headerCell__text_b476890c',
    },
    bu = {
        [Em]: 'library.shield',
        [Dm]: 'library.panzer',
        [zm]: 'library.cross_with_gap',
        [Hm]: 'library.crossed_tank',
        [Om]: 'library.star',
        [Vm]: 'library.medal',
    },
    vu = {
        [Em]: 'squadHeader',
        [Tm]: 'playerHeader',
        [Dm]: 'tankHeader',
        [zm]: 'damageHeader',
        [Hm]: 'fragHeader',
        [Om]: 'xpHeader',
        [Vm]: 'medalHeader',
    },
    hu = t.forwardRef(function ({ name: t, team: s, column: n, className: r, ...i }, l) {
        const o = n.getIsSorted(),
            c = v.resolve('strings'),
            d = h({
                header: c.readOrEmpty(`battle_results.team.${vu[t]}.header`),
                body: c.readOrEmpty(`battle_results.team.${vu[t]}.body`),
            }),
            m = t === Tm;
        return e.jsx('div', {
            ...i,
            ...d,
            ref: l,
            className: a(fu.headerCell, m ? fu.headerCell__text : fu.headerCell__icon, o && fu[`headerCell__${o}`], r),
            children: m
                ? c.readOrEmpty(`battle_results.team.stats.${s}`)
                : e.jsx(w, { width: '32rem', height: '32rem', path: bu[t] }),
        });
    }),
    gu = 'NumberValueCell_numberValueCell_8840a07';
function yu({ value: t, className: s, showZero: n = !0 }) {
    return !1 === n && 0 === t ? null : e.jsx('div', { className: a(gu, s), children: g.formatNumber('integral', t) });
}
const xu = {
        platoon: 'PlatoonCell_platoon_5fe0374b',
        platoonText: 'PlatoonCell_platoonText_b6a98287',
        platoonText__personal: 'PlatoonCell_platoonText__personal_d021db4c',
        platoonText__alien: 'PlatoonCell_platoonText__alien_9767e814',
    },
    Nu = { [Ki]: 'library.platoon_indicator_gray', [Li]: 'library.platoon_indicator_orange' },
    ju = r(function ({ platoon: t, team: s }) {
        const { model: n } = Zi(),
            r = qi(s, n.computes.personalInfo().squadIndex, t);
        if (null === r) return null;
        const i = Nu[r];
        return e.jsxs('div', {
            className: xu.platoon,
            children: [
                e.jsx(w, { path: i, width: '32rem', height: '32rem' }),
                e.jsx('div', { className: a(xu.platoonText, xu[`platoonText__${r}`]), children: t }),
            ],
        });
    }),
    wu = 'VehicleCell_vehicle_386f696d',
    Iu = 'VehicleCell_vehicleImageWrapper_aa1c27bd',
    Au = 'VehicleCell_vehicleTypeWrapper_3f1f3f6d',
    Su = 'VehicleCell_vehicleLevel_1a4134b1',
    Ru = 'VehicleCell_vehicleName_eaeb9715';
function Cu({ vehicle: t, classNames: s, className: n }) {
    return e.jsxs('div', {
        className: a(wu, n),
        children: [
            e.jsx('div', {
                className: a(Iu, null == s ? void 0 : s.imageWrapper),
                children: e.jsx(Ce, {
                    size: Ce.size.x120x96,
                    name: t.techName,
                    className: null == s ? void 0 : s.image,
                }),
            }),
            e.jsx(Be, { value: t.tier, className: a(Su, null == s ? void 0 : s.level) }),
            e.jsx('div', {
                className: a(Au, null == s ? void 0 : s.typeWrapper),
                children: e.jsx(Pe, { size: 'x24x24', type: t.type, className: null == s ? void 0 : s.type }),
            }),
            e.jsx('div', { className: a(Ru, null == s ? void 0 : s.name), children: e.jsx(Ae, { text: t.name }) }),
        ],
    });
}
const Bu = {
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
    Pu = {
        tableBodyRow: 'TableBodyRow_tableBodyRow_be19874',
        tableBodyRow__selected: 'TableBodyRow_tableBodyRow__selected_9cd5fe77',
        selectedRowTail: 'TableBodyRow_selectedRowTail_595bad28',
        selectedRowTail__enemies: 'TableBodyRow_selectedRowTail__enemies_15d3ff4e',
        rowDivider: 'TableBodyRow_rowDivider_7f22c0ad',
        rowDividerImage: 'TableBodyRow_rowDividerImage_9c09afd1',
        accountInfo: 'TableBodyRow_accountInfo_5ecfc9f2',
        vehicle: 'TableBodyRow_vehicle_5ecfc9f2',
        numberValue: 'TableBodyRow_numberValue_7f3c135',
        tableBodyRow__killed: 'TableBodyRow_tableBodyRow__killed_5ecfc9f2',
        tableBodyRow__personal: 'TableBodyRow_tableBodyRow__personal_5ecfc9f2',
        accountName: 'TableBodyRow_accountName_b45e4890',
        tableBodyRow__teamKiller: 'TableBodyRow_tableBodyRow__teamKiller_5ecfc9f2',
        clanAbbreviation: 'TableBodyRow_clanAbbreviation_26e5920d',
        vehicleText: 'TableBodyRow_vehicleText_46b6437b',
        selectedOverlay: 'TableBodyRow_selectedOverlay_7f267587',
        selectedOverlayDivider: 'TableBodyRow_selectedOverlayDivider_35a0f807',
        selectedOverlayDivider__bottom: 'TableBodyRow_selectedOverlayDivider__bottom_20b949b4',
        selectedOverlayImage: 'TableBodyRow_selectedOverlayImage_9c09afd1',
    },
    ku = f(),
    Eu = (e, a, t) => {
        const s = e.getValue('account'),
            n = e.getValue('squadIndex');
        return Ui({
            personal: a.account.username === s.username,
            platoonType: qi(t, a.squadIndex, n),
            anonymizer: s.anonymizer,
        })
            ? s.fakeUsername
            : s.username;
    },
    Tu = { [Ve.heavyTank]: 5, [Ve.mediumTank]: 4, [Ve['AT-SPG']]: 3, [Ve.lightTank]: 2, [Ve.SPG]: 1 },
    Du = ({ team: t, personalInfo: s, breakpointName: n }) => {
        const r = (e, a) =>
                ((e, a, t, s) => {
                    const n = Eu(e, t, s),
                        r = Eu(a, t, s);
                    return n.localeCompare(r);
                })(e, a, s, t),
            i = 'small' === n ? we.extraSmall : n;
        return [
            ku.accessor('squadIndex', {
                id: Em,
                header: (a) => e.jsx(hu, { name: Em, column: a.column }),
                sortingFn: (e, a) => {
                    const t = a.getValue('squadIndex') - e.getValue('squadIndex');
                    return 0 !== t ? t : r(e, a);
                },
                cell: (a) => e.jsx(ju, { team: t, platoon: a.cell.getValue() }),
                meta: { column: _u[Em][i] },
            }),
            ku.accessor('account', {
                id: Tm,
                header: (a) => e.jsx(hu, { team: t, name: Tm, column: a.column }),
                sortDescFirst: !1,
                sortingFn: r,
                cell: (a) =>
                    e.jsx(Km, {
                        account: a.cell.getValue(),
                        team: t,
                        platoon: a.row.original.squadIndex,
                        className: Pu.accountInfo,
                        classNames: { username: Pu.accountName, clanAbbreviation: Pu.clanAbbreviation },
                    }),
                meta: { column: _u[Tm][i], className: Bu.alignLeft },
            }),
            ku.accessor('vehicle', {
                id: Dm,
                header: (a) => e.jsx(hu, { name: Dm, column: a.column }),
                sortingFn: (e, a) => {
                    const t = e.getValue('vehicle'),
                        s = a.getValue('vehicle');
                    return t.tier - s.tier || Tu[t.type] - Tu[s.type] || s.name.localeCompare(t.name) || r(e, a);
                },
                cell: (a) =>
                    e.jsx(Cu, {
                        vehicle: a.cell.getValue(),
                        className: Pu.vehicle,
                        classNames: { name: Pu.vehicleText, level: Pu.vehicleText },
                    }),
                meta: { column: _u[Dm][i] },
            }),
            ku.accessor('efficiencyValues', {
                id: zm,
                header: (a) => e.jsx(hu, { name: zm, column: a.column }),
                sortingFn: (e, a) =>
                    e.getValue('damageDealt').damageDealt - a.getValue('damageDealt').damageDealt || r(e, a),
                cell: (t) =>
                    e.jsx(yu, {
                        value: t.getValue().damageDealt,
                        className: a(Pu.numberValue, Pu.numberValue__alignRight),
                    }),
                meta: { column: _u[zm][i], className: Bu.alignRight },
            }),
            ku.accessor('efficiencyValues', {
                id: Hm,
                header: (a) => e.jsx(hu, { name: Hm, column: a.column }),
                sortingFn: (e, a) =>
                    e.getValue('kills').substractedAlliesKills - a.getValue('kills').substractedAlliesKills || r(e, a),
                cell: (a) =>
                    e.jsx(yu, { showZero: !1, value: a.getValue().substractedAlliesKills, className: Pu.numberValue }),
                meta: { column: _u[Hm][i] },
            }),
            ku.accessor('efficiencyValues', {
                id: Om,
                header: (a) => e.jsx(hu, { name: Om, column: a.column }),
                sortingFn: (e, a) => e.getValue('earnedXp').earnedXp - a.getValue('earnedXp').earnedXp || r(e, a),
                cell: (a) => e.jsx(yu, { value: a.getValue().earnedXp, className: Pu.numberValue }),
                meta: { column: _u[Om][i], className: Bu.alignRight },
            }),
            ku.accessor('achievements', {
                id: Vm,
                header: (a) => e.jsx(hu, { name: Vm, column: a.column, className: Bu.achievementCell }),
                sortingFn: (e, a) => e.getValue('achievements').length - a.getValue('achievements').length || r(e, a),
                cell: (a) => e.jsx(Ym, { achievements: a.getValue() }),
                meta: { column: _u[Vm][i], className: Bu.alignLeft },
            }),
        ];
    },
    Vu = 'Header_row_e61ae0d9',
    zu = 'Header_rowDivider_f54d9df6',
    Hu = 'Header_rowDividerImage_19f6e11',
    Ou = 'Header_cell_70aa1da5';
function Wu({ className: a }) {
    const { table: t } = he(),
        s = x();
    return e.jsxs(be.Header, {
        className: a,
        children: [
            e.jsx(em, { classNames: { base: zu, image: Hu } }),
            P(t.getHeaderGroups(), (a, t) =>
                e.jsx(
                    be.Row,
                    {
                        className: Vu,
                        children: P(a.headers, (a, n) => {
                            return e.jsx(
                                be.Cell,
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
                                    cell: { ...a, rowIndex: t, index: n, tablePart: ve.header },
                                    className: Ou,
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
const Gu = 'SelectedRowTail_selectedRowTail_8abda9c8',
    Mu = 'SelectedRowTail_selectedRowTail__hasWidth_6cb87e09',
    Xu = 'SelectedRowTail_selectedRowVerticalLine_c502cc58',
    $u = 'SelectedRowTail_selectedRowTriangle_6f2b6bb3',
    Fu = 'SelectedRowTail_rowDivider_8fbc881',
    Lu = 'SelectedRowTail_rowDivider__bottom_4111cb99',
    Ku = 'SelectedRowTail_rowDividerImage_d11f29d5';
function qu({ className: t, short: s }) {
    return e.jsxs('div', {
        className: a(Gu, !s && Mu, t),
        children: [
            e.jsx(em, { classNames: { base: Fu, image: Ku } }),
            e.jsx(em, { classNames: { base: a(Fu, Lu), image: Ku } }),
            e.jsx('div', { className: Xu }),
            e.jsx('div', { className: $u }),
        ],
    });
}
const Uu = v.resolve('aliases'),
    Yu = r(function ({ row: s, team: n, rowIndex: r, scrollbarVisible: i }) {
        const { model: l, controls: o } = Zi(),
            c = x(),
            d = ue(
                (e) => {
                    (e.stopPropagation(),
                        c.play('click', { original: e, target: 'team-efficiency:efficiency-table:body:row' }),
                        o.teamEfficiency.selectRow({ team: n, username: s.original.account.username }));
                },
                [o.teamEfficiency, s.original.account.username, c, n],
                400,
            ),
            m = l.teamsStatistic.selectedRow.get(),
            u = l.computes.personalInfo().account.username === s.original.account.username,
            p = s.original.account.teamKiller,
            f = s.original.account.killed,
            b = (null == m ? void 0 : m.team) === n && m.username === s.original.account.username,
            v = fe({
                args: t.useMemo(
                    () => ({ vehicleCD: s.original.vehicle.vehicleCD, databaseID: s.original.databaseId }),
                    [s.original.databaseId, s.original.vehicle.vehicleCD],
                ),
                contentId: Uu.read((e) => e.battle_result.contextMenu.User('resId')),
            });
        return e.jsxs(be.Row, {
            ...(!u && v),
            onMouseEnter: (e) =>
                c.play('mouse-enter', { target: 'team-efficiency:efficiency-table:body:row', original: e }),
            className: a(
                Pu.tableBodyRow,
                b && Pu.tableBodyRow__selected,
                u && Pu.tableBodyRow__personal,
                p && Pu.tableBodyRow__teamKiller,
                f && Pu.tableBodyRow__killed,
            ),
            onClick: d,
            children: [
                e.jsxs('div', {
                    className: Pu.selectedOverlay,
                    children: [
                        e.jsx(em, { classNames: { base: Pu.selectedOverlayDivider, image: Pu.selectedOverlayImage } }),
                        e.jsx(em, {
                            classNames: {
                                base: a(Pu.selectedOverlayDivider, Pu.selectedOverlayDivider__bottom),
                                image: Pu.selectedOverlayImage,
                            },
                        }),
                        e.jsx(qu, {
                            short: i && n === Xi,
                            className: a(Pu.selectedRowTail, Pu[`selectedRowTail__${n}`]),
                        }),
                    ],
                }),
                e.jsx(em, {
                    classNames: { base: a(Pu.rowDivider, b && Pu.rowDivider__selected), image: Pu.rowDividerImage },
                }),
                P(s.getVisibleCells(), (a, t) =>
                    e.jsx(
                        be.Cell,
                        {
                            cell: { ...a, rowIndex: r, index: t, tablePart: ve.body },
                            children: _(a.column.columnDef.cell, a.getContext()),
                        },
                        a.id,
                    ),
                ),
            ],
        });
    });
function Zu({ team: a }) {
    const { table: s } = he(),
        { api: n } = C(),
        r = ge(),
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
        e.jsxs(be.Body, {
            className: Bu.tableBody,
            children: [
                e.jsx(u.div, {
                    className: Bu.mask,
                    style: c,
                    children: e.jsx(B, {
                        classNames: { wrapper: Bu.scrollWrapper, content: Bu.scrollAreaContent },
                        children: e.jsx('div', {
                            ref: i,
                            className: Bu.rowsWrapper,
                            children: P(s.getRowModel().rows, (t, s) =>
                                e.jsx(Yu, { row: t, rowIndex: s, team: a, scrollbarVisible: l }, t.id),
                            ),
                        }),
                    }),
                }),
                e.jsx(S, { classNames: { base: Bu.scrollBar } }),
            ],
        })
    );
}
const Ju = I('TeamEfficiencyTable', Bu.efficiencyTable, {
        variants: { team: { [Xi]: Bu.efficiencyTable__allies, [$i]: Bu.efficiencyTable__enemies } },
    }),
    Qu = {
        [ai.Squad]: Em,
        [ai.Player]: Tm,
        [ai.Damage]: zm,
        [ai.Frag]: Hm,
        [ai.Xp]: Om,
        [ai.Vehicle]: Dm,
        [ai.Medal]: Vm,
    },
    ep = r(({ team: a, data: s, className: n }) => {
        const { model: r, controls: i } = Zi(),
            l = r.computes.personalInfo(),
            o = r.teamsStatistic.sorting.get(),
            c = t.useMemo(() => [{ id: Qu[o.column], desc: o.sortDirection === ti.Desc }], [o.column, o.sortDirection]),
            d = Q().breakpoint.name,
            m = t.useCallback(
                (e) => {
                    const a = (e instanceof Function ? e(c) : e)[0] ?? { id: Dm, desc: !0 };
                    i.teamEfficiency.sort({
                        column: Object.keys(Qu).find((e) => Qu[e] === a.id) || ai.Vehicle,
                        sortDirection: a.desc ? ti.Desc : ti.Asc,
                    });
                },
                [c, i.teamEfficiency],
            ),
            u = t.useMemo(() => Du({ team: a, personalInfo: l, breakpointName: d }), [a, d, l]);
        return (
            T(ze(d), `Such breakpoint ${d} is not supported`),
            e.jsx(Ne, {
                columns: u,
                data: s,
                enableMultiRowSelection: !1,
                enableSortingRemoval: !1,
                sorting: c,
                onSortingChange: m,
                getRowId: (e) => e.account.username,
                enableSorting: !0,
                children: e.jsx(Ju, {
                    team: a,
                    className: n,
                    children: e.jsxs(
                        be,
                        {
                            className: Bu.table,
                            children: [
                                e.jsx(Wu, { className: Bu.header }),
                                e.jsx(A, { children: e.jsx(Zu, { team: a }) }),
                            ],
                        },
                        d,
                    ),
                }),
            })
        );
    }),
    ap = {
        base: 'TeamEfficiency_ab8dfa62',
        wrapper: 'TeamEfficiency_wrapper_a2a49ce',
        table: 'TeamEfficiency_table_5763cf17',
        table__hidden: 'TeamEfficiency_table__hidden_e8864815',
        details: 'TeamEfficiency_details_f087bb8e',
        details__visible: 'TeamEfficiency_details__visible_eaf91b76',
    },
    tp = I('TeamEfficiency', ap.base),
    sp = r(function ({ className: t }) {
        const { model: s } = Zi(),
            n = s.teamsStatistic.allies.get(),
            r = s.teamsStatistic.enemies.get(),
            i = s.teamsStatistic.selectedRow.get();
        return e.jsx(tp, {
            className: a(ap[`base__${null == i ? void 0 : i.team}`], t),
            children: e.jsxs('div', {
                className: ap.wrapper,
                children: [
                    e.jsx(km, {
                        team: $i,
                        className: a(ap.details, (null == i ? void 0 : i.team) === $i && ap.details__visible),
                    }),
                    e.jsx(ep, {
                        data: n,
                        team: Xi,
                        className: a(ap.table, (null == i ? void 0 : i.team) === $i && ap.table__hidden),
                    }),
                    e.jsx(km, {
                        team: Xi,
                        className: a(ap.details, (null == i ? void 0 : i.team) === Xi && ap.details__visible),
                    }),
                    e.jsx(ep, {
                        data: r,
                        team: $i,
                        className: a(ap.table, (null == i ? void 0 : i.team) === Xi && ap.table__hidden),
                    }),
                ],
            }),
        });
    }),
    np = {
        tab: 'App_tab_5d913562',
        vignette: 'App_vignette_6896e5b7',
        base: 'App_352edcd8',
        navigation: 'App_navigation_ea8e9ba',
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
    rp = I('PostBattle', np.base),
    ip = I('PostBattleNavigation', np.navigation);
function lp() {
    const { active: t } = ce();
    return e.jsxs('div', {
        className: a(np.content, np[`content__${t}`]),
        children: [
            e.jsx(Jd, { className: a(np.tab, np.tab__personal) }),
            e.jsx(sp, { className: a(np.tab, np.tab__teamsStatistics) }),
            e.jsx(Vr, { className: a(np.tab, np.tab__financialReport) }),
            e.jsx(Hr, { className: a(np.tab, np.tab__progression) }),
        ],
    });
}
const op = r(function () {
    const s = v.resolve('strings'),
        n = x(),
        { battleInfoRef: r, navigationRef: i, completedSteps: l, step: o } = fa(),
        [c] = p(() => ({ from: { opacity: 0, y: '-10rem' }, ref: i })),
        [d] = p(() => ({ from: { opacity: 0 }, ref: r })),
        { model: m, controls: _ } = Zi(),
        f = m.computes.personalInfo(),
        b = m.battleInfo.get(),
        { active: h } = ce();
    return (
        ye(_e.ESCAPE, _.close),
        Z(() => {
            function e(e) {
                e.altKey || e.shiftKey || e.ctrlKey || He.tooltip.hideAll();
            }
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }),
        t.useEffect(() => {
            o === ma.fourth && n.play('exitResult', { target: 'post-battle' });
        }, [o, n]),
        e.jsxs(rp, {
            className: a(np.base, np[`base__${h}`]),
            children: [
                h !== Ye.personal && e.jsx('div', { className: np.vignette }),
                e.jsx(lp, {}),
                e.jsx(u.div, {
                    style: c,
                    children: e.jsx(ip, {
                        className: !1 === l.has(ma.second) && np.navigation__disabled,
                        children: e.jsxs(Oe.Switcher, {
                            className: np.switcher,
                            children: [
                                e.jsx(Oe.Tab, {
                                    tabId: Ye.personal,
                                    children: g.toUpperCase(
                                        s.readOrEmpty('battle_results.battleResult.navigation.battleResults'),
                                    ),
                                }),
                                e.jsx(Oe.Tab, {
                                    tabId: Ye.teamsStatistics,
                                    children: g.toUpperCase(
                                        s.readOrEmpty('battle_results.battleResult.navigation.teamEfficiency'),
                                    ),
                                }),
                                e.jsx(Oe.Tab, {
                                    tabId: Ye.financialReport,
                                    children: g.toUpperCase(
                                        s.readOrEmpty('battle_results.battleResult.navigation.financialReport'),
                                    ),
                                }),
                            ],
                        }),
                    }),
                }),
                b &&
                    e.jsx(u.div, {
                        className: np.info,
                        style: d,
                        children: e.jsxs(da, {
                            children: [
                                e.jsx(da.Arena, {
                                    arenaName: b.arenaName,
                                    arenaType: b.arenaType,
                                    finishReasonKey: b.finishReasonKey,
                                    status: b.status,
                                    modeName: b.modeName,
                                }),
                                e.jsx(da.StartTime, { startTime: b.startTime }),
                                e.jsx(da.Player, {
                                    vehicleName: f.vehicle.name,
                                    userName: f.account.username,
                                    clan: f.account.clanAbbreviation,
                                }),
                                e.jsx(da.PlayerStatus, {
                                    className: np.group,
                                    killer: f.killer,
                                    deathReasonKey: f.userStatus.deathReason,
                                    abandonBattle: f.userStatus.abandonBattle,
                                }),
                                e.jsx(da.CommendationScore, { commendationsReceived: b.commendationsReceived }),
                            ],
                        }),
                    }),
            ],
        })
    );
});
function cp() {
    const a = We(),
        { size: t } = W({ size: Ge.small }, { large: { size: Ge.medium }, extraLarge: { size: Ge.large } });
    return e.jsx(Oe, {
        theme: 'primary',
        size: t,
        active: Je(a.location),
        onActiveChange: (e) => {
            e in Ye ? a.push(Qe[e]) : console.error(`Invalid tab ID: ${e}`);
        },
        children: e.jsx(ba, { children: e.jsx(op, {}) }),
    });
}
const dp = Me({
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
Le(
    new Xe()
        .add(Yi)
        .addWithProps($e, { soundsOverrides: dp })
        .addWithProps(Fe, { context: 'model.router' })
        .render(e.jsx(cp, {})),
)
    .then(() => Ke(document.getElementById('root')))
    .then(() => qe());
