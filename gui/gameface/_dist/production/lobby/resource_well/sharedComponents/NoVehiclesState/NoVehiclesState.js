(() => {
    'use strict';
    var e,
        t = {
            3457: (e, t, a) => {
                var n = a(6483),
                    s = a.n(n),
                    r = a(7727),
                    o = a(7363),
                    _ = a.n(o),
                    i = a(6880),
                    l = a(2106);
                const u = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: n,
                    disabled: u,
                    mixClass: c,
                    soundHover: m,
                    soundClick: d,
                    onMouseEnter: b,
                    onMouseMove: f,
                    onMouseDown: g,
                    onMouseUp: h,
                    onMouseLeave: p,
                    onClick: v,
                }) => {
                    const C = (0, o.useRef)(null),
                        y = (0, o.useState)(a),
                        B = y[0],
                        E = y[1],
                        Z = (0, o.useState)(!1),
                        x = Z[0],
                        M = Z[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                B && null !== C.current && !C.current.contains(e.target) && E(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, o.useEffect)(() => {
                            E(a);
                        }, [a]),
                        _().createElement(
                            'div',
                            {
                                ref: C,
                                className: s()(
                                    i.Z.base,
                                    i.Z[`base__${n}`],
                                    u && i.Z.base__disabled,
                                    t && i.Z[`base__${t}`],
                                    B && i.Z.base__focus,
                                    x && i.Z.base__highlightActive,
                                    c,
                                ),
                                onMouseEnter: function (e) {
                                    u || (null !== m && (0, r.G)(m), b && b(e));
                                },
                                onMouseMove: function (e) {
                                    f && f(e);
                                },
                                onMouseUp: function (e) {
                                    u || (h && h(e), M(!1));
                                },
                                onMouseDown: function (e) {
                                    u ||
                                        (null !== d && (0, r.G)(d),
                                        g && g(e),
                                        a && (u || (C.current && (C.current.focus(), E(!0)))),
                                        M(!0));
                                },
                                onMouseLeave: function (e) {
                                    u || (p && p(e), M(!1));
                                },
                                onClick: function (e) {
                                    u || (v && v(e));
                                },
                            },
                            n !== l.L.ghost &&
                                _().createElement(
                                    _().Fragment,
                                    null,
                                    _().createElement('div', { className: i.Z.back }),
                                    _().createElement('span', { className: i.Z.texture }),
                                ),
                            _().createElement(
                                'span',
                                { className: s()(i.Z.state, i.Z.state__default) },
                                _().createElement('span', { className: i.Z.stateDisabled }),
                                _().createElement('span', { className: i.Z.stateHighlightHover }),
                                _().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            _().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                u.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            },
            2106: (e, t, a) => {
                let n, s;
                (a.d(t, { L: () => n }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(s || (s = {})));
            },
            7727: (e, t, a) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                a.d(t, { G: () => n });
            },
            6324: (e, t, a) => {
                (a(3457), a(7363));
                R.strings.resource_well.mainView.footer;
            },
            6880: (e, t, a) => {
                a.d(t, { Z: () => n });
                const n = {
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
    function n(e) {
        var s = a[e];
        if (void 0 !== s) return s.exports;
        var r = (a[e] = { exports: {} });
        return (t[e](r, r.exports, n), r.exports);
    }
    ((n.m = t),
        (e = []),
        (n.O = (t, a, s, r) => {
            if (!a) {
                var o = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a, s, r] = e[u], _ = !0, i = 0; i < a.length; i++)
                        (!1 & r || o >= r) && Object.keys(n.O).every((e) => n.O[e](a[i]))
                            ? a.splice(i--, 1)
                            : ((_ = !1), r < o && (o = r));
                    if (_) {
                        e.splice(u--, 1);
                        var l = s();
                        void 0 !== l && (t = l);
                    }
                }
                return t;
            }
            r = r || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
            e[u] = [a, s, r];
        }),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (n.d(t, { a: t }), t);
        }),
        (n.d = (e, t) => {
            for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.j = 784),
        (() => {
            var e = { 784: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var s,
                        r,
                        [o, _, i] = a,
                        l = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (s in _) n.o(_, s) && (n.m[s] = _[s]);
                        if (i) var u = i(n);
                    }
                    for (t && t(a); l < o.length; l++) ((r = o[l]), n.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return n.O(u);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var s = n.O(void 0, [52], () => n(6324));
    s = n.O(s);
})();
