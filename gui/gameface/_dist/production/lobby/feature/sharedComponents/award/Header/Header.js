(() => {
    'use strict';
    var e,
        r = {
            8225: (e, r, o) => {
                o(6483), o(7363);
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        o = {};
    function t(e) {
        var a = o[e];
        if (void 0 !== a) return a.exports;
        var n = (o[e] = { exports: {} });
        return r[e](n, n.exports, t), n.exports;
    }
    (t.m = r),
        (e = []),
        (t.O = (r, o, a, n) => {
            if (!o) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [o, a, n] = e[u], s = !0, f = 0; f < o.length; f++)
                        (!1 & n || i >= n) && Object.keys(t.O).every((e) => t.O[e](o[f]))
                            ? o.splice(f--, 1)
                            : ((s = !1), n < i && (i = n));
                    if (s) {
                        e.splice(u--, 1);
                        var l = a();
                        void 0 !== l && (r = l);
                    }
                }
                return r;
            }
            n = n || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
            e[u] = [o, a, n];
        }),
        (t.n = (e) => {
            var r = e && e.__esModule ? () => e.default : () => e;
            return t.d(r, { a: r }), r;
        }),
        (t.d = (e, r) => {
            for (var o in r) t.o(r, o) && !t.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
        }),
        (t.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (t.j = 'lobby/feature/sharedComponents/award/Header/Header'),
        (() => {
            var e = { 'lobby/feature/sharedComponents/award/Header/Header': 0 };
            t.O.j = (r) => 0 === e[r];
            var r = (r, o) => {
                    var a,
                        n,
                        [i, s, f] = o,
                        l = 0;
                    if (i.some((r) => 0 !== e[r])) {
                        for (a in s) t.o(s, a) && (t.m[a] = s[a]);
                        if (f) var u = f(t);
                    }
                    for (r && r(o); l < i.length; l++) (n = i[l]), t.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return t.O(u);
                },
                o = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            o.forEach(r.bind(null, 0)), (o.push = r.bind(null, o.push.bind(o)));
        })();
    var a = t.O(void 0, ['lib/resource_well.vendors'], () => t(8225));
    a = t.O(a);
})();
