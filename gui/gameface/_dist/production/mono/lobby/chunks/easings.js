import { r as t } from './vendor.js';
const a = () => {
        const a = t.useMemo(() => ({}), []),
            s = (t) => (a[t] || (a[t] = new Map()), a[t]),
            e = (t, a) => (s(t).set(a, a), () => i(t, a)),
            o = (t, a) => (
                s(t).set(a, (...s) => {
                    (a(...s), i(t, a));
                }),
                () => i(t, a)
            ),
            i = (t, a) => {
                s(t).delete(a);
            },
            r = (t, ...a) => {
                for (const e of s(t).values()) e(...a);
            };
        return t.useMemo(() => ({ on: e, once: o, off: i, trigger: r }), []);
    },
    s = [
        ['1', '30', '7', '7', '15', '20', '13', '13', '27'],
        ['18', '25', '25', '12', '2', '20', '10', '4', '27'],
        ['9', '25', '25', '28', '5', '26', '31', '31', '16'],
        ['29', '3', '17', '28', '14', '14', '31', '31', '22'],
        ['21', '21', '11', '8', '23', '19', '24', '6', '6'],
    ],
    e = s.reduce(
        (t, a, s) =>
            a.reduce(
                (t, a, e) => (
                    t[a]
                        ? t[a].start.x === e
                            ? (t[a].end.y = s)
                            : t[a].start.y === s && (t[a].end.x = e)
                        : (t[a] = { start: { x: e, y: s }, end: { x: e, y: s } }),
                    t
                ),
                t,
            ),
        {},
    ),
    o = Object.fromEntries(
        Object.keys(e).map((t) => [
            t,
            {
                x: e[t].start.x,
                y: e[t].start.y,
                width: e[t].end.x - e[t].start.x + 1,
                height: e[t].end.y - e[t].start.y + 1,
            },
        ]),
    ),
    i = {
        extraSmall: { widthRatio: 105, heightRatio: 92, topOffset: 4 },
        small: { widthRatio: 105, heightRatio: 92, topOffset: 4 },
        medium: { widthRatio: 136, heightRatio: 119, topOffset: 8 },
        large: { widthRatio: 160, heightRatio: 140, topOffset: 0 },
        extraLarge: { widthRatio: 200, heightRatio: 175, topOffset: 0 },
    },
    r = 100,
    h = 100,
    n = 100,
    d = 100,
    f = 800,
    c = 800,
    g = 300,
    m = 200,
    x = 200,
    R = 200,
    p = 200,
    u = 200,
    y = 200,
    l = 200,
    M = 100,
    w = 1e3,
    O = (t) => Math.sin((t * Math.PI) / 2),
    j = (t) => 1 - Math.cos((t * Math.PI) / 2),
    b = (t) => {
        const a = 1.70158;
        return 2.70158 * t * t * t - a * t * t;
    };
export {
    o as D,
    y as F,
    x as H,
    c as M,
    h as N,
    w as R,
    r as S,
    s as a,
    O as b,
    b as c,
    i as d,
    j as e,
    l as f,
    f as g,
    R as h,
    M as i,
    d as j,
    g as k,
    n as l,
    m,
    p as n,
    u as o,
    a as u,
};
