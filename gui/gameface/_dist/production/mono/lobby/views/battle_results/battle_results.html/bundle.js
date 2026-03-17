import { r as e, w as s, x as a, y as t, j as r, f as l, z as i, A as n, R as o } from '../../../chunks/vendor.js';
import {
    m as c,
    i as d,
    S as m,
    L as u,
    A as _,
    M as b,
    H as g,
    a as p,
    b as h,
    c as v,
    g as x,
    s as f,
    r as N,
    f as j,
    d as y,
    e as T,
    h as S,
    j as w,
    k as I,
    l as P,
    O as C,
    n as A,
    o as E,
    u as D,
    B as F,
    F as k,
    p as $,
    D as V,
    q,
    C as M,
    T as G,
    t as O,
    v as U,
    w as L,
    x as z,
    y as B,
    z as K,
    E as W,
    G as H,
    I as X,
    J as Z,
    K as J,
    N as Q,
    P as Y,
    Q as ee,
    R as se,
    U as ae,
    V as te,
    W as re,
    X as le,
    Y as ie,
    Z as ne,
    _ as oe,
    $ as ce,
    a0 as de,
    a1 as me,
    a2 as ue,
    a3 as _e,
    a4 as be,
    a5 as ge,
    a6 as pe,
    a7 as he,
} from '../../../chunks/lib.js';
import { g as ve, a as xe, b as fe, c as Ne } from '../../../chunks/readResource.js';
import { P as je, s as ye } from '../../../chunks/profit.js';
const Te = 'squad',
    Se = 'player',
    we = 'damage',
    Ie = 'frag',
    Pe = 'xp',
    Ce = 'tank';
var Re = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), e))(Re || {}),
    Ae = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(Ae || {}),
    Ee = ((e) => ((e[(e.DESCENDING = -1)] = 'DESCENDING'), (e[(e.ASCENDING = 1)] = 'ASCENDING'), e))(Ee || {});
const De = (e) => (s) => (a, t) => e.call(null, a, t) * s,
    Fe =
        (...e) =>
        (s, a) => {
            for (let t = 0; t < e.length; t++) {
                const r = e[t].call(null, s, a);
                if (0 !== r) return r;
            }
            return 0;
        },
    ke = (e, s) => {
        const a = e.toUpperCase(),
            t = s.toUpperCase();
        return a === t ? 0 : a > t ? 1 : -1;
    },
    $e = (e) => (s, a) => {
        const t = s[e],
            r = a[e];
        return 'string' == typeof t && 'string' == typeof r
            ? ke(t, r)
            : 'number' == typeof t && 'number' == typeof r
              ? t - r
              : 0;
    };
function Ve(e, s, a) {
    const t = e.parameters.get(s);
    return t
        ? (function (e) {
              return e.paramValueType === Re.Float ? e.value : Math.trunc(e.value);
          })(t)
        : a;
}
const qe = { [Ae.Asc]: Ee.ASCENDING, [Ae.Desc]: Ee.DESCENDING },
    Me = { [g]: 4, [b]: 3, [_]: 2, [u]: 1, [m]: 0 };
function Ge({ userNames: e }, { userNames: s }) {
    return ke(e.userName, s.userName);
}
function Oe(e) {
    return ({ efficiencyValues: s }, { efficiencyValues: a }) => {
        const t = Ve(s, e),
            r = Ve(a, e);
        return void 0 === t || void 0 === r ? 0 : t - r;
    };
}
function Ue(e) {
    const s = $e(e);
    return ({ vehicle: e }, { vehicle: a }) => s(e, a);
}
const Le =
        (e, ...s) =>
        (a, t) => {
            for (let r = 0; r < s.length; r++) {
                const l = e[r] ?? 0,
                    i = (0 !== l ? l : Ee.ASCENDING) * s[r].call(null, a, t);
                if (0 !== i) return i;
            }
            return 0;
        },
    ze = {
        [we]: De(Fe(Oe('damage'), Ge)),
        [Ie]: De(Fe(Oe('frag'), Ge)),
        [Pe]: De(Fe(Oe('xp'), Ge)),
        [Te]: De(
            Fe(
                (function (e) {
                    const s = $e(e);
                    return (e, a) => s(e, a);
                })('squadIndex'),
                Ge,
            ),
        ),
        [Ce]: De(
            Le(
                [0, 0, Ee.DESCENDING, Ee.DESCENDING],
                Ue('tier'),
                function (e, s) {
                    return (function (e, s) {
                        const a = Me[e],
                            t = Me[s];
                        return void 0 === a || void 0 === t
                            ? (console.error(`Unexpected type of vehicle A: ${e} B: ${s}`), 0)
                            : a === t
                              ? 0
                              : a > t
                                ? 1
                                : -1;
                    })(e.vehicle.type, s.vehicle.type);
                },
                Ue('name'),
                Ge,
            ),
        ),
        [Se]: De(Ge),
    };
function Be(e, s, a, t = ze, r = Se) {
    const l = qe[a],
        i = t[s] ?? t[r];
    return i ? c(e, d).sort(i(l)) : (console.error(`Unexpected sortType: ${s}`), e);
}
const Ke = 'allies',
    We = 'enemies',
    He = 'empty',
    Xe = e.createContext(null),
    Ze = () => {
        const s = e.useContext(Xe);
        if (!s)
            throw Error(
                'TeamTable Context not found. Make sure your component is wrapped in TeamTableConfigContext.Provider.',
            );
        return s;
    },
    Je = e.createContext(null),
    Qe = '1',
    Ye = '2',
    [es, ss] = p()(
        ({ observableModel: e }) => {
            const t = {
                    root: e.object(),
                    userStatus: e.object('userStatus'),
                    user: e.object('userNames'),
                    killer: e.object('userStatus.killer'),
                    battleInfo: e.object('battleInfo'),
                    efficiency: e.array('efficiency'),
                    rewards: e.array('rewards'),
                    premiumPlus: e.object('premiumPlus'),
                    detailsColumns: e.array('teamStats.shownValueColumns'),
                    allies: e.array('teamStats.allies'),
                    enemies: e.array('teamStats.enemies'),
                    progressRewards: e.array('progress.rewards'),
                    stageRequiredCounters: e.array('progress.stageRequiredCounters'),
                    progress: e.object('progress'),
                    ...e.primitives(
                        {
                            isSingleTeamPostbattle: 'singleTeamMode',
                            sortingColumn: 'sortType',
                            sortingOrder: 'sortDirection',
                        },
                        'teamStats',
                    ),
                    selectedTeam: s.box(He),
                    selectedPlayerId: s.box(-1),
                    currentTabId: s.box(Qe),
                    animationStatus: s.box(!0),
                },
                r = a(() => {
                    const e = f(t.allies.get(), (e) => void 0 !== e.squadIndex && e.squadIndex > 0),
                        s = f(t.enemies.get(), (e) => void 0 !== e.squadIndex && e.squadIndex > 0);
                    return e || s;
                }),
                l = a(() => {
                    const e = t.sortType.get();
                    return e !== Te || r() ? e : Pe;
                }),
                i = a(() => {
                    const e = j(t.allies.get(), (e) => e.isPersonal);
                    return e ? e.squadIndex : -1;
                }),
                n = a((e, s) => Be(t.enemies.get(), l(), t.sortDirection.get(), e, s)),
                o = a((e, s) => Be(t.allies.get(), l(), t.sortDirection.get(), e, s)),
                d = a(() => {
                    const e = t.selectedTeam.get() === Ke,
                        s = t.selectedPlayerId.get(),
                        a = e ? t.allies.get() : t.enemies.get();
                    return j(a, (e) => e.playerIndex === s);
                }),
                m = a(() => {
                    const e = t.singleTeamMode.get() ? t.enemies.get() : t.allies.get();
                    return j(e, (e) => e.isPersonal);
                }),
                u = a((e) => {
                    const s = d();
                    if (s) {
                        return N(s.detailedStatistics, (e, s) => e + 1 + s.details.length, 0) > e;
                    }
                    return !1;
                }),
                _ = a(
                    () =>
                        c(t.progressRewards.get(), (e) => ({
                            name: e.name,
                            image: S(e),
                            value: e.value,
                            special: e.overlayType,
                            valueType: T(e.name),
                            tooltipArgs: y({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                        })),
                    { equals: v },
                ),
                b = a((e) => {
                    const { previousPoints: s, maximumPoints: a, isInUnlimitedProgression: r } = t.progress.get();
                    let l = a;
                    if (!1 === r) {
                        const s = t.stageRequiredCounters.get(),
                            a = x(s, e - 1),
                            r = x(s, e - 2) ?? 0;
                        void 0 === a || a < 0
                            ? console.warn(
                                  `Progression stage's required points have a value ${a} for stage number ${e}`,
                              )
                            : (l = a - r);
                    }
                    return {
                        previous: { value: l, deltaFrom: s, maxValue: l },
                        fromZeroToEnd: { value: l, deltaFrom: 0, maxValue: l },
                    };
                }),
                g = a(() => {
                    const { maximumPoints: e, currentPoints: s, earnedPoints: a } = t.progress.get();
                    return {
                        current: { value: s, deltaFrom: s - a < 0 ? 0 : s - a, maxValue: e },
                        withoutAnimation: { value: s, deltaFrom: s, maxValue: e },
                    };
                });
            return {
                ...t,
                computes: {
                    personalSquadIndex: i,
                    enemiesSorted: n,
                    alliesSorted: o,
                    selectedPlayer: d,
                    currentPlayer: m,
                    hasDetailedInfoScroll: u,
                    hasSquads: r,
                    activeSortingType: l,
                    progressionValues: g,
                    progressionValuesWithStageMaximum: b,
                    rewards: _,
                },
            };
        },
        ({
            externalModel: e,
            model: {
                currentTabId: s,
                sortType: a,
                sortDirection: t,
                selectedTeam: r,
                selectedPlayerId: l,
                animationStatus: i,
            },
        }) => ({
            closeWindow: e.createCallbackNoArgs('onClose'),
            riseRewards: e.createCallbackNoArgs('premiumPlus.onPremiumXpBonusApplied'),
            updateNextBonusTime: e.createCallback((e) => ({ isUpdate: e }), 'premiumPlus.onNextBonusTimeUpdate'),
            saveStatsSorting: e.createCallback((e, s) => ({ column: e, sortDirection: s }), 'teamStats.onStatsSorted'),
            ...h({
                updateTeamTableSelectedPlayer: (e, s) => {
                    (r.set(e), l.set(s));
                },
                updateTeamTableSorting: (e, s) => {
                    (a.set(e), t.set(s));
                },
                updateCurrentTabId: (e) => {
                    s.set(e);
                },
                setAnimationEnabled: (e) => {
                    i.set(e);
                },
            }),
        }),
    ),
    as = { [Te]: 'platoon', [Ie]: 'kills', [Pe]: 'xp', [Ce]: 'vehicle', [we]: 'damage' },
    ts = [Te, Se, we, Ie, Pe, Ce],
    rs = [Te, Ce, Se],
    ls = 3,
    is = {
        tableWidth: [498, 770],
        fixedCells: { [Te]: [34, 34], [Se]: [178, 273], [Ce]: [142, 283] },
        configurableCells: [144, 180],
        playerCellOffset: 16,
    },
    ns = [w.Large, w.ExtraLarge],
    os = R.images.gui.maps.icons.vehicle,
    cs = (e) => e.toString().padStart(2, '0');
function ds(e) {
    const s = os.c_420x307.$dyn(e.toLowerCase());
    return s ? { backgroundImage: `url(${s})` } : { backgroundImage: `url(${os.c_420x307.default_image()})` };
}
function ms(e, s) {
    const a = os.$dyn(
        (function (e, s) {
            return `${e}_${s}`.replace('-', '_');
        })(s, e),
    );
    return a ? { backgroundImage: `url(${a})` } : { backgroundImage: `url(${os.noImage()})` };
}
function us(e, s) {
    var a, t;
    return _s(
        null == (a = ve(s, !0)) ? void 0 : a.battle_results,
        null == (t = ve(e)) ? void 0 : t.library,
        'battle_results_bg',
    );
}
function _s(e, s, a = '') {
    return a && '' !== a ? ((null == e ? void 0 : e.$dyn(a)) ?? s.$dyn(a)) : null;
}
function bs(e, s = '{minutes}:{seconds}.{milliseconds}', a = 0, t = '-') {
    if (e <= a) return t;
    let r = 10 * Math.round((e * P) / 10);
    const l = Math.trunc(r / (C * P));
    r -= l * (C * P);
    const i = Math.trunc(r / P);
    r -= i * P;
    const n = Math.round(r / 10);
    return I(s, { minutes: cs(l), seconds: cs(i), milliseconds: cs(n) });
}
const gs = e.createContext(void 0);
function ps() {
    const s = e.useContext(gs);
    return (A(void 0 !== s, 'useRace must be used under raceContext.Provider'), s);
}
const hs = 'Background_6fcc2e9b',
    vs = 'Background_base__team_33e27723',
    xs = 'Background_overlay_3abad625',
    fs = 'Background_shine_faa4c143',
    Ns = E.resolve('images'),
    js = t(function () {
        const { model: e } = ss(),
            { position: s, topPlace: a } = ps(),
            { assetsPointer: t, subModeAssetsPointer: i } = e.battleInfo.get(),
            n = e.currentTabId.get(),
            o = `${xe(t, !0)}.battle_results.personal`,
            c = us(t, i);
        return r.jsxs('div', {
            className: l(hs, n === Ye && vs),
            style: { backgroundImage: `url('${c}')` },
            children: [
                n === Ye && r.jsx('div', { className: xs }),
                a &&
                    n === Qe &&
                    r.jsx('div', {
                        className: fs,
                        style: { backgroundImage: `url('${Ns.readOrEmpty(`${o}.bigShine${s}`)}')` },
                    }),
            ],
        });
    }),
    ys = E.resolve('strings'),
    Ts = t(function ({ ...e }) {
        const { size: s } = D({ size: F.sizes.medium }, { large: { size: F.sizes.large } });
        return r.jsx(F, {
            theme: F.themes.primary,
            size: s,
            ...e,
            children: r.jsx(k, { text: ys.readOrEmpty('R.strings.fun_battle_results.continueBtn') }),
        });
    }),
    Ss = 'Footer_f51bab46',
    ws = 'Footer_content_d9781467',
    Is = 'Footer_date_d0687d01',
    Ps = 'Footer_left_4308958a',
    Cs = 'Footer_right_4e012daf',
    Rs = 'Footer_top_38bf7305',
    As = 'Footer_bottom_53b70510',
    Es = 'Footer_dot_b5c004a2',
    Ds = 'Footer_player_9943fab5',
    Fs = 'Footer_button_43641369',
    ks = 'Footer_base__teams_4308958a',
    $s = E.resolve('strings');
function Vs(e, s) {
    return e
        ? $s.readOrEmpty('R.strings.fun_battle_results.resultRace.footerSubtitle.inTop')
        : $s.readOrEmpty(`R.strings.fun_battle_results.resultRace.footerSubtitle.${s}`);
}
const qs = t(function () {
        const { model: e, controls: s } = ss(),
            { topPlace: a } = ps(),
            t = e.battleInfo.get(),
            l = e.currentTabId.get(),
            n = e.computes.currentPlayer();
        return (
            $(s.closeWindow),
            r.jsxs('div', {
                className: i(Ss, l === Ye && ks),
                children: [
                    r.jsxs('div', {
                        className: ws,
                        children: [
                            r.jsxs('div', {
                                className: Ps,
                                children: [
                                    r.jsxs('div', {
                                        className: Rs,
                                        children: [
                                            t.modeName,
                                            r.jsx('div', { className: Es }),
                                            t.arenaName,
                                            r.jsx('div', { className: Es }),
                                            null == n ? void 0 : n.vehicle.name,
                                        ],
                                    }),
                                    r.jsx('div', {
                                        className: As,
                                        children: r.jsx(k, {
                                            text: $s.readOrEmpty(
                                                'R.strings.fun_battle_results.resultRace.footerSubtitle.battleEnded',
                                            ),
                                            params: {
                                                time: r.jsx('div', {
                                                    className: Is,
                                                    children: r.jsx(V, {
                                                        datetime: t.battleStartTime + t.battleDuration,
                                                        format: q.ShortDateTime,
                                                    }),
                                                }),
                                            },
                                        }),
                                    }),
                                ],
                            }),
                            r.jsxs('div', {
                                className: Cs,
                                children: [
                                    t.finishReason && r.jsx('div', { className: Rs, children: t.finishReason }),
                                    r.jsxs('div', {
                                        className: As,
                                        children: [
                                            Vs(a, t.winStatus),
                                            r.jsx('div', { className: Es }),
                                            r.jsx('div', {
                                                className: Ds,
                                                children: r.jsx(M, {
                                                    ...(null == n ? void 0 : n.userNames),
                                                    isKilled: !1,
                                                    isTeamKiller: !1,
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    r.jsx('div', { className: Fs, children: r.jsx(Ts, { onClick: s.closeWindow }) }),
                ],
            })
        );
    }),
    Ms = E.resolve('strings'),
    Gs = t(() => {
        const { model: e } = ss(),
            { subModeAssetsPointer: s } = e.battleInfo.get(),
            a = fe({ assetsPointer: s, isSubMode: !0, poFileName: 'fun_battle_results', path: 'navigation' }),
            t = [
                { id: Qe, label: Ms.readOrEmpty(`${a}.battleResults`) },
                { id: Ye, label: Ms.readOrEmpty(`${a}.teamEfficiency`) },
            ];
        return r.jsx(G.Switcher, {
            children: t.map(({ id: e, label: s }) => r.jsx(G.Tab, { tabId: e, children: r.jsx(O, { text: s }) }, e)),
        });
    }),
    Os = 'LifeStatus_ac2cf2c3',
    Us = 'LifeStatus_killer_cac4dca7',
    Ls = E.resolve('strings'),
    zs = 'R.strings.battle_results.common.vehicleState',
    Bs = ({ player: s }) => {
        const { isLeftBattle: a, deathReason: t, killer: l } = s.userStatus,
            { userName: i, isKilled: n } = s.userNames,
            o = Ls.readOrEmpty(`${zs}.${a && s.isPersonal ? 'prematureLeave' : 'alive'}`);
        return r.jsx('div', {
            className: Os,
            children:
                !a && n
                    ? r.jsxs('div', {
                          className: Us,
                          children: [
                              Ls.readOrEmpty(`${zs}.dead${t}`),
                              l.userName !== i &&
                                  r.jsxs(e.Fragment, {
                                      children: [
                                          r.jsx(U, { text: R.strings.common.common.nbsp() }),
                                          r.jsx(M, { ...l }),
                                      ],
                                  }),
                          ],
                      })
                    : r.jsx('div', { className: Us, children: o }),
        });
    },
    Ks = 'PlayerVehicleInfo_6f34f0a1',
    Ws = 'PlayerVehicleInfo_level_a033807d',
    Hs = 'PlayerVehicleInfo_level__left_5e2bb270',
    Xs = 'PlayerVehicleInfo_type_8a7e430e',
    Zs = 'PlayerVehicleInfo_vehicleName_55830539',
    Js = 'PlayerVehicleInfo_igr_3f08d9b9';
var Qs = ((e) => ((e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT'), e))(Qs || {});
const Ys = (e, s) => {
        const a = e.replace(':', '_').replace(/-/g, '_');
        return {
            maskImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.types.$dyn(a)})`,
            backgroundColor: s,
        };
    },
    ea = e.memo(
        ({
            vehicleLevel: e,
            vehicleType: s,
            vehicleShortName: a,
            userNames: t,
            isPersonal: l = !1,
            isSameSquad: n = !1,
            killed: o = !1,
            isIGR: c = !1,
            alignment: d = 1,
        }) => {
            const { isTeamKiller: m } = t,
                u = L({ isTeamKiller: m, isKilled: o, isPersonal: l, isSameSquad: n }),
                _ = z(e);
            return r.jsxs('div', {
                className: Ks,
                style: { color: u },
                children: [
                    r.jsx('div', { className: i(Ws, 0 === d && Hs), children: _ }),
                    r.jsx('div', { className: Xs, style: Ys(s, u) }),
                    r.jsx('div', { className: Zs, children: a }),
                    c && r.jsx('div', { className: Js }),
                ],
            });
        },
    );
var sa = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
    sa || {},
);
const aa = {
        row: 'StatisticsInfoRow_row_e48b601d',
        row__subgroup: 'StatisticsInfoRow_row__subgroup_a9c1f556',
        separator: 'StatisticsInfoRow_separator_919051ba',
    },
    ta = ({ label: e, value: s, paramValueType: a, isSubgroup: t = !1 }) => {
        const l = c(s, (e) =>
                ((e, s) => {
                    switch (e) {
                        case sa.Integer:
                            return window.systemLocale.getNumberFormat(s, 0);
                        case sa.Float:
                            return window.systemLocale.getRealFormat(s, 0, 2);
                        case sa.Time:
                            return window.systemLocale.getTimeFormat(s, 1);
                        default:
                            return s;
                    }
                })(a, e),
            ).join(' / '),
            n = i(aa.row, t && aa.row__subgroup);
        return r.jsxs('div', {
            className: n,
            children: [
                e,
                r.jsx('span', { className: aa.separator }),
                r.jsx('span', { className: aa.value, children: l }),
            ],
        });
    },
    ra = {},
    la = ({ item: e }) =>
        r.jsxs('div', {
            className: ra.group,
            children: [
                r.jsx(ta, { isSubgroup: !1, ...e }),
                e.details.length > 0 && c(e.details, (e, s) => r.jsx(ta, { isSubgroup: !0, ...e }, s)),
            ],
        }),
    ia = 'StatisticsInfoRows_4ea1e421',
    na = t(() => {
        const { model: e } = ss(),
            s = e.computes.selectedPlayer();
        return r.jsx('div', { className: ia, children: c(s.detailedStatistics, (e, s) => r.jsx(la, { item: e }, s)) });
    }),
    oa = 'StatisticsInfo_eb64394d',
    ca = 'StatisticsInfo_content_488067a0',
    da = t(() => {
        const { model: e } = ss(),
            s = B(),
            a = e.computes.hasDetailedInfoScroll(23);
        return r.jsx('div', {
            className: oa,
            children: a
                ? r.jsx(K.Vertical.Area.Default, { className: ca, api: s, children: r.jsx(na, {}) })
                : r.jsx(na, {}),
        });
    }),
    ma = 'DetailedStats_3607b852',
    ua = 'DetailedStats_header_1b47cff5',
    _a = 'DetailedStats_vehicleInfo_c9968f40',
    ba = 'DetailedStats_playerName_3407b29',
    ga = 'DetailedStats_vehicleIcon_8467dc55',
    pa = 'DetailedStats_playerSummary_851053c5',
    ha = 'DetailedStats_close_5f15f38e',
    va = 'DetailedStats_closeText_4153511a',
    xa = 'DetailedStats_stats_e5faaeef',
    fa = t(() => {
        const { model: e, controls: s } = ss(),
            a = e.computes.personalSquadIndex(),
            t = e.computes.selectedPlayer(),
            { userNames: l, squadIndex: i, isPersonal: n, vehicle: o } = t,
            { isKilled: c } = l,
            { tier: d, type: m, name: u, techName: _, tags: b } = o,
            g = a === i && a > 0,
            p = b.indexOf('premiumIGR') > -1,
            h = () => {
                (H.sound('play'), s.updateTeamTableSelectedPlayer(He, -1));
            };
        return (
            W(X.ESCAPE, h),
            r.jsxs('div', {
                className: ma,
                children: [
                    r.jsxs('div', {
                        className: ua,
                        children: [
                            r.jsx('div', { className: ga, style: ds(_) }),
                            r.jsxs('div', {
                                className: _a,
                                children: [
                                    r.jsx('div', {
                                        className: ba,
                                        children: r.jsx(M, {
                                            ...t.userNames,
                                            isTeamKiller: !1,
                                            isAnonymizerShown: !0,
                                            isKilled: c,
                                            isSameSquad: g,
                                        }),
                                    }),
                                    r.jsxs('div', {
                                        className: pa,
                                        children: [
                                            r.jsx(ea, {
                                                vehicleLevel: d,
                                                vehicleType: m,
                                                vehicleShortName: u,
                                                userNames: l,
                                                alignment: Qs.LEFT,
                                                isIGR: p,
                                                isPersonal: n,
                                                killed: c,
                                            }),
                                            r.jsx(Bs, { player: t }),
                                        ],
                                    }),
                                ],
                            }),
                            r.jsx('div', {
                                className: ha,
                                onClick: h,
                                children: r.jsx('div', {
                                    className: va,
                                    children: R.strings.fun_battle_results.closeBtn(),
                                }),
                            }),
                        ],
                    }),
                    r.jsx('div', { className: xa, children: r.jsx(da, {}) }),
                ],
            })
        );
    }),
    Na = {
        base: 'TeamTable_7973965b',
        hidden: 'TeamTable_hidden_7e320031',
        head: 'TeamTable_head_d503f690',
        body: 'TeamTable_body_976ffc47',
        bodyWrapper: 'TeamTable_bodyWrapper_898ea6ec',
        bodyWrapper__shortened: 'TeamTable_bodyWrapper__shortened_4587e7bb',
        content: 'TeamTable_content_31ae96b3',
        headRow: 'TeamTable_headRow_eb7842b9',
        bodyRow: 'TeamTable_bodyRow_f643f443',
        bodyRow__isFirst: 'TeamTable_bodyRow__isFirst_579fa0dc',
        bodyRow__isActive: 'TeamTable_bodyRow__isActive_40ba5989',
        bodyRow__nonSelectable: 'TeamTable_bodyRow__nonSelectable_40ba5989',
        bodyRow__isKilled: 'TeamTable_bodyRow__isKilled_a1a8f21',
        cell: 'TeamTable_cell_d39a1c9c',
        headCell: 'TeamTable_headCell_591d9f66',
        cell__icon: 'TeamTable_cell__icon_6c06c7d9',
        cell__vehicle: 'TeamTable_cell__vehicle_e2b6abd1',
        headCell__sortDisabled: 'TeamTable_headCell__sortDisabled_c127801c',
        headHover: 'TeamTable_headHover_804bd167',
        headCell__active: 'TeamTable_headCell__active_40ba5989',
        headIcon: 'TeamTable_headIcon_add6e715',
        headDivider: 'TeamTable_headDivider_6ba5350a',
        glow: 'TeamTable_glow_5bf95861',
        activeArrow: 'TeamTable_activeArrow_81a0419c',
        activeArrow__last: 'TeamTable_activeArrow__last_2c45bf3d',
    },
    ja = t(({ alias: e, shortened: s = !1 }) => {
        const { model: a } = ss(),
            t = a.selectedPlayerId.get(),
            l = a.selectedTeam.get() === e,
            { comparatorsMap: n, defaultColumn: o, TableRowComponent: d } = Ze(),
            m = e === Ke ? a.computes.alliesSorted(n, o) : a.computes.enemiesSorted(n, o);
        return r.jsx('div', {
            className: Na.body,
            children: r.jsx('div', {
                className: i(Na.bodyWrapper, s && Na.bodyWrapper__shortened),
                children: c(m, (s, a) =>
                    r.jsx(d, { player: s, selected: l && t === s.playerIndex, alias: e, first: 0 === a }, a),
                ),
            }),
        });
    }),
    ya = t(({ alias: e }) => {
        const { model: s } = ss(),
            a = (e === Ke ? s.allies.get().length : s.enemies.get().length) > 15,
            t = B();
        return r.jsx('div', {
            className: Na.body,
            children: a
                ? r.jsx(K.Vertical.Area.Default, { className: Na.content, api: t, children: r.jsx(ja, { alias: e }) })
                : r.jsx(ja, { alias: e, shortened: !0 }),
        });
    });
function Ta(e, s = is, a = ls) {
    return s.fixedCells[e] ? s.fixedCells[e] : [s.configurableCells[0] / a, s.configurableCells[1] / a];
}
function Sa(e, s = is, a, t = ls) {
    const r = Ta(e, s, t);
    return { width: `${ns.includes(a) ? r[1] : r[0]}rem` };
}
const wa = {
        root: 'ActiveArrow_root_ad9aed6d',
        base: 'ActiveArrow_87750771',
        line: 'ActiveArrow_line_c4e4aa4a',
        arrow: 'ActiveArrow_arrow_90c1aa1d',
        arrow__top: 'ActiveArrow_arrow__top_d5e0eb11',
    },
    Ia = 'top',
    Pa = 'bottom',
    Ca = e.memo(({ direction: e }) =>
        r.jsxs('div', {
            className: wa.base,
            children: [
                r.jsx('div', { className: wa.line }),
                r.jsx('div', { className: i(wa.arrow, wa[`arrow__${e}`]) }),
                r.jsx('div', { className: wa.line }),
            ],
        }),
    ),
    Ra = ({
        className: e,
        children: s,
        onSort: a,
        sortType: t,
        tooltip: l,
        reversed: n = !1,
        active: o = !1,
        last: c = !1,
        sortDisabled: d = !1,
        columnWidthSmall: m = 0,
        columnWidthLarge: u = 0,
    }) => {
        const { mediaSize: _ } = Z();
        return r.jsx(J, {
            ...l,
            children: r.jsxs('div', {
                className: i(
                    Na.headCell,
                    e,
                    o && Na.headCell__active,
                    n && Na.headCell__reverse,
                    d && Na.headCell__sortDisabled,
                ),
                style: { width: `${ns.includes(_) ? u : m}rem` },
                onClick: () => {
                    d || (H.sound('play'), a(t));
                },
                onMouseEnter: () => H.sound('highlight'),
                children: [
                    s,
                    o &&
                        r.jsx('div', {
                            className: i(Na.activeArrow, c && Na.activeArrow__last),
                            children: r.jsx(Ca, { direction: n ? Ia : Pa }),
                        }),
                ],
            }),
        });
    },
    Aa = R.strings.battle_results.team,
    Ea = R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.header;
function Da(e, s) {
    var a;
    const t = `${e}Header`,
        r = (null == (a = null == s ? void 0 : s.team) ? void 0 : a.$dyn(t)) ?? Aa.$dyn(t);
    return { header: null == r ? void 0 : r.$dyn('header'), body: null == r ? void 0 : r.$dyn('body') };
}
const Fa = t(({ isAllies: e = !0, onSort: s }) => {
        var a, t, l;
        const { model: i } = ss(),
            { subModeAssetsPointer: n } = i.battleInfo.get(),
            o = i.detailsColumns.get(),
            c = i.sortDirection.get(),
            d = i.computes.activeSortingType(),
            m = i.singleTeamMode.get(),
            u = i.computes.hasSquads(),
            _ = c === Ae.Asc,
            { dynamicTexts: b } = Ne(null, { poFileName: 'fun_battle_results', assetsPointer: n, isSubMode: !0 }),
            g =
                null == (l = null == (t = null == (a = ve(n, !0)) ? void 0 : a.battle_results) ? void 0 : t.team_table)
                    ? void 0
                    : l.header,
            { columnsOrder: p, headerIconMapping: h, tableCellsConfig: v } = Ze();
        return r.jsx('div', {
            className: Na.head,
            children: r.jsx('div', {
                className: Na.headRow,
                children: p.map((a, t, l) => {
                    const i = rs.findIndex((e) => e === a),
                        n = Q(o, (e) => e === a);
                    if (-1 === i && (-1 === n || void 0 === n)) return;
                    const c = a === Se,
                        p = m ? b.team.singleTeam() : Aa.stats.$dyn(e ? 'ownTeam' : 'enemyTeam'),
                        x = 0 === o.length ? ls : o.length,
                        f = c
                            ? Na.headCell__name
                            : (function (e) {
                                  switch (e) {
                                      case Ce:
                                          return Na.headCell__vehicle;
                                      case Te:
                                          return Na.headCell__squad;
                                      default:
                                          return Na.headCell__icon;
                                  }
                              })(a),
                        N = !c && h[a],
                        j = _s(g, Ea, N),
                        y = Ta(a, v, x);
                    return r.jsxs(
                        Ra,
                        {
                            className: f,
                            active: d === a,
                            reversed: _,
                            last: t === l.length - 1,
                            sortType: a,
                            onSort: s,
                            tooltip: Da(a, b),
                            sortDisabled: a === Te && !u,
                            columnWidthSmall: y[0],
                            columnWidthLarge: y[1],
                            children: [
                                c
                                    ? r.jsx('span', { className: Na.playerName, children: p })
                                    : r.jsx('div', {
                                          className: Na.headIcon,
                                          style: { backgroundImage: `url('${j}')` },
                                      }),
                                r.jsx('div', { className: Na.headHover }),
                                t < l.length - 1 && r.jsx('div', { className: Na.headDivider }),
                            ],
                        },
                        a,
                    );
                }),
            }),
        });
    }),
    ka = t(({ onSort: e, alias: s = Ke }) => {
        const { model: a } = ss(),
            t = a.selectedTeam.get(),
            l = t !== He && s !== t;
        return r.jsx('div', {
            className: l ? Na.hidden : '',
            children: r.jsxs('div', {
                className: Na.base,
                children: [r.jsx(Fa, { isAllies: s === Ke, onSort: e }), r.jsx(ya, { alias: s })],
            }),
        });
    }),
    $a = 'TeamTab_9d7f5559',
    Va = 'TeamTab_teams_740ba01b',
    qa = 'TeamTab_teams__single_3318c8af',
    Ma = 'TeamTab_detailsWrapper_11a9f895',
    Ga = 'TeamTab_detailsWrapper__extra_fc556740',
    Oa = t(() => {
        const { model: s, controls: a } = ss(),
            t = s.sortDirection.get(),
            l = s.computes.activeSortingType(),
            n = s.singleTeamMode.get(),
            o = s.selectedTeam.get(),
            c = o !== He,
            d = o === Ke && s.allies.get().length <= 15,
            { tableCellsConfig: m } = Ze(),
            u = e.useCallback(
                (e) => {
                    if (e === l) {
                        const e = t === Ae.Desc ? Ae.Asc : Ae.Desc;
                        (a.saveStatsSorting(l, e), a.updateTeamTableSorting(l, e));
                    } else (a.saveStatsSorting(e, Ae.Desc), a.updateTeamTableSorting(e, Ae.Desc));
                },
                [t, l, a],
            );
        return r.jsx('div', {
            className: $a,
            style: { '--tableWidthSmall': `${m.tableWidth[0]}rem`, '--tableWidthLarge': `${m.tableWidth[1]}rem` },
            children: r.jsxs('div', {
                className: i(Va, n && qa),
                children: [
                    r.jsx(ka, { alias: n ? We : Ke, onSort: u }),
                    c && r.jsx('div', { className: i(Ma, d && Ga), children: r.jsx(fa, {}) }),
                    !n && r.jsx(ka, { alias: We, onSort: u }),
                ],
            }),
        });
    }),
    Ua = 'finishTime',
    La = 'finishPosition';
function za(e) {
    return ({ efficiencyValues: s }, { efficiencyValues: a }) => {
        const t = Ve(s, e),
            r = Ve(a, e);
        if (void 0 === t || void 0 === r) return 0;
        return (0 === t ? Number.MAX_SAFE_INTEGER : t) - (0 === r ? Number.MAX_SAFE_INTEGER : r);
    };
}
const Ba = [Te, La, Se, Ua, Ie, Ce],
    Ka = { ...as, [La]: 'finishPosition', [Ua]: 'finishTime' },
    Wa = {
        ...ze,
        [La]: De(Le([0, Ee.DESCENDING, 0], za('finishPosition'), Oe('checkpoints'), Ge)),
        [Ua]: De(Le([0, Ee.DESCENDING, 0], za('finishTime'), Oe('checkpoints'), Ge)),
    },
    Ha = {
        freezed: !1,
        withStack: !1,
        type: Y.Growing,
        delta: { duration: 2e3, delay: 100 },
        line: { duration: 2e3, delay: 100 },
    },
    Xa = 'Rewards_a1e37c96',
    Za = 'Rewards_reward_36fbe6b0',
    Ja = 'Rewards_checkmark_4cbfb56a',
    Qa = 'Rewards_item_405577a5',
    Ya = 'Rewards_image_74754faa',
    et = ({
        data: s,
        size: a = ee.Big,
        count: t,
        classMix: l,
        rewardItemClassMix: n,
        boxRewardTooltip: o,
        boxRewardValue: c,
    }) => {
        const d = e.useMemo(
                () => (t && t < s.length ? `R.images.gui.maps.icons.quests.bonuses.${a}.default` : ''),
                [t, s.length, a],
            ),
            m = c || se(R.strings.tooltips.quests.awards.additional.bottom(), { count: s.length - (t || 0) }),
            u = i(Xa, l),
            _ = i(Za, n);
        return r.jsx('div', {
            className: u,
            children: d
                ? r.jsxs(r.Fragment, {
                      children: [
                          s
                              .slice(0, t)
                              .map((e, s) =>
                                  r.jsxs(
                                      'div',
                                      {
                                          className: _,
                                          children: [r.jsx(ae, { size: a, ...e }), r.jsx('div', { className: Ja })],
                                      },
                                      s,
                                  ),
                              ),
                          r.jsxs('div', {
                              className: _,
                              children: [
                                  r.jsx(ae, {
                                      name: 'more',
                                      image: d,
                                      size: a,
                                      value: m,
                                      tooltipArgs: o,
                                      className: Qa,
                                      classNames: { image: Ya },
                                  }),
                                  r.jsx('div', { className: Ja }),
                              ],
                          }),
                      ],
                  })
                : s.map((e, s) =>
                      r.jsxs(
                          'div',
                          { className: _, children: [r.jsx(ae, { size: a, ...e }), r.jsx('div', { className: Ja })] },
                          s,
                      ),
                  ),
        });
    },
    st = {
        base: 'Progress_46abf1c9',
        title: 'Progress_title_a730a8ff',
        description: 'Progress_description_f6a90e07',
        bar: 'Progress_bar_eeecd640',
        counter: 'Progress_counter_841fbc89',
        slash: 'Progress_slash_2c5daf65',
        value: 'Progress_value_4851965d',
        total: 'Progress_total_312110e0',
        footer: 'Progress_footer_483cab9a',
        rewards: 'Progress_rewards_47548fa3',
        header: 'Progress_header_4a424b58',
    },
    at = E.resolve('strings'),
    tt = t(function () {
        const { model: s, controls: a } = ss(),
            t = s.progress.get(),
            l = t.currentStage !== t.previousStage,
            i = l
                ? s.computes.progressionValuesWithStageMaximum(t.previousStage).previous
                : s.computes.progressionValues().current,
            o = te(),
            c = s.animationStatus.get(),
            [d, m] = e.useState(c ? i : s.computes.progressionValues().withoutAnimation),
            [u, _] = e.useState(l ? t.previousStage : t.currentStage);
        return (
            e.useEffect(() => {
                if ((c && H.sound('ev_fep_pb_start'), o)) return;
                return n(() => {
                    u < t.currentStage
                        ? m(s.computes.progressionValuesWithStageMaximum(u).fromZeroToEnd)
                        : m(s.computes.progressionValues().current);
                });
            }, [t.currentStage, s.computes, u, c, o]),
            r.jsxs('div', {
                className: st.base,
                children: [
                    r.jsxs('div', {
                        className: st.header,
                        children: [
                            r.jsx('div', {
                                className: st.title,
                                children: r.jsx(re, {
                                    text: at.readOrEmpty(
                                        'R.strings.fun_battle_results.progress.' +
                                            (t.isInUnlimitedProgression ? 'unlimitedProgression.title' : 'title'),
                                    ),
                                    binding: {
                                        modeName: at.readOrEmpty(
                                            fe({ assetsPointer: t.assetsPointer, path: 'userName' }),
                                        ),
                                        done: c ? u : t.currentStage,
                                        total: t.isInUnlimitedProgression ? '' : t.maximumStage,
                                    },
                                }),
                            }),
                            r.jsx('div', { className: st.description, children: t.description }),
                        ],
                    }),
                    r.jsx('div', {
                        className: st.bar,
                        children: r.jsx(le, {
                            animationSettings: Ha,
                            size: ie.Default,
                            deltaFrom: d.deltaFrom,
                            value: d.value,
                            maxValue: d.maxValue,
                            additionalKey: u,
                            onChangeAnimationState: function (e) {
                                e === ne.End &&
                                    (H.sound('ev_fep_pb_stop'),
                                    u < t.currentStage ? _(u + 1) : a.setAnimationEnabled(!1));
                            },
                        }),
                    }),
                    r.jsxs('div', {
                        className: st.footer,
                        children: [
                            r.jsxs('div', {
                                className: st.counter,
                                children: [
                                    r.jsx('div', { className: st.currentCount, children: d.value }),
                                    r.jsx('div', {
                                        className: st.slash,
                                        children: r.jsx(U, { text: R.strings.common.common.slash() }),
                                    }),
                                    r.jsx('div', { className: st.total, children: d.maxValue }),
                                ],
                            }),
                            r.jsx(et, {
                                classMix: st.rewards,
                                data: s.computes.rewards(),
                                size: ee.Small,
                                count: s.computes.rewards().length > 4 ? 3 : void 0,
                                boxRewardTooltip: {
                                    contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                    args: { showCount: 4 },
                                },
                            }),
                            r.jsx('div', {
                                className: st.value,
                                children:
                                    t.earnedPoints > 0
                                        ? se(R.strings.common.plusValue(), { value: t.earnedPoints })
                                        : t.earnedPoints,
                            }),
                        ],
                    }),
                ],
            })
        );
    });
var rt = ((e) => (
    (e[(e.Integer = 0)] = 'Integer'),
    (e[(e.Time = 1)] = 'Time'),
    (e[(e.Non_Negative_Integer = 2)] = 'Non_Negative_Integer'),
    e
))(rt || {});
const lt = 'StatItem_4c88a770',
    it = 'StatItem_statImage_916e4aa0',
    nt = 'StatItem_statText_dd3996ee',
    ot = 'StatItem_titleText_a4ec9dcb',
    ct = 'StatItem_text_501ab7da',
    dt = R.images.fun_random.gui.maps.icons.feature.battle_results.stat_list.big;
function mt(e, s, a, t) {
    switch (a) {
        case rt.Integer:
            return window.systemLocale.getNumberFormat(s, 0);
        case rt.Non_Negative_Integer:
            return s > 0 ? window.systemLocale.getNumberFormat(s, 0) : t.empty();
        case rt.Time:
            return bs(s, t.timeFormat(), 0, t.empty());
        default:
            return s;
    }
}
const ut = ({ paramType: e, value: s, valueType: a, assetsPointer: t }) => {
        var l, i;
        const { staticTexts: n, dynamicTexts: o } = Ne('efficiency', {
                poFileName: 'fun_battle_results',
                assetsPointer: t,
                isSubMode: !0,
            }),
            c = null == (i = null == (l = ve(t, !0).battle_results) ? void 0 : l.stat_list) ? void 0 : i.big;
        return r.jsx(oe, {
            contentId: R.views.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            args: { paramType: e },
            children: r.jsxs('div', {
                className: lt,
                children: [
                    r.jsx('div', { className: it, style: { backgroundImage: `url(${_s(c, dt, e)})` } }),
                    r.jsx('div', { className: nt, children: mt(0, s, a, n) }),
                    r.jsx('div', { className: ot, children: r.jsx(U, { classMix: ct, text: _s(o, n, e) }) }),
                ],
            }),
        });
    },
    _t = 'StatList_d1b2121c',
    bt = 'StatList_item_6d8b38b0',
    gt = t(() => {
        const { model: e } = ss(),
            s = e.efficiency.get(),
            { subModeAssetsPointer: a } = e.battleInfo.get();
        return r.jsx('div', {
            className: _t,
            children: c(s, (e, s) =>
                r.jsx('div', { className: bt, children: r.jsx(ut, { ...e, assetsPointer: a }) }, s),
            ),
        });
    }),
    pt = {
        root: 'TopPlace_root_aeac1b2b',
        base: 'TopPlace_b5160de',
        ribbon: 'TopPlace_ribbon_b2ccd440',
        position: 'TopPlace_position_f43b6154',
        subtitle: 'TopPlace_subtitle_67c35a31',
        positionOverlay: 'TopPlace_positionOverlay_71026f03',
        subtitleOverlay: 'TopPlace_subtitleOverlay_16732cb0',
        base__place1: 'TopPlace_base__place1_aeac1b2b',
        gradientBase: 'TopPlace_gradientBase_c893527b',
        base__place2: 'TopPlace_base__place2_aeac1b2b',
        base__place3: 'TopPlace_base__place3_aeac1b2b',
        gradientOverlay: 'TopPlace_gradientOverlay_64b14dc3',
        shine: 'TopPlace_shine_95f54b64',
    },
    ht = E.resolve('images'),
    vt = E.resolve('strings'),
    xt = t(function () {
        const { model: e } = ss(),
            { assetsPointer: s } = e.battleInfo.get(),
            { position: a } = ps(),
            t = vt.readOrEmpty('R.strings.fun_battle_results.resultRace.battleStatus.inTop'),
            l = `${xe(s, !0)}.battle_results.personal`;
        return r.jsxs('div', {
            className: i(pt.base, pt[`base__place${a}`]),
            children: [
                r.jsx('div', {
                    className: pt.ribbon,
                    style: { backgroundImage: `url(${ht.readOrEmpty(`${l}.wreath${a}`)})` },
                }),
                r.jsx('div', { className: i(pt.position, pt.gradientBase), children: a }),
                r.jsx('div', { className: i(pt.position, pt.positionOverlay, pt.gradientOverlay), children: a }),
                r.jsx('div', { className: i(pt.subtitle, pt.gradientBase), children: t }),
                r.jsx('div', { className: i(pt.subtitle, pt.subtitleOverlay, pt.gradientOverlay), children: t }),
                r.jsx('div', {
                    className: pt.shine,
                    style: { backgroundImage: `url(${ht.readOrEmpty(`${l}.shineLine${a}`)})` },
                }),
            ],
        });
    }),
    ft = 'PersonalTab_76def6be',
    Nt = 'PersonalTab_content_33af9',
    jt = 'PersonalTab_topPlace_49073c3d',
    yt = 'PersonalTab_header_99c46a82',
    Tt = 'PersonalTab_statistics_e08ea9ac',
    St = 'PersonalTab_progress_644ac635',
    wt = 'PersonalTab_title_33c9b722',
    It = E.resolve('strings'),
    Pt = E.resolve('images'),
    Ct = t(function () {
        const { model: e } = ss(),
            { topPlace: s } = ps(),
            a = e.battleInfo.get(),
            t = e.efficiency.get(),
            { hasProgress: l } = e.progress.get(),
            i = Pt.readOrEmpty(`${xe(a.assetsPointer, !0)}.battle_results.personal.mask`);
        return r.jsx('div', {
            className: ft,
            children: r.jsxs('div', {
                className: Nt,
                children: [
                    s
                        ? r.jsx('div', { className: jt, children: r.jsx(xt, {}) })
                        : r.jsx('div', {
                              className: yt,
                              children: r.jsx(k, {
                                  text: It.readOrEmpty(
                                      `R.strings.fun_battle_results.resultRace.battleStatus.${a.winStatus}`,
                                  ),
                                  className: wt,
                                  style: { maskImage: `url(${i})` },
                              }),
                          }),
                    t.length >= 3 && r.jsx('div', { className: Tt, children: r.jsx(gt, {}) }),
                    l && r.jsx('div', { className: St, children: r.jsx(tt, {}) }),
                ],
            }),
        });
    }),
    Rt = 'TableRendererSquad_13d7a80b',
    At = 'TableRendererSquad_base__highlighted_28f558d3',
    Et = ({ squadIndex: e, currentSquadIndex: s }) => r.jsx('div', { className: i(Rt, s === e && At), children: e }),
    Dt = 'TableRendererVehicleInfo_7ccead71',
    Ft = 'TableRendererVehicleInfo_vehicleImage_1b8490ec',
    kt = 'TableRendererVehicleInfo_vehicleImage__isKilled_d9be918a',
    $t = ({ vehicle: e, userNames: s, isPersonal: a = !1, isSameSquad: t = !1, killed: l = !1 }) => {
        const { techName: n, name: o, tier: c, type: d, nation: m, tags: u } = e,
            _ = u.indexOf('premiumIGR') > -1;
        return r.jsxs('div', {
            className: Dt,
            children: [
                r.jsx('div', { className: i(Ft, l && kt), style: ms(n, m) }),
                r.jsx(ea, {
                    vehicleLevel: c,
                    vehicleType: d,
                    vehicleShortName: o,
                    userNames: s,
                    isPersonal: a,
                    isSameSquad: t,
                    isIGR: _,
                    killed: l,
                }),
            ],
        });
    },
    Vt = {
        root: 'ActiveGlow_root_d4e7590f',
        base: 'ActiveGlow_e7257611',
        base__active: 'ActiveGlow_base__active_f573add8',
        activeGlow: 'ActiveGlow_activeGlow_5a648f5d',
        activeGlow__left: 'ActiveGlow_activeGlow__left_9977f203',
        activeGlow__right: 'ActiveGlow_activeGlow__right_de1a4cc8',
    },
    qt = 'right',
    Mt = 'left',
    Gt = ({ position: e = Mt, isActive: s = !1 }) =>
        r.jsx('div', {
            className: i(Vt.base, s && Vt.base__active),
            children: r.jsx('div', { className: i(Vt.activeGlow, Vt[`activeGlow__${e}`]) }),
        }),
    Ot = ({ userNames: e, isPersonal: s, isKilled: a, isSameSquad: t, cellsConfig: l }) => {
        const { mediaSize: i } = Z(),
            n = Ta(Se, l),
            o = ns.includes(i) ? n[1] : n[0];
        return r.jsx('div', {
            className: Na.cell,
            style: { width: `${o}rem` },
            children: r.jsx('div', {
                style: { width: o - l.playerCellOffset + 'rem', marginLeft: `${l.playerCellOffset}rem` },
                children: r.jsx(M, { ...e, isAnonymizerShown: s, isPersonal: s, isKilled: a, isSameSquad: t }),
            }),
        });
    },
    Ut = ({ baseStyles: e, columnName: s, value: a, columnsCount: t, cellsConfig: l }) => {
        const { mediaSize: i } = Z();
        return r.jsx('div', {
            className: e,
            style: Sa(s, l, i, t),
            children: r.jsx('div', { className: Na.value, children: a }),
        });
    },
    Lt = E.resolve('strings'),
    zt = E.resolve('sounds'),
    Bt = t(function ({ player: e, selected: s, alias: a, first: t = !1 }) {
        const { model: i, controls: n } = ss(),
            o = i.selectedPlayerId.get(),
            c = i.computes.personalSquadIndex(),
            d = i.detailsColumns.get(),
            m = Ve(e.efficiencyValues, 'finishPosition', 0),
            { vehicleCD: u } = e.vehicle,
            { isKilled: _, isTeamKiller: b } = e.userNames,
            g = m <= 0,
            p = c === e.squadIndex && c > 0,
            h = i.singleTeamMode.get(),
            { mediaSize: v } = Z(),
            { tableCellsConfig: x } = Ze(),
            f = 0 === d.length ? ls : d.length;
        const N = L({ isTeamKiller: b, isKilled: g, isPersonal: e.isPersonal, isSameSquad: p });
        return r.jsx(ce, {
            args: { databaseID: e.databaseID, vehicleCD: u },
            children: r.jsxs('div', {
                className: l(
                    Na.bodyRow,
                    s && Na.bodyRow__isActive,
                    h && Na.bodyRow__nonSelectable,
                    t && Na.bodyRow__isFirst,
                    _ && Na.bodyRow__isKilled,
                ),
                style: { color: N },
                onClick: function () {
                    if (h) return;
                    zt.play('yes1');
                    const s = o === e.playerIndex;
                    n.updateTeamTableSelectedPlayer(s ? He : a, s ? -1 : e.playerIndex);
                },
                onMouseEnter: function () {
                    h || zt.play('highlight');
                },
                children: [
                    Ba.map((s, a) => {
                        const t = rs.includes(s),
                            i = de(d, s);
                        if (t || i)
                            switch (s) {
                                case Te:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: l(Na.cell, Na.cell__icon),
                                            style: Sa(Te, x, v),
                                            children:
                                                e.squadIndex > 0 &&
                                                r.jsx(Et, { squadIndex: e.squadIndex, currentSquadIndex: c }),
                                        },
                                        a,
                                    );
                                case Ce:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: l(Na.cell, Na.cell__vehicle),
                                            style: Sa(Ce, x, v),
                                            children: r.jsx($t, { ...e, isSameSquad: p, killed: g }),
                                        },
                                        a,
                                    );
                                case Se:
                                    return r.jsx(
                                        Ot,
                                        {
                                            userNames: e.userNames,
                                            isPersonal: e.isPersonal,
                                            isKilled: g,
                                            isSameSquad: p,
                                            cellsConfig: x,
                                        },
                                        a,
                                    );
                                case Ua:
                                    return r.jsx(
                                        Ut,
                                        {
                                            columnName: s,
                                            baseStyles: l(Na.cell, Na.cell__icon),
                                            value: bs(
                                                Ve(e.efficiencyValues, 'finishTime') ?? 0,
                                                Lt.readOrEmpty('R.strings.fun_battle_results.team.format.finishTime'),
                                                0,
                                                Lt.readOrEmpty('R.strings.fun_battle_results.team.empty.finishTime'),
                                            ),
                                            columnsCount: f,
                                            cellsConfig: x,
                                        },
                                        a,
                                    );
                                case La:
                                    return r.jsx(
                                        Ut,
                                        {
                                            columnName: s,
                                            baseStyles: l(Na.cell, Na.cell__icon),
                                            value: m > 0 ? m : '',
                                            columnsCount: f,
                                            cellsConfig: x,
                                        },
                                        a,
                                    );
                                default:
                                    return r.jsx(
                                        Ut,
                                        {
                                            columnName: s,
                                            baseStyles: l(Na.cell, Na.cell__icon),
                                            value: Ve(e.efficiencyValues, s, ''),
                                            columnsCount: f,
                                            cellsConfig: x,
                                        },
                                        a,
                                    );
                            }
                    }),
                    r.jsx('div', {
                        className: Na.glow,
                        children: r.jsx(Gt, { position: a === We ? Mt : qt, isActive: s }),
                    }),
                ],
            }),
        });
    }),
    Kt = {
        comparatorsMap: Wa,
        defaultColumn: Ua,
        columnsOrder: Ba,
        headerIconMapping: Ka,
        TableRowComponent: Bt,
        tableCellsConfig: is,
    };
function Wt() {
    return r.jsx(G.Content, {
        children: (e) => {
            switch (e) {
                case Qe:
                    return r.jsx(Ct, {});
                case Ye:
                    return r.jsx(Xe.Provider, { value: Kt, children: r.jsx(Oa, {}) });
                default:
                    return (console.error('Unreachable branch in tabs'), null);
            }
        },
    });
}
const Ht = t(function () {
        const { model: e, controls: s } = ss(),
            a = e.currentTabId.get(),
            t = D({ size: ue.small }, { large: { size: ue.medium }, extraLarge: { size: ue.large } });
        return r.jsxs(G, {
            active: a,
            theme: me.primary,
            size: t.size,
            onActiveChange: (e) => {
                (s.updateCurrentTabId(e), s.updateNextBonusTime(e === Qe));
            },
            children: [r.jsx(Gs, {}), r.jsx(Wt, {})],
        });
    }),
    Xt = 'Race_73cde25e',
    Zt = 'Race_wrapper_ced7b360',
    Jt = 'Race_footer_5621ab7e',
    Qt = t(function () {
        const { model: s, controls: a } = ss(),
            { closeWindow: t } = a,
            l = s.battleInfo.get(),
            i = s.computes.currentPlayer(),
            n = i ? Ve(null == i ? void 0 : i.efficiencyValues, 'finishPosition', 0) : 0,
            o = 'finished' === l.winStatus && n <= 3,
            c = e.useMemo(() => ({ position: n, topPlace: o }), [n, o]);
        return (
            $(t),
            r.jsx(gs.Provider, {
                value: c,
                children: r.jsxs('div', {
                    className: Xt,
                    children: [
                        r.jsx(js, {}),
                        r.jsxs('div', {
                            className: Zt,
                            children: [r.jsx(Ht, {}), r.jsx('div', { className: Jt, children: r.jsx(qs, {}) })],
                        }),
                    ],
                }),
            })
        );
    }),
    Yt = 'Footer_f51bab46',
    er = 'Footer_content_d9781467',
    sr = 'Footer_battleStatus_c26aefc7',
    ar = 'Footer_date_2b3cc51d',
    tr = 'Footer_left_4308958a',
    rr = 'Footer_right_4e012daf',
    lr = 'Footer_top_eae2c791',
    ir = 'Footer_bottom_6191fafd',
    nr = 'Footer_player_9943fab5',
    or = 'Footer_killer_7b5d6a6a',
    cr = 'Footer_dot_6bee0c4e',
    dr = 'Footer_button_43641369',
    mr = 'Footer_base__teams_4308958a',
    ur = E.resolve('strings'),
    _r = E.resolve('intl'),
    br = 'R.strings.battle_results.common.vehicleState',
    gr = t(function () {
        const { model: e, controls: s } = ss(),
            { closeWindow: a } = s,
            t = e.currentTabId.get() === Ye,
            {
                subModeAssetsPointer: l,
                arenaName: n,
                battleStartTime: o,
                battleDuration: c,
                finishReason: d,
            } = e.battleInfo.get(),
            { deathReason: m, isLeftBattle: u } = e.userStatus.get(),
            _ = e.user.get(),
            b = e.killer.get(),
            g = !u && _.isKilled;
        return (
            $(a),
            r.jsxs('div', {
                className: i(Yt, t && mr),
                children: [
                    r.jsxs('div', {
                        className: er,
                        children: [
                            r.jsxs('div', {
                                className: tr,
                                children: [
                                    r.jsxs('div', {
                                        className: lr,
                                        children: [
                                            ur.readOrEmpty(
                                                fe({ assetsPointer: l, isSubMode: !0, path: 'capsUserName' }),
                                            ),
                                            r.jsx('div', { className: cr }),
                                            window.systemLocale.toUpperCase(n),
                                        ],
                                    }),
                                    r.jsxs('div', {
                                        className: ir,
                                        children: [
                                            r.jsx('div', {
                                                className: sr,
                                                children: ur.readOrEmpty('R.strings.fun_battle_results.finish'),
                                            }),
                                            r.jsx('div', {
                                                className: ar,
                                                children: r.jsx(V, { datetime: o + c, format: q.ShortDateTime }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.jsxs('div', {
                                className: rr,
                                children: [
                                    d && r.jsx('div', { className: lr, children: _r.toUpperCase(d) }),
                                    r.jsxs('div', {
                                        className: ir,
                                        children: [
                                            g
                                                ? r.jsxs('div', {
                                                      className: or,
                                                      children: [
                                                          ur.readOrEmpty(`${br}.dead${m}`),
                                                          b.userName !== _.userName &&
                                                              r.jsxs(r.Fragment, {
                                                                  children: [
                                                                      r.jsx(k, {
                                                                          text: R.strings.common.common.nbsp(),
                                                                          upgradeLegacy: !0,
                                                                      }),
                                                                      r.jsx(M, { ...b }),
                                                                  ],
                                                              }),
                                                      ],
                                                  })
                                                : r.jsx('div', {
                                                      className: or,
                                                      children: ur.readOrEmpty(
                                                          `${br}.${u ? 'prematureLeave' : 'alive'}`,
                                                      ),
                                                  }),
                                            r.jsx('div', { className: cr }),
                                            r.jsx('div', { className: nr, children: r.jsx(M, { ..._ }) }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    r.jsx('div', { className: dr, children: r.jsx(Ts, { onClick: a }) }),
                ],
            })
        );
    }),
    pr = 'Reward_75ac811a',
    hr = ({ type: e, value: s }) => {
        const a = Z();
        return r.jsx(oe, {
            contentId: R.views.fun_random.mono.lobby.tooltips.battle_results_economic_tooltip('resId'),
            args: { currencyType: e },
            children: r.jsx('div', {
                className: pr,
                children: r.jsx(je, {
                    type: e,
                    value: s,
                    size: [w.Large, w.ExtraLarge].includes(a.mediaSize) ? ye.large : ye.big,
                }),
            }),
        });
    },
    vr = { base: 'RewardsList_55dd2b32' },
    xr = t(() => {
        const { model: e } = ss(),
            s = e.rewards.get();
        return r.jsx('div', {
            className: vr.base,
            children: c(s, (e, s) => r.jsx('div', { className: vr.item, children: r.jsx(hr, { ...e }) }, s)),
        });
    });
var fr = ((e) => (
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
))(fr || {});
const Nr = 'Upgrade_2e7e2718',
    jr = 'Upgrade_base__column_1622ced3',
    yr = 'Upgrade_button_91e54d61',
    Tr = 'Upgrade_button__cursor_75e0f40',
    Sr = 'Upgrade_content_edb0dfb3',
    wr = 'Upgrade_content__normal_65496994',
    Ir = 'Upgrade_defaultState_4bc6295c',
    Pr = 'Upgrade_state_df1359d',
    Cr = 'Upgrade_state__timer_d790c44d',
    Rr = 'Upgrade_icon_72093064',
    Ar = 'Upgrade_icon__attention_8300ebb1',
    Er = 'Upgrade_icon__timer_c71ba0d1',
    Dr = 'Upgrade_icon__information_77b3acf5',
    Fr = 'Upgrade_xpIcon_f7fac657',
    kr = 'Upgrade_usesLeft_2492d3ad',
    $r = 'Upgrade_applied_17432717',
    Vr = 'Upgrade_timerWrapper_f8112dfa',
    qr = 'Upgrade_timerText_2448f58e',
    Mr = 'Upgrade_timer_14e1c1e7',
    Gr = 'Upgrade_error_d3f6c96d',
    Or = 'Upgrade_accepter_19aae422',
    Ur = 'Upgrade_devider_69f53309',
    Lr = 'Upgrade_points_df43930d',
    zr = 'Upgrade_highlight_76562a3b',
    Br = 'Upgrade_flash_2383c62e',
    Kr = 'Upgrade_multiplier_9c357f74';
var Wr,
    Hr =
        (((Wr = Hr || {})[(Wr.IsNotVictory = fr.IsNotVictory)] = 'IsNotVictory'),
        (Wr[(Wr.DeprecatedResults = fr.DeprecatedResults)] = 'DeprecatedResults'),
        (Wr[(Wr.NoVehicle = fr.NoVehicle)] = 'NoVehicle'),
        (Wr[(Wr.NoCrew = fr.NoCrew)] = 'NoCrew'),
        (Wr[(Wr.FasterEducationCrewNotActive = fr.FasterEducationCrewNotActive)] = 'FasterEducationCrewNotActive'),
        (Wr[(Wr.FasterEducationCrewActive = fr.FasterEducationCrewActive)] = 'FasterEducationCrewActive'),
        Wr);
const Xr = R.strings.fun_battle_results.ribbon,
    Zr = [fr.IsApplied, fr.NotApplyingError, fr.IsNotVictory],
    Jr = E.resolve('intl'),
    Qr = [fr.IsApplied, fr.NoRestriction],
    Yr = t(() => {
        const { model: e, controls: s } = ss(),
            {
                nextBonusTime: a,
                xpDiff: t,
                restriction: l,
                bonusMultiplier: n,
                leftBonusCount: c,
                isUndefinedLeftBonusCount: d,
            } = e.premiumPlus.get(),
            m = !Zr.includes(l),
            u = Qr.includes(l),
            _ = l === fr.IsNotVictory,
            b = l === fr.NoRestriction && (c > 0 || d),
            g = () => {
                b && s.riseRewards();
            };
        return r.jsxs('div', {
            className: i(Nr, b && jr),
            children: [
                r.jsx('div', { className: zr }),
                b &&
                    r.jsxs(o.Fragment, {
                        children: [
                            r.jsx('div', { className: Br }),
                            r.jsx('div', {
                                className: Kr,
                                style: {
                                    backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.ribbon.multiplaers.$dyn('x' + String(n))})`,
                                },
                            }),
                        ],
                    }),
                a > 0 && !_
                    ? r.jsxs('div', {
                          className: Vr,
                          children: [
                              r.jsx('div', { className: qr, children: Xr.timeLeft() }),
                              r.jsxs('div', {
                                  className: i(Pr, Cr),
                                  children: [
                                      r.jsx('div', { className: i(Rr, Er) }),
                                      r.jsx(_e, {
                                          startingSeconds: a,
                                          refreshRate: 1,
                                          targetTime: 0,
                                          hourFormat: '%HH:%MM:%SS',
                                          className: Mr,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : r.jsx(o.Fragment, {
                          children: (() => {
                              switch (l) {
                                  case fr.NotApplyingError:
                                      return r.jsxs('div', {
                                          className: Gr,
                                          children: [
                                              r.jsx('div', { className: i(Rr, Ar) }),
                                              r.jsx('span', { children: Xr.errorState() }),
                                          ],
                                      });
                                  case fr.IsApplied:
                                      return r.jsxs(o.Fragment, {
                                          children: [
                                              r.jsx('div', { className: Or }),
                                              r.jsx('div', { className: $r, children: Xr.applied() }),
                                          ],
                                      });
                                  case fr.NoRestriction:
                                      return r.jsx('div', {
                                          className: i(yr, m && Tr),
                                          onClick: g,
                                          children: r.jsx('div', {
                                              className: i(Sr, wr),
                                              children: r.jsx(U, {
                                                  text: Xr.expBonus(),
                                                  classMix: Ir,
                                                  binding: {
                                                      count: Jr.formatNumber('integral', t),
                                                      icon: r.jsx('img', {
                                                          className: Fr,
                                                          src: 'R.images.gui.maps.icons.library.XpIcon_1',
                                                          alt: 'bubble',
                                                      }),
                                                  },
                                              }),
                                          }),
                                      });
                                  default:
                                      return r.jsxs('div', {
                                          className: Gr,
                                          children: [
                                              r.jsx('div', { className: i(Rr, Dr) }),
                                              r.jsx('span', {
                                                  children: R.strings.fun_battle_results.premiumBonus.$dyn(Hr[l]),
                                              }),
                                          ],
                                      });
                              }
                          })(),
                      }),
                c >= 0 &&
                    u &&
                    r.jsxs(o.Fragment, {
                        children: [
                            !b && r.jsx('div', { className: Ur }),
                            r.jsx('div', {
                                className: kr,
                                children: r.jsx(U, {
                                    text: Xr.usesLeft(),
                                    binding: {
                                        count: r.jsx('div', {
                                            className: Lr,
                                            children:
                                                l === fr.NotApplyingError || d ? R.strings.common.common.dash() : c,
                                        }),
                                    },
                                }),
                            }),
                        ],
                    }),
            ],
        });
    }),
    el = {
        base: 'Ribbon_a8d129f2',
        base__upgradable: 'Ribbon_base__upgradable_89eadbbd',
        ribbon: 'Ribbon_b7270139',
        ribbon__win: 'Ribbon_ribbon__win_27fcdb21',
        ribbon__prem: 'Ribbon_ribbon__prem_b78ce1cb',
        ribbon__lose: 'Ribbon_ribbon__lose_7a0392af',
        ribbon__lose_prem: 'Ribbon_ribbon__lose_prem_e901ebb9',
        upgrade: 'Ribbon_upgrade_274f7f02',
    },
    sl = t(() => {
        const { model: e } = ss(),
            { winStatus: s } = e.battleInfo.get(),
            { hasPremium: a, isXpBonusEnabled: t } = e.premiumPlus.get(),
            l = 'win' === s;
        return r.jsxs('div', {
            className: i(el.base, t && el.base__upgradable),
            children: [
                r.jsx('div', {
                    className: i(
                        el.ribbon,
                        l && (a ? el.ribbon__prem : el.ribbon__win),
                        !l && (a ? el.ribbon__lose_prem : el.ribbon__lose),
                    ),
                }),
                r.jsx(xr, {}),
                r.jsx('div', { className: el.shadow }),
                t && r.jsx('div', { className: el.upgrade, children: r.jsx(Yr, {}) }),
            ],
        });
    }),
    al = {
        root: 'PersonalTab_root_522a4c67',
        base: 'PersonalTab_16574f7c',
        content: 'PersonalTab_content_33af9',
        header: 'PersonalTab_header_beef70b5',
        ribbon: 'PersonalTab_ribbon_9a7c8b17',
        statistics: 'PersonalTab_statistics_e08ea9ac',
        progress: 'PersonalTab_progress_644ac635',
        title: 'PersonalTab_title_cd6db133',
    },
    tl = E.resolve('strings'),
    rl = t(() => {
        const { model: e } = ss(),
            { winStatus: s } = e.battleInfo.get(),
            a = e.efficiency.get(),
            t = e.rewards.get(),
            { hasProgress: l } = e.progress.get();
        return r.jsx('div', {
            className: al.base,
            children: r.jsxs('div', {
                className: al.content,
                children: [
                    r.jsx('div', {
                        className: i(al.header, al[`header__${s}`]),
                        children: r.jsx('div', {
                            className: al.title,
                            children: tl.readOrEmpty(`R.strings.fun_battle_results.result.${s}`),
                        }),
                    }),
                    a.length >= 3 && r.jsx('div', { className: al.statistics, children: r.jsx(gt, {}) }),
                    t.length > 0 && r.jsx('div', { className: al.ribbon, children: r.jsx(sl, {}) }),
                    l && r.jsx('div', { className: al.progress, children: r.jsx(tt, {}) }),
                ],
            }),
        });
    }),
    ll = t(({ player: e, selected: s, alias: a, first: t = !1 }) => {
        const { model: l, controls: n } = ss(),
            o = l.selectedPlayerId.get(),
            c = l.computes.personalSquadIndex(),
            d = l.detailsColumns.get(),
            { userNames: m, squadIndex: u, playerIndex: _, isPersonal: b, databaseID: g, vehicle: p } = e,
            { vehicleCD: h } = p,
            { isKilled: v, isTeamKiller: x } = m,
            f = c === u && c > 0,
            N = l.singleTeamMode.get(),
            { mediaSize: j } = Z();
        const y = i(
                Na.bodyRow,
                s && Na.bodyRow__isActive,
                N && Na.bodyRow__nonSelectable,
                t && Na.bodyRow__isFirst,
                v && Na.bodyRow__isKilled,
            ),
            T = L({ isTeamKiller: x, isKilled: v, isPersonal: b, isSameSquad: f }),
            S = 0 === d.length ? ls : d.length;
        return r.jsx(ce, {
            args: { databaseID: g, vehicleCD: h },
            children: r.jsxs('div', {
                className: y,
                style: { color: T },
                onClick: function () {
                    if (N) return;
                    H.sound('yes1');
                    const e = o === _;
                    n.updateTeamTableSelectedPlayer(e ? He : a, e ? -1 : _);
                },
                onMouseEnter: function () {
                    N || H.sound('highlight');
                },
                children: [
                    ts.map((s, a) => {
                        const t = rs.findIndex((e) => e === s),
                            l = Q(d, (e) => e === s);
                        if (-1 !== t || (-1 !== l && void 0 !== l))
                            switch (s) {
                                case Te:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: i(Na.cell, Na.cell__icon),
                                            style: Sa(Te, is, j),
                                            children:
                                                e.squadIndex > 0 &&
                                                r.jsx(Et, { squadIndex: e.squadIndex, currentSquadIndex: c }),
                                        },
                                        a,
                                    );
                                case Se:
                                    return r.jsx(
                                        Ot,
                                        { userNames: m, isPersonal: b, isKilled: v, isSameSquad: f, cellsConfig: is },
                                        a,
                                    );
                                case Ce:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: i(Na.cell, Na.cell__vehicle),
                                            style: Sa(Ce, is, j),
                                            children: r.jsx($t, { ...e, isSameSquad: f, killed: v }),
                                        },
                                        a,
                                    );
                                default:
                                    return r.jsx(
                                        Ut,
                                        {
                                            columnName: s,
                                            baseStyles: i(Na.cell, Na.cell__icon),
                                            value: Ve(e.efficiencyValues, s, ''),
                                            columnsCount: S,
                                            cellsConfig: is,
                                        },
                                        a,
                                    );
                            }
                    }),
                    r.jsx('div', {
                        className: Na.glow,
                        children: r.jsx(Gt, { position: a === We ? Mt : qt, isActive: s }),
                    }),
                ],
            }),
        });
    }),
    il = {},
    nl = {
        comparatorsMap: ze,
        defaultColumn: Se,
        columnsOrder: ts,
        headerIconMapping: as,
        TableRowComponent: ll,
        tableCellsConfig: is,
    },
    ol = () =>
        r.jsx(G.Content, {
            children: (e) => {
                switch (e) {
                    case Qe:
                        return r.jsx(Je.Provider, { value: il, children: r.jsx(rl, {}) });
                    case Ye:
                        return r.jsx(Xe.Provider, { value: nl, children: r.jsx(Oa, {}) });
                    default:
                        return (console.error('Unreachable branch in tabs'), null);
                }
            },
        });
E.resolve('strings');
const cl = t(() => {
        const { model: e, controls: s } = ss(),
            a = e.currentTabId.get(),
            t = D({ size: ue.small }, { large: { size: ue.medium }, extraLarge: { size: ue.large } });
        return r.jsxs(G, {
            active: a,
            theme: me.primary,
            size: t.size,
            onActiveChange: (e) => {
                (s.updateCurrentTabId(e), s.updateNextBonusTime(e === Qe));
            },
            children: [r.jsx(Gs, {}), r.jsx(ol, {})],
        });
    }),
    dl = {
        root: 'Standard_root_63852eab',
        base: 'Standard_54ec693d',
        background: 'Standard_background_99b1ea54',
        background__team: 'Standard_background__team_b8773bdf',
        bgDarken: 'Standard_bgDarken_d741e1e',
        bgDarken__personal: 'Standard_bgDarken__personal_7feadd66',
        bgGlow: 'Standard_bgGlow_3f685885',
        bgGlow__tie: 'Standard_bgGlow__tie_fab45286',
        bgGlow__win: 'Standard_bgGlow__win_c77d4945',
        bgGlow__lose: 'Standard_bgGlow__lose_12a8eec',
        wrapper: 'Standard_wrapper_c32583e9',
        content: 'Standard_content_8fa14a71',
        footer: 'Standard_footer_5df2ff9b',
        navigation: 'Standard_navigation_e6a025b6',
        navigationItem: 'Standard_navigationItem_4e353400',
    };
E.resolve('images');
const ml = t(function () {
        const { model: e, controls: s } = ss(),
            { assetsPointer: a, subModeAssetsPointer: t, winStatus: l } = e.battleInfo.get(),
            n = e.currentTabId.get(),
            o = us(a, t);
        return (
            $(s.closeWindow),
            r.jsxs('div', {
                className: dl.base,
                children: [
                    r.jsx('div', {
                        className: i(dl.background, n === Ye && dl.background__team),
                        style: { backgroundImage: `url('${o}')` },
                    }),
                    r.jsx('div', { className: i(dl.bgDarken, n !== Ye && dl.bgDarken__personal) }),
                    n === Ye && r.jsx('div', { className: i(dl.bgGlow, dl[`bgGlow__${l}`]) }),
                    r.jsxs('div', {
                        className: dl.wrapper,
                        children: [r.jsx(cl, {}), r.jsx('div', { className: dl.footer, children: r.jsx(gr, {}) })],
                    }),
                ],
            })
        );
    }),
    ul = t(function () {
        const { model: e } = ss(),
            { battleType: s } = e.battleInfo.get();
        switch (s) {
            case 'standard':
            default:
                return r.jsx(ml, {});
            case 'race':
                return r.jsx(Qt, {});
        }
    });
pe(new be().add(ge).add(es).render(r.jsx(ul, {})), { fullScreen: !0 }).then(() => he(document.getElementById('root')));
