import { s, r as e, j as t, t as o, v as r, e as n, q as a } from '../../../../chunks/vendor.js';
import {
    i,
    q as l,
    n as c,
    b as m,
    f as d,
    e as p,
    v as u,
    w as j,
    x,
    y as _,
    z as h,
    D as f,
    E as b,
    d as y,
    F as v,
    G as N,
    H as g,
    J as k,
    r as S,
} from '../../../../chunks/lib.js';
import { D as C } from '../../../../chunks/divider.js';
import { S as O } from '../../../../chunks/helpers.js';
import { S as w } from '../../../../chunks/spec_conditions.js';
/* empty css                       */ const [I, T] = i()(({ observableModel: s }) => {
    const e = s.primitives(['params', 'type']);
    return {
        type: e.type,
        computes: {
            params: l.primitive(function (s) {
                return s(e.params.get());
            }),
        },
    };
}, c);
function D(s) {
    return function () {
        return T().model.computes.params(s);
    };
}
const M = 'Index_62decda',
    A = 'Index_header_805f33ff',
    P = 'Index_description_21b8299a',
    z = 'Index_timerBlock_6d6f592',
    E = 'Index_divider_835afce3',
    $ = s({ rerollCooldown: o(), rerollAvailableTimestamp: o() }),
    q = D(g($)),
    B = (s, e, t) => (s > 0 ? (e > 0 ? 'days_hrs' : 'days') : e > 0 ? (t > 0 ? 'hrs_mins' : 'hrs') : 'mins'),
    F = m.resolve('strings');
const G = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                RerollTooltipParamsSchema: $,
                default: function () {
                    const { rerollCooldown: s, rerollAvailableTimestamp: o } = q(),
                        [r, n, a] = d(p(s), ['D', 'h', 'm']),
                        i = u(e.useMemo(() => ({ until: j(o), tick: p(1) }), [o])),
                        l = e.useMemo(() => x(j(o), (s) => h(s, f()), _), [o]);
                    return t.jsx(b, {
                        children: t.jsx(b.Decorator, {
                            children: t.jsxs('div', {
                                className: M,
                                children: [
                                    t.jsx(y, { path: 'user_missions.tooltip.daily_reroll.header', className: A }),
                                    t.jsx('div', {
                                        className: P,
                                        children: F.readOrEmpty('user_missions.tooltip.weekly_reroll.description')
                                            .split('\n')
                                            .map((s, e) =>
                                                t.jsx(
                                                    v,
                                                    {
                                                        text: s,
                                                        split: !0,
                                                        params: {
                                                            time: t.jsx(y, {
                                                                path: `user_missions.common.duration.${B(Number(r), Number(n), Number(a))}`,
                                                                params: { days: r, hours: n, minutes: a },
                                                            }),
                                                        },
                                                    },
                                                    `${s}-${e}`,
                                                ),
                                            ),
                                    }),
                                    !1 === i.done &&
                                        t.jsxs('div', {
                                            className: z,
                                            children: [
                                                t.jsx(C, { className: E }),
                                                t.jsx(y, {
                                                    path: 'user_missions.tooltip.common.timer',
                                                    params: { timeLeft: t.jsx(N, { start: l }) },
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
    H = 'Index_d037ad5c',
    J = s({ specConditions: r(O) }),
    L = D(g(J));
const R = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                SpecConditionsTooltipParamsSchema: J,
                default: function () {
                    const { specConditions: s } = L();
                    return t.jsx(b, {
                        children: t.jsx(b.Decorator, {
                            children: t.jsx('div', { className: H, children: t.jsx(w, { specConditions: s }) }),
                        }),
                    });
                },
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    U = 'App_text_13feac86',
    K = 'App_text__bold_f88f7b4e';
function Q({ type: s }) {
    return t.jsxs('div', {
        className: U,
        children: [
            'Unknown tooltip type:',
            t.jsx('span', { className: n(U, K), children: s.length > 0 ? s : '<empty>' }),
        ],
    });
}
const V = Object.fromEntries(
    Object.entries(Object.assign({ './reroll/index.tsx': G, './spec_conditions/index.tsx': R })).map(([s, e]) => [
        s.split('/').at(-2),
        { Component: e.default },
    ]),
);
const W = a(function () {
    const { model: s } = T(),
        e = s.type.get(),
        o = V[e]?.Component;
    return t.jsx(b, { children: o ? t.jsx(o, {}) : t.jsx(Q, { type: e }) });
});
S(new k().add(I).render(t.jsx(W, {})));
