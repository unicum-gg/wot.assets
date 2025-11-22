import { j as e, f as s, _ as t, n as o } from '../../../../chunks/vendor.js';
import {
    i as n,
    f as i,
    v as l,
    at as r,
    S as a,
    r as c,
    F as p,
    I as d,
    au as _,
    d as m,
} from '../../../../chunks/lib.js';
import { G as x } from '../../../../chunks/gradient_decorator.js';
/* empty css                       */ const [u, b] = n()((e) => {
    const s = e.observableModel.primitives(['params', 'type']);
    return {
        type: s.type,
        computes: {
            params: i.primitive(function (e) {
                return e(s.params.get());
            }),
        },
    };
}, l);
const j = 'Index_80365d11',
    h = 'Index_base__withHeader_7d114cd0',
    f = 'Index_title_79c25340',
    v = 'Index_body_b1cb19fb',
    y =
        ((N = (() => {
            let e;
            const s = (s, o) => {
                var n, i;
                return (
                    !1 ===
                        ((e) =>
                            'object' == typeof e &&
                            null !== e &&
                            ((e) =>
                                !(
                                    'string' != typeof e.body ||
                                    (void 0 !== e.header && 'string' != typeof e.header) ||
                                    (void 0 !== e.split && 'boolean' != typeof e.split)
                                ))(e))(s) &&
                        ((e = o),
                        (i = '$input'),
                        ((('object' == typeof (n = s) && null !== n) ||
                            t(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: i + '',
                                    expected: 'SimpleTooltipParams',
                                    value: n,
                                },
                                e,
                            )) &&
                            ((s, o, n = !0) =>
                                ('string' == typeof s.body ||
                                    t(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: o + '.body',
                                            expected: 'string',
                                            value: s.body,
                                        },
                                        e,
                                    )) &&
                                (void 0 === s.header ||
                                    'string' == typeof s.header ||
                                    t(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: o + '.header',
                                            expected: '(string | undefined)',
                                            value: s.header,
                                        },
                                        e,
                                    )) &&
                                (void 0 === s.split ||
                                    'boolean' == typeof s.split ||
                                    t(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: o + '.split',
                                            expected: '(boolean | undefined)',
                                            value: s.split,
                                        },
                                        e,
                                    )))(n, i + '', !0)) ||
                            t(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: i + '',
                                    expected: 'SimpleTooltipParams',
                                    value: n,
                                },
                                e,
                            )),
                    s
                );
            };
            return (e, t) => s(JSON.parse(e), t);
        })()),
        function () {
            return b().model.computes.params(N);
        });
var N;
const g = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                default: function () {
                    const t = y(),
                        o = Boolean(t.header);
                    return e.jsx(r.Decorator, {
                        children: e.jsxs('div', {
                            className: s(j, o && h),
                            children: [
                                o && e.jsx('div', { className: f, children: t.header }),
                                e.jsx(a, { split: void 0 === t.split || t.split, text: t.body, className: v }),
                            ],
                        }),
                    });
                },
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    k = 'BulletListTem_71e7474e',
    I = 'BulletListTem_bullet_5d2661b1',
    B = 'BulletListTem_content_74f42074',
    P = ({ className: t, children: o }) => {
        const n = c.resolve('strings');
        return e.jsxs('div', {
            className: s(k, t),
            children: [
                e.jsx('div', { className: I, children: n.readOrEmpty('common.common.bullet') }),
                e.jsx('div', { className: B, children: o }),
            ],
        });
    },
    T = {
        base: 'InnerBlock_ea6c3fd8',
        title: 'InnerBlock_title_15bf72a',
        description: 'InnerBlock_description_20b6cccd',
        subTitle: 'InnerBlock_subTitle_b0d5cb4f',
        bullets: 'InnerBlock_bullets_813d7b5',
    };
function O() {
    return e.jsxs('div', {
        className: T.base,
        children: [
            e.jsx(p, {
                path: 'personal_missions_30.tooltip.personalMissionsPoints.innerBlock.title',
                className: T.title,
            }),
            e.jsx(p, {
                path: 'personal_missions_30.tooltip.personalMissionsPoints.innerBlock.description',
                className: T.description,
            }),
            e.jsx(p, {
                path: 'personal_missions_30.tooltip.personalMissionsPoints.innerBlock.subTitle',
                className: T.subTitle,
            }),
            e.jsxs('div', {
                className: T.bullets,
                children: [
                    e.jsx(P, {
                        children: e.jsx(p, {
                            path: 'personal_missions_30.tooltip.personalMissionsPoints.innerBlock.bulletItem1',
                        }),
                    }),
                    e.jsx(P, {
                        children: e.jsx(p, {
                            path: 'personal_missions_30.tooltip.personalMissionsPoints.innerBlock.bulletItem2',
                        }),
                    }),
                ],
            }),
        ],
    });
}
const M = 'Index_3644a37a',
    S = 'Index_icon_d52a6788',
    A = 'Index_footer_b90ef2bf';
const w = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                default: function () {
                    return e.jsx(r.Decorator, {
                        children: e.jsxs('div', {
                            className: M,
                            children: [
                                e.jsx(d, { path: 'personal_missions_30.points.c_296x222', className: S }),
                                e.jsx(x, { children: e.jsx(O, {}) }),
                                e.jsx(p, {
                                    split: !0,
                                    path: 'personal_missions_30.tooltip.personalMissionsPoints.footer',
                                    className: A,
                                }),
                            ],
                        }),
                    });
                },
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    z = {
        base: 'InnerBlock_196a7ac9',
        icon: 'InnerBlock_icon_be2c6db5',
        textBlock: 'InnerBlock_textBlock_fedd1516',
        title: 'InnerBlock_title_5e7e6bb2',
        description: 'InnerBlock_description_37b78534',
    };
function D() {
    return e.jsxs('div', {
        className: z.base,
        children: [
            e.jsx('div', { className: z.icon }),
            e.jsxs('div', {
                className: z.textBlock,
                children: [
                    e.jsx(p, { path: 'personal_missions_30.tooltip.progression.innerBlock.title', className: z.title }),
                    e.jsxs('div', {
                        className: z.description,
                        children: [
                            e.jsx(P, {
                                children: e.jsx(p, {
                                    path: 'personal_missions_30.tooltip.progression.innerBlock.bulletItem1',
                                }),
                            }),
                            e.jsx(P, {
                                children: e.jsx(p, {
                                    path: 'personal_missions_30.tooltip.progression.innerBlock.bulletItem2',
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const L = 'Index_40f8809b',
    C = 'Index_title_499790e',
    E = 'Index_description_d1292557',
    F = 'Index_footer_162a858a';
const G = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                default: function () {
                    return e.jsx(r.Decorator, {
                        children: e.jsxs('div', {
                            className: L,
                            children: [
                                e.jsx(p, { path: 'personal_missions_30.tooltip.progression.title', className: C }),
                                e.jsx(p, {
                                    path: 'personal_missions_30.tooltip.progression.description',
                                    className: E,
                                }),
                                e.jsx(x, { children: e.jsx(D, {}) }),
                                e.jsx(p, { path: 'personal_missions_30.tooltip.progression.footer', className: F }),
                            ],
                        }),
                    });
                },
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    H = { text: 'App_text_13feac86', text__bold: 'App_text__bold_f88f7b4e' };
function J({ type: t }) {
    return e.jsxs('div', {
        className: H.text,
        children: [
            'Unknown tooltip type:',
            e.jsx('span', { className: s(H.text, H.text__bold), children: t.length > 0 ? t : '<empty>' }),
        ],
    });
}
const U = Object.fromEntries(
    Object.entries(
        Object.assign({ './custom_simple/index.tsx': g, './pm3_points/index.tsx': w, './progression/index.tsx': G }),
    ).map(([e, s]) => [e.split('/').at(-2), { Component: s.default }]),
);
const $ = o(function () {
    var s;
    const { model: t } = b(),
        o = t.type.get(),
        n = null == (s = U[o]) ? void 0 : s.Component;
    return e.jsx(r, { children: n ? e.jsx(n, {}) : e.jsx(J, { type: o }) });
});
m(new _().add(u).render(e.jsx($, {})));
