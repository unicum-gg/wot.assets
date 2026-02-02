import {
    a1 as e,
    a2 as a,
    a3 as t,
    a4 as s,
    r,
    a5 as l,
    j as n,
    f as i,
    Q as o,
    a6 as c,
    a7 as d,
    X as m,
    W as u,
    a8 as f,
    a9 as _,
    aa as p,
    ab as h,
} from '../../../chunks/vendor.js';
import {
    s as b,
    Q as v,
    b3 as g,
    a6 as x,
    A as y,
    cy as N,
    j,
    cz as w,
    o as I,
    x as S,
    i as P,
    f as C,
    ax as D,
    H as A,
    cA as T,
    cB as V,
    R as B,
    cC as k,
    cD as E,
    a9 as z,
    cE as H,
    S as O,
    U as F,
    bm as G,
    a2 as X,
    a0 as W,
    P as $,
    O as L,
    G as M,
    M as K,
    aE as q,
    aF as U,
    K as Z,
    az as Q,
    aD as Y,
    aA as J,
    aN as ee,
    aL as ae,
    aR as te,
    cF as se,
    B as re,
    cG as le,
    _ as ne,
    cH as ie,
    cI as oe,
    m as ce,
    b$ as de,
    F as me,
    bQ as ue,
    cJ as fe,
    b5 as _e,
    T as pe,
    ag as he,
    cK as be,
    cL as ve,
    cM as ge,
    bh as xe,
    cN as ye,
    a4 as Ne,
    a7 as je,
    cO as we,
    ap as Ie,
    bF as Se,
    cP as Re,
    ba as Pe,
    bD as Ce,
    b1 as De,
    cQ as Ae,
    aW as Te,
    cR as Ve,
    cS as Be,
    af as ke,
    ae as Ee,
    bx as ze,
    aZ as He,
    cc as Oe,
    X as Fe,
    ce as Ge,
    cT as Xe,
    bj as We,
    bV as $e,
    cl as Le,
    cm as Me,
    cU as Ke,
    cV as qe,
} from '../../../chunks/lib.js';
var Ue = ((e) => (
        (e.Squad = 'squad'),
        (e.Player = 'player'),
        (e.Rank = 'rank'),
        (e.Damage = 'damage'),
        (e.Frag = 'frag'),
        (e.Xp = 'xp'),
        (e.Respawns = 'respawns'),
        (e.Medal = 'medal'),
        e
    ))(Ue || {}),
    Ze = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(Ze || {});
function Qe(t) {
    return function (s) {
        return t(e(() => a(s)));
    };
}
const Ye = { overview: 'overview', teamScore: 'teamScore', financialReport: 'financialReport' },
    Je = Object.values(Ye),
    ea = {
        [Ye.overview]: '/fl_battleResults/overview',
        [Ye.teamScore]: '/fl_battleResults/teamScore',
        [Ye.financialReport]: '/fl_battleResults/financialReport',
    };
function aa(e) {
    const a = Je.find((a) => ea[a] === e);
    return (b(void 0 !== a, `The post battle screen is not found by path ${e}`), a);
}
const ta = 'xp',
    sa = 'freeXP',
    ra = 'credits',
    la = 'gold',
    na = 'originalCrystals',
    ia = 'eventCrystals',
    oa = 'autoEquipCrystals',
    ca = 'totalCrystals',
    da = 'originalXP',
    ma = 'achievementXP',
    ua = 'originalXPPenalty',
    fa = 'igrBonusXP',
    _a = 'firstWinXP',
    pa = 'additionalBonusXP',
    ha = 'boostersXP',
    ba = 'tacticalTrainingXP',
    va = 'eventXP',
    ga = 'referralBonusXP',
    xa = 'premiumVehicleXP',
    ya = 'squadBonusXP',
    Na = 'squadPenaltyXP',
    ja = 'wotPlusBonusXP',
    wa = 'totalXP',
    Ia = 'originalFreeXP',
    Sa = 'achievementFreeXP',
    Ra = 'igrBonusFreeXP',
    Pa = 'firstWinFreeXP',
    Ca = 'additionalBonusFreeXP',
    Da = 'boostersFreeXP',
    Aa = 'militaryManeuversFreeXP',
    Ta = 'eventFreeXP',
    Va = 'premiumVehicleFreeXP',
    Ba = 'wotPlusBonusFreeXP',
    ka = 'totalFreeXP',
    Ea = 'baseEarnedCredits',
    za = 'squadBonusCredits',
    Ha = 'achievementCredits',
    Oa = 'boostersCredits',
    Fa = 'petSystemBonusCredits',
    Ga = 'battlePaymentsCredits',
    Xa = 'eventPaymentsCredits',
    Wa = 'referralBonusCredits',
    $a = 'wotPlusBonusCredits',
    La = 'friendlyFirePenaltyCredits',
    Ma = 'friendlyFireCompensationCredits',
    Ka = 'piggyBankCredits',
    qa = 'autoRepairCredits',
    Ua = 'autoLoadCredits',
    Za = 'autoEquipCredits',
    Qa = 'intermediateTotalCredits',
    Ya = 'totalCredits',
    Ja = 'goldEventPayments',
    et = 'goldPiggyBank',
    at = 'intermediateTotalGold',
    tt = 'totalGold',
    st = 'aogasFactor',
    rt = 'deserterViolation',
    lt = 'afkViolation',
    nt = 'suicideViolation',
    it = new Set([ua, ga, ya, Na, ba]),
    ot = new Set([Aa]),
    ct = new Set([Ea, za, Ha, Oa, Ga, Wa, Fa, $a, rt, nt, lt, La, Ma, st, qa, Ua, Za]),
    dt = {
        [ma]: Sa,
        [pa]: Ca,
        [lt]: lt,
        [st]: st,
        [ha]: Da,
        [rt]: rt,
        [va]: Ta,
        [_a]: Pa,
        [fa]: Ra,
        [da]: Ia,
        [xa]: Va,
        [nt]: nt,
        [wa]: ka,
        [ja]: Ba,
    },
    mt = { [Xa]: Ja, [Qa]: at, [Ka]: et, [Ya]: tt },
    ut = [na, ia, oa, ca],
    ft = [Ea, za, Ha, Oa, Fa, Ga, Xa, Ja, Wa, $a, rt, nt, lt, La, Ma, st, Qa, at, qa, Ua, Za, Ya, tt, Ka, et],
    _t = new Set([ca, da, Ia, wa, ka, Ea, Ma, Qa, at, qa, Ua, Za, Ya, tt, Ka, et]),
    pt = new Set([Ya, tt, at, Qa]),
    ht = 'multiplier',
    bt = 'firstWinMultiplier',
    vt = 'fractionalMultiplier',
    gt = 'percent',
    xt = 'plus',
    yt = {
        [fa]: ht,
        [Ra]: ht,
        [_a]: bt,
        [Pa]: bt,
        [pa]: ht,
        [Ca]: ht,
        [st]: vt,
        [rt]: gt,
        [nt]: gt,
        [lt]: gt,
        [Ka]: xt,
        [et]: xt,
    };
function Nt(e) {
    const a = Number(e.trim());
    return Number.isNaN(a)
        ? (console.error(`Invalid referral factor: "${e}" is not a number.`), 0)
        : Math.round(100 * a);
}
function jt(e) {
    const a = Number(e.trim());
    return Number.isNaN(a) ? (console.error(`Invalid percent bonus: "${a}" is not a number.`), 0) : a;
}
function wt(e) {
    return _t.has(e.paramName);
}
function It(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.hasAogasFine);
}
function St(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.isEnabled);
}
const Rt = { [da]: wt, [Ia]: wt, [wa]: wt, [ka]: wt, [st]: It, [ja]: St, [Ba]: St },
    Pt = {
        [Ea]: wt,
        [Ma]: wt,
        [Qa]: wt,
        [at]: wt,
        [qa]: wt,
        [Ua]: wt,
        [Za]: wt,
        [Ya]: wt,
        [tt]: wt,
        [st]: It,
        [$a]: St,
        [Ka]: wt,
    };
function Ct(e) {
    return !1 !== pt.has(e.paramName) && 0 === e.standard.gold && 0 === e.premium.gold;
}
const Dt = { [Qa]: (e) => !1 === Ct(e), [Ya]: (e) => !1 === Ct(e), [Ka]: (e, a) => a },
    At = { [ta]: 'library.xp', [sa]: 'library.freeXp', [ra]: 'library.credits', [la]: 'library.gold' },
    Tt = [st, rt, lt, nt];
function Vt(e) {
    return e === ta ? 'library.x2_combatExp' : 'library.x2_combatFreeExp';
}
const Bt = {
    [fa]: (e) => 'library.x2_combatExp',
    [Ra]: (e) => 'library.x2_combatExp',
    [_a]: Vt,
    [Pa]: Vt,
    [pa]: Vt,
    [Ca]: Vt,
};
function kt(e, a) {
    if (void 0 === a || Tt.includes(a)) return;
    const t = Bt[a];
    return t ? t(e) : At[e];
}
var Et = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
        Et || {},
    ),
    zt = ((e) => (
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
    ))(zt || {});
function Ht(e) {
    return {
        winStatus: e.winStatus,
        arenaName: e.arenaName,
        scenario: e.scenario,
        battleStartTime: e.battleStartTime,
        battleDuration: e.battleDuration,
        finishReason: e.finishReason,
        finishReasonClarification: e.finishReasonClarification,
    };
}
const Ot = [wa, Qa];
function Ft(e, a) {
    const {
        recordsItemsDetails: t,
        baseValue: s,
        premiumValue: r,
        currencyType: l,
        paramName: n,
    } = {
        paramName: (i = e).paramName,
        currencyType: i.currencyType,
        baseValue: i.baseValue,
        premiumValue: i.premiumValue,
        recordsItemsDetails: v(i.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
    var i;
    const o = a ? r : s,
        c = o >= 0 ? o : 0;
    return { paramName: n, type: l, visibleIfZero: Ot.includes(n) || 'True' === t.isAvailable, value: c };
}
function Gt(e) {
    return {
        name: e.name,
        groupID: e.groupID,
        iconName: e.iconName,
        tooltipArgs: e.tooltipArgs,
        tooltipId: e.tooltipId,
    };
}
function Xt(e) {
    return {
        labelKey: e.labelKey,
        paramValueType: e.paramValueType,
        value: y((null == e ? void 0 : e.value) ?? [], (e) => e),
    };
}
function Wt(e) {
    return {
        ...Xt({ label: e.label, labelKey: e.labelKey, paramValueType: e.paramValueType, value: y(e.value, (e) => e) }),
        details: y(e.details, (e) => Xt(e)),
    };
}
function $t(e) {
    return {
        isGeneralInfo: e.isGeneralInfo,
        objectivesReached: e.objectivesReached,
        objectivesDestroyed: e.objectivesDestroyed,
        zoneCaptured: e.zoneCaptured,
        detailedStatistics: y(e.detailedStatistics, Wt),
        vehicle: e.vehicle.longName ? { ...w(e.vehicle), longName: e.vehicle.longName } : null,
    };
}
function Lt(e) {
    var a, t;
    const s = (null == (a = g(e.vehiclesStats, (e) => e.isGeneralInfo)) ? void 0 : a.detailedStatistics) ?? [],
        r = null == (t = g(s, (e) => e.labelKey === zt.TeamHitsDamage)) ? void 0 : t.value,
        l = void 0 !== r ? x(r, 0) : 0,
        n = e.efficiencyValues.kills - l;
    return {
        personal: e.isPersonal,
        squadIndex: e.squadIndex,
        rank: e.rank,
        respawns: e.respawns,
        achievements: y(e.achievements, Gt),
        account: N(e.userNames),
        vehicles: y(e.vehiclesStats, $t),
        efficiencyValues: {
            ...((i = null == e ? void 0 : e.efficiencyValues),
            {
                damageDealt: null == i ? void 0 : i.damageDealt,
                kills: null == i ? void 0 : i.kills,
                earnedXp: null == i ? void 0 : i.earnedXp,
            }),
            subtractedAlliesKills: n,
        },
        databaseId: e.databaseID,
    };
    var i;
}
const Mt = {
    killed: 0,
    spotted: 0,
    criticalDamage: 0,
    damageDealt: { value: 0, count: 0 },
    damageAssisted: 0,
    damageAssistedStun: { value: 0, count: 0 },
    damageBlockedByArmor: { value: 0, count: 0 },
};
const Kt = I.resolve('strings'),
    qt = { rank: 'rank', right: 'right', left: 'left', other: 'other' },
    Ut = [qt.rank, qt.right, qt.left, qt.other];
function Zt(e) {
    return e.groupID === qt.rank
        ? qt.rank
        : e.groupID === qt.right
          ? qt.right
          : e.groupID === qt.left
            ? qt.left
            : (console.error(`Achievement ${e.name} with a group ${e.groupID} is not detected`), qt.other);
}
function Qt(e) {
    return S(e, (e, a) => {
        const t = Zt(e),
            s = Zt(a),
            r = Ut.indexOf(t),
            l = Ut.indexOf(s);
        return t !== s
            ? r - l
            : (function (e, a) {
                  const t = Kt.readOrEmpty(`achievements.${e.name}`),
                      s = Kt.readOrEmpty(`achievements.${a.name}`);
                  return t.localeCompare(s);
              })(e, a);
    });
}
const Yt = 'default',
    Jt = 'hover',
    es = 'extinct';
function as(e, a) {
    return void 0 === a ? Yt : a === e ? Jt : es;
}
const ts = 'rank',
    ss = 'others';
const rs = 'allies',
    ls = 'enemies',
    ns = 'personal',
    is = 'alien';
function os(e, a, t) {
    return 0 === t ? null : a === t && e === rs ? ns : is;
}
function cs({ anonymizer: e, personal: a, platoonType: t }) {
    return !(a || !e) && (t === is || null === t);
}
const [ds, ms] = P()(
        (e) => {
            const { observableModel: a, cleanup: s } = e,
                r = {
                    ...a.primitives(['hasAnyPremium', 'hasWotPlus'], 'financialReport'),
                    teamsStatistic: {
                        ...a.primitives(['sortingColumn', 'sortingOrder'], 'teamStats'),
                        allies: a.arrayClone('teamStats.allies'),
                        enemies: a.arrayClone('teamStats.enemies'),
                    },
                    personalEfficiency: { details: a.arrayClone('detailedPersonalEfficiency') },
                    vehiclesFinancialStats: a.arrayClone('financialReport.vehiclesFinancialStats'),
                },
                l = {
                    battleInfo: a.transform(Ht, 'battleInfo'),
                    allPlayersDictionary: t.box({}),
                    personalEfficiency: {
                        opened: t.box(!1),
                        achievements: a.transform((e) => Qt(y(e, Gt)), 'achievements'),
                        statistics: { details: t.box([]) },
                    },
                    teamsStatistic: {
                        allies: t.box([]),
                        enemies: t.box([]),
                        sorting: t.box({ column: Ue.Player, sortDirection: Ze.Desc }),
                        selectedRow: t.box(),
                        selectedVehicle: t.box(null),
                    },
                    user: { names: t.box() },
                };
            (Qe(s)(() => {
                const e = {};
                (l.teamsStatistic.allies.set(
                    y(r.teamsStatistic.allies.get(), (a) => {
                        const t = Lt(a);
                        return ((e[t.account.username] = t), t);
                    }),
                ),
                    l.teamsStatistic.enemies.set(
                        y(r.teamsStatistic.enemies.get(), (a) => {
                            const t = Lt(a);
                            return ((e[t.account.username] = t), t);
                        }),
                    ));
                const a = l.allPlayersDictionary.get();
                l.allPlayersDictionary.set({ ...a, ...e });
            }),
                Qe(s)(() => {
                    return l.teamsStatistic.sorting.set(
                        ((e = r.teamsStatistic.sortingColumn.get()),
                        (a = r.teamsStatistic.sortingOrder.get()),
                        { column: e, sortDirection: a }),
                    );
                    var e, a;
                }));
            const n = C.structural(() => {
                    const e = r.vehiclesFinancialStats.get().find(({ isGeneralInfo: e }) => e);
                    return (
                        e &&
                        (function ({ anyPremium: e, credits: a, xp: t }) {
                            const s = g(a, (e) => e.paramName === Qa),
                                r = g(t, (e) => e.paramName === wa),
                                l = [];
                            return (s && l.push(Ft(s, e)), r && l.push(Ft(r, e)), l);
                        })({ anyPremium: r.hasAnyPremium.get(), credits: e.credits.total, xp: e.xp.total })
                    );
                }),
                i = C.shallow(() => {
                    const e = g(l.teamsStatistic.allies.get(), (e) => e.personal);
                    return (b(void 0 !== e, 'Personal info is not found'), e);
                }),
                o = C.shallow(() => {
                    const e = l.teamsStatistic.selectedRow.get();
                    if (void 0 === e) return;
                    const a = (e.team === rs ? l.teamsStatistic.allies : l.teamsStatistic.enemies).get();
                    return g(a, (a) => a.account.username === e.username);
                }),
                c = C.shallow(() => {
                    const e = l.allPlayersDictionary.get();
                    return v(
                        r.personalEfficiency.details.get(),
                        (a, t) => {
                            const s = (function (e) {
                                return v(
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
                            if (((r = s), j.structural(r, Mt))) return a;
                            var r;
                            const l = e[t.userName];
                            return (
                                b(void 0 !== l, `Such enemy ${t.userName} is not found`),
                                a.push({ ...s, account: l.account, databaseId: l.databaseId }),
                                a
                            );
                        },
                        [],
                    );
                });
            return {
                ...l,
                computes: { earnedCurrencies: n, personalInfo: i, efficiencyDetails: o, personalEfficiency: c },
            };
        },
        ({ externalModel: e, model: a }) => {
            const t = e.createCallback((e) => e, 'teamStats.onStatsSorted');
            return {
                close: e.createCallbackNoArgs('onClose'),
                teamEfficiency: {
                    sort: s((e) => {
                        (a.teamsStatistic.sorting.set(e), t(e));
                    }),
                    selectRow: s((e) => {
                        const t = a.teamsStatistic.selectedRow.get();
                        (null == t ? void 0 : t.team) !== (null == e ? void 0 : e.team) ||
                        (null == t ? void 0 : t.username) !== (null == e ? void 0 : e.username)
                            ? (a.teamsStatistic.selectedRow.set(e), a.teamsStatistic.selectedVehicle.set(null))
                            : a.teamsStatistic.selectedRow.set(void 0);
                    }),
                    selectVehicle: s((e) => {
                        a.teamsStatistic.selectedVehicle.set(e);
                    }),
                },
            };
        },
    ),
    us = { initial: 'initial', first: 'first', second: 'second', third: 'third' },
    fs = T.cubicBezier(0.33, 0, 0.25, 1),
    _s = 400,
    ps = r.createContext(null);
function hs() {
    const e = r.useContext(ps);
    if (null === e)
        throw new Error('You can use the animation context hooks only with the AnimationProvider component');
    return e;
}
function bs({ children: e }) {
    const [a, t] = r.useState(us.initial),
        [s, i] = r.useState(new Set()),
        o = D(),
        c = A(),
        d = l(),
        m = l(),
        u = l(),
        f = l(),
        _ = l(),
        p = r.useCallback(
            function (e) {
                t(e);
            },
            [t],
        );
    r.useEffect(() => {
        switch (a) {
            case us.initial:
                return void t(us.first);
            case us.first:
                return (
                    c.play('showBattleResult', { target: 'animation-context' }),
                    d.start({ y: '0', opacity: 1, config: { duration: _s, easing: fs } }),
                    void m.start({
                        opacity: 1,
                        y: '0',
                        config: { duration: _s, easing: fs },
                        onRest: () => {
                            (t(us.second), i((e) => V(e, us.first)));
                        },
                    })
                );
            case us.second:
                return (
                    u.start({
                        opacity: 1,
                        y: '0',
                        config: { duration: _s, easing: fs },
                        onRest: () => {
                            i((e) => V(e, us.second));
                        },
                    }),
                    void o.run(() => {
                        (t(us.third), o.clear());
                    }, 280)
                );
            case us.third:
                (c.play('exitResult', { target: 'post-battle' }),
                    _.start({ opacity: 1, config: { duration: _s, easing: fs } }),
                    f.start({
                        opacity: 1,
                        config: { duration: _s, easing: fs },
                        onRest: () => {
                            i((e) => V(e, us.third));
                        },
                    }));
                break;
            default:
                return;
        }
    }, [a, c, o, f, p, s, d, m, u, _]);
    const h = r.useMemo(
        () => ({
            step: a,
            handleStep: p,
            battleInfoRef: f,
            navigationRef: d,
            battleStatusRef: m,
            earnedCurrenciesRef: u,
            personalEfficiencyRef: _,
            completedSteps: s,
        }),
        [a, p, s],
    );
    return n.jsx(ps.Provider, { value: h, children: e });
}
const vs = 'BattleInfo_d5226211',
    gs = 'BattleInfo_group_962f81f6';
const xs = (e, a) => (e > 0 ? (a > 0 ? 'minutesAndSeconds' : 'minutesOnly') : 'secondsOnly'),
    ys = r.forwardRef(function (e, a) {
        return n.jsx('div', { ...e, 'data-name': 'BattleInfo', ref: a, className: i(vs, e.className) });
    });
((ys.Arena = function ({ arenaName: e, scenario: a, finishReason: t, className: s }) {
    return n.jsx(B, {
        path: 'fl_post_battle_results.battleInfo.arena',
        params: { arenaName: e, scenario: a, finishReason: t },
        className: i(gs, s),
    });
}),
    (ys.StartTime = ({ battleStartTime: e, battleDuration: a, className: t }) => {
        const [s, r] = k(E(a), ['m', 's']);
        return n.jsx(B, {
            path: 'fl_post_battle_results.battleInfo.time',
            params: {
                date: z.formatDateTime(H.ShortDate, e),
                time: z.formatDateTime(H.ShortTime, e),
                duration: n.jsx(B, {
                    path: `fl_post_battle_results.battleInfo.timeLeft.${xs(Number(s), Number(r))}`,
                    params: { minutes: s, seconds: r },
                }),
            },
            className: i(gs, t),
        });
    }));
const Ns = 'Divider_80a19f4b';
function js({ classNames: e }) {
    return n.jsx('div', {
        className: i(Ns, null == e ? void 0 : e.base),
        children: n.jsx(O, {
            className: null == e ? void 0 : e.image,
            width: '100%',
            height: '100%',
            path: 'post_battle.row_divider',
            fit: 'cover',
        }),
    });
}
const ws = 'Header_content_b9e0be90',
    Is = 'Header_title_91e5448a',
    Ss = 'Header_divider_eb019c6',
    Rs = 'Header_dividerImage_19f6e11',
    Ps = F('Header', 'Header_70aa1da5'),
    Cs = r.forwardRef(({ title: e, children: a, classNames: t, ...s }, r) => {
        const l = I.resolve('strings');
        return n.jsxs(Ps, {
            ...s,
            ref: r,
            children: [
                n.jsxs('div', {
                    className: i(ws, null == t ? void 0 : t.content),
                    children: [
                        n.jsx('div', {
                            className: i(Is, null == t ? void 0 : t.title),
                            children: z.toUpperCase(l.readOrEmpty(e)),
                        }),
                        a,
                    ],
                }),
                n.jsx(js, { classNames: { base: i(Ss, null == t ? void 0 : t.divider), image: Rs } }),
            ],
        });
    }),
    Ds = 'playerRankXP',
    As = { ...dt, [Ds]: Ds },
    Ts = [da, Ia, Ds, ga, xa, Va, ya, Na, st, ja, Ba, rt, nt, lt, wa, ka];
function Vs(e, a) {
    return Ts.indexOf(e.paramName) - Ts.indexOf(a.paramName);
}
function Bs(e, a) {
    return ft.indexOf(e.paramName) - ft.indexOf(a.paramName);
}
function ks(e, a) {
    return ut.indexOf(e.paramName) - ut.indexOf(a.paramName);
}
function Es(e) {
    return {
        paramName: e.paramName,
        currencyType: e.currencyType,
        baseValue: e.baseValue,
        premiumValue: e.premiumValue,
        recordsItemsDetails: v(e.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
}
function zs(e, a) {
    const t = [],
        s = [];
    for (const r of e) a(r) ? t.push(r) : s.push(r);
    return [t, s];
}
function Hs(e, a) {
    const t = y(e.earned, Es),
        s = y(e.expenses, Es),
        r = y(e.total, Es),
        l = [Qa, at],
        n = [Ka, et],
        [i, o] = zs(r, (e) => l.includes(e.paramName)),
        [c, d] = zs([...t, ...i], (e) => n.includes(e.paramName));
    return {
        records: [...d, ...s].sort(a),
        total: ((m = [...o, ...c]),
        m.filter((e) => {
            const a = Boolean(e.premiumValue || e.baseValue),
                t = _t.has(e.paramName);
            return a || t;
        })).sort(a),
    };
    var m;
}
const Os = (e) => e in yt;
function Fs({ xp: e, freeXp: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    b('string' == typeof t, 'xp or freeXp paramName is not provided');
    const s = Os(t) ? yt[t] : void 0,
        r =
            void 0 !== (null == e ? void 0 : e.recordsItemsDetails) && Object.keys(e.recordsItemsDetails).length > 0
                ? e.recordsItemsDetails
                : null == a
                  ? void 0
                  : a.recordsItemsDetails;
    return {
        paramName: t,
        premium: { xp: null == e ? void 0 : e.premiumValue, freeXp: null == a ? void 0 : a.premiumValue },
        standard: { xp: null == e ? void 0 : e.baseValue, freeXp: null == a ? void 0 : a.baseValue },
        recordsItemsDetails: r,
        modifier: s,
    };
}
function Gs({ credits: e, gold: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    b('string' == typeof t, 'credits or gold paramName is not provided');
    const s = Os(t) ? yt[t] : void 0,
        r =
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
        recordsItemsDetails: r,
        modifier: s,
    };
}
const Xs = (e) => e in As;
function Ws(e, a) {
    const t = e.paramName;
    return (b(Xs(t), `No analogue for ${t} in free xp parameter names`), a.find((e) => As[t] === e.paramName));
}
const $s = (e) => e in mt;
function Ls(e, a) {
    const t = e.paramName;
    return (b($s(t), `No analogue for ${t} in gold parameter names`), a.find((e) => mt[t] === e.paramName));
}
function Ms(e, a) {
    const t = (function (e, a) {
        return [
            ...G(
                a,
                (e) => ot.has(e.paramName),
                (e) => Fs({ freeXp: e }),
            ),
            ...y(e, (e) => (it.has(e.paramName) ? Fs({ xp: e }) : Fs({ xp: e, freeXp: Ws(e, a) }))),
        ];
    })(e, a);
    return t
        .filter((e) => {
            const a = Rt[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.freeXp || e.premium.xp || e.standard.freeXp || e.standard.xp);
        })
        .sort(Vs);
}
function Ks(e, a) {
    const t = (function (e, a) {
        return y(e, (e) => (ct.has(e.paramName) ? Gs({ credits: e }) : Gs({ credits: e, gold: Ls(e, a) })));
    })(e, a);
    return t
        .filter((e) => {
            const a = Pt[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.credits || e.premium.gold || e.standard.credits || e.standard.gold);
        })
        .sort(Bs);
}
function qs(e) {
    return ((a = e),
    a.filter((e) => {
        const a = Boolean(e.baseValue || e.premiumValue),
            t = _t.has(e.paramName);
        return a || t;
    })).sort(ks);
    var a;
}
function Us({ xp: e, freeXp: a }) {
    return (function (e, a) {
        return { records: Ms(e.records, a.records), total: Ms(e.total, a.total) };
    })(
        Hs({ earned: e.earned, expenses: e.expenses, total: e.total }),
        Hs({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
function Zs({ credits: e, gold: a }) {
    return (function (e, a) {
        return { records: Ks(e.records, a.records), total: Ks(e.total, a.total) };
    })(
        Hs({ earned: e.earned, expenses: e.expenses, total: e.total }),
        Hs({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
const [Qs, Ys] = P()(
        ({ observableModel: e }) => {
            const a = {
                    ...e.primitives(['hasAnyPremium', 'hasWotPlus'], 'financialReport'),
                    vehiclesFinancialStats: e.arrayClone('financialReport.vehiclesFinancialStats'),
                    selectedVehicle: t.box(null),
                },
                s = C.primitive(() => {
                    const e = a.selectedVehicle.get();
                    return a.vehiclesFinancialStats
                        .get()
                        .find(({ vehicle: a, isGeneralInfo: t }) => (e ? a.techName === e : t));
                }),
                r = C.shallow(() => {
                    const e = s();
                    return (
                        e &&
                        Us({
                            xp: { earned: e.xp.earned, expenses: e.xp.expenses, total: e.xp.total },
                            freeXp: { earned: e.freeXp.earned, expenses: e.freeXp.expenses, total: e.freeXp.total },
                        })
                    );
                }),
                l = C.shallow(() => {
                    const e = s();
                    return (
                        e &&
                        Zs({
                            credits: { earned: e.credits.earned, expenses: e.credits.expenses, total: e.credits.total },
                            gold: { earned: e.gold.earned, expenses: e.gold.expenses, total: e.gold.total },
                        })
                    );
                }),
                n = C.shallow(() => {
                    const e = s();
                    return (
                        e &&
                        (function ({ earned: e, expenses: a, total: t }) {
                            const s = Hs({ earned: e, expenses: a, total: t });
                            return { records: qs(s.records), total: qs(s.total) };
                        })({ earned: e.crystals.earned, expenses: e.crystals.expenses, total: e.crystals.total })
                    );
                });
            return { ...a, computes: { experience: r, credits: l, crystals: n } };
        },
        ({ model: e }) => ({
            selectVehicle: s((a) => {
                e.selectedVehicle.set(a);
            }),
        }),
    ),
    Js = 'ListItem_received_ffdc3010',
    er = 'ListItem_separator_71797768',
    ar = 'ListItem_label_4ab3c391',
    tr = 'ListItem_label__withIcon_c2381aa',
    sr = 'ListItem_labelIcon_acb0da4',
    rr = F('ListItem', 'ListItem_bcdaabbd'),
    lr = r.forwardRef(({ labelKey: e, children: a, classNames: t, params: s, labelIconPath: r, ...l }, o) => {
        const c = I.resolve('images');
        return n.jsxs(rr, {
            ...l,
            ref: o,
            'data-test-id': `${e}`,
            children: [
                n.jsxs('div', {
                    className: i(ar, void 0 !== r && tr, null == t ? void 0 : t.label),
                    children: [
                        void 0 !== r &&
                            n.jsx('div', {
                                style: { backgroundImage: `url(${c.readOrEmpty(r)})` },
                                className: i(sr, null == t ? void 0 : t.icon),
                            }),
                        n.jsx(B, { upgradeLegacy: !0, path: e, params: s }),
                    ],
                }),
                n.jsxs('div', { className: Js, children: [n.jsx('div', { className: er }), a] }),
            ],
        });
    }),
    nr = 'Item_currencyValue_81f5b9fb',
    ir = 'Item_currencyValue__total_a7596c8e',
    or = 'Item_currencyValue__negative_5e98369f',
    cr = 'Item_label_5d6964d6',
    dr = {
        [na]: 'battle_results.details.calculations.crystal.total',
        [ia]: 'battle_results.details.calculations.crystal.events',
        [oa]: 'battle_results.details.calculations.autoBoosters',
        [ca]: 'battle_results.details.calculations.total',
    },
    mr = ({ record: e, total: a, ...t }) => {
        const { paramName: s, baseValue: r } = e;
        return s in dr
            ? n.jsx(lr, {
                  ...t,
                  labelKey: dr[s],
                  classNames: { label: cr, ...t.classNames },
                  children: n.jsx(X, {
                      reverse: !0,
                      type: 'crystal',
                      size: W.small,
                      children: n.jsx('div', {
                          className: i(nr, r < 0 && or, a && ir),
                          children: z.formatNumber('integral', r),
                      }),
                  }),
              })
            : (console.error(`Parameter name "${s}" is not valid for bonds`), null);
    },
    ur = 'IncomeStatement_item_48b34a63',
    fr = F('BondsIncomeStatement'),
    _r = o(
        r.forwardRef((e, a) => {
            const { model: t } = Ys(),
                s = t.computes.crystals();
            return n.jsx(fr, {
                ...e,
                ref: a,
                children: s.records.map((e) => n.jsx(mr, { record: e, className: ur }, e.paramName)),
            });
        }),
    ),
    pr = 'Total_item_a8580361',
    hr = 'Total_divider_1de1ca28',
    br = 'Total_dividerImage_ab06168d',
    vr = F('BondsTotal', 'Total_120fb0c4'),
    gr = o(
        r.forwardRef((e, a) => {
            const { model: t } = Ys(),
                s = t.computes.crystals();
            return n.jsxs(vr, {
                ...e,
                ref: a,
                children: [
                    n.jsx(js, { classNames: { base: hr, image: br } }),
                    s.total.map((e) => n.jsx(mr, { total: !0, record: e, className: pr }, e.paramName)),
                ],
            });
        }),
    ),
    xr = r.forwardRef((e, a) => n.jsx(Cs, { ...e, title: 'battle_results.details.crystal', ref: a })),
    yr = F('Bonds');
((yr.Header = xr), (yr.Item = mr), (yr.Total = gr), (yr.IncomeStatement = _r));
const Nr = 'Header_cbd845ec',
    jr = 'Header_content_a63fb46c',
    wr = 'Header_title_7b852a7',
    Ir = 'Header_title__active_e5dd0f77',
    Sr = 'Header_title__premium_2c23921f',
    Rr = 'Header_icon_3b4dc587',
    Pr = o(
        r.forwardRef(({ className: e, ...a }, t) => {
            const { model: s } = Ys(),
                r = s.hasAnyPremium.get();
            return n.jsx(Cs, {
                ...a,
                ref: t,
                className: i(Nr, e),
                title: 'battle_results.details.credits',
                children: n.jsxs('div', {
                    className: jr,
                    children: [
                        n.jsx('div', {
                            className: i(wr, !r && Ir),
                            children: n.jsx(B, { path: 'battle_results.common.details.noPremTitle' }),
                        }),
                        n.jsxs('div', {
                            className: i(wr, r && Ir, Sr),
                            children: [
                                n.jsx('div', {
                                    className: Rr,
                                    children: n.jsx(O, {
                                        width: 32,
                                        height: 32,
                                        path: 'post_battle.wot_premium_32x32',
                                    }),
                                }),
                                n.jsx(B, { path: 'battle_results.getPremiumPopover.prem' }),
                            ],
                        }),
                    ],
                }),
            });
        }),
    ),
    Cr = (e) => {
        const [a, t] = r.useState(!1);
        return (
            r.useEffect(() => {
                const a = () => {
                        const [a, s] = e.getBounds(),
                            r = e.animationScroll.scrollPosition.get(),
                            l = e.contentRef.current;
                        if (l) {
                            if (0 === s) return ((l.style.mask = 'none'), void t(!0));
                            const e = (r / s) * 10;
                            ((l.style.mask = `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) ${e}%, rgba(0, 0, 0, 1) ${90 + e}%, transparent 100%)`),
                                t(!0));
                        }
                    },
                    s = e.events.on('change', a),
                    r = e.events.on('resizeHandled', a),
                    l = e.events.on('recalculateContent', a);
                return (
                    a(),
                    () => {
                        (s(), r(), l());
                    }
                );
            }, [e]),
            a
        );
    },
    Dr = 'IncomeStatement_c4136bc5',
    Ar = 'IncomeStatement_verticalBar_5fb90511',
    Tr = 'IncomeStatement_scrollWrapper_ce2dde41',
    Vr = 'IncomeStatement_scrollContent_72ffb2ee',
    Br = 'IncomeStatement_scrollContent__initialized_ce1144d0',
    kr = F('CreditsIncomeStatement'),
    Er = ({ children: e }) => {
        const a = M(),
            t = Cr(a.api);
        return n.jsx(K, { classNames: { wrapper: Tr, content: i(Vr, t && Br) }, children: e });
    },
    zr = r.forwardRef(({ children: e, className: a, scrollable: t, ...s }, r) =>
        n.jsx(kr, {
            className: i(Dr, a),
            ...s,
            ref: r,
            children: t
                ? n.jsxs($, { children: [n.jsx(Er, { children: e }), n.jsx(L, { classNames: { base: Ar } })] })
                : e,
        }),
    ),
    Hr = 'Record_420804f3',
    Or = 'Record_value_4d088deb',
    Fr = 'Record_value__decreasing_8cff45fa',
    Gr = ({ formatter: e, value: a, modifier: t, currency: s, classNames: r, iconPath: l }) => {
        if (void 0 === a) return null;
        const o = t === vt || a < 0;
        return n.jsxs('div', {
            className: i(Hr, null == r ? void 0 : r.base),
            children: [
                n.jsxs('div', {
                    className: i(Or, o && Fr, null == r ? void 0 : r.value),
                    'data-test-id': `${s}`,
                    children: [
                        c(t)
                            .with(bt, () => n.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(ht, () => n.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(vt, () => n.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(xt, () => n.jsx(B, { path: 'common.plus' }))
                            .otherwise(() => null),
                        e(a, s),
                        t === gt && n.jsx(B, { path: 'common.common.percent' }),
                    ],
                }),
                l && n.jsx(O, { width: 24, height: 24, path: l }),
            ],
        });
    },
    Xr = 'RecordGroup_65a30ced',
    Wr = 'RecordGroup_base__inactive_5fd9f274',
    $r = 'RecordGroup_record_5fd9f274',
    Lr = 'RecordGroup_record__extinguished_7fdfcea',
    Mr = 'RecordGroup_record__first_36c2aa71',
    Kr = 'RecordGroup_separator_9f211d97',
    qr = 'RecordGroup_separatorBackground_8a447834',
    Ur = 'RecordGroup_value_9253748c',
    Zr = 'RecordGroup_value__total_126d88a1',
    Qr = 'RecordGroup_value__gold_d7bd74ba';
function Yr({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case st:
            return !1;
        case $a:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const Jr = ({ credits: e, gold: a, modifier: t, inactive: s = !1, total: r, paramName: l, wotPlusActive: o }) => {
        function c(e, a) {
            return l === st ? z.formatReal('fractional', e) : z.formatNumber(a === la ? 'gold' : 'integral', e);
        }
        return n.jsxs('div', {
            className: i(Xr, s && Wr),
            children: [
                n.jsx('div', {
                    className: i($r, Mr, Yr({ paramName: l, wotPlusActive: o, value: e }) && Lr),
                    children: n.jsx(Gr, {
                        formatter: c,
                        value: e,
                        currency: ra,
                        modifier: t,
                        classNames: { value: i(Ur, r && Zr) },
                        iconPath: kt(ra, l),
                    }),
                }),
                void 0 !== a && n.jsx('div', { className: Kr, children: n.jsx('div', { className: qr }) }),
                n.jsx('div', {
                    className: i($r, 0 === a && Lr),
                    children: n.jsx(Gr, {
                        value: a,
                        currency: la,
                        modifier: t,
                        classNames: { value: i(Ur, Qr, r && Zr) },
                        formatter: c,
                        iconPath: kt(la, l),
                    }),
                }),
            ],
        });
    },
    el = 'Item_groups_a1f0c2a5',
    al = 'Item_label_7521a1d4',
    tl = 'Item_label__gold_49ec59ab',
    sl = {
        [Ea]: 'title.base',
        [za]: 'squadBonus',
        [Ha]: 'noPenalty',
        [Oa]: 'boosters',
        [Ga]: 'battlePayments',
        [Xa]: 'event',
        [Ja]: 'event',
        [Wa]: 'referralBonus.fullLabel',
        [$a]: 'wotPlusBonus',
        [rt]: 'fairPlayViolation.deserter',
        [nt]: 'fairPlayViolation.suicide',
        [lt]: 'fairPlayViolation.afk',
        [La]: 'friendlyFirePenalty',
        [Ma]: 'friendlyFireCompensation',
        [st]: 'aogasFactor',
        [Qa]: 'intermediateTotal',
        [at]: 'intermediateTotal',
        [qa]: 'autoRepair',
        [Ua]: 'autoLoad',
        [Za]: 'autoEquip',
        [Ya]: 'total',
        [tt]: 'total',
        [Ka]: 'piggyBankInfo',
        [et]: 'piggyBankInfo',
        [Fa]: 'petCredits.fullLabel',
    },
    rl = { [$a]: 'subscription.wot_plus_32x32' },
    ll = o(({ record: e, total: a, ...t }) => {
        const { model: s } = Ys(),
            r = s.hasAnyPremium.get(),
            l = s.hasWotPlus.get(),
            { paramName: o, premium: c, standard: d, modifier: m, recordsItemsDetails: u } = e;
        if (!(o in sl)) return null;
        const f = null == u ? void 0 : u.referralFactor,
            _ = null == u ? void 0 : u.bonusFactor,
            p = sl[o],
            h = Dt[Ya](e, l);
        return n.jsx(lr, {
            ...t,
            labelIconPath: rl[o],
            labelKey: `battle_results.details.calculations.${p}`,
            classNames: { label: i(al, o === $a && tl) },
            params: { ...(f && { bonusFactor: Nt(f) }), ...(_ && { bonusFactor: jt(_) }) },
            children: n.jsxs('div', {
                className: el,
                children: [
                    n.jsx(Jr, {
                        paramName: o,
                        credits: d.credits,
                        gold: h ? d.gold : void 0,
                        modifier: m,
                        inactive: r,
                        total: a,
                        wotPlusActive: l,
                    }),
                    n.jsx(Jr, {
                        paramName: o,
                        credits: c.credits,
                        gold: h ? c.gold : void 0,
                        modifier: m,
                        inactive: !r,
                        total: a,
                        wotPlusActive: l,
                    }),
                ],
            }),
        });
    }),
    nl = 'IncomeStatement_560dd244',
    il = 'IncomeStatement_base__scroll_fb9f1475',
    ol = 'IncomeStatement_item_48b34a63',
    cl = o(
        r.forwardRef(({ className: e, scrollable: a, ...t }, s) => {
            const { model: r } = Ys(),
                l = r.computes.credits();
            return n.jsx(zr, {
                ...t,
                ref: s,
                className: i(nl, a && il, e),
                scrollable: a,
                children: y(l.records, (e) => n.jsx(ll, { record: e, className: ol }, e.paramName)),
            });
        }),
    ),
    dl = 'Total_item_de53c8b0',
    ml = 'Total_divider_1de1ca28',
    ul = 'Total_dividerImage_ab06168d',
    fl = F('CreditsTotal', 'Total_19236d49'),
    _l = o(
        r.forwardRef((e, a) => {
            const { model: t } = Ys(),
                s = t.computes.credits();
            return n.jsxs(fl, {
                ...e,
                ref: a,
                children: [
                    n.jsx(js, { classNames: { base: ml, image: ul } }),
                    s.total.map((e) => n.jsx(ll, { record: e, className: dl, total: !0 }, e.paramName)),
                ],
            });
        }),
    ),
    pl = 'Credits_68f91d81',
    hl = 'Credits_base__scroll_759f08f3',
    bl = F('Credits'),
    vl = r.forwardRef(({ scrollable: e, className: a, ...t }, s) =>
        n.jsx(bl, { ...t, ref: s, className: i(pl, e && hl, a) }),
    );
((vl.Header = Pr), (vl.Item = ll), (vl.Total = _l), (vl.IncomeStatement = cl));
const gl = r.forwardRef((e, a) => n.jsx(Cs, { ...e, title: 'battle_results.details.xp', ref: a })),
    xl = 'RecordGroup_65a30ced',
    yl = 'RecordGroup_base__inactive_5fd9f274',
    Nl = 'RecordGroup_record_5fd9f274',
    jl = 'RecordGroup_record__extinguished_7fdfcea',
    wl = 'RecordGroup_record__first_9121e1b7',
    Il = 'RecordGroup_separator_9f211d97',
    Sl = 'RecordGroup_separatorBackground_8a447834',
    Rl = 'RecordGroup_value_1f34e2e2',
    Pl = 'RecordGroup_value__total_126d88a1',
    Cl = 'RecordGroup_value__freeXP_931265db';
function Dl(e, a) {
    return e !== pa || (void 0 !== a && a > 0);
}
function Al({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case st:
            return !1;
        case ja:
        case Ba:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const Tl = ({ paramName: e, xp: a, freeXp: t, modifier: s, inactive: r, total: l, wotPlusActive: o }) => {
        function c(a) {
            switch (e) {
                case fa:
                    return z.formatReal('woZeroDigits', a);
                case st:
                    return z.formatReal('fractional', a);
                default:
                    return z.formatNumber('integral', a);
            }
        }
        return n.jsxs('div', {
            className: i(xl, r && yl),
            children: [
                n.jsx('div', {
                    className: i(Nl, wl, Al({ wotPlusActive: o, paramName: e, value: a }) && jl),
                    children: n.jsx(Gr, {
                        value: a,
                        currency: ta,
                        modifier: Dl(e, a) ? s : void 0,
                        formatter: c,
                        classNames: { value: i(Rl, l && Pl) },
                        iconPath: kt(ta, e),
                    }),
                }),
                void 0 !== t && n.jsx('div', { className: Il, children: n.jsx('div', { className: Sl }) }),
                n.jsx('div', {
                    className: i(Nl, Al({ wotPlusActive: o, paramName: e, value: t }) && jl),
                    children: n.jsx(Gr, {
                        value: t,
                        currency: sa,
                        modifier: Dl(e, t) ? s : void 0,
                        formatter: c,
                        classNames: { value: i(Rl, Cl, l && Pl) },
                        iconPath: kt(sa, e),
                    }),
                }),
            ],
        });
    },
    Vl = 'Item_groups_a1f0c2a5',
    Bl = 'Item_label_7521a1d4',
    kl = 'Item_label__highlighted_36e62867',
    El = 'Item_label__gold_49ec59ab',
    zl = {
        [da]: 'title.base',
        [Ia]: 'title.base',
        [ma]: 'noPenalty',
        [Sa]: 'noPenalty',
        [ua]: 'friendlyFirePenalty',
        [fa]: 'igrBonus.simpleLabel',
        [Ra]: 'igrBonus.simpleLabel',
        [_a]: 'firstWin',
        [Pa]: 'firstWin',
        [pa]: 'manageableXpBonus',
        [Ca]: 'manageableXpBonus',
        [ha]: 'boosters',
        [Da]: 'boosters',
        [ba]: 'tacticalTraining',
        [Aa]: 'militaryManeuvers',
        [va]: 'event',
        [Ta]: 'event',
        [ga]: 'referralBonus.fullLabel',
        [xa]: 'premiumVehicleXP',
        [Va]: 'premiumVehicleXP',
        [ya]: 'squadBonus',
        [Na]: 'squadXPPenalty',
        [st]: 'aogasFactor',
        [ja]: 'wotPlusBonus',
        [Ba]: 'wotPlusBonus',
        [rt]: 'fairPlayViolation.deserter',
        [nt]: 'fairPlayViolation.suicide',
        [lt]: 'fairPlayViolation.afk',
        [wa]: 'total',
        [ka]: 'total',
        originalAlternative: 'xpRecordSimple',
        [Ds]: 'playerRankXP',
    },
    Hl = { [ja]: 'subscription.wot_plus_32x32', [Ba]: 'subscription.wot_plus_32x32' },
    Ol = new Set([ja, Ba]),
    Fl = () =>
        n.jsx('span', { className: kl, children: n.jsx(B, { path: 'battle_results.details.calculations.maximum' }) }),
    Gl = o(
        ({
            record: { paramName: e, premium: a, standard: t, modifier: s, recordsItemsDetails: r },
            total: l,
            ...o
        }) => {
            const { model: c } = Ys(),
                d = c.hasAnyPremium.get(),
                m = c.hasWotPlus.get();
            if (!(e in zl)) return null;
            const u = '1' === (null == r ? void 0 : r.isHighScope),
                f = u ? zl.originalAlternative : zl[e],
                _ = null == r ? void 0 : r.referralFactor;
            return n.jsx(lr, {
                ...o,
                labelIconPath: Hl[e],
                labelKey: `battle_results.details.calculations.${f}`,
                params: { ...(_ && { bonusFactor: Nt(_) }), ...(u && { maximum: n.jsx(Fl, {}) }) },
                classNames: { label: i(Bl, Ol.has(e) && El) },
                children: n.jsxs('div', {
                    className: Vl,
                    children: [
                        n.jsx(Tl, { ...t, paramName: e, modifier: s, inactive: d, total: l, wotPlusActive: m }),
                        n.jsx(Tl, { ...a, paramName: e, modifier: s, inactive: !d, total: l, wotPlusActive: m }),
                    ],
                }),
            });
        },
    ),
    Xl = 'IncomeStatement_560dd244',
    Wl = 'IncomeStatement_base__scroll_fb9f1475',
    $l = 'IncomeStatement_item_48b34a63',
    Ll = o(
        r.forwardRef(({ className: e, scrollable: a, ...t }, s) => {
            const { model: r } = Ys(),
                l = r.computes.experience();
            return n.jsx(zr, {
                ...t,
                ref: s,
                className: i(Xl, a && Wl, e),
                scrollable: a,
                children: y(l.records, (e) => n.jsx(Gl, { record: e, className: $l }, e.paramName)),
            });
        }),
    ),
    Ml = 'Total_item_a8580361',
    Kl = 'Total_divider_1de1ca28',
    ql = 'Total_dividerImage_ab06168d',
    Ul = F('ExperienceTotal', 'Total_19236d49'),
    Zl = o(
        r.forwardRef((e, a) => {
            const { model: t } = Ys(),
                s = t.computes.experience();
            return n.jsxs(Ul, {
                ...e,
                ref: a,
                children: [
                    n.jsx(js, { classNames: { base: Kl, image: ql } }),
                    s.total.map((e) => n.jsx(Gl, { record: e, className: Ml, total: !0 }, e.paramName)),
                ],
            });
        }),
    ),
    Ql = 'Experience_a014c8c',
    Yl = 'Experience_base__scroll_f75d07c6',
    Jl = F('Experience'),
    en = r.forwardRef(({ scrollable: e, className: a, ...t }, s) =>
        n.jsx(Jl, { ...t, ref: s, className: i(Ql, e && Yl, a) }),
    );
((en.Header = gl), (en.Item = Gl), (en.Total = Zl), (en.IncomeStatement = Ll));
const an = {
        background: 'DropdownPortal_background_80352048',
        base: 'DropdownPortal_ce932b5a',
        popover: 'DropdownPortal_popover_cf1c0927',
        scrollContent: 'DropdownPortal_scrollContent_84f2a497',
        bar: 'DropdownPortal_bar_ff158767',
        area__begin: 'DropdownPortal_area__begin_3f8609e6',
        area__end: 'DropdownPortal_area__end_45482477',
        list: 'DropdownPortal_list_e5576e40',
        button: 'DropdownPortal_button_16fda908',
        base__selected: 'DropdownPortal_base__selected_9ada34eb',
        itemLabelWrapper: 'DropdownPortal_itemLabelWrapper_2b33e0c3',
        vehicleName: 'DropdownPortal_vehicleName_9ada34eb',
        vehicleLevel: 'DropdownPortal_vehicleLevel_e03ba278',
        vehicleGap: 'DropdownPortal_vehicleGap_149320b4',
        selectIcon: 'DropdownPortal_selectIcon_55072cb4',
    },
    tn = [25, 25],
    sn = function ({ onSelect: e, options: a, value: t }) {
        const { api: s } = M(),
            [l, o] = Z(s, tn),
            { opened: c, close: d } = Q();
        return (
            r.useEffect(() => {
                if (c) return Y(() => Y(s.recalculateContent));
            }, [c, s.recalculateContent]),
            n.jsx(K, {
                className: i(an.area, !l && an.area__begin, !o && an.area__end),
                classNames: { content: an.scrollContent },
                children: a.map((a) =>
                    n.jsx(
                        'div',
                        {
                            className: i(an.base, a.id === t && an.base__selected),
                            children: n.jsxs(J, {
                                className: an.button,
                                onClick: () => {
                                    (d(), e(a.id));
                                },
                                children: [
                                    n.jsx('div', { className: an.background }),
                                    n.jsxs('div', {
                                        className: an.itemLabelWrapper,
                                        children: [
                                            n.jsx('div', { className: an.selectIcon }),
                                            a.level && n.jsx(ee, { value: a.level, className: an.vehicleLevel }),
                                            a.type &&
                                                n.jsx(ae, { type: a.type, size: 'x24x24', className: an.vehicleGap }),
                                            n.jsx('div', { className: an.vehicleName, children: a.label }),
                                        ],
                                    }),
                                ],
                            }),
                        },
                        a.id,
                    ),
                ),
            })
        );
    },
    rn = function (e) {
        return n.jsx(q.Portal, {
            position: 'bottom',
            children: n.jsx(U, {
                children: n.jsxs(q.Display, {
                    'data-name': 'playlist-dropdown-content',
                    className: an.popover,
                    children: [
                        n.jsx(q.Tip, { position: 'top', size: '80rem', offset: '120rem' }),
                        n.jsx('div', {
                            className: an.list,
                            children: n.jsxs($, {
                                children: [n.jsx(sn, { ...e }), n.jsx(L, { classNames: { base: an.bar } })],
                            }),
                        }),
                    ],
                }),
            }),
        });
    },
    ln = 'Trigger_9cdafb94',
    nn = 'Trigger_arrow_8ee677b2',
    on = 'Trigger_arrow__opened_38ae933',
    cn = 'Trigger_arrowWrapper_68451ace',
    dn = function (e) {
        const a = A(),
            t = Q();
        return n.jsx(q.Trigger, {
            children: (s) =>
                n.jsx(n.Fragment, {
                    children: n.jsxs('div', {
                        ...s,
                        onMouseEnter: (e) => {
                            a.play('mouse-enter', { target: 'vehicle:playlists:dropdown_trigger', original: e });
                        },
                        onClick: (e) => {
                            (a.play('click', { target: 'vehicle:playlists:dropdown_trigger', original: e }),
                                s.onClick(e));
                        },
                        className: ln,
                        children: [
                            e.children,
                            n.jsx('div', {
                                className: cn,
                                children: n.jsx('div', { className: i(nn, t.opened && on) }),
                            }),
                        ],
                    }),
                }),
        });
    },
    mn = 'VehicleSelector_vehicleName_ff1d26ec',
    un = 'VehicleSelector_vehicleLevel_9e1a557b',
    fn = 'VehicleSelector_vehicleGap_250d0374',
    _n = 'VehicleSelector_label_14dee5e6',
    pn = function (e) {
        const { value: a } = e,
            t = g(e.options, (e) => e.id === a);
        return n.jsxs(q, {
            children: [
                n.jsx(rn, { ...e }),
                n.jsx(dn, {
                    children: n.jsxs('div', {
                        className: _n,
                        children: [
                            (null == t ? void 0 : t.level) && n.jsx(ee, { value: t.level, className: un }),
                            (null == t ? void 0 : t.type) && n.jsx(ae, { type: t.type, size: 'x24x24', className: fn }),
                            n.jsx('div', { className: mn, children: t.label }),
                        ],
                    }),
                }),
            ],
        });
    },
    hn = 'FinancialReportVehicleSelector_c6ca6e82',
    bn = o(function () {
        const e = I.resolve('strings'),
            { model: a, controls: t } = Ys(),
            s = a.vehiclesFinancialStats.get(),
            r = a.selectedVehicle.get();
        return n.jsx('div', {
            className: hn,
            children: n.jsx(pn, {
                options: y(s, ({ vehicle: a, isGeneralInfo: t }) =>
                    t
                        ? { id: null, label: e.readOrEmpty('fl_post_battle_results.battleInfo.all_from_battle') }
                        : { id: a.techName, label: a.name, level: a.tier, type: a.type },
                ),
                onSelect: t.selectVehicle,
                value: r,
            }),
        });
    }),
    vn = 'FinancialReport_content_99bf970f',
    gn = 'FinancialReport_leftContent_75c21204',
    xn = 'FinancialReport_experience_7219d4d3',
    yn = 'FinancialReport_credits_7712b0c',
    Nn = 'FinancialReport_header_d56ebc61',
    jn = 'FinancialReport_headerContent_37c9251a',
    wn = 'FinancialReport_total_bdf3e42b',
    In = 'FinancialReport_bonds_b7ae931a',
    Sn = F('FinancialReport', 'FinancialReport_1cb7f6f5'),
    Rn = ({ className: e }) => {
        const [a, t] = r.useState({ credits: !1, experience: !1 }),
            s = r.useRef(null),
            l = r.useRef(null),
            i = r.useRef(null),
            o = te({ margin: 18 }, { medium: { margin: 19 }, large: { margin: 16 }, extraLarge: { margin: 30 } }),
            c = r.useCallback(() => {
                if (!s.current || !l.current || !i.current) return;
                const { height: e } = s.current.getBoundingClientRect(),
                    { height: a } = l.current.getBoundingClientRect(),
                    { height: r } = i.current.getBoundingClientRect();
                e &&
                    a &&
                    r &&
                    (e - a - r - o.margin >= 0
                        ? t({ credits: !1, experience: !1 })
                        : t(
                              a <= e / 2 && a <= r
                                  ? { credits: !1, experience: !0 }
                                  : r <= e / 2
                                    ? { credits: !0, experience: !1 }
                                    : { credits: !0, experience: !0 },
                          ));
            }, [o.margin]);
        return (
            se(s, c),
            n.jsx(Qs, {
                children: n.jsx(Sn, {
                    className: e,
                    children: n.jsxs('div', {
                        children: [
                            n.jsx(bn, {}),
                            n.jsxs('div', {
                                className: vn,
                                children: [
                                    n.jsxs('div', {
                                        className: gn,
                                        ref: s,
                                        children: [
                                            n.jsxs(vl, {
                                                ref: l,
                                                scrollable: a.credits,
                                                className: yn,
                                                children: [
                                                    n.jsx(vl.Header, { className: Nn }),
                                                    n.jsx(vl.IncomeStatement, { scrollable: a.credits }),
                                                    n.jsx(vl.Total, { className: wn }),
                                                ],
                                            }),
                                            n.jsxs(en, {
                                                ref: i,
                                                scrollable: a.experience,
                                                className: xn,
                                                children: [
                                                    n.jsx(en.Header, { className: Nn, classNames: { content: jn } }),
                                                    n.jsx(en.IncomeStatement, { scrollable: a.experience }),
                                                    n.jsx(en.Total, { className: wn }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    n.jsxs(yr, {
                                        className: In,
                                        children: [
                                            n.jsx(yr.Header, { className: Nn, classNames: { content: jn } }),
                                            n.jsx(yr.IncomeStatement, {}),
                                            n.jsx(yr.Total, { className: wn }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            })
        );
    },
    Pn = r.createContext(null);
function Cn() {
    const e = r.useContext(Pn);
    if (null === e) throw new Error('You can use the achievements hooks only with the Achievements component');
    return e;
}
const Dn = { x: 50, y: -30, scale: 1.2, opacity: 0 };
function An({ children: e, achievements: a, springsProps: t }) {
    const [s, l] = r.useState(new Set()),
        [i, o] = r.useState(void 0),
        [c, m] = d(a.length, () => ({ from: { ...Dn, ...(null == t ? void 0 : t.from) }, ...t }), [a.length, t]),
        u = r.useMemo(
            () => ({
                api: m,
                springs: c,
                achievements: a,
                hoverIndex: i,
                setHoverIndex: o,
                completedAnimationIndexes: s,
                setCompletedAnimationIndexes: l,
            }),
            [m, c, a, i, o, s, l],
        );
    return n.jsx(Pn.Provider, { value: u, children: e });
}
const Tn = {
        root: 'Achievement_root_8e5495a9',
        'media-wrapper': 'Achievement_media-wrapper_8e5495a9',
        base: 'Achievement_d22ce0bc',
        base__extinct: 'Achievement_base__extinct_b2f0b4be',
        icon: 'Achievement_icon_beb32010',
    },
    Vn = r.forwardRef(function ({ achievement: e, index: a, width: t, height: s, classNames: l }, o) {
        const c = re({
                args: r.useMemo(
                    () => ({ tooltipId: e.tooltipId, tooltipArgs: e.tooltipArgs }),
                    [e.tooltipId, e.tooltipArgs],
                ),
            }),
            d = A(),
            { hoverIndex: m, setHoverIndex: u } = Cn();
        return n.jsx('div', {
            ...c,
            ref: o,
            className: i(Tn.base, Tn[`base__${as(a, m)}`], null == l ? void 0 : l.achievement),
            onMouseEnter: function (e) {
                (d.play('mouse-enter', { original: e, target: 'achievements:achievement' }), c.onMouseEnter(e), u(a));
            },
            onMouseLeave: () => {
                (c.onMouseLeave(), u(void 0));
            },
            children:
                'rank' === e.groupID
                    ? n.jsx('div', {
                          style: {
                              backgroundImage: `url(${R.images.frontline.gui.maps.icons.ranks.c_256x256.$dyn(e.iconName)})`,
                              width: t,
                              height: s,
                          },
                          className: Tn.icon,
                      })
                    : n.jsx(
                          O,
                          {
                              width: t,
                              height: s,
                              path: `achievement.x240x240.${e.iconName}`,
                              className: i(Tn.icon, null == l ? void 0 : l.icon),
                          },
                          e.iconName,
                      ),
        });
    }),
    Bn = 'GroupedAchievements_4b56acae',
    kn = 'GroupedAchievements_rankGroup_74be9c12',
    En = 'GroupedAchievements_othersGroup_d0fdb9a6',
    zn = 'GroupedAchievements_animatedAchievement_f3a3b8f8',
    Hn = 'GroupedAchievements_achievement_977416af',
    On = 'GroupedAchievements_achievement__notInteractive_76fcea70',
    Fn = r.memo(function ({
        achievements: e,
        startIndex: a,
        indent: t = 0,
        group: s,
        medalWidth: l,
        medalHeight: o,
        maxContainerWidth: c,
        updateGroupIndent: d,
    }) {
        const u = r.useRef(null),
            { springs: f, achievements: _, completedAnimationIndexes: p, hoverIndex: h } = Cn();
        return (
            le(() => {
                if (null === u.current) return;
                const a = u.current.offsetWidth + Math.floor((t / e.length) * 2),
                    r = ne(c);
                d(s, a < r ? Math.floor((r - a) / 2) : 0);
            }, [e.length, l, c, d]),
            n.jsx('div', {
                style: { paddingLeft: t, paddingRight: t },
                className: En,
                children: y(e, (t, s) => {
                    const r = _.length - a - s - 1;
                    return n.jsx(
                        m.div,
                        {
                            ref: 0 === s ? u : void 0,
                            className: zn,
                            style: { ...f[r], zIndex: a + s === h ? e.length + 1 : e.length - s },
                            children: n.jsx(Vn, {
                                classNames: { achievement: i(Hn, !1 === p.has(r) && On) },
                                achievement: t,
                                width: l,
                                height: o,
                                index: a + s,
                            }),
                        },
                        s,
                    );
                }),
            })
        );
    }),
    Gn = r.memo(function ({ achievements: e, medalWidth: a, medalHeight: t }) {
        const { springs: s, achievements: r, completedAnimationIndexes: l, hoverIndex: o } = Cn();
        return n.jsx('div', {
            className: kn,
            children: y(e, (c, d) => {
                const u = r.length - d - 1;
                return n.jsx(
                    m.div,
                    {
                        className: zn,
                        style: { ...s[u], zIndex: d === o ? e.length + 1 : e.length - d },
                        children: n.jsx(Vn, {
                            classNames: { achievement: i(Hn, !l.has(u) && On) },
                            achievement: c,
                            width: a,
                            height: t,
                            index: d,
                        }),
                    },
                    d,
                );
            }),
        });
    }),
    Xn = r.memo(function ({ className: e }) {
        const a = te(
                {
                    rank: { width: '120rem', height: '120rem', maxContainerWidth: 120 },
                    others: { width: '100rem', height: '100rem', maxContainerWidth: 80 },
                },
                {
                    large: {
                        rank: { width: '180rem', height: '180rem', maxContainerWidth: 180 },
                        others: { width: '140rem', height: '140rem', maxContainerWidth: 100 },
                    },
                    extraLarge: {
                        rank: { width: '220rem', height: '220rem', maxContainerWidth: 220 },
                        others: { width: '180rem', height: '180rem', maxContainerWidth: 130 },
                    },
                },
            ),
            { achievements: t } = Cn(),
            s = r.useMemo(
                () =>
                    (function (e) {
                        return v(e, (e, a) => (Zt(a) === qt.rank ? e.rank.push(a) : e.others.push(a), e), {
                            [ts]: [],
                            [ss]: [],
                        });
                    })(t),
                [t],
            ),
            [l, o] = r.useState(() => ({ others: s.rank.length > 0 && s.others.length > 0 ? void 0 : 0 })),
            c = r.useCallback(
                function (e, a) {
                    o((t) => ({ ...t, [e]: a }));
                },
                [o],
            );
        return 0 === t.length
            ? null
            : n.jsxs('div', {
                  className: i(Bn, e),
                  children: [
                      s.rank.length > 0 &&
                          n.jsx(Gn, { achievements: s.rank, medalWidth: a.rank.width, medalHeight: a.rank.height }),
                      s.others.length > 0 &&
                          n.jsx(Fn, {
                              group: ss,
                              achievements: s.others,
                              medalWidth: a.others.width,
                              medalHeight: a.others.height,
                              maxContainerWidth: a.others.maxContainerWidth,
                              startIndex: s.rank.length,
                              updateGroupIndent: c,
                              indent: l.others,
                          }),
                  ],
              });
    }),
    Wn = 'AnimatedNumber_958fc84e',
    $n = 'AnimatedNumber_slotMachineDigit_a9587a5a',
    Ln = 'AnimatedNumber_plugChar_c66678',
    Mn = 'AnimatedNumber_digitsList_2065427d',
    Kn = T.cubicBezier(0.33, 0, 0.25, 1);
function qn({ symbol: e, step: a, delay: t, first: s, handleFirstRest: l }) {
    const [i, o] = r.useState(!1),
        [c, d] = u(() => ({ from: { y: 0, opacity: 0 } })),
        f = /^\d$/.test(e);
    const _ = f ? parseInt(e) : 1;
    return (
        r.useEffect(() => {
            i && s && l();
        }, [i, s, l]),
        r.useEffect(() => {
            a > 0 &&
                d.start({
                    delay: i ? 0 : t,
                    from: { y: a, opacity: 1 },
                    to: { y: -_ * a, opacity: 1 },
                    config: { duration: 600, easing: Kn },
                    immediate: i,
                    onRest() {
                        o(!0);
                    },
                });
        }, [a, d, i, t, _]),
        n.jsxs('div', {
            className: $n,
            children: [
                n.jsx('div', { className: Ln, children: e }),
                n.jsx(m.div, {
                    style: c,
                    className: Mn,
                    children: ce(0, _ + 1, (t) =>
                        f
                            ? n.jsx('div', { children: t }, t)
                            : n.jsx('div', { style: { height: a }, children: t > 0 ? e : null }, t),
                    ),
                }),
            ],
        })
    );
}
const Un = r.memo(function ({ value: e, readyToAnimate: a, className: t, handleAnimationFinished: s, type: l }) {
        const [o, c] = ie(),
            d = r.useMemo(() => e.split(''), [e]),
            m = r.useCallback(() => s(l), [s, l]);
        return n.jsx('div', {
            ref: o,
            className: i(Wn, t),
            children: d.map((t, s) =>
                n.jsx(
                    qn,
                    {
                        first: 0 === s,
                        handleFirstRest: m,
                        delay: 200 * (d.length - s),
                        symbol: t,
                        step: c.type === oe.measured && a ? c.size.height : 0,
                    },
                    `${e}-${s}`,
                ),
            ),
        });
    }),
    Zn = 'Currency_10720e2d',
    Qn = 'Currency_icon_4d923f64',
    Yn = 'Currency_icon__visible_9c676b12',
    Jn = 'Currency_value_54c8fc6b',
    ei = { xp: 'tankXP', crystal: 'crystal', credits: 'credits', gold: 'gold' },
    ai = Object.keys(ei);
function ti({ type: e, value: a, size: t, visibleIfZero: s, readyToAnimate: r, handleAnimationFinished: l }) {
    return ((e) => ai.includes(e))(e)
        ? 0 !== a || s
            ? n.jsx(X, {
                  reverse: !0,
                  type: ei[e],
                  size: t,
                  className: Zn,
                  classNames: { icon: i(Qn, r && Yn) },
                  children: n.jsx(Un, {
                      className: Jn,
                      readyToAnimate: r,
                      type: e,
                      handleAnimationFinished: l,
                      value: z.formatNumber(e === de.gold ? 'gold' : 'integral', a),
                  }),
              })
            : null
        : (console.error(`There is no such currency in the template literal: ${e}`), null);
}
const si = F('Currencies', 'Currencies_5b11a533'),
    ri = o(function ({ className: e }) {
        const [a, t] = r.useState(!1),
            [s, l] = r.useState(new Set()),
            { model: i } = ms(),
            o = i.computes.earnedCurrencies(),
            c = me(o),
            d = A(),
            { step: m } = hs(),
            u = te({ value: W.medium }, { medium: { value: W.large }, large: { value: W.extraLarge } });
        (r.useEffect(() => {
            void 0 !== c && c !== o && d.play('startRolling', { target: 'overview:currencies' });
        }, [o, c, d]),
            r.useEffect(() => {
                m === us.third && (t(!0), d.play('startRolling', { target: 'overview:currencies' }));
            }, [m, d]),
            r.useEffect(() => {
                s.size === o.filter(({ value: e, visibleIfZero: a }) => e > 0 || a).length &&
                    d.play('stopRolling', { target: 'overview:currencies' });
            }, [o, d, s]));
        const f = r.useCallback(function (e) {
            l((a) => V(a, e));
        }, []);
        return n.jsx(si, {
            className: e,
            children: y(o, (e) =>
                n.jsx(ti, { readyToAnimate: a, size: u.value, handleAnimationFinished: f, ...e }, e.type),
            ),
        });
    }),
    li = 'win',
    ni = 'Flag_aedf2f2f',
    ii = 'Flag_8ac99d2d';
function oi({ status: e }) {
    return e === li ? 'post_battle.epic_victory_ribbon' : 'post_battle.epic_defeat_draw_ribbon';
}
function ci({ status: e }) {
    const a = I.resolve('videos');
    return n.jsx('div', {
        className: ni,
        children: n.jsx(ue, { loop: !0, autoplay: !0, className: ii, src: a.read(oi({ status: e })) }),
    });
}
const di = {
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
    mi = {
        [di.targetKills]: 'library.crossed_tank',
        [di.damageDealt]: 'library.cross_with_gap',
        [di.damageBlockedByArmor]: 'library.blocked',
        [di.damageAssisted]: 'library.double_target',
        [di.damageAssistedStun]: 'library.arrow_with_fading',
        [di.spotted]: 'library.eyebrow',
        [di.criticalDamage]: 'library.gear_with_gap',
    },
    ui = { behaviour: fe.contentResponsive, minSize: '0rem', maxSize: '1000rem' };
(di.account,
    _e.extraSmall,
    fe.static,
    _e.medium,
    fe.static,
    _e.large,
    fe.static,
    _e.extraLarge,
    fe.static,
    di.vehicle,
    _e.extraSmall,
    fe.static,
    _e.medium,
    fe.static,
    _e.large,
    fe.static,
    _e.extraLarge,
    fe.static);
const fi = r.createContext(null);
function _i({ iconsConfig: e, children: a }) {
    const t = r.useMemo(() => ({ iconsConfig: { ...mi, ...(e || {}) } }), [e]);
    return n.jsx(fi.Provider, { value: t, children: a });
}
const pi = {
    cellWithValue: 'HeaderCell_cellWithValue_78949e6d',
    cellWithValue__totalInfo: 'HeaderCell_cellWithValue__totalInfo_789bf7be',
    cellWithValue__zeroIndent: 'HeaderCell_cellWithValue__zeroIndent_334269c9',
    wrapper: 'HeaderCell_wrapper_7849c6a',
    imageWrapper: 'HeaderCell_imageWrapper_a570c717',
    value: 'HeaderCell_value_f7bb7c82',
    cellWithText: 'HeaderCell_cellWithText_710c47ce',
    text: 'HeaderCell_text_35220206',
};
function hi({ info: e, name: a, className: t }) {
    const { iconsConfig: s } = (function () {
            const e = r.useContext(fi);
            if (null === e)
                throw new Error(
                    'You can use the personal efficiency hooks only with the PersonalEfficiency widget component',
                );
            return e;
        })(),
        l = I.resolve('views'),
        o = pe({
            contentId: l.read((e) =>
                a === di.criticalDamage
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { paramType: a },
        }),
        c = v(
            e.table.getRowModel().rows,
            (e, t) => {
                const s = t.getValue(a),
                    r = he(s) ? s : s.value;
                return e + (a === di.spotted && r > 0 ? 1 : r);
            },
            0,
        ),
        d = s[a] ?? '';
    return n.jsx('div', {
        className: i(pi.cellWithValue, t),
        children: n.jsxs('div', {
            ...o,
            className: pi.wrapper,
            children: [
                n.jsx('div', { className: pi.value, children: z.formatNumber('integral', c) }),
                n.jsx('div', {
                    className: pi.imageWrapper,
                    children: n.jsx(O, { width: '100%', height: '100%', path: d }),
                }),
            ],
        }),
    });
}
function bi({ name: e, info: a, className: t }) {
    const s = I.resolve('strings');
    switch (e) {
        case di.targetKills:
        case di.damageDealt:
        case di.damageBlockedByArmor:
        case di.damageAssisted:
        case di.damageAssistedStun:
        case di.spotted:
        case di.criticalDamage:
            return void 0 !== a ? n.jsx(hi, { name: e, info: a, className: t }) : null;
        case di.account:
            return n.jsx('div', {
                className: pi.cellWithText,
                children: n.jsx('div', {
                    className: pi.text,
                    children: s.readOrEmpty('battle_results.common.battleEfficiency.uppercased_title'),
                }),
            });
        default:
            return (console.error(`Unknown column ${e}`), null);
    }
}
const vi = 'Index_align_5032d1bf',
    gi = 'Index_align__right_9d371d4f',
    xi = f();
function yi() {
    return [
        xi.accessor('killed', {
            id: di.targetKills,
            header: (e) =>
                n.jsx(bi, {
                    info: e,
                    name: di.targetKills,
                    className: i(pi.cellWithValue__totalInfo, pi.cellWithValue__zeroIndent),
                }),
            enableSorting: !1,
            meta: { column: ui, className: i(vi, gi) },
        }),
        xi.accessor('damageDealt', {
            id: di.damageDealt,
            header: (e) => n.jsx(bi, { info: e, name: di.damageDealt, className: pi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(vi, gi), column: ui },
        }),
        xi.accessor('damageBlockedByArmor', {
            id: di.damageBlockedByArmor,
            header: (e) =>
                n.jsx(bi, { info: e, name: di.damageBlockedByArmor, className: pi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(vi, gi), column: ui },
        }),
        xi.accessor('damageAssisted', {
            id: di.damageAssisted,
            header: (e) => n.jsx(bi, { info: e, name: di.damageAssisted, className: pi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(vi, gi), column: ui },
        }),
        xi.accessor('damageAssistedStun', {
            id: di.damageAssistedStun,
            header: (e) => n.jsx(bi, { info: e, name: di.damageAssistedStun, className: pi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(vi, gi), column: ui },
        }),
        xi.accessor('spotted', {
            id: di.spotted,
            header: (e) => n.jsx(bi, { info: e, name: di.spotted, className: pi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(vi, gi), column: ui },
        }),
        xi.accessor('criticalDamage', {
            id: di.criticalDamage,
            header: (e) => n.jsx(bi, { info: e, name: di.criticalDamage, className: pi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(vi, gi), column: ui },
        }),
    ];
}
const Ni = 'TableHeader_row_a81d3e65',
    ji = r.memo(function ({ classNames: e }) {
        const { table: a } = be();
        return n.jsx(ve.Header, {
            className: null == e ? void 0 : e.base,
            children: y(a.getHeaderGroups(), (a, t) =>
                n.jsx(
                    ve.Row,
                    {
                        className: i(Ni, null == e ? void 0 : e.row),
                        children: y(a.headers, (a, s) =>
                            n.jsx(
                                ve.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: null == e ? void 0 : e.cell,
                                    cell: { ...a, rowIndex: t, index: s, tablePart: ge.header },
                                    children: !a.isPlaceholder && _(a.column.columnDef.header, a.getContext()),
                                },
                                a.id,
                            ),
                        ),
                    },
                    a.id,
                ),
            ),
        });
    }),
    wi = function ({ data: e, config: a, className: t }) {
        const s = xe();
        return n.jsx(_i, {
            children: n.jsx(ye, {
                data: e,
                columns: a,
                enableMultiRowSelection: !1,
                getRowId: (e) => e.account.username,
                children: n.jsx(ve, { className: t, children: n.jsx(ji, {}) }, s.breakpoint.name),
            }),
        });
    },
    Ii = 'PersonalEfficiency_messagesPanel_d1b1fa0b',
    Si = 'PersonalEfficiency_message_d772bbd7',
    Ri = 'PersonalEfficiency_totalEfficiency_4de0e87b',
    Pi = 'PersonalEfficiency_totalEfficiencyTable_9139933',
    Ci = 'PersonalEfficiency_clarificationWrapper_5f3072b1',
    Di = o(function () {
        const { model: e } = ms(),
            a = e.computes.personalEfficiency(),
            t = e.battleInfo.get().finishReasonClarification,
            s = I.resolve('strings'),
            { personalEfficiencyRef: l } = hs(),
            [i] = u(() => ({ from: { opacity: 0 }, ref: l })),
            o = r.useMemo(yi, []);
        return 0 === a.length
            ? n.jsxs(m.div, {
                  style: i,
                  className: Ii,
                  children: [
                      '' !== t &&
                          n.jsx('div', {
                              className: Si,
                              children: s.readOrEmpty(`battle_results.finish.clarification.${t}`),
                          }),
                      n.jsx('div', {
                          className: Si,
                          children: s.readOrEmpty('battle_results.common.battleEfficiency.noEfficiency'),
                      }),
                  ],
              })
            : n.jsx('div', {
                  className: Ri,
                  children: n.jsxs(m.div, {
                      style: i,
                      children: [
                          '' !== t &&
                              n.jsx('div', {
                                  className: Ci,
                                  onClick: (e) => e.stopPropagation(),
                                  children: n.jsx('div', {
                                      className: Si,
                                      children: s.readOrEmpty(`battle_results.finish.clarification.${t}`),
                                  }),
                              }),
                          n.jsx(wi, { data: a, config: o, className: Pi }),
                      ],
                  }),
              });
    }),
    Ai = {
        root: 'Overview_root_8249f573',
        'media-wrapper': 'Overview_media-wrapper_8249f573',
        background: 'Overview_background_30fb26a',
        base: 'Overview_5f6760cf',
        background__win: 'Overview_background__win_268c424',
        background__lose: 'Overview_background__lose_7d50d454',
        cornerShadow: 'Overview_cornerShadow_7531dd70',
        bottomGradient: 'Overview_bottomGradient_cb52c727',
        bottomGradient__win: 'Overview_bottomGradient__win_a0b6d8e0',
        bottomGradient__lose: 'Overview_bottomGradient__lose_cbca8f79',
        info: 'Overview_info_98f0c360',
        info__withoutMedals: 'Overview_info__withoutMedals_6be29b19',
        statusWrapper: 'Overview_statusWrapper_cda9b438',
        status: 'Overview_status_1c902a82',
        statusText: 'Overview_statusText_26db019c',
        achievements: 'Overview_achievements_5b2b6582',
        currencies: 'Overview_currencies_d637d5d',
    },
    Ti = F('Overview', Ai.base),
    Vi = o(function ({ className: e }) {
        var a;
        const t = I.resolve('strings'),
            s = A(),
            { model: l } = ms(),
            o = l.personalEfficiency.achievements.get(),
            { step: c, battleStatusRef: d, earnedCurrenciesRef: f } = hs(),
            [_] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: d })),
            [p] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: f })),
            { api: h, setCompletedAnimationIndexes: b } = Cn(),
            v = null == (a = l.battleInfo.get()) ? void 0 : a.winStatus;
        return (
            r.useEffect(() => {
                if (c === us.first) {
                    const e = 500 * Math.log(o.length),
                        a = 150 * Math.log(o.length);
                    (h.start((t) => {
                        const r = e - 500 * Math.log(o.length - t),
                            l = a - 150 * Math.log(o.length - t);
                        return {
                            x: 0,
                            y: 0,
                            scale: 1,
                            delay: 200 * t + r,
                            config: { duration: 400 + l, easing: T.cubicBezier(1, 0, 0.95, 1) },
                            onRest() {
                                (s.play('achievementAppeared', { target: 'overview' }), b((e) => V(e, t)));
                            },
                        };
                    }),
                        h.start((t) => ({
                            opacity: 1,
                            delay: 150 + 200 * t + (e - 500 * Math.log(o.length - t)),
                            config: {
                                duration: 250 + (a - 150 * Math.log(o.length - t)),
                                easing: T.cubicBezier(0.33, 0, 0.25, 1),
                            },
                        })));
                }
            }, [c, h, b, s, o.length]),
            n.jsxs(Ti, {
                className: e,
                children: [
                    n.jsx('div', { className: i(Ai.background, v && Ai[`background__${v}`]) }),
                    n.jsx('div', { className: Ai.cornerShadow }),
                    n.jsx('div', { className: i(Ai.bottomGradient, v && Ai[`bottomGradient__${v}`]) }),
                    n.jsxs('div', {
                        className: i(Ai.info, 0 === o.length && Ai.info__withoutMedals),
                        children: [
                            n.jsx(ci, { status: v }),
                            n.jsx('div', {
                                className: Ai.statusWrapper,
                                children: n.jsx(m.div, {
                                    style: _,
                                    className: Ai.status,
                                    children: n.jsx('div', {
                                        className: Ai.statusText,
                                        'data-test-id': 'winStatus',
                                        children: z.toUpperCase(t.readOrEmpty(`battle_results.status.${v}`)),
                                    }),
                                }),
                            }),
                            n.jsx(Xn, { className: Ai.achievements }),
                            n.jsx(m.div, { style: p, className: Ai.currencies, children: n.jsx(ri, {}) }),
                        ],
                    }),
                    n.jsx(Di, {}),
                ],
            })
        );
    }),
    Bi = o(function (e) {
        const { model: a } = ms(),
            t = a.personalEfficiency.achievements.get();
        return n.jsx(An, { achievements: t, children: n.jsx(Vi, { ...e }) });
    }),
    ki = 'Divider_80a19f4b',
    Ei = r.forwardRef(function ({ classNames: e, className: a, ...t }, s) {
        return n.jsx('div', {
            ...t,
            ref: s,
            className: i(ki, null == e ? void 0 : e.base, a),
            children: n.jsx(O, {
                className: null == e ? void 0 : e.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }),
    zi = {
        root: 'Header_root_65f475ba',
        'media-wrapper': 'Header_media-wrapper_65f475ba',
        header: 'Header_ecb415bd',
        vehicle: 'Header_vehicle_ec875116',
        vehicleImageWrapper: 'Header_vehicleImageWrapper_f07116f5',
        info: 'Header_info_63ade36e',
        accountInfo: 'Header_accountInfo_e1497c3e',
        accountInfoGap: 'Header_accountInfoGap_50a55407',
        accountName: 'Header_accountName_6a8dc850',
        clanAbbreviation: 'Header_clanAbbreviation_24ad710',
        anonymizerIcon: 'Header_anonymizerIcon_b6806a1a',
        achievements: 'Header_achievements_5efa2203',
        achievement: 'Header_achievement_49110775',
        achievement__extinct: 'Header_achievement__extinct_19f6e11',
        achievementIcon: 'Header_achievementIcon_e6989d30',
    };
function Hi(e, a) {
    return void 0 === a ? 'default' : a === e ? 'hover' : 'extinct';
}
const Oi = r.forwardRef(function (
        { achievement: e, achievementsLength: a, index: t, hoverIndex: s, setHoverIndex: r, ...l },
        o,
    ) {
        const c = A(),
            d = re({ args: { tooltipId: e.tooltipId, tooltipArgs: e.tooltipArgs } }),
            m = te(
                { width: '48rem', height: '48rem', path: `achievement.c_48x48.${e.iconName}` },
                { medium: { width: '67rem', height: '71rem', path: `achievement.${e.iconName}` } },
            );
        return n.jsx('div', {
            ...l,
            ...d,
            className: i(zi.achievement, zi[`achievement__${Hi(t, s)}`]),
            style: { zIndex: t === s ? a + 1 : a - t },
            onMouseEnter: function (e) {
                (d.onMouseEnter(e),
                    r(t),
                    c.play('mouse-enter', { original: e, target: 'team-efficiency:efficiency-details:achievement' }));
            },
            onMouseLeave: () => {
                (d.onMouseLeave(), r(void 0));
            },
            children: n.jsx(O, { ref: o, className: zi.achievementIcon, ...m }, e.iconName),
        });
    }),
    Fi = o(function ({ team: e, account: a, vehicles: t, achievements: s, squadIndex: l, personal: o }) {
        const c = I.resolve('strings'),
            [d, m] = r.useState(void 0),
            { model: u, controls: f } = ms(),
            _ = u.teamsStatistic.selectedVehicle.get(),
            p = u.computes.personalInfo(),
            h = te({ width: '230rem', height: '184rem' }, { medium: { width: '290rem', height: '232rem' } }),
            b = Ne({
                header: c.readOrEmpty('tooltips.anonymizer.teamStats.header').replace('%(name)s', a.username),
                body: c.readOrEmpty('tooltips.anonymizer.teamStats.body'),
            }),
            v = cs({ personal: o, platoonType: os(e, p.squadIndex, l), anonymizer: a.anonymizer });
        return n.jsxs('div', {
            className: zi.header,
            children: [
                n.jsx('div', {
                    className: zi.vehicleImageWrapper,
                    children: n.jsx(je, { name: _ ?? '', width: h.width, height: h.height }),
                }),
                n.jsxs('div', {
                    className: zi.info,
                    children: [
                        n.jsxs(we, {
                            className: zi.accountInfo,
                            children: [
                                '' !== a.badge &&
                                    n.jsx(we.Badge, {
                                        className: zi.accountInfoGap,
                                        size: we.Badge.sizes.x48x48,
                                        badgeId: a.badge,
                                    }),
                                n.jsx(we.Name, {
                                    className: i(zi.accountName, zi.accountInfoGap),
                                    children: n.jsx(Ie, { text: v ? a.fakeUsername : a.username }),
                                }),
                                '' !== a.clanAbbreviation &&
                                    !v &&
                                    n.jsx(we.ClanTag, {
                                        className: zi.clanAbbreviation,
                                        children: n.jsx(B, {
                                            path: 'common.clanTag',
                                            params: { abbrev: a.clanAbbreviation },
                                            brackets: { start: '{', end: '}' },
                                        }),
                                    }),
                                0 !== a.igrType &&
                                    n.jsx(we.IgrIcon, { size: we.IgrIcon.sizes.x64x28, className: zi.accountInfoGap }),
                                '' !== a.suffixBadge &&
                                    n.jsx(we.Stripe, {
                                        size: we.Stripe.sizes.regular,
                                        badgeId: a.suffixBadge,
                                        className: zi.accountInfoGap,
                                    }),
                                a.anonymizer &&
                                    n.jsx(we.AnonymizerIcon, {
                                        ...b,
                                        size: we.AnonymizerIcon.sizes.x32x32,
                                        className: zi.anonymizerIcon,
                                    }),
                            ],
                        }),
                        n.jsx('div', {
                            className: zi.vehicle,
                            children: n.jsx(pn, {
                                options: y(t, ({ vehicle: e, isGeneralInfo: a }) =>
                                    a || !e
                                        ? {
                                              id: null,
                                              label: c.readOrEmpty('fl_post_battle_results.battleInfo.all_from_battle'),
                                          }
                                        : { id: e.techName, label: e.name, level: e.tier, type: e.type },
                                ),
                                onSelect: f.teamEfficiency.selectVehicle,
                                value: _,
                            }),
                        }),
                        0 !== s.length &&
                            n.jsx('div', {
                                className: zi.achievements,
                                children: y(Qt(s), (e, a) =>
                                    n.jsx(
                                        Oi,
                                        {
                                            index: a,
                                            hoverIndex: d,
                                            setHoverIndex: m,
                                            achievement: e,
                                            achievementsLength: s.length,
                                        },
                                        e.name,
                                    ),
                                ),
                            }),
                    ],
                }),
            ],
        });
    }),
    Gi = F('StatisticsLabel'),
    Xi = I.resolve('strings'),
    Wi = r.forwardRef(function ({ labelKey: e, ...a }, t) {
        return n.jsx(Gi, { ...a, ref: t, children: Xi.readOrEmpty(e) });
    }),
    $i = 'Value_798a6cdd',
    Li = 'Value_separator_798a6cdd',
    Mi = I.resolve('strings');
function Ki(e, a) {
    switch (e) {
        case Et.Integer:
            return z.formatNumber('integral', a);
        case Et.Float:
            return z.formatReal('fractional', a);
        default:
            return a;
    }
}
const qi = F('StatisticsValue', $i),
    Ui = r.forwardRef(function (
        {
            labelKey: e,
            value: a,
            type: t,
            valueSeparatorKey: s = 'common.common.slash',
            className: l,
            classNames: o,
            ...c
        },
        d,
    ) {
        return n.jsx(qi, {
            ...c,
            ref: d,
            className: i(null == o ? void 0 : o.base, l),
            children: y(a, (l, c) =>
                n.jsxs(
                    r.Fragment,
                    {
                        children: [
                            n.jsx('div', {
                                className: i(
                                    0 === l && (null == o ? void 0 : o.zeroValue),
                                    l < 0 && (null == o ? void 0 : o.negativeValue),
                                ),
                                children: Ki(t, l),
                            }),
                            c < a.length - 1 &&
                                n.jsxs('div', {
                                    className: i(Li, null == o ? void 0 : o.separator),
                                    children: [' ', Mi.readOrEmpty(s), ' '],
                                }),
                        ],
                    },
                    `${e}_value_${c}`,
                ),
            ),
        });
    }),
    Zi = 'Index_scrollAreaContent_52a570a',
    Qi = 'Index_scrollAreaContent__initialized_b2629fde',
    Yi = 'Index_item_6b7cdfb0',
    Ji = 'Index_separator_add04e19',
    eo = F('Statistics', 'Index_statistics_638478ff'),
    ao = F('StatisticsItem', Yi),
    to = F('StatisticsItemSeparator', Ji);
function so({ children: e, scrollbarProps: a, scrollAreaProps: t }) {
    var s;
    const r = M(),
        l = Cr(r.api);
    return n.jsxs(n.Fragment, {
        children: [
            n.jsx(K, {
                ...t,
                classNames: {
                    ...(null == t ? void 0 : t.classNames),
                    content: i(Zi, l && Qi, null == (s = null == t ? void 0 : t.classNames) ? void 0 : s.content),
                },
                children: e,
            }),
            n.jsx(L, { ...a }),
        ],
    });
}
const ro = r.forwardRef(function ({ scrollbarProps: e, scrollAreaProps: a, ...t }, s) {
    return n.jsx(eo, {
        ...t,
        ref: s,
        children: n.jsx($, { children: n.jsx(so, { ...t, scrollbarProps: e, scrollAreaProps: a }) }),
    });
});
((ro.Item = ao), (ro.Value = Ui), (ro.Label = Wi), (ro.Separator = to));
const lo = {
    scrollbar: 'PlayerStatistics_scrollbar_987bbca2',
    scrollAreaContent: 'PlayerStatistics_scrollAreaContent_8636fa99',
    listItemSeparator: 'PlayerStatistics_listItemSeparator_32247273',
    listItem: 'PlayerStatistics_listItem_27e9eeba',
    frontlinePramLabel: 'PlayerStatistics_frontlinePramLabel_5c3a9665',
    label: 'PlayerStatistics_label_fceb862d',
    value: 'PlayerStatistics_value_6831d5c1',
    zeroValue: 'PlayerStatistics_zeroValue_d98b2431',
    valueSeparator: 'PlayerStatistics_valueSeparator_dcf01904',
    listSubItem: 'PlayerStatistics_listSubItem_db8ef127',
    separator: 'PlayerStatistics_separator_4e8ac571',
    separatorSquare: 'PlayerStatistics_separatorSquare_5e440c20',
};
function no({ squareSize: e = 1, spacing: a = 2, backgroundColor: t = '#d9d9d9' }) {
    const s = r.useRef(null),
        [l, i] = r.useState(0),
        o = e + a,
        c = r.useCallback(() => {
            const e = s.current;
            if (null !== e) {
                const a = e.getBoundingClientRect().width,
                    t = Se(a);
                i(Math.floor(t / o));
            }
        }, [o]);
    return (
        Re(c, [s.current, o, c]),
        r.useEffect(() => Y(c), [c]),
        n.jsx('div', {
            ref: s,
            className: lo.separator,
            children: Array.from({ length: l }).map((a, s) =>
                n.jsx(
                    'div',
                    {
                        className: lo.separatorSquare,
                        style: { backgroundColor: t, width: `${e}rem`, height: `${e}rem`, left: s * o + 'rem' },
                    },
                    s,
                ),
            ),
        })
    );
}
const io = I.resolve('strings'),
    oo = (e) =>
        'boolean' == typeof e
            ? e
                ? io.readOrEmpty('fl_post_battle_results.battleInfo.yes')
                : io.readOrEmpty('fl_post_battle_results.battleInfo.no')
            : e;
function co({ list: e, frontLineParams: a, isGeneralInfo: t }) {
    return n.jsxs(ro, {
        scrollbarProps: { classNames: { base: lo.scrollbar } },
        scrollAreaProps: { classNames: { content: lo.scrollAreaContent } },
        children: [
            t &&
                Object.entries(a).map(([e, a]) =>
                    n.jsxs(
                        ro.Item,
                        {
                            className: lo.listItem,
                            children: [
                                n.jsx(ro.Label, {
                                    className: lo.frontlinePramLabel,
                                    labelKey: `fl_post_battle_results.battleInfo.labels_${e}`,
                                }),
                                n.jsx(ro.Separator, { className: lo.listItemSeparator, children: n.jsx(no, {}) }),
                                n.jsx('div', { className: i(lo.value, !a && lo.zeroValue), children: oo(a) }),
                            ],
                        },
                        e,
                    ),
                ),
            y(e, (e) =>
                n.jsxs(
                    r.Fragment,
                    {
                        children: [
                            n.jsxs(ro.Item, {
                                className: lo.listItem,
                                children: [
                                    n.jsx(ro.Label, {
                                        className: lo.label,
                                        labelKey: `battle_results.team.stats.labels_${e.labelKey}`,
                                    }),
                                    n.jsx(ro.Separator, { className: lo.listItemSeparator, children: n.jsx(no, {}) }),
                                    n.jsx(ro.Value, {
                                        classNames: {
                                            base: lo.value,
                                            zeroValue: lo.zeroValue,
                                            separator: lo.valueSeparator,
                                        },
                                        labelKey: e.labelKey,
                                        value: e.value,
                                        type: e.paramValueType,
                                    }),
                                ],
                            }),
                            void 0 !== e.details &&
                                y(e.details, (e) =>
                                    n.jsxs(
                                        ro.Item,
                                        {
                                            className: i(lo.listItem, lo.listSubItem),
                                            children: [
                                                n.jsx(ro.Label, {
                                                    className: lo.label,
                                                    labelKey: `battle_results.team.stats.labels_${e.labelKey}`,
                                                }),
                                                n.jsx(ro.Separator, {
                                                    className: lo.listItemSeparator,
                                                    children: n.jsx(no, {}),
                                                }),
                                                n.jsx(ro.Value, {
                                                    classNames: {
                                                        base: lo.value,
                                                        zeroValue: lo.zeroValue,
                                                        separator: lo.valueSeparator,
                                                    },
                                                    labelKey: e.labelKey,
                                                    value: e.value,
                                                    type: e.paramValueType,
                                                }),
                                            ],
                                        },
                                        e.labelKey,
                                    ),
                                ),
                        ],
                    },
                    e.labelKey,
                ),
            ),
        ],
    });
}
const mo = 'EfficiencyDetails_divider_85b11efd',
    uo = 'EfficiencyDetails_dividerImage_5b9d06d2',
    fo = 'EfficiencyDetails_closeIcon_8d81da90',
    _o = 'EfficiencyDetails_statistics_30a81815',
    po = F('EfficiencyDetails', 'EfficiencyDetails_efficiencyDetails_db8069eb', {
        variants: {
            team: {
                [rs]: 'EfficiencyDetails_efficiencyDetails__allies_20b1febc',
                [ls]: 'EfficiencyDetails_efficiencyDetails__enemies_23a29af',
            },
        },
    }),
    ho = o(function ({ team: e, className: a }) {
        const { model: t, controls: s } = ms(),
            l = t.teamsStatistic.selectedVehicle.get(),
            i = t.computes.efficiencyDetails(),
            o = r.useMemo(
                () =>
                    g((null == i ? void 0 : i.vehicles) ?? [], (e) => {
                        var a;
                        return l ? (null == (a = e.vehicle) ? void 0 : a.techName) === l : e.isGeneralInfo;
                    }),
                [l, null == i ? void 0 : i.vehicles],
            ),
            c = A(),
            d = r.useRef(null);
        return (
            r.useEffect(() => {
                const e = Pe.down(([, e]) => {
                        'outside' === e && s.teamEfficiency.selectRow(void 0);
                    }),
                    a = Ce(window, 'click', (e) => {
                        if (d.current) {
                            const { clientX: a, clientY: t } = e,
                                r = d.current.getBoundingClientRect();
                            (a >= r.left && a <= r.right && t >= r.top && t <= r.bottom) ||
                                !r.width ||
                                !r.height ||
                                s.teamEfficiency.selectRow(void 0);
                        }
                    });
                return () => {
                    (a(), e());
                };
            }, [s.teamEfficiency]),
            o || i
                ? n.jsxs(po, {
                      team: e,
                      className: a,
                      ref: d,
                      children: [
                          i &&
                              n.jsx(Fi, {
                                  team: e,
                                  account: i.account,
                                  squadIndex: i.squadIndex,
                                  achievements: i.achievements,
                                  personal: i.personal,
                                  vehicles: i.vehicles,
                              }),
                          o &&
                              n.jsx('div', {
                                  className: _o,
                                  children: n.jsx(co, {
                                      isGeneralInfo: o.isGeneralInfo,
                                      frontLineParams: {
                                          objectivesReached: o.objectivesReached,
                                          objectivesDestroyed: o.objectivesDestroyed,
                                          zoneCaptured: o.zoneCaptured,
                                      },
                                      list: o.detailedStatistics,
                                  }),
                              }),
                          n.jsx(Ei, { classNames: { base: mo, image: uo } }),
                          n.jsx(O, {
                              className: fo,
                              width: '24rem',
                              height: '24rem',
                              path: 'library.close',
                              onMouseEnter: () => {
                                  c.play('mouse-enter', { target: 'team-efficiency:efficiency-details:close' });
                              },
                              onClick: (e) => {
                                  (s.teamEfficiency.selectRow(void 0),
                                      c.play('close', {
                                          original: e,
                                          target: 'team-efficiency:efficiency-details:close',
                                      }));
                              },
                          }),
                      ],
                  })
                : null
        );
    }),
    bo = 'squadIndex',
    vo = 'account',
    go = 'rank',
    xo = 'damageDealt',
    yo = 'kills',
    No = 'earnedXp',
    jo = 'respawns',
    wo = 'achievements',
    Io = 'AccountInfoCell_accountInfo_dec8771',
    So = 'AccountInfoCell_accountName_758104df',
    Ro = 'AccountInfoCell_clanAbbreviation_99f1cc86',
    Po = 'AccountInfoCell_badge_b101914f',
    Co = 'AccountInfoCell_anonymizerIcon_a1d51ca4',
    Do = 'AccountInfoCell_igrIcon_158694e7',
    Ao = 'AccountInfoCell_stripe_fefba7b2',
    To = o(function ({ account: e, team: a, platoon: t, className: s, classNames: r, ...l }) {
        const { model: o } = ms(),
            c = o.computes.personalInfo(),
            d = cs({
                personal: c.account.username === e.username,
                platoonType: os(a, c.squadIndex, t),
                anonymizer: e.anonymizer,
            });
        return n.jsxs(we, {
            ...l,
            className: i(Io, s),
            children: [
                '' !== e.badge &&
                    n.jsx(we.Badge, {
                        size: we.Badge.sizes.x24x24,
                        badgeId: e.badge,
                        className: i(Po, null == r ? void 0 : r.badge),
                    }),
                n.jsx(we.Name, {
                    className: i(So, null == r ? void 0 : r.username),
                    children: n.jsx(Ie, { text: d ? e.fakeUsername : e.username }),
                }),
                '' !== e.clanAbbreviation &&
                    !d &&
                    n.jsx(we.ClanTag, {
                        className: i(Ro, null == r ? void 0 : r.clanAbbreviation),
                        children: n.jsx(B, {
                            path: 'common.clanTag',
                            params: { abbrev: e.clanAbbreviation },
                            brackets: { start: '{', end: '}' },
                        }),
                    }),
                0 !== e.igrType &&
                    n.jsx(we.IgrIcon, {
                        size: we.IgrIcon.sizes.x34x16,
                        className: i(Do, null == r ? void 0 : r.igrIcon),
                    }),
                '' !== e.suffixBadge &&
                    n.jsx(we.Stripe, {
                        size: we.Stripe.sizes.default,
                        badgeId: e.suffixBadge,
                        className: Ao,
                        classNames: null == r ? void 0 : r.suffixBadge,
                    }),
                e.anonymizer &&
                    n.jsx(we.AnonymizerIcon, {
                        size: we.AnonymizerIcon.sizes.x24x24,
                        className: i(Co, null == r ? void 0 : r.anonymizerIcon),
                    }),
            ],
        });
    }),
    Vo = 'AchievementsCell_achievementCell_e9bf973c',
    Bo = 'AchievementsCell_achievementsAmount_349c209a';
function ko({ achievements: e }) {
    const a = I.resolve('strings'),
        t = Ne({ body: y(Qt(e), (e) => a.readOrEmpty(`achievements.${e.name}`)).join('\n') }),
        s = e.length;
    return 0 === s
        ? null
        : n.jsxs('div', {
              ...t,
              className: Vo,
              children: [
                  n.jsx(O, { path: 'library.medal', width: '32rem', height: '32rem' }),
                  n.jsx('div', { className: Bo, children: z.formatNumber('integral', s) }),
              ],
          });
}
const Eo = { behaviour: fe.static, size: '32rem' },
    zo = { behaviour: fe.static, size: '294rem' },
    Ho = { behaviour: fe.static, size: '392rem' },
    Oo = { behaviour: fe.static, size: '496rem' },
    Fo = { behaviour: fe.static, size: '40rem' },
    Go = { behaviour: fe.static, size: '60rem' },
    Xo = { behaviour: fe.static, size: '56rem' },
    Wo = { behaviour: fe.static, size: '60rem' },
    $o = { behaviour: fe.static, size: '80rem' },
    Lo = { behaviour: fe.static, size: '40rem' },
    Mo = { behaviour: fe.static, size: '60rem' },
    Ko = { behaviour: fe.static, size: '56rem' },
    qo = { behaviour: fe.static, size: '60rem' },
    Uo = { behaviour: fe.static, size: '80rem' },
    Zo = { behaviour: fe.static, size: '40rem' },
    Qo = { behaviour: fe.static, size: '56rem' },
    Yo = { behaviour: fe.static, size: '40rem' },
    Jo = {
        [bo]: { [_e.extraSmall]: Eo, [_e.medium]: Eo, [_e.large]: Eo, [_e.extraLarge]: Eo },
        [vo]: { [_e.extraSmall]: zo, [_e.medium]: Ho, [_e.large]: Ho, [_e.extraLarge]: Oo },
        [go]: { [_e.extraSmall]: Fo, [_e.medium]: Go, [_e.large]: Go, [_e.extraLarge]: Go },
        [xo]: { [_e.extraSmall]: Xo, [_e.medium]: Wo, [_e.large]: Wo, [_e.extraLarge]: $o },
        [yo]: { [_e.extraSmall]: Lo, [_e.medium]: Mo, [_e.large]: Mo, [_e.extraLarge]: Mo },
        [No]: { [_e.extraSmall]: Ko, [_e.medium]: qo, [_e.large]: qo, [_e.extraLarge]: Uo },
        [jo]: { [_e.extraSmall]: Zo, [_e.medium]: Qo, [_e.large]: Qo, [_e.extraLarge]: Qo },
        [wo]: { [_e.extraSmall]: Yo, [_e.medium]: Yo, [_e.large]: Yo, [_e.extraLarge]: Yo },
    },
    ec = {
        root: 'HeaderCell_root_204e6a44',
        'media-wrapper': 'HeaderCell_media-wrapper_204e6a44',
        headerCell__asc: 'HeaderCell_headerCell__asc_204e6a44',
        headerCell__desc: 'HeaderCell_headerCell__desc_dc5a7202',
        headerCell: 'HeaderCell_headerCell_5b34d1b1',
        headerCell__icon: 'HeaderCell_headerCell__icon_cfa14ddf',
        headerCell__text: 'HeaderCell_headerCell__text_b476890c',
        icon: 'HeaderCell_icon_5a06734a',
    },
    ac = [go, jo],
    tc = {
        [bo]: 'library.shield',
        [go]: 'rank',
        [xo]: 'library.cross_with_gap',
        [yo]: 'library.crossed_tank',
        [No]: 'library.star',
        [jo]: 'respawns',
        [wo]: 'library.medal',
    },
    sc = {
        [bo]: 'squadHeader',
        [vo]: 'playerHeader',
        [go]: 'epicRankHeader',
        [xo]: 'damageHeader',
        [yo]: 'fragHeader',
        [No]: 'xpHeader',
        [jo]: 'epicRespawnHeader',
        [wo]: 'medalHeader',
    },
    rc = r.forwardRef(function ({ name: e, team: a, column: t, className: s, ...r }, l) {
        const o = t.getIsSorted(),
            c = I.resolve('strings'),
            d = Ne({
                header: c.readOrEmpty(`battle_results.team.${sc[e]}.header`),
                body: c.readOrEmpty(`battle_results.team.${sc[e]}.body`),
            }),
            m = e === vo,
            u = ac.includes(e);
        return n.jsx('div', {
            ...r,
            ...d,
            ref: l,
            className: i(ec.headerCell, m ? ec.headerCell__text : ec.headerCell__icon, o && ec[`headerCell__${o}`], s),
            children: m
                ? c.readOrEmpty(`battle_results.team.stats.${a}`)
                : u
                  ? n.jsx('div', {
                        style: {
                            backgroundImage: `url(${R.images.frontline.gui.maps.icons.postBattleResults.$dyn(tc[e])})`,
                        },
                        className: ec.icon,
                    })
                  : n.jsx(O, { path: tc[e], className: ec.icon }),
        });
    }),
    lc = 'NumberValueCell_numberValueCell_35482257';
function nc({ value: e, className: a, showZero: t = !0 }) {
    return !1 === t && 0 === e ? null : n.jsx('div', { className: i(lc, a), children: z.formatNumber('integral', e) });
}
const ic = {
        root: 'PlatoonCell_root_45cd697',
        'media-wrapper': 'PlatoonCell_media-wrapper_45cd697',
        platoon: 'PlatoonCell_platoon_5fe0374b',
        platoonText: 'PlatoonCell_platoonText_b6a98287',
        platoonText__personal: 'PlatoonCell_platoonText__personal_d021db4c',
        platoonText__alien: 'PlatoonCell_platoonText__alien_9767e814',
    },
    oc = { [is]: 'library.platoon_indicator_gray', [ns]: 'library.platoon_indicator_orange' },
    cc = o(function ({ platoon: e, team: a }) {
        const { model: t } = ms(),
            s = os(a, t.computes.personalInfo().squadIndex, e);
        if (null === s) return null;
        const r = oc[s];
        return n.jsxs('div', {
            className: ic.platoon,
            children: [
                n.jsx(O, { path: r, width: '32rem', height: '32rem' }),
                n.jsx('div', { className: i(ic.platoonText, ic[`platoonText__${s}`]), children: e }),
            ],
        });
    }),
    dc = 'RankCell_5390b3e9';
function mc({ rank: e }) {
    return n.jsx('div', {
        style: { backgroundImage: `url(${R.images.frontline.gui.maps.icons.ranksSilver.c_24x24.$dyn(`rank_${e}`)})` },
        className: dc,
    });
}
const uc = 'EfficiencyTable_efficiencyTable__allies_b2f99733',
    fc = 'EfficiencyTable_efficiencyTable__enemies_1ba35ae7',
    _c = 'EfficiencyTable_header_412b5b7b',
    pc = 'EfficiencyTable_rowsWrapper_da034938',
    hc = 'EfficiencyTable_efficiencyTable_e622a43e',
    bc = 'EfficiencyTable_alignLeft_a52cfd11',
    vc = 'EfficiencyTable_alignRight_46cf6a64',
    gc = 'EfficiencyTable_table_f467cc44',
    xc = 'EfficiencyTable_tableBody_5b14613b',
    yc = 'EfficiencyTable_scrollBar_f4e5aa11',
    Nc = 'EfficiencyTable_scrollAreaContent_4fa5a5ab',
    jc = 'EfficiencyTable_mask_8fbe6740',
    wc = {
        root: 'TableBodyRow_root_5ecfc9f2',
        'media-wrapper': 'TableBodyRow_media-wrapper_5ecfc9f2',
        tableBodyRow: 'TableBodyRow_tableBodyRow_be19874',
        tableBodyRow__selected: 'TableBodyRow_tableBodyRow__selected_9cd5fe77',
        selectedRowTail: 'TableBodyRow_selectedRowTail_595bad28',
        selectedRowTail__enemies: 'TableBodyRow_selectedRowTail__enemies_15d3ff4e',
        rowDivider: 'TableBodyRow_rowDivider_7f22c0ad',
        rowDividerImage: 'TableBodyRow_rowDividerImage_9c09afd1',
        accountInfo: 'TableBodyRow_accountInfo_5ecfc9f2',
        numberValue: 'TableBodyRow_numberValue_8b5b22c7',
        tableBodyRow__personalSquad: 'TableBodyRow_tableBodyRow__personalSquad_5ecfc9f2',
        tableBodyRow__personal: 'TableBodyRow_tableBodyRow__personal_5ecfc9f2',
        accountName: 'TableBodyRow_accountName_4ede8694',
        tableBodyRow__teamKiller: 'TableBodyRow_tableBodyRow__teamKiller_5ecfc9f2',
        clanAbbreviation: 'TableBodyRow_clanAbbreviation_5ecfc9f2',
        selectedOverlay: 'TableBodyRow_selectedOverlay_7f267587',
        selectedOverlayDivider: 'TableBodyRow_selectedOverlayDivider_35a0f807',
        selectedOverlayDivider__bottom: 'TableBodyRow_selectedOverlayDivider__bottom_20b949b4',
        selectedOverlayImage: 'TableBodyRow_selectedOverlayImage_9c09afd1',
    },
    Ic = p(),
    Sc = (e, a, t) => {
        const s = e.getValue('account'),
            r = e.getValue('squadIndex');
        return cs({
            personal: a.account.username === s.username,
            platoonType: os(t, a.squadIndex, r),
            anonymizer: s.anonymizer,
        })
            ? s.fakeUsername
            : s.username;
    },
    Rc = ({ team: e, personalInfo: a, breakpointName: t }) => {
        const s = (t, s) =>
                ((e, a, t, s) => {
                    const r = Sc(e, t, s),
                        l = Sc(a, t, s);
                    return r.localeCompare(l);
                })(t, s, a, e),
            r = 'small' === t ? _e.extraSmall : t;
        return [
            Ic.accessor('squadIndex', {
                id: bo,
                header: (e) => n.jsx(rc, { name: bo, column: e.column }),
                sortingFn: (e, a) => {
                    const t = a.getValue('squadIndex') - e.getValue('squadIndex');
                    return 0 !== t ? t : s(e, a);
                },
                cell: (a) => n.jsx(cc, { team: e, platoon: a.cell.getValue() }),
                meta: { column: Jo[bo][r] },
            }),
            Ic.accessor('account', {
                id: vo,
                header: (a) => n.jsx(rc, { team: e, name: vo, column: a.column }),
                sortDescFirst: !1,
                sortingFn: s,
                cell: (a) =>
                    n.jsx(To, {
                        account: a.cell.getValue(),
                        team: e,
                        platoon: a.row.original.squadIndex,
                        className: wc.accountInfo,
                        classNames: { username: wc.accountName, clanAbbreviation: wc.clanAbbreviation },
                    }),
                meta: { column: Jo[vo][r], className: bc },
            }),
            Ic.accessor('rank', {
                id: go,
                header: (e) => n.jsx(rc, { name: go, column: e.column }),
                sortingFn: (e, a) => e.getValue('rank') - a.getValue('rank') || s(e, a),
                cell: (e) => n.jsx(mc, { rank: e.cell.getValue() }),
                meta: { column: Jo[go][r] },
            }),
            Ic.accessor('efficiencyValues', {
                id: xo,
                header: (e) => n.jsx(rc, { name: xo, column: e.column }),
                sortingFn: (e, a) =>
                    (e.getValue('damageDealt').damageDealt ?? 0) - (a.getValue('damageDealt').damageDealt ?? 0) ||
                    s(e, a),
                cell: (e) => n.jsx(nc, { value: e.getValue().damageDealt ?? 0, className: wc.numberValue }),
                meta: { column: Jo[xo][r], className: vc },
            }),
            Ic.accessor('efficiencyValues', {
                id: yo,
                header: (e) => n.jsx(rc, { name: yo, column: e.column }),
                sortingFn: (e, a) =>
                    e.getValue('kills').subtractedAlliesKills - a.getValue('kills').subtractedAlliesKills || s(e, a),
                cell: (e) =>
                    n.jsx(nc, { showZero: !1, value: e.getValue().subtractedAlliesKills, className: wc.numberValue }),
                meta: { column: Jo[yo][r] },
            }),
            Ic.accessor('efficiencyValues', {
                id: No,
                header: (e) => n.jsx(rc, { name: No, column: e.column }),
                sortingFn: (e, a) => {
                    var t, r;
                    return (
                        ((null == (t = e.getValue('earnedXp')) ? void 0 : t.earnedXp) ?? 0) -
                            ((null == (r = a.getValue('earnedXp')) ? void 0 : r.earnedXp) ?? 0) || s(e, a)
                    );
                },
                cell: (e) => n.jsx(nc, { value: e.getValue().earnedXp ?? 0, className: wc.numberValue }),
                meta: { column: Jo[No][r], className: vc },
            }),
            Ic.accessor('respawns', {
                id: jo,
                header: (e) => n.jsx(rc, { name: jo, column: e.column }),
                sortingFn: (e, a) => e.getValue('respawns') - a.getValue('respawns') || s(e, a),
                cell: (e) => n.jsx(nc, { value: e.row.original.respawns, showZero: !1, className: wc.numberValue }),
                meta: { column: Jo[jo][r] },
            }),
            Ic.accessor('achievements', {
                id: wo,
                header: (e) => n.jsx(rc, { name: wo, column: e.column }),
                sortingFn: (e, a) => e.getValue('achievements').length - a.getValue('achievements').length || s(e, a),
                cell: (e) => n.jsx(ko, { achievements: e.getValue() }),
                meta: { column: Jo[wo][r], className: bc },
            }),
        ];
    },
    Pc = 'Header_row_e61ae0d9',
    Cc = 'Header_rowDivider_f54d9df6',
    Dc = 'Header_rowDividerImage_19f6e11',
    Ac = 'Header_cell_70aa1da5';
function Tc({ className: e }) {
    const { table: a } = be(),
        t = A();
    return n.jsxs(ve.Header, {
        className: e,
        children: [
            n.jsx(Ei, { classNames: { base: Cc, image: Dc } }),
            y(a.getHeaderGroups(), (e, a) =>
                n.jsx(
                    ve.Row,
                    {
                        className: Pc,
                        children: y(e.headers, (e, s) => {
                            return n.jsx(
                                ve.Cell,
                                {
                                    onClick:
                                        ((r = e.column.getToggleSortingHandler()),
                                        function (e) {
                                            (null == r || r(e),
                                                t.play('click', {
                                                    original: e,
                                                    target: 'team-efficiency:efficiency-table:header:cell',
                                                }));
                                        }),
                                    onMouseEnter: (e) =>
                                        t.play('mouse-enter', {
                                            target: 'team-efficiency:efficiency-table:header:cell',
                                            original: e,
                                        }),
                                    cell: { ...e, rowIndex: a, index: s, tablePart: ge.header },
                                    className: Ac,
                                    children: !e.isPlaceholder && h(e.column.columnDef.header, e.getContext()),
                                },
                                e.id,
                            );
                            var r;
                        }),
                    },
                    e.id,
                ),
            ),
        ],
    });
}
const Vc = 'SelectedRowTail_selectedRowTail_8abda9c8',
    Bc = 'SelectedRowTail_selectedRowTail__hasWidth_6cb87e09',
    kc = 'SelectedRowTail_selectedRowVerticalLine_c502cc58',
    Ec = 'SelectedRowTail_selectedRowTriangle_6f2b6bb3',
    zc = 'SelectedRowTail_rowDivider_8fbc881',
    Hc = 'SelectedRowTail_rowDivider__bottom_4111cb99',
    Oc = 'SelectedRowTail_rowDividerImage_d11f29d5';
function Fc({ className: e, short: a }) {
    return n.jsxs('div', {
        className: i(Vc, !a && Bc, e),
        children: [
            n.jsx(Ei, { classNames: { base: zc, image: Oc } }),
            n.jsx(Ei, { classNames: { base: i(zc, Hc), image: Oc } }),
            n.jsx('div', { className: kc }),
            n.jsx('div', { className: Ec }),
        ],
    });
}
const Gc = 'personal',
    Xc = 'personalSquad',
    Wc = 'none',
    $c = o(function ({ row: e, team: a, rowIndex: t, scrollbarVisible: s }) {
        const { model: r, controls: l } = ms(),
            o = A(),
            c = De(
                (t) => {
                    (t.stopPropagation(),
                        o.play('click', { original: t, target: 'team-efficiency:efficiency-table:body:row' }),
                        l.teamEfficiency.selectRow({ team: a, username: e.original.account.username }));
                },
                [l.teamEfficiency, e.original.account.username, o, a],
                20,
            ),
            d = r.teamsStatistic.selectedRow.get(),
            m = r.computes.personalInfo(),
            u = (() => {
                if (m.account.username === e.original.account.username) return Gc;
                return os(a, m.squadIndex, e.original.squadIndex) === ns ? Xc : Wc;
            })(),
            f = e.original.account.teamKiller,
            _ = (null == d ? void 0 : d.team) === a && d.username === e.original.account.username,
            p = Ae({ args: { databaseID: e.original.databaseId } });
        return n.jsxs(ve.Row, {
            ...(u !== Gc && p),
            onMouseEnter: (e) =>
                o.play('mouse-enter', { target: 'team-efficiency:efficiency-table:body:row', original: e }),
            className: i(
                wc.tableBodyRow,
                _ && wc.tableBodyRow__selected,
                u !== Wc && wc[`tableBodyRow__${u}`],
                f && wc.tableBodyRow__teamKiller,
            ),
            onClick: c,
            children: [
                n.jsxs('div', {
                    className: wc.selectedOverlay,
                    children: [
                        n.jsx(Ei, { classNames: { base: wc.selectedOverlayDivider, image: wc.selectedOverlayImage } }),
                        n.jsx(Ei, {
                            classNames: {
                                base: i(wc.selectedOverlayDivider, wc.selectedOverlayDivider__bottom),
                                image: wc.selectedOverlayImage,
                            },
                        }),
                        n.jsx(Fc, {
                            short: s && a === rs,
                            className: i(wc.selectedRowTail, wc[`selectedRowTail__${a}`]),
                        }),
                    ],
                }),
                n.jsx(Ei, { classNames: { base: wc.rowDivider, image: wc.rowDividerImage } }),
                y(e.getVisibleCells(), (e, a) =>
                    n.jsx(
                        ve.Cell,
                        {
                            cell: { ...e, rowIndex: t, index: a, tablePart: ge.body },
                            children: h(e.column.columnDef.cell, e.getContext()),
                        },
                        e.id,
                    ),
                ),
            ],
        });
    });
function Lc({ team: e }) {
    const { table: a } = be(),
        { api: t } = M(),
        s = Te(),
        l = r.useRef(null),
        [i, o] = r.useState(!1),
        [c, d] = u(() => ({ from: { maskSize: '100% 100%' } }));
    return (
        r.useEffect(() => {
            function e() {
                s.run(() => {
                    (!(function () {
                        const [, e] = t.getBounds();
                        o(e > 0);
                    })(),
                        (function () {
                            const [, e] = t.getBounds(),
                                a = (t.animationScroll.scrollPosition.get() / e) * 7;
                            d.start({ to: { maskSize: `100% ${e > 0 ? 100 + a : 107}%` } });
                        })());
                });
            }
            return (
                t.events.on('recalculateContent', e),
                t.events.on('rest', e),
                t.events.on('change', e),
                t.events.on('resizeHandled', e),
                e(),
                () => {
                    (t.events.off('recalculateContent', e),
                        t.events.off('rest', e),
                        t.events.off('change', e),
                        t.events.off('resizeHandled', e));
                }
            );
        }, [t, s, d]),
        n.jsxs(ve.Body, {
            className: xc,
            children: [
                n.jsx(m.div, {
                    className: jc,
                    style: c,
                    children: n.jsx(K, {
                        classNames: { content: Nc },
                        children: n.jsx('div', {
                            ref: l,
                            className: pc,
                            children: y(a.getRowModel().rows, (a, t) =>
                                n.jsx($c, { row: a, rowIndex: t, team: e, scrollbarVisible: i }, a.id),
                            ),
                        }),
                    }),
                }),
                n.jsx(L, { classNames: { base: yc } }),
            ],
        })
    );
}
const Mc = F('TeamEfficiencyTable', hc, { variants: { team: { [rs]: uc, [ls]: fc } } }),
    Kc = {
        [Ue.Squad]: bo,
        [Ue.Player]: vo,
        [Ue.Rank]: go,
        [Ue.Damage]: xo,
        [Ue.Frag]: yo,
        [Ue.Xp]: No,
        [Ue.Respawns]: jo,
        [Ue.Medal]: wo,
    },
    qc = o(({ team: e, data: a, className: t }) => {
        const { model: s, controls: l } = ms(),
            i = s.computes.personalInfo(),
            o = s.teamsStatistic.sorting.get(),
            c = r.useMemo(() => [{ id: Kc[o.column], desc: o.sortDirection === Ze.Desc }], [o.column, o.sortDirection]),
            d = xe().breakpoint.name,
            m = r.useCallback(
                (e) => {
                    const a = (e instanceof Function ? e(c) : e)[0] ?? { id: go, desc: !0 };
                    l.teamEfficiency.sort({
                        column: Object.keys(Kc).find((e) => Kc[e] === a.id) || Ue.Rank,
                        sortDirection: a.desc ? Ze.Desc : Ze.Asc,
                    });
                },
                [c, l.teamEfficiency],
            ),
            u = r.useMemo(() => Rc({ team: e, personalInfo: i, breakpointName: d }), [e, d, i]);
        return (
            b(Ve(d), `Such breakpoint ${d} is not supported`),
            n.jsx(ye, {
                columns: u,
                data: a,
                enableMultiRowSelection: !1,
                enableSortingRemoval: !1,
                sorting: c,
                onSortingChange: m,
                getRowId: (e) => e.account.username,
                enableSorting: !0,
                children: n.jsx(Mc, {
                    team: e,
                    className: t,
                    children: n.jsxs(
                        ve,
                        {
                            className: gc,
                            children: [n.jsx(Tc, { className: _c }), n.jsx($, { children: n.jsx(Lc, { team: e }) })],
                        },
                        d,
                    ),
                }),
            })
        );
    }),
    Uc = 'TeamEfficiency_wrapper_a2a49ce',
    Zc = 'TeamEfficiency_table_5763cf17',
    Qc = 'TeamEfficiency_table__hidden_e8864815',
    Yc = 'TeamEfficiency_details_f087bb8e',
    Jc = 'TeamEfficiency_details__visible_eaf91b76',
    ed = F('TeamEfficiency', 'TeamEfficiency_ab8dfa62'),
    ad = o(function ({ className: e }) {
        const { model: a } = ms(),
            t = a.teamsStatistic.allies.get(),
            s = a.teamsStatistic.enemies.get(),
            r = a.teamsStatistic.selectedRow.get();
        return n.jsx(ed, {
            className: e,
            children: n.jsxs('div', {
                className: Uc,
                children: [
                    n.jsx(ho, { team: ls, className: i(Yc, (null == r ? void 0 : r.team) === ls && Jc) }),
                    n.jsx(qc, { data: t, team: rs, className: i(Zc, (null == r ? void 0 : r.team) === ls && Qc) }),
                    n.jsx(ho, { team: rs, className: i(Yc, (null == r ? void 0 : r.team) === rs && Jc) }),
                    n.jsx(qc, { data: s, team: ls, className: i(Zc, (null == r ? void 0 : r.team) === rs && Qc) }),
                ],
            }),
        });
    }),
    td = {
        root: 'PostBattleResultsView_root_b9a3f0e8',
        'media-wrapper': 'PostBattleResultsView_media-wrapper_b9a3f0e8',
        base: 'PostBattleResultsView_45b03b90',
        tab: 'PostBattleResultsView_tab_7bdba7b6',
        navigation: 'PostBattleResultsView_navigation_9a479727',
        navigation__disabled: 'PostBattleResultsView_navigation__disabled_26858bad',
        switcher: 'PostBattleResultsView_switcher_649cb9a2',
        content__overview: 'PostBattleResultsView_content__overview_b9a3f0e8',
        tab__overview: 'PostBattleResultsView_tab__overview_a556940',
        content__teamScore: 'PostBattleResultsView_content__teamScore_b9a3f0e8',
        tab__teamScore: 'PostBattleResultsView_tab__teamScore_a556940',
        content__financialReport: 'PostBattleResultsView_content__financialReport_b9a3f0e8',
        tab__financialReport: 'PostBattleResultsView_tab__financialReport_a556940',
        info: 'PostBattleResultsView_info_8c8cdfe',
    },
    sd = F('PostBattle', td.base),
    rd = F('PostBattleNavigation', td.navigation);
function ld() {
    const { active: e } = Be();
    return n.jsxs('div', {
        className: td[`content__${e}`],
        children: [
            n.jsx(Bi, { className: i(td.tab, td.tab__overview) }),
            n.jsx(ad, { className: i(td.tab, td.tab__teamScore) }),
            n.jsx(Rn, { className: i(td.tab, td.tab__financialReport) }),
        ],
    });
}
const nd = o(function () {
    const e = I.resolve('strings'),
        { battleInfoRef: a, navigationRef: t, completedSteps: s } = hs(),
        [r] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: t })),
        [l] = u(() => ({ from: { opacity: 0 }, ref: a })),
        { model: o, controls: c } = ms(),
        d = o.battleInfo.get(),
        { active: f } = Be();
    return (
        ke(Ee.ESCAPE, c.close),
        ze(() => {
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
        n.jsxs(sd, {
            className: i(td.base, td[`base__${f}`]),
            children: [
                n.jsx(ld, {}),
                n.jsx(m.div, {
                    style: r,
                    children: n.jsx(rd, {
                        className: !s.has(us.second) && td.navigation__disabled,
                        children: n.jsxs(Oe.Switcher, {
                            className: td.switcher,
                            children: [
                                n.jsx(Oe.Tab, {
                                    tabId: Ye.overview,
                                    children: z.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.battleResults'),
                                    ),
                                }),
                                n.jsx(Oe.Tab, {
                                    tabId: Ye.teamScore,
                                    children: z.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.teamEfficiency'),
                                    ),
                                }),
                                n.jsx(Oe.Tab, {
                                    tabId: Ye.financialReport,
                                    children: z.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.financialReport'),
                                    ),
                                }),
                            ],
                        }),
                    }),
                }),
                d &&
                    n.jsx(m.div, {
                        className: td.info,
                        style: l,
                        children: n.jsxs(ys, {
                            children: [
                                n.jsx(ys.Arena, {
                                    arenaName: d.arenaName,
                                    scenario: d.scenario,
                                    finishReason: d.finishReason,
                                }),
                                n.jsx(ys.StartTime, {
                                    battleStartTime: d.battleStartTime,
                                    battleDuration: d.battleDuration,
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
});
function id() {
    const e = Fe(),
        { size: a } = te({ size: Ge.small }, { large: { size: Ge.medium }, extraLarge: { size: Ge.large } });
    return n.jsx(Oe, {
        theme: 'primary',
        size: a,
        active: aa(e.location),
        onActiveChange: (a) => {
            a in Ye ? e.push(ea[a]) : console.error(`Invalid tab ID: ${a}`);
        },
        children: n.jsx(bs, { children: n.jsx(nd, {}) }),
    });
}
const od = Xe({
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
});
Me(
    new We()
        .add(ds)
        .addWithProps($e, { soundsOverrides: od })
        .addWithProps(Le, { context: 'model.router' })
        .render(n.jsx(id, {})),
)
    .then(() => Ke(document.getElementById('root')))
    .then(() => qe());
