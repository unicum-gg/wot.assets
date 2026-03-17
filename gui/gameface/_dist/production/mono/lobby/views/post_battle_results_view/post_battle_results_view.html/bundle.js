import {
    $ as e,
    a0 as a,
    a1 as t,
    a2 as s,
    r,
    a3 as l,
    j as n,
    f as i,
    S as o,
    a4 as c,
    a5 as d,
    Z as m,
    Y as u,
    a6 as f,
    a7 as _,
    a8 as p,
    a9 as h,
} from '../../../chunks/vendor.js';
import {
    s as b,
    a7 as v,
    bq as g,
    an as x,
    E as y,
    cw as N,
    j,
    cx as w,
    o as I,
    x as S,
    i as P,
    f as C,
    K as D,
    a3 as T,
    cy as A,
    cz as V,
    a8 as B,
    bM as k,
    bO as E,
    aq as z,
    cA as H,
    a9 as O,
    ab as F,
    bD as G,
    aj as X,
    ah as $,
    H as L,
    F as W,
    a2 as M,
    a6 as K,
    P as q,
    aS as U,
    a5 as Z,
    I as Y,
    aR as J,
    aO as Q,
    a_ as ee,
    aY as ae,
    b2 as te,
    cB as se,
    _ as re,
    cC as le,
    af as ne,
    cD as ie,
    cE as oe,
    m as ce,
    c7 as de,
    Z as me,
    b$ as ue,
    cF as fe,
    bs as _e,
    aa as pe,
    y as he,
    cG as be,
    cH as ve,
    cI as ge,
    ax as xe,
    cJ as ye,
    al as Ne,
    ao as je,
    cK as we,
    T as Ie,
    bR as Se,
    cL as Re,
    bf as Pe,
    bh as Ce,
    bo as De,
    cM as Te,
    O as Ae,
    cN as Ve,
    cO as Be,
    aw as ke,
    av as Ee,
    be as ze,
    b9 as He,
    ck as Oe,
    ac as Fe,
    cm as Ge,
    cP as Xe,
    bB as $e,
    c3 as Le,
    ct as We,
    cu as Me,
    cQ as Ke,
    cR as qe,
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
const Je = { overview: 'overview', teamScore: 'teamScore', financialReport: 'financialReport' },
    Qe = Object.values(Je),
    ea = {
        [Je.overview]: '/fl_battleResults/overview',
        [Je.teamScore]: '/fl_battleResults/teamScore',
        [Je.financialReport]: '/fl_battleResults/financialReport',
    };
function aa(e) {
    const a = Qe.find((a) => ea[a] === e);
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
    Ta = 'militaryManeuversFreeXP',
    Aa = 'eventFreeXP',
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
    $a = 'referralBonusCredits',
    La = 'wotPlusBonusCredits',
    Wa = 'wotPlusProBoostCredits',
    Ma = 'friendlyFirePenaltyCredits',
    Ka = 'friendlyFireCompensationCredits',
    qa = 'piggyBankCredits',
    Ua = 'autoRepairCredits',
    Za = 'autoLoadCredits',
    Ya = 'autoEquipCredits',
    Ja = 'intermediateTotalCredits',
    Qa = 'totalCredits',
    et = 'goldEventPayments',
    at = 'goldPiggyBank',
    tt = 'intermediateTotalGold',
    st = 'totalGold',
    rt = 'aogasFactor',
    lt = 'deserterViolation',
    nt = 'afkViolation',
    it = 'suicideViolation',
    ot = new Set([ua, ga, ya, Na, ba]),
    ct = new Set([Ta]),
    dt = new Set([Ea, za, Ha, Oa, Ga, $a, Fa, La, Wa, lt, it, nt, Ma, Ka, rt, Ua, Za, Ya]),
    mt = {
        [ma]: Sa,
        [pa]: Ca,
        [nt]: nt,
        [rt]: rt,
        [ha]: Da,
        [lt]: lt,
        [va]: Aa,
        [_a]: Pa,
        [fa]: Ra,
        [da]: Ia,
        [xa]: Va,
        [it]: it,
        [wa]: ka,
        [ja]: Ba,
        wotPlusProBoostXP: 'wotPlusProBoostFreeXP',
    },
    ut = { [Xa]: et, [Ja]: tt, [qa]: at, [Qa]: st },
    ft = [na, ia, oa, ca],
    _t = [Ea, za, Ha, Oa, Fa, Ga, Xa, et, $a, La, Wa, lt, it, nt, Ma, Ka, rt, Ja, tt, Ua, Za, Ya, Qa, st, qa, at],
    pt = new Set([ca, da, Ia, wa, ka, Ea, Ja, tt, Ua, Za, Ya, Qa, st, qa, at]),
    ht = new Set([Qa, st, tt, Ja]),
    bt = 'multiplier',
    vt = 'firstWinMultiplier',
    gt = 'fractionalMultiplier',
    xt = 'percent',
    yt = 'plus',
    Nt = {
        [fa]: bt,
        [Ra]: bt,
        [_a]: vt,
        [Pa]: vt,
        [pa]: bt,
        [Ca]: bt,
        [rt]: gt,
        [lt]: xt,
        [it]: xt,
        [nt]: xt,
        [qa]: yt,
        [at]: yt,
    };
function jt(e) {
    const a = Number(e.trim());
    return Number.isNaN(a)
        ? (console.error(`Invalid referral factor: "${e}" is not a number.`), 0)
        : Math.round(100 * a);
}
function wt(e) {
    const a = Number(e.trim());
    return Number.isNaN(a) ? (console.error(`Invalid percent bonus: "${a}" is not a number.`), 0) : a;
}
function It(e) {
    return pt.has(e.paramName);
}
function St(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.hasAogasFine);
}
function Rt(e) {
    var a;
    return 'True' === (null == (a = null == e ? void 0 : e.recordsItemsDetails) ? void 0 : a.isEnabled);
}
const Pt = { [da]: It, [Ia]: It, [wa]: It, [ka]: It, [rt]: St, [ja]: Rt, [Ba]: Rt },
    Ct = {
        [Ea]: It,
        [Ja]: It,
        [tt]: It,
        [Ua]: It,
        [Za]: It,
        [Ya]: It,
        [Qa]: It,
        [st]: It,
        [rt]: St,
        [La]: Rt,
        [qa]: It,
    };
function Dt(e) {
    return !1 !== ht.has(e.paramName) && 0 === e.standard.gold && 0 === e.premium.gold;
}
const Tt = { [Ja]: (e) => !1 === Dt(e), [Qa]: (e) => !1 === Dt(e), [qa]: (e, a) => a },
    At = { [ta]: 'library.xp', [sa]: 'library.freeXp', [ra]: 'library.credits', [la]: 'library.gold' },
    Vt = [rt, lt, nt, it];
function Bt(e) {
    return e === ta ? 'library.x2_combatExp' : 'library.x2_combatFreeExp';
}
const kt = {
    [fa]: (e) => 'library.x2_combatExp',
    [Ra]: (e) => 'library.x2_combatExp',
    [_a]: Bt,
    [Pa]: Bt,
    [pa]: Bt,
    [Ca]: Bt,
};
function Et(e, a) {
    if (void 0 === a || Vt.includes(a)) return;
    const t = kt[a];
    return t ? t(e) : At[e];
}
var zt = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
        zt || {},
    ),
    Ht = ((e) => (
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
    ))(Ht || {});
function Ot(e) {
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
const Ft = [wa, Ja];
function Gt(e, a) {
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
    return { paramName: n, type: l, visibleIfZero: Ft.includes(n) || 'True' === t.isAvailable, value: c };
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
function $t(e) {
    return {
        labelKey: e.labelKey,
        paramValueType: e.paramValueType,
        value: y((null == e ? void 0 : e.value) ?? [], (e) => e),
    };
}
function Lt(e) {
    return {
        ...$t({ label: e.label, labelKey: e.labelKey, paramValueType: e.paramValueType, value: y(e.value, (e) => e) }),
        details: y(e.details, (e) => $t(e)),
    };
}
function Wt(e) {
    return {
        isGeneralInfo: e.isGeneralInfo,
        objectivesReached: e.objectivesReached,
        objectivesDestroyed: e.objectivesDestroyed,
        zoneCaptured: e.zoneCaptured,
        detailedStatistics: y(e.detailedStatistics, Lt),
        vehicle: e.vehicle.longName ? { ...w(e.vehicle), longName: e.vehicle.longName } : null,
    };
}
function Mt(e) {
    var a, t;
    const s = (null == (a = g(e.vehiclesStats, (e) => e.isGeneralInfo)) ? void 0 : a.detailedStatistics) ?? [],
        r = null == (t = g(s, (e) => e.labelKey === Ht.TeamHitsDamage)) ? void 0 : t.value,
        l = void 0 !== r ? x(r, 0) : 0,
        n = e.efficiencyValues.kills - l;
    return {
        personal: e.isPersonal,
        squadIndex: e.squadIndex,
        rank: e.rank,
        respawns: e.respawns,
        achievements: y(e.achievements, Xt),
        account: N(e.userNames),
        vehicles: y(e.vehiclesStats, Wt),
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
const Kt = {
    killed: 0,
    spotted: 0,
    criticalDamage: 0,
    damageDealt: { value: 0, count: 0 },
    damageAssisted: 0,
    damageAssistedStun: { value: 0, count: 0 },
    damageBlockedByArmor: { value: 0, count: 0 },
};
const qt = I.resolve('strings'),
    Ut = { rank: 'rank', right: 'right', left: 'left', other: 'other' },
    Zt = [Ut.rank, Ut.right, Ut.left, Ut.other];
function Yt(e) {
    return e.groupID === Ut.rank
        ? Ut.rank
        : e.groupID === Ut.right
          ? Ut.right
          : e.groupID === Ut.left
            ? Ut.left
            : (console.error(`Achievement ${e.name} with a group ${e.groupID} is not detected`), Ut.other);
}
function Jt(e) {
    return S(e, (e, a) => {
        const t = Yt(e),
            s = Yt(a),
            r = Zt.indexOf(t),
            l = Zt.indexOf(s);
        return t !== s
            ? r - l
            : (function (e, a) {
                  const t = qt.readOrEmpty(`achievements.${e.name}`),
                      s = qt.readOrEmpty(`achievements.${a.name}`);
                  return t.localeCompare(s);
              })(e, a);
    });
}
const Qt = 'default',
    es = 'hover',
    as = 'extinct';
function ts(e, a) {
    return void 0 === a ? Qt : a === e ? es : as;
}
const ss = 'rank',
    rs = 'others';
const ls = 'allies',
    ns = 'enemies',
    is = 'personal',
    os = 'alien';
function cs(e, a, t) {
    return 0 === t ? null : a === t && e === ls ? is : os;
}
function ds({ anonymizer: e, personal: a, platoonType: t }) {
    return !(a || !e) && (t === os || null === t);
}
const [ms, us] = P()(
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
                    battleInfo: a.transform(Ot, 'battleInfo'),
                    allPlayersDictionary: t.box({}),
                    personalEfficiency: {
                        opened: t.box(!1),
                        achievements: a.transform((e) => Jt(y(e, Xt)), 'achievements'),
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
                (l.teamsStatistic.allies.set(
                    y(r.teamsStatistic.allies.get(), (a) => {
                        const t = Mt(a);
                        return ((e[t.account.username] = t), t);
                    }),
                ),
                    l.teamsStatistic.enemies.set(
                        y(r.teamsStatistic.enemies.get(), (a) => {
                            const t = Mt(a);
                            return ((e[t.account.username] = t), t);
                        }),
                    ));
                const a = l.allPlayersDictionary.get();
                l.allPlayersDictionary.set({ ...a, ...e });
            }),
                Ye(s)(() => {
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
                            const s = g(a, (e) => e.paramName === Ja),
                                r = g(t, (e) => e.paramName === wa),
                                l = [];
                            return (s && l.push(Gt(s, e)), r && l.push(Gt(r, e)), l);
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
                    const a = (e.team === ls ? l.teamsStatistic.allies : l.teamsStatistic.enemies).get();
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
                            if (((r = s), j.structural(r, Kt))) return a;
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
    fs = { initial: 'initial', first: 'first', second: 'second', third: 'third' },
    _s = A.cubicBezier(0.33, 0, 0.25, 1),
    ps = 400,
    hs = r.createContext(null);
function bs() {
    const e = r.useContext(hs);
    if (null === e)
        throw new Error('You can use the animation context hooks only with the AnimationProvider component');
    return e;
}
function vs({ children: e }) {
    const [a, t] = r.useState(fs.initial),
        [s, i] = r.useState(new Set()),
        o = D(),
        c = T(),
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
            case fs.initial:
                return void t(fs.first);
            case fs.first:
                return (
                    c.play('showBattleResult', { target: 'animation-context' }),
                    d.start({ y: '0', opacity: 1, config: { duration: ps, easing: _s } }),
                    void m.start({
                        opacity: 1,
                        y: '0',
                        config: { duration: ps, easing: _s },
                        onRest: () => {
                            (t(fs.second), i((e) => V(e, fs.first)));
                        },
                    })
                );
            case fs.second:
                return (
                    u.start({
                        opacity: 1,
                        y: '0',
                        config: { duration: ps, easing: _s },
                        onRest: () => {
                            i((e) => V(e, fs.second));
                        },
                    }),
                    void o.run(() => {
                        (t(fs.third), o.clear());
                    }, 280)
                );
            case fs.third:
                (c.play('exitResult', { target: 'post-battle' }),
                    _.start({ opacity: 1, config: { duration: ps, easing: _s } }),
                    f.start({
                        opacity: 1,
                        config: { duration: ps, easing: _s },
                        onRest: () => {
                            i((e) => V(e, fs.third));
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
    return n.jsx(hs.Provider, { value: h, children: e });
}
const gs = 'BattleInfo_d5226211',
    xs = 'BattleInfo_group_962f81f6';
const ys = (e, a) => (e > 0 ? (a > 0 ? 'minutesAndSeconds' : 'minutesOnly') : 'secondsOnly'),
    Ns = r.forwardRef(function (e, a) {
        return n.jsx('div', { ...e, 'data-name': 'BattleInfo', ref: a, className: i(gs, e.className) });
    });
((Ns.Arena = function ({ arenaName: e, scenario: a, finishReason: t, className: s }) {
    return n.jsx(B, {
        path: 'fl_post_battle_results.battleInfo.arena',
        params: { arenaName: e, scenario: a, finishReason: t },
        className: i(xs, s),
    });
}),
    (Ns.StartTime = ({ battleStartTime: e, battleDuration: a, className: t }) => {
        const [s, r] = k(E(a), ['m', 's']);
        return n.jsx(B, {
            path: 'fl_post_battle_results.battleInfo.time',
            params: {
                date: z.formatDateTime(H.ShortDate, e),
                time: z.formatDateTime(H.ShortTime, e),
                duration: n.jsx(B, {
                    path: `fl_post_battle_results.battleInfo.timeLeft.${ys(Number(s), Number(r))}`,
                    params: { minutes: s, seconds: r },
                }),
            },
            className: i(xs, t),
        });
    }));
const js = 'Divider_80a19f4b';
function ws({ classNames: e }) {
    return n.jsx('div', {
        className: i(js, null == e ? void 0 : e.base),
        children: n.jsx(O, {
            className: null == e ? void 0 : e.image,
            width: '100%',
            height: '100%',
            path: 'post_battle.row_divider',
            fit: 'cover',
        }),
    });
}
const Is = 'Header_content_b9e0be90',
    Ss = 'Header_title_91e5448a',
    Rs = 'Header_divider_eb019c6',
    Ps = 'Header_dividerImage_19f6e11',
    Cs = F('Header', 'Header_70aa1da5'),
    Ds = r.forwardRef(({ title: e, children: a, classNames: t, ...s }, r) => {
        const l = I.resolve('strings');
        return n.jsxs(Cs, {
            ...s,
            ref: r,
            children: [
                n.jsxs('div', {
                    className: i(Is, null == t ? void 0 : t.content),
                    children: [
                        n.jsx('div', {
                            className: i(Ss, null == t ? void 0 : t.title),
                            children: z.toUpperCase(l.readOrEmpty(e)),
                        }),
                        a,
                    ],
                }),
                n.jsx(ws, { classNames: { base: i(Rs, null == t ? void 0 : t.divider), image: Ps } }),
            ],
        });
    }),
    Ts = 'playerRankXP',
    As = { ...mt, [Ts]: Ts },
    Vs = [da, Ia, Ts, ga, xa, Va, ya, Na, rt, ja, Ba, lt, it, nt, wa, ka];
function Bs(e, a) {
    return Vs.indexOf(e.paramName) - Vs.indexOf(a.paramName);
}
function ks(e, a) {
    return _t.indexOf(e.paramName) - _t.indexOf(a.paramName);
}
function Es(e, a) {
    return ft.indexOf(e.paramName) - ft.indexOf(a.paramName);
}
function zs(e) {
    return {
        paramName: e.paramName,
        currencyType: e.currencyType,
        baseValue: e.baseValue,
        premiumValue: e.premiumValue,
        recordsItemsDetails: v(e.detailedItemRecords, (e, a) => ((e[a.itemName] = a.itemValue), e), {}),
    };
}
function Hs(e, a) {
    const t = [],
        s = [];
    for (const r of e) a(r) ? t.push(r) : s.push(r);
    return [t, s];
}
function Os(e, a) {
    const t = y(e.earned, zs),
        s = y(e.expenses, zs),
        r = y(e.total, zs),
        l = [Ja, tt],
        n = [qa, at],
        [i, o] = Hs(r, (e) => l.includes(e.paramName)),
        [c, d] = Hs([...t, ...i], (e) => n.includes(e.paramName));
    return {
        records: [...d, ...s].sort(a),
        total: ((m = [...o, ...c]),
        m.filter((e) => {
            const a = Boolean(e.premiumValue || e.baseValue),
                t = pt.has(e.paramName);
            return a || t;
        })).sort(a),
    };
    var m;
}
const Fs = (e) => e in Nt;
function Gs({ xp: e, freeXp: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    b('string' == typeof t, 'xp or freeXp paramName is not provided');
    const s = Fs(t) ? Nt[t] : void 0,
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
function Xs({ credits: e, gold: a }) {
    const t = (null == e ? void 0 : e.paramName) || (null == a ? void 0 : a.paramName);
    b('string' == typeof t, 'credits or gold paramName is not provided');
    const s = Fs(t) ? Nt[t] : void 0,
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
const $s = (e) => e in As;
function Ls(e, a) {
    const t = e.paramName;
    return (b($s(t), `No analogue for ${t} in free xp parameter names`), a.find((e) => As[t] === e.paramName));
}
const Ws = (e) => e in ut;
function Ms(e, a) {
    const t = e.paramName;
    return (b(Ws(t), `No analogue for ${t} in gold parameter names`), a.find((e) => ut[t] === e.paramName));
}
function Ks(e, a) {
    const t = (function (e, a) {
        return [
            ...G(
                a,
                (e) => ct.has(e.paramName),
                (e) => Gs({ freeXp: e }),
            ),
            ...y(e, (e) => (ot.has(e.paramName) ? Gs({ xp: e }) : Gs({ xp: e, freeXp: Ls(e, a) }))),
        ];
    })(e, a);
    return t
        .filter((e) => {
            const a = Pt[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.freeXp || e.premium.xp || e.standard.freeXp || e.standard.xp);
        })
        .sort(Bs);
}
function qs(e, a) {
    const t = (function (e, a) {
        return y(e, (e) => (dt.has(e.paramName) ? Xs({ credits: e }) : Xs({ credits: e, gold: Ms(e, a) })));
    })(e, a);
    return t
        .filter((e) => {
            const a = Ct[e.paramName];
            return 'function' == typeof a
                ? a(e)
                : Boolean(e.premium.credits || e.premium.gold || e.standard.credits || e.standard.gold);
        })
        .sort(ks);
}
function Us(e) {
    return ((a = e),
    a.filter((e) => {
        const a = Boolean(e.baseValue || e.premiumValue),
            t = pt.has(e.paramName);
        return a || t;
    })).sort(Es);
    var a;
}
function Zs({ xp: e, freeXp: a }) {
    return (function (e, a) {
        return { records: Ks(e.records, a.records), total: Ks(e.total, a.total) };
    })(
        Os({ earned: e.earned, expenses: e.expenses, total: e.total }),
        Os({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
function Ys({ credits: e, gold: a }) {
    return (function (e, a) {
        return { records: qs(e.records, a.records), total: qs(e.total, a.total) };
    })(
        Os({ earned: e.earned, expenses: e.expenses, total: e.total }),
        Os({ earned: a.earned, expenses: a.expenses, total: a.total }),
    );
}
const [Js, Qs] = P()(
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
                        Zs({
                            xp: { earned: e.xp.earned, expenses: e.xp.expenses, total: e.xp.total },
                            freeXp: { earned: e.freeXp.earned, expenses: e.freeXp.expenses, total: e.freeXp.total },
                        })
                    );
                }),
                l = C.shallow(() => {
                    const e = s();
                    return (
                        e &&
                        Ys({
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
                            const s = Os({ earned: e, expenses: a, total: t });
                            return { records: Us(s.records), total: Us(s.total) };
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
    er = 'ListItem_received_ffdc3010',
    ar = 'ListItem_separator_71797768',
    tr = 'ListItem_label_4ab3c391',
    sr = 'ListItem_label__withIcon_c2381aa',
    rr = 'ListItem_labelIcon_acb0da4',
    lr = F('ListItem', 'ListItem_bcdaabbd'),
    nr = r.forwardRef(({ labelKey: e, children: a, classNames: t, params: s, labelIconPath: r, ...l }, o) => {
        const c = I.resolve('images');
        return n.jsxs(lr, {
            ...l,
            ref: o,
            'data-test-id': `${e}`,
            children: [
                n.jsxs('div', {
                    className: i(tr, void 0 !== r && sr, null == t ? void 0 : t.label),
                    children: [
                        void 0 !== r &&
                            n.jsx('div', {
                                style: { backgroundImage: `url(${c.readOrEmpty(r)})` },
                                className: i(rr, null == t ? void 0 : t.icon),
                            }),
                        n.jsx(B, { upgradeLegacy: !0, path: e, params: s }),
                    ],
                }),
                n.jsxs('div', { className: er, children: [n.jsx('div', { className: ar }), a] }),
            ],
        });
    }),
    ir = 'Item_currencyValue_81f5b9fb',
    or = 'Item_currencyValue__total_a7596c8e',
    cr = 'Item_currencyValue__negative_5e98369f',
    dr = 'Item_label_5d6964d6',
    mr = {
        [na]: 'battle_results.details.calculations.crystal.total',
        [ia]: 'battle_results.details.calculations.crystal.events',
        [oa]: 'battle_results.details.calculations.autoBoosters',
        [ca]: 'battle_results.details.calculations.total',
    },
    ur = ({ record: e, total: a, ...t }) => {
        const { paramName: s, baseValue: r } = e;
        return s in mr
            ? n.jsx(nr, {
                  ...t,
                  labelKey: mr[s],
                  classNames: { label: dr, ...t.classNames },
                  children: n.jsx(X, {
                      reverse: !0,
                      type: 'crystal',
                      size: $.small,
                      children: n.jsx('div', {
                          className: i(ir, r < 0 && cr, a && or),
                          children: z.formatNumber('integral', r),
                      }),
                  }),
              })
            : (console.error(`Parameter name "${s}" is not valid for bonds`), null);
    },
    fr = 'IncomeStatement_item_48b34a63',
    _r = F('BondsIncomeStatement'),
    pr = o(
        r.forwardRef((e, a) => {
            const { model: t } = Qs(),
                s = t.computes.crystals();
            return n.jsx(_r, {
                ...e,
                ref: a,
                children: s.records.map((e) => n.jsx(ur, { record: e, className: fr }, e.paramName)),
            });
        }),
    ),
    hr = 'Total_item_a8580361',
    br = 'Total_divider_1de1ca28',
    vr = 'Total_dividerImage_ab06168d',
    gr = F('BondsTotal', 'Total_120fb0c4'),
    xr = o(
        r.forwardRef((e, a) => {
            const { model: t } = Qs(),
                s = t.computes.crystals();
            return n.jsxs(gr, {
                ...e,
                ref: a,
                children: [
                    n.jsx(ws, { classNames: { base: br, image: vr } }),
                    s.total.map((e) => n.jsx(ur, { total: !0, record: e, className: hr }, e.paramName)),
                ],
            });
        }),
    ),
    yr = r.forwardRef((e, a) => n.jsx(Ds, { ...e, title: 'battle_results.details.crystal', ref: a })),
    Nr = F('Bonds');
((Nr.Header = yr), (Nr.Item = ur), (Nr.Total = xr), (Nr.IncomeStatement = pr));
const jr = 'Header_cbd845ec',
    wr = 'Header_content_a63fb46c',
    Ir = 'Header_title_7b852a7',
    Sr = 'Header_title__active_e5dd0f77',
    Rr = 'Header_title__premium_2c23921f',
    Pr = 'Header_icon_3b4dc587',
    Cr = o(
        r.forwardRef(({ className: e, ...a }, t) => {
            const { model: s } = Qs(),
                r = s.hasAnyPremium.get();
            return n.jsx(Ds, {
                ...a,
                ref: t,
                className: i(jr, e),
                title: 'battle_results.details.credits',
                children: n.jsxs('div', {
                    className: wr,
                    children: [
                        n.jsx('div', {
                            className: i(Ir, !r && Sr),
                            children: n.jsx(B, { path: 'battle_results.common.details.noPremTitle' }),
                        }),
                        n.jsxs('div', {
                            className: i(Ir, r && Sr, Rr),
                            children: [
                                n.jsx('div', {
                                    className: Pr,
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
    Dr = (e) => {
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
    Tr = 'IncomeStatement_c4136bc5',
    Ar = 'IncomeStatement_verticalBar_5fb90511',
    Vr = 'IncomeStatement_scrollWrapper_ce2dde41',
    Br = 'IncomeStatement_scrollContent_72ffb2ee',
    kr = 'IncomeStatement_scrollContent__initialized_ce1144d0',
    Er = F('CreditsIncomeStatement'),
    zr = ({ children: e }) => {
        const a = M(),
            t = Dr(a.api);
        return n.jsx(K, { classNames: { wrapper: Vr, content: i(Br, t && kr) }, children: e });
    },
    Hr = r.forwardRef(({ children: e, className: a, scrollable: t, ...s }, r) =>
        n.jsx(Er, {
            className: i(Tr, a),
            ...s,
            ref: r,
            children: t
                ? n.jsxs(L, { children: [n.jsx(zr, { children: e }), n.jsx(W, { classNames: { base: Ar } })] })
                : e,
        }),
    ),
    Or = 'Record_420804f3',
    Fr = 'Record_value_4d088deb',
    Gr = 'Record_value__decreasing_8cff45fa',
    Xr = ({ formatter: e, value: a, modifier: t, currency: s, classNames: r, iconPath: l }) => {
        if (void 0 === a) return null;
        const o = t === gt || a < 0;
        return n.jsxs('div', {
            className: i(Or, null == r ? void 0 : r.base),
            children: [
                n.jsxs('div', {
                    className: i(Fr, o && Gr, null == r ? void 0 : r.value),
                    'data-test-id': `${s}`,
                    children: [
                        c(t)
                            .with(vt, () => n.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(bt, () => n.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(gt, () => n.jsx(B, { path: 'common.multiplierSmall' }))
                            .with(yt, () => n.jsx(B, { path: 'common.plus' }))
                            .otherwise(() => null),
                        e(a, s),
                        t === xt && n.jsx(B, { path: 'common.common.percent' }),
                    ],
                }),
                l && n.jsx(O, { width: 24, height: 24, path: l }),
            ],
        });
    },
    $r = 'RecordGroup_65a30ced',
    Lr = 'RecordGroup_base__inactive_5fd9f274',
    Wr = 'RecordGroup_record_5fd9f274',
    Mr = 'RecordGroup_record__extinguished_7fdfcea',
    Kr = 'RecordGroup_record__first_36c2aa71',
    qr = 'RecordGroup_separator_9f211d97',
    Ur = 'RecordGroup_separatorBackground_8a447834',
    Zr = 'RecordGroup_value_9253748c',
    Yr = 'RecordGroup_value__total_126d88a1',
    Jr = 'RecordGroup_value__gold_d7bd74ba';
function Qr({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case rt:
            return !1;
        case La:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const el = ({ credits: e, gold: a, modifier: t, inactive: s = !1, total: r, paramName: l, wotPlusActive: o }) => {
        function c(e, a) {
            return l === rt ? z.formatReal('fractional', e) : z.formatNumber(a === la ? 'gold' : 'integral', e);
        }
        return n.jsxs('div', {
            className: i($r, s && Lr),
            children: [
                n.jsx('div', {
                    className: i(Wr, Kr, Qr({ paramName: l, wotPlusActive: o, value: e }) && Mr),
                    children: n.jsx(Xr, {
                        formatter: c,
                        value: e,
                        currency: ra,
                        modifier: t,
                        classNames: { value: i(Zr, r && Yr) },
                        iconPath: Et(ra, l),
                    }),
                }),
                void 0 !== a && n.jsx('div', { className: qr, children: n.jsx('div', { className: Ur }) }),
                n.jsx('div', {
                    className: i(Wr, 0 === a && Mr),
                    children: n.jsx(Xr, {
                        value: a,
                        currency: la,
                        modifier: t,
                        classNames: { value: i(Zr, Jr, r && Yr) },
                        formatter: c,
                        iconPath: Et(la, l),
                    }),
                }),
            ],
        });
    },
    al = 'Item_groups_a1f0c2a5',
    tl = 'Item_label_7521a1d4',
    sl = 'Item_label__gold_49ec59ab',
    rl = {
        [Ea]: 'title.base',
        [za]: 'squadBonus',
        [Ha]: 'noPenalty',
        [Oa]: 'boosters',
        [Ga]: 'battlePayments',
        [Xa]: 'event',
        [et]: 'event',
        [$a]: 'referralBonus.fullLabel',
        [La]: 'wotPlusBonus',
        [lt]: 'fairPlayViolation.deserter',
        [it]: 'fairPlayViolation.suicide',
        [nt]: 'fairPlayViolation.afk',
        [Ma]: 'friendlyFirePenalty',
        [Ka]: 'friendlyFireCompensation',
        [rt]: 'aogasFactor',
        [Ja]: 'intermediateTotal',
        [tt]: 'intermediateTotal',
        [Ua]: 'autoRepair',
        [Za]: 'autoLoad',
        [Ya]: 'autoEquip',
        [Qa]: 'total',
        [st]: 'total',
        [qa]: 'piggyBankInfo',
        [at]: 'piggyBankInfo',
        [Fa]: 'petCredits.fullLabel',
    },
    ll = { [La]: 'subscription.wot_plus_32x32' },
    nl = o(({ record: e, total: a, ...t }) => {
        const { model: s } = Qs(),
            r = s.hasAnyPremium.get(),
            l = s.hasWotPlus.get(),
            { paramName: o, premium: c, standard: d, modifier: m, recordsItemsDetails: u } = e;
        if (!(o in rl)) return null;
        const f = null == u ? void 0 : u.referralFactor,
            _ = null == u ? void 0 : u.bonusFactor,
            p = rl[o],
            h = Tt[Qa](e, l);
        return n.jsx(nr, {
            ...t,
            labelIconPath: ll[o],
            labelKey: `battle_results.details.calculations.${p}`,
            classNames: { label: i(tl, o === La && sl) },
            params: { ...(f && { bonusFactor: jt(f) }), ...(_ && { bonusFactor: wt(_) }) },
            children: n.jsxs('div', {
                className: al,
                children: [
                    n.jsx(el, {
                        paramName: o,
                        credits: d.credits,
                        gold: h ? d.gold : void 0,
                        modifier: m,
                        inactive: r,
                        total: a,
                        wotPlusActive: l,
                    }),
                    n.jsx(el, {
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
    il = 'IncomeStatement_560dd244',
    ol = 'IncomeStatement_base__scroll_fb9f1475',
    cl = 'IncomeStatement_item_48b34a63',
    dl = o(
        r.forwardRef(({ className: e, scrollable: a, ...t }, s) => {
            const { model: r } = Qs(),
                l = r.computes.credits();
            return n.jsx(Hr, {
                ...t,
                ref: s,
                className: i(il, a && ol, e),
                scrollable: a,
                children: y(l.records, (e) => n.jsx(nl, { record: e, className: cl }, e.paramName)),
            });
        }),
    ),
    ml = 'Total_item_de53c8b0',
    ul = 'Total_divider_1de1ca28',
    fl = 'Total_dividerImage_ab06168d',
    _l = F('CreditsTotal', 'Total_19236d49'),
    pl = o(
        r.forwardRef((e, a) => {
            const { model: t } = Qs(),
                s = t.computes.credits();
            return n.jsxs(_l, {
                ...e,
                ref: a,
                children: [
                    n.jsx(ws, { classNames: { base: ul, image: fl } }),
                    s.total.map((e) => n.jsx(nl, { record: e, className: ml, total: !0 }, e.paramName)),
                ],
            });
        }),
    ),
    hl = 'Credits_68f91d81',
    bl = 'Credits_base__scroll_759f08f3',
    vl = F('Credits'),
    gl = r.forwardRef(({ scrollable: e, className: a, ...t }, s) =>
        n.jsx(vl, { ...t, ref: s, className: i(hl, e && bl, a) }),
    );
((gl.Header = Cr), (gl.Item = nl), (gl.Total = pl), (gl.IncomeStatement = dl));
const xl = r.forwardRef((e, a) => n.jsx(Ds, { ...e, title: 'battle_results.details.xp', ref: a })),
    yl = 'RecordGroup_65a30ced',
    Nl = 'RecordGroup_base__inactive_5fd9f274',
    jl = 'RecordGroup_record_5fd9f274',
    wl = 'RecordGroup_record__extinguished_7fdfcea',
    Il = 'RecordGroup_record__first_9121e1b7',
    Sl = 'RecordGroup_separator_9f211d97',
    Rl = 'RecordGroup_separatorBackground_8a447834',
    Pl = 'RecordGroup_value_1f34e2e2',
    Cl = 'RecordGroup_value__total_126d88a1',
    Dl = 'RecordGroup_value__freeXP_931265db';
function Tl(e, a) {
    return e !== pa || (void 0 !== a && a > 0);
}
function Al({ paramName: e, wotPlusActive: a, value: t }) {
    switch (e) {
        case rt:
            return !1;
        case ja:
        case Ba:
            return !a || !t || 0 === t;
        default:
            return !t || 0 === t;
    }
}
const Vl = ({ paramName: e, xp: a, freeXp: t, modifier: s, inactive: r, total: l, wotPlusActive: o }) => {
        function c(a) {
            switch (e) {
                case fa:
                    return z.formatReal('woZeroDigits', a);
                case rt:
                    return z.formatReal('fractional', a);
                default:
                    return z.formatNumber('integral', a);
            }
        }
        return n.jsxs('div', {
            className: i(yl, r && Nl),
            children: [
                n.jsx('div', {
                    className: i(jl, Il, Al({ wotPlusActive: o, paramName: e, value: a }) && wl),
                    children: n.jsx(Xr, {
                        value: a,
                        currency: ta,
                        modifier: Tl(e, a) ? s : void 0,
                        formatter: c,
                        classNames: { value: i(Pl, l && Cl) },
                        iconPath: Et(ta, e),
                    }),
                }),
                void 0 !== t && n.jsx('div', { className: Sl, children: n.jsx('div', { className: Rl }) }),
                n.jsx('div', {
                    className: i(jl, Al({ wotPlusActive: o, paramName: e, value: t }) && wl),
                    children: n.jsx(Xr, {
                        value: t,
                        currency: sa,
                        modifier: Tl(e, t) ? s : void 0,
                        formatter: c,
                        classNames: { value: i(Pl, Dl, l && Cl) },
                        iconPath: Et(sa, e),
                    }),
                }),
            ],
        });
    },
    Bl = 'Item_groups_a1f0c2a5',
    kl = 'Item_label_7521a1d4',
    El = 'Item_label__highlighted_36e62867',
    zl = 'Item_label__gold_49ec59ab',
    Hl = {
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
        [Ta]: 'militaryManeuvers',
        [va]: 'event',
        [Aa]: 'event',
        [ga]: 'referralBonus.fullLabel',
        [xa]: 'premiumVehicleXP',
        [Va]: 'premiumVehicleXP',
        [ya]: 'squadBonus',
        [Na]: 'squadXPPenalty',
        [rt]: 'aogasFactor',
        [ja]: 'wotPlusBonus',
        [Ba]: 'wotPlusBonus',
        [lt]: 'fairPlayViolation.deserter',
        [it]: 'fairPlayViolation.suicide',
        [nt]: 'fairPlayViolation.afk',
        [wa]: 'total',
        [ka]: 'total',
        originalAlternative: 'xpRecordSimple',
        [Ts]: 'playerRankXP',
    },
    Ol = { [ja]: 'subscription.wot_plus_32x32', [Ba]: 'subscription.wot_plus_32x32' },
    Fl = new Set([ja, Ba]),
    Gl = () =>
        n.jsx('span', { className: El, children: n.jsx(B, { path: 'battle_results.details.calculations.maximum' }) }),
    Xl = o(
        ({
            record: { paramName: e, premium: a, standard: t, modifier: s, recordsItemsDetails: r },
            total: l,
            ...o
        }) => {
            const { model: c } = Qs(),
                d = c.hasAnyPremium.get(),
                m = c.hasWotPlus.get();
            if (!(e in Hl)) return null;
            const u = '1' === (null == r ? void 0 : r.isHighScope),
                f = u ? Hl.originalAlternative : Hl[e],
                _ = null == r ? void 0 : r.referralFactor;
            return n.jsx(nr, {
                ...o,
                labelIconPath: Ol[e],
                labelKey: `battle_results.details.calculations.${f}`,
                params: { ...(_ && { bonusFactor: jt(_) }), ...(u && { maximum: n.jsx(Gl, {}) }) },
                classNames: { label: i(kl, Fl.has(e) && zl) },
                children: n.jsxs('div', {
                    className: Bl,
                    children: [
                        n.jsx(Vl, { ...t, paramName: e, modifier: s, inactive: d, total: l, wotPlusActive: m }),
                        n.jsx(Vl, { ...a, paramName: e, modifier: s, inactive: !d, total: l, wotPlusActive: m }),
                    ],
                }),
            });
        },
    ),
    $l = 'IncomeStatement_560dd244',
    Ll = 'IncomeStatement_base__scroll_fb9f1475',
    Wl = 'IncomeStatement_item_48b34a63',
    Ml = o(
        r.forwardRef(({ className: e, scrollable: a, ...t }, s) => {
            const { model: r } = Qs(),
                l = r.computes.experience();
            return n.jsx(Hr, {
                ...t,
                ref: s,
                className: i($l, a && Ll, e),
                scrollable: a,
                children: y(l.records, (e) => n.jsx(Xl, { record: e, className: Wl }, e.paramName)),
            });
        }),
    ),
    Kl = 'Total_item_a8580361',
    ql = 'Total_divider_1de1ca28',
    Ul = 'Total_dividerImage_ab06168d',
    Zl = F('ExperienceTotal', 'Total_19236d49'),
    Yl = o(
        r.forwardRef((e, a) => {
            const { model: t } = Qs(),
                s = t.computes.experience();
            return n.jsxs(Zl, {
                ...e,
                ref: a,
                children: [
                    n.jsx(ws, { classNames: { base: ql, image: Ul } }),
                    s.total.map((e) => n.jsx(Xl, { record: e, className: Kl, total: !0 }, e.paramName)),
                ],
            });
        }),
    ),
    Jl = 'Experience_a014c8c',
    Ql = 'Experience_base__scroll_f75d07c6',
    en = F('Experience'),
    an = r.forwardRef(({ scrollable: e, className: a, ...t }, s) =>
        n.jsx(en, { ...t, ref: s, className: i(Jl, e && Ql, a) }),
    );
((an.Header = xl), (an.Item = Xl), (an.Total = Yl), (an.IncomeStatement = Ml));
const tn = {
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
    sn = [25, 25],
    rn = function ({ onSelect: e, options: a, value: t }) {
        const { api: s } = M(),
            [l, o] = Z(s, sn),
            { opened: c, close: d } = Y();
        return (
            r.useEffect(() => {
                if (c) return J(() => J(s.recalculateContent));
            }, [c, s.recalculateContent]),
            n.jsx(K, {
                className: i(tn.area, !l && tn.area__begin, !o && tn.area__end),
                classNames: { content: tn.scrollContent },
                children: a.map((a) =>
                    n.jsx(
                        'div',
                        {
                            className: i(tn.base, a.id === t && tn.base__selected),
                            children: n.jsxs(Q, {
                                className: tn.button,
                                onClick: () => {
                                    (d(), e(a.id));
                                },
                                children: [
                                    n.jsx('div', { className: tn.background }),
                                    n.jsxs('div', {
                                        className: tn.itemLabelWrapper,
                                        children: [
                                            n.jsx('div', { className: tn.selectIcon }),
                                            a.level && n.jsx(ee, { value: a.level, className: tn.vehicleLevel }),
                                            a.type &&
                                                n.jsx(ae, { type: a.type, size: 'x24x24', className: tn.vehicleGap }),
                                            n.jsx('div', { className: tn.vehicleName, children: a.label }),
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
    ln = function (e) {
        return n.jsx(q.Portal, {
            position: 'bottom',
            children: n.jsx(U, {
                children: n.jsxs(q.Display, {
                    'data-name': 'playlist-dropdown-content',
                    className: tn.popover,
                    children: [
                        n.jsx(q.Tip, { position: 'top', size: '80rem', offset: '120rem' }),
                        n.jsx('div', {
                            className: tn.list,
                            children: n.jsxs(L, {
                                children: [n.jsx(rn, { ...e }), n.jsx(W, { classNames: { base: tn.bar } })],
                            }),
                        }),
                    ],
                }),
            }),
        });
    },
    nn = 'Trigger_9cdafb94',
    on = 'Trigger_arrow_8ee677b2',
    cn = 'Trigger_arrow__opened_38ae933',
    dn = 'Trigger_arrowWrapper_68451ace',
    mn = function (e) {
        const a = T(),
            t = Y();
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
                        className: nn,
                        children: [
                            e.children,
                            n.jsx('div', {
                                className: dn,
                                children: n.jsx('div', { className: i(on, t.opened && cn) }),
                            }),
                        ],
                    }),
                }),
        });
    },
    un = 'VehicleSelector_vehicleName_ff1d26ec',
    fn = 'VehicleSelector_vehicleLevel_9e1a557b',
    _n = 'VehicleSelector_vehicleGap_250d0374',
    pn = 'VehicleSelector_label_14dee5e6',
    hn = function (e) {
        const { value: a } = e,
            t = g(e.options, (e) => e.id === a);
        return n.jsxs(q, {
            children: [
                n.jsx(ln, { ...e }),
                n.jsx(mn, {
                    children: n.jsxs('div', {
                        className: pn,
                        children: [
                            (null == t ? void 0 : t.level) && n.jsx(ee, { value: t.level, className: fn }),
                            (null == t ? void 0 : t.type) && n.jsx(ae, { type: t.type, size: 'x24x24', className: _n }),
                            n.jsx('div', { className: un, children: t.label }),
                        ],
                    }),
                }),
            ],
        });
    },
    bn = 'FinancialReportVehicleSelector_c6ca6e82',
    vn = o(function () {
        const e = I.resolve('strings'),
            { model: a, controls: t } = Qs(),
            s = a.vehiclesFinancialStats.get(),
            r = a.selectedVehicle.get();
        return n.jsx('div', {
            className: bn,
            children: n.jsx(hn, {
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
    gn = 'FinancialReport_content_99bf970f',
    xn = 'FinancialReport_leftContent_75c21204',
    yn = 'FinancialReport_experience_7219d4d3',
    Nn = 'FinancialReport_credits_7712b0c',
    jn = 'FinancialReport_header_d56ebc61',
    wn = 'FinancialReport_headerContent_37c9251a',
    In = 'FinancialReport_total_bdf3e42b',
    Sn = 'FinancialReport_bonds_b7ae931a',
    Rn = F('FinancialReport', 'FinancialReport_1cb7f6f5'),
    Pn = ({ className: e }) => {
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
            n.jsx(Js, {
                children: n.jsx(Rn, {
                    className: e,
                    children: n.jsxs('div', {
                        children: [
                            n.jsx(vn, {}),
                            n.jsxs('div', {
                                className: gn,
                                children: [
                                    n.jsxs('div', {
                                        className: xn,
                                        ref: s,
                                        children: [
                                            n.jsxs(gl, {
                                                ref: l,
                                                scrollable: a.credits,
                                                className: Nn,
                                                children: [
                                                    n.jsx(gl.Header, { className: jn }),
                                                    n.jsx(gl.IncomeStatement, { scrollable: a.credits }),
                                                    n.jsx(gl.Total, { className: In }),
                                                ],
                                            }),
                                            n.jsxs(an, {
                                                ref: i,
                                                scrollable: a.experience,
                                                className: yn,
                                                children: [
                                                    n.jsx(an.Header, { className: jn, classNames: { content: wn } }),
                                                    n.jsx(an.IncomeStatement, { scrollable: a.experience }),
                                                    n.jsx(an.Total, { className: In }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    n.jsxs(Nr, {
                                        className: Sn,
                                        children: [
                                            n.jsx(Nr.Header, { className: jn, classNames: { content: wn } }),
                                            n.jsx(Nr.IncomeStatement, {}),
                                            n.jsx(Nr.Total, { className: In }),
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
    Cn = r.createContext(null);
function Dn() {
    const e = r.useContext(Cn);
    if (null === e) throw new Error('You can use the achievements hooks only with the Achievements component');
    return e;
}
const Tn = { x: 50, y: -30, scale: 1.2, opacity: 0 };
function An({ children: e, achievements: a, springsProps: t }) {
    const [s, l] = r.useState(new Set()),
        [i, o] = r.useState(void 0),
        [c, m] = d(a.length, () => ({ from: { ...Tn, ...(null == t ? void 0 : t.from) }, ...t }), [a.length, t]),
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
    return n.jsx(Cn.Provider, { value: u, children: e });
}
const Vn = {
        root: 'Achievement_root_8e5495a9',
        'media-wrapper': 'Achievement_media-wrapper_8e5495a9',
        base: 'Achievement_d22ce0bc',
        base__extinct: 'Achievement_base__extinct_b2f0b4be',
        icon: 'Achievement_icon_beb32010',
    },
    Bn = r.forwardRef(function ({ achievement: e, index: a, width: t, height: s, classNames: l }, o) {
        const c = re({
                args: r.useMemo(
                    () => ({ tooltipId: e.tooltipId, tooltipArgs: e.tooltipArgs }),
                    [e.tooltipId, e.tooltipArgs],
                ),
            }),
            d = T(),
            { hoverIndex: m, setHoverIndex: u } = Dn();
        return n.jsx('div', {
            ...c,
            ref: o,
            className: i(Vn.base, Vn[`base__${ts(a, m)}`], null == l ? void 0 : l.achievement),
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
                          className: Vn.icon,
                      })
                    : n.jsx(
                          O,
                          {
                              width: t,
                              height: s,
                              path: `achievement.x240x240.${e.iconName}`,
                              className: i(Vn.icon, null == l ? void 0 : l.icon),
                          },
                          e.iconName,
                      ),
        });
    }),
    kn = 'GroupedAchievements_4b56acae',
    En = 'GroupedAchievements_rankGroup_74be9c12',
    zn = 'GroupedAchievements_othersGroup_d0fdb9a6',
    Hn = 'GroupedAchievements_animatedAchievement_f3a3b8f8',
    On = 'GroupedAchievements_achievement_977416af',
    Fn = 'GroupedAchievements_achievement__notInteractive_76fcea70',
    Gn = r.memo(function ({
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
            { springs: f, achievements: _, completedAnimationIndexes: p, hoverIndex: h } = Dn();
        return (
            le(() => {
                if (null === u.current) return;
                const a = u.current.offsetWidth + Math.floor((t / e.length) * 2),
                    r = ne(c);
                d(s, a < r ? Math.floor((r - a) / 2) : 0);
            }, [e.length, l, c, d]),
            n.jsx('div', {
                style: { paddingLeft: t, paddingRight: t },
                className: zn,
                children: y(e, (t, s) => {
                    const r = _.length - a - s - 1;
                    return n.jsx(
                        m.div,
                        {
                            ref: 0 === s ? u : void 0,
                            className: Hn,
                            style: { ...f[r], zIndex: a + s === h ? e.length + 1 : e.length - s },
                            children: n.jsx(Bn, {
                                classNames: { achievement: i(On, !1 === p.has(r) && Fn) },
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
    Xn = r.memo(function ({ achievements: e, medalWidth: a, medalHeight: t }) {
        const { springs: s, achievements: r, completedAnimationIndexes: l, hoverIndex: o } = Dn();
        return n.jsx('div', {
            className: En,
            children: y(e, (c, d) => {
                const u = r.length - d - 1;
                return n.jsx(
                    m.div,
                    {
                        className: Hn,
                        style: { ...s[u], zIndex: d === o ? e.length + 1 : e.length - d },
                        children: n.jsx(Bn, {
                            classNames: { achievement: i(On, !l.has(u) && Fn) },
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
    $n = r.memo(function ({ className: e }) {
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
            { achievements: t } = Dn(),
            s = r.useMemo(
                () =>
                    (function (e) {
                        return v(e, (e, a) => (Yt(a) === Ut.rank ? e.rank.push(a) : e.others.push(a), e), {
                            [ss]: [],
                            [rs]: [],
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
                  className: i(kn, e),
                  children: [
                      s.rank.length > 0 &&
                          n.jsx(Xn, { achievements: s.rank, medalWidth: a.rank.width, medalHeight: a.rank.height }),
                      s.others.length > 0 &&
                          n.jsx(Gn, {
                              group: rs,
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
    Ln = 'AnimatedNumber_958fc84e',
    Wn = 'AnimatedNumber_slotMachineDigit_a9587a5a',
    Mn = 'AnimatedNumber_plugChar_c66678',
    Kn = 'AnimatedNumber_digitsList_2065427d',
    qn = A.cubicBezier(0.33, 0, 0.25, 1);
function Un({ symbol: e, step: a, delay: t, first: s, handleFirstRest: l }) {
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
                    config: { duration: 600, easing: qn },
                    immediate: i,
                    onRest() {
                        o(!0);
                    },
                });
        }, [a, d, i, t, _]),
        n.jsxs('div', {
            className: Wn,
            children: [
                n.jsx('div', { className: Mn, children: e }),
                n.jsx(m.div, {
                    style: c,
                    className: Kn,
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
const Zn = r.memo(function ({ value: e, readyToAnimate: a, className: t, handleAnimationFinished: s, type: l }) {
        const [o, c] = ie(),
            d = r.useMemo(() => e.split(''), [e]),
            m = r.useCallback(() => s(l), [s, l]);
        return n.jsx('div', {
            ref: o,
            className: i(Ln, t),
            children: d.map((t, s) =>
                n.jsx(
                    Un,
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
    Yn = 'Currency_10720e2d',
    Jn = 'Currency_icon_4d923f64',
    Qn = 'Currency_icon__visible_9c676b12',
    ei = 'Currency_value_54c8fc6b',
    ai = { xp: 'tankXP', crystal: 'crystal', credits: 'credits', gold: 'gold' },
    ti = Object.keys(ai);
function si({ type: e, value: a, size: t, visibleIfZero: s, readyToAnimate: r, handleAnimationFinished: l }) {
    return ((e) => ti.includes(e))(e)
        ? 0 !== a || s
            ? n.jsx(X, {
                  reverse: !0,
                  type: ai[e],
                  size: t,
                  className: Yn,
                  classNames: { icon: i(Jn, r && Qn) },
                  children: n.jsx(Zn, {
                      className: ei,
                      readyToAnimate: r,
                      type: e,
                      handleAnimationFinished: l,
                      value: z.formatNumber(e === de.gold ? 'gold' : 'integral', a),
                  }),
              })
            : null
        : (console.error(`There is no such currency in the template literal: ${e}`), null);
}
const ri = F('Currencies', 'Currencies_5b11a533'),
    li = o(function ({ className: e }) {
        const [a, t] = r.useState(!1),
            [s, l] = r.useState(new Set()),
            { model: i } = us(),
            o = i.computes.earnedCurrencies(),
            c = me(o),
            d = T(),
            { step: m } = bs(),
            u = te({ value: $.medium }, { medium: { value: $.large }, large: { value: $.extraLarge } });
        (r.useEffect(() => {
            void 0 !== c && c !== o && d.play('startRolling', { target: 'overview:currencies' });
        }, [o, c, d]),
            r.useEffect(() => {
                m === fs.third && (t(!0), d.play('startRolling', { target: 'overview:currencies' }));
            }, [m, d]),
            r.useEffect(() => {
                s.size === o.filter(({ value: e, visibleIfZero: a }) => e > 0 || a).length &&
                    d.play('stopRolling', { target: 'overview:currencies' });
            }, [o, d, s]));
        const f = r.useCallback(function (e) {
            l((a) => V(a, e));
        }, []);
        return n.jsx(ri, {
            className: e,
            children: y(o, (e) =>
                n.jsx(si, { readyToAnimate: a, size: u.value, handleAnimationFinished: f, ...e }, e.type),
            ),
        });
    }),
    ni = 'win',
    ii = 'Flag_aedf2f2f',
    oi = 'Flag_8ac99d2d';
function ci({ status: e }) {
    return e === ni ? 'post_battle.epic_victory_ribbon' : 'post_battle.epic_defeat_draw_ribbon';
}
function di({ status: e }) {
    const a = I.resolve('videos');
    return n.jsx('div', {
        className: ii,
        children: n.jsx(ue, { loop: !0, autoplay: !0, className: oi, src: a.read(ci({ status: e })) }),
    });
}
const mi = {
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
    ui = {
        [mi.targetKills]: 'library.crossed_tank',
        [mi.damageDealt]: 'library.cross_with_gap',
        [mi.damageBlockedByArmor]: 'library.blocked',
        [mi.damageAssisted]: 'library.double_target',
        [mi.damageAssistedStun]: 'library.arrow_with_fading',
        [mi.spotted]: 'library.eyebrow',
        [mi.criticalDamage]: 'library.gear_with_gap',
    },
    fi = { behaviour: fe.contentResponsive, minSize: '0rem', maxSize: '1000rem' };
(mi.account,
    _e.extraSmall,
    fe.static,
    _e.medium,
    fe.static,
    _e.large,
    fe.static,
    _e.extraLarge,
    fe.static,
    mi.vehicle,
    _e.extraSmall,
    fe.static,
    _e.medium,
    fe.static,
    _e.large,
    fe.static,
    _e.extraLarge,
    fe.static);
const _i = r.createContext(null);
function pi({ iconsConfig: e, children: a }) {
    const t = r.useMemo(() => ({ iconsConfig: { ...ui, ...(e || {}) } }), [e]);
    return n.jsx(_i.Provider, { value: t, children: a });
}
const hi = {
    cellWithValue: 'HeaderCell_cellWithValue_78949e6d',
    cellWithValue__totalInfo: 'HeaderCell_cellWithValue__totalInfo_789bf7be',
    cellWithValue__zeroIndent: 'HeaderCell_cellWithValue__zeroIndent_334269c9',
    wrapper: 'HeaderCell_wrapper_7849c6a',
    imageWrapper: 'HeaderCell_imageWrapper_a570c717',
    value: 'HeaderCell_value_f7bb7c82',
    cellWithText: 'HeaderCell_cellWithText_710c47ce',
    text: 'HeaderCell_text_35220206',
};
function bi({ info: e, name: a, className: t }) {
    const { iconsConfig: s } = (function () {
            const e = r.useContext(_i);
            if (null === e)
                throw new Error(
                    'You can use the personal efficiency hooks only with the PersonalEfficiency widget component',
                );
            return e;
        })(),
        l = I.resolve('views'),
        o = pe({
            contentId: l.read((e) =>
                a === mi.criticalDamage
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
                return e + (a === mi.spotted && r > 0 ? 1 : r);
            },
            0,
        ),
        d = s[a] ?? '';
    return n.jsx('div', {
        className: i(hi.cellWithValue, t),
        children: n.jsxs('div', {
            ...o,
            className: hi.wrapper,
            children: [
                n.jsx('div', { className: hi.value, children: z.formatNumber('integral', c) }),
                n.jsx('div', {
                    className: hi.imageWrapper,
                    children: n.jsx(O, { width: '100%', height: '100%', path: d }),
                }),
            ],
        }),
    });
}
function vi({ name: e, info: a, className: t }) {
    const s = I.resolve('strings');
    switch (e) {
        case mi.targetKills:
        case mi.damageDealt:
        case mi.damageBlockedByArmor:
        case mi.damageAssisted:
        case mi.damageAssistedStun:
        case mi.spotted:
        case mi.criticalDamage:
            return void 0 !== a ? n.jsx(bi, { name: e, info: a, className: t }) : null;
        case mi.account:
            return n.jsx('div', {
                className: hi.cellWithText,
                children: n.jsx('div', {
                    className: hi.text,
                    children: s.readOrEmpty('battle_results.common.battleEfficiency.uppercased_title'),
                }),
            });
        default:
            return (console.error(`Unknown column ${e}`), null);
    }
}
const gi = 'Index_align_5032d1bf',
    xi = 'Index_align__right_9d371d4f',
    yi = f();
function Ni() {
    return [
        yi.accessor('killed', {
            id: mi.targetKills,
            header: (e) =>
                n.jsx(vi, {
                    info: e,
                    name: mi.targetKills,
                    className: i(hi.cellWithValue__totalInfo, hi.cellWithValue__zeroIndent),
                }),
            enableSorting: !1,
            meta: { column: fi, className: i(gi, xi) },
        }),
        yi.accessor('damageDealt', {
            id: mi.damageDealt,
            header: (e) => n.jsx(vi, { info: e, name: mi.damageDealt, className: hi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(gi, xi), column: fi },
        }),
        yi.accessor('damageBlockedByArmor', {
            id: mi.damageBlockedByArmor,
            header: (e) =>
                n.jsx(vi, { info: e, name: mi.damageBlockedByArmor, className: hi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(gi, xi), column: fi },
        }),
        yi.accessor('damageAssisted', {
            id: mi.damageAssisted,
            header: (e) => n.jsx(vi, { info: e, name: mi.damageAssisted, className: hi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(gi, xi), column: fi },
        }),
        yi.accessor('damageAssistedStun', {
            id: mi.damageAssistedStun,
            header: (e) => n.jsx(vi, { info: e, name: mi.damageAssistedStun, className: hi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(gi, xi), column: fi },
        }),
        yi.accessor('spotted', {
            id: mi.spotted,
            header: (e) => n.jsx(vi, { info: e, name: mi.spotted, className: hi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(gi, xi), column: fi },
        }),
        yi.accessor('criticalDamage', {
            id: mi.criticalDamage,
            header: (e) => n.jsx(vi, { info: e, name: mi.criticalDamage, className: hi.cellWithValue__totalInfo }),
            enableSorting: !1,
            meta: { className: i(gi, xi), column: fi },
        }),
    ];
}
const ji = 'TableHeader_row_a81d3e65',
    wi = r.memo(function ({ classNames: e }) {
        const { table: a } = be();
        return n.jsx(ve.Header, {
            className: null == e ? void 0 : e.base,
            children: y(a.getHeaderGroups(), (a, t) =>
                n.jsx(
                    ve.Row,
                    {
                        className: i(ji, null == e ? void 0 : e.row),
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
    Ii = function ({ data: e, config: a, className: t }) {
        const s = xe();
        return n.jsx(pi, {
            children: n.jsx(ye, {
                data: e,
                columns: a,
                enableMultiRowSelection: !1,
                getRowId: (e) => e.account.username,
                children: n.jsx(ve, { className: t, children: n.jsx(wi, {}) }, s.breakpoint.name),
            }),
        });
    },
    Si = 'PersonalEfficiency_messagesPanel_d1b1fa0b',
    Ri = 'PersonalEfficiency_message_d772bbd7',
    Pi = 'PersonalEfficiency_totalEfficiency_4de0e87b',
    Ci = 'PersonalEfficiency_totalEfficiencyTable_9139933',
    Di = 'PersonalEfficiency_clarificationWrapper_5f3072b1',
    Ti = o(function () {
        const { model: e } = us(),
            a = e.computes.personalEfficiency(),
            t = e.battleInfo.get().finishReasonClarification,
            s = I.resolve('strings'),
            { personalEfficiencyRef: l } = bs(),
            [i] = u(() => ({ from: { opacity: 0 }, ref: l })),
            o = r.useMemo(Ni, []);
        return 0 === a.length
            ? n.jsxs(m.div, {
                  style: i,
                  className: Si,
                  children: [
                      '' !== t &&
                          n.jsx('div', {
                              className: Ri,
                              children: s.readOrEmpty(`battle_results.finish.clarification.${t}`),
                          }),
                      n.jsx('div', {
                          className: Ri,
                          children: s.readOrEmpty('battle_results.common.battleEfficiency.noEfficiency'),
                      }),
                  ],
              })
            : n.jsx('div', {
                  className: Pi,
                  children: n.jsxs(m.div, {
                      style: i,
                      children: [
                          '' !== t &&
                              n.jsx('div', {
                                  className: Di,
                                  onClick: (e) => e.stopPropagation(),
                                  children: n.jsx('div', {
                                      className: Ri,
                                      children: s.readOrEmpty(`battle_results.finish.clarification.${t}`),
                                  }),
                              }),
                          n.jsx(Ii, { data: a, config: o, className: Ci }),
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
    Vi = F('Overview', Ai.base),
    Bi = o(function ({ className: e }) {
        var a;
        const t = I.resolve('strings'),
            s = T(),
            { model: l } = us(),
            o = l.personalEfficiency.achievements.get(),
            { step: c, battleStatusRef: d, earnedCurrenciesRef: f } = bs(),
            [_] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: d })),
            [p] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: f })),
            { api: h, setCompletedAnimationIndexes: b } = Dn(),
            v = null == (a = l.battleInfo.get()) ? void 0 : a.winStatus;
        return (
            r.useEffect(() => {
                if (c === fs.first) {
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
                            config: { duration: 400 + l, easing: A.cubicBezier(1, 0, 0.95, 1) },
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
                                easing: A.cubicBezier(0.33, 0, 0.25, 1),
                            },
                        })));
                }
            }, [c, h, b, s, o.length]),
            n.jsxs(Vi, {
                className: e,
                children: [
                    n.jsx('div', { className: i(Ai.background, v && Ai[`background__${v}`]) }),
                    n.jsx('div', { className: Ai.cornerShadow }),
                    n.jsx('div', { className: i(Ai.bottomGradient, v && Ai[`bottomGradient__${v}`]) }),
                    n.jsxs('div', {
                        className: i(Ai.info, 0 === o.length && Ai.info__withoutMedals),
                        children: [
                            n.jsx(di, { status: v }),
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
                            n.jsx($n, { className: Ai.achievements }),
                            n.jsx(m.div, { style: p, className: Ai.currencies, children: n.jsx(li, {}) }),
                        ],
                    }),
                    n.jsx(Ti, {}),
                ],
            })
        );
    }),
    ki = o(function (e) {
        const { model: a } = us(),
            t = a.personalEfficiency.achievements.get();
        return n.jsx(An, { achievements: t, children: n.jsx(Bi, { ...e }) });
    }),
    Ei = 'Divider_80a19f4b',
    zi = r.forwardRef(function ({ classNames: e, className: a, ...t }, s) {
        return n.jsx('div', {
            ...t,
            ref: s,
            className: i(Ei, null == e ? void 0 : e.base, a),
            children: n.jsx(O, {
                className: null == e ? void 0 : e.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }),
    Hi = {
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
function Oi(e, a) {
    return void 0 === a ? 'default' : a === e ? 'hover' : 'extinct';
}
const Fi = r.forwardRef(function (
        { achievement: e, achievementsLength: a, index: t, hoverIndex: s, setHoverIndex: r, ...l },
        o,
    ) {
        const c = T(),
            d = re({ args: { tooltipId: e.tooltipId, tooltipArgs: e.tooltipArgs } }),
            m = te(
                { width: '48rem', height: '48rem', path: `achievement.c_48x48.${e.iconName}` },
                { medium: { width: '67rem', height: '71rem', path: `achievement.${e.iconName}` } },
            );
        return n.jsx('div', {
            ...l,
            ...d,
            className: i(Hi.achievement, Hi[`achievement__${Oi(t, s)}`]),
            style: { zIndex: t === s ? a + 1 : a - t },
            onMouseEnter: function (e) {
                (d.onMouseEnter(e),
                    r(t),
                    c.play('mouse-enter', { original: e, target: 'team-efficiency:efficiency-details:achievement' }));
            },
            onMouseLeave: () => {
                (d.onMouseLeave(), r(void 0));
            },
            children: n.jsx(O, { ref: o, className: Hi.achievementIcon, ...m }, e.iconName),
        });
    }),
    Gi = o(function ({ team: e, account: a, vehicles: t, achievements: s, squadIndex: l, personal: o }) {
        const c = I.resolve('strings'),
            [d, m] = r.useState(void 0),
            { model: u, controls: f } = us(),
            _ = u.teamsStatistic.selectedVehicle.get(),
            p = u.computes.personalInfo(),
            h = te({ width: '230rem', height: '184rem' }, { medium: { width: '290rem', height: '232rem' } }),
            b = Ne({
                header: c.readOrEmpty('tooltips.anonymizer.teamStats.header').replace('%(name)s', a.username),
                body: c.readOrEmpty('tooltips.anonymizer.teamStats.body'),
            }),
            v = ds({ personal: o, platoonType: cs(e, p.squadIndex, l), anonymizer: a.anonymizer });
        return n.jsxs('div', {
            className: Hi.header,
            children: [
                n.jsx('div', {
                    className: Hi.vehicleImageWrapper,
                    children: n.jsx(je, { name: _ ?? '', width: h.width, height: h.height }),
                }),
                n.jsxs('div', {
                    className: Hi.info,
                    children: [
                        n.jsxs(we, {
                            className: Hi.accountInfo,
                            children: [
                                '' !== a.badge &&
                                    n.jsx(we.Badge, {
                                        className: Hi.accountInfoGap,
                                        size: we.Badge.sizes.x48x48,
                                        badgeId: a.badge,
                                    }),
                                n.jsx(we.Name, {
                                    className: i(Hi.accountName, Hi.accountInfoGap),
                                    children: n.jsx(Ie, { text: v ? a.fakeUsername : a.username }),
                                }),
                                '' !== a.clanAbbreviation &&
                                    !v &&
                                    n.jsx(we.ClanTag, {
                                        className: Hi.clanAbbreviation,
                                        children: n.jsx(B, {
                                            path: 'common.clanTag',
                                            params: { abbrev: a.clanAbbreviation },
                                            brackets: { start: '{', end: '}' },
                                        }),
                                    }),
                                0 !== a.igrType &&
                                    n.jsx(we.IgrIcon, { size: we.IgrIcon.sizes.x64x28, className: Hi.accountInfoGap }),
                                '' !== a.suffixBadge &&
                                    n.jsx(we.Stripe, {
                                        size: we.Stripe.sizes.regular,
                                        badgeId: a.suffixBadge,
                                        className: Hi.accountInfoGap,
                                    }),
                                a.anonymizer &&
                                    n.jsx(we.AnonymizerIcon, {
                                        ...b,
                                        size: we.AnonymizerIcon.sizes.x32x32,
                                        className: Hi.anonymizerIcon,
                                    }),
                            ],
                        }),
                        n.jsx('div', {
                            className: Hi.vehicle,
                            children: n.jsx(hn, {
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
                                className: Hi.achievements,
                                children: y(Jt(s), (e, a) =>
                                    n.jsx(
                                        Fi,
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
    Xi = F('StatisticsLabel'),
    $i = I.resolve('strings'),
    Li = r.forwardRef(function ({ labelKey: e, ...a }, t) {
        return n.jsx(Xi, { ...a, ref: t, children: $i.readOrEmpty(e) });
    }),
    Wi = 'Value_798a6cdd',
    Mi = 'Value_separator_798a6cdd',
    Ki = I.resolve('strings');
function qi(e, a) {
    switch (e) {
        case zt.Integer:
            return z.formatNumber('integral', a);
        case zt.Float:
            return z.formatReal('fractional', a);
        default:
            return a;
    }
}
const Ui = F('StatisticsValue', Wi),
    Zi = r.forwardRef(function (
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
        return n.jsx(Ui, {
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
                                children: qi(t, l),
                            }),
                            c < a.length - 1 &&
                                n.jsxs('div', {
                                    className: i(Mi, null == o ? void 0 : o.separator),
                                    children: [' ', Ki.readOrEmpty(s), ' '],
                                }),
                        ],
                    },
                    `${e}_value_${c}`,
                ),
            ),
        });
    }),
    Yi = 'Index_scrollAreaContent_52a570a',
    Ji = 'Index_scrollAreaContent__initialized_b2629fde',
    Qi = 'Index_item_6b7cdfb0',
    eo = 'Index_separator_add04e19',
    ao = F('Statistics', 'Index_statistics_638478ff'),
    to = F('StatisticsItem', Qi),
    so = F('StatisticsItemSeparator', eo);
function ro({ children: e, scrollbarProps: a, scrollAreaProps: t }) {
    var s;
    const r = M(),
        l = Dr(r.api);
    return n.jsxs(n.Fragment, {
        children: [
            n.jsx(K, {
                ...t,
                classNames: {
                    ...(null == t ? void 0 : t.classNames),
                    content: i(Yi, l && Ji, null == (s = null == t ? void 0 : t.classNames) ? void 0 : s.content),
                },
                children: e,
            }),
            n.jsx(W, { ...a }),
        ],
    });
}
const lo = r.forwardRef(function ({ scrollbarProps: e, scrollAreaProps: a, ...t }, s) {
    return n.jsx(ao, {
        ...t,
        ref: s,
        children: n.jsx(L, { children: n.jsx(ro, { ...t, scrollbarProps: e, scrollAreaProps: a }) }),
    });
});
((lo.Item = to), (lo.Value = Zi), (lo.Label = Li), (lo.Separator = so));
const no = {
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
function io({ squareSize: e = 1, spacing: a = 2, backgroundColor: t = '#d9d9d9' }) {
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
        r.useEffect(() => J(c), [c]),
        n.jsx('div', {
            ref: s,
            className: no.separator,
            children: Array.from({ length: l }).map((a, s) =>
                n.jsx(
                    'div',
                    {
                        className: no.separatorSquare,
                        style: { backgroundColor: t, width: `${e}rem`, height: `${e}rem`, left: s * o + 'rem' },
                    },
                    s,
                ),
            ),
        })
    );
}
const oo = I.resolve('strings'),
    co = (e) =>
        'boolean' == typeof e
            ? e
                ? oo.readOrEmpty('fl_post_battle_results.battleInfo.yes')
                : oo.readOrEmpty('fl_post_battle_results.battleInfo.no')
            : e;
function mo({ list: e, frontLineParams: a, isGeneralInfo: t }) {
    return n.jsxs(lo, {
        scrollbarProps: { classNames: { base: no.scrollbar } },
        scrollAreaProps: { classNames: { content: no.scrollAreaContent } },
        children: [
            t &&
                Object.entries(a).map(([e, a]) =>
                    n.jsxs(
                        lo.Item,
                        {
                            className: no.listItem,
                            children: [
                                n.jsx(lo.Label, {
                                    className: no.frontlinePramLabel,
                                    labelKey: `fl_post_battle_results.battleInfo.labels_${e}`,
                                }),
                                n.jsx(lo.Separator, { className: no.listItemSeparator, children: n.jsx(io, {}) }),
                                n.jsx('div', { className: i(no.value, !a && no.zeroValue), children: co(a) }),
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
                            n.jsxs(lo.Item, {
                                className: no.listItem,
                                children: [
                                    n.jsx(lo.Label, {
                                        className: no.label,
                                        labelKey: `battle_results.team.stats.labels_${e.labelKey}`,
                                    }),
                                    n.jsx(lo.Separator, { className: no.listItemSeparator, children: n.jsx(io, {}) }),
                                    n.jsx(lo.Value, {
                                        classNames: {
                                            base: no.value,
                                            zeroValue: no.zeroValue,
                                            separator: no.valueSeparator,
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
                                        lo.Item,
                                        {
                                            className: i(no.listItem, no.listSubItem),
                                            children: [
                                                n.jsx(lo.Label, {
                                                    className: no.label,
                                                    labelKey: `battle_results.team.stats.labels_${e.labelKey}`,
                                                }),
                                                n.jsx(lo.Separator, {
                                                    className: no.listItemSeparator,
                                                    children: n.jsx(io, {}),
                                                }),
                                                n.jsx(lo.Value, {
                                                    classNames: {
                                                        base: no.value,
                                                        zeroValue: no.zeroValue,
                                                        separator: no.valueSeparator,
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
const uo = 'EfficiencyDetails_divider_85b11efd',
    fo = 'EfficiencyDetails_dividerImage_5b9d06d2',
    _o = 'EfficiencyDetails_closeIcon_8d81da90',
    po = 'EfficiencyDetails_statistics_30a81815',
    ho = F('EfficiencyDetails', 'EfficiencyDetails_efficiencyDetails_db8069eb', {
        variants: {
            team: {
                [ls]: 'EfficiencyDetails_efficiencyDetails__allies_20b1febc',
                [ns]: 'EfficiencyDetails_efficiencyDetails__enemies_23a29af',
            },
        },
    }),
    bo = o(function ({ team: e, className: a }) {
        const { model: t, controls: s } = us(),
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
            c = T(),
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
                ? n.jsxs(ho, {
                      team: e,
                      className: a,
                      ref: d,
                      children: [
                          i &&
                              n.jsx(Gi, {
                                  team: e,
                                  account: i.account,
                                  squadIndex: i.squadIndex,
                                  achievements: i.achievements,
                                  personal: i.personal,
                                  vehicles: i.vehicles,
                              }),
                          o &&
                              n.jsx('div', {
                                  className: po,
                                  children: n.jsx(mo, {
                                      isGeneralInfo: o.isGeneralInfo,
                                      frontLineParams: {
                                          objectivesReached: o.objectivesReached,
                                          objectivesDestroyed: o.objectivesDestroyed,
                                          zoneCaptured: o.zoneCaptured,
                                      },
                                      list: o.detailedStatistics,
                                  }),
                              }),
                          n.jsx(zi, { classNames: { base: uo, image: fo } }),
                          n.jsx(O, {
                              className: _o,
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
    vo = 'squadIndex',
    go = 'account',
    xo = 'rank',
    yo = 'damageDealt',
    No = 'kills',
    jo = 'earnedXp',
    wo = 'respawns',
    Io = 'achievements',
    So = 'AccountInfoCell_accountInfo_dec8771',
    Ro = 'AccountInfoCell_accountName_758104df',
    Po = 'AccountInfoCell_clanAbbreviation_99f1cc86',
    Co = 'AccountInfoCell_badge_b101914f',
    Do = 'AccountInfoCell_anonymizerIcon_a1d51ca4',
    To = 'AccountInfoCell_igrIcon_158694e7',
    Ao = 'AccountInfoCell_stripe_fefba7b2',
    Vo = o(function ({ account: e, team: a, platoon: t, className: s, classNames: r, ...l }) {
        const { model: o } = us(),
            c = o.computes.personalInfo(),
            d = ds({
                personal: c.account.username === e.username,
                platoonType: cs(a, c.squadIndex, t),
                anonymizer: e.anonymizer,
            });
        return n.jsxs(we, {
            ...l,
            className: i(So, s),
            children: [
                '' !== e.badge &&
                    n.jsx(we.Badge, {
                        size: we.Badge.sizes.x24x24,
                        badgeId: e.badge,
                        className: i(Co, null == r ? void 0 : r.badge),
                    }),
                n.jsx(we.Name, {
                    className: i(Ro, null == r ? void 0 : r.username),
                    children: n.jsx(Ie, { text: d ? e.fakeUsername : e.username }),
                }),
                '' !== e.clanAbbreviation &&
                    !d &&
                    n.jsx(we.ClanTag, {
                        className: i(Po, null == r ? void 0 : r.clanAbbreviation),
                        children: n.jsx(B, {
                            path: 'common.clanTag',
                            params: { abbrev: e.clanAbbreviation },
                            brackets: { start: '{', end: '}' },
                        }),
                    }),
                0 !== e.igrType &&
                    n.jsx(we.IgrIcon, {
                        size: we.IgrIcon.sizes.x34x16,
                        className: i(To, null == r ? void 0 : r.igrIcon),
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
                        className: i(Do, null == r ? void 0 : r.anonymizerIcon),
                    }),
            ],
        });
    }),
    Bo = 'AchievementsCell_achievementCell_e9bf973c',
    ko = 'AchievementsCell_achievementsAmount_349c209a';
function Eo({ achievements: e }) {
    const a = I.resolve('strings'),
        t = Ne({ body: y(Jt(e), (e) => a.readOrEmpty(`achievements.${e.name}`)).join('\n') }),
        s = e.length;
    return 0 === s
        ? null
        : n.jsxs('div', {
              ...t,
              className: Bo,
              children: [
                  n.jsx(O, { path: 'library.medal', width: '32rem', height: '32rem' }),
                  n.jsx('div', { className: ko, children: z.formatNumber('integral', s) }),
              ],
          });
}
const zo = { behaviour: fe.static, size: '32rem' },
    Ho = { behaviour: fe.static, size: '294rem' },
    Oo = { behaviour: fe.static, size: '392rem' },
    Fo = { behaviour: fe.static, size: '496rem' },
    Go = { behaviour: fe.static, size: '40rem' },
    Xo = { behaviour: fe.static, size: '60rem' },
    $o = { behaviour: fe.static, size: '56rem' },
    Lo = { behaviour: fe.static, size: '60rem' },
    Wo = { behaviour: fe.static, size: '80rem' },
    Mo = { behaviour: fe.static, size: '40rem' },
    Ko = { behaviour: fe.static, size: '60rem' },
    qo = { behaviour: fe.static, size: '56rem' },
    Uo = { behaviour: fe.static, size: '60rem' },
    Zo = { behaviour: fe.static, size: '80rem' },
    Yo = { behaviour: fe.static, size: '40rem' },
    Jo = { behaviour: fe.static, size: '56rem' },
    Qo = { behaviour: fe.static, size: '40rem' },
    ec = {
        [vo]: { [_e.extraSmall]: zo, [_e.medium]: zo, [_e.large]: zo, [_e.extraLarge]: zo },
        [go]: { [_e.extraSmall]: Ho, [_e.medium]: Oo, [_e.large]: Oo, [_e.extraLarge]: Fo },
        [xo]: { [_e.extraSmall]: Go, [_e.medium]: Xo, [_e.large]: Xo, [_e.extraLarge]: Xo },
        [yo]: { [_e.extraSmall]: $o, [_e.medium]: Lo, [_e.large]: Lo, [_e.extraLarge]: Wo },
        [No]: { [_e.extraSmall]: Mo, [_e.medium]: Ko, [_e.large]: Ko, [_e.extraLarge]: Ko },
        [jo]: { [_e.extraSmall]: qo, [_e.medium]: Uo, [_e.large]: Uo, [_e.extraLarge]: Zo },
        [wo]: { [_e.extraSmall]: Yo, [_e.medium]: Jo, [_e.large]: Jo, [_e.extraLarge]: Jo },
        [Io]: { [_e.extraSmall]: Qo, [_e.medium]: Qo, [_e.large]: Qo, [_e.extraLarge]: Qo },
    },
    ac = {
        root: 'HeaderCell_root_204e6a44',
        'media-wrapper': 'HeaderCell_media-wrapper_204e6a44',
        headerCell__asc: 'HeaderCell_headerCell__asc_204e6a44',
        headerCell__desc: 'HeaderCell_headerCell__desc_dc5a7202',
        headerCell: 'HeaderCell_headerCell_5b34d1b1',
        headerCell__icon: 'HeaderCell_headerCell__icon_cfa14ddf',
        headerCell__text: 'HeaderCell_headerCell__text_b476890c',
        icon: 'HeaderCell_icon_5a06734a',
    },
    tc = [xo, wo],
    sc = {
        [vo]: 'library.shield',
        [xo]: 'rank',
        [yo]: 'library.cross_with_gap',
        [No]: 'library.crossed_tank',
        [jo]: 'library.star',
        [wo]: 'respawns',
        [Io]: 'library.medal',
    },
    rc = {
        [vo]: 'squadHeader',
        [go]: 'playerHeader',
        [xo]: 'epicRankHeader',
        [yo]: 'damageHeader',
        [No]: 'fragHeader',
        [jo]: 'xpHeader',
        [wo]: 'epicRespawnHeader',
        [Io]: 'medalHeader',
    },
    lc = r.forwardRef(function ({ name: e, team: a, column: t, className: s, ...r }, l) {
        const o = t.getIsSorted(),
            c = I.resolve('strings'),
            d = Ne({
                header: c.readOrEmpty(`battle_results.team.${rc[e]}.header`),
                body: c.readOrEmpty(`battle_results.team.${rc[e]}.body`),
            }),
            m = e === go,
            u = tc.includes(e);
        return n.jsx('div', {
            ...r,
            ...d,
            ref: l,
            className: i(ac.headerCell, m ? ac.headerCell__text : ac.headerCell__icon, o && ac[`headerCell__${o}`], s),
            children: m
                ? c.readOrEmpty(`battle_results.team.stats.${a}`)
                : u
                  ? n.jsx('div', {
                        style: {
                            backgroundImage: `url(${R.images.frontline.gui.maps.icons.postBattleResults.$dyn(sc[e])})`,
                        },
                        className: ac.icon,
                    })
                  : n.jsx(O, { path: sc[e], className: ac.icon }),
        });
    }),
    nc = 'NumberValueCell_numberValueCell_35482257';
function ic({ value: e, className: a, showZero: t = !0 }) {
    return !1 === t && 0 === e ? null : n.jsx('div', { className: i(nc, a), children: z.formatNumber('integral', e) });
}
const oc = {
        root: 'PlatoonCell_root_45cd697',
        'media-wrapper': 'PlatoonCell_media-wrapper_45cd697',
        platoon: 'PlatoonCell_platoon_5fe0374b',
        platoonText: 'PlatoonCell_platoonText_b6a98287',
        platoonText__personal: 'PlatoonCell_platoonText__personal_d021db4c',
        platoonText__alien: 'PlatoonCell_platoonText__alien_9767e814',
    },
    cc = { [os]: 'library.platoon_indicator_gray', [is]: 'library.platoon_indicator_orange' },
    dc = o(function ({ platoon: e, team: a }) {
        const { model: t } = us(),
            s = cs(a, t.computes.personalInfo().squadIndex, e);
        if (null === s) return null;
        const r = cc[s];
        return n.jsxs('div', {
            className: oc.platoon,
            children: [
                n.jsx(O, { path: r, width: '32rem', height: '32rem' }),
                n.jsx('div', { className: i(oc.platoonText, oc[`platoonText__${s}`]), children: e }),
            ],
        });
    }),
    mc = 'RankCell_5390b3e9';
function uc({ rank: e }) {
    return n.jsx('div', {
        style: { backgroundImage: `url(${R.images.frontline.gui.maps.icons.ranksSilver.c_24x24.$dyn(`rank_${e}`)})` },
        className: mc,
    });
}
const fc = 'EfficiencyTable_efficiencyTable__allies_b2f99733',
    _c = 'EfficiencyTable_efficiencyTable__enemies_1ba35ae7',
    pc = 'EfficiencyTable_header_412b5b7b',
    hc = 'EfficiencyTable_rowsWrapper_da034938',
    bc = 'EfficiencyTable_efficiencyTable_e622a43e',
    vc = 'EfficiencyTable_alignLeft_a52cfd11',
    gc = 'EfficiencyTable_alignRight_46cf6a64',
    xc = 'EfficiencyTable_table_f467cc44',
    yc = 'EfficiencyTable_tableBody_5b14613b',
    Nc = 'EfficiencyTable_scrollBar_f4e5aa11',
    jc = 'EfficiencyTable_scrollAreaContent_4fa5a5ab',
    wc = 'EfficiencyTable_mask_8fbe6740',
    Ic = {
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
    Sc = p(),
    Rc = (e, a, t) => {
        const s = e.getValue('account'),
            r = e.getValue('squadIndex');
        return ds({
            personal: a.account.username === s.username,
            platoonType: cs(t, a.squadIndex, r),
            anonymizer: s.anonymizer,
        })
            ? s.fakeUsername
            : s.username;
    },
    Pc = ({ team: e, personalInfo: a, breakpointName: t }) => {
        const s = (t, s) =>
                ((e, a, t, s) => {
                    const r = Rc(e, t, s),
                        l = Rc(a, t, s);
                    return r.localeCompare(l);
                })(t, s, a, e),
            r = 'small' === t ? _e.extraSmall : t;
        return [
            Sc.accessor('squadIndex', {
                id: vo,
                header: (e) => n.jsx(lc, { name: vo, column: e.column }),
                sortingFn: (e, a) => {
                    const t = a.getValue('squadIndex') - e.getValue('squadIndex');
                    return 0 !== t ? t : s(e, a);
                },
                cell: (a) => n.jsx(dc, { team: e, platoon: a.cell.getValue() }),
                meta: { column: ec[vo][r] },
            }),
            Sc.accessor('account', {
                id: go,
                header: (a) => n.jsx(lc, { team: e, name: go, column: a.column }),
                sortDescFirst: !1,
                sortingFn: s,
                cell: (a) =>
                    n.jsx(Vo, {
                        account: a.cell.getValue(),
                        team: e,
                        platoon: a.row.original.squadIndex,
                        className: Ic.accountInfo,
                        classNames: { username: Ic.accountName, clanAbbreviation: Ic.clanAbbreviation },
                    }),
                meta: { column: ec[go][r], className: vc },
            }),
            Sc.accessor('rank', {
                id: xo,
                header: (e) => n.jsx(lc, { name: xo, column: e.column }),
                sortingFn: (e, a) => e.getValue('rank') - a.getValue('rank') || s(e, a),
                cell: (e) => n.jsx(uc, { rank: e.cell.getValue() }),
                meta: { column: ec[xo][r] },
            }),
            Sc.accessor('efficiencyValues', {
                id: yo,
                header: (e) => n.jsx(lc, { name: yo, column: e.column }),
                sortingFn: (e, a) =>
                    (e.getValue('damageDealt').damageDealt ?? 0) - (a.getValue('damageDealt').damageDealt ?? 0) ||
                    s(e, a),
                cell: (e) => n.jsx(ic, { value: e.getValue().damageDealt ?? 0, className: Ic.numberValue }),
                meta: { column: ec[yo][r], className: gc },
            }),
            Sc.accessor('efficiencyValues', {
                id: No,
                header: (e) => n.jsx(lc, { name: No, column: e.column }),
                sortingFn: (e, a) =>
                    e.getValue('kills').subtractedAlliesKills - a.getValue('kills').subtractedAlliesKills || s(e, a),
                cell: (e) =>
                    n.jsx(ic, { showZero: !1, value: e.getValue().subtractedAlliesKills, className: Ic.numberValue }),
                meta: { column: ec[No][r] },
            }),
            Sc.accessor('efficiencyValues', {
                id: jo,
                header: (e) => n.jsx(lc, { name: jo, column: e.column }),
                sortingFn: (e, a) => {
                    var t, r;
                    return (
                        ((null == (t = e.getValue('earnedXp')) ? void 0 : t.earnedXp) ?? 0) -
                            ((null == (r = a.getValue('earnedXp')) ? void 0 : r.earnedXp) ?? 0) || s(e, a)
                    );
                },
                cell: (e) => n.jsx(ic, { value: e.getValue().earnedXp ?? 0, className: Ic.numberValue }),
                meta: { column: ec[jo][r], className: gc },
            }),
            Sc.accessor('respawns', {
                id: wo,
                header: (e) => n.jsx(lc, { name: wo, column: e.column }),
                sortingFn: (e, a) => e.getValue('respawns') - a.getValue('respawns') || s(e, a),
                cell: (e) => n.jsx(ic, { value: e.row.original.respawns, showZero: !1, className: Ic.numberValue }),
                meta: { column: ec[wo][r] },
            }),
            Sc.accessor('achievements', {
                id: Io,
                header: (e) => n.jsx(lc, { name: Io, column: e.column }),
                sortingFn: (e, a) => e.getValue('achievements').length - a.getValue('achievements').length || s(e, a),
                cell: (e) => n.jsx(Eo, { achievements: e.getValue() }),
                meta: { column: ec[Io][r], className: vc },
            }),
        ];
    },
    Cc = 'Header_row_e61ae0d9',
    Dc = 'Header_rowDivider_f54d9df6',
    Tc = 'Header_rowDividerImage_19f6e11',
    Ac = 'Header_cell_70aa1da5';
function Vc({ className: e }) {
    const { table: a } = be(),
        t = T();
    return n.jsxs(ve.Header, {
        className: e,
        children: [
            n.jsx(zi, { classNames: { base: Dc, image: Tc } }),
            y(a.getHeaderGroups(), (e, a) =>
                n.jsx(
                    ve.Row,
                    {
                        className: Cc,
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
const Bc = 'SelectedRowTail_selectedRowTail_8abda9c8',
    kc = 'SelectedRowTail_selectedRowTail__hasWidth_6cb87e09',
    Ec = 'SelectedRowTail_selectedRowVerticalLine_c502cc58',
    zc = 'SelectedRowTail_selectedRowTriangle_6f2b6bb3',
    Hc = 'SelectedRowTail_rowDivider_8fbc881',
    Oc = 'SelectedRowTail_rowDivider__bottom_4111cb99',
    Fc = 'SelectedRowTail_rowDividerImage_d11f29d5';
function Gc({ className: e, short: a }) {
    return n.jsxs('div', {
        className: i(Bc, !a && kc, e),
        children: [
            n.jsx(zi, { classNames: { base: Hc, image: Fc } }),
            n.jsx(zi, { classNames: { base: i(Hc, Oc), image: Fc } }),
            n.jsx('div', { className: Ec }),
            n.jsx('div', { className: zc }),
        ],
    });
}
const Xc = 'personal',
    $c = 'personalSquad',
    Lc = 'none',
    Wc = o(function ({ row: e, team: a, rowIndex: t, scrollbarVisible: s }) {
        const { model: r, controls: l } = us(),
            o = T(),
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
                if (m.account.username === e.original.account.username) return Xc;
                return cs(a, m.squadIndex, e.original.squadIndex) === is ? $c : Lc;
            })(),
            f = e.original.account.teamKiller,
            _ = (null == d ? void 0 : d.team) === a && d.username === e.original.account.username,
            p = Te({ args: { databaseID: e.original.databaseId } });
        return n.jsxs(ve.Row, {
            ...(u !== Xc && p),
            onMouseEnter: (e) =>
                o.play('mouse-enter', { target: 'team-efficiency:efficiency-table:body:row', original: e }),
            className: i(
                Ic.tableBodyRow,
                _ && Ic.tableBodyRow__selected,
                u !== Lc && Ic[`tableBodyRow__${u}`],
                f && Ic.tableBodyRow__teamKiller,
            ),
            onClick: c,
            children: [
                n.jsxs('div', {
                    className: Ic.selectedOverlay,
                    children: [
                        n.jsx(zi, { classNames: { base: Ic.selectedOverlayDivider, image: Ic.selectedOverlayImage } }),
                        n.jsx(zi, {
                            classNames: {
                                base: i(Ic.selectedOverlayDivider, Ic.selectedOverlayDivider__bottom),
                                image: Ic.selectedOverlayImage,
                            },
                        }),
                        n.jsx(Gc, {
                            short: s && a === ls,
                            className: i(Ic.selectedRowTail, Ic[`selectedRowTail__${a}`]),
                        }),
                    ],
                }),
                n.jsx(zi, { classNames: { base: Ic.rowDivider, image: Ic.rowDividerImage } }),
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
function Mc({ team: e }) {
    const { table: a } = be(),
        { api: t } = M(),
        s = Ae(),
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
            className: yc,
            children: [
                n.jsx(m.div, {
                    className: wc,
                    style: c,
                    children: n.jsx(K, {
                        classNames: { content: jc },
                        children: n.jsx('div', {
                            ref: l,
                            className: hc,
                            children: y(a.getRowModel().rows, (a, t) =>
                                n.jsx(Wc, { row: a, rowIndex: t, team: e, scrollbarVisible: i }, a.id),
                            ),
                        }),
                    }),
                }),
                n.jsx(W, { classNames: { base: Nc } }),
            ],
        })
    );
}
const Kc = F('TeamEfficiencyTable', bc, { variants: { team: { [ls]: fc, [ns]: _c } } }),
    qc = {
        [Ue.Squad]: vo,
        [Ue.Player]: go,
        [Ue.Rank]: xo,
        [Ue.Damage]: yo,
        [Ue.Frag]: No,
        [Ue.Xp]: jo,
        [Ue.Respawns]: wo,
        [Ue.Medal]: Io,
    },
    Uc = o(({ team: e, data: a, className: t }) => {
        const { model: s, controls: l } = us(),
            i = s.computes.personalInfo(),
            o = s.teamsStatistic.sorting.get(),
            c = r.useMemo(() => [{ id: qc[o.column], desc: o.sortDirection === Ze.Desc }], [o.column, o.sortDirection]),
            d = xe().breakpoint.name,
            m = r.useCallback(
                (e) => {
                    const a = (e instanceof Function ? e(c) : e)[0] ?? { id: xo, desc: !0 };
                    l.teamEfficiency.sort({
                        column: Object.keys(qc).find((e) => qc[e] === a.id) || Ue.Rank,
                        sortDirection: a.desc ? Ze.Desc : Ze.Asc,
                    });
                },
                [c, l.teamEfficiency],
            ),
            u = r.useMemo(() => Pc({ team: e, personalInfo: i, breakpointName: d }), [e, d, i]);
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
                children: n.jsx(Kc, {
                    team: e,
                    className: t,
                    children: n.jsxs(
                        ve,
                        {
                            className: xc,
                            children: [n.jsx(Vc, { className: pc }), n.jsx(L, { children: n.jsx(Mc, { team: e }) })],
                        },
                        d,
                    ),
                }),
            })
        );
    }),
    Zc = 'TeamEfficiency_wrapper_a2a49ce',
    Yc = 'TeamEfficiency_table_5763cf17',
    Jc = 'TeamEfficiency_table__hidden_e8864815',
    Qc = 'TeamEfficiency_details_f087bb8e',
    ed = 'TeamEfficiency_details__visible_eaf91b76',
    ad = F('TeamEfficiency', 'TeamEfficiency_ab8dfa62'),
    td = o(function ({ className: e }) {
        const { model: a } = us(),
            t = a.teamsStatistic.allies.get(),
            s = a.teamsStatistic.enemies.get(),
            r = a.teamsStatistic.selectedRow.get();
        return n.jsx(ad, {
            className: e,
            children: n.jsxs('div', {
                className: Zc,
                children: [
                    n.jsx(bo, { team: ns, className: i(Qc, (null == r ? void 0 : r.team) === ns && ed) }),
                    n.jsx(Uc, { data: t, team: ls, className: i(Yc, (null == r ? void 0 : r.team) === ns && Jc) }),
                    n.jsx(bo, { team: ls, className: i(Qc, (null == r ? void 0 : r.team) === ls && ed) }),
                    n.jsx(Uc, { data: s, team: ns, className: i(Yc, (null == r ? void 0 : r.team) === ls && Jc) }),
                ],
            }),
        });
    }),
    sd = {
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
    rd = F('PostBattle', sd.base),
    ld = F('PostBattleNavigation', sd.navigation);
function nd() {
    const { active: e } = Be();
    return n.jsxs('div', {
        className: sd[`content__${e}`],
        children: [
            n.jsx(ki, { className: i(sd.tab, sd.tab__overview) }),
            n.jsx(td, { className: i(sd.tab, sd.tab__teamScore) }),
            n.jsx(Pn, { className: i(sd.tab, sd.tab__financialReport) }),
        ],
    });
}
const id = o(function () {
    const e = I.resolve('strings'),
        { battleInfoRef: a, navigationRef: t, completedSteps: s } = bs(),
        [r] = u(() => ({ from: { opacity: 0, y: '-10rem' }, ref: t })),
        [l] = u(() => ({ from: { opacity: 0 }, ref: a })),
        { model: o, controls: c } = us(),
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
        n.jsxs(rd, {
            className: i(sd.base, sd[`base__${f}`]),
            children: [
                n.jsx(nd, {}),
                n.jsx(m.div, {
                    style: r,
                    children: n.jsx(ld, {
                        className: !s.has(fs.second) && sd.navigation__disabled,
                        children: n.jsxs(Oe.Switcher, {
                            className: sd.switcher,
                            children: [
                                n.jsx(Oe.Tab, {
                                    tabId: Je.overview,
                                    children: z.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.battleResults'),
                                    ),
                                }),
                                n.jsx(Oe.Tab, {
                                    tabId: Je.teamScore,
                                    children: z.toUpperCase(
                                        e.readOrEmpty('battle_results.battleResult.navigation.teamEfficiency'),
                                    ),
                                }),
                                n.jsx(Oe.Tab, {
                                    tabId: Je.financialReport,
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
                        className: sd.info,
                        style: l,
                        children: n.jsxs(Ns, {
                            children: [
                                n.jsx(Ns.Arena, {
                                    arenaName: d.arenaName,
                                    scenario: d.scenario,
                                    finishReason: d.finishReason,
                                }),
                                n.jsx(Ns.StartTime, {
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
function od() {
    const e = Fe(),
        { size: a } = te({ size: Ge.small }, { large: { size: Ge.medium }, extraLarge: { size: Ge.large } });
    return n.jsx(Oe, {
        theme: 'primary',
        size: a,
        active: aa(e.location),
        onActiveChange: (a) => {
            a in Je ? e.push(ea[a]) : console.error(`Invalid tab ID: ${a}`);
        },
        children: n.jsx(vs, { children: n.jsx(id, {}) }),
    });
}
const cd = Xe({
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
    new $e()
        .add(ms)
        .addWithProps(Le, { soundsOverrides: cd })
        .addWithProps(We, { context: 'model.router' })
        .render(n.jsx(od, {})),
)
    .then(() => Ke(document.getElementById('root')))
    .then(() => qe());
