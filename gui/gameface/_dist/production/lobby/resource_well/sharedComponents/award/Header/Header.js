(() => {
    'use strict';
    var e,
        r = {
            3074: (e, r, a) => {
                (a(6483), a(7363));
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        a = {};
    function o(e) {
        var t = a[e];
        if (void 0 !== t) return t.exports;
        var n = (a[e] = { exports: {} });
        return (r[e](n, n.exports, o), n.exports);
    }
    ((o.m = r),
        (e = []),
        (o.O = (r, a, t, n) => {
            if (!a) {
                var f = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    for (var [a, t, n] = e[s], i = !0, v = 0; v < a.length; v++)
                        (!1 & n || f >= n) && Object.keys(o.O).every((e) => o.O[e](a[v]))
                            ? a.splice(v--, 1)
                            : ((i = !1), n < f && (f = n));
                    if (i) {
                        e.splice(s--, 1);
                        var l = t();
                        void 0 !== l && (r = l);
                    }
                }
                return r;
            }
            n = n || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > n; s--) e[s] = e[s - 1];
            e[s] = [a, t, n];
        }),
        (o.n = (e) => {
            var r = e && e.__esModule ? () => e.default : () => e;
            return (o.d(r, { a: r }), r);
        }),
        (o.d = (e, r) => {
            for (var a in r) o.o(r, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: r[a] });
        }),
        (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (o.j = 770),
        (() => {
            var e = { 770: 0 };
            o.O.j = (r) => 0 === e[r];
            var r = (r, a) => {
                    var t,
                        n,
                        [f, i, v] = a,
                        l = 0;
                    if (f.some((r) => 0 !== e[r])) {
                        for (t in i) o.o(i, t) && (o.m[t] = i[t]);
                        if (v) var s = v(o);
                    }
                    for (r && r(a); l < f.length; l++) ((n = f[l]), o.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return o.O(s);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(r.bind(null, 0)), (a.push = r.bind(null, a.push.bind(a))));
        })());
    var t = o.O(void 0, [52], () => o(3074));
    t = o.O(t);
})();
