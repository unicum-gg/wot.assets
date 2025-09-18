import { r as e, j as t, _ as s, e as o, q as r } from '../../../../chunks/vendor.js';
import {
    i as n,
    q as a,
    n as i,
    b as p,
    f as c,
    e as l,
    v as d,
    w as m,
    x as u,
    y as x,
    d as h,
    F as y,
    z as j,
    J as f,
    r as _,
} from '../../../../chunks/lib.js';
import { D as b } from '../../../../chunks/divider.js';
import { S as v } from '../../../../chunks/spec_conditions.js';
/* empty css                       */ const [P, C] = n()(({ observableModel: e }) => {
    const t = e.primitives(['params', 'type']);
    return {
        type: t.type,
        computes: {
            params: a.primitive(function (e) {
                return e(t.params.get());
            }),
        },
    };
}, i);
function A(e) {
    return function () {
        return C().model.computes.params(e);
    };
}
const N = 'Index_62decda',
    g = 'Index_header_805f33ff',
    S = 'Index_description_21b8299a',
    T = 'Index_timerBlock_6d6f592',
    O = 'Index_divider_835afce3',
    k = A(
        (() => {
            let e;
            const t = (t, o) => {
                var r, n;
                return (
                    !1 ===
                        ((e) =>
                            'object' == typeof e &&
                            null !== e &&
                            ((e) => 'number' == typeof e.rerollCooldown && 'number' == typeof e.timeToNextReroll)(e))(
                            t,
                        ) &&
                        ((e = o),
                        (n = '$input'),
                        ((('object' == typeof (r = t) && null !== r) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: n + '',
                                    expected: 'RerollTooltipParams',
                                    value: r,
                                },
                                e,
                            )) &&
                            ((t, o, r = !0) =>
                                ('number' == typeof t.rerollCooldown ||
                                    s(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: o + '.rerollCooldown',
                                            expected: 'number',
                                            value: t.rerollCooldown,
                                        },
                                        e,
                                    )) &&
                                ('number' == typeof t.timeToNextReroll ||
                                    s(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: o + '.timeToNextReroll',
                                            expected: 'number',
                                            value: t.timeToNextReroll,
                                        },
                                        e,
                                    )))(r, n + '', !0)) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: n + '',
                                    expected: 'RerollTooltipParams',
                                    value: r,
                                },
                                e,
                            )),
                    t
                );
            };
            return (e, s) => t(JSON.parse(e), s);
        })(),
    ),
    w = (e, t, s) => (e > 0 ? (t > 0 ? 'days_hrs' : 'days') : t > 0 ? (s > 0 ? 'hrs_mins' : 'hrs') : 'mins'),
    R = p.resolve('strings');
const I = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                default: function () {
                    const { rerollCooldown: s, timeToNextReroll: o } = k(),
                        [r, n, a] = c(l(s), ['D', 'h', 'm']),
                        i = d(e.useMemo(() => ({ until: m(u(), l(o)), tick: l(1) }), [o]));
                    return t.jsx(x, {
                        children: t.jsx(x.Decorator, {
                            children: t.jsxs('div', {
                                className: N,
                                children: [
                                    t.jsx(h, { path: 'user_missions.tooltip.daily_reroll.header', className: g }),
                                    t.jsx('div', {
                                        className: S,
                                        children: R.readOrEmpty('user_missions.tooltip.weekly_reroll.description')
                                            .split('\n')
                                            .map((e, s) =>
                                                t.jsx(
                                                    y,
                                                    {
                                                        text: e,
                                                        split: !0,
                                                        params: {
                                                            time: t.jsx(h, {
                                                                path: `user_missions.common.duration.${w(Number(r), Number(n), Number(a))}`,
                                                                params: { days: r, hours: n, minutes: a },
                                                            }),
                                                        },
                                                    },
                                                    `${e}-${s}`,
                                                ),
                                            ),
                                    }),
                                    !1 === i.done &&
                                        t.jsxs('div', {
                                            className: T,
                                            children: [
                                                t.jsx(b, { className: O }),
                                                t.jsx(h, {
                                                    path: 'user_missions.tooltip.common.timer',
                                                    params: { timeLeft: t.jsx(j, { start: o }) },
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                    });
                },
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    $ = 'Index_d037ad5c',
    D = A(
        (() => {
            const e = (e) => 'number' == typeof e.id && 'string' == typeof e.textPath && 'string' == typeof e.iconPath,
                t = (e, t, o = !0) =>
                    ('number' == typeof e.id ||
                        s(
                            o,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.id',
                                expected: 'number',
                                value: e.id,
                            },
                            r,
                        )) &&
                    ('string' == typeof e.textPath ||
                        s(
                            o,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.textPath',
                                expected: 'string',
                                value: e.textPath,
                            },
                            r,
                        )) &&
                    ('string' == typeof e.iconPath ||
                        s(
                            o,
                            {
                                method: 'typia.json.createAssertParse',
                                path: t + '.iconPath',
                                expected: 'string',
                                value: e.iconPath,
                            },
                            r,
                        )),
                o = (t) =>
                    'object' == typeof t &&
                    null !== t &&
                    ((t) =>
                        Array.isArray(t.specConditions) &&
                        t.specConditions.every((t) => 'object' == typeof t && null !== t && e(t)))(t);
            let r;
            const n = (e, n) => {
                var a, i;
                return (
                    !1 === o(e) &&
                        ((r = n),
                        (i = '$input'),
                        ((('object' == typeof (a = e) && null !== a) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: i + '',
                                    expected: 'SpecConditionsTooltipParams',
                                    value: a,
                                },
                                r,
                            )) &&
                            ((e, o, n = !0) =>
                                ((Array.isArray(e.specConditions) ||
                                    s(
                                        n,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: o + '.specConditions',
                                            expected: 'Array<SpecCondition>',
                                            value: e.specConditions,
                                        },
                                        r,
                                    )) &&
                                    e.specConditions.every(
                                        (e, a) =>
                                            ((('object' == typeof e && null !== e) ||
                                                s(
                                                    n,
                                                    {
                                                        method: 'typia.json.createAssertParse',
                                                        path: o + '.specConditions[' + a + ']',
                                                        expected: 'SpecCondition',
                                                        value: e,
                                                    },
                                                    r,
                                                )) &&
                                                t(e, o + '.specConditions[' + a + ']', n)) ||
                                            s(
                                                n,
                                                {
                                                    method: 'typia.json.createAssertParse',
                                                    path: o + '.specConditions[' + a + ']',
                                                    expected: 'SpecCondition',
                                                    value: e,
                                                },
                                                r,
                                            ),
                                    )) ||
                                s(
                                    n,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: o + '.specConditions',
                                        expected: 'Array<SpecCondition>',
                                        value: e.specConditions,
                                    },
                                    r,
                                ))(a, i + '', !0)) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: i + '',
                                    expected: 'SpecConditionsTooltipParams',
                                    value: a,
                                },
                                r,
                            )),
                    e
                );
            };
            return (e, t) => n(JSON.parse(e), t);
        })(),
    );
const M = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                default: function () {
                    const { specConditions: e } = D();
                    return t.jsx(x, {
                        children: t.jsx(x.Decorator, {
                            children: t.jsx('div', { className: $, children: t.jsx(v, { specConditions: e }) }),
                        }),
                    });
                },
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    z = { text: 'App_text_13feac86', text__bold: 'App_text__bold_f88f7b4e' };
function J({ type: e }) {
    return t.jsxs('div', {
        className: z.text,
        children: [
            'Unknown tooltip type:',
            t.jsx('span', { className: o(z.text, z.text__bold), children: e.length > 0 ? e : '<empty>' }),
        ],
    });
}
const q = Object.fromEntries(
    Object.entries(Object.assign({ './reroll/index.tsx': I, './spec_conditions/index.tsx': M })).map(([e, t]) => [
        e.split('/').at(-2),
        { Component: t.default },
    ]),
);
const E = r(function () {
    var e;
    const { model: s } = C(),
        o = s.type.get(),
        r = null == (e = q[o]) ? void 0 : e.Component;
    return t.jsx(x, { children: r ? t.jsx(r, {}) : t.jsx(J, { type: o }) });
});
_(new f().add(P).render(t.jsx(E, {})));
