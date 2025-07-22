(() => {
    'use strict';
    var e,
        r = {
            7799: (e, r, t) => {
                let n;
                (t(6179),
                    (function (e) {
                        ((e.Quest = 'quest'), (e.Default = 'quest'));
                    })(n || (n = {})),
                    R.images.new_year.gui.maps.icons.newYear.buttons);
            },
        },
        t = {};
    function n(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var a = (t[e] = { exports: {} });
        return (r[e](a, a.exports, n), a.exports);
    }
    ((n.m = r),
        (e = []),
        (n.O = (r, t, o, a) => {
            if (!t) {
                var i = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, o, a] = e[l], u = !0, s = 0; s < t.length; s++)
                        (!1 & a || i >= a) && Object.keys(n.O).every((e) => n.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((u = !1), a < i && (i = a));
                    if (u) {
                        e.splice(l--, 1);
                        var f = o();
                        void 0 !== f && (r = f);
                    }
                }
                return r;
            }
            a = a || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > a; l--) e[l] = e[l - 1];
            e[l] = [t, o, a];
        }),
        (n.n = (e) => {
            var r = e && e.__esModule ? () => e.default : () => e;
            return (n.d(r, { a: r }), r);
        }),
        (n.d = (e, r) => {
            for (var t in r) n.o(r, t) && !n.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (n.j = 7249),
        (() => {
            var e = { 7249: 0 };
            n.O.j = (r) => 0 === e[r];
            var r = (r, t) => {
                    var o,
                        a,
                        [i, u, s] = t,
                        f = 0;
                    if (i.some((r) => 0 !== e[r])) {
                        for (o in u) n.o(u, o) && (n.m[o] = u[o]);
                        if (s) var l = s(n);
                    }
                    for (r && r(t); f < i.length; f++) ((a = i[f]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return n.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t))));
        })());
    var o = n.O(void 0, [4503], () => n(7799));
    o = n.O(o);
})();
