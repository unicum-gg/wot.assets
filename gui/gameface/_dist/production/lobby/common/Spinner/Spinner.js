(() => {
    'use strict';
    var e,
        r = {
            6893: (e, r, n) => {
                var t = n(6179),
                    a = n.n(t);
                (0, t.memo)(() =>
                    a().createElement(
                        'div',
                        { className: 'Spinner_base_aa' },
                        a().createElement('div', { className: 'Spinner_spinner_e7' }),
                    ),
                );
            },
        },
        n = {};
    function t(e) {
        var a = n[e];
        if (void 0 !== a) return a.exports;
        var o = (n[e] = { exports: {} });
        return (r[e](o, o.exports, t), o.exports);
    }
    ((t.m = r),
        (e = []),
        (t.O = (r, n, a, o) => {
            if (!n) {
                var i = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, a, o] = e[c], s = !0, l = 0; l < n.length; l++)
                        (!1 & o || i >= o) && Object.keys(t.O).every((e) => t.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), o < i && (i = o));
                    if (s) {
                        e.splice(c--, 1);
                        var f = a();
                        void 0 !== f && (r = f);
                    }
                }
                return r;
            }
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [n, a, o];
        }),
        (t.n = (e) => {
            var r = e && e.__esModule ? () => e.default : () => e;
            return (t.d(r, { a: r }), r);
        }),
        (t.d = (e, r) => {
            for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
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
        (t.j = 140),
        (() => {
            var e = { 140: 0 };
            t.O.j = (r) => 0 === e[r];
            var r = (r, n) => {
                    var a,
                        o,
                        [i, s, l] = n,
                        f = 0;
                    if (i.some((r) => 0 !== e[r])) {
                        for (a in s) t.o(s, a) && (t.m[a] = s[a]);
                        if (l) var c = l(t);
                    }
                    for (r && r(n); f < i.length; f++) ((o = i[f]), t.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return t.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(r.bind(null, 0)), (n.push = r.bind(null, n.push.bind(n))));
        })());
    var a = t.O(void 0, [503], () => t(6893));
    a = t.O(a);
})();
