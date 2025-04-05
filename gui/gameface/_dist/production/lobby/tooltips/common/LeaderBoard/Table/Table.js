(() => {
    'use strict';
    var e,
        r = {
            5801: (e, r, o) => {
                o(6483), o(7363);
            },
            5210: (e, r, o) => {
                o(7363), o(5801);
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
                var l = 1 / 0;
                for (f = 0; f < e.length; f++) {
                    for (var [o, a, n] = e[f], i = !0, b = 0; b < o.length; b++)
                        (!1 & n || l >= n) && Object.keys(t.O).every((e) => t.O[e](o[b]))
                            ? o.splice(b--, 1)
                            : ((i = !1), n < l && (l = n));
                    if (i) {
                        e.splice(f--, 1);
                        var s = a();
                        void 0 !== s && (r = s);
                    }
                }
                return r;
            }
            n = n || 0;
            for (var f = e.length; f > 0 && e[f - 1][2] > n; f--) e[f] = e[f - 1];
            e[f] = [o, a, n];
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
        (t.j = 'lobby/tooltips/common/LeaderBoard/Table/Table'),
        (() => {
            var e = {
                'lobby/tooltips/common/LeaderBoard/Table/Table': 0,
                'lobby/tooltips/common/LeaderBoard/Column/Column': 0,
            };
            t.O.j = (r) => 0 === e[r];
            var r = (r, o) => {
                    var a,
                        n,
                        [l, i, b] = o,
                        s = 0;
                    if (l.some((r) => 0 !== e[r])) {
                        for (a in i) t.o(i, a) && (t.m[a] = i[a]);
                        if (b) var f = b(t);
                    }
                    for (r && r(o); s < l.length; s++) (n = l[s]), t.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return t.O(f);
                },
                o = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            o.forEach(r.bind(null, 0)), (o.push = r.bind(null, o.push.bind(o)));
        })();
    var a = t.O(void 0, ['lib/battle_royale.vendors'], () => t(5210));
    a = t.O(a);
})();
