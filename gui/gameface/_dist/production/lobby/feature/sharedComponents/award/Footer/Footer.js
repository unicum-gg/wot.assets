(() => {
    'use strict';
    var r,
        e = {
            7727: (r, e, o) => {},
            2004: (r, e, o) => {
                let a, t;
                var n, i;
                (o(6483),
                    o(7727),
                    o(7363),
                    ((i = a || (a = {})).main = 'main'),
                    (i.primary = 'primary'),
                    (i.primaryGreen = 'primaryGreen'),
                    (i.primaryRed = 'primaryRed'),
                    (i.secondary = 'secondary'),
                    (i.ghost = 'ghost'),
                    ((n = t || (t = {})).extraSmall = 'extraSmall'),
                    (n.small = 'small'),
                    (n.medium = 'medium'),
                    (n.large = 'large'),
                    R.strings.resource_well);
            },
            7363: (r) => {
                r.exports = React;
            },
        },
        o = {};
    function a(r) {
        var t = o[r];
        if (void 0 !== t) return t.exports;
        var n = (o[r] = { exports: {} });
        return (e[r](n, n.exports, a), n.exports);
    }
    ((a.m = e),
        (r = []),
        (a.O = (e, o, t, n) => {
            if (!o) {
                var i = 1 / 0;
                for (f = 0; f < r.length; f++) {
                    for (var [o, t, n] = r[f], l = !0, s = 0; s < o.length; s++)
                        (!1 & n || i >= n) && Object.keys(a.O).every((r) => a.O[r](o[s]))
                            ? o.splice(s--, 1)
                            : ((l = !1), n < i && (i = n));
                    if (l) {
                        r.splice(f--, 1);
                        var u = t();
                        void 0 !== u && (e = u);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var f = r.length; f > 0 && r[f - 1][2] > n; f--) r[f] = r[f - 1];
            r[f] = [o, t, n];
        }),
        (a.n = (r) => {
            var e = r && r.__esModule ? () => r.default : () => r;
            return (a.d(e, { a: e }), e);
        }),
        (a.d = (r, e) => {
            for (var o in e) a.o(e, o) && !a.o(r, o) && Object.defineProperty(r, o, { enumerable: !0, get: e[o] });
        }),
        (a.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (r) {
                if ('object' == typeof window) return window;
            }
        })()),
        (a.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
        (a.j = 'lobby/feature/sharedComponents/award/Footer/Footer'),
        (() => {
            var r = { 'lobby/feature/sharedComponents/award/Footer/Footer': 0 };
            a.O.j = (e) => 0 === r[e];
            var e = (e, o) => {
                    var t,
                        n,
                        [i, l, s] = o,
                        u = 0;
                    if (i.some((e) => 0 !== r[e])) {
                        for (t in l) a.o(l, t) && (a.m[t] = l[t]);
                        if (s) var f = s(a);
                    }
                    for (e && e(o); u < i.length; u++) ((n = i[u]), a.o(r, n) && r[n] && r[n][0](), (r[n] = 0));
                    return a.O(f);
                },
                o = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o))));
        })());
    var t = a.O(void 0, ['lib/resource_well.vendors'], () => a(2004));
    t = a.O(t);
})();
