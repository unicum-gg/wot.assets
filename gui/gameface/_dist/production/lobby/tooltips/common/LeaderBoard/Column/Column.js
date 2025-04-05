(() => {
    'use strict';
    var e,
        r = {
            5801: (e, r, o) => {
                o(6483), o(7363);
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        o = {};
    function t(e) {
        var n = o[e];
        if (void 0 !== n) return n.exports;
        var a = (o[e] = { exports: {} });
        return r[e](a, a.exports, t), a.exports;
    }
    (t.m = r),
        (e = []),
        (t.O = (r, o, n, a) => {
            if (!o) {
                var l = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    for (var [o, n, a] = e[s], i = !0, u = 0; u < o.length; u++)
                        (!1 & a || l >= a) && Object.keys(t.O).every((e) => t.O[e](o[u]))
                            ? o.splice(u--, 1)
                            : ((i = !1), a < l && (l = a));
                    if (i) {
                        e.splice(s--, 1);
                        var f = n();
                        void 0 !== f && (r = f);
                    }
                }
                return r;
            }
            a = a || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
            e[s] = [o, n, a];
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
        (t.j = 'lobby/tooltips/common/LeaderBoard/Column/Column'),
        (() => {
            var e = { 'lobby/tooltips/common/LeaderBoard/Column/Column': 0 };
            t.O.j = (r) => 0 === e[r];
            var r = (r, o) => {
                    var n,
                        a,
                        [l, i, u] = o,
                        f = 0;
                    if (l.some((r) => 0 !== e[r])) {
                        for (n in i) t.o(i, n) && (t.m[n] = i[n]);
                        if (u) var s = u(t);
                    }
                    for (r && r(o); f < l.length; f++) (a = l[f]), t.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return t.O(s);
                },
                o = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            o.forEach(r.bind(null, 0)), (o.push = r.bind(null, o.push.bind(o)));
        })();
    var n = t.O(void 0, ['lib/battle_royale.vendors'], () => t(5801));
    n = t.O(n);
})();
