import { j as a, w as s, R as i, y as e } from '../../../../chunks/vendor.js';
import { e as t, i as n, aC as l, q as o, aA as m } from '../../../../chunks/lib.js';
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
    C = ({ seasonName: e, rankRangeRestriction: n, className: l, classNames: o }) =>
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
    [f, A] = n()(({ observableModel: a }) => ({ root: a.object() }), l),
    F = 'App_bce8e88b',
    M = 'App_description_e694643b',
    S = 'App_table_8784516a',
    z = e(() => {
        const { model: i } = A(),
            { seasonName: e, squadSize: t, rankRangeRestriction: n } = i.root.get();
        return a.jsxs('div', {
            className: s(F, _.base),
            children: [
                a.jsx(o, {
                    text: R.strings.comp7_ext.rankCompatibilityTooltip.heading(),
                    binding: { count: t },
                    classMix: _.heading,
                }),
                a.jsx(o, {
                    text: R.strings.comp7_ext.rankCompatibilityTooltip.description(),
                    classMix: s(_.description, M),
                }),
                a.jsx(C, { seasonName: e, rankRangeRestriction: n, className: S }),
            ],
        });
    });
m(a.jsx(f, { children: a.jsx(r, { children: a.jsx(z, {}) }) }));
