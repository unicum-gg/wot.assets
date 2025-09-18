(() => {
    'use strict';
    var r,
        e = {
            3457: (r, e, t) => {
                (t(6483), t(7727), t(7363), t(6880), t(2106));
            },
            2106: (r, e, t) => {
                let a, n;
                (!(function (r) {
                    ((r.main = 'main'),
                        (r.primary = 'primary'),
                        (r.primaryGreen = 'primaryGreen'),
                        (r.primaryRed = 'primaryRed'),
                        (r.secondary = 'secondary'),
                        (r.ghost = 'ghost'));
                })(a || (a = {})),
                    (function (r) {
                        ((r.extraSmall = 'extraSmall'),
                            (r.small = 'small'),
                            (r.medium = 'medium'),
                            (r.large = 'large'));
                    })(n || (n = {})));
            },
            7727: (r, e, t) => {},
            9525: (r, e, t) => {
                (t(6483), t(3457), t(7363));
                R.strings.battle_pass.battlePassBuyView;
            },
            6880: () => {},
            7363: (r) => {
                r.exports = React;
            },
        },
        t = {};
    function a(r) {
        var n = t[r];
        if (void 0 !== n) return n.exports;
        var o = (t[r] = { exports: {} });
        return (e[r](o, o.exports, a), o.exports);
    }
    ((a.m = e),
        (r = []),
        (a.O = (e, t, n, o) => {
            if (!t) {
                var i = 1 / 0;
                for (f = 0; f < r.length; f++) {
                    for (var [t, n, o] = r[f], l = !0, s = 0; s < t.length; s++)
                        (!1 & o || i >= o) && Object.keys(a.O).every((r) => a.O[r](t[s]))
                            ? t.splice(s--, 1)
                            : ((l = !1), o < i && (i = o));
                    if (l) {
                        r.splice(f--, 1);
                        var u = n();
                        void 0 !== u && (e = u);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var f = r.length; f > 0 && r[f - 1][2] > o; f--) r[f] = r[f - 1];
            r[f] = [t, n, o];
        }),
        (a.n = (r) => {
            var e = r && r.__esModule ? () => r.default : () => r;
            return (a.d(e, { a: e }), e);
        }),
        (a.d = (r, e) => {
            for (var t in e) a.o(e, t) && !a.o(r, t) && Object.defineProperty(r, t, { enumerable: !0, get: e[t] });
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
        (a.j = 1523),
        (() => {
            var r = { 1523: 0 };
            a.O.j = (e) => 0 === r[e];
            var e = (e, t) => {
                    var n,
                        o,
                        [i, l, s] = t,
                        u = 0;
                    if (i.some((e) => 0 !== r[e])) {
                        for (n in l) a.o(l, n) && (a.m[n] = l[n]);
                        if (s) var f = s(a);
                    }
                    for (e && e(t); u < i.length; u++) ((o = i[u]), a.o(r, o) && r[o] && r[o][0](), (r[o] = 0));
                    return a.O(f);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var n = a.O(void 0, [1519], () => a(9525));
    n = a.O(n);
})();
