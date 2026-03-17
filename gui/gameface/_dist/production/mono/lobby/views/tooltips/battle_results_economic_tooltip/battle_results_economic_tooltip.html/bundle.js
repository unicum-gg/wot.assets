import { x as s, j as e, z as a, y as i } from '../../../../chunks/vendor.js';
import { a as t, c as d, m as l, a8 as c, v as r, a6 as n, d9 as o } from '../../../../chunks/lib.js';
import { P as m, s as _ } from '../../../../chunks/profit.js';
const j = 2,
    x = 3,
    [u, v] = t()(({ observableModel: e, readByPath: a }) => {
        const i = { root: e.object(), results: [a('earned'), a('expenses'), a('total'), a('additional')] },
            t = s(() => l(i.results, (s, e) => ({ ...s, isTotal: e === j, isAdditional: e === x })), { equals: d });
        return { ...i, computes: { getResultsList: t } };
    }, c),
    h = 'ListItem_9ed21754',
    b = 'ListItem_title_ffdc3010',
    N = 'ListItem_description_d694fdcd',
    p = 'ListItem_base__total_ea38608d',
    f = 'ListItem_dotted_dc00eddb',
    g = 'ListItem_dotted__inline_c714df3',
    y = 'ListItem_count_16457bf9',
    L = 'ListItem_profit_c0826df5',
    k = 'ListItem_text_8419d244',
    I = ({ label: s, firstValue: i, secondValue: t, useSecondValues: d, totalValue: l }) =>
        e.jsxs('div', {
            className: a(h, l && p),
            children: [
                e.jsxs('div', {
                    className: b,
                    children: [
                        e.jsx('div', {
                            className: N,
                            children: e.jsx('div', {
                                className: k,
                                children: e.jsx(r, {
                                    text: `${s}%(line)`,
                                    binding: { line: e.jsx('div', { className: a(f, g) }) },
                                }),
                            }),
                        }),
                        e.jsx('div', { className: f }),
                    ],
                }),
                e.jsx('div', {
                    className: y,
                    children: i.isShown
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  e.jsx('div', { className: f }),
                                  e.jsx('div', {
                                      className: L,
                                      children: e.jsx(m, {
                                          type: i.currencyType,
                                          value: i.value,
                                          size: _.small,
                                          modifiers: i.modifiers,
                                      }),
                                  }),
                              ],
                          })
                        : e.jsx('div', { className: f }),
                }),
                d &&
                    e.jsx('div', {
                        className: y,
                        children:
                            t.isShown &&
                            e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx('div', { className: f }),
                                    e.jsx('div', {
                                        className: L,
                                        children: e.jsx(m, {
                                            type: t.currencyType,
                                            value: t.value,
                                            size: _.small,
                                            modifiers: t.modifiers,
                                        }),
                                    }),
                                ],
                            }),
                    }),
            ],
        }),
    V = {
        base: 'Content_bd627888',
        title: 'Content_title_9e9cd55a',
        block: 'Content_block_604708c6',
        block__additional: 'Content_block__additional_315b276a',
    },
    T = i(() => {
        const { model: s } = v();
        return e.jsx('div', {
            className: V.base,
            children: l(
                s.computes.getResultsList(),
                (s, i) =>
                    s.records.length > 0 &&
                    e.jsxs(
                        'div',
                        {
                            className: a(V.block, s.isAdditional && V.block__additional),
                            children: [
                                s.title && !s.isTotal && e.jsx('div', { className: V.title, children: s.title }),
                                e.jsx('div', {
                                    className: V.list,
                                    children: l(s.records, (a, i) =>
                                        e.jsx(
                                            I,
                                            { ...a, useSecondValues: s.useSecondValues, totalValue: s.isTotal },
                                            i,
                                        ),
                                    ),
                                }),
                            ],
                        },
                        i,
                    ),
            ),
        });
    }),
    A = 'Footer_1b733abe',
    F = 'Footer_icon_cb4ec2ad',
    S = 'Footer_description_398ba227',
    C = i(() => {
        const { model: s } = v(),
            { premiumAdvertising: a } = s.root.get();
        return e.jsxs('div', {
            className: A,
            children: [e.jsx('div', { className: F }), e.jsx('div', { className: S, children: a })],
        });
    }),
    $ = 'Header_36d24a5c',
    z = 'Header_icon_442a1490',
    H = 'Header_description_d221db51',
    q = i(() => {
        const { model: s } = v(),
            { currencyType: a } = s.root.get();
        return e.jsxs('div', {
            className: $,
            children: [
                e.jsx('div', {
                    className: z,
                    style: { backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.profit.$dyn(a)})` },
                }),
                e.jsx('div', { className: H, children: R.strings.quests.bonusName.$dyn(a) }),
            ],
        });
    }),
    w = { base: 'App_78b07e4b' },
    P = i(() => {
        const { model: s } = v(),
            { premiumAdvertising: a } = s.root.get();
        return e.jsxs('div', {
            className: w.base,
            children: [
                e.jsx('div', { className: w.header, children: e.jsx(q, {}) }),
                e.jsx('div', { className: w.header, children: e.jsx(T, {}) }),
                a && e.jsx('div', { className: w.footer, children: e.jsx(C, {}) }),
            ],
        });
    });
n(e.jsx(u, { children: e.jsx(o, { children: e.jsx(P, {}) }) }));
