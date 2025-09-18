import { j as a, A as s, R as i, x as e } from '../../../../chunks/vendor.js';
import { m as t, i as n, n as l, F as m, r as o } from '../../../../chunks/lib.js';
import { t as r, T as c } from '../../../../chunks/tooltips.module.js';
import { R as d, a as b } from '../../../../chunks/rank_emblem.js';
import { b as p } from '../../../../chunks/get_rank_name.js';
import { R as _ } from '../../../../chunks/enums.js';
/* empty css                        */ import '../../../../chunks/get_division_name.js';
const x = 'RankCompatibilityTable_d1e1f461',
    h = 'RankCompatibilityTable_row_1979ce',
    k = 'RankCompatibilityTable_tableHeading_e798864c',
    j = 'RankCompatibilityTable_heading_fc477f38',
    g = 'RankCompatibilityTable_teammates_e198b34',
    N = 'RankCompatibilityTable_teammates__heading_18846859',
    v = 'RankCompatibilityTable_rank_c960c039',
    u = 'RankCompatibilityTable_emptySlot_7884dfc9',
    y = 'RankCompatibilityTable_divider_e6a19cf8',
    T = [_.First, _.Second, _.Third, _.Fourth, _.Fifth, _.Sixth],
    C = ({ seasonName: e, rankRangeRestriction: n, className: l, classNames: m }) =>
        a.jsxs('div', {
            className: s(x, l),
            children: [
                a.jsxs('div', {
                    className: s(h, k, null == m ? void 0 : m.tableHeading),
                    children: [
                        a.jsx('div', {
                            className: j,
                            children: R.strings.comp7_ext.rankCompatibilityTable.playersRank(),
                        }),
                        a.jsx('div', {
                            className: s(g, N),
                            children: a.jsx('div', {
                                className: j,
                                children: R.strings.comp7_ext.rankCompatibilityTable.teammatesRank(),
                            }),
                        }),
                    ],
                }),
                T.map((l, m) =>
                    a.jsxs(
                        i.Fragment,
                        {
                            children: [
                                a.jsxs('div', {
                                    className: h,
                                    children: [
                                        a.jsxs('div', {
                                            className: h,
                                            children: [
                                                a.jsx(d, { rank: l, size: b.x22, seasonName: e, className: v }),
                                                p(l),
                                            ],
                                        }),
                                        a.jsx('div', {
                                            className: s(h, g),
                                            children: t(T.length, (s) =>
                                                Math.abs(s - m) <= n
                                                    ? a.jsx(d, { rank: T[s], size: b.x22, seasonName: e }, s)
                                                    : a.jsx('div', { className: u }, s),
                                            ),
                                        }),
                                    ],
                                }),
                                m !== T.length - 1 && a.jsx('div', { className: s(r.divider, y) }),
                            ],
                        },
                        m,
                    ),
                ),
            ],
        }),
    [f, F] = n()(({ observableModel: a }) => ({ root: a.object() }), l),
    A = 'App_bce8e88b',
    M = 'App_description_e694643b',
    S = 'App_table_8784516a',
    z = e(() => {
        const { model: i } = F(),
            { seasonName: e, squadSize: t, rankRangeRestriction: n } = i.root.get();
        return a.jsxs('div', {
            className: s(A, r.base),
            children: [
                a.jsx(m, {
                    text: R.strings.comp7_ext.rankCompatibilityTooltip.heading(),
                    binding: { count: t },
                    classMix: r.heading,
                }),
                a.jsx(m, {
                    text: R.strings.comp7_ext.rankCompatibilityTooltip.description(),
                    classMix: s(r.description, M),
                }),
                a.jsx(C, { seasonName: e, rankRangeRestriction: n, className: S }),
            ],
        });
    });
o(a.jsx(f, { children: a.jsx(c, { children: a.jsx(z, {}) }) }));
