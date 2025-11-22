(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    s = u(7363),
                    o = u.n(s),
                    i = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    disabled: u,
                    mixClass: n,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: p,
                    onClick: E,
                    isFocused: g = !1,
                    type: b = l.L.primary,
                    soundHover: h = 'highlight',
                    soundClick: A = 'play',
                }) => {
                    const C = (0, s.useRef)(null),
                        v = (0, s.useState)(g),
                        f = v[0],
                        D = v[1],
                        F = (0, s.useState)(!1),
                        B = F[0],
                        y = F[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                f && null !== C.current && !C.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [f]),
                        (0, s.useEffect)(() => {
                            D(g);
                        }, [g]),
                        o().createElement(
                            'div',
                            {
                                ref: C,
                                className: a()(
                                    i.Z.base,
                                    i.Z[`base__${b}`],
                                    u && i.Z.base__disabled,
                                    t && i.Z[`base__${t}`],
                                    f && i.Z.base__focus,
                                    B && i.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    u || (null !== h && (0, r.G)(h), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    u || (m && m(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    u ||
                                        (null !== A && (0, r.G)(A),
                                        d && d(e),
                                        g && (u || (C.current && (C.current.focus(), D(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    u || (p && p(e), y(!1));
                                },
                                onClick: function (e) {
                                    u || (E && E(e));
                                },
                            },
                            b !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: a()(i.Z.state, i.Z.state__default) },
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
            2106: (e, t, u) => {
                'use strict';
                let n, a;
                (u.d(t, { L: () => n, q: () => a }),
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
                    })(a || (a = {})));
            },
            2262: (e, t, u) => {
                'use strict';
                u.d(t, { XZ: () => m });
                var n = u(7363),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    o = u(7727),
                    i = u(1641),
                    l = u(8844),
                    c = u(4382);
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
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.id,
                        u = e.isChecked,
                        r = void 0 !== u && u,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        E = e.isAlert,
                        g = void 0 !== E && E,
                        b = e.size,
                        h = void 0 === b ? l.yB.medium : b,
                        A = e.type,
                        C = void 0 === A ? l.Rh.primary : A,
                        v = e.soundHover,
                        f = void 0 === v ? 'highlight' : v,
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
                        O = e.children,
                        M = e.alignment,
                        I = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
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
                        U = (0, n.useCallback)(
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
                        Z = (0, n.useCallback)(
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
                        X = a().createElement(
                            'div',
                            { className: c.Z.label },
                            a().createElement(
                                'div',
                                { className: s()(c.Z.labelContent, 's-labelContent'), style: R },
                                L || O,
                            ),
                        );
                    return a().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: s()(c.Z.base, c.Z[`base__${h}`], c.Z[`base__${C}`], {
                                    [c.Z.base__checked]: r,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: $,
                                    [c.Z.base__alert]: g,
                                    [c.Z.base__center]: M === l.N3.Center,
                                    [c.Z.base__bottom]: M === l.N3.Bottom,
                                }),
                                onClick: W,
                                onMouseEnter: V,
                                onMouseLeave: Z,
                                onMouseDown: G,
                                onMouseUp: U,
                                onFocus: q,
                                onBlur: K,
                            },
                            I,
                        ),
                        a().createElement(
                            'div',
                            { className: c.Z.input },
                            a().createElement('div', { className: c.Z.alertOverlay }),
                            a().createElement('div', { className: c.Z.inputHoverOverlay }),
                            a().createElement('div', { className: c.Z.highlight }),
                        ),
                        a().createElement('div', { className: c.Z.checkmark }),
                        ((L || O) && X) || null,
                    );
                };
            },
            8844: (e, t, u) => {
                'use strict';
                let n, a, r;
                (u.d(t, { N3: () => r, Rh: () => a, yB: () => n }),
                    (function (e) {
                        ((e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(r || (r = {})));
            },
            7405: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(2372),
                    s = u(7363),
                    o = u.n(s),
                    i = u(8460),
                    l = u(329);
                const c = (0, s.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: u,
                        type: n,
                        value: s,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: p,
                        classNames: E,
                    }) =>
                        o().createElement(
                            'span',
                            { className: a()(i.Z.base, i.Z[`base__${u}`], p) },
                            o().createElement(
                                'span',
                                {
                                    className: a()(
                                        i.Z.value,
                                        i.Z[`value__${n}`],
                                        !d && i.Z.value__notEnough,
                                        null == E ? void 0 : E.value,
                                    ),
                                },
                                _ && s > 0 && '+',
                                o().createElement(r.A, { value: s, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: a()(i.Z.icon, i.Z[`icon__${n}-${u}`], null == E ? void 0 : E.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: a()(
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
            329: (e, t, u) => {
                'use strict';
                let n, a, r;
                (u.d(t, { V2: () => a, et: () => n, we: () => r }),
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
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(r || (r = {})));
            },
            2372: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => a });
                var n = u(9916);
                const a = ({ value: e, format: t = 'integral' }) => {
                    const u = (function (e) {
                            return 'gold' === e ? n.B3.GOLD : n.B3.INTEGRAL;
                        })(t),
                        a = n.Z5.getNumberFormat(e, u);
                    return void 0 !== e && void 0 !== a ? a : null;
                };
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => l });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3649),
                    s = u(7363),
                    o = u.n(s),
                    i = u(5287);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: u,
                    alignment: n = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, r.WU)(t, e) : t;
                    return o().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            o().createElement(
                                'div',
                                { className: a()(i.Z.base, u), key: `${t}-${l}` },
                                (0, r.Uw)(t, n, e).map((e, t) =>
                                    o().createElement(s.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Q: () => o, Y: () => l });
                var n = u(3138),
                    a = u(7363),
                    r = u(1043),
                    s = u(5262);
                function o(e = n.O.client.getSize('rem')) {
                    const t = e.width,
                        u = e.height;
                    return Object.assign({ width: t, height: u }, (0, s.T)(t, u, r.j));
                }
                const i = o(),
                    l = (0, a.createContext)(i);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                var n = u(3138),
                    a = u(7363),
                    r = u.n(a),
                    s = u(3495);
                const o = ({ children: e }) => {
                    const t = (0, a.useState)(s.Q),
                        u = t[0],
                        o = t[1],
                        i = (0, a.useState)(!1),
                        l = i[0],
                        c = i[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function e() {
                                o((e) => {
                                    const t = n.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : (0, s.Q)(t);
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
                        r().createElement(s.Y.Provider, { value: u }, l && e)
                    );
                };
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    a = u(7382),
                    r = u(3495);
                const s = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, s);
                    const o = (0, n.useContext)(r.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        _ = o.small,
                        d = o.extraSmall,
                        m = o.extraLargeWidth,
                        p = o.largeWidth,
                        E = o.mediumWidth,
                        g = o.smallWidth,
                        b = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        A = o.largeHeight,
                        C = o.mediumHeight,
                        v = o.smallHeight,
                        f = o.extraSmallHeight,
                        D = { extraLarge: h, large: A, medium: C, small: v, extraSmall: f };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && _) return t;
                        if (u.extraSmall && d) return t;
                    } else {
                        if (u.extraLargeWidth && m) return (0, a.H)(t, u, D);
                        if (u.largeWidth && p) return (0, a.H)(t, u, D);
                        if (u.mediumWidth && E) return (0, a.H)(t, u, D);
                        if (u.smallWidth && g) return (0, a.H)(t, u, D);
                        if (u.extraSmallWidth && b) return (0, a.H)(t, u, D);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && h) return t;
                            if (u.largeHeight && A) return t;
                            if (u.mediumHeight && C) return t;
                            if (u.smallHeight && v) return t;
                            if (u.extraSmallHeight && f) return t;
                        }
                    }
                    return null;
                });
            },
            7382: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => n });
                const n = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, u) => {
                'use strict';
                u.d(t, { YN: () => a.Y, ZN: () => n.Z });
                u(6010);
                var n = u(1039),
                    a = u(3495);
            },
            1043: (e, t, u) => {
                'use strict';
                u.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                'use strict';
                var n;
                function a(e, t, u) {
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
                        })(e, u),
                        a = (function (e, t) {
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
                        })(t, u),
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
                    };
                }
                (u.d(t, { T: () => a, u: () => n }),
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
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => i });
                var n = u(7363),
                    a = u.n(n),
                    r = u(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, s);
                    return a().createElement(
                        r.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    a = u(7363),
                    r = u.n(a);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, s);
                        const p = (0, a.useMemo)(() => {
                            const e = Object.assign({}, d, { body: u, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, u, l, c, d]);
                        return r().createElement(
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
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
                var n = u(7902),
                    a = u(9916),
                    r = u(7363);
                const s = [
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
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const i = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            g = void 0 !== E && E,
                            b = e.decoratorId,
                            h = void 0 === b ? 0 : b,
                            A = e.isEnabled,
                            C = void 0 === A || A,
                            v = e.targetId,
                            f = void 0 === v ? 0 : v,
                            D = e.onShow,
                            F = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, s);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => f || (0, n.F)().resId, [f]),
                            S = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (i(u, h, { isMouseEvent: !0, on: !0, arguments: o(a) }, w),
                                    D && D(),
                                    (y.current.isVisible = !0));
                            }, [u, h, a, w, D]),
                            k = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        i(u, h, { on: !1 }, w),
                                        y.current.isVisible && F && F(),
                                        (y.current.isVisible = !1));
                                }
                            }, [u, h, w, F]),
                            T = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === C && k();
                            }, [C, k]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        (window.removeEventListener('mouseleave', k), k());
                                    }
                                ),
                                [k],
                            ));
                        return C
                            ? (0, r.cloneElement)(
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
                                              (!1 === g && k(), null == d || d(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === g && k(), null == _ || _(t), null == e || e(t));
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
            1856: (e, t, u) => {
                'use strict';
                u.d(t, { v: () => n });
                const n = (e) => {
                    let t,
                        u = null;
                    return (
                        (u = requestAnimationFrame(() => {
                            u = requestAnimationFrame(() => {
                                ((u = null), (t = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                        }
                    );
                };
            },
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => o });
                var n = u(3138);
                function a(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return r(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: u = s, context: r = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = o.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            a = r.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, a);
                    };
                    return {
                        subscribe: (u, a) => {
                            const s = 'string' == typeof a ? `${r}.${a}` : r,
                                i = n.O.view.addModelObserver(s, t, !0);
                            return (o.set(i, u), e && u(l(a)), i);
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const u = l(t);
                            return (...t) => {
                                u(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, u = a(o.keys()); !(e = u()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q3: () => i });
                var n = u(4598),
                    a = u(9174),
                    r = u(7363),
                    s = u.n(r),
                    o = u(8246);
                const i = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, r.useRef)([]),
                                m = (u, r, s) => {
                                    var i;
                                    const l = o.U(r),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === u ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        p = e({
                                            mode: u,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = _(e),
                                                        r = a.LO.box(t, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const r = null != t ? t : _(e),
                                                        s = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : _(e),
                                                        s = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = _(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            s = Object.entries(r),
                                                            o = s.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([t, u]) => {
                                                                            o[u].set(e[t]);
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
                                        E = { mode: u, model: p, externalModel: c, cleanup: m };
                                    return {
                                        model: p,
                                        controls: 'mocks' === u && s ? s.controls(E) : t(E),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                p = (0, r.useRef)(!1),
                                E = (0, r.useState)(i),
                                g = E[0],
                                b = E[1],
                                h = (0, r.useState)(() => m(i, l, _)),
                                A = h[0],
                                C = h[1];
                            return (
                                (0, r.useEffect)(() => {
                                    p.current ? C(m(g, l, _)) : (p.current = !0);
                                }, [_, g, l]),
                                (0, r.useEffect)(() => {
                                    b(i);
                                }, [i]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (A.externalModel.dispose(), d.current.forEach((e) => e()));
                                    },
                                    [A],
                                ),
                                s().createElement(u.Provider, { value: A }, c)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, { mouse: () => c, off: () => i, on: () => o, onResize: () => r, onScaleUpdated: () => s }));
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        s = l[t]((e) => u([e, 'outside']));
                                    function o(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
                        },
                        enableOutside() {
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = u(527),
                    a = u(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => s });
                var n = u(5959),
                    a = u(7698),
                    r = u(514);
                const s = { view: u(7641), client: n, sound: r.ZP, intl: a.N };
            },
            7698: (e, t, u) => {
                'use strict';
                u.d(t, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => s });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    s = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var n = u(2472);
                const a = {
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
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => i,
                        arabic2roman: () => w,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => k,
                        enableFullScreenModeSupported: () => N,
                        events: () => s.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => B,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => y,
                        getScale: () => b,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        initExternalPaddings: () => L,
                        isEventHandled: () => D,
                        isFocused: () => v,
                        pxToRem: () => h,
                        remToPx: () => A,
                        resize: () => p,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    }));
                var n = u(9690),
                    a = u(3722),
                    r = u(6112),
                    s = u(6538),
                    o = u(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function _(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function p(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: A(t.x), y: A(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function A(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
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
                const k = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function N() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            n = t.right,
                            a = t.bottom,
                            r = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? a : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                function n() {}
                u.d(t, { ZT: () => n, jv: () => r, yR: () => a });
                function a(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let u,
                        n = R.invalid('resId'),
                        a = '';
                    var r;
                    t &&
                        ((a = (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                        (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== u &&
                            window.subViews[u] &&
                            (n = window.subViews[u].id));
                    return { callerUrl: a, caller: u, stack: t, resId: n };
                };
            },
            3815: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => r });
                var n = u(7363);
                const a = [];
                function r(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), a)
                    );
                }
            },
            8526: (e, t, u) => {
                'use strict';
                u.d(t, { gd: () => o });
                var n = u(3138),
                    a = u(5521),
                    r = (u(9916), u(7363));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function o(e = a.n.NONE, t = s, u = !1, o = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== a.n.NONE)
                            return (
                                window.addEventListener('keydown', r, u),
                                () => {
                                    window.removeEventListener('keydown', r, u);
                                }
                            );
                        function r(a) {
                            if (a.keyCode === e) {
                                if (!o && n.O.view.isEventHandled()) return;
                                (n.O.view.setEventHandled(), t(a), u && a.stopPropagation());
                            }
                        }
                    }, [t, e, u, o]);
                }
            },
            5521: (e, t, u) => {
                'use strict';
                let n, a;
                (u.d(t, { n: () => n }),
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
                    })(a || (a = {})));
            },
            9480: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { G: () => o, U2: () => n, UI: () => s, dF: () => l, hX: () => i, u4: () => c });
                const a = n;
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function s(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let u = 0; u < e.length; u++) {
                        if (t(a(e, u), u, e)) return !0;
                    }
                    return !1;
                }
                function i(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const u = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const r = null == (n = e[a]) ? void 0 : n.value;
                        t(r, a, e) && u.push(r);
                    }
                    return u;
                }
                function l(e, t) {
                    for (let u = e.length - 1; u >= 0; u--) {
                        const n = r(e[u]);
                        if (t(n, u, e)) return n;
                    }
                }
                function c(e, t, u) {
                    if (Array.isArray(e)) return e.reduce(t, u);
                    let n = u;
                    for (let u = 0; u < e.length; u++) {
                        n = t(n, a(e, u), u, e);
                    }
                    return n;
                }
            },
            1641: (e, t, u) => {
                'use strict';
                let n;
                (u.d(t, { t: () => n }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(n || (n = {})));
            },
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { HG: () => o, cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) ((t += n[u]), (e -= a[u]));
                    return t;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (s ? `${e}` : r(e));
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                u.d(t, { $: () => a, G: () => n });
                const a = {
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
            3649: (e, t, u) => {
                'use strict';
                u.d(t, {
                    BN: () => s,
                    Eg: () => l,
                    Uw: () => g,
                    WU: () => r,
                    dL: () => b,
                    e: () => o,
                    v2: () => a,
                    z4: () => i,
                });
                var n = u(1281);
                let a;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(a || (a = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    c = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    _ = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    d = (e, t, u = a.left) => e.split(t).reduce(u === a.left ? c : _, []),
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
                    E = (e, t = a.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (p.includes(u)) return m(e);
                        if ('ja' === u) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => i(e));
                        }
                        return ((e, t = a.left) => {
                            let u = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = i(e);
                            return (d(r, /( )/, t).forEach((e) => (u = u.concat(d(e, n, a.left)))), u);
                        })(e, t);
                    },
                    g = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : E(e, t))),
                    b = (e) => r(R.strings.common.percentValue(), { value: e });
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(3138);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => r.Z,
                    B3: () => i,
                    Gr: () => l,
                    Z5: () => s.Z5,
                    B0: () => o,
                    c9: () => A,
                    ry: () => b,
                    Eu: () => h,
                });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
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
                        const u = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                const a = n;
                var r = u(1358);
                var s = u(8613);
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
                var d = u(5521),
                    m = u(3138);
                const p = ['args'];
                function E(e, t, u, n, a, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(n, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                        u = arguments;
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function s(e) {
                                            E(r, n, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            E(r, n, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
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
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, p);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    C = () => A(o.CLOSE),
                    v = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var f = u(7572);
                const D = a.instance,
                    F = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => A(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => A(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            A(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                _ = i.width,
                                d = i.height,
                                p = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            A(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: g(p),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => v(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, C);
                        },
                        handleViewEvent: A,
                        onBindingsReady: b,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            7260: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => c });
                var n = u(7363),
                    a = u.n(n),
                    r = u(280),
                    s = u(8852);
                const o = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    i = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, n.memo)(({ text: e, binding: t, classMix: u }) => {
                        const c = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            _ = (0, n.useMemo)(() => t || {}, [t]);
                        let d = o.exec(e),
                            m = e,
                            p = 0;
                        for (; d; ) {
                            const u = d[0],
                                n = i.exec(u),
                                E = l.exec(u),
                                g = d[1];
                            if (n && E) {
                                const e = n[0],
                                    o = e + p++ + e;
                                ((m = m.replace(u, `%(${o})`)),
                                    (_[o] = s.Z[e]
                                        ? a().createElement(
                                              'span',
                                              { className: s.Z[e] },
                                              a().createElement(r.z, { text: g, binding: t }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: c(e) },
                                              a().createElement(r.z, { text: g, binding: t }),
                                          )));
                            }
                            d = o.exec(e);
                        }
                        return a().createElement(r.z, { text: m, classMix: u, binding: _ });
                    });
            },
            1922: (e, t, u) => {
                'use strict';
                u.d(t, { Ar: () => _, GS: () => c, cJ: () => l });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7739),
                    s = u(7363),
                    o = u.n(s),
                    i = u(1960);
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
                        const e = (0, s.useContext)(r.YN);
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
                    _ = ({ header: e, content: t, aside: u, footer: n, compare: r = !1 }) => {
                        const s = c(),
                            l = a()(i.Z.base, s && i.Z[`base__${s}`], r && i.Z.base__compare),
                            _ = a()(i.Z.header, s && i.Z[`header__${s}`]),
                            d = a()(i.Z.main),
                            m = a()(i.Z.content);
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
                                u,
                            ),
                            n && o().createElement('div', { className: i.Z.footer }, n),
                        );
                    };
            },
            3522: (e, t, u) => {
                'use strict';
                u.d(t, { _: () => _ });
                var n = u(4598),
                    a = u(9480),
                    r = u(3946),
                    s = u(1922);
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
                        a.UI(e, (e) =>
                            Object.assign({}, e, {
                                price: Object.assign({}, e.price, {
                                    price: a.UI(e.price.price, (e) => Object.assign({}, e)),
                                    defPrice: a.UI(e.price.defPrice, (e) => Object.assign({}, e)),
                                    discount: a.UI(e.price.discount, (e) => Object.assign({}, e)),
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
                            u = (0, r.Om)(
                                () =>
                                    ((e) => {
                                        const t = c(e);
                                        return a.UI(t, (e) =>
                                            Object.assign({}, e, {
                                                bonuses: Object.assign({}, e.bonuses, {
                                                    items: a.UI(e.bonuses.items, (e) =>
                                                        Object.assign({}, e, {
                                                            values: a.UI(e.values, (e) => Object.assign({}, e)),
                                                        }),
                                                    ),
                                                }),
                                                specializations: Object.assign({}, e.specializations, {
                                                    specializations: a.UI(e.specializations.specializations, (e) =>
                                                        Object.assign({}, e),
                                                    ),
                                                }),
                                            }),
                                        );
                                    })(t.optDevices.slots.get()),
                                { equals: n.jv },
                            ),
                            o = (0, r.Om)(() => u().length),
                            _ = (0, r.Om)(
                                (e) => {
                                    const t = a.U2(u(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: n.jv },
                            ),
                            d = (0, r.Om)((e) => _(e).bonuses.items.length, { equals: n.jv }),
                            m = (0, r.Om)(
                                (e, t) => {
                                    const u = _(e),
                                        n = a.U2(u.bonuses.items, t);
                                    if (!n) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, n);
                                },
                                { equals: n.jv },
                            ),
                            p = (0, r.Om)((e) => {
                                const t = d(e);
                                return _(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            E = (0, r.Om)((e, t, u) => {
                                const n = d(e),
                                    a = p(e);
                                let r = a ? u - a : u,
                                    s = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!r) return null;
                                    ((s = n > 2 ? 1 : 2 === n ? (r > 2 ? 2 : 1) : r), (r -= s));
                                }
                                return s;
                            }),
                            g = (0, r.Om)(
                                (e, t) => {
                                    const u = m(e, t);
                                    return a.dF(u.values, ({ valueKey: e }) => e === u.localeName);
                                },
                                { equals: n.jv },
                            ),
                            b = (0, r.Om)(
                                (e, u) =>
                                    ((e, t, u) => {
                                        const n = u !== s.cJ.Tiny || t ? i : l,
                                            r = c(e),
                                            o = a.u4(
                                                r,
                                                (e, t) => {
                                                    const u = n.indexOf(t.itemName);
                                                    return ((e[-1 === u ? Math.max(e.length, l.length) : u] = t), e);
                                                },
                                                [],
                                            );
                                        return a.hX(o, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, u),
                                { equals: n.jv },
                            ),
                            h = (0, r.Om)((e, t) => b(e, t).length),
                            A = (0, r.Om)(
                                (e, t, u) => {
                                    const n = a.U2(b(t, u), e);
                                    if (!n) throw Error(`No consumable found with index: ${n}`);
                                    return Object.assign({}, n);
                                },
                                { equals: n.jv },
                            ),
                            C = (0, r.Om)(
                                () => {
                                    return ((e = t.boosters.slots.get()), c(e));
                                    var e;
                                },
                                { equals: n.jv },
                            ),
                            v = (0, r.Om)(() => C().length),
                            f = (0, r.Om)(
                                (e) => {
                                    const t = a.U2(C(), e);
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
                                    bonusValue: g,
                                },
                                consumables: { length: h, consumable: A },
                                boosters: { length: v, booster: f },
                            },
                        };
                    };
            },
            3028: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => c });
                var n = u(5344),
                    a = u(3215),
                    r = u(4598),
                    s = u(9480),
                    o = u(3946),
                    i = u(3522);
                const l = (0, a.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, i._)(e),
                                u = t.model,
                                a = t.computes,
                                l = e.object('tankSetup.shellsSetup'),
                                c = e.array('tankSetup.shellsSetup.slots'),
                                _ = e.object('ammunitionPanel'),
                                d = e.array('ammunitionPanel.sectionGroups'),
                                m = e.object('optionalDevicesAssistant'),
                                p = e.array('optionalDevicesAssistant.optionalDevicesAssistantPresets'),
                                E = e.object('optionalDevicesAssistant.selectedPreset'),
                                g = () =>
                                    s.UI(p.get(), (e) =>
                                        Object.assign({}, e, {
                                            optionalDevicesAssistantItems: s.UI(e.optionalDevicesAssistantItems, (e) =>
                                                Object.assign({}, e, { items: s.UI(e.items, r.yR) }),
                                            ),
                                        }),
                                    ),
                                b = (e) =>
                                    s.u4(
                                        p.get(),
                                        (t, u) => {
                                            if (u.presetType.mType === e) {
                                                const e = s.UI(u.optionalDevicesAssistantItems, (e) =>
                                                    Object.assign({}, e, { items: s.UI(e.items, r.yR) }),
                                                );
                                                t.push(...e);
                                            }
                                            return t;
                                        },
                                        [],
                                    ),
                                h = (0, o.Om)(() => b(0).sort((e, t) => t.popularity - e.popularity)),
                                A = (0, o.Om)(() => b(1).sort((e, t) => t.popularity - e.popularity)),
                                C = (0, o.Om)(
                                    (e) => {
                                        const t = s.U2(c.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: r.jv },
                                ),
                                v = (0, o.Om)(() => c.get().length),
                                f = (0, o.Om)(() => s.UI(c.get(), (e) => e.intCD), { equals: r.jv }),
                                D = (0, o.Om)((e) => C(e).specifications.length),
                                F = (0, o.Om)(
                                    (e, t) => {
                                        const u = C(e),
                                            n = s.U2(u.specifications, t);
                                        if (!n) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: r.jv },
                                ),
                                B = (0, o.Om)(
                                    (e, t) => {
                                        const u = C(e),
                                            n = s.U2(u.price.price, t);
                                        if (!n) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: r.jv },
                                ),
                                y = (0, o.Om)(
                                    (e, t) => {
                                        const u = C(e),
                                            n = s.U2(u.price.defPrice, t);
                                        if (!n) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: r.jv },
                                ),
                                w = (0, o.Om)((e) => C(e).price.price.length),
                                S = (0, o.Om)((e) => C(e).price.defPrice.length),
                                k = (0, o.Om)(() => {
                                    const e = _.get().selectedSlot,
                                        t = s.U2(d.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const u = s.U2(t.sections, 0);
                                    if (!u) throw Error('No section found');
                                    const n = s.U2(u.slots, e);
                                    if (!n) throw Error(`No slot found with index: ${e}`);
                                    const a = s.U2(n.specializations.specializations, 0);
                                    return null == a ? void 0 : a.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), u, {
                                shellsSetup: l,
                                shellsSlots: c,
                                ammunitionPanel: _,
                                sectionGroups: d,
                                optionalDevicesAssistant: m,
                                selectedPreset: E,
                                computes: Object.assign({}, a, {
                                    getOptionalDevicesAssistantItemsByType: b,
                                    getSortedCommonItems: h,
                                    getSortedLegendaryItems: A,
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
                                        const t = n.d.Common || n.d.Legendary;
                                        return null == (e = g().find((e) => e.presetType.mType === t))
                                            ? void 0
                                            : e.modeType;
                                    },
                                    shells: {
                                        length: v,
                                        shell: C,
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
            3047: (e, t, u) => {
                'use strict';
                var n = {};
                (u.r(n),
                    u.d(n, {
                        Area: () => zn,
                        Bar: () => Pn,
                        DefaultScroll: () => Hn,
                        Direction: () => fn,
                        defaultSettings: () => Dn,
                        useHorizontalScrollApi: () => Bn,
                    }));
                var a = {};
                (u.r(a), u.d(a, { Area: () => ra, Bar: () => ua, Default: () => aa, useVerticalScrollApi: () => jn }));
                var r = u(7739),
                    s = u(7363),
                    o = u.n(s),
                    i = u(6483),
                    l = u.n(i),
                    c = u(926),
                    _ = u.n(c),
                    d = u(1043);
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
                const g = () => {
                        const e = (0, s.useContext)(r.YN),
                            t = e.width,
                            u = e.height,
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
                            a = ((e) => {
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
                        return { mediaSize: n, mediaWidth: a, mediaHeight: o, remScreenWidth: t, remScreenHeight: u };
                    },
                    b = ['children', 'className'];
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
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
                    C = {
                        [E.ExtraSmall]: '',
                        [E.Small]: _().SMALL_HEIGHT,
                        [E.Medium]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT}`,
                        [E.Large]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT}`,
                        [E.ExtraLarge]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT} ${_().EXTRA_LARGE_HEIGHT}`,
                    },
                    v = {
                        [m.ExtraSmall]: '',
                        [m.Small]: _().SMALL,
                        [m.Medium]: `${_().SMALL} ${_().MEDIUM}`,
                        [m.Large]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE}`,
                        [m.ExtraLarge]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE} ${_().EXTRA_LARGE}`,
                    },
                    f = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, b);
                        const a = g(),
                            r = a.mediaWidth,
                            s = a.mediaHeight,
                            i = a.mediaSize;
                        return o().createElement('div', h({ className: l()(u, A[r], C[s], v[i]) }, n), t);
                    },
                    D = ['children'];
                const F = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, D);
                    return o().createElement(r.ZN, null, o().createElement(f, u, t));
                };
                var B = u(1533),
                    y = u.n(B),
                    w = u(1856),
                    S = u(3403),
                    k = u(2189),
                    T = u(7383);
                const x = (0, s.createContext)(null),
                    N = () => {
                        const e = (0, s.useContext)(x);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var L = u(8175),
                    O = u(3755);
                const M = (e, t) => {
                    const u = [];
                    for (let n = 0; n < e; n++) u.push(t(n));
                    return u;
                };
                var I = u(1922);
                const P = 'select',
                    $ = 'undo',
                    H = 'cancel',
                    z = 'swap',
                    j = 'demount',
                    W = 'demount_from_setup',
                    G = 'demount_from_setups',
                    U = 'destroy',
                    V = 'upgrade',
                    Z = 'add_one';
                var q = u(1363);
                const K = (e) => {
                    const t = (0, s.useRef)(-1),
                        u = (0, s.useCallback)(
                            (u) => {
                                if (-1 === t.current) {
                                    const n = e(u);
                                    n &&
                                        (t.current = window.setTimeout(() => {
                                            t.current = -1;
                                        }, n));
                                }
                            },
                            [e],
                        );
                    return ((0, s.useEffect)(() => () => clearTimeout(t.current), []), u);
                };
                var X = u(8774);
                const Y = {
                        base: 'Actions_base_ea',
                        base__hidden: 'Actions_base__hidden_65',
                        base__shown: 'Actions_base__shown_9b',
                    },
                    J = (0, s.memo)(({ parentId: e, availableActions: t, onActionClick: u, isBuyMoreDisabled: n }) =>
                        o().createElement(
                            'div',
                            { className: l()(Y.base, Y['base__' + (t.length ? 'shown' : 'hidden')]) },
                            o().createElement(X.a, {
                                parentId: `${e}-add_one`,
                                actionType: Z,
                                onClick: u,
                                show: t.includes(Z),
                                disabled: n,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(X.a, {
                                parentId: `${e}-cancel`,
                                actionType: H,
                                onClick: u,
                                show: t.includes(H),
                            }),
                            o().createElement(X.a, {
                                parentId: `${e}-undo`,
                                actionType: $,
                                onClick: u,
                                show: t.includes($),
                            }),
                        ),
                    );
                var Q = u(1641),
                    ee = u(7727),
                    te = u(9916);
                const ue = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: n = 0,
                        args: a,
                        isEnabled: r = !0,
                        onMouseDown: o,
                    }) => {
                        const i = (0, s.useCallback)(() => {
                                ((0, te.c9)(te.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: a,
                                }),
                                    ee.$.playYes());
                            }, [a, t, u, n]),
                            l = (0, s.useCallback)(() => {
                                (0, te.c9)(te.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, n]),
                            c = (0, s.useCallback)(
                                (e) => {
                                    (o && o(e), ((e) => e.button === Q.t.RIGHT)(e) && i());
                                },
                                [o, i],
                            );
                        return (
                            (0, s.useEffect)(() => {
                                !1 === r && l();
                            }, [r, l]),
                            r ? (0, s.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    ne = ['children'];
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const re = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, ne);
                    return o().createElement(
                        ue,
                        ae({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var se = u(7902);
                const oe = [
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
                function ie(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const le = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: te.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    ce = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            r = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            E = e.isEnabled,
                            g = void 0 === E || E,
                            b = e.onShow,
                            h = e.onHide,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, oe);
                        const C = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, s.useMemo)(() => (0, se.F)(), []).resId,
                            f = (0, s.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (le(u, p, { isMouseEvent: !0, on: !0, arguments: ie(n) }, v),
                                    b && b(),
                                    (C.current.isVisible = !0));
                            }, [u, p, n, v, b]),
                            D = (0, s.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        le(u, p, { on: !1 }, v),
                                        C.current.isVisible && h && h(),
                                        (C.current.isVisible = !1));
                                }
                            }, [u, p, v, h]),
                            F = (0, s.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        ((0, s.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', F, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', F, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', D),
                                    () => {
                                        (window.removeEventListener('mouseleave', D), D());
                                    }
                                ),
                                [D],
                            ));
                        return g
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((B = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      a && a(e),
                                                      B && B(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (D(), r && r(t), e && e(t));
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
                    _e = ['children'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const me = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, _e);
                    return o().createElement(
                        ce,
                        de(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
                var pe = u(5282);
                const Ee = {
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
                    ge = 'DisabledAbilities_base_1d',
                    be = 'DisabledAbilities_glow_75',
                    he = 'DisabledAbilities_line_54',
                    Ae = ({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: l()(ge, e) },
                            o().createElement('div', { className: be }),
                            o().createElement('div', { className: he }),
                        );
                var Ce = u(2056);
                let ve;
                !(function (e) {
                    ((e.SimilarDeviceAlreadyInstalled = 'similar_device_already_installed'),
                        (e.UselessBattleBooster = 'useless_battle_booster'),
                        (e.UselessCrewSkillBattleBooster = 'useless_crew_skill_battle_booster'));
                })(ve || (ve = {}));
                const fe = 'Warning_base_4c',
                    De = 'Warning_glow_79',
                    Fe = 'Warning_line_df',
                    Be = 'Warning_icon_24',
                    ye = (e) => Object.values(ve).includes(e),
                    we = ({ parentId: e, reason: t, isCritical: u }) => {
                        const n = (0, s.useMemo)(() => ({ reason: t, isCritical: u }), [t, u]);
                        return o().createElement(
                            'div',
                            { id: e, className: fe },
                            o().createElement('div', { className: De }),
                            o().createElement('div', { className: Fe }),
                            o().createElement(
                                Ce.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: n,
                                    isEnabled: ye(t),
                                },
                                o().createElement('div', { className: Be }),
                            ),
                        );
                    },
                    Se = ({
                        parentId: e,
                        name: t,
                        tooltipArgs: u,
                        contextMenuArgs: n,
                        imageSource: a,
                        overlayType: r,
                        highlightType: i,
                        isModernized: c,
                        level: _,
                        isDisabled: d,
                        isCurrent: m,
                        isActive: p,
                        isLocked: E,
                        isAbilitiesCard: g = !1,
                        isClickable: b = !0,
                        details: h,
                        options: A,
                        actions: C,
                        specializations: v,
                        extraImages: f,
                        onSlotClick: D,
                        shouldHandleMouseOver: F,
                        category: B,
                        onTooltipShow: y,
                        onTooltipHide: w,
                        lockReason: S,
                    }) => {
                        const k = (0, I.GS)(),
                            T = (0, s.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            x = T[0],
                            N = T[1],
                            L = (0, s.useState)(!1),
                            O = L[0],
                            M = L[1],
                            P = (0, s.useState)(!1),
                            $ = P[0],
                            H = P[1],
                            z = (0, s.useCallback)(() => {
                                (!x.isActionsHovered && ee.$.playHighlight(),
                                    N({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    F && M(!0));
                            }, [x.isActionsHovered, F]),
                            j = (0, s.useCallback)(() => {
                                F && M(!1);
                            }, [F]),
                            W = (0, s.useCallback)(() => {
                                N({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            G = (0, s.useCallback)(() => {
                                N({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            U = b && (!d || g),
                            V = (0, s.useCallback)(() => {
                                U && D && (ee.$.playClick(), D());
                            }, [D, U]),
                            Z = x.isBaseHovered || x.isActionsHovered,
                            q = (0, s.useMemo)(() => {
                                let e = o().createElement(
                                    'div',
                                    {
                                        onMouseEnter: z,
                                        onMouseLeave: G,
                                        className: Ee.hover,
                                        onMouseDown: (e) => {
                                            0 === e.nativeEvent.button && (H(!0), V());
                                        },
                                        onMouseUp: (e) => {
                                            0 === e.nativeEvent.button && H(!1);
                                        },
                                    },
                                    d && g && o().createElement(Ae, { className: Ee.locked }),
                                );
                                return (
                                    u && (e = o().createElement(me, { args: u, onShow: y, onHide: w }, e)),
                                    n && (e = o().createElement(re, { args: n }, e)),
                                    e
                                );
                            }, [d, g, z, G, V, u, n, y, w, $]),
                            K = (0, s.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]),
                            X =
                                k === I.cJ.Large || k === I.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            Y = (0, s.useMemo)(() => {
                                let e;
                                return (
                                    r && (e = c ? X.$dyn(`${r}_${_}_overlay`) : X.$dyn(`${r}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [X, r, c, _]),
                            J = (0, s.useMemo)(() => {
                                let e;
                                return (i && (e = X.$dyn(`${i}_highlight`)), e && { backgroundImage: `url(${e})` });
                            }, [X, i]),
                            Q = (0, s.useMemo)(() => {
                                const e = (k === I.cJ.Large || k === I.cJ.Huge ? I.cJ.Large : I.cJ.Medium) + '_' + B,
                                    t = R.images.gui.maps.icons.specialization.$dyn(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [B, k]);
                        return o().createElement(
                            'div',
                            { className: Ee.base },
                            o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: l()(
                                        Ee.content,
                                        Ee[`content__${k}`],
                                        Z && b && !d && Ee.content__hovered,
                                        !Z && Ee.content__out,
                                        p && Ee.content__installed,
                                        m && Ee.content__current,
                                        d && Ee.content__disabled,
                                        !U && Ee.content__nonclickable,
                                    ),
                                    onMouseLeave: j,
                                },
                                J &&
                                    o().createElement(
                                        'div',
                                        { className: Ee.types },
                                        o().createElement('div', {
                                            className: l()(Ee.highlight, Ee[`highlight__${i}`]),
                                            style: J,
                                        }),
                                    ),
                                o().createElement('div', { className: Ee.image, style: K }, f),
                                d && o().createElement('div', { className: Ee.disabled }),
                                Q &&
                                    o().createElement('span', {
                                        className: l()(Ee.category, Ee[`category__${k}`]),
                                        style: Q,
                                    }),
                                Y &&
                                    o().createElement(
                                        'div',
                                        { className: Ee.types },
                                        o().createElement('div', {
                                            className: l()(Ee.overlay, Ee[`overlay__${r}`]),
                                            style: Y,
                                        }),
                                    ),
                                v && o().createElement('div', { className: Ee.specialization }, v),
                                o().createElement(
                                    'div',
                                    { className: l()(Ee.name, d && Ee.name__disabled) },
                                    o().createElement(pe.n, {
                                        key: t,
                                        mediaSize: k,
                                        linesCount: 3,
                                        blocks: (0, pe.D)(systemLocale.toUpperCase(t)),
                                    }),
                                ),
                                h && o().createElement('div', { className: Ee.details }, h),
                                o().createElement('div', { className: l()(Ee.options, d && Ee.options__disabled) }, A),
                                q,
                                o().createElement(
                                    'div',
                                    { onMouseEnter: W, onMouseLeave: G, className: Ee.actions },
                                    F && C
                                        ? (0, s.cloneElement)(C, Object.assign({}, C.props, { isMouseOverCard: O }))
                                        : C,
                                ),
                            ),
                            E &&
                                o().createElement(
                                    'div',
                                    { className: Ee.locked },
                                    o().createElement(we, { reason: S, isCritical: d, parentId: e }),
                                ),
                        );
                    };
                var ke = u(6391),
                    Te = u(8401);
                const xe = 'Availability_base_51',
                    Ne = () => o().createElement('div', { className: xe }),
                    Le = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    Re = o().memo(
                        ({ itemsInStorage: e, price: t, isMounted: u, possibleZeroCount: n, show: a = !0 }) => {
                            let r = null;
                            return (
                                (r = u
                                    ? o().createElement(Ne, null)
                                    : e || (n && 0 === e)
                                      ? o().createElement(ke.Y, { location: 'storage', count: e })
                                      : t && o().createElement(Te.t, t)),
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            Le.base,
                                            Le['base__' + (a ? 'shown' : 'hidden')],
                                            (u || e || (n && 0 === e)) && Le.base__visually,
                                        ),
                                    },
                                    r,
                                )
                            );
                        },
                    ),
                    Oe = 'Booster_base_e5',
                    Me = 'Booster_unit_5e',
                    Ie = (0, S.Pi)(({ isCurrent: e, compare: t, index: u }) => {
                        const n = (0, I.GS)(),
                            a = n === I.cJ.Large || n === I.cJ.Huge,
                            r = N(),
                            i = r.model,
                            l = r.controls,
                            c = i.computes.boosters.booster(u),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            E = c.isMountedMoreThanOne,
                            g = c.imageName,
                            b = c.itemsInStorage,
                            h = c.price,
                            A = c.intCD,
                            C = c.isDisabled,
                            v = c.overlayType,
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
                            O = (0, s.useMemo)(() => {
                                const e = [];
                                return (
                                    !C && x && (!t && y && e.push(Z), (!Boolean(b) && !D) || F ? e.push($) : e.push(H)),
                                    e
                                );
                            }, [C, x, t, y, b, D, F]),
                            M = (0, s.useCallback)(
                                (e) => (
                                    l.boosters.actSlot({ actionType: e, intCD: A, installedSlotId: d }),
                                    e === Z ? 1e3 : 120
                                ),
                                [l, A, d],
                            ),
                            z = K(M),
                            j = (0, s.useCallback)(() => {
                                O.includes($) ? z($) : O.includes(H) ? z(H) : z(P);
                            }, [O, z]),
                            W = (0, s.useMemo)(() => {
                                const e = { intCD: A, slotType: T.G$, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: E,
                                        isMounted: D,
                                        isDisabled: C,
                                    }),
                                ];
                            }, [A, d, m, p, D, E, C]),
                            G = W[0],
                            U = W[1],
                            V = (0, s.useMemo)(() => {
                                const e = a
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [a, g]);
                        return o().createElement(Se, {
                            parentId: L,
                            name: _,
                            tooltipArgs: G,
                            contextMenuArgs: U,
                            imageSource: V,
                            isClickable: !0,
                            isCurrent: e,
                            isActive: x,
                            isDisabled: C,
                            isLocked: f,
                            options: o().createElement(Re, {
                                isMounted: D || F,
                                itemsInStorage: b,
                                show: !O.length,
                                price: h,
                            }),
                            actions: o().createElement(J, {
                                parentId: L,
                                availableActions: O,
                                onActionClick: z,
                                isBuyMoreDisabled: w,
                            }),
                            details: o().createElement(q._, {
                                key: B,
                                parentId: L,
                                classMix: Oe,
                                mediaSize: n,
                                classColorMix: Me,
                                linesShown: a ? 4 : 3,
                                text: B,
                            }),
                            overlayType: v,
                            highlightType: S,
                            onSlotClick: j,
                            lockReason: k,
                        });
                    }),
                    Pe = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    $e = (0, S.Pi)(({ isCurrent: e, compare: t, index: u }) => {
                        const n = (0, I.GS)(),
                            a = n === I.cJ.Large || n === I.cJ.Huge,
                            r = N(),
                            i = r.model,
                            c = r.controls,
                            _ = i.computes.consumables.consumable(u, t, n),
                            d = _.name,
                            m = _.installedSlotId,
                            p = _.itemInstalledSetupIdx,
                            E = _.itemInstalledSetupSlotIdx,
                            g = _.isMountedMoreThanOne,
                            b = _.imageName,
                            h = _.itemsInStorage,
                            A = _.price,
                            C = _.intCD,
                            v = _.isDisabled,
                            f = _.overlayType,
                            D = _.isLocked,
                            F = _.isMounted,
                            B = _.isMountedInOtherSetup,
                            y = _.isBuiltIn,
                            w = _.description,
                            S = _.isBuyMoreDisabled,
                            k = _.lockReason,
                            x = m > -1,
                            L = `${C}-consumable`,
                            O = (0, s.useMemo)(() => {
                                const u = [];
                                return (
                                    !v &&
                                        x &&
                                        (!e && u.push(z),
                                        y || (!t && u.push(Z), (!Boolean(h) && !F) || B ? u.push($) : u.push(H))),
                                    u
                                );
                            }, [v, x, e, y, t, h, F, B]),
                            M = (0, s.useCallback)(
                                (e) => (
                                    c.consumables.actSlot({ actionType: e, intCD: C, installedSlotId: m }),
                                    e === Z ? 1e3 : 300
                                ),
                                [c, C, m],
                            ),
                            j = K(M),
                            W = (0, s.useCallback)(() => {
                                O.includes(z) ? j(z) : O.includes($) ? j($) : O.includes(H) ? j(H) : j(P);
                            }, [O, j]),
                            G = (0, s.useMemo)(() => {
                                const e = { intCD: C, slotType: T.mH, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: E,
                                        isMountedMoreThanOne: g,
                                        isMounted: F,
                                        isDisabled: v,
                                    }),
                                ];
                            }, [C, m, p, E, g, F, v]),
                            U = G[0],
                            V = G[1],
                            X = (0, s.useMemo)(() => {
                                const e = a
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(b)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(b);
                                return String(e);
                            }, [a, b]),
                            Y = (0, s.useMemo)(
                                () =>
                                    o().createElement(q._, {
                                        parentId: L,
                                        mediaSize: n,
                                        classMix: l()(Pe.base, n && Pe[`base__${n}`]),
                                        classColorMix: Pe.unit,
                                        linesShown: a ? 4 : 3,
                                        text: w,
                                    }),
                                [n, a, w, L],
                            );
                        return o().createElement(Se, {
                            parentId: L,
                            name: d,
                            tooltipArgs: U,
                            contextMenuArgs: V,
                            imageSource: X,
                            isCurrent: e,
                            isActive: x,
                            isDisabled: v,
                            isLocked: D,
                            isClickable: !y,
                            options: o().createElement(Re, {
                                price: A,
                                isMounted: F || B,
                                itemsInStorage: h,
                                show: !O.length,
                            }),
                            actions: o().createElement(J, {
                                parentId: L,
                                availableActions: O,
                                onActionClick: j,
                                isBuyMoreDisabled: S,
                            }),
                            details: Y,
                            overlayType: f,
                            onSlotClick: W,
                            lockReason: k,
                        });
                    });
                var He = u(4814);
                var ze = u(9480);
                const je = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    We = ({ values: e, localeName: t }) => {
                        const u = ze.hX(e, ({ valueKey: e }) => e === t).pop();
                        if (!u) return je;
                        const n = u.value,
                            a = 'mul' === u.valueType ? 100 * (n - 1) : n;
                        return { calcValue: a, isPositive: a > 0, valueKey: u.valueKey };
                    },
                    Ge = 'Bonus_base_aa',
                    Ue = 'Bonus_bonus_49',
                    Ve = 'Bonus_text_48',
                    Ze = 'Unit_base_15',
                    qe = 'Unit_base__special_37',
                    Ke = 'Unit_glow_38',
                    Xe = R.strings.tank_setup.kpi.bonus.valueTypes,
                    Ye = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    Je = (0, S.Pi)(({ deviceID: e, bonusID: t }) => {
                        const u = N().model,
                            n = u.computes.optDevices.device(e).activeSpecsMask,
                            a = u.computes.optDevices.bonusValue(e, t);
                        if (!a) return null;
                        const r = a.valueType,
                            s = a.value,
                            i = a.valueKey,
                            c = Boolean(n),
                            _ = 'mul' === r ? 100 * (s - 1) : s,
                            d = _ > 0 ? '+' : '',
                            m = te.Z5.getRealFormat(_, te.Gr.WO_ZERO_DIGITS),
                            p = Xe.$dyn(i),
                            E = `${m}${p ? ` ${p}` : Ye}`;
                        return o().createElement(
                            'div',
                            { className: l()(Ze, c && qe) },
                            o().createElement('span', null, o().createElement('span', { className: Ke }), d + E),
                        );
                    }),
                    Qe = (0, S.Pi)(({ bonusID: e, compare: t, deviceID: u }) => {
                        const n = (0, I.GS)(),
                            a = n === I.cJ.Large || n === I.cJ.Huge ? 4 : 3,
                            r = N().model,
                            i = r.computes.optDevices.bonusVisibleLinesCount(u, e, a),
                            l = ((e, t = !1) =>
                                t || We(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(
                                r.computes.optDevices.bonus(u, e),
                            ),
                            c = (0, s.useMemo)(() => (0, pe.D)(String(l)), [l]);
                        return i
                            ? o().createElement(
                                  'div',
                                  { className: Ge },
                                  l &&
                                      o().createElement(
                                          'span',
                                          { className: Ue },
                                          o().createElement(Je, { compare: t, deviceID: u, bonusID: e }),
                                          ' ',
                                          i &&
                                              l &&
                                              o().createElement(
                                                  'span',
                                                  { className: Ve },
                                                  o().createElement(pe.n, { linesCount: i, blocks: c, mediaSize: n }),
                                              ),
                                      ),
                              )
                            : null;
                    }),
                    et = 'Bonuses_base_af',
                    tt = 'Bonuses_bonus_d1',
                    ut = 'Bonuses_text_37',
                    nt = 'Bonuses_effect_f8',
                    at = 'Bonuses_icon_40',
                    rt = (0, S.Pi)(({ compare: e, deviceID: t }) => {
                        const u = (0, I.GS)(),
                            n = N().model,
                            a = n.computes.optDevices.device(t),
                            r = a.intCD,
                            s = a.effect,
                            i = n.computes.optDevices.bonusesLength(t),
                            l = `${r}-device`,
                            c = n.computes.optDevices.bonusEffectLinesCount(t);
                        return o().createElement(
                            'div',
                            { id: `${l}-bonuses`, className: et },
                            s &&
                                o().createElement(
                                    'div',
                                    { className: tt },
                                    o().createElement(
                                        'span',
                                        { className: nt },
                                        o().createElement('span', { className: at }),
                                        R.strings.tank_setup.effects.name(),
                                    ),
                                    ' ',
                                    o().createElement(
                                        'span',
                                        { className: ut },
                                        o().createElement(pe.n, { mediaSize: u, linesCount: c, blocks: (0, pe.D)(s) }),
                                    ),
                                ),
                            M(i, (u) =>
                                o().createElement(Qe, { key: `${u}_${r}`, bonusID: u, deviceID: t, compare: e }),
                            ),
                        );
                    });
                var st = u(2106);
                const ot = 'DeviceActions_base_c0',
                    it = 'DeviceActions_base__hidden_a6',
                    lt = 'DeviceActions_base__shown_b0',
                    ct = (0, s.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: u,
                            isInstalled: n,
                            isMouseOverCard: a,
                            isModernized: r,
                            isFreeToDemount: s,
                            destroyTooltipBodyPath: i,
                            level: c,
                        }) => {
                            const _ = (a || n) && t.includes(V),
                                d = t.length && (t[0] !== V || _),
                                m = l()(ot, d ? lt : it);
                            return o().createElement(
                                'div',
                                { className: m },
                                o().createElement(X.a, {
                                    parentId: `${e}-cancel`,
                                    actionType: H,
                                    onClick: u,
                                    show: t.includes(H),
                                }),
                                o().createElement(X.a, {
                                    parentId: `${e}-undo`,
                                    actionType: $,
                                    onClick: u,
                                    show: t.includes($),
                                }),
                                o().createElement(X.a, {
                                    parentId: `${e}-upgrade`,
                                    actionType: V,
                                    onClick: u,
                                    show: _,
                                    isModernized: r,
                                    level: c,
                                }),
                                o().createElement(X.a, {
                                    parentId: `${e}-demount`,
                                    actionType: j,
                                    onClick: u,
                                    show: t.includes(j),
                                    isFreeToDemount: s,
                                }),
                                o().createElement(X.a, {
                                    parentId: `${e}-demount_from_setup`,
                                    actionType: W,
                                    onClick: u,
                                    show: t.includes(W),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: s,
                                }),
                                o().createElement(X.a, {
                                    parentId: `${e}-demount_from_setups`,
                                    actionType: G,
                                    onClick: u,
                                    show: t.includes(G),
                                }),
                                o().createElement(X.a, {
                                    parentId: `${e}-destroy`,
                                    actionType: U,
                                    buttonType: st.L.secondary,
                                    onClick: u,
                                    show: (r || !s) && t.includes(U),
                                    isModernized: r,
                                    tooltipBodyPath: i,
                                }),
                            );
                        },
                    );
                function _t() {
                    return (
                        (_t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        _t.apply(this, arguments)
                    );
                }
                const dt = (0, S.Pi)(({ compare: e, index: t, isCurrent: u }) => {
                        const n = (0, I.GS)(),
                            a = n === I.cJ.Large || n === I.cJ.Huge,
                            r = N(),
                            i = r.model,
                            l = r.controls,
                            c = i.computes.optDevices.device(t),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            E = c.isMountedMoreThanOne,
                            g = c.imageName,
                            b = c.itemsInStorage,
                            h = c.price,
                            A = c.specializations,
                            C = c.intCD,
                            v = c.isMounted,
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
                            O = c.lockReason,
                            M = c.destroyTooltipBodyPath,
                            Z = d > -1,
                            q = `${C}-device`,
                            K = (0, s.useMemo)(() => {
                                const t = [];
                                let n = !0;
                                return (
                                    Z &&
                                        !D &&
                                        (u || t.push(z),
                                        v && !e
                                            ? ((n = !u), t.push(...((e) => (e ? [W, G] : [j]))(E)), t.push(U))
                                            : t.push(((e, t, u) => ((!Boolean(e) && !t) || u ? $ : H))(b, v, f))),
                                    !w || e || D || t.push(V),
                                    { availableActions: t, isDeviceClickable: n }
                                );
                            }, [Z, D, w, e, u, v, E, b, f]),
                            X = K.availableActions,
                            Y = K.isDeviceClickable,
                            J = (0, s.useCallback)(
                                (e) => {
                                    l.optDevices.actSlot({ actionType: e, intCD: C, installedSlotId: d });
                                },
                                [l, C, d],
                            ),
                            Q = (0, s.useCallback)(() => {
                                X.length && X[0] !== V ? J(X[0]) : J(P);
                            }, [X, J]),
                            ee = (0, s.useMemo)(() => {
                                const e = { intCD: C, slotType: T.zn, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: E,
                                        isMounted: v,
                                        isDisabled: D,
                                    }),
                                ];
                            }, [C, d, m, p, E, v, D]),
                            te = ee[0],
                            ue = ee[1],
                            ne = (0, s.useMemo)(() => {
                                const e = a
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [a, g]);
                        return o().createElement(Se, {
                            parentId: q,
                            name: _,
                            tooltipArgs: te,
                            contextMenuArgs: ue,
                            imageSource: ne,
                            isCurrent: u,
                            isActive: Z,
                            isDisabled: D,
                            isLocked: y,
                            isClickable: Y,
                            isModernized: x,
                            level: L,
                            specializations:
                                A && A.specializations.length
                                    ? o().createElement(He.G, _t({}, A, { activeSpecsMask: k, mediaSize: n }))
                                    : null,
                            details: o().createElement(rt, { compare: e, deviceID: t }),
                            options: e
                                ? null
                                : o().createElement(Re, {
                                      isMounted: v || f,
                                      itemsInStorage: b,
                                      price: h,
                                      possibleZeroCount: S || x,
                                      show: !X.length || Boolean(b || v || f),
                                  }),
                            actions: o().createElement(ct, {
                                parentId: q,
                                availableActions: X,
                                onActionClick: J,
                                isInstalled: Z,
                                isModernized: x,
                                level: L,
                                isFreeToDemount: F,
                                destroyTooltipBodyPath: M,
                            }),
                            overlayType: B,
                            onSlotClick: Q,
                            shouldHandleMouseOver: !0,
                            lockReason: O,
                        });
                    }),
                    mt = { base: 'Card_base_48', base__large: 'Card_base__large_42', base__huge: 'Card_base__huge_55' },
                    pt = (0, S.Pi)(
                        ({ index: e, type: t, compare: u = !1 }, n) => {
                            const a = (0, I.GS)(),
                                r = N().model,
                                s = r.ammunitionPanel.get().selectedSlot,
                                i = (() => {
                                    switch (t) {
                                        case T.zn:
                                            return r.computes.optDevices.device(e);
                                        case T.mH:
                                            return r.computes.consumables.consumable(e, u, a);
                                        case T.G$:
                                            return r.computes.boosters.booster(e);
                                        default:
                                            return r.computes.optDevices.device(e);
                                    }
                                })(),
                                c = i.isVisible,
                                _ = i.installedSlotId,
                                d = _ > -1 && s === _;
                            return c
                                ? o().createElement(
                                      'div',
                                      { className: l()(mt.base, a && mt[`base__${a}`]), ref: d ? n : null },
                                      (() => {
                                          switch (t) {
                                              case T.G$:
                                                  return o().createElement(Ie, { index: e, compare: u, isCurrent: d });
                                              case T.mH:
                                                  return o().createElement($e, { index: e, compare: u, isCurrent: d });
                                              case T.zn:
                                              default:
                                                  return o().createElement(dt, { index: e, compare: u, isCurrent: d });
                                          }
                                      })(),
                                  )
                                : null;
                        },
                        { forwardRef: !0 },
                    ),
                    Et = {
                        base: 'Cards_base_30',
                        base__large: 'Cards_base__large_33',
                        base__huge: 'Cards_base__huge_60',
                        base__disabled: 'Cards_base__disabled_28',
                    },
                    gt = ({ isDisabled: e, compare: t = !1, currentCardRef: u, cardsAmount: n, type: a }) => {
                        const r = (0, I.GS)();
                        return o().createElement(
                            'div',
                            { className: l()(Et.base, r && Et[`base__${r}`], e && Et.base__disabled) },
                            M(n, (e) =>
                                o().createElement(pt, { key: `${e}_${r}`, index: e, compare: t, ref: u, type: a }),
                            ),
                        );
                    };
                var bt = u(3649),
                    ht = u(3215),
                    At = u(3522);
                const Ct = (0, ht.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, At._)(e),
                                u = t.model,
                                n = t.computes,
                                a = e.object();
                            return Object.assign({}, u, { ammunitionPanel: a, computes: n });
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
                    vt = Ct[0],
                    ft = Ct[1],
                    Dt = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Ft = (e) => {
                        const t = (0, s.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    Bt = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    yt = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    wt = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = Dt(`${e}.${u}`, window);
                                return Bt(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    St = (e) => {
                        const t = ((e) => {
                                const t = (0, se.F)(),
                                    u = t.caller,
                                    n = t.resId,
                                    a = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: a, modelPath: yt(a, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const a = Dt(yt(u, `${t}.${n}`), window);
                                    return Bt(a) ? (e.push(a.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const kt = () => (window.injected || (window.injected = new Map()), window.injected);
                const Tt = te.Sw.instance;
                let xt;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(xt || (xt = {}));
                const Nt = (e = 'model', t = xt.Deep) => {
                        const u = (0, s.useState)(0),
                            n = (u[0], u[1]),
                            a = (0, s.useMemo)(() => (0, se.F)(), []),
                            r = a.callerUrl,
                            o = a.caller,
                            i = a.resId,
                            l = (0, s.useMemo)(() => {
                                const t = (function (e) {
                                    return kt().has(e);
                                })(r.replace('.js', '.html'));
                                return window.__feature && window.__feature !== o && !t ? `subViews.${o}.${e}` : e;
                            }, [r, o, e]),
                            c = (0, s.useState)(() =>
                                ((e) => {
                                    const t = Dt(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return Bt(t) ? t.value : t;
                                })(wt(l)),
                            ),
                            _ = c[0],
                            d = c[1],
                            m = (0, s.useRef)(-1);
                        return (
                            Ft(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? xt.Deep : xt.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== xt.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === xt.Deep
                                                ? (e === _ && n((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        a = St(e);
                                    m.current = Tt.addCallback(a, u, i, t === xt.Deep);
                                }
                            }),
                            (0, s.useEffect)(() => {
                                if (t !== xt.None)
                                    return () => {
                                        Tt.removeCallback(m.current, i);
                                    };
                            }, [i, t]),
                            _
                        );
                    },
                    Lt = 'visible_change',
                    Rt = Lt,
                    Ot = (e, t) => {
                        const u = Nt('tutorialModel.triggers.items').filter((u) => {
                            if (!u) return !1;
                            const n = u.value,
                                a = n.triggers.filter((e) => e.value === t);
                            return n.componentId === e && a.length > 0;
                        });
                        if (0 === u.length) return null;
                        if (!window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e))
                            return null;
                        return {
                            trigger: u[0].value,
                            runTrigger: (u) => {
                                window.tutorialModel.onTriggerActivated({ componentId: e, triggerType: t, state: u });
                            },
                        };
                    };
                var Mt = u(8586),
                    It = u(3978);
                const Pt = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    $t = 'FilterItem_base_2e',
                    Ht = ({ name: e }) =>
                        o().createElement('div', {
                            className: $t,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            },
                        });
                var zt = u(6373);
                let jt;
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
                })(jt || (jt = {}));
                (R.strings.common.percentValue(), R.strings.common.plusPercentValue());
                let Wt;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(Wt || (Wt = {}));
                const Gt = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let Ut;
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
                })(Ut || (Ut = {}));
                let Vt;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(Vt || (Vt = {}));
                const Zt = 'ClearBtn_base_a6',
                    qt = 'ClearBtn_stroke_09',
                    Kt = 'ClearBtn_background_61',
                    Xt = 'ClearBtn_base__hover_3b',
                    Yt = 'ClearBtn_base__down_60',
                    Jt = 'ClearBtn_cross_1d',
                    Qt = ({ parentId: e, onClick: t, soundHover: u = 'highlight', soundClick: n = 'play' }) => {
                        const a = (0, s.useState)(!1),
                            r = a[0],
                            i = a[1],
                            c = (0, s.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            m = (0, s.useCallback)(() => {
                                ((0, ee.G)(n), d(!1), i(!0));
                            }, [n]),
                            p = (0, s.useCallback)(() => {
                                ((0, ee.G)(u), d(!0));
                            }, [u]),
                            E = (0, s.useCallback)(() => {
                                (d(!1), i(!1));
                            }, []);
                        return o().createElement(
                            zt.i,
                            Gt,
                            o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: l()(Zt, _ && Xt, r && Yt),
                                    onMouseDown: m,
                                    onMouseOver: p,
                                    onMouseLeave: E,
                                    onClick: t,
                                },
                                o().createElement('div', { className: Kt }),
                                o().createElement('div', { className: qt }),
                                o().createElement('div', { className: Jt }),
                            ),
                        );
                    },
                    eu = 'MatchDetails_base_a8',
                    tu = 'MatchDetails_count_d2',
                    uu = 'MatchDetails_clear_21',
                    nu = 'MatchDetails_clear__shown_49',
                    au = 'MatchDetails_separator_bc',
                    ru = 'MatchDetails_arrow_b0',
                    su = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: u, totalCount: n }) => {
                        const a = (0, s.useCallback)(() => t(), [t]);
                        return o().createElement(
                            'div',
                            { className: eu },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('span', { className: tu }, u),
                                    o().createElement(
                                        'span',
                                        { className: au },
                                        '/',
                                        o().createElement('span', { className: ru }),
                                    ),
                                ),
                            o().createElement('span', { className: tu }, n),
                            o().createElement(
                                'span',
                                { className: l()(uu, e && nu) },
                                o().createElement(Qt, { parentId: 'match-details-clear-btn', onClick: a }),
                            ),
                        );
                    },
                    ou = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: u,
                        isEnabled: n,
                        showDetails: a = !1,
                        onFilterChanged: r,
                        onFilterReset: i,
                        selectedSlotSpecialization: c,
                    }) => {
                        const _ = (0, I.GS)(),
                            d = Ot('FilterTutorialHintZone', Rt);
                        (0, s.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, ze.UI)(u, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: o().createElement(Ht, { name: e }),
                            callback: (e, t) => {
                                (r({ name: e }), (0, It.d)(e, !t));
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: st.L.ghost,
                                mixClass: l()(Pt.button, c && e === c && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: String(R.strings.tank_setup.categories.$dyn(e)),
                                body: String(R.strings.tank_setup.categories.body.$dyn(e)),
                            },
                        }));
                        return o().createElement(
                            'div',
                            { className: l()(Pt.base, _ && Pt[`base__${_}`], a && Pt.base__detailed) },
                            a &&
                                o().createElement(su, {
                                    isFilterActive: n,
                                    onFilterReset: i,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            o().createElement(
                                'div',
                                { className: Pt.buttons },
                                o().createElement(Mt.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var iu = u(3457),
                    lu = u(2372),
                    cu = u(7078),
                    _u = u(3028);
                const du = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    mu = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    pu = (e) => (e ? mu.disabled.text() : mu.notDisabled.text()),
                    Eu = (0, S.Pi)(({ disabled: e }) => {
                        const t = (0, I.GS)(),
                            u = (0, _u.t)(),
                            n = u.model,
                            a = u.controls,
                            r = n.optDevices.specialCurrency.get().value;
                        return o().createElement(
                            'div',
                            { className: l()(du.base, t && du[`base__${t}`]) },
                            o().createElement(
                                cu.t,
                                { args: { tooltipId: T.$4 } },
                                o().createElement(
                                    'div',
                                    { className: du.currency },
                                    o().createElement(lu.A, { value: r }),
                                    o().createElement('div', { className: du.currencyIcon }),
                                ),
                            ),
                            o().createElement(
                                zt.i,
                                { body: pu(e) },
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(
                                        iu.u5,
                                        { onClick: a.moreCurrencyGot, mixClass: du.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    gu = 'HeaderContent_base_cd';
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                const hu = (0, S.Pi)(({ compare: e }) => {
                        const t = N(),
                            u = t.model,
                            n = t.controls,
                            a = u.optDevices.setup.get(),
                            r = a.withIntroduction,
                            s = a.hasUnfitItems,
                            i = u.optDevices.specialCurrency.get().value,
                            l = u.computes.optDevices.slotsLength(),
                            c = u.optDevices.tabs.get(),
                            _ = u.optDevices.filter.get(),
                            d = e ? void 0 : u.computes.selectedSlotSpecialization();
                        switch (c.selectedTabName) {
                            case T.S:
                                return o().createElement(
                                    'div',
                                    { className: gu },
                                    o().createElement(
                                        ou,
                                        bu({}, _, {
                                            onFilterChanged: n.filterChanged,
                                            onFilterReset: n.filterReset,
                                            selectedSlotSpecialization: d,
                                        }),
                                    ),
                                );
                            case T.pi:
                                return e
                                    ? null
                                    : !r || (0 !== i && 0 === l)
                                      ? o().createElement(
                                            'div',
                                            { className: gu },
                                            o().createElement(Eu, { disabled: r ? !s : l <= 0 }),
                                        )
                                      : null;
                            default:
                                return null;
                        }
                    }),
                    Au = {
                        base: 'CompareHeader_base_7a',
                        base__small: 'CompareHeader_base__small_ad',
                        base__medium: 'CompareHeader_base__medium_b7',
                        base__large: 'CompareHeader_base__large_6f',
                        base__huge: 'CompareHeader_base__huge_d0',
                        title: 'CompareHeader_title_59',
                        description: 'CompareHeader_description_1c',
                        controlsContainer: 'CompareHeader_controlsContainer_8b',
                    },
                    Cu = R.strings.tank_setup.compare.section,
                    vu = (0, S.Pi)(({ type: e, children: t, withContent: u }) => {
                        const n = ft().model.vehicleInfo.get(),
                            a = (0, I.GS)();
                        return o().createElement(
                            'div',
                            { className: l()(Au.base, Au[`base__${a}`]) },
                            o().createElement(
                                'div',
                                { className: Au.title },
                                (0, bt.WU)(String(Cu.title.$dyn(e)), { name: n.vehicleName }),
                            ),
                            o().createElement('div', { className: Au.description }, Cu.description.$dyn(e)),
                            o().createElement(
                                'div',
                                { className: Au.controlsContainer },
                                o().createElement('div', { className: Au.tabs }, null == t ? void 0 : t(n.vehicleLvl)),
                                u && o().createElement(hu, { compare: !0 }),
                            ),
                        );
                    }),
                    fu = 'Tabs_base_d9',
                    Du = 'Tabs_base__vertical_c0',
                    Fu = 'Tabs_list_0a',
                    Bu = 'Tabs_list__centered_dc',
                    yu = 'Tabs_wrapper_2d',
                    wu = 'Tabs_wrapper__centered_d8',
                    Su = 'Tabs_wrapper__vertical_a5';
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Tu = 'tabs-role';
                var xu;
                !(function (e) {
                    ((e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key'));
                })(xu || (xu = {}));
                class Nu extends s.Component {
                    constructor(...e) {
                        (super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[xu.TAB]);
                                return t && t.props[xu.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                (this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e }));
                            }));
                    }
                    componentDidMount() {
                        const e = o().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[Tu] === xu.LIST);
                        if (t < 0) return;
                        const u =
                            this.props.activeKey || this._getFirstTabKey(o().Children.toArray(e[t].props.children));
                        ((e[t] = o().cloneElement(e[t], {
                            children: o()
                                .Children.toArray(e[t].props.children)
                                .map((e) => o().cloneElement(e, { key: e.props[xu.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(u));
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const u = o().Children.toArray(this.props.children)[this.tabsListIndex],
                            n = u.props.children.reduce(
                                (e, t, u) => ((e[u] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            a =
                                ((r = this.tabsProps),
                                (s = n),
                                !(
                                    Object.keys(r).length === Object.keys(s).length &&
                                    Object.keys(r).every(
                                        (e) => Object.prototype.hasOwnProperty.call(s, e) && r[e] === s[e],
                                    )
                                ));
                        var r, s;
                        const i = l()(
                                yu,
                                u.props.className,
                                this.props.isTabsCentered && wu,
                                this.props.isVerticalTabs && Su,
                            ),
                            c = l()(Fu, this.props.isTabsCentered && Bu);
                        if (t.activeKey !== this.state.activeKey || a) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[Tu] === xu.CONTENT)
                                        return e.props[xu.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, u) => [this.tabsListIndex, e].includes(u)),
                                a = t[0].props.children,
                                r = a.map((e, t) =>
                                    o().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            n[t],
                                            { key: t, isActive: this.state.activeKey === e.props[xu.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === a.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const u = n[t][xu.TAB];
                                                    this.state.activeKey === u ||
                                                        (n[t].onClick && n[t].onClick(e),
                                                        this.handleSetActiveKey(u),
                                                        this.props.onClickSound && (0, ee.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    (n[t].onMouseEnter && n[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, ee.G)(this.props.onMouseEnterSound));
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
                                            { className: c, key: xu.LIST },
                                            o().createElement('div', ku({}, u.props, { className: i }), r),
                                        ),
                                        t[1],
                                    ],
                                }));
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = l()(fu, this.props.isVerticalTabs && Du);
                        return o().createElement('div', { className: t }, e);
                    }
                }
                Nu.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Lu = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Ou = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = e.activeKey,
                            a = e.onClickSound,
                            r = e.onMouseEnterSound,
                            s = e.isTabsCentered,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Lu);
                        return o().createElement(
                            'div',
                            Ru({ className: u }, i),
                            o().createElement(
                                Nu,
                                { activeKey: n, onClickSound: a, onMouseEnterSound: r, isTabsCentered: s },
                                t,
                            ),
                        );
                    },
                    Mu = {
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
                    Iu = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const $u = (e) => {
                        let t = e.value,
                            u = e.isEmpty,
                            n = e.className,
                            a = e.size,
                            r = void 0 === a ? 'normal' : a,
                            s = e.fadeInAnimation,
                            i = void 0 !== s && s,
                            c = e.hide,
                            _ = void 0 !== c && c,
                            d = e.maximumNumber,
                            m = void 0 === d ? 99 : d,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Iu);
                        const E = u ? null : t,
                            g = 'string' == typeof E;
                        if ((E && !g && E < 0) || 0 === E) return null;
                        const b = E && !g && E > m,
                            h = l()(
                                Mu.base,
                                Mu[`base__${r}`],
                                i && Mu.base__animated,
                                _ && Mu.base__hidden,
                                !E && Mu.base__pattern,
                                u && Mu.base__empty,
                                n,
                            );
                        return o().createElement(
                            'div',
                            Pu({ className: h }, p),
                            o().createElement('div', { className: Mu.bg }),
                            o().createElement('div', { className: Mu.pattern }),
                            o().createElement(
                                'div',
                                { className: l()(Mu.value, g && Mu.value__text) },
                                b ? m : E,
                                b && o().createElement('span', { className: Mu.plus }, '+'),
                            ),
                        );
                    },
                    Hu = ({ children: e, component: t, props: u = {} }) => (t ? o().createElement(t, u, e) : e || null),
                    zu = 'Tab_base_dd',
                    ju = 'Tab_base__first_4a',
                    Wu = 'Tab_base__last_96',
                    Gu = 'Tab_base__medium_ec',
                    Uu = 'Tab_base__active_5d',
                    Vu = 'Tab_divider_ca',
                    Zu = 'Tab_divider__show_62',
                    qu = 'Tab_state_6c',
                    Ku = 'Tab_stateHighlight_1e',
                    Xu = 'Tab_stateBorder_64',
                    Yu = 'Tab_stateBorder__positionLeft_e7',
                    Ju = 'Tab_stateBorder__positionRight_db',
                    Qu = 'Tab_counter_e1',
                    en = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function tn() {
                    return (
                        (tn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        tn.apply(this, arguments)
                    );
                }
                const un = (0, s.memo)((e) => {
                    let t = e.isActive,
                        u = void 0 !== t && t,
                        n = e.isFirst,
                        a = void 0 !== n && n,
                        r = e.isLast,
                        s = void 0 !== r && r,
                        i = e.isMedium,
                        c = void 0 !== i && i,
                        _ = e.isNotified,
                        d = void 0 !== _ && _,
                        m = e.children,
                        p = void 0 === m ? 'Tab' : m,
                        E = e.wrapper,
                        g = void 0 === E ? {} : E,
                        b = e.counter,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, en);
                    return o().createElement(
                        Hu,
                        g,
                        o().createElement(
                            'div',
                            tn({ className: l()(zu, { [Uu]: u }, { [ju]: a }, { [Wu]: s }, { [Gu]: c }) }, h),
                            o().createElement(
                                'span',
                                { className: qu },
                                o().createElement('span', { className: Ku }),
                                o().createElement('span', { className: l()(Xu, Yu) }),
                                o().createElement('span', { className: l()(Xu, Ju) }),
                            ),
                            p,
                            !s && !u && o().createElement('span', { className: l()(Vu, Zu) }),
                            (Boolean(b) || d) &&
                                o().createElement(
                                    'div',
                                    { className: Qu },
                                    o().createElement($u, { value: b, isEmpty: d }),
                                ),
                        ),
                    );
                });
                var nn = u(5262);
                function an(e, t, u) {
                    const n = (0, s.useContext)(r.YN);
                    let a = Object.entries(n).filter(([e, t]) => !0 === t && e in nn.u);
                    return (
                        u && (a = a.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = a.map((e) =>
                                l()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + (0, bt.e)(t))(u, e[0])]),
                            );
                            return ((e[u] = l()(t[u], ...n)), e);
                        }, {})
                    );
                }
                const rn = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    sn = ['name', 'newItemsCount', 'handleTabChanged', 'isTooltipEnabled'];
                function on() {
                    return (
                        (on =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        on.apply(this, arguments)
                    );
                }
                const ln = (e) => {
                    let t = e.name,
                        u = e.newItemsCount,
                        n = e.handleTabChanged,
                        a = e.isTooltipEnabled,
                        r = void 0 === a || a,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, sn);
                    const l = R.strings.tank_setup.tabs.$dyn(t),
                        c = (0, s.useCallback)(() => {
                            (ee.$.playClick(), n({ name: t }));
                        }, [n, t]),
                        _ = (0, s.useMemo)(() => ({ name: t }), [t]),
                        d = an(['tab'], rn);
                    return o().createElement(
                        Ce.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: r,
                        },
                        o().createElement(
                            'div',
                            null,
                            o().createElement(
                                un,
                                on({}, i, { isNotified: Boolean(u), onClick: c }),
                                o().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                };
                function cn() {
                    return (
                        (cn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        cn.apply(this, arguments)
                    );
                }
                const _n = ({ tabs: e, selectedTabName: t, handleTabChanged: u, isTooltipEnabled: n = !0 }) => {
                        const a = Ot('ModernizedSetupTabHintZone', Rt);
                        return (
                            (0, s.useEffect)(() => {
                                a && a.runTrigger(!0);
                            }, [a]),
                            o().createElement(
                                Ou,
                                { key: t, activeKey: t },
                                o().createElement(
                                    'div',
                                    { 'tabs-role': xu.LIST },
                                    ze.UI(e, (e) =>
                                        o().createElement(
                                            ln,
                                            cn(
                                                {
                                                    key: e.name,
                                                    handleTabChanged: u,
                                                    'tabs-role': xu.TAB,
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
                    dn = {
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
                    mn = ({ title: e, children: t, tabProps: u }) => {
                        const n = (0, I.GS)();
                        return o().createElement(
                            'div',
                            { className: l()(dn.base, n && dn[`base__${n}`]) },
                            o().createElement(
                                'div',
                                null,
                                o().createElement('div', { className: l()(dn.title, n && dn[`title__${n}`]) }, e),
                                u &&
                                    o().createElement(
                                        'div',
                                        { className: l()(dn.tabs, n && dn[`tabs__${n}`]) },
                                        o().createElement(_n, u),
                                    ),
                            ),
                            t,
                        );
                    },
                    pn = (e, t, u) => (u < e ? e : u > t ? t : u);
                var En = u(3138),
                    gn = u(3815);
                function bn(e, t, u = []) {
                    const n = (0, s.useRef)(0),
                        a = (0, s.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, s.useEffect)(() => a, [a]);
                    const r = (null != u ? u : []).concat([t]);
                    return [
                        (0, s.useCallback)((u) => {
                            ((n.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, r),
                        a,
                    ];
                }
                function hn(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return An(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return An(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function An(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                function Cn(e, t, u) {
                    const n = (0, s.useMemo)(
                        () =>
                            (function (e, t, u, n) {
                                let a,
                                    r = !1,
                                    s = 0;
                                function o() {
                                    a && clearTimeout(a);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function _() {
                                        ((s = Date.now()), u.apply(l, i));
                                    }
                                    r ||
                                        (n && !a && _(),
                                        o(),
                                        void 0 === n && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (a = setTimeout(
                                                  n
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : _,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                    (i.cancel = function () {
                                        (o(), (r = !0));
                                    }),
                                    i
                                );
                            })(u, e),
                        t,
                    );
                    return ((0, s.useEffect)(() => n.cancel, [n]), n);
                }
                var vn = u(7030);
                let fn;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(fn || (fn = {}));
                const Dn = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Fn = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: a,
                        forceTriggerMouseMove: r,
                    }) => {
                        const o = (e, u) => {
                            const n = t(e),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : pn(a, r, u);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Dn : l,
                                _ = (0, s.useRef)(null),
                                d = (0, s.useRef)(null),
                                m = (0, s.useRef)(!1),
                                p = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        a = (e, ...u) => {
                                            for (var n, a = hn(t(e).values()); !(n = a()).done; ) (0, n.value)(...u);
                                        };
                                    return (0, s.useMemo)(() => ({ on: u, off: n, trigger: a }), []);
                                })(),
                                E = Cn(
                                    () => {
                                        r && r();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, vn.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (u(t, e), p.trigger('change', e), r && m.current && E());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                b = g[0],
                                h = g[1],
                                A = (0, s.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = b.scrollPosition.get(),
                                            r = (null != (n = b.scrollPosition.goal) ? n : 0) - a;
                                        return o(e, t * u + r + a);
                                    },
                                    [b.scrollPosition],
                                ),
                                C = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            h.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, b.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, b.scrollPosition],
                                ),
                                v = (0, s.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            u = d.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            r = A(t, e, n);
                                        C(r);
                                    },
                                    [C, A, c.step],
                                ),
                                f = (0, s.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && v(n(e)),
                                            _.current && p.trigger('mouseWheel', e, b.scrollPosition, t(_.current)));
                                    },
                                    [b.scrollPosition, v, p],
                                ),
                                D = ((e, t = []) => {
                                    const u = (0, s.useRef)(),
                                        n = (0, s.useCallback)((...t) => {
                                            (u.current && u.current(), (u.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                u.current && u.current();
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
                                                (C(o(e, b.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [C, b.scrollPosition.goal],
                                ),
                                F = (0, gn.z)(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = o(e, b.scrollPosition.goal);
                                    (t !== b.scrollPosition.goal && C(t, { immediate: !0 }),
                                        p.trigger('recalculateContent'));
                                });
                            ((0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            ),
                                (0, s.useEffect)(() => {
                                    const e = _.current;
                                    if (!e || !r) return;
                                    const t = () => {
                                            m.current = !0;
                                        },
                                        u = () => {
                                            m.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', u),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', u));
                                        }
                                    );
                                }, [_]));
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? a(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: f,
                                    applyScroll: C,
                                    applyStepTo: v,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: h,
                                    animationScroll: b,
                                    recalculateContent: F,
                                    events: { on: p.on, off: p.off },
                                }),
                                [b.scrollPosition, C, v, p.off, p.on, F, f, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Bn = Fn({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            var u;
                            e.style.transform = `translateX(-${0 | (null != (u = t.value.scrollPosition) ? u : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? fn.Next : fn.Prev),
                        forceTriggerMouseMove: En.O.view.forceTriggerMouseMove,
                    }),
                    yn = 'HorizontalBar_base_49',
                    wn = 'HorizontalBar_base__active_5e',
                    Sn = 'HorizontalBar_leftButton_5f',
                    kn = 'HorizontalBar_rightButton_03',
                    Tn = 'HorizontalBar_track_0d',
                    xn = 'HorizontalBar_thumb_fd',
                    Nn = 'HorizontalBar_rail_32',
                    Ln = 'disable',
                    Rn = { pending: !1, offset: 0 },
                    On = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Mn = () => {},
                    In = (e, t) => Math.max(20, e.offsetWidth * t),
                    Pn = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = On, onDrag: n = Mn }) => {
                        const a = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, s.useState)(Rn),
                            p = m[0],
                            E = m[1],
                            g = (0, s.useCallback)(
                                (e) => {
                                    (E(e),
                                        _.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current }));
                                },
                                [n],
                            ),
                            b = () => {
                                const t = c.current,
                                    u = _.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / a),
                                    l = pn(0, 1, s / (a - n)),
                                    d = (t.offsetWidth - In(t, o)) * l;
                                ((u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && _.current) {
                                            if (0 === e)
                                                return (
                                                    r.current.classList.add(Ln),
                                                    void i.current.classList.remove(Ln)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = _.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(Ln),
                                                    void i.current.classList.add(Ln)
                                                );
                                            var t, u;
                                            (r.current.classList.remove(Ln), i.current.classList.remove(Ln));
                                        }
                                    })(d));
                            },
                            h = (0, gn.z)(() => {
                                ((() => {
                                    const t = _.current,
                                        u = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const s = Math.min(1, n / r);
                                    ((t.style.width = `${In(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 !== s ? a.current.classList.add(wn) : a.current.classList.remove(wn)));
                                })(),
                                    b());
                            });
                        ((0, s.useEffect)(() => (0, w.v)(h)),
                            (0, s.useEffect)(
                                () =>
                                    (0, w.v)(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let u = Mn;
                                        const n = () => {
                                            (u(), (u = (0, w.v)(h)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!p.pending) return;
                                const t = En.O.client.events.mouse.move(([t, u]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const o = c.current,
                                            i = _.current;
                                        if (!o || !i) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - p.offset - o.getBoundingClientRect().x,
                                            d = (l / o.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: d }));
                                    }),
                                    u = En.O.client.events.mouse.up(() => {
                                        (t(), g(Rn));
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, p.offset, p.pending, n, g]));
                        const A = bn((t) => e.applyStepTo(t), d, [e]),
                            C = A[0],
                            v = A[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Ln) || (0, ee.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(yn, t.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(Sn, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ln) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), C(fn.Next));
                                },
                                onMouseUp: v,
                                ref: r,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Tn, t.track),
                                    onMouseDown: (t) => {
                                        const n = _.current;
                                        if (n && 0 === t.button)
                                            if (((0, ee.G)('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = _.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? fn.Prev : fn.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: _, className: l()(xn, t.thumb) }),
                                o().createElement('div', { className: l()(Nn, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(kn, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ln) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), C(fn.Prev));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    $n = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Hn = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: r,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()($n.base, e.base) });
                            }, [n]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()($n.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()($n.defaultScrollArea, a) },
                                o().createElement(zn, { className: i, api: m, classNames: r }, e),
                            ),
                            o().createElement(Pn, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    zn = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, s.useEffect)(() => (0, w.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()($n.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: l()($n.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()($n.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((zn.Bar = Pn), (zn.Default = Hn));
                const jn = Fn({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? fn.Next : fn.Prev),
                    }),
                    Wn = 'VerticalBar_base_f3',
                    Gn = 'VerticalBar_base__active_72',
                    Un = 'VerticalBar_topButton_d7',
                    Vn = 'VerticalBar_bottomButton_06',
                    Zn = 'VerticalBar_track_df',
                    qn = 'VerticalBar_thumb_32',
                    Kn = 'VerticalBar_rail_43',
                    Xn = 'disable',
                    Yn = () => {},
                    Jn = { pending: !1, offset: 0 },
                    Qn = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ea = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    ta = (e, t) => Math.max(20, e.offsetHeight * t),
                    ua = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Qn, onDrag: n = Yn }) => {
                        const a = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, s.useState)(Jn),
                            p = m[0],
                            E = m[1],
                            g = (0, s.useCallback)(
                                (e) => {
                                    (E(e),
                                        _.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current }));
                                },
                                [n],
                            ),
                            b = (0, gn.z)(() => {
                                const t = _.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${ta(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    a.current &&
                                        (1 !== s ? a.current.classList.add(Gn) : a.current.classList.remove(Gn)),
                                    s
                                );
                            }),
                            h = (0, gn.z)(() => {
                                const t = c.current,
                                    u = _.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / a),
                                    l = pn(0, 1, s / (a - n)),
                                    d = (t.offsetHeight - ta(t, o)) * l;
                                ((u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && _.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    r.current.classList.add(Xn),
                                                    void i.current.classList.remove(Xn)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = _.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(Xn),
                                                    void i.current.classList.add(Xn)
                                                );
                                            var t, u;
                                            (r.current.classList.remove(Xn), i.current.classList.remove(Xn));
                                        }
                                    })(d));
                            }),
                            A = (0, gn.z)(() => {
                                ea(e, () => {
                                    (b(), h());
                                });
                            });
                        ((0, s.useEffect)(() => (0, w.v)(A)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    ea(e, () => {
                                        h();
                                    });
                                };
                                let u = Yn;
                                const n = () => {
                                    (u(), (u = (0, w.v)(A)));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!p.pending) return;
                                const t = En.O.client.events.mouse.up(() => {
                                        g(Jn);
                                    }),
                                    u = En.O.client.events.mouse.move(([t]) => {
                                        ea(e, (u) => {
                                            const a = c.current,
                                                r = _.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const o = t.screenY - p.offset - a.getBoundingClientRect().y,
                                                i = (o / a.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, p.offset, p.pending, n, g]));
                        const C = bn((t) => e.applyStepTo(t), d, [e]),
                            v = C[0],
                            f = C[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Xn) || (0, ee.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Wn, t.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(Un, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xn) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), v(fn.Next));
                                },
                                ref: r,
                                onMouseEnter: D,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Zn, t.track),
                                    onMouseDown: (t) => {
                                        const n = _.current;
                                        if (n && 0 === t.button)
                                            if (((0, ee.G)('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    _.current &&
                                                        ea(e, (n) => {
                                                            if (!n) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? fn.Prev : fn.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                o().createElement('div', { ref: _, className: l()(qn, t.thumb) }),
                                o().createElement('div', { className: l()(Kn, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(Vn, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Xn) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), v(fn.Prev));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    na = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    aa = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: r,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(na.base, e.base) });
                            }, [n]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(na.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(na.area, a) },
                                o().createElement(ra, { className: r, classNames: i, api: m }, e),
                            ),
                            o().createElement(ua, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    ra = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, s.useEffect)(() => (0, w.v)(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(na.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(na.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                ra.Default = aa;
                const sa = { Vertical: a, Horizontal: n };
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
                const oa = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            u = t.width,
                            n = t.height;
                        return 0 !== u && 0 !== n;
                    },
                    ia = (e) => {
                        const t = (0, s.useState)(oa(e ? e.current : null)),
                            u = t[0],
                            n = t[1];
                        return (
                            (0, s.useEffect)(() => {
                                let t = 0;
                                const u = () => {
                                    t = requestAnimationFrame(() => {
                                        oa(e ? e.current : null) ? n(!0) : u();
                                    });
                                };
                                return (
                                    u(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => () => n(!1), [e]),
                            u
                        );
                    },
                    la = 'ScrollableCards_base_e0',
                    ca = 'ScrollableCards_scroll_4b',
                    _a = ({ children: e, selectedSlotId: t, scrollAreaKey: u = 'area', updateKey: n = null }) => {
                        const a = (0, s.useState)(!1),
                            r = a[0],
                            i = a[1],
                            l = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(!1),
                            d = (0, s.useRef)(''),
                            m = ia(l),
                            p = jn();
                        (0, s.useEffect)(
                            () => () => {
                                _.current = !1;
                            },
                            [],
                        );
                        const E = (0, gn.z)(() => {
                                (_.current && i(!0), p.events.off('rest', E));
                            }),
                            g = (0, s.useCallback)(() => {
                                _.current && i(!1);
                            }, []),
                            b = (0, s.useCallback)(() => {
                                const e = c.current,
                                    t = l.current;
                                if (e && p && t) {
                                    const u = e.offsetTop + (e.offsetHeight - t.offsetHeight);
                                    (p.events.on('rest', E), p.applyScroll(u));
                                }
                            }, [E, p]);
                        ((0, s.useEffect)(() => {
                            (0, w.v)(() => {
                                m &&
                                    (d.current === u
                                        ? b()
                                        : ((d.current = u),
                                          new Promise((e) => {
                                              requestAnimationFrame(() => {
                                                  requestAnimationFrame(() => {
                                                      e();
                                                  });
                                              });
                                          }).then(() => {
                                              (b(), _.current || (_.current = !0));
                                          })));
                            });
                        }, [m, u, b, t]),
                            (0, s.useEffect)(() => {
                                _.current && p.applyScroll(0);
                            }, [p, n]));
                        const h = {
                            currentCardRef: c,
                            scrollWrapperRef: l,
                            isFinalAnimationRunning: r,
                            onFinalAnimationDone: g,
                        };
                        return o().createElement(
                            'div',
                            { className: la },
                            o().createElement(
                                'div',
                                { className: ca, ref: l },
                                o().createElement(sa.Vertical.Default, { key: u, api: p }, (0, s.cloneElement)(e, h)),
                            ),
                        );
                    };
                function da() {
                    return (
                        (da =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        da.apply(this, arguments)
                    );
                }
                const ma = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = N(),
                            u = t.model,
                            n = t.controls,
                            a = (0, I.GS)(),
                            r = u.ammunitionPanel.get().selectedSlot,
                            s = u.boosters.tabs.get(),
                            i = u.computes.boosters.length();
                        return o().createElement(I.Ar, {
                            compare: e,
                            header: e
                                ? o().createElement(vu, { type: T.G$ }, () =>
                                      o().createElement(
                                          _n,
                                          da({}, s, { handleTabChanged: n.boosters.changeTab, isTooltipEnabled: !1 }),
                                      ),
                                  )
                                : o().createElement(mn, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabProps: Object.assign({}, s, {
                                          handleTabChanged: n.boosters.changeTab,
                                          isTooltipEnabled: !1,
                                      }),
                                  }),
                            content: o().createElement(
                                _a,
                                { selectedSlotId: r, scrollAreaKey: s.selectedTabName, updateKey: i },
                                o().createElement(gt, { compare: e, type: T.G$, cardsAmount: i }),
                            ),
                            footer:
                                !e &&
                                o().createElement(O.w, {
                                    withConfirmation: !0,
                                    renewalType: L.my.Boosters,
                                    parentModelPath: 'model.tankSetup.battleBoostersSetup',
                                    onDealConfirmed: n.boosters.confirmDeal,
                                    onDealCancelled: n.boosters.cancelDeal,
                                    onAutoRenewalChanged: (e) => n.boosters.changeAutoRenewal(e),
                                    mediaSize: a,
                                }),
                        });
                    }),
                    pa = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = (0, I.GS)(),
                            u = N(),
                            n = u.model,
                            a = u.controls,
                            r = n.ammunitionPanel.get().selectedSlot,
                            s = n.computes.consumables.length(e, t);
                        return o().createElement(I.Ar, {
                            header: e
                                ? o().createElement(vu, { type: T.mH })
                                : o().createElement(mn, { title: R.strings.tank_setup.section.consumables() }),
                            content: o().createElement(
                                _a,
                                { selectedSlotId: r },
                                o().createElement(gt, { compare: e, cardsAmount: s, type: T.mH }),
                            ),
                            footer:
                                !e &&
                                o().createElement(O.w, {
                                    withConfirmation: !0,
                                    renewalType: L.my.Consumables,
                                    mediaSize: t,
                                    parentModelPath: 'model.tankSetup.consumablesSetup',
                                    onDealConfirmed: a.consumables.confirmDeal,
                                    onDealCancelled: a.consumables.cancelDeal,
                                    onAutoRenewalChanged: a.consumables.changeAutoRenewal,
                                }),
                            compare: e,
                        });
                    });
                function Ea() {
                    return (
                        (Ea =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ea.apply(this, arguments)
                    );
                }
                const ga = (0, S.Pi)(({ compare: e, hasIntroduction: t }) => {
                    const u = N(),
                        n = u.model,
                        a = u.controls,
                        r = n.optDevices.tabs.get(),
                        s = r.tabs.length > 1;
                    return e
                        ? o().createElement(vu, { type: T.zn, withContent: !0 }, (u) => {
                              if (!s) return null;
                              const n = e && !t && u <= 4,
                                  i = (function (e, t) {
                                      return t ? ze.hX(e, (e) => 'modernized' !== e.name) : e;
                                  })(r.tabs, n);
                              return o().createElement(
                                  _n,
                                  Ea({}, Object.assign({}, r, { tabs: i }), {
                                      handleTabChanged: a.optDevices.changeTab,
                                  }),
                              );
                          })
                        : o().createElement(
                              mn,
                              {
                                  title: R.strings.tank_setup.section.optDevices(),
                                  tabProps: s
                                      ? Object.assign({}, r, { handleTabChanged: a.optDevices.changeTab })
                                      : void 0,
                                  tabs:
                                      s &&
                                      o().createElement(_n, Ea({}, r, { handleTabChanged: a.optDevices.changeTab })),
                              },
                              o().createElement(hu, { compare: e }),
                          );
                });
                var ba = u(8934);
                const ha = {
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
                var Aa = u(280);
                const Ca = ({ introType: e }) => {
                        const t = l()(ha.icon, ha[`icon__currency-${e}`]),
                            u = (0, s.useMemo)(
                                () => ({
                                    currencyName: o().createElement(
                                        'span',
                                        { className: ha.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: o().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            n = R.strings.tank_setup.introduction.message.$dyn(e);
                        return n ? o().createElement(Aa.z, { binding: u, text: n, classMix: ha.message }) : null;
                    },
                    va = (0, S.Pi)(() => {
                        const e = (0, I.GS)(),
                            t = e === I.cJ.Large || e === I.cJ.Huge,
                            u = (0, s.useState)(!0),
                            n = u[0],
                            a = u[1],
                            r = (0, _u.t)(),
                            i = r.model,
                            c = r.controls,
                            _ = i.optDevices.setup.get().introductionType,
                            d = i.computes.optDevices.slotsLength() > 0,
                            m = (0, s.useCallback)(() => {
                                a(!1);
                            }, []),
                            p = (0, s.useCallback)(() => {
                                (c.introPassed(), a(!0));
                            }, [c]),
                            E = (0, s.useMemo)(
                                () => ({
                                    enter: ha.base__enter,
                                    enterActive: ha.base__enterActive,
                                    exit: ha.base__exit,
                                    exitActive: ha.base__exitActive,
                                }),
                                [],
                            ),
                            g = d
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(_)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(_);
                        return o().createElement(
                            ba.Z,
                            { in: n, classNames: E, timeout: 300, onExited: p },
                            o().createElement(
                                'div',
                                { className: l()(ha.base, e && ha[`base__${e}`]), id: 'introduction' },
                                o().createElement(
                                    'div',
                                    { className: ha.introduction },
                                    o().createElement('div', {
                                        className: l()(ha.image, t ? ha[`image__${_}Large`] : ha[`image__${_}`]),
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: ha.description },
                                        o().createElement('div', { className: ha.title }, g),
                                        o().createElement(Ca, { introType: _ }),
                                    ),
                                    d &&
                                        o().createElement(
                                            iu.u5,
                                            { type: iu.L$.secondary, size: iu.qE.medium, onClick: m },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    }),
                    fa = 'OptDevicesSetup_intro_ae',
                    Da = 'OptDevicesSetup_footer_e6',
                    Fa = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = (0, I.GS)(),
                            u = N().model,
                            n = (0, _u.t)().controls,
                            a = u.ammunitionPanel.get().selectedSlot,
                            r = u.optDevices.setup.get().withIntroduction,
                            s = u.computes.optDevices.slotsLength(),
                            i = u.optDevices.filter.get().selectedFilterCount,
                            l = u.optDevices.tabs.get().selectedTabName,
                            c = u.computes.optDevices.slotsLength();
                        return o().createElement(I.Ar, {
                            compare: e,
                            header: o().createElement(ga, { compare: e, hasIntroduction: r }),
                            content:
                                !e && r
                                    ? o().createElement(
                                          'div',
                                          { className: fa },
                                          o().createElement(gt, {
                                              compare: !1,
                                              type: T.zn,
                                              cardsAmount: c,
                                              isDisabled: !0,
                                          }),
                                          o().createElement(va, null),
                                      )
                                    : o().createElement(
                                          _a,
                                          { selectedSlotId: a, scrollAreaKey: l, updateKey: `${i}:${s}` },
                                          o().createElement(gt, {
                                              compare: e,
                                              type: T.zn,
                                              cardsAmount: c,
                                              isDisabled: r,
                                          }),
                                      ),
                            footer:
                                !e &&
                                o().createElement(
                                    'div',
                                    { className: Da },
                                    o().createElement(O.w, {
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
                let Ba, ya;
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
                })(Ba || (Ba = {})),
                    (function (e) {
                        ((e.Visible = 'visible'),
                            (e.Hidden = 'hidden'),
                            (e.NotSuitableVehicle = 'notSuitableVehicle'),
                            (e.NoDataAtAll = 'noDataAtAll'));
                    })(ya || (ya = {})));
                const wa = (e, t, { listenResize: u = !0, intervalMs: n = 50, minStableTicks: a = 3 }, r) => {
                    const o = (0, s.useRef)(e()),
                        i = (0, s.useState)(0),
                        l = i[0],
                        c = i[1];
                    ((0, s.useEffect)(() => {
                        let u = 0;
                        const r = setInterval(() => {
                            const n = e();
                            n !== o.current
                                ? ((o.current = n), (u = 0), t(n))
                                : (u++, u >= a && (t(n), clearInterval(r)));
                        }, n);
                        return () => {
                            clearInterval(r);
                        };
                    }, [e, t, l, n, a, ...r]),
                        (0, s.useEffect)(() => {
                            const e = () => {
                                c((e) => e + 1);
                            };
                            if (u)
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                        }, [u]));
                };
                let Sa, ka;
                (!(function (e) {
                    ((e[(e.NoData = 0)] = 'NoData'),
                        (e[(e.Normal = 1)] = 'Normal'),
                        (e[(e.Linked = 2)] = 'Linked'),
                        (e[(e.Combined = 3)] = 'Combined'));
                })(Sa || (Sa = {})),
                    (function (e) {
                        ((e.Unknown = 'unknown'), (e.Random = 'random'), (e.Comp7 = 'comp7'));
                    })(ka || (ka = {})));
                var Ta = u(5344),
                    xa = u(5959);
                function Na() {
                    return (
                        (Na =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Na.apply(this, arguments)
                    );
                }
                const La = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = o().createElement('div', { className: u }, e);
                    if (t.header || t.body) return o().createElement(zt.i, t, n);
                    const a = t.contentId;
                    return a ? o().createElement(Ce.u, Na({}, t, { contentId: a }), n) : o().createElement(cu.t, t, n);
                };
                var Ra = u(8045);
                const Oa = {
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
                let Ma, Ia, Pa;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Ma || (Ma = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Ia || (Ia = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(Pa || (Pa = {})));
                const $a = { [Pa.NBSP]: Ma.NoBreakSymbol, [Pa.ZWNBSP]: Ma.NoBreakSymbol, [Pa.NEW_LINE]: Ma.LineBreak },
                    Ha = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    za = {
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
                    ja = 'renderers_noBreakWrapper_10',
                    Wa = 'renderers_lineBreak_b5',
                    Ga = 'renderers_newLine_bd',
                    Ua = 'renderers_word_f3',
                    Va = (e) => ({ color: `#${e}` }),
                    Za = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? za[n]
                                ? o().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: l()(Ua, za[n]) },
                                      e,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: Ua, style: Va(n) },
                                      e,
                                  )
                            : o().createElement('span', { key: u, 'data-block-type': t.blockType, className: Ua }, e);
                    },
                    qa = {
                        [Ma.Word]: Za,
                        [Ma.NoBreakSymbol]: Za,
                        [Ma.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            o().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: u }, e)),
                            ),
                        [Ma.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': Ma.LineBreak, className: Wa }),
                        [Ma.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': Ma.NewLine, className: Ga }, e),
                        [Ma.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': Ma.NoBreakWrapper, className: ja },
                                e,
                            ),
                    },
                    Ka = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const s = `${u}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        u = Ka(e, qa[t], s);
                                    n.push(...u);
                                } else n.push(t({ elementList: [a], textBlock: e, key: s }));
                            }),
                            n
                        );
                    },
                    Xa = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            n = e.blockType,
                                            a = qa[n],
                                            r = Ka(e, a, t);
                                        return (
                                            n === Ma.NoBreakWrapper
                                                ? u.push(a({ elementList: r, textBlock: e, key: `${t}` }))
                                                : u.push(...r),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    },
                    Ya = (e, t, u, n) => {
                        let a = t.exec(e),
                            r = 0;
                        for (; a; ) (r !== a.index && u(e.slice(r, a.index)), n(a), (r = t.lastIndex), (a = t.exec(e)));
                        r !== e.length && u(e.slice(r));
                    },
                    Ja = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    Qa = (e) => {
                        const t = [];
                        return (
                            Ya(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((u = e), u.match(Ja) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    er = Ha
                        ? (e) => {
                              const t = [];
                              return (
                                  Ya(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...Qa(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const s = t.justifyContent === Ia.FlexEnd ? n.index : u.lastIndex;
                                  (a.push(e.slice(r, s)), (r = s), (n = u.exec(e)));
                              }
                              return (r !== e.length && a.push(e.slice(r)), a);
                          },
                    tr = (e, t = '', u) => {
                        const n = [];
                        return (
                            Ya(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Ma.Word, colorTag: t, childList: er(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        a = $a[u.charAt(0)];
                                    a === Ma.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Ma.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: Ma.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: a, colorTag: t, childList: [u.replace(/\ufeff+/g, '')] });
                                },
                            ),
                            n
                        );
                    },
                    ur = (e, t, u = '', n) => {
                        const a = [],
                            r = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            Ya(
                                r,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...tr(e, u, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        s = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof s || 'number' == typeof s
                                        ? a.push(...tr(String(s), u, n))
                                        : a.push({ blockType: Ma.Binding, colorTag: u, childList: [s] });
                                },
                            ),
                            a
                        );
                    },
                    nr = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Ma.NoBreakWrapper) (e.childList.push(n), u.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && u.push(e),
                                u.push({ blockType: Ma.NoBreakWrapper, colorTag: '', childList: [t, n] }));
                        }
                        return (t.childList.length > 0 && u.push(t), u);
                    },
                    ar = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Ma.NoBreakSymbol
                                        ? ((u = !0), t.push(...nr(t.pop(), e)))
                                        : (u ? t.push(...nr(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    Ya(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...ur(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...ur(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })((0, bt.Eg)((0, bt.z4)(e)), t, u),
                        );
                        return Xa(n);
                    },
                    rr = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    sr = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    or = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = sr(e, t),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            s = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= u ? [!0, u + s] : [!1, n];
                        }
                        const o = Math.max(u + s, 0);
                        return a < o ? [!1, 0] : [!0, o];
                    },
                    ir = (e, t, u, n, a, r) => {
                        let s = -1,
                            i = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Ma.LineBreak || c === Ma.NewLine || c === Ma.Binding) continue;
                            const _ = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = or(u, n, a),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (a -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + r,
                                    p = t[l];
                                ((i = o().cloneElement(p, p.props, m)), (s = l));
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = ir(e, d, e.length - 1, n, a, r),
                                    p = m[0],
                                    E = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    ((i = o().cloneElement(c, c.props, e, E)), (s = l));
                                    break;
                                }
                                a -= _.length;
                            }
                        }
                        return [s, i];
                    },
                    lr = (e, t, u, n = '...') => {
                        const a = [...t],
                            r = e.current;
                        if (!r) return [a, !1];
                        const s = u.height,
                            o = u.width,
                            i = r.lastElementChild;
                        if (!rr(i, s) && sr(i, o) <= 0) return [a, !1];
                        const l = r.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const a = u + Math.ceil(0.5 * (n - u));
                                    rr(e[a], t) ? (n = a - 1) : (u = a + 1);
                                }
                                return u - 1;
                            })(l, s);
                        if (c < 0) return [a, !1];
                        const _ = ir(l, a, c, o, n.length, n),
                            d = _[0],
                            m = _[1];
                        return (m && (a.splice(d, 1, m), a.splice(d + 1)), [a, !0]);
                    },
                    cr = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: n,
                            isTooltipEnable: a = !1,
                            isTruncationAvailable: r = !1,
                            customTooltipArgs: i,
                            targetId: c,
                            justifyContent: _ = Ia.FlexStart,
                            alignContent: d = Ia.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const p = (0, s.useRef)(null),
                                E = (0, s.useRef)({ height: 0, width: 0 }),
                                g = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                b = g[0],
                                h = g[1],
                                A = (0, s.useMemo)(() => ar(e, n, { justifyContent: _ }), [n, _, e]),
                                C = (0, s.useMemo)(() => {
                                    if (
                                        a &&
                                        b.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, i, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: c,
                                        };
                                }, [n, a, c, e, i, b.isTruncated]),
                                v = (0, s.useCallback)(
                                    (e) => {
                                        ((E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height));
                                        const t = lr(p, A, E.current, m),
                                            n = t[0],
                                            a = t[1];
                                        (h({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a));
                                    },
                                    [u, m, A],
                                ),
                                f = (0, s.useMemo)(() => ({ justifyContent: _, alignContent: d }), [d, _]);
                            return (
                                ((e, t, u = !0) => {
                                    const n = (0, s.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, s.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new Ra.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, u, e]);
                                })(p, v, r),
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            Oa.base,
                                            t,
                                            Oa.base__zeroPadding,
                                            r && Oa.base__isTruncationAvailable,
                                        ),
                                        style: f,
                                    },
                                    o().createElement('div', { className: Oa.unTruncated, ref: p }, A),
                                    o().createElement(
                                        La,
                                        {
                                            tooltipArgs: C,
                                            className: l()(
                                                Oa.tooltip,
                                                Oa[`tooltip__justify-${_}`],
                                                Oa[`tooltip__align-${d}`],
                                            ),
                                        },
                                        o().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    Oa.truncated,
                                                    !b.isTruncateFinished && r && Oa.truncated__hide,
                                                ),
                                                style: f,
                                            },
                                            b.isTruncateFinished && r ? b.elementList : A,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    _r = {
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
                    dr = (e) => {
                        return (t = e) !== Ba.Empty &&
                            t in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
                            ? R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices.$dyn(e)
                            : null;
                        var t;
                    },
                    mr = (e) => {
                        const t = Number.isInteger(e) ? `${e}` : e.toFixed(2);
                        return (0, bt.dL)(t);
                    },
                    pr = ({ popularity: e, optionalDevice: t, isHovered: u }) => {
                        const n = (0, s.useMemo)(() => {
                                const e = t.map(dr);
                                return [...e, ...Array.from({ length: 3 - e.length }, () => null)];
                            }, [t]),
                            a = 0 === t.length;
                        return o().createElement(
                            'div',
                            { className: l()(_r.row, a && _r.row_empty) },
                            o().createElement(
                                'div',
                                { className: l()(_r.popularity, u && _r.popularity__visible) },
                                o().createElement(cr, { text: mr(e) }),
                            ),
                            o().createElement(
                                'div',
                                { className: l()(_r.row_images, u && _r.row_images__hovered) },
                                n.map((e, t) =>
                                    e
                                        ? o().createElement('img', { key: t, className: _r.row_image, src: e })
                                        : o().createElement('div', { key: t, className: _r.row_emptySlot }),
                                ),
                            ),
                        );
                    },
                    Er = (0, S.Pi)(({ isHidden: e = !1 }) => {
                        const t = (0, _u.t)(),
                            u = t.model,
                            n = t.controls,
                            a = (0, s.useState)(!0),
                            r = a[0],
                            i = a[1],
                            c = (0, s.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            m = (0, s.useState)(u.selectedPreset.get().mType || Ta.d.Common),
                            p = m[0],
                            E = m[1],
                            g = u.computes.getSortedCommonItems(),
                            b = u.computes.getSortedLegendaryItems(),
                            h = u.optionalDevicesAssistant.get().state,
                            A = h === ya.NotSuitableVehicle,
                            C = u.computes.getModeType() === ka.Comp7,
                            v = u.computes.getOptionalDevicesResultTypeForPreset(p),
                            f = u.computes.getSourceVehicleCompDescrForPreset(p),
                            D = () => {
                                const e = p === Ta.d.Common ? Ta.d.Legendary : Ta.d.Common;
                                (E(e), n.onPresetSelected(e));
                            },
                            F = p === Ta.d.Common ? g : b,
                            B =
                                p === Ta.d.Common
                                    ? R.strings.tank_setup.popularLoadouts.common()
                                    : R.strings.tank_setup.popularLoadouts.legendary(),
                            y = v === Sa.Linked,
                            w = v === Sa.NoData && Ta.d.Legendary,
                            S = h === ya.NoDataAtAll,
                            k = v === Sa.Combined,
                            T = _ && !k,
                            x = y || k,
                            N = jn(),
                            L = (0, s.useRef)(null),
                            O = (0, s.useCallback)(() => {
                                var e;
                                const t = null == (e = L.current) ? void 0 : e.getBoundingClientRect();
                                return t ? `${t.width},${t.height}` : null;
                            }, []);
                        wa(
                            O,
                            () => {
                                N.recalculateContent();
                                const e = N.getContainerSize() || 0,
                                    t = N.getWrapperSize() || 0;
                                i(e > t);
                            },
                            { intervalMs: 50, minStableTicks: 8, listenResize: !0 },
                            [],
                        );
                        const M = (0, s.useMemo)(
                            () =>
                                Array.from({ length: 3 }, (e, t) => {
                                    var u;
                                    return null != (u = F[t]) ? u : { popularity: 0, items: [] };
                                }),
                            [F],
                        );
                        return o().createElement(
                            'div',
                            {
                                className: l()(
                                    _r.base,
                                    e && _r.base__hidden,
                                    p === Ta.d.Legendary && _r.base__legendary,
                                    x && _r.base__linked,
                                    w && _r.base__noDataLegendary,
                                ),
                            },
                            o().createElement('div', {
                                className: l()(_r.backgroundWrapper, { [_r.backgroundWrapper__noData]: S || A }),
                            }),
                            A
                                ? o().createElement(
                                      'div',
                                      { className: _r.vehicleNotAvailable },
                                      o().createElement(
                                          'div',
                                          { className: _r.vehicleNotAvailable_text },
                                          R.strings.tank_setup.popularLoadouts.vehicleNotAvailable(),
                                      ),
                                  )
                                : S
                                  ? o().createElement(
                                        'div',
                                        { className: _r.noData },
                                        o().createElement(
                                            'div',
                                            { className: _r.noData_text },
                                            R.strings.tank_setup.popularLoadouts.noData(),
                                        ),
                                    )
                                  : o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', {
                                            className: l()([_r.border, r && _r.border_visible]),
                                        }),
                                        w &&
                                            o().createElement(
                                                'div',
                                                { className: _r.noDataLegendary },
                                                R.strings.tank_setup.popularLoadouts.noDataLegendary(),
                                            ),
                                        o().createElement(
                                            'div',
                                            { className: _r.scrollWrapper },
                                            o().createElement(
                                                sa.Vertical.Default,
                                                { api: N, className: _r.scroll },
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className: _r.container,
                                                        ref: L,
                                                        onMouseEnter: () => d(!0),
                                                        onMouseLeave: () => d(!1),
                                                    },
                                                    M.map((e, t) =>
                                                        o().createElement(pr, {
                                                            key: t,
                                                            popularity: e.popularity,
                                                            optionalDevice: e.items,
                                                            isHovered: T,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                            o().createElement('div', { className: _r.background }),
                                            C && o().createElement('div', { className: _r.onslaughtBackground }),
                                        ),
                                        o().createElement('div', { className: _r.border }),
                                        o().createElement('div', { className: _r.lips }),
                                        o().createElement(
                                            'div',
                                            { className: _r.footer },
                                            o().createElement(
                                                'div',
                                                {
                                                    className: _r.footer_arrowWrapper,
                                                    onMouseEnter: () => {
                                                        (0, xa.playSound)('highlight');
                                                    },
                                                    onClick: () => {
                                                        (0, xa.playSound)('play');
                                                    },
                                                },
                                                o().createElement('div', {
                                                    className: _r.footer_arrowLeft,
                                                    onClick: D,
                                                }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: _r.footer_wrapper },
                                                o().createElement(
                                                    Ce.u,
                                                    {
                                                        contentId:
                                                            R.views.lobby.tanksetup.tooltips.PopularLoadoutsTooltip(
                                                                'resId',
                                                            ),
                                                        args: {
                                                            sourceVehicleCompDescr: f,
                                                            optionalDevicesResultType: v,
                                                        },
                                                    },
                                                    o().createElement(
                                                        'div',
                                                        null,
                                                        o().createElement('div', { className: _r.lipsIcon }),
                                                        o().createElement(
                                                            'div',
                                                            { className: _r.footer_wrapper_title },
                                                            B,
                                                        ),
                                                    ),
                                                ),
                                                o().createElement(
                                                    'div',
                                                    { className: _r.footer_wrapper_pagination },
                                                    o().createElement('div', {
                                                        className: l()(_r.dot1, 0 === p && _r.dot1__active),
                                                    }),
                                                    o().createElement('div', {
                                                        className: l()(_r.dot2, 1 === p && _r.dot2__active),
                                                    }),
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                {
                                                    className: _r.footer_arrowWrapper,
                                                    onMouseEnter: () => {
                                                        (0, xa.playSound)('highlight');
                                                    },
                                                    onClick: () => {
                                                        (0, xa.playSound)('play');
                                                    },
                                                },
                                                o().createElement('div', {
                                                    className: _r.footer_arrowRight,
                                                    onClick: D,
                                                }),
                                            ),
                                        ),
                                    ),
                        );
                    });
                var gr = u(9690);
                const br = (e, t) => e.split(',').includes(t),
                    hr = {
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
                let Ar, Cr;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(Ar || (Ar = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(Cr || (Cr = {})));
                const vr = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: u,
                        vehicleType: n,
                        vehicleLvl: a,
                        tags: r = '',
                        size: s = Ar.extraSmall,
                        type: i = Cr.colored,
                        className: c,
                        classNames: _,
                        isShortName: d = !1,
                    }) => {
                        const m = `${(0, bt.BN)(n)}${e ? '_elite' : ''}`,
                            p = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return o().createElement(
                            'div',
                            {
                                className: l()(
                                    hr.base,
                                    hr[`base__size${(0, bt.e)(s)}`],
                                    hr[`base__type${(0, bt.e)(i)}`],
                                    c,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: l()(hr.level, null == _ ? void 0 : _.level) },
                                (0, gr.HG)(a),
                            ),
                            o().createElement('div', {
                                className: l()(
                                    hr.type,
                                    e && hr[`type__elite${(0, bt.e)(s)}`],
                                    hr[`type__${s}`],
                                    null == _ ? void 0 : _.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${p})` } : void 0,
                            }),
                            br(r, 'premiumIGR') && o().createElement('div', { className: hr.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: l()(hr.name, null == _ ? void 0 : _.name) },
                                d ? u : t,
                            ),
                        );
                    },
                    fr = {
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                    },
                    Dr = (0, S.Pi)(() => {
                        const e = (0, _u.t)().model.vehicleInfo.get(),
                            t = (0, I.GS)();
                        return o().createElement(
                            'div',
                            { className: l()(fr.base, t && fr[`base__${t}`]) },
                            o().createElement(vr, e),
                        );
                    }),
                    Fr = 'RightSideTankParameters_tankNamePosition_b3',
                    Br = 'RightSideTankParameters_popularLoadoutsPosition_04',
                    yr = (0, S.Pi)(({ arePopularLoadoutsHidden: e }) => {
                        const t = (0, _u.t)(),
                            u = t.controls,
                            n = t.model,
                            a = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            i = n.optionalDevicesAssistant.get().state === ya.Hidden,
                            l = !i,
                            c = (0, s.useCallback)(() => {
                                var e, t;
                                const u = null == (e = a.current) ? void 0 : e.getBoundingClientRect(),
                                    n = null == (t = r.current) ? void 0 : t.getBoundingClientRect();
                                return u && n ? `${u.left}-${u.width}-${n.top}` : null;
                            }, [a, r]),
                            _ = (0, s.useCallback)(() => {
                                if (!a.current || !r.current) return;
                                const e = a.current.getBoundingClientRect(),
                                    t = r.current.getBoundingClientRect(),
                                    n = {
                                        width: En.O.view.pxToRem(e.width),
                                        height: En.O.view.pxToRem(e.height),
                                        offsetX: En.O.view.pxToRem(e.left),
                                        offsetY: En.O.view.pxToRem(e.top),
                                        bottomMargin: Math.round(En.O.view.pxToRem(window.outerHeight - t.top)),
                                    };
                                (window.tutorialApi.updateComponents(), n.offsetX && n.width && u.resized(n));
                            }, [u]);
                        return (
                            wa(c, _, { intervalMs: 50, minStableTicks: 8, listenResize: !0 }, [i]),
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement('div', { className: Fr, ref: a }, o().createElement(Dr, null)),
                                o().createElement(
                                    'div',
                                    { className: Br, ref: r },
                                    l && o().createElement(Er, { isHidden: e }),
                                ),
                            )
                        );
                    });
                var wr = u(5096),
                    Sr = u(8613);
                (Date.now(), Sr.Ew.getRegionalDateTime, Sr.Ew.getFormattedDateTime);
                const kr = (e, t) => {
                        const u = (0, s.useRef)();
                        return (
                            (0, s.useEffect)(() => {
                                (t && !t(e)) || (u.current = e);
                            }, [t, e]),
                            u.current
                        );
                    },
                    Tr = (te.Sw.instance, kr);
                var xr = u(2558);
                const Nr = 200;
                let Lr;
                !(function (e) {
                    ((e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount'));
                })(Lr || (Lr = {}));
                const Rr = {
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
                    Or = (0, S.Pi)(
                        ({
                            children: e,
                            index: t,
                            mediaSize: u,
                            leftID: n,
                            rightID: a,
                            uniqueKey: r,
                            onTransitionEnd: i,
                        }) => {
                            const c = Tr(r),
                                _ = u === I.cJ.Tiny,
                                d = n === t,
                                m = c && c !== r,
                                p = (0, s.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                E = (0, s.useMemo)(() => ((a - n > 1 && _) || !m ? 'Fade' : ''), [m, n, a, _]),
                                g = (0, s.useCallback)(
                                    (e) =>
                                        o().cloneElement(e, {
                                            classNames: {
                                                enterActive: Rr.base__enter,
                                                enterDone: Rr[`base__enter${p}${E}`],
                                                exit: Rr[`base__exit${p}${E}`],
                                                exitActive: Rr.base__exitActive,
                                            },
                                        }),
                                    [p, E],
                                ),
                                b = (0, s.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            ((e.className = ''), i && i());
                                        }, Nr);
                                    },
                                    [i],
                                ),
                                h = (0, s.useMemo)(() => ({ animationDuration: '200ms' }), []);
                            return o().createElement(
                                xr.Z,
                                { component: null, childFactory: g },
                                o().createElement(
                                    ba.Z,
                                    { key: r, timeout: Nr, onEntered: b },
                                    o().createElement(
                                        'div',
                                        { className: l()(Rr.base, Rr[`base__${u}`]), style: h },
                                        e,
                                    ),
                                ),
                            );
                        },
                    );
                var Mr = u(2094);
                const Ir = {
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
                    Pr = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    $r = (0, S.Pi)(({ shellID: e, specificationID: t }) => {
                        const u = (0, I.GS)(),
                            n = u === I.cJ.Tiny,
                            a = (0, _u.t)().model.computes.shells.specification(e, t),
                            r = a.paramName,
                            i = a.value,
                            c = a.metricValue,
                            _ = (0, s.useMemo)(() => {
                                if ('avgPiercingPower' === r) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [r]);
                        return 'avgPiercingPower' === r || (!n && i)
                            ? o().createElement(
                                  'div',
                                  { className: l()(Pr.base, u && Pr[`base__${u}`]) },
                                  n
                                      ? o().createElement(
                                            o().Fragment,
                                            null,
                                            R.strings.menu.tank_params.shortened.$dyn(r),
                                            ' ',
                                            o().createElement(
                                                'div',
                                                { className: Pr.value },
                                                i || o().createElement('span', null, '—'),
                                            ),
                                            o().createElement('div', { className: Pr.units }, _),
                                        )
                                      : o().createElement(
                                            o().Fragment,
                                            null,
                                            R.strings.menu.tank_params.$dyn(r),
                                            o().createElement('div', { className: Pr.units }, c),
                                            o().createElement('div', {
                                                className: l()(Pr.separator, u && Pr[`separator__${u}`]),
                                            }),
                                            o().createElement(
                                                'div',
                                                { className: Pr.value },
                                                i || o().createElement('span', null, '—'),
                                            ),
                                        ),
                              )
                            : null;
                    }),
                    Hr = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                var zr = u(7405),
                    jr = u(329);
                const Wr = {
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
                function Gr() {
                    return (
                        (Gr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Gr.apply(this, arguments)
                    );
                }
                const Ur = R.strings.tank_setup.shells,
                    Vr = (0, S.Pi)(({ id: e }) => {
                        const t = (0, I.GS)(),
                            u = t === I.cJ.Tiny,
                            n = (0, _u.t)().model,
                            a = n.computes.shells.shell(e),
                            r = a.buyCount,
                            i = a.itemsInStorage,
                            c = a.itemsInVehicle,
                            _ = a.totalPrice,
                            d = a.price,
                            m = n.computes.shells.defPriceLength(e),
                            p = n.computes.shells.priceLength(e) ? n.computes.shells.price(e, 0) : null,
                            E = m ? n.computes.shells.defPrice(e, 0) : null,
                            g = (0, s.useMemo)(() => Ur[u ? 'shortSpecification' : 'specification'].inStorage(), [u]),
                            b = (0, s.useMemo)(() => Ur[u ? 'shortSpecification' : 'specification'].inVehicle(), [u]),
                            h = (0, s.useMemo)(() => Ur[u ? 'shortSpecification' : 'specification'].price(), [u]),
                            A = c >= 0,
                            C = m > 0,
                            v = (0, s.useMemo)(
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
                            { className: l()(Wr.base, t && Wr[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: l()(Wr.row, t && Wr[`row__${t}`]) },
                                o().createElement(
                                    'div',
                                    { className: Wr.rowItem },
                                    o().createElement('div', { className: l()(Wr.total, t && Wr[`total__${t}`]) }, g),
                                    o().createElement(
                                        'div',
                                        { className: l()(Wr.lowResolutionValue, t && Wr[`lowResolutionValue__${t}`]) },
                                        o().createElement('span', { className: Wr.indent }),
                                        i,
                                    ),
                                ),
                                A &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('span', { className: Wr.divider }, '/'),
                                        o().createElement(
                                            'div',
                                            { className: Wr.rowItem },
                                            o().createElement(
                                                'div',
                                                { className: l()(Wr.total, t && Wr[`total__${t}`]) },
                                                o().createElement(
                                                    'div',
                                                    { className: l()(Wr.colored, t && Wr[`colored__${t}`]) },
                                                    b,
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                {
                                                    className: l()(
                                                        Wr.lowResolutionValue,
                                                        t && Wr[`lowResolutionValue__${t}`],
                                                    ),
                                                },
                                                o().createElement('span', { className: Wr.indent }),
                                                c,
                                            ),
                                        ),
                                    ),
                                o().createElement('div', { className: l()(Wr.separator, t && Wr[`separator__${t}`]) }),
                                o().createElement(
                                    'div',
                                    { className: l()(Wr.hiResolutionValue, t && Wr[`hiResolutionValue__${t}`]) },
                                    i,
                                    A &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement('span', { className: Wr.divider }, '/'),
                                            o().createElement(
                                                'div',
                                                { className: l()(Wr.colored, t && Wr[`colored__${t}`]) },
                                                c,
                                            ),
                                        ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: l()(Wr.row, t && Wr[`row__${t}`]) },
                                o().createElement('div', { className: l()(Wr.total, t && Wr[`total__${t}`]) }, h),
                                o().createElement('div', { className: l()(Wr.separator, t && Wr[`separator__${t}`]) }),
                                o().createElement(
                                    'div',
                                    { className: Wr.value },
                                    o().createElement(
                                        'div',
                                        { className: Wr.overall },
                                        '(',
                                        o().createElement('span', null, r),
                                        ' ×',
                                        o().createElement(
                                            cu.t,
                                            { args: v, isEnabled: C },
                                            o().createElement(
                                                'span',
                                                { className: Wr.price },
                                                o().createElement(Te.t, Gr({ showZero: !0 }, d)),
                                            ),
                                        ),
                                        ')',
                                        o().createElement(
                                            'span',
                                            { className: l()(Wr.price, Wr.price__final) },
                                            r
                                                ? o().createElement(Te.t, Gr({ showZero: !0, ignoreDiscount: !0 }, _))
                                                : o().createElement(zr.F, {
                                                      size: jr.et.small,
                                                      type: jr.V2.credits,
                                                      value: 0,
                                                  }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Zr = (0, S.Pi)(({ id: e }) => {
                        const t = (0, I.GS)(),
                            u = (0, _u.t)().model.computes.shells.specificationsLength(e);
                        return o().createElement(
                            'div',
                            { className: l()(Hr.base, t && Hr[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: Hr.overall },
                                M(u, (t) =>
                                    o().createElement(
                                        s.Fragment,
                                        { key: t },
                                        o().createElement($r, { shellID: e, specificationID: t }),
                                    ),
                                ),
                            ),
                            o().createElement('div', { className: Hr.total }, o().createElement(Vr, { id: e })),
                        );
                    }),
                    qr = R.images.gui.maps.icons.shell,
                    Kr = (0, S.Pi)(({ id: e }) => {
                        const t = (0, I.GS)(),
                            u = (0, _u.t)(),
                            n = u.model,
                            a = u.controls,
                            r = n.computes.shells.shell(e),
                            i = r.count,
                            c = r.type,
                            _ = r.intCD,
                            d = r.imageName,
                            m = r.installedSlotId,
                            p = r.itemInstalledSetupIdx,
                            E = r.itemInstalledSetupSlotIdx,
                            g = r.isMountedMoreThanOne,
                            b = n.shellsSetup.get(),
                            h = b.installedCount,
                            A = b.maxCount,
                            C = b.clipCount,
                            v = A - h + i,
                            f = (0, s.useCallback)(
                                (e) => {
                                    a.shells.updateSlot && a.shells.updateSlot({ intCD: _, newCount: e });
                                },
                                [a, _],
                            ),
                            D = (0, s.useMemo)(() => {
                                const e = { slotType: T.g9, fieldType: 0, intCD: _ };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: E,
                                        isMountedMoreThanOne: g,
                                    }),
                                ];
                            }, [_, m, p, E, g]),
                            F = D[0],
                            B = D[1],
                            y = (0, s.useMemo)(() => {
                                const e = ((e) => {
                                    switch (e) {
                                        case I.cJ.Huge:
                                        case I.cJ.Large:
                                            return qr.large;
                                        default:
                                            return qr.big;
                                    }
                                })(t);
                                return { backgroundImage: `url(${e ? e.$dyn(d) : ''})` };
                            }, [d, t]),
                            w = R.strings.item_types.shell.kinds.$dyn(c),
                            S = systemLocale.toUpperCase(w);
                        return o().createElement(
                            'div',
                            { className: l()(Ir.base, t && Ir[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: Ir.shell },
                                o().createElement(
                                    re,
                                    { args: B },
                                    o().createElement(
                                        cu.t,
                                        { args: F },
                                        o().createElement(
                                            'div',
                                            { className: Ir.icon, style: y },
                                            o().createElement(
                                                'div',
                                                { className: l()(Ir.count, !i && Ir.count__zero) },
                                                i,
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement('div', { className: Ir.name }, S),
                            ),
                            o().createElement(
                                'div',
                                { className: Ir.ammunition },
                                o().createElement(Mr.i, {
                                    parentId: `${_}-slider`,
                                    currentValue: i,
                                    maximum: A,
                                    sliderMaximum: v,
                                    onUpdates: f,
                                    stepCount: C,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: Ir.specifications },
                                o().createElement(Zr, { id: e }),
                            ),
                        );
                    }),
                    Xr = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    Yr = ({ id: e, onSwap: t, mediaSize: u, hoverSound: n = 'highlight', clickSound: a = 'play' }) => {
                        const r = (0, s.useCallback)(() => {
                                (a && (0, ee.G)(a), t(e));
                            }, [e, t, a]),
                            i = (0, s.useCallback)(() => {
                                n && (0, ee.G)(n);
                            }, [n]);
                        return o().createElement('div', {
                            id: `swap-${e}`,
                            onClick: r,
                            onMouseEnter: i,
                            className: l()(Xr.base, Xr[`base__${u}`]),
                        });
                    },
                    Jr = {
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
                    Qr = (0, S.Pi)(({ id: e, onTransitionEnd: t, onSwap: u, leftID: n, rightID: a }) => {
                        const r = (0, I.GS)(),
                            s = (0, _u.t)().model,
                            i = s.computes.shells.length(),
                            c = s.computes.shells.shell(e).intCD;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                Or,
                                { index: e, uniqueKey: c, leftID: n, rightID: a, mediaSize: r, onTransitionEnd: t },
                                o().createElement(
                                    'div',
                                    { className: l()(Jr.base, r && Jr[`base__${r}`]) },
                                    o().createElement(Kr, { id: e }),
                                ),
                            ),
                            e !== i - 1 &&
                                o().createElement(
                                    'div',
                                    { className: l()(Jr.swap, r && Jr[`swap__${r}`]) },
                                    o().createElement(Yr, { id: e, mediaSize: r, onSwap: u }),
                                ),
                        );
                    }),
                    es = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        base__large: 'Sections_base__large_d0',
                    },
                    ts = (0, S.Pi)(() => {
                        const e = (0, _u.t)(),
                            t = e.model,
                            u = e.controls,
                            n = t.computes.shells.length(),
                            a = (0, s.useState)(!1),
                            r = a[0],
                            i = a[1],
                            c = (0, I.GS)(),
                            _ = t.computes.shells.ids(),
                            d = Tr(_),
                            m = (0, s.useMemo)(() => {
                                const e = _.filter((e, t) => {
                                    if (d && d[t] !== e) return !0;
                                });
                                return e.length > 1
                                    ? { leftID: _.indexOf(e[0]), rightID: _.indexOf(e[1]) }
                                    : { leftID: -1, rightID: -1 };
                            }, [_, d]),
                            p = m.leftID,
                            E = m.rightID,
                            g = (0, s.useCallback)(
                                (e) => {
                                    (r || u.shells.actSlot({ actionType: z, leftID: e, rightID: e + 1 }), i(!0));
                                },
                                [u, r],
                            ),
                            b = (0, s.useCallback)(() => {
                                i(!1);
                            }, [i]);
                        return o().createElement(
                            'div',
                            { className: l()(es.base, es[`base__${c}`]) },
                            M(n, (e) =>
                                o().createElement(Qr, {
                                    id: e,
                                    onTransitionEnd: b,
                                    onSwap: g,
                                    leftID: p,
                                    rightID: E,
                                    key: `shell-container-${e}`,
                                }),
                            ),
                        );
                    }),
                    us = (0, S.Pi)(() => {
                        const e = (0, I.GS)(),
                            t = (0, _u.t)().controls;
                        return o().createElement(I.Ar, {
                            header: o().createElement(
                                mn,
                                { title: R.strings.tank_setup.section.shells() },
                                o().createElement(wr.k, { isShortened: !0 }),
                            ),
                            content: o().createElement(ts, null),
                            footer: o().createElement(O.w, {
                                withConfirmation: !0,
                                renewalType: L.my.Shells,
                                parentModelPath: 'model.tankSetup.shellsSetup',
                                mediaSize: e,
                                onDealConfirmed: t.shells.confirmDeal,
                                onDealCancelled: t.shells.cancelDeal,
                                onAutoRenewalChanged: t.shells.changeAutoRenewal,
                            }),
                        });
                    }),
                    ns = {
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
                    as = [T.zn, T.g9, T.mH, T.G$],
                    rs = (e, t) => (t === e ? '' : as.indexOf(t) > as.indexOf(e) ? 'right' : 'left'),
                    ss = ({ children: e, selectedSetup: t }) => {
                        const u = o().createRef(),
                            n = (0, s.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            a = (0, s.useMemo)(() => {
                                const e = rs(n.current.selectedSetup, t);
                                return { enter: ns[`base__${e}Enter`] };
                            }, [t]),
                            r = (0, s.useCallback)(
                                (e) => {
                                    const a = rs(n.current.selectedSetup, t);
                                    ((e.className = l()(ns.base, ns.base__exit)),
                                        e.classList.add(ns[`base__${a}Exit`]),
                                        (n.current.animatedElements[t] = u));
                                    (Object.values(n.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(ns.base__previous);
                                    }),
                                        u.current && u.current.classList.add(ns.base__previous));
                                },
                                [u, t],
                            ),
                            i = (0, s.useCallback)(
                                (e) => {
                                    const u = rs(n.current.previousSelectedSetup, t);
                                    ((e.className = ns.base), e.classList.add(ns[`base__${u}Enter`]));
                                },
                                [t],
                            ),
                            c = (0, s.useCallback)(
                                (e) => {
                                    const u = rs(n.current.previousSelectedSetup, t);
                                    e.classList.add(ns[`base__${u}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, s.cloneElement)(e);
                        return (
                            (n.current.previousSelectedSetup = n.current.selectedSetup),
                            (n.current.selectedSetup = t),
                            o().createElement(
                                xr.Z,
                                null,
                                o().createElement(
                                    ba.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: a,
                                        onExit: r,
                                        onEnter: i,
                                        onEntering: c,
                                    },
                                    o().createElement('div', { className: ns.base, ref: u }, _),
                                ),
                            )
                        );
                    },
                    os = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = N().model.tankSetup.get().selectedSetup;
                        return o().createElement(
                            s.Fragment,
                            null,
                            o().createElement(
                                ss,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case T.zn:
                                            return o().createElement(Fa, { compare: e });
                                        case T.g9:
                                            return o().createElement(us, null);
                                        case T.mH:
                                            return o().createElement(pa, { compare: e });
                                        case T.G$:
                                            return o().createElement(ma, { compare: e });
                                        default:
                                            return o().createElement(Fa, { compare: e });
                                    }
                                })(),
                            ),
                            !e && o().createElement(yr, { arePopularLoadoutsHidden: t !== T.zn }),
                        );
                    }),
                    is = (0, S.Pi)(() => {
                        const e = ft(),
                            t = e.model,
                            u = e.controls,
                            n = t.root.get().show;
                        return (
                            (0, s.useEffect)(() => (0, w.v)(u.viewRendered), [u]),
                            o().createElement(
                                x.Provider,
                                { value: e },
                                o().createElement(
                                    k.Sf,
                                    {
                                        onClose: u.close,
                                        backgroundImage: R.images.gui.maps.icons.lobby.settings_blured_bg(),
                                        type: 'compare',
                                        show: n,
                                        onAnimationDone: u.animationEnded,
                                    },
                                    o().createElement(os, { compare: !0 }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    y().render(
                        o().createElement(vt, null, o().createElement(F, null, o().createElement(is, null))),
                        document.getElementById('root'),
                    );
                });
            },
            8774: (e, t, u) => {
                'use strict';
                u.d(t, { a: () => v });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3457),
                    s = u(2106),
                    o = u(6373),
                    i = u(7363),
                    l = u.n(i);
                const c = 'Action_base_bf',
                    _ = 'Action_base__hidden_4b',
                    d = 'Action_base__shown_9f',
                    m = 'Action_base__cut_26',
                    p = 'Action_action_b5',
                    E = 'Action_image_e9',
                    g = 'Action_button_74',
                    b = R.strings.tank_setup.tooltips.action,
                    h = ['cancel', 'undo'],
                    A = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`);
                var C;
                !(function (e) {
                    ((e.Hidden = 'hidden'), (e.FadeOut = 'fadeOut'), (e.Visible = 'visible'), (e.FadeIn = 'fadeIn'));
                })(C || (C = {}));
                const v = ({
                    parentId: e,
                    actionType: t,
                    imageSource: u = '',
                    show: n = !1,
                    disabled: v = !1,
                    disabledTooltipText: f,
                    tooltipBodyPath: D,
                    buttonType: F = s.L.primary,
                    isModernized: B,
                    isFreeToDemount: y,
                    level: w,
                    onClick: S,
                }) => {
                    const k = (0, i.useRef)(null),
                        T = (0, i.useRef)(C.Hidden),
                        x = (0, i.useRef)(!1),
                        N = (0, i.useState)(!n),
                        L = N[0],
                        O = N[1],
                        M = (0, i.useState)(!1),
                        I = M[0],
                        P = M[1],
                        $ = (0, i.useState)(),
                        H = $[0],
                        z = $[1],
                        j = (0, i.useCallback)(() => {
                            const e = T.current;
                            e === C.FadeIn
                                ? ((T.current = C.Hidden), O(!0))
                                : e === C.FadeOut && (T.current = C.Visible);
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
                                (n ? ((T.current = C.FadeOut), O(!1)) : (T.current = C.FadeIn), (x.current = n));
                        }, [n]),
                        (0, i.useEffect)(() => {
                            if (I) {
                                const e = setTimeout(() => P(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [I]),
                        (0, i.useEffect)(() => () => H && clearTimeout(H), [H]));
                    const W = (0, i.useCallback)(() => {
                            I || (P(!0), T.current === C.Visible && z(setTimeout(() => S(t), 200)));
                        }, [t, S, I]),
                        G = B ? A(t, w) : t,
                        U = (0, i.useMemo)(() => {
                            if (v) return { body: f, isEnabled: Boolean(f) };
                            const e = ((e, t, u, n) => (u ? 'demount_plus' : n ? A(e, t) : e))(t, w, y, B);
                            return {
                                header: b.title.$dyn(e),
                                body: h.includes(e) ? void 0 : b.description.$dyn(D || e),
                            };
                        }, [t, v, f, y, B, w, D]),
                        V = (0, i.useMemo)(
                            () => ({
                                backgroundImage: `url(${u || R.images.gui.maps.icons.tanksetup.actions.$dyn(G)})`,
                            }),
                            [G, u],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: a()(c, n ? d : _, L && m) },
                        l().createElement(
                            o.i,
                            U,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    r.u5,
                                    { onClick: W, type: F, mixClass: g, disabled: v },
                                    l().createElement('div', { className: E, style: V }),
                                ),
                            ),
                        ),
                    );
                };
            },
            8586: (e, t, u) => {
                'use strict';
                u.d(t, { h: () => h });
                var n = u(7363),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    o = u(3457),
                    i = u(6373);
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
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const g = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: u,
                    callback: r,
                    withToggle: l = !1,
                    toggle: g,
                    buttonProps: b,
                }) => {
                    const h = (0, n.useCallback)(() => {
                            r(t, g);
                        }, [t, r, g]),
                        A = (0, n.useMemo)(() => {
                            if (l) {
                                const t = s()(m, g && p);
                                return a().createElement(
                                    'div',
                                    { className: c },
                                    a().createElement('div', { className: _ }),
                                    g && a().createElement('div', { className: d }),
                                    a().createElement('div', { className: t }),
                                    e,
                                );
                            }
                            return e;
                        }, [l, e, g]);
                    return a().createElement(i.i, u, a().createElement(o.u5, E({}, b, { onClick: h }), A));
                };
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const h = ({ ctaConfigs: e }) =>
                    a().createElement(
                        'div',
                        { className: l },
                        e.map((e) => a().createElement(g, b({ key: e.ctaType }, e))),
                    );
            },
            5310: (e, t, u) => {
                'use strict';
                u.d(t, { f: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(9916),
                    s = u(7363),
                    o = u.n(s),
                    i = u(2558),
                    l = u(8934),
                    c = u(8529);
                const _ = ({ children: e, when: t, canAccept: u }) => {
                    const n = (0, s.useCallback)((e, t) => {
                            (0, r.Eu)().then(() => {
                                ((e.className = ''), e.classList.add(c.Z.base), e.classList.add(t));
                            });
                        }, []),
                        _ = (0, s.useCallback)(
                            (e) => {
                                n(e, c.Z.base__enter);
                            },
                            [n],
                        ),
                        d = (0, s.useCallback)(
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
                                  { in: u, timeout: 500, onEnter: _, onExit: d, key: `index-${u}` },
                                  o().createElement('div', { className: a()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : o().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, t, u) => {
                'use strict';
                u.d(t, { my: () => A, sF: () => f });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6373),
                    s = u(9480),
                    o = u(3403),
                    i = u(7363),
                    l = u.n(i),
                    c = u(1922),
                    _ = u(6391),
                    d = u(5310),
                    m = u(5851),
                    p = u(2306),
                    E = u(7198),
                    g = u(5178),
                    b = u(6826),
                    h = u(628);
                let A, C;
                (!(function (e) {
                    ((e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair'));
                })(A || (A = {})),
                    (function (e) {
                        ((e.Column = 'column'), (e.Row = 'row'));
                    })(C || (C = {})));
                const v = R.strings.tank_setup.dealPanel,
                    f = (0, o.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: u = c.cJ.Medium,
                            panelType: n = C.Row,
                            priceLabel: o = v.toBePaid(),
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
                            const T = (0, g.t)(),
                                x = T.model,
                                N = (0, i.useRef)(null),
                                L = u === c.cJ.Tiny || u === c.cJ.Small,
                                R = x.totalItemsInstalled.get(),
                                O = Boolean(x.totalItemsInStorage.get()),
                                M = Boolean(x.demountKitsCount.get()),
                                I = s.G(x.price.get(), (e) => e.value > 0) || M,
                                P = L && O && I && S;
                            return l().createElement(
                                p.h.Provider,
                                { value: T },
                                l().createElement(
                                    'div',
                                    {
                                        className: a()(
                                            h.Z.base,
                                            u && h.Z[`base__${u}`],
                                            e && h.Z.base__renewal,
                                            n !== C.Row && h.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        l().createElement(
                                            'div',
                                            { className: a()(h.Z.renewal, n !== C.Row && h.Z.renewal__dialog) },
                                            l().createElement(m.Y, { renewType: e, onValueChanged: f, label: A }),
                                        ),
                                    l().createElement(
                                        d.f,
                                        { when: n === C.Row, canAccept: x.canAccept.get() },
                                        l().createElement(
                                            l().Fragment,
                                            null,
                                            Boolean(R) &&
                                                l().createElement(
                                                    r.i,
                                                    { body: v.tooltip.fromVehicle(), isEnabled: L },
                                                    l().createElement(
                                                        'div',
                                                        { className: a()(h.Z.storage, u && h.Z[`storage__${u}`]) },
                                                        !L &&
                                                            l().createElement(
                                                                'div',
                                                                { className: h.Z.from },
                                                                v.fromVehicle(),
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
                                                    r.i,
                                                    { body: v.tooltip.fromStorage(), isEnabled: L },
                                                    l().createElement(
                                                        'div',
                                                        { className: a()(h.Z.storage, u && h.Z[`storage__${u}`]) },
                                                        !L &&
                                                            l().createElement(
                                                                'div',
                                                                { className: h.Z.from },
                                                                v.fromStorage(),
                                                            ),
                                                        l().createElement(_.Y, {
                                                            location: 'storage',
                                                            count: x.totalItemsInStorage.get(),
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            P && l().createElement('div', { className: h.Z.plus }),
                                            I &&
                                                l().createElement(
                                                    'div',
                                                    { className: a()(h.Z.totalPrice, P && h.Z.totalPrice__mixed, k) },
                                                    l().createElement(b.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: o,
                                                        messageHidden: L && n === C.Row,
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
            5851: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => c });
                var n = u(2262),
                    a = u(6373),
                    r = u(3403),
                    s = u(7363),
                    o = u.n(s),
                    i = u(8175),
                    l = u(2306);
                const c = (0, r.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: t,
                        renewType: u = i.my.General,
                    }) => {
                        const r = (0, l.o)(),
                            c = r.model,
                            _ = r.controls,
                            d = c.dealPanel.get().isAutoRenewalEnabled,
                            m = (0, s.useCallback)(() => {
                                (_.changeAutoRenewal(!d), t && t(!d));
                            }, [_, d, t]),
                            p = (0, s.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    t = e.header.$dyn(u),
                                    n = u === i.my.General ? '' : e.body.$dyn(u);
                                return { header: String(t || e.header.general()), body: n ? String(n) : void 0 };
                            }, [u]);
                        return o().createElement(
                            a.i,
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
            1957: (e, t, u) => {
                'use strict';
                u.d(t, { p: () => o });
                var n = u(3457),
                    a = u(7363),
                    r = u.n(a),
                    s = u(2527);
                const o = r().memo(({ applyBtnString: e, isDisabled: t, onConfirm: u, confirmButtonRef: a }) =>
                    r().createElement(
                        'div',
                        { ref: a, className: s.Z.base, id: 'deal-panel-confirm' },
                        r().createElement(
                            n.u5,
                            { size: n.qE.medium, disabled: t, onClick: () => u && u() },
                            R.strings.tank_setup.dealPanel.button.$dyn(e),
                        ),
                    ),
                );
            },
            7198: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var n = u(3457),
                    a = u(6373),
                    r = u(7383),
                    s = u(7363),
                    o = u.n(s),
                    i = u(1957),
                    l = u(8099);
                const c = o().memo(
                    ({
                        applyBtnString: e = r.YR,
                        isDisabled: t,
                        canCancel: u,
                        onCancel: s,
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
                                      a.i,
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
                                        disabled: !u,
                                        onClick: s,
                                    },
                                    d.button.cancel(),
                                ),
                            ),
                        );
                    },
                );
            },
            3755: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => l });
                var n = u(3403),
                    a = u(7363),
                    r = u.n(a),
                    s = u(8175),
                    o = u(5178);
                const i = ['parentModelPath'];
                const l = (0, n.Pi)((e) => {
                    let t = e.parentModelPath,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, i);
                    const n = `${t}.dealPanel`;
                    return r().createElement(o.k, { options: { context: n } }, r().createElement(s.sF, u));
                });
            },
            6826: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7363),
                    s = u.n(r),
                    o = u(9683),
                    i = u(8401),
                    l = u(5178),
                    c = u(1523);
                const _ = ({
                    parentId: e,
                    messageHidden: t,
                    ignoreDiscount: u,
                    discountTooltipEnabled: n,
                    priceLabel: r,
                    priceSeparator: _,
                }) => {
                    const d = (0, l.t)().model,
                        m = d.demountKitsCount.get();
                    return s().createElement(
                        'div',
                        { id: `${e}-total-price`, className: c.Z.base },
                        s().createElement('div', { className: a()(c.Z.message, t && c.Z.message__hidden) }, r),
                        Boolean(m) &&
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(o.k, { value: m, size: 'large' }),
                                null != _ ? _ : s().createElement('div', { className: c.Z.plus }),
                            ),
                        s().createElement(i.t, {
                            ignoreDiscount: u,
                            tooltipEnabled: n,
                            bigSize: !0,
                            price: d.price.get(),
                            defPrice: d.defPrice.get(),
                            discount: d.discount.get(),
                            priceSeparator: null != _ ? _ : s().createElement('div', { className: c.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, t, u) => {
                'use strict';
                u.d(t, { h: () => a, o: () => r });
                var n = u(7363);
                const a = (0, n.createContext)(null),
                    r = () => {
                        const e = (0, n.useContext)(a);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, t, u) => {
                'use strict';
                u.d(t, { k: () => a, t: () => r });
                const n = (0, u(3215).q3)()(
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
                    a = n[0],
                    r = n[1];
            },
            9683: (e, t, u) => {
                'use strict';
                u.d(t, { k: () => i });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7363),
                    s = u.n(r);
                const o = {
                        base: 'DemountKit_base_b5',
                        icon: 'DemountKit_icon_27',
                        base__large: 'DemountKit_base__large_e1',
                        value: 'DemountKit_value_cd',
                    },
                    i = ({ value: e, size: t = 'small', className: u }) =>
                        0 === e
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: a()(o.base, o[`base__${t}`], u) },
                                  s().createElement('div', { className: o.value }, e),
                                  s().createElement('div', { className: o.icon }),
                              );
            },
            1363: (e, t, u) => {
                'use strict';
                u.d(t, { _: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3649),
                    s = u(7363),
                    o = u.n(s),
                    i = u(5282);
                const l = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    _ = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: u,
                        classMix: n,
                        classColorMix: _,
                        linesShown: d,
                        withOffset: m = !0,
                    }) => {
                        const p = (0, r.z4)(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? o().createElement(
                                              'span',
                                              { key: t, className: a()(l, _) },
                                              e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                          )
                                        : e &&
                                          o().createElement(
                                              'span',
                                              { key: t, className: c },
                                              o().createElement(i.n, {
                                                  mediaSize: u,
                                                  blocks: (0, i.D)(e),
                                                  linesCount: d,
                                              }),
                                          ),
                                ),
                            E = (0, s.useMemo)(
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
                                                      { key: t, className: a()(l, _) },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : o().createElement('span', { key: t }, `${e} `),
                                        ),
                                [_, t],
                            );
                        return o().createElement(
                            'div',
                            { id: `${e}-details`, className: a()(l, n) },
                            m ? p : o().createElement(i.n, { mediaSize: u, blocks: E, linesCount: d }),
                        );
                    };
            },
            6391: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => i });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7363),
                    s = u.n(r);
                const o = {
                        base: 'Location_base_44',
                        base__countFirst: 'Location_base__countFirst_60',
                        icon: 'Location_icon_7f',
                        base__storage: 'Location_base__storage_bf',
                        base__vehicle: 'Location_base__vehicle_a9',
                        count: 'Location_count_45',
                        count__zero: 'Location_count__zero_f5',
                    },
                    i = ({ countFirst: e = !1, location: t, count: u }) =>
                        s().createElement(
                            'div',
                            { className: a()(o.base, o[`base__${t}`], e && o.base__countFirst) },
                            s().createElement('div', { className: o.icon }),
                            s().createElement('div', { className: a()(o.count, 0 === u && o.count__zero) }, u),
                        );
            },
            8401: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => E });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7405),
                    s = u(329),
                    o = u(7078),
                    i = u(5475),
                    l = u(9480),
                    c = u(7363),
                    _ = u.n(c);
                const d = 'Price_base_61',
                    m = 'Price_currency_ae',
                    p = 'Price_currency__discounted_a7',
                    E = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: u,
                        showZero: n = !1,
                        bigSize: E = !1,
                        ignoreDiscount: g = !1,
                        tooltipEnabled: b = !1,
                        className: h,
                        classNames: A,
                    }) => {
                        const C = (0, c.useMemo)(
                            () => ({ stock: null == A ? void 0 : A.discount }),
                            [null == A ? void 0 : A.discount],
                        );
                        return _().createElement(
                            'div',
                            { className: a()(d, h) },
                            l.UI(e, (e, d) => {
                                var h;
                                const v = null == (h = l.U2(t, d)) ? void 0 : h.value,
                                    f = !(g || ((D = e.value), (F = v), void 0 === F || D === F));
                                var D, F;
                                return (
                                    (n || Boolean(e.value)) &&
                                    _().createElement(
                                        c.Fragment,
                                        { key: `${e.value}-${e.name}-${e.isEnough}` },
                                        d > 0 && u,
                                        _().createElement(
                                            o.t,
                                            {
                                                args: {
                                                    tooltipId: i.e1,
                                                    currencyType: e.name,
                                                    price: e.value,
                                                    defPrice: v,
                                                },
                                                isEnabled: b && f,
                                            },
                                            _().createElement(
                                                'div',
                                                { className: a()(m, f && p, null == A ? void 0 : A.currency) },
                                                _().createElement(r.F, {
                                                    isDiscount: f,
                                                    size: E ? s.et.big : s.et.small,
                                                    type: e.name,
                                                    value: e.value,
                                                    isEnough: e.isEnough,
                                                    classNames: C,
                                                }),
                                            ),
                                        ),
                                    )
                                );
                            }),
                        );
                    };
            },
            2189: (e, t, u) => {
                'use strict';
                u.d(t, { Sf: () => A });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3138),
                    s = u(7363),
                    o = u.n(s);
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
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const _ = (e) => {
                    let t = e.caption,
                        u = e.onClick,
                        n = e.goto,
                        _ = e.classNames,
                        d = e.onMouseEnter,
                        m = e.onMouseLeave,
                        p = e.onMouseDown,
                        E = e.onMouseUp,
                        g = e.side,
                        b = void 0 === g ? 'left' : g,
                        h = e.type,
                        A = void 0 === h ? 'back' : h,
                        C = e.soundHover,
                        v = void 0 === C ? 'highlight' : C,
                        f = e.soundClick,
                        D = void 0 === f ? 'play' : f,
                        F = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, l);
                    const B = (0, s.useCallback)(
                            (e) => {
                                (null == d || d(e), r.O.sound.play.sound(v));
                            },
                            [d, v],
                        ),
                        y = (0, s.useCallback)(
                            (e) => {
                                null == m || m(e);
                            },
                            [m],
                        ),
                        w = (0, s.useCallback)(
                            (e) => {
                                (null == p || p(e), r.O.sound.play.sound(D));
                            },
                            [p, D],
                        ),
                        S = (0, s.useCallback)(
                            (e) => {
                                null == E || E(e);
                            },
                            [E],
                        );
                    return o().createElement(
                        'div',
                        c(
                            {
                                className: a()(i.base, i[`base__${A}`], i[`base__${b}`], null == _ ? void 0 : _.base),
                                onMouseEnter: B,
                                onMouseLeave: y,
                                onMouseDown: w,
                                onMouseUp: S,
                                onClick: u,
                            },
                            F,
                        ),
                        'info' !== A && o().createElement('div', { className: i.shine }),
                        o().createElement(
                            'div',
                            { className: a()(i.icon, i[`icon__${A}`], i[`icon__${b}`], null == _ ? void 0 : _.icon) },
                            o().createElement('div', { className: a()(i.glow, null == _ ? void 0 : _.glow) }),
                        ),
                        o().createElement(
                            'div',
                            { className: a()(i.caption, i[`caption__${A}`], null == _ ? void 0 : _.caption) },
                            t,
                        ),
                        n && o().createElement('div', { className: a()(i.goto, null == _ ? void 0 : _.goto) }, n),
                    );
                };
                var d = u(4598),
                    m = u(3815),
                    p = u(8526),
                    E = u(5521),
                    g = u(7727),
                    b = u(1922);
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
                    A = ({
                        backgroundImage: e,
                        children: t,
                        panel: u,
                        button: n,
                        show: r = !0,
                        onAnimationDone: i = d.ZT,
                        type: l = 'setup',
                        onClose: c,
                        className: A,
                        closeButtonClassName: C,
                    }) => {
                        const v = (0, b.GS)(),
                            f = (0, s.useRef)(null),
                            D = (0, s.useRef)(!1);
                        ((0, p.gd)(E.n.ESCAPE, c),
                            (0, s.useEffect)(() => {
                                (r && (D.current = !0), D.current && (0, g.G)('cons_select_view'));
                            }, [r]));
                        const F = (0, m.z)(i);
                        return (
                            (0, s.useEffect)(() => {
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
                            o().createElement(
                                'div',
                                { className: a()(h.base, r && h.base__shown, h[`base__${l}`], A) },
                                e &&
                                    o().createElement('div', {
                                        className: h.back,
                                        style: { backgroundImage: `url(${e})` },
                                    }),
                                n,
                                o().createElement(
                                    'div',
                                    { className: a()(h.close, v && h[`close__${v}`], !r && h.close__hidden, C) },
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
                                        id: 'setup-content',
                                        ref: f,
                                        className: a()(
                                            h.content,
                                            h[`content__${l}`],
                                            !r && !D.current && h.content__invisible,
                                            h['content__' + (r ? 'shown' : 'hidden')],
                                        ),
                                    },
                                    t,
                                ),
                                u && o().createElement('div', { className: h.panel }, u),
                            )
                        );
                    };
            },
            5282: (e, t, u) => {
                'use strict';
                u.d(t, { n: () => E, D: () => p });
                var n = u(6483),
                    a = u.n(n),
                    r = u(1856),
                    s = u(3138),
                    o = u(9916),
                    i = u(7363),
                    l = u.n(i),
                    c = u(6605);
                const _ = 'ShortenedText_base_fe',
                    d = 'ShortenedText_base__shown_af';
                var m = u(7260);
                const p = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => l().createElement(m.B, { key: t, text: `${e} ` })),
                    E = ({ blocks: e, linesCount: t = 2, mediaSize: u }) => {
                        const n = (0, i.useState)(e),
                            m = n[0],
                            p = n[1],
                            E = (0, i.useState)({ width: 0, height: 0 }),
                            g = E[0],
                            b = E[1],
                            h = (0, i.useRef)(null),
                            A = (0, i.useRef)({ shortened: !1 }),
                            C = (0, i.useCallback)(() => {
                                (0, o.Eu)().then(() => {
                                    const e = (0, c.D)(h);
                                    if (e) {
                                        const u = Number(e.split('rem')[0]),
                                            n = h.current;
                                        if (n && isFinite(u)) {
                                            const e = s.O.view.remToPx(t * u);
                                            b({ height: e, width: n.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        ((0, i.useEffect)(() => {
                            if (e.length)
                                return (A.current.shortened && ((A.current.shortened = !1), p(e)), (0, r.v)(C));
                        }, [e, u, C]),
                            (0, i.useEffect)(() => {
                                if (g.height && !A.current.shortened) {
                                    const e = (0, c.M)(h, g.height);
                                    if (-1 !== e) {
                                        const t = m.slice(0, e);
                                        (t.push(l().createElement('span', { key: e }, '...')),
                                            p(t),
                                            (A.current.shortened = !0));
                                    }
                                }
                            }, [m, g, u]));
                        const v = (0, i.useMemo)(() => (g.height ? { maxHeight: `${g.height}rem` } : {}), [g.height]);
                        return l().createElement('div', { ref: h, className: a()(_, g.height && d), style: v }, m);
                    };
            },
            6605: (e, t, u) => {
                'use strict';
                u.d(t, { D: () => n, M: () => r });
                const n = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    a = (e, t) => e.getBoundingClientRect().top >= t,
                    r = (e, t) => {
                        const u = e.current;
                        if (u) {
                            const e = u.getBoundingClientRect(),
                                n = e.top + t,
                                r = Array.from(u.children);
                            if (r.length) {
                                const t = ((e, t) => {
                                    const u = e.length - 1;
                                    if (!a(e[u], t)) return -1;
                                    let n = 0,
                                        r = u - 1,
                                        s = !1;
                                    for (; r - n > 1; ) {
                                        const u = n + Math.floor(0.5 * (r - n + 1));
                                        ((s = a(e[u], t)), s ? (r = u) : (n = u));
                                    }
                                    return s || a(e[r], t) ? n : r;
                                })(r, n);
                                if (t > 0) {
                                    const u = r[t].getBoundingClientRect();
                                    return e.right - u.right < 16 ? t : t + 1;
                                }
                            }
                        }
                        return -1;
                    };
            },
            2094: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => y });
                var n = u(6483),
                    a = u.n(n),
                    r = u(8526),
                    s = u(5521),
                    o = u(7727),
                    i = u(7363),
                    l = u.n(i),
                    c = u(3978);
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
                        availableMaximum: u,
                        maximum: n,
                        picker: r,
                        allowSlide: s,
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
                            { className: a()(_.progressBar, _.base, _[`base__${e}`]), style: i },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (u / n) * 100 + '%' } },
                                !s && l().createElement('div', { className: a()(_.glow, _.glow__right) }),
                            ),
                            l().createElement(
                                'div',
                                { className: _.line, style: { width: (t / n) * 100 + '%' } },
                                l().createElement('div', { className: _.pattern }),
                                l().createElement('div', { className: _.gradient }),
                                r && l().createElement('div', { className: _.picker }, r),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    E = 'SlideControl_image_61',
                    g = 'SlideControl_image__hover_eb',
                    b = 'SlideControl_image__active_70',
                    h = ({ parentId: e, isActive: t, isHovered: u }) => {
                        const n = a()(E, u && g, t && b);
                        return l().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            l().createElement('div', { className: n }),
                        );
                    },
                    A = 'Slider_base_2c',
                    C = 'Slider_slideArea_dd',
                    v = 'Slider_editor_5c',
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
                    B = ({ parentId: e, type: t, isEnabled: u, onClick: n }) => {
                        const r = a()(F.base, u && F.base__enabled, F[`base__${t}${u ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: r, onClick: n });
                    },
                    y = ({
                        parentId: e,
                        currentValue: t,
                        maximum: u,
                        sliderMaximum: n,
                        sliderMinimum: _ = 0,
                        isDisabled: d = !1,
                        onUpdates: p,
                        withStepEditors: E = !0,
                        stepCount: g = 1,
                    }) => {
                        const b = (0, i.useRef)(null),
                            F = (0, i.useRef)({ down: !1, move: !1, over: !1 }),
                            y = (0, i.useRef)({ currentValue: t, maximum: u, sliderMaximum: n, sliderMinimum: _ }),
                            w = (0, i.useState)(t),
                            S = w[0],
                            k = w[1],
                            T = (0, i.useState)(!1),
                            x = T[0],
                            N = T[1],
                            L = (0, i.useState)(!1),
                            R = L[0],
                            O = L[1],
                            M = (0, i.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        u = y.current.currentValue;
                                    if (g > 1) {
                                        t *= g;
                                        const e = u % g;
                                        t < 0 && e ? (u -= e) : (u += t - e);
                                    } else u += t;
                                    return u;
                                },
                                [g],
                            ),
                            I = (0, i.useCallback)(
                                (e, t) => {
                                    if (!b.current) return 0;
                                    const u = b.current.getBoundingClientRect(),
                                        n = y.current.maximum,
                                        a = u.width / n,
                                        r = e - u.left,
                                        s = Math.floor(a > 0 ? r / a : r);
                                    if (s > n) return n;
                                    if (s <= 0) return 0;
                                    if (g > 1) {
                                        let e = s - (s % g);
                                        const u = s - e;
                                        return (
                                            u > 0 && ((t && s > y.current.currentValue) || u > 0.5 * g) && (e += g),
                                            e
                                        );
                                    }
                                    return s;
                                },
                                [g],
                            ),
                            P = (0, i.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        u = t.sliderMaximum,
                                        n = t.sliderMinimum;
                                    (e < n ? (e = n) : e > u && (e = u),
                                        y.current.currentValue !== e &&
                                            (k(e), (y.current.currentValue = e), p && p(e)));
                                },
                                [p],
                            ),
                            $ = t < n,
                            H = t > 0,
                            z = (0, i.useCallback)(() => {
                                if ($ && F.current.over) {
                                    const e = M(!0);
                                    P(e);
                                }
                            }, [$, M, P]),
                            j = (0, i.useCallback)(() => {
                                if (H && F.current.over) {
                                    const e = M(!1);
                                    P(e);
                                }
                            }, [H, M, P]),
                            W = (0, i.useCallback)(() => {
                                ((F.current.down = !1), O(!1));
                            }, []),
                            G = (0, i.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && F.current.down) {
                                        F.current.move = !0;
                                        const t = I(e.clientX);
                                        P(t);
                                    } else W();
                                },
                                [W, I, P],
                            );
                        ((0, r.gd)(s.n.ARROW_UP, z, !1, !0),
                            (0, r.gd)(s.n.ARROW_RIGHT, z, !1, !0),
                            (0, r.gd)(s.n.ARROW_DOWN, j, !1, !0),
                            (0, r.gd)(s.n.ARROW_LEFT, j, !1, !0),
                            (0, i.useEffect)(() => {
                                y.current.maximum = u;
                            }, [u]),
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
                        const U = (0, i.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((F.current.down = !0), O(!0));
                                },
                                [d],
                            ),
                            V = (0, i.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = I(e.clientX, !F.current.move),
                                        u = y.current,
                                        n = u.currentValue,
                                        a = u.sliderMaximum,
                                        r = u.sliderMinimum;
                                    (P(t), (0, c.u)(n, t, a, r), (F.current.move = !1));
                                },
                                [I, d, P],
                            ),
                            Z = (0, i.useCallback)(() => {
                                ((F.current.over = !0), N(!0), (0, o.G)('highlight'));
                            }, []),
                            q = (0, i.useCallback)(() => {
                                ((F.current.over = !1), N(!1));
                            }, []),
                            K = (0, i.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        u = t.currentValue,
                                        n = t.sliderMaximum,
                                        a = t.sliderMinimum,
                                        r = M(e.deltaY > 0);
                                    (P(r), (0, c.u)(u, r, n, a));
                                },
                                [M, P],
                            );
                        return l().createElement(
                            'div',
                            { ref: b, onMouseEnter: Z, onMouseLeave: q, onWheel: K, className: A },
                            E &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: a()(v, f) },
                                        l().createElement(B, { parentId: e, type: 'minus', isEnabled: H, onClick: j }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: a()(v, D) },
                                        l().createElement(B, { parentId: e, type: 'plus', isEnabled: $, onClick: z }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: V, onMouseDown: U, className: C },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: u,
                                    value: S,
                                    availableMaximum: n,
                                    picker: l().createElement(h, { parentId: e, isActive: R, isHovered: x }),
                                }),
                            ),
                        );
                    };
            },
            4814: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => E });
                var n = u(9480),
                    a = u(7363),
                    r = u.n(a),
                    s = u(1922),
                    o = u(6483),
                    i = u.n(o),
                    l = u(3457),
                    c = u(7078);
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
                        isSpecializationActive: u = !0,
                        isDynamic: n,
                        mediaSize: o,
                        isClickable: d,
                        onSpecializationClick: m,
                        index: p,
                    }) => {
                        const E = o !== s.cJ.None,
                            g = (0, a.useCallback)(() => {
                                d && u && m && m(p);
                            }, [p, d, u, m]),
                            b = (0, a.useMemo)(() => {
                                let u = '';
                                E && (u = (o === s.cJ.Large || o === s.cJ.Huge ? s.cJ.Large : s.cJ.Medium) + '_');
                                const n = `${u}${e}_${t ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, t, o, E]),
                            h = (0, a.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!b) return null;
                        const A = i()(
                                `specialization-${e}`,
                                _.base,
                                E && _[`base__${o}`],
                                u && _.base__setup,
                                t && _.base__correct,
                            ),
                            C = i()(_.icon, E && _[`icon__${o}`]),
                            v = E ? '' : _.specializationWrapper,
                            f = r().createElement(
                                'div',
                                { key: e, className: A },
                                r().createElement('div', { className: _.glow }),
                                r().createElement('div', { className: C, style: b }),
                            );
                        return r().createElement(
                            c.t,
                            { args: h },
                            d && u
                                ? r().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: g,
                                      },
                                      f,
                                  )
                                : r().createElement('div', { className: v }, f),
                        );
                    },
                    m = 'Specializations_base_ab';
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const E = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: u,
                    mediaSize: a = s.cJ.None,
                    activeSpecsMask: o,
                    onSpecializationClick: i,
                }) =>
                    e.length
                        ? r().createElement(
                              'div',
                              { className: m, key: o },
                              n.UI(e, (e, n) =>
                                  r().createElement(
                                      d,
                                      p({ index: n, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: u,
                                          mediaSize: a,
                                          onSpecializationClick: i,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            5096: (e, t, u) => {
                'use strict';
                u.d(t, { k: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3403),
                    s = u(7363),
                    o = u.n(s),
                    i = u(1922),
                    l = u(3028);
                const c = {
                        base: 'WeaponOccupancy_base_19',
                        base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                        tip: 'WeaponOccupancy_tip_18',
                        occupancy: 'WeaponOccupancy_occupancy_6e',
                        occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                        occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                        occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                    },
                    _ = (0, r.Pi)(({ isDetailed: e = !1, isShortened: t = !1 }) => {
                        const u = (0, i.GS)(),
                            n = (0, l.t)().model.shellsSetup.get(),
                            r = n.installedCount,
                            s = n.maxCount,
                            _ = r === s,
                            d = R.strings.tank_setup.shells,
                            m = _ ? d.ammunitionFull() : d.ammunitionIncomplete();
                        return o().createElement(
                            'div',
                            { className: a()(c.base, !_ && c.base__incomplete) },
                            !t && o().createElement('div', { className: c.tip }, m),
                            e
                                ? `${r}/${s}`
                                : o().createElement(
                                      'div',
                                      {
                                          className: a()(
                                              c.occupancy,
                                              !_ && c.occupancy__incomplete,
                                              c[`occupancy__${u}`],
                                          ),
                                      },
                                      `${r}/${s}`,
                                  ),
                        );
                    });
            },
            3978: (e, t, u) => {
                'use strict';
                u.d(t, { d: () => a, u: () => r });
                var n = u(7727);
                const a = (e, t) => {
                        const u = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, n.G)(u + '_' + e) : (0, n.G)(u);
                    },
                    r = (e, t, u, a) => {
                        t > u ||
                            t < a ||
                            (t > e ? (0, n.G)('cons_ammo_roll_plus') : t < e && (0, n.G)('cons_ammo_roll_minus'));
                    };
            },
            5475: (e, t, u) => {
                'use strict';
                u.d(t, { e1: () => n });
                const n = 'priceDiscount';
            },
            5344: (e, t, u) => {
                'use strict';
                let n;
                (u.d(t, { d: () => n }),
                    (function (e) {
                        ((e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary'));
                    })(n || (n = {})));
            },
            7383: (e, t, u) => {
                'use strict';
                u.d(t, {
                    $4: () => i,
                    G$: () => s,
                    S: () => l,
                    YR: () => o,
                    g9: () => a,
                    mH: () => r,
                    pi: () => c,
                    zn: () => n,
                });
                const n = 'optDevices',
                    a = 'shells',
                    r = 'consumables',
                    s = 'battleBoosters',
                    o = 'apply',
                    i = 'equipCoinInfo',
                    l = 'simple',
                    c = 'modernized';
            },
            6880: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            4382: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            8460: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            5287: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            8852: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            1960: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            8529: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'Animation_base_ab',
                    base__withAnimation: 'Animation_base__withAnimation_41',
                    'action-show': 'Animation_action-show_f8',
                    base__enter: 'Animation_base__enter_1e',
                    base__exit: 'Animation_base__exit_88',
                    'action-hide': 'Animation_action-hide_44',
                };
            },
            628: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            2527: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'ConfirmButton_base_75' };
            },
            8099: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'Controls_base_d3', button: 'Controls_button_f8' };
            },
            1523: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], r = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
            var t = (t, u) => {
                    var n,
                        a,
                        [r, s, o] = u,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); i < r.length; i++)
                        ((a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(3047));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
