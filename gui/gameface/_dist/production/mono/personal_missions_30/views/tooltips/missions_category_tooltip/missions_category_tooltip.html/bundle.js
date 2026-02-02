import { n as e, j as s, f as n } from '../../../../chunks/vendor.js';
import {
    i as o,
    v as t,
    I as a,
    F as i,
    A as r,
    L as c,
    S as l,
    H as m,
    M as _,
    E as p,
    at as d,
    C as h,
    d as x,
} from '../../../../chunks/lib.js';
import { G as j } from '../../../../chunks/gradient_decorator.js';
import { M as u } from '../../../../chunks/enums.js';
/* empty css                       */ const [b, y] = o()(
        ({ observableModel: e }) => e.primitives(['category', 'operationName', 'minLevel', 'maxLevel']),
        t,
    ),
    v = 'Header_a57509ea',
    g = 'Header_content_84bb0203',
    N = 'Header_category_73a14ab3',
    f = 'Header_title_e89d676b',
    T = 'Header_description_2cc816f6',
    k = e(function () {
        const { model: e } = y(),
            n = e.category.get();
        return s.jsxs('div', {
            className: v,
            children: [
                s.jsx(a, {
                    path: `personal_missions_30.category.c_64x64.${n}`,
                    width: '64rem',
                    height: '64rem',
                    className: N,
                }),
                s.jsxs('div', {
                    className: g,
                    children: [
                        s.jsx(i, { className: f, path: `personal_missions_30.common.category.${n}` }),
                        s.jsx(i, {
                            split: !0,
                            className: T,
                            path: `personal_missions_30.tooltip.missionsCategory.description.${n}`,
                        }),
                    ],
                }),
            ],
        });
    }),
    I = { ['roles']: 'personal_missions_30.common.role', ['vehicleTypes']: 'menu.header.vehicleType' },
    C = {
        base: 'ColumnItem_f772e009',
        base__roles: 'ColumnItem_base__roles_fabefe49',
        icon: 'ColumnItem_icon_876d9b1b',
        text: 'ColumnItem_text_f537f721',
    };
function B({ item: e, contentType: o = 'roles', className: t }) {
    return s.jsxs('div', {
        className: n(C.base, C[`base__${o}`], t),
        children: [
            s.jsx(a, { path: `personal_missions_30.common.${o}.${r(e)}`, className: C.icon }),
            s.jsx(i, { className: C.text, path: `${I[o]}.${r(e)}` }),
        ],
    });
}
const L = 'assault',
    $ = 'breakthrough',
    R = 'sniper',
    S = 'support',
    w = 'universal',
    H = (e) => {
        switch (e) {
            case u.ASSAULT:
            case u.SNIPER:
                return s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(B, { item: m, contentType: 'vehicleTypes' }),
                        s.jsx(B, { item: _, contentType: 'vehicleTypes' }),
                        s.jsx(B, { item: p, contentType: 'vehicleTypes' }),
                    ],
                });
            case u.SUPPORT:
                return s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(B, { item: c, contentType: 'vehicleTypes' }),
                        s.jsx(B, { item: l, contentType: 'vehicleTypes' }),
                    ],
                });
            default:
                throw new Error(`unhandled categoryType ${e}`);
        }
    },
    M = (e) => {
        switch (e) {
            case u.ASSAULT:
                return s.jsxs(s.Fragment, {
                    children: [s.jsx(B, { item: $ }), s.jsx(B, { item: L }), s.jsx(B, { item: w })],
                });
            case u.SNIPER:
                return s.jsxs(s.Fragment, { children: [s.jsx(B, { item: R }), s.jsx(B, { item: S })] });
            case u.SUPPORT:
                return null;
            default:
                throw new Error(`unhandled categoryType ${e}`);
        }
    },
    P = {
        base: 'InnerBlock_4e0a1101',
        description: 'InnerBlock_description_e25909eb',
        base__support: 'InnerBlock_base__support_8a259d83',
        content: 'InnerBlock_content_dd2985b',
        content__noRoles: 'InnerBlock_content__noRoles_b0516207',
        subtitle: 'InnerBlock_subtitle_c3819b5a',
        column: 'InnerBlock_column_9f423fea',
        verticalLine: 'InnerBlock_verticalLine_af25fb85',
    },
    A = e(function () {
        const { model: e } = y(),
            o = e.category.get(),
            t = Boolean(M(o));
        return s.jsxs('div', {
            className: n(P.base, P[`base__${o}`]),
            children: [
                s.jsx(i, {
                    split: !0,
                    className: P.description,
                    path: `personal_missions_30.tooltip.missionsCategory.innerBlock.description.${o}`,
                }),
                t
                    ? s.jsxs('div', {
                          className: P.content,
                          children: [
                              s.jsxs('div', {
                                  className: P.column,
                                  children: [
                                      s.jsx(i, {
                                          className: P.subtitle,
                                          path: 'personal_missions_30.tooltip.missionsCategory.innerBlock.vehiclesTypes',
                                      }),
                                      H(o),
                                  ],
                              }),
                              s.jsx('div', { className: P.verticalLine }),
                              s.jsxs('div', {
                                  className: P.column,
                                  children: [
                                      s.jsx(i, {
                                          className: P.subtitle,
                                          path: 'personal_missions_30.tooltip.missionsCategory.innerBlock.withRoles',
                                      }),
                                      M(o),
                                  ],
                              }),
                          ],
                      })
                    : s.jsxs('div', {
                          className: n(P.content, P.content__noRoles),
                          children: [
                              s.jsx(i, {
                                  className: P.subtitle,
                                  path: 'personal_missions_30.tooltip.missionsCategory.innerBlock.noRoles',
                              }),
                              s.jsx('div', { className: P.column, children: H(o) }),
                          ],
                      }),
            ],
        });
    }),
    E = 'MissionsCategoryTooltip_c7151f3b',
    F = 'MissionsCategoryTooltip_footer_e1c7b92d',
    U = e(function () {
        const { model: e } = y();
        return s.jsx(d, {
            className: E,
            'data-name': 'MissionsCategoryTooltip',
            children: s.jsxs(d.Decorator, {
                children: [
                    s.jsx(k, {}),
                    s.jsx(j, { children: s.jsx(A, {}) }),
                    s.jsx(i, {
                        path: 'personal_missions_30.tooltip.missionsCategory.footer',
                        params: {
                            operationName: e.operationName.get(),
                            minLevel: h(e.minLevel.get()),
                            maxLevel: h(e.maxLevel.get()),
                        },
                        className: F,
                    }),
                ],
            }),
        });
    });
x(s.jsx(b, { children: s.jsx(U, {}) }));
