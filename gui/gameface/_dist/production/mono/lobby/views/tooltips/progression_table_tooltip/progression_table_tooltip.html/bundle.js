import { S as e, T as s, I as a, j as i, J as n } from '../../../../chunks/vendor.js';
import {
    i as t,
    aB as r,
    cX as o,
    a9 as c,
    ad as l,
    n as d,
    cf as m,
    cm as _,
    aA as p,
    m as x,
    cd as v,
    cU as b,
    cP as h,
} from '../../../../chunks/lib.js';
import { T as g } from '../../../../chunks/tooltip_decorator.js';
import { R as j, a as k, i as u } from '../../../../chunks/rank_emblem.js';
import { a as f } from '../../../../chunks/get_division_name.js';
import { b as N, g as T } from '../../../../chunks/get_rank_name.js';
import { R as I } from '../../../../chunks/consts.js';
import { S as y, g as w } from '../../../../chunks/get_division_points_step.js';
import { R as A } from '../../../../chunks/enums.js';
/* empty css                        */ const [E, M] = t('ProgressionTableTooltipModel')(({ observableModel: a }) => {
        const i = { root: a.object(), items: a.array('items') },
            n = e(
                (e) => {
                    const s = r(i.items.get(), e);
                    if (!s) throw new Error(`progression item with index ${e} was not found`);
                    const { hasRankInactivity: a, rank: n, from: t, to: o } = s;
                    return { hasRankInactivity: a, rank: n, from: t, to: o };
                },
                { equals: s.shallow },
            ),
            t = e(
                (e) => {
                    const s = r(i.items.get(), e);
                    if (!s) throw new Error(`progression item with index ${e} was not found`);
                    return c(s.divisions, (e) => ({ ...e }));
                },
                { equals: o },
            ),
            d = e(
                () => {
                    var e;
                    const s = i.root.get().currentItemIndex,
                        a = t(s),
                        n = l(a, (e) => e.state === y.Current);
                    return { name: 'number' == typeof n ? (null == (e = a[n]) ? void 0 : e.name) : void 0, index: n };
                },
                { equals: s.shallow },
            );
        return { ...i, computes: { item: n, divisions: t, currentDivision: d } };
    }, d),
    B = {
        base: 'RankInactivityBlock_d683def8',
        heading: 'RankInactivityBlock_heading_82d158ec',
        description: 'RankInactivityBlock_description_6907b70d',
        daysLeft: 'RankInactivityBlock_daysLeft_5f9e9940',
    },
    C = a(({ className: e }) => {
        const { model: s } = M(),
            { rankInactivityCount: a, rankInactivityPointsCount: t, currentItemIndex: r } = s.root.get(),
            o = s.computes.item(r).hasRankInactivity;
        return i.jsx('div', {
            className: n(B.base, o && B.base__active, e),
            children: o
                ? i.jsxs(i.Fragment, {
                      children: [
                          i.jsx('div', {
                              className: B.heading,
                              children: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.header.active(),
                          }),
                          i.jsx(m, {
                              text: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.description.active(t),
                              binding: { count: t },
                              classMix: B.description,
                          }),
                          i.jsx(m, {
                              text: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.daysLeft(),
                              binding: { rankInactivityCount: a },
                              classMix: B.daysLeft,
                          }),
                      ],
                  })
                : i.jsxs(i.Fragment, {
                      children: [
                          i.jsx('div', {
                              className: B.heading,
                              children: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.header.notActive(),
                          }),
                          i.jsx(m, {
                              text: _(
                                  R.strings.comp7_ext.progressionTableTooltip.rankInactivity.description.notActive(),
                                  {
                                      rankList: p(
                                          s.items.get(),
                                          (e) => e.hasRankInactivity,
                                          (e) => N(e.rank),
                                      ).join(R.strings.comp7_ext.listSeparator()),
                                  },
                              ),
                              classMix: B.description,
                          }),
                      ],
                  }),
        });
    }),
    D = 'TableHeader_35da86a5',
    F = 'TableHeader_container_fb71aa54',
    L = 'TableHeader_cell_fcc4dbd6',
    P = 'TableHeader_cell__rank_d2b49f16',
    S = a(({ className: e }) => {
        const { model: s } = M(),
            a = s.computes.divisions(0);
        return i.jsx('div', {
            className: n(D, e),
            children: i.jsxs('div', {
                className: F,
                children: [
                    i.jsx('div', {
                        className: n(L, P),
                        children: R.strings.comp7_ext.progressionTableTooltip.table.heading.rank(),
                    }),
                    x(a.length, (e) => i.jsx('div', { className: L, children: a[e] ? f(a[e].name) : '' }, e)),
                ],
            }),
        });
    }),
    $ = {
        base: 'TableRow_42854519',
        base__active: 'TableRow_base__active_48eb2f3',
        container: 'TableRow_container_72f3acca',
        cell: 'TableRow_cell_f6418bbe',
        cell__rank: 'TableRow_cell__rank_e9180629',
        cell__range: 'TableRow_cell__range_a19ceeb6',
        cell__united: 'TableRow_cell__united_f174032f',
        rankEmblem: 'TableRow_rankEmblem_bd21e4b',
        rankName: 'TableRow_rankName_9b4a57c7',
        text__active: 'TableRow_text__active_511f27e1',
        divider: 'TableRow_divider_fc41e995',
    },
    H = a(({ itemIndex: e }) => {
        const { model: s } = M(),
            { topPercentage: a } = s.root.get(),
            { rank: t, from: r, to: o } = s.computes.item(e),
            c = s.computes.divisions(e),
            l = s.computes.currentDivision();
        switch (t) {
            case A.Sixth:
                return i.jsx('div', {
                    className: n($.cell, $.cell__united),
                    children: i.jsx(v, {
                        text: R.strings.comp7_ext.progressionTableTooltip.topRank(),
                        binding: { topPercentage: a },
                    }),
                });
            case A.Fifth:
                return i.jsx('div', {
                    className: n($.cell, $.cell__united),
                    children: i.jsx(v, {
                        text: R.strings.comp7_ext.progressionTableTooltip.pointsFrom(),
                        binding: { from: r },
                    }),
                });
            default:
                return i.jsx(i.Fragment, {
                    children: x(c.length, (e) => {
                        const s = w(r, o, c.length),
                            a = r + s * e;
                        return i.jsx(
                            'div',
                            {
                                className: n($.cell, $.cell__range),
                                children: i.jsx(v, {
                                    text: R.strings.comp7_ext.progressionTableTooltip.pointsRange(),
                                    binding: { from: a, to: a + s - 1 },
                                    classMix: n($.text, e === l.index && $.text__active),
                                }),
                            },
                            `${e}_${a}`,
                        );
                    }),
                });
        }
    }),
    q = a(({ itemIndex: e, className: s, hasDivider: a = !0 }) => {
        const { model: t } = M(),
            { seasonName: r, currentItemIndex: o } = t.root.get(),
            { rank: c } = t.computes.item(e);
        return i.jsxs('div', {
            className: n($.base, o === e && $.base__active, s),
            children: [
                i.jsxs('div', {
                    className: $.container,
                    children: [
                        i.jsxs('div', {
                            className: n($.cell, $.cell__rank),
                            children: [
                                i.jsx(j, { rank: c, size: k.x22, seasonName: r, className: $.rankEmblem }),
                                i.jsx('div', { className: $.rankName, children: N(c) }),
                            ],
                        }),
                        i.jsx(H, { itemIndex: e }),
                    ],
                }),
                a && i.jsx('div', { className: $.divider }),
            ],
        });
    }),
    z = 'Table_24abbb5a',
    J = a(({ className: e }) => {
        const { model: s } = M(),
            a = s.items.get().length - 1;
        return i.jsxs('div', {
            className: n(z, e),
            children: [i.jsx(S, {}), x(s.items.get().length, (e) => i.jsx(q, { itemIndex: e, hasDivider: e < a }, e))],
        });
    }),
    U = 'App_2c4b0ed7',
    X = 'App_timer_c376641d',
    G = 'App_timer__active_d318a2be',
    K = 'App_container_9381f775',
    O = 'App_left_1c6a7f32',
    Q = 'App_right_9365ab5f',
    V = 'App_divider_38d98f1f',
    W = 'App_rankEmblem_748380a',
    Y = 'App_rankInfo_eb96ddbb',
    Z = 'App_score_45b617db',
    ee = 'App_rankText_7202f90f',
    se = 'App_division_aae1175d',
    ae = 'App_table_a2ca34a1',
    ie = a(() => {
        const { model: e } = M(),
            { seasonName: s, currentItemIndex: a, currentScore: t, rankInactivityCount: r } = e.root.get(),
            o = e.computes.item(a),
            c = e.computes.currentDivision(),
            l = u(o.rank),
            d = T(o.rank) + (l ? `${R.strings.common.common.dot()} ` : '');
        return i.jsxs('div', {
            className: U,
            children: [
                i.jsx('div', { className: n(X, o.hasRankInactivity && r <= I && G) }),
                i.jsxs('div', {
                    className: K,
                    children: [
                        i.jsxs('div', {
                            className: O,
                            children: [
                                i.jsx(j, { rank: o.rank, size: k.x150, seasonName: s, division: c.name, className: W }),
                                i.jsxs('div', {
                                    className: Y,
                                    children: [
                                        i.jsx('div', { className: Z, children: i.jsx(b, { value: t }) }),
                                        i.jsxs('div', {
                                            className: ee,
                                            children: [
                                                i.jsx('div', { children: d }),
                                                l && c.name && i.jsx('div', { className: se, children: f(c.name) }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        i.jsx('div', { className: V }),
                        i.jsx('div', { className: Q, children: i.jsx(C, {}) }),
                    ],
                }),
                i.jsx(J, { className: ae }),
            ],
        });
    });
h(i.jsx(E, { children: i.jsx(g, { children: i.jsx(ie, {}) }) }));
