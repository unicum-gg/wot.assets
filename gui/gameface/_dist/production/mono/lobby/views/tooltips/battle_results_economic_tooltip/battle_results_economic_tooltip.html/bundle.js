import { j as s, f as e, R as i, n as a, p as t } from '../../../../chunks/vendor.js';
import { F as l, a as d, a3 as c, m as r, al as o, z as n } from '../../../../chunks/lib.js';
import { d as m } from '../../../../chunks/TooltipDecorator2.js';
/* empty css                                 */ import { i as u, P as j, s as _ } from '../../../../chunks/profit.js';
const x = 'Listitem_819fcb20',
    b = 'Listitem_title_d8db9103',
    h = 'Listitem_description_7951e7eb',
    v = 'Listitem_base__total_ec7b4e6a',
    p = 'Listitem_dotted_b30a04ff',
    N = 'Listitem_dotted__inline_b0618b32',
    f = 'Listitem_count_a258bf96',
    y = 'Listitem_profit_46ea4ebe',
    g = 'Listitem_text_a1f562d3',
    T = ({ label: a, firstValue: t, secondValue: d, useSecondValues: c, totalValue: r }) =>
        s.jsxs('div', {
            className: e(x, r && v),
            children: [
                s.jsxs('div', {
                    className: b,
                    children: [
                        s.jsx('div', {
                            className: h,
                            children: s.jsx('div', {
                                className: g,
                                children: s.jsx(l, {
                                    text: `${a}%(line)`,
                                    binding: { line: s.jsx('div', { className: e(p, N) }) },
                                }),
                            }),
                        }),
                        s.jsx('div', { className: p }),
                    ],
                }),
                s.jsx('div', {
                    className: f,
                    children: t.isShown
                        ? s.jsxs(i.Fragment, {
                              children: [
                                  s.jsx('div', { className: p }),
                                  s.jsx('div', {
                                      className: y,
                                      children:
                                          t.currencyType &&
                                          u(t.currencyType) &&
                                          s.jsx(j, {
                                              type: t.currencyType,
                                              value: t.value,
                                              size: _.small,
                                              modifiers: t.modifiers,
                                          }),
                                  }),
                              ],
                          })
                        : s.jsx('div', { className: p }),
                }),
                c &&
                    s.jsx('div', {
                        className: f,
                        children:
                            d.isShown &&
                            s.jsxs(i.Fragment, {
                                children: [
                                    s.jsx('div', { className: p }),
                                    s.jsx('div', {
                                        className: y,
                                        children:
                                            d.currencyType &&
                                            u(d.currencyType) &&
                                            s.jsx(j, {
                                                type: d.currencyType,
                                                value: d.value,
                                                size: _.small,
                                                modifiers: d.modifiers,
                                            }),
                                    }),
                                ],
                            }),
                    }),
            ],
        }),
    k = 2,
    L = 3,
    [V, F] = d()(({ observableModel: s, readByPath: e }) => {
        const i = { root: s.object(), results: [e('earned'), e('expenses'), e('total'), e('additional')] },
            t = a(() => r(i.results, (s, e) => ({ ...s, isTotal: e === k, isAdditional: e === L })), { equals: c });
        return { ...i, computes: { getResultsList: t } };
    }, o),
    A = {
        base: 'Content_bd627888',
        title: 'Content_title_9e9cd55a',
        block: 'Content_block_604708c6',
        block__additional: 'Content_block__additional_315b276a',
    },
    S = t(() => {
        const { model: i } = F();
        return s.jsx('div', {
            className: A.base,
            children: r(
                i.computes.getResultsList(),
                (i, a) =>
                    i.records.length > 0 &&
                    s.jsxs(
                        'div',
                        {
                            className: e(A.block, i.isAdditional && A.block__additional),
                            children: [
                                i.title && !i.isTotal && s.jsx('div', { className: A.title, children: i.title }),
                                s.jsx('div', {
                                    className: A.list,
                                    children: r(i.records, (e, a) =>
                                        s.jsx(
                                            T,
                                            { ...e, useSecondValues: i.useSecondValues, totalValue: i.isTotal },
                                            a,
                                        ),
                                    ),
                                }),
                            ],
                        },
                        a,
                    ),
            ),
        });
    }),
    C = 'Footer_1b733abe',
    $ = 'Footer_icon_abda8adb',
    w = 'Footer_description_398ba227',
    z = t(() => {
        const { model: e } = F(),
            { premiumAdvertising: i } = e.root.get();
        return s.jsxs('div', {
            className: C,
            children: [s.jsx('div', { className: $ }), s.jsx('div', { className: w, children: i })],
        });
    }),
    H = 'Header_36d24a5c',
    q = 'Header_icon_442a1490',
    B = 'Header_description_d221db51',
    D = t(() => {
        const { model: e } = F(),
            { currencyType: i } = e.root.get();
        return s.jsxs('div', {
            className: H,
            children: [
                s.jsx('div', {
                    className: q,
                    style: { backgroundImage: `url(${R.images.white_tiger.gui.maps.icons.feature.profit.$dyn(i)})` },
                }),
                s.jsx('div', { className: B, children: R.strings.quests.bonusName.$dyn(i) }),
            ],
        });
    }),
    P = { base: 'BattleResultsEconomicTooltipApp_139506b8' },
    E = t(() => {
        const { model: e } = F(),
            { premiumAdvertising: i } = e.root.get();
        return s.jsxs('div', {
            className: P.base,
            children: [
                s.jsx('div', { className: P.header, children: s.jsx(D, {}) }),
                s.jsx('div', { className: P.header, children: s.jsx(S, {}) }),
                i && s.jsx('div', { className: P.footer, children: s.jsx(z, {}) }),
            ],
        });
    });
n(s.jsx(V, { children: s.jsx(m, { children: s.jsx(E, {}) }) }));
