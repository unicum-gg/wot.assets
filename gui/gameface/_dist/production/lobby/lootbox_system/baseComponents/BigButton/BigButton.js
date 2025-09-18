(() => {
    'use strict';
    var r,
        e = {
            3457: (r, e, a) => {
                (a(6483), a(7727), a(7363), a(6880), a(2106));
            },
            2106: (r, e, a) => {
                let t, n;
                (!(function (r) {
                    ((r.main = 'main'),
                        (r.primary = 'primary'),
                        (r.primaryGreen = 'primaryGreen'),
                        (r.primaryRed = 'primaryRed'),
                        (r.secondary = 'secondary'),
                        (r.ghost = 'ghost'));
                })(t || (t = {})),
                    (function (r) {
                        ((r.extraSmall = 'extraSmall'),
                            (r.small = 'small'),
                            (r.medium = 'medium'),
                            (r.large = 'large'));
                    })(n || (n = {})));
            },
            7727: (r, e, a) => {},
            1579: (r, e, a) => {
                (a(3457), a(2106), a(7363));
            },
            6880: () => {},
            7363: (r) => {
                r.exports = React;
            },
        },
        a = {};
    function t(r) {
        var n = a[r];
        if (void 0 !== n) return n.exports;
        var o = (a[r] = { exports: {} });
        return (e[r](o, o.exports, t), o.exports);
    }
    ((t.m = e),
        (r = []),
        (t.O = (e, a, n, o) => {
            if (!a) {
                var i = 1 / 0;
                for (u = 0; u < r.length; u++) {
                    for (var [a, n, o] = r[u], l = !0, s = 0; s < a.length; s++)
                        (!1 & o || i >= o) && Object.keys(t.O).every((r) => t.O[r](a[s]))
                            ? a.splice(s--, 1)
                            : ((l = !1), o < i && (i = o));
                    if (l) {
                        r.splice(u--, 1);
                        var f = n();
                        void 0 !== f && (e = f);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var u = r.length; u > 0 && r[u - 1][2] > o; u--) r[u] = r[u - 1];
            r[u] = [a, n, o];
        }),
        (t.n = (r) => {
            var e = r && r.__esModule ? () => r.default : () => r;
            return (t.d(e, { a: e }), e);
        }),
        (t.d = (r, e) => {
            for (var a in e) t.o(e, a) && !t.o(r, a) && Object.defineProperty(r, a, { enumerable: !0, get: e[a] });
        }),
        (t.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (r) {
                if ('object' == typeof window) return window;
            }
        })()),
        (t.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
        (t.j = 8),
        (() => {
            var r = { 8: 0 };
            t.O.j = (e) => 0 === r[e];
            var e = (e, a) => {
                    var n,
                        o,
                        [i, l, s] = a,
                        f = 0;
                    if (i.some((e) => 0 !== r[e])) {
                        for (n in l) t.o(l, n) && (t.m[n] = l[n]);
                        if (s) var u = s(t);
                    }
                    for (e && e(a); f < i.length; f++) ((o = i[f]), t.o(r, o) && r[o] && r[o][0](), (r[o] = 0));
                    return t.O(u);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(e.bind(null, 0)), (a.push = e.bind(null, a.push.bind(a))));
        })());
    var n = t.O(void 0, [866], () => t(1579));
    n = t.O(n);
})();
