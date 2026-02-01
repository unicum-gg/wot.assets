import { r as e, j as t, _ as s, e as o, p as r } from '../../../../chunks/vendor.js';
import {
    i as a,
    y as n,
    n as i,
    b as p,
    f as l,
    e as c,
    z as d,
    D as m,
    G as u,
    H as h,
    K as x,
    L as y,
    q as j,
    d as f,
    F as b,
    x as _,
    J as v,
    r as P,
} from '../../../../chunks/lib.js';
import { D as A } from '../../../../chunks/divider.js';
import { S as C } from '../../../../chunks/spec_conditions.js';
/* empty css                       */ const [g, N] = a()(({ observableModel: e }) => {
    const t = e.primitives(['params', 'type']);
    return {
        type: t.type,
        computes: {
            params: n.primitive(function (e) {
                return e(t.params.get());
            }),
        },
    };
}, i);
function S(e) {
    return function () {
        return N().model.computes.params(e);
    };
}
const T = 'Index_62decda',
    O = 'Index_header_805f33ff',
    k = 'Index_description_21b8299a',
    w = 'Index_timerBlock_6d6f592',
    I = 'Index_divider_835afce3',
    D = S(
        (() => {
            let e;
            const t = (t, o) => {
                var r, a;
                return (
                    !1 ===
                        ((e) =>
                            'object' == typeof e &&
                            null !== e &&
                            ((e) =>
                                'number' == typeof e.rerollCooldown && 'number' == typeof e.rerollAvailableTimestamp)(
                                e,
                            ))(t) &&
                        ((e = o),
                        (a = '$input'),
                        ((('object' == typeof (r = t) && null !== r) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '',
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
                                ('number' == typeof t.rerollAvailableTimestamp ||
                                    s(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: o + '.rerollAvailableTimestamp',
                                            expected: 'number',
                                            value: t.rerollAvailableTimestamp,
                                        },
                                        e,
                                    )))(r, a + '', !0)) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: a + '',
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
    M = (e, t, s) => (e > 0 ? (t > 0 ? 'days_hrs' : 'days') : t > 0 ? (s > 0 ? 'hrs_mins' : 'hrs') : 'mins'),
    $ = p.resolve('strings');
const z = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                default: function () {
                    const { rerollCooldown: s, rerollAvailableTimestamp: o } = D(),
                        [r, a, n] = l(c(s), ['D', 'h', 'm']),
                        i = d(e.useMemo(() => ({ until: m(o), tick: c(1) }), [o])),
                        p = e.useMemo(() => u(m(o), (e) => x(e, y()), h), [o]);
                    return t.jsx(j, {
                        children: t.jsx(j.Decorator, {
                            children: t.jsxs('div', {
                                className: T,
                                children: [
                                    t.jsx(f, { path: 'user_missions.tooltip.daily_reroll.header', className: O }),
                                    t.jsx('div', {
                                        className: k,
                                        children: $.readOrEmpty('user_missions.tooltip.weekly_reroll.description')
                                            .split('\n')
                                            .map((e, s) =>
                                                t.jsx(
                                                    b,
                                                    {
                                                        text: e,
                                                        split: !0,
                                                        params: {
                                                            time: t.jsx(f, {
                                                                path: `user_missions.common.duration.${M(Number(r), Number(a), Number(n))}`,
                                                                params: { days: r, hours: a, minutes: n },
                                                            }),
                                                        },
                                                    },
                                                    `${e}-${s}`,
                                                ),
                                            ),
                                    }),
                                    !1 === i.done &&
                                        t.jsxs('div', {
                                            className: w,
                                            children: [
                                                t.jsx(A, { className: I }),
                                                t.jsx(f, {
                                                    path: 'user_missions.tooltip.common.timer',
                                                    params: { timeLeft: t.jsx(_, { start: p }) },
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
    J = 'Index_d037ad5c',
    E = S(
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
            const a = (e, a) => {
                var n, i;
                return (
                    !1 === o(e) &&
                        ((r = a),
                        (i = '$input'),
                        ((('object' == typeof (n = e) && null !== n) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: i + '',
                                    expected: 'SpecConditionsTooltipParams',
                                    value: n,
                                },
                                r,
                            )) &&
                            ((e, o, a = !0) =>
                                ((Array.isArray(e.specConditions) ||
                                    s(
                                        a,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: o + '.specConditions',
                                            expected: 'Array<SpecCondition>',
                                            value: e.specConditions,
                                        },
                                        r,
                                    )) &&
                                    e.specConditions.every(
                                        (e, n) =>
                                            ((('object' == typeof e && null !== e) ||
                                                s(
                                                    a,
                                                    {
                                                        method: 'typia.json.createAssertParse',
                                                        path: o + '.specConditions[' + n + ']',
                                                        expected: 'SpecCondition',
                                                        value: e,
                                                    },
                                                    r,
                                                )) &&
                                                t(e, o + '.specConditions[' + n + ']', a)) ||
                                            s(
                                                a,
                                                {
                                                    method: 'typia.json.createAssertParse',
                                                    path: o + '.specConditions[' + n + ']',
                                                    expected: 'SpecCondition',
                                                    value: e,
                                                },
                                                r,
                                            ),
                                    )) ||
                                s(
                                    a,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: o + '.specConditions',
                                        expected: 'Array<SpecCondition>',
                                        value: e.specConditions,
                                    },
                                    r,
                                ))(n, i + '', !0)) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: i + '',
                                    expected: 'SpecConditionsTooltipParams',
                                    value: n,
                                },
                                r,
                            )),
                    e
                );
            };
            return (e, t) => a(JSON.parse(e), t);
        })(),
    );
const L = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                default: function () {
                    const { specConditions: e } = E();
                    return t.jsx(j, {
                        children: t.jsx(j.Decorator, {
                            children: t.jsx('div', { className: J, children: t.jsx(C, { specConditions: e }) }),
                        }),
                    });
                },
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    R = { text: 'App_text_13feac86', text__bold: 'App_text__bold_f88f7b4e' };
function q({ type: e }) {
    return t.jsxs('div', {
        className: R.text,
        children: [
            'Unknown tooltip type:',
            t.jsx('span', { className: o(R.text, R.text__bold), children: e.length > 0 ? e : '<empty>' }),
        ],
    });
}
const B = Object.fromEntries(
    Object.entries(Object.assign({ './reroll/index.tsx': z, './spec_conditions/index.tsx': L })).map(([e, t]) => [
        e.split('/').at(-2),
        { Component: t.default },
    ]),
);
const F = r(function () {
    var e;
    const { model: s } = N(),
        o = s.type.get(),
        r = null == (e = B[o]) ? void 0 : e.Component;
    return t.jsx(j, { children: r ? t.jsx(r, {}) : t.jsx(q, { type: o }) });
});
P(new v().add(g).render(t.jsx(F, {})));
