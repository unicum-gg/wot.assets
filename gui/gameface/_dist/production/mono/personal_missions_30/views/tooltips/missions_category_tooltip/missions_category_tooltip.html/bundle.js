import { n as e, j as s, f as n } from '../../../../chunks/vendor.js';
import {
    i as o,
    v as t,
    I as a,
    F as i,
    L as r,
    Z as c,
    X as l,
    $ as m,
    _,
    Y as p,
    at as d,
    M as h,
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
    B = {
        base: 'ColumnItem_f772e009',
        base__roles: 'ColumnItem_base__roles_fabefe49',
        icon: 'ColumnItem_icon_876d9b1b',
        text: 'ColumnItem_text_f537f721',
    };
function C({ item: e, contentType: o = 'roles', className: t }) {
    return s.jsxs('div', {
        className: n(B.base, B[`base__${o}`], t),
        children: [
            s.jsx(a, { path: `personal_missions_30.common.${o}.${r(e)}`, className: B.icon }),
            s.jsx(i, { className: B.text, path: `${I[o]}.${r(e)}` }),
        ],
    });
}
const $ = 'assault',
    L = 'breakthrough',
    R = 'sniper',
    w = 'support',
    S = 'universal',
    M = (e) => {
        switch (e) {
            case u.ASSAULT:
            case u.SNIPER:
                return s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(C, { item: m, contentType: 'vehicleTypes' }),
                        s.jsx(C, { item: _, contentType: 'vehicleTypes' }),
                        s.jsx(C, { item: p, contentType: 'vehicleTypes' }),
                    ],
                });
            case u.SUPPORT:
                return s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(C, { item: c, contentType: 'vehicleTypes' }),
                        s.jsx(C, { item: l, contentType: 'vehicleTypes' }),
                    ],
                });
            default:
                throw new Error(`unhandled categoryType ${e}`);
        }
    },
    P = (e) => {
        switch (e) {
            case u.ASSAULT:
                return s.jsxs(s.Fragment, {
                    children: [s.jsx(C, { item: L }), s.jsx(C, { item: $ }), s.jsx(C, { item: S })],
                });
            case u.SNIPER:
                return s.jsxs(s.Fragment, { children: [s.jsx(C, { item: R }), s.jsx(C, { item: w })] });
            case u.SUPPORT:
                return null;
            default:
                throw new Error(`unhandled categoryType ${e}`);
        }
    },
    F = {
        base: 'InnerBlock_4e0a1101',
        description: 'InnerBlock_description_e25909eb',
        base__support: 'InnerBlock_base__support_8a259d83',
        content: 'InnerBlock_content_dd2985b',
        content__noRoles: 'InnerBlock_content__noRoles_b0516207',
        subtitle: 'InnerBlock_subtitle_c3819b5a',
        column: 'InnerBlock_column_9f423fea',
        verticalLine: 'InnerBlock_verticalLine_af25fb85',
    },
    H = e(function () {
        const { model: e } = y(),
            o = e.category.get(),
            t = Boolean(P(o));
        return s.jsxs('div', {
            className: n(F.base, F[`base__${o}`]),
            children: [
                s.jsx(i, {
                    split: !0,
                    className: F.description,
                    path: `personal_missions_30.tooltip.missionsCategory.innerBlock.description.${o}`,
                }),
                t
                    ? s.jsxs('div', {
                          className: F.content,
                          children: [
                              s.jsxs('div', {
                                  className: F.column,
                                  children: [
                                      s.jsx(i, {
                                          className: F.subtitle,
                                          path: 'personal_missions_30.tooltip.missionsCategory.innerBlock.vehiclesTypes',
                                      }),
                                      M(o),
                                  ],
                              }),
                              s.jsx('div', { className: F.verticalLine }),
                              s.jsxs('div', {
                                  className: F.column,
                                  children: [
                                      s.jsx(i, {
                                          className: F.subtitle,
                                          path: 'personal_missions_30.tooltip.missionsCategory.innerBlock.withRoles',
                                      }),
                                      P(o),
                                  ],
                              }),
                          ],
                      })
                    : s.jsxs('div', {
                          className: n(F.content, F.content__noRoles),
                          children: [
                              s.jsx(i, {
                                  className: F.subtitle,
                                  path: 'personal_missions_30.tooltip.missionsCategory.innerBlock.noRoles',
                              }),
                              s.jsx('div', { className: F.column, children: M(o) }),
                          ],
                      }),
            ],
        });
    }),
    A = 'MissionsCategoryTooltip_c7151f3b',
    E = 'MissionsCategoryTooltip_footer_e1c7b92d',
    U = e(function () {
        const { model: e } = y();
        return s.jsx(d, {
            className: A,
            'data-name': 'MissionsCategoryTooltip',
            children: s.jsxs(d.Decorator, {
                children: [
                    s.jsx(k, {}),
                    s.jsx(j, { children: s.jsx(H, {}) }),
                    s.jsx(i, {
                        path: 'personal_missions_30.tooltip.missionsCategory.footer',
                        params: {
                            operationName: e.operationName.get(),
                            minLevel: h(e.minLevel.get()),
                            maxLevel: h(e.maxLevel.get()),
                        },
                        className: E,
                    }),
                ],
            }),
        });
    });
x(s.jsx(b, { children: s.jsx(U, {}) }));
