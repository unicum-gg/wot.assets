import { r as e, m as a, n as s, p as t, j as r, f as l, R as i } from '../../../chunks/vendor.js';
import {
    m as n,
    i as c,
    a as d,
    b as o,
    s as _,
    r as h,
    f as m,
    u,
    D as b,
    c as p,
    B as g,
    F as v,
    C as f,
    P as x,
    d as y,
    S,
    T as w,
    e as j,
    g as T,
    M as N,
    h as A,
    j as I,
    k as C,
    l as P,
    n as D,
    o as k,
    p as G,
    q as F,
    t as $,
    v as B,
    w as L,
    x as E,
    y as Q,
    z as q,
    A as M,
    E as O,
    U as V,
} from '../../../chunks/lib.js';
import { g as W } from '../../../chunks/utils.js';
import { T as K } from '../../../chunks/hangar_consumables_panel_view_model.js';
import { i as z, P as U, s as H } from '../../../chunks/profit.js';
const X = 'squad',
    Y = 'player',
    Z = 'damage',
    J = 'frag',
    ee = 'xp',
    ae = 'tank',
    se = 'allies',
    te = 'enemies',
    re = 'empty',
    le = e.createContext(null),
    ie = e.createContext(null),
    ne = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
    ce = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
    de = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
    oe = R.images.gui.maps.icons.vehicle;
function _e(e) {
    const a = oe.c_420x307.$dyn(e.toLowerCase());
    return a ? { backgroundImage: `url(${a})` } : { backgroundImage: `url(${oe.c_420x307.default_image()})` };
}
function he(e, a) {
    const s = oe.$dyn(
        (function (e, a) {
            return `${e}_${a}`.replace('-', '_');
        })(a, e),
    );
    return s ? { backgroundImage: `url(${s})` } : { backgroundImage: `url(${oe.noImage()})` };
}
function me(e, a, s = '') {
    return s && '' !== s ? ((null == e ? void 0 : e.$dyn(s)) ?? a.$dyn(s)) : null;
}
function ue(e, a, s = [], t, r) {
    return a <= 0 && s.includes(e) ? me(t.empty, r.empty, e) : a;
}
const be = {
    getNumberFormat: (e, a) => window.systemLocale.getNumberFormat(e, a),
    getRealFormat: (e, a) => window.systemLocale.getRealFormat(e, a),
    getTimeFormat: (e, a) => window.systemLocale.getTimeFormat(e, a),
    getDateFormat: (e, a) => window.systemLocale.getDateFormat(e, a),
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
var pe = ((e) => ((e[(e.DESCENDING = -1)] = 'DESCENDING'), (e[(e.ASCENDING = 1)] = 'ASCENDING'), e))(pe || {});
const ge = (e) => (a) => (s, t) => e.call(null, s, t) * a,
    ve =
        (...e) =>
        (a, s) => {
            for (let t = 0; t < e.length; t++) {
                const r = e[t].call(null, a, s);
                if (0 !== r) return r;
            }
            return 0;
        },
    fe = (e, a) => {
        const s = e.toUpperCase(),
            t = a.toUpperCase();
        return s === t ? 0 : s > t ? 1 : -1;
    },
    xe = (e) => (a, s) => {
        const t = a[e],
            r = s[e];
        return 'string' == typeof t && 'string' == typeof r
            ? fe(t, r)
            : 'number' == typeof t && 'number' == typeof r
              ? t - r
              : 0;
    };
var ye = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(ye || {});
const Se = { [ye.Asc]: pe.ASCENDING, [ye.Desc]: pe.DESCENDING },
    we = { heavyTank: 4, mediumTank: 3, 'AT-SPG': 2, lightTank: 1, SPG: 0 };
function je({ userNames: e }, { userNames: a }) {
    return fe(e.userName, a.userName);
}
function Te(e) {
    const a = xe(e);
    return ({ efficiencyValues: e }, { efficiencyValues: s }) => a(e, s);
}
function Ne(e) {
    const a = xe(e);
    return ({ vehicle: e }, { vehicle: s }) => a(e, s);
}
const Ae = {
    [Z]: ge(ve(Te('damageDealt'), je)),
    [J]: ge(ve(Te('kills'), je)),
    [ee]: ge(ve(Te('earnedXp'), je)),
    [X]: ge(
        ve(
            (function (e) {
                const a = xe(e);
                return (e, s) => a(e, s);
            })('squadIndex'),
            je,
        ),
    ),
    [ae]: ge(
        (
            (e, ...a) =>
            (s, t) => {
                for (let r = 0; r < a.length; r++) {
                    const l = e[r],
                        i = (0 !== l ? l : pe.ASCENDING) * a[r].call(null, s, t);
                    if (0 !== i) return i;
                }
                return 0;
            }
        )(
            [0, 0, pe.DESCENDING, pe.DESCENDING],
            Ne('tier'),
            function (e, a) {
                return (function (e, a) {
                    const s = we[e],
                        t = we[a];
                    return s === t ? 0 : s > t ? 1 : -1;
                })(e.vehicle.type, a.vehicle.type);
            },
            Ne('name'),
            je,
        ),
    ),
    [Y]: ge(je),
};
function Ie(e, a, s, t = Ae, r = Y) {
    const l = Se[s],
        i = t[a] ?? t[r];
    return n(e, c).sort(i(l));
}
var Re = ((e) => ((e.Personal = '1'), (e.Team = '2'), e))(Re || {});
const [Ce, Pe] = d()(
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
                    singleTeamMode: e.object('teamStats.isSingleTeamPostbattle'),
                    sortType: e.object('teamStats.sortingColumn'),
                    sortDirection: e.object('teamStats.sortingOrder'),
                    teamStats: e.object('teamStats'),
                    selectedTeam: a.box(re),
                    selectedPlayerId: a.box(-1),
                    currentTabId: a.box('1'),
                    allies: e.array('teamStats.allies'),
                    enemies: e.array('teamStats.enemies'),
                    animationStatus: a.box(!0),
                    harrierQuests: e.array('harrierQuests', []),
                    engineerQuests: e.array('engineerQuests', []),
                    ...e.primitives(['tankType']),
                },
                r = s(() => {
                    const e = _(t.allies.get(), (e) => void 0 !== e.squadIndex && e.squadIndex > 0),
                        a = _(t.enemies.get(), (e) => void 0 !== e.squadIndex && e.squadIndex > 0);
                    return e || a;
                }),
                l = s(() => {
                    const e = t.teamStats.get().sortingColumn;
                    return e !== X || r() ? e : ee;
                }),
                i = s(() => {
                    const e = m(t.allies.get(), (e) => e.isPersonal);
                    return e ? e.squadIndex : -1;
                }),
                c = s((e, a) =>
                    Ie(
                        n(t.enemies.get(), (e) => e),
                        l(),
                        t.teamStats.get().sortingOrder,
                        e,
                        a,
                    ),
                ),
                d = s((e, a) =>
                    Ie(
                        n(t.allies.get(), (e) => e),
                        l(),
                        t.teamStats.get().sortingOrder,
                        e,
                        a,
                    ),
                ),
                o = s(() => {
                    const e = t.selectedTeam.get() === se,
                        a = t.selectedPlayerId.get(),
                        s = e ? t.allies.get() : t.enemies.get();
                    return m(s, (e) => e.playerIndex === a);
                }),
                u = s(() => {
                    const e = t.teamStats.get().isSingleTeamPostbattle ? t.enemies.get() : t.allies.get();
                    return m(e, (e) => e.isPersonal);
                }),
                b = s((e) => {
                    const a = o();
                    if (a) {
                        return h(a.detailedStatistics, (e, a) => e + 1 + a.details.length, 0) > e;
                    }
                    return !1;
                });
            return {
                ...t,
                computes: {
                    personalSquadIndex: i,
                    enemiesSorted: c,
                    alliesSorted: d,
                    selectedPlayer: o,
                    currentPlayer: u,
                    hasDetailedInfoScroll: b,
                    hasSquads: r,
                    activeSortingType: l,
                },
            };
        },
        ({
            externalModel: e,
            model: {
                currentTabId: a,
                sortType: s,
                sortDirection: t,
                selectedTeam: r,
                selectedPlayerId: l,
                animationStatus: i,
            },
        }) => ({
            closeWindow: e.createCallbackNoArgs('onClose'),
            riseRewards: e.createCallbackNoArgs('premiumPlus.onPremiumXpBonusApplied'),
            changeTab: e.createCallback((e) => ({ tabId: e }), 'onTabChanged'),
            saveStatsSorting: e.createCallback((e, a) => ({ column: e, sortDirection: a }), 'teamStats.onStatsSorted'),
            ...o({
                updateTeamTableSelectedPlayer: (e, a) => {
                    (r.set(e), l.set(a));
                },
                updateCurrentTabId: (e) => {
                    a.set(e);
                },
                setAnimationEnabled: (e) => {
                    i.set(e);
                },
            }),
        }),
    ),
    De = {
        base: 'Footer_f540c3b0',
        accent: 'Footer_accent_51c4c457',
        left: 'Footer_left_4308958a',
        right: 'Footer_right_4e012daf',
        top: 'Footer_top_46a81c2d',
        bottom: 'Footer_bottom_4a8ae722',
        player: 'Footer_player_2301fb82',
        killer: 'Footer_killer_4a8ae722',
        dot: 'Footer_dot_a734debd',
        button: 'Footer_button_da6f4a30',
    },
    ke = R.strings.battle_results.common.vehicleState,
    Ge = R.strings.white_tiger_battle_results,
    Fe = t(() => {
        const { model: e, controls: a } = Pe(),
            { closeWindow: s } = a,
            t = e.currentTabId.get() === Re.Team,
            {
                assetsPointer: i,
                arenaName: n,
                battleStartTime: c,
                battleDuration: d,
                finishReason: o,
            } = e.battleInfo.get(),
            { deathReason: _, isLeftBattle: h } = e.userStatus.get(),
            m = e.user.get(),
            x = e.killer.get(),
            y = !h && m.isKilled;
        u(s);
        const { dynamicTexts: S } = W(null, { assetsPointer: i });
        return r.jsxs('div', {
            className: l(De.base, t && De.base__teams),
            children: [
                r.jsxs('div', {
                    className: De.left,
                    children: [
                        r.jsxs('div', {
                            className: De.top,
                            children: [S.capsUserName(), r.jsx('div', { className: De.dot }), be.toUpperCase(n)],
                        }),
                        r.jsxs('div', {
                            className: De.bottom,
                            children: [
                                r.jsx('div', { children: Ge.finish() }),
                                r.jsx('div', {
                                    className: De.accent,
                                    children: r.jsx(b, { datetime: c + d, format: p.ShortDateTime }),
                                }),
                            ],
                        }),
                    ],
                }),
                r.jsx('div', {
                    className: De.button,
                    children: r.jsx(g, {
                        theme: 'primary',
                        size: 'medium',
                        onClick: () => {
                            s();
                        },
                        className: De.base_button,
                        children: r.jsx(v, { text: Ge.continueBtn() }),
                    }),
                }),
                r.jsxs('div', {
                    className: De.right,
                    children: [
                        r.jsx('div', { className: De.top, children: be.toUpperCase(o) }),
                        r.jsxs('div', {
                            className: De.bottom,
                            children: [
                                r.jsx('div', {
                                    className: De.killer,
                                    children: y
                                        ? r.jsxs(r.Fragment, {
                                              children: [
                                                  ke.$dyn(`dead${_}`),
                                                  x.userName !== m.userName &&
                                                      r.jsxs(r.Fragment, {
                                                          children: [
                                                              r.jsx(v, { text: R.strings.common.common.nbsp() }),
                                                              r.jsx(f, { ...x }),
                                                          ],
                                                      }),
                                              ],
                                          })
                                        : r.jsx(r.Fragment, { children: ke.$dyn(h ? 'prematureLeave' : 'alive') }),
                                }),
                                y &&
                                    r.jsxs(r.Fragment, {
                                        children: [
                                            r.jsx('div', { className: De.dot }),
                                            r.jsx('div', { className: De.player, children: r.jsx(f, { ...m }) }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    $e = 'DailyQuestCard_dailyQuest_60684bc1',
    Be = 'DailyQuestCard_dailyQuest__incomplete_fed71460',
    Le = 'DailyQuestCard_dailyQuest__completed_1cc8c953',
    Ee = 'DailyQuestCard_dailyQuest_description_ee398b92',
    Qe = 'DailyQuestCard_dailyQuest_top_left_90ef6e73',
    qe = 'DailyQuestCard_dailyQuest_top_right_50f27451',
    Me = 'DailyQuestCard_dailyQuest_top_a6f096fc',
    Oe = 'DailyQuestCard_dailyQuest_top_content_1959e0ed',
    Ve = 'DailyQuestCard_dailyQuest_icon_830b2ec3',
    We = 'DailyQuestCard_dailyQuest_centerBlock_1bbd0081',
    Ke = 'DailyQuestCard_dailyQuest_points_85d8ece5',
    ze = 'DailyQuestCard_dailyQuest_accent_816c4a09',
    Ue = 'DailyQuestCard_dailyQuest_progress_e384d85d',
    He = ({ isComplete: e, icon: a, description: s, currentProgress: t, totalProgress: i, lastProgressValue: n }) => {
        const c = e ? R.images.white_tiger.gui.maps.icons.progression.dailyMissions.done() : a,
            d = i !== t;
        return r.jsxs('div', {
            className: l($e, e ? Le : Be),
            children: [
                r.jsxs('div', {
                    className: Me,
                    children: [
                        r.jsx('div', { className: Qe }),
                        r.jsx('div', { className: Oe, children: r.jsx('img', { src: c, className: Ve }) }),
                        r.jsx('div', { className: qe }),
                    ],
                }),
                r.jsx('div', { className: Ee, children: s }),
                r.jsx('div', {
                    className: We,
                    children:
                        !e &&
                        d &&
                        r.jsxs(r.Fragment, {
                            children: [
                                r.jsx(v, {
                                    classMix: Ke,
                                    binding: {
                                        currentPoints: r.jsx('span', { className: ze, children: t }),
                                        maxPoints: i,
                                    },
                                    text: R.strings.white_tiger_lobby.progression.pointsFormat(),
                                }),
                                r.jsx('div', {
                                    className: Ue,
                                    children: r.jsx('div', {
                                        className: Ue,
                                        children: r.jsx(x, {
                                            size: S.Small,
                                            theme: y,
                                            value: t,
                                            deltaFrom: n,
                                            maxValue: i,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                }),
            ],
        });
    },
    Xe = R.images.white_tiger.gui.maps.icons.feature.asset_packs,
    Ye = 'undefined';
function Ze(e, a) {
    return e
        ? 'string' == typeof a
            ? e.$dyn(a)
            : a.reduce((e, a) => e.$dyn(a), e)
        : (console.warn('WhiteTiger.combineRPaths: base folder empty: '), null);
}
function Je(e, { poFileName: a, assetsPointer: s, isSubMode: t = !1 } = {}) {
    const r = a ? R.strings.$dyn(a) : R.strings.white_tiger_battle_results;
    if (!r || 'string' == typeof r) throw Error("Incorrect 'poFileName' argument");
    const l = t ? 'sub_modes' : 'modes',
        i = r.$dyn(l),
        n = (s ? (null == i ? void 0 : i.$dyn(s)) : r) || (null == i ? void 0 : i.$dyn(Ye));
    if (!e) return { staticTexts: r, dynamicTexts: n };
    return { staticTexts: Ze(r, e), dynamicTexts: Ze(n, e) };
}
function ea(e, a) {
    const s = Xe.$dyn('sub_modes');
    return s.$dyn(e) ?? s.$dyn(Ye);
}
const aa = 'StatItem_4c88a770',
    sa = 'StatItem_statImage_916e4aa0',
    ta = 'StatItem_statText_c7742083',
    ra = 'StatItem_titleText_b6cf51ab',
    la = R.images.white_tiger.gui.maps.icons.feature.battle_results.stat_list.big,
    ia = ({ paramType: a, value: s, assetsPointer: t }) => {
        var l;
        const { staticTexts: i, dynamicTexts: n } = Je('efficiency', {
                poFileName: 'white_tiger_battle_results',
                assetsPointer: t,
                isSubMode: !0,
            }),
            c = null == (l = ea(t).battle_results) ? void 0 : l.stat_list.big,
            { personalEfficiencyEmptyReplace: d, statItemValueFormatter: o } = e.useContext(ie);
        return r.jsx(w, {
            contentId: R.views.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            args: { paramType: a },
            children: r.jsxs('div', {
                className: aa,
                children: [
                    r.jsx('div', { className: sa, style: { backgroundImage: `url(${me(c, la, a)})` } }),
                    r.jsx('div', { className: ta, children: o(a, s, d, n, i) }),
                    r.jsx('div', { className: ra, children: r.jsx(v, { text: me(n, i, a) }) }),
                ],
            }),
        });
    },
    na = 'StatList_d1b2121c',
    ca = 'StatList_item_6d8b38b0',
    da = t(() => {
        const { model: e } = Pe(),
            a = e.efficiency.get(),
            { subModeAssetsPointer: s } = e.battleInfo.get();
        return r.jsx('div', {
            className: na,
            children: n(a, (e, a) =>
                r.jsx('div', { className: ca, children: r.jsx(ia, { ...e, assetsPointer: s }) }, a),
            ),
        });
    }),
    oa = 'Reward_75ac811a',
    _a = ({ image: e, value: a, tooltipArgs: s }) => {
        const t = j(),
            l = isNaN(Number(a)) ? 0 : Number(a);
        return r.jsx(T, {
            tooltipArgs: s,
            children: r.jsx('div', {
                className: oa,
                children:
                    e &&
                    z(e) &&
                    r.jsx(U, {
                        type: e,
                        value: l,
                        size: [N.Large, N.ExtraLarge].includes(t.mediaSize) ? H.large : H.big,
                    }),
            }),
        });
    },
    ha = { base: 'RewardList_a2fc8ecc' },
    ma = t(() => {
        const { model: e } = Pe(),
            a = e.rewards.get(),
            s = n(a, c).map((e) => ({
                name: e.name,
                image: (null == e ? void 0 : e.icon) ? e.icon : e.name,
                value: e.value,
                valueType: I(e.name),
                tooltipArgs: A({ rewardType: e.name, tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
            }));
        return r.jsx('div', {
            className: ha.base,
            children: n(s, (e, a) => r.jsx('div', { className: ha.item, children: r.jsx(_a, { ...e }) }, a)),
        });
    }),
    ua = 'Ribbon_598e83ba',
    ba = 'Ribbon_dfd9753b',
    pa = () => r.jsxs('div', { className: ua, children: [r.jsx('div', { className: ba }), r.jsx(ma, {})] }),
    ga = {
        root: 'PersonalTab_root_522a4c67',
        'header-h80': 'PersonalTab_header-h80_dd206ff7',
        'header-h56': 'PersonalTab_header-h56_4e2e2892',
        'header-h40': 'PersonalTab_header-h40_4fd9f520',
        'header-h32': 'PersonalTab_header-h32_997e645e',
        'header-h28': 'PersonalTab_header-h28_f0a338f6',
        'header-h26': 'PersonalTab_header-h26_651cf5f9',
        'header-h24': 'PersonalTab_header-h24_63bf3fad',
        'header-h22': 'PersonalTab_header-h22_f931fd15',
        'header-h20': 'PersonalTab_header-h20_b60648a3',
        'header-h18': 'PersonalTab_header-h18_c9387deb',
        'header-h16': 'PersonalTab_header-h16_13dffb0b',
        'paragraph-p20': 'PersonalTab_paragraph-p20_d7904d9',
        'paragraph-p18': 'PersonalTab_paragraph-p18_c9387deb',
        'paragraph-p16': 'PersonalTab_paragraph-p16_13dffb0b',
        base: 'PersonalTab_dc248e6b',
        content: 'PersonalTab_content_8a64d038',
        header: 'PersonalTab_header_beef70b5',
        header__background: 'PersonalTab_header__background_6c77372a',
        title: 'PersonalTab_title_3b0952f9',
        ribbon: 'PersonalTab_ribbon_9a7c8b17',
        statistics: 'PersonalTab_statistics_e08ea9ac',
        progress: 'PersonalTab_progress_644ac635',
        dailyQuests: 'PersonalTab_dailyQuests_7db0b175',
    },
    va = R.strings.white_tiger_battle_results.result,
    fa = t(() => {
        const { model: e } = Pe(),
            { winStatus: a } = e.battleInfo.get(),
            s = e.efficiency.get(),
            t = e.rewards.get(),
            i = e.tankType.get(),
            c = i === K.Boss || i === K.SpecialBoss ? e.engineerQuests.get() : e.harrierQuests.get(),
            d =
                'win' === a
                    ? R.images.white_tiger.gui.maps.icons.postbattle.glow_victory()
                    : R.images.white_tiger.gui.maps.icons.postbattle.glow_defeat();
        return r.jsx('div', {
            className: ga.base,
            children: r.jsxs('div', {
                className: ga.content,
                children: [
                    r.jsxs('div', {
                        className: l(ga.header, ga[`header__${a}`]),
                        children: [
                            r.jsx('div', { className: ga.title, children: va.$dyn(a) }),
                            a && r.jsx('img', { className: ga.header__background, src: d }),
                        ],
                    }),
                    s.length >= 3 && r.jsx('div', { className: ga.statistics, children: r.jsx(da, {}) }),
                    t.length > 0 && r.jsx('div', { className: ga.ribbon, children: r.jsx(pa, {}) }),
                    r.jsx('div', {
                        className: ga.dailyQuests,
                        children: n(c, (e, a) =>
                            r.jsx(
                                He,
                                {
                                    isComplete: e.isCompleted,
                                    description: e.description,
                                    currentProgress: e.currentProgress,
                                    totalProgress: e.totalProgress,
                                    lastProgressValue: e.lastProgressValue,
                                    icon: R.images.white_tiger.gui.maps.icons.postbattle.$dyn(
                                        'c_64_' + e.icon + '_silver',
                                    ),
                                },
                                a,
                            ),
                        ),
                    }),
                ],
            }),
        });
    }),
    xa = e.createContext(null);
function ya() {
    const a = e.useContext(xa);
    if (null === a) throw new Error('You can use tabs hooks only with Tabs component');
    return a;
}
const Sa = {
        root: 'Switch_root_9f21215',
        'header-h80': 'Switch_header-h80_2016f4ac',
        'header-h56': 'Switch_header-h56_11fe8a96',
        'header-h40': 'Switch_header-h40_73c2847a',
        'header-h32': 'Switch_header-h32_cbc435b8',
        'header-h28': 'Switch_header-h28_bc3f78c1',
        'header-h26': 'Switch_header-h26_1006982e',
        'header-h24': 'Switch_header-h24_8e100dd8',
        'header-h22': 'Switch_header-h22_46683386',
        'header-h20': 'Switch_header-h20_e6f07458',
        'header-h18': 'Switch_header-h18_312d1523',
        'header-h16': 'Switch_header-h16_d08683a5',
        'paragraph-p20': 'Switch_paragraph-p20_ec34871',
        'paragraph-p18': 'Switch_paragraph-p18_312d1523',
        'paragraph-p16': 'Switch_paragraph-p16_d08683a5',
        base: 'Switch_26af455f',
        base__inactive: 'Switch_base__inactive_77ace06d',
        base__active: 'Switch_base__active_97b4f666',
        highlight: 'Switch_highlight_f92ac251',
        border: 'Switch_border_9ed64439',
        border__left: 'Switch_border__left_6e0f4c4',
        border__right: 'Switch_border__right_129b18a1',
        separator: 'Switch_separator_df8bddb4',
        separator__left: 'Switch_separator__left_76f6c1d',
        separator__right: 'Switch_separator__right_2f6969ea',
    },
    wa = 'Switcher_c115737d',
    ja = i.forwardRef(function ({ ...e }, a) {
        return r.jsx('div', { className: wa, ref: a, ...e });
    }),
    Ta = (a) => {
        const { active: s, children: t, onActiveChange: l } = a,
            [i, n] = e.useState(s),
            c = C((e) => {
                null == l || l(e);
            }),
            d = e.useMemo(() => ({ active: i, change: n }), [i]);
        return (
            e.useLayoutEffect(() => {
                n(s);
            }, [s]),
            e.useEffect(() => {
                s !== i && l && c(i);
            }, [i, s, c, l]),
            r.jsx(xa.Provider, { value: d, children: t })
        );
    };
((Ta.Switcher = ja),
    (Ta.Switch = ({ tabId: a, children: s }) => {
        const t = ya();
        return r.jsxs('div', {
            className: l(Sa.base, Sa['base__' + ((n = t.active === a), n ? 'active' : 'inactive')]),
            onClick: () => t.change(a),
            children: [
                r.jsx('div', {
                    className: l(Sa.separator, Sa['separator__' + ((i = t.active < a), i ? 'right' : 'left')]),
                }),
                t.active === a &&
                    r.jsxs(e.Fragment, {
                        children: [
                            r.jsx('div', { className: Sa.highlight }),
                            r.jsx('div', { className: l(Sa.border, Sa.border__left) }),
                            r.jsx('div', { className: l(Sa.border, Sa.border__right) }),
                        ],
                    }),
                s,
            ],
        });
        var i, n;
    }),
    (Ta.Content = ({ children: a }) => {
        const s = ya();
        return r.jsx(e.Fragment, { children: a(s.active) }, s.active);
    }));
const Na = { [X]: 'platoon', [J]: 'kills', [ee]: 'xp', [ae]: 'vehicle', [Z]: 'damage' },
    Aa = { [J]: 'kills', [ee]: 'earnedXp', [Z]: 'damageDealt' },
    Ia = [X, Y, Z, J, ee, ae],
    Ra = [X, ae, Y],
    Ca = 3,
    Pa = {
        tableWidth: [498, 770],
        fixedCells: { [X]: [34, 34], [Y]: [178, 273], [ae]: [142, 283] },
        configurableCells: [144, 180],
        playerCellOffset: 16,
    },
    Da = [N.Large, N.ExtraLarge],
    ka = 'TableRendererSquad_aee81fa0',
    Ga = 'TableRendererSquad_base__highlighted_6428d90d',
    Fa = ({ squadIndex: e, currentSquadIndex: a }) => r.jsx('div', { className: l(ka, a === e && Ga), children: e }),
    $a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    Ba = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
const La = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
    Ea = (e) =>
        La
            ? `${e}`
            : (function (e) {
                  let a = '';
                  for (let s = Ba.length - 1; s >= 0; s--) for (; e >= Ba[s];) ((a += $a[s]), (e -= Ba[s]));
                  return a;
              })(e),
    Qa = 'PlayerVehicleInfo_6f34f0a1',
    qa = 'PlayerVehicleInfo_level_a033807d',
    Ma = 'PlayerVehicleInfo_level__left_5e2bb270',
    Oa = 'PlayerVehicleInfo_type_8a7e430e',
    Va = 'PlayerVehicleInfo_vehicleName_55830539',
    Wa = 'PlayerVehicleInfo_igr_3f08d9b9';
var Ka = ((e) => ((e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT'), e))(Ka || {});
const za = (e, a) => {
        const s = e.replace(':', '_').replace(/-/g, '_');
        return {
            maskImage: `url(${R.images.white_tiger.gui.maps.icons.feature.battle_results.team_table.types.$dyn(s)})`,
            backgroundColor: a,
        };
    },
    Ua = e.memo(
        ({
            vehicleLevel: e,
            vehicleType: a,
            vehicleShortName: s,
            userNames: t,
            isPersonal: i = !1,
            isSameSquad: n = !1,
            killed: c = !1,
            isIGR: d = !1,
            alignment: o = 1,
        }) => {
            const { isTeamKiller: _ } = t,
                h = P({ isTeamKiller: _, isKilled: c, isPersonal: i, isSameSquad: n }),
                m = Ea(e);
            return r.jsxs('div', {
                className: Qa,
                style: { color: h },
                children: [
                    r.jsx('div', { className: l(qa, 0 === o && Ma), children: m }),
                    r.jsx('div', { className: Oa, style: za(a, h) }),
                    r.jsx('div', { className: Va, children: s }),
                    d && r.jsx('div', { className: Wa }),
                ],
            });
        },
    ),
    Ha = 'TableRendererVehicleInfo_7ccead71',
    Xa = 'TableRendererVehicleInfo_vehicleImage_1b8490ec',
    Ya = 'TableRendererVehicleInfo_vehicleImage__isKilled_d9be918a',
    Za = ({ vehicle: e, userNames: a, isPersonal: s = !1, isSameSquad: t = !1, killed: i = !1 }) => {
        const { techName: n, name: c, tier: d, type: o, nation: _, tags: h } = e,
            m = h.indexOf('premiumIGR') > -1;
        return r.jsxs('div', {
            className: Ha,
            children: [
                r.jsx('div', { className: l(Xa, i && Ya), style: he(n, _) }),
                r.jsx(Ua, {
                    vehicleLevel: d,
                    vehicleType: o,
                    vehicleShortName: c,
                    userNames: a,
                    isPersonal: s,
                    isSameSquad: t,
                    isIGR: m,
                    killed: i,
                }),
            ],
        });
    },
    Ja = {
        root: 'ActiveGlow_root_d4e7590f',
        'header-h80': 'ActiveGlow_header-h80_4db9e47c',
        'header-h56': 'ActiveGlow_header-h56_20ce6d84',
        'header-h40': 'ActiveGlow_header-h40_ef4a6600',
        'header-h32': 'ActiveGlow_header-h32_2b02b43d',
        'header-h28': 'ActiveGlow_header-h28_eab9d9d2',
        'header-h26': 'ActiveGlow_header-h26_f8206b28',
        'header-h24': 'ActiveGlow_header-h24_b58b885e',
        'header-h22': 'ActiveGlow_header-h22_e7888b6a',
        'header-h20': 'ActiveGlow_header-h20_2c73e4b4',
        'header-h18': 'ActiveGlow_header-h18_a8e7f5f1',
        'header-h16': 'ActiveGlow_header-h16_8cefb636',
        'paragraph-p20': 'ActiveGlow_paragraph-p20_910a515f',
        'paragraph-p18': 'ActiveGlow_paragraph-p18_a8e7f5f1',
        'paragraph-p16': 'ActiveGlow_paragraph-p16_8cefb636',
        base: 'ActiveGlow_c6722d8b',
        base__active: 'ActiveGlow_base__active_f573add8',
        activeGlow: 'ActiveGlow_activeGlow_7ed787d1',
        activeGlow__left: 'ActiveGlow_activeGlow__left_9977f203',
        activeGlow__right: 'ActiveGlow_activeGlow__right_de1a4cc8',
    },
    es = 'right',
    as = 'left',
    ss = ({ position: e = as, isActive: a = !1 }) =>
        r.jsx('div', {
            className: l(Ja.base, a && Ja.base__active),
            children: r.jsx('div', { className: l(Ja.activeGlow, Ja[`activeGlow__${e}`]) }),
        });
function ts(e, a = Pa, s = Ca) {
    return a.fixedCells[e] ? a.fixedCells[e] : [a.configurableCells[0] / s, a.configurableCells[1] / s];
}
function rs(e, a = Pa, s, t = Ca) {
    const r = ts(e, a, t);
    return { width: `${Da.includes(s) ? r[1] : r[0]}rem` };
}
function ls(e, a, s) {
    const t = s[a];
    return t ? e[t] : -1;
}
const is = {
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
        headDivider: 'TeamTable_headDivider_a5747461',
        glow: 'TeamTable_glow_5bf95861',
        activeArrow: 'TeamTable_activeArrow_81a0419c',
        activeArrow__last: 'TeamTable_activeArrow__last_2c45bf3d',
    },
    ns = ({ userNames: e, isPersonal: a, isKilled: s, isSameSquad: t, cellsConfig: l }) => {
        const { mediaSize: i } = j(),
            n = ts(Y, l),
            c = Da.includes(i) ? n[1] : n[0];
        return r.jsx('div', {
            className: is.cell,
            style: { width: `${c}rem` },
            children: r.jsx('div', {
                style: { width: c - l.playerCellOffset + 'rem', marginLeft: `${l.playerCellOffset}rem` },
                children: r.jsx(f, { ...e, isAnonymizerShown: a, isPersonal: a, isKilled: s, isSameSquad: t }),
            }),
        });
    },
    cs = ({ baseStyles: e, columnName: a, value: s, columnsCount: t, cellsConfig: l }) => {
        const { mediaSize: i } = j();
        return r.jsx('div', {
            className: e,
            style: rs(a, l, i, t),
            children: r.jsx('div', { className: is.value, children: s }),
        });
    },
    ds = t(({ player: e, selected: a, alias: s, first: t = !1 }) => {
        const { model: i, controls: n } = Pe(),
            c = i.selectedPlayerId.get(),
            d = i.computes.personalSquadIndex(),
            o = i.detailsColumns.get(),
            { userNames: _, squadIndex: h, playerIndex: m, isPersonal: u, databaseID: b, vehicle: p } = e,
            { vehicleCD: g } = p,
            { isKilled: v, isTeamKiller: f } = _,
            x = d === h && d > 0,
            y = i.singleTeamMode.get(),
            { mediaSize: S } = j();
        const w = l(
                is.bodyRow,
                a && is.bodyRow__isActive,
                y && is.bodyRow__nonSelectable,
                t && is.bodyRow__isFirst,
                v && is.bodyRow__isKilled,
            ),
            T = P({ isTeamKiller: f, isKilled: v, isPersonal: u, isSameSquad: x }),
            N = 0 === o.length ? Ca : o.length;
        return r.jsx(D, {
            args: { databaseID: b, vehicleCD: g },
            children: r.jsxs('div', {
                className: w,
                style: { color: T },
                onClick: function () {
                    if (y) return;
                    G.sound('yes1');
                    const e = c === m;
                    n.updateTeamTableSelectedPlayer(e ? re : s, e ? -1 : m);
                },
                onMouseEnter: function () {
                    y || G.sound('highlight');
                },
                children: [
                    Ia.map((a, s) => {
                        const t = Ra.findIndex((e) => e === a),
                            i = k(o, (e) => e === a);
                        if (-1 !== t || (-1 !== i && void 0 !== i))
                            switch (a) {
                                case X:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: l(is.cell, is.cell__icon),
                                            style: rs(X, Pa, S),
                                            children:
                                                e.squadIndex > 0 &&
                                                r.jsx(Fa, { squadIndex: e.squadIndex, currentSquadIndex: d }),
                                        },
                                        s,
                                    );
                                case Y:
                                    return r.jsx(
                                        ns,
                                        { userNames: _, isPersonal: u, isKilled: v, isSameSquad: x, cellsConfig: Pa },
                                        s,
                                    );
                                case ae:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: l(is.cell, is.cell__vehicle),
                                            style: rs(ae, Pa, S),
                                            children: r.jsx(Za, { ...e, isSameSquad: x, killed: v }),
                                        },
                                        s,
                                    );
                                default:
                                    return r.jsx(
                                        cs,
                                        {
                                            columnName: a,
                                            baseStyles: l(is.cell, is.cell__icon),
                                            value: ls(e.efficiencyValues, a, Aa),
                                            columnsCount: N,
                                            cellsConfig: Pa,
                                        },
                                        s,
                                    );
                            }
                    }),
                    r.jsx('div', {
                        className: is.glow,
                        children: r.jsx(ss, { position: s === te ? as : es, isActive: a }),
                    }),
                ],
            }),
        });
    }),
    os = 'LifeStatus_ac2cf2c3',
    _s = 'LifeStatus_killer_cac4dca7',
    hs = R.strings.battle_results.common.vehicleState,
    ms = ({ player: e }) => {
        const { isLeftBattle: a, deathReason: s, killer: t } = e.userStatus,
            { userName: l, isKilled: i } = e.userNames,
            n = a && e.isPersonal ? hs.prematureLeave() : hs.alive();
        return r.jsx('div', {
            className: os,
            children:
                !a && i
                    ? r.jsxs('div', {
                          className: _s,
                          children: [
                              hs.$dyn(`dead${s}`),
                              t.userName !== l &&
                                  r.jsxs(r.Fragment, {
                                      children: [
                                          r.jsx(v, { text: R.strings.common.common.nbsp() }),
                                          r.jsx(f, { ...t }),
                                      ],
                                  }),
                          ],
                      })
                    : r.jsx('div', { className: _s, children: n }),
        });
    };
var us = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
    us || {},
);
const bs = {
        row: 'StatisticsInfoRow_row_e48b601d',
        row__subgroup: 'StatisticsInfoRow_row__subgroup_f123f10e',
        separator: 'StatisticsInfoRow_separator_9ca3d8e2',
    },
    ps = ({ label: e, value: a, paramValueType: s, isSubgroup: t = !1 }) => {
        const i = n(a, (e) =>
                ((e, a) => {
                    switch (e) {
                        case us.Integer:
                            return be.getNumberFormat(a, ne.INTEGRAL);
                        case us.Float:
                            return be.getRealFormat(a, ce.FRACTIONAL);
                        case us.Time:
                            return be.getTimeFormat(a, de.SHORT_FORMAT);
                        default:
                            return a;
                    }
                })(s, e),
            ).join(' / '),
            c = l(bs.row, t && bs.row__subgroup);
        return r.jsxs('div', {
            className: c,
            children: [
                e,
                r.jsx('span', { className: bs.separator }),
                r.jsx('span', { className: bs.value, children: i }),
            ],
        });
    },
    gs = {},
    vs = ({ item: e }) =>
        r.jsxs('div', {
            className: gs.group,
            children: [
                r.jsx(ps, { ...e }),
                e.details.length > 0 && n(e.details, (e, a) => r.jsx(ps, { isSubgroup: !0, ...e }, a)),
            ],
        }),
    fs = 'StatisticsInfoRows_4ea1e421',
    xs = t(() => {
        const { model: e } = Pe(),
            a = e.computes.selectedPlayer();
        return r.jsx('div', { className: fs, children: n(a.detailedStatistics, (e, a) => r.jsx(vs, { item: e }, a)) });
    }),
    ys = 'StatisticsInfo_eb64394d',
    Ss = 'StatisticsInfo_content_488067a0',
    ws = t(() => {
        const { model: e } = Pe(),
            a = F(),
            s = e.computes.hasDetailedInfoScroll(23);
        return r.jsx('div', {
            className: ys,
            children: s
                ? r.jsx($.Vertical.Area.Default, { className: Ss, api: a, children: r.jsx(xs, {}) })
                : r.jsx(xs, {}),
        });
    }),
    js = 'DetailedStats_3607b852',
    Ts = 'DetailedStats_header_1b47cff5',
    Ns = 'DetailedStats_vehicleInfo_c9968f40',
    As = 'DetailedStats_playerName_3407b29',
    Is = 'DetailedStats_vehicleIcon_8467dc55',
    Rs = 'DetailedStats_playerSummary_851053c5',
    Cs = 'DetailedStats_close_cc49898e',
    Ps = 'DetailedStats_closeText_4153511a',
    Ds = 'DetailedStats_stats_e5faaeef',
    ks = t(() => {
        const { model: e, controls: a } = Pe(),
            s = e.computes.personalSquadIndex(),
            t = e.computes.selectedPlayer(),
            { userNames: l, squadIndex: i, isPersonal: n, vehicle: c } = t,
            { isKilled: d } = l,
            { tier: o, type: _, name: h, techName: m, tags: u } = c,
            b = s === i && s > 0,
            p = u.indexOf('premiumIGR') > -1,
            g = () => {
                (G.sound('play'), a.updateTeamTableSelectedPlayer(re, -1));
            };
        return (
            B(L.ESCAPE, g),
            r.jsxs('div', {
                className: js,
                children: [
                    r.jsxs('div', {
                        className: Ts,
                        children: [
                            r.jsx('div', { className: Is, style: _e(m) }),
                            r.jsxs('div', {
                                className: Ns,
                                children: [
                                    r.jsx('div', {
                                        className: As,
                                        children: r.jsx(f, {
                                            ...t.userNames,
                                            isTeamKiller: !1,
                                            isAnonymizerShown: !0,
                                            isKilled: d,
                                            isSameSquad: b,
                                        }),
                                    }),
                                    r.jsxs('div', {
                                        className: Rs,
                                        children: [
                                            r.jsx(Ua, {
                                                vehicleLevel: o,
                                                vehicleType: _,
                                                vehicleShortName: h,
                                                userNames: l,
                                                alignment: Ka.LEFT,
                                                isIGR: p,
                                                isPersonal: n,
                                                killed: d,
                                            }),
                                            r.jsx(ms, { player: t }),
                                        ],
                                    }),
                                ],
                            }),
                            r.jsx('div', {
                                className: Cs,
                                onClick: g,
                                children: r.jsx('div', {
                                    className: Ps,
                                    children: R.strings.white_tiger_battle_results.closeBtn(),
                                }),
                            }),
                        ],
                    }),
                    r.jsx('div', { className: Ds, children: r.jsx(ws, {}) }),
                ],
            })
        );
    }),
    Gs = t(({ alias: a, shortened: s = !1 }) => {
        const { model: t } = Pe(),
            i = t.selectedPlayerId.get(),
            c = t.selectedTeam.get() === a,
            { comparatorsMap: d, defaultColumn: o, TableRowComponent: _ } = e.useContext(le),
            h = a === se ? t.computes.alliesSorted(d, o) : t.computes.enemiesSorted(d, o);
        return r.jsx('div', {
            className: is.body,
            children: r.jsx('div', {
                className: l(is.bodyWrapper, s && is.bodyWrapper__shortened),
                children: n(h, (e, s) =>
                    r.jsx(_, { player: e, selected: c && i === e.playerIndex, alias: a, isFirst: 0 === s }, s),
                ),
            }),
        });
    }),
    Fs = t(({ alias: e }) => {
        const { model: a } = Pe(),
            s = (e === se ? a.allies.get().length : a.enemies.get().length) > 15,
            t = F();
        return r.jsx('div', {
            className: is.body,
            children: s
                ? r.jsx($.Vertical.Area.Default, { className: is.content, api: t, children: r.jsx(Gs, { alias: e }) })
                : r.jsx(Gs, { alias: e, shortened: !0 }),
        });
    }),
    $s = {
        root: 'ActiveArrow_root_ad9aed6d',
        'header-h80': 'ActiveArrow_header-h80_86ded910',
        'header-h56': 'ActiveArrow_header-h56_63f0cdd4',
        'header-h40': 'ActiveArrow_header-h40_3b643f2d',
        'header-h32': 'ActiveArrow_header-h32_7217aac6',
        'header-h28': 'ActiveArrow_header-h28_5bf815c2',
        'header-h26': 'ActiveArrow_header-h26_fab7ce64',
        'header-h24': 'ActiveArrow_header-h24_23438225',
        'header-h22': 'ActiveArrow_header-h22_2f243dbf',
        'header-h20': 'ActiveArrow_header-h20_309e9d6a',
        'header-h18': 'ActiveArrow_header-h18_9bd3d136',
        'header-h16': 'ActiveArrow_header-h16_c6ddc635',
        'paragraph-p20': 'ActiveArrow_paragraph-p20_77d038e0',
        'paragraph-p18': 'ActiveArrow_paragraph-p18_9bd3d136',
        'paragraph-p16': 'ActiveArrow_paragraph-p16_c6ddc635',
        base: 'ActiveArrow_87750771',
        line: 'ActiveArrow_line_c4e4aa4a',
        arrow: 'ActiveArrow_arrow_78d7366d',
        arrow__top: 'ActiveArrow_arrow__top_d5e0eb11',
    },
    Bs = 'top',
    Ls = 'bottom',
    Es = e.memo(({ direction: e }) =>
        r.jsxs('div', {
            className: $s.base,
            children: [
                r.jsx('div', { className: $s.line }),
                r.jsx('div', { className: l($s.arrow, $s[`arrow__${e}`]) }),
                r.jsx('div', { className: $s.line }),
            ],
        }),
    ),
    Qs = ({
        className: e,
        children: a,
        onSort: s,
        sortType: t,
        tooltip: i,
        reversed: n = !1,
        active: c = !1,
        last: d = !1,
        sortDisabled: o = !1,
        columnWidthSmall: _ = 0,
        columnWidthLarge: h = 0,
    }) => {
        const { mediaSize: m } = j();
        return r.jsx(E, {
            ...i,
            children: r.jsxs('div', {
                className: l(
                    is.headCell,
                    e,
                    c && is.headCell__active,
                    n && is.headCell__reverse,
                    o && is.headCell__sortDisabled,
                ),
                style: { width: `${Da.includes(m) ? h : _}rem` },
                onClick: () => {
                    o || (G.sound('play'), s(t));
                },
                onMouseEnter: () => G.sound('highlight'),
                children: [
                    a,
                    c &&
                        r.jsx('div', {
                            className: l(is.activeArrow, d && is.activeArrow__last),
                            children: r.jsx(Es, { direction: n ? Bs : Ls }),
                        }),
                ],
            }),
        });
    },
    qs = R.strings.battle_results.team,
    Ms = R.images.white_tiger.gui.maps.icons.feature.battle_results.team_table.header;
function Os(e, a) {
    var s;
    const t = `${e}Header`,
        r = (null == (s = null == a ? void 0 : a.team) ? void 0 : s.$dyn(t)) ?? qs.$dyn(t);
    return { header: null == r ? void 0 : r.$dyn('header'), body: null == r ? void 0 : r.$dyn('body') };
}
const Vs = t(({ isAllies: a = !0, onSort: s }) => {
        var t, l;
        const { model: i } = Pe(),
            { subModeAssetsPointer: n } = i.battleInfo.get(),
            c = i.detailsColumns.get(),
            d = i.teamStats.get().sortingOrder,
            o = i.computes.activeSortingType(),
            _ = i.singleTeamMode.get(),
            h = i.computes.hasSquads(),
            m = d === ye.Asc,
            { dynamicTexts: u } = Je(null, {
                poFileName: 'white_tiger_battle_results',
                assetsPointer: n,
                isSubMode: !0,
            }),
            b = null == (l = null == (t = ea(n)) ? void 0 : t.battle_results) ? void 0 : l.team_table.header,
            { columnsOrder: p, headerIconMapping: g, tableCellsConfig: v } = e.useContext(le);
        return r.jsx('div', {
            className: is.head,
            children: r.jsx('div', {
                className: is.headRow,
                children: p.map((e, t, l) => {
                    const i = Ra.findIndex((a) => a === e),
                        n = k(c, (a) => a === e);
                    if (-1 === i && (-1 === n || void 0 === n)) return;
                    const d = e === Y,
                        p = _ ? u.team.singleTeam() : qs.stats.$dyn(a ? 'ownTeam' : 'enemyTeam'),
                        f = 0 === c.length ? Ca : c.length,
                        x = d
                            ? is.headCell__name
                            : (function (e) {
                                  switch (e) {
                                      case ae:
                                          return is.headCell__vehicle;
                                      case X:
                                          return is.headCell__squad;
                                      default:
                                          return is.headCell__icon;
                                  }
                              })(e),
                        y = !d && g[e],
                        S = me(b, Ms, y),
                        w = ts(e, v, f);
                    return r.jsxs(
                        Qs,
                        {
                            className: x,
                            active: o === e,
                            reversed: m,
                            last: t === l.length - 1,
                            sortType: e,
                            onSort: s,
                            tooltip: Os(e, u),
                            sortDisabled: e === X && !h,
                            columnWidthSmall: w[0],
                            columnWidthLarge: w[1],
                            children: [
                                d
                                    ? r.jsx('span', { className: is.playerName, children: p })
                                    : r.jsx('div', {
                                          className: is.headIcon,
                                          style: { backgroundImage: `url('${S}')` },
                                      }),
                                r.jsx('div', { className: is.headHover }),
                                t < l.length - 1 && r.jsx('div', { className: is.headDivider }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        });
    }),
    Ws = t(({ onSort: e, alias: a = se }) => {
        const { model: s } = Pe(),
            t = s.selectedTeam.get(),
            l = t !== re && a !== t;
        return r.jsx('div', {
            className: l ? is.hidden : '',
            children: r.jsxs('div', {
                className: is.base,
                children: [r.jsx(Vs, { isAllies: a === se, onSort: e }), r.jsx(Fs, { alias: a })],
            }),
        });
    }),
    Ks = 'TeamTab_5b420066',
    zs = 'TeamTab_teams_740ba01b',
    Us = 'TeamTab_teams__single_3318c8af',
    Hs = 'TeamTab_detailsWrapper_11a9f895',
    Xs = 'TeamTab_detailsWrapper__extra_fc556740',
    Ys = t(() => {
        var a, s;
        const { model: t, controls: i } = Pe(),
            n = t.teamStats.get().sortingOrder,
            c = t.computes.activeSortingType(),
            d = t.teamStats.get().isSingleTeamPostbattle,
            o = t.selectedTeam.get(),
            _ = o !== re,
            h = o === se && t.allies.get().length <= 15,
            { tableCellsConfig: m } = e.useContext(le) ?? {},
            u = e.useCallback(
                (e) => {
                    if (e === c) {
                        const e = n === ye.Desc ? ye.Asc : ye.Desc;
                        i.saveStatsSorting(c, e);
                    } else i.saveStatsSorting(e, ye.Desc);
                },
                [n, c, i],
            );
        return r.jsx('div', {
            className: Ks,
            style: {
                '--tableWidthSmall': (null == (a = null == m ? void 0 : m.tableWidth) ? void 0 : a[0])
                    ? `${m.tableWidth[0]}rem`
                    : 'auto',
                '--tableWidthLarge': (null == (s = null == m ? void 0 : m.tableWidth) ? void 0 : s[1])
                    ? `${m.tableWidth[1]}rem`
                    : 'auto',
            },
            children: r.jsxs('div', {
                className: l(zs, d && Us),
                children: [
                    r.jsx(Ws, { alias: d ? te : se, onSort: u }),
                    _ && r.jsx('div', { className: l(Hs, h && Xs), children: r.jsx(ks, {}) }),
                    !d && r.jsx(Ws, { alias: te, onSort: u }),
                ],
            }),
        });
    });
R.images.white_tiger.gui.maps.icons.feature.asset_packs;
const Zs = {
        root: 'BattleResultsScreenApp_root_abc1d291',
        'header-h80': 'BattleResultsScreenApp_header-h80_18c5f766',
        'header-h56': 'BattleResultsScreenApp_header-h56_439f1b8f',
        'header-h40': 'BattleResultsScreenApp_header-h40_6bf309b0',
        'header-h32': 'BattleResultsScreenApp_header-h32_13d44e4e',
        'header-h28': 'BattleResultsScreenApp_header-h28_c8944b3b',
        'header-h26': 'BattleResultsScreenApp_header-h26_d580661f',
        'header-h24': 'BattleResultsScreenApp_header-h24_2ee6018b',
        'header-h22': 'BattleResultsScreenApp_header-h22_b1ccf3cd',
        'header-h20': 'BattleResultsScreenApp_header-h20_b849442e',
        'header-h18': 'BattleResultsScreenApp_header-h18_dcc070bf',
        'header-h16': 'BattleResultsScreenApp_header-h16_22e9fcf6',
        'paragraph-p20': 'BattleResultsScreenApp_paragraph-p20_904997b5',
        'paragraph-p18': 'BattleResultsScreenApp_paragraph-p18_dcc070bf',
        'paragraph-p16': 'BattleResultsScreenApp_paragraph-p16_22e9fcf6',
        base: 'BattleResultsScreenApp_5c6fb32',
        background: 'BattleResultsScreenApp_background_c00d3e71',
        background__team: 'BattleResultsScreenApp_background__team_ee39bd50',
        bgDarken: 'BattleResultsScreenApp_bgDarken_1dabad56',
        bgDarken__personal: 'BattleResultsScreenApp_bgDarken__personal_54eae08c',
        bgGlow: 'BattleResultsScreenApp_bgGlow_410e5e97',
        bgGlow__tie: 'BattleResultsScreenApp_bgGlow__tie_764309fb',
        bgGlow__win: 'BattleResultsScreenApp_bgGlow__win_70189642',
        bgGlow__lose: 'BattleResultsScreenApp_bgGlow__lose_73c1147',
        closeButton: 'BattleResultsScreenApp_closeButton_e8d60896',
        wrapper: 'BattleResultsScreenApp_wrapper_3af8b568',
        content: 'BattleResultsScreenApp_content_a4be9830',
        footer: 'BattleResultsScreenApp_footer_fd0a1d13',
        navigation: 'BattleResultsScreenApp_navigation_5fd8ce3',
        navigationItem: 'BattleResultsScreenApp_navigationItem_71bbeb0c',
    },
    Js = t(() => {
        const { model: e, controls: a } = Pe(),
            { closeWindow: s } = a,
            { winStatus: t, subModeAssetsPointer: i } = e.battleInfo.get(),
            n = e.currentTabId.get();
        u(s);
        const { dynamicTexts: c } = (function (e, { poFileName: a, assetsPointer: s, isSubMode: t = !1 } = {}) {
                const r = a ? R.strings.$dyn(a) : R.strings.white_tiger_battle_results;
                if (!r || 'string' == typeof r) throw Error("Incorrect 'poFileName' argument");
                const l = t ? 'sub_modes' : 'modes',
                    i = r.$dyn(l);
                return {
                    staticTexts: r,
                    dynamicTexts:
                        (s ? (null == i ? void 0 : i.$dyn(s)) : r) || (null == i ? void 0 : i.$dyn('undefined')),
                };
            })(0, { assetsPointer: i, isSubMode: !0, poFileName: 'white_tiger_battle_results' }),
            d = { personalEfficiencyEmptyReplace: [], statItemValueFormatter: ue },
            o = {
                comparatorsMap: Ae,
                defaultColumn: Y,
                columnsOrder: Ia,
                headerIconMapping: Na,
                TableRowComponent: ds,
                tableCellsConfig: Pa,
            };
        return r.jsxs('div', {
            className: Zs.base,
            children: [
                r.jsx('div', {
                    className: l(Zs.background, n === Re.Team && Zs.background__team),
                    style: {
                        backgroundImage:
                            "url('R.images.white_tiger.gui.maps.icons.feature.asset_packs.modes.undefined.library.battle_results_bg()')",
                    },
                }),
                r.jsx('div', { className: l(Zs.bgDarken, n !== Re.Team && Zs.bgDarken__personal) }),
                n === Re.Team && r.jsx('div', { className: l(Zs.bgGlow, Zs[`bgGlow__${t}`]) }),
                r.jsx('div', {
                    className: Zs.closeButton,
                    children: r.jsx(Q, {
                        caption: R.strings.white_tiger_battle_results.closeBtn(),
                        type: 'close',
                        side: 'right',
                        onClick: s,
                    }),
                }),
                r.jsxs('div', {
                    className: Zs.wrapper,
                    children: [
                        r.jsx('div', {
                            className: Zs.content,
                            children: r.jsxs(Ta, {
                                active: n,
                                onActiveChange: (e) => {
                                    (G.sound('yes1'), a.updateCurrentTabId(e), a.changeTab(Number(e)));
                                },
                                children: [
                                    r.jsx('div', {
                                        className: Zs.navigation,
                                        children: r.jsxs(Ta.Switcher, {
                                            children: [
                                                r.jsx(Ta.Switch, {
                                                    tabId: Re.Personal,
                                                    children: r.jsx('div', {
                                                        className: Zs.navigationItem,
                                                        children:
                                                            R.strings.white_tiger_battle_results.sub_modes.undefined.navigation.battleResults(),
                                                    }),
                                                }),
                                                r.jsx('div', { className: Zs.navigationSeparator }),
                                                r.jsx(Ta.Switch, {
                                                    tabId: Re.Team,
                                                    children: r.jsx('div', {
                                                        className: Zs.navigationItem,
                                                        children:
                                                            R.strings.white_tiger_battle_results.sub_modes.undefined.navigation.teamEfficiency(),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    r.jsx(Ta.Content, {
                                        children: (e) => {
                                            switch (e) {
                                                case Re.Personal:
                                                    return r.jsx(ie.Provider, { value: d, children: r.jsx(fa, {}) });
                                                case Re.Team:
                                                    return r.jsx(le.Provider, { value: o, children: r.jsx(Ys, {}) });
                                                default:
                                                    return (console.error('Unreachable branch in tabs'), null);
                                            }
                                        },
                                    }),
                                ],
                            }),
                        }),
                        r.jsx('div', { className: Zs.footer, children: r.jsx(Fe, {}) }),
                    ],
                }),
            ],
        });
    });
q(r.jsx(Ce, { children: r.jsx(V, { children: r.jsx(Js, {}) }) }))
    .then(() => M(document.getElementById('root')))
    .then(() => O());
