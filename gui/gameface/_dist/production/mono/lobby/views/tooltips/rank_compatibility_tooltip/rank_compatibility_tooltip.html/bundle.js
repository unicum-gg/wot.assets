import { j as a, J as s, R as i, I as e } from '../../../../chunks/vendor.js';
import { m as t, i as n, n as l, cd as o, cP as m } from '../../../../chunks/lib.js';
import { T as r } from '../../../../chunks/tooltip_decorator.js';
import { R as c, a as d } from '../../../../chunks/rank_emblem.js';
import { b as p } from '../../../../chunks/get_rank_name.js';
import { R as b } from '../../../../chunks/enums.js';
import { t as _ } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ import '../../../../chunks/get_division_name.js';
const h = 'RankCompatibilityTable_d1e1f461',
    k = 'RankCompatibilityTable_row_1979ce',
    j = 'RankCompatibilityTable_tableHeading_e798864c',
    x = 'RankCompatibilityTable_heading_fc477f38',
    g = 'RankCompatibilityTable_teammates_e198b34',
    N = 'RankCompatibilityTable_teammates__heading_18846859',
    v = 'RankCompatibilityTable_rank_c960c039',
    u = 'RankCompatibilityTable_emptySlot_7884dfc9',
    y = 'RankCompatibilityTable_divider_e6a19cf8',
    T = [b.First, b.Second, b.Third, b.Fourth, b.Fifth, b.Sixth],
    f = ({ seasonName: e, rankRangeRestriction: n, className: l, classNames: o }) =>
        a.jsxs('div', {
            className: s(h, l),
            children: [
                a.jsxs('div', {
                    className: s(k, j, null == o ? void 0 : o.tableHeading),
                    children: [
                        a.jsx('div', {
                            className: x,
                            children: R.strings.comp7_ext.rankCompatibilityTable.playersRank(),
                        }),
                        a.jsx('div', {
                            className: s(g, N),
                            children: a.jsx('div', {
                                className: x,
                                children: R.strings.comp7_ext.rankCompatibilityTable.teammatesRank(),
                            }),
                        }),
                    ],
                }),
                T.map((l, o) =>
                    a.jsxs(
                        i.Fragment,
                        {
                            children: [
                                a.jsxs('div', {
                                    className: k,
                                    children: [
                                        a.jsxs('div', {
                                            className: k,
                                            children: [
                                                a.jsx(c, { rank: l, size: d.x22, seasonName: e, className: v }),
                                                p(l),
                                            ],
                                        }),
                                        a.jsx('div', {
                                            className: s(k, g),
                                            children: t(T.length, (s) =>
                                                Math.abs(s - o) <= n
                                                    ? a.jsx(c, { rank: T[s], size: d.x22, seasonName: e }, s)
                                                    : a.jsx('div', { className: u }, s),
                                            ),
                                        }),
                                    ],
                                }),
                                o !== T.length - 1 && a.jsx('div', { className: s(_.divider, y) }),
                            ],
                        },
                        o,
                    ),
                ),
            ],
        }),
    [C, F] = n()(({ observableModel: a }) => ({ root: a.object() }), l),
    M = 'App_bce8e88b',
    S = 'App_description_e694643b',
    z = 'App_table_8784516a',
    A = e(() => {
        const { model: i } = F(),
            { seasonName: e, squadSize: t, rankRangeRestriction: n } = i.root.get();
        return a.jsxs('div', {
            className: s(M, _.base),
            children: [
                a.jsx(o, {
                    text: R.strings.comp7_ext.rankCompatibilityTooltip.heading(),
                    binding: { count: t },
                    classMix: _.heading,
                }),
                a.jsx(o, {
                    text: R.strings.comp7_ext.rankCompatibilityTooltip.description(),
                    classMix: s(_.description, S),
                }),
                a.jsx(f, { seasonName: e, rankRangeRestriction: n, className: z }),
            ],
        });
    });
m(a.jsx(C, { children: a.jsx(r, { children: a.jsx(A, {}) }) }));
