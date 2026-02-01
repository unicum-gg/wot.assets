import { r as e, w as s, x as a, y as t, j as r, z as l, A as i, R as n } from '../../../chunks/vendor.js';
import {
    m as o,
    i as d,
    S as c,
    L as m,
    A as u,
    M as _,
    H as b,
    a as p,
    b as g,
    c as h,
    g as x,
    s as v,
    r as f,
    f as N,
    d as j,
    e as y,
    h as w,
    u as T,
    D as S,
    j as I,
    F as C,
    C as A,
    B as P,
    k as D,
    t as k,
    l as F,
    I as E,
    n as V,
    R as $,
    o as G,
    p as q,
    q as U,
    P as L,
    v as M,
    w as W,
    x as z,
    y as K,
    T as B,
    z as H,
    E as O,
    G as X,
    J as Z,
    K as J,
    N as Q,
    O as Y,
    Q as ee,
    U as se,
    V as ae,
    W as te,
    X as re,
    Y as le,
    Z as ie,
    _ as ne,
    $ as oe,
    a0 as de,
    a1 as ce,
    a2 as me,
    a3 as ue,
    a4 as _e,
} from '../../../chunks/lib.js';
import { g as be, a as pe } from '../../../chunks/readResource.js';
import { P as ge, s as he } from '../../../chunks/profit.js';
const xe = 'squad',
    ve = 'player',
    fe = 'damage',
    Ne = 'frag',
    je = 'xp',
    ye = 'tank';
var we = ((e) => ((e.Asc = 'ascending'), (e.Desc = 'descending'), e))(we || {}),
    Te = ((e) => ((e[(e.DESCENDING = -1)] = 'DESCENDING'), (e[(e.ASCENDING = 1)] = 'ASCENDING'), e))(Te || {});
const Se = (e) => (s) => (a, t) => e.call(null, a, t) * s,
    Ie =
        (...e) =>
        (s, a) => {
            for (let t = 0; t < e.length; t++) {
                const r = e[t].call(null, s, a);
                if (0 !== r) return r;
            }
            return 0;
        },
    Ce = (e, s) => {
        const a = e.toUpperCase(),
            t = s.toUpperCase();
        return a === t ? 0 : a > t ? 1 : -1;
    },
    Re = (e) => (s, a) => {
        const t = s[e],
            r = a[e];
        return 'string' == typeof t && 'string' == typeof r
            ? Ce(t, r)
            : 'number' == typeof t && 'number' == typeof r
              ? t - r
              : 0;
    };
const Ae = { [we.Asc]: Te.ASCENDING, [we.Desc]: Te.DESCENDING },
    Pe = { [b]: 4, [_]: 3, [u]: 2, [m]: 1, [c]: 0 };
function De({ userNames: e }, { userNames: s }) {
    return Ce(e.userName, s.userName);
}
function ke(e) {
    const s = Re(e);
    return ({ efficiencyValues: e }, { efficiencyValues: a }) => s(e, a);
}
function Fe(e) {
    const s = Re(e);
    return ({ vehicle: e }, { vehicle: a }) => s(e, a);
}
const Ee = {
    [fe]: Se(Ie(ke('damageDealt'), De)),
    [Ne]: Se(Ie(ke('kills'), De)),
    [je]: Se(Ie(ke('earnedXp'), De)),
    [xe]: Se(
        Ie(
            (function (e) {
                const s = Re(e);
                return (e, a) => s(e, a);
            })('squadIndex'),
            De,
        ),
    ),
    [ye]: Se(
        (
            (e, ...s) =>
            (a, t) => {
                for (let r = 0; r < s.length; r++) {
                    const l = e[r],
                        i = (0 !== l ? l : Te.ASCENDING) * s[r].call(null, a, t);
                    if (0 !== i) return i;
                }
                return 0;
            }
        )(
            [0, 0, Te.DESCENDING, Te.DESCENDING],
            Fe('tier'),
            function (e, s) {
                return (function (e, s) {
                    const a = Pe[e],
                        t = Pe[s];
                    return a === t ? 0 : a > t ? 1 : -1;
                })(e.vehicle.type, s.vehicle.type);
            },
            Fe('name'),
            De,
        ),
    ),
    [ve]: Se(De),
};
function Ve(e, s, a, t = Ee, r = ve) {
    const l = Ae[a],
        i = t[s] ?? t[r];
    return o(e, d).sort(i(l));
}
const $e = 'allies',
    Ge = 'enemies',
    qe = 'empty',
    Ue = e.createContext(null),
    Le = () => {
        const s = e.useContext(Ue);
        if (!s)
            throw Error(
                'TeamTable Context not found. Make sure your component is wrapped in TeamTableConfigContext.Provider.',
            );
        return s;
    },
    Me = e.createContext(null),
    We = '1',
    ze = '2',
    [Ke, Be] = p()(
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
                    selectedTeam: s.box(qe),
                    selectedPlayerId: s.box(-1),
                    currentTabId: s.box(We),
                    allies: e.array('teamStats.allies'),
                    enemies: e.array('teamStats.enemies'),
                    progressRewards: e.array('progress.rewards'),
                    stageRequiredCounters: e.array('progress.stageRequiredCounters'),
                    progress: e.object('progress'),
                    animationStatus: s.box(!0),
                },
                r = a(() => {
                    const e = v(t.allies.get(), (e) => void 0 !== e.squadIndex && e.squadIndex > 0),
                        s = v(t.enemies.get(), (e) => void 0 !== e.squadIndex && e.squadIndex > 0);
                    return e || s;
                }),
                l = a(() => {
                    const e = t.sortType.get();
                    return e !== xe || r() ? e : je;
                }),
                i = a(() => {
                    const e = N(t.allies.get(), (e) => e.isPersonal);
                    return e ? e.squadIndex : -1;
                }),
                n = a((e, s) => Ve(t.enemies.get(), l(), t.sortDirection.get(), e, s)),
                d = a((e, s) => Ve(t.allies.get(), l(), t.sortDirection.get(), e, s)),
                c = a(() => {
                    const e = t.selectedTeam.get() === $e,
                        s = t.selectedPlayerId.get(),
                        a = e ? t.allies.get() : t.enemies.get();
                    return N(a, (e) => e.playerIndex === s);
                }),
                m = a(() => {
                    const e = t.singleTeamMode.get() ? t.enemies.get() : t.allies.get();
                    return N(e, (e) => e.isPersonal);
                }),
                u = a((e) => {
                    const s = c();
                    if (s) {
                        return f(s.detailedStatistics, (e, s) => e + 1 + s.details.length, 0) > e;
                    }
                    return !1;
                }),
                _ = a(
                    () =>
                        o(t.progressRewards.get(), (e) => ({
                            name: e.name,
                            image: w(e),
                            value: e.value,
                            special: e.overlayType,
                            valueType: y(e.name),
                            tooltipArgs: j({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                        })),
                    { equals: h },
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
                p = a(() => {
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
                    alliesSorted: d,
                    selectedPlayer: c,
                    currentPlayer: m,
                    hasDetailedInfoScroll: u,
                    hasSquads: r,
                    activeSortingType: l,
                    progressionValues: p,
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
            ...g({
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
    He = 'Footer_f51bab46',
    Oe = 'Footer_content_d9781467',
    Xe = 'Footer_battleStatus_c26aefc7',
    Ze = 'Footer_date_2b3cc51d',
    Je = 'Footer_left_4308958a',
    Qe = 'Footer_right_4e012daf',
    Ye = 'Footer_top_eae2c791',
    es = 'Footer_bottom_6191fafd',
    ss = 'Footer_player_9943fab5',
    as = 'Footer_killer_7b5d6a6a',
    ts = 'Footer_dot_6bee0c4e',
    rs = 'Footer_button_43641369',
    ls = 'Footer_base__teams_4308958a',
    is = R.strings.battle_results.common.vehicleState,
    ns = R.strings.fun_battle_results,
    os = t(() => {
        const { model: e, controls: s } = Be(),
            { closeWindow: a } = s,
            t = e.currentTabId.get() === ze,
            {
                subModeAssetsPointer: i,
                arenaName: n,
                battleStartTime: o,
                battleDuration: d,
                finishReason: c,
            } = e.battleInfo.get(),
            { deathReason: m, isLeftBattle: u } = e.userStatus.get(),
            _ = e.user.get(),
            b = e.killer.get(),
            p = !u && _.isKilled,
            { dynamicTexts: g } = be(null, { assetsPointer: i, isSubMode: !0 });
        return (
            T(a),
            r.jsxs('div', {
                className: l(He, t && ls),
                children: [
                    r.jsxs('div', {
                        className: Oe,
                        children: [
                            r.jsxs('div', {
                                className: Je,
                                children: [
                                    r.jsxs('div', {
                                        className: Ye,
                                        children: [
                                            g.capsUserName(),
                                            r.jsx('div', { className: ts }),
                                            window.systemLocale.toUpperCase(n),
                                        ],
                                    }),
                                    r.jsxs('div', {
                                        className: es,
                                        children: [
                                            r.jsx('div', { className: Xe, children: ns.finish() }),
                                            r.jsx('div', {
                                                className: Ze,
                                                children: r.jsx(S, { datetime: o + d, format: I.ShortDateTime }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.jsxs('div', {
                                className: Qe,
                                children: [
                                    r.jsx('div', { className: Ye, children: window.systemLocale.toUpperCase(c) }),
                                    r.jsxs('div', {
                                        className: es,
                                        children: [
                                            p
                                                ? r.jsxs('div', {
                                                      className: as,
                                                      children: [
                                                          is.$dyn(`dead${m}`),
                                                          b.userName !== _.userName &&
                                                              r.jsxs(r.Fragment, {
                                                                  children: [
                                                                      r.jsx(C, {
                                                                          text: R.strings.common.common.nbsp(),
                                                                          upgradeLegacy: !0,
                                                                      }),
                                                                      r.jsx(A, { ...b }),
                                                                  ],
                                                              }),
                                                      ],
                                                  })
                                                : r.jsx('div', {
                                                      className: as,
                                                      children: is.$dyn(u ? 'prematureLeave' : 'alive'),
                                                  }),
                                            r.jsx('div', { className: ts }),
                                            r.jsx('div', { className: ss, children: r.jsx(A, { ..._ }) }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    r.jsx('div', {
                        className: rs,
                        children: r.jsx(P, {
                            theme: k.primary,
                            size: D.medium,
                            onClick: a,
                            children: r.jsx(C, { text: ns.continueBtn() }),
                        }),
                    }),
                ],
            })
        );
    }),
    ds = R.images.gui.maps.icons.vehicle;
function cs(e) {
    const s = ds.c_420x307.$dyn(e.toLowerCase());
    return s ? { backgroundImage: `url(${s})` } : { backgroundImage: `url(${ds.c_420x307.default_image()})` };
}
function ms(e, s) {
    const a = ds.$dyn(
        (function (e, s) {
            return `${e}_${s}`.replace('-', '_');
        })(s, e),
    );
    return a ? { backgroundImage: `url(${a})` } : { backgroundImage: `url(${ds.noImage()})` };
}
function us(e, s, a = '') {
    return a && '' !== a ? ((null == e ? void 0 : e.$dyn(a)) ?? s.$dyn(a)) : null;
}
const _s = {
        freezed: !1,
        withStack: !1,
        type: F.Growing,
        delta: { duration: 2e3, delay: 100 },
        line: { duration: 2e3, delay: 100 },
    },
    bs = 'Rewards_a1e37c96',
    ps = 'Rewards_reward_36fbe6b0',
    gs = 'Rewards_checkmark_4cbfb56a',
    hs = 'Rewards_item_405577a5',
    xs = 'Rewards_image_74754faa',
    vs = ({
        data: s,
        size: a = E.Big,
        count: t,
        classMix: i,
        rewardItemClassMix: n,
        boxRewardTooltip: o,
        boxRewardValue: d,
    }) => {
        const c = e.useMemo(
                () => (t && t < s.length ? `R.images.gui.maps.icons.quests.bonuses.${a}.default` : ''),
                [t, s.length, a],
            ),
            m = d || V(R.strings.tooltips.quests.awards.additional.bottom(), { count: s.length - (t || 0) }),
            u = l(bs, i),
            _ = l(ps, n);
        return r.jsx('div', {
            className: u,
            children: c
                ? r.jsxs(r.Fragment, {
                      children: [
                          s
                              .slice(0, t)
                              .map((e, s) =>
                                  r.jsxs(
                                      'div',
                                      {
                                          className: _,
                                          children: [r.jsx($, { size: a, ...e }), r.jsx('div', { className: gs })],
                                      },
                                      s,
                                  ),
                              ),
                          r.jsxs('div', {
                              className: _,
                              children: [
                                  r.jsx($, {
                                      name: 'more',
                                      image: c,
                                      size: a,
                                      value: m,
                                      tooltipArgs: o,
                                      className: hs,
                                      classNames: { image: xs },
                                  }),
                                  r.jsx('div', { className: gs }),
                              ],
                          }),
                      ],
                  })
                : s.map((e, s) =>
                      r.jsxs(
                          'div',
                          { className: _, children: [r.jsx($, { size: a, ...e }), r.jsx('div', { className: gs })] },
                          s,
                      ),
                  ),
        });
    },
    fs = {
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
    Ns = R.strings.fun_battle_results.progress,
    js = t(() => {
        const { model: s, controls: a } = Be(),
            {
                description: t,
                assetsPointer: l,
                currentStage: n,
                maximumStage: o,
                isInUnlimitedProgression: d,
                previousStage: c,
                earnedPoints: m,
            } = s.progress.get(),
            { dynamicTexts: u } = be(null, { assetsPointer: l }),
            _ = n !== c,
            b = _ ? s.computes.progressionValuesWithStageMaximum(c).previous : s.computes.progressionValues().current,
            p = G(),
            g = s.animationStatus.get(),
            [h, x] = e.useState(g ? b : s.computes.progressionValues().withoutAnimation),
            [v, f] = e.useState(_ ? c : n);
        e.useEffect(() => {
            if ((g && q.sound('ev_fep_pb_start'), p)) return;
            const e = i(() => {
                x(
                    v < n
                        ? s.computes.progressionValuesWithStageMaximum(v).fromZeroToEnd
                        : s.computes.progressionValues().current,
                );
            });
            return () => e();
        }, [n, s.computes, v, g, p]);
        return r.jsxs('div', {
            className: fs.base,
            children: [
                r.jsxs('div', {
                    className: fs.header,
                    children: [
                        r.jsx('div', {
                            className: fs.title,
                            children: r.jsx(U, {
                                text: d ? Ns.unlimitedProgression.title() : Ns.title(),
                                binding: { modeName: u.userName(), done: g ? v : n, total: d ? '' : o },
                            }),
                        }),
                        r.jsx('div', { className: fs.description, children: t }),
                    ],
                }),
                r.jsx('div', {
                    className: fs.bar,
                    children: r.jsx(L, {
                        animationSettings: _s,
                        size: M.Default,
                        deltaFrom: h.deltaFrom,
                        value: h.value,
                        maxValue: h.maxValue,
                        additionalKey: v,
                        onChangeAnimationState: (e) => {
                            e === z.End && (q.sound('ev_fep_pb_stop'), v < n ? f(v + 1) : a.setAnimationEnabled(!1));
                        },
                    }),
                }),
                r.jsxs('div', {
                    className: fs.footer,
                    children: [
                        r.jsxs('div', {
                            className: fs.counter,
                            children: [
                                r.jsx('div', { className: fs.currentCount, children: h.value }),
                                r.jsx('div', {
                                    className: fs.slash,
                                    children: r.jsx(W, { text: R.strings.common.common.slash() }),
                                }),
                                r.jsx('div', { className: fs.total, children: h.maxValue }),
                            ],
                        }),
                        r.jsx(vs, {
                            classMix: fs.rewards,
                            data: s.computes.rewards(),
                            size: E.Small,
                            count: s.computes.rewards().length > 4 ? 3 : void 0,
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { showCount: 4 },
                            },
                        }),
                        r.jsx('div', {
                            className: fs.value,
                            children: m > 0 ? V(R.strings.common.plusValue(), { value: m }) : m,
                        }),
                    ],
                }),
            ],
        });
    }),
    ys = 'Reward_75ac811a',
    ws = ({ type: e, value: s }) => {
        const a = K();
        return r.jsx(B, {
            contentId: R.views.fun_random.mono.lobby.tooltips.battle_results_economic_tooltip('resId'),
            args: { currencyType: e },
            children: r.jsx('div', {
                className: ys,
                children: r.jsx(ge, {
                    type: e,
                    value: s,
                    size: [H.Large, H.ExtraLarge].includes(a.mediaSize) ? he.large : he.big,
                }),
            }),
        });
    },
    Ts = { base: 'RewardsList_55dd2b32' },
    Ss = t(() => {
        const { model: e } = Be(),
            s = e.rewards.get();
        return r.jsx('div', {
            className: Ts.base,
            children: o(s, (e, s) => r.jsx('div', { className: Ts.item, children: r.jsx(ws, { ...e }) }, s)),
        });
    });
var Is = ((e) => (
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
))(Is || {});
const Cs = 'Upgrade_2e7e2718',
    Rs = 'Upgrade_base__column_1622ced3',
    As = 'Upgrade_button_91e54d61',
    Ps = 'Upgrade_button__cursor_75e0f40',
    Ds = 'Upgrade_content_edb0dfb3',
    ks = 'Upgrade_content__normal_65496994',
    Fs = 'Upgrade_defaultState_4bc6295c',
    Es = 'Upgrade_state_df1359d',
    Vs = 'Upgrade_state__timer_d790c44d',
    $s = 'Upgrade_icon_72093064',
    Gs = 'Upgrade_icon__attention_8300ebb1',
    qs = 'Upgrade_icon__timer_c71ba0d1',
    Us = 'Upgrade_icon__information_77b3acf5',
    Ls = 'Upgrade_xpIcon_f7fac657',
    Ms = 'Upgrade_usesLeft_2492d3ad',
    Ws = 'Upgrade_applied_17432717',
    zs = 'Upgrade_timerWrapper_f8112dfa',
    Ks = 'Upgrade_timerText_2448f58e',
    Bs = 'Upgrade_timer_14e1c1e7',
    Hs = 'Upgrade_error_d3f6c96d',
    Os = 'Upgrade_accepter_19aae422',
    Xs = 'Upgrade_devider_69f53309',
    Zs = 'Upgrade_points_df43930d',
    Js = 'Upgrade_highlight_76562a3b',
    Qs = 'Upgrade_flash_2383c62e',
    Ys = 'Upgrade_multiplier_9c357f74';
var ea,
    sa =
        (((ea = sa || {})[(ea.IsNotVictory = Is.IsNotVictory)] = 'IsNotVictory'),
        (ea[(ea.DeprecatedResults = Is.DeprecatedResults)] = 'DeprecatedResults'),
        (ea[(ea.NoVehicle = Is.NoVehicle)] = 'NoVehicle'),
        (ea[(ea.NoCrew = Is.NoCrew)] = 'NoCrew'),
        (ea[(ea.FasterEducationCrewNotActive = Is.FasterEducationCrewNotActive)] = 'FasterEducationCrewNotActive'),
        (ea[(ea.FasterEducationCrewActive = Is.FasterEducationCrewActive)] = 'FasterEducationCrewActive'),
        ea);
const aa = R.strings.fun_battle_results.ribbon,
    ta = [Is.IsApplied, Is.NotApplyingError, Is.IsNotVictory],
    ra = O.resolve('intl'),
    la = [Is.IsApplied, Is.NoRestriction],
    ia = t(() => {
        const { model: e, controls: s } = Be(),
            {
                nextBonusTime: a,
                xpDiff: t,
                restriction: i,
                bonusMultiplier: o,
                leftBonusCount: d,
                isUndefinedLeftBonusCount: c,
            } = e.premiumPlus.get(),
            m = !ta.includes(i),
            u = la.includes(i),
            _ = i === Is.IsNotVictory,
            b = i === Is.NoRestriction && (d > 0 || c),
            p = () => {
                b && s.riseRewards();
            };
        return r.jsxs('div', {
            className: l(Cs, b && Rs),
            children: [
                r.jsx('div', { className: Js }),
                b &&
                    r.jsxs(n.Fragment, {
                        children: [
                            r.jsx('div', { className: Qs }),
                            r.jsx('div', {
                                className: Ys,
                                style: {
                                    backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.ribbon.multiplaers.$dyn('x' + String(o))})`,
                                },
                            }),
                        ],
                    }),
                a > 0 && !_
                    ? r.jsxs('div', {
                          className: zs,
                          children: [
                              r.jsx('div', { className: Ks, children: aa.timeLeft() }),
                              r.jsxs('div', {
                                  className: l(Es, Vs),
                                  children: [
                                      r.jsx('div', { className: l($s, qs) }),
                                      r.jsx(X, {
                                          startingSeconds: a,
                                          refreshRate: 1,
                                          targetTime: 0,
                                          hourFormat: '%HH:%MM:%SS',
                                          className: Bs,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : r.jsx(n.Fragment, {
                          children: (() => {
                              switch (i) {
                                  case Is.NotApplyingError:
                                      return r.jsxs('div', {
                                          className: Hs,
                                          children: [
                                              r.jsx('div', { className: l($s, Gs) }),
                                              r.jsx('span', { children: aa.errorState() }),
                                          ],
                                      });
                                  case Is.IsApplied:
                                      return r.jsxs(n.Fragment, {
                                          children: [
                                              r.jsx('div', { className: Os }),
                                              r.jsx('div', { className: Ws, children: aa.applied() }),
                                          ],
                                      });
                                  case Is.NoRestriction:
                                      return r.jsx('div', {
                                          className: l(As, m && Ps),
                                          onClick: p,
                                          children: r.jsx('div', {
                                              className: l(Ds, ks),
                                              children: r.jsx(W, {
                                                  text: aa.expBonus(),
                                                  classMix: Fs,
                                                  binding: {
                                                      count: ra.formatNumber('integral', t),
                                                      icon: r.jsx('img', {
                                                          className: Ls,
                                                          src: 'R.images.gui.maps.icons.library.XpIcon_1',
                                                          alt: 'bubble',
                                                      }),
                                                  },
                                              }),
                                          }),
                                      });
                                  default:
                                      return r.jsxs('div', {
                                          className: Hs,
                                          children: [
                                              r.jsx('div', { className: l($s, Us) }),
                                              r.jsx('span', {
                                                  children: R.strings.fun_battle_results.premiumBonus.$dyn(sa[i]),
                                              }),
                                          ],
                                      });
                              }
                          })(),
                      }),
                d >= 0 &&
                    u &&
                    r.jsxs(n.Fragment, {
                        children: [
                            !b && r.jsx('div', { className: Xs }),
                            r.jsx('div', {
                                className: Ms,
                                children: r.jsx(W, {
                                    text: aa.usesLeft(),
                                    binding: {
                                        count: r.jsx('div', {
                                            className: Zs,
                                            children:
                                                i === Is.NotApplyingError || c ? R.strings.common.common.dash() : d,
                                        }),
                                    },
                                }),
                            }),
                        ],
                    }),
            ],
        });
    }),
    na = {
        base: 'Ribbon_a8d129f2',
        base__upgradable: 'Ribbon_base__upgradable_89eadbbd',
        ribbon: 'Ribbon_b7270139',
        ribbon__win: 'Ribbon_ribbon__win_27fcdb21',
        ribbon__prem: 'Ribbon_ribbon__prem_b78ce1cb',
        ribbon__lose: 'Ribbon_ribbon__lose_7a0392af',
        ribbon__lose_prem: 'Ribbon_ribbon__lose_prem_e901ebb9',
        upgrade: 'Ribbon_upgrade_274f7f02',
    },
    oa = t(() => {
        const { model: e } = Be(),
            { winStatus: s } = e.battleInfo.get(),
            { hasPremium: a, isXpBonusEnabled: t } = e.premiumPlus.get(),
            i = 'win' === s;
        return r.jsxs('div', {
            className: l(na.base, t && na.base__upgradable),
            children: [
                r.jsx('div', {
                    className: l(
                        na.ribbon,
                        i && (a ? na.ribbon__prem : na.ribbon__win),
                        !i && (a ? na.ribbon__lose_prem : na.ribbon__lose),
                    ),
                }),
                r.jsx(Ss, {}),
                r.jsx('div', { className: na.shadow }),
                t && r.jsx('div', { className: na.upgrade, children: r.jsx(ia, {}) }),
            ],
        });
    }),
    da = 'StatItem_4c88a770',
    ca = 'StatItem_statImage_916e4aa0',
    ma = 'StatItem_statText_dd3996ee',
    ua = 'StatItem_titleText_a4ec9dcb',
    _a = 'StatItem_text_501ab7da',
    ba = R.images.fun_random.gui.maps.icons.feature.battle_results.stat_list.big,
    pa = ({ paramType: s, value: a, assetsPointer: t }) => {
        var l;
        const { staticTexts: i, dynamicTexts: n } = be('efficiency', {
                poFileName: 'fun_battle_results',
                assetsPointer: t,
                isSubMode: !0,
            }),
            o = null == (l = pe(t, !0).battle_results) ? void 0 : l.stat_list.big,
            { personalEfficiencyEmptyReplace: d, statItemValueFormatter: c } = (() => {
                const s = e.useContext(Me);
                if (!s)
                    throw Error(
                        'PersonalTab Context not found. Make sure your component is wrapped in PersonalTabConfigContext.Provider.',
                    );
                return s;
            })();
        return r.jsx(B, {
            contentId: R.views.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
            args: { paramType: s },
            children: r.jsxs('div', {
                className: da,
                children: [
                    r.jsx('div', { className: ca, style: { backgroundImage: `url(${us(o, ba, s)})` } }),
                    r.jsx('div', { className: ma, children: c(s, a, d, n, i) }),
                    r.jsx('div', { className: ua, children: r.jsx(W, { classMix: _a, text: us(n, i, s) }) }),
                ],
            }),
        });
    },
    ga = 'StatList_d1b2121c',
    ha = 'StatList_item_6d8b38b0',
    xa = t(() => {
        const { model: e } = Be(),
            s = e.efficiency.get(),
            { subModeAssetsPointer: a } = e.battleInfo.get();
        return r.jsx('div', {
            className: ga,
            children: o(s, (e, s) =>
                r.jsx('div', { className: ha, children: r.jsx(pa, { ...e, assetsPointer: a }) }, s),
            ),
        });
    }),
    va = {
        root: 'PersonalTab_root_522a4c67',
        base: 'PersonalTab_16574f7c',
        content: 'PersonalTab_content_33af9',
        header: 'PersonalTab_header_beef70b5',
        ribbon: 'PersonalTab_ribbon_9a7c8b17',
        statistics: 'PersonalTab_statistics_e08ea9ac',
        progress: 'PersonalTab_progress_644ac635',
        title: 'PersonalTab_title_cd6db133',
    },
    fa = R.strings.fun_battle_results.result,
    Na = t(() => {
        const { model: e } = Be(),
            { winStatus: s } = e.battleInfo.get(),
            a = e.efficiency.get(),
            t = e.rewards.get(),
            { hasProgress: i } = e.progress.get();
        return r.jsx('div', {
            className: va.base,
            children: r.jsxs('div', {
                className: va.content,
                children: [
                    r.jsx('div', {
                        className: l(va.header, va[`header__${s}`]),
                        children: r.jsx('div', { className: va.title, children: fa.$dyn(s) }),
                    }),
                    a.length >= 3 && r.jsx('div', { className: va.statistics, children: r.jsx(xa, {}) }),
                    t.length > 0 && r.jsx('div', { className: va.ribbon, children: r.jsx(oa, {}) }),
                    i && r.jsx('div', { className: va.progress, children: r.jsx(js, {}) }),
                ],
            }),
        });
    }),
    ja = { [xe]: 'platoon', [Ne]: 'kills', [je]: 'xp', [ye]: 'vehicle', [fe]: 'damage' },
    ya = { [Ne]: 'kills', [je]: 'earnedXp', [fe]: 'damageDealt' },
    wa = [xe, ve, fe, Ne, je, ye],
    Ta = [xe, ye, ve],
    Sa = 3,
    Ia = {
        tableWidth: [498, 770],
        fixedCells: { [xe]: [34, 34], [ve]: [178, 273], [ye]: [142, 283] },
        configurableCells: [144, 180],
        playerCellOffset: 16,
    },
    Ca = [H.Large, H.ExtraLarge];
function Ra(e, s = Ia, a = Sa) {
    return s.fixedCells[e] ? s.fixedCells[e] : [s.configurableCells[0] / a, s.configurableCells[1] / a];
}
function Aa(e, s = Ia, a, t = Sa) {
    const r = Ra(e, s, t);
    return { width: `${Ca.includes(a) ? r[1] : r[0]}rem` };
}
function Pa(e, s, a) {
    const t = a[s];
    return t ? e[t] : -1;
}
const Da = 'TableRendererSquad_13d7a80b',
    ka = 'TableRendererSquad_base__highlighted_28f558d3',
    Fa = ({ squadIndex: e, currentSquadIndex: s }) => r.jsx('div', { className: l(Da, s === e && ka), children: e }),
    Ea = 'PlayerVehicleInfo_6f34f0a1',
    Va = 'PlayerVehicleInfo_level_a033807d',
    $a = 'PlayerVehicleInfo_level__left_5e2bb270',
    Ga = 'PlayerVehicleInfo_type_8a7e430e',
    qa = 'PlayerVehicleInfo_vehicleName_55830539',
    Ua = 'PlayerVehicleInfo_igr_3f08d9b9';
var La = ((e) => ((e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT'), e))(La || {});
const Ma = (e, s) => {
        const a = e.replace(':', '_').replace(/-/g, '_');
        return {
            maskImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.types.$dyn(a)})`,
            backgroundColor: s,
        };
    },
    Wa = e.memo(
        ({
            vehicleLevel: e,
            vehicleType: s,
            vehicleShortName: a,
            userNames: t,
            isPersonal: i = !1,
            isSameSquad: n = !1,
            killed: o = !1,
            isIGR: d = !1,
            alignment: c = 1,
        }) => {
            const { isTeamKiller: m } = t,
                u = Z({ isTeamKiller: m, isKilled: o, isPersonal: i, isSameSquad: n }),
                _ = J(e);
            return r.jsxs('div', {
                className: Ea,
                style: { color: u },
                children: [
                    r.jsx('div', { className: l(Va, 0 === c && $a), children: _ }),
                    r.jsx('div', { className: Ga, style: Ma(s, u) }),
                    r.jsx('div', { className: qa, children: a }),
                    d && r.jsx('div', { className: Ua }),
                ],
            });
        },
    ),
    za = 'TableRendererVehicleInfo_7ccead71',
    Ka = 'TableRendererVehicleInfo_vehicleImage_1b8490ec',
    Ba = 'TableRendererVehicleInfo_vehicleImage__isKilled_d9be918a',
    Ha = ({ vehicle: e, userNames: s, isPersonal: a = !1, isSameSquad: t = !1, killed: i = !1 }) => {
        const { techName: n, name: o, tier: d, type: c, nation: m, tags: u } = e,
            _ = u.indexOf('premiumIGR') > -1;
        return r.jsxs('div', {
            className: za,
            children: [
                r.jsx('div', { className: l(Ka, i && Ba), style: ms(n, m) }),
                r.jsx(Wa, {
                    vehicleLevel: d,
                    vehicleType: c,
                    vehicleShortName: o,
                    userNames: s,
                    isPersonal: a,
                    isSameSquad: t,
                    isIGR: _,
                    killed: i,
                }),
            ],
        });
    },
    Oa = {
        root: 'ActiveGlow_root_d4e7590f',
        base: 'ActiveGlow_e7257611',
        base__active: 'ActiveGlow_base__active_f573add8',
        activeGlow: 'ActiveGlow_activeGlow_5a648f5d',
        activeGlow__left: 'ActiveGlow_activeGlow__left_9977f203',
        activeGlow__right: 'ActiveGlow_activeGlow__right_de1a4cc8',
    },
    Xa = 'right',
    Za = 'left',
    Ja = ({ position: e = Za, isActive: s = !1 }) =>
        r.jsx('div', {
            className: l(Oa.base, s && Oa.base__active),
            children: r.jsx('div', { className: l(Oa.activeGlow, Oa[`activeGlow__${e}`]) }),
        }),
    Qa = {
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
    Ya = ({ userNames: e, isPersonal: s, isKilled: a, isSameSquad: t, cellsConfig: l }) => {
        const { mediaSize: i } = K(),
            n = Ra(ve, l),
            o = Ca.includes(i) ? n[1] : n[0];
        return r.jsx('div', {
            className: Qa.cell,
            style: { width: `${o}rem` },
            children: r.jsx('div', {
                style: { width: o - l.playerCellOffset + 'rem', marginLeft: `${l.playerCellOffset}rem` },
                children: r.jsx(A, { ...e, isAnonymizerShown: s, isPersonal: s, isKilled: a, isSameSquad: t }),
            }),
        });
    },
    et = ({ baseStyles: e, columnName: s, value: a, columnsCount: t, cellsConfig: l }) => {
        const { mediaSize: i } = K();
        return r.jsx('div', {
            className: e,
            style: Aa(s, l, i, t),
            children: r.jsx('div', { className: Qa.value, children: a }),
        });
    },
    st = t(({ player: e, selected: s, alias: a, first: t = !1 }) => {
        const { model: i, controls: n } = Be(),
            o = i.selectedPlayerId.get(),
            d = i.computes.personalSquadIndex(),
            c = i.detailsColumns.get(),
            { userNames: m, squadIndex: u, playerIndex: _, isPersonal: b, databaseID: p, vehicle: g } = e,
            { vehicleCD: h } = g,
            { isKilled: x, isTeamKiller: v } = m,
            f = d === u && d > 0,
            N = i.singleTeamMode.get(),
            { mediaSize: j } = K();
        const y = l(
                Qa.bodyRow,
                s && Qa.bodyRow__isActive,
                N && Qa.bodyRow__nonSelectable,
                t && Qa.bodyRow__isFirst,
                x && Qa.bodyRow__isKilled,
            ),
            w = Z({ isTeamKiller: v, isKilled: x, isPersonal: b, isSameSquad: f }),
            T = 0 === c.length ? Sa : c.length;
        return r.jsx(Q, {
            args: { databaseID: p, vehicleCD: h },
            children: r.jsxs('div', {
                className: y,
                style: { color: w },
                onClick: function () {
                    if (N) return;
                    q.sound('yes1');
                    const e = o === _;
                    n.updateTeamTableSelectedPlayer(e ? qe : a, e ? -1 : _);
                },
                onMouseEnter: function () {
                    N || q.sound('highlight');
                },
                children: [
                    wa.map((s, a) => {
                        const t = Ta.findIndex((e) => e === s),
                            i = Y(c, (e) => e === s);
                        if (-1 !== t || (-1 !== i && void 0 !== i))
                            switch (s) {
                                case xe:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: l(Qa.cell, Qa.cell__icon),
                                            style: Aa(xe, Ia, j),
                                            children:
                                                e.squadIndex > 0 &&
                                                r.jsx(Fa, { squadIndex: e.squadIndex, currentSquadIndex: d }),
                                        },
                                        a,
                                    );
                                case ve:
                                    return r.jsx(
                                        Ya,
                                        { userNames: m, isPersonal: b, isKilled: x, isSameSquad: f, cellsConfig: Ia },
                                        a,
                                    );
                                case ye:
                                    return r.jsx(
                                        'div',
                                        {
                                            className: l(Qa.cell, Qa.cell__vehicle),
                                            style: Aa(ye, Ia, j),
                                            children: r.jsx(Ha, { ...e, isSameSquad: f, killed: x }),
                                        },
                                        a,
                                    );
                                default:
                                    return r.jsx(
                                        et,
                                        {
                                            columnName: s,
                                            baseStyles: l(Qa.cell, Qa.cell__icon),
                                            value: Pa(e.efficiencyValues, s, ya),
                                            columnsCount: T,
                                            cellsConfig: Ia,
                                        },
                                        a,
                                    );
                            }
                    }),
                    r.jsx('div', {
                        className: Qa.glow,
                        children: r.jsx(Ja, { position: a === Ge ? Za : Xa, isActive: s }),
                    }),
                ],
            }),
        });
    }),
    at = 'LifeStatus_ac2cf2c3',
    tt = 'LifeStatus_killer_cac4dca7',
    rt = R.strings.battle_results.common.vehicleState,
    lt = ({ player: s }) => {
        const { isLeftBattle: a, deathReason: t, killer: l } = s.userStatus,
            { userName: i, isKilled: n } = s.userNames,
            o = a && s.isPersonal ? rt.prematureLeave() : rt.alive();
        return r.jsx('div', {
            className: at,
            children:
                !a && n
                    ? r.jsxs('div', {
                          className: tt,
                          children: [
                              rt.$dyn(`dead${t}`),
                              l.userName !== i &&
                                  r.jsxs(e.Fragment, {
                                      children: [
                                          r.jsx(W, { text: R.strings.common.common.nbsp() }),
                                          r.jsx(A, { ...l }),
                                      ],
                                  }),
                          ],
                      })
                    : r.jsx('div', { className: tt, children: o }),
        });
    };
var it = ((e) => ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'), e))(
    it || {},
);
const nt = {
        row: 'StatisticsInfoRow_row_e48b601d',
        row__subgroup: 'StatisticsInfoRow_row__subgroup_a9c1f556',
        separator: 'StatisticsInfoRow_separator_919051ba',
    },
    ot = ({ label: e, value: s, paramValueType: a, isSubgroup: t = !1 }) => {
        const i = o(s, (e) =>
                ((e, s) => {
                    switch (e) {
                        case it.Integer:
                            return window.systemLocale.getNumberFormat(s, 0);
                        case it.Float:
                            return window.systemLocale.getRealFormat(s, 0);
                        case it.Time:
                            return window.systemLocale.getTimeFormat(s, 1);
                        default:
                            return s;
                    }
                })(a, e),
            ).join(' / '),
            n = l(nt.row, t && nt.row__subgroup);
        return r.jsxs('div', {
            className: n,
            children: [
                e,
                r.jsx('span', { className: nt.separator }),
                r.jsx('span', { className: nt.value, children: i }),
            ],
        });
    },
    dt = {},
    ct = ({ item: e }) =>
        r.jsxs('div', {
            className: dt.group,
            children: [
                r.jsx(ot, { isSubgroup: !1, ...e }),
                e.details.length > 0 && o(e.details, (e, s) => r.jsx(ot, { isSubgroup: !0, ...e }, s)),
            ],
        }),
    mt = 'StatisticsInfoRows_4ea1e421',
    ut = t(() => {
        const { model: e } = Be(),
            s = e.computes.selectedPlayer();
        return r.jsx('div', { className: mt, children: o(s.detailedStatistics, (e, s) => r.jsx(ct, { item: e }, s)) });
    }),
    _t = 'StatisticsInfo_eb64394d',
    bt = 'StatisticsInfo_content_488067a0',
    pt = t(() => {
        const { model: e } = Be(),
            s = ee(),
            a = e.computes.hasDetailedInfoScroll(23);
        return r.jsx('div', {
            className: _t,
            children: a
                ? r.jsx(se.Vertical.Area.Default, { className: bt, api: s, children: r.jsx(ut, {}) })
                : r.jsx(ut, {}),
        });
    }),
    gt = 'DetailedStats_3607b852',
    ht = 'DetailedStats_header_1b47cff5',
    xt = 'DetailedStats_vehicleInfo_c9968f40',
    vt = 'DetailedStats_playerName_3407b29',
    ft = 'DetailedStats_vehicleIcon_8467dc55',
    Nt = 'DetailedStats_playerSummary_851053c5',
    jt = 'DetailedStats_close_5f15f38e',
    yt = 'DetailedStats_closeText_4153511a',
    wt = 'DetailedStats_stats_e5faaeef',
    Tt = t(() => {
        const { model: e, controls: s } = Be(),
            a = e.computes.personalSquadIndex(),
            t = e.computes.selectedPlayer(),
            { userNames: l, squadIndex: i, isPersonal: n, vehicle: o } = t,
            { isKilled: d } = l,
            { tier: c, type: m, name: u, techName: _, tags: b } = o,
            p = a === i && a > 0,
            g = b.indexOf('premiumIGR') > -1,
            h = () => {
                (q.sound('play'), s.updateTeamTableSelectedPlayer(qe, -1));
            };
        return (
            ae(te.ESCAPE, h),
            r.jsxs('div', {
                className: gt,
                children: [
                    r.jsxs('div', {
                        className: ht,
                        children: [
                            r.jsx('div', { className: ft, style: cs(_) }),
                            r.jsxs('div', {
                                className: xt,
                                children: [
                                    r.jsx('div', {
                                        className: vt,
                                        children: r.jsx(A, {
                                            ...t.userNames,
                                            isTeamKiller: !1,
                                            isAnonymizerShown: !0,
                                            isKilled: d,
                                            isSameSquad: p,
                                        }),
                                    }),
                                    r.jsxs('div', {
                                        className: Nt,
                                        children: [
                                            r.jsx(Wa, {
                                                vehicleLevel: c,
                                                vehicleType: m,
                                                vehicleShortName: u,
                                                userNames: l,
                                                alignment: La.LEFT,
                                                isIGR: g,
                                                isPersonal: n,
                                                killed: d,
                                            }),
                                            r.jsx(lt, { player: t }),
                                        ],
                                    }),
                                ],
                            }),
                            r.jsx('div', {
                                className: jt,
                                onClick: h,
                                children: r.jsx('div', {
                                    className: yt,
                                    children: R.strings.fun_battle_results.closeBtn(),
                                }),
                            }),
                        ],
                    }),
                    r.jsx('div', { className: wt, children: r.jsx(pt, {}) }),
                ],
            })
        );
    }),
    St = t(({ alias: e, shortened: s = !1 }) => {
        const { model: a } = Be(),
            t = a.selectedPlayerId.get(),
            i = a.selectedTeam.get() === e,
            { comparatorsMap: n, defaultColumn: d, TableRowComponent: c } = Le(),
            m = e === $e ? a.computes.alliesSorted(n, d) : a.computes.enemiesSorted(n, d);
        return r.jsx('div', {
            className: Qa.body,
            children: r.jsx('div', {
                className: l(Qa.bodyWrapper, s && Qa.bodyWrapper__shortened),
                children: o(m, (s, a) =>
                    r.jsx(c, { player: s, selected: i && t === s.playerIndex, alias: e, isFirst: 0 === a }, a),
                ),
            }),
        });
    }),
    It = t(({ alias: e }) => {
        const { model: s } = Be(),
            a = (e === $e ? s.allies.get().length : s.enemies.get().length) > 15,
            t = ee();
        return r.jsx('div', {
            className: Qa.body,
            children: a
                ? r.jsx(se.Vertical.Area.Default, { className: Qa.content, api: t, children: r.jsx(St, { alias: e }) })
                : r.jsx(St, { alias: e, shortened: !0 }),
        });
    }),
    Ct = {
        root: 'ActiveArrow_root_ad9aed6d',
        base: 'ActiveArrow_87750771',
        line: 'ActiveArrow_line_c4e4aa4a',
        arrow: 'ActiveArrow_arrow_90c1aa1d',
        arrow__top: 'ActiveArrow_arrow__top_d5e0eb11',
    },
    Rt = 'top',
    At = 'bottom',
    Pt = e.memo(({ direction: e }) =>
        r.jsxs('div', {
            className: Ct.base,
            children: [
                r.jsx('div', { className: Ct.line }),
                r.jsx('div', { className: l(Ct.arrow, Ct[`arrow__${e}`]) }),
                r.jsx('div', { className: Ct.line }),
            ],
        }),
    ),
    Dt = ({
        className: e,
        children: s,
        onSort: a,
        sortType: t,
        tooltip: i,
        reversed: n = !1,
        active: o = !1,
        last: d = !1,
        sortDisabled: c = !1,
        columnWidthSmall: m = 0,
        columnWidthLarge: u = 0,
    }) => {
        const { mediaSize: _ } = K();
        return r.jsx(re, {
            ...i,
            children: r.jsxs('div', {
                className: l(
                    Qa.headCell,
                    e,
                    o && Qa.headCell__active,
                    n && Qa.headCell__reverse,
                    c && Qa.headCell__sortDisabled,
                ),
                style: { width: `${Ca.includes(_) ? u : m}rem` },
                onClick: () => {
                    c || (q.sound('play'), a(t));
                },
                onMouseEnter: () => q.sound('highlight'),
                children: [
                    s,
                    o &&
                        r.jsx('div', {
                            className: l(Qa.activeArrow, d && Qa.activeArrow__last),
                            children: r.jsx(Pt, { direction: n ? Rt : At }),
                        }),
                ],
            }),
        });
    },
    kt = R.strings.battle_results.team,
    Ft = R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.header;
function Et(e, s) {
    var a;
    const t = `${e}Header`,
        r = (null == (a = null == s ? void 0 : s.team) ? void 0 : a.$dyn(t)) ?? kt.$dyn(t);
    return { header: null == r ? void 0 : r.$dyn('header'), body: null == r ? void 0 : r.$dyn('body') };
}
const Vt = t(({ isAllies: e = !0, onSort: s }) => {
        var a, t;
        const { model: l } = Be(),
            { subModeAssetsPointer: i } = l.battleInfo.get(),
            n = l.detailsColumns.get(),
            o = l.sortDirection.get(),
            d = l.computes.activeSortingType(),
            c = l.singleTeamMode.get(),
            m = l.computes.hasSquads(),
            u = o === we.Asc,
            { dynamicTexts: _ } = be(null, { poFileName: 'fun_battle_results', assetsPointer: i, isSubMode: !0 }),
            b = null == (t = null == (a = pe(i, !0)) ? void 0 : a.battle_results) ? void 0 : t.team_table.header,
            { columnsOrder: p, headerIconMapping: g, tableCellsConfig: h } = Le();
        return r.jsx('div', {
            className: Qa.head,
            children: r.jsx('div', {
                className: Qa.headRow,
                children: p.map((a, t, l) => {
                    const i = Ta.findIndex((e) => e === a),
                        o = Y(n, (e) => e === a);
                    if (-1 === i && (-1 === o || void 0 === o)) return;
                    const p = a === ve,
                        x = c ? _.team.singleTeam() : kt.stats.$dyn(e ? 'ownTeam' : 'enemyTeam'),
                        v = 0 === n.length ? Sa : n.length,
                        f = p
                            ? Qa.headCell__name
                            : (function (e) {
                                  switch (e) {
                                      case ye:
                                          return Qa.headCell__vehicle;
                                      case xe:
                                          return Qa.headCell__squad;
                                      default:
                                          return Qa.headCell__icon;
                                  }
                              })(a),
                        N = !p && g[a],
                        j = us(b, Ft, N),
                        y = Ra(a, h, v);
                    return r.jsxs(
                        Dt,
                        {
                            className: f,
                            active: d === a,
                            reversed: u,
                            last: t === l.length - 1,
                            sortType: a,
                            onSort: s,
                            tooltip: Et(a, _),
                            sortDisabled: a === xe && !m,
                            columnWidthSmall: y[0],
                            columnWidthLarge: y[1],
                            children: [
                                p
                                    ? r.jsx('span', { className: Qa.playerName, children: x })
                                    : r.jsx('div', {
                                          className: Qa.headIcon,
                                          style: { backgroundImage: `url('${j}')` },
                                      }),
                                r.jsx('div', { className: Qa.headHover }),
                                t < l.length - 1 && r.jsx('div', { className: Qa.headDivider }),
                            ],
                        },
                        a,
                    );
                }),
            }),
        });
    }),
    $t = t(({ onSort: e, alias: s = $e }) => {
        const { model: a } = Be(),
            t = a.selectedTeam.get(),
            l = t !== qe && s !== t;
        return r.jsx('div', {
            className: l ? Qa.hidden : '',
            children: r.jsxs('div', {
                className: Qa.base,
                children: [r.jsx(Vt, { isAllies: s === $e, onSort: e }), r.jsx(It, { alias: s })],
            }),
        });
    }),
    Gt = 'TeamTab_9d7f5559',
    qt = 'TeamTab_teams_740ba01b',
    Ut = 'TeamTab_teams__single_3318c8af',
    Lt = 'TeamTab_detailsWrapper_11a9f895',
    Mt = 'TeamTab_detailsWrapper__extra_fc556740',
    Wt = t(() => {
        const { model: s, controls: a } = Be(),
            t = s.sortDirection.get(),
            i = s.computes.activeSortingType(),
            n = s.singleTeamMode.get(),
            o = s.selectedTeam.get(),
            d = o !== qe,
            c = o === $e && s.allies.get().length <= 15,
            { tableCellsConfig: m } = Le(),
            u = e.useCallback(
                (e) => {
                    if (e === i) {
                        const e = t === we.Desc ? we.Asc : we.Desc;
                        (a.saveStatsSorting(i, e), a.updateTeamTableSorting(i, e));
                    } else (a.saveStatsSorting(e, we.Desc), a.updateTeamTableSorting(e, we.Desc));
                },
                [t, i, a],
            );
        return r.jsx('div', {
            className: Gt,
            style: { '--tableWidthSmall': `${m.tableWidth[0]}rem`, '--tableWidthLarge': `${m.tableWidth[1]}rem` },
            children: r.jsxs('div', {
                className: l(qt, n && Ut),
                children: [
                    r.jsx($t, { alias: n ? Ge : $e, onSort: u }),
                    d && r.jsx('div', { className: l(Lt, c && Mt), children: r.jsx(Tt, {}) }),
                    !n && r.jsx($t, { alias: Ge, onSort: u }),
                ],
            }),
        });
    }),
    zt = {
        personalEfficiencyEmptyReplace: [],
        statItemValueFormatter: function (e, s, a = [], t, r) {
            return s <= 0 && a.includes(e) ? us(t.empty, r.empty, e) : s;
        },
    },
    Kt = {
        comparatorsMap: Ee,
        defaultColumn: ve,
        columnsOrder: wa,
        headerIconMapping: ja,
        TableRowComponent: st,
        tableCellsConfig: Ia,
    },
    Bt = () =>
        r.jsx(le.Content, {
            children: (e) => {
                switch (e) {
                    case We:
                        return r.jsx(Me.Provider, { value: zt, children: r.jsx(Na, {}) });
                    case ze:
                        return r.jsx(Ue.Provider, { value: Kt, children: r.jsx(Wt, {}) });
                    default:
                        return (console.error('Unreachable branch in tabs'), null);
                }
            },
        }),
    Ht = t(() => {
        const { model: e } = Be(),
            { subModeAssetsPointer: s } = e.battleInfo.get(),
            { dynamicTexts: a } = be(null, { assetsPointer: s, isSubMode: !0, poFileName: 'fun_battle_results' }),
            t = [
                { id: We, label: a.navigation.battleResults() },
                { id: ze, label: a.navigation.teamEfficiency() },
            ];
        return r.jsx(le.Switcher, {
            children: t.map(({ id: e, label: s }) => r.jsx(le.Tab, { tabId: e, children: r.jsx(ie, { text: s }) }, e)),
        });
    }),
    Ot = t(() => {
        const { model: e, controls: s } = Be(),
            a = e.currentTabId.get(),
            t = ne({ size: de.small }, { large: { size: de.medium }, extraLarge: { size: de.large } });
        return r.jsxs(le, {
            active: a,
            theme: oe.primary,
            size: t.size,
            onActiveChange: (e) => {
                (s.updateCurrentTabId(e), s.updateNextBonusTime(e === We));
            },
            children: [r.jsx(Ht, {}), r.jsx(Bt, {})],
        });
    }),
    Xt = {
        root: 'App_root_0',
        base: 'App_ef328127',
        background: 'App_background_3e1a191f',
        background__team: 'App_background__team_ce4f8baa',
        bgDarken: 'App_bgDarken_60c48286',
        bgDarken__personal: 'App_bgDarken__personal_ca4d8a4d',
        bgGlow: 'App_bgGlow_8ed1b6',
        bgGlow__tie: 'App_bgGlow__tie_4af4d007',
        bgGlow__win: 'App_bgGlow__win_3a135fdd',
        bgGlow__lose: 'App_bgGlow__lose_95b67f4d',
        wrapper: 'App_wrapper_4e568de9',
        content: 'App_content_85e6284f',
        footer: 'App_footer_cb654453',
        navigation: 'App_navigation_130099a0',
        navigationItem: 'App_navigationItem_f0b59ee5',
    },
    Zt = t(() => {
        const { model: e, controls: s } = Be(),
            { closeWindow: a } = s,
            { assetsPointer: t, winStatus: i } = e.battleInfo.get(),
            n = e.currentTabId.get();
        return (
            T(a),
            r.jsxs('div', {
                className: Xt.base,
                children: [
                    r.jsx('div', {
                        className: l(Xt.background, n === ze && Xt.background__team),
                        style: { backgroundImage: `url('${pe(t).library.battle_results_bg()}')` },
                    }),
                    r.jsx('div', { className: l(Xt.bgDarken, n !== ze && Xt.bgDarken__personal) }),
                    n === ze && r.jsx('div', { className: l(Xt.bgGlow, Xt[`bgGlow__${i}`]) }),
                    r.jsxs('div', {
                        className: Xt.wrapper,
                        children: [r.jsx(Ot, {}), r.jsx('div', { className: Xt.footer, children: r.jsx(os, {}) })],
                    }),
                ],
            })
        );
    });
ue(new ce().add(me).add(Ke).render(r.jsx(Zt, {})), { fullScreen: !0 }).then(() => _e(document.getElementById('root')));
