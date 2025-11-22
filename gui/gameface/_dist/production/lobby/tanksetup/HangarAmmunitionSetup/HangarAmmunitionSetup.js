(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var a = n(6483),
                    s = n.n(a),
                    u = n(7727),
                    r = n(7363),
                    o = n.n(r),
                    i = n(6880),
                    l = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    disabled: n,
                    mixClass: a,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: p,
                    onClick: b,
                    isFocused: g = !1,
                    type: E = l.L.primary,
                    soundHover: h = 'highlight',
                    soundClick: v = 'play',
                }) => {
                    const f = (0, r.useRef)(null),
                        C = (0, r.useState)(g),
                        A = C[0],
                        D = C[1],
                        F = (0, r.useState)(!1),
                        S = F[0],
                        y = F[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                A && null !== f.current && !f.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [A]),
                        (0, r.useEffect)(() => {
                            D(g);
                        }, [g]),
                        o().createElement(
                            'div',
                            {
                                ref: f,
                                className: s()(
                                    i.Z.base,
                                    i.Z[`base__${E}`],
                                    n && i.Z.base__disabled,
                                    t && i.Z[`base__${t}`],
                                    A && i.Z.base__focus,
                                    S && i.Z.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== h && (0, u.G)(h), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    n || (m && m(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    n ||
                                        (null !== v && (0, u.G)(v),
                                        d && d(e),
                                        g && (n || (f.current && (f.current.focus(), D(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (p && p(e), y(!1));
                                },
                                onClick: function (e) {
                                    n || (b && b(e));
                                },
                            },
                            E !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: s()(i.Z.state, i.Z.state__default) },
                                o().createElement('span', { className: i.Z.stateDisabled }),
                                o().createElement('span', { className: i.Z.stateHighlightHover }),
                                o().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, t, n) => {
                'use strict';
                let a, s;
                (n.d(t, { L: () => a, q: () => s }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(s || (s = {})));
            },
            2262: (e, t, n) => {
                'use strict';
                n.d(t, { XZ: () => m });
                var a = n(7363),
                    s = n.n(a),
                    u = n(6483),
                    r = n.n(u),
                    o = n(7727),
                    i = n(1641),
                    l = n(8844),
                    c = n(4382);
                const _ = [
                    'id',
                    'isChecked',
                    'isDisabled',
                    'isAlert',
                    'size',
                    'type',
                    'soundHover',
                    'soundClick',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseUp',
                    'onMouseDown',
                    'onClick',
                    'onChange',
                    'onFocus',
                    'onBlur',
                    'text',
                    'contentStyles',
                    'children',
                    'alignment',
                ];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.id,
                        n = e.isChecked,
                        u = void 0 !== n && n,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        b = e.isAlert,
                        g = void 0 !== b && b,
                        E = e.size,
                        h = void 0 === E ? l.yB.medium : E,
                        v = e.type,
                        f = void 0 === v ? l.Rh.primary : v,
                        C = e.soundHover,
                        A = void 0 === C ? 'highlight' : C,
                        D = e.soundClick,
                        F = void 0 === D ? 'play' : D,
                        S = e.onMouseEnter,
                        y = e.onMouseLeave,
                        B = e.onMouseUp,
                        w = e.onMouseDown,
                        k = e.onClick,
                        x = e.onChange,
                        T = e.onFocus,
                        I = e.onBlur,
                        N = e.text,
                        R = e.contentStyles,
                        O = e.children,
                        L = e.alignment,
                        M = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, _);
                    const P = (0, a.useState)(!1),
                        $ = P[0],
                        z = P[1],
                        H = (0, a.useState)(!1),
                        j = (H[0], H[1]),
                        W = (0, a.useCallback)(
                            (e) => {
                                p || (x && x(), k && k(e));
                            },
                            [p, x, k],
                        ),
                        G = (0, a.useCallback)(
                            (e) => {
                                const t = e.button === i.t.LEFT;
                                p || (t && z(!0), t && w && w(e), F && (0, o.G)(F));
                            },
                            [p, w, F],
                        ),
                        U = (0, a.useCallback)(
                            (e) => {
                                p || (z(!1), B && B(e));
                            },
                            [p, B],
                        ),
                        Z = (0, a.useCallback)(
                            (e) => {
                                p || (S && S(e), A && (0, o.G)(A));
                            },
                            [p, S, A],
                        ),
                        V = (0, a.useCallback)(
                            (e) => {
                                p || (z(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        q = (0, a.useCallback)(
                            (e) => {
                                p || (j(!0), T && T(e));
                            },
                            [p, T],
                        ),
                        X = (0, a.useCallback)(
                            (e) => {
                                p || (j(!1), I && I(e));
                            },
                            [p, I],
                        ),
                        K = s().createElement(
                            'div',
                            { className: c.Z.label },
                            s().createElement(
                                'div',
                                { className: r()(c.Z.labelContent, 's-labelContent'), style: R },
                                N || O,
                            ),
                        );
                    return s().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: r()(c.Z.base, c.Z[`base__${h}`], c.Z[`base__${f}`], {
                                    [c.Z.base__checked]: u,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: $,
                                    [c.Z.base__alert]: g,
                                    [c.Z.base__center]: L === l.N3.Center,
                                    [c.Z.base__bottom]: L === l.N3.Bottom,
                                }),
                                onClick: W,
                                onMouseEnter: Z,
                                onMouseLeave: V,
                                onMouseDown: G,
                                onMouseUp: U,
                                onFocus: q,
                                onBlur: X,
                            },
                            M,
                        ),
                        s().createElement(
                            'div',
                            { className: c.Z.input },
                            s().createElement('div', { className: c.Z.alertOverlay }),
                            s().createElement('div', { className: c.Z.inputHoverOverlay }),
                            s().createElement('div', { className: c.Z.highlight }),
                        ),
                        s().createElement('div', { className: c.Z.checkmark }),
                        ((N || O) && K) || null,
                    );
                };
            },
            8844: (e, t, n) => {
                'use strict';
                let a, s, u;
                (n.d(t, { N3: () => u, Rh: () => s, yB: () => a }),
                    (function (e) {
                        ((e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(u || (u = {})));
            },
            7405: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => c });
                var a = n(6483),
                    s = n.n(a),
                    u = n(2372),
                    r = n(7363),
                    o = n.n(r),
                    i = n(8460),
                    l = n(329);
                const c = (0, r.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: n,
                        type: a,
                        value: r,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: p,
                        classNames: b,
                    }) =>
                        o().createElement(
                            'span',
                            { className: s()(i.Z.base, i.Z[`base__${n}`], p) },
                            o().createElement(
                                'span',
                                {
                                    className: s()(
                                        i.Z.value,
                                        i.Z[`value__${a}`],
                                        !d && i.Z.value__notEnough,
                                        null == b ? void 0 : b.value,
                                    ),
                                },
                                _ && r > 0 && '+',
                                o().createElement(u.A, { value: r, format: a === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: s()(i.Z.icon, i.Z[`icon__${a}-${n}`], null == b ? void 0 : b.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: s()(
                                            i.Z.stock,
                                            c && i.Z.stock__indent,
                                            t && i.Z.stock__interactive,
                                            null == b ? void 0 : b.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: i.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, t, n) => {
                'use strict';
                let a, s, u;
                (n.d(t, { V2: () => s, et: () => a, we: () => u }),
                    (function (e) {
                        ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(u || (u = {})));
            },
            2372: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => s });
                var a = n(9916);
                const s = ({ value: e, format: t = 'integral' }) => {
                    const n = (function (e) {
                            return 'gold' === e ? a.B3.GOLD : a.B3.INTEGRAL;
                        })(t),
                        s = a.Z5.getNumberFormat(e, n);
                    return void 0 !== e && void 0 !== s ? s : null;
                };
            },
            280: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => l });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3649),
                    r = n(7363),
                    o = n.n(r),
                    i = n(5287);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: n,
                    alignment: a = u.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, u.WU)(t, e) : t;
                    return o().createElement(
                        r.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            o().createElement(
                                'div',
                                { className: s()(i.Z.base, n), key: `${t}-${l}` },
                                (0, u.Uw)(t, a, e).map((e, t) =>
                                    o().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Q: () => o, Y: () => l });
                var a = n(3138),
                    s = n(7363),
                    u = n(1043),
                    r = n(5262);
                function o(e = a.O.client.getSize('rem')) {
                    const t = e.width,
                        n = e.height;
                    return Object.assign({ width: t, height: n }, (0, r.T)(t, n, u.j));
                }
                const i = o(),
                    l = (0, s.createContext)(i);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => o });
                var a = n(3138),
                    s = n(7363),
                    u = n.n(s),
                    r = n(3495);
                const o = ({ children: e }) => {
                    const t = (0, s.useState)(r.Q),
                        n = t[0],
                        o = t[1],
                        i = (0, s.useState)(!1),
                        l = i[0],
                        c = i[1];
                    return (
                        (0, s.useLayoutEffect)(() => {
                            function e() {
                                o((e) => {
                                    const t = a.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : (0, r.Q)(t);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                a.O.client.events.on('clientResized', e),
                                a.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (a.O.client.events.off('clientResized', e),
                                        a.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        u().createElement(r.Y.Provider, { value: n }, l && e)
                    );
                };
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(7363),
                    s = n(7382),
                    u = n(3495);
                const r = ['children'];
                (0, a.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, r);
                    const o = (0, a.useContext)(u.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        _ = o.small,
                        d = o.extraSmall,
                        m = o.extraLargeWidth,
                        p = o.largeWidth,
                        b = o.mediumWidth,
                        g = o.smallWidth,
                        E = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        v = o.largeHeight,
                        f = o.mediumHeight,
                        C = o.smallHeight,
                        A = o.extraSmallHeight,
                        D = { extraLarge: h, large: v, medium: f, small: C, extraSmall: A };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && i) return t;
                        if (n.large && l) return t;
                        if (n.medium && c) return t;
                        if (n.small && _) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, s.H)(t, n, D);
                        if (n.largeWidth && p) return (0, s.H)(t, n, D);
                        if (n.mediumWidth && b) return (0, s.H)(t, n, D);
                        if (n.smallWidth && g) return (0, s.H)(t, n, D);
                        if (n.extraSmallWidth && E) return (0, s.H)(t, n, D);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && h) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && C) return t;
                            if (n.extraSmallHeight && A) return t;
                        }
                    }
                    return null;
                });
            },
            7382: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => a });
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, n) => {
                'use strict';
                n.d(t, { YN: () => s.Y, ZN: () => a.Z });
                n(6010);
                var a = n(1039),
                    s = n(3495);
            },
            1043: (e, t, n) => {
                'use strict';
                n.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                'use strict';
                var a;
                function s(e, t, n) {
                    const a = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, n),
                        s = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, n),
                        u = Math.min(a, s);
                    return {
                        extraLarge: u === n.extraLarge.weight,
                        large: u === n.large.weight,
                        medium: u === n.medium.weight,
                        small: u === n.small.weight,
                        extraSmall: u === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: s === n.extraLarge.weight,
                        largeHeight: s === n.large.weight,
                        mediumHeight: s === n.medium.weight,
                        smallHeight: s === n.small.weight,
                        extraSmallHeight: s === n.extraSmall.weight,
                    };
                }
                (n.d(t, { T: () => s, u: () => a }),
                    (function (e) {
                        ((e.extraLarge = 'extraLarge'),
                            (e.large = 'large'),
                            (e.medium = 'medium'),
                            (e.small = 'small'),
                            (e.extraSmall = 'extraSmall'),
                            (e.extraLargeWidth = 'extraLargeWidth'),
                            (e.largeWidth = 'largeWidth'),
                            (e.mediumWidth = 'mediumWidth'),
                            (e.smallWidth = 'smallWidth'),
                            (e.extraSmallWidth = 'extraSmallWidth'),
                            (e.extraLargeHeight = 'extraLargeHeight'),
                            (e.largeHeight = 'largeHeight'),
                            (e.mediumHeight = 'mediumHeight'),
                            (e.smallHeight = 'smallHeight'),
                            (e.extraSmallHeight = 'extraSmallHeight'));
                    })(a || (a = {})));
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => i });
                var a = n(7363),
                    s = n.n(a),
                    u = n(2056);
                const r = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, r);
                    return s().createElement(
                        u.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    s = n(7363),
                    u = n.n(s);
                const r = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                return s;
                            })(e, r);
                        const p = (0, s.useMemo)(() => {
                            const e = Object.assign({}, d, { body: n, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, n, l, c, d]);
                        return u().createElement(
                            a.u,
                            o(
                                {
                                    contentId:
                                        ((b = null == d ? void 0 : d.hasHtmlContent),
                                        b ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: p,
                                },
                                m,
                            ),
                            t,
                        );
                        var b;
                    };
            },
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => l });
                var a = n(7902),
                    s = n(9916),
                    u = n(7363);
                const r = [
                    'children',
                    'contentId',
                    'args',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onClick',
                    'ignoreShowDelay',
                    'ignoreMouseClick',
                    'decoratorId',
                    'isEnabled',
                    'targetId',
                    'onShow',
                    'onHide',
                ];
                function o(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const i = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: s.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            s = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            b = e.ignoreMouseClick,
                            g = void 0 !== b && b,
                            E = e.decoratorId,
                            h = void 0 === E ? 0 : E,
                            v = e.isEnabled,
                            f = void 0 === v || v,
                            C = e.targetId,
                            A = void 0 === C ? 0 : C,
                            D = e.onShow,
                            F = e.onHide,
                            S = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                return s;
                            })(e, r);
                        const y = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, u.useMemo)(() => A || (0, a.F)().resId, [A]),
                            w = (0, u.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (i(n, h, { isMouseEvent: !0, on: !0, arguments: o(s) }, B),
                                    D && D(),
                                    (y.current.isVisible = !0));
                            }, [n, h, s, B, D]),
                            k = (0, u.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        i(n, h, { on: !1 }, B),
                                        y.current.isVisible && F && F(),
                                        (y.current.isVisible = !1));
                                }
                            }, [n, h, B, F]),
                            x = (0, u.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        ((0, u.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                !1 === f && k();
                            }, [f, k]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        (window.removeEventListener('mouseleave', k), k());
                                    }
                                ),
                                [k],
                            ));
                        return f
                            ? (0, u.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(y.current.timeoutId),
                                                      (y.current.timeoutId = window.setTimeout(w, p ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (k(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === g && k(), null == d || d(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === g && k(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      S,
                                  ),
                              )
                            : t;
                        var T;
                    };
            },
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            1856: (e, t, n) => {
                'use strict';
                n.d(t, { v: () => a });
                const a = (e) => {
                    let t,
                        n = null;
                    return (
                        (n = requestAnimationFrame(() => {
                            n = requestAnimationFrame(() => {
                                ((n = null), (t = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                        }
                    );
                };
            },
            8246: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => o });
                var a = n(3138);
                function s(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const r = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: n = r, context: u = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = o.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = n(t),
                            s = u.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? s
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, s);
                    };
                    return {
                        subscribe: (n, s) => {
                            const r = 'string' == typeof s ? `${u}.${s}` : u,
                                i = a.O.view.addModelObserver(r, t, !0);
                            return (o.set(i, n), e && n(l(s)), i);
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const n = l(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = s(o.keys()); !(e = n()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q3: () => i });
                var a = n(4598),
                    s = n(9174),
                    u = n(7363),
                    r = n.n(u),
                    o = n(8246);
                const i = () => (e, t) => {
                    const n = (0, u.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, u.useRef)([]),
                                m = (n, u, r) => {
                                    var i;
                                    const l = o.U(u),
                                        c =
                                            'real' === n
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == r ? void 0 : r.getter) ? i : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === n ? (null == r ? void 0 : r.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        p = e({
                                            mode: n,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = _(e),
                                                        u = s.LO.box(t, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => u.set(e)),
                                                                e,
                                                            ),
                                                        u
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const u = null != t ? t : _(e),
                                                        r = s.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const u = null != t ? t : _(e),
                                                        r = s.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = _(t);
                                                    if (Array.isArray(e)) {
                                                        const u = e.reduce(
                                                            (e, t) => ((e[t] = s.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, s.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            u[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            u
                                                        );
                                                    }
                                                    {
                                                        const u = e,
                                                            r = Object.entries(u),
                                                            o = r.reduce(
                                                                (e, [t, n]) => ((e[n] = s.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, s.aD)((e) => {
                                                                        r.forEach(([t, n]) => {
                                                                            o[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        b = { mode: n, model: p, externalModel: c, cleanup: m };
                                    return {
                                        model: p,
                                        controls: 'mocks' === n && r ? r.controls(b) : t(b),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                p = (0, u.useRef)(!1),
                                b = (0, u.useState)(i),
                                g = b[0],
                                E = b[1],
                                h = (0, u.useState)(() => m(i, l, _)),
                                v = h[0],
                                f = h[1];
                            return (
                                (0, u.useEffect)(() => {
                                    p.current ? f(m(g, l, _)) : (p.current = !0);
                                }, [_, g, l]),
                                (0, u.useEffect)(() => {
                                    E(i);
                                }, [i]),
                                (0, u.useEffect)(
                                    () => () => {
                                        (v.externalModel.dispose(), d.current.forEach((e) => e()));
                                    },
                                    [v],
                                ),
                                r().createElement(n.Provider, { value: v }, c)
                            );
                        },
                        () => (0, u.useContext)(n),
                    ];
                };
            },
            527: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, { mouse: () => c, off: () => i, on: () => o, onResize: () => u, onScaleUpdated: () => r }));
                var a = n(2472),
                    s = n(1176);
                const u = (0, a.E)('clientResized'),
                    r = (0, a.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, s.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, s.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, s.R)(!1);
                    }
                    const u = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let s = !0;
                                    const u = `mouse${t}`,
                                        r = l[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(u, o),
                                        a(),
                                        () => {
                                            s &&
                                                (r(),
                                                window.removeEventListener(u, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (s = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, u, {
                        disable() {
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
                        },
                        enableOutside() {
                            e.enabled && (0, s.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, s.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => u,
                        graphicsQuality: () => o,
                        playSound: () => s.G,
                        setRTPC: () => s.E,
                    }));
                var a = n(527),
                    s = n(2493);
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function s(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => s, G: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => r });
                var a = n(5959),
                    s = n(7698),
                    u = n(514);
                const r = { view: n(7641), client: a, sound: u.ZP, intl: s.N };
            },
            7698: (e, t, n) => {
                'use strict';
                n.d(t, { N: () => a });
                const a = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => r });
                var a = n(5959);
                const s = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    u = Object.keys(s).reduce((e, t) => ((e[t] = () => (0, a.playSound)(s[t])), e), {}),
                    r = { play: Object.assign({}, u, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function s(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => s, getTextureUrl: () => a }));
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => s });
                var a = n(2472);
                const s = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => i,
                        arabic2roman: () => B,
                        children: () => s,
                        displayStatus: () => u.W,
                        displayStatusIs: () => k,
                        enableFullScreenModeSupported: () => I,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getExternalPaddingsRem: () => w,
                        getFontNames: () => y,
                        getScale: () => E,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
                        initExternalPaddings: () => N,
                        isEventHandled: () => D,
                        isFocused: () => C,
                        pxToRem: () => h,
                        remToPx: () => v,
                        resize: () => p,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    }));
                var a = n(9690),
                    s = n(3722),
                    u = n(6112),
                    r = n(6538),
                    o = n(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function _(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function p(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function b(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function A() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    B = a.cg;
                function w() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const k = Object.keys(u.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === u.W[t]), e),
                        {},
                    ),
                    x = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function I() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function N(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            a = t.right,
                            s = t.bottom,
                            u = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${s}rem`),
                            e.style.setProperty('--external-padding-left', `${u}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => l });
                const a = ['args'];
                const s = 2,
                    u = 16,
                    r = 32,
                    o = 64,
                    i = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        s = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                    return s;
                                })(t, a);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((s = u),
                                              Object.entries(s).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var s;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? s : r);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(u, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                'use strict';
                function a() {}
                n.d(t, { ZT: () => a, jv: () => u, yR: () => s });
                function s(e) {
                    return e;
                }
                function u() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId'),
                        s = '';
                    var u;
                    t &&
                        ((s = (null == (u = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : u[0]) || ''),
                        (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== n &&
                            window.subViews[n] &&
                            (a = window.subViews[n].id));
                    return { callerUrl: s, caller: n, stack: t, resId: a };
                };
            },
            3815: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => u });
                var a = n(7363);
                const s = [];
                function u(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), s)
                    );
                }
            },
            8526: (e, t, n) => {
                'use strict';
                n.d(t, { gd: () => o });
                var a = n(3138),
                    s = n(5521),
                    u = (n(9916), n(7363));
                const r = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function o(e = s.n.NONE, t = r, n = !1, o = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== s.n.NONE)
                            return (
                                window.addEventListener('keydown', u, n),
                                () => {
                                    window.removeEventListener('keydown', u, n);
                                }
                            );
                        function u(s) {
                            if (s.keyCode === e) {
                                if (!o && a.O.view.isEventHandled()) return;
                                (a.O.view.setEventHandled(), t(s), n && s.stopPropagation());
                            }
                        }
                    }, [t, e, n, o]);
                }
            },
            2039: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => s });
                var a = n(7363);
                const s = (e) => {
                    (0, a.useEffect)(() => e, []);
                };
            },
            1396: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => u });
                var a = n(7363),
                    s = n(2039);
                function u() {
                    const e = (0, a.useRef)(0);
                    return (
                        (0, s.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (t, n) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            ((e.current = 0), t());
                                        }, n)));
                                },
                                clear: () => {
                                    (window.clearTimeout(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            5521: (e, t, n) => {
                'use strict';
                let a, s;
                (n.d(t, { n: () => a }),
                    (function (e) {
                        ((e[(e.NONE = -1)] = 'NONE'),
                            (e[(e.ALT = 165)] = 'ALT'),
                            (e[(e.ENTER = 13)] = 'ENTER'),
                            (e[(e.ESCAPE = 27)] = 'ESCAPE'),
                            (e[(e.SPACE = 32)] = 'SPACE'),
                            (e[(e.END = 35)] = 'END'),
                            (e[(e.HOME = 36)] = 'HOME'),
                            (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
                            (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (e[(e.PLUS = 187)] = 'PLUS'),
                            (e[(e.MINUS = 189)] = 'MINUS'),
                            (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
                            (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
                            (e[(e.DELETE = 46)] = 'DELETE'),
                            (e[(e.TAB = 9)] = 'TAB'),
                            (e[(e.KEY_N = 78)] = 'KEY_N'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.ALT = 'Alt'),
                            (e.ALT_GRAPH = 'AltGraph'),
                            (e.CAPS_LOCK = 'CapsLock'),
                            (e.CONTROL = 'Control'),
                            (e.FN = 'Fn'),
                            (e.FN_LOCK = 'FnLock'),
                            (e.META = 'Meta'),
                            (e.NUM_LOCK = 'NumLock'),
                            (e.SCROLL_LOCK = 'ScrollLock'),
                            (e.SHIFT = 'Shift'),
                            (e.SYMBOL = 'Symbol'),
                            (e.SYMBOL_LOCK = 'SymbolLock'));
                    })(s || (s = {})));
            },
            9480: (e, t, n) => {
                'use strict';
                n.d(t, {
                    G: () => i,
                    MH: () => u,
                    U2: () => s,
                    UI: () => o,
                    dF: () => c,
                    hX: () => l,
                    u4: () => d,
                    v: () => _,
                });
                var a = n(8968);
                function s(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                const u = s;
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function o(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function i(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let n = 0; n < e.length; n++) {
                        if (t(u(e, n), n, e)) return !0;
                    }
                    return !1;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const n = [];
                    for (let s = 0; s < e.length; s++) {
                        var a;
                        const u = null == (a = e[s]) ? void 0 : a.value;
                        t(u, s, e) && n.push(u);
                    }
                    return n;
                }
                function c(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = r(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function _(e, t) {
                    return (function (e, t, n) {
                        const a = [];
                        for (let s = 0; s < e.length; s++) {
                            const r = u(e, s);
                            t(r, s, e) && a.push(n(r, s, e));
                        }
                        return a;
                    })(e, a.C, t);
                }
                function d(e, t, n) {
                    if (Array.isArray(e)) return e.reduce(t, n);
                    let a = n;
                    for (let n = 0; n < e.length; n++) {
                        a = t(a, u(e, n), n, e);
                    }
                    return a;
                }
            },
            1641: (e, t, n) => {
                'use strict';
                let a;
                (n.d(t, { t: () => a }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(a || (a = {})));
            },
            8968: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                n.d(t, { C: () => a });
            },
            9690: (e, t, n) => {
                'use strict';
                n.d(t, { HG: () => o, cg: () => u });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    s = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function u(e) {
                    let t = '';
                    for (let n = s.length - 1; n >= 0; n--) for (; e >= s[n]; ) ((t += a[n]), (e -= s[n]));
                    return t;
                }
                const r = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (r ? `${e}` : u(e));
            },
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { $: () => s, G: () => a });
                const s = {
                    playHighlight() {
                        a('highlight');
                    },
                    playClick() {
                        a('play');
                    },
                    playYes() {
                        a('yes1');
                    },
                };
            },
            3649: (e, t, n) => {
                'use strict';
                n.d(t, {
                    BN: () => r,
                    Eg: () => l,
                    Uw: () => g,
                    WU: () => u,
                    dL: () => E,
                    e: () => o,
                    v2: () => s,
                    z4: () => i,
                });
                var a = n(1281);
                let s;
                function u(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(s || (s = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    c = (e, t, n) => {
                        if (n % 2) {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                        return [...e, t];
                    },
                    _ = (e, t, n) => {
                        if (0 === n) return [t];
                        if (n % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                    },
                    d = (e, t, n = s.left) => e.split(t).reduce(n === s.left ? c : _, []),
                    m = (() => {
                        const e = new RegExp(
                            [
                                /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            ]
                                .map((e) => e.source)
                                .join('|'),
                            'gum',
                        );
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    p = ['zh_cn', 'zh_sg', 'zh_tw'],
                    b = (e, t = s.left) => {
                        const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (p.includes(n)) return m(e);
                        if ('ja' === n) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => i(e));
                        }
                        return ((e, t = s.left) => {
                            let n = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                u = i(e);
                            return (d(u, /( )/, t).forEach((e) => (n = n.concat(d(e, a, s.left)))), n);
                        })(e, t);
                    },
                    g = (e, t, n) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (n && e in n ? n[e] : b(e, t))),
                    E = (e) => u(R.strings.common.percentValue(), { value: e });
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var a = n(3138);
                class s {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (e) => {
                                this._views[e] &&
                                    (this._views[e].forEach((e) => {
                                        delete this._callbacks[e];
                                    }),
                                    delete this._views[e]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0));
                    }
                    static get instance() {
                        return (window.__dataTracker || (window.__dataTracker = new s()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, n = 0, s = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const u = a.O.view.addModelObserver(e, n, s);
                        return (
                            u > 0
                                ? ((this._callbacks[u] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(u) : (this._views[n] = [u])))
                                : console.error("Can't add callback for model:", e),
                            u
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                s.__instance = void 0;
                const u = s;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        ((this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                ((this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(e) {
                        (this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data));
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => u.Z,
                    B3: () => i,
                    Gr: () => l,
                    Z5: () => r.Z5,
                    B0: () => o,
                    c9: () => v,
                    ry: () => E,
                    Eu: () => h,
                });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
                            this.removeMouseListener());
                    }
                    addMouseListener() {
                        this._listenMouse ||
                            (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                    }
                    removeMouseListener() {
                        this._listenMouse &&
                            0 === this.entries.length &&
                            (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                    }
                }
                a.__instance = void 0;
                const s = a;
                var u = n(1358);
                var r = n(8613);
                let o;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = n(5521),
                    m = n(3138);
                const p = ['args'];
                function b(e, t, n, a, s, u, r) {
                    try {
                        var o = e[u](r),
                            i = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, s);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        n = arguments;
                                    return new Promise(function (a, s) {
                                        var u = e.apply(t, n);
                                        function r(e) {
                                            b(u, a, s, r, o, 'next', e);
                                        }
                                        function o(e) {
                                            b(u, a, s, r, o, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    v = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        s = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                    return s;
                                })(t, p);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
                                          arguments:
                                              ((a = s),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, u));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    f = () => v(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var A = n(7572);
                const D = s.instance,
                    F = {
                        DataTracker: u.Z,
                        ViewModel: A.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, s = R.invalid('resId'), u) => {
                            const r = m.O.view.getViewGlobalPosition(),
                                i = n.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                _ = i.width,
                                d = i.height,
                                p = {
                                    x: m.O.view.pxToRem(l) + r.x,
                                    y: m.O.view.pxToRem(c) + r.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            v(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: g(p),
                                on: !0,
                                args: u,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: E,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const s = Object.prototype.toString.call(t[a]);
                                    if (s.startsWith('[object CoherentArrayProxy]')) {
                                        const s = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < s.length; t++) n[a].push({ value: e(s[t].value) });
                                    } else
                                        s.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Ew: () => u, Z5: () => a, cy: () => s });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    },
                    u = {
                        getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                        getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                    };
            },
            7260: (e, t, n) => {
                'use strict';
                n.d(t, { B: () => c });
                var a = n(7363),
                    s = n.n(a),
                    u = n(280),
                    r = n(8852);
                const o = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    i = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, a.memo)(({ text: e, binding: t, classMix: n }) => {
                        const c = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            _ = (0, a.useMemo)(() => t || {}, [t]);
                        let d = o.exec(e),
                            m = e,
                            p = 0;
                        for (; d; ) {
                            const n = d[0],
                                a = i.exec(n),
                                b = l.exec(n),
                                g = d[1];
                            if (a && b) {
                                const e = a[0],
                                    o = e + p++ + e;
                                ((m = m.replace(n, `%(${o})`)),
                                    (_[o] = r.Z[e]
                                        ? s().createElement(
                                              'span',
                                              { className: r.Z[e] },
                                              s().createElement(u.z, { text: g, binding: t }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: c(e) },
                                              s().createElement(u.z, { text: g, binding: t }),
                                          )));
                            }
                            d = o.exec(e);
                        }
                        return s().createElement(u.z, { text: m, classMix: n, binding: _ });
                    });
            },
            3521: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                n.d(t, { WL: () => o, aR: () => i, jZ: () => u, yG: () => r });
                const u = (e, t = []) => {
                        const n = document.getElementById('root');
                        n && (n.style.cursor = e ? 'grabbing' : 'default');
                        for (var s, u = a(t); !(s = u()).done; ) {
                            const t = s.value,
                                n = document.getElementById(t);
                            n && (n.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    r = (e, t, n, a) => {
                        const s = n + t,
                            u = a - t;
                        return e < s ? s : e > u ? u : e;
                    },
                    o = (e, t, n) => {
                        let s = '',
                            u = 8e3;
                        for (var r, o = a(n); !(r = o()).done; ) {
                            const e = r.value,
                                n = Math.abs(e.centerX - t);
                            n < u && ((s = e.id), (u = n));
                        }
                        return s;
                    },
                    i = (e, t) => {
                        const n = t.find((t) => t.id === e);
                        return n ? n.centerX : 0;
                    };
            },
            1820: (e, t, n) => {
                'use strict';
                let a, s;
                (n.d(t, { m: () => s }),
                    (function (e) {
                        ((e.Waiting = 'waiting'),
                            (e.Active = 'active'),
                            (e.InEffect = 'in'),
                            (e.Rollback = 'rollback'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit'));
                    })(s || (s = {})));
            },
            4301: (e, t, n) => {
                'use strict';
                n.d(t, { iN: () => u, j2: () => s, s$: () => r });
                var a = n(4231);
                const s = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    u = (e) => e === a.w.Battle || e === a.w.Prebattle,
                    r = (e) => u(e) || e === a.w.Respawn;
            },
            7626: (e, t, n) => {
                'use strict';
                n.d(t, { YR: () => i, UW: () => c, Tu: () => l });
                var a = n(7363),
                    s = n(2189),
                    u = n(7727),
                    r = n(3521),
                    o = n(1820);
                const i = (e) => `panel-${e}-section`,
                    l = (e, t) => {
                        const n = i(e),
                            a = t.filter((e) => e !== n);
                        return { selfId: n, blockOnGrabIds: [s.yy, ...a] };
                    },
                    c = ({ baseId: e, slotsLength: t, handleSwap: n, setIsExitBlocked: s, syncInitiator: i }) => {
                        const l = ((e, t, n) => {
                                const s = (0, a.useRef)([]),
                                    i = (0, a.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    l = (0, a.useState)({ activeDragId: '', potentialDropId: '' }),
                                    c = l[0],
                                    _ = l[1],
                                    d = (0, a.useCallback)((e) => {
                                        i.current.dropId ||
                                            i.current.prevPotentialDropId ||
                                            ((i.current.prevPotentialDropId = e),
                                            _({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    m = (0, a.useCallback)((e, t) => {
                                        if (s.current) {
                                            const n = (0, r.WL)(e, t, s.current);
                                            n !== i.current.prevPotentialDropId &&
                                                ((i.current.prevPotentialDropId = n),
                                                _({ activeDragId: e, potentialDropId: n }));
                                        }
                                    }, []),
                                    p = (0, a.useCallback)((e, t) => {
                                        if (s.current && t) {
                                            const n = i.current,
                                                a = (0, r.WL)(e, t, s.current);
                                            ((n.dropId = a),
                                                (n.dragId = e),
                                                (n.prevPotentialDropId = ''),
                                                _({ activeDragId: e, potentialDropId: '' }),
                                                a !== e && (0, u.G)('cons_equipment_swipe'));
                                        }
                                    }, []),
                                    b = (0, a.useCallback)(() => {
                                        const e = i.current,
                                            t = e.dragId,
                                            n = e.dropId,
                                            a = e.prevPotentialDropId;
                                        (t || n || a) &&
                                            ((i.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            _({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    g = (0, a.useCallback)(
                                        (e) => {
                                            const t = i.current.dropId;
                                            t && t !== e ? n(e, t) : b();
                                        },
                                        [b, n],
                                    ),
                                    E = (0, a.useCallback)((e, t) => {
                                        const n = s.current.find((t) => t.id === e);
                                        n && t && (n.centerX = t);
                                    }, []),
                                    h = (0, a.useCallback)(
                                        (e, t) => {
                                            const n = t.dragId,
                                                a = t.currentCenterX;
                                            switch (e) {
                                                case o.m.Ready:
                                                    return E(n, a);
                                                case o.m.DragStart:
                                                    return d(n);
                                                case o.m.Drag:
                                                    return m(n, a);
                                                case o.m.Drop:
                                                    return p(n, a);
                                                case o.m.DropExit:
                                                    return g(n);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [d, m, p, g, E],
                                    );
                                return (
                                    (0, a.useEffect)(() => {
                                        if (e !== s.current.length) {
                                            const n = new Array(e).fill(null);
                                            s.current = n.map((e, n) => ({ id: `${t}-${n}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: c,
                                        handleGrabberAction: h,
                                        getForceCenterX: (0, a.useCallback)((e) => {
                                            const t = i.current,
                                                n = t.dragId,
                                                a = t.dropId;
                                            return e === n
                                                ? (0, r.aR)(a, s.current)
                                                : e === a
                                                  ? (0, r.aR)(n, s.current)
                                                  : 0;
                                        }, []),
                                        resetDragResults: b,
                                    }
                                );
                            })(t, e, n),
                            c = l.dragState,
                            _ = l.handleGrabberAction,
                            d = l.getForceCenterX,
                            m = l.resetDragResults,
                            p = (0, a.useCallback)(
                                (e, t) => {
                                    if (s)
                                        switch (e) {
                                            case o.m.DragStart:
                                            case o.m.Drag:
                                                s(!0);
                                                break;
                                            default:
                                                s(!1);
                                        }
                                    _(e, t);
                                },
                                [_, s],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                s && s(!1);
                            }, [s]),
                            (0, a.useEffect)(() => m, [i, m]),
                            { handleGrabberAction: p, dragState: c, getForceCenterX: d }
                        );
                    };
            },
            4231: (e, t, n) => {
                'use strict';
                let a;
                (n.d(t, { w: () => a }),
                    (function (e) {
                        ((e.Hangar = 'hangar'),
                            (e.Setup = 'setup'),
                            (e.Compare = 'compare'),
                            (e.Battle = 'battle'),
                            (e.Respawn = 'respawn'),
                            (e.Prebattle = 'prebattle'));
                    })(a || (a = {})));
            },
            3220: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => c, t: () => _ });
                var a = n(3215),
                    s = n(9480),
                    u = n(3946),
                    r = n(4598),
                    o = n(4301),
                    i = n(7626);
                const l = (0, a.q3)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                n = (0, u.Om)(() => t.sectionGroups.get().length),
                                a = (0, u.Om)(
                                    (e) => {
                                        const n = s.U2(t.sectionGroups.get(), e);
                                        if (!n) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, n, {
                                            sections: s.UI(n.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: s.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, n.setupSelector, {
                                                states: s.UI(n.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: r.jv },
                                ),
                                l = (0, u.Om)(() => s.u4(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                c = (0, u.Om)((e) => a(e).sections.length),
                                _ = (0, u.Om)(
                                    (e, t) => {
                                        const n = a(e),
                                            u = s.U2(n.sections, t);
                                        if (!u) throw Error(`No ammunition section found with index: ${t}`);
                                        return u;
                                    },
                                    { equals: r.jv },
                                ),
                                d = (0, u.Om)((e, t) => _(e, t).slots.length),
                                m = (0, u.Om)((e, t) => {
                                    const n = _(e, t).slots;
                                    return s.hX(n, (e) => Boolean(e) && !(0, o.j2)(e)).length;
                                }),
                                p = (0, u.Om)((e, t) => {
                                    const n = _(e, t).slots;
                                    return s.G(n, (e) => e.intCD > 0);
                                }),
                                b = (0, u.Om)(
                                    (e, t, n) => {
                                        const a = _(e, t),
                                            u = s.U2(a.slots, n);
                                        if (!u) throw Error(`No ammunition slot found with index: ${n}`);
                                        return u;
                                    },
                                    { equals: r.jv },
                                ),
                                g = (0, u.Om)(
                                    (e) => {
                                        const t = a(e).sections;
                                        return s.v(t, (e) => (0, i.YR)(e.type));
                                    },
                                    { equals: r.jv },
                                ),
                                E = (0, u.Om)(
                                    (e, t, n) => {
                                        const a = b(e, t, n);
                                        if (!a) throw Error(`No ammunition slot found with index: ${n}`);
                                        if (!a.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, a.specializations, {
                                            specializations: s.UI(a.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: r.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: n, group: a },
                                    sections: { allSectionsLength: l, length: c, section: _, IDs: g },
                                    slots: { length: d, filteredLength: m, slot: b, existFilled: p },
                                    specializations: E,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    c = l[0],
                    _ = l[1];
            },
            8082: (e, t, n) => {
                'use strict';
                var a = {};
                (n.r(a),
                    n.d(a, {
                        Area: () => lr,
                        Bar: () => rr,
                        DefaultScroll: () => ir,
                        Direction: () => Gu,
                        defaultSettings: () => Uu,
                        useHorizontalScrollApi: () => Vu,
                    }));
                var s = {};
                (n.r(s), n.d(s, { Area: () => Br, Bar: () => Fr, Default: () => yr, useVerticalScrollApi: () => cr }));
                var u = n(3138),
                    r = n(7739),
                    o = n(7363),
                    i = n.n(o),
                    l = n(6483),
                    c = n.n(l),
                    _ = n(926),
                    d = n.n(_),
                    m = n(1043);
                let p, b, g;
                (!(function (e) {
                    ((e[(e.ExtraSmall = m.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = m.j.small.width)] = 'Small'),
                        (e[(e.Medium = m.j.medium.width)] = 'Medium'),
                        (e[(e.Large = m.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = m.j.extraLarge.width)] = 'ExtraLarge'));
                })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = m.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = m.j.small.width)] = 'Small'),
                            (e[(e.Medium = m.j.medium.width)] = 'Medium'),
                            (e[(e.Large = m.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = m.j.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = m.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = m.j.small.height)] = 'Small'),
                            (e[(e.Medium = m.j.medium.height)] = 'Medium'),
                            (e[(e.Large = m.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = m.j.extraLarge.height)] = 'ExtraLarge'));
                    })(g || (g = {})));
                const E = () => {
                        const e = (0, o.useContext)(r.YN),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e),
                            u = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return g.ExtraLarge;
                                    case e.largeHeight:
                                        return g.Large;
                                    case e.mediumHeight:
                                        return g.Medium;
                                    case e.smallHeight:
                                        return g.Small;
                                    case e.extraSmallHeight:
                                        return g.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), g.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: s, mediaHeight: u, remScreenWidth: t, remScreenHeight: n };
                    },
                    h = ['children', 'className'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const f = {
                        [b.ExtraSmall]: '',
                        [b.Small]: d().SMALL_WIDTH,
                        [b.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [b.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    C = {
                        [g.ExtraSmall]: '',
                        [g.Small]: d().SMALL_HEIGHT,
                        [g.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [g.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [g.ExtraLarge]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [p.ExtraSmall]: '',
                        [p.Small]: d().SMALL,
                        [p.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [p.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [p.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    D = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                return s;
                            })(e, h);
                        const s = E(),
                            u = s.mediaWidth,
                            r = s.mediaHeight,
                            o = s.mediaSize;
                        return i().createElement('div', v({ className: c()(n, f[u], C[r], A[o]) }, a), t);
                    },
                    F = ['children'];
                const S = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, F);
                    return i().createElement(r.ZN, null, i().createElement(D, n, t));
                };
                var y = n(1533),
                    B = n.n(y),
                    w = n(1856),
                    k = n(3403),
                    x = n(3815),
                    T = n(2039);
                const I = (0, o.createContext)(null);
                var N = n(5262),
                    O = n(3649);
                function L(e, t, n) {
                    const a = (0, o.useContext)(r.YN);
                    let s = Object.entries(a).filter(([e, t]) => !0 === t && e in N.u);
                    return (
                        n && (s = s.filter((e) => n.includes(e[0]))),
                        e.reduce((e, n) => {
                            const a = s.map((e) =>
                                c()(t[((e, t) => e + '__' + t)(n, e[0])], t[((e, t) => e + (0, O.e)(t))(n, e[0])]),
                            );
                            return ((e[n] = c()(t[n], ...a)), e);
                        }, {})
                    );
                }
                const M = (e, t = []) => {
                        const n = (0, o.useRef)(),
                            a = (0, o.useCallback)((...t) => {
                                (n.current && n.current(), (n.current = e(...t)));
                            }, t);
                        return (
                            (0, o.useEffect)(
                                () => () => {
                                    n.current && n.current();
                                },
                                [a],
                            ),
                            a
                        );
                    },
                    P = (e, t, { listenResize: n = !0, intervalMs: a = 50, minStableTicks: s = 3 }, u) => {
                        const r = (0, o.useRef)(e()),
                            i = (0, o.useState)(0),
                            l = i[0],
                            c = i[1];
                        ((0, o.useEffect)(() => {
                            let n = 0;
                            const u = setInterval(() => {
                                const a = e();
                                a !== r.current
                                    ? ((r.current = a), (n = 0), t(a))
                                    : (n++, n >= s && (t(a), clearInterval(u)));
                            }, a);
                            return () => {
                                clearInterval(u);
                            };
                        }, [e, t, l, a, s, ...u]),
                            (0, o.useEffect)(() => {
                                const e = () => {
                                    c((e) => e + 1);
                                };
                                if (n)
                                    return (
                                        engine.on('clientResized', e),
                                        () => {
                                            engine.off('clientResized', e);
                                        }
                                    );
                            }, [n]));
                    };
                var $ = n(3220);
                const z = {
                        base: 'AmmoPanel_base_8d',
                        base__locked: 'AmmoPanel_base__locked_f8',
                        base__disabled: 'AmmoPanel_base__disabled_13',
                        base__hidden: 'AmmoPanel_base__hidden_14',
                        border: 'AmmoPanel_border_e6',
                        border__hidden: 'AmmoPanel_border__hidden_b1',
                        roleSkillSlot: 'AmmoPanel_roleSkillSlot_20',
                        roleSkillSlot__battle: 'AmmoPanel_roleSkillSlot__battle_b0',
                        roleSkillSlot__small: 'AmmoPanel_roleSkillSlot__small_a1',
                        roleSkillSlot__extraSmall: 'AmmoPanel_roleSkillSlot__extraSmall_a9',
                        roleSkillSlot__prebattle: 'AmmoPanel_roleSkillSlot__prebattle_b5',
                    },
                    H = 'Border_base_f9',
                    j = 'Border_border_83',
                    W = 'Border_wrapper_17',
                    G = 'Border_active_e8',
                    U = (0, o.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: n }) => {
                        const a = (0, o.useRef)(null),
                            s = (0, o.useRef)(!1);
                        (0, o.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const u = (0, o.useCallback)(() => {
                            (s.current && n(), (s.current = !1));
                        }, [n]);
                        (0, o.useEffect)(() => {
                            const e = a.current;
                            return (
                                e && e.addEventListener('transitionend', u),
                                () => {
                                    e && e.removeEventListener('transitionend', u);
                                }
                            );
                        }, [u]);
                        const r = (0, o.useMemo)(() => ({ left: e }), [e]),
                            l = (0, o.useMemo)(() => ({ width: t }), [t]);
                        return i().createElement(
                            'div',
                            { className: H },
                            i().createElement(
                                'div',
                                { ref: a, className: j, style: r },
                                i().createElement(
                                    'div',
                                    { className: W },
                                    i().createElement('div', { className: G, style: l }),
                                ),
                            ),
                        );
                    }),
                    Z = (e, t) => {
                        const n = [];
                        for (let a = 0; a < e; a++) n.push(t(a));
                        return n;
                    };
                var V = n(6373),
                    q = n(9344),
                    X = n(2558),
                    K = n(8934);
                const Y = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    J = 'up',
                    Q = 'down',
                    ee = ({ children: e, index: t, setSetupSwitching: n, disabled: a = !1 }) => {
                        const s = (0, o.useRef)(1 - t),
                            u = (0, o.useMemo)(() => {
                                const e = ((n = t), (u = s.current), n === u ? '' : n > u ? Q : J);
                                var n, u;
                                const r = e && (0, O.e)(e);
                                return a ? {} : { enter: Y[`base__enter${r}`], exit: Y[`base__exit${r}`] };
                            }, [t, a]);
                        return (
                            (s.current = t),
                            i().createElement(
                                X.Z,
                                { className: Y.base },
                                i().createElement(
                                    K.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: u,
                                        onEnter: () => n(!0),
                                        onExited: () => n(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                var te = n(4301),
                    ne = n(7383);
                const ae = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    se = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const re = (e) => {
                    let t = e.value,
                        n = e.isEmpty,
                        a = e.className,
                        s = e.size,
                        u = void 0 === s ? 'normal' : s,
                        r = e.fadeInAnimation,
                        o = void 0 !== r && r,
                        l = e.hide,
                        _ = void 0 !== l && l,
                        d = e.maximumNumber,
                        m = void 0 === d ? 99 : d,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, se);
                    const b = n ? null : t,
                        g = 'string' == typeof b;
                    if ((b && !g && b < 0) || 0 === b) return null;
                    const E = b && !g && b > m,
                        h = c()(
                            ae.base,
                            ae[`base__${u}`],
                            o && ae.base__animated,
                            _ && ae.base__hidden,
                            !b && ae.base__pattern,
                            n && ae.base__empty,
                            a,
                        );
                    return i().createElement(
                        'div',
                        ue({ className: h }, p),
                        i().createElement('div', { className: ae.bg }),
                        i().createElement('div', { className: ae.pattern }),
                        i().createElement(
                            'div',
                            { className: c()(ae.value, g && ae.value__text) },
                            E ? m : b,
                            E && i().createElement('span', { className: ae.plus }, '+'),
                        ),
                    );
                };
                var oe = n(4231);
                const ie = 'TopLabel_base_7f',
                    le = 'TopLabel_base__ready_00',
                    ce = 'TopLabel_text_d0',
                    _e = 'TopLabel_text__hangar_36',
                    de = 'TopLabel_text__shown_25',
                    me = 'TopLabel_text__hidden_79',
                    pe = 'TopLabel_text__truncated_29',
                    be = (0, o.memo)(({ panelType: e, text: t, parentRef: n, isTruncated: a = !1, show: s = !1 }) => {
                        const u = (0, o.useRef)(!1),
                            r = (0, o.useState)(!1),
                            l = r[0],
                            _ = r[1];
                        (0, o.useEffect)(() => {
                            n || (s && !u.current && (u.current = !0), _(s));
                        }, [s, n]);
                        const d = (0, o.useCallback)(() => {
                                ((u.current = !0), _(!0));
                            }, []),
                            m = (0, o.useCallback)(() => {
                                _(!1);
                            }, []);
                        return (
                            (0, o.useEffect)(() => {
                                const e = n && n.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', d),
                                        e.addEventListener('mouseleave', m),
                                        () => {
                                            (e.removeEventListener('mouseenter', d),
                                                e.removeEventListener('mouseleave', m));
                                        }
                                    );
                            }, [n, d, m]),
                            i().createElement(
                                'div',
                                { className: c()(ie, u.current && le) },
                                i().createElement(
                                    'div',
                                    { className: c()(ce, e !== oe.w.Setup && _e, a && pe, s && l ? de : me) },
                                    t,
                                ),
                            )
                        );
                    }),
                    ge = 'notUsableSection';
                var Ee = n(7626);
                const he = 'Section_base_8a',
                    ve = 'Section_label_73',
                    fe = 'Section_counter_8a';
                var Ce = n(7727);
                const Ae = 'SlotDivider_base_60',
                    De = () => i().createElement('div', { className: Ae });
                var Fe = n(3267),
                    Se = n(8253),
                    ye = n(3141);
                const Be = (e) => {
                    const t = (0, o.useRef)(-1),
                        n = (0, o.useCallback)(
                            (n) => {
                                if (-1 === t.current) {
                                    const a = e(n);
                                    a &&
                                        (t.current = window.setTimeout(() => {
                                            t.current = -1;
                                        }, a));
                                }
                            },
                            [e],
                        );
                    return ((0, o.useEffect)(() => () => clearTimeout(t.current), []), n);
                };
                var we = n(8526),
                    ke = n(5521);
                const xe = 'Grabber_base_cf',
                    Te = 'Grabber_base__enabled_b0',
                    Ie = 'Grabber_base__waitingUpdate_1d',
                    Ne = 'Grabber_base__updating_f1',
                    Re = 'Grabber_base__active_71',
                    Oe = 'Grabber_base__exit_1f',
                    Le = 'Grabber_base__showAnimation_d9';
                var Me = n(3521),
                    Pe = n(1820);
                const $e = ({
                    children: e,
                    id: t,
                    containerRef: n,
                    isEnabled: a = !0,
                    onClick: s,
                    forceCenterX: r,
                    isUpdateAvailable: l,
                    handleAction: _,
                    blockOnGrabIds: d = [],
                }) => {
                    const m = E().mediaSize,
                        p = (0, o.useRef)({
                            actualX: 0,
                            clickCenterOffset: 0,
                            dropCenterX: 0,
                            grabActivationPassed: !1,
                            isDragActive: !1,
                            id: t,
                        }),
                        b = (0, o.useRef)({
                            isValid: !1,
                            startX: 0,
                            startCenterX: 0,
                            minXRestriction: 0,
                            maxXRestriction: 8e3,
                        }),
                        g = (0, o.useRef)(null),
                        h = (0, o.useState)(!1),
                        v = h[0],
                        f = h[1],
                        C = (0, o.useState)(0),
                        A = C[0],
                        D = C[1],
                        F = (function () {
                            const e = (0, o.useRef)(0);
                            return (
                                (0, T.k)(() => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, o.useMemo)(
                                    () => ({
                                        run: (t) => {
                                            (window.cancelAnimationFrame(e.current),
                                                (e.current = window.requestAnimationFrame(() => {
                                                    e.current = window.requestAnimationFrame(() => {
                                                        ((e.current = 0), t());
                                                    });
                                                })));
                                        },
                                        clear: () => {
                                            (window.cancelAnimationFrame(e.current), (e.current = 0));
                                        },
                                        get isRunning() {
                                            return 0 !== e.current;
                                        },
                                    }),
                                    [],
                                )
                            );
                        })(),
                        S = 0 !== r && a,
                        y = r ? r - b.current.startCenterX : A;
                    (0, o.useEffect)(() => {
                        if (((b.current.isValid = !1), t))
                            return (0, w.v)(() => {
                                const e = g.current,
                                    a = n.current;
                                if (a && e) {
                                    const n = e.getBoundingClientRect(),
                                        s = a.getBoundingClientRect(),
                                        u = n.left + 0.5 * n.width;
                                    ((b.current = {
                                        isValid: !0,
                                        minXRestriction: s.left,
                                        maxXRestriction: s.left + s.width,
                                        startX: n.left,
                                        startCenterX: u,
                                    }),
                                        _(Pe.m.Ready, { dragId: t, currentCenterX: u }));
                                }
                            });
                    }, [m]);
                    const B = (0, o.useCallback)(
                            (e) => {
                                ((p.current.isDragActive = e),
                                    f(e),
                                    p.current.grabActivationPassed && !e && (0, Me.jZ)(!1, d));
                            },
                            [d],
                        ),
                        k = (0, o.useCallback)(() => {
                            (_(Pe.m.DragStart, { dragId: p.current.id }),
                                (p.current.grabActivationPassed = !0),
                                (0, Me.jZ)(!0, d));
                        }, [_, d]),
                        I = (0, o.useCallback)((e) => {
                            const t = p.current,
                                n = b.current,
                                a = n.startX,
                                s = n.startCenterX,
                                u = n.minXRestriction,
                                r = n.maxXRestriction,
                                o = s - a,
                                i = e - t.clickCenterOffset;
                            t.dropCenterX = (0, Me.yG)(i, o, u, r);
                        }, []),
                        N = (0, o.useCallback)(
                            (e) => {
                                const t = p.current,
                                    n = b.current;
                                0 === e.button &&
                                    !t.isDragActive &&
                                    n.isValid &&
                                    a &&
                                    !l &&
                                    g.current &&
                                    ((t.actualX = e.clientX),
                                    (t.clickCenterOffset = t.actualX - n.startCenterX),
                                    B(!0));
                            },
                            [a, l, B],
                        ),
                        R = (0, o.useCallback)(() => {
                            !s || (a && b.current.isValid) || s();
                        }, [a, s]);
                    ((0, we.gd)(
                        v ? ke.n.ESCAPE : ke.n.NONE,
                        (0, x.z)(() => B(!1)),
                    ),
                        (0, o.useEffect)(() => {
                            a && r && D(0);
                        }, [r, a]));
                    const O = !v && p.current.grabActivationPassed;
                    ((0, o.useLayoutEffect)(() => {
                        p.current.id = t;
                    }, [t]),
                        (0, o.useEffect)(() => {
                            if (O) {
                                const e = p.current;
                                (_(Pe.m.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                    r === e.dropCenterX &&
                                        ((e.grabActivationPassed = !1),
                                        F.run(() => _(Pe.m.DropExit, { dragId: e.id }))));
                            }
                        }, [O, F, r, _]),
                        (0, o.useEffect)(() => {
                            if (a && v && p.current.id) {
                                const e = u.O.client.events.mouse.up(([e, t]) => {
                                        if ('outside' === t) return B(!1);
                                        const n = p.current,
                                            a = e.clientX;
                                        (a === n.actualX && 0 === e.button && !p.current.grabActivationPassed
                                            ? s && s()
                                            : p.current.grabActivationPassed && I(a),
                                            p.current.isDragActive && B(!1));
                                    }),
                                    t = u.O.client.events.mouse.move(([e]) => {
                                        const t = p.current;
                                        if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                        const n = e.clientX,
                                            a = t.grabActivationPassed;
                                        (!a && k(),
                                            n !== t.actualX &&
                                                ((t.actualX = n),
                                                I(n),
                                                a && _(Pe.m.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                D(t.dropCenterX - b.current.startCenterX)));
                                    });
                                return () => {
                                    (t(), e());
                                };
                            }
                        }, [k, _, v, a, s, B, I]));
                    const L = a ? c()(xe, Te, v && Re, O && Oe, S && Ie, r && Ne) : c()(xe, r && Le);
                    return i().createElement(
                        'div',
                        {
                            id: t,
                            ref: g,
                            onClick: R,
                            onMouseDown: N,
                            onTransitionEnd: (e) => {
                                const t = p.current;
                                e.target === g.current &&
                                    t.grabActivationPassed &&
                                    ((t.grabActivationPassed = !1), F.run(() => _(Pe.m.DropExit, { dragId: t.id })));
                            },
                            className: L,
                            style: { left: y },
                        },
                        e,
                    );
                };
                let ze;
                !(function (e) {
                    ((e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next'));
                })(ze || (ze = {}));
                const He = 'KeyLabel_base_ec',
                    je = 'KeyLabel_base__current_c2',
                    We = 'KeyLabel_base__next_fa',
                    Ge = ({ text: e, show: t, panelType: n, shellState: a, className: s }) => {
                        if (!e) return null;
                        const u = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return i().createElement(
                            'div',
                            { className: c()(He, a === ze.Current && je, a === ze.Next && We, s) },
                            i().createElement(be, { isTruncated: !0, text: u, show: t, panelType: n }),
                        );
                    };
                var Ue = n(7078);
                const Ze = ({ children: e, slotType: t, slotId: n, panelType: a, isEnabled: s = !0 }) => {
                        const u = (0, o.useMemo)(() => ({ slotType: t, slotId: n }), [t, n]);
                        return i().createElement(
                            Ue.t,
                            {
                                isEnabled: s,
                                args: u,
                                decoratorId: [oe.w.Battle, oe.w.Prebattle].includes(a)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            i().createElement('div', null, e),
                        );
                    },
                    Ve = 'Close_base_f3',
                    qe = 'Close_base__invisible_0e',
                    Xe = 'Close_base__shown_a2',
                    Ke = 'Close_base__hover_6d',
                    Ye = 'Close_base__down_2b',
                    Je = (0, o.memo)(
                        ({ id: e, show: t = !0, onClick: n, soundHover: a = 'highlight', soundClick: s = 'play' }) => {
                            const u = (0, o.useState)(!1),
                                r = u[0],
                                l = u[1],
                                _ = (0, o.useState)(!1),
                                d = _[0],
                                m = _[1],
                                p = (0, o.useState)(!1),
                                b = p[0],
                                g = p[1],
                                E = (0, o.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                h = (0, o.useCallback)(() => {
                                    (m(!0), a && (0, Ce.G)(a));
                                }, [a]),
                                v = (0, o.useCallback)(() => {
                                    (l(!1), m(!1));
                                }, []),
                                f = (0, o.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), s && (0, Ce.G)(s));
                                    },
                                    [t, s],
                                ),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && n && n();
                                    },
                                    [t, n],
                                );
                            (0, o.useEffect)(
                                () =>
                                    (0, w.v)(() => {
                                        g(!0);
                                    }),
                                [],
                            );
                            const A = c()(Ve, !b && qe, b && t && Xe, r && Ye, d && Ke);
                            return i().createElement('div', {
                                id: e,
                                onMouseOver: h,
                                onMouseLeave: v,
                                onMouseDown: f,
                                onMouseUp: C,
                                className: A,
                                onClick: E,
                            });
                        },
                    ),
                    Qe = 'Slot_base_3a',
                    et = 'Slot_label_e6',
                    tt = 'Slot_close_bb',
                    nt = 'Slot_disabled_5d',
                    at = 'Slot_shadow_a7',
                    st = 'Slot_category_2c';
                var ut = n(1641),
                    rt = n(9916);
                const ot = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: s,
                        isEnabled: u = !0,
                        onMouseDown: r,
                    }) => {
                        const i = (0, o.useCallback)(() => {
                                ((0, rt.c9)(rt.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    Ce.$.playYes());
                            }, [s, t, n, a]),
                            l = (0, o.useCallback)(() => {
                                (0, rt.c9)(rt.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, o.useCallback)(
                                (e) => {
                                    (r && r(e), ((e) => e.button === ut.t.RIGHT)(e) && i());
                                },
                                [r, i],
                            );
                        return (
                            (0, o.useEffect)(() => {
                                !1 === u && l();
                            }, [u, l]),
                            u ? (0, o.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    it = ['children'];
                function lt() {
                    return (
                        (lt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        lt.apply(this, arguments)
                    );
                }
                const ct = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, it);
                    return i().createElement(
                        ot,
                        lt({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var _t = n(1396),
                    dt = n(5918);
                const mt = (0, k.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: n,
                            isMountedMoreThanOne: a,
                            isInstalled: s,
                            isDisabled: u,
                            imageSource: r,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: m,
                            children: p,
                        }) => {
                            const b = (0, $.t)().model.root.get().vehicleCD,
                                g = (0, o.useState)(!0),
                                E = g[0],
                                h = g[1],
                                v = (0, _t.K)();
                            (0, o.useEffect)(() => {
                                (h(!1), v.run(() => h(!0), 100));
                            }, [b]);
                            const f = (0, o.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: n,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: a,
                                }),
                                [e, _, t, n, s, a],
                            );
                            return E
                                ? i().createElement(
                                      dt.y,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: r,
                                          itemInstalledSetupIndex: n,
                                      },
                                      i().createElement(
                                          ct,
                                          { isEnabled: !(m || d || u || l), args: f },
                                          i().createElement('div', null, p),
                                      ),
                                  )
                                : i().createElement('div', null, p);
                        },
                    ),
                    pt = (0, k.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: n,
                            isSelected: a,
                            isSetupSwitching: s,
                            isSectionSelected: u,
                            onActiveSlotChanged: r,
                            onSlotSelected: l,
                            onActiveSlotRefChanged: c,
                            onSlotClear: _,
                            panelType: d,
                            isDisabled: m = !1,
                            isBorderActive: p,
                            isIncompatible: b = !1,
                            grabberId: g,
                            containerRef: E,
                            activeDragId: h,
                            handleGrabberAction: v,
                            forceLeftUpdate: f,
                            potentialDropId: C,
                            blockOnGrabIds: A,
                            contextMenuDisabled: D,
                            groupIndex: F,
                            sectionIndex: S,
                        }) => {
                            const y = (0, $.t)().model.computes.slots.slot(F, S, t),
                                B = y.imageSource,
                                k = y.isInstalled,
                                x = y.itemInstalledSetupIdx,
                                T = y.isMountedMoreThanOne,
                                I = y.overlayType,
                                N = y.keyName,
                                R = y.categoryImgSource,
                                O = y.withAttention,
                                L = y.id,
                                M = y.intCD,
                                P = d === oe.w.Setup,
                                z = !(0, te.s$)(d),
                                H = !(0, te.iN)(d),
                                j = d === oe.w.Compare,
                                W = P && u && z,
                                G = (0, o.useRef)(!1),
                                U = (0, o.useRef)(null),
                                Z = -1 === M;
                            ((0, o.useEffect)(() => {
                                if (!G.current && u && a)
                                    return (0, w.v)(() => {
                                        (r && r(U, e, L), (G.current = !0));
                                    });
                                G.current = !0;
                            }, [L, u, a, r, e]),
                                (0, o.useEffect)(() => {
                                    a && c(U);
                                }, [a, c]));
                            const V = (0, o.useCallback)(() => (!a && z && !s && l(e, L), 500), [L, z, a, s, l, e]),
                                q = Be(V),
                                X = (0, o.useCallback)(() => {
                                    m || q('');
                                }, [q, m]),
                                K = (0, o.useCallback)(() => {
                                    H && !a && !h && !m && Ce.$.playHighlight();
                                }, [a, h, m, H]);
                            (0, o.useEffect)(() => {
                                C && Ce.$.playHighlight();
                            }, [C]);
                            const Y = (0, o.useCallback)(() => {
                                    null == _ || _(L, e);
                                }, [L, _, e]),
                                J = P && !k,
                                Q = Boolean(g && C === g),
                                ee = g && (W || j),
                                ne = `${e}-slot-${L}`,
                                ae = R && R.length > 0,
                                se = ae ? { backgroundImage: `url(${R})` } : {},
                                ue = {
                                    id: g,
                                    containerRef: E,
                                    isEnabled: !Z,
                                    onClick: X,
                                    isUpdateAvailable: Boolean(h),
                                    handleAction: v,
                                    forceCenterX: f,
                                    blockOnGrabIds: A,
                                },
                                re = {
                                    isEmpty: Z,
                                    intCD: M,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: B,
                                    isDisabled: m,
                                    isInstalled: k,
                                    id: L,
                                    itemInstalledSetupIdx: x,
                                    isMountedMoreThanOne: T,
                                    contextMenuDisabled: D,
                                    isSetupSwitching: s,
                                };
                            return i().createElement(
                                'div',
                                { className: Qe, onMouseEnter: K, id: ne },
                                (u || j) &&
                                    !k &&
                                    i().createElement(
                                        'div',
                                        { className: tt },
                                        i().createElement(Je, { id: `close-${ne}`, show: !h, onClick: Y }),
                                    ),
                                i().createElement(
                                    Ze,
                                    { slotType: e, slotId: L, isEnabled: !h, panelType: d },
                                    i().createElement(
                                        'div',
                                        { ref: U },
                                        i().createElement(
                                            Se.W,
                                            {
                                                activeDragId: h,
                                                slotType: e,
                                                isSelected: a,
                                                isBorderActive: Boolean(p),
                                                panelType: d,
                                                isDisabled: m,
                                                isPotentialDrop: Q,
                                                onClick: ee ? void 0 : X,
                                            },
                                            z &&
                                                i().createElement(
                                                    'div',
                                                    { className: et },
                                                    i().createElement(Ge, { text: N, show: Boolean(u), panelType: d }),
                                                ),
                                            i().createElement(
                                                Fe.J,
                                                { when: Boolean(ee), wrapper: $e, withProps: ue },
                                                i().createElement(
                                                    Fe.J,
                                                    { when: z, wrapper: mt, withProps: re },
                                                    i().createElement(ye.c, {
                                                        imageSource: B,
                                                        isIncompatible: b,
                                                        overlayType: I,
                                                        level: n,
                                                        isTemporary: J,
                                                        withAttention: O,
                                                    }),
                                                ),
                                            ),
                                            ae &&
                                                i().createElement(
                                                    i().Fragment,
                                                    null,
                                                    i().createElement('span', { className: at }),
                                                    i().createElement('span', { className: st, style: se }),
                                                ),
                                            m && i().createElement('div', { className: nt }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    bt = 'BattleAbilitySlot_base_74',
                    gt = 'BattleAbilitySlot_rank_01',
                    Et = ['rank'];
                const ht = (e) => {
                    let t = e.rank,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, Et);
                    return i().createElement(
                        'div',
                        { className: bt },
                        i().createElement(pt, n),
                        t && i().createElement('div', { className: gt, style: { backgroundImage: `url(${t})` } }),
                    );
                };
                var vt = n(4814);
                const ft = 'OptDeviceSlot_base_14',
                    Ct = 'OptDeviceSlot_specializations_c3',
                    At = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function Dt() {
                    return (
                        (Dt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Dt.apply(this, arguments)
                    );
                }
                const Ft = (0, k.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.activeSpecsMask,
                            u = e.isChangeSetupIndex,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                return s;
                            })(e, At);
                        const o = (0, $.t)(),
                            l = o.controls,
                            _ = o.model.computes.specializations(t, n, a),
                            d = _.specializations.length,
                            m = r.panelType === oe.w.Setup || r.panelType === oe.w.Compare,
                            p = !(0, te.s$)(r.panelType),
                            b = _.isDynamic;
                        return i().createElement(
                            'div',
                            { className: c()(ft, d && !b && !u && 'specializationsSlot') },
                            p &&
                                i().createElement(
                                    'div',
                                    { className: Ct },
                                    i().createElement(vt.G, {
                                        specializations: _.specializations,
                                        isDynamic: b,
                                        activeSpecsMask: s,
                                        isSpecializationActive: m,
                                        onSpecializationClick: (e) => {
                                            l.specializationSelect({ slotId: r.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            i().createElement(pt, Dt({}, r, { groupIndex: t, sectionIndex: n, slotIndex: a })),
                        );
                    }),
                    St = {
                        base: 'ToggleCamouflageSlot_base_17',
                        base__grabbing: 'ToggleCamouflageSlot_base__grabbing_79',
                        base__hangar: 'ToggleCamouflageSlot_base__hangar_e7',
                        base__setup: 'ToggleCamouflageSlot_base__setup_44',
                        base__compare: 'ToggleCamouflageSlot_base__compare_0d',
                        base__selected: 'ToggleCamouflageSlot_base__selected_0c',
                        base__dragIn: 'ToggleCamouflageSlot_base__dragIn_68',
                        base__dragInActive: 'ToggleCamouflageSlot_base__dragInActive_b1',
                        base__toggle: 'ToggleCamouflageSlot_base__toggle_fc',
                        base__disabled: 'ToggleCamouflageSlot_base__disabled_1e',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    yt = ({ id: e, isSelected: t, isLocked: n, onSlotSelected: a, panelType: s }) => {
                        const u = ne.yZ,
                            r = (0, o.useCallback)(() => {
                                a(u, e);
                            }, [e, a, u]),
                            l = c()(St.base, St[`base__${s}`], n && St.base__disabled, t && St.base__toggle),
                            _ = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            ),
                            m = `toggle-camouflage-slot-${e}`;
                        return i().createElement(
                            Ze,
                            { slotType: u, slotId: e, panelType: s },
                            i().createElement(
                                'div',
                                { id: m, className: l, onClick: r, onMouseEnter: Ce.$.playHighlight },
                                t && i().createElement('div', { className: St.glow }),
                                i().createElement('div', { className: St.image, style: _ }),
                                i().createElement('div', { className: St.toggle, style: d }),
                            ),
                        );
                    },
                    Bt = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function wt() {
                    return (
                        (wt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        wt.apply(this, arguments)
                    );
                }
                const kt = (0, k.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.sectionType,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                return s;
                            })(e, Bt);
                        const r = (0, $.t)().model,
                            o = r.computes.slots.slot(t, n, a),
                            l = r.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === s ? _ : -1) === o.id;
                        switch (s) {
                            case ne.zn: {
                                const e = o;
                                return i().createElement(
                                    Ft,
                                    wt({}, e, u, { groupIndex: t, sectionIndex: n, slotIndex: a, isSelected: d }),
                                );
                            }
                            case ne.yZ: {
                                const e = o;
                                return i().createElement(
                                    yt,
                                    wt({}, u, e, { groupIndex: t, sectionIndex: n, slotIndex: a }),
                                );
                            }
                            case ne.YN: {
                                const e = o;
                                return i().createElement(
                                    ht,
                                    wt({}, u, e, { groupIndex: t, sectionIndex: n, slotIndex: a, isSelected: d }),
                                );
                            }
                            default:
                                return i().createElement(
                                    pt,
                                    wt({}, u, { isSelected: d, groupIndex: t, sectionIndex: n, slotIndex: a }),
                                );
                        }
                    }),
                    xt = 'Slots_base_27',
                    Tt = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function It() {
                    return (
                        (It =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        It.apply(this, arguments)
                    );
                }
                const Nt = (0, k.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.sectionType,
                            s = e.onActiveSlotChanged,
                            u = e.isDisabled,
                            r = e.blockOnGrabIds,
                            l = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                return s;
                            })(e, Tt);
                        const m = (0, o.useRef)(null),
                            p = (0, o.useRef)(null),
                            b = (0, $.t)(),
                            g = b.model,
                            E = b.controls,
                            h = g.computes.slots.length(t, n),
                            v = g.ammunitionPanel.get(),
                            f = v.selectedSection,
                            C = v.selectedSlot,
                            A = v.syncInitiator,
                            D = (0, o.useCallback)(
                                (e, t) => {
                                    E.dragDropSwap({
                                        sectionType: a,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [E, a],
                            ),
                            F = f === a,
                            S = a === ne.YN,
                            y = F ? C : -1,
                            B = `${a}-${h}slots`,
                            w = (0, Ee.UW)({
                                baseId: B,
                                slotsLength: h,
                                handleSwap: D,
                                setIsExitBlocked: _,
                                syncInitiator: A,
                            }),
                            k = w.handleGrabberAction,
                            x = w.dragState,
                            T = w.getForceCenterX;
                        (0, o.useEffect)(() => {
                            F && -1 !== y && m.current && s(m, f, y);
                        }, [s, F, f, y]);
                        const I = (e, t) => {
                                if ((u || Ce.$.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                E.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            N = (e) => {
                                m.current = e ? e.current : null;
                            },
                            R = (e, t) => {
                                E.slotClear({ slotId: e, sectionType: t });
                            };
                        return i().createElement(
                            'div',
                            { id: B, ref: p, className: c()(xt, a) },
                            Z(h, (e) => {
                                const c = !S && h > 1 ? `${B}-${e}` : '';
                                return i().createElement(
                                    o.Fragment,
                                    { key: `slot ${t}-${n}-${e}` },
                                    e > 0 && i().createElement(De, null),
                                    i().createElement(
                                        kt,
                                        It(
                                            {
                                                groupIndex: t,
                                                sectionIndex: n,
                                                slotIndex: e,
                                                sectionType: a,
                                                isSectionSelected: F,
                                                isDisabled: u,
                                                contextMenuDisabled: S,
                                                slotType: a,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: I,
                                                onActiveSlotRefChanged: N,
                                                onSlotClear: R,
                                                grabberId: c,
                                                containerRef: p,
                                                forceLeftUpdate: T(c),
                                                activeDragId: x.activeDragId,
                                                handleGrabberAction: k,
                                                potentialDropId: x.potentialDropId,
                                                blockOnGrabIds: r,
                                                isSetupSwitching: l,
                                                isChangeSetupIndex: l,
                                            },
                                            d,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    Rt = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function Ot() {
                    return (
                        (Ot =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ot.apply(this, arguments)
                    );
                }
                const Lt = (0, k.Pi)((e) => {
                    let t = e.groupIndex,
                        n = e.sectionIndex,
                        a = e.type,
                        s = e.newItemsCount,
                        u = e.panelType,
                        r = e.sectionsIds,
                        l = e.isSetupSwitching,
                        _ = e.classMix,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, Rt);
                    const m = (0, $.t)().model,
                        p = (0, o.useRef)(null),
                        b = m.ammunitionPanel.get(),
                        g = b.selectedSection,
                        E = b.syncInitiator,
                        h = m.computes.slots.length(t, n),
                        v = m.computes.slots.existFilled(t, n),
                        f = g === a,
                        C = (0, Ee.Tu)(a, r),
                        A = C.selfId,
                        D = C.blockOnGrabIds,
                        F = h > 0 && u !== oe.w.Compare && u !== oe.w.Battle && u !== oe.w.Respawn,
                        S = R.strings.tank_setup.section.$dyn(a);
                    if ('string' != typeof S)
                        throw new Error(`No top label text for section type ${a} or it's not a string`);
                    return i().createElement(
                        'div',
                        {
                            id: l ? ge : A,
                            ref: p,
                            className: c()(
                                he,
                                _,
                                f && 'sectionSelected',
                                h > 1 && 'multiSlot',
                                E >= 0 && v && 'existFilledSlots',
                            ),
                        },
                        F &&
                            i().createElement(
                                'div',
                                { className: ve },
                                i().createElement(be, { text: S, parentRef: p, show: !f, panelType: u }),
                            ),
                        i().createElement(
                            Nt,
                            Ot({ groupIndex: t, sectionIndex: n, sectionType: a, panelType: u, blockOnGrabIds: D }, d),
                        ),
                        Boolean(s) &&
                            i().createElement(
                                'div',
                                { className: fe },
                                i().createElement(re, { value: s, size: 'small', fadeInAnimation: !0 }),
                            ),
                    );
                });
                var Mt = n(8598);
                const Pt = {
                        base: 'ShellsSlot_base_05',
                        base__grabbing: 'ShellsSlot_base__grabbing_2f',
                        shell: 'ShellsSlot_shell_ab',
                        shell__grabbing: 'ShellsSlot_shell__grabbing_98',
                        shell__active: 'ShellsSlot_shell__active_7e',
                        shell__potential: 'ShellsSlot_shell__potential_30',
                        label: 'ShellsSlot_label_da',
                        image: 'ShellsSlot_image_3f',
                        infinity: 'ShellsSlot_infinity_19',
                    },
                    $t = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: n,
                        imageSource: a,
                        count: s,
                        isInfinity: u,
                        isSelected: r,
                        keyName: l,
                        panelType: _,
                        intCD: d,
                        slotIndex: m,
                        grabberId: p,
                        isSetupSwitching: b,
                        containerRef: g,
                        activeDragId: E,
                        handleGrabberAction: h,
                        forceLeftUpdate: v,
                        potentialDropId: f,
                        blockOnGrabIds: C,
                        shellState: A,
                        isDisabled: D,
                    }) => {
                        const F = !(0, te.s$)(_),
                            S = (0, o.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]),
                            y = p && p === f,
                            B = p && p === E,
                            w = (0, o.useMemo)(() => {
                                const a = { slotType: ne.g9, slotId: e, fieldType: 1, intCD: d };
                                return [
                                    a,
                                    Object.assign({}, a, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: n,
                                    }),
                                ];
                            }, [d, e, t, n]),
                            k = w[0],
                            x = w[1],
                            T = (0, o.useMemo)(
                                () => ({
                                    id: p,
                                    containerRef: g,
                                    isEnabled: Boolean(p) && r,
                                    isUpdateAvailable: Boolean(E),
                                    handleAction: h,
                                    forceCenterX: v,
                                    blockOnGrabIds: C,
                                }),
                                [E, C, g, v, p, h, r],
                            ),
                            I = (0, o.useMemo)(
                                () => ({ slotIndex: m, uniqueKey: d, slotType: ne.g9, imageSource: null }),
                                [d, m],
                            );
                        return i().createElement(
                            ct,
                            { isEnabled: F && !b && !D, args: x },
                            i().createElement(
                                Ue.t,
                                {
                                    args: k,
                                    decoratorId: [oe.w.Battle, oe.w.Prebattle].includes(_)
                                        ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                        : 0,
                                    isEnabled: !E,
                                },
                                i().createElement(
                                    'div',
                                    { id: `shell-slot-${m}`, className: Pt.base },
                                    l &&
                                        i().createElement(
                                            'div',
                                            { className: Pt.label },
                                            i().createElement(Ge, {
                                                text: l,
                                                show: r || _ === oe.w.Battle || _ === oe.w.Respawn,
                                                shellState: A,
                                                panelType: _,
                                                className: c()(
                                                    0 === m && Pt.topLabel__first,
                                                    2 === m && Pt.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    i().createElement(
                                        'div',
                                        {
                                            className: c()(
                                                Pt.shell,
                                                !E && F && !D && Pt.shell__active,
                                                B && Pt.shell__grabbing,
                                                !B && y && Pt.shell__potential,
                                            ),
                                        },
                                        i().createElement(
                                            Fe.J,
                                            { when: F, wrapper: $e, withProps: T },
                                            i().createElement(
                                                Fe.J,
                                                { when: F, wrapper: dt.y, withProps: I },
                                                i().createElement('div', { className: Pt.image, style: S }),
                                                !u && i().createElement(Mt.X, { count: s }),
                                                u && i().createElement('div', { className: Pt.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    zt = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Ht = ({ id: e, isSelected: t, imageSource: n, onSlotSelected: a, panelType: s }) => {
                        const u = (0, o.useCallback)(() => {
                                !t && a(e);
                            }, [e, t, a]),
                            r = c()(zt.slot, !t && zt.slot__active, zt.slot__compare),
                            l = (0, o.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            _ = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return i().createElement(
                            Ze,
                            { slotType: ne.WI, slotId: e, panelType: s },
                            i().createElement(
                                'div',
                                { className: zt.base },
                                i().createElement(
                                    'div',
                                    { className: r, onClick: u, id: `shell-slot-${e}` },
                                    t && i().createElement('div', { className: zt.glow }),
                                    i().createElement('div', { className: zt.image, style: l }),
                                    i().createElement('div', { className: zt.toggle, style: _ }),
                                ),
                            ),
                        );
                    },
                    jt = 'ShellContainer_base_46',
                    Wt = 'ShellContainer_base__compressed_13',
                    Gt = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                        'panelType',
                    ];
                function Ut() {
                    return (
                        (Ut =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ut.apply(this, arguments)
                    );
                }
                const Zt = (0, k.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.isCompare,
                            u = e.handleSlotSelected,
                            r = e.baseId,
                            o = e.grabber,
                            l = e.panelType,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                return s;
                            })(e, Gt);
                        const d = o.handleGrabberAction,
                            m = o.dragState,
                            p = o.getForceCenterX,
                            b = (0, $.t)().model,
                            g = b.computes.slots.length(t, n),
                            E = b.computes.slots.slot(t, n, a),
                            h = !s && g > 1 ? `${r}-${E.id}` : '';
                        return (0, te.j2)(E)
                            ? null
                            : i().createElement(
                                  'div',
                                  { key: E.id, className: c()(jt, !s && 0 !== a && Wt) },
                                  s
                                      ? i().createElement(Ht, Ut({}, E, { onSlotSelected: u, panelType: l }))
                                      : i().createElement(
                                            $t,
                                            Ut(
                                                {},
                                                E,
                                                {
                                                    slotIndex: a,
                                                    grabberId: h,
                                                    forceLeftUpdate: p(h),
                                                    activeDragId: m.activeDragId,
                                                    handleGrabberAction: d,
                                                    potentialDropId: m.potentialDropId,
                                                    panelType: l,
                                                },
                                                _,
                                            ),
                                        ),
                              );
                    }),
                    Vt = 'Shells_base_f9',
                    qt = (0, k.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: n,
                            isSelected: a,
                            syncInitiator: s,
                            blockOnGrabIds: u,
                            isDisabled: r,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            groupIndex: _,
                            sectionIndex: d,
                        }) => {
                            const m = (0, $.t)(),
                                p = m.model,
                                b = m.controls,
                                g = p.computes.slots.length(_, d),
                                E = (0, o.useRef)(!1),
                                h = (0, o.useRef)(null),
                                v = n ? ne.WI : ne.g9,
                                f = `${v}-${g}shells`,
                                C = !(0, te.iN)(e),
                                A = (0, o.useCallback)(
                                    (e) => {
                                        (b.sectionSelect({ selectedSlot: e, selectedSection: v }),
                                            C && Ce.$.playClick());
                                    },
                                    [b, v, C],
                                ),
                                D = (0, o.useCallback)(() => {
                                    a || n || r || l || A(0);
                                }, [a, n, l, r, A]),
                                F = (0, o.useCallback)(
                                    (e, t) => {
                                        b.dragDropSwap({
                                            sectionType: v,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [b, v],
                                ),
                                S = (0, Ee.UW)({
                                    baseId: f,
                                    slotsLength: g,
                                    handleSwap: F,
                                    setIsExitBlocked: c,
                                    syncInitiator: s,
                                });
                            return (
                                (0, o.useEffect)(
                                    () =>
                                        (0, w.v)(() => {
                                            E.current = !0;
                                        }),
                                    [],
                                ),
                                (0, o.useEffect)(() => {
                                    if (a && e === oe.w.Setup) {
                                        if (!E.current)
                                            return (0, w.v)(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [a, e, t]),
                                i().createElement(
                                    'div',
                                    {
                                        id: f,
                                        ref: h,
                                        className: Vt,
                                        onClick: D,
                                        onMouseEnter: () => {
                                            !r && C && Ce.$.playHighlight();
                                        },
                                    },
                                    Z(g, (t) =>
                                        i().createElement(Zt, {
                                            key: `${_} ${d} ${t}`,
                                            groupIndex: _,
                                            sectionIndex: d,
                                            slotIndex: t,
                                            isCompare: n,
                                            containerRef: h,
                                            handleSlotSelected: A,
                                            panelType: e,
                                            blockOnGrabIds: u,
                                            isSelected: a,
                                            isDisabled: r,
                                            isSetupSwitching: l,
                                            grabber: S,
                                            baseId: f,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    Xt = {
                        base: 'ShellsSection_base_08',
                        base__grabbing: 'ShellsSection_base__grabbing_2e',
                        base__hangar: 'ShellsSection_base__hangar_24',
                        base__setup: 'ShellsSection_base__setup_c8',
                        base__compare: 'ShellsSection_base__compare_e3',
                        base__selected: 'ShellsSection_base__selected_fd',
                        base__dragIn: 'ShellsSection_base__dragIn_39',
                        base__dragInActive: 'ShellsSection_base__dragInActive_96',
                        base__toggle: 'ShellsSection_base__toggle_bd',
                        base__disabled: 'ShellsSection_base__disabled_7e',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    Kt = [oe.w.Hangar, oe.w.Battle, oe.w.Prebattle, oe.w.Respawn],
                    Yt = (0, k.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: n,
                            onActiveSlotChanged: a,
                            isDisabled: s,
                            isBorderActive: u,
                            classMix: r,
                            isSetupSwitching: l,
                            setIsExitBlocked: _,
                            newItemsCount: d,
                            groupIndex: m,
                            sectionIndex: p,
                        }) => {
                            const b = (0, $.t)().model,
                                g = b.ammunitionPanel.get(),
                                E = g.ammoNotFull,
                                h = g.selectedSection,
                                v = g.syncInitiator,
                                f = (0, o.useRef)(null),
                                C = n === oe.w.Compare,
                                A = h === e,
                                D = (0, o.useCallback)(() => {
                                    a(f, h, 0);
                                }, [a, h]),
                                F = (0, Ee.Tu)(e, t),
                                S = F.selfId,
                                y = F.blockOnGrabIds,
                                B = ((e) => Kt.includes(e))(n) && !s && E,
                                w = b.computes.slots.filteredLength(m, p),
                                k = !C && n !== oe.w.Battle && n !== oe.w.Respawn;
                            return i().createElement(
                                'div',
                                {
                                    id: l ? ge : S,
                                    className: c()(
                                        Xt.base,
                                        r,
                                        Xt[`base__${n}`],
                                        !u && A && Xt.base__selected,
                                        C && Xt.base__compare,
                                        s && Xt.base__disabled,
                                    ),
                                    ref: f,
                                },
                                B && i().createElement('div', { className: Xt.attention }),
                                k &&
                                    i().createElement(
                                        'div',
                                        { className: Xt.label },
                                        i().createElement(be, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: f,
                                            show: !A,
                                            panelType: n,
                                        }),
                                    ),
                                B &&
                                    i().createElement('div', {
                                        className: c()(
                                            Xt.border,
                                            2 === w && Xt.border__double,
                                            3 === w && Xt.border__triple,
                                        ),
                                    }),
                                i().createElement(qt, {
                                    groupIndex: m,
                                    sectionIndex: p,
                                    panelType: n,
                                    onSelected: D,
                                    isSelected: A,
                                    isCompare: C,
                                    syncInitiator: v,
                                    blockOnGrabIds: y,
                                    isDisabled: s,
                                    isSetupSwitching: l,
                                    setIsExitBlocked: _,
                                }),
                                Boolean(d) &&
                                    i().createElement(
                                        'div',
                                        { className: Xt.counter },
                                        i().createElement(re, { value: d, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && i().createElement('div', { className: Xt.disabled }),
                            );
                        },
                    ),
                    Jt = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const en = (0, k.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: n = !1,
                            onActiveSlotChanged: a,
                            isBorderActive: s,
                            isChangeSetupIndex: u,
                            setIsExitBlocked: r,
                        }) => {
                            const o = (0, $.t)().model,
                                l = L(['section'], Jt),
                                _ = o.computes.sections.IDs(e),
                                d = {
                                    panelType: t,
                                    isDisabled: n,
                                    onActiveSlotChanged: a,
                                    isBorderActive: s,
                                    sectionsIds: _,
                                    isChangeSetupIndex: u,
                                    setIsExitBlocked: r,
                                };
                            return i().createElement(
                                'div',
                                { className: Jt.base },
                                Z(o.computes.sections.length(e), (n) => {
                                    const a = o.computes.sections.section(e, n);
                                    if (!a.slots || !a.slots.length) return null;
                                    const s = c()(
                                        l.section,
                                        0 !== n && (0, te.s$)(t) && Jt.section__battle,
                                        0 === n && Jt.section__first,
                                    );
                                    if (a.type === ne.g9 || a.type === ne.WI) {
                                        const t = a;
                                        return i().createElement(
                                            Yt,
                                            Qt({}, t, d, {
                                                groupIndex: e,
                                                sectionIndex: n,
                                                isSetupSwitching: u,
                                                key: `${a.name}${e}${a.slots.length}`,
                                                classMix: s,
                                            }),
                                        );
                                    }
                                    return i().createElement(
                                        Lt,
                                        Qt({}, a, d, {
                                            groupIndex: e,
                                            sectionIndex: n,
                                            isSetupSwitching: u,
                                            key: `${a.name}${e}${a.slots.length}`,
                                            classMix: s,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    tn = 'KeyboardKey_base_57',
                    nn = 'KeyboardKey_back_43',
                    an = i().memo(({ text: e }) =>
                        i().createElement('div', { className: tn }, i().createElement('div', { className: nn }, e)),
                    ),
                    sn = 'SetupSwitchHotkey_base_4c',
                    un = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    rn = 'SetupSwitchHotkey_plusWrapper_f0',
                    on = 'SetupSwitchHotkey_plus_f0',
                    ln = 'SetupSwitchHotkey_plus__horizontal_e0',
                    cn = 'SetupSwitchHotkey_plus__vertical_5b',
                    _n = i().memo(({ hotKeys: e }) =>
                        i().createElement(
                            'div',
                            { className: sn },
                            e.map((e, t) => {
                                if (!e) return null;
                                const n = e.value;
                                return 0 === t
                                    ? i().createElement(an, { key: t, text: n })
                                    : i().createElement(
                                          'div',
                                          { key: t, className: un },
                                          i().createElement(
                                              'div',
                                              { className: rn },
                                              i().createElement('div', { className: `${on} ${ln}` }),
                                              i().createElement('div', { className: `${on} ${cn}` }),
                                          ),
                                          i().createElement(an, { text: n }),
                                      );
                            }),
                        ),
                    ),
                    dn = {
                        base: 'Group_base_70',
                        wrapper: 'Group_wrapper_07',
                        switch: 'Group_switch_ff',
                        switch__battle: 'Group_switch__battle_c0',
                        switch__small: 'Group_switch__small_5e',
                        switch__extraSmall: 'Group_switch__extraSmall_ec',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_2e',
                        hint: 'Group_hint_99',
                        hint__disabled: 'Group_hint__disabled_6a',
                    };
                function mn() {
                    return (
                        (mn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        mn.apply(this, arguments)
                    );
                }
                const pn = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    bn = (e) => e.setupSelector.hotKeys,
                    gn = (0, k.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: t,
                            isSetupSwitching: n,
                            setSetupSwitching: a,
                            handleSetupSwitching: s,
                        }) => {
                            const u = L(['switch'], dn),
                                r = (0, $.t)().model,
                                o = r.root.get().isDisabled,
                                l = r.computes.groups.group(e);
                            return i().createElement(
                                'div',
                                { key: l.groupId, className: dn.base },
                                i().createElement(
                                    'div',
                                    { className: dn.wrapper },
                                    i().createElement(
                                        ee,
                                        ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(l, a),
                                        i().createElement(en, mn({}, t, { groupIndex: e, isChangeSetupIndex: n })),
                                    ),
                                    l.setupSelector.isSwitchEnabled &&
                                        i().createElement(
                                            'div',
                                            { className: c()(u.switch, (0, te.iN)(t.panelType) && dn.switch__battle) },
                                            i().createElement(q._, {
                                                states: l.setupSelector.states,
                                                onClick: s,
                                                totalCount: l.totalCount,
                                                currentIndex: l.currentIndex,
                                                groupId: l.groupId,
                                                isDisabled: t.isDisabled,
                                            }),
                                            l.setupSelector.isPrebattleSwitchDisabled &&
                                                i().createElement(
                                                    V.i,
                                                    {
                                                        header: pn.title(),
                                                        body: String(pn.desc.$dyn(`c_${l.groupId}`)),
                                                    },
                                                    i().createElement('div', {
                                                        className: dn.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((_ = l),
                                ((d = t.panelType) === oe.w.Battle || d === oe.w.Respawn) &&
                                    _.setupSelector.isSwitchEnabled &&
                                    bn(_) &&
                                    i().createElement(
                                        'div',
                                        { className: c()(dn.hint, o && dn.hint__disabled) },
                                        i().createElement(_n, { hotKeys: bn(l) }),
                                    )),
                            );
                            var _, d;
                        },
                    ),
                    En = 'Groups_base_de',
                    hn = (0, k.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: n, setSetupSwitching: a, children: s }) => {
                            const u = (0, $.t)(),
                                r = u.model,
                                l = u.controls,
                                c = r.vehicleInfo.get(),
                                _ = l.changeSetupIndex,
                                d = null == c ? void 0 : c.vehicleName;
                            ((0, o.useEffect)(() => {
                                (e.panelType !== oe.w.Hangar && e.panelType !== oe.w.Setup) || !n || a(!1);
                            }, [n, e.panelType, a]),
                                (0, o.useEffect)(() => {
                                    e.panelType === oe.w.Respawn && a(!1);
                                }, [d, e.panelType, a]));
                            const m = (0, o.useCallback)(
                                (t) => {
                                    (e.panelType === oe.w.Respawn && a(!0), _(t));
                                },
                                [_, e.panelType, a],
                            );
                            return i().createElement(
                                'div',
                                { className: En },
                                Z(r.computes.groups.length(), (n) =>
                                    i().createElement(gn, {
                                        key: `group-${n}`,
                                        sectionProps: e,
                                        groupIndex: n,
                                        isSetupSwitching: t,
                                        setSetupSwitching: a,
                                        handleSetupSwitching: m,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                var vn = n(2056);
                function fn() {
                    return (
                        (fn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        fn.apply(this, arguments)
                    );
                }
                const Cn = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const a = i().createElement('div', { className: n }, e);
                        if (t.header || t.body) return i().createElement(V.i, t, a);
                        const s = t.contentId;
                        return s
                            ? i().createElement(vn.u, fn({}, t, { contentId: s }), a)
                            : i().createElement(Ue.t, t, a);
                    },
                    An = 'RoleSkillSlot_base_c4',
                    Dn = 'RoleSkillSlot_icon_79',
                    Fn = ({ roleSkill: e, tooltipId: t, tooltipHeader: n, tooltipBody: a, className: s }) => {
                        const u = (0, o.useMemo)(
                            () => ({
                                args: { tooltipId: t, roleSkill: e, header: n, body: a, hasHtmlContent: !0 },
                                header: n,
                                body: a,
                                ignoreShowDelay: !0,
                            }),
                            [e, n, a, t],
                        );
                        return i().createElement(
                            Cn,
                            { tooltipArgs: u, className: c()(An, s) },
                            i().createElement('div', {
                                className: Dn,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    Sn = 'SlotGlow_base_40',
                    yn = 'SlotGlow_glow_a9',
                    Bn = 'SlotGlow_glow__initialized_8d',
                    wn = 'SlotGlow_glow__shown_f2',
                    kn = 'SlotGlow_glow__hidden_94',
                    xn = (0, o.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: n }) => {
                        const a = (0, o.useState)({ offset: e, slotWidth: t }),
                            s = a[0],
                            r = a[1],
                            l = (0, o.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        ((0, o.useEffect)(() => {
                            let n = l.current.initialized;
                            (!n && e && ((n = !0), r({ offset: e, slotWidth: t })),
                                (l.current = { initialized: n, offset: e, slotWidth: t }));
                        }, [e, t]),
                            (0, o.useEffect)(() => {
                                n || r(l.current);
                            }, [n]));
                        const _ = (0, o.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${u.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            d = !n && s.offset === l.current.offset,
                            m = c()(yn, l.current.initialized && Bn, d ? wn : kn);
                        return i().createElement(
                            'div',
                            { className: Sn },
                            i().createElement('div', { className: m, style: _ }),
                        );
                    }),
                    Tn = (0, k.Pi)(
                        ({
                            show: e = !0,
                            isReady: t = !0,
                            panelType: n,
                            isDisabled: a = !1,
                            onResize: s,
                            setIsExitBlocked: r,
                        }) => {
                            const l = (0, $.t)(),
                                _ = l.model,
                                d = l.controls,
                                m = _.ammunitionPanel.get(),
                                p = m.isSetupSwitchInProgress,
                                b = m.syncInitiator,
                                g = _.roleSkillSlot.get(),
                                E = (0, o.useState)(!1),
                                h = E[0],
                                v = E[1],
                                f = (0, o.useRef)(!1),
                                C = (0, o.useState)({ slotWidth: 0, slotOffset: 0 }),
                                A = C[0],
                                D = C[1],
                                F = (0, o.useState)(!1),
                                S = F[0],
                                y = F[1],
                                B = (0, o.useRef)(null),
                                k = (0, o.useContext)(I),
                                x = (0, o.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                T = (0, o.useCallback)(
                                    (e, t) => {
                                        if (h || p || n !== oe.w.Hangar) return;
                                        const a = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        (d.sectionResized(Object.assign({ sectionType: e }, a)),
                                            k && (k.freeze(), k.resize()));
                                    },
                                    [h, p, n, d, k],
                                ),
                                N = (0, o.useCallback)(
                                    (e) => {
                                        T('main', e);
                                    },
                                    [T],
                                );
                            (((e, t, n, a = []) => {
                                const s = M(
                                    () =>
                                        (0, w.v)(() =>
                                            (0, w.v)(() => {
                                                if (e.current) {
                                                    const n = e.current.getBoundingClientRect(),
                                                        a = {
                                                            width: u.O.view.pxToRem(n.width),
                                                            height: u.O.view.pxToRem(n.height),
                                                            offsetX: u.O.view.pxToRem(n.left),
                                                            offsetY: u.O.view.pxToRem(n.top),
                                                        };
                                                    (window.tutorialApi.updateComponents(), t(a));
                                                }
                                            }),
                                        ),
                                    [t, e],
                                );
                                ((0, o.useEffect)(() => {
                                    s();
                                }, [s, ...a]),
                                    (0, o.useEffect)(() => {
                                        if (n)
                                            return (
                                                engine.on('clientResized', s),
                                                () => {
                                                    engine.off('clientResized', s);
                                                }
                                            );
                                    }, [n, s]));
                            })(B, N, !0, [b]),
                                (0, o.useEffect)(() => () => N(), [N]));
                            const R = (0, o.useCallback)(() => {
                                    y(!1);
                                }, []),
                                O = (0, o.useCallback)(() => {
                                    if (x.current.element && B.current) {
                                        const e = x.current.element.getBoundingClientRect(),
                                            t = B.current.getBoundingClientRect();
                                        D({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                    }
                                }, []),
                                P = (0, o.useCallback)(
                                    (e, t, n) => {
                                        if (e.current && B.current) {
                                            const a = ((e, t, n) =>
                                                e !== n.current.slotIndex || t !== n.current.sectionIndex)(n, t, x);
                                            ((x.current.element = e.current),
                                                (x.current.slotIndex = n),
                                                (x.current.sectionIndex = t),
                                                f.current && a ? y(!0) : (f.current = !0),
                                                x.current.generation && O());
                                        }
                                    },
                                    [O],
                                ),
                                H = (0, o.useCallback)(
                                    () =>
                                        (0, w.v)(() => {
                                            ((x.current.generation += 1), O());
                                        }),
                                    [x, O],
                                );
                            ((0, o.useEffect)(() => (0, w.v)(H), [H]),
                                (0, o.useEffect)(
                                    () => (
                                        engine.on('clientResized', H),
                                        () => {
                                            engine.off('clientResized', H);
                                        }
                                    ),
                                    [H],
                                ));
                            const j = A.slotWidth,
                                W = A.slotOffset,
                                G = c()(z.base, !t && z.base__locked, !e && z.base__hidden, a && z.base__disabled),
                                Z = c()(z.border, !S && z.border__hidden),
                                V = n === oe.w.Setup || n === oe.w.Compare,
                                q = {
                                    panelType: n,
                                    isDisabled: a,
                                    onActiveSlotChanged: P,
                                    isBorderActive: S,
                                    setIsExitBlocked: r,
                                };
                            (0, o.useEffect)(() => {
                                null == s || s();
                            }, [s, g.roleSkill]);
                            const X = L(['roleSkillSlot'], z);
                            return i().createElement(
                                'div',
                                { ref: B, className: G },
                                V &&
                                    i().createElement(xn, {
                                        key: x.current.generation,
                                        slotOffset: W,
                                        slotWidth: j,
                                        isAnimationRunning: S,
                                    }),
                                i().createElement(
                                    hn,
                                    { isSetupSwitching: p || h, sectionProps: q, isReady: t, setSetupSwitching: v },
                                    g.roleSkill &&
                                        i().createElement(Fn, {
                                            roleSkill: g.roleSkill,
                                            tooltipId: g.tooltipId,
                                            tooltipHeader: g.tooltipHeader,
                                            tooltipBody: g.tooltipBody,
                                            className: c()(z.roleSkillSlot, z[`roleSkillSlot__${n}`], X.roleSkillSlot),
                                        }),
                                ),
                                V &&
                                    i().createElement(
                                        'div',
                                        { className: Z },
                                        i().createElement(U, { slotWidth: j, slotOffset: W, onAnimationEnd: R }),
                                    ),
                            );
                        },
                    );
                var In = n(2189);
                const Nn = (0, o.createContext)(null),
                    Rn = () => {
                        const e = (0, o.useContext)(Nn);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var On = n(3028),
                    Ln = n(8175),
                    Mn = n(3755),
                    Pn = n(1922),
                    $n = n(4888),
                    zn = n(1363),
                    Hn = n(8774);
                const jn = {
                        base: 'Actions_base_ea',
                        base__hidden: 'Actions_base__hidden_65',
                        base__shown: 'Actions_base__shown_9b',
                    },
                    Wn = (0, o.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) =>
                        i().createElement(
                            'div',
                            { className: c()(jn.base, jn['base__' + (t.length ? 'shown' : 'hidden')]) },
                            i().createElement(Hn.a, {
                                parentId: `${e}-${$n.GV}`,
                                actionType: $n.GV,
                                onClick: n,
                                show: t.includes($n.GV),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            i().createElement(Hn.a, {
                                parentId: `${e}-${$n.DA}`,
                                actionType: $n.DA,
                                onClick: n,
                                show: t.includes($n.DA),
                            }),
                            i().createElement(Hn.a, {
                                parentId: `${e}-${$n.FR}`,
                                actionType: $n.FR,
                                onClick: n,
                                show: t.includes($n.FR),
                            }),
                        ),
                    );
                var Gn = n(7902);
                const Un = [
                    'children',
                    'contentId',
                    'args',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onClick',
                    'ignoreShowDelay',
                    'ignoreMouseClick',
                    'decoratorId',
                    'isEnabled',
                    'onShow',
                    'onHide',
                ];
                function Zn(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const Vn = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: rt.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    qn = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            s = e.onMouseEnter,
                            u = e.onMouseLeave,
                            r = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            b = e.isEnabled,
                            g = void 0 === b || b,
                            E = e.onShow,
                            h = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                return s;
                            })(e, Un);
                        const f = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, o.useMemo)(() => (0, Gn.F)(), []).resId,
                            A = (0, o.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (Vn(n, p, { isMouseEvent: !0, on: !0, arguments: Zn(a) }, C),
                                    E && E(),
                                    (f.current.isVisible = !0));
                            }, [n, p, a, C, E]),
                            D = (0, o.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        Vn(n, p, { on: !1 }, C),
                                        f.current.isVisible && h && h(),
                                        (f.current.isVisible = !1));
                                }
                            }, [n, p, C, h]),
                            F = (0, o.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        ((0, o.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', F, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', F, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', D),
                                    () => {
                                        (window.removeEventListener('mouseleave', D), D());
                                    }
                                ),
                                [D],
                            ));
                        return g
                            ? (0, o.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(A, c ? 100 : 400)),
                                                      s && s(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (D(), u && u(t), e && e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!d && D(), i && i(t), e && e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!d && D(), r && r(t), e && e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
                        var S;
                    },
                    Xn = ['children'];
                function Kn() {
                    return (
                        (Kn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Kn.apply(this, arguments)
                    );
                }
                const Yn = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, Xn);
                    return i().createElement(
                        qn,
                        Kn(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
                var Jn = n(5282);
                const Qn = {
                        base: 'BaseCard_base_17',
                        content: 'BaseCard_content_42',
                        content__large: 'BaseCard_content__large_be',
                        content__huge: 'BaseCard_content__huge_f3',
                        content__installed: 'BaseCard_content__installed_1b',
                        content__current: 'BaseCard_content__current_89',
                        content__nonclickable: 'BaseCard_content__nonclickable_75',
                        content__disabled: 'BaseCard_content__disabled_eb',
                        image: 'BaseCard_image_53',
                        types: 'BaseCard_types_09',
                        highlight: 'BaseCard_highlight_73',
                        overlay: 'BaseCard_overlay_ba',
                        highlight__battleBooster: 'BaseCard_highlight__battleBooster_49',
                        overlay__battleBooster: 'BaseCard_overlay__battleBooster_85',
                        overlay__battleBoosterReplace: 'BaseCard_overlay__battleBoosterReplace_53',
                        overlay__equipmentPlus: 'BaseCard_overlay__equipmentPlus_62',
                        overlay__builtInEquipment: 'BaseCard_overlay__builtInEquipment_68',
                        overlay__equipmentTrophyBasic: 'BaseCard_overlay__equipmentTrophyBasic_ae',
                        overlay__equipmentTrophyUpgraded: 'BaseCard_overlay__equipmentTrophyUpgraded_1b',
                        overlay__equipmentModernized: 'BaseCard_overlay__equipmentModernized_97',
                        specialization: 'BaseCard_specialization_62',
                        name: 'BaseCard_name_c3',
                        details: 'BaseCard_details_fc',
                        options: 'BaseCard_options_15',
                        actions: 'BaseCard_actions_95',
                        hover: 'BaseCard_hover_cf',
                        disabled: 'BaseCard_disabled_c8',
                        locked: 'BaseCard_locked_13',
                        category: 'BaseCard_category_5e',
                        category__tiny: 'BaseCard_category__tiny_03',
                        category__small: 'BaseCard_category__small_96',
                        category__medium: 'BaseCard_category__medium_11',
                        category__large: 'BaseCard_category__large_c1',
                        category__huge: 'BaseCard_category__huge_71',
                    },
                    ea = 'DisabledAbilities_base_1d',
                    ta = 'DisabledAbilities_glow_75',
                    na = 'DisabledAbilities_line_54',
                    aa = ({ className: e }) =>
                        i().createElement(
                            'div',
                            { className: c()(ea, e) },
                            i().createElement('div', { className: ta }),
                            i().createElement('div', { className: na }),
                        );
                let sa;
                !(function (e) {
                    ((e.SimilarDeviceAlreadyInstalled = 'similar_device_already_installed'),
                        (e.UselessBattleBooster = 'useless_battle_booster'),
                        (e.UselessCrewSkillBattleBooster = 'useless_crew_skill_battle_booster'));
                })(sa || (sa = {}));
                const ua = 'Warning_base_4c',
                    ra = 'Warning_glow_79',
                    oa = 'Warning_line_df',
                    ia = 'Warning_icon_24',
                    la = (e) => Object.values(sa).includes(e),
                    ca = ({ parentId: e, reason: t, isCritical: n }) => {
                        const a = (0, o.useMemo)(() => ({ reason: t, isCritical: n }), [t, n]);
                        return i().createElement(
                            'div',
                            { id: e, className: ua },
                            i().createElement('div', { className: ra }),
                            i().createElement('div', { className: oa }),
                            i().createElement(
                                vn.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: a,
                                    isEnabled: la(t),
                                },
                                i().createElement('div', { className: ia }),
                            ),
                        );
                    },
                    _a = ({
                        parentId: e,
                        name: t,
                        tooltipArgs: n,
                        contextMenuArgs: a,
                        imageSource: s,
                        overlayType: u,
                        highlightType: r,
                        isModernized: l,
                        level: _,
                        isDisabled: d,
                        isCurrent: m,
                        isActive: p,
                        isLocked: b,
                        isAbilitiesCard: g = !1,
                        isClickable: E = !0,
                        details: h,
                        options: v,
                        actions: f,
                        specializations: C,
                        extraImages: A,
                        onSlotClick: D,
                        shouldHandleMouseOver: F,
                        category: S,
                        onTooltipShow: y,
                        onTooltipHide: B,
                        lockReason: w,
                    }) => {
                        const k = (0, Pn.GS)(),
                            x = (0, o.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            T = x[0],
                            I = x[1],
                            N = (0, o.useState)(!1),
                            O = N[0],
                            L = N[1],
                            M = (0, o.useState)(!1),
                            P = M[0],
                            $ = M[1],
                            z = (0, o.useCallback)(() => {
                                (!T.isActionsHovered && Ce.$.playHighlight(),
                                    I({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    F && L(!0));
                            }, [T.isActionsHovered, F]),
                            H = (0, o.useCallback)(() => {
                                F && L(!1);
                            }, [F]),
                            j = (0, o.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            W = (0, o.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            G = E && (!d || g),
                            U = (0, o.useCallback)(() => {
                                G && D && (Ce.$.playClick(), D());
                            }, [D, G]),
                            Z = T.isBaseHovered || T.isActionsHovered,
                            V = (0, o.useMemo)(() => {
                                let e = i().createElement(
                                    'div',
                                    {
                                        onMouseEnter: z,
                                        onMouseLeave: W,
                                        className: Qn.hover,
                                        onMouseDown: (e) => {
                                            0 === e.nativeEvent.button && ($(!0), U());
                                        },
                                        onMouseUp: (e) => {
                                            0 === e.nativeEvent.button && $(!1);
                                        },
                                    },
                                    d && g && i().createElement(aa, { className: Qn.locked }),
                                );
                                return (
                                    n && (e = i().createElement(Yn, { args: n, onShow: y, onHide: B }, e)),
                                    a && (e = i().createElement(ct, { args: a }, e)),
                                    e
                                );
                            }, [d, g, z, W, U, n, a, y, B, P]),
                            q = (0, o.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            X =
                                k === Pn.cJ.Large || k === Pn.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            K = (0, o.useMemo)(() => {
                                let e;
                                return (
                                    u && (e = l ? X.$dyn(`${u}_${_}_overlay`) : X.$dyn(`${u}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [X, u, l, _]),
                            Y = (0, o.useMemo)(() => {
                                let e;
                                return (r && (e = X.$dyn(`${r}_highlight`)), e && { backgroundImage: `url(${e})` });
                            }, [X, r]),
                            J = (0, o.useMemo)(() => {
                                const e =
                                        (k === Pn.cJ.Large || k === Pn.cJ.Huge ? Pn.cJ.Large : Pn.cJ.Medium) + '_' + S,
                                    t = R.images.gui.maps.icons.specialization.$dyn(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [S, k]);
                        return i().createElement(
                            'div',
                            { className: Qn.base },
                            i().createElement(
                                'div',
                                {
                                    id: e,
                                    className: c()(
                                        Qn.content,
                                        Qn[`content__${k}`],
                                        Z && E && !d && Qn.content__hovered,
                                        !Z && Qn.content__out,
                                        p && Qn.content__installed,
                                        m && Qn.content__current,
                                        d && Qn.content__disabled,
                                        !G && Qn.content__nonclickable,
                                    ),
                                    onMouseLeave: H,
                                },
                                Y &&
                                    i().createElement(
                                        'div',
                                        { className: Qn.types },
                                        i().createElement('div', {
                                            className: c()(Qn.highlight, Qn[`highlight__${r}`]),
                                            style: Y,
                                        }),
                                    ),
                                i().createElement('div', { className: Qn.image, style: q }, A),
                                d && i().createElement('div', { className: Qn.disabled }),
                                J &&
                                    i().createElement('span', {
                                        className: c()(Qn.category, Qn[`category__${k}`]),
                                        style: J,
                                    }),
                                K &&
                                    i().createElement(
                                        'div',
                                        { className: Qn.types },
                                        i().createElement('div', {
                                            className: c()(Qn.overlay, Qn[`overlay__${u}`]),
                                            style: K,
                                        }),
                                    ),
                                C && i().createElement('div', { className: Qn.specialization }, C),
                                i().createElement(
                                    'div',
                                    { className: c()(Qn.name, d && Qn.name__disabled) },
                                    i().createElement(Jn.n, {
                                        key: t,
                                        mediaSize: k,
                                        linesCount: 3,
                                        blocks: (0, Jn.D)(systemLocale.toUpperCase(t)),
                                    }),
                                ),
                                h && i().createElement('div', { className: Qn.details }, h),
                                i().createElement('div', { className: c()(Qn.options, d && Qn.options__disabled) }, v),
                                V,
                                i().createElement(
                                    'div',
                                    { onMouseEnter: j, onMouseLeave: W, className: Qn.actions },
                                    F && f
                                        ? (0, o.cloneElement)(f, Object.assign({}, f.props, { isMouseOverCard: O }))
                                        : f,
                                ),
                            ),
                            b &&
                                i().createElement(
                                    'div',
                                    { className: Qn.locked },
                                    i().createElement(ca, { reason: w, isCritical: d, parentId: e }),
                                ),
                        );
                    };
                var da = n(6391),
                    ma = n(8401);
                const pa = 'Availability_base_51',
                    ba = () => i().createElement('div', { className: pa }),
                    ga = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    Ea = i().memo(
                        ({ itemsInStorage: e, price: t, isMounted: n, possibleZeroCount: a, show: s = !0 }) => {
                            let u = null;
                            return (
                                (u = n
                                    ? i().createElement(ba, null)
                                    : e || (a && 0 === e)
                                      ? i().createElement(da.Y, { location: 'storage', count: e })
                                      : t && i().createElement(ma.t, t)),
                                i().createElement(
                                    'div',
                                    {
                                        className: c()(
                                            ga.base,
                                            ga['base__' + (s ? 'shown' : 'hidden')],
                                            (n || e || (a && 0 === e)) && ga.base__visually,
                                        ),
                                    },
                                    u,
                                )
                            );
                        },
                    ),
                    ha = 'Booster_base_e5',
                    va = 'Booster_unit_5e',
                    fa = (0, k.Pi)(({ isCurrent: e, compare: t, index: n }) => {
                        const a = (0, Pn.GS)(),
                            s = a === Pn.cJ.Large || a === Pn.cJ.Huge,
                            u = Rn(),
                            r = u.model,
                            l = u.controls,
                            c = r.computes.boosters.booster(n),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            b = c.isMountedMoreThanOne,
                            g = c.imageName,
                            E = c.itemsInStorage,
                            h = c.price,
                            v = c.intCD,
                            f = c.isDisabled,
                            C = c.overlayType,
                            A = c.isLocked,
                            D = c.isMounted,
                            F = c.isMountedInOtherSetup,
                            S = c.description,
                            y = c.isBuyMoreVisible,
                            B = c.isBuyMoreDisabled,
                            w = c.highlightType,
                            k = c.lockReason,
                            x = d > -1,
                            T = `${v}-booster`,
                            I = (0, o.useMemo)(() => {
                                const e = [];
                                return (
                                    !f &&
                                        x &&
                                        (!t && y && e.push($n.GV),
                                        (!Boolean(E) && !D) || F ? e.push($n.FR) : e.push($n.DA)),
                                    e
                                );
                            }, [f, x, t, y, E, D, F]),
                            N = (0, o.useCallback)(
                                (e) => (
                                    l.boosters.actSlot({ actionType: e, intCD: v, installedSlotId: d }),
                                    e === $n.GV ? 1e3 : 120
                                ),
                                [l, v, d],
                            ),
                            O = Be(N),
                            L = (0, o.useCallback)(() => {
                                I.includes($n.FR) ? O($n.FR) : I.includes($n.DA) ? O($n.DA) : O($n.eC);
                            }, [I, O]),
                            M = (0, o.useMemo)(() => {
                                const e = { intCD: v, slotType: ne.G$, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: b,
                                        isMounted: D,
                                        isDisabled: f,
                                    }),
                                ];
                            }, [v, d, m, p, D, b, f]),
                            P = M[0],
                            $ = M[1],
                            z = (0, o.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [s, g]);
                        return i().createElement(_a, {
                            parentId: T,
                            name: _,
                            tooltipArgs: P,
                            contextMenuArgs: $,
                            imageSource: z,
                            isClickable: !0,
                            isCurrent: e,
                            isActive: x,
                            isDisabled: f,
                            isLocked: A,
                            options: i().createElement(Ea, {
                                isMounted: D || F,
                                itemsInStorage: E,
                                show: !I.length,
                                price: h,
                            }),
                            actions: i().createElement(Wn, {
                                parentId: T,
                                availableActions: I,
                                onActionClick: O,
                                isBuyMoreDisabled: B,
                            }),
                            details: i().createElement(zn._, {
                                key: S,
                                parentId: T,
                                classMix: ha,
                                mediaSize: a,
                                classColorMix: va,
                                linesShown: s ? 4 : 3,
                                text: S,
                            }),
                            overlayType: C,
                            highlightType: w,
                            onSlotClick: L,
                            lockReason: k,
                        });
                    }),
                    Ca = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    Aa = (0, k.Pi)(({ isCurrent: e, compare: t, index: n }) => {
                        const a = (0, Pn.GS)(),
                            s = a === Pn.cJ.Large || a === Pn.cJ.Huge,
                            u = Rn(),
                            r = u.model,
                            l = u.controls,
                            _ = r.computes.consumables.consumable(n, t, a),
                            d = _.name,
                            m = _.installedSlotId,
                            p = _.itemInstalledSetupIdx,
                            b = _.itemInstalledSetupSlotIdx,
                            g = _.isMountedMoreThanOne,
                            E = _.imageName,
                            h = _.itemsInStorage,
                            v = _.price,
                            f = _.intCD,
                            C = _.isDisabled,
                            A = _.overlayType,
                            D = _.isLocked,
                            F = _.isMounted,
                            S = _.isMountedInOtherSetup,
                            y = _.isBuiltIn,
                            B = _.description,
                            w = _.isBuyMoreDisabled,
                            k = _.lockReason,
                            x = m > -1,
                            T = `${f}-consumable`,
                            I = (0, o.useMemo)(() => {
                                const n = [];
                                return (
                                    !C &&
                                        x &&
                                        (!e && n.push($n.Xo),
                                        y ||
                                            (!t && n.push($n.GV),
                                            (!Boolean(h) && !F) || S ? n.push($n.FR) : n.push($n.DA))),
                                    n
                                );
                            }, [C, x, e, y, t, h, F, S]),
                            N = (0, o.useCallback)(
                                (e) => (
                                    l.consumables.actSlot({ actionType: e, intCD: f, installedSlotId: m }),
                                    e === $n.GV ? 1e3 : 300
                                ),
                                [l, f, m],
                            ),
                            O = Be(N),
                            L = (0, o.useCallback)(() => {
                                I.includes($n.Xo)
                                    ? O($n.Xo)
                                    : I.includes($n.FR)
                                      ? O($n.FR)
                                      : I.includes($n.DA)
                                        ? O($n.DA)
                                        : O($n.eC);
                            }, [I, O]),
                            M = (0, o.useMemo)(() => {
                                const e = { intCD: f, slotType: ne.mH, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: b,
                                        isMountedMoreThanOne: g,
                                        isMounted: F,
                                        isDisabled: C,
                                    }),
                                ];
                            }, [f, m, p, b, g, F, C]),
                            P = M[0],
                            $ = M[1],
                            z = (0, o.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(E)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(E);
                                return String(e);
                            }, [s, E]),
                            H = (0, o.useMemo)(
                                () =>
                                    i().createElement(zn._, {
                                        parentId: T,
                                        mediaSize: a,
                                        classMix: c()(Ca.base, a && Ca[`base__${a}`]),
                                        classColorMix: Ca.unit,
                                        linesShown: s ? 4 : 3,
                                        text: B,
                                    }),
                                [a, s, B, T],
                            );
                        return i().createElement(_a, {
                            parentId: T,
                            name: d,
                            tooltipArgs: P,
                            contextMenuArgs: $,
                            imageSource: z,
                            isCurrent: e,
                            isActive: x,
                            isDisabled: C,
                            isLocked: D,
                            isClickable: !y,
                            options: i().createElement(Ea, {
                                price: v,
                                isMounted: F || S,
                                itemsInStorage: h,
                                show: !I.length,
                            }),
                            actions: i().createElement(Wn, {
                                parentId: T,
                                availableActions: I,
                                onActionClick: O,
                                isBuyMoreDisabled: w,
                            }),
                            details: H,
                            overlayType: A,
                            onSlotClick: L,
                            lockReason: k,
                        });
                    });
                var Da = n(9480);
                const Fa = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    Sa = ({ values: e, localeName: t }) => {
                        const n = Da.hX(e, ({ valueKey: e }) => e === t).pop();
                        if (!n) return Fa;
                        const a = n.value,
                            s = 'mul' === n.valueType ? 100 * (a - 1) : a;
                        return { calcValue: s, isPositive: s > 0, valueKey: n.valueKey };
                    },
                    ya = 'Bonus_base_aa',
                    Ba = 'Bonus_bonus_49',
                    wa = 'Bonus_text_48',
                    ka = 'Unit_base_15',
                    xa = 'Unit_base__special_37',
                    Ta = 'Unit_glow_38',
                    Ia = R.strings.tank_setup.kpi.bonus.valueTypes,
                    Na = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    Ra = (0, k.Pi)(({ deviceID: e, bonusID: t }) => {
                        const n = Rn().model,
                            a = n.computes.optDevices.device(e).activeSpecsMask,
                            s = n.computes.optDevices.bonusValue(e, t);
                        if (!s) return null;
                        const u = s.valueType,
                            r = s.value,
                            o = s.valueKey,
                            l = Boolean(a),
                            _ = 'mul' === u ? 100 * (r - 1) : r,
                            d = _ > 0 ? '+' : '',
                            m = rt.Z5.getRealFormat(_, rt.Gr.WO_ZERO_DIGITS),
                            p = Ia.$dyn(o),
                            b = `${m}${p ? ` ${p}` : Na}`;
                        return i().createElement(
                            'div',
                            { className: c()(ka, l && xa) },
                            i().createElement('span', null, i().createElement('span', { className: Ta }), d + b),
                        );
                    }),
                    Oa = (0, k.Pi)(({ bonusID: e, compare: t, deviceID: n }) => {
                        const a = (0, Pn.GS)(),
                            s = a === Pn.cJ.Large || a === Pn.cJ.Huge ? 4 : 3,
                            u = Rn().model,
                            r = u.computes.optDevices.bonusVisibleLinesCount(n, e, s),
                            l = ((e, t = !1) =>
                                t || Sa(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(
                                u.computes.optDevices.bonus(n, e),
                            ),
                            c = (0, o.useMemo)(() => (0, Jn.D)(String(l)), [l]);
                        return r
                            ? i().createElement(
                                  'div',
                                  { className: ya },
                                  l &&
                                      i().createElement(
                                          'span',
                                          { className: Ba },
                                          i().createElement(Ra, { compare: t, deviceID: n, bonusID: e }),
                                          ' ',
                                          r &&
                                              l &&
                                              i().createElement(
                                                  'span',
                                                  { className: wa },
                                                  i().createElement(Jn.n, { linesCount: r, blocks: c, mediaSize: a }),
                                              ),
                                      ),
                              )
                            : null;
                    }),
                    La = 'Bonuses_base_af',
                    Ma = 'Bonuses_bonus_d1',
                    Pa = 'Bonuses_text_37',
                    $a = 'Bonuses_effect_f8',
                    za = 'Bonuses_icon_40',
                    Ha = (0, k.Pi)(({ compare: e, deviceID: t }) => {
                        const n = (0, Pn.GS)(),
                            a = Rn().model,
                            s = a.computes.optDevices.device(t),
                            u = s.intCD,
                            r = s.effect,
                            o = a.computes.optDevices.bonusesLength(t),
                            l = `${u}-device`,
                            c = a.computes.optDevices.bonusEffectLinesCount(t);
                        return i().createElement(
                            'div',
                            { id: `${l}-bonuses`, className: La },
                            r &&
                                i().createElement(
                                    'div',
                                    { className: Ma },
                                    i().createElement(
                                        'span',
                                        { className: $a },
                                        i().createElement('span', { className: za }),
                                        R.strings.tank_setup.effects.name(),
                                    ),
                                    ' ',
                                    i().createElement(
                                        'span',
                                        { className: Pa },
                                        i().createElement(Jn.n, { mediaSize: n, linesCount: c, blocks: (0, Jn.D)(r) }),
                                    ),
                                ),
                            Z(o, (n) =>
                                i().createElement(Oa, { key: `${n}_${u}`, bonusID: n, deviceID: t, compare: e }),
                            ),
                        );
                    });
                var ja = n(2106);
                const Wa = 'DeviceActions_base_c0',
                    Ga = 'DeviceActions_base__hidden_a6',
                    Ua = 'DeviceActions_base__shown_b0',
                    Za = (0, o.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: n,
                            isInstalled: a,
                            isMouseOverCard: s,
                            isModernized: u,
                            isFreeToDemount: r,
                            destroyTooltipBodyPath: o,
                            level: l,
                        }) => {
                            const _ = (s || a) && t.includes($n.Rs),
                                d = t.length && (t[0] !== $n.Rs || _),
                                m = c()(Wa, d ? Ua : Ga);
                            return i().createElement(
                                'div',
                                { className: m },
                                i().createElement(Hn.a, {
                                    parentId: `${e}-${$n.DA}`,
                                    actionType: $n.DA,
                                    onClick: n,
                                    show: t.includes($n.DA),
                                }),
                                i().createElement(Hn.a, {
                                    parentId: `${e}-${$n.FR}`,
                                    actionType: $n.FR,
                                    onClick: n,
                                    show: t.includes($n.FR),
                                }),
                                i().createElement(Hn.a, {
                                    parentId: `${e}-${$n.Rs}`,
                                    actionType: $n.Rs,
                                    onClick: n,
                                    show: _,
                                    isModernized: u,
                                    level: l,
                                }),
                                i().createElement(Hn.a, {
                                    parentId: `${e}-${$n.dZ}`,
                                    actionType: $n.dZ,
                                    onClick: n,
                                    show: t.includes($n.dZ),
                                    isFreeToDemount: r,
                                }),
                                i().createElement(Hn.a, {
                                    parentId: `${e}-${$n.Fd}`,
                                    actionType: $n.Fd,
                                    onClick: n,
                                    show: t.includes($n.Fd),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: r,
                                }),
                                i().createElement(Hn.a, {
                                    parentId: `${e}-${$n.sH}`,
                                    actionType: $n.sH,
                                    onClick: n,
                                    show: t.includes($n.sH),
                                }),
                                i().createElement(Hn.a, {
                                    parentId: `${e}-${$n._2}`,
                                    actionType: $n._2,
                                    buttonType: ja.L.secondary,
                                    onClick: n,
                                    show: (u || !r) && t.includes($n._2),
                                    isModernized: u,
                                    tooltipBodyPath: o,
                                }),
                            );
                        },
                    );
                function Va() {
                    return (
                        (Va =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Va.apply(this, arguments)
                    );
                }
                const qa = (0, k.Pi)(({ compare: e, index: t, isCurrent: n }) => {
                        const a = (0, Pn.GS)(),
                            s = a === Pn.cJ.Large || a === Pn.cJ.Huge,
                            u = Rn(),
                            r = u.model,
                            l = u.controls,
                            c = r.computes.optDevices.device(t),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            b = c.isMountedMoreThanOne,
                            g = c.imageName,
                            E = c.itemsInStorage,
                            h = c.price,
                            v = c.specializations,
                            f = c.intCD,
                            C = c.isMounted,
                            A = c.isMountedInOtherSetup,
                            D = c.isDisabled,
                            F = c.isFreeToDemount,
                            S = c.overlayType,
                            y = c.isLocked,
                            B = c.isUpgradable,
                            w = c.isTrophy,
                            k = c.activeSpecsMask,
                            x = c.isModernized,
                            T = c.level,
                            I = c.lockReason,
                            N = c.destroyTooltipBodyPath,
                            O = d > -1,
                            L = `${f}-device`,
                            M = (0, o.useMemo)(() => {
                                const t = [];
                                let a = !0;
                                return (
                                    O &&
                                        !D &&
                                        (n || t.push($n.Xo),
                                        C && !e
                                            ? ((a = !n),
                                              t.push(...((e) => (e ? [$n.Fd, $n.sH] : [$n.dZ]))(b)),
                                              t.push($n._2))
                                            : t.push(
                                                  ((e, t, n) => ((!Boolean(e) && !t) || n ? $n.FR : $n.DA))(E, C, A),
                                              )),
                                    !B || e || D || t.push($n.Rs),
                                    { availableActions: t, isDeviceClickable: a }
                                );
                            }, [O, D, B, e, n, C, b, E, A]),
                            P = M.availableActions,
                            $ = M.isDeviceClickable,
                            z = (0, o.useCallback)(
                                (e) => {
                                    l.optDevices.actSlot({ actionType: e, intCD: f, installedSlotId: d });
                                },
                                [l, f, d],
                            ),
                            H = (0, o.useCallback)(() => {
                                P.length && P[0] !== $n.Rs ? z(P[0]) : z($n.eC);
                            }, [P, z]),
                            j = (0, o.useMemo)(() => {
                                const e = { intCD: f, slotType: ne.zn, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: b,
                                        isMounted: C,
                                        isDisabled: D,
                                    }),
                                ];
                            }, [f, d, m, p, b, C, D]),
                            W = j[0],
                            G = j[1],
                            U = (0, o.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [s, g]);
                        return i().createElement(_a, {
                            parentId: L,
                            name: _,
                            tooltipArgs: W,
                            contextMenuArgs: G,
                            imageSource: U,
                            isCurrent: n,
                            isActive: O,
                            isDisabled: D,
                            isLocked: y,
                            isClickable: $,
                            isModernized: x,
                            level: T,
                            specializations:
                                v && v.specializations.length
                                    ? i().createElement(vt.G, Va({}, v, { activeSpecsMask: k, mediaSize: a }))
                                    : null,
                            details: i().createElement(Ha, { compare: e, deviceID: t }),
                            options: e
                                ? null
                                : i().createElement(Ea, {
                                      isMounted: C || A,
                                      itemsInStorage: E,
                                      price: h,
                                      possibleZeroCount: w || x,
                                      show: !P.length || Boolean(E || C || A),
                                  }),
                            actions: i().createElement(Za, {
                                parentId: L,
                                availableActions: P,
                                onActionClick: z,
                                isInstalled: O,
                                isModernized: x,
                                level: T,
                                isFreeToDemount: F,
                                destroyTooltipBodyPath: N,
                            }),
                            overlayType: S,
                            onSlotClick: H,
                            shouldHandleMouseOver: !0,
                            lockReason: I,
                        });
                    }),
                    Xa = { base: 'Card_base_48', base__large: 'Card_base__large_42', base__huge: 'Card_base__huge_55' },
                    Ka = (0, k.Pi)(
                        ({ index: e, type: t, compare: n = !1 }, a) => {
                            const s = (0, Pn.GS)(),
                                u = Rn().model,
                                r = u.ammunitionPanel.get().selectedSlot,
                                o = (() => {
                                    switch (t) {
                                        case ne.zn:
                                            return u.computes.optDevices.device(e);
                                        case ne.mH:
                                            return u.computes.consumables.consumable(e, n, s);
                                        case ne.G$:
                                            return u.computes.boosters.booster(e);
                                        default:
                                            return u.computes.optDevices.device(e);
                                    }
                                })(),
                                l = o.isVisible,
                                _ = o.installedSlotId,
                                d = _ > -1 && r === _;
                            return l
                                ? i().createElement(
                                      'div',
                                      { className: c()(Xa.base, s && Xa[`base__${s}`]), ref: d ? a : null },
                                      (() => {
                                          switch (t) {
                                              case ne.G$:
                                                  return i().createElement(fa, { index: e, compare: n, isCurrent: d });
                                              case ne.mH:
                                                  return i().createElement(Aa, { index: e, compare: n, isCurrent: d });
                                              case ne.zn:
                                              default:
                                                  return i().createElement(qa, { index: e, compare: n, isCurrent: d });
                                          }
                                      })(),
                                  )
                                : null;
                        },
                        { forwardRef: !0 },
                    ),
                    Ya = {
                        base: 'Cards_base_30',
                        base__large: 'Cards_base__large_33',
                        base__huge: 'Cards_base__huge_60',
                        base__disabled: 'Cards_base__disabled_28',
                    },
                    Ja = ({ isDisabled: e, compare: t = !1, currentCardRef: n, cardsAmount: a, type: s }) => {
                        const u = (0, Pn.GS)();
                        return i().createElement(
                            'div',
                            { className: c()(Ya.base, u && Ya[`base__${u}`], e && Ya.base__disabled) },
                            Z(a, (e) =>
                                i().createElement(Ka, { key: `${e}_${u}`, index: e, compare: t, ref: n, type: s }),
                            ),
                        );
                    };
                var Qa = n(3215),
                    es = n(3522);
                const ts = (0, Qa.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, es._)(e),
                                n = t.model,
                                a = t.computes,
                                s = e.object();
                            return Object.assign({}, n, { ammunitionPanel: s, computes: a });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            resized: e.createCallback((e) => Object.assign({}, e), 'onResized'),
                            viewRendered: e.createCallbackNoArgs('onViewRendered'),
                            animationEnded: e.createCallbackNoArgs('onAnimationEnd'),
                            filterChanged: e.createCallback(
                                (e) => Object.assign({}, e),
                                'tankSetup.optDevicesSetup.onFilterChanged',
                            ),
                            filterReset: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onFilterReset'),
                            optDevices: {
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onSlotAction',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onTabChanged',
                                ),
                            },
                            consumables: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.consumablesSetup.onAutoRenewalChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.consumablesSetup.onSlotAction',
                                ),
                            },
                            boosters: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.battleBoostersSetup.onAutoRenewalChanged',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onTabChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onSlotAction',
                                ),
                            },
                        }),
                    ),
                    ns = (ts[0], ts[1]),
                    as = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    ss = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    us = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    rs = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    os = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = as(`${e}.${n}`, window);
                                return us(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    is = (e) => {
                        const t = ((e) => {
                                const t = (0, Gn.F)(),
                                    n = t.caller,
                                    a = t.resId,
                                    s = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: s, modelPath: rs(s, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const s = as(rs(n, `${t}.${a}`), window);
                                    return us(s) ? (e.push(s.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const ls = () => (window.injected || (window.injected = new Map()), window.injected);
                const cs = rt.Sw.instance;
                let _s;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(_s || (_s = {}));
                const ds = (e = 'model', t = _s.Deep) => {
                        const n = (0, o.useState)(0),
                            a = (n[0], n[1]),
                            s = (0, o.useMemo)(() => (0, Gn.F)(), []),
                            u = s.callerUrl,
                            r = s.caller,
                            i = s.resId,
                            l = (0, o.useMemo)(() => {
                                const t = (function (e) {
                                    return ls().has(e);
                                })(u.replace('.js', '.html'));
                                return window.__feature && window.__feature !== r && !t ? `subViews.${r}.${e}` : e;
                            }, [u, r, e]),
                            c = (0, o.useState)(() =>
                                ((e) => {
                                    const t = as(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return us(t) ? t.value : t;
                                })(os(l)),
                            ),
                            _ = c[0],
                            d = c[1],
                            m = (0, o.useRef)(-1);
                        return (
                            ss(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? _s.Deep : _s.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== _s.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === _s.Deep
                                                ? (e === _ && a((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        s = is(e);
                                    m.current = cs.addCallback(s, n, i, t === _s.Deep);
                                }
                            }),
                            (0, o.useEffect)(() => {
                                if (t !== _s.None)
                                    return () => {
                                        cs.removeCallback(m.current, i);
                                    };
                            }, [i, t]),
                            _
                        );
                    },
                    ms = 'visible_change',
                    ps = ms,
                    bs = (e, t) => {
                        const n = ds('tutorialModel.triggers.items').filter((n) => {
                            if (!n) return !1;
                            const a = n.value,
                                s = a.triggers.filter((e) => e.value === t);
                            return a.componentId === e && s.length > 0;
                        });
                        if (0 === n.length) return null;
                        if (!window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e))
                            return null;
                        return {
                            trigger: n[0].value,
                            runTrigger: (n) => {
                                window.tutorialModel.onTriggerActivated({ componentId: e, triggerType: t, state: n });
                            },
                        };
                    };
                var gs = n(8586),
                    Es = n(3978);
                const hs = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    vs = 'FilterItem_base_2e',
                    fs = ({ name: e }) =>
                        i().createElement('div', {
                            className: vs,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            },
                        });
                let Cs;
                !(function (e) {
                    ((e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom'));
                })(Cs || (Cs = {}));
                (R.strings.common.percentValue(), R.strings.common.plusPercentValue());
                let As;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(As || (As = {}));
                const Ds = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let Fs;
                !(function (e) {
                    ((e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy'));
                })(Fs || (Fs = {}));
                let Ss;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(Ss || (Ss = {}));
                const ys = 'ClearBtn_base_a6',
                    Bs = 'ClearBtn_stroke_09',
                    ws = 'ClearBtn_background_61',
                    ks = 'ClearBtn_base__hover_3b',
                    xs = 'ClearBtn_base__down_60',
                    Ts = 'ClearBtn_cross_1d',
                    Is = ({ parentId: e, onClick: t, soundHover: n = 'highlight', soundClick: a = 'play' }) => {
                        const s = (0, o.useState)(!1),
                            u = s[0],
                            r = s[1],
                            l = (0, o.useState)(!1),
                            _ = l[0],
                            d = l[1],
                            m = (0, o.useCallback)(() => {
                                ((0, Ce.G)(a), d(!1), r(!0));
                            }, [a]),
                            p = (0, o.useCallback)(() => {
                                ((0, Ce.G)(n), d(!0));
                            }, [n]),
                            b = (0, o.useCallback)(() => {
                                (d(!1), r(!1));
                            }, []);
                        return i().createElement(
                            V.i,
                            Ds,
                            i().createElement(
                                'div',
                                {
                                    id: e,
                                    className: c()(ys, _ && ks, u && xs),
                                    onMouseDown: m,
                                    onMouseOver: p,
                                    onMouseLeave: b,
                                    onClick: t,
                                },
                                i().createElement('div', { className: ws }),
                                i().createElement('div', { className: Bs }),
                                i().createElement('div', { className: Ts }),
                            ),
                        );
                    },
                    Ns = 'MatchDetails_base_a8',
                    Rs = 'MatchDetails_count_d2',
                    Os = 'MatchDetails_clear_21',
                    Ls = 'MatchDetails_clear__shown_49',
                    Ms = 'MatchDetails_separator_bc',
                    Ps = 'MatchDetails_arrow_b0',
                    $s = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: n, totalCount: a }) => {
                        const s = (0, o.useCallback)(() => t(), [t]);
                        return i().createElement(
                            'div',
                            { className: Ns },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('span', { className: Rs }, n),
                                    i().createElement(
                                        'span',
                                        { className: Ms },
                                        '/',
                                        i().createElement('span', { className: Ps }),
                                    ),
                                ),
                            i().createElement('span', { className: Rs }, a),
                            i().createElement(
                                'span',
                                { className: c()(Os, e && Ls) },
                                i().createElement(Is, { parentId: 'match-details-clear-btn', onClick: s }),
                            ),
                        );
                    },
                    zs = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: n,
                        isEnabled: a,
                        showDetails: s = !1,
                        onFilterChanged: u,
                        onFilterReset: r,
                        selectedSlotSpecialization: l,
                    }) => {
                        const _ = (0, Pn.GS)(),
                            d = bs('FilterTutorialHintZone', ps);
                        (0, o.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, Da.UI)(n, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: i().createElement(fs, { name: e }),
                            callback: (e, t) => {
                                (u({ name: e }), (0, Es.d)(e, !t));
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: ja.L.ghost,
                                mixClass: c()(hs.button, l && e === l && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: String(R.strings.tank_setup.categories.$dyn(e)),
                                body: String(R.strings.tank_setup.categories.body.$dyn(e)),
                            },
                        }));
                        return i().createElement(
                            'div',
                            { className: c()(hs.base, _ && hs[`base__${_}`], s && hs.base__detailed) },
                            s &&
                                i().createElement($s, {
                                    isFilterActive: a,
                                    onFilterReset: r,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            i().createElement(
                                'div',
                                { className: hs.buttons },
                                i().createElement(gs.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var Hs = n(3457),
                    js = n(2372);
                const Ws = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    Gs = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    Us = (e) => (e ? Gs.disabled.text() : Gs.notDisabled.text()),
                    Zs = (0, k.Pi)(({ disabled: e }) => {
                        const t = (0, Pn.GS)(),
                            n = (0, On.t)(),
                            a = n.model,
                            s = n.controls,
                            u = a.optDevices.specialCurrency.get().value;
                        return i().createElement(
                            'div',
                            { className: c()(Ws.base, t && Ws[`base__${t}`]) },
                            i().createElement(
                                Ue.t,
                                { args: { tooltipId: ne.$4 } },
                                i().createElement(
                                    'div',
                                    { className: Ws.currency },
                                    i().createElement(js.A, { value: u }),
                                    i().createElement('div', { className: Ws.currencyIcon }),
                                ),
                            ),
                            i().createElement(
                                V.i,
                                { body: Us(e) },
                                i().createElement(
                                    'div',
                                    null,
                                    i().createElement(
                                        Hs.u5,
                                        { onClick: s.moreCurrencyGot, mixClass: Ws.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Vs = 'HeaderContent_base_cd';
                function qs() {
                    return (
                        (qs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        qs.apply(this, arguments)
                    );
                }
                const Xs = (0, k.Pi)(({ compare: e }) => {
                        const t = Rn(),
                            n = t.model,
                            a = t.controls,
                            s = n.optDevices.setup.get(),
                            u = s.withIntroduction,
                            r = s.hasUnfitItems,
                            o = n.optDevices.specialCurrency.get().value,
                            l = n.computes.optDevices.slotsLength(),
                            c = n.optDevices.tabs.get(),
                            _ = n.optDevices.filter.get(),
                            d = e ? void 0 : n.computes.selectedSlotSpecialization();
                        switch (c.selectedTabName) {
                            case ne.S:
                                return i().createElement(
                                    'div',
                                    { className: Vs },
                                    i().createElement(
                                        zs,
                                        qs({}, _, {
                                            onFilterChanged: a.filterChanged,
                                            onFilterReset: a.filterReset,
                                            selectedSlotSpecialization: d,
                                        }),
                                    ),
                                );
                            case ne.pi:
                                return e
                                    ? null
                                    : !u || (0 !== o && 0 === l)
                                      ? i().createElement(
                                            'div',
                                            { className: Vs },
                                            i().createElement(Zs, { disabled: u ? !r : l <= 0 }),
                                        )
                                      : null;
                            default:
                                return null;
                        }
                    }),
                    Ks = {
                        base: 'CompareHeader_base_7a',
                        base__small: 'CompareHeader_base__small_ad',
                        base__medium: 'CompareHeader_base__medium_b7',
                        base__large: 'CompareHeader_base__large_6f',
                        base__huge: 'CompareHeader_base__huge_d0',
                        title: 'CompareHeader_title_59',
                        description: 'CompareHeader_description_1c',
                        controlsContainer: 'CompareHeader_controlsContainer_8b',
                    },
                    Ys = R.strings.tank_setup.compare.section,
                    Js = (0, k.Pi)(({ type: e, children: t, withContent: n }) => {
                        const a = ns().model.vehicleInfo.get(),
                            s = (0, Pn.GS)();
                        return i().createElement(
                            'div',
                            { className: c()(Ks.base, Ks[`base__${s}`]) },
                            i().createElement(
                                'div',
                                { className: Ks.title },
                                (0, O.WU)(String(Ys.title.$dyn(e)), { name: a.vehicleName }),
                            ),
                            i().createElement('div', { className: Ks.description }, Ys.description.$dyn(e)),
                            i().createElement(
                                'div',
                                { className: Ks.controlsContainer },
                                i().createElement('div', { className: Ks.tabs }, null == t ? void 0 : t(a.vehicleLvl)),
                                n && i().createElement(Xs, { compare: !0 }),
                            ),
                        );
                    }),
                    Qs = 'Tabs_base_d9',
                    eu = 'Tabs_base__vertical_c0',
                    tu = 'Tabs_list_0a',
                    nu = 'Tabs_list__centered_dc',
                    au = 'Tabs_wrapper_2d',
                    su = 'Tabs_wrapper__centered_d8',
                    uu = 'Tabs_wrapper__vertical_a5';
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const ou = 'tabs-role';
                var iu;
                !(function (e) {
                    ((e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key'));
                })(iu || (iu = {}));
                class lu extends o.Component {
                    constructor(...e) {
                        (super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[iu.TAB]);
                                return t && t.props[iu.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                (this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e }));
                            }));
                    }
                    componentDidMount() {
                        const e = i().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[ou] === iu.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(i().Children.toArray(e[t].props.children));
                        ((e[t] = i().cloneElement(e[t], {
                            children: i()
                                .Children.toArray(e[t].props.children)
                                .map((e) => i().cloneElement(e, { key: e.props[iu.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(n));
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const n = i().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            s =
                                ((u = this.tabsProps),
                                (r = a),
                                !(
                                    Object.keys(u).length === Object.keys(r).length &&
                                    Object.keys(u).every(
                                        (e) => Object.prototype.hasOwnProperty.call(r, e) && u[e] === r[e],
                                    )
                                ));
                        var u, r;
                        const o = c()(
                                au,
                                n.props.className,
                                this.props.isTabsCentered && su,
                                this.props.isVerticalTabs && uu,
                            ),
                            l = c()(tu, this.props.isTabsCentered && nu);
                        if (t.activeKey !== this.state.activeKey || s) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[ou] === iu.CONTENT)
                                        return e.props[iu.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                s = t[0].props.children,
                                u = s.map((e, t) =>
                                    i().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[iu.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === s.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][iu.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && (0, Ce.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    (a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, Ce.G)(this.props.onMouseEnterSound));
                                                },
                                            },
                                        ),
                                    ),
                                );
                            ((this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        i().createElement(
                                            'div',
                                            { className: l, key: iu.LIST },
                                            i().createElement('div', ru({}, n.props, { className: o }), u),
                                        ),
                                        t[1],
                                    ],
                                }));
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = c()(Qs, this.props.isVerticalTabs && eu);
                        return i().createElement('div', { className: t }, e);
                    }
                }
                lu.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const cu = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function _u() {
                    return (
                        (_u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _u.apply(this, arguments)
                    );
                }
                const du = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            s = e.onClickSound,
                            u = e.onMouseEnterSound,
                            r = e.isTabsCentered,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                return s;
                            })(e, cu);
                        return i().createElement(
                            'div',
                            _u({ className: n }, o),
                            i().createElement(
                                lu,
                                { activeKey: a, onClickSound: s, onMouseEnterSound: u, isTabsCentered: r },
                                t,
                            ),
                        );
                    },
                    mu = ({ children: e, component: t, props: n = {} }) => (t ? i().createElement(t, n, e) : e || null),
                    pu = 'Tab_base_dd',
                    bu = 'Tab_base__first_4a',
                    gu = 'Tab_base__last_96',
                    Eu = 'Tab_base__medium_ec',
                    hu = 'Tab_base__active_5d',
                    vu = 'Tab_divider_ca',
                    fu = 'Tab_divider__show_62',
                    Cu = 'Tab_state_6c',
                    Au = 'Tab_stateHighlight_1e',
                    Du = 'Tab_stateBorder_64',
                    Fu = 'Tab_stateBorder__positionLeft_e7',
                    Su = 'Tab_stateBorder__positionRight_db',
                    yu = 'Tab_counter_e1',
                    Bu = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const ku = (0, o.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            s = void 0 !== a && a,
                            u = e.isLast,
                            r = void 0 !== u && u,
                            o = e.isMedium,
                            l = void 0 !== o && o,
                            _ = e.isNotified,
                            d = void 0 !== _ && _,
                            m = e.children,
                            p = void 0 === m ? 'Tab' : m,
                            b = e.wrapper,
                            g = void 0 === b ? {} : b,
                            E = e.counter,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                return s;
                            })(e, Bu);
                        return i().createElement(
                            mu,
                            g,
                            i().createElement(
                                'div',
                                wu({ className: c()(pu, { [hu]: n }, { [bu]: s }, { [gu]: r }, { [Eu]: l }) }, h),
                                i().createElement(
                                    'span',
                                    { className: Cu },
                                    i().createElement('span', { className: Au }),
                                    i().createElement('span', { className: c()(Du, Fu) }),
                                    i().createElement('span', { className: c()(Du, Su) }),
                                ),
                                p,
                                !r && !n && i().createElement('span', { className: c()(vu, fu) }),
                                (Boolean(E) || d) &&
                                    i().createElement(
                                        'div',
                                        { className: yu },
                                        i().createElement(re, { value: E, isEmpty: d }),
                                    ),
                            ),
                        );
                    }),
                    xu = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    Tu = ['name', 'newItemsCount', 'handleTabChanged', 'isTooltipEnabled'];
                function Iu() {
                    return (
                        (Iu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Iu.apply(this, arguments)
                    );
                }
                const Nu = (e) => {
                    let t = e.name,
                        n = e.newItemsCount,
                        a = e.handleTabChanged,
                        s = e.isTooltipEnabled,
                        u = void 0 === s || s,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, Tu);
                    const l = R.strings.tank_setup.tabs.$dyn(t),
                        c = (0, o.useCallback)(() => {
                            (Ce.$.playClick(), a({ name: t }));
                        }, [a, t]),
                        _ = (0, o.useMemo)(() => ({ name: t }), [t]),
                        d = L(['tab'], xu);
                    return i().createElement(
                        vn.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: u,
                        },
                        i().createElement(
                            'div',
                            null,
                            i().createElement(
                                ku,
                                Iu({}, r, { isNotified: Boolean(n), onClick: c }),
                                i().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                };
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Ou = ({ tabs: e, selectedTabName: t, handleTabChanged: n, isTooltipEnabled: a = !0 }) => {
                        const s = bs('ModernizedSetupTabHintZone', ps);
                        return (
                            (0, o.useEffect)(() => {
                                s && s.runTrigger(!0);
                            }, [s]),
                            i().createElement(
                                du,
                                { key: t, activeKey: t },
                                i().createElement(
                                    'div',
                                    { 'tabs-role': iu.LIST },
                                    Da.UI(e, (e) =>
                                        i().createElement(
                                            Nu,
                                            Ru(
                                                {
                                                    key: e.name,
                                                    handleTabChanged: n,
                                                    'tabs-role': iu.TAB,
                                                    'tab-key': e.name,
                                                    isTooltipEnabled: a,
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    Lu = {
                        base: 'Header_base_fb',
                        base__small: 'Header_base__small_d1',
                        base__medium: 'Header_base__medium_66',
                        base__large: 'Header_base__large_63',
                        base__huge: 'Header_base__huge_45',
                        title: 'Header_title_64',
                        title__small: 'Header_title__small_fc',
                        title__tiny: 'Header_title__tiny_8e',
                        tabs: 'Header_tabs_73',
                        tabs__small: 'Header_tabs__small_5f',
                        tabs__tiny: 'Header_tabs__tiny_35',
                    },
                    Mu = ({ title: e, children: t, tabProps: n }) => {
                        const a = (0, Pn.GS)();
                        return i().createElement(
                            'div',
                            { className: c()(Lu.base, a && Lu[`base__${a}`]) },
                            i().createElement(
                                'div',
                                null,
                                i().createElement('div', { className: c()(Lu.title, a && Lu[`title__${a}`]) }, e),
                                n &&
                                    i().createElement(
                                        'div',
                                        { className: c()(Lu.tabs, a && Lu[`tabs__${a}`]) },
                                        i().createElement(Ou, n),
                                    ),
                            ),
                            t,
                        );
                    },
                    Pu = (e, t, n) => (n < e ? e : n > t ? t : n);
                function $u(e, t, n = []) {
                    const a = (0, o.useRef)(0),
                        s = (0, o.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, o.useEffect)(() => s, [s]);
                    const u = (null != n ? n : []).concat([t]);
                    return [
                        (0, o.useCallback)((n) => {
                            ((a.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, u),
                        s,
                    ];
                }
                function zu(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Hu(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Hu(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Hu(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function ju(e, t, n) {
                    const a = (0, o.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let s,
                                    u = !1,
                                    r = 0;
                                function o() {
                                    s && clearTimeout(s);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - r;
                                    function _() {
                                        ((r = Date.now()), n.apply(l, i));
                                    }
                                    u ||
                                        (a && !s && _(),
                                        o(),
                                        void 0 === a && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (s = setTimeout(
                                                  a
                                                      ? function () {
                                                            s = void 0;
                                                        }
                                                      : _,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                    (i.cancel = function () {
                                        (o(), (u = !0));
                                    }),
                                    i
                                );
                            })(n, e),
                        t,
                    );
                    return ((0, o.useEffect)(() => a.cancel, [a]), a);
                }
                var Wu = n(7030);
                let Gu;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Gu || (Gu = {}));
                const Uu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Zu = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: s,
                        forceTriggerMouseMove: u,
                    }) => {
                        const r = (e, n) => {
                            const a = t(e),
                                s = a[0],
                                u = a[1];
                            return u <= s ? 0 : Pu(s, u, n);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Uu : l,
                                _ = (0, o.useRef)(null),
                                d = (0, o.useRef)(null),
                                m = (0, o.useRef)(!1),
                                p = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        s = (e, ...n) => {
                                            for (var a, s = zu(t(e).values()); !(a = s()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, o.useMemo)(() => ({ on: n, off: a, trigger: s }), []);
                                })(),
                                b = ju(
                                    () => {
                                        u && u();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Wu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (n(t, e), p.trigger('change', e), u && m.current && b());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                E = g[0],
                                h = g[1],
                                v = (0, o.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const s = E.scrollPosition.get(),
                                            u = (null != (a = E.scrollPosition.goal) ? a : 0) - s;
                                        return r(e, t * n + u + s);
                                    },
                                    [E.scrollPosition],
                                ),
                                f = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            h.start({
                                                scrollPosition: r(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: r(a, E.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, E.scrollPosition],
                                ),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            n = d.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            u = v(t, e, a);
                                        f(u);
                                    },
                                    [f, v, c.step],
                                ),
                                A = (0, o.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(a(e)),
                                            _.current && p.trigger('mouseWheel', e, E.scrollPosition, t(_.current)));
                                    },
                                    [E.scrollPosition, C, p],
                                ),
                                D = M(
                                    () =>
                                        (0, w.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (f(r(e, E.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [f, E.scrollPosition.goal],
                                ),
                                F = (0, x.z)(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = r(e, E.scrollPosition.goal);
                                    (t !== E.scrollPosition.goal && f(t, { immediate: !0 }),
                                        p.trigger('recalculateContent'));
                                });
                            ((0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            ),
                                (0, o.useEffect)(() => {
                                    const e = _.current;
                                    if (!e || !u) return;
                                    const t = () => {
                                            m.current = !0;
                                        },
                                        n = () => {
                                            m.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', n),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', n));
                                        }
                                    );
                                }, [_]));
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? s(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: r,
                                    handleMouseWheel: A,
                                    applyScroll: f,
                                    applyStepTo: C,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: h,
                                    animationScroll: E,
                                    recalculateContent: F,
                                    events: { on: p.on, off: p.off },
                                }),
                                [E.scrollPosition, f, C, p.off, p.on, F, A, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Vu = Zu({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            var n;
                            e.style.transform = `translateX(-${0 | (null != (n = t.value.scrollPosition) ? n : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Gu.Next : Gu.Prev),
                        forceTriggerMouseMove: u.O.view.forceTriggerMouseMove,
                    }),
                    qu = 'HorizontalBar_base_49',
                    Xu = 'HorizontalBar_base__active_5e',
                    Ku = 'HorizontalBar_leftButton_5f',
                    Yu = 'HorizontalBar_rightButton_03',
                    Ju = 'HorizontalBar_track_0d',
                    Qu = 'HorizontalBar_thumb_fd',
                    er = 'HorizontalBar_rail_32',
                    tr = 'disable',
                    nr = { pending: !1, offset: 0 },
                    ar = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    sr = () => {},
                    ur = (e, t) => Math.max(20, e.offsetWidth * t),
                    rr = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ar, onDrag: a = sr }) => {
                        const s = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            p = (0, o.useState)(nr),
                            b = p[0],
                            g = p[1],
                            E = (0, o.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [a],
                            ),
                            h = () => {
                                const t = _.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / s),
                                    i = Pu(0, 1, u / (s - a)),
                                    c = (t.offsetWidth - ur(t, o)) * i;
                                ((n.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (r.current && l.current && _.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    r.current.classList.add(tr),
                                                    void l.current.classList.remove(tr)
                                                );
                                            if (
                                                ((t = _.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(tr),
                                                    void l.current.classList.add(tr)
                                                );
                                            var t, n;
                                            (r.current.classList.remove(tr), l.current.classList.remove(tr));
                                        }
                                    })(c));
                            },
                            v = (0, x.z)(() => {
                                ((() => {
                                    const t = d.current,
                                        n = _.current,
                                        a = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && a && n)) return;
                                    const r = Math.min(1, a / u);
                                    ((t.style.width = `${ur(n, r)}px`),
                                        (t.style.display = 'flex'),
                                        s.current &&
                                            (1 !== r ? s.current.classList.add(Xu) : s.current.classList.remove(Xu)));
                                })(),
                                    h());
                            });
                        ((0, o.useEffect)(() => (0, w.v)(v)),
                            (0, o.useEffect)(
                                () =>
                                    (0, w.v)(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = sr;
                                        const a = () => {
                                            (n(), (n = (0, w.v)(v)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', v),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (n(),
                                                    e.events.off('recalculateContent', v),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!b.pending) return;
                                const t = u.O.client.events.mouse.move(([t, n]) => {
                                        var s;
                                        const u = e.contentRef.current,
                                            r = e.wrapperRef.current;
                                        if (!u || !r) return;
                                        const o = _.current,
                                            i = d.current;
                                        if (!o || !i) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - b.offset - o.getBoundingClientRect().x,
                                            c = (l / o.offsetWidth) * (null != (s = e.getContainerSize()) ? s : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c }));
                                    }),
                                    n = u.O.client.events.mouse.up(() => {
                                        (t(), E(nr));
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, b.offset, b.pending, a, E]));
                        const f = $u((t) => e.applyStepTo(t), m, [e]),
                            C = f[0],
                            A = f[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const D = (e) => {
                            e.target.classList.contains(tr) || (0, Ce.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: c()(qu, t.base), ref: s, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: c()(Ku, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(tr) ||
                                        0 !== e.button ||
                                        ((0, Ce.G)('play'), C(Gu.Next));
                                },
                                onMouseUp: A,
                                ref: r,
                                onMouseEnter: D,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: c()(Ju, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, Ce.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = d.current,
                                                        s = e.contentRef.current;
                                                    if (!a || !s) return;
                                                    const u = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Gu.Prev : Gu.Next);
                                            }
                                    },
                                    ref: _,
                                    onMouseEnter: D,
                                },
                                i().createElement('div', { ref: d, className: c()(Qu, t.thumb) }),
                                i().createElement('div', { className: c()(er, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: c()(Yu, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(tr) ||
                                        0 !== e.button ||
                                        ((0, Ce.G)('play'), C(Gu.Prev));
                                },
                                onMouseUp: A,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    or = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ir = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        classNames: u,
                        scrollClassName: r,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(or.base, e.base) });
                            }, [a]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: c()(or.defaultScroll, n), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: c()(or.defaultScrollArea, s) },
                                i().createElement(lr, { className: r, api: m, classNames: u }, e),
                            ),
                            i().createElement(rr, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    lr = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, o.useEffect)(() => (0, w.v)(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: c()(or.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: c()(or.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: c()(or.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((lr.Bar = rr), (lr.Default = ir));
                const cr = Zu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Gu.Next : Gu.Prev),
                    }),
                    _r = 'VerticalBar_base_f3',
                    dr = 'VerticalBar_base__active_72',
                    mr = 'VerticalBar_topButton_d7',
                    pr = 'VerticalBar_bottomButton_06',
                    br = 'VerticalBar_track_df',
                    gr = 'VerticalBar_thumb_32',
                    Er = 'VerticalBar_rail_43',
                    hr = 'disable',
                    vr = () => {},
                    fr = { pending: !1, offset: 0 },
                    Cr = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ar = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Dr = (e, t) => Math.max(20, e.offsetHeight * t),
                    Fr = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Cr, onDrag: a = vr }) => {
                        const s = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            p = (0, o.useState)(fr),
                            b = p[0],
                            g = p[1],
                            E = (0, o.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [a],
                            ),
                            h = (0, x.z)(() => {
                                const t = d.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = Math.min(1, a / u);
                                return (
                                    (t.style.height = `${Dr(n, r)}px`),
                                    (t.style.display = 'flex'),
                                    s.current &&
                                        (1 !== r ? s.current.classList.add(dr) : s.current.classList.remove(dr)),
                                    r
                                );
                            }),
                            v = (0, x.z)(() => {
                                const t = _.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / s),
                                    i = Pu(0, 1, u / (s - a)),
                                    c = (t.offsetHeight - Dr(t, o)) * i;
                                ((n.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (r.current && l.current && _.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    r.current.classList.add(hr),
                                                    void l.current.classList.remove(hr)
                                                );
                                            if (
                                                ((t = _.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(hr),
                                                    void l.current.classList.add(hr)
                                                );
                                            var t, n;
                                            (r.current.classList.remove(hr), l.current.classList.remove(hr));
                                        }
                                    })(c));
                            }),
                            f = (0, x.z)(() => {
                                Ar(e, () => {
                                    (h(), v());
                                });
                            });
                        ((0, o.useEffect)(() => (0, w.v)(f)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    Ar(e, () => {
                                        v();
                                    });
                                };
                                let n = vr;
                                const a = () => {
                                    (n(), (n = (0, w.v)(f)));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (n(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!b.pending) return;
                                const t = u.O.client.events.mouse.up(() => {
                                        E(fr);
                                    }),
                                    n = u.O.client.events.mouse.move(([t]) => {
                                        Ar(e, (n) => {
                                            const s = _.current,
                                                u = d.current,
                                                r = e.getContainerSize();
                                            if (!s || !u || !r) return;
                                            const o = t.screenY - b.offset - s.getBoundingClientRect().y,
                                                i = (o / s.offsetHeight) * r;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: u, thumbOffset: o, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, b.offset, b.pending, a, E]));
                        const C = $u((t) => e.applyStepTo(t), m, [e]),
                            A = C[0],
                            D = C[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const F = (e) => {
                            e.target.classList.contains(hr) || (0, Ce.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: c()(_r, t.base), ref: s, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: c()(mr, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(hr) ||
                                        0 !== e.button ||
                                        ((0, Ce.G)('play'), A(Gu.Next));
                                },
                                ref: r,
                                onMouseEnter: F,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: c()(br, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, Ce.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Ar(e, (a) => {
                                                            if (!a) return;
                                                            const s = n(e),
                                                                u = e.clampPosition(a, a.scrollTop + s * t);
                                                            e.applyScroll(u);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Gu.Prev : Gu.Next);
                                            }
                                    },
                                    ref: _,
                                    onMouseEnter: F,
                                },
                                i().createElement('div', { ref: d, className: c()(gr, t.thumb) }),
                                i().createElement('div', { className: c()(Er, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: c()(pr, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(hr) ||
                                        0 !== e.button ||
                                        ((0, Ce.G)('play'), A(Gu.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    Sr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    yr = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        scrollClassName: u,
                        scrollClassNames: r,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(Sr.base, e.base) });
                            }, [a]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: c()(Sr.defaultScroll, n), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: c()(Sr.area, s) },
                                i().createElement(Br, { className: u, classNames: r, api: m }, e),
                            ),
                            i().createElement(Fr, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    Br = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, o.useEffect)(() => (0, w.v)(a.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: c()(Sr.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: c()(Sr.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                Br.Default = yr;
                const wr = { Vertical: s, Horizontal: a };
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                ('undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent));
                const kr = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            a = t.height;
                        return 0 !== n && 0 !== a;
                    },
                    xr = (e) => {
                        const t = (0, o.useState)(kr(e ? e.current : null)),
                            n = t[0],
                            a = t[1];
                        return (
                            (0, o.useEffect)(() => {
                                let t = 0;
                                const n = () => {
                                    t = requestAnimationFrame(() => {
                                        kr(e ? e.current : null) ? a(!0) : n();
                                    });
                                };
                                return (
                                    n(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => () => a(!1), [e]),
                            n
                        );
                    },
                    Tr = 'ScrollableCards_base_e0',
                    Ir = 'ScrollableCards_scroll_4b',
                    Nr = ({ children: e, selectedSlotId: t, scrollAreaKey: n = 'area', updateKey: a = null }) => {
                        const s = (0, o.useState)(!1),
                            u = s[0],
                            r = s[1],
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            _ = (0, o.useRef)(!1),
                            d = (0, o.useRef)(''),
                            m = xr(l),
                            p = cr();
                        (0, o.useEffect)(
                            () => () => {
                                _.current = !1;
                            },
                            [],
                        );
                        const b = (0, x.z)(() => {
                                (_.current && r(!0), p.events.off('rest', b));
                            }),
                            g = (0, o.useCallback)(() => {
                                _.current && r(!1);
                            }, []),
                            E = (0, o.useCallback)(() => {
                                const e = c.current,
                                    t = l.current;
                                if (e && p && t) {
                                    const n = e.offsetTop + (e.offsetHeight - t.offsetHeight);
                                    (p.events.on('rest', b), p.applyScroll(n));
                                }
                            }, [b, p]);
                        ((0, o.useEffect)(() => {
                            (0, w.v)(() => {
                                m &&
                                    (d.current === n
                                        ? E()
                                        : ((d.current = n),
                                          new Promise((e) => {
                                              requestAnimationFrame(() => {
                                                  requestAnimationFrame(() => {
                                                      e();
                                                  });
                                              });
                                          }).then(() => {
                                              (E(), _.current || (_.current = !0));
                                          })));
                            });
                        }, [m, n, E, t]),
                            (0, o.useEffect)(() => {
                                _.current && p.applyScroll(0);
                            }, [p, a]));
                        const h = {
                            currentCardRef: c,
                            scrollWrapperRef: l,
                            isFinalAnimationRunning: u,
                            onFinalAnimationDone: g,
                        };
                        return i().createElement(
                            'div',
                            { className: Tr },
                            i().createElement(
                                'div',
                                { className: Ir, ref: l },
                                i().createElement(wr.Vertical.Default, { key: n, api: p }, (0, o.cloneElement)(e, h)),
                            ),
                        );
                    };
                function Rr() {
                    return (
                        (Rr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Rr.apply(this, arguments)
                    );
                }
                const Or = (0, k.Pi)(({ compare: e = !1 }) => {
                        const t = Rn(),
                            n = t.model,
                            a = t.controls,
                            s = (0, Pn.GS)(),
                            u = n.ammunitionPanel.get().selectedSlot,
                            r = n.boosters.tabs.get(),
                            o = n.computes.boosters.length();
                        return i().createElement(Pn.Ar, {
                            compare: e,
                            header: e
                                ? i().createElement(Js, { type: ne.G$ }, () =>
                                      i().createElement(
                                          Ou,
                                          Rr({}, r, { handleTabChanged: a.boosters.changeTab, isTooltipEnabled: !1 }),
                                      ),
                                  )
                                : i().createElement(Mu, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabProps: Object.assign({}, r, {
                                          handleTabChanged: a.boosters.changeTab,
                                          isTooltipEnabled: !1,
                                      }),
                                  }),
                            content: i().createElement(
                                Nr,
                                { selectedSlotId: u, scrollAreaKey: r.selectedTabName, updateKey: o },
                                i().createElement(Ja, { compare: e, type: ne.G$, cardsAmount: o }),
                            ),
                            footer:
                                !e &&
                                i().createElement(Mn.w, {
                                    withConfirmation: !0,
                                    renewalType: Ln.my.Boosters,
                                    parentModelPath: 'model.tankSetup.battleBoostersSetup',
                                    onDealConfirmed: a.boosters.confirmDeal,
                                    onDealCancelled: a.boosters.cancelDeal,
                                    onAutoRenewalChanged: (e) => a.boosters.changeAutoRenewal(e),
                                    mediaSize: s,
                                }),
                        });
                    }),
                    Lr = (0, k.Pi)(({ compare: e = !1 }) => {
                        const t = (0, Pn.GS)(),
                            n = Rn(),
                            a = n.model,
                            s = n.controls,
                            u = a.ammunitionPanel.get().selectedSlot,
                            r = a.computes.consumables.length(e, t);
                        return i().createElement(Pn.Ar, {
                            header: e
                                ? i().createElement(Js, { type: ne.mH })
                                : i().createElement(Mu, { title: R.strings.tank_setup.section.consumables() }),
                            content: i().createElement(
                                Nr,
                                { selectedSlotId: u },
                                i().createElement(Ja, { compare: e, cardsAmount: r, type: ne.mH }),
                            ),
                            footer:
                                !e &&
                                i().createElement(Mn.w, {
                                    withConfirmation: !0,
                                    renewalType: Ln.my.Consumables,
                                    mediaSize: t,
                                    parentModelPath: 'model.tankSetup.consumablesSetup',
                                    onDealConfirmed: s.consumables.confirmDeal,
                                    onDealCancelled: s.consumables.cancelDeal,
                                    onAutoRenewalChanged: s.consumables.changeAutoRenewal,
                                }),
                            compare: e,
                        });
                    });
                function Mr() {
                    return (
                        (Mr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Mr.apply(this, arguments)
                    );
                }
                const Pr = (0, k.Pi)(({ compare: e, hasIntroduction: t }) => {
                        const n = Rn(),
                            a = n.model,
                            s = n.controls,
                            u = a.optDevices.tabs.get(),
                            r = u.tabs.length > 1;
                        return e
                            ? i().createElement(Js, { type: ne.zn, withContent: !0 }, (n) => {
                                  if (!r) return null;
                                  const a = e && !t && n <= 4,
                                      o = (function (e, t) {
                                          return t ? Da.hX(e, (e) => 'modernized' !== e.name) : e;
                                      })(u.tabs, a);
                                  return i().createElement(
                                      Ou,
                                      Mr({}, Object.assign({}, u, { tabs: o }), {
                                          handleTabChanged: s.optDevices.changeTab,
                                      }),
                                  );
                              })
                            : i().createElement(
                                  Mu,
                                  {
                                      title: R.strings.tank_setup.section.optDevices(),
                                      tabProps: r
                                          ? Object.assign({}, u, { handleTabChanged: s.optDevices.changeTab })
                                          : void 0,
                                      tabs:
                                          r &&
                                          i().createElement(
                                              Ou,
                                              Mr({}, u, { handleTabChanged: s.optDevices.changeTab }),
                                          ),
                                  },
                                  i().createElement(Xs, { compare: e }),
                              );
                    }),
                    $r = {
                        base: 'Introduction_base_0e',
                        base__enter: 'Introduction_base__enter_93',
                        base__enterActive: 'Introduction_base__enterActive_e5',
                        base__exit: 'Introduction_base__exit_74',
                        base__exitActive: 'Introduction_base__exitActive_4e',
                        introduction: 'Introduction_introduction_b1',
                        image: 'Introduction_image_78',
                        base__large: 'Introduction_base__large_30',
                        base__huge: 'Introduction_base__huge_51',
                        image__deluxe: 'Introduction_image__deluxe_b6',
                        image__deluxeLarge: 'Introduction_image__deluxeLarge_ce',
                        image__trophy: 'Introduction_image__trophy_1f',
                        image__trophyLarge: 'Introduction_image__trophyLarge_58',
                        image__modernized: 'Introduction_image__modernized_f6',
                        image__modernizedLarge: 'Introduction_image__modernizedLarge_d7',
                        description: 'Introduction_description_f2',
                        title: 'Introduction_title_74',
                        message: 'Introduction_message_d3',
                        currency: 'Introduction_currency_60',
                        icon: 'Introduction_icon_0d',
                        'icon__currency-deluxe': 'Introduction_icon__currency-deluxe_5e',
                        'icon__currency-modernized': 'Introduction_icon__currency-modernized_09',
                    };
                var zr = n(280);
                const Hr = ({ introType: e }) => {
                        const t = c()($r.icon, $r[`icon__currency-${e}`]),
                            n = (0, o.useMemo)(
                                () => ({
                                    currencyName: i().createElement(
                                        'span',
                                        { className: $r.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: i().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            a = R.strings.tank_setup.introduction.message.$dyn(e);
                        return a ? i().createElement(zr.z, { binding: n, text: a, classMix: $r.message }) : null;
                    },
                    jr = (0, k.Pi)(() => {
                        const e = (0, Pn.GS)(),
                            t = e === Pn.cJ.Large || e === Pn.cJ.Huge,
                            n = (0, o.useState)(!0),
                            a = n[0],
                            s = n[1],
                            u = (0, On.t)(),
                            r = u.model,
                            l = u.controls,
                            _ = r.optDevices.setup.get().introductionType,
                            d = r.computes.optDevices.slotsLength() > 0,
                            m = (0, o.useCallback)(() => {
                                s(!1);
                            }, []),
                            p = (0, o.useCallback)(() => {
                                (l.introPassed(), s(!0));
                            }, [l]),
                            b = (0, o.useMemo)(
                                () => ({
                                    enter: $r.base__enter,
                                    enterActive: $r.base__enterActive,
                                    exit: $r.base__exit,
                                    exitActive: $r.base__exitActive,
                                }),
                                [],
                            ),
                            g = d
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(_)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(_);
                        return i().createElement(
                            K.Z,
                            { in: a, classNames: b, timeout: 300, onExited: p },
                            i().createElement(
                                'div',
                                { className: c()($r.base, e && $r[`base__${e}`]), id: 'introduction' },
                                i().createElement(
                                    'div',
                                    { className: $r.introduction },
                                    i().createElement('div', {
                                        className: c()($r.image, t ? $r[`image__${_}Large`] : $r[`image__${_}`]),
                                    }),
                                    i().createElement(
                                        'div',
                                        { className: $r.description },
                                        i().createElement('div', { className: $r.title }, g),
                                        i().createElement(Hr, { introType: _ }),
                                    ),
                                    d &&
                                        i().createElement(
                                            Hs.u5,
                                            { type: Hs.L$.secondary, size: Hs.qE.medium, onClick: m },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Wr = 'OptDevicesSetup_intro_ae',
                    Gr = 'OptDevicesSetup_footer_e6',
                    Ur = (0, k.Pi)(({ compare: e = !1 }) => {
                        const t = (0, Pn.GS)(),
                            n = Rn().model,
                            a = (0, On.t)().controls,
                            s = n.ammunitionPanel.get().selectedSlot,
                            u = n.optDevices.setup.get().withIntroduction,
                            r = n.computes.optDevices.slotsLength(),
                            o = n.optDevices.filter.get().selectedFilterCount,
                            l = n.optDevices.tabs.get().selectedTabName,
                            c = n.computes.optDevices.slotsLength();
                        return i().createElement(Pn.Ar, {
                            compare: e,
                            header: i().createElement(Pr, { compare: e, hasIntroduction: u }),
                            content:
                                !e && u
                                    ? i().createElement(
                                          'div',
                                          { className: Wr },
                                          i().createElement(Ja, {
                                              compare: !1,
                                              type: ne.zn,
                                              cardsAmount: c,
                                              isDisabled: !0,
                                          }),
                                          i().createElement(jr, null),
                                      )
                                    : i().createElement(
                                          Nr,
                                          { selectedSlotId: s, scrollAreaKey: l, updateKey: `${o}:${r}` },
                                          i().createElement(Ja, {
                                              compare: e,
                                              type: ne.zn,
                                              cardsAmount: c,
                                              isDisabled: u,
                                          }),
                                      ),
                            footer:
                                !e &&
                                i().createElement(
                                    'div',
                                    { className: Gr },
                                    i().createElement(Mn.w, {
                                        withConfirmation: !0,
                                        parentModelPath: 'model.tankSetup.optDevicesSetup',
                                        mediaSize: t,
                                        onDealConfirmed: a.optDevices.confirmDeal,
                                        onDealCancelled: a.optDevices.cancelDeal,
                                        onAutoRenewalChanged: a.optDevices.changeAutoRenewal,
                                    }),
                                ),
                        });
                    });
                let Zr, Vr, qr, Xr;
                (!(function (e) {
                    ((e.Stereoscope = 'stereoscope'),
                        (e.Turbocharger = 'turbocharger'),
                        (e.EnhancedAimDrives = 'enhancedAimDrives'),
                        (e.CommandersView = 'commandersView'),
                        (e.Grousers = 'grousers'),
                        (e.AdditInvisibilityDevice = 'additionalInvisibilityDevice'),
                        (e.RadioCommunication = 'improvedRadioCommunication'),
                        (e.AntifragmentationLining = 'antifragmentationLining'),
                        (e.CamouflageNet = 'camouflageNet'),
                        (e.RotationMechanism = 'improvedRotationMechanism'),
                        (e.Ventilation = 'improvedVentilation'),
                        (e.HealthReserve = 'extraHealthReserve'),
                        (e.ImprovedSights = 'improvedSights'),
                        (e.Rammer = 'tankRammer'),
                        (e.CoatedOptics = 'coatedOptics'),
                        (e.AimingStabilizer = 'aimingStabilizer'),
                        (e.ImprovedConfiguration = 'improvedConfiguration'),
                        (e.ModernizedExtraHealthReserveAntifragmentationLining =
                            'modernizedExtraHealthReserveAntifragmentationLining'),
                        (e.ModernizedTurbochargerRotationMechanism = 'modernizedTurbochargerRotationMechanism'),
                        (e.ModernizedAimDrivesAimingStabilizer = 'modernizedAimDrivesAimingStabilizer'),
                        (e.ModernizedImprovedSightsEnhancedAimDrives = 'modernizedImprovedSightsEnhancedAimDrives'),
                        (e.Empty = ''));
                })(Zr || (Zr = {})),
                    (function (e) {
                        ((e.Visible = 'visible'),
                            (e.Hidden = 'hidden'),
                            (e.NotSuitableVehicle = 'notSuitableVehicle'),
                            (e.NoDataAtAll = 'noDataAtAll'));
                    })(Vr || (Vr = {})),
                    (function (e) {
                        ((e[(e.NoData = 0)] = 'NoData'),
                            (e[(e.Normal = 1)] = 'Normal'),
                            (e[(e.Linked = 2)] = 'Linked'),
                            (e[(e.Combined = 3)] = 'Combined'));
                    })(qr || (qr = {})),
                    (function (e) {
                        ((e.Unknown = 'unknown'), (e.Random = 'random'), (e.Comp7 = 'comp7'));
                    })(Xr || (Xr = {})));
                var Kr = n(5344),
                    Yr = n(5959),
                    Jr = n(8045);
                const Qr = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                let eo, to, no;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(eo || (eo = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(to || (to = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(no || (no = {})));
                const ao = { [no.NBSP]: eo.NoBreakSymbol, [no.ZWNBSP]: eo.NoBreakSymbol, [no.NEW_LINE]: eo.LineBreak },
                    so = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    uo = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    ro = 'renderers_noBreakWrapper_10',
                    oo = 'renderers_lineBreak_b5',
                    io = 'renderers_newLine_bd',
                    lo = 'renderers_word_f3',
                    co = (e) => ({ color: `#${e}` }),
                    _o = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? uo[a]
                                ? i().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: c()(lo, uo[a]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: lo, style: co(a) },
                                      e,
                                  )
                            : i().createElement('span', { key: n, 'data-block-type': t.blockType, className: lo }, e);
                    },
                    mo = {
                        [eo.Word]: _o,
                        [eo.NoBreakSymbol]: _o,
                        [eo.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            i().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: n }, e)),
                            ),
                        [eo.LineBreak]: ({ key: e }) =>
                            i().createElement('span', { key: e, 'data-block-type': eo.LineBreak, className: oo }),
                        [eo.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement('span', { key: t, 'data-block-type': eo.NewLine, className: io }, e),
                        [eo.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': eo.NoBreakWrapper, className: ro },
                                e,
                            ),
                    },
                    po = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((s, u) => {
                                const r = `${n}_${u}`;
                                if (((e) => void 0 !== e.childList)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        n = po(e, mo[t], r);
                                    a.push(...n);
                                } else a.push(t({ elementList: [s], textBlock: e, key: r }));
                            }),
                            a
                        );
                    },
                    bo = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            s = mo[a],
                                            u = po(e, s, t);
                                        return (
                                            a === eo.NoBreakWrapper
                                                ? n.push(s({ elementList: u, textBlock: e, key: `${t}` }))
                                                : n.push(...u),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    go = (e, t, n, a) => {
                        let s = t.exec(e),
                            u = 0;
                        for (; s; ) (u !== s.index && n(e.slice(u, s.index)), a(s), (u = t.lastIndex), (s = t.exec(e)));
                        u !== e.length && n(e.slice(u));
                    },
                    Eo = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    ho = (e) => {
                        const t = [];
                        return (
                            go(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var n;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((n = e), n.match(Eo) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    vo = so
                        ? (e) => {
                              const t = [];
                              return (
                                  go(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...ho(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const n = /[\s\u002d]/g;
                              let a = n.exec(e);
                              if (!a) return [e];
                              const s = [];
                              let u = 0;
                              for (; a; ) {
                                  const r = t.justifyContent === to.FlexEnd ? a.index : n.lastIndex;
                                  (s.push(e.slice(u, r)), (u = r), (a = n.exec(e)));
                              }
                              return (u !== e.length && s.push(e.slice(u)), s);
                          },
                    fo = (e, t = '', n) => {
                        const a = [];
                        return (
                            go(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: eo.Word, colorTag: t, childList: vo(e, n) });
                                },
                                (e) => {
                                    const n = e[0],
                                        s = ao[n.charAt(0)];
                                    s === eo.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: eo.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: eo.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : a.push({ blockType: s, colorTag: t, childList: [n.replace(/\ufeff+/g, '')] });
                                },
                            ),
                            a
                        );
                    },
                    Co = (e, t, n = '', a) => {
                        const s = [],
                            u = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            go(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    s.push(...fo(e, n, a));
                                },
                                (e) => {
                                    const u = e[1],
                                        r = void 0 === t[u] ? e[0] : t[u];
                                    'string' == typeof r || 'number' == typeof r
                                        ? s.push(...fo(String(r), n, a))
                                        : s.push({ blockType: eo.Binding, colorTag: n, childList: [r] });
                                },
                            ),
                            s
                        );
                    },
                    Ao = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === eo.NoBreakWrapper) (e.childList.push(a), n.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && n.push(e),
                                n.push({ blockType: eo.NoBreakWrapper, colorTag: '', childList: [t, a] }));
                        }
                        return (t.childList.length > 0 && n.push(t), n);
                    },
                    Do = (e, t = {}, n) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === eo.NoBreakSymbol
                                        ? ((n = !0), t.push(...Ao(t.pop(), e)))
                                        : (n ? t.push(...Ao(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, n) => {
                                const a = [];
                                return (
                                    go(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...Co(e, t, '', n));
                                        },
                                        (e) => {
                                            a.push(...Co(e[2] + e[3], t, e[1], n));
                                        },
                                    ),
                                    a
                                );
                            })((0, O.Eg)((0, O.z4)(e)), t, n),
                        );
                        return bo(a);
                    },
                    Fo = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    So = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    yo = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = So(e, t),
                            s = e.textContent.length,
                            u = e.offsetWidth / s,
                            r = Math.ceil(a / u);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / u);
                            return a >= n ? [!0, n + r] : [!1, a];
                        }
                        const o = Math.max(n + r, 0);
                        return s < o ? [!1, 0] : [!0, o];
                    },
                    Bo = (e, t, n, a, s, u) => {
                        let r = -1,
                            o = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === eo.LineBreak || c === eo.NewLine || c === eo.Binding) continue;
                            const _ = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = yo(n, a, s),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (s -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + u,
                                    p = t[l];
                                ((o = i().cloneElement(p, p.props, m)), (r = l));
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = Bo(e, d, e.length - 1, a, s, u),
                                    p = m[0],
                                    b = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    ((o = i().cloneElement(c, c.props, e, b)), (r = l));
                                    break;
                                }
                                s -= _.length;
                            }
                        }
                        return [r, o];
                    },
                    wo = (e, t, n, a = '...') => {
                        const s = [...t],
                            u = e.current;
                        if (!u) return [s, !1];
                        const r = n.height,
                            o = n.width,
                            i = u.lastElementChild;
                        if (!Fo(i, r) && So(i, o) <= 0) return [s, !1];
                        const l = u.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const s = n + Math.ceil(0.5 * (a - n));
                                    Fo(e[s], t) ? (a = s - 1) : (n = s + 1);
                                }
                                return n - 1;
                            })(l, r);
                        if (c < 0) return [s, !1];
                        const _ = Bo(l, s, c, o, a.length, a),
                            d = _[0],
                            m = _[1];
                        return (m && (s.splice(d, 1, m), s.splice(d + 1)), [s, !0]);
                    },
                    ko = i().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: s = !1,
                            isTruncationAvailable: u = !1,
                            customTooltipArgs: r,
                            targetId: l,
                            justifyContent: _ = to.FlexStart,
                            alignContent: d = to.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const p = (0, o.useRef)(null),
                                b = (0, o.useRef)({ height: 0, width: 0 }),
                                g = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                E = g[0],
                                h = g[1],
                                v = (0, o.useMemo)(() => Do(e, a, { justifyContent: _ }), [a, _, e]),
                                f = (0, o.useMemo)(() => {
                                    if (
                                        s &&
                                        E.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, r, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, s, l, e, r, E.isTruncated]),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        ((b.current.width = e.contentRect.width),
                                            (b.current.height = e.contentRect.height));
                                        const t = wo(p, v, b.current, m),
                                            a = t[0],
                                            s = t[1];
                                        (h({ elementList: a, isTruncated: s, isTruncateFinished: !0 }), n && n(s));
                                    },
                                    [n, m, v],
                                ),
                                A = (0, o.useMemo)(() => ({ justifyContent: _, alignContent: d }), [d, _]);
                            return (
                                ((e, t, n = !0) => {
                                    const a = (0, o.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, o.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new Jr.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(p, C, u),
                                i().createElement(
                                    'div',
                                    {
                                        className: c()(
                                            Qr.base,
                                            t,
                                            Qr.base__zeroPadding,
                                            u && Qr.base__isTruncationAvailable,
                                        ),
                                        style: A,
                                    },
                                    i().createElement('div', { className: Qr.unTruncated, ref: p }, v),
                                    i().createElement(
                                        Cn,
                                        {
                                            tooltipArgs: f,
                                            className: c()(
                                                Qr.tooltip,
                                                Qr[`tooltip__justify-${_}`],
                                                Qr[`tooltip__align-${d}`],
                                            ),
                                        },
                                        i().createElement(
                                            'div',
                                            {
                                                className: c()(
                                                    Qr.truncated,
                                                    !E.isTruncateFinished && u && Qr.truncated__hide,
                                                ),
                                                style: A,
                                            },
                                            E.isTruncateFinished && u ? E.elementList : v,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    xo = {
                        base: 'PopularLoadouts_base_f1',
                        base__hidden: 'PopularLoadouts_base__hidden_2d',
                        base__legendary: 'PopularLoadouts_base__legendary_c4',
                        background: 'PopularLoadouts_background_be',
                        lipsIcon: 'PopularLoadouts_lipsIcon_e0',
                        base__linked: 'PopularLoadouts_base__linked_49',
                        lips: 'PopularLoadouts_lips_ab',
                        base__noDataLegendary: 'PopularLoadouts_base__noDataLegendary_fd',
                        row_empty: 'PopularLoadouts_row_empty_87',
                        noDataLegendary: 'PopularLoadouts_noDataLegendary_74',
                        noData: 'PopularLoadouts_noData_44',
                        vehicleNotAvailable: 'PopularLoadouts_vehicleNotAvailable_a1',
                        noData_text: 'PopularLoadouts_noData_text_d0',
                        vehicleNotAvailable_text: 'PopularLoadouts_vehicleNotAvailable_text_a8',
                        scrollWrapper: 'PopularLoadouts_scrollWrapper_30',
                        scroll: 'PopularLoadouts_scroll_73',
                        onslaughtBackground: 'PopularLoadouts_onslaughtBackground_82',
                        backgroundWrapper: 'PopularLoadouts_backgroundWrapper_4d',
                        backgroundWrapper__noData: 'PopularLoadouts_backgroundWrapper__noData_44',
                        animatedBackground: 'PopularLoadouts_animatedBackground_83',
                        border: 'PopularLoadouts_border_d5',
                        container: 'PopularLoadouts_container_33',
                        row: 'PopularLoadouts_row_8c',
                        row_images: 'PopularLoadouts_row_images_d8',
                        row_images__hovered: 'PopularLoadouts_row_images__hovered_29',
                        row_image: 'PopularLoadouts_row_image_a4',
                        row_emptySlot: 'PopularLoadouts_row_emptySlot_77',
                        popularity: 'PopularLoadouts_popularity_4e',
                        popularity__visible: 'PopularLoadouts_popularity__visible_b7',
                        footer: 'PopularLoadouts_footer_7b',
                        footer_wrapper: 'PopularLoadouts_footer_wrapper_8c',
                        footer_wrapper_title: 'PopularLoadouts_footer_wrapper_title_32',
                        footer_wrapper_pagination: 'PopularLoadouts_footer_wrapper_pagination_71',
                        dot1: 'PopularLoadouts_dot1_6e',
                        dot2: 'PopularLoadouts_dot2_fe',
                        dot1__active: 'PopularLoadouts_dot1__active_25',
                        dot2__active: 'PopularLoadouts_dot2__active_3a',
                        footer_arrowWrapper: 'PopularLoadouts_footer_arrowWrapper_48',
                        footer_arrowLeft: 'PopularLoadouts_footer_arrowLeft_79',
                        footer_arrowRight: 'PopularLoadouts_footer_arrowRight_37',
                    },
                    To = (e) => {
                        return (t = e) !== Zr.Empty &&
                            t in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
                            ? R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices.$dyn(e)
                            : null;
                        var t;
                    },
                    Io = (e) => {
                        const t = Number.isInteger(e) ? `${e}` : e.toFixed(2);
                        return (0, O.dL)(t);
                    },
                    No = ({ popularity: e, optionalDevice: t, isHovered: n }) => {
                        const a = (0, o.useMemo)(() => {
                                const e = t.map(To);
                                return [...e, ...Array.from({ length: 3 - e.length }, () => null)];
                            }, [t]),
                            s = 0 === t.length;
                        return i().createElement(
                            'div',
                            { className: c()(xo.row, s && xo.row_empty) },
                            i().createElement(
                                'div',
                                { className: c()(xo.popularity, n && xo.popularity__visible) },
                                i().createElement(ko, { text: Io(e) }),
                            ),
                            i().createElement(
                                'div',
                                { className: c()(xo.row_images, n && xo.row_images__hovered) },
                                a.map((e, t) =>
                                    e
                                        ? i().createElement('img', { key: t, className: xo.row_image, src: e })
                                        : i().createElement('div', { key: t, className: xo.row_emptySlot }),
                                ),
                            ),
                        );
                    },
                    Ro = (0, k.Pi)(({ isHidden: e = !1 }) => {
                        const t = (0, On.t)(),
                            n = t.model,
                            a = t.controls,
                            s = (0, o.useState)(!0),
                            u = s[0],
                            r = s[1],
                            l = (0, o.useState)(!1),
                            _ = l[0],
                            d = l[1],
                            m = (0, o.useState)(n.selectedPreset.get().mType || Kr.d.Common),
                            p = m[0],
                            b = m[1],
                            g = n.computes.getSortedCommonItems(),
                            E = n.computes.getSortedLegendaryItems(),
                            h = n.optionalDevicesAssistant.get().state,
                            v = h === Vr.NotSuitableVehicle,
                            f = n.computes.getModeType() === Xr.Comp7,
                            C = n.computes.getOptionalDevicesResultTypeForPreset(p),
                            A = n.computes.getSourceVehicleCompDescrForPreset(p),
                            D = () => {
                                const e = p === Kr.d.Common ? Kr.d.Legendary : Kr.d.Common;
                                (b(e), a.onPresetSelected(e));
                            },
                            F = p === Kr.d.Common ? g : E,
                            S =
                                p === Kr.d.Common
                                    ? R.strings.tank_setup.popularLoadouts.common()
                                    : R.strings.tank_setup.popularLoadouts.legendary(),
                            y = C === qr.Linked,
                            B = C === qr.NoData && Kr.d.Legendary,
                            w = h === Vr.NoDataAtAll,
                            k = C === qr.Combined,
                            x = _ && !k,
                            T = y || k,
                            I = cr(),
                            N = (0, o.useRef)(null),
                            O = (0, o.useCallback)(() => {
                                var e;
                                const t = null == (e = N.current) ? void 0 : e.getBoundingClientRect();
                                return t ? `${t.width},${t.height}` : null;
                            }, []);
                        P(
                            O,
                            () => {
                                I.recalculateContent();
                                const e = I.getContainerSize() || 0,
                                    t = I.getWrapperSize() || 0;
                                r(e > t);
                            },
                            { intervalMs: 50, minStableTicks: 8, listenResize: !0 },
                            [],
                        );
                        const L = (0, o.useMemo)(
                            () =>
                                Array.from({ length: 3 }, (e, t) => {
                                    var n;
                                    return null != (n = F[t]) ? n : { popularity: 0, items: [] };
                                }),
                            [F],
                        );
                        return i().createElement(
                            'div',
                            {
                                className: c()(
                                    xo.base,
                                    e && xo.base__hidden,
                                    p === Kr.d.Legendary && xo.base__legendary,
                                    T && xo.base__linked,
                                    B && xo.base__noDataLegendary,
                                ),
                            },
                            i().createElement('div', {
                                className: c()(xo.backgroundWrapper, { [xo.backgroundWrapper__noData]: w || v }),
                            }),
                            v
                                ? i().createElement(
                                      'div',
                                      { className: xo.vehicleNotAvailable },
                                      i().createElement(
                                          'div',
                                          { className: xo.vehicleNotAvailable_text },
                                          R.strings.tank_setup.popularLoadouts.vehicleNotAvailable(),
                                      ),
                                  )
                                : w
                                  ? i().createElement(
                                        'div',
                                        { className: xo.noData },
                                        i().createElement(
                                            'div',
                                            { className: xo.noData_text },
                                            R.strings.tank_setup.popularLoadouts.noData(),
                                        ),
                                    )
                                  : i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement('div', {
                                            className: c()([xo.border, u && xo.border_visible]),
                                        }),
                                        B &&
                                            i().createElement(
                                                'div',
                                                { className: xo.noDataLegendary },
                                                R.strings.tank_setup.popularLoadouts.noDataLegendary(),
                                            ),
                                        i().createElement(
                                            'div',
                                            { className: xo.scrollWrapper },
                                            i().createElement(
                                                wr.Vertical.Default,
                                                { api: I, className: xo.scroll },
                                                i().createElement(
                                                    'div',
                                                    {
                                                        className: xo.container,
                                                        ref: N,
                                                        onMouseEnter: () => d(!0),
                                                        onMouseLeave: () => d(!1),
                                                    },
                                                    L.map((e, t) =>
                                                        i().createElement(No, {
                                                            key: t,
                                                            popularity: e.popularity,
                                                            optionalDevice: e.items,
                                                            isHovered: x,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                            i().createElement('div', { className: xo.background }),
                                            f && i().createElement('div', { className: xo.onslaughtBackground }),
                                        ),
                                        i().createElement('div', { className: xo.border }),
                                        i().createElement('div', { className: xo.lips }),
                                        i().createElement(
                                            'div',
                                            { className: xo.footer },
                                            i().createElement(
                                                'div',
                                                {
                                                    className: xo.footer_arrowWrapper,
                                                    onMouseEnter: () => {
                                                        (0, Yr.playSound)('highlight');
                                                    },
                                                    onClick: () => {
                                                        (0, Yr.playSound)('play');
                                                    },
                                                },
                                                i().createElement('div', {
                                                    className: xo.footer_arrowLeft,
                                                    onClick: D,
                                                }),
                                            ),
                                            i().createElement(
                                                'div',
                                                { className: xo.footer_wrapper },
                                                i().createElement(
                                                    vn.u,
                                                    {
                                                        contentId:
                                                            R.views.lobby.tanksetup.tooltips.PopularLoadoutsTooltip(
                                                                'resId',
                                                            ),
                                                        args: {
                                                            sourceVehicleCompDescr: A,
                                                            optionalDevicesResultType: C,
                                                        },
                                                    },
                                                    i().createElement(
                                                        'div',
                                                        null,
                                                        i().createElement('div', { className: xo.lipsIcon }),
                                                        i().createElement(
                                                            'div',
                                                            { className: xo.footer_wrapper_title },
                                                            S,
                                                        ),
                                                    ),
                                                ),
                                                i().createElement(
                                                    'div',
                                                    { className: xo.footer_wrapper_pagination },
                                                    i().createElement('div', {
                                                        className: c()(xo.dot1, 0 === p && xo.dot1__active),
                                                    }),
                                                    i().createElement('div', {
                                                        className: c()(xo.dot2, 1 === p && xo.dot2__active),
                                                    }),
                                                ),
                                            ),
                                            i().createElement(
                                                'div',
                                                {
                                                    className: xo.footer_arrowWrapper,
                                                    onMouseEnter: () => {
                                                        (0, Yr.playSound)('highlight');
                                                    },
                                                    onClick: () => {
                                                        (0, Yr.playSound)('play');
                                                    },
                                                },
                                                i().createElement('div', {
                                                    className: xo.footer_arrowRight,
                                                    onClick: D,
                                                }),
                                            ),
                                        ),
                                    ),
                        );
                    });
                var Oo = n(9690);
                const Lo = (e, t) => e.split(',').includes(t),
                    Mo = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let Po, $o;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(Po || (Po = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })($o || ($o = {})));
                const zo = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: s,
                        tags: u = '',
                        size: r = Po.extraSmall,
                        type: o = $o.colored,
                        className: l,
                        classNames: _,
                        isShortName: d = !1,
                    }) => {
                        const m = `${(0, O.BN)(a)}${e ? '_elite' : ''}`,
                            p = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return i().createElement(
                            'div',
                            {
                                className: c()(
                                    Mo.base,
                                    Mo[`base__size${(0, O.e)(r)}`],
                                    Mo[`base__type${(0, O.e)(o)}`],
                                    l,
                                ),
                            },
                            i().createElement(
                                'div',
                                { className: c()(Mo.level, null == _ ? void 0 : _.level) },
                                (0, Oo.HG)(s),
                            ),
                            i().createElement('div', {
                                className: c()(
                                    Mo.type,
                                    e && Mo[`type__elite${(0, O.e)(r)}`],
                                    Mo[`type__${r}`],
                                    null == _ ? void 0 : _.typeIcon,
                                ),
                                style: a ? { backgroundImage: `url(${p})` } : void 0,
                            }),
                            Lo(u, 'premiumIGR') && i().createElement('div', { className: Mo.premiumIGR }),
                            i().createElement(
                                'div',
                                { className: c()(Mo.name, null == _ ? void 0 : _.name) },
                                d ? n : t,
                            ),
                        );
                    },
                    Ho = {
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                    },
                    jo = (0, k.Pi)(() => {
                        const e = (0, On.t)().model.vehicleInfo.get(),
                            t = (0, Pn.GS)();
                        return i().createElement(
                            'div',
                            { className: c()(Ho.base, t && Ho[`base__${t}`]) },
                            i().createElement(zo, e),
                        );
                    }),
                    Wo = 'RightSideTankParameters_tankNamePosition_b3',
                    Go = 'RightSideTankParameters_popularLoadoutsPosition_04',
                    Uo = (0, k.Pi)(({ arePopularLoadoutsHidden: e }) => {
                        const t = (0, On.t)(),
                            n = t.controls,
                            a = t.model,
                            s = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            l = a.optionalDevicesAssistant.get().state === Vr.Hidden,
                            c = !l,
                            _ = (0, o.useCallback)(() => {
                                var e, t;
                                const n = null == (e = s.current) ? void 0 : e.getBoundingClientRect(),
                                    a = null == (t = r.current) ? void 0 : t.getBoundingClientRect();
                                return n && a ? `${n.left}-${n.width}-${a.top}` : null;
                            }, [s, r]),
                            d = (0, o.useCallback)(() => {
                                if (!s.current || !r.current) return;
                                const e = s.current.getBoundingClientRect(),
                                    t = r.current.getBoundingClientRect(),
                                    a = {
                                        width: u.O.view.pxToRem(e.width),
                                        height: u.O.view.pxToRem(e.height),
                                        offsetX: u.O.view.pxToRem(e.left),
                                        offsetY: u.O.view.pxToRem(e.top),
                                        bottomMargin: Math.round(u.O.view.pxToRem(window.outerHeight - t.top)),
                                    };
                                (window.tutorialApi.updateComponents(), a.offsetX && a.width && n.resized(a));
                            }, [n]);
                        return (
                            P(_, d, { intervalMs: 50, minStableTicks: 8, listenResize: !0 }, [l]),
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement('div', { className: Wo, ref: s }, i().createElement(jo, null)),
                                i().createElement(
                                    'div',
                                    { className: Go, ref: r },
                                    c && i().createElement(Ro, { isHidden: e }),
                                ),
                            )
                        );
                    });
                var Zo = n(5096),
                    Vo = n(8613);
                (Date.now(), Vo.Ew.getRegionalDateTime, Vo.Ew.getFormattedDateTime);
                const qo = (e, t) => {
                        const n = (0, o.useRef)();
                        return (
                            (0, o.useEffect)(() => {
                                (t && !t(e)) || (n.current = e);
                            }, [t, e]),
                            n.current
                        );
                    },
                    Xo = (rt.Sw.instance, qo);
                var Ko = n(5958);
                const Yo = {
                        base__tiny: 'SectionsSwapTransition_base__tiny_fe',
                        base__enter: 'SectionsSwapTransition_base__enter_9c',
                        base__exitActive: 'SectionsSwapTransition_base__exitActive_c5',
                        base__exitFade: 'SectionsSwapTransition_base__exitFade_5d',
                        'animation-fade': 'SectionsSwapTransition_animation-fade_8e',
                        base__enterFade: 'SectionsSwapTransition_base__enterFade_d1',
                        base__exitLeft: 'SectionsSwapTransition_base__exitLeft_6c',
                        'animation-left': 'SectionsSwapTransition_animation-left_02',
                        base__exitRight: 'SectionsSwapTransition_base__exitRight_1e',
                        'animation-right': 'SectionsSwapTransition_animation-right_6c',
                        base__enterLeft: 'SectionsSwapTransition_base__enterLeft_5a',
                        base__enterRight: 'SectionsSwapTransition_base__enterRight_90',
                        base__exitTop: 'SectionsSwapTransition_base__exitTop_b5',
                        'animation-top': 'SectionsSwapTransition_animation-top_cc',
                        base__exitTopFade: 'SectionsSwapTransition_base__exitTopFade_3d',
                        'animation-top-fade': 'SectionsSwapTransition_animation-top-fade_ba',
                        base__exitBottom: 'SectionsSwapTransition_base__exitBottom_7c',
                        base__exitBottomFade: 'SectionsSwapTransition_base__exitBottomFade_fa',
                        'animation-bottom-fade': 'SectionsSwapTransition_animation-bottom-fade_c5',
                        base__enterTop: 'SectionsSwapTransition_base__enterTop_bd',
                        base__enterTopFade: 'SectionsSwapTransition_base__enterTopFade_48',
                        base__enterBottom: 'SectionsSwapTransition_base__enterBottom_0c',
                        'animation-bottom': 'SectionsSwapTransition_animation-bottom_c9',
                        base__enterBottomFade: 'SectionsSwapTransition_base__enterBottomFade_55',
                    },
                    Jo = (0, k.Pi)(
                        ({
                            children: e,
                            index: t,
                            mediaSize: n,
                            leftID: a,
                            rightID: s,
                            uniqueKey: u,
                            onTransitionEnd: r,
                        }) => {
                            const l = Xo(u),
                                _ = n === Pn.cJ.Tiny,
                                d = a === t,
                                m = l && l !== u,
                                p = (0, o.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                b = (0, o.useMemo)(() => ((s - a > 1 && _) || !m ? 'Fade' : ''), [m, a, s, _]),
                                g = (0, o.useCallback)(
                                    (e) =>
                                        i().cloneElement(e, {
                                            classNames: {
                                                enterActive: Yo.base__enter,
                                                enterDone: Yo[`base__enter${p}${b}`],
                                                exit: Yo[`base__exit${p}${b}`],
                                                exitActive: Yo.base__exitActive,
                                            },
                                        }),
                                    [p, b],
                                ),
                                E = (0, o.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            ((e.className = ''), r && r());
                                        }, Ko.PD);
                                    },
                                    [r],
                                ),
                                h = (0, o.useMemo)(() => ({ animationDuration: `${Ko.PD}ms` }), []);
                            return i().createElement(
                                X.Z,
                                { component: null, childFactory: g },
                                i().createElement(
                                    K.Z,
                                    { key: u, timeout: Ko.PD, onEntered: E },
                                    i().createElement(
                                        'div',
                                        { className: c()(Yo.base, Yo[`base__${n}`]), style: h },
                                        e,
                                    ),
                                ),
                            );
                        },
                    );
                var Qo = n(2094);
                const ei = {
                        base: 'Shell_base_4d',
                        base__tiny: 'Shell_base__tiny_a9',
                        shell: 'Shell_shell_61',
                        icon: 'Shell_icon_55',
                        base__large: 'Shell_base__large_aa',
                        base__huge: 'Shell_base__huge_a8',
                        count: 'Shell_count_ed',
                        count__zero: 'Shell_count__zero_45',
                        name: 'Shell_name_29',
                        base__small: 'Shell_base__small_eb',
                        base__medium: 'Shell_base__medium_5e',
                        ammunition: 'Shell_ammunition_00',
                        specifications: 'Shell_specifications_33',
                    },
                    ti = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    ni = (0, k.Pi)(({ shellID: e, specificationID: t }) => {
                        const n = (0, Pn.GS)(),
                            a = n === Pn.cJ.Tiny,
                            s = (0, On.t)().model.computes.shells.specification(e, t),
                            u = s.paramName,
                            r = s.value,
                            l = s.metricValue,
                            _ = (0, o.useMemo)(() => {
                                if ('avgPiercingPower' === u) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [u]);
                        return 'avgPiercingPower' === u || (!a && r)
                            ? i().createElement(
                                  'div',
                                  { className: c()(ti.base, n && ti[`base__${n}`]) },
                                  a
                                      ? i().createElement(
                                            i().Fragment,
                                            null,
                                            R.strings.menu.tank_params.shortened.$dyn(u),
                                            ' ',
                                            i().createElement(
                                                'div',
                                                { className: ti.value },
                                                r || i().createElement('span', null, '—'),
                                            ),
                                            i().createElement('div', { className: ti.units }, _),
                                        )
                                      : i().createElement(
                                            i().Fragment,
                                            null,
                                            R.strings.menu.tank_params.$dyn(u),
                                            i().createElement('div', { className: ti.units }, l),
                                            i().createElement('div', {
                                                className: c()(ti.separator, n && ti[`separator__${n}`]),
                                            }),
                                            i().createElement(
                                                'div',
                                                { className: ti.value },
                                                r || i().createElement('span', null, '—'),
                                            ),
                                        ),
                              )
                            : null;
                    }),
                    ai = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                var si = n(7405),
                    ui = n(329);
                const ri = {
                    base__tiny: 'TotalRow_base__tiny_c9',
                    row: 'TotalRow_row_f2',
                    row__medium: 'TotalRow_row__medium_fd',
                    row__large: 'TotalRow_row__large_44',
                    row__huge: 'TotalRow_row__huge_e2',
                    rowItem: 'TotalRow_rowItem_ff',
                    separator: 'TotalRow_separator_a2',
                    separator__tiny: 'TotalRow_separator__tiny_7a',
                    total: 'TotalRow_total_f7',
                    total__tiny: 'TotalRow_total__tiny_bf',
                    colored: 'TotalRow_colored_33',
                    overall: 'TotalRow_overall_09',
                    value: 'TotalRow_value_b8',
                    lowResolutionValue: 'TotalRow_lowResolutionValue_a2',
                    lowResolutionValue__tiny: 'TotalRow_lowResolutionValue__tiny_e6',
                    hiResolutionValue: 'TotalRow_hiResolutionValue_fa',
                    hiResolutionValue__tiny: 'TotalRow_hiResolutionValue__tiny_94',
                    price: 'TotalRow_price_4a',
                    price__final: 'TotalRow_price__final_d4',
                    indent: 'TotalRow_indent_0e',
                    divider: 'TotalRow_divider_94',
                };
                function oi() {
                    return (
                        (oi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        oi.apply(this, arguments)
                    );
                }
                const ii = R.strings.tank_setup.shells,
                    li = (0, k.Pi)(({ id: e }) => {
                        const t = (0, Pn.GS)(),
                            n = t === Pn.cJ.Tiny,
                            a = (0, On.t)().model,
                            s = a.computes.shells.shell(e),
                            u = s.buyCount,
                            r = s.itemsInStorage,
                            l = s.itemsInVehicle,
                            _ = s.totalPrice,
                            d = s.price,
                            m = a.computes.shells.defPriceLength(e),
                            p = a.computes.shells.priceLength(e) ? a.computes.shells.price(e, 0) : null,
                            b = m ? a.computes.shells.defPrice(e, 0) : null,
                            g = (0, o.useMemo)(() => ii[n ? 'shortSpecification' : 'specification'].inStorage(), [n]),
                            E = (0, o.useMemo)(() => ii[n ? 'shortSpecification' : 'specification'].inVehicle(), [n]),
                            h = (0, o.useMemo)(() => ii[n ? 'shortSpecification' : 'specification'].price(), [n]),
                            v = l >= 0,
                            f = m > 0,
                            C = (0, o.useMemo)(
                                () =>
                                    p && b
                                        ? {
                                              tooltip: 'priceDiscount',
                                              price: p.value,
                                              defPrice: b.value,
                                              currencyType: p.name,
                                          }
                                        : void 0,
                                [b, p],
                            );
                        return i().createElement(
                            'div',
                            { className: c()(ri.base, t && ri[`base__${t}`]) },
                            i().createElement(
                                'div',
                                { className: c()(ri.row, t && ri[`row__${t}`]) },
                                i().createElement(
                                    'div',
                                    { className: ri.rowItem },
                                    i().createElement('div', { className: c()(ri.total, t && ri[`total__${t}`]) }, g),
                                    i().createElement(
                                        'div',
                                        { className: c()(ri.lowResolutionValue, t && ri[`lowResolutionValue__${t}`]) },
                                        i().createElement('span', { className: ri.indent }),
                                        r,
                                    ),
                                ),
                                v &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement('span', { className: ri.divider }, '/'),
                                        i().createElement(
                                            'div',
                                            { className: ri.rowItem },
                                            i().createElement(
                                                'div',
                                                { className: c()(ri.total, t && ri[`total__${t}`]) },
                                                i().createElement(
                                                    'div',
                                                    { className: c()(ri.colored, t && ri[`colored__${t}`]) },
                                                    E,
                                                ),
                                            ),
                                            i().createElement(
                                                'div',
                                                {
                                                    className: c()(
                                                        ri.lowResolutionValue,
                                                        t && ri[`lowResolutionValue__${t}`],
                                                    ),
                                                },
                                                i().createElement('span', { className: ri.indent }),
                                                l,
                                            ),
                                        ),
                                    ),
                                i().createElement('div', { className: c()(ri.separator, t && ri[`separator__${t}`]) }),
                                i().createElement(
                                    'div',
                                    { className: c()(ri.hiResolutionValue, t && ri[`hiResolutionValue__${t}`]) },
                                    r,
                                    v &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('span', { className: ri.divider }, '/'),
                                            i().createElement(
                                                'div',
                                                { className: c()(ri.colored, t && ri[`colored__${t}`]) },
                                                l,
                                            ),
                                        ),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: c()(ri.row, t && ri[`row__${t}`]) },
                                i().createElement('div', { className: c()(ri.total, t && ri[`total__${t}`]) }, h),
                                i().createElement('div', { className: c()(ri.separator, t && ri[`separator__${t}`]) }),
                                i().createElement(
                                    'div',
                                    { className: ri.value },
                                    i().createElement(
                                        'div',
                                        { className: ri.overall },
                                        '(',
                                        i().createElement('span', null, u),
                                        ' ×',
                                        i().createElement(
                                            Ue.t,
                                            { args: C, isEnabled: f },
                                            i().createElement(
                                                'span',
                                                { className: ri.price },
                                                i().createElement(ma.t, oi({ showZero: !0 }, d)),
                                            ),
                                        ),
                                        ')',
                                        i().createElement(
                                            'span',
                                            { className: c()(ri.price, ri.price__final) },
                                            u
                                                ? i().createElement(ma.t, oi({ showZero: !0, ignoreDiscount: !0 }, _))
                                                : i().createElement(si.F, {
                                                      size: ui.et.small,
                                                      type: ui.V2.credits,
                                                      value: 0,
                                                  }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ci = (0, k.Pi)(({ id: e }) => {
                        const t = (0, Pn.GS)(),
                            n = (0, On.t)().model.computes.shells.specificationsLength(e);
                        return i().createElement(
                            'div',
                            { className: c()(ai.base, t && ai[`base__${t}`]) },
                            i().createElement(
                                'div',
                                { className: ai.overall },
                                Z(n, (t) =>
                                    i().createElement(
                                        o.Fragment,
                                        { key: t },
                                        i().createElement(ni, { shellID: e, specificationID: t }),
                                    ),
                                ),
                            ),
                            i().createElement('div', { className: ai.total }, i().createElement(li, { id: e })),
                        );
                    }),
                    _i = R.images.gui.maps.icons.shell,
                    di = (0, k.Pi)(({ id: e }) => {
                        const t = (0, Pn.GS)(),
                            n = (0, On.t)(),
                            a = n.model,
                            s = n.controls,
                            u = a.computes.shells.shell(e),
                            r = u.count,
                            l = u.type,
                            _ = u.intCD,
                            d = u.imageName,
                            m = u.installedSlotId,
                            p = u.itemInstalledSetupIdx,
                            b = u.itemInstalledSetupSlotIdx,
                            g = u.isMountedMoreThanOne,
                            E = a.shellsSetup.get(),
                            h = E.installedCount,
                            v = E.maxCount,
                            f = E.clipCount,
                            C = v - h + r,
                            A = (0, o.useCallback)(
                                (e) => {
                                    s.shells.updateSlot && s.shells.updateSlot({ intCD: _, newCount: e });
                                },
                                [s, _],
                            ),
                            D = (0, o.useMemo)(() => {
                                const e = { slotType: ne.g9, fieldType: 0, intCD: _ };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: b,
                                        isMountedMoreThanOne: g,
                                    }),
                                ];
                            }, [_, m, p, b, g]),
                            F = D[0],
                            S = D[1],
                            y = (0, o.useMemo)(() => {
                                const e = ((e) => {
                                    switch (e) {
                                        case Pn.cJ.Huge:
                                        case Pn.cJ.Large:
                                            return _i.large;
                                        default:
                                            return _i.big;
                                    }
                                })(t);
                                return { backgroundImage: `url(${e ? e.$dyn(d) : ''})` };
                            }, [d, t]),
                            B = R.strings.item_types.shell.kinds.$dyn(l),
                            w = systemLocale.toUpperCase(B);
                        return i().createElement(
                            'div',
                            { className: c()(ei.base, t && ei[`base__${t}`]) },
                            i().createElement(
                                'div',
                                { className: ei.shell },
                                i().createElement(
                                    ct,
                                    { args: S },
                                    i().createElement(
                                        Ue.t,
                                        { args: F },
                                        i().createElement(
                                            'div',
                                            { className: ei.icon, style: y },
                                            i().createElement(
                                                'div',
                                                { className: c()(ei.count, !r && ei.count__zero) },
                                                r,
                                            ),
                                        ),
                                    ),
                                ),
                                i().createElement('div', { className: ei.name }, w),
                            ),
                            i().createElement(
                                'div',
                                { className: ei.ammunition },
                                i().createElement(Qo.i, {
                                    parentId: `${_}-slider`,
                                    currentValue: r,
                                    maximum: v,
                                    sliderMaximum: C,
                                    onUpdates: A,
                                    stepCount: f,
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: ei.specifications },
                                i().createElement(ci, { id: e }),
                            ),
                        );
                    }),
                    mi = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    pi = ({ id: e, onSwap: t, mediaSize: n, hoverSound: a = 'highlight', clickSound: s = 'play' }) => {
                        const u = (0, o.useCallback)(() => {
                                (s && (0, Ce.G)(s), t(e));
                            }, [e, t, s]),
                            r = (0, o.useCallback)(() => {
                                a && (0, Ce.G)(a);
                            }, [a]);
                        return i().createElement('div', {
                            id: `swap-${e}`,
                            onClick: u,
                            onMouseEnter: r,
                            className: c()(mi.base, mi[`base__${n}`]),
                        });
                    },
                    bi = {
                        base: 'ShellContainer_base_d7',
                        base__tiny: 'ShellContainer_base__tiny_4b',
                        base__large: 'ShellContainer_base__large_10',
                        base__huge: 'ShellContainer_base__huge_74',
                        swap: 'ShellContainer_swap_14',
                        swap__noEvents: 'ShellContainer_swap__noEvents_e5',
                        swap__tiny: 'ShellContainer_swap__tiny_f2',
                        swap__large: 'ShellContainer_swap__large_60',
                        swap__huge: 'ShellContainer_swap__huge_b8',
                    },
                    gi = (0, k.Pi)(({ id: e, onTransitionEnd: t, onSwap: n, leftID: a, rightID: s }) => {
                        const u = (0, Pn.GS)(),
                            r = (0, On.t)().model,
                            o = r.computes.shells.length(),
                            l = r.computes.shells.shell(e).intCD;
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(
                                Jo,
                                { index: e, uniqueKey: l, leftID: a, rightID: s, mediaSize: u, onTransitionEnd: t },
                                i().createElement(
                                    'div',
                                    { className: c()(bi.base, u && bi[`base__${u}`]) },
                                    i().createElement(di, { id: e }),
                                ),
                            ),
                            e !== o - 1 &&
                                i().createElement(
                                    'div',
                                    { className: c()(bi.swap, u && bi[`swap__${u}`]) },
                                    i().createElement(pi, { id: e, mediaSize: u, onSwap: n }),
                                ),
                        );
                    }),
                    Ei = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        base__large: 'Sections_base__large_d0',
                    },
                    hi = (0, k.Pi)(() => {
                        const e = (0, On.t)(),
                            t = e.model,
                            n = e.controls,
                            a = t.computes.shells.length(),
                            s = (0, o.useState)(!1),
                            u = s[0],
                            r = s[1],
                            l = (0, Pn.GS)(),
                            _ = t.computes.shells.ids(),
                            d = Xo(_),
                            m = (0, o.useMemo)(() => {
                                const e = _.filter((e, t) => {
                                    if (d && d[t] !== e) return !0;
                                });
                                return e.length > 1
                                    ? { leftID: _.indexOf(e[0]), rightID: _.indexOf(e[1]) }
                                    : { leftID: -1, rightID: -1 };
                            }, [_, d]),
                            p = m.leftID,
                            b = m.rightID,
                            g = (0, o.useCallback)(
                                (e) => {
                                    (u || n.shells.actSlot({ actionType: $n.Xo, leftID: e, rightID: e + 1 }), r(!0));
                                },
                                [n, u],
                            ),
                            E = (0, o.useCallback)(() => {
                                r(!1);
                            }, [r]);
                        return i().createElement(
                            'div',
                            { className: c()(Ei.base, Ei[`base__${l}`]) },
                            Z(a, (e) =>
                                i().createElement(gi, {
                                    id: e,
                                    onTransitionEnd: E,
                                    onSwap: g,
                                    leftID: p,
                                    rightID: b,
                                    key: `shell-container-${e}`,
                                }),
                            ),
                        );
                    }),
                    vi = (0, k.Pi)(() => {
                        const e = (0, Pn.GS)(),
                            t = (0, On.t)().controls;
                        return i().createElement(Pn.Ar, {
                            header: i().createElement(
                                Mu,
                                { title: R.strings.tank_setup.section.shells() },
                                i().createElement(Zo.k, { isShortened: !0 }),
                            ),
                            content: i().createElement(hi, null),
                            footer: i().createElement(Mn.w, {
                                withConfirmation: !0,
                                renewalType: Ln.my.Shells,
                                parentModelPath: 'model.tankSetup.shellsSetup',
                                mediaSize: e,
                                onDealConfirmed: t.shells.confirmDeal,
                                onDealCancelled: t.shells.cancelDeal,
                                onAutoRenewalChanged: t.shells.changeAutoRenewal,
                            }),
                        });
                    }),
                    fi = {
                        base: 'Animation_base_bf',
                        base__leftEnter: 'Animation_base__leftEnter_5f',
                        base__rightEnter: 'Animation_base__rightEnter_c1',
                        base__leftEntering: 'Animation_base__leftEntering_9c',
                        'animation-show-left': 'Animation_animation-show-left_24',
                        base__rightEntering: 'Animation_base__rightEntering_8d',
                        'animation-show-right': 'Animation_animation-show-right_bb',
                        base__exit: 'Animation_base__exit_b5',
                        base__previous: 'Animation_base__previous_09',
                        base__leftExit: 'Animation_base__leftExit_f1',
                        'animation-hide-left': 'Animation_animation-hide-left_df',
                        base__rightExit: 'Animation_base__rightExit_e3',
                        'animation-hide-right': 'Animation_animation-hide-right_fe',
                    },
                    Ci = [ne.zn, ne.g9, ne.mH, ne.G$],
                    Ai = (e, t) => (t === e ? '' : Ci.indexOf(t) > Ci.indexOf(e) ? 'right' : 'left'),
                    Di = ({ children: e, selectedSetup: t }) => {
                        const n = i().createRef(),
                            a = (0, o.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            s = (0, o.useMemo)(() => {
                                const e = Ai(a.current.selectedSetup, t);
                                return { enter: fi[`base__${e}Enter`] };
                            }, [t]),
                            u = (0, o.useCallback)(
                                (e) => {
                                    const s = Ai(a.current.selectedSetup, t);
                                    ((e.className = c()(fi.base, fi.base__exit)),
                                        e.classList.add(fi[`base__${s}Exit`]),
                                        (a.current.animatedElements[t] = n));
                                    (Object.values(a.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(fi.base__previous);
                                    }),
                                        n.current && n.current.classList.add(fi.base__previous));
                                },
                                [n, t],
                            ),
                            r = (0, o.useCallback)(
                                (e) => {
                                    const n = Ai(a.current.previousSelectedSetup, t);
                                    ((e.className = fi.base), e.classList.add(fi[`base__${n}Enter`]));
                                },
                                [t],
                            ),
                            l = (0, o.useCallback)(
                                (e) => {
                                    const n = Ai(a.current.previousSelectedSetup, t);
                                    e.classList.add(fi[`base__${n}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, o.cloneElement)(e);
                        return (
                            (a.current.previousSelectedSetup = a.current.selectedSetup),
                            (a.current.selectedSetup = t),
                            i().createElement(
                                X.Z,
                                null,
                                i().createElement(
                                    K.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: s,
                                        onExit: u,
                                        onEnter: r,
                                        onEntering: l,
                                    },
                                    i().createElement('div', { className: fi.base, ref: n }, _),
                                ),
                            )
                        );
                    },
                    Fi = (0, k.Pi)(({ compare: e = !1 }) => {
                        const t = Rn().model.tankSetup.get().selectedSetup;
                        return i().createElement(
                            o.Fragment,
                            null,
                            i().createElement(
                                Di,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case ne.zn:
                                            return i().createElement(Ur, { compare: e });
                                        case ne.g9:
                                            return i().createElement(vi, null);
                                        case ne.mH:
                                            return i().createElement(Lr, { compare: e });
                                        case ne.G$:
                                            return i().createElement(Or, { compare: e });
                                        default:
                                            return i().createElement(Ur, { compare: e });
                                    }
                                })(),
                            ),
                            !e && i().createElement(Uo, { arePopularLoadoutsHidden: t !== ne.zn }),
                        );
                    }),
                    Si = (0, k.Pi)(() => {
                        const e = (0, On.t)(),
                            t = e.model,
                            n = e.controls,
                            a = (0, o.useState)(!1),
                            s = a[0],
                            u = a[1];
                        (0, o.useEffect)(() => (0, w.v)(n.viewRendered), [n]);
                        const r = (0, o.useCallback)(() => {
                            s || n.close();
                        }, [s, n]);
                        return i().createElement(
                            Nn.Provider,
                            { value: e },
                            i().createElement(
                                In.Sf,
                                {
                                    show: t.show.get(),
                                    panel: i().createElement(
                                        $.k,
                                        null,
                                        i().createElement(Tn, {
                                            show: t.show.get(),
                                            isReady: t.isReady.get(),
                                            panelType: oe.w.Setup,
                                            setIsExitBlocked: u,
                                        }),
                                    ),
                                    onAnimationDone: n.animationEnded,
                                    onClose: r,
                                },
                                i().createElement(Fi, null),
                            ),
                        );
                    });
                u.O.view.whenTutorialReady.then(() => {
                    B().render(
                        i().createElement(On.k, null, i().createElement(S, null, i().createElement(Si, null))),
                        document.getElementById('root'),
                    );
                });
            },
            1922: (e, t, n) => {
                'use strict';
                n.d(t, { Ar: () => _, GS: () => c, cJ: () => l });
                var a = n(6483),
                    s = n.n(a),
                    u = n(7739),
                    r = n(7363),
                    o = n.n(r),
                    i = n(1960);
                let l;
                !(function (e) {
                    ((e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(l || (l = {}));
                const c = () => {
                        const e = (0, r.useContext)(u.YN);
                        return e.extraSmall
                            ? l.Tiny
                            : e.small
                              ? l.Small
                              : e.medium || 1080 === e.height
                                ? l.Medium
                                : e.large
                                  ? l.Large
                                  : e.extraLarge
                                    ? l.Huge
                                    : l.None;
                    },
                    _ = ({ header: e, content: t, aside: n, footer: a, compare: u = !1 }) => {
                        const r = c(),
                            l = s()(i.Z.base, r && i.Z[`base__${r}`], u && i.Z.base__compare),
                            _ = s()(i.Z.header, r && i.Z[`header__${r}`]),
                            d = s()(i.Z.main),
                            m = s()(i.Z.content);
                        return o().createElement(
                            'div',
                            { className: l },
                            e && o().createElement('div', { className: _ }, e),
                            o().createElement(
                                'div',
                                { className: m },
                                o().createElement(
                                    'div',
                                    { className: d },
                                    o().createElement('div', { className: i.Z.inner }, t),
                                ),
                                n,
                            ),
                            a && o().createElement('div', { className: i.Z.footer }, a),
                        );
                    };
            },
            3522: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => _ });
                var a = n(4598),
                    s = n(9480),
                    u = n(3946),
                    r = n(1922);
                const o = [
                        'qualityFuel',
                        'excellentFuel',
                        'ration',
                        'chocolate',
                        'cocacola',
                        'hotCoffee',
                        'ration_uk',
                        'ration_czech',
                        'ration_china',
                        'ration_japan',
                        'ration_poland',
                        'ration_sweden',
                        'ration_italy',
                    ],
                    i = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'builtinRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...o,
                    ],
                    l = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'builtinRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...o,
                    ],
                    c = (e) =>
                        s.UI(e, (e) =>
                            Object.assign({}, e, {
                                price: Object.assign({}, e.price, {
                                    price: s.UI(e.price.price, (e) => Object.assign({}, e)),
                                    defPrice: s.UI(e.price.defPrice, (e) => Object.assign({}, e)),
                                    discount: s.UI(e.price.discount, (e) => Object.assign({}, e)),
                                }),
                            }),
                        ),
                    _ = (e) => {
                        const t = {
                                root: e.object(),
                                tankSetup: e.object('tankSetup'),
                                vehicleInfo: e.object('vehicleInfo'),
                                lastSlotAction: e.object('lastSlotAction'),
                                optDevices: {
                                    slots: e.array('tankSetup.optDevicesSetup.slots'),
                                    setup: e.object('tankSetup.optDevicesSetup'),
                                    filter: e.array('tankSetup.optDevicesSetup.filter'),
                                    tabs: e.array('tankSetup.optDevicesSetup.tabs'),
                                    specialCurrency: e.array('tankSetup.optDevicesSetup.specialCurrency'),
                                },
                                consumables: {
                                    consumables: e.object('tankSetup.consumablesSetup'),
                                    slots: e.array('tankSetup.consumablesSetup.slots'),
                                },
                                boosters: {
                                    tabs: e.object('tankSetup.battleBoostersSetup.tabs'),
                                    slots: e.array('tankSetup.battleBoostersSetup.slots'),
                                },
                            },
                            n = (0, u.Om)(
                                () =>
                                    ((e) => {
                                        const t = c(e);
                                        return s.UI(t, (e) =>
                                            Object.assign({}, e, {
                                                bonuses: Object.assign({}, e.bonuses, {
                                                    items: s.UI(e.bonuses.items, (e) =>
                                                        Object.assign({}, e, {
                                                            values: s.UI(e.values, (e) => Object.assign({}, e)),
                                                        }),
                                                    ),
                                                }),
                                                specializations: Object.assign({}, e.specializations, {
                                                    specializations: s.UI(e.specializations.specializations, (e) =>
                                                        Object.assign({}, e),
                                                    ),
                                                }),
                                            }),
                                        );
                                    })(t.optDevices.slots.get()),
                                { equals: a.jv },
                            ),
                            o = (0, u.Om)(() => n().length),
                            _ = (0, u.Om)(
                                (e) => {
                                    const t = s.U2(n(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: a.jv },
                            ),
                            d = (0, u.Om)((e) => _(e).bonuses.items.length, { equals: a.jv }),
                            m = (0, u.Om)(
                                (e, t) => {
                                    const n = _(e),
                                        a = s.U2(n.bonuses.items, t);
                                    if (!a) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, a);
                                },
                                { equals: a.jv },
                            ),
                            p = (0, u.Om)((e) => {
                                const t = d(e);
                                return _(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            b = (0, u.Om)((e, t, n) => {
                                const a = d(e),
                                    s = p(e);
                                let u = s ? n - s : n,
                                    r = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!u) return null;
                                    ((r = a > 2 ? 1 : 2 === a ? (u > 2 ? 2 : 1) : u), (u -= r));
                                }
                                return r;
                            }),
                            g = (0, u.Om)(
                                (e, t) => {
                                    const n = m(e, t);
                                    return s.dF(n.values, ({ valueKey: e }) => e === n.localeName);
                                },
                                { equals: a.jv },
                            ),
                            E = (0, u.Om)(
                                (e, n) =>
                                    ((e, t, n) => {
                                        const a = n !== r.cJ.Tiny || t ? i : l,
                                            u = c(e),
                                            o = s.u4(
                                                u,
                                                (e, t) => {
                                                    const n = a.indexOf(t.itemName);
                                                    return ((e[-1 === n ? Math.max(e.length, l.length) : n] = t), e);
                                                },
                                                [],
                                            );
                                        return s.hX(o, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, n),
                                { equals: a.jv },
                            ),
                            h = (0, u.Om)((e, t) => E(e, t).length),
                            v = (0, u.Om)(
                                (e, t, n) => {
                                    const a = s.U2(E(t, n), e);
                                    if (!a) throw Error(`No consumable found with index: ${a}`);
                                    return Object.assign({}, a);
                                },
                                { equals: a.jv },
                            ),
                            f = (0, u.Om)(
                                () => {
                                    return ((e = t.boosters.slots.get()), c(e));
                                    var e;
                                },
                                { equals: a.jv },
                            ),
                            C = (0, u.Om)(() => f().length),
                            A = (0, u.Om)(
                                (e) => {
                                    const t = s.U2(f(), e);
                                    if (!t) throw Error(`No battle booster found with index: ${e}`);
                                    return Object.assign({}, t);
                                },
                                { equals: a.jv },
                            );
                        return {
                            model: t,
                            computes: {
                                optDevices: {
                                    slotsLength: o,
                                    device: _,
                                    bonusesLength: d,
                                    bonus: m,
                                    bonusEffectLinesCount: p,
                                    bonusVisibleLinesCount: b,
                                    bonusValue: g,
                                },
                                consumables: { length: h, consumable: v },
                                boosters: { length: C, booster: A },
                            },
                        };
                    };
            },
            3028: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => c, t: () => _ });
                var a = n(5344),
                    s = n(3215),
                    u = n(4598),
                    r = n(9480),
                    o = n(3946),
                    i = n(3522);
                const l = (0, s.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, i._)(e),
                                n = t.model,
                                s = t.computes,
                                l = e.object('tankSetup.shellsSetup'),
                                c = e.array('tankSetup.shellsSetup.slots'),
                                _ = e.object('ammunitionPanel'),
                                d = e.array('ammunitionPanel.sectionGroups'),
                                m = e.object('optionalDevicesAssistant'),
                                p = e.array('optionalDevicesAssistant.optionalDevicesAssistantPresets'),
                                b = e.object('optionalDevicesAssistant.selectedPreset'),
                                g = () =>
                                    r.UI(p.get(), (e) =>
                                        Object.assign({}, e, {
                                            optionalDevicesAssistantItems: r.UI(e.optionalDevicesAssistantItems, (e) =>
                                                Object.assign({}, e, { items: r.UI(e.items, u.yR) }),
                                            ),
                                        }),
                                    ),
                                E = (e) =>
                                    r.u4(
                                        p.get(),
                                        (t, n) => {
                                            if (n.presetType.mType === e) {
                                                const e = r.UI(n.optionalDevicesAssistantItems, (e) =>
                                                    Object.assign({}, e, { items: r.UI(e.items, u.yR) }),
                                                );
                                                t.push(...e);
                                            }
                                            return t;
                                        },
                                        [],
                                    ),
                                h = (0, o.Om)(() => E(0).sort((e, t) => t.popularity - e.popularity)),
                                v = (0, o.Om)(() => E(1).sort((e, t) => t.popularity - e.popularity)),
                                f = (0, o.Om)(
                                    (e) => {
                                        const t = r.U2(c.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: u.jv },
                                ),
                                C = (0, o.Om)(() => c.get().length),
                                A = (0, o.Om)(() => r.UI(c.get(), (e) => e.intCD), { equals: u.jv }),
                                D = (0, o.Om)((e) => f(e).specifications.length),
                                F = (0, o.Om)(
                                    (e, t) => {
                                        const n = f(e),
                                            a = r.U2(n.specifications, t);
                                        if (!a) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: u.jv },
                                ),
                                S = (0, o.Om)(
                                    (e, t) => {
                                        const n = f(e),
                                            a = r.U2(n.price.price, t);
                                        if (!a) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: u.jv },
                                ),
                                y = (0, o.Om)(
                                    (e, t) => {
                                        const n = f(e),
                                            a = r.U2(n.price.defPrice, t);
                                        if (!a) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: u.jv },
                                ),
                                B = (0, o.Om)((e) => f(e).price.price.length),
                                w = (0, o.Om)((e) => f(e).price.defPrice.length),
                                k = (0, o.Om)(() => {
                                    const e = _.get().selectedSlot,
                                        t = r.U2(d.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const n = r.U2(t.sections, 0);
                                    if (!n) throw Error('No section found');
                                    const a = r.U2(n.slots, e);
                                    if (!a) throw Error(`No slot found with index: ${e}`);
                                    const s = r.U2(a.specializations.specializations, 0);
                                    return null == s ? void 0 : s.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), n, {
                                shellsSetup: l,
                                shellsSlots: c,
                                ammunitionPanel: _,
                                sectionGroups: d,
                                optionalDevicesAssistant: m,
                                selectedPreset: b,
                                computes: Object.assign({}, s, {
                                    getOptionalDevicesAssistantItemsByType: E,
                                    getSortedCommonItems: h,
                                    getSortedLegendaryItems: v,
                                    getOptionalDevicesAssistantPresets: g,
                                    getSourceVehicleCompDescrForPreset: (e) => {
                                        const t = g().find((t) => t.presetType.mType === e);
                                        return t ? t.sourceVehicleCompDescr : null;
                                    },
                                    getOptionalDevicesResultTypeForPreset: (e) => {
                                        const t = g().find((t) => t.presetType.mType === e);
                                        return t ? t.optionalDevicesResultType : 0;
                                    },
                                    getModeType: () => {
                                        var e;
                                        const t = a.d.Common || a.d.Legendary;
                                        return null == (e = g().find((e) => e.presetType.mType === t))
                                            ? void 0
                                            : e.modeType;
                                    },
                                    shells: {
                                        length: C,
                                        shell: f,
                                        specificationsLength: D,
                                        specification: F,
                                        price: S,
                                        priceLength: B,
                                        defPriceLength: w,
                                        defPrice: y,
                                        ids: A,
                                    },
                                    selectedSlotSpecialization: k,
                                }),
                            });
                        },
                        ({ externalModel: e }) => ({
                            onHintShown: e.createCallback(
                                () => ({ value: !0 }),
                                'optionalDevicesAssistant.onHintShown',
                            ),
                            onPresetSelected: e.createCallback(
                                (e) => ({ presetType: e }),
                                'optionalDevicesAssistant.onPresetSelected',
                            ),
                            close: e.createCallbackNoArgs('onClose'),
                            animationEnded: e.createCallbackNoArgs('onAnimationEnd'),
                            viewRendered: e.createCallbackNoArgs('onViewRendered'),
                            resized: e.createCallback((e) => Object.assign({}, e), 'onResized'),
                            filterChanged: e.createCallback(
                                (e) => Object.assign({}, e),
                                'tankSetup.optDevicesSetup.onFilterChanged',
                            ),
                            filterReset: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onFilterReset'),
                            moreCurrencyGot: e.createCallbackNoArgs(
                                'tankSetup.optDevicesSetup.specialCurrency.onGetMoreCurrency',
                            ),
                            introPassed: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onIntroPassed'),
                            optDevices: {
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onSlotAction',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onTabChanged',
                                ),
                                confirmDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.optDevicesSetup.onAutoRenewalChanged',
                                ),
                            },
                            shells: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.shellsSetup.onAutoRenewalChanged',
                                ),
                                updateSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onShellUpdate',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onSlotAction',
                                ),
                            },
                            consumables: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.consumablesSetup.onAutoRenewalChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.consumablesSetup.onSlotAction',
                                ),
                            },
                            boosters: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.battleBoostersSetup.onAutoRenewalChanged',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onTabChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onSlotAction',
                                ),
                            },
                        }),
                    ),
                    c = l[0],
                    _ = l[1];
            },
            8774: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => C });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3457),
                    r = n(2106),
                    o = n(6373),
                    i = n(7363),
                    l = n.n(i);
                const c = 'Action_base_bf',
                    _ = 'Action_base__hidden_4b',
                    d = 'Action_base__shown_9f',
                    m = 'Action_base__cut_26',
                    p = 'Action_action_b5',
                    b = 'Action_image_e9',
                    g = 'Action_button_74',
                    E = R.strings.tank_setup.tooltips.action,
                    h = ['cancel', 'undo'],
                    v = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`);
                var f;
                !(function (e) {
                    ((e.Hidden = 'hidden'), (e.FadeOut = 'fadeOut'), (e.Visible = 'visible'), (e.FadeIn = 'fadeIn'));
                })(f || (f = {}));
                const C = ({
                    parentId: e,
                    actionType: t,
                    imageSource: n = '',
                    show: a = !1,
                    disabled: C = !1,
                    disabledTooltipText: A,
                    tooltipBodyPath: D,
                    buttonType: F = r.L.primary,
                    isModernized: S,
                    isFreeToDemount: y,
                    level: B,
                    onClick: w,
                }) => {
                    const k = (0, i.useRef)(null),
                        x = (0, i.useRef)(f.Hidden),
                        T = (0, i.useRef)(!1),
                        I = (0, i.useState)(!a),
                        N = I[0],
                        O = I[1],
                        L = (0, i.useState)(!1),
                        M = L[0],
                        P = L[1],
                        $ = (0, i.useState)(),
                        z = $[0],
                        H = $[1],
                        j = (0, i.useCallback)(() => {
                            const e = x.current;
                            e === f.FadeIn
                                ? ((x.current = f.Hidden), O(!0))
                                : e === f.FadeOut && (x.current = f.Visible);
                        }, []);
                    ((0, i.useEffect)(() => {
                        const e = k.current;
                        if (e)
                            return (
                                e.addEventListener('animationend', j),
                                () => {
                                    e.removeEventListener('animationend', j);
                                }
                            );
                    }, [j]),
                        (0, i.useEffect)(() => {
                            a !== T.current &&
                                (a ? ((x.current = f.FadeOut), O(!1)) : (x.current = f.FadeIn), (T.current = a));
                        }, [a]),
                        (0, i.useEffect)(() => {
                            if (M) {
                                const e = setTimeout(() => P(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [M]),
                        (0, i.useEffect)(() => () => z && clearTimeout(z), [z]));
                    const W = (0, i.useCallback)(() => {
                            M || (P(!0), x.current === f.Visible && H(setTimeout(() => w(t), 200)));
                        }, [t, w, M]),
                        G = S ? v(t, B) : t,
                        U = (0, i.useMemo)(() => {
                            if (C) return { body: A, isEnabled: Boolean(A) };
                            const e = ((e, t, n, a) => (n ? 'demount_plus' : a ? v(e, t) : e))(t, B, y, S);
                            return {
                                header: E.title.$dyn(e),
                                body: h.includes(e) ? void 0 : E.description.$dyn(D || e),
                            };
                        }, [t, C, A, y, S, B, D]),
                        Z = (0, i.useMemo)(
                            () => ({
                                backgroundImage: `url(${n || R.images.gui.maps.icons.tanksetup.actions.$dyn(G)})`,
                            }),
                            [G, n],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: s()(c, a ? d : _, N && m) },
                        l().createElement(
                            o.i,
                            U,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    u.u5,
                                    { onClick: W, type: F, mixClass: g, disabled: C },
                                    l().createElement('div', { className: b, style: Z }),
                                ),
                            ),
                        ),
                    );
                };
            },
            8586: (e, t, n) => {
                'use strict';
                n.d(t, { h: () => h });
                var a = n(7363),
                    s = n.n(a),
                    u = n(6483),
                    r = n.n(u),
                    o = n(3457),
                    i = n(6373);
                const l = 'CtaButtons_base_4c',
                    c = 'CtaButtons_content_9b',
                    _ = 'CtaButtons_substrate_2d',
                    d = 'CtaButtons_indicator_e9',
                    m = 'CtaButtons_toggle_64',
                    p = 'CtaButtons_toggle__on_40';
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const g = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: n,
                    callback: u,
                    withToggle: l = !1,
                    toggle: g,
                    buttonProps: E,
                }) => {
                    const h = (0, a.useCallback)(() => {
                            u(t, g);
                        }, [t, u, g]),
                        v = (0, a.useMemo)(() => {
                            if (l) {
                                const t = r()(m, g && p);
                                return s().createElement(
                                    'div',
                                    { className: c },
                                    s().createElement('div', { className: _ }),
                                    g && s().createElement('div', { className: d }),
                                    s().createElement('div', { className: t }),
                                    e,
                                );
                            }
                            return e;
                        }, [l, e, g]);
                    return s().createElement(i.i, n, s().createElement(o.u5, b({}, E, { onClick: h }), v));
                };
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const h = ({ ctaConfigs: e }) =>
                    s().createElement(
                        'div',
                        { className: l },
                        e.map((e) => s().createElement(g, E({ key: e.ctaType }, e))),
                    );
            },
            5310: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    u = n(9916),
                    r = n(7363),
                    o = n.n(r),
                    i = n(2558),
                    l = n(8934),
                    c = n(8529);
                const _ = ({ children: e, when: t, canAccept: n }) => {
                    const a = (0, r.useCallback)((e, t) => {
                            (0, u.Eu)().then(() => {
                                ((e.className = ''), e.classList.add(c.Z.base), e.classList.add(t));
                            });
                        }, []),
                        _ = (0, r.useCallback)(
                            (e) => {
                                a(e, c.Z.base__enter);
                            },
                            [a],
                        ),
                        d = (0, r.useCallback)(
                            (e) => {
                                a(e, c.Z.base__exit);
                            },
                            [a],
                        );
                    return t
                        ? o().createElement(
                              i.Z,
                              null,
                              o().createElement(
                                  l.Z,
                                  { in: n, timeout: 500, onEnter: _, onExit: d, key: `index-${n}` },
                                  o().createElement('div', { className: s()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : o().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, t, n) => {
                'use strict';
                n.d(t, { my: () => v, sF: () => A });
                var a = n(6483),
                    s = n.n(a),
                    u = n(6373),
                    r = n(9480),
                    o = n(3403),
                    i = n(7363),
                    l = n.n(i),
                    c = n(1922),
                    _ = n(6391),
                    d = n(5310),
                    m = n(5851),
                    p = n(2306),
                    b = n(7198),
                    g = n(5178),
                    E = n(6826),
                    h = n(628);
                let v, f;
                (!(function (e) {
                    ((e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair'));
                })(v || (v = {})),
                    (function (e) {
                        ((e.Column = 'column'), (e.Row = 'row'));
                    })(f || (f = {})));
                const C = R.strings.tank_setup.dealPanel,
                    A = (0, o.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: n = c.cJ.Medium,
                            panelType: a = f.Row,
                            priceLabel: o = C.toBePaid(),
                            autoRenewalLabel: v,
                            onAutoRenewalChanged: A,
                            onDealConfirmed: D,
                            onDealCancelled: F,
                            priceSeparator: S,
                            ignoreDiscount: y = !0,
                            discountTooltipEnabled: B = !1,
                            plusIconShown: w = !0,
                            totalPriceClassName: k,
                        }) => {
                            const x = (0, g.t)(),
                                T = x.model,
                                I = (0, i.useRef)(null),
                                N = n === c.cJ.Tiny || n === c.cJ.Small,
                                R = T.totalItemsInstalled.get(),
                                O = Boolean(T.totalItemsInStorage.get()),
                                L = Boolean(T.demountKitsCount.get()),
                                M = r.G(T.price.get(), (e) => e.value > 0) || L,
                                P = N && O && M && w;
                            return l().createElement(
                                p.h.Provider,
                                { value: x },
                                l().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            h.Z.base,
                                            n && h.Z[`base__${n}`],
                                            e && h.Z.base__renewal,
                                            a !== f.Row && h.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        l().createElement(
                                            'div',
                                            { className: s()(h.Z.renewal, a !== f.Row && h.Z.renewal__dialog) },
                                            l().createElement(m.Y, { renewType: e, onValueChanged: A, label: v }),
                                        ),
                                    l().createElement(
                                        d.f,
                                        { when: a === f.Row, canAccept: T.canAccept.get() },
                                        l().createElement(
                                            l().Fragment,
                                            null,
                                            Boolean(R) &&
                                                l().createElement(
                                                    u.i,
                                                    { body: C.tooltip.fromVehicle(), isEnabled: N },
                                                    l().createElement(
                                                        'div',
                                                        { className: s()(h.Z.storage, n && h.Z[`storage__${n}`]) },
                                                        !N &&
                                                            l().createElement(
                                                                'div',
                                                                { className: h.Z.from },
                                                                C.fromVehicle(),
                                                            ),
                                                        l().createElement(_.Y, {
                                                            location: 'vehicle',
                                                            count: R,
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            O &&
                                                l().createElement(
                                                    u.i,
                                                    { body: C.tooltip.fromStorage(), isEnabled: N },
                                                    l().createElement(
                                                        'div',
                                                        { className: s()(h.Z.storage, n && h.Z[`storage__${n}`]) },
                                                        !N &&
                                                            l().createElement(
                                                                'div',
                                                                { className: h.Z.from },
                                                                C.fromStorage(),
                                                            ),
                                                        l().createElement(_.Y, {
                                                            location: 'storage',
                                                            count: T.totalItemsInStorage.get(),
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            P && l().createElement('div', { className: h.Z.plus }),
                                            M &&
                                                l().createElement(
                                                    'div',
                                                    { className: s()(h.Z.totalPrice, P && h.Z.totalPrice__mixed, k) },
                                                    l().createElement(E.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: o,
                                                        messageHidden: N && a === f.Row,
                                                        ignoreDiscount: y,
                                                        discountTooltipEnabled: B,
                                                        priceSeparator: S,
                                                    }),
                                                ),
                                            t &&
                                                T.canAccept.get() &&
                                                l().createElement(
                                                    'div',
                                                    { className: h.Z.control },
                                                    l().createElement(b.Z, {
                                                        isDisabled: T.isDisabled.get(),
                                                        canCancel: T.canCancel.get(),
                                                        onCancel: () => F && F(),
                                                        onConfirm: () => D && D(),
                                                        confirmButtonRef: I,
                                                    }),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
            },
            5851: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => c });
                var a = n(2262),
                    s = n(6373),
                    u = n(3403),
                    r = n(7363),
                    o = n.n(r),
                    i = n(8175),
                    l = n(2306);
                const c = (0, u.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: t,
                        renewType: n = i.my.General,
                    }) => {
                        const u = (0, l.o)(),
                            c = u.model,
                            _ = u.controls,
                            d = c.dealPanel.get().isAutoRenewalEnabled,
                            m = (0, r.useCallback)(() => {
                                (_.changeAutoRenewal(!d), t && t(!d));
                            }, [_, d, t]),
                            p = (0, r.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    t = e.header.$dyn(n),
                                    a = n === i.my.General ? '' : e.body.$dyn(n);
                                return { header: String(t || e.header.general()), body: a ? String(a) : void 0 };
                            }, [n]);
                        return o().createElement(
                            s.i,
                            p,
                            o().createElement(a.XZ, {
                                id: 'renewal-setup-checkbox',
                                isChecked: d,
                                text: e,
                                onChange: m,
                            }),
                        );
                    },
                );
            },
            1957: (e, t, n) => {
                'use strict';
                n.d(t, { p: () => o });
                var a = n(3457),
                    s = n(7363),
                    u = n.n(s),
                    r = n(2527);
                const o = u().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: s }) =>
                    u().createElement(
                        'div',
                        { ref: s, className: r.Z.base, id: 'deal-panel-confirm' },
                        u().createElement(
                            a.u5,
                            { size: a.qE.medium, disabled: t, onClick: () => n && n() },
                            R.strings.tank_setup.dealPanel.button.$dyn(e),
                        ),
                    ),
                );
            },
            7198: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3457),
                    s = n(6373),
                    u = n(7383),
                    r = n(7363),
                    o = n.n(r),
                    i = n(1957),
                    l = n(8099);
                const c = o().memo(
                    ({
                        applyBtnString: e = u.YR,
                        isDisabled: t,
                        canCancel: n,
                        onCancel: r,
                        onConfirm: c,
                        confirmButtonRef: _,
                    }) => {
                        const d = R.strings.tank_setup.dealPanel,
                            m = o().createElement(i.p, {
                                applyBtnString: e,
                                isDisabled: t,
                                onConfirm: c,
                                confirmButtonRef: _,
                            });
                        return o().createElement(
                            'div',
                            { className: l.Z.base },
                            t
                                ? o().createElement(
                                      s.i,
                                      { body: d.tooltip.notEnough() },
                                      o().createElement('div', null, m),
                                  )
                                : m,
                            o().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                o().createElement(
                                    a.u5,
                                    {
                                        size: a.qE.medium,
                                        type: a.L$.secondary,
                                        mixClass: l.Z.button,
                                        disabled: !n,
                                        onClick: r,
                                    },
                                    d.button.cancel(),
                                ),
                            ),
                        );
                    },
                );
            },
            3755: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => l });
                var a = n(3403),
                    s = n(7363),
                    u = n.n(s),
                    r = n(8175),
                    o = n(5178);
                const i = ['parentModelPath'];
                const l = (0, a.Pi)((e) => {
                    let t = e.parentModelPath,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, i);
                    const a = `${t}.dealPanel`;
                    return u().createElement(o.k, { options: { context: a } }, u().createElement(r.sF, n));
                });
            },
            6826: (e, t, n) => {
                'use strict';
                n.d(t, { M: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    u = n(7363),
                    r = n.n(u),
                    o = n(9683),
                    i = n(8401),
                    l = n(5178),
                    c = n(1523);
                const _ = ({
                    parentId: e,
                    messageHidden: t,
                    ignoreDiscount: n,
                    discountTooltipEnabled: a,
                    priceLabel: u,
                    priceSeparator: _,
                }) => {
                    const d = (0, l.t)().model,
                        m = d.demountKitsCount.get();
                    return r().createElement(
                        'div',
                        { id: `${e}-total-price`, className: c.Z.base },
                        r().createElement('div', { className: s()(c.Z.message, t && c.Z.message__hidden) }, u),
                        Boolean(m) &&
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(o.k, { value: m, size: 'large' }),
                                null != _ ? _ : r().createElement('div', { className: c.Z.plus }),
                            ),
                        r().createElement(i.t, {
                            ignoreDiscount: n,
                            tooltipEnabled: a,
                            bigSize: !0,
                            price: d.price.get(),
                            defPrice: d.defPrice.get(),
                            discount: d.discount.get(),
                            priceSeparator: null != _ ? _ : r().createElement('div', { className: c.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, t, n) => {
                'use strict';
                n.d(t, { h: () => s, o: () => u });
                var a = n(7363);
                const s = (0, a.createContext)(null),
                    u = () => {
                        const e = (0, a.useContext)(s);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => s, t: () => u });
                const a = (0, n(3215).q3)()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'totalItemsInStorage',
                                    'isDisabled',
                                    'canAccept',
                                    'canCancel',
                                    'totalItemsInstalled',
                                    'demountKitsCount',
                                ]),
                                {
                                    root: e.object(),
                                    dealPanel: e.object(),
                                    price: e.array('price'),
                                    defPrice: e.array('defPrice'),
                                    discount: e.array('discount'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            changeAutoRenewal: e.createCallback((e) => ({ value: e }), 'onAutoRenewalChanged'),
                        }),
                    ),
                    s = a[0],
                    u = a[1];
            },
            9683: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => i });
                var a = n(6483),
                    s = n.n(a),
                    u = n(7363),
                    r = n.n(u);
                const o = {
                        base: 'DemountKit_base_b5',
                        icon: 'DemountKit_icon_27',
                        base__large: 'DemountKit_base__large_e1',
                        value: 'DemountKit_value_cd',
                    },
                    i = ({ value: e, size: t = 'small', className: n }) =>
                        0 === e
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: s()(o.base, o[`base__${t}`], n) },
                                  r().createElement('div', { className: o.value }, e),
                                  r().createElement('div', { className: o.icon }),
                              );
            },
            1363: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3649),
                    r = n(7363),
                    o = n.n(r),
                    i = n(5282);
                const l = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    _ = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: n,
                        classMix: a,
                        classColorMix: _,
                        linesShown: d,
                        withOffset: m = !0,
                    }) => {
                        const p = (0, u.z4)(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? o().createElement(
                                              'span',
                                              { key: t, className: s()(l, _) },
                                              e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                          )
                                        : e &&
                                          o().createElement(
                                              'span',
                                              { key: t, className: c },
                                              o().createElement(i.n, {
                                                  mediaSize: n,
                                                  blocks: (0, i.D)(e),
                                                  linesCount: d,
                                              }),
                                          ),
                                ),
                            b = (0, r.useMemo)(
                                () =>
                                    t
                                        .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                        .flatMap((e) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g) ? e : e.split(' '),
                                        )
                                        .filter((e) => Boolean(e))
                                        .map((e, t) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                                ? o().createElement(
                                                      'span',
                                                      { key: t, className: s()(l, _) },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : o().createElement('span', { key: t }, `${e} `),
                                        ),
                                [_, t],
                            );
                        return o().createElement(
                            'div',
                            { id: `${e}-details`, className: s()(l, a) },
                            m ? p : o().createElement(i.n, { mediaSize: n, blocks: b, linesCount: d }),
                        );
                    };
            },
            6391: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => i });
                var a = n(6483),
                    s = n.n(a),
                    u = n(7363),
                    r = n.n(u);
                const o = {
                        base: 'Location_base_44',
                        base__countFirst: 'Location_base__countFirst_60',
                        icon: 'Location_icon_7f',
                        base__storage: 'Location_base__storage_bf',
                        base__vehicle: 'Location_base__vehicle_a9',
                        count: 'Location_count_45',
                        count__zero: 'Location_count__zero_f5',
                    },
                    i = ({ countFirst: e = !1, location: t, count: n }) =>
                        r().createElement(
                            'div',
                            { className: s()(o.base, o[`base__${t}`], e && o.base__countFirst) },
                            r().createElement('div', { className: o.icon }),
                            r().createElement('div', { className: s()(o.count, 0 === n && o.count__zero) }, n),
                        );
            },
            3267: (e, t, n) => {
                'use strict';
                n.d(t, { J: () => u });
                var a = n(7363),
                    s = n.n(a);
                const u = ({ wrapper: e, children: t, when: n, withProps: a }) =>
                    n ? s().createElement(e, a, t) : s().createElement(s().Fragment, null, t);
            },
            8401: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => b });
                var a = n(6483),
                    s = n.n(a),
                    u = n(7405),
                    r = n(329),
                    o = n(7078),
                    i = n(5475),
                    l = n(9480),
                    c = n(7363),
                    _ = n.n(c);
                const d = 'Price_base_61',
                    m = 'Price_currency_ae',
                    p = 'Price_currency__discounted_a7',
                    b = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: n,
                        showZero: a = !1,
                        bigSize: b = !1,
                        ignoreDiscount: g = !1,
                        tooltipEnabled: E = !1,
                        className: h,
                        classNames: v,
                    }) => {
                        const f = (0, c.useMemo)(
                            () => ({ stock: null == v ? void 0 : v.discount }),
                            [null == v ? void 0 : v.discount],
                        );
                        return _().createElement(
                            'div',
                            { className: s()(d, h) },
                            l.UI(e, (e, d) => {
                                var h;
                                const C = null == (h = l.U2(t, d)) ? void 0 : h.value,
                                    A = !(g || ((D = e.value), (F = C), void 0 === F || D === F));
                                var D, F;
                                return (
                                    (a || Boolean(e.value)) &&
                                    _().createElement(
                                        c.Fragment,
                                        { key: `${e.value}-${e.name}-${e.isEnough}` },
                                        d > 0 && n,
                                        _().createElement(
                                            o.t,
                                            {
                                                args: {
                                                    tooltipId: i.e1,
                                                    currencyType: e.name,
                                                    price: e.value,
                                                    defPrice: C,
                                                },
                                                isEnabled: E && A,
                                            },
                                            _().createElement(
                                                'div',
                                                { className: s()(m, A && p, null == v ? void 0 : v.currency) },
                                                _().createElement(u.F, {
                                                    isDiscount: A,
                                                    size: b ? r.et.big : r.et.small,
                                                    type: e.name,
                                                    value: e.value,
                                                    isEnough: e.isEnough,
                                                    classNames: f,
                                                }),
                                            ),
                                        ),
                                    )
                                );
                            }),
                        );
                    };
            },
            2189: (e, t, n) => {
                'use strict';
                n.d(t, { Sf: () => f, yy: () => v });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3138),
                    r = n(7363),
                    o = n.n(r);
                const i = {
                        base: 'TextButton_base_b6',
                        base__right: 'TextButton_base__right_39',
                        icon: 'TextButton_icon_17',
                        icon__back: 'TextButton_icon__back_43',
                        icon__forward: 'TextButton_icon__forward_59',
                        icon__close: 'TextButton_icon__close_53',
                        icon__info: 'TextButton_icon__info_33',
                        glow: 'TextButton_glow_a4',
                        caption: 'TextButton_caption_82',
                        caption__back: 'TextButton_caption__back_b9',
                        caption__forward: 'TextButton_caption__forward_4e',
                        caption__close: 'TextButton_caption__close_36',
                        caption__info: 'TextButton_caption__info_23',
                        goto: 'TextButton_goto_e7',
                        base__left: 'TextButton_base__left_ff',
                        shine: 'TextButton_shine_e2',
                    },
                    l = [
                        'caption',
                        'onClick',
                        'goto',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'side',
                        'type',
                        'soundHover',
                        'soundClick',
                    ];
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const _ = (e) => {
                    let t = e.caption,
                        n = e.onClick,
                        a = e.goto,
                        _ = e.classNames,
                        d = e.onMouseEnter,
                        m = e.onMouseLeave,
                        p = e.onMouseDown,
                        b = e.onMouseUp,
                        g = e.side,
                        E = void 0 === g ? 'left' : g,
                        h = e.type,
                        v = void 0 === h ? 'back' : h,
                        f = e.soundHover,
                        C = void 0 === f ? 'highlight' : f,
                        A = e.soundClick,
                        D = void 0 === A ? 'play' : A,
                        F = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) ((n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                            return s;
                        })(e, l);
                    const S = (0, r.useCallback)(
                            (e) => {
                                (null == d || d(e), u.O.sound.play.sound(C));
                            },
                            [d, C],
                        ),
                        y = (0, r.useCallback)(
                            (e) => {
                                null == m || m(e);
                            },
                            [m],
                        ),
                        B = (0, r.useCallback)(
                            (e) => {
                                (null == p || p(e), u.O.sound.play.sound(D));
                            },
                            [p, D],
                        ),
                        w = (0, r.useCallback)(
                            (e) => {
                                null == b || b(e);
                            },
                            [b],
                        );
                    return o().createElement(
                        'div',
                        c(
                            {
                                className: s()(i.base, i[`base__${v}`], i[`base__${E}`], null == _ ? void 0 : _.base),
                                onMouseEnter: S,
                                onMouseLeave: y,
                                onMouseDown: B,
                                onMouseUp: w,
                                onClick: n,
                            },
                            F,
                        ),
                        'info' !== v && o().createElement('div', { className: i.shine }),
                        o().createElement(
                            'div',
                            { className: s()(i.icon, i[`icon__${v}`], i[`icon__${E}`], null == _ ? void 0 : _.icon) },
                            o().createElement('div', { className: s()(i.glow, null == _ ? void 0 : _.glow) }),
                        ),
                        o().createElement(
                            'div',
                            { className: s()(i.caption, i[`caption__${v}`], null == _ ? void 0 : _.caption) },
                            t,
                        ),
                        a && o().createElement('div', { className: s()(i.goto, null == _ ? void 0 : _.goto) }, a),
                    );
                };
                var d = n(4598),
                    m = n(3815),
                    p = n(8526),
                    b = n(5521),
                    g = n(7727),
                    E = n(1922);
                const h = {
                        base: 'SetupApp_base_7b',
                        base__shown: 'SetupApp_base__shown_a0',
                        base__compare: 'SetupApp_base__compare_9d',
                        base__setup: 'SetupApp_base__setup_92',
                        base__padding: 'SetupApp_base__padding_df',
                        close: 'SetupApp_close_da',
                        close__hidden: 'SetupApp_close__hidden_5a',
                        close__small: 'SetupApp_close__small_61',
                        content: 'SetupApp_content_65',
                        content__compare: 'SetupApp_content__compare_6e',
                        content__invisible: 'SetupApp_content__invisible_9a',
                        content__shown: 'SetupApp_content__shown_dd',
                        'show-app': 'SetupApp_show-app_00',
                        content__hidden: 'SetupApp_content__hidden_78',
                        'hide-app': 'SetupApp_hide-app_29',
                        content__padding: 'SetupApp_content__padding_25',
                        panel: 'SetupApp_panel_42',
                        back: 'SetupApp_back_20',
                    },
                    v = 'setup-content',
                    f = ({
                        backgroundImage: e,
                        children: t,
                        panel: n,
                        button: a,
                        show: u = !0,
                        onAnimationDone: i = d.ZT,
                        type: l = 'setup',
                        onClose: c,
                        className: f,
                        closeButtonClassName: C,
                    }) => {
                        const A = (0, E.GS)(),
                            D = (0, r.useRef)(null),
                            F = (0, r.useRef)(!1);
                        ((0, p.gd)(b.n.ESCAPE, c),
                            (0, r.useEffect)(() => {
                                (u && (F.current = !0), F.current && (0, g.G)('cons_select_view'));
                            }, [u]));
                        const S = (0, m.z)(i);
                        return (
                            (0, r.useEffect)(() => {
                                const e = D.current;
                                if (e) {
                                    function t(e) {
                                        e.target === D.current && S();
                                    }
                                    return (
                                        e.addEventListener('animationend', t),
                                        () => {
                                            e.removeEventListener('animationend', t);
                                        }
                                    );
                                }
                            }, [S]),
                            o().createElement(
                                'div',
                                { className: s()(h.base, u && h.base__shown, h[`base__${l}`], f) },
                                e &&
                                    o().createElement('div', {
                                        className: h.back,
                                        style: { backgroundImage: `url(${e})` },
                                    }),
                                a,
                                o().createElement(
                                    'div',
                                    { className: s()(h.close, A && h[`close__${A}`], !u && h.close__hidden, C) },
                                    o().createElement(_, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: c,
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    {
                                        id: v,
                                        ref: D,
                                        className: s()(
                                            h.content,
                                            h[`content__${l}`],
                                            !u && !F.current && h.content__invisible,
                                            h['content__' + (u ? 'shown' : 'hidden')],
                                        ),
                                    },
                                    t,
                                ),
                                n && o().createElement('div', { className: h.panel }, n),
                            )
                        );
                    };
            },
            5282: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => b, D: () => p });
                var a = n(6483),
                    s = n.n(a),
                    u = n(1856),
                    r = n(3138),
                    o = n(9916),
                    i = n(7363),
                    l = n.n(i),
                    c = n(6605);
                const _ = 'ShortenedText_base_fe',
                    d = 'ShortenedText_base__shown_af';
                var m = n(7260);
                const p = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => l().createElement(m.B, { key: t, text: `${e} ` })),
                    b = ({ blocks: e, linesCount: t = 2, mediaSize: n }) => {
                        const a = (0, i.useState)(e),
                            m = a[0],
                            p = a[1],
                            b = (0, i.useState)({ width: 0, height: 0 }),
                            g = b[0],
                            E = b[1],
                            h = (0, i.useRef)(null),
                            v = (0, i.useRef)({ shortened: !1 }),
                            f = (0, i.useCallback)(() => {
                                (0, o.Eu)().then(() => {
                                    const e = (0, c.D)(h);
                                    if (e) {
                                        const n = Number(e.split('rem')[0]),
                                            a = h.current;
                                        if (a && isFinite(n)) {
                                            const e = r.O.view.remToPx(t * n);
                                            E({ height: e, width: a.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        ((0, i.useEffect)(() => {
                            if (e.length)
                                return (v.current.shortened && ((v.current.shortened = !1), p(e)), (0, u.v)(f));
                        }, [e, n, f]),
                            (0, i.useEffect)(() => {
                                if (g.height && !v.current.shortened) {
                                    const e = (0, c.M)(h, g.height);
                                    if (-1 !== e) {
                                        const t = m.slice(0, e);
                                        (t.push(l().createElement('span', { key: e }, '...')),
                                            p(t),
                                            (v.current.shortened = !0));
                                    }
                                }
                            }, [m, g, n]));
                        const C = (0, i.useMemo)(() => (g.height ? { maxHeight: `${g.height}rem` } : {}), [g.height]);
                        return l().createElement('div', { ref: h, className: s()(_, g.height && d), style: C }, m);
                    };
            },
            6605: (e, t, n) => {
                'use strict';
                n.d(t, { D: () => a, M: () => u });
                const a = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    s = (e, t) => e.getBoundingClientRect().top >= t,
                    u = (e, t) => {
                        const n = e.current;
                        if (n) {
                            const e = n.getBoundingClientRect(),
                                a = e.top + t,
                                u = Array.from(n.children);
                            if (u.length) {
                                const t = ((e, t) => {
                                    const n = e.length - 1;
                                    if (!s(e[n], t)) return -1;
                                    let a = 0,
                                        u = n - 1,
                                        r = !1;
                                    for (; u - a > 1; ) {
                                        const n = a + Math.floor(0.5 * (u - a + 1));
                                        ((r = s(e[n], t)), r ? (u = n) : (a = n));
                                    }
                                    return r || s(e[u], t) ? a : u;
                                })(u, a);
                                if (t > 0) {
                                    const n = u[t].getBoundingClientRect();
                                    return e.right - n.right < 16 ? t : t + 1;
                                }
                            }
                        }
                        return -1;
                    };
            },
            2094: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => y });
                var a = n(6483),
                    s = n.n(a),
                    u = n(8526),
                    r = n(5521),
                    o = n(7727),
                    i = n(7363),
                    l = n.n(i),
                    c = n(3978);
                const _ = {
                        base: 'EditableProgress_base_3a',
                        base__small: 'EditableProgress_base__small_e2',
                        glow: 'EditableProgress_glow_2d',
                        glow__left: 'EditableProgress_glow__left_8f',
                        glow__right: 'EditableProgress_glow__right_2d',
                        base__disabled: 'EditableProgress_base__disabled_44',
                        base__finished: 'EditableProgress_base__finished_32',
                        picker: 'EditableProgress_picker_41',
                        progressBar: 'EditableProgress_progressBar_9f',
                        line: 'EditableProgress_line_11',
                        pattern: 'EditableProgress_pattern_79',
                        delta: 'EditableProgress_delta_05',
                        gradient: 'EditableProgress_gradient_e7',
                    },
                    d = {
                        bgImageBase: '#ffffff19',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: { bgImageBase: '#ffb266', bgImageDisabled: '#ffffff33', bgImageFinished: '#c5ff51a6' },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: { color: 'rgba(249,249,249,0.17)', shadow: '0 0 1rem 0 #ffffff33' },
                    },
                    m = ({
                        size: e = 'normal',
                        value: t,
                        availableMaximum: n,
                        maximum: a,
                        picker: u,
                        allowSlide: r,
                        theme: o = d,
                    }) => {
                        const i = {
                            '--progress-base': o.bgImageBase,
                            '--progress-line-base': o.line.bgColorBase,
                            '--progress-line-disabled': o.line.bgColorDisabled,
                            '--progress-line-finished': o.line.bgColorFinished,
                            '--progress-pattern-base': o.pattern.bgImageBase,
                            '--progress-pattern-disabled': o.pattern.bgImageDisabled,
                            '--progress-pattern-finished': o.pattern.bgImageFinished,
                            '--progress-glow': `url('${o.glow}')`,
                            '--progress-glow-small': `url('${o.glowSmall}')`,
                            '--progress-delta-color': o.delta.color,
                            '--progress-delta-shadow': o.delta.shadow,
                        };
                        return l().createElement(
                            'div',
                            { className: s()(_.progressBar, _.base, _[`base__${e}`]), style: i },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (n / a) * 100 + '%' } },
                                !r && l().createElement('div', { className: s()(_.glow, _.glow__right) }),
                            ),
                            l().createElement(
                                'div',
                                { className: _.line, style: { width: (t / a) * 100 + '%' } },
                                l().createElement('div', { className: _.pattern }),
                                l().createElement('div', { className: _.gradient }),
                                u && l().createElement('div', { className: _.picker }, u),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    b = 'SlideControl_image_61',
                    g = 'SlideControl_image__hover_eb',
                    E = 'SlideControl_image__active_70',
                    h = ({ parentId: e, isActive: t, isHovered: n }) => {
                        const a = s()(b, n && g, t && E);
                        return l().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            l().createElement('div', { className: a }),
                        );
                    },
                    v = 'Slider_base_2c',
                    f = 'Slider_slideArea_dd',
                    C = 'Slider_editor_5c',
                    A = 'Slider_editor__minus_e1',
                    D = 'Slider_editor__plus_b5',
                    F = {
                        base: 'StepEditor_base_f5',
                        base__enabled: 'StepEditor_base__enabled_f4',
                        base__minusOff: 'StepEditor_base__minusOff_19',
                        base__minusOn: 'StepEditor_base__minusOn_9c',
                        base__plusOff: 'StepEditor_base__plusOff_af',
                        base__plusOn: 'StepEditor_base__plusOn_71',
                    },
                    S = ({ parentId: e, type: t, isEnabled: n, onClick: a }) => {
                        const u = s()(F.base, n && F.base__enabled, F[`base__${t}${n ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: u, onClick: a });
                    },
                    y = ({
                        parentId: e,
                        currentValue: t,
                        maximum: n,
                        sliderMaximum: a,
                        sliderMinimum: _ = 0,
                        isDisabled: d = !1,
                        onUpdates: p,
                        withStepEditors: b = !0,
                        stepCount: g = 1,
                    }) => {
                        const E = (0, i.useRef)(null),
                            F = (0, i.useRef)({ down: !1, move: !1, over: !1 }),
                            y = (0, i.useRef)({ currentValue: t, maximum: n, sliderMaximum: a, sliderMinimum: _ }),
                            B = (0, i.useState)(t),
                            w = B[0],
                            k = B[1],
                            x = (0, i.useState)(!1),
                            T = x[0],
                            I = x[1],
                            N = (0, i.useState)(!1),
                            R = N[0],
                            O = N[1],
                            L = (0, i.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        n = y.current.currentValue;
                                    if (g > 1) {
                                        t *= g;
                                        const e = n % g;
                                        t < 0 && e ? (n -= e) : (n += t - e);
                                    } else n += t;
                                    return n;
                                },
                                [g],
                            ),
                            M = (0, i.useCallback)(
                                (e, t) => {
                                    if (!E.current) return 0;
                                    const n = E.current.getBoundingClientRect(),
                                        a = y.current.maximum,
                                        s = n.width / a,
                                        u = e - n.left,
                                        r = Math.floor(s > 0 ? u / s : u);
                                    if (r > a) return a;
                                    if (r <= 0) return 0;
                                    if (g > 1) {
                                        let e = r - (r % g);
                                        const n = r - e;
                                        return (
                                            n > 0 && ((t && r > y.current.currentValue) || n > 0.5 * g) && (e += g),
                                            e
                                        );
                                    }
                                    return r;
                                },
                                [g],
                            ),
                            P = (0, i.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        n = t.sliderMaximum,
                                        a = t.sliderMinimum;
                                    (e < a ? (e = a) : e > n && (e = n),
                                        y.current.currentValue !== e &&
                                            (k(e), (y.current.currentValue = e), p && p(e)));
                                },
                                [p],
                            ),
                            $ = t < a,
                            z = t > 0,
                            H = (0, i.useCallback)(() => {
                                if ($ && F.current.over) {
                                    const e = L(!0);
                                    P(e);
                                }
                            }, [$, L, P]),
                            j = (0, i.useCallback)(() => {
                                if (z && F.current.over) {
                                    const e = L(!1);
                                    P(e);
                                }
                            }, [z, L, P]),
                            W = (0, i.useCallback)(() => {
                                ((F.current.down = !1), O(!1));
                            }, []),
                            G = (0, i.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && F.current.down) {
                                        F.current.move = !0;
                                        const t = M(e.clientX);
                                        P(t);
                                    } else W();
                                },
                                [W, M, P],
                            );
                        ((0, u.gd)(r.n.ARROW_UP, H, !1, !0),
                            (0, u.gd)(r.n.ARROW_RIGHT, H, !1, !0),
                            (0, u.gd)(r.n.ARROW_DOWN, j, !1, !0),
                            (0, u.gd)(r.n.ARROW_LEFT, j, !1, !0),
                            (0, i.useEffect)(() => {
                                y.current.maximum = n;
                            }, [n]),
                            (0, i.useEffect)(() => {
                                if (R)
                                    return (
                                        document.addEventListener('mouseup', W),
                                        document.addEventListener('mousemove', G),
                                        () => {
                                            (document.removeEventListener('mouseup', W),
                                                document.removeEventListener('mousemove', G));
                                        }
                                    );
                            }, [R, G, W]),
                            (0, i.useEffect)(() => {
                                ((y.current.sliderMaximum = a), (y.current.sliderMinimum = _));
                            }, [a, _]),
                            (0, i.useEffect)(() => {
                                t !== y.current.currentValue && ((y.current.currentValue = t), k(t));
                            }, [t]));
                        const U = (0, i.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((F.current.down = !0), O(!0));
                                },
                                [d],
                            ),
                            Z = (0, i.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = M(e.clientX, !F.current.move),
                                        n = y.current,
                                        a = n.currentValue,
                                        s = n.sliderMaximum,
                                        u = n.sliderMinimum;
                                    (P(t), (0, c.u)(a, t, s, u), (F.current.move = !1));
                                },
                                [M, d, P],
                            ),
                            V = (0, i.useCallback)(() => {
                                ((F.current.over = !0), I(!0), (0, o.G)('highlight'));
                            }, []),
                            q = (0, i.useCallback)(() => {
                                ((F.current.over = !1), I(!1));
                            }, []),
                            X = (0, i.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        n = t.currentValue,
                                        a = t.sliderMaximum,
                                        s = t.sliderMinimum,
                                        u = L(e.deltaY > 0);
                                    (P(u), (0, c.u)(n, u, a, s));
                                },
                                [L, P],
                            );
                        return l().createElement(
                            'div',
                            { ref: E, onMouseEnter: V, onMouseLeave: q, onWheel: X, className: v },
                            b &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: s()(C, A) },
                                        l().createElement(S, { parentId: e, type: 'minus', isEnabled: z, onClick: j }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: s()(C, D) },
                                        l().createElement(S, { parentId: e, type: 'plus', isEnabled: $, onClick: H }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: Z, onMouseDown: U, className: f },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: n,
                                    value: w,
                                    availableMaximum: a,
                                    picker: l().createElement(h, { parentId: e, isActive: R, isHovered: T }),
                                }),
                            ),
                        );
                    };
            },
            906: (e, t, n) => {
                'use strict';
                n.d(t, { r: () => i });
                var a = n(7363),
                    s = n.n(a),
                    u = n(6483),
                    r = n.n(u);
                const o = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    i = s().memo(({ isTemporary: e, overlayType: t, overlaySource: n }) => {
                        const u = r()(o.base, e && o.base__fitting),
                            i = r()(o.icon, o[`icon__${t}`]),
                            l = (0, a.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]);
                        return s().createElement(
                            'div',
                            { className: u },
                            s().createElement('div', { className: i, style: l }),
                        );
                    });
            },
            8253: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => i });
                var a = n(7363),
                    s = n.n(a),
                    u = n(6483),
                    r = n.n(u);
                const o = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    i = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: n,
                        isBorderActive: a,
                        children: u,
                        panelType: i,
                        isDisabled: l,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = r()(
                            o.base,
                            !e && o[`base__${i}`],
                            t && o[`base__${t}`],
                            n && !c && !a && o.base__selected,
                            c && o['base__dragIn' + (n ? 'Active' : '')],
                            l && o.base__disabled,
                        );
                        return s().createElement('div', { className: d, onClick: _ }, u);
                    };
            },
            8598: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => l });
                var a = n(7363),
                    s = n.n(a),
                    u = n(6483),
                    r = n.n(u);
                const o = 'Count_base_e4',
                    i = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const t = r()(o, !e && i);
                        return s().createElement('div', { className: t }, e);
                    };
            },
            3141: (e, t, n) => {
                'use strict';
                n.d(t, { c: () => p });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3977),
                    r = n(7363),
                    o = n.n(r),
                    i = n(906),
                    l = n(4105);
                const c = 'Inside_image_e5',
                    _ = 'Inside_image__fitting_11',
                    d = 'Inside_warning_e4',
                    m = 'Inside_change_5a',
                    p = ({
                        level: e,
                        overlayType: t,
                        isTemporary: n,
                        withAttention: a,
                        imageSource: p,
                        isIncompatible: b,
                    }) => {
                        const g = (0, r.useMemo)(() => {
                                const n = t === u.qm ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(n);
                            }, [t, e]),
                            E = (0, r.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                            h = !g && Boolean(t) && e;
                        return o().createElement(
                            'div',
                            null,
                            h && o().createElement(l.a, { level: e }),
                            o().createElement('div', { className: s()(c, (n || a) && _), style: E }),
                            a && o().createElement('div', { className: d }),
                            b && o().createElement('div', { className: m }),
                            g && o().createElement(i.r, { isTemporary: n, overlaySource: g, overlayType: t }),
                        );
                    };
            },
            4105: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => i });
                var a = n(7363),
                    s = n.n(a),
                    u = n(6483),
                    r = n.n(u);
                const o = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    i = ({ level: e }) => {
                        const t = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            n = r()(o.base, o[`base__level${e}`]);
                        return s().createElement('div', { style: t, className: n });
                    };
            },
            4814: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => b });
                var a = n(9480),
                    s = n(7363),
                    u = n.n(s),
                    r = n(1922),
                    o = n(6483),
                    i = n.n(o),
                    l = n(3457),
                    c = n(7078);
                const _ = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    d = ({
                        name: e,
                        isCorrect: t,
                        isSpecializationActive: n = !0,
                        isDynamic: a,
                        mediaSize: o,
                        isClickable: d,
                        onSpecializationClick: m,
                        index: p,
                    }) => {
                        const b = o !== r.cJ.None,
                            g = (0, s.useCallback)(() => {
                                d && n && m && m(p);
                            }, [p, d, n, m]),
                            E = (0, s.useMemo)(() => {
                                let n = '';
                                b && (n = (o === r.cJ.Large || o === r.cJ.Huge ? r.cJ.Large : r.cJ.Medium) + '_');
                                const a = `${n}${e}_${t ? 'on' : 'off'}`,
                                    s = R.images.gui.maps.icons.specialization.$dyn(a);
                                return s && { backgroundImage: `url(${s})` };
                            }, [e, t, o, b]),
                            h = (0, s.useMemo)(
                                () => ({ spec: e, isDyn: a, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, a, d],
                            );
                        if (!E) return null;
                        const v = i()(
                                `specialization-${e}`,
                                _.base,
                                b && _[`base__${o}`],
                                n && _.base__setup,
                                t && _.base__correct,
                            ),
                            f = i()(_.icon, b && _[`icon__${o}`]),
                            C = b ? '' : _.specializationWrapper,
                            A = u().createElement(
                                'div',
                                { key: e, className: v },
                                u().createElement('div', { className: _.glow }),
                                u().createElement('div', { className: f, style: E }),
                            );
                        return u().createElement(
                            c.t,
                            { args: h },
                            d && n
                                ? u().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: g,
                                      },
                                      A,
                                  )
                                : u().createElement('div', { className: C }, A),
                        );
                    },
                    m = 'Specializations_base_ab';
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const b = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: n,
                    mediaSize: s = r.cJ.None,
                    activeSpecsMask: o,
                    onSpecializationClick: i,
                }) =>
                    e.length
                        ? u().createElement(
                              'div',
                              { className: m, key: o },
                              a.UI(e, (e, a) =>
                                  u().createElement(
                                      d,
                                      p({ index: a, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: n,
                                          mediaSize: s,
                                          onSpecializationClick: i,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            9605: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => h });
                var a = n(7363),
                    s = n.n(a),
                    u = n(6483),
                    r = n.n(u);
                let o;
                !(function (e) {
                    ((e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING'));
                })(o || (o = {}));
                const i = 'SwitchButton_base_23',
                    l = 'SwitchButton_base__active_31',
                    c = 'SwitchButton_base__warning_71',
                    _ = 'SwitchButton_buttonBack_ce',
                    d = 'SwitchButton_buttonBackHovered_45',
                    m = 'SwitchButton_base__hovered_b4',
                    p = 'SwitchButton_buttonGlow_4c',
                    b = 'SwitchButton_buttonIcon_d3',
                    g = 'SwitchButton_buttonWarning_3f',
                    E = 'SwitchButton_number_8a',
                    h = ({ id: e, state: t, currentIndex: n, isHovered: u }) => {
                        const h = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            v = e === n,
                            f = !v && t === o.WARNING;
                        return s().createElement(
                            'div',
                            { className: r()(i, { [l]: v, [c]: f, [m]: u }) },
                            s().createElement('div', { className: _ }),
                            s().createElement('div', { className: d }),
                            s().createElement('div', { className: b }),
                            s().createElement('div', { className: p }),
                            s().createElement('div', { className: g }),
                            s().createElement('div', { style: h, className: E }),
                        );
                    };
            },
            9344: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => m });
                var a = n(6483),
                    s = n.n(a),
                    u = n(9480),
                    r = n(7727),
                    o = n(7363),
                    i = n.n(o),
                    l = n(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    m = ({ onClick: e, totalCount: t, currentIndex: n, states: a, isDisabled: m, groupId: p }) => {
                        const b = (0, o.useRef)(null),
                            g = (0, o.useState)(!1),
                            E = g[0],
                            h = g[1],
                            v = (n + 1) % t,
                            f = (0, o.useCallback)(() => {
                                m || e({ groupId: p, currentIndex: v });
                            }, [p, m, v, e]),
                            C = (0, o.useCallback)(() => {
                                m || (h(!0), r.$.playHighlight());
                            }, [m]),
                            A = (0, o.useCallback)(() => {
                                m || h(!1);
                            }, [m]),
                            D = s()(c, m && _);
                        return i().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${p}`,
                                className: D,
                                onClick: f,
                                onMouseEnter: C,
                                onMouseLeave: A,
                                ref: b,
                            },
                            Array.from({ length: t }, (e, t) =>
                                i().createElement(l.U, {
                                    key: t,
                                    id: t,
                                    state: u.MH(a, t),
                                    currentIndex: n,
                                    isHovered: E,
                                }),
                            ),
                            m && i().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, t, n) => {
                'use strict';
                n.d(t, { y: () => w });
                var a = n(4888),
                    s = n(7383),
                    u = n(1396),
                    r = n(3403),
                    o = n(7363),
                    i = n.n(o),
                    l = n(2558),
                    c = n(8934),
                    _ = n(3220),
                    d = n(5958);
                const m = 'BackEffects_shine_f6',
                    p = 'BackEffects_sparks_55',
                    b = 'BackEffects_nut_79',
                    g = 'BackEffects_wrench_5a',
                    E = { enterActive: 'BackEffects_shine__enterActive_54' },
                    h = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    v = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    f = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    C = [a.dZ, a.sH],
                    A = i().memo(({ in: e, actionType: t }) =>
                        i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(
                                c.Z,
                                { in: e, timeout: d.Dp, classNames: E },
                                i().createElement('div', { className: m }),
                            ),
                            i().createElement(
                                c.Z,
                                { in: e, timeout: d.IG, classNames: h },
                                i().createElement('div', { className: p }),
                            ),
                            C.includes(t) &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        c.Z,
                                        { in: e, timeout: d.wx, classNames: v },
                                        i().createElement('div', { className: b }),
                                    ),
                                    i().createElement(
                                        c.Z,
                                        { in: e, timeout: d.Kz, classNames: f },
                                        i().createElement('div', { className: g }),
                                    ),
                                ),
                        ),
                    ),
                    D = 'ColorMask_base_60',
                    F = 'ColorMask_base__enterActive_62',
                    S = ({ inProp: e, maskImage: t }) =>
                        i().createElement(
                            c.Z,
                            { in: e, timeout: d.Qj, classNames: { enterActive: F } },
                            i().createElement('div', { className: D, style: { maskImage: `url(${t})` } }),
                        ),
                    y = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    B = { enter: y.base__enter, exit: y.base__enter },
                    w = (0, r.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: n,
                            slotType: r,
                            isEmpty: m = !1,
                            imageSource: p,
                            itemInstalledSetupIndex: b,
                        }) => {
                            const g = (0, _.t)().model.lastSlotAction.get(),
                                E = g.leftID,
                                h = g.rightID,
                                v = g.leftIntCD,
                                f = g.rightIntCD,
                                C = g.actionType,
                                D = g.intCD,
                                F = (0, o.useState)(!0),
                                w = F[0],
                                k = F[1],
                                x = (0, o.useState)(!0),
                                T = x[0],
                                I = x[1],
                                N = (0, o.useState)(p),
                                R = N[0],
                                O = N[1],
                                L = (0, o.useState)(n),
                                M = L[0],
                                P = L[1],
                                $ = (0, o.useState)(b),
                                z = $[0],
                                H = $[1],
                                j = (0, u.K)(),
                                W = (0, u.K)(),
                                G = [a._2, a.dZ, a.sH],
                                U = (D === n || D === M) && z !== b && G.includes(C),
                                Z = -1 === v || -1 === f,
                                V = r ? `base${r[0].toUpperCase() + r.slice(1)}` : 'base',
                                q = d.Sr[C] || 0;
                            (0, o.useEffect)(() => {
                                m || O(p);
                            }, [m, p]);
                            const X = (0, o.useCallback)(
                                    (e) => {
                                        const n = Object.assign({}, B);
                                        switch (C) {
                                            case a.Xo: {
                                                const e = E === t ? d.mI.RIGHT : d.mI.LEFT,
                                                    a = h - E != 1 ? d.mI.SWAP : '';
                                                ((n.enterDone = y[`${V}__enter${e}${a}`]),
                                                    (n.exit = y[`${V}__exit${e}${a}`]),
                                                    Z &&
                                                        (m
                                                            ? (n.enterDone = y[`${V}__enter${d.mI.FADE}`])
                                                            : (n.exit = y[`${V}__exit${d.mI.FADE}`])));
                                                break;
                                            }
                                            case a._2:
                                                ((n.enterDone = y[`${V}__enter${d.mI.DESTROY}`]),
                                                    (n.exit = y[`${V}__exit${d.mI.DESTROY}`]),
                                                    j.run(() => k(!0), d.YJ),
                                                    I(!0));
                                                break;
                                            case a.sH:
                                            case a.dZ:
                                                ((n.enter = y[`${V}__enter${d.mI.DEMOUNT}${d.mI.FADE}`]),
                                                    (n.exit = y[`${V}__exit${d.mI.DEMOUNT}`]),
                                                    j.run(() => k(!0), d.Ij));
                                                break;
                                            case a.eC:
                                            case a.FR:
                                                if (r !== s.g9) {
                                                    const e = C === a.eC ? d.mI.FITTING : d.mI.FITTING_REMOVE;
                                                    ((n.enter = y[`${V}__enter${e}`]),
                                                        (n.exit = y[`${V}__exit${e}`]),
                                                        (n.exitActive = y[`${V}__exitActive${d.mI.FITTING}`]));
                                                } else
                                                    ((n.enterDone = y[`${V}__enter${d.mI.FADE}`]),
                                                        (n.exit = y[`${V}__exit${d.mI.FADE}`]));
                                                break;
                                            default:
                                                return e;
                                        }
                                        return i().cloneElement(e, { classNames: n, timeout: q });
                                    },
                                    [C, q, E, t, h, V, Z, m, j, r],
                                ),
                                K = (0, o.useCallback)(
                                    (e) => {
                                        W.run(() => {
                                            ((e.className = ''), e.classList.add(y.base), P(n), H(b));
                                        }, q);
                                    },
                                    [W, q, n, b],
                                ),
                                Y = (0, o.useCallback)(() => {
                                    (k(!1), I(!1));
                                }, []);
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(
                                    l.Z,
                                    { component: null, childFactory: X },
                                    i().createElement(
                                        c.Z,
                                        {
                                            key: n,
                                            timeout: q,
                                            classNames: B,
                                            onEntered: K,
                                            onExiting: Y,
                                            unmountOnExit: !0,
                                        },
                                        i().createElement('div', { className: y.base }, e),
                                    ),
                                ),
                                U &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement(A, { in: w, actionType: C }),
                                        i().createElement(S, { inProp: T, maskImage: R }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Dp: () => i,
                    IG: () => l,
                    Ij: () => r,
                    Kz: () => _,
                    PD: () => s,
                    Qj: () => d,
                    Sr: () => p,
                    YJ: () => o,
                    mI: () => m,
                    wx: () => c,
                });
                var a = n(4888);
                const s = 200,
                    u = 1600,
                    r = 900,
                    o = 900,
                    i = 200,
                    l = 400,
                    c = 600,
                    _ = 600,
                    d = 1200;
                let m;
                !(function (e) {
                    ((e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount'));
                })(m || (m = {}));
                const p = { [a.Xo]: s, [a.FR]: 250, [a.eC]: 250, [a._2]: 1400, [a.dZ]: u, [a.sH]: u, [a.Fd]: u };
            },
            5096: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3403),
                    r = n(7363),
                    o = n.n(r),
                    i = n(1922),
                    l = n(3028);
                const c = {
                        base: 'WeaponOccupancy_base_19',
                        base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                        tip: 'WeaponOccupancy_tip_18',
                        occupancy: 'WeaponOccupancy_occupancy_6e',
                        occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                        occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                        occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                    },
                    _ = (0, u.Pi)(({ isDetailed: e = !1, isShortened: t = !1 }) => {
                        const n = (0, i.GS)(),
                            a = (0, l.t)().model.shellsSetup.get(),
                            u = a.installedCount,
                            r = a.maxCount,
                            _ = u === r,
                            d = R.strings.tank_setup.shells,
                            m = _ ? d.ammunitionFull() : d.ammunitionIncomplete();
                        return o().createElement(
                            'div',
                            { className: s()(c.base, !_ && c.base__incomplete) },
                            !t && o().createElement('div', { className: c.tip }, m),
                            e
                                ? `${u}/${r}`
                                : o().createElement(
                                      'div',
                                      {
                                          className: s()(
                                              c.occupancy,
                                              !_ && c.occupancy__incomplete,
                                              c[`occupancy__${n}`],
                                          ),
                                      },
                                      `${u}/${r}`,
                                  ),
                        );
                    });
            },
            3978: (e, t, n) => {
                'use strict';
                n.d(t, { d: () => s, u: () => u });
                var a = n(7727);
                const s = (e, t) => {
                        const n = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, a.G)(n + '_' + e) : (0, a.G)(n);
                    },
                    u = (e, t, n, s) => {
                        t > n ||
                            t < s ||
                            (t > e ? (0, a.G)('cons_ammo_roll_plus') : t < e && (0, a.G)('cons_ammo_roll_minus'));
                    };
            },
            3977: (e, t, n) => {
                'use strict';
                n.d(t, { qm: () => a });
                const a = 'equipmentModernized';
            },
            5475: (e, t, n) => {
                'use strict';
                n.d(t, { e1: () => a });
                const a = 'priceDiscount';
            },
            4888: (e, t, n) => {
                'use strict';
                n.d(t, {
                    DA: () => u,
                    FR: () => s,
                    Fd: () => i,
                    GV: () => d,
                    Rs: () => _,
                    Xo: () => r,
                    _2: () => c,
                    dZ: () => o,
                    eC: () => a,
                    sH: () => l,
                });
                const a = 'select',
                    s = 'undo',
                    u = 'cancel',
                    r = 'swap',
                    o = 'demount',
                    i = 'demount_from_setup',
                    l = 'demount_from_setups',
                    c = 'destroy',
                    _ = 'upgrade',
                    d = 'add_one';
            },
            5344: (e, t, n) => {
                'use strict';
                let a;
                (n.d(t, { d: () => a }),
                    (function (e) {
                        ((e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary'));
                    })(a || (a = {})));
            },
            7383: (e, t, n) => {
                'use strict';
                n.d(t, {
                    $4: () => _,
                    G$: () => r,
                    S: () => d,
                    WI: () => i,
                    YN: () => o,
                    YR: () => c,
                    g9: () => s,
                    mH: () => u,
                    pi: () => m,
                    yZ: () => l,
                    zn: () => a,
                });
                const a = 'optDevices',
                    s = 'shells',
                    u = 'consumables',
                    r = 'battleBoosters',
                    o = 'battleAbilities',
                    i = 'toggleShells',
                    l = 'toggleCamouflage',
                    c = 'apply',
                    _ = 'equipCoinInfo',
                    d = 'simple',
                    m = 'modernized';
            },
            6880: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            4382: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Checkbox_base_36',
                    base__disabled: 'Checkbox_base__disabled_08',
                    base__center: 'Checkbox_base__center_52',
                    base__bottom: 'Checkbox_base__bottom_28',
                    input: 'Checkbox_input_37',
                    base__mouseDown: 'Checkbox_base__mouseDown_45',
                    base__small: 'Checkbox_base__small_18',
                    base__medium: 'Checkbox_base__medium_12',
                    base__large: 'Checkbox_base__large_f7',
                    base__extraLarge: 'Checkbox_base__extraLarge_c9',
                    alertOverlay: 'Checkbox_alertOverlay_52',
                    base__alert: 'Checkbox_base__alert_b7',
                    blink: 'Checkbox_blink_5e',
                    base__checked: 'Checkbox_base__checked_a2',
                    inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                    highlight: 'Checkbox_highlight_b8',
                    base__main: 'Checkbox_base__main_3a',
                    base__primary: 'Checkbox_base__primary_ab',
                    checkmark: 'Checkbox_checkmark_60',
                    fadeIn: 'Checkbox_fadeIn_1a',
                    label: 'Checkbox_label_bc',
                    labelContent: 'Checkbox_labelContent_64',
                };
            },
            8460: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Currency_base_57',
                    icon: 'Currency_icon_c5',
                    base__small: 'Currency_base__small_af',
                    base__big: 'Currency_base__big_bc',
                    base__large: 'Currency_base__large_65',
                    base__extraLarge: 'Currency_base__extraLarge_4d',
                    'icon__credits-small': 'Currency_icon__credits-small_9b',
                    'icon__credits-big': 'Currency_icon__credits-big_96',
                    'icon__credits-large': 'Currency_icon__credits-large_ac',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                    'icon__gold-small': 'Currency_icon__gold-small_86',
                    'icon__gold-big': 'Currency_icon__gold-big_15',
                    'icon__gold-large': 'Currency_icon__gold-large_36',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                    'icon__crystal-small': 'Currency_icon__crystal-small_27',
                    'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                    'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                    'icon__xp-small': 'Currency_icon__xp-small_a7',
                    'icon__xp-big': 'Currency_icon__xp-big_97',
                    'icon__xp-large': 'Currency_icon__xp-large_6b',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                    'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                    'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                    'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                    'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                    value: 'Currency_value_e1',
                    value__freeXP: 'Currency_value__freeXP_cb',
                    value__credits: 'Currency_value__credits_76',
                    value__gold: 'Currency_value__gold_dd',
                    value__xp: 'Currency_value__xp_b0',
                    value__crystal: 'Currency_value__crystal_19',
                    value__equipCoin: 'Currency_value__equipCoin_d0',
                    value__eliteXP: 'Currency_value__eliteXP_62',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
            },
            5287: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            8852: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    blackReal: 'FormatTextWithColorTags_blackReal_3c',
                    whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                    white: 'FormatTextWithColorTags_white_16',
                    whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                    whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                    par: 'FormatTextWithColorTags_par_ca',
                    parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                    parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                    red: 'FormatTextWithColorTags_red_60',
                    redDark: 'FormatTextWithColorTags_redDark_03',
                    yellow: 'FormatTextWithColorTags_yellow_ad',
                    orange: 'FormatTextWithColorTags_orange_e4',
                    cream: 'FormatTextWithColorTags_cream_cd',
                    brown: 'FormatTextWithColorTags_brown_c8',
                    greenBright: 'FormatTextWithColorTags_greenBright_f0',
                    green: 'FormatTextWithColorTags_green_c5',
                    greenDark: 'FormatTextWithColorTags_greenDark_af',
                    blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                    blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                    cred: 'FormatTextWithColorTags_cred_4e',
                    gold: 'FormatTextWithColorTags_gold_90',
                    bond: 'FormatTextWithColorTags_bond_71',
                    prom: 'FormatTextWithColorTags_prom_dd',
                    parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                };
            },
            1960: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Layout_base_81',
                    base__small: 'Layout_base__small_cb',
                    base__medium: 'Layout_base__medium_df',
                    base__large: 'Layout_base__large_f6',
                    base__huge: 'Layout_base__huge_d2',
                    header: 'Layout_header_46',
                    base__compare: 'Layout_base__compare_56',
                    header__small: 'Layout_header__small_cb',
                    header__tiny: 'Layout_header__tiny_4b',
                    content: 'Layout_content_79',
                    main: 'Layout_main_df',
                    inner: 'Layout_inner_3e',
                    footer: 'Layout_footer_f4',
                };
            },
            8529: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Animation_base_ab',
                    base__withAnimation: 'Animation_base__withAnimation_41',
                    'action-show': 'Animation_action-show_f8',
                    base__enter: 'Animation_base__enter_1e',
                    base__exit: 'Animation_base__exit_88',
                    'action-hide': 'Animation_action-hide_44',
                };
            },
            628: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'App_base_44',
                    base__dialog: 'App_base__dialog_fa',
                    storage: 'App_storage_d5',
                    from: 'App_from_a4',
                    plus: 'App_plus_04',
                    renewal: 'App_renewal_06',
                    renewal__dialog: 'App_renewal__dialog_ba',
                    control: 'App_control_fc',
                    totalPrice: 'App_totalPrice_87',
                    totalPrice__mixed: 'App_totalPrice__mixed_cc',
                };
            },
            2527: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'ConfirmButton_base_75' };
            },
            8099: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'Controls_base_d3', button: 'Controls_button_f8' };
            },
            1523: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'TotalPrice_base_d9',
                    message: 'TotalPrice_message_66',
                    message__hidden: 'TotalPrice_message__hidden_29',
                    plus: 'TotalPrice_plus_f0',
                };
            },
            7363: (e) => {
                'use strict';
                e.exports = React;
            },
            1533: (e) => {
                'use strict';
                e.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var s = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, n, a] = deferred[i], u = !0, r = 0; r < t.length; r++)
                        (!1 & a || s >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((u = !1), a < s && (s = a));
                    if (u) {
                        deferred.splice(i--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 336),
        (() => {
            var e = {
                336: 0,
                26: 0,
                301: 0,
                826: 0,
                225: 0,
                418: 0,
                376: 0,
                927: 0,
                745: 0,
                490: 0,
                62: 0,
                884: 0,
                754: 0,
                803: 0,
                761: 0,
                833: 0,
                795: 0,
                723: 0,
                287: 0,
                975: 0,
                197: 0,
                553: 0,
            };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        s,
                        [u, r, o] = n,
                        i = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (a in r) __webpack_require__.o(r, a) && (__webpack_require__.m[a] = r[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); i < u.length; i++)
                        ((s = u[i]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(8082));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
