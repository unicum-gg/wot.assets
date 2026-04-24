import {
    v as e,
    t as a,
    o as t,
    g as s,
    r,
    a1 as n,
    j as i,
    f as l,
    L as o,
    a2 as c,
    a3 as d,
    n as m,
    m as u,
    a4 as f,
    a5 as _,
} from '../../../chunks/vendor.js';
import {
    D as p,
    ai as h,
    bC as b,
    ax as v,
    m as g,
    cJ as x,
    w as y,
    cK as N,
    r as j,
    I as w,
    i as I,
    s as S,
    a1 as C,
    af as P,
    cL as T,
    cM as D,
    F as A,
    bY as B,
    b_ as V,
    aA as k,
    cN as E,
    aj as z,
    al as H,
    bP as O,
    at as F,
    ar as X,
    B as G,
    a as $,
    ae as L,
    A as M,
    _ as W,
    b0 as K,
    ah as q,
    $ as U,
    a$ as Z,
    aY as Y,
    b8 as J,
    b6 as Q,
    bd as ee,
    cO as ae,
    aa as te,
    cP as se,
    ap as re,
    cQ as ne,
    cR as ie,
    c as le,
    ch as oe,
    a8 as ce,
    ca as de,
    cS as me,
    bE as ue,
    ak as fe,
    J as _e,
    av as pe,
    cT as he,
    cU as be,
    cV as ve,
    aG as ge,
    cW as xe,
    ay as ye,
    cX as Ne,
    T as je,
    c1 as we,
    cY as Ie,
    br as Re,
    bt as Se,
    bA as Ce,
    cZ as Pe,
    a2 as Te,
    c_ as De,
    c$ as Ae,
    aF as Be,
    aE as Ve,
    bq as ke,
    bb as Ee,
    cv as ze,
    am as He,
    cx as Oe,
    d0 as Fe,
    bN as Xe,
    U as Ge,
    cE as $e,
    b as Le,
    d1 as Me,
    d2 as We,
} from '../../../chunks/lib.js';
var Ke = ((e) => (
        (e.Squad = 'squad'),
        (e.Player = 'player'),
        (e.Rank = 'rank'),
        (e.Damage = 'damage'),
        (e.Frag = 'frag'),
        (e.Xp = 'xp'),
        (e.Respawns = 'respawns'),
        (e.Medal = 'medal'),
        e
    ))(Ke || {}),
    qe = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(qe || {});
function Ue(t) {
    return function (s) {
        return t(e(() => a(s)));
    };
}
const Ze = { overview: 'overview', teamScore: 'teamScore', financialReport: 'financialReport' },
    Ye = Object.values(Ze),
    Je = {
        [Ze.overview]: '/fl_battleResults/overview',
        [Ze.teamScore]: '/fl_battleResults/teamScore',
        [Ze.financialReport]: '/fl_battleResults/financialReport',
    };
function Qe(e) {
    const a = Ye.find((a) => Je[a] === e);
    return (p(void 0 !== a, `The post battle screen is not found by path ${e}`), a);
}
const ea = 'xp',
    aa = 'freeXP',
    ta = 'credits',
    sa = 'gold',
    ra = 'originalCrystals',
    na = 'eventCrystals',
    ia = 'autoEquipCrystals',
    la = 'totalCrystals',
    oa = 'originalXP',
    ca = 'achievementXP',
    da = 'originalXPPenalty',
    ma = 'igrBonusXP',
    ua = 'firstWinXP',
    fa = 'additionalBonusXP',
    _a = 'boostersXP',
    pa = 'tacticalTrainingXP',
    ha = 'eventXP',
    ba = 'referralBonusXP',
    va = 'premiumVehicleXP',
    ga = 'squadBonusXP',
    xa = 'squadPenaltyXP',
    ya = 'wotPlusBonusXP',
    Na = 'wotPlusProBoostXP',
    ja = 'totalXP',
    wa = 'originalFreeXP',
    Ia = 'achievementFreeXP',
    Ra = 'igrBonusFreeXP',
    Sa = 'firstWinFreeXP',
    Ca = 'additionalBonusFreeXP',
    Pa = 'boostersFreeXP',
    Ta = 'militaryManeuversFreeXP',
    Da = 'eventFreeXP',
    Aa = 'premiumVehicleFreeXP',
    Ba = 'wotPlusBonusFreeXP',
    Va = 'totalFreeXP',
    ka = 'baseEarnedCredits',
    Ea = 'squadBonusCredits',
    za = 'achievementCredits',
    Ha = 'boostersCredits',
    Oa = 'petSystemBonusCredits',
    Fa = 'battlePaymentsCredits',
    Xa = 'eventPaymentsCredits',
    Ga = 'referralBonusCredits',
    $a = 'wotPlusBonusCredits',
    La = 'wotPlusProBoostCredits',
    Ma = 'friendlyFirePenaltyCredits',
    Wa = 'friendlyFireCompensationCredits',
    Ka = 'piggyBankCredits',
    qa = 'autoRepairCredits',
    Ua = 'autoLoadCredits',
    Za = 'autoEquipCredits',
    Ya = 'intermediateTotalCredits',
    Ja = 'totalCredits',
    Qa = 'goldEventPayments',
    et = 'goldPiggyBank',
    at = 'intermediateTotalGold',
    tt = 'totalGold',
    st = 'aogasFactor',
    rt = 'deserterViolation',
    nt = 'afkViolation',
    it = 'suicideViolation',
    lt = new Set([da, ba, ga, xa, pa]),
    ot = new Set([Ta]),
    ct = new Set([ka, Ea, za, Ha, Fa, Ga, Oa, $a, La, rt, it, nt, Ma, Wa, st, qa, Ua, Za]),
    dt = {
        [ca]: Ia,
        [fa]: Ca,
        [nt]: nt,
        [st]: st,
        [_a]: Pa,
        [rt]: rt,
        [ha]: Da,
        [ua]: Sa,
        [ma]: Ra,
        [oa]: wa,
        [va]: Aa,
        [it]: it,
        [ja]: Va,
        [ya]: Ba,
        [Na]: 'wotPlusProBoostFreeXP',
    },
    mt = { [Xa]: Qa, [Ya]: at, [Ka]: et, [Ja]: tt },
    ut = [ra, na, ia, la],
    ft = [ka, Ea, za, Ha, Oa, Fa, Xa, Qa, Ga, $a, La, rt, it, nt, Ma, Wa, st, Ya, at, qa, Ua, Za, Ja, tt, Ka, et],
    _t = new Set([la, oa, wa, ja, Va, ka, Ya, at, qa, Ua, Za, Ja, tt, Ka, et]),
    pt = new Set([Ja, tt, at, Ya]),
    ht = 'multiplier',
    bt = 'firstWinMultiplier',
    vt = 'fractionalMultiplier',
    gt = 'percent',
    xt = 'plus',
    yt = {
        [ma]: ht,
        [Ra]: ht,
        [ua]: bt,
        [Sa]: bt,
        [fa]: ht,
        [Ca]: ht,
        [st]: vt,
        [rt]: gt,
        [it]: gt,
        [nt]: gt,
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
    return 'True' === e?.recordsItemsDetails?.hasAogasFine;
}
function Rt(e) {
    return 'True' === e?.recordsItemsDetails?.isEnabled;
}
const St = { [oa]: wt, [wa]: wt, [ja]: wt, [Va]: wt, [st]: It, [ya]: Rt, [Ba]: Rt },
    Ct = {
        [ka]: wt,
        [Ya]: wt,
        [at]: wt,
        [qa]: wt,
        [Ua]: wt,
        [Za]: wt,
        [Ja]: wt,
        [tt]: wt,
        [st]: It,
        [$a]: Rt,
        [Ka]: wt,
    };
function Pt(e) {
    return !1 !== pt.has(e.paramName) && 0 === e.standard.gold && 0 === e.premium.gold;
}
const Tt = { [Ya]: (e) => !1 === Pt(e), [Ja]: (e) => !1 === Pt(e), [Ka]: (e, a) => a },
    Dt = { [ea]: 'library.xp', [aa]: 'library.freeXp', [ta]: 'library.credits', [sa]: 'library.gold' },
    At = [st, rt, nt, it];
function Bt(e) {
    return e === ea ? 'library.x2_combatExp' : 'library.x2_combatFreeExp';
}
const Vt = {
    [ma]: (e) => 'library.x2_combatExp',
    [Ra]: (e) => 'library.x2_combatExp',
    [ua]: Bt,
    [Sa]: Bt,
    [fa]: Bt,
    [Ca]: Bt,
};
function kt(e, a) {
    if (void 0 === a || At.includes(a)) return;
    const t = Vt[a];
    return t ? t(e) : Dt[e];
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
const Ot = [ja, Ya];
function Ft(e, a) {
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
        recordsItemsDetails: h(l.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
    var l;
    const o = a ? r : s,
        c = o >= 0 ? o : 0;
    return { paramName: i, type: n, visibleIfZero: Ot.includes(i) || 'True' === t.isAvailable, value: c };
}
function Xt(e) {
    return {
        name: e.name,
        groupID: e.groupID,
        iconName: e.iconName,
        tooltipArgs: e.tooltipArgs,
        tooltipId: e.tooltipId,
    };
}
function Gt(e) {
    return { labelKey: e.labelKey, paramValueType: e.paramValueType, value: g(e?.value ?? [], (e) => e) };
}
function $t(e) {
    return {
        ...Gt({ label: e.label, labelKey: e.labelKey, paramValueType: e.paramValueType, value: g(e.value, (e) => e) }),
        details: g(e.details, (e) => Gt(e)),
    };
}
function Lt(e) {
    return {
        isGeneralInfo: e.isGeneralInfo,
        objectivesReached: e.objectivesReached,
        objectivesDestroyed: e.objectivesDestroyed,
        zoneCaptured: e.zoneCaptured,
        detailedStatistics: g(e.detailedStatistics, $t),
        vehicle: e.vehicle.longName ? { ...N(e.vehicle), longName: e.vehicle.longName } : null,
    };
}
function Mt(e) {
    const a = b(e.vehiclesStats, (e) => e.isGeneralInfo)?.detailedStatistics ?? [],
        t = b(a, (e) => e.labelKey === zt.TeamHitsDamage)?.value,
        s = void 0 !== t ? v(t, 0) : 0,
        r = e.efficiencyValues.kills - s;
    return {
        personal: e.isPersonal,
        squadIndex: e.squadIndex,
        rank: e.rank,
        respawns: e.respawns,
        achievements: g(e.achievements, Xt),
        account: x(e.userNames),
        vehicles: g(e.vehiclesStats, Lt),
        efficiencyValues: {
            ...((n = e?.efficiencyValues), { damageDealt: n?.damageDealt, kills: n?.kills, earnedXp: n?.earnedXp }),
            subtractedAlliesKills: r,
        },
        databaseId: e.databaseID,
    };
    var n;
}
const Wt = {
    killed: 0,
    spotted: 0,
    criticalDamage: 0,
    damageDealt: { value: 0, count: 0 },
    damageAssisted: 0,
    damageAssistedStun: { value: 0, count: 0 },
    damageBlockedByArmor: { value: 0, count: 0 },
};
const Kt = j.resolve('strings'),
    qt = 'rank',
    Ut = 'right',
    Zt = 'left',
    Yt = 'other',
    Jt = [qt, Ut, Zt, Yt];
function Qt(e) {
    return e.groupID === qt
        ? qt
        : e.groupID === Ut
          ? Ut
          : e.groupID === Zt
            ? Zt
            : (console.error(`Achievement ${e.name} with a group ${e.groupID} is not detected`), Yt);
}
function es(e) {
    return w(e, (e, a) => {
        const t = Qt(e),
            s = Qt(a),
            r = Jt.indexOf(t),
            n = Jt.indexOf(s);
        return t !== s
            ? r - n
            : (function (e, a) {
                  const t = Kt.readOrEmpty(`achievements.${e.name}`),
                      s = Kt.readOrEmpty(`achievements.${a.name}`);
                  return t.localeCompare(s);
              })(e, a);
    });
}
const as = 'default',
    ts = 'hover',
    ss = 'extinct';
function rs(e, a) {
    return void 0 === a ? as : a === e ? ts : ss;
}
const ns = 'rank',
    is = 'others';
const ls = 'allies',
    os = 'enemies',
    cs = 'personal',
    ds = 'alien';
function ms(e, a, t) {
    return 0 === t ? null : a === t && e === ls ? cs : ds;
}
function us({ anonymizer: e, personal: a, platoonType: t }) {
    return !(a || !e) && (t === ds || null === t);
}
const [fs, _s] = I()(
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
                    battleInfo: a.transform(Ht, 'battleInfo'),
                    allPlayersDictionary: t.box({}),
                    personalEfficiency: {
                        opened: t.box(!1),
                        achievements: a.transform((e) => es(g(e, Xt)), 'achievements'),
                        statistics: { details: t.box([]) },
                    },
                    teamsStatistic: {
                        allies: t.box([]),
                        enemies: t.box([]),
                        sorting: t.box({ column: Ke.Player, sortDirection: qe.Desc }),
                        selectedRow: t.box(),
                        selectedVehicle: t.box(null),
                    },
                    user: { names: t.box() },
                };
            (Ue(s)(() => {
                const e = {};
                (n.teamsStatistic.allies.set(
                    g(r.teamsStatistic.allies.get(), (a) => {
                        const t = Mt(a);
                        return ((e[t.account.username] = t), t);
                    }),
                ),
                    n.teamsStatistic.enemies.set(
                        g(r.teamsStatistic.enemies.get(), (a) => {
                            const t = Mt(a);
                            return ((e[t.account.username] = t), t);
                        }),
                    ));
                const a = n.allPlayersDictionary.get();
                n.allPlayersDictionary.set({ ...a, ...e });
            }),
                Ue(s)(() => {
                    return n.teamsStatistic.sorting.set(
                        ((e = r.teamsStatistic.sortingColumn.get()),
                        (a = r.teamsStatistic.sortingOrder.get()),
                        { column: e, sortDirection: a }),
                    );
                    var e, a;
                }));
            const i = S.structural(() => {
                    const e = r.vehiclesFinancialStats.get().find(({ isGeneralInfo: e }) => e);
                    return (
                        e &&
                        (function ({ anyPremium: e, credits: a, xp: t }) {
                            const s = b(a, (e) => e.paramName === Ya),
                                r = b(t, (e) => e.paramName === ja),
                                n = [];
                            return (s && n.push(Ft(s, e)), r && n.push(Ft(r, e)), n);
                        })({ anyPremium: r.hasAnyPremium.get(), credits: e.credits.total, xp: e.xp.total })
                    );
                }),
                l = S.shallow(() => {
                    const e = b(n.teamsStatistic.allies.get(), (e) => e.personal);
                    return (p(void 0 !== e, 'Personal info is not found'), e);
                }),
                o = S.shallow(() => {
                    const e = n.teamsStatistic.selectedRow.get();
                    if (void 0 === e) return;
                    const a = (e.team === ls ? n.teamsStatistic.allies : n.teamsStatistic.enemies).get();
                    return b(a, (a) => a.account.username === e.username);
                }),
                c = S.shallow(() => {
                    const e = n.allPlayersDictionary.get();
                    return h(
                        r.personalEfficiency.details.get(),
                        (a, t) => {
                            const s = (function (e) {
                                return h(
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
                            if (((r = s), y.structural(r, Wt))) return a;
                            var r;
                            const n = e[t.userName];
                            return (
                                p(void 0 !== n, `Such enemy ${t.userName} is not found`),
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
    ps = 'initial',
    hs = 'first',
    bs = 'second',
    vs = 'third',
    gs = T.cubicBezier(0.33, 0, 0.25, 1),
    xs = 400,
    ys = r.createContext(null);
function Ns() {
    const e = r.useContext(ys);
    if (null === e)
        throw new Error('You can use the animation context hooks only with the AnimationProvider component');
    return e;
}
function js({ children: e }) {
    const [a, t] = r.useState(ps),
        [s, l] = r.useState(new Set()),
        o = C(),
        c = P(),
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
            case ps:
                return void t(hs);
            case hs:
                return (
                    c.play('showBattleResult', { target: 'animation-context' }),
                    d.start({ y: '0', opacity: 1, config: { duration: xs, easing: gs } }),
                    void m.start({
                        opacity: 1,
                        y: '0',
                        config: { duration: xs, easing: gs },
                        onRest: () => {
                            (t(bs), l((e) => D(e, hs)));
                        },
                    })
                );
            case bs:
                return (
                    u.start({
                        opacity: 1,
                        y: '0',
                        config: { duration: xs, easing: gs },
                        onRest: () => {
                            l((e) => D(e, bs));
                        },
                    }),
                    void o.run(() => {
                        (t(vs), o.clear());
                    }, 280)
                );
            case vs:
                (c.play('exitResult', { target: 'post-battle' }),
                    _.start({ opacity: 1, config: { duration: xs, easing: gs } }),
                    f.start({
                        opacity: 1,
                        config: { duration: xs, easing: gs },
                        onRest: () => {
                            l((e) => D(e, vs));
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
    return i.jsx(ys.Provider, { value: h, children: e });
}
const ws = 'BattleInfo_d5226211',
    Is = 'BattleInfo_group_962f81f6';
const Rs = (e, a) => (e > 0 ? (a > 0 ? 'minutesAndSeconds' : 'minutesOnly') : 'secondsOnly'),
    Ss = r.forwardRef(function (e, a) {
        return i.jsx('div', { ...e, 'data-name': 'BattleInfo', ref: a, className: l(ws, e.className) });
    });
((Ss.Arena = function ({ arenaName: e, scenario: a, finishReason: t, className: s }) {
    return i.jsx(A, {
        path: 'fl_post_battle_results.battleInfo.arena',
        params: { arenaName: e, scenario: a, finishReason: t },
        className: l(Is, s),
    });
}),
    (Ss.StartTime = ({ battleStartTime: e, battleDuration: a, className: t }) => {
        const [s, r] = B(V(a), ['m', 's']);
        return i.jsx(A, {
            path: 'fl_post_battle_results.battleInfo.time',
            params: {
                date: k.formatDateTime(E.ShortDate, e),
                time: k.formatDateTime(E.ShortTime, e),
                duration: i.jsx(A, {
                    path: `fl_post_battle_results.battleInfo.timeLeft.${Rs(Number(s), Number(r))}`,
                    params: { minutes: s, seconds: r },
                }),
            },
            className: l(Is, t),
        });
    }));
const Cs = 'Divider_80a19f4b';
function Ps({ classNames: e }) {
    return i.jsx('div', {
        className: l(Cs, e?.base),
        children: i.jsx(z, {
            className: e?.image,
            width: '100%',
            height: '100%',
            path: 'post_battle.row_divider',
            fit: 'cover',
        }),
    });
}
const Ts = 'Header_content_b9e0be90',
    Ds = 'Header_title_91e5448a',
    As = 'Header_divider_eb019c6',
    Bs = 'Header_dividerImage_19f6e11',
    Vs = H('Header', 'Header_70aa1da5'),
    ks = r.forwardRef(({ title: e, children: a, classNames: t, ...s }, r) => {
        const n = j.resolve('strings');
        return i.jsxs(Vs, {
            ...s,
            ref: r,
            children: [
                i.jsxs('div', {
                    className: l(Ts, t?.content),
                    children: [
                        i.jsx('div', { className: l(Ds, t?.title), children: k.toUpperCase(n.readOrEmpty(e)) }),
                        a,
                    ],
                }),
                i.jsx(Ps, { classNames: { base: l(As, t?.divider), image: Bs } }),
            ],
        });
    }),
    Es = 'playerRankXP',
    zs = { ...dt, [Es]: Es },
    Hs = [oa, wa, Es, ba, va, Aa, ga, xa, st, ya, Ba, rt, it, nt, ja, Va];
function Os(e, a) {
    return Hs.indexOf(e.paramName) - Hs.indexOf(a.paramName);
}
function Fs(e, a) {
    return ft.indexOf(e.paramName) - ft.indexOf(a.paramName);
}
function Xs(e, a) {
    return ut.indexOf(e.paramName) - ut.indexOf(a.paramName);
}
function Gs(e) {
    return {
        paramName: e.paramName,
        currencyType: e.currencyType,
        baseValue: e.baseValue,
        premiumValue: e.premiumValue,
        recordsItemsDetails: h(e.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
}
function $s(e, a) {
    const t = [],
        s = [];
    for (const r of e) a(r) ? t.push(r) : s.push(r);
    return [t, s];
}
function Ls(e, a) {
    const t = g(e.earned, Gs),
        s = g(e.expenses, Gs),
        r = g(e.total, Gs),
        n = [Ya, at],
        i = [Ka, et],
        [l, o] = $s(r, (e) => n.includes(e.paramName)),
        [c, d] = $s([...t, ...l], (e) => i.includes(e.paramName));
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
const Ms = (e) => e in yt;
function Ws({ xp: e, freeXp: a }) {
    const t = e?.paramName || a?.paramName;
    p('string' == typeof t, 'xp or freeXp paramName is not provided');
    const s = Ms(t) ? yt[t] : void 0,
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
function Ks({ credits: e, gold: a }) {
    const t = e?.paramName || a?.paramName;
    p('string' == typeof t, 'credits or gold paramName is not provided');
    const s = Ms(t) ? yt[t] : void 0,
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
function qs(e, a) {
    const t = e.paramName;
    return (
        p(((e) => e in zs)(t), `No analogue for ${t} in free xp parameter names`),
        a.find((e) => zs[t] === e.paramName)
    );
}
function Us(e, a) {
    const t = e.paramName;
    return (
        p(((e) => e in mt)(t), `No analogue for ${t} in gold parameter names`),
        a.find((e) => mt[t] === e.paramName)
    );
}
function Zs(e, a) {
    const t = (function (e, a) {
        return [
            ...O(
                a,
                (e) => ot.has(e.paramName),
                (e) => Ws({ freeXp: e }),
            ),
            ...g(e, (e) => (lt.has(e.paramName) ? Ws({ xp: e }) : Ws({ xp: e, freeXp: qs(e, a) }))),
        ];
    })(e, a);
    return t
        .filter((e) => {
            const a = St[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.freeXp || e.premium.xp || e.standard.freeXp || e.standard.xp);
        })
        .sort(Os);
}
function Ys(e, a) {
    const t = (function (e, a) {
        return g(e, (e) => (ct.has(e.paramName) ? Ks({ credits: e }) : Ks({ credits: e, gold: Us(e, a) })));
    })(e, a);
    return t
        .filter((e) => {
            const a = Ct[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.credits || e.premium.gold || e.standard.credits || e.standard.gold);
        })
        .sort(Fs);
}
function Js(e) {
    return ((a = e),
    a.filter((e) => {
        const a = Boolean(e.baseValue || e.premiumValue),
            t = _t.has(e.paramName);
        return a || t;
    })).sort(Xs);
    var a;
}
function Qs({ xp: e, freeXp: a }) {
    return (function (e, a) {
        return { records: Zs(e.records, a.records), total: Zs(e.total, a.total) };
    })(
        Ls({ earned: e.earned, expenses: e.expenses, total: e.total }),
        Ls({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
function er({ credits: e, gold: a }) {
    return (function (e, a) {
        return { records: Ys(e.records, a.records), total: Ys(e.total, a.total) };
    })(
        Ls({ earned: e.earned, expenses: e.expenses, total: e.total }),
        Ls({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
const [ar, tr] = I()(
        ({ observableModel: e }) => {
            const a = {
                    ...e.primitives(['hasAnyPremium', 'hasWotPlus'], 'financialReport'),
                    vehiclesFinancialStats: e.arrayClone('financialReport.vehiclesFinancialStats'),
                    selectedVehicle: t.box(null),
                },
                s = S.primitive(() => {
                    const e = a.selectedVehicle.get();
                    return a.vehiclesFinancialStats
                        .get()
                        .find(({ vehicle: a, isGeneralInfo: t }) => (e ? a.techName === e : t));
                }),
                r = S.shallow(() => {
                    const e = s();
                    return (
                        e &&
                        Qs({
                            xp: { earned: e.xp.earned, expenses: e.xp.expenses, total: e.xp.total },
                            freeXp: { earned: e.freeXp.earned, expenses: e.freeXp.expenses, total: e.freeXp.total },
                        })
                    );
                }),
                n = S.shallow(() => {
                    const e = s();
                    return (
                        e &&
                        er({
                            credits: { earned: e.credits.earned, expenses: e.credits.expenses, total: e.credits.total },
                            gold: { earned: e.gold.earned, expenses: e.gold.expenses, total: e.gold.total },
                        })
                    );
                }),
                i = S.shallow(() => {
                    const e = s();
                    return (
                        e &&
                        (function ({ earned: e, expenses: a, total: t }) {
                            const s = Ls({ earned: e, expenses: a, total: t });
                            return { records: Js(s.records), total: Js(s.total) };
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
    sr = 'ListItem_received_ffdc3010',
    rr = 'ListItem_separator_71797768',
    nr = 'ListItem_label_4ab3c391',
    ir = 'ListItem_label__withIcon_c2381aa',
    lr = 'ListItem_labelIcon_acb0da4',
    or = H('ListItem', 'ListItem_bcdaabbd'),
    cr = r.forwardRef(({ labelKey: e, children: a, classNames: t, params: s, labelIconPath: r, ...n }, o) => {
        const c = j.resolve('images');
        return i.jsxs(or, {
            ...n,
            ref: o,
            'data-test-id': `${e}`,
            children: [
                i.jsxs('div', {
                    className: l(nr, void 0 !== r && ir, t?.label),
                    children: [
                        void 0 !== r &&
                            i.jsx('div', {
                                style: { backgroundImage: `url(${c.readOrEmpty(r)})` },
                                className: l(lr, t?.icon),
                            }),
                        i.jsx(A, { upgradeLegacy: !0, path: e, params: s }),
                    ],
                }),
                i.jsxs('div', { className: sr, children: [i.jsx('div', { className: rr }), a] }),
            ],
        });
    }),
    dr = 'Item_currencyValue_81f5b9fb',
    mr = 'Item_currencyValue__total_a7596c8e',
    ur = 'Item_currencyValue__negative_5e98369f',
    fr = 'Item_label_5d6964d6',
    _r = {
        [ra]: 'battle_results.details.calculations.crystal.total',
        [na]: 'battle_results.details.calculations.crystal.events',
        [ia]: 'battle_results.details.calculations.autoBoosters',
        [la]: 'battle_results.details.calculations.total',
    },
    pr = ({ record: e, total: a, ...t }) => {
        const { paramName: s, baseValue: r } = e;
        return s in _r
            ? i.jsx(cr, {
                  ...t,
                  labelKey: _r[s],
                  classNames: { label: fr, ...t.classNames },
                  children: i.jsx(F, {
                      reverse: !0,
                      type: 'crystal',
                      size: X.small,
                      children: i.jsx('div', {
                          className: l(dr, r < 0 && ur, a && mr),
                          children: k.formatNumber('integral', r),
                      }),
                  }),
              })
            : (console.error(`Parameter name "${s}" is not valid for bonds`), null);
    },
    hr = 'IncomeStatement_item_48b34a63',
    br = H('BondsIncomeStatement'),
    vr = o(
        r.forwardRef((e, a) => {
            const { model: t } = tr(),
                s = t.computes.crystals();
            return i.jsx(br, {
                ...e,
                ref: a,
                children: s.records.map((e) => i.jsx(pr, { record: e, className: hr }, e.paramName)),
            });
        }),
    ),
    gr = 'Total_item_a8580361',
    xr = 'Total_divider_1de1ca28',
    yr = 'Total_dividerImage_ab06168d',
    Nr = H('BondsTotal', 'Total_120fb0c4'),
    jr = o(
        r.forwardRef((e, a) => {
            const { model: t } = tr(),
                s = t.computes.crystals();
            return i.jsxs(Nr, {
                ...e,
                ref: a,
                children: [
                    i.jsx(Ps, { classNames: { base: xr, image: yr } }),
                    s.total.map((e) => i.jsx(pr, { total: !0, record: e, className: gr }, e.paramName)),
                ],
            });
        }),
    ),
    wr = r.forwardRef((e, a) => i.jsx(ks, { ...e, title: 'battle_results.details.crystal', ref: a })),
    Ir = H('Bonds');
((Ir.Header = wr), (Ir.Item = pr), (Ir.Total = jr), (Ir.IncomeStatement = vr));
const Rr = 'Header_cbd845ec',
    Sr = 'Header_content_a63fb46c',
    Cr = 'Header_title_7b852a7',
    Pr = 'Header_title__active_e5dd0f77',
    Tr = 'Header_title__premium_2c23921f',
    Dr = 'Header_icon_3b4dc587',
    Ar = o(
        r.forwardRef(({ className: e, ...a }, t) => {
            const { model: s } = tr(),
                r = s.hasAnyPremium.get();
            return i.jsx(ks, {
                ...a,
                ref: t,
                className: l(Rr, e),
                title: 'battle_results.details.credits',
                children: i.jsxs('div', {
                    className: Sr,
                    children: [
                        i.jsx('div', {
                            className: l(Cr, !r && Pr),
                            children: i.jsx(A, { path: 'battle_results.common.details.noPremTitle' }),
                        }),
                        i.jsxs('div', {
                            className: l(Cr, r && Pr, Tr),
                            children: [
                                i.jsx('div', {
                                    className: Dr,
                                    children: i.jsx(z, {
                                        width: 32,
                                        height: 32,
                                        path: 'post_battle.wot_premium_32x32',
                                    }),
                                }),
                                i.jsx(A, { path: 'battle_results.getPremiumPopover.prem' }),
                            ],
                        }),
                    ],
                }),
            });
        }),
    ),
    Br = (e) => {
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
    Vr = 'IncomeStatement_c4136bc5',
    kr = 'IncomeStatement_verticalBar_5fb90511',
    Er = 'IncomeStatement_scrollWrapper_ce2dde41',
    zr = 'IncomeStatement_scrollContent_31153602',
    Hr = 'IncomeStatement_scrollContent__initialized_ce1144d0',
    Or = H('CreditsIncomeStatement'),
    Fr = ({ children: e }) => {
        const a = L(),
            t = Br(a.api);
        return i.jsx(M, { classNames: { wrapper: Er, content: l(zr, t && Hr) }, children: e });
    },
    Xr = r.forwardRef(({ children: e, className: a, scrollable: t, ...s }, r) =>
        i.jsx(Or, {
            className: l(Vr, a),
            ...s,
            ref: r,
            children: t
                ? i.jsxs(G, { children: [i.jsx(Fr, { children: e }), i.jsx($, { classNames: { base: kr } })] })
                : e,
        }),
    ),
    Gr = 'Record_420804f3',
    $r = 'Record_value_4d088deb',
    Lr = 'Record_value__decreasing_8cff45fa',
    Mr = ({ formatter: e, value: a, modifier: t, currency: s, classNames: r, iconPath: n }) => {
        if (void 0 === a) return null;
        const o = t === vt || a < 0;
        return i.jsxs('div', {
            className: l(Gr, r?.base),
            children: [
                i.jsxs('div', {
                    className: l($r, o && Lr, r?.value),
                    'data-test-id': `${s}`,
                    children: [
                        c(t)
                            .with(bt, () => i.jsx(A, { path: 'common.multiplierSmall' }))
                            .with(ht, () => i.jsx(A, { path: 'common.multiplierSmall' }))
                            .with(vt, () => i.jsx(A, { path: 'common.multiplierSmall' }))
                            .with(xt, () => i.jsx(A, { path: 'common.plus' }))
                            .otherwise(() => null),
                        e(a, s),
                        t === gt && i.jsx(A, { path: 'common.common.percent' }),
                    ],
                }),
                n && i.jsx(z, { width: 24, height: 24, path: n }),
            ],
        });
    },
    Wr = 'RecordGroup_65a30ced',
    Kr = 'RecordGroup_base__inactive_5fd9f274',
    qr = 'RecordGroup_record_5fd9f274',
    Ur = 'RecordGroup_record__extinguished_7fdfcea',
    Zr = 'RecordGroup_record__first_36c2aa71',
    Yr = 'RecordGroup_separator_9f211d97',
    Jr = 'RecordGroup_separatorBackground_8a447834',
    Qr = 'RecordGroup_value_9253748c',
    en = 'RecordGroup_value__total_126d88a1',
    an = 'RecordGroup_value__gold_d7bd74ba';
function tn({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case st:
            return !1;
        case $a:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const sn = ({ credits: e, gold: a, modifier: t, inactive: s = !1, total: r, paramName: n, wotPlusActive: o }) => {
        function c(e, a) {
            return n === st ? k.formatReal('fractional', e) : k.formatNumber(a === sa ? 'gold' : 'integral', e);
        }
        return i.jsxs('div', {
            className: l(Wr, s && Kr),
            children: [
                i.jsx('div', {
                    className: l(qr, Zr, tn({ paramName: n, wotPlusActive: o, value: e }) && Ur),
                    children: i.jsx(Mr, {
                        formatter: c,
                        value: e,
                        currency: ta,
                        modifier: t,
                        classNames: { value: l(Qr, r && en) },
                        iconPath: kt(ta, n),
                    }),
                }),
                void 0 !== a && i.jsx('div', { className: Yr, children: i.jsx('div', { className: Jr }) }),
                i.jsx('div', {
                    className: l(qr, 0 === a && Ur),
                    children: i.jsx(Mr, {
                        value: a,
                        currency: sa,
                        modifier: t,
                        classNames: { value: l(Qr, an, r && en) },
                        formatter: c,
                        iconPath: kt(sa, n),
                    }),
                }),
            ],
        });
    },
    rn = 'Item_groups_a1f0c2a5',
    nn = 'Item_label_7521a1d4',
    ln = 'Item_label__gold_49ec59ab',
    on = {
        [ka]: 'title.base',
        [Ea]: 'squadBonus',
        [za]: 'noPenalty',
        [Ha]: 'boosters',
        [Fa]: 'battlePayments',
        [Xa]: 'event',
        [Qa]: 'event',
        [Ga]: 'referralBonus.fullLabel',
        [$a]: 'wotPlusBonus',
        [rt]: 'fairPlayViolation.deserter',
        [it]: 'fairPlayViolation.suicide',
        [nt]: 'fairPlayViolation.afk',
        [Ma]: 'friendlyFirePenalty',
        [Wa]: 'friendlyFireCompensation',
        [st]: 'aogasFactor',
        [Ya]: 'intermediateTotal',
        [at]: 'intermediateTotal',
        [qa]: 'autoRepair',
        [Ua]: 'autoLoad',
        [Za]: 'autoEquip',
        [Ja]: 'total',
        [tt]: 'total',
        [Ka]: 'piggyBankInfo',
        [et]: 'piggyBankInfo',
        [Oa]: 'petCredits.fullLabel',
    },
    cn = { [$a]: 'subscription.wot_plus_32x32' },
    dn = o(({ record: e, total: a, ...t }) => {
        const { model: s } = tr(),
            r = s.hasAnyPremium.get(),
            n = s.hasWotPlus.get(),
            { paramName: o, premium: c, standard: d, modifier: m, recordsItemsDetails: u } = e;
        if (!(o in on)) return null;
        const f = u?.referralFactor,
            _ = u?.bonusFactor,
            p = on[o],
            h = Tt[Ja](e, n);
        return i.jsx(cr, {
            ...t,
            labelIconPath: cn[o],
            labelKey: `battle_results.details.calculations.${p}`,
            classNames: { label: l(nn, o === $a && ln) },
            params: { ...(f && { bonusFactor: Nt(f) }), ...(_ && { bonusFactor: jt(_) }) },
            children: i.jsxs('div', {
                className: rn,
                children: [
                    i.jsx(sn, {
                        paramName: o,
                        credits: d.credits,
                        gold: h ? d.gold : void 0,
                        modifier: m,
                        inactive: r,
                        total: a,
                        wotPlusActive: n,
                    }),
                    i.jsx(sn, {
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
    mn = 'IncomeStatement_560dd244',
    un = 'IncomeStatement_base__scroll_fb9f1475',
    fn = 'IncomeStatement_item_48b34a63',
    _n = o(
        r.forwardRef(({ className: e, scrollable: a, ...t }, s) => {
            const { model: r } = tr(),
                n = r.computes.credits();
            return i.jsx(Xr, {
                ...t,
                ref: s,
                className: l(mn, a && un, e),
                scrollable: a,
                children: g(n.records, (e) => i.jsx(dn, { record: e, className: fn }, e.paramName)),
            });
        }),
    ),
    pn = 'Total_item_de53c8b0',
    hn = 'Total_divider_1de1ca28',
    bn = 'Total_dividerImage_ab06168d',
    vn = H('CreditsTotal', 'Total_19236d49'),
    gn = o(
        r.forwardRef((e, a) => {
            const { model: t } = tr(),
                s = t.computes.credits();
            return i.jsxs(vn, {
                ...e,
                ref: a,
                children: [
                    i.jsx(Ps, { classNames: { base: hn, image: bn } }),
                    s.total.map((e) => i.jsx(dn, { record: e, className: pn, total: !0 }, e.paramName)),
                ],
            });
        }),
    ),
    xn = 'Credits_68f91d81',
    yn = 'Credits_base__scroll_759f08f3',
    Nn = H('Credits'),
    jn = r.forwardRef(({ scrollable: e, className: a, ...t }, s) =>
        i.jsx(Nn, { ...t, ref: s, className: l(xn, e && yn, a) }),
    );
((jn.Header = Ar), (jn.Item = dn), (jn.Total = gn), (jn.IncomeStatement = _n));
const wn = r.forwardRef((e, a) => i.jsx(ks, { ...e, title: 'battle_results.details.xp', ref: a })),
    In = 'RecordGroup_65a30ced',
    Rn = 'RecordGroup_base__inactive_5fd9f274',
    Sn = 'RecordGroup_record_5fd9f274',
    Cn = 'RecordGroup_record__extinguished_7fdfcea',
    Pn = 'RecordGroup_record__first_9121e1b7',
    Tn = 'RecordGroup_separator_9f211d97',
    Dn = 'RecordGroup_separatorBackground_8a447834',
    An = 'RecordGroup_value_1f34e2e2',
    Bn = 'RecordGroup_value__total_126d88a1',
    Vn = 'RecordGroup_value__freeXP_931265db';
function kn(e, a) {
    return e !== fa || (void 0 !== a && a > 0);
}
function En({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case st:
            return !1;
        case ya:
        case Ba:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const zn = ({ paramName: e, xp: a, freeXp: t, modifier: s, inactive: r, total: n, wotPlusActive: o }) => {
        function c(a) {
            switch (e) {
                case ma:
                    return k.formatReal('woZeroDigits', a);
                case st:
                    return k.formatReal('fractional', a);
                default:
                    return k.formatNumber('integral', a);
            }
        }
        return i.jsxs('div', {
            className: l(In, r && Rn),
            children: [
                i.jsx('div', {
                    className: l(Sn, Pn, En({ wotPlusActive: o, paramName: e, value: a }) && Cn),
                    children: i.jsx(Mr, {
                        value: a,
                        currency: ea,
                        modifier: kn(e, a) ? s : void 0,
                        formatter: c,
                        classNames: { value: l(An, n && Bn) },
                        iconPath: kt(ea, e),
                    }),
                }),
                void 0 !== t && i.jsx('div', { className: Tn, children: i.jsx('div', { className: Dn }) }),
                i.jsx('div', {
                    className: l(Sn, En({ wotPlusActive: o, paramName: e, value: t }) && Cn),
                    children: i.jsx(Mr, {
                        value: t,
                        currency: aa,
                        modifier: kn(e, t) ? s : void 0,
                        formatter: c,
                        classNames: { value: l(An, Vn, n && Bn) },
                        iconPath: kt(aa, e),
                    }),
                }),
            ],
        });
    },
    Hn = 'Item_groups_a1f0c2a5',
    On = 'Item_label_7521a1d4',
    Fn = 'Item_label__highlighted_36e62867',
    Xn = 'Item_label__gold_49ec59ab',
    Gn = {
        [oa]: 'title.base',
        [wa]: 'title.base',
        [ca]: 'noPenalty',
        [Ia]: 'noPenalty',
        [da]: 'friendlyFirePenalty',
        [ma]: 'igrBonus.simpleLabel',
        [Ra]: 'igrBonus.simpleLabel',
        [ua]: 'firstWin',
        [Sa]: 'firstWin',
        [fa]: 'manageableXpBonus',
        [Ca]: 'manageableXpBonus',
        [_a]: 'boosters',
        [Pa]: 'boosters',
        [pa]: 'tacticalTraining',
        [Ta]: 'militaryManeuvers',
        [ha]: 'event',
        [Da]: 'event',
        [ba]: 'referralBonus.fullLabel',
        [va]: 'premiumVehicleXP',
        [Aa]: 'premiumVehicleXP',
        [ga]: 'squadBonus',
        [xa]: 'squadXPPenalty',
        [st]: 'aogasFactor',
        [ya]: 'wotPlusBonus',
        [Ba]: 'wotPlusBonus',
        [rt]: 'fairPlayViolation.deserter',
        [it]: 'fairPlayViolation.suicide',
        [nt]: 'fairPlayViolation.afk',
        [ja]: 'total',
        [Va]: 'total',
        originalAlternative: 'xpRecordSimple',
        [Es]: 'playerRankXP',
    },
    $n = { [ya]: 'subscription.wot_plus_32x32', [Ba]: 'subscription.wot_plus_32x32' },
    Ln = new Set([ya, Ba]),
    Mn = () =>
        i.jsx('span', { className: Fn, children: i.jsx(A, { path: 'battle_results.details.calculations.maximum' }) }),
    Wn = o(
        ({
            record: { paramName: e, premium: a, standard: t, modifier: s, recordsItemsDetails: r },
            total: n,
            ...o
        }) => {
            const { model: c } = tr(),
                d = c.hasAnyPremium.get(),
                m = c.hasWotPlus.get();
            if (!(e in Gn)) return null;
            const u = '1' === r?.isHighScope,
                f = u ? Gn.originalAlternative : Gn[e],
                _ = r?.referralFactor;
            return i.jsx(cr, {
                ...o,
                labelIconPath: $n[e],
                labelKey: `battle_results.details.calculations.${f}`,
                params: { ...(_ && { bonusFactor: Nt(_) }), ...(u && { maximum: i.jsx(Mn, {}) }) },
                classNames: { label: l(On, Ln.has(e) && Xn) },
                children: i.jsxs('div', {
                    className: Hn,
                    children: [
                        i.jsx(zn, { ...t, paramName: e, modifier: s, inactive: d, total: n, wotPlusActive: m }),
                        i.jsx(zn, { ...a, paramName: e, modifier: s, inactive: !d, total: n, wotPlusActive: m }),
                    ],
                }),
            });
        },
    ),
    Kn = 'IncomeStatement_560dd244',
    qn = 'IncomeStatement_base__scroll_fb9f1475',
    Un = 'IncomeStatement_item_48b34a63',
    Zn = o(
        r.forwardRef(({ className: e, scrollable: a, ...t }, s) => {
            const { model: r } = tr(),
                n = r.computes.experience();
            return i.jsx(Xr, {
                ...t,
                ref: s,
                className: l(Kn, a && qn, e),
                scrollable: a,
                children: g(n.records, (e) => i.jsx(Wn, { record: e, className: Un }, e.paramName)),
            });
        }),
    ),
    Yn = 'Total_item_a8580361',
    Jn = 'Total_divider_1de1ca28',
    Qn = 'Total_dividerImage_ab06168d',
    ei = H('ExperienceTotal', 'Total_19236d49'),
    ai = o(
        r.forwardRef((e, a) => {
            const { model: t } = tr(),
                s = t.computes.experience();
            return i.jsxs(ei, {
                ...e,
                ref: a,
                children: [
                    i.jsx(Ps, { classNames: { base: Jn, image: Qn } }),
                    s.total.map((e) => i.jsx(Wn, { record: e, className: Yn, total: !0 }, e.paramName)),
                ],
            });
        }),
    ),
    ti = 'Experience_a014c8c',
    si = 'Experience_base__scroll_f75d07c6',
    ri = H('Experience'),
    ni = r.forwardRef(({ scrollable: e, className: a, ...t }, s) =>
        i.jsx(ri, { ...t, ref: s, className: l(ti, e && si, a) }),
    );
((ni.Header = wn), (ni.Item = Wn), (ni.Total = ai), (ni.IncomeStatement = Zn));
const ii = {
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
    li = [25, 25],
    oi = function ({ onSelect: e, options: a, value: t }) {
        const { api: s } = L(),
            [n, o] = q(s, li),
            { opened: c, close: d } = U();
        return (
            r.useEffect(() => {
                if (c) return Z(() => Z(s.recalculateContent));
            }, [c, s.recalculateContent]),
            i.jsx(M, {
                className: l(ii.area, !n && ii.area__begin, !o && ii.area__end),
                classNames: { content: ii.scrollContent },
                children: a.map((a) =>
                    i.jsx(
                        'div',
                        {
                            className: l(ii.base, a.id === t && ii.base__selected),
                            children: i.jsxs(Y, {
                                className: ii.button,
                                onClick: () => {
                                    (d(), e(a.id));
                                },
                                children: [
                                    i.jsx('div', { className: ii.background }),
                                    i.jsxs('div', {
                                        className: ii.itemLabelWrapper,
                                        children: [
                                            i.jsx('div', { className: ii.selectIcon }),
                                            a.level && i.jsx(J, { value: a.level, className: ii.vehicleLevel }),
                                            a.type &&
                                                i.jsx(Q, { type: a.type, size: 'x24x24', className: ii.vehicleGap }),
                                            i.jsx('div', { className: ii.vehicleName, children: a.label }),
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
    ci = function (e) {
        return i.jsx(W.Portal, {
            position: 'bottom',
            children: i.jsx(K, {
                children: i.jsxs(W.Display, {
                    'data-name': 'playlist-dropdown-content',
                    className: ii.popover,
                    children: [
                        i.jsx(W.Tip, { position: 'top', size: '80rem', offset: '120rem' }),
                        i.jsx('div', {
                            className: ii.list,
                            children: i.jsxs(G, {
                                children: [i.jsx(oi, { ...e }), i.jsx($, { classNames: { base: ii.bar } })],
                            }),
                        }),
                    ],
                }),
            }),
        });
    },
    di = 'Trigger_9cdafb94',
    mi = 'Trigger_arrow_8ee677b2',
    ui = 'Trigger_arrow__opened_38ae933',
    fi = 'Trigger_arrowWrapper_68451ace',
    _i = function (e) {
        const a = P(),
            t = U();
        return i.jsx(W.Trigger, {
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
                        className: di,
                        children: [
                            e.children,
                            i.jsx('div', {
                                className: fi,
                                children: i.jsx('div', { className: l(mi, t.opened && ui) }),
                            }),
                        ],
                    }),
                }),
        });
    },
    pi = 'VehicleSelector_vehicleName_ff1d26ec',
    hi = 'VehicleSelector_vehicleLevel_9e1a557b',
    bi = 'VehicleSelector_vehicleGap_250d0374',
    vi = 'VehicleSelector_label_14dee5e6',
    gi = function (e) {
        const { value: a } = e,
            t = b(e.options, (e) => e.id === a);
        return i.jsxs(W, {
            children: [
                i.jsx(ci, { ...e }),
                i.jsx(_i, {
                    children: i.jsxs('div', {
                        className: vi,
                        children: [
                            t?.level && i.jsx(J, { value: t.level, className: hi }),
                            t?.type && i.jsx(Q, { type: t.type, size: 'x24x24', className: bi }),
                            i.jsx('div', { className: pi, children: t.label }),
                        ],
                    }),
                }),
            ],
        });
    },
    xi = 'FinancialReportVehicleSelector_c6ca6e82',
    yi = o(function () {
        const e = j.resolve('strings'),
            { model: a, controls: t } = tr(),
            s = a.vehiclesFinancialStats.get(),
            r = a.selectedVehicle.get();
        return i.jsx('div', {
            className: xi,
            children: i.jsx(gi, {
                options: g(s, ({ vehicle: a, isGeneralInfo: t }) =>
                    t
                        ? { id: null, label: e.readOrEmpty('fl_post_battle_results.battleInfo.all_from_battle') }
                        : { id: a.techName, label: a.name, level: a.tier, type: a.type },
                ),
                onSelect: t.selectVehicle,
                value: r,
            }),
        });
    }),
    Ni = 'FinancialReport_content_99bf970f',
    ji = 'FinancialReport_leftContent_75c21204',
    wi = 'FinancialReport_experience_7219d4d3',
    Ii = 'FinancialReport_credits_7712b0c',
    Ri = 'FinancialReport_header_d56ebc61',
    Si = 'FinancialReport_headerContent_37c9251a',
    Ci = 'FinancialReport_total_bdf3e42b',
    Pi = 'FinancialReport_bonds_b7ae931a',
    Ti = H('FinancialReport', 'FinancialReport_1cb7f6f5'),
    Di = ({ className: e }) => {
        const [a, t] = r.useState({ credits: !1, experience: !1 }),
            s = r.useRef(null),
            n = r.useRef(null),
            l = r.useRef(null),
            o = ee({ margin: 18 }, { medium: { margin: 19 }, large: { margin: 16 }, extraLarge: { margin: 30 } }),
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
            ae(s, c),
            i.jsx(ar, {
                children: i.jsx(Ti, {
                    className: e,
                    children: i.jsxs('div', {
                        children: [
                            i.jsx(yi, {}),
                            i.jsxs('div', {
                                className: Ni,
                                children: [
                                    i.jsxs('div', {
                                        className: ji,
                                        ref: s,
                                        children: [
                                            i.jsxs(jn, {
                                                ref: n,
                                                scrollable: a.credits,
                                                className: Ii,
                                                children: [
                                                    i.jsx(jn.Header, { className: Ri }),
                                                    i.jsx(jn.IncomeStatement, { scrollable: a.credits }),
                                                    i.jsx(jn.Total, { className: Ci }),
                                                ],
                                            }),
                                            i.jsxs(ni, {
                                                ref: l,
                                                scrollable: a.experience,
                                                className: wi,
                                                children: [
                                                    i.jsx(ni.Header, { className: Ri, classNames: { content: Si } }),
                                                    i.jsx(ni.IncomeStatement, { scrollable: a.experience }),
                                                    i.jsx(ni.Total, { className: Ci }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    i.jsxs(Ir, {
                                        className: Pi,
                                        children: [
                                            i.jsx(Ir.Header, { className: Ri, classNames: { content: Si } }),
                                            i.jsx(Ir.IncomeStatement, {}),
                                            i.jsx(Ir.Total, { className: Ci }),
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
    Ai = r.createContext(null);
function Bi() {
    const e = r.useContext(Ai);
    if (null === e) throw new Error('You can use the achievements hooks only with the Achievements component');
    return e;
}
const Vi = { x: 50, y: -30, scale: 1.2, opacity: 0 };
function ki({ children: e, achievements: a, springsProps: t }) {
    const [s, n] = r.useState(new Set()),
        [l, o] = r.useState(void 0),
        [c, m] = d(a.length, () => ({ from: { ...Vi, ...t?.from }, ...t }), [a.length, t]),
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
    return i.jsx(Ai.Provider, { value: u, children: e });
}
const Ei = {
        root: 'Achievement_root_8e5495a9',
        'media-wrapper': 'Achievement_media-wrapper_8e5495a9',
        base: 'Achievement_d22ce0bc',
        base__extinct: 'Achievement_base__extinct_b2f0b4be',
        icon: 'Achievement_icon_beb32010',
    },
    zi = r.forwardRef(function ({ achievement: e, index: a, width: t, height: s, classNames: n }, o) {
        const c = te({
                args: r.useMemo(
                    () => ({ tooltipId: e.tooltipId, tooltipArgs: e.tooltipArgs }),
                    [e.tooltipId, e.tooltipArgs],
                ),
            }),
            d = P(),
            { hoverIndex: m, setHoverIndex: u } = Bi();
        return i.jsx('div', {
            ...c,
            ref: o,
            className: l(Ei.base, Ei[`base__${rs(a, m)}`], n?.achievement),
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
                          className: Ei.icon,
                      })
                    : i.jsx(
                          z,
                          {
                              width: t,
                              height: s,
                              path: `achievement.x240x240.${e.iconName}`,
                              className: l(Ei.icon, n?.icon),
                          },
                          e.iconName,
                      ),
        });
    }),
    Hi = 'GroupedAchievements_4b56acae',
    Oi = 'GroupedAchievements_rankGroup_74be9c12',
    Fi = 'GroupedAchievements_othersGroup_d0fdb9a6',
    Xi = 'GroupedAchievements_animatedAchievement_f3a3b8f8',
    Gi = 'GroupedAchievements_achievement_977416af',
    $i = 'GroupedAchievements_achievement__notInteractive_76fcea70',
    Li = r.memo(function ({
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
            { springs: f, achievements: _, completedAnimationIndexes: p, hoverIndex: h } = Bi();
        return (
            se(() => {
                if (null === u.current) return;
                const a = u.current.offsetWidth + Math.floor((t / e.length) * 2),
                    r = re(c);
                d(s, a < r ? Math.floor((r - a) / 2) : 0);
            }, [e.length, n, c, d]),
            i.jsx('div', {
                style: { paddingLeft: t, paddingRight: t },
                className: Fi,
                children: g(e, (t, s) => {
                    const r = _.length - a - s - 1;
                    return i.jsx(
                        m.div,
                        {
                            ref: 0 === s ? u : void 0,
                            className: Xi,
                            style: { ...f[r], zIndex: a + s === h ? e.length + 1 : e.length - s },
                            children: i.jsx(zi, {
                                classNames: { achievement: l(Gi, !1 === p.has(r) && $i) },
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
    Mi = r.memo(function ({ achievements: e, medalWidth: a, medalHeight: t }) {
        const { springs: s, achievements: r, completedAnimationIndexes: n, hoverIndex: o } = Bi();
        return i.jsx('div', {
            className: Oi,
            children: g(e, (c, d) => {
                const u = r.length - d - 1;
                return i.jsx(
                    m.div,
                    {
                        className: Xi,
                        style: { ...s[u], zIndex: d === o ? e.length + 1 : e.length - d },
                        children: i.jsx(zi, {
                            classNames: { achievement: l(Gi, !n.has(u) && $i) },
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
    Wi = r.memo(function ({ className: e }) {
        const a = ee(
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
            { achievements: t } = Bi(),
            s = r.useMemo(
                () =>
                    (function (e) {
                        return h(e, (e, a) => (Qt(a) === qt ? e.rank.push(a) : e.others.push(a), e), {
                            [ns]: [],
                            [is]: [],
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
                  className: l(Hi, e),
                  children: [
                      s.rank.length > 0 &&
                          i.jsx(Mi, { achievements: s.rank, medalWidth: a.rank.width, medalHeight: a.rank.height }),
                      s.others.length > 0 &&
                          i.jsx(Li, {
                              group: is,
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
    Ki = 'AnimatedNumber_958fc84e',
    qi = 'AnimatedNumber_slotMachineDigit_a9587a5a',
    Ui = 'AnimatedNumber_plugChar_c66678',
    Zi = 'AnimatedNumber_digitsList_2065427d',
    Yi = T.cubicBezier(0.33, 0, 0.25, 1);
function Ji({ symbol: e, step: a, delay: t, first: s, handleFirstRest: n }) {
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
                    config: { duration: 600, easing: Yi },
                    immediate: l,
                    onRest() {
                        o(!0);
                    },
                });
        }, [a, d, l, t, _]),
        i.jsxs('div', {
            className: qi,
            children: [
                i.jsx('div', { className: Ui, children: e }),
                i.jsx(m.div, {
                    style: c,
                    className: Zi,
                    children: le(0, _ + 1, (t) =>
                        f
                            ? i.jsx('div', { children: t }, t)
                            : i.jsx('div', { style: { height: a }, children: t > 0 ? e : null }, t),
                    ),
                }),
            ],
        })
    );
}
const Qi = r.memo(function ({ value: e, readyToAnimate: a, className: t, handleAnimationFinished: s, type: n }) {
        const [o, c] = ne(),
            d = r.useMemo(() => e.split(''), [e]),
            m = r.useCallback(() => s(n), [s, n]);
        return i.jsx('div', {
            ref: o,
            className: l(Ki, t),
            children: d.map((t, s) =>
                i.jsx(
                    Ji,
                    {
                        first: 0 === s,
                        handleFirstRest: m,
                        delay: 200 * (d.length - s),
                        symbol: t,
                        step: c.type === ie.measured && a ? c.size.height : 0,
                    },
                    `${e}-${s}`,
                ),
            ),
        });
    }),
    el = 'Currency_10720e2d',
    al = 'Currency_icon_4d923f64',
    tl = 'Currency_icon__visible_9c676b12',
    sl = 'Currency_value_54c8fc6b',
    rl = { xp: 'tankXP', crystal: 'crystal', credits: 'credits', gold: 'gold' },
    nl = Object.keys(rl);
function il({ type: e, value: a, size: t, visibleIfZero: s, readyToAnimate: r, handleAnimationFinished: n }) {
    return ((e) => nl.includes(e))(e)
        ? 0 !== a || s
            ? i.jsx(F, {
                  reverse: !0,
                  type: rl[e],
                  size: t,
                  className: el,
                  classNames: { icon: l(al, r && tl) },
                  children: i.jsx(Qi, {
                      className: sl,
                      readyToAnimate: r,
                      type: e,
                      handleAnimationFinished: n,
                      value: k.formatNumber(e === oe.gold ? 'gold' : 'integral', a),
                  }),
              })
            : null
        : (console.error(`There is no such currency in the template literal: ${e}`), null);
}
const ll = H('Currencies', 'Currencies_5b11a533'),
    ol = o(function ({ className: e }) {
        const [a, t] = r.useState(!1),
            [s, n] = r.useState(new Set()),
            { model: l } = _s(),
            o = l.computes.earnedCurrencies(),
            c = ce(o),
            d = P(),
            { step: m } = Ns(),
            u = ee({ value: X.medium }, { medium: { value: X.large }, large: { value: X.extraLarge } });
        (r.useEffect(() => {
            void 0 !== c && c !== o && d.play('startRolling', { target: 'overview:currencies' });
        }, [o, c, d]),
            r.useEffect(() => {
                m === vs && (t(!0), d.play('startRolling', { target: 'overview:currencies' }));
            }, [m, d]),
            r.useEffect(() => {
                s.size === o.filter(({ value: e, visibleIfZero: a }) => e > 0 || a).length &&
                    d.play('stopRolling', { target: 'overview:currencies' });
            }, [o, d, s]));
        const f = r.useCallback(function (e) {
            n((a) => D(a, e));
        }, []);
        return i.jsx(ll, {
            className: e,
            children: g(o, (e) =>
                i.jsx(il, { readyToAnimate: a, size: u.value, handleAnimationFinished: f, ...e }, e.type),
            ),
        });
    }),
    cl = 'Flag_aedf2f2f',
    dl = 'Flag_8ac99d2d';
function ml({ status: e }) {
    return 'win' === e ? 'post_battle.epic_victory_ribbon' : 'post_battle.epic_defeat_draw_ribbon';
}
function ul({ status: e }) {
    const a = j.resolve('videos');
    return i.jsx('div', {
        className: cl,
        children: i.jsx(de, { loop: !0, autoplay: !0, className: dl, src: a.read(ml({ status: e })) }),
    });
}
const fl = 'account',
    _l = 'targetKills',
    pl = 'damageDealt',
    hl = 'damageBlockedByArmor',
    bl = 'damageAssisted',
    vl = 'damageAssistedStun',
    gl = 'spotted',
    xl = 'criticalDamage',
    yl = {
        [_l]: 'library.crossed_tank',
        [pl]: 'library.cross_with_gap',
        [hl]: 'library.blocked',
        [bl]: 'library.double_target',
        [vl]: 'library.arrow_with_fading',
        [gl]: 'library.eyebrow',
        [xl]: 'library.gear_with_gap',
    };
const Nl = { behaviour: me.contentResponsive, minSize: '0rem', maxSize: '1000rem' };
(ue.extraSmall,
    me.static,
    ue.medium,
    me.static,
    ue.large,
    me.static,
    ue.extraLarge,
    me.static,
    ue.extraSmall,
    me.static,
    ue.medium,
    me.static,
    ue.large,
    me.static,
    ue.extraLarge,
    me.static);
const jl = r.createContext(null);
function wl() {
    const e = r.useContext(jl);
    if (null === e)
        throw new Error('You can use the personal efficiency hooks only with the PersonalEfficiency widget component');
    return e;
}
function Il({ iconsConfig: e, children: a }) {
    const t = r.useMemo(() => ({ iconsConfig: { ...yl, ...(e || {}) } }), [e]);
    return i.jsx(jl.Provider, { value: t, children: a });
}
const Rl = 'HeaderCell_cellWithValue_78949e6d',
    Sl = 'HeaderCell_cellWithValue__totalInfo_789bf7be',
    Cl = 'HeaderCell_cellWithValue__zeroIndent_334269c9',
    Pl = 'HeaderCell_wrapper_7849c6a',
    Tl = 'HeaderCell_imageWrapper_a570c717',
    Dl = 'HeaderCell_value_f7bb7c82',
    Al = 'HeaderCell_cellWithText_710c47ce',
    Bl = 'HeaderCell_text_35220206';
function Vl({ info: e, name: a, className: t }) {
    const { iconsConfig: s } = wl(),
        r = j.resolve('views'),
        n = fe({
            contentId: r.read((e) =>
                a === xl
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: { paramType: a },
        }),
        o = h(
            e.table.getRowModel().rows,
            (e, t) => {
                const s = t.getValue(a),
                    r = _e(s) ? s : s.value;
                return e + (a === gl && r > 0 ? 1 : r);
            },
            0,
        ),
        c = s[a] ?? '';
    return i.jsx('div', {
        className: l(Rl, t),
        children: i.jsxs('div', {
            ...n,
            className: Pl,
            children: [
                i.jsx('div', { className: Dl, children: k.formatNumber('integral', o) }),
                i.jsx('div', { className: Tl, children: i.jsx(z, { width: '100%', height: '100%', path: c }) }),
            ],
        }),
    });
}
function kl({ name: e, info: a, className: t }) {
    const s = j.resolve('strings');
    switch (e) {
        case _l:
        case pl:
        case hl:
        case bl:
        case vl:
        case gl:
        case xl:
            return void 0 !== a ? i.jsx(Vl, { name: e, info: a, className: t }) : null;
        case fl:
            return i.jsx('div', {
                className: Al,
                children: i.jsx('div', {
                    className: Bl,
                    children: s.readOrEmpty('battle_results.common.battleEfficiency.uppercased_title'),
                }),
            });
        default:
            return (console.error(`Unknown column ${e}`), null);
    }
}
const El = 'IconCell_99b0caec';
r.memo(function ({ value: e, name: a, userName: t, className: s }) {
    const { iconsConfig: n } = wl(),
        o = j.resolve('views'),
        c = fe({
            contentId: o.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: r.useMemo(() => ({ userName: t, paramType: a }), [a, t]),
        });
    if (0 === e) return null;
    const d = n[a] ?? '';
    return i.jsx('div', {
        ...c,
        className: l(El, s),
        children: i.jsx(z, { width: '32rem', height: '32rem', path: d }),
    });
});
const zl = 'NumberCell_c62bf499';
r.memo(function ({ value: e, userName: a, name: t, className: s }) {
    const n = j.resolve('views'),
        o = fe({
            contentId: n.read((e) =>
                t === xl
                    ? e.mono.post_battle.tooltips.critical_damage('resId')
                    : e.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            ),
            args: r.useMemo(() => ({ userName: a, paramType: t }), [t, a]),
        });
    return 0 === e ? null : i.jsx('div', { ...o, className: l(zl, s), children: k.formatNumber('integral', e) });
});
const Hl = {
    base: 'NumberWithCounterCell_f729c44',
    counter: 'NumberWithCounterCell_counter_8bb0eb59',
    counter__hidden: 'NumberWithCounterCell_counter__hidden_468e7d52',
    counterValue: 'NumberWithCounterCell_counterValue_566cc1fa',
    roundedCount: 'NumberWithCounterCell_roundedCount_c97dad37',
};
function Ol({ count: e }) {
    const a = pe({ body: e.toString() }),
        t = (s = e) < 1e3 ? s : Math.floor(s / 1e3);
    var s;
    return i.jsx('div', {
        className: Hl.counterValue,
        children:
            t === e
                ? e
                : i.jsx('div', {
                      ...a,
                      className: Hl.roundedCount,
                      children: i.jsx(A, {
                          path: 'common.numberAbbrev',
                          params: { value: k.formatNumber('integral', Math.min(t, 99)) },
                      }),
                  }),
    });
}
r.memo(function ({ value: e, count: a, name: t, userName: s, className: n }) {
    const { iconsConfig: o } = wl(),
        c = j.resolve('views'),
        d = fe({
            contentId: c.read((e) => e.lobby.tooltips.BattleResultsStatsTooltipView('resId')),
            args: r.useMemo(() => ({ userName: s, paramType: t }), [t, s]),
        });
    if (0 === e && 0 === a) return null;
    const m = o[t] ?? '';
    return i.jsxs('div', {
        ...d,
        className: l(Hl.base, n),
        children: [
            e > 0 && k.formatNumber('integral', e),
            i.jsxs('div', {
                className: l(Hl.counter, 0 === a && Hl.counter__hidden),
                children: [
                    i.jsx(z, { className: Hl.icon, width: '32rem', height: '32rem', path: m }),
                    a >= 2 && i.jsx(Ol, { count: a }),
                ],
            }),
        ],
    });
});
const Fl = 'Index_align_5032d1bf',
    Xl = 'Index_align__right_9d371d4f',
    Gl = f();
function $l() {
    return [
        Gl.accessor('killed', {
            id: _l,
            header: (e) => i.jsx(kl, { info: e, name: _l, className: l(Sl, Cl) }),
            enableSorting: !1,
            meta: { column: Nl, className: l(Fl, Xl) },
        }),
        Gl.accessor('damageDealt', {
            id: pl,
            header: (e) => i.jsx(kl, { info: e, name: pl, className: Sl }),
            enableSorting: !1,
            meta: { className: l(Fl, Xl), column: Nl },
        }),
        Gl.accessor('damageBlockedByArmor', {
            id: hl,
            header: (e) => i.jsx(kl, { info: e, name: hl, className: Sl }),
            enableSorting: !1,
            meta: { className: l(Fl, Xl), column: Nl },
        }),
        Gl.accessor('damageAssisted', {
            id: bl,
            header: (e) => i.jsx(kl, { info: e, name: bl, className: Sl }),
            enableSorting: !1,
            meta: { className: l(Fl, Xl), column: Nl },
        }),
        Gl.accessor('damageAssistedStun', {
            id: vl,
            header: (e) => i.jsx(kl, { info: e, name: vl, className: Sl }),
            enableSorting: !1,
            meta: { className: l(Fl, Xl), column: Nl },
        }),
        Gl.accessor('spotted', {
            id: gl,
            header: (e) => i.jsx(kl, { info: e, name: gl, className: Sl }),
            enableSorting: !1,
            meta: { className: l(Fl, Xl), column: Nl },
        }),
        Gl.accessor('criticalDamage', {
            id: xl,
            header: (e) => i.jsx(kl, { info: e, name: xl, className: Sl }),
            enableSorting: !1,
            meta: { className: l(Fl, Xl), column: Nl },
        }),
    ];
}
const Ll = 'TableHeader_row_a81d3e65',
    Ml = r.memo(function ({ classNames: e }) {
        const { table: a } = he();
        return i.jsx(be.Header, {
            className: e?.base,
            children: g(a.getHeaderGroups(), (a, t) =>
                i.jsx(
                    be.Row,
                    {
                        className: l(Ll, e?.row),
                        children: g(a.headers, (a, s) =>
                            i.jsx(
                                be.Cell,
                                {
                                    onClick: a.column.getToggleSortingHandler(),
                                    className: e?.cell,
                                    cell: { ...a, rowIndex: t, index: s, tablePart: ve.header },
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
    Wl = function ({ data: e, config: a, className: t }) {
        const s = ge();
        return i.jsx(Il, {
            children: i.jsx(xe, {
                data: e,
                columns: a,
                enableMultiRowSelection: !1,
                getRowId: (e) => e.account.username,
                children: i.jsx(be, { className: t, children: i.jsx(Ml, {}) }, s.breakpoint.name),
            }),
        });
    },
    Kl = 'PersonalEfficiency_messagesPanel_d1b1fa0b',
    ql = 'PersonalEfficiency_message_d772bbd7',
    Ul = 'PersonalEfficiency_totalEfficiency_4de0e87b',
    Zl = 'PersonalEfficiency_totalEfficiencyTable_9139933',
    Yl = 'PersonalEfficiency_clarificationWrapper_5f3072b1',
    Jl = o(function () {
        const { model: e } = _s(),
            a = e.computes.personalEfficiency(),
            t = e.battleInfo.get().finishReasonClarification,
            s = j.resolve('strings'),
            { personalEfficiencyRef: n } = Ns(),
            [l] = u(() => ({ from: { opacity: 0 }, ref: n })),
            o = r.useMemo($l, []);
        return 0 === a.length
            ? i.jsxs(m.div, {
                  style: l,
                  className: Kl,
                  children: [
                      '' !== t &&
                          i.jsx('div', {
                              className: ql,
                              children: s.readOrEmpty(`battle_results.finish.clarification.${t}`),
                          }),
                      i.jsx('div', {
                          className: ql,
                          children: s.readOrEmpty('battle_results.common.battleEfficiency.noEfficiency'),
                      }),
                  ],
              })
            : i.jsx('div', {
                  className: Ul,
                  children: i.jsxs(m.div, {
                      style: l,
                      children: [
                          '' !== t &&
                              i.jsx('div', {
                                  className: Yl,
                                  onClick: (e) => e.stopPropagation(),
                                  children: i.jsx('div', {
                                      className: ql,
                                      children: s.readOrEmpty(`battle_results.finish.clarification.${t}`),
                                  }),
                              }),
                          i.jsx(Wl, { data: a, config: o, className: Zl }),
                      ],
                  }),
              });
    }),
    Ql = {
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
    eo = H('Overview', Ql.base),
    ao = o(function ({ className: e }) {
        const a = j.resolve('strings'),
            t = P(),
            { model: s } = _s(),
            n = s.personalEfficiency.achievements.get(),
            { step: o, battleStatusRef: c, earnedCurrenciesRef: d } = Ns(),
            [f] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: c })),
            [_] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: d })),
            { api: p, setCompletedAnimationIndexes: h } = Bi(),
            b = s.battleInfo.get()?.winStatus;
        return (
            r.useEffect(() => {
                if (o === hs) {
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
                            config: { duration: 400 + i, easing: T.cubicBezier(1, 0, 0.95, 1) },
                            onRest() {
                                (t.play('achievementAppeared', { target: 'overview' }), h((e) => D(e, s)));
                            },
                        };
                    }),
                        p.start((t) => ({
                            opacity: 1,
                            delay: 150 + 200 * t + (e - 500 * Math.log(n.length - t)),
                            config: {
                                duration: 250 + (a - 150 * Math.log(n.length - t)),
                                easing: T.cubicBezier(0.33, 0, 0.25, 1),
                            },
                        })));
                }
            }, [o, p, h, t, n.length]),
            i.jsxs(eo, {
                className: e,
                children: [
                    i.jsx('div', { className: l(Ql.background, b && Ql[`background__${b}`]) }),
                    i.jsx('div', { className: Ql.cornerShadow }),
                    i.jsx('div', { className: l(Ql.bottomGradient, b && Ql[`bottomGradient__${b}`]) }),
                    i.jsxs('div', {
                        className: l(Ql.info, 0 === n.length && Ql.info__withoutMedals),
                        children: [
                            i.jsx(ul, { status: b }),
                            i.jsx('div', {
                                className: Ql.statusWrapper,
                                children: i.jsx(m.div, {
                                    style: f,
                                    className: Ql.status,
                                    children: i.jsx('div', {
                                        className: Ql.statusText,
                                        'data-test-id': 'winStatus',
                                        children: k.toUpperCase(a.readOrEmpty(`battle_results.status.${b}`)),
                                    }),
                                }),
                            }),
                            i.jsx(Wi, { className: Ql.achievements }),
                            i.jsx(m.div, { style: _, className: Ql.currencies, children: i.jsx(ol, {}) }),
                        ],
                    }),
                    i.jsx(Jl, {}),
                ],
            })
        );
    }),
    to = o(function (e) {
        const { model: a } = _s(),
            t = a.personalEfficiency.achievements.get();
        return i.jsx(ki, { achievements: t, children: i.jsx(ao, { ...e }) });
    }),
    so = 'Divider_80a19f4b',
    ro = r.forwardRef(function ({ classNames: e, className: a, ...t }, s) {
        return i.jsx('div', {
            ...t,
            ref: s,
            className: l(so, e?.base, a),
            children: i.jsx(z, {
                className: e?.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }),
    no = {
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
function io(e, a) {
    return void 0 === a ? 'default' : a === e ? 'hover' : 'extinct';
}
const lo = r.forwardRef(function (
        { achievement: e, achievementsLength: a, index: t, hoverIndex: s, setHoverIndex: r, ...n },
        o,
    ) {
        const c = P(),
            d = te({ args: { tooltipId: e.tooltipId, tooltipArgs: e.tooltipArgs } }),
            m = ee(
                { width: '48rem', height: '48rem', path: `achievement.c_48x48.${e.iconName}` },
                { medium: { width: '67rem', height: '71rem', path: `achievement.${e.iconName}` } },
            );
        return i.jsx('div', {
            ...n,
            ...d,
            className: l(no.achievement, no[`achievement__${io(t, s)}`]),
            style: { zIndex: t === s ? a + 1 : a - t },
            onMouseEnter: function (e) {
                (d.onMouseEnter(e),
                    r(t),
                    c.play('mouse-enter', { original: e, target: 'team-efficiency:efficiency-details:achievement' }));
            },
            onMouseLeave: () => {
                (d.onMouseLeave(), r(void 0));
            },
            children: i.jsx(z, { ref: o, className: no.achievementIcon, ...m }, e.iconName),
        });
    }),
    oo = o(function ({ team: e, account: a, vehicles: t, achievements: s, squadIndex: n, personal: o }) {
        const c = j.resolve('strings'),
            [d, m] = r.useState(void 0),
            { model: u, controls: f } = _s(),
            _ = u.teamsStatistic.selectedVehicle.get(),
            p = u.computes.personalInfo(),
            h = ee({ width: '230rem', height: '184rem' }, { medium: { width: '290rem', height: '232rem' } }),
            b = pe({
                header: c.readOrEmpty('tooltips.anonymizer.teamStats.header').replace('%(name)s', a.username),
                body: c.readOrEmpty('tooltips.anonymizer.teamStats.body'),
            }),
            v = us({ personal: o, platoonType: ms(e, p.squadIndex, n), anonymizer: a.anonymizer });
        return i.jsxs('div', {
            className: no.header,
            children: [
                i.jsx('div', {
                    className: no.vehicleImageWrapper,
                    children: i.jsx(ye, { name: _ ?? '', width: h.width, height: h.height }),
                }),
                i.jsxs('div', {
                    className: no.info,
                    children: [
                        i.jsxs(Ne, {
                            className: no.accountInfo,
                            children: [
                                '' !== a.badge &&
                                    i.jsx(Ne.Badge, {
                                        className: no.accountInfoGap,
                                        size: Ne.Badge.sizes.x48x48,
                                        badgeId: a.badge,
                                    }),
                                i.jsx(Ne.Name, {
                                    className: l(no.accountName, no.accountInfoGap),
                                    children: i.jsx(je, { text: v ? a.fakeUsername : a.username }),
                                }),
                                '' !== a.clanAbbreviation &&
                                    !v &&
                                    i.jsx(Ne.ClanTag, {
                                        className: no.clanAbbreviation,
                                        children: i.jsx(A, {
                                            path: 'common.clanTag',
                                            params: { abbrev: a.clanAbbreviation },
                                            brackets: { start: '{', end: '}' },
                                        }),
                                    }),
                                0 !== a.igrType &&
                                    i.jsx(Ne.IgrIcon, { size: Ne.IgrIcon.sizes.x64x28, className: no.accountInfoGap }),
                                '' !== a.suffixBadge &&
                                    i.jsx(Ne.Stripe, {
                                        size: Ne.Stripe.sizes.regular,
                                        badgeId: a.suffixBadge,
                                        className: no.accountInfoGap,
                                    }),
                                a.anonymizer &&
                                    i.jsx(Ne.AnonymizerIcon, {
                                        ...b,
                                        size: Ne.AnonymizerIcon.sizes.x32x32,
                                        className: no.anonymizerIcon,
                                    }),
                            ],
                        }),
                        i.jsx('div', {
                            className: no.vehicle,
                            children: i.jsx(gi, {
                                options: g(t, ({ vehicle: e, isGeneralInfo: a }) =>
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
                                className: no.achievements,
                                children: g(es(s), (e, a) =>
                                    i.jsx(
                                        lo,
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
    co = H('StatisticsLabel'),
    mo = j.resolve('strings'),
    uo = r.forwardRef(function ({ labelKey: e, ...a }, t) {
        return i.jsx(co, { ...a, ref: t, children: mo.readOrEmpty(e) });
    }),
    fo = 'Value_798a6cdd',
    _o = 'Value_separator_798a6cdd',
    po = j.resolve('strings');
function ho(e, a) {
    switch (e) {
        case Et.Integer:
            return k.formatNumber('integral', a);
        case Et.Float:
            return k.formatReal('fractional', a);
        default:
            return a;
    }
}
const bo = H('StatisticsValue', fo),
    vo = r.forwardRef(function (
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
        return i.jsx(bo, {
            ...c,
            ref: d,
            className: l(o?.base, n),
            children: g(a, (n, c) =>
                i.jsxs(
                    r.Fragment,
                    {
                        children: [
                            i.jsx('div', {
                                className: l(0 === n && o?.zeroValue, n < 0 && o?.negativeValue),
                                children: ho(t, n),
                            }),
                            c < a.length - 1 &&
                                i.jsxs('div', {
                                    className: l(_o, o?.separator),
                                    children: [' ', po.readOrEmpty(s), ' '],
                                }),
                        ],
                    },
                    `${e}_value_${c}`,
                ),
            ),
        });
    }),
    go = 'Index_scrollAreaContent_52a570a',
    xo = 'Index_scrollAreaContent__initialized_b2629fde',
    yo = 'Index_item_6b7cdfb0',
    No = 'Index_separator_add04e19',
    jo = H('Statistics', 'Index_statistics_638478ff'),
    wo = H('StatisticsItem', yo),
    Io = H('StatisticsItemSeparator', No);
function Ro({ children: e, scrollbarProps: a, scrollAreaProps: t }) {
    const s = L(),
        r = Br(s.api);
    return i.jsxs(i.Fragment, {
        children: [
            i.jsx(M, {
                ...t,
                classNames: { ...t?.classNames, content: l(go, r && xo, t?.classNames?.content) },
                children: e,
            }),
            i.jsx($, { ...a }),
        ],
    });
}
const So = r.forwardRef(function ({ scrollbarProps: e, scrollAreaProps: a, ...t }, s) {
    return i.jsx(jo, {
        ...t,
        ref: s,
        children: i.jsx(G, { children: i.jsx(Ro, { ...t, scrollbarProps: e, scrollAreaProps: a }) }),
    });
});
((So.Item = wo), (So.Value = vo), (So.Label = uo), (So.Separator = Io));
const Co = 'PlayerStatistics_scrollbar_987bbca2',
    Po = 'PlayerStatistics_scrollAreaContent_8636fa99',
    To = 'PlayerStatistics_listItemSeparator_32247273',
    Do = 'PlayerStatistics_listItem_27e9eeba',
    Ao = 'PlayerStatistics_frontlinePramLabel_5c3a9665',
    Bo = 'PlayerStatistics_label_fceb862d',
    Vo = 'PlayerStatistics_value_6831d5c1',
    ko = 'PlayerStatistics_zeroValue_d98b2431',
    Eo = 'PlayerStatistics_valueSeparator_dcf01904',
    zo = 'PlayerStatistics_listSubItem_db8ef127',
    Ho = 'PlayerStatistics_separator_4e8ac571',
    Oo = 'PlayerStatistics_separatorSquare_5e440c20';
function Fo({ squareSize: e = 1, spacing: a = 2, backgroundColor: t = '#d9d9d9' }) {
    const s = r.useRef(null),
        [n, l] = r.useState(0),
        o = e + a,
        c = r.useCallback(() => {
            const e = s.current;
            if (null !== e) {
                const a = e.getBoundingClientRect().width,
                    t = we(a);
                l(Math.floor(t / o));
            }
        }, [o]);
    return (
        Ie(c, [s.current, o, c]),
        r.useEffect(() => Z(c), [c]),
        i.jsx('div', {
            ref: s,
            className: Ho,
            children: Array.from({ length: n }).map((a, s) =>
                i.jsx(
                    'div',
                    {
                        className: Oo,
                        style: { backgroundColor: t, width: `${e}rem`, height: `${e}rem`, left: s * o + 'rem' },
                    },
                    s,
                ),
            ),
        })
    );
}
const Xo = j.resolve('strings'),
    Go = (e) =>
        'boolean' == typeof e
            ? e
                ? Xo.readOrEmpty('fl_post_battle_results.battleInfo.yes')
                : Xo.readOrEmpty('fl_post_battle_results.battleInfo.no')
            : e;
function $o({ list: e, frontLineParams: a, isGeneralInfo: t }) {
    return i.jsxs(So, {
        scrollbarProps: { classNames: { base: Co } },
        scrollAreaProps: { classNames: { content: Po } },
        children: [
            t &&
                Object.entries(a).map(([e, a]) =>
                    i.jsxs(
                        So.Item,
                        {
                            className: Do,
                            children: [
                                i.jsx(So.Label, {
                                    className: Ao,
                                    labelKey: `fl_post_battle_results.battleInfo.labels_${e}`,
                                }),
                                i.jsx(So.Separator, { className: To, children: i.jsx(Fo, {}) }),
                                i.jsx('div', { className: l(Vo, !a && ko), children: Go(a) }),
                            ],
                        },
                        e,
                    ),
                ),
            g(e, (e) =>
                i.jsxs(
                    r.Fragment,
                    {
                        children: [
                            i.jsxs(So.Item, {
                                className: Do,
                                children: [
                                    i.jsx(So.Label, {
                                        className: Bo,
                                        labelKey: `battle_results.team.stats.labels_${e.labelKey}`,
                                    }),
                                    i.jsx(So.Separator, { className: To, children: i.jsx(Fo, {}) }),
                                    i.jsx(So.Value, {
                                        classNames: { base: Vo, zeroValue: ko, separator: Eo },
                                        labelKey: e.labelKey,
                                        value: e.value,
                                        type: e.paramValueType,
                                    }),
                                ],
                            }),
                            void 0 !== e.details &&
                                g(e.details, (e) =>
                                    i.jsxs(
                                        So.Item,
                                        {
                                            className: l(Do, zo),
                                            children: [
                                                i.jsx(So.Label, {
                                                    className: Bo,
                                                    labelKey: `battle_results.team.stats.labels_${e.labelKey}`,
                                                }),
                                                i.jsx(So.Separator, { className: To, children: i.jsx(Fo, {}) }),
                                                i.jsx(So.Value, {
                                                    classNames: { base: Vo, zeroValue: ko, separator: Eo },
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
const Lo = 'EfficiencyDetails_efficiencyDetails__allies_20b1febc',
    Mo = 'EfficiencyDetails_efficiencyDetails__enemies_23a29af',
    Wo = 'EfficiencyDetails_divider_85b11efd',
    Ko = 'EfficiencyDetails_dividerImage_5b9d06d2',
    qo = 'EfficiencyDetails_closeIcon_8d81da90',
    Uo = 'EfficiencyDetails_statistics_30a81815',
    Zo = H('EfficiencyDetails', 'EfficiencyDetails_efficiencyDetails_db8069eb', {
        variants: { team: { [ls]: Lo, [os]: Mo } },
    }),
    Yo = o(function ({ team: e, className: a }) {
        const { model: t, controls: s } = _s(),
            n = t.teamsStatistic.selectedVehicle.get(),
            l = t.computes.efficiencyDetails(),
            o = r.useMemo(
                () => b(l?.vehicles ?? [], (e) => (n ? e.vehicle?.techName === n : e.isGeneralInfo)),
                [n, l?.vehicles],
            ),
            c = P(),
            d = r.useRef(null);
        return (
            r.useEffect(() => {
                const e = Re.down(([, e]) => {
                        'outside' === e && s.teamEfficiency.selectRow(void 0);
                    }),
                    a = Se(window, 'click', (e) => {
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
                ? i.jsxs(Zo, {
                      team: e,
                      className: a,
                      ref: d,
                      children: [
                          l &&
                              i.jsx(oo, {
                                  team: e,
                                  account: l.account,
                                  squadIndex: l.squadIndex,
                                  achievements: l.achievements,
                                  personal: l.personal,
                                  vehicles: l.vehicles,
                              }),
                          o &&
                              i.jsx('div', {
                                  className: Uo,
                                  children: i.jsx($o, {
                                      isGeneralInfo: o.isGeneralInfo,
                                      frontLineParams: {
                                          objectivesReached: o.objectivesReached,
                                          objectivesDestroyed: o.objectivesDestroyed,
                                          zoneCaptured: o.zoneCaptured,
                                      },
                                      list: o.detailedStatistics,
                                  }),
                              }),
                          i.jsx(ro, { classNames: { base: Wo, image: Ko } }),
                          i.jsx(z, {
                              className: qo,
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
    Jo = 'squadIndex',
    Qo = 'account',
    ec = 'rank',
    ac = 'damageDealt',
    tc = 'kills',
    sc = 'earnedXp',
    rc = 'respawns',
    nc = 'achievements',
    ic = 'AccountInfoCell_accountInfo_dec8771',
    lc = 'AccountInfoCell_accountName_758104df',
    oc = 'AccountInfoCell_clanAbbreviation_99f1cc86',
    cc = 'AccountInfoCell_badge_b101914f',
    dc = 'AccountInfoCell_anonymizerIcon_a1d51ca4',
    mc = 'AccountInfoCell_igrIcon_158694e7',
    uc = 'AccountInfoCell_stripe_fefba7b2',
    fc = o(function ({ account: e, team: a, platoon: t, className: s, classNames: r, ...n }) {
        const { model: o } = _s(),
            c = o.computes.personalInfo(),
            d = us({
                personal: c.account.username === e.username,
                platoonType: ms(a, c.squadIndex, t),
                anonymizer: e.anonymizer,
            });
        return i.jsxs(Ne, {
            ...n,
            className: l(ic, s),
            children: [
                '' !== e.badge &&
                    i.jsx(Ne.Badge, { size: Ne.Badge.sizes.x24x24, badgeId: e.badge, className: l(cc, r?.badge) }),
                i.jsx(Ne.Name, {
                    className: l(lc, r?.username),
                    children: i.jsx(je, { text: d ? e.fakeUsername : e.username }),
                }),
                '' !== e.clanAbbreviation &&
                    !d &&
                    i.jsx(Ne.ClanTag, {
                        className: l(oc, r?.clanAbbreviation),
                        children: i.jsx(A, {
                            path: 'common.clanTag',
                            params: { abbrev: e.clanAbbreviation },
                            brackets: { start: '{', end: '}' },
                        }),
                    }),
                0 !== e.igrType && i.jsx(Ne.IgrIcon, { size: Ne.IgrIcon.sizes.x34x16, className: l(mc, r?.igrIcon) }),
                '' !== e.suffixBadge &&
                    i.jsx(Ne.Stripe, {
                        size: Ne.Stripe.sizes.default,
                        badgeId: e.suffixBadge,
                        className: uc,
                        classNames: r?.suffixBadge,
                    }),
                e.anonymizer &&
                    i.jsx(Ne.AnonymizerIcon, {
                        size: Ne.AnonymizerIcon.sizes.x24x24,
                        className: l(dc, r?.anonymizerIcon),
                    }),
            ],
        });
    }),
    _c = 'AchievementsCell_achievementCell_e9bf973c',
    pc = 'AchievementsCell_achievementsAmount_349c209a';
function hc({ achievements: e }) {
    const a = j.resolve('strings'),
        t = pe({ body: g(es(e), (e) => a.readOrEmpty(`achievements.${e.name}`)).join('\n') }),
        s = e.length;
    return 0 === s
        ? null
        : i.jsxs('div', {
              ...t,
              className: _c,
              children: [
                  i.jsx(z, { path: 'library.medal', width: '32rem', height: '32rem' }),
                  i.jsx('div', { className: pc, children: k.formatNumber('integral', s) }),
              ],
          });
}
const bc = { behaviour: me.static, size: '32rem' },
    vc = { behaviour: me.static, size: '294rem' },
    gc = { behaviour: me.static, size: '392rem' },
    xc = { behaviour: me.static, size: '496rem' },
    yc = { behaviour: me.static, size: '40rem' },
    Nc = { behaviour: me.static, size: '60rem' },
    jc = { behaviour: me.static, size: '56rem' },
    wc = { behaviour: me.static, size: '60rem' },
    Ic = { behaviour: me.static, size: '80rem' },
    Rc = { behaviour: me.static, size: '40rem' },
    Sc = { behaviour: me.static, size: '60rem' },
    Cc = { behaviour: me.static, size: '56rem' },
    Pc = { behaviour: me.static, size: '60rem' },
    Tc = { behaviour: me.static, size: '80rem' },
    Dc = { behaviour: me.static, size: '40rem' },
    Ac = { behaviour: me.static, size: '56rem' },
    Bc = { behaviour: me.static, size: '40rem' },
    Vc = {
        [Jo]: { [ue.extraSmall]: bc, [ue.medium]: bc, [ue.large]: bc, [ue.extraLarge]: bc },
        [Qo]: { [ue.extraSmall]: vc, [ue.medium]: gc, [ue.large]: gc, [ue.extraLarge]: xc },
        [ec]: { [ue.extraSmall]: yc, [ue.medium]: Nc, [ue.large]: Nc, [ue.extraLarge]: Nc },
        [ac]: { [ue.extraSmall]: jc, [ue.medium]: wc, [ue.large]: wc, [ue.extraLarge]: Ic },
        [tc]: { [ue.extraSmall]: Rc, [ue.medium]: Sc, [ue.large]: Sc, [ue.extraLarge]: Sc },
        [sc]: { [ue.extraSmall]: Cc, [ue.medium]: Pc, [ue.large]: Pc, [ue.extraLarge]: Tc },
        [rc]: { [ue.extraSmall]: Dc, [ue.medium]: Ac, [ue.large]: Ac, [ue.extraLarge]: Ac },
        [nc]: { [ue.extraSmall]: Bc, [ue.medium]: Bc, [ue.large]: Bc, [ue.extraLarge]: Bc },
    },
    kc = {
        root: 'HeaderCell_root_204e6a44',
        'media-wrapper': 'HeaderCell_media-wrapper_204e6a44',
        headerCell__asc: 'HeaderCell_headerCell__asc_204e6a44',
        headerCell__desc: 'HeaderCell_headerCell__desc_dc5a7202',
        headerCell: 'HeaderCell_headerCell_5b34d1b1',
        headerCell__icon: 'HeaderCell_headerCell__icon_cfa14ddf',
        headerCell__text: 'HeaderCell_headerCell__text_b476890c',
        icon: 'HeaderCell_icon_5a06734a',
    },
    Ec = [ec, rc],
    zc = {
        [Jo]: 'library.shield',
        [ec]: 'rank',
        [ac]: 'library.cross_with_gap',
        [tc]: 'library.crossed_tank',
        [sc]: 'library.star',
        [rc]: 'respawns',
        [nc]: 'library.medal',
    },
    Hc = {
        [Jo]: 'squadHeader',
        [Qo]: 'playerHeader',
        [ec]: 'epicRankHeader',
        [ac]: 'damageHeader',
        [tc]: 'fragHeader',
        [sc]: 'xpHeader',
        [rc]: 'epicRespawnHeader',
        [nc]: 'medalHeader',
    },
    Oc = r.forwardRef(function ({ name: e, team: a, column: t, className: s, ...r }, n) {
        const o = t.getIsSorted(),
            c = j.resolve('strings'),
            d = pe({
                header: c.readOrEmpty(`battle_results.team.${Hc[e]}.header`),
                body: c.readOrEmpty(`battle_results.team.${Hc[e]}.body`),
            }),
            m = e === Qo,
            u = Ec.includes(e);
        return i.jsx('div', {
            ...r,
            ...d,
            ref: n,
            className: l(kc.headerCell, m ? kc.headerCell__text : kc.headerCell__icon, o && kc[`headerCell__${o}`], s),
            children: m
                ? c.readOrEmpty(`battle_results.team.stats.${a}`)
                : u
                  ? i.jsx('div', {
                        style: {
                            backgroundImage: `url(${R.images.frontline.gui.maps.icons.postBattleResults.$dyn(zc[e])})`,
                        },
                        className: kc.icon,
                    })
                  : i.jsx(z, { path: zc[e], className: kc.icon }),
        });
    }),
    Fc = 'NumberValueCell_numberValueCell_35482257';
function Xc({ value: e, className: a, showZero: t = !0 }) {
    return !1 === t && 0 === e ? null : i.jsx('div', { className: l(Fc, a), children: k.formatNumber('integral', e) });
}
const Gc = {
        root: 'PlatoonCell_root_45cd697',
        'media-wrapper': 'PlatoonCell_media-wrapper_45cd697',
        platoon: 'PlatoonCell_platoon_5fe0374b',
        platoonText: 'PlatoonCell_platoonText_b6a98287',
        platoonText__personal: 'PlatoonCell_platoonText__personal_d021db4c',
        platoonText__alien: 'PlatoonCell_platoonText__alien_9767e814',
    },
    $c = { [ds]: 'library.platoon_indicator_gray', [cs]: 'library.platoon_indicator_orange' },
    Lc = o(function ({ platoon: e, team: a }) {
        const { model: t } = _s(),
            s = ms(a, t.computes.personalInfo().squadIndex, e);
        if (null === s) return null;
        const r = $c[s];
        return i.jsxs('div', {
            className: Gc.platoon,
            children: [
                i.jsx(z, { path: r, width: '32rem', height: '32rem' }),
                i.jsx('div', { className: l(Gc.platoonText, Gc[`platoonText__${s}`]), children: e }),
            ],
        });
    }),
    Mc = 'RankCell_5390b3e9';
function Wc({ rank: e }) {
    return i.jsx('div', {
        style: { backgroundImage: `url(${R.images.frontline.gui.maps.icons.ranksSilver.c_24x24.$dyn(`rank_${e}`)})` },
        className: Mc,
    });
}
const Kc = 'EfficiencyTable_efficiencyTable__allies_b2f99733',
    qc = 'EfficiencyTable_efficiencyTable__enemies_1ba35ae7',
    Uc = 'EfficiencyTable_header_412b5b7b',
    Zc = 'EfficiencyTable_rowsWrapper_da034938',
    Yc = 'EfficiencyTable_efficiencyTable_e622a43e',
    Jc = 'EfficiencyTable_alignLeft_a52cfd11',
    Qc = 'EfficiencyTable_alignRight_46cf6a64',
    ed = 'EfficiencyTable_table_f467cc44',
    ad = 'EfficiencyTable_tableBody_5b14613b',
    td = 'EfficiencyTable_scrollBar_f4e5aa11',
    sd = 'EfficiencyTable_scrollAreaContent_4fa5a5ab',
    rd = 'EfficiencyTable_mask_8fbe6740',
    nd = {
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
    id = f(),
    ld = (e, a, t) => {
        const s = e.getValue('account'),
            r = e.getValue('squadIndex');
        return us({
            personal: a.account.username === s.username,
            platoonType: ms(t, a.squadIndex, r),
            anonymizer: s.anonymizer,
        })
            ? s.fakeUsername
            : s.username;
    },
    od = ({ team: e, personalInfo: a, breakpointName: t }) => {
        const s = (t, s) =>
                ((e, a, t, s) => {
                    const r = ld(e, t, s),
                        n = ld(a, t, s);
                    return r.localeCompare(n);
                })(t, s, a, e),
            r = 'small' === t ? ue.extraSmall : t;
        return [
            id.accessor('squadIndex', {
                id: Jo,
                header: (e) => i.jsx(Oc, { name: Jo, column: e.column }),
                sortingFn: (e, a) => {
                    const t = a.getValue('squadIndex') - e.getValue('squadIndex');
                    return 0 !== t ? t : s(e, a);
                },
                cell: (a) => i.jsx(Lc, { team: e, platoon: a.cell.getValue() }),
                meta: { column: Vc[Jo][r] },
            }),
            id.accessor('account', {
                id: Qo,
                header: (a) => i.jsx(Oc, { team: e, name: Qo, column: a.column }),
                sortDescFirst: !1,
                sortingFn: s,
                cell: (a) =>
                    i.jsx(fc, {
                        account: a.cell.getValue(),
                        team: e,
                        platoon: a.row.original.squadIndex,
                        className: nd.accountInfo,
                        classNames: { username: nd.accountName, clanAbbreviation: nd.clanAbbreviation },
                    }),
                meta: { column: Vc[Qo][r], className: Jc },
            }),
            id.accessor('rank', {
                id: ec,
                header: (e) => i.jsx(Oc, { name: ec, column: e.column }),
                sortingFn: (e, a) => e.getValue('rank') - a.getValue('rank') || s(e, a),
                cell: (e) => i.jsx(Wc, { rank: e.cell.getValue() }),
                meta: { column: Vc[ec][r] },
            }),
            id.accessor('efficiencyValues', {
                id: ac,
                header: (e) => i.jsx(Oc, { name: ac, column: e.column }),
                sortingFn: (e, a) =>
                    (e.getValue('damageDealt').damageDealt ?? 0) - (a.getValue('damageDealt').damageDealt ?? 0) ||
                    s(e, a),
                cell: (e) => i.jsx(Xc, { value: e.getValue().damageDealt ?? 0, className: nd.numberValue }),
                meta: { column: Vc[ac][r], className: Qc },
            }),
            id.accessor('efficiencyValues', {
                id: tc,
                header: (e) => i.jsx(Oc, { name: tc, column: e.column }),
                sortingFn: (e, a) =>
                    e.getValue('kills').subtractedAlliesKills - a.getValue('kills').subtractedAlliesKills || s(e, a),
                cell: (e) =>
                    i.jsx(Xc, { showZero: !1, value: e.getValue().subtractedAlliesKills, className: nd.numberValue }),
                meta: { column: Vc[tc][r] },
            }),
            id.accessor('efficiencyValues', {
                id: sc,
                header: (e) => i.jsx(Oc, { name: sc, column: e.column }),
                sortingFn: (e, a) =>
                    (e.getValue('earnedXp')?.earnedXp ?? 0) - (a.getValue('earnedXp')?.earnedXp ?? 0) || s(e, a),
                cell: (e) => i.jsx(Xc, { value: e.getValue().earnedXp ?? 0, className: nd.numberValue }),
                meta: { column: Vc[sc][r], className: Qc },
            }),
            id.accessor('respawns', {
                id: rc,
                header: (e) => i.jsx(Oc, { name: rc, column: e.column }),
                sortingFn: (e, a) => e.getValue('respawns') - a.getValue('respawns') || s(e, a),
                cell: (e) => i.jsx(Xc, { value: e.row.original.respawns, showZero: !1, className: nd.numberValue }),
                meta: { column: Vc[rc][r] },
            }),
            id.accessor('achievements', {
                id: nc,
                header: (e) => i.jsx(Oc, { name: nc, column: e.column }),
                sortingFn: (e, a) => e.getValue('achievements').length - a.getValue('achievements').length || s(e, a),
                cell: (e) => i.jsx(hc, { achievements: e.getValue() }),
                meta: { column: Vc[nc][r], className: Jc },
            }),
        ];
    },
    cd = 'Header_row_e61ae0d9',
    dd = 'Header_rowDivider_f54d9df6',
    md = 'Header_rowDividerImage_19f6e11',
    ud = 'Header_cell_70aa1da5';
function fd({ className: e }) {
    const { table: a } = he(),
        t = P();
    return i.jsxs(be.Header, {
        className: e,
        children: [
            i.jsx(ro, { classNames: { base: dd, image: md } }),
            g(a.getHeaderGroups(), (e, a) =>
                i.jsx(
                    be.Row,
                    {
                        className: cd,
                        children: g(e.headers, (e, s) => {
                            return i.jsx(
                                be.Cell,
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
                                    cell: { ...e, rowIndex: a, index: s, tablePart: ve.header },
                                    className: ud,
                                    children: !e.isPlaceholder && _(e.column.columnDef.header, e.getContext()),
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
const _d = 'SelectedRowTail_selectedRowTail_8abda9c8',
    pd = 'SelectedRowTail_selectedRowTail__hasWidth_6cb87e09',
    hd = 'SelectedRowTail_selectedRowVerticalLine_c502cc58',
    bd = 'SelectedRowTail_selectedRowTriangle_6f2b6bb3',
    vd = 'SelectedRowTail_rowDivider_8fbc881',
    gd = 'SelectedRowTail_rowDivider__bottom_4111cb99',
    xd = 'SelectedRowTail_rowDividerImage_d11f29d5';
function yd({ className: e, short: a }) {
    return i.jsxs('div', {
        className: l(_d, !a && pd, e),
        children: [
            i.jsx(ro, { classNames: { base: vd, image: xd } }),
            i.jsx(ro, { classNames: { base: l(vd, gd), image: xd } }),
            i.jsx('div', { className: hd }),
            i.jsx('div', { className: bd }),
        ],
    });
}
const Nd = 'personal',
    jd = 'personalSquad',
    wd = 'none',
    Id = o(function ({ row: e, team: a, rowIndex: t, scrollbarVisible: s }) {
        const { model: r, controls: n } = _s(),
            o = P(),
            c = Ce(
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
                if (m.account.username === e.original.account.username) return Nd;
                return ms(a, m.squadIndex, e.original.squadIndex) === cs ? jd : wd;
            })(),
            f = e.original.account.teamKiller,
            p = d?.team === a && d.username === e.original.account.username,
            h = Pe({ args: { databaseID: e.original.databaseId } });
        return i.jsxs(be.Row, {
            ...(u !== Nd && h),
            onMouseEnter: (e) =>
                o.play('mouse-enter', { target: 'team-efficiency:efficiency-table:body:row', original: e }),
            className: l(
                nd.tableBodyRow,
                p && nd.tableBodyRow__selected,
                u !== wd && nd[`tableBodyRow__${u}`],
                f && nd.tableBodyRow__teamKiller,
            ),
            onClick: c,
            children: [
                i.jsxs('div', {
                    className: nd.selectedOverlay,
                    children: [
                        i.jsx(ro, { classNames: { base: nd.selectedOverlayDivider, image: nd.selectedOverlayImage } }),
                        i.jsx(ro, {
                            classNames: {
                                base: l(nd.selectedOverlayDivider, nd.selectedOverlayDivider__bottom),
                                image: nd.selectedOverlayImage,
                            },
                        }),
                        i.jsx(yd, {
                            short: s && a === ls,
                            className: l(nd.selectedRowTail, nd[`selectedRowTail__${a}`]),
                        }),
                    ],
                }),
                i.jsx(ro, { classNames: { base: nd.rowDivider, image: nd.rowDividerImage } }),
                g(e.getVisibleCells(), (e, a) =>
                    i.jsx(
                        be.Cell,
                        {
                            cell: { ...e, rowIndex: t, index: a, tablePart: ve.body },
                            children: _(e.column.columnDef.cell, e.getContext()),
                        },
                        e.id,
                    ),
                ),
            ],
        });
    });
function Rd({ team: e }) {
    const { table: a } = he(),
        { api: t } = L(),
        s = Te(),
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
        i.jsxs(be.Body, {
            className: ad,
            children: [
                i.jsx(m.div, {
                    className: rd,
                    style: c,
                    children: i.jsx(M, {
                        classNames: { content: sd },
                        children: i.jsx('div', {
                            ref: n,
                            className: Zc,
                            children: g(a.getRowModel().rows, (a, t) =>
                                i.jsx(Id, { row: a, rowIndex: t, team: e, scrollbarVisible: l }, a.id),
                            ),
                        }),
                    }),
                }),
                i.jsx($, { classNames: { base: td } }),
            ],
        })
    );
}
const Sd = H('TeamEfficiencyTable', Yc, { variants: { team: { [ls]: Kc, [os]: qc } } }),
    Cd = {
        [Ke.Squad]: Jo,
        [Ke.Player]: Qo,
        [Ke.Rank]: ec,
        [Ke.Damage]: ac,
        [Ke.Frag]: tc,
        [Ke.Xp]: sc,
        [Ke.Respawns]: rc,
        [Ke.Medal]: nc,
    },
    Pd = o(({ team: e, data: a, className: t }) => {
        const { model: s, controls: n } = _s(),
            l = s.computes.personalInfo(),
            o = s.teamsStatistic.sorting.get(),
            c = r.useMemo(() => [{ id: Cd[o.column], desc: o.sortDirection === qe.Desc }], [o.column, o.sortDirection]),
            d = ge().breakpoint.name,
            m = r.useCallback(
                (e) => {
                    const a = (e instanceof Function ? e(c) : e)[0] ?? { id: ec, desc: !0 };
                    n.teamEfficiency.sort({
                        column: Object.keys(Cd).find((e) => Cd[e] === a.id) || Ke.Rank,
                        sortDirection: a.desc ? qe.Desc : qe.Asc,
                    });
                },
                [c, n.teamEfficiency],
            ),
            u = r.useMemo(() => od({ team: e, personalInfo: l, breakpointName: d }), [e, d, l]);
        return (
            p(De(d), `Such breakpoint ${d} is not supported`),
            i.jsx(xe, {
                columns: u,
                data: a,
                enableMultiRowSelection: !1,
                enableSortingRemoval: !1,
                sorting: c,
                onSortingChange: m,
                getRowId: (e) => e.account.username,
                enableSorting: !0,
                children: i.jsx(Sd, {
                    team: e,
                    className: t,
                    children: i.jsxs(
                        be,
                        {
                            className: ed,
                            children: [i.jsx(fd, { className: Uc }), i.jsx(G, { children: i.jsx(Rd, { team: e }) })],
                        },
                        d,
                    ),
                }),
            })
        );
    }),
    Td = 'TeamEfficiency_wrapper_a2a49ce',
    Dd = 'TeamEfficiency_table_5763cf17',
    Ad = 'TeamEfficiency_table__hidden_e8864815',
    Bd = 'TeamEfficiency_details_f087bb8e',
    Vd = 'TeamEfficiency_details__visible_eaf91b76',
    kd = H('TeamEfficiency', 'TeamEfficiency_ab8dfa62'),
    Ed = o(function ({ className: e }) {
        const { model: a } = _s(),
            t = a.teamsStatistic.allies.get(),
            s = a.teamsStatistic.enemies.get(),
            r = a.teamsStatistic.selectedRow.get();
        return i.jsx(kd, {
            className: e,
            children: i.jsxs('div', {
                className: Td,
                children: [
                    i.jsx(Yo, { team: os, className: l(Bd, r?.team === os && Vd) }),
                    i.jsx(Pd, { data: t, team: ls, className: l(Dd, r?.team === os && Ad) }),
                    i.jsx(Yo, { team: ls, className: l(Bd, r?.team === ls && Vd) }),
                    i.jsx(Pd, { data: s, team: os, className: l(Dd, r?.team === ls && Ad) }),
                ],
            }),
        });
    }),
    zd = {
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
    Hd = H('PostBattle', zd.base),
    Od = H('PostBattleNavigation', zd.navigation);
function Fd() {
    const { active: e } = Ae();
    return i.jsxs('div', {
        className: zd[`content__${e}`],
        children: [
            i.jsx(to, { className: l(zd.tab, zd.tab__overview) }),
            i.jsx(Ed, { className: l(zd.tab, zd.tab__teamScore) }),
            i.jsx(Di, { className: l(zd.tab, zd.tab__financialReport) }),
        ],
    });
}
const Xd = o(function () {
    const e = j.resolve('strings'),
        { battleInfoRef: a, navigationRef: t, completedSteps: s } = Ns(),
        [r] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: t })),
        [n] = u(() => ({ from: { opacity: 0 }, ref: a })),
        { model: o, controls: c } = _s(),
        d = o.battleInfo.get(),
        { active: f } = Ae();
    return (
        Be(Ve.ESCAPE, c.close),
        ke(() => {
            function e(e) {
                e.altKey || e.shiftKey || e.ctrlKey || Ee.tooltip.hideAll();
            }
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }),
        i.jsxs(Hd, {
            className: l(zd.base, zd[`base__${f}`]),
            children: [
                i.jsx(Fd, {}),
                i.jsx(m.div, {
                    style: r,
                    children: i.jsx(Od, {
                        className: !s.has(bs) && zd.navigation__disabled,
                        children: i.jsxs(ze.Switcher, {
                            className: zd.switcher,
                            children: [
                                i.jsx(ze.Tab, {
                                    tabId: Ze.overview,
                                    children: k.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.battleResults'),
                                    ),
                                }),
                                i.jsx(ze.Tab, {
                                    tabId: Ze.teamScore,
                                    children: k.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.teamEfficiency'),
                                    ),
                                }),
                                i.jsx(ze.Tab, {
                                    tabId: Ze.financialReport,
                                    children: k.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.financialReport'),
                                    ),
                                }),
                            ],
                        }),
                    }),
                }),
                d &&
                    i.jsx(m.div, {
                        className: zd.info,
                        style: n,
                        children: i.jsxs(Ss, {
                            children: [
                                i.jsx(Ss.Arena, {
                                    arenaName: d.arenaName,
                                    scenario: d.scenario,
                                    finishReason: d.finishReason,
                                }),
                                i.jsx(Ss.StartTime, {
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
function Gd() {
    const e = He(),
        { size: a } = ee({ size: Oe.small }, { large: { size: Oe.medium }, extraLarge: { size: Oe.large } });
    return i.jsx(ze, {
        theme: 'primary',
        size: a,
        active: Qe(e.location),
        onActiveChange: (a) => {
            a in Ze ? e.push(Je[a]) : console.error(`Invalid tab ID: ${a}`);
        },
        children: i.jsx(js, { children: i.jsx(Xd, {}) }),
    });
}
const $d = Fe({
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
Le(
    new Xe()
        .add(fs)
        .addWithProps(Ge, { soundsOverrides: $d })
        .addWithProps($e, { context: 'model.router' })
        .render(i.jsx(Gd, {})),
)
    .then(() => Me(document.getElementById('root')))
    .then(() => We());
