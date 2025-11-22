(() => {
    'use strict';
    var e,
        r = {
            8680: (e, r, t) => {
                let o;
                (t(6483),
                    t(6179),
                    (function (e) {
                        ((e.Small = 'small'), (e.Big = 'big'), (e.Large = 'large'));
                    })(o || (o = {})));
            },
        },
        t = {};
    function o(e) {
        var n = t[e];
        if (void 0 !== n) return n.exports;
        var a = (t[e] = { exports: {} });
        return (r[e].call(a.exports, a, a.exports, o), a.exports);
    }
    ((o.m = r),
        (e = []),
        (o.O = (r, t, n, a) => {
            if (!t) {
                var i = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    for (var [t, n, a] = e[s], l = !0, f = 0; f < t.length; f++)
                        (!1 & a || i >= a) && Object.keys(o.O).every((e) => o.O[e](t[f]))
                            ? t.splice(f--, 1)
                            : ((l = !1), a < i && (i = a));
                    if (l) {
                        e.splice(s--, 1);
                        var c = n();
                        void 0 !== c && (r = c);
                    }
                }
                return r;
            }
            a = a || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
            e[s] = [t, n, a];
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
        (o.j = 7879),
        (() => {
            var e = { 7879: 0 };
            o.O.j = (r) => 0 === e[r];
            var r = (r, t) => {
                    var n,
                        a,
                        [i, l, f] = t,
                        c = 0;
                    if (i.some((r) => 0 !== e[r])) {
                        for (n in l) o.o(l, n) && (o.m[n] = l[n]);
                        if (f) var s = f(o);
                    }
                    for (r && r(t); c < i.length; c++) ((a = i[c]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return o.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t))));
        })());
    var n = o.O(void 0, [4503], () => o(8680));
    n = o.O(n);
})();
