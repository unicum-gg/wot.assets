import {
    t as e,
    s as a,
    o as t,
    g as s,
    r,
    a1 as n,
    j as i,
    f as l,
    W as o,
    a2 as c,
    a3 as d,
    q as m,
    m as u,
    a4 as f,
    a5 as _,
    a6 as p,
    a7 as h,
} from '../../../chunks/vendor.js';
import {
    s as b,
    a8 as v,
    bu as g,
    ap as x,
    E as y,
    cH as N,
    j,
    cI as w,
    o as I,
    x as S,
    i as C,
    f as P,
    K as T,
    a4 as D,
    cJ as V,
    cK as A,
    a9 as B,
    bQ as k,
    bS as E,
    as as H,
    cL as z,
    aa as O,
    ac as F,
    bH as X,
    al as G,
    aj as $,
    H as L,
    F as M,
    a3 as W,
    a7 as K,
    P as q,
    aU as U,
    a6 as Z,
    I as Y,
    aT as Q,
    aQ as J,
    b0 as ee,
    a_ as ae,
    b5 as te,
    cM as se,
    $ as re,
    cN as ne,
    ah as ie,
    cO as le,
    cP as oe,
    m as ce,
    cc as de,
    Z as me,
    c3 as ue,
    cQ as fe,
    bw as _e,
    ab as pe,
    y as he,
    an as be,
    cR as ve,
    cS as ge,
    cT as xe,
    ay as ye,
    cU as Ne,
    aq as je,
    cV as we,
    T as Ie,
    bV as Re,
    cW as Se,
    bj as Ce,
    bl as Pe,
    bs as Te,
    cX as De,
    O as Ve,
    cY as Ae,
    cZ as Be,
    ax as ke,
    aw as Ee,
    bi as He,
    b3 as ze,
    cq as Oe,
    ae as Fe,
    cs as Xe,
    c_ as Ge,
    bF as $e,
    c8 as Le,
    cz as Me,
    cA as We,
    c$ as Ke,
    d0 as qe,
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
function Ye(t) {
    return function (s) {
        return t(e(() => a(s)));
    };
}
const Qe = { overview: 'overview', teamScore: 'teamScore', financialReport: 'financialReport' },
    Je = Object.values(Qe),
    ea = {
        [Qe.overview]: '/fl_battleResults/overview',
        [Qe.teamScore]: '/fl_battleResults/teamScore',
        [Qe.financialReport]: '/fl_battleResults/financialReport',
    };
function aa(e) {
    const a = Je.find((a) => ea[a] === e);
    return (b(void 0 !== a, `The post battle screen is not found by path ${e}`), a);
}
const ta = 'xp',
    sa = 'freeXP',
    ra = 'credits',
    na = 'gold',
    ia = 'originalCrystals',
    la = 'eventCrystals',
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
    wa = 'wotPlusProBoostXP',
    Ia = 'totalXP',
    Ra = 'originalFreeXP',
    Sa = 'achievementFreeXP',
    Ca = 'igrBonusFreeXP',
    Pa = 'firstWinFreeXP',
    Ta = 'additionalBonusFreeXP',
    Da = 'boostersFreeXP',
    Va = 'militaryManeuversFreeXP',
    Aa = 'eventFreeXP',
    Ba = 'premiumVehicleFreeXP',
    ka = 'wotPlusBonusFreeXP',
    Ea = 'totalFreeXP',
    Ha = 'baseEarnedCredits',
    za = 'squadBonusCredits',
    Oa = 'achievementCredits',
    Fa = 'boostersCredits',
    Xa = 'petSystemBonusCredits',
    Ga = 'battlePaymentsCredits',
    $a = 'eventPaymentsCredits',
    La = 'referralBonusCredits',
    Ma = 'wotPlusBonusCredits',
    Wa = 'wotPlusProBoostCredits',
    Ka = 'friendlyFirePenaltyCredits',
    qa = 'friendlyFireCompensationCredits',
    Ua = 'piggyBankCredits',
    Za = 'autoRepairCredits',
    Ya = 'autoLoadCredits',
    Qa = 'autoEquipCredits',
    Ja = 'intermediateTotalCredits',
    et = 'totalCredits',
    at = 'goldEventPayments',
    tt = 'goldPiggyBank',
    st = 'intermediateTotalGold',
    rt = 'totalGold',
    nt = 'aogasFactor',
    it = 'deserterViolation',
    lt = 'afkViolation',
    ot = 'suicideViolation',
    ct = new Set([ua, ga, ya, Na, ba]),
    dt = new Set([Va]),
    mt = new Set([Ha, za, Oa, Fa, Ga, La, Xa, Ma, Wa, it, ot, lt, Ka, qa, nt, Za, Ya, Qa]),
    ut = {
        [ma]: Sa,
        [pa]: Ta,
        [lt]: lt,
        [nt]: nt,
        [ha]: Da,
        [it]: it,
        [va]: Aa,
        [_a]: Pa,
        [fa]: Ca,
        [da]: Ra,
        [xa]: Ba,
        [ot]: ot,
        [Ia]: Ea,
        [ja]: ka,
        [wa]: 'wotPlusProBoostFreeXP',
    },
    ft = { [$a]: at, [Ja]: st, [Ua]: tt, [et]: rt },
    _t = [ia, la, oa, ca],
    pt = [Ha, za, Oa, Fa, Xa, Ga, $a, at, La, Ma, Wa, it, ot, lt, Ka, qa, nt, Ja, st, Za, Ya, Qa, et, rt, Ua, tt],
    ht = new Set([ca, da, Ra, Ia, Ea, Ha, Ja, st, Za, Ya, Qa, et, rt, Ua, tt]),
    bt = new Set([et, rt, st, Ja]),
    vt = 'multiplier',
    gt = 'firstWinMultiplier',
    xt = 'fractionalMultiplier',
    yt = 'percent',
    Nt = 'plus',
    jt = {
        [fa]: vt,
        [Ca]: vt,
        [_a]: gt,
        [Pa]: gt,
        [pa]: vt,
        [Ta]: vt,
        [nt]: xt,
        [it]: yt,
        [ot]: yt,
        [lt]: yt,
        [Ua]: Nt,
        [tt]: Nt,
    };
function wt(e) {
    const a = Number(e.trim());
    return Number.isNaN(a)
        ? (console.error(`Invalid referral factor: "${e}" is not a number.`), 0)
        : Math.round(100 * a);
}
function It(e) {
    const a = Number(e.trim());
    return Number.isNaN(a) ? (console.error(`Invalid percent bonus: "${a}" is not a number.`), 0) : a;
}
function Rt(e) {
    return ht.has(e.paramName);
}
function St(e) {
    return 'True' === e?.recordsItemsDetails?.hasAogasFine;
}
function Ct(e) {
    return 'True' === e?.recordsItemsDetails?.isEnabled;
}
const Pt = { [da]: Rt, [Ra]: Rt, [Ia]: Rt, [Ea]: Rt, [nt]: St, [ja]: Ct, [ka]: Ct },
    Tt = {
        [Ha]: Rt,
        [Ja]: Rt,
        [st]: Rt,
        [Za]: Rt,
        [Ya]: Rt,
        [Qa]: Rt,
        [et]: Rt,
        [rt]: Rt,
        [nt]: St,
        [Ma]: Ct,
        [Ua]: Rt,
    };
function Dt(e) {
    return !1 !== bt.has(e.paramName) && 0 === e.standard.gold && 0 === e.premium.gold;
}
const Vt = { [Ja]: (e) => !1 === Dt(e), [et]: (e) => !1 === Dt(e), [Ua]: (e, a) => a },
    At = { [ta]: 'library.xp', [sa]: 'library.freeXp', [ra]: 'library.credits', [na]: 'library.gold' },
    Bt = [nt, it, lt, ot];
function kt(e) {
    return e === ta ? 'library.x2_combatExp' : 'library.x2_combatFreeExp';
}
const Et = {
    [fa]: (e) => 'library.x2_combatExp',
    [Ca]: (e) => 'library.x2_combatExp',
    [_a]: kt,
    [Pa]: kt,
    [pa]: kt,
    [Ta]: kt,
};
function Ht(e, a) {
    if (void 0 === a || Bt.includes(a)) return;
    const t = Et[a];
    return t ? t(e) : At[e];
}
var zt = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
        zt || {},
    ),
    Ot = ((e) => (
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
    ))(Ot || {});
function Ft(e) {
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
const Xt = [Ia, Ja];
function Gt(e, a) {
    const {
        recordsItemsDetails: t,
        baseValue: s,
        premiumValue: r,
        currencyType: n,
        paramName: i,
    } = {
        paramName: (l = e).paramName,
        currencyType: l.currencyType,
        baseValue: l.baseValue,
        premiumValue: l.premiumValue,
        recordsItemsDetails: v(l.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
    var l;
    const o = a ? r : s,
        c = o >= 0 ? o : 0;
    return { paramName: i, type: n, visibleIfZero: Xt.includes(i) || 'True' === t.isAvailable, value: c };
}
function $t(e) {
    return {
        name: e.name,
        groupID: e.groupID,
        iconName: e.iconName,
        tooltipArgs: e.tooltipArgs,
        tooltipId: e.tooltipId,
    };
}
function Lt(e) {
    return { labelKey: e.labelKey, paramValueType: e.paramValueType, value: y(e?.value ?? [], (e) => e) };
}
function Mt(e) {
    return {
        ...Lt({ label: e.label, labelKey: e.labelKey, paramValueType: e.paramValueType, value: y(e.value, (e) => e) }),
        details: y(e.details, (e) => Lt(e)),
    };
}
function Wt(e) {
    return {
        isGeneralInfo: e.isGeneralInfo,
        objectivesReached: e.objectivesReached,
        objectivesDestroyed: e.objectivesDestroyed,
        zoneCaptured: e.zoneCaptured,
        detailedStatistics: y(e.detailedStatistics, Mt),
        vehicle: e.vehicle.longName ? { ...w(e.vehicle), longName: e.vehicle.longName } : null,
    };
}
function Kt(e) {
    const a = g(e.vehiclesStats, (e) => e.isGeneralInfo)?.detailedStatistics ?? [],
        t = g(a, (e) => e.labelKey === Ot.TeamHitsDamage)?.value,
        s = void 0 !== t ? x(t, 0) : 0,
        r = e.efficiencyValues.kills - s;
    return {
        personal: e.isPersonal,
        squadIndex: e.squadIndex,
        rank: e.rank,
        respawns: e.respawns,
        achievements: y(e.achievements, $t),
        account: N(e.userNames),
        vehicles: y(e.vehiclesStats, Wt),
        efficiencyValues: {
            ...((n = e?.efficiencyValues), { damageDealt: n?.damageDealt, kills: n?.kills, earnedXp: n?.earnedXp }),
            subtractedAlliesKills: r,
        },
        databaseId: e.databaseID,
    };
    var n;
}
const qt = {
    killed: 0,
    spotted: 0,
    criticalDamage: 0,
    damageDealt: { value: 0, count: 0 },
    damageAssisted: 0,
    damageAssistedStun: { value: 0, count: 0 },
    damageBlockedByArmor: { value: 0, count: 0 },
};
const Ut = I.resolve('strings'),
    Zt = 'rank',
    Yt = 'right',
    Qt = 'left',
    Jt = 'other',
    es = [Zt, Yt, Qt, Jt];
function as(e) {
    return e.groupID === Zt
        ? Zt
        : e.groupID === Yt
          ? Yt
          : e.groupID === Qt
            ? Qt
            : (console.error(`Achievement ${e.name} with a group ${e.groupID} is not detected`), Jt);
}
function ts(e) {
    return S(e, (e, a) => {
        const t = as(e),
            s = as(a),
            r = es.indexOf(t),
            n = es.indexOf(s);
        return t !== s
            ? r - n
            : (function (e, a) {
                  const t = Ut.readOrEmpty(`achievements.${e.name}`),
                      s = Ut.readOrEmpty(`achievements.${a.name}`);
                  return t.localeCompare(s);
              })(e, a);
    });
}
const ss = 'default',
    rs = 'hover',
    ns = 'extinct';
function is(e, a) {
    return void 0 === a ? ss : a === e ? rs : ns;
}
const ls = 'rank',
    os = 'others';
const cs = 'allies',
    ds = 'enemies',
    ms = 'personal',
    us = 'alien';
function fs(e, a, t) {
    return 0 === t ? null : a === t && e === cs ? ms : us;
}
function _s({ anonymizer: e, personal: a, platoonType: t }) {
    return !(a || !e) && (t === us || null === t);
}
const [ps, hs] = C()(
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
                n = {
                    battleInfo: a.transform(Ft, 'battleInfo'),
                    allPlayersDictionary: t.box({}),
                    personalEfficiency: {
                        opened: t.box(!1),
                        achievements: a.transform((e) => ts(y(e, $t)), 'achievements'),
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
            (Ye(s)(() => {
                const e = {};
                (n.teamsStatistic.allies.set(
                    y(r.teamsStatistic.allies.get(), (a) => {
                        const t = Kt(a);
                        return ((e[t.account.username] = t), t);
                    }),
                ),
                    n.teamsStatistic.enemies.set(
                        y(r.teamsStatistic.enemies.get(), (a) => {
                            const t = Kt(a);
                            return ((e[t.account.username] = t), t);
                        }),
                    ));
                const a = n.allPlayersDictionary.get();
                n.allPlayersDictionary.set({ ...a, ...e });
            }),
                Ye(s)(() => {
                    return n.teamsStatistic.sorting.set(
                        ((e = r.teamsStatistic.sortingColumn.get()),
                        (a = r.teamsStatistic.sortingOrder.get()),
                        { column: e, sortDirection: a }),
                    );
                    var e, a;
                }));
            const i = P.structural(() => {
                    const e = r.vehiclesFinancialStats.get().find(({ isGeneralInfo: e }) => e);
                    return (
                        e &&
                        (function ({ anyPremium: e, credits: a, xp: t }) {
                            const s = g(a, (e) => e.paramName === Ja),
                                r = g(t, (e) => e.paramName === Ia),
                                n = [];
                            return (s && n.push(Gt(s, e)), r && n.push(Gt(r, e)), n);
                        })({ anyPremium: r.hasAnyPremium.get(), credits: e.credits.total, xp: e.xp.total })
                    );
                }),
                l = P.shallow(() => {
                    const e = g(n.teamsStatistic.allies.get(), (e) => e.personal);
                    return (b(void 0 !== e, 'Personal info is not found'), e);
                }),
                o = P.shallow(() => {
                    const e = n.teamsStatistic.selectedRow.get();
                    if (void 0 === e) return;
                    const a = (e.team === cs ? n.teamsStatistic.allies : n.teamsStatistic.enemies).get();
                    return g(a, (a) => a.account.username === e.username);
                }),
                c = P.shallow(() => {
                    const e = n.allPlayersDictionary.get();
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
                            if (((r = s), j.structural(r, qt))) return a;
                            var r;
                            const n = e[t.userName];
                            return (
                                b(void 0 !== n, `Such enemy ${t.userName} is not found`),
                                a.push({ ...s, account: n.account, databaseId: n.databaseId }),
                                a
                            );
                        },
                        [],
                    );
                });
            return {
                ...n,
                computes: { earnedCurrencies: i, personalInfo: l, efficiencyDetails: o, personalEfficiency: c },
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
                        t?.team !== e?.team || t?.username !== e?.username
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
    bs = 'initial',
    vs = 'first',
    gs = 'second',
    xs = 'third',
    ys = V.cubicBezier(0.33, 0, 0.25, 1),
    Ns = 400,
    js = r.createContext(null);
function ws() {
    const e = r.useContext(js);
    if (null === e)
        throw new Error('You can use the animation context hooks only with the AnimationProvider component');
    return e;
}
function Is({ children: e }) {
    const [a, t] = r.useState(bs),
        [s, l] = r.useState(new Set()),
        o = T(),
        c = D(),
        d = n(),
        m = n(),
        u = n(),
        f = n(),
        _ = n(),
        p = r.useCallback(
            function (e) {
                t(e);
            },
            [t],
        );
    r.useEffect(() => {
        switch (a) {
            case bs:
                return void t(vs);
            case vs:
                return (
                    c.play('showBattleResult', { target: 'animation-context' }),
                    d.start({ y: '0', opacity: 1, config: { duration: Ns, easing: ys } }),
                    void m.start({
                        opacity: 1,
                        y: '0',
                        config: { duration: Ns, easing: ys },
                        onRest: () => {
                            (t(gs), l((e) => A(e, vs)));
                        },
                    })
                );
            case gs:
                return (
                    u.start({
                        opacity: 1,
                        y: '0',
                        config: { duration: Ns, easing: ys },
                        onRest: () => {
                            l((e) => A(e, gs));
                        },
                    }),
                    void o.run(() => {
                        (t(xs), o.clear());
                    }, 280)
                );
            case xs:
                (c.play('exitResult', { target: 'post-battle' }),
                    _.start({ opacity: 1, config: { duration: Ns, easing: ys } }),
                    f.start({
                        opacity: 1,
                        config: { duration: Ns, easing: ys },
                        onRest: () => {
                            l((e) => A(e, xs));
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
    return i.jsx(js.Provider, { value: h, children: e });
}
const Rs = 'BattleInfo_d5226211',
    Ss = 'BattleInfo_group_962f81f6';
const Cs = (e, a) => (e > 0 ? (a > 0 ? 'minutesAndSeconds' : 'minutesOnly') : 'secondsOnly'),
    Ps = r.forwardRef(function (e, a) {
        return i.jsx('div', { ...e, 'data-name': 'BattleInfo', ref: a, className: l(Rs, e.className) });
    });
((Ps.Arena = function ({ arenaName: e, scenario: a, finishReason: t, className: s }) {
    return i.jsx(B, {
        path: 'fl_post_battle_results.battleInfo.arena',
        params: { arenaName: e, scenario: a, finishReason: t },
        className: l(Ss, s),
    });
}),
    (Ps.StartTime = ({ battleStartTime: e, battleDuration: a, className: t }) => {
        const [s, r] = k(E(a), ['m', 's']);
        return i.jsx(B, {
            path: 'fl_post_battle_results.battleInfo.time',
            params: {
                date: H.formatDateTime(z.ShortDate, e),
                time: H.formatDateTime(z.ShortTime, e),
                duration: i.jsx(B, {
                    path: `fl_post_battle_results.battleInfo.timeLeft.${Cs(Number(s), Number(r))}`,
                    params: { minutes: s, seconds: r },
                }),
            },
            className: l(Ss, t),
        });
    }));
const Ts = 'Divider_80a19f4b';
function Ds({ classNames: e }) {
    return i.jsx('div', {
        className: l(Ts, e?.base),
        children: i.jsx(O, {
            className: e?.image,
            width: '100%',
            height: '100%',
            path: 'post_battle.row_divider',
            fit: 'cover',
        }),
    });
}
const Vs = 'Header_content_b9e0be90',
    As = 'Header_title_91e5448a',
    Bs = 'Header_divider_eb019c6',
    ks = 'Header_dividerImage_19f6e11',
    Es = F('Header', 'Header_70aa1da5'),
    Hs = r.forwardRef(({ title: e, children: a, classNames: t, ...s }, r) => {
        const n = I.resolve('strings');
        return i.jsxs(Es, {
            ...s,
            ref: r,
            children: [
                i.jsxs('div', {
                    className: l(Vs, t?.content),
                    children: [
                        i.jsx('div', { className: l(As, t?.title), children: H.toUpperCase(n.readOrEmpty(e)) }),
                        a,
                    ],
                }),
                i.jsx(Ds, { classNames: { base: l(Bs, t?.divider), image: ks } }),
            ],
        });
    }),
    zs = 'playerRankXP',
    Os = { ...ut, [zs]: zs },
    Fs = [da, Ra, zs, ga, xa, Ba, ya, Na, nt, ja, ka, it, ot, lt, Ia, Ea];
function Xs(e, a) {
    return Fs.indexOf(e.paramName) - Fs.indexOf(a.paramName);
}
function Gs(e, a) {
    return pt.indexOf(e.paramName) - pt.indexOf(a.paramName);
}
function $s(e, a) {
    return _t.indexOf(e.paramName) - _t.indexOf(a.paramName);
}
function Ls(e) {
    return {
        paramName: e.paramName,
        currencyType: e.currencyType,
        baseValue: e.baseValue,
        premiumValue: e.premiumValue,
        recordsItemsDetails: v(e.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
}
function Ms(e, a) {
    const t = [],
        s = [];
    for (const r of e) a(r) ? t.push(r) : s.push(r);
    return [t, s];
}
function Ws(e, a) {
    const t = y(e.earned, Ls),
        s = y(e.expenses, Ls),
        r = y(e.total, Ls),
        n = [Ja, st],
        i = [Ua, tt],
        [l, o] = Ms(r, (e) => n.includes(e.paramName)),
        [c, d] = Ms([...t, ...l], (e) => i.includes(e.paramName));
    return {
        records: [...d, ...s].sort(a),
        total: ((m = [...o, ...c]),
        m.filter((e) => {
            const a = Boolean(e.premiumValue || e.baseValue),
                t = ht.has(e.paramName);
            return a || t;
        })).sort(a),
    };
    var m;
}
const Ks = (e) => e in jt;
function qs({ xp: e, freeXp: a }) {
    const t = e?.paramName || a?.paramName;
    b('string' == typeof t, 'xp or freeXp paramName is not provided');
    const s = Ks(t) ? jt[t] : void 0,
        r =
            void 0 !== e?.recordsItemsDetails && Object.keys(e.recordsItemsDetails).length > 0
                ? e.recordsItemsDetails
                : a?.recordsItemsDetails;
    return {
        paramName: t,
        premium: { xp: e?.premiumValue, freeXp: a?.premiumValue },
        standard: { xp: e?.baseValue, freeXp: a?.baseValue },
        recordsItemsDetails: r,
        modifier: s,
    };
}
function Us({ credits: e, gold: a }) {
    const t = e?.paramName || a?.paramName;
    b('string' == typeof t, 'credits or gold paramName is not provided');
    const s = Ks(t) ? jt[t] : void 0,
        r =
            void 0 !== e?.recordsItemsDetails && Object.keys(e.recordsItemsDetails).length > 0
                ? e?.recordsItemsDetails
                : a?.recordsItemsDetails;
    return {
        paramName: t,
        premium: { credits: e?.premiumValue, gold: a?.premiumValue },
        standard: { credits: e?.baseValue, gold: a?.baseValue },
        recordsItemsDetails: r,
        modifier: s,
    };
}
function Zs(e, a) {
    const t = e.paramName;
    return (
        b(((e) => e in Os)(t), `No analogue for ${t} in free xp parameter names`),
        a.find((e) => Os[t] === e.paramName)
    );
}
function Ys(e, a) {
    const t = e.paramName;
    return (
        b(((e) => e in ft)(t), `No analogue for ${t} in gold parameter names`),
        a.find((e) => ft[t] === e.paramName)
    );
}
function Qs(e, a) {
    const t = (function (e, a) {
        return [
            ...X(
                a,
                (e) => dt.has(e.paramName),
                (e) => qs({ freeXp: e }),
            ),
            ...y(e, (e) => (ct.has(e.paramName) ? qs({ xp: e }) : qs({ xp: e, freeXp: Zs(e, a) }))),
        ];
    })(e, a);
    return t
        .filter((e) => {
            const a = Pt[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.freeXp || e.premium.xp || e.standard.freeXp || e.standard.xp);
        })
        .sort(Xs);
}
function Js(e, a) {
    const t = (function (e, a) {
        return y(e, (e) => (mt.has(e.paramName) ? Us({ credits: e }) : Us({ credits: e, gold: Ys(e, a) })));
    })(e, a);
    return t
        .filter((e) => {
            const a = Tt[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.credits || e.premium.gold || e.standard.credits || e.standard.gold);
        })
        .sort(Gs);
}
function er(e) {
    return ((a = e),
    a.filter((e) => {
        const a = Boolean(e.baseValue || e.premiumValue),
            t = ht.has(e.paramName);
        return a || t;
    })).sort($s);
    var a;
}
function ar({ xp: e, freeXp: a }) {
    return (function (e, a) {
        return { records: Qs(e.records, a.records), total: Qs(e.total, a.total) };
    })(
        Ws({ earned: e.earned, expenses: e.expenses, total: e.total }),
        Ws({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
function tr({ credits: e, gold: a }) {
    return (function (e, a) {
        return { records: Js(e.records, a.records), total: Js(e.total, a.total) };
    })(
        Ws({ earned: e.earned, expenses: e.expenses, total: e.total }),
        Ws({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
const [sr, rr] = C()(
        ({ observableModel: e }) => {
            const a = {
                    ...e.primitives(['hasAnyPremium', 'hasWotPlus'], 'financialReport'),
                    vehiclesFinancialStats: e.arrayClone('financialReport.vehiclesFinancialStats'),
                    selectedVehicle: t.box(null),
                },
                s = P.primitive(() => {
                    const e = a.selectedVehicle.get();
                    return a.vehiclesFinancialStats
                        .get()
                        .find(({ vehicle: a, isGeneralInfo: t }) => (e ? a.techName === e : t));
                }),
                r = P.shallow(() => {
                    const e = s();
                    return (
                        e &&
                        ar({
                            xp: { earned: e.xp.earned, expenses: e.xp.expenses, total: e.xp.total },
                            freeXp: { earned: e.freeXp.earned, expenses: e.freeXp.expenses, total: e.freeXp.total },
                        })
                    );
                }),
                n = P.shallow(() => {
                    const e = s();
                    return (
                        e &&
                        tr({
                            credits: { earned: e.credits.earned, expenses: e.credits.expenses, total: e.credits.total },
                            gold: { earned: e.gold.earned, expenses: e.gold.expenses, total: e.gold.total },
                        })
                    );
                }),
                i = P.shallow(() => {
                    const e = s();
                    return (
                        e &&
                        (function ({ earned: e, expenses: a, total: t }) {
                            const s = Ws({ earned: e, expenses: a, total: t });
                            return { records: er(s.records), total: er(s.total) };
                        })({ earned: e.crystals.earned, expenses: e.crystals.expenses, total: e.crystals.total })
                    );
                });
            return { ...a, computes: { experience: r, credits: n, crystals: i } };
        },
        ({ model: e }) => ({
            selectVehicle: s((a) => {
                e.selectedVehicle.set(a);
            }),
        }),
    ),
    nr = 'ListItem_received_ffdc3010',
    ir = 'ListItem_separator_71797768',
    lr = 'ListItem_label_4ab3c391',
    or = 'ListItem_label__withIcon_c2381aa',
    cr = 'ListItem_labelIcon_acb0da4',
    dr = F('ListItem', 'ListItem_bcdaabbd'),
    mr = r.forwardRef(({ labelKey: e, children: a, classNames: t, params: s, labelIconPath: r, ...n }, o) => {
        const c = I.resolve('images');
        return i.jsxs(dr, {
            ...n,
            ref: o,
            'data-test-id': `${e}`,
            children: [
                i.jsxs('div', {
                    className: l(lr, void 0 !== r && or, t?.label),
                    children: [
                        void 0 !== r &&
                            i.jsx('div', {
                                style: { backgroundImage: `url(${c.readOrEmpty(r)})` },
                                className: l(cr, t?.icon),
                            }),
                        i.jsx(B, { upgradeLegacy: !0, path: e, params: s }),
                    ],
                }),
                i.jsxs('div', { className: nr, children: [i.jsx('div', { className: ir }), a] }),
            ],
        });
    }),
    ur = 'Item_currencyValue_81f5b9fb',
    fr = 'Item_currencyValue__total_a7596c8e',
    _r = 'Item_currencyValue__negative_5e98369f',
    pr = 'Item_label_5d6964d6',
    hr = {
        [ia]: 'battle_results.details.calculations.crystal.total',
        [la]: 'battle_results.details.calculations.crystal.events',
        [oa]: 'battle_results.details.calculations.autoBoosters',
        [ca]: 'battle_results.details.calculations.total',
    },
    br = ({ record: e, total: a, ...t }) => {
        const { paramName: s, baseValue: r } = e;
        return s in hr
            ? i.jsx(mr, {
                  ...t,
                  labelKey: hr[s],
                  classNames: { label: pr, ...t.classNames },
                  children: i.jsx(G, {
                      reverse: !0,
                      type: 'crystal',
                      size: $.small,
                      children: i.jsx('div', {
                          className: l(ur, r < 0 && _r, a && fr),
                          children: H.formatNumber('integral', r),
                      }),
                  }),
              })
            : (console.error(`Parameter name "${s}" is not valid for bonds`), null);
    },
    vr = 'IncomeStatement_item_48b34a63',
    gr = F('BondsIncomeStatement'),
    xr = o(
        r.forwardRef((e, a) => {
            const { model: t } = rr(),
                s = t.computes.crystals();
            return i.jsx(gr, {
                ...e,
                ref: a,
                children: s.records.map((e) => i.jsx(br, { record: e, className: vr }, e.paramName)),
            });
        }),
    ),
    yr = 'Total_item_a8580361',
    Nr = 'Total_divider_1de1ca28',
    jr = 'Total_dividerImage_ab06168d',
    wr = F('BondsTotal', 'Total_120fb0c4'),
    Ir = o(
        r.forwardRef((e, a) => {
            const { model: t } = rr(),
                s = t.computes.crystals();
            return i.jsxs(wr, {
                ...e,
                ref: a,
                children: [
                    i.jsx(Ds, { classNames: { base: Nr, image: jr } }),
                    s.total.map((e) => i.jsx(br, { total: !0, record: e, className: yr }, e.paramName)),
                ],
            });
        }),
    ),
    Rr = r.forwardRef((e, a) => i.jsx(Hs, { ...e, title: 'battle_results.details.crystal', ref: a })),
    Sr = F('Bonds');
((Sr.Header = Rr), (Sr.Item = br), (Sr.Total = Ir), (Sr.IncomeStatement = xr));
const Cr = 'Header_cbd845ec',
    Pr = 'Header_content_a63fb46c',
    Tr = 'Header_title_7b852a7',
    Dr = 'Header_title__active_e5dd0f77',
    Vr = 'Header_title__premium_2c23921f',
    Ar = 'Header_icon_3b4dc587',
    Br = o(
        r.forwardRef(({ className: e, ...a }, t) => {
            const { model: s } = rr(),
                r = s.hasAnyPremium.get();
            return i.jsx(Hs, {
                ...a,
                ref: t,
                className: l(Cr, e),
                title: 'battle_results.details.credits',
                children: i.jsxs('div', {
                    className: Pr,
                    children: [
                        i.jsx('div', {
                            className: l(Tr, !r && Dr),
                            children: i.jsx(B, { path: 'battle_results.common.details.noPremTitle' }),
                        }),
                        i.jsxs('div', {
                            className: l(Tr, r && Dr, Vr),
                            children: [
                                i.jsx('div', {
                                    className: Ar,
                                    children: i.jsx(O, {
                                        width: 32,
                                        height: 32,
                                        path: 'post_battle.wot_premium_32x32',
                                    }),
                                }),
                                i.jsx(B, { path: 'battle_results.getPremiumPopover.prem' }),
                            ],
                        }),
                    ],
                }),
            });
        }),
    ),
    kr = (e) => {
        const [a, t] = r.useState(!1);
        return (
            r.useEffect(() => {
                const a = () => {
                        const [a, s] = e.getBounds(),
                            r = e.animationScroll.scrollPosition.get(),
                            n = e.contentRef.current;
                        if (n) {
                            if (0 === s) return ((n.style.mask = 'none'), void t(!0));
                            const e = (r / s) * 10;
                            ((n.style.mask = `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) ${e}%, rgba(0, 0, 0, 1) ${90 + e}%, transparent 100%)`),
                                t(!0));
                        }
                    },
                    s = e.events.on('change', a),
                    r = e.events.on('resizeHandled', a),
                    n = e.events.on('recalculateContent', a);
                return (
                    a(),
                    () => {
                        (s(), r(), n());
                    }
                );
            }, [e]),
            a
        );
    },
    Er = 'IncomeStatement_c4136bc5',
    Hr = 'IncomeStatement_verticalBar_5fb90511',
    zr = 'IncomeStatement_scrollWrapper_ce2dde41',
    Or = 'IncomeStatement_scrollContent_31153602',
    Fr = 'IncomeStatement_scrollContent__initialized_ce1144d0',
    Xr = F('CreditsIncomeStatement'),
    Gr = ({ children: e }) => {
        const a = W(),
            t = kr(a.api);
        return i.jsx(K, { classNames: { wrapper: zr, content: l(Or, t && Fr) }, children: e });
    },
    $r = r.forwardRef(({ children: e, className: a, scrollable: t, ...s }, r) =>
        i.jsx(Xr, {
            className: l(Er, a),
            ...s,
            ref: r,
            children: t
                ? i.jsxs(L, { children: [i.jsx(Gr, { children: e }), i.jsx(M, { classNames: { base: Hr } })] })
                : e,
        }),
    ),
    Lr = 'Record_420804f3',
    Mr = 'Record_value_4d088deb',
    Wr = 'Record_value__decreasing_8cff45fa',
    Kr = ({ formatter: e, value: a, modifier: t, currency: s, classNames: r, iconPath: n }) => {
        if (void 0 === a) return null;
        const o = t === xt || a < 0;
        return i.jsxs('div', {
            className: l(Lr, r?.base),
            children: [
                i.jsxs('div', {
                    className: l(Mr, o && Wr, r?.value),
                    'data-test-id': `${s}`,
                    children: [
                        c(t)
                            .with(gt, () => i.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(vt, () => i.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(xt, () => i.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(Nt, () => i.jsx(B, { path: 'common.plus' }))
                            .otherwise(() => null),
                        e(a, s),
                        t === yt && i.jsx(B, { path: 'common.common.percent' }),
                    ],
                }),
                n && i.jsx(O, { width: 24, height: 24, path: n }),
            ],
        });
    },
    qr = 'RecordGroup_65a30ced',
    Ur = 'RecordGroup_base__inactive_5fd9f274',
    Zr = 'RecordGroup_record_5fd9f274',
    Yr = 'RecordGroup_record__extinguished_7fdfcea',
    Qr = 'RecordGroup_record__first_36c2aa71',
    Jr = 'RecordGroup_separator_9f211d97',
    en = 'RecordGroup_separatorBackground_8a447834',
    an = 'RecordGroup_value_9253748c',
    tn = 'RecordGroup_value__total_126d88a1',
    sn = 'RecordGroup_value__gold_d7bd74ba';
function rn({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case nt:
            return !1;
        case Ma:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const nn = ({ credits: e, gold: a, modifier: t, inactive: s = !1, total: r, paramName: n, wotPlusActive: o }) => {
        function c(e, a) {
            return n === nt ? H.formatReal('fractional', e) : H.formatNumber(a === na ? 'gold' : 'integral', e);
        }
        return i.jsxs('div', {
            className: l(qr, s && Ur),
            children: [
                i.jsx('div', {
                    className: l(Zr, Qr, rn({ paramName: n, wotPlusActive: o, value: e }) && Yr),
                    children: i.jsx(Kr, {
                        formatter: c,
                        value: e,
                        currency: ra,
                        modifier: t,
                        classNames: { value: l(an, r && tn) },
                        iconPath: Ht(ra, n),
                    }),
                }),
                void 0 !== a && i.jsx('div', { className: Jr, children: i.jsx('div', { className: en }) }),
                i.jsx('div', {
                    className: l(Zr, 0 === a && Yr),
                    children: i.jsx(Kr, {
                        value: a,
                        currency: na,
                        modifier: t,
                        classNames: { value: l(an, sn, r && tn) },
                        formatter: c,
                        iconPath: Ht(na, n),
                    }),
                }),
            ],
        });
    },
    ln = 'Item_groups_a1f0c2a5',
    on = 'Item_label_7521a1d4',
    cn = 'Item_label__gold_49ec59ab',
    dn = {
        [Ha]: 'title.base',
        [za]: 'squadBonus',
        [Oa]: 'noPenalty',
        [Fa]: 'boosters',
        [Ga]: 'battlePayments',
        [$a]: 'event',
        [at]: 'event',
        [La]: 'referralBonus.fullLabel',
        [Ma]: 'wotPlusBonus',
        [it]: 'fairPlayViolation.deserter',
        [ot]: 'fairPlayViolation.suicide',
        [lt]: 'fairPlayViolation.afk',
        [Ka]: 'friendlyFirePenalty',
        [qa]: 'friendlyFireCompensation',
        [nt]: 'aogasFactor',
        [Ja]: 'intermediateTotal',
        [st]: 'intermediateTotal',
        [Za]: 'autoRepair',
        [Ya]: 'autoLoad',
        [Qa]: 'autoEquip',
        [et]: 'total',
        [rt]: 'total',
        [Ua]: 'piggyBankInfo',
        [tt]: 'piggyBankInfo',
        [Xa]: 'petCredits.fullLabel',
    },
    mn = { [Ma]: 'subscription.wot_plus_32x32' },
    un = o(({ record: e, total: a, ...t }) => {
        const { model: s } = rr(),
            r = s.hasAnyPremium.get(),
            n = s.hasWotPlus.get(),
            { paramName: o, premium: c, standard: d, modifier: m, recordsItemsDetails: u } = e;
        if (!(o in dn)) return null;
        const f = u?.referralFactor,
            _ = u?.bonusFactor,
            p = dn[o],
            h = Vt[et](e, n);
        return i.jsx(mr, {
            ...t,
            labelIconPath: mn[o],
            labelKey: `battle_results.details.calculations.${p}`,
            classNames: { label: l(on, o === Ma && cn) },
            params: { ...(f && { bonusFactor: wt(f) }), ...(_ && { bonusFactor: It(_) }) },
            children: i.jsxs('div', {
                className: ln,
                children: [
                    i.jsx(nn, {
                        paramName: o,
                        credits: d.credits,
                        gold: h ? d.gold : void 0,
                        modifier: m,
                        inactive: r,
                        total: a,
                        wotPlusActive: n,
                    }),
                    i.jsx(nn, {
                        paramName: o,
                        credits: c.credits,
                        gold: h ? c.gold : void 0,
                        modifier: m,
                        inactive: !r,
                        total: a,
                        wotPlusActive: n,
                    }),
                ],
            }),
        });
    }),
    fn = 'IncomeStatement_560dd244',
    _n = 'IncomeStatement_base__scroll_fb9f1475',
    pn = 'IncomeStatement_item_48b34a63',
    hn = o(
        r.forwardRef(({ className: e, scrollable: a, ...t }, s) => {
            const { model: r } = rr(),
                n = r.computes.credits();
            return i.jsx($r, {
                ...t,
                ref: s,
                className: l(fn, a && _n, e),
                scrollable: a,
                children: y(n.records, (e) => i.jsx(un, { record: e, className: pn }, e.paramName)),
            });
        }),
    ),
    bn = 'Total_item_de53c8b0',
    vn = 'Total_divider_1de1ca28',
    gn = 'Total_dividerImage_ab06168d',
    xn = F('CreditsTotal', 'Total_19236d49'),
    yn = o(
        r.forwardRef((e, a) => {
            const { model: t } = rr(),
                s = t.computes.credits();
            return i.jsxs(xn, {
                ...e,
                ref: a,
                children: [
                    i.jsx(Ds, { classNames: { base: vn, image: gn } }),
                    s.total.map((e) => i.jsx(un, { record: e, className: bn, total: !0 }, e.paramName)),
                ],
            });
        }),
    ),
    Nn = 'Credits_68f91d81',
    jn = 'Credits_base__scroll_759f08f3',
    wn = F('Credits'),
    In = r.forwardRef(({ scrollable: e, className: a, ...t }, s) =>
        i.jsx(wn, { ...t, ref: s, className: l(Nn, e && jn, a) }),
    );
((In.Header = Br), (In.Item = un), (In.Total = yn), (In.IncomeStatement = hn));
const Rn = r.forwardRef((e, a) => i.jsx(Hs, { ...e, title: 'battle_results.details.xp', ref: a })),
    Sn = 'RecordGroup_65a30ced',
    Cn = 'RecordGroup_base__inactive_5fd9f274',
    Pn = 'RecordGroup_record_5fd9f274',
    Tn = 'RecordGroup_record__extinguished_7fdfcea',
    Dn = 'RecordGroup_record__first_9121e1b7',
    Vn = 'RecordGroup_separator_9f211d97',
    An = 'RecordGroup_separatorBackground_8a447834',
    Bn = 'RecordGroup_value_1f34e2e2',
    kn = 'RecordGroup_value__total_126d88a1',
    En = 'RecordGroup_value__freeXP_931265db';
function Hn(e, a) {
    return e !== pa || (void 0 !== a && a > 0);
}
function zn({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case nt:
            return !1;
        case ja:
        case ka:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const On = ({ paramName: e, xp: a, freeXp: t, modifier: s, inactive: r, total: n, wotPlusActive: o }) => {
        function c(a) {
            switch (e) {
                case fa:
                    return H.formatReal('woZeroDigits', a);
                case nt:
                    return H.formatReal('fractional', a);
                default:
                    return H.formatNumber('integral', a);
            }
        }
        return i.jsxs('div', {
            className: l(Sn, r && Cn),
            children: [
                i.jsx('div', {
                    className: l(Pn, Dn, zn({ wotPlusActive: o, paramName: e, value: a }) && Tn),
                    children: i.jsx(Kr, {
                        value: a,
                        currency: ta,
                        modifier: Hn(e, a) ? s : void 0,
                        formatter: c,
                        classNames: { value: l(Bn, n && kn) },
                        iconPath: Ht(ta, e),
                    }),
                }),
                void 0 !== t && i.jsx('div', { className: Vn, children: i.jsx('div', { className: An }) }),
                i.jsx('div', {
                    className: l(Pn, zn({ wotPlusActive: o, paramName: e, value: t }) && Tn),
                    children: i.jsx(Kr, {
                        value: t,
                        currency: sa,
                        modifier: Hn(e, t) ? s : void 0,
                        formatter: c,
                        classNames: { value: l(Bn, En, n && kn) },
                        iconPath: Ht(sa, e),
                    }),
                }),
            ],
        });
    },
    Fn = 'Item_groups_a1f0c2a5',
    Xn = 'Item_label_7521a1d4',
    Gn = 'Item_label__highlighted_36e62867',
    $n = 'Item_label__gold_49ec59ab',
    Ln = {
        [da]: 'title.base',
        [Ra]: 'title.base',
        [ma]: 'noPenalty',
        [Sa]: 'noPenalty',
        [ua]: 'friendlyFirePenalty',
        [fa]: 'igrBonus.simpleLabel',
        [Ca]: 'igrBonus.simpleLabel',
        [_a]: 'firstWin',
        [Pa]: 'firstWin',
        [pa]: 'manageableXpBonus',
        [Ta]: 'manageableXpBonus',
        [ha]: 'boosters',
        [Da]: 'boosters',
        [ba]: 'tacticalTraining',
        [Va]: 'militaryManeuvers',
        [va]: 'event',
        [Aa]: 'event',
        [ga]: 'referralBonus.fullLabel',
        [xa]: 'premiumVehicleXP',
        [Ba]: 'premiumVehicleXP',
        [ya]: 'squadBonus',
        [Na]: 'squadXPPenalty',
        [nt]: 'aogasFactor',
        [ja]: 'wotPlusBonus',
        [ka]: 'wotPlusBonus',
        [it]: 'fairPlayViolation.deserter',
        [ot]: 'fairPlayViolation.suicide',
        [lt]: 'fairPlayViolation.afk',
        [Ia]: 'total',
        [Ea]: 'total',
        originalAlternative: 'xpRecordSimple',
        [zs]: 'playerRankXP',
    },
    Mn = { [ja]: 'subscription.wot_plus_32x32', [ka]: 'subscription.wot_plus_32x32' },
    Wn = new Set([ja, ka]),
    Kn = () =>
        i.jsx('span', { className: Gn, children: i.jsx(B, { path: 'battle_results.details.calculations.maximum' }) }),
    qn = o(
        ({
            record: { paramName: e, premium: a, standard: t, modifier: s, recordsItemsDetails: r },
            total: n,
            ...o
        }) => {
            const { model: c } = rr(),
                d = c.hasAnyPremium.get(),
                m = c.hasWotPlus.get();
            if (!(e in Ln)) return null;
            const u = '1' === r?.isHighScope,
                f = u ? Ln.originalAlternative : Ln[e],
                _ = r?.referralFactor;
            return i.jsx(mr, {
                ...o,
                labelIconPath: Mn[e],
                labelKey: `battle_results.details.calculations.${f}`,
                params: { ...(_ && { bonusFactor: wt(_) }), ...(u && { maximum: i.jsx(Kn, {}) }) },
                classNames: { label: l(Xn, Wn.has(e) && $n) },
                children: i.jsxs('div', {
                    className: Fn,
                    children: [
                        i.jsx(On, { ...t, paramName: e, modifier: s, inactive: d, total: n, wotPlusActive: m }),
                        i.jsx(On, { ...a, paramName: e, modifier: s, inactive: !d, total: n, wotPlusActive: m }),
                    ],
                }),
            });
        },
    ),
    Un = 'IncomeStatement_560dd244',
    Zn = 'IncomeStatement_base__scroll_fb9f1475',
    Yn = 'IncomeStatement_item_48b34a63',
    Qn = o(
        r.forwardRef(({ className: e, scrollable: a, ...t }, s) => {
            const { model: r } = rr(),
                n = r.computes.experience();
            return i.jsx($r, {
                ...t,
                ref: s,
                className: l(Un, a && Zn, e),
                scrollable: a,
                children: y(n.records, (e) => i.jsx(qn, { record: e, className: Yn }, e.paramName)),
            });
        }),
    ),
    Jn = 'Total_item_a8580361',
    ei = 'Total_divider_1de1ca28',
    ai = 'Total_dividerImage_ab06168d',
    ti = F('ExperienceTotal', 'Total_19236d49'),
    si = o(
        r.forwardRef((e, a) => {
            const { model: t } = rr(),
                s = t.computes.experience();
            return i.jsxs(ti, {
                ...e,
                ref: a,
                children: [
                    i.jsx(Ds, { classNames: { base: ei, image: ai } }),
                    s.total.map((e) => i.jsx(qn, { record: e, className: Jn, total: !0 }, e.paramName)),
                ],
            });
        }),
    ),
    ri = 'Experience_a014c8c',
    ni = 'Experience_base__scroll_f75d07c6',
    ii = F('Experience'),
    li = r.forwardRef(({ scrollable: e, className: a, ...t }, s) =>
        i.jsx(ii, { ...t, ref: s, className: l(ri, e && ni, a) }),
    );
((li.Header = Rn), (li.Item = qn), (li.Total = si), (li.IncomeStatement = Qn));
const oi = {
        background: 'DropdownPortal_background_c766b1c4',
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
    ci = [25, 25],
    di = function ({ onSelect: e, options: a, value: t }) {
        const { api: s } = W(),
            [n, o] = Z(s, ci),
            { opened: c, close: d } = Y();
        return (
            r.useEffect(() => {
                if (c) return Q(() => Q(s.recalculateContent));
            }, [c, s.recalculateContent]),
            i.jsx(K, {
                className: l(oi.area, !n && oi.area__begin, !o && oi.area__end),
                classNames: { content: oi.scrollContent },
                children: a.map((a) =>
                    i.jsx(
                        'div',
                        {
                            className: l(oi.base, a.id === t && oi.base__selected),
                            children: i.jsxs(J, {
                                className: oi.button,
                                onClick: () => {
                                    (d(), e(a.id));
                                },
                                children: [
                                    i.jsx('div', { className: oi.background }),
                                    i.jsxs('div', {
                                        className: oi.itemLabelWrapper,
                                        children: [
                                            i.jsx('div', { className: oi.selectIcon }),
                                            a.level && i.jsx(ee, { value: a.level, className: oi.vehicleLevel }),
                                            a.type &&
                                                i.jsx(ae, { type: a.type, size: 'x24x24', className: oi.vehicleGap }),
                                            i.jsx('div', { className: oi.vehicleName, children: a.label }),
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
    mi = function (e) {
        return i.jsx(q.Portal, {
            position: 'bottom',
            children: i.jsx(U, {
                children: i.jsxs(q.Display, {
                    'data-name': 'playlist-dropdown-content',
                    className: oi.popover,
                    children: [
                        i.jsx(q.Tip, { position: 'top', size: '80rem', offset: '120rem' }),
                        i.jsx('div', {
                            className: oi.list,
                            children: i.jsxs(L, {
                                children: [i.jsx(di, { ...e }), i.jsx(M, { classNames: { base: oi.bar } })],
                            }),
                        }),
                    ],
                }),
            }),
        });
    },
    ui = 'Trigger_9cdafb94',
    fi = 'Trigger_arrow_8ee677b2',
    _i = 'Trigger_arrow__opened_38ae933',
    pi = 'Trigger_arrowWrapper_68451ace',
    hi = function (e) {
        const a = D(),
            t = Y();
        return i.jsx(q.Trigger, {
            children: (s) =>
                i.jsx(i.Fragment, {
                    children: i.jsxs('div', {
                        ...s,
                        onMouseEnter: (e) => {
                            a.play('mouse-enter', { target: 'vehicle:playlists:dropdown_trigger', original: e });
                        },
                        onClick: (e) => {
                            (a.play('click', { target: 'vehicle:playlists:dropdown_trigger', original: e }),
                                s.onClick(e));
                        },
                        className: ui,
                        children: [
                            e.children,
                            i.jsx('div', {
                                className: pi,
                                children: i.jsx('div', { className: l(fi, t.opened && _i) }),
                            }),
                        ],
                    }),
                }),
        });
    },
    bi = 'VehicleSelector_vehicleName_ff1d26ec',
    vi = 'VehicleSelector_vehicleLevel_9e1a557b',
    gi = 'VehicleSelector_vehicleGap_250d0374',
    xi = 'VehicleSelector_label_14dee5e6',
    yi = function (e) {
        const { value: a } = e,
            t = g(e.options, (e) => e.id === a);
        return i.jsxs(q, {
            children: [
                i.jsx(mi, { ...e }),
                i.jsx(hi, {
                    children: i.jsxs('div', {
                        className: xi,
                        children: [
                            t?.level && i.jsx(ee, { value: t.level, className: vi }),
                            t?.type && i.jsx(ae, { type: t.type, size: 'x24x24', className: gi }),
                            i.jsx('div', { className: bi, children: t.label }),
                        ],
                    }),
                }),
            ],
        });
    },
    Ni = 'FinancialReportVehicleSelector_c6ca6e82',
    ji = o(function () {
        const e = I.resolve('strings'),
            { model: a, controls: t } = rr(),
            s = a.vehiclesFinancialStats.get(),
            r = a.selectedVehicle.get();
        return i.jsx('div', {
            className: Ni,
            children: i.jsx(yi, {
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
    wi = 'FinancialReport_content_99bf970f',
    Ii = 'FinancialReport_leftContent_75c21204',
    Ri = 'FinancialReport_experience_7219d4d3',
    Si = 'FinancialReport_credits_7712b0c',
    Ci = 'FinancialReport_header_d56ebc61',
    Pi = 'FinancialReport_headerContent_37c9251a',
    Ti = 'FinancialReport_total_bdf3e42b',
    Di = 'FinancialReport_bonds_b7ae931a',
    Vi = F('FinancialReport', 'FinancialReport_1cb7f6f5'),
    Ai = ({ className: e }) => {
        const [a, t] = r.useState({ credits: !1, experience: !1 }),
            s = r.useRef(null),
            n = r.useRef(null),
            l = r.useRef(null),
            o = te({ margin: 18 }, { medium: { margin: 19 }, large: { margin: 16 }, extraLarge: { margin: 30 } }),
            c = r.useCallback(() => {
                if (!s.current || !n.current || !l.current) return;
                const { height: e } = s.current.getBoundingClientRect(),
                    { height: a } = n.current.getBoundingClientRect(),
                    { height: r } = l.current.getBoundingClientRect();
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
            i.jsx(sr, {
                children: i.jsx(Vi, {
                    className: e,
                    children: i.jsxs('div', {
                        children: [
                            i.jsx(ji, {}),
                            i.jsxs('div', {
                                className: wi,
                                children: [
                                    i.jsxs('div', {
                                        className: Ii,
                                        ref: s,
                                        children: [
                                            i.jsxs(In, {
                                                ref: n,
                                                scrollable: a.credits,
                                                className: Si,
                                                children: [
                                                    i.jsx(In.Header, { className: Ci }),
                                                    i.jsx(In.IncomeStatement, { scrollable: a.credits }),
                                                    i.jsx(In.Total, { className: Ti }),
                                                ],
                                            }),
                                            i.jsxs(li, {
                                                ref: l,
                                                scrollable: a.experience,
                                                className: Ri,
                                                children: [
                                                    i.jsx(li.Header, { className: Ci, classNames: { content: Pi } }),
                                                    i.jsx(li.IncomeStatement, { scrollable: a.experience }),
                                                    i.jsx(li.Total, { className: Ti }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    i.jsxs(Sr, {
                                        className: Di,
                                        children: [
                                            i.jsx(Sr.Header, { className: Ci, classNames: { content: Pi } }),
                                            i.jsx(Sr.IncomeStatement, {}),
                                            i.jsx(Sr.Total, { className: Ti }),
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
    Bi = r.createContext(null);
function ki() {
    const e = r.useContext(Bi);
    if (null === e) throw new Error('You can use the achievements hooks only with the Achievements component');
    return e;
}
const Ei = { x: 50, y: -30, scale: 1.2, opacity: 0 };
function Hi({ children: e, achievements: a, springsProps: t }) {
    const [s, n] = r.useState(new Set()),
        [l, o] = r.useState(void 0),
        [c, m] = d(a.length, () => ({ from: { ...Ei, ...t?.from }, ...t }), [a.length, t]),
        u = r.useMemo(
            () => ({
                api: m,
                springs: c,
                achievements: a,
                hoverIndex: l,
                setHoverIndex: o,
                completedAnimationIndexes: s,
                setCompletedAnimationIndexes: n,
            }),
            [m, c, a, l, o, s, n],
        );
    return i.jsx(Bi.Provider, { value: u, children: e });
}
const zi = {
        root: 'Achievement_root_8e5495a9',
        'media-wrapper': 'Achievement_media-wrapper_8e5495a9',
        base: 'Achievement_d22ce0bc',
        base__extinct: 'Achievement_base__extinct_b2f0b4be',
        icon: 'Achievement_icon_beb32010',
    },
    Oi = r.forwardRef(function ({ achievement: e, index: a, width: t, height: s, classNames: n }, o) {
        const c = re({
                args: r.useMemo(
                    () => ({ tooltipId: e.tooltipId, tooltipArgs: e.tooltipArgs }),
                    [e.tooltipId, e.tooltipArgs],
                ),
            }),
            d = D(),
            { hoverIndex: m, setHoverIndex: u } = ki();
        return i.jsx('div', {
            ...c,
            ref: o,
            className: l(zi.base, zi[`base__${is(a, m)}`], n?.achievement),
            onMouseEnter: function (e) {
                (d.play('mouse-enter', { original: e, target: 'achievements:achievement' }), c.onMouseEnter(e), u(a));
            },
            onMouseLeave: () => {
                (c.onMouseLeave(), u(void 0));
            },
            children:
                'rank' === e.groupID
                    ? i.jsx('div', {
                          style: {
                              backgroundImage: `url(${R.images.frontline.gui.maps.icons.ranks.c_256x256.$dyn(e.iconName)})`,
                              width: t,
                              height: s,
                          },
                          className: zi.icon,
                      })
                    : i.jsx(
                          O,
                          {
                              width: t,
                              height: s,
                              path: `achievement.x240x240.${e.iconName}`,
                              className: l(zi.icon, n?.icon),
                          },
                          e.iconName,
                      ),
        });
    }),
    Fi = 'GroupedAchievements_4b56acae',
    Xi = 'GroupedAchievements_rankGroup_74be9c12',
    Gi = 'GroupedAchievements_othersGroup_d0fdb9a6',
    $i = 'GroupedAchievements_animatedAchievement_f3a3b8f8',
    Li = 'GroupedAchievements_achievement_977416af',
    Mi = 'GroupedAchievements_achievement__notInteractive_76fcea70',
    Wi = r.memo(function ({
        achievements: e,
        startIndex: a,
        indent: t = 0,
        group: s,
        medalWidth: n,
        medalHeight: o,
        maxContainerWidth: c,
        updateGroupIndent: d,
    }) {
        const u = r.useRef(null),
            { springs: f, achievements: _, completedAnimationIndexes: p, hoverIndex: h } = ki();
        return (
            ne(() => {
                if (null === u.current) return;
                const a = u.current.offsetWidth + Math.floor((t / e.length) * 2),
                    r = ie(c);
                d(s, a < r ? Math.floor((r - a) / 2) : 0);
            }, [e.length, n, c, d]),
            i.jsx('div', {
                style: { paddingLeft: t, paddingRight: t },
                className: Gi,
                children: y(e, (t, s) => {
                    const r = _.length - a - s - 1;
                    return i.jsx(
                        m.div,
                        {
                            ref: 0 === s ? u : void 0,
                            className: $i,
                            style: { ...f[r], zIndex: a + s === h ? e.length + 1 : e.length - s },
                            children: i.jsx(Oi, {
                                classNames: { achievement: l(Li, !1 === p.has(r) && Mi) },
                                achievement: t,
                                width: n,
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
    Ki = r.memo(function ({ achievements: e, medalWidth: a, medalHeight: t }) {
        const { springs: s, achievements: r, completedAnimationIndexes: n, hoverIndex: o } = ki();
        return i.jsx('div', {
            className: Xi,
            children: y(e, (c, d) => {
                const u = r.length - d - 1;
                return i.jsx(
                    m.div,
                    {
                        className: $i,
                        style: { ...s[u], zIndex: d === o ? e.length + 1 : e.length - d },
                        children: i.jsx(Oi, {
                            classNames: { achievement: l(Li, !n.has(u) && Mi) },
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
    qi = r.memo(function ({ className: e }) {
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
            { achievements: t } = ki(),
            s = r.useMemo(
                () =>
                    (function (e) {
                        return v(e, (e, a) => (as(a) === Zt ? e.rank.push(a) : e.others.push(a), e), {
                            [ls]: [],
                            [os]: [],
                        });
                    })(t),
                [t],
            ),
            [n, o] = r.useState(() => ({ others: s.rank.length > 0 && s.others.length > 0 ? void 0 : 0 })),
            c = r.useCallback(
                function (e, a) {
                    o((t) => ({ ...t, [e]: a }));
                },
                [o],
            );
        return 0 === t.length
            ? null
            : i.jsxs('div', {
                  className: l(Fi, e),
                  children: [
                      s.rank.length > 0 &&
                          i.jsx(Ki, { achievements: s.rank, medalWidth: a.rank.width, medalHeight: a.rank.height }),
                      s.others.length > 0 &&
                          i.jsx(Wi, {
                              group: os,
                              achievements: s.others,
                              medalWidth: a.others.width,
                              medalHeight: a.others.height,
                              maxContainerWidth: a.others.maxContainerWidth,
                              startIndex: s.rank.length,
                              updateGroupIndent: c,
                              indent: n.others,
                          }),
                  ],
              });
    }),
    Ui = 'AnimatedNumber_958fc84e',
    Zi = 'AnimatedNumber_slotMachineDigit_a9587a5a',
    Yi = 'AnimatedNumber_plugChar_c66678',
    Qi = 'AnimatedNumber_digitsList_2065427d',
    Ji = V.cubicBezier(0.33, 0, 0.25, 1);
function el({ symbol: e, step: a, delay: t, first: s, handleFirstRest: n }) {
    const [l, o] = r.useState(!1),
        [c, d] = u(() => ({ from: { y: 0, opacity: 0 } })),
        f = /^\d$/.test(e);
    const _ = f ? parseInt(e) : 1;
    return (
        r.useEffect(() => {
            l && s && n();
        }, [l, s, n]),
        r.useEffect(() => {
            a > 0 &&
                d.start({
                    delay: l ? 0 : t,
                    from: { y: a, opacity: 1 },
                    to: { y: -_ * a, opacity: 1 },
                    config: { duration: 600, easing: Ji },
                    immediate: l,
                    onRest() {
                        o(!0);
                    },
                });
        }, [a, d, l, t, _]),
        i.jsxs('div', {
            className: Zi,
            children: [
                i.jsx('div', { className: Yi, children: e }),
                i.jsx(m.div, {
                    style: c,
                    className: Qi,
                    children: ce(0, _ + 1, (t) =>
                        f
                            ? i.jsx('div', { children: t }, t)
                            : i.jsx('div', { style: { height: a }, children: t > 0 ? e : null }, t),
                    ),
                }),
            ],
        })
    );
}
const al = r.memo(function ({ value: e, readyToAnimate: a, className: t, handleAnimationFinished: s, type: n }) {
        const [o, c] = le(),
            d = r.useMemo(() => e.split(''), [e]),
            m = r.useCallback(() => s(n), [s, n]);
        return i.jsx('div', {
            ref: o,
            className: l(Ui, t),
            children: d.map((t, s) =>
                i.jsx(
                    el,
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
    tl = 'Currency_10720e2d',
    sl = 'Currency_icon_4d923f64',
    rl = 'Currency_icon__visible_9c676b12',
    nl = 'Currency_value_54c8fc6b',
    il = { xp: 'tankXP', crystal: 'crystal', credits: 'credits', gold: 'gold' },
    ll = Object.keys(il);
function ol({ type: e, value: a, size: t, visibleIfZero: s, readyToAnimate: r, handleAnimationFinished: n }) {
    return ((e) => ll.includes(e))(e)
        ? 0 !== a || s
            ? i.jsx(G, {
                  reverse: !0,
                  type: il[e],
                  size: t,
                  className: tl,
                  classNames: { icon: l(sl, r && rl) },
                  children: i.jsx(al, {
                      className: nl,
                      readyToAnimate: r,
                      type: e,
                      handleAnimationFinished: n,
                      value: H.formatNumber(e === de.gold ? 'gold' : 'integral', a),
                  }),
              })
            : null
        : (console.error(`There is no such currency in the template literal: ${e}`), null);
}
const cl = F('Currencies', 'Currencies_5b11a533'),
    dl = o(function ({ className: e }) {
        const [a, t] = r.useState(!1),
            [s, n] = r.useState(new Set()),
            { model: l } = hs(),
            o = l.computes.earnedCurrencies(),
            c = me(o),
            d = D(),
            { step: m } = ws(),
            u = te({ value: $.medium }, { medium: { value: $.large }, large: { value: $.extraLarge } });
        (r.useEffect(() => {
            void 0 !== c && c !== o && d.play('startRolling', { target: 'overview:currencies' });
        }, [o, c, d]),
            r.useEffect(() => {
                m === xs && (t(!0), d.play('startRolling', { target: 'overview:currencies' }));
            }, [m, d]),
            r.useEffect(() => {
                s.size === o.filter(({ value: e, visibleIfZero: a }) => e > 0 || a).length &&
                    d.play('stopRolling', { target: 'overview:currencies' });
            }, [o, d, s]));
        const f = r.useCallback(function (e) {
            n((a) => A(a, e));
        }, []);
        return i.jsx(cl, {
            className: e,
            children: y(o, (e) =>
                i.jsx(ol, { readyToAnimate: a, size: u.value, handleAnimationFinished: f, ...e }, e.type),
            ),
        });
    }),
    ml = 'Flag_aedf2f2f',
    ul = 'Flag_8ac99d2d';
function fl({ status: e }) {
    return 'win' === e ? 'post_battle.epic_victory_ribbon' : 'post_battle.epic_defeat_draw_ribbon';
}
function _l({ status: e }) {
    const a = I.resolve('videos');
    return i.jsx('div', {
        className: ml,
        children: i.jsx(ue, { loop: !0, autoplay: !0, className: ul, src: a.read(fl({ status: e })) }),
    });
}
const pl = 'account',
    hl = 'targetKills',
    bl = 'damageDealt',
    vl = 'damageBlockedByArmor',
    gl = 'damageAssisted',
    xl = 'damageAssistedStun',
    yl = 'spotted',
    Nl = 'criticalDamage',
    jl = {
        [hl]: 'library.crossed_tank',
        [bl]: 'library.cross_with_gap',
        [vl]: 'library.blocked',
        [gl]: 'library.double_target',
        [xl]: 'library.arrow_with_fading',
        [yl]: 'library.eyebrow',
        [Nl]: 'library.gear_with_gap',
    };
const wl = { behaviour: fe.contentResponsive, minSize: '0rem', maxSize: '1000rem' };
(_e.extraSmall,
    fe.static,
    _e.medium,
    fe.static,
    _e.large,
    fe.static,
    _e.extraLarge,
    fe.static,
    _e.extraSmall,
    fe.static,
    _e.medium,
    fe.static,
    _e.large,
    fe.static,
    _e.extraLarge,
    fe.static);
const Il = r.createContext(null);
function Rl() {
    const e = r.useContext(Il);
    if (null === e)
        throw new Error('You can use the personal efficiency hooks only with the PersonalEfficiency widget component');
    return e;
}
function Sl({ iconsConfig: e, children: a }) {
    const t = r.useMemo(() => ({ iconsConfig: { ...jl, ...(e || {}) } }), [e]);
    return i.jsx(Il.Provider, { value: t, children: a });
}
const Cl = 'HeaderCell_cellWithValue_78949e6d',
    Pl = 'HeaderCell_cellWithValue__totalInfo_789bf7be',
    Tl = 'HeaderCell_cellWithValue__zeroIndent_334269c9',
    Dl = 'HeaderCell_wrapper_7849c6a',
    Vl = 'HeaderCell_imageWrapper_a570c717',
    Al = 'HeaderCell_value_f7bb7c82',
    Bl = 'HeaderCell_cellWithText_710c47ce',
    kl = 'HeaderCell_text_35220206';
function El({ info: e, name: a, className: t }) {
    const { iconsConfig: s } = Rl(),
        r = I.resolve('views'),
        n = pe({
            contentId: r.read((e) =>
                a === Nl
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { paramType: a },
        }),
        o = v(
            e.table.getRowModel().rows,
            (e, t) => {
                const s = t.getValue(a),
                    r = he(s) ? s : s.value;
                return e + (a === yl && r > 0 ? 1 : r);
            },
            0,
        ),
        c = s[a] ?? '';
    return i.jsx('div', {
        className: l(Cl, t),
        children: i.jsxs('div', {
            ...n,
            className: Dl,
            children: [
                i.jsx('div', { className: Al, children: H.formatNumber('integral', o) }),
                i.jsx('div', { className: Vl, children: i.jsx(O, { width: '100%', height: '100%', path: c }) }),
            ],
        }),
    });
}
function Hl({ name: e, info: a, className: t }) {
    const s = I.resolve('strings');
    switch (e) {
        case hl:
        case bl:
        case vl:
        case gl:
        case xl:
        case yl:
        case Nl:
            return void 0 !== a ? i.jsx(El, { name: e, info: a, className: t }) : null;
        case pl:
            return i.jsx('div', {
                className: Bl,
                children: i.jsx('div', {
                    className: kl,
                    children: s.readOrEmpty('battle_results.common.battleEfficiency.uppercased_title'),
                }),
            });
        default:
            return (console.error(`Unknown column ${e}`), null);
    }
}
const zl = 'IconCell_99b0caec';
r.memo(function ({ value: e, name: a, userName: t, className: s }) {
    const { iconsConfig: n } = Rl(),
        o = I.resolve('views'),
        c = pe({
            contentId: o.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: r.useMemo(() => ({ userName: t, paramType: a }), [a, t]),
        });
    if (0 === e) return null;
    const d = n[a] ?? '';
    return i.jsx('div', {
        ...c,
        className: l(zl, s),
        children: i.jsx(O, { width: '32rem', height: '32rem', path: d }),
    });
});
const Ol = 'NumberCell_c62bf499';
r.memo(function ({ value: e, userName: a, name: t, className: s }) {
    const n = I.resolve('views'),
        o = pe({
            contentId: n.read((e) =>
                t === Nl
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: r.useMemo(() => ({ userName: a, paramType: t }), [t, a]),
        });
    return 0 === e ? null : i.jsx('div', { ...o, className: l(Ol, s), children: H.formatNumber('integral', e) });
});
const Fl = {
    base: 'NumberWithCounterCell_f729c44',
    counter: 'NumberWithCounterCell_counter_8bb0eb59',
    counter__hidden: 'NumberWithCounterCell_counter__hidden_468e7d52',
    counterValue: 'NumberWithCounterCell_counterValue_566cc1fa',
    roundedCount: 'NumberWithCounterCell_roundedCount_c97dad37',
};
function Xl({ count: e }) {
    const a = be({ body: e.toString() }),
        t = (s = e) < 1e3 ? s : Math.floor(s / 1e3);
    var s;
    return i.jsx('div', {
        className: Fl.counterValue,
        children:
            t === e
                ? e
                : i.jsx('div', {
                      ...a,
                      className: Fl.roundedCount,
                      children: i.jsx(B, {
                          path: 'common.numberAbbrev',
                          params: { value: H.formatNumber('integral', Math.min(t, 99)) },
                      }),
                  }),
    });
}
r.memo(function ({ value: e, count: a, name: t, userName: s, className: n }) {
    const { iconsConfig: o } = Rl(),
        c = I.resolve('views'),
        d = pe({
            contentId: c.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: r.useMemo(() => ({ userName: s, paramType: t }), [t, s]),
        });
    if (0 === e && 0 === a) return null;
    const m = o[t] ?? '';
    return i.jsxs('div', {
        ...d,
        className: l(Fl.base, n),
        children: [
            e > 0 && H.formatNumber('integral', e),
            i.jsxs('div', {
                className: l(Fl.counter, 0 === a && Fl.counter__hidden),
                children: [
                    i.jsx(O, { className: Fl.icon, width: '32rem', height: '32rem', path: m }),
                    a >= 2 && i.jsx(Xl, { count: a }),
                ],
            }),
        ],
    });
});
const Gl = 'Index_align_5032d1bf',
    $l = 'Index_align__right_9d371d4f',
    Ll = f();
function Ml() {
    return [
        Ll.accessor('killed', {
            id: hl,
            header: (e) => i.jsx(Hl, { info: e, name: hl, className: l(Pl, Tl) }),
            enableSorting: !1,
            meta: { column: wl, className: l(Gl, $l) },
        }),
        Ll.accessor('damageDealt', {
            id: bl,
            header: (e) => i.jsx(Hl, { info: e, name: bl, className: Pl }),
            enableSorting: !1,
            meta: { className: l(Gl, $l), column: wl },
        }),
        Ll.accessor('damageBlockedByArmor', {
            id: vl,
            header: (e) => i.jsx(Hl, { info: e, name: vl, className: Pl }),
            enableSorting: !1,
            meta: { className: l(Gl, $l), column: wl },
        }),
        Ll.accessor('damageAssisted', {
            id: gl,
            header: (e) => i.jsx(Hl, { info: e, name: gl, className: Pl }),
            enableSorting: !1,
            meta: { className: l(Gl, $l), column: wl },
        }),
        Ll.accessor('damageAssistedStun', {
            id: xl,
            header: (e) => i.jsx(Hl, { info: e, name: xl, className: Pl }),
            enableSorting: !1,
            meta: { className: l(Gl, $l), column: wl },
        }),
        Ll.accessor('spotted', {
            id: yl,
            header: (e) => i.jsx(Hl, { info: e, name: yl, className: Pl }),
            enableSorting: !1,
            meta: { className: l(Gl, $l), column: wl },
        }),
        Ll.accessor('criticalDamage', {
            id: Nl,
            header: (e) => i.jsx(Hl, { info: e, name: Nl, className: Pl }),
            enableSorting: !1,
            meta: { className: l(Gl, $l), column: wl },
        }),
    ];
}
const Wl = 'TableHeader_row_a81d3e65',
    Kl = r.memo(function ({ classNames: e }) {
        const { table: a } = ve();
        return i.jsx(ge.Header, {
            className: e?.base,
            children: y(a.getHeaderGroups(), (a, t) =>
                i.jsx(
                    ge.Row,
                    {
                        className: l(Wl, e?.row),
                        children: y(a.headers, (a, s) =>
                            i.jsx(
                                ge.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: e?.cell,
                                    cell: { ...a, rowIndex: t, index: s, tablePart: xe.header },
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
    ql = function ({ data: e, config: a, className: t }) {
        const s = ye();
        return i.jsx(Sl, {
            children: i.jsx(Ne, {
                data: e,
                columns: a,
                enableMultiRowSelection: !1,
                getRowId: (e) => e.account.username,
                children: i.jsx(ge, { className: t, children: i.jsx(Kl, {}) }, s.breakpoint.name),
            }),
        });
    },
    Ul = 'PersonalEfficiency_messagesPanel_d1b1fa0b',
    Zl = 'PersonalEfficiency_message_d772bbd7',
    Yl = 'PersonalEfficiency_totalEfficiency_4de0e87b',
    Ql = 'PersonalEfficiency_totalEfficiencyTable_9139933',
    Jl = 'PersonalEfficiency_clarificationWrapper_5f3072b1',
    eo = o(function () {
        const { model: e } = hs(),
            a = e.computes.personalEfficiency(),
            t = e.battleInfo.get().finishReasonClarification,
            s = I.resolve('strings'),
            { personalEfficiencyRef: n } = ws(),
            [l] = u(() => ({ from: { opacity: 0 }, ref: n })),
            o = r.useMemo(Ml, []);
        return 0 === a.length
            ? i.jsxs(m.div, {
                  style: l,
                  className: Ul,
                  children: [
                      '' !== t &&
                          i.jsx('div', {
                              className: Zl,
                              children: s.readOrEmpty(`battle_results.finish.clarification.${t}`),
                          }),
                      i.jsx('div', {
                          className: Zl,
                          children: s.readOrEmpty('battle_results.common.battleEfficiency.noEfficiency'),
                      }),
                  ],
              })
            : i.jsx('div', {
                  className: Yl,
                  children: i.jsxs(m.div, {
                      style: l,
                      children: [
                          '' !== t &&
                              i.jsx('div', {
                                  className: Jl,
                                  onClick: (e) => e.stopPropagation(),
                                  children: i.jsx('div', {
                                      className: Zl,
                                      children: s.readOrEmpty(`battle_results.finish.clarification.${t}`),
                                  }),
                              }),
                          i.jsx(ql, { data: a, config: o, className: Ql }),
                      ],
                  }),
              });
    }),
    ao = {
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
        statusText: 'Overview_statusText_18ae5a36',
        achievements: 'Overview_achievements_5b2b6582',
        currencies: 'Overview_currencies_d637d5d',
    },
    to = F('Overview', ao.base),
    so = o(function ({ className: e }) {
        const a = I.resolve('strings'),
            t = D(),
            { model: s } = hs(),
            n = s.personalEfficiency.achievements.get(),
            { step: o, battleStatusRef: c, earnedCurrenciesRef: d } = ws(),
            [f] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: c })),
            [_] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: d })),
            { api: p, setCompletedAnimationIndexes: h } = ki(),
            b = s.battleInfo.get()?.winStatus;
        return (
            r.useEffect(() => {
                if (o === vs) {
                    const e = 500 * Math.log(n.length),
                        a = 150 * Math.log(n.length);
                    (p.start((s) => {
                        const r = e - 500 * Math.log(n.length - s),
                            i = a - 150 * Math.log(n.length - s);
                        return {
                            x: 0,
                            y: 0,
                            scale: 1,
                            delay: 200 * s + r,
                            config: { duration: 400 + i, easing: V.cubicBezier(1, 0, 0.95, 1) },
                            onRest() {
                                (t.play('achievementAppeared', { target: 'overview' }), h((e) => A(e, s)));
                            },
                        };
                    }),
                        p.start((t) => ({
                            opacity: 1,
                            delay: 150 + 200 * t + (e - 500 * Math.log(n.length - t)),
                            config: {
                                duration: 250 + (a - 150 * Math.log(n.length - t)),
                                easing: V.cubicBezier(0.33, 0, 0.25, 1),
                            },
                        })));
                }
            }, [o, p, h, t, n.length]),
            i.jsxs(to, {
                className: e,
                children: [
                    i.jsx('div', { className: l(ao.background, b && ao[`background__${b}`]) }),
                    i.jsx('div', { className: ao.cornerShadow }),
                    i.jsx('div', { className: l(ao.bottomGradient, b && ao[`bottomGradient__${b}`]) }),
                    i.jsxs('div', {
                        className: l(ao.info, 0 === n.length && ao.info__withoutMedals),
                        children: [
                            i.jsx(_l, { status: b }),
                            i.jsx('div', {
                                className: ao.statusWrapper,
                                children: i.jsx(m.div, {
                                    style: f,
                                    className: ao.status,
                                    children: i.jsx('div', {
                                        className: ao.statusText,
                                        'data-test-id': 'winStatus',
                                        children: H.toUpperCase(a.readOrEmpty(`battle_results.status.${b}`)),
                                    }),
                                }),
                            }),
                            i.jsx(qi, { className: ao.achievements }),
                            i.jsx(m.div, { style: _, className: ao.currencies, children: i.jsx(dl, {}) }),
                        ],
                    }),
                    i.jsx(eo, {}),
                ],
            })
        );
    }),
    ro = o(function (e) {
        const { model: a } = hs(),
            t = a.personalEfficiency.achievements.get();
        return i.jsx(Hi, { achievements: t, children: i.jsx(so, { ...e }) });
    }),
    no = 'Divider_80a19f4b',
    io = r.forwardRef(function ({ classNames: e, className: a, ...t }, s) {
        return i.jsx('div', {
            ...t,
            ref: s,
            className: l(no, e?.base, a),
            children: i.jsx(O, {
                className: e?.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }),
    lo = {
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
function oo(e, a) {
    return void 0 === a ? 'default' : a === e ? 'hover' : 'extinct';
}
const co = r.forwardRef(function (
        { achievement: e, achievementsLength: a, index: t, hoverIndex: s, setHoverIndex: r, ...n },
        o,
    ) {
        const c = D(),
            d = re({ args: { tooltipId: e.tooltipId, tooltipArgs: e.tooltipArgs } }),
            m = te(
                { width: '48rem', height: '48rem', path: `achievement.c_48x48.${e.iconName}` },
                { medium: { width: '67rem', height: '71rem', path: `achievement.${e.iconName}` } },
            );
        return i.jsx('div', {
            ...n,
            ...d,
            className: l(lo.achievement, lo[`achievement__${oo(t, s)}`]),
            style: { zIndex: t === s ? a + 1 : a - t },
            onMouseEnter: function (e) {
                (d.onMouseEnter(e),
                    r(t),
                    c.play('mouse-enter', { original: e, target: 'team-efficiency:efficiency-details:achievement' }));
            },
            onMouseLeave: () => {
                (d.onMouseLeave(), r(void 0));
            },
            children: i.jsx(O, { ref: o, className: lo.achievementIcon, ...m }, e.iconName),
        });
    }),
    mo = o(function ({ team: e, account: a, vehicles: t, achievements: s, squadIndex: n, personal: o }) {
        const c = I.resolve('strings'),
            [d, m] = r.useState(void 0),
            { model: u, controls: f } = hs(),
            _ = u.teamsStatistic.selectedVehicle.get(),
            p = u.computes.personalInfo(),
            h = te({ width: '230rem', height: '184rem' }, { medium: { width: '290rem', height: '232rem' } }),
            b = be({
                header: c.readOrEmpty('tooltips.anonymizer.teamStats.header').replace('%(name)s', a.username),
                body: c.readOrEmpty('tooltips.anonymizer.teamStats.body'),
            }),
            v = _s({ personal: o, platoonType: fs(e, p.squadIndex, n), anonymizer: a.anonymizer });
        return i.jsxs('div', {
            className: lo.header,
            children: [
                i.jsx('div', {
                    className: lo.vehicleImageWrapper,
                    children: i.jsx(je, { name: _ ?? '', width: h.width, height: h.height }),
                }),
                i.jsxs('div', {
                    className: lo.info,
                    children: [
                        i.jsxs(we, {
                            className: lo.accountInfo,
                            children: [
                                '' !== a.badge &&
                                    i.jsx(we.Badge, {
                                        className: lo.accountInfoGap,
                                        size: we.Badge.sizes.x48x48,
                                        badgeId: a.badge,
                                    }),
                                i.jsx(we.Name, {
                                    className: l(lo.accountName, lo.accountInfoGap),
                                    children: i.jsx(Ie, { text: v ? a.fakeUsername : a.username }),
                                }),
                                '' !== a.clanAbbreviation &&
                                    !v &&
                                    i.jsx(we.ClanTag, {
                                        className: lo.clanAbbreviation,
                                        children: i.jsx(B, {
                                            path: 'common.clanTag',
                                            params: { abbrev: a.clanAbbreviation },
                                            brackets: { start: '{', end: '}' },
                                        }),
                                    }),
                                0 !== a.igrType &&
                                    i.jsx(we.IgrIcon, { size: we.IgrIcon.sizes.x64x28, className: lo.accountInfoGap }),
                                '' !== a.suffixBadge &&
                                    i.jsx(we.Stripe, {
                                        size: we.Stripe.sizes.regular,
                                        badgeId: a.suffixBadge,
                                        className: lo.accountInfoGap,
                                    }),
                                a.anonymizer &&
                                    i.jsx(we.AnonymizerIcon, {
                                        ...b,
                                        size: we.AnonymizerIcon.sizes.x32x32,
                                        className: lo.anonymizerIcon,
                                    }),
                            ],
                        }),
                        i.jsx('div', {
                            className: lo.vehicle,
                            children: i.jsx(yi, {
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
                            i.jsx('div', {
                                className: lo.achievements,
                                children: y(ts(s), (e, a) =>
                                    i.jsx(
                                        co,
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
    uo = F('StatisticsLabel'),
    fo = I.resolve('strings'),
    _o = r.forwardRef(function ({ labelKey: e, ...a }, t) {
        return i.jsx(uo, { ...a, ref: t, children: fo.readOrEmpty(e) });
    }),
    po = 'Value_798a6cdd',
    ho = 'Value_separator_798a6cdd',
    bo = I.resolve('strings');
function vo(e, a) {
    switch (e) {
        case zt.Integer:
            return H.formatNumber('integral', a);
        case zt.Float:
            return H.formatReal('fractional', a);
        default:
            return a;
    }
}
const go = F('StatisticsValue', po),
    xo = r.forwardRef(function (
        {
            labelKey: e,
            value: a,
            type: t,
            valueSeparatorKey: s = 'common.common.slash',
            className: n,
            classNames: o,
            ...c
        },
        d,
    ) {
        return i.jsx(go, {
            ...c,
            ref: d,
            className: l(o?.base, n),
            children: y(a, (n, c) =>
                i.jsxs(
                    r.Fragment,
                    {
                        children: [
                            i.jsx('div', {
                                className: l(0 === n && o?.zeroValue, n < 0 && o?.negativeValue),
                                children: vo(t, n),
                            }),
                            c < a.length - 1 &&
                                i.jsxs('div', {
                                    className: l(ho, o?.separator),
                                    children: [' ', bo.readOrEmpty(s), ' '],
                                }),
                        ],
                    },
                    `${e}_value_${c}`,
                ),
            ),
        });
    }),
    yo = 'Index_scrollAreaContent_52a570a',
    No = 'Index_scrollAreaContent__initialized_b2629fde',
    jo = 'Index_item_6b7cdfb0',
    wo = 'Index_separator_add04e19',
    Io = F('Statistics', 'Index_statistics_638478ff'),
    Ro = F('StatisticsItem', jo),
    So = F('StatisticsItemSeparator', wo);
function Co({ children: e, scrollbarProps: a, scrollAreaProps: t }) {
    const s = W(),
        r = kr(s.api);
    return i.jsxs(i.Fragment, {
        children: [
            i.jsx(K, {
                ...t,
                classNames: { ...t?.classNames, content: l(yo, r && No, t?.classNames?.content) },
                children: e,
            }),
            i.jsx(M, { ...a }),
        ],
    });
}
const Po = r.forwardRef(function ({ scrollbarProps: e, scrollAreaProps: a, ...t }, s) {
    return i.jsx(Io, {
        ...t,
        ref: s,
        children: i.jsx(L, { children: i.jsx(Co, { ...t, scrollbarProps: e, scrollAreaProps: a }) }),
    });
});
((Po.Item = Ro), (Po.Value = xo), (Po.Label = _o), (Po.Separator = So));
const To = 'PlayerStatistics_scrollbar_987bbca2',
    Do = 'PlayerStatistics_scrollAreaContent_8636fa99',
    Vo = 'PlayerStatistics_listItemSeparator_32247273',
    Ao = 'PlayerStatistics_listItem_27e9eeba',
    Bo = 'PlayerStatistics_frontlinePramLabel_5c3a9665',
    ko = 'PlayerStatistics_label_fceb862d',
    Eo = 'PlayerStatistics_value_6831d5c1',
    Ho = 'PlayerStatistics_zeroValue_d98b2431',
    zo = 'PlayerStatistics_valueSeparator_dcf01904',
    Oo = 'PlayerStatistics_listSubItem_db8ef127',
    Fo = 'PlayerStatistics_separator_4e8ac571',
    Xo = 'PlayerStatistics_separatorSquare_5e440c20';
function Go({ squareSize: e = 1, spacing: a = 2, backgroundColor: t = '#d9d9d9' }) {
    const s = r.useRef(null),
        [n, l] = r.useState(0),
        o = e + a,
        c = r.useCallback(() => {
            const e = s.current;
            if (null !== e) {
                const a = e.getBoundingClientRect().width,
                    t = Re(a);
                l(Math.floor(t / o));
            }
        }, [o]);
    return (
        Se(c, [s.current, o, c]),
        r.useEffect(() => Q(c), [c]),
        i.jsx('div', {
            ref: s,
            className: Fo,
            children: Array.from({ length: n }).map((a, s) =>
                i.jsx(
                    'div',
                    {
                        className: Xo,
                        style: { backgroundColor: t, width: `${e}rem`, height: `${e}rem`, left: s * o + 'rem' },
                    },
                    s,
                ),
            ),
        })
    );
}
const $o = I.resolve('strings'),
    Lo = (e) =>
        'boolean' == typeof e
            ? e
                ? $o.readOrEmpty('fl_post_battle_results.battleInfo.yes')
                : $o.readOrEmpty('fl_post_battle_results.battleInfo.no')
            : e;
function Mo({ list: e, frontLineParams: a, isGeneralInfo: t }) {
    return i.jsxs(Po, {
        scrollbarProps: { classNames: { base: To } },
        scrollAreaProps: { classNames: { content: Do } },
        children: [
            t &&
                Object.entries(a).map(([e, a]) =>
                    i.jsxs(
                        Po.Item,
                        {
                            className: Ao,
                            children: [
                                i.jsx(Po.Label, {
                                    className: Bo,
                                    labelKey: `fl_post_battle_results.battleInfo.labels_${e}`,
                                }),
                                i.jsx(Po.Separator, { className: Vo, children: i.jsx(Go, {}) }),
                                i.jsx('div', { className: l(Eo, !a && Ho), children: Lo(a) }),
                            ],
                        },
                        e,
                    ),
                ),
            y(e, (e) =>
                i.jsxs(
                    r.Fragment,
                    {
                        children: [
                            i.jsxs(Po.Item, {
                                className: Ao,
                                children: [
                                    i.jsx(Po.Label, {
                                        className: ko,
                                        labelKey: `battle_results.team.stats.labels_${e.labelKey}`,
                                    }),
                                    i.jsx(Po.Separator, { className: Vo, children: i.jsx(Go, {}) }),
                                    i.jsx(Po.Value, {
                                        classNames: { base: Eo, zeroValue: Ho, separator: zo },
                                        labelKey: e.labelKey,
                                        value: e.value,
                                        type: e.paramValueType,
                                    }),
                                ],
                            }),
                            void 0 !== e.details &&
                                y(e.details, (e) =>
                                    i.jsxs(
                                        Po.Item,
                                        {
                                            className: l(Ao, Oo),
                                            children: [
                                                i.jsx(Po.Label, {
                                                    className: ko,
                                                    labelKey: `battle_results.team.stats.labels_${e.labelKey}`,
                                                }),
                                                i.jsx(Po.Separator, { className: Vo, children: i.jsx(Go, {}) }),
                                                i.jsx(Po.Value, {
                                                    classNames: { base: Eo, zeroValue: Ho, separator: zo },
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
const Wo = 'EfficiencyDetails_efficiencyDetails__allies_20b1febc',
    Ko = 'EfficiencyDetails_efficiencyDetails__enemies_23a29af',
    qo = 'EfficiencyDetails_divider_85b11efd',
    Uo = 'EfficiencyDetails_dividerImage_5b9d06d2',
    Zo = 'EfficiencyDetails_closeIcon_8d81da90',
    Yo = 'EfficiencyDetails_statistics_30a81815',
    Qo = F('EfficiencyDetails', 'EfficiencyDetails_efficiencyDetails_db8069eb', {
        variants: { team: { [cs]: Wo, [ds]: Ko } },
    }),
    Jo = o(function ({ team: e, className: a }) {
        const { model: t, controls: s } = hs(),
            n = t.teamsStatistic.selectedVehicle.get(),
            l = t.computes.efficiencyDetails(),
            o = r.useMemo(
                () => g(l?.vehicles ?? [], (e) => (n ? e.vehicle?.techName === n : e.isGeneralInfo)),
                [n, l?.vehicles],
            ),
            c = D(),
            d = r.useRef(null);
        return (
            r.useEffect(() => {
                const e = Ce.down(([, e]) => {
                        'outside' === e && s.teamEfficiency.selectRow(void 0);
                    }),
                    a = Pe(window, 'click', (e) => {
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
            o || l
                ? i.jsxs(Qo, {
                      team: e,
                      className: a,
                      ref: d,
                      children: [
                          l &&
                              i.jsx(mo, {
                                  team: e,
                                  account: l.account,
                                  squadIndex: l.squadIndex,
                                  achievements: l.achievements,
                                  personal: l.personal,
                                  vehicles: l.vehicles,
                              }),
                          o &&
                              i.jsx('div', {
                                  className: Yo,
                                  children: i.jsx(Mo, {
                                      isGeneralInfo: o.isGeneralInfo,
                                      frontLineParams: {
                                          objectivesReached: o.objectivesReached,
                                          objectivesDestroyed: o.objectivesDestroyed,
                                          zoneCaptured: o.zoneCaptured,
                                      },
                                      list: o.detailedStatistics,
                                  }),
                              }),
                          i.jsx(io, { classNames: { base: qo, image: Uo } }),
                          i.jsx(O, {
                              className: Zo,
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
    ec = 'squadIndex',
    ac = 'account',
    tc = 'rank',
    sc = 'damageDealt',
    rc = 'kills',
    nc = 'earnedXp',
    ic = 'respawns',
    lc = 'achievements',
    oc = 'AccountInfoCell_accountInfo_dec8771',
    cc = 'AccountInfoCell_accountName_758104df',
    dc = 'AccountInfoCell_clanAbbreviation_99f1cc86',
    mc = 'AccountInfoCell_badge_b101914f',
    uc = 'AccountInfoCell_anonymizerIcon_a1d51ca4',
    fc = 'AccountInfoCell_igrIcon_158694e7',
    _c = 'AccountInfoCell_stripe_fefba7b2',
    pc = o(function ({ account: e, team: a, platoon: t, className: s, classNames: r, ...n }) {
        const { model: o } = hs(),
            c = o.computes.personalInfo(),
            d = _s({
                personal: c.account.username === e.username,
                platoonType: fs(a, c.squadIndex, t),
                anonymizer: e.anonymizer,
            });
        return i.jsxs(we, {
            ...n,
            className: l(oc, s),
            children: [
                '' !== e.badge &&
                    i.jsx(we.Badge, { size: we.Badge.sizes.x24x24, badgeId: e.badge, className: l(mc, r?.badge) }),
                i.jsx(we.Name, {
                    className: l(cc, r?.username),
                    children: i.jsx(Ie, { text: d ? e.fakeUsername : e.username }),
                }),
                '' !== e.clanAbbreviation &&
                    !d &&
                    i.jsx(we.ClanTag, {
                        className: l(dc, r?.clanAbbreviation),
                        children: i.jsx(B, {
                            path: 'common.clanTag',
                            params: { abbrev: e.clanAbbreviation },
                            brackets: { start: '{', end: '}' },
                        }),
                    }),
                0 !== e.igrType && i.jsx(we.IgrIcon, { size: we.IgrIcon.sizes.x34x16, className: l(fc, r?.igrIcon) }),
                '' !== e.suffixBadge &&
                    i.jsx(we.Stripe, {
                        size: we.Stripe.sizes.default,
                        badgeId: e.suffixBadge,
                        className: _c,
                        classNames: r?.suffixBadge,
                    }),
                e.anonymizer &&
                    i.jsx(we.AnonymizerIcon, {
                        size: we.AnonymizerIcon.sizes.x24x24,
                        className: l(uc, r?.anonymizerIcon),
                    }),
            ],
        });
    }),
    hc = 'AchievementsCell_achievementCell_e9bf973c',
    bc = 'AchievementsCell_achievementsAmount_349c209a';
function vc({ achievements: e }) {
    const a = I.resolve('strings'),
        t = be({ body: y(ts(e), (e) => a.readOrEmpty(`achievements.${e.name}`)).join('\n') }),
        s = e.length;
    return 0 === s
        ? null
        : i.jsxs('div', {
              ...t,
              className: hc,
              children: [
                  i.jsx(O, { path: 'library.medal', width: '32rem', height: '32rem' }),
                  i.jsx('div', { className: bc, children: H.formatNumber('integral', s) }),
              ],
          });
}
const gc = { behaviour: fe.static, size: '32rem' },
    xc = { behaviour: fe.static, size: '294rem' },
    yc = { behaviour: fe.static, size: '392rem' },
    Nc = { behaviour: fe.static, size: '496rem' },
    jc = { behaviour: fe.static, size: '40rem' },
    wc = { behaviour: fe.static, size: '60rem' },
    Ic = { behaviour: fe.static, size: '56rem' },
    Rc = { behaviour: fe.static, size: '60rem' },
    Sc = { behaviour: fe.static, size: '80rem' },
    Cc = { behaviour: fe.static, size: '40rem' },
    Pc = { behaviour: fe.static, size: '60rem' },
    Tc = { behaviour: fe.static, size: '56rem' },
    Dc = { behaviour: fe.static, size: '60rem' },
    Vc = { behaviour: fe.static, size: '80rem' },
    Ac = { behaviour: fe.static, size: '40rem' },
    Bc = { behaviour: fe.static, size: '56rem' },
    kc = { behaviour: fe.static, size: '40rem' },
    Ec = {
        [ec]: { [_e.extraSmall]: gc, [_e.medium]: gc, [_e.large]: gc, [_e.extraLarge]: gc },
        [ac]: { [_e.extraSmall]: xc, [_e.medium]: yc, [_e.large]: yc, [_e.extraLarge]: Nc },
        [tc]: { [_e.extraSmall]: jc, [_e.medium]: wc, [_e.large]: wc, [_e.extraLarge]: wc },
        [sc]: { [_e.extraSmall]: Ic, [_e.medium]: Rc, [_e.large]: Rc, [_e.extraLarge]: Sc },
        [rc]: { [_e.extraSmall]: Cc, [_e.medium]: Pc, [_e.large]: Pc, [_e.extraLarge]: Pc },
        [nc]: { [_e.extraSmall]: Tc, [_e.medium]: Dc, [_e.large]: Dc, [_e.extraLarge]: Vc },
        [ic]: { [_e.extraSmall]: Ac, [_e.medium]: Bc, [_e.large]: Bc, [_e.extraLarge]: Bc },
        [lc]: { [_e.extraSmall]: kc, [_e.medium]: kc, [_e.large]: kc, [_e.extraLarge]: kc },
    },
    Hc = {
        root: 'HeaderCell_root_204e6a44',
        'media-wrapper': 'HeaderCell_media-wrapper_204e6a44',
        headerCell__asc: 'HeaderCell_headerCell__asc_204e6a44',
        headerCell__desc: 'HeaderCell_headerCell__desc_dc5a7202',
        headerCell: 'HeaderCell_headerCell_5b34d1b1',
        headerCell__icon: 'HeaderCell_headerCell__icon_cfa14ddf',
        headerCell__text: 'HeaderCell_headerCell__text_b476890c',
        icon: 'HeaderCell_icon_5a06734a',
    },
    zc = [tc, ic],
    Oc = {
        [ec]: 'library.shield',
        [tc]: 'rank',
        [sc]: 'library.cross_with_gap',
        [rc]: 'library.crossed_tank',
        [nc]: 'library.star',
        [ic]: 'respawns',
        [lc]: 'library.medal',
    },
    Fc = {
        [ec]: 'squadHeader',
        [ac]: 'playerHeader',
        [tc]: 'epicRankHeader',
        [sc]: 'damageHeader',
        [rc]: 'fragHeader',
        [nc]: 'xpHeader',
        [ic]: 'epicRespawnHeader',
        [lc]: 'medalHeader',
    },
    Xc = r.forwardRef(function ({ name: e, team: a, column: t, className: s, ...r }, n) {
        const o = t.getIsSorted(),
            c = I.resolve('strings'),
            d = be({
                header: c.readOrEmpty(`battle_results.team.${Fc[e]}.header`),
                body: c.readOrEmpty(`battle_results.team.${Fc[e]}.body`),
            }),
            m = e === ac,
            u = zc.includes(e);
        return i.jsx('div', {
            ...r,
            ...d,
            ref: n,
            className: l(Hc.headerCell, m ? Hc.headerCell__text : Hc.headerCell__icon, o && Hc[`headerCell__${o}`], s),
            children: m
                ? c.readOrEmpty(`battle_results.team.stats.${a}`)
                : u
                  ? i.jsx('div', {
                        style: {
                            backgroundImage: `url(${R.images.frontline.gui.maps.icons.postBattleResults.$dyn(Oc[e])})`,
                        },
                        className: Hc.icon,
                    })
                  : i.jsx(O, { path: Oc[e], className: Hc.icon }),
        });
    }),
    Gc = 'NumberValueCell_numberValueCell_35482257';
function $c({ value: e, className: a, showZero: t = !0 }) {
    return !1 === t && 0 === e ? null : i.jsx('div', { className: l(Gc, a), children: H.formatNumber('integral', e) });
}
const Lc = {
        root: 'PlatoonCell_root_45cd697',
        'media-wrapper': 'PlatoonCell_media-wrapper_45cd697',
        platoon: 'PlatoonCell_platoon_5fe0374b',
        platoonText: 'PlatoonCell_platoonText_b6a98287',
        platoonText__personal: 'PlatoonCell_platoonText__personal_d021db4c',
        platoonText__alien: 'PlatoonCell_platoonText__alien_9767e814',
    },
    Mc = { [us]: 'library.platoon_indicator_gray', [ms]: 'library.platoon_indicator_orange' },
    Wc = o(function ({ platoon: e, team: a }) {
        const { model: t } = hs(),
            s = fs(a, t.computes.personalInfo().squadIndex, e);
        if (null === s) return null;
        const r = Mc[s];
        return i.jsxs('div', {
            className: Lc.platoon,
            children: [
                i.jsx(O, { path: r, width: '32rem', height: '32rem' }),
                i.jsx('div', { className: l(Lc.platoonText, Lc[`platoonText__${s}`]), children: e }),
            ],
        });
    }),
    Kc = 'RankCell_5390b3e9';
function qc({ rank: e }) {
    return i.jsx('div', {
        style: { backgroundImage: `url(${R.images.frontline.gui.maps.icons.ranksSilver.c_24x24.$dyn(`rank_${e}`)})` },
        className: Kc,
    });
}
const Uc = 'EfficiencyTable_efficiencyTable__allies_b2f99733',
    Zc = 'EfficiencyTable_efficiencyTable__enemies_1ba35ae7',
    Yc = 'EfficiencyTable_header_412b5b7b',
    Qc = 'EfficiencyTable_rowsWrapper_da034938',
    Jc = 'EfficiencyTable_efficiencyTable_e622a43e',
    ed = 'EfficiencyTable_alignLeft_a52cfd11',
    ad = 'EfficiencyTable_alignRight_46cf6a64',
    td = 'EfficiencyTable_table_f467cc44',
    sd = 'EfficiencyTable_tableBody_5b14613b',
    rd = 'EfficiencyTable_scrollBar_f4e5aa11',
    nd = 'EfficiencyTable_scrollAreaContent_4fa5a5ab',
    id = 'EfficiencyTable_mask_8fbe6740',
    ld = {
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
    od = p(),
    cd = (e, a, t) => {
        const s = e.getValue('account'),
            r = e.getValue('squadIndex');
        return _s({
            personal: a.account.username === s.username,
            platoonType: fs(t, a.squadIndex, r),
            anonymizer: s.anonymizer,
        })
            ? s.fakeUsername
            : s.username;
    },
    dd = ({ team: e, personalInfo: a, breakpointName: t }) => {
        const s = (t, s) =>
                ((e, a, t, s) => {
                    const r = cd(e, t, s),
                        n = cd(a, t, s);
                    return r.localeCompare(n);
                })(t, s, a, e),
            r = 'small' === t ? _e.extraSmall : t;
        return [
            od.accessor('squadIndex', {
                id: ec,
                header: (e) => i.jsx(Xc, { name: ec, column: e.column }),
                sortingFn: (e, a) => {
                    const t = a.getValue('squadIndex') - e.getValue('squadIndex');
                    return 0 !== t ? t : s(e, a);
                },
                cell: (a) => i.jsx(Wc, { team: e, platoon: a.cell.getValue() }),
                meta: { column: Ec[ec][r] },
            }),
            od.accessor('account', {
                id: ac,
                header: (a) => i.jsx(Xc, { team: e, name: ac, column: a.column }),
                sortDescFirst: !1,
                sortingFn: s,
                cell: (a) =>
                    i.jsx(pc, {
                        account: a.cell.getValue(),
                        team: e,
                        platoon: a.row.original.squadIndex,
                        className: ld.accountInfo,
                        classNames: { username: ld.accountName, clanAbbreviation: ld.clanAbbreviation },
                    }),
                meta: { column: Ec[ac][r], className: ed },
            }),
            od.accessor('rank', {
                id: tc,
                header: (e) => i.jsx(Xc, { name: tc, column: e.column }),
                sortingFn: (e, a) => e.getValue('rank') - a.getValue('rank') || s(e, a),
                cell: (e) => i.jsx(qc, { rank: e.cell.getValue() }),
                meta: { column: Ec[tc][r] },
            }),
            od.accessor('efficiencyValues', {
                id: sc,
                header: (e) => i.jsx(Xc, { name: sc, column: e.column }),
                sortingFn: (e, a) =>
                    (e.getValue('damageDealt').damageDealt ?? 0) - (a.getValue('damageDealt').damageDealt ?? 0) ||
                    s(e, a),
                cell: (e) => i.jsx($c, { value: e.getValue().damageDealt ?? 0, className: ld.numberValue }),
                meta: { column: Ec[sc][r], className: ad },
            }),
            od.accessor('efficiencyValues', {
                id: rc,
                header: (e) => i.jsx(Xc, { name: rc, column: e.column }),
                sortingFn: (e, a) =>
                    e.getValue('kills').subtractedAlliesKills - a.getValue('kills').subtractedAlliesKills || s(e, a),
                cell: (e) =>
                    i.jsx($c, { showZero: !1, value: e.getValue().subtractedAlliesKills, className: ld.numberValue }),
                meta: { column: Ec[rc][r] },
            }),
            od.accessor('efficiencyValues', {
                id: nc,
                header: (e) => i.jsx(Xc, { name: nc, column: e.column }),
                sortingFn: (e, a) =>
                    (e.getValue('earnedXp')?.earnedXp ?? 0) - (a.getValue('earnedXp')?.earnedXp ?? 0) || s(e, a),
                cell: (e) => i.jsx($c, { value: e.getValue().earnedXp ?? 0, className: ld.numberValue }),
                meta: { column: Ec[nc][r], className: ad },
            }),
            od.accessor('respawns', {
                id: ic,
                header: (e) => i.jsx(Xc, { name: ic, column: e.column }),
                sortingFn: (e, a) => e.getValue('respawns') - a.getValue('respawns') || s(e, a),
                cell: (e) => i.jsx($c, { value: e.row.original.respawns, showZero: !1, className: ld.numberValue }),
                meta: { column: Ec[ic][r] },
            }),
            od.accessor('achievements', {
                id: lc,
                header: (e) => i.jsx(Xc, { name: lc, column: e.column }),
                sortingFn: (e, a) => e.getValue('achievements').length - a.getValue('achievements').length || s(e, a),
                cell: (e) => i.jsx(vc, { achievements: e.getValue() }),
                meta: { column: Ec[lc][r], className: ed },
            }),
        ];
    },
    md = 'Header_row_e61ae0d9',
    ud = 'Header_rowDivider_f54d9df6',
    fd = 'Header_rowDividerImage_19f6e11',
    _d = 'Header_cell_70aa1da5';
function pd({ className: e }) {
    const { table: a } = ve(),
        t = D();
    return i.jsxs(ge.Header, {
        className: e,
        children: [
            i.jsx(io, { classNames: { base: ud, image: fd } }),
            y(a.getHeaderGroups(), (e, a) =>
                i.jsx(
                    ge.Row,
                    {
                        className: md,
                        children: y(e.headers, (e, s) => {
                            return i.jsx(
                                ge.Cell,
                                {
                                    onClick:
                                        ((r = e.column.getToggleSortingHandler()),
                                        function (e) {
                                            (r?.(e),
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
                                    cell: { ...e, rowIndex: a, index: s, tablePart: xe.header },
                                    className: _d,
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
const hd = 'SelectedRowTail_selectedRowTail_8abda9c8',
    bd = 'SelectedRowTail_selectedRowTail__hasWidth_6cb87e09',
    vd = 'SelectedRowTail_selectedRowVerticalLine_c502cc58',
    gd = 'SelectedRowTail_selectedRowTriangle_6f2b6bb3',
    xd = 'SelectedRowTail_rowDivider_8fbc881',
    yd = 'SelectedRowTail_rowDivider__bottom_4111cb99',
    Nd = 'SelectedRowTail_rowDividerImage_d11f29d5';
function jd({ className: e, short: a }) {
    return i.jsxs('div', {
        className: l(hd, !a && bd, e),
        children: [
            i.jsx(io, { classNames: { base: xd, image: Nd } }),
            i.jsx(io, { classNames: { base: l(xd, yd), image: Nd } }),
            i.jsx('div', { className: vd }),
            i.jsx('div', { className: gd }),
        ],
    });
}
const wd = 'personal',
    Id = 'personalSquad',
    Rd = 'none',
    Sd = o(function ({ row: e, team: a, rowIndex: t, scrollbarVisible: s }) {
        const { model: r, controls: n } = hs(),
            o = D(),
            c = Te(
                (t) => {
                    (t.stopPropagation(),
                        o.play('click', { original: t, target: 'team-efficiency:efficiency-table:body:row' }),
                        n.teamEfficiency.selectRow({ team: a, username: e.original.account.username }));
                },
                [n.teamEfficiency, e.original.account.username, o, a],
                20,
            ),
            d = r.teamsStatistic.selectedRow.get(),
            m = r.computes.personalInfo(),
            u = (() => {
                if (m.account.username === e.original.account.username) return wd;
                return fs(a, m.squadIndex, e.original.squadIndex) === ms ? Id : Rd;
            })(),
            f = e.original.account.teamKiller,
            _ = d?.team === a && d.username === e.original.account.username,
            p = De({ args: { databaseID: e.original.databaseId } });
        return i.jsxs(ge.Row, {
            ...(u !== wd && p),
            onMouseEnter: (e) =>
                o.play('mouse-enter', { target: 'team-efficiency:efficiency-table:body:row', original: e }),
            className: l(
                ld.tableBodyRow,
                _ && ld.tableBodyRow__selected,
                u !== Rd && ld[`tableBodyRow__${u}`],
                f && ld.tableBodyRow__teamKiller,
            ),
            onClick: c,
            children: [
                i.jsxs('div', {
                    className: ld.selectedOverlay,
                    children: [
                        i.jsx(io, { classNames: { base: ld.selectedOverlayDivider, image: ld.selectedOverlayImage } }),
                        i.jsx(io, {
                            classNames: {
                                base: l(ld.selectedOverlayDivider, ld.selectedOverlayDivider__bottom),
                                image: ld.selectedOverlayImage,
                            },
                        }),
                        i.jsx(jd, {
                            short: s && a === cs,
                            className: l(ld.selectedRowTail, ld[`selectedRowTail__${a}`]),
                        }),
                    ],
                }),
                i.jsx(io, { classNames: { base: ld.rowDivider, image: ld.rowDividerImage } }),
                y(e.getVisibleCells(), (e, a) =>
                    i.jsx(
                        ge.Cell,
                        {
                            cell: { ...e, rowIndex: t, index: a, tablePart: xe.body },
                            children: h(e.column.columnDef.cell, e.getContext()),
                        },
                        e.id,
                    ),
                ),
            ],
        });
    });
function Cd({ team: e }) {
    const { table: a } = ve(),
        { api: t } = W(),
        s = Ve(),
        n = r.useRef(null),
        [l, o] = r.useState(!1),
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
        i.jsxs(ge.Body, {
            className: sd,
            children: [
                i.jsx(m.div, {
                    className: id,
                    style: c,
                    children: i.jsx(K, {
                        classNames: { content: nd },
                        children: i.jsx('div', {
                            ref: n,
                            className: Qc,
                            children: y(a.getRowModel().rows, (a, t) =>
                                i.jsx(Sd, { row: a, rowIndex: t, team: e, scrollbarVisible: l }, a.id),
                            ),
                        }),
                    }),
                }),
                i.jsx(M, { classNames: { base: rd } }),
            ],
        })
    );
}
const Pd = F('TeamEfficiencyTable', Jc, { variants: { team: { [cs]: Uc, [ds]: Zc } } }),
    Td = {
        [Ue.Squad]: ec,
        [Ue.Player]: ac,
        [Ue.Rank]: tc,
        [Ue.Damage]: sc,
        [Ue.Frag]: rc,
        [Ue.Xp]: nc,
        [Ue.Respawns]: ic,
        [Ue.Medal]: lc,
    },
    Dd = o(({ team: e, data: a, className: t }) => {
        const { model: s, controls: n } = hs(),
            l = s.computes.personalInfo(),
            o = s.teamsStatistic.sorting.get(),
            c = r.useMemo(() => [{ id: Td[o.column], desc: o.sortDirection === Ze.Desc }], [o.column, o.sortDirection]),
            d = ye().breakpoint.name,
            m = r.useCallback(
                (e) => {
                    const a = (e instanceof Function ? e(c) : e)[0] ?? { id: tc, desc: !0 };
                    n.teamEfficiency.sort({
                        column: Object.keys(Td).find((e) => Td[e] === a.id) || Ue.Rank,
                        sortDirection: a.desc ? Ze.Desc : Ze.Asc,
                    });
                },
                [c, n.teamEfficiency],
            ),
            u = r.useMemo(() => dd({ team: e, personalInfo: l, breakpointName: d }), [e, d, l]);
        return (
            b(Ae(d), `Such breakpoint ${d} is not supported`),
            i.jsx(Ne, {
                columns: u,
                data: a,
                enableMultiRowSelection: !1,
                enableSortingRemoval: !1,
                sorting: c,
                onSortingChange: m,
                getRowId: (e) => e.account.username,
                enableSorting: !0,
                children: i.jsx(Pd, {
                    team: e,
                    className: t,
                    children: i.jsxs(
                        ge,
                        {
                            className: td,
                            children: [i.jsx(pd, { className: Yc }), i.jsx(L, { children: i.jsx(Cd, { team: e }) })],
                        },
                        d,
                    ),
                }),
            })
        );
    }),
    Vd = 'TeamEfficiency_wrapper_a2a49ce',
    Ad = 'TeamEfficiency_table_5763cf17',
    Bd = 'TeamEfficiency_table__hidden_e8864815',
    kd = 'TeamEfficiency_details_f087bb8e',
    Ed = 'TeamEfficiency_details__visible_eaf91b76',
    Hd = F('TeamEfficiency', 'TeamEfficiency_ab8dfa62'),
    zd = o(function ({ className: e }) {
        const { model: a } = hs(),
            t = a.teamsStatistic.allies.get(),
            s = a.teamsStatistic.enemies.get(),
            r = a.teamsStatistic.selectedRow.get();
        return i.jsx(Hd, {
            className: e,
            children: i.jsxs('div', {
                className: Vd,
                children: [
                    i.jsx(Jo, { team: ds, className: l(kd, r?.team === ds && Ed) }),
                    i.jsx(Dd, { data: t, team: cs, className: l(Ad, r?.team === ds && Bd) }),
                    i.jsx(Jo, { team: cs, className: l(kd, r?.team === cs && Ed) }),
                    i.jsx(Dd, { data: s, team: ds, className: l(Ad, r?.team === cs && Bd) }),
                ],
            }),
        });
    }),
    Od = {
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
    Fd = F('PostBattle', Od.base),
    Xd = F('PostBattleNavigation', Od.navigation);
function Gd() {
    const { active: e } = Be();
    return i.jsxs('div', {
        className: Od[`content__${e}`],
        children: [
            i.jsx(ro, { className: l(Od.tab, Od.tab__overview) }),
            i.jsx(zd, { className: l(Od.tab, Od.tab__teamScore) }),
            i.jsx(Ai, { className: l(Od.tab, Od.tab__financialReport) }),
        ],
    });
}
const $d = o(function () {
    const e = I.resolve('strings'),
        { battleInfoRef: a, navigationRef: t, completedSteps: s } = ws(),
        [r] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: t })),
        [n] = u(() => ({ from: { opacity: 0 }, ref: a })),
        { model: o, controls: c } = hs(),
        d = o.battleInfo.get(),
        { active: f } = Be();
    return (
        ke(Ee.ESCAPE, c.close),
        He(() => {
            function e(e) {
                e.altKey || e.shiftKey || e.ctrlKey || ze.tooltip.hideAll();
            }
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }),
        i.jsxs(Fd, {
            className: l(Od.base, Od[`base__${f}`]),
            children: [
                i.jsx(Gd, {}),
                i.jsx(m.div, {
                    style: r,
                    children: i.jsx(Xd, {
                        className: !s.has(gs) && Od.navigation__disabled,
                        children: i.jsxs(Oe.Switcher, {
                            className: Od.switcher,
                            children: [
                                i.jsx(Oe.Tab, {
                                    tabId: Qe.overview,
                                    children: H.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.battleResults'),
                                    ),
                                }),
                                i.jsx(Oe.Tab, {
                                    tabId: Qe.teamScore,
                                    children: H.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.teamEfficiency'),
                                    ),
                                }),
                                i.jsx(Oe.Tab, {
                                    tabId: Qe.financialReport,
                                    children: H.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.financialReport'),
                                    ),
                                }),
                            ],
                        }),
                    }),
                }),
                d &&
                    i.jsx(m.div, {
                        className: Od.info,
                        style: n,
                        children: i.jsxs(Ps, {
                            children: [
                                i.jsx(Ps.Arena, {
                                    arenaName: d.arenaName,
                                    scenario: d.scenario,
                                    finishReason: d.finishReason,
                                }),
                                i.jsx(Ps.StartTime, {
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
function Ld() {
    const e = Fe(),
        { size: a } = te({ size: Xe.small }, { large: { size: Xe.medium }, extraLarge: { size: Xe.large } });
    return i.jsx(Oe, {
        theme: 'primary',
        size: a,
        active: aa(e.location),
        onActiveChange: (a) => {
            a in Qe ? e.push(ea[a]) : console.error(`Invalid tab ID: ${a}`);
        },
        children: i.jsx(Is, { children: i.jsx($d, {}) }),
    });
}
const Md = Ge({
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
We(
    new $e()
        .add(ps)
        .addWithProps(Le, { soundsOverrides: Md })
        .addWithProps(Me, { context: 'model.router' })
        .render(i.jsx(Ld, {})),
)
    .then(() => Ke(document.getElementById('root')))
    .then(() => qe());
