(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    s = u(7363),
                    i = u.n(s),
                    o = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: _,
                    soundHover: d,
                    soundClick: m,
                    onMouseEnter: E,
                    onMouseMove: p,
                    onMouseDown: g,
                    onMouseUp: A,
                    onMouseLeave: F,
                    onClick: b,
                }) => {
                    const C = (0, s.useRef)(null),
                        h = (0, s.useState)(u),
                        D = h[0],
                        f = h[1],
                        B = (0, s.useState)(!1),
                        v = B[0],
                        y = B[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                D && null !== C.current && !C.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, s.useEffect)(() => {
                            f(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: C,
                                className: a()(
                                    o.Z.base,
                                    o.Z[`base__${n}`],
                                    c && o.Z.base__disabled,
                                    t && o.Z[`base__${t}`],
                                    D && o.Z.base__focus,
                                    v && o.Z.base__highlightActive,
                                    _,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== d && (0, r.G)(d), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    p && p(e);
                                },
                                onMouseUp: function (e) {
                                    c || (A && A(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, r.G)(m),
                                        g && g(e),
                                        u && (c || (C.current && (C.current.focus(), f(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (F && F(e), y(!1));
                                },
                                onClick: function (e) {
                                    c || (b && b(e));
                                },
                            },
                            n !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: a()(o.Z.state, o.Z.state__default) },
                                i().createElement('span', { className: o.Z.stateDisabled }),
                                i().createElement('span', { className: o.Z.stateHighlightHover }),
                                i().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = c;
            },
            2106: (e, t, u) => {
                'use strict';
                let n, a;
                u.d(t, { L: () => n, q: () => a }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(a || (a = {}));
            },
            2262: (e, t, u) => {
                'use strict';
                u.d(t, { XZ: () => m });
                var n = u(7363),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    i = u(7727),
                    o = u(1641),
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
                        E = void 0 !== m && m,
                        p = e.isAlert,
                        g = void 0 !== p && p,
                        A = e.size,
                        F = void 0 === A ? l.yB.medium : A,
                        b = e.type,
                        C = void 0 === b ? l.Rh.primary : b,
                        h = e.soundHover,
                        D = void 0 === h ? 'highlight' : h,
                        f = e.soundClick,
                        B = void 0 === f ? 'play' : f,
                        v = e.onMouseEnter,
                        y = e.onMouseLeave,
                        w = e.onMouseUp,
                        x = e.onMouseDown,
                        k = e.onClick,
                        S = e.onChange,
                        N = e.onFocus,
                        L = e.onBlur,
                        O = e.text,
                        P = e.contentStyles,
                        T = e.children,
                        I = e.alignment,
                        R = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, _);
                    const M = (0, n.useState)(!1),
                        H = M[0],
                        z = M[1],
                        W = (0, n.useState)(!1),
                        j = (W[0], W[1]),
                        $ = (0, n.useCallback)(
                            (e) => {
                                E || (S && S(), k && k(e));
                            },
                            [E, S, k],
                        ),
                        G = (0, n.useCallback)(
                            (e) => {
                                const t = e.button === o.t.LEFT;
                                E || (t && z(!0), t && x && x(e), B && (0, i.G)(B));
                            },
                            [E, x, B],
                        ),
                        U = (0, n.useCallback)(
                            (e) => {
                                E || (z(!1), w && w(e));
                            },
                            [E, w],
                        ),
                        Z = (0, n.useCallback)(
                            (e) => {
                                E || (v && v(e), D && (0, i.G)(D));
                            },
                            [E, v, D],
                        ),
                        V = (0, n.useCallback)(
                            (e) => {
                                E || (z(!1), y && y(e));
                            },
                            [E, y],
                        ),
                        q = (0, n.useCallback)(
                            (e) => {
                                E || (j(!0), N && N(e));
                            },
                            [E, N],
                        ),
                        Y = (0, n.useCallback)(
                            (e) => {
                                E || (j(!1), L && L(e));
                            },
                            [E, L],
                        ),
                        X = a().createElement(
                            'div',
                            { className: c.Z.label },
                            a().createElement(
                                'div',
                                { className: s()(c.Z.labelContent, 's-labelContent'), style: P },
                                O || T,
                            ),
                        );
                    return a().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: s()(c.Z.base, c.Z[`base__${F}`], c.Z[`base__${C}`], {
                                    [c.Z.base__checked]: r,
                                    [c.Z.base__disabled]: E,
                                    [c.Z.base__mouseDown]: H,
                                    [c.Z.base__alert]: g,
                                    [c.Z.base__center]: I === l.N3.Center,
                                    [c.Z.base__bottom]: I === l.N3.Bottom,
                                }),
                                onClick: $,
                                onMouseEnter: Z,
                                onMouseLeave: V,
                                onMouseDown: G,
                                onMouseUp: U,
                                onFocus: q,
                                onBlur: Y,
                            },
                            R,
                        ),
                        a().createElement(
                            'div',
                            { className: c.Z.input },
                            a().createElement('div', { className: c.Z.alertOverlay }),
                            a().createElement('div', { className: c.Z.inputHoverOverlay }),
                            a().createElement('div', { className: c.Z.highlight }),
                        ),
                        a().createElement('div', { className: c.Z.checkmark }),
                        ((O || T) && X) || null,
                    );
                };
            },
            8844: (e, t, u) => {
                'use strict';
                let n, a, r;
                u.d(t, { N3: () => r, Rh: () => a, yB: () => n }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(r || (r = {}));
            },
            7405: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(2372),
                    s = u(7363),
                    i = u.n(s),
                    o = u(8460),
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
                        className: E,
                        classNames: p,
                    }) =>
                        i().createElement(
                            'span',
                            { className: a()(o.Z.base, o.Z[`base__${u}`], E) },
                            i().createElement(
                                'span',
                                {
                                    className: a()(
                                        o.Z.value,
                                        o.Z[`value__${n}`],
                                        !d && o.Z.value__notEnough,
                                        null == p ? void 0 : p.value,
                                    ),
                                },
                                _ && s > 0 && '+',
                                i().createElement(r.A, { value: s, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            i().createElement('span', {
                                className: a()(o.Z.icon, o.Z[`icon__${n}-${u}`], null == p ? void 0 : p.icon),
                            }),
                            e &&
                                i().createElement(
                                    'span',
                                    {
                                        className: a()(
                                            o.Z.stock,
                                            c && o.Z.stock__indent,
                                            t && o.Z.stock__interactive,
                                            null == p ? void 0 : p.stock,
                                        ),
                                    },
                                    i().createElement('span', {
                                        className: o.Z.stockBackground,
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
                u.d(t, { V2: () => a, et: () => n, we: () => r }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(r || (r = {}));
            },
            2372: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => s });
                var n = u(7363),
                    a = u.n(n),
                    r = u(9916);
                class s extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = r.B3.GOLD;
                        else e = r.B3.INTEGRAL;
                        const t = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => _ });
                var n = u(3138),
                    a = u(7363),
                    r = u(1043),
                    s = u(5262);
                const i = n.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, r.j)),
                    _ = (0, a.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var n = u(3138),
                    a = u(6536),
                    r = u(7363),
                    s = u.n(r),
                    i = u(3495),
                    o = u(1043),
                    l = u(5262);
                const c = ({ children: e }) => {
                    const t = (0, r.useContext)(i.Y),
                        u = (0, r.useState)(t),
                        c = u[0],
                        _ = u[1],
                        d = (0, r.useCallback)((e, t) => {
                            const u = n.O.view.pxToRem(e),
                                a = n.O.view.pxToRem(t);
                            _(Object.assign({ width: u, height: a }, (0, l.T)(u, a, o.j)));
                        }, []),
                        m = (0, r.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, a.Z)(() => {
                        n.O.client.events.on('clientResized', d), n.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', d),
                                    n.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [d, m],
                        );
                    const E = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(i.Y.Provider, { value: E }, e);
                };
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    a = u(7382),
                    r = u(3495);
                const s = ['children'];
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, s);
                    const i = (0, n.useContext)(r.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        _ = i.small,
                        d = i.extraSmall,
                        m = i.extraLargeWidth,
                        E = i.largeWidth,
                        p = i.mediumWidth,
                        g = i.smallWidth,
                        A = i.extraSmallWidth,
                        F = i.extraLargeHeight,
                        b = i.largeHeight,
                        C = i.mediumHeight,
                        h = i.smallHeight,
                        D = i.extraSmallHeight,
                        f = { extraLarge: F, large: b, medium: C, small: h, extraSmall: D };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && o) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && _) return t;
                        if (u.extraSmall && d) return t;
                    } else {
                        if (u.extraLargeWidth && m) return (0, a.H)(t, u, f);
                        if (u.largeWidth && E) return (0, a.H)(t, u, f);
                        if (u.mediumWidth && p) return (0, a.H)(t, u, f);
                        if (u.smallWidth && g) return (0, a.H)(t, u, f);
                        if (u.extraSmallWidth && A) return (0, a.H)(t, u, f);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && F) return t;
                            if (u.largeHeight && b) return t;
                            if (u.mediumHeight && C) return t;
                            if (u.smallHeight && h) return t;
                            if (u.extraSmallHeight && D) return t;
                        }
                    }
                    return null;
                };
                i.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                };
                (0, n.memo)(i);
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
                u.d(t, { T: () => a }),
                    (function (e) {
                        (e.extraLarge = 'extraLarge'),
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
                            (e.extraSmallHeight = 'extraSmallHeight');
                    })(n || (n = {}));
            },
            8089: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => _ });
                var n = u(7363),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    i = u(7727),
                    o = u(7476);
                const l = [
                    'caption',
                    'onClick',
                    'goto',
                    'side',
                    'type',
                    'classNames',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onMouseUp',
                    'soundClick',
                    'soundHover',
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
                class _ extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, i.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, i.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            u = e.onClick,
                            n = e.goto,
                            r = e.side,
                            i = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            m = e.onMouseLeave,
                            E = e.onMouseDown,
                            p = e.onMouseUp,
                            g =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, l)),
                            A = s()(o.Z.base, o.Z[`base__${i}`], o.Z[`base__${r}`], null == _ ? void 0 : _.base),
                            F = s()(o.Z.icon, o.Z[`icon__${i}`], o.Z[`icon__${r}`], null == _ ? void 0 : _.icon),
                            b = s()(o.Z.glow, null == _ ? void 0 : _.glow),
                            C = s()(o.Z.caption, o.Z[`caption__${i}`], null == _ ? void 0 : _.caption),
                            h = s()(o.Z.goto, null == _ ? void 0 : _.goto);
                        return a().createElement(
                            'div',
                            c(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(m),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(p),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                g,
                            ),
                            'info' !== i && a().createElement('div', { className: o.Z.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: b })),
                            a().createElement('div', { className: C }, t),
                            n && a().createElement('div', { className: h }, n),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => o });
                var n = u(7363),
                    a = u.n(n),
                    r = u(2056);
                const s = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, s);
                    return a().createElement(
                        r.u,
                        i(
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
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
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
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, s);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, d, { body: u, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, u, l, c, d]);
                        return r().createElement(
                            n.u,
                            i(
                                {
                                    contentId:
                                        ((p = null == d ? void 0 : d.hasHtmlContent),
                                        p ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                m,
                            ),
                            t,
                        );
                        var p;
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
                function i(e) {
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
                const o = (e, t, u = {}, n = 0) => {
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
                            E = void 0 !== m && m,
                            p = e.ignoreMouseClick,
                            g = void 0 !== p && p,
                            A = e.decoratorId,
                            F = void 0 === A ? 0 : A,
                            b = e.isEnabled,
                            C = void 0 === b || b,
                            h = e.targetId,
                            D = void 0 === h ? 0 : h,
                            f = e.onShow,
                            B = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, s);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => D || (0, n.F)().resId, [D]),
                            x = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (o(u, F, { isMouseEvent: !0, on: !0, arguments: i(a) }, w),
                                    f && f(),
                                    (y.current.isVisible = !0));
                            }, [u, F, a, w, f]),
                            k = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        o(u, F, { on: !1 }, w),
                                        y.current.isVisible && B && B(),
                                        (y.current.isVisible = !1);
                                }
                            }, [u, F, w, B]),
                            S = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
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
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return C
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(x, E ? 100 : 400)),
                                                      l && l(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              k(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === g && k(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === g && k(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
                        var N;
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
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => i });
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
                function i({ initializer: e = !0, rootId: t = 0, getRoot: u = s, context: r = 'model' } = {}) {
                    const i = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = i.get(t);
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
                                o = n.O.view.addModelObserver(s, t, !0);
                            return i.set(o, u), e && u(l(a)), o;
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
                            for (var e, u = a(i.keys()); !(e = u()).done; ) {
                                o(e.value, t);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q3: () => o });
                var n = u(4598),
                    a = u(9174),
                    r = u(7363),
                    s = u.n(r),
                    i = u(8246);
                const o = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, r.useRef)([]),
                                m = (u, r, s) => {
                                    var o;
                                    const l = i.U(r),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === u ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
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
                                                            i = s.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([t, u]) => {
                                                                            i[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        p = { mode: u, model: E, externalModel: c, cleanup: m };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && s ? s.controls(p) : t(p),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                p = (0, r.useState)(o),
                                g = p[0],
                                A = p[1],
                                F = (0, r.useState)(() => m(o, l, _)),
                                b = F[0],
                                C = F[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? C(m(g, l, _)) : (E.current = !0);
                                }, [_, g, l]),
                                (0, r.useEffect)(() => {
                                    A(o);
                                }, [o]),
                                (0, r.useEffect)(
                                    () => () => {
                                        b.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [b],
                                ),
                                s().createElement(u.Provider, { value: b }, c)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => s });
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
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
                                    function i(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, i),
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
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
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
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = u(527),
                    a = u(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                u.d(t, { O: () => r });
                var n = u(5959),
                    a = u(514);
                const r = { view: u(7641), client: n, sound: a.ZP };
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
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
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
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        arabic2roman: () => w,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => x,
                        events: () => s.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getFontNames: () => y,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => f,
                        isFocused: () => h,
                        pxToRem: () => F,
                        remToPx: () => b,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => D,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    });
                var n = u(9690),
                    a = u(3722),
                    r = u(6112),
                    s = u(6538),
                    i = u(8566);
                function o(e) {
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
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function D() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = n.cg,
                    x = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    s = 32,
                    i = 64,
                    o = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
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
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                function n() {}
                u.d(t, { ZT: () => n, cM: () => s, jv: () => r, yR: () => a });
                function a(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                const s = console.log;
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
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(7363);
                const a = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
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
                u.d(t, { gd: () => i });
                var n = u(3138),
                    a = u(5521),
                    r = (u(9916), u(7363));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function i(e = a.n.NONE, t = s, u = !1, i = !1) {
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
                                if (!i && n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), t(a), u && a.stopPropagation();
                            }
                        }
                    }, [t, e, u, i]);
                }
            },
            5521: (e, t, u) => {
                'use strict';
                let n, a;
                u.d(t, { n: () => n }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(n || (n = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
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
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(a || (a = {}));
            },
            9480: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { DZ: () => i, G: () => s, MH: () => a, U2: () => n, UI: () => r });
                const a = n;
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function s(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let u = 0; u < e.length; u++) {
                        if (t(a(e, u), u, e)) return !0;
                    }
                    return !1;
                }
                function i(e, t, u) {
                    const n = [];
                    for (let r = 0; r < e.length; r++) {
                        const s = a(e, r);
                        t(s, r, e) && n.push(u(s, r, e));
                    }
                    return n;
                }
            },
            1641: (e, t, u) => {
                'use strict';
                let n;
                u.d(t, { t: () => n }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(n || (n = {}));
            },
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { HG: () => i, cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) (t += n[u]), (e -= a[u]);
                    return t;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) => (s ? `${e}` : r(e));
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
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(3138);
                class a {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
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
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => A, Eu: () => F });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
                            this.removeMouseListener();
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
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = u(5521),
                    m = u(3138);
                const E = ['args'];
                function p(e, t, u, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    A = (function () {
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
                                            p(r, n, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            p(r, n, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    F = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    b = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, E);
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
                    C = () => b(i.CLOSE),
                    h = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var D = u(7572);
                const f = a.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: D.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => b(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => b(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            b(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            b(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: g(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => h(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, C);
                        },
                        handleViewEvent: b,
                        onBindingsReady: A,
                        onLayoutReady: F,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
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
                        ClickOutsideManager: f,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Z5: () => n, cy: () => a });
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
                    };
            },
            2223: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => Ae,
                        Bar: () => Ee,
                        DefaultScroll: () => ge,
                        Direction: () => J,
                        defaultSettings: () => Q,
                        useHorizontalScrollApi: () => te,
                    });
                var a = {};
                u.r(a), u.d(a, { Area: () => Te, Bar: () => Le, Default: () => Pe, useVerticalScrollApi: () => Fe });
                var r = u(7739),
                    s = u(7363),
                    i = u.n(s),
                    o = u(6483),
                    l = u.n(o),
                    c = u(926),
                    _ = u.n(c),
                    d = u(1043);
                let m, E, p;
                !(function (e) {
                    (e[(e.ExtraSmall = d.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = d.j.small.width)] = 'Small'),
                        (e[(e.Medium = d.j.medium.width)] = 'Medium'),
                        (e[(e.Large = d.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = d.j.extraLarge.width)] = 'ExtraLarge');
                })(m || (m = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = d.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = d.j.small.width)] = 'Small'),
                            (e[(e.Medium = d.j.medium.width)] = 'Medium'),
                            (e[(e.Large = d.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = d.j.extraLarge.width)] = 'ExtraLarge');
                    })(E || (E = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = d.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = d.j.small.height)] = 'Small'),
                            (e[(e.Medium = d.j.medium.height)] = 'Medium'),
                            (e[(e.Large = d.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = d.j.extraLarge.height)] = 'ExtraLarge');
                    })(p || (p = {}));
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
                                        return console.error('Unreachable media context resolution'), m.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return E.ExtraLarge;
                                    case e.largeWidth:
                                        return E.Large;
                                    case e.mediumWidth:
                                        return E.Medium;
                                    case e.smallWidth:
                                        return E.Small;
                                    case e.extraSmallWidth:
                                        return E.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), E.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return p.ExtraLarge;
                                    case e.largeHeight:
                                        return p.Large;
                                    case e.mediumHeight:
                                        return p.Medium;
                                    case e.smallHeight:
                                        return p.Small;
                                    case e.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    A = ['children', 'className'];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                const b = {
                        [E.ExtraSmall]: '',
                        [E.Small]: _().SMALL_WIDTH,
                        [E.Medium]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH}`,
                        [E.Large]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH}`,
                        [E.ExtraLarge]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH} ${_().EXTRA_LARGE_WIDTH}`,
                    },
                    C = {
                        [p.ExtraSmall]: '',
                        [p.Small]: _().SMALL_HEIGHT,
                        [p.Medium]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT}`,
                        [p.Large]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT} ${_().EXTRA_LARGE_HEIGHT}`,
                    },
                    h = {
                        [m.ExtraSmall]: '',
                        [m.Small]: _().SMALL,
                        [m.Medium]: `${_().SMALL} ${_().MEDIUM}`,
                        [m.Large]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE}`,
                        [m.ExtraLarge]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE} ${_().EXTRA_LARGE}`,
                    },
                    D = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, A);
                        const a = g(),
                            r = a.mediaWidth,
                            s = a.mediaHeight,
                            o = a.mediaSize;
                        return i().createElement('div', F({ className: l()(u, b[r], C[s], h[o]) }, n), t);
                    },
                    f = ['children'];
                const B = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, f);
                    return i().createElement(r.ZN, null, i().createElement(D, u, t));
                };
                var v = u(1533),
                    y = u.n(v);
                function w() {
                    const e = (0, s.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, s.useEffect)(() => t, []),
                        (0, s.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var x = u(3403),
                    k = u(9152),
                    S = u(3215),
                    N = u(9174);
                function L(e) {
                    const t = {};
                    for (const u in e)
                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                            const n = e[u];
                            t[u] = (0, N.aD)(n);
                        }
                    return t;
                }
                const O = (0, S.q3)()(
                        ({ observableModel: e }) => {
                            const t = { vehicleInfo: e.object('vehicleInfo'), contentShown: N.LO.box(!1) };
                            return Object.assign({}, t, { computes: {} });
                        },
                        ({ externalModel: e, model: t }) =>
                            Object.assign(
                                {
                                    close: e.createCallbackNoArgs('onClose'),
                                    enableBlur: e.createCallbackNoArgs('onEnableBlur'),
                                    confirmDeal: e.createCallbackNoArgs('dealPanel.onDealConfirmed'),
                                    cancelDeal: e.createCallbackNoArgs('dealPanel.onDealCancelled'),
                                },
                                L({ showContent: () => t.contentShown.set(!0) }),
                            ),
                    ),
                    P = O[0],
                    T = O[1],
                    I = 'App_base_21',
                    M = 'App_title_f6',
                    H = 'App_content_20',
                    z = 'App_vehicleParams_69',
                    W = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    (u = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                            }
                        );
                    },
                    j = (e, t, u) => (u < e ? e : u > t ? t : u);
                var $ = u(3138),
                    G = u(3815);
                function U(e, t, u = []) {
                    const n = (0, s.useRef)(0),
                        a = (0, s.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, s.useEffect)(() => a, [a]);
                    const r = (null != u ? u : []).concat([t]);
                    return [
                        (0, s.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, r),
                        a,
                    ];
                }
                var Z = u(7727);
                function V(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return q(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return q(e, t);
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
                function q(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Y = () => {
                    const e = (0, s.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        n = (e, u) => {
                            t(e).delete(u);
                        },
                        a = (e, ...u) => {
                            for (var n, a = V(t(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...u);
                            }
                        };
                    return (0, s.useMemo)(() => ({ on: u, off: n, trigger: a }), []);
                };
                function X(e, t, u) {
                    const n = (0, s.useMemo)(
                        () =>
                            (function (e, t, u, n) {
                                let a,
                                    r = !1,
                                    s = 0;
                                function i() {
                                    a && clearTimeout(a);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function _() {
                                        (s = Date.now()), u.apply(l, o);
                                    }
                                    r ||
                                        (n && !a && _(),
                                        i(),
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
                                    (o.cancel = function () {
                                        i(), (r = !0);
                                    }),
                                    o
                                );
                            })(u, e),
                        t,
                    );
                    return (0, s.useEffect)(() => n.cancel, [n]), n;
                }
                var K = u(7030);
                let J;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(J || (J = {}));
                const Q = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ee = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: a,
                        forceTriggerMouseMove: r,
                    }) => {
                        const i = (e, u) => {
                            const n = t(e),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : j(a, r, u);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? Q : l,
                                _ = (0, s.useRef)(null),
                                d = (0, s.useRef)(null),
                                m = (0, s.useRef)(!1),
                                E = Y(),
                                p = X(
                                    () => {
                                        r && r();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, K.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (u(t, e), E.trigger('change', e), r && m.current && p());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                A = g[0],
                                F = g[1],
                                b = (0, s.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = A.scrollPosition.get(),
                                            r = (null != (n = A.scrollPosition.goal) ? n : 0) - a;
                                        return i(e, t * u + r + a);
                                    },
                                    [A.scrollPosition],
                                ),
                                C = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            F.start({
                                                scrollPosition: i(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(n, A.scrollPosition.get()) },
                                            });
                                    },
                                    [F, c.animationConfig, A.scrollPosition],
                                ),
                                h = (0, s.useCallback)(
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
                                            r = b(t, e, n);
                                        C(r);
                                    },
                                    [C, b, c.step],
                                ),
                                D = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && h(n(e)),
                                            _.current && E.trigger('mouseWheel', e, A.scrollPosition, t(_.current));
                                    },
                                    [A.scrollPosition, h, E],
                                ),
                                f = ((e, t = []) => {
                                    const u = (0, s.useRef)(),
                                        n = (0, s.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
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
                                        W(() => {
                                            const e = _.current;
                                            e &&
                                                (C(i(e, A.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [C, A.scrollPosition.goal],
                                ),
                                B = (0, G.z)(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = i(e, A.scrollPosition.goal);
                                    t !== A.scrollPosition.goal && C(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
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
                                            e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', u);
                                        }
                                    );
                                }, [_]);
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? a(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: D,
                                    applyScroll: C,
                                    applyStepTo: h,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: F,
                                    animationScroll: A,
                                    recalculateContent: B,
                                    events: { on: E.on, off: E.off },
                                }),
                                [A.scrollPosition, C, h, E.off, E.on, B, D, F, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    te = ee({
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
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? J.Next : J.Prev),
                        forceTriggerMouseMove: $.O.view.forceTriggerMouseMove,
                    }),
                    ue = 'HorizontalBar_base_49',
                    ne = 'HorizontalBar_base__nonActive_82',
                    ae = 'HorizontalBar_leftButton_5f',
                    re = 'HorizontalBar_rightButton_03',
                    se = 'HorizontalBar_track_0d',
                    ie = 'HorizontalBar_thumb_fd',
                    oe = 'HorizontalBar_rail_32',
                    le = 'disable',
                    ce = { pending: !1, offset: 0 },
                    _e = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    de = () => {},
                    me = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ee = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = _e, onDrag: n = de }) => {
                        const a = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, s.useState)(ce),
                            E = m[0],
                            p = m[1],
                            g = (0, s.useCallback)(
                                (e) => {
                                    p(e),
                                        _.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [n],
                            ),
                            A = () => {
                                const t = c.current,
                                    u = _.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    l = j(0, 1, s / (a - n)),
                                    d = (t.offsetWidth - me(t, i)) * l;
                                (u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && o.current && c.current && _.current) {
                                            if (0 === e)
                                                return r.current.classList.add(le), void o.current.classList.remove(le);
                                            if (
                                                ((t = c.current),
                                                (u = _.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return r.current.classList.remove(le), void o.current.classList.add(le);
                                            var t, u;
                                            r.current.classList.remove(le), o.current.classList.remove(le);
                                        }
                                    })(d);
                            },
                            F = (0, G.z)(() => {
                                (() => {
                                    const t = _.current,
                                        u = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const s = Math.min(1, n / r);
                                    (t.style.width = `${me(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(ne) : a.current.classList.remove(ne));
                                })(),
                                    A();
                            });
                        (0, s.useEffect)(() => W(F)),
                            (0, s.useEffect)(
                                () =>
                                    W(() => {
                                        const t = () => {
                                            A();
                                        };
                                        let u = de;
                                        const n = () => {
                                            u(), (u = W(F));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = $.O.client.events.mouse.move(([t, u]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            o = _.current;
                                        if (!i || !o) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - i.getBoundingClientRect().x,
                                            d = (l / i.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: d });
                                    }),
                                    u = $.O.client.events.mouse.up(() => {
                                        t(), g(ce);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, n, g]);
                        const b = U((t) => e.applyStepTo(t), d, [e]),
                            C = b[0],
                            h = b[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const D = (e) => {
                            e.target.classList.contains(le) || (0, Z.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(ue, t.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(ae, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(le) || 0 !== e.button || ((0, Z.G)('play'), C(J.Next));
                                },
                                onMouseUp: h,
                                ref: r,
                                onMouseEnter: D,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(se, t.track),
                                    onMouseDown: (t) => {
                                        const n = _.current;
                                        if (n && 0 === t.button)
                                            if (((0, Z.G)('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = _.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? J.Prev : J.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                i().createElement('div', { ref: _, className: l()(ie, t.thumb) }),
                                i().createElement('div', { className: l()(oe, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(re, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(le) || 0 !== e.button || ((0, Z.G)('play'), C(J.Prev));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    pe = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ge = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: r,
                        scrollClassName: o,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(pe.base, e.base) });
                            }, [n]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(pe.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(pe.defaultScrollArea, a) },
                                i().createElement(Ae, { className: o, api: m, classNames: r }, e),
                            ),
                            i().createElement(Ee, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    Ae = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, s.useEffect)(() => W(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(pe.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: l()(pe.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: l()(pe.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Ae.Bar = Ee), (Ae.Default = ge);
                const Fe = ee({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? J.Next : J.Prev),
                    }),
                    be = 'VerticalBar_base_f3',
                    Ce = 'VerticalBar_base__nonActive_42',
                    he = 'VerticalBar_topButton_d7',
                    De = 'VerticalBar_bottomButton_06',
                    fe = 'VerticalBar_track_df',
                    Be = 'VerticalBar_thumb_32',
                    ve = 'VerticalBar_rail_43',
                    ye = 'disable',
                    we = () => {},
                    xe = { pending: !1, offset: 0 },
                    ke = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Se = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ne = (e, t) => Math.max(20, e.offsetHeight * t),
                    Le = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ke, onDrag: n = we }) => {
                        const a = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, s.useState)(xe),
                            E = m[0],
                            p = m[1],
                            g = (0, s.useCallback)(
                                (e) => {
                                    p(e),
                                        _.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [n],
                            ),
                            A = (0, G.z)(() => {
                                const t = _.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${Ne(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(Ce) : a.current.classList.remove(Ce)),
                                    s
                                );
                            }),
                            F = (0, G.z)(() => {
                                const t = c.current,
                                    u = _.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    l = j(0, 1, s / (a - n)),
                                    d = (t.offsetHeight - Ne(t, i)) * l;
                                (u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && o.current && c.current && _.current) {
                                            if (0 === Math.round(e))
                                                return r.current.classList.add(ye), void o.current.classList.remove(ye);
                                            if (
                                                ((t = c.current),
                                                (u = _.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return r.current.classList.remove(ye), void o.current.classList.add(ye);
                                            var t, u;
                                            r.current.classList.remove(ye), o.current.classList.remove(ye);
                                        }
                                    })(d);
                            }),
                            b = (0, G.z)(() => {
                                Se(e, () => {
                                    A(), F();
                                });
                            });
                        (0, s.useEffect)(() => W(b)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    Se(e, () => {
                                        F();
                                    });
                                };
                                let u = we;
                                const n = () => {
                                    u(), (u = W(b));
                                };
                                return (
                                    e.events.on('recalculateContent', b),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', b),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = $.O.client.events.mouse.up(() => {
                                        g(xe);
                                    }),
                                    u = $.O.client.events.mouse.move(([t]) => {
                                        Se(e, (u) => {
                                            const a = c.current,
                                                r = _.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const i = t.screenY - E.offset - a.getBoundingClientRect().y,
                                                o = (i / a.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, n, g]);
                        const C = U((t) => e.applyStepTo(t), d, [e]),
                            h = C[0],
                            D = C[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const f = (e) => {
                            e.target.classList.contains(ye) || (0, Z.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(be, t.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(he, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ye) || 0 !== e.button || ((0, Z.G)('play'), h(J.Next));
                                },
                                ref: r,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(fe, t.track),
                                    onMouseDown: (t) => {
                                        const n = _.current;
                                        if (n && 0 === t.button)
                                            if (((0, Z.G)('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    _.current &&
                                                        Se(e, (n) => {
                                                            if (!n) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? J.Prev : J.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: _, className: l()(Be, t.thumb) }),
                                i().createElement('div', { className: l()(ve, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(De, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ye) || 0 !== e.button || ((0, Z.G)('play'), h(J.Prev));
                                },
                                onMouseUp: D,
                                ref: o,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Oe = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Pe = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: r,
                        scrollClassNames: o,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(Oe.base, e.base) });
                            }, [n]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(Oe.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Oe.area, a) },
                                i().createElement(Te, { className: r, classNames: o, api: m }, e),
                            ),
                            i().createElement(Le, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    Te = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, s.useEffect)(() => W(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Oe.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Oe.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                Te.Default = Pe;
                const Ie = { Vertical: a, Horizontal: n };
                let Re, Me;
                !(function (e) {
                    (e.NONE = 'none'), (e.NOT_FORMED = 'notFormed'), (e.BUILT_IN_STYLE = 'builtInStyle');
                })(Re || (Re = {})),
                    (function (e) {
                        (e.NONE = 'none'),
                            (e.CREW = 'crew'),
                            (e.OPT_DEVICES = 'optDevices'),
                            (e.SHELLS = 'shells'),
                            (e.CONSUMABLES = 'consumables'),
                            (e.STYLES = 'styles');
                    })(Me || (Me = {}));
                var He = u(3755),
                    ze = u(1922);
                let We;
                !(function (e) {
                    (e.NONE = 'none'),
                        (e.DEMOUNT_NOT_POSSIBLE = 'demountNotPossible'),
                        (e.LOAD_CAPACITY_NOT_ENOUGH = 'loadCapacityNotEnough'),
                        (e.NOT_ENOUGH_BUNKS = 'notEnoughBunks');
                })(We || (We = {}));
                const je = (e, t) => (e - 1 + t) % t,
                    $e = (e, t) => (e + 1) % t,
                    Ge = (e, t, u = !1) => {
                        switch (!0) {
                            case u:
                                return 'default';
                            case e:
                                return 'installed';
                            case t:
                                return 'selected';
                            default:
                                return 'default';
                        }
                    },
                    Ue = '172rem',
                    Ze = '6rem',
                    Ve = {
                        linear: (e) => e,
                        easeInQuad: (e) => e * e,
                        easeOutQuad: (e) => e * (2 - e),
                        easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                        easeInCubic: (e) => e * e * e,
                        easeOutCubic: (e) => --e * e * e + 1,
                        easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        easeInQuart: (e) => e * e * e * e,
                        easeOutQuart: (e) => 1 - --e * e * e * e,
                        easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                        easeInQuint: (e) => e * e * e * e * e,
                        easeOutQuint: (e) => 1 + --e * e * e * e * e,
                        easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                        easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                        easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                        easeInOutCirc(e) {
                            const t = Math.sqrt,
                                u = Math.pow;
                            return e < 0.5 ? (1 - t(1 - u(2 * e, 2))) / 2 : (t(1 - u(-2 * e + 2, 2)) + 1) / 2;
                        },
                        easeOutBack(e) {
                            const t = 1.70158;
                            return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                        },
                        bezier: (e, t, u, n) => (a) =>
                            (1 - a) * (1 - a) * (1 - a) * e +
                            3 * (1 - a) * (1 - a) * a * t +
                            3 * (1 - a) * a * a * u +
                            a * a * a * n,
                    },
                    qe = 'AnimatedSwitching_base_b4',
                    Ye = ({ presetIndex: e, configName: t, direction: u, children: n, onStart: a, onRest: r }) => {
                        const s = (0, K.useTransition)(
                            e,
                            Object.assign(
                                {},
                                ((e, t) => {
                                    switch (e) {
                                        case 'crew':
                                            return {
                                                initial: { opacity: 1, x: '0rem' },
                                                from: { opacity: 0, x: 'prev' === t ? '-60rem' : '60rem' },
                                                enter: { opacity: 1, x: '0rem' },
                                                leave: { opacity: 0, x: 'next' === t ? '-60rem' : '60rem' },
                                                config: { duration: 200, easing: Ve.easeOutCubic },
                                            };
                                        case 'slotImage':
                                            return {
                                                initial: { opacity: 1, x: '0' },
                                                from: { opacity: 0, x: 'prev' === t ? '-80%' : '80%' },
                                                enter: { opacity: 1, x: '0' },
                                                leave: { opacity: 0, x: 'next' === t ? '-80%' : '80%' },
                                                config: { duration: 400, easing: Ve.easeOutCubic },
                                            };
                                        case 'style':
                                            return {
                                                initial: { opacity: 1, x: '0' },
                                                from: { opacity: 0, x: 'prev' === t ? '-100%' : '100%' },
                                                enter: { opacity: 1, x: '0' },
                                                leave: { opacity: 0, x: 'next' === t ? '-100%' : '100%' },
                                                config: { duration: 400, easing: Ve.easeOutCubic },
                                            };
                                    }
                                })(t, u),
                                { onStart: a, onRest: r },
                            ),
                        );
                        return s((e, t) => i().createElement(K.animated.div, { style: e, className: qe }, n(t)));
                    };
                var Xe = u(1281);
                let Ke;
                function Je(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function Qe(e) {
                    return e.replace(/-/g, '_');
                }
                function et(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ke || (Ke = {}));
                const tt = (e) => e.replace(/&nbsp;/g, ' '),
                    ut = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    nt = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    at = (e, t, u = Ke.left) => e.split(t).reduce(u === Ke.left ? ut : nt, []),
                    rt = (() => {
                        const e = new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
                            'gum',
                        );
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    st = ['zh_cn', 'zh_sg', 'zh_tw'],
                    it = (e, t = Ke.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (st.includes(u)) return rt(e);
                        if ('ja' === u) {
                            return (0, Xe.D4)()
                                .parse(e)
                                .map((e) => tt(e));
                        }
                        return ((e, t = Ke.left) => {
                            let u = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = tt(e);
                            return at(a, /( )/, t).forEach((e) => (u = u.concat(at(e, n, Ke.left)))), u;
                        })(e, t);
                    },
                    ot = 'FormatText_base_d0',
                    lt = ({ binding: e, text: t = '', classMix: u, alignment: n = Ke.left, formatWithBrackets: a }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const r = a && e ? Je(t, e) : t;
                        return i().createElement(
                            s.Fragment,
                            null,
                            r.split('\n').map((t, a) =>
                                i().createElement(
                                    'div',
                                    { className: l()(ot, u), key: `${t}-${a}` },
                                    ((e, t, u) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : it(e, t))))(
                                        t,
                                        n,
                                        e,
                                    ).map((e, t) => i().createElement(s.Fragment, { key: `${t}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    ct = {
                        base: 'Status_base_77',
                        base__success: 'Status_base__success_c9',
                        checkmark: 'Status_checkmark_9d',
                        text: 'Status_text_fe',
                        base__alert: 'Status_base__alert_46',
                    },
                    _t = ({ state: e, text: t, className: u }) =>
                        i().createElement(
                            'div',
                            { className: l()(ct.base, ct[`base__${e}`], u) },
                            'success' === e && i().createElement('div', { className: ct.checkmark }),
                            i().createElement(lt, { text: t, classMix: ct.text }),
                        ),
                    dt = {
                        'tankman-height': '172rem',
                        'tankman-vertical-margin': '6rem',
                        base: 'Card_base_3c',
                        base__clickable: 'Card_base__clickable_a4',
                        base__default: 'Card_base__default_8c',
                        base__selected: 'Card_base__selected_da',
                        base__installed: 'Card_base__installed_7f',
                        name: 'Card_name_f6',
                        status: 'Card_status_bb',
                    },
                    mt = 'Discount_base_9e',
                    Et = 'Discount_value_39',
                    pt = ({ value: e, className: t }) =>
                        i().createElement(
                            'div',
                            { className: l()(mt, t) },
                            i().createElement(lt, {
                                text: R.strings.tank_setup.easyTankEquipView.discount(),
                                binding: { value: e },
                                classMix: Et,
                            }),
                        ),
                    gt = (0, s.createContext)(null);
                function At() {
                    const e = (0, s.useContext)(gt);
                    if (!e) throw new Error('CardContext is not initialized');
                    return e;
                }
                const Ft = ({
                        name: e,
                        clickable: t = !0,
                        state: u = 'default',
                        showStatus: n = !0,
                        discount: a = 0,
                        className: r,
                        classNames: o,
                        children: c,
                        onClick: _,
                    }) => {
                        const d = (0, s.useState)(!1),
                            m = d[0],
                            E = d[1],
                            p = (0, s.useMemo)(() => ({ state: u, clickable: t, hover: m }), [t, u, m]);
                        return i().createElement(
                            gt.Provider,
                            { value: p },
                            i().createElement(
                                'div',
                                {
                                    onClick: () => {
                                        t && _ && _();
                                    },
                                    onMouseOver: () => {
                                        E(!0);
                                    },
                                    onMouseEnter: () => {
                                        t && 'selected' !== u && $.O.sound.play.highlight();
                                    },
                                    onMouseLeave: () => {
                                        E(!1);
                                    },
                                    className: l()(dt.base, dt[`base__${u}`], t && dt.base__clickable, r),
                                },
                                c,
                                i().createElement(lt, { text: e, classMix: l()(dt.name, null == o ? void 0 : o.name) }),
                                a > 0 && i().createElement(pt, { value: a }),
                                'installed' === u &&
                                    n &&
                                    i().createElement(_t, {
                                        state: 'success',
                                        text: R.strings.tank_setup.easyTankEquipView.installed(),
                                        className: dt.status,
                                    }),
                            ),
                        );
                    },
                    bt = (e, t) => {
                        const u = [];
                        for (let n = 0; n < e; n++) u.push(t(n));
                        return u;
                    },
                    Ct = 'Bullets_base_7f',
                    ht = 'Bullets_bullet_5b',
                    Dt = 'Bullets_bullet__active_3c',
                    ft = ({ count: e, current: t, className: u }) =>
                        i().createElement(
                            'div',
                            { className: l()(Ct, u) },
                            bt(e, (e) => i().createElement('div', { key: e, className: l()(ht, e === t && Dt) })),
                        ),
                    Bt = {
                        base: 'Button_base_e5',
                        base__clickable: 'Button_base__clickable_4d',
                        icon: 'Button_icon_ac',
                        base__prev: 'Button_base__prev_93',
                    },
                    vt = ({ direction: e = 'next', clickable: t = !0, className: u, onClick: n }) =>
                        i().createElement(
                            'div',
                            {
                                onClick: (e) => {
                                    t && n && ($.O.sound.play.click(), n(e));
                                },
                                onMouseEnter: () => t && $.O.sound.play.highlight(),
                                className: l()(Bt.base, Bt[`base__${e}`], t && Bt.base__clickable, u),
                            },
                            i().createElement('div', { className: Bt.icon }),
                        ),
                    yt = 'Name_base_e5',
                    wt = ({ text: e, className: t }) => i().createElement('div', { className: l()(yt, t) }, e),
                    xt = {
                        base: 'SwitchPanel_base_66',
                        container: 'SwitchPanel_container_c5',
                        name: 'SwitchPanel_name_cf',
                    },
                    kt = ({
                        name: e,
                        count: t,
                        currentIndex: u,
                        interactive: n = !0,
                        className: a,
                        onNextClick: r,
                        onPrevClick: s,
                    }) => {
                        const o = t > 1;
                        return i().createElement(
                            'div',
                            { className: l()(xt.base, a) },
                            o &&
                                i().createElement(vt, {
                                    onClick: s,
                                    clickable: n,
                                    direction: 'prev',
                                    className: xt.button,
                                }),
                            i().createElement(
                                'div',
                                { className: xt.container },
                                i().createElement(wt, { text: e, className: xt.name }),
                                o && i().createElement(ft, { count: t, current: u }),
                            ),
                            o && i().createElement(vt, { onClick: r, clickable: n, className: xt.button }),
                        );
                    },
                    St = vt,
                    Nt = ft;
                var Lt = u(4598),
                    Ot = u(9480),
                    Pt = u(3946);
                const Tt = (0, S.q3)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {
                                        presets: e.array('crewProposal.presets'),
                                        switchingDirection: N.LO.box('next'),
                                        switching: N.LO.box(!1),
                                    },
                                    e.primitives(['selected', 'presetIndex', 'disableReason'], 'crewProposal'),
                                ),
                                u = (0, Pt.Om)(
                                    (e) => {
                                        const u = Ot.U2(t.presets.get(), e);
                                        if (!u) throw new Error(`There is no crew preset with index ${e}`);
                                        return u;
                                    },
                                    { equals: Lt.jv },
                                ),
                                n = (0, Pt.Om)(() => {
                                    const e = Ot.DZ(
                                        t.presets.get(),
                                        (e) => e.disableReason === We.NONE,
                                        ({ recruitsCount: e, tankmen: t }) => (e > 0 ? t.length + 1 : t.length),
                                    );
                                    return Math.max(Math.max(...e), 0);
                                });
                            return Object.assign({}, t, { computes: { preset: u, maxTankmenCount: n } });
                        },
                        ({ externalModel: e, model: t }) => ({
                            select: e.createCallback(() => ({ proposalType: Me.CREW }), 'onSelectProposal'),
                            switchPreset: e.createCallback(
                                (e) => ({ proposalType: Me.CREW, presetIndex: e }),
                                'onSwitchPreset',
                            ),
                            setDirection: (0, N.aD)((e) => t.switchingDirection.set(e)),
                            setSwitching: (0, N.aD)((e) => t.switching.set(e)),
                        }),
                    ),
                    It = Tt[0],
                    Rt = Tt[1],
                    Mt = 'BunksAlert_base_92',
                    Ht = 'BunksAlert_image_b2',
                    zt = ({ className: e }) =>
                        i().createElement(
                            'div',
                            { className: l()(Mt, e) },
                            i().createElement('div', { className: Ht }),
                            i().createElement(_t, {
                                state: 'alert',
                                text: R.strings.tank_setup.easyTankEquipView.crew.bunksAlert(),
                            }),
                        );
                var Wt = u(7078);
                let jt, $t, Gt, Ut, Zt;
                !(function (e) {
                    (e.Any = 'any'),
                        (e.Commander = 'commander'),
                        (e.Radioman = 'radioman'),
                        (e.Driver = 'driver'),
                        (e.Gunner = 'gunner'),
                        (e.Loader = 'loader');
                })(jt || (jt = {})),
                    (function (e) {
                        (e.InBarracks = 'in_barracks'), (e.InTank = 'in_tank'), (e.Dismissed = 'dismissed');
                    })($t || ($t = {})),
                    (function (e) {
                        (e.Tankman = 'tankman'), (e.Recruit = 'recruit'), (e.Dismissed = 'dismissed');
                    })(Gt || (Gt = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                    })(Ut || (Ut = {})),
                    (function (e) {
                        (e.IsLockCrew = 'isLockCrew'), (e.TankmanHasRole = 'tankmanHasRole');
                    })(Zt || (Zt = {}));
                var Vt = u(5475);
                var qt = u(9690);
                const Yt = (e, t) => e.split(',').includes(t),
                    Xt = {
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
                let Kt, Jt;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Kt || (Kt = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(Jt || (Jt = {}));
                const Qt = ({
                    isElite: e,
                    vehicleName: t,
                    vehicleShortName: u,
                    vehicleType: n,
                    vehicleLvl: a,
                    tags: r = '',
                    size: s = Kt.extraSmall,
                    type: o = Jt.colored,
                    className: c,
                    classNames: _,
                    isShortName: d = !1,
                }) => {
                    const m = `${Qe(n)}${e ? '_elite' : ''}`,
                        E = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                    return i().createElement(
                        'div',
                        { className: l()(Xt.base, Xt[`base__size${et(s)}`], Xt[`base__type${et(o)}`], c) },
                        i().createElement(
                            'div',
                            { className: l()(Xt.level, null == _ ? void 0 : _.level) },
                            (0, qt.HG)(a),
                        ),
                        i().createElement('div', {
                            className: l()(
                                Xt.type,
                                e && Xt[`type__elite${et(s)}`],
                                Xt[`type__${s}`],
                                null == _ ? void 0 : _.typeIcon,
                            ),
                            style: n ? { backgroundImage: `url(${E})` } : void 0,
                        }),
                        Yt(r, 'premiumIGR') && i().createElement('div', { className: Xt.premiumIGR }),
                        i().createElement('div', { className: l()(Xt.name, null == _ ? void 0 : _.name) }, d ? u : t),
                    );
                };
                let eu, tu, uu, nu, au, ru, su;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap');
                })(eu || (eu = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(tu || (tu = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency');
                    })(uu || (uu = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(nu || (nu = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(au || (au = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(ru || (ru = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(su || (su = {}));
                const iu = 'Role_base_68',
                    ou = 'Role_base__disabled_8c';
                var lu;
                !(function (e) {
                    (e.White = 'white'), (e.Red = 'red');
                })(lu || (lu = {}));
                const cu = i().memo(({ role: e, withPenalty: t, className: u, isDisabled: n = !1 }) =>
                        e !== jt.Any
                            ? i().createElement('div', {
                                  className: l()(iu, n && ou, u),
                                  style: {
                                      backgroundImage: `url(R.images.gui.maps.icons.tankmen.roles.opaque.${t ? lu.Red : lu.White}.${e})`,
                                  },
                              })
                            : null,
                    ),
                    _u = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let du;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(du || (du = {}));
                const mu = (0, s.memo)(function ({ name: e, size: t = du.c100x60, classMix: u, isSkin: n = !1 }) {
                        let a = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                        n && (a = a.$dyn('crewSkins'));
                        const r = a.$dyn(Qe(e));
                        return (
                            r ||
                                console.error(
                                    `Can't find ${Qe(e)} in R.images.gui.maps.icons.tankmen.icons.${t}${n ? '.crewSkins' : ''}`,
                                ),
                            i().createElement('div', {
                                style: { backgroundImage: `url(${r})` },
                                className: l()(_u.base, _u[`base__${t}`], u),
                            })
                        );
                    }),
                    Eu = 'Location_base_66',
                    pu = 'Location_count_6b',
                    gu = 'Location_icon_c8',
                    Au = ({ count: e, location: t, className: u }) =>
                        i().createElement(
                            'div',
                            { className: l()(Eu, u) },
                            Boolean(e) && i().createElement('div', { className: pu }, e),
                            i().createElement('div', {
                                className: gu,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.proposals.location.${t})`,
                                },
                            }),
                        ),
                    Fu = 'Divider_base_b7',
                    bu = ({ className: e }) => i().createElement('div', { className: l()(Fu, e) }),
                    Cu = 'Experienced_base_d4',
                    hu = 'Experienced_image_ab',
                    Du = 'Experienced_portrait_89',
                    fu = 'Experienced_location_5d',
                    Bu = 'Experienced_location__visible_2a',
                    vu = 'Experienced_divider_6b',
                    yu = 'Experienced_row_82',
                    wu = 'Experienced_role_61',
                    xu = 'Experienced_name_2f',
                    ku = 'Experienced_name__postProgression_84',
                    Su = 'Experienced_tankName_83',
                    Nu = 'Experienced_tankNameText_41',
                    Lu = 'Experienced_levelText_e5',
                    Ou = 'Experienced_skillsRow_1e';
                let Pu;
                !(function (e) {
                    (e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved');
                })(Pu || (Pu = {}));
                const Tu = 'new_skill';
                let Iu;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
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
                        (e.Prom = 'prom');
                })(Iu || (Iu = {}));
                const Ru = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let Mu;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(Mu || (Mu = {}));
                const Hu = i().memo(function ({ iconName: e, size: t = Mu.c24x24, className: u }) {
                    var n;
                    const a = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                    return i().createElement('div', {
                        style: null !== a ? { backgroundImage: `url(${a})` } : void 0,
                        className: l()(Ru.base, Ru[`base__${t}`], u),
                    });
                });
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let zu;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(zu || (zu = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let Wu;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
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
                        (e.RUDY = 'rudy');
                })(Wu || (Wu = {}));
                let ju;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(ju || (ju = {}));
                var $u = u(9916);
                const Gu = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
                let Uu;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(Uu || (Uu = {}));
                (0, s.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = -1,
                        className: u,
                        targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: a = Uu.Normal,
                    }) => {
                        const r = -1 === e,
                            s = r
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: t };
                        return i().createElement(
                            Wt.t,
                            { targetId: n, args: s, isEnabled: -1 !== t },
                            i().createElement(
                                'div',
                                { className: l()(Gu.base, Gu[`base__${a}`], r && Gu.base__untrained, u) },
                                r
                                    ? i().createElement('div', { className: Gu.icon })
                                    : i().createElement(
                                          'div',
                                          { className: l()(Gu.percent, 1 === e && Gu.percent__full) },
                                          ((o = $u.Z5.getNumberFormat(100 * e, $u.B3.INTEGRAL)),
                                          Je(R.strings.common.percentValue(), { value: o })),
                                      ),
                            ),
                        );
                        var o;
                    },
                );
                const Zu = {
                        base: 'Skill_base_1f',
                        base__c_24x24: 'Skill_base__c_24x24_29',
                        base__c_44x44: 'Skill_base__c_44x44_5a',
                        background: 'Skill_background_02',
                        base__borderLightYellow: 'Skill_base__borderLightYellow_09',
                        base__borderYellow: 'Skill_base__borderYellow_3e',
                        base__borderRed: 'Skill_base__borderRed_d2',
                        base__typeBonus: 'Skill_base__typeBonus_23',
                        base__disabled: 'Skill_base__disabled_85',
                        newSkillHighLight: 'Skill_newSkillHighLight_44',
                        icon: 'Skill_icon_b0',
                        disabledOverlay: 'Skill_disabledOverlay_3b',
                    },
                    Vu = { [au.c24x24]: Mu.c22x22, [au.c44x44]: Mu.c52x52 },
                    qu = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        type: n,
                        iconName: a,
                        name: r,
                        skillState: s,
                        battleBooster: o,
                        className: c,
                    }) => {
                        const _ = o !== Pu.None,
                            d = ((e, t, u, n, a = ju.Normal) =>
                                e === Tu
                                    ? nu.LightYellow
                                    : a === ju.Untrained || n
                                      ? t === su.Learning
                                          ? nu.Yellow
                                          : nu.Grey
                                      : a === ju.Low
                                        ? u
                                            ? nu.Grey
                                            : nu.Red
                                        : t === su.Learning
                                          ? nu.Yellow
                                          : nu.Grey)(r, s, _, t, u),
                            m = (!_ && u === ju.Untrained) || t,
                            E = a === Tu;
                        return i().createElement(
                            'div',
                            {
                                className: l()(
                                    Zu.base,
                                    Zu[`base__type${et(n)}`],
                                    Zu[`base__state${et(s)}`],
                                    Zu[`base__border${et(d)}`],
                                    Zu[`base__${e}`],
                                    m && Zu.base__disabled,
                                    c,
                                ),
                            },
                            i().createElement('div', {
                                className: Zu.background,
                                style:
                                    n === ru.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${d}')`,
                                          }
                                        : void 0,
                            }),
                            E && s === su.Learned && i().createElement('div', { className: Zu.newSkillHighLight }),
                            i().createElement(Hu, { iconName: a, size: Vu[e], className: Zu.icon }),
                            m && i().createElement('div', { className: Zu.disabledOverlay }),
                        );
                    },
                    Yu = 'SkillsRow_base_bd',
                    Xu = 'SkillsRow_skill_10';
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const Ju = ({ skills: e, skillsEfficiency: t, skillType: u, className: n }) =>
                    i().createElement(
                        'div',
                        { className: l()(Yu, n) },
                        Ot.UI(e, (e, n) => {
                            return i().createElement(
                                qu,
                                Ku({}, e, {
                                    key: n,
                                    size: au.c24x24,
                                    type: u,
                                    efficiencyState: ((a = t), -1 === a ? ju.Untrained : a < 1 ? ju.Low : ju.Normal),
                                    skillState: su.Learned,
                                    className: Xu,
                                }),
                            );
                            var a;
                        }),
                    );
                function Qu() {
                    return (
                        (Qu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Qu.apply(this, arguments)
                    );
                }
                const en = (0, x.Pi)(({ tankman: e, className: t }) => {
                        const u = Rt().model,
                            n = At();
                        return i().createElement(
                            'div',
                            { className: l()(Cu, t) },
                            i().createElement(
                                'div',
                                { className: hu },
                                i().createElement(
                                    Wt.t,
                                    {
                                        args: { tooltipId: Vt.v$, targetId: e.tankmanID },
                                        isEnabled: !u.switching.get(),
                                        ignoreShowDelay: !1,
                                    },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(mu, {
                                            name: e.iconName,
                                            isSkin: e.isInSkin,
                                            size: du.c158x118,
                                            classMix: Du,
                                        }),
                                    ),
                                ),
                                i().createElement(Au, {
                                    location: e.location === $t.InTank ? 'tank' : 'storage',
                                    className: l()(fu, n.hover && n.clickable && Bu),
                                }),
                            ),
                            i().createElement(bu, { className: vu }),
                            i().createElement(
                                'div',
                                { className: yu },
                                i().createElement(cu, { role: e.role, withPenalty: e.hasRolePenalty, className: wu }),
                                i().createElement(
                                    'div',
                                    { className: l()(xu, e.hasPostProgression && ku) },
                                    e.fullUserName,
                                ),
                            ),
                            i().createElement(
                                Qt,
                                Qu({}, e.tankmanVehicleInfo, {
                                    isShortName: !0,
                                    type: Jt.whiteSpanish,
                                    classNames: { level: Lu, name: Nu },
                                    className: Su,
                                }),
                            ),
                            i().createElement(Ju, {
                                skills: e.skills.majorSkills,
                                skillsEfficiency: e.skills.skillsEfficiency,
                                skillType: ru.Major,
                            }),
                            i().createElement(Ju, {
                                skills: e.skills.bonusSkills,
                                skillsEfficiency: e.skills.skillsEfficiency,
                                skillType: ru.Bonus,
                                className: Ou,
                            }),
                        );
                    }),
                    tn = 'OnlyRecruits_base_e7',
                    un = 'OnlyRecruits_image_17',
                    nn = 'OnlyRecruits_count_cf',
                    an = 'OnlyRecruits_divider_f5',
                    rn = ({ count: e, className: t }) =>
                        i().createElement(
                            'div',
                            { className: l()(tn, t) },
                            i().createElement(
                                'div',
                                { className: un },
                                i().createElement(lt, {
                                    classMix: nn,
                                    text: R.strings.tank_setup.easyTankEquipView.crew.multiplier(),
                                    binding: { count: e },
                                }),
                                i().createElement(bu, { className: an }),
                            ),
                        ),
                    sn = 'Recruit_base_35',
                    on = 'Recruit_image_7f',
                    ln = 'Recruit_divider_10',
                    cn = 'Recruit_gradient_98',
                    _n = 'Recruit_count_8c',
                    dn = 'Recruit_text_7c',
                    mn = R.strings.tank_setup.easyTankEquipView.crew,
                    En = ({ count: e, className: t }) => {
                        return i().createElement(
                            'div',
                            { className: l()(sn, t) },
                            i().createElement('div', { className: on }),
                            i().createElement('div', { className: cn }),
                            i().createElement(bu, { className: ln }),
                            i().createElement(lt, {
                                classMix: dn,
                                text: mn.recruit(e),
                                binding: {
                                    count: i().createElement(
                                        'div',
                                        { className: _n },
                                        ((u = mn.multiplier()),
                                        (n = { count: e }),
                                        u.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                            const t = 0 === e.indexOf('%') ? 2 : 1;
                                            return String(n[e.slice(t, -t)]);
                                        })),
                                    ),
                                },
                            }),
                        );
                        var u, n;
                    },
                    pn = 'Tankmen_base_06',
                    gn = 'Tankmen_recruit_16',
                    An = 'Tankmen_onlyRecruits_10',
                    Fn = (0, x.Pi)(({ presetIndex: e }) => {
                        const t = Rt().model.computes.preset(e),
                            u = t.recruitsCount,
                            n = t.tankmen;
                        return 0 === n.length
                            ? i().createElement(rn, { count: u, className: An })
                            : i().createElement(
                                  'div',
                                  { className: pn },
                                  Ot.UI(n, (e) => i().createElement(en, { key: e.tankmanID, tankman: e })),
                                  u > 0 && i().createElement(En, { count: u, className: gn }),
                              );
                    }),
                    bn = (0, x.Pi)(({ index: e }) =>
                        Rt().model.computes.preset(e).disableReason === We.NOT_ENOUGH_BUNKS
                            ? i().createElement(zt, null)
                            : i().createElement(Fn, { presetIndex: e }),
                    ),
                    Cn = 'CrewProposal_base_b4',
                    hn = 'CrewProposal_presetWrapper_d9',
                    Dn = R.strings.tank_setup.easyTankEquipView,
                    fn = parseInt(Ue, 10) + 2 * parseInt(Ze, 10),
                    Bn = (0, x.Pi)((e) => {
                        const t = (0, s.useRef)(null),
                            u = Rt(),
                            n = u.model,
                            a = u.controls,
                            r = g().mediaSize,
                            o = n.presetIndex.get(),
                            l = n.computes.preset(o),
                            c = n.computes.maxTankmenCount(),
                            _ = n.presets.get().length,
                            d = l.disableReason !== We.NONE,
                            E = !(1 === _ && d);
                        return (
                            (0, s.useEffect)(() => {
                                function e() {
                                    if (!t.current) return;
                                    const e = Math.max(Math.ceil(c / ((e) => (e <= m.Small ? 4 : 6))(r)), 1),
                                        u = e * fn;
                                    t.current.style.height = `${u}rem`;
                                }
                                return (
                                    e(),
                                    window.addEventListener('resize', e),
                                    () => window.removeEventListener('resize', e)
                                );
                            }, [r, c]),
                            i().createElement(
                                Ft,
                                {
                                    name: Dn.crew.title(),
                                    clickable: !d && !l.installed,
                                    state: Ge(l.installed, n.selected.get(), d),
                                    className: e.className,
                                    onClick: () => {
                                        $.O.sound.play.yes1(), a.select();
                                    },
                                },
                                i().createElement(
                                    'div',
                                    { className: Cn },
                                    i().createElement(
                                        'div',
                                        { ref: t, className: hn },
                                        i().createElement(
                                            Ye,
                                            {
                                                configName: 'crew',
                                                presetIndex: o,
                                                direction: n.switchingDirection.get(),
                                                onStart: () => a.setSwitching(!0),
                                                onRest: () => a.setSwitching(!1),
                                            },
                                            (e) => i().createElement(bn, { index: e }),
                                        ),
                                    ),
                                    E &&
                                        i().createElement(kt, {
                                            name: Dn.crew.presetNames.$dyn(l.type),
                                            currentIndex: o,
                                            count: _,
                                            onPrevClick: function (e) {
                                                e.stopPropagation(), a.setDirection('prev'), a.switchPreset(je(o, _));
                                            },
                                            onNextClick: function (e) {
                                                e.stopPropagation(), a.setDirection('next'), a.switchPreset($e(o, _));
                                            },
                                        }),
                                ),
                            )
                        );
                    }),
                    vn = (e) => i().createElement(It, null, i().createElement(Bn, e)),
                    yn = (e, t) => {
                        let u = e;
                        const n = t.split('.');
                        for (let e = 0; e < n.length; e++) {
                            if (!u) return '';
                            if (('string' != typeof u && (u = u.$dyn(n[e])), 'string' == typeof u)) return u;
                        }
                        return '';
                    },
                    wn = (e) => {
                        const t = (0, Pt.Om)((t) => {
                                const u = Ot.U2(e.get(), t);
                                if (!u) throw new Error(`There is no preset with index ${t}`);
                                return Object.assign({}, u, {
                                    items: Ot.UI(u.items, (e) =>
                                        Object.assign({}, e, {
                                            info: Object.assign({}, e.info, {
                                                price: Ot.UI(e.info.price, Lt.yR),
                                                defPrice: Ot.UI(e.info.defPrice, Lt.yR),
                                                discount: Ot.UI(e.info.discount, Lt.yR),
                                            }),
                                        }),
                                    ),
                                    price: Object.assign({}, u.price, {
                                        price: Ot.UI(u.price.price, Lt.yR),
                                        defPrice: Ot.UI(u.price.defPrice, Lt.yR),
                                        discount: Ot.UI(u.price.discount, Lt.yR),
                                    }),
                                });
                            }),
                            u = (0, Pt.Om)((e, u) => {
                                const n = Ot.U2(t(e).items, u);
                                if (!n) throw new Error(`There is no slot with index ${u} in preset with index ${e}`);
                                return n;
                            }),
                            n = (0, Pt.Om)((e) => {
                                const u = t(e).items,
                                    n = Ot.DZ(
                                        u,
                                        (e) => void 0 !== Ot.U2(e.info.discount, 0),
                                        (e) => Ot.MH(e.info.discount, 0).value,
                                    ),
                                    a = [...new Set(n)];
                                return 1 === a.length ? a[0] : 0;
                            });
                        return { preset: t, slot: u, cardDiscount: n };
                    },
                    xn = (e) => 'dragging' === e || 'dropping' === e,
                    kn = (e) => 'grabbed' === e || 'dragging' === e,
                    Sn = (0, S.q3)()(
                        ({ observableModel: e }) => {
                            const t = {
                                optDevices: Object.assign(
                                    {
                                        switchingDirection: N.LO.box('next'),
                                        switching: N.LO.box(!1),
                                        presets: e.array('optDevicesProposal.presets'),
                                    },
                                    e.primitives(['selected', 'presetIndex', 'disableReason'], 'optDevicesProposal'),
                                ),
                                shells: Object.assign(
                                    {
                                        switchingDirection: N.LO.box('next'),
                                        switching: N.LO.box(!1),
                                        presets: e.array('shellsProposal.presets'),
                                    },
                                    e.primitives(['selected', 'presetIndex', 'disableReason'], 'shellsProposal'),
                                ),
                                consumables: Object.assign(
                                    {
                                        switchingDirection: N.LO.box('next'),
                                        switching: N.LO.box(!1),
                                        presets: e.array('consumablesProposal.presets'),
                                    },
                                    e.primitives(['selected', 'presetIndex', 'disableReason'], 'consumablesProposal'),
                                ),
                            };
                            return {
                                [Me.OPT_DEVICES]: Object.assign({}, t.optDevices, {
                                    computes: wn(t.optDevices.presets),
                                }),
                                [Me.SHELLS]: Object.assign({}, t.shells, { computes: wn(t.shells.presets) }),
                                [Me.CONSUMABLES]: Object.assign({}, t.consumables, {
                                    computes: wn(t.consumables.presets),
                                }),
                            };
                        },
                        ({ externalModel: e, model: t }) => ({
                            [Me.OPT_DEVICES]: {
                                select: e.createCallback(() => ({ proposalType: Me.OPT_DEVICES }), 'onSelectProposal'),
                                switchPreset: e.createCallback(
                                    (e) => ({ proposalType: Me.OPT_DEVICES, presetIndex: e }),
                                    'onSwitchPreset',
                                ),
                                swapSlots: e.createCallback(
                                    (e, t, u = !1) => ({
                                        proposalType: Me.OPT_DEVICES,
                                        firstSlot: e,
                                        secondSlot: t,
                                        isDndUsed: u,
                                    }),
                                    'onSwapSlots',
                                ),
                                setDirection: (0, N.aD)((e) => t.optDevices.switchingDirection.set(e)),
                                setSwitching: (0, N.aD)((e) => t.optDevices.switching.set(e)),
                            },
                            [Me.SHELLS]: {
                                select: e.createCallback(() => ({ proposalType: Me.SHELLS }), 'onSelectProposal'),
                                switchPreset: e.createCallback(
                                    (e) => ({ proposalType: Me.SHELLS, presetIndex: e }),
                                    'onSwitchPreset',
                                ),
                                swapSlots: e.createCallback(
                                    (e, t, u = !1) => ({
                                        proposalType: Me.SHELLS,
                                        firstSlot: e,
                                        secondSlot: t,
                                        isDndUsed: u,
                                    }),
                                    'onSwapSlots',
                                ),
                                setDirection: (0, N.aD)((e) => t.shells.switchingDirection.set(e)),
                                setSwitching: (0, N.aD)((e) => t.shells.switching.set(e)),
                            },
                            [Me.CONSUMABLES]: {
                                select: e.createCallback(() => ({ proposalType: Me.CONSUMABLES }), 'onSelectProposal'),
                                switchPreset: e.createCallback(
                                    (e) => ({ proposalType: Me.CONSUMABLES, presetIndex: e }),
                                    'onSwitchPreset',
                                ),
                                swapSlots: e.createCallback(
                                    (e, t, u = !1) => ({
                                        proposalType: Me.CONSUMABLES,
                                        firstSlot: e,
                                        secondSlot: t,
                                        isDndUsed: u,
                                    }),
                                    'onSwapSlots',
                                ),
                                setDirection: (0, N.aD)((e) => t.consumables.switchingDirection.set(e)),
                                setSwitching: (0, N.aD)((e) => t.consumables.switching.set(e)),
                            },
                        }),
                    ),
                    Nn = Sn[0],
                    Ln = Sn[1];
                var On = u(6373),
                    Pn = u(9683),
                    Tn = u(8401);
                const In = 'CostSummary_base_43',
                    Rn = 'CostSummary_currency_7a',
                    Mn = 'CostSummary_discount_10',
                    Hn = 'CostSummary_alertIcon_b6';
                function zn() {
                    return (
                        (zn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        zn.apply(this, arguments)
                    );
                }
                const Wn = R.strings.tank_setup.easyTankEquipView,
                    jn = (0, x.Pi)((e) => {
                        const t = Ln(),
                            u = t.model[e.type],
                            n = u.presetIndex.get(),
                            a = u.computes.preset(n),
                            r = a.storedItemsCount,
                            s = a.installedItemsCount,
                            o = a.price,
                            c = a.disableReason;
                        return i().createElement(
                            'div',
                            { className: l()(In, e.className) },
                            r > 0 && i().createElement(Au, { location: 'storage', count: r }),
                            s > 0 && i().createElement(Au, { location: 'tank', count: s }),
                            e.type === Me.OPT_DEVICES &&
                                i().createElement(Pn.k, {
                                    value: t.model.optDevices.computes.preset(n).demountKitsCount,
                                }),
                            Ot.G(o.price, (e) => e.value > 0) &&
                                i().createElement(
                                    Tn.t,
                                    zn({}, o, { tooltipEnabled: !0, classNames: { currency: Rn, discount: Mn } }),
                                ),
                            c !== We.NONE &&
                                i().createElement(
                                    On.i,
                                    { header: Wn.alert.unableToMount(), body: Wn.alert.$dyn(c) },
                                    i().createElement('div', { className: Hn }),
                                ),
                        );
                    }),
                    $n = i().createContext(null),
                    Gn = () => {
                        const e = (0, s.useContext)($n);
                        if (!e) throw new Error('No drag and drop context.');
                        return e;
                    },
                    Un = (e) => ({
                        x: e.getBoundingClientRect().x + e.offsetWidth / 2,
                        y: e.getBoundingClientRect().y + e.offsetHeight / 2,
                    }),
                    Zn = (e, t) => e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom,
                    Vn = {
                        disabled: !1,
                        getDropVector(e, t) {
                            const u = Un(e),
                                n = Un(t);
                            return { x: n.x - u.x, y: n.y - u.y };
                        },
                    },
                    qn = (e) => {
                        const t = (0, s.useMemo)(() => Object.assign({}, Vn, e), [e]),
                            u = (0, s.useRef)(null),
                            n = (0, s.useRef)({}),
                            a = (0, s.useRef)({}),
                            r = (0, s.useRef)({
                                grabPosition: { screenX: 0, screenY: 0 },
                                bounds: { minX: 0, maxX: 0, minY: 0, maxY: 0 },
                            }),
                            i = Y(),
                            o = (0, s.useState)('idle'),
                            l = o[0],
                            c = o[1],
                            _ = (0, s.useState)(null),
                            d = _[0],
                            m = _[1],
                            E = (0, s.useState)(null),
                            p = E[0],
                            g = E[1],
                            A = (0, s.useCallback)((e, t) => {
                                n.current[e] = t;
                            }, []),
                            F = (0, s.useCallback)((e) => {
                                delete n.current[e];
                            }, []),
                            b = (0, s.useCallback)((e, t) => {
                                a.current[e] = { ref: t };
                            }, []),
                            C = (0, s.useCallback)((e) => {
                                delete a.current[e];
                            }, []),
                            h = (0, s.useCallback)((e) => n.current[e], []),
                            D = (0, s.useCallback)((e) => a.current[e], []),
                            f = (0, s.useCallback)((e) => Object.keys(n.current).filter((t) => h(t).zoneId === e), [h]),
                            B = (0, s.useCallback)(
                                (e) => {
                                    const t = Un(h(e).ref),
                                        u = Object.keys(a.current).find((e) => Zn(t, D(e).ref.getBoundingClientRect())),
                                        n = null != u ? u : null;
                                    return g(n), n;
                                },
                                [h, D],
                            ),
                            v = (0, s.useCallback)(
                                (e, u, n) => {
                                    const a = h(e),
                                        r = D(u),
                                        s = t.getDropVector(a.ref, r.ref);
                                    a.springApi.start(
                                        Object.assign({}, n, {
                                            x: a.animatedPosition.x.get() + s.x,
                                            y: a.animatedPosition.y.get() + s.y,
                                        }),
                                    );
                                },
                                [t, h, D],
                            ),
                            y = (0, s.useCallback)(
                                (e, n) => {
                                    const a = u.current;
                                    if (t.disabled || !a) return;
                                    c('grabbed'), m(n), B(n);
                                    const s = h(n).ref.getBoundingClientRect(),
                                        o = a.getBoundingClientRect();
                                    (r.current = {
                                        grabPosition: { screenX: e.screenX, screenY: e.screenY },
                                        bounds: {
                                            minX: o.left - s.left,
                                            maxX: o.right - s.right,
                                            minY: o.top - s.top,
                                            maxY: o.bottom - s.bottom,
                                        },
                                    }),
                                        i.trigger('grab', n);
                                },
                                [t.disabled, i, h, B],
                            ),
                            w = (0, s.useCallback)(() => {
                                c('idle'), m(null), g(null);
                            }, []);
                        return (
                            (0, s.useLayoutEffect)(() => {
                                if ('idle' === l || 'dropping' === l || null === d) return;
                                const e = h(d),
                                    t = $.O.client.events.mouse.move((t) => {
                                        c('dragging'),
                                            B(d),
                                            i.trigger('drag', t),
                                            e.springApi.set(
                                                ((e) => {
                                                    const t = r.current,
                                                        u = t.bounds,
                                                        n = t.grabPosition;
                                                    return {
                                                        x: j(u.minX, u.maxX, e[0].screenX - n.screenX),
                                                        y: j(u.minY, u.maxY, e[0].screenY - n.screenY),
                                                    };
                                                })(t),
                                            );
                                    }),
                                    u = $.O.client.events.mouse.up((e) => {
                                        if ('grabbed' === l)
                                            return c('idle'), m(null), g(null), void i.trigger('click', d);
                                        c('dropping'), i.trigger('drop', d, B(d), e);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [t.disabled, i, h, D, d, p, l, B]),
                            (0, s.useMemo)(
                                () => ({
                                    handleMouseDown: y,
                                    state: l,
                                    grabbedElementId: d,
                                    emitter: i,
                                    boundingContainerRef: u,
                                    addDraggableElement: A,
                                    removeDraggableElement: F,
                                    addDropZone: b,
                                    removeDropZone: C,
                                    getElement: h,
                                    getZone: D,
                                    getElementsInZone: f,
                                    potentialZoneId: p,
                                    onDropHandled: w,
                                    move: v,
                                    disabled: t.disabled,
                                }),
                                [y, l, d, i, A, F, b, C, h, D, f, p, w, v, t.disabled],
                            )
                        );
                    },
                    Yn = ({ children: e, className: t }) => {
                        const u = Gn();
                        return i().createElement('div', { className: t, ref: u.boundingContainerRef }, e);
                    },
                    Xn = ({ id: e, children: t, className: u }) => {
                        const n = Gn();
                        return i().createElement(
                            'div',
                            {
                                className: u,
                                ref: (t) => {
                                    t ? n.addDropZone(e, t) : n.removeDropZone(e);
                                },
                            },
                            t,
                        );
                    },
                    Kn = (e) => {
                        const t = Gn(),
                            u = (0, K.useSpring)(() => ({ x: 0, y: 0 })),
                            n = u[0],
                            a = u[1];
                        return (
                            (0, s.useLayoutEffect)(() => {
                                a.set({ x: 0, y: 0 });
                            }, [e.zoneId, a]),
                            i().createElement(
                                K.animated.div,
                                {
                                    style: n,
                                    className: e.className,
                                    onMouseDown: (u) => {
                                        t.handleMouseDown(u, e.id);
                                    },
                                    ref: (u) => {
                                        u
                                            ? t.addDraggableElement(e.id, {
                                                  ref: u,
                                                  zoneId: e.zoneId,
                                                  springApi: a,
                                                  animatedPosition: n,
                                              })
                                            : t.removeDraggableElement(e.id);
                                    },
                                },
                                e.children,
                            )
                        );
                    },
                    Jn = {
                        'tankman-height': '172rem',
                        'tankman-vertical-margin': '6rem',
                        base: 'Items_base_79',
                        staticContainer__grabCursor: 'Items_staticContainer__grabCursor_12',
                        draggableElement: 'Items_draggableElement_c0',
                        draggableElement__noEvents: 'Items_draggableElement__noEvents_a4',
                        draggableElement__grabbed: 'Items_draggableElement__grabbed_ad',
                    },
                    Qn = {
                        base: 'Item_base_84',
                        overlay: 'Item_overlay_a1',
                        overlay__equipmentPlus: 'Item_overlay__equipmentPlus_da',
                        overlay__builtInEquipment: 'Item_overlay__builtInEquipment_2b',
                    },
                    ea = ({ imageUrl: e, name: t, overlayType: u, width: n, height: a, level: r, className: s }) => {
                        const o = g().mediaSize,
                            c =
                                null != e
                                    ? e
                                    : ((e, t) => {
                                          const u = t < m.Medium,
                                              n = yn(
                                                  R.images,
                                                  `gui.maps.icons.${u ? 'artefact' : 'quests.bonuses.big'}.${e}`,
                                              );
                                          return '' === n && console.error(`Item image ${e} not found`), n;
                                      })(t, o),
                            _ = ((e, t, u) => {
                                if (!e) return null;
                                const n = `${e}_${'equipmentModernized' === e ? `${u}_overlay` : 'overlay'}`,
                                    a = t < m.Medium,
                                    r = yn(R.images, `gui.maps.icons.quests.bonuses.${a ? 'small' : 'big'}.${n}`);
                                return '' === r && console.error(`Overlay ${n} not found`), r;
                            })(u, o, r);
                        return i().createElement(
                            'div',
                            {
                                className: l()(Qn.base, s),
                                style: { width: `${n}rem`, height: `${a}rem`, backgroundImage: `url(${c})` },
                            },
                            _ &&
                                i().createElement('div', {
                                    className: l()(Qn.overlay, Qn[`overlay__${u}`]),
                                    style: { backgroundImage: `url(${_})` },
                                }),
                        );
                    },
                    ta = (0, x.Pi)((e) => {
                        const t = Ln().model.consumables.computes.slot(e.presetIndex, e.index);
                        return i().createElement(ea, {
                            name: t.iconName,
                            overlayType: t.overlayType,
                            className: e.className,
                        });
                    }),
                    ua = 'Count_base_02',
                    na = (0, x.Pi)((e) => {
                        const t = Ln().model.shells.computes.slot(e.presetIndex, e.slotIndex);
                        return i().createElement('div', { className: l()(ua, e.className) }, t.count);
                    }),
                    aa = (0, x.Pi)((e) => {
                        const t = Ln().model.optDevices.computes.slot(e.presetIndex, e.index);
                        return i().createElement(ea, {
                            name: t.iconName,
                            overlayType: t.overlayType,
                            level: t.level,
                            className: e.className,
                        });
                    }),
                    ra = (0, x.Pi)((e) => {
                        const t = Ln().model,
                            u = g().mediaSize,
                            n = t.shells.computes.slot(e.presetIndex, e.index),
                            a = u < m.Medium,
                            r = yn(R.images, `gui.maps.icons.shell.${a ? 'small' : 'medium'}.${n.iconName}`);
                        '' === r && console.error(`Shell image ${n.iconName} not found`);
                        const s = a ? 55 : 80;
                        return i().createElement(ea, {
                            name: n.iconName,
                            imageUrl: r,
                            overlayType: n.overlayType,
                            width: s,
                            height: s,
                            className: e.className,
                        });
                    }),
                    sa = 'SlotItem_base_1f',
                    ia = 'SlotItem_shellsCount_a2',
                    oa = ({ type: e, slotIndex: t, presetIndex: u }) =>
                        i().createElement(
                            'div',
                            { className: sa },
                            (() => {
                                switch (e) {
                                    case Me.OPT_DEVICES:
                                        return i().createElement(aa, { index: t, presetIndex: u });
                                    case Me.SHELLS:
                                        return i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement(ra, { index: t, presetIndex: u }),
                                            i().createElement(na, { presetIndex: u, slotIndex: t, className: ia }),
                                        );
                                    case Me.CONSUMABLES:
                                        return i().createElement(ta, { index: t, presetIndex: u });
                                    default:
                                        return null;
                                }
                            })(),
                        ),
                    la = (0, x.Pi)((e) => {
                        const t = Ln(),
                            u = t.model[e.type],
                            n = t.controls[e.type],
                            a = u.computes.preset(e.presetIndex).items,
                            r = Gn(),
                            o = w();
                        return (
                            (0, s.useEffect)(() => {
                                const e = (e, t) => {
                                        const u = r.getElement(e);
                                        o.run(() => {
                                            if (null === t || t === u.zoneId)
                                                r.move(e, u.zoneId, { onResolve: r.onDropHandled });
                                            else {
                                                $.O.sound.play.sound('cons_equipment_swipe');
                                                const a = Ot.MH(r.getElementsInZone(t), 0);
                                                r.move(e, t),
                                                    r.move(a, u.zoneId, {
                                                        onResolve: () => {
                                                            r.onDropHandled(),
                                                                n.swapSlots(Number(u.zoneId), Number(t), !0);
                                                        },
                                                    });
                                            }
                                        });
                                    },
                                    t = () => {
                                        $.O.sound.play.yes1(), n.select();
                                    };
                                return (
                                    r.emitter.on('drop', e),
                                    r.emitter.on('click', t),
                                    () => {
                                        r.emitter.off('drop', e), r.emitter.off('click', t);
                                    }
                                );
                            }, [n, r, o]),
                            i().createElement(
                                'div',
                                {
                                    className: l()(Jn.base, e.className),
                                    onClick: (t) => !e.interactive && t.stopPropagation(),
                                },
                                Ot.UI(a, (t, u) =>
                                    i().createElement(
                                        'div',
                                        {
                                            key: `${t.intCD}${u}`,
                                            onMouseOver: () => e.onItemMouseOver(u),
                                            onMouseLeave: e.onItemMouseLeave,
                                            onClick: (e) => e.stopPropagation(),
                                            className: l()(
                                                Jn.staticContainer,
                                                !r.disabled && !kn(r.state) && Jn.staticContainer__grabCursor,
                                            ),
                                        },
                                        i().createElement(
                                            Kn,
                                            {
                                                id: String(t.intCD),
                                                zoneId: String(u),
                                                className: l()(
                                                    Jn.draggableElement,
                                                    !e.interactive && Jn.draggableElement__noEvents,
                                                    r.grabbedElementId === String(t.intCD) &&
                                                        Jn.draggableElement__grabbed,
                                                ),
                                            },
                                            i().createElement(
                                                Wt.t,
                                                {
                                                    args: {
                                                        tooltipId: 'shells' === e.type ? Vt.yr : Vt.rY,
                                                        targetId: t.intCD,
                                                        slotId: t.id,
                                                    },
                                                },
                                                i().createElement(
                                                    'div',
                                                    null,
                                                    i().createElement(oa, {
                                                        type: e.type,
                                                        slotIndex: u,
                                                        presetIndex: e.presetIndex,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    ca = {
                        base: 'LoadoutPreset_base_bd',
                        spacer: 'LoadoutPreset_spacer_24',
                        base__small: 'LoadoutPreset_base__small_80',
                        swapButton: 'LoadoutPreset_swapButton_d8',
                        swapButton__hidden: 'LoadoutPreset_swapButton__hidden_8c',
                    };
                var _a = u(7405),
                    da = u(329);
                const ma = 'Info_base_5b',
                    Ea = 'Info_currency_23',
                    pa = (0, x.Pi)((e) => {
                        const t = Ln().model[e.type],
                            u = t.presetIndex.get(),
                            n = t.computes.slot(u, e.index).info,
                            a = n.isOnVehicle,
                            r = n.isInStorage,
                            s = n.price,
                            o = Ot.U2(s, 0);
                        return i().createElement(
                            'div',
                            { className: l()(ma, e.className) },
                            o && o.value > 0
                                ? i().createElement(_a.F, {
                                      size: da.et.small,
                                      type: o.name,
                                      value: o.value,
                                      isEnough: o.isEnough,
                                      className: Ea,
                                  })
                                : r
                                  ? i().createElement(Au, { location: 'storage' })
                                  : a
                                    ? i().createElement(Au, { location: 'tank' })
                                    : null,
                        );
                    }),
                    ga = 'Slot_base_b5',
                    Aa = 'Slot_base__hover_75',
                    Fa = 'Slot_base__pointed_33',
                    ba = 'Slot_price_f5',
                    Ca = 'Slot_price__hidden_6e',
                    ha = 'Slot_price__noTransition_d0',
                    Da = 'Slot_specialization_95';
                var fa = u(4814);
                const Ba = 'Specialization_background_59',
                    va = (0, x.Pi)((e) => {
                        const t = Ln().model,
                            u = t.optDevices.presetIndex.get(),
                            n = t.optDevices.computes.slot(u, e.slotIndex);
                        return n.specializations.specializations.length
                            ? i().createElement(
                                  'div',
                                  { className: e.className },
                                  i().createElement('div', { className: Ba }),
                                  i().createElement(fa.G, {
                                      specializations: n.specializations.specializations,
                                      isDynamic: n.specializations.isDynamic,
                                      activeSpecsMask: n.activeSpecsMask,
                                  }),
                              )
                            : null;
                    }),
                    ya = (e) => {
                        const t = At(),
                            u = Gn(),
                            n = t.hover && t.clickable && !e.slotsSwapping && !xn(u.state);
                        return (
                            (0, s.useEffect)(() => {
                                e.hover && $.O.sound.play.highlight();
                            }, [e.hover]),
                            i().createElement(
                                'div',
                                { className: l()(ga, e.hover && Aa, e.pointed && Fa, e.className) },
                                i().createElement(pa, {
                                    type: e.type,
                                    index: e.index,
                                    className: l()(ba, !t.clickable && ha, !n && Ca),
                                }),
                                e.type === Me.OPT_DEVICES &&
                                    i().createElement(va, { slotIndex: e.index, className: Da }),
                            )
                        );
                    };
                var wa = u(3457),
                    xa = u(2106);
                const ka = 'SwapButton_icon_cc';
                function Sa() {
                    return (
                        (Sa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Sa.apply(this, arguments)
                    );
                }
                const Na = (e) =>
                        i().createElement(
                            wa.u5,
                            Sa({ type: xa.L.ghost }, e),
                            i().createElement('div', { className: ka }),
                        ),
                    La = (0, x.Pi)((e) => {
                        const t = Ln(),
                            u = t.model[e.type],
                            n = t.controls[e.type],
                            a = (0, s.useState)(null),
                            r = a[0],
                            o = a[1],
                            c = (0, s.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            m = (0, s.useState)(!1),
                            E = m[0],
                            p = m[1],
                            g = At(),
                            A = Gn(),
                            F = u.presetIndex.get(),
                            b = u.computes.preset(F).items,
                            C = u.switching.get(),
                            h = 'idle' === A.state && !C && !E,
                            D = (e) => e === r && g.clickable && h,
                            f = (e) => A.potentialZoneId === String(e) && kn(A.state),
                            B = _ && g.clickable && !E && !xn(A.state);
                        return i().createElement(
                            Yn,
                            { className: e.className },
                            i().createElement(
                                'div',
                                {
                                    className: l()(ca.base, b.length < 3 && ca.base__small),
                                    onMouseOver: () => d(!0),
                                    onMouseLeave: () => d(!1),
                                },
                                bt(b.length, (t) =>
                                    i().createElement(
                                        s.Fragment,
                                        { key: t },
                                        i().createElement(
                                            Xn,
                                            { id: String(t), className: ca.slot },
                                            i().createElement(ya, {
                                                index: t,
                                                hover: D(t),
                                                pointed: f(t),
                                                type: e.type,
                                                slotsSwapping: E,
                                            }),
                                        ),
                                        t !== b.length - 1 &&
                                            i().createElement(
                                                'div',
                                                { className: ca.spacer },
                                                i().createElement(Na, {
                                                    onClick: (e) =>
                                                        ((e, t, u) => {
                                                            e.stopPropagation(),
                                                                p(!0),
                                                                $.O.sound.play.sound('cons_equipment_swipe');
                                                            const a = String(t),
                                                                r = String(u),
                                                                s = Ot.MH(A.getElementsInZone(a), 0),
                                                                i = Ot.MH(A.getElementsInZone(r), 0);
                                                            A.move(s, r),
                                                                A.move(i, a, {
                                                                    onRest() {
                                                                        n.swapSlots(t, u), p(!1);
                                                                    },
                                                                });
                                                        })(e, t, t + 1),
                                                    soundClick: null,
                                                    mixClass: l()(ca.swapButton, !B && ca.swapButton__hidden),
                                                }),
                                            ),
                                    ),
                                ),
                                i().createElement(
                                    Ye,
                                    {
                                        configName: 'slotImage',
                                        presetIndex: F,
                                        direction: u.switchingDirection.get(),
                                        onStart: () => n.setSwitching(!0),
                                        onRest: () => n.setSwitching(!1),
                                    },
                                    (t) =>
                                        i().createElement(la, {
                                            presetIndex: t,
                                            type: e.type,
                                            interactive: h,
                                            onItemMouseOver: (e) => o(e),
                                            onItemMouseLeave: () => o(null),
                                        }),
                                ),
                            ),
                        );
                    }),
                    Oa = 'LoadoutProposalCard_base_ce',
                    Pa = 'LoadoutProposalCard_base__grabbingCursor_aa',
                    Ta = 'LoadoutProposalCard_panel_ac',
                    Ia = 'LoadoutProposalCard_cost_2c',
                    Ra = (0, x.Pi)((e) => {
                        const t = Ln(),
                            u = t.model[e.type],
                            n = t.controls[e.type],
                            a = u.presetIndex.get(),
                            r = u.computes.preset(a),
                            o = u.presets.get().length,
                            c = r.disableReason !== We.NONE,
                            _ = !c && !r.installed,
                            d = (0, s.useMemo)(() => ({ disabled: !_ }), [_]),
                            m = qn(d);
                        const E = yn(R.strings, `tank_setup.easyTankEquipView.${e.type}.title`),
                            p = yn(R.strings, `tank_setup.easyTankEquipView.${e.type}.presetNames.${r.type}`),
                            g = i().useRef(null),
                            A = (0, s.useRef)(!1);
                        return (
                            (0, s.useEffect)(() => {
                                const e = (e, t, [u]) => {
                                    if (!g.current || !m.boundingContainerRef.current) return;
                                    const n = { x: u.screenX, y: u.screenY },
                                        a = g.current.getBoundingClientRect(),
                                        r = m.boundingContainerRef.current.getBoundingClientRect();
                                    Zn(n, a) && !Zn(n, r) && (A.current = !0);
                                };
                                return m.emitter.on('drop', e), () => m.emitter.off('drop', e);
                            }, [m.boundingContainerRef, m.emitter]),
                            i().createElement(
                                $n.Provider,
                                { value: m },
                                i().createElement(
                                    Ft,
                                    {
                                        name: E,
                                        clickable: _,
                                        state: Ge(r.installed, u.selected.get(), c),
                                        discount: u.computes.cardDiscount(a),
                                        className: e.className,
                                        onClick: () => {
                                            if (A.current) return (A.current = !1);
                                            $.O.sound.play.yes1(), n.select();
                                        },
                                    },
                                    i().createElement(
                                        'div',
                                        { className: l()(Oa, kn(m.state) && Pa), ref: g },
                                        i().createElement(La, { type: e.type }),
                                        i().createElement(kt, {
                                            name: p,
                                            currentIndex: a,
                                            interactive: !kn(m.state),
                                            count: o,
                                            onPrevClick: function (e) {
                                                e.stopPropagation(), n.setDirection('prev'), n.switchPreset(je(a, o));
                                            },
                                            onNextClick: function (e) {
                                                e.stopPropagation(), n.setDirection('next'), n.switchPreset($e(a, o));
                                            },
                                            className: Ta,
                                        }),
                                        i().createElement(jn, { type: e.type, className: Ia }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Ma = 'NotFormedCard_base_aa',
                    Ha = 'NotFormedCard_image_6a',
                    za = (e) => {
                        const t = yn(R.strings, `tank_setup.easyTankEquipView.${e.type}.title`);
                        return i().createElement(
                            Ft,
                            { name: t, clickable: !1, className: e.className },
                            i().createElement(
                                'div',
                                { className: Ma },
                                i().createElement('div', { className: Ha }),
                                i().createElement(_t, {
                                    state: 'alert',
                                    text: R.strings.tank_setup.easyTankEquipView.alert.notFormed(),
                                }),
                            ),
                        );
                    },
                    Wa = (0, x.Pi)((e) =>
                        Ln().model[e.type].disableReason.get() === Re.NOT_FORMED
                            ? i().createElement(za, e)
                            : i().createElement(Ra, e),
                    ),
                    ja = 'Proposal_base_b5',
                    $a = 'Proposal_scrollWrapper_db',
                    Ga = 'Proposal_scrollBar_3f',
                    Ua = 'Proposal_row_33',
                    Za = 'Proposal_row__multiple_5b',
                    Va = 'Proposal_loadoutCard_d1',
                    qa = 'Proposal_dealPanel_f8',
                    Ya = 'Proposal_dealPanelPriceSeparator_6d',
                    Xa = 'BuiltInStyleCard_base_ff',
                    Ka = 'BuiltInStyleCard_cardName_64',
                    Ja = 'BuiltInStyleCard_image_0d',
                    Qa = 'BuiltInStyleCard_status_a8',
                    er = R.strings.tank_setup.easyTankEquipView.styles,
                    tr = ({ className: e }) =>
                        i().createElement(
                            Ft,
                            {
                                name: er.title(),
                                state: 'installed',
                                showStatus: !1,
                                clickable: !1,
                                className: e,
                                classNames: { name: Ka },
                            },
                            i().createElement(
                                'div',
                                { className: Xa },
                                i().createElement('div', { className: Ja }),
                                i().createElement(_t, { state: 'success', text: er.builtInStyle(), className: Qa }),
                            ),
                        ),
                    ur = (0, S.q3)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {
                                        presets: e.array('styleProposal.presets'),
                                        switchingDirection: N.LO.box('next'),
                                        switching: N.LO.box(!1),
                                    },
                                    e.primitives(['selected', 'presetIndex', 'disableReason'], 'styleProposal'),
                                ),
                                u = (0, Pt.Om)(
                                    (e) => {
                                        const u = Ot.U2(t.presets.get(), e);
                                        if (!u) throw new Error(`There is no style preset with index ${e}`);
                                        return u;
                                    },
                                    { equals: Lt.jv },
                                ),
                                n = (0, Pt.Om)((e) => {
                                    const t = u(e).price.discount;
                                    return t.length > 0 ? Ot.MH(t, 0).value : 0;
                                });
                            return Object.assign({}, t, { computes: { preset: u, cardDiscount: n } });
                        },
                        ({ externalModel: e, model: t }) => ({
                            select: e.createCallback(() => ({ proposalType: Me.STYLES }), 'onSelectProposal'),
                            switchPreset: e.createCallback(
                                (e) => ({ proposalType: Me.STYLES, presetIndex: e }),
                                'onSwitchPreset',
                            ),
                            setDirection: (0, N.aD)((e) => t.switchingDirection.set(e)),
                            setSwitching: (0, N.aD)((e) => t.switching.set(e)),
                        }),
                    ),
                    nr = ur[0],
                    ar = ur[1],
                    rr = 'CostSummary_base_dd',
                    sr = 'CostSummary_rent_2d',
                    ir = 'CostSummary_discount_fa';
                function or() {
                    return (
                        (or =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        or.apply(this, arguments)
                    );
                }
                const lr = (0, x.Pi)((e) => {
                        const t = ar().model,
                            u = t.presetIndex.get(),
                            n = t.computes.preset(u),
                            a = n.storedItemsCount,
                            r = n.installedItemsCount,
                            s = n.rentDuration,
                            o = n.price;
                        return i().createElement(
                            'div',
                            { className: l()(rr, e.className) },
                            (() => {
                                switch (!0) {
                                    case r > 0:
                                        return i().createElement(Au, { location: 'tank', count: r });
                                    case a > 0:
                                        return i().createElement(Au, { location: 'storage', count: a });
                                    case s > 0:
                                        return i().createElement(lt, {
                                            text: R.strings.tank_setup.easyTankEquipView.styles.rent(),
                                            binding: {
                                                battlesCount: s,
                                                price: i().createElement(
                                                    Tn.t,
                                                    or({}, o, { tooltipEnabled: !0, classNames: { discount: ir } }),
                                                ),
                                            },
                                            classMix: sr,
                                        });
                                    default:
                                        return null;
                                }
                            })(),
                        );
                    }),
                    cr = 'Style_base_5a',
                    _r = 'Style_fogging_00',
                    dr = 'Style_name_cf',
                    mr = (0, x.Pi)(({ presetIndex: e, className: t }) => {
                        const u = ar().model.computes.preset(e);
                        return i().createElement(
                            'div',
                            { className: l()(cr, t), style: { backgroundImage: `url('${u.image}')` } },
                            i().createElement('div', { className: _r }),
                            i().createElement('div', { className: dr }, u.name),
                        );
                    }),
                    Er = 'StylesPresetsCard_base_ee',
                    pr = 'StylesPresetsCard_cardName_e9',
                    gr = 'StylesPresetsCard_container_43',
                    Ar = 'StylesPresetsCard_style_83',
                    Fr = 'StylesPresetsCard_bullets_7a',
                    br = 'StylesPresetsCard_cost_c4',
                    Cr = R.strings.tank_setup.easyTankEquipView,
                    hr = (0, x.Pi)((e) => {
                        const t = ar(),
                            u = t.model,
                            n = t.controls,
                            a = u.presetIndex.get(),
                            r = u.presets.get().length,
                            s = u.computes.preset(a),
                            o = r > 1;
                        return i().createElement(
                            Ft,
                            {
                                name: Cr.styles.title(),
                                clickable: !s.installed,
                                state: Ge(s.installed, u.selected.get()),
                                className: e.className,
                                classNames: { name: pr },
                                discount: u.computes.cardDiscount(a),
                                onClick: () => {
                                    $.O.sound.play.yes1(), n.select();
                                },
                            },
                            i().createElement(
                                'div',
                                { className: Er },
                                i().createElement(
                                    'div',
                                    { className: gr },
                                    o &&
                                        i().createElement(St, {
                                            direction: 'prev',
                                            onClick: function (e) {
                                                e.stopPropagation(), n.setDirection('prev'), n.switchPreset(je(a, r));
                                            },
                                        }),
                                    i().createElement(
                                        'div',
                                        { className: Ar },
                                        i().createElement(
                                            Ye,
                                            {
                                                configName: 'style',
                                                presetIndex: a,
                                                direction: u.switchingDirection.get(),
                                                onStart: () => n.setSwitching(!0),
                                                onRest: () => n.setSwitching(!1),
                                            },
                                            (e) => i().createElement(mr, { presetIndex: e }),
                                        ),
                                    ),
                                    o &&
                                        i().createElement(St, {
                                            direction: 'next',
                                            onClick: function (e) {
                                                e.stopPropagation(), n.setDirection('next'), n.switchPreset($e(a, r));
                                            },
                                        }),
                                ),
                                o && i().createElement(Nt, { count: r, current: a, className: Fr }),
                                i().createElement(lr, { className: br }),
                            ),
                        );
                    }),
                    Dr = (0, x.Pi)((e) =>
                        ar().model.disableReason.get() === Re.BUILT_IN_STYLE
                            ? i().createElement(tr, e)
                            : i().createElement(hr, e),
                    ),
                    fr = (e) => i().createElement(nr, null, i().createElement(Dr, e)),
                    Br = { base: Ga },
                    vr = {
                        [m.ExtraSmall]: ze.cJ.Tiny,
                        [m.Small]: ze.cJ.Small,
                        [m.Medium]: ze.cJ.Medium,
                        [m.Large]: ze.cJ.Large,
                        [m.ExtraLarge]: ze.cJ.Huge,
                    },
                    yr = (0, x.Pi)(() => {
                        const e = T().controls,
                            t = Fe(),
                            u = g().mediaSize;
                        return i().createElement(
                            'div',
                            { className: ja },
                            i().createElement(
                                Ie.Vertical.Default,
                                { api: t, className: $a, barClassNames: Br },
                                i().createElement(vn, { className: Ua }),
                                i().createElement(
                                    'div',
                                    { className: l()(Ua, Za) },
                                    i().createElement(
                                        Nn,
                                        null,
                                        i().createElement(Wa, { type: Me.OPT_DEVICES, className: Va }),
                                        i().createElement(Wa, { type: Me.SHELLS, className: Va }),
                                        i().createElement(Wa, { type: Me.CONSUMABLES, className: Va }),
                                    ),
                                ),
                                i().createElement(fr, { className: Ua }),
                            ),
                            i().createElement(
                                'div',
                                { className: qa },
                                i().createElement(He.w, {
                                    parentModelPath: 'model',
                                    withConfirmation: !0,
                                    mediaSize: vr[u],
                                    ignoreDiscount: !1,
                                    discountTooltipEnabled: !0,
                                    priceSeparator: i().createElement('div', { className: Ya }),
                                    plusIconShown: !1,
                                    onDealConfirmed: e.confirmDeal,
                                    onDealCancelled: e.cancelDeal,
                                }),
                            ),
                        );
                    });
                let wr, xr, kr, Sr;
                !(function (e) {
                    (e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded');
                })(wr || (wr = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed');
                    })(xr || (xr = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed');
                    })(kr || (kr = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded');
                    })(Sr || (Sr = {}));
                wr.Initialization, xr.Initialization;
                const Nr = (0, S.q3)()(
                        ({ observableModel: e }) => {
                            const t = { groups: e.array('groups', []) };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            onGroupClick: e.createCallback((e) => ({ groupName: e }), 'onGroupClick'),
                        }),
                    ),
                    Lr = Nr[0],
                    Or = Nr[1];
                var Pr = u(2056);
                function Tr() {
                    return (
                        (Tr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Tr.apply(this, arguments)
                    );
                }
                const Ir = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = i().createElement('div', { className: u }, e);
                    if (t.header || t.body) return i().createElement(On.i, t, n);
                    const a = t.contentId;
                    return a ? i().createElement(Pr.u, Tr({}, t, { contentId: a }), n) : i().createElement(Wt.t, t, n);
                };
                var Rr = u(8045);
                const Mr = {
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
                let Hr, zr, Wr;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Hr || (Hr = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(zr || (zr = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Wr || (Wr = {}));
                const jr = { [Wr.NBSP]: Hr.NoBreakSymbol, [Wr.ZWNBSP]: Hr.NoBreakSymbol, [Wr.NEW_LINE]: Hr.LineBreak },
                    $r = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Gr = {
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
                    Ur = 'renderers_noBreakWrapper_10',
                    Zr = 'renderers_lineBreak_b5',
                    Vr = 'renderers_newLine_bd',
                    qr = 'renderers_word_f3',
                    Yr = (e) => ({ color: `#${e}` }),
                    Xr = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? Gr[n]
                                ? i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: l()(qr, Gr[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: qr, style: Yr(n) },
                                      e,
                                  )
                            : i().createElement('span', { key: u, 'data-block-type': t.blockType, className: qr }, e);
                    },
                    Kr = {
                        [Hr.Word]: Xr,
                        [Hr.NoBreakSymbol]: Xr,
                        [Hr.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: u }, e)),
                            ),
                        [Hr.LineBreak]: ({ key: e }) =>
                            i().createElement('span', { key: e, 'data-block-type': Hr.LineBreak, className: Zr }),
                        [Hr.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement('span', { key: t, 'data-block-type': Hr.NewLine, className: Vr }, e),
                        [Hr.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': Hr.NoBreakWrapper, className: Ur },
                                e,
                            ),
                    },
                    Jr = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const s = `${u}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        u = Jr(e, Kr[t], s);
                                    n.push(...u);
                                } else n.push(t({ elementList: [a], textBlock: e, key: s }));
                            }),
                            n
                        );
                    },
                    Qr = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            n = e.blockType,
                                            a = Kr[n],
                                            r = Jr(e, a, t);
                                        return (
                                            n === Hr.NoBreakWrapper
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
                    es = (e, t, u, n) => {
                        let a = t.exec(e),
                            r = 0;
                        for (; a; ) r !== a.index && u(e.slice(r, a.index)), n(a), (r = t.lastIndex), (a = t.exec(e));
                        r !== e.length && u(e.slice(r));
                    },
                    ts = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    us = (e) => {
                        const t = [];
                        return (
                            es(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((u = e), u.match(ts) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    ns = $r
                        ? (e) => {
                              const t = [];
                              return (
                                  es(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...us(e[0]));
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
                                  const s = t.justifyContent === zr.FlexEnd ? n.index : u.lastIndex;
                                  a.push(e.slice(r, s)), (r = s), (n = u.exec(e));
                              }
                              return r !== e.length && a.push(e.slice(r)), a;
                          },
                    as = (e, t = '', u) => {
                        const n = [];
                        return (
                            es(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Hr.Word, colorTag: t, childList: ns(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        a = jr[u.charAt(0)];
                                    a === Hr.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Hr.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: Hr.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: a, colorTag: t, childList: [u] });
                                },
                            ),
                            n
                        );
                    },
                    rs = (e, t, u = '', n) => {
                        const a = [];
                        return (
                            es(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...as(e, u, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        s = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof s || 'number' == typeof s
                                        ? a.push(...as(String(s), u, n))
                                        : a.push({ blockType: Hr.Binding, colorTag: u, childList: [s] });
                                },
                            ),
                            a
                        );
                    },
                    ss = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Hr.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: Hr.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    is = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Hr.NoBreakSymbol
                                        ? ((u = !0), t.push(...ss(t.pop(), e)))
                                        : (u ? t.push(...ss(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    es(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...rs(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...rs(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })(tt(e).replace(/&zwnbsp;/g, '\ufeff'), t, u),
                        );
                        return Qr(n);
                    },
                    os = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    ls = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    cs = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = ls(e, t),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            s = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= u ? [!0, u + s] : [!1, n];
                        }
                        const i = Math.max(u + s, 0);
                        return a < i ? [!1, 0] : [!0, i];
                    },
                    _s = (e, t, u, n, a, r) => {
                        let s = -1,
                            o = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Hr.LineBreak || c === Hr.NewLine || c === Hr.Binding) continue;
                            const _ = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = cs(u, n, a),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (a -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + r,
                                    E = t[l];
                                (o = i().cloneElement(E, E.props, m)), (s = l);
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = _s(e, d, e.length - 1, n, a, r),
                                    E = m[0],
                                    p = m[1];
                                if (!(E < 0)) {
                                    const e = d.slice(0, E);
                                    (o = i().cloneElement(c, c.props, e, p)), (s = l);
                                    break;
                                }
                                a -= _.length;
                            }
                        }
                        return [s, o];
                    },
                    ds = (e, t, u, n = '...') => {
                        const a = [...t],
                            r = e.current;
                        if (!r) return [a, !1];
                        const s = u.height,
                            i = u.width,
                            o = r.lastElementChild;
                        if (!os(o, s) && ls(o, i) <= 0) return [a, !1];
                        const l = r.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const a = u + Math.ceil(0.5 * (n - u));
                                    os(e[a], t) ? (n = a - 1) : (u = a + 1);
                                }
                                return u - 1;
                            })(l, s);
                        if (c < 0) return [a, !1];
                        const _ = _s(l, a, c, i, n.length, n),
                            d = _[0],
                            m = _[1];
                        return m && (a.splice(d, 1, m), a.splice(d + 1)), [a, !0];
                    },
                    ms = i().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: n,
                            isTooltipEnable: a = !1,
                            isTruncationAvailable: r = !1,
                            customTooltipArgs: o,
                            targetId: c,
                            justifyContent: _ = zr.FlexStart,
                            alignContent: d = zr.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const E = (0, s.useRef)(null),
                                p = (0, s.useRef)({ height: 0, width: 0 }),
                                g = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = g[0],
                                F = g[1],
                                b = (0, s.useMemo)(() => is(e, n, { justifyContent: _ }), [n, _, e]),
                                C = (0, s.useMemo)(() => {
                                    if (
                                        a &&
                                        A.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, o, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: c,
                                        };
                                }, [n, a, c, e, o, A.isTruncated]),
                                h = (0, s.useCallback)(
                                    (e) => {
                                        (p.current.width = e.contentRect.width),
                                            (p.current.height = e.contentRect.height);
                                        const t = ds(E, b, p.current, m),
                                            n = t[0],
                                            a = t[1];
                                        F({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a);
                                    },
                                    [u, m, b],
                                ),
                                D = (0, s.useMemo)(() => ({ justifyContent: _, alignContent: d }), [d, _]);
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
                                        const t = new Rr.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, u, e]);
                                })(E, h, r),
                                i().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            Mr.base,
                                            t,
                                            Mr.base__zeroPadding,
                                            r && Mr.base__isTruncationAvailable,
                                        ),
                                        style: D,
                                    },
                                    i().createElement('div', { className: Mr.unTruncated, ref: E }, b),
                                    i().createElement(
                                        Ir,
                                        {
                                            tooltipArgs: C,
                                            className: l()(
                                                Mr.tooltip,
                                                Mr[`tooltip__justify-${_}`],
                                                Mr[`tooltip__align-${d}`],
                                            ),
                                        },
                                        i().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    Mr.truncated,
                                                    !A.isTruncateFinished && r && Mr.truncated__hide,
                                                ),
                                                style: D,
                                            },
                                            A.isTruncateFinished && r ? A.elementList : b,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let Es;
                !(function (e) {
                    (e[(e.none = 0)] = 'none'),
                        (e[(e.increase = 1)] = 'increase'),
                        (e[(e.decrease = 2)] = 'decrease'),
                        (e[(e.mixed = 3)] = 'mixed');
                })(Es || (Es = {}));
                const ps = {
                        base: 'BuffIcon_base_c8',
                        base__increase: 'BuffIcon_base__increase_60',
                        base__decrease: 'BuffIcon_base__decrease_31',
                        base__mixed: 'BuffIcon_base__mixed_23',
                    },
                    gs = i().memo(function ({ buffIconType: e, className: t }) {
                        return e === Es.none
                            ? null
                            : i().createElement('div', { className: l()(ps.base, ps[`base__${Es[e]}`], t) });
                    }),
                    As = 'Delta_base_3e',
                    Fs = 'Delta_base__positive_82',
                    bs = 'Delta_base__negative_86',
                    Cs = i().memo(function ({ isPositive: e, width: t, shift: u, isUseAnim: n }) {
                        const a = (0, K.useSpring)({
                                from: { left: 0, width: 0 },
                                left: e ? 0 : t,
                                width: e ? 0 : Math.abs(t),
                                config: { duration: ks },
                                delay: e ? 0 : ks,
                                immediate: !n,
                            }),
                            r = (0, K.useSpring)({
                                from: { left: 2, width: 0 },
                                left: 2 + u,
                                width: e ? t : 0,
                                config: { duration: ks },
                                delay: e || 0 === t ? ks : 0,
                                immediate: !n,
                            });
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(K.animated.div, { className: l()(As, bs), style: a }),
                            i().createElement(K.animated.div, { className: l()(As, Fs), style: r }),
                        );
                    }),
                    hs = 'Indicator_base_b9',
                    Ds = 'Indicator_progress_ce',
                    fs = 'Indicator_progressMarker_b4',
                    Bs = 'Indicator_indicator_bc',
                    vs = 'Indicator_indicator__start_80',
                    ys = 'Indicator_indicator__end_3b',
                    ws = 'Indicator_marker_f7',
                    xs = 'Indicator_valueLine_1d',
                    ks = 300,
                    Ss = i().memo(function ({
                        minValue: e,
                        maxValue: t,
                        value: u,
                        markerValue: n,
                        delta: a,
                        isUseAnim: r,
                    }) {
                        const s = n === e ? 2 : (n / t) * 254,
                            o = (u / t) * 254,
                            c = (a / t) * 254,
                            _ = a > 0,
                            d = { config: { duration: ks }, immediate: !r },
                            m = (0, K.useSpring)(Object.assign({ from: { left: 2 }, to: { left: s }, delay: ks }, d)),
                            E = (0, K.useSpring)(Object.assign({ from: { width: e }, to: { width: o }, delay: ks }, d));
                        return i().createElement(
                            'div',
                            { className: hs },
                            i().createElement(
                                'div',
                                { className: Ds },
                                i().createElement('div', { className: l()(Bs, vs) }),
                                i().createElement(K.animated.div, { className: xs, style: E }),
                                i().createElement(
                                    'div',
                                    { className: fs },
                                    i().createElement(
                                        K.animated.div,
                                        { className: ws, style: m },
                                        i().createElement(Cs, {
                                            isPositive: _,
                                            width: c,
                                            shift: o - c - s,
                                            isUseAnim: r,
                                        }),
                                    ),
                                ),
                                i().createElement('div', { className: l()(Bs, ys) }),
                            ),
                        );
                    });
                let Ns;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Increase = 'increase'),
                        (e.Decrease = 'decrease'),
                        (e.Situational = 'situational');
                })(Ns || (Ns = {}));
                const Ls = (e) => -(Math.cos(Math.PI * e) - 1) / 2,
                    Os = {
                        base: 'Param_base_51',
                        valueWrapper: 'Param_valueWrapper_85',
                        value: 'Param_value_51',
                        icon: 'Param_icon_37',
                        name: 'Param_name_82',
                        highlight: 'Param_highlight_81',
                        highlight__increase: 'Param_highlight__increase_35',
                        highlight__decrease: 'Param_highlight__decrease_ec',
                        highlight__situational: 'Param_highlight__situational_db',
                    },
                    Ps = i().memo(function ({
                        id: e,
                        value: t,
                        tooltipID: u,
                        isEnabled: n,
                        highlightType: a,
                        localizedName: r,
                    }) {
                        const o = (0, K.useSpring)(() => ({ from: { opacity: 0 } })),
                            c = o[0],
                            _ = o[1],
                            d = a !== Ns.None;
                        return (
                            (0, s.useEffect)(() => {
                                d &&
                                    _.start({
                                        from: { opacity: 0 },
                                        to: [{ opacity: 1 }, { opacity: 0 }],
                                        delay: 100,
                                        config: { duration: 300, easing: Ls },
                                    });
                            }, [t, _, d]),
                            i().createElement(
                                Wt.t,
                                {
                                    args: { tooltipId: u, paramId: e },
                                    targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                    isEnabled: n,
                                },
                                i().createElement(
                                    'div',
                                    { className: Os.base },
                                    i().createElement(
                                        'div',
                                        { className: Os.valueWrapper },
                                        i().createElement(ms, {
                                            justifyContent: zr.FlexEnd,
                                            classMix: Os.value,
                                            text: t,
                                        }),
                                    ),
                                    i().createElement('div', {
                                        className: Os.icon,
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.vehParams.small.${e}')`,
                                        },
                                    }),
                                    i().createElement(
                                        'div',
                                        { className: Os.name },
                                        r || R.strings.menu.tank_params.$dyn(e),
                                    ),
                                    d &&
                                        i().createElement(K.animated.div, {
                                            className: l()(Os.highlight, Os[`highlight__${a}`]),
                                            style: c,
                                        }),
                                ),
                            )
                        );
                    }),
                    Ts = 'Group_base_66',
                    Is = 'Group_group_07',
                    Rs = 'Group_hoverBg_97',
                    Ms = 'Group_hoverBg__scrollable_2a',
                    Hs = 'Group_groupHeader_f5',
                    zs = 'Group_name_21',
                    Ws = 'Group_arrow_96',
                    js = 'Group_arrow__opened_47',
                    $s = 'Group_params_88',
                    Gs = 'Group_params__opened_9a',
                    Us = 'Group_separator_b5',
                    Zs = 'Group_right_13',
                    Vs = 'Group_situational_55',
                    qs = 'Group_buff_fa',
                    Ys = 'Group_value_00',
                    Xs = 'Group_value__additional_81';
                function Ks() {
                    return (
                        (Ks =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ks.apply(this, arguments)
                    );
                }
                const Js = (0, x.Pi)(
                        ({
                            id: e,
                            isOpen: t,
                            params: u,
                            extraParams: n,
                            tooltipID: a,
                            indicator: r,
                            value: s,
                            additionalValue: o,
                            buffIconType: c,
                            isEnabled: _,
                            isScrollable: d,
                            isSituational: m,
                        }) => {
                            const E = Or().controls,
                                p = n && n.length > 0;
                            return i().createElement(
                                'div',
                                { className: Ts },
                                i().createElement(
                                    Wt.t,
                                    {
                                        args: { tooltipId: a, paramId: e },
                                        targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        isEnabled: _,
                                    },
                                    i().createElement(
                                        'div',
                                        {
                                            className: Is,
                                            onClick: () => E.onGroupClick(e),
                                            onMouseEnter: Z.$.playHighlight,
                                        },
                                        i().createElement('div', { className: l()(Rs, d && Ms) }),
                                        i().createElement(
                                            'div',
                                            { className: Hs },
                                            i().createElement('div', { className: l()(Ws, t && js) }),
                                            i().createElement(
                                                'div',
                                                { className: zs },
                                                R.strings.menu.tank_params.$dyn(e),
                                            ),
                                            i().createElement(
                                                'div',
                                                { className: Zs },
                                                m && i().createElement('div', { className: Vs }),
                                                i().createElement(gs, { buffIconType: c, className: qs }),
                                                o && i().createElement(ms, { classMix: l()(Ys, Xs), text: o }),
                                                i().createElement(ms, { classMix: Ys, text: s }),
                                            ),
                                        ),
                                        i().createElement(Ss, r),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: l()($s, t && Gs) },
                                    Ot.UI(u, (e) => i().createElement(Ps, Ks({ key: e.id }, e))),
                                    p && i().createElement('div', { className: Us }),
                                    Ot.UI(n, (e) => i().createElement(Ps, Ks({ key: e.id }, e))),
                                ),
                            );
                        },
                    ),
                    Qs = {
                        base: 'VehicleParams_base_3b',
                        base__bg: 'VehicleParams_base__bg_c4',
                        scroll: 'VehicleParams_scroll_59',
                        content: 'VehicleParams_content_09',
                        barBase: 'VehicleParams_barBase_6f',
                    };
                function ei() {
                    return (
                        (ei =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ei.apply(this, arguments)
                    );
                }
                const ti = {
                        settings: {
                            step: { type: 'fixed', value: 48, clampedArrowStepTimeout: 0 },
                            animationConfig: { tension: 0, friction: 0 },
                        },
                    },
                    ui = (0, x.Pi)(({ showBackground: e = !0, className: t }) => {
                        const u = Or().model,
                            n = (0, s.useState)(!1),
                            a = n[0],
                            r = n[1],
                            o = u.groups.get(),
                            c = Fe(ti);
                        return (
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    const e = c.getContainerSize(),
                                        t = c.getWrapperSize();
                                    e && t && r(e > t);
                                };
                                return (
                                    c.events.on('recalculateContent', e),
                                    () => {
                                        c.events.off('recalculateContent', e);
                                    }
                                );
                            }, [c]),
                            i().createElement(
                                'div',
                                { className: l()(Qs.base, e && Qs.base__bg, t) },
                                i().createElement(
                                    Ie.Vertical.Area.Default,
                                    {
                                        api: c,
                                        barClassNames: { base: Qs.barBase },
                                        scrollClassName: Qs.scroll,
                                        scrollClassNames: { content: Qs.content },
                                    },
                                    i().createElement(
                                        'div',
                                        { className: Qs.groups },
                                        Ot.UI(o, (e) =>
                                            i().createElement(Js, ei({ key: e.id }, e, { isScrollable: a })),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    ni = (0, s.memo)(function (e) {
                        const t = (0, s.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return i().createElement(Lr, { options: t }, i().createElement(ui, e));
                    }),
                    ai = 'VehicleParams_base_84',
                    ri = 'VehicleParams_vehicleInfo_86',
                    si = 'VehicleParams_tankName_cf',
                    ii = 'VehicleParams_tankLevel_39',
                    oi = 'VehicleParams_typeIcon_9c',
                    li = 'VehicleParams_ttc_58';
                function ci() {
                    return (
                        (ci =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ci.apply(this, arguments)
                    );
                }
                const _i = (0, x.Pi)(({ className: e }) => {
                        const t = T().model.vehicleInfo.get();
                        return i().createElement(
                            'div',
                            { className: l()(ai, e) },
                            i().createElement(
                                Qt,
                                ci({}, t, {
                                    className: ri,
                                    classNames: { name: si, level: ii, typeIcon: oi },
                                    isShortName: !0,
                                }),
                            ),
                            i().createElement(ni, {
                                showBackground: !1,
                                resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                className: li,
                            }),
                        );
                    }),
                    di = (0, x.Pi)(() => {
                        const e = T(),
                            t = e.model,
                            u = e.controls,
                            n = w();
                        var a;
                        return (
                            (a = () => n.run(u.showContent)),
                            (0, s.useEffect)(a, []),
                            i().createElement(
                                k.Sf,
                                { show: t.contentShown.get(), onAnimationDone: u.enableBlur, onClose: u.close },
                                i().createElement(
                                    'div',
                                    { className: I },
                                    i().createElement(
                                        'div',
                                        { className: M },
                                        R.strings.tank_setup.easyTankEquipView.title(),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: H },
                                        i().createElement(yr, null),
                                        i().createElement(_i, { className: z }),
                                    ),
                                ),
                            )
                        );
                    }),
                    mi = {
                        getter: (e) =>
                            'vehicleInfo' === e
                                ? {
                                      isElite: !0,
                                      tags: '',
                                      vehicleLvl: 8,
                                      vehicleName: 'Caernarvon Action X',
                                      vehicleNation: 'uk',
                                      vehicleShortName: 'Caernarvon AX',
                                      vehicleType: 'heavyTank',
                                  }
                                : {},
                        controls: ({ model: e }) =>
                            L({
                                close: () => (0, Lt.cM)('close'),
                                showContent: () => {
                                    (0, Lt.cM)('showContent'), e.contentShown.set(!0);
                                },
                                enableBlur: () => (0, Lt.cM)('enableBlur'),
                                confirmDeal: () => (0, Lt.cM)('confirmDeal'),
                                cancelDeal: () => (0, Lt.cM)('cancelDeal'),
                            }),
                    };
                engine.whenReady.then(() => {
                    y().render(
                        i().createElement(
                            P,
                            { mode: 'real', mocks: mi },
                            i().createElement(B, null, i().createElement(di, null)),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            1922: (e, t, u) => {
                'use strict';
                u.d(t, { GS: () => s, cJ: () => r });
                u(6483);
                var n = u(7739),
                    a = u(7363);
                u(1960);
                let r;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(r || (r = {}));
                const s = () => {
                    const e = (0, a.useContext)(n.YN);
                    return e.extraSmall
                        ? r.Tiny
                        : e.small
                          ? r.Small
                          : e.medium || 1080 === e.height
                            ? r.Medium
                            : e.large
                              ? r.Large
                              : e.extraLarge
                                ? r.Huge
                                : r.None;
                };
            },
            5310: (e, t, u) => {
                'use strict';
                u.d(t, { f: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(9916),
                    s = u(7363),
                    i = u.n(s),
                    o = u(2558),
                    l = u(8934),
                    c = u(8529);
                const _ = ({ children: e, when: t, canAccept: u }) => {
                    const n = (0, s.useCallback)((e, t) => {
                            (0, r.Eu)().then(() => {
                                (e.className = ''), e.classList.add(c.Z.base), e.classList.add(t);
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
                        ? i().createElement(
                              o.Z,
                              null,
                              i().createElement(
                                  l.Z,
                                  { in: u, timeout: 500, onEnter: _, onExit: d, key: `index-${u}` },
                                  i().createElement('div', { className: a()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : i().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, t, u) => {
                'use strict';
                u.d(t, { my: () => b, sF: () => D });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6373),
                    s = u(9480),
                    i = u(3403),
                    o = u(7363),
                    l = u.n(o),
                    c = u(1922),
                    _ = u(6391),
                    d = u(5310),
                    m = u(5851),
                    E = u(2306),
                    p = u(7198),
                    g = u(5178),
                    A = u(6826),
                    F = u(628);
                let b, C;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(b || (b = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(C || (C = {}));
                const h = R.strings.tank_setup.dealPanel,
                    D = (0, i.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: u = c.cJ.Medium,
                            panelType: n = C.Row,
                            priceLabel: i = h.toBePaid(),
                            autoRenewalLabel: b,
                            onAutoRenewalChanged: D,
                            onDealConfirmed: f,
                            onDealCancelled: B,
                            priceSeparator: v,
                            ignoreDiscount: y = !0,
                            discountTooltipEnabled: w = !1,
                            plusIconShown: x = !0,
                        }) => {
                            const k = (0, g.t)(),
                                S = k.model,
                                N = (0, o.useRef)(null),
                                L = u === c.cJ.Tiny || u === c.cJ.Small,
                                O = S.totalItemsInstalled.get(),
                                P = Boolean(S.totalItemsInStorage.get()),
                                T = Boolean(S.demountKitsCount.get()),
                                I = s.G(S.price.get(), (e) => e.value > 0) || T,
                                R = L && P && I && x;
                            return l().createElement(
                                E.h.Provider,
                                { value: k },
                                l().createElement(
                                    'div',
                                    {
                                        className: a()(
                                            F.Z.base,
                                            u && F.Z[`base__${u}`],
                                            e && F.Z.base__renewal,
                                            n !== C.Row && F.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        l().createElement(
                                            'div',
                                            { className: a()(F.Z.renewal, n !== C.Row && F.Z.renewal__dialog) },
                                            l().createElement(m.Y, { renewType: e, onValueChanged: D, label: b }),
                                        ),
                                    l().createElement(
                                        d.f,
                                        { when: n === C.Row, canAccept: S.canAccept.get() },
                                        l().createElement(
                                            l().Fragment,
                                            null,
                                            Boolean(O) &&
                                                l().createElement(
                                                    r.i,
                                                    { body: h.tooltip.fromVehicle(), isEnabled: L },
                                                    l().createElement(
                                                        'div',
                                                        { className: a()(F.Z.storage, u && F.Z[`storage__${u}`]) },
                                                        !L &&
                                                            l().createElement(
                                                                'div',
                                                                { className: F.Z.from },
                                                                h.fromVehicle(),
                                                            ),
                                                        l().createElement(_.Y, {
                                                            location: 'vehicle',
                                                            count: O,
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            P &&
                                                l().createElement(
                                                    r.i,
                                                    { body: h.tooltip.fromStorage(), isEnabled: L },
                                                    l().createElement(
                                                        'div',
                                                        { className: a()(F.Z.storage, u && F.Z[`storage__${u}`]) },
                                                        !L &&
                                                            l().createElement(
                                                                'div',
                                                                { className: F.Z.from },
                                                                h.fromStorage(),
                                                            ),
                                                        l().createElement(_.Y, {
                                                            location: 'storage',
                                                            count: S.totalItemsInStorage.get(),
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            R && l().createElement('div', { className: F.Z.plus }),
                                            I &&
                                                l().createElement(
                                                    'div',
                                                    { className: a()(F.Z.totalPrice, R && F.Z.totalPrice__mixed) },
                                                    l().createElement(A.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: i,
                                                        messageHidden: L && n === C.Row,
                                                        ignoreDiscount: y,
                                                        discountTooltipEnabled: w,
                                                        priceSeparator: v,
                                                    }),
                                                ),
                                            t &&
                                                S.canAccept.get() &&
                                                l().createElement(
                                                    'div',
                                                    { className: F.Z.control },
                                                    l().createElement(p.Z, {
                                                        isDisabled: S.isDisabled.get(),
                                                        canCancel: S.canCancel.get(),
                                                        onCancel: () => B && B(),
                                                        onConfirm: () => f && f(),
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
                    i = u.n(s),
                    o = u(8175),
                    l = u(2306);
                const c = (0, r.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: t,
                        renewType: u = o.my.General,
                    }) => {
                        const r = (0, l.o)(),
                            c = r.model,
                            _ = r.controls,
                            d = c.dealPanel.get().isAutoRenewalEnabled,
                            m = (0, s.useCallback)(() => {
                                _.changeAutoRenewal(!d), t && t(!d);
                            }, [_, d, t]),
                            E = (0, s.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    t = e.header.$dyn(u),
                                    n = u === o.my.General ? '' : e.body.$dyn(u);
                                return { header: String(t || e.header.general()), body: n ? String(n) : void 0 };
                            }, [u]);
                        return i().createElement(
                            a.i,
                            E,
                            i().createElement(n.XZ, {
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
                u.d(t, { p: () => i });
                var n = u(3457),
                    a = u(7363),
                    r = u.n(a),
                    s = u(2527);
                const i = r().memo(({ applyBtnString: e, isDisabled: t, onConfirm: u, confirmButtonRef: a }) =>
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
                    i = u.n(s),
                    o = u(1957),
                    l = u(8099);
                const c = i().memo(
                    ({
                        applyBtnString: e = r.YR,
                        isDisabled: t,
                        canCancel: u,
                        onCancel: s,
                        onConfirm: c,
                        confirmButtonRef: _,
                    }) => {
                        const d = R.strings.tank_setup.dealPanel,
                            m = i().createElement(o.p, {
                                applyBtnString: e,
                                isDisabled: t,
                                onConfirm: c,
                                confirmButtonRef: _,
                            });
                        return i().createElement(
                            'div',
                            { className: l.Z.base },
                            t
                                ? i().createElement(
                                      a.i,
                                      { body: d.tooltip.notEnough() },
                                      i().createElement('div', null, m),
                                  )
                                : m,
                            i().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                i().createElement(
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
                    i = u(5178);
                const o = ['parentModelPath'];
                const l = (0, n.Pi)((e) => {
                    let t = e.parentModelPath,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, o);
                    const n = `${t}.dealPanel`;
                    return r().createElement(i.k, { options: { context: n } }, r().createElement(s.sF, u));
                });
            },
            6826: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7363),
                    s = u.n(r),
                    i = u(9683),
                    o = u(8401),
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
                                s().createElement(i.k, { value: m, size: 'large' }),
                                null != _ ? _ : s().createElement('div', { className: c.Z.plus }),
                            ),
                        s().createElement(o.t, {
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
                u.d(t, { k: () => o });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7363),
                    s = u.n(r);
                const i = {
                        base: 'DemountKit_base_b5',
                        icon: 'DemountKit_icon_27',
                        base__large: 'DemountKit_base__large_e1',
                        value: 'DemountKit_value_cd',
                    },
                    o = ({ value: e, size: t = 'small', className: u }) =>
                        0 === e
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: a()(i.base, i[`base__${t}`], u) },
                                  s().createElement('div', { className: i.value }, e),
                                  s().createElement('div', { className: i.icon }),
                              );
            },
            6391: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => o });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7363),
                    s = u.n(r);
                const i = {
                        base: 'Location_base_44',
                        base__countFirst: 'Location_base__countFirst_60',
                        icon: 'Location_icon_7f',
                        base__storage: 'Location_base__storage_bf',
                        base__vehicle: 'Location_base__vehicle_a9',
                        count: 'Location_count_45',
                        count__zero: 'Location_count__zero_f5',
                    },
                    o = ({ countFirst: e = !1, location: t, count: u }) =>
                        s().createElement(
                            'div',
                            { className: a()(i.base, i[`base__${t}`], e && i.base__countFirst) },
                            s().createElement('div', { className: i.icon }),
                            s().createElement('div', { className: a()(i.count, 0 === u && i.count__zero) }, u),
                        );
            },
            8401: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => p });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7405),
                    s = u(329),
                    i = u(7078),
                    o = u(5475),
                    l = u(9480),
                    c = u(7363),
                    _ = u.n(c);
                const d = 'Price_base_61',
                    m = 'Price_currency_ae',
                    E = 'Price_currency__discounted_a7',
                    p = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: u,
                        showZero: n = !1,
                        bigSize: p = !1,
                        ignoreDiscount: g = !1,
                        tooltipEnabled: A = !1,
                        className: F,
                        classNames: b,
                    }) => {
                        const C = (0, c.useMemo)(
                            () => ({ stock: null == b ? void 0 : b.discount }),
                            [null == b ? void 0 : b.discount],
                        );
                        return _().createElement(
                            'div',
                            { className: a()(d, F) },
                            l.UI(e, (e, d) => {
                                var F;
                                const h = null == (F = l.U2(t, d)) ? void 0 : F.value,
                                    D = !(g || ((f = e.value), (B = h), void 0 === B || f === B));
                                var f, B;
                                return (
                                    (n || Boolean(e.value)) &&
                                    _().createElement(
                                        c.Fragment,
                                        { key: `${e.value}-${e.name}-${e.isEnough}` },
                                        d > 0 && u,
                                        _().createElement(
                                            i.t,
                                            {
                                                args: {
                                                    tooltipId: o.e1,
                                                    currencyType: e.name,
                                                    price: e.value,
                                                    defPrice: h,
                                                },
                                                isEnabled: A && D,
                                            },
                                            _().createElement(
                                                'div',
                                                { className: a()(m, D && E, null == b ? void 0 : b.currency) },
                                                _().createElement(r.F, {
                                                    isDiscount: D,
                                                    size: p ? s.et.big : s.et.small,
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
            9152: (e, t, u) => {
                'use strict';
                u.d(t, { Sf: () => p });
                var n = u(6483),
                    a = u.n(n),
                    r = u(8089),
                    s = u(4598),
                    i = u(3815),
                    o = u(8526),
                    l = u(5521),
                    c = u(7727),
                    _ = u(7363),
                    d = u.n(_),
                    m = u(1922);
                const E = {
                        base: 'SetupApp_base_7b',
                        base__shown: 'SetupApp_base__shown_a0',
                        base__compare: 'SetupApp_base__compare_9d',
                        base__setup: 'SetupApp_base__setup_92',
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
                        panel: 'SetupApp_panel_42',
                        back: 'SetupApp_back_20',
                    },
                    p = ({
                        backgroundImage: e,
                        children: t,
                        panel: u,
                        button: n,
                        show: p = !0,
                        onAnimationDone: g = s.ZT,
                        type: A = 'setup',
                        onClose: F,
                    }) => {
                        const b = (0, m.GS)(),
                            C = (0, _.useRef)(null),
                            h = (0, _.useRef)(!1);
                        (0, o.gd)(l.n.ESCAPE, F),
                            (0, _.useEffect)(() => {
                                p && (h.current = !0), h.current && (0, c.G)('cons_select_view');
                            }, [p]);
                        const D = (0, i.z)(g);
                        return (
                            (0, _.useEffect)(() => {
                                const e = C.current;
                                if (e) {
                                    function t(e) {
                                        e.target === C.current && D();
                                    }
                                    return (
                                        e.addEventListener('animationend', t),
                                        () => {
                                            e.removeEventListener('animationend', t);
                                        }
                                    );
                                }
                            }, [D]),
                            d().createElement(
                                'div',
                                { className: a()(E.base, p && E.base__shown, E[`base__${A}`]) },
                                e &&
                                    d().createElement('div', {
                                        className: E.back,
                                        style: { backgroundImage: `url(${e})` },
                                    }),
                                n,
                                d().createElement(
                                    'div',
                                    { className: a()(E.close, b && E[`close__${b}`], !p && E.close__hidden) },
                                    d().createElement(r.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: F,
                                    }),
                                ),
                                d().createElement(
                                    'div',
                                    {
                                        id: 'setup-content',
                                        ref: C,
                                        className: a()(
                                            E.content,
                                            E[`content__${A}`],
                                            !p && !h.current && E.content__invisible,
                                            E['content__' + (p ? 'shown' : 'hidden')],
                                        ),
                                    },
                                    t,
                                ),
                                u && d().createElement('div', { className: E.panel }, u),
                            )
                        );
                    };
            },
            4814: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => p });
                var n = u(9480),
                    a = u(7363),
                    r = u.n(a),
                    s = u(1922),
                    i = u(6483),
                    o = u.n(i),
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
                        mediaSize: i,
                        isClickable: d,
                        onSpecializationClick: m,
                        index: E,
                    }) => {
                        const p = i !== s.cJ.None,
                            g = (0, a.useCallback)(() => {
                                d && u && m && m(E);
                            }, [E, d, u, m]),
                            A = (0, a.useMemo)(() => {
                                let u = '';
                                p && (u = (i === s.cJ.Large || i === s.cJ.Huge ? s.cJ.Large : s.cJ.Medium) + '_');
                                const n = `${u}${e}_${t ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, t, i, p]),
                            F = (0, a.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!A) return null;
                        const b = o()(
                                `specialization-${e}`,
                                _.base,
                                p && _[`base__${i}`],
                                u && _.base__setup,
                                t && _.base__correct,
                            ),
                            C = o()(_.icon, p && _[`icon__${i}`]),
                            h = p ? '' : _.specializationWrapper,
                            D = r().createElement(
                                'div',
                                { key: e, className: b },
                                r().createElement('div', { className: _.glow }),
                                r().createElement('div', { className: C, style: A }),
                            );
                        return r().createElement(
                            c.t,
                            { args: F },
                            d && u
                                ? r().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: g,
                                      },
                                      D,
                                  )
                                : r().createElement('div', { className: h }, D),
                        );
                    },
                    m = 'Specializations_base_ab';
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
                const p = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: u,
                    mediaSize: a = s.cJ.None,
                    activeSpecsMask: i,
                    onSpecializationClick: o,
                }) =>
                    e.length
                        ? r().createElement(
                              'div',
                              { className: m, key: i },
                              n.UI(e, (e, n) =>
                                  r().createElement(
                                      d,
                                      E({ index: n, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: u,
                                          mediaSize: a,
                                          onSpecializationClick: o,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            5475: (e, t, u) => {
                'use strict';
                u.d(t, { e1: () => s, rY: () => a, v$: () => n, yr: () => r });
                const n = 'tankman',
                    a = 'hangarModule',
                    r = 'techMainShell',
                    s = 'priceDiscount';
            },
            7383: (e, t, u) => {
                'use strict';
                u.d(t, { YR: () => n });
                const n = 'apply';
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
            7476: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            1960: () => {
                'use strict';
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
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], r = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 473),
        (() => {
            var e = { 473: 0, 826: 0, 225: 0, 376: 0, 745: 0, 490: 0, 723: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, s, i] = u,
                        o = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); o < r.length; o++)
                        (a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(2223));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
