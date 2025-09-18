import { T as i, x as a, j as n, A as e } from '../../../../chunks/vendor.js';
import {
    i as t,
    cD as s,
    av as o,
    n as c,
    b_ as r,
    cA as l,
    F as d,
    bZ as m,
    m as _,
    r as x,
} from '../../../../chunks/lib.js';
import { t as u, T as g } from '../../../../chunks/tooltips.module.js';
import { a as v, R as p, i as f } from '../../../../chunks/rank_emblem.js';
import { a as j, g as k } from '../../../../chunks/get_rank_name.js';
import { a as b } from '../../../../chunks/get_season_name.js';
import { P as h } from '../../../../chunks/index.js';
import { g as N } from '../../../../chunks/get_division_name.js';
import { Q as C } from '../../../../chunks/qualification_emblem.js';
import { Q as y } from '../../../../chunks/qualification_battle_item.js';
/* empty css                        */ import '../../../../chunks/enums.js';
const [I, q] = t()(({ observableModel: a }) => {
        const n = {
                root: a.object(),
                divisionInfo: a.object('divisionInfo'),
                qualification: a.primitives(
                    ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                    'qualificationModel',
                ),
                qualificationBattles: a.array('qualificationModel.battles'),
            },
            e = i(
                (i) => {
                    const a = o(n.qualificationBattles.get(), i);
                    if (!a) throw new Error(`qualification battle with index ${i} was not found`);
                    return { ...a };
                },
                { equals: s },
            );
        return { ...n, computes: { qualificationBattle: e } };
    }, c),
    T = {
        base: 'RankInactivityBlock_ae45f303',
        heading: 'RankInactivityBlock_heading_6a5fa8b',
        inactivityIcon: 'RankInactivityBlock_inactivityIcon_45c26c22',
        inactivityText: 'RankInactivityBlock_inactivityText_dc8d81f4',
        description: 'RankInactivityBlock_description_7f75821f',
        daysLeft: 'RankInactivityBlock_daysLeft_25158d0',
        daysLeftValue: 'RankInactivityBlock_daysLeftValue_7096baff',
        warning: 'RankInactivityBlock_warning_6016f1e2',
        warningText: 'RankInactivityBlock_warningText_155495c9',
        warningIcon: 'RankInactivityBlock_warningIcon_c34e5438',
    },
    B = a(({ className: i }) => {
        const { model: a } = q(),
            { rankInactivityCount: t, rankInactivityPointsCount: s, hasRankInactivity: o } = a.root.get();
        return n.jsxs('div', {
            className: e(T.base, o && T.base__active, i),
            children: [
                n.jsxs('div', {
                    className: T.heading,
                    children: [
                        n.jsx('div', { className: T.inactivityIcon }),
                        n.jsx('div', {
                            className: T.inactivityText,
                            children: R.strings.comp7_ext.progressionTooltip.rankInactivity.header.active(),
                        }),
                    ],
                }),
                n.jsx(r, {
                    text: R.strings.comp7_ext.progressionTooltip.rankInactivity.description.active(s),
                    binding: { count: s },
                    classMix: T.description,
                }),
                0 === t
                    ? n.jsx('div', {
                          className: T.warning,
                          children: n.jsxs('div', {
                              className: T.warningText,
                              children: [
                                  n.jsx('div', { className: T.warningIcon }),
                                  R.strings.comp7_ext.progressionTooltip.rankInactivity.warning(),
                              ],
                          }),
                      })
                    : n.jsx(r, {
                          text: R.strings.comp7_ext.progressionTooltip.rankInactivity.daysLeft(),
                          binding: { rankInactivityCount: n.jsx('div', { className: T.daysLeftValue, children: t }) },
                          classMix: T.daysLeft,
                      }),
            ],
        });
    }),
    S = 'EliteRankContent_34a2bc68',
    w = 'EliteRankContent_score_c1d75b8d',
    A = 'EliteRankContent_scoreLabel_8db99086',
    Q = 'EliteRankContent_formatTextString_42aa1ae3',
    M = ({ rank: i, currentScore: a, fromScore: e, topPercentage: t }) =>
        n.jsxs('div', {
            className: S,
            children: [
                n.jsx('div', { className: w, children: n.jsx(l, { value: a }) }),
                n.jsx('div', { className: A, children: R.strings.comp7_ext.progressionTooltip.ratingScore() }),
                n.jsx(r, {
                    text: j(R.strings.comp7_ext.progressionTooltip.info, i),
                    binding: { fromScore: e, topPercentage: t },
                    classMix: Q,
                }),
            ],
        }),
    G = 'GeneralRankContent_236f43e',
    L = 'GeneralRankContent_formatTextString_df026d57',
    D = 'GeneralRankContent_division_1cc026b1',
    V = 'GeneralRankContent_currentScore_9c8e174f',
    E = 'GeneralRankContent_progressContainer_bd118b91',
    P = 'GeneralRankContent_progressValue_bb513d2f',
    z = 'GeneralRankContent_progressValue__left_7205b5ce',
    F = 'GeneralRankContent_progressValue__right_86d8e17',
    H = ({ currentScore: i, name: a, from: t, to: s }) =>
        n.jsxs('div', {
            className: G,
            children: [
                n.jsx(d, {
                    text: R.strings.comp7_ext.progressionTooltip.division(),
                    binding: { divisionName: N(a) },
                    classMix: e(L, D),
                }),
                n.jsx('div', { className: V, children: n.jsx(l, { value: i }) }),
                n.jsxs('div', {
                    className: E,
                    children: [
                        n.jsx('div', { className: e(P, z), children: n.jsx(l, { value: t }) }),
                        n.jsx(h, { size: m.Small, value: i - t, maxValue: s - t }),
                        n.jsx('div', { className: e(P, F), children: n.jsx(l, { value: s }) }),
                    ],
                }),
                n.jsx(r, {
                    text: R.strings.comp7_ext.progressionTooltip.divisionDescription(),
                    binding: { fromScore: n.jsx(l, { value: t }), toScore: n.jsx(l, { value: s }) },
                    classMix: L,
                }),
            ],
        }),
    W = a(({ index: i, className: a }) => {
        const { model: e } = q(),
            t = e.computes.qualificationBattle(i);
        return n.jsx(y, { state: t.state, className: a, size: 'x30' }, i);
    }),
    Z = 'QualificationContent_a93ba15f',
    $ = 'QualificationContent_qualificationEmblem_3cd08a67',
    J = 'QualificationContent_counterContainer_53a980e8',
    K = 'QualificationContent_battlesCount_b3248231',
    O = 'QualificationContent_counterDivider_bfd76d34',
    U = 'QualificationContent_counterDescription_d0121394',
    X = 'QualificationContent_ratingCalculationDescription_33daecb6',
    Y = 'QualificationContent_timerIcon_536d35a9',
    ii = 'QualificationContent_battles_e24cc168',
    ai = 'QualificationContent_battle_c53717b7',
    ni = 'QualificationContent_condition_c09fb775',
    ei = a(({ classNames: i }) => {
        const { model: a } = q(),
            e = a.qualification.battlesCount.get(),
            t = a.qualification.maxBattlesCount.get(),
            s = a.qualification.isRatingCalculation.get();
        return n.jsxs('div', {
            className: Z,
            children: [
                n.jsx('div', {
                    className: null == i ? void 0 : i.name,
                    children: R.strings.comp7_ext.progressionTooltip.qualificationName(),
                }),
                n.jsx('div', {
                    className: null == i ? void 0 : i.emblemContainer,
                    children: n.jsx(C, { size: v.x150, seasonName: a.root.get().seasonName, className: $ }),
                }),
                s
                    ? n.jsx(d, {
                          text: R.strings.comp7_ext.qualification.ratingCalculationDescription(),
                          binding: { timerIcon: n.jsx('div', { className: Y }) },
                          classMix: X,
                      })
                    : n.jsxs(n.Fragment, {
                          children: [
                              n.jsx(d, {
                                  text: R.strings.comp7_ext.qualification.counter(),
                                  binding: {
                                      battlesCount: n.jsx('div', { className: K, children: e }),
                                      divider: n.jsx('div', { className: O, children: '/' }),
                                      maxBattlesCount: t,
                                  },
                                  classMix: J,
                              }),
                              n.jsx(r, {
                                  text: R.strings.comp7_ext.qualification.counterWithDescription(),
                                  classMix: U,
                              }),
                          ],
                      }),
                n.jsx('div', {
                    className: ii,
                    children: _(a.qualificationBattles.get().length, (i) => n.jsx(W, { index: i, className: ai }, i)),
                }),
                !s &&
                    n.jsx('div', {
                        className: null == i ? void 0 : i.content,
                        children: n.jsx(d, {
                            text: R.strings.comp7_ext.progressionTooltip.qualification.condition(t),
                            binding: { maxBattlesCount: t },
                            classMix: ni,
                        }),
                    }),
            ],
        });
    }),
    ti = {
        base: 'App_7a4328e3',
        heading: 'App_heading_b53f7586',
        season: 'App_season_b7da35e5',
        rankName: 'App_rankName_8672d675',
        emblemContainer: 'App_emblemContainer_393278d9',
        emblem: 'App_emblem_f0b59ee5',
        content__generalRank: 'App_content__generalRank_d6e091c2',
        divider: 'App_divider_2a25d307',
        redHighlight: 'App_redHighlight_71bf6853',
    },
    si = { name: ti.rankName, content: ti.content, emblemContainer: ti.emblemContainer },
    oi = a(() => {
        const { model: i } = q(),
            {
                rank: a,
                currentScore: t,
                topPercentage: s,
                seasonName: o,
                hasRankInactivity: c,
                rankInactivityCount: r,
            } = i.root.get(),
            { name: l, from: d, to: m } = i.divisionInfo.get(),
            _ = f(a);
        return n.jsxs('div', {
            className: ti.base,
            children: [
                n.jsx('div', { className: ti.heading, children: R.strings.comp7_ext.featureName() }),
                n.jsx('div', { className: ti.season, children: b(o) }),
                i.qualification.isActive.get()
                    ? n.jsx(ei, { classNames: si })
                    : n.jsxs(n.Fragment, {
                          children: [
                              n.jsx('div', { className: ti.rankName, children: k(a) }),
                              n.jsx('div', {
                                  className: ti.emblemContainer,
                                  children: n.jsx(p, {
                                      seasonName: o,
                                      rank: a,
                                      size: v.x150,
                                      division: l,
                                      className: ti.emblem,
                                  }),
                              }),
                              n.jsx('div', {
                                  className: e(ti.content, _ && ti.content__generalRank),
                                  children: _
                                      ? n.jsx(H, { currentScore: t, name: l, from: d, to: m })
                                      : n.jsx(M, { rank: a, fromScore: d, currentScore: t, topPercentage: s }),
                              }),
                              c &&
                                  n.jsxs(n.Fragment, {
                                      children: [n.jsx('div', { className: e(u.divider, ti.divider) }), n.jsx(B, {})],
                                  }),
                          ],
                      }),
                c && 0 === r && n.jsx('div', { className: ti.redHighlight }),
            ],
        });
    });
x(n.jsx(I, { children: n.jsx(g, { children: n.jsx(oi, {}) }) }));
