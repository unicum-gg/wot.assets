import { _ as e, l as t, m as a, j as r } from '../../../chunks/vendor.js';
import { i as s, c as o, n, T as p, F as d, K as c, J as i, U as l, r as y } from '../../../chunks/lib.js';
const [u, m] = s()((e) => {
    const t = e.observableModel.primitives(['params', 'type']);
    return {
        type: t.type,
        computes: {
            params: o.primitive(function (e) {
                return e(t.params.get());
            }),
        },
    };
}, n);
function f(e) {
    return function () {
        return m().model.computes.params(e);
    };
}
const b = f(
        (() => {
            const a = (e) => 'string' == typeof e.start && 'string' == typeof e.end,
                r = (e) =>
                    Object.keys(e).every((t) => {
                        const a = e[t];
                        return (
                            void 0 === a ||
                            null == a ||
                            'string' == typeof a ||
                            'number' == typeof a ||
                            'boolean' == typeof a ||
                            ('object' == typeof a && null !== a && !1 === Array.isArray(a) && o(a))
                        );
                    }),
                s = (e) =>
                    !(
                        null === e.type ||
                        void 0 === e.type ||
                        ('function' != typeof e.type && 'string' != typeof e.type) ||
                        (null !== e.key && 'string' != typeof e.key)
                    ),
                o = (e) => !s(e) || s(e),
                n = (t, a, r = !0) =>
                    ('string' == typeof t.start ||
                        e(
                            r,
                            {
                                method: 'typia.json.createAssertParse',
                                path: a + '.start',
                                expected: 'string',
                                value: t.start,
                            },
                            i,
                        )) &&
                    ('string' == typeof t.end ||
                        e(
                            r,
                            {
                                method: 'typia.json.createAssertParse',
                                path: a + '.end',
                                expected: 'string',
                                value: t.end,
                            },
                            i,
                        )),
                p = (a, r, s = !0) =>
                    !1 === s ||
                    Object.keys(a).every((o) => {
                        const n = a[o];
                        return (
                            void 0 === n ||
                            null == n ||
                            'string' == typeof n ||
                            'number' == typeof n ||
                            'boolean' == typeof n ||
                            ((('object' == typeof n && null !== n && !1 === Array.isArray(n)) ||
                                e(
                                    s,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: r + t(o),
                                        expected:
                                            '(Iterable<React.ReactNode> | React.ReactElement<any, string | JSXElementConstructor<any>> | React.ReactPortal | boolean | null | number | string | undefined)',
                                        value: n,
                                    },
                                    i,
                                )) &&
                                d(n, r + t(o), s)) ||
                            e(
                                s,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: r + t(o),
                                    expected:
                                        '(Iterable<React.ReactNode> | React.ReactElement<any, string | JSXElementConstructor<any>> | React.ReactPortal | boolean | null | number | string | undefined)',
                                    value: n,
                                },
                                i,
                            )
                        );
                    }),
                d = (t, a, r = !0) =>
                    ((t, a, r = !0) =>
                        (null !== t.type ||
                            e(
                                r,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '.type',
                                    expected: 'string',
                                    value: t.type,
                                },
                                i,
                            )) &&
                        (void 0 !== t.type ||
                            e(
                                r,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '.type',
                                    expected: 'string',
                                    value: t.type,
                                },
                                i,
                            )) &&
                        ('function' == typeof t.type ||
                            'string' == typeof t.type ||
                            e(
                                r,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '.type',
                                    expected: 'string',
                                    value: t.type,
                                },
                                i,
                            )) &&
                        (null === t.key ||
                            'string' == typeof t.key ||
                            e(
                                r,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '.key',
                                    expected: '(null | string)',
                                    value: t.key,
                                },
                                i,
                            )))(t, a, !1) || !0,
                c = (e) =>
                    'object' == typeof e &&
                    null !== e &&
                    ((e) =>
                        'string' == typeof e.text &&
                        (void 0 === e.brackets ||
                            ('object' == typeof e.brackets && null !== e.brackets && a(e.brackets))) &&
                        (void 0 === e.params ||
                            ('object' == typeof e.params &&
                                null !== e.params &&
                                !1 === Array.isArray(e.params) &&
                                r(e.params))) &&
                        (void 0 === e.upgradeLegacy || 'boolean' == typeof e.upgradeLegacy) &&
                        (void 0 === e.split || 'boolean' == typeof e.split))(e);
            let i;
            const l = (t, a) => {
                var r, s;
                return (
                    !1 === c(t) &&
                        ((i = a),
                        (s = '$input'),
                        ((('object' == typeof (r = t) && null !== r) ||
                            e(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: s + '',
                                    expected: 'FormatTextModel',
                                    value: r,
                                },
                                i,
                            )) &&
                            ((t, a, r = !0) =>
                                ('string' == typeof t.text ||
                                    e(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.text',
                                            expected: 'string',
                                            value: t.text,
                                        },
                                        i,
                                    )) &&
                                (void 0 === t.brackets ||
                                    ((('object' == typeof t.brackets && null !== t.brackets) ||
                                        e(
                                            r,
                                            {
                                                method: 'typia.json.createAssertParse',
                                                path: a + '.brackets',
                                                expected: '(__object | undefined)',
                                                value: t.brackets,
                                            },
                                            i,
                                        )) &&
                                        n(t.brackets, a + '.brackets', r)) ||
                                    e(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.brackets',
                                            expected: '(__object | undefined)',
                                            value: t.brackets,
                                        },
                                        i,
                                    )) &&
                                (void 0 === t.params ||
                                    ((('object' == typeof t.params &&
                                        null !== t.params &&
                                        !1 === Array.isArray(t.params)) ||
                                        e(
                                            r,
                                            {
                                                method: 'typia.json.createAssertParse',
                                                path: a + '.params',
                                                expected: '(Record<string, React.ReactNode> | undefined)',
                                                value: t.params,
                                            },
                                            i,
                                        )) &&
                                        p(t.params, a + '.params', r)) ||
                                    e(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.params',
                                            expected: '(Record<string, React.ReactNode> | undefined)',
                                            value: t.params,
                                        },
                                        i,
                                    )) &&
                                (void 0 === t.upgradeLegacy ||
                                    'boolean' == typeof t.upgradeLegacy ||
                                    e(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.upgradeLegacy',
                                            expected: '(boolean | undefined)',
                                            value: t.upgradeLegacy,
                                        },
                                        i,
                                    )) &&
                                (void 0 === t.split ||
                                    'boolean' == typeof t.split ||
                                    e(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.split',
                                            expected: '(boolean | undefined)',
                                            value: t.split,
                                        },
                                        i,
                                    )))(r, s + '', !0)) ||
                            e(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: s + '',
                                    expected: 'FormatTextModel',
                                    value: r,
                                },
                                i,
                            )),
                    t
                );
            };
            return (e, t) => l(JSON.parse(e), t);
        })(),
    ),
    h = 'Index_5445f3cc',
    x = a(function () {
        const { text: e, brackets: t, params: a, upgradeLegacy: s, split: o } = b();
        return r.jsx(p.Decorator, {
            className: h,
            children: r.jsx(d, { text: e, brackets: t, params: a, upgradeLegacy: s, split: o }),
        });
    }),
    j = Object.freeze(Object.defineProperty({ __proto__: null, default: x }, Symbol.toStringTag, { value: 'Module' })),
    g = f(
        (() => {
            let t;
            const a = (a, r) => {
                var s, o;
                return (
                    !1 ===
                        ((e) =>
                            'object' == typeof e &&
                            null !== e &&
                            !1 === Array.isArray(e) &&
                            ((e) =>
                                !(
                                    (void 0 !== e.header && 'string' != typeof e.header) ||
                                    (void 0 !== e.body && 'string' != typeof e.body) ||
                                    (void 0 !== e.keyButtonTitle && 'string' != typeof e.keyButtonTitle)
                                ))(e))(a) &&
                        ((t = r),
                        (o = '$input'),
                        ((('object' == typeof (s = a) && null !== s && !1 === Array.isArray(s)) ||
                            e(
                                !0,
                                { method: 'typia.json.createAssertParse', path: o + '', expected: 'Simple', value: s },
                                t,
                            )) &&
                            ((a, r, s = !0) =>
                                (void 0 === a.header ||
                                    'string' == typeof a.header ||
                                    e(
                                        s,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: r + '.header',
                                            expected: '(string | undefined)',
                                            value: a.header,
                                        },
                                        t,
                                    )) &&
                                (void 0 === a.body ||
                                    'string' == typeof a.body ||
                                    e(
                                        s,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: r + '.body',
                                            expected: '(string | undefined)',
                                            value: a.body,
                                        },
                                        t,
                                    )) &&
                                (void 0 === a.keyButtonTitle ||
                                    'string' == typeof a.keyButtonTitle ||
                                    e(
                                        s,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: r + '.keyButtonTitle',
                                            expected: '(string | undefined)',
                                            value: a.keyButtonTitle,
                                        },
                                        t,
                                    )))(s, o + '', !0)) ||
                            e(
                                !0,
                                { method: 'typia.json.createAssertParse', path: o + '', expected: 'Simple', value: s },
                                t,
                            )),
                    a
                );
            };
            return (e, t) => a(JSON.parse(e), t);
        })(),
    ),
    v = 'Index_ba2db44b',
    k = 'Index_title_fabe856f',
    A = 'Index_body_4b34d6f2',
    _ = 'Index_separator_f978f784',
    P = 'Index_hotKeyWrapper_1f3c2c43',
    R = 'Index_keyButton_b1d24a48',
    B = 'Index_keyButtonBackground_52a570a',
    N = 'Index_keyButtonContent_d40e5707',
    I = 'Index_keyButtonBorder_da0d61a1',
    T = 'Index_hotKeyTitle_34425e04';
const O = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                default: function () {
                    const { header: e, body: t, keyButtonCode: a, keyButtonTitle: s } = g();
                    return r.jsx(p.Decorator, {
                        children: r.jsxs('div', {
                            className: v,
                            children: [
                                e && r.jsx('div', { className: k, children: e }),
                                t && r.jsx(d, { split: !0, text: t, className: A }),
                                a &&
                                    r.jsxs(r.Fragment, {
                                        children: [
                                            r.jsx('div', { className: _ }),
                                            r.jsxs('div', {
                                                className: P,
                                                children: [
                                                    r.jsx(c, {
                                                        silent: !0,
                                                        idle: !0,
                                                        keyCode: a,
                                                        classNames: { base: R, background: B, border: I, content: N },
                                                        children: r.jsx(c.Code, {}),
                                                    }),
                                                    s && r.jsx('div', { className: T, children: s }),
                                                ],
                                            }),
                                        ],
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
    S = Object.fromEntries(
        Object.entries(Object.assign({ './format_text/index.tsx': j, './simple/index.tsx': O })).map(([e, t]) => [
            e.match(/\/([^/]+)\/index\.tsx/)[1],
            { Component: t.default },
        ]),
    );
const C = a(function () {
    var e;
    const { model: t } = m(),
        a = t.type.get(),
        s = null == (e = S[a]) ? void 0 : e.Component;
    if (s) return r.jsx(p, { children: r.jsx(s, {}) });
    console.error(`Unknown tooltip type: ${a}`);
});
y(new i().add(u).add(l).render(r.jsx(C, {})));
