(() => {
    'use strict';
    var e,
        t = {
            3457: (e, t, a) => {
                (a(6483), a(7727), a(7363), a(6880));
                var r = a(2106);
                r.L.primary;
            },
            2106: (e, t, a) => {
                let r, _;
                (a.d(t, { L: () => r }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(_ || (_ = {})));
            },
            7727: (e, t, a) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                a.d(t, { G: () => r });
            },
            7162: (e, t, a) => {
                (a(3457), a(7363), R.strings.resource_well.mainView.footer);
            },
            6880: (e, t, a) => {
                a.d(t, { Z: () => r });
                const r = {
                    base: 'CButton_base_40',
                    base__main: 'CButton_base__main_42',
                    base__primary: 'CButton_base__primary_7f',
                    base__primaryGreen: 'CButton_base__primaryGreen_6f',
                    base__primaryRed: 'CButton_base__primaryRed_ec',
                    base__secondary: 'CButton_base__secondary_50',
                    base__ghost: 'CButton_base__ghost_ed',
                    base__extraSmall: 'CButton_base__extraSmall_27',
                    base__small: 'CButton_base__small_df',
                    base__medium: 'CButton_base__medium_74',
                    base__large: 'CButton_base__large_5c',
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            7363: (e) => {
                e.exports = React;
            },
        },
        a = {};
    function r(e) {
        var _ = a[e];
        if (void 0 !== _) return _.exports;
        var o = (a[e] = { exports: {} });
        return (t[e](o, o.exports, r), o.exports);
    }
    ((r.m = t),
        (e = []),
        (r.O = (t, a, _, o) => {
            if (!a) {
                var s = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a, _, o] = e[u], n = !0, i = 0; i < a.length; i++)
                        (!1 & o || s >= o) && Object.keys(r.O).every((e) => r.O[e](a[i]))
                            ? a.splice(i--, 1)
                            : ((n = !1), o < s && (s = o));
                    if (n) {
                        e.splice(u--, 1);
                        var l = _();
                        void 0 !== l && (t = l);
                    }
                }
                return t;
            }
            o = o || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
            e[u] = [a, _, o];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (r.d(t, { a: t }), t);
        }),
        (r.d = (e, t) => {
            for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.j = 'lobby/feature/sharedComponents/NoVehiclesState/NoVehiclesState'),
        (() => {
            var e = { 'lobby/feature/sharedComponents/NoVehiclesState/NoVehiclesState': 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var _,
                        o,
                        [s, n, i] = a,
                        l = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (_ in n) r.o(n, _) && (r.m[_] = n[_]);
                        if (i) var u = i(r);
                    }
                    for (t && t(a); l < s.length; l++) ((o = s[l]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return r.O(u);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var _ = r.O(void 0, ['lib/resource_well.vendors'], () => r(7162));
    _ = r.O(_);
})();
