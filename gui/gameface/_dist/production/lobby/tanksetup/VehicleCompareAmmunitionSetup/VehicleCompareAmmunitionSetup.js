(() => {
    var __webpack_modules__ = {
            3457: (e, t, a) => {
                'use strict';
                a.d(t, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var n = a(6483),
                    u = a.n(n),
                    s = a(7727),
                    r = a(7363),
                    o = a.n(r),
                    i = a(6880),
                    l = a(2106);
                const c = ({
                    children: e,
                    size: t,
                    disabled: a,
                    mixClass: n,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: p,
                    onClick: E,
                    isFocused: b = !1,
                    type: g = l.L.primary,
                    soundHover: h = 'highlight',
                    soundClick: A = 'play',
                }) => {
                    const v = (0, r.useRef)(null),
                        C = (0, r.useState)(b),
                        f = C[0],
                        D = C[1],
                        F = (0, r.useState)(!1),
                        B = F[0],
                        y = F[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                f && null !== v.current && !v.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [f]),
                        (0, r.useEffect)(() => {
                            D(b);
                        }, [b]),
                        o().createElement(
                            'div',
                            {
                                ref: v,
                                className: u()(
                                    i.Z.base,
                                    i.Z[`base__${g}`],
                                    a && i.Z.base__disabled,
                                    t && i.Z[`base__${t}`],
                                    f && i.Z.base__focus,
                                    B && i.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    a || (null !== h && (0, s.G)(h), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    a || (m && m(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    a ||
                                        (null !== A && (0, s.G)(A),
                                        d && d(e),
                                        b && (a || (v.current && (v.current.focus(), D(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    a || (p && p(e), y(!1));
                                },
                                onClick: function (e) {
                                    a || (E && E(e));
                                },
                            },
                            g !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: u()(i.Z.state, i.Z.state__default) },
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
            2106: (e, t, a) => {
                'use strict';
                let n, u;
                (a.d(t, { L: () => n, q: () => u }),
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
                    })(u || (u = {})));
            },
            2262: (e, t, a) => {
                'use strict';
                a.d(t, { Rh: () => l.Rh, XZ: () => m, yB: () => l.yB });
                var n = a(7363),
                    u = a.n(n),
                    s = a(6483),
                    r = a.n(s),
                    o = a(7727),
                    i = a(1641),
                    l = a(8844),
                    c = a(4382);
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
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.id,
                        a = e.isChecked,
                        s = void 0 !== a && a,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        E = e.isAlert,
                        b = void 0 !== E && E,
                        g = e.size,
                        h = void 0 === g ? l.yB.medium : g,
                        A = e.type,
                        v = void 0 === A ? l.Rh.primary : A,
                        C = e.soundHover,
                        f = void 0 === C ? 'highlight' : C,
                        D = e.soundClick,
                        F = void 0 === D ? 'play' : D,
                        B = e.onMouseEnter,
                        y = e.onMouseLeave,
                        w = e.onMouseUp,
                        S = e.onMouseDown,
                        k = e.onClick,
                        T = e.onChange,
                        x = e.onFocus,
                        N = e.onBlur,
                        L = e.text,
                        R = e.contentStyles,
                        M = e.children,
                        I = e.alignment,
                        O = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                            return u;
                        })(e, _);
                    const P = (0, n.useState)(!1),
                        $ = P[0],
                        H = P[1],
                        z = (0, n.useState)(!1),
                        j = (z[0], z[1]),
                        W = (0, n.useCallback)(
                            (e) => {
                                p || (T && T(), k && k(e));
                            },
                            [p, T, k],
                        ),
                        G = (0, n.useCallback)(
                            (e) => {
                                const t = e.button === i.t.LEFT;
                                p || (t && H(!0), t && S && S(e), F && (0, o.G)(F));
                            },
                            [p, S, F],
                        ),
                        Z = (0, n.useCallback)(
                            (e) => {
                                p || (H(!1), w && w(e));
                            },
                            [p, w],
                        ),
                        V = (0, n.useCallback)(
                            (e) => {
                                p || (B && B(e), f && (0, o.G)(f));
                            },
                            [p, B, f],
                        ),
                        U = (0, n.useCallback)(
                            (e) => {
                                p || (H(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        q = (0, n.useCallback)(
                            (e) => {
                                p || (j(!0), x && x(e));
                            },
                            [p, x],
                        ),
                        K = (0, n.useCallback)(
                            (e) => {
                                p || (j(!1), N && N(e));
                            },
                            [p, N],
                        ),
                        X = u().createElement(
                            'div',
                            { className: c.Z.label },
                            u().createElement(
                                'div',
                                { className: r()(c.Z.labelContent, 's-labelContent'), style: R },
                                L || M,
                            ),
                        );
                    return u().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: r()(c.Z.base, c.Z[`base__${h}`], c.Z[`base__${v}`], {
                                    [c.Z.base__checked]: s,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: $,
                                    [c.Z.base__alert]: b,
                                    [c.Z.base__center]: I === l.N3.Center,
                                    [c.Z.base__bottom]: I === l.N3.Bottom,
                                }),
                                onClick: W,
                                onMouseEnter: V,
                                onMouseLeave: U,
                                onMouseDown: G,
                                onMouseUp: Z,
                                onFocus: q,
                                onBlur: K,
                            },
                            O,
                        ),
                        u().createElement(
                            'div',
                            { className: c.Z.input },
                            u().createElement('div', { className: c.Z.alertOverlay }),
                            u().createElement('div', { className: c.Z.inputHoverOverlay }),
                            u().createElement('div', { className: c.Z.highlight }),
                        ),
                        u().createElement('div', { className: c.Z.checkmark }),
                        ((L || M) && X) || null,
                    );
                };
            },
            8844: (e, t, a) => {
                'use strict';
                let n, u, s;
                (a.d(t, { N3: () => s, Rh: () => u, yB: () => n }),
                    (function (e) {
                        ((e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(u || (u = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(s || (s = {})));
            },
            7405: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => c });
                var n = a(6483),
                    u = a.n(n),
                    s = a(2372),
                    r = a(7363),
                    o = a.n(r),
                    i = a(8460),
                    l = a(329);
                const c = (0, r.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: a,
                        type: n,
                        value: r,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: p,
                        classNames: E,
                    }) =>
                        o().createElement(
                            'span',
                            { className: u()(i.Z.base, i.Z[`base__${a}`], p) },
                            o().createElement(
                                'span',
                                {
                                    className: u()(
                                        i.Z.value,
                                        i.Z[`value__${n}`],
                                        !d && i.Z.value__notEnough,
                                        null == E ? void 0 : E.value,
                                    ),
                                },
                                _ && r > 0 && '+',
                                o().createElement(s.A, { value: r, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: u()(i.Z.icon, i.Z[`icon__${n}-${a}`], null == E ? void 0 : E.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: u()(
                                            i.Z.stock,
                                            c && i.Z.stock__indent,
                                            t && i.Z.stock__interactive,
                                            null == E ? void 0 : E.stock,
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
            329: (e, t, a) => {
                'use strict';
                let n, u, s;
                (a.d(t, { V2: () => u, et: () => n, we: () => s }),
                    (function (e) {
                        ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(u || (u = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(s || (s = {})));
            },
            2372: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => u });
                var n = a(9916);
                const u = ({ value: e, format: t = 'integral' }) => {
                    const a = (function (e) {
                            return 'gold' === e ? n.B3.GOLD : n.B3.INTEGRAL;
                        })(t),
                        u = n.Z5.getNumberFormat(e, a);
                    return void 0 !== e && void 0 !== u ? u : null;
                };
            },
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var n = a(6483),
                    u = a.n(n),
                    s = a(3649),
                    r = a(7363),
                    o = a.n(r),
                    i = a(5287);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: a,
                    alignment: n = s.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, s.WU)(t, e) : t;
                    return o().createElement(
                        r.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            o().createElement(
                                'div',
                                { className: u()(i.Z.base, a), key: `${t}-${l}` },
                                (0, s.Uw)(t, n, e).map((e, t) =>
                                    o().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, t, a) => {
                'use strict';
                a.d(t, { Q: () => o, Y: () => l });
                var n = a(3138),
                    u = a(7363),
                    s = a(1043),
                    r = a(5262);
                function o(e = n.O.client.getSize('rem')) {
                    const t = e.width,
                        a = e.height;
                    return Object.assign({ width: t, height: a }, (0, r.T)(t, a, s.j));
                }
                const i = o(),
                    l = (0, u.createContext)(i);
            },
            1039: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                var n = a(3138),
                    u = a(7363),
                    s = a.n(u),
                    r = a(3495);
                const o = ({ children: e }) => {
                    const t = (0, u.useState)(r.Q),
                        a = t[0],
                        o = t[1],
                        i = (0, u.useState)(!1),
                        l = i[0],
                        c = i[1];
                    return (
                        (0, u.useLayoutEffect)(() => {
                            function e() {
                                o((e) => {
                                    const t = n.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : (0, r.Q)(t);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                n.O.client.events.on('clientResized', e),
                                n.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (n.O.client.events.off('clientResized', e),
                                        n.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        s().createElement(r.Y.Provider, { value: a }, l && e)
                    );
                };
            },
            6010: (e, t, a) => {
                'use strict';
                var n = a(7363),
                    u = a(7382),
                    s = a(3495);
                const r = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                            return u;
                        })(e, r);
                    const o = (0, n.useContext)(s.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        _ = o.small,
                        d = o.extraSmall,
                        m = o.extraLargeWidth,
                        p = o.largeWidth,
                        E = o.mediumWidth,
                        b = o.smallWidth,
                        g = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        A = o.largeHeight,
                        v = o.mediumHeight,
                        C = o.smallHeight,
                        f = o.extraSmallHeight,
                        D = { extraLarge: h, large: A, medium: v, small: C, extraSmall: f };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && i) return t;
                        if (a.large && l) return t;
                        if (a.medium && c) return t;
                        if (a.small && _) return t;
                        if (a.extraSmall && d) return t;
                    } else {
                        if (a.extraLargeWidth && m) return (0, u.H)(t, a, D);
                        if (a.largeWidth && p) return (0, u.H)(t, a, D);
                        if (a.mediumWidth && E) return (0, u.H)(t, a, D);
                        if (a.smallWidth && b) return (0, u.H)(t, a, D);
                        if (a.extraSmallWidth && g) return (0, u.H)(t, a, D);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && h) return t;
                            if (a.largeHeight && A) return t;
                            if (a.mediumHeight && v) return t;
                            if (a.smallHeight && C) return t;
                            if (a.extraSmallHeight && f) return t;
                        }
                    }
                    return null;
                });
            },
            7382: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => n });
                const n = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, a) => {
                'use strict';
                a.d(t, { YN: () => u.Y, ZN: () => n.Z });
                a(6010);
                var n = a(1039),
                    u = a(3495);
            },
            1043: (e, t, a) => {
                'use strict';
                a.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, a) => {
                'use strict';
                var n;
                function u(e, t, a) {
                    const n = (function (e, t) {
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
                        })(e, a),
                        u = (function (e, t) {
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
                        })(t, a),
                        s = Math.min(n, u);
                    return {
                        extraLarge: s === a.extraLarge.weight,
                        large: s === a.large.weight,
                        medium: s === a.medium.weight,
                        small: s === a.small.weight,
                        extraSmall: s === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: u === a.extraLarge.weight,
                        largeHeight: u === a.large.weight,
                        mediumHeight: u === a.medium.weight,
                        smallHeight: u === a.small.weight,
                        extraSmallHeight: u === a.extraSmall.weight,
                    };
                }
                (a.d(t, { T: () => u, u: () => n }),
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
                    })(n || (n = {})));
            },
            8089: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => _ });
                var n = a(6483),
                    u = a.n(n),
                    s = a(3138),
                    r = a(7363),
                    o = a.n(r),
                    i = a(7476);
                const l = [
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
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const _ = (e) => {
                    let t = e.caption,
                        a = e.onClick,
                        n = e.goto,
                        _ = e.classNames,
                        d = e.onMouseEnter,
                        m = e.onMouseLeave,
                        p = e.onMouseDown,
                        E = e.onMouseUp,
                        b = e.side,
                        g = void 0 === b ? 'left' : b,
                        h = e.type,
                        A = void 0 === h ? 'back' : h,
                        v = e.soundHover,
                        C = void 0 === v ? 'highlight' : v,
                        f = e.soundClick,
                        D = void 0 === f ? 'play' : f,
                        F = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                            return u;
                        })(e, l);
                    const B = (0, r.useCallback)(
                            (e) => {
                                (null == d || d(e), s.O.sound.play.sound(C));
                            },
                            [d, C],
                        ),
                        y = (0, r.useCallback)(
                            (e) => {
                                null == m || m(e);
                            },
                            [m],
                        ),
                        w = (0, r.useCallback)(
                            (e) => {
                                (null == p || p(e), s.O.sound.play.sound(D));
                            },
                            [p, D],
                        ),
                        S = (0, r.useCallback)(
                            (e) => {
                                null == E || E(e);
                            },
                            [E],
                        );
                    return o().createElement(
                        'div',
                        c(
                            {
                                className: u()(
                                    i.Z.base,
                                    i.Z[`base__${A}`],
                                    i.Z[`base__${g}`],
                                    null == _ ? void 0 : _.base,
                                ),
                                onMouseEnter: B,
                                onMouseLeave: y,
                                onMouseDown: w,
                                onMouseUp: S,
                                onClick: a,
                            },
                            F,
                        ),
                        'info' !== A && o().createElement('div', { className: i.Z.shine }),
                        o().createElement(
                            'div',
                            {
                                className: u()(
                                    i.Z.icon,
                                    i.Z[`icon__${A}`],
                                    i.Z[`icon__${g}`],
                                    null == _ ? void 0 : _.icon,
                                ),
                            },
                            o().createElement('div', { className: u()(i.Z.glow, null == _ ? void 0 : _.glow) }),
                        ),
                        o().createElement(
                            'div',
                            { className: u()(i.Z.caption, i.Z[`caption__${A}`], null == _ ? void 0 : _.caption) },
                            t,
                        ),
                        n && o().createElement('div', { className: u()(i.Z.goto, null == _ ? void 0 : _.goto) }, n),
                    );
                };
            },
            7078: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => i });
                var n = a(7363),
                    u = a.n(n),
                    s = a(2056);
                const r = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                            return u;
                        })(e, r);
                    return u().createElement(
                        s.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        t,
                    );
                };
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => l });
                var n = a(2056),
                    u = a(7363),
                    s = a.n(u);
                const r = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            a = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                                return u;
                            })(e, r);
                        const p = (0, u.useMemo)(() => {
                            const e = Object.assign({}, d, { body: a, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, a, l, c, d]);
                        return s().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((E = null == d ? void 0 : d.hasHtmlContent),
                                        E ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: p,
                                },
                                m,
                            ),
                            t,
                        );
                        var E;
                    };
            },
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var n = a(7902),
                    u = a(9916),
                    s = a(7363);
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
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const i = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: u.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            u = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            b = void 0 !== E && E,
                            g = e.decoratorId,
                            h = void 0 === g ? 0 : g,
                            A = e.isEnabled,
                            v = void 0 === A || A,
                            C = e.targetId,
                            f = void 0 === C ? 0 : C,
                            D = e.onShow,
                            F = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                                return u;
                            })(e, r);
                        const y = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, s.useMemo)(() => f || (0, n.F)().resId, [f]),
                            S = (0, s.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (i(a, h, { isMouseEvent: !0, on: !0, arguments: o(u) }, w),
                                    D && D(),
                                    (y.current.isVisible = !0));
                            }, [a, h, u, w, D]),
                            k = (0, s.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        i(a, h, { on: !1 }, w),
                                        y.current.isVisible && F && F(),
                                        (y.current.isVisible = !1));
                                }
                            }, [a, h, w, F]),
                            T = (0, s.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        ((0, s.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === v && k();
                            }, [v, k]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        (window.removeEventListener('mouseleave', k), k());
                                    }
                                ),
                                [k],
                            ));
                        return v
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(y.current.timeoutId),
                                                      (y.current.timeoutId = window.setTimeout(S, p ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (k(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === b && k(), null == d || d(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === b && k(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var x;
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
            1856: (e, t, a) => {
                'use strict';
                a.d(t, { v: () => n });
                const n = (e) => {
                    let t,
                        a = null;
                    return (
                        (a = requestAnimationFrame(() => {
                            a = requestAnimationFrame(() => {
                                ((a = null), (t = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof t && t(), null !== a && cancelAnimationFrame(a));
                        }
                    );
                };
            },
            8246: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => o });
                var n = a(3138);
                function u(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return s(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return s(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const r = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: a = r, context: s = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, a) => {
                            a.forEach((t) => {
                                const a = o.get(t);
                                void 0 !== a && a(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = a(t),
                            u = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? u
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, u);
                    };
                    return {
                        subscribe: (a, u) => {
                            const r = 'string' == typeof u ? `${s}.${u}` : s,
                                i = n.O.view.addModelObserver(r, t, !0);
                            return (o.set(i, a), e && a(l(u)), i);
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const a = l(t);
                            return (...t) => {
                                a(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, a = u(o.keys()); !(e = a()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, a) => {
                'use strict';
                a.d(t, { q3: () => i });
                var n = a(4598),
                    u = a(9174),
                    s = a(7363),
                    r = a.n(s),
                    o = a(8246);
                const i = () => (e, t) => {
                    const a = (0, s.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, s.useRef)([]),
                                m = (a, s, r) => {
                                    var i;
                                    const l = o.U(s),
                                        c =
                                            'real' === a
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == r ? void 0 : r.getter) ? i : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === a ? (null == r ? void 0 : r.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        p = e({
                                            mode: a,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = _(e),
                                                        s = u.LO.box(t, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, u.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const s = null != t ? t : _(e),
                                                        r = u.LO.box(s, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, u.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const s = null != t ? t : _(e),
                                                        r = u.LO.box(s, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, u.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = _(t);
                                                    if (Array.isArray(e)) {
                                                        const s = e.reduce(
                                                            (e, t) => ((e[t] = u.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, u.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            s[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                    {
                                                        const s = e,
                                                            r = Object.entries(s),
                                                            o = r.reduce(
                                                                (e, [t, a]) => ((e[a] = u.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, u.aD)((e) => {
                                                                        r.forEach(([t, a]) => {
                                                                            o[a].set(e[t]);
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
                                        E = { mode: a, model: p, externalModel: c, cleanup: m };
                                    return {
                                        model: p,
                                        controls: 'mocks' === a && r ? r.controls(E) : t(E),
                                        externalModel: c,
                                        mode: a,
                                    };
                                },
                                p = (0, s.useRef)(!1),
                                E = (0, s.useState)(i),
                                b = E[0],
                                g = E[1],
                                h = (0, s.useState)(() => m(i, l, _)),
                                A = h[0],
                                v = h[1];
                            return (
                                (0, s.useEffect)(() => {
                                    p.current ? v(m(b, l, _)) : (p.current = !0);
                                }, [_, b, l]),
                                (0, s.useEffect)(() => {
                                    g(i);
                                }, [i]),
                                (0, s.useEffect)(
                                    () => () => {
                                        (A.externalModel.dispose(), d.current.forEach((e) => e()));
                                    },
                                    [A],
                                ),
                                r().createElement(a.Provider, { value: A }, c)
                            );
                        },
                        () => (0, s.useContext)(a),
                    ];
                };
            },
            527: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, { mouse: () => c, off: () => i, on: () => o, onResize: () => s, onScaleUpdated: () => r }));
                var n = a(2472),
                    u = a(1176);
                const s = (0, n.E)('clientResized'),
                    r = (0, n.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, u.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, u.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, u.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let u = !0;
                                    const s = `mouse${t}`,
                                        r = l[t]((e) => a([e, 'outside']));
                                    function o(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, o),
                                        n(),
                                        () => {
                                            u &&
                                                (r(),
                                                window.removeEventListener(s, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (u = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
                        },
                        enableOutside() {
                            e.enabled && (0, u.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, u.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => s,
                        graphicsQuality: () => o,
                        playSound: () => u.G,
                        setRTPC: () => u.E,
                    }));
                var n = a(527),
                    u = a(2493);
                function s(e = 'px') {
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
            1176: (e, t, a) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => n });
            },
            2493: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function u(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => u, G: () => n });
            },
            2472: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => n });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => r });
                var n = a(5959),
                    u = a(7698),
                    s = a(514);
                const r = { view: a(7641), client: n, sound: s.ZP, intl: u.N };
            },
            7698: (e, t, a) => {
                'use strict';
                a.d(t, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => r });
                var n = a(5959);
                const u = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(u).reduce((e, t) => ((e[t] = () => (0, n.playSound)(u[t])), e), {}),
                    r = { play: Object.assign({}, s, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function u(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => u, getTextureUrl: () => n }));
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => u });
                var n = a(2472);
                const u = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => i,
                        arabic2roman: () => w,
                        children: () => u,
                        displayStatus: () => s.W,
                        displayStatusIs: () => k,
                        enableFullScreenModeSupported: () => N,
                        events: () => r.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => B,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => y,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        initExternalPaddings: () => L,
                        isEventHandled: () => D,
                        isFocused: () => C,
                        pxToRem: () => h,
                        remToPx: () => A,
                        resize: () => p,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    }));
                var n = a(9690),
                    u = a(3722),
                    s = a(6112),
                    r = a(6538),
                    o = a(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function _(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function p(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: A(t.x), y: A(t.y) };
                }
                function b() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function A(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = n.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const k = Object.keys(s.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === s.W[t]), e),
                        {},
                    ),
                    T = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function N() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            a = t.top,
                            n = t.right,
                            u = t.bottom,
                            s = t.left;
                        (e.style.setProperty('--external-padding-top', `${a}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${u}rem`),
                            e.style.setProperty('--external-padding-left', `${s}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const n = ['args'];
                const u = 2,
                    s = 16,
                    r = 32,
                    o = 64,
                    i = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        u = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                                    return u;
                                })(t, n);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, r, {
                                          arguments:
                                              ((u = s),
                                              Object.entries(u).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var u;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? u : r);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, a) => {
                'use strict';
                function n() {}
                a.d(t, { ZT: () => n, jv: () => s, yR: () => u });
                function u(e) {
                    return e;
                }
                function s() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        n = R.invalid('resId'),
                        u = '';
                    var s;
                    t &&
                        ((u = (null == (s = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : s[0]) || ''),
                        (a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== a &&
                            window.subViews[a] &&
                            (n = window.subViews[a].id));
                    return { callerUrl: u, caller: a, stack: t, resId: n };
                };
            },
            3815: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => s });
                var n = a(7363);
                const u = [];
                function s(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), u)
                    );
                }
            },
            8526: (e, t, a) => {
                'use strict';
                a.d(t, { gd: () => o });
                var n = a(3138),
                    u = a(5521),
                    s = (a(9916), a(7363));
                const r = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function o(e = u.n.NONE, t = r, a = !1, o = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== u.n.NONE)
                            return (
                                window.addEventListener('keydown', s, a),
                                () => {
                                    window.removeEventListener('keydown', s, a);
                                }
                            );
                        function s(u) {
                            if (u.keyCode === e) {
                                if (!o && n.O.view.isEventHandled()) return;
                                (n.O.view.setEventHandled(), t(u), a && u.stopPropagation());
                            }
                        }
                    }, [t, e, a, o]);
                }
            },
            5521: (e, t, a) => {
                'use strict';
                let n, u;
                (a.d(t, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(u || (u = {})));
            },
            9480: (e, t, a) => {
                'use strict';
                function n(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                a.d(t, { G: () => o, U2: () => n, UI: () => r, dF: () => l, hX: () => i, u4: () => c });
                const u = n;
                function s(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let a = 0; a < e.length; a++) {
                        if (t(u(e, a), a, e)) return !0;
                    }
                    return !1;
                }
                function i(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let u = 0; u < e.length; u++) {
                        var n;
                        const s = null == (n = e[u]) ? void 0 : n.value;
                        t(s, u, e) && a.push(s);
                    }
                    return a;
                }
                function l(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        const n = s(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function c(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let n = a;
                    for (let a = 0; a < e.length; a++) {
                        n = t(n, u(e, a), a, e);
                    }
                    return n;
                }
            },
            1641: (e, t, a) => {
                'use strict';
                let n;
                (a.d(t, { t: () => n }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(n || (n = {})));
            },
            9690: (e, t, a) => {
                'use strict';
                a.d(t, { HG: () => o, cg: () => s });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    u = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function s(e) {
                    let t = '';
                    for (let a = u.length - 1; a >= 0; a--) for (; e >= u[a]; ) ((t += n[a]), (e -= u[a]));
                    return t;
                }
                const r = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (r ? `${e}` : s(e));
            },
            7727: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                a.d(t, { $: () => u, G: () => n });
                const u = {
                    playHighlight() {
                        n('highlight');
                    },
                    playClick() {
                        n('play');
                    },
                    playYes() {
                        n('yes1');
                    },
                };
            },
            3649: (e, t, a) => {
                'use strict';
                a.d(t, {
                    BN: () => o,
                    Eg: () => c,
                    Uw: () => g,
                    WU: () => s,
                    dL: () => h,
                    e: () => i,
                    uF: () => r,
                    v2: () => u,
                    z4: () => l,
                });
                var n = a(1281);
                let u;
                function s(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(u || (u = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    _ = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    d = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    m = (e, t, a = u.left) => e.split(t).reduce(a === u.left ? _ : d, []),
                    p = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    b = (e, t = u.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(a)) return p(e);
                        if ('ja' === a) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = u.left) => {
                            let a = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                s = l(e);
                            return (m(s, /( )/, t).forEach((e) => (a = a.concat(m(e, n, u.left)))), a);
                        })(e, t);
                    },
                    g = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : b(e, t))),
                    h = (e) => s(R.strings.common.percentValue(), { value: e });
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var n = a(3138);
                class u {
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
                        return (window.__dataTracker || (window.__dataTracker = new u()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, a = 0, u = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = n.O.view.addModelObserver(e, a, u);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(s) : (this._views[a] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const n = this._callbacks[a];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                u.__instance = void 0;
                const s = u;
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => s.Z,
                    B3: () => i,
                    Gr: () => l,
                    Z5: () => r.Z5,
                    B0: () => o,
                    c9: () => A,
                    ry: () => g,
                    Eu: () => h,
                });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    a();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const a = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== n)),
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
                n.__instance = void 0;
                const u = n;
                var s = a(1358);
                var r = a(8613);
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
                var d = a(5521),
                    m = a(3138);
                const p = ['args'];
                function E(e, t, a, n, u, s, r) {
                    try {
                        var o = e[s](r),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(n, u);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                        a = arguments;
                                    return new Promise(function (n, u) {
                                        var s = e.apply(t, a);
                                        function r(e) {
                                            E(s, n, u, r, o, 'next', e);
                                        }
                                        function o(e) {
                                            E(s, n, u, r, o, 'throw', e);
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
                    A = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        u = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                                    return u;
                                })(t, p);
                            void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = u),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    v = () => A(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var f = a(7572);
                const D = u.instance,
                    F = {
                        DataTracker: s.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => A(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => A(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            A(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, n, u = R.invalid('resId'), s) => {
                            const r = m.O.view.getViewGlobalPosition(),
                                i = a.getBoundingClientRect(),
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
                            A(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: u,
                                direction: t,
                                bbox: b(p),
                                on: !0,
                                args: s,
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
                            C(e, v);
                        },
                        handleViewEvent: A,
                        onBindingsReady: g,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const u = Object.prototype.toString.call(t[n]);
                                    if (u.startsWith('[object CoherentArrayProxy]')) {
                                        const u = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < u.length; t++) a[n].push({ value: e(u[t].value) });
                                    } else
                                        u.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => s, Z5: () => n, cy: () => u });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    u = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    s = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            7260: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => c });
                var n = a(7363),
                    u = a.n(n),
                    s = a(280),
                    r = a(8852);
                const o = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    i = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, n.memo)(({ text: e, binding: t, classMix: a }) => {
                        const c = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            _ = (0, n.useMemo)(() => t || {}, [t]);
                        let d = o.exec(e),
                            m = e,
                            p = 0;
                        for (; d; ) {
                            const a = d[0],
                                n = i.exec(a),
                                E = l.exec(a),
                                b = d[1];
                            if (n && E) {
                                const e = n[0],
                                    o = e + p++ + e;
                                ((m = m.replace(a, `%(${o})`)),
                                    (_[o] = r.Z[e]
                                        ? u().createElement(
                                              'span',
                                              { className: r.Z[e] },
                                              u().createElement(s.z, { text: b, binding: t }),
                                          )
                                        : u().createElement(
                                              'span',
                                              { style: c(e) },
                                              u().createElement(s.z, { text: b, binding: t }),
                                          )));
                            }
                            d = o.exec(e);
                        }
                        return u().createElement(s.z, { text: m, classMix: a, binding: _ });
                    });
            },
            1922: (e, t, a) => {
                'use strict';
                a.d(t, { Ar: () => _, GS: () => c, cJ: () => l });
                var n = a(6483),
                    u = a.n(n),
                    s = a(7739),
                    r = a(7363),
                    o = a.n(r),
                    i = a(1960);
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
                        const e = (0, r.useContext)(s.YN);
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
                    _ = ({ header: e, content: t, aside: a, footer: n, compare: s = !1 }) => {
                        const r = c(),
                            l = u()(i.Z.base, r && i.Z[`base__${r}`], s && i.Z.base__compare),
                            _ = u()(i.Z.header, r && i.Z[`header__${r}`]),
                            d = u()(i.Z.main),
                            m = u()(i.Z.content);
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
                                a,
                            ),
                            n && o().createElement('div', { className: i.Z.footer }, n),
                        );
                    };
            },
            3522: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => _ });
                var n = a(4598),
                    u = a(9480),
                    s = a(3946),
                    r = a(1922);
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
                        u.UI(e, (e) =>
                            Object.assign({}, e, {
                                price: Object.assign({}, e.price, {
                                    price: u.UI(e.price.price, (e) => Object.assign({}, e)),
                                    defPrice: u.UI(e.price.defPrice, (e) => Object.assign({}, e)),
                                    discount: u.UI(e.price.discount, (e) => Object.assign({}, e)),
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
                            a = (0, s.Om)(
                                () =>
                                    ((e) => {
                                        const t = c(e);
                                        return u.UI(t, (e) =>
                                            Object.assign({}, e, {
                                                bonuses: Object.assign({}, e.bonuses, {
                                                    items: u.UI(e.bonuses.items, (e) =>
                                                        Object.assign({}, e, {
                                                            values: u.UI(e.values, (e) => Object.assign({}, e)),
                                                        }),
                                                    ),
                                                }),
                                                specializations: Object.assign({}, e.specializations, {
                                                    specializations: u.UI(e.specializations.specializations, (e) =>
                                                        Object.assign({}, e),
                                                    ),
                                                }),
                                            }),
                                        );
                                    })(t.optDevices.slots.get()),
                                { equals: n.jv },
                            ),
                            o = (0, s.Om)(() => a().length),
                            _ = (0, s.Om)(
                                (e) => {
                                    const t = u.U2(a(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: n.jv },
                            ),
                            d = (0, s.Om)((e) => _(e).bonuses.items.length, { equals: n.jv }),
                            m = (0, s.Om)(
                                (e, t) => {
                                    const a = _(e),
                                        n = u.U2(a.bonuses.items, t);
                                    if (!n) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, n);
                                },
                                { equals: n.jv },
                            ),
                            p = (0, s.Om)((e) => {
                                const t = d(e);
                                return _(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            E = (0, s.Om)((e, t, a) => {
                                const n = d(e),
                                    u = p(e);
                                let s = u ? a - u : a,
                                    r = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!s) return null;
                                    ((r = n > 2 ? 1 : 2 === n ? (s > 2 ? 2 : 1) : s), (s -= r));
                                }
                                return r;
                            }),
                            b = (0, s.Om)(
                                (e, t) => {
                                    const a = m(e, t);
                                    return u.dF(a.values, ({ valueKey: e }) => e === a.localeName);
                                },
                                { equals: n.jv },
                            ),
                            g = (0, s.Om)(
                                (e, a) =>
                                    ((e, t, a) => {
                                        const n = a !== r.cJ.Tiny || t ? i : l,
                                            s = c(e),
                                            o = u.u4(
                                                s,
                                                (e, t) => {
                                                    const a = n.indexOf(t.itemName);
                                                    return ((e[-1 === a ? Math.max(e.length, l.length) : a] = t), e);
                                                },
                                                [],
                                            );
                                        return u.hX(o, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, a),
                                { equals: n.jv },
                            ),
                            h = (0, s.Om)((e, t) => g(e, t).length),
                            A = (0, s.Om)(
                                (e, t, a) => {
                                    const n = u.U2(g(t, a), e);
                                    if (!n) throw Error(`No consumable found with index: ${n}`);
                                    return Object.assign({}, n);
                                },
                                { equals: n.jv },
                            ),
                            v = (0, s.Om)(
                                () => {
                                    return ((e = t.boosters.slots.get()), c(e));
                                    var e;
                                },
                                { equals: n.jv },
                            ),
                            C = (0, s.Om)(() => v().length),
                            f = (0, s.Om)(
                                (e) => {
                                    const t = u.U2(v(), e);
                                    if (!t) throw Error(`No battle booster found with index: ${e}`);
                                    return Object.assign({}, t);
                                },
                                { equals: n.jv },
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
                                    bonusVisibleLinesCount: E,
                                    bonusValue: b,
                                },
                                consumables: { length: h, consumable: A },
                                boosters: { length: C, booster: f },
                            },
                        };
                    };
            },
            3028: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => c });
                var n = a(5344),
                    u = a(3215),
                    s = a(4598),
                    r = a(9480),
                    o = a(3946),
                    i = a(3522);
                const l = (0, u.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, i._)(e),
                                a = t.model,
                                u = t.computes,
                                l = e.object('tankSetup.shellsSetup'),
                                c = e.array('tankSetup.shellsSetup.slots'),
                                _ = e.object('ammunitionPanel'),
                                d = e.array('ammunitionPanel.sectionGroups'),
                                m = e.object('optionalDevicesAssistant'),
                                p = e.array('optionalDevicesAssistant.optionalDevicesAssistantPresets'),
                                E = e.object('optionalDevicesAssistant.selectedPreset'),
                                b = () =>
                                    r.UI(p.get(), (e) =>
                                        Object.assign({}, e, {
                                            optionalDevicesAssistantItems: r.UI(e.optionalDevicesAssistantItems, (e) =>
                                                Object.assign({}, e, { items: r.UI(e.items, s.yR) }),
                                            ),
                                        }),
                                    ),
                                g = (e) =>
                                    r.u4(
                                        p.get(),
                                        (t, a) => {
                                            if (a.presetType.mType === e) {
                                                const e = r.UI(a.optionalDevicesAssistantItems, (e) =>
                                                    Object.assign({}, e, { items: r.UI(e.items, s.yR) }),
                                                );
                                                t.push(...e);
                                            }
                                            return t;
                                        },
                                        [],
                                    ),
                                h = (0, o.Om)(() => g(0).sort((e, t) => t.popularity - e.popularity)),
                                A = (0, o.Om)(() => g(1).sort((e, t) => t.popularity - e.popularity)),
                                v = (0, o.Om)(
                                    (e) => {
                                        const t = r.U2(c.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: s.jv },
                                ),
                                C = (0, o.Om)(() => c.get().length),
                                f = (0, o.Om)(() => r.UI(c.get(), (e) => e.intCD), { equals: s.jv }),
                                D = (0, o.Om)((e) => v(e).specifications.length),
                                F = (0, o.Om)(
                                    (e, t) => {
                                        const a = v(e),
                                            n = r.U2(a.specifications, t);
                                        if (!n) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: s.jv },
                                ),
                                B = (0, o.Om)(
                                    (e, t) => {
                                        const a = v(e),
                                            n = r.U2(a.price.price, t);
                                        if (!n) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: s.jv },
                                ),
                                y = (0, o.Om)(
                                    (e, t) => {
                                        const a = v(e),
                                            n = r.U2(a.price.defPrice, t);
                                        if (!n) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: s.jv },
                                ),
                                w = (0, o.Om)((e) => v(e).price.price.length),
                                S = (0, o.Om)((e) => v(e).price.defPrice.length),
                                k = (0, o.Om)(() => {
                                    const e = _.get().selectedSlot,
                                        t = r.U2(d.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const a = r.U2(t.sections, 0);
                                    if (!a) throw Error('No section found');
                                    const n = r.U2(a.slots, e);
                                    if (!n) throw Error(`No slot found with index: ${e}`);
                                    const u = r.U2(n.specializations.specializations, 0);
                                    return null == u ? void 0 : u.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), a, {
                                shellsSetup: l,
                                shellsSlots: c,
                                ammunitionPanel: _,
                                sectionGroups: d,
                                optionalDevicesAssistant: m,
                                selectedPreset: E,
                                computes: Object.assign({}, u, {
                                    getOptionalDevicesAssistantItemsByType: g,
                                    getSortedCommonItems: h,
                                    getSortedLegendaryItems: A,
                                    getOptionalDevicesAssistantPresets: b,
                                    getSourceVehicleCompDescrForPreset: (e) => {
                                        const t = b().find((t) => t.presetType.mType === e);
                                        return t ? t.sourceVehicleCompDescr : null;
                                    },
                                    getOptionalDevicesResultTypeForPreset: (e) => {
                                        const t = b().find((t) => t.presetType.mType === e);
                                        return t ? t.optionalDevicesResultType : 0;
                                    },
                                    getModeType: () => {
                                        var e;
                                        const t = n.d.Common || n.d.Legendary;
                                        return null == (e = b().find((e) => e.presetType.mType === t))
                                            ? void 0
                                            : e.modeType;
                                    },
                                    shells: {
                                        length: C,
                                        shell: v,
                                        specificationsLength: D,
                                        specification: F,
                                        price: B,
                                        priceLength: w,
                                        defPriceLength: S,
                                        defPrice: y,
                                        ids: f,
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
                    c = (l[0], l[1]);
            },
            9493: (e, t, a) => {
                'use strict';
                var n = {};
                (a.r(n),
                    a.d(n, {
                        Area: () => ft,
                        Bar: () => At,
                        DefaultScroll: () => Ct,
                        Direction: () => nt,
                        defaultSettings: () => ut,
                        useHorizontalScrollApi: () => rt,
                    }));
                var u = {};
                (a.r(u), a.d(u, { Area: () => Ht, Bar: () => Ot, Default: () => $t, useVerticalScrollApi: () => Dt }));
                var s = a(7739),
                    r = a(7363),
                    o = a.n(r),
                    i = a(6483),
                    l = a.n(i),
                    c = a(926),
                    _ = a.n(c),
                    d = a(1043);
                let m, p, E;
                (!(function (e) {
                    ((e[(e.ExtraSmall = d.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = d.j.small.width)] = 'Small'),
                        (e[(e.Medium = d.j.medium.width)] = 'Medium'),
                        (e[(e.Large = d.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = d.j.extraLarge.width)] = 'ExtraLarge'));
                })(m || (m = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = d.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = d.j.small.width)] = 'Small'),
                            (e[(e.Medium = d.j.medium.width)] = 'Medium'),
                            (e[(e.Large = d.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = d.j.extraLarge.width)] = 'ExtraLarge'));
                    })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = d.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = d.j.small.height)] = 'Small'),
                            (e[(e.Medium = d.j.medium.height)] = 'Medium'),
                            (e[(e.Large = d.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = d.j.extraLarge.height)] = 'ExtraLarge'));
                    })(E || (E = {})));
                const b = () => {
                        const e = (0, r.useContext)(s.YN),
                            t = e.width,
                            a = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return m.ExtraLarge;
                                    case e.large:
                                        return m.Large;
                                    case e.medium:
                                        return m.Medium;
                                    case e.small:
                                        return m.Small;
                                    case e.extraSmall:
                                        return m.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), m.ExtraSmall);
                                }
                            })(e),
                            u = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return p.ExtraLarge;
                                    case e.largeWidth:
                                        return p.Large;
                                    case e.mediumWidth:
                                        return p.Medium;
                                    case e.smallWidth:
                                        return p.Small;
                                    case e.extraSmallWidth:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return E.ExtraLarge;
                                    case e.largeHeight:
                                        return E.Large;
                                    case e.mediumHeight:
                                        return E.Medium;
                                    case e.smallHeight:
                                        return E.Small;
                                    case e.extraSmallHeight:
                                        return E.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), E.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: u, mediaHeight: o, remScreenWidth: t, remScreenHeight: a };
                    },
                    g = ['children', 'className'];
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                const A = {
                        [p.ExtraSmall]: '',
                        [p.Small]: _().SMALL_WIDTH,
                        [p.Medium]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH}`,
                        [p.Large]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH}`,
                        [p.ExtraLarge]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH} ${_().EXTRA_LARGE_WIDTH}`,
                    },
                    v = {
                        [E.ExtraSmall]: '',
                        [E.Small]: _().SMALL_HEIGHT,
                        [E.Medium]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT}`,
                        [E.Large]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT}`,
                        [E.ExtraLarge]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT} ${_().EXTRA_LARGE_HEIGHT}`,
                    },
                    C = {
                        [m.ExtraSmall]: '',
                        [m.Small]: _().SMALL,
                        [m.Medium]: `${_().SMALL} ${_().MEDIUM}`,
                        [m.Large]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE}`,
                        [m.ExtraLarge]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE} ${_().EXTRA_LARGE}`,
                    },
                    f = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                                return u;
                            })(e, g);
                        const u = b(),
                            s = u.mediaWidth,
                            r = u.mediaHeight,
                            i = u.mediaSize;
                        return o().createElement('div', h({ className: l()(a, A[s], v[r], C[i]) }, n), t);
                    },
                    D = ['children'];
                const F = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                            return u;
                        })(e, D);
                    return o().createElement(s.ZN, null, o().createElement(f, a, t));
                };
                var B = a(1533),
                    y = a.n(B),
                    w = a(1856),
                    S = a(3403),
                    k = a(9152),
                    T = a(7383);
                const x = (0, r.createContext)(null),
                    N = () => {
                        const e = (0, r.useContext)(x);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var L = a(7902);
                const M = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    I = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var O = a(9916);
                const P = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    $ = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    H = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, a) => {
                                const n = M(`${e}.${a}`, window);
                                return P(n) ? t(e, a, n) : `${e}.${a}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    z = (e) => {
                        const t = ((e) => {
                                const t = (0, L.F)(),
                                    a = t.caller,
                                    n = t.resId,
                                    u = window.__feature && window.__feature !== a && a ? `subViews.${a}` : '';
                                return { modelPrefix: u, modelPath: $(u, e || ''), resId: n };
                            })(),
                            a = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const u = M($(a, `${t}.${n}`), window);
                                    return P(u) ? (e.push(u.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const j = () => (window.injected || (window.injected = new Map()), window.injected);
                const W = O.Sw.instance;
                let G;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(G || (G = {}));
                const Z = (e = 'model', t = G.Deep) => {
                    const a = (0, r.useState)(0),
                        n = (a[0], a[1]),
                        u = (0, r.useMemo)(() => (0, L.F)(), []),
                        s = u.callerUrl,
                        o = u.caller,
                        i = u.resId,
                        l = (0, r.useMemo)(() => {
                            const t = (function (e) {
                                return j().has(e);
                            })(s.replace('.js', '.html'));
                            return window.__feature && window.__feature !== o && !t ? `subViews.${o}.${e}` : e;
                        }, [s, o, e]),
                        c = (0, r.useState)(() =>
                            ((e) => {
                                const t = M(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return P(t) ? t.value : t;
                            })(H(l)),
                        ),
                        _ = c[0],
                        d = c[1],
                        m = (0, r.useRef)(-1);
                    return (
                        I(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? G.Deep : G.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== G.None)
                            ) {
                                const a = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === G.Deep
                                            ? (e === _ && n((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    u = z(e);
                                m.current = W.addCallback(u, a, i, t === G.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (t !== G.None)
                                return () => {
                                    W.removeCallback(m.current, i);
                                };
                        }, [i, t]),
                        _
                    );
                };
                var V = a(1922),
                    U = a(2262),
                    q = a(6373);
                const K = 'visible_change',
                    X = K,
                    Y = K,
                    J = (e, t) => {
                        const a = Z('tutorialModel.triggers.items').filter((a) => {
                            if (!a) return !1;
                            const n = a.value,
                                u = n.triggers.filter((e) => e.value === t);
                            return n.componentId === e && u.length > 0;
                        });
                        if (0 === a.length) return null;
                        if (!window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e))
                            return null;
                        return {
                            trigger: a[0].value,
                            runTrigger: (a) => {
                                window.tutorialModel.onTriggerActivated({ componentId: e, triggerType: t, state: a });
                            },
                        };
                    };
                var Q = a(3649),
                    ee = a(7078),
                    te = a(2056);
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const ne = ({ children: e, tooltipArgs: t, className: a }) => {
                    if (!t) return e;
                    const n = o().createElement('div', { className: a }, e);
                    if (t.header || t.body) return o().createElement(q.i, t, n);
                    const u = t.contentId;
                    return u ? o().createElement(te.u, ae({}, t, { contentId: u }), n) : o().createElement(ee.t, t, n);
                };
                var ue = a(8045);
                const se = {
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
                let re, oe, ie;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(re || (re = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(oe || (oe = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(ie || (ie = {})));
                const le = { [ie.NBSP]: re.NoBreakSymbol, [ie.ZWNBSP]: re.NoBreakSymbol, [ie.NEW_LINE]: re.LineBreak },
                    ce = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    _e = {
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
                    de = 'renderers_noBreakWrapper_10',
                    me = 'renderers_lineBreak_b5',
                    pe = 'renderers_newLine_bd',
                    Ee = 'renderers_word_f3',
                    be = (e) => ({ color: `#${e}` }),
                    ge = ({ elementList: e, textBlock: t, key: a }) => {
                        const n = t.colorTag;
                        return n
                            ? _e[n]
                                ? o().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: l()(Ee, _e[n]) },
                                      e,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: Ee, style: be(n) },
                                      e,
                                  )
                            : o().createElement('span', { key: a, 'data-block-type': t.blockType, className: Ee }, e);
                    },
                    he = {
                        [re.Word]: ge,
                        [re.NoBreakSymbol]: ge,
                        [re.Binding]: ({ elementList: e, textBlock: t, key: a }) =>
                            o().createElement(
                                'span',
                                { key: a, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: a }, e)),
                            ),
                        [re.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': re.LineBreak, className: me }),
                        [re.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': re.NewLine, className: pe }, e),
                        [re.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': re.NoBreakWrapper, className: de },
                                e,
                            ),
                    },
                    Ae = (e, t, a) => {
                        const n = [];
                        return (
                            e.childList.forEach((u, s) => {
                                const r = `${a}_${s}`;
                                if (((e) => void 0 !== e.childList)(u)) {
                                    const e = u,
                                        t = e.blockType,
                                        a = Ae(e, he[t], r);
                                    n.push(...a);
                                } else n.push(t({ elementList: [u], textBlock: e, key: r }));
                            }),
                            n
                        );
                    },
                    ve = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, a) => {
                                t.push(
                                    ...((e, t) => {
                                        const a = [],
                                            n = e.blockType,
                                            u = he[n],
                                            s = Ae(e, u, t);
                                        return (
                                            n === re.NoBreakWrapper
                                                ? a.push(u({ elementList: s, textBlock: e, key: `${t}` }))
                                                : a.push(...s),
                                            a
                                        );
                                    })(e, a),
                                );
                            }),
                            t
                        );
                    },
                    Ce = (e, t, a, n) => {
                        let u = t.exec(e),
                            s = 0;
                        for (; u; ) (s !== u.index && a(e.slice(s, u.index)), n(u), (s = t.lastIndex), (u = t.exec(e)));
                        s !== e.length && a(e.slice(s));
                    },
                    fe = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    De = (e) => {
                        const t = [];
                        return (
                            Ce(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var a;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((a = e), a.match(fe) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Fe = ce
                        ? (e) => {
                              const t = [];
                              return (
                                  Ce(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...De(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const a = /[\s\u002d]/g;
                              let n = a.exec(e);
                              if (!n) return [e];
                              const u = [];
                              let s = 0;
                              for (; n; ) {
                                  const r = t.justifyContent === oe.FlexEnd ? n.index : a.lastIndex;
                                  (u.push(e.slice(s, r)), (s = r), (n = a.exec(e)));
                              }
                              return (s !== e.length && u.push(e.slice(s)), u);
                          },
                    Be = (e, t = '', a) => {
                        const n = [];
                        return (
                            Ce(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: re.Word, colorTag: t, childList: Fe(e, a) });
                                },
                                (e) => {
                                    const a = e[0],
                                        u = le[a.charAt(0)];
                                    u === re.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: re.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let a = 0; a < e.length - 1; a++)
                                                      t.push({
                                                          blockType: re.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(a),
                                          )
                                        : n.push({ blockType: u, colorTag: t, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    ye = (e, t, a = '', n) => {
                        const u = [];
                        return (
                            Ce(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    u.push(...Be(e, a, n));
                                },
                                (e) => {
                                    const s = e[1],
                                        r = void 0 === t[s] ? e[0] : t[s];
                                    'string' == typeof r || 'number' == typeof r
                                        ? u.push(...Be(String(r), a, n))
                                        : u.push({ blockType: re.Binding, colorTag: a, childList: [r] });
                                },
                            ),
                            u
                        );
                    },
                    we = (e, t) => {
                        if (!e) return [t];
                        const a = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === re.NoBreakWrapper) (e.childList.push(n), a.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && a.push(e),
                                a.push({ blockType: re.NoBreakWrapper, colorTag: '', childList: [t, n] }));
                        }
                        return (t.childList.length > 0 && a.push(t), a);
                    },
                    Se = (e, t = {}, a) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let a = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === re.NoBreakSymbol
                                        ? ((a = !0), t.push(...we(t.pop(), e)))
                                        : (a ? t.push(...we(t.pop(), e)) : t.push(e), (a = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, a) => {
                                const n = [];
                                return (
                                    Ce(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...ye(e, t, '', a));
                                        },
                                        (e) => {
                                            n.push(...ye(e[2] + e[3], t, e[1], a));
                                        },
                                    ),
                                    n
                                );
                            })((0, Q.Eg)((0, Q.z4)(e)), t, a),
                        );
                        return ve(n);
                    },
                    ke = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Te = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    xe = (e, t, a) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Te(e, t),
                            u = e.textContent.length,
                            s = e.offsetWidth / u,
                            r = Math.ceil(n / s);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / s);
                            return n >= a ? [!0, a + r] : [!1, n];
                        }
                        const o = Math.max(a + r, 0);
                        return u < o ? [!1, 0] : [!0, o];
                    },
                    Ne = (e, t, a, n, u, s) => {
                        let r = -1,
                            i = null;
                        for (let l = a; l >= 0; l--) {
                            const a = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === re.LineBreak || c === re.NewLine || c === re.Binding) continue;
                            const _ = a.textContent || '';
                            if (!(a.childElementCount > 1)) {
                                const e = xe(a, n, u),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (u -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + s,
                                    p = t[l];
                                ((i = o().cloneElement(p, p.props, m)), (r = l));
                                break;
                            }
                            {
                                const e = a.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = Ne(e, d, e.length - 1, n, u, s),
                                    p = m[0],
                                    E = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    ((i = o().cloneElement(c, c.props, e, E)), (r = l));
                                    break;
                                }
                                u -= _.length;
                            }
                        }
                        return [r, i];
                    },
                    Le = (e, t, a, n = '...') => {
                        const u = [...t],
                            s = e.current;
                        if (!s) return [u, !1];
                        const r = a.height,
                            o = a.width,
                            i = s.lastElementChild;
                        if (!ke(i, r) && Te(i, o) <= 0) return [u, !1];
                        const l = s.children,
                            c = ((e, t) => {
                                let a = 0,
                                    n = e.length - 1;
                                for (; n - a >= 0; ) {
                                    const u = a + Math.ceil(0.5 * (n - a));
                                    ke(e[u], t) ? (n = u - 1) : (a = u + 1);
                                }
                                return a - 1;
                            })(l, r);
                        if (c < 0) return [u, !1];
                        const _ = Ne(l, u, c, o, n.length, n),
                            d = _[0],
                            m = _[1];
                        return (m && (u.splice(d, 1, m), u.splice(d + 1)), [u, !0]);
                    },
                    Re = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: a,
                            binding: n,
                            isTooltipEnable: u = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: i,
                            targetId: c,
                            justifyContent: _ = oe.FlexStart,
                            alignContent: d = oe.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const p = (0, r.useRef)(null),
                                E = (0, r.useRef)({ height: 0, width: 0 }),
                                b = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                g = b[0],
                                h = b[1],
                                A = (0, r.useMemo)(() => Se(e, n, { justifyContent: _ }), [n, _, e]),
                                v = (0, r.useMemo)(() => {
                                    if (
                                        u &&
                                        g.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, i, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: c,
                                        };
                                }, [n, u, c, e, i, g.isTruncated]),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        ((E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height));
                                        const t = Le(p, A, E.current, m),
                                            n = t[0],
                                            u = t[1];
                                        (h({ elementList: n, isTruncated: u, isTruncateFinished: !0 }), a && a(u));
                                    },
                                    [a, m, A],
                                ),
                                f = (0, r.useMemo)(() => ({ justifyContent: _, alignContent: d }), [d, _]);
                            return (
                                ((e, t, a = !0) => {
                                    const n = (0, r.useCallback)(
                                        (e) => {
                                            const a = e[0];
                                            t && t(a);
                                        },
                                        [t],
                                    );
                                    (0, r.useEffect)(() => {
                                        if (!e.current || !a) return;
                                        const t = new ue.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, a, e]);
                                })(p, C, s),
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            se.base,
                                            t,
                                            se.base__zeroPadding,
                                            s && se.base__isTruncationAvailable,
                                        ),
                                        style: f,
                                    },
                                    o().createElement('div', { className: se.unTruncated, ref: p }, A),
                                    o().createElement(
                                        ne,
                                        {
                                            tooltipArgs: v,
                                            className: l()(
                                                se.tooltip,
                                                se[`tooltip__justify-${_}`],
                                                se[`tooltip__align-${d}`],
                                            ),
                                        },
                                        o().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    se.truncated,
                                                    !g.isTruncateFinished && s && se.truncated__hide,
                                                ),
                                                style: f,
                                            },
                                            g.isTruncateFinished && s ? g.elementList : A,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var Me = a(5310),
                    Ie = a(7198);
                const Oe = 'model.tankSetup.frontlineSetup',
                    Pe = {
                        base: 'AbilitiesActionsPanel_base_c0',
                        base__tiny: 'AbilitiesActionsPanel_base__tiny_b8',
                        toReservesBtn: 'AbilitiesActionsPanel_toReservesBtn_6b',
                        checkBox: 'AbilitiesActionsPanel_checkBox_77',
                        checkBoxLabel: 'AbilitiesActionsPanel_checkBoxLabel_2a',
                        vehicleIcon: 'AbilitiesActionsPanel_vehicleIcon_2f',
                        checkBoxZone: 'AbilitiesActionsPanel_checkBoxZone_49',
                    };
                var $e = a(3457);
                const He = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let ze, je;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big'));
                })(ze || (ze = {})),
                    (function (e) {
                        ((e.Brown = 'brown'), (e.Red = 'red'));
                    })(je || (je = {})));
                const We = o().memo(function ({ value: e, className: t, theme: a, size: n }) {
                        return o().createElement(
                            'div',
                            { className: l()(He.base, He[`base__${a}`], He[`base__${n}`], t) },
                            o().createElement('div', { className: He.label }, e),
                            o().createElement('div', { className: He.icon }),
                        );
                    }),
                    Ge = o().memo(function ({ pointsNeeded: e, isEnabled: t, children: a }) {
                        return o().createElement(
                            te.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            o().createElement('div', null, a),
                        );
                    }),
                    Ze = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    Ve = o().memo(function ({ price: e, isAvailable: t, onPurchase: a, onCancel: n }) {
                        const u = { pointsNeeded: e - (0, r.useContext)(Qu), isEnabled: !t };
                        return o().createElement(
                            'div',
                            { className: l()(Ze.base, t && Ze.base__isAvailable) },
                            o().createElement(
                                Ge,
                                u,
                                o().createElement(
                                    'div',
                                    { className: Ze.priceContainer },
                                    o().createElement(
                                        'div',
                                        { className: Ze.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    o().createElement(We, { value: e, theme: t ? je.Brown : je.Red, size: ze.Big }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Ze.actions },
                                o().createElement(
                                    Ge,
                                    u,
                                    o().createElement(
                                        $e.u5,
                                        {
                                            size: $e.qE.medium,
                                            disabled: !t,
                                            onClick: a,
                                            mixClass: l()(Ze.purchaseButton, Ze.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                o().createElement(
                                    $e.u5,
                                    { size: $e.qE.medium, type: $e.L$.secondary, mixClass: Ze.button, onClick: n },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    }),
                    Ue = () => {
                        const e = (0, V.GS)(),
                            t = (0, r.useContext)(Qu),
                            a = Z(Oe),
                            n = a.isTypeSelected,
                            u = a.vehicleType,
                            s = a.onChangeApplyAbilitiesToTypeSettings,
                            i = a.onDealConfirmed,
                            c = a.onDealCancelled,
                            _ = a.totalPurchasePrice,
                            d = a.purchaseSelectedAbilities,
                            m = Z(`${Oe}.dealPanel`),
                            p = m.isDisabled,
                            E = m.canAccept,
                            b = m.canCancel,
                            g = (0, Q.BN)(u),
                            h = (0, r.useCallback)(() => s(), [s]),
                            A = (0, r.useCallback)(() => i(), [i]),
                            v = (0, r.useCallback)(() => c(), [c]),
                            C = (0, r.useCallback)(() => d(), [d]),
                            f = l()(Pe.base, e && Pe[`base__${e}`]),
                            D = l()(Pe.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            F = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: g
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(g)})`
                                        : '',
                                }),
                                [g],
                            ),
                            B = (0, r.useMemo)(
                                () => ({
                                    icon: o().createElement('span', { className: Pe.vehicleIcon, style: F }),
                                    vehicle: R.strings.menu.classes.short.$dyn(g),
                                }),
                                [F, g],
                            ),
                            y = J('ShowAbilitiesButton', Y),
                            w = (0, r.useRef)(_),
                            S = (0, r.useRef)(t);
                        ((0, r.useEffect)(() => {
                            ((w.current = _), (S.current = t));
                        }, [_, t]),
                            (0, r.useEffect)(() => {
                                y && y.runTrigger(!0);
                            }, [y]));
                        const k = J('ApplyAbilitiesToTypeCheckbox', Y);
                        (0, r.useEffect)(() => {
                            k && k.runTrigger(!0);
                        }, [k]);
                        const x = _ || w.current,
                            N = x > 0 && t === S.current,
                            L = !N && E;
                        return o().createElement(
                            'div',
                            { className: f },
                            L &&
                                o().createElement(
                                    'div',
                                    { className: D },
                                    o().createElement(
                                        q.i,
                                        { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(g) },
                                        o().createElement(
                                            'div',
                                            { className: Pe.checkBoxZone },
                                            o().createElement(
                                                U.XZ,
                                                { isChecked: n, onChange: h, type: U.Rh.main, size: U.yB.medium },
                                                o().createElement(
                                                    'span',
                                                    { className: Pe.checkBoxLabel },
                                                    o().createElement(Re, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: B,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            o().createElement(
                                Me.f,
                                { when: !0, canAccept: N || L },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    N &&
                                        o().createElement(Ve, {
                                            price: x,
                                            isAvailable: t >= x,
                                            onPurchase: C,
                                            onCancel: v,
                                        }),
                                    L &&
                                        o().createElement(Ie.Z, {
                                            applyBtnString: n ? T.qZ : T.k4,
                                            isDisabled: p,
                                            canCancel: b,
                                            onCancel: v,
                                            onConfirm: A,
                                        }),
                                ),
                            ),
                        );
                    },
                    qe = (e, t, a) => (a < e ? e : a > t ? t : a);
                var Ke = a(3138),
                    Xe = a(3815);
                function Ye(e, t, a = []) {
                    const n = (0, r.useRef)(0),
                        u = (0, r.useCallback)(() => window.clearInterval(n.current), a || []);
                    (0, r.useEffect)(() => u, [u]);
                    const s = (null != a ? a : []).concat([t]);
                    return [
                        (0, r.useCallback)((a) => {
                            ((n.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                        }, s),
                        u,
                    ];
                }
                var Je = a(7727);
                function Qe(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return et(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return et(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function et(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                function tt(e, t, a) {
                    const n = (0, r.useMemo)(
                        () =>
                            (function (e, t, a, n) {
                                let u,
                                    s = !1,
                                    r = 0;
                                function o() {
                                    u && clearTimeout(u);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - r;
                                    function _() {
                                        ((r = Date.now()), a.apply(l, i));
                                    }
                                    s ||
                                        (n && !u && _(),
                                        o(),
                                        void 0 === n && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (u = setTimeout(
                                                  n
                                                      ? function () {
                                                            u = void 0;
                                                        }
                                                      : _,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                                    (i.cancel = function () {
                                        (o(), (s = !0));
                                    }),
                                    i
                                );
                            })(a, e),
                        t,
                    );
                    return ((0, r.useEffect)(() => n.cancel, [n]), n);
                }
                var at = a(7030);
                let nt;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(nt || (nt = {}));
                const ut = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    st = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: n,
                        getWrapperSize: u,
                        forceTriggerMouseMove: s,
                    }) => {
                        const o = (e, a) => {
                            const n = t(e),
                                u = n[0],
                                s = n[1];
                            return s <= u ? 0 : qe(u, s, a);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? ut : l,
                                _ = (0, r.useRef)(null),
                                d = (0, r.useRef)(null),
                                m = (0, r.useRef)(!1),
                                p = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        n = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        u = (e, ...a) => {
                                            for (var n, u = Qe(t(e).values()); !(n = u()).done; ) (0, n.value)(...a);
                                        };
                                    return (0, r.useMemo)(() => ({ on: a, off: n, trigger: u }), []);
                                })(),
                                E = tt(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                b = (0, at.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (a(t, e), p.trigger('change', e), s && m.current && E());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                g = b[0],
                                h = b[1],
                                A = (0, r.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const u = g.scrollPosition.get(),
                                            s = (null != (n = g.scrollPosition.goal) ? n : 0) - u;
                                        return o(e, t * a + s + u);
                                    },
                                    [g.scrollPosition],
                                ),
                                v = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            h.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, g.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, g.scrollPosition],
                                ),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            a = d.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return u(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, c.step),
                                            s = A(t, e, n);
                                        v(s);
                                    },
                                    [v, A, c.step],
                                ),
                                f = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(n(e)),
                                            _.current && p.trigger('mouseWheel', e, g.scrollPosition, t(_.current)));
                                    },
                                    [g.scrollPosition, C, p],
                                ),
                                D = ((e, t = []) => {
                                    const a = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...t) => {
                                            (a.current && a.current(), (a.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        (0, w.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (v(o(e, g.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [v, g.scrollPosition.goal],
                                ),
                                F = (0, Xe.z)(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = o(e, g.scrollPosition.goal);
                                    (t !== g.scrollPosition.goal && v(t, { immediate: !0 }),
                                        p.trigger('recalculateContent'));
                                });
                            ((0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            ),
                                (0, r.useEffect)(() => {
                                    const e = _.current;
                                    if (!e || !s) return;
                                    const t = () => {
                                            m.current = !0;
                                        },
                                        a = () => {
                                            m.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', a),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', a));
                                        }
                                    );
                                }, [_]));
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? u(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: f,
                                    applyScroll: v,
                                    applyStepTo: C,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: h,
                                    animationScroll: g,
                                    recalculateContent: F,
                                    events: { on: p.on, off: p.off },
                                }),
                                [g.scrollPosition, v, C, p.off, p.on, F, f, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    rt = st({
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? nt.Next : nt.Prev),
                        forceTriggerMouseMove: Ke.O.view.forceTriggerMouseMove,
                    }),
                    ot = 'HorizontalBar_base_49',
                    it = 'HorizontalBar_base__active_5e',
                    lt = 'HorizontalBar_leftButton_5f',
                    ct = 'HorizontalBar_rightButton_03',
                    _t = 'HorizontalBar_track_0d',
                    dt = 'HorizontalBar_thumb_fd',
                    mt = 'HorizontalBar_rail_32',
                    pt = 'disable',
                    Et = { pending: !1, offset: 0 },
                    bt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    gt = () => {},
                    ht = (e, t) => Math.max(20, e.offsetWidth * t),
                    At = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = bt, onDrag: n = gt }) => {
                        const u = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, r.useState)(Et),
                            p = m[0],
                            E = m[1],
                            b = (0, r.useCallback)(
                                (e) => {
                                    (E(e),
                                        _.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current }));
                                },
                                [n],
                            ),
                            g = () => {
                                const t = c.current,
                                    a = _.current,
                                    n = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(n && t && a && u)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / u),
                                    l = qe(0, 1, r / (u - n)),
                                    d = (t.offsetWidth - ht(t, o)) * l;
                                ((a.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && i.current && c.current && _.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(pt),
                                                    void i.current.classList.remove(pt)
                                                );
                                            if (
                                                ((t = c.current),
                                                (a = _.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(pt),
                                                    void i.current.classList.add(pt)
                                                );
                                            var t, a;
                                            (s.current.classList.remove(pt), i.current.classList.remove(pt));
                                        }
                                    })(d));
                            },
                            h = (0, Xe.z)(() => {
                                ((() => {
                                    const t = _.current,
                                        a = c.current,
                                        n = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && n && a)) return;
                                    const r = Math.min(1, n / s);
                                    ((t.style.width = `${ht(a, r)}px`),
                                        (t.style.display = 'flex'),
                                        u.current &&
                                            (1 !== r ? u.current.classList.add(it) : u.current.classList.remove(it)));
                                })(),
                                    g());
                            });
                        ((0, r.useEffect)(() => (0, w.v)(h)),
                            (0, r.useEffect)(
                                () =>
                                    (0, w.v)(() => {
                                        const t = () => {
                                            g();
                                        };
                                        let a = gt;
                                        const n = () => {
                                            (a(), (a = (0, w.v)(h)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (a(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!p.pending) return;
                                const t = Ke.O.client.events.mouse.move(([t, a]) => {
                                        var u;
                                        const s = e.contentRef.current,
                                            r = e.wrapperRef.current;
                                        if (!s || !r) return;
                                        const o = c.current,
                                            i = _.current;
                                        if (!o || !i) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const l = t.clientX - p.offset - o.getBoundingClientRect().x,
                                            d = (l / o.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: d }));
                                    }),
                                    a = Ke.O.client.events.mouse.up(() => {
                                        (t(), b(Et));
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, p.offset, p.pending, n, b]));
                        const A = Ye((t) => e.applyStepTo(t), d, [e]),
                            v = A[0],
                            C = A[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const f = (e) => {
                            e.target.classList.contains(pt) || (0, Je.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(ot, t.base), ref: u, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(lt, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pt) ||
                                        0 !== e.button ||
                                        ((0, Je.G)('play'), v(nt.Next));
                                },
                                onMouseUp: C,
                                ref: s,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(_t, t.track),
                                    onMouseDown: (t) => {
                                        const n = _.current;
                                        if (n && 0 === t.button)
                                            if (((0, Je.G)('play'), t.target === n))
                                                b({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = _.current,
                                                        u = e.contentRef.current;
                                                    if (!n || !u) return;
                                                    const s = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? nt.Prev : nt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: _, className: l()(dt, t.thumb) }),
                                o().createElement('div', { className: l()(mt, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(ct, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pt) ||
                                        0 !== e.button ||
                                        ((0, Je.G)('play'), v(nt.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    vt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ct = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: n,
                        areaClassName: u,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(vt.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(vt.defaultScroll, a), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(vt.defaultScrollArea, u) },
                                o().createElement(ft, { className: i, api: m, classNames: s }, e),
                            ),
                            o().createElement(At, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    ft = ({ api: e, className: t, classNames: a, children: n }) => (
                        (0, r.useEffect)(() => (0, w.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(vt.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: l()(vt.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()(vt.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((ft.Bar = At), (ft.Default = Ct));
                const Dt = st({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? nt.Next : nt.Prev),
                    }),
                    Ft = 'VerticalBar_base_f3',
                    Bt = 'VerticalBar_base__active_72',
                    yt = 'VerticalBar_topButton_d7',
                    wt = 'VerticalBar_bottomButton_06',
                    St = 'VerticalBar_track_df',
                    kt = 'VerticalBar_thumb_32',
                    Tt = 'VerticalBar_rail_43',
                    xt = 'disable',
                    Nt = () => {},
                    Lt = { pending: !1, offset: 0 },
                    Rt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Mt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    It = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ot = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Rt, onDrag: n = Nt }) => {
                        const u = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, r.useState)(Lt),
                            p = m[0],
                            E = m[1],
                            b = (0, r.useCallback)(
                                (e) => {
                                    (E(e),
                                        _.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current }));
                                },
                                [n],
                            ),
                            g = (0, Xe.z)(() => {
                                const t = _.current,
                                    a = c.current,
                                    n = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(n && s && t && a)) return;
                                const r = Math.min(1, n / s);
                                return (
                                    (t.style.height = `${It(a, r)}px`),
                                    (t.style.display = 'flex'),
                                    u.current &&
                                        (1 !== r ? u.current.classList.add(Bt) : u.current.classList.remove(Bt)),
                                    r
                                );
                            }),
                            h = (0, Xe.z)(() => {
                                const t = c.current,
                                    a = _.current,
                                    n = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(n && t && a && u)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / u),
                                    l = qe(0, 1, r / (u - n)),
                                    d = (t.offsetHeight - It(t, o)) * l;
                                ((a.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && i.current && c.current && _.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    s.current.classList.add(xt),
                                                    void i.current.classList.remove(xt)
                                                );
                                            if (
                                                ((t = c.current),
                                                (a = _.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(xt),
                                                    void i.current.classList.add(xt)
                                                );
                                            var t, a;
                                            (s.current.classList.remove(xt), i.current.classList.remove(xt));
                                        }
                                    })(d));
                            }),
                            A = (0, Xe.z)(() => {
                                Mt(e, () => {
                                    (g(), h());
                                });
                            });
                        ((0, r.useEffect)(() => (0, w.v)(A)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    Mt(e, () => {
                                        h();
                                    });
                                };
                                let a = Nt;
                                const n = () => {
                                    (a(), (a = (0, w.v)(A)));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (a(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!p.pending) return;
                                const t = Ke.O.client.events.mouse.up(() => {
                                        b(Lt);
                                    }),
                                    a = Ke.O.client.events.mouse.move(([t]) => {
                                        Mt(e, (a) => {
                                            const u = c.current,
                                                s = _.current,
                                                r = e.getContainerSize();
                                            if (!u || !s || !r) return;
                                            const o = t.screenY - p.offset - u.getBoundingClientRect().y,
                                                i = (o / u.offsetHeight) * r;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, p.offset, p.pending, n, b]));
                        const v = Ye((t) => e.applyStepTo(t), d, [e]),
                            C = v[0],
                            f = v[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const D = (e) => {
                            e.target.classList.contains(xt) || (0, Je.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Ft, t.base), ref: u, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(yt, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xt) ||
                                        0 !== e.button ||
                                        ((0, Je.G)('play'), C(nt.Next));
                                },
                                ref: s,
                                onMouseEnter: D,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(St, t.track),
                                    onMouseDown: (t) => {
                                        const n = _.current;
                                        if (n && 0 === t.button)
                                            if (((0, Je.G)('play'), t.target === n))
                                                b({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    _.current &&
                                                        Mt(e, (n) => {
                                                            if (!n) return;
                                                            const u = a(e),
                                                                s = e.clampPosition(n, n.scrollTop + u * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? nt.Prev : nt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                o().createElement('div', { ref: _, className: l()(kt, t.thumb) }),
                                o().createElement('div', { className: l()(Tt, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(wt, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xt) ||
                                        0 !== e.button ||
                                        ((0, Je.G)('play'), C(nt.Prev));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Pt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    $t = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: n,
                        areaClassName: u,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(Pt.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(Pt.defaultScroll, a), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Pt.area, u) },
                                o().createElement(Ht, { className: s, classNames: i, api: m }, e),
                            ),
                            o().createElement(Ot, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    Ht = ({ className: e, classNames: t, children: a, api: n }) => (
                        (0, r.useEffect)(() => (0, w.v)(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Pt.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Pt.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                a,
                            ),
                        )
                    );
                Ht.Default = $t;
                const zt = { Vertical: u, Horizontal: n };
                var jt = a(9690);
                const Wt = (e, t) => e.split(',').includes(t),
                    Gt = {
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
                let Zt, Vt;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(Zt || (Zt = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(Vt || (Vt = {})));
                const Ut = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: a,
                        vehicleType: n,
                        vehicleLvl: u,
                        tags: s = '',
                        size: r = Zt.extraSmall,
                        type: i = Vt.colored,
                        className: c,
                        classNames: _,
                        isShortName: d = !1,
                    }) => {
                        const m = `${(0, Q.BN)(n)}${e ? '_elite' : ''}`,
                            p = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return o().createElement(
                            'div',
                            {
                                className: l()(
                                    Gt.base,
                                    Gt[`base__size${(0, Q.e)(r)}`],
                                    Gt[`base__type${(0, Q.e)(i)}`],
                                    c,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: l()(Gt.level, null == _ ? void 0 : _.level) },
                                (0, jt.HG)(u),
                            ),
                            o().createElement('div', {
                                className: l()(
                                    Gt.type,
                                    e && Gt[`type__elite${(0, Q.e)(r)}`],
                                    Gt[`type__${r}`],
                                    null == _ ? void 0 : _.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${p})` } : void 0,
                            }),
                            Wt(s, 'premiumIGR') && o().createElement('div', { className: Gt.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: l()(Gt.name, null == _ ? void 0 : _.name) },
                                d ? a : t,
                            ),
                        );
                    },
                    qt = 'Aside_base_a5',
                    Kt = 'Aside_content_24',
                    Xt = 'Aside_tankDetails_35',
                    Yt = 'Aside_description_f0',
                    Jt = 'Aside_title_6f',
                    Qt = 'Aside_category_c0',
                    ea = 'Aside_text_ca',
                    ta = 'Aside_status_91',
                    aa = 'Aside_status__activated_4e',
                    na = 'Aside_statusDescrBlock_2c',
                    ua = 'Aside_statusDescription_75',
                    sa = 'Aside_infoIcon_96',
                    ra = 'CategoryTitle_base_f3',
                    oa = 'CategoryTitle_title_9d',
                    ia = 'CategoryTitle_icon_48';
                let la;
                !(function (e) {
                    ((e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small'));
                })(la || (la = {}));
                const ca = (0, r.memo)(({ category: e, iconTheme: t = la.Small, className: a }) => {
                        const n = (0, r.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return o().createElement(
                            'div',
                            { className: l()(ra, a) },
                            o().createElement('div', { className: ia, style: n }),
                            o().createElement('div', { className: oa }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    _a = 'InfoIcon_base_83',
                    da = 'InfoIcon_icon_47',
                    ma = (0, r.memo)(({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: l()(_a, e) },
                            o().createElement(
                                te.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                },
                                o().createElement('div', { className: da }),
                            ),
                        ),
                    ),
                    pa = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let Ea;
                !(function (e) {
                    ((e.None = 'none'), (e.Default = 'default'), (e.Active = 'active'));
                })(Ea || (Ea = {}));
                const ba = (0, r.memo)(({ isActive: e, index: t, arrowType: a, onClick: n, classMix: u }) => {
                        const s = t + 1,
                            i = (0, r.useMemo)(() => (0, jt.HG)(s), [s]),
                            c = (0, r.useCallback)(() => {
                                (n(t), Je.$.playClick());
                            }, [t, n]),
                            _ = (0, r.useCallback)(() => Je.$.playHighlight(), []);
                        return o().createElement(
                            'div',
                            { className: l()(pa.base, e && pa.base__active, u), onClick: c, onMouseEnter: _ },
                            o().createElement('div', { className: pa.label }, i),
                            a !== Ea.None && o().createElement('div', { className: l()(pa.arrow, pa[`arrow__${a}`]) }),
                        );
                    }),
                    ga = {
                        base: 'SkillParam_base_66',
                        valueWrapper: 'SkillParam_valueWrapper_96',
                        diff: 'SkillParam_diff_06',
                        diffValue: 'SkillParam_diffValue_9c',
                        labelWrapper: 'SkillParam_labelWrapper_60',
                        label: 'SkillParam_label_66',
                        progress: 'SkillParam_progress_2f',
                        progressDot: 'SkillParam_progressDot_28',
                        progressDot__end: 'SkillParam_progressDot__end_aa',
                        progressValue: 'SkillParam_progressValue_6d',
                        progressValueDot: 'SkillParam_progressValueDot_52',
                        progressDelta: 'SkillParam_progressDelta_1d',
                    },
                    ha = (0, r.memo)(({ currentParam: e, firstParam: t, lastParam: a }) => {
                        const n = Number(e.value),
                            u = Number(t.value),
                            s = Number(a.value),
                            i = (0, r.useMemo)(() => u < s, [u, s]),
                            c = (0, r.useMemo)(() => {
                                if (!isNaN(n) && !isNaN(u)) {
                                    const e = n - u;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [u, n]),
                            _ = (0, r.useMemo)(() => {
                                if (!c) return {};
                                const t = (0, Q.uF)(e.valueTemplate, {
                                    sign: c < 0 ? '-' : '+',
                                    value: O.Z5.getRealFormat(Math.abs(c), O.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: o().createElement('div', { className: ga.diffValue }, t) };
                            }, [c, e.valueTemplate]),
                            d = (0, r.useMemo)(() => {
                                const e = !isNaN(u),
                                    a = e && u < 0 ? '-' : '';
                                return {
                                    sign: t.sign || a,
                                    value: e ? O.Z5.getNumberFormat(Math.abs(u), O.B3.GOLD) : t.value,
                                };
                            }, [t, u]),
                            m = (0, r.useMemo)(() => (i ? { width: ((100 * u) / s).toString() + '%' } : {}), [i, u, s]),
                            p = (0, r.useMemo)(
                                () => (i ? { width: ((100 * (n - u)) / s).toString() + '%' } : {}),
                                [i, u, n, s],
                            );
                        return o().createElement(
                            'div',
                            { className: ga.base },
                            o().createElement(
                                'div',
                                { className: ga.valueWrapper },
                                c &&
                                    o().createElement(Re, {
                                        binding: _,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: ga.diff,
                                        alignContent: oe.FlexEnd,
                                    }),
                                o().createElement(Re, { text: e.valueTemplate, binding: d, classMix: ga.value }),
                            ),
                            o().createElement(
                                'div',
                                { className: ga.labelWrapper },
                                o().createElement('div', { className: ga.label }, t.name),
                            ),
                            i &&
                                o().createElement(
                                    'div',
                                    { className: ga.progress },
                                    o().createElement('div', { className: ga.progressDot }),
                                    o().createElement(
                                        'div',
                                        { className: ga.progressValue, style: m },
                                        o().createElement('div', { className: ga.progressValueDot }),
                                    ),
                                    o().createElement('div', { className: ga.progressDelta, style: p }),
                                    o().createElement('div', { className: l()(ga.progressDot, ga.progressDot__end) }),
                                ),
                        );
                    }),
                    Aa = 'Levels_base_a9',
                    va = 'Levels_tabsWrapper_a0',
                    Ca = 'Levels_tabsBorder_cf',
                    fa = 'Levels_tabsBorder__top_8f',
                    Da = 'Levels_tabsBorder__bottom_82',
                    Fa = 'Levels_tabsLabel_60',
                    Ba = 'Levels_tabs_8f',
                    ya = 'Levels_tab_c3',
                    wa = 'Levels_caret_7e',
                    Sa = 'Levels_params_d6',
                    ka = 'Levels_infoIcon_68',
                    Ta = ({ onLevelChanged: e, selectedLevel: t, levelInfos: a }) => {
                        const n = a.length - 1,
                            u = a[0].value.params,
                            s = a[a.length - 1].value.params,
                            i = a[t].value,
                            c = (0, r.useMemo)(() => ({ left: 56 * t - 12 + 'rem' }), [t]),
                            _ = (0, r.useCallback)((t) => e(t), [e]);
                        return o().createElement(
                            'div',
                            { className: Aa },
                            o().createElement(
                                'div',
                                { className: va },
                                o().createElement('div', { className: l()(Ca, fa) }),
                                o().createElement('div', { className: l()(Ca, Da) }),
                                o().createElement(ma, { className: ka }),
                                o().createElement(
                                    'div',
                                    { className: Fa },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Ba },
                                    a.map(({ value: e }, a) => {
                                        const u = a < t ? Ea.Active : Ea.Default;
                                        return o().createElement(ba, {
                                            key: e.id,
                                            index: a,
                                            isActive: a <= t,
                                            arrowType: a < n ? u : Ea.None,
                                            onClick: _,
                                            classMix: ya,
                                        });
                                    }),
                                    o().createElement('div', { className: wa, style: c }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Sa },
                                i.params.map(({ value: e }, t) =>
                                    o().createElement(ha, {
                                        key: e.id,
                                        firstParam: u[t].value,
                                        lastParam: s[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    xa = (0, r.memo)(function ({ className: e }) {
                        const t = Dt(),
                            a = Z('model.vehicleInfo'),
                            n = Z(`${Oe}`).setCurrentSlotDetailsLevel,
                            u = Z(`${Oe}.details`),
                            s = u.name,
                            i = u.category,
                            c = u.selectedLevel,
                            _ = u.description,
                            d = u.levelInfos,
                            m = u.isActivated,
                            p = m
                                ? R.strings.tank_setup.abilities.details.status.unlocked()
                                : R.strings.tank_setup.abilities.details.status.locked(),
                            E = m
                                ? R.strings.tank_setup.abilities.details.description.unlocked()
                                : R.strings.tank_setup.abilities.details.description.locked(),
                            b = (0, r.useCallback)((e) => n({ level: e }), [n]);
                        return (
                            (0, r.useEffect)(() => (0, w.v)(() => (0, w.v)(t.recalculateContent)), [t]),
                            o().createElement(
                                'div',
                                { className: l()(qt, e) },
                                o().createElement(
                                    zt.Vertical.Area.Default,
                                    { api: t },
                                    o().createElement(
                                        'div',
                                        { className: Kt },
                                        o().createElement('div', { className: Xt }, o().createElement(Ut, a)),
                                        o().createElement(
                                            'div',
                                            { className: Yt },
                                            o().createElement('div', { className: Jt }, s),
                                            o().createElement(ca, { category: i, className: Qt }),
                                            o().createElement('div', { className: ea }, _),
                                        ),
                                        o().createElement(Ta, { onLevelChanged: b, selectedLevel: c, levelInfos: d }),
                                        o().createElement('div', { className: l()(ta, m && aa) }, p),
                                        o().createElement(
                                            'div',
                                            { className: na },
                                            o().createElement('div', { className: sa }),
                                            o().createElement(Re, { text: E, classMix: ua }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Na = 'BattleAbilitiesSetup_aside_bd';
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
                const La = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            a = t.width,
                            n = t.height;
                        return 0 !== a && 0 !== n;
                    },
                    Ra = (e) => {
                        const t = (0, r.useState)(La(e ? e.current : null)),
                            a = t[0],
                            n = t[1];
                        return (
                            (0, r.useEffect)(() => {
                                let t = 0;
                                const a = () => {
                                    t = requestAnimationFrame(() => {
                                        La(e ? e.current : null) ? n(!0) : a();
                                    });
                                };
                                return (
                                    a(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => () => n(!1), [e]),
                            a
                        );
                    },
                    Ma = 'ScrollableCards_base_e0',
                    Ia = 'ScrollableCards_scroll_4b',
                    Oa = ({ children: e, selectedSlotId: t, scrollAreaKey: a = 'area', updateKey: n = null }) => {
                        const u = (0, r.useState)(!1),
                            s = u[0],
                            i = u[1],
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = (0, r.useRef)(!1),
                            d = (0, r.useRef)(''),
                            m = Ra(l),
                            p = Dt();
                        (0, r.useEffect)(
                            () => () => {
                                _.current = !1;
                            },
                            [],
                        );
                        const E = (0, Xe.z)(() => {
                                (_.current && i(!0), p.events.off('rest', E));
                            }),
                            b = (0, r.useCallback)(() => {
                                _.current && i(!1);
                            }, []),
                            g = (0, r.useCallback)(() => {
                                const e = c.current,
                                    t = l.current;
                                if (e && p && t) {
                                    const a = e.offsetTop + (e.offsetHeight - t.offsetHeight);
                                    (p.events.on('rest', E), p.applyScroll(a));
                                }
                            }, [E, p]);
                        ((0, r.useEffect)(() => {
                            (0, w.v)(() => {
                                m &&
                                    (d.current === a
                                        ? g()
                                        : ((d.current = a),
                                          new Promise((e) => {
                                              requestAnimationFrame(() => {
                                                  requestAnimationFrame(() => {
                                                      e();
                                                  });
                                              });
                                          }).then(() => {
                                              (g(), _.current || (_.current = !0));
                                          })));
                            });
                        }, [m, a, g, t]),
                            (0, r.useEffect)(() => {
                                _.current && p.applyScroll(0);
                            }, [p, n]));
                        const h = {
                            currentCardRef: c,
                            scrollWrapperRef: l,
                            isFinalAnimationRunning: s,
                            onFinalAnimationDone: b,
                        };
                        return o().createElement(
                            'div',
                            { className: Ma },
                            o().createElement(
                                'div',
                                { className: Ia, ref: l },
                                o().createElement(zt.Vertical.Default, { key: a, api: p }, (0, r.cloneElement)(e, h)),
                            ),
                        );
                    };
                var Pa = a(8613);
                (Date.now(), Pa.Ew.getRegionalDateTime, Pa.Ew.getFormattedDateTime);
                const $a = (e, t) => {
                        const a = (0, r.useRef)();
                        return (
                            (0, r.useEffect)(() => {
                                (t && !t(e)) || (a.current = e);
                            }, [t, e]),
                            a.current
                        );
                    },
                    Ha = (O.Sw.instance, $a),
                    za = 'select',
                    ja = 'undo',
                    Wa = 'cancel',
                    Ga = 'swap',
                    Za = 'demount',
                    Va = 'demount_from_setup',
                    Ua = 'demount_from_setups',
                    qa = 'destroy',
                    Ka = 'upgrade',
                    Xa = 'add_one';
                var Ya = a(1363),
                    Ja = a(1641);
                const Qa = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: n = 0,
                        args: u,
                        isEnabled: s = !0,
                        onMouseDown: o,
                    }) => {
                        const i = (0, r.useCallback)(() => {
                                ((0, O.c9)(O.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: u,
                                }),
                                    Je.$.playYes());
                            }, [u, t, a, n]),
                            l = (0, r.useCallback)(() => {
                                (0, O.c9)(O.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, n]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    (o && o(e), ((e) => e.button === Ja.t.RIGHT)(e) && i());
                                },
                                [o, i],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    en = ['children'];
                function tn() {
                    return (
                        (tn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        tn.apply(this, arguments)
                    );
                }
                const an = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                                return u;
                            })(e, en);
                        return o().createElement(
                            Qa,
                            tn({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    nn = [
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
                function un(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const sn = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: O.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    rn = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            n = e.args,
                            u = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            E = e.isEnabled,
                            b = void 0 === E || E,
                            g = e.onShow,
                            h = e.onHide,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                                return u;
                            })(e, nn);
                        const v = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, r.useMemo)(() => (0, L.F)(), []).resId,
                            f = (0, r.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (sn(a, p, { isMouseEvent: !0, on: !0, arguments: un(n) }, C),
                                    g && g(),
                                    (v.current.isVisible = !0));
                            }, [a, p, n, C, g]),
                            D = (0, r.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        sn(a, p, { on: !1 }, C),
                                        v.current.isVisible && h && h(),
                                        (v.current.isVisible = !1));
                                }
                            }, [a, p, C, h]),
                            F = (0, r.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', F, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', F, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', D),
                                    () => {
                                        (window.removeEventListener('mouseleave', D), D());
                                    }
                                ),
                                [D],
                            ));
                        return b
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((B = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      u && u(e),
                                                      B && B(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (D(), s && s(t), e && e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!d && D(), i && i(t), e && e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!d && D(), o && o(t), e && e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      A,
                                  ),
                              )
                            : t;
                        var B;
                    },
                    on = ['children'];
                function ln() {
                    return (
                        (ln =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ln.apply(this, arguments)
                    );
                }
                const cn = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                            return u;
                        })(e, on);
                    return o().createElement(
                        rn,
                        ln(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        t,
                    );
                };
                var _n = a(5282);
                const dn = {
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
                    mn = 'DisabledAbilities_base_1d',
                    pn = 'DisabledAbilities_glow_75',
                    En = 'DisabledAbilities_line_54',
                    bn = ({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: l()(mn, e) },
                            o().createElement('div', { className: pn }),
                            o().createElement('div', { className: En }),
                        );
                let gn;
                !(function (e) {
                    ((e.SimilarDeviceAlreadyInstalled = 'similar_device_already_installed'),
                        (e.UselessBattleBooster = 'useless_battle_booster'),
                        (e.UselessCrewSkillBattleBooster = 'useless_crew_skill_battle_booster'));
                })(gn || (gn = {}));
                const hn = 'Warning_base_4c',
                    An = 'Warning_glow_79',
                    vn = 'Warning_line_df',
                    Cn = 'Warning_icon_24',
                    fn = (e) => Object.values(gn).includes(e),
                    Dn = ({ parentId: e, reason: t, isCritical: a }) => {
                        const n = (0, r.useMemo)(() => ({ reason: t, isCritical: a }), [t, a]);
                        return o().createElement(
                            'div',
                            { id: e, className: hn },
                            o().createElement('div', { className: An }),
                            o().createElement('div', { className: vn }),
                            o().createElement(
                                te.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: n,
                                    isEnabled: fn(t),
                                },
                                o().createElement('div', { className: Cn }),
                            ),
                        );
                    },
                    Fn = ({
                        parentId: e,
                        name: t,
                        tooltipArgs: a,
                        contextMenuArgs: n,
                        imageSource: u,
                        overlayType: s,
                        highlightType: i,
                        isModernized: c,
                        level: _,
                        isDisabled: d,
                        isCurrent: m,
                        isActive: p,
                        isLocked: E,
                        isAbilitiesCard: b = !1,
                        isClickable: g = !0,
                        details: h,
                        options: A,
                        actions: v,
                        specializations: C,
                        extraImages: f,
                        onSlotClick: D,
                        shouldHandleMouseOver: F,
                        category: B,
                        onTooltipShow: y,
                        onTooltipHide: w,
                        lockReason: S,
                    }) => {
                        const k = (0, V.GS)(),
                            T = (0, r.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            x = T[0],
                            N = T[1],
                            L = (0, r.useState)(!1),
                            M = L[0],
                            I = L[1],
                            O = (0, r.useState)(!1),
                            P = O[0],
                            $ = O[1],
                            H = (0, r.useCallback)(() => {
                                (!x.isActionsHovered && Je.$.playHighlight(),
                                    N({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    F && I(!0));
                            }, [x.isActionsHovered, F]),
                            z = (0, r.useCallback)(() => {
                                F && I(!1);
                            }, [F]),
                            j = (0, r.useCallback)(() => {
                                N({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            W = (0, r.useCallback)(() => {
                                N({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            G = g && (!d || b),
                            Z = (0, r.useCallback)(() => {
                                G && D && (Je.$.playClick(), D());
                            }, [D, G]),
                            U = x.isBaseHovered || x.isActionsHovered,
                            q = (0, r.useMemo)(() => {
                                let e = o().createElement(
                                    'div',
                                    {
                                        onMouseEnter: H,
                                        onMouseLeave: W,
                                        className: dn.hover,
                                        onMouseDown: (e) => {
                                            0 === e.nativeEvent.button && ($(!0), Z());
                                        },
                                        onMouseUp: (e) => {
                                            0 === e.nativeEvent.button && $(!1);
                                        },
                                    },
                                    d && b && o().createElement(bn, { className: dn.locked }),
                                );
                                return (
                                    a && (e = o().createElement(cn, { args: a, onShow: y, onHide: w }, e)),
                                    n && (e = o().createElement(an, { args: n }, e)),
                                    e
                                );
                            }, [d, b, H, W, Z, a, n, y, w, P]),
                            K = (0, r.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            X =
                                k === V.cJ.Large || k === V.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            Y = (0, r.useMemo)(() => {
                                let e;
                                return (
                                    s && (e = c ? X.$dyn(`${s}_${_}_overlay`) : X.$dyn(`${s}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [X, s, c, _]),
                            J = (0, r.useMemo)(() => {
                                let e;
                                return (i && (e = X.$dyn(`${i}_highlight`)), e && { backgroundImage: `url(${e})` });
                            }, [X, i]),
                            Q = (0, r.useMemo)(() => {
                                const e = (k === V.cJ.Large || k === V.cJ.Huge ? V.cJ.Large : V.cJ.Medium) + '_' + B,
                                    t = R.images.gui.maps.icons.specialization.$dyn(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [B, k]);
                        return o().createElement(
                            'div',
                            { className: dn.base },
                            o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: l()(
                                        dn.content,
                                        dn[`content__${k}`],
                                        U && g && !d && dn.content__hovered,
                                        !U && dn.content__out,
                                        p && dn.content__installed,
                                        m && dn.content__current,
                                        d && dn.content__disabled,
                                        !G && dn.content__nonclickable,
                                    ),
                                    onMouseLeave: z,
                                },
                                J &&
                                    o().createElement(
                                        'div',
                                        { className: dn.types },
                                        o().createElement('div', {
                                            className: l()(dn.highlight, dn[`highlight__${i}`]),
                                            style: J,
                                        }),
                                    ),
                                o().createElement('div', { className: dn.image, style: K }, f),
                                d && o().createElement('div', { className: dn.disabled }),
                                Q &&
                                    o().createElement('span', {
                                        className: l()(dn.category, dn[`category__${k}`]),
                                        style: Q,
                                    }),
                                Y &&
                                    o().createElement(
                                        'div',
                                        { className: dn.types },
                                        o().createElement('div', {
                                            className: l()(dn.overlay, dn[`overlay__${s}`]),
                                            style: Y,
                                        }),
                                    ),
                                C && o().createElement('div', { className: dn.specialization }, C),
                                o().createElement(
                                    'div',
                                    { className: l()(dn.name, d && dn.name__disabled) },
                                    o().createElement(_n.n, {
                                        key: t,
                                        mediaSize: k,
                                        linesCount: 3,
                                        blocks: (0, _n.D)(systemLocale.toUpperCase(t)),
                                    }),
                                ),
                                h && o().createElement('div', { className: dn.details }, h),
                                o().createElement('div', { className: l()(dn.options, d && dn.options__disabled) }, A),
                                q,
                                o().createElement(
                                    'div',
                                    { onMouseEnter: j, onMouseLeave: W, className: dn.actions },
                                    F && v
                                        ? (0, r.cloneElement)(v, Object.assign({}, v.props, { isMouseOverCard: M }))
                                        : v,
                                ),
                            ),
                            E &&
                                o().createElement(
                                    'div',
                                    { className: dn.locked },
                                    o().createElement(Dn, { reason: S, isCritical: d, parentId: e }),
                                ),
                        );
                    };
                var Bn = a(6391),
                    yn = a(8401);
                const wn = 'Availability_base_51',
                    Sn = () => o().createElement('div', { className: wn }),
                    kn = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    Tn = o().memo(
                        ({ itemsInStorage: e, price: t, isMounted: a, possibleZeroCount: n, show: u = !0 }) => {
                            let s = null;
                            return (
                                (s = a
                                    ? o().createElement(Sn, null)
                                    : e || (n && 0 === e)
                                      ? o().createElement(Bn.Y, { location: 'storage', count: e })
                                      : t && o().createElement(yn.t, t)),
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            kn.base,
                                            kn['base__' + (u ? 'shown' : 'hidden')],
                                            (a || e || (n && 0 === e)) && kn.base__visually,
                                        ),
                                    },
                                    s,
                                )
                            );
                        },
                    ),
                    xn = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var Nn = a(8750);
                const Ln = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    Rn = ({ level: e }) => {
                        const t = (0, V.GS)();
                        if (!e) return null;
                        const a = l()(Ln.base, t && Ln[`base__${t}`]);
                        return o().createElement(
                            'div',
                            { className: a },
                            o().createElement(Nn.a, {
                                type: Nn.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    Mn = (0, r.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: a,
                            isCurrent: n,
                            imageName: u,
                            onSlotAction: s,
                            intCD: i,
                            level: c,
                            description: _,
                            overlayType: d,
                            isDisabled: m,
                            category: p,
                            isMounted: E,
                            cost: b,
                        }) => {
                            const g = (0, V.GS)(),
                                h = t > -1,
                                A = `${i}-ability`,
                                v = (0, r.useMemo)(() => ({ intCD: i, slotType: T.YN, fieldType: 0 }), [i]),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        s({ actionType: e, intCD: i, currentSlotId: a, isAutoSelect: !1 });
                                    },
                                    [s, i, a],
                                ),
                                f = (0, r.useCallback)(() => {
                                    C(za);
                                }, [C]),
                                D = (0, r.useContext)(Qu),
                                F = (0, r.useMemo)(() => {
                                    const e = l()(xn.bonuses, g && xn[`base__${g}`]),
                                        t = D >= b ? je.Brown : je.Red;
                                    return o().createElement(
                                        'div',
                                        { className: xn.base },
                                        o().createElement(Ya._, {
                                            parentId: A,
                                            mediaSize: g,
                                            classMix: e,
                                            classColorMix: xn.unit,
                                            text: _,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            o().createElement(We, {
                                                value: b,
                                                theme: t,
                                                size: ze.Small,
                                                className: xn.points,
                                            }),
                                    );
                                }, [g, _, A, m, b, D]),
                                B =
                                    ((0, r.useMemo)(() => o().createElement(Rn, { level: c }), [c]),
                                    (0, r.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(u),
                                        [u],
                                    ));
                            return o().createElement(Fn, {
                                parentId: A,
                                name: e,
                                tooltipArgs: v,
                                imageSource: B,
                                isCurrent: n,
                                isActive: h,
                                details: F,
                                isDisabled: m && D < b,
                                isAbilitiesCard: !0,
                                category: p,
                                extraImages: !1,
                                overlayType: d,
                                onSlotClick: f,
                                options: o().createElement(Tn, { show: E, isMounted: E }),
                            });
                        },
                    ),
                    In = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
                function On() {
                    return (
                        (On =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        On.apply(this, arguments)
                    );
                }
                const Pn = ({ currentCardRef: e, selectedSlot: t, isDisabled: a }) => {
                        const n = Z(Oe),
                            u = n.categoriesOrder,
                            s = n.onSlotAction,
                            i = n.slots,
                            c = Z('model.ammunitionPanel'),
                            _ = c.onSectionSelect,
                            d = c.selectedSection,
                            m = (0, V.GS)(),
                            p = u.map(({ value: e }) => e),
                            E = i.map(({ value: e }) => e),
                            b = (0, r.useMemo)(() => {
                                if (m === V.cJ.Tiny)
                                    return E.sort(
                                        (e, t) => p.indexOf(e.category) - p.indexOf(t.category) || e.cost - t.cost,
                                    );
                                const e = {};
                                (E.map((t) => {
                                    (t.category in e || (e[t.category] = []), e[t.category].push(t));
                                }),
                                    Object.keys(e).map((t) => {
                                        e[t].sort((e, t) => e.cost - t.cost);
                                    }));
                                const t = [];
                                do {
                                    p.map((a) => {
                                        const n = e[a].shift();
                                        n && t.push(n);
                                    });
                                } while (t.length < E.length);
                                return t;
                            }, [E, p, m]),
                            g = (0, r.useCallback)(
                                (e) => {
                                    (_({ selectedSlot: e.currentSlotId, selectedSection: d }), s(e));
                                },
                                [_, s, d],
                            ),
                            h = b.map((a) => {
                                if (!a) return null;
                                const n = a.installedSlotId,
                                    u = n > -1 && t === n;
                                return o().createElement(
                                    'div',
                                    { key: a.intCD, ref: u ? e : null, className: l()(In.card, m && In[`card__${m}`]) },
                                    o().createElement(Mn, On({}, a, { isCurrent: u, onSlotAction: g })),
                                );
                            }),
                            A = l()(In.base, m && In[`base__${m}`], a && In.base__disabled);
                        return o().createElement('div', { className: A }, h);
                    },
                    $n = 'BattleAbilitiesNoSelected_base_06',
                    Hn = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    zn = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    jn = 'BattleAbilitiesNoSelected_title_20',
                    Wn = 'BattleAbilitiesNoSelected_title__small_65',
                    Gn = 'BattleAbilitiesNoSelected_subTitle_aa',
                    Zn = 'BattleAbilitiesNoSelected_button_bf',
                    Vn = R.strings.tank_setup.abilities.noSelected,
                    Un = () => {
                        const e = (0, V.GS)(),
                            t = Z(Oe, G.None).showInfoPage,
                            a = (0, r.useMemo)(() => e === V.cJ.Small || e === V.cJ.Tiny, [e]),
                            n = (0, r.useMemo)(() => (e === V.cJ.Tiny ? $e.qE.small : $e.qE.medium), [e]),
                            u = (0, r.useCallback)(() => t(), [t]),
                            s = l()(Hn, a && zn),
                            i = l()(jn, a && Wn);
                        return o().createElement(
                            'div',
                            { className: $n, id: 'no-abilities-show-button' },
                            o().createElement('div', { className: s }),
                            o().createElement('div', { className: i }, Vn.title()),
                            o().createElement('div', { className: Gn }, Vn.subTitle()),
                            o().createElement($e.u5, { size: n, mixClass: Zn, onClick: u }, Vn.toReserves()),
                        );
                    },
                    qn = 'Content_base_d8',
                    Kn = o().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return o().createElement(
                            'div',
                            { className: qn },
                            e
                                ? o().createElement(
                                      Oa,
                                      { selectedSlotId: t },
                                      o().createElement(Pn, { selectedSlot: t }),
                                  )
                                : o().createElement(Un, null),
                        );
                    }),
                    Xn = 'Tabs_base_d9',
                    Yn = 'Tabs_base__vertical_c0',
                    Jn = 'Tabs_list_0a',
                    Qn = 'Tabs_list__centered_dc',
                    eu = 'Tabs_wrapper_2d',
                    tu = 'Tabs_wrapper__centered_d8',
                    au = 'Tabs_wrapper__vertical_a5';
                function nu() {
                    return (
                        (nu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        nu.apply(this, arguments)
                    );
                }
                const uu = 'tabs-role';
                var su;
                !(function (e) {
                    ((e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key'));
                })(su || (su = {}));
                class ru extends r.Component {
                    constructor(...e) {
                        (super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[su.TAB]);
                                return t && t.props[su.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                (this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e }));
                            }));
                    }
                    componentDidMount() {
                        const e = o().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[uu] === su.LIST);
                        if (t < 0) return;
                        const a =
                            this.props.activeKey || this._getFirstTabKey(o().Children.toArray(e[t].props.children));
                        ((e[t] = o().cloneElement(e[t], {
                            children: o()
                                .Children.toArray(e[t].props.children)
                                .map((e) => o().cloneElement(e, { key: e.props[su.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(a));
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const a = o().Children.toArray(this.props.children)[this.tabsListIndex],
                            n = a.props.children.reduce(
                                (e, t, a) => ((e[a] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            u =
                                ((s = this.tabsProps),
                                (r = n),
                                !(
                                    Object.keys(s).length === Object.keys(r).length &&
                                    Object.keys(s).every(
                                        (e) => Object.prototype.hasOwnProperty.call(r, e) && s[e] === r[e],
                                    )
                                ));
                        var s, r;
                        const i = l()(
                                eu,
                                a.props.className,
                                this.props.isTabsCentered && tu,
                                this.props.isVerticalTabs && au,
                            ),
                            c = l()(Jn, this.props.isTabsCentered && Qn);
                        if (t.activeKey !== this.state.activeKey || u) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[uu] === su.CONTENT)
                                        return e.props[su.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, a) => [this.tabsListIndex, e].includes(a)),
                                u = t[0].props.children,
                                s = u.map((e, t) =>
                                    o().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            n[t],
                                            { key: t, isActive: this.state.activeKey === e.props[su.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === u.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const a = n[t][su.TAB];
                                                    this.state.activeKey === a ||
                                                        (n[t].onClick && n[t].onClick(e),
                                                        this.handleSetActiveKey(a),
                                                        this.props.onClickSound && (0, Je.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    (n[t].onMouseEnter && n[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, Je.G)(this.props.onMouseEnterSound));
                                                },
                                            },
                                        ),
                                    ),
                                );
                            ((this.tabsProps = n),
                                this.setState({
                                    activeElements: [
                                        o().createElement(
                                            'div',
                                            { className: c, key: su.LIST },
                                            o().createElement('div', nu({}, a.props, { className: i }), s),
                                        ),
                                        t[1],
                                    ],
                                }));
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = l()(Xn, this.props.isVerticalTabs && Yn);
                        return o().createElement('div', { className: t }, e);
                    }
                }
                ru.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const ou = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const lu = (e) => {
                    let t = e.children,
                        a = e.className,
                        n = e.activeKey,
                        u = e.onClickSound,
                        s = e.onMouseEnterSound,
                        r = e.isTabsCentered,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                            return u;
                        })(e, ou);
                    return o().createElement(
                        'div',
                        iu({ className: a }, i),
                        o().createElement(
                            ru,
                            { activeKey: n, onClickSound: u, onMouseEnterSound: s, isTabsCentered: r },
                            t,
                        ),
                    );
                };
                var cu = a(9480);
                const _u = {
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
                    du = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function mu() {
                    return (
                        (mu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        mu.apply(this, arguments)
                    );
                }
                const pu = (e) => {
                        let t = e.value,
                            a = e.isEmpty,
                            n = e.className,
                            u = e.size,
                            s = void 0 === u ? 'normal' : u,
                            r = e.fadeInAnimation,
                            i = void 0 !== r && r,
                            c = e.hide,
                            _ = void 0 !== c && c,
                            d = e.maximumNumber,
                            m = void 0 === d ? 99 : d,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    u = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                                return u;
                            })(e, du);
                        const E = a ? null : t,
                            b = 'string' == typeof E;
                        if ((E && !b && E < 0) || 0 === E) return null;
                        const g = E && !b && E > m,
                            h = l()(
                                _u.base,
                                _u[`base__${s}`],
                                i && _u.base__animated,
                                _ && _u.base__hidden,
                                !E && _u.base__pattern,
                                a && _u.base__empty,
                                n,
                            );
                        return o().createElement(
                            'div',
                            mu({ className: h }, p),
                            o().createElement('div', { className: _u.bg }),
                            o().createElement('div', { className: _u.pattern }),
                            o().createElement(
                                'div',
                                { className: l()(_u.value, b && _u.value__text) },
                                g ? m : E,
                                g && o().createElement('span', { className: _u.plus }, '+'),
                            ),
                        );
                    },
                    Eu = ({ children: e, component: t, props: a = {} }) => (t ? o().createElement(t, a, e) : e || null),
                    bu = 'Tab_base_dd',
                    gu = 'Tab_base__first_4a',
                    hu = 'Tab_base__last_96',
                    Au = 'Tab_base__medium_ec',
                    vu = 'Tab_base__active_5d',
                    Cu = 'Tab_divider_ca',
                    fu = 'Tab_divider__show_62',
                    Du = 'Tab_state_6c',
                    Fu = 'Tab_stateHighlight_1e',
                    Bu = 'Tab_stateBorder_64',
                    yu = 'Tab_stateBorder__positionLeft_e7',
                    wu = 'Tab_stateBorder__positionRight_db',
                    Su = 'Tab_counter_e1',
                    ku = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const xu = (0, r.memo)((e) => {
                    let t = e.isActive,
                        a = void 0 !== t && t,
                        n = e.isFirst,
                        u = void 0 !== n && n,
                        s = e.isLast,
                        r = void 0 !== s && s,
                        i = e.isMedium,
                        c = void 0 !== i && i,
                        _ = e.isNotified,
                        d = void 0 !== _ && _,
                        m = e.children,
                        p = void 0 === m ? 'Tab' : m,
                        E = e.wrapper,
                        b = void 0 === E ? {} : E,
                        g = e.counter,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                            return u;
                        })(e, ku);
                    return o().createElement(
                        Eu,
                        b,
                        o().createElement(
                            'div',
                            Tu({ className: l()(bu, { [vu]: a }, { [gu]: u }, { [hu]: r }, { [Au]: c }) }, h),
                            o().createElement(
                                'span',
                                { className: Du },
                                o().createElement('span', { className: Fu }),
                                o().createElement('span', { className: l()(Bu, yu) }),
                                o().createElement('span', { className: l()(Bu, wu) }),
                            ),
                            p,
                            !r && !a && o().createElement('span', { className: l()(Cu, fu) }),
                            (Boolean(g) || d) &&
                                o().createElement(
                                    'div',
                                    { className: Su },
                                    o().createElement(pu, { value: g, isEmpty: d }),
                                ),
                        ),
                    );
                });
                var Nu = a(5262);
                function Lu(e, t, a) {
                    const n = (0, r.useContext)(s.YN);
                    let u = Object.entries(n).filter(([e, t]) => !0 === t && e in Nu.u);
                    return (
                        a && (u = u.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const n = u.map((e) =>
                                l()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, Q.e)(t))(a, e[0])]),
                            );
                            return ((e[a] = l()(t[a], ...n)), e);
                        }, {})
                    );
                }
                const Ru = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    Mu = ['name', 'newItemsCount', 'handleTabChanged', 'isTooltipEnabled'];
                function Iu() {
                    return (
                        (Iu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Iu.apply(this, arguments)
                    );
                }
                const Ou = (e) => {
                    let t = e.name,
                        a = e.newItemsCount,
                        n = e.handleTabChanged,
                        u = e.isTooltipEnabled,
                        s = void 0 === u || u,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                            return u;
                        })(e, Mu);
                    const l = R.strings.tank_setup.tabs.$dyn(t),
                        c = (0, r.useCallback)(() => {
                            (Je.$.playClick(), n({ name: t }));
                        }, [n, t]),
                        _ = (0, r.useMemo)(() => ({ name: t }), [t]),
                        d = Lu(['tab'], Ru);
                    return o().createElement(
                        te.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: s,
                        },
                        o().createElement(
                            'div',
                            null,
                            o().createElement(
                                xu,
                                Iu({}, i, { isNotified: Boolean(a), onClick: c }),
                                o().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                };
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const $u = ({ tabs: e, selectedTabName: t, handleTabChanged: a, isTooltipEnabled: n = !0 }) => {
                        const u = J('ModernizedSetupTabHintZone', X);
                        return (
                            (0, r.useEffect)(() => {
                                u && u.runTrigger(!0);
                            }, [u]),
                            o().createElement(
                                lu,
                                { key: t, activeKey: t },
                                o().createElement(
                                    'div',
                                    { 'tabs-role': su.LIST },
                                    cu.UI(e, (e) =>
                                        o().createElement(
                                            Ou,
                                            Pu(
                                                {
                                                    key: e.name,
                                                    handleTabChanged: a,
                                                    'tabs-role': su.TAB,
                                                    'tab-key': e.name,
                                                    isTooltipEnabled: n,
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    Hu = {
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
                    zu = ({ title: e, children: t, tabProps: a }) => {
                        const n = (0, V.GS)();
                        return o().createElement(
                            'div',
                            { className: l()(Hu.base, n && Hu[`base__${n}`]) },
                            o().createElement(
                                'div',
                                null,
                                o().createElement('div', { className: l()(Hu.title, n && Hu[`title__${n}`]) }, e),
                                a &&
                                    o().createElement(
                                        'div',
                                        { className: l()(Hu.tabs, n && Hu[`tabs__${n}`]) },
                                        o().createElement($u, a),
                                    ),
                            ),
                            t,
                        );
                    };
                var ju = a(8089);
                const Wu = {
                    base: 'InfoButton_base_62',
                    base__standalone: 'InfoButton_base__standalone_e2',
                    base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                    hidden: 'InfoButton_hidden_7e',
                };
                let Gu;
                !(function (e) {
                    ((e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon'));
                })(Gu || (Gu = {}));
                const Zu = o().memo(function ({ id: e, theme: t, className: a }) {
                        const n = Z(Oe, G.None).showInfoPage;
                        return o().createElement(
                            'div',
                            { id: e, className: l()(Wu.base, Wu[`base__${t}`], a) },
                            o().createElement(ju.A, {
                                caption:
                                    t === Gu.Standalone ? R.strings.fl_common.ammunitionSetup.btn.info.label() : '',
                                type: 'info',
                                side: 'left',
                                onClick: () => n(),
                                classNames: { caption: t === Gu.OnlyIcon ? Wu.hidden : '' },
                            }),
                        );
                    }),
                    Vu = 'Header_base_aa',
                    Uu = 'Header_points_d5',
                    qu = 'Header_content_2c',
                    Ku = 'Header_textWrapper_63',
                    Xu = 'Header_text_dc',
                    Yu = 'Header_infoButton_5e',
                    Ju = o().memo(function () {
                        const e = b().mediaWidth,
                            t = (0, r.useContext)(Qu),
                            a = (0, r.useMemo)(
                                () => ({
                                    points: o().createElement(We, {
                                        theme: je.Brown,
                                        size: ze.Normal,
                                        value: t,
                                        className: Uu,
                                    }),
                                }),
                                [t],
                            );
                        return o().createElement(
                            'div',
                            { className: Vu },
                            o().createElement(
                                zu,
                                { title: R.strings.tank_setup.section.battleAbilities() },
                                o().createElement(
                                    'div',
                                    { className: qu },
                                    e <= d.j.medium.width &&
                                        o().createElement(Zu, {
                                            id: 'scenarios_btn_small',
                                            theme: Gu.OnlyIcon,
                                            className: Yu,
                                        }),
                                    o().createElement(
                                        q.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Ku },
                                            o().createElement(Re, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: a,
                                                classMix: Xu,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Qu = o().createContext(0),
                    es = () => {
                        const e = Z(Oe),
                            t = e.isLocked,
                            a = e.pointsAmount,
                            n = Z('model.ammunitionPanel').selectedSlot;
                        return o().createElement(
                            Qu.Provider,
                            { value: a },
                            o().createElement(V.Ar, {
                                header: o().createElement(Ju, null),
                                content: o().createElement(Kn, { isLocked: t, selectedSlot: n }),
                                aside: o().createElement(xa, { className: Na }),
                                footer: o().createElement(Ue, null),
                            }),
                        );
                    };
                var ts = a(8175),
                    as = a(3755);
                const ns = (e, t) => {
                        const a = [];
                        for (let n = 0; n < e; n++) a.push(t(n));
                        return a;
                    },
                    us = (e) => {
                        const t = (0, r.useRef)(-1),
                            a = (0, r.useCallback)(
                                (a) => {
                                    if (-1 === t.current) {
                                        const n = e(a);
                                        n &&
                                            (t.current = window.setTimeout(() => {
                                                t.current = -1;
                                            }, n));
                                    }
                                },
                                [e],
                            );
                        return ((0, r.useEffect)(() => () => clearTimeout(t.current), []), a);
                    };
                var ss = a(8774);
                const rs = {
                        base: 'Actions_base_ea',
                        base__hidden: 'Actions_base__hidden_65',
                        base__shown: 'Actions_base__shown_9b',
                    },
                    os = (0, r.memo)(({ parentId: e, availableActions: t, onActionClick: a, isBuyMoreDisabled: n }) =>
                        o().createElement(
                            'div',
                            { className: l()(rs.base, rs['base__' + (t.length ? 'shown' : 'hidden')]) },
                            o().createElement(ss.a, {
                                parentId: `${e}-add_one`,
                                actionType: Xa,
                                onClick: a,
                                show: t.includes(Xa),
                                disabled: n,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(ss.a, {
                                parentId: `${e}-cancel`,
                                actionType: Wa,
                                onClick: a,
                                show: t.includes(Wa),
                            }),
                            o().createElement(ss.a, {
                                parentId: `${e}-undo`,
                                actionType: ja,
                                onClick: a,
                                show: t.includes(ja),
                            }),
                        ),
                    ),
                    is = 'Booster_base_e5',
                    ls = 'Booster_unit_5e',
                    cs = (0, S.Pi)(({ isCurrent: e, compare: t, index: a }) => {
                        const n = (0, V.GS)(),
                            u = n === V.cJ.Large || n === V.cJ.Huge,
                            s = N(),
                            i = s.model,
                            l = s.controls,
                            c = i.computes.boosters.booster(a),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            E = c.isMountedMoreThanOne,
                            b = c.imageName,
                            g = c.itemsInStorage,
                            h = c.price,
                            A = c.intCD,
                            v = c.isDisabled,
                            C = c.overlayType,
                            f = c.isLocked,
                            D = c.isMounted,
                            F = c.isMountedInOtherSetup,
                            B = c.description,
                            y = c.isBuyMoreVisible,
                            w = c.isBuyMoreDisabled,
                            S = c.highlightType,
                            k = c.lockReason,
                            x = d > -1,
                            L = `${A}-booster`,
                            M = (0, r.useMemo)(() => {
                                const e = [];
                                return (
                                    !v &&
                                        x &&
                                        (!t && y && e.push(Xa), (!Boolean(g) && !D) || F ? e.push(ja) : e.push(Wa)),
                                    e
                                );
                            }, [v, x, t, y, g, D, F]),
                            I = (0, r.useCallback)(
                                (e) => (
                                    l.boosters.actSlot({ actionType: e, intCD: A, installedSlotId: d }),
                                    e === Xa ? 1e3 : 120
                                ),
                                [l, A, d],
                            ),
                            O = us(I),
                            P = (0, r.useCallback)(() => {
                                M.includes(ja) ? O(ja) : M.includes(Wa) ? O(Wa) : O(za);
                            }, [M, O]),
                            $ = (0, r.useMemo)(() => {
                                const e = { intCD: A, slotType: T.G$, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: E,
                                        isMounted: D,
                                        isDisabled: v,
                                    }),
                                ];
                            }, [A, d, m, p, D, E, v]),
                            H = $[0],
                            z = $[1],
                            j = (0, r.useMemo)(() => {
                                const e = u
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(b)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(b);
                                return String(e);
                            }, [u, b]);
                        return o().createElement(Fn, {
                            parentId: L,
                            name: _,
                            tooltipArgs: H,
                            contextMenuArgs: z,
                            imageSource: j,
                            isClickable: !0,
                            isCurrent: e,
                            isActive: x,
                            isDisabled: v,
                            isLocked: f,
                            options: o().createElement(Tn, {
                                isMounted: D || F,
                                itemsInStorage: g,
                                show: !M.length,
                                price: h,
                            }),
                            actions: o().createElement(os, {
                                parentId: L,
                                availableActions: M,
                                onActionClick: O,
                                isBuyMoreDisabled: w,
                            }),
                            details: o().createElement(Ya._, {
                                key: B,
                                parentId: L,
                                classMix: is,
                                mediaSize: n,
                                classColorMix: ls,
                                linesShown: u ? 4 : 3,
                                text: B,
                            }),
                            overlayType: C,
                            highlightType: S,
                            onSlotClick: P,
                            lockReason: k,
                        });
                    }),
                    _s = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    ds = (0, S.Pi)(({ isCurrent: e, compare: t, index: a }) => {
                        const n = (0, V.GS)(),
                            u = n === V.cJ.Large || n === V.cJ.Huge,
                            s = N(),
                            i = s.model,
                            c = s.controls,
                            _ = i.computes.consumables.consumable(a, t, n),
                            d = _.name,
                            m = _.installedSlotId,
                            p = _.itemInstalledSetupIdx,
                            E = _.itemInstalledSetupSlotIdx,
                            b = _.isMountedMoreThanOne,
                            g = _.imageName,
                            h = _.itemsInStorage,
                            A = _.price,
                            v = _.intCD,
                            C = _.isDisabled,
                            f = _.overlayType,
                            D = _.isLocked,
                            F = _.isMounted,
                            B = _.isMountedInOtherSetup,
                            y = _.isBuiltIn,
                            w = _.description,
                            S = _.isBuyMoreDisabled,
                            k = _.lockReason,
                            x = m > -1,
                            L = `${v}-consumable`,
                            M = (0, r.useMemo)(() => {
                                const a = [];
                                return (
                                    !C &&
                                        x &&
                                        (!e && a.push(Ga),
                                        y || (!t && a.push(Xa), (!Boolean(h) && !F) || B ? a.push(ja) : a.push(Wa))),
                                    a
                                );
                            }, [C, x, e, y, t, h, F, B]),
                            I = (0, r.useCallback)(
                                (e) => (
                                    c.consumables.actSlot({ actionType: e, intCD: v, installedSlotId: m }),
                                    e === Xa ? 1e3 : 300
                                ),
                                [c, v, m],
                            ),
                            O = us(I),
                            P = (0, r.useCallback)(() => {
                                M.includes(Ga) ? O(Ga) : M.includes(ja) ? O(ja) : M.includes(Wa) ? O(Wa) : O(za);
                            }, [M, O]),
                            $ = (0, r.useMemo)(() => {
                                const e = { intCD: v, slotType: T.mH, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: E,
                                        isMountedMoreThanOne: b,
                                        isMounted: F,
                                        isDisabled: C,
                                    }),
                                ];
                            }, [v, m, p, E, b, F, C]),
                            H = $[0],
                            z = $[1],
                            j = (0, r.useMemo)(() => {
                                const e = u
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [u, g]),
                            W = (0, r.useMemo)(
                                () =>
                                    o().createElement(Ya._, {
                                        parentId: L,
                                        mediaSize: n,
                                        classMix: l()(_s.base, n && _s[`base__${n}`]),
                                        classColorMix: _s.unit,
                                        linesShown: u ? 4 : 3,
                                        text: w,
                                    }),
                                [n, u, w, L],
                            );
                        return o().createElement(Fn, {
                            parentId: L,
                            name: d,
                            tooltipArgs: H,
                            contextMenuArgs: z,
                            imageSource: j,
                            isCurrent: e,
                            isActive: x,
                            isDisabled: C,
                            isLocked: D,
                            isClickable: !y,
                            options: o().createElement(Tn, {
                                price: A,
                                isMounted: F || B,
                                itemsInStorage: h,
                                show: !M.length,
                            }),
                            actions: o().createElement(os, {
                                parentId: L,
                                availableActions: M,
                                onActionClick: O,
                                isBuyMoreDisabled: S,
                            }),
                            details: W,
                            overlayType: f,
                            onSlotClick: P,
                            lockReason: k,
                        });
                    });
                var ms = a(4814);
                const ps = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    Es = ({ values: e, localeName: t }) => {
                        const a = cu.hX(e, ({ valueKey: e }) => e === t).pop();
                        if (!a) return ps;
                        const n = a.value,
                            u = 'mul' === a.valueType ? 100 * (n - 1) : n;
                        return { calcValue: u, isPositive: u > 0, valueKey: a.valueKey };
                    },
                    bs = 'Bonus_base_aa',
                    gs = 'Bonus_bonus_49',
                    hs = 'Bonus_text_48',
                    As = 'Unit_base_15',
                    vs = 'Unit_base__special_37',
                    Cs = 'Unit_glow_38',
                    fs = R.strings.tank_setup.kpi.bonus.valueTypes,
                    Ds = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    Fs = (0, S.Pi)(({ deviceID: e, bonusID: t }) => {
                        const a = N().model,
                            n = a.computes.optDevices.device(e).activeSpecsMask,
                            u = a.computes.optDevices.bonusValue(e, t);
                        if (!u) return null;
                        const s = u.valueType,
                            r = u.value,
                            i = u.valueKey,
                            c = Boolean(n),
                            _ = 'mul' === s ? 100 * (r - 1) : r,
                            d = _ > 0 ? '+' : '',
                            m = O.Z5.getRealFormat(_, O.Gr.WO_ZERO_DIGITS),
                            p = fs.$dyn(i),
                            E = `${m}${p ? ` ${p}` : Ds}`;
                        return o().createElement(
                            'div',
                            { className: l()(As, c && vs) },
                            o().createElement('span', null, o().createElement('span', { className: Cs }), d + E),
                        );
                    }),
                    Bs = (0, S.Pi)(({ bonusID: e, compare: t, deviceID: a }) => {
                        const n = (0, V.GS)(),
                            u = n === V.cJ.Large || n === V.cJ.Huge ? 4 : 3,
                            s = N().model,
                            i = s.computes.optDevices.bonusVisibleLinesCount(a, e, u),
                            l = ((e, t = !1) =>
                                t || Es(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(
                                s.computes.optDevices.bonus(a, e),
                            ),
                            c = (0, r.useMemo)(() => (0, _n.D)(String(l)), [l]);
                        return i
                            ? o().createElement(
                                  'div',
                                  { className: bs },
                                  l &&
                                      o().createElement(
                                          'span',
                                          { className: gs },
                                          o().createElement(Fs, { compare: t, deviceID: a, bonusID: e }),
                                          ' ',
                                          i &&
                                              l &&
                                              o().createElement(
                                                  'span',
                                                  { className: hs },
                                                  o().createElement(_n.n, { linesCount: i, blocks: c, mediaSize: n }),
                                              ),
                                      ),
                              )
                            : null;
                    }),
                    ys = 'Bonuses_base_af',
                    ws = 'Bonuses_bonus_d1',
                    Ss = 'Bonuses_text_37',
                    ks = 'Bonuses_effect_f8',
                    Ts = 'Bonuses_icon_40',
                    xs = (0, S.Pi)(({ compare: e, deviceID: t }) => {
                        const a = (0, V.GS)(),
                            n = N().model,
                            u = n.computes.optDevices.device(t),
                            s = u.intCD,
                            r = u.effect,
                            i = n.computes.optDevices.bonusesLength(t),
                            l = `${s}-device`,
                            c = n.computes.optDevices.bonusEffectLinesCount(t);
                        return o().createElement(
                            'div',
                            { id: `${l}-bonuses`, className: ys },
                            r &&
                                o().createElement(
                                    'div',
                                    { className: ws },
                                    o().createElement(
                                        'span',
                                        { className: ks },
                                        o().createElement('span', { className: Ts }),
                                        R.strings.tank_setup.effects.name(),
                                    ),
                                    ' ',
                                    o().createElement(
                                        'span',
                                        { className: Ss },
                                        o().createElement(_n.n, { mediaSize: a, linesCount: c, blocks: (0, _n.D)(r) }),
                                    ),
                                ),
                            ns(i, (a) =>
                                o().createElement(Bs, { key: `${a}_${s}`, bonusID: a, deviceID: t, compare: e }),
                            ),
                        );
                    });
                var Ns = a(2106);
                const Ls = 'DeviceActions_base_c0',
                    Rs = 'DeviceActions_base__hidden_a6',
                    Ms = 'DeviceActions_base__shown_b0',
                    Is = (0, r.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: a,
                            isInstalled: n,
                            isMouseOverCard: u,
                            isModernized: s,
                            isFreeToDemount: r,
                            destroyTooltipBodyPath: i,
                            level: c,
                        }) => {
                            const _ = (u || n) && t.includes(Ka),
                                d = t.length && (t[0] !== Ka || _),
                                m = l()(Ls, d ? Ms : Rs);
                            return o().createElement(
                                'div',
                                { className: m },
                                o().createElement(ss.a, {
                                    parentId: `${e}-cancel`,
                                    actionType: Wa,
                                    onClick: a,
                                    show: t.includes(Wa),
                                }),
                                o().createElement(ss.a, {
                                    parentId: `${e}-undo`,
                                    actionType: ja,
                                    onClick: a,
                                    show: t.includes(ja),
                                }),
                                o().createElement(ss.a, {
                                    parentId: `${e}-upgrade`,
                                    actionType: Ka,
                                    onClick: a,
                                    show: _,
                                    isModernized: s,
                                    level: c,
                                }),
                                o().createElement(ss.a, {
                                    parentId: `${e}-demount`,
                                    actionType: Za,
                                    onClick: a,
                                    show: t.includes(Za),
                                    isFreeToDemount: r,
                                }),
                                o().createElement(ss.a, {
                                    parentId: `${e}-demount_from_setup`,
                                    actionType: Va,
                                    onClick: a,
                                    show: t.includes(Va),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: r,
                                }),
                                o().createElement(ss.a, {
                                    parentId: `${e}-demount_from_setups`,
                                    actionType: Ua,
                                    onClick: a,
                                    show: t.includes(Ua),
                                }),
                                o().createElement(ss.a, {
                                    parentId: `${e}-destroy`,
                                    actionType: qa,
                                    buttonType: Ns.L.secondary,
                                    onClick: a,
                                    show: (s || !r) && t.includes(qa),
                                    isModernized: s,
                                    tooltipBodyPath: i,
                                }),
                            );
                        },
                    );
                function Os() {
                    return (
                        (Os =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Os.apply(this, arguments)
                    );
                }
                const Ps = (0, S.Pi)(({ compare: e, index: t, isCurrent: a }) => {
                        const n = (0, V.GS)(),
                            u = n === V.cJ.Large || n === V.cJ.Huge,
                            s = N(),
                            i = s.model,
                            l = s.controls,
                            c = i.computes.optDevices.device(t),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            E = c.isMountedMoreThanOne,
                            b = c.imageName,
                            g = c.itemsInStorage,
                            h = c.price,
                            A = c.specializations,
                            v = c.intCD,
                            C = c.isMounted,
                            f = c.isMountedInOtherSetup,
                            D = c.isDisabled,
                            F = c.isFreeToDemount,
                            B = c.overlayType,
                            y = c.isLocked,
                            w = c.isUpgradable,
                            S = c.isTrophy,
                            k = c.activeSpecsMask,
                            x = c.isModernized,
                            L = c.level,
                            M = c.lockReason,
                            I = c.destroyTooltipBodyPath,
                            O = d > -1,
                            P = `${v}-device`,
                            $ = (0, r.useMemo)(() => {
                                const t = [];
                                let n = !0;
                                return (
                                    O &&
                                        !D &&
                                        (a || t.push(Ga),
                                        C && !e
                                            ? ((n = !a), t.push(...((e) => (e ? [Va, Ua] : [Za]))(E)), t.push(qa))
                                            : t.push(((e, t, a) => ((!Boolean(e) && !t) || a ? ja : Wa))(g, C, f))),
                                    !w || e || D || t.push(Ka),
                                    { availableActions: t, isDeviceClickable: n }
                                );
                            }, [O, D, w, e, a, C, E, g, f]),
                            H = $.availableActions,
                            z = $.isDeviceClickable,
                            j = (0, r.useCallback)(
                                (e) => {
                                    l.optDevices.actSlot({ actionType: e, intCD: v, installedSlotId: d });
                                },
                                [l, v, d],
                            ),
                            W = (0, r.useCallback)(() => {
                                H.length && H[0] !== Ka ? j(H[0]) : j(za);
                            }, [H, j]),
                            G = (0, r.useMemo)(() => {
                                const e = { intCD: v, slotType: T.zn, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: E,
                                        isMounted: C,
                                        isDisabled: D,
                                    }),
                                ];
                            }, [v, d, m, p, E, C, D]),
                            Z = G[0],
                            U = G[1],
                            q = (0, r.useMemo)(() => {
                                const e = u
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(b)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(b);
                                return String(e);
                            }, [u, b]);
                        return o().createElement(Fn, {
                            parentId: P,
                            name: _,
                            tooltipArgs: Z,
                            contextMenuArgs: U,
                            imageSource: q,
                            isCurrent: a,
                            isActive: O,
                            isDisabled: D,
                            isLocked: y,
                            isClickable: z,
                            isModernized: x,
                            level: L,
                            specializations:
                                A && A.specializations.length
                                    ? o().createElement(ms.G, Os({}, A, { activeSpecsMask: k, mediaSize: n }))
                                    : null,
                            details: o().createElement(xs, { compare: e, deviceID: t }),
                            options: e
                                ? null
                                : o().createElement(Tn, {
                                      isMounted: C || f,
                                      itemsInStorage: g,
                                      price: h,
                                      possibleZeroCount: S || x,
                                      show: !H.length || Boolean(g || C || f),
                                  }),
                            actions: o().createElement(Is, {
                                parentId: P,
                                availableActions: H,
                                onActionClick: j,
                                isInstalled: O,
                                isModernized: x,
                                level: L,
                                isFreeToDemount: F,
                                destroyTooltipBodyPath: I,
                            }),
                            overlayType: B,
                            onSlotClick: W,
                            shouldHandleMouseOver: !0,
                            lockReason: M,
                        });
                    }),
                    $s = { base: 'Card_base_48', base__large: 'Card_base__large_42', base__huge: 'Card_base__huge_55' },
                    Hs = (0, S.Pi)(
                        ({ index: e, type: t, compare: a = !1 }, n) => {
                            const u = (0, V.GS)(),
                                s = N().model,
                                r = s.ammunitionPanel.get().selectedSlot,
                                i = (() => {
                                    switch (t) {
                                        case T.zn:
                                            return s.computes.optDevices.device(e);
                                        case T.mH:
                                            return s.computes.consumables.consumable(e, a, u);
                                        case T.G$:
                                            return s.computes.boosters.booster(e);
                                        default:
                                            return s.computes.optDevices.device(e);
                                    }
                                })(),
                                c = i.isVisible,
                                _ = i.installedSlotId,
                                d = _ > -1 && r === _;
                            return c
                                ? o().createElement(
                                      'div',
                                      { className: l()($s.base, u && $s[`base__${u}`]), ref: d ? n : null },
                                      (() => {
                                          switch (t) {
                                              case T.G$:
                                                  return o().createElement(cs, { index: e, compare: a, isCurrent: d });
                                              case T.mH:
                                                  return o().createElement(ds, { index: e, compare: a, isCurrent: d });
                                              case T.zn:
                                              default:
                                                  return o().createElement(Ps, { index: e, compare: a, isCurrent: d });
                                          }
                                      })(),
                                  )
                                : null;
                        },
                        { forwardRef: !0 },
                    ),
                    zs = {
                        base: 'Cards_base_30',
                        base__large: 'Cards_base__large_33',
                        base__huge: 'Cards_base__huge_60',
                        base__disabled: 'Cards_base__disabled_28',
                    },
                    js = ({ isDisabled: e, compare: t = !1, currentCardRef: a, cardsAmount: n, type: u }) => {
                        const s = (0, V.GS)();
                        return o().createElement(
                            'div',
                            { className: l()(zs.base, s && zs[`base__${s}`], e && zs.base__disabled) },
                            ns(n, (e) =>
                                o().createElement(Hs, { key: `${e}_${s}`, index: e, compare: t, ref: a, type: u }),
                            ),
                        );
                    };
                var Ws = a(3215),
                    Gs = a(3522);
                const Zs = (0, Ws.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, Gs._)(e),
                                a = t.model,
                                n = t.computes,
                                u = e.object();
                            return Object.assign({}, a, { ammunitionPanel: u, computes: n });
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
                    Vs = Zs[0],
                    Us = Zs[1];
                var qs = a(8586),
                    Ks = a(3978);
                const Xs = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    Ys = 'FilterItem_base_2e',
                    Js = ({ name: e }) =>
                        o().createElement('div', {
                            className: Ys,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            },
                        });
                let Qs;
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
                })(Qs || (Qs = {}));
                (R.strings.common.percentValue(), R.strings.common.plusPercentValue());
                let er;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(er || (er = {}));
                const tr = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let ar;
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
                })(ar || (ar = {}));
                let nr;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(nr || (nr = {}));
                const ur = 'ClearBtn_base_a6',
                    sr = 'ClearBtn_stroke_09',
                    rr = 'ClearBtn_background_61',
                    or = 'ClearBtn_base__hover_3b',
                    ir = 'ClearBtn_base__down_60',
                    lr = 'ClearBtn_cross_1d',
                    cr = ({ parentId: e, onClick: t, soundHover: a = 'highlight', soundClick: n = 'play' }) => {
                        const u = (0, r.useState)(!1),
                            s = u[0],
                            i = u[1],
                            c = (0, r.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            m = (0, r.useCallback)(() => {
                                ((0, Je.G)(n), d(!1), i(!0));
                            }, [n]),
                            p = (0, r.useCallback)(() => {
                                ((0, Je.G)(a), d(!0));
                            }, [a]),
                            E = (0, r.useCallback)(() => {
                                (d(!1), i(!1));
                            }, []);
                        return o().createElement(
                            q.i,
                            tr,
                            o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: l()(ur, _ && or, s && ir),
                                    onMouseDown: m,
                                    onMouseOver: p,
                                    onMouseLeave: E,
                                    onClick: t,
                                },
                                o().createElement('div', { className: rr }),
                                o().createElement('div', { className: sr }),
                                o().createElement('div', { className: lr }),
                            ),
                        );
                    },
                    _r = 'MatchDetails_base_a8',
                    dr = 'MatchDetails_count_d2',
                    mr = 'MatchDetails_clear_21',
                    pr = 'MatchDetails_clear__shown_49',
                    Er = 'MatchDetails_separator_bc',
                    br = 'MatchDetails_arrow_b0',
                    gr = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: a, totalCount: n }) => {
                        const u = (0, r.useCallback)(() => t(), [t]);
                        return o().createElement(
                            'div',
                            { className: _r },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('span', { className: dr }, a),
                                    o().createElement(
                                        'span',
                                        { className: Er },
                                        '/',
                                        o().createElement('span', { className: br }),
                                    ),
                                ),
                            o().createElement('span', { className: dr }, n),
                            o().createElement(
                                'span',
                                { className: l()(mr, e && pr) },
                                o().createElement(cr, { parentId: 'match-details-clear-btn', onClick: u }),
                            ),
                        );
                    },
                    hr = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: a,
                        isEnabled: n,
                        showDetails: u = !1,
                        onFilterChanged: s,
                        onFilterReset: i,
                        selectedSlotSpecialization: c,
                    }) => {
                        const _ = (0, V.GS)(),
                            d = J('FilterTutorialHintZone', X);
                        (0, r.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, cu.UI)(a, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: o().createElement(Js, { name: e }),
                            callback: (e, t) => {
                                (s({ name: e }), (0, Ks.d)(e, !t));
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: Ns.L.ghost,
                                mixClass: l()(Xs.button, c && e === c && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: String(R.strings.tank_setup.categories.$dyn(e)),
                                body: String(R.strings.tank_setup.categories.body.$dyn(e)),
                            },
                        }));
                        return o().createElement(
                            'div',
                            { className: l()(Xs.base, _ && Xs[`base__${_}`], u && Xs.base__detailed) },
                            u &&
                                o().createElement(gr, {
                                    isFilterActive: n,
                                    onFilterReset: i,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            o().createElement(
                                'div',
                                { className: Xs.buttons },
                                o().createElement(qs.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var Ar = a(2372),
                    vr = a(3028);
                const Cr = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    fr = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    Dr = (e) => (e ? fr.disabled.text() : fr.notDisabled.text()),
                    Fr = (0, S.Pi)(({ disabled: e }) => {
                        const t = (0, V.GS)(),
                            a = (0, vr.t)(),
                            n = a.model,
                            u = a.controls,
                            s = n.optDevices.specialCurrency.get().value;
                        return o().createElement(
                            'div',
                            { className: l()(Cr.base, t && Cr[`base__${t}`]) },
                            o().createElement(
                                ee.t,
                                { args: { tooltipId: T.$4 } },
                                o().createElement(
                                    'div',
                                    { className: Cr.currency },
                                    o().createElement(Ar.A, { value: s }),
                                    o().createElement('div', { className: Cr.currencyIcon }),
                                ),
                            ),
                            o().createElement(
                                q.i,
                                { body: Dr(e) },
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(
                                        $e.u5,
                                        { onClick: u.moreCurrencyGot, mixClass: Cr.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Br = 'HeaderContent_base_cd';
                function yr() {
                    return (
                        (yr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        yr.apply(this, arguments)
                    );
                }
                const wr = (0, S.Pi)(({ compare: e }) => {
                        const t = N(),
                            a = t.model,
                            n = t.controls,
                            u = a.optDevices.setup.get(),
                            s = u.withIntroduction,
                            r = u.hasUnfitItems,
                            i = a.optDevices.specialCurrency.get().value,
                            l = a.computes.optDevices.slotsLength(),
                            c = a.optDevices.tabs.get(),
                            _ = a.optDevices.filter.get(),
                            d = e ? void 0 : a.computes.selectedSlotSpecialization();
                        switch (c.selectedTabName) {
                            case T.S:
                                return o().createElement(
                                    'div',
                                    { className: Br },
                                    o().createElement(
                                        hr,
                                        yr({}, _, {
                                            onFilterChanged: n.filterChanged,
                                            onFilterReset: n.filterReset,
                                            selectedSlotSpecialization: d,
                                        }),
                                    ),
                                );
                            case T.pi:
                                return e
                                    ? null
                                    : !s || (0 !== i && 0 === l)
                                      ? o().createElement(
                                            'div',
                                            { className: Br },
                                            o().createElement(Fr, { disabled: s ? !r : l <= 0 }),
                                        )
                                      : null;
                            default:
                                return null;
                        }
                    }),
                    Sr = {
                        base: 'CompareHeader_base_7a',
                        base__small: 'CompareHeader_base__small_ad',
                        base__medium: 'CompareHeader_base__medium_b7',
                        base__large: 'CompareHeader_base__large_6f',
                        base__huge: 'CompareHeader_base__huge_d0',
                        title: 'CompareHeader_title_59',
                        description: 'CompareHeader_description_1c',
                        controlsContainer: 'CompareHeader_controlsContainer_8b',
                    },
                    kr = R.strings.tank_setup.compare.section,
                    Tr = (0, S.Pi)(({ type: e, children: t, withContent: a }) => {
                        const n = Us().model.vehicleInfo.get(),
                            u = (0, V.GS)();
                        return o().createElement(
                            'div',
                            { className: l()(Sr.base, Sr[`base__${u}`]) },
                            o().createElement(
                                'div',
                                { className: Sr.title },
                                (0, Q.WU)(String(kr.title.$dyn(e)), { name: n.vehicleName }),
                            ),
                            o().createElement('div', { className: Sr.description }, kr.description.$dyn(e)),
                            o().createElement(
                                'div',
                                { className: Sr.controlsContainer },
                                o().createElement('div', { className: Sr.tabs }, null == t ? void 0 : t(n.vehicleLvl)),
                                a && o().createElement(wr, { compare: !0 }),
                            ),
                        );
                    });
                function xr() {
                    return (
                        (xr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        xr.apply(this, arguments)
                    );
                }
                const Nr = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = N(),
                            a = t.model,
                            n = t.controls,
                            u = (0, V.GS)(),
                            s = a.ammunitionPanel.get().selectedSlot,
                            r = a.boosters.tabs.get(),
                            i = a.computes.boosters.length();
                        return o().createElement(V.Ar, {
                            compare: e,
                            header: e
                                ? o().createElement(Tr, { type: T.G$ }, () =>
                                      o().createElement(
                                          $u,
                                          xr({}, r, { handleTabChanged: n.boosters.changeTab, isTooltipEnabled: !1 }),
                                      ),
                                  )
                                : o().createElement(zu, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabProps: Object.assign({}, r, {
                                          handleTabChanged: n.boosters.changeTab,
                                          isTooltipEnabled: !1,
                                      }),
                                  }),
                            content: o().createElement(
                                Oa,
                                { selectedSlotId: s, scrollAreaKey: r.selectedTabName, updateKey: i },
                                o().createElement(js, { compare: e, type: T.G$, cardsAmount: i }),
                            ),
                            footer:
                                !e &&
                                o().createElement(as.w, {
                                    withConfirmation: !0,
                                    renewalType: ts.my.Boosters,
                                    parentModelPath: 'model.tankSetup.battleBoostersSetup',
                                    onDealConfirmed: n.boosters.confirmDeal,
                                    onDealCancelled: n.boosters.cancelDeal,
                                    onAutoRenewalChanged: (e) => n.boosters.changeAutoRenewal(e),
                                    mediaSize: u,
                                }),
                        });
                    }),
                    Lr = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = (0, V.GS)(),
                            a = N(),
                            n = a.model,
                            u = a.controls,
                            s = n.ammunitionPanel.get().selectedSlot,
                            r = n.computes.consumables.length(e, t);
                        return o().createElement(V.Ar, {
                            header: e
                                ? o().createElement(Tr, { type: T.mH })
                                : o().createElement(zu, { title: R.strings.tank_setup.section.consumables() }),
                            content: o().createElement(
                                Oa,
                                { selectedSlotId: s },
                                o().createElement(js, { compare: e, cardsAmount: r, type: T.mH }),
                            ),
                            footer:
                                !e &&
                                o().createElement(as.w, {
                                    withConfirmation: !0,
                                    renewalType: ts.my.Consumables,
                                    mediaSize: t,
                                    parentModelPath: 'model.tankSetup.consumablesSetup',
                                    onDealConfirmed: u.consumables.confirmDeal,
                                    onDealCancelled: u.consumables.cancelDeal,
                                    onAutoRenewalChanged: u.consumables.changeAutoRenewal,
                                }),
                            compare: e,
                        });
                    });
                function Rr() {
                    return (
                        (Rr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Rr.apply(this, arguments)
                    );
                }
                const Mr = (0, S.Pi)(({ compare: e, hasIntroduction: t }) => {
                    const a = N(),
                        n = a.model,
                        u = a.controls,
                        s = n.optDevices.tabs.get(),
                        r = s.tabs.length > 1;
                    return e
                        ? o().createElement(Tr, { type: T.zn, withContent: !0 }, (a) => {
                              if (!r) return null;
                              const n = e && !t && a <= 4,
                                  i = (function (e, t) {
                                      return t ? cu.hX(e, (e) => 'modernized' !== e.name) : e;
                                  })(s.tabs, n);
                              return o().createElement(
                                  $u,
                                  Rr({}, Object.assign({}, s, { tabs: i }), {
                                      handleTabChanged: u.optDevices.changeTab,
                                  }),
                              );
                          })
                        : o().createElement(
                              zu,
                              {
                                  title: R.strings.tank_setup.section.optDevices(),
                                  tabProps: r
                                      ? Object.assign({}, s, { handleTabChanged: u.optDevices.changeTab })
                                      : void 0,
                                  tabs:
                                      r &&
                                      o().createElement($u, Rr({}, s, { handleTabChanged: u.optDevices.changeTab })),
                              },
                              o().createElement(wr, { compare: e }),
                          );
                });
                var Ir = a(8934);
                const Or = {
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
                var Pr = a(280);
                const $r = ({ introType: e }) => {
                        const t = l()(Or.icon, Or[`icon__currency-${e}`]),
                            a = (0, r.useMemo)(
                                () => ({
                                    currencyName: o().createElement(
                                        'span',
                                        { className: Or.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: o().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            n = R.strings.tank_setup.introduction.message.$dyn(e);
                        return n ? o().createElement(Pr.z, { binding: a, text: n, classMix: Or.message }) : null;
                    },
                    Hr = (0, S.Pi)(() => {
                        const e = (0, V.GS)(),
                            t = e === V.cJ.Large || e === V.cJ.Huge,
                            a = (0, r.useState)(!0),
                            n = a[0],
                            u = a[1],
                            s = (0, vr.t)(),
                            i = s.model,
                            c = s.controls,
                            _ = i.optDevices.setup.get().introductionType,
                            d = i.computes.optDevices.slotsLength() > 0,
                            m = (0, r.useCallback)(() => {
                                u(!1);
                            }, []),
                            p = (0, r.useCallback)(() => {
                                (c.introPassed(), u(!0));
                            }, [c]),
                            E = (0, r.useMemo)(
                                () => ({
                                    enter: Or.base__enter,
                                    enterActive: Or.base__enterActive,
                                    exit: Or.base__exit,
                                    exitActive: Or.base__exitActive,
                                }),
                                [],
                            ),
                            b = d
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(_)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(_);
                        return o().createElement(
                            Ir.Z,
                            { in: n, classNames: E, timeout: 300, onExited: p },
                            o().createElement(
                                'div',
                                { className: l()(Or.base, e && Or[`base__${e}`]), id: 'introduction' },
                                o().createElement(
                                    'div',
                                    { className: Or.introduction },
                                    o().createElement('div', {
                                        className: l()(Or.image, t ? Or[`image__${_}Large`] : Or[`image__${_}`]),
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: Or.description },
                                        o().createElement('div', { className: Or.title }, b),
                                        o().createElement($r, { introType: _ }),
                                    ),
                                    d &&
                                        o().createElement(
                                            $e.u5,
                                            { type: $e.L$.secondary, size: $e.qE.medium, onClick: m },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    }),
                    zr = 'OptDevicesSetup_intro_ae',
                    jr = 'OptDevicesSetup_footer_e6',
                    Wr = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = (0, V.GS)(),
                            a = N().model,
                            n = (0, vr.t)().controls,
                            u = a.ammunitionPanel.get().selectedSlot,
                            s = a.optDevices.setup.get().withIntroduction,
                            r = a.computes.optDevices.slotsLength(),
                            i = a.optDevices.filter.get().selectedFilterCount,
                            l = a.optDevices.tabs.get().selectedTabName,
                            c = a.computes.optDevices.slotsLength();
                        return o().createElement(V.Ar, {
                            compare: e,
                            header: o().createElement(Mr, { compare: e, hasIntroduction: s }),
                            content:
                                !e && s
                                    ? o().createElement(
                                          'div',
                                          { className: zr },
                                          o().createElement(js, {
                                              compare: !1,
                                              type: T.zn,
                                              cardsAmount: c,
                                              isDisabled: !0,
                                          }),
                                          o().createElement(Hr, null),
                                      )
                                    : o().createElement(
                                          Oa,
                                          { selectedSlotId: u, scrollAreaKey: l, updateKey: `${i}:${r}` },
                                          o().createElement(js, {
                                              compare: e,
                                              type: T.zn,
                                              cardsAmount: c,
                                              isDisabled: s,
                                          }),
                                      ),
                            footer:
                                !e &&
                                o().createElement(
                                    'div',
                                    { className: jr },
                                    o().createElement(as.w, {
                                        withConfirmation: !0,
                                        parentModelPath: 'model.tankSetup.optDevicesSetup',
                                        mediaSize: t,
                                        onDealConfirmed: n.optDevices.confirmDeal,
                                        onDealCancelled: n.optDevices.cancelDeal,
                                        onAutoRenewalChanged: n.optDevices.changeAutoRenewal,
                                    }),
                                ),
                        });
                    });
                let Gr, Zr;
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
                })(Gr || (Gr = {})),
                    (function (e) {
                        ((e.Visible = 'visible'),
                            (e.Hidden = 'hidden'),
                            (e.NotSuitableVehicle = 'notSuitableVehicle'),
                            (e.NoDataAtAll = 'noDataAtAll'));
                    })(Zr || (Zr = {})));
                const Vr = (e, t, { listenResize: a = !0, intervalMs: n = 50, minStableTicks: u = 3 }, s) => {
                    const o = (0, r.useRef)(e()),
                        i = (0, r.useState)(0),
                        l = i[0],
                        c = i[1];
                    ((0, r.useEffect)(() => {
                        let a = 0;
                        const s = setInterval(() => {
                            const n = e();
                            n !== o.current
                                ? ((o.current = n), (a = 0), t(n))
                                : (a++, a >= u && (t(n), clearInterval(s)));
                        }, n);
                        return () => {
                            clearInterval(s);
                        };
                    }, [e, t, l, n, u, ...s]),
                        (0, r.useEffect)(() => {
                            const e = () => {
                                c((e) => e + 1);
                            };
                            if (a)
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                        }, [a]));
                };
                let Ur, qr;
                (!(function (e) {
                    ((e[(e.NoData = 0)] = 'NoData'),
                        (e[(e.Normal = 1)] = 'Normal'),
                        (e[(e.Linked = 2)] = 'Linked'),
                        (e[(e.Combined = 3)] = 'Combined'));
                })(Ur || (Ur = {})),
                    (function (e) {
                        ((e.Unknown = 'unknown'), (e.Random = 'random'), (e.Comp7 = 'comp7'));
                    })(qr || (qr = {})));
                var Kr = a(5344),
                    Xr = a(5959);
                const Yr = {
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
                    Jr = (e) => {
                        return (t = e) !== Gr.Empty &&
                            t in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
                            ? R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices.$dyn(e)
                            : null;
                        var t;
                    },
                    Qr = (e) => {
                        const t = Number.isInteger(e) ? `${e}` : e.toFixed(2);
                        return (0, Q.dL)(t);
                    },
                    eo = ({ popularity: e, optionalDevice: t, isHovered: a }) => {
                        const n = (0, r.useMemo)(() => {
                                const e = t.map(Jr);
                                return [...e, ...Array.from({ length: 3 - e.length }, () => null)];
                            }, [t]),
                            u = 0 === t.length;
                        return o().createElement(
                            'div',
                            { className: l()(Yr.row, u && Yr.row_empty) },
                            o().createElement(
                                'div',
                                { className: l()(Yr.popularity, a && Yr.popularity__visible) },
                                o().createElement(Re, { text: Qr(e) }),
                            ),
                            o().createElement(
                                'div',
                                { className: l()(Yr.row_images, a && Yr.row_images__hovered) },
                                n.map((e, t) =>
                                    e
                                        ? o().createElement('img', { key: t, className: Yr.row_image, src: e })
                                        : o().createElement('div', { key: t, className: Yr.row_emptySlot }),
                                ),
                            ),
                        );
                    },
                    to = (0, S.Pi)(({ isHidden: e = !1 }) => {
                        const t = (0, vr.t)(),
                            a = t.model,
                            n = t.controls,
                            u = (0, r.useState)(!0),
                            s = u[0],
                            i = u[1],
                            c = (0, r.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            m = (0, r.useState)(a.selectedPreset.get().mType || Kr.d.Common),
                            p = m[0],
                            E = m[1],
                            b = a.computes.getSortedCommonItems(),
                            g = a.computes.getSortedLegendaryItems(),
                            h = a.optionalDevicesAssistant.get().state,
                            A = h === Zr.NotSuitableVehicle,
                            v = a.computes.getModeType() === qr.Comp7,
                            C = a.computes.getOptionalDevicesResultTypeForPreset(p),
                            f = a.computes.getSourceVehicleCompDescrForPreset(p),
                            D = () => {
                                const e = p === Kr.d.Common ? Kr.d.Legendary : Kr.d.Common;
                                (E(e), n.onPresetSelected(e));
                            },
                            F = p === Kr.d.Common ? b : g,
                            B =
                                p === Kr.d.Common
                                    ? R.strings.tank_setup.popularLoadouts.common()
                                    : R.strings.tank_setup.popularLoadouts.legendary(),
                            y = C === Ur.Linked,
                            w = C === Ur.NoData && Kr.d.Legendary,
                            S = h === Zr.NoDataAtAll,
                            k = C === Ur.Combined,
                            T = _ && !k,
                            x = y || k,
                            N = Dt(),
                            L = (0, r.useRef)(null),
                            M = (0, r.useCallback)(() => {
                                var e;
                                const t = null == (e = L.current) ? void 0 : e.getBoundingClientRect();
                                return t ? `${t.width},${t.height}` : null;
                            }, []);
                        Vr(
                            M,
                            () => {
                                N.recalculateContent();
                                const e = N.getContainerSize() || 0,
                                    t = N.getWrapperSize() || 0;
                                i(e > t);
                            },
                            { intervalMs: 50, minStableTicks: 8, listenResize: !0 },
                            [],
                        );
                        const I = (0, r.useMemo)(
                            () =>
                                Array.from({ length: 3 }, (e, t) => {
                                    var a;
                                    return null != (a = F[t]) ? a : { popularity: 0, items: [] };
                                }),
                            [F],
                        );
                        return o().createElement(
                            'div',
                            {
                                className: l()(
                                    Yr.base,
                                    e && Yr.base__hidden,
                                    p === Kr.d.Legendary && Yr.base__legendary,
                                    x && Yr.base__linked,
                                    w && Yr.base__noDataLegendary,
                                ),
                            },
                            o().createElement('div', {
                                className: l()(Yr.backgroundWrapper, { [Yr.backgroundWrapper__noData]: S || A }),
                            }),
                            A
                                ? o().createElement(
                                      'div',
                                      { className: Yr.vehicleNotAvailable },
                                      o().createElement(
                                          'div',
                                          { className: Yr.vehicleNotAvailable_text },
                                          R.strings.tank_setup.popularLoadouts.vehicleNotAvailable(),
                                      ),
                                  )
                                : S
                                  ? o().createElement(
                                        'div',
                                        { className: Yr.noData },
                                        o().createElement(
                                            'div',
                                            { className: Yr.noData_text },
                                            R.strings.tank_setup.popularLoadouts.noData(),
                                        ),
                                    )
                                  : o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', {
                                            className: l()([Yr.border, s && Yr.border_visible]),
                                        }),
                                        w &&
                                            o().createElement(
                                                'div',
                                                { className: Yr.noDataLegendary },
                                                R.strings.tank_setup.popularLoadouts.noDataLegendary(),
                                            ),
                                        o().createElement(
                                            'div',
                                            { className: Yr.scrollWrapper },
                                            o().createElement(
                                                zt.Vertical.Default,
                                                { api: N, className: Yr.scroll },
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className: Yr.container,
                                                        ref: L,
                                                        onMouseEnter: () => d(!0),
                                                        onMouseLeave: () => d(!1),
                                                    },
                                                    I.map((e, t) =>
                                                        o().createElement(eo, {
                                                            key: t,
                                                            popularity: e.popularity,
                                                            optionalDevice: e.items,
                                                            isHovered: T,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                            o().createElement('div', { className: Yr.background }),
                                            v && o().createElement('div', { className: Yr.onslaughtBackground }),
                                        ),
                                        o().createElement('div', { className: Yr.border }),
                                        o().createElement('div', { className: Yr.lips }),
                                        o().createElement(
                                            'div',
                                            { className: Yr.footer },
                                            o().createElement(
                                                'div',
                                                {
                                                    className: Yr.footer_arrowWrapper,
                                                    onMouseEnter: () => {
                                                        (0, Xr.playSound)('highlight');
                                                    },
                                                    onClick: () => {
                                                        (0, Xr.playSound)('play');
                                                    },
                                                },
                                                o().createElement('div', {
                                                    className: Yr.footer_arrowLeft,
                                                    onClick: D,
                                                }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Yr.footer_wrapper },
                                                o().createElement(
                                                    te.u,
                                                    {
                                                        contentId:
                                                            R.views.lobby.tanksetup.tooltips.PopularLoadoutsTooltip(
                                                                'resId',
                                                            ),
                                                        args: {
                                                            sourceVehicleCompDescr: f,
                                                            optionalDevicesResultType: C,
                                                        },
                                                    },
                                                    o().createElement(
                                                        'div',
                                                        null,
                                                        o().createElement('div', { className: Yr.lipsIcon }),
                                                        o().createElement(
                                                            'div',
                                                            { className: Yr.footer_wrapper_title },
                                                            B,
                                                        ),
                                                    ),
                                                ),
                                                o().createElement(
                                                    'div',
                                                    { className: Yr.footer_wrapper_pagination },
                                                    o().createElement('div', {
                                                        className: l()(Yr.dot1, 0 === p && Yr.dot1__active),
                                                    }),
                                                    o().createElement('div', {
                                                        className: l()(Yr.dot2, 1 === p && Yr.dot2__active),
                                                    }),
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                {
                                                    className: Yr.footer_arrowWrapper,
                                                    onMouseEnter: () => {
                                                        (0, Xr.playSound)('highlight');
                                                    },
                                                    onClick: () => {
                                                        (0, Xr.playSound)('play');
                                                    },
                                                },
                                                o().createElement('div', {
                                                    className: Yr.footer_arrowRight,
                                                    onClick: D,
                                                }),
                                            ),
                                        ),
                                    ),
                        );
                    }),
                    ao = {
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                    },
                    no = (0, S.Pi)(() => {
                        const e = (0, vr.t)().model.vehicleInfo.get(),
                            t = (0, V.GS)();
                        return o().createElement(
                            'div',
                            { className: l()(ao.base, t && ao[`base__${t}`]) },
                            o().createElement(Ut, e),
                        );
                    }),
                    uo = 'RightSideTankParameters_tankNamePosition_b3',
                    so = 'RightSideTankParameters_popularLoadoutsPosition_04',
                    ro = (0, S.Pi)(({ isBattleAbilities: e, arePopularLoadoutsHidden: t }) => {
                        const a = (0, vr.t)(),
                            n = a.controls,
                            u = a.model,
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = u.optionalDevicesAssistant.get().state === Zr.Hidden,
                            c = !l,
                            _ = (0, r.useCallback)(() => {
                                var e, t;
                                const a = null == (e = s.current) ? void 0 : e.getBoundingClientRect(),
                                    n = null == (t = i.current) ? void 0 : t.getBoundingClientRect();
                                return a && n ? `${a.left}-${a.width}-${n.top}` : null;
                            }, [s, i]),
                            d = (0, r.useCallback)(() => {
                                if (!s.current || !i.current) return;
                                const e = s.current.getBoundingClientRect(),
                                    t = i.current.getBoundingClientRect(),
                                    a = {
                                        width: Ke.O.view.pxToRem(e.width),
                                        height: Ke.O.view.pxToRem(e.height),
                                        offsetX: Ke.O.view.pxToRem(e.left),
                                        offsetY: Ke.O.view.pxToRem(e.top),
                                        bottomMargin: Math.round(Ke.O.view.pxToRem(window.outerHeight - t.top)),
                                    };
                                (window.tutorialApi.updateComponents(), a.offsetX && a.width && n.resized(a));
                            }, [n]);
                        return (
                            Vr(_, d, { intervalMs: 50, minStableTicks: 8, listenResize: !0 }, [e, l]),
                            o().createElement(
                                o().Fragment,
                                null,
                                !e && o().createElement('div', { className: uo, ref: s }, o().createElement(no, null)),
                                o().createElement(
                                    'div',
                                    { className: so, ref: i },
                                    c && o().createElement(to, { isHidden: t }),
                                ),
                            )
                        );
                    });
                var oo = a(5096),
                    io = a(2558);
                const lo = 200;
                let co;
                !(function (e) {
                    ((e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount'));
                })(co || (co = {}));
                const _o = {
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
                    mo = (0, S.Pi)(
                        ({
                            children: e,
                            index: t,
                            mediaSize: a,
                            leftID: n,
                            rightID: u,
                            uniqueKey: s,
                            onTransitionEnd: i,
                        }) => {
                            const c = Ha(s),
                                _ = a === V.cJ.Tiny,
                                d = n === t,
                                m = c && c !== s,
                                p = (0, r.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                E = (0, r.useMemo)(() => ((u - n > 1 && _) || !m ? 'Fade' : ''), [m, n, u, _]),
                                b = (0, r.useCallback)(
                                    (e) =>
                                        o().cloneElement(e, {
                                            classNames: {
                                                enterActive: _o.base__enter,
                                                enterDone: _o[`base__enter${p}${E}`],
                                                exit: _o[`base__exit${p}${E}`],
                                                exitActive: _o.base__exitActive,
                                            },
                                        }),
                                    [p, E],
                                ),
                                g = (0, r.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            ((e.className = ''), i && i());
                                        }, lo);
                                    },
                                    [i],
                                ),
                                h = (0, r.useMemo)(() => ({ animationDuration: '200ms' }), []);
                            return o().createElement(
                                io.Z,
                                { component: null, childFactory: b },
                                o().createElement(
                                    Ir.Z,
                                    { key: s, timeout: lo, onEntered: g },
                                    o().createElement(
                                        'div',
                                        { className: l()(_o.base, _o[`base__${a}`]), style: h },
                                        e,
                                    ),
                                ),
                            );
                        },
                    );
                var po = a(2094);
                const Eo = {
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
                    bo = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    go = (0, S.Pi)(({ shellID: e, specificationID: t }) => {
                        const a = (0, V.GS)(),
                            n = a === V.cJ.Tiny,
                            u = (0, vr.t)().model.computes.shells.specification(e, t),
                            s = u.paramName,
                            i = u.value,
                            c = u.metricValue,
                            _ = (0, r.useMemo)(() => {
                                if ('avgPiercingPower' === s) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [s]);
                        return 'avgPiercingPower' === s || (!n && i)
                            ? o().createElement(
                                  'div',
                                  { className: l()(bo.base, a && bo[`base__${a}`]) },
                                  n
                                      ? o().createElement(
                                            o().Fragment,
                                            null,
                                            R.strings.menu.tank_params.shortened.$dyn(s),
                                            ' ',
                                            o().createElement(
                                                'div',
                                                { className: bo.value },
                                                i || o().createElement('span', null, '—'),
                                            ),
                                            o().createElement('div', { className: bo.units }, _),
                                        )
                                      : o().createElement(
                                            o().Fragment,
                                            null,
                                            R.strings.menu.tank_params.$dyn(s),
                                            o().createElement('div', { className: bo.units }, c),
                                            o().createElement('div', {
                                                className: l()(bo.separator, a && bo[`separator__${a}`]),
                                            }),
                                            o().createElement(
                                                'div',
                                                { className: bo.value },
                                                i || o().createElement('span', null, '—'),
                                            ),
                                        ),
                              )
                            : null;
                    }),
                    ho = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                var Ao = a(7405),
                    vo = a(329);
                const Co = {
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
                function fo() {
                    return (
                        (fo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        fo.apply(this, arguments)
                    );
                }
                const Do = R.strings.tank_setup.shells,
                    Fo = (0, S.Pi)(({ id: e }) => {
                        const t = (0, V.GS)(),
                            a = t === V.cJ.Tiny,
                            n = (0, vr.t)().model,
                            u = n.computes.shells.shell(e),
                            s = u.buyCount,
                            i = u.itemsInStorage,
                            c = u.itemsInVehicle,
                            _ = u.totalPrice,
                            d = u.price,
                            m = n.computes.shells.defPriceLength(e),
                            p = n.computes.shells.priceLength(e) ? n.computes.shells.price(e, 0) : null,
                            E = m ? n.computes.shells.defPrice(e, 0) : null,
                            b = (0, r.useMemo)(() => Do[a ? 'shortSpecification' : 'specification'].inStorage(), [a]),
                            g = (0, r.useMemo)(() => Do[a ? 'shortSpecification' : 'specification'].inVehicle(), [a]),
                            h = (0, r.useMemo)(() => Do[a ? 'shortSpecification' : 'specification'].price(), [a]),
                            A = c >= 0,
                            v = m > 0,
                            C = (0, r.useMemo)(
                                () =>
                                    p && E
                                        ? {
                                              tooltip: 'priceDiscount',
                                              price: p.value,
                                              defPrice: E.value,
                                              currencyType: p.name,
                                          }
                                        : void 0,
                                [E, p],
                            );
                        return o().createElement(
                            'div',
                            { className: l()(Co.base, t && Co[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: l()(Co.row, t && Co[`row__${t}`]) },
                                o().createElement(
                                    'div',
                                    { className: Co.rowItem },
                                    o().createElement('div', { className: l()(Co.total, t && Co[`total__${t}`]) }, b),
                                    o().createElement(
                                        'div',
                                        { className: l()(Co.lowResolutionValue, t && Co[`lowResolutionValue__${t}`]) },
                                        o().createElement('span', { className: Co.indent }),
                                        i,
                                    ),
                                ),
                                A &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('span', { className: Co.divider }, '/'),
                                        o().createElement(
                                            'div',
                                            { className: Co.rowItem },
                                            o().createElement(
                                                'div',
                                                { className: l()(Co.total, t && Co[`total__${t}`]) },
                                                o().createElement(
                                                    'div',
                                                    { className: l()(Co.colored, t && Co[`colored__${t}`]) },
                                                    g,
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                {
                                                    className: l()(
                                                        Co.lowResolutionValue,
                                                        t && Co[`lowResolutionValue__${t}`],
                                                    ),
                                                },
                                                o().createElement('span', { className: Co.indent }),
                                                c,
                                            ),
                                        ),
                                    ),
                                o().createElement('div', { className: l()(Co.separator, t && Co[`separator__${t}`]) }),
                                o().createElement(
                                    'div',
                                    { className: l()(Co.hiResolutionValue, t && Co[`hiResolutionValue__${t}`]) },
                                    i,
                                    A &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement('span', { className: Co.divider }, '/'),
                                            o().createElement(
                                                'div',
                                                { className: l()(Co.colored, t && Co[`colored__${t}`]) },
                                                c,
                                            ),
                                        ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: l()(Co.row, t && Co[`row__${t}`]) },
                                o().createElement('div', { className: l()(Co.total, t && Co[`total__${t}`]) }, h),
                                o().createElement('div', { className: l()(Co.separator, t && Co[`separator__${t}`]) }),
                                o().createElement(
                                    'div',
                                    { className: Co.value },
                                    o().createElement(
                                        'div',
                                        { className: Co.overall },
                                        '(',
                                        o().createElement('span', null, s),
                                        ' ×',
                                        o().createElement(
                                            ee.t,
                                            { args: C, isEnabled: v },
                                            o().createElement(
                                                'span',
                                                { className: Co.price },
                                                o().createElement(yn.t, fo({ showZero: !0 }, d)),
                                            ),
                                        ),
                                        ')',
                                        o().createElement(
                                            'span',
                                            { className: l()(Co.price, Co.price__final) },
                                            s
                                                ? o().createElement(yn.t, fo({ showZero: !0, ignoreDiscount: !0 }, _))
                                                : o().createElement(Ao.F, {
                                                      size: vo.et.small,
                                                      type: vo.V2.credits,
                                                      value: 0,
                                                  }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Bo = (0, S.Pi)(({ id: e }) => {
                        const t = (0, V.GS)(),
                            a = (0, vr.t)().model.computes.shells.specificationsLength(e);
                        return o().createElement(
                            'div',
                            { className: l()(ho.base, t && ho[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: ho.overall },
                                ns(a, (t) =>
                                    o().createElement(
                                        r.Fragment,
                                        { key: t },
                                        o().createElement(go, { shellID: e, specificationID: t }),
                                    ),
                                ),
                            ),
                            o().createElement('div', { className: ho.total }, o().createElement(Fo, { id: e })),
                        );
                    }),
                    yo = R.images.gui.maps.icons.shell,
                    wo = (0, S.Pi)(({ id: e }) => {
                        const t = (0, V.GS)(),
                            a = (0, vr.t)(),
                            n = a.model,
                            u = a.controls,
                            s = n.computes.shells.shell(e),
                            i = s.count,
                            c = s.type,
                            _ = s.intCD,
                            d = s.imageName,
                            m = s.installedSlotId,
                            p = s.itemInstalledSetupIdx,
                            E = s.itemInstalledSetupSlotIdx,
                            b = s.isMountedMoreThanOne,
                            g = n.shellsSetup.get(),
                            h = g.installedCount,
                            A = g.maxCount,
                            v = g.clipCount,
                            C = A - h + i,
                            f = (0, r.useCallback)(
                                (e) => {
                                    u.shells.updateSlot && u.shells.updateSlot({ intCD: _, newCount: e });
                                },
                                [u, _],
                            ),
                            D = (0, r.useMemo)(() => {
                                const e = { slotType: T.g9, fieldType: 0, intCD: _ };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: E,
                                        isMountedMoreThanOne: b,
                                    }),
                                ];
                            }, [_, m, p, E, b]),
                            F = D[0],
                            B = D[1],
                            y = (0, r.useMemo)(() => {
                                const e = ((e) => {
                                    switch (e) {
                                        case V.cJ.Huge:
                                        case V.cJ.Large:
                                            return yo.large;
                                        default:
                                            return yo.big;
                                    }
                                })(t);
                                return { backgroundImage: `url(${e ? e.$dyn(d) : ''})` };
                            }, [d, t]),
                            w = R.strings.item_types.shell.kinds.$dyn(c),
                            S = systemLocale.toUpperCase(w);
                        return o().createElement(
                            'div',
                            { className: l()(Eo.base, t && Eo[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: Eo.shell },
                                o().createElement(
                                    an,
                                    { args: B },
                                    o().createElement(
                                        ee.t,
                                        { args: F },
                                        o().createElement(
                                            'div',
                                            { className: Eo.icon, style: y },
                                            o().createElement(
                                                'div',
                                                { className: l()(Eo.count, !i && Eo.count__zero) },
                                                i,
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement('div', { className: Eo.name }, S),
                            ),
                            o().createElement(
                                'div',
                                { className: Eo.ammunition },
                                o().createElement(po.i, {
                                    parentId: `${_}-slider`,
                                    currentValue: i,
                                    maximum: A,
                                    sliderMaximum: C,
                                    onUpdates: f,
                                    stepCount: v,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: Eo.specifications },
                                o().createElement(Bo, { id: e }),
                            ),
                        );
                    }),
                    So = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    ko = ({ id: e, onSwap: t, mediaSize: a, hoverSound: n = 'highlight', clickSound: u = 'play' }) => {
                        const s = (0, r.useCallback)(() => {
                                (u && (0, Je.G)(u), t(e));
                            }, [e, t, u]),
                            i = (0, r.useCallback)(() => {
                                n && (0, Je.G)(n);
                            }, [n]);
                        return o().createElement('div', {
                            id: `swap-${e}`,
                            onClick: s,
                            onMouseEnter: i,
                            className: l()(So.base, So[`base__${a}`]),
                        });
                    },
                    To = {
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
                    xo = (0, S.Pi)(({ id: e, onTransitionEnd: t, onSwap: a, leftID: n, rightID: u }) => {
                        const s = (0, V.GS)(),
                            r = (0, vr.t)().model,
                            i = r.computes.shells.length(),
                            c = r.computes.shells.shell(e).intCD;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                mo,
                                { index: e, uniqueKey: c, leftID: n, rightID: u, mediaSize: s, onTransitionEnd: t },
                                o().createElement(
                                    'div',
                                    { className: l()(To.base, s && To[`base__${s}`]) },
                                    o().createElement(wo, { id: e }),
                                ),
                            ),
                            e !== i - 1 &&
                                o().createElement(
                                    'div',
                                    { className: l()(To.swap, s && To[`swap__${s}`]) },
                                    o().createElement(ko, { id: e, mediaSize: s, onSwap: a }),
                                ),
                        );
                    }),
                    No = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        base__large: 'Sections_base__large_d0',
                    },
                    Lo = (0, S.Pi)(() => {
                        const e = (0, vr.t)(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.shells.length(),
                            u = (0, r.useState)(!1),
                            s = u[0],
                            i = u[1],
                            c = (0, V.GS)(),
                            _ = t.computes.shells.ids(),
                            d = Ha(_),
                            m = (0, r.useMemo)(() => {
                                const e = _.filter((e, t) => {
                                    if (d && d[t] !== e) return !0;
                                });
                                return e.length > 1
                                    ? { leftID: _.indexOf(e[0]), rightID: _.indexOf(e[1]) }
                                    : { leftID: -1, rightID: -1 };
                            }, [_, d]),
                            p = m.leftID,
                            E = m.rightID,
                            b = (0, r.useCallback)(
                                (e) => {
                                    (s || a.shells.actSlot({ actionType: Ga, leftID: e, rightID: e + 1 }), i(!0));
                                },
                                [a, s],
                            ),
                            g = (0, r.useCallback)(() => {
                                i(!1);
                            }, [i]);
                        return o().createElement(
                            'div',
                            { className: l()(No.base, No[`base__${c}`]) },
                            ns(n, (e) =>
                                o().createElement(xo, {
                                    id: e,
                                    onTransitionEnd: g,
                                    onSwap: b,
                                    leftID: p,
                                    rightID: E,
                                    key: `shell-container-${e}`,
                                }),
                            ),
                        );
                    }),
                    Ro = (0, S.Pi)(() => {
                        const e = (0, V.GS)(),
                            t = (0, vr.t)().controls;
                        return o().createElement(V.Ar, {
                            header: o().createElement(
                                zu,
                                { title: R.strings.tank_setup.section.shells() },
                                o().createElement(oo.k, { isShortened: !0 }),
                            ),
                            content: o().createElement(Lo, null),
                            footer: o().createElement(as.w, {
                                withConfirmation: !0,
                                renewalType: ts.my.Shells,
                                parentModelPath: 'model.tankSetup.shellsSetup',
                                mediaSize: e,
                                onDealConfirmed: t.shells.confirmDeal,
                                onDealCancelled: t.shells.cancelDeal,
                                onAutoRenewalChanged: t.shells.changeAutoRenewal,
                            }),
                        });
                    }),
                    Mo = {
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
                    Io = [T.zn, T.g9, T.mH, T.G$, T.YN],
                    Oo = (e, t) => (t === e ? '' : Io.indexOf(t) > Io.indexOf(e) ? 'right' : 'left'),
                    Po = ({ children: e, selectedSetup: t }) => {
                        const a = o().createRef(),
                            n = (0, r.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            u = (0, r.useMemo)(() => {
                                const e = Oo(n.current.selectedSetup, t);
                                return { enter: Mo[`base__${e}Enter`] };
                            }, [t]),
                            s = (0, r.useCallback)(
                                (e) => {
                                    const u = Oo(n.current.selectedSetup, t);
                                    ((e.className = l()(Mo.base, Mo.base__exit)),
                                        e.classList.add(Mo[`base__${u}Exit`]),
                                        (n.current.animatedElements[t] = a));
                                    (Object.values(n.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(Mo.base__previous);
                                    }),
                                        a.current && a.current.classList.add(Mo.base__previous));
                                },
                                [a, t],
                            ),
                            i = (0, r.useCallback)(
                                (e) => {
                                    const a = Oo(n.current.previousSelectedSetup, t);
                                    ((e.className = Mo.base), e.classList.add(Mo[`base__${a}Enter`]));
                                },
                                [t],
                            ),
                            c = (0, r.useCallback)(
                                (e) => {
                                    const a = Oo(n.current.previousSelectedSetup, t);
                                    e.classList.add(Mo[`base__${a}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, r.cloneElement)(e);
                        return (
                            (n.current.previousSelectedSetup = n.current.selectedSetup),
                            (n.current.selectedSetup = t),
                            o().createElement(
                                io.Z,
                                null,
                                o().createElement(
                                    Ir.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: u,
                                        onExit: s,
                                        onEnter: i,
                                        onEntering: c,
                                    },
                                    o().createElement('div', { className: Mo.base, ref: a }, _),
                                ),
                            )
                        );
                    },
                    $o = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = N().model.tankSetup.get().selectedSetup;
                        return o().createElement(
                            r.Fragment,
                            null,
                            o().createElement(
                                Po,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case T.zn:
                                            return o().createElement(Wr, { compare: e });
                                        case T.g9:
                                            return o().createElement(Ro, null);
                                        case T.mH:
                                            return o().createElement(Lr, { compare: e });
                                        case T.G$:
                                            return o().createElement(Nr, { compare: e });
                                        case T.YN:
                                            return o().createElement(es, null);
                                        default:
                                            return o().createElement(Wr, { compare: e });
                                    }
                                })(),
                            ),
                            !e &&
                                o().createElement(ro, {
                                    isBattleAbilities: t === T.YN,
                                    arePopularLoadoutsHidden: t !== T.zn,
                                }),
                        );
                    }),
                    Ho = (0, S.Pi)(() => {
                        const e = Us(),
                            t = e.model,
                            a = e.controls,
                            n = t.root.get().show;
                        return (
                            (0, r.useEffect)(() => (0, w.v)(a.viewRendered), [a]),
                            o().createElement(
                                x.Provider,
                                { value: e },
                                o().createElement(
                                    k.Sf,
                                    {
                                        onClose: a.close,
                                        backgroundImage: R.images.gui.maps.icons.lobby.settings_blured_bg(),
                                        type: 'compare',
                                        show: n,
                                        onAnimationDone: a.animationEnded,
                                    },
                                    o().createElement($o, { compare: !0 }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    y().render(
                        o().createElement(Vs, null, o().createElement(F, null, o().createElement(Ho, null))),
                        document.getElementById('root'),
                    );
                });
            },
            8774: (e, t, a) => {
                'use strict';
                a.d(t, { a: () => C });
                var n = a(6483),
                    u = a.n(n),
                    s = a(3457),
                    r = a(2106),
                    o = a(6373),
                    i = a(7363),
                    l = a.n(i);
                const c = 'Action_base_bf',
                    _ = 'Action_base__hidden_4b',
                    d = 'Action_base__shown_9f',
                    m = 'Action_base__cut_26',
                    p = 'Action_action_b5',
                    E = 'Action_image_e9',
                    b = 'Action_button_74',
                    g = R.strings.tank_setup.tooltips.action,
                    h = ['cancel', 'undo'],
                    A = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`);
                var v;
                !(function (e) {
                    ((e.Hidden = 'hidden'), (e.FadeOut = 'fadeOut'), (e.Visible = 'visible'), (e.FadeIn = 'fadeIn'));
                })(v || (v = {}));
                const C = ({
                    parentId: e,
                    actionType: t,
                    imageSource: a = '',
                    show: n = !1,
                    disabled: C = !1,
                    disabledTooltipText: f,
                    tooltipBodyPath: D,
                    buttonType: F = r.L.primary,
                    isModernized: B,
                    isFreeToDemount: y,
                    level: w,
                    onClick: S,
                }) => {
                    const k = (0, i.useRef)(null),
                        T = (0, i.useRef)(v.Hidden),
                        x = (0, i.useRef)(!1),
                        N = (0, i.useState)(!n),
                        L = N[0],
                        M = N[1],
                        I = (0, i.useState)(!1),
                        O = I[0],
                        P = I[1],
                        $ = (0, i.useState)(),
                        H = $[0],
                        z = $[1],
                        j = (0, i.useCallback)(() => {
                            const e = T.current;
                            e === v.FadeIn
                                ? ((T.current = v.Hidden), M(!0))
                                : e === v.FadeOut && (T.current = v.Visible);
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
                            n !== x.current &&
                                (n ? ((T.current = v.FadeOut), M(!1)) : (T.current = v.FadeIn), (x.current = n));
                        }, [n]),
                        (0, i.useEffect)(() => {
                            if (O) {
                                const e = setTimeout(() => P(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [O]),
                        (0, i.useEffect)(() => () => H && clearTimeout(H), [H]));
                    const W = (0, i.useCallback)(() => {
                            O || (P(!0), T.current === v.Visible && z(setTimeout(() => S(t), 200)));
                        }, [t, S, O]),
                        G = B ? A(t, w) : t,
                        Z = (0, i.useMemo)(() => {
                            if (C) return { body: f, isEnabled: Boolean(f) };
                            const e = ((e, t, a, n) => (a ? 'demount_plus' : n ? A(e, t) : e))(t, w, y, B);
                            return {
                                header: g.title.$dyn(e),
                                body: h.includes(e) ? void 0 : g.description.$dyn(D || e),
                            };
                        }, [t, C, f, y, B, w, D]),
                        V = (0, i.useMemo)(
                            () => ({
                                backgroundImage: `url(${a || R.images.gui.maps.icons.tanksetup.actions.$dyn(G)})`,
                            }),
                            [G, a],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: u()(c, n ? d : _, L && m) },
                        l().createElement(
                            o.i,
                            Z,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    s.u5,
                                    { onClick: W, type: F, mixClass: b, disabled: C },
                                    l().createElement('div', { className: E, style: V }),
                                ),
                            ),
                        ),
                    );
                };
            },
            8586: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => h });
                var n = a(7363),
                    u = a.n(n),
                    s = a(6483),
                    r = a.n(s),
                    o = a(3457),
                    i = a(6373);
                const l = 'CtaButtons_base_4c',
                    c = 'CtaButtons_content_9b',
                    _ = 'CtaButtons_substrate_2d',
                    d = 'CtaButtons_indicator_e9',
                    m = 'CtaButtons_toggle_64',
                    p = 'CtaButtons_toggle__on_40';
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const b = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: a,
                    callback: s,
                    withToggle: l = !1,
                    toggle: b,
                    buttonProps: g,
                }) => {
                    const h = (0, n.useCallback)(() => {
                            s(t, b);
                        }, [t, s, b]),
                        A = (0, n.useMemo)(() => {
                            if (l) {
                                const t = r()(m, b && p);
                                return u().createElement(
                                    'div',
                                    { className: c },
                                    u().createElement('div', { className: _ }),
                                    b && u().createElement('div', { className: d }),
                                    u().createElement('div', { className: t }),
                                    e,
                                );
                            }
                            return e;
                        }, [l, e, b]);
                    return u().createElement(i.i, a, u().createElement(o.u5, E({}, g, { onClick: h }), A));
                };
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                const h = ({ ctaConfigs: e }) =>
                    u().createElement(
                        'div',
                        { className: l },
                        e.map((e) => u().createElement(b, g({ key: e.ctaType }, e))),
                    );
            },
            5310: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => _ });
                var n = a(6483),
                    u = a.n(n),
                    s = a(9916),
                    r = a(7363),
                    o = a.n(r),
                    i = a(2558),
                    l = a(8934),
                    c = a(8529);
                const _ = ({ children: e, when: t, canAccept: a }) => {
                    const n = (0, r.useCallback)((e, t) => {
                            (0, s.Eu)().then(() => {
                                ((e.className = ''), e.classList.add(c.Z.base), e.classList.add(t));
                            });
                        }, []),
                        _ = (0, r.useCallback)(
                            (e) => {
                                n(e, c.Z.base__enter);
                            },
                            [n],
                        ),
                        d = (0, r.useCallback)(
                            (e) => {
                                n(e, c.Z.base__exit);
                            },
                            [n],
                        );
                    return t
                        ? o().createElement(
                              i.Z,
                              null,
                              o().createElement(
                                  l.Z,
                                  { in: a, timeout: 500, onEnter: _, onExit: d, key: `index-${a}` },
                                  o().createElement('div', { className: u()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : o().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, t, a) => {
                'use strict';
                a.d(t, { my: () => A, sF: () => f });
                var n = a(6483),
                    u = a.n(n),
                    s = a(6373),
                    r = a(9480),
                    o = a(3403),
                    i = a(7363),
                    l = a.n(i),
                    c = a(1922),
                    _ = a(6391),
                    d = a(5310),
                    m = a(5851),
                    p = a(2306),
                    E = a(7198),
                    b = a(5178),
                    g = a(6826),
                    h = a(628);
                let A, v;
                (!(function (e) {
                    ((e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair'));
                })(A || (A = {})),
                    (function (e) {
                        ((e.Column = 'column'), (e.Row = 'row'));
                    })(v || (v = {})));
                const C = R.strings.tank_setup.dealPanel,
                    f = (0, o.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: a = c.cJ.Medium,
                            panelType: n = v.Row,
                            priceLabel: o = C.toBePaid(),
                            autoRenewalLabel: A,
                            onAutoRenewalChanged: f,
                            onDealConfirmed: D,
                            onDealCancelled: F,
                            priceSeparator: B,
                            ignoreDiscount: y = !0,
                            discountTooltipEnabled: w = !1,
                            plusIconShown: S = !0,
                            totalPriceClassName: k,
                        }) => {
                            const T = (0, b.t)(),
                                x = T.model,
                                N = (0, i.useRef)(null),
                                L = a === c.cJ.Tiny || a === c.cJ.Small,
                                R = x.totalItemsInstalled.get(),
                                M = Boolean(x.totalItemsInStorage.get()),
                                I = Boolean(x.demountKitsCount.get()),
                                O = r.G(x.price.get(), (e) => e.value > 0) || I,
                                P = L && M && O && S;
                            return l().createElement(
                                p.h.Provider,
                                { value: T },
                                l().createElement(
                                    'div',
                                    {
                                        className: u()(
                                            h.Z.base,
                                            a && h.Z[`base__${a}`],
                                            e && h.Z.base__renewal,
                                            n !== v.Row && h.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        l().createElement(
                                            'div',
                                            { className: u()(h.Z.renewal, n !== v.Row && h.Z.renewal__dialog) },
                                            l().createElement(m.Y, { renewType: e, onValueChanged: f, label: A }),
                                        ),
                                    l().createElement(
                                        d.f,
                                        { when: n === v.Row, canAccept: x.canAccept.get() },
                                        l().createElement(
                                            l().Fragment,
                                            null,
                                            Boolean(R) &&
                                                l().createElement(
                                                    s.i,
                                                    { body: C.tooltip.fromVehicle(), isEnabled: L },
                                                    l().createElement(
                                                        'div',
                                                        { className: u()(h.Z.storage, a && h.Z[`storage__${a}`]) },
                                                        !L &&
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
                                            M &&
                                                l().createElement(
                                                    s.i,
                                                    { body: C.tooltip.fromStorage(), isEnabled: L },
                                                    l().createElement(
                                                        'div',
                                                        { className: u()(h.Z.storage, a && h.Z[`storage__${a}`]) },
                                                        !L &&
                                                            l().createElement(
                                                                'div',
                                                                { className: h.Z.from },
                                                                C.fromStorage(),
                                                            ),
                                                        l().createElement(_.Y, {
                                                            location: 'storage',
                                                            count: x.totalItemsInStorage.get(),
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            P && l().createElement('div', { className: h.Z.plus }),
                                            O &&
                                                l().createElement(
                                                    'div',
                                                    { className: u()(h.Z.totalPrice, P && h.Z.totalPrice__mixed, k) },
                                                    l().createElement(g.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: o,
                                                        messageHidden: L && n === v.Row,
                                                        ignoreDiscount: y,
                                                        discountTooltipEnabled: w,
                                                        priceSeparator: B,
                                                    }),
                                                ),
                                            t &&
                                                x.canAccept.get() &&
                                                l().createElement(
                                                    'div',
                                                    { className: h.Z.control },
                                                    l().createElement(E.Z, {
                                                        isDisabled: x.isDisabled.get(),
                                                        canCancel: x.canCancel.get(),
                                                        onCancel: () => F && F(),
                                                        onConfirm: () => D && D(),
                                                        confirmButtonRef: N,
                                                    }),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
            },
            5851: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => c });
                var n = a(2262),
                    u = a(6373),
                    s = a(3403),
                    r = a(7363),
                    o = a.n(r),
                    i = a(8175),
                    l = a(2306);
                const c = (0, s.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: t,
                        renewType: a = i.my.General,
                    }) => {
                        const s = (0, l.o)(),
                            c = s.model,
                            _ = s.controls,
                            d = c.dealPanel.get().isAutoRenewalEnabled,
                            m = (0, r.useCallback)(() => {
                                (_.changeAutoRenewal(!d), t && t(!d));
                            }, [_, d, t]),
                            p = (0, r.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    t = e.header.$dyn(a),
                                    n = a === i.my.General ? '' : e.body.$dyn(a);
                                return { header: String(t || e.header.general()), body: n ? String(n) : void 0 };
                            }, [a]);
                        return o().createElement(
                            u.i,
                            p,
                            o().createElement(n.XZ, {
                                id: 'renewal-setup-checkbox',
                                isChecked: d,
                                text: e,
                                onChange: m,
                            }),
                        );
                    },
                );
            },
            1957: (e, t, a) => {
                'use strict';
                a.d(t, { p: () => o });
                var n = a(3457),
                    u = a(7363),
                    s = a.n(u),
                    r = a(2527);
                const o = s().memo(({ applyBtnString: e, isDisabled: t, onConfirm: a, confirmButtonRef: u }) =>
                    s().createElement(
                        'div',
                        { ref: u, className: r.Z.base, id: 'deal-panel-confirm' },
                        s().createElement(
                            n.u5,
                            { size: n.qE.medium, disabled: t, onClick: () => a && a() },
                            R.strings.tank_setup.dealPanel.button.$dyn(e),
                        ),
                    ),
                );
            },
            7198: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => c });
                var n = a(3457),
                    u = a(6373),
                    s = a(7383),
                    r = a(7363),
                    o = a.n(r),
                    i = a(1957),
                    l = a(8099);
                const c = o().memo(
                    ({
                        applyBtnString: e = s.YR,
                        isDisabled: t,
                        canCancel: a,
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
                                      u.i,
                                      { body: d.tooltip.notEnough() },
                                      o().createElement('div', null, m),
                                  )
                                : m,
                            o().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                o().createElement(
                                    n.u5,
                                    {
                                        size: n.qE.medium,
                                        type: n.L$.secondary,
                                        mixClass: l.Z.button,
                                        disabled: !a,
                                        onClick: r,
                                    },
                                    d.button.cancel(),
                                ),
                            ),
                        );
                    },
                );
            },
            3755: (e, t, a) => {
                'use strict';
                a.d(t, { w: () => l });
                var n = a(3403),
                    u = a(7363),
                    s = a.n(u),
                    r = a(8175),
                    o = a(5178);
                const i = ['parentModelPath'];
                const l = (0, n.Pi)((e) => {
                    let t = e.parentModelPath,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                u = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (u[a] = e[a]));
                            return u;
                        })(e, i);
                    const n = `${t}.dealPanel`;
                    return s().createElement(o.k, { options: { context: n } }, s().createElement(r.sF, a));
                });
            },
            6826: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => _ });
                var n = a(6483),
                    u = a.n(n),
                    s = a(7363),
                    r = a.n(s),
                    o = a(9683),
                    i = a(8401),
                    l = a(5178),
                    c = a(1523);
                const _ = ({
                    parentId: e,
                    messageHidden: t,
                    ignoreDiscount: a,
                    discountTooltipEnabled: n,
                    priceLabel: s,
                    priceSeparator: _,
                }) => {
                    const d = (0, l.t)().model,
                        m = d.demountKitsCount.get();
                    return r().createElement(
                        'div',
                        { id: `${e}-total-price`, className: c.Z.base },
                        r().createElement('div', { className: u()(c.Z.message, t && c.Z.message__hidden) }, s),
                        Boolean(m) &&
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(o.k, { value: m, size: 'large' }),
                                null != _ ? _ : r().createElement('div', { className: c.Z.plus }),
                            ),
                        r().createElement(i.t, {
                            ignoreDiscount: a,
                            tooltipEnabled: n,
                            bigSize: !0,
                            price: d.price.get(),
                            defPrice: d.defPrice.get(),
                            discount: d.discount.get(),
                            priceSeparator: null != _ ? _ : r().createElement('div', { className: c.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => u, o: () => s });
                var n = a(7363);
                const u = (0, n.createContext)(null),
                    s = () => {
                        const e = (0, n.useContext)(u);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => u, t: () => s });
                const n = (0, a(3215).q3)()(
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
                    u = n[0],
                    s = n[1];
            },
            9683: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => i });
                var n = a(6483),
                    u = a.n(n),
                    s = a(7363),
                    r = a.n(s);
                const o = {
                        base: 'DemountKit_base_b5',
                        icon: 'DemountKit_icon_27',
                        base__large: 'DemountKit_base__large_e1',
                        value: 'DemountKit_value_cd',
                    },
                    i = ({ value: e, size: t = 'small', className: a }) =>
                        0 === e
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: u()(o.base, o[`base__${t}`], a) },
                                  r().createElement('div', { className: o.value }, e),
                                  r().createElement('div', { className: o.icon }),
                              );
            },
            8750: (e, t, a) => {
                'use strict';
                a.d(t, { a: () => l, F: () => i });
                var n = a(7363),
                    u = a.n(n),
                    s = a(6483),
                    r = a.n(s);
                const o = {
                    base: 'ExtraImage_base_78',
                    base__medium: 'ExtraImage_base__medium_07',
                    base__big: 'ExtraImage_base__big_86',
                };
                let i;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.BIG = 'big'));
                })(i || (i = {}));
                const l = ({ type: e = i.SMALL, imageSource: t }) => {
                    const a = r()(o.base, e !== i.SMALL && o[`base__${e}`]),
                        s = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return u().createElement('div', { className: a, style: s });
                };
            },
            1363: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => _ });
                var n = a(6483),
                    u = a.n(n),
                    s = a(3649),
                    r = a(7363),
                    o = a.n(r),
                    i = a(5282);
                const l = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    _ = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: a,
                        classMix: n,
                        classColorMix: _,
                        linesShown: d,
                        withOffset: m = !0,
                    }) => {
                        const p = (0, s.z4)(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? o().createElement(
                                              'span',
                                              { key: t, className: u()(l, _) },
                                              e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                          )
                                        : e &&
                                          o().createElement(
                                              'span',
                                              { key: t, className: c },
                                              o().createElement(i.n, {
                                                  mediaSize: a,
                                                  blocks: (0, i.D)(e),
                                                  linesCount: d,
                                              }),
                                          ),
                                ),
                            E = (0, r.useMemo)(
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
                                                      { key: t, className: u()(l, _) },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : o().createElement('span', { key: t }, `${e} `),
                                        ),
                                [_, t],
                            );
                        return o().createElement(
                            'div',
                            { id: `${e}-details`, className: u()(l, n) },
                            m ? p : o().createElement(i.n, { mediaSize: a, blocks: E, linesCount: d }),
                        );
                    };
            },
            6391: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => i });
                var n = a(6483),
                    u = a.n(n),
                    s = a(7363),
                    r = a.n(s);
                const o = {
                        base: 'Location_base_44',
                        base__countFirst: 'Location_base__countFirst_60',
                        icon: 'Location_icon_7f',
                        base__storage: 'Location_base__storage_bf',
                        base__vehicle: 'Location_base__vehicle_a9',
                        count: 'Location_count_45',
                        count__zero: 'Location_count__zero_f5',
                    },
                    i = ({ countFirst: e = !1, location: t, count: a }) =>
                        r().createElement(
                            'div',
                            { className: u()(o.base, o[`base__${t}`], e && o.base__countFirst) },
                            r().createElement('div', { className: o.icon }),
                            r().createElement('div', { className: u()(o.count, 0 === a && o.count__zero) }, a),
                        );
            },
            8401: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => E });
                var n = a(6483),
                    u = a.n(n),
                    s = a(7405),
                    r = a(329),
                    o = a(7078),
                    i = a(5475),
                    l = a(9480),
                    c = a(7363),
                    _ = a.n(c);
                const d = 'Price_base_61',
                    m = 'Price_currency_ae',
                    p = 'Price_currency__discounted_a7',
                    E = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: a,
                        showZero: n = !1,
                        bigSize: E = !1,
                        ignoreDiscount: b = !1,
                        tooltipEnabled: g = !1,
                        className: h,
                        classNames: A,
                    }) => {
                        const v = (0, c.useMemo)(
                            () => ({ stock: null == A ? void 0 : A.discount }),
                            [null == A ? void 0 : A.discount],
                        );
                        return _().createElement(
                            'div',
                            { className: u()(d, h) },
                            l.UI(e, (e, d) => {
                                var h;
                                const C = null == (h = l.U2(t, d)) ? void 0 : h.value,
                                    f = !(b || ((D = e.value), (F = C), void 0 === F || D === F));
                                var D, F;
                                return (
                                    (n || Boolean(e.value)) &&
                                    _().createElement(
                                        c.Fragment,
                                        { key: `${e.value}-${e.name}-${e.isEnough}` },
                                        d > 0 && a,
                                        _().createElement(
                                            o.t,
                                            {
                                                args: {
                                                    tooltipId: i.e1,
                                                    currencyType: e.name,
                                                    price: e.value,
                                                    defPrice: C,
                                                },
                                                isEnabled: g && f,
                                            },
                                            _().createElement(
                                                'div',
                                                { className: u()(m, f && p, null == A ? void 0 : A.currency) },
                                                _().createElement(s.F, {
                                                    isDiscount: f,
                                                    size: E ? r.et.big : r.et.small,
                                                    type: e.name,
                                                    value: e.value,
                                                    isEnough: e.isEnough,
                                                    classNames: v,
                                                }),
                                            ),
                                        ),
                                    )
                                );
                            }),
                        );
                    };
            },
            9152: (e, t, a) => {
                'use strict';
                a.d(t, { Sf: () => E });
                var n = a(6483),
                    u = a.n(n),
                    s = a(8089),
                    r = a(4598),
                    o = a(3815),
                    i = a(8526),
                    l = a(5521),
                    c = a(7727),
                    _ = a(7363),
                    d = a.n(_),
                    m = a(1922);
                const p = {
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
                    E = ({
                        backgroundImage: e,
                        children: t,
                        panel: a,
                        button: n,
                        show: E = !0,
                        onAnimationDone: b = r.ZT,
                        type: g = 'setup',
                        onClose: h,
                        className: A,
                        closeButtonClassName: v,
                    }) => {
                        const C = (0, m.GS)(),
                            f = (0, _.useRef)(null),
                            D = (0, _.useRef)(!1);
                        ((0, i.gd)(l.n.ESCAPE, h),
                            (0, _.useEffect)(() => {
                                (E && (D.current = !0), D.current && (0, c.G)('cons_select_view'));
                            }, [E]));
                        const F = (0, o.z)(b);
                        return (
                            (0, _.useEffect)(() => {
                                const e = f.current;
                                if (e) {
                                    function t(e) {
                                        e.target === f.current && F();
                                    }
                                    return (
                                        e.addEventListener('animationend', t),
                                        () => {
                                            e.removeEventListener('animationend', t);
                                        }
                                    );
                                }
                            }, [F]),
                            d().createElement(
                                'div',
                                { className: u()(p.base, E && p.base__shown, p[`base__${g}`], A) },
                                e &&
                                    d().createElement('div', {
                                        className: p.back,
                                        style: { backgroundImage: `url(${e})` },
                                    }),
                                n,
                                d().createElement(
                                    'div',
                                    { className: u()(p.close, C && p[`close__${C}`], !E && p.close__hidden, v) },
                                    d().createElement(s.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: h,
                                    }),
                                ),
                                d().createElement(
                                    'div',
                                    {
                                        id: 'setup-content',
                                        ref: f,
                                        className: u()(
                                            p.content,
                                            p[`content__${g}`],
                                            !E && !D.current && p.content__invisible,
                                            p['content__' + (E ? 'shown' : 'hidden')],
                                        ),
                                    },
                                    t,
                                ),
                                a && d().createElement('div', { className: p.panel }, a),
                            )
                        );
                    };
            },
            5282: (e, t, a) => {
                'use strict';
                a.d(t, { n: () => E, D: () => p });
                var n = a(6483),
                    u = a.n(n),
                    s = a(1856),
                    r = a(3138),
                    o = a(9916),
                    i = a(7363),
                    l = a.n(i),
                    c = a(6605);
                const _ = 'ShortenedText_base_fe',
                    d = 'ShortenedText_base__shown_af';
                var m = a(7260);
                const p = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => l().createElement(m.B, { key: t, text: `${e} ` })),
                    E = ({ blocks: e, linesCount: t = 2, mediaSize: a }) => {
                        const n = (0, i.useState)(e),
                            m = n[0],
                            p = n[1],
                            E = (0, i.useState)({ width: 0, height: 0 }),
                            b = E[0],
                            g = E[1],
                            h = (0, i.useRef)(null),
                            A = (0, i.useRef)({ shortened: !1 }),
                            v = (0, i.useCallback)(() => {
                                (0, o.Eu)().then(() => {
                                    const e = (0, c.D)(h);
                                    if (e) {
                                        const a = Number(e.split('rem')[0]),
                                            n = h.current;
                                        if (n && isFinite(a)) {
                                            const e = r.O.view.remToPx(t * a);
                                            g({ height: e, width: n.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        ((0, i.useEffect)(() => {
                            if (e.length)
                                return (A.current.shortened && ((A.current.shortened = !1), p(e)), (0, s.v)(v));
                        }, [e, a, v]),
                            (0, i.useEffect)(() => {
                                if (b.height && !A.current.shortened) {
                                    const e = (0, c.M)(h, b.height);
                                    if (-1 !== e) {
                                        const t = m.slice(0, e);
                                        (t.push(l().createElement('span', { key: e }, '...')),
                                            p(t),
                                            (A.current.shortened = !0));
                                    }
                                }
                            }, [m, b, a]));
                        const C = (0, i.useMemo)(() => (b.height ? { maxHeight: `${b.height}rem` } : {}), [b.height]);
                        return l().createElement('div', { ref: h, className: u()(_, b.height && d), style: C }, m);
                    };
            },
            6605: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => n, M: () => s });
                const n = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    u = (e, t) => e.getBoundingClientRect().top >= t,
                    s = (e, t) => {
                        const a = e.current;
                        if (a) {
                            const e = a.getBoundingClientRect(),
                                n = e.top + t,
                                s = Array.from(a.children);
                            if (s.length) {
                                const t = ((e, t) => {
                                    const a = e.length - 1;
                                    if (!u(e[a], t)) return -1;
                                    let n = 0,
                                        s = a - 1,
                                        r = !1;
                                    for (; s - n > 1; ) {
                                        const a = n + Math.floor(0.5 * (s - n + 1));
                                        ((r = u(e[a], t)), r ? (s = a) : (n = a));
                                    }
                                    return r || u(e[s], t) ? n : s;
                                })(s, n);
                                if (t > 0) {
                                    const a = s[t].getBoundingClientRect();
                                    return e.right - a.right < 16 ? t : t + 1;
                                }
                            }
                        }
                        return -1;
                    };
            },
            2094: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => y });
                var n = a(6483),
                    u = a.n(n),
                    s = a(8526),
                    r = a(5521),
                    o = a(7727),
                    i = a(7363),
                    l = a.n(i),
                    c = a(3978);
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
                        availableMaximum: a,
                        maximum: n,
                        picker: s,
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
                            { className: u()(_.progressBar, _.base, _[`base__${e}`]), style: i },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (a / n) * 100 + '%' } },
                                !r && l().createElement('div', { className: u()(_.glow, _.glow__right) }),
                            ),
                            l().createElement(
                                'div',
                                { className: _.line, style: { width: (t / n) * 100 + '%' } },
                                l().createElement('div', { className: _.pattern }),
                                l().createElement('div', { className: _.gradient }),
                                s && l().createElement('div', { className: _.picker }, s),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    E = 'SlideControl_image_61',
                    b = 'SlideControl_image__hover_eb',
                    g = 'SlideControl_image__active_70',
                    h = ({ parentId: e, isActive: t, isHovered: a }) => {
                        const n = u()(E, a && b, t && g);
                        return l().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            l().createElement('div', { className: n }),
                        );
                    },
                    A = 'Slider_base_2c',
                    v = 'Slider_slideArea_dd',
                    C = 'Slider_editor_5c',
                    f = 'Slider_editor__minus_e1',
                    D = 'Slider_editor__plus_b5',
                    F = {
                        base: 'StepEditor_base_f5',
                        base__enabled: 'StepEditor_base__enabled_f4',
                        base__minusOff: 'StepEditor_base__minusOff_19',
                        base__minusOn: 'StepEditor_base__minusOn_9c',
                        base__plusOff: 'StepEditor_base__plusOff_af',
                        base__plusOn: 'StepEditor_base__plusOn_71',
                    },
                    B = ({ parentId: e, type: t, isEnabled: a, onClick: n }) => {
                        const s = u()(F.base, a && F.base__enabled, F[`base__${t}${a ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: s, onClick: n });
                    },
                    y = ({
                        parentId: e,
                        currentValue: t,
                        maximum: a,
                        sliderMaximum: n,
                        sliderMinimum: _ = 0,
                        isDisabled: d = !1,
                        onUpdates: p,
                        withStepEditors: E = !0,
                        stepCount: b = 1,
                    }) => {
                        const g = (0, i.useRef)(null),
                            F = (0, i.useRef)({ down: !1, move: !1, over: !1 }),
                            y = (0, i.useRef)({ currentValue: t, maximum: a, sliderMaximum: n, sliderMinimum: _ }),
                            w = (0, i.useState)(t),
                            S = w[0],
                            k = w[1],
                            T = (0, i.useState)(!1),
                            x = T[0],
                            N = T[1],
                            L = (0, i.useState)(!1),
                            R = L[0],
                            M = L[1],
                            I = (0, i.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        a = y.current.currentValue;
                                    if (b > 1) {
                                        t *= b;
                                        const e = a % b;
                                        t < 0 && e ? (a -= e) : (a += t - e);
                                    } else a += t;
                                    return a;
                                },
                                [b],
                            ),
                            O = (0, i.useCallback)(
                                (e, t) => {
                                    if (!g.current) return 0;
                                    const a = g.current.getBoundingClientRect(),
                                        n = y.current.maximum,
                                        u = a.width / n,
                                        s = e - a.left,
                                        r = Math.floor(u > 0 ? s / u : s);
                                    if (r > n) return n;
                                    if (r <= 0) return 0;
                                    if (b > 1) {
                                        let e = r - (r % b);
                                        const a = r - e;
                                        return (
                                            a > 0 && ((t && r > y.current.currentValue) || a > 0.5 * b) && (e += b),
                                            e
                                        );
                                    }
                                    return r;
                                },
                                [b],
                            ),
                            P = (0, i.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        a = t.sliderMaximum,
                                        n = t.sliderMinimum;
                                    (e < n ? (e = n) : e > a && (e = a),
                                        y.current.currentValue !== e &&
                                            (k(e), (y.current.currentValue = e), p && p(e)));
                                },
                                [p],
                            ),
                            $ = t < n,
                            H = t > 0,
                            z = (0, i.useCallback)(() => {
                                if ($ && F.current.over) {
                                    const e = I(!0);
                                    P(e);
                                }
                            }, [$, I, P]),
                            j = (0, i.useCallback)(() => {
                                if (H && F.current.over) {
                                    const e = I(!1);
                                    P(e);
                                }
                            }, [H, I, P]),
                            W = (0, i.useCallback)(() => {
                                ((F.current.down = !1), M(!1));
                            }, []),
                            G = (0, i.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && F.current.down) {
                                        F.current.move = !0;
                                        const t = O(e.clientX);
                                        P(t);
                                    } else W();
                                },
                                [W, O, P],
                            );
                        ((0, s.gd)(r.n.ARROW_UP, z, !1, !0),
                            (0, s.gd)(r.n.ARROW_RIGHT, z, !1, !0),
                            (0, s.gd)(r.n.ARROW_DOWN, j, !1, !0),
                            (0, s.gd)(r.n.ARROW_LEFT, j, !1, !0),
                            (0, i.useEffect)(() => {
                                y.current.maximum = a;
                            }, [a]),
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
                                ((y.current.sliderMaximum = n), (y.current.sliderMinimum = _));
                            }, [n, _]),
                            (0, i.useEffect)(() => {
                                t !== y.current.currentValue && ((y.current.currentValue = t), k(t));
                            }, [t]));
                        const Z = (0, i.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((F.current.down = !0), M(!0));
                                },
                                [d],
                            ),
                            V = (0, i.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = O(e.clientX, !F.current.move),
                                        a = y.current,
                                        n = a.currentValue,
                                        u = a.sliderMaximum,
                                        s = a.sliderMinimum;
                                    (P(t), (0, c.u)(n, t, u, s), (F.current.move = !1));
                                },
                                [O, d, P],
                            ),
                            U = (0, i.useCallback)(() => {
                                ((F.current.over = !0), N(!0), (0, o.G)('highlight'));
                            }, []),
                            q = (0, i.useCallback)(() => {
                                ((F.current.over = !1), N(!1));
                            }, []),
                            K = (0, i.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        a = t.currentValue,
                                        n = t.sliderMaximum,
                                        u = t.sliderMinimum,
                                        s = I(e.deltaY > 0);
                                    (P(s), (0, c.u)(a, s, n, u));
                                },
                                [I, P],
                            );
                        return l().createElement(
                            'div',
                            { ref: g, onMouseEnter: U, onMouseLeave: q, onWheel: K, className: A },
                            E &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: u()(C, f) },
                                        l().createElement(B, { parentId: e, type: 'minus', isEnabled: H, onClick: j }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: u()(C, D) },
                                        l().createElement(B, { parentId: e, type: 'plus', isEnabled: $, onClick: z }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: V, onMouseDown: Z, className: v },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: a,
                                    value: S,
                                    availableMaximum: n,
                                    picker: l().createElement(h, { parentId: e, isActive: R, isHovered: x }),
                                }),
                            ),
                        );
                    };
            },
            4814: (e, t, a) => {
                'use strict';
                a.d(t, { G: () => E });
                var n = a(9480),
                    u = a(7363),
                    s = a.n(u),
                    r = a(1922),
                    o = a(6483),
                    i = a.n(o),
                    l = a(3457),
                    c = a(7078);
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
                        isSpecializationActive: a = !0,
                        isDynamic: n,
                        mediaSize: o,
                        isClickable: d,
                        onSpecializationClick: m,
                        index: p,
                    }) => {
                        const E = o !== r.cJ.None,
                            b = (0, u.useCallback)(() => {
                                d && a && m && m(p);
                            }, [p, d, a, m]),
                            g = (0, u.useMemo)(() => {
                                let a = '';
                                E && (a = (o === r.cJ.Large || o === r.cJ.Huge ? r.cJ.Large : r.cJ.Medium) + '_');
                                const n = `${a}${e}_${t ? 'on' : 'off'}`,
                                    u = R.images.gui.maps.icons.specialization.$dyn(n);
                                return u && { backgroundImage: `url(${u})` };
                            }, [e, t, o, E]),
                            h = (0, u.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!g) return null;
                        const A = i()(
                                `specialization-${e}`,
                                _.base,
                                E && _[`base__${o}`],
                                a && _.base__setup,
                                t && _.base__correct,
                            ),
                            v = i()(_.icon, E && _[`icon__${o}`]),
                            C = E ? '' : _.specializationWrapper,
                            f = s().createElement(
                                'div',
                                { key: e, className: A },
                                s().createElement('div', { className: _.glow }),
                                s().createElement('div', { className: v, style: g }),
                            );
                        return s().createElement(
                            c.t,
                            { args: h },
                            d && a
                                ? s().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: b,
                                      },
                                      f,
                                  )
                                : s().createElement('div', { className: C }, f),
                        );
                    },
                    m = 'Specializations_base_ab';
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const E = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: a,
                    mediaSize: u = r.cJ.None,
                    activeSpecsMask: o,
                    onSpecializationClick: i,
                }) =>
                    e.length
                        ? s().createElement(
                              'div',
                              { className: m, key: o },
                              n.UI(e, (e, n) =>
                                  s().createElement(
                                      d,
                                      p({ index: n, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: a,
                                          mediaSize: u,
                                          onSpecializationClick: i,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            5096: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => _ });
                var n = a(6483),
                    u = a.n(n),
                    s = a(3403),
                    r = a(7363),
                    o = a.n(r),
                    i = a(1922),
                    l = a(3028);
                const c = {
                        base: 'WeaponOccupancy_base_19',
                        base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                        tip: 'WeaponOccupancy_tip_18',
                        occupancy: 'WeaponOccupancy_occupancy_6e',
                        occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                        occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                        occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                    },
                    _ = (0, s.Pi)(({ isDetailed: e = !1, isShortened: t = !1 }) => {
                        const a = (0, i.GS)(),
                            n = (0, l.t)().model.shellsSetup.get(),
                            s = n.installedCount,
                            r = n.maxCount,
                            _ = s === r,
                            d = R.strings.tank_setup.shells,
                            m = _ ? d.ammunitionFull() : d.ammunitionIncomplete();
                        return o().createElement(
                            'div',
                            { className: u()(c.base, !_ && c.base__incomplete) },
                            !t && o().createElement('div', { className: c.tip }, m),
                            e
                                ? `${s}/${r}`
                                : o().createElement(
                                      'div',
                                      {
                                          className: u()(
                                              c.occupancy,
                                              !_ && c.occupancy__incomplete,
                                              c[`occupancy__${a}`],
                                          ),
                                      },
                                      `${s}/${r}`,
                                  ),
                        );
                    });
            },
            3978: (e, t, a) => {
                'use strict';
                a.d(t, { d: () => u, u: () => s });
                var n = a(7727);
                const u = (e, t) => {
                        const a = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, n.G)(a + '_' + e) : (0, n.G)(a);
                    },
                    s = (e, t, a, u) => {
                        t > a ||
                            t < u ||
                            (t > e ? (0, n.G)('cons_ammo_roll_plus') : t < e && (0, n.G)('cons_ammo_roll_minus'));
                    };
            },
            5475: (e, t, a) => {
                'use strict';
                a.d(t, { e1: () => n });
                const n = 'priceDiscount';
            },
            5344: (e, t, a) => {
                'use strict';
                let n;
                (a.d(t, { d: () => n }),
                    (function (e) {
                        ((e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary'));
                    })(n || (n = {})));
            },
            7383: (e, t, a) => {
                'use strict';
                a.d(t, {
                    $4: () => _,
                    G$: () => r,
                    S: () => d,
                    YN: () => o,
                    YR: () => i,
                    g9: () => u,
                    k4: () => l,
                    mH: () => s,
                    pi: () => m,
                    qZ: () => c,
                    zn: () => n,
                });
                const n = 'optDevices',
                    u = 'shells',
                    s = 'consumables',
                    r = 'battleBoosters',
                    o = 'battleAbilities',
                    i = 'apply',
                    l = 'applyVehicle',
                    c = 'applyType',
                    _ = 'equipCoinInfo',
                    d = 'simple',
                    m = 'modernized';
            },
            6880: (e, t, a) => {
                'use strict';
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
            4382: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
            8460: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
            5287: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            7476: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
                };
            },
            8852: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
            1960: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
            8529: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
                    base: 'Animation_base_ab',
                    base__withAnimation: 'Animation_base__withAnimation_41',
                    'action-show': 'Animation_action-show_f8',
                    base__enter: 'Animation_base__enter_1e',
                    base__exit: 'Animation_base__exit_88',
                    'action-hide': 'Animation_action-hide_44',
                };
            },
            628: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
            2527: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = { base: 'ConfirmButton_base_75' };
            },
            8099: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = { base: 'Controls_base_d3', button: 'Controls_button_f8' };
            },
            1523: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](a, a.exports, __webpack_require__), a.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, n) => {
            if (!t) {
                var u = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, a, n] = deferred[i], s = !0, r = 0; r < t.length; r++)
                        (!1 & n || u >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((s = !1), n < u && (u = n));
                    if (s) {
                        deferred.splice(i--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, a, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 70),
        (() => {
            var e = {
                70: 0,
                26: 0,
                301: 0,
                826: 0,
                225: 0,
                130: 0,
                418: 0,
                376: 0,
                745: 0,
                490: 0,
                62: 0,
                884: 0,
                723: 0,
                553: 0,
            };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        u,
                        [s, r, o] = a,
                        i = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(a); i < s.length; i++)
                        ((u = s[i]), __webpack_require__.o(e, u) && e[u] && e[u][0](), (e[u] = 0));
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(9493));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
