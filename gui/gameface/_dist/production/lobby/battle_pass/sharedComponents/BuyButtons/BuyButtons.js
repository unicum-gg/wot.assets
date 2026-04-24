(() => {
    'use strict';
    var e,
        r = {
            7109: (e, r, t) => {
                (t(9849), t(4170), t(4029), t(7363), t(6290), t(2262));
            },
            2262: (e, r, t) => {},
            4170: (e, r, t) => {},
            4029: (e, r, t) => {},
            3346: (e, r, t) => {
                (t(9849), t(7109), t(7363));
                R.strings.battle_pass.battlePassBuyView;
            },
            6290: () => {},
            7363: (e) => {
                e.exports = React;
            },
        },
        t = {};
    function o(e) {
        var n = t[e];
        if (void 0 !== n) return n.exports;
        var a = (t[e] = { exports: {} });
        return (r[e](a, a.exports, o), a.exports);
    }
    ((o.m = r),
        (e = []),
        (o.O = (r, t, n, a) => {
            if (!t) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, n, a] = e[u], s = !0, f = 0; f < t.length; f++)
                        (!1 & a || i >= a) && Object.keys(o.O).every((e) => o.O[e](t[f]))
                            ? t.splice(f--, 1)
                            : ((s = !1), a < i && (i = a));
                    if (s) {
                        e.splice(u--, 1);
                        var l = n();
                        void 0 !== l && (r = l);
                    }
                }
                return r;
            }
            a = a || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
            e[u] = [t, n, a];
        }),
        (o.n = (e) => {
            var r = e && e.__esModule ? () => e.default : () => e;
            return (o.d(r, { a: r }), r);
        }),
        (o.d = (e, r) => {
            for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (o.j = 1523),
        (() => {
            var e = { 1523: 0 };
            o.O.j = (r) => 0 === e[r];
            var r = (r, t) => {
                    var n,
                        a,
                        [i, s, f] = t,
                        l = 0;
                    if (i.some((r) => 0 !== e[r])) {
                        for (n in s) o.o(s, n) && (o.m[n] = s[n]);
                        if (f) var u = f(o);
                    }
                    for (r && r(t); l < i.length; l++) ((a = i[l]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return o.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t))));
        })());
    var n = o.O(void 0, [1519], () => o(3346));
    n = o.O(n);
})();
